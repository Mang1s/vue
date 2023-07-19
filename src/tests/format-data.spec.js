import { formatData } from "../helpers/format-data.js";

const objectWithHashes = [{
   '#first': 1,
   '#second': 2
}]

const objectWithoutHashes = [{
   first: 1,
   second: 2
}]

describe('formatData helper', () => {
   it('should correctly format data by deleting all # symbols from object keys', () => {
      expect(formatData(objectWithHashes)).toEqual(objectWithoutHashes)
   })
})