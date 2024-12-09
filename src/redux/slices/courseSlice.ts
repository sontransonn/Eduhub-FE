import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentCourse: {},
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
        setCurrentCourse: (state, { payload }) => {
            state.currentCourse = payload
        },
        resetCurrentCourse: (state) => {
            state.currentCourse = {}
        },
        setDataInfo: (state, { payload }) => {
            state.topSoldCourse = payload.topSoldCourse
            state.topViewCourse = payload.topViewCourse
            state.topSaleCourse = payload.topSaleCourse
            state.newReleasedCourse = payload.newReleasedCourse
            state.topAuthors = payload.topInstructorsByStudents
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
    setCurrentCourse,
    resetCurrentCourse,
    setDataInfo,
    resetDataInfo,
    setCollectionCourse,
    resetCollectionCourse
} = courseSlice.actions

export default courseSlice.reducer