 /* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  important: true,
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1900px',
      },
      fontFamily: {
        primary: ['NormPro', ...defaultTheme.fontFamily.sans],
        larken: ['Larken'],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: withOpacity('--tw-clr-primary-50'),
          100: withOpacity('--tw-clr-primary-100'),
          200: withOpacity('--tw-clr-primary-200'),
          300: withOpacity('--tw-clr-primary-300'),
          400: withOpacity('--tw-clr-primary-400'),
          500: withOpacity('--tw-clr-primary-500'),
          600: withOpacity('--tw-clr-primary-600'),
          700: withOpacity('--tw-clr-primary-700'),
          800: withOpacity('--tw-clr-primary-800'),
          900: withOpacity('--tw-clr-primary-900'),
        },
        red: {
          // Customize it on globals.css :root
          50: withOpacity('--tw-clr-red-50'),
          100: withOpacity('--tw-clr-red-100'),
          200: withOpacity('--tw-clr-red-200'),
          300: withOpacity('--tw-clr-red-300'),
          400: withOpacity('--tw-clr-red-400'),
          500: withOpacity('--tw-clr-red-500'),
          600: withOpacity('--tw-clr-red-600'),
          700: withOpacity('--tw-clr-red-700'),
          800: withOpacity('--tw-clr-red-800'),
          900: withOpacity('--tw-clr-red-900'),
        },
        orange: {
          // Customize it on globals.css :root
          50: withOpacity('--tw-clr-orange-50'),
          100: withOpacity('--tw-clr-orange-100'),
          200: withOpacity('--tw-clr-orange-200'),
          300: withOpacity('--tw-clr-orange-300'),
          400: withOpacity('--tw-clr-orange-400'),
          500: withOpacity('--tw-clr-orange-500'),
          600: withOpacity('--tw-clr-orange-600'),
          700: withOpacity('--tw-clr-orange-700'),
          800: withOpacity('--tw-clr-orange-800'),
          900: withOpacity('--tw-clr-orange-900'),
          1000: withOpacity('--tw-clr-orange-1000'),
        },
        yellow: {
          // Customize it on globals.css :root
          50: withOpacity('--tw-clr-yellow-50'),
          100: withOpacity('--tw-clr-yellow-100'),
          200: withOpacity('--tw-clr-yellow-200'),
          300: withOpacity('--tw-clr-yellow-300'),
          400: withOpacity('--tw-clr-yellow-400'),
          500: withOpacity('--tw-clr-yellow-500'),
          600: withOpacity('--tw-clr-yellow-600'),
          700: withOpacity('--tw-clr-yellow-700'),
          800: withOpacity('--tw-clr-yellow-800'),
          900: withOpacity('--tw-clr-yellow-900'),
        },
        green: {
          // Customize it on globals.css :root
          50: withOpacity('--tw-clr-green-50'),
          100: withOpacity('--tw-clr-green-100'),
          200: withOpacity('--tw-clr-green-200'),
          300: withOpacity('--tw-clr-green-300'),
          400: withOpacity('--tw-clr-green-400'),
          500: withOpacity('--tw-clr-green-500'),
          600: withOpacity('--tw-clr-green-600'),
          700: withOpacity('--tw-clr-green-700'),
          800: withOpacity('--tw-clr-green-800'),
          900: withOpacity('--tw-clr-green-900'),
        },
        gray: {
          // Customize it on globals.css :root
          50: withOpacity('--tw-clr-gray-50'),
          100: withOpacity('--tw-clr-gray-100'),
          200: withOpacity('--tw-clr-gray-200'),
          300: withOpacity('--tw-clr-gray-300'),
          400: withOpacity('--tw-clr-gray-400'),
          500: withOpacity('--tw-clr-gray-500'),
          600: withOpacity('--tw-clr-gray-600'),
          700: withOpacity('--tw-clr-gray-700'),
          800: withOpacity('--tw-clr-gray-800'),
          900: withOpacity('--tw-clr-gray-900'),
        },

        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
      },
      backgroundImage: {
        banner:
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/banner/banner.png')",
        reviews: 'linear-gradient(270.21deg, #FF511A 0.05%, #FF845E 100.78%)',
      },
      boxShadow: {
        '3xl': '0 4px 32px -8px rgba(157, 57, 0, 0.12)',
        verify: '0px 18px 56px -12px rgba(0, 37, 132, 0.1)',
        headerHandyman: '0px 4px 32px rgba(68, 24, 0, 0.04)',
        headerChat: '0px 12px 32px -12px rgba(126, 30, 0, 0.08)',
      },
    },
  },
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
};
