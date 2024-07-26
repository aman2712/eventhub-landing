import "./styles/globals.css";

export const metadata = {
  title: "eventhub",
  description: "The best event management solution on the web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
