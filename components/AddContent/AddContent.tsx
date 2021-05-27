import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import { useState } from "react";
import { useStyles } from "./AddContent.styles";
import { IText, ITextImage, ContentType } from "../../interfaces/post";

interface IProps {
  addContentItem: (contentItem: IText | ITextImage) => void;
}

export default function AddContent({ addContentItem }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles({ isOpen });

  const createTextContentItem = () => {
    const textContentItem: IText = {
      text: "",
      type: ContentType.text,
    };
    addContentItem(textContentItem);
  };
  const createTextImageContentItem = () => {
    const textImageContentItem: ITextImage = {
      text: "",
      type: ContentType.textImage,
      image: "",
    };
    addContentItem(textImageContentItem);
  };
  return (
    <div className={classes.root}>
      <Fab
        size="small"
        color={isOpen ? "secondary" : "primary"}
        aria-label="add"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <RemoveIcon /> : <AddIcon />}
      </Fab>
      <div className={classes.options}>
        <Fab
          className={classes.option}
          size="small"
          variant="extended"
          onClick={createTextContentItem}
        >
          <DescriptionIcon />
          Text
        </Fab>
        <Fab
          className={classes.option}
          size="small"
          variant="extended"
          onClick={createTextImageContentItem}
        >
          <ImageIcon />
          Text + Image
        </Fab>
      </div>
    </div>
  );
}
