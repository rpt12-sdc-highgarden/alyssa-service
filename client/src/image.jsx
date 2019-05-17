import React from 'react';
import StarRatings from 'react-star-ratings';

const { styled } = window;

const BookCover = styled.img`
  width: 150px;
  height: 200px;
`;

const PreviewWrapper = styled.div`
  padding: 10px;
  text-align: center;
`

const WantToRead = styled.button`
  width: 110px;
  background-color: #409D69;
  color: #fff;
  font-size: inherit;
  -webkit-font-smoothing: antialiased;
  height: 28px;
  padding: 6px 0 6px 8px;
  box-sizing: border-box;
  border: 0;
  cursor: pointer;
  display: block;
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: auto;
  text-align: inherit;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  border-style: solid;
`

const ChoiceButton = styled.div`
  border-width: 0px;
  width: 120px;
  font-size: 13px;
  box-sizing: content-box;
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bold;
  text-align: left;
  word-wrap: normal;
  white-space: nowrap;
  padding: 0;
  margin: 10px 0 0px 10px;
  font-weight: bold;
  display: flex;
`

const Dropdown = styled.button`
  box-sizing: border-box;
  background-color: #409D69;
  color: #fff;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 8px 4px;
  border: 0;
  cursor: pointer;
  display: block;
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: inherit;
  margin: auto;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  border-left: 1px solid #38883d;
  margin-right: -10px;
  width: 27px;
  height: 28px;
  padding: 5px;
`

const BookRateText = styled.div`
  background: transparent;
  border: 0;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  display: block;
  font-size: 11px;
  height: 16px;
  line-height: 14px;
  margin: 0 auto;
  padding: 3px 6px 0 6px;
  width: 100px;
  color: #999999;
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
`

const Preview = styled.a`
  background: url(https://s.gr-assets.com/assets/kindle_preview_button/read.png) no-repeat;
  background-size: 20px 18px;
  display: -moz-inline-stack;
  display: inline-block;
  vertical-align: middle;
  color: #181818;
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  height: 18px;
  padding-left: 25px;
  padding-right: 5px;
  margin-top:15px;
  text-decoration:none;
`
class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.rating = 0;

    this.changeRating = this.changeRating.bind(this);
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
  }

  render() {
    const image = `https://s3-us-west-2.amazonaws.com/sdc-goodreads/book-images/${this.props.image}.jpg`

    return(
      <PreviewWrapper>
        <BookCover src={image} alt='book cover' />
        <ChoiceButton>
          <WantToRead type='button'>Want to Read</WantToRead>
          <Dropdown type='button'>▼</Dropdown>
        </ChoiceButton>
        <BookRateText>Rate this book</BookRateText>
        <StarRatings
          rating={this.state.rating}
          starDimension="18px"
          starSpacing="0px"
          starHoverColor="rgb(245, 166, 35)"
          changeRating={this.changeRating}
        />
        <Preview href="localhost:3004">Preview</Preview>
      </PreviewWrapper>
    );
  }
}

export default Image;