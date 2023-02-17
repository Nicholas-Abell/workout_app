import React from 'react';
import { Box } from '@mui/material';

import BodyPart from './BodyPart';

const HorizontalSrcollBar = ({ data, bodyPart, setBodyPart }) => {
    return (
        <div>
            {
                data.map((item) => {
                    return (
                        <Box key={item.id || item}
                            id={item.id || item}
                            title={item.id || item}
                            m='0 40px'>

                            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                        </Box>
                    )
                })
            }
        </div>
    )
}

export default HorizontalSrcollBar;