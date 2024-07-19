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

import {OTPInputContext, RenderProps, SlotProps} from 'input-otp';
import {cn} from '@aydan-ui/utils';
import {
  forwardRef,
  useContext,
  ForwardRefExoticComponent,
  RefAttributes,
  ForwardedRef,
  ReactElement,
  PropsWithChildren,
  HTMLAttributes,
} from 'react';

export type InputOTPSlotProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  index: number;
};

const InputOTPSlot: ForwardRefExoticComponent<InputOTPSlotProps & RefAttributes<HTMLDivElement>> = forwardRef<
  HTMLDivElement,
  InputOTPSlotProps
>(({index, className, ...props}: InputOTPSlotProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
  const inputOTPContext: RenderProps = useContext(OTPInputContext);
  const {char, hasFakeCaret, isActive}: SlotProps = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
        isActive && 'z-10 ring-2 ring-ring ring-offset-background',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});

InputOTPSlot.displayName = 'InputOTPSlot';

export default InputOTPSlot;
