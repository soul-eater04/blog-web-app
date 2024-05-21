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

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  title: z.string().max(30, "Title length is limited to 30 characters"),
  content: z.string().max(200, "Content length is limited to 200 characters!"),
});

const post = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="h-screen flex flex-col justify-center items-center">
        <Card>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-8 flex flex-col space-y-4 w-[50vw] border border-black rounded-lg"
          >
            <h1 className="font-bold underline text-xl">Create a Post</h1>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Textarea className="h-40" placeholder="Write something.."></Textarea>
            <Button type="submit">Post</Button>
            <Link className="underline underline-offset-2 " href="/">
              Go back to home
            </Link>
          </form>
        </Card>
      </div>
    </Form>
  );
};

export default post;
