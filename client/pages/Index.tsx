import { Navigation } from "@/components/dashboard/Navigation";
import { TabsControl } from "@/components/dashboard/TabsControl";
import { SearchBar } from "@/components/dashboard/SearchBar";
import { MetricCards } from "@/components/dashboard/MetricCards";
import { LineChart } from "@/components/dashboard/LineChart";
import { PeopleList } from "@/components/dashboard/PeopleList";
import { DataTable } from "@/components/dashboard/DataTable";
import { BarChart } from "@/components/dashboard/BarChart";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="px-20 py-8">
        <div className="flex items-center justify-between mb-8">
          <TabsControl />
          <SearchBar />
        </div>

        <MetricCards />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_515px] gap-8 mt-8">
          <LineChart />
          <PeopleList />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[515px_1fr] gap-8 mt-8">
          <DataTable />
          <BarChart />
        </div>
      </div>
    </div>
  );
}
