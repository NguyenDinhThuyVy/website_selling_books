import Link from 'next/link';
import '../../../../../../styles/CategoryItem.scss';

const CategoryItem = ({ category, imageFolder }) => {
  const images = Array.from({ length: 1 }, (_, index) => `${imageFolder}`);
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return (
    <>
      <div className="rounded-lg category-item">
        <Link
          href={`/book-by-category?value=${category?.label}`}
          className="h-[140px] block"
        >
          <img
            src="https://s3.cloud.cmctelecom.vn/tinhte2/2020/03/4931224_5cade000-0ddd-11e7-a84a-2e995a9a3302.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </Link>
        <span className="absolute z-10 text-white bottom-5 left-5">
          {category?.label}
        </span>
      </div>
    </>
  );
};

export default CategoryItem;
