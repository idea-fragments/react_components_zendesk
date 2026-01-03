import { DrawerContent } from "components/Drawer";
import { Dispatch, SetStateAction } from "react";
export type DrawerContentState = Record<string, any>;
export type DrawerState = {
    isDrawerOpen: boolean;
    drawerContent?: DrawerContent;
    drawerContentState: DrawerContentState;
};
export type DrawerStateWithDispatch = {
    drawerState: Readonly<DrawerState>;
    setDrawerState: Dispatch<SetStateAction<DrawerState>>;
};
export declare const defaultUiState: DrawerStateWithDispatch;
export declare const DrawerStateContext: import("react").Context<DrawerStateWithDispatch>;
//# sourceMappingURL=DrawerState.d.ts.map