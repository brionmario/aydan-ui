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

import {ColorScheme, Style} from '@aydan-ui/themes';
import {Context, createContext} from 'react';

export type ThemeContextValue = {
  /**
   * Defines the current color scheme of the application.
   * It is of type `ColorScheme`, which can be 'light', 'dark', or 'system'.
   *
   * @example
   * 'light': Represents a light color scheme, typically with light backgrounds and dark text.
   *
   * 'dark': Represents a dark color scheme, typically with dark backgrounds and light text.
   *
   * 'system': Represents the system's default color scheme. The actual appearance will depend on the system settings.
   *
   * @defaultValue 'light'
   */
  colorScheme: ColorScheme;
  /**
   * A style comes with its own set of components, animations, icons and more.
   *
   * @remarks
   * `Default`: Has larger inputs, uses lucide-react for icons and tailwindcss-animate for animations.
   *
   * `New York`: Ships with smaller buttons and cards with shadows. It uses icons from Radix Icons.
   *
   * @example
   * ```typescript
   * const style: Style = 'default';
   * ```
   *
   * @defaultValue 'default'
   */
  style?: Style;
};

const ThemeContext: Context<ThemeContextValue | undefined> = createContext<ThemeContextValue | undefined>(undefined);

export default ThemeContext;
