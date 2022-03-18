export type apiPayload =  {
  student: {
    name: string
    path: string
  },
  mainMentor: {
    name: string
  },
  pathDuration: 365,
  sessionNumber: number,
  sessionDuration: number,
  otherPersons: {
    name: string
    role: string
  }[]
}
const fetchData = () => {
  return new Promise<apiPayload>((resolve) => {
    setTimeout(() => {
      resolve({
        student: {
          name: 'Noémie',
          path: 'Frontend developer'
        },
        pathDuration: 365,
        sessionNumber: 47,
        sessionDuration: 45,
        mainMentor: {
          name: 'Andrea'
        },
        otherPersons: [

        ]
      })
    }, 3000)}
  )
}

export default fetchData