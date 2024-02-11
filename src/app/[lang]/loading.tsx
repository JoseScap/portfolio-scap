import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-5xl w-11/12 mx-auto">
        <div className="flex flex-col pt-24 pb-20 lg:py-32 gap-8 justify-center">
          <div className="space-y-4">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-12 lg:16" />
            <Skeleton className="w-full h-24 lg:h-32" />
            <Skeleton className="w-full h-24 lg:h-32" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="w-[160px] h-12" />
              <Skeleton className="w-[160px] h-12" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
