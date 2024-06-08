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

/**
 * Represents the color scheme of the application.
 *
 * @remarks
 * This type is used to define the color scheme of the application. It can be 'light', 'dark', or 'system'.
 *
 * 'light': Represents a light color scheme, typically with light backgrounds and dark text.
 *
 * 'dark': Represents a dark color scheme, typically with dark backgrounds and light text.
 *
 * 'system': Represents the system's default color scheme. The actual appearance will depend on the system settings.
 *
 * @example
 * ```typescript
 * const scheme: ColorScheme = 'light';
 * ```
 *
 * @defaultValue 'light'
 */
type ColorScheme = 'light' | 'dark' | 'system';

export default ColorScheme;
