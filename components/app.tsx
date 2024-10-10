import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Checkbox,
  Button,
} from '@chakra-ui/react';

export default function () {
  return (
    <Box
      w={['full', 'md']}
      p={[8, 10]}
      mt={[20, '10vw']}
      border={['none', '1px']}
      borderColor={['', 'gray.300']}
      borderRadius={10}
    >
      <VStack spacing={4} align='flex-start' w='full'>
        <VStack spacing={1} align={['flex-start', 'center']} w='full'>
          <Heading>Login</Heading>
          <Text>Enter your e-mail and password to login</Text>
        </VStack>

        <FormControl>
          <FormLabel>E-mail Address</FormLabel>
          <Input rounded='none' variant='filled' />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input rounded='none' variant='filled' />
        </FormControl>
        <HStack w='full' justify='space-between'>
          <Checkbox>Remember me.</Checkbox>
          <Button variant='link' colorScheme='blue'>
            Forgot Password?
          </Button>
        </HStack>
        <Button
          rounded='none'
          colorScheme='blue'
          w={['full', 'auto']}
          alignSelf='end'
        >
          Login
        </Button>
      </VStack>
    </Box>
  );
}
