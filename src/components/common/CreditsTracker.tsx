import React from 'react';
import { CreditCard } from 'lucide-react';

interface CreditsTrackerProps {
  listCredits: number;
  enhanceCredits?: number;
}

const CreditsTracker = ({ listCredits, enhanceCredits }: CreditsTrackerProps) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white">
      <CreditCard className="w-4 h-4" />
      <span className="text-sm font-medium">
        List Credits: {listCredits.toLocaleString()}
        {enhanceCredits !== undefined && (
          <>
            <span className="mx-2 text-white/50">|</span>
            Enhance Credits: {enhanceCredits.toLocaleString()}
          </>
        )}
      </span>
    </div>
  );
};

export default CreditsTracker;