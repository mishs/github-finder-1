import React from 'react';
import './App.css';
import styled from 'styled-components';
import MainBody from '../Pages/MainBody';

function App() {
  return (
    <AppStyles>
        <MainBody />
    </AppStyles>
  );
}

const AppStyles = styled.div`
  background-color: #cfe8fc;
  height: 100vh;
  margin: '2rem auto';
  width: '100%';
`

export default App;