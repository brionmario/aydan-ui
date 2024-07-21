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

import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import {cn} from '@aydan-ui/utils';
import {forwardRef, ForwardRefExoticComponent, RefAttributes, ForwardedRef, ReactElement} from 'react';

export type NavigationMenuContentProps = NavigationMenuPrimitive.NavigationMenuContentProps;

const NavigationMenuContent: ForwardRefExoticComponent<NavigationMenuContentProps & RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, NavigationMenuContentProps>(
    ({className, ...props}: NavigationMenuContentProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => (
      <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(
          'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
          className,
        )}
        {...props}
      />
    ),
  );

NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

export default NavigationMenuContent;
