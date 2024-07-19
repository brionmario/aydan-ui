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

import * as LabelPrimitive from '@radix-ui/react-label';
import {cn} from '@aydan-ui/utils';
import Label from '../Label/Label';
import {
  forwardRef,
  ElementRef,
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
  ForwardedRef,
  ReactElement,
} from 'react';
import useFormField, {UseFormField} from './useFormField';

export type FormLabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

const FormLabel: ForwardRefExoticComponent<FormLabelProps & RefAttributes<HTMLLabelElement>> = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>
>(({className, ...props}: FormLabelProps, ref: ForwardedRef<HTMLLabelElement>): ReactElement => {
  const {error, formItemId}: UseFormField = useFormField();

  return <Label ref={ref} className={cn(error && 'text-destructive', className)} htmlFor={formItemId} {...props} />;
});

FormLabel.displayName = 'FormLabel';

export default FormLabel;
