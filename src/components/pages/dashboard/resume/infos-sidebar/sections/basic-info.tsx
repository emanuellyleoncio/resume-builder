import { UserRound } from "lucide-react"
import { SectionTitle } from "../section-title"
import { InputField } from "@/components/ui/input/field"
import { SwitchField } from "@/components/ui/switch/field"

export const BasicInfoSection = () => {
  return (
    <div>
      <SectionTitle title="Basic Informations" icon={UserRound} />

      <div className="grid grid-cols-2 gap-4 mt-4 w-full">
        <div className="col-span-full w-full flex gap-3 items-end">
          <InputField
            label="Photo"
            placeholder="https://..."
            name="content.image.url"
            containerClassName="flex-1"
          />
          <SwitchField name="content.image.visible" className="mb-2" />
        </div>

        <InputField label="Full name" name="content.infos.fullName" />
        <InputField label="Headline" name="content.infos.headline" />
        <InputField label="E-mail" name="content.infos.email" />
        <InputField label="Website" name="content.infos.website" />
        <InputField label="Phone number" name="content.infos.phone" />
        <InputField label="Location" name="content.infos.location" />
      </div>
    </div>
  )
}