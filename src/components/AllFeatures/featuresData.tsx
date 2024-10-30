import { BlogIcon } from "../icons/BlogIcon";
import { FacebookSocialIcon } from "../icons/FacebookSocialIcon";
import { LinkIcon } from "../icons/LinkIcon";
import { RedditSocialIcon } from "../icons/RedditSocialIcon";
import { XSocialIcon } from "../icons/XSocialIcon";
import { YouTubeSocialIcon } from "../icons/YouTubeSocialIcon";

export const webPageFeatures = [
  {
    label: "Turn any URL to X Posts",
    iconStart: <LinkIcon />,
    iconEnd: <XSocialIcon />,
  },
  {
    label: "Turn any URL to Blog Article (SEO Optimized)",
    iconStart: <LinkIcon />,
    iconEnd: <BlogIcon />,
  },
  {
    label: "Turn any URL to Facebook Posts",
    iconStart: <LinkIcon />,
    iconEnd: <FacebookSocialIcon />,
  },
  {
    label: "Turn any URL to Reddit Posts",
    iconStart: <LinkIcon />,
    iconEnd: <RedditSocialIcon />,
  },
];

export const youtubeFeatures = [
  {
    label: "YouTube Video to X Posts",
    iconStart: <YouTubeSocialIcon />,
    iconEnd: <XSocialIcon />,
  },
  {
    label: "YouTube Video to Blog Article (SEO Optimized)",
    iconStart: <YouTubeSocialIcon />,
    iconEnd: <BlogIcon />,
  },
  {
    label: "YouTube Video to Facebook Posts",
    iconStart: <YouTubeSocialIcon />,
    iconEnd: <FacebookSocialIcon />,
  },
  {
    label: "YouTube Video to Reddit Posts",
    iconStart: <YouTubeSocialIcon />,
    iconEnd: <RedditSocialIcon />,
  },
];
