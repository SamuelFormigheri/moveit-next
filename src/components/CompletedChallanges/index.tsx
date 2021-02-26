import React from 'react';
import { useChallenge } from '../../context/Challenge/context';

import { Container } from './styles';

const CompletedChallanges: React.FC = () => {
  const {challangesCompleted} = useChallenge();
  return (
    <Container>
        <span>Desafios completos</span>
        <span>{challangesCompleted}</span>
    </Container>
   );
}

export default CompletedChallanges;