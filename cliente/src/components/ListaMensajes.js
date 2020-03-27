import React from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default () => (
  <Query query={ GET_MESSAGES }>
    {({ data, loading}) => {
      if (loading) return "Cargando...";
      return (
        data &&
        data.messages &&
        data.messages.map(item => <p>{ item.body }</p>)
      );
    }}
  </Query>
);

const GET_MESSAGES = gql`
  {
    messages {
      body
    }
  }
`;
