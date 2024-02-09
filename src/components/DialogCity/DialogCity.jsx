import { useDispatch, useSelector } from "react-redux";
import { setDialogCity, setNameCity } from "../../reducer/Layout/Layout";
import { Close } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "10px",
  border: "3px solid white",
  boxShadow: 24,
  p: 3,
};

const DialogCity = () => {
  const dialogCity = useSelector((store) => store.layout.dialogCity);
  const dispatch = useDispatch();
  let nameCity = useSelector((store) => store.layout.nameCity);
  //   console.log(nameCity);

  return (
    <div className="max-w-[1200px]">
      <div>
        <Modal
          open={dialogCity}
          onClose={() => dispatch(setDialogCity())}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex items-center justify-between p-[30px] pt-[0]">
              <h1 className="text-[20px] font-[600] lg:text-[25px]">Cities</h1>
              <div onClick={() => dispatch(setDialogCity())}>
                <Close sx={{ fontSize: "25px" }} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[20px]">
              <Button
                size="large"
                variant={nameCity == "Dushanbe" ? "contained" : "outlined"}
                onClick={() => dispatch(setNameCity("Dushanbe"))}
              >
                Dushanbe
              </Button>
              <Button
                size="large"
                onClick={() => dispatch(setNameCity("Kulob"))}
                variant={nameCity == "Kulob" ? "contained" : "outlined"}
              >
                Kulob
              </Button>
              <Button
                size="large"
                onClick={() => dispatch(setNameCity("Darvoz"))}
                variant={nameCity == "Darvoz" ? "contained" : "outlined"}
              >
                Darvoz
              </Button>
              <Button
                size="large"
                onClick={() => dispatch(setNameCity("Badakhshon"))}
                variant={nameCity == "Badakhshon" ? "contained" : "outlined"}
              >
                Badakhshon
              </Button>
              <Button
                size="large"
                onClick={() => dispatch(setNameCity("Khorug"))}
                variant={nameCity == "Khorug" ? "contained" : "outlined"}
              >
                Khorug
              </Button>
              <Button
                size="large"
                onClick={() => dispatch(setNameCity("Khujand"))}
                variant={nameCity == "Khujand" ? "contained" : "outlined"}
              >
                Khujand
              </Button>
              <Button
                size="large"
                onClick={() => dispatch(setNameCity("Norak"))}
                variant={nameCity == "Norak" ? "contained" : "outlined"}
              >
                Norak
              </Button>
              <Button
                size="large"
                onClick={() => dispatch(setNameCity("Muminobod"))}
                variant={nameCity == "Muminobod" ? "contained" : "outlined"}
              >
                Muminobod
              </Button>
              <Button
                size="large"
                onClick={() => dispatch(setNameCity("Khatlon"))}
                variant={nameCity == "Khatlon" ? "contained" : "outlined"}
              >
                Khatlon
              </Button>
              <Button
                size="large"
                onClick={() => dispatch(setNameCity("Firdavsi"))}
                variant={nameCity == "Firdavsi" ? "contained" : "outlined"}
              >
                Firdavsi
              </Button>
              <Button
                size="large"
                onClick={() => dispatch(setNameCity("Rudaki"))}
                variant={nameCity == "Rudaki" ? "contained" : "outlined"}
              >
                Rudaki
              </Button>
              <Button
                size="large"
                onClick={() => dispatch(setNameCity("Aivaj"))}
                variant={nameCity == "Aivaj" ? "contained" : "outlined"}
              >
                Aivaj
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default DialogCity;
