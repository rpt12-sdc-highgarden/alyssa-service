import React from 'react';
import StarRatings from 'react-star-ratings';
import DescriptionText from './descriptionText';
import RatingsPopup from './ratingsPopup';
import StoreDropdown from './storeDropdown';

const { styled } = window;

const Title = styled.h1`
  margin-bottom: 2px;
  width: 100%;
  font-weight: bold;
  font-family: "Merriweather", "Georgia", serif;
  color: #333333;
  font-size: 24px;
  line-height: 1.25;
  margin-top: 10px;
`

const Author = styled.div`
  color: #333;
  font-size: 16px;
  font-family: "Merriweather", "Georgia", serif;
  margin-bottom: 8px;
`
const RatingsRow = styled.div`
  display: flex;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 12px;
  margin-bottom: 10px;
`

const RatingsDot = styled.span`
  color: lightgrey;
`

const RatingsText = styled.span`
  color: #00635d;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const SummaryArea = styled.div`
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`

const PurchaseRow = styled.div`
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  padding-top: 10px;
`

const GetACopy = styled.h2`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.15;
  text-transform: uppercase;
  color: #382110;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  margin: 4px 0 4px 0;
`

const PurchaseButtons = styled.ul`
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  float: left;
  padding: 0;
  margin: 0;
`

const PurchaseButton = styled.li`
  display: inline;
  list-style: none;
`

const PurchaseLink = styled.a`
  border-radius: 3px;
  border: 1px solid #D6D0C4;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
  -moz-appearance: none;
  -o-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  color: #333333;
  background-color: #F4F1EA;
  line-height: 1;
  padding: 8px 12px;
  margin-right: 8px;
  margin-top: 8px;
`

const Clear = styled.div`
  clear: both;
  display: block;
  height: 0;
  margin: 0;
  font-size: 1px;
  line-height: 0;
`

const MetaDiv = styled.div`
  padding: 5px 0;
  font-size: 12px;
  color: #333;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  line-height: 18px;
`

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }

    this.toggle = this.toggle.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  toggle() {
    this.setState((state) => {
      return ({
        isOpen: !state.isOpen
      });
    });
  }

  render() {
    const totalRatings = this.numberWithCommas(this.props.ratings.five + this.props.ratings.four + this.props.ratings.three + this.props.ratings.two + this.props.ratings.one);
    const totalReviews = this.numberWithCommas(this.props.reviews + '');

    return(
      <div>
        <SummaryArea>
          <Title>{this.props.title}</Title>
          <Author>by {this.props.author}</Author>
          <RatingsRow>
            <StarRatings
              rating={this.props.weightedReviews}
              starDimension="15px"
              starSpacing="0px"
              starRatedColor="rgb(250, 96, 74)"
            />
            <div>
              {this.props.weightedReviews.toFixed(2)}
              <RatingsDot> · </RatingsDot>
              <RatingsPopup
                ratings={{...this.props.ratings}}
                reviewPercents={{...this.props.reviewPercents}}
              />
              <RatingsDot> · </RatingsDot>
              <RatingsText>{totalRatings} ratings</RatingsText>
              <RatingsDot> · </RatingsDot>
              <RatingsText>{totalReviews} reviews</RatingsText>
            </div>
          </RatingsRow>
          <DescriptionText text={this.props.description} />
        </SummaryArea>
        <PurchaseRow>
          <GetACopy>Get a Copy</GetACopy>
          <PurchaseButtons>
            <PurchaseButton>
              <PurchaseLink href={this.props.links.kindle}>Kindle Unlimited</PurchaseLink>
            </PurchaseButton>
            <PurchaseButton>
              <PurchaseLink href={this.props.links.amazon}>Amazon</PurchaseLink>
            </PurchaseButton>
            <PurchaseButton>
              <span onMouseEnter={this.toggle} onMouseLeave={this.toggle}>
                <StoreDropdown isOpen={this.state.isOpen} stores={this.props.links.stores} />
              </span>
            </PurchaseButton>
            <PurchaseButton>
              <PurchaseLink href={this.props.links.worldcat}>Libraries</PurchaseLink>
            </PurchaseButton>
          </PurchaseButtons>
          <Clear />
        </PurchaseRow>
        <MetaDiv>
          <div>Paperback, {this.props.pages} pages</div>
          <div>Published {this.props.publishDate} by {this.props.publisher}</div>
        </MetaDiv>
      </div>
    )
  }
}

export default Description;