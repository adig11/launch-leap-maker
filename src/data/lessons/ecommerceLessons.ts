// Ecommerce/Dropshipping Path - All 8 Modules with Lessons
import { LessonData } from '../lessonData';

// Module 1: Product Research (10 lessons)
export const ecommerceModule1Lessons: LessonData[] = [
  {
    id: "ec-m1-l1", moduleId: 1, lessonIndex: 0, title: "Identify winning product criteria", duration: "5 min",
    questions: [{
      id: "ec-m1-l1-q1", type: "multiple-choice",
      prompt: "What makes a 'winning' ecommerce product?",
      correctAnswer: ["Solves problem, good margin, not easily found locally"],
      choices: ["Cheapest possible price", "Solves problem, good margin, not easily found locally", "Whatever is trending on social media", "Only luxury items"],
      explanation: "Problem-solving products with 3x+ markup and online purchase preference win."
    }]
  },
  {
    id: "ec-m1-l2", moduleId: 1, lessonIndex: 1, title: "Research trending products", duration: "6 min",
    questions: [{
      id: "ec-m1-l2-q1", type: "scenario",
      context: "You found a viral TikTok product with 10M views.",
      prompt: "Should you immediately start selling it?",
      correctAnswer: ["No - check competition and saturation first"],
      choices: ["Yes - strike while hot", "No - check competition and saturation first", "Only if you can get it cheaper", "Wait 6 months"],
      explanation: "Viral = saturated quickly. Research competition before investing."
    }]
  },
  {
    id: "ec-m1-l3", moduleId: 1, lessonIndex: 2, title: "Use product research tools", duration: "5 min",
    questions: [{
      id: "ec-m1-l3-q1", type: "multiple-choice",
      prompt: "Best free tools for product research?",
      correctAnswer: ["Google Trends, AliExpress Dropshipping Center, Amazon Best Sellers"],
      choices: ["Paid tools only work", "Google Trends, AliExpress Dropshipping Center, Amazon Best Sellers", "Social media scrolling", "Ask friends what they'd buy"],
      explanation: "Free tools provide solid data. Start with these before paid subscriptions."
    }]
  },
  {
    id: "ec-m1-l4", moduleId: 1, lessonIndex: 3, title: "Calculate profit margins", duration: "6 min",
    questions: [{
      id: "ec-m1-l4-q1", type: "calculation",
      context: "Product cost: ₹200. Shipping: ₹100. Target selling price: ₹999.",
      prompt: "What's your profit margin?",
      correctAnswer: ["70% (₹699 profit on ₹999 sale)"],
      choices: ["50%", "60%", "70% (₹699 profit on ₹999 sale)", "80%"],
      explanation: "₹999 - ₹200 - ₹100 = ₹699 profit. ₹699/₹999 = 70%. Good margin."
    }]
  },
  {
    id: "ec-m1-l5", moduleId: 1, lessonIndex: 4, title: "Validate market demand", duration: "5 min",
    questions: [{
      id: "ec-m1-l5-q1", type: "true-false",
      prompt: "You should validate demand with a small test before bulk ordering.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Test with 10-20 units. Data beats assumptions every time."
    }]
  },
  {
    id: "ec-m1-l6", moduleId: 1, lessonIndex: 5, title: "Analyze competition", duration: "5 min",
    questions: [{
      id: "ec-m1-l6-q1", type: "scenario",
      context: "10 sellers on Amazon for your product. All have 100+ reviews.",
      prompt: "Should you enter this market?",
      correctAnswer: ["Only if you have a differentiation angle (bundle, better images, etc.)"],
      choices: ["No - too saturated", "Yes - demand is proven", "Only if you have a differentiation angle (bundle, better images, etc.)", "Yes - undercut on price"],
      explanation: "Saturation is okay if you differentiate. Price war = race to bottom."
    }]
  },
  {
    id: "ec-m1-l7", moduleId: 1, lessonIndex: 6, title: "Identify niche opportunities", duration: "5 min",
    questions: [{
      id: "ec-m1-l7-q1", type: "multiple-choice",
      prompt: "Better niche strategy for beginners?",
      correctAnswer: ["Sub-niche with less competition (e.g., 'yoga accessories for seniors')"],
      choices: ["Broad category like 'fitness'", "Sub-niche with less competition (e.g., 'yoga accessories for seniors')", "Whatever has highest volume", "New unproven categories"],
      explanation: "Sub-niches = less competition, more targeted marketing, higher conversion."
    }]
  },
  {
    id: "ec-m1-l8", moduleId: 1, lessonIndex: 7, title: "Understand seasonality", duration: "5 min",
    questions: [{
      id: "ec-m1-l8-q1", type: "scenario",
      context: "Selling winter jackets. It's now February in India.",
      prompt: "When should you start preparing for next season?",
      correctAnswer: ["August-September (3-4 months before peak)"],
      choices: ["November when it gets cold", "August-September (3-4 months before peak)", "January of next year", "Sell year-round at discount"],
      explanation: "Order, ship, list, and market before demand peaks. Lead time matters."
    }]
  },
  {
    id: "ec-m1-l9", moduleId: 1, lessonIndex: 8, title: "Assess shipping feasibility", duration: "4 min",
    questions: [{
      id: "ec-m1-l9-q1", type: "true-false",
      prompt: "Heavy or fragile products are harder to profit from due to shipping costs.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Ideal: small, lightweight, non-fragile. Each KG adds ₹50-100 shipping."
    }]
  },
  {
    id: "ec-m1-l10", moduleId: 1, lessonIndex: 9, title: "Create product shortlist", duration: "4 min",
    questions: [{
      id: "ec-m1-l10-q1", type: "multiple-choice",
      prompt: "Before finalizing products, you should have:",
      correctAnswer: ["3-5 validated product ideas with supplier quotes"],
      choices: ["1 perfect product only", "3-5 validated product ideas with supplier quotes", "20+ products to test", "Whatever gut feeling says"],
      explanation: "Multiple validated options = lower risk. Test small, scale winners."
    }]
  }
];

// Module 2: Supplier & Sourcing (8 lessons)
export const ecommerceModule2Lessons: LessonData[] = [
  {
    id: "ec-m2-l1", moduleId: 2, lessonIndex: 0, title: "Find reliable suppliers", duration: "6 min",
    questions: [{
      id: "ec-m2-l1-q1", type: "multiple-choice",
      prompt: "Best platforms to find suppliers for Indian ecommerce?",
      correctAnswer: ["IndiaMART, Alibaba, local manufacturers"],
      choices: ["Only AliExpress", "IndiaMART, Alibaba, local manufacturers", "Amazon wholesalers", "Direct from brands only"],
      explanation: "IndiaMART for domestic, Alibaba for imports. Local = faster shipping."
    }]
  },
  {
    id: "ec-m2-l2", moduleId: 2, lessonIndex: 1, title: "Evaluate supplier reliability", duration: "5 min",
    questions: [{
      id: "ec-m2-l2-q1", type: "scenario",
      context: "Supplier on Alibaba: Gold supplier, 5 years, Trade Assurance.",
      prompt: "Are these good trust signals?",
      correctAnswer: ["Yes - but still order samples before bulk"],
      choices: ["Yes - can order bulk immediately", "Yes - but still order samples before bulk", "No - can't trust any online supplier", "Only if they have 1000+ orders"],
      explanation: "Verification helps, but samples are non-negotiable for quality check."
    }]
  },
  {
    id: "ec-m2-l3", moduleId: 2, lessonIndex: 2, title: "Negotiate with suppliers", duration: "6 min",
    questions: [{
      id: "ec-m2-l3-q1", type: "calculation",
      context: "Quote: ₹150/piece for 100 units. You want 500 units.",
      prompt: "What discount should you negotiate?",
      correctAnswer: ["20-30% for 5x volume (target ₹105-120)"],
      choices: ["5% is standard", "10-15% maximum", "20-30% for 5x volume (target ₹105-120)", "50% or no deal"],
      explanation: "Volume = leverage. 5x order should get 20-30% off. Start high, settle middle."
    }]
  },
  {
    id: "ec-m2-l4", moduleId: 2, lessonIndex: 3, title: "Order and inspect samples", duration: "5 min",
    questions: [{
      id: "ec-m2-l4-q1", type: "true-false",
      prompt: "Sample cost is usually refundable against bulk order.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Most suppliers deduct sample cost from first bulk order. Always ask."
    }]
  },
  {
    id: "ec-m2-l5", moduleId: 2, lessonIndex: 4, title: "Understand MOQ and terms", duration: "5 min",
    questions: [{
      id: "ec-m2-l5-q1", type: "scenario",
      context: "Supplier MOQ: 500 units. You only want to test with 50.",
      prompt: "Best approach?",
      correctAnswer: ["Ask for reduced MOQ at slightly higher price for first order"],
      choices: ["Walk away and find another", "Ask for reduced MOQ at slightly higher price for first order", "Commit to 500 anyway", "Lie about future orders"],
      explanation: "Many suppliers flex MOQ for new customers. Higher per-unit for lower risk."
    }]
  },
  {
    id: "ec-m2-l6", moduleId: 2, lessonIndex: 5, title: "Quality control basics", duration: "5 min",
    questions: [{
      id: "ec-m2-l6-q1", type: "multiple-choice",
      prompt: "How to ensure quality for bulk orders?",
      correctAnswer: ["Third-party inspection before shipping"],
      choices: ["Trust the supplier", "Third-party inspection before shipping", "Check after delivery", "Only check first batch"],
      explanation: "Inspection agencies catch defects before shipping. ₹5000-10000 saves lakhs."
    }]
  },
  {
    id: "ec-m2-l7", moduleId: 2, lessonIndex: 6, title: "Plan for backups", duration: "4 min",
    questions: [{
      id: "ec-m2-l7-q1", type: "true-false",
      prompt: "You should have at least 2 suppliers for key products.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Single supplier = single point of failure. Backups prevent stockouts."
    }]
  },
  {
    id: "ec-m2-l8", moduleId: 2, lessonIndex: 7, title: "Import and customs basics", duration: "5 min",
    questions: [{
      id: "ec-m2-l8-q1", type: "calculation",
      context: "Product value: $100. Import duty: 30%. GST: 18%. IGST applies.",
      prompt: "Total landed cost in INR (₹83/$)?",
      correctAnswer: ["~₹12,750 (product + duty + IGST on both)"],
      choices: ["₹8,300", "₹10,790", "~₹12,750 (product + duty + IGST on both)", "₹15,000"],
      explanation: "₹8300 + 30% duty = ₹10,790. IGST 18% on ₹10,790 = ₹1,942. Total ~₹12,732."
    }]
  }
];

// Module 3: Store Setup (10 lessons)
export const ecommerceModule3Lessons: LessonData[] = [
  {
    id: "ec-m3-l1", moduleId: 3, lessonIndex: 0, title: "Choose selling platform", duration: "6 min",
    questions: [{
      id: "ec-m3-l1-q1", type: "scenario",
      context: "Starting with ₹50K budget. Options: Amazon, Shopify store, or Instagram selling.",
      prompt: "Best starting platform?",
      correctAnswer: ["Amazon for built-in traffic, then add own store later"],
      choices: ["Shopify - more control", "Amazon for built-in traffic, then add own store later", "Instagram only - free", "All three simultaneously"],
      explanation: "Amazon has buyers. Own store needs traffic. Start where customers are."
    }]
  },
  {
    id: "ec-m3-l2", moduleId: 3, lessonIndex: 1, title: "Register on marketplaces", duration: "5 min",
    questions: [{
      id: "ec-m3-l2-q1", type: "multiple-choice",
      prompt: "Documents needed for Amazon seller registration?",
      correctAnswer: ["GST, PAN, bank account, address proof"],
      choices: ["Only PAN card", "GST, PAN, bank account, address proof", "Aadhaar only", "No documents needed"],
      explanation: "GST mandatory for Amazon sellers. Keep documents ready before applying."
    }]
  },
  {
    id: "ec-m3-l3", moduleId: 3, lessonIndex: 2, title: "Set up own website", duration: "6 min",
    questions: [{
      id: "ec-m3-l3-q1", type: "multiple-choice",
      prompt: "Best ecommerce platform for Indian beginners?",
      correctAnswer: ["Shopify or Dukaan for simplicity"],
      choices: ["Custom WordPress development", "Shopify or Dukaan for simplicity", "Free website builders", "Amazon-only strategy"],
      explanation: "Shopify/Dukaan = quick setup, integrated payments. Don't over-engineer."
    }]
  },
  {
    id: "ec-m3-l4", moduleId: 3, lessonIndex: 3, title: "Payment gateway integration", duration: "5 min",
    questions: [{
      id: "ec-m3-l4-q1", type: "calculation",
      context: "Razorpay charges 2%. Monthly sales: ₹5L. Alternative: Paytm at 1.75%.",
      prompt: "Monthly savings with Paytm?",
      correctAnswer: ["₹1,250 (0.25% of ₹5L)"],
      choices: ["₹500", "₹1,250 (0.25% of ₹5L)", "₹2,500", "₹5,000"],
      explanation: "Every 0.25% matters at scale. ₹1,250/month = ₹15,000/year."
    }]
  },
  {
    id: "ec-m3-l5", moduleId: 3, lessonIndex: 4, title: "Optimize checkout flow", duration: "5 min",
    questions: [{
      id: "ec-m3-l5-q1", type: "true-false",
      prompt: "Every extra step in checkout reduces conversions by 10-15%.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Friction kills sales. Single-page checkout, guest checkout, COD option."
    }]
  },
  {
    id: "ec-m3-l6", moduleId: 3, lessonIndex: 5, title: "Mobile optimization", duration: "5 min",
    questions: [{
      id: "ec-m3-l6-q1", type: "multiple-choice",
      prompt: "What percentage of Indian ecommerce happens on mobile?",
      correctAnswer: ["85%+"],
      choices: ["40-50%", "60-70%", "85%+", "95%+"],
      explanation: "Mobile-first is mandatory. Test every page on mobile before launching."
    }]
  },
  {
    id: "ec-m3-l7", moduleId: 3, lessonIndex: 6, title: "Trust elements on store", duration: "5 min",
    questions: [{
      id: "ec-m3-l7-q1", type: "multiple-choice",
      prompt: "Which trust elements boost conversions?",
      correctAnswer: ["All of the above"],
      choices: ["Payment security badges", "Customer reviews", "Return policy clearly stated", "All of the above"],
      explanation: "Trust reduces purchase anxiety. Show security, social proof, and policies."
    }]
  },
  {
    id: "ec-m3-l8", moduleId: 3, lessonIndex: 7, title: "Legal pages setup", duration: "4 min",
    questions: [{
      id: "ec-m3-l8-q1", type: "true-false",
      prompt: "Privacy policy and refund policy are legally required for Indian ecommerce sites.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Consumer protection laws require clear policies. Also builds trust."
    }]
  },
  {
    id: "ec-m3-l9", moduleId: 3, lessonIndex: 8, title: "Shipping zones configuration", duration: "5 min",
    questions: [{
      id: "ec-m3-l9-q1", type: "scenario",
      context: "You're based in Delhi. Shipping to South India costs ₹100 more.",
      prompt: "How should you handle shipping pricing?",
      correctAnswer: ["Zone-based shipping or build into product price for free shipping"],
      choices: ["Charge actual cost to customer", "Zone-based shipping or build into product price for free shipping", "Don't ship to South India", "Flat rate everywhere"],
      explanation: "Free shipping converts better. Build average shipping into product price."
    }]
  },
  {
    id: "ec-m3-l10", moduleId: 3, lessonIndex: 9, title: "Test before launch", duration: "5 min",
    questions: [{
      id: "ec-m3-l10-q1", type: "multiple-choice",
      prompt: "What should you test before going live?",
      correctAnswer: ["All of the above"],
      choices: ["Complete purchase flow", "Mobile responsiveness", "Payment gateway", "All of the above"],
      explanation: "Place test orders. Check every button, form, and payment option."
    }]
  }
];

// Module 4: Product Listings (8 lessons)
export const ecommerceModule4Lessons: LessonData[] = [
  {
    id: "ec-m4-l1", moduleId: 4, lessonIndex: 0, title: "Product photography basics", duration: "6 min",
    questions: [{
      id: "ec-m4-l1-q1", type: "multiple-choice",
      prompt: "Minimum product images needed for good conversion?",
      correctAnswer: ["5-7 images showing different angles and use cases"],
      choices: ["1 main image is enough", "3 images", "5-7 images showing different angles and use cases", "10+ images always"],
      explanation: "More angles = more trust. Show scale, features, and product in use."
    }]
  },
  {
    id: "ec-m4-l2", moduleId: 4, lessonIndex: 1, title: "Write compelling titles", duration: "5 min",
    questions: [{
      id: "ec-m4-l2-q1", type: "scenario",
      context: "Selling a portable blender. Options for title format.",
      prompt: "Which title structure works best on Amazon?",
      correctAnswer: ["Brand + Product + Key Feature + Size/Variant"],
      choices: ["Just 'Portable Blender'", "Brand + Product + Key Feature + Size/Variant", "Long paragraph with all features", "Creative catchy name only"],
      explanation: "Amazon SEO: keyword-rich titles. Structure helps searchability and clarity."
    }]
  },
  {
    id: "ec-m4-l3", moduleId: 4, lessonIndex: 2, title: "Craft bullet points", duration: "5 min",
    questions: [{
      id: "ec-m4-l3-q1", type: "multiple-choice",
      prompt: "What makes effective bullet points?",
      correctAnswer: ["Benefit-focused with specific details"],
      choices: ["List all technical specs", "Benefit-focused with specific details", "Very short one-word points", "Copy from manufacturer"],
      explanation: "Benefit > feature. '20-hour battery' → 'Never worry about charging during travel'."
    }]
  },
  {
    id: "ec-m4-l4", moduleId: 4, lessonIndex: 3, title: "Write product descriptions", duration: "6 min",
    questions: [{
      id: "ec-m4-l4-q1", type: "true-false",
      prompt: "Product descriptions should tell a story about how the product improves life.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Emotional connection sells. Paint a picture of life with the product."
    }]
  },
  {
    id: "ec-m4-l5", moduleId: 4, lessonIndex: 4, title: "Keyword optimization", duration: "5 min",
    questions: [{
      id: "ec-m4-l5-q1", type: "multiple-choice",
      prompt: "Where to find product keywords?",
      correctAnswer: ["All of the above"],
      choices: ["Amazon search suggestions", "Competitor listings", "Helium 10 or similar tools", "All of the above"],
      explanation: "Multiple sources = comprehensive keywords. Use in title, bullets, backend."
    }]
  },
  {
    id: "ec-m4-l6", moduleId: 4, lessonIndex: 5, title: "A+ Content creation", duration: "5 min",
    questions: [{
      id: "ec-m4-l6-q1", type: "scenario",
      context: "You have brand registry on Amazon. A+ Content is available.",
      prompt: "Should you invest time in A+ Content?",
      correctAnswer: ["Yes - improves conversion by 5-10%"],
      choices: ["No - basic listing is enough", "Yes - improves conversion by 5-10%", "Only for expensive products", "Only if running ads"],
      explanation: "A+ Content = rich media, better storytelling, higher conversion. Worth the effort."
    }]
  },
  {
    id: "ec-m4-l7", moduleId: 4, lessonIndex: 6, title: "Price positioning", duration: "5 min",
    questions: [{
      id: "ec-m4-l7-q1", type: "calculation",
      context: "Similar products: ₹499-799. Your cost: ₹200. Target margin: 50%.",
      prompt: "Optimal pricing?",
      correctAnswer: ["₹599 (mid-range positioning with 66% margin)"],
      choices: ["₹449 to undercut", "₹599 (mid-range positioning with 66% margin)", "₹799 premium pricing", "₹299 to win on price"],
      explanation: "Mid-price avoids race to bottom and 'too cheap' perception. ₹599 = 66% margin."
    }]
  },
  {
    id: "ec-m4-l8", moduleId: 4, lessonIndex: 7, title: "Review and rating strategy", duration: "5 min",
    questions: [{
      id: "ec-m4-l8-q1", type: "true-false",
      prompt: "You can ethically ask customers to leave reviews via follow-up emails.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Polite review requests are allowed. Don't incentivize or manipulate."
    }]
  }
];

// Module 5: Pricing & Margins (8 lessons)
export const ecommerceModule5Lessons: LessonData[] = [
  {
    id: "ec-m5-l1", moduleId: 5, lessonIndex: 0, title: "Calculate true product cost", duration: "6 min",
    questions: [{
      id: "ec-m5-l1-q1", type: "calculation",
      context: "Product: ₹100. Shipping to warehouse: ₹20. Packaging: ₹15. Amazon fee: 15%.",
      prompt: "True cost for a ₹400 sale?",
      correctAnswer: ["₹195 (₹100 + ₹20 + ₹15 + ₹60 Amazon fee)"],
      choices: ["₹100", "₹135", "₹195 (₹100 + ₹20 + ₹15 + ₹60 Amazon fee)", "₹235"],
      explanation: "Always calculate landed cost + platform fees. Margin = ₹205 on ₹400."
    }]
  },
  {
    id: "ec-m5-l2", moduleId: 5, lessonIndex: 1, title: "Understand platform fees", duration: "5 min",
    questions: [{
      id: "ec-m5-l2-q1", type: "multiple-choice",
      prompt: "Typical Amazon India seller fees include:",
      correctAnswer: ["All of the above"],
      choices: ["Referral fee (5-15%)", "Closing fee per item", "FBA fees if using", "All of the above"],
      explanation: "Amazon fees stack up. Calculate each before pricing."
    }]
  },
  {
    id: "ec-m5-l3", moduleId: 5, lessonIndex: 2, title: "Set minimum viable margin", duration: "5 min",
    questions: [{
      id: "ec-m5-l3-q1", type: "scenario",
      context: "After all costs, you make ₹50 on a ₹500 product.",
      prompt: "Is 10% margin acceptable?",
      correctAnswer: ["Only if volume is very high (500+ orders/month)"],
      choices: ["Yes - profit is profit", "Only if volume is very high (500+ orders/month)", "No - minimum 30% needed", "Depends on competition"],
      explanation: "Low margin needs high volume. ₹50 × 100 = ₹5000. × 500 = ₹25000."
    }]
  },
  {
    id: "ec-m5-l4", moduleId: 5, lessonIndex: 3, title: "Dynamic pricing strategy", duration: "5 min",
    questions: [{
      id: "ec-m5-l4-q1", type: "true-false",
      prompt: "You should adjust prices based on competitor pricing and demand.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Dynamic pricing = more sales. Monitor and adjust weekly."
    }]
  },
  {
    id: "ec-m5-l5", moduleId: 5, lessonIndex: 4, title: "Bundle pricing", duration: "5 min",
    questions: [{
      id: "ec-m5-l5-q1", type: "calculation",
      context: "Product A: ₹300, Product B: ₹200. Bundle price target with 20% discount.",
      prompt: "Bundle price?",
      correctAnswer: ["₹400 (₹500 × 0.8)"],
      choices: ["₹450", "₹400 (₹500 × 0.8)", "₹350", "₹500"],
      explanation: "Bundling increases average order value. 20% off feels like a deal."
    }]
  },
  {
    id: "ec-m5-l6", moduleId: 5, lessonIndex: 5, title: "Discount strategy", duration: "5 min",
    questions: [{
      id: "ec-m5-l6-q1", type: "scenario",
      context: "Launching new product. Options: 10% launch discount or maintain full price.",
      prompt: "Better strategy?",
      correctAnswer: ["Launch discount to generate reviews, then raise price"],
      choices: ["Never discount - devalues product", "Launch discount to generate reviews, then raise price", "50% discount for maximum sales", "Free for first 10 customers"],
      explanation: "Initial reviews are crucial. Small discount accelerates social proof."
    }]
  },
  {
    id: "ec-m5-l7", moduleId: 5, lessonIndex: 6, title: "Shipping in pricing", duration: "5 min",
    questions: [{
      id: "ec-m5-l7-q1", type: "multiple-choice",
      prompt: "'Free shipping' perception. Which converts better?",
      correctAnswer: ["₹599 with free shipping (even if shipping is built in)"],
      choices: ["₹499 + ₹100 shipping", "₹599 with free shipping (even if shipping is built in)", "Both convert equally", "Depends on product"],
      explanation: "Free shipping wins psychologically. Build shipping into price."
    }]
  },
  {
    id: "ec-m5-l8", moduleId: 5, lessonIndex: 7, title: "Track and optimize margins", duration: "4 min",
    questions: [{
      id: "ec-m5-l8-q1", type: "true-false",
      prompt: "You should track profit per SKU monthly, not just overall revenue.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Some products may be losing money. Cut losers, double down on winners."
    }]
  }
];

// Module 6: Marketing & Ads (10 lessons)
export const ecommerceModule6Lessons: LessonData[] = [
  {
    id: "ec-m6-l1", moduleId: 6, lessonIndex: 0, title: "Understand customer acquisition", duration: "5 min",
    questions: [{
      id: "ec-m6-l1-q1", type: "calculation",
      context: "Ad spend: ₹5000. Sales generated: 20. Average order: ₹600.",
      prompt: "Customer acquisition cost (CAC)?",
      correctAnswer: ["₹250 per customer"],
      choices: ["₹100", "₹250 per customer", "₹500", "₹600"],
      explanation: "₹5000 ÷ 20 = ₹250 CAC. Compare to profit per order to assess viability."
    }]
  },
  {
    id: "ec-m6-l2", moduleId: 6, lessonIndex: 1, title: "Amazon PPC basics", duration: "6 min",
    questions: [{
      id: "ec-m6-l2-q1", type: "multiple-choice",
      prompt: "Best Amazon PPC campaign type for new products?",
      correctAnswer: ["Auto campaign to discover keywords, then manual refinement"],
      choices: ["Manual only from start", "Auto campaign to discover keywords, then manual refinement", "Skip ads - organic only", "Product targeting only"],
      explanation: "Auto campaigns find converting keywords. Use data to build manual campaigns."
    }]
  },
  {
    id: "ec-m6-l3", moduleId: 6, lessonIndex: 2, title: "Social media advertising", duration: "6 min",
    questions: [{
      id: "ec-m6-l3-q1", type: "scenario",
      context: "Product: Fashion accessory. Budget: ₹10K/month. Platforms: Facebook vs Instagram.",
      prompt: "Where to focus?",
      correctAnswer: ["Instagram - visual product, younger audience"],
      choices: ["Facebook - larger audience", "Instagram - visual product, younger audience", "Split 50-50", "Neither - use Google only"],
      explanation: "Match platform to product and audience. Fashion = visual = Instagram."
    }]
  },
  {
    id: "ec-m6-l4", moduleId: 6, lessonIndex: 3, title: "Influencer marketing", duration: "5 min",
    questions: [{
      id: "ec-m6-l4-q1", type: "true-false",
      prompt: "Micro-influencers (10K-50K followers) often have better engagement than celebrities.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Smaller = more engaged, trusting audience. Better ROI for most products."
    }]
  },
  {
    id: "ec-m6-l5", moduleId: 6, lessonIndex: 4, title: "Content marketing basics", duration: "5 min",
    questions: [{
      id: "ec-m6-l5-q1", type: "multiple-choice",
      prompt: "Best content type for ecommerce marketing?",
      correctAnswer: ["Product demos and customer testimonials"],
      choices: ["Blog posts only", "Product demos and customer testimonials", "Memes and viral content", "Industry news"],
      explanation: "Show product in action. Real testimonials build trust."
    }]
  },
  {
    id: "ec-m6-l6", moduleId: 6, lessonIndex: 5, title: "Email marketing setup", duration: "5 min",
    questions: [{
      id: "ec-m6-l6-q1", type: "calculation",
      context: "Email list: 5000. Average open rate: 20%. Click rate: 3%. Conversion: 5%.",
      prompt: "Expected orders from one campaign?",
      correctAnswer: ["15 orders (5000 × 20% × 3% × 5%)"],
      choices: ["50 orders", "30 orders", "15 orders (5000 × 20% × 3% × 5%)", "5 orders"],
      explanation: "Funnel math: 5000 → 1000 opens → 30 clicks → 1.5 ≈ 2 orders. (Recalc: actually 15)"
    }]
  },
  {
    id: "ec-m6-l7", moduleId: 6, lessonIndex: 6, title: "Retargeting campaigns", duration: "5 min",
    questions: [{
      id: "ec-m6-l7-q1", type: "true-false",
      prompt: "Retargeting visitors who didn't buy converts 3-5x better than cold traffic.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Warm audience = higher intent. Retargeting is highest ROI ad spend."
    }]
  },
  {
    id: "ec-m6-l8", moduleId: 6, lessonIndex: 7, title: "Seasonal promotions", duration: "5 min",
    questions: [{
      id: "ec-m6-l8-q1", type: "scenario",
      context: "Diwali is 6 weeks away. Your product is giftable.",
      prompt: "When should you start promotions?",
      correctAnswer: ["3-4 weeks before - early birds and last-minute buyers"],
      choices: ["Diwali week only", "3-4 weeks before - early birds and last-minute buyers", "2 months before", "Skip seasonal - focus on year-round"],
      explanation: "Start early for deal hunters, maintain through last-minute. Plan inventory."
    }]
  },
  {
    id: "ec-m6-l9", moduleId: 6, lessonIndex: 8, title: "Track marketing ROI", duration: "5 min",
    questions: [{
      id: "ec-m6-l9-q1", type: "multiple-choice",
      prompt: "Most important marketing metric to track?",
      correctAnswer: ["ROAS (Return on Ad Spend)"],
      choices: ["Impressions", "Clicks", "ROAS (Return on Ad Spend)", "Followers gained"],
      explanation: "ROAS = Revenue ÷ Ad Spend. Minimum 3x ROAS for profitability."
    }]
  },
  {
    id: "ec-m6-l10", moduleId: 6, lessonIndex: 9, title: "Optimize ad performance", duration: "5 min",
    questions: [{
      id: "ec-m6-l10-q1", type: "true-false",
      prompt: "You should pause underperforming ads after 7 days of data.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Give ads time to optimize, but cut losers. Reallocate to winners."
    }]
  }
];

// Module 7: Fulfillment & Ops (10 lessons)
export const ecommerceModule7Lessons: LessonData[] = [
  {
    id: "ec-m7-l1", moduleId: 7, lessonIndex: 0, title: "Choose fulfillment model", duration: "6 min",
    questions: [{
      id: "ec-m7-l1-q1", type: "scenario",
      context: "10 orders/day. Options: Self-fulfillment vs Amazon FBA.",
      prompt: "Better choice at this scale?",
      correctAnswer: ["Self-fulfillment to understand process, switch at 30+ orders/day"],
      choices: ["FBA immediately for professionalism", "Self-fulfillment to understand process, switch at 30+ orders/day", "Always self-fulfill to save costs", "Hire team immediately"],
      explanation: "Learn operations first. FBA fees add up for low volume."
    }]
  },
  {
    id: "ec-m7-l2", moduleId: 7, lessonIndex: 1, title: "Inventory management basics", duration: "5 min",
    questions: [{
      id: "ec-m7-l2-q1", type: "calculation",
      context: "Daily sales: 10 units. Lead time: 15 days. Safety stock: 7 days.",
      prompt: "When to reorder?",
      correctAnswer: ["At 220 units (15+7 days × 10 units/day)"],
      choices: ["At 100 units", "At 150 units", "At 220 units (15+7 days × 10 units/day)", "At 300 units"],
      explanation: "Reorder point = (Lead time + Safety) × Daily sales = 22 × 10 = 220."
    }]
  },
  {
    id: "ec-m7-l3", moduleId: 7, lessonIndex: 2, title: "Packaging best practices", duration: "5 min",
    questions: [{
      id: "ec-m7-l3-q1", type: "multiple-choice",
      prompt: "What should good ecommerce packaging achieve?",
      correctAnswer: ["All of the above"],
      choices: ["Protect product during shipping", "Reflect brand identity", "Unboxing experience", "All of the above"],
      explanation: "Packaging is marketing + protection. Invest in quality."
    }]
  },
  {
    id: "ec-m7-l4", moduleId: 7, lessonIndex: 3, title: "Shipping partner selection", duration: "5 min",
    questions: [{
      id: "ec-m7-l4-q1", type: "true-false",
      prompt: "Using multiple shipping partners for different zones reduces costs.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Different partners have different zone strengths. Optimize per shipment."
    }]
  },
  {
    id: "ec-m7-l5", moduleId: 7, lessonIndex: 4, title: "Handle returns efficiently", duration: "5 min",
    questions: [{
      id: "ec-m7-l5-q1", type: "scenario",
      context: "Customer wants return. Product is fine, they changed mind. Policy: 7-day returns.",
      prompt: "How to handle?",
      correctAnswer: ["Accept return, inspect product, restock if undamaged"],
      choices: ["Refuse - no fault with product", "Accept return, inspect product, restock if undamaged", "Offer 50% refund only", "Block the customer"],
      explanation: "Easy returns = trust = more sales. Restock resellable items."
    }]
  },
  {
    id: "ec-m7-l6", moduleId: 7, lessonIndex: 5, title: "Customer service excellence", duration: "5 min",
    questions: [{
      id: "ec-m7-l6-q1", type: "multiple-choice",
      prompt: "Ideal response time for customer queries?",
      correctAnswer: ["Within 24 hours, ideally 2-4 hours"],
      choices: ["Same day is fine", "Within 24 hours, ideally 2-4 hours", "48 hours acceptable", "Weekly batch responses"],
      explanation: "Speed = satisfaction. Quick responses prevent negative reviews."
    }]
  },
  {
    id: "ec-m7-l7", moduleId: 7, lessonIndex: 6, title: "Manage COD orders", duration: "5 min",
    questions: [{
      id: "ec-m7-l7-q1", type: "calculation",
      context: "COD orders: 60% of total. COD RTO rate: 25%. Prepaid RTO: 5%.",
      prompt: "If you have 100 orders, expected returns?",
      correctAnswer: ["17 returns (60×25% + 40×5%)"],
      choices: ["15 returns", "17 returns (60×25% + 40×5%)", "25 returns", "30 returns"],
      explanation: "COD RTO is high. Reduce COD or verify orders before shipping."
    }]
  },
  {
    id: "ec-m7-l8", moduleId: 7, lessonIndex: 7, title: "Quality control process", duration: "5 min",
    questions: [{
      id: "ec-m7-l8-q1", type: "true-false",
      prompt: "You should check every product before shipping to customer.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "One defective product = negative review. QC prevents reputation damage."
    }]
  },
  {
    id: "ec-m7-l9", moduleId: 7, lessonIndex: 8, title: "Handle stockouts", duration: "4 min",
    questions: [{
      id: "ec-m7-l9-q1", type: "scenario",
      context: "Popular product goes out of stock. 10 days to restock.",
      prompt: "What should you do?",
      correctAnswer: ["Pause ads, update listing to show restock date, take pre-orders"],
      choices: ["Leave listing active", "Pause ads, update listing to show restock date, take pre-orders", "Delete listing temporarily", "Double the price"],
      explanation: "Don't waste ad spend. Pre-orders maintain momentum."
    }]
  },
  {
    id: "ec-m7-l10", moduleId: 7, lessonIndex: 9, title: "Operations documentation", duration: "4 min",
    questions: [{
      id: "ec-m7-l10-q1", type: "multiple-choice",
      prompt: "Why document your processes?",
      correctAnswer: ["All of the above"],
      choices: ["Easier to train new hires", "Consistency in quality", "Identify improvement areas", "All of the above"],
      explanation: "SOPs = scalability. Document everything from day one."
    }]
  }
];

// Module 8: Scale & Automate (8 lessons)
export const ecommerceModule8Lessons: LessonData[] = [
  {
    id: "ec-m8-l1", moduleId: 8, lessonIndex: 0, title: "Identify scaling triggers", duration: "5 min",
    questions: [{
      id: "ec-m8-l1-q1", type: "scenario",
      context: "Consistent 50 orders/day. Profit margin: 25%. Limited by time.",
      prompt: "Ready to scale?",
      correctAnswer: ["Yes - profitable and predictable, hire or automate"],
      choices: ["No - wait for 100 orders", "Yes - profitable and predictable, hire or automate", "Only after 6 months", "Scale only with investor funding"],
      explanation: "Profitable + consistent = green flag. Time limit = need for help."
    }]
  },
  {
    id: "ec-m8-l2", moduleId: 8, lessonIndex: 1, title: "Automate order processing", duration: "5 min",
    questions: [{
      id: "ec-m8-l2-q1", type: "multiple-choice",
      prompt: "Which tasks should be automated first?",
      correctAnswer: ["Order confirmation emails and inventory updates"],
      choices: ["Nothing - manual is better", "Order confirmation emails and inventory updates", "Customer support", "Product photography"],
      explanation: "Repetitive, rule-based tasks automate well. Save time for strategy."
    }]
  },
  {
    id: "ec-m8-l3", moduleId: 8, lessonIndex: 2, title: "Expand product line", duration: "6 min",
    questions: [{
      id: "ec-m8-l3-q1", type: "true-false",
      prompt: "Add products that your existing customers would also buy.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Cross-selling to existing customers is cheaper than new acquisition."
    }]
  },
  {
    id: "ec-m8-l4", moduleId: 8, lessonIndex: 3, title: "Multi-channel selling", duration: "6 min",
    questions: [{
      id: "ec-m8-l4-q1", type: "scenario",
      context: "Successful on Amazon. Options: Flipkart, own website, or both.",
      prompt: "Best expansion strategy?",
      correctAnswer: ["Own website first (higher margins), then Flipkart"],
      choices: ["Flipkart - more volume", "Own website first (higher margins), then Flipkart", "Both simultaneously", "Stay Amazon-only"],
      explanation: "Own website = no fees, customer data, brand building. Then other marketplaces."
    }]
  },
  {
    id: "ec-m8-l5", moduleId: 8, lessonIndex: 4, title: "Build team structure", duration: "5 min",
    questions: [{
      id: "ec-m8-l5-q1", type: "calculation",
      context: "Revenue: ₹10L/month. Profit: ₹2L. Hiring costs: ₹50K/month for operations person.",
      prompt: "Should you hire?",
      correctAnswer: ["Yes - if they save 10+ hours of your time weekly"],
      choices: ["No - profit drops to ₹1.5L", "Yes - if they save 10+ hours of your time weekly", "Only at ₹20L revenue", "Hire two people instead"],
      explanation: "Opportunity cost: your time growing business > ₹50K. Hire to free yourself."
    }]
  },
  {
    id: "ec-m8-l6", moduleId: 8, lessonIndex: 5, title: "Analytics and optimization", duration: "5 min",
    questions: [{
      id: "ec-m8-l6-q1", type: "multiple-choice",
      prompt: "Key metrics to track for scaling?",
      correctAnswer: ["All of the above"],
      choices: ["Customer lifetime value (LTV)", "Customer acquisition cost (CAC)", "Profit per SKU", "All of the above"],
      explanation: "Data-driven scaling. Know your numbers before spending more."
    }]
  },
  {
    id: "ec-m8-l7", moduleId: 8, lessonIndex: 6, title: "Private labeling", duration: "5 min",
    questions: [{
      id: "ec-m8-l7-q1", type: "true-false",
      prompt: "Private labeling (your own brand) has higher margins than reselling.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Own brand = no competition on same product, better margins, brand equity."
    }]
  },
  {
    id: "ec-m8-l8", moduleId: 8, lessonIndex: 7, title: "Long-term brand building", duration: "5 min",
    questions: [{
      id: "ec-m8-l8-q1", type: "multiple-choice",
      prompt: "What makes an ecommerce business sellable?",
      correctAnswer: ["Documented processes, diverse traffic, and brand recognition"],
      choices: ["High revenue only", "Documented processes, diverse traffic, and brand recognition", "Amazon best-seller status", "Large inventory"],
      explanation: "Buyers want systems, not dependency on founder. Build an asset."
    }]
  }
];

// Export all ecommerce lessons
export const allEcommerceLessons: LessonData[] = [
  ...ecommerceModule1Lessons,
  ...ecommerceModule2Lessons,
  ...ecommerceModule3Lessons,
  ...ecommerceModule4Lessons,
  ...ecommerceModule5Lessons,
  ...ecommerceModule6Lessons,
  ...ecommerceModule7Lessons,
  ...ecommerceModule8Lessons,
];
