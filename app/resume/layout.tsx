export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en" className="dark">
        <body
          className="bg-customBackground dark:bg-dark-customBackground text-dark-customBackground dark:text-customWhite transition-all duration-200 ease-in-out"
        >
          {children}
        </body>
      </html>
    );
  }