
export interface Snapshot {
  original?: any;
  resizable?: any;
}

export interface IntroVideo {
  id?: any;
  originalUrl?: any;
  hlsUrl?: any;
  dashUrl?: any;
  hasAudio?: any;
  snapshot: Snapshot;
}

export interface Source {
  sourceRecipeUrl: string;
  sourceFaviconUrl?: any;
  sourceHttpsOk: boolean;
  sourceInFrame: boolean;
  sourceDisplayName: string;
  proSource?: any;
  sourceSiteUrl: string;
  introVideo: IntroVideo;
  eyebrowText?: any;
  sourcePageUrl: string;
  marketingCopy?: any;
  sourceHttpOk: boolean;
  marketingImage?: any;
}

export interface Profile {
  profileName: string;
  displayName: string;
  siteUrl: string;
  pictureUrl: string;
  pageUrl: string;
  description: string;
  type: string;
  profileUrl: string;
}

export interface Display {
  displayName: string;
  images: string[];
  flag: string;
  source: Source;
  profiles: Profile[];
  displayPrepStepsInline: boolean;
  collections: any[];
}

export interface MetaTags {
  title: string;
  description: string;
}

export interface LinkTag {
  rel: string;
  href: string;
  hreflang: string;
}

export interface Web {
  noindex: boolean;
  "canonical-term": string;
  "meta-tags": MetaTags;
  "link-tags": LinkTag[];
  "image-url": string;
}

export interface SpotlightSearch {
  keywords: string[];
  noindex: boolean;
}

export interface Firebase {
  webUrl: string;
  appUrl: string;
  name: string;
  description: string;
}

export interface Seo {
  web: Web;
  spotlightSearch: SpotlightSearch;
  firebase: Firebase;
}

export interface Description {
  mobileSectionName: string;
  text: string;
  shortText?: any;
}

export interface Tags {
  course: Tag[];
  cuisine: Tag[];
  difficulty: Tag[];
  nutrition: Tag[];
  technique: Tag[];
  dish: Tag[];
  holiday: Tag[];
}

export interface QueryParams {
  start: number;
  authorId: string;
  id: string;
  apiFeedType: string;
}

export interface MoreContent {
  mobileSectionName: string;
  queryParams: QueryParams;
  feed: any[];
}

export interface Tag {
  "display-name": string;
  "tag-url": string;
}

export interface TagsAds {
  adtag: Tag[];
}

export interface Image {
  hostedLargeUrl: string;
  resizableImageUrl: string;
  resizableImageHeight: number;
  resizableImageWidth: number;
}

export interface Attribution {
  html: string;
  url: string;
  text: string;
  logo: string;
}

export interface Details {
  directionsUrl: string;
  totalTime: string;
  displayName: string;
  images: Image[];
  name: string;
  keywords: string[];
  brand?: any;
  id: string;
  attribution: Attribution;
  recipeId: string;
  numberOfServings: number;
  globalId: string;
  totalTimeInSeconds: number;
  rating: number;
}

export interface RelatedContent {
  mobileSectionName: string;
  queryParams: QueryParams;
  feed: any[];
}

export interface Unit {
  id: string;
  name: string;
  abbreviation: string;
  plural: string;
  pluralAbbreviation: string;
  kind: string;
  decimal: boolean;
}

export interface Metric {
  unit: Unit;
  quantity?: number;
}


export interface Imperial {
  unit: Unit;
  quantity?: number;
}

export interface Amount {
  metric: Metric;
  imperial: Imperial;
}

export interface RelatedRecipeSearchTerm {
  allowedIngredient: string;
}

export interface IngredientLine {
  category: string;
  amount: Amount;
  unit: string;
  ingredientId: string;
  categoryId: string;
  relatedRecipeSearchTerm: RelatedRecipeSearchTerm[];
  ingredient: string;
  id: string;
  remainder: string;
  quantity?: number;
  wholeLine: string;
}

export interface Reviews {
  mobileSectionName: string;
  totalReviewCount: number;
  averageRating?: number;
  reviews: any[];
  thisUserReview?: any;
  sortBy: string;
}


export interface RelatedProducts {
  mobileSectionName: string;
  queryParams: QueryParams;
  feed: any[];
}

export interface NutritionEstimate {
  attribute: string;
  value: number;
  unit: Unit;
  display: Display;
}



export interface Yums {
  count: number;
  ["this-user"]: string;
}

export interface VideoUrls {
  ios: string;
  android: string;
}

export interface Io {
  videoTypeCode: string;
  videoUrl: string;
  hasAudio: boolean;
}

export interface Android {
  videoTypeCode: string;
  videoUrl: string;
  hasAudio: boolean;
}

export interface VideoDetails {
  ios: Io[];
  android: Android[];
}

export interface Videos {
  snapshotUrl: string;
  videoUrls: VideoUrls;
  videoDetails: VideoDetails;
  originalVideoUrl: string;
  createTime: Date;
}

export interface Equipment {
  id: string;
  name: string;
}


export interface Video {
  snapshotUrl: string;
  videoUrls: VideoUrls;
  videoTypeCode: string;
  hasAudio: boolean;
  originalVideoUrl: string;
  createTime: Date;
}

export interface Timer {
  id: string;
  timerName: string;
  repeatable: boolean;
  maxRepeat: number;
  durationSeconds: number;
  priority: string;
  mappingNotificationId: string;
  finishMessage: string;
}

export interface PrerequisiteEvent {
  priority: string;
  message: string;
  mappingNotificationId: string;
  type: string;
}

export interface Step {
  displayText: string;
  equipment: Equipment[];
  ingredientLines: IngredientLine[];
  imageUrl: string;
  video: Video;
  tip: string;
  timers: Timer[];
  prerequisiteEvents: PrerequisiteEvent[];
}

export interface StepGroup {
  steps: Step[];
}

export interface Action {
  name: string;
  stepGroups: StepGroup[];
}

export interface GuidedVariation {
  id: string;
  default: boolean;
  variationAttributes: any[];
  connected: boolean;
  actions: Action[];
  applianceUnitTypeCode: string;
}

export interface Content {
  description: Description;
  urbSubmitters: any[];
  tags: Tags;
  preparationSteps: string[];
  moreContent: MoreContent;
  tagsAds: TagsAds;
  details: Details;
  relatedContent: RelatedContent;
  ingredientLines: IngredientLine[];
  unitSystem: string;
  reviews: Reviews;
  relatedProducts: RelatedProducts;
  preparationStepCount: number;
  nutrition: Tag;
  yums: Yums;
  videos: Videos;
  guidedVariations: GuidedVariation[];
}


export interface Feed {
  display: Display;
  type: string;
  promoted: boolean;
  proRecipe: boolean;
  recipeType: string[];
  "tracking-id": string;
  seo: Seo;
  content: Content;
}


export interface RootObjectFeedList {
  feed: Feed[];
  seo: Seo;
}


