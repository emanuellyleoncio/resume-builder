import { Languages } from "lucide-react";
import { SectionTitle } from "../../infos-sidebar/section-title";
import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type LanguageOption = {
  label: string;
  value: ResumeLanguages;
};

export const languagesOptions: LanguageOption[] = [
    {
        label: "English",
        value: "english",
    },
    {
        label: "Spanish",
        value: "spanish",
    },
    {
        label: "French",
        value: "french",
    },
    {
        label: "German",
        value: "german",
    },
    {
        label: "Italian",
        value: "italian",
    },
    {
        label: "Portuguese",
        value: "portuguese",
    },
];

export const LanguageSection = () => {
  const { control } = useFormContext<ResumeData>();

  return (
    <div>
      <SectionTitle title="Linguagem" icon={Languages} />

      <Controller
        control={control}
        name="structure.language"
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="mt-4">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              {languagesOptions.map((language) => (
                <SelectItem key={language.value} value={language.value}>
                  {language.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};