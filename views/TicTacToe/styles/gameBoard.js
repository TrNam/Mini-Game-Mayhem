import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  board: {
    width: 312,
    height: 312,
    borderWidth: 5,
    borderColor: '#000',
    borderRadius: 10
  },
  line: {
    position: 'absolute',
    width: 5,
    height: 306,
    backgroundColor: '#000',
    transform: [
      {translateX: 100}
    ]
  }
})
