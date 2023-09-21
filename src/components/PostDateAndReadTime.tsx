export default function PostDateAndReadTime({
  formattedDate,
  readingTime,
}: {
  formattedDate: string
  readingTime: number
}) {
  return (
    <>
      {formattedDate} - {readingTime} min read
    </>
  )
}
