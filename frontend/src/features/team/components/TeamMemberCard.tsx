import Image from 'next/image'
import type { TeamMember } from '../types'

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex overflow-hidden rounded-[15px] border-2 border-[#8AAEE0] bg-[#F0F3FA]">
      <div className="relative w-48 shrink-0 sm:w-56">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(min-width: 640px) 224px, 192px"
          className="object-cover"
        />
      </div>
      <div className="flex-1 space-y-2 px-6 py-5">
        <div>
          <h3 className="font-baloo text-[26px] leading-tight font-bold text-[#395886]">
            {member.name}
          </h3>
          <p className="font-baloo text-[15px] font-bold text-[#638ECB]">{member.role}</p>
        </div>
        <p className="text-[15px] leading-relaxed text-[#222222]">{member.bio}</p>
      </div>
    </div>
  )
}
