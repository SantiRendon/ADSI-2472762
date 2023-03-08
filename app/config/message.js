import colors from "colors";

const message = (msg, type) => {
    switch (type) {
        case "danger":
            console.log(msg.bgRed);
            break;

        case "warning":
            console.log(msg.bgYellow);
            break;

        case "success":
            console.log(msg.bgGreen);
            break;

        default:
            console.log(msg.bgWhite)
            break;
    }
}

export default message;