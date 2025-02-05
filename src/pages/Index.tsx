import { Card } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/MainLayout";
import { Clock, DollarSign, Users, FolderKanban } from "lucide-react";

const stats = [
  {
    title: "Hours Logged",
    value: "164",
    icon: Clock,
    change: "+2.5%",
    changeType: "positive",
  },
  {
    title: "Active Projects",
    value: "12",
    icon: FolderKanban,
    change: "+1",
    changeType: "positive",
  },
  {
    title: "Team Members",
    value: "24",
    icon: Users,
    change: "0",
    changeType: "neutral",
  },
  {
    title: "Payroll Status",
    value: "On Track",
    icon: DollarSign,
    change: "Processing",
    changeType: "neutral",
  },
];

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's what's happening today.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between">
                <stat.icon className="h-5 w-5 text-muted-foreground" />
                <span
                  className={`text-sm ${
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : "text-muted-foreground"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Time Entries</h3>
            <div className="space-y-4">
              {/* Placeholder for time entries */}
              <p className="text-muted-foreground">No recent entries</p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Tasks</h3>
            <div className="space-y-4">
              {/* Placeholder for tasks */}
              <p className="text-muted-foreground">No upcoming tasks</p>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;