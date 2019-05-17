import React from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import StarRatings from 'react-star-ratings';

const { styled } = window;

const RatingsWindow = styled.div`
  width: 550px;
  padding: 10px;
  background-color: white;
  border: 4px solid #d7d1c4;
`

const RatingsTable = styled.table`
  width: auto;
`;

const RatingsBar = styled.div.attrs(({ length }) => ({
  width: length || "0%"
}))`
  display: block;
  background-color: #215625;
  width: ${props => props.width};
`;

const RatingsStar = styled.th`
  font-size: 12px;
`

const RatingsNumbers = styled.td`
  font-size: 12px;
  color: rgb(102, 102, 102);
`

const RatingsExit = styled.span`
  float: right;
  cursor: pointer;
`

const RatingsText = styled.span`
  color: #00635d;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

class RatingsPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state) => {
      return ({
        isOpen: !state.isOpen
      });
    });
  }

  render() {
    // establish percentages
    const totalRatings = this.props.ratings.five + this.props.ratings.four + this.props.ratings.three + this.props.ratings.two + this.props.ratings.one;
    const fivePercent = parseInt((this.props.ratings.five / totalRatings) * 100);
    const fourPercent = parseInt((this.props.ratings.four / totalRatings) * 100);
    const threePercent = parseInt((this.props.ratings.three / totalRatings) * 100);
    const twoPercent = parseInt((this.props.ratings.two / totalRatings) * 100);
    const onePercent = parseInt((this.props.ratings.one / totalRatings) * 100);

    // should refactor tr to be loop into new component
    return(
      <Manager>
        <Reference>
          {({ ref }) => (
            <RatingsText onClick={this.toggle} ref={ref}>
              Ratings details
            </RatingsText>
          )}
        </Reference>
        {this.state.isOpen && (
          <Popper placement="bottom">
            {({ ref, style, placement, arrowProps }) => (
              <div ref={ref} style={style} placement={placement}>
                <RatingsWindow>
                  Rating details
                  <RatingsExit onClick={this.toggle}>X</RatingsExit>
                  <RatingsTable border="0" cellSpacing="5" cellPadding="0">
                    <tbody>
                      <tr>
                        <RatingsStar width="25">
                          5&nbsp;
                          <StarRatings
                            numberOfStars={1}
                            starDimension='15px'
                            starSpacing='0'
                            starEmptyColor='rgb(250, 96, 74)'
                          />
                        </RatingsStar>
                        <td width="350">
                          <RatingsBar length={this.props.reviewPercents.five}>&nbsp;</RatingsBar>
                        </td>
                        <RatingsNumbers width="90">
                          {fivePercent}% ({this.props.ratings.five})
                        </RatingsNumbers>
                      </tr>
                      <tr>
                        <RatingsStar width="25">
                          4&nbsp;
                          <StarRatings
                            numberOfStars={1}
                            starDimension='15px'
                            starSpacing='0'
                            starEmptyColor='rgb(250, 96, 74)'
                          />
                        </RatingsStar>
                        <td width="350">
                          <RatingsBar length={this.props.reviewPercents.four}>&nbsp;</RatingsBar>
                        </td>
                        <RatingsNumbers width="90">
                          {fourPercent}% ({this.props.ratings.four})
                        </RatingsNumbers>
                      </tr>
                      <tr>
                        <RatingsStar width="25">
                          3&nbsp;
                          <StarRatings
                            numberOfStars={1}
                            starDimension='15px'
                            starSpacing='0'
                            starEmptyColor='rgb(250, 96, 74)'
                          />
                        </RatingsStar>
                        <td width="350">
                          <RatingsBar length={this.props.reviewPercents.three}>&nbsp;</RatingsBar>
                        </td>
                        <RatingsNumbers width="90">
                          {threePercent}% ({this.props.ratings.three})
                        </RatingsNumbers>
                      </tr>
                      <tr>
                        <RatingsStar width="25">
                          2&nbsp;
                          <StarRatings
                            numberOfStars={1}
                            starDimension='15px'
                            starSpacing='0'
                            starEmptyColor='rgb(250, 96, 74)'
                          />
                        </RatingsStar>
                        <td width="350">
                          <RatingsBar length={this.props.reviewPercents.two}>&nbsp;</RatingsBar>
                        </td>
                        <RatingsNumbers width="90">
                          {twoPercent}% ({this.props.ratings.two})
                        </RatingsNumbers>
                      </tr>
                      <tr>
                        <RatingsStar width="25">
                          1&nbsp;
                          <StarRatings
                            numberOfStars={1}
                            starDimension='15px'
                            starSpacing='0'
                            starEmptyColor='rgb(250, 96, 74)'
                          />
                        </RatingsStar>
                        <td width="350">
                          <RatingsBar length={this.props.reviewPercents.one}>&nbsp;</RatingsBar>
                        </td>
                        <RatingsNumbers width="90">
                          {onePercent}% ({this.props.ratings.one})
                        </RatingsNumbers>
                      </tr>
                    </tbody>
                  </RatingsTable>
                  {fivePercent + fourPercent + threePercent}% of people liked it
                  <div ref={arrowProps.ref} style={arrowProps.style} />
                </RatingsWindow>
              </div>
            )}
          </Popper>
        )}
      </Manager>
    );
  }
 }

 export default RatingsPopup;