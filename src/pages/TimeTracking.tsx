import { Card } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/MainLayout";
import { TimeTrackingForm } from "@/components/time-tracking/TimeTrackingForm";

const TimeTracking = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Time Tracking</h1>
          <p className="text-muted-foreground">Submit your timesheet details</p>
        </div>

        <Card className="p-6">
          <TimeTrackingForm />
        </Card>
      </div>
    </MainLayout>
  );
};

export default TimeTracking;