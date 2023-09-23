import CardBlog from "@/components/ui/card-blog";
import { showFormattedDate } from "@/lib/utils";
const CardBlogList = () => {
  const datas = [
    {
      id: 1,
      imgUrl:
        "https://www.genatec.com/hs-fs/hubfs/genatec_blog_assets/Blog-2022-005/What%20is%20a%20gaming%20setup_-1.jpg?width=1477&height=831&name=What%20is%20a%20gaming%20setup_-1.jpg",
      title: "The More Important the Work, the More Important the Rest",
      description:
        "Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.",
      date: new Date(),
      category: "tech",
    },
    {
      id: 1,
      imgUrl:
        "https://www.genatec.com/hs-fs/hubfs/genatec_blog_assets/Blog-2022-005/What%20is%20a%20gaming%20setup_-1.jpg?width=1477&height=831&name=What%20is%20a%20gaming%20setup_-1.jpg",
      title: "The More Important the Work, the More Important the Rest",
      description:
        "Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.",
      date: new Date(),
      category: "tech",
    },
    {
      id: 1,
      imgUrl:
        "https://www.genatec.com/hs-fs/hubfs/genatec_blog_assets/Blog-2022-005/What%20is%20a%20gaming%20setup_-1.jpg?width=1477&height=831&name=What%20is%20a%20gaming%20setup_-1.jpg",
      title: "The More Important the Work, the More Important the Rest",
      description:
        "Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.",
      date: new Date(),
      category: "tech",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
      {datas.map((data, index) => (
        <CardBlog {...data} date={showFormattedDate(data.date)} key={index} />
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
