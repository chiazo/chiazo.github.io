import { useState, useEffect } from "react";
import Markdown from "react-markdown";

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
  textBody,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1025);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const img_src = `/images/${id}.png`;

  const isCentral = centralframe === true;
  const shouldShowTextBody = isCentral && selectedFrame && selectedFrame !== id;

  const style = isMobile
    ? {
        position: "relative", // no fixed position on mobile
        cursor: "pointer",
        zIndex: isCentral ? 100 : 10 - index,
        left: "auto",
        right: "auto",
        bottom: "auto",
        transition: "none",
        transform: "none",
      }
    : {
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
          className={`frame-string${isCentral ? " central" : ""}`}
          src="/images/frame-string.png"
          alt="string"
        />
      )}
      <div className="frame-link">
        {/* Always show the frame image */}
        <img
          className={`frame-image${isCentral ? " central" : ""}`}
          src={img_src}
          alt={id}
        />

        {isCentral && shouldShowTextBody ? (
          <div className="frame-text-body">
            <Markdown className="image-grid">{textBody}</Markdown>
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
