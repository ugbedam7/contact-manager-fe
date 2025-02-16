import { useState } from "react";
import { FaHome, FaCog, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { Box, Text, VStack, HStack, Icon, Flex, Stack } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import "../../../Profile.css";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: FaHome },
    { name: "Settings", icon: FaCog },
    { name: "Analytics", icon: FaChartBar },
    { name: "Logout", icon: FaSignOutAlt }
  ];

  return (
    <Box className="sidebar bg-dark text-white p-4" height="100vh">
      <Text fontSize="xl" fontWeight="bold" mb={5}>
        User Profile
      </Text>
      <VStack align="start" spacing={4}>
        {menuItems.map((item, index) => (
          <HStack
            key={index}
            className="menu-item p-2 rounded"
            cursor="pointer"
          >
            <Icon as={item.icon} boxSize={5} />
            <Text>{item.name}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

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

const Dashboard = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    twitter: "@johndoe",
    bio: "Software Developer. Tech Enthusiast. Coffee Lover.",
    profileImage: "https://via.placeholder.com/150"
  });

  return (
    <Box className="dashboard p-4" flex="1">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        About
      </Text>
      <Box className="card p-4 shadow d-flex flex-column align-items-center mb-4">
        <Avatar
          borderRadius="full"
          boxSize="120px"
          src={"./sample.png"}
          alt={user.name}
          mb={3}
        />
      </Box>
      <Box className="card p-4 shadow">
        <Text fontSize="lg" fontWeight="semibold" mb={3}>
          Contact Information
        </Text>
        <Stack spacing={3}>
          <ContactDetailItem label="Name" value={user.name} />
          <ContactDetailItem label="Email" value={user.email} />
          <ContactDetailItem label="Twitter" value={user.twitter} />
          <ContactDetailItem label="Bio" value={user.bio} />
        </Stack>
      </Box>
    </Box>
  );
};

const ProfilePage = () => {
  return (
    <div className="d-flex h-100">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default ProfilePage;
