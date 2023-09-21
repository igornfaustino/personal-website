import { format, formatDuration, intervalToDuration, parseISO } from 'date-fns'

interface PeriodProps {
  start: string
  end?: string
}

export default function Period({ start, end }: PeriodProps) {
  const formattedStart = format(parseISO(start), 'MMM yyyy')
  const formattedEnd = end ? format(parseISO(end), 'MMM yyyy') : 'Present'

  const duration = intervalToDuration({
    start: parseISO(start),
    end: end ? parseISO(end) : new Date(),
  })

  duration.months =
    (duration.days || 0) > 20 ? duration.months! + 1 : duration.months

  const formattedDuration = formatDuration(duration, {
    format: ['years', 'months'],
  })

  return (
    <div>
      {formattedStart} - {formattedEnd} . {formattedDuration}
    </div>
  )
}
