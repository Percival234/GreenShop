import './NewsLetter.scss';

import Button from '@UI/Buttons/Button';
import InputSimple from '@UI/Inputs/InputSimple';

import ImageFlowerPotOne from '@Assets/icons/flowerpot-1.svg';
import ImageFlowerPotTwo from '@Assets/icons/flowerpot-2.svg';
import ImageFlowerPotThree from '@Assets/icons/flowerpot-3.svg';

export default function NewsLetter() {
  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__list">
          <div className="newsletter__item">
            <div className="newsletter__image-container">
              <img src={ImageFlowerPotOne} alt="flowerpot" />
            </div>
            <h4 className="item-title">Garden Care</h4>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className="newsletter__item">
            <div className="newsletter__image-container">
              <img src={ImageFlowerPotTwo} alt="flowerpot" />
            </div>
            <h4 className="item-title">Plant Renovation</h4>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className="newsletter__item">
            <div className="newsletter__image-container">
              <img src={ImageFlowerPotThree} alt="flowerpot" />
            </div>
            <h4 className="item-title">Watering Graden</h4>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
        </div>
        <div className="newsletter__item newsletter__form ">
          <h3 className="sub-title">Would you like to join newsletters?</h3>
          <p>
            We usually post offers and challenges in newsletter. We’re your online houseplant
            destination. We offer a wide range of houseplants and accessories shipped directly from
            our greenhouse to yours!
          </p>
          <form className="form" action="#">
            <InputSimple type="email" placeholder="Enter your email address..." />
            <Button type="sumbit">Join</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
