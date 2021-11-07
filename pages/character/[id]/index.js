// import {useRouter} from 'next/router'
import Head from 'next/head'
import fetch from 'node-fetch';

const character = (figure) => {
    // const router = useRouter();
    // const {id} = router.query;
    console.log(figure)
    const character = figure.figure;
    return (
        <div>

            <Head>
                <title>YS-Data - {character.name}</title>
            </Head>
            <div>
            <h2>
                {character.name} ({character.rarity}-Sterne) 
            </h2>
            <table>
            <tbody>
                <tr>
                <th>Geburtstag</th>
                <td>{character.birthday}</td>
                </tr>
                <tr>
                <th>Region</th>
                <td>{character.location}</td>
                </tr>
                <tr>
                <th>Element</th>
                <td>{character.element}</td>
                </tr>
                <tr>
                <th>Waffentyp</th>
                <td>{character.weapon}</td>
                </tr>
                <tr>
                <th>Talentbücher</th>
                <td>{character.talent}</td>
                </tr>
                <tr>
                <th>Wochenboss / Drop</th>
                <td>{character.boss} / {character.boss_drop}</td>
                </tr>
            </tbody>
            </table>
            </div>
            <div>
                <img src={character.imageurl} />
            </div>
        </div>
    );
};

// dynamic page on demand loading
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://yuanshen-api.herokuapp.com/api/v1/figure`,{ 
//     method: 'get', 
//     headers: {
//       'Content-Type': 'application/json',
//       'authorization': 'genshin',
//       'name':context.params.id
//     }
//   });
//   const figure = await res.json();

//   return {
//     props: {
//       figure
//     },
//   }
// }

export const getStaticProps = async (context) => {
    const res = await fetch(`https://yuanshen-api.herokuapp.com/api/v1/figure`,{ 
    method: 'get', 
    headers: {
      'Content-Type': 'application/json',
      'authorization': process.env.SERVICE_API_TOKEN,
      'name':context.params.id
    }
  });
  const figure = await res.json();

  return {
    props: {
      figure
    },
  }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://yuanshen-api.herokuapp.com/api/v1/figures`,{ 
        method: 'get', 
        headers: {
          'Content-Type': 'application/json',
          'authorization': process.env.SERVICE_API_TOKEN
        }
    });
    const resultMap = await res.json();
     const names = resultMap.map(figure => figure.name);
     const paths = names.map(name => ({params: {id:name.toString()}}));
    return {
        paths,
        fallback: false
    }
}

export default character