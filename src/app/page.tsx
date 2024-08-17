export default function Home() {
  console.log('here', process.env.MY_ENV);

  return (
    <div>
      Yessa
      <div>Coming from `.env`: {process.env.MY_ENV}</div>
    </div>
  );
}
