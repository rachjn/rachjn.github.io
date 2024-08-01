"use client";
import { useState } from "react";
import { LuTrophy, LuSwords, LuGamepad2 } from "react-icons/lu";

// Define the type for the objects in the array
interface TabProps {
  label: string;
  icon?: string;
}

// Define the type for the array of design tabs
type Tabs = TabProps[];

interface NavbarProps {
  tabs: Tabs;
  underlineColor: string;
  onTabChange: (tab: TabProps) => void; // Callback function
}

const iconMapping: { [key: string]: React.ElementType } = {
  LuTrophy,
  LuSwords,
  LuGamepad2,
};

const Navbar = ({ tabs, underlineColor, onTabChange }: NavbarProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <>
      <div className="flex gap-12">
        {tabs.map((tab) => {
          const IconComponent = tab.icon ? iconMapping[tab.icon] : null;
          const isActive = activeTab.label === tab.label;
          return (
            <>
              <button
                key={tab.label}
                className={`flex items-center gap-2 ${
                  isActive ? `border-b-2 border-${underlineColor}` : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {IconComponent && <IconComponent />}
                {tab.label}
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export { Navbar };
