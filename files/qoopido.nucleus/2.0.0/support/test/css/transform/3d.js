/*! /support/test/css/transform/3d 2.0.0 | http://nucleus.qoopido.com | (c) 2016 Dirk Lueth */
!function(e){"use strict";function t(t,r){var n=t.defer();return r.then(function(t){var r=e.createElement("div").style;try{r[t]="translate3d(0,0,0)"}catch(a){}/translate3d/.test(r[t])?n.resolve():n.reject()},n.reject),n.pledge}provide(["/demand/pledge","../transform"],t)}(document);
//# sourceMappingURL=3d.js.map
