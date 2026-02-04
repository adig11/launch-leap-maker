// Stock Trader Path - All 8 Modules with Lessons
import { LessonData } from '../lessonData';

// Module 1: Market Fundamentals (10 lessons)
export const traderModule1Lessons: LessonData[] = [
  {
    id: "st-m1-l1", moduleId: 1, lessonIndex: 0, title: "Understand how markets work", duration: "6 min",
    questions: [{
      id: "st-m1-l1-q1", type: "multiple-choice",
      prompt: "What primarily drives stock prices?",
      correctAnswer: ["Supply and demand from buyers and sellers"],
      choices: ["Company profits only", "Supply and demand from buyers and sellers", "Government regulations", "News headlines"],
      explanation: "Price = equilibrium of buyers and sellers. Fundamentals influence sentiment, which affects demand."
    }]
  },
  {
    id: "st-m1-l2", moduleId: 1, lessonIndex: 1, title: "Types of market participants", duration: "5 min",
    questions: [{
      id: "st-m1-l2-q1", type: "scenario",
      context: "You notice a stock moving 5% in minutes with no news.",
      prompt: "Most likely cause?",
      correctAnswer: ["Institutional buying/selling or algorithmic trading"],
      choices: ["Retail traders panicking", "Institutional buying/selling or algorithmic trading", "Technical indicator trigger", "Random market noise"],
      explanation: "Institutions move markets. They trade in large blocks that impact price."
    }]
  },
  {
    id: "st-m1-l3", moduleId: 1, lessonIndex: 2, title: "NSE vs BSE basics", duration: "5 min",
    questions: [{
      id: "st-m1-l3-q1", type: "multiple-choice",
      prompt: "Which exchange has higher trading volume in India?",
      correctAnswer: ["NSE (National Stock Exchange)"],
      choices: ["BSE (Bombay Stock Exchange)", "NSE (National Stock Exchange)", "Both are equal", "Depends on the stock"],
      explanation: "NSE handles 90%+ of equity trading volume. More liquid for traders."
    }]
  },
  {
    id: "st-m1-l4", moduleId: 1, lessonIndex: 3, title: "Market timing and sessions", duration: "4 min",
    questions: [{
      id: "st-m1-l4-q1", type: "calculation",
      context: "Market opens 9:15 AM. First 30 minutes are volatile. Last 30 minutes see institutional activity.",
      prompt: "Best time for new traders to observe (not trade)?",
      correctAnswer: ["10:00 AM - 2:30 PM (mid-session stability)"],
      choices: ["9:15 AM - opening rush", "10:00 AM - 2:30 PM (mid-session stability)", "3:00 - 3:30 PM closing", "All hours equally"],
      explanation: "Mid-session = less volatility. Observe before participating in opening/closing."
    }]
  },
  {
    id: "st-m1-l5", moduleId: 1, lessonIndex: 4, title: "Order types explained", duration: "6 min",
    questions: [{
      id: "st-m1-l5-q1", type: "scenario",
      context: "Stock at ₹100. You want to buy only if it drops to ₹95.",
      prompt: "Which order type?",
      correctAnswer: ["Limit order at ₹95"],
      choices: ["Market order", "Limit order at ₹95", "Stop loss order", "GTT order"],
      explanation: "Limit order = execute only at specified price or better."
    }]
  },
  {
    id: "st-m1-l6", moduleId: 1, lessonIndex: 5, title: "Understanding indices", duration: "5 min",
    questions: [{
      id: "st-m1-l6-q1", type: "multiple-choice",
      prompt: "What does Nifty 50 represent?",
      correctAnswer: ["50 large-cap stocks weighted by market cap"],
      choices: ["Top 50 stocks by price", "50 large-cap stocks weighted by market cap", "50 random stocks", "50 stocks from each sector"],
      explanation: "Nifty = market benchmark. Tracks overall market direction."
    }]
  },
  {
    id: "st-m1-l7", moduleId: 1, lessonIndex: 6, title: "Equity vs derivatives", duration: "6 min",
    questions: [{
      id: "st-m1-l7-q1", type: "true-false",
      prompt: "Beginners should start with futures and options for higher returns.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "F&O are leveraged = higher risk. Start with cash equity, learn first."
    }]
  },
  {
    id: "st-m1-l8", moduleId: 1, lessonIndex: 7, title: "Settlement cycles", duration: "4 min",
    questions: [{
      id: "st-m1-l8-q1", type: "calculation",
      context: "You buy shares on Monday. T+1 settlement.",
      prompt: "When do shares appear in your demat?",
      correctAnswer: ["Tuesday (T+1)"],
      choices: ["Monday itself", "Tuesday (T+1)", "Wednesday", "Friday"],
      explanation: "T+1 = trade day + 1. India moved to T+1 settlement in 2023."
    }]
  },
  {
    id: "st-m1-l9", moduleId: 1, lessonIndex: 8, title: "Market cap categories", duration: "5 min",
    questions: [{
      id: "st-m1-l9-q1", type: "multiple-choice",
      prompt: "Which category is generally most volatile?",
      correctAnswer: ["Small-cap (below ₹5000 Cr market cap)"],
      choices: ["Large-cap", "Mid-cap", "Small-cap (below ₹5000 Cr market cap)", "All equally volatile"],
      explanation: "Smaller = less liquidity = bigger price swings. Higher risk and reward."
    }]
  },
  {
    id: "st-m1-l10", moduleId: 1, lessonIndex: 9, title: "Sectors and rotation", duration: "5 min",
    questions: [{
      id: "st-m1-l10-q1", type: "scenario",
      context: "Interest rates are rising. Historically, which sector struggles?",
      prompt: "Which sector to avoid?",
      correctAnswer: ["Real estate and rate-sensitive stocks"],
      choices: ["IT sector", "FMCG", "Real estate and rate-sensitive stocks", "Pharma"],
      explanation: "Higher rates = higher borrowing costs. Real estate, auto, banks affected."
    }]
  }
];

// Module 2: Account Setup (8 lessons)
export const traderModule2Lessons: LessonData[] = [
  {
    id: "st-m2-l1", moduleId: 2, lessonIndex: 0, title: "Choose the right broker", duration: "6 min",
    questions: [{
      id: "st-m2-l1-q1", type: "multiple-choice",
      prompt: "Key factors when choosing a broker?",
      correctAnswer: ["Brokerage fees, platform reliability, customer support"],
      choices: ["Lowest brokerage only", "Brokerage fees, platform reliability, customer support", "Brand name only", "Free tips and advice"],
      explanation: "Cheap but unreliable = missed trades. Balance cost with quality."
    }]
  },
  {
    id: "st-m2-l2", moduleId: 2, lessonIndex: 1, title: "Open demat account", duration: "5 min",
    questions: [{
      id: "st-m2-l2-q1", type: "true-false",
      prompt: "You need both demat and trading account to trade stocks.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Demat holds shares, trading account executes orders. Both required."
    }]
  },
  {
    id: "st-m2-l3", moduleId: 2, lessonIndex: 2, title: "Understand brokerage structures", duration: "5 min",
    questions: [{
      id: "st-m2-l3-q1", type: "calculation",
      context: "Broker A: ₹20 flat per trade. Broker B: 0.03% of trade value. Trade size: ₹50,000.",
      prompt: "Which is cheaper for this trade?",
      correctAnswer: ["Broker A at ₹20 (B would be ₹15, so B is cheaper)"],
      choices: ["Broker A at ₹20", "Broker B at ₹15", "Both same", "Depends on buy/sell"],
      explanation: "₹50,000 × 0.03% = ₹15. Percentage better for small trades, flat for large."
    }]
  },
  {
    id: "st-m2-l4", moduleId: 2, lessonIndex: 3, title: "Set up trading platform", duration: "5 min",
    questions: [{
      id: "st-m2-l4-q1", type: "multiple-choice",
      prompt: "Essential platform features for beginners?",
      correctAnswer: ["Charts, watchlist, order book, and portfolio view"],
      choices: ["Just buy/sell buttons", "Charts, watchlist, order book, and portfolio view", "Algo trading capabilities", "News feed only"],
      explanation: "Basic tools needed for informed decisions. Advanced features come later."
    }]
  },
  {
    id: "st-m2-l5", moduleId: 2, lessonIndex: 4, title: "Fund your account", duration: "4 min",
    questions: [{
      id: "st-m2-l5-q1", type: "scenario",
      context: "You have ₹1L savings. Monthly income: ₹50K. Expenses: ₹35K.",
      prompt: "How much should you start trading with?",
      correctAnswer: ["₹10-20K (10-20% of savings, never money you can't afford to lose)"],
      choices: ["Full ₹1L to maximize returns", "₹10-20K (10-20% of savings, never money you can't afford to lose)", "₹50K - half of savings", "Wait until you have ₹5L"],
      explanation: "Risk only what you can afford to lose. Learning costs money."
    }]
  },
  {
    id: "st-m2-l6", moduleId: 2, lessonIndex: 5, title: "Mobile vs desktop trading", duration: "4 min",
    questions: [{
      id: "st-m2-l6-q1", type: "true-false",
      prompt: "Mobile trading is sufficient for most retail traders.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Mobile apps are powerful now. Desktop better for detailed analysis."
    }]
  },
  {
    id: "st-m2-l7", moduleId: 2, lessonIndex: 6, title: "Set up price alerts", duration: "4 min",
    questions: [{
      id: "st-m2-l7-q1", type: "multiple-choice",
      prompt: "When should you use price alerts?",
      correctAnswer: ["To notify you when a stock reaches your target entry/exit"],
      choices: ["Never - watch constantly", "To notify you when a stock reaches your target entry/exit", "Only for stop losses", "Only for large-cap stocks"],
      explanation: "Alerts free you from screen-watching. Set and wait for opportunity."
    }]
  },
  {
    id: "st-m2-l8", moduleId: 2, lessonIndex: 7, title: "Paper trading practice", duration: "5 min",
    questions: [{
      id: "st-m2-l8-q1", type: "scenario",
      context: "You're eager to start real trading immediately with ₹20K.",
      prompt: "Better approach?",
      correctAnswer: ["Paper trade for 2-4 weeks first, then start small"],
      choices: ["Jump in - learn by doing", "Paper trade for 2-4 weeks first, then start small", "Wait 6 months studying", "Only start with ₹1L minimum"],
      explanation: "Paper trading builds skills without financial risk. Transition gradually."
    }]
  }
];

// Module 3: Technical Analysis (10 lessons)
export const traderModule3Lessons: LessonData[] = [
  {
    id: "st-m3-l1", moduleId: 3, lessonIndex: 0, title: "Read candlestick charts", duration: "6 min",
    questions: [{
      id: "st-m3-l1-q1", type: "multiple-choice",
      prompt: "What does a long lower wick (shadow) indicate?",
      correctAnswer: ["Buyers pushed price up from lows - potential support"],
      choices: ["Strong selling pressure", "Buyers pushed price up from lows - potential support", "Price will continue falling", "No significant meaning"],
      explanation: "Lower wick = rejection of lower prices. Bullish signal if at support."
    }]
  },
  {
    id: "st-m3-l2", moduleId: 3, lessonIndex: 1, title: "Support and resistance", duration: "6 min",
    questions: [{
      id: "st-m3-l2-q1", type: "scenario",
      context: "Stock bounced from ₹100 three times in past month.",
      prompt: "What is ₹100 level?",
      correctAnswer: ["Support level - buyers defend this price"],
      choices: ["Resistance level", "Support level - buyers defend this price", "Just coincidence", "Breakout point"],
      explanation: "Multiple bounces = strong support. Watch for break below."
    }]
  },
  {
    id: "st-m3-l3", moduleId: 3, lessonIndex: 2, title: "Trend identification", duration: "5 min",
    questions: [{
      id: "st-m3-l3-q1", type: "true-false",
      prompt: "'The trend is your friend' - trading with trend has higher success rate.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Counter-trend trading is advanced. Beginners should follow trends."
    }]
  },
  {
    id: "st-m3-l4", moduleId: 3, lessonIndex: 3, title: "Moving averages basics", duration: "6 min",
    questions: [{
      id: "st-m3-l4-q1", type: "multiple-choice",
      prompt: "When 50-day MA crosses above 200-day MA, it's called:",
      correctAnswer: ["Golden cross - bullish signal"],
      choices: ["Death cross", "Golden cross - bullish signal", "Crossover trap", "Mean reversion"],
      explanation: "Golden cross = bullish momentum. Death cross = bearish (50 below 200)."
    }]
  },
  {
    id: "st-m3-l5", moduleId: 3, lessonIndex: 4, title: "Volume analysis", duration: "5 min",
    questions: [{
      id: "st-m3-l5-q1", type: "scenario",
      context: "Stock breaks resistance on 3x normal volume.",
      prompt: "What does high volume breakout indicate?",
      correctAnswer: ["Strong conviction - breakout more likely to sustain"],
      choices: ["Overbought, will reverse", "Strong conviction - breakout more likely to sustain", "Volume doesn't matter", "Manipulation"],
      explanation: "Volume confirms price action. High volume breakout = participation."
    }]
  },
  {
    id: "st-m3-l6", moduleId: 3, lessonIndex: 5, title: "RSI indicator", duration: "5 min",
    questions: [{
      id: "st-m3-l6-q1", type: "calculation",
      context: "RSI reading: 75. RSI above 70 = overbought, below 30 = oversold.",
      prompt: "What does RSI 75 suggest?",
      correctAnswer: ["Overbought - potential for pullback, not immediate sell signal"],
      choices: ["Strong buy signal", "Overbought - potential for pullback, not immediate sell signal", "Immediate sell", "RSI 75 is neutral"],
      explanation: "Overbought ≠ sell. Stocks can stay overbought in strong trends."
    }]
  },
  {
    id: "st-m3-l7", moduleId: 3, lessonIndex: 6, title: "Chart patterns - reversal", duration: "6 min",
    questions: [{
      id: "st-m3-l7-q1", type: "multiple-choice",
      prompt: "Which is a bullish reversal pattern?",
      correctAnswer: ["Double bottom"],
      choices: ["Head and shoulders", "Double bottom", "Rising wedge", "Descending triangle"],
      explanation: "Double bottom = W pattern at lows. Signals potential trend reversal up."
    }]
  },
  {
    id: "st-m3-l8", moduleId: 3, lessonIndex: 7, title: "Chart patterns - continuation", duration: "5 min",
    questions: [{
      id: "st-m3-l8-q1", type: "scenario",
      context: "Stock in uptrend. Forms a flag pattern (tight consolidation).",
      prompt: "Expected next move?",
      correctAnswer: ["Continuation of uptrend after flag breakout"],
      choices: ["Trend reversal down", "Continuation of uptrend after flag breakout", "Sideways indefinitely", "Unpredictable"],
      explanation: "Flags are continuation patterns. Wait for breakout confirmation."
    }]
  },
  {
    id: "st-m3-l9", moduleId: 3, lessonIndex: 8, title: "Multiple timeframe analysis", duration: "5 min",
    questions: [{
      id: "st-m3-l9-q1", type: "true-false",
      prompt: "You should check higher timeframe trend before taking trades on lower timeframe.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Higher timeframe = context. Trade with the bigger trend."
    }]
  },
  {
    id: "st-m3-l10", moduleId: 3, lessonIndex: 9, title: "Technical analysis limitations", duration: "5 min",
    questions: [{
      id: "st-m3-l10-q1", type: "multiple-choice",
      prompt: "Why do technical patterns sometimes fail?",
      correctAnswer: ["All of the above"],
      choices: ["Markets aren't perfectly predictable", "Fundamental news can override technicals", "Too many traders watching same patterns", "All of the above"],
      explanation: "TA is probability, not certainty. Use with risk management."
    }]
  }
];

// Module 4: Fundamental Analysis (10 lessons)
export const traderModule4Lessons: LessonData[] = [
  {
    id: "st-m4-l1", moduleId: 4, lessonIndex: 0, title: "Read financial statements", duration: "6 min",
    questions: [{
      id: "st-m4-l1-q1", type: "multiple-choice",
      prompt: "Which statement shows company profitability?",
      correctAnswer: ["Income statement (P&L)"],
      choices: ["Balance sheet", "Income statement (P&L)", "Cash flow statement", "Notes to accounts"],
      explanation: "P&L shows revenue, expenses, and profit. Balance sheet = snapshot of assets/liabilities."
    }]
  },
  {
    id: "st-m4-l2", moduleId: 4, lessonIndex: 1, title: "Price-to-Earnings ratio", duration: "5 min",
    questions: [{
      id: "st-m4-l2-q1", type: "calculation",
      context: "Stock price: ₹500. EPS: ₹25.",
      prompt: "What is the P/E ratio?",
      correctAnswer: ["20 (500 ÷ 25)"],
      choices: ["10", "15", "20 (500 ÷ 25)", "25"],
      explanation: "P/E = Price ÷ Earnings. 20x means paying ₹20 for every ₹1 of earnings."
    }]
  },
  {
    id: "st-m4-l3", moduleId: 4, lessonIndex: 2, title: "Compare P/E across sectors", duration: "5 min",
    questions: [{
      id: "st-m4-l3-q1", type: "scenario",
      context: "IT company P/E: 30. PSU bank P/E: 8.",
      prompt: "Is the IT company overvalued?",
      correctAnswer: ["Not necessarily - different sectors have different typical P/E ranges"],
      choices: ["Yes - 30 is too high", "Not necessarily - different sectors have different typical P/E ranges", "Banks are undervalued", "Both are mispriced"],
      explanation: "Compare P/E within sectors. Growth sectors command higher P/E."
    }]
  },
  {
    id: "st-m4-l4", moduleId: 4, lessonIndex: 3, title: "Return on equity (ROE)", duration: "5 min",
    questions: [{
      id: "st-m4-l4-q1", type: "true-false",
      prompt: "ROE above 15% is generally considered good for Indian companies.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "ROE measures efficiency of equity. 15%+ indicates good capital allocation."
    }]
  },
  {
    id: "st-m4-l5", moduleId: 4, lessonIndex: 4, title: "Debt-to-equity analysis", duration: "5 min",
    questions: [{
      id: "st-m4-l5-q1", type: "multiple-choice",
      prompt: "High debt-to-equity ratio indicates:",
      correctAnswer: ["Higher financial risk but potentially higher returns"],
      choices: ["Safer investment", "Higher financial risk but potentially higher returns", "Better management", "No impact on risk"],
      explanation: "More debt = more risk. Good in growth, dangerous in downturn."
    }]
  },
  {
    id: "st-m4-l6", moduleId: 4, lessonIndex: 5, title: "Cash flow analysis", duration: "6 min",
    questions: [{
      id: "st-m4-l6-q1", type: "scenario",
      context: "Company shows profit but negative operating cash flow for 3 years.",
      prompt: "What's the concern?",
      correctAnswer: ["Profits may not be real cash - accounting tricks possible"],
      choices: ["No concern - profit matters", "Profits may not be real cash - accounting tricks possible", "Temporary issue", "Sign of high growth"],
      explanation: "Cash is real, profit is opinion. Consistent negative OCF is red flag."
    }]
  },
  {
    id: "st-m4-l7", moduleId: 4, lessonIndex: 6, title: "Dividend analysis", duration: "5 min",
    questions: [{
      id: "st-m4-l7-q1", type: "calculation",
      context: "Stock price: ₹200. Annual dividend: ₹8.",
      prompt: "Dividend yield?",
      correctAnswer: ["4% (8 ÷ 200 × 100)"],
      choices: ["2%", "4% (8 ÷ 200 × 100)", "8%", "25%"],
      explanation: "Yield = Dividend ÷ Price. Compare to FD rates for income investors."
    }]
  },
  {
    id: "st-m4-l8", moduleId: 4, lessonIndex: 7, title: "Promoter holding", duration: "5 min",
    questions: [{
      id: "st-m4-l8-q1", type: "true-false",
      prompt: "Decreasing promoter holding is always a bearish signal.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Context matters. Could be stake sale to institution, diversification, or genuine concern."
    }]
  },
  {
    id: "st-m4-l9", moduleId: 4, lessonIndex: 8, title: "Industry and competitive analysis", duration: "5 min",
    questions: [{
      id: "st-m4-l9-q1", type: "multiple-choice",
      prompt: "What gives a company competitive advantage?",
      correctAnswer: ["All of the above can be moats"],
      choices: ["Brand recognition", "Cost leadership", "Network effects", "All of the above can be moats"],
      explanation: "Moats protect profits. Look for sustainable competitive advantages."
    }]
  },
  {
    id: "st-m4-l10", moduleId: 4, lessonIndex: 9, title: "Valuation methods", duration: "6 min",
    questions: [{
      id: "st-m4-l10-q1", type: "scenario",
      context: "You want to value a stable dividend-paying company.",
      prompt: "Most appropriate method?",
      correctAnswer: ["Dividend discount model or P/E relative valuation"],
      choices: ["Discounted cash flow only", "Dividend discount model or P/E relative valuation", "Asset-based valuation", "Revenue multiples"],
      explanation: "Method depends on company type. Stable dividends = DDM works well."
    }]
  }
];

// Module 5: Trading Strategies (10 lessons)
export const traderModule5Lessons: LessonData[] = [
  {
    id: "st-m5-l1", moduleId: 5, lessonIndex: 0, title: "Day trading overview", duration: "5 min",
    questions: [{
      id: "st-m5-l1-q1", type: "true-false",
      prompt: "Day trading is suitable for beginners with full-time jobs.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Day trading needs full attention during market hours. Not for beginners."
    }]
  },
  {
    id: "st-m5-l2", moduleId: 5, lessonIndex: 1, title: "Swing trading basics", duration: "6 min",
    questions: [{
      id: "st-m5-l2-q1", type: "multiple-choice",
      prompt: "Typical swing trade holding period?",
      correctAnswer: ["Few days to few weeks"],
      choices: ["Minutes to hours", "Few days to few weeks", "Months to years", "Exactly one week"],
      explanation: "Swing trading captures medium-term moves. Good for part-time traders."
    }]
  },
  {
    id: "st-m5-l3", moduleId: 5, lessonIndex: 2, title: "Position trading", duration: "5 min",
    questions: [{
      id: "st-m5-l3-q1", type: "scenario",
      context: "You identify a strong company at good valuation. Trend is up.",
      prompt: "Position trading approach?",
      correctAnswer: ["Buy and hold for months, riding the trend with trailing stop"],
      choices: ["Quick profit in days", "Buy and hold for months, riding the trend with trailing stop", "Wait for perfect entry", "Buy on margin for leverage"],
      explanation: "Position trading = patience. Let winners run with proper risk management."
    }]
  },
  {
    id: "st-m5-l4", moduleId: 5, lessonIndex: 3, title: "Breakout trading", duration: "6 min",
    questions: [{
      id: "st-m5-l4-q1", type: "multiple-choice",
      prompt: "Key confirmation for valid breakout?",
      correctAnswer: ["High volume and close above resistance"],
      choices: ["Price touches resistance", "High volume and close above resistance", "News catalyst", "Gap up opening"],
      explanation: "Volume validates breakout. Close above level confirms it's not false break."
    }]
  },
  {
    id: "st-m5-l5", moduleId: 5, lessonIndex: 4, title: "Pullback trading", duration: "5 min",
    questions: [{
      id: "st-m5-l5-q1", type: "scenario",
      context: "Stock in uptrend. Pulls back to 50-day MA with low volume.",
      prompt: "Trading opportunity?",
      correctAnswer: ["Potential buy near support if trend resumes"],
      choices: ["Trend is ending, avoid", "Potential buy near support if trend resumes", "Sell immediately", "Wait for new highs"],
      explanation: "Pullbacks in uptrend = buying opportunity. Low volume pullback is healthy."
    }]
  },
  {
    id: "st-m5-l6", moduleId: 5, lessonIndex: 5, title: "Mean reversion strategy", duration: "5 min",
    questions: [{
      id: "st-m5-l6-q1", type: "true-false",
      prompt: "Mean reversion works better in ranging markets than trending markets.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Range-bound = oscillate around mean. Trends can extend far from mean."
    }]
  },
  {
    id: "st-m5-l7", moduleId: 5, lessonIndex: 6, title: "Momentum trading", duration: "6 min",
    questions: [{
      id: "st-m5-l7-q1", type: "multiple-choice",
      prompt: "Core principle of momentum trading?",
      correctAnswer: ["Strong stocks tend to stay strong in short term"],
      choices: ["Buy low, sell high always", "Strong stocks tend to stay strong in short term", "All stocks revert to average", "Only trade on news"],
      explanation: "Momentum = ride existing strength. Trend followers buy high, sell higher."
    }]
  },
  {
    id: "st-m5-l8", moduleId: 5, lessonIndex: 7, title: "Event-based trading", duration: "5 min",
    questions: [{
      id: "st-m5-l8-q1", type: "scenario",
      context: "Company announces bonus issue. Stock jumps 5%.",
      prompt: "Should you buy after the announcement?",
      correctAnswer: ["Usually too late - event already priced in"],
      choices: ["Yes - more upside ahead", "Usually too late - event already priced in", "Short the stock", "Wait for more news"],
      explanation: "Buy the rumor, sell the news. Post-announcement often means correction."
    }]
  },
  {
    id: "st-m5-l9", moduleId: 5, lessonIndex: 8, title: "Build your trading system", duration: "6 min",
    questions: [{
      id: "st-m5-l9-q1", type: "multiple-choice",
      prompt: "Essential components of a trading system?",
      correctAnswer: ["All of the above"],
      choices: ["Entry criteria", "Exit criteria (profit and stop loss)", "Position sizing rules", "All of the above"],
      explanation: "Complete system removes emotion. Rules for every decision."
    }]
  },
  {
    id: "st-m5-l10", moduleId: 5, lessonIndex: 9, title: "Backtest your strategy", duration: "5 min",
    questions: [{
      id: "st-m5-l10-q1", type: "true-false",
      prompt: "Backtesting past data guarantees future performance.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Past ≠ future. But backtesting filters obviously bad ideas."
    }]
  }
];

// Module 6: Risk Management (10 lessons)
export const traderModule6Lessons: LessonData[] = [
  {
    id: "st-m6-l1", moduleId: 6, lessonIndex: 0, title: "Position sizing fundamentals", duration: "6 min",
    questions: [{
      id: "st-m6-l1-q1", type: "calculation",
      context: "Capital: ₹1L. Max risk per trade: 2%. Stop loss: 5% from entry.",
      prompt: "Maximum position size?",
      correctAnswer: ["₹40,000 (2% of ₹1L = ₹2000 risk. ₹2000 ÷ 5% = ₹40K)"],
      choices: ["₹20,000", "₹40,000 (2% of ₹1L = ₹2000 risk. ₹2000 ÷ 5% = ₹40K)", "₹50,000", "₹1,00,000"],
      explanation: "Position size = Risk amount ÷ Stop loss %. Limits losses to 2% of capital."
    }]
  },
  {
    id: "st-m6-l2", moduleId: 6, lessonIndex: 1, title: "Stop loss placement", duration: "5 min",
    questions: [{
      id: "st-m6-l2-q1", type: "scenario",
      context: "Bought at ₹100. Support at ₹95. Your stop loss is at ₹99.",
      prompt: "What's wrong with this stop loss?",
      correctAnswer: ["Too tight - normal volatility will trigger it"],
      choices: ["Nothing wrong", "Too tight - normal volatility will trigger it", "Too wide", "Should be at ₹100"],
      explanation: "Stop below support, not in normal noise zone. Give trade room to work."
    }]
  },
  {
    id: "st-m6-l3", moduleId: 6, lessonIndex: 2, title: "Risk-reward ratio", duration: "5 min",
    questions: [{
      id: "st-m6-l3-q1", type: "calculation",
      context: "Entry: ₹100. Target: ₹115. Stop loss: ₹95.",
      prompt: "Risk-reward ratio?",
      correctAnswer: ["1:3 (risk ₹5, reward ₹15)"],
      choices: ["1:1", "1:2", "1:3 (risk ₹5, reward ₹15)", "1:5"],
      explanation: "RR = Reward ÷ Risk = 15 ÷ 5 = 3. Minimum 1:2 recommended."
    }]
  },
  {
    id: "st-m6-l4", moduleId: 6, lessonIndex: 3, title: "Portfolio diversification", duration: "5 min",
    questions: [{
      id: "st-m6-l4-q1", type: "true-false",
      prompt: "Holding 10 banking stocks provides good diversification.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Same sector = correlated risk. Diversify across sectors."
    }]
  },
  {
    id: "st-m6-l5", moduleId: 6, lessonIndex: 4, title: "Maximum drawdown limits", duration: "5 min",
    questions: [{
      id: "st-m6-l5-q1", type: "scenario",
      context: "You've lost 20% of capital this month.",
      prompt: "Appropriate response?",
      correctAnswer: ["Stop trading, analyze mistakes, reduce size when resuming"],
      choices: ["Trade more to recover quickly", "Stop trading, analyze mistakes, reduce size when resuming", "Continue as normal", "Borrow to add capital"],
      explanation: "Drawdown rules protect capital. Never revenge trade after losses."
    }]
  },
  {
    id: "st-m6-l6", moduleId: 6, lessonIndex: 5, title: "Avoid overleveraging", duration: "5 min",
    questions: [{
      id: "st-m6-l6-q1", type: "multiple-choice",
      prompt: "Why is excessive leverage dangerous?",
      correctAnswer: ["Losses are magnified, can wipe out capital quickly"],
      choices: ["It's not dangerous if you're right", "Losses are magnified, can wipe out capital quickly", "Only dangerous in derivatives", "Leverage is always good"],
      explanation: "Leverage multiplies gains AND losses. 10x leverage = 10% move wipes you out."
    }]
  },
  {
    id: "st-m6-l7", moduleId: 6, lessonIndex: 6, title: "Trading psychology basics", duration: "6 min",
    questions: [{
      id: "st-m6-l7-q1", type: "multiple-choice",
      prompt: "Most common psychological mistake?",
      correctAnswer: ["Cutting winners early, letting losers run"],
      choices: ["Trading too little", "Cutting winners early, letting losers run", "Being too patient", "Following rules too strictly"],
      explanation: "Fear makes us book profits fast, hope makes us hold losers. Reverse this."
    }]
  },
  {
    id: "st-m6-l8", moduleId: 6, lessonIndex: 7, title: "Handle losing streaks", duration: "5 min",
    questions: [{
      id: "st-m6-l8-q1", type: "true-false",
      prompt: "5 consecutive losses means your strategy is broken.",
      correctAnswer: ["False"],
      choices: ["True", "False"],
      explanation: "Even 60% win rate strategy has losing streaks. Trust the edge over time."
    }]
  },
  {
    id: "st-m6-l9", moduleId: 6, lessonIndex: 8, title: "Create trading rules", duration: "5 min",
    questions: [{
      id: "st-m6-l9-q1", type: "scenario",
      context: "You tend to overtrade when excited or after wins.",
      prompt: "Rule to prevent this?",
      correctAnswer: ["Maximum 3 trades per day, stop after 2 consecutive losses"],
      choices: ["Trade more when winning", "Maximum 3 trades per day, stop after 2 consecutive losses", "No limits needed", "Only trade on Mondays"],
      explanation: "Rules prevent emotional decisions. Set limits before trading session."
    }]
  },
  {
    id: "st-m6-l10", moduleId: 6, lessonIndex: 9, title: "Emergency protocols", duration: "4 min",
    questions: [{
      id: "st-m6-l10-q1", type: "multiple-choice",
      prompt: "What should you do during a flash crash?",
      correctAnswer: ["Nothing - existing stop losses should handle it"],
      choices: ["Buy the dip immediately", "Nothing - existing stop losses should handle it", "Sell everything at market", "Cancel all orders"],
      explanation: "Pre-set stops execute automatically. Panic selling often happens at bottom."
    }]
  }
];

// Module 7: Tax & Compliance (8 lessons)
export const traderModule7Lessons: LessonData[] = [
  {
    id: "st-m7-l1", moduleId: 7, lessonIndex: 0, title: "Short-term vs long-term gains", duration: "5 min",
    questions: [{
      id: "st-m7-l1-q1", type: "calculation",
      context: "STCG tax: 15%. LTCG tax: 10% above ₹1L. Your gain: ₹2L in 8 months.",
      prompt: "Tax liability?",
      correctAnswer: ["₹30,000 (15% of ₹2L - short term)"],
      choices: ["₹10,000", "₹20,000", "₹30,000 (15% of ₹2L - short term)", "₹0"],
      explanation: "Under 12 months = STCG at 15%. LTCG needs 12+ months holding."
    }]
  },
  {
    id: "st-m7-l2", moduleId: 7, lessonIndex: 1, title: "F&O income treatment", duration: "5 min",
    questions: [{
      id: "st-m7-l2-q1", type: "multiple-choice",
      prompt: "How is F&O profit taxed?",
      correctAnswer: ["As business income at your slab rate"],
      choices: ["15% flat rate", "As business income at your slab rate", "10% like LTCG", "No tax on F&O"],
      explanation: "F&O is speculative business income. Taxed at your income tax slab."
    }]
  },
  {
    id: "st-m7-l3", moduleId: 7, lessonIndex: 2, title: "Maintain trading records", duration: "5 min",
    questions: [{
      id: "st-m7-l3-q1", type: "true-false",
      prompt: "You must keep trade records for 6 years for tax purposes.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Tax department can question transactions for 6 years. Keep contract notes."
    }]
  },
  {
    id: "st-m7-l4", moduleId: 7, lessonIndex: 3, title: "Set off trading losses", duration: "5 min",
    questions: [{
      id: "st-m7-l4-q1", type: "scenario",
      context: "STCL: ₹50,000. STCG: ₹30,000. Can you set off?",
      prompt: "Tax treatment?",
      correctAnswer: ["Set off ₹30K against gain, carry forward ₹20K for 8 years"],
      choices: ["No set off allowed", "Set off ₹30K against gain, carry forward ₹20K for 8 years", "Full ₹50K write-off", "Losses can't be carried forward"],
      explanation: "STCL sets off against STCG. Remaining carried forward up to 8 years."
    }]
  },
  {
    id: "st-m7-l5", moduleId: 7, lessonIndex: 4, title: "Advance tax obligations", duration: "5 min",
    questions: [{
      id: "st-m7-l5-q1", type: "calculation",
      context: "Expected trading profit this year: ₹3L. Tax liability: ~₹45K.",
      prompt: "Advance tax payment needed?",
      correctAnswer: ["Yes - pay quarterly if tax liability exceeds ₹10K"],
      choices: ["No - pay at year end", "Yes - pay quarterly if tax liability exceeds ₹10K", "Only for ₹5L+ profit", "Monthly payments required"],
      explanation: "₹10K+ liability = advance tax. 15% by Jun 15, 45% by Sep 15, etc."
    }]
  },
  {
    id: "st-m7-l6", moduleId: 7, lessonIndex: 5, title: "Deductible expenses", duration: "5 min",
    questions: [{
      id: "st-m7-l6-q1", type: "multiple-choice",
      prompt: "Which expenses are deductible for traders?",
      correctAnswer: ["All of the above"],
      choices: ["Brokerage and STT", "Internet for trading", "Trading software subscriptions", "All of the above"],
      explanation: "Business expenses reduce taxable profit. Keep invoices for deductions."
    }]
  },
  {
    id: "st-m7-l7", moduleId: 7, lessonIndex: 6, title: "ITR form for traders", duration: "4 min",
    questions: [{
      id: "st-m7-l7-q1", type: "true-false",
      prompt: "Frequent traders should file ITR-3 with trading as business income.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "ITR-3 for business income. ITR-2 if only capital gains (occasional trading)."
    }]
  },
  {
    id: "st-m7-l8", moduleId: 7, lessonIndex: 7, title: "Tax-efficient strategies", duration: "5 min",
    questions: [{
      id: "st-m7-l8-q1", type: "scenario",
      context: "Stock is up 20% in 11 months. You want to sell.",
      prompt: "Tax-efficient approach?",
      correctAnswer: ["Wait 1 more month for LTCG treatment (10% vs 15%)"],
      choices: ["Sell immediately", "Wait 1 more month for LTCG treatment (10% vs 15%)", "Never sell to avoid tax", "Tax doesn't matter for this amount"],
      explanation: "Small wait = 5% tax savings. ₹20K gain saves ₹1000 by waiting 1 month."
    }]
  }
];

// Module 8: Building Systems (8 lessons)
export const traderModule8Lessons: LessonData[] = [
  {
    id: "st-m8-l1", moduleId: 8, lessonIndex: 0, title: "Create a trading journal", duration: "5 min",
    questions: [{
      id: "st-m8-l1-q1", type: "multiple-choice",
      prompt: "What should a trading journal capture?",
      correctAnswer: ["All of the above"],
      choices: ["Entry/exit reasons and prices", "Emotions during trade", "What worked and what didn't", "All of the above"],
      explanation: "Journal reveals patterns in your behavior. Self-awareness improves results."
    }]
  },
  {
    id: "st-m8-l2", moduleId: 8, lessonIndex: 1, title: "Weekly review process", duration: "5 min",
    questions: [{
      id: "st-m8-l2-q1", type: "true-false",
      prompt: "Reviewing trades weekly helps identify recurring mistakes.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Patterns emerge over time. Weekly review catches issues early."
    }]
  },
  {
    id: "st-m8-l3", moduleId: 8, lessonIndex: 2, title: "Build a watchlist system", duration: "5 min",
    questions: [{
      id: "st-m8-l3-q1", type: "scenario",
      context: "You have 200 stocks on your watchlist. Can't track all.",
      prompt: "Better approach?",
      correctAnswer: ["Tiered watchlist: 20 primary, 50 secondary, rest for screening"],
      choices: ["Monitor all 200 daily", "Tiered watchlist: 20 primary, 50 secondary, rest for screening", "Random selection daily", "Focus on 5 stocks only"],
      explanation: "Focused attention = better decisions. Tier by opportunity quality."
    }]
  },
  {
    id: "st-m8-l4", moduleId: 8, lessonIndex: 3, title: "Pre-market routine", duration: "5 min",
    questions: [{
      id: "st-m8-l4-q1", type: "multiple-choice",
      prompt: "Effective pre-market routine includes?",
      correctAnswer: ["All of the above"],
      choices: ["Check global market cues", "Review watchlist and mark levels", "Note scheduled events/news", "All of the above"],
      explanation: "Preparation prevents impulsive decisions. Start before market opens."
    }]
  },
  {
    id: "st-m8-l5", moduleId: 8, lessonIndex: 4, title: "Post-market routine", duration: "5 min",
    questions: [{
      id: "st-m8-l5-q1", type: "true-false",
      prompt: "You should update your journal and review trades after market closes daily.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Fresh memory = accurate journal. End-of-day routine builds discipline."
    }]
  },
  {
    id: "st-m8-l6", moduleId: 8, lessonIndex: 5, title: "Continuous learning plan", duration: "5 min",
    questions: [{
      id: "st-m8-l6-q1", type: "scenario",
      context: "You've been trading for 1 year. Consistent small profits.",
      prompt: "What's next for growth?",
      correctAnswer: ["Learn advanced concepts, increase size gradually, specialize in a style"],
      choices: ["You've learned enough", "Learn advanced concepts, increase size gradually, specialize in a style", "Switch to aggressive strategies", "Start teaching others"],
      explanation: "Markets evolve. Continuous learning and gradual scaling = sustainable growth."
    }]
  },
  {
    id: "st-m8-l7", moduleId: 8, lessonIndex: 6, title: "Track performance metrics", duration: "5 min",
    questions: [{
      id: "st-m8-l7-q1", type: "multiple-choice",
      prompt: "Key metrics to track monthly?",
      correctAnswer: ["All of the above"],
      choices: ["Win rate percentage", "Average gain vs average loss", "Maximum drawdown", "All of the above"],
      explanation: "Numbers don't lie. Track to improve objectively."
    }]
  },
  {
    id: "st-m8-l8", moduleId: 8, lessonIndex: 7, title: "Build for the long term", duration: "5 min",
    questions: [{
      id: "st-m8-l8-q1", type: "true-false",
      prompt: "Successful trading is a marathon, not a sprint.",
      correctAnswer: ["True"],
      choices: ["True", "False"],
      explanation: "Consistency over years beats occasional big wins. Build sustainable habits."
    }]
  }
];

// Export all trader lessons
export const allStockTraderLessons: LessonData[] = [
  ...traderModule1Lessons,
  ...traderModule2Lessons,
  ...traderModule3Lessons,
  ...traderModule4Lessons,
  ...traderModule5Lessons,
  ...traderModule6Lessons,
  ...traderModule7Lessons,
  ...traderModule8Lessons,
];
