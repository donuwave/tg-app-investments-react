import type { FC, PropsWithChildren } from "react";
import { WithTheme } from "./WithTheme";
import { WithStyledComponents } from "./WithStyledComponents";

export const WithProviders: FC<PropsWithChildren> = ({ children }) => {
    return (
        <WithStyledComponents>
            <WithTheme>{children}</WithTheme>
        </WithStyledComponents>
    );
};
