import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fontSize } from "@mui/system";

import { exerciseOptions, fetchData } from '../Utils/fetchData';
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExcercises = ({setExcercises, bodyPart, setBodyPart}) => {

    const [search, setSearch] = useState('');

    const onChangeSearch = (event) => {
        setSearch(event.target.value);
    }

    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartsList', exerciseOptions);
            setBodyPart(['all', ...bodyPartData]);
        }

        fetchExerciseData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const SearchedExcercises = exercisesData.filter(
                (excercise) =>
                    excercise.name.toLowerCase().includes(search)
                    || excercise.target.toLowerCase().includes(search)
                    || excercise.equipment.toLowerCase().includes(search)
                    || excercise.bodyParts.toLowerCase().includes(search)
            );
            setSearch('')
            setExcercises(SearchedExcercises);
            console.log(exercisesData);
        }
    }

    return (
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
                        onChange={onChangeSearch}
                        placeholder='Search Excercises'
                        type='text' />
                </Box>
                <Button
                    onClick={handleSearch}
                    className="search-btn"
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
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollBar data={bodyPart} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    )
}

export default SearchExcercises;