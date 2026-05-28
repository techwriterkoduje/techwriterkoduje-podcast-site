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
      <Heading1>Tech Writer Who Codes</Heading1>
      <Typography>
        We work in tech docs and, from the very start, we've been into the
        technical side of it. That's why we write scripts, configure tools,
        deploy websites, and automate boring tasks. We look for solutions which
        will help tech writers focus on what matters.
      </Typography>
      <Typography>
        We spend our days figuring out how the world of docs can benefit from
        the tech used in software development.
      </Typography>
      <HostPics hosts={hosts} size="medium" />
      <Typography>
        Tech Writer Koduje (Tech Writer Who Codes) is a podcast in Polish, but
        there are a few things available in English.
      </Typography>
      <LinkList links={links} />
    </PageContainer>
  );
}
