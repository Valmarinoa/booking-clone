"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as z from "zod";
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

import { BedDoubleIcon, Calendar, CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

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
        {/* Location Field */}
        <div className="w-full lg:max-w-sm flex-1 text-center  justify-center">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="flex text-white" htmlFor="location">
                  Location <BedDoubleIcon className="ml-2 h-4 w-4 text-white" />
                </FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    {...field}
                    id="location"
                    placeholder="Where are you going?"
                    className="rounded-lg border-none bg-white"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        {/* Dates Field */}
        <div className="grid w-full lg:max-w-sm flex-1 items--center gap-1.5">
          <FormField
            control={form.control}
            name="dates"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-white" htmlFor="dates">
                  Dates
                </FormLabel>
                <FormMessage />
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          id="date"
                          name="dates"
                          variant={"outline"}
                          className={cn(
                            "w-full lg:max-w-sm justify-center text-left font-normal bg-yellow-400",
                            !field.value.from && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="h-4 w-4 mr-3" />
                          {field.value?.from ? (
                            field.value?.to ? (
                              <>
                                {format(field.value?.from, "LLL dd, y")}-{""}
                                {format(field.value?.to, "LLL dd, y")}
                              </>
                            ) : (
                              format(field.value?.from, "LLL dd, y")
                            )
                          ) : (
                            <span>Select your dates</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="range"
                        range={{
                          from: field.value?.from || new Date(),
                          to: field.value?.to || new Date(),
                        }}
                        defaultMonth={field.value.from}
                        onSelect={field.onChange}
                        numberOfMonths={2}
                        disabled={(date: number) =>
                          date < new Date().setHours(0, 0, 0)
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        {/* Adults */}
        <div className="flex  w-full items-center space-x-2">
          <FormField
            control={form.control}
            name="adults"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-white" htmlFor="adults">
                  Adults
                </FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    {...field}
                    id="adults"
                    type="number"
                    placeholder="1"
                    className="rounded-lg"
                  />
                </FormControl>
              </FormItem>
            )}
          ></FormField>
        </div>
        {/* Children */}
        <div className="flex  w-full items-center space-x-2">
          <FormField
            control={form.control}
            name="children"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-white" htmlFor="children">
                  Children
                </FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    {...field}
                    id="children"
                    type="number"
                    placeholder="1"
                    className="rounded-lg"
                  />
                </FormControl>
              </FormItem>
            )}
          ></FormField>
        </div>

        {/* Rooms */}
        <div className="flex  w-full items-center space-x-2">
          <FormField
            control={form.control}
            name="rooms"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-white" htmlFor="rooms">
                  Rooms
                </FormLabel>
                <FormMessage />
                <FormControl>
                  <Input
                    {...field}
                    id="rooms"
                    type="number"
                    placeholder="1"
                    className="rounded-lg"
                  />
                </FormControl>
              </FormItem>
            )}
          ></FormField>
        </div>
      </form>
    </Form>
  );
};

export default SearchForm;
