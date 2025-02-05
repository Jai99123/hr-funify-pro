import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const TimeTracking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    designation: "",
    workLocation: "",
    workingDays: "",
    paidLeaves: "",
    unpaidLeaves: "",
    overtimeHours: "",
    timesheetFrequency: "daily",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically send the data to a backend
    console.log("Form submitted:", formData);
    toast({
      title: "Timesheet Submitted",
      description: "Your timesheet has been successfully submitted.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <MainLayout>
      <div className="space-y-6 p-6">
        <div>
          <h1 className="text-3xl font-bold">Time Tracking</h1>
          <p className="text-muted-foreground">Submit your timesheet details</p>
        </div>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="employeeId">Employee ID</Label>
                  <Input
                    id="employeeId"
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="designation">Designation</Label>
                  <Input
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="workLocation">Work Location</Label>
                  <Input
                    id="workLocation"
                    name="workLocation"
                    value={formData.workLocation}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Time and Leave Details */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="workingDays">Number of Working Days</Label>
                  <Input
                    id="workingDays"
                    name="workingDays"
                    type="number"
                    value={formData.workingDays}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="paidLeaves">Paid Leaves Taken</Label>
                  <Input
                    id="paidLeaves"
                    name="paidLeaves"
                    type="number"
                    value={formData.paidLeaves}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="unpaidLeaves">Unpaid Leave/Loss of Pay</Label>
                  <Input
                    id="unpaidLeaves"
                    name="unpaidLeaves"
                    type="number"
                    value={formData.unpaidLeaves}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="overtimeHours">Overtime Hours</Label>
                  <Input
                    id="overtimeHours"
                    name="overtimeHours"
                    type="number"
                    value={formData.overtimeHours}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="timesheetFrequency">Timesheet Submission Frequency</Label>
                  <Select
                    value={formData.timesheetFrequency}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, timesheetFrequency: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button type="reset" variant="outline">
                Reset
              </Button>
              <Button type="submit">Submit Timesheet</Button>
            </div>
          </form>
        </Card>
      </div>
    </MainLayout>
  );
};

export default TimeTracking;