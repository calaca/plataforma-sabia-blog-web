import { GraphQLClient, gql } from 'graphql-request';

const apiEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_API;

const client = new GraphQLClient(apiEndpoint!);

/**
 * Gets all posts
 *
 * @returns {array} All posts
 */
export const getPosts = async () => {
  const query = gql`
    {
      posts {
        id
        thumbnail {
          id
          url
        }
        title
        subtitle
        content
        categories {
          id
          name
        }
        slug
        published_at
      }
    }
  `;

  const { posts } = await client.request(query);

  return posts;
};

/**
 * Gets a single post by slug
 *
 * @returns {object} Post object
 */
export const getPost = async (slug = '') => {
  const query = gql`
    query getPost($slug: String!) {
      posts(where: { slug: $slug }) {
        id
        thumbnail {
          id
          url
        }
        title
        subtitle
        content
        categories {
          id
          name
        }
        slug
        published_at
      }
    }
  `;

  const { posts } = await client.request(query, { slug });

  return posts[0] || null;
};
