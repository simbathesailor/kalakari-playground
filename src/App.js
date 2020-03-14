import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Dropdown, ThemeProvider, theme } from "@kalakari/components";
import { css } from "styled-components";

export const stylesContainer = css`
  min-width: 141px;
  color: #000;
`;

export const optionItemsStylesMonths = css`
  text-align: start;
  font-size: 0.875rem;
  padding: 10px 15px;
`;

export const stylesDropsDownHead = css`
  border: 1px solid #e0e0e0;
  height: 42px;
  align-items: center;
  display: flex;
  padding: 0px 15px;
  font-size: 0.875rem;
  border-radius: 5px;
  width: 100%;
  padding-right: 40px;
  background: #fff;
`;

export const stylesMonths = css`
  ${stylesDropsDownHead}
`;

export const optionsStylesMonths = css`
  top: 100%;
  left: 0px;
  right: 0px;
  width: 100%;
  & div:first-child {
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

export const Months = [
  {
    label: "Show Full Year",
    value: "ALL"
  },
  {
    label: "January",
    value: "JAN"
  },
  {
    label: "February",
    value: "FEB"
  },
  {
    label: "March",
    value: "MAR"
  },
  {
    label: "April",
    value: "APR"
  },
  {
    label: "May",
    value: "MAY"
  },
  {
    label: "June",
    value: "JUN"
  },
  {
    label: "July",
    value: "JUL"
  },
  {
    label: "August",
    value: "AUG"
  },
  {
    label: "September",
    value: "SEP"
  },
  {
    label: "October",
    value: "OCT"
  },
  {
    label: "November",
    value: "NOV"
  },
  {
    label: "December",
    value: "DEC"
  }
];

export const activeMonth = {
  label: "November",
  value: "NOV"
};
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button
            label="dangerButton"
            btnType="danger"
            onClick={() => console.log({ value: "1" })}
          >
            Danger button
          </Button>
          <Dropdown
            alignment="bottom"
            data={Months}
            activeOption={activeMonth}
            stylesContainer={stylesContainer}
            stylesDropsDownHead={stylesMonths}
            optionsStyles={optionsStylesMonths}
            optionItemsStyles={optionItemsStylesMonths}
          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
