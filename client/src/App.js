import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import Game from "./components/Game/Game.js";


const httplink = createHttpLink({
  uri: "/graphql",
});

const authlink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authlink.concat(httplink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          hellow world
        </header>
        <div>
        <Game />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
