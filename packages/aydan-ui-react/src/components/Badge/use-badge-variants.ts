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

import {cva} from 'class-variance-authority';
import {ClassProp} from 'class-variance-authority/dist/types';
import useTheme from '../../theme/use-theme';

export type BadgeVariants = (props?: (Record<string, unknown> & ClassProp) | undefined) => string;

const useBadgeVariants = (): BadgeVariants => {
  const {style} = useTheme();

  if (style === 'new-york') {
    return cva(
      'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      {
        defaultVariants: {
          variant: 'default',
        },
        variants: {
          variant: {
            default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
            destructive: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
            outline: 'text-foreground',
            secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
          },
        },
      },
    );
  }

  return cva(
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    {
      defaultVariants: {
        variant: 'default',
      },
      variants: {
        variant: {
          default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
          destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
          outline: 'text-foreground',
          secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        },
      },
    },
  );
};

export default useBadgeVariants;
