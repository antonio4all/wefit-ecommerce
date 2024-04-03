import * as S from './styles';

interface GeneralBannerProps {
  title: string;
  image: string;
  textButton: string;
  buttonClick: () => void;
}

export default function BannerMessage({
  title,
  image,
  textButton,
  buttonClick,
}: GeneralBannerProps) {
  return (
    <S.Container>
      <S.StyledTitle>{title}</S.StyledTitle>
      <img src={image} alt='' width={180} height={264} />
      <S.StyledButton onClick={buttonClick}>{textButton}</S.StyledButton>
    </S.Container>
  );
}
