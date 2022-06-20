import { z } from 'zod'
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export type AppConfig = {
  __typename?: 'AppConfig';
  theme: Scalars['String'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Float']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<Scalars['Float']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one todo */
  createTodo?: Maybe<Todo>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Todo documents
   * @deprecated Please use the new paginated many mutation (deleteManyTodosConnection)
   */
  deleteManyTodos: BatchPayload;
  /** Delete many Todo documents, return deleted documents */
  deleteManyTodosConnection: TodoConnection;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one todo from _all_ existing stages. Returns deleted document. */
  deleteTodo?: Maybe<Todo>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Todo documents
   * @deprecated Please use the new paginated many mutation (publishManyTodosConnection)
   */
  publishManyTodos: BatchPayload;
  /** Publish many Todo documents */
  publishManyTodosConnection: TodoConnection;
  /** Publish one todo */
  publishTodo?: Maybe<Todo>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one todo */
  schedulePublishTodo?: Maybe<Todo>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one todo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTodo?: Maybe<Todo>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Todo documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTodosConnection)
   */
  unpublishManyTodos: BatchPayload;
  /** Find many Todo documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTodosConnection: TodoConnection;
  /** Unpublish one todo from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTodo?: Maybe<Todo>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many todos
   * @deprecated Please use the new paginated many mutation (updateManyTodosConnection)
   */
  updateManyTodos: BatchPayload;
  /** Update many Todo documents */
  updateManyTodosConnection: TodoConnection;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one todo */
  updateTodo?: Maybe<Todo>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one todo */
  upsertTodo?: Maybe<Todo>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateTodoArgs = {
  data: TodoCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyTodosArgs = {
  where?: InputMaybe<TodoManyWhereInput>;
};


export type MutationDeleteManyTodosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoManyWhereInput>;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteTodoArgs = {
  where: TodoWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyTodosArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TodoManyWhereInput>;
};


export type MutationPublishManyTodosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TodoManyWhereInput>;
};


export type MutationPublishTodoArgs = {
  to?: Array<Stage>;
  where: TodoWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishTodoArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TodoWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishTodoArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: TodoWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyTodosArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TodoManyWhereInput>;
};


export type MutationUnpublishManyTodosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TodoManyWhereInput>;
};


export type MutationUnpublishTodoArgs = {
  from?: Array<Stage>;
  where: TodoWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyTodosArgs = {
  data: TodoUpdateManyInput;
  where?: InputMaybe<TodoManyWhereInput>;
};


export type MutationUpdateManyTodosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TodoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoManyWhereInput>;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateTodoArgs = {
  data: TodoUpdateInput;
  where: TodoWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertTodoArgs = {
  upsert: TodoUpsertInput;
  where: TodoWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  appConfig?: Maybe<AppConfig>;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single todo */
  todo?: Maybe<Todo>;
  /** Retrieve document version */
  todoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple todos */
  todos: Array<Todo>;
  /** Retrieve multiple todos using the Relay connection interface */
  todosConnection: TodoConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryTodoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TodoWhereUniqueInput;
};


export type QueryTodoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTodosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TodoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TodoWhereInput>;
};


export type QueryTodosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TodoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TodoWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Todo;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Todo = Node & {
  __typename?: 'Todo';
  author?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Todo>;
  /** List of Todo versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  selected: Scalars['Boolean'];
  shortMessage: Scalars['String'];
  /** System stage field */
  stage: Stage;
  touched: Scalars['Boolean'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TodoCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TodoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type TodoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type TodoPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TodoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TodoUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type TodoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TodoWhereUniqueInput;
};

/** A connection to a list of items. */
export type TodoConnection = {
  __typename?: 'TodoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TodoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TodoCreateInput = {
  author?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['Date'];
  description?: InputMaybe<Scalars['String']>;
  shortMessage: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TodoCreateManyInlineInput = {
  /** Connect multiple existing Todo documents */
  connect?: InputMaybe<Array<TodoWhereUniqueInput>>;
  /** Create and connect multiple existing Todo documents */
  create?: InputMaybe<Array<TodoCreateInput>>;
};

export type TodoCreateOneInlineInput = {
  /** Connect one existing Todo document */
  connect?: InputMaybe<TodoWhereUniqueInput>;
  /** Create and connect one Todo document */
  create?: InputMaybe<TodoCreateInput>;
};

/** An edge in a connection. */
export type TodoEdge = {
  __typename?: 'TodoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Todo;
};

/** Identifies documents */
export type TodoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TodoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TodoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TodoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  author_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  author_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  completed_not?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<Scalars['Date']>>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shortMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  shortMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  shortMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  shortMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  shortMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  shortMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  shortMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  shortMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  shortMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  shortMessage_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TodoOrderByInput {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  CompletedAsc = 'completed_ASC',
  CompletedDesc = 'completed_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ShortMessageAsc = 'shortMessage_ASC',
  ShortMessageDesc = 'shortMessage_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TodoUpdateInput = {
  author?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  shortMessage?: InputMaybe<Scalars['String']>;
};

export type TodoUpdateManyInlineInput = {
  /** Connect multiple existing Todo documents */
  connect?: InputMaybe<Array<TodoConnectInput>>;
  /** Create and connect multiple Todo documents */
  create?: InputMaybe<Array<TodoCreateInput>>;
  /** Delete multiple Todo documents */
  delete?: InputMaybe<Array<TodoWhereUniqueInput>>;
  /** Disconnect multiple Todo documents */
  disconnect?: InputMaybe<Array<TodoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Todo documents */
  set?: InputMaybe<Array<TodoWhereUniqueInput>>;
  /** Update multiple Todo documents */
  update?: InputMaybe<Array<TodoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Todo documents */
  upsert?: InputMaybe<Array<TodoUpsertWithNestedWhereUniqueInput>>;
};

export type TodoUpdateManyInput = {
  author?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  shortMessage?: InputMaybe<Scalars['String']>;
};

export type TodoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TodoUpdateManyInput;
  /** Document search */
  where: TodoWhereInput;
};

export type TodoUpdateOneInlineInput = {
  /** Connect existing Todo document */
  connect?: InputMaybe<TodoWhereUniqueInput>;
  /** Create and connect one Todo document */
  create?: InputMaybe<TodoCreateInput>;
  /** Delete currently connected Todo document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Todo document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Todo document */
  update?: InputMaybe<TodoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Todo document */
  upsert?: InputMaybe<TodoUpsertWithNestedWhereUniqueInput>;
};

export type TodoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TodoUpdateInput;
  /** Unique document search */
  where: TodoWhereUniqueInput;
};

export type TodoUpsertInput = {
  /** Create document if it didn't exist */
  create: TodoCreateInput;
  /** Update document if it exists */
  update: TodoUpdateInput;
};

export type TodoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TodoUpsertInput;
  /** Unique document search */
  where: TodoWhereUniqueInput;
};

/** Identifies documents */
export type TodoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TodoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TodoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TodoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  author_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  author_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  completed_not?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<Scalars['Date']>>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shortMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  shortMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  shortMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  shortMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  shortMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  shortMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  shortMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  shortMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  shortMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  shortMessage_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Todo record uniquely */
export type TodoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  selected?: InputMaybe<Scalars['Boolean']>;
  touched?: InputMaybe<Scalars['Boolean']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type AppConfigurationQueryVariables = Exact<{ [key: string]: never; }>;


export type AppConfigurationQuery = { __typename?: 'Query', appConfig?: { __typename?: 'AppConfig', theme: string } | null };

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: string, date: any, description?: string | null, author?: string | null, shortMessage: string, completed?: boolean | null, selected: boolean, touched: boolean }> };

export type CompleteTodoMutationVariables = Exact<{ [key: string]: never; }>;


export type CompleteTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', id: string, completed?: boolean | null, touched: boolean } | null };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['ID'];
  input: TodoUpdateInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', id: string, author?: string | null, completed?: boolean | null, createdAt: any, date: any, shortMessage: string, description?: string | null } | null };


export const AppConfigurationDocument = gql`
    query AppConfiguration {
  appConfig @client {
    theme
  }
}
    `;

/**
 * __useAppConfigurationQuery__
 *
 * To run a query within a React component, call `useAppConfigurationQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppConfigurationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppConfigurationQuery({
 *   variables: {
 *   },
 * });
 */
export function useAppConfigurationQuery(baseOptions?: Apollo.QueryHookOptions<AppConfigurationQuery, AppConfigurationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AppConfigurationQuery, AppConfigurationQueryVariables>(AppConfigurationDocument, options);
      }
export function useAppConfigurationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AppConfigurationQuery, AppConfigurationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AppConfigurationQuery, AppConfigurationQueryVariables>(AppConfigurationDocument, options);
        }
export type AppConfigurationQueryHookResult = ReturnType<typeof useAppConfigurationQuery>;
export type AppConfigurationLazyQueryHookResult = ReturnType<typeof useAppConfigurationLazyQuery>;
export type AppConfigurationQueryResult = Apollo.QueryResult<AppConfigurationQuery, AppConfigurationQueryVariables>;
export const TodosDocument = gql`
    query Todos {
  todos(where: {completed: false}) {
    id
    date
    description
    author
    shortMessage
    completed
    selected @client
    touched @client
  }
}
    `;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
      }
export function useTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;
export const CompleteTodoDocument = gql`
    mutation CompleteTodo {
  updateTodo(data: {completed: true}, where: {touched: true}) {
    id
    completed @client
    touched @client
  }
}
    `;
export type CompleteTodoMutationFn = Apollo.MutationFunction<CompleteTodoMutation, CompleteTodoMutationVariables>;

/**
 * __useCompleteTodoMutation__
 *
 * To run a mutation, you first call `useCompleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeTodoMutation, { data, loading, error }] = useCompleteTodoMutation({
 *   variables: {
 *   },
 * });
 */
export function useCompleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<CompleteTodoMutation, CompleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteTodoMutation, CompleteTodoMutationVariables>(CompleteTodoDocument, options);
      }
export type CompleteTodoMutationHookResult = ReturnType<typeof useCompleteTodoMutation>;
export type CompleteTodoMutationResult = Apollo.MutationResult<CompleteTodoMutation>;
export type CompleteTodoMutationOptions = Apollo.BaseMutationOptions<CompleteTodoMutation, CompleteTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($id: ID!, $input: TodoUpdateInput!) {
  updateTodo(data: $input, where: {id: $id}) {
    id
    author
    completed
    createdAt
    date
    shortMessage
    description
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Node": [
      "Asset",
      "ScheduledOperation",
      "ScheduledRelease",
      "Todo",
      "User"
    ],
    "ScheduledOperationAffectedDocument": [
      "Asset",
      "Todo"
    ]
  }
};
      export default result;
    

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function AssetConnectInputSchema(): z.ZodObject<Properties<AssetConnectInput>> {
  return z.object({
    position: z.lazy(() => ConnectPositionInputSchema().nullish()),
    where: z.lazy(() => AssetWhereUniqueInputSchema())
  })
}

export function AssetCreateInputSchema(): z.ZodObject<Properties<AssetCreateInput>> {
  return z.object({
    createdAt: z.string().nullish(),
    fileName: z.string(),
    handle: z.string(),
    height: z.number().nullish(),
    localizations: z.lazy(() => AssetCreateLocalizationsInputSchema().nullish()),
    mimeType: z.string().nullish(),
    size: z.number().nullish(),
    updatedAt: z.string().nullish(),
    width: z.number().nullish()
  })
}

export function AssetCreateLocalizationDataInputSchema(): z.ZodObject<Properties<AssetCreateLocalizationDataInput>> {
  return z.object({
    createdAt: z.string().nullish(),
    fileName: z.string(),
    handle: z.string(),
    height: z.number().nullish(),
    mimeType: z.string().nullish(),
    size: z.number().nullish(),
    updatedAt: z.string().nullish(),
    width: z.number().nullish()
  })
}

export function AssetCreateLocalizationInputSchema(): z.ZodObject<Properties<AssetCreateLocalizationInput>> {
  return z.object({
    data: z.lazy(() => AssetCreateLocalizationDataInputSchema()),
    locale: LocaleSchema
  })
}

export function AssetCreateLocalizationsInputSchema(): z.ZodObject<Properties<AssetCreateLocalizationsInput>> {
  return z.object({
    create: z.array(z.lazy(() => AssetCreateLocalizationInputSchema())).nullish()
  })
}

export function AssetCreateManyInlineInputSchema(): z.ZodObject<Properties<AssetCreateManyInlineInput>> {
  return z.object({
    connect: z.array(z.lazy(() => AssetWhereUniqueInputSchema())).nullish(),
    create: z.array(z.lazy(() => AssetCreateInputSchema())).nullish()
  })
}

export function AssetCreateOneInlineInputSchema(): z.ZodObject<Properties<AssetCreateOneInlineInput>> {
  return z.object({
    connect: z.lazy(() => AssetWhereUniqueInputSchema().nullish()),
    create: z.lazy(() => AssetCreateInputSchema().nullish())
  })
}

export function AssetManyWhereInputSchema(): z.ZodObject<Properties<AssetManyWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => AssetWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => AssetWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => AssetWhereInputSchema())).nullish(),
    _search: z.string().nullish(),
    createdAt: z.string().nullish(),
    createdAt_gt: z.string().nullish(),
    createdAt_gte: z.string().nullish(),
    createdAt_in: z.array(z.string()).nullish(),
    createdAt_lt: z.string().nullish(),
    createdAt_lte: z.string().nullish(),
    createdAt_not: z.string().nullish(),
    createdAt_not_in: z.array(z.string()).nullish(),
    createdBy: z.lazy(() => UserWhereInputSchema().nullish()),
    id: z.string().nullish(),
    id_contains: z.string().nullish(),
    id_ends_with: z.string().nullish(),
    id_in: z.array(z.string()).nullish(),
    id_not: z.string().nullish(),
    id_not_contains: z.string().nullish(),
    id_not_ends_with: z.string().nullish(),
    id_not_in: z.array(z.string()).nullish(),
    id_not_starts_with: z.string().nullish(),
    id_starts_with: z.string().nullish(),
    publishedAt: z.string().nullish(),
    publishedAt_gt: z.string().nullish(),
    publishedAt_gte: z.string().nullish(),
    publishedAt_in: z.array(z.string()).nullish(),
    publishedAt_lt: z.string().nullish(),
    publishedAt_lte: z.string().nullish(),
    publishedAt_not: z.string().nullish(),
    publishedAt_not_in: z.array(z.string()).nullish(),
    publishedBy: z.lazy(() => UserWhereInputSchema().nullish()),
    scheduledIn_every: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    scheduledIn_none: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    scheduledIn_some: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    updatedAt: z.string().nullish(),
    updatedAt_gt: z.string().nullish(),
    updatedAt_gte: z.string().nullish(),
    updatedAt_in: z.array(z.string()).nullish(),
    updatedAt_lt: z.string().nullish(),
    updatedAt_lte: z.string().nullish(),
    updatedAt_not: z.string().nullish(),
    updatedAt_not_in: z.array(z.string()).nullish(),
    updatedBy: z.lazy(() => UserWhereInputSchema().nullish())
  })
}

export const AssetOrderByInputSchema = z.nativeEnum(AssetOrderByInput);

export function AssetTransformationInputSchema(): z.ZodObject<Properties<AssetTransformationInput>> {
  return z.object({
    document: z.lazy(() => DocumentTransformationInputSchema().nullish()),
    image: z.lazy(() => ImageTransformationInputSchema().nullish()),
    validateOptions: z.boolean().nullish()
  })
}

export function AssetUpdateInputSchema(): z.ZodObject<Properties<AssetUpdateInput>> {
  return z.object({
    fileName: z.string().nullish(),
    handle: z.string().nullish(),
    height: z.number().nullish(),
    localizations: z.lazy(() => AssetUpdateLocalizationsInputSchema().nullish()),
    mimeType: z.string().nullish(),
    size: z.number().nullish(),
    width: z.number().nullish()
  })
}

export function AssetUpdateLocalizationDataInputSchema(): z.ZodObject<Properties<AssetUpdateLocalizationDataInput>> {
  return z.object({
    fileName: z.string().nullish(),
    handle: z.string().nullish(),
    height: z.number().nullish(),
    mimeType: z.string().nullish(),
    size: z.number().nullish(),
    width: z.number().nullish()
  })
}

export function AssetUpdateLocalizationInputSchema(): z.ZodObject<Properties<AssetUpdateLocalizationInput>> {
  return z.object({
    data: z.lazy(() => AssetUpdateLocalizationDataInputSchema()),
    locale: LocaleSchema
  })
}

export function AssetUpdateLocalizationsInputSchema(): z.ZodObject<Properties<AssetUpdateLocalizationsInput>> {
  return z.object({
    create: z.array(z.lazy(() => AssetCreateLocalizationInputSchema())).nullish(),
    delete: z.array(LocaleSchema).nullish(),
    update: z.array(z.lazy(() => AssetUpdateLocalizationInputSchema())).nullish(),
    upsert: z.array(z.lazy(() => AssetUpsertLocalizationInputSchema())).nullish()
  })
}

export function AssetUpdateManyInlineInputSchema(): z.ZodObject<Properties<AssetUpdateManyInlineInput>> {
  return z.object({
    connect: z.array(z.lazy(() => AssetConnectInputSchema())).nullish(),
    create: z.array(z.lazy(() => AssetCreateInputSchema())).nullish(),
    delete: z.array(z.lazy(() => AssetWhereUniqueInputSchema())).nullish(),
    disconnect: z.array(z.lazy(() => AssetWhereUniqueInputSchema())).nullish(),
    set: z.array(z.lazy(() => AssetWhereUniqueInputSchema())).nullish(),
    update: z.array(z.lazy(() => AssetUpdateWithNestedWhereUniqueInputSchema())).nullish(),
    upsert: z.array(z.lazy(() => AssetUpsertWithNestedWhereUniqueInputSchema())).nullish()
  })
}

export function AssetUpdateManyInputSchema(): z.ZodObject<Properties<AssetUpdateManyInput>> {
  return z.object({
    fileName: z.string().nullish(),
    height: z.number().nullish(),
    localizations: z.lazy(() => AssetUpdateManyLocalizationsInputSchema().nullish()),
    mimeType: z.string().nullish(),
    size: z.number().nullish(),
    width: z.number().nullish()
  })
}

export function AssetUpdateManyLocalizationDataInputSchema(): z.ZodObject<Properties<AssetUpdateManyLocalizationDataInput>> {
  return z.object({
    fileName: z.string().nullish(),
    height: z.number().nullish(),
    mimeType: z.string().nullish(),
    size: z.number().nullish(),
    width: z.number().nullish()
  })
}

export function AssetUpdateManyLocalizationInputSchema(): z.ZodObject<Properties<AssetUpdateManyLocalizationInput>> {
  return z.object({
    data: z.lazy(() => AssetUpdateManyLocalizationDataInputSchema()),
    locale: LocaleSchema
  })
}

export function AssetUpdateManyLocalizationsInputSchema(): z.ZodObject<Properties<AssetUpdateManyLocalizationsInput>> {
  return z.object({
    update: z.array(z.lazy(() => AssetUpdateManyLocalizationInputSchema())).nullish()
  })
}

export function AssetUpdateManyWithNestedWhereInputSchema(): z.ZodObject<Properties<AssetUpdateManyWithNestedWhereInput>> {
  return z.object({
    data: z.lazy(() => AssetUpdateManyInputSchema()),
    where: z.lazy(() => AssetWhereInputSchema())
  })
}

export function AssetUpdateOneInlineInputSchema(): z.ZodObject<Properties<AssetUpdateOneInlineInput>> {
  return z.object({
    connect: z.lazy(() => AssetWhereUniqueInputSchema().nullish()),
    create: z.lazy(() => AssetCreateInputSchema().nullish()),
    delete: z.boolean().nullish(),
    disconnect: z.boolean().nullish(),
    update: z.lazy(() => AssetUpdateWithNestedWhereUniqueInputSchema().nullish()),
    upsert: z.lazy(() => AssetUpsertWithNestedWhereUniqueInputSchema().nullish())
  })
}

export function AssetUpdateWithNestedWhereUniqueInputSchema(): z.ZodObject<Properties<AssetUpdateWithNestedWhereUniqueInput>> {
  return z.object({
    data: z.lazy(() => AssetUpdateInputSchema()),
    where: z.lazy(() => AssetWhereUniqueInputSchema())
  })
}

export function AssetUpsertInputSchema(): z.ZodObject<Properties<AssetUpsertInput>> {
  return z.object({
    create: z.lazy(() => AssetCreateInputSchema()),
    update: z.lazy(() => AssetUpdateInputSchema())
  })
}

export function AssetUpsertLocalizationInputSchema(): z.ZodObject<Properties<AssetUpsertLocalizationInput>> {
  return z.object({
    create: z.lazy(() => AssetCreateLocalizationDataInputSchema()),
    locale: LocaleSchema,
    update: z.lazy(() => AssetUpdateLocalizationDataInputSchema())
  })
}

export function AssetUpsertWithNestedWhereUniqueInputSchema(): z.ZodObject<Properties<AssetUpsertWithNestedWhereUniqueInput>> {
  return z.object({
    data: z.lazy(() => AssetUpsertInputSchema()),
    where: z.lazy(() => AssetWhereUniqueInputSchema())
  })
}

export function AssetWhereInputSchema(): z.ZodObject<Properties<AssetWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => AssetWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => AssetWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => AssetWhereInputSchema())).nullish(),
    _search: z.string().nullish(),
    createdAt: z.string().nullish(),
    createdAt_gt: z.string().nullish(),
    createdAt_gte: z.string().nullish(),
    createdAt_in: z.array(z.string()).nullish(),
    createdAt_lt: z.string().nullish(),
    createdAt_lte: z.string().nullish(),
    createdAt_not: z.string().nullish(),
    createdAt_not_in: z.array(z.string()).nullish(),
    createdBy: z.lazy(() => UserWhereInputSchema().nullish()),
    fileName: z.string().nullish(),
    fileName_contains: z.string().nullish(),
    fileName_ends_with: z.string().nullish(),
    fileName_in: z.array(z.string()).nullish(),
    fileName_not: z.string().nullish(),
    fileName_not_contains: z.string().nullish(),
    fileName_not_ends_with: z.string().nullish(),
    fileName_not_in: z.array(z.string()).nullish(),
    fileName_not_starts_with: z.string().nullish(),
    fileName_starts_with: z.string().nullish(),
    handle: z.string().nullish(),
    handle_contains: z.string().nullish(),
    handle_ends_with: z.string().nullish(),
    handle_in: z.array(z.string()).nullish(),
    handle_not: z.string().nullish(),
    handle_not_contains: z.string().nullish(),
    handle_not_ends_with: z.string().nullish(),
    handle_not_in: z.array(z.string()).nullish(),
    handle_not_starts_with: z.string().nullish(),
    handle_starts_with: z.string().nullish(),
    height: z.number().nullish(),
    height_gt: z.number().nullish(),
    height_gte: z.number().nullish(),
    height_in: z.array(z.number()).nullish(),
    height_lt: z.number().nullish(),
    height_lte: z.number().nullish(),
    height_not: z.number().nullish(),
    height_not_in: z.array(z.number()).nullish(),
    id: z.string().nullish(),
    id_contains: z.string().nullish(),
    id_ends_with: z.string().nullish(),
    id_in: z.array(z.string()).nullish(),
    id_not: z.string().nullish(),
    id_not_contains: z.string().nullish(),
    id_not_ends_with: z.string().nullish(),
    id_not_in: z.array(z.string()).nullish(),
    id_not_starts_with: z.string().nullish(),
    id_starts_with: z.string().nullish(),
    mimeType: z.string().nullish(),
    mimeType_contains: z.string().nullish(),
    mimeType_ends_with: z.string().nullish(),
    mimeType_in: z.array(z.string()).nullish(),
    mimeType_not: z.string().nullish(),
    mimeType_not_contains: z.string().nullish(),
    mimeType_not_ends_with: z.string().nullish(),
    mimeType_not_in: z.array(z.string()).nullish(),
    mimeType_not_starts_with: z.string().nullish(),
    mimeType_starts_with: z.string().nullish(),
    publishedAt: z.string().nullish(),
    publishedAt_gt: z.string().nullish(),
    publishedAt_gte: z.string().nullish(),
    publishedAt_in: z.array(z.string()).nullish(),
    publishedAt_lt: z.string().nullish(),
    publishedAt_lte: z.string().nullish(),
    publishedAt_not: z.string().nullish(),
    publishedAt_not_in: z.array(z.string()).nullish(),
    publishedBy: z.lazy(() => UserWhereInputSchema().nullish()),
    scheduledIn_every: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    scheduledIn_none: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    scheduledIn_some: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    size: z.number().nullish(),
    size_gt: z.number().nullish(),
    size_gte: z.number().nullish(),
    size_in: z.array(z.number()).nullish(),
    size_lt: z.number().nullish(),
    size_lte: z.number().nullish(),
    size_not: z.number().nullish(),
    size_not_in: z.array(z.number()).nullish(),
    updatedAt: z.string().nullish(),
    updatedAt_gt: z.string().nullish(),
    updatedAt_gte: z.string().nullish(),
    updatedAt_in: z.array(z.string()).nullish(),
    updatedAt_lt: z.string().nullish(),
    updatedAt_lte: z.string().nullish(),
    updatedAt_not: z.string().nullish(),
    updatedAt_not_in: z.array(z.string()).nullish(),
    updatedBy: z.lazy(() => UserWhereInputSchema().nullish()),
    width: z.number().nullish(),
    width_gt: z.number().nullish(),
    width_gte: z.number().nullish(),
    width_in: z.array(z.number()).nullish(),
    width_lt: z.number().nullish(),
    width_lte: z.number().nullish(),
    width_not: z.number().nullish(),
    width_not_in: z.array(z.number()).nullish()
  })
}

export function AssetWhereUniqueInputSchema(): z.ZodObject<Properties<AssetWhereUniqueInput>> {
  return z.object({
    id: z.string().nullish()
  })
}

export function ColorInputSchema(): z.ZodObject<Properties<ColorInput>> {
  return z.object({
    hex: definedNonNullAnySchema.nullish(),
    rgba: z.lazy(() => RgbaInputSchema().nullish())
  })
}

export function ConnectPositionInputSchema(): z.ZodObject<Properties<ConnectPositionInput>> {
  return z.object({
    after: z.string().nullish(),
    before: z.string().nullish(),
    end: z.boolean().nullish(),
    start: z.boolean().nullish()
  })
}

export const DocumentFileTypesSchema = z.nativeEnum(DocumentFileTypes);

export function DocumentOutputInputSchema(): z.ZodObject<Properties<DocumentOutputInput>> {
  return z.object({
    format: DocumentFileTypesSchema.nullish()
  })
}

export function DocumentTransformationInputSchema(): z.ZodObject<Properties<DocumentTransformationInput>> {
  return z.object({
    output: z.lazy(() => DocumentOutputInputSchema().nullish())
  })
}

export const ImageFitSchema = z.nativeEnum(ImageFit);

export function ImageResizeInputSchema(): z.ZodObject<Properties<ImageResizeInput>> {
  return z.object({
    fit: ImageFitSchema.nullish(),
    height: z.number().nullish(),
    width: z.number().nullish()
  })
}

export function ImageTransformationInputSchema(): z.ZodObject<Properties<ImageTransformationInput>> {
  return z.object({
    resize: z.lazy(() => ImageResizeInputSchema().nullish())
  })
}

export const LocaleSchema = z.nativeEnum(Locale);

export function LocationInputSchema(): z.ZodObject<Properties<LocationInput>> {
  return z.object({
    latitude: z.number(),
    longitude: z.number()
  })
}

export function PublishLocaleInputSchema(): z.ZodObject<Properties<PublishLocaleInput>> {
  return z.object({
    locale: LocaleSchema,
    stages: z.array(StageSchema)
  })
}

export function RgbaInputSchema(): z.ZodObject<Properties<RgbaInput>> {
  return z.object({
    a: definedNonNullAnySchema,
    b: definedNonNullAnySchema,
    g: definedNonNullAnySchema,
    r: definedNonNullAnySchema
  })
}

export function ScheduledOperationConnectInputSchema(): z.ZodObject<Properties<ScheduledOperationConnectInput>> {
  return z.object({
    position: z.lazy(() => ConnectPositionInputSchema().nullish()),
    where: z.lazy(() => ScheduledOperationWhereUniqueInputSchema())
  })
}

export function ScheduledOperationCreateManyInlineInputSchema(): z.ZodObject<Properties<ScheduledOperationCreateManyInlineInput>> {
  return z.object({
    connect: z.array(z.lazy(() => ScheduledOperationWhereUniqueInputSchema())).nullish()
  })
}

export function ScheduledOperationCreateOneInlineInputSchema(): z.ZodObject<Properties<ScheduledOperationCreateOneInlineInput>> {
  return z.object({
    connect: z.lazy(() => ScheduledOperationWhereUniqueInputSchema().nullish())
  })
}

export function ScheduledOperationManyWhereInputSchema(): z.ZodObject<Properties<ScheduledOperationManyWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => ScheduledOperationWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => ScheduledOperationWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => ScheduledOperationWhereInputSchema())).nullish(),
    _search: z.string().nullish(),
    createdAt: z.string().nullish(),
    createdAt_gt: z.string().nullish(),
    createdAt_gte: z.string().nullish(),
    createdAt_in: z.array(z.string()).nullish(),
    createdAt_lt: z.string().nullish(),
    createdAt_lte: z.string().nullish(),
    createdAt_not: z.string().nullish(),
    createdAt_not_in: z.array(z.string()).nullish(),
    createdBy: z.lazy(() => UserWhereInputSchema().nullish()),
    description: z.string().nullish(),
    description_contains: z.string().nullish(),
    description_ends_with: z.string().nullish(),
    description_in: z.array(z.string()).nullish(),
    description_not: z.string().nullish(),
    description_not_contains: z.string().nullish(),
    description_not_ends_with: z.string().nullish(),
    description_not_in: z.array(z.string()).nullish(),
    description_not_starts_with: z.string().nullish(),
    description_starts_with: z.string().nullish(),
    errorMessage: z.string().nullish(),
    errorMessage_contains: z.string().nullish(),
    errorMessage_ends_with: z.string().nullish(),
    errorMessage_in: z.array(z.string()).nullish(),
    errorMessage_not: z.string().nullish(),
    errorMessage_not_contains: z.string().nullish(),
    errorMessage_not_ends_with: z.string().nullish(),
    errorMessage_not_in: z.array(z.string()).nullish(),
    errorMessage_not_starts_with: z.string().nullish(),
    errorMessage_starts_with: z.string().nullish(),
    id: z.string().nullish(),
    id_contains: z.string().nullish(),
    id_ends_with: z.string().nullish(),
    id_in: z.array(z.string()).nullish(),
    id_not: z.string().nullish(),
    id_not_contains: z.string().nullish(),
    id_not_ends_with: z.string().nullish(),
    id_not_in: z.array(z.string()).nullish(),
    id_not_starts_with: z.string().nullish(),
    id_starts_with: z.string().nullish(),
    publishedAt: z.string().nullish(),
    publishedAt_gt: z.string().nullish(),
    publishedAt_gte: z.string().nullish(),
    publishedAt_in: z.array(z.string()).nullish(),
    publishedAt_lt: z.string().nullish(),
    publishedAt_lte: z.string().nullish(),
    publishedAt_not: z.string().nullish(),
    publishedAt_not_in: z.array(z.string()).nullish(),
    publishedBy: z.lazy(() => UserWhereInputSchema().nullish()),
    release: z.lazy(() => ScheduledReleaseWhereInputSchema().nullish()),
    status: ScheduledOperationStatusSchema.nullish(),
    status_in: z.array(ScheduledOperationStatusSchema).nullish(),
    status_not: ScheduledOperationStatusSchema.nullish(),
    status_not_in: z.array(ScheduledOperationStatusSchema).nullish(),
    updatedAt: z.string().nullish(),
    updatedAt_gt: z.string().nullish(),
    updatedAt_gte: z.string().nullish(),
    updatedAt_in: z.array(z.string()).nullish(),
    updatedAt_lt: z.string().nullish(),
    updatedAt_lte: z.string().nullish(),
    updatedAt_not: z.string().nullish(),
    updatedAt_not_in: z.array(z.string()).nullish(),
    updatedBy: z.lazy(() => UserWhereInputSchema().nullish())
  })
}

export const ScheduledOperationOrderByInputSchema = z.nativeEnum(ScheduledOperationOrderByInput);

export const ScheduledOperationStatusSchema = z.nativeEnum(ScheduledOperationStatus);

export function ScheduledOperationUpdateManyInlineInputSchema(): z.ZodObject<Properties<ScheduledOperationUpdateManyInlineInput>> {
  return z.object({
    connect: z.array(z.lazy(() => ScheduledOperationConnectInputSchema())).nullish(),
    disconnect: z.array(z.lazy(() => ScheduledOperationWhereUniqueInputSchema())).nullish(),
    set: z.array(z.lazy(() => ScheduledOperationWhereUniqueInputSchema())).nullish()
  })
}

export function ScheduledOperationUpdateOneInlineInputSchema(): z.ZodObject<Properties<ScheduledOperationUpdateOneInlineInput>> {
  return z.object({
    connect: z.lazy(() => ScheduledOperationWhereUniqueInputSchema().nullish()),
    disconnect: z.boolean().nullish()
  })
}

export function ScheduledOperationWhereInputSchema(): z.ZodObject<Properties<ScheduledOperationWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => ScheduledOperationWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => ScheduledOperationWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => ScheduledOperationWhereInputSchema())).nullish(),
    _search: z.string().nullish(),
    createdAt: z.string().nullish(),
    createdAt_gt: z.string().nullish(),
    createdAt_gte: z.string().nullish(),
    createdAt_in: z.array(z.string()).nullish(),
    createdAt_lt: z.string().nullish(),
    createdAt_lte: z.string().nullish(),
    createdAt_not: z.string().nullish(),
    createdAt_not_in: z.array(z.string()).nullish(),
    createdBy: z.lazy(() => UserWhereInputSchema().nullish()),
    description: z.string().nullish(),
    description_contains: z.string().nullish(),
    description_ends_with: z.string().nullish(),
    description_in: z.array(z.string()).nullish(),
    description_not: z.string().nullish(),
    description_not_contains: z.string().nullish(),
    description_not_ends_with: z.string().nullish(),
    description_not_in: z.array(z.string()).nullish(),
    description_not_starts_with: z.string().nullish(),
    description_starts_with: z.string().nullish(),
    errorMessage: z.string().nullish(),
    errorMessage_contains: z.string().nullish(),
    errorMessage_ends_with: z.string().nullish(),
    errorMessage_in: z.array(z.string()).nullish(),
    errorMessage_not: z.string().nullish(),
    errorMessage_not_contains: z.string().nullish(),
    errorMessage_not_ends_with: z.string().nullish(),
    errorMessage_not_in: z.array(z.string()).nullish(),
    errorMessage_not_starts_with: z.string().nullish(),
    errorMessage_starts_with: z.string().nullish(),
    id: z.string().nullish(),
    id_contains: z.string().nullish(),
    id_ends_with: z.string().nullish(),
    id_in: z.array(z.string()).nullish(),
    id_not: z.string().nullish(),
    id_not_contains: z.string().nullish(),
    id_not_ends_with: z.string().nullish(),
    id_not_in: z.array(z.string()).nullish(),
    id_not_starts_with: z.string().nullish(),
    id_starts_with: z.string().nullish(),
    publishedAt: z.string().nullish(),
    publishedAt_gt: z.string().nullish(),
    publishedAt_gte: z.string().nullish(),
    publishedAt_in: z.array(z.string()).nullish(),
    publishedAt_lt: z.string().nullish(),
    publishedAt_lte: z.string().nullish(),
    publishedAt_not: z.string().nullish(),
    publishedAt_not_in: z.array(z.string()).nullish(),
    publishedBy: z.lazy(() => UserWhereInputSchema().nullish()),
    release: z.lazy(() => ScheduledReleaseWhereInputSchema().nullish()),
    status: ScheduledOperationStatusSchema.nullish(),
    status_in: z.array(ScheduledOperationStatusSchema).nullish(),
    status_not: ScheduledOperationStatusSchema.nullish(),
    status_not_in: z.array(ScheduledOperationStatusSchema).nullish(),
    updatedAt: z.string().nullish(),
    updatedAt_gt: z.string().nullish(),
    updatedAt_gte: z.string().nullish(),
    updatedAt_in: z.array(z.string()).nullish(),
    updatedAt_lt: z.string().nullish(),
    updatedAt_lte: z.string().nullish(),
    updatedAt_not: z.string().nullish(),
    updatedAt_not_in: z.array(z.string()).nullish(),
    updatedBy: z.lazy(() => UserWhereInputSchema().nullish())
  })
}

export function ScheduledOperationWhereUniqueInputSchema(): z.ZodObject<Properties<ScheduledOperationWhereUniqueInput>> {
  return z.object({
    id: z.string().nullish()
  })
}

export function ScheduledReleaseConnectInputSchema(): z.ZodObject<Properties<ScheduledReleaseConnectInput>> {
  return z.object({
    position: z.lazy(() => ConnectPositionInputSchema().nullish()),
    where: z.lazy(() => ScheduledReleaseWhereUniqueInputSchema())
  })
}

export function ScheduledReleaseCreateInputSchema(): z.ZodObject<Properties<ScheduledReleaseCreateInput>> {
  return z.object({
    createdAt: z.string().nullish(),
    description: z.string().nullish(),
    errorMessage: z.string().nullish(),
    isActive: z.boolean().nullish(),
    releaseAt: z.string().nullish(),
    title: z.string().nullish(),
    updatedAt: z.string().nullish()
  })
}

export function ScheduledReleaseCreateManyInlineInputSchema(): z.ZodObject<Properties<ScheduledReleaseCreateManyInlineInput>> {
  return z.object({
    connect: z.array(z.lazy(() => ScheduledReleaseWhereUniqueInputSchema())).nullish(),
    create: z.array(z.lazy(() => ScheduledReleaseCreateInputSchema())).nullish()
  })
}

export function ScheduledReleaseCreateOneInlineInputSchema(): z.ZodObject<Properties<ScheduledReleaseCreateOneInlineInput>> {
  return z.object({
    connect: z.lazy(() => ScheduledReleaseWhereUniqueInputSchema().nullish()),
    create: z.lazy(() => ScheduledReleaseCreateInputSchema().nullish())
  })
}

export function ScheduledReleaseManyWhereInputSchema(): z.ZodObject<Properties<ScheduledReleaseManyWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => ScheduledReleaseWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => ScheduledReleaseWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => ScheduledReleaseWhereInputSchema())).nullish(),
    _search: z.string().nullish(),
    createdAt: z.string().nullish(),
    createdAt_gt: z.string().nullish(),
    createdAt_gte: z.string().nullish(),
    createdAt_in: z.array(z.string()).nullish(),
    createdAt_lt: z.string().nullish(),
    createdAt_lte: z.string().nullish(),
    createdAt_not: z.string().nullish(),
    createdAt_not_in: z.array(z.string()).nullish(),
    createdBy: z.lazy(() => UserWhereInputSchema().nullish()),
    description: z.string().nullish(),
    description_contains: z.string().nullish(),
    description_ends_with: z.string().nullish(),
    description_in: z.array(z.string()).nullish(),
    description_not: z.string().nullish(),
    description_not_contains: z.string().nullish(),
    description_not_ends_with: z.string().nullish(),
    description_not_in: z.array(z.string()).nullish(),
    description_not_starts_with: z.string().nullish(),
    description_starts_with: z.string().nullish(),
    errorMessage: z.string().nullish(),
    errorMessage_contains: z.string().nullish(),
    errorMessage_ends_with: z.string().nullish(),
    errorMessage_in: z.array(z.string()).nullish(),
    errorMessage_not: z.string().nullish(),
    errorMessage_not_contains: z.string().nullish(),
    errorMessage_not_ends_with: z.string().nullish(),
    errorMessage_not_in: z.array(z.string()).nullish(),
    errorMessage_not_starts_with: z.string().nullish(),
    errorMessage_starts_with: z.string().nullish(),
    id: z.string().nullish(),
    id_contains: z.string().nullish(),
    id_ends_with: z.string().nullish(),
    id_in: z.array(z.string()).nullish(),
    id_not: z.string().nullish(),
    id_not_contains: z.string().nullish(),
    id_not_ends_with: z.string().nullish(),
    id_not_in: z.array(z.string()).nullish(),
    id_not_starts_with: z.string().nullish(),
    id_starts_with: z.string().nullish(),
    isActive: z.boolean().nullish(),
    isActive_not: z.boolean().nullish(),
    isImplicit: z.boolean().nullish(),
    isImplicit_not: z.boolean().nullish(),
    operations_every: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    operations_none: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    operations_some: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    publishedAt: z.string().nullish(),
    publishedAt_gt: z.string().nullish(),
    publishedAt_gte: z.string().nullish(),
    publishedAt_in: z.array(z.string()).nullish(),
    publishedAt_lt: z.string().nullish(),
    publishedAt_lte: z.string().nullish(),
    publishedAt_not: z.string().nullish(),
    publishedAt_not_in: z.array(z.string()).nullish(),
    publishedBy: z.lazy(() => UserWhereInputSchema().nullish()),
    releaseAt: z.string().nullish(),
    releaseAt_gt: z.string().nullish(),
    releaseAt_gte: z.string().nullish(),
    releaseAt_in: z.array(z.string()).nullish(),
    releaseAt_lt: z.string().nullish(),
    releaseAt_lte: z.string().nullish(),
    releaseAt_not: z.string().nullish(),
    releaseAt_not_in: z.array(z.string()).nullish(),
    status: ScheduledReleaseStatusSchema.nullish(),
    status_in: z.array(ScheduledReleaseStatusSchema).nullish(),
    status_not: ScheduledReleaseStatusSchema.nullish(),
    status_not_in: z.array(ScheduledReleaseStatusSchema).nullish(),
    title: z.string().nullish(),
    title_contains: z.string().nullish(),
    title_ends_with: z.string().nullish(),
    title_in: z.array(z.string()).nullish(),
    title_not: z.string().nullish(),
    title_not_contains: z.string().nullish(),
    title_not_ends_with: z.string().nullish(),
    title_not_in: z.array(z.string()).nullish(),
    title_not_starts_with: z.string().nullish(),
    title_starts_with: z.string().nullish(),
    updatedAt: z.string().nullish(),
    updatedAt_gt: z.string().nullish(),
    updatedAt_gte: z.string().nullish(),
    updatedAt_in: z.array(z.string()).nullish(),
    updatedAt_lt: z.string().nullish(),
    updatedAt_lte: z.string().nullish(),
    updatedAt_not: z.string().nullish(),
    updatedAt_not_in: z.array(z.string()).nullish(),
    updatedBy: z.lazy(() => UserWhereInputSchema().nullish())
  })
}

export const ScheduledReleaseOrderByInputSchema = z.nativeEnum(ScheduledReleaseOrderByInput);

export const ScheduledReleaseStatusSchema = z.nativeEnum(ScheduledReleaseStatus);

export function ScheduledReleaseUpdateInputSchema(): z.ZodObject<Properties<ScheduledReleaseUpdateInput>> {
  return z.object({
    description: z.string().nullish(),
    errorMessage: z.string().nullish(),
    isActive: z.boolean().nullish(),
    releaseAt: z.string().nullish(),
    title: z.string().nullish()
  })
}

export function ScheduledReleaseUpdateManyInlineInputSchema(): z.ZodObject<Properties<ScheduledReleaseUpdateManyInlineInput>> {
  return z.object({
    connect: z.array(z.lazy(() => ScheduledReleaseConnectInputSchema())).nullish(),
    create: z.array(z.lazy(() => ScheduledReleaseCreateInputSchema())).nullish(),
    delete: z.array(z.lazy(() => ScheduledReleaseWhereUniqueInputSchema())).nullish(),
    disconnect: z.array(z.lazy(() => ScheduledReleaseWhereUniqueInputSchema())).nullish(),
    set: z.array(z.lazy(() => ScheduledReleaseWhereUniqueInputSchema())).nullish(),
    update: z.array(z.lazy(() => ScheduledReleaseUpdateWithNestedWhereUniqueInputSchema())).nullish(),
    upsert: z.array(z.lazy(() => ScheduledReleaseUpsertWithNestedWhereUniqueInputSchema())).nullish()
  })
}

export function ScheduledReleaseUpdateManyInputSchema(): z.ZodObject<Properties<ScheduledReleaseUpdateManyInput>> {
  return z.object({
    description: z.string().nullish(),
    errorMessage: z.string().nullish(),
    isActive: z.boolean().nullish(),
    releaseAt: z.string().nullish(),
    title: z.string().nullish()
  })
}

export function ScheduledReleaseUpdateManyWithNestedWhereInputSchema(): z.ZodObject<Properties<ScheduledReleaseUpdateManyWithNestedWhereInput>> {
  return z.object({
    data: z.lazy(() => ScheduledReleaseUpdateManyInputSchema()),
    where: z.lazy(() => ScheduledReleaseWhereInputSchema())
  })
}

export function ScheduledReleaseUpdateOneInlineInputSchema(): z.ZodObject<Properties<ScheduledReleaseUpdateOneInlineInput>> {
  return z.object({
    connect: z.lazy(() => ScheduledReleaseWhereUniqueInputSchema().nullish()),
    create: z.lazy(() => ScheduledReleaseCreateInputSchema().nullish()),
    delete: z.boolean().nullish(),
    disconnect: z.boolean().nullish(),
    update: z.lazy(() => ScheduledReleaseUpdateWithNestedWhereUniqueInputSchema().nullish()),
    upsert: z.lazy(() => ScheduledReleaseUpsertWithNestedWhereUniqueInputSchema().nullish())
  })
}

export function ScheduledReleaseUpdateWithNestedWhereUniqueInputSchema(): z.ZodObject<Properties<ScheduledReleaseUpdateWithNestedWhereUniqueInput>> {
  return z.object({
    data: z.lazy(() => ScheduledReleaseUpdateInputSchema()),
    where: z.lazy(() => ScheduledReleaseWhereUniqueInputSchema())
  })
}

export function ScheduledReleaseUpsertInputSchema(): z.ZodObject<Properties<ScheduledReleaseUpsertInput>> {
  return z.object({
    create: z.lazy(() => ScheduledReleaseCreateInputSchema()),
    update: z.lazy(() => ScheduledReleaseUpdateInputSchema())
  })
}

export function ScheduledReleaseUpsertWithNestedWhereUniqueInputSchema(): z.ZodObject<Properties<ScheduledReleaseUpsertWithNestedWhereUniqueInput>> {
  return z.object({
    data: z.lazy(() => ScheduledReleaseUpsertInputSchema()),
    where: z.lazy(() => ScheduledReleaseWhereUniqueInputSchema())
  })
}

export function ScheduledReleaseWhereInputSchema(): z.ZodObject<Properties<ScheduledReleaseWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => ScheduledReleaseWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => ScheduledReleaseWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => ScheduledReleaseWhereInputSchema())).nullish(),
    _search: z.string().nullish(),
    createdAt: z.string().nullish(),
    createdAt_gt: z.string().nullish(),
    createdAt_gte: z.string().nullish(),
    createdAt_in: z.array(z.string()).nullish(),
    createdAt_lt: z.string().nullish(),
    createdAt_lte: z.string().nullish(),
    createdAt_not: z.string().nullish(),
    createdAt_not_in: z.array(z.string()).nullish(),
    createdBy: z.lazy(() => UserWhereInputSchema().nullish()),
    description: z.string().nullish(),
    description_contains: z.string().nullish(),
    description_ends_with: z.string().nullish(),
    description_in: z.array(z.string()).nullish(),
    description_not: z.string().nullish(),
    description_not_contains: z.string().nullish(),
    description_not_ends_with: z.string().nullish(),
    description_not_in: z.array(z.string()).nullish(),
    description_not_starts_with: z.string().nullish(),
    description_starts_with: z.string().nullish(),
    errorMessage: z.string().nullish(),
    errorMessage_contains: z.string().nullish(),
    errorMessage_ends_with: z.string().nullish(),
    errorMessage_in: z.array(z.string()).nullish(),
    errorMessage_not: z.string().nullish(),
    errorMessage_not_contains: z.string().nullish(),
    errorMessage_not_ends_with: z.string().nullish(),
    errorMessage_not_in: z.array(z.string()).nullish(),
    errorMessage_not_starts_with: z.string().nullish(),
    errorMessage_starts_with: z.string().nullish(),
    id: z.string().nullish(),
    id_contains: z.string().nullish(),
    id_ends_with: z.string().nullish(),
    id_in: z.array(z.string()).nullish(),
    id_not: z.string().nullish(),
    id_not_contains: z.string().nullish(),
    id_not_ends_with: z.string().nullish(),
    id_not_in: z.array(z.string()).nullish(),
    id_not_starts_with: z.string().nullish(),
    id_starts_with: z.string().nullish(),
    isActive: z.boolean().nullish(),
    isActive_not: z.boolean().nullish(),
    isImplicit: z.boolean().nullish(),
    isImplicit_not: z.boolean().nullish(),
    operations_every: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    operations_none: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    operations_some: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    publishedAt: z.string().nullish(),
    publishedAt_gt: z.string().nullish(),
    publishedAt_gte: z.string().nullish(),
    publishedAt_in: z.array(z.string()).nullish(),
    publishedAt_lt: z.string().nullish(),
    publishedAt_lte: z.string().nullish(),
    publishedAt_not: z.string().nullish(),
    publishedAt_not_in: z.array(z.string()).nullish(),
    publishedBy: z.lazy(() => UserWhereInputSchema().nullish()),
    releaseAt: z.string().nullish(),
    releaseAt_gt: z.string().nullish(),
    releaseAt_gte: z.string().nullish(),
    releaseAt_in: z.array(z.string()).nullish(),
    releaseAt_lt: z.string().nullish(),
    releaseAt_lte: z.string().nullish(),
    releaseAt_not: z.string().nullish(),
    releaseAt_not_in: z.array(z.string()).nullish(),
    status: ScheduledReleaseStatusSchema.nullish(),
    status_in: z.array(ScheduledReleaseStatusSchema).nullish(),
    status_not: ScheduledReleaseStatusSchema.nullish(),
    status_not_in: z.array(ScheduledReleaseStatusSchema).nullish(),
    title: z.string().nullish(),
    title_contains: z.string().nullish(),
    title_ends_with: z.string().nullish(),
    title_in: z.array(z.string()).nullish(),
    title_not: z.string().nullish(),
    title_not_contains: z.string().nullish(),
    title_not_ends_with: z.string().nullish(),
    title_not_in: z.array(z.string()).nullish(),
    title_not_starts_with: z.string().nullish(),
    title_starts_with: z.string().nullish(),
    updatedAt: z.string().nullish(),
    updatedAt_gt: z.string().nullish(),
    updatedAt_gte: z.string().nullish(),
    updatedAt_in: z.array(z.string()).nullish(),
    updatedAt_lt: z.string().nullish(),
    updatedAt_lte: z.string().nullish(),
    updatedAt_not: z.string().nullish(),
    updatedAt_not_in: z.array(z.string()).nullish(),
    updatedBy: z.lazy(() => UserWhereInputSchema().nullish())
  })
}

export function ScheduledReleaseWhereUniqueInputSchema(): z.ZodObject<Properties<ScheduledReleaseWhereUniqueInput>> {
  return z.object({
    id: z.string().nullish()
  })
}

export const StageSchema = z.nativeEnum(Stage);

export const SystemDateTimeFieldVariationSchema = z.nativeEnum(SystemDateTimeFieldVariation);

export function TodoConnectInputSchema(): z.ZodObject<Properties<TodoConnectInput>> {
  return z.object({
    position: z.lazy(() => ConnectPositionInputSchema().nullish()),
    where: z.lazy(() => TodoWhereUniqueInputSchema())
  })
}

export function TodoCreateInputSchema(): z.ZodObject<Properties<TodoCreateInput>> {
  return z.object({
    author: z.string().nullish(),
    completed: z.boolean().nullish(),
    createdAt: z.string().nullish(),
    date: z.string(),
    description: z.string().nullish(),
    shortMessage: z.string(),
    updatedAt: z.string().nullish()
  })
}

export function TodoCreateManyInlineInputSchema(): z.ZodObject<Properties<TodoCreateManyInlineInput>> {
  return z.object({
    connect: z.array(z.lazy(() => TodoWhereUniqueInputSchema())).nullish(),
    create: z.array(z.lazy(() => TodoCreateInputSchema())).nullish()
  })
}

export function TodoCreateOneInlineInputSchema(): z.ZodObject<Properties<TodoCreateOneInlineInput>> {
  return z.object({
    connect: z.lazy(() => TodoWhereUniqueInputSchema().nullish()),
    create: z.lazy(() => TodoCreateInputSchema().nullish())
  })
}

export function TodoManyWhereInputSchema(): z.ZodObject<Properties<TodoManyWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => TodoWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => TodoWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => TodoWhereInputSchema())).nullish(),
    _search: z.string().nullish(),
    author: z.string().nullish(),
    author_contains: z.string().nullish(),
    author_ends_with: z.string().nullish(),
    author_in: z.array(z.string()).nullish(),
    author_not: z.string().nullish(),
    author_not_contains: z.string().nullish(),
    author_not_ends_with: z.string().nullish(),
    author_not_in: z.array(z.string()).nullish(),
    author_not_starts_with: z.string().nullish(),
    author_starts_with: z.string().nullish(),
    completed: z.boolean().nullish(),
    completed_not: z.boolean().nullish(),
    createdAt: z.string().nullish(),
    createdAt_gt: z.string().nullish(),
    createdAt_gte: z.string().nullish(),
    createdAt_in: z.array(z.string()).nullish(),
    createdAt_lt: z.string().nullish(),
    createdAt_lte: z.string().nullish(),
    createdAt_not: z.string().nullish(),
    createdAt_not_in: z.array(z.string()).nullish(),
    createdBy: z.lazy(() => UserWhereInputSchema().nullish()),
    date: z.string().nullish(),
    date_gt: z.string().nullish(),
    date_gte: z.string().nullish(),
    date_in: z.array(z.string()).nullish(),
    date_lt: z.string().nullish(),
    date_lte: z.string().nullish(),
    date_not: z.string().nullish(),
    date_not_in: z.array(z.string()).nullish(),
    description: z.string().nullish(),
    description_contains: z.string().nullish(),
    description_ends_with: z.string().nullish(),
    description_in: z.array(z.string()).nullish(),
    description_not: z.string().nullish(),
    description_not_contains: z.string().nullish(),
    description_not_ends_with: z.string().nullish(),
    description_not_in: z.array(z.string()).nullish(),
    description_not_starts_with: z.string().nullish(),
    description_starts_with: z.string().nullish(),
    id: z.string().nullish(),
    id_contains: z.string().nullish(),
    id_ends_with: z.string().nullish(),
    id_in: z.array(z.string()).nullish(),
    id_not: z.string().nullish(),
    id_not_contains: z.string().nullish(),
    id_not_ends_with: z.string().nullish(),
    id_not_in: z.array(z.string()).nullish(),
    id_not_starts_with: z.string().nullish(),
    id_starts_with: z.string().nullish(),
    publishedAt: z.string().nullish(),
    publishedAt_gt: z.string().nullish(),
    publishedAt_gte: z.string().nullish(),
    publishedAt_in: z.array(z.string()).nullish(),
    publishedAt_lt: z.string().nullish(),
    publishedAt_lte: z.string().nullish(),
    publishedAt_not: z.string().nullish(),
    publishedAt_not_in: z.array(z.string()).nullish(),
    publishedBy: z.lazy(() => UserWhereInputSchema().nullish()),
    scheduledIn_every: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    scheduledIn_none: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    scheduledIn_some: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    shortMessage: z.string().nullish(),
    shortMessage_contains: z.string().nullish(),
    shortMessage_ends_with: z.string().nullish(),
    shortMessage_in: z.array(z.string()).nullish(),
    shortMessage_not: z.string().nullish(),
    shortMessage_not_contains: z.string().nullish(),
    shortMessage_not_ends_with: z.string().nullish(),
    shortMessage_not_in: z.array(z.string()).nullish(),
    shortMessage_not_starts_with: z.string().nullish(),
    shortMessage_starts_with: z.string().nullish(),
    updatedAt: z.string().nullish(),
    updatedAt_gt: z.string().nullish(),
    updatedAt_gte: z.string().nullish(),
    updatedAt_in: z.array(z.string()).nullish(),
    updatedAt_lt: z.string().nullish(),
    updatedAt_lte: z.string().nullish(),
    updatedAt_not: z.string().nullish(),
    updatedAt_not_in: z.array(z.string()).nullish(),
    updatedBy: z.lazy(() => UserWhereInputSchema().nullish())
  })
}

export const TodoOrderByInputSchema = z.nativeEnum(TodoOrderByInput);

export function TodoUpdateInputSchema(): z.ZodObject<Properties<TodoUpdateInput>> {
  return z.object({
    author: z.string().nullish(),
    completed: z.boolean().nullish(),
    date: z.string().nullish(),
    description: z.string().nullish(),
    shortMessage: z.string().nullish()
  })
}

export function TodoUpdateManyInlineInputSchema(): z.ZodObject<Properties<TodoUpdateManyInlineInput>> {
  return z.object({
    connect: z.array(z.lazy(() => TodoConnectInputSchema())).nullish(),
    create: z.array(z.lazy(() => TodoCreateInputSchema())).nullish(),
    delete: z.array(z.lazy(() => TodoWhereUniqueInputSchema())).nullish(),
    disconnect: z.array(z.lazy(() => TodoWhereUniqueInputSchema())).nullish(),
    set: z.array(z.lazy(() => TodoWhereUniqueInputSchema())).nullish(),
    update: z.array(z.lazy(() => TodoUpdateWithNestedWhereUniqueInputSchema())).nullish(),
    upsert: z.array(z.lazy(() => TodoUpsertWithNestedWhereUniqueInputSchema())).nullish()
  })
}

export function TodoUpdateManyInputSchema(): z.ZodObject<Properties<TodoUpdateManyInput>> {
  return z.object({
    author: z.string().nullish(),
    completed: z.boolean().nullish(),
    date: z.string().nullish(),
    description: z.string().nullish(),
    shortMessage: z.string().nullish()
  })
}

export function TodoUpdateManyWithNestedWhereInputSchema(): z.ZodObject<Properties<TodoUpdateManyWithNestedWhereInput>> {
  return z.object({
    data: z.lazy(() => TodoUpdateManyInputSchema()),
    where: z.lazy(() => TodoWhereInputSchema())
  })
}

export function TodoUpdateOneInlineInputSchema(): z.ZodObject<Properties<TodoUpdateOneInlineInput>> {
  return z.object({
    connect: z.lazy(() => TodoWhereUniqueInputSchema().nullish()),
    create: z.lazy(() => TodoCreateInputSchema().nullish()),
    delete: z.boolean().nullish(),
    disconnect: z.boolean().nullish(),
    update: z.lazy(() => TodoUpdateWithNestedWhereUniqueInputSchema().nullish()),
    upsert: z.lazy(() => TodoUpsertWithNestedWhereUniqueInputSchema().nullish())
  })
}

export function TodoUpdateWithNestedWhereUniqueInputSchema(): z.ZodObject<Properties<TodoUpdateWithNestedWhereUniqueInput>> {
  return z.object({
    data: z.lazy(() => TodoUpdateInputSchema()),
    where: z.lazy(() => TodoWhereUniqueInputSchema())
  })
}

export function TodoUpsertInputSchema(): z.ZodObject<Properties<TodoUpsertInput>> {
  return z.object({
    create: z.lazy(() => TodoCreateInputSchema()),
    update: z.lazy(() => TodoUpdateInputSchema())
  })
}

export function TodoUpsertWithNestedWhereUniqueInputSchema(): z.ZodObject<Properties<TodoUpsertWithNestedWhereUniqueInput>> {
  return z.object({
    data: z.lazy(() => TodoUpsertInputSchema()),
    where: z.lazy(() => TodoWhereUniqueInputSchema())
  })
}

export function TodoWhereInputSchema(): z.ZodObject<Properties<TodoWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => TodoWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => TodoWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => TodoWhereInputSchema())).nullish(),
    _search: z.string().nullish(),
    author: z.string().nullish(),
    author_contains: z.string().nullish(),
    author_ends_with: z.string().nullish(),
    author_in: z.array(z.string()).nullish(),
    author_not: z.string().nullish(),
    author_not_contains: z.string().nullish(),
    author_not_ends_with: z.string().nullish(),
    author_not_in: z.array(z.string()).nullish(),
    author_not_starts_with: z.string().nullish(),
    author_starts_with: z.string().nullish(),
    completed: z.boolean().nullish(),
    completed_not: z.boolean().nullish(),
    createdAt: z.string().nullish(),
    createdAt_gt: z.string().nullish(),
    createdAt_gte: z.string().nullish(),
    createdAt_in: z.array(z.string()).nullish(),
    createdAt_lt: z.string().nullish(),
    createdAt_lte: z.string().nullish(),
    createdAt_not: z.string().nullish(),
    createdAt_not_in: z.array(z.string()).nullish(),
    createdBy: z.lazy(() => UserWhereInputSchema().nullish()),
    date: z.string().nullish(),
    date_gt: z.string().nullish(),
    date_gte: z.string().nullish(),
    date_in: z.array(z.string()).nullish(),
    date_lt: z.string().nullish(),
    date_lte: z.string().nullish(),
    date_not: z.string().nullish(),
    date_not_in: z.array(z.string()).nullish(),
    description: z.string().nullish(),
    description_contains: z.string().nullish(),
    description_ends_with: z.string().nullish(),
    description_in: z.array(z.string()).nullish(),
    description_not: z.string().nullish(),
    description_not_contains: z.string().nullish(),
    description_not_ends_with: z.string().nullish(),
    description_not_in: z.array(z.string()).nullish(),
    description_not_starts_with: z.string().nullish(),
    description_starts_with: z.string().nullish(),
    id: z.string().nullish(),
    id_contains: z.string().nullish(),
    id_ends_with: z.string().nullish(),
    id_in: z.array(z.string()).nullish(),
    id_not: z.string().nullish(),
    id_not_contains: z.string().nullish(),
    id_not_ends_with: z.string().nullish(),
    id_not_in: z.array(z.string()).nullish(),
    id_not_starts_with: z.string().nullish(),
    id_starts_with: z.string().nullish(),
    publishedAt: z.string().nullish(),
    publishedAt_gt: z.string().nullish(),
    publishedAt_gte: z.string().nullish(),
    publishedAt_in: z.array(z.string()).nullish(),
    publishedAt_lt: z.string().nullish(),
    publishedAt_lte: z.string().nullish(),
    publishedAt_not: z.string().nullish(),
    publishedAt_not_in: z.array(z.string()).nullish(),
    publishedBy: z.lazy(() => UserWhereInputSchema().nullish()),
    scheduledIn_every: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    scheduledIn_none: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    scheduledIn_some: z.lazy(() => ScheduledOperationWhereInputSchema().nullish()),
    shortMessage: z.string().nullish(),
    shortMessage_contains: z.string().nullish(),
    shortMessage_ends_with: z.string().nullish(),
    shortMessage_in: z.array(z.string()).nullish(),
    shortMessage_not: z.string().nullish(),
    shortMessage_not_contains: z.string().nullish(),
    shortMessage_not_ends_with: z.string().nullish(),
    shortMessage_not_in: z.array(z.string()).nullish(),
    shortMessage_not_starts_with: z.string().nullish(),
    shortMessage_starts_with: z.string().nullish(),
    updatedAt: z.string().nullish(),
    updatedAt_gt: z.string().nullish(),
    updatedAt_gte: z.string().nullish(),
    updatedAt_in: z.array(z.string()).nullish(),
    updatedAt_lt: z.string().nullish(),
    updatedAt_lte: z.string().nullish(),
    updatedAt_not: z.string().nullish(),
    updatedAt_not_in: z.array(z.string()).nullish(),
    updatedBy: z.lazy(() => UserWhereInputSchema().nullish())
  })
}

export function TodoWhereUniqueInputSchema(): z.ZodObject<Properties<TodoWhereUniqueInput>> {
  return z.object({
    id: z.string().nullish(),
    selected: z.boolean().nullish(),
    touched: z.boolean().nullish()
  })
}

export function UnpublishLocaleInputSchema(): z.ZodObject<Properties<UnpublishLocaleInput>> {
  return z.object({
    locale: LocaleSchema,
    stages: z.array(StageSchema)
  })
}

export function UserConnectInputSchema(): z.ZodObject<Properties<UserConnectInput>> {
  return z.object({
    position: z.lazy(() => ConnectPositionInputSchema().nullish()),
    where: z.lazy(() => UserWhereUniqueInputSchema())
  })
}

export function UserCreateManyInlineInputSchema(): z.ZodObject<Properties<UserCreateManyInlineInput>> {
  return z.object({
    connect: z.array(z.lazy(() => UserWhereUniqueInputSchema())).nullish()
  })
}

export function UserCreateOneInlineInputSchema(): z.ZodObject<Properties<UserCreateOneInlineInput>> {
  return z.object({
    connect: z.lazy(() => UserWhereUniqueInputSchema().nullish())
  })
}

export const UserKindSchema = z.nativeEnum(UserKind);

export function UserManyWhereInputSchema(): z.ZodObject<Properties<UserManyWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => UserWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => UserWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => UserWhereInputSchema())).nullish(),
    _search: z.string().nullish(),
    createdAt: z.string().nullish(),
    createdAt_gt: z.string().nullish(),
    createdAt_gte: z.string().nullish(),
    createdAt_in: z.array(z.string()).nullish(),
    createdAt_lt: z.string().nullish(),
    createdAt_lte: z.string().nullish(),
    createdAt_not: z.string().nullish(),
    createdAt_not_in: z.array(z.string()).nullish(),
    id: z.string().nullish(),
    id_contains: z.string().nullish(),
    id_ends_with: z.string().nullish(),
    id_in: z.array(z.string()).nullish(),
    id_not: z.string().nullish(),
    id_not_contains: z.string().nullish(),
    id_not_ends_with: z.string().nullish(),
    id_not_in: z.array(z.string()).nullish(),
    id_not_starts_with: z.string().nullish(),
    id_starts_with: z.string().nullish(),
    isActive: z.boolean().nullish(),
    isActive_not: z.boolean().nullish(),
    kind: UserKindSchema.nullish(),
    kind_in: z.array(UserKindSchema).nullish(),
    kind_not: UserKindSchema.nullish(),
    kind_not_in: z.array(UserKindSchema).nullish(),
    name: z.string().nullish(),
    name_contains: z.string().nullish(),
    name_ends_with: z.string().nullish(),
    name_in: z.array(z.string()).nullish(),
    name_not: z.string().nullish(),
    name_not_contains: z.string().nullish(),
    name_not_ends_with: z.string().nullish(),
    name_not_in: z.array(z.string()).nullish(),
    name_not_starts_with: z.string().nullish(),
    name_starts_with: z.string().nullish(),
    picture: z.string().nullish(),
    picture_contains: z.string().nullish(),
    picture_ends_with: z.string().nullish(),
    picture_in: z.array(z.string()).nullish(),
    picture_not: z.string().nullish(),
    picture_not_contains: z.string().nullish(),
    picture_not_ends_with: z.string().nullish(),
    picture_not_in: z.array(z.string()).nullish(),
    picture_not_starts_with: z.string().nullish(),
    picture_starts_with: z.string().nullish(),
    publishedAt: z.string().nullish(),
    publishedAt_gt: z.string().nullish(),
    publishedAt_gte: z.string().nullish(),
    publishedAt_in: z.array(z.string()).nullish(),
    publishedAt_lt: z.string().nullish(),
    publishedAt_lte: z.string().nullish(),
    publishedAt_not: z.string().nullish(),
    publishedAt_not_in: z.array(z.string()).nullish(),
    updatedAt: z.string().nullish(),
    updatedAt_gt: z.string().nullish(),
    updatedAt_gte: z.string().nullish(),
    updatedAt_in: z.array(z.string()).nullish(),
    updatedAt_lt: z.string().nullish(),
    updatedAt_lte: z.string().nullish(),
    updatedAt_not: z.string().nullish(),
    updatedAt_not_in: z.array(z.string()).nullish()
  })
}

export const UserOrderByInputSchema = z.nativeEnum(UserOrderByInput);

export function UserUpdateManyInlineInputSchema(): z.ZodObject<Properties<UserUpdateManyInlineInput>> {
  return z.object({
    connect: z.array(z.lazy(() => UserConnectInputSchema())).nullish(),
    disconnect: z.array(z.lazy(() => UserWhereUniqueInputSchema())).nullish(),
    set: z.array(z.lazy(() => UserWhereUniqueInputSchema())).nullish()
  })
}

export function UserUpdateOneInlineInputSchema(): z.ZodObject<Properties<UserUpdateOneInlineInput>> {
  return z.object({
    connect: z.lazy(() => UserWhereUniqueInputSchema().nullish()),
    disconnect: z.boolean().nullish()
  })
}

export function UserWhereInputSchema(): z.ZodObject<Properties<UserWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => UserWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => UserWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => UserWhereInputSchema())).nullish(),
    _search: z.string().nullish(),
    createdAt: z.string().nullish(),
    createdAt_gt: z.string().nullish(),
    createdAt_gte: z.string().nullish(),
    createdAt_in: z.array(z.string()).nullish(),
    createdAt_lt: z.string().nullish(),
    createdAt_lte: z.string().nullish(),
    createdAt_not: z.string().nullish(),
    createdAt_not_in: z.array(z.string()).nullish(),
    id: z.string().nullish(),
    id_contains: z.string().nullish(),
    id_ends_with: z.string().nullish(),
    id_in: z.array(z.string()).nullish(),
    id_not: z.string().nullish(),
    id_not_contains: z.string().nullish(),
    id_not_ends_with: z.string().nullish(),
    id_not_in: z.array(z.string()).nullish(),
    id_not_starts_with: z.string().nullish(),
    id_starts_with: z.string().nullish(),
    isActive: z.boolean().nullish(),
    isActive_not: z.boolean().nullish(),
    kind: UserKindSchema.nullish(),
    kind_in: z.array(UserKindSchema).nullish(),
    kind_not: UserKindSchema.nullish(),
    kind_not_in: z.array(UserKindSchema).nullish(),
    name: z.string().nullish(),
    name_contains: z.string().nullish(),
    name_ends_with: z.string().nullish(),
    name_in: z.array(z.string()).nullish(),
    name_not: z.string().nullish(),
    name_not_contains: z.string().nullish(),
    name_not_ends_with: z.string().nullish(),
    name_not_in: z.array(z.string()).nullish(),
    name_not_starts_with: z.string().nullish(),
    name_starts_with: z.string().nullish(),
    picture: z.string().nullish(),
    picture_contains: z.string().nullish(),
    picture_ends_with: z.string().nullish(),
    picture_in: z.array(z.string()).nullish(),
    picture_not: z.string().nullish(),
    picture_not_contains: z.string().nullish(),
    picture_not_ends_with: z.string().nullish(),
    picture_not_in: z.array(z.string()).nullish(),
    picture_not_starts_with: z.string().nullish(),
    picture_starts_with: z.string().nullish(),
    publishedAt: z.string().nullish(),
    publishedAt_gt: z.string().nullish(),
    publishedAt_gte: z.string().nullish(),
    publishedAt_in: z.array(z.string()).nullish(),
    publishedAt_lt: z.string().nullish(),
    publishedAt_lte: z.string().nullish(),
    publishedAt_not: z.string().nullish(),
    publishedAt_not_in: z.array(z.string()).nullish(),
    updatedAt: z.string().nullish(),
    updatedAt_gt: z.string().nullish(),
    updatedAt_gte: z.string().nullish(),
    updatedAt_in: z.array(z.string()).nullish(),
    updatedAt_lt: z.string().nullish(),
    updatedAt_lte: z.string().nullish(),
    updatedAt_not: z.string().nullish(),
    updatedAt_not_in: z.array(z.string()).nullish()
  })
}

export function UserWhereUniqueInputSchema(): z.ZodObject<Properties<UserWhereUniqueInput>> {
  return z.object({
    id: z.string().nullish()
  })
}

export function VersionWhereInputSchema(): z.ZodObject<Properties<VersionWhereInput>> {
  return z.object({
    id: z.string(),
    revision: z.number(),
    stage: StageSchema
  })
}

export const _FilterKindSchema = z.nativeEnum(_FilterKind);

export const _MutationInputFieldKindSchema = z.nativeEnum(_MutationInputFieldKind);

export const _MutationKindSchema = z.nativeEnum(_MutationKind);

export const _OrderDirectionSchema = z.nativeEnum(_OrderDirection);

export const _RelationInputCardinalitySchema = z.nativeEnum(_RelationInputCardinality);

export const _RelationInputKindSchema = z.nativeEnum(_RelationInputKind);

export const _RelationKindSchema = z.nativeEnum(_RelationKind);

export const _SystemDateTimeFieldVariationSchema = z.nativeEnum(_SystemDateTimeFieldVariation);
