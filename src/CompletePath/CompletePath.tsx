import './styles.css'
import React, {useState, useEffect} from 'react'
import {Sequence, useVideoConfig,
	delayRender, continueRender, AbsoluteFill} from 'remotion';
import {
	SpinningLogo,
	Congratulation,
	Graduation,
	Counter,
	Mentor,
	Others,
	Fireworks
} from './Sequences'
import { Audio } from "remotion";
import getData, {apiPayload} from './services/fetchData'
import soundtrack from './assets/soundtrack.mp3'
import rollerskates from './assets/rollerskates.mp4'
import mountain from './assets/mountain2.mp4'

const CompletePath = () => {
  const [data, setData] = useState<apiPayload>();
  const [handle] = useState(() =>
	delayRender());
  useEffect(() => {
		const fetchData = async () => {
			const response = await getData();
			setData(response)
			continueRender(handle);
		};
    fetchData();
  }, [handle]);

  const { fps } = useVideoConfig()
  const spinningLogoDuration = fps * 1.5
  const fireworksDuration = fps * 2
  const congratulationDuration = fps * 3
  const graduationDuration = fps * 2
  const
	daysDuration = fps * 3
  const mentorDuration = fps * 3
  const proudDuration = fps * 3
  const sessionsDuration = fps * 3
  const onlyOneDuration = fps * 3
	const othersDuration = fps * (data?.otherPersons.length || 0)
	const otherProudDuration = fps * 3
	const adventureDuration = fps * 5

  return (
	<AbsoluteFill style={{
    backgroundColor: 'white',
    flex: 1,
	}}
	>
		{data && 
			<>
				<Sequence
					from={0}
					durationInFrames={spinningLogoDuration}
				>
					<SpinningLogo/>
				</Sequence>
				<Sequence
					from={spinningLogoDuration}
					durationInFrames={fireworksDuration}
				>
					<Fireworks/>
				</Sequence>
				<Sequence
					from={spinningLogoDuration +
					fireworksDuration}
					durationInFrames={congratulationDuration}
				>
					<Congratulation
						videoUrl={rollerskates}
						textStyle={{
							fontWeight: 'bold'
						}}
						text={`Congratulations ${data.student.name}`}
				/>
				</Sequence>
				<Sequence
					from={spinningLogoDuration +
				fireworksDuration +
					congratulationDuration}
					durationInFrames={graduationDuration}
				>
					<Graduation path={data.student.path.name} pathImage={data.student.path.image}/>
				</Sequence>
				<Sequence
					from={spinningLogoDuration +
				fireworksDuration +
				congratulationDuration +
					graduationDuration}
					durationInFrames={daysDuration}
				>
					<Counter
						value={data.student.path.duration}
						renderLabel={() => 'That was a long run...'}
						renderTitle={(value) => `${value} days`}
				/>
				</Sequence>
				<Sequence
					from={spinningLogoDuration +
				fireworksDuration +
				congratulationDuration +
				graduationDuration +
					daysDuration}
					durationInFrames={mentorDuration}
				>
					<Mentor name={data.mainMentor.name} avatar={data.mainMentor.avatar}/>
				</Sequence>
				<Sequence
					from={spinningLogoDuration +
				fireworksDuration +
				congratulationDuration +
				graduationDuration +
				daysDuration +
					mentorDuration}
					durationInFrames={sessionsDuration}
				>
					<Counter
						value={data.student.sessionNumber * data.student.sessionDuration}
						renderLabel={() => `Together you did ${data.student.sessionNumber} sessions which represents`}
						renderTitle={(value) => `${value} minutes`}/>
				</Sequence>
				<Sequence
					from={spinningLogoDuration +
				fireworksDuration +
				congratulationDuration +
				graduationDuration +
				daysDuration +
				mentorDuration +
					sessionsDuration}
					durationInFrames={onlyOneDuration}
				>
					<Congratulation
						text="But she was+not the only+one with you..."
						splitSymbol='+'
				/>
				</Sequence>
				<Sequence
					from={spinningLogoDuration +
				fireworksDuration +
				congratulationDuration +
				graduationDuration +
				daysDuration +
				mentorDuration +
				sessionsDuration +
					onlyOneDuration}
					durationInFrames={othersDuration}
				>
					<Others people={data.otherPersons}/>
				</Sequence>
				<Sequence
					from={
				spinningLogoDuration +
				fireworksDuration +
				congratulationDuration +
				graduationDuration +
				daysDuration +
				mentorDuration +
				onlyOneDuration +
				sessionsDuration +
					othersDuration}
					durationInFrames={otherProudDuration}
				>
					<Congratulation
						text="They're all+proud of you..." splitSymbol='+' style={{
					backgroundColor: '#7451EB',
						}}
						textStyle={{
						color: '#FFFFFF',	
						}}
					/>
				</Sequence>
				<Sequence
					from={spinningLogoDuration +
				fireworksDuration +
				congratulationDuration +
				graduationDuration +
				daysDuration +
				mentorDuration +
				onlyOneDuration +
				sessionsDuration +
				othersDuration +
					otherProudDuration}
					durationInFrames={proudDuration}
				>
					<Congratulation
						text='YOU should be+proud of yourself!' splitSymbol='+' style={{
					backgroundColor: '#7451EB',
						}}
						textStyle={{
						color: '#FFFFFF',
						}}
					/>
				</Sequence>
				<Sequence
					from={
					spinningLogoDuration +
					fireworksDuration +
					congratulationDuration +
					graduationDuration +
					daysDuration +
					mentorDuration +
					onlyOneDuration +
					sessionsDuration +
					othersDuration +
					otherProudDuration +
					proudDuration}
					durationInFrames={adventureDuration}
				>
					<Congratulation
						videoUrl={mountain}
						text="Your new adventure+is ready to begin..."
						splitSymbol='+'
				/>
				</Sequence>
				<Audio src={soundtrack} startFrom={0}/>
			</>}
	</AbsoluteFill>
	
)
}
export
default CompletePath