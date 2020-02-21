import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

export default props => (
  <Layout>
    <Link to="/">Home</Link>
    <br />
    <Img fixed={props.data.imageSharp.fixed} />
  </Layout>
);

export const query = graphql`
  query($id: String!) {
    imageSharp(id: { eq: $id }) {
      id
      fixed(width: 500, height: 500) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
