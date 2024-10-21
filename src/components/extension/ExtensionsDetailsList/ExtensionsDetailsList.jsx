import { useExtensionByIdsQueries } from '@hooks/reactQuery/queries/useExtensionsQueries';
import { Button, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ExtensionDetailCard } from './ExtensionDetailCard/ExtensionDetailCard';
import styles from './ExtensionsDetailsList.module.scss';
import { ExtensionsInstallDialog } from './ExtensionsInstallDialog/ExtensionsInstallDialog';

export default function ExtensionsDetailsList({ extensionIds }) {
  const extensionsQueries = useExtensionByIdsQueries(extensionIds);
  const [selectedExtensionIds, setSelectedExtensionIds] = useState([]);
  const [showBar, setShowBar] = useState(false);
  const [open, setOpen] = useState(false);

  const isSelected = (extensionId) => selectedExtensionIds.find((id) => id === extensionId);

  const handleExtensionClick = (extensionId) => {
    if (isSelected(extensionId)) {
      setSelectedExtensionIds(selectedExtensionIds.filter((id) => id !== extensionId));
    } else {
      setSelectedExtensionIds([...selectedExtensionIds, extensionId]);
    }
  };

  const handleInstallClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (selectedExtensionIds.length > 0) {
      setShowBar(true);
    } else {
      const timer = setTimeout(() => setShowBar(false), 500); // Wait for slideOut animation to complete
      return () => clearTimeout(timer);
    }
  }, [selectedExtensionIds]);

  return (
    <Stack direction="column" gap={2}>
      <Stack direction="row" alignItems="center" gap={3}>
        <Stack direction="column">
          <Typography variant="h4">{extensionIds.length} Extensions</Typography>
          <Typography variant="body1">Click on extension card to select it</Typography>
        </Stack>
        {extensionIds.length !== selectedExtensionIds.length ? (
          <Button variant="outlined" onClick={() => setSelectedExtensionIds(extensionIds)}>
            Select all
          </Button>
        ) : (
          <Button variant="outlined" onClick={() => setSelectedExtensionIds([])}>
            Unselect
          </Button>
        )}
      </Stack>
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
      {showBar && (
        <Stack
          direction="row"
          gap={2}
          className={`${styles.selectedExtensionsBar} ${selectedExtensionIds.length === 0 && styles.hide}`}
        >
          <Typography variant="body1" className={styles.selectedExtensionText}>
            <Typography variant="caption" className={styles.selectedExtensionCount}>
              {selectedExtensionIds.length}
            </Typography>{' '}
            extension selected
          </Typography>
          <Button variant="outlined" size="small" color="secondary" onClick={handleInstallClick}>
            install
          </Button>
        </Stack>
      )}
      <ExtensionsInstallDialog open={open} handleClose={() => setOpen(false)} extensionIds={selectedExtensionIds} />
    </Stack>
  );
}

ExtensionsDetailsList.propTypes = {
  extensionIds: PropTypes.arrayOf(PropTypes.string).isRequired
};
