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

import {cva, type VariantProps} from 'class-variance-authority';
import {cn} from '@aydan-ui/utils';
import {FC, ForwardedRef, HTMLAttributes, PropsWithChildren, forwardRef} from 'react';
import {ClassProp} from 'class-variance-authority/dist/types';
import useTheme from '../../theme/use-theme';

type AlertVariants = (props?: (Record<string, unknown> & ClassProp) | undefined) => string;
export type AlertProps = PropsWithChildren<HTMLAttributes<HTMLDivElement> & VariantProps<AlertVariants>>;

const Alert: FC<AlertProps> = forwardRef<HTMLDivElement, AlertProps>(
  ({className, variant, ...props}: AlertProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {style} = useTheme();

    const alertVariants: AlertVariants = cva(
      cn(
        'relative w-full rounded-lg border',
        style === 'default' && 'p-4 [&>svg~*]:pl-7',
        style === 'new-york' && 'px-4 py-3 text-sm',
        'px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
        style === 'default' && '[&>svg]:text-foreground',
        style === 'new-york' && '[&>svg]:text-foreground [&>svg~*]:pl-7',
      ),
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

    return <div ref={ref} role="alert" className={cn(alertVariants({variant}), className)} {...props} />;
  },
);

Alert.displayName = 'Alert';

export default Alert;
