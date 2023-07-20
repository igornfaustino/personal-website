import {
  FaCode,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import ExternalLink from '../atoms/ExternalLink'

export default function SocialMediaLinks() {
  const iconClasses =
    'transition-all hover:scale-125 text-theme-primary b-color-theme-primary border-theme-primary'
  return (
    <div className="flex gap-10 p-3">
      <ExternalLink
        className={iconClasses}
        href="https://github.com/igornfaustino/personal-website"
      >
        <FaCode /> Code
      </ExternalLink>
      <ExternalLink
        className={iconClasses}
        href="https://www.linkedin.com/in/igornfaustino"
      >
        <FaLinkedin /> Linkedin
      </ExternalLink>
      <ExternalLink
        className={iconClasses}
        href="https://github.com/igornfaustino"
      >
        <FaGithub /> GitHub
      </ExternalLink>
      <ExternalLink
        className={iconClasses}
        href="https://twitter.com/igornfaustino"
      >
        <FaTwitter /> Twitter
      </ExternalLink>
      <ExternalLink
        className={iconClasses}
        href="https://www.youtube.com/@igornfaustino"
      >
        <FaYoutube /> YouTube
      </ExternalLink>
    </div>
  )
}
