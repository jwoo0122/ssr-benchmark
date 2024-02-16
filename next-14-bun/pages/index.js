export default function Page({ title }) {
  return <hi>{title}</hi>;
}

export async function getServerSideProps() {
  const { title } = await (
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
  ).json();

  return { props: { title } };
}
