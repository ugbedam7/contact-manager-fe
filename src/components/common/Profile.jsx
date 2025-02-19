import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";

const ContactDetailItem = ({ label, value }) => (
  <Flex justify="space-between" w="full">
    <Text flex={"1"} fontWeight="bold" className="contact-view">
      {label}
    </Text>
    <Text flex={"1"} className="contact-view">
      {value}
    </Text>
  </Flex>
);

const Profile = () => {
  const [user, setUser] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@example.com",
    twitter: "@johndoe",
    bio: "Software Developer. Tech Enthusiast. Coffee Lover.",
    profileImage: "https://via.placeholder.com/150",
  });

  return (
    <Box className="dashboard">
      <Box
        className="profile p-4 shadow d-flex flex-column align-items-center mb-4"
        bg={"gray.700"}
      >
        <Avatar
          borderRadius="full"
          boxSize="120px"
          src={"/sample.png"}
          alt={user.firstname}
          mb={3}
        />
      </Box>
      <Box className="profile p-4 shadow">
        <Text fontSize="2xl" textAlign={"center"} fontWeight="semibold" mb={3}>
          Contact Information
        </Text>
        <Stack>
          <ContactDetailItem label="Firstname" value={user.firstname} />
          <ContactDetailItem label="Lastname" value={user.lastname} />
          <ContactDetailItem label="Email" value={user.email} />
          <ContactDetailItem label="Twitter" value={user.twitter} />
          <ContactDetailItem label="Bio" value={user.bio} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Profile;
