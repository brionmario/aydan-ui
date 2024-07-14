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

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import {cn} from '@aydan-ui/utils';
import {
  forwardRef,
  ElementRef,
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
  ForwardedRef,
} from 'react';

export type DropdownMenuSubContentProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>;

const DropdownMenuSubContent: ForwardRefExoticComponent<DropdownMenuSubContentProps & RefAttributes<HTMLDivElement>> =
  forwardRef<ElementRef<typeof DropdownMenuPrimitive.SubContent>, DropdownMenuSubContentProps>(
    ({className, ...props}: DropdownMenuSubContentProps, ref: ForwardedRef<HTMLDivElement>) => (
      <DropdownMenuPrimitive.SubContent
        ref={ref}
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      />
    ),
  );

DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

export default DropdownMenuSubContent;
