import Head from 'next/head'
import fetch from 'node-fetch';
import FigureList from '../components/FigureList';

export default function Home(figures) {
  return (
    <div>
      <Head>
        <title>YS-Data</title>
      </Head>
      <FigureList figures={figures.figures} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://yuanshen-api.herokuapp.com/api/v1/figures`,{ 
    method: 'get', 
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'genshin'
    }
  });
  const figures = await res.json();

  return {
    props: {
      figures
    },
  }
}
