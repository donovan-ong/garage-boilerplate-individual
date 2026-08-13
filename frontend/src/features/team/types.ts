import type { StaticImageData } from 'next/image'

export interface TeamMember {
  name: string
  role: string
  bio: string
  photo: StaticImageData
}
