import React from 'react';
import './App.css';

export const KEY = "33er33DFDSF___32324fdfdsf_3TTRFDVDDssdscxvsdffv";

class App extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <div>
        <div className="app-container">{children}</div>
      </div>
    );
  }
}

export default App;
