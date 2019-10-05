import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Chat from "../components/Chat";
import { AppState } from "../store";
import { Dispatch } from "redux";
import IChat from "../models/IChat";
import IMessage from "../models/IMessage";

interface Props {
  children?: React.ReactNode;
  chats: IChat[];
  messages: IMessage[];
}

class ChatContainer extends PureComponent<Props> {
  render() {
    return <Chat {...this.props} />;
  }
}

const mapStateToProps = (state: AppState) => ({
  chats: state.chats,
  messages: state.messages
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateCurrentChat: () => {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
