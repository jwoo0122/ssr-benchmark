export default async function Page() {
  const { title } = await (
    await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      // Disable caching to demonstrate that the page is re-rendered on every request
      cache: "no-store",
    })
  ).json();

  return <hi>{title}</hi>;
}
