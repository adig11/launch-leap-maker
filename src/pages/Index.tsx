import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingScreen from "@/screens/OnboardingScreen";
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

const Index = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [activeTab, setActiveTab] = useState<"home" | "journey" | "profile">("home");

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
  };

  const handleTabChange = (tab: "home" | "journey" | "profile") => {
    if (tab === "home") navigate("/dashboard");
    else if (tab === "journey") navigate("/journey");
    else if (tab === "profile") navigate("/profile");
  };

  // Show onboarding if no user data
  if (!userData) {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />;
  }

  // After onboarding, redirect to dashboard
  if (activeTab === "journey") {
    return <JourneyScreen activeTab={activeTab} onTabChange={handleTabChange} userData={userData} />;
  }

  if (activeTab === "profile") {
    return (
      <ProfileScreen
        activeTab={activeTab}
        onTabChange={handleTabChange}
        userData={userData}
        onResetOnboarding={handleResetOnboarding}
      />
    );
  }

  return (
    <DashboardScreen
      activeTab={activeTab}
      onTabChange={handleTabChange}
      userData={userData}
    />
  );
};

export default Index;
