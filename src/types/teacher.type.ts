export type TeacherType = {
    courseAmount: number,
    _id: string,
    user: {
        city: string,
        coursePurchased: [],
        _id: string,
        fullName: string,
        gender: string,
        country: string,
        province: string,
        province_city: string,
        dateOfBirth: Date,
        avatar: string,
        email: string,
        phone: string,
        role: string,
    },
    description: string,
    cv: string,
    title: string,
    linkFb: string,
    experience: string,
    topic: string,
    students: number,
    rating: number,
}