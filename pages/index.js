import Head from 'next/head';
import Hero from '../components/Hero/';
import LiveAnywhere from '../components/LiveAnywhere';

// Temp
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../apollo/Queries';
export default function Home() {
  const { loading, errror, data } = useQuery(GET_USERS);
  console.log(data);
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
