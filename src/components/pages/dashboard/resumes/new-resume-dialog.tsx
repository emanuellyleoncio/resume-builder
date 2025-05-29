'use client';

import { Button } from "@/components/ui/button";
import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { InputField } from "@/components/ui/dialog/input/field";
import { useForm, FormProvider } from "react-hook-form";

type FormData = {
  title: string;
};

export const NewResumeDialog = (props: BaseDialogProps) => {
  const methods = useForm<FormData>({defaultValues: { title: "" } });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <Dialog
      {...props}
      title="Create new resume"
      description="To start, choose a title for your resume."
      content={
        <FormProvider {...methods}>
          <form className="flex flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
            <InputField
              name="title"
              label="Resume Title"
              placeholder="Enter resume title"
              required
            />
            <Button type="submit" className="w-max mt-6 ml-auto">
              Create
            </Button>
          </form>
        </FormProvider>
      }
    />
  );
};
