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

'use client';

import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import {cn} from '@aydan-ui/utils';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
} from 'react';

export type ContextMenuLabelProps = ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean;
};

const ContextMenuLabel: ForwardRefExoticComponent<ContextMenuLabelProps & RefAttributes<HTMLDivElement>> = forwardRef<
  ElementRef<typeof ContextMenuPrimitive.Label>,
  ContextMenuLabelProps
>(
  ({className, inset, ...props}: ContextMenuLabelProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => (
    <ContextMenuPrimitive.Label
      ref={ref}
      className={cn('px-2 py-1.5 text-sm font-semibold text-foreground', inset && 'pl-8', className)}
      {...props}
    />
  ),
);

ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

export default ContextMenuLabel;
