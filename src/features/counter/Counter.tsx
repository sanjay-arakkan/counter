import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Input, Stack } from "@mui/joy";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";
import { RootState } from "../../app/store";
import { useState } from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <Stack sx={{ alignItems: "center" }}>
      <h1>{count}</h1>
      <Box sx={{ mb: 8 }}>
        <Button
          variant="solid"
          sx={{ mr: 2 }}
          onClick={(e) => dispatch(increment())}
        >
          Add
        </Button>
        <Button variant="solid" onClick={(e) => dispatch(decrement())}>
          Sub
        </Button>
      </Box>
      <Input
        placeholder="Amount"
        variant="soft"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />
      <Box sx={{ mt: 2 }}>
        <Button
          variant="solid"
          sx={{ mr: 2 }}
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </Button>
        <Button variant="solid" onClick={resetAll}>
          Reset
        </Button>
      </Box>
    </Stack>
  );
};

export default Counter;
