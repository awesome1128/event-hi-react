import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLBoolean as BoolType,
  GraphQLList as ListType,
  GraphQLInt as IntType,
  GraphQLFloat as FloatType,
  GraphQLNonNull as NonNull,
} from 'graphql';

import TicketType from './TicketType.js';

const LocationType = new ObjectType({
  name: 'Location',
  fields: {
    type: { type: StringType },
    addressName: { type: StringType },
    fullLocation: { type: StringType },
    streetAddress: { type: StringType },
    addressLocality: { type: StringType },
    addressRegion: { type: StringType },
    addressCountry: { type: StringType },
    postalCode: { type: StringType },
    showOnSite: { type: BoolType },
    showOnTicket: { type: BoolType },
  },
});

const RelatedEventType = new ObjectType({
  name: 'RelatedEvent',
  fields: {
    id: { type: new NonNull(ID) },
    slug: { type: StringType },
    name: { type: StringType },
    canceled: { type: BoolType },
    description: { type: StringType },
    contactEmail: { type: StringType },
    categories: { type: new ListType(StringType) },
    timezone: { type: StringType },
    type: { type: StringType },
    organizer: { type: StringType },
    hostname: { type: StringType },
    isFavorite: { type: BoolType },
    location: { type: StringType },
    schedule: { type: StringType },
    private: { type: BoolType },
    image: { type: StringType },
    followers: { type: IntType },
    tickets: { type: new ListType(TicketType) },
    lowestTicketPrice: { type: StringType },
    refundPolicy: { type: IntType },
  },
});

const EventDetailType = new ObjectType({
  name: 'EventDetail',
  fields: {
    id: { type: new NonNull(ID) },
    name: { type: new NonNull(StringType) },
    slug: { type: new NonNull(StringType) },
    slugHistory: { type: new ListType(StringType) },
    description: { type: StringType },
    contactEmail: { type: StringType },
    categories: { type: new ListType(StringType) },
    type: { type: new NonNull(StringType) },
    organizer: { type: new NonNull(StringType) },
    hostname: { type: new NonNull(StringType) },
    timezone: { type: StringType },
    allowShare: { type: BoolType },
    facebookUrl: { type: StringType },
    twitterUrl: { type: StringType },
    instagramUrl: { type: StringType },
    websiteUrl: { type: StringType },
    hideLocation: { type: BoolType },
    published: { type: BoolType },
    private: { type: BoolType },
    canceled: { type: BoolType },
    isFavorite: { type: BoolType },
    location: { type: StringType },
    locationData: { type: LocationType },
    startDate: { type: new NonNull(StringType) },
    endDate: { type: new NonNull(StringType) },
    image: { type: StringType },
    followers: { type: IntType },
    tickets: { type: new ListType(TicketType) },
    lowestTicketPrice: { type: StringType },
    video_url: { type: StringType },
    relatedEvents: { type: new ListType(RelatedEventType) },
    refundPolicy: { type: IntType },
    cannabisConsumption: { type: BoolType },
  },
});

export default EventDetailType;
