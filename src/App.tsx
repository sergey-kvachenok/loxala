import { Avatar } from '@/shared/ui/components/Avatar';
import { Navbar } from '@/widgets/Navbar';
import avatar from '@images/avatar.png';
import {
  DotsThreeVerticalIcon,
  MessageIcon,
  PlusIcon,
} from '@/shared/ui/icons';
import { IconButton, SecondaryButton } from '@/shared/ui/components/buttons';
import { Chip } from '@/shared/ui/components/Chip';
import { Accordion } from '@/shared/ui/components/Accordion';
import { Statistic } from '@/shared/ui/components/Statistic';

const App = () => {
  return (
    <div className="container">
      <Navbar />

      <main className="">
        <Avatar src={avatar} size="lg" />

        <IconButton
          icon={<MessageIcon />}
          onClick={() => {}}
          disabled
          variant="rounded"
        />
        <Chip text="56" variant="rounded" icon={MessageIcon} iconColor="#fff" />
        <SecondaryButton icon={PlusIcon} text="Connect" onClick={() => {}} />

        <IconButton
          icon={<DotsThreeVerticalIcon />}
          onClick={() => {}}
          size="sm"
        />
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

        <Statistic name="Followers" value={12320} />
        <Statistic name="Followers" value={456} />
      </main>
    </div>
  );
};

export default App;
