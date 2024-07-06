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
  ComponentProps,
  Context,
  createContext,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  RefAttributes,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import {cn} from '@aydan-ui/utils';
import Button from '../Button/Button';
import useCarousel from './useCarousel';

export type CarouselPreviousProps = ComponentProps<typeof Button>;

const CarouselPrevious: ForwardRefExoticComponent<CarouselPreviousProps & RefAttributes<HTMLButtonElement>> =
  forwardRef<HTMLButtonElement, CarouselPreviousProps>(
    (
      {className, variant = 'outline', size = 'icon', ...props}: CarouselPreviousProps,
      ref: ForwardedRef<HTMLButtonElement>,
    ): ReactElement => {
      const {orientation, scrollPrev, canScrollPrev} = useCarousel();

      return (
        <Button
          ref={ref}
          variant={variant}
          size={size}
          className={cn(
            'absolute  h-8 w-8 rounded-full',
            orientation === 'horizontal'
              ? '-left-12 top-1/2 -translate-y-1/2'
              : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
            className,
          )}
          disabled={!canScrollPrev}
          onClick={scrollPrev}
          {...props}
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
      );
    },
  );

CarouselPrevious.displayName = 'CarouselPrevious';

export default CarouselPrevious;
