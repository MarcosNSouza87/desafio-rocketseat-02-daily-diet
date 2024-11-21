import React from 'react';
import * as S from './styles';
interface ICardMeal {
  hour: string;
  title: string;
  status: boolean;
}
export function CardMeal({hour, title, status}: ICardMeal) {
 return (
    <S.Container >
      <S.HourText>{hour}</S.HourText>
      <S.Title>{title}</S.Title>
      <S.Status status={status}/>
    </S.Container>
 );
}