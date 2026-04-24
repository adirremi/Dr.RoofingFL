/**
 * Lightweight `react-router-dom` shim used by Astro SSR.
 *
 * Existing React page components (HomePage, LocationPage, etc.) were
 * authored to use react-router for client-side navigation. Under Astro
 * the routing is file-system / build-time, so we replace router-dom
 * with this shim. Links become plain anchors → real navigation between
 * pre-rendered Astro pages.
 */
import { createElement, type ComponentProps, type ReactNode } from 'react';

interface LinkProps extends Omit<ComponentProps<'a'>, 'href'> {
  to: string;
  children?: ReactNode;
  replace?: boolean;
  state?: unknown;
  reloadDocument?: boolean;
  end?: boolean;
}

export function Link({
  to,
  children,
  replace: _replace,
  state: _state,
  reloadDocument: _reloadDocument,
  end: _end,
  ...rest
}: LinkProps) {
  return createElement('a', { href: to, ...rest }, children);
}

interface NavLinkProps extends Omit<LinkProps, 'className'> {
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string);
  end?: boolean;
}

export function NavLink({ to, end, className, children, ...rest }: NavLinkProps) {
  // SSR safe: pretend nothing is active server-side. Active state is
  // re-evaluated client-side after hydration.
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  const isActive = end
    ? pathname === to
    : pathname === to || pathname.startsWith(to + '/');
  const cls =
    typeof className === 'function'
      ? className({ isActive, isPending: false })
      : className;
  return createElement(
    'a',
    { href: to, className: cls, 'aria-current': isActive ? 'page' : undefined, ...rest },
    children
  );
}

export function useLocation() {
  if (typeof window !== 'undefined') {
    return {
      pathname: window.location.pathname,
      hash: window.location.hash,
      search: window.location.search,
      state: null,
      key: 'default',
    };
  }
  return { pathname: '/', hash: '', search: '', state: null, key: 'default' };
}

export function useParams<T extends Record<string, string | undefined> = Record<string, string | undefined>>(): T {
  // Pages that need params under Astro should accept them as props instead.
  // This shim returns an empty object at SSR. On the client we read from URL.
  if (typeof window !== 'undefined') {
    const segs = window.location.pathname.split('/').filter(Boolean);
    const last = segs[segs.length - 1];
    return { slug: last } as unknown as T;
  }
  return {} as T;
}

export function useNavigate() {
  return (to: string | number) => {
    if (typeof to === 'string' && typeof window !== 'undefined') {
      window.location.href = to;
    }
  };
}

export function useSearchParams(): [URLSearchParams, (n: URLSearchParams) => void] {
  const sp =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();
  return [sp, () => undefined];
}

// Routing wrappers — under Astro all routes are static, so these are no-ops.
export function BrowserRouter({ children }: { children: ReactNode }) {
  return createElement('div', null, children);
}
export const HashRouter = BrowserRouter;
export const Router = BrowserRouter;
export const MemoryRouter = BrowserRouter;
export function Routes({ children }: { children: ReactNode }) {
  return createElement('div', null, children);
}
export function Route() {
  return null;
}
export function Outlet() {
  return null;
}
export function Navigate({ to }: { to: string }) {
  if (typeof window !== 'undefined') window.location.href = to;
  return null;
}
