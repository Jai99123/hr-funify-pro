
import { Card } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/MainLayout";
import { DollarSign, CreditCard, PiggyBank, ChartPie } from "lucide-react";

const payrollStats = [
  {
    title: "Current Salary",
    value: "$4,500",
    icon: DollarSign,
    change: "Next pay: Apr 30",
    changeType: "neutral",
  },
  {
    title: "YTD Earnings",
    value: "$13,500",
    icon: PiggyBank,
    change: "+12.5%",
    changeType: "positive",
  },
  {
    title: "Tax Deductions",
    value: "$1,380",
    icon: ChartPie,
    change: "25% rate",
    changeType: "neutral",
  },
  {
    title: "Payment Method",
    value: "Direct Deposit",
    icon: CreditCard,
    change: "Active",
    changeType: "positive",
  },
];

const Payroll = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Payroll Dashboard</h1>
          <p className="text-muted-foreground">Manage your payroll and payments</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {payrollStats.map((stat) => (
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
            <h3 className="text-lg font-semibold mb-4">Recent Payments</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">March 2024</p>
                  <p className="text-sm text-muted-foreground">Regular Salary</p>
                </div>
                <p className="font-semibold">$4,500</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">February 2024</p>
                  <p className="text-sm text-muted-foreground">Regular Salary</p>
                </div>
                <p className="font-semibold">$4,500</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Salary Breakdown</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-muted-foreground">Base Salary</p>
                <p className="font-semibold">$4,000</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-muted-foreground">Allowances</p>
                <p className="font-semibold">$500</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-muted-foreground">Deductions</p>
                <p className="font-semibold text-red-500">-$460</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Payroll;
