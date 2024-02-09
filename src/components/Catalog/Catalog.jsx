import { Dialog, DialogBody, Tabs } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { setDialogCatalog, setSubCatalog } from "../../reducer/Layout/Layout";
import { Link } from "react-router-dom";
import { getCategoryById } from "../../api/Layout/LayoutApi";

const Catalog = () => {
  /// dispatch
  const dispatch = useDispatch();

  /// state dialog
  const dialogCatalog = useSelector((store) => store.layout.dialogCatalog);

  /// data catalog
  const catalog = useSelector((store) => store.layout.catalog);

  /// data subCatalog
  const subCatalog = useSelector((store) => store.layout.subCatalog);

  return (
    <div className="max-w-[1200px] bg-white">
      <Dialog
        open={dialogCatalog === "xl" || dialogCatalog === "xxl"}
        size={"xxl"}
        handler={() => dispatch(setDialogCatalog(null))}
        className="bg-white h-[100vh] mt-[150px] fixed w-[100%]"
      >
        <div className="p-[20px] max-w-[1200px] mx-auto w-[100%]">
          <DialogBody className="flex items-start">
            <Tabs value="Автотовары" orientation="vertical">
              <div className="w-[400px] p-[20px] h-[67vh] overflow-auto flex flex-col">
                {catalog.map((elem) => {
                  return (
                    <Link
                      key={elem.id}
                      onMouseEnter={() =>
                        dispatch(setSubCatalog(elem.subCategories))
                      }
                      to={`category/categoryById/${elem.id}`}
                      onClick={() => dispatch(setDialogCatalog(null))}
                    >
                      <div className="flex gap-[10px] cursor-pointer hover:bg-gray-100 p-[15px]">
                        <img
                          src={`${import.meta.env.VITE_APP_FILES_URL}${
                            elem?.categoryImage
                          }`}
                          alt=""
                          className="w-[30px] h-[30px]"
                        />
                        <h1 className="text-[20px] font-[600]">
                          {elem.categoryName}
                        </h1>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </Tabs>
            <div className="flex items-center flex-wrap gap-[50px] p-[20px]">
              {subCatalog.map((elem) => {
                return (
                  <h1
                    key={elem.id}
                    className="text-[20px] font-[600] lg:text-[25px] lg:font-custom cursor-pointer hover:text-blue-600"
                  >
                    {elem.subCategoryName}
                  </h1>
                );
              })}
            </div>
          </DialogBody>
        </div>
      </Dialog>
    </div>
  );
};

export default Catalog;
