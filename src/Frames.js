import { Frame } from "./components";
import React, { useState } from "react";

const Frames = () => {
  const [selectedFrame, setSelectedFrame] = useState(null);
  const [movedFrame, setMovedFrame] = useState(null);
  const centralImg = "four";

  const handleFrameClick = (id, isCentral) => {
    if (isCentral) {
      if (selectedFrame && selectedFrame !== centralImg) {
        setSelectedFrame(null);
        setMovedFrame(null);
      } else if (selectedFrame === null) {
        setMovedFrame(movedFrame === centralImg ? null : centralImg);
      } else {
        setSelectedFrame(null);
        setMovedFrame(null);
      }
    } else {
      if (selectedFrame === id) {
        setSelectedFrame(null);
        setMovedFrame(null);
      } else {
        setSelectedFrame(id);
        setMovedFrame(id);
      }
    }
  };

  return (
    <div classId="frames">
      {/* Central frame */}
      <Frame
        id={centralImg}
        centralframe={true}
        headline={"✨ hi, i'm chiazo! ✨"}
        subtitle={
          "i'm a brooklyn-based engineer, currently writing code and queries at Stripe."
        }
        selectedFrame={selectedFrame}
        setSelectedFrame={setSelectedFrame}
        moved={movedFrame === centralImg}
        onClick={handleFrameClick}
      />

      {/* Grouped frames */}
      {[
        { id: "two", headline: "art" },
        { id: "three", headline: "code" },
        { id: "one", headline: "about me" },
      ].map(({ id, headline }, idx) => (
        <Frame
          key={id}
          id={id}
          index={idx}
          headline={headline}
          selectedFrame={selectedFrame}
          moved={movedFrame === id}
          onClick={handleFrameClick}
          isFirst={idx === 0}
        />
      ))}
    </div>
  );
};

export default Frames;
