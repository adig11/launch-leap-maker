import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JourneyScreen from "@/screens/JourneyScreen";
import { UserData } from "@/pages/Index";

const JourneyPage = () => {
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

  const handleTabChange = (tab: "home" | "journey" | "moon" | "profile") => {
    if (tab === "home") navigate("/dashboard");
    else if (tab === "journey") navigate("/journey");
    else if (tab === "moon") navigate("/moon");
    else if (tab === "profile") navigate("/profile");
  };

  if (!userData) return null;

  return (
    <JourneyScreen
      activeTab="journey"
      onTabChange={handleTabChange}
      userData={userData}
    />
  );
};

export default JourneyPage;
