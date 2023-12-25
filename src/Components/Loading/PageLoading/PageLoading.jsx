import GifLoader from '@Assets/gifs/potted-plant-loader.gif';

import './PageLoading.scss';

export default function PageLoading() {
  return (
    <div className="page-loading">
      <img className="page-loading__gif" alt="loading-gif" src={GifLoader} />
    </div>
  );
}
