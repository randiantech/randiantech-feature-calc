import React from 'react';
import Calculator from '../components/Calculator/Calculator';
import Header from '../components/Header/Header';
import {KEY} from '../App';

export default class CalculatorPage extends React.Component {
  render() {
    if (window.location.search !== `?p=${KEY}`) return <div />;
    return (
      <>
        <Header />
        <Calculator />
      </>
    );
  }
}
