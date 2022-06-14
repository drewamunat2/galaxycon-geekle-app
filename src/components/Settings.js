import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Modal } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';


function Settings(props) {

  const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

  return (
    <>
      <IconButton color="primary" onClick={handleOpen}>
        <SettingsIcon/>
      </IconButton>
    </>
  );
};

export default Settings;