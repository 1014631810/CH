export function MetricCards() {
  const cards = [
    {
      title: "Title",
      value: "$45,678.90",
      change: "+20% month over month",
    },
    {
      title: "Title",
      value: "2,405",
      change: "+33% month over month",
    },
    {
      title: "Title",
      value: "10,353",
      change: "-8% month over month",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 p-6 border border-[#E0E0E0] rounded-lg bg-white shadow-sm"
        >
          <h3 className="text-base font-semibold text-black">{card.title}</h3>
          <div className="text-[40px] font-semibold leading-[110%] tracking-[-0.8px] text-black">
            {card.value}
          </div>
          <p className="text-base font-medium text-[#828282]">{card.change}</p>
        </div>
      ))}
    </div>
  );
}
