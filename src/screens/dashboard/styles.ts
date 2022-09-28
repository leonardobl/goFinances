import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize"
import { Feather } from "@expo/vector-icons"


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  
`

export const Header = styled.View`
  height: ${RFPercentage(36.5)}px;
  background-color: ${({theme}) => theme.colors.primary};
  padding: ${RFValue(40)}px ${RFValue(24)}px 0 ${RFValue(24)}px;
`


export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`



export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 6px;
  margin-right: 18px;
`
export const User = styled.View``



export const UserGreeting = styled.Text`
font-family: ${({theme}) => theme.fonts.regular};
font-size:  ${RFValue(18)}px;
line-height: 24px;
color:  ${({theme}) => theme.colors.shape}
`

export const UserName = styled.Text`
font-family: ${({theme}) => theme.fonts.bold};
font-size:  ${RFValue(18)}px;
line-height: 24px;
color:  ${({theme}) => theme.colors.shape}
`


export const Power = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${ ({theme}) => theme.colors.secundary };
`


export const UserWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`


