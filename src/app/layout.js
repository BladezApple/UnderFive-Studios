import "./globals.css";
import ClientLayout from "@/client-layout";
import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "UnderFive Studios",
  description: "The Official UnderFive Studios Website.",
  icons: {
    icon: "/branding/Logo.png",
    shortcut: "/branding/Logo.png",
    apple: "/branding/Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
