import Typography from '@mui/material/Typography';

import HostPics from '../HostPics';
import PodcastCard from '../PodcastCard';
import SectionStack from '../SectionStack';

export type Host = {
  name: string;
  img: string;
  alt: string;
  linkedIn: string;
  gitHub: string;
};

export const hosts: Host[] = [
  {
    name: 'Michał Skowron',
    img: 'badge-photo-8bit-pixel-animated.gif',
    alt: 'Zdjęcie Michała Skowrona',
    linkedIn: 'https://www.linkedin.com/in/michalskowron/',
    gitHub: 'https://github.com/docdeveloper',
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
          Przez 8 lat pracowałem jako tech writer, w małych i dużych firmach,
          zajmujących się wytwarzaniem oprogramowania. Przez ten czas powoli
          odkrywałem świat kodowania co sprawiło, że zostałem programistą w
          dziale dokumentacji.
        </Typography>
        <Typography>
          W codziennej pracy tworzę narzędzia i rozwiązania, które ułatwiają
          pracę autorom treści technicznych, a odbiorcom tych treści pozwalają
          dotrzeć do nich szybko, wtedy kiedy ich potrzebują.
        </Typography>
        <HostPics hosts={hosts} overrideLink={overrideLink} size={size} />
      </SectionStack>
    </PodcastCard>
  );
}
