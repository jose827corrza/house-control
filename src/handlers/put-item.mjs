// Create clients and set shared const values outside of the handler.

// Create a DocumentClient that represents the query to add an item
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
const client = new DynamoDBClient({});

const ddbDocClient = DynamoDBDocumentClient.from(client);

// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE;

/**
 * A simple example includes a HTTP post method to add one item to a DynamoDB table.
 */
export const putItemHandler = async (event) => {

    // All log statements are written to CloudWatch
    console.info('received:', event);

    // Get id and name from the body of the request
    // const body = JSON.parse(event.body);


    // Creates a new item, or replaces an old item with a new item
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#put-property
    var params = {
        TableName : tableName,
        Item: { id : "1", name: 'test', test: 'IoTRule' }
    };

    // var paramsIot = {
    //     topic: "topic_2",
    //     payload: JSON.stringify(event),
    //     qos: 0
    // };

    try {
        const data = await ddbDocClient.send(new PutCommand(params));


        console.log(result);
        console.log("Success - item added or updated", data);
        console.log("DATA", event);
      } catch (err) {
        console.log("Error", err.stack);
      }

    const response = {
        statusCode: 200,
        body: "body"
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
};