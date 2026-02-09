export default function HeroText({
  text,
  align = "center",
  colour = "#c4fe2a",
}) {
  const isCenter = align === "center";

  return (
    <svg viewBox="18 0 1250 150" className="w-full h-auto  shrink-0">
      <text
        x={isCenter ? "50%" : "0"}
        y="50%"
        textAnchor={isCenter ? "middle" : "start"}
        dominantBaseline="middle"
        className="heroText"
        fill={colour}
      >
        {text}
      </text>
    </svg>
  );
}
