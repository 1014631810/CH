export function DataTable() {
  const data = [
    { source: "website.net", sessions: "4321", change: "+84%" },
    { source: "website.net", sessions: "4033", change: "-8%" },
    { source: "website.net", sessions: "3128", change: "+2%" },
    { source: "website.net", sessions: "2104", change: "+33%" },
    { source: "website.net", sessions: "2003", change: "+30%" },
    { source: "website.net", sessions: "1894", change: "+15%" },
    { source: "website.net", sessions: "405", change: "-12%" },
  ];

  return (
    <div className="border border-[#E0E0E0] rounded-lg bg-white shadow-sm p-6">
      <h3 className="text-base font-semibold text-black mb-6">Title</h3>
      
      <div className="flex items-center gap-5 mb-4">
        <div className="w-[304px] text-base font-semibold text-[#828282]">Source</div>
        <div className="w-[70px] text-base font-semibold text-[#828282] text-right">Sessions</div>
        <div className="w-[61px] text-base font-semibold text-[#828282] text-right">Change</div>
      </div>
      
      <div className="flex flex-col">
        {data.map((row, index) => (
          <div
            key={index}
            className="flex items-center gap-5 h-12 border-t border-[#E0E0E0]"
          >
            <div className="w-[304px] text-base font-medium text-black">{row.source}</div>
            <div className="w-[70px] text-base text-black text-right">{row.sessions}</div>
            <div className="w-[61px] text-base text-black text-right">{row.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
