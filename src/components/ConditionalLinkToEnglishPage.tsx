import Link from '@docusaurus/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ConditionalLinkToEnglishPage() {
  if (typeof navigator === 'undefined') {
    return null;
  }

  const prefersEnglish =
    (navigator.languages &&
      navigator.languages[0].toLocaleLowerCase().startsWith('en')) ||
    (navigator.language &&
      navigator.language.toLocaleLowerCase().startsWith('en'));

  if (!prefersEnglish) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        my: 2,
        p: 2,
        border: '1px solid var(--ifm-color-primary)',
      }}
    >
      <Typography sx={{ fontSize: '24' }}>
        Looking for English content? <Link href="/english">Click here.</Link>
      </Typography>
    </Box>
  );
}
