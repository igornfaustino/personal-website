import { ReactNode } from 'react'
import {
  FaCode,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import ExternalLink from './ExternalLink'

export default function SocialMediaLinks() {
  const iconClasses =
    'transition-all hover:scale-105 hover:text-theme-primary b-color-theme-primary border-theme-primary'
  return (
    <div className="flex gap-10 p-3">
      <ExternalLink
        className={iconClasses}
        href="https://github.com/igornfaustino/personal-website"
      >
        <FaCode /> <HiddenLg>Code</HiddenLg>
      </ExternalLink>
      <ExternalLink
        className={iconClasses}
        href="https://www.linkedin.com/in/igornfaustino"
      >
        <FaLinkedin /> <HiddenLg>Linkedin</HiddenLg>
      </ExternalLink>
      <ExternalLink
        className={iconClasses}
        href="https://github.com/igornfaustino"
      >
        <FaGithub /> <HiddenLg>GitHub</HiddenLg>
      </ExternalLink>
      <ExternalLink
        className={iconClasses}
        href="https://twitter.com/igornfaustino"
      >
        <FaTwitter /> <HiddenLg>Twitter</HiddenLg>
      </ExternalLink>
      <ExternalLink
        className={iconClasses}
        href="https://www.youtube.com/@igornfaustino"
      >
        <FaYoutube /> <HiddenLg>YouTube</HiddenLg>
      </ExternalLink>
    </div>
  )
}

const HiddenLg = ({ children }: { children: ReactNode }) => (
  <span className="hidden lg:block">{children}</span>
)
