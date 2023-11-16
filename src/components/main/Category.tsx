"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface CategoriesProps {
  name: string;
  url: string;
}

const Category = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const categories: CategoriesProps[] = [
    {
      name: "En Çok Oylanan",
      url: "top_rated",
    },
    {
      name: "Popüler",
      url: "popular",
    },
    {
      name: "Yakında Gelecek",
      url: "upcoming",
    },
  ];

  return (
    <div className="w-full md:w-[90%] mx-auto flex justify-between px-2 py-1 text-xl font-medium border-b border-blue-700">
      {categories.map((category, index) => (
        <Link
          className={`${
            category.url === genre ? " text-blue-500 -translate-y-1" : ""
          }`}
          href={`/home/?genre=${category.url}`}
          key={index}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Category;
