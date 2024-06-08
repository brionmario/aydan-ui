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

import {RenderResult, render as rtlRender, RenderOptions} from '@testing-library/react';
import {ComponentType, PropsWithChildren, ReactElement} from 'react';
import ThemeProvider from '../src/theme/ThemeProvider';

/**
 * Custom render method to includes things like global context providers, data stores, etc.
 * @see {@link https://testing-library.com/docs/react-testing-library/setup#custom-render} for more info.
 *
 * @param ui - Component to render.
 * @param renderOptions - Render options.
 *
 * @return {RenderResult}
 */
const render = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult => {
  const Wrapper = (props: PropsWithChildren<ComponentType>): ReactElement => {
    const {children} = props;

    return <ThemeProvider>{children}</ThemeProvider>;
  };

  return rtlRender(ui, {wrapper: Wrapper as any, ...options});
};

// re-export everything
export * from '@testing-library/react';
// override render method
export {render};
