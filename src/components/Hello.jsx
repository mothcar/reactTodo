const name = "Hwang";

function plus(a, b) {
  return a + b;
}

function Hello({ message, name }) {
  // console.log("Props : ", props);
  return (
    <div>
      {name} {message}
    </div>
  );
}

export default Hello;
