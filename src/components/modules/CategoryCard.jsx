import Image from "next/image";
import Link from "next/link";

function CategoryCard({ title, name }) {
  return (
    <div className="shadow-[0px_4px_15px_#304ffe4a] rounded-2xl overflow-hidden p-3 ease-in duration-100 my-3 hover:-rotate-6">
      <Link href={`/buy-residential?category=${name}`}>
        <Image
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
          className="rounded-lg"
        />
        <p className="font-normal text-xl text-[#304ffe] text-center mt-3 mb-1">
          {title}
        </p>
      </Link>
    </div>
  );
}

export default CategoryCard;
