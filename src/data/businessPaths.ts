// Business Path Definitions - 8 modules per business type with unique phases

export interface ModuleDefinition {
  id: number;
  title: string;
  description: string;
  icon: string;
  lessonsCount: number;
  estimatedTime: string;
}

export interface BusinessPath {
  id: string;
  name: string;
  gradient: string;
  modules: ModuleDefinition[];
}

// Cloud Kitchen Path - 8 Modules
export const cloudKitchenPath: BusinessPath = {
  id: "cloud-kitchen",
  name: "Cloud Kitchen",
  gradient: "from-orange-500 to-red-500",
  modules: [
    { id: 1, title: "Regulations & Licenses", description: "FSSAI, GST, Trade License essentials", icon: "📋", lessonsCount: 10, estimatedTime: "45 min" },
    { id: 2, title: "Business Structure & Costs", description: "Legal structure, capital planning, break-even", icon: "💰", lessonsCount: 10, estimatedTime: "50 min" },
    { id: 3, title: "Location & Setup", description: "Finding space, equipment, kitchen layout", icon: "🏠", lessonsCount: 10, estimatedTime: "45 min" },
    { id: 4, title: "Menu Engineering", description: "Pricing, food cost, menu psychology", icon: "🍽️", lessonsCount: 10, estimatedTime: "50 min" },
    { id: 5, title: "Platform Onboarding", description: "Swiggy, Zomato listing & optimization", icon: "📱", lessonsCount: 8, estimatedTime: "40 min" },
    { id: 6, title: "Operations & Staff", description: "Hiring, SOPs, kitchen efficiency", icon: "👥", lessonsCount: 10, estimatedTime: "45 min" },
    { id: 7, title: "Marketing & Growth", description: "Reviews, promotions, customer retention", icon: "📈", lessonsCount: 8, estimatedTime: "40 min" },
    { id: 8, title: "Launch Readiness", description: "Pre-launch checklist, day 1 execution", icon: "🚀", lessonsCount: 8, estimatedTime: "35 min" },
  ]
};

// Content Creator Path - 8 Modules
export const creatorPath: BusinessPath = {
  id: "creator",
  name: "Content Creator",
  gradient: "from-purple-500 to-pink-500",
  modules: [
    { id: 1, title: "Niche Discovery", description: "Finding your unique positioning", icon: "🎯", lessonsCount: 8, estimatedTime: "40 min" },
    { id: 2, title: "Content Strategy", description: "Content pillars, formats, scheduling", icon: "📝", lessonsCount: 10, estimatedTime: "50 min" },
    { id: 3, title: "Platform Mastery", description: "Algorithm, features, growth hacks", icon: "📱", lessonsCount: 10, estimatedTime: "50 min" },
    { id: 4, title: "Production Basics", description: "Filming, editing, equipment on budget", icon: "🎬", lessonsCount: 8, estimatedTime: "45 min" },
    { id: 5, title: "Building Audience", description: "Engagement, community, collaborations", icon: "👥", lessonsCount: 10, estimatedTime: "50 min" },
    { id: 6, title: "Monetization Paths", description: "Brand deals, affiliate, products", icon: "💰", lessonsCount: 10, estimatedTime: "55 min" },
    { id: 7, title: "Legal & Finance", description: "Taxes, contracts, business setup", icon: "📋", lessonsCount: 8, estimatedTime: "40 min" },
    { id: 8, title: "Scaling Up", description: "Team, automation, multiple platforms", icon: "🚀", lessonsCount: 8, estimatedTime: "40 min" },
  ]
};

// Ecommerce/Dropshipping Path - 8 Modules
export const ecommercePath: BusinessPath = {
  id: "ecommerce",
  name: "Ecommerce",
  gradient: "from-blue-500 to-cyan-500",
  modules: [
    { id: 1, title: "Product Research", description: "Finding winning products, validation", icon: "🔍", lessonsCount: 10, estimatedTime: "50 min" },
    { id: 2, title: "Supplier & Sourcing", description: "Vendor selection, negotiation, quality", icon: "🤝", lessonsCount: 8, estimatedTime: "45 min" },
    { id: 3, title: "Store Setup", description: "Platform choice, design, checkout flow", icon: "🏪", lessonsCount: 10, estimatedTime: "55 min" },
    { id: 4, title: "Product Listings", description: "Photography, copy, SEO optimization", icon: "📸", lessonsCount: 8, estimatedTime: "45 min" },
    { id: 5, title: "Pricing & Margins", description: "Cost analysis, competitive pricing", icon: "💰", lessonsCount: 8, estimatedTime: "40 min" },
    { id: 6, title: "Marketing & Ads", description: "Social ads, influencers, email", icon: "📣", lessonsCount: 10, estimatedTime: "55 min" },
    { id: 7, title: "Fulfillment & Ops", description: "Shipping, returns, customer service", icon: "📦", lessonsCount: 10, estimatedTime: "50 min" },
    { id: 8, title: "Scale & Automate", description: "Analytics, optimization, expansion", icon: "🚀", lessonsCount: 8, estimatedTime: "45 min" },
  ]
};

// Stock Trader Path - 8 Modules
export const stockTraderPath: BusinessPath = {
  id: "stock-trader",
  name: "Stock Trader",
  gradient: "from-green-500 to-emerald-500",
  modules: [
    { id: 1, title: "Market Fundamentals", description: "How markets work, order types, basics", icon: "📊", lessonsCount: 10, estimatedTime: "55 min" },
    { id: 2, title: "Account Setup", description: "Broker selection, demat, platforms", icon: "🏦", lessonsCount: 8, estimatedTime: "40 min" },
    { id: 3, title: "Technical Analysis", description: "Charts, indicators, patterns", icon: "📈", lessonsCount: 10, estimatedTime: "60 min" },
    { id: 4, title: "Fundamental Analysis", description: "Financial statements, valuations", icon: "📋", lessonsCount: 10, estimatedTime: "55 min" },
    { id: 5, title: "Trading Strategies", description: "Day trading, swing, position", icon: "🎯", lessonsCount: 10, estimatedTime: "55 min" },
    { id: 6, title: "Risk Management", description: "Position sizing, stop loss, psychology", icon: "🛡️", lessonsCount: 10, estimatedTime: "50 min" },
    { id: 7, title: "Tax & Compliance", description: "Capital gains, reporting, rules", icon: "📑", lessonsCount: 8, estimatedTime: "45 min" },
    { id: 8, title: "Building Systems", description: "Journaling, review, continuous learning", icon: "🚀", lessonsCount: 8, estimatedTime: "40 min" },
  ]
};

// Get path by business type
export const getBusinessPath = (businessType: string): BusinessPath => {
  switch (businessType) {
    case "creator":
      return creatorPath;
    case "cloud-kitchen":
      return cloudKitchenPath;
    case "ecommerce":
      return ecommercePath;
    case "stock-trader":
      return stockTraderPath;
    default:
      return cloudKitchenPath;
  }
};

// Get gradient for business type
export const getBusinessGradient = (businessType: string): string => {
  return getBusinessPath(businessType).gradient;
};

// Get all paths
export const allBusinessPaths: BusinessPath[] = [
  cloudKitchenPath,
  creatorPath,
  ecommercePath,
  stockTraderPath,
];
