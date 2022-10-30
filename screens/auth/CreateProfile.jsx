import * as React from "react";
import { NativeBaseProvider, Stack, FormControl, Input, Icon, Button, Box } from "native-base";
import { AntDesign, MaterialIcons } from '@expo/vector-icons'; 

function validEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

function validPassword(password) {
    return password.length >= 6
}

function PasswordInput(props) {
    const [show, setShow] = React.useState(false);

    return (
	<Input autoCapitalize="none" onFocus={props.onFocus} type={show ? "text" : "password"} value={props.value} placeholder="Password" onChangeText={props.onChangeText} InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="4" color="muted.400" onPress={() => setShow(!show)} />}/>
    );
}

export default function CreateProfile() {
    let [submitted, setSubmitted] = React.useState(false);
    let [filled, setFilled] = React.useState(false);

    let [name, setName] = React.useState("");
    let [email, setEmail] = React.useState("");
    let [password, setPassword] = React.useState("");

    let [nameFocus, setNameFocus] = React.useState(false);
    let [emailFocus, setEmailFocus] = React.useState(false);
    let [passwordFocus, setPasswordFocus] = React.useState(false);

    let [nameInvalid, setNameInvalid] = React.useState(false);
    let [emailInvalid, setEmailInvalid] = React.useState(false);
    let [passwordInvalid, setPasswordInvalid] = React.useState(false);

    React.useEffect(() => {
	if(!name && nameFocus) setNameInvalid(true);
	else setNameInvalid(false);

	if(!validEmail(email) && emailFocus) setEmailInvalid(true);
	else setEmailInvalid(false);

	if(!validPassword(password) && passwordFocus) setPasswordInvalid(true);
	else setPasswordInvalid(false);

	if(name && validEmail(email) && validPassword(password)) setFilled(true);
	else setFilled(false);
    }, [name, email, password]);

    return (
	<NativeBaseProvider>
	    <Box p="6" display="flex" h="full">
		<Box flexGrow={1}>
		    <FormControl isRequired isDisabled={submitted} isInvalid={nameInvalid}>
			<Stack>
			    <FormControl.Label>Display Name</FormControl.Label>
			    <Input onFocus={() => setNameFocus(true)} type="text" value={name} onChangeText={(text) => setName(text)} placeholder="Zacky VT"/>
			</Stack>
		    </FormControl>
		    <FormControl mt="4" isRequired isDisabled={submitted} isInvalid={emailInvalid}>
			<Stack>
			    <FormControl.Label>Email</FormControl.Label>
			    <Input autoCapitalize="none" onFocus={() => setEmailFocus(true)} type="email" value={email} onChangeText={(text) => setEmail(text)} placeholder="zacky@example.com"/>
			    <FormControl.ErrorMessage>
				Must be a valid email.
			    </FormControl.ErrorMessage>
			</Stack>
		    </FormControl> 
		    <FormControl mt="4" isRequired isDisabled={submitted} isInvalid={passwordInvalid}>
			<Stack>
			    <FormControl.Label>Password</FormControl.Label>
			    <PasswordInput onFocus={() => setPasswordFocus(true)} value={password} onChangeText={(text) => setPassword(text)}/>
			    <FormControl.HelperText>
				Must be at least 6 characters.
			    </FormControl.HelperText>
			    <FormControl.ErrorMessage>
				At least 6 characters are required.
			    </FormControl.ErrorMessage>
			</Stack>
		    </FormControl>
		</Box>
		<Button onPress={() => setSubmitted(true)} isLoading={submitted} isDisabled={!filled} endIcon={<Icon as={AntDesign} name="arrowright" size="sm" color="white"/>}>Create Profile</Button>
	    </Box>
	</NativeBaseProvider>
    )
}
