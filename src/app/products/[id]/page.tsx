// type ProductParams = {
//   params: {
//     id: string;
//   };
// };

const Product = async ({ params }: { params: { id: string } }) => {
  return (
    <div className="px-2 py-4">
      Product Page(An example of dynamic route) /product ❌,/product/sndsnj46545
      ✅, /product/5645454125 ✅ <div>Path: {params.id}</div>
    </div>
  );
};

export default Product;

// It automatically recieve route parameters as a props
