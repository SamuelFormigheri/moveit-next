import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 5px;
  right: 5px;

  >img, svg{
    width: 32px;
    height: 32px;
    opacity: 0.5;
    cursor: pointer;
    transition: 200ms ease;
    &:hover{
        opacity: 0.25;
    }
  }
  @media(max-width: 500px){
    top: 2px;
    right: 2px;
  }
`;
