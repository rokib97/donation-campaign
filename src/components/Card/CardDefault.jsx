import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
const CardDefault = ({ card }) => {
  const { title, category, image, cardBg, textColor, categoryBg } = card || {};
  return (
    <Card
      className="w-full overflow-hidden shadow-none"
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
  );
};

CardDefault.propTypes = {
  card: PropTypes.object,
};
export default CardDefault;
