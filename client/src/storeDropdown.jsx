import React from 'react';
import { Manager, Reference, Popper } from 'react-popper';

const { styled } = window;

const StoreButton = styled.span`
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

const PurchaseLink = styled.a`
  color: #00635d;
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const Menu = styled.div`
  background: white;
  width: 100px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  border: 1px solid #918F96;
  padding: 5px 8px;
  background-color: white;
`

const StoreDropdown = (props) => {
  return(
    <Manager>
      <Reference>
        {({ ref }) => (
          <StoreButton ref={ref}>
            Stores ▾
          </StoreButton>
        )}
      </Reference>
      {props.isOpen && (
        <Popper placement="bottom">
          {({ ref, style, placement }) => (
            <Menu ref={ref} style={style} placement={placement}>
              <PurchaseLink href={props.stores.audible}>Audible</PurchaseLink>
              <br />
              <PurchaseLink href={props.stores.barnesAndNoble}>Barnes & Noble</PurchaseLink>
              <br />
              <PurchaseLink href={props.stores.walmart}>Walmart eBooks</PurchaseLink>
              <br />
              <PurchaseLink href={props.stores.apple}>Apple Books</PurchaseLink>
              <br />
              <PurchaseLink href={props.stores.google}>Google Play</PurchaseLink>
            </Menu>
          )}
        </Popper>
      )}
    </Manager>
  );
}

 export default StoreDropdown;