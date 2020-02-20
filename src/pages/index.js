import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Image Processing Benchmarks</h1>
    {data.allImageSharp.nodes.map(n => (
      <div key={n.id}>
        <Link to={`/${n.id}/`}>{n.id}</Link>
      </div>
    ))}
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allImageSharp(limit: 10000) {
      totalCount
      nodes {
        id
      }
    }
  }
`;
