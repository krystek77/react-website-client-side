/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Box, CardMedia } from '@mui/material';
import useStyles from './styles';

function CustomerCard(props) {
  const { title, subtitle, image, slug } = props.customer;
  const classes = useStyles();

  return (
    <Card className={classes.customersListItem}>
      <CardContent className={classes.customersListItemContent}>
        <Typography className={classes.customersListItemTitle} component="h3" variant="h4">
          {title}
        </Typography>
        <Typography className={classes.customersListItemSubtitle} component="p" variant="body1">
          {subtitle}
        </Typography>
        <Button className={classes.customersListItemActionButton} component={Link} to={`/klienci/${slug}`} size="large" variant="outlined" color="primary">
          Dowiedz się więcej
        </Button>
      </CardContent>
      <Box className={classes.customersListItemImageWrapper}>
        <CardMedia className={classes.customersListItemImage} component="img" image={`../assets/images/customers/${image}`} alt={title} />
      </Box>
    </Card>
  );
}
CustomerCard.propTypes = {
  customer: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    slug: PropTypes.string,
  }),
};
export default CustomerCard;
