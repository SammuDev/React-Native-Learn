import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  formContext: {
    backgroundColor: '#fff',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    borderRadius: 50,
    bottom: 0,
    width: '100%',
    height: '100%',
    marginTop: 30,
    alignItems: 'center'
  },
  form: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding: 10
  },
  formLabel: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 20
  },
  textInput: {
    backgroundColor: '#f6f6f6',
    borderRadius: 50,
    width: '90%',
    height: 40,
    margin: 12,
    paddingLeft: 10
  },
  buttonCalculator: {
    backgroundColor: '#ff0043',
    borderRadius: 50,
    width: '90%',
    marginLeft: 12,
    margin: 30,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButtonCalculator: {
    color: '#fff',
    fontSize: 20
  }
});

export default style;
