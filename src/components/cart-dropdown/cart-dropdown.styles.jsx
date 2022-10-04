import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

// styled-component nested
export const CartDropdownContainer = styled.div`
  position: absolute;
  padding: 20px;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton}{
    margin-top: auto;
  }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;

`
// export const EmptyMessage = styled.span`
//   font-size: 18px;
//   margin: 50px auto;

//   // css nested
//   ${CartDropdownContainer} {
//     position: 
//   }
// `

export const CartItems = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`