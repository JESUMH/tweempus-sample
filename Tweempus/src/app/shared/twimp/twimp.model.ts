import { Author } from '../author/author-card/author.model';

export class Twimp {
  private _id: string;
  private _url: string;
  private _author: Author;
  private _content: string;
  private _timestamp: string;
  private _favorite: boolean;

  constructor(id: string, url: string, author: Author, content: string, timestamp: string) {
    this._id = id;
    this._url = url;
    this._author = author;
    this._content = content;
    this._timestamp = timestamp;
    this._favorite = false;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }

  public get author(): Author {
    return this._author;
  }
  public set author(value: Author) {
    this._author = value;
  }

  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }
  public get timestamp(): string {
    return this._timestamp;
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public get favorite(): boolean {
    return this._favorite;
  }
  public set favorite(value: boolean) {
    this._favorite = value;
  }
}
