import Image from 'next/image';
import React from 'react';
import Nav from './Nav';
import { HeaderContainer, HeaderResponsive, Space } from './styles';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderResponsive>
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
            <div className="header-account">
              <div className="header-cart-back">
                <div className="header-cart-inner">
                  <AiOutlineShoppingCart />
                </div>
              </div>
              <div className="header-wish-back">
                <div className="header-wish-inner">
                  <AiOutlineHeart />
                </div>
              </div>
            </div>
          </div>
        </HeaderResponsive>
      </HeaderContainer>
      <Space />
    </>
  );
};

export default Header;
