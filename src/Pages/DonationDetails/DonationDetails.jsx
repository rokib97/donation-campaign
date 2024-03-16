import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import CustomSpinner from "../../components/CustomSpinner/CustomSpinner";
const DonationDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const { data, loading } = useDonationData();

  useEffect(() => {
    if (data) {
      const singleData = data.find((item) => item.id == id);
      setSingleData(singleData);
    }
  }, [id, data]);
  const { image, title, description, price, textColor } = singleData || {};

  if (loading) {
    return <CustomSpinner />;
  }
  return (
    <Card className="mt-12 w-full rounded-md shadow-none lg:px-20">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none relative"
      >
        <img className="w-full rounded-md h-[600px]" src={image} />
        <div
          color="transparent"
          className="absolute bottom-0 bg-opacity-40 bg-black w-full h-28 rounded-b-md flex items-center pl-8"
        >
          <Button
            style={{ backgroundColor: textColor }}
            className="rounded-sm capitalize text-xl"
            color="red"
          >
            Donate ${price}
          </Button>
        </div>
      </CardHeader>
      <CardBody className="p-0 my-7">
        <Typography className="text-4xl" variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography
          variant="lead"
          color="gray"
          className="mt-3 font-normal p-0"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default DonationDetails;
