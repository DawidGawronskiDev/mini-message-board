import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

const messageSchema = z.object({
  user: z
    .string()
    .min(3, { message: "Username must contain at least 3 character(s)" })
    .max(32, { message: "Username can't be longer than 32 character(s)" }),
  text: z
    .string()
    .min(3, { message: "Message must contain at least 3 character(s)" })
    .max(255, { message: "Username can't be longer than 255 character(s)" }),
});

const MessageForm = () => {
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      user: "",
      text: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof messageSchema>) => {
    const { user, text } = values;

    await axios
      .post("http://localhost:3000/messages", {
        user: user,
        text: text,
      })
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ["messages"] });
      })
      .catch((error) => console.error(error));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="user"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default MessageForm;
