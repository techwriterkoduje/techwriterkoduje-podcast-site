import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Host, HostsProps } from './HomePage/Hosts';
import Image from './Image';
import PodcastButton from './PodcastButton';

type HostPicsProps = {
  hosts: Host[];
  overrideLink?: HostsProps['overrideLink'];
  size: HostsProps['size'];
};

export default function HostPics({ hosts, overrideLink, size }: HostPicsProps) {
  const imageSizes = {
    small: 60,
    medium: 150,
    large: 300,
  };

  const imageSize = size ? imageSizes[size] : imageSizes['medium'];

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      spacing={3}
      width="100%"
      sx={{ padding: '1rem 0' }}
    >
      {hosts.map((host) => (
        <Stack
          key={host.name}
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          {overrideLink ? (
            <PodcastButton
              href={overrideLink}
              endIcon={null}
              variant="text"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Image
                src={host.img}
                height={imageSize}
                width={imageSize}
                alt={host.alt}
              />
              <Typography fontSize={size}>{host.name}</Typography>
            </PodcastButton>
          ) : (
            <>
              <Image
                src={host.img}
                height={imageSize}
                width={imageSize}
                alt={host.alt}
              />
              <Button
                href={host.linkedIn}
                target="_blank"
                startIcon={<LinkedInIcon />}
                sx={{ textTransform: 'none', fontSize: size }}
              >
                {host.name}
              </Button>
            </>
          )}
        </Stack>
      ))}
    </Stack>
  );
}
