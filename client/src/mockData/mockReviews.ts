import type { Review } from '../types';

import { reviewAuthor1, avatarPlaceholder } from '../assets/reviewAuthorsPhotos';

export const reviews: Review[] = [
  {
    id: 1,
    author: 'Юлия Воробьева',
    authorJobTitle: 'Директор компании “Воробьева и ко”',
    authorImgSrc: reviewAuthor1,
    reviewText: `Я обеспечу представление Ваших интересов в судах общей юрисдикции,
            арбитраже, третейском суде, приму участие в переговорах, окажу
            помощь на стадии досудебного урегулирования споров.`,
  },
  {
    id: 2,
    author: 'Алексей Иванов',
    authorJobTitle: 'Юрист компании “Иванов и партнеры”',
    authorImgSrc: avatarPlaceholder,
    reviewText: `Отличный профессионал. Помог с оформлением документов и выиграл дело в суде.`,
  },
  {
    id: 3,
    author: 'Мария Смирнова',
    authorJobTitle: 'Предприниматель',
    authorImgSrc: avatarPlaceholder,
    reviewText: `Всегда можно положиться на профессионализм и точность. Спасибо!`,
  },
];
