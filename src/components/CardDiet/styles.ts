import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native';

type IContainer = {
  status: boolean;
}


export const Container = styled(TouchableOpacity)<IContainer>`
  width: 100%;
  height: 102px;
  background-color: ${({theme, status}) => status ? theme.COLORS.GREEN.LIGHT :  theme.COLORS.RED.LIGHT };
  justify-content: center;
  border-radius: ${({theme}) => theme.BORDERRADIUS}px;
  margin-bottom: 20px;

`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Icon = styled(ArrowUpRight).attrs<IContainer>(({theme, status})=>({
  size: 32,
  color: status ? theme.COLORS.GREEN.DARK : theme.COLORS.RED.DARK,
}))`
  position: absolute;
  top: 4px ;
  right: 4px;
`;
