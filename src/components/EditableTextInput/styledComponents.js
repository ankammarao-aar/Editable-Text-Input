import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #f5d0fe;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  background-color: #ffffff;
  padding: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: #000000;
  margin-top: 0px;
  margin-bottom: 32px;
`

export const InputCard = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  width: 210px;
  font-family: 'Roboto';
  color: #323f4b;
  border: 1px solid #cbd2d9;
  border-radius: 4px;
  padding: 6px;
  outline: none;
`

export const Button = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #d946ef;
  height: 32px;
  width: 60px;
  border: none;
  border-radius: 4px;
  margin-left: 18px;
  cursor: pointer;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: #323f4b;
`
