"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ContactFormSchema, ContactFormType } from "@/lib/types";
import { trpc } from "@/trpc/client";
import { useToast } from "./ui/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const { mutate: contactFormMutation } = trpc.contactMe.useMutation({
    onSuccess() {
      form.reset();
      toast({
        title: "Thanks for reaching out 😉",
        description: "I'll get back to you soon",
      });
    },
    onError() {
      toast({
        variant: "destructive",
        title: "Something went wrong sending message, try again",
      });
    },
  });
  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: ContactFormType) {
    toast({
      title: "Sending Request ...",
    });
    contactFormMutation(values);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Link href={""} className={`lgtext-slate-900  text-sm`}>
          Contact
        </Link>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] rounded-none dark:border-white">
        <DialogHeader>
          <DialogTitle>Let&apos;s talk</DialogTitle>
          <DialogDescription>
            Reach out to me with any inquiries, I&apos;ll respond ASAP.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-sm shadow-sm"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
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
                    <Input
                      className="rounded-sm shadow-sm"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="rounded-sm shadow-sm"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" className="w-full rounded-sm shadow-sm">
                Send
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
