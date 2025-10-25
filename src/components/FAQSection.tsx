import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ_DATA = [
  {
    question: "How do I get started with the platform?",
    answer: "Getting started is easy! Simply sign up for an account, complete your profile, and follow our interactive onboarding guide. You'll be up and running in minutes. Check out our documentation for detailed walkthroughs.",
  },
  {
    question: "What programming languages are supported?",
    answer: "We support a wide range of programming languages including JavaScript, TypeScript, Python, Java, C++, Go, Rust, and many more. Our platform is designed to work seamlessly with modern development workflows.",
  },
  {
    question: "How do I reset my password?",
    answer: "Click on 'Forgot Password?' on the login page. Enter your email address and we'll send you a secure link to reset your password. The link expires after 24 hours for security purposes.",
  },
  {
    question: "Can I integrate with my existing tools?",
    answer: "Absolutely! We offer integrations with popular tools like GitHub, GitLab, Slack, Jira, and more. Check our integrations page for a full list and setup instructions.",
  },
  {
    question: "What are the system requirements?",
    answer: "Our platform works on modern browsers (Chrome, Firefox, Safari, Edge) and requires a stable internet connection. For the best experience, we recommend using the latest browser version with at least 4GB of RAM.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team through the chat widget (Coddie) on this page, email us at support@example.com, or submit a ticket through your dashboard. We typically respond within 24 hours.",
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. We use industry-standard encryption, regular security audits, and comply with GDPR and SOC 2 standards. Your data is encrypted both in transit and at rest.",
  },
  {
    question: "What's included in the free plan?",
    answer: "The free plan includes access to basic features, up to 3 projects, 100 API calls per day, and community support. You can upgrade anytime to unlock advanced features and higher limits.",
  },
];

const FAQSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold gradient-text">Help & Support</h1>
      </div>
      
      <div className="bg-card border border-border rounded-xl p-8 shadow-card">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
