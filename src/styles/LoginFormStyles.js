
const styles = {
    LoginForm: {
        margin: "auto",
        padding: "20px",
        width: "500px",
        marginTop: "25vh",
        position: "relative",
        border: "1px solid rgba(0, 255, 255, 0.5)",
        backgroundColor: "rgba(100, 155, 155, 0.8)",
        borderRadius: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& input": {
            width: "100%",
            borderRadius: "10px",
            border: "none",
            margin: "20px",
            height: "40px"
        },
        "& input[type='submit']": {
            width: "100px"
        }
    },

    alert:{
        width: "500px",
        height: "50px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "0 20px",
        margin: " 10px auto",
        borderRadius: "20px",
        fontSize: "18px",
        "&.danger":{
            background: "red",
            color: "white",
        },
        "&.success":{
            color:"white",
            background: "rgba(0,255,0,0.3)"
        }
    }
}


export default styles;