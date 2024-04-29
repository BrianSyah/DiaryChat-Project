import AlertDiary from "@/components/global/(diary)/AlertDiary";
import CardDiaries from "@/components/global/(diary)/CardDiaries";
import Wrapper from "@/components/global/Wrapper";

export const revalidate = 0;

export default function page(): React.ReactElement {
  return (
    // Page utama
    // Wrapper komponen pembungkus CardDiaries
    <Wrapper>
      <AlertDiary />
      <CardDiaries />
    </Wrapper>
  );
}
