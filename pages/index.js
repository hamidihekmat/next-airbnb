import Head from 'next/head';
import Hero from '../components/Hero/';
import LiveAnywhere from '../components/LiveAnywhere';
export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <LiveAnywhere />
    </>
  );
}
