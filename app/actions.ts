"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const API_URL = "https://689f22053fed484cf87926b0.mockapi.io/products/products";

function checkAuth() {
  const authCookie = cookies().get("auth");
  if (!authCookie || authCookie.value !== "true") {
    throw new Error("Не авторизован");
  }
}

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
  checkAuth();
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
  checkAuth();
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Ошибка удаления товара");

  // Тоже обновляем кеш
  revalidateTag("products");
}


// LOGIN
export async function login() {
  cookies().set("auth", "true");
  redirect("/");
}

// LOGOUT
export async function logout() {
  cookies().delete("auth");
  redirect("/");
}