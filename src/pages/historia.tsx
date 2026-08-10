import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Layout from '@theme/Layout';
import PodcastCard from '../components/PodcastCard';

export default function Historia() {
  return (
    <Layout
      title="Historia"
      description="Historia powstania podcastu Tech Writer Koduje"
    >
      <main>
        <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 8 }}>
          <PodcastCard>
            <Stack spacing={3} sx={{ padding: 4 }}>
              <Typography
                variant="h1"
                textAlign="center"
                sx={{ fontSize: '2rem' }}
              >
                Historia
              </Typography>

              <Typography>
                Idea nagrywania swojego podcastu formowała się w mojej głowie
                przez długi czas. Był to sposób na realizację jednego z moich
                niespełnionych marzeń, czyli prowadzenia własnej audycji w
                radiu. Poza tym, sam nałogowo słucham podcastów. Ciągle jestem w
                ruchu, rzadko kiedy mam okazję usiąść spokojnie i poczytać,
                dlatego ta forma przekazu jest dla mnie idealna. Jest to sposób
                na poszerzanie wiedzy, który można wpleść dość łatwo w swój
                dzień. Zanim mogłem zacząć miałem do rozwiązania dwie kwestie -
                o czym nagrywać i w jakim modelu (monolog, rozmowa, wywiad).
              </Typography>

              <Typography>
                Rozwiązanie pierwszej kwestii po prostu pojawiło się pewnego
                dnia w mojej głowie. Od 2012 do 2020 roku byłem tech writerem.
                Jednak w przeciwieństwie do większości moich kolegów i koleżanek
                po fachu zawsze ciągnęło mnie mocno w stronę tej technicznej
                strony dostarczania dokumentacji - narzędzi, skryptów,
                automatyzacji i tym podobnych. Stwierdziłem, że to jest dobry
                temat na podcast, bo będę mógł innym tech writerom przybliżyć
                technologie stojące za dokumentacją. Drugim celem było przebicie
                się z tech writingiem do świata programistów. Stwierdziłem, że
                jeśli będę mówił o technicznych kwestiach to będzie łatwiej
                złapać z nimi kontakt i zainteresować ich tematem dokumentacji.
              </Typography>

              <Typography>
                Druga kwestia okazała się łatwiejsza do rozwiązania od
                pierwszej. Jednym z moich ulubionych podcastów dla programistów
                jest{' '}
                <a
                  href="https://pythonbytes.fm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Python Bytes"
                </a>
                . W tamtym czasie był on prowadzony przez dwóch panów - Michaela
                Kennedy'ego i Briana Okkena. Ta formuła bardzo mi się spodobała
                - dwóch ziomków, którzy są zajawieni tym samym rozmawiają sobie
                swobodnie, ale jednocześnie rzeczowo o tematach, które ich
                kręcą. Nie zastanawiając się długo, Pawła Kowaluka czy chciałby
                odpalić ze mną podcast. Od razu się zgodził, co mnie bardzo
                ucieszyło, i projekt "Tech Writer Koduje" ruszył pełną parą.
              </Typography>

              <Typography>
                Tech Writer Koduje zaczął się od podcastu, ale z czasem stał się
                czymś więcej. To projekt, który łączy światy dokumentacji i
                kodowania. Dlatego naturalnie nasza działalność rozszerzyła się
                na inne formy przekazu - artykuły, warsztaty i wystąpienia na
                konferencjach oraz meetupach.
              </Typography>

              <Typography>
                Po 7 latach (2019-2026) i 90 nagranych odcinkach, przyszedł czas
                na nowy rozdział. Paweł postanowił odejść z projektu i oddać się
                w pełni swojej pasji - rozwijaniu swojego warsztatu pisarskiego.
                Pożegnaliśmy się w przyjacielskiej atmosferze, a ja postanowiłem
                kontynuować projekt samodzielnie.
              </Typography>
            </Stack>
          </PodcastCard>
        </Container>
      </main>
    </Layout>
  );
}
