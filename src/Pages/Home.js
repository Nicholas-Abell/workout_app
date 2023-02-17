import React, { useState } from 'react';
import { Box } from '@mui/system';

import HeroBanner from '../Components/HeroBanner';
import SearchExcercises from '../Components/SearchExcercises';
import Exercises from '../Components/Excercises';

const Home = () => {
    return (
        <Box>
            <HeroBanner />
            <SearchExcercises />
            <Exercises />
        </Box>
    )
}

export default Home;