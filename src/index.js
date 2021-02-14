import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client';

import "./index.css";
import App from "./App";

const client = new ApolloClient({
	uri: `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_CONTENTFUL_SPACEID}`,
	headers: {
		Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_TOKEN}`,
	},
	cache: new InMemoryCache()
})

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
