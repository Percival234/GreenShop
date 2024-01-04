import TitleItem from '@UI/Titles/TitleItem/TitleItem';

import ImageFlowerPotOne from '@Assets/icons/flowerpot-1.svg';
import ImageFlowerPotTwo from '@Assets/icons/flowerpot-2.svg';
import ImageFlowerPotThree from '@Assets/icons/flowerpot-3.svg';

import './NewsLetter.scss';

export default function NewsLetter() {
  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__list">
          <div className="newsletter__item">
            <div className="newsletter__image-container">
              <img src={ImageFlowerPotOne} alt="flowerpot 1" />
            </div>
            <TitleItem>Garden Care</TitleItem>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className="newsletter__item">
            <div className="newsletter__image-container">
              <img src={ImageFlowerPotTwo} alt="flowerpot 2" />
            </div>
            <TitleItem>Plant Renovation</TitleItem>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className="newsletter__item">
            <div className="newsletter__image-container">
              <img src={ImageFlowerPotThree} alt="flowerpot 3" />
            </div>
            <TitleItem>Watering Graden</TitleItem>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
