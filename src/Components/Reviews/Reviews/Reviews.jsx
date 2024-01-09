import ReviewList from '@Components/Reviews/ReviewList/ReviewList';
import ReviewForm from '@Components/Reviews/ReviewForm/ReviewForm';

import './Reviews.scss';

export default function Reviews() {
  return (
    <div className="reviews">
      <ReviewList />
      <ReviewForm />
    </div>
  );
}
