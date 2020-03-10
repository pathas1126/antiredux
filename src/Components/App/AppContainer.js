import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    // Consumer에서 사용할 함수를 생성자에서 state로 넘겨주어야 함
    this.state = {
      notifications: {
        "1": {
          id: 1,
          text: "Something",
          seen: false
        },
        "2": {
          id: 2,
          text: "Something else",
          seen: false
        },
        "3": {
          id: 3,
          text: "Something different",
          seen: false
        }
      },
      deleteNotification: this._deleteNotification,
      seeNotification: this._seeNotification
    };
  }

  // 이해하기 까다로운 부분, 천천히 살펴보기
  _seeNotification = id => {
    this.setState(currentState => {
      return {
        ...currentState,
        notifications: {
          ...currentState.notifications,
          [id]: {
            ...currentState.notifications[id],
            seen: true
          }
        }
      };
    });
  };

  _deleteNotification = id => {
    this.setState(currentState => {
      const newState = delete currentState.notifications[id];
      return newState;
    });
  };

  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
