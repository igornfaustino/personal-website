interface CareerRootProps {
  city: string
  country: string
}

export default function Location({ city, country }: CareerRootProps) {
  return (
    <div>
      {city}, {country}
    </div>
  )
}
