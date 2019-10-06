import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Chat from '../components/Chat';
import { AppState } from '../store';
import { Dispatch } from 'redux';
import IChat from '../models/IChat';

interface Props {
  children?: React.ReactNode;
  chats: IChat[];
}

class ChatContainer extends PureComponent<Props> {
  render() {
    return <Chat {...this.props} />;
  }
}

const mapStateToProps = (state: AppState) => ({
  chats: state.chat.rooms
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
