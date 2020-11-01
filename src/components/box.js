import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function Box() {
  const initialStateValues = {
    name: "",
  };
  const [values, setValues] = useState(initialStateValues);

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const saludar = () => {
    handleOpen();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cajita para saludar
          </Typography>
          <form>
            <div>
              <TextField
                id="name"
                name="name"
                label="Saludar a ..."
                onChange={handleInputChange}
              />
            </div>
          </form>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => saludar()}
            variant="contained"
            color="secondary"
          >
            Confirmar
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Hi {values.name}!</h2>
        </div>
      </Modal>
    </div>
  );
}

export default Box;
