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
import {Circle} from 'lucide-react';
import {cn} from '@aydan-ui/utils';
import {
  forwardRef,
  ElementRef,
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
  ForwardedRef,
} from 'react';

export type DropdownMenuRadioItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;

const DropdownMenuRadioItem: ForwardRefExoticComponent<DropdownMenuRadioItemProps & RefAttributes<HTMLDivElement>> =
  forwardRef<ElementRef<typeof DropdownMenuPrimitive.RadioItem>, DropdownMenuRadioItemProps>(
    ({className, children, ...props}: DropdownMenuRadioItemProps, ref: ForwardedRef<HTMLDivElement>) => (
      <DropdownMenuPrimitive.RadioItem
        ref={ref}
        className={cn(
          'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          className,
        )}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <DropdownMenuPrimitive.ItemIndicator>
            <Circle className="h-2 w-2 fill-current" />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
      </DropdownMenuPrimitive.RadioItem>
    ),
  );

DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

export default DropdownMenuRadioItem;
