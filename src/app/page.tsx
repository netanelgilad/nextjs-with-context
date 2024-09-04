import { products } from "@wix/stores";
import { StoreProductsCounter } from "./client-comp";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const storeProducts = await products.queryProducts().find();

  return (
    <main>
      <div>
        <p>
          From Server Component: Number of products: {storeProducts.items.length}
        </p>
        <StoreProductsCounter />
      </div>

    </main>
  );
}
