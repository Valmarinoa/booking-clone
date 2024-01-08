"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import * as z from "zod";
import { BedDoubleIcon } from "lucide-react";

export const formSchema = z.object({
  location: z.string().min(2).max(50),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z
    .string()
    .min(1, {
      message: "Please select at least one adult",
    })
    .max(12, { message: "Maximum of 12 adults allowed" }),
  children: z.string().min(0).max(12, {
    message: "Maximum of 12 children allowed",
  }),
  rooms: z.string().min(1, { message: "Please select at least one room" }),
});

const SearchForm = () => {
  //   const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: "1",
      children: "0",
      rooms: "1",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 rounded-lg space-y-4 lg:space-y-0 "
      >
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex text-white" htmlFor="location">
                Location <BedDoubleIcon className="ml-2 h-4 w-4 text-white" />
              </FormLabel>
              <FormMessage />
              <FormControl>
                <Input
                  {...field}
                  id="location"
                  placeholder="Where are you going?"
                  className="rounded-lg"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchForm;
