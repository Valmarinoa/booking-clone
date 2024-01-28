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

import { BedDoubleIcon, CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

export const formSchema = z.object({
  location: z.string().min(2).max(50),
  dates: z.object({
    from: z.date({ required_error: "Please select a check-in date" }),
    to: z.date({ required_error: "Please select a check-in date" }),
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
        className="flex flex-col lg:flex-row lg:space-x-4 space-x-0 items-start justify-center w-full px-0 lg:px-6"
      >
        {/* Location + Dates */}
        <div className="flex flex-col w-full justify-start items-center lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 space-x-0 m-auto">
          {/* Location Field */}
          <div className="w-full lg:max-w-sm flex-1 text-center justify-center">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="flex text-white" htmlFor="location">
                    Location{" "}
                    <BedDoubleIcon className="ml-2 h-4 w-4 text-white" />
                  </FormLabel>
                  <FormMessage />
                  <FormControl>
                    <Input
                      {...field}
                      id="location"
                      placeholder="Where are you going?"
                      className="bg-white border-gray-200 rounded-[8px] text-gray-500"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          {/* Dates Field */}
          <div className="grid w-full lg:max-w-sm flex-1 items--center gap-1.5 ">
            <FormField
              control={form.control}
              name="dates"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-white " htmlFor="dates">
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
                            // variant={"outline"}
                            className={cn(
                              "w-full lg:max-w-sm justify-start text-left font-normal bg-white rounded-[8px] border border-gray-200",
                              !field.value.from && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="h-4 w-4 mr-3 text-gray-500" />
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
                              <span className="text-gray-500">
                                Select your dates
                              </span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="range"
                          selected={field.value}
                          defaultMonth={field.value.from}
                          onSelect={field.onChange}
                          numberOfMonths={2}
                          className="bg-white rounded-md"
                          disabled={{ before: new Date() }}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row justify-center mt-4 lg:mt-0 w-full space-4
        x-4 lg:space-x-4"
        >
          {/* fields */}
          <div className="flex gap-4">
            {/* Adults */}
            <div className="flex items-center space-x-2">
              <FormField
                control={form.control}
                name="adults"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-white" htmlFor="adults">
                      Adults
                    </FormLabel>
                    <FormMessage />
                    <FormControl className="bg-white">
                      <Input
                        {...field}
                        id="adults"
                        type="number"
                        placeholder="1"
                        className="bg-white border-gray-200 rounded-[8px] text-gray-500"
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </div>
            {/* Children */}
            <div className="flex items-center space-x-2">
              <FormField
                control={form.control}
                name="children"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-white" htmlFor="children">
                      Children
                    </FormLabel>
                    <FormMessage />
                    <FormControl className="bg-white">
                      <Input
                        {...field}
                        id="children"
                        type="number"
                        placeholder="1"
                        className="bg-white border-gray-200 rounded-[8px] text-gray-500"
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </div>

            {/* Rooms */}
            <div className="flex items-center space-x-2">
              <FormField
                control={form.control}
                name="rooms"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-white" htmlFor="rooms">
                      Rooms
                    </FormLabel>
                    <FormMessage />
                    <FormControl className="bg-white ">
                      <Input
                        {...field}
                        id="rooms"
                        type="number"
                        placeholder="1"
                        className="bg-white border-gray-200 rounded-[8px] text-gray-500"
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </div>
          </div>

          {/*  Search Buttton */}
          <div className="flex justify-center items-start w-auto">
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-900 text-base text-white rounded-3xl mt-8 lg:mt-0 w-[40%] lg:w-auto"
            >
              Search
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SearchForm;
