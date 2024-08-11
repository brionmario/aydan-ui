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

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import {cn} from '@aydan-ui/utils';
import {ForwardRefExoticComponent, RefAttributes, forwardRef, ForwardedRef, ReactElement} from 'react';

export type RadioGroupProps = RadioGroupPrimitive.RadioGroupProps;

const RadioGroup: ForwardRefExoticComponent<RadioGroupProps & RefAttributes<HTMLDivElement>> = forwardRef<
  HTMLDivElement,
  RadioGroupProps
>(
  ({className, ...props}: RadioGroupProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => (
    <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />
  ),
);

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export default RadioGroup;
