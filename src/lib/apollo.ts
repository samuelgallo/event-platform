import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/cl4o6cnfs0sah01xibxhudbjo/master",
  cache: new InMemoryCache(),
});
