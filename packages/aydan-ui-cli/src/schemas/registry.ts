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

/* eslint-disable @typescript-eslint/typedef */

import {z} from 'zod';

// TODO: Extract this to a shared package.
export const registryItemTypeSchema = z.enum([
  'registry:style',
  'registry:lib',
  'registry:example',
  'registry:block',
  'registry:component',
  'registry:ui',
  'registry:hook',
  'registry:theme',
  'registry:page',
]);

export const registryItemFileSchema = z.object({
  path: z.string(),
  content: z.string().optional(),
  type: registryItemTypeSchema,
  target: z.string().optional(),
});

export const registryItemTailwindSchema = z.object({
  config: z
    .object({
      content: z.array(z.string()).optional(),
      theme: z.record(z.string(), z.any()).optional(),
      plugins: z.array(z.string()).optional(),
    })
    .optional(),
});

export const registryItemCssVarsSchema = z.object({
  light: z.record(z.string(), z.string()).optional(),
  dark: z.record(z.string(), z.string()).optional(),
});

export const registryItemSchema = z.object({
  name: z.string(),
  type: registryItemTypeSchema,
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(registryItemFileSchema).optional(),
  tailwind: registryItemTailwindSchema.optional(),
  cssVars: registryItemCssVarsSchema.optional(),
  meta: z.record(z.string(), z.any()).optional(),
});

export type RegistryItem = z.infer<typeof registryItemSchema>;

export const registryIndexSchema = z.array(
  registryItemSchema.extend({
    files: z.array(z.union([z.string(), registryItemFileSchema])).optional(),
  }),
);

export const stylesSchema = z.array(
  z.object({
    name: z.string(),
    label: z.string(),
  }),
);

export const registryBaseColorSchema = z.object({
  inlineColors: z.object({
    light: z.record(z.string(), z.string()),
    dark: z.record(z.string(), z.string()),
  }),
  cssVars: z.object({
    light: z.record(z.string(), z.string()),
    dark: z.record(z.string(), z.string()),
  }),
  inlineColorsTemplate: z.string(),
  cssVarsTemplate: z.string(),
});

export const registryResolvedItemsTreeSchema = registryItemSchema.pick({
  dependencies: true,
  devDependencies: true,
  files: true,
  tailwind: true,
  cssVars: true,
});
