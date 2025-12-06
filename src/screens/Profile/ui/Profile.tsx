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
import { Button, Dropdown, type MenuProps } from "antd";
import { type MouseEventHandler, useMemo, useState } from "react";
import { ActiveBadge, InactiveBadge } from "@entities/profile";
import { languages } from "../lib/lang.items.ts";
import { ProfileLayout, Modal } from "@shared/components";
import { useTranslation } from "react-i18next";

const LangItemLabel = ({ text, active }: { text: string; active: boolean }) => (
  <SLabelDropdown>
    <span>{text}</span>
    {active ? <ActiveBadge /> : <InactiveBadge />}
  </SLabelDropdown>
);

export const Profile = () => {
  const savedLang = localStorage.getItem("app_language") || "ru";
  const [selectedLang, setSelectedLang] = useState<string>(savedLang);
  const [isOpenInstruction, setIsOpenInstruction] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

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
    i18n.changeLanguage(key);
    localStorage.setItem("app_language", key);
    setIsOpen(false);
  };

  const handleInputReset: MouseEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      <Modal
        open={isOpenInstruction}
        onClose={() => setIsOpenInstruction(false)}
      />

      <ProfileLayout>
        <STitle>{t("profile.title")}</STitle>
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
            <SLabel>{t("profile.nickname")}</SLabel>
            <SInput size="large" placeholder={t("profile.nickname")} />
          </SFormItem>
          <SFormItem>
            <SLabel>{t("profile.email")}</SLabel>
            <SInput size="large" placeholder={t("profile.email")} />
          </SFormItem>
          <SFormItem>
            <SLabel>{t("profile.language")}</SLabel>

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
                  placeholder={t("profile.language")}
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
          <SAction
            onClick={() => setIsOpenInstruction(true)}
            size="large"
            icon={<ManualIcon />}
          >
            {t("profile.instruction")}
          </SAction>
          <SAction size="large" icon={<PresentationIcon />}>
            {t("profile.presentation")}
          </SAction>
          <SAction size="large" icon={<InvestorsIcon />}>
            {t("profile.investors")}
          </SAction>
          <SAction size="large" icon={<PartnersIcon />}>
            {t("profile.partners")}
          </SAction>
        </SActions>

        <SChangePassword danger type="dashed">
          {t("profile.partners")}
        </SChangePassword>
      </ProfileLayout>
    </>
  );
};
