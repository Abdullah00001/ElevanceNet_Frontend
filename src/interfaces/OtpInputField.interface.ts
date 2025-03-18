import { ChangeEvent, ClipboardEvent, KeyboardEvent, RefObject } from "react";

interface IOtpInputField {
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onPaste?: (e: ClipboardEvent<HTMLInputElement>) => void;
  onBackspace?: (e: KeyboardEvent<HTMLInputElement>) => void;
  index: number;
  inputRefs: RefObject<(HTMLInputElement | null)[]>;
}

export default IOtpInputField;
