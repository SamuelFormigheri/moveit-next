import styled from 'styled-components';
import { ICurrentExperience, IProgressBar } from './interface';

export const Container = styled.div`
  display: flex;
  align-items: center;

  span.span-of-component-experience-bar{
      font-size: 1rem;
  }

  >div.div-of-component-experience-bar{
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background: var(--gray-line);
      margin: 0 1.5rem;
      position: relative;
  }
`;



export const ProgressBar = styled.div<IProgressBar>`
    height: 4px;
    border-radius: 4px;
    background: var(--green);
    ${props => "width: " + props.width + "%;"}
`;

export const CurrentExperience = styled.span<ICurrentExperience>`
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
    ${props => "left: " + props.left + "%;"}
`;