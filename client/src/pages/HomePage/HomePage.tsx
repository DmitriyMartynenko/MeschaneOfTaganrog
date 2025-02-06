import { useMediaQuery } from 'react-responsive';
import { FormEvent, useEffect, useRef, useState } from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input/Input';
import SignUp from '../../components/SignUp';
import Heading from '../../components/Heading';
import BenefitCard from '../../components/BenefitCard';
// import ReviewSlider from '../../components/ReviewSlider';
// import ReadMoreCard from '../../components/ReadMoreCard';
import Link from '../../components/Link';
import SignUpModal from '../../components/SignUpModal';

// import { reviews } from '../../mockData/mockReviews';

import logo from '../../assets/logo.png';
import stoneStair from '../../assets/stoneStair.png';
import meschanin from '../../assets/meschanin.png';
import quotes from '../../assets/quotes.png';
import {
  benefitCardImg1,
  benefitCardImg2,
  benefitCardImg3,
  benefitCardImg4,
} from '../../assets/benefitCardsImages';
import {
  meschane1,
  meschane2,
  meschane3,
} from '../../assets/meschaneOfTaganrog';
import tgliamz from '../../assets/TGLIAMZ.png';
// import {
//   readMoreImg1,
//   readMoreImg2,
//   readMoreImg3,
//   readMoreImg4,
// } from '../../assets/readMoreCardImages';

import styles from './HomePage.module.css';

const HomePage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px' });

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const orderExcursionInputRef = useRef<HTMLInputElement>(null);

  const onExcursionOrder = () => {
    setIsSignUpModalOpen((prev) => !prev);
  };

  const onSubscribeNews = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subscribeFormData = new FormData(event.currentTarget);
    const subscribeFormJSON = Object.fromEntries(subscribeFormData);
    console.log(subscribeFormJSON);
  };

  const onOrderCall = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const orderCallFormData = new FormData(event.currentTarget);
    const orderCallFormJSON = Object.fromEntries(orderCallFormData);
    console.log(orderCallFormJSON);
  };

  useEffect(() => {
    const targetElementId = window.location.hash.slice(1);

    if (targetElementId) {
      const targetElement = document.getElementById(targetElementId);
      if (targetElement) {
        targetElement.scrollIntoView();
      }
    }
  }, []);

  return (
    <>
      <section className={styles.promoSection}>
        <Header isMobile={isMobile} />
        <div className={styles.promoContent}>
          <div className={styles.promoTitleContainer}>
            <h1 className={styles.promoTitle}>
              <span
                className={`${styles.promoTitle} ${styles.promoTitleHighlighted}`}
              >
                Мещанский Таганрог:
              </span>{' '}
              Иммерсивные экскурсии
            </h1>
            <div className={styles.promoSignUpContainer}>
              <SignUp
                inputRef={orderExcursionInputRef}
                inputType="tel"
                inputPlaceholder="+7 (___) ___ __ __"
                inputMinMaxLength={[12, 12]}
                buttonText="Заказать экскурсию"
                buttonOnClick={onExcursionOrder}
              >
                Записаться на экскурсию
              </SignUp>
            </div>
          </div>
          <div className={styles.promoLogoContainer}>
            <img
              className={styles.promoLogo}
              src={logo}
              alt='Логотип проекта "Мещане Таганрога"'
            />
          </div>
        </div>
      </section>
      <section
        className={styles.meschaneInfoSection}
        id={isTablet ? 'meschaneInfo' : ''}
      >
        <div className={styles.stoneStairImgContainer}>
          <img
            className={styles.stoneStairImg}
            src={stoneStair}
            alt="Таганрогская Каменная лестница"
          />
        </div>
        <div className={styles.meschaninImgContainer}>
          <img
            className={styles.meschaninImg}
            src={meschanin}
            alt="Мещанин"
            id="meschaneInfo"
          />
          <img className={styles.quotesImg} src={quotes} alt="Кавычки" />
        </div>
        <div className={styles.meschaneInfoTextContent}>
          <Heading
            subtitle="Слово мещанину:"
            lineBeforeSubtitle
            wordsToHighlight={['не', 'все', 'равно']}
          >
            Потому что нам не все равно
          </Heading>
          <hr className={styles.meschaneInfoLine} />
          <p className={styles.meschaneInfoText}>
            В 1910-е гг. возросла политическая активность мещан. Она проявилась
            в организации и проведении Всероссийских съездов представителей
            мещанских обществ, а также съездов мещанских делегатов в 1917 г. Это
            было свидетельством жизнеспособности сословия, готовности мещан к
            переменам и защите своих прав, причем они не боялись прибегать к
            активным политическим действиям
          </p>
          <p className={styles.meschaneInfoAuthor}>
            Cмирнов Иван Николаевич
            <span className={styles.meschaneInfoJobTitle}>
              Кандидат исторических наук, <br />
              доцент
            </span>
          </p>
        </div>
      </section>
      <section className={styles.tryExcursionsSection} id="tryExcursions">
        <div className={styles.tryExcursionsHeadingContainer}>
          <p className={styles.tryExcursionsSubtitle}>
            Почему стоит попробовать
          </p>
          <h2 className={styles.tryExcursionsTitle}>
            Иммер<span className={styles.highlightedLetter}>с</span>ивные эк
            <span className={styles.highlightedLetter}>с</span>кур
            <span className={styles.highlightedLetter}>с</span>ии
          </h2>
        </div>
        <div className={styles.benefitCardsContainer}>
          <BenefitCard imgSrc={benefitCardImg1}>
            Погрузитесь в мещанский мир конца XIX-XX веков и узнайте, как жил
            Таганрог более 100 лет назад
          </BenefitCard>
          <BenefitCard imgSrc={benefitCardImg2}>
            Получите уникальную научную информацию о жителях города прошлых
            веков
          </BenefitCard>
          <BenefitCard imgSrc={benefitCardImg3}>
            Проведите необычно свой досуг
          </BenefitCard>
          <BenefitCard imgSrc={benefitCardImg4}>
            Блестните своими знаниями в кругу друзей или в школе
          </BenefitCard>
        </div>
      </section>
      <section
        className={styles.meschaneOfTaganrogSection}
        id="meschaneOfTaganrog"
      >
        <p className={styles.meschaneOfTaganrogTitle}>Мещане г. Таганрога</p>
        <div className={styles.meschaneOfTaganrogImagesContainer}>
          <div className={styles.meschaneOfTaganrogImgContainer}>
            <img
              className={styles.meschaneOfTaganrogImg}
              src={meschane1}
              alt="Мещане"
            />
          </div>
          <div className={styles.meschaneOfTaganrogImgContainer}>
            <img
              className={styles.meschaneOfTaganrogImg}
              src={meschane2}
              alt="Мещане"
            />
          </div>
          <div className={styles.meschaneOfTaganrogImgContainer}>
            <img
              className={styles.meschaneOfTaganrogImg}
              src={meschane3}
              alt="Мещане"
            />
          </div>
        </div>
      </section>
      <section className={styles.ourPartnersSection} id="ourPartners">
        <h2 className={styles.ourPartnersTitle}>Наши партнеры</h2>
        <div className={styles.ourPartnersImgContainer}>
          <Link to="https://tgliamz.ru/" openInNewTab>
            <img
              className={styles.ourPartnersTGLIAMZimg}
              src={tgliamz}
              alt="Таганрогский государственный литературный и историко-архитектурный музей-заповедник"
            />
          </Link>
        </div>
        <Link
          className={styles.ourPartnersText}
          to="https://tgliamz.ru/"
          openInNewTab
        >
          Таганрогский государственный литературный и историко-архитектурный
          музей-заповедник
        </Link>
      </section>
      <section className={styles.reviewsSection}>
        <Heading subtitle="О нас говорят" wordsToHighlight={['Отзывы']}>
          Отзывы наших клиентов
        </Heading>
        <div className={styles.reviewSliderContainer}>
          {/* <ReviewSlider
            reviews={reviews}
          /> */}
          <p className={styles.comingSoon}>Скоро здесь появятся отзывы наших клиентов</p>
        </div>
      </section>
      {/* <hr /> */}
      {/* <section className={styles.goodToKnowSection}>
        <div className={styles.goodToKnowWrapper}>
          <div className={styles.goodToKnowHeadingContainer}>
            <Heading
              subtitle="Наш блог"
              lineBeforeSubtitle
              wordsToHighlight={['Полезно']}
            >
              Полезно знать
            </Heading>
            {!isMobile && (
              <div className={styles.goodToKnowButtonContainer}>
                <Button blackText>Читать больше</Button>
              </div>
            )}
          </div>
          <div className={styles.readMoreCardsContainer}>
            <ReadMoreCard
              date="15 апреля"
              imgSrc={readMoreImg1}
              imgAlt="Правосудие"
            >
              Как использовать закон в свою пользу?
            </ReadMoreCard>
            <ReadMoreCard
              compact
              date="09 апреля"
              imgSrc={readMoreImg2}
              imgAlt="Скульптура"
            >
              Библиотека юристов. Что почитать?
            </ReadMoreCard>
            <ReadMoreCard
              compact
              date="06 марта"
              imgSrc={readMoreImg3}
              imgAlt="Документы"
            >
              На что обратить внимание в документах?
            </ReadMoreCard>
            <ReadMoreCard
              compact
              date="23 февраля"
              imgSrc={readMoreImg4}
              imgAlt="Юриспруденция"
            >
              Залог успешных дел наших юристов
            </ReadMoreCard>
          </div>
          {isMobile && (
            <div className={styles.goodToKnowButtonContainer}>
              <Button blackText>Читать больше</Button>
            </div>
          )}
        </div>
      </section> */}
      <section className={styles.subscribeSection}>
        <form className={styles.subscribeForm} onSubmit={onSubscribeNews}>
          <Heading
            subtitle="Будьте в курсе"
            lineBeforeSubtitle={false}
            wordsToHighlight={['Подпишитесь']}
          >
            Подпишитесь на наши новости
          </Heading>
          <div className={styles.subscribeSignUpContainer}>
            <p className={styles.subscribeText}>
              Чтобы всегда быть в курсе мещанских дел
            </p>
            <div className={styles.subscribeEmailContainer}>
              <div className={styles.subscribeInputContainer}>
                <Input
                  type="email"
                  name="subscribeEmail"
                  placeholder="Ваш e-mail"
                ></Input>
              </div>
              <div className={styles.subscribeButtonContainer}>
                <Button blackText>Подписаться</Button>
              </div>
            </div>
          </div>
        </form>
      </section>
      <section className={styles.footerSection}>
        <div className={styles.footerMapContainer}>
          <iframe
            className={styles.footerMap}
            src="https://yandex.ru/map-widget/v1/-/CDxqq6LW"
          ></iframe>
        </div>
        <div className={styles.footerContactInfoWrapper}>
          <div
            className={styles.footerContactInfoContainer}
            id="footerContactInfo"
          >
            <Heading
              subtitle="На связи с вами"
              lineBeforeSubtitle
              wordsToHighlight={['Контактная']}
              whiteTitleColor
            >
              Контактная информация
            </Heading>
            <div className={styles.footerContactInfoTextContainer}>
              <div className={styles.footerParagraphsContainer}>
                <p className={styles.footerContactInfoPhoneNumber}>
                  Телефон:{' '}
                  <span className={styles.footerContactInfoHighlighted}>
                    (8634) 61-14-66
                  </span>
                </p>
                <p className={styles.footerContactInfoAddress}>
                  Адрес:{' '}
                  <span className={styles.footerContactInfoHighlighted}>
                    г. Таганрог, ул. Октябрьская, 9
                  </span>
                </p>
              </div>
              <div className={styles.footerParagraphsContainer}>
                <p className={styles.footerContactInfoEmail}>
                  e-mail:{' '}
                  <Link
                    className={`${styles.footerContactInfoEmail}, ${styles.footerContactInfoEmailLink}`}
                    to="mailto:tgliamz.muzei@yandex.ru"
                    openInNewTab
                  >
                    tgliamz.muzei@yandex.ru
                  </Link>
                </p>
              </div>
            </div>
            <div className={styles.footerSignUpContainer}>
              <form className={styles.orderCallForm} onSubmit={onOrderCall}>
                <SignUp
                  inputType="tel"
                  inputName="orderCallTelephone"
                  inputPlaceholder="+7 (___) ___ __ __"
                  inputMinMaxLength={[12, 12]}
                  buttonText="Заказать звонок"
                >
                  Нужна консультация?
                </SignUp>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.allRightsReservedContainer}>
        <p className={styles.allRightsReserved}>© Все права защищены 2024</p>
      </div>

      <SignUpModal
        isOpen={isSignUpModalOpen}
        toggleModal={onExcursionOrder}
        telInputValue={orderExcursionInputRef.current?.value ?? ''}
        isMobile={isMobile}
      />
    </>
  );
};

export default HomePage;
