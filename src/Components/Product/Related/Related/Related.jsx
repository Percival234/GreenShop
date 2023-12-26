import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './Related.scss';

import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import RelatedSlide from '@Components/ReladerSlide/RelatedSlide';

function Related({ category }) {
  const sliderLineRef = useRef(null);
  console.log(category);

  const [state, setState] = useState({
    relatedArrays: [],
    relatedPerSlide: 0,
    activeSlide: 0,
    documentWidth: window.innerWidth,
    touchPosition: null,
  });

  // useEffect(() => {
  //   const interval = setInterval(() => changeSlide(state.activeSlide + 1), 2500);
  //   return () => clearInterval(interval);
  // });

  // useEffect(() => {
  //   const relatedPerSlide = Math.floor(sliderLineRef.current?.offsetWidth / 250);
  //   const slides = Math.ceil(related.length / relatedPerSlide);

  //   const relatedArrays = Array.from({ length: slides }, (_, slideIndex) => {
  //     const startIndex = slideIndex * relatedPerSlide;
  //     return related.slice(startIndex, startIndex + relatedPerSlide);
  //   });

  //   setState((prev) => ({
  //     ...prev,
  //     relatedPerSlide,
  //     relatedArrays,
  //   }));
  // }, [state.documentWidth, state.relatedPerSlide, related]);

  // useEffect(() => {
  //   const debouncedHandleResize = debounce(() => {
  //     setState((prev) => ({
  //       ...prev,
  //       documentWidth: window.innerWidth,
  //     }));
  //   }, 350);

  //   window.addEventListener('resize', debouncedHandleResize);
  //   return () => {
  //     window.removeEventListener('resize', debouncedHandleResize);
  //   };
  // });

  // if (error) return 'error';
  // if (loading) return 'Loading';

  function sliderNavigationHandler(index) {
    setState((prev) => ({
      ...prev,
      activeSlide: index,
    }));
  }

  function changeSlide(index = state.activeSlide) {
    setState((prev) => ({
      ...prev,
      activeSlide: index % state.relatedArrays.length,
    }));
  }

  function handleTouchStart(e) {
    setState((prev) => ({
      ...prev,
      touchPosition: e.touches[0].clientX,
    }));
  }

  function handleTouchMove(e) {
    if (state.touchPosition === null) return;

    const direction = state.touchPosition - e.touches[0].clientX;
    let activeIndex = state.activeSlide;

    if (direction > 10) activeIndex++;
    else if (direction < -10) activeIndex--;

    if (activeIndex < 0) activeIndex = state.relatedArrays.length - 1;

    changeSlide(activeIndex);

    setState((prev) => ({
      ...prev,
      touchPosition: null,
    }));
  }

  return (
    <div className="related">
      <div className="related__container">
        <TitleBorder>Related Products</TitleBorder>
        <div className="related__slider">
          <div
            ref={sliderLineRef}
            style={{
              transform: `translateX(-${state.activeSlide * 100}%)`,
            }}
            className="related__slider-line"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}>
            {state.relatedArrays.map((slide, index) => {
              return (
                <RelatedSlide
                  slides={state.relatedPerSlide}
                  width={sliderLineRef.current?.offsetWidth}
                  cards={slide}
                  key={index}
                />
              );
            })}
          </div>
          <div className="related__slider-pagination">
            {state.relatedArrays.map((_, index) => {
              return (
                <div
                  onMouseEnter={() => sliderNavigationHandler(index)}
                  key={index}
                  className={`related__slider-pagination-point ${
                    state.activeSlide === index ? 'active' : ''
                  }`}></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

Related.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Related;
