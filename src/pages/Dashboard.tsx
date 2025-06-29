import { POSTS_DATA, PROFILE_DATA } from '@/shared/constants';
import { PostCard } from '@/widgets/PostCard';
import { ProfileCard } from '@/widgets/ProfileCard';
import { Accordion } from '@/shared/ui/components/Accordion';

const Dashboard = () => {
  return (
    <main className="grid lg:grid-cols-[minmax(auto,522px)_minmax(auto,738px)] gap-5 py-6 px-5 xl:px-10 2xl:px-20">
      <section className="flex flex-col gap-5">
        <ProfileCard {...PROFILE_DATA} />
        <Accordion title="About">
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
            augue eu ligula sollicitudin varius. Sed at libero non urna
            convallis tincidunt et sit amet velit. Integer feugiat lacinia erat,
            ac mollis ex tincidunt et. Aenean ac suscipit metus. Quisque
            interdum, nunc non blandit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin et augue eu ligula sollicitudin varius. Sed
            at libero non urna convallis tincidunt et sit amet velit. Integer
            feugiat lacinia erat, ac mollis ex tincidunt et. Aenean ac suscipit
            metus. Quisque interdum, nunc non blandit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Proin et augue eu ligula
            sollicitudin varius. Sed at libero non urna convallis tincidunt et
            sit amet velit. Integer feugiat lacinia erat, ac mollis ex tincidunt
            et. Aenean ac suscipit metus. Quisque interdum, nunc non blandit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
            augue eu ligula sollicitudin varius. Sed at libero non urna
            convallis tincidunt et sit amet velit. Integer feugiat lacinia erat,
            ac mollis ex tincidunt et. Aenean ac suscipit metus. Quisque
            interdum, nunc non blandit.
          </>
        </Accordion>
      </section>

      <section>
        <p className="font-bold text-xl mb-4">Baron’s Posts</p>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-4">
          {POSTS_DATA.map((post) => (
            <PostCard {...post} key={post.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
