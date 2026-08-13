import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { teamMembers, teamName } from '@/features/team/data'
import { TeamMemberCard } from '@/features/team/components/TeamMemberCard'

export const metadata: Metadata = { title: 'Our Team' }

export default async function TeamPage() {
  await requireAuth()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-baloo text-[32px] font-bold text-brand-900">Meet our Team</h1>
        <p className="font-baloo text-[18px] font-bold text-brand-500">{teamName}</p>
      </div>

      <div className="max-w-[1000px] space-y-5">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}
