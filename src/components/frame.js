import React, { useState } from "react";

const Frame = ({ img, index, centralframe, headline, subtitle }) => {
  const img_src = `/images/${img}.png`;
  const [moved, setMoved] = useState(false);

  const isCentral = centralframe === true;

  const style = {
    position: "fixed",
    cursor: "pointer",
    transition: "all 0.4s ease",
    zIndex: isCentral ? 100 : 10 - index,

    // Layout
    ...(isCentral
      ? {
          bottom: moved ? "30%" : "20%", // Higher up = larger % from bottom
          left: moved ? "5%" : "15%",
        }
      : {
          right: moved ? "20%" : index % 2 === 1 ? "10%" : "5%",
          bottom: `${20 + index * 16}%`,
        }),
  };

  return (
    <div className="frame" style={style} onClick={() => setMoved(!moved)}>
      <img
        className="frame-string"
        src="/images/frame-string.png"
        alt="string"
        style={{ height: isCentral ? "600px" : "480px" }}
      />
      <div className="frame-link">
        <img
          className="frame-image"
          src={img_src}
          alt={img}
          style={{ height: isCentral ? "400px" : "200px" }}
        />
        {isCentral ? (
          <>
            <div className="frame-text-overlay main-text">{headline}</div>
            <div className="frame-text-overlay subtitle">{subtitle}</div>
          </>
        ) : (
          <div className="frame-text-overlay">{headline}</div>
        )}
      </div>
    </div>
  );
};

export default Frame;
