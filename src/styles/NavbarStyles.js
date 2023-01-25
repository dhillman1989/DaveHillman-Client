import sizes from "./sizes";

const styles = {
  Navbar: {
    zIndex: 2000,
    padding: "0 0 0 0",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "44px",
    backgroundColor: "#474747",
    color: "white",
    borderBottom: "2px solid rgb(0,187,225)",
    "& .hamburger": {
      fontSize: "2rem",
      display: "none",
      [sizes.down("sm")]: {
        paddingLeft: "1rem",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",

      }
    },
    "& a": {
      color: "#fff",
      "&:hover": {
        cursor:"pointer"
      }
    },
    "& .navigation": {
      margin: "auto",
      width: "1100px",
      maxWidth: "100vw",
      height: "100%",
      fontWeight: 300,
      fontStyle: "normal",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "&.s-hide": {
        [sizes.down("sm")]: {
          display: "none",
        },
      },
      [sizes.down("sm")]: {
        width: "100vw",
        fontSize: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#474747",
        height: "auto",
        "& .nav": {
          flexDirection: "column",
        },
        
        "& ul.social": {
          padding: 0,
          margin: "3rem 0 3rem 0",
          marginRight: "0",
          "& li": {
            marginRight: 0
          }
        }
      },
      "& ul.nav": {
        width: "300px",
        height: "100%",
        padding: "0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        listStyleType: "none",
        margin: 0,
        
        "& li": {
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "0 32px",
          "& div": {
            transition: "1s width, 1s opacity",
            height: "2%",
            width: "1%",
            opacity: 0,
            border: 0
          },
          "&:hover": {
            backgroundColor: "rgb(0,187,225)"
          },
          "&:hover div": {
            position: "absolute",
            opacity: 1,
            bottom: 0,
            width: "100%",
            borderBottom: "4px solid rgb(255,255,255)"
          },
          "& a": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          [sizes.down("sm")]:{
            marginTop: "3rem",
            textDecoration: "none",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0)"
            },
            "& div": {
              display: "none",
            }
          }
        }
      },
      "& ul.social": {
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        listStyleType: "none",
        "& li": {
          marginRight: "20px"
        },
        "& i": {
          fontSize: "1.5rem"
        }
      }
    }
  }
};

export default styles;
