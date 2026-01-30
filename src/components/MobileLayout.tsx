import { ReactNode } from "react";

interface MobileLayoutProps {
  children: ReactNode;
  showNav?: boolean;
  activeTab?: "home" | "journey" | "profile";
  onTabChange?: (tab: "home" | "journey" | "profile") => void;
}

// Custom icons matching the reference design
const HomeIcon = ({ className = "", filled = false }: { className?: string; filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    {filled ? (
      <path d="M3 9.5L12 3L21 9.5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9.5Z" fill="currentColor"/>
    ) : (
      <path d="M3 9.5L12 3L21 9.5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    )}
  </svg>
);

const ExploreIcon = ({ className = "", filled = false }: { className?: string; filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    {filled ? (
      <>
        <circle cx="12" cy="12" r="10" fill="currentColor"/>
        <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill="white"/>
      </>
    ) : (
      <>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </>
    )}
  </svg>
);

const MentorIcon = ({ className = "", filled = false }: { className?: string; filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    {filled ? (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" fill="currentColor"/>
        <path d="M8 17V20M16 17V20M6 20H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </>
    ) : (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 17V20M16 17V20M6 20H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </>
    )}
  </svg>
);

const ToolsIcon = ({ className = "", filled = false }: { className?: string; filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    {filled ? (
      <>
        <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="13" y="3" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="3" y="13" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor"/>
      </>
    ) : (
      <>
        <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
      </>
    )}
  </svg>
);

const MobileLayout = ({
  children,
  showNav = false,
  activeTab = "home",
  onTabChange,
}: MobileLayoutProps) => {
  const navItems = [
    { id: "home" as const, label: "Home", Icon: HomeIcon },
    { id: "journey" as const, label: "Explore", Icon: ExploreIcon },
    { id: "profile" as const, label: "Profile", Icon: ToolsIcon },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F3] flex flex-col max-w-md mx-auto relative">
      <div className="flex-1 overflow-auto pb-24">{children}</div>
      {showNav && (
        <nav className="fixed bottom-4 left-4 right-4 max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-border/50 flex justify-around items-center py-2 px-2">
            {navItems.map(({ id, label, Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => onTabChange?.(id)}
                  className={`flex flex-col items-center gap-1 px-5 py-2 rounded-xl transition-all ${
                    isActive
                      ? "bg-[#FBEAE6] text-[#D4A394]"
                      : "text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  <Icon className="w-5 h-5" filled={isActive} />
                  <span className={`text-xs font-medium ${isActive ? "text-[#D4A394]" : ""}`}>
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileLayout;
