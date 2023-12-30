import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Error from '@Components/Error/Error';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import RelatedSlider from '@Components/Related/RelatedSlider';
import LocalLoading from '@Components/Loading/LocalLoading/LocalLoading';

import { fetchRelated } from '@API/API';

import './Related.scss';

function Related({ category }) {
  const { productId } = useParams();

  const {
    data: related,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['related'],
    queryFn: () => fetchRelated(category._id, productId),
  });

  if (isPending) return <LocalLoading />;
  if (isError) return <Error error={error} />;

  return (
    <div className="related">
      <div className="related__container">
        <TitleBorder>Related Products</TitleBorder>
        <RelatedSlider related={related.products} />
      </div>
    </div>
  );
}

Related.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Related;
