export class TokenModel {

  private _key: string = '';
  public get key(): string {
    return this._key;
  }
  public set key(value: string) {
    this._key = value;
  }
  private _idAuthor: string = '';
  public get idAuthor(): string {
    return this._idAuthor;
  }
  public set idAuthor(value: string) {
    this._idAuthor = value;
  }

  constructor(key: string, idAuthor: string) {
    this.key = key;
    this.idAuthor = idAuthor;
  }

}
