import Stack, { StackProps } from '@mui/material/Stack';

export default function SectionStack({ children, ...otherProps }: StackProps) {
  return (
    <Stack spacing={4} padding={4} alignItems="center" {...otherProps}>
      {children}
    </Stack>
  );
}
