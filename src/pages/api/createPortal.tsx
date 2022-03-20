import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

class Modal extends React.PureComponent {
  el = document.createElement("div");
  componentDidMount() {
    modalRoot?.append(this.el);
  }
  componentWillUnmount() {
    modalRoot?.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

function Child() {
  // 这个按钮的点击事件会冒泡到父元素
  // 因为这里没有定义 'onClick' 属性
  return (
    <div className="modal text-center">
      <button>Click</button>
    </div>
  );
}

export default class Parent extends React.Component<any, { clicks: number }> {
  state = {
    clicks: 0,
  };
  handleClick = () => {
    // 当子元素里的按钮被点击时，
    // 这个将会被触发更新父元素的 state，
    // 即使这个按钮在 DOM 中不是直接关联的后代
    this.setState((state) => ({
      clicks: state.clicks + 1,
    }));
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>Modal中的子元素是没有定义点击事件的，该事件会冒泡到Modal外部</p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}
