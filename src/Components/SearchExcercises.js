import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fontSize } from "@mui/system";

const SearchExcercises = () => {

    

    return (
        <div>
            <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
                <Typography fontWeight='700' mb='50px' textAlign='center' sx={{ fontSize: { lg: '44px', xs: '30px' } }}>
                    Awsome Excercises You <br />
                    Should Know
                </Typography>
                <div style={{ display: 'flex' }}>
                    <Box position='relative' mb='72px'>
                        <TextField
                            sx={{
                                input: {
                                    fontWeight: '700', border: 'none',
                                    borderRadius: '4px',
                                },
                                width: { lg: '1170px', xs: '350px' },
                                backgroundColor: '#FFF', borderRadius: '40px'
                            }}
                            height='76px' value=''
                            onChange={(e) => { }}
                            placeholder='Search Excercises'
                            type='text' />
                    </Box>
                    <Button className="search-btn"
                        sx={{
                            backgroundColor: '#FF2625',
                            color: '#FFF',
                            textTransform: 'none',
                            width: { lg: '175px', xs: '80px' },
                            fontSize: { lg: '20px', sm: '14px' },
                            height: '56px',
                        }}>
                        Search
                    </Button>
                </div>
            </Stack>
        </div >
    )
}

export default SearchExcercises;