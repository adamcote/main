import React from "react";
import ActionCard from "./ActionCard";

interface QuickAccessGridProps {
  cards?: Array<{
    title: string;
    description: string;
    icon: "upload" | "dollar" | "receipt";
    onClick?: () => void;
  }>;
}

const QuickAccessGrid = ({
  cards = [
    {
      title: "Upload Expenses",
      description: "Easily upload and categorize your business expenses",
      icon: "upload",
      onClick: () => console.log("Upload Expenses clicked"),
    },
    {
      title: "Report Income",
      description: "Track and report your business income",
      icon: "dollar",
      onClick: () => console.log("Report Income clicked"),
    },
    {
      title: "Business Write-offs",
      description: "Manage your tax deductions and write-offs",
      icon: "receipt",
      onClick: () => console.log("Business Write-offs clicked"),
    },
  ],
}: QuickAccessGridProps) => {
  return (
    <div className="w-full max-w-[1200px] h-[300px] bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {cards.map((card, index) => (
          <ActionCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            onClick={card.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickAccessGrid;
