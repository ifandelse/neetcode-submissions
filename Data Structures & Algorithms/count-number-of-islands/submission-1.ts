type Cell = {
    row: number;
    col: number;
};

const DIRECTIONS = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1],  // right
];

class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const visited: boolean[][] = Array.from(
            { length: grid.length }, 
            () => Array.from({length: grid[0].length}, () => false)
        );
        let islandCount = 0;

        for(let r = 0; r < grid.length; r++) {
            for(let c = 0; c < grid[r].length; c++) {
                if(!visited[r][c] && grid[r][c] === "1") {
                    islandCount += 1;
                    this.visitIsland(grid, r, c, visited);
                }
            }
        }

        return islandCount;
    }

    visitIsland(grid: string[][], startRow: number, startCol:number, visited: boolean[][] ) {
        const queue: Cell[] = [];

        visited[startRow][startCol] = true;
        queue.push({ row: startRow, col: startCol });

        let queueIndex = 0;

        while (queueIndex < queue.length) {
            // take one Cell out of this queue, but avoiding shift to stay with O(1)
            const current = queue[queueIndex];
            queueIndex += 1;
            // inspect its four neighbors
            for(const [dirRow, dirCol] of DIRECTIONS) {
                const neighborRow = current.row + dirRow;
                const neighborCol = current.col + dirCol;
                const isNeighborRowValid = neighborRow >= 0 && neighborRow < grid.length;
                if(isNeighborRowValid) {
                    const isNeighborColValid = neighborCol >= 0 && neighborCol < grid[neighborRow].length;
                    if (isNeighborColValid) {
                        const isLand = grid[neighborRow][neighborCol] === "1";
                        const hasVisited = visited[neighborRow][neighborCol];
                        if(isLand && !hasVisited) {
                            // mark it visited & add it to the queue
                            visited[neighborRow][neighborCol] = true;
                            queue.push({ row: neighborRow, col: neighborCol });
                        }
                    }
                }

            }
        }
    }
}
