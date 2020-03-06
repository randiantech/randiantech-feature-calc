import React from 'react';
import PackagesMatrix from '../components/PackagesMatrix/PackagesMatrix';
import Header from '../components/Header/Header';
import {KEY} from '../App';

export default class PackagesPage extends React.Component {
  render() {
    if (window.location.search !== `?p=${KEY}`) return <div />;
    return (
      <>
        <Header />
        <PackagesMatrix />
      </>
    );
  }
}
