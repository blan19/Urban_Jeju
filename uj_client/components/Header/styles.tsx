import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  background: #fff;
  .header-border {
    display: flex;
    align-items: center;
    padding: 0 7rem;
    .header-rigth {
      flex: 1;
      .header-nav {
        width: 100%;
      }
    }
  }
`;

export const Space = styled.div`
  height: 66px;
`;
