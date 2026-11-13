import { notFound } from "next/navigation";
import CareerDetail from "../../../components/career-detail";
import { careers } from "../../../lib/careers";

type CareerPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return careers.map(({ slug }) => ({ slug }));
}

export default async function CareerPage({ params }: CareerPageProps) {
  const { slug } = await params;
  const career = careers.find((item) => item.slug === slug);

  if (!career) notFound();

  return <CareerDetail career={career} />;
}