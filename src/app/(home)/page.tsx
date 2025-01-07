"use client"
import React, { useState, useEffect } from "react";

import Banner from "@/app/(home)/components/Banner";
import LiveSchedule from "@/app/(home)/components/LiveSchedule";
import CourseList from "@/app/(home)/components/CourseList";
import Topics from "@/app/(home)/components/Topics";
import Instructors from "@/app/(home)/components/Instructors";
import Solutions from "@/app/(home)/components/Solutions";
import CTA from "@/app/(home)/components/CTA";

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
          console.error('Failed:', error.message);
        } else {
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
