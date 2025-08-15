"use server";



import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from 'next/navigation'

const API_URL = "https://689f22053fed484cf87926b0.mockapi.io/products/products";

// GET
export async function getProducts() {
  const res = await fetch(API_URL, {
    next: { tags: ['products'] }
  });
  if (!res.ok) throw new Error("Ошибка получения товаров");
  return res.json();
}

// POST
export async function createProduct(formData: FormData) {
  const name = formData.get("title");
  

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      title: name?.toString() || '', 
    
    }),
  });

  if (!res.ok) throw new Error("Ошибка создания товара");
  redirect("/");
  // Обновляем страницу
  
}

// DELETE (дополнительно)
export async function deleteProduct(id: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Ошибка удаления товара");
  redirect("/");
  
}