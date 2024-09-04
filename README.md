# Wix SDK Context in NextJS

https://nextjs-with-context.vercel.app/

This app demonstrates how to use the Wix SDK context in a NextJS app.

## Usages

The SDK is used in contextual mode in the following places:

* `page.tsx` - In a server component
* `client-comp.tsx` - In a client component
* `server-action.ts` - In a server action
  
## Boilerplate to enablue SDK context in NextJS

* `middleware.ts` - Add the Wix SDK middleware that handles the wix session cookie
* `instrumentation.ts` - Add the Wix SDK instrumentation that registers the global wix client on the server environment
* `app/layout.tsx` - Add the Wix SDK HOC that registers the global Wix client on the client environment
* `next.config.js` - Enable the experimental instrumentation hook

## Caveats

* Uses the `experimental.instrumentationHook` in `next.config.js` to enable the Wix SDK context in NextJS.
  * Experimental
  * Original intent for monitoring and logging
* Pages that uses any of the Wix SDK methods (directly or transitively in server components) must be explicitly declared as dynamic using `export const dynamic = 'force-dynamic'` in the page component.
  * This is because the Wix SDK context is not available during build time. NextJS doesn't run the instrumentation hook during build time.
  * This is a workaround to prevent the NextJS build from failing. NextJS runs pages during build time to try and generate static pages and bail out to dynamic pages if dynamic functions are used. Using contextual SDK methods without the SDK context being intialized results in a build time error.