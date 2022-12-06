import { SafeAreaView, StatusBar } from 'react-native';
import {View, Pressable, Text} from 'react-native';
import {styles} from './themes/theme'
import {Header, PrimaryBtnMD, LinedView} from './themes/theme'
import {LGText, MDText, SMText} from './themes/theme'
import {useState} from 'react'
import {SignIn, SignUp} from './screens/index'

export default function App() {
  const [signInVisible, setSignInVisible] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false)
  return (
    <>
    <View style={styles.container}>
      <Header>
        <LGText>Welcome!</LGText>

        {!signInVisible ? (
            <LinedView>
            <PrimaryBtnMD onPress={() =>setSignInVisible(!signInVisible)}><MDText>SignIn</MDText></PrimaryBtnMD>
            <PrimaryBtnMD onPress={() =>setSignUpVisible(!signUpVisible)}><MDText>SignUp</MDText></PrimaryBtnMD>
            </LinedView>
          ) : null}


        
        
        {signInVisible ? (
          <View>
            <PrimaryBtnMD onPress={() => setSignInVisible(!signInVisible)}><Text style={styles.whiteText}>Back</Text></PrimaryBtnMD>
            <SignIn></SignIn>
          </View>
            
          ) : null}

      </Header> 
      
      

      
      <StatusBar barStyle="light-content" backgroundColor="#1D2939" />
    </View>

    

    {signUpVisible ? (
        <View>
            <SignUp></SignUp>
        </View>
          ) : null}
    
    </>
  );
}


