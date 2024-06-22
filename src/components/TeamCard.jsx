import {
    Card,
    CardBody,
    Avatar,
    IconButton,
    Typography,
  } from "@material-tailwind/react";
function TeamCard({ img, name, title }) {
    return (
      <Card className="rounded-lg bg-[#FAFAFA]" shadow={false}>
        <CardBody className="text-center">
          <Avatar
            src={img && img}
            alt={name && name}
            variant="circular"
            size="xxl"
            className="mx-auto mb-6 object-top"
          />
          <Typography variant="h5" color="blue-gray" className="!font-medium text-lg">
            {name && name}
          </Typography>
          <Typography
            color="blue-gray"
            className="mb-2 !text-base !font-semibold text-gray-600"
          >
            {title && title}
          </Typography>
          <div className="flex items-center justify-center gap-1.5">
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-linkedin text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-dribbble text-lg" />
            </IconButton>
          </div>
        </CardBody>
      </Card>
    );
  }
export default TeamCard;