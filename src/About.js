// import { useProductContext } from "./context/productcontex";
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
  Center,
  Image,
} from "@chakra-ui/react";

const About = () => {
  // const { myName } = useProductContext();

  const data = {
    name: "Thapa Ecommerce",
  };

  return (
    <>
      <Box w={"80%"} ml={"10%"} mb={"5%"}>
        <Container maxW={"md"} w={"100%"}>
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
            >
              Realize Better Business Outcomes <br />
              {/* <Text as={"span"} color={"green.400"}>
              your audience
            </Text> */}
            </Heading>
            <Text color={"gray.500"}>
              From government agencies to financial institutions, Devron
              empowers your data and analytics to drive results. Whether it is
              saving money from unnecessary data migrations or ensuring that
              decision makers know what’s happening at the edge in real time,
              Devron makes it real in your enterprise.
            </Text>
          </Stack>
        </Container>
        <SimpleGrid columns={1} ml={"6%"} mt={4}>
          <Box bg={"#f5f5f5"} w={"100%"}>
            <Stack
              bg={useColorModeValue("gray.50", "gray.800")}
              py={16}
              px={8}
              spacing={{ base: 8, md: 10 }}
              align={"center"}
              direction={"column"}
            >
              <Box textAlign={"center"}>
                {/* <Avatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              alt={"Jenny Wilson"}
              mb={2}
            /> */}

                <Text fontWeight={600}>Jenny Wilson</Text>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                  <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text fontWeight={600}>Achim Rolle</Text>
                    <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
                  </Stack>
                </Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Blog
                </Text>
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Boost your conversion rate
                </Heading>
                <Text color={"gray.500"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
                <Text
                  fontSize={"sm"}
                  color={useColorModeValue("gray.400", "gray.400")}
                >
                  Vice President
                </Text>
              </Box>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                textAlign={"center"}
                maxW={"3xl"}
              >
                We had an incredible experience working with Chakra Templates
                and were impressed they made such a big difference in only three
                weeks. Our team is so grateful for the wonderful improvements
                they made and their ability to get familiar with the product
                concept so quickly.
              </Text>
            </Stack>
          </Box>
          <Box bg={"#f5f5f5"} w={"100%"}>
            <Stack
              bg={useColorModeValue("gray.50", "gray.800")}
              py={16}
              px={8}
              spacing={{ base: 8, md: 10 }}
              align={"center"}
              direction={"column"}
            >
              <Box textAlign={"center"}>
                {/* <Avatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              alt={"Jenny Wilson"}
              mb={2}
            /> */}

                <Text fontWeight={600}>Jenny Wilson</Text>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                  <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text fontWeight={600}>Achim Rolle</Text>
                    <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
                  </Stack>
                </Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Blog
                </Text>
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Boost your conversion rate
                </Heading>
                <Text color={"gray.500"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
                <Text
                  fontSize={"sm"}
                  color={useColorModeValue("gray.400", "gray.400")}
                >
                  Vice President
                </Text>
              </Box>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                textAlign={"center"}
                maxW={"3xl"}
              >
                We had an incredible experience working with Chakra Templates
                and were impressed they made such a big difference in only three
                weeks. Our team is so grateful for the wonderful improvements
                they made and their ability to get familiar with the product
                concept so quickly.
              </Text>
            </Stack>
          </Box>
          <Box bg={"#f5f5f5"} w={"100%"}>
            <Stack
              bg={useColorModeValue("gray.50", "gray.800")}
              py={16}
              px={8}
              spacing={{ base: 8, md: 10 }}
              align={"center"}
              direction={"column"}
            >
              <Box textAlign={"center"}>
                {/* <Avatar
              src={
                "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              }
              alt={"Jenny Wilson"}
              mb={2}
            /> */}

                <Text fontWeight={600}>Jenny Wilson</Text>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                  <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text fontWeight={600}>Achim Rolle</Text>
                    <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
                  </Stack>
                </Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Blog
                </Text>
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Boost your conversion rate
                </Heading>
                <Text color={"gray.500"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </Text>
                <Text
                  fontSize={"sm"}
                  color={useColorModeValue("gray.400", "gray.400")}
                >
                  Vice President
                </Text>
              </Box>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                textAlign={"center"}
                maxW={"3xl"}
              >
                We had an incredible experience working with Chakra Templates
                and were impressed they made such a big difference in only three
                weeks. Our team is so grateful for the wonderful improvements
                they made and their ability to get familiar with the product
                concept so quickly.
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default About;
