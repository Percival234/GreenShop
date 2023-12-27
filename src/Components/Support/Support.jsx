import { useRef, useState } from 'react';
import './Support.scss';

import { AiOutlineUpload } from 'react-icons/ai';

import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import Button from '@UI/Buttons/Button/Button';
import ButtonOutline from '@UI/Buttons/ButtonOutline/ButtonOutline';

export default function Support() {
  const [currentFile, setCurrentFile] = useState('');
  const [currentImage, setCurrentImage] = useState('');
  const fileInput = useRef(null);

  function openFileExplorer() {
    fileInput.current?.click();
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCurrentImage(imageUrl);
    }
    setCurrentFile(file);
  };

  function clearValue() {
    setCurrentFile('');
    setCurrentImage('');
  }

  return (
    <div className="support">
      <TitleBorder>Support</TitleBorder>
      <div className="support__form">
        <p>If you encounter any issues, please feel free to contact us, and we will assist you!</p>
        <textarea
          rows="10"
          className="textarea textarea-bordered input"
          placeholder="Describe your problem ..."></textarea>
        <div className="support__upload">
          <input
            onChange={handleFileChange}
            ref={fileInput}
            type="file"
            className="support__input"
          />
          <div className="support__upload">
            <div className="support__info">
              <div className="support__file-name">
                {currentFile.name || (
                  <div className="support__message">
                    Upload photo (less than 2MB, jpeg, jpg, png)
                  </div>
                )}
              </div>
              <button type="button" onClick={openFileExplorer} className="support__button">
                <AiOutlineUpload />
              </button>
            </div>
            {currentImage && <img src={currentImage} alt="support" className="support__image" />}
          </div>
        </div>
        <div className="support__action">
          <Button>Send</Button>
          <ButtonOutline onClick={clearValue} type="reset">
            Clear all
          </ButtonOutline>
        </div>
      </div>
    </div>
  );
}
