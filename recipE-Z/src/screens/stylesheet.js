import { StyleSheet } from 'react-native';

export default defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'nunito-regular'
  },
  whiteContainer: {
    width: 334, 
    height: 561, 
    backgroundColor: 'white', 
    position: 'absolute', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    paddingTop: 70, 
    paddingBottom: 70
  },
  redButton: {
    backgroundColor: '#ed4848',
    paddingTop: 20,
    paddingBottom: 20,
    width: 250,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ed4848'
  },
  h1: {
    color: '#ed4848', 
    fontSize: 20, 
    fontFamily: 'nunito-extrabold'
  },
  textLink: {
    color: '#ed4848',
    textAlign: 'center',
    fontSize: 11,
    fontFamily: 'nunito-regular'
  },
  textInput: {
    width: 280, 
    height: 50, 
    borderColor: 'lightgrey', 
    borderWidth: 1, 
    backgroundColor: 'white', 
    opacity: .7, 
    paddingLeft: 15,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'nunito-regular'
  },
  redButtonText:{
    color: 'white',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'nunito-bold'
  },

  searchTextInput: {
    borderColor: 'red',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  scrollView: {
    marginHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  inputContainer: {
    paddingTop: 15,
  },
  sendButton: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'red',
    padding: 15,
    margin: 5,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});