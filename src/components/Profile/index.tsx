import React from 'react';
import { useChallenge } from '../../context/Challenge/context';

import { Container } from './styles';

const Profile: React.FC = () => {
  const {level} = useChallenge();
  return (
        <Container>
            <img src="https://lh3.googleusercontent.com/ogw/ADGmqu-IZ99xuYtjzvYRcRAoTV_Onb42UU83hTluOIDqow=s83-c-mo" alt="Samuel Formigheri" />
            <div>
                <strong>
                    Samuel Formigheri
                </strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </Container>
    );
}

export default Profile;