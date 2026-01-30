import { motion } from "framer-motion";
import { ChevronRightIcon } from "@/components/icons";

interface BusinessTypeScreenProps {
  onSelect: (businessType: string, businessName: string) => void;
  onBack: () => void;
}

// Business type configurations with solid warm colors matching the page
const businessTypes = [
  {
    id: "creator",
    name: "Insta/YT Creator",
    description: "Build your personal brand & monetize content",
    emoji: "🎬",
    iconBg: "bg-secondary",
  },
  {
    id: "cloud-kitchen",
    name: "Cloud Kitchen",
    description: "Launch a delivery-first food business",
    emoji: "🍳",
    iconBg: "bg-[#D4A394]",
  },
  {
    id: "ecommerce",
    name: "Ecommerce/Dropshipping",
    description: "Sell products online without inventory",
    emoji: "📦",
    iconBg: "bg-[#6B9B8E]",
  },
  {
    id: "stock-trader",
    name: "Stock Trader",
    description: "Master markets & build trading income",
    emoji: "📈",
    iconBg: "bg-secondary",
  },
];

const BusinessTypeScreen = ({ onSelect, onBack }: BusinessTypeScreenProps) => {
  return (
    <div className="min-h-screen bg-[#F8F6F3] subtle-grid flex flex-col relative overflow-hidden">

      {/* Header */}
      <motion.div 
        className="px-5 pt-6 pb-4 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back button and logo */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-secondary hover:bg-muted transition-colors shadow-sm"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E8B4A6] to-[#D4A394] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="font-bold text-secondary">Moonshot</span>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Title section */}
          <div className="mb-6">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-2">Choose Your Path</p>
            <h1 className="text-3xl font-bold text-secondary leading-tight">
              What do you want<br/>to build?
            </h1>
          </div>

          {/* Business type cards */}
          <div className="space-y-3">
            {businessTypes.map((business, index) => (
              <motion.button
                key={business.id}
                onClick={() => onSelect(business.id, business.name)}
                className={`w-full p-4 rounded-2xl bg-white border border-border/50 shadow-sm transition-all flex items-center gap-4 text-left group hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] hover:border-primary/30`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {/* Emoji icon */}
                <div className={`w-14 h-14 rounded-2xl ${business.iconBg} flex items-center justify-center text-2xl shadow-md`}>
                  {business.emoji}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-secondary text-base">{business.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5 truncate">
                    {business.description}
                  </p>
                </div>
                
                <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <ChevronRightIcon className="w-4 h-4" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom hint */}
      <motion.div 
        className="px-5 pb-8 pt-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-xs text-center text-muted-foreground">
          Each path includes tailored modules for the Indian market
        </p>
      </motion.div>
    </div>
  );
};

export default BusinessTypeScreen;
