/**
 * Created by Samuel on 6/4/2016.
 * Simple wrapper functions to produce shorter UUIDs for cookies, maybe everything?
 */

var anyBase = require('any-base');

var flickrBase58 = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
var cookieBase90 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~";

function shortenUUID (longId, translator) {
    return translator(longId.replace(/-/g,''));
}

function enlargeUUID(shortId, translator) {
    var uu1 = translator(shortId);
    var uuReg = /(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/;

    var leftPad = "";

    // Pad out UUIDs beginning with zeros (any number shorter than 32 characters of hex)
    for (var i = 0, len = 32-uu1.length; i < len; ++i) {
        leftPad += "0";
    }

    var uuPad = leftPad + uu1;

    var m = uuPad.match(uuReg);

    return [m[1], m[2], m[3], m[4], m[5]].join('-');
}

function MakeConvertor(toAlphabet) {

    var fromHex = anyBase(anyBase.HEX, toAlphabet);
    var toHex = anyBase(toAlphabet, anyBase.HEX);
    
    return {
        fromUUID: function(uuid) { return shortenUUID(uuid, fromHex); },
        toUUID: function(shortUuid) { return enlargeUUID(shortUuid, toHex); },
        fromHex: fromHex,
        toHex: toHex
    };
}

module.exports = {
    new: MakeConvertor,
    b58: MakeConvertor(flickrBase58),
    constants: {
        flickrBase58: flickrBase58,
        cookieBase90: cookieBase90
    }
};