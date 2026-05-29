export const metadata = {
  title: 'ZAHA NOOR HOME',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#ffffff' }}>{children}</body>
    </html>
  )
}
