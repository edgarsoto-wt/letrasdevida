import { useStyles } from "./CreateContentItem.styles";
import Modal from "@material-ui/core/Modal";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import ContentItemText from "../ContentItem/ContentItemText";
import ContentItemTextImage from "../ContentItem/ContentItemTextImage";
interface Props {
  closeFunction: () => void;
  isOpen: boolean;
}

export default function CreateContentItem(data: Props): JSX.Element {
  const classes = useStyles();
  const { isOpen, closeFunction } = data;

  const [contentItemType, setContentItemType] = useState("text");
  const [contentItemImage, setContentItemImage] = useState<string>();
  const [contentItemText, setContentItemText] = useState<string>();
  const [contentItemImagePosition, setContentItemImagePosition] =
    useState<string>("top");

  const handleContentItemTypeChange = (event) => {
    setContentItemType(event.target.value);
  };

  const handleUploadClick = (event) => {
    setContentItemImage(URL.createObjectURL(event.target.files[0]));
  };

  const renderContentItemType = () => {
    {
      switch (contentItemType) {
        case "text":
          return (
            <TextField
              className={classes.text}
              id="text-item-input"
              label="Content Item - Text"
              multiline
              onChange={(e) => {
                setContentItemText(e.target.value);
              }}
              value={contentItemText}
              rows={4}
            />
          );
        case "text-image":
          return (
            <>
              <input
                accept="image/*"
                // className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleUploadClick}
              />
              <div>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Image Position</FormLabel>
                  <RadioGroup
                    aria-label="content-item-image-position"
                    className={classes.radioGroup}
                    name="content-item-image-position"
                    value={contentItemImagePosition}
                    onChange={(e) => {
                      setContentItemImagePosition(e.target.value);
                    }}
                  >
                    <FormControlLabel
                      value="top"
                      control={<Radio />}
                      label="Top"
                    />
                    <FormControlLabel
                      value="bottom"
                      control={<Radio />}
                      label="Bottom"
                    />
                    <FormControlLabel
                      value="left"
                      control={<Radio />}
                      label="Left"
                    />
                    <FormControlLabel
                      value="right"
                      control={<Radio />}
                      label="Right"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <TextField
                className={classes.text}
                id="text-image-item-input"
                label="Content Item - Text - Image"
                multiline
                rows={4}
                onChange={(e) => {
                  setContentItemText(e.target.value);
                }}
                value={contentItemText}
              />
            </>
          );
        default:
          return <></>;
      }
    }
  };

  const renderContentItemPreview = () => {
    switch (contentItemType) {
      case "text":
        return <ContentItemText text={contentItemText} />;
      case "text-image":
        return (
          <ContentItemTextImage
            text={contentItemText}
            image={contentItemImage}
          />
        );
      default:
        return <></>;
    }
  };
  return (
    <Modal
      open={isOpen}
      onClose={closeFunction}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <h2 id="content-item-modal-title">Content Item</h2>
        <p id="simple-modal-description">Create a new content item.</p>

        <FormControl component="fieldset">
          <FormLabel component="legend">Content Item Type</FormLabel>
          <RadioGroup
            aria-label="content-item-type"
            className={classes.radioGroup}
            name="content-item-type"
            value={contentItemType}
            onChange={handleContentItemTypeChange}
          >
            <FormControlLabel value="text" control={<Radio />} label="Text" />
            <FormControlLabel
              value="text-image"
              control={<Radio />}
              label="Text + Image"
            />
          </RadioGroup>
        </FormControl>
        <div>{renderContentItemType()}</div>
        <div>
          <h3>Preview</h3>
          {renderContentItemPreview()}
        </div>
      </div>
    </Modal>
  );
}
