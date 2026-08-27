import "./globals.css";
import Navbar from "../components/Navbar";
import AgentationProvider from "../components/AgentationProvider";

export const metadata = {
  title: "Amazon Portfolio Results | Strava Management",
  description:
    "Verified Amazon brand outcomes — commercial results, operating mandates, and performance metrics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;0,6..72,800;1,6..72,400;1,6..72,600;1,6..72,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* <Navbar /> */}
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
