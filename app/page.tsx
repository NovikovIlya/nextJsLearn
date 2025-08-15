import { getDocuments, createDocument } from "./actions";

export default async function HomePage() {
  const documents = await getDocuments(); // запрос на сервере

  return (
    <div>
      <h1>Документы</h1>
      <ul>
        {documents.map((doc: any) => (
          <li key={doc.id}>{doc.title}</li>
        ))}
      </ul>

      <form action={createDocument}>
        <input type="text" name="title" placeholder="Название документа" />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
