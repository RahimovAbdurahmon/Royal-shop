import {
  AccountCircleOutlined,
  Close,
  PlaceOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import SwiperTime from "../components/SwiperTime/SwiperTime";

const Layout = () => {
  // translate
  const [lng, setLng] = useState("ru");
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  
  return (
    <>
      <header className="header">
        <nav className="border-b-[2px] border-b-gray-100">
          <nav className="nav md:px-[20px] flex items-center max-w-[1200px] justify-between mx-auto px-[35px] sm:px-[80px]">
            <img
              src="src/assets/images/LOGO.png"
              className="w-[100px] lg:w-[150px] rounded-[50%]"
              alt=""
            />
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
              <li className="flex flex-col hover:text-blue-500 items-center gap-[1px]">
                <PlaceOutlined sx={{ fontSize: "35px" }} />
                <p>Душанбе</p>
              </li>
              <li className="flex flex-col hover:text-blue-500 items-center gap-[1px]">
                <AccountCircleOutlined sx={{ fontSize: "35px" }} />
                <p>Войти</p>
              </li>
              <li className="flex flex-col hover:text-blue-500 items-center">
                <ShoppingCartOutlined sx={{ fontSize: "35px" }} />
                <p>Корзина</p>
              </li>
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
        <section className="section">
            <div className="max-w-[1200px] mx-auto p-[20px]">
                <SwiperTime />
            </div>
        </section>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer bg-gray-50">
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
                <p className="cursor-pointer hover:text-blue-500 text-[20px] font-[600]">+992 980 22 76 22</p>
                <p className="cursor-pointer hover:text-blue-500 text-[20px] font-[600]">royal_shop@gmail.com</p>
            </li>
            <li className="flex flex-col gap-[15px]">
                <p className="cursor-pointer hover:text-blue-500 text-[20px] font-[600]">Каталог товаров</p>
                <p className="cursor-pointer hover:text-blue-500 text-[20px] font-[600]">Нотбуки</p>
                <p className="cursor-pointer hover:text-blue-500 text-[20px] font-[600]">Машини</p>
                <p className="cursor-pointer hover:text-blue-500 text-[20px] font-[600]">Стиралное машини</p>
            </li>
            <li className="flex flex-col gap-[15px]">
            <p className="cursor-pointer hover:text-blue-500 text-[20px] font-[600]">Кантакт</p>
            <div className="flex items-center gap-[15px] flex-wrap">
                <img src="src/assets/images/facebook.png" className="rounded-[50%] w-[50px] h-[50px]" alt="" />
                <img src="src/assets/images/instagramm.png" className="rounded-[50%] w-[50px] h-[50px]" alt="" />
                <img src="src/assets/images/telegramm.png" className="rounded-[50%] w-[50px] h-[50px]" alt="" />
            </div>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Layout;