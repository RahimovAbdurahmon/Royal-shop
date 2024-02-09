import { ShoppingCartOutlined } from "@mui/icons-material";
import { Button, Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsInCart } from "../../api/Layout/LayoutApi";

const Cart = () => {
  // translate
  const { t } = useTranslation();

  /// dispatch
  const dispatch = useDispatch();

  /// data product in cart
  const dataProductsInCart = useSelector(
    (store) => store.layout.dataProductInCart
  );
  console.log();
  const isLoading  = useSelector((store) => store.layout.isLoading)
  useEffect(() => {
    dispatch(getProductsInCart());
  }, [dispatch]);
  let skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <main className="main">
        {dataProductsInCart.totalProducts == 0 ? (
          <div className="max-w-[1200px] mx-auto flex flex-col gap-[50px] justify-center w-[100%] items-center text-center">
            <ShoppingCartOutlined sx={{ fontSize: "300px" }} />
            <h1 className="text-[20px] lg:text-[50px] xl:text-[80px] font-[600]">
              {t("cart.title")}
            </h1>
            <Link to={"/"}>
              <Button variant="contained" size="large">
                Back Home
              </Button>
            </Link>{" "}
            <br />
          </div>
        ) : (
          <div className="flex items-center justify-around flex-wrap pt-[50px]">
            {isLoading
              ? skeleton.map((elem) => {
                  return (
                    <div key={elem}>
                      <Skeleton variant="text" width="200px" height="150px" />
                      <Skeleton width="200px" variant="text" height="30px" />
                    </div>
                  );
                })
              : dataProductsInCart[0].productsInCart.map((elem, i) => {
                  return (
                    <div key={i} className="w-[300px]">
                      <img
                        src={`${import.meta.env.VITE_APP_FILES_URL}${
                          elem?.product.image
                        }`}
                        className="w-[300px]"
                        alt=""
                      />
                      <h1 className="text-[22px] font-[600]">{elem.price} c</h1>
                      <h1 className="text-[20px] pb-[20px]">
                        {elem.product.productName}
                      </h1>
                      <Button
                        variant="contained"
                        startIcon={<ShoppingCartOutlined />}
                      >
                        B корзина
                      </Button>
                    </div>
                  );
                })}
          </div>
        )}
      </main>
    </>
  );
};

export default Cart;
