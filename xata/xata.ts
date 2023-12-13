// Generated by Xata Codegen 0.28.0. Please do not edit.
import { buildClient } from '@xata.io/client';
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from '@xata.io/client';

const tables = [
  {
    name: 'Category',
    columns: [{ name: 'name', type: 'string', unique: true }],
    revLinks: [{ column: 'category', table: 'Block' }],
  },
  {
    name: 'Program',
    columns: [{ name: 'name', type: 'string' }],
    revLinks: [{ column: 'program', table: 'Workout' }],
  },
  {
    name: 'Workout',
    columns: [
      { name: 'date', type: 'string' },
      { name: 'program', type: 'link', link: { table: 'Program' } },
    ],
    revLinks: [{ column: 'workout', table: 'Block' }],
  },
  {
    name: 'Block',
    columns: [
      { name: 'description', type: 'text' },
      { name: 'duration', type: 'string' },
      { name: 'title', type: 'string' },
      { name: 'category', type: 'link', link: { table: 'Category' } },
      { name: 'workout', type: 'link', link: { table: 'Workout' } },
    ],
  },
  {
    name: 'User',
    columns: [
      { name: 'firstName', type: 'string' },
      { name: 'lastName', type: 'string' },
      { name: 'role', type: 'string' },
      { name: 'clerkId', type: 'string' },
      { name: 'email', type: 'email' },
      { name: 'username', type: 'string' },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Category = InferredTypes['Category'];
export type CategoryRecord = Category & XataRecord;

export type Program = InferredTypes['Program'];
export type ProgramRecord = Program & XataRecord;

export type Workout = InferredTypes['Workout'];
export type WorkoutRecord = Workout & XataRecord;

export type Block = InferredTypes['Block'];
export type BlockRecord = Block & XataRecord;

export type User = InferredTypes['User'];
export type UserRecord = User & XataRecord;

export type DatabaseSchema = {
  Category: CategoryRecord;
  Program: ProgramRecord;
  Workout: WorkoutRecord;
  Block: BlockRecord;
  User: UserRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    'https://Tom-s-M-naco-s-workspace-htprur.eu-central-1.xata.sh/db/berserkerApp',
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};

export const xata = getXataClient();
