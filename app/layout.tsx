
import RootRedux from "./redux/RootRedux"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <head>
    
        <link rel="icon"  href="/assets/images/favicon.ico" />
        <title>Digimon vpet</title>
       
        <meta name="description" content="This app is a simple vpet of digimon." />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"  />
        <link  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet" /> 
      </head>
    
      <body >
        <RootRedux>
        {children}
        </RootRedux>
    
        </body>
    </html>
  )
}
