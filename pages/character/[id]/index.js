// import {useRouter} from 'next/router'
import fetch from 'node-fetch';

const character = (figure) => {
    // const router = useRouter();
    // const {id} = router.query;
    console.log(figure)
    return (
        <div>
            This is new {figure.figure.name}
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
      'authorization': 'genshin',
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
          'authorization': 'genshin'
        }
    });
    const resultMap = await res.json();
    const figures = resultMap.figures;
     const names = resultMap.map(figure => figure.name);
     const paths = names.map(name => ({params: {id:name.toString()}}));
    return {
        paths,
        fallback: false
    }
}

export default character