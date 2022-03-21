import mentorAvatar from './andrea.jpeg'
import fedev from './fedev.png'
import antoine from './antoine.jpeg'
import jenny from './jenny.jpeg'
import mathilda from './mathilda.jpeg'
import melvin from './melvin.jpeg'
import samir from './samir.jpeg'
import virginie from './virginie.jpeg'
import dimitri from './dimitri.jpeg'
import romain from './romain.jpeg'
import ian from './ian.jpeg'
import celeste from './celeste.jpeg'

export type apiPayload =  {
  student: {
    name: string
    path: {
      name: string,
      image: string,
      duration: number
    }
    sessionNumber: number,
    sessionDuration: number,
  },
  mainMentor: {
    name: string
    avatar: string
  },
  otherPersons: {
    name: string
    avatar: string
    id: string
  }[]
}
const fetchData = () => {
  return new Promise<apiPayload>((resolve) => {
    setTimeout(() => {
      resolve({
        student: {
          name: 'Noémie',
          path: {
            name: 'Frontend developer',
            image: fedev,
            duration: 294,
          },
          sessionNumber: 47,
          sessionDuration: 45,
        },
        mainMentor: {
          name: 'Andrea',
          avatar: mentorAvatar,
        },
        otherPersons: [
          {
            id: 'a5e932a8-1e1c-405a-904c-0abad9713c0c',
            name: 'Antoine',
            avatar: antoine
          },
          {
            id: 'd8acbc62-ab9b-4339-b2c1-e68208c5b13f',
            name: 'jennie',
            avatar: jenny
          },
          {
            id: 'fa7cd8c0-16b0-4ff4-b808-f448ec39c34a',
            name: 'Mathilda',
            avatar: mathilda
          },
          {
            id: '479133a6-822f-402d-9120-c7e2ad1c1198',
            name: 'Melvin',
            avatar: melvin
          },
          {
            id: '5ac172d7-238a-4d5d-bed4-84f5721c6b91',
            name: 'Samir',
            avatar: samir
          },
          {
            id: 'cf719192-8df4-496b-9b18-add7c727785f',
            name: 'virginie',
            avatar: virginie
          },
          {
            id: 'ae887c34-cd10-4173-abab-1492d81a278d',
            name: 'celeste',
            avatar: celeste
          },
          {
            id: 'e06e5e6f-018e-4be3-8ab8-a18900364f6a',
            name: 'dimitri',
            avatar: dimitri
          },
          {
            id: '874317f7-8890-4b87-bb3f-84eefa7df494',
            name: 'romain',
            avatar: romain
          },
          {
            id: '74b41240-27e3-4b47-9658-422c2976df7f',
            name: 'ian',
            avatar: ian
          },
        ]
      })
    }, 3000)}
  )
}

export default fetchData