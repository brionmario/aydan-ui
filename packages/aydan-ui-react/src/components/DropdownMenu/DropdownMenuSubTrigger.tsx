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
import {ChevronRight} from 'lucide-react';
import {cn} from '@aydan-ui/utils';
import {
  forwardRef,
  ElementRef,
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
  ForwardedRef,
} from 'react';

export type DropdownMenuSubTriggerProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
};

const DropdownMenuSubTrigger: ForwardRefExoticComponent<DropdownMenuSubTriggerProps & RefAttributes<HTMLDivElement>> =
  forwardRef<ElementRef<typeof DropdownMenuPrimitive.SubTrigger>, DropdownMenuSubTriggerProps>(
    ({className, inset, children, ...props}: DropdownMenuSubTriggerProps, ref: ForwardedRef<HTMLDivElement>) => (
      <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        className={cn(
          'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
          inset && 'pl-8',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronRight className="ml-auto h-4 w-4" />
      </DropdownMenuPrimitive.SubTrigger>
    ),
  );

DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

export default DropdownMenuSubTrigger;
