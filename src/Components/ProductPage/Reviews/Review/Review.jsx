// import './Review.scss';

// import { HiThumbUp, HiOutlineThumbUp } from 'react-icons/hi';

// import Rating from '../../../Rating/Rating/Rating';
// import ButtonSmall from '../../../UI/Buttons/ButtonSmall/ButtonSmall';

// export default function Review({ review: { user, userImage, sentDate, rating, post, likes } }) {
//   return (
//     <div className="review">
//       <div className="review__header">
//         <div className="review__info">
//           <div className="review__image-container">
//             <img src={userImage} alt="user" className="review__image" />
//           </div>
//           <div className="review__author">{userName}</div>
//           <Rating reviews={rating} />
//         </div>
//         <div className="review__date">{sentDate}</div>
//       </div>
//       <p>{post}</p>
//       <div className="review__likes">
//         <div className="review__count">{likes.length}</div>
//         <ButtonSmall>
//           <HiOutlineThumbUp />
//         </ButtonSmall>
//       </div>
//     </div>
//   );
// }

// // не можна лишати коментарі якщо уже лишив, треба видалити старий
// // не можна писати коментарі незареєстрованим або не авторизованим
// // організувати систему лайків, лацки не можна ставити коли не авторизований
// // видалення лайків
// // видалення посту для тих хто добавив пост
