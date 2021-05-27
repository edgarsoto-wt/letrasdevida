import { makeStyles, Theme } from "@material-ui/core/styles";

export interface StyleProps {
  isOpen: boolean;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    margin: "10px 0",
  },
  options: {
    visibility: (props) => (props.isOpen ? "visible" : "hidden"),
    display: "inline-block",
    marginLeft: "20px",
  },
  option: {
    marginRight: "20px",
  },
}));
