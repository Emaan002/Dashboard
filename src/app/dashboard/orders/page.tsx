
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { GET_ORDERS } from "@/sanity/lib/queries";
import { ShoppingCart } from "lucide-react";

export default async function OrdersPage() {
  const orders = await client.fetch(GET_ORDERS);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Orders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {orders.map((order: { _id: string; customerName: string; totalAmount: number; status: string }) => (
          <Card key={order._id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <ShoppingCart className="w-6 h-6 text-gray-700" />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">Order #{order._id}</CardTitle>
              <p className="text-gray-600 text-sm">Customer: {order.customerName}</p>
              <p className="text-gray-600 text-sm">Total: ${order.totalAmount.toFixed(2)}</p>
              <p className={`text-sm font-medium ${order.status === "Shipped" ? "text-green-600" : "text-red-600"}`}>
                Status: {order.status}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
