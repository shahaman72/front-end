import styled from "styled-components";
import { react } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Center,
  SimpleGrid,
  keyframes,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaCheckCircle } from "react-icons/fa";
const Pricing = () => {
  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;
  return (
    <>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <SimpleGrid columns={3} ml={"6%"} mt={4}>
        <Box bg={"#ff0"} w={"70%"} mt={4}>
          <Center py={0} mb={"20px"}>
            <Box
              // maxW={"500px"}
              w={"70%"}
              bg={"#f5f5f5"}
              boxShadow={"20px"}
              rounded={"10px"}
              overflow={"hidden"}
            >
              <Stack
                textAlign={"center"}
                p={6}
                color={useColorModeValue("gray.800", "white")}
                align={"center"}
              >
                <Text
                  fontSize={"50px"}
                  fontWeight={600}
                  bg={useColorModeValue("green.50", "green.900")}
                  p={2}
                  px={3}
                  color={"green.500"}
                  rounded={"full"}
                >
                  Basic
                </Text>
                <Stack direction={"row"} align={"center"} justify={"center"}>
                  <Text fontSize={"3xl"}>$</Text>
                  <Text fontSize={"40px"} fontWeight={800}>
                    79
                  </Text>
                  <Text color={"gray.500"}>/month</Text>
                </Stack>
              </Stack>

              <Box bg={"gray.50"} px={"0%"} py={0} mb={10} w={"100%"}>
                <List spacing={3}>
                  <ListItem>
                    <HStack>
                      <ListIcon
                        as={CheckIcon}
                        color="green.400"
                        w={20}
                        h={20}
                      />
                      <Text color={"#000"}>5.000 page views</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <ListIcon
                        as={CheckIcon}
                        color="green.400"
                        w={20}
                        h={20}
                      />
                      <Text color={"#000"}>50 automation executions</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <ListIcon
                        as={CheckIcon}
                        color="green.400"
                        w={20}
                        h={20}
                      />
                      <Text color={"#000"}>50 identified users</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <ListIcon
                        as={CheckIcon}
                        color="green.400"
                        w={20}
                        h={20}
                      />
                      <Text color={"#000"}> All features</Text>
                    </HStack>
                  </ListItem>
                </List>

                <Button
                  ml={"5%"}
                  mt={20}
                  w={"90%"}
                  h={"50px"}
                  bg={"#00D7EE"}
                  // color={"#d6d6"}
                  borderRadius={"20px"}
                  // rounded={"xl"}
                  boxShadow={"5px 5px 10px 0px #f5f5f5"}
                  border={"1px solid #000"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  <Text color={"#000"}>Start your Trial</Text>
                </Button>
              </Box>
            </Box>
          </Center>
        </Box>
        <Box bg={"#f5f5f5"} w={"90%"}>
          <Center py={0} mb={"20px"}>
            <Box
              // maxW={"500px"}
              w={"50%"}
              bg={"#f5f5f5"}
              boxShadow={"20px"}
              rounded={"10px"}
              overflow={"hidden"}
            >
              <Stack
                textAlign={"center"}
                p={6}
                color={useColorModeValue("gray.800", "white")}
                align={"center"}
              >
                <Text
                  fontSize={"50px"}
                  fontWeight={600}
                  bg={useColorModeValue("green.50", "green.900")}
                  p={2}
                  px={3}
                  color={"green.500"}
                  rounded={"full"}
                >
                  Plus
                </Text>
                <Stack direction={"row"} align={"center"} justify={"center"}>
                  <Text fontSize={"3xl"}>$</Text>
                  <Text fontSize={"40px"} fontWeight={800}>
                    79
                  </Text>
                  <Text color={"gray.500"}>/month</Text>
                </Stack>
              </Stack>

              <Box
                bg={useColorModeValue("gray.50", "gray.900")}
                px={"5%"}
                py={0}
                mb={10}
                w={"100%"}
              >
                <List spacing={3}>
                  <ListItem>
                    <HStack>
                      <ListIcon
                        as={CheckIcon}
                        color="green.400"
                        w={20}
                        h={20}
                      />
                      <Text color={"#000"}>5.000 page views</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <ListIcon
                        as={CheckIcon}
                        color="green.400"
                        w={20}
                        h={20}
                      />
                      <Text color={"#000"}>50 automation executions</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <ListIcon
                        as={CheckIcon}
                        color="green.400"
                        w={20}
                        h={20}
                      />
                      <Text color={"#000"}>50 identified users</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <ListIcon
                        as={CheckIcon}
                        color="green.400"
                        w={20}
                        h={20}
                      />
                      <Text color={"#000"}> All features</Text>
                    </HStack>
                  </ListItem>
                </List>

                <Button
                  ml={"5%"}
                  mt={20}
                  w={"90%"}
                  bg={"#ff0"}
                  // color={"#d6d6"}
                  borderRadius={"20px"}
                  // rounded={"xl"}
                  boxShadow={"5px 5px 10px 0px #f5f5f5"}
                  border={"1px solid #000"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  <Text color={"#000"}>Start your Trial</Text>
                </Button>
              </Box>
            </Box>
          </Center>
        </Box>{" "}
        <Box bg={"#f5f5f5"} w={"90%"}>
          <Center py={0} mb={"20px"}>
            <Box
              // maxW={"500px"}
              w={"50%"}
              bg={"#f5f5f5"}
              boxShadow={"20px"}
              rounded={"10px"}
              overflow={"hidden"}
            >
              <Stack
                textAlign={"center"}
                p={6}
                color={useColorModeValue("gray.800", "white")}
                align={"center"}
              >
                <Text
                  fontSize={"50px"}
                  fontWeight={600}
                  bg={useColorModeValue("green.50", "green.900")}
                  p={2}
                  px={3}
                  color={"green.500"}
                  rounded={"full"}
                >
                  Pro
                </Text>
                <Stack direction={"row"} align={"center"} justify={"center"}>
                  <Text fontSize={"3xl"}>$</Text>
                  <Text fontSize={"40px"} fontWeight={800}>
                    79
                  </Text>
                  <Text color={"gray.500"}>/month</Text>
                </Stack>
              </Stack>

              <Box
                bg={useColorModeValue("gray.50", "gray.900")}
                px={"5%"}
                py={0}
                mb={10}
                w={"100%"}
              >
                <List spacing={3}>
                  <ListItem>
                    <HStack>
                      <ListIcon
                        as={CheckIcon}
                        color="green.400"
                        w={20}
                        h={20}
                      />
                      <Text color={"#000"}>5.000 page views</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <ListIcon
                        as={CheckIcon}
                        color="green.400"
                        w={20}
                        h={20}
                      />
                      <Text color={"#000"}>50 automation executions</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <ListIcon
                        as={CheckIcon}
                        color="green.400"
                        w={20}
                        h={20}
                      />
                      <Text color={"#000"}>50 identified users</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack>
                      <ListIcon
                        as={CheckIcon}
                        color="green.400"
                        w={20}
                        h={20}
                      />
                      <Text color={"#000"}> All features</Text>
                    </HStack>
                  </ListItem>
                </List>

                <Button
                  ml={"5%"}
                  mt={20}
                  w={"90%"}
                  bg={"#ff0"}
                  // color={"#d6d6"}
                  borderRadius={"20px"}
                  // rounded={"xl"}
                  boxShadow={"5px 5px 10px 0px #f5f5f5"}
                  border={"1px solid #000"}
                  _hover={{
                    bg: "green.500",
                  }}
                  _focus={{
                    bg: "green.500",
                  }}
                >
                  <Text color={"#000"}>Start your Trial</Text>
                </Button>
              </Box>
            </Box>
          </Center>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Pricing;
