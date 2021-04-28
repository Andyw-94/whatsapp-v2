import { Circle } from "better-react-spinkit";

function Loading() {
    return (
        <center style={{display: "grid", placeItems: "center", height: "100vh"}}>
            <div>
                <img 
                    src="https://www.crustys.com/wp-content/uploads/2016/12/whatsapp-logo-PNG-Transparent.png"
                    alt=""
                    style={{ marginBottom: 10 }}
                    height={200}
                />
                <Circle color="#3cbc28" size={60} />
            </div>
        </center>
    )
}

export default Loading;
