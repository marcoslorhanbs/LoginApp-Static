import {Pressable, View, Text} from 'react-native';
import {Header, InputView, InputBox, PrimaryBtnLG, styles} from '../themes/theme'
import {LGText, MDText, SMText} from '../themes/theme'
import {useState} from 'react'

export const SignIn = () =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return(
        <InputView>
            <InputBox placeholder='Username'></InputBox>
            <InputBox placeholder='Password'></InputBox>
            
        </InputView>
    )
  }

  export const SignUp = () =>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    return(
        <InputView>
            <InputBox  placeholder='Username'></InputBox>
            <InputBox  placeholder='Email'></InputBox>
            <InputBox  placeholder='Password'></InputBox>
        </InputView>
    )
  }