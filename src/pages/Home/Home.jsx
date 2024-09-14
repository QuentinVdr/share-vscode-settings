import { useExtensionByIdQuery } from '@hooks/reactQuery/queries/useExtensionsQueries';
import { Typography } from '@mui/material';

/**
 * Page that contains all the components displayed on the application homepage
 */
export default function Home() {
  const { data, isLoading } = useExtensionByIdQuery('alefragnani.project-manager');

  if (isLoading) {
    return <Typography variant="h2">loading...</Typography>;
  }

  console.log('🚀 ~ Home ~ data:', data);

  return (
    <>
      <Typography variant="h2">Welcome</Typography>
    </>
  );
}
