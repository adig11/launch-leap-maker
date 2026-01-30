import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeScreen from "@/screens/WelcomeScreen";
import OnboardingChoiceScreen from "@/screens/OnboardingChoiceScreen";
import BusinessTypeScreen from "@/screens/BusinessTypeScreen";
import MoonChatOnboarding from "@/screens/MoonChatOnboarding";
import DashboardScreen from "@/screens/DashboardScreen";
import JourneyScreen from "@/screens/JourneyScreen";
import ProfileScreen from "@/screens/ProfileScreen";

export interface UserData {
  name: string;
  businessType: string;
  cuisine: string;
  location: string;
  investment: string;
  kitchenName: string;
}

type OnboardingStep = "welcome" | "choice" | "business-type" | "moon-chat";

const Index = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [activeTab, setActiveTab] = useState<"home" | "journey" | "profile">("home");
  const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>("welcome");

  // Check for existing user data on mount
  useEffect(() => {
    const stored = localStorage.getItem("moonshot_user_data");
    if (stored) {
      setUserData(JSON.parse(stored));
    }
  }, []);

  const handleOnboardingComplete = (data: UserData) => {
    localStorage.setItem("moonshot_user_data", JSON.stringify(data));
    setUserData(data);
    navigate("/dashboard");
  };

  const handleResetOnboarding = () => {
    localStorage.removeItem("moonshot_user_data");
    setUserData(null);
    setActiveTab("home");
    setOnboardingStep("welcome");
  };

  const handleTabChange = (tab: "home" | "journey" | "profile") => {
    if (tab === "home") navigate("/dashboard");
    else if (tab === "journey") navigate("/journey");
    else if (tab === "profile") navigate("/profile");
  };

  // Handle business type selection - create userData directly
  const handleBusinessTypeSelect = (businessType: string, businessName: string) => {
    const data: UserData = {
      name: "Founder",
      businessType: businessType,
      cuisine: "Multi-Cuisine", // Default for non-food businesses
      location: "India",
      investment: "₹2-5 Lakhs",
      kitchenName: businessName, // Use the business name directly
    };
    handleOnboardingComplete(data);
  };

  // Show onboarding if no user data
  if (!userData) {
    // Welcome screen
    if (onboardingStep === "welcome") {
      return <WelcomeScreen onStart={() => setOnboardingStep("choice")} />;
    }

    // Choice screen (I have idea vs brainstorm)
    if (onboardingStep === "choice") {
      return (
        <OnboardingChoiceScreen 
          onHaveIdea={() => setOnboardingStep("business-type")}
          onBrainstorm={() => setOnboardingStep("moon-chat")}
        />
      );
    }

    // Business type selection
    if (onboardingStep === "business-type") {
      return (
        <BusinessTypeScreen 
          onSelect={handleBusinessTypeSelect}
          onBack={() => setOnboardingStep("choice")}
        />
      );
    }

    // Moon chat for brainstorming
    if (onboardingStep === "moon-chat") {
      return <MoonChatOnboarding onComplete={handleOnboardingComplete} />;
    }
  }

  // After onboarding, redirect to dashboard
  if (activeTab === "journey") {
    return <JourneyScreen activeTab={activeTab} onTabChange={handleTabChange} userData={userData!} />;
  }

  if (activeTab === "profile") {
    return (
      <ProfileScreen
        activeTab={activeTab}
        onTabChange={handleTabChange}
        userData={userData!}
        onResetOnboarding={handleResetOnboarding}
      />
    );
  }

  return (
    <DashboardScreen
      activeTab={activeTab}
      onTabChange={handleTabChange}
      userData={userData!}
    />
  );
};

export default Index;
