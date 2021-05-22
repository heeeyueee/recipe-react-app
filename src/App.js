import React from 'react';
import './assets/style/reset.css'
import './App.css';
import Layout from './pages/Layout.jsx';
import {Provider}  from 'react-redux'
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Layout> </Layout>
    </div>
    </Provider>
  );
}

export default App;
