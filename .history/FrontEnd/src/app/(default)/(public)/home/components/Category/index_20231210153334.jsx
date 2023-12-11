// Category.jsx
// ... (import statements)

const Category = () => {
  const [listCategory, setListCategory] = useState([]);
  const fetchListCategory = async () => {
    const res = await getAllCategory();
    if (res && res?.data?.errCode === 0) {
      setListCategory(res?.data?.categories);
    }
  };
  useEffect(() => {
    fetchListCategory();
  }, []);

  return (
    <div className="mt-5 category-list h-[220px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={6}
        navigation
        grabCursor={'true'}
        pagination={{ clickable: true }}
      >
        {listCategory?.length > 0 &&
          listCategory?.map((category, index) => (
            <CategoryItem
              key={index}
              category={category}
              image={`url-to-image${index + 1}`}
            />
          ))}
      </Swiper>
    </div>
  );
};

export default Category;
