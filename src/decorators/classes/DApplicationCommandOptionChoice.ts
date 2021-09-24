/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ApplicationCommandOptionChoice } from "discord.js";
import { Decorator } from "./Decorator";

/**
 * @category Decorator
 */
export class DApplicationCommandOptionChoice extends Decorator {
  private _name: string;
  private _value: string | number;

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }

  protected constructor(name: string, value: string | number) {
    super();
    this._name = name;
    this._value = value;
  }

  static create(name: string, value: string | number) {
    return new DApplicationCommandOptionChoice(name, value);
  }

  toJSON(): ApplicationCommandOptionChoice {
    return {
      name: this.name,
      value: this.value,
    };
  }
}
