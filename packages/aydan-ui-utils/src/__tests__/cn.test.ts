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

import clsx from 'clsx';
import {twMerge} from 'tailwind-merge';
import cn from '../cn';

jest.mock('clsx');
jest.mock('tailwind-merge');

describe('cn', () => {
  it('should correctly merge class values and return a string', () => {
    const mockClsx: jest.MockedFunction<typeof clsx> = clsx as jest.MockedFunction<typeof clsx>;
    const mockTwMerge: jest.MockedFunction<typeof twMerge> = twMerge as jest.MockedFunction<typeof twMerge>;

    const classValues: string[] = ['class1', 'class2', 'class3'];
    const clsxResult: string = 'class1 class2 class3';
    const twMergeResult: string = 'class1 class2 class3';

    mockClsx.mockReturnValue(clsxResult);
    mockTwMerge.mockReturnValue(twMergeResult);

    const result: string = cn(...classValues);

    expect(mockClsx).toHaveBeenCalledWith(classValues);
    expect(mockTwMerge).toHaveBeenCalledWith(clsxResult);
    expect(result).toBe(twMergeResult);
  });
});
