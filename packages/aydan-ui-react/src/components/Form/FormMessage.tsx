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
import {forwardRef, HTMLAttributes, ForwardRefExoticComponent, ForwardedRef, ReactElement, ReactNode} from 'react';
import useFormField, {UseFormField} from './useFormField';

export type FormMessageProps = HTMLAttributes<HTMLParagraphElement>;

const FormMessage: ForwardRefExoticComponent<FormMessageProps> = forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({className, children, ...props}: FormMessageProps, ref: ForwardedRef<HTMLParagraphElement>): ReactElement | null => {
    const {error, formMessageId}: UseFormField = useFormField();
    const body: ReactNode = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p ref={ref} id={formMessageId} className={cn('text-sm font-medium text-destructive', className)} {...props}>
        {body}
      </p>
    );
  },
);

FormMessage.displayName = 'FormMessage';

export default FormMessage;
