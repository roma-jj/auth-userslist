import React from 'react';
import {Button} from "@mui/material";

const MainButton = ({name, onClick, type, IsStandardStyle}) => {
    const colorTheme = !IsStandardStyle ? '#880e4f' : '#2196f3';

    return <Button
        sx={{
            margin: '25px',
        borderColor: colorTheme,
            color: colorTheme,
            '&:hover': {
                borderColor: colorTheme,
            }
    }}
        variant="outlined"
        onClick={onClick}
        type={type}
    >
        {name}
    </Button>;
};

export default MainButton;