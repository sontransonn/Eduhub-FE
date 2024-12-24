"use client"
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

import Banner from "@/containers/home-page/Banner";
import LiveSchedule from "@/containers/home-page/LiveSchedule";
import CourseList from '@/containers/home-page/CourseList'
import Topics from '@/containers/home-page/Topics'
import Instructors from '@/containers/home-page/Instructors'
import Solutions from '@/containers/home-page/Solutions'
import CTA from "@/containers/home-page/CTA";

import { getAllCourse } from "@/api/course.api";

import { HomeType } from "@/types/home.type";

export default function HomePage() {
  const [data, setData] = useState<HomeType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCourse();
        setData(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error.message);
          console.error('Failed:', error.message);
        } else {
          toast.error('An unknown error occurred');
          console.error('Failed with an unknown error');
        }
      }
    }
    fetchData()
  }, [])

  return (
    <main className="bg-[#F1F5F8] text-black">
      <Banner />
      <LiveSchedule />
      <CourseList
        title="Top bán chạy"
        slug="top-ban-chay"
        courses={data?.topSoldCourse || []}
      />
      <CourseList
        title="Khóa học phổ biến"
        slug="khoa-hoc-duoc-xem-nhieu"
        courses={data?.topViewCourse || []}
      />
      <CourseList
        title="Top ưu đãi"
        slug="top-uu-dai"
        courses={data?.topSaleCourse || []}
      />
      <CourseList
        title="Khóa học mới ra mắt"
        slug="khoa-hoc-moi-ra-mat"
        courses={data?.newReleasedCourse || []}
      />
      <Topics />
      <Instructors topAuthors={data?.topInstructorsByStudents || []} />
      <Solutions />
      <CTA />
    </main>
  );
}
