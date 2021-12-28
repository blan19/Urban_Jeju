import styled from '@emotion/styled';
import Responsive from '../../lib/styles/Responsive';

export const HeaderContainer = styled.div`
  position: fixed;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HeaderResponsive = styled(Responsive)`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 4rem;
  .header-rigth {
    flex: 1;
    .header-nav {
      width: 100%;
    }
  }
`;

export const Space = styled.div`
  height: 86px;
`;
