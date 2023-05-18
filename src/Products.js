import styled from "styled-components";

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  useBreakpointValue,
  Flex,
  VStack,
  Avatar,
  SimpleGrid,
  Image,
  StackDivider,
  ListIcon,
  HStack,
  ListItem,
  Center,
  List,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { CheckIcon } from "@chakra-ui/icons";

import { AiFillLock } from "react-icons/ai";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import decen from "./decen.PNG";
import sett from "./sett.PNG";
import fed from "./fed.png";

const Products = () => {
  const Arrow = createIcon({
    displayName: "Arrow",
    viewBox: "0 0 72 24",
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
        fill="currentColor"
      />
    ),
  });
  return (
    <Box bg={"#EDDFEF"}>
      <Box w={"80%"} ml={"10%"} mb={"5%"}>
        <Container maxW={"md"} mb={10} w={"100%"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
            w={"100%"}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              color={"#000"}
            >
              <Heading
                color={"#EB7080"}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
              >
                SyncML
              </Heading>
              No-code, federated learning platform <br />
            </Heading>
          </Stack>

          <SimpleGrid columns={2} spacing={10} mb={4}>
            <Stack bg={"#d5d5d5"} borderRadius={"20px"} p={4}>
              <HStack>
                <Image src={decen} w={"30%"} ml={2} borderRadius={"15%"} />
                <Text color={"gray.600"} p={4}>
                  {" "}
                  Federated learning enables decentralized training of machine
                  learning models on distributed data sources, maintaining data
                  privacy and security. Devices in a network collectively
                  contribute to model training without centralizing the data.
                </Text>
              </HStack>
            </Stack>
            <Stack bg={"#d5d5d5"} borderRadius={"20px"} p={4}>
              <HStack>
                <Image
                  src={sett}
                  w={"30%"}
                  ml={2}
                  borderRadius={"15%"}
                  mt={4}
                />
                <Text color={"gray.600"} p={4}>
                  SyncML is a no-code , scalable platform for federated
                  learning, with model explainibility that enables users to
                  implement federated learning without having to worry about the
                  technical details of the underlying algorithms and
                  infrastructure so that Users can focus on configuring the
                  training process and analyzing the results.
                </Text>
              </HStack>
            </Stack>
            {/* <Stack bg={"#d5d5d5"} borderRadius={"20px"} p={4}>
            <Text color={"gray.600"} p={4}>
              SyncML is a no-code , scalable platform for federated learning,
              with model explainibility that enables users to implement
              federated learning without having to worry about the technical
              details of the underlying algorithms and infrastructure so that
              Users can focus on configuring the training process and analyzing
              the results.
            </Text>
          </Stack> */}
          </SimpleGrid>
        </Container>
        {/* <Container>
          <Box p={4}></Box>
        </Container> */}
        <Container>
          <Box
            textAlign="center"
            py={10}
            px={6}
            borderRadius={"20px"}
            bg={"#d5d5d5"}
            mb={12}
          >
            {/* <CheckCircleIcon boxSize={"50px"} color={"green.500"} /> */}
            <Heading as="h2" size="xl" mt={6} mb={2}>
              How it Works ?
            </Heading>
            {/* <Text color={"gray.500"}>How it works section</Text> */}
            <Box>
              <Image src={fed} alt={"how it works"} w={"100%"} h={"100%"} />
            </Box>
          </Box>
        </Container>
        <Container>
          <Box
            textAlign="center"
            py={10}
            px={6}
            bg={"#E2E8F0"}
            borderRadius={"20px"}
          >
            {/* <CheckCircleIcon boxSize={"50px"} color={"green.500"} /> */}
            <Heading
              as="h2"
              size="xl"
              mt={0}
              mb={8}
              bg={"#d5d5d5"}
              borderRadius={"20px"}
            >
              Solutions/Usecase
            </Heading>
            {/* <Text color={"gray.500"}>UseCase section</Text> */}
            <SimpleGrid columns={2} spacing={6} mb={4}>
              <Stack bg={"#d5d5d5"} borderRadius={"20px"} p={4}>
                <Text fontWeight={600}>Health Care</Text>
                <Text color={"gray.600"} p={4}>
                  {" "}
                  Federated learning can enable hospitals and research
                  institutions to collaborate on predictive models without
                  sharing sensitive patient data. Each institution can train the
                  global model on their local dataset, improving the model's
                  performance while keeping the data within their premises. With
                  Bravos, these institutions could subscribe to a global model
                  that's suited to their specific use case - for example, a
                  model for predicting disease outcomes based on patient vitals.
                </Text>
              </Stack>
              <Stack bg={"#d5d5d5"} borderRadius={"20px"} p={4}>
                <Text fontWeight={600}>Financial Services</Text>
                <Text color={"gray.600"} p={4}>
                  Banks and financial institutions often have to build machine
                  learning models on customer data spread across different
                  geographical locations. Using Bravos, each branch or regional
                  office could train the model on their local customer data
                  without needing to share it centrally, thereby preserving
                  customer privacy and adhering to regional data protection
                  regulations. This could be useful for applications like fraud
                  detection or credit scoring.
                </Text>
              </Stack>
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={6} mb={4}>
              <Stack bg={"#d5d5d5"} borderRadius={"20px"} p={4}>
                <Text fontWeight={600}>Telecom</Text>
                <Text color={"gray.600"} p={4}>
                  {" "}
                  Telecom providers could use Bravos to improve network
                  performance and customer experience. For example, a provider
                  could host a global model for predicting network outages based
                  on data from IoT devices spread across their network. Each
                  device would train the model locally, then send the updated
                  model back, allowing the provider to react quickly to
                  potential issues without needing to centralize the IoT data.
                </Text>
              </Stack>
              <Stack bg={"#d5d5d5"} borderRadius={"20px"} p={4}>
                <Text fontWeight={600}>Retail</Text>
                <Text color={"gray.600"} p={4}>
                  {" "}
                  Retail chains could use Bravos to build predictive models for
                  inventory management or sales forecasting. Each store would
                  train the model on their local sales data, improving the
                  model's performance without sharing sensitive business data
                  with the other stores. This would allow each store to make
                  accurate predictions while preserving the confidentiality of
                  their sales data.
                </Text>
              </Stack>
            </SimpleGrid>
          </Box>
        </Container>

        <Flex
          w={"full"}
          h={"40vh"}
          backgroundImage={
            "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
          }
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
          borderRadius={"20px"}
          mt={16}
        >
          <VStack w={"full"} justify={"center"}>
            <Stack w={"50%"} mr={"40%"} align={"flex-start"} spacing={6}>
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                // fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
              >
                accelerate AI projects and delivery of business value. By
                allowing access to more information faster and with less risk of
                data exposure, we can deliver better business decisions, greater
                efficiencies, and more competitive strategies.
              </Text>
              <Stack direction={"row"}>
                <Button
                  bg={"transparent"}
                  rounded={"full"}
                  color={"#fff"}
                  colorScheme={"red"}
                  border={"none"}
                  _hover={{ bg: "#ff0", color: "#000" }}
                >
                  Show me more
                </Button>
              </Stack>
            </Stack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Products;
