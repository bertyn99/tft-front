import { ModificationNote } from "./common";

export interface Ability {
  desc: string;
  icon: string;
  name: string;
  variables: [{ name: string; value: number[] }];
}

export interface Statistic {
  armor: number;
  attackSpeed: number;
  critChance: number;
  critMultiplier: number;
  damage: number;
  hp: number;
  initialMana: number;
  magicResist: number;
  mana: number;
  range: number;
}

export interface Champion {
  _id: string;
  name: string;
  icon: string;
  cost: number;
  ability: Ability;
  stats: Statistic;
  traits: string[];
  modification_notes: ModificationNote[];
}
