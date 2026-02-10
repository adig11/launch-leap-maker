import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MoonChatScreen from "@/screens/MoonChatScreen";

const MoonPage = () => {
  const navigate = useNavigate();
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("moonshot_user_data");
    if (stored) {
      setHasData(true);
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

  if (!hasData) return null;

  return (
    <MoonChatScreen
      activeTab="moon"
      onTabChange={handleTabChange}
    />
  );
};

export default MoonPage;
