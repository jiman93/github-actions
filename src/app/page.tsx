export default function Home() {
  console.log('here', process.env.MY_ENV);

  return (
    <div>
      Wohoo
      <div>Coming from `.env`: {process.env.MY_ENV}</div>
    </div>
  );
}
