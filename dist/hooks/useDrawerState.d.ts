import { DrawerContent } from "components/Drawer";
import { DrawerContentState, DrawerStateWithDispatch } from "states/DrawerState";
export type DrawerHelperFunctions = {
    closeDrawer: () => void;
    openDrawerWith: (c: DrawerContent) => void;
    setDrawerContentState: (s: DrawerContentState) => void;
};
export declare const useDrawerState: () => DrawerStateWithDispatch & DrawerHelperFunctions;
//# sourceMappingURL=useDrawerState.d.ts.map