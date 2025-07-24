import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/ui/floating-chat";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Home;