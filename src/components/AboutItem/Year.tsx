interface CareerYearProps {
  start: string
  end?: string
}

export default function Year({ start, end }: CareerYearProps) {
  const formattedStart = start
  const formattedEnd = end || 'Present'

  return (
    <div>
      {formattedStart} - {formattedEnd}
    </div>
  )
}
