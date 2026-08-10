import Link from '@docusaurus/Link';
import Typography from '@mui/material/Typography';
import Heading1 from './Heading1';
import { hosts } from './HomePage/Hosts';
import HostPics from './HostPics';
import PageContainer from './Layout/PageContainer';

type LinkForTheList = {
  label: string;
  href: string;
};

type LinkListProps = {
  links: LinkForTheList[];
};

function LinkList({ links }: LinkListProps) {
  return (
    <ul>
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}

const links: LinkListProps['links'] = [
  {
    label:
      'Skill #11: Surviving in the Dev World (our guest appearance on The Not-Boring Tech Writer podcast)',
    href: 'https://thenotboringtechwriter.com/episodes/skill-11-surviving-in-the-dev-world',
  },
  {
    label: "A quest for finding the tech writer's X factor (article)",
    href: '/tech-writer-x-factor',
  },
  {
    label: 'Golden rules for writing docs (infographic)',
    href: '/golden-rules',
  },
  {
    label: 'DITA as code - a modern approach to the classic standard (article)',
    href: '/dita-as-code',
  },
  {
    label: 'Organize your team like git (article)',
    href: '/git-team',
  },
  {
    label: 'Are people abandoning docs as code? (article)',
    href: '/abandon-docs-as-code',
  },
  {
    label: 'A tech writing CCMS can also be a broken promise (article)',
    href: '/broken-promise',
  },
  {
    label: 'Coding with AI is like speed dating (article)',
    href: '/coding-with-ai',
  },
];

links.sort((a, b) => a.label.localeCompare(b.label));

export default function EnglishPage() {
  return (
    <PageContainer>
      <Heading1>Coding Tech Writer Who Codes</Heading1>
      <Typography>
        For 8 years, I worked as a tech writer in small and large companies
        developing software. Over that time, I gradually discovered the world of
        coding, which led me to become a programmer in the documentation team.
      </Typography>
      <Typography>
        In my day-to-day work, I create tools and solutions that make it easier
        for technical content authors to do their jobs, while helping users find
        the content they need quickly when they need it.
      </Typography>
      <HostPics hosts={hosts} size="medium" />
      <Typography>
        Tech Writer Koduje (Tech Writer Who Codes) is a project in Polish, but
        there are a few things available in English.
      </Typography>
      <LinkList links={links} />
    </PageContainer>
  );
}
