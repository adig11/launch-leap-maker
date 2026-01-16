import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileScreen from "@/screens/ProfileScreen";
import { UserData } from "@/pages/Index";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("moonshot_user_data");
    if (stored) {
      setUserData(JSON.parse(stored));
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleTabChange = (tab: "home" | "journey" | "profile") => {
    if (tab === "home") navigate("/dashboard");
    else if (tab === "journey") navigate("/journey");
    else if (tab === "profile") navigate("/profile");
  };

  const handleResetOnboarding = () => {
    localStorage.removeItem("moonshot_user_data");
    navigate("/");
  };

  if (!userData) return null;

  return (
    <ProfileScreen
      activeTab="profile"
      onTabChange={handleTabChange}
      userData={userData}
      onResetOnboarding={handleResetOnboarding}
    />
  );
};

export default ProfilePage;
