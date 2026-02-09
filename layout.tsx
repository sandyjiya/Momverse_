import "./globals.css";
import Navbar from "../components/Navbar";
import DisclaimerBanner from "../components/DisclaimerBanner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DisclaimerBanner />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
