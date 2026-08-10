import Layout from '@theme/Layout';
import type { JSX } from 'react';
import ReadPage from '../components/ReadPage';

export default function Read(): JSX.Element {
  return (
    <Layout
      title="Artykuły"
      description="Wybierz coś do poczytania"
    >
      <ReadPage />
    </Layout>
  );
}
