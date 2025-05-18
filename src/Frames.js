import { Frame } from "./components";
import { useState } from "react";
import { about_me, code, photography } from "./markdown";

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

  const frameData = [
    { id: "two", headline: "art", textBody: photography },
    { id: "three", headline: "code", textBody: code },
    { id: "one", headline: "about me", textBody: about_me },
  ];

  // Find selected frame's markdown
  const selectedMarkdown =
    selectedFrame && selectedFrame !== centralImg
      ? frameData.find((f) => f.id === selectedFrame)?.textBody
      : null;

  return (
    <div className="frames">
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
        textBody={selectedMarkdown}
      />
      <div className="grouped-frames">
        {/* Grouped frames */}
        {frameData.map(({ id, headline, textBody }, idx) => (
          <Frame
            key={id}
            id={id}
            centralframe={false}
            index={idx}
            headline={headline}
            textBody={textBody}
            selectedFrame={selectedFrame}
            setSelectedFrame={setSelectedFrame}
            moved={movedFrame === id}
            onClick={handleFrameClick}
            isFirst={idx === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Frames;
