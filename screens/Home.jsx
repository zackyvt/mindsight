import {NativeBaseProvider, VStack, Avatar, ScrollView, Divider, Link, Button, Icon, Heading, Box, Text, HStack} from "native-base";
import * as React from "react";
import { AntDesign, MaterialIcons } from '@expo/vector-icons'; 

export default function Home(props) {
    /*props.navigation.reset({
	index: 0,
	routes: [{name: "Home"}],
    });*/

    return (
	<NativeBaseProvider>
	    <Box backgroundColor="white" flex={1}>
		<ScrollView flex={1} p={6} mt={2}>		
	<Heading fontSize="4xl" fontWeight="light">Hello, <Text fontWeight="semibold">Zacky 
👋</Text></Heading>
		<Text fontWeight="normal" color="black" mt="8" fontSize="md"><Text underline={true}>Today's Agenda</Text> ✍</Text>
		<Text mt="2" fontWeight="light">You're currently on school break, enjoy your time! School will resume on the 18th of July.</Text>

		</ScrollView>

		<Box backgroundColor="primary.600" m={4} shadow={6} p={5} rounded="sm">
		    <Heading color="white" fontSize="md">No Class  😎</Heading>
		    <Text color="white" mt="1" fontWeight="light">There are no classes during the school break.</Text>
		    <HStack alignItems="center" mt="4">
			<Text color="white" fontSize="xs" mr="1" underline={true}>Open Timetable</Text>
			<Icon as={AntDesign} name="arrowright" size="sm" color="white"/>
		    </HStack>
		</Box>
	    </Box>
	</NativeBaseProvider>
    );
}
