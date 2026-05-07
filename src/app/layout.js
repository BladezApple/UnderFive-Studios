import "./globals.css";
import ClientLayout from "@/client-layout";
import { ViewTransitions } from "next-view-transitions";
import Script from "next/script";

export const metadata = {
  title: "UnderFive Studios",
  description: "The Official UnderFive Studios Website.",
  icons: {
    icon: "/Logo_square.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>

        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="c3cef3db-76be-410d-8982-612717e4f09b"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
