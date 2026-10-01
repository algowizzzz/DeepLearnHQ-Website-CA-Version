// Single source of truth for window globals shared across the new React
// pages and components — avoids "all declarations must have identical
// modifiers" errors from redeclaring these in multiple files.
export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    va?: (...args: unknown[]) => void;
    vaq?: unknown[];
  }
}
