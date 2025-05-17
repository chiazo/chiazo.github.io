import React from "react";

const Panel = ({title}) => {
  return (
    <div className="panel">
      <div className="nav-links">
        {title}
      </div>
    </div>
  );
};

export default Panel;
