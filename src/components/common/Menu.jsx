import { Button, Box } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger
} from "@/components/ui/menu";

const Menu = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Centralized color and background values
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.900", "white");
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="md" outline={"none"}>
          <MdMenu />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <Box bg={bgColor} p={2} borderRadius="sm">
          <MenuItem value="profile" cursor={"pointer"}>
            Profile
          </MenuItem>
          <MenuItem value="settings" cursor={"pointer"}>
            Settings
          </MenuItem>
          <MenuItem value="logout" cursor={"pointer"} onClick={handleLogout}>
            Logout
          </MenuItem>
        </Box>
      </MenuContent>
    </MenuRoot>
  );
};

export default Menu;
