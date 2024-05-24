export default async function Page() {
  const data = await fetch('http://localhost:3001/api').then((res) =>
    res.json()
  );

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div className="text-red-500 font-bold">hello mark</div>
    </div>
  );
}
