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

export type NavigationMenuViewportProps = NavigationMenuPrimitive.NavigationMenuViewportProps;

const NavigationMenuViewport: ForwardRefExoticComponent<NavigationMenuViewportProps & RefAttributes<HTMLDivElement>> =
  forwardRef<HTMLDivElement, NavigationMenuViewportProps>(
    ({className, ...props}: NavigationMenuViewportProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => (
      <div className={cn('absolute left-0 top-full flex justify-center')}>
        <NavigationMenuPrimitive.Viewport
          className={cn(
            'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    ),
  );

NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

export default NavigationMenuViewport;
