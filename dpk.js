const crypto = require("crypto");

/* A function that takes an object event and returns the partition key
 * inside the object if it is valid, if it is invalid the function will
 * create a new valid partition key.
 * @param { event } - an object with the property "partitionKey"
 * @returns { candidate } - valid partition key
 */
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidatePartitionKey = event?.partitionKey;

  if (!candidatePartitionKey) {
    //if no input partition key provided, generate one
    const data = JSON.stringify(event);
    candidatePartitionKey = crypto
      .createHash("sha3-512")
      .update(data)
      .digest("hex");
  } else if (candidatePartitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    //ensure input partition key is under max length
    candidatePartitionKey = crypto
      .createHash("sha3-512")
      .update(candidatePartitionKey)
      .digest("hex");
  }

  //Ensure always returning type string
  return typeof candidatePartitionKey === "string"
    ? candidatePartitionKey
    : JSON.stringify(candidatePartitionKey);
};
