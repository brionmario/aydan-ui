/**
 * MIT License
 *
 * Copyright (c) 2024, Brion Mario
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {PluginAPI, PluginCreator, Config} from 'tailwindcss/types/config';
import tailwindPlugin from 'tailwindcss/plugin';

export type Plugin = {
  config?: Partial<Config> | undefined;
  handler: PluginCreator;
};

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable sort-keys */

const plugin: Plugin = tailwindPlugin(
  ({addBase, theme}: PluginAPI) => {
    // Adding base styles
    addBase({
      ':root': {
        '--border': theme('colors.border'),
        '--input': theme('colors.input'),
        '--ring': theme('colors.ring'),
        '--background': theme('colors.background'),
        '--foreground': theme('colors.foreground'),
        '--primary': theme('colors.primary.DEFAULT'),
        '--primary-foreground': theme('colors.primary.foreground'),
        '--secondary': theme('colors.secondary.DEFAULT'),
        '--secondary-foreground': theme('colors.secondary.foreground'),
        '--destructive': theme('colors.destructive.DEFAULT'),
        '--destructive-foreground': theme('colors.destructive.foreground'),
        '--muted': theme('colors.muted.DEFAULT'),
        '--muted-foreground': theme('colors.muted.foreground'),
        '--accent': theme('colors.accent.DEFAULT'),
        '--accent-foreground': theme('colors.accent.foreground'),
        '--popover': theme('colors.popover.DEFAULT'),
        '--popover-foreground': theme('colors.popover.foreground'),
        '--card': theme('colors.card.DEFAULT'),
        '--card-foreground': theme('colors.card.foreground'),
        '--radius': '0.5rem',
        '--radix-accordion-content-height': '200px',
      },
    });

    // Adding custom keyframes
    addBase({
      '@keyframes accordion-down': {
        from: {height: '0'},
        to: {height: 'var(--radix-accordion-content-height)'},
      },
      '@keyframes accordion-up': {
        from: {height: 'var(--radix-accordion-content-height)'},
        to: {height: '0'},
      },
      '@keyframes caret-blink': {
        '0%,70%,100%': {opacity: '1'},
        '20%,50%': {opacity: '0'},
      },
    });
  },
  {
    darkMode: ['class'],
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
            foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
        },
        borderRadius: {
          xl: 'calc(var(--radius) + 4px)',
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        fontFamily: {
          sans: [
            'var(--font-geist-sans)',
            'ui-sans-serif',
            'system-ui',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
          ],
        },
        keyframes: {
          'accordion-down': {
            from: {height: '0'},
            to: {height: 'var(--radix-accordion-content-height)'},
          },
          'accordion-up': {
            from: {height: 'var(--radix-accordion-content-height)'},
            to: {height: '0'},
          },
          'caret-blink': {
            '0%,70%,100%': {opacity: '1'},
            '20%,50%': {opacity: '0'},
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          'caret-blink': 'caret-blink 1.25s ease-out infinite',
        },
      },
    },
  },
);

export default plugin;
