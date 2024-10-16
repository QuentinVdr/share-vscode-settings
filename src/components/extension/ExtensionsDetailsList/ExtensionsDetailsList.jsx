import { useExtensionByIdsQueries } from '@hooks/reactQuery/queries/useExtensionsQueries';
import Grid from '@mui/material/Grid2';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ExtensionDetailCard } from '../ExtensionDetailCard/ExtensionDetailCard';

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

  return (
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
  );
}

ExtensionsDetailsList.propTypes = {
  extensionIds: PropTypes.arrayOf(PropTypes.string).isRequired
};
