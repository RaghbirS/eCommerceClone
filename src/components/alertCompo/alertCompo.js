import {
    Alert,
    AlertIcon,
    AlertTitle
  } from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext/context'


export default function AlertCompo() {
    let {alertVal} = useContext(AuthContext)
    return (
        <Alert transition={"1s"} w={"25%"} position={"fixed"} top={"10px"} left={"37.5%"} opacity={alertVal==true?"100%":"0%"}  status='error'>
            <AlertIcon />
            <AlertTitle>Login Username or Password does not Match</AlertTitle>
        </Alert>
    )
}
// display={alertVal==true?"flex":"none"}

export function CustomAlert({msgs,status}){
    let {userCreated} = useContext(AuthContext)
    return <Alert transition={"1s"} w={"25%"} position={"fixed"} top={"10px"} left={"37.5%"} opacity={userCreated==true?"100%":"0%"}  status="success">
    <AlertIcon />
    <AlertTitle>{msgs}</AlertTitle>
</Alert>
}

export function UserExistsAlert(){
    let {userExists} = useContext(AuthContext)
    return <Alert transition={"1s"} w={"25%"} position={"fixed"} top={"10px"} left={"37.5%"} opacity={userExists==true?"100%":"0%"}  status="warning">
    <AlertIcon />
    <AlertTitle>User Already Exists! Please Login!</AlertTitle>
</Alert>
}