import { ForwardedRef } from 'react';

import Input from '../Input/Input';
import Button from '../Button';

import styles from './SignUp.module.css';

type SignUpProps = {
  children?: string;
  inputRef?: ForwardedRef<HTMLInputElement>;
  inputType?: string;
  inputName?: string;
  inputPlaceholder?: string;
  inputMinMaxLength?: [number, number];
  buttonText: string;
  buttonOnClick?: () => void;
};

const SignUp = (props: SignUpProps) => {
  const {
    children: text,
    inputRef,
    inputType,
    inputName,
    inputPlaceholder,
    inputMinMaxLength,
    buttonText,
    buttonOnClick,
  } = props;

  const [inputMinLength, inputMaxLength] = inputMinMaxLength ?? []

  return (
    <div className={styles.signUp}>
      {text && <p className={styles.signUpTitle}>{text}</p>}
      <div className={styles.signUpOrderContainer}>
        <div className={styles.signUpInputContainer}>
          <Input
            ref={inputRef}
            type={inputType}
            name={inputName}
            placeholder={inputPlaceholder}
            minLength={inputMinLength}
            maxLength={inputMaxLength}
          />
        </div>
        <div className={styles.signUpButtonContainer}>
          <Button
            blackText={inputPlaceholder === 'Ваш e-mail' ? true : false}
            onClick={buttonOnClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
