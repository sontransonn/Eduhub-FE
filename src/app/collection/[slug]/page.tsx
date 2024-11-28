"use client"
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'next/navigation'
import Link from 'next/link'

import { setCollectionCourse } from '@/redux/slices/courseSlice'
import { resetCollectionCourse } from '@/redux/slices/courseSlice'

import CourseCard from '@/components/card/CourseCard'
import SkeletonCard from '@/components/card/SkeletonCard'

import { getCourseByOptions } from '@/api/course.api'

const Collection = () => {
    const params = useParams()
    const slug = params.slug

    const dispatch = useDispatch()

    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const { collectionCourse } = useSelector((state: any) => state.course)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCourseByOptions(slug, page);
            dispatch(setCollectionCourse(data.courses))
            setPage((prevPage) => prevPage + 1);
        }
        fetchData()

        return () => {
            dispatch(resetCollectionCourse());
        };
    }, [])

    const loadMore = async () => {
        if (isLoading) return;
        setIsLoading(true);
        try {
            const data = await getCourseByOptions(slug, page);
            dispatch(setCollectionCourse([...collectionCourse, ...data.courses]))
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error("Error loading more courses", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className='bg-[#F1F5F8] text-black'>
            <div className='max-w-8xl mx-auto px-4 xl:px-20 lg:px-10 md:px-10 py-8 flex flex-col gap-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-semibold font-medium text-2xl'>TOP BÁN CHẠY</h3>
                    <span className='text-lg'>Tìm thấy <span className='text-orange-500'>369</span> khóa học</span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {collectionCourse.length > 0 ? (
                        collectionCourse.map((course: any, index: number) => (
                            <div key={index} className="w-full col">
                                <Link href={`/course/`} className="col">
                                    <CourseCard
                                        courseName={course.courseName}
                                        rating={course.rating}
                                    />
                                </Link>
                            </div>
                        ))
                    ) : (
                        Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="w-full col">
                                <SkeletonCard />
                            </div>
                        ))
                    )}
                </div>

                <button className='w-fit self-center text-white bg-orange-500 hover:bg-orange-600 py-[6px] px-3 rounded-sm' onClick={loadMore}>
                    Xem tiếp
                </button>
            </div>
        </main>
    )
}

export default Collection