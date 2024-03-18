/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
const DonationCard = ({ item }) => {
  const { id, title, category, image, cardBg, textColor, categoryBg } =
    item || {};
  return (
    <Link to={`/donation-details/${id}`}>
      <Card
        style={{ backgroundColor: cardBg }}
        className="w-full overflow-hidden  cursor-pointer flex-row"
      >
        <CardHeader
          shadow={false}
          floated={false}
          color="transparent"
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Button
            size="sm"
            className="mb-2"
            style={{ backgroundColor: categoryBg, color: textColor }}
          >
            {category}
          </Button>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {title || "Title"}
          </Typography>
          <Button style={{ backgroundColor: textColor }} size="md">
            View Details
          </Button>
        </CardBody>
      </Card>
    </Link>
  );
};

export default DonationCard;
