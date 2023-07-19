import { describe, it, expect } from "vitest";
import { formatData } from "../helpers/format-data";

const objectWithHashes = [{
   '#first': 1,
   '#second': 2
}]

const objectWithoutHashes = [{
   first: 1,
   second: 2
}]

describe('formatData', () => {
   it('qwewq', () => {
      expect(formatData(objectWithHashes)).toEqual(objectWithoutHashes)
   })
})