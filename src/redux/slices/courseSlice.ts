import { createSlice } from '@reduxjs/toolkit'

interface Course {
    id: string;
    courseName: string;
    description: string;
    rating: string;
    level: string;
    price: number;
    content: [];
    progress: string;
    approvedBy: {};
    slug: string;
    sold: number;
    view: number;
    discount: number
}
interface CourseState {
    currentCourse: Course | Record<string, any>;
    collectionCourse: Course[];
    topSoldCourse: Course[];
    topViewCourse: Course[];
    topSaleCourse: Course[];
    newReleasedCourse: Course[];
    topAuthors: [];
}

const initialState: CourseState = {
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