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

import {ChevronLeft, ChevronRight} from 'lucide-react';
import {DayPicker} from 'react-day-picker';
import {ComponentProps, ReactElement} from 'react';
import {cn} from '@aydan-ui/utils';
import useButtonVariants, {ButtonVariants} from '../Button/use-button-variants';

export type CalendarProps = ComponentProps<typeof DayPicker>;

const IconLeft = ({...props}: ComponentProps<'svg'>): ReactElement => <ChevronLeft className="h-4 w-4" {...props} />;

const IconRight = ({...props}: ComponentProps<'svg'>): ReactElement => <ChevronRight className="h-4 w-4" {...props} />;

const Calendar = ({className, classNames, showOutsideDays = true, ...props}: CalendarProps): ReactElement => {
  const buttonVariants: ButtonVariants = useButtonVariants();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(buttonVariants({variant: 'ghost'}), 'h-9 w-9 p-0 font-normal aria-selected:opacity-100'),
        day_disabled: 'text-muted-foreground opacity-50',
        day_hidden: 'invisible',
        day_outside:
          'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        day_range_end: 'day-range-end',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        head_cell: 'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
        head_row: 'flex',
        month: 'space-y-4',
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(buttonVariants({variant: 'outline'}), 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'),
        nav_button_next: 'absolute right-1',
        nav_button_previous: 'absolute left-1',
        row: 'flex w-full mt-2',
        table: 'w-full border-collapse space-y-1',
        ...classNames,
      }}
      components={{
        IconLeft,
        IconRight,
      }}
      {...props}
    />
  );
};

Calendar.displayName = 'Calendar';

export default Calendar;
