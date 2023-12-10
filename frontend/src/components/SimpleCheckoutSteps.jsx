import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";


export default function SimpleCheckoutSteps({ step1, step2, step3, step4 }) {
  return (
    <Container sx={{py:5,}}>
      <Stack direction='row' justifyContent='center' gap={3}>
          <Paper>
        {step1? (
        <Link href='/cart'>
        <Button variant="text">Cart</Button>
        </Link>
        ) : (
          <Button variant="text">Cart</Button>
        )}
          </Paper>
          <Paper>
        {step2? (
        <Link href='/checkout'>
        <Button>Checkout</Button>
        </Link>
        ) : (
          <Button variant="text" disabled>Checkout</Button>
        )}
          </Paper>
          <Paper>
        {step3? (
        <Link href='/cart'>
        <Button variant="text">Completed</Button>
        </Link>
        ) : (
          <Button variant="text" disabled>Completed</Button>
        )}
          </Paper>
      </Stack>
    </Container>
  );
}
