import { TimePeriod } from '@entities/TimePeriod/model/types';

export const timePeriods: TimePeriod[] = [
  {
    startYear: 1987,
    endYear: 1991,
    category: "Кино",
    events: [
      { year: 1987, title: "Хищник / Predator", description: "Фильм режиссёра Джона Мактирнана." },
      { year: 1988, title: "Кто подставил кролика Роджера / Who Framed Roger Rabbit", description: "Фильм режиссёра Роберта Земекиса." },
      { year: 1989, title: "Назад в будущее 2 / Back To The Future 2", description: "Фильм режиссёра Роберта Земекиса." },
    ],
  },
  {
    startYear: 1992,
    endYear: 1997,
    category: "Литература",
    events: [
      { year: 1992, title: "Нобелевская премия по литературе — Дерек Вулкотт", description: "За блестящий образец карибского эпоса в 64 разделах." },
      { year: 1994, title: "Бессонница — роман Стивена Кинга", description: "" },
      { year: 1995, title: "Нобелевская премия по литературе — Шеймус Хинни", description: "" },
      { year: 1997, title: "Гарри Поттер", description: "Роулинг." },
    ],
  },
];