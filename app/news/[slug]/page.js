import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({ params }) {
  const slugParams = await params;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === slugParams.slug
  );

  if (!newsItem) {
    notFound()
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>
          {new Date(newsItem.date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
