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

export type AlertVariants = (props?: (Record<string, unknown> & ClassProp) | undefined) => string;

const useAlertVariants = (): AlertVariants => {
  const {style} = useTheme();

  if (style === 'new-york') {
    return cva(
      'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
      {
        defaultVariants: {
          variant: 'default',
        },
        variants: {
          variant: {
            default: 'bg-background text-foreground',
            destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
          },
        },
      },
    );
  }

  return cva(
    'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
    {
      defaultVariants: {
        variant: 'default',
      },
      variants: {
        variant: {
          default: 'bg-background text-foreground',
          destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
        },
      },
    },
  );
};

export default useAlertVariants;
