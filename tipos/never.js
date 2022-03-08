"use strict";
const abc = (message) => {
    throw new Error(message);
};
abc('Auxilio!');
const cde = (message) => {
    if (false) {
        throw new Error(message);
    }
    return 1;
};
//# sourceMappingURL=never.js.map