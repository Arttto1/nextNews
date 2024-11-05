import { getNewsForYear } from "@/app/lib/news";
import NewsList from "@/components/news-list";

export default async function FilteredNewsPage({params}) {
  const paramsYear = await params;
  const news = getNewsForYear(paramsYear.year);

  console.log(paramsYear)
  return <NewsList news={news} />;
}
