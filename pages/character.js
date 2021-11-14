import Head from 'next/head'
import fetch from 'node-fetch';
import FigureList from '../components/FigureList';

const character = (figures) => {
    return (
        <div>
            <Head>
                <title>GI-Data</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
            </Head>
            <FigureList figures={figures.figures} />
        </div>
    );
};

export const getStaticProps = async () => {
    const res = await fetch(`https://yuanshen-api.herokuapp.com/api/v1/figures`,{ 
      method: 'get', 
      headers: {
        'Content-Type': 'application/json',
        'authorization': process.env.SERVICE_API_TOKEN
      }
    });
    const figures = await res.json();
  
    return {
      props: {
        figures
      },
    }
  }

export default character