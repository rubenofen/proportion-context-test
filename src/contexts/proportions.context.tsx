import { createContext, useMemo, useState } from "react";

const lockedLineHeights: { [x: number]: { [y: number]: number } } = {
  16: { 2: 31.5, 3: 44 },
  18: { 2: 31.5, 3: 44 },
  20: { 2: 36.5, 3: 55 },
  22: { 2: 36.5, 3: 55 },
  24: { 2: 43, 3: 72 },
  26: { 2: 43, 3: 72 },
};

const pageBoxXCoordinates: { [x: number]: number } = {
  450: 262,
  350: 312,
  250: 362,
};

type ProportionsContextType = {
  textFieldWidth: number;
  setTextFieldWidth: (width: number) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
  lineHeightMultiplier: number;
  setLineHeightMultiplier: (multiplier: number) => void;
  lock: boolean;
  setLock: (lock: boolean) => void;
  textFieldHeight: number;
  letterSpacing: number;
  rulerTransition: number;
  rulerHeight: number;
  pageBoxWidth: number;
  rulerWidth: number;
  pageBoxHeight: number;
  pageBoxY: number;
  pageBoxX: number;
  lockedLineHeight: number;
} | null;

type ProportionsProviderProps = {
  children: React.ReactNode;
};

export const ProportionsContext = createContext<ProportionsContextType>(null);

export const ProportionsProvider = ({ children }: ProportionsProviderProps) => {
  const [textFieldWidth, setTextFieldWidth] = useState(450);
  const [fontSize, setFontSize] = useState(20);
  const [lineHeightMultiplier, setLineHeightMultiplier] = useState(2);
  const [lock, setLock] = useState(false);

  const calculations = useMemo(() => {
    const textFieldHeight = 466;
    const letterSpacing = 55;
    const rulerTransition = 0.6;
    const rulerHeight = fontSize * lineHeightMultiplier;
    const pageBoxWidth = textFieldWidth + 50;
    const rulerWidth = textFieldWidth + 40;
    const pageBoxHeight = 510;
    const pageBoxY = 180;
    const pageBoxX = pageBoxXCoordinates[textFieldWidth];
    const lockedLineHeight = lock
      ? lockedLineHeights[fontSize][lineHeightMultiplier]
      : fontSize * lineHeightMultiplier;

    return {
      lineHeightMultiplier,
      fontSize,
      textFieldWidth,
      lock,
      textFieldHeight,
      letterSpacing,
      rulerTransition,
      rulerHeight,
      pageBoxWidth,
      rulerWidth,
      pageBoxHeight,
      pageBoxY,
      pageBoxX,
      lockedLineHeight,
    };
  }, [textFieldWidth, fontSize, lineHeightMultiplier, lock]);

  return (
    <ProportionsContext.Provider
      value={{
        ...calculations,
        setFontSize,
        setLineHeightMultiplier,
        setTextFieldWidth,
        setLock,
      }}
    >
      {children}
    </ProportionsContext.Provider>
  );
};
