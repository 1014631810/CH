export function LineChart() {
  const xLabels = ["23 Nov", "24", "25", "26", "27", "28", "29", "30"];
  const yLabels = ["$50,000", "$45,000", "$40,000", "$35,000", "$30,000", "$25,000"];

  return (
    <div className="border border-[#E0E0E0] rounded-lg bg-white shadow-sm p-6">
      <h3 className="text-base font-semibold text-black mb-6">Title</h3>
      
      <div className="relative h-[329px]">
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 685 330">
          <path d="M0 0.5H685" stroke="#E6E6E6"/>
          <path d="M0 55.3333H685" stroke="#E6E6E6"/>
          <path d="M0 110.167H685" stroke="#E6E6E6"/>
          <path d="M0 165H685" stroke="#E6E6E6"/>
          <path d="M0 219.833H685" stroke="#E6E6E6"/>
          <path d="M0 274.667H685" stroke="#E6E6E6"/>
          <path d="M0 329.5H685" stroke="#E6E6E6"/>
        </svg>
        
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 flex flex-col gap-[35px] text-[13px] text-[#828282]">
          {yLabels.map((label, i) => (
            <div key={i}>{label}</div>
          ))}
        </div>
        
        {/* Chart line */}
        <svg className="absolute left-0 top-10 w-full h-[285px]" viewBox="0 0 643 289">
          <path
            d="M640.058 2.00052L598.763 97.4154C598.301 98.4808 597.033 98.9311 596.004 98.3951L558.897 79.0785C557.943 78.582 556.767 78.9285 556.235 79.863L522.081 139.853C521.471 140.924 520.048 141.194 519.088 140.421L478.404 107.655C477.624 107.027 476.5 107.072 475.774 107.761L414.639 165.721C414.149 166.185 413.459 166.371 412.803 166.216L386.561 160.008C386.079 159.894 385.572 159.963 385.138 160.202L252.117 233.297C251.616 233.572 251.021 233.62 250.482 233.428L219.827 222.49C219.285 222.297 218.687 222.346 218.184 222.625L121.853 276.117C121.62 276.246 121.364 276.328 121.099 276.357L25.5 286.813L2 286.813"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        
        {/* Dot indicator */}
        <div className="absolute right-[-18px] top-[87px]">
          <div className="relative">
            <div className="absolute w-12 h-12 rounded-full bg-black opacity-10" />
            <div className="absolute left-[18px] top-[18px] w-3 h-3 rounded-full bg-black" />
          </div>
        </div>
        
        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between text-[13px] text-[#828282] px-6">
          {xLabels.map((label, i) => (
            <div key={i} className={i === 0 ? "w-11" : ""}>{label}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
