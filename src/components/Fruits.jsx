import Fruit from "./Fruit";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import test from "node:test";

function test1() {
  console.log("this is test");
  alert("Clicked");
}

export default function Fruits() {
  const options = [
    { label: "The Godfather", id: 1 },
    { label: "Pulp Fiction", id: 2 },
  ];
  const fruits = ["Apple", "Mango", "Banana", "Pineapple"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit} name={fruit} />
        ))}
      </ul>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined" onClick={test1}>
          Outlined
        </Button>
      </Stack>
    </div>
  );
}
