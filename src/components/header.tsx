import { FunctionComponent } from "react";
import { Flex, Container, Text } from "@radix-ui/themes";
import { Bars2Icon } from "@heroicons/react/24/outline";
import Logo from "./logo";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <Flex className="p-4 bg-sky-900">
      <Container>
        <Flex direction="row" justify="between" align="center" mb="6">
          <Logo />

          <button className="p-3 rounded-full hover:bg-white/10">
            <Bars2Icon className="w-5 h-5 text-white" />
          </button>
        </Flex>

        <Text size="7" weight="bold" className="text-white hidden md:block">
          Millions of cheap flights. One simple search.
        </Text>
      </Container>
    </Flex>
  );
};

export default Header;
