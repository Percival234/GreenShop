import './ButtonLoading.scss';

export default function ButtonLoading() {
  return (
    <div className="button-loading">
      <div className="button-loading__spiner"></div>
      <div>Processing...</div>
    </div>
  );
}
