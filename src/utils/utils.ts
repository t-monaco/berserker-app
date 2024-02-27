import customDayJS from '@/src/lib/dayjs';
import { Block } from '@/xata/xata';
import { Dayjs } from 'dayjs';
import { CalendarDate } from '../types/types';

const categoryOrder = [
  'MOBILITY',
  'STRUCTURE',
  'TECHNIQUE',
  'STRENGTH',
  'METCON',
];

// TODO: change this in the GET? (findMany)
export const sortBlockByCategory = (blocks: Block[]) => {
  return blocks.sort((a, b) => {
    const categoryAIndex = categoryOrder.indexOf(
      a.category!.name.toUpperCase(),
    );
    const categoryBIndex = categoryOrder.indexOf(
      b.category!.name.toUpperCase(),
    );

    return categoryAIndex - categoryBIndex;
  });
};

/**
 *
 * @param arr array of objects to convert.
 * @param keys desired keys of object to convert to upper case.
 * @returns A new array with the value of the desired keys in upper case.
 */
export const covertToUpperCaseArrObj = <T extends { [key: string]: any }>(
  arr: T[],
  keys: (keyof T)[],
): T[] =>
  arr.map((item) =>
    Object.keys(item).reduce(
      (acc, key) => ({
        ...acc,
        [key]:
          keys.includes(key) && typeof item[key] === 'string'
            ? (item[key] as string).toUpperCase()
            : item[key],
      }),
      {} as T,
    ),
  );

/**
 * It split the given array (blocks) in two gropus, the new ones and the ones that already exist in the DB. Basically, by distinguishing if it has an `id` property.or not.
 * @param blocks array of objects to split
 * @returns One object with tow arrays. `newBlocks` = blocks to create and `existingBlocks` blocks that already exist.
 */
export const splitBlocks = <T extends { [key: string]: any }>(blocks: T[]) => {
  const newBlocks: T[] = [];
  const existingBlocks: T[] = [];
  for (const b of blocks) {
    if (b?.id) {
      existingBlocks.push(b);
    } else {
      newBlocks.push(b);
    }
  }

  return { newBlocks, existingBlocks };
};

export const getDatesIdentifierArr = (date?: number) => {
  const referenceDay = date ? customDayJS.unix(date) : customDayJS().local();

  const startOfWeek = referenceDay.startOf('week');
  const endOfWeek = referenceDay.endOf('week');

  let datesIdentifier = [];
  let day = startOfWeek;
  while (day <= endOfWeek) {
    datesIdentifier.push(`${day.year()}-${day.dayOfYear()}`);
    day = day.clone().add(1, 'd');
  }

  return datesIdentifier;
};

export const getWorkoutDateIdentifier = (dateUnix: number) => {
  return `${customDayJS.unix(dateUnix).year()}-${customDayJS
    .unix(dateUnix)
    .dayOfYear()}`;
};

/**
 * Disables scroll, usually when a Modal is open.
 */
export const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

/**
 * Enables scroll
 */
export const enableScroll = () => {
  document.body.style.overflow = 'unset';
};

// TODO: better way to achieve this. What happend if the text is too long,
// but it has only two (\n)...?
/**
 * Returts `true` if the text exceed the number of lines passed. Otherwise, returns false.
 * @param text text to check.
 * @param linesLimit limit of lines
 * @returns `bolean`
 */
export const contentOverflow = (text: string, linesLimit: number) =>
  text.split('\n').length > linesLimit;

// TODO fixed blocks type
export const groupBlocksByDateAndProgram = (blocks: any[]) =>
  blocks.reduce((acc: Record<string, Record<string, Block[]>>, block) => {
    const { date, program } = block.workout || {};
    const dateKey = date || '';
    const programKey = program?.id || '';

    // Initialize nested objects if they don't exist
    acc[dateKey] = acc[dateKey] || {};
    acc[dateKey][programKey] = acc[dateKey][programKey] || [];

    acc[dateKey][programKey].push({
      id: block.id,
      title: block.title,
      description: block.description,
      duration: block.duration,
      category: block.category,
    });

    return acc;
  }, {});

export const buildCalendarWeekDays = (refDay: Dayjs) => {
  const startOfWeek = refDay.startOf('week');
  const endOfWeek = refDay.endOf('week');

  let day = startOfWeek;

  let calendarDays: CalendarDate[] = [];

  while (day <= endOfWeek) {
    calendarDays.push({
      dateName: day.format('ddd'),
      dateNum: day.format('DD'),
      dateOfYear: day.dayOfYear(),
      dateId: `${day.year()}-${day.dayOfYear()}`,
    });
    day = day.clone().add(1, 'd');
  }

  return calendarDays;
};
