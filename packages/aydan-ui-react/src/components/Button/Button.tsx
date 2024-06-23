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

import {Slot, SlotProps} from '@radix-ui/react-slot';
import {type VariantProps} from 'class-variance-authority';
import {cn} from '@aydan-ui/utils';
import {ButtonHTMLAttributes, ForwardRefExoticComponent, ForwardedRef, RefAttributes, forwardRef} from 'react';
import useButtonVariants, {type ButtonVariants} from './use-button-variants';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<ButtonVariants> {
  asChild?: boolean;
}

const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({className, variant, size, asChild = false, ...props}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const Comp: ForwardRefExoticComponent<SlotProps & RefAttributes<HTMLElement>> | 'button' = asChild ? Slot : 'button';
  const buttonVariants: ButtonVariants = useButtonVariants();

  return <Comp className={cn(buttonVariants({className, size, variant}))} ref={ref} {...props} />;
});

Button.displayName = 'Button';

export default Button;
