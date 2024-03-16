import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CardDefault = ({ card }) => {
  const { id, title, category, image, cardBg, textColor, categoryBg } =
    card || {};
  return (
    <Link to={`/donation-details/${id}`}>
      <Card
        className="w-full overflow-hidden shadow-none cursor-pointer"
        style={{ backgroundColor: cardBg }}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img src={image} className="w-full" alt="card-image" />
        </CardHeader>
        <CardBody>
          <Button
            style={{ backgroundColor: categoryBg, color: textColor }}
            size="sm"
            className="mb-2"
          >
            {category}
          </Button>
          <Typography variant="h5" style={{ color: textColor }} className="">
            {title}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

CardDefault.propTypes = {
  card: PropTypes.object,
};
export default CardDefault;
