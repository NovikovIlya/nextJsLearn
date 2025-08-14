// app/api/docs/route.ts
export async function GET() {
    // Здесь может быть логика получения данных из базы
    const docsData = [
      { slug: ['react', 'hooks'], title: 'React Hooks', content: 'Описание хуков...' },
      { slug: ['javascript', 'intro'], title: 'JS Intro', content: 'Введение в JS...' },
    ];
  
    return Response.json(docsData);
  }
  