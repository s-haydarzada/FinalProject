import { Breadcrumb } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { ProductContext } from "../../../../Contexts/ProductContext";
import CardItem from "../Home/components/CardItem";
import { Pagination } from "antd";

const Shop = () => {
  const { products } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const item = {
    type: "separator",
    separator: ">",
  };
  return (
    <section className="pt-32 pb-12 lg:py-32 flex flex-col overscroll-y-auto scrollbar-hide">
      <Breadcrumb
        className="py-4 px-12"
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: "Products",
          },
        ]}
      />
      <div>
        <div className="px-12 py-20 h-auto">
          <div className="grid grid-cols-3 gap-10">
            <div>
              <form action="" className="w-full">
                <div className="border p-4 mb-5">
                  <h3 class="mb-4 mx-3 text-left text-2xl italic">
                    Technology
                  </h3>
                  <ul class="w-40 text-sm font-medium">
                    <li class="w-full rounded-t-lg">
                      <div class="flex items-center ps-3">
                        <input
                          id="vue-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded"
                        />
                        <label
                          for="vue-checkbox"
                          class="w-full py-3 ms-2 text-sm font-medium"
                        >
                          Out of Stock (27)
                        </label>
                      </div>
                    </li>
                    <li class="w-full rounded-t-lg">
                      <div class="flex items-center ps-3">
                        <input
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded"
                        />
                        <label
                          for="react-checkbox"
                          class="w-full py-3 ms-2 text-sm font-medium"
                        >
                          Stock (21)
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="border p-2 mb-5">
                  <h3 class="mb-4 mx-3 text-left text-2xl italic">Price</h3>
                  <div class="sidebar-list-style">
                    <div class="checkbox-container categories-list sidebar-price-filter flex">
                      <div class="filter-range-from">
                        <span className="mr-1">$</span>
                        <input
                          name="filter.v.price.gte"
                          id="Filter-Price-2"
                          type="number"
                          placeholder="0"
                          min="0"
                          max="110.00"
                        />
                        <label className="mx-2">From</label>
                      </div>
                      <div class="filter-price-range-to">
                        <span className="mr-1">$</span>
                        <input
                          name="filter.v.price.lte"
                          id="Filter-Price-2"
                          type="number"
                          placeholder="110.00"
                          min="0"
                          max="110.00"
                        />
                        <label className="ml-1">To</label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-gray-700 text-white py-3 px-11 mt-4"
                    >
                      Filter
                    </button>
                  </div>
                </div>
                <div className="border p-4 mb-5">
                  <h3 class="mb-4 mx-3 text-left text-2xl italic">Brands</h3>
                  <ul class="w-72 text-sm font-medium">
                    <li class="w-full rounded-t-lg">
                      <div class="flex items-center ps-3">
                        <input
                          id="vue-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded"
                        />
                        <label
                          for="vue-checkbox"
                          class="w-full py-3 ms-2 text-sm text-[#505050]"
                        >
                          Adidas (27)
                        </label>
                      </div>
                    </li>
                    <li class="w-full rounded-t-lg">
                      <div class="flex items-center ps-3">
                        <input
                          id="react-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded"
                        />
                        <label
                          for="react-checkbox"
                          class="w-full py-3 ms-2 text-sm text-[#505050]"
                        >
                          Nike (21)
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            <div className="col-span-2 flex flex-col">
              <div className="p-6 bg-white border">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 text-[20px]">
                    <button>
                      <BsGrid3X3GapFill />
                    </button>
                    <button>
                      <FaList />
                    </button>
                  </div>
                  <div className="product-short">
                    <label for="SortBy" className="mr-3">
                      Sort by
                    </label>
                    <select
                      name="SortBy"
                      id="SortBy"
                      className="outline-none border-neutral-300 focus:border-neutral-300"
                    >
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="border w-full h-full border-gray-300 mt-10 flex flex-wrap">
                {currentProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
                  >
                    {/* Assuming you have a CardItem component */}
                    <CardItem product={prod} />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <Pagination
                  current={currentPage}
                  pageSize={itemsPerPage}
                  total={products.length}
                  onChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
