import Head from 'next/head'
import GridContainer from '../components/GridContainer';

export default function Home() {

  const list = ['hello','world'];

  return (
    <div>
      <Head>
        <title>GI-Daten</title>
      </Head>
      Willkommen bei GI Daten!!
      <GridContainer items={list} />
    </div>
  )
}
