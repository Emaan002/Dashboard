
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { GET_PRODUCTS } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function ProductsPage() {
  const products = await client.fetch(GET_PRODUCTS);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📦 Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: { _id: string; imageUrl: string; name: string; price: number; stock: number }) => (
          <Card key={product._id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-md"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
              <p className="text-gray-600 text-sm">${product.price.toFixed(2)}</p>
              <p className={`text-sm font-medium ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
