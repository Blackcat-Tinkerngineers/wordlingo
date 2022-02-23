import logo from './logo.svg';
import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client'
import {setContext} from '@apollo/client/link/context';


const httplink =  createHttpLink({
  uri: '/graphql'
})

const authlink= setContext((_,{headers})=>{
  const token =  localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}`: '',
    }
  }
})

const client = new ApolloClient({
  link: authlink.concat(httplink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;