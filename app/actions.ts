"use server";

import { revalidateTag } from "next/cache";

const API_URL = "https://689f22053fed484cf87926b0.mockapi.io/products/products";

// GET
export async function getProducts() {
  const res = await fetch(API_URL, {
    next: { tags: ['products'] } // тег для обновления
  });
  if (!res.ok) throw new Error("Ошибка получения товаров");
  return res.json();
}

// POST
export async function createProduct(formData: FormData) {
  const name = formData.get("title");
  const price = formData.get("price");

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      title: name?.toString() || '',
      price: price ? parseFloat(price.toString()) : 0
    }),
  });

  if (!res.ok) throw new Error("Ошибка создания товара");

  // Обновляем кеш по тегу products
  revalidateTag("products");
}

// DELETE
export async function deleteProduct(id: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Ошибка удаления товара");

  // Тоже обновляем кеш
  revalidateTag("products");
}
