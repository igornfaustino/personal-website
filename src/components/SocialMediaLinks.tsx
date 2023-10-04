import { ReactNode } from "react";
import {
  FaCode,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import ExternalLink from "./ExternalLink";

export default function SocialMediaLinks() {
  return (
    <div className="flex gap-10 p-3">
      <ExternalLink href="https://github.com/igornfaustino/personal-website">
        <div className="flex items-center gap-2">
          <FaCode /> <HiddenLg>Code</HiddenLg>
        </div>
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/igornfaustino">
        <div className="flex items-center gap-2">
          <FaLinkedin /> <HiddenLg>Linkedin</HiddenLg>
        </div>
      </ExternalLink>
      <ExternalLink href="https://github.com/igornfaustino">
        <div className="flex items-center gap-2">
          <FaGithub /> <HiddenLg>GitHub</HiddenLg>
        </div>
      </ExternalLink>
      <ExternalLink href="https://twitter.com/igornfaustino">
        <div className="flex items-center gap-2">
          <FaTwitter /> <HiddenLg>Twitter</HiddenLg>
        </div>
      </ExternalLink>
      <ExternalLink href="https://www.youtube.com/@igornfaustino">
        <div className="flex items-center gap-2">
          <FaYoutube /> <HiddenLg>YouTube</HiddenLg>
        </div>
      </ExternalLink>
    </div>
  );
}

const HiddenLg = ({ children }: { children: ReactNode }) => (
  <span className="hidden lg:block">{children}</span>
);
