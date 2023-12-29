import './Slide.scss';

export default function Slide({ banner }) {
  return (
    <div className="slider-slide">
      <img src={banner} alt="banner" />
    </div>
  );
}
