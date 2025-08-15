import { getProducts, createProduct, deleteProduct } from "./actions";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      
      <ul className="mb-6 space-y-2">
        {products
          .sort((a: any, b: any) => b.id - a.id) // Sort by id descending
          .map((p: any) => (
          <li key={p.id} className="flex justify-between items-center border-b pb-2">
            <span>{p.title} — ${p.price}</span>
            <form action={deleteProduct.bind(null, p.id)}>
              <button 
                type="submit" 
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Удалить
              </button>
            </form>
          </li>
        ))}
      </ul>

      <form action={createProduct} className="space-y-2 max-w-md">
        <input 
          name="title" 
          placeholder="Название товара" 
          className="border p-2 w-full rounded" 
          required
        />
        <input 
          name="price" 
          type="number" 
          step="0.01"
          placeholder="Цена" 
          className="border p-2 w-full rounded" 
          required
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Создать товар
        </button>
      </form>
    </main>
  );
}
