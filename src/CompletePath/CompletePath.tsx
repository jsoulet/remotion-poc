import './styles.css'
import React from 'react'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import SpinningLogo from './SpinningLogo'
import Congratulation from './Congratulation'
import Graduation from './Graduation'
import Fireworks from './Fireworks'
import { useLottie } from "remotion-lottie";
import { Audio } from "remotion";
import soundtrack from './soundtrack.mp3'
import Counter from './Counter';
import Mentor from './Mentor';
import mentorAvatar from './mentorAvatar.jpeg'

const CompletePath: React.FC = () => {
  const { fps } = useVideoConfig()
  const spinningLogoDuration = fps * 1.5
  const fireworksDuration = fps * 2
  const congratulationDuration = fps * 2
  const graduationDuration = fps * 2
  const daysDuration = fps * 3
  const mentorDuration = fps * 3
  const proudDuration = fps * 2
  const sessionsDuration = fps * 3

  return (
	<div style={{
    backgroundColor: 'white',
    flex: 1,
	}}
	>
		<Sequence from={0} durationInFrames={spinningLogoDuration}>
			<SpinningLogo/>
		</Sequence>
		<Sequence from={spinningLogoDuration} durationInFrames={fireworksDuration}>
			<Fireworks/>
		</Sequence>
		<Sequence from={spinningLogoDuration + fireworksDuration} durationInFrames={congratulationDuration}>
			<Congratulation text='Congratulation Noémie' backgroundColor="#00EDA2"/>
		</Sequence>
		<Sequence from={spinningLogoDuration + fireworksDuration + congratulationDuration} durationInFrames={graduationDuration}>
			<Graduation path="Frontend developer"/>
		</Sequence>
		<Sequence from={spinningLogoDuration + fireworksDuration + congratulationDuration + graduationDuration} durationInFrames={daysDuration}>
			<Counter value={365} renderLabel={() => 'That was a long run...'} renderTitle={(value) => `${value} days`}/>
		</Sequence>
		<Sequence from={spinningLogoDuration + fireworksDuration + congratulationDuration + graduationDuration + daysDuration} durationInFrames={mentorDuration}>
			<Mentor name="Andrea" avatar={mentorAvatar}/>
		</Sequence>
		<Sequence from={spinningLogoDuration + fireworksDuration + congratulationDuration + graduationDuration + daysDuration + mentorDuration} durationInFrames={sessionsDuration}>
			<Counter value={2115} renderLabel={() => 'Together you did 47 sessions which represents'} renderTitle={(value) => `${value} minutes`}/>
		</Sequence>
		<Sequence from={spinningLogoDuration + fireworksDuration + congratulationDuration + graduationDuration + daysDuration + mentorDuration + sessionsDuration} durationInFrames={proudDuration}>
			<Congratulation text='You can be+proud of you!' splitSymbol='+' backgroundColor='#00F8F6'/>
		</Sequence>
		<Audio src={soundtrack} startFrom={240}/>
	</div>
	
)
}
export default CompletePath