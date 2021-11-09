import React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

/**
 * Properties available in ChakraWrapper
 */
export interface ChakraWrapperProps {
    children?: React.ReactNode;
    resetCSS?: boolean;
    theme?: typeof extendTheme;
}

/**
 * Wrap content inside a ChakraProvider object
 *
 * @param params: ChakraWrapperProps
 * @returns React.ReactNode
 */
export const ChakraWrapper = ({ children, resetCSS, theme }: ChakraWrapperProps) => {
    return (
        <ChakraProvider resetCSS={resetCSS} theme={theme}>
            {children}
        </ChakraProvider>
    );
};
