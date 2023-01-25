import sizes from "./sizes";

const styles = {
  portfolioItem: {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    maxHeight: "500px",
    marginTop: "2rem",
    [sizes.down("sm")]: {
      border: "1px solid rgba(255,255,255)",
      width: "90%",
      margin: "2rem auto",
      "& .description": {
        width: "100%",
        height: "calc(100% + 1rem)",
        
      },
      "& a": {
        position: "absolute",
        padding: "20px",
        opacity: "0.7",
        bottom: "0",
        right: "0",
        width: "100%",
        textAlign: "center",
        backgroundColor: "#000",
      }
    },
    "& img": {
      maxWidth: "50%",
      minWidth: "50%",
      marginRight: "2rem",
      boxShadow: "4px 4px rgba(0,187,225, 0.5)",
      [sizes.down("sm")]: {
        maxWidth: "100%",
        minWidth: "100%"
      }
    },
    "& .description ul, .description p": {
      [sizes.down("sm")]: {
        display: "none",
      },
    },
    "& .description": {
      fontSize: "1.1rem",
      "& h1": {
        fontSize: "2rem",
      },
      [sizes.down("sm")]: {
        display: "block",
        position: "absolute",
        top: "-15px",
        left: "-1px",
        "& h1": {
          background: "rgba(0,149,178, 1)",
          color: "#fff",
          padding: "5px 10px",
          display: "inline",
          borderRadius: "0 20px 20px 0",
          border: "1px solid rgba(255,255,255)",
          fontSize: "1.4rem",
        }
      },
      [sizes.down("xs")]: {
        "& h1": {
          fontSize: "1rem"
        }
      }
    }
  },
  skillList: {
    flexWrap: "wrap",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    "& li": {
      color: "#fff",
      borderRadius: "10px",
      background: "rgba(0,67,81,0.8)",
      padding: "2px 10px",
      marginRight: "0.25rem",
      marginTop: "0.25rem"
    }
  },
  liveSiteLink: {
    "& a": {
      fontSize: "1.3rem",
      textDecoration: "none",
      color: "rgb(0,0,0)",
      [sizes.down("sm")]: {
        opacity: "0.7",
        color: "#fff",
        "&:hover": {
          opacity: "1",
        }
      }
    },
    "& a i": {
      fontSize: "1.3rem"
    },
    [sizes.down("sm")]: {
      display: "flex",
      color: "#fff",
    }
  }
};

export default styles;
