import { makeStyles, Theme } from "@material-ui/core/styles";

export interface StyleProps {
  isOpen: boolean;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    margin: "10px 0",
    display: "inline-block",
  },
  options: {
    display: (props) => (props.isOpen ? "inline-block" : "none"),
    marginLeft: "20px",
  },
  option: {
    marginRight: "20px",
  },
}));
