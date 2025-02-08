import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, DollarSign, Receipt } from "lucide-react";

interface ActionCardProps {
  title?: string;
  description?: string;
  icon?: "upload" | "dollar" | "receipt";
  onClick?: () => void;
}

const ActionCard = ({
  title = "Upload Expenses",
  description = "Easily upload and categorize your business expenses",
  icon = "upload",
  onClick = () => {},
}: ActionCardProps) => {
  const iconMap = {
    upload: <Upload className="w-6 h-6" />,
    dollar: <DollarSign className="w-6 h-6" />,
    receipt: <Receipt className="w-6 h-6" />,
  };

  return (
    <Card className="w-[380px] h-[280px] bg-gradient-to-br from-emerald-50 to-white hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border-emerald-100">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            {iconMap[icon]}
          </div>
          <div>
            <CardTitle className="text-xl font-semibold text-gray-900">
              {title}
            </CardTitle>
            <CardDescription className="text-gray-500 mt-1">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <ArrowRight className="w-4 h-4 mr-2 text-primary" />
              <span>Quick and easy document upload</span>
            </li>
            <li className="flex items-center">
              <ArrowRight className="w-4 h-4 mr-2 text-primary" />
              <span>Automatic categorization</span>
            </li>
            <li className="flex items-center">
              <ArrowRight className="w-4 h-4 mr-2 text-primary" />
              <span>Real-time processing</span>
            </li>
          </ul>
          <Button onClick={onClick} className="w-full mt-4" variant="default">
            Get Started
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionCard;
