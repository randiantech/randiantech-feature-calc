import React from 'react';
import FrontImage from '../components/FrontImage/FrontImage';
import Header from '../components/Header/Header';
import {KEY} from '../App';


export default class HomePage extends React.Component {
  render() {
    if (window.location.search !== `?p=${KEY}`) return <div />;
    return (
      <>
        <Header />
        <FrontImage />
      </>
    );
  }
}
