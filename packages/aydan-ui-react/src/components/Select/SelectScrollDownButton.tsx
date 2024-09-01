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

import * as SelectPrimitive from '@radix-ui/react-select';
import {ChevronDown} from 'lucide-react';
import {cn} from '@aydan-ui/utils';
import {ForwardedRef, forwardRef, ForwardRefExoticComponent, ReactElement, RefAttributes} from 'react';

export type SelectScrollDownButtonProps = SelectPrimitive.SelectScrollDownButtonProps;

const SelectScrollDownButton: ForwardRefExoticComponent<SelectScrollDownButtonProps & RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, SelectScrollDownButtonProps>(
    ({className, ...props}: SelectScrollDownButtonProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => (
      <SelectPrimitive.ScrollDownButton
        ref={ref}
        className={cn('flex cursor-default items-center justify-center py-1', className)}
        {...props}
      >
        <ChevronDown className="h-4 w-4" />
      </SelectPrimitive.ScrollDownButton>
    ),
  );

SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

export default SelectScrollDownButton;
