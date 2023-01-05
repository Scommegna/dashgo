import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Scommegna</Text>
        <Text color="gray.300" fontSize="small">
          scommegnal@hotmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Lucas Scommegna"
        src="http://github.com/scommegna.png"
      />
    </Flex>
  );
}
