import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Scommegna</Text>
          <Text color="gray.300" fontSize="small">
            scommegnal@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Lucas Scommegna"
        src="http://github.com/scommegna.png"
      />
    </Flex>
  );
}
