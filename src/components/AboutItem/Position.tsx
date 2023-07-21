import ExternalLink from '../ExternalLink'

interface PositionProps {
  company: string
  position: string
  company_url?: string
}

export default function Position({
  company,
  company_url,
  position,
}: PositionProps) {
  return (
    <div>
      <span className="font-semibold uppercase text-theme-primary">
        {position}
      </span>{' '}
      at{' '}
      {company_url ? (
        <ExternalLink className="inline-block border-b" href={company_url}>
          {company}
        </ExternalLink>
      ) : (
        company
      )}
    </div>
  )
}
