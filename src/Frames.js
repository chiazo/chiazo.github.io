import { Frame } from "./components";

const Frames = () => {
  return (
    <div className="frames">
      {/* Central frame */}
      <Frame
        img="one"
        centralframe={true}
        headline={"hi, my name is chiazo!"}
        subtitle={
          "i'm brooklyn based engineer & i currently write code and queries full-time at Stripe. welcome!"
        }
      />

      {/* Grouped frames */}
      {[
        { name: "two", headline: "art" },
        { name: "three", headline: "code" },
        { name: "four", headline: "about me" },
      ].map(({ name, headline }, idx) => (
        <Frame key={name} img={name} index={idx} headline={headline} />
      ))}
    </div>
  );
};

export default Frames;
