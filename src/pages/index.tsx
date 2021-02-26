import {CountdownProvider} from '../context/Countdown/provider';
import {ChallengeProvider} from '../context/Challenge/provider';
import ChallangeBox from '../components/ChallangeBox';
import CompletedChallanges from '../components/CompletedChallanges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import ThemeSwitch from '../components/ThemeSwitch';
import {Container} from '../styles/pages/index/styles';
import { GetServerSideProps } from 'next';

interface IHomeProps{
  level: number;
  currentExperience: number;
  challangesCompleted: number;
}

export default function Home(props: IHomeProps) {
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challangesCompleted={props.challangesCompleted}
    >
      <CountdownProvider>
        <Container>
          <ExperienceBar />
          <section>
            <div>
              <Profile />
              <CompletedChallanges />
              <Countdown />
            </div>
            <div>
              <ChallangeBox />
            </div>
          </section>
        </Container>
        <ThemeSwitch />
      </CountdownProvider>
    </ChallengeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
  const {MoveIt_level, MoveIt_currentExperience, MoveIt_challangesCompleted} = ctx.req.cookies;
  return{
    props: {
      level: Number(MoveIt_level),
      currentExperience: Number(MoveIt_currentExperience),
      challangesCompleted: Number(MoveIt_challangesCompleted)
    }
  }
}
