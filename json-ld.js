import React, { Component } from "react";

export default class JsonLd extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(this.props.data) }}
      />
    );
  }
}
