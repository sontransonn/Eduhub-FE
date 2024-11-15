import React from "react";

import Banner from "@/containers/home-page/Banner";
import LiveSchedule from "@/containers/home-page/LiveSchedule";
import CourseList from '@/containers/home-page/CourseList'
import Topics from '@/containers/home-page/Topics'
import Books from '@/containers/home-page/Books'
import Instructors from '@/containers/home-page/Instructors'
import Solutions from '@/containers/home-page/Solutions'
import CTA from "@/containers/home-page/CTA";

export default function HomePage() {
  return (
    <main className="flex-shrink-0 bg-[#F1F5F8] text-black">
      <Banner />
      <LiveSchedule />
      <CourseList
        id="sell-course-most"
        title="Top bán chạy"
        quantity={12}
      />
      <CourseList
        id="promotion-home"
        title="Siêu ưu đãi hôm nay"
        quantity={8}
      />
      <CourseList
        id="student-watching"
        title="Học viên đang xem"
        quantity={8}
      />
      <CourseList
        id="course-top-weekly"
        title="Học nhiều trong tuần"
        quantity={8}
      />
      <CourseList
        id="course-new"
        title="Khóa học mới ra mắt"
        quantity={8}
      />
      <Topics />
      <Books />
      <Instructors />
      <Solutions />
      <CTA />
    </main>
  );
}
