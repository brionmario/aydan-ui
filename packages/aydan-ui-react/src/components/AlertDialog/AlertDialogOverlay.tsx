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

import {ForwardRefExoticComponent, ForwardedRef, RefAttributes, forwardRef} from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import {cn} from '@aydan-ui/utils';

export type AlertDialogOverlayProps = AlertDialogPrimitive.AlertDialogOverlayProps;

const AlertDialogOverlay: ForwardRefExoticComponent<AlertDialogOverlayProps & RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, AlertDialogOverlayProps>(
    ({className, ...props}: AlertDialogOverlayProps, ref: ForwardedRef<HTMLDivElement>) => (
      <AlertDialogPrimitive.Overlay
        className={cn(
          'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          className,
        )}
        {...props}
        ref={ref}
      />
    ),
  );

AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

export default AlertDialogOverlay;
