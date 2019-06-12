import * as moment from "moment";

const tokenTime = moment("2019-06-08T14:17:58.508Z");
const cutOffTime = moment().subtract(1, "day");
console.log("a", tokenTime.diff(cutOffTime));
console.log("b", cutOffTime.diff(tokenTime));
