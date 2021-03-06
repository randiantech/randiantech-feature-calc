import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import './Logo.css';
import {KEY} from '../../App';

export default class Logo extends React.Component {
  render() {
    return (
      <Link className="header-logo-item-wrapper" to={`/?p=${KEY}`}>
        <span className="header-logo-container">
          <span className="header-logo-container-logo-left-side">Randian</span>
          <span className="header-logo-container-logo-right-side">tech</span>
        </span>
      </Link>
    );
  }
}
