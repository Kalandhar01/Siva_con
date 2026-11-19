export default function Partners() {
  const logos = [1, 2, 3, 4, 5, 6];
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: "#1a1a1a", padding: "40px 0" }}
    >
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div
            key={half}
            className="flex items-center shrink-0"
            style={{ gap: 80, paddingRight: 80 }}
          >
            {logos.map((n) => (
              <img
                key={n}
                src={`/sivra/partner-${n}.svg`}
                alt={`Partner ${n}`}
                style={{ height: 38, width: "auto", filter: "grayscale(1) brightness(2.2)", opacity: 0.65 }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
