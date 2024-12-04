import { FormEvent, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';

import Input from '../Input/Input';
import Heading from '../Heading';
import Button from '../Button';

import { getUsers, addUser } from '../../api/excursionsAPIs';
import type { User } from '../../types';
import closeButton from '../../assets/closeButton.png';

import styles from './SignUpModal.module.css';

const modalContainer = document.getElementById('modals');

type SignUpModalProps = {
  isOpen?: boolean;
  toggleModal: () => void;
  telInputValue?: string;
  isMobile?: boolean;
};

const SignUpModal = (props: SignUpModalProps) => {
  const { isOpen, toggleModal, telInputValue, isMobile } = props;

  const [users, setUsers] = useState<User[]>([]);
  const [orderStatus, setOrderStatus] = useState({
    success: false,
    message: '',
  });

  const onClose = () => {
    setOrderStatus({ success: false, message: '' });
    toggleModal();
  };

  const checkUser = (orderUser: User) => {
    const isTelephoneMatch = users.some(
      (user) => user.phone === orderUser.phone
    );
    const isEmailMatch = users.some((user) => user.email === orderUser.email);

    return { isTelephoneMatch, isEmailMatch };
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJSON = Object.fromEntries(formData);

    const orderUser: User = {
      name: formJSON.userName as string,
      phone: formJSON.userPhone as string,
      email: formJSON.userEmail as string,
    };

    const { isEmailMatch, isTelephoneMatch } = checkUser(orderUser);

    if (isTelephoneMatch)
      setOrderStatus({
        success: false,
        message: 'Пользователь с таким номером телефона уже оставил заявку!',
      });
    else if (isEmailMatch)
      setOrderStatus({
        success: false,
        message: 'Пользователь с таким e-mail уже оставил заявку!',
      });
    else {
      try {
        await addUser(orderUser);
        setOrderStatus({
          success: true,
          message: 'Вы успешно оставили заявку на экскурсию!',
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setOrderStatus({
            success: false,
            message: error.message,
          });
        } else
          setOrderStatus({
            success: false,
            message: 'Неизвестная ошибка',
          });
      }
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      const { data: usersData } = await getUsers();
      setUsers(usersData);
    };

    void loadUsers();
  }, []);

  if (!isOpen) return null;
  return createPortal(
    <div className={styles.signUpModal}>
      <div className={styles.signUpModalWrapper}>
        <form className={styles.signUpModalForm} onSubmit={handleSubmit}>
          <button className={styles.signUpModalButtonClose} onClick={onClose}>
            <img
              className={styles.signUpModalButtonCloseImg}
              src={closeButton}
              alt="Крестик закрытия"
            />
          </button>
          <div className={styles.signUpModalContainer}>
            <div className={styles.signUpModalHeadingContainer}>
              <Heading>Оставьте заявку мы с вами свяжемся</Heading>
            </div>
            <div className={styles.signUpModalInputsCotnainer}>
              <Input name="userName" placeholder="Ваше имя" required border />
              <Input
                type="tel"
                name="userPhone"
                value={telInputValue}
                placeholder="+7 (___) ___ __ __"
                minLength={12}
                maxLength={12}
                required
                border
              />
              <Input
                type="email"
                name="userEmail"
                placeholder="Ваш e-mail"
                required
                border
              />
            </div>
            <div className={styles.signUpModalSubmitButtonContainer}>
              <Button blackText>Отправить</Button>
              {isMobile && (
                <Button blackText onClick={onClose}>
                  Закрыть
                </Button>
              )}
            </div>
            {orderStatus.message && (
              <p
                className={`${styles.orderStatusMessage} ${
                  orderStatus.success ? styles.orderStatusMessageSuccess : ''
                }`}
              >
                {orderStatus.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>,
    modalContainer!
  );
};

export default SignUpModal;
