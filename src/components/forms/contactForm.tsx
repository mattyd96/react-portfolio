import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { TextInput, Button, Box, Group, Textarea } from '@mantine/core';
import e from 'express';
import React from 'react';

const schema = z.object({
  name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  content: z.string().min(1, {message: 'content can not be blank'})
});

function ContactForm() {
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      name: '',
      email: '',
      content: '',
    },
  });

  const submit = form.onSubmit((values) => {
    // can do something with values when form is submitted
    // will remain inacrtive for now
    console.log("form submitted!");

    form.setValues({
      name: '',
      email: '',
      content: ''
    });
  });

  return (
    <Box sx={{ width: 'min(calc(100% - 2rem), 35rem)'}} mx="auto">
      <h2>Contact Me</h2>
      <form onSubmit={submit}>
        <TextInput
          required
          label="Name"
          placeholder="John Doe"
          mt="sm"
          {...form.getInputProps('name')}
        />
        <TextInput
          required
          label="Email"
          placeholder="example@mail.com"
          {...form.getInputProps('email')}
        />
        <Textarea
          required
          label="comment"
          placeholder="say hi!"
          autosize
          minRows={7}
          maxRows={20}
          mt="sm"
          {...form.getInputProps('content')}
        />

        <Group position="right" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default ContactForm;