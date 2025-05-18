import React from "react";

const Frame = ({
  id,
  index,
  centralframe,
  headline,
  subtitle,
  selectedFrame,
  moved,
  onClick,
  isFirst,
}) => {
  const img_src = `/images/${id}.png`;

  const isCentral = centralframe === true;
  const shouldShowTextBody = isCentral && selectedFrame && selectedFrame !== id;

  const style = {
    position: "fixed",
    cursor: "pointer",
    transition: "all 0.4s ease",
    zIndex: isCentral ? 100 : 10 - index,

    ...(isCentral
      ? {
          bottom: moved ? "30%" : "20%",
          left: moved ? "5%" : "15%",
        }
      : {
          right: moved ? "20%" : index % 2 === 1 ? "15%" : "5%",
          bottom: `${20 + index * 16}%`,
        }),
  };

  const handleClick = () => {
    if (!onClick) return;
    onClick(id, isCentral);
  };

  return (
    <div className="frame" style={style} onClick={handleClick}>
      {(isCentral || !isFirst) && (
        <img
          className="frame-string"
          src="/images/frame-string.png"
          alt="string"
          style={{ height: isCentral ? "600px" : "480px" }}
        />
      )}
      <div className="frame-link">
        {/* Always show the frame image */}
        <img
          className="frame-image"
          src={img_src}
          alt={id}
          style={{ height: isCentral ? "400px" : "200px" }}
        />

        {isCentral && shouldShowTextBody ? (
          // Show text body instead of headline/subtitle
          <div className="frame-text-body">
            <p>
              This is body text responding to frame{" "}
              <strong>{selectedFrame}</strong>.
            </p>
          </div>
        ) : isCentral ? (
          <>
            <div className="frame-text-overlay main-headline">
              <span className="highlight">{headline}</span>
            </div>
            <div className="frame-text-overlay subtitle">{subtitle}</div>
          </>
        ) : (
          <div className="frame-text-overlay headline">{headline}</div>
        )}
      </div>
    </div>
  );
};

export default Frame;
