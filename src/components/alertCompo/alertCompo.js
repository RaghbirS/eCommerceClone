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