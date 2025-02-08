import {
  Box,
  Container,
  Flex,
  Stack,
  Avatar,
  Card,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import EditContact from "./EditContactModal";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../App";

const ContactDetailItem = ({ label, value }) => (
  <Flex justify="space-between" w="full">
    <Text flex={"1"} fontWeight="bold" className="view">
      {label}
    </Text>
    <Text flex={"1"} className="view">
      {value}
    </Text>
  </Flex>
);

const ContactView = ({ contact, setContact }) => {
  const navigate = useNavigate();

  const handleDeleteContact = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/contacts/${contact._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
        },
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error);
      }

      toast.success(result.message);
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Centralized color and background values
  const textColor = useColorModeValue("gray.900", "white");
  const cardBgColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Stack minH={"100vh"}>
      <Container maxW={{ base: "100%", md: "600px" }}>
        <Card.Root bg={cardBgColor} px={4} borderRadius={5}>
          <Card.Body>
            <Flex
              align="start"
              justify="space-between"
              direction={{ base: "column", sm: "row" }}
            >
              <Flex align="start" gap={6} flex={1}>
                <Avatar.Root size={"2xl"} shape="rounded">
                  <Avatar.Fallback name={contact.name} />
                  <Avatar.Image src={contact.imgUrl} />
                </Avatar.Root>

                <Box>
                  <Text className="view" fontWeight="bold" textStyle="xl">
                    {contact.name}
                  </Text>
                  <Text color={textColor} textStyle="lg" marginBottom={"0"}>
                    {contact.email}
                  </Text>
                  <Text color="#329FF3" textStyle="lg">
                    {contact.xhandle}
                  </Text>
                </Box>
              </Flex>
              <Button variant={"outline"} size="md" mr={4} borderRadius={4}>
                <Icon
                  fontSize="21px"
                  color={"tomato"}
                  cursor={"pointer"}
                  onClick={handleDeleteContact}
                >
                  <BiTrash />
                </Icon>
              </Button>
            </Flex>
          </Card.Body>
        </Card.Root>

        <Flex
          borderRadius={5}
          align={"center"}
          justify={"space-between"}
          mt={6}
          p={2}
          bg={cardBgColor}
          color={textColor}
        >
          <Box ml={4} fontSize="lg" fontWeight="semibold">
            Contact Details
          </Box>
          <Button variant={"outline"} size="sm" pr={"0"} borderRadius={4}>
            <EditContact contact={contact} setContact={setContact} />
          </Button>
        </Flex>

        <Box
          p={6}
          mt={2}
          height={"full"}
          borderRadius={5}
          bg={cardBgColor}
          color={textColor}
        >
          <Stack spacing={3}>
            <ContactDetailItem
              label="First Name"
              value={contact.name.split(" ")[0]}
            />
            <ContactDetailItem
              label="Last Name"
              value={contact.name.split(" ")[1] || ""}
            />
            <ContactDetailItem label="Email" value={contact.email} />
            <ContactDetailItem label="Mobile" value={contact.phone} />
            <ContactDetailItem label="Address" value={contact.address} />
          </Stack>
        </Box>
      </Container>
    </Stack>
  );
};

export default ContactView;
