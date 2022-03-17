import React from 'react'
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import SpinningLogo from './SpinningLogo'

const CompletePath: React.FC = () => {
  const { durationInFrames, fps } = useVideoConfig()
  return (
	<div style={{
    backgroundColor: 'white',
    flex: 1,
	}}
	>
		<Sequence from={0} durationInFrames={fps * 2}>
			<SpinningLogo/>
		</Sequence>
		{/* <Sequence from={fps * 2} durationInFrames={fps * 4}>
			<Firework/>
		</Sequence> */}
	</div>
	
)
}
export default CompletePath