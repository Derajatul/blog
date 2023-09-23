"use client";

import CardBlog from "@/components/ui/card-blog";
import { showFormattedDate } from "@/lib/utils";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const apiUrl = "http://localhost:1337/api/titles";

const CardBlogList = () => {
  const { data, error } = useSWR(apiUrl, fetcher);

  if (error)
    return (
      <div className="container mx-auto px-4 max-w-5xl">Gagal memuat data</div>
    );
  if (!data)
    return (
      <div className="container mx-auto px-4 max-w-5xl">Mengambil data...</div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
      {data.data.map((el: any) => (
        <CardBlog
          category={el.attributes.category}
          id={el.id}
          title={el.attributes.title}
          description={el.attributes.description}
          date={showFormattedDate(el.attributes.publishedAt)}
          key={el.id}
        />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main className="container mx-auto px-4 max-w-5xl">
      <CardBlogList />
    </main>
  );
}
