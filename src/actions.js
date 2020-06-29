export const CONNECTION_ADDED = "CONNECTION_ADDED";
export const CONNECTION_ERROR = "CONNECTION_ERROR";
export const UPDATE_DATA = "UPDATE_DATA";
export const DATA_ERROR = "DATA_ERROR";

export function createConnection() {
    return {
        type: CONNECTION_ADDED,
    };
}

export function connectionError(error) {
    return {
        type: CONNECTION_ERROR,
        payload: error,
    };
}

export const updateData = () => async (dispatch) => {
    try {
        const ws = new WebSocket("wss://ws-feed.pro.coinbase.com");

        const reqObj = {
            type: "subscribe",
            product_ids: ["BTC-USD"],
            channels: ["full"],
        };

        ws.onopen = () => {
            console.log("connection");
            ws.send(JSON.stringify(reqObj));
        };

        ws.onmessage = (evt) => {
            dispatch({
                type: UPDATE_DATA,
                payload: JSON.parse(evt.data),
            });
        };
    } catch (error) {
        dispatch({
            type: DATA_ERROR,
            payload: error,
        });
    }
};
