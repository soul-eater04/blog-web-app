"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import axios from "axios"

const formSchema = z.object({
  username: z.string().min(2).max(30),
  email: z.string().email({
    message: "Not a valid email address",
  }),
  password: z.string().min(8,{
    message:"password must be between 8 and 30 characters",
  }).max(30),
})

const signup = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(JSON.stringify(values))
    axios.post('http://localhost:8000/api/users/signup',values)
  }

  return (
    <Form {...form} >
      <div className="h-screen flex flex-col justify-center items-center">
        <Card>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-8 flex flex-col space-y-4 w-80 border border-black rounded-lg">
            <h1 className="font-bold underline text-xl">Sign Up</h1>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Username" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="abc@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
            <Link className="underline underline-offset-2 " href="/">Go back to home</Link>
          </form>
        </Card>
      </div>
    </Form>
  );
};

export default signup;
