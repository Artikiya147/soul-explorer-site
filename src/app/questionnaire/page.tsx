import type { Metadata } from "next";
import { QuestionnaireFlow } from "./questionnaire-flow";
import "./questionnaire.css";

export const metadata: Metadata = {
  title: "Soul Reading Questionnaire · Soul Explorer",
  description:
    "Prepare for your Soul Reading + Oracle session with Alex Fadda & Liora. Share your details, intentions and seven sacred numbers.",
  robots: { index: false, follow: false },
};

export default function QuestionnairePage() {
  return <QuestionnaireFlow />;
}
