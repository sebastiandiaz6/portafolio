import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                color: 'white',
                lineHeight: 'tall',
                fontSize: '14px',
                m: '0',
                p: '0',
                bg: '#f3f3f3'
            },
        },
    },
})