'use client'

import EvolutionChainItem from "@/src/components/detail/EvolutionChainItem";
import {useDetail} from "@/src/service/pokemon/usePokemonService";
import Loading from "@/src/components/common/Loading";

type PokemonDetailContentsProps = {
	id:string
}

const PokemonDetailContents: React.FC<PokemonDetailContentsProps> = ({id}) => {
	const {data:pokemon,isLoading,isError} = useDetail(id)
  if(isLoading) return <Loading />
  if(isError ||!pokemon) return (<div>
    <p>포켓몬 상세 정보를 불러오는 도중 오류가 발생했습니다.</p>
    <button onClick={() => window.location.reload()}>페이지 다시 로드</button>
  </div>)
	return <ul className={'w-full'}>
          <li>
            <dl className={'grid grid-cols-3'}>
              <dt className={''}>id</dt>
              <dd className={'col-span-2'}>{pokemon.id}</dd>
            </dl>
          </li>
          <li className={'flex'}>
            <img src={pokemon.sprites.front_default} alt={pokemon?.ko_name || pokemon.name + '앞모습'} />
            <img src={pokemon.sprites.back_default} alt={pokemon?.ko_name || pokemon.name + '뒷모습'} />
          </li>
          <li>
            <dl className={'grid grid-cols-3'}>
              <dt>이름</dt>
              <dd className={'col-span-2'}>{pokemon?.ko_name || pokemon.name}{pokemon?.ko_name ? `(${pokemon.name})` : ''}</dd>
            </dl>
          </li>
          <li>
            <dl className={'grid grid-cols-3'}>
              <dt>처치시 경험치</dt>
              <dd className={'col-span-2'}>{pokemon.base_experience}</dd>
            </dl>
          </li>
          <li>
            <dl className={'grid grid-cols-3'}>
              <dt>신장(m)</dt>
              <dd className={'col-span-2'}>{(pokemon.height * 0.1).toFixed(1)}</dd>
            </dl>
          </li>
          <li>
            <dl className={'grid grid-cols-3'}>
              <dt>체중(kg)</dt>
              <dd className={'col-span-2'}>{(pokemon.weight * 0.1).toFixed(1)}</dd>
            </dl>
          </li>
          <li>
            <dl className={'grid grid-cols-3'}>
              <dt>order</dt>
              <dd className={'col-span-2'}>{pokemon.order}</dd>
            </dl>
          </li>
          <li>
            <dl className={'grid grid-cols-3'}>
              <dt>특성</dt>
              <dd className={'col-span-2'}>{pokemon.abilities.map((ab,i) => (
                <p key={`pokemon-abilities-${i}`}>{ab.ability.name}{ab.is_hidden && (<>*</>)}&nbsp;</p>
              ))}</dd>
            </dl>
          </li>
          <li>
            <dl className={'grid grid-cols-3'}>
              <dt>past_types</dt>
              <dd className={'col-span-2'}>{pokemon.past_types.map((pt,i) => (
                <div key={`pokemon-past-type-${i}`}>
                  <p>
                    <em>generation name:</em>
                    <span>{pt.generation.name}</span>
                  </p>
                  {pt.types.map((t,j) => (
                    <div key={`pokemon-generation-type-${j}`}>
                      <p>
                        <em>type name:</em>
                        <span>{t.slot}</span>
                      </p>
                      <p>
                        <em>slot:</em>
                        <span>{t.slot}</span>
                      </p>
                    </div>
                  ))}
                </div>
              ))}</dd>
            </dl>
          </li>
          <li>
            <dl className={'grid grid-cols-3'}>
              <dt>울음소리</dt>
              <dd className={'col-span-2'}>
                <audio controls>
                  <source src={pokemon.cries.latest} type="audio/ogg" />
                  <p>
                    Download
                    <a href={pokemon.cries.latest} download={pokemon.cries.latest}>OGG</a> audio.
                  </p>
                </audio>
              </dd>
            </dl>
          </li>
          <li>
            <dl className={'grid grid-cols-3'}>
              <dt>stats</dt>
              <dd className={'grid  grid-cols-6 col-span-2'}>
                {pokemon.stats.map((st,i) => (
                  <div key={`pokemon-stat-${i}`}>
                    <p className={'text-center'}>
                      {st.stat.name}(effort)
                    </p>
                    <p className={'text-center'}>
                      {st.base_stat} ({st.effort})
                    </p>
                  </div>
                ))}
              </dd>
            </dl>
          </li>
          <li>
            <dl className={'grid grid-cols-3'}>
              <dt>types</dt>
              <dd>
                {pokemon.types.map((ty,i) => (
                <p key={`pokemon-type-${i}`}>
                  {ty.type.name} {ty.slot}
                </p>
              ))}</dd>
            </dl>
          </li>
          {pokemon.evolution_chain && <EvolutionChainItem url={pokemon.evolution_chain} />}
          <li>
            <dl className={'grid grid-cols-3'}>
              <dt>forms</dt>
              <dd className={'col-span-2'}>{pokemon.forms.map((f,i) => (
                // <a key={`pokemon-forms-${i}`} href={f.url} target={'_blank'} className={'underline underline-offset-4'}>{f.name}</a>
                <p key={`pokemon-forms-${i}`}>{f.name}</p>
              ))}</dd>
            </dl>
          </li>
          <li>
            <dl className={'grid grid-cols-3'}>
              <dt>held_items</dt>
              <dd className={'col-span-2'}>{pokemon.held_items.map((hi,i) => (
                // <a key={`pokemon-held-item-${i}`} href={hi.item.url} target={'_blank'} className={'underline underline-offset-4'}>{hi.item.name} </a>
                <p key={`pokemon-held-item-${i}`}>{hi.item.name}</p>
              ))}</dd>
            </dl>
          </li>
          {/*<li>
            <dl className={'grid grid-cols-3'}>
              <dt>location_area_encounters</dt>
              <dd className={'col-span-2'}>{pokemon.location_area_encounters}</dd>
            </dl>
          </li>*/}
          <li>
            <dl className={'grid grid-cols-3'}>
              <dt>기술</dt>
              <dd className={'col-span-2'}>{pokemon.moves.map((m,i) => (<span key={`pokemon-move-${i}`}>
                {m.move.name}&nbsp;
              </span>))}</dd>
            </dl>
          </li>

        </ul>
}

export default PokemonDetailContents