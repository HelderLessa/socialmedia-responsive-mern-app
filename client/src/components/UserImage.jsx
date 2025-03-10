import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  const apiUrl = process.env.REACT_APP_BASE_URL;

  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${apiUrl}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
