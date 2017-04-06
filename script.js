console.log('hi');

const jsContainer = document.getElementById("js");
jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
    <input />
    <p>${new Date()}</p>
  </div>
`;

const reactContainer = document.getElementById("react");
ReactDOM.render(
  React.createElement(
    "div", // What kind of element to get
    { className: "demo" },
    "Hello React",
    React.createElement("input"),
    React.createElement(
      "p",
      null,
      new Date().toString()
    )
  ),
  reactContainer // Which element to get
);
