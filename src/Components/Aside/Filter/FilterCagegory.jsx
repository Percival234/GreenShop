import { useQuery } from '@tanstack/react-query';

import TitleItem from '@UI/Titles/TitleItem/TitleItem';
import FilterCritery from '@Components/Aside/Filter/FilterCritery';
import ServerError from '@Components/Error/ServerError/ServerError';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';

import { fetchCategories } from '@API/API';

export default function FilterCategory() {
  const {
    data: categories,
    isPending,
    error,
  } = useQuery({ queryKey: ['category'], queryFn: fetchCategories });

  if (isPending) return <PageLoading />;
  if (error) return <ServerError error={error} />;

  return (
    <div className="filter__form">
      <TitleItem>Categories</TitleItem>
      {categories.map((category) => (
        <FilterCritery
          key={category._id}
          title={category.category}
          count={category.count}
          id={category._id}
          param="categories"
        />
      ))}
    </div>
  );
}
