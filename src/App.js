import React from 'react';
import './App.css';
import FullPage from './containers/fullpagescroll';
import { Layout, Content } from 'react-mdl';
//import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
//import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Content>
          <div className="page-content" />
          <FullPage />
        </Content>

      </Layout>
    </div>
  );
}

export default App;
