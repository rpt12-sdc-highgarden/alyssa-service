# Project Name

> The description and metadata module for Goodreads books. Contains a lot of book info, as well as a few interactive elements (ratings, wishlist dropdown)

## Related Projects

  - https://github.com/rpt12-sdc-highgarden/aarushi-service
  - https://github.com/rpt12-sdc-highgarden/anait-service

## Table of Contents

1. [Installing Dependencies](#Installing%20Dependencies)
2. [Usage](#Usage)
3. [Requirements](#requirements)
4. [API Endpoint](#api%20endpoint)

## Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Usage

> For setup, please follow this pattern:

1. `npm run seed` - runs seeding script
2. `npm run build` - compiles webpack into `bundle.js`
3. `npm start`
4. Navigate to [localhost:3004](http://localhost:3004)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 10.15.3

## API
### GET request to /books/:id

Description: Retrieves all books from the database\
Sample Output:
```
If unsuccessful: Status code 400 and the error message
If successful:
{
  _id: unique key,
  title: string,
  author: array,
  description: string,
  ratings: {
    five: number,
    four: number,
    three: number,
    two: number,
    one: number
  },
  reviews: number,
  links: {
    kindle: string,
    amazon: string,
    stores: {
      audible: string,
      barnesAndNoble: string,
      walmart: string,
      apple: string,
      google: string,
      abebooks: string,
      bookDesository: string,
      indigo: string,
      alibris: string,
      betterWorldBooks: string,
      indieBound: string
    }
    worldcat: string
  },
  type: string,
  pages: number,
  publishDate: date,
  publisher: string,
  metadata: {
    originalTitle: string,
    isbn: number,
    isbn13: number,
    asin: string,
    language: string,
    series: {
      name: string,
      url: string
    }
  }
}
```

## POST request to /newbook

Description: Adds one book to the database\
Sample Output:
```
If unsuccessful: Status code 400 and the error message
If successful: Status code 200 and string 'Saved to db!'
```

## PUT request to /updatebook/:id

Description: Updates a book's number of reviews by +1\
Sample Output:
```
If unsuccessful: Status code 400 and the error message
If successful: Status code 200 and string 'Added +1 review count for [book title]: [updated object/document]'
```

## DELETE request to /deletebook/:id

Description: Deletes a book\
Sample Output:
```
If unsuccessful: Status code 400 and the error message
If successful: Status code 200 and string 'Deleted: [deleted book (object/document)]'
```



