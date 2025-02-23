import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";

const ReduceMotionButton = () => {
  const [reduceMotion, setReduceMotion] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-16 h-16">
        {reduceMotion ? (
          <img
            src="/animations"
            alt="Stickman Static"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src="/animations"
            alt="Stickman Dancing"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <Switch
        checked={reduceMotion}
        onCheckedChange={(checked) => setReduceMotion(checked)}
        aria-label="Toggle Reduce Motion"
      />
      <span>{reduceMotion ? "Reduce Motion: On" : "Reduce Motion: Off"}</span>
    </div>
  );
};

export default ReduceMotionButton;
