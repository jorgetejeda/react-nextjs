import { AppProps, NextWebVitalsMetric } from 'next/app';
import Layout from '@components/Layout/Layout';
import '../style.css';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }: AppProps) {
  // Providers - Context/Providers, Theme, data
  // [] Layout
  // Addional props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
