import React from 'react';

const { styled } = window;

const DescriptionArea = styled.div`
  font-family: "Merriweather", "Georgia", serif;
  font-size: 14px;
  line-height: 21px;
`

const ShowMore = styled.span`
  color: #00635d;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

class DescriptionText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full: false
    }

    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    this.setState(state => {
      return { full: !(state.full) }
    })
  }

  render() {
    let shortText = this.props.text + ''; // wtf
    let toggle = ' (less)'
    if (this.state.full === false) {
      shortText = shortText.substring(0, 400);
      toggle = ' ...more';
    }
    return(
      <DescriptionArea>
        {shortText}
        <ShowMore onClick={this.toggleView}>{toggle}</ShowMore>
      </DescriptionArea>

    );
  }
}

export default DescriptionText;
