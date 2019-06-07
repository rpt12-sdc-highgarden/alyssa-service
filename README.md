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

1. Execute schema.sql file
1. `npm run seedMySQL` - runs seeding script
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
{"id":89,"title":"bleeding-edge silver harness","author":"Wade Goyette","description":"Corporis cum qui dolorem sequi porro aut quibusdam. Quod commodi debitis voluptatum. Voluptatibus dolorum sunt reiciendis sed et velit. Cupiditate architecto quibusdam qui aut incidunt voluptatem hic dicta. Mollitia nostrum eius ea. Suscipit aliquid sed illo eius ut non ducimus.\n \rIllum rem saepe excepturi. Reiciendis voluptatum eum ut qui sed quibusdam est nulla placeat. Fuga aut rerum expedita numquam molestiae quae nostrum in sequi. Sit aut autem deleniti. Voluptas a suscipit a quia. Voluptatem odio ipsum odit neque in.\n \rCorporis quidem rem voluptas distinctio officia reprehenderit quia est et. Et possimus iure tempore aspernatur. Eos quidem amet itaque ipsa. Exercitationem consequatur molestiae odit accusamus voluptates ut ullam. Quae non commodi ut velit deserunt vel non. At debitis temporibus et tempora modi suscipit modi asperiores voluptatum.","oneStar":88729,"twoStar":87234,"threeStar":76646,"fourStar":13186,"fiveStar":38402,"reviews":73794,"kindleLink":"http://celestino.name","amazonLink":"http://frieda.biz","worldcatLink":"http://kristin.org","audibleLink":"https://cassie.biz","barnesAndNobleLink":"https://donato.info","walmartLink":"https://sylvester.name","appleLink":"http://amaya.org","googleLink":"http://madonna.name","abebooksLink":"http://hailie.info","bookDepositoryLink":"http://jordane.biz","indigoLink":"https://ana.org","alibrisLink":"http://joanny.biz","betterWorldBooksLink":"https://roger.biz","indieBoundLink":"https://virgie.name","type":"Handcrafted Cotton Sausages","pages":2380,"publishDate":"2019-02-22T08:00:00.000Z","publisher":"Pouros LLC","originalTitle":"bleeding-edge silver harness","ISBN":17014,"ISBN13":3730,"language":"English","imageURL":"https://s3-us-west-2.amazonaws.com/sdc-goodreads/book-images/186.jpg","series_name":"Syrian Arab Republic Streamlined","series_URL":"https://eliza.name"}
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
If successful: Status code 200 and string 'Review count updated!'
```

## DELETE request to /deletebook/:id

Description: Deletes a book\
Sample Output:
```
If unsuccessful: Status code 400 and the error message
If successful: Status code 200 and string 'Row deleted!'
```



