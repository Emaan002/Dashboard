export const GET_PRODUCTS = `*[_type == "product"] {
    _id,
    name,
    price,
   "imageUrl": image.asset->url,
    stock
  }`;
  

export const GET_ORDERS = `*[_type == "order"] {
    _id,
    customerName,
    totalAmount,
    status
  }`;
  
  export const GET_CUSTOMERS = `*[_type == "customer"] {
    _id,
    name,
    email,
    phone,
    status
  }`;