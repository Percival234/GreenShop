import { createPortal } from 'react-dom';

import GifLoader from '@Assets/gifs/potted-plant-loader.gif';

import './PageLoading.scss';

export default function PageLoading() {
  return createPortal(
    <div className="page-loading">
      <img className="page-loading__gif" alt="loading-gif" src={GifLoader} />
    </div>,
    document.getElementById('loading')
  );
}
