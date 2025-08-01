import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/shared/ui/kit/card";

interface Props {
  form: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  footerText: React.ReactNode;
}

export function AuthLayout({ form, title, description, footerText }: Props) {
  return (
    <main className="grow flex flex-col pt-[200px] items-center">
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{form}</CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground [&_a]:underline [&_a]:text-primary">
            {footerText}
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
