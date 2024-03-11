
import {getDetail} from "@/src/service/pokemon/usePokemonService";
import {getQueryClient} from "@/src/utils/react-query";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import PokemonDetailContents from "@/src/components/detail/PokemonDetailContents";
import {notFound} from "next/navigation";

export default async function Page({params}: { params: { id: string } }) {
  const queryClient = getQueryClient();
  const result = await queryClient.fetchQuery({
    queryKey:['pokemon',params.id],
    queryFn: () => getDetail(params.id)
  })
  if (!result) return notFound()

  const { queries } = dehydrate(queryClient);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={'w-full'}>
        <p>pokemon detail</p>
        <HydrationBoundary state={{ queries: queries }}>
          <PokemonDetailContents id={params.id} />
        </HydrationBoundary>
      </div>
    </main>
  );
}
