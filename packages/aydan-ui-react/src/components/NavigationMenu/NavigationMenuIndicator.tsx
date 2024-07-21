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

export type NavigationMenuIndicatorProps = NavigationMenuPrimitive.NavigationMenuIndicatorProps;

const NavigationMenuIndicator: ForwardRefExoticComponent<NavigationMenuIndicatorProps & RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, NavigationMenuIndicatorProps>(
    ({className, ...props}: NavigationMenuIndicatorProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => (
      <NavigationMenuPrimitive.Indicator
        ref={ref}
        className={cn(
          'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
          className,
        )}
        {...props}
      >
        <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
      </NavigationMenuPrimitive.Indicator>
    ),
  );

NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export default NavigationMenuIndicator;
