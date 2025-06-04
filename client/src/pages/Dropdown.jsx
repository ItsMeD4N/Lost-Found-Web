import React from "react";

const Dropdown = () => {
  return (
    <div className="dropdown dropdown-open">
      <div tabIndex={0} role="button" className="btn m-1">
        Button
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
