import React from 'react';
import Image from './image';
import Description from './description';

const flexStyle = {
  display: 'flex'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.book = {};
    this.state.weightedReviews = 0;

    this.averageReviews = this.averageReviews.bind(this);
    this.calculateBarWidth = this.calculateBarWidth.bind(this);
  }

  componentDidMount() {
    const bookId = window.location.pathname.split('/')[1] || 1;

    fetch(`http://localhost:3004/books/${bookId}`)
      .then((response) => {
        return response.json();
      })
      .then((book) => {
        const date = new Date(book.publishDate);
        const month = date.toLocaleString('en-us', { month: 'long' });
        const day = date.toLocaleString('en-us', { day: 'numeric' });
        const year = date.toLocaleDateString('en-us', { year: 'numeric' });
        const publishDate = month + ' ' + day + 'th ' + year;
        book.ratings = {
          one: book.oneStar,
          two: book.twoStar,
          three: book.threeStar,
          four: book.fourStar,
          five: book.fiveStar
        };
        book.links = {
          kindle: book.kindleLink,
          amazon: book.amazonLink,
          worldcat: book.worldcatLink,
          stores: {
            audible: book.audibleLink,
            barnesAndNoble: book.barnesAndNobleLink,
            walmart: book.walmartLink,
            apple: book.appleLink,
            google: book.googleLink,
            abebooks: book.abebooksLink,
            bookDesository: book.bookDepositoryLink,
            indigo: book.indigoLink,
            alibris: book.alibrisLink,
            betterWorldBooks: book.betterWorldBooksLink,
            indieBound: book.indieBoundLink
          }
        };
        book.metadata = {
          originalTitle: book.originalTitle,
          isbn: book.ISBN,
          isbn13: book.ISBN13,
          language: book.language
        }
        this.setState({
          book: book,
          weightedReviews: this.averageReviews(book.ratings),
          publishDate: publishDate,
          reviewPercents: this.calculateBarWidth(book.ratings)
        });
      });
  }

  averageReviews(total) {
    const totalReviewValue = (total.five * 5) + (total.four * 4) + (total.three * 3) + (total.two * 2) + (total.one * 1);
    const totalReviews = (total.five + total.four + total.three + total.two + total.one);
    return (totalReviewValue / totalReviews);
  }

  calculateBarWidth(r) {
    const reviews = {...r};
    let topReview = '';
    let topReviewNumber = 0;

    // loop through each review type
    for (let key in reviews) {
      // check for greatest value of reviews
      if (reviews[key] > topReviewNumber) {
        topReviewNumber = reviews[key];
        topReview = key;
      }
    }

    // object for state set
    let reviewPercents = {};

    // 2nd loop - reset new objects to percentages for eventual state set
    for (let key in reviews) {
      if (key === topReview) {
        reviewPercents[key] = '100%';
      } else {
        reviewPercents[key] = parseInt(((reviews[key] / reviews[topReview]) * 100)) + '%';
      }
    }

    return reviewPercents;
  }

  render() {
    return (
      <div style={flexStyle}>
        <Image image={this.state.book.imageURL} />
        <Description
          title={this.state.book.title}
          description={this.state.book.description}
          author={this.state.book.author}
          ratings={{...this.state.book.ratings}}
          reviews={this.state.book.reviews}
          weightedReviews={this.state.weightedReviews}
          links={{...this.state.book.links}}
          pages={this.state.book.pages}
          publishDate={this.state.publishDate}
          publisher={this.state.book.publisher}
          metadata={{...this.state.book.metadata}}
          reviewPercents={{...this.state.reviewPercents}}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('description-app')
);