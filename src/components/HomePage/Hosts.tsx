import Typography from '@mui/material/Typography';

import HostPics from '../HostPics';
import PodcastCard from '../PodcastCard';
import SectionStack from '../SectionStack';

export type Host = {
  name: string;
  img: string;
  alt: string;
  linkedIn: string;
};

export const hosts: Host[] = [
  {
    name: 'Michał Skowron',
    img: 'michal-skowron.png',
    alt: 'Zdjęcie Michała Skowrona',
    linkedIn: 'https://www.linkedin.com/in/michalskowron/',
  },
  {
    name: 'Paweł Kowaluk',
    img: 'pawel-kowaluk.png',
    alt: 'Zdjęcie Pawła Kowaluka',
    linkedIn: 'https://www.linkedin.com/in/pawel-kowaluk/',
  },
];

export type HostsProps = {
  size?: 'small' | 'medium' | 'large';
  overrideLink?: string;
};

export default function Hosts({ size, overrideLink }: HostsProps) {
  return (
    <PodcastCard>
      <SectionStack>
        <Typography variant="h2" textAlign="center">
          Prowadzący
        </Typography>
        <Typography>
          Od kilku lat zajmujemy się zawodowo dokumentacją do oprogramowania.
          Właściwie od samego początku, techniczna strona tworzenia dokumentacji
          była dla nas najbardziej interesująca. Dlatego uwielbiamy pisać
          skrypty, konfigurować narzędzia i automatyzować. Szukamy rozwiązań,
          które pozwolą Tech Writerom skupić się na tym co ważne.
        </Typography>
        <Typography>
          Na co dzień zastanawiamy się jak świat dokumentacji może czerpać
          korzyści z technologii, których używa się w świecie IT.
        </Typography>
        <HostPics hosts={hosts} overrideLink={overrideLink} size={size} />
      </SectionStack>
    </PodcastCard>
  );
}
