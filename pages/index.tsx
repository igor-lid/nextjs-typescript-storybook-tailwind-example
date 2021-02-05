import Head from 'next/head';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Project example</title>
      </Head>
      <main className="container mx-auto">
        <h1>Main</h1>
      </main>
    </>
  );
};

export default Home;
