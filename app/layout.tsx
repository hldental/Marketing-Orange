import "./globals.css";

export const metadata = {
  title: "Consult Request Pages",
  description: "Consult request landing pages for surgery/prosthetic and general dental care.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
