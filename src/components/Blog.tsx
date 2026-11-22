import Image from "next/image";
import { posts } from "@/lib/site-data";

const titleLines = [
  ["Top 10 Tips for Your Kitchen", "Interior Design"],
  ["The Golden Ratio Rule for Best", "2D Sketch"],
  ["Use Pastel Colors & Natural", "Materials"],
];

const badgeLabels = ["INTERIOR", "ACHITECTURE", "INTERIOR"];

const excerpts = [
  "Create a kitchen that balances beauty, storage and everyday function with ten essential design tips.",
  "How the classic 1.618 proportion brings harmony and visual balance to every architectural sketch.",
  "Soften a modern interior with muted pastel tones and honest, natural materials that age gracefully.",
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative bg-white bg-[url('/sivra/marble-bg.png')] bg-auto bg-right-bottom bg-no-repeat bg-blend-multiply pt-20 pb-[72px] md:pt-[120px] md:pb-[100px]"
    >
      <div className="relative mx-auto max-w-none px-6 md:px-12 xl:px-[210px]">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
          <div>
            <span className="font-['Titillium_Web',sans-serif] text-[11px] font-semibold tracking-[0.15em] text-[#888888] uppercase">
              [ OUR BLOG ]
            </span>
            <h2 className="mt-[18px] font-['Titillium_Web',sans-serif]! text-[36px] leading-[1.2] font-normal text-[#1a1a1a] md:text-[42px]">
              Read Our Latest News
            </h2>
            <div className="dot-sep mt-[22px]" />
          </div>

          <div className="group relative inline-block self-end">
            <span
              aria-hidden="true"
              className="absolute top-1 left-1 z-0 h-full w-full border border-[#cccccc] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:border-[#1a1a1a]"
            />
            <a
              href="#"
              className="relative z-10 inline-flex items-center justify-center gap-[10px] border border-[#1e1e1e] bg-[#1e1e1e] px-5 py-[14px] font-['Titillium_Web',sans-serif] text-[11px] leading-none font-semibold tracking-[0.15em] text-white uppercase no-underline transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-white group-hover:text-[#1a1a1a]"
            >
              View All
              <span
                aria-hidden="true"
                className="inline-block text-[13px] leading-none transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-[26px] md:mt-12 md:grid-cols-2 md:gap-7 lg:mt-14 lg:grid-cols-3">
          {posts.map((p, i) => (
            <div key={p.title} className="reveal h-full" data-reveal>
              <article className="group relative flex h-full flex-col border border-[#e0e0e0] bg-white p-[19px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[#1a1a1a] hover:shadow-[0_30px_55px_-32px_rgba(0,0,0,0.4)] focus-within:-translate-y-1.5 focus-within:border-[#1a1a1a] focus-within:shadow-[0_30px_55px_-32px_rgba(0,0,0,0.4)]">
              <div className="relative aspect-[790/510] overflow-hidden bg-[#f2f2f2]">
                <a href="#" className="block h-full w-full" aria-label={p.title}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={790}
                    height={510}
                    className="block h-full w-full object-cover transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-hover:brightness-[1.04]"
                  />
                </a>
                <span className="absolute bottom-[14px] left-[14px] z-[2] bg-[#222222] px-3 py-[7px] font-['Titillium_Web',sans-serif] text-[10px] leading-[1.2] font-semibold tracking-[0.15em] text-white uppercase transition-colors duration-300 group-hover:bg-black">
                  {badgeLabels[i]}
                </span>
              </div>

              <div className="flex flex-1 flex-col pt-4">
                <div className="mb-[14px] flex flex-wrap items-center gap-[7px] font-['Titillium_Web',sans-serif] text-[10px] leading-[1.4] font-normal tracking-[0.12em] text-[#9a9a9a] uppercase">
                  <span>{p.date}</span>
                  <span aria-hidden="true" className="text-[8px] leading-none text-[#cccccc]">
                    •
                  </span>
                  <span className="font-semibold text-[#6f6f6f]">{p.author}</span>
                  <span aria-hidden="true" className="text-[8px] leading-none text-[#cccccc]">
                    •
                  </span>
                  <span>0 Comments</span>
                </div>

                <h3 className="mb-3 font-['Titillium_Web',sans-serif]! text-[21px] leading-[1.38] font-normal text-[#1a1a1a]">
                  <a
                    href="#"
                    className="text-inherit decoration-1 underline-offset-[5px] no-underline transition-colors duration-300 group-hover:underline"
                  >
                    {titleLines[i].map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < titleLines[i].length - 1 && <br />}
                      </span>
                    ))}
                  </a>
                </h3>

                <p className="mb-5 line-clamp-2 min-h-[44px] font-['Titillium_Web',sans-serif] text-[13px] leading-[1.7] text-[#8a8a8a]">
                  {excerpts[i]}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#efefef] pt-[14px]">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 font-['Titillium_Web',sans-serif] text-[10px] font-semibold tracking-[0.16em] text-[#1a1a1a] uppercase no-underline"
                  >
                    Read Article
                    <span
                      aria-hidden="true"
                      className="inline-block text-[13px] leading-none transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                  <span
                    aria-hidden="true"
                    className="font-['Titillium_Web',sans-serif] text-[10px] font-semibold tracking-[0.16em] text-[#c9c9c9] transition-colors duration-300 group-hover:text-[#1a1a1a]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
