"use client";

import {NamedAPIResource} from "@/src/model/pokemon";
import {usePokemon} from "@/src/service/pokemon/usePokemonService";
import React, {useCallback, useRef, useState} from "react";
import useIntersectionObserver from "@/src/hooks/useIntersectionObserver";
import {useRouter} from "next/navigation";
import PokemonItem from "@/src/components/pokemonItem";
import Loading from "@/src/components/loading";

export function PokemonList() {
	const { data: pokemon,
		fetchNextPage,
		hasNextPage,
		isLoading,
		isError
	} = usePokemon();
  const scrollbar = useRef(null);
  const loadMoreButtonRef = useRef(null);

  useIntersectionObserver({
    root: scrollbar.current,
    target: loadMoreButtonRef,
    onIntersect: hasNextPage && fetchNextPage,
    enabled: hasNextPage,
  });

	// input
	const [keyword, setKeyword] = useState<string>('');
	const router = useRouter()
	const handleKeywordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(e.target.value);
	},[])
	const searchKeyword = useCallback(
		() => {
			return router.push('/'+keyword)
		},
		[keyword],
	);

	if(isLoading) return <Loading />
	if(isError) return (<div>
    <p>포켓몬 정보를 불러오는 도중 오류가 발생했습니다.</p>
    <button onClick={() => window.location.reload()}>페이지 다시 로드</button>
  </div>)
	return <div>
		<div>
			<input type={'search'} name={'search'} id={'keyword'} value={keyword} onChange={handleKeywordChange} />
			<button onClick={searchKeyword}>검색</button>
		</div>
		<ul>
			{pokemon?.pages?.map((page,i) => (<div key={`pokemonpage-${i}`}>
				{page.results?.map((pokemon:NamedAPIResource, idx: number) => <PokemonItem key={`pokemon-${idx}`} pokemon={pokemon} />)}
			</div>))}
			{hasNextPage && <div ref={loadMoreButtonRef}><Loading /></div>}
		</ul>
	</div>
}
