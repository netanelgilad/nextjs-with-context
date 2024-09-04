"use server";

import { products } from "@wix/stores";

export async function getNumberOfStoreProducts() {
  const storeProdcuts = await products.queryProducts().find();
  return storeProdcuts.items.length;
}
