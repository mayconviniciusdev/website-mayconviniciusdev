import "react-vertical-timeline-component/style.min.css";
import "../css/reactTimeline.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "Projeto | %s",
    default: "Maycon Vinícius | Dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-BR" className={poppins.className}>
      <body>
        {children}
      </body>
    </html>
  );

}