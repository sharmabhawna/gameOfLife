const {deepEqual} = require("assert");
const { initCells, modifyStatus, extractCellStatus, extractAdjoinCells } = require("../src/library.js");

describe('initCells', function() {
  it('should return array matrix filled with D', function() {
    deepEqual(initCells(1,1), [["D"]]); 
    deepEqual(initCells(2,1), [["D"],["D"]]); 
    deepEqual(initCells(1,2), [["D","D"]]); 
    deepEqual(initCells(2,2), [["D","D"],["D","D"]]); 
  });

  it('should return empty array when any input is zero', function(){
    deepEqual(initCells(0,1), []);
    deepEqual(initCells(1,0), [[]]);
    deepEqual(initCells(0,0), []);
  });
});

describe('modifyStatus', function() {
  it('should modify array status on given positions', function() {
    deepEqual(modifyStatus([["D"]],[[0,0]]),[["L"]]);
    deepEqual(modifyStatus([["D"],["D"]],[[0,0]]),[["L"],["D"]]);
    deepEqual(modifyStatus([["D","D"]],[[0,1]]),[["D","L"]]);
    deepEqual(modifyStatus([["D","D"]],[[0,0]]),[["L","D"]]);
    deepEqual(modifyStatus([["D","D"],["D","D"]],[[0,1],[1,0]]),[["D","L"],["L","D"]]);
  });
});

describe("extractCellStatus", function() {
  it("should extract status of given positions", function() {
    deepEqual(extractCellStatus([["D"]],[[0,0]]), ["D"]);
    deepEqual(extractCellStatus([["L"],["D"]],[[0,0]]), ["L"]);
    deepEqual(extractCellStatus([["L"],["D"]],[[1,0]]), ["D"]);
    deepEqual(extractCellStatus([["L","D"]],[[0,0]]), ["L"]);
    deepEqual(extractCellStatus([["L","D"]],[[0,1]]), ["D"]);
    deepEqual(extractCellStatus([["L","D"],["D","L"]],[[0,1],[1,0]]), ["D","D"]);
  });
});

describe("extractAdjoinCells", function() {
  it('it Should return adjoin cells of given position', function() {
    deepEqual(extractAdjoinCells([1,0]), [[0,0],[0,1],[1,1],[2,0],[2,1]]);
    deepEqual(extractAdjoinCells([1,1]), [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]);
    deepEqual(extractAdjoinCells([0,1]), [[0,0],[0,2],[1,0],[1,1],[1,2]]);
    deepEqual(extractAdjoinCells([0,0]), [[0,1],[1,0],[1,1]]);
    deepEqual(extractAdjoinCells([3,0]), [[2,0],[2,1],[3,1],[4,0],[4,1]]);
  });
});
