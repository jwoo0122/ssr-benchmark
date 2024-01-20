import { json } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, useLoaderData } from "@remix-run/react";

export async function loader() {
  const { title } = await (
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
  ).json();

  return json({ title });
}

export default function App() {
  const { title } = useLoaderData();

  return (
    <html>
      <head></head>
      <body>
        <h1>{title}</h1>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
