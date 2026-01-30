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

const PathIcon = ({ className = "", filled = false }: { className?: string; filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    {filled ? (
      <>
        <path d="M12 2C12 2 19 7 19 14C19 17.5 16.5 20 12 20C7.5 20 5 17.5 5 14C5 7 12 2 12 2Z" fill="currentColor"/>
        <path d="M5 14L2 17L5 16Z" fill="currentColor"/>
        <path d="M19 14L22 17L19 16Z" fill="currentColor"/>
      </>
    ) : (
      <>
        <path d="M12 2C12 2 19 7 19 14C19 17.5 16.5 20 12 20C7.5 20 5 17.5 5 14C5 7 12 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 14L2 17L5 16Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M19 14L22 17L19 16Z" stroke="currentColor" strokeWidth="1.5"/>
      </>
    )}
  </svg>
);

const ProfileIcon = ({ className = "", filled = false }: { className?: string; filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    {filled ? (
      <>
        <circle cx="12" cy="8" r="4" fill="currentColor"/>
        <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </>
    ) : (
      <>
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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
    { id: "journey" as const, label: "Path", Icon: PathIcon },
    { id: "profile" as const, label: "Profile", Icon: ProfileIcon },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F3] subtle-grid flex flex-col max-w-md mx-auto relative">
      <div className="flex-1 overflow-auto pb-24">{children}</div>
      {showNav && (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-border">
          <div className="flex justify-around items-center py-2 px-4">
            {navItems.map(({ id, label, Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => onTabChange?.(id)}
                  className="flex flex-col items-center gap-1 py-2 px-6 transition-all"
                >
                  <Icon 
                    className={`w-6 h-6 ${isActive ? "text-primary" : "text-muted-foreground"}`} 
                    filled={isActive} 
                  />
                  <span className={`text-xs font-medium uppercase tracking-wide ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
          {/* Home indicator bar */}
          <div className="flex justify-center pb-2">
            <div className="w-32 h-1 bg-secondary rounded-full" />
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileLayout;
