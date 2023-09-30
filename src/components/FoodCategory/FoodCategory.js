import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react';
import TabButtons from '../custom/TabButtons';
import { axiosInstance } from '../../utils/axiosInstance';

const FoodCategory = () => {
    const [value, setValue] = React.useState(0);
    useEffect(()=>{
        const {status, data} = axiosInstance.get('meals');
        console.log(data);
    },[])
    return (
        <Box>
            <Container>
                <Box sx={{
                    maxWidth: 500,
                    mx: "auto",
                }}>
                    <TabButtons value={value} setValue={setValue}/>
                </Box>
            </Container>
        </Box>
    );
};

export default FoodCategory;