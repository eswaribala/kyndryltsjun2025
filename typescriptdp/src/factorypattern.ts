interface APIClient {
  fetchData(): void;
}

class RESTClient implements APIClient {
  fetchData() {
    console.log("Fetching data from REST API...");
  }
}

class GraphQLClient implements APIClient {
  fetchData() {
    console.log("Fetching data from GraphQL API...");
  }
}

class APIClientFactory {
  static getClient(type: "rest" | "graphql"): APIClient {
    if (type === "rest") return new RESTClient();
    return new GraphQLClient();
  }
}

const client = APIClientFactory.getClient("graphql");
client.fetchData();
