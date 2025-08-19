const parent = React.createElement("div",{id:'parent'},
[  React.createElement('div',{id:'child1'},[
    React.createElement('h1',{},"this is h1 tag"),
    React.createElement('h2',{},"this is h2 tag")
  ]),
React.createElement('div',{id:'child1'},[
    React.createElement('h1',{},"this is h1 tag"),
    React.createElement('h2',{},"this is h2 tag")
])
]);

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(parent);
