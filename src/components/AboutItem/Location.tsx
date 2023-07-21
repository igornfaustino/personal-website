interface RootProps {
  city: string
  country: string
}

export default function Location({ city, country }: RootProps) {
  return (
    <div>
      {city}, {country}
    </div>
  )
}
