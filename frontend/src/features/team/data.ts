import imagePlaceholder from '@/assets/images/image_placeholder.png'
import raghdahPhoto from '@/assets/images/raghdah_photo.png'
import monikaPhoto from '@/assets/images/monika_photo.png'
import mikePhoto from '@/assets/images/mike_photo.png'
import type { TeamMember } from './types'

export const teamName = '03-IBM-AI Finance Decision Support — Team 1'

export const teamMembers: TeamMember[] = [
  {
    name: 'Jack Robinson-Fletcher',
    role: 'PM',
    bio: "I'm Jack, the Project Manager for our team. I'm currently in my third year studying a Bachelor of Information Technology. I have a strong interest in cybersecurity, cloud Computing and networking particularly in network security. Outside of my studies, I enjoy reading as well as developing and playing games.",
    photo: imagePlaceholder,
  },
  {
    name: 'Raghdah Al-Gahdari',
    role: 'BA',
    bio: "I'm Raghdah and I'm passionate about technology and enjoy learning about new technologies. I'm particularly interested in cloud computing and would like to continue developing my skills in this area.",
    photo: raghdahPhoto,
  },
  {
    name: 'Monika Swiergon',
    role: 'UX',
    bio: "I'm Monika, the UX Designer on our team. I'm currently in my third year studying a Bachelor of Information Technology with a minor in Cyber Assurance. My interests sit across both human-centred design and cybersecurity, particularly within security testing and privacy. When I'm not studying, I enjoy playing piano and guitar, going to the gym, reading and travelling.",
    photo: monikaPhoto,
  },
  {
    name: 'Mike Jayilian',
    role: 'Dev',
    bio: "Hey, I'm Mike! I'm one of the developers on the team, currently in my final year completing my Bachelor of Information Technology with a minor in Cyber Assurance. Alongside my studies, I hold an interest in cyber, networking, and cloud security. Outside of my studies, I have a strong passion for cars, love hitting the gym, and enjoy playing video games in my spare time.",
    photo: mikePhoto,
  },
  {
    name: 'Donovan Ong',
    role: 'Dev',
    bio: "Hi, I'm Donovan, one of the developers on the team. I'm a final-year Bachelor of Computer Science student at RMIT, majoring in AI and Enterprise Systems Development. My interest in autonomous systems and machine learning comes from my work at the Defence Science and Technology Group, where I built a Python-based behaviour engine for autonomous drones. I'm especially interested in building AI systems that are capable, explainable, and trustworthy.",
    photo: imagePlaceholder,
  },
]
