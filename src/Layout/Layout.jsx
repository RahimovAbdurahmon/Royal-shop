import {
  AccountCircleOutlined,
  Close,
  PlaceOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Button, Skeleton } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";
import SwiperTime from "../components/SwiperTime/SwiperTime";
import { useDispatch, useSelector } from "react-redux";
import { getPopulatCatalog } from "../api/Layout/LayoutApi";
import { setDialogCity } from "../reducer/Layout/Layout";
import DialogCity from "../components/DialogCity/DialogCity";

const Layout = () => {
  // dispatch
  const dispatch = useDispatch();
  // translate
  const [lng, setLng] = useState("ru");
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  /// path
  const { pathname } = useLocation();

  /// city name
  const nameCity = useSelector((store) => store.layout.nameCity);

  /// data popular
  const dataPopular = useSelector((store) => store.layout.dataPopular);
  const isLoading = useSelector((store) => store.layout.isLoading);
  useEffect(() => {
    dispatch(getPopulatCatalog());
  }, [dispatch]);
  let skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <header className="header">
        <nav className="border-b-[2px] border-b-gray-100 fixed z-10 bg-gray-50 w-[100%] shadow-md">
          <nav className="nav md:px-[20px] flex items-center max-w-[1200px] justify-between mx-auto px-[35px] sm:px-[80px]">
            <Link to={"/"}>
              <img
                src="src/assets/images/LOGO.png"
                className="w-[100px] lg:w-[150px] rounded-[50%]"
                alt=""
              />
            </Link>
            <div className="hidden md:flex">
              <Button
                variant="contained"
                size="large"
                sx={{ padding: "12px 30px", marginRight: "20px" }}
                startIcon={<Close />}
              >
                <span className="hidden lg:block">{t("header.nav.btn")}</span>
              </Button>
              <form className="flex">
                <input
                  type="text"
                  placeholder={t("header.nav.inp")}
                  className="rounded-l-[8px] outline-blue-500 py-[13px] px-[30px] border-[2px] border-gray-300 placeholder:text-[18px] lg:w-[400px] xl:w-[500px]"
                />
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  sx={{ borderRadius: "0px 8px 8px 0px" }}
                >
                  {" "}
                  <Search />{" "}
                </Button>
              </form>
            </div>
            <ul className="flex items-center lg:gap-[20px] sm:gap-[50px] gap-[20px] md:gap-[10px] cursor-pointer">
              <li
                onClick={() => dispatch(setDialogCity())}
                className="flex flex-col hover:text-blue-500 items-center gap-[1px]"
              >
                <PlaceOutlined sx={{ fontSize: "35px" }} />
                <p>{nameCity}</p>
              </li>
              <li className="flex flex-col hover:text-blue-500 items-center gap-[1px]">
                <AccountCircleOutlined sx={{ fontSize: "35px" }} />
                <p>Войти</p>
              </li>
              <Link to={"cart"}>
                <li className="flex flex-col hover:text-blue-500 items-center">
                  <ShoppingCartOutlined sx={{ fontSize: "35px" }} />
                  <p>Корзина</p>
                </li>
              </Link>
            </ul>
          </nav>
          <div className="flex md:hidden px-[40px] pb-[5px] sm:px-[80px]">
            <Button
              variant="contained"
              size="large"
              sx={{ padding: "12px 30px", marginRight: "20px" }}
              startIcon={<Close />}
            >
              <span className="hidden sm:block">{t("header.nav.btn")}</span>
            </Button>
            <form className="flex w-[100%]">
              <input
                type="text"
                placeholder={t("header.nav.inp")}
                className="rounded-[8px] w-[100%] sm:rounded-l-[8px] sm:rounded-r-[0px] outline-blue-500 py-[8px] px-[10px] sm:py-[13px] sm:px-[30px] border-[2px] border-gray-300 placeholder:text-[18px] lg:w-[400px] xl:w-[500px]"
              />
              <div className="hidden sm:flex">
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  sx={{ borderRadius: "0px 8px 8px 0px" }}
                >
                  {" "}
                  <Search />{" "}
                </Button>
              </div>
            </form>
          </div>
        </nav>
      </header>
      <main className="main pt-[180px]">
        {pathname == "/" ? (
          <main>
            <section className="section">
              <div className="max-w-[1200px] mx-auto p-[20px]">
                <SwiperTime />
              </div>
            </section>
            <section className="section1 max-w-[1200px] mx-auto p-[20px]">
              <h1 className="text-[20px] lg:text-[25px] font-[600] lg:font-[700] xl:text-[30px] flex items-center gap-[20px]">
                Популярные категории{" "}
                <img
                  src="src/assets/images/popular.png"
                  className="w-[50px] h-[50px] rounded-[10px]"
                  alt=""
                />
              </h1>
              <div className="grid p-[30px] grid-cols-1 pl-[60px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-[20px]">
                {isLoading
                  ? skeleton.map((elem) => {
                      return (
                        <div key={elem}>
                          <Skeleton
                            variant="text"
                            width="200px"
                            height="150px"
                          />
                          <Skeleton
                            width="200px"
                            variant="text"
                            height="30px"
                          />
                        </div>
                      );
                    })
                  : dataPopular.slice(0, 5).map((elem) => {
                      return (
                        <div key={elem.id}>
                          <img
                            src={`${import.meta.env.VITE_APP_FILES_URL}${
                              elem?.categoryImage
                            }`}
                            className="w-[200px] h-[150px]"
                            alt=""
                          />
                          <h1 className="text-[20px]">{elem.categoryName}</h1>
                        </div>
                      );
                    })}
              </div>
            </section>
            <section className="section1 max-w-[1200px] mx-auto p-[20px]">
              <h1 className="text-[20px] lg:text-[25px] font-[600] lg:font-[700] xl:text-[30px] flex items-center gap-[20px]">
                Самые горячие скидки{" "}
                <img
                  src="src/assets/images/fire.jpg"
                  className="w-[50px] h-[50px]"
                  alt=""
                />
              </h1>
              <div className="grid p-[30px] grid-cols-1 pl-[60px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-[20px]">
                {isLoading
                  ? skeleton.map((elem) => {
                      return (
                        <div key={elem}>
                          <Skeleton
                            variant="text"
                            width="200px"
                            height="150px"
                          />
                          <Skeleton
                            width="200px"
                            variant="text"
                            height="30px"
                          />
                        </div>
                      );
                    })
                  : dataPopular.slice(5, 10).map((elem) => {
                      return (
                        <div key={elem.id}>
                          <img
                            src={`${import.meta.env.VITE_APP_FILES_URL}${
                              elem?.categoryImage
                            }`}
                            className="w-[200px] h-[150px]"
                            alt=""
                          />
                          <h1 className="text-[20px]">{elem.categoryName}</h1>
                        </div>
                      );
                    })}
              </div>
            </section>
          </main>
        ) : (
          <Outlet />
        )}
      </main>
      <footer className="footer bg-gray-100">
        <div className="max-w-[1200px] mx-auto p-[20px] py-[50px]">
          <ul className="flex items-start justify-around gap-[30px] lg:gap-[0] lg:justify-between flex-wrap">
            <li>
              <img
                src="src/assets/images/LOGO.png"
                className="w-[100px] lg:w-[150px] rounded-[50%]"
                alt=""
              />
            </li>
            <li className="flex flex-col gap-[15px]">
              <p className="cursor-pointer hover:text-blue-500 text-[20px] font-[600]">
                +992 980 22 76 22
              </p>
              <p className="cursor-pointer hover:text-blue-500 text-[20px] font-[600]">
                royal_shop@gmail.com
              </p>
            </li>
            <li className="flex flex-col gap-[15px]">
              <p className="cursor-pointer hover:text-blue-500 text-[20px] font-[600]">
                Каталог товаров
              </p>
              <p className="cursor-pointer hover:text-blue-500 text-[20px] font-[600]">
                Нотбуки
              </p>
              <p className="cursor-pointer hover:text-blue-500 text-[20px] font-[600]">
                Машини
              </p>
              <p className="cursor-pointer hover:text-blue-500 text-[20px] font-[600]">
                Стиралное машини
              </p>
            </li>
            <li className="flex flex-col gap-[15px]">
              <p className="cursor-pointer hover:text-blue-500 text-[20px] font-[600]">
                Кантакт
              </p>
              <div className="flex items-center gap-[15px] flex-wrap">
                <img
                  src="src/assets/images/facebook.png"
                  className="rounded-[50%] w-[50px] h-[50px]"
                  alt=""
                />
                <img
                  src="src/assets/images/instagramm.png"
                  className="rounded-[50%] w-[50px] h-[50px]"
                  alt=""
                />
                <img
                  src="src/assets/images/telegramm.png"
                  className="rounded-[50%] w-[50px] h-[50px]"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </footer>
      <DialogCity />
    </>
  );
};

export default Layout;

{
  /* <section className="section1 max-w-[1200px] mx-auto p-[20px]">
              <h1 className="text-[20px] lg:text-[25px] font-[600] lg:font-[700] xl:text-[30px] flex items-center gap-[20px]">
                Без смартфона ни дня{" "}
                <img
                  src="src/assets/images/phone.jpg"
                  className="w-[100px] h-[90px]"
                  alt=""
                />
              </h1>
            </section>
            <section className="section1 max-w-[1200px] mx-auto p-[20px]">
              <h1 className="text-[20px] lg:text-[25px] font-[600] lg:font-[700] xl:text-[30px] flex items-center gap-[20px]">
                Спортивное питание{" "}
                <img
                  src="src/assets/images/dumbell.jpg"
                  className="w-[70px] h-[50px]"
                  alt=""
                />
              </h1>
            </section>
            <section className="section1 max-w-[1200px] mx-auto p-[20px]">
              <h1 className="text-[20px] lg:text-[25px] font-[600] lg:font-[700] xl:text-[30px] flex items-center gap-[20px]">
                Игровые приставки{" "}
                <img
                  src="src/assets/images/jostic.jpg"
                  className="w-[50px] h-[50px]"
                  alt=""
                />
              </h1>
            </section>
            <section className="section1 max-w-[1200px] mx-auto p-[20px]">
              <h1 className="text-[20px] lg:text-[25px] font-[600] lg:font-[700] xl:text-[30px] flex items-center gap-[20px]">
                Стиральные машины{" "}
                <img
                  src="src/assets/images/washing.jpg"
                  className="w-[50px] h-[50px]"
                  alt=""
                />
              </h1>
            </section>
            <section className="section1 max-w-[1200px] mx-auto p-[20px]">
              <h1 className="text-[20px] lg:text-[25px] font-[600] lg:font-[700] xl:text-[30px] flex items-center gap-[20px]">
                Погрузитесь в кино{" "}
                <img
                  src="src/assets/images/tv.jpg"
                  className="w-[70px] h-[50px]"
                  alt=""
                />
              </h1>
            </section> */
}
