import { gql } from "@apollo/client";

export const getBlogs = gql`
  query GetUserPosts {
    user(username: "stephanmingoes") {
      publication {
        posts {
          _id
          title
          readTime
          views
          dateAdded
          slug
        }
      }
    }
  }
`;
