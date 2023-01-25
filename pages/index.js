import { fetcher } from "@/lib/api";

export default function Home({ films }) {
  const { data } = films;

  return (
    <>
  
    </>
  )
}


export const getStaticProps = async () => {
  const data = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films/`);
  
  if(!data) {
      return {
          notFound: true,
      }
  }

  return {
      props: {
          films: data,
      }
  }
};