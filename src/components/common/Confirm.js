import React from "react"
import {Text, View, Modal} from 'react-native'
import { CardItem } from './CardItem'
import { Button } from './Button'

const Confirm = ({message, onAccept, onDecline, visible}) => {
  const {containerStyle, cardSectionStyle, textStyle} = styles
  return(
    <Modal animationType="slide" onRequestClose={() => {}} transparent visible={visible}>
      <View style={containerStyle}>
      <CardItem style={cardSectionStyle}>
        <Text style={textStyle}>{message}</Text>
      </CardItem>

      <CardItem>
        <Button text="YES" fireButton={onAccept}/>
        <Button text="No" fireButton={onDecline}/>
      </CardItem>
      </View>
    </Modal>
  )
}

const styles = {
  cardSectionStyle: {
    justifyContent: "center"
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}

export {Confirm}
