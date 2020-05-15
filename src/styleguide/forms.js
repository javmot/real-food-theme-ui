/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled, Flex, Box, Select, Textarea, Grid } from "theme-ui";
import Button from "../components/Button";
import MaterialField from "../components/MaterialField";
import Field from "../components/Field";
export default () => (
  <div>
    <Styled.h2>Buttons</Styled.h2>
    <Flex>
      <Box pr={4}>
        <Button variant="primary">Button</Button>
      </Box>
      <Box pr={4}>
        <Button variant="outline">Button</Button>
      </Box>
      <Box pr={4}>
        <Button variant="muted">Button</Button>
      </Box>
    </Flex>
    <Box sx={{ width: ["full", null, null, 6] }}>
      <Styled.h2>Form Fields</Styled.h2>
      <MaterialField label="Material" name="material" defaultValue="" />
      <Grid gap={4} py={5} columns={2}>
        <Field label="Email" name="email2" defaultValue="" />
        <Field
          as={Select}
          label="Greeting"
          name="greeting"
          defaultValue="Hello"
        >
          <option>Hello</option>
          <option>Hi</option>
          <option>Beep</option>
          <option>Boop</option>
        </Field>
      </Grid>
      <Field
        as={Textarea}
        label="Description"
        rows={8}
        name="description"
        defaultValue="Hello"
      />
      <Button mt={4}>Submit</Button>
      <Styled.h2>Status</Styled.h2>
      <Field label="Focus" name="error" status="focus" />
      <Box mt={5}>
        <Field
          label="Error"
          name="error"
          status="error"
          error="This is one error"
        />
      </Box>
    </Box>
  </div>
);
