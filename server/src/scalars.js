const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const resolverMap = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(valueFromClient) {
            return new Date(valueFromClient);
        },
        serialize(value) {
            if(value instanceof Date) {
                // value returned by the subscription is of type date
                return value.getTime();
            }

            // value returned from firestore
            return value.toMillis();
        },
        parseLiteral(astStringValue) {
            if (astStringValue.kind === Kind.INT) {
                return new Date(Number(astStringValue.value))
            }
            return null;
        },
    }),
};

module.exports = resolverMap;
