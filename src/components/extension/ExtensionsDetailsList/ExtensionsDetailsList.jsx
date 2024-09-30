import { useExtensionByIdsQueries } from '@hooks/reactQuery/queries/useExtensionsQueries';
import Grid from '@mui/material/Grid2';
import PropTypes from 'prop-types';
import { ExtensionDetailCard } from '../ExtensionDetailCard/ExtensionDetailCard';

export default function ExtensionsDetailsList({ extensionIds }) {
  const extensionsQueries = useExtensionByIdsQueries(extensionIds);

  return (
    <Grid container spacing={2}>
      {extensionsQueries.map((query, index) => (
        <Grid key={extensionIds[index]} size={{ xs: 12, md: 6, xl: 4 }}>
          <ExtensionDetailCard extensionId={extensionIds[index]} extensionQuery={query} />
        </Grid>
      ))}
    </Grid>
  );
}

ExtensionsDetailsList.propTypes = {
  extensionIds: PropTypes.arrayOf(PropTypes.string).isRequired
};
