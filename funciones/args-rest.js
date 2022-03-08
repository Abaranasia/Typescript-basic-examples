"use strict";
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
})();
//# sourceMappingURL=args-rest.js.map