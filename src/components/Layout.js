import React, { PureComponent } from "react";
import Link from "next/link";

export default class Layout extends PureComponent {
  render() {
    return (
      <div className="layout">
        <header>
          <h3>Watto’s Spaceship Emporium</h3>
          <menu>
            <Link href="/">
              <a>Home</a>
            </Link>
          </menu>
          <style jsx>{`
            header {
              display: flex;
              align-items: center;
              font-family: Monospace;
              margin: 10px 20px;
            }
            h3 {
              margin-left: 10px;
            }
            menu > a {
              margin-right: 16px;
            }
          `}</style>
        </header>
        {this.props.children}
      </div>
    );
  }
}
