import Link from "next/link";
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-5">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-3">
        <Link href="/dashboard" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded">
          <LayoutDashboard /> Dashboard
        </Link>
        <Link href="/dashboard/products" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded">
          <Package /> Products
        </Link>
        <Link href="/dashboard/orders" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded">
          <ShoppingCart /> Orders
        </Link>
        <Link href="/dashboard/customers" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded">
          <Users /> Customers
        </Link>
        <Link href="/dashboard/reports" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded">
          <BarChart /> Reports
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
