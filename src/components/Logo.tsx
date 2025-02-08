import React from "react";
import { Calculator, FileText } from "lucide-react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-25" />
        <div className="relative flex items-center bg-white dark:bg-slate-950 rounded-lg p-2">
          <Calculator className="w-6 h-6 text-primary" />
          <FileText className="w-6 h-6 text-blue-600 -ml-2" />
        </div>
      </div>
      <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
        TaxEase
      </span>
    </div>
  );
};

export default Logo;
