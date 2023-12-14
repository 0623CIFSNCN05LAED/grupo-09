import React from 'react';
import TopBar from './TopBar';
import SideBar from './SideBar';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
        <div id="wrapper">
            <TopBar />
            <SideBar />             
            <Content />
            <Footer />
        </div>
    </React.Fragment>
  );
}

export default App;