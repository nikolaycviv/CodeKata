exports.isPalindrome = function isPalindrome(aString) {
    // make sure we are dealing with a valid value for aString.
    if(typeof aString !== 'number' && typeof aString !== 'string') {
        return false;
    }

    //   if (typeof aString === "number") {
    //     aString = aString.toString();
    //   }

    // anything that is not a through z ( case insensitive and globally ) and 0 through 9 remove it.
    // then do a lower case.
    const cleanString = aString
        .toString()
        .replace(/[^a-z0-9]/gi, '')
        .toLowerCase();

    // using two vars i and j and going towards the center of the string.
    // this algorithm is not efficient because it overlaps. Big O (N)
    for(
        let i = cleanString.length - 1, j = 0;
        i > 0 && j < cleanString.length;
        i--, j++
    ) {
        if(cleanString.charAt(i) !== cleanString.charAt(j)) {
            return false;
        }
    }
    return true;
};
