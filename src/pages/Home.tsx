import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import FloatingChat from "@/components/ui/floating-chat";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FloatingChat />
    </div>
  );
};

export default Home;