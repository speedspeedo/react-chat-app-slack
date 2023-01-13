import './App.css';
import React from 'react';
import { Footer } from 'flowbite-react';
import { Card } from 'flowbite-react';
import Header from './components/Header/Header';
import RoomBar from './components/RoomBar/RoomBar';
import SendBox from './components/Dashboard/SendBox';

function App() {
  return (
    <React.Fragment>
      <Header />
      <RoomBar />
      <SendBox />
    </React.Fragment>
  );
}

export default App;
