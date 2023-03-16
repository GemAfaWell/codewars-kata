function basicOp(operation, value1, value2)
{
  // turn values into numbers
  value1 = Number(value1);
  value2 = Number(value2);
  // return value of result
  result = (`${value1} ${operation} ${value2}`);
  return eval(result);
}
