import Header from "@/containers/home-page/Header";
import CategoryMenu from "@/containers/home-page/CategoryMenu";
import MainBanner from "@/containers/home-page/MainBanner";

export default function Home() {

  return (
    <>
      <Header />
      <CategoryMenu />
      <div className="bg-[#F1F5F8] text-black">
        <main id="main" className="flex-shrink-0" role="main">
          <MainBanner />
        </main>
      </div>
    </>
  );
}
