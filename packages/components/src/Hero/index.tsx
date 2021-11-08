import React from 'react';

import { Flex, Heading } from '@chakra-ui/react';

type TProps = {
    title?: string;
    fontSize?: string;
    height?: string;
    justifyContent?: 'left' | 'center' | 'right';
    colorBegin?: string;
    colorEnd?: string;
};

export default function Hero({ title, fontSize, height, justifyContent, colorBegin, colorEnd }: TProps) {
    const text = title ?? 'Hello World';
    const textSize = fontSize ?? '6vw';
    const sectionHeight = height ?? '100vh';
    const justify = justifyContent ?? 'center';
    const colorA = colorBegin ?? '#7928CA';
    const colorB = colorEnd ?? '#FF0080';
    const gradient = `linear(to-l, ${colorB}, ${colorA})`;

    return (
        <Flex alignItems="center" height={sectionHeight} justifyContent={justify}>
            <Heading bgClip="text" bgGradient={gradient} fontSize={textSize}>
                {text}
            </Heading>
        </Flex>
    );
}
