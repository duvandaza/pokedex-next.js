import { FC } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App'}</title>
        <meta name='author' content='Duvan Daza'/>
        <meta name='description' content={`Información sobre el pokemon ${ title }`}/>
        <meta name='keyword' content= {`${ title }, pokemon, pokedex`}/>s
      </Head>

      <Navbar/>

      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>
    
    </>

    
  )
}
