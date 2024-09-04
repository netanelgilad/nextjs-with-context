'use client';

import { products } from "@wix/stores";
import { useEffect, useState } from "react";
import { getNumberOfStoreProducts } from "./server-action";

export function StoreProductsCounter() {
    const [storeProductsCount, setStoreProductsCount] = useState(0);
    const [serverActionProductsCount, setServerActionProductsCount] = useState<string | number>('N\\A');

    useEffect(() => {
        products.queryProducts().find().then((storeProducts) => {
            setStoreProductsCount(storeProducts.items.length);
        });
    }, []);

    return <>
        <div>
            <p>
                From Client: Number of products: {storeProductsCount}
            </p>
        </div>

        <div>
            <p>From Server Action: Number of products: {serverActionProductsCount}</p>
            <button onClick={async () => {
                const num = await getNumberOfStoreProducts();
                setServerActionProductsCount(num);
            }}>Get From Server Action</button>
        </div>
    </>;
}