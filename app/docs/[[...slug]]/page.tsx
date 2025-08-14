export default async function DocsPage({ params }: { params: { slug?: string[] } }) {
  // Если нет slug — грузим "главную" документации
  const query = params.slug ? params.slug.join('/') : 'index';

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
    cache: 'no-store'
  }).then(res => res.json());

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Документация</h1>
      <p>Путь: {query}</p>

      <h2 className="mt-4 font-semibold">Данные с API:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
