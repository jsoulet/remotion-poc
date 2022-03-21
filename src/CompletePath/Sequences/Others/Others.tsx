import React from 'react'
import { AbsoluteFill, useVideoConfig } from 'remotion'
import Other from './Other'
import { Person } from './type'

interface OthersProps {
  people: Person[]
}

const Others = ({people = []}: OthersProps) => {
   const confif = useVideoConfig()
   const shift = confif.durationInFrames / people.length
  return  (
	<AbsoluteFill>
		{people.map((person, index) => {
      return <Other key={index} person={person} shift={shift * index} />
    })}
	</AbsoluteFill>
)
}

export default Others