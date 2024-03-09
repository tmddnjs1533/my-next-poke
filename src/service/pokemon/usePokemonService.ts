import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {
	ChainLink,
	EvolutionChain, EvolutionChainViewModel,
	NamedAPIResource,
	NamedAPIResourceList,
	Pokemon,
	PokemonSpecies, PokemonViewModel
} from "@/src/model/pokemon";
import { notFound } from 'next/navigation'
// 포켓못 목록 조회
export async function getPokemon<T = unknown>(pageParam:number|undefined = 0) {
	try {
		const page = Math.round(pageParam-1)*20
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`)
		if (!res.ok) {
			throw new Error('데이터를 가져오는 데 실패했습니다.')
		}
		const responseData: T = await res.json();
		return responseData;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}

export function usePokemon() {
	return useInfiniteQuery({
		getNextPageParam: (lastPage:NamedAPIResourceList,_,lastPageParam:number) => lastPage.next ? lastPageParam+1 : null,
		initialPageParam: 1,
		queryKey:['pokemon'],
		queryFn: ({ pageParam = 0 }) => getPokemon(pageParam),
	})
}

// 포켓몬 상세 정보 조회 - 한국 이름 조회
async function fetchSpecies(speciesUrl: string): Promise<{ko_name?:string,evolution_chain?:string}> {
	try {
		const speciesResponse = await fetch(speciesUrl);
		if (!speciesResponse.ok) {
				throw new Error('데이터를 가져오는 데 실패했습니다.');
		}
		const species: PokemonSpecies = await speciesResponse.json();
		const ko_name = species.names?.find((name) => name.language.name === 'ko');
		return {
			ko_name:ko_name?.name,
			evolution_chain:species.evolution_chain.url
		};
	} catch (error) {
		console.error('Error:', error);
		return {ko_name:undefined,evolution_chain:undefined};
	}
}
// 포켓몬 상세 정보 조회
export async function getDetail(id: string): Promise<PokemonViewModel | null> {
	try {
		const detailResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		if (!detailResponse.ok) {
			return null
			// if (detailResponse.status === 404) {
			// 	throw new Error('404');
			// } else {
			// 	throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.');
			// }
			// throw new Error('상세 데이터를 가져오는 데 실패했습니다.');
		}
		const detail: Pokemon = await detailResponse.json();
		const {ko_name,evolution_chain} = await fetchSpecies(detail?.species?.url);
		return {
			...detail,
			ko_name,
			evolution_chain
		};
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}
export function useDetail(id:string) {
	return useQuery({
		queryKey:['pokemon',id],
		queryFn: () => getDetail(id),
		retry:0,
	})
}

// 포켓몬 진화 트리 조회
function makeEvolutionChainArray(evolutionChain:EvolutionChain | undefined) {
  const speciesArray:NamedAPIResource[] = [];

  if (!evolutionChain) return speciesArray

  function extractSpecies(chain:ChainLink) {
    speciesArray.push(chain.species);
    if (chain.evolves_to.length > 0) {
      chain.evolves_to.forEach(nextChain => {
        extractSpecies(nextChain);
      });
    }
  }

  extractSpecies(evolutionChain.chain);
  return speciesArray;
}
export async function getEvolutionChain(url:string):Promise<EvolutionChainViewModel[]> {
	try {
		const res = await fetch(url)
		if (!res.ok) {
			throw new Error('데이터를 가져오는 데 실패했습니다.')
		}
		const data = await res.json()
		const arr = makeEvolutionChainArray(data)
		const promises:Promise<PokemonSpecies>[] = arr.map(async (item) => {
			const res = await fetch(item.url)
			if (!res.ok) {
				throw new Error(`포켓몬 상세 정보를 가져오는 데 실패했습니다. URL: ${url}`);
			}
			return res.json();
		})
		const results = await Promise.all(promises);
		// return res.json()
		return results.map(item => {
			const ko_name = item.names.find((name) => name.language.name === 'ko')
			return {
				id: item.id,
				name: item.name,
				ko_name: ko_name?.name
			}
		})
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
}
// 포켓몬 진화 트리 조회
export function useEvolutionChain(url:string) {
	return useQuery({
		queryKey:['pokemon','evolution',{url}],
		queryFn: () => getEvolutionChain(url),
	})
}