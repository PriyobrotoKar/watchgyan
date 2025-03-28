import CuratedPicks from "@/features/blog/components/CuratedPicks";
import Herosection from "@/features/blog/components/Herosection";
import LatestGlobalBlogs from "@/features/blog/components/LatestGlobalBlogs";
import RecentBlogs from "@/features/blog/components/RecentBlogs";
import TopArticles from "@/features/blog/components/TopArticles";
import Footer from "@/features/home/components/Footer";
import ThemeSwitcherWrapper from "@/features/home/components/ThemeSwitcherWrapper";
import { Suspense } from "react";

export default function BlogPage() {
  return (
    <div className="theme-wrapper space-y-24 bg-background transition-colors duration-500 md:space-y-32">
      <Herosection />
      <RecentBlogs />
      <TopArticles />
      <CuratedPicks />
      <ThemeSwitcherWrapper>
        <LatestGlobalBlogs />
        <Suspense>
          <Footer />
        </Suspense>
      </ThemeSwitcherWrapper>
    </div>
  );
}
