"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { createSelmSchema, CreateSelmType } from "@/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormComponent = () => {
  function onSubmit(values: CreateSelmType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
  }

  const form = useForm<CreateSelmType>({
    resolver: zodResolver(createSelmSchema),
    defaultValues: {
      email: "",
    },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex pt-6 relative"
      >
        <Button
          type="submit"
          className="rounded-3xl bg-primary capitalize text-xs flex- items-center cursor-pointer absolute"
        >
          Join our email list{" "}
          <ArrowRight className="w-4 h-4 bg-[#333] rounded-[50%]" />
        </Button>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  className="rounded-3xl w-xs md:w-lg border-primary pl-44 text-[10px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default FormComponent;
