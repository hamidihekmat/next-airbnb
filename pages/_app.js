import Nav from '../components/Nav/';
import Footer from '../components/Footer';
import '../styles/styles.css';
import { GlobalStyle } from '../styles/GlobalStyle';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from '../apollo/apollo';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const authRoutes = ['/signup', '/login'];
  const authRoute = authRoutes.includes(pathname);
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <GlobalStyle />
        {!authRoute && <Nav />}
        <Component {...pageProps} />
        {!authRoute && <Footer />}
      </ApolloProvider>
    </Fragment>
  );
}

export default MyApp;
