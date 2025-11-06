export function PeopleList() {
  const people = [
    {
      name: "Helena",
      email: "email@figmasfakedomain.net",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/e263b8d21f482e79891d29910ed0ec75d494e89e?width=96",
    },
    {
      name: "Oscar",
      email: "email@figmasfakedomain.net",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/0456cb6b19eb3b1b0448bdc0820df2e50e7dd2eb?width=96",
    },
    {
      name: "Daniel",
      email: "email@figmasfakedomain.net",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/055b76802ff37f41d78e3a8cbcfa0c022f6f5f4c?width=96",
    },
    {
      name: "Daniel Jay Park",
      email: "email@figmasfakedomain.net",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/cbf5d10e0b7e92eb815651c9590bda159569a4c5?width=96",
    },
    {
      name: "Mark Rojas",
      email: "email@figmasfakedomain.net",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/54061e422cdfba1136c28f342b981fbe79aec582?width=96",
    },
  ];

  return (
    <div className="flex flex-col gap-4 border border-[#E0E0E0] rounded-lg bg-white shadow-sm p-6">
      <h3 className="text-base font-semibold text-black">Title</h3>
      
      <div className="flex flex-col">
        {people.map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-3 rounded-lg"
          >
            <div className="w-12 h-12 rounded-full bg-[#F7F7F7] flex items-center justify-center overflow-hidden">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="text-base font-medium text-black">{person.name}</div>
              <div className="text-base text-[#454545] truncate">{person.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
