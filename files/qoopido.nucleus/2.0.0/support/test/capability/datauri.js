/*! /support/test/capability/datauri 2.0.0 | http://nucleus.qoopido.com | (c) 2016 Dirk Lueth */
!function(e){"use strict";function A(A){var t=A.defer(),d=e.createElement("img");return d.onload=function(){1===d.width&&1===d.height?t.resolve():t.reject(),delete d.onload},d.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t.pledge}provide(["/demand/pledge"],A)}(document);
//# sourceMappingURL=datauri.js.map
