import "./Partners.css";

const partners = [1, 2, 3, 4, 5, 6];

export default function Partners() {
  const set = (
    <div className="flex items-center shrink-0" style={{ gap: 80, paddingRight: 80 }}>
      {partners.map((n) => (
        <img
          key={n}
          src={`/sivra/partner-${n}.svg`}
          alt={`Partner ${n}`}
          style={{
            height: 38,
            width: "auto",
            filter: "grayscale(1) brightness(2.2)",
            opacity: 0.65,
          }}
        />
      ))}
    </div>
  );

  return (
    <div
      className="relative w-full overflow-hidden px-6 md:px-[210px]"
      style={{ background: "#1a1a1a", padding: "40px 0" }}
    >
      <div className="marquee-track">
        {set}
        {set}
      </div>
    </div>
  );
}
