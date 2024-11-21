import React from 'react';
import * as S from './styles';
import { TouchableOpacityProps } from 'react-native';
type ICardMeal = TouchableOpacityProps & {
  hour: string;
  title: string;
  status: boolean;
}
export function CardMeal({hour, title, status, ...rest}: ICardMeal) {
 return (
    <S.Container {...rest}>
      <S.HourText>{hour}</S.HourText>
      <S.Title>{title}</S.Title>
      <S.Status status={status}/>
    </S.Container>
 );
}