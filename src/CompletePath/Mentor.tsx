import React from 'react'
import {interpolate, Img, useCurrentFrame, useVideoConfig} from 'remotion';

interface MentorProps {
  name: string
  avatar: string
}
const Mentor = ({name, avatar}: MentorProps) => {
  const { durationInFrames } = useVideoConfig()
  const currentFrame = useCurrentFrame()
  const scale = interpolate(
    currentFrame,
    [0, durationInFrames/4, (durationInFrames/4)*2, (durationInFrames/4)*3, durationInFrames],
    [ 1.05, 0.95, 1.05, 0.95, 1],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    })
  const opacity = interpolate(
    currentFrame,
    [0, durationInFrames/4*2],
    [ 0.6, 1],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    })
  return (
	<div style={{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
    gap: '40px',
    textAlign: 'center',
    transform: `scale(${scale})`,
    opacity
	}}
	>
		<div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '16px',
		}}
		>
			<Img
				src={avatar} style={{
        borderRadius: '100%',
        height: 600,
        width: 600,
				}}/>
			<div style={{
      textAlign: 'center',
      fontSize: 90,
      fontWeight: 'bold',
			}}
			>{name}
			</div>
		</div>
    
		<div style={{
      textAlign: 'center',
      fontSize: 70,
      lineHeight: 1.5,
		}}
		>
			was your main mentor
		</div>
	</div>
)
}

export default Mentor