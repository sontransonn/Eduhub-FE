import React from "react";

import MainBanner from "@/containers/home-page/MainBanner";
import CourseList from '@/containers/home-page/CourseList'
import InterestTopics from '@/containers/home-page/InterestTopics'
import RecommendedBooks from '@/containers/home-page/RecommendedBooks'
import TopInstructors from '@/containers/home-page/TopInstructors'
import RelatedSolutions from '@/containers/home-page/RelatedSolutions'
import CallToAction from "@/containers/home-page/CallToAction";

export default function HomePage() {
  return (
    <div className="bg-[#F1F5F8] text-black">
      <main id="main" className="flex-shrink-0" role="main">
        <MainBanner />
        <CourseList
          title="Top bán chạy"
        />
        <CourseList
          title="Siêu ưu đãi hôm nay"
        />
        <CourseList
          title="Học viên đang xem"
        />
        <CourseList
          title="Học nhiều trong tuần"
        />
        <CourseList
          title="Khóa học mới ra mắt"
        />
        <InterestTopics />
        <RecommendedBooks />
        <TopInstructors />
        <RelatedSolutions />
        <CallToAction />
      </main>
    </div>
  );
}
