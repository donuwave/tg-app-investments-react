import { SButtonMenu, SContent, SMenu, SSegmented } from "./menu.styles";
import { HelpIcon } from "@shared/assets";
import { useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "@widgets/Menu/lib/itemsMenu.ts";
import { Modal } from "@shared/components";
import { useState } from "react";

export const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpenInstruction, setIsOpenInstruction] = useState(false);

  const currentValue =
    menuItems.find((item) => location.pathname.startsWith(item.value))?.value ??
    "";

  const handleProfileNavigate = () => {
    navigate("/profile");
  };

  return (
    <>
      <Modal
        open={isOpenInstruction}
        onClose={() => setIsOpenInstruction(false)}
      />

      <SMenu>
        <SContent>
          <SButtonMenu
            onClick={() => setIsOpenInstruction(true)}
            icon={<HelpIcon />}
          />
          <SSegmented
            value={currentValue}
            onChange={(val) => val && navigate(val)}
            options={menuItems.map(({ value, Icon }) => ({
              value,
              label: <Icon isSelected={value === currentValue} />,
            }))}
          />
          <SButtonMenu
            onClick={handleProfileNavigate}
            icon={<img src="/profile.png" />}
          />
        </SContent>
      </SMenu>
    </>
  );
};
