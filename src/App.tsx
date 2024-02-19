import { Box, Stack } from "@mui/joy";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <Stack sx={{ alignItems: "center" }}>
      <Box sx={{ alignItems: "center" }}>
        <h1>Counter</h1>
      </Box>
      <Counter />
    </Stack>
  );
}

export default App;
