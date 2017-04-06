console.log('hi');

const jsContainer = document.getElementById("js");
jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
  </div>
`;

const reactContainer = document.getElementById("react");
ReactDOM.render(
  React.createElement(
    "div",
    { className: "demo" },
    "Hello React"
  ),
  reactContainer
);
