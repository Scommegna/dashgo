import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink icon={RiDashboardLine} href="/dashboard" title="Dashboard" />
        <NavLink icon={RiContactsLine} href="/users" title="Usuários" />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="/forms" title="Formulários" />
        <NavLink icon={RiGitMergeLine} href="/automation" title="Automação" />
      </NavSection>
    </Stack>
  );
}
