"use server";

// GET — получить список документов
export async function getDocuments() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // чтобы не кэшировалось
  });
  if (!res.ok) throw new Error("Ошибка получения документов");
  return res.json();
}

// POST — создать документ
export async function createDocument(formData: FormData) {
  const title = formData.get("title") as string;

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  if (!res.ok) throw new Error("Ошибка создания документа");
}
