import { type LinksFunction, type LoaderFunctionArgs, json } from '@remix-run/cloudflare'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import stylesheet from "~/tailwind.css";
import { UserSession, getUser } from 'app/utils/authentication/session.server'
import { AuthProvider } from 'app/components/authentication/AuthProvider'

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
]

export async function loader({ request, context }: LoaderFunctionArgs) {
  return json({
    user: await getUser(request, context),
  })
}

export default function App() {
  const userInfo = useLoaderData<{ user: UserSession }>()

  return (
    <html lang="en" className="h-full bg-gray-100">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />

        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <AuthProvider user={userInfo.user}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </AuthProvider>
        <LiveReload />
      </body>
    </html>
  );
}
