"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "@/lib/actions/auth-actions";
import { useToast } from "@/components/ui/use-toast";
import { RegisterFormSchema } from "@/lib/types/auth";
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
  const { toast } = useToast();
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  // TODO メールredirect
  const onSubmit: SubmitHandler<z.infer<typeof RegisterFormSchema>> = async (
    formData
  ) => {
    const { error } = await signUp(formData);
    if (error) {
      form.reset();
    }
    toast({
      title: "登録完了しました。ログインしてください。",
    });
    return router.push("/login");
  };

  return (
    <div className="flex w-full px-8 justify-center items-center gap-2 bg-inherit dark:bg-inherit">
      <Form {...form}>
        <form
          className="w-full px-8 sm:max-w-md justify-center p-8  dark:bg-slate-950  gap-2 text-foreground"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>
                <FormControl>
                  <Input autoComplete="off" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>パスワード</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>パスワード(確認用)</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-4">
            <Button type="submit" className="w-full">
              登録
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
