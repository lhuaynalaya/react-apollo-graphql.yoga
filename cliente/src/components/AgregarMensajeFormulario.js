import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

class AgregarMensajeFormulario extends Component {
  state = {
    author: "",
    title: "",
    body: ""
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ 
      [name]: value 
    });
  };

  render() {
    const variables = Object.keys(this.state);
    return (
      <div>
      <h2> Aplicacion con React - Apollo Client y GraphQL - Yoga </h2>
        {variables.map((field, index) => (
          <p>
            <input
              key={ index }
              placeholder={field}
              name={field}
              onChange={e => this.handleChange(e)}
              value={this.state[field]}
            />
          </p>
        ))}
        <Mutation
          mutation={ADD_MESSAGE}
          variables={this.state}
          refetchQueries={() => [{ query: GET_MESSAGES }]}
        >
          {addMessage => <button onClick={addMessage}>Add Message</button>}
        </Mutation>
      </div>
    );
  }
}

export default AgregarMensajeFormulario;

const GET_MESSAGES = gql`
  {
    messages {
      body
    }
  }
`;

const ADD_MESSAGE = gql`
  mutation AddMessage($body: String!, $title: String!, $author: String!) {
    addMessage(body: $body, title: $title, author: $author) {
      author
    }
  }
`;
