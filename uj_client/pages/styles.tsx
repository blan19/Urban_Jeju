import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .home-thumb {
    flex: 1;
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 65rem;
      border-radius: 4.5rem;
    }
    .home-thumb-contents {
      position: absolute;
      left: 7rem;
      top: 17rem;
      h1 {
        color: #000;
        font-size: 5rem;
        margin-bottom: 1rem;
      }
      p {
        color: #4b6a49;
        font-size: 3.5rem;
        font-weight: bold;
      }
    }
  }
`;
