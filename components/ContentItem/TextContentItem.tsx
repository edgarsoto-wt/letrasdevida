import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import { useState } from "react";
import { useStyles } from "./TextContentItem.styles";
import { IText, ITextImage, ContentType } from "../../interfaces/post";

import TextField from "@material-ui/core/TextField";

interface IProps {
  contentItem: IText;
}

export default function TextContentItem({ contentItem }: IProps) {
  const classes = useStyles();

  return (
    <TextField
      className={classes.text}
      label="Text"
      multiline
      variant="outlined"
      //   value={contentItem.text}
    />
  );
}
