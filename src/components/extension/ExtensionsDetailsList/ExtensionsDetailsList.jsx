import { useExtensionByIdsQueries } from '@hooks/reactQuery/queries/useExtensionsQueries';
import { Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ExtensionDetailCard } from '../ExtensionDetailCard/ExtensionDetailCard';
import styles from './ExtensionsDetailsList.module.scss';

export default function ExtensionsDetailsList({ extensionIds }) {
  const extensionsQueries = useExtensionByIdsQueries(extensionIds);
  const [selectedExtensionIds, setSelectedExtensionIds] = useState([]);

  const isSelected = (extensionId) => selectedExtensionIds.find((id) => id === extensionId);

  const handleExtensionClick = (extensionId) => {
    if (isSelected(extensionId)) {
      setSelectedExtensionIds(selectedExtensionIds.filter((id) => id !== extensionId));
    } else {
      setSelectedExtensionIds([...selectedExtensionIds, extensionId]);
    }
  };

  const handleInstallClick = () => {
    console.log('installing extensions', selectedExtensionIds);
  };

  return (
    <Stack direction="column" gap={2}>
      <Typography variant="h4">Click on extension card to select it</Typography>
      <Grid container spacing={2}>
        {extensionsQueries.map((query, index) => (
          <Grid
            key={extensionIds[index]}
            size={{ xs: 12, md: 6, xl: 4 }}
            onClick={() => handleExtensionClick(extensionIds[index])}
          >
            <ExtensionDetailCard
              extensionId={extensionIds[index]}
              extensionQuery={query}
              selected={isSelected(extensionIds[index])}
            />
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" className={styles.selectedExtensionsBar}>
        <Typography variant="body1">
          <Typography variant="caption">{selectedExtensionIds.length}</Typography> extension selected
        </Typography>
        {selectedExtensionIds.length > 0 && (
          <Button variant="contained" size="small" onClick={handleInstallClick}>
            install
          </Button>
        )}
      </Stack>
    </Stack>
  );
}

ExtensionsDetailsList.propTypes = {
  extensionIds: PropTypes.arrayOf(PropTypes.string).isRequired
};
