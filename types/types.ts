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
