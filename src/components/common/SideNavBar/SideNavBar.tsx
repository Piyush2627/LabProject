import React from "react";
import CloseIcon from "@mui/icons-material/Close";
interface SideBarProp {
  toggleSidebar: () => void;
}
function SideNavBar({ toggleSidebar }: SideBarProp) {
  return (
    <div>
      <div className=" flex justify-between items-center mb">
        <div>Logo</div>
        <button
          className="  hover:bg-gray-200 focus:outline-none font-semibold h-8 px-2 rounded-lg flex items-center focus:border-cyan-300active:border-cyan-300 active:border-s justify-center  "
          onClick={toggleSidebar}
        >
          <CloseIcon />
        </button>
      </div>
      hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
      facere quaerat asperiores! Ipsa at corrupti vel commodi animi ipsum
      repellat dolore culpa! Cupiditate saepe quia dignissimos corrupti maxime
      aut perspiciatis modi voluptatum quisquam possimus ipsam eaque alias
    </div>
  );
}

export default SideNavBar;
