import { useQuery } from '@tanstack/react-query';

import Error from '@Components/Error/Error';
import TitleItem from '@UI/Titles/TitleItem/TitleItem';
import FilterPrice from '@Components/Aside/Filter/FilterPrice';
import FilterCritery from '@Components/Aside/Filter/FilterCritery';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';

import { fetchCategories, fetchSizes } from '@API/API';

import './Filter.scss';

export default function Filter() {
  const {
    data: categories,
    isPending: categoriesIsPending,
    isError: categoriesIsError,
    error: categoriesError,
  } = useQuery({ queryKey: ['category'], queryFn: fetchCategories });
  const {
    data: sizes,
    isPending: sizesIsPending,
    isError: sizesIsError,
    error: sizesError,
  } = useQuery({ queryKey: ['size'], queryFn: fetchSizes });

  if (categoriesIsPending || sizesIsPending) return <PageLoading />;
  if (categoriesIsError || sizesIsError) return <Error error={categoriesError || sizesError} />;

  return (
    <div className="filter">
      <fieldset className="filter__form">
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
      </fieldset>
      <FilterPrice />
      <fieldset className="filter__form">
        <TitleItem>Sizes</TitleItem>
        {sizes.map((size) => (
          <FilterCritery
            key={size._id}
            title={size.size}
            count={size.count}
            id={size._id}
            param="sizes"
          />
        ))}
      </fieldset>
    </div>
  );
}
