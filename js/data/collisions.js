const collisionsLevel1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // each zero represents one cell within the tiled grid; the grid is 16 tiles wide (1024px) and 9 tiles high (576px)

const collisionsLevel2 = [292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 292, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 0,
    0, 292, 292, 292, 0, 0, 292, 292, 292, 292, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
    0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 0,
    0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0];

const collisionsLevel3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 250, 250, 250, 0,
    0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0,
    0, 250, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 0, 0,
    0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    