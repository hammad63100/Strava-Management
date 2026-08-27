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
      <body className="antialiased" suppressHydrationWarning>
        {/* <Navbar /> */}
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
