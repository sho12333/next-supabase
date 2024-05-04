"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "@/lib/actions/auth-actions";
import { redirect } from "next/navigation";
import { FormSchema } from "@/lib/types/auth";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Login() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
    formData
  ) => {
    const { error } = await signUp(formData);
    if (error) {
      form.reset();
    }
    return router.push("/login");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8  justify-center items-center gap-2 bg-slate-100">
      <div className="text-lg absolute left-8 top-8 py-2 px-4">
        <h2 className="font-bold">Register</h2>
      </div>
      <Form {...form}>
        <form
          className="w-full px-8 sm:max-w-md justify-center p-8 rounded-md shadow-lg gap-2 text-foreground"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-4">
            <Button type="submit" className="w-full">
              Register
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
