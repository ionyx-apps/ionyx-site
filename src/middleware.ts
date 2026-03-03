import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // Get the preferred locale from the request
  const acceptLanguage = context.request.headers.get('accept-language') || '';
  const preferredLocale = acceptLanguage.split(',')[0].split('-')[0] || 'en';
  
  // Set the locale in locals for use in components
  context.locals.locale = preferredLocale === 'tr' ? 'tr' : 'en';
  
  return next();
});
