import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p>
      A couple hundred images from Unsplash and Jason’s trip to Thailand that
      are all stored on disk at sizes up to 5MB — let’s make Gatsby earn it!
    </p>
    <div
      style={{
        display: 'grid',
        gridGap: '1rem',
        gridTemplateColumns: 'repeat(auto-fill, 100px)',
        justifyContent: 'center',
      }}
    >
      {data.allImageSharp.nodes.map(n => (
        <Link key={n.id} to={`/${n.id}/`} style={{ display: 'block' }}>
          <Img fixed={n.fixed} alt="" />
        </Link>
      ))}
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allImageSharp(limit: 10000) {
      totalCount
      nodes {
        id
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
