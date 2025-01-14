import Header from "@/app/components/header";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
