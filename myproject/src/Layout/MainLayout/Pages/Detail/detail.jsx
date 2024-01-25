import React from "react";
import DetailContent from "./components/DetailContent/index";
import DetailReview from './components/DetailReview/index';
import DetailSlider from "./components/DetailSlider";

const Detail = () => {
  // const { id } = useParams();
  // const { products } = useContext(ProductContext);
  // const { addToBasket } = useContext(CartContext);
  // const [singleItem, setSingleItem] = useState([]);

  // const product = products.find((item) => {
  //   return item._id === id;
  // });

  // const imgArray = product.images;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await GetSingleProduct(product._id);
  //       const singleData = res.data;
  //       console.log(singleData);
  //       if (singleData.images && singleData.images.length > 0) {
  //         setSingleItem(singleData);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, [product._id]);

  // // if products is not found

  // if (!singleItem) {
  //   return (
  //     <section className="h-screen flex justify-center items-center">
  //       <Spin />
  //     </section>
  //   );
  // }

  // const { title, description, productPrice, _id } = singleItem;

  return (
    <section className="pt-32 pb-12 lg:py-32 flex items-center flex-col">
      <DetailContent />
      <DetailReview/>
      <DetailSlider/>
    </section>
  );
};

export default Detail;
