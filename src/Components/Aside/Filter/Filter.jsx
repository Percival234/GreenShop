import FilterSale from '@Components/Aside/Filter/FilterSale';
import FilterSize from '@Components/Aside/Filter/FilterSize';
import FilterPrice from '@Components/Aside/Filter/FilterPrice';
import FilterAvailable from '@Components/Aside/Filter/FilterAviable';
import FilterCategory from '@Components/Aside/Filter/FilterCagegory';

import './Filter.scss';

export default function Filter() {
  return (
    <div className="filter">
      <FilterCategory />
      <FilterSize />
      <FilterSale />
      <FilterAvailable />
      <FilterPrice />
    </div>
  );
}
