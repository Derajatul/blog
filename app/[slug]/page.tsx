const BlogDetail = ({ params }: { params: { slug: string } }) => {
  return (
    <main className="container mx-auto px-4 max-w-5xl">
      <h1>xhello {params.slug}</h1>
    </main>
  );
};
export default BlogDetail;
