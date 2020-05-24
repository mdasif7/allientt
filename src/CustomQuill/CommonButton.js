import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Popup } from "semantic-ui-react";
class CommonButton extends Component {
  static propTypes = {
    className: PropTypes.string,
    ariaLabel: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    onClick: PropTypes.func,
    style: PropTypes.object,
    popup: PropTypes.string,
    popupClassName: PropTypes.string,
  };
  static defaultProps = {
    ariaLabelledBy: "Drop Down",
    placeholder: "Select",
    popup: "",
    popupClassName: "",
  };
  sendClick = () => {
    const props = this.props;
    props.onClick();
  };
  renderButton = () => {
    const {
      className,
      ariaLabel,
      disabled,
      label,
      children,
      style,
    } = this.props;
    return (
      <Button
        onClick={() => this.sendClick()}
        className={className}
        aria-label={ariaLabel}
        disabled={disabled}
        style={style}
      >
        {" "}
        {label || children}{" "}
      </Button>
    );
  };
  render() {
    const { popup, popupClassName } = this.props;
    return popup ? (
      <Popup
        position={`top center`}
        className={popupClassName}
        content={popup}
        inverted
        trigger={
          <div style={{ display: "inline-block" }}>{this.renderButton()}</div>
        }
      />
    ) : (
      this.renderButton()
    );
  }
}
export default CommonButton;
