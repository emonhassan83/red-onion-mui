import React, { forwardRef } from "react";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";

const CustomTextField = styled(TextField)(({ theme }) => ({
    background: '#f5f5f5',
    borderRadius: theme.spacing(1),
    '& .MuiOutlinedInput-root': {
        '& fieldset' : {
            border: 'none',
        }
    }
}));

export const OnionTextField = (props, ref) => {
  return <CustomTextField id="outlined-basic" {...props} inputRef={ref} />;
};

export default forwardRef(OnionTextField);
