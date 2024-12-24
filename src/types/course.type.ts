export type CourseProps = {
    _id: string,
    courseName: string
    description: string
    introduce: string
    slug: string,
    videos: [{ _id: string, lessonName: string }]
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
    subCategory: []
    approvedBy: { _id: string, fullName: string }
}