import {NamedAPIResource} from "@/src/model/pokemon";

type PokemonItemProps = {
	pokemon:NamedAPIResource
}
export default function PokemonItem({pokemon}:PokemonItemProps) {
	const host = 'http://localhost:3000'
	const id = pokemon.url.substring(34)
	return <li className="h-10 flex justify-center items-center">
		<a href={`${host}/${id}`}>{pokemon.name}</a>
	</li>
}