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
    <div className="partners-shell">
      <div className="marquee-track">
        {set}
        {set}
      </div>
    </div>
  );
}
