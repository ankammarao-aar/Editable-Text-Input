import {Component} from 'react'

import {
  MainContainer,
  Card,
  Heading,
  InputCard,
  Input,
  Button,
  Para,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {inputValue: '', text: false}

  onChangeText = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  onClickSave = () => {
    this.setState(prevState => ({
      text: !prevState.text,
    }))
  }

  render() {
    const {inputValue, text} = this.state

    return (
      <MainContainer>
        <Card>
          <Heading>Editable Text Input</Heading>

          <InputCard>
            {text ? (
              <Para>{inputValue}</Para>
            ) : (
              <Input
                type="text"
                value={inputValue}
                onChange={this.onChangeText}
              />
            )}
            <Button type="button" onClick={this.onClickSave}>
              {text ? 'Edit' : 'Save'}
            </Button>
          </InputCard>
        </Card>
      </MainContainer>
    )
  }
}

export default EditableTextInput
