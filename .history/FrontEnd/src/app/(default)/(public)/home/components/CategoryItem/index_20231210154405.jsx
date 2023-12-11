// CategoryItem.jsx
import Link from 'next/link';
import '../../../../../../styles/CategoryItem.scss';

const CategoryItem = ({ category }) => {
  const imageSource = category.image
    ? category.image
    : `${imageFolder}/default-image.png`;

  return (
    <div className="rounded-lg category-item">
      <Link
        href={`/book-by-category?value=${category?.label}`}
        className="h-[140px] block"
      >
        <img
          src={imageSource}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </Link>
      <span className="absolute z-10 text-white bottom-5 left-5">
        {category?.label}
      </span>
    </div>
  );
};

export default CategoryItem;
