import LinkUnderline from '@UI/Links/LinkUnderline/LinkUnderline';
import './NotFoundPage.scss';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found__text">Not Found 404!</div>
      <LinkUnderline to="/">Go to home page</LinkUnderline>
    </div>
  );
}
