export type BlockForm = {
  id?: string;
  title: string;
  duration: string;
  description: string;
  category: string;
};

export type CreateWorkoutForm = {
  date: number;
  program: string;
  blocks: BlockForm[];
};

export type SelectOption = { label: string; value: string };

export type CalendarDate = {
  dateNum: string;
  dateName: string;
  dateOfYear: number;
  dateId: string;
};