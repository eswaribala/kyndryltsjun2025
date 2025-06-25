class SearchQuery {
  query: string = "";
  filters: string[] = [];
  sortBy?: string;

  toString() {
    return `Query: ${this.query}, Filters: [${this.filters.join(", ")}], Sort: ${this.sortBy}`;
  }
}

class SearchQueryBuilder {
  private query = new SearchQuery();

  setQuery(q: string): this {
    this.query.query = q;
    return this;
  }

  addFilter(filter: string): this {
    this.query.filters.push(filter);
    return this;
  }

  setSortBy(field: string): this {
    this.query.sortBy = field;
    return this;
  }

  build(): SearchQuery {
    return this.query;
  }
}

const query = new SearchQueryBuilder()
  .setQuery("laptops")
  .addFilter("brand:Apple")
  .addFilter("price:<2000")
  .setSortBy("price")
  .build();

console.log(query.toString());
// Output: Query: laptops, Filters: [brand:Apple, price:<2000], Sort: price
