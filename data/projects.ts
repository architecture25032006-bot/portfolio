export interface Project {
  id: number
  slug: string
  title: string
  category: string
  year: string
  description: string
  longDescription: string
  tags: string[]
  coverImage: string
  coverOrientation: 'landscape' | 'portrait'
  galleryImages?: string[]          // дополнительные фото для галереи
  images: string[]
  featured: boolean
  link?: string
  stats?: { value: string; label: string }[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'armenian-politics-reels',
    title: 'Армянский политический канал',
    category: 'Reels-сопровождение',
    year: '2025',
    description:
      'Рилс-сопровождение в течение 2-х месяцев на нулевом аккаунте в сфере политики на армянском языке. Кроме 200 подписчиков, пришло более 300 человек в Telegram.',
    longDescription: `Рилс-сопровождение в течение 2-х месяцев на нулевом аккаунте, в сфере политики, на Армянском Языке.

Результаты:
+200 подписчиков в Instagram
+300 человек в Telegram
222,715 просмотров за 2 месяца на узкой нише.

Обсудить сотрудничество: @ir6eas3`,
    tags: ['Reels', 'Instagram', 'Политика', 'Контент-стратегия'],
    coverImage: '/images/armenia-overview.jpg',
    coverOrientation: 'portrait',
    galleryImages: [
      '/images/photo_2026-04-22_20-12-58.jpg',
      '/images/armenia-subscribers.jpg',
      '/images/armenia-views.jpg',
      '/images/armenia-views1.jpg',
      '/images/armenia-views2.jpg',
    ],
    images: ['/images/photo_2026-04-22_20-12-58.jpg'],
    featured: true,
    stats: [
      { value: '222 715', label: 'просмотров' },
      { value: '+200', label: 'подписчиков' },
      { value: '+300', label: 'в Telegram' },
    ],
  },
  {
    id: 3,
    slug: 'malysh-personal-growth',
    title: 'Личный аккаунт — рост с нуля за 14 дней',
    category: 'Reels-продюсинг',
    year: '2026',
    description:
      'Личный аккаунт. Только Reels, органика — без рекламы и накрутки. 121 650 просмотров, 92 769 охваченных аккаунтов (+1 656%), 100+ подписчиков за 10 дней. Рекордный Reels: 47 946 просмотров, 1 100 лайков.',
    longDescription: `Личный аккаунт. Только Reels, органика — без рекламы и накрутки.

Результаты за 14 дней:
— 121 650 просмотров
— 92 769 охваченных аккаунтов (+1 656%)
— 98,1% — новая аудитория (холодный охват)
— 100+ новых подписчиков за 10 дней

Рекордный Reels (одно видео):
— 47 946 просмотров / 34 942 охват
— 1 100 лайков / 102 сохранения / 87 отправок
— Удержание 30 сек / доля пропусков 18,4%
— 45 подписок с одного видео`,
    tags: ['Reels', 'Instagram', 'Органика', 'Личный бренд', 'Без рекламы'],
    coverImage: '',
    coverOrientation: 'landscape',
    galleryImages: [
      '/images/case-personal-views.jpg',
      '/images/case-personal-reel.jpg',
    ],
    images: ['/images/case-personal-views.jpg'],
    featured: true,
    stats: [
      { value: '121 650', label: 'просмотров' },
      { value: '92 769', label: 'охваченных' },
      { value: '+1 656%', label: 'рост охвата' },
    ],
  },
  {
    id: 2,
    slug: 'expert-blog',
    title: 'Монетизация своего блога',
    category: 'YouTube / Telegram',
    year: '2024',
    description:
      'Выстроил для себя систему монетизации собственного блога: связка YouTube → Telegram. Без команды, без бюджета на рекламу — только стратегия и контент.',
    longDescription: `Сделал это сам для себя — выстроил систему монетизации личного блога: связка YouTube → Telegram.

Достижения:
— Заработал более $3000 со своего блога на аудиторию 250 человек
— Конверсия из YouTube в Telegram: 4–5% (при среднем показателе рынка 1–2%)
— Полностью органический трафик без вложений в рекламу`,
    tags: ['YouTube', 'Telegram', 'Монетизация', 'Воронка продаж'],
    coverImage: '/images/photo_2026-04-28_13-31-24.jpg',
    coverOrientation: 'landscape',
    link: 'https://youtu.be/9V1Z9FHTcJ4?si=fKlQIK5yxs7Ds8_A',
    images: ['/images/photo_2026-04-28_13-31-24.jpg'],
    featured: true,
    stats: [
      { value: '$3 000+', label: 'заработано' },
      { value: '4-5%', label: 'конверсия YT → TG' },
      { value: '250', label: 'человек в аудитории' },
    ],
  },
]
