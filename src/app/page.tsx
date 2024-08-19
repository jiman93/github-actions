export default function Home() {
  console.log('here', process.env.MY_ENV);

  return (
    <div>
      Circle CI is here yo!!
      <div>Coming from `.env`: {process.env.MY_ENV}</div>
    </div>
  );
}
