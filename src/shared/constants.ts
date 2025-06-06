import post1Image from '@images/post1.jpg';
import post2Image from '@images/post2.jpg';
import avatar from '@images/avatar.png';

export const HEADER_HEIGHT = 121;

export const POSTS_DATA = [
  {
    tags: [
      {
        id: 'tip',
        name: 'Tip',
      },
      {
        id: 'uidesign',
        name: 'UIDesign',
      },
      {
        id: 'mobileapp',
        name: 'MobileApp',
      },
      {
        id: 'uxdesign',
        name: 'UXDesign',
      },
    ],
    text: "Had a great team meeting today discussing our upcoming design system. It's going to be a game-changer for our design process. We're always pushing each other to create the best design system for our product.",
    commentsCount: 120,
    likesCount: 56,
    ideasCount: 1,
    date: 'Thu Jun 01 2025 16:30:00 GMT+0000',
    author: 'Thomas Gordon',
    imageSrc: post1Image,
    avatarSrc: avatar,
  },

  {
    tags: [
      {
        id: 'tip',
        name: 'Tip',
      },
      {
        id: 'uidesign',
        name: 'UIDesign',
      },
      {
        id: 'mobileapp',
        name: 'MobileApp',
      },
      {
        id: 'uxdesign',
        name: 'UXDesign',
      },
    ],
    text: "Had a great team meeting today discussing our upcoming design system. It's going to be a game-changer for our design process. We're always pushing each other to create the best design system for our product.",
    commentsCount: 120,
    likesCount: 56,
    ideasCount: 1,
    date: 'Thu Jun 01 2025 16:30:00 GMT+0000',
    author: 'Thomas Gordon',
    imageSrc: post2Image,
    avatarSrc: avatar,
  },
];

export const PROFILE_DATA = {
  name: 'Baron Von Rydtger',
  avatarSrc: avatar,
  role: 'Graphic Designer, 2D, 3D, Web3 ',
  followersCount: 12320,
  followingCount: 548,
  postsCount: 1098,
};
