interface RootProps {
  location: string
}

export default function Location({ location }: RootProps) {
  return <div>{location}</div>
}
