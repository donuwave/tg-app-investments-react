import {
  SAction,
  SActions,
  SBackdrop,
  SChangePassword,
  SDropDown,
  SForm,
  SFormItem,
  SIcon,
  SImg,
  SInput,
  SInputDropdown,
  SLabel,
  SLabelDropdown,
  STitle,
  SWrapperImg,
} from "./profile.styles";
import {
  ArrowDownIcon,
  InvestorsIcon,
  ManualIcon,
  PartnersIcon,
  PresentationIcon,
  ProfileIcon,
} from "@shared/assets";
import {Button, Dropdown, type MenuProps} from "antd";
import { type MouseEventHandler, useMemo, useState } from "react";
import { ActiveBadge, InactiveBadge } from "@entities/profile";
import { languages } from "../lib/lang.items.ts";
import { ProfileLayout } from "@shared/components";
import {Modal} from "@shared/components/Modal/Modal.tsx";

const LangItemLabel = ({ text, active }: { text: string; active: boolean }) => (
  <SLabelDropdown>
    <span>{text}</span>
    {active ? <ActiveBadge /> : <InactiveBadge />}
  </SLabelDropdown>
);

export const Profile = () => {
  const [selectedLang, setSelectedLang] = useState<string>("ru");
  const [isOpenInstruction, setIsOpenInstruction] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const lang = languages.find((el) => el.key === selectedLang)?.label;

  const items: MenuProps["items"] = useMemo(
    () =>
      languages.map((lang) => ({
        key: lang.key,
        label: (
          <LangItemLabel text={lang.label} active={lang.key === selectedLang} />
        ),
      })),
    [selectedLang],
  );

  const handleCloseDropdown = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChoiceLang: MenuProps["onClick"] = ({ key }) => {
    setSelectedLang(key);
    setIsOpen(false);
  };

  const handleInputReset: MouseEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
      <>
        <Modal open={isOpenInstruction} onClose={() => setIsOpenInstruction(false)}/>

        <ProfileLayout>
          <STitle>Профиль</STitle>
          <SWrapperImg>
            <SImg>
              <SIcon>
                <ProfileIcon />
              </SIcon>
              <img src="/profile.png" />
            </SImg>
          </SWrapperImg>

          <SForm>
            <SFormItem>
              <SLabel>Никнейм</SLabel>
              <SInput size="large" placeholder="Никнейм" />
            </SFormItem>
            <SFormItem>
              <SLabel>Почта</SLabel>
              <SInput size="large" placeholder="Почта" />
            </SFormItem>
            <SFormItem>
              <SLabel>Язык</SLabel>

              <SBackdrop visible={isOpen} />

              <Dropdown
                  open={isOpen}
                  onOpenChange={handleCloseDropdown}
                  placement="bottomCenter"
                  align={{ offset: [0, 30] }}
                  menu={{
                    items,
                    selectedKeys: [selectedLang],
                    onClick: handleChoiceLang,
                  }}
                  trigger={["click"]}
              >
                <SDropDown>
                  <SInputDropdown
                      value={lang}
                      size="large"
                      placeholder="Язык"
                      onMouseDown={handleInputReset}
                  />
                  <Button
                      onClick={handleToggleDropdown}
                      size="large"
                      icon={<ArrowDownIcon />}
                  />
                </SDropDown>
              </Dropdown>
            </SFormItem>
          </SForm>

          <SActions>
            <SAction onClick={() => setIsOpenInstruction(true)} size="large" icon={<ManualIcon />}>
              Инструкция
            </SAction>
            <SAction size="large" icon={<PresentationIcon />}>
              Призентация
            </SAction>
            <SAction size="large" icon={<InvestorsIcon />}>
              Инвесторам
            </SAction>
            <SAction size="large" icon={<PartnersIcon />}>
              Партнерам
            </SAction>
          </SActions>

          <SChangePassword danger type="dashed">
            Сменить пароль
          </SChangePassword>
        </ProfileLayout>
      </>


  );
};
