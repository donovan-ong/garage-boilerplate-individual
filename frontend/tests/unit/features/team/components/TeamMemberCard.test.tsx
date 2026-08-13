import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TeamMemberCard } from '@/features/team/components/TeamMemberCard'
import type { TeamMember } from '@/features/team/types'

const mockMember: TeamMember = {
  name: 'Ada Lovelace',
  role: 'Dev',
  bio: 'I write the first algorithm intended to be carried out by a machine.',
  photo: { src: '/mock-photo.png', width: 400, height: 400 },
}

describe('TeamMemberCard', () => {
  it('renders the member name, role, and bio', () => {
    render(<TeamMemberCard member={mockMember} />)

    expect(screen.getByRole('heading', { name: 'Ada Lovelace' })).toBeInTheDocument()
    expect(screen.getByText('Dev')).toBeInTheDocument()
    expect(screen.getByText(mockMember.bio)).toBeInTheDocument()
  })

  it('renders the photo with the member name as alt text', () => {
    render(<TeamMemberCard member={mockMember} />)

    expect(screen.getByRole('img', { name: 'Ada Lovelace' })).toBeInTheDocument()
  })
})
