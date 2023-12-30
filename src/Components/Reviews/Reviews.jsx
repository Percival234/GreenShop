import ReviewList from '@Components/Reviews/ReviewList';
import ReviewForm from '@Components/Reviews/ReviewForm';

import './Reviews.scss';

export default function Reviews() {
  return (
    <div className="reviews">
      <ReviewList />
      <ReviewForm />
    </div>
  );
}
