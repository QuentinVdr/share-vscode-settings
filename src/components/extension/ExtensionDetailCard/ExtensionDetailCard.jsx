import ErrorIcon from '@mui/icons-material/Error';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Typography
} from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ExtensionDetailCard.module.scss';

export const ExtensionDetailCard = ({ extensionId, extensionQuery }) => {
  const { data, isLoading, error } = extensionQuery;

  if (isLoading) {
    return <CircularProgress className="loader" />;
  }

  if (error) {
    return (
      <Card className={`${styles.card} ${styles.cardError}`}>
        <CardContent>
          <Typography variant="h5" display="flex" alignItems="center" gap={0.5} color="error" fontWeight="bold">
            <ErrorIcon color="error" /> Error
          </Typography>
          <Typography variant="body1">
            Can&apos;t fetch extension information of : <Typography variant="caption">{extensionId}</Typography>
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${styles.card} ${styles.selected}`}>
      <CardHeader
        avatar={<Avatar src={data.imageSrc} alt={data.imageAlt} />}
        title={data.name}
        subheader={data.publisher}
      />
      <CardContent>
        <Typography variant="body1">{data.description}</Typography>
      </CardContent>
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
  extensionQuery: PropTypes.object.isRequired
};
