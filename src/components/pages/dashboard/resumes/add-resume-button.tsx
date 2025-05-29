import { Plus } from "lucide-react"
import { ResumeCardButton } from "./resume-card"


export const AddResumeButton = () => {
  return (
    <ResumeCardButton
      title="Create new resume"
      description="Click to create a new resume"
      icon={<Plus size={50} />}
    />
  )
}