import React from 'react'
import {interpolate, Img, useCurrentFrame, useVideoConfig, spring, Easing} from 'remotion';

interface MentorProps {
  name: string
  avatar: string
}
const Mentor = ({name, avatar}: MentorProps) => {
  const { fps, durationInFrames } = useVideoConfig()
  const currentFrame = useCurrentFrame()
  const scale = interpolate(
    currentFrame,
    [0, durationInFrames],
    [1, 1.05],
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
    transform: `scale(${scale})`
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
			<Img src={avatar} style={{
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