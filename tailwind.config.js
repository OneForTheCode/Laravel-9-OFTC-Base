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
                    '50': '#ffe5f9',
                    '100': '#ffccf3',
                    '200': '#ff99e7',
                    '300': '#ff66db',
                    '400': '#ff33cf',
                    '500': '#ff00c3',
                    '600': '#cc009c',
                    '700': '#990075',
                    '800': '#66004e',
                    '900': '#330027'
                },
                secondary: {
                    '50': '#f9ffe5',
                    '100': '#f3ffcc',
                    '200': '#e7ff99',
                    '300': '#dbff66',
                    '400': '#cfff33',
                    '500': '#c3ff00',
                    '600': '#9ccc00',
                    '700': '#759900',
                    '800': '#4e6600',
                    '900': '#273300'
                },
                accent: {
                    '50': '#e5f9ff',
                    '100': '#ccf3ff',
                    '200': '#99e7ff',
                    '300': '#66dbff',
                    '400': '#33cfff',
                    '500': '#00c3ff',
                    '600': '#009ccc',
                    '700': '#007599',
                    '800': '#004e66',
                    '900': '#002733'
                }
            }
        },
    },

    variants: {
        extend: {
            opacity: ['disabled']
        }
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('daisyui')
    ],

    // daisyUI config (optional)
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "ui",
        darkTheme: "dark"
    }
};
