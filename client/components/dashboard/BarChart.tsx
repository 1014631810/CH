export function BarChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const yLabels = ["$80,000", "$70,000", "$60,000", "$50,000", "$40,000", "$30,000"];
  const barHeights = [149, 179, 149, 137, 204, 314, 210, 254, 185, 156, 137, 22];

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
        
        {/* Bars */}
        <div className="absolute left-[97px] top-[15px] flex items-end gap-[19px] h-[314px]">
          {barHeights.map((height, i) => (
            <div
              key={i}
              className="w-8 bg-black rounded-t"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>
        
        {/* X-axis labels */}
        <div className="absolute bottom-0 left-[97px] right-0 flex justify-between text-[13px] text-[#828282] text-center pr-[72px]">
          {months.map((month, i) => (
            <div key={i} className="flex-1">{month}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
