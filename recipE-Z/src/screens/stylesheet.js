import { StyleSheet } from 'react-native';

const defaultStyles = StyleSheet.create({
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
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    width: 200,
    borderRadius: 5,
    borderWidth: 10,
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

  searchContainer: {
    // flex:4,
    flex:5,
    backgroundColor: '#fff',
    width:'100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 32,
    paddingRight: 32
  },
  autocompleteContainer: {
    width: 350,
    height: 34,
    alignSelf: 'center',
    marginBottom: 20
  },
  acInputContainer: {
    borderColor: '#ed4848',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  acListStyle: {
    borderWidth: 1,
    borderColor: '#ed4848',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  ingredientsContainer: {
    paddingTop: 15,
    paddingBottom: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  ingredient: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 12,
    marginBottom: 12
  },
  ingredientText: {
    color: '#ed4848',
    fontFamily: 'nunito-bold',
    fontSize: 15
  },
  inputContainer: {
    // flex:7,
    zIndex: -1,
    flex:8,
    backgroundColor:'#ed4848',
    width:'100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 20,
    paddingBottom: 65
  },
  settingsBanner: {
    width: 425,
    height: 80,
    backgroundColor: '#ed4848',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 530
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 10,
    borderBottomWidth: 15,
    borderLeftWidth: 10,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ed4848',
    borderLeftColor: 'transparent',
    marginLeft: 330
  },
  settingsButton: {
    backgroundColor: '#ed4848',
    bottom: -40,
    paddingTop: 20,
    paddingBottom: 20,
    width: 250,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ed4848'
  }
});

export default defaultStyles;
