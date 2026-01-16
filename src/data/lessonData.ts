// Cloud Kitchen Business Learning Content
// Each module has lessons with interactive questions - Comprehensive 20 lessons per module

export type QuestionType = "multiple-choice" | "true-false" | "scenario" | "calculation";

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  context?: string;
  correctAnswer: string[];
  choices: string[];
  explanation: string;
  proTip?: string;
}

export interface LessonData {
  id: string;
  moduleId: number;
  lessonIndex: number;
  title: string;
  duration: string;
  questions: Question[];
}

// Module 1: Regulations & Licenses (20 lessons)
const module1Lessons: LessonData[] = [
  {
    id: "m1-l1", moduleId: 1, lessonIndex: 0, title: "Understand FSSAI license types", duration: "5 min",
    questions: [{
      id: "m1-l1-q1", type: "scenario",
      context: "You're starting a cloud kitchen with expected monthly revenue of ₹8 lakhs.",
      prompt: "Which FSSAI license category do you need?",
      correctAnswer: ["State FSSAI License (turnover ₹12L-20Cr annually)"],
      choices: ["Basic Registration (under ₹12L)", "State FSSAI License (turnover ₹12L-20Cr annually)", "Central FSSAI License", "No license needed for delivery-only"],
      explanation: "With ₹8L monthly (₹96L annually), you exceed the ₹12L threshold for basic registration.",
      proTip: "Apply at foscos.fssai.gov.in. Processing takes 30-60 days."
    }]
  },
  {
    id: "m1-l2", moduleId: 1, lessonIndex: 1, title: "Gather FSSAI documents", duration: "4 min",
    questions: [{
      id: "m1-l2-q1", type: "multiple-choice",
      prompt: "Which document is NOT required for FSSAI State License?",
      correctAnswer: ["Income Tax Returns of last 3 years"],
      choices: ["Photo ID of proprietor", "Rent agreement", "Income Tax Returns of last 3 years", "Food safety plan"],
      explanation: "FSSAI requires identity proof, address proof, and food safety plan. ITR is not mandatory."
    }]
  },
  {
    id: "m1-l3", moduleId: 1, lessonIndex: 2, title: "Calculate FSSAI license cost", duration: "3 min",
    questions: [{
      id: "m1-l3-q1", type: "calculation",
      context: "FSSAI costs: 1 year ₹2,000, 3 years ₹5,000, 5 years ₹7,500",
      prompt: "What's the per-year cost of 5-year license?",
      correctAnswer: ["₹1,500 per year"],
      choices: ["₹2,000", "₹1,667", "₹1,500", "₹1,875"],
      explanation: "₹7,500 ÷ 5 = ₹1,500/year. Saves ₹500/year vs annual renewal."
    }]
  },
  {
    id: "m1-l4", moduleId: 1, lessonIndex: 3, title: "Apply for FSSAI online", duration: "5 min",
    questions: [{
      id: "m1-l4-q1", type: "true-false",
      prompt: "You can start operations while FSSAI application is pending.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "You receive an Application Reference Number (ARN) that's valid for 60 days while processing."
    }]
  },
  {
    id: "m1-l5", moduleId: 1, lessonIndex: 4, title: "Understand GST for food business", duration: "4 min",
    questions: [{
      id: "m1-l5-q1", type: "scenario",
      context: "Your biryani costs ₹299. Swiggy charges 22% commission.",
      prompt: "How much GST do you owe?",
      correctAnswer: ["₹14.95 (5% of ₹299)"],
      choices: ["₹14.95 (5% of ₹299)", "₹11.67 (after commission)", "₹53.82 (18%)", "₹0 - platform pays"],
      explanation: "Cloud kitchens charge 5% GST on full menu price, not after commission."
    }]
  },
  {
    id: "m1-l6", moduleId: 1, lessonIndex: 5, title: "GST input credit rules", duration: "4 min",
    questions: [{
      id: "m1-l6-q1", type: "true-false",
      prompt: "With 5% GST, you can claim input credit on packaging materials.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "5% composition scheme doesn't allow input tax credit on purchases."
    }]
  },
  {
    id: "m1-l7", moduleId: 1, lessonIndex: 6, title: "GST filing schedule", duration: "3 min",
    questions: [{
      id: "m1-l7-q1", type: "multiple-choice",
      prompt: "When must you file GST returns?",
      correctAnswer: ["Monthly by 11th and 20th"],
      choices: ["Annually", "Quarterly", "Monthly by 11th and 20th", "Only above ₹20L turnover"],
      explanation: "GSTR-1 by 11th, GSTR-3B by 20th. Missing deadlines = ₹50/day penalty."
    }]
  },
  {
    id: "m1-l8", moduleId: 1, lessonIndex: 7, title: "Register for GST online", duration: "5 min",
    questions: [{
      id: "m1-l8-q1", type: "multiple-choice",
      prompt: "What's the primary document needed for GST registration?",
      correctAnswer: ["PAN card of business/proprietor"],
      choices: ["FSSAI license", "PAN card of business/proprietor", "Bank statement", "Electricity bill"],
      explanation: "PAN is mandatory. Other documents support address and identity verification."
    }]
  },
  {
    id: "m1-l9", moduleId: 1, lessonIndex: 8, title: "Check zoning for trade license", duration: "4 min",
    questions: [{
      id: "m1-l9-q1", type: "scenario",
      context: "Found 300 sq ft in residential colony. Previous tenant ran tiffin service.",
      prompt: "What should you verify first?",
      correctAnswer: ["Check if commercial activity is allowed in that zone"],
      choices: ["Nothing - previous did it", "Get landlord NOC only", "Check if commercial activity is allowed in that zone", "Trade license not needed under 500 sq ft"],
      explanation: "Operating in residential zone without approval is illegal. Risk of premises sealing."
    }]
  },
  {
    id: "m1-l10", moduleId: 1, lessonIndex: 9, title: "Trade license inspection prep", duration: "4 min",
    questions: [{
      id: "m1-l10-q1", type: "multiple-choice",
      prompt: "What can cause trade license rejection?",
      correctAnswer: ["All of the above"],
      choices: ["Exhaust towards neighbor's window", "No handwash basin in prep area", "Excess LPG cylinders", "All of the above"],
      explanation: "Inspectors check ventilation, hygiene, and fire safety compliance."
    }]
  },
  {
    id: "m1-l11", moduleId: 1, lessonIndex: 10, title: "Apply for trade license", duration: "5 min",
    questions: [{
      id: "m1-l11-q1", type: "calculation",
      context: "Trade license fee: ₹500 + ₹10 per sq ft. Your space is 400 sq ft.",
      prompt: "What's your trade license fee?",
      correctAnswer: ["₹4,500"],
      choices: ["₹500", "₹4,000", "₹4,500", "₹5,000"],
      explanation: "₹500 + (₹10 × 400) = ₹500 + ₹4,000 = ₹4,500"
    }]
  },
  {
    id: "m1-l12", moduleId: 1, lessonIndex: 11, title: "Fire safety NOC requirements", duration: "5 min",
    questions: [{
      id: "m1-l12-q1", type: "multiple-choice",
      prompt: "Which is mandatory for fire NOC in a cloud kitchen?",
      correctAnswer: ["Fire extinguisher of appropriate class"],
      choices: ["Sprinkler system", "Fire extinguisher of appropriate class", "Emergency exit signage only", "Fire NOC not required under 500 sq ft"],
      explanation: "Class K extinguisher for kitchen fires is mandatory. Sprinklers for larger spaces."
    }]
  },
  {
    id: "m1-l13", moduleId: 1, lessonIndex: 12, title: "Health department inspection", duration: "4 min",
    questions: [{
      id: "m1-l13-q1", type: "true-false",
      prompt: "Health inspectors can visit your kitchen without prior notice.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Random inspections ensure ongoing compliance. Maintain standards daily."
    }]
  },
  {
    id: "m1-l14", moduleId: 1, lessonIndex: 13, title: "Signage and display requirements", duration: "3 min",
    questions: [{
      id: "m1-l14-q1", type: "multiple-choice",
      prompt: "Which must be displayed at your kitchen?",
      correctAnswer: ["FSSAI license number on all packaging"],
      choices: ["GST number on walls", "FSSAI license number on all packaging", "Owner's photo", "Menu prices in Hindi"],
      explanation: "FSSAI mandates license number on packaging and promotional materials."
    }]
  },
  {
    id: "m1-l15", moduleId: 1, lessonIndex: 14, title: "Water testing requirements", duration: "4 min",
    questions: [{
      id: "m1-l15-q1", type: "scenario",
      context: "You use municipal water. Landlord says it's tested centrally.",
      prompt: "Do you still need water testing reports?",
      correctAnswer: ["Yes - individual premises need their own test reports"],
      choices: ["No - municipal water is pre-tested", "Yes - individual premises need their own test reports", "Only if using borewells", "Only during license renewal"],
      explanation: "FSSAI requires premises-specific water testing from NABL-accredited labs every 6 months."
    }]
  },
  {
    id: "m1-l16", moduleId: 1, lessonIndex: 15, title: "Pest control documentation", duration: "3 min",
    questions: [{
      id: "m1-l16-q1", type: "true-false",
      prompt: "Monthly pest control is mandatory for cloud kitchens.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Regular pest control with documented records is required for food safety compliance."
    }]
  },
  {
    id: "m1-l17", moduleId: 1, lessonIndex: 16, title: "Staff medical certificates", duration: "4 min",
    questions: [{
      id: "m1-l17-q1", type: "multiple-choice",
      prompt: "How often must kitchen staff get medical checkups?",
      correctAnswer: ["Every 6 months"],
      choices: ["Once at joining", "Every 6 months", "Annually", "Only if showing symptoms"],
      explanation: "FSSAI requires biannual health checkups for all food handlers."
    }]
  },
  {
    id: "m1-l18", moduleId: 1, lessonIndex: 17, title: "Food safety training basics", duration: "5 min",
    questions: [{
      id: "m1-l18-q1", type: "multiple-choice",
      prompt: "Who must complete FSSAI food safety training?",
      correctAnswer: ["At least one person per shift handling food"],
      choices: ["Only the owner", "At least one person per shift handling food", "All delivery partners", "Only the head chef"],
      explanation: "Trained food safety supervisor required during all operating hours."
    }]
  },
  {
    id: "m1-l19", moduleId: 1, lessonIndex: 18, title: "License renewal process", duration: "4 min",
    questions: [{
      id: "m1-l19-q1", type: "calculation",
      context: "Your FSSAI license expires March 31. Renewal takes 30 days to process.",
      prompt: "By when should you apply for renewal?",
      correctAnswer: ["By March 1 (30 days before expiry)"],
      choices: ["March 31", "March 15", "By March 1 (30 days before expiry)", "April 1 with late fee"],
      explanation: "Apply 30 days before expiry. Late renewal attracts ₹100/day penalty."
    }]
  },
  {
    id: "m1-l20", moduleId: 1, lessonIndex: 19, title: "Create compliance calendar", duration: "5 min",
    questions: [{
      id: "m1-l20-q1", type: "scenario",
      context: "You have FSSAI, GST, trade license, and staff medicals to track.",
      prompt: "What's the best way to manage compliance deadlines?",
      correctAnswer: ["Set calendar reminders 30 days before each deadline"],
      choices: ["Rely on government reminders", "Set calendar reminders 30 days before each deadline", "Check monthly manually", "Hire a compliance officer"],
      explanation: "Proactive tracking prevents penalties and license issues. Automate reminders."
    }]
  }
];

// Module 2: Business Structure & Costs (20 lessons)
const module2Lessons: LessonData[] = [
  {
    id: "m2-l1", moduleId: 2, lessonIndex: 0, title: "Compare sole proprietorship vs partnership", duration: "6 min",
    questions: [{
      id: "m2-l1-q1", type: "scenario",
      context: "You invest ₹8L, friend invests ₹4L and helps weekends. You manage daily operations.",
      prompt: "Which structure is best?",
      correctAnswer: ["Partnership with clear profit-sharing deed"],
      choices: ["Sole proprietorship - keep friend informal", "Partnership with clear profit-sharing deed", "Private Limited Company", "LLP for professional image"],
      explanation: "Partnership with formal deed prevents disputes. Pvt Ltd is overkill at this scale."
    }]
  },
  {
    id: "m2-l2", moduleId: 2, lessonIndex: 1, title: "Understand LLP benefits", duration: "5 min",
    questions: [{
      id: "m2-l2-q1", type: "true-false",
      prompt: "In a sole proprietorship, personal assets can be seized for business debts.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Unlimited liability means business debts = personal debts."
    }]
  },
  {
    id: "m2-l3", moduleId: 2, lessonIndex: 2, title: "Calculate total setup costs", duration: "8 min",
    questions: [{
      id: "m2-l3-q1", type: "calculation",
      context: "Equipment ₹4L, Deposit ₹1.5L, Renovation ₹1L, Licenses ₹30K, Inventory ₹50K. Monthly: Rent ₹25K, Salaries ₹60K, Utilities ₹15K.",
      prompt: "What's minimum capital with 3 months working capital?",
      correctAnswer: ["₹10.3 lakhs"],
      choices: ["₹7.3 lakhs", "₹8.8 lakhs", "₹10.3 lakhs", "₹12.3 lakhs"],
      explanation: "Setup ₹7.3L + Monthly ₹1L × 3 = ₹10.3L. Add 20% buffer recommended."
    }]
  },
  {
    id: "m2-l4", moduleId: 2, lessonIndex: 3, title: "Evaluate vendor financing", duration: "5 min",
    questions: [{
      id: "m2-l4-q1", type: "scenario",
      context: "₹4L equipment offered on 6-month credit at 2% monthly interest.",
      prompt: "Is this a good deal?",
      correctAnswer: ["No - 24% annually is too high, get bank loan at 12-14%"],
      choices: ["Yes - preserves cash", "No - 24% annually is too high, get bank loan at 12-14%", "Yes if negotiated to 1%", "Only if repaying in 3 months"],
      explanation: "2%/month = 24%/year. MSME loans available at 12-14%."
    }]
  },
  {
    id: "m2-l5", moduleId: 2, lessonIndex: 4, title: "Explore Mudra loan options", duration: "5 min",
    questions: [{
      id: "m2-l5-q1", type: "multiple-choice",
      prompt: "What's the maximum Mudra Shishu loan amount?",
      correctAnswer: ["₹50,000"],
      choices: ["₹10,000", "₹50,000", "₹5 lakhs", "₹10 lakhs"],
      explanation: "Shishu: up to ₹50K, Kishore: ₹50K-5L, Tarun: ₹5L-10L."
    }]
  },
  {
    id: "m2-l6", moduleId: 2, lessonIndex: 5, title: "Identify monthly fixed costs", duration: "5 min",
    questions: [{
      id: "m2-l6-q1", type: "multiple-choice",
      prompt: "Which is NOT a fixed monthly cost?",
      correctAnswer: ["Packaging materials"],
      choices: ["Rent", "Chef salary", "Packaging materials", "Software subscriptions"],
      explanation: "Packaging varies with order volume - it's a variable cost."
    }]
  },
  {
    id: "m2-l7", moduleId: 2, lessonIndex: 6, title: "Calculate break-even orders", duration: "6 min",
    questions: [{
      id: "m2-l7-q1", type: "calculation",
      context: "Fixed costs ₹1.2L/month. AOV ₹350 with 35% profit margin.",
      prompt: "Monthly break-even orders?",
      correctAnswer: ["980 orders (33/day)"],
      choices: ["343 orders", "686 orders", "980 orders (33/day)", "1,400 orders"],
      explanation: "₹1,20,000 ÷ (₹350 × 35%) = ₹1,20,000 ÷ ₹122.5 = 980 orders."
    }]
  },
  {
    id: "m2-l8", moduleId: 2, lessonIndex: 7, title: "Handle salary negotiations", duration: "4 min",
    questions: [{
      id: "m2-l8-q1", type: "scenario",
      context: "Chef demands ₹35K (market ₹28K) before Diwali rush. No backup.",
      prompt: "Best immediate response?",
      correctAnswer: ["Agree temporarily, start training backup immediately"],
      choices: ["Fire immediately", "Agree to ₹35K permanently", "Agree temporarily, start training backup immediately", "Close during Diwali"],
      explanation: "Avoid single point of failure. Train backup to prevent future blackmail."
    }]
  },
  {
    id: "m2-l9", moduleId: 2, lessonIndex: 8, title: "Budget for marketing", duration: "5 min",
    questions: [{
      id: "m2-l9-q1", type: "calculation",
      context: "Industry standard: 5-10% of revenue for marketing.",
      prompt: "Monthly marketing budget if targeting ₹5L revenue?",
      correctAnswer: ["₹25,000-50,000"],
      choices: ["₹5,000-10,000", "₹25,000-50,000", "₹75,000-1,00,000", "No budget needed initially"],
      explanation: "5-10% of ₹5L = ₹25K-50K. Essential for visibility on platforms."
    }]
  },
  {
    id: "m2-l10", moduleId: 2, lessonIndex: 9, title: "Understand commission structures", duration: "5 min",
    questions: [{
      id: "m2-l10-q1", type: "calculation",
      context: "Swiggy charges 22% commission. Customer pays ₹400 for order.",
      prompt: "Your payout before GST?",
      correctAnswer: ["₹312"],
      choices: ["₹400", "₹312", "₹352", "₹288"],
      explanation: "₹400 - (₹400 × 22%) = ₹400 - ₹88 = ₹312"
    }]
  },
  {
    id: "m2-l11", moduleId: 2, lessonIndex: 10, title: "Plan for seasonal variations", duration: "4 min",
    questions: [{
      id: "m2-l11-q1", type: "scenario",
      context: "Orders drop 30% during exam season in your college area.",
      prompt: "How should you prepare financially?",
      correctAnswer: ["Save surplus during peak months to cover lean periods"],
      choices: ["Reduce staff permanently", "Save surplus during peak months to cover lean periods", "Ignore - will recover", "Take loan for working capital"],
      explanation: "Seasonal businesses need cash reserves. Save 20% of peak profits."
    }]
  },
  {
    id: "m2-l12", moduleId: 2, lessonIndex: 11, title: "Set up business banking", duration: "4 min",
    questions: [{
      id: "m2-l12-q1", type: "true-false",
      prompt: "You can receive Swiggy/Zomato payments to personal bank account.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Aggregators require current account in business name for payouts."
    }]
  },
  {
    id: "m2-l13", moduleId: 2, lessonIndex: 12, title: "Track daily cash flow", duration: "5 min",
    questions: [{
      id: "m2-l13-q1", type: "multiple-choice",
      prompt: "How often should you reconcile platform payouts?",
      correctAnswer: ["Weekly"],
      choices: ["Daily", "Weekly", "Monthly", "Quarterly"],
      explanation: "Weekly catches discrepancies early. Platforms sometimes miss orders."
    }]
  },
  {
    id: "m2-l14", moduleId: 2, lessonIndex: 13, title: "Plan equipment depreciation", duration: "5 min",
    questions: [{
      id: "m2-l14-q1", type: "calculation",
      context: "Equipment worth ₹5L with 5-year life.",
      prompt: "Annual depreciation to account for?",
      correctAnswer: ["₹1,00,000"],
      choices: ["₹50,000", "₹1,00,000", "₹1,50,000", "₹2,00,000"],
      explanation: "₹5,00,000 ÷ 5 years = ₹1,00,000/year. Set aside for replacement."
    }]
  },
  {
    id: "m2-l15", moduleId: 2, lessonIndex: 14, title: "Build emergency fund", duration: "4 min",
    questions: [{
      id: "m2-l15-q1", type: "scenario",
      context: "Your refrigerator breaks. Repair costs ₹15,000. No emergency fund.",
      prompt: "What's the impact on business?",
      correctAnswer: ["All of the above"],
      choices: ["Potential food spoilage", "Lost orders during repair", "Stress on working capital", "All of the above"],
      explanation: "Emergency fund of 2 months expenses prevents such crises."
    }]
  },
  {
    id: "m2-l16", moduleId: 2, lessonIndex: 15, title: "Understand profit vs cash flow", duration: "5 min",
    questions: [{
      id: "m2-l16-q1", type: "true-false",
      prompt: "A profitable month means you'll have cash in bank.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Platform payouts are delayed 7-14 days. Profitable but cash-poor is common."
    }]
  },
  {
    id: "m2-l17", moduleId: 2, lessonIndex: 16, title: "Negotiate rent terms", duration: "4 min",
    questions: [{
      id: "m2-l17-q1", type: "scenario",
      context: "Landlord wants 10 months deposit. Market average is 3-6 months.",
      prompt: "How should you negotiate?",
      correctAnswer: ["Offer higher rent for lower deposit to preserve capital"],
      choices: ["Accept - standard for commercial", "Walk away immediately", "Offer higher rent for lower deposit to preserve capital", "Ask for 1 month only"],
      explanation: "Cash is king for new business. Trade slightly higher rent for liquidity."
    }]
  },
  {
    id: "m2-l18", moduleId: 2, lessonIndex: 17, title: "Plan for tax payments", duration: "5 min",
    questions: [{
      id: "m2-l18-q1", type: "calculation",
      context: "Annual profit ₹6L. You're in 20% tax bracket.",
      prompt: "How much should you set aside monthly for taxes?",
      correctAnswer: ["₹10,000"],
      choices: ["₹5,000", "₹10,000", "₹15,000", "₹20,000"],
      explanation: "₹6L × 20% = ₹1.2L annual tax. ₹1,20,000 ÷ 12 = ₹10,000/month."
    }]
  },
  {
    id: "m2-l19", moduleId: 2, lessonIndex: 18, title: "Insurance requirements", duration: "4 min",
    questions: [{
      id: "m2-l19-q1", type: "multiple-choice",
      prompt: "Which insurance is most critical for cloud kitchen?",
      correctAnswer: ["Fire and burglary insurance for equipment"],
      choices: ["Life insurance", "Fire and burglary insurance for equipment", "Vehicle insurance", "Travel insurance"],
      explanation: "Equipment is your biggest investment. Fire risk is high in kitchens."
    }]
  },
  {
    id: "m2-l20", moduleId: 2, lessonIndex: 19, title: "Create financial projections", duration: "6 min",
    questions: [{
      id: "m2-l20-q1", type: "scenario",
      context: "Investor asks for 3-year financial projections.",
      prompt: "What should be your first step?",
      correctAnswer: ["Build month-by-month revenue and cost assumptions"],
      choices: ["Copy competitor's numbers", "Build month-by-month revenue and cost assumptions", "Show only best-case scenario", "Hire a CA to fabricate numbers"],
      explanation: "Realistic, assumption-backed projections build credibility."
    }]
  }
];

// Module 3: Kitchen Setup & Equipment (20 lessons)
const module3Lessons: LessonData[] = [
  {
    id: "m3-l1", moduleId: 3, lessonIndex: 0, title: "Create equipment priority list", duration: "5 min",
    questions: [{
      id: "m3-l1-q1", type: "scenario",
      context: "Opening biryani kitchen. Vendor offers pizza oven at 50% off.",
      prompt: "Should you buy it?",
      correctAnswer: ["No - buy only what's needed for current menu"],
      choices: ["Yes - great deal for future", "Yes - pizza as backup", "No - buy only what's needed for current menu", "Buy and rent to others"],
      explanation: "Unused equipment = wasted capital. Focus on core menu first."
    }]
  },
  {
    id: "m3-l2", moduleId: 3, lessonIndex: 1, title: "Choose commercial vs domestic equipment", duration: "5 min",
    questions: [{
      id: "m3-l2-q1", type: "multiple-choice",
      prompt: "₹15K domestic vs ₹45K commercial fridge for 50 orders/day?",
      correctAnswer: ["Commercial - domestic fails in months under load"],
      choices: ["Domestic - save ₹30K", "Domestic - upgrade later", "Commercial - domestic fails in months under load", "Two domestic fridges"],
      explanation: "Domestic units handle 10-15 opens/day. Commercial kitchens: 100+."
    }]
  },
  {
    id: "m3-l3", moduleId: 3, lessonIndex: 2, title: "Calculate equipment ROI", duration: "5 min",
    questions: [{
      id: "m3-l3-q1", type: "calculation",
      context: "Commercial burner ₹12K lasts 5 years. Domestic ₹3K lasts 8 months.",
      prompt: "5-year cost comparison?",
      correctAnswer: ["Commercial saves ₹12K (domestic costs ₹24K)"],
      choices: ["Domestic saves ₹9K", "Same cost", "Commercial saves ₹12K (domestic costs ₹24K)", "Domestic better - newer tech"],
      explanation: "60 months ÷ 8 = 8 replacements × ₹3K = ₹24K vs ₹12K."
    }]
  },
  {
    id: "m3-l4", moduleId: 3, lessonIndex: 3, title: "Plan kitchen workflow layout", duration: "6 min",
    questions: [{
      id: "m3-l4-q1", type: "multiple-choice",
      prompt: "What's the ideal kitchen workflow direction?",
      correctAnswer: ["Receiving → Storage → Prep → Cooking → Packing"],
      choices: ["Random - save space", "Receiving → Storage → Prep → Cooking → Packing", "Cooking near entrance for ventilation", "Storage near exit for delivery"],
      explanation: "Linear flow minimizes cross-contamination and movement waste."
    }]
  },
  {
    id: "m3-l5", moduleId: 3, lessonIndex: 4, title: "Design prep station", duration: "4 min",
    questions: [{
      id: "m3-l5-q1", type: "scenario",
      context: "You have one prep table. Chef preps vegetables and meat on same surface.",
      prompt: "What's the food safety risk?",
      correctAnswer: ["Cross-contamination between raw meat and vegetables"],
      choices: ["No risk if cleaned between", "Cross-contamination between raw meat and vegetables", "Only risky for seafood", "Risk only in summer"],
      explanation: "Separate cutting boards and surfaces for raw meat are mandatory."
    }]
  },
  {
    id: "m3-l6", moduleId: 3, lessonIndex: 5, title: "Select cooking equipment", duration: "5 min",
    questions: [{
      id: "m3-l6-q1", type: "calculation",
      context: "Each biryani batch takes 45 min. Peak demand: 20 orders/hour.",
      prompt: "Minimum number of cooking vessels needed?",
      correctAnswer: ["15 vessels (20 × 0.75 hours)"],
      choices: ["5 vessels", "10 vessels", "15 vessels (20 × 0.75 hours)", "20 vessels"],
      explanation: "Each vessel occupied for 45 min. 20 orders × 0.75 hr = 15 vessels cycling."
    }]
  },
  {
    id: "m3-l7", moduleId: 3, lessonIndex: 6, title: "Size your refrigeration", duration: "5 min",
    questions: [{
      id: "m3-l7-q1", type: "calculation",
      context: "Daily inventory needs: 50kg vegetables, 30kg meat, 20kg dairy.",
      prompt: "Minimum fridge capacity for 2-day stock?",
      correctAnswer: ["200 liters (100kg × 2L per kg approx)"],
      choices: ["100 liters", "200 liters (100kg × 2L per kg approx)", "300 liters", "400 liters"],
      explanation: "2 days × 100kg = 200kg. Roughly 200L capacity minimum."
    }]
  },
  {
    id: "m3-l8", moduleId: 3, lessonIndex: 7, title: "Install ventilation system", duration: "5 min",
    questions: [{
      id: "m3-l8-q1", type: "true-false",
      prompt: "Kitchen exhaust must release at least 3 meters above ground level.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Exhaust at low height causes complaints and health violations."
    }]
  },
  {
    id: "m3-l9", moduleId: 3, lessonIndex: 8, title: "Plan electrical load", duration: "5 min",
    questions: [{
      id: "m3-l9-q1", type: "calculation",
      context: "Equipment: 2 fridges (300W each), exhaust (500W), mixer (750W), lights (200W).",
      prompt: "Minimum electrical connection needed?",
      correctAnswer: ["3 kW (with 50% buffer: 4-5 kW)"],
      choices: ["1 kW", "2 kW", "3 kW (with 50% buffer: 4-5 kW)", "10 kW"],
      explanation: "Total: 2050W = 2kW. Add 50% buffer for peak loads = 3kW minimum."
    }]
  },
  {
    id: "m3-l10", moduleId: 3, lessonIndex: 9, title: "Choose flooring and walls", duration: "4 min",
    questions: [{
      id: "m3-l10-q1", type: "multiple-choice",
      prompt: "Which flooring is FSSAI-compliant for kitchens?",
      correctAnswer: ["Non-slip ceramic tiles with grouted joints"],
      choices: ["Cement floor", "Wooden flooring", "Non-slip ceramic tiles with grouted joints", "Vinyl sheets"],
      explanation: "Tiles are durable, easy to clean, and meet food safety standards."
    }]
  },
  {
    id: "m3-l11", moduleId: 3, lessonIndex: 10, title: "Install adequate lighting", duration: "4 min",
    questions: [{
      id: "m3-l11-q1", type: "scenario",
      context: "Kitchen has dim yellow lights. Chef strains to check food quality.",
      prompt: "What's the recommended lighting level?",
      correctAnswer: ["500 lux white LED in prep/cooking areas"],
      choices: ["200 lux is enough", "500 lux white LED in prep/cooking areas", "Any color LED saves electricity", "Natural light only"],
      explanation: "500 lux ensures food quality inspection. White light shows true colors."
    }]
  },
  {
    id: "m3-l12", moduleId: 3, lessonIndex: 11, title: "Plan water supply", duration: "4 min",
    questions: [{
      id: "m3-l12-q1", type: "calculation",
      context: "Kitchen needs 200L/day. Water supply is 2 hours/day.",
      prompt: "Minimum storage tank capacity?",
      correctAnswer: ["500L (200L × 2.5 buffer for peak and backup)"],
      choices: ["200L", "300L", "500L (200L × 2.5 buffer for peak and backup)", "1000L"],
      explanation: "Buffer for supply interruptions and peak usage. 2-3 days ideal."
    }]
  },
  {
    id: "m3-l13", moduleId: 3, lessonIndex: 12, title: "Set up waste management", duration: "4 min",
    questions: [{
      id: "m3-l13-q1", type: "multiple-choice",
      prompt: "How should wet and dry kitchen waste be handled?",
      correctAnswer: ["Separate bins, daily disposal of wet waste"],
      choices: ["Single bin is enough", "Separate bins, daily disposal of wet waste", "Burn all waste daily", "Weekly municipal pickup"],
      explanation: "Wet waste attracts pests. Daily disposal is mandatory."
    }]
  },
  {
    id: "m3-l14", moduleId: 3, lessonIndex: 13, title: "Install fire safety equipment", duration: "5 min",
    questions: [{
      id: "m3-l14-q1", type: "multiple-choice",
      prompt: "Which fire extinguisher type for kitchen grease fires?",
      correctAnswer: ["Class K (kitchen) or Class B (liquid fires)"],
      choices: ["Class A (paper/wood)", "Class K (kitchen) or Class B (liquid fires)", "Water extinguisher", "Any type works"],
      explanation: "Water makes grease fires worse. Class K is designed for cooking oils."
    }]
  },
  {
    id: "m3-l15", moduleId: 3, lessonIndex: 14, title: "Create equipment maintenance schedule", duration: "5 min",
    questions: [{
      id: "m3-l15-q1", type: "scenario",
      context: "Fridge coils haven't been cleaned in 6 months. Energy bill increased 30%.",
      prompt: "What should be the cleaning frequency?",
      correctAnswer: ["Monthly cleaning of coils and filters"],
      choices: ["When visible dirt", "Monthly cleaning of coils and filters", "Quarterly", "Annually"],
      explanation: "Dust on coils reduces efficiency by 25-40%. Monthly maintenance essential."
    }]
  },
  {
    id: "m3-l16", moduleId: 3, lessonIndex: 15, title: "Buy vs lease equipment decision", duration: "5 min",
    questions: [{
      id: "m3-l16-q1", type: "scenario",
      context: "Starting with ₹5L budget. Critical equipment costs ₹7L.",
      prompt: "Should you lease the extra ₹2L equipment?",
      correctAnswer: ["Yes - preserves working capital for first 6 months"],
      choices: ["No - leasing is always expensive", "Yes - preserves working capital for first 6 months", "Take loan instead", "Start with less equipment"],
      explanation: "Cash flow is critical initially. Lease non-critical items if needed."
    }]
  },
  {
    id: "m3-l17", moduleId: 3, lessonIndex: 16, title: "Source second-hand equipment", duration: "4 min",
    questions: [{
      id: "m3-l17-q1", type: "true-false",
      prompt: "Buying used commercial refrigerators from closed restaurants is risky.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Used commercial equipment often has years of life left. Check compressor hours."
    }]
  },
  {
    id: "m3-l18", moduleId: 3, lessonIndex: 17, title: "Negotiate equipment warranties", duration: "4 min",
    questions: [{
      id: "m3-l18-q1", type: "scenario",
      context: "Vendor offers 1-year warranty. Extended warranty costs ₹5K for additional 2 years.",
      prompt: "Worth it for a ₹40K commercial fridge?",
      correctAnswer: ["Yes - repairs often cost ₹10-15K, protects investment"],
      choices: ["No - waste of money", "Yes - repairs often cost ₹10-15K, protects investment", "Only for year 2", "Negotiate free extension"],
      explanation: "Commercial equipment repairs are expensive. Extended warranty = peace of mind."
    }]
  },
  {
    id: "m3-l19", moduleId: 3, lessonIndex: 18, title: "Set up packing station", duration: "4 min",
    questions: [{
      id: "m3-l19-q1", type: "multiple-choice",
      prompt: "What's essential at a packing station?",
      correctAnswer: ["Containers, bags, labels, stapler, and order printouts"],
      choices: ["Just containers", "Containers and bags", "Containers, bags, labels, stapler, and order printouts", "Only what delivery partner provides"],
      explanation: "Efficient packing station has everything within arm's reach."
    }]
  },
  {
    id: "m3-l20", moduleId: 3, lessonIndex: 19, title: "Complete final kitchen walkthrough", duration: "5 min",
    questions: [{
      id: "m3-l20-q1", type: "scenario",
      context: "Kitchen is set up. You're about to start operations tomorrow.",
      prompt: "What's the final check before going live?",
      correctAnswer: ["Test all equipment with actual recipes, check timing"],
      choices: ["Just ensure electricity works", "Test all equipment with actual recipes, check timing", "Trust the vendor's demo", "Learn during operations"],
      explanation: "Dry run reveals workflow issues. Cook sample orders and time each step."
    }]
  }
];

// Module 4: Menu Design & Pricing (20 lessons)
const module4Lessons: LessonData[] = [
  {
    id: "m4-l1", moduleId: 4, lessonIndex: 0, title: "Define your hero dish", duration: "5 min",
    questions: [{
      id: "m4-l1-q1", type: "scenario",
      context: "Your menu has 25 items. Customers are confused about what you're known for.",
      prompt: "What should you do?",
      correctAnswer: ["Identify 3-5 hero dishes and feature them prominently"],
      choices: ["Add more variety", "Identify 3-5 hero dishes and feature them prominently", "Remove all except 5 items", "Let customers discover"],
      explanation: "Hero dishes build reputation. Start with signature items, expand later."
    }]
  },
  {
    id: "m4-l2", moduleId: 4, lessonIndex: 1, title: "Analyze competitor menus", duration: "5 min",
    questions: [{
      id: "m4-l2-q1", type: "multiple-choice",
      prompt: "What should you note when studying competitor menus?",
      correctAnswer: ["All of the above"],
      choices: ["Price points of similar items", "Menu structure and naming", "Customer review patterns", "All of the above"],
      explanation: "Comprehensive analysis reveals gaps and opportunities."
    }]
  },
  {
    id: "m4-l3", moduleId: 4, lessonIndex: 2, title: "Calculate food cost percentage", duration: "6 min",
    questions: [{
      id: "m4-l3-q1", type: "calculation",
      context: "Biryani ingredients cost ₹80. You sell it at ₹299.",
      prompt: "What's your food cost percentage?",
      correctAnswer: ["26.8%"],
      choices: ["20%", "26.8%", "35%", "40%"],
      explanation: "₹80 ÷ ₹299 × 100 = 26.8%. Ideal range is 25-35%."
    }]
  },
  {
    id: "m4-l4", moduleId: 4, lessonIndex: 3, title: "Set price using markup method", duration: "5 min",
    questions: [{
      id: "m4-l4-q1", type: "calculation",
      context: "Food cost ₹60. Target food cost percentage: 30%.",
      prompt: "What should be the selling price?",
      correctAnswer: ["₹200"],
      choices: ["₹78", "₹150", "₹200", "₹300"],
      explanation: "₹60 ÷ 0.30 = ₹200. This gives 30% food cost."
    }]
  },
  {
    id: "m4-l5", moduleId: 4, lessonIndex: 4, title: "Apply psychology to pricing", duration: "4 min",
    questions: [{
      id: "m4-l5-q1", type: "scenario",
      context: "You're pricing a combo meal. Options: ₹300 or ₹299.",
      prompt: "Which pricing performs better?",
      correctAnswer: ["₹299 - charm pricing feels significantly cheaper"],
      choices: ["₹300 - cleaner number", "₹299 - charm pricing feels significantly cheaper", "No difference", "₹295 is better"],
      explanation: "Left-digit effect: ₹299 feels like ₹200s, not ₹300s."
    }]
  },
  {
    id: "m4-l6", moduleId: 4, lessonIndex: 5, title: "Design combo meals", duration: "5 min",
    questions: [{
      id: "m4-l6-q1", type: "calculation",
      context: "Biryani ₹249, Raita ₹49, Sweet ₹79. Individual total: ₹377.",
      prompt: "Ideal combo price for 20% perceived discount?",
      correctAnswer: ["₹299 (21% off perceived value)"],
      choices: ["₹359", "₹329", "₹299 (21% off perceived value)", "₹279"],
      explanation: "₹299 gives 21% perceived discount while maintaining margins."
    }]
  },
  {
    id: "m4-l7", moduleId: 4, lessonIndex: 6, title: "Optimize portion sizes", duration: "5 min",
    questions: [{
      id: "m4-l7-q1", type: "scenario",
      context: "Customers complain biryani portion is too small at ₹199.",
      prompt: "Best solution?",
      correctAnswer: ["Increase portion slightly, raise price to ₹229"],
      choices: ["Keep same, ignore complaints", "Increase portion slightly, raise price to ₹229", "Double the portion, double the price", "Add free side dish"],
      explanation: "Value perception matters. Small increase in both portion and price works best."
    }]
  },
  {
    id: "m4-l8", moduleId: 4, lessonIndex: 7, title: "Create upselling opportunities", duration: "4 min",
    questions: [{
      id: "m4-l8-q1", type: "multiple-choice",
      prompt: "Best add-on item to increase order value?",
      correctAnswer: ["High-margin sides like raita or cold drink"],
      choices: ["Discounted main course", "High-margin sides like raita or cold drink", "Free items", "Another full meal at half price"],
      explanation: "Sides have 70-80% margins vs 30% on mains. Best for AOV increase."
    }]
  },
  {
    id: "m4-l9", moduleId: 4, lessonIndex: 8, title: "Write compelling descriptions", duration: "4 min",
    questions: [{
      id: "m4-l9-q1", type: "scenario",
      context: "Current description: 'Chicken Biryani - Rice with chicken'",
      prompt: "Which description sells better?",
      correctAnswer: ["'Slow-cooked basmati layered with tender chicken in aromatic spices'"],
      choices: ["'Biryani - our bestseller'", "'Slow-cooked basmati layered with tender chicken in aromatic spices'", "'Chicken Biryani (contains chicken)'", "'Same as grandmother's recipe'"],
      explanation: "Sensory words (slow-cooked, tender, aromatic) trigger cravings."
    }]
  },
  {
    id: "m4-l10", moduleId: 4, lessonIndex: 9, title: "Sequence menu strategically", duration: "4 min",
    questions: [{
      id: "m4-l10-q1", type: "multiple-choice",
      prompt: "Where should your highest-margin items appear?",
      correctAnswer: ["Top of each category and first category on menu"],
      choices: ["Hidden in the middle", "Top of each category and first category on menu", "At the end as surprise", "Random placement"],
      explanation: "Eyes go to top-left first. Prime placement = more orders."
    }]
  },
  {
    id: "m4-l11", moduleId: 4, lessonIndex: 10, title: "Design for delivery constraints", duration: "5 min",
    questions: [{
      id: "m4-l11-q1", type: "scenario",
      context: "Your crispy fried chicken arrives soggy after 30-min delivery.",
      prompt: "What's the menu design solution?",
      correctAnswer: ["Modify recipe (vented packaging) or add disclaimer about best within 20 min"],
      choices: ["Stop offering it", "Modify recipe (vented packaging) or add disclaimer about best within 20 min", "Blame delivery partner", "Offer only for pickup"],
      explanation: "Adapt products for delivery reality or set expectations clearly."
    }]
  },
  {
    id: "m4-l12", moduleId: 4, lessonIndex: 11, title: "Manage seasonal menu changes", duration: "4 min",
    questions: [{
      id: "m4-l12-q1", type: "true-false",
      prompt: "You should change entire menu every season for variety.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Keep core items (70%) constant. Rotate 30% seasonally for freshness."
    }]
  },
  {
    id: "m4-l13", moduleId: 4, lessonIndex: 12, title: "Test new dishes before launch", duration: "5 min",
    questions: [{
      id: "m4-l13-q1", type: "scenario",
      context: "You want to add paneer butter masala to your biryani-focused menu.",
      prompt: "Best way to test before full launch?",
      correctAnswer: ["Offer as limited-time special, track sales and reviews"],
      choices: ["Add permanently, see what happens", "Offer as limited-time special, track sales and reviews", "Ask friends' opinions", "Copy competitor's recipe exactly"],
      explanation: "Limited launch reduces risk. Real customer data guides decisions."
    }]
  },
  {
    id: "m4-l14", moduleId: 4, lessonIndex: 13, title: "Handle price increases", duration: "4 min",
    questions: [{
      id: "m4-l14-q1", type: "scenario",
      context: "Ingredient costs rose 15%. You need to increase prices.",
      prompt: "Best approach to minimize backlash?",
      correctAnswer: ["Gradual 5% increases over 3 months, add value (larger portion/add-on)"],
      choices: ["15% increase overnight", "Gradual 5% increases over 3 months, add value (larger portion/add-on)", "Reduce portion secretly", "Absorb cost, reduce quality"],
      explanation: "Gradual changes are less noticed. Added value justifies increase."
    }]
  },
  {
    id: "m4-l15", moduleId: 4, lessonIndex: 14, title: "Track dish-wise profitability", duration: "5 min",
    questions: [{
      id: "m4-l15-q1", type: "calculation",
      context: "Biryani: sells 50/day, ₹100 profit each. Kebab: sells 10/day, ₹150 profit each.",
      prompt: "Which contributes more to daily profit?",
      correctAnswer: ["Biryani (₹5,000 vs ₹1,500)"],
      choices: ["Kebab - higher margin", "Biryani (₹5,000 vs ₹1,500)", "Equal contribution", "Can't compare without full data"],
      explanation: "Total profit = volume × margin. High-volume moderate-margin often wins."
    }]
  },
  {
    id: "m4-l16", moduleId: 4, lessonIndex: 15, title: "Use menu engineering matrix", duration: "5 min",
    questions: [{
      id: "m4-l16-q1", type: "multiple-choice",
      prompt: "A dish with high popularity but low profit is called?",
      correctAnswer: ["Plow Horse - increase price or reduce cost"],
      choices: ["Star - promote more", "Plow Horse - increase price or reduce cost", "Puzzle - needs marketing", "Dog - remove from menu"],
      explanation: "Menu engineering: Star (high both), Plow Horse (high sales/low margin), Puzzle (low sales/high margin), Dog (low both)."
    }]
  },
  {
    id: "m4-l17", moduleId: 4, lessonIndex: 16, title: "Photograph dishes professionally", duration: "4 min",
    questions: [{
      id: "m4-l17-q1", type: "scenario",
      context: "You're taking photos for Swiggy listing with your phone.",
      prompt: "Most important factor for food photos?",
      correctAnswer: ["Natural/bright lighting near a window"],
      choices: ["Expensive camera", "Natural/bright lighting near a window", "Fancy filters", "Professional props"],
      explanation: "Lighting makes or breaks food photos. Natural light is free and best."
    }]
  },
  {
    id: "m4-l18", moduleId: 4, lessonIndex: 17, title: "Write allergen disclosures", duration: "4 min",
    questions: [{
      id: "m4-l18-q1", type: "true-false",
      prompt: "Mentioning allergens (nuts, dairy) on menu is optional in India.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "FSSAI mandates allergen disclosure. It's also good for customer trust."
    }]
  },
  {
    id: "m4-l19", moduleId: 4, lessonIndex: 18, title: "Plan veg/non-veg categorization", duration: "4 min",
    questions: [{
      id: "m4-l19-q1", type: "multiple-choice",
      prompt: "What's the FSSAI rule for veg/non-veg marking?",
      correctAnswer: ["Green dot for veg, brown dot for non-veg on all packaging"],
      choices: ["Optional labeling", "Green dot for veg, brown dot for non-veg on all packaging", "Only restaurant signage needed", "Text description is enough"],
      explanation: "Dot marking is mandatory on all food packaging in India."
    }]
  },
  {
    id: "m4-l20", moduleId: 4, lessonIndex: 19, title: "Finalize launch menu", duration: "5 min",
    questions: [{
      id: "m4-l20-q1", type: "scenario",
      context: "You've tested 30 dishes. Ready to launch.",
      prompt: "Ideal menu size for cloud kitchen launch?",
      correctAnswer: ["15-20 items max, with 5 clear heroes"],
      choices: ["All 30 - more choice is better", "15-20 items max, with 5 clear heroes", "5 items only", "50+ items like restaurants"],
      explanation: "Focused menu = operational efficiency + clear brand identity. Expand later."
    }]
  }
];

// Module 5: Supplier Sourcing (20 lessons)
const module5Lessons: LessonData[] = [
  {
    id: "m5-l1", moduleId: 5, lessonIndex: 0, title: "List ingredient requirements", duration: "4 min",
    questions: [{
      id: "m5-l1-q1", type: "scenario",
      context: "You're opening a biryani kitchen expecting 50 orders/day.",
      prompt: "First step in supplier sourcing?",
      correctAnswer: ["Calculate daily/weekly quantity of each ingredient from recipes"],
      choices: ["Call any wholesaler", "Calculate daily/weekly quantity of each ingredient from recipes", "Buy from supermarket initially", "Wait for suppliers to approach"],
      explanation: "Know your volumes before negotiating. Suppliers quote based on quantity."
    }]
  },
  {
    id: "m5-l2", moduleId: 5, lessonIndex: 1, title: "Identify supplier types", duration: "4 min",
    questions: [{
      id: "m5-l2-q1", type: "multiple-choice",
      prompt: "For daily fresh vegetables, which supplier type is best?",
      correctAnswer: ["Local mandi/market with daily delivery"],
      choices: ["Metro Cash & Carry", "Local mandi/market with daily delivery", "Online grocery apps", "Direct from farms"],
      explanation: "Fresh produce needs daily supply. Local markets offer best prices and freshness."
    }]
  },
  {
    id: "m5-l3", moduleId: 5, lessonIndex: 2, title: "Research wholesale markets", duration: "5 min",
    questions: [{
      id: "m5-l3-q1", type: "scenario",
      context: "Retail rice: ₹60/kg. Mandi price: ₹45/kg for 50kg bags.",
      prompt: "Monthly savings for 300kg rice usage?",
      correctAnswer: ["₹4,500"],
      choices: ["₹1,500", "₹3,000", "₹4,500", "₹6,000"],
      explanation: "₹15 savings × 300kg = ₹4,500 monthly."
    }]
  },
  {
    id: "m5-l4", moduleId: 5, lessonIndex: 3, title: "Evaluate supplier reliability", duration: "5 min",
    questions: [{
      id: "m5-l4-q1", type: "multiple-choice",
      prompt: "Most important factor when choosing a supplier?",
      correctAnswer: ["Consistency in quality and delivery time"],
      choices: ["Lowest price", "Consistency in quality and delivery time", "Largest inventory", "Oldest in business"],
      explanation: "Reliability prevents stockouts. Price matters, but late/bad delivery costs more."
    }]
  },
  {
    id: "m5-l5", moduleId: 5, lessonIndex: 4, title: "Request and compare quotes", duration: "5 min",
    questions: [{
      id: "m5-l5-q1", type: "true-false",
      prompt: "You should always accept the lowest quote from suppliers.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Consider quality, reliability, credit terms, and minimum orders. Cheapest isn't always best."
    }]
  },
  {
    id: "m5-l6", moduleId: 5, lessonIndex: 5, title: "Negotiate payment terms", duration: "5 min",
    questions: [{
      id: "m5-l6-q1", type: "scenario",
      context: "Supplier offers: Cash - ₹45/kg, 7-day credit - ₹48/kg, 15-day credit - ₹50/kg.",
      prompt: "Monthly cost difference for 500kg at 15-day credit vs cash?",
      correctAnswer: ["₹2,500 extra for credit"],
      choices: ["No difference", "₹1,500 extra", "₹2,500 extra for credit", "₹5,000 extra"],
      explanation: "₹5 difference × 500kg = ₹2,500. Credit costs money."
    }]
  },
  {
    id: "m5-l7", moduleId: 5, lessonIndex: 6, title: "Set up backup suppliers", duration: "4 min",
    questions: [{
      id: "m5-l7-q1", type: "scenario",
      context: "Your only chicken supplier has bird flu outbreak. Kitchen closed.",
      prompt: "How to prevent this situation?",
      correctAnswer: ["Maintain 2-3 suppliers for critical items, even at slightly higher cost"],
      choices: ["Accept it as force majeure", "Maintain 2-3 suppliers for critical items, even at slightly higher cost", "Switch to vegetarian menu", "Stock 30 days inventory"],
      explanation: "Single supplier dependency is a business risk. Backup costs are insurance."
    }]
  },
  {
    id: "m5-l8", moduleId: 5, lessonIndex: 7, title: "Create receiving checklist", duration: "4 min",
    questions: [{
      id: "m5-l8-q1", type: "multiple-choice",
      prompt: "What must be checked when receiving meat delivery?",
      correctAnswer: ["All of the above"],
      choices: ["Temperature (below 4°C)", "Color and smell", "Weight matches invoice", "All of the above"],
      explanation: "Comprehensive receiving prevents quality issues and billing disputes."
    }]
  },
  {
    id: "m5-l9", moduleId: 5, lessonIndex: 8, title: "Store inventory properly", duration: "5 min",
    questions: [{
      id: "m5-l9-q1", type: "multiple-choice",
      prompt: "What's the FIFO rule in inventory?",
      correctAnswer: ["First In, First Out - use older stock first"],
      choices: ["First In, First Out - use older stock first", "Find Items For Orders", "Fresh Ingredients For Operations", "Final Inventory For Ordering"],
      explanation: "FIFO prevents spoilage. Rotate stock so oldest items are used first."
    }]
  },
  {
    id: "m5-l10", moduleId: 5, lessonIndex: 9, title: "Calculate reorder points", duration: "5 min",
    questions: [{
      id: "m5-l10-q1", type: "calculation",
      context: "Daily rice usage: 10kg. Supplier takes 2 days to deliver. Safety stock: 1 day.",
      prompt: "At what stock level should you reorder?",
      correctAnswer: ["30kg (lead time + safety = 3 days × 10kg)"],
      choices: ["10kg", "20kg", "30kg (lead time + safety = 3 days × 10kg)", "50kg"],
      explanation: "Reorder point = (Lead time + Safety stock) × Daily usage = 3 × 10 = 30kg"
    }]
  },
  {
    id: "m5-l11", moduleId: 5, lessonIndex: 10, title: "Handle seasonal price fluctuations", duration: "4 min",
    questions: [{
      id: "m5-l11-q1", type: "scenario",
      context: "Tomato prices triple during monsoon (₹30 → ₹90/kg).",
      prompt: "Best strategy for price-sensitive items?",
      correctAnswer: ["Reduce dishes using tomatoes or temporarily raise prices"],
      choices: ["Stock 3 months inventory", "Reduce dishes using tomatoes or temporarily raise prices", "Absorb the cost", "Find substitute ingredients"],
      explanation: "Seasonal adjustment of menu and prices is necessary for profitability."
    }]
  },
  {
    id: "m5-l12", moduleId: 5, lessonIndex: 11, title: "Quality check methods", duration: "4 min",
    questions: [{
      id: "m5-l12-q1", type: "true-false",
      prompt: "You should check 100% of items in every delivery.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Random sampling is practical. Check 10-20% of bulk items, 100% of perishables."
    }]
  },
  {
    id: "m5-l13", moduleId: 5, lessonIndex: 12, title: "Return defective supplies", duration: "4 min",
    questions: [{
      id: "m5-l13-q1", type: "scenario",
      context: "10kg of chicken in 50kg delivery is off-color. Driver says 'not my problem'.",
      prompt: "Correct procedure?",
      correctAnswer: ["Photograph, document, deduct from invoice, escalate to supplier"],
      choices: ["Accept and discard later", "Refuse entire delivery", "Photograph, document, deduct from invoice, escalate to supplier", "Ask for discount on next order"],
      explanation: "Document immediately. Deduct value from payment with evidence."
    }]
  },
  {
    id: "m5-l14", moduleId: 5, lessonIndex: 13, title: "Build supplier relationships", duration: "4 min",
    questions: [{
      id: "m5-l14-q1", type: "multiple-choice",
      prompt: "How to build good supplier relationships?",
      correctAnswer: ["Pay on time, communicate clearly, give consistent orders"],
      choices: ["Always negotiate lowest price", "Pay on time, communicate clearly, give consistent orders", "Switch suppliers frequently for deals", "Never complain about quality"],
      explanation: "Reliable buyers get priority during shortages and better service."
    }]
  },
  {
    id: "m5-l15", moduleId: 5, lessonIndex: 14, title: "Use technology for ordering", duration: "4 min",
    questions: [{
      id: "m5-l15-q1", type: "true-false",
      prompt: "WhatsApp groups with suppliers is an efficient ordering system.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Simple tools work. WhatsApp with photos, voice notes, and delivery confirmations is effective."
    }]
  },
  {
    id: "m5-l16", moduleId: 5, lessonIndex: 15, title: "Manage inventory wastage", duration: "5 min",
    questions: [{
      id: "m5-l16-q1", type: "calculation",
      context: "Weekly purchase: ₹50,000. Wastage: 8%. Industry benchmark: 4%.",
      prompt: "How much money are you losing to excess waste monthly?",
      correctAnswer: ["₹8,000 per month"],
      choices: ["₹2,000", "₹4,000", "₹8,000 per month", "₹16,000"],
      explanation: "Excess waste: 4% of ₹50,000 = ₹2,000/week = ₹8,000/month."
    }]
  },
  {
    id: "m5-l17", moduleId: 5, lessonIndex: 16, title: "Source packaging materials", duration: "4 min",
    questions: [{
      id: "m5-l17-q1", type: "scenario",
      context: "Container vendor offers 20% discount for 3-month advance payment.",
      prompt: "Should you take this deal?",
      correctAnswer: ["Calculate: if discount > cost of capital, yes"],
      choices: ["Always - 20% is huge", "Never - ties up cash", "Calculate: if discount > cost of capital, yes", "Only if cash is available"],
      explanation: "If your cost of capital is 12%/year (1%/month), 20% for 3 months = 6.6%/month. Good deal."
    }]
  },
  {
    id: "m5-l18", moduleId: 5, lessonIndex: 17, title: "Ensure supplier compliance", duration: "4 min",
    questions: [{
      id: "m5-l18-q1", type: "multiple-choice",
      prompt: "What document should meat suppliers provide?",
      correctAnswer: ["FSSAI license and slaughter certificate"],
      choices: ["Just delivery challan", "FSSAI license and slaughter certificate", "GST invoice only", "No documents needed"],
      explanation: "For traceability and food safety compliance, supplier documentation is essential."
    }]
  },
  {
    id: "m5-l19", moduleId: 5, lessonIndex: 18, title: "Review supplier performance", duration: "4 min",
    questions: [{
      id: "m5-l19-q1", type: "scenario",
      context: "Supplier is cheapest but late 30% of the time.",
      prompt: "How to evaluate this supplier?",
      correctAnswer: ["Calculate cost of late deliveries (lost orders, emergency purchases)"],
      choices: ["Keep using - price is king", "Replace immediately", "Calculate cost of late deliveries (lost orders, emergency purchases)", "Ignore lateness if quality is good"],
      explanation: "Total cost = price + cost of problems. Late delivery has hidden costs."
    }]
  },
  {
    id: "m5-l20", moduleId: 5, lessonIndex: 19, title: "Create supplier master list", duration: "4 min",
    questions: [{
      id: "m5-l20-q1", type: "multiple-choice",
      prompt: "What should your supplier master list include?",
      correctAnswer: ["Contact, items, prices, payment terms, backup supplier for each category"],
      choices: ["Name and phone number only", "Contact, items, prices, payment terms, backup supplier for each category", "Just frequently used suppliers", "What accounting software tracks"],
      explanation: "Complete supplier documentation enables quick decisions and backup plans."
    }]
  }
];

// Module 6: Packaging & Branding (20 lessons)
const module6Lessons: LessonData[] = [
  {
    id: "m6-l1", moduleId: 6, lessonIndex: 0, title: "Define brand personality", duration: "5 min",
    questions: [{
      id: "m6-l1-q1", type: "scenario",
      context: "Your biryani is homestyle, slow-cooked, family recipe based.",
      prompt: "Which brand personality fits best?",
      correctAnswer: ["Warm, authentic, traditional - 'like grandmother made'"],
      choices: ["Modern, fast, trendy", "Warm, authentic, traditional - 'like grandmother made'", "Premium, exclusive, gourmet", "Quirky, fun, experimental"],
      explanation: "Brand personality must match product reality and target audience expectations."
    }]
  },
  {
    id: "m6-l2", moduleId: 6, lessonIndex: 1, title: "Choose brand name", duration: "5 min",
    questions: [{
      id: "m6-l2-q1", type: "multiple-choice",
      prompt: "What makes a good cloud kitchen brand name?",
      correctAnswer: ["Easy to spell, memorable, hints at cuisine/specialty"],
      choices: ["Long descriptive name", "Easy to spell, memorable, hints at cuisine/specialty", "Owner's full name", "Generic food word"],
      explanation: "Name should be searchable, unique, and create instant association."
    }]
  },
  {
    id: "m6-l3", moduleId: 6, lessonIndex: 2, title: "Design logo basics", duration: "5 min",
    questions: [{
      id: "m6-l3-q1", type: "true-false",
      prompt: "Your logo must look good in single color (black/white) version.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Logo appears in many contexts (stamps, fax, low-quality print). Single color version essential."
    }]
  },
  {
    id: "m6-l4", moduleId: 6, lessonIndex: 3, title: "Select brand colors", duration: "4 min",
    questions: [{
      id: "m6-l4-q1", type: "scenario",
      context: "Choosing colors for a biryani brand targeting young professionals.",
      prompt: "Best color combination?",
      correctAnswer: ["Warm orange/saffron with cream - appetite stimulating"],
      choices: ["Blue and white - professional", "Warm orange/saffron with cream - appetite stimulating", "Black and gold - premium", "Green and brown - natural"],
      explanation: "Warm colors stimulate appetite. Saffron connects to biryani's heritage."
    }]
  },
  {
    id: "m6-l5", moduleId: 6, lessonIndex: 4, title: "Choose packaging containers", duration: "5 min",
    questions: [{
      id: "m6-l5-q1", type: "calculation",
      context: "Plastic container: ₹8. Bagasse (eco): ₹15. You sell 100 orders/day.",
      prompt: "Annual cost difference choosing eco-friendly?",
      correctAnswer: ["₹2.55 lakhs extra"],
      choices: ["₹25,500", "₹2.55 lakhs extra", "₹5.1 lakhs", "₹7.5 lakhs"],
      explanation: "₹7 × 100 × 365 = ₹2,55,500 annually. Factor into pricing or absorb."
    }]
  },
  {
    id: "m6-l6", moduleId: 6, lessonIndex: 5, title: "Design container labels", duration: "4 min",
    questions: [{
      id: "m6-l6-q1", type: "multiple-choice",
      prompt: "What must appear on food packaging labels (FSSAI)?",
      correctAnswer: ["All of the above"],
      choices: ["Brand name and FSSAI license number", "Veg/non-veg symbol", "Best before date", "All of the above"],
      explanation: "FSSAI mandates complete labeling including ingredients and allergens."
    }]
  },
  {
    id: "m6-l7", moduleId: 6, lessonIndex: 6, title: "Source printed packaging", duration: "5 min",
    questions: [{
      id: "m6-l7-q1", type: "scenario",
      context: "Printer offers branded containers: MOQ 5000 pieces vs plain at 500 pieces.",
      prompt: "Strategy for new kitchen?",
      correctAnswer: ["Start with plain + printed stickers, switch to printed when volume stabilizes"],
      choices: ["Order 5000 branded immediately", "Start with plain + printed stickers, switch to printed when volume stabilizes", "Use only plain forever", "Print on regular paper at home"],
      explanation: "Stickers offer branding flexibility. Commit to bulk when menu/branding is final."
    }]
  },
  {
    id: "m6-l8", moduleId: 6, lessonIndex: 7, title: "Ensure food survives delivery", duration: "5 min",
    questions: [{
      id: "m6-l8-q1", type: "multiple-choice",
      prompt: "Why do curries leak during delivery?",
      correctAnswer: ["Container lid not microwave/heat safe, warps and loosens"],
      choices: ["Too much gravy", "Container lid not microwave/heat safe, warps and loosens", "Rider's fault", "Normal for curries"],
      explanation: "Use containers rated for hot food. Test at operating temperatures."
    }]
  },
  {
    id: "m6-l9", moduleId: 6, lessonIndex: 8, title: "Maintain food temperature", duration: "4 min",
    questions: [{
      id: "m6-l9-q1", type: "scenario",
      context: "Customer complains biryani arrived cold after 30-min delivery.",
      prompt: "Packaging solution?",
      correctAnswer: ["Use insulated containers or wrap in foil + paper bag"],
      choices: ["Pack hotter initially", "Use insulated containers or wrap in foil + paper bag", "Blame delivery partner", "Add microwave instructions"],
      explanation: "Insulation maintains temperature. Aluminum foil + paper reduces heat loss 40%."
    }]
  },
  {
    id: "m6-l10", moduleId: 6, lessonIndex: 9, title: "Prevent soggy food packaging", duration: "4 min",
    questions: [{
      id: "m6-l10-q1", type: "true-false",
      prompt: "Vented containers help keep fried items crispy during delivery.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Vents allow steam to escape. Closed containers trap moisture making food soggy."
    }]
  },
  {
    id: "m6-l11", moduleId: 6, lessonIndex: 10, title: "Design carry bag", duration: "4 min",
    questions: [{
      id: "m6-l11-q1", type: "multiple-choice",
      prompt: "What's most important for delivery bags?",
      correctAnswer: ["Strong handles that don't break with heavy food weight"],
      choices: ["Fancy printing", "Strong handles that don't break with heavy food weight", "Transparent material", "Largest size possible"],
      explanation: "Bag failure = spilled food = refund + bad review. Prioritize strength."
    }]
  },
  {
    id: "m6-l12", moduleId: 6, lessonIndex: 11, title: "Add marketing inserts", duration: "4 min",
    questions: [{
      id: "m6-l12-q1", type: "scenario",
      context: "You want repeat orders from first-time customers.",
      prompt: "Best insert to include in packaging?",
      correctAnswer: ["QR code for 10% off next order + feedback form"],
      choices: ["Full menu printout", "QR code for 10% off next order + feedback form", "Owner's photo and story", "Nothing - saves cost"],
      explanation: "Discount incentivizes return. QR code is trackable and low cost."
    }]
  },
  {
    id: "m6-l13", moduleId: 6, lessonIndex: 12, title: "Include cutlery and napkins", duration: "3 min",
    questions: [{
      id: "m6-l13-q1", type: "true-false",
      prompt: "You should include plastic cutlery in every order by default.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Ask customers if they need cutlery. Reduces waste and cost. Platforms have this option."
    }]
  },
  {
    id: "m6-l14", moduleId: 6, lessonIndex: 13, title: "Handle spillage-prone items", duration: "4 min",
    questions: [{
      id: "m6-l14-q1", type: "multiple-choice",
      prompt: "Best packaging for raita/chutneys that often spill?",
      correctAnswer: ["Small containers with screw lids, sealed with tape"],
      choices: ["Same container as main dish", "Small containers with screw lids, sealed with tape", "Plastic pouches", "Cup with press-fit lid"],
      explanation: "Screw lids + tape seal prevents 95% of spillage issues."
    }]
  },
  {
    id: "m6-l15", moduleId: 6, lessonIndex: 14, title: "Photograph for delivery apps", duration: "5 min",
    questions: [{
      id: "m6-l15-q1", type: "scenario",
      context: "Taking photos for Swiggy/Zomato listing.",
      prompt: "Most important photo tip?",
      correctAnswer: ["Show food in your actual packaging, not fancy plating"],
      choices: ["Use professional studio", "Show food in your actual packaging, not fancy plating", "Heavy editing for colors", "Show largest portion possible"],
      explanation: "Customer should receive what they see. Misleading photos = bad reviews."
    }]
  },
  {
    id: "m6-l16", moduleId: 6, lessonIndex: 15, title: "Create consistent presentation", duration: "4 min",
    questions: [{
      id: "m6-l16-q1", type: "scenario",
      context: "Different staff pack orders differently - inconsistent portions and arrangement.",
      prompt: "Solution?",
      correctAnswer: ["Create visual SOPs with photos showing exact packing standards"],
      choices: ["Accept variation as natural", "Create visual SOPs with photos showing exact packing standards", "One person does all packing", "Customer won't notice"],
      explanation: "Visual guides ensure every order looks professional regardless of who packs."
    }]
  },
  {
    id: "m6-l17", moduleId: 6, lessonIndex: 16, title: "Test packaging before launch", duration: "4 min",
    questions: [{
      id: "m6-l17-q1", type: "multiple-choice",
      prompt: "How to test if your packaging works for delivery?",
      correctAnswer: ["Pack samples, deliver to friend 5km away, check arrival condition"],
      choices: ["Vendor's word is enough", "Pack samples, deliver to friend 5km away, check arrival condition", "Test at room temperature only", "Wait for customer complaints"],
      explanation: "Real-world testing reveals issues. Check temperature, leaks, presentation after 30-45 min."
    }]
  },
  {
    id: "m6-l18", moduleId: 6, lessonIndex: 17, title: "Handle returns and refunds", duration: "4 min",
    questions: [{
      id: "m6-l18-q1", type: "scenario",
      context: "Customer posts photo of spilled gravy, demands full refund.",
      prompt: "Best response?",
      correctAnswer: ["Apologize, offer full refund or replacement, investigate packaging"],
      choices: ["Blame delivery partner", "Apologize, offer full refund or replacement, investigate packaging", "Ask for video proof", "Ignore - one customer doesn't matter"],
      explanation: "Quick resolution prevents public complaints. Learn and improve packaging."
    }]
  },
  {
    id: "m6-l19", moduleId: 6, lessonIndex: 18, title: "Track packaging costs", duration: "4 min",
    questions: [{
      id: "m6-l19-q1", type: "calculation",
      context: "Per order: Container ₹15, bag ₹5, stickers ₹2, extras ₹3. AOV: ₹350.",
      prompt: "Packaging as percentage of order value?",
      correctAnswer: ["7.1%"],
      choices: ["5%", "7.1%", "10%", "15%"],
      explanation: "₹25 ÷ ₹350 = 7.1%. Target is 5-8% of order value."
    }]
  },
  {
    id: "m6-l20", moduleId: 6, lessonIndex: 19, title: "Plan for eco-friendly transition", duration: "4 min",
    questions: [{
      id: "m6-l20-q1", type: "multiple-choice",
      prompt: "Why consider eco-friendly packaging despite higher cost?",
      correctAnswer: ["All of the above"],
      choices: ["Growing customer preference", "Regulatory trends moving towards bans", "Brand differentiation", "All of the above"],
      explanation: "Sustainability is becoming competitive advantage and compliance requirement."
    }]
  }
];

// Module 7: Online Platforms (20 lessons)
const module7Lessons: LessonData[] = [
  {
    id: "m7-l1", moduleId: 7, lessonIndex: 0, title: "Compare Swiggy vs Zomato", duration: "5 min",
    questions: [{
      id: "m7-l1-q1", type: "multiple-choice",
      prompt: "Key difference between Swiggy and Zomato for restaurants?",
      correctAnswer: ["Commission structures and customer base vary by city"],
      choices: ["No difference", "Commission structures and customer base vary by city", "Swiggy is always cheaper", "Zomato has no commission"],
      explanation: "Both platforms have different strengths in different areas. Be on both initially."
    }]
  },
  {
    id: "m7-l2", moduleId: 7, lessonIndex: 1, title: "Understand commission structures", duration: "5 min",
    questions: [{
      id: "m7-l2-q1", type: "calculation",
      context: "Order value: ₹500. Commission: 22%. GST on commission: 18%.",
      prompt: "Your net payout after platform deductions?",
      correctAnswer: ["₹370.20"],
      choices: ["₹390", "₹380", "₹370.20", "₹350"],
      explanation: "Commission: ₹110. GST on commission: ₹19.80. Total deduction: ₹129.80. Payout: ₹370.20"
    }]
  },
  {
    id: "m7-l3", moduleId: 7, lessonIndex: 2, title: "Complete onboarding documents", duration: "5 min",
    questions: [{
      id: "m7-l3-q1", type: "multiple-choice",
      prompt: "What's mandatory for platform onboarding?",
      correctAnswer: ["All of the above"],
      choices: ["FSSAI license", "PAN card and GST", "Current account details", "All of the above"],
      explanation: "Platforms require complete legal and financial documentation."
    }]
  },
  {
    id: "m7-l4", moduleId: 7, lessonIndex: 3, title: "Set up your listing", duration: "5 min",
    questions: [{
      id: "m7-l4-q1", type: "scenario",
      context: "Creating your Swiggy listing. You have 200 characters for description.",
      prompt: "What should you prioritize?",
      correctAnswer: ["Highlight hero dish, USP, and any offers"],
      choices: ["Full kitchen history", "Highlight hero dish, USP, and any offers", "List all dishes", "Just the address"],
      explanation: "Brief, compelling copy that differentiates you and creates curiosity."
    }]
  },
  {
    id: "m7-l5", moduleId: 7, lessonIndex: 4, title: "Optimize menu on apps", duration: "5 min",
    questions: [{
      id: "m7-l5-q1", type: "true-false",
      prompt: "Best-selling items should be at the top of your menu on apps.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Most users don't scroll. Put heroes and high-margin items at top."
    }]
  },
  {
    id: "m7-l6", moduleId: 7, lessonIndex: 5, title: "Upload quality photos", duration: "4 min",
    questions: [{
      id: "m7-l6-q1", type: "multiple-choice",
      prompt: "Ideal image size for Swiggy/Zomato listings?",
      correctAnswer: ["Square format, minimum 800x800 pixels"],
      choices: ["Any size works", "Square format, minimum 800x800 pixels", "Portrait orientation", "As large as possible"],
      explanation: "Square crops well on mobile. High resolution looks professional."
    }]
  },
  {
    id: "m7-l7", moduleId: 7, lessonIndex: 6, title: "Set operating hours", duration: "4 min",
    questions: [{
      id: "m7-l7-q1", type: "scenario",
      context: "Your kitchen can operate 11 AM - 11 PM. Lunch rush is 12-2, dinner 7-10.",
      prompt: "Ideal platform operating hours?",
      correctAnswer: ["11:30 AM - 10:30 PM (avoid first/last hour prep time)"],
      choices: ["Full 11-11", "11:30 AM - 10:30 PM (avoid first/last hour prep time)", "Only lunch and dinner", "24/7 for maximum orders"],
      explanation: "Buffer for prep and closeout. Being live when you can't deliver hurts ratings."
    }]
  },
  {
    id: "m7-l8", moduleId: 7, lessonIndex: 7, title: "Price for platform profitability", duration: "5 min",
    questions: [{
      id: "m7-l8-q1", type: "calculation",
      context: "Your target margin: 30%. Commission: 22%. GST: 5%.",
      prompt: "If food cost is ₹100, what should menu price be?",
      correctAnswer: ["₹233 (to achieve 30% margin after all deductions)"],
      choices: ["₹143", "₹175", "₹233 (to achieve 30% margin after all deductions)", "₹300"],
      explanation: "Work backwards: ₹100 is 43% of selling price. Menu price = ₹100 ÷ 0.43 ≈ ₹233"
    }]
  },
  {
    id: "m7-l9", moduleId: 7, lessonIndex: 8, title: "Launch with offers", duration: "4 min",
    questions: [{
      id: "m7-l9-q1", type: "scenario",
      context: "New listing. Considering 50% off first week vs 20% off first month.",
      prompt: "Which launch offer is better?",
      correctAnswer: ["20% for longer - builds habit, sustainable for you"],
      choices: ["50% off - bigger splash", "20% for longer - builds habit, sustainable for you", "No offers - confident in quality", "Free delivery only"],
      explanation: "Deep discounts attract deal-seekers who won't return. Moderate, sustained offers build loyal customers."
    }]
  },
  {
    id: "m7-l10", moduleId: 7, lessonIndex: 9, title: "Handle orders efficiently", duration: "5 min",
    questions: [{
      id: "m7-l10-q1", type: "multiple-choice",
      prompt: "What should you do as soon as order comes in?",
      correctAnswer: ["Accept quickly, check special instructions, start prep"],
      choices: ["Wait to batch with others", "Accept quickly, check special instructions, start prep", "Call customer to confirm", "Accept only if rider is nearby"],
      explanation: "Fast acceptance improves ranking. Check instructions to avoid complaints."
    }]
  },
  {
    id: "m7-l11", moduleId: 7, lessonIndex: 10, title: "Manage busy hour orders", duration: "5 min",
    questions: [{
      id: "m7-l11-q1", type: "scenario",
      context: "Peak hour. You're getting more orders than you can handle in 30 min.",
      prompt: "Best action?",
      correctAnswer: ["Extend prep time or go offline briefly, don't accept what you can't deliver"],
      choices: ["Accept all, deliver late", "Extend prep time or go offline briefly, don't accept what you can't deliver", "Cancel orders", "Rush and compromise quality"],
      explanation: "Late/bad orders hurt ratings more than going offline. Protect your rating."
    }]
  },
  {
    id: "m7-l12", moduleId: 7, lessonIndex: 11, title: "Handle order cancellations", duration: "4 min",
    questions: [{
      id: "m7-l12-q1", type: "true-false",
      prompt: "Rejecting orders hurts your platform ranking more than going offline.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Rejection rate affects visibility. Better to go offline than reject orders."
    }]
  },
  {
    id: "m7-l13", moduleId: 7, lessonIndex: 12, title: "Respond to reviews", duration: "4 min",
    questions: [{
      id: "m7-l13-q1", type: "scenario",
      context: "Customer gives 2-star rating: 'Food was cold'.",
      prompt: "Best response?",
      correctAnswer: ["Apologize, explain what you're fixing, offer to make it right"],
      choices: ["Blame delivery partner", "Apologize, explain what you're fixing, offer to make it right", "Ignore - just one review", "Argue that food was hot when packed"],
      explanation: "Professional response shows potential customers you care and take action."
    }]
  },
  {
    id: "m7-l14", moduleId: 7, lessonIndex: 13, title: "Maintain platform rating", duration: "5 min",
    questions: [{
      id: "m7-l14-q1", type: "calculation",
      context: "Current rating: 4.2 with 100 reviews. You get ten 5-star reviews.",
      prompt: "New rating?",
      correctAnswer: ["4.27"],
      choices: ["4.5", "4.35", "4.27", "4.22"],
      explanation: "(4.2 × 100 + 5 × 10) ÷ 110 = (420 + 50) ÷ 110 = 4.27. Takes many good reviews to move the needle."
    }]
  },
  {
    id: "m7-l15", moduleId: 7, lessonIndex: 14, title: "Use platform analytics", duration: "5 min",
    questions: [{
      id: "m7-l15-q1", type: "multiple-choice",
      prompt: "Which platform metric should you check daily?",
      correctAnswer: ["All of the above"],
      choices: ["Order volume and trends", "Cancellation rate", "Average rating of recent orders", "All of the above"],
      explanation: "Daily monitoring catches problems early before they affect ranking."
    }]
  },
  {
    id: "m7-l16", moduleId: 7, lessonIndex: 15, title: "Run platform ads", duration: "5 min",
    questions: [{
      id: "m7-l16-q1", type: "scenario",
      context: "Swiggy offers ads at ₹10/click. Your average order value is ₹400, profit margin 25%.",
      prompt: "Maximum cost per acquisition that's profitable?",
      correctAnswer: ["₹100 (25% of ₹400)"],
      choices: ["₹10", "₹50", "₹100 (25% of ₹400)", "₹200"],
      explanation: "If you earn ₹100 profit per order, you can spend up to ₹100 to acquire customer."
    }]
  },
  {
    id: "m7-l17", moduleId: 7, lessonIndex: 16, title: "Join platform programs", duration: "4 min",
    questions: [{
      id: "m7-l17-q1", type: "true-false",
      prompt: "Swiggy/Zomato Pro/Premium programs always benefit restaurants.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Evaluate costs vs benefits. Some programs lock you into discounts that hurt margins."
    }]
  },
  {
    id: "m7-l18", moduleId: 7, lessonIndex: 17, title: "Handle payment reconciliation", duration: "5 min",
    questions: [{
      id: "m7-l18-q1", type: "multiple-choice",
      prompt: "How often should you reconcile platform payments?",
      correctAnswer: ["Weekly - catch discrepancies early"],
      choices: ["Daily", "Weekly - catch discrepancies early", "Monthly", "Only if amount seems low"],
      explanation: "Weekly reconciliation catches errors before they compound."
    }]
  },
  {
    id: "m7-l19", moduleId: 7, lessonIndex: 18, title: "Build direct orders channel", duration: "5 min",
    questions: [{
      id: "m7-l19-q1", type: "scenario",
      context: "70% of your orders come from Swiggy. Commission is eating your margins.",
      prompt: "How to reduce platform dependency?",
      correctAnswer: ["Build WhatsApp ordering, offer 10% discount for direct orders"],
      choices: ["Accept lower margins", "Build WhatsApp ordering, offer 10% discount for direct orders", "Leave platform entirely", "Raise prices to cover commission"],
      explanation: "Save 12% on commission, share 10% with customer. Everyone wins."
    }]
  },
  {
    id: "m7-l20", moduleId: 7, lessonIndex: 19, title: "Track platform performance", duration: "4 min",
    questions: [{
      id: "m7-l20-q1", type: "multiple-choice",
      prompt: "Which KPI matters most for platform success?",
      correctAnswer: ["Rating (affects visibility in search)"],
      choices: ["Total orders", "Rating (affects visibility in search)", "Revenue", "Average order value"],
      explanation: "Rating determines search ranking. Higher rating = more visibility = more orders."
    }]
  }
];

// Module 8: Daily Operations SOPs (20 lessons)
const module8Lessons: LessonData[] = [
  {
    id: "m8-l1", moduleId: 8, lessonIndex: 0, title: "Create morning opening checklist", duration: "4 min",
    questions: [{
      id: "m8-l1-q1", type: "multiple-choice",
      prompt: "First thing to do when opening kitchen?",
      correctAnswer: ["Check refrigerator temperatures, ensure cold chain intact"],
      choices: ["Start cooking immediately", "Check refrigerator temperatures, ensure cold chain intact", "Turn on all equipment", "Take inventory"],
      explanation: "Cold chain verification prevents food safety issues from overnight storage."
    }]
  },
  {
    id: "m8-l2", moduleId: 8, lessonIndex: 1, title: "Set up mise en place", duration: "5 min",
    questions: [{
      id: "m8-l2-q1", type: "scenario",
      context: "Lunch rush starts at 12. It's 11 AM.",
      prompt: "What should be ready by 11:30?",
      correctAnswer: ["All prep work done, containers ready, app is live"],
      choices: ["Just ingredients out", "All prep work done, containers ready, app is live", "Start prepping when orders come", "Only main dishes ready"],
      explanation: "Mise en place before rush enables fast service. Never prep during peak."
    }]
  },
  {
    id: "m8-l3", moduleId: 8, lessonIndex: 2, title: "Standardize recipe portions", duration: "5 min",
    questions: [{
      id: "m8-l3-q1", type: "calculation",
      context: "Biryani recipe: 200g rice per portion. Today's cook used 250g 'to be generous'.",
      prompt: "Impact on 50 orders?",
      correctAnswer: ["2.5kg extra rice used, ₹100-150 lost margin"],
      choices: ["No impact", "2.5kg extra rice used, ₹100-150 lost margin", "Customers will be happier", "Only 1kg difference"],
      explanation: "50g × 50 = 2.5kg. Small variations compound. Use weighing scales."
    }]
  },
  {
    id: "m8-l4", moduleId: 8, lessonIndex: 3, title: "Maintain temperature logs", duration: "4 min",
    questions: [{
      id: "m8-l4-q1", type: "true-false",
      prompt: "Temperature logs are only needed for FSSAI audits.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Daily temperature monitoring prevents food safety issues. Legal protection in complaints."
    }]
  },
  {
    id: "m8-l5", moduleId: 8, lessonIndex: 4, title: "Handle order flow", duration: "5 min",
    questions: [{
      id: "m8-l5-q1", type: "multiple-choice",
      prompt: "Best way to track multiple simultaneous orders?",
      correctAnswer: ["Order tickets with timestamps, organized by priority"],
      choices: ["Mental tracking", "Order tickets with timestamps, organized by priority", "First come first served always", "Shout orders to cook"],
      explanation: "Visual ticketing prevents missed orders and ensures FIFO completion."
    }]
  },
  {
    id: "m8-l6", moduleId: 8, lessonIndex: 5, title: "Quality check before dispatch", duration: "4 min",
    questions: [{
      id: "m8-l6-q1", type: "scenario",
      context: "Rush hour. Packing person is skipping quality checks to speed up.",
      prompt: "What's the risk?",
      correctAnswer: ["Wrong items, missing items, spillage - all cause refunds and bad ratings"],
      choices: ["Customers won't notice", "Wrong items, missing items, spillage - all cause refunds and bad ratings", "Only affects repeat customers", "Delivery partner will check"],
      explanation: "30 seconds of QC saves 30 minutes of complaint handling plus rating damage."
    }]
  },
  {
    id: "m8-l7", moduleId: 8, lessonIndex: 6, title: "Manage rider handoff", duration: "4 min",
    questions: [{
      id: "m8-l7-q1", type: "multiple-choice",
      prompt: "What should you verify when handing order to rider?",
      correctAnswer: ["Order ID matches, bag is sealed, rider confirms receipt"],
      choices: ["Nothing - just hand it over", "Order ID matches, bag is sealed, rider confirms receipt", "Rider's rating only", "Ask rider to check contents"],
      explanation: "Verification prevents disputes about whose fault if order has issues."
    }]
  },
  {
    id: "m8-l8", moduleId: 8, lessonIndex: 7, title: "Handle rush hour operations", duration: "5 min",
    questions: [{
      id: "m8-l8-q1", type: "scenario",
      context: "Dinner rush. 15 orders pending, 2 cooks available, normal time 10 min/order.",
      prompt: "How to handle?",
      correctAnswer: ["Extend prep time on app, prioritize by promised time, parallel prep"],
      choices: ["Rush all orders, quality may suffer", "Extend prep time on app, prioritize by promised time, parallel prep", "Cancel half the orders", "Go offline until caught up"],
      explanation: "Realistic commitments + smart prioritization maintains quality and ratings."
    }]
  },
  {
    id: "m8-l9", moduleId: 8, lessonIndex: 8, title: "Track daily food waste", duration: "4 min",
    questions: [{
      id: "m8-l9-q1", type: "calculation",
      context: "Daily prep: 20kg vegetables. End of day waste: 3kg.",
      prompt: "What's your waste percentage?",
      correctAnswer: ["15%"],
      choices: ["3%", "10%", "15%", "20%"],
      explanation: "3kg ÷ 20kg = 15%. Target is under 5%. Review prep quantities."
    }]
  },
  {
    id: "m8-l10", moduleId: 8, lessonIndex: 9, title: "Clean as you go", duration: "4 min",
    questions: [{
      id: "m8-l10-q1", type: "true-false",
      prompt: "Deep cleaning should happen only after closing, not during service.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Light cleaning during service, deep cleaning after. Don't disrupt operations."
    }]
  },
  {
    id: "m8-l11", moduleId: 8, lessonIndex: 10, title: "Manage staff breaks", duration: "4 min",
    questions: [{
      id: "m8-l11-q1", type: "scenario",
      context: "Two staff want lunch break at same time during 1 PM lull.",
      prompt: "How to handle?",
      correctAnswer: ["Stagger breaks - one at 12:30, one at 1:30 to maintain coverage"],
      choices: ["Both go together - it's slow", "Stagger breaks - one at 12:30, one at 1:30 to maintain coverage", "No breaks during operating hours", "Close kitchen for 30 min"],
      explanation: "Staggered breaks ensure continuous coverage. Orders can come anytime."
    }]
  },
  {
    id: "m8-l12", moduleId: 8, lessonIndex: 11, title: "Handle equipment breakdowns", duration: "5 min",
    questions: [{
      id: "m8-l12-q1", type: "multiple-choice",
      prompt: "Exhaust fan breaks during lunch rush. What's priority action?",
      correctAnswer: ["Open windows/doors, continue with reduced capacity, call repair"],
      choices: ["Close kitchen immediately", "Open windows/doors, continue with reduced capacity, call repair", "Ignore until evening", "Cook without ventilation"],
      explanation: "Immediate mitigation + repair call. Don't compromise safety or lose all orders."
    }]
  },
  {
    id: "m8-l13", moduleId: 8, lessonIndex: 12, title: "Handle customer complaints", duration: "5 min",
    questions: [{
      id: "m8-l13-q1", type: "scenario",
      context: "Customer calls angry about hair in food. Demands refund.",
      prompt: "Best response?",
      correctAnswer: ["Apologize, offer immediate refund/replacement, investigate internally"],
      choices: ["Ask for proof", "Apologize, offer immediate refund/replacement, investigate internally", "Blame kitchen staff", "Offer only partial refund"],
      explanation: "Fast, generous resolution prevents bad reviews. Cost of refund < cost of bad rating."
    }]
  },
  {
    id: "m8-l14", moduleId: 8, lessonIndex: 13, title: "End of day inventory count", duration: "4 min",
    questions: [{
      id: "m8-l14-q1", type: "multiple-choice",
      prompt: "What should end-of-day inventory focus on?",
      correctAnswer: ["High-value items and perishables that need ordering"],
      choices: ["Every single item", "High-value items and perishables that need ordering", "Only items that ran out", "Skip if busy day"],
      explanation: "Focus on what matters for next day's ordering and cost control."
    }]
  },
  {
    id: "m8-l15", moduleId: 8, lessonIndex: 14, title: "Secure closing procedures", duration: "4 min",
    questions: [{
      id: "m8-l15-q1", type: "multiple-choice",
      prompt: "End of day closing checklist should include?",
      correctAnswer: ["All of the above"],
      choices: ["Turn off gas, check all burners", "Lock fridge, check temperatures", "Secure cash/tablets, lock premises", "All of the above"],
      explanation: "Comprehensive closing prevents theft, fire, and food safety issues."
    }]
  },
  {
    id: "m8-l16", moduleId: 8, lessonIndex: 15, title: "Train new staff", duration: "5 min",
    questions: [{
      id: "m8-l16-q1", type: "scenario",
      context: "New cook joins. You're busy with orders.",
      prompt: "How to train efficiently?",
      correctAnswer: ["Buddy system - pair with experienced cook, formal training in slow hours"],
      choices: ["Let them figure it out", "Buddy system - pair with experienced cook, formal training in slow hours", "Only theory, no practice", "Full day training before any work"],
      explanation: "Learning by doing with guidance is most effective. Use slow hours for formal training."
    }]
  },
  {
    id: "m8-l17", moduleId: 8, lessonIndex: 16, title: "Document standard recipes", duration: "5 min",
    questions: [{
      id: "m8-l17-q1", type: "true-false",
      prompt: "Recipe documentation is only needed for complex dishes.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Every dish needs documentation for consistency when different people cook."
    }]
  },
  {
    id: "m8-l18", moduleId: 8, lessonIndex: 17, title: "Handle staff absences", duration: "4 min",
    questions: [{
      id: "m8-l18-q1", type: "scenario",
      context: "Only cook calls in sick on Saturday morning. Rush day.",
      prompt: "Immediate action?",
      correctAnswer: ["Call backup (you should have one), reduce menu to what you can cook"],
      choices: ["Close for the day", "Call backup (you should have one), reduce menu to what you can cook", "Hire someone from street", "Cook everything yourself all day"],
      explanation: "Backup contacts are essential. Reduced menu is better than poor quality or closure."
    }]
  },
  {
    id: "m8-l19", moduleId: 8, lessonIndex: 18, title: "Review daily performance", duration: "4 min",
    questions: [{
      id: "m8-l19-q1", type: "multiple-choice",
      prompt: "Which metrics to review daily?",
      correctAnswer: ["Orders, revenue, complaints, waste, ratings"],
      choices: ["Only revenue", "Orders, revenue, complaints, waste, ratings", "Monthly is enough", "Whatever platform shows"],
      explanation: "Daily tracking enables quick corrections. Don't wait for month-end surprises."
    }]
  },
  {
    id: "m8-l20", moduleId: 8, lessonIndex: 19, title: "Create weekly operations calendar", duration: "5 min",
    questions: [{
      id: "m8-l20-q1", type: "scenario",
      context: "You keep forgetting vendor payments and license renewals.",
      prompt: "Solution?",
      correctAnswer: ["Weekly calendar with recurring tasks and reminders"],
      choices: ["Hire admin staff", "Weekly calendar with recurring tasks and reminders", "Pay when reminded", "Let things happen naturally"],
      explanation: "Systematic scheduling prevents missed payments and compliance issues."
    }]
  }
];

// Module 9: Unit Economics (20 lessons)
const module9Lessons: LessonData[] = [
  {
    id: "m9-l1", moduleId: 9, lessonIndex: 0, title: "Understand contribution margin", duration: "5 min",
    questions: [{
      id: "m9-l1-q1", type: "calculation",
      context: "Selling price: ₹300. Food cost: ₹90. Packaging: ₹20. Commission: ₹66 (22%).",
      prompt: "Contribution margin per order?",
      correctAnswer: ["₹124 (what's left to cover fixed costs)"],
      choices: ["₹210", "₹124 (what's left to cover fixed costs)", "₹90", "₹300"],
      explanation: "₹300 - ₹90 - ₹20 - ₹66 = ₹124. This covers rent, salaries, and profit."
    }]
  },
  {
    id: "m9-l2", moduleId: 9, lessonIndex: 1, title: "Calculate break-even point", duration: "5 min",
    questions: [{
      id: "m9-l2-q1", type: "calculation",
      context: "Monthly fixed costs: ₹1,50,000. Contribution margin: ₹100/order.",
      prompt: "Break-even orders per month?",
      correctAnswer: ["1,500 orders (50/day)"],
      choices: ["500 orders", "1,000 orders", "1,500 orders (50/day)", "2,000 orders"],
      explanation: "₹1,50,000 ÷ ₹100 = 1,500 orders. Target 50 orders daily just to break even."
    }]
  },
  {
    id: "m9-l3", moduleId: 9, lessonIndex: 2, title: "Analyze food cost ratio", duration: "5 min",
    questions: [{
      id: "m9-l3-q1", type: "scenario",
      context: "Food costs jumped from 30% to 38% this month.",
      prompt: "First thing to investigate?",
      correctAnswer: ["Check for portion creep, wastage, or supplier price increases"],
      choices: ["Nothing - normal variation", "Check for portion creep, wastage, or supplier price increases", "Raise prices immediately", "Fire the cook"],
      explanation: "8% increase is significant. Root cause analysis before action."
    }]
  },
  {
    id: "m9-l4", moduleId: 9, lessonIndex: 3, title: "Track packaging costs", duration: "4 min",
    questions: [{
      id: "m9-l4-q1", type: "calculation",
      context: "Monthly packaging spend: ₹45,000. Monthly orders: 1,800.",
      prompt: "Packaging cost per order?",
      correctAnswer: ["₹25"],
      choices: ["₹15", "₹25", "₹35", "₹45"],
      explanation: "₹45,000 ÷ 1,800 = ₹25. Target is 5-8% of order value."
    }]
  },
  {
    id: "m9-l5", moduleId: 9, lessonIndex: 4, title: "Measure platform dependency", duration: "5 min",
    questions: [{
      id: "m9-l5-q1", type: "calculation",
      context: "Platform orders: 70. Direct orders: 30. Platform commission: 22%.",
      prompt: "Monthly commission on ₹3L platform revenue?",
      correctAnswer: ["₹66,000"],
      choices: ["₹22,000", "₹44,000", "₹66,000", "₹88,000"],
      explanation: "₹3,00,000 × 22% = ₹66,000. This is why direct orders matter."
    }]
  },
  {
    id: "m9-l6", moduleId: 9, lessonIndex: 5, title: "Understand labor cost ratio", duration: "5 min",
    questions: [{
      id: "m9-l6-q1", type: "calculation",
      context: "Monthly salaries: ₹80,000. Monthly revenue: ₹4,00,000.",
      prompt: "Labor cost as percentage of revenue?",
      correctAnswer: ["20%"],
      choices: ["10%", "15%", "20%", "25%"],
      explanation: "₹80,000 ÷ ₹4,00,000 = 20%. Target for cloud kitchens is 15-25%."
    }]
  },
  {
    id: "m9-l7", moduleId: 9, lessonIndex: 6, title: "Calculate rent efficiency", duration: "5 min",
    questions: [{
      id: "m9-l7-q1", type: "calculation",
      context: "Rent: ₹35,000/month. Revenue: ₹5,00,000/month.",
      prompt: "Rent to revenue ratio?",
      correctAnswer: ["7%"],
      choices: ["5%", "7%", "10%", "15%"],
      explanation: "₹35,000 ÷ ₹5,00,000 = 7%. Healthy range is 5-12% for cloud kitchens."
    }]
  },
  {
    id: "m9-l8", moduleId: 9, lessonIndex: 7, title: "Measure average order value", duration: "4 min",
    questions: [{
      id: "m9-l8-q1", type: "scenario",
      context: "Current AOV: ₹280. Competitor AOV: ₹380.",
      prompt: "How to increase your AOV?",
      correctAnswer: ["Add combos, recommend add-ons, introduce premium items"],
      choices: ["Just raise all prices", "Add combos, recommend add-ons, introduce premium items", "Remove low-priced items", "Minimum order value"],
      explanation: "Value addition increases AOV without losing customers."
    }]
  },
  {
    id: "m9-l9", moduleId: 9, lessonIndex: 8, title: "Track customer acquisition cost", duration: "5 min",
    questions: [{
      id: "m9-l9-q1", type: "calculation",
      context: "Marketing spend: ₹20,000. New customers this month: 100.",
      prompt: "Customer acquisition cost (CAC)?",
      correctAnswer: ["₹200"],
      choices: ["₹20", "₹100", "₹200", "₹500"],
      explanation: "₹20,000 ÷ 100 = ₹200. Compare this to customer lifetime value."
    }]
  },
  {
    id: "m9-l10", moduleId: 9, lessonIndex: 9, title: "Calculate customer lifetime value", duration: "5 min",
    questions: [{
      id: "m9-l10-q1", type: "calculation",
      context: "Average customer orders 2x/month for 6 months. Profit per order: ₹80.",
      prompt: "Customer lifetime value (CLV)?",
      correctAnswer: ["₹960"],
      choices: ["₹160", "₹480", "₹960", "₹1,440"],
      explanation: "2 × 6 × ₹80 = ₹960. CLV should be > 3x CAC for healthy business."
    }]
  },
  {
    id: "m9-l11", moduleId: 9, lessonIndex: 10, title: "Analyze order frequency", duration: "4 min",
    questions: [{
      id: "m9-l11-q1", type: "multiple-choice",
      prompt: "Customer hasn't ordered in 45 days. What to do?",
      correctAnswer: ["Send re-engagement offer via WhatsApp/SMS"],
      choices: ["Wait for them to return", "Send re-engagement offer via WhatsApp/SMS", "Remove from database", "Call and ask why"],
      explanation: "Win-back campaigns are cheaper than acquiring new customers."
    }]
  },
  {
    id: "m9-l12", moduleId: 9, lessonIndex: 11, title: "Measure orders per cook hour", duration: "5 min",
    questions: [{
      id: "m9-l12-q1", type: "calculation",
      context: "Daily orders: 60. Cook works 10 hours.",
      prompt: "Orders per cook hour?",
      correctAnswer: ["6 orders/hour"],
      choices: ["3 orders/hour", "6 orders/hour", "10 orders/hour", "60 orders/hour"],
      explanation: "60 ÷ 10 = 6. Track this to measure efficiency improvements."
    }]
  },
  {
    id: "m9-l13", moduleId: 9, lessonIndex: 12, title: "Track monthly profit margin", duration: "5 min",
    questions: [{
      id: "m9-l13-q1", type: "calculation",
      context: "Revenue: ₹5L. All costs (food, packaging, commission, salaries, rent, utilities): ₹4.2L.",
      prompt: "Net profit margin?",
      correctAnswer: ["16%"],
      choices: ["8%", "12%", "16%", "20%"],
      explanation: "₹80,000 ÷ ₹5,00,000 = 16%. Good margin for cloud kitchen."
    }]
  },
  {
    id: "m9-l14", moduleId: 9, lessonIndex: 13, title: "Analyze peak vs off-peak", duration: "5 min",
    questions: [{
      id: "m9-l14-q1", type: "scenario",
      context: "Lunch: 40 orders. Dinner: 30 orders. Afternoon: 5 orders. Staff same throughout.",
      prompt: "Efficiency opportunity?",
      correctAnswer: ["Reduce staff during afternoon, consider shorter hours"],
      choices: ["Hire more for lunch", "Reduce staff during afternoon, consider shorter hours", "Equal staffing is fair", "Close for afternoon"],
      explanation: "Match labor to demand. 3 PM staff cost = fixed cost with no revenue."
    }]
  },
  {
    id: "m9-l15", moduleId: 9, lessonIndex: 14, title: "Calculate return on investment", duration: "5 min",
    questions: [{
      id: "m9-l15-q1", type: "calculation",
      context: "Initial investment: ₹12L. Monthly profit: ₹80,000.",
      prompt: "Payback period?",
      correctAnswer: ["15 months"],
      choices: ["6 months", "10 months", "15 months", "24 months"],
      explanation: "₹12,00,000 ÷ ₹80,000 = 15 months. Good target is 18-24 months."
    }]
  },
  {
    id: "m9-l16", moduleId: 9, lessonIndex: 15, title: "Model growth scenarios", duration: "5 min",
    questions: [{
      id: "m9-l16-q1", type: "scenario",
      context: "Current: 50 orders/day. Goal: 80 orders/day.",
      prompt: "What capacity constraints to check?",
      correctAnswer: ["Kitchen space, equipment, staff, packaging storage"],
      choices: ["Just need more marketing", "Kitchen space, equipment, staff, packaging storage", "Only staffing matters", "No constraints - just grow"],
      explanation: "Growth requires capacity planning. Identify bottlenecks before scaling."
    }]
  },
  {
    id: "m9-l17", moduleId: 9, lessonIndex: 16, title: "Compare dish-level profitability", duration: "5 min",
    questions: [{
      id: "m9-l17-q1", type: "calculation",
      context: "Biryani: ₹100 profit, 40 orders. Kebab: ₹120 profit, 10 orders.",
      prompt: "Which contributes more profit daily?",
      correctAnswer: ["Biryani (₹4,000 vs ₹1,200)"],
      choices: ["Kebab - higher margin", "Biryani (₹4,000 vs ₹1,200)", "Equal", "Need more data"],
      explanation: "Volume × margin = contribution. Don't focus only on margin."
    }]
  },
  {
    id: "m9-l18", moduleId: 9, lessonIndex: 17, title: "Set pricing for profitability", duration: "5 min",
    questions: [{
      id: "m9-l18-q1", type: "scenario",
      context: "Your best-seller is barely profitable due to low price.",
      prompt: "How to fix without losing customers?",
      correctAnswer: ["Gradually increase price 5% every 2 months, add value"],
      choices: ["20% price hike immediately", "Gradually increase price 5% every 2 months, add value", "Remove the item", "Accept low margin on this item"],
      explanation: "Gradual increases are less noticed. Add perceived value to justify."
    }]
  },
  {
    id: "m9-l19", moduleId: 9, lessonIndex: 18, title: "Build financial dashboard", duration: "5 min",
    questions: [{
      id: "m9-l19-q1", type: "multiple-choice",
      prompt: "Minimum metrics for weekly dashboard?",
      correctAnswer: ["Revenue, orders, food cost %, profit, ratings"],
      choices: ["Just revenue", "Revenue and orders", "Revenue, orders, food cost %, profit, ratings", "Everything possible"],
      explanation: "These 5 metrics give complete picture of business health."
    }]
  },
  {
    id: "m9-l20", moduleId: 9, lessonIndex: 19, title: "Make data-driven decisions", duration: "5 min",
    questions: [{
      id: "m9-l20-q1", type: "scenario",
      context: "Gut says add Chinese to menu. Data shows current menu is struggling.",
      prompt: "What should drive the decision?",
      correctAnswer: ["Fix current menu performance first, then evaluate expansion"],
      choices: ["Trust your gut", "Fix current menu performance first, then evaluate expansion", "Add Chinese to boost revenue", "Ask customers what they want"],
      explanation: "Expansion with weak foundation fails. Strengthen core before diversifying."
    }]
  }
];

// Module 10: Go-Live Checklist (20 lessons)
const module10Lessons: LessonData[] = [
  {
    id: "m10-l1", moduleId: 10, lessonIndex: 0, title: "Verify all licenses are ready", duration: "4 min",
    questions: [{
      id: "m10-l1-q1", type: "multiple-choice",
      prompt: "Which licenses must be in hand before going live?",
      correctAnswer: ["FSSAI (or ARN), GST, Trade License"],
      choices: ["Just FSSAI is enough", "FSSAI (or ARN), GST, Trade License", "Can start and get later", "Only GST matters"],
      explanation: "All three are mandatory. FSSAI ARN is acceptable while license processes."
    }]
  },
  {
    id: "m10-l2", moduleId: 10, lessonIndex: 1, title: "Complete platform onboarding", duration: "4 min",
    questions: [{
      id: "m10-l2-q1", type: "true-false",
      prompt: "You should go live on all platforms simultaneously.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Start with one platform, stabilize operations, then add more."
    }]
  },
  {
    id: "m10-l3", moduleId: 10, lessonIndex: 2, title: "Finalize menu and pricing", duration: "4 min",
    questions: [{
      id: "m10-l3-q1", type: "scenario",
      context: "Menu has 25 items. Team tested 15 in trial runs.",
      prompt: "Launch with how many items?",
      correctAnswer: ["15 tested items only - add others after stabilizing"],
      choices: ["All 25 - more choice", "15 tested items only - add others after stabilizing", "Just 5 best sellers", "10 items to start"],
      explanation: "Launch with what you've tested. Untested items risk quality issues."
    }]
  },
  {
    id: "m10-l4", moduleId: 10, lessonIndex: 3, title: "Stock initial inventory", duration: "4 min",
    questions: [{
      id: "m10-l4-q1", type: "calculation",
      context: "Expected: 30 orders/day. Each needs 300g chicken. Buffer: 30%.",
      prompt: "Weekly chicken order?",
      correctAnswer: ["81.9kg (rounded to 85kg)"],
      choices: ["63kg", "81.9kg (rounded to 85kg)", "100kg", "125kg"],
      explanation: "30 × 0.3kg × 7 days × 1.3 buffer = 81.9kg. Round up for safety."
    }]
  },
  {
    id: "m10-l5", moduleId: 10, lessonIndex: 4, title: "Test all equipment", duration: "4 min",
    questions: [{
      id: "m10-l5-q1", type: "multiple-choice",
      prompt: "Best way to test kitchen setup?",
      correctAnswer: ["Cook full menu on simulated busy day, time everything"],
      choices: ["Check if equipment turns on", "Cook full menu on simulated busy day, time everything", "Vendor demo is enough", "Test during first real orders"],
      explanation: "Simulated rush reveals workflow issues. Fix before real orders."
    }]
  },
  {
    id: "m10-l6", moduleId: 10, lessonIndex: 5, title: "Train all staff", duration: "4 min",
    questions: [{
      id: "m10-l6-q1", type: "scenario",
      context: "Cook knows recipes. Helper knows nothing about food business.",
      prompt: "What must helper be trained on?",
      correctAnswer: ["Hygiene, order reading, packing standards, quality checks"],
      choices: ["Just packing", "Hygiene, order reading, packing standards, quality checks", "Will learn on job", "Only what cook teaches"],
      explanation: "Every team member needs role-specific training before launch."
    }]
  },
  {
    id: "m10-l7", moduleId: 10, lessonIndex: 6, title: "Set up ordering system", duration: "4 min",
    questions: [{
      id: "m10-l7-q1", type: "true-false",
      prompt: "You need a tablet for each platform (Swiggy/Zomato) separately.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Single device with both apps works. Dedicated devices are better but not mandatory."
    }]
  },
  {
    id: "m10-l8", moduleId: 10, lessonIndex: 7, title: "Verify payment setup", duration: "4 min",
    questions: [{
      id: "m10-l8-q1", type: "multiple-choice",
      prompt: "What should be verified for platform payments?",
      correctAnswer: ["Bank account linked, GST correct, test payout received"],
      choices: ["Just bank account", "Bank account linked, GST correct, test payout received", "GST registration only", "Nothing needed upfront"],
      explanation: "Verify end-to-end before going live. Payment issues are stressful when busy."
    }]
  },
  {
    id: "m10-l9", moduleId: 10, lessonIndex: 8, title: "Create contingency plans", duration: "5 min",
    questions: [{
      id: "m10-l9-q1", type: "scenario",
      context: "Gas cylinder runs out during dinner rush.",
      prompt: "What should already be in place?",
      correctAnswer: ["Spare cylinder on standby, supplier on speed dial"],
      choices: ["Nothing - deal when it happens", "Spare cylinder on standby, supplier on speed dial", "Electric backup stove", "Close for the day"],
      explanation: "Anticipate common failures. Backup for critical resources is essential."
    }]
  },
  {
    id: "m10-l10", moduleId: 10, lessonIndex: 9, title: "Plan soft launch", duration: "4 min",
    questions: [{
      id: "m10-l10-q1", type: "multiple-choice",
      prompt: "What's a soft launch?",
      correctAnswer: ["Limited hours/radius to test operations before full launch"],
      choices: ["Launch without marketing", "Limited hours/radius to test operations before full launch", "Friends and family only", "Launch on one platform"],
      explanation: "Soft launch controls volume while you fine-tune. 3-5 days recommended."
    }]
  },
  {
    id: "m10-l11", moduleId: 10, lessonIndex: 10, title: "Prepare launch marketing", duration: "4 min",
    questions: [{
      id: "m10-l11-q1", type: "true-false",
      prompt: "Heavy marketing on day 1 is the best strategy.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Overwhelming volume on day 1 leads to failures. Ramp up gradually."
    }]
  },
  {
    id: "m10-l12", moduleId: 10, lessonIndex: 11, title: "Set up communication channels", duration: "4 min",
    questions: [{
      id: "m10-l12-q1", type: "multiple-choice",
      prompt: "Customer has complaint about live order. How should they reach you?",
      correctAnswer: ["Phone number on packaging + quick response via platform chat"],
      choices: ["Platform chat only", "Email", "Phone number on packaging + quick response via platform chat", "No direct contact needed"],
      explanation: "Direct contact for urgent issues. Platform chat for regular complaints."
    }]
  },
  {
    id: "m10-l13", moduleId: 10, lessonIndex: 12, title: "Document all SOPs", duration: "5 min",
    questions: [{
      id: "m10-l13-q1", type: "scenario",
      context: "You're doing everything yourself. No time for documentation.",
      prompt: "Why document SOPs anyway?",
      correctAnswer: ["Enables delegation, training, and consistency when you scale"],
      choices: ["Not needed for small operation", "Enables delegation, training, and consistency when you scale", "Only for large chains", "FSSAI requires it"],
      explanation: "Documentation is for future you. Essential for growth and delegation."
    }]
  },
  {
    id: "m10-l14", moduleId: 10, lessonIndex: 13, title: "Prepare for day 1 issues", duration: "4 min",
    questions: [{
      id: "m10-l14-q1", type: "multiple-choice",
      prompt: "What should you expect on day 1?",
      correctAnswer: ["Problems you didn't anticipate - stay calm, solve, and learn"],
      choices: ["Perfect execution", "No orders", "Problems you didn't anticipate - stay calm, solve, and learn", "Staff will handle everything"],
      explanation: "First day always has surprises. Calm problem-solving is the skill."
    }]
  },
  {
    id: "m10-l15", moduleId: 10, lessonIndex: 14, title: "Set realistic day 1 capacity", duration: "4 min",
    questions: [{
      id: "m10-l15-q1", type: "calculation",
      context: "Tested capacity: 40 orders in 4 hours. Operating hours: 8.",
      prompt: "Day 1 target orders?",
      correctAnswer: ["40-50 (not 80 - allow learning curve)"],
      choices: ["20 orders", "40-50 (not 80 - allow learning curve)", "80 orders", "As many as possible"],
      explanation: "Start conservative. First day efficiency is lower than tested."
    }]
  },
  {
    id: "m10-l16", moduleId: 10, lessonIndex: 15, title: "Assign roles for launch", duration: "4 min",
    questions: [{
      id: "m10-l16-q1", type: "scenario",
      context: "Team: You, 1 cook, 1 helper. Orders are coming.",
      prompt: "Ideal role assignment?",
      correctAnswer: ["Cook: cooking. Helper: prep + packing. You: orders + QC + issues"],
      choices: ["Everyone does everything", "Cook: cooking. Helper: prep + packing. You: orders + QC + issues", "You cook, others pack", "Hire more people"],
      explanation: "Clear roles prevent confusion. Owner handles customer-facing on day 1."
    }]
  },
  {
    id: "m10-l17", moduleId: 10, lessonIndex: 16, title: "Monitor first orders closely", duration: "4 min",
    questions: [{
      id: "m10-l17-q1", type: "true-false",
      prompt: "First 10 orders should be personally checked by owner before dispatch.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Personal oversight ensures quality. First reviews set your reputation."
    }]
  },
  {
    id: "m10-l18", moduleId: 10, lessonIndex: 17, title: "Collect early feedback", duration: "4 min",
    questions: [{
      id: "m10-l18-q1", type: "scenario",
      context: "First customer gives 3-star rating: 'food was good but cold'.",
      prompt: "What action to take?",
      correctAnswer: ["Thank them, investigate packaging/timing, respond publicly with fix"],
      choices: ["Ignore - just one review", "Thank them, investigate packaging/timing, respond publicly with fix", "Argue it was hot when packed", "Offer refund to change rating"],
      explanation: "Early feedback is gold. Show responsiveness to build reputation."
    }]
  },
  {
    id: "m10-l19", moduleId: 10, lessonIndex: 18, title: "Review first week performance", duration: "5 min",
    questions: [{
      id: "m10-l19-q1", type: "multiple-choice",
      prompt: "What to analyze after first week?",
      correctAnswer: ["All of the above"],
      choices: ["Order volume and patterns", "Common complaints", "What worked well", "All of the above"],
      explanation: "Comprehensive week 1 review guides improvements. Document everything."
    }]
  },
  {
    id: "m10-l20", moduleId: 10, lessonIndex: 19, title: "Celebrate and plan ahead", duration: "4 min",
    questions: [{
      id: "m10-l20-q1", type: "scenario",
      context: "Week 1 done. 150 orders, 4.1 rating, ₹30,000 revenue.",
      prompt: "What's next?",
      correctAnswer: ["Celebrate the milestone, then set week 2-4 improvement goals"],
      choices: ["Immediately expand menu", "Celebrate the milestone, then set week 2-4 improvement goals", "Hire more staff", "Add another location"],
      explanation: "Acknowledge progress. Then systematic improvement over expansion."
    }]
  }
];

// Export all lessons
export const allLessons: LessonData[] = [
  ...module1Lessons,
  ...module2Lessons,
  ...module3Lessons,
  ...module4Lessons,
  ...module5Lessons,
  ...module6Lessons,
  ...module7Lessons,
  ...module8Lessons,
  ...module9Lessons,
  ...module10Lessons,
];

// Get lessons for a specific module
export const getLessonsForModule = (moduleId: number): LessonData[] => {
  return allLessons.filter(lesson => lesson.moduleId === moduleId);
};

// Get a specific lesson
export const getLesson = (lessonId: string): LessonData | undefined => {
  return allLessons.find(lesson => lesson.id === lessonId);
};

// Get module info with lesson count
export const getModuleInfo = (moduleId: number) => {
  const lessons = getLessonsForModule(moduleId);
  return {
    id: moduleId,
    lessonCount: lessons.length,
    totalDuration: lessons.reduce((acc, l) => acc + parseInt(l.duration), 0)
  };
};
