import React, { Component } from "react";
import { SizeBtn, Group } from "./AttributesStyle";
import { SizeText, ColorBox } from "../ProductDetails/ProductDetailsStyle";

class Attributes extends Component {
  state = {
    selectedAttribute: this.props.attrib.selectedAttribute,
  };

  handleAttributeChange = (item) => {
    this.setState({
      selectedAttribute: item,
    });
    this.props.onAttributeChange(item, this.props.attrib.id);
  };

  render() {
    return this.props.attrib.type === "swatch" ? (
      <Group key={this.props.attrib.name} gap="12px" direction="column">
        <SizeText>{this.props.attrib.name}</SizeText>
        <Group gap="12px">
          {this.props.attrib.items.map((item) => (
            <ColorBox
              onClick={() => {
                this.handleAttributeChange(item);
                this.setState({ selectedAttribute: item });
              }}
              key={item.value}
              bgColor={item.value}
              active={this.state.selectedAttribute.value === item.value}
            />
          ))}
        </Group>
      </Group>
    ) : (
      <Group key={this.props.attrib.name} gap="12px" direction="column">
        <SizeText>{this.props.attrib.name}</SizeText>
        <Group gap="12px">
          {this.props.attrib.items.map((item) => (
            <SizeBtn
              onClick={() => {
                this.handleAttributeChange(item);
                this.setState({ selectedAttribute: item });
              }}
              key={item.value}
              active={this.state.selectedAttribute.value === item.value}
            >
              {item.value}
            </SizeBtn>
          ))}
        </Group>
      </Group>
    );
  }
}

export default Attributes;
