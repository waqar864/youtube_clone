"use client";

import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { FilterCarousel } from "@/components/filter-carousel";


interface CategoriesSectionProps {
    categoryId?: string;
}

export const CategoriesSection =({ categoryId }: CategoriesSectionProps) =>{
    return (
        <Suspense fallback={<FilterCarousel isLoading data={[]} onSelect={()=>{}} />}>
            <ErrorBoundary fallback={<div>Error...</div>}>
            <CategoriesSectionSuspense categoryId={categoryId} />
            </ErrorBoundary>
        </Suspense>
    )

}
export const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
    const [categories] = trpc.categories.getMany.useSuspenseQuery();
    const data = categories.map(({name,id}) => ({
        value:id,
        label:name,
    }))
    //console.log(data);
  
    return <FilterCarousel onSelect={(value) => console.log(value)} value={categoryId} data={data}/>;
  };