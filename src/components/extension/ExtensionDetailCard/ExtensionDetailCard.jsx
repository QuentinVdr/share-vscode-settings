import ErrorIcon from '@mui/icons-material/Error';
import { Button, Card, CardActions, CircularProgress, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ExtensionDetailCard.module.scss';

export const ExtensionDetailCard = ({ extensionId, extensionQuery, selected }) => {
  const { data, isLoading, error } = extensionQuery;
  const className = selected ? `${styles.card} ${styles.selected}` : styles.card;

  if (isLoading) {
    return <CircularProgress className="loader" />;
  }

  if (error) {
    return (
      <Card className={`${className} ${styles.cardError}`}>
        <Stack className={styles.cardContent} gap={2}>
          <Typography variant="h5" display="flex" alignItems="center" gap={0.5} color="error" fontWeight="medium">
            <ErrorIcon color="error" fontSize="large" /> Error
          </Typography>
          <Typography variant="body1">
            Can&apos;t fetch extension information of : <Typography variant="caption">{extensionId}</Typography>
          </Typography>
        </Stack>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <Stack className={styles.cardContent} gap={2}>
        <Stack direction="row" gap={2} alignItems="center">
          <img className={styles.cardLogo} src={data.imageSrc} alt={data.imageAlt} width={52} height={52} />
          <Stack direction="column">
            <Typography variant="h5">{data.name}</Typography>
            <Typography className={styles.cardSubtitle} variant="subtitle1">
              {data.publisher}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body1" alignSelf="start">
          {data.description}
        </Typography>
      </Stack>
      <CardActions>
        <Link
          to={`${import.meta.env.VITE_MARKETPLACE_URL}/items?itemName=${extensionId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="small">Learn more</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

ExtensionDetailCard.propTypes = {
  extensionId: PropTypes.string.isRequired,
  extensionQuery: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired
};
