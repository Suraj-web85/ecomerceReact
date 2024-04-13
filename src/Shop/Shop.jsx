import React, { useState } from "react";
import PageHeader from "../Components/PageHeader";
import Data from "../products.json";
import ProductCard from "./ProductCard";
// import { Pagination } from "react-bootstrap";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";

const showResult = "  Showing 01 - 12 of 139 Results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setproducts] = useState(Data);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
  //function to change the current page
  const paginate= (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //filter products based on category
  const [selectedCategory, setSelectectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((val) => val.category))];
  const filterItem = (curcat) =>  {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    })
    setSelectectedCategory(curcat);
    setproducts(newItem);
  }
  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      {/* Shop Page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResult}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <ProductCard GridList={GridList} products={currentProducts} />
                </div>

                <Pagination 
                productsPerPage={productsPerPage}
                totalProducts ={products.length}
                paginate={paginate}
                activePage={currentPage} />

              </article>
            </div>
            <div className="col-lg-4 col-12">
              <Search products={products} GridList={GridList}/>
              <ShopCategory 
              filterItem={filterItem} 
              setItem={setproducts}
              menuItems ={menuItems}
              setProducts={setproducts}
              selectedCategory = {selectedCategory} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
