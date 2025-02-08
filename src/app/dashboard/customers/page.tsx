import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

// Dummy data for customers
const dummyCustomers = [
  {
    _id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    status: "Active",
  },
  {
    _id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 (555) 234-5678",
    status: "Inactive",
  },
  {
    _id: "3",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phone: "+1 (555) 345-6789",
    status: "Active",
  },
  {
    _id: "4",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+1 (555) 456-7890",
    status: "Active",
  },
];

export default function CustomersPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">👥 Customers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyCustomers.map((customer) => (
          <Card key={customer._id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-6 h-6 text-gray-700" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">{customer.name}</CardTitle>
              <p className="text-gray-600 text-sm">Email: {customer.email}</p>
              <p className="text-gray-600 text-sm">Phone: {customer.phone}</p>
              <p className={`text-sm font-medium ${customer.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                Status: {customer.status}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
