import { Hero } from "@/components/hero";
import { Schedule } from "@/components/schedule";
import { HighlandPreview } from "@/components/highland-preview";
import { Lodging } from "@/components/lodging";
import { FamilyLeads } from "@/components/family-leads";

export default function Home() {
  return (
    <>
      <Hero />
      <Schedule />
      <HighlandPreview />
      <Lodging />
      <FamilyLeads />
    </>
  );
}
