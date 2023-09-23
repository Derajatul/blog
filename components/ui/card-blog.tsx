import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type CardBlogProps = {
  imgUrl: string;
  title: string;
  description: string;
  date: string;
  id: number;
  category: string;
};

const CardBlog = ({
  imgUrl,
  title,
  description,
  date,
  id,
  category,
}: CardBlogProps) => {
  return (
    <Link href="example.com">
      <Card>
        <CardHeader>
          <figure className="w-full max-h-[213px] overflow-hidden rounded-lg mb-[21px]">
            <Image
              src={imgUrl}
              alt="placeholder"
              width={500}
              height={500}
              className="bg-cover "
            />
          </figure>
          <CardDescription className="flex gap-4">
            <span>{category}</span>
            <span>|</span>
            <span>{date}</span>
          </CardDescription>
          <CardTitle className="text-2xl mb-[10px] leading-[38px]">
            {title}
          </CardTitle>
          <CardDescription className="text-base leading-7">
            {description}
          </CardDescription>
        </CardHeader>
        {/* <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
      </Card>
    </Link>
  );
};
export default CardBlog;
