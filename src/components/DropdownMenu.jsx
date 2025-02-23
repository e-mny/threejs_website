import React from "react";
import SubMenuItem from "./SubMenuItem";
import DescriptionPanel from "./DescriptionPanel";

const DropdownMenu = ({
  nav,
  activeNav,
  activeSubMenuIndex,
  setActiveSubMenuIndex,
  setIsHoveringDropdown,
}) => {
  return (
    <div
      className={`fixed left-0 right-0 bg-neutral-900 border-neutral-700 transition-all duration-300 transform min-h-[30vh] ${
        activeNav === nav.index
          ? "opacity-100 translate-y-0 cursor-default"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
      onMouseEnter={() => setIsHoveringDropdown(true)} // Set to true when hovering over dropdown
      onMouseLeave={() => setIsHoveringDropdown(false)} // Set to false when the mouse leaves the dropdown
    >
      <div className="max-w-[980px] mx-auto px-4 flex">
        <ul className="flex flex-col w-1/4 gap-4 py-4">
          {nav.subMenu.map((item, indexSubMenu) => (
            <SubMenuItem
              key={item.title}
              item={item}
              onMouseEnter={() => setActiveSubMenuIndex(indexSubMenu)}
              isActive={activeNav === nav.index}
            />
          ))}
        </ul>
        <DescriptionPanel
          activeSubMenu={nav.subMenu[activeSubMenuIndex]}
          activeNav={activeNav}
        />
      </div>
    </div>
  );
};

export default DropdownMenu;
