import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    collectionCourse: [],
    topSoldCourse: [],
    topViewCourse: [],
    topSaleCourse: [],
    newReleasedCourse: [],
    topAuthors: [],
}

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setDataInfo: (state, { payload }) => {
            state.topSoldCourse = payload.topSoldCourse
            state.topViewCourse = payload.topViewCourse
            state.topSaleCourse = payload.topSaleCourse
            state.newReleasedCourse = payload.newReleasedCourse
            state.topAuthors = payload.topAuthors
        },
        resetDataInfo: (state) => {
            state.topSoldCourse = []
            state.topViewCourse = []
            state.topSaleCourse = []
            state.newReleasedCourse = []
            state.topAuthors = []
        },
        setCollectionCourse: (state, { payload }) => {
            state.collectionCourse = payload
        },
        resetCollectionCourse: (state) => {
            state.collectionCourse = []
        }
    }
})

export const {
    setDataInfo,
    resetDataInfo,
    setCollectionCourse,
    resetCollectionCourse
} = courseSlice.actions

export default courseSlice.reducer