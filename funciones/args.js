"use strict";
(() => {
    const fullName = (firstname, lastName) => {
        return `${firstname} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    const fullName2 = (firstname, lastName, upper = false) => {
        if (upper) {
            return `${firstname} ${lastName || '----'}`.toUpperCase();
        }
        else {
            return `${firstname} ${lastName || '----'}`;
        }
    };
})();
//# sourceMappingURL=args.js.map