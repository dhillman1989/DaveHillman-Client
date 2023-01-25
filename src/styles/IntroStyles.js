import sizes from "./sizes";

const styles = {
  Intro: {
    marginTop: "2rem",
    // border: "1px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& p": {
      // borderLeft: "16px solid rgb(0,67,81)",
      paddingLeft: "2rem",
      lineHeight: "1.4rem",
      width: "50%",
      fontSize: "1.1rem",
      fontWeight: 500,
      "& span": {
        display: "block",
        fontWeight: 600,
        fontSize: "1.7rem",
        lineHeight: "2.2rem",
        [sizes.down("sm")]: {
          lineHeight: "2.0rem",
          marginBottom: "1rem",
        }
      },
      [sizes.down("sm")]: {
        border: 0,
        textAlign: "center",
        padding: "16px",
        lineHeight: "1.4rem",
        width: "90%",
        fontSize: "1.3rem"
      }
    },
    [sizes.down("sm")]: {
      flexDirection: "column-reverse",
      marginBottom: "2rem",
    }
  },
  skillImages: {
    width: "40%",
    margin: "48px 64px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    "& img": {
      maxHeight: "140px",
    },
    [sizes.down("sm")]: {
      width: "90%",
      padding: "0",
      justifyContent: "space-around",
      "& img": {
        height: "75px"
      }
    }
  }
};

export default styles;
