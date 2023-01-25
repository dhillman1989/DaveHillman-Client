const styles = {
    
    center:{
        textAlign: "center",
        margin: "auto"
    },
    UploadForm: {
        textAlign: "center",
        width: "500px",
        minHeight: "400px",
        background: "#fff",
        border: "1px solid #000",
        borderRadius: "15px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "20px auto",
        "& input": {
            height: "25px",
            padding: "5px",
            margin: "10px auto",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #000"

        }
    },
    dashboardItem:{
        display: "flex",
    },
    dashboardItem_info:{
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px"
    },
    alert:{
        width: "500px",
        height: "50px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "0 20px",
        margin: "10px auto",
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