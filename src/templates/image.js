import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

export default props => (
  <Layout>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Img fluid={props.data.imageSharp.fluid} />
    </p>
  </Layout>
);

export const query = graphql`
  query($id: String!) {
    imageSharp(id: { eq: $id }) {
      id
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
