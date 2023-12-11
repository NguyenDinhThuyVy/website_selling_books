import Link from 'next/link';
import '../../../../../../styles/CategoryItem.scss';

const CategoryItem = ({ category, imageFolder }) => {
  const numberOfImages = 10; // Số lượng ảnh bạn muốn tạo
  const images = generateImagePaths(imageFolder, numberOfImages);
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return (
    <>
      <div className="rounded-lg category-item">
        <Link
          href={`/book-by-category?value=${category?.label}`}
          className="h-[140px] block"
        >
          <img
            src={randomImage}
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
