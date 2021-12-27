import Image from 'next/image';
import React from 'react';
import Nav from './Nav';
import { HeaderContainer, Space } from './styles';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className="header-border">
          <div className="header-left">
            <div className="header-logo">
              <Image
                width="64"
                height="64"
                src="/images/logo.png"
                alt="logo.png"
              />
            </div>
          </div>
          <div className="header-rigth">
            <div className="header-nav">
              <Nav />
            </div>
          </div>
        </div>
      </HeaderContainer>
      <Space />
    </>
  );
};

export default Header;
