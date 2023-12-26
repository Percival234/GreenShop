// import { BsStarFill } from 'react-icons/bs';
// import './Rating.scss';

// export default function Rating({ rating }) {
//   let formatedRating = '';
//   // if (typeof reviews === 'number') {
//   //   rating = reviews;
//   // } else {
//   //   rating = reviews.map((el) => el.rating).reduce((acc, el) => acc + el, 0) / reviews.length;
//   //   formatedRating = Number.isInteger(rating) ? `${rating}.0` : +rating.toFixed(1);
//   // }
//   const ratingOverlayWidth = `${100 - (rating / 5) * 100}%`;

//   return (
//     <div className="rating">
//       <div className="rating__stars">
//         <div className="rating__overlay" style={{ width: ratingOverlayWidth }}></div>
//         <BsStarFill className="rating__star" />
//         <BsStarFill className="rating__star" />
//         <BsStarFill className="rating__star" />
//         <BsStarFill className="rating__star" />
//         <BsStarFill className="rating__star" />
//       </div>
//       <div className="rating__number">{formatedRating}</div>
//     </div>
//   );
// }
