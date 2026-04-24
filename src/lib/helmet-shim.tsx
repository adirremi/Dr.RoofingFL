/**
 * Lightweight `react-helmet-async` shim.
 *
 * Under Astro, page metadata is owned by the Astro `BaseLayout`.
 * Any `<SEO />`/`<Helmet />` rendered inside React page components
 * becomes a no-op so we never duplicate meta tags.
 */
import { createElement, type ReactNode } from 'react';

export function Helmet(_props: { children?: ReactNode }) {
  return null;
}

export function HelmetProvider({ children }: { children?: ReactNode }) {
  return createElement('div', null, children);
}

export const HelmetData = class {};
