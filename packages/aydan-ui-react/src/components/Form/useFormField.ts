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

import {FieldError, FieldValues, useFormContext, UseFormGetFieldState, UseFormReturn} from 'react-hook-form';
import {useContext} from 'react';
import FormFieldContext, {FormFieldContextValue} from './FormFieldContext';
import FormItemContext, {FormItemContextValue} from './FormItemContext';

export type FormFieldState = {
  error?: FieldError | undefined;
  invalid: boolean;
  isDirty: boolean;
  isTouched: boolean;
  isValidating: boolean;
};

export type UseFormField = FormFieldContextValue &
  FormFieldState & {
    formDescriptionId: string;
    formItemId: string;
    formMessageId: string;
    id: string;
  };

const useFormField = (): UseFormField => {
  const fieldContext: FormFieldContextValue = useContext(FormFieldContext);
  const itemContext: FormItemContextValue = useContext(FormItemContext);
  const {getFieldState, formState}: UseFormReturn = useFormContext();

  const fieldState: FormFieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const {id} = itemContext;

  return {
    formDescriptionId: `${id}-form-item-description`,
    formItemId: `${id}-form-item`,
    formMessageId: `${id}-form-item-message`,
    id,
    name: fieldContext.name,
    ...fieldState,
  };
};

export default useFormField;
