import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@material-ui/icons/ArrowDropUpOutlined";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import { useState } from "react";
import { useStyles } from "./TextImageContentItem.styles";
import { IText, ITextImage, ContentType } from "../../interfaces/post";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import TextField from "@material-ui/core/TextField";

export enum ImagePosition {
  top,
  bottom,
  right,
  left,
}

interface IProps {
  contentItem: ITextImage;
}

export default function TextImageContentItem({ contentItem }: IProps) {
  const [imagePosition, setImagePosition] = useState<ImagePosition>(
    ImagePosition.top
  );

  const classes = useStyles({ imagePosition });

  const getActiveButtom = (imgPosition: ImagePosition) => {
    return imgPosition === imagePosition ? classes.image_active_control : null;
  };

  return (
    <div className={classes.container}>
      <TextField
        className={classes.text}
        label="Text"
        multiline
        variant="outlined"
      />
      <div className={classes.image_container}>
        <div className={`${classes.image_controls} image_controls`}>
          <ButtonGroup
            variant="contained"
            color="secondary"
            aria-label="image position"
            size="small"
          >
            <Button
              onClick={() => {
                setImagePosition(ImagePosition.top);
              }}
              className={getActiveButtom(ImagePosition.top)}
            >
              <ArrowDropUpOutlinedIcon />
            </Button>
            <Button
              onClick={() => {
                setImagePosition(ImagePosition.bottom);
              }}
              className={getActiveButtom(ImagePosition.bottom)}
            >
              <ArrowDropDownOutlinedIcon />
            </Button>

            <Button
              onClick={() => {
                setImagePosition(ImagePosition.left);
              }}
              className={getActiveButtom(ImagePosition.left)}
            >
              <ArrowLeftOutlinedIcon />
            </Button>
            <Button
              onClick={() => {
                setImagePosition(ImagePosition.right);
              }}
              className={getActiveButtom(ImagePosition.right)}
            >
              <ArrowRightOutlinedIcon />
            </Button>
            <Button>
              <CloudUploadIcon />
            </Button>
          </ButtonGroup>
        </div>
        <img
          className={classes.image}
          src="https://via.placeholder.com/1500x250.png"
          alt="text image content item"
        />
      </div>
    </div>
  );
}
