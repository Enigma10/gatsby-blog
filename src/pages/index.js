import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import PostListing from '../components/PostListing';
const IndexPage = ({ data, location }) => {
  return (
  <Layout location={location}>
    <h1>Post</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing  key={node.id} post={node} />
    ))}
  </Layout>
)}

// const PostListing = () => <div> hello</div>
export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(sort:{
      fields:[frontmatter___date]
      order: DESC
    }){
      edges {
        node{
          id
          fileAbsolutePath
          rawMarkdownBody
          timeToRead
          excerpt(pruneLength: 240)
          html
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
            _PARENT
          }
          fields {
            slug
          }
          internal {
            content
            type
            contentDigest
            owner
          }
        }
      }
    }
  }
`;