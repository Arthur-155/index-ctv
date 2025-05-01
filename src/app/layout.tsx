import "./globals.css";
import Header from '../components/Header/Header';
import Script from 'next/script';
import Footer from '../footer/Footer'


export const metadata = {
  title: 'Cat The Vision',
  description: 'Explore o CTV',
  
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  


  return (

    <html lang="en">
      <body
        className={`antialiased`}
      >

        <Header />

        {children}
        <Footer />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" />
      </body>
    </html>
  );
}
