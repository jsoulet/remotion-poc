import {AbsoluteFill, useCurrentFrame} from 'remotion'
import React from 'react'
import Lottie from "lottie-react";
import data from "./lottieData.json";

const Fireworks = () => {
	const frame = useCurrentFrame();
  return (
	<AbsoluteFill style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
    backgroundColor: '#FFF'
	}}
	><Lottie
		animationData={data}
		initialSegment={[frame, frame]}
		style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
    backgroundColor: '#FFF'}}
		/>
	</AbsoluteFill>
)
}

export default Fireworks