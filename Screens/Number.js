import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Container,
  Header,
  Body,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
} from 'native-base';
import firebaseSetup from '../setup';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const NumberScreen = ({ navigation }) => {
  const {auth} = firebaseSetup ();
  const [confirm, setConfirm] = useState (null);
  const [code, setCode] = useState ('');
  const [initializing, setInitializing] = useState (true);
  const [user, setUser] = useState ();
  const [phoneNumber, setPhoneNumber] = useState ('');

  useEffect (() => {
    const subscriber = auth ().onAuthStateChanged (onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onPressContinue = () => {
    // check if it is a valid phone number or not.
    signInWithPhoneNumber (`+91 ${phoneNumber}`);
  };

  const onAuthStateChanged = user => {
    setUser (user);
    if (initializing) setInitializing (false);
  };

  const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth ().signInWithPhoneNumber (phoneNumber);
    setConfirm (confirmation);
  };

  const confirmCode =  ({navigation}) => {
    
    // try {
    //   await confirm.confirm (code);
      
    // } catch (err) {
    //   alert (JSON.stringify (err));
    // }
  };

  if (!confirm) {
    return (
      <Container>
        <View style={styles.container}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={50}
            behavior={'padding'}
            style={styles.containerAvoid}
          >
            <Text style={styles.textTitle}>
              {'Please Enter your phone number'}
            </Text>
            <View
              style={[
                styles.containerinput,
                {
                  borderBottomColor: '#244DB7',
                },
              ]}
            >
              <View style={styles.openDialog}>
                <Text>{'+91'}</Text>
              </View>
              <TextInput
                style={styles.phoneInput}
                placeholder="999 999 9999"
                keyboardType="numeric"
                name="phoneNumber"
                value={phoneNumber}
                onChangeText={num => setPhoneNumber (num)}
                secureTextEntry={false}
              />
            </View>
            <View style={styles.viewBottom}>
              {/* We can disable this till it is a valid phone number. */}
              <TouchableOpacity onPress={onPressContinue}>
                <View style={styles.btnContinue}>
                  <Text style={styles.textContinue}>
                    Continue
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Container>
    );
  }
  return (
    <Container>
      <Header>
        <Body>
          <Title>Home Screen</Title>
        </Body>
      </Header>
      <Content
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Item inlineLabel>
          <Label>Enter OTP</Label>
          <Input value={code} onChangeText={text => setCode (text)} />
          <Button onPress={() =>  confirmCode() }>
            <Text >Confirm OTP Code</Text>
          </Button>
        </Item>
      </Content>
    </Container>
  );
};

export default NumberScreen;
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  containerAvoid: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  textTitle: {
    marginBottom: 50,
    marginTop: 50,
    fontSize: 15,
  },
  containerinput: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1.5,
  },
  openDialog: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneInput: {
    marginLeft: 5,
    flex: 1,
    height: 50,
  },
  viewBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    alignItems: 'center',
  },
  btnContinue: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#244DB7',
  },
  textContinue: {
    color: '#fff',
    alignItems: 'center',
  },
});



// import React,{useState, useEffect} from 'react';
// import { View,Text, Container, Header, Body, Title, Content, Button, Item, Label, Input } from 'native-base';
// import firebaseSetup from '../setup';
// import { KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// const NumberScreen =({navigation}) => {
//   const{auth} = firebaseSetup();
//   const [confirm, setConfirm] = useState(null);
//   const [code, setCode] = useState('');
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   const [phoneNumber, setPhoneNumber]= useState("");
//   const onPressContinue = () => {
       
//   }
//   const onChangePhone = (event) => {
//     setPhoneNumber(event.target.name);
//     console.log(phoneNumber)
// }
//   const onAuthStateChanged =(user)  => {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }
//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//  const signInWithPhoneNumber = async (phoneNumber) => {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   };
//   const confirmCode = async() => {
    
//     try {
//       await confirm.confirm(code);
//       alert('USer SignIn')
//     } catch (err) {
//       alert(JSON.stringify(err))
//     }
//   }
  
//     if(!confirm){
//     return(
//       <Container>
//       <View style= {styles.container}>
//       <KeyboardAvoidingView
//       keyboardVerticalOffset={50}
//       behavior={'padding'}
//       style={styles.containerAvoid}>
//       <Text style={styles.textTitle}>{"Please Enter your phone number"}</Text>
//       <View style={[styles.containerinput,{
//         borderBottomColor: '#244DB7'
//       }]}>
//         <View style={styles.openDialog}>
//           <Text>{"+91"}</Text>
//         </View>
//         <TextInput  
//           style= {styles.phoneInput}
//           placeholder= '788 999 0000'
//           keyboardType= 'numeric'
//           name= 'phoneNumber'
//            value={phoneNumber}
//            onChangeText={onChangePhone}
//            secureTextEntry={false}
//         />
//       </View>
//       <View style= {styles.viewBottom}>
//         <TouchableOpacity onPress={onPressContinue}>
//           <View style={styles.btnContinue}>
//             <Text style ={styles.textContinue}>
//              Continue
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//       </KeyboardAvoidingView>
//       <Button onPress={()=> signInWithPhoneNumber('+91 9956757375') } >
//         <Text>
//           React Native firebase Phone Authentication
//         </Text>
//       </Button>
      
//       </View>
//     </Container>
//     );
//   }
//   return(
//      <Container>
//        <Header>
//          <Body>
//            <Title>Home Screen</Title>
//          </Body>
//        </Header>
//        <Content
//        contentContainerStyle ={{
//          flex:1,
//          justifyContent: 'center',
//          alignItems: 'center',
//        }}
//        >
//        <Item inlineLabel>
//         <Label>Enter OTP</Label>
//         <Input value= {code} onChangeText = {(text)=> setCode(text)} />
//         <Button onPress ={()=>confirmCode()}> 
//           <Text>Confirm OTP Code</Text>
//         </Button>
//        </Item>
//        </Content>
//      </Container>
//   );
// }

// export default NumberScreen;
// const styles = StyleSheet.create({
//   container : {
//     flex: 1
//   },
//   containerAvoid:{
//     flex:1,
//     alignItems: 'center',
//     padding: 10,
//   },
//   textTitle: {
//     marginBottom: 50,
//     marginTop: 50,
//     fontSize:15
//   },
//   containerinput: {
//     flexDirection: 'row',
//     paddingHorizontal:12,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     borderBottomWidth: 1.5
//   },
//   openDialog: {
//     flexDirection:'row',
//     alignItems:'center',
//     justifyContent: 'center'
//   },
//   phoneInput: {
//     marginLeft: 5,
//     flex: 1,
//     height: 50
//   },
//   viewBottom:{
//     flex:1,
//     justifyContent: "flex-end",
//     marginBottom: 50,
//     alignItems: 'center'
//   },
//   btnContinue:{
//     width:150,
//     height: 50,
//     borderRadius:10,
//     alignItems: 'center',
//     justifyContent : 'center',
//     backgroundColor: '#244DB7'
//   },
//    textContinue: {
//      color: "#fff",
//      alignItems: 'center'
//    },
// })