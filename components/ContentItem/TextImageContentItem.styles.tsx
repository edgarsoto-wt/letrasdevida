import { makeStyles, Theme } from "@material-ui/core/styles";
import { ImagePosition } from "./TextImageContentItem";

interface IProps {
  imagePosition: ImagePosition;
}

const getImageMargin = (imgPosition: ImagePosition) => {
  switch (imgPosition) {
    case ImagePosition.top:
      return "0 0 .5rem 0";
    case ImagePosition.bottom:
      return ".5rem 0 0  0";
    case ImagePosition.left:
      return "0 .5rem 0  0";
    case ImagePosition.right:
      return "0  0  0 .5rem";

    default:
      return "0";
  }
};

export const useStyles = makeStyles<Theme, IProps>((theme) => ({
  container: {
    display: "flex",
    flexDirection: (props) =>
      props.imagePosition === ImagePosition.top ||
      props.imagePosition === ImagePosition.bottom
        ? "column"
        : "row",
    alignItems: "stretch",
  },
  text: {
    flexGrow: 1,
    width: (props) =>
      props.imagePosition === ImagePosition.top ||
      props.imagePosition === ImagePosition.bottom
        ? "100%"
        : "50%",
    order: (props) =>
      props.imagePosition === ImagePosition.top ||
      props.imagePosition === ImagePosition.left
        ? 2
        : 1,
  },
  image_container: {
    flexGrow: 1,
    width: (props) =>
      props.imagePosition === ImagePosition.top ||
      props.imagePosition === ImagePosition.bottom
        ? "100%"
        : "50%",
    order: (props) =>
      props.imagePosition === ImagePosition.top ||
      props.imagePosition === ImagePosition.left
        ? 1
        : 2,
    margin: (props) => getImageMargin(props.imagePosition),
    "&:hover": {
      "& .image_controls": {
        opacity: 1,
      },
    },
  },
  image_controls: {
    position: "absolute",
    opacity: 0,
    transition: "opacity 0.4s",
  },
  image_active_control: {
    backgroundColor: "blue",
  },
  image: {
    width: "100%",
    height: "auto",
  },
}));
