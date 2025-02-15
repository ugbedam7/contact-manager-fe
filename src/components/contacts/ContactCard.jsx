import { Box, Card, Flex, Heading, Text, Icon, Button } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import { useColorModeValue } from "@/components/ui/color-mode";
import EditContact from "./EditContactModal";
import { toast } from "react-toastify";
import { BASE_URL } from "../../App";
import { Link } from "react-router-dom";
import { Tooltip } from "@/components/ui/tooltip";
import ContactImage from "../common/ContactImage";
import { useState } from "react";
import { GrUpdate } from "react-icons/gr";

const ContactCard = ({ contact, setContacts, cardMinWidth }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [contactImg, setContactImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Update Image
  const updateContactImage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const res = await fetch(`${BASE_URL}/api/contacts/${contact._id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`
        },
        body: formData
      });

      const result = await res.json();

      contact = result.contact;
      if (!res.ok) throw new Error(result.error);

      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
      setSelectedFile(null);
    }
  };

  const handleDeleteContact = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/contacts/${contact._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`
        }
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error);
      }

      setContacts((prevContacts) =>
        prevContacts.filter((u) => u._id !== contact._id)
      );
      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <Card.Root
      minWidth={cardMinWidth}
      bg={useColorModeValue("#fff", "gray.700")}
      transform={"scale(1)"}
      transition={"all 0.3s"}
      _hover={{ transform: "scale(1.02)" }}
      boxShadow={"md"}
      borderRadius={"md"}
    >
      <Card.Header>
        <Flex gap={4}>
          <Flex flex={"1"} gap={"4"} alignItems={"start"}>
            <ContactImage
              contact={contact}
              contactImg={contactImg}
              setContactImg={setContactImg}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />

            <Link
              to={`/dashboard/${contact._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box>
                <Heading
                  fontWeight="semibold"
                  textStyle="lg"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  maxWidth="200px"
                >
                  {contact.firstname} {contact.lastname}
                </Heading>
                <Tooltip content={contact.email} showArrow>
                  <Text
                    marginBottom={"0"}
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    maxWidth="200px"
                  >
                    {contact.email}
                  </Text>
                </Tooltip>
                <Text>{contact.phone}</Text>
                <Text color="fg.muted" textStyle="md">
                  {contact.address}
                </Text>
              </Box>
            </Link>
          </Flex>

          <Flex gap={1} justifyContent="flex-end" minWidth="fit-content">
            {!selectedFile && (
              <>
                <EditContact contact={contact} setContacts={setContacts} />

                <Icon
                  fontSize="21px"
                  color={"tomato"}
                  cursor={"pointer"}
                  onClick={handleDeleteContact}
                >
                  <BiTrash />
                </Icon>
              </>
            )}

            {selectedFile && (
              <Button
                size={"sm"}
                type="submit"
                bg={"cyan.400"}
                borderRadius={4}
                onClick={updateContactImage}
              >
                {isLoading ? (
                  <Flex justifyContent={"center"}>
                    <img
                      src="/spinner.gif"
                      alt="spinner"
                      height={25}
                      width={25}
                    />
                  </Flex>
                ) : (
                  <GrUpdate />
                )}
              </Button>
            )}
          </Flex>
        </Flex>
      </Card.Header>
    </Card.Root>
  );
};

export default ContactCard;

{
  /* <Card.Root bg={useColorModeValue('gray.100', 'gray.700')}>
      <Card.Body>
        <HStack mb="6" gap="3">
          <Avatar src="https://avatar.iran.liara.run/public" />
          <Stack gap="0">
            <Text fontWeight="semibold" textStyle="sm">
              {user.name}
            </Text>
            <Text color="fg.muted" textStyle="sm">
              {user.role}
            </Text>
          </Stack>
        </HStack>
        <Card.Description>{user.description}</Card.Description>
      </Card.Body>
    </Card.Root> */
}
