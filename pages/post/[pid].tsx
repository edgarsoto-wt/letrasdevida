import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {getPostData} from '../api/post';

export default function Post({data}) {

    const router = useRouter()
    const { pid } = router.query

    
  return (
    <div >
      <Head>
        <title>Letras de Vida - Post: {pid}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{data.title}</h1>
      <p>{data.description}</p>

      
    </div>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {

  const res = await getPostData();
  const data = await res;
  return {
    props: {data}, // will be passed to the page component as props
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}