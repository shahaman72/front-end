import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Box,
} from "@chakra-ui/react";
// import Demoapp from "./Demoapp/Demoapp";

const Home = () => {
  return (
    <>
      <Box bg={"#fff"}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="2em" h={"50px"} bg={"#ff0000"}>
            <Tab
              bg={"#ff0"}
              w={"40%"}
              ml={"10%"}
              h={"50px"}
              borderRadius={"20px"}
            >
              Demo
            </Tab>
            <Tab bg={"#ff0"} w={"40%"} h={"50px"} borderRadius={"20px"}>
              Result
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box bg={"#d5d5d5"} h={"80vh"}>
                {/* <Text>one</Text> */}
                {/* <Demoapp /> */}
              </Box>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default Home;
