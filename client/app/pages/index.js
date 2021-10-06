import Head from 'next/head';
import Header from '../components/header';

export default function Home() {
  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Next Landing</title>
      </Head>
      <Header />
    </>
  );
}
