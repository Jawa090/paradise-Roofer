export default function LogoBar() {
  const logos = [
    { name: "Paradise Construction", url: "https://paradiseconstruction.com/", img: "/footerlogos/P-cons.png" },
    { name: "Paradise Estimating", url: "https://paradiseestimating.com/", img: "/footerlogos/logo.webp" },
    { name: "Contractor List", url: "https://staging.contractorslist.com/", img: "/footerlogos/Con.List.png" },
    { name: "Fusion Cortex", url: "https://fusioncortex.com/", img: "/footerlogos/Fusion-Cortex.jpg" },
    { name: "Grobots", url: "https://grobots.ai/", img: "/footerlogos/grobot.png" },
    { name: "Bitwords", url: "https://www.bitwords.com/", img: "/footerlogos/bitwords.png" },
    { name: "Rush Corporation", url: "https://rushcorporation.com/", img: "/footerlogos/rush.png" },
    { name: "Texas", url: "https://constructionestimatingtexas.com", img: "/footerlogos/Taxes.png" },
    { name: "New York", url: "https://constructionestimatingnewyork.com", img: "/footerlogos/newyork.png" },
    { name: "California", url: "https://constructionestimatingcalifornia.com", img: "/footerlogos/california.png" },
    { name: "Florida", url: "https://estimatingflorida.com", img: "/footerlogos/florida.png" },
    { name: "Lumber", url: "https://lumberstakeoff.us", img: "/footerlogos/lumber.png" },
    { name: "Drywall", url: "https://drywallestimating.us", img: "/footerlogos/drywall.png" },
    { name: "Plumbing", url: "https://www.plumbingtakeoff.com", img: "/footerlogos/plumbing.png" },
    { name: "Electrical", url: "https://electricalestimates.us", img: "/footerlogos/electrical.png" },
    { name: "MEP", url: "https://mepestimate.us", img: "/footerlogos/mep.png" },
    { name: "USA", url: "https://usaconstructiontakeoff.com", img: "/footerlogos/usa.png" },
    { name: "Phoenix", url: "https://phoenixestimating.com/", img: "/footerlogos/pheonix.png" },
    { name: "Roofing", url: "https://roofingestimators.us/", img: "/footerlogos/roofing.png" }
  ];

  return (
    <div className="py-6 overflow-hidden" style={{ backgroundColor: 'rgb(255, 156, 69)' }}>
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.concat(logos).map((logo, i) => (
          <div key={i} className="flex-shrink-0 mx-6 group">
            <a href={logo.url} target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center w-28 h-20 bg-white/90 rounded-lg hover:bg-white transition-all duration-300 group-hover:scale-105 shadow-sm">
              <img src={logo.img} alt={logo.name} 
                   className="max-w-20 max-h-12 object-contain transition-all duration-300 group-hover:scale-110" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}