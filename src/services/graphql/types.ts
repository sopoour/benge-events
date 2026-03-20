export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetCursorCollection = {
  __typename?: 'AssetCursorCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CursorPages = {
  __typename?: 'CursorPages';
  next?: Maybe<Scalars['String']['output']>;
  prev?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryCursorCollection = {
  __typename?: 'EntryCursorCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type Events = Entry & _Node & {
  __typename?: 'Events';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  datum?: Maybe<Scalars['DateTime']['output']>;
  djBeschreibung?: Maybe<Scalars['String']['output']>;
  djTitel?: Maybe<Scalars['String']['output']>;
  djZeit?: Maybe<Scalars['String']['output']>;
  konzertBeschreibung?: Maybe<Scalars['String']['output']>;
  konzertTitel?: Maybe<Scalars['String']['output']>;
  konzertZeit?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<EventsLinkingCollections>;
  optionaleNotiz?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  ticketLink?: Maybe<Scalars['String']['output']>;
  venue?: Maybe<Scalars['String']['output']>;
  venueAddress?: Maybe<Scalars['String']['output']>;
  venueLink?: Maybe<Scalars['String']['output']>;
  venueMapLink?: Maybe<Scalars['String']['output']>;
  workshopBeschreibung?: Maybe<Scalars['String']['output']>;
  workshopTitel?: Maybe<Scalars['String']['output']>;
  workshopZeit?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsDatumArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsDjBeschreibungArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsDjTitelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsDjZeitArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsKonzertBeschreibungArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsKonzertTitelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsKonzertZeitArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsOptionaleNotizArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsTicketLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsVenueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsVenueAddressArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsVenueLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsVenueMapLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsWorkshopBeschreibungArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsWorkshopTitelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/events) */
export type EventsWorkshopZeitArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventsCollection = {
  __typename?: 'EventsCollection';
  items: Array<Maybe<Events>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EventsCursorCollection = {
  __typename?: 'EventsCursorCollection';
  items: Array<Maybe<Events>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type EventsFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  datum?: InputMaybe<Scalars['DateTime']['input']>;
  datum_exists?: InputMaybe<Scalars['Boolean']['input']>;
  datum_gt?: InputMaybe<Scalars['DateTime']['input']>;
  datum_gte?: InputMaybe<Scalars['DateTime']['input']>;
  datum_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  datum_lt?: InputMaybe<Scalars['DateTime']['input']>;
  datum_lte?: InputMaybe<Scalars['DateTime']['input']>;
  datum_not?: InputMaybe<Scalars['DateTime']['input']>;
  datum_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  djBeschreibung?: InputMaybe<Scalars['String']['input']>;
  djBeschreibung_contains?: InputMaybe<Scalars['String']['input']>;
  djBeschreibung_exists?: InputMaybe<Scalars['Boolean']['input']>;
  djBeschreibung_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  djBeschreibung_not?: InputMaybe<Scalars['String']['input']>;
  djBeschreibung_not_contains?: InputMaybe<Scalars['String']['input']>;
  djBeschreibung_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  djTitel?: InputMaybe<Scalars['String']['input']>;
  djTitel_contains?: InputMaybe<Scalars['String']['input']>;
  djTitel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  djTitel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  djTitel_not?: InputMaybe<Scalars['String']['input']>;
  djTitel_not_contains?: InputMaybe<Scalars['String']['input']>;
  djTitel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  djZeit?: InputMaybe<Scalars['String']['input']>;
  djZeit_contains?: InputMaybe<Scalars['String']['input']>;
  djZeit_exists?: InputMaybe<Scalars['Boolean']['input']>;
  djZeit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  djZeit_not?: InputMaybe<Scalars['String']['input']>;
  djZeit_not_contains?: InputMaybe<Scalars['String']['input']>;
  djZeit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  konzertBeschreibung?: InputMaybe<Scalars['String']['input']>;
  konzertBeschreibung_contains?: InputMaybe<Scalars['String']['input']>;
  konzertBeschreibung_exists?: InputMaybe<Scalars['Boolean']['input']>;
  konzertBeschreibung_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  konzertBeschreibung_not?: InputMaybe<Scalars['String']['input']>;
  konzertBeschreibung_not_contains?: InputMaybe<Scalars['String']['input']>;
  konzertBeschreibung_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  konzertTitel?: InputMaybe<Scalars['String']['input']>;
  konzertTitel_contains?: InputMaybe<Scalars['String']['input']>;
  konzertTitel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  konzertTitel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  konzertTitel_not?: InputMaybe<Scalars['String']['input']>;
  konzertTitel_not_contains?: InputMaybe<Scalars['String']['input']>;
  konzertTitel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  konzertZeit?: InputMaybe<Scalars['String']['input']>;
  konzertZeit_contains?: InputMaybe<Scalars['String']['input']>;
  konzertZeit_exists?: InputMaybe<Scalars['Boolean']['input']>;
  konzertZeit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  konzertZeit_not?: InputMaybe<Scalars['String']['input']>;
  konzertZeit_not_contains?: InputMaybe<Scalars['String']['input']>;
  konzertZeit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  optionaleNotiz?: InputMaybe<Scalars['String']['input']>;
  optionaleNotiz_contains?: InputMaybe<Scalars['String']['input']>;
  optionaleNotiz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  optionaleNotiz_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  optionaleNotiz_not?: InputMaybe<Scalars['String']['input']>;
  optionaleNotiz_not_contains?: InputMaybe<Scalars['String']['input']>;
  optionaleNotiz_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  ticketLink?: InputMaybe<Scalars['String']['input']>;
  ticketLink_contains?: InputMaybe<Scalars['String']['input']>;
  ticketLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ticketLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ticketLink_not?: InputMaybe<Scalars['String']['input']>;
  ticketLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  ticketLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venue?: InputMaybe<Scalars['String']['input']>;
  venueAddress?: InputMaybe<Scalars['String']['input']>;
  venueAddress_contains?: InputMaybe<Scalars['String']['input']>;
  venueAddress_exists?: InputMaybe<Scalars['Boolean']['input']>;
  venueAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venueAddress_not?: InputMaybe<Scalars['String']['input']>;
  venueAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  venueAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venueLink?: InputMaybe<Scalars['String']['input']>;
  venueLink_contains?: InputMaybe<Scalars['String']['input']>;
  venueLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  venueLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venueLink_not?: InputMaybe<Scalars['String']['input']>;
  venueLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  venueLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venueMapLink?: InputMaybe<Scalars['String']['input']>;
  venueMapLink_contains?: InputMaybe<Scalars['String']['input']>;
  venueMapLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  venueMapLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venueMapLink_not?: InputMaybe<Scalars['String']['input']>;
  venueMapLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  venueMapLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venue_contains?: InputMaybe<Scalars['String']['input']>;
  venue_exists?: InputMaybe<Scalars['Boolean']['input']>;
  venue_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venue_not?: InputMaybe<Scalars['String']['input']>;
  venue_not_contains?: InputMaybe<Scalars['String']['input']>;
  venue_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  workshopBeschreibung?: InputMaybe<Scalars['String']['input']>;
  workshopBeschreibung_contains?: InputMaybe<Scalars['String']['input']>;
  workshopBeschreibung_exists?: InputMaybe<Scalars['Boolean']['input']>;
  workshopBeschreibung_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  workshopBeschreibung_not?: InputMaybe<Scalars['String']['input']>;
  workshopBeschreibung_not_contains?: InputMaybe<Scalars['String']['input']>;
  workshopBeschreibung_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  workshopTitel?: InputMaybe<Scalars['String']['input']>;
  workshopTitel_contains?: InputMaybe<Scalars['String']['input']>;
  workshopTitel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  workshopTitel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  workshopTitel_not?: InputMaybe<Scalars['String']['input']>;
  workshopTitel_not_contains?: InputMaybe<Scalars['String']['input']>;
  workshopTitel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  workshopZeit?: InputMaybe<Scalars['String']['input']>;
  workshopZeit_contains?: InputMaybe<Scalars['String']['input']>;
  workshopZeit_exists?: InputMaybe<Scalars['Boolean']['input']>;
  workshopZeit_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  workshopZeit_not?: InputMaybe<Scalars['String']['input']>;
  workshopZeit_not_contains?: InputMaybe<Scalars['String']['input']>;
  workshopZeit_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EventsLinkingCollections = {
  __typename?: 'EventsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type EventsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type EventsLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum EventsOrder {
  DatumAsc = 'datum_ASC',
  DatumDesc = 'datum_DESC',
  DjTitelAsc = 'djTitel_ASC',
  DjTitelDesc = 'djTitel_DESC',
  DjZeitAsc = 'djZeit_ASC',
  DjZeitDesc = 'djZeit_DESC',
  KonzertTitelAsc = 'konzertTitel_ASC',
  KonzertTitelDesc = 'konzertTitel_DESC',
  KonzertZeitAsc = 'konzertZeit_ASC',
  KonzertZeitDesc = 'konzertZeit_DESC',
  OptionaleNotizAsc = 'optionaleNotiz_ASC',
  OptionaleNotizDesc = 'optionaleNotiz_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TicketLinkAsc = 'ticketLink_ASC',
  TicketLinkDesc = 'ticketLink_DESC',
  VenueAddressAsc = 'venueAddress_ASC',
  VenueAddressDesc = 'venueAddress_DESC',
  VenueLinkAsc = 'venueLink_ASC',
  VenueLinkDesc = 'venueLink_DESC',
  VenueMapLinkAsc = 'venueMapLink_ASC',
  VenueMapLinkDesc = 'venueMapLink_DESC',
  VenueAsc = 'venue_ASC',
  VenueDesc = 'venue_DESC',
  WorkshopTitelAsc = 'workshopTitel_ASC',
  WorkshopTitelDesc = 'workshopTitel_DESC',
  WorkshopZeitAsc = 'workshopZeit_ASC',
  WorkshopZeitDesc = 'workshopZeit_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContent = Entry & _Node & {
  __typename?: 'GeneralContent';
  _id: Scalars['ID']['output'];
  aboutHeadline?: Maybe<Scalars['String']['output']>;
  aboutText?: Maybe<Scalars['String']['output']>;
  awarenessDescription?: Maybe<Scalars['String']['output']>;
  awarenessHeadline?: Maybe<Scalars['String']['output']>;
  bewerbungDescription?: Maybe<Scalars['String']['output']>;
  bewerbungHeadline?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  eventsDescription?: Maybe<Scalars['String']['output']>;
  eventsHeadline?: Maybe<Scalars['String']['output']>;
  feedbackDescription?: Maybe<Scalars['String']['output']>;
  feedbackHeadline?: Maybe<Scalars['String']['output']>;
  homepageSubtitle?: Maybe<Scalars['String']['output']>;
  lexikonDescription?: Maybe<Scalars['String']['output']>;
  lexikonHeadline?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<GeneralContentLinkingCollections>;
  sys: Sys;
  version?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentAboutHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentAboutTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentAwarenessDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentAwarenessHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentBewerbungDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentBewerbungHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentEventsDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentEventsHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentFeedbackDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentFeedbackHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentHomepageSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentLexikonDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentLexikonHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/generalContent) */
export type GeneralContentVersionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GeneralContentCollection = {
  __typename?: 'GeneralContentCollection';
  items: Array<Maybe<GeneralContent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type GeneralContentCursorCollection = {
  __typename?: 'GeneralContentCursorCollection';
  items: Array<Maybe<GeneralContent>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type GeneralContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneralContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneralContentFilter>>>;
  aboutHeadline?: InputMaybe<Scalars['String']['input']>;
  aboutHeadline_contains?: InputMaybe<Scalars['String']['input']>;
  aboutHeadline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  aboutHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aboutHeadline_not?: InputMaybe<Scalars['String']['input']>;
  aboutHeadline_not_contains?: InputMaybe<Scalars['String']['input']>;
  aboutHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aboutText?: InputMaybe<Scalars['String']['input']>;
  aboutText_contains?: InputMaybe<Scalars['String']['input']>;
  aboutText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  aboutText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aboutText_not?: InputMaybe<Scalars['String']['input']>;
  aboutText_not_contains?: InputMaybe<Scalars['String']['input']>;
  aboutText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  awarenessDescription?: InputMaybe<Scalars['String']['input']>;
  awarenessDescription_contains?: InputMaybe<Scalars['String']['input']>;
  awarenessDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  awarenessDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  awarenessDescription_not?: InputMaybe<Scalars['String']['input']>;
  awarenessDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  awarenessDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  awarenessHeadline?: InputMaybe<Scalars['String']['input']>;
  awarenessHeadline_contains?: InputMaybe<Scalars['String']['input']>;
  awarenessHeadline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  awarenessHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  awarenessHeadline_not?: InputMaybe<Scalars['String']['input']>;
  awarenessHeadline_not_contains?: InputMaybe<Scalars['String']['input']>;
  awarenessHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bewerbungDescription?: InputMaybe<Scalars['String']['input']>;
  bewerbungDescription_contains?: InputMaybe<Scalars['String']['input']>;
  bewerbungDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bewerbungDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bewerbungDescription_not?: InputMaybe<Scalars['String']['input']>;
  bewerbungDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  bewerbungDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bewerbungHeadline?: InputMaybe<Scalars['String']['input']>;
  bewerbungHeadline_contains?: InputMaybe<Scalars['String']['input']>;
  bewerbungHeadline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bewerbungHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bewerbungHeadline_not?: InputMaybe<Scalars['String']['input']>;
  bewerbungHeadline_not_contains?: InputMaybe<Scalars['String']['input']>;
  bewerbungHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  eventsDescription?: InputMaybe<Scalars['String']['input']>;
  eventsDescription_contains?: InputMaybe<Scalars['String']['input']>;
  eventsDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eventsDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventsDescription_not?: InputMaybe<Scalars['String']['input']>;
  eventsDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventsDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventsHeadline?: InputMaybe<Scalars['String']['input']>;
  eventsHeadline_contains?: InputMaybe<Scalars['String']['input']>;
  eventsHeadline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  eventsHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  eventsHeadline_not?: InputMaybe<Scalars['String']['input']>;
  eventsHeadline_not_contains?: InputMaybe<Scalars['String']['input']>;
  eventsHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  feedbackDescription?: InputMaybe<Scalars['String']['input']>;
  feedbackDescription_contains?: InputMaybe<Scalars['String']['input']>;
  feedbackDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  feedbackDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  feedbackDescription_not?: InputMaybe<Scalars['String']['input']>;
  feedbackDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  feedbackDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  feedbackHeadline?: InputMaybe<Scalars['String']['input']>;
  feedbackHeadline_contains?: InputMaybe<Scalars['String']['input']>;
  feedbackHeadline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  feedbackHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  feedbackHeadline_not?: InputMaybe<Scalars['String']['input']>;
  feedbackHeadline_not_contains?: InputMaybe<Scalars['String']['input']>;
  feedbackHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  homepageSubtitle?: InputMaybe<Scalars['String']['input']>;
  homepageSubtitle_contains?: InputMaybe<Scalars['String']['input']>;
  homepageSubtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  homepageSubtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  homepageSubtitle_not?: InputMaybe<Scalars['String']['input']>;
  homepageSubtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  homepageSubtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lexikonDescription?: InputMaybe<Scalars['String']['input']>;
  lexikonDescription_contains?: InputMaybe<Scalars['String']['input']>;
  lexikonDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lexikonDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lexikonDescription_not?: InputMaybe<Scalars['String']['input']>;
  lexikonDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  lexikonDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lexikonHeadline?: InputMaybe<Scalars['String']['input']>;
  lexikonHeadline_contains?: InputMaybe<Scalars['String']['input']>;
  lexikonHeadline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lexikonHeadline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lexikonHeadline_not?: InputMaybe<Scalars['String']['input']>;
  lexikonHeadline_not_contains?: InputMaybe<Scalars['String']['input']>;
  lexikonHeadline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_exists?: InputMaybe<Scalars['Boolean']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GeneralContentLinkingCollections = {
  __typename?: 'GeneralContentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type GeneralContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type GeneralContentLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum GeneralContentOrder {
  AboutHeadlineAsc = 'aboutHeadline_ASC',
  AboutHeadlineDesc = 'aboutHeadline_DESC',
  AwarenessHeadlineAsc = 'awarenessHeadline_ASC',
  AwarenessHeadlineDesc = 'awarenessHeadline_DESC',
  BewerbungHeadlineAsc = 'bewerbungHeadline_ASC',
  BewerbungHeadlineDesc = 'bewerbungHeadline_DESC',
  EventsHeadlineAsc = 'eventsHeadline_ASC',
  EventsHeadlineDesc = 'eventsHeadline_DESC',
  FeedbackHeadlineAsc = 'feedbackHeadline_ASC',
  FeedbackHeadlineDesc = 'feedbackHeadline_DESC',
  HomepageSubtitleAsc = 'homepageSubtitle_ASC',
  HomepageSubtitleDesc = 'homepageSubtitle_DESC',
  LexikonHeadlineAsc = 'lexikonHeadline_ASC',
  LexikonHeadlineDesc = 'lexikonHeadline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VersionAsc = 'version_ASC',
  VersionDesc = 'version_DESC'
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/legalPages) */
export type LegalPages = Entry & _Node & {
  __typename?: 'LegalPages';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  datenschutz?: Maybe<Scalars['String']['output']>;
  impressum?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<LegalPagesLinkingCollections>;
  sys: Sys;
  version?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/legalPages) */
export type LegalPagesDatenschutzArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/legalPages) */
export type LegalPagesImpressumArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/legalPages) */
export type LegalPagesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/legalPages) */
export type LegalPagesVersionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LegalPagesCollection = {
  __typename?: 'LegalPagesCollection';
  items: Array<Maybe<LegalPages>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LegalPagesCursorCollection = {
  __typename?: 'LegalPagesCursorCollection';
  items: Array<Maybe<LegalPages>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type LegalPagesFilter = {
  AND?: InputMaybe<Array<InputMaybe<LegalPagesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LegalPagesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  datenschutz?: InputMaybe<Scalars['String']['input']>;
  datenschutz_contains?: InputMaybe<Scalars['String']['input']>;
  datenschutz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  datenschutz_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  datenschutz_not?: InputMaybe<Scalars['String']['input']>;
  datenschutz_not_contains?: InputMaybe<Scalars['String']['input']>;
  datenschutz_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  impressum?: InputMaybe<Scalars['String']['input']>;
  impressum_contains?: InputMaybe<Scalars['String']['input']>;
  impressum_exists?: InputMaybe<Scalars['Boolean']['input']>;
  impressum_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  impressum_not?: InputMaybe<Scalars['String']['input']>;
  impressum_not_contains?: InputMaybe<Scalars['String']['input']>;
  impressum_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_exists?: InputMaybe<Scalars['Boolean']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LegalPagesLinkingCollections = {
  __typename?: 'LegalPagesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type LegalPagesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LegalPagesLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum LegalPagesOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VersionAsc = 'version_ASC',
  VersionDesc = 'version_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/lexikon) */
export type Lexikon = Entry & _Node & {
  __typename?: 'Lexikon';
  _id: Scalars['ID']['output'];
  beschreibung?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  kategorie?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<LexikonLinkingCollections>;
  orderNumber?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  titel?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/lexikon) */
export type LexikonBeschreibungArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/lexikon) */
export type LexikonKategorieArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/lexikon) */
export type LexikonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/lexikon) */
export type LexikonOrderNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/f32g7k86nsff/content_types/lexikon) */
export type LexikonTitelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LexikonCollection = {
  __typename?: 'LexikonCollection';
  items: Array<Maybe<Lexikon>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LexikonCursorCollection = {
  __typename?: 'LexikonCursorCollection';
  items: Array<Maybe<Lexikon>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type LexikonFilter = {
  AND?: InputMaybe<Array<InputMaybe<LexikonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LexikonFilter>>>;
  beschreibung?: InputMaybe<Scalars['String']['input']>;
  beschreibung_contains?: InputMaybe<Scalars['String']['input']>;
  beschreibung_exists?: InputMaybe<Scalars['Boolean']['input']>;
  beschreibung_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beschreibung_not?: InputMaybe<Scalars['String']['input']>;
  beschreibung_not_contains?: InputMaybe<Scalars['String']['input']>;
  beschreibung_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  kategorie?: InputMaybe<Scalars['String']['input']>;
  kategorie_contains?: InputMaybe<Scalars['String']['input']>;
  kategorie_exists?: InputMaybe<Scalars['Boolean']['input']>;
  kategorie_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  kategorie_not?: InputMaybe<Scalars['String']['input']>;
  kategorie_not_contains?: InputMaybe<Scalars['String']['input']>;
  kategorie_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  orderNumber?: InputMaybe<Scalars['Int']['input']>;
  orderNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  orderNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  orderNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  orderNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  orderNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  orderNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  orderNumber_not?: InputMaybe<Scalars['Int']['input']>;
  orderNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  titel?: InputMaybe<Scalars['String']['input']>;
  titel_contains?: InputMaybe<Scalars['String']['input']>;
  titel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titel_not?: InputMaybe<Scalars['String']['input']>;
  titel_not_contains?: InputMaybe<Scalars['String']['input']>;
  titel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LexikonLinkingCollections = {
  __typename?: 'LexikonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type LexikonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LexikonLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum LexikonOrder {
  KategorieAsc = 'kategorie_ASC',
  KategorieDesc = 'kategorie_DESC',
  OrderNumberAsc = 'orderNumber_ASC',
  OrderNumberDesc = 'orderNumber_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitelAsc = 'titel_ASC',
  TitelDesc = 'titel_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  assetCursorCollection?: Maybe<AssetCursorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  events?: Maybe<Events>;
  eventsCollection?: Maybe<EventsCollection>;
  eventsCursorCollection?: Maybe<EventsCursorCollection>;
  generalContent?: Maybe<GeneralContent>;
  generalContentCollection?: Maybe<GeneralContentCollection>;
  generalContentCursorCollection?: Maybe<GeneralContentCursorCollection>;
  legalPages?: Maybe<LegalPages>;
  legalPagesCollection?: Maybe<LegalPagesCollection>;
  legalPagesCursorCollection?: Maybe<LegalPagesCursorCollection>;
  lexikon?: Maybe<Lexikon>;
  lexikonCollection?: Maybe<LexikonCollection>;
  lexikonCursorCollection?: Maybe<LexikonCursorCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryAssetCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryEventsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEventsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventsFilter>;
};


export type QueryEventsCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventsOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventsFilter>;
};


export type QueryGeneralContentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGeneralContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GeneralContentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GeneralContentFilter>;
};


export type QueryGeneralContentCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GeneralContentOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<GeneralContentFilter>;
};


export type QueryLegalPagesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLegalPagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LegalPagesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LegalPagesFilter>;
};


export type QueryLegalPagesCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LegalPagesOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LegalPagesFilter>;
};


export type QueryLexikonArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLexikonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LexikonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LexikonFilter>;
};


export type QueryLexikonCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LexikonOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LexikonFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  release_lte?: InputMaybe<Scalars['String']['input']>;
  /** Preview content starting from a given timestamp */
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};
