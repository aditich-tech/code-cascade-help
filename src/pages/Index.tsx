import FallingCodeBackground from '@/components/FallingCodeBackground';
import FAQSection from '@/components/FAQSection';
import CoddieChat from '@/components/CoddieChat';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Falling code background */}
      <FallingCodeBackground />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen py-16 px-4">
        <FAQSection />
      </div>

      {/* Chatbot widget */}
      <CoddieChat />
    </div>
  );
};

export default Index;
