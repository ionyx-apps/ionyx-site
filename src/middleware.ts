import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // First, try to get locale from URL path
  const pathname = context.url.pathname;
  let locale = 'en'; // default
  
  if (pathname.startsWith('/tr') && (pathname === '/tr' || pathname.startsWith('/tr/'))) {
    locale = 'tr';
  } else if (pathname.startsWith('/en') && (pathname === '/en' || pathname.startsWith('/en/'))) {
    locale = 'en';
  } else {
    // If no locale in path, fallback to browser language
    const acceptLanguage = context.request.headers.get('accept-language') || '';
    const preferredLocale = acceptLanguage.split(',')[0].split('-')[0] || 'en';
    locale = preferredLocale === 'tr' ? 'tr' : 'en';
  }
  
  // Set the locale in locals for use in components
  context.locals.locale = locale;
  
  return next();
});
