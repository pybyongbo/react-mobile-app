import React, { useState } from 'react'
// import { Provider } from 'react-redux';
import './App.css'
import Container from './components/Container'
import routers from './router'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
function App() {
  return (
      <Container routeData = {routers} history={history}/>
  )
}

export default App
