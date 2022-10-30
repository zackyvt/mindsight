import React from "react";
import { VStack, HStack, NativeBaseProvider, Button, Box, Heading, Text, Icon, Alert } from "native-base";
import { BarCodeScanner } from "expo-barcode-scanner";
import { AntDesign } from '@expo/vector-icons'; 
import { StatusBar } from "expo-status-bar";

export default function Boarding(props) {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [scanned, setScanned] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
  };

  return (
    <NativeBaseProvider>
      <Box bgColor="muted.900" w="full" h="full" display="flex" flexDirection="column">
	  <Box flexGrow={1} display="flex">
            <Alert borderRadius="8" mt="10" m="4" status={scanned ? "success" : "info"} colorScheme={scanned ? "success" : "info"}>
		<VStack space={0.5} flexShrink={1} w="100%">
		    <HStack flexShrink={1} space={3} alignItems="center">
			<Alert.Icon />
			<Text fontSize="md" fontWeight="medium" color="coolGray.800">
			    {scanned ? "Sucessfully scanned!" : "Scan your student QR code"}
			</Text>
		    </HStack>
		    <Text pl="7" color="coolGray.600">
			{ scanned ?
			    "The student QR code has been scanned successfully, you can now proceed." :
			"In order to use the app, you need to log in with the student QR code provided to you." }
		    </Text>
		</VStack>
	    </Alert>
	    <Box flexGrow={1} position="relative" alignItems="center" justifyContent="center" display="flex" bgColor="muted.800" m="6" mt="4" borderRadius="10">
		{ hasPermission === null || hasPermission === false ? 
		    <Text fontSize="md" fontWeight="medium" color="white">
			{ hasPermission === null ? "Requesting camera permissions." : "Unable to access camera" }
		    </Text>
		    :
		    <>
			{ scanned ?
			    <Box position="absolute" w="full" alignItems="center" justifyContent="center" h="full" bgColor="muted.800" opacity={0.95}>
				<Button onPress={() => setScanned(false)} endIcon={<Icon as={AntDesign} name="reload1" size="5xl" color="white"/>} p="4"></Button>
			    </Box>
			    : <BarCodeScanner 
			onBarCodeScanned={handleBarCodeScanned}
			style={{
			    flexGrow: 1,
			    width: "100%"
			}}></BarCodeScanner>
			}
		    </>
		}
	    </Box>
	  </Box>
	  <Box pt="8" pb="8" p="6" bgColor="white" borderTopRadius="20"> 
      
	    <Heading>Welcome to Mindsight</Heading>
	    <Text mt="3">Mindsight is an app designed to make the school environment more digitally-friendly for students. 
			 It's made for students and designed by a student.</Text>
	    <Button onPress={() => props.navigation.navigate("Login")} mt="10" isDisabled={!scanned} endIcon={<Icon as={AntDesign} name="arrowright" size="sm" color="white"/>}>Next</Button> 
	  </Box>
      </Box>
      <StatusBar style="light" />
    </NativeBaseProvider>
  );
}
