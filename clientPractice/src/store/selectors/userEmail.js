import { selector } from "recoil";
import { userAtom } from "../atom/user";

export const userEmailState = selector({
    key: "userEmailState",
    get: ({ get }) => {
        const state = get(userAtom)
        return state.userEmail
    }
})