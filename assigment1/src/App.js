import React, { Component } from 'react';

import DenseAppBar from './components/DenseAppBar/DenseAppBar';
import Counter from './components/Counter/Counter';
import TableData from './components/Table/Table';
import Form from './components/Form/Form';

import Styles from './App.module.css';

class App extends Component {
  render() {
    return(
      <div className={Styles.container}>
        <DenseAppBar />
        <Counter />
        <TableData value={1234}/>
        <Form />
      </div>
    );
  }
}

export default App;