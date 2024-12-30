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

import fetch, {Response} from 'node-fetch';
import {HttpsProxyAgent} from 'https-proxy-agent';

const baseUrl: string = process.env['COMPONENTS_REGISTRY_URL'] ?? 'https://ui.shadcn.com';
const agent: HttpsProxyAgent<string> | undefined = process.env['https_proxy']
  ? new HttpsProxyAgent(process.env['https_proxy'])
  : undefined;

interface RegistryResponse {
  id: string;
  name: string;
  version: string;
}

export default async function getShadCNRegistry(paths: string[], basePath: string = 'r'): Promise<RegistryResponse[]> {
  try {
    const results: RegistryResponse[] = await Promise.all(
      paths.map(async (path: string): Promise<RegistryResponse> => {
        const response: Response = await fetch(`${baseUrl}/${basePath}/${path}`, {
          agent,
        });
        return (await response.json()) as RegistryResponse;
      }),
    );

    return results;
  } catch (error) {
    throw new Error(`Failed to fetch registry from ${baseUrl}.`);
  }
}
