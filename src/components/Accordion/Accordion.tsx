import { ReactNode } from 'react';
import {
  AccordionContainer,
  HeaderContainer,
  BodyContainer,
  HorizontalRuler,
  SmallChevron,
  LargeChevron,
} from './Accordion.styles';

export type Props = {
  header: React.ReactElement;
  open: boolean;
  setOpen?: (value: React.SetStateAction<boolean>) => void;
  hasChevron?: boolean;
  chevronSize?: 'small' | 'large';
  hasAnimation?: boolean;
  hasRuler?: boolean;
  className?: string;
  children: ReactNode;
};

const Accordion: React.FC<Props> = ({
  header,
  children,
  open,
  setOpen,
  hasAnimation = true,
  hasRuler = false,
  className,
  hasChevron = false,
  chevronSize = 'small',
}) => (
  <AccordionContainer
    onClick={() => !open && setOpen && setOpen((prevState) => !prevState)}
    $open={open}
    className={className}
  >
    <HeaderContainer onClick={() => open && setOpen && setOpen((prevState) => !prevState)}>
      {header}
      {hasChevron &&
        (chevronSize === 'large' ? (
          <LargeChevron $isOpen={open} />
        ) : (
          <SmallChevron $isOpen={open} />
        ))}
    </HeaderContainer>
    {hasRuler && open && <HorizontalRuler />}
    {open && <BodyContainer $hasAnimation={hasAnimation}>{children}</BodyContainer>}
  </AccordionContainer>
);

export default Accordion;
