import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

function Message({ user, message }) {
    const [userLoggedIn] = useAuthState(auth);

    const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;
    

    return (
        <Container>
            <TypeOfMessage>
                {message.message}
                <Timestamp>
                    {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
                </Timestamp>
            </TypeOfMessage>
        </Container>
    );
}

export default Message;

const Container = styled.div`

`;

const MessageElement = styled.p`
    position: relative;
    text-align: right;
    margin: 10px;
    padding: 15px;
    padding-bottom: 26px;
    width: fit-content;
    min-width: 60px;
    border-radius: 8px;
`;

const Sender = styled(MessageElement)`
    margin-left: auto;
    background-color: #dcf8c6;
`;

const Receiver = styled(MessageElement)`
    background-color: whitesmoke;
    text-align: left;
`;

const Timestamp = styled.span`
    position: absolute;
    right: 0;
    bottom: 0;
    text-align: right;
    font-size: 9px;
    padding: 10px;
    color: gray;
`;