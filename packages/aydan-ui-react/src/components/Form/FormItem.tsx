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

import {cn} from '@aydan-ui/utils';
import {forwardRef, HTMLAttributes, useId, ForwardRefExoticComponent, ForwardedRef, ReactElement} from 'react';
import FormItemContext from './FormItemContext';

export type FormItemProps = HTMLAttributes<HTMLDivElement>;

const FormItem: ForwardRefExoticComponent<FormItemProps> = forwardRef<HTMLDivElement, FormItemProps>(
  ({className, ...props}: FormItemProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const id: string = useId();

    return (
      <FormItemContext.Provider value={{id}}>
        <div ref={ref} className={cn('space-y-2', className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);

FormItem.displayName = 'FormItem';

export default FormItem;
