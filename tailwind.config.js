const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    '50': '#f60000',
                    '100': '#f70000',
                    '200': '#f80000',
                    '300': '#f90000',
                    '400': '#fa0000',
                    '500': '#fb0000',
                    '600': '#fc0000',
                    '700': '#fd0000',
                    '800': '#fe0000',
                    '900': '#ff0000'
                },
                secondary: {
                    '50': '#00f600',
                    '100': '#00f700',
                    '200': '#00f800',
                    '300': '#00f900',
                    '400': '#00fa00',
                    '500': '#00fb00',
                    '600': '#00fc00',
                    '700': '#00fd00',
                    '800': '#00fe00',
                    '900': '#00ff00'
                },
                tertairy: {
                    '50': '#0000f6',
                    '100': '#0000f7',
                    '200': '#0000f8',
                    '300': '#0000f9',
                    '400': '#0000fa',
                    '500': '#0000fb',
                    '600': '#0000fc',
                    '700': '#0000fd',
                    '800': '#0000fe',
                    '900': '##000ff'
                }
            }
        },
    },

    variants: {
        extend: {
            opacity: ['disabled']
        }
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
