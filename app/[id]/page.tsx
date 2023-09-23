"use client";

import useSWR from "swr";
import {marked} from "marked";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const markdownToHTML = (markdownText:any) => {
  // Gunakan marked untuk mengubah Markdown menjadi HTML
  const html = marked(markdownText);
  return html;
};

const BlogDetail = ({ params }: { params: { id: string } }) => {
  const { data, error } = useSWR(
    `http://localhost:1337/api/titles/${params.id}`,
    fetcher
  );

  if (error)
    return (
      <div className="container mx-auto px-4 max-w-5xl">Gagal memuat data</div>
    );
  if (!data)
    return (
      <div className="container mx-auto px-4 max-w-5xl">Mengambil data...</div>
    );
  const htmlResult = markdownToHTML(data.data.attributes.content);
  return (
    <main className="container mx-auto px-4 max-w-5xl">
      <h1>{data.data.attributes.title}</h1>
      {htmlResult}
    </main>
  );
};
export default BlogDetail;
