import * as React from "react";
import { NativeBaseProvider, Stack, Text, FormControl, Input, Icon, Button, Box } from "native-base";
import { AntDesign, MaterialIcons } from '@expo/vector-icons'; 

function PasswordInput(props) {
    const [show, setShow] = React.useState(false);

    return (
	<Input autoCapitalize="none" onFocus={props.onFocus} type={show ? "text" : "password"} value={props.value} placeholder="Password" onChangeText={props.onChangeText} InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="4" color="muted.400" onPress={() => setShow(!show)} />}/>
    );
}

export default function Login(props) {
    let [submitted, setSubmitted] = React.useState(false);
    let [filled, setFilled] = React.useState(false);

    let [password, setPassword] = React.useState("");
    
    let [passwordInvalid, setPasswordInvalid] = React.useState(false);

    React.useEffect(() => {
	if(password == "") setFilled(false);
	else setFilled(true);
    }, [password]);

    function submit() {
	setSubmitted(true);
	props.navigation.navigate("Main");
	/*setTimeout(() => {
	   props.navigation.navigate("Main");
	}, 3000);*/
    }

    return (
	<NativeBaseProvider>
	    <Box p="6" display="flex" h="full">
		<Box flexGrow={1}>
		    <FormControl isDisabled>
			<Stack>
			    <FormControl.Label>Display Name</FormControl.Label>
			    <Input type="text" value="Zacky VT"/>
			</Stack>
		    </FormControl>
		    <FormControl mt="4" isRequired isDisabled={submitted} isInvalid={passwordInvalid}>
			<Stack>
			    <FormControl.Label>Password</FormControl.Label>
			    <PasswordInput value={password} onChangeText={(text) => setPassword(text)}/>
			    <FormControl.ErrorMessage>
				The password is invalid.
			    </FormControl.ErrorMessage>
			</Stack>
		    </FormControl>
		</Box>
		<Button onPress={submit} isLoading={submitted} isDisabled={!filled} endIcon={<Icon as={AntDesign} name="arrowright" size="sm" color="white"/>}>Login</Button>
	    </Box>
	</NativeBaseProvider>
    )
}
