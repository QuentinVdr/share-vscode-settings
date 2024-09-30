import ExtensionsDetailsList from '@components/extension/ExtensionsDetailsList/ExtensionsDetailsList';
import { useVscodeConfigByIdQueryMock } from '@hooks/reactQuery/queries/useVscodeConfigQueries';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function SavedExtensionDetails() {
  const { id } = useParams();
  const { data, isError, isLoading } = useVscodeConfigByIdQueryMock(id);

  return (
    <Stack direction="column" gap={3}>
      <Typography variant="h1">Extension details</Typography>
      {isLoading && <CircularProgress className="loader" />}
      {isError && <Typography variant="body1">Error fetching data</Typography>}
      {data && <ExtensionsDetailsList extensionIds={data.extensionIds} />}
    </Stack>
  );
}
