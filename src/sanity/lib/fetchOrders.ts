import { client } from "./client";

export async function getOrders() {
  const query = `*[_type == "order"] {
    _id,
    customerName,
    totalAmount,
    status
  }`;
  return await client.fetch(query);
}
