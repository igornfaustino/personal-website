export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={`container max-w-2xl pb-16 pt-16`}>{children}</div>
}
