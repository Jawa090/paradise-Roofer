export default function LogoBar() {
  const logos = [
    { name: "Paradise Construction", url: "https://paradiseconstruction.com/", img: "/footerlogos/paradiseC.png" },
    { name: "Paradise Estimating", url: "https://paradiseestimating.com/", img: "/footerlogos/paradiseE.webp" },
    { name: "Contractor List", url: "https://staging.contractorslist.com/", img: "/footerlogos/contractorL.png" },
    { name: "Fusion Cortex", url: "https://fusioncortex.com/", img: "/footerlogos/Fusion-Cortex.jpg" },
    { name: "Grobots", url: "https://grobots.ai/", img: "/footerlogos/grobot.png" },
    { name: "Bitwords", url: "https://www.bitwords.com/", img: "/footerlogos/bitwords.png" },
    { name: "Rush Corporation", url: "https://rushcorporation.com/", img: "/footerlogos/rush.png" },
    { name: "MEP", url: "https://mepestimate.us", img: "/footerlogos/mep.png" },
  ];

  return (
    <div className="py-6 overflow-hidden bg-transparent">
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.concat(logos).map((logo, i) => (
          <div key={i} className="flex-shrink-0 mx-6 group">
            <a href={logo.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-32 h-24 rounded-lg hover:bg-white transition-all duration-300 group-hover:scale-105 shadow-sm">
              <img src={logo.img} alt={logo.name}
                className="max-w-24 max-h-16 object-contain transition-all duration-300 group-hover:scale-110" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}