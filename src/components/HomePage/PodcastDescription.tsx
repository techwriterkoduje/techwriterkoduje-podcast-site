import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function PodcastDescription() {
  return (
    <Stack
      sx={{
        marginTop: { xs: 3 },
        textAlign: { md: 'center', lg: 'left' },
      }}
      spacing={1}
    >
      <Typography
        component="h1"
        sx={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.1 }}
      >
        Dokumentacja w kodowaniu, kodowanie w dokumentacji
      </Typography>
      <Typography sx={{ fontSize: '18px', padding: '10px 0' }}>
        Projekt, który łączy światy dokumentacji i kodowania. Szukam obszarów
        IT, w których programiści i tech writerzy mogą współpracować i uczyć się
        od siebie.
      </Typography>
    </Stack>
  );
}
