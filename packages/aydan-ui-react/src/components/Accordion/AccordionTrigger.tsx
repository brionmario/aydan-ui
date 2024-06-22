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

import {
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  ForwardRefExoticComponent,
  ForwardedRef,
  RefAttributes,
  forwardRef,
} from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import {ChevronDown, LucideIcon} from 'lucide-react';
import {ChevronDownIcon} from '@radix-ui/react-icons';
import {cn} from '@aydan-ui/utils';
import {IconProps} from '@radix-ui/react-icons/dist/types';
import useTheme from '../../theme/use-theme';

export type AccordionTriggerProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>;

const AccordionTrigger: FC<AccordionTriggerProps> = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({className, children, ...props}: AccordionTriggerProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const {style} = useTheme();

  const Chevron: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>> | LucideIcon =
    style === 'new-york' ? ChevronDownIcon : ChevronDown;

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between py-4',
          style === 'new-york' && 'text-sm',
          'font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <Chevron
          className={cn(
            'h-4 w-4 shrink-0',
            style === 'new-york' && 'text-muted-foreground',
            'transition-transform duration-200',
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export default AccordionTrigger;
