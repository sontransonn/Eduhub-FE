"use client"
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setDataInfo } from "@/redux/slices/courseSlice";
import { resetDataInfo } from "@/redux/slices/courseSlice";

import Banner from "@/containers/home-page/Banner";
import LiveSchedule from "@/containers/home-page/LiveSchedule";
import CourseList from '@/containers/home-page/CourseList'
import Topics from '@/containers/home-page/Topics'
import Instructors from '@/containers/home-page/Instructors'
import Solutions from '@/containers/home-page/Solutions'
import CTA from "@/containers/home-page/CTA";

import { getAllCourse } from "@/api/course.api";

export default function HomePage() {
  const dispatch = useDispatch()

  const {
    topSoldCourse, topViewCourse,
    topSaleCourse, newReleasedCourse, topAuthors
  } = useSelector((state: any) => state.course)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCourse();
      dispatch(setDataInfo(data))
    }
    fetchData()

    return () => {
      dispatch(resetDataInfo());
    };
  }, [])

  return (
    <main className="flex-shrink-0 bg-[#F1F5F8] text-black">
      <Banner />
      <LiveSchedule />
      <CourseList
        title="Top bán chạy"
        slug="top-ban-chay"
        courses={topSoldCourse}
      />
      <CourseList
        title="Khóa học phổ biến"
        slug="khoa-hoc-duoc-xem-nhieu"
        courses={topViewCourse}
      />
      <CourseList
        title="Top ưu đãi"
        slug="top-uu-dai"
        courses={topSaleCourse}
      />
      <CourseList
        title="Khóa học mới ra mắt"
        slug="khoa-hoc-moi-ra-mat"
        courses={newReleasedCourse}
      />
      <Topics />
      <Instructors />
      <Solutions />
      <CTA />
    </main>
  );
}
