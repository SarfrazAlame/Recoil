import { selector } from "recoil";
import { userAtom } from "../atom/user";

export const isLoadingState = selector({
    key:"isLaoding",
    get:({get})=>{
        const state = get(userAtom)
        return state.isLoading
    }
})