import type { ChildProfile, Topic } from '../types/curriculum';
import type { NaplanDomain, NaplanTest, NaplanYear } from '../types/naplan';

export type RootStackParams = {
  Onboarding: undefined;
  Home: { child: ChildProfile };
  WeekPlan: { child: ChildProfile };
  Lesson: { child: ChildProfile; topic: Topic };
  Progress: { child: ChildProfile };
  NaplanHub: { child: ChildProfile };
  NaplanTest: { child: ChildProfile; year: NaplanYear; domain: NaplanDomain; test: NaplanTest };
  Setup: undefined;
};

export type RootScreen = keyof RootStackParams;
