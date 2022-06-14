import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import {IoIosStats} from "react-icons/io"


function Stats(props) {

  const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

  return (
    <>
      <IconButton color="primary">
        <IoIosStats/>
      </IconButton>
    </>
  );
};

export default Stats;