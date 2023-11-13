import { atom } from "recoil";

export const userAtom = atom({
    key: "adminAtom",
    default: {
        isLoading: true,
        userEmail: null
    }
})