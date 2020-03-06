import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.css';
import {KEY} from '../../App';

const DESKTOP_ITEMS = [
  'PACKAGES',
  'CALCULATOR'
];

interface HeaderState {
  hoveredItem: string;
  toggleMobileMenu: boolean;
}

export default class Header extends React.Component<any, HeaderState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hoveredItem: '',
      toggleMobileMenu: false,
    };
  }

  renderItems(hoveredItem: string) {
    return (
      <div className="header-item-container">
        {DESKTOP_ITEMS.map(item => (
          <Link
            key={item}
            className="header-item-wrapper"
            to={`${item.toLowerCase()}?p=${KEY}`}
          >
            <div
              className={`header-desktop-item${
                hoveredItem === item ? ' item-selected' : ''
              }`}
              onMouseOver={() => this.setState({hoveredItem: item})}
              onMouseOut={() => this.setState({hoveredItem: ''})}
            >
              {item}
            </div>
          </Link>
        ))}
      </div>
    );
  }

  render() {
    const {hoveredItem}: HeaderState = this.state;
    return (
      <div className="header-container">
        <div className="header-logo-wrapper">
          <Logo />
        </div>
        <div className="header-items-container">
          {this.renderItems(hoveredItem)}
        </div>
      </div>
    );
  }
}
