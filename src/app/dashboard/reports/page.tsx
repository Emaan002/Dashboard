import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";

// Dummy data for reports
const dummyReports = [
  {
    _id: "1",
    title: "Sales Report January 2025",
    date: "2025-01-31",
    totalSales: 12000,
    ordersCount: 320,
  },
  {
    _id: "2",
    title: "Sales Report February 2025",
    date: "2025-02-01",
    totalSales: 15000,
    ordersCount: 400,
  },
  {
    _id: "3",
    title: "Sales Report March 2025",
    date: "2025-03-01",
    totalSales: 18000,
    ordersCount: 450,
  },
  {
    _id: "4",
    title: "Sales Report april 2025",
    date: "2025-03-01",
    totalSales: 19000,
    ordersCount: 452,
  },
  {
    _id: "5",
    title: "Sales Report May 2025",
    date: "2025-03-01",
    totalSales: 20000,
    ordersCount: 470,
  },
];

export default function ReportsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Reports</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyReports.map((report) => (
          <Card key={report._id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart className="w-6 h-6 text-gray-700" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">{report.title}</CardTitle>
              <p className="text-gray-600 text-sm">Date: {new Date(report.date).toLocaleDateString()}</p>
              <p className="text-gray-600 text-sm">Total Sales: ${report.totalSales.toFixed(2)}</p>
              <p className="text-gray-600 text-sm">Orders: {report.ordersCount}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

