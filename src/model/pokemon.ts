export interface NamedAPIResourceList {
  count:number
  next:string
  previous:string
  results:NamedAPIResource[]
}
export interface NamedAPIResource {
  name: string,
  url:string,
}
export interface APIResource {
  url:string,
}

export interface PokemonSpeciesDexEntry  {
  entry_number:number,
  pokedex:NamedAPIResource
}

export type Name = {
  name:string,
  language:NamedAPIResource
}
export type PalParkEncounterArea = {
  base_score:number,
  rate:number,
  area:NamedAPIResource
}
export type FlavorText = {
  flavor_text:string,
  language:NamedAPIResource, // Language
  version:NamedAPIResource
}
export type Description  = {
  description:string,
  language:NamedAPIResource, // Language
}
export type Genus  = {
  genus:string,
  language:NamedAPIResource, // Language
}
export type PokemonSpeciesVariety = {
  is_default:boolean,
  pokemon:NamedAPIResource, // Pokemon
}
export type PokemonAbility = {
  is_hidden:boolean,
  slot:number,
  ability:NamedAPIResource, // Ability
}
export type VersionGameIndex = {
  game_index:number,
  version:NamedAPIResource, // Version
}
export type PokemonHeldItemVersion  = {
  version:NamedAPIResource, // Version
  rarity:number,
}

export type PokemonHeldItem  = {
  item:NamedAPIResource, // Item
  version_details:PokemonHeldItemVersion[], // Item
}
export type PokemonMoveVersion = {
  move_learn_method:NamedAPIResource // MoveLearnMethod
  version_group:NamedAPIResource // VersionGroup
  level_learned_at:number
}
export type PokemonMove = {
  move:NamedAPIResource, // Move
  version_group_details:PokemonMoveVersion[],
}
export interface PokemonType {
  slot:number
  type:NamedAPIResource // Type
}
export type PokemonTypePast = {
  generation:NamedAPIResource, // Generation
  types:PokemonType[],
}
export type PokemonSprites = {
  front_default:string,
  front_shiny:string,
  front_female:string,
  front_shiny_female:string,
  back_default:string,
  back_shiny:string,
  back_female:string,
  back_shiny_female:string,
}
export type PokemonCries  = {
  latest:string,
  legacy:string,
}
export type PokemonStat   = {
  stat:NamedAPIResource, //Stat
  effort:number,
  base_stat:number
}
export interface Pokemon {
  id:number,
  name:string,
  base_experience:number,
  height:number,
  is_default:boolean,
  order:number,
  weight:number,
  abilities:PokemonAbility[],
  forms:NamedAPIResource[], // PokemonForm
  game_indices:VersionGameIndex[],
  held_items:PokemonHeldItem[],
  location_area_encounters:string,
  moves:PokemonMove[],
  past_types:PokemonTypePast[],
  sprites:PokemonSprites,
  cries:PokemonCries,
  species:NamedAPIResource,//PokemonSpecies
  stats:PokemonStat[],//PokemonSpecies
  types:PokemonType[],//PokemonSpecies
}
export interface PokemonSpecies  {
  id:number,
  name:string,
  order:number,
  gender_rate:number,
  capture_rate:number,
  base_happiness:number,
  is_baby:boolean,
  is_legendary:boolean,
  is_mythical:boolean,
  hatch_counter:number,
  has_gender_differences:boolean,
  forms_switchable:boolean,
  growth_rate:NamedAPIResource,
  pokedex_numbers:PokemonSpeciesDexEntry,
  egg_groups:NamedAPIResource,
  color:NamedAPIResource
  shape:NamedAPIResource
  evolves_from_species:NamedAPIResource
  evolution_chain:APIResource
  habitat:NamedAPIResource
  generation:NamedAPIResource
  names:Name[]
  pal_park_encounters:PalParkEncounterArea[]
  flavor_text_entries:FlavorText[]
  form_descriptions:Description[]
  genera:Genus[]
  varieties:PokemonSpeciesVariety[]
}
type EvolutionDetail = {
  item:NamedAPIResource, // item
  trigger:NamedAPIResource, // EvolutionTrigger
  gender:number,
  held_item:NamedAPIResource, // item
  known_move:NamedAPIResource, // move
  known_move_type:NamedAPIResource, // type
  location:NamedAPIResource, // location
  min_level:number,
  min_happiness:number,
  min_beauty:number,
  min_affection:number,
  needs_overworld_rain:number,
  party_species:NamedAPIResource, // PokemonSpecies
  party_type:NamedAPIResource, // type
  relative_physical_stats:number,
  time_of_day:string,
  trade_species:NamedAPIResource, // PokemonSpecies
  turn_upside_down:boolean,
}

export type ChainLink = {
  is_baby: boolean,
  species:NamedAPIResource
  evolution_details: EvolutionDetail[],
  evolves_to: ChainLink[]
}
export interface EvolutionChain {
  id: number,
  baby_trigger_item: NamedAPIResource, // item
  chain:ChainLink
}

// UI 구성 모델
export interface PokemonViewModel {
  id:number,
  name:string,
  base_experience:number,
  height:number,
  is_default:boolean,
  order:number,
  weight:number,
  abilities:PokemonAbility[],
  forms:NamedAPIResource[], // PokemonForm
  game_indices:VersionGameIndex[],
  held_items:PokemonHeldItem[],
  location_area_encounters:string,
  moves:PokemonMove[],
  past_types:PokemonTypePast[],
  sprites:PokemonSprites,
  cries:PokemonCries,
  species:NamedAPIResource,//PokemonSpecies
  stats:PokemonStat[],//PokemonSpecies
  types:PokemonType[],//PokemonSpecies

  ko_name?:string,
  evolution_chain?:string
}
export interface EvolutionChainViewModel {
  id:number,
  name:string,
  ko_name?:string,
}