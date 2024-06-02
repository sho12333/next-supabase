"use client";
import UserProfile from "@/components/users/UserProfile";
import { Card } from "@/components/ui/card";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const ProfilePage: React.FC = () => {
  const form = useForm({
    mode: "onChange",
    // resolver: zodResolver(RegisterFormSchema),
    // defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = () => {};
  return (
    <>
      <Card className="w-full p-3">
        <div className="">プロフィール</div>
        <div className="grid grid-cols-3 gap-4">
          <div className="border-r-2 border-r-slate-400-700">
            <UserProfile />
          </div>
          <div className="col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  name="email"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>名前</FormLabel>
                      <FormControl>
                        <Input autoComplete="off" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>表示名</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="mt-4 text-right">
                  <Button type="submit">更新</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProfilePage;
