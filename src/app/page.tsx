import ShortcutButton from "@/components/GetStartedClientButton";
import MainTitle from "@/components/MainTitle";
import MarkdownText from "@/components/MarkdownText";
import { getPage } from "@/data/getPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("Home");
  return {
    title: "IGOR N FAUSTINO",
    description: page?.description,
  };
}

export default async function Home() {
  const page = await getPage("Home");
  return (
    <main className="center m-auto flex h-full w-[90%] items-center justify-center md:w-full ">
      <div className="flex flex-col items-baseline gap-6">
        <MainTitle>{page?.title}</MainTitle>
        <MarkdownText className="max-w-xl" source={page?.description} />
        <ShortcutButton />
      </div>
    </main>
  );
}
