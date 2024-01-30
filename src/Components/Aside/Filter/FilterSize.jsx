import { useQuery } from '@tanstack/react-query';

import TitleItem from '@UI/Titles/TitleItem/TitleItem';
import FilterCritery from '@Components/Aside/Filter/FilterCritery';
import ServerError from '@Components/Error/ServerError/ServerError';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';

import { fetchSizes } from '@API/API';

export default function FilterSize() {
  const { data: sizes, isPending, error } = useQuery({ queryKey: ['size'], queryFn: fetchSizes });

  if (isPending) return <PageLoading />;
  if (error) return <ServerError error={error} />;

  return (
    <div className="filter__form">
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
    </div>
  );
}
