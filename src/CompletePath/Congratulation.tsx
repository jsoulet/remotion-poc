import React from 'react'
import {AbsoluteFill, interpolate,  useCurrentFrame, useVideoConfig, Video} from 'remotion';

interface CongratulationProps {
  text: string
  splitSymbol?: string
  backgroundColor?: string
  videoUrl?: string
  style?: React.CSSProperties,
  textStyle?: React.CSSProperties,
}
const Congratulation = ({ text, splitSymbol = ' ', style, textStyle, videoUrl }: CongratulationProps) => {
  // const text = 'Congratulation Noémie'
  const { fps, durationInFrames } = useVideoConfig()
  const currentFrame = useCurrentFrame()
  return (
	<>
		{videoUrl && <AbsoluteFill
			style={{
        justifyContent: 'center',
        alignItems: 'center',
			}}
		             >
			<Video
				muted src={videoUrl} style={{
        height: '100%',
        width: 'auto'
				}}/>
		</AbsoluteFill>}
		<AbsoluteFill style={{
		justifyContent: 'center',
		alignItems: 'center',
    ...style,
    ...(videoUrl? {
      backgroundColor: 'rgba(255, 255, 255, 0.3)'
    }: {})
		}}
		>
			<h1 style={{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 100,
      lineHeight: 1.5,
			}}
			>
				{text.split(splitSymbol).map((t, index, array) => {
        const animationDuration = Math.floor(durationInFrames / array.length) - fps * 0.5
        const startFrame = index * (animationDuration - (0.5 * fps))
        const endFrame = (index + 1) * animationDuration
        const opacity = interpolate(currentFrame, [startFrame, endFrame], [0, 1], {
          extrapolateRight: "clamp",
          extrapolateLeft: "clamp",
        })
        const translateY = interpolate(currentFrame, [startFrame, endFrame], [50, 0], {
          extrapolateRight: "clamp",
          extrapolateLeft: "clamp",
        })
        return (
	<div
		key={index} style={{
          opacity,
          transform: `translateY(${translateY}px)`,
          ...textStyle
		}}
	> {t} 
	</div>
)
      })}
			</h1>
		</AbsoluteFill>
	</>
)
}

export default Congratulation