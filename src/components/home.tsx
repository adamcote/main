import React from "react";
import Header from "./dashboard/Header";
import WelcomeSection from "./dashboard/WelcomeSection";
import QuickAccessGrid from "./dashboard/QuickAccessGrid";
import NavigationMenuComponent from "./dashboard/NavigationMenu";

interface HomeProps {
  userName?: string;
  userEmail?: string;
  avatarUrl?: string;
  completionPercentage?: number;
  filingStatus?: "not_started" | "in_progress" | "complete";
  onNavigate?: (path: string) => void;
}

const Home = ({
  userName = "John Doe",
  userEmail = "john@example.com",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  completionPercentage = 45,
  filingStatus = "in_progress",
  onNavigate = () => {},
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header
        userName={userName}
        userEmail={userEmail}
        avatarUrl={avatarUrl}
        onSettingsClick={() => onNavigate("settings")}
        onLogoutClick={() => onNavigate("logout")}
        onNotificationsClick={() => onNavigate("notifications")}
      />

      <div className="flex">
        <NavigationMenuComponent
          onNavigate={onNavigate}
          activeItem="dashboard"
        />

        <main className="flex-1 p-6 space-y-6">
          <div className="flex justify-center">
            <WelcomeSection
              userName={userName}
              completionPercentage={completionPercentage}
              status={filingStatus}
            />
          </div>

          <div className="flex justify-center">
            <QuickAccessGrid
              cards={[
                {
                  title: "Upload Expenses",
                  description:
                    "Easily upload and categorize your business expenses",
                  icon: "upload",
                  onClick: () => onNavigate("expenses/upload"),
                },
                {
                  title: "Report Income",
                  description: "Track and report your business income",
                  icon: "dollar",
                  onClick: () => onNavigate("income/report"),
                },
                {
                  title: "Business Write-offs",
                  description: "Manage your tax deductions and write-offs",
                  icon: "receipt",
                  onClick: () => onNavigate("write-offs"),
                },
              ]}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
