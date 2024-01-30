import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import ServerError from '@Components/Error/ServerError/ServerError';
import LocalLoading from '@Components/Loading/LocalLoading/LocalLoading';
import RelatedSlider from '@Components/Related/RelatedSlider/RelatedSlider';

import { fetchRelated } from '@API/API';

import './Related.scss';

function Related({ category }) {
  const { productId } = useParams();

  const {
    data: related,
    isPending,
    error,
  } = useQuery({
    queryKey: ['related'],
    queryFn: () => fetchRelated(category._id, productId),
  });

  if (isPending) return <LocalLoading />;
  if (error) return <ServerError error={error} />;

  return (
    <div className="related">
      <TitleBorder>Related Products</TitleBorder>
      <RelatedSlider related={related.products} />
    </div>
  );
}

Related.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Related;
