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
import {ChevronDown} from 'lucide-react';
import {cn} from '@aydan-ui/utils';
import {forwardRef, ForwardRefExoticComponent, RefAttributes, ForwardedRef, ReactElement} from 'react';
import useNavigationMenuTriggerVariants, {NavigationMenuTriggerVariants} from './useNavigationMenuTriggerVariants';

export type NavigationMenuTriggerProps = NavigationMenuPrimitive.NavigationMenuTriggerProps;

const NavigationMenuTrigger: ForwardRefExoticComponent<NavigationMenuTriggerProps & RefAttributes<HTMLButtonElement>> =
  forwardRef<HTMLButtonElement, NavigationMenuTriggerProps>(
    (
      {className, children, ...props}: NavigationMenuTriggerProps,
      ref: ForwardedRef<HTMLButtonElement>,
    ): ReactElement => {
      const navigationMenuTriggerVariants: NavigationMenuTriggerVariants = useNavigationMenuTriggerVariants();

      return (
        <NavigationMenuPrimitive.Trigger
          ref={ref}
          className={cn(navigationMenuTriggerVariants(), 'group', className)}
          {...props}
        >
          {children}{' '}
          <ChevronDown
            className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
            aria-hidden="true"
          />
        </NavigationMenuPrimitive.Trigger>
      );
    },
  );

NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

export default NavigationMenuTrigger;
