import "./globals.css";
import Navbar from "../components/Navbar";
import AgentationProvider from "../components/AgentationProvider";

export const metadata = {
  title: "Strava Management - We are brand activists",
  description: "60+ brand activists dedicated to serving brands",
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
