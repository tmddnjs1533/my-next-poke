import {useEvolutionChain} from "@/src/service/pokemon/usePokemonService";

type EvolutionChainItemProps = {
	url:string
}

export default function EvolutionChainItem({url}:EvolutionChainItemProps) {
	const {data:evolutionChain,isLoading,isError} = useEvolutionChain(url)
	if (isLoading) return (<p className="text-gray-500">...</p>);
	if (isLoading || isError || !evolutionChain) return (<p className="text-gray-500">(조회된 진화 정보가 없습니다.)</p>);
	return (<li>
		<dl className={'grid grid-cols-3'}>
			<dt>진화 정보</dt>
			<dd className={'flex col-span-2'}>
				{evolutionChain.map((item,i) => (
					<div key={`pokemon-evolution-chain-${i}`}>
						<a href={`/${item.name}`} target="_blank" className="bg-sky-200">
						{item?.ko_name || item.name}{item?.ko_name ? `(${item.name})` : ''}
					</a>
						<span>{i < evolutionChain.length-1 ? ` / ` : ''}&nbsp;</span>
					</div>

				))}
			</dd>
		</dl>
	</li>)
}