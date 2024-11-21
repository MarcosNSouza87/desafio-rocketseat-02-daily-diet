import { styled, useTheme } from 'styled-components/native';
import * as IconComponent from 'phosphor-react-native';
import { ButtontypeStyleProps } from '@components/Button/styles';

interface IconProps {
  name: keyof typeof IconComponent;
  size?: number;
  type?: ButtontypeStyleProps;
}

const Icon = ({ name, size, type, ...props }: IconProps) => {
  const Component = IconComponent[name] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
  if (!Component) {
    throw new Error(`Ícone não encontrado: ${name}`);
  }
  const theme = useTheme();
  const color = type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1;

  return (
    <Component
    width={size}
    height={size}
    fill={color}
      {...props}
    />
  );
};

export const GenericIcon = styled(Icon)``;