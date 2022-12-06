import {StyleSheet} from 'react-native'
import styled from 'styled-components/native';

export const LGText = styled.Text`
    font-size: 30px;
    color: white;
`;

export const MDText = styled.Text`
    font-size: 20px;
    color: white;
`;

export const SMText = styled.Text`
    font-size: 10px;
    color: white;
`;

export const Header = styled.View`
    bottom: 50px;
    right: 3%;
`;

export const styles = StyleSheet.create({
    container:
    {
      flex: 1,
      backgroundColor: '#1D2939',
      alignItems: 'center',
      justifyContent: 'center',
    },
    whiteText:
    {
        color: '#FFFFFF'
    },
    centralized:
    {
      alignItems: 'center'
    }
  });


export const InputView = styled.View`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 250px;
  height: 40px;
  bottom: 20px;
  
`;

export const InputBox = styled.TextInput`
  /* input */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  margin: 3px;

  width: 250px;
  height: 40px;
  top: 50%;

  /* 🔅 Background/Default */
  background: #FFFFFF;

  /* 🔅 Gray/300 */
  border: 1px solid #D0D5DD;
  border-radius: 4px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  text-align: center;
`;

export const PrimaryBtnLG = styled.Pressable`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  gap: 8px;

  position: absolute;
  width: 200px;
  height: 42px;
  left: 25px;
  top: 110px;

  /* 🔅 Primary/500 */
  background: #2970FF ;
  border-radius: 4px;
`;

export const LinedView = styled.View`
  top: 15%;
  
`;

export const PrimaryBtnMD = styled.Pressable`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  gap: 8px;

  width: 100px;
  height: 42px;
  left: 15%;
  margin-bottom: 3%;
  


  


  /* 🔅 Primary/500 */
  background: #2970FF ;
  border-radius: 4px;
`;