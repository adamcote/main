import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

interface WelcomeSectionProps {
  userName?: string;
  completionPercentage?: number;
  status?: "not_started" | "in_progress" | "complete";
}

const WelcomeSection = ({
  userName = "Business Owner",
  completionPercentage = 45,
  status = "in_progress",
}: WelcomeSectionProps) => {
  const getStatusMessage = () => {
    switch (status) {
      case "not_started":
        return "Let's get started with your tax filing";
      case "complete":
        return "Great job! Your tax filing is complete";
      default:
        return "You're making good progress on your tax filing";
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "not_started":
        return "text-gray-600";
      case "complete":
        return "text-green-600";
      default:
        return "text-blue-600";
    }
  };

  return (
    <Card className="w-full max-w-[1200px] h-[200px] p-6 bg-gradient-to-br from-emerald-50 to-white border-emerald-100">
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-gray-900">
              Welcome back, {userName}
            </h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="w-5 h-5 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Track your tax filing progress here</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className={`text-lg ${getStatusColor()}`}>{getStatusMessage()}</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600">
              Filing Progress
            </span>
            <span className="text-sm font-medium text-gray-900">
              {completionPercentage}%
            </span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </div>
      </div>
    </Card>
  );
};

export default WelcomeSection;
