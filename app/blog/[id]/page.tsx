export default function BlogPost({ params }: { params: { id: string } }) {
    return <h1>Пост с ID: {params.id}</h1>;
  }
  