import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@/components/icons";

interface BusinessTypeScreenProps {
  onSelect: (businessType: string, businessName: string) => void;
  onBack: () => void;
}

// Business type configurations with icons
const businessTypes = [
  {
    id: "creator",
    name: "Insta/YT creator",
    description: "Build your personal brand",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 9L15 12L10 15V9Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "cloud-kitchen",
    name: "Cloud Kitchen",
    description: "Master food operations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M6 5V19M10 5V19M14 5V19M18 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 8H20M4 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "ecommerce",
    name: "Ecommerce",
    description: "Launch your storefront",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "stock-trader",
    name: "Stock Trader",
    description: "Analysis & portfolio mgmt",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 7H21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const BusinessTypeScreen = ({ onSelect, onBack }: BusinessTypeScreenProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleContinue = () => {
    if (selected) {
      const business = businessTypes.find(b => b.id === selected);
      if (business) {
        onSelect(business.id, business.name);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F3] subtle-grid flex flex-col relative overflow-hidden">
      {/* Header with back button and progress indicator */}
      <motion.div 
        className="px-5 pt-6 pb-4 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-secondary">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Progress indicator */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-1.5 rounded-full bg-primary" />
          <div className="w-8 h-1.5 rounded-full bg-muted" />
          <div className="w-8 h-1.5 rounded-full bg-muted" />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Title section */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-secondary leading-tight">
              What do you want<br />to build?
            </h1>
            <p className="text-muted-foreground mt-2">
              Select your path to personalize your roadmap.
            </p>
          </div>

          {/* Business type cards */}
          <div className="space-y-3">
            {businessTypes.map((business, index) => (
              <motion.button
                key={business.id}
                onClick={() => setSelected(business.id)}
                className={`w-full p-4 rounded-2xl bg-white border-2 transition-all flex items-center gap-4 text-left ${
                  selected === business.id 
                    ? "border-primary shadow-md" 
                    : "border-transparent shadow-sm hover:shadow-md"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.08 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#FDF0E8] flex items-center justify-center text-primary">
                  {business.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-secondary">{business.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {business.description}
                  </p>
                </div>
                
                <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <motion.div 
        className="px-5 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Button 
          onClick={handleContinue}
          disabled={!selected}
          className={`w-full py-6 text-base font-semibold rounded-2xl transition-all ${
            selected 
              ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
              : "bg-[#E8DDD6] text-muted-foreground cursor-not-allowed"
          }`}
        >
          Continue to My Path
        </Button>
        <p className="text-xs text-center text-muted-foreground mt-4">
          You can change your selection later in the Path settings.
        </p>
      </motion.div>
    </div>
  );
};

export default BusinessTypeScreen;
