import React from "react";

const DescriptionPanel = ({ activeSubMenu, activeNav }) => {
  if (!activeSubMenu) return null;

  return (
    <div className="w-3/4 px-4 py-2 text-white transform translate-y-2 transition-all duration-300 ease-in-out">
      <h2 className="text-lg font-light text-gray-200">
        {activeSubMenu.title}
      </h2>
      <p className="text-base pt-1">
        {activeSubMenu.description.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default DescriptionPanel;
