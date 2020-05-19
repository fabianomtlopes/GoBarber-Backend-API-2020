import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(date: IParseMailTemplateDTO): Promise<string>;
}
