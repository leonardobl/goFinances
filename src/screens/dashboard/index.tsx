import React from 'react'
import {Container, Photo, Header, User, UserName, UserInfo, UserGreeting, Power, UserWrapper} from "./styles"


export const DashBoard = () => {
  return (
    <Container>
      <Header >
        <UserWrapper>
          <UserInfo >
              <Photo source={{uri: "https://avatars.githubusercontent.com/u/45981092?v=4"}}/>
              <User>
                <UserGreeting >Ola, </UserGreeting>
                <UserName>Leonardo Lima</UserName>
              </User>
          </UserInfo>
          <Power name={"power"} />
        </UserWrapper>
      </Header>
    </Container>
    )
  }
  
