import React from 'react';
import './App.css';
import InputForm from './components/InputForm.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <InputForm />
    );
  }
}