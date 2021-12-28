import React from 'react';
import Responsive from '../lib/styles/Responsive';
import { HomeContainer } from './styles';

const index = () => {
  return (
    <HomeContainer>
      <Responsive>
        <div className="home-thumb">
          <img src="/images/sky.png" alt="thumb.png" />
          <div className="home-thumb-contents">
            <h1>Order your</h1>
            <h1>Daily Products</h1>
            <p>#Fresh Products</p>
          </div>
        </div>
      </Responsive>
    </HomeContainer>
  );
};

export default index;
