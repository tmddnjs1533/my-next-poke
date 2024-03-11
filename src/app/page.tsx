import {PokemonList } from "@/src/components/PokemonList";
import {
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';
import {getQueryClient} from "@/src/utils/react-query";
import {getPokemon} from "@/src/service/pokemon/usePokemonService";

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey:['pokemon'],
    queryFn:({pageParam}) => getPokemon(pageParam),
    initialPageParam:1,
  })
  const { queries } = dehydrate(queryClient);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>Welcome! my-pokemon</p>
        <HydrationBoundary state={{ queries: queries }}>
          <PokemonList />
        </HydrationBoundary>
      </div>
    </main>
  );
}
