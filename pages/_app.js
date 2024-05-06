import '../app/globals.css';
import Layout from '@/components/layout/layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }){
    return (
        <Layout>
            <Head>
                <title>NextJS Events</title>
                <meta name='description' content='NextJS Events' />
                <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
            </Head>
            <Component {...pageProps} />                
        </Layout>
    )
}