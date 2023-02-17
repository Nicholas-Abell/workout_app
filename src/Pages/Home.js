import React, { useState } from 'react';
import { Box } from '@mui/system';

import HeroBanner from '../Components/HeroBanner';
import SearchExcercises from '../Components/SearchExcercises';
import Exercises from '../Components/Excercises';

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [excercises, setExcercises] = useState([]);
    return (
        <Box>
            <HeroBanner />
            <SearchExcercises
                excercises={excercises}
                setExcercises={setExcercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart} />
            <Exercises
                excercises={excercises}
                setExcercises={setExcercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart} />
        </Box>
    )
}

export default Home;