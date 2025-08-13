export default function DocsPage({ params }: { params: { slug?: string[] } }) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold">Документация</h1>
        {params.slug ? (
          <p>Сегменты URL: {params.slug.join(" / ")}</p>
        ) : (
          <p>Открыт корень /docs</p>
        )}
      </main>
    );
  }
  