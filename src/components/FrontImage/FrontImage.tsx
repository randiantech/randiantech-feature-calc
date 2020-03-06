import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../components/Logo/Logo';
import './FrontImage.css';

export default class FrontImage extends React.Component<any, any> {
  renderContent() {
    return (
      <div className="front-image-content-desktop">
        <span>
          <Logo />
          <span className="front-image-content-text">
            {' '}
            is your partner <br /> to craft{' '}
            <span className="front-image-instantly-loved-text">
              INSTANTLY LOVED
            </span>{' '}
            software.
          </span>
        </span>
      </div>
    );
  }

  render() {
    return (
      <div className="front-image-container">
        <img className="front-image-img" src="/office.png" />
        {this.renderContent()}
      </div>
    );
  }
}