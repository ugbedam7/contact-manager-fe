import {
  Container,
  Box,
  Stack,
  Flex,
  Text,
  Badge,
  Button
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { FiBell } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactGrid from "../contacts/ContactGrid";
import { useAuth } from "../AuthContext";
import { ColorModeButton } from "@/components/ui/color-mode";
import CreateContactModal from "../contacts/CreateContactModal";
import { RiContactsBook3Fill } from "react-icons/ri";
import Menu from "./Menu";

const UserDashboard = () => {
  const [user, setUser] = useState(sessionStorage.getItem("user"));
  const [contacts, setContacts] = useState([]);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Centralized color and background values
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.900", "white");

  return (
    <Stack bg={{ base: "white", _dark: "#1A202C" }} minH={"100vh"}>
      <Container maxW={"900px"}>
        <Box px={4} my={4} borderRadius={5} bg={bgColor}>
          <Flex h="12" alignItems={"center"} justifyContent={"space-between"}>
            <Flex gap={3} alignItems={"center"}>
              <Button
                onClick={() => navigate("/dashboard/contacts")}
                variant="outline"
              >
                <Box display={{ base: "block", md: "none" }}>
                  <RiContactsBook3Fill />
                </Box>

                <Box display={{ base: "none", md: "block" }}>
                  View All Contacts
                </Box>
              </Button>
              <ColorModeButton />
              <CreateContactModal setContacts={setContacts} />
            </Flex>
            <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
              <Box position="relative">
                <Button variant="ghost">
                  <FiBell />
                </Button>
                <Badge
                  position="absolute"
                  top="1"
                  right="3"
                  color={textColor}
                  borderRadius="full"
                  fontSize="0.7em"
                  bg={"red.500"}
                  size={"xs"}
                >
                  2
                </Badge>
              </Box>
              {isAuthenticated && (
                <Badge
                  bg={isAuthenticated ? "green.500" : "gray.400"}
                  borderRadius="full"
                  size={"xs"}
                  p={2}
                ></Badge>
              )}
              <Flex alignItems={"center"}>
                <Box fontSize="md" fontWeight="semibold" color={textColor}>
                  {user}
                </Box>
              </Flex>
              <Menu />
            </Flex>
          </Flex>
        </Box>
      </Container>

      <Container maxW={"1200px"} my={4}>
        <Text
          fontSize={{ base: "3xl", md: "50" }}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
        >
          <Text
            as={"span"}
            bgGradient="to-r"
            gradientFrom="cyan.400"
            gradientTo="blue.500"
            bgClip={"text"}
          >
            Your Contacts
          </Text>
        </Text>

        <ContactGrid
          contacts={contacts}
          setContacts={setContacts}
          showSearch={false}
          userId={sessionStorage.getItem("userId")}
        />
      </Container>
    </Stack>
  );
};

export default UserDashboard;
