import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
  } from "@chakra-ui/react";
  import { LANGUAGE_VERSIONS } from "../constants";
  
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const ACTIVE_COLOR = "blue.400";
  
  const LanguageSelector = ({ language, onSelect }) => {
    return (
      <Box ml={2} mb={4}>
        <Text mb={1}  fontSize="xl">
          Create your strategy model
        </Text>
        <Text mb={2} fontSize="lg">
          Language:
        </Text>
        {/* <Menu isLazy>
          <MenuButton as={Button}>{language}</MenuButton>
          <MenuList bg="#110c1b">
            {languages.map(([lang, version]) => (
              <MenuItem
                key={lang}
                color={lang === language ? ACTIVE_COLOR : ""}
                bg={lang === language ? "gray.900" : "transparent"}
                _hover={{
                  color: ACTIVE_COLOR,
                  bg: "gray.900",
                }}
                onClick={() => onSelect(lang)}
              >
                {lang}
                &nbsp;
                <Text as="span" color="gray.600" fontSize="sm">
                  ({version})
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu> */}
        <select
            value={language}
            onChange={(e) => onSelect(e.target.value)}
            style={{ backgroundColor: "#110c1b", color: "white", padding: "5px" }}
        >
    {languages.map(([lang, version]) => (
      <option key={lang} value={lang}>
        {lang} ({version})
      </option>
    ))}
  </select>
      </Box>
    );
  };
  export default LanguageSelector;