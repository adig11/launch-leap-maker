import { ReactNode } from "react";

interface MobileLayoutProps {
  children: ReactNode;
  showNav?: boolean;
  activeTab?: "home" | "journey" | "profile";
  onTabChange?: (tab: "home" | "journey" | "profile") => void;
}

import { HomeIcon, MapIcon, UserIcon } from "./icons";

const MobileLayout = ({
  children,
  showNav = false,
  activeTab = "home",
  onTabChange,
}: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative">
      <div className="flex-1 overflow-auto pb-20">{children}</div>
      {showNav && (
        <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border max-w-md mx-auto">
          <div className="flex justify-around items-center py-3">
            <button
              onClick={() => onTabChange?.("home")}
              className={`flex flex-col items-center gap-1 px-6 py-2 transition-colors ${
                activeTab === "home"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <HomeIcon className="w-6 h-6" />
              <span className="text-xs font-medium">Home</span>
            </button>
            <button
              onClick={() => onTabChange?.("journey")}
              className={`flex flex-col items-center gap-1 px-6 py-2 transition-colors ${
                activeTab === "journey"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <MapIcon className="w-6 h-6" />
              <span className="text-xs font-medium">Journey</span>
            </button>
            <button
              onClick={() => onTabChange?.("profile")}
              className={`flex flex-col items-center gap-1 px-6 py-2 transition-colors ${
                activeTab === "profile"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <UserIcon className="w-6 h-6" />
              <span className="text-xs font-medium">Profile</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileLayout;
