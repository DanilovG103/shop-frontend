import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
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
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type AuthenticatedItem = User;

export type Basket = {
  __typename?: 'Basket';
  goods?: Maybe<Array<Good>>;
  goodsCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  sum?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};


export type BasketGoodsArgs = {
  orderBy?: Array<GoodOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: GoodWhereInput;
};


export type BasketGoodsCountArgs = {
  where?: GoodWhereInput;
};

export type BasketCreateInput = {
  goods?: InputMaybe<GoodRelateToManyForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type BasketOrderByInput = {
  id?: InputMaybe<OrderDirection>;
};

export type BasketRelateToOneForCreateInput = {
  connect?: InputMaybe<BasketWhereUniqueInput>;
  create?: InputMaybe<BasketCreateInput>;
};

export type BasketRelateToOneForUpdateInput = {
  connect?: InputMaybe<BasketWhereUniqueInput>;
  create?: InputMaybe<BasketCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type BasketUpdateArgs = {
  data: BasketUpdateInput;
  where: BasketWhereUniqueInput;
};

export type BasketUpdateInput = {
  goods?: InputMaybe<GoodRelateToManyForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type BasketWhereInput = {
  AND?: InputMaybe<Array<BasketWhereInput>>;
  NOT?: InputMaybe<Array<BasketWhereInput>>;
  OR?: InputMaybe<Array<BasketWhereInput>>;
  goods?: InputMaybe<GoodManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type BasketWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Brand = {
  __typename?: 'Brand';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type BrandCreateInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type BrandOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type BrandRelateToOneForCreateInput = {
  connect?: InputMaybe<BrandWhereUniqueInput>;
  create?: InputMaybe<BrandCreateInput>;
};

export type BrandRelateToOneForUpdateInput = {
  connect?: InputMaybe<BrandWhereUniqueInput>;
  create?: InputMaybe<BrandCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type BrandUpdateArgs = {
  data: BrandUpdateInput;
  where: BrandWhereUniqueInput;
};

export type BrandUpdateInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type BrandWhereInput = {
  AND?: InputMaybe<Array<BrandWhereInput>>;
  NOT?: InputMaybe<Array<BrandWhereInput>>;
  OR?: InputMaybe<Array<BrandWhereInput>>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BrandWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Favorite = {
  __typename?: 'Favorite';
  goods?: Maybe<Array<Good>>;
  goodsCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  user?: Maybe<User>;
};


export type FavoriteGoodsArgs = {
  orderBy?: Array<GoodOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: GoodWhereInput;
};


export type FavoriteGoodsCountArgs = {
  where?: GoodWhereInput;
};

export type FavoriteCreateInput = {
  goods?: InputMaybe<GoodRelateToManyForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type FavoriteOrderByInput = {
  id?: InputMaybe<OrderDirection>;
};

export type FavoriteUpdateArgs = {
  data: FavoriteUpdateInput;
  where: FavoriteWhereUniqueInput;
};

export type FavoriteUpdateInput = {
  goods?: InputMaybe<GoodRelateToManyForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type FavoriteWhereInput = {
  AND?: InputMaybe<Array<FavoriteWhereInput>>;
  NOT?: InputMaybe<Array<FavoriteWhereInput>>;
  OR?: InputMaybe<Array<FavoriteWhereInput>>;
  goods?: InputMaybe<GoodManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type FavoriteWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Good = {
  __typename?: 'Good';
  brand?: Maybe<Brand>;
  category?: Maybe<GoodCategoryType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars['Int']>;
  isInBasket?: Maybe<Scalars['Boolean']>;
  isInFavorite?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type GoodImagesArgs = {
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ImageWhereInput;
};


export type GoodImagesCountArgs = {
  where?: ImageWhereInput;
};

export enum GoodCategoryType {
  Female = 'FEMALE',
  Kids = 'KIDS',
  Male = 'MALE'
}

export type GoodCategoryTypeNullableFilter = {
  equals?: InputMaybe<GoodCategoryType>;
  in?: InputMaybe<Array<GoodCategoryType>>;
  not?: InputMaybe<GoodCategoryTypeNullableFilter>;
  notIn?: InputMaybe<Array<GoodCategoryType>>;
};

export type GoodCreateInput = {
  brand?: InputMaybe<BrandRelateToOneForCreateInput>;
  category?: InputMaybe<GoodCategoryType>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<ImageRelateToManyForCreateInput>;
  price?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GoodManyRelationFilter = {
  every?: InputMaybe<GoodWhereInput>;
  none?: InputMaybe<GoodWhereInput>;
  some?: InputMaybe<GoodWhereInput>;
};

export type GoodOrderByInput = {
  category?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  price?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type GoodRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<GoodWhereUniqueInput>>;
  create?: InputMaybe<Array<GoodCreateInput>>;
};

export type GoodRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<GoodWhereUniqueInput>>;
  create?: InputMaybe<Array<GoodCreateInput>>;
  disconnect?: InputMaybe<Array<GoodWhereUniqueInput>>;
  set?: InputMaybe<Array<GoodWhereUniqueInput>>;
};

export type GoodUpdateArgs = {
  data: GoodUpdateInput;
  where: GoodWhereUniqueInput;
};

export type GoodUpdateInput = {
  brand?: InputMaybe<BrandRelateToOneForUpdateInput>;
  category?: InputMaybe<GoodCategoryType>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<ImageRelateToManyForUpdateInput>;
  price?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GoodWhereInput = {
  AND?: InputMaybe<Array<GoodWhereInput>>;
  NOT?: InputMaybe<Array<GoodWhereInput>>;
  OR?: InputMaybe<Array<GoodWhereInput>>;
  brand?: InputMaybe<BrandWhereInput>;
  category?: InputMaybe<GoodCategoryTypeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  images?: InputMaybe<ImageManyRelationFilter>;
  price?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type GoodWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
};

export type ImageCreateInput = {
  image?: InputMaybe<ImageFieldInput>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type ImageManyRelationFilter = {
  every?: InputMaybe<ImageWhereInput>;
  none?: InputMaybe<ImageWhereInput>;
  some?: InputMaybe<ImageWhereInput>;
};

export type ImageOrderByInput = {
  id?: InputMaybe<OrderDirection>;
};

export type ImageRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  create?: InputMaybe<Array<ImageCreateInput>>;
};

export type ImageRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  create?: InputMaybe<Array<ImageCreateInput>>;
  disconnect?: InputMaybe<Array<ImageWhereUniqueInput>>;
  set?: InputMaybe<Array<ImageWhereUniqueInput>>;
};

export type ImageUpdateArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};

export type ImageUpdateInput = {
  image?: InputMaybe<ImageFieldInput>;
};

export type ImageWhereInput = {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  id?: InputMaybe<IdFilter>;
};

export type ImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  isSingleton: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createBasket?: Maybe<Basket>;
  createBaskets?: Maybe<Array<Maybe<Basket>>>;
  createBrand?: Maybe<Brand>;
  createBrands?: Maybe<Array<Maybe<Brand>>>;
  createFavorite?: Maybe<Favorite>;
  createFavorites?: Maybe<Array<Maybe<Favorite>>>;
  createGood?: Maybe<Good>;
  createGoods?: Maybe<Array<Maybe<Good>>>;
  createImage?: Maybe<Image>;
  createImages?: Maybe<Array<Maybe<Image>>>;
  createRequest?: Maybe<Request>;
  createRequests?: Maybe<Array<Maybe<Request>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteBasket?: Maybe<Basket>;
  deleteBaskets?: Maybe<Array<Maybe<Basket>>>;
  deleteBrand?: Maybe<Brand>;
  deleteBrands?: Maybe<Array<Maybe<Brand>>>;
  deleteFavorite?: Maybe<Favorite>;
  deleteFavorites?: Maybe<Array<Maybe<Favorite>>>;
  deleteGood?: Maybe<Good>;
  deleteGoods?: Maybe<Array<Maybe<Good>>>;
  deleteImage?: Maybe<Image>;
  deleteImages?: Maybe<Array<Maybe<Image>>>;
  deleteRequest?: Maybe<Request>;
  deleteRequests?: Maybe<Array<Maybe<Request>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  registration?: Maybe<UserAuthenticationWithPasswordResult>;
  updateBasket?: Maybe<Basket>;
  updateBaskets?: Maybe<Array<Maybe<Basket>>>;
  updateBrand?: Maybe<Brand>;
  updateBrands?: Maybe<Array<Maybe<Brand>>>;
  updateFavorite?: Maybe<Favorite>;
  updateFavorites?: Maybe<Array<Maybe<Favorite>>>;
  updateGood?: Maybe<Good>;
  updateGoods?: Maybe<Array<Maybe<Good>>>;
  updateImage?: Maybe<Image>;
  updateImages?: Maybe<Array<Maybe<Image>>>;
  updateRequest?: Maybe<Request>;
  updateRequests?: Maybe<Array<Maybe<Request>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateBasketArgs = {
  data: BasketCreateInput;
};


export type MutationCreateBasketsArgs = {
  data: Array<BasketCreateInput>;
};


export type MutationCreateBrandArgs = {
  data: BrandCreateInput;
};


export type MutationCreateBrandsArgs = {
  data: Array<BrandCreateInput>;
};


export type MutationCreateFavoriteArgs = {
  data: FavoriteCreateInput;
};


export type MutationCreateFavoritesArgs = {
  data: Array<FavoriteCreateInput>;
};


export type MutationCreateGoodArgs = {
  data: GoodCreateInput;
};


export type MutationCreateGoodsArgs = {
  data: Array<GoodCreateInput>;
};


export type MutationCreateImageArgs = {
  data: ImageCreateInput;
};


export type MutationCreateImagesArgs = {
  data: Array<ImageCreateInput>;
};


export type MutationCreateRequestArgs = {
  data: RequestCreateInput;
};


export type MutationCreateRequestsArgs = {
  data: Array<RequestCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteBasketArgs = {
  where: BasketWhereUniqueInput;
};


export type MutationDeleteBasketsArgs = {
  where: Array<BasketWhereUniqueInput>;
};


export type MutationDeleteBrandArgs = {
  where: BrandWhereUniqueInput;
};


export type MutationDeleteBrandsArgs = {
  where: Array<BrandWhereUniqueInput>;
};


export type MutationDeleteFavoriteArgs = {
  where: FavoriteWhereUniqueInput;
};


export type MutationDeleteFavoritesArgs = {
  where: Array<FavoriteWhereUniqueInput>;
};


export type MutationDeleteGoodArgs = {
  where: GoodWhereUniqueInput;
};


export type MutationDeleteGoodsArgs = {
  where: Array<GoodWhereUniqueInput>;
};


export type MutationDeleteImageArgs = {
  where: ImageWhereUniqueInput;
};


export type MutationDeleteImagesArgs = {
  where: Array<ImageWhereUniqueInput>;
};


export type MutationDeleteRequestArgs = {
  where: RequestWhereUniqueInput;
};


export type MutationDeleteRequestsArgs = {
  where: Array<RequestWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationRegistrationArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateBasketArgs = {
  data: BasketUpdateInput;
  where: BasketWhereUniqueInput;
};


export type MutationUpdateBasketsArgs = {
  data: Array<BasketUpdateArgs>;
};


export type MutationUpdateBrandArgs = {
  data: BrandUpdateInput;
  where: BrandWhereUniqueInput;
};


export type MutationUpdateBrandsArgs = {
  data: Array<BrandUpdateArgs>;
};


export type MutationUpdateFavoriteArgs = {
  data: FavoriteUpdateInput;
  where: FavoriteWhereUniqueInput;
};


export type MutationUpdateFavoritesArgs = {
  data: Array<FavoriteUpdateArgs>;
};


export type MutationUpdateGoodArgs = {
  data: GoodUpdateInput;
  where: GoodWhereUniqueInput;
};


export type MutationUpdateGoodsArgs = {
  data: Array<GoodUpdateArgs>;
};


export type MutationUpdateImageArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};


export type MutationUpdateImagesArgs = {
  data: Array<ImageUpdateArgs>;
};


export type MutationUpdateRequestArgs = {
  data: RequestUpdateInput;
  where: RequestWhereUniqueInput;
};


export type MutationUpdateRequestsArgs = {
  data: Array<RequestUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  basket?: Maybe<Basket>;
  baskets?: Maybe<Array<Basket>>;
  basketsCount?: Maybe<Scalars['Int']>;
  brand?: Maybe<Brand>;
  brands?: Maybe<Array<Brand>>;
  brandsCount?: Maybe<Scalars['Int']>;
  favorite?: Maybe<Favorite>;
  favorites?: Maybe<Array<Favorite>>;
  favoritesCount?: Maybe<Scalars['Int']>;
  good?: Maybe<Good>;
  goods?: Maybe<Array<Good>>;
  goodsCount?: Maybe<Scalars['Int']>;
  image?: Maybe<Image>;
  images?: Maybe<Array<Image>>;
  imagesCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  request?: Maybe<Request>;
  requests?: Maybe<Array<Request>>;
  requestsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type QueryBasketArgs = {
  where: BasketWhereUniqueInput;
};


export type QueryBasketsArgs = {
  orderBy?: Array<BasketOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: BasketWhereInput;
};


export type QueryBasketsCountArgs = {
  where?: BasketWhereInput;
};


export type QueryBrandArgs = {
  where: BrandWhereUniqueInput;
};


export type QueryBrandsArgs = {
  orderBy?: Array<BrandOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: BrandWhereInput;
};


export type QueryBrandsCountArgs = {
  where?: BrandWhereInput;
};


export type QueryFavoriteArgs = {
  where: FavoriteWhereUniqueInput;
};


export type QueryFavoritesArgs = {
  orderBy?: Array<FavoriteOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: FavoriteWhereInput;
};


export type QueryFavoritesCountArgs = {
  where?: FavoriteWhereInput;
};


export type QueryGoodArgs = {
  where: GoodWhereUniqueInput;
};


export type QueryGoodsArgs = {
  orderBy?: Array<GoodOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: GoodWhereInput;
};


export type QueryGoodsCountArgs = {
  where?: GoodWhereInput;
};


export type QueryImageArgs = {
  where: ImageWhereUniqueInput;
};


export type QueryImagesArgs = {
  orderBy?: Array<ImageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ImageWhereInput;
};


export type QueryImagesCountArgs = {
  where?: ImageWhereInput;
};


export type QueryRequestArgs = {
  where: RequestWhereUniqueInput;
};


export type QueryRequestsArgs = {
  orderBy?: Array<RequestOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: RequestWhereInput;
};


export type QueryRequestsCountArgs = {
  where?: RequestWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Request = {
  __typename?: 'Request';
  data?: Maybe<Basket>;
  id: Scalars['ID'];
  rejectReason?: Maybe<Scalars['String']>;
  status?: Maybe<RequestStatusType>;
};

export type RequestCreateInput = {
  data?: InputMaybe<BasketRelateToOneForCreateInput>;
  rejectReason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<RequestStatusType>;
};

export type RequestOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  rejectReason?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
};

export enum RequestStatusType {
  Fulfilled = 'FULFILLED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type RequestStatusTypeNullableFilter = {
  equals?: InputMaybe<RequestStatusType>;
  in?: InputMaybe<Array<RequestStatusType>>;
  not?: InputMaybe<RequestStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<RequestStatusType>>;
};

export type RequestUpdateArgs = {
  data: RequestUpdateInput;
  where: RequestWhereUniqueInput;
};

export type RequestUpdateInput = {
  data?: InputMaybe<BasketRelateToOneForUpdateInput>;
  rejectReason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<RequestStatusType>;
};

export type RequestWhereInput = {
  AND?: InputMaybe<Array<RequestWhereInput>>;
  NOT?: InputMaybe<Array<RequestWhereInput>>;
  OR?: InputMaybe<Array<RequestWhereInput>>;
  data?: InputMaybe<BasketWhereInput>;
  id?: InputMaybe<IdFilter>;
  rejectReason?: InputMaybe<StringFilter>;
  status?: InputMaybe<RequestStatusTypeNullableFilter>;
};

export type RequestWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  basketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  favoritesId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  basketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  favoritesId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserOrderByInput = {
  basketId?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  favoritesId?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  basketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  favoritesId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  basketId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  favoritesId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type GoodsFragment = { __typename?: 'Good', id: string, title?: string, price?: number, isInBasket?: boolean, isInFavorite?: boolean, brand?: { __typename?: 'Brand', title?: string }, images?: Array<{ __typename?: 'Image', image?: { __typename?: 'ImageFieldOutput', id: string, url: string } }> };

export type UserFragment = { __typename?: 'User', id: string, name?: string, email?: string, basketId?: string, favoritesId?: string };

export type FavoriteUpdateMutationVariables = Exact<{
  where: FavoriteWhereUniqueInput;
  data: FavoriteUpdateInput;
}>;


export type FavoriteUpdateMutation = { __typename?: 'Mutation', updateFavorite?: { __typename?: 'Favorite', id: string } };

export type BasketUpdateMutationVariables = Exact<{
  where: BasketWhereUniqueInput;
  data: BasketUpdateInput;
}>;


export type BasketUpdateMutation = { __typename?: 'Mutation', updateBasket?: { __typename?: 'Basket', id: string } };

export type AuthMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'UserAuthenticationWithPasswordFailure', message: string } | { __typename?: 'UserAuthenticationWithPasswordSuccess', sessionToken: string, item: { __typename?: 'User', id: string, name?: string, email?: string, basketId?: string, favoritesId?: string } } };

export type RegistrationMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
}>;


export type RegistrationMutation = { __typename?: 'Mutation', registration?: { __typename?: 'UserAuthenticationWithPasswordFailure' } | { __typename?: 'UserAuthenticationWithPasswordSuccess', sessionToken: string, item: { __typename?: 'User', id: string, name?: string, email?: string, basketId?: string, favoritesId?: string } } };

export type BrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type BrandsQuery = { __typename?: 'Query', brands?: Array<{ __typename?: 'Brand', id: string, title?: string }> };

export type GoodsQueryVariables = Exact<{
  where?: GoodWhereInput;
  orderBy?: Array<GoodOrderByInput> | GoodOrderByInput;
  take?: InputMaybe<Scalars['Int']>;
  skip?: Scalars['Int'];
}>;


export type GoodsQuery = { __typename?: 'Query', goods?: Array<{ __typename?: 'Good', id: string, title?: string, price?: number, isInBasket?: boolean, isInFavorite?: boolean, brand?: { __typename?: 'Brand', title?: string }, images?: Array<{ __typename?: 'Image', image?: { __typename?: 'ImageFieldOutput', id: string, url: string } }> }> };

export type GoodQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GoodQuery = { __typename?: 'Query', good?: { __typename?: 'Good', description?: string, id: string, title?: string, price?: number, isInBasket?: boolean, isInFavorite?: boolean, brand?: { __typename?: 'Brand', title?: string }, images?: Array<{ __typename?: 'Image', image?: { __typename?: 'ImageFieldOutput', id: string, url: string } }> } };

export type GoodsCountQueryVariables = Exact<{
  where?: InputMaybe<GoodWhereInput>;
}>;


export type GoodsCountQuery = { __typename?: 'Query', goodsCount?: number };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, name?: string, email?: string, basketId?: string, favoritesId?: string } };

export type BasketQueryVariables = Exact<{
  where: BasketWhereUniqueInput;
}>;


export type BasketQuery = { __typename?: 'Query', basket?: { __typename?: 'Basket', goodsCount?: number, sum?: number, goods?: Array<{ __typename?: 'Good', id: string, title?: string, price?: number, isInBasket?: boolean, isInFavorite?: boolean, brand?: { __typename?: 'Brand', title?: string }, images?: Array<{ __typename?: 'Image', image?: { __typename?: 'ImageFieldOutput', id: string, url: string } }> }> } };

export type FavoriteQueryVariables = Exact<{
  where: FavoriteWhereUniqueInput;
}>;


export type FavoriteQuery = { __typename?: 'Query', favorite?: { __typename?: 'Favorite', goodsCount?: number, goods?: Array<{ __typename?: 'Good', id: string, title?: string, price?: number, isInBasket?: boolean, isInFavorite?: boolean, brand?: { __typename?: 'Brand', title?: string }, images?: Array<{ __typename?: 'Image', image?: { __typename?: 'ImageFieldOutput', id: string, url: string } }> }> } };

export const GoodsFragmentDoc = gql`
    fragment goods on Good {
  id
  title
  price
  brand {
    title
  }
  images {
    image {
      id
      url
    }
  }
  isInBasket
  isInFavorite
}
    `;
export const UserFragmentDoc = gql`
    fragment user on User {
  id
  name
  email
  basketId
  favoritesId
}
    `;
export const FavoriteUpdateDocument = gql`
    mutation FavoriteUpdate($where: FavoriteWhereUniqueInput!, $data: FavoriteUpdateInput!) {
  updateFavorite(where: $where, data: $data) {
    id
  }
}
    `;
export type FavoriteUpdateMutationFn = Apollo.MutationFunction<FavoriteUpdateMutation, FavoriteUpdateMutationVariables>;

/**
 * __useFavoriteUpdateMutation__
 *
 * To run a mutation, you first call `useFavoriteUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFavoriteUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [favoriteUpdateMutation, { data, loading, error }] = useFavoriteUpdateMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useFavoriteUpdateMutation(baseOptions?: Apollo.MutationHookOptions<FavoriteUpdateMutation, FavoriteUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FavoriteUpdateMutation, FavoriteUpdateMutationVariables>(FavoriteUpdateDocument, options);
      }
export type FavoriteUpdateMutationHookResult = ReturnType<typeof useFavoriteUpdateMutation>;
export type FavoriteUpdateMutationResult = Apollo.MutationResult<FavoriteUpdateMutation>;
export type FavoriteUpdateMutationOptions = Apollo.BaseMutationOptions<FavoriteUpdateMutation, FavoriteUpdateMutationVariables>;
export const BasketUpdateDocument = gql`
    mutation BasketUpdate($where: BasketWhereUniqueInput!, $data: BasketUpdateInput!) {
  updateBasket(where: $where, data: $data) {
    id
  }
}
    `;
export type BasketUpdateMutationFn = Apollo.MutationFunction<BasketUpdateMutation, BasketUpdateMutationVariables>;

/**
 * __useBasketUpdateMutation__
 *
 * To run a mutation, you first call `useBasketUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBasketUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [basketUpdateMutation, { data, loading, error }] = useBasketUpdateMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useBasketUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BasketUpdateMutation, BasketUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BasketUpdateMutation, BasketUpdateMutationVariables>(BasketUpdateDocument, options);
      }
export type BasketUpdateMutationHookResult = ReturnType<typeof useBasketUpdateMutation>;
export type BasketUpdateMutationResult = Apollo.MutationResult<BasketUpdateMutation>;
export type BasketUpdateMutationOptions = Apollo.BaseMutationOptions<BasketUpdateMutation, BasketUpdateMutationVariables>;
export const AuthDocument = gql`
    mutation Auth($email: String!, $password: String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      sessionToken
      item {
        ...user
      }
    }
    ... on UserAuthenticationWithPasswordFailure {
      message
    }
  }
}
    ${UserFragmentDoc}`;
export type AuthMutationFn = Apollo.MutationFunction<AuthMutation, AuthMutationVariables>;

/**
 * __useAuthMutation__
 *
 * To run a mutation, you first call `useAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authMutation, { data, loading, error }] = useAuthMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthMutation(baseOptions?: Apollo.MutationHookOptions<AuthMutation, AuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthMutation, AuthMutationVariables>(AuthDocument, options);
      }
export type AuthMutationHookResult = ReturnType<typeof useAuthMutation>;
export type AuthMutationResult = Apollo.MutationResult<AuthMutation>;
export type AuthMutationOptions = Apollo.BaseMutationOptions<AuthMutation, AuthMutationVariables>;
export const RegistrationDocument = gql`
    mutation Registration($email: String!, $password: String!, $name: String!) {
  registration(email: $email, name: $name, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      sessionToken
      item {
        ...user
      }
    }
  }
}
    ${UserFragmentDoc}`;
export type RegistrationMutationFn = Apollo.MutationFunction<RegistrationMutation, RegistrationMutationVariables>;

/**
 * __useRegistrationMutation__
 *
 * To run a mutation, you first call `useRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registrationMutation, { data, loading, error }] = useRegistrationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<RegistrationMutation, RegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegistrationMutation, RegistrationMutationVariables>(RegistrationDocument, options);
      }
export type RegistrationMutationHookResult = ReturnType<typeof useRegistrationMutation>;
export type RegistrationMutationResult = Apollo.MutationResult<RegistrationMutation>;
export type RegistrationMutationOptions = Apollo.BaseMutationOptions<RegistrationMutation, RegistrationMutationVariables>;
export const BrandsDocument = gql`
    query Brands {
  brands {
    id
    title
  }
}
    `;

/**
 * __useBrandsQuery__
 *
 * To run a query within a React component, call `useBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBrandsQuery(baseOptions?: Apollo.QueryHookOptions<BrandsQuery, BrandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
      }
export function useBrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandsQuery, BrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
        }
export type BrandsQueryHookResult = ReturnType<typeof useBrandsQuery>;
export type BrandsLazyQueryHookResult = ReturnType<typeof useBrandsLazyQuery>;
export type BrandsQueryResult = Apollo.QueryResult<BrandsQuery, BrandsQueryVariables>;
export const GoodsDocument = gql`
    query Goods($where: GoodWhereInput! = {}, $orderBy: [GoodOrderByInput!]! = [], $take: Int, $skip: Int! = 0) {
  goods(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    ...goods
  }
}
    ${GoodsFragmentDoc}`;

/**
 * __useGoodsQuery__
 *
 * To run a query within a React component, call `useGoodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoodsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGoodsQuery(baseOptions?: Apollo.QueryHookOptions<GoodsQuery, GoodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GoodsQuery, GoodsQueryVariables>(GoodsDocument, options);
      }
export function useGoodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GoodsQuery, GoodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GoodsQuery, GoodsQueryVariables>(GoodsDocument, options);
        }
export type GoodsQueryHookResult = ReturnType<typeof useGoodsQuery>;
export type GoodsLazyQueryHookResult = ReturnType<typeof useGoodsLazyQuery>;
export type GoodsQueryResult = Apollo.QueryResult<GoodsQuery, GoodsQueryVariables>;
export const GoodDocument = gql`
    query Good($id: ID!) {
  good(where: {id: $id}) {
    ...goods
    description
  }
}
    ${GoodsFragmentDoc}`;

/**
 * __useGoodQuery__
 *
 * To run a query within a React component, call `useGoodQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoodQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGoodQuery(baseOptions: Apollo.QueryHookOptions<GoodQuery, GoodQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GoodQuery, GoodQueryVariables>(GoodDocument, options);
      }
export function useGoodLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GoodQuery, GoodQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GoodQuery, GoodQueryVariables>(GoodDocument, options);
        }
export type GoodQueryHookResult = ReturnType<typeof useGoodQuery>;
export type GoodLazyQueryHookResult = ReturnType<typeof useGoodLazyQuery>;
export type GoodQueryResult = Apollo.QueryResult<GoodQuery, GoodQueryVariables>;
export const GoodsCountDocument = gql`
    query GoodsCount($where: GoodWhereInput = {}) {
  goodsCount(where: $where)
}
    `;

/**
 * __useGoodsCountQuery__
 *
 * To run a query within a React component, call `useGoodsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoodsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoodsCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGoodsCountQuery(baseOptions?: Apollo.QueryHookOptions<GoodsCountQuery, GoodsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GoodsCountQuery, GoodsCountQueryVariables>(GoodsCountDocument, options);
      }
export function useGoodsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GoodsCountQuery, GoodsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GoodsCountQuery, GoodsCountQueryVariables>(GoodsCountDocument, options);
        }
export type GoodsCountQueryHookResult = ReturnType<typeof useGoodsCountQuery>;
export type GoodsCountLazyQueryHookResult = ReturnType<typeof useGoodsCountLazyQuery>;
export type GoodsCountQueryResult = Apollo.QueryResult<GoodsCountQuery, GoodsCountQueryVariables>;
export const MeDocument = gql`
    query Me {
  authenticatedItem {
    ... on User {
      ...user
    }
  }
}
    ${UserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const BasketDocument = gql`
    query Basket($where: BasketWhereUniqueInput!) {
  basket(where: $where) {
    goods {
      ...goods
    }
    goodsCount
    sum
  }
}
    ${GoodsFragmentDoc}`;

/**
 * __useBasketQuery__
 *
 * To run a query within a React component, call `useBasketQuery` and pass it any options that fit your needs.
 * When your component renders, `useBasketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBasketQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBasketQuery(baseOptions: Apollo.QueryHookOptions<BasketQuery, BasketQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BasketQuery, BasketQueryVariables>(BasketDocument, options);
      }
export function useBasketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BasketQuery, BasketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BasketQuery, BasketQueryVariables>(BasketDocument, options);
        }
export type BasketQueryHookResult = ReturnType<typeof useBasketQuery>;
export type BasketLazyQueryHookResult = ReturnType<typeof useBasketLazyQuery>;
export type BasketQueryResult = Apollo.QueryResult<BasketQuery, BasketQueryVariables>;
export const FavoriteDocument = gql`
    query Favorite($where: FavoriteWhereUniqueInput!) {
  favorite(where: $where) {
    goods {
      ...goods
    }
    goodsCount
  }
}
    ${GoodsFragmentDoc}`;

/**
 * __useFavoriteQuery__
 *
 * To run a query within a React component, call `useFavoriteQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavoriteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavoriteQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFavoriteQuery(baseOptions: Apollo.QueryHookOptions<FavoriteQuery, FavoriteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FavoriteQuery, FavoriteQueryVariables>(FavoriteDocument, options);
      }
export function useFavoriteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FavoriteQuery, FavoriteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FavoriteQuery, FavoriteQueryVariables>(FavoriteDocument, options);
        }
export type FavoriteQueryHookResult = ReturnType<typeof useFavoriteQuery>;
export type FavoriteLazyQueryHookResult = ReturnType<typeof useFavoriteLazyQuery>;
export type FavoriteQueryResult = Apollo.QueryResult<FavoriteQuery, FavoriteQueryVariables>;