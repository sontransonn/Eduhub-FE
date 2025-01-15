export type CourseProps = {
    _id: string,
    courseName: string
    description: string
    introduce: string
    slug: string,
    videos?: { _id: string, lessonName: string }[]
    progress: string
    poster: string
    sold: number
    rating: string
    approvalStatus: string
    ratingNum: number
    view: number
    price: number
    discount: number
    category: string
    createdAt: string
    updatedAt: string
    subCategories: []
    approvedBy: { _id: string, fullName: string, user: { _id: string, fullName: string, avatar: string }, title: string, experience: string, students: number, courseAmount: number, rating: number }
    target: []
}