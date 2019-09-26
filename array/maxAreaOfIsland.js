// 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。
// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)
// 示例 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// 对于上面这个给定矩阵应返回 6。注意答案不应该是11，因为岛屿只能包含水平或垂直的四个方向的‘1’。

// 示例 2:

// [[0,0,0,0,0,0,0,0]]
// 对于上面这个给定的矩阵, 返回 0。

// 注意: 给定的矩阵grid 的长度和宽度都不超过 50。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/max-area-of-island
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    var result = 0
    if (JSON.stringify(grid).indexOf('1') == -1) {
        return result
    }
    var xLen = grid.length
    var ylen = grid[0].length
    var island = []
    for (var x = 0; x < xLen; x++) {
        for (var y = 0; y < ylen; y++) {
            getIsland(x, y, grid, island)
        }
    }
    for(var index = 0, len = island.length; index < len; index++){
        debugger
        var xy = island[index].split(',')
        var area = checkedIsland(parseInt(xy[0]),parseInt(xy[1]),island)
        if(area > result){
            result = area
        }
    }
    return result
};
function getIsland(x, y, grid, island) {
    if (grid[x][y] == 1) {
        island.push(x+','+y)
    }
}
function checkedIsland(x,y,island){
    console.log(x+','+y)
    if(x > 50 || x < 0 || y > 50 || y < 0) return 0
    if(island.includes(x+','+y)){
        return 1 + checkedIsland(x+1,y,island) + checkedIsland(x,y+1,island) + checkedIsland(x-1,y,island) + checkedIsland(x,y-1,island)
    }
    return 0
}
// console.log(maxAreaOfIsland([
//     [0,0,1,0,0,0,0,1,0,0,0,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,1,1,0,1,0,0,0,0,0,0,0,0],
//     [0,1,0,0,1,1,0,0,1,0,1,0,0],
//     [0,1,0,0,1,1,0,0,1,1,1,0,0],
//     [0,0,0,0,0,0,0,0,0,0,1,0,0],
//     [0,0,0,0,0,0,0,1,1,1,0,0,0],
//     [0,0,0,0,0,0,0,1,1,0,0,0,0]
// ]))
console.log(maxAreaOfIsland(
    [[1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,0,1,1],
    [0,0,0,1,1]]
    ))
    // 暂未通过