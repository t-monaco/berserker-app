import { z } from 'zod';

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

export const InviteMemberFormSchema = z.object({
  email: z.string().email(),
});

export type InviteMemberFormSchemaType = z.infer<typeof InviteMemberFormSchema>;

export type SelectOption = { label: string; value: string };

export type CalendarDate = {
  dateNum: string;
  dateName: string;
  dateOfYear: number;
  dateId: string;
};
