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

export const ExtensionDetailCard = ({ extensionId, extensionQuery }) => {
  const { data, isLoading, error } = extensionQuery;

  if (isLoading) {
    return <CircularProgress className="loader" />;
  }

  if (error) {
    return <></>;
  }

  return (
    <Card>
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
