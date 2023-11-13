import { selector } from "recoil";
import { courseState } from "../atom/course";

export const courseStateLoading = selector({
    key: "courseStateLoading",
    get: ({ get }) => {
        const state = get(courseState)
        return state.isLoading
    }
})

export const courseStateMainCourse = selector({
    key: "courseStateman",
    get: ({ get }) => {
        const state = get(courseState)
        return state.course
    }
})

export const courseTitle = selector({
    key: "courseTitle",
    get: ({ get }) => {
        const state = get(courseState)
        return state.course.title
    }
})