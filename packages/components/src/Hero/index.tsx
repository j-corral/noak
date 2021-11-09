import React from 'react';

import { Flex, Heading } from '@chakra-ui/react';

type TProps = {
    title?: string;
    fontSize?: string;
    height?: string;
    justifyContent?: 'left' | 'center' | 'right';
    verticalAlign?: 'flex-start' | 'center' | 'flex-end';
    colorBegin?: string;
    colorEnd?: string;
};

export const Hero = ({
    title = 'Hello World',
    fontSize = '6vw',
    height = '100vh',
    justifyContent = 'center',
    verticalAlign = 'center',
    colorBegin = '#7928CA',
    colorEnd = '#FF0080',
}: TProps) => {
    const gradient = `linear(to-l, ${colorEnd}, ${colorBegin})`;

    return (
        <Flex flexDirection="column" justifyContent={verticalAlign} height={height}>
            <Heading bgClip="text" bgGradient={gradient} fontSize={fontSize} display="block" textAlign={justifyContent}>
                {title}
            </Heading>
        </Flex>
    );
};
