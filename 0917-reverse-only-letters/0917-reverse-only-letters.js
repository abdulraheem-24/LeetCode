/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let r = s.length - 1;
    let l = 0;
    let ns = s.split("")
    while (r > l) {
        let lcode = s.charCodeAt(l);
        let rcode = s.charCodeAt(r);
        if (( lcode >= 65 && lcode <= 90 ) || ( lcode >= 97 && lcode <= 122 )) {
            if (( rcode >= 65 && rcode <= 90 ) || ( rcode >= 97 && rcode <= 122 ) ) {
                [ ns[l] , ns[r] ] = [ ns[r] , ns[l] ];
                l++; 
                r--;
            }else {
                r--;
            }
        }else {
            l++;
        }
    }
    s = ns.join("")
    return s;
};