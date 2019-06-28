import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './reduxStore'
import MainContainer from './components/MainContainer';

export default function App({ page }) {
  return (
    <Provider store={ store }>
      <MainContainer/>
    </Provider>
  );
}
