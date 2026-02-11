import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PhoneScreenProps {
  onContinue: (phone: string) => void;
  onSkip: () => void;
}

const PhoneScreen = ({ onContinue, onSkip }: PhoneScreenProps) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return digits.length === 10;
  };

  const handleContinue = () => {
    const digits = phone.replace(/\D/g, "");
    if (!validatePhone(phone)) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    onContinue(digits);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    setPhone(value);
    if (error) setError("");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <motion.div
        className="px-6 pt-12 pb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary-foreground">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            Step 1 of 3
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="flex-1 px-6 flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <h1 className="text-2xl font-bold text-secondary leading-tight mb-2">
          What's your mobile number?
        </h1>
        <p className="text-muted-foreground text-sm mb-8">
          We'll use this to save your progress and send important updates about your venture.
        </p>

        {/* Phone input */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-3 rounded-xl border border-border bg-card text-sm font-medium text-secondary shrink-0">
              <span className="text-base">🇮🇳</span>
              <span>+91</span>
            </div>
            <Input
              type="tel"
              inputMode="numeric"
              placeholder="98765 43210"
              value={phone}
              onChange={handleChange}
              onKeyDown={(e) => e.key === "Enter" && handleContinue()}
              className="flex-1 bg-card border-border text-secondary text-base py-6 rounded-xl"
              autoFocus
            />
          </div>
          {error && (
            <motion.p
              className="text-destructive text-xs pl-1"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.p>
          )}
        </div>

        <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
          Your number is safe with us. No spam, ever.
        </p>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="px-6 pb-10 pt-4 space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button
          onClick={handleContinue}
          disabled={phone.length < 10}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold rounded-2xl shadow-md disabled:opacity-40"
        >
          Continue
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 ml-2">
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
        <button
          onClick={onSkip}
          className="w-full text-center text-sm text-muted-foreground py-2 hover:text-secondary transition-colors"
        >
          Skip for now
        </button>
      </motion.div>
    </div>
  );
};

export default PhoneScreen;
