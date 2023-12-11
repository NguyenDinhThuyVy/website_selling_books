// CategoryItem.jsx
import Link from 'next/link';
import '../../../../../../styles/CategoryItem.scss';

const CategoryItem = ({ category }) => {
  // const folderPath = '../Image';
  // // Tạo mảng các đường dẫn ảnh từ thư mục đã chỉ định
  // const images = Array.from(
  //   { length: 10 },
  //   (_, index) => `${folderPath}/image${index + 1}.jpg`
  // );
  // console.log(images);

  // // Chọn một đường dẫn ảnh ngẫu nhiên từ mảng
  // const randomImage = images[Math.floor(Math.random() * images.length)];
  // // console.log(randomImage);
  return (
    <div className="rounded-lg category-item">
      <Link
        href={`/book-by-category?value=${category?.label}`}
        className="h-[140px] block"
      >
        <img
          src="https://png.pngtree.com/background/20230518/original/pngtree-an-old-book-sitting-on-a-wooden-table-picture-image_2647243.jpg"
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
