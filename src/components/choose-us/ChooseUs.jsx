import RecentPosts from "../blog-page/RecentPosts";
import Title from "./Title";

function ChooseUs() {
  return (
    <section className="relative overflow-clip bg-[url('./images/choose-us/bg.webp')] px-6 py-32 after:absolute after:right-0 after:top-0 after:z-[-1] after:h-96 after:w-full after:animate-float1 after:bg-[url('./images/trainers/bg-attachment.png')] after:bg-right after:bg-no-repeat">
      <div className="container space-y-14">
        <Title />
        <RecentPosts />
        
      </div>
    </section>
  );
}

export default ChooseUs;
