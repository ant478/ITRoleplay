import Character from '../../Character';
import PassivePerk from './PassivePerk';
import { PerkKey } from '../index';
import expect from '../../helpers/requirementsHelper';
import { attributeKeys } from '../../attributes';

export default class Rethinking1 extends PassivePerk {
  public static id = 46;
  public static key: PerkKey = 'Rethinking1';
  public static complexityLevel = 0;
  public static parent = null;

  public static isCharacterMatchRequirements(character: Character): boolean {
    return expect(character)
      .toHaveMinValueOfAttribute(attributeKeys.wisdom, 12)
      .isMatch();
  }
}
