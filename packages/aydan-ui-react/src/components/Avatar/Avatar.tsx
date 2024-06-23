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

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import {cn} from '@aydan-ui/utils';
import {forwardRef, ForwardRefExoticComponent, RefAttributes, ForwardedRef} from 'react';

export type AvatarProps = AvatarPrimitive.AvatarProps;

const Avatar: ForwardRefExoticComponent<AvatarProps & RefAttributes<HTMLSpanElement>> = forwardRef<
  HTMLSpanElement,
  AvatarProps
>(({className, ...props}: AvatarProps, ref: ForwardedRef<HTMLSpanElement>) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
    {...props}
  />
));

Avatar.displayName = AvatarPrimitive.Root.displayName;

export default Avatar;
