import sizes from "./sizes";

const styles = {
  Contact: {
    display: "flex",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingBottom: "6rem",
    paddingTop: "2rem",
    borderTop: "4px solid  rgb(0,187,225)",
    backgroundColor: "#474747",
    [sizes.down("sm")]: {
      flexDirection: "column"
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
    }
  },
  contactForm: {
    width: "50%",
    maxWidth: "90%",
    "& h1": {
      padding: "0 0 1rem 0",
      margin: 0,
      fontSize: "3rem",
      lineHeight: "3rem",
      color: "rgba(255,255,255)",
      [sizes.down("sm")]: {
        fontSize: "2rem",
        lineHeight: "2rem",
        textAlign: "center"
      }
    },
    [sizes.down("sm")]: {
      width: "350px",
      margin: "auto"
    },
    "& input, textarea": {
      border: "1px solid rgb(255,255,255)",
      backgroundColor: "rgba(255,255,255,0.6)",
      padding: "5px",
      marginBottom: "10px",
      width: "100%",
      maxWidth: "100%",
      minWidth: "100%",
      display: "block",
      boxSizing: "border-box",
      "&::placeholder": {
        color: "rgb(0,0,0,0.6)"
      },
      [sizes.down("sm")]: {
        maxWidth: "90%"
      },
      "&.messageInput": {
        height: "100px"
      },
      "&:active": {
        border: "1px solid rgb(0,0,0)",
        borderRadius: "0px",
        outline: "0"
      },
      "&:focus": {
        border: "1px solid rgba(0,0,0, 0.5)",
        borderRadius: "0px",
        outline: "1px solid #000"
      }
    }
  },
  contactSocial: {
    margin: "auto",
    width: "80%",
    color: "rgb(255,255,255)",
    "& ul": {
      listStyleType: "none",
      display: "flex",
      justifyContent: "space-between",
      marginTop: "4rem",
      padding: 0,
      fontSize: "1.1rem",
      [sizes.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "1.1rem",
      },
    },
    "& ul li": {
      marginTop: "1rem auto ",
      [sizes.down("sm")]: {
        maxWidth: "80%",
        marginBottom: "2rem",
        fontSize: "1.2rem",
      },
    },
    "& ul li i": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "3rem",
      [sizes.down("sm")]: {
        fontSize: "3rem",
      },
    },
  }
};

export default styles;
