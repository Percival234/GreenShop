import { useQuery } from '@tanstack/react-query';

import Error from '@Components/Error/Error';
import TitleItem from '@UI/Titles/TitleItem/TitleItem';
import FilterCritery from '@Components/Aside/Filter/FilterCritery';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';

import { fetchSizes } from '@API/API';

export default function FilterSize() {
  const {
    data: sizes,
    isPending,
    isError,
    error,
  } = useQuery({ queryKey: ['size'], queryFn: fetchSizes });

  if (isPending) return <PageLoading />;
  if (isError) return <Error error={error} />;
  return (
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
  );
}
