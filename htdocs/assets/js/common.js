"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
    } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.1",
        m = function m(a, b) {
        return new m.fn.init(a, b);
    },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function q(a, b) {
        return b.toUpperCase();
    };m.fn = m.prototype = { jquery: l, constructor: m, selector: "", length: 0, toArray: function toArray() {
            return d.call(this);
        }, get: function get(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        }, pushStack: function pushStack(a) {
            var b = m.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
        }, each: function each(a, b) {
            return m.each(this, a, b);
        }, map: function map(a) {
            return this.pushStack(m.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        }, slice: function slice() {
            return this.pushStack(d.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor(null);
        }, push: f, sort: c.sort, splice: c.splice }, m.extend = m.fn.extend = function () {
        var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (e = arguments[h])) for (d in e) {
                a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            }
        }return g;
    }, m.extend({ expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
            throw new Error(a);
        }, noop: function noop() {}, isFunction: function isFunction(a) {
            return "function" === m.type(a);
        }, isArray: Array.isArray || function (a) {
            return "array" === m.type(a);
        }, isWindow: function isWindow(a) {
            return null != a && a == a.window;
        }, isNumeric: function isNumeric(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0;
        }, isEmptyObject: function isEmptyObject(a) {
            var b;for (b in a) {
                return !1;
            }return !0;
        }, isPlainObject: function isPlainObject(a) {
            var b;if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (c) {
                return !1;
            }if (k.ownLast) for (b in a) {
                return j.call(a, b);
            }for (b in a) {}return void 0 === b || j.call(a, b);
        }, type: function type(a) {
            return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? h[i.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
        }, globalEval: function globalEval(b) {
            b && m.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b);
            })(b);
        }, camelCase: function camelCase(a) {
            return a.replace(o, "ms-").replace(p, q);
        }, nodeName: function nodeName(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        }, each: function each(a, b, c) {
            var d,
                e = 0,
                f = a.length,
                g = r(a);if (c) {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.apply(a[e], c), d === !1) break;
                    }
                } else for (e in a) {
                    if (d = b.apply(a[e], c), d === !1) break;
                }
            } else if (g) {
                for (; f > e; e++) {
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
                }
            } else for (e in a) {
                if (d = b.call(a[e], e, a[e]), d === !1) break;
            }return a;
        }, trim: function trim(a) {
            return null == a ? "" : (a + "").replace(n, "");
        }, makeArray: function makeArray(a, b) {
            var c = b || [];return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
        }, inArray: function inArray(a, b, c) {
            var d;if (b) {
                if (g) return g.call(b, a, c);for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
                    if (c in b && b[c] === a) return c;
                }
            }return -1;
        }, merge: function merge(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;while (c > d) {
                a[e++] = b[d++];
            }if (c !== c) while (void 0 !== b[d]) {
                a[e++] = b[d++];
            }return a.length = e, a;
        }, grep: function grep(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f]);
            }return e;
        }, map: function map(a, b, c) {
            var d,
                f = 0,
                g = a.length,
                h = r(a),
                i = [];if (h) for (; g > f; f++) {
                d = b(a[f], f, c), null != d && i.push(d);
            } else for (f in a) {
                d = b(a[f], f, c), null != d && i.push(d);
            }return e.apply([], i);
        }, guid: 1, proxy: function proxy(a, b) {
            var c, e, f;return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function e() {
                return a.apply(b || this, c.concat(d.call(arguments)));
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
        }, now: function now() {
            return +new Date();
        }, support: k }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });function r(a) {
        var b = a.length,
            c = m.type(a);return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }var s = function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + -new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = gb(),
            z = gb(),
            A = gb(),
            B = function B(a, b) {
            return a === b && (l = !0), 0;
        },
            C = "undefined",
            D = 1 << 31,
            E = {}.hasOwnProperty,
            F = [],
            G = F.pop,
            H = F.push,
            I = F.push,
            J = F.slice,
            K = F.indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++) {
                if (this[b] === a) return b;
            }return -1;
        },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = N.replace("w", "w#"),
            P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            S = new RegExp("^" + M + "*," + M + "*"),
            T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(Q),
            W = new RegExp("^" + O + "$"),
            X = { ID: new RegExp("^#(" + N + ")"), CLASS: new RegExp("^\\.(" + N + ")"), TAG: new RegExp("^(" + N.replace("w", "w*") + ")"), ATTR: new RegExp("^" + P), PSEUDO: new RegExp("^" + Q), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + L + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            db = function db(a, b, c) {
            var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        };try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType;
        } catch (eb) {
            I = { apply: F.length ? function (a, b) {
                    H.apply(a, J.call(b));
                } : function (a, b) {
                    var c = a.length,
                        d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
                } };
        }function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;if (1 !== (k = b.nodeType) && 9 !== k) return [];if (p && !e) {
                if (f = _.exec(a)) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;if (h.id === j) return d.push(h), d;
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
                } else {
                    if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d;
                }if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) {
                            o[l] = s + qb(o[l]);
                        }w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",");
                    }if (x) try {
                        return I.apply(d, w.querySelectorAll(x)), d;
                    } catch (y) {} finally {
                        r || b.removeAttribute("id");
                    }
                }
            }return i(a.replace(R, "$1"), b, d, e);
        }function gb() {
            var a = [];function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }return b;
        }function hb(a) {
            return a[u] = !0, a;
        }function ib(a) {
            var b = n.createElement("div");try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }function jb(a, b) {
            var c = a.split("|"),
                e = a.length;while (e--) {
                d.attrHandle[c[e]] = b;
            }
        }function kb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);if (d) return d;if (c) while (c = c.nextSibling) {
                if (c === b) return -1;
            }return a ? 1 : -1;
        }function lb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
            };
        }function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
            };
        }function nb(a) {
            return hb(function (b) {
                return b = +b, hb(function (c, d) {
                    var e,
                        f = a([], c.length, b),
                        g = f.length;while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                    }
                });
            });
        }function ob(a) {
            return a && _typeof(a.getElementsByTagName) !== C && a;
        }c = fb.support = {}, f = fb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
        }, m = fb.setDocument = function (a) {
            var b,
                e = a ? a.ownerDocument || a : v,
                g = e.defaultView;return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
                m();
            }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
                m();
            })), c.attributes = ib(function (a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ib(function (a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length;
            }), c.getById = ib(function (a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function (a, b) {
                if (_typeof(b.getElementById) !== C && p) {
                    var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(cb, db);return function (a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);return function (a) {
                    var c = _typeof(a.getAttributeNode) !== C && a.getAttributeNode("id");return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return _typeof(b.getElementsByTagName) !== C ? b.getElementsByTagName(a) : void 0;
            } : function (a, b) {
                var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c);
                    }return d;
                }return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return _typeof(b.getElementsByClassName) !== C && p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked");
            }), ib(function (a) {
                var b = e.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b) while (b = b.parentNode) {
                    if (b === a) return !0;
                }return !1;
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b) return l = !0, 0;var c,
                    d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;if (f === g) return kb(a, b);c = a;while (c = c.parentNode) {
                    h.unshift(c);
                }c = b;while (c = c.parentNode) {
                    i.unshift(c);
                }while (h[d] === i[d]) {
                    d++;
                }return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, e) : n;
        }, fb.matches = function (a, b) {
            return fb(a, null, null, b);
        }, fb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}return fb(b, n, null, [a]).length > 0;
        }, fb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, fb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
                f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, fb.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, fb.uniqueSort = function (a) {
            var b,
                d = [],
                e = 0,
                f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f));
                }while (e--) {
                    a.splice(d[e], 1);
                }
            }return k = null, a;
        }, e = fb.getText = function (a) {
            var b,
                c = "",
                d = 0,
                f = a.nodeType;if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a);
                    }
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) {
                c += e(b);
            }return c;
        }, d = fb.selectors = { cacheLength: 50, createPseudo: hb, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                }, CHILD: function CHILD(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a;
                }, PSEUDO: function PSEUDO(a) {
                    var b,
                        c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                } }, filter: { TAG: function TAG(a) {
                    var b = a.replace(cb, db).toLowerCase();return "*" === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                }, CLASS: function CLASS(a) {
                    var b = y[a + " "];return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || _typeof(a.getAttribute) !== C && a.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(a, b, c) {
                    return function (d) {
                        var e = fb.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                }, CHILD: function CHILD(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;if (q) {
                            if (f) {
                                while (p) {
                                    l = b;while (l = l[p]) {
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    }o = p = "only" === a && !o && "nextSibling";
                                }return !0;
                            }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];break;
                                    }
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            }return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                }, PSEUDO: function PSEUDO(a, b) {
                    var c,
                        e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
                        var d,
                            f = e(a, b),
                            g = f.length;while (g--) {
                            d = K.call(a, f[g]), a[d] = !(c[d] = f[g]);
                        }
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                } }, pseudos: { not: hb(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));return d[u] ? hb(function (a, b, c, e) {
                        var f,
                            g = d(a, null, e, []),
                            h = a.length;while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f));
                        }
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop();
                    };
                }), has: hb(function (a) {
                    return function (b) {
                        return fb(a, b).length > 0;
                    };
                }), contains: hb(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }), lang: hb(function (a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                        var c;do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
                    };
                }), target: function target(b) {
                    var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
                }, root: function root(a) {
                    return a === o;
                }, focus: function focus(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                }, enabled: function enabled(a) {
                    return a.disabled === !1;
                }, disabled: function disabled(a) {
                    return a.disabled === !0;
                }, checked: function checked(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
                }, selected: function selected(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                }, empty: function empty(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) return !1;
                    }return !0;
                }, parent: function parent(a) {
                    return !d.pseudos.empty(a);
                }, header: function header(a) {
                    return Z.test(a.nodeName);
                }, input: function input(a) {
                    return Y.test(a.nodeName);
                }, button: function button(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
                }, text: function text(a) {
                    var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                }, first: nb(function () {
                    return [0];
                }), last: nb(function (a, b) {
                    return [b - 1];
                }), eq: nb(function (a, b, c) {
                    return [0 > c ? c + b : c];
                }), even: nb(function (a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), odd: nb(function (a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), lt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d);
                    }return a;
                }), gt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d);
                    }return a;
                }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
            d.pseudos[b] = lb(b);
        }for (b in { submit: !0, reset: !0 }) {
            d.pseudos[b] = mb(b);
        }function pb() {}pb.prototype = d.filters = d.pseudos, d.setFilters = new pb(), g = fb.tokenize = function (a, b) {
            var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) {
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                }if (!c) break;
            }return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
        };function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value;
            }return d;
        }function rb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;return b.first ? function (b, c, f) {
                while (b = b[d]) {
                    if (1 === b.nodeType || e) return a(b, c, f);
                }
            } : function (b, c, g) {
                var h,
                    i,
                    j = [w, f];if (g) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                    }
                } else while (b = b[d]) {
                    if (1 === b.nodeType || e) {
                        if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];if (i[d] = j, j[2] = a(b, c, g)) return !0;
                    }
                }
            };
        }function sb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;while (e--) {
                    if (!a[e](b, c, d)) return !1;
                }return !0;
            } : a[0];
        }function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                fb(a, b[d], c);
            }return c;
        }function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            }return g;
        }function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
                var j,
                    k,
                    l,
                    m = [],
                    n = [],
                    o = g.length,
                    p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                }if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;while (k--) {
                                (l = r[k]) && j.push(q[k] = l);
                            }e(null, r = [], j, i);
                        }k = r.length;while (k--) {
                            (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                        }
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r);
            });
        }function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {
                return a === b;
            }, h, !0), l = rb(function (a) {
                return K.call(b, a) > -1;
            }, h, !0), m = [function (a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
            }]; f > i; i++) {
                if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) break;
                        }return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a));
                    }m.push(c);
                }
            }return sb(m);
        }function xb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function f(_f, g, h, i, k) {
                var l,
                    m,
                    o,
                    p = 0,
                    q = "0",
                    r = _f && [],
                    s = [],
                    t = j,
                    u = _f || e && d.find.TAG("*", k),
                    v = w += null == t ? 1 : Math.random() || .1,
                    x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;while (o = a[m++]) {
                            if (o(l, g, h)) {
                                i.push(l);break;
                            }
                        }k && (w = v);
                    }c && ((l = !o && l) && p--, _f && r.push(l));
                }if (p += q, c && q !== p) {
                    m = 0;while (o = b[m++]) {
                        o(r, s, g, h);
                    }if (_f) {
                        if (p > 0) while (q--) {
                            r[q] || s[q] || (s[q] = G.call(i));
                        }s = ub(s);
                    }I.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
                }return k && (w = v, j = t), r;
            };return c ? hb(f) : f;
        }return h = fb.compile = function (a, b) {
            var c,
                d = [],
                e = [],
                f = A[a + " "];if (!f) {
                b || (b = g(a)), c = b.length;while (c--) {
                    f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                }f = A(a, xb(e, d)), f.selector = a;
            }return f;
        }, i = fb.select = function (a, b, e, f) {
            var i,
                j,
                k,
                l,
                m,
                n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;break;
                    }
                }
            }return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ib(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || jb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ib(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || jb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ib(function (a) {
            return null == a.getAttribute("disabled");
        }) || jb(L, function (a, b, c) {
            var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), fb;
    }(a);m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c;
        });if (b.nodeType) return m.grep(a, function (a) {
            return a === b !== c;
        });if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);b = m.filter(b, a);
        }return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c;
        });
    }m.filter = function (a, b, c) {
        var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
            return 1 === a.nodeType;
        }));
    }, m.fn.extend({ find: function find(a) {
            var b,
                c = [],
                d = this,
                e = d.length;if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
                for (b = 0; e > b; b++) {
                    if (m.contains(d[b], this)) return !0;
                }
            }));for (b = 0; e > b; b++) {
                m.find(a, d[b], c);
            }return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
        }, filter: function filter(a) {
            return this.pushStack(w(this, a || [], !1));
        }, not: function not(a) {
            return this.pushStack(w(this, a || [], !0));
        }, is: function is(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length;
        } });var x,
        y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function (a, b) {
        var c, d;if (!a) return this;if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);if (c[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) for (c in b) {
                    m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                }return this;
            }if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2]) return x.find(a);this.length = 1, this[0] = d;
            }return this.context = y, this.selector = a, this;
        }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this));
    };A.prototype = m.fn, x = m(y);var B = /^(?:parents|prev(?:Until|All))/,
        C = { children: !0, contents: !0, next: !0, prev: !0 };m.extend({ dir: function dir(a, b, c) {
            var d = [],
                e = a[b];while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) {
                1 === e.nodeType && d.push(e), e = e[b];
            }return d;
        }, sibling: function sibling(a, b) {
            for (var c = []; a; a = a.nextSibling) {
                1 === a.nodeType && a !== b && c.push(a);
            }return c;
        } }), m.fn.extend({ has: function has(a) {
            var b,
                c = m(a, this),
                d = c.length;return this.filter(function () {
                for (b = 0; d > b; b++) {
                    if (m.contains(this, c[b])) return !0;
                }
            });
        }, closest: function closest(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);break;
                    }
                }
            }return this.pushStack(f.length > 1 ? m.unique(f) : f);
        }, index: function index(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
        }, addBack: function addBack(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        } });function D(a, b) {
        do {
            a = a[b];
        } while (a && 1 !== a.nodeType);return a;
    }m.each({ parent: function parent(a) {
            var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
        }, parents: function parents(a) {
            return m.dir(a, "parentNode");
        }, parentsUntil: function parentsUntil(a, b, c) {
            return m.dir(a, "parentNode", c);
        }, next: function next(a) {
            return D(a, "nextSibling");
        }, prev: function prev(a) {
            return D(a, "previousSibling");
        }, nextAll: function nextAll(a) {
            return m.dir(a, "nextSibling");
        }, prevAll: function prevAll(a) {
            return m.dir(a, "previousSibling");
        }, nextUntil: function nextUntil(a, b, c) {
            return m.dir(a, "nextSibling", c);
        }, prevUntil: function prevUntil(a, b, c) {
            return m.dir(a, "previousSibling", c);
        }, siblings: function siblings(a) {
            return m.sibling((a.parentNode || {}).firstChild, a);
        }, children: function children(a) {
            return m.sibling(a.firstChild);
        }, contents: function contents(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
        } }, function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e);
        };
    });var E = /\S+/g,
        F = {};function G(a) {
        var b = F[a] = {};return m.each(a.match(E) || [], function (a, c) {
            b[c] = !0;
        }), b;
    }m.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);var b,
            c,
            d,
            e,
            f,
            g,
            h = [],
            i = !a.once && [],
            j = function j(l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
                if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    c = !1;break;
                }
            }b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
        },
            k = { add: function add() {
                if (h) {
                    var d = h.length;!function f(b) {
                        m.each(b, function (b, c) {
                            var d = m.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c);
                        });
                    }(arguments), b ? e = h.length : c && (g = d, j(c));
                }return this;
            }, remove: function remove() {
                return h && m.each(arguments, function (a, c) {
                    var d;while ((d = m.inArray(c, h, d)) > -1) {
                        h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
                    }
                }), this;
            }, has: function has(a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
            }, empty: function empty() {
                return h = [], e = 0, this;
            }, disable: function disable() {
                return h = i = c = void 0, this;
            }, disabled: function disabled() {
                return !h;
            }, lock: function lock() {
                return i = void 0, c || k.disable(), this;
            }, locked: function locked() {
                return !i;
            }, fireWith: function fireWith(a, c) {
                return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this;
            }, fire: function fire() {
                return k.fireWith(this, arguments), this;
            }, fired: function fired() {
                return !!d;
            } };return k;
    }, m.extend({ Deferred: function Deferred(a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]],
                c = "pending",
                d = { state: function state() {
                    return c;
                }, always: function always() {
                    return e.done(arguments).fail(arguments), this;
                }, then: function then() {
                    var a = arguments;return m.Deferred(function (c) {
                        m.each(b, function (b, f) {
                            var g = m.isFunction(a[b]) && a[b];e[f[1]](function () {
                                var a = g && g.apply(this, arguments);a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                            });
                        }), a = null;
                    }).promise();
                }, promise: function promise(a) {
                    return null != a ? m.extend(a, d) : d;
                } },
                e = {};return d.pipe = d.then, m.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];d[f[1]] = g.add, h && g.add(function () {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        }, when: function when(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function h(a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            },
                i,
                j,
                k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
                c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            }return f || g.resolveWith(k, c), g.promise();
        } });var H;m.fn.ready = function (a) {
        return m.ready.promise().done(a), this;
    }, m.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
            a ? m.readyWait++ : m.ready(!0);
        }, ready: function ready(a) {
            if (a === !0 ? ! --m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")));
            }
        } });function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
    }function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready());
    }m.ready.promise = function (b) {
        if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);var c = !1;try {
                c = null == a.frameElement && y.documentElement;
            } catch (d) {}c && c.doScroll && !function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left");
                    } catch (a) {
                        return setTimeout(e, 50);
                    }I(), m.ready();
                }
            }();
        }return H.promise(b);
    };var K = "undefined",
        L;for (L in m(k)) {
        break;
    }k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
        var a, b, c, d;c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), _typeof(b.style.zoom) !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
    }), function () {
        var a = y.createElement("div");if (null == k.deleteExpando) {
            k.deleteExpando = !0;try {
                delete a.test;
            } catch (b) {
                k.deleteExpando = !1;
            }
        }a = null;
    }(), m.acceptData = function (a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()],
            c = +a.nodeType || 1;return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
    };var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
                } catch (e) {}m.data(a, b, c);
            } else c = void 0;
        }return c;
    }function P(a) {
        var b;for (b in a) {
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        }return !0;
    }function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f,
                g,
                h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f;
        }
    }function R(a, b, c) {
        if (m.acceptData(a)) {
            var d,
                e,
                f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;while (e--) {
                        delete d[b[e]];
                    }if (c ? !P(d) : !m.isEmptyObject(d)) return;
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
            }
        }
    }m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function hasData(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
        }, data: function data(a, b, c) {
            return Q(a, b, c);
        }, removeData: function removeData(a, b) {
            return R(a, b);
        }, _data: function _data(a, b, c) {
            return Q(a, b, c, !0);
        }, _removeData: function _removeData(a, b) {
            return R(a, b, !0);
        } }), m.fn.extend({ data: function data(a, b) {
            var c,
                d,
                e,
                f = this[0],
                g = f && f.attributes;if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    }m._data(f, "parsedAttrs", !0);
                }return e;
            }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
                m.data(this, a);
            }) : arguments.length > 1 ? this.each(function () {
                m.data(this, a, b);
            }) : f ? O(f, a, m.data(f, a)) : void 0;
        }, removeData: function removeData(a) {
            return this.each(function () {
                m.removeData(this, a);
            });
        } }), m.extend({ queue: function queue(a, b, c) {
            var d;return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0;
        }, dequeue: function dequeue(a, b) {
            b = b || "fx";var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function g() {
                m.dequeue(a, b);
            };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        }, _queueHooks: function _queueHooks(a, b) {
            var c = b + "queueHooks";return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function () {
                    m._removeData(a, b + "queue"), m._removeData(a, c);
                }) });
        } }), m.fn.extend({ queue: function queue(a, b) {
            var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = m.queue(this, a, b);m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
            });
        }, dequeue: function dequeue(a) {
            return this.each(function () {
                m.dequeue(this, a);
            });
        }, clearQueue: function clearQueue(a) {
            return this.queue(a || "fx", []);
        }, promise: function promise(a, b) {
            var c,
                d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function h() {
                --d || e.resolveWith(f, [f]);
            };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
                c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            }return h(), e.promise(b);
        } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function U(a, b) {
        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a);
    },
        V = m.access = function (a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;if ("object" === m.type(c)) {
            e = !0;for (h in c) {
                m.access(a, b, h, c[h], !0, f, g);
            }
        } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
            return j.call(m(a), c);
        })), b)) for (; i > h; h++) {
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
        W = /^(?:checkbox|radio)$/i;!function () {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
            k.noCloneEvent = !1;
        }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;try {
                delete b.test;
            } catch (d) {
                k.deleteExpando = !1;
            }
        }
    }(), function () {
        var b,
            c,
            d = y.createElement("div");for (b in { submit: !0, change: !0, focusin: !0 }) {
            c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        }d = null;
    }();var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;function ab() {
        return !0;
    }function bb() {
        return !1;
    }function cb() {
        try {
            return y.activeElement;
        } catch (a) {}
    }m.event = { global: {}, add: function add(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                n,
                o,
                p,
                q,
                r = m._data(a);if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return (typeof m === "undefined" ? "undefined" : _typeof(m)) === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;while (h--) {
                    f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                }a = null;
            }
        }, remove: function remove(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                n,
                o,
                p,
                q,
                r = m.hasData(a) && m._data(a);if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;while (j--) {
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;while (f--) {
                            g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        }i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]);
                    } else for (o in k) {
                        m.event.remove(a, o + b[j], c, d, !0);
                    }
                }m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
            }
        }, trigger: function trigger(b, c, d, e) {
            var f,
                g,
                h,
                i,
                k,
                l,
                n,
                o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
                        o.push(h), l = h;
                    }l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
                }n = 0;while ((h = o[n++]) && !b.isPropagationStopped()) {
                    b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                }if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;try {
                        d[p]();
                    } catch (r) {}m.event.triggered = void 0, l && (d[g] = l);
                }return b.result;
            }
        }, dispatch: function dispatch(a) {
            a = m.event.fix(a);var b,
                c,
                e,
                f,
                g,
                h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                    }
                }return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        }, handlers: function handlers(a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) {
                if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                    for (e = [], f = 0; h > f; f++) {
                        d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                    }e.length && g.push({ elem: i, handlers: e });
                }
            }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
        }, fix: function fix(a) {
            if (a[m.expando]) return a;var b,
                c,
                d,
                e = a.type,
                f = a,
                g = this.fixHooks[e];g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;while (b--) {
                c = d[b], a[c] = f[c];
            }return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
            } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
                var c,
                    d,
                    e,
                    f = b.button,
                    g = b.fromElement;return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            } }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                    if (this !== cb() && this.focus) try {
                        return this.focus(), !1;
                    } catch (a) {}
                }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0;
                }, delegateType: "focusout" }, click: { trigger: function trigger() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
                }, _default: function _default(a) {
                    return m.nodeName(a.target, "a");
                } }, beforeunload: { postDispatch: function postDispatch(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                } } }, simulate: function simulate(a, b, c, d) {
            var e = m.extend(new m.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        } }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function (a, b, c) {
        var d = "on" + b;a.detachEvent && (_typeof(a[d]) === K && (a[d] = null), a.detachEvent(d, c));
    }, m.Event = function (a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
    }, m.Event.prototype = { isDefaultPrevented: bb, isPropagationStopped: bb, isImmediatePropagationStopped: bb, preventDefault: function preventDefault() {
            var a = this.originalEvent;this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        }, stopPropagation: function stopPropagation() {
            var a = this.originalEvent;this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
        }, stopImmediatePropagation: function stopImmediatePropagation() {
            var a = this.originalEvent;this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
        } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
        m.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
                var c,
                    d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            } };
    }), k.submitBubbles || (m.event.special.submit = { setup: function setup() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0;
                }), m._data(c, "submitBubbles", !0));
            });
        }, postDispatch: function postDispatch(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0));
        }, teardown: function teardown() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit");
        } }), k.changeBubbles || (m.event.special.change = { setup: function setup() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
            }), m.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0);
            })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0);
                }), m._data(b, "changeBubbles", !0));
            });
        }, handle: function handle(a) {
            var b = a.target;return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
        }, teardown: function teardown() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName);
        } }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function c(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0);
        };m.event.special[b] = { setup: function setup() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
            }, teardown: function teardown() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
            } };
    }), m.fn.extend({ on: function on(a, b, c, d, e) {
            var f, g;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
                "string" != typeof b && (c = c || b, b = void 0);for (f in a) {
                    this.on(f, b, c, a[f], e);
                }return this;
            }if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;else if (!d) return this;return 1 === e && (g = d, d = function d(a) {
                return m().off(a), g.apply(this, arguments);
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
                m.event.add(this, a, d, c, b);
            });
        }, one: function one(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        }, off: function off(a, b, c) {
            var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
                for (e in a) {
                    this.off(e, b, a[e]);
                }return this;
            }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () {
                m.event.remove(this, a, c, b);
            });
        }, trigger: function trigger(a, b) {
            return this.each(function () {
                m.event.trigger(a, b, this);
            });
        }, triggerHandler: function triggerHandler(a, b) {
            var c = this[0];return c ? m.event.trigger(a, b, c, !0) : void 0;
        } });function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();if (c.createElement) while (b.length) {
            c.createElement(b.pop());
        }return c;
    }var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;function ub(a, b) {
        var c,
            d,
            e = 0,
            f = _typeof(a.getElementsByTagName) !== K ? a.getElementsByTagName(b || "*") : _typeof(a.querySelectorAll) !== K ? a.querySelectorAll(b || "*") : void 0;if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
            !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        }return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f;
    }function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked);
    }function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a;
    }function yb(a) {
        var b = pb.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) {
            m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
        }
    }function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c,
                d,
                e,
                f = m._data(a),
                g = m._data(b, f),
                h = f.events;if (h) {
                delete g.handle, g.events = {};for (c in h) {
                    for (d = 0, e = h[c].length; e > d; d++) {
                        m.event.add(b, c, h[c][d]);
                    }
                }
            }g.data && (g.data = m.extend({}, g.data));
        }
    }function Bb(a, b) {
        var c, d, e;if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);for (d in e.events) {
                    m.removeEvent(b, d, e.handle);
                }b.removeAttribute(m.expando);
            }"script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
        }
    }m.extend({ clone: function clone(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i = m.contains(a.ownerDocument, a);if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) {
                d[g] && Bb(e, d[g]);
            }if (b) if (c) for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) {
                Ab(e, d[g]);
            } else Ab(a, f);return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f;
        }, buildFragment: function buildFragment(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++) {
                if (f = a[q], f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);else if (lb.test(f)) {
                    h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];while (e--) {
                        h = h.lastChild;
                    }if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                        f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;while (e--) {
                            m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                        }
                    }m.merge(p, h.childNodes), h.textContent = "";while (h.firstChild) {
                        h.removeChild(h.firstChild);
                    }h = o.lastChild;
                } else p.push(b.createTextNode(f));
            }h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;while (f = p[q++]) {
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                    e = 0;while (f = h[e++]) {
                        ob.test(f.type || "") && c.push(f);
                    }
                }
            }return h = null, o;
        }, cleanData: function cleanData(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) {
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events) for (e in g.events) {
                        n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    }j[f] && (delete j[f], l ? delete d[i] : _typeof(d.removeAttribute) !== K ? d.removeAttribute(i) : d[i] = null, c.push(f));
                }
            }
        } }), m.fn.extend({ text: function text(a) {
            return V(this, function (a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
            }, null, a, arguments.length);
        }, append: function append() {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);b.appendChild(a);
                }
            });
        }, prepend: function prepend() {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);b.insertBefore(a, b.firstChild);
                }
            });
        }, before: function before() {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        }, after: function after() {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        }, remove: function remove(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
                b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
            }return this;
        }, empty: function empty() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));while (a.firstChild) {
                    a.removeChild(a.firstChild);
                }a.options && m.nodeName(a, "select") && (a.options.length = 0);
            }return this;
        }, clone: function clone(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return m.clone(this, a, b);
            });
        }, html: function html(a) {
            return V(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        }b = 0;
                    } catch (e) {}
                }b && this.empty().append(a);
            }, null, a, arguments.length);
        }, replaceWith: function replaceWith() {
            var a = arguments[0];return this.domManip(arguments, function (b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        }, detach: function detach(a) {
            return this.remove(a, !0);
        }, domManip: function domManip(a, b) {
            a = e.apply([], a);var c,
                d,
                f,
                g,
                h,
                i,
                j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function (c) {
                var d = n.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
            });if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) {
                    d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                }if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) {
                    d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                }i = c = null;
            }return this;
        } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) {
                c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            }return this.pushStack(e);
        };
    });var Cb,
        Db = {};function Eb(b, c) {
        var d,
            e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");return e.detach(), f;
    }function Fb(a) {
        var b = y,
            c = Db[a];return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c;
    }!function () {
        var a;k.shrinkWrapBlocks = function () {
            if (null != a) return a;a = !1;var b, c, d;return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), _typeof(b.style.zoom) !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0;
        };
    }();var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib,
        Jb,
        Kb = /^(top|right|bottom|left)$/;a.getComputedStyle ? (Ib = function Ib(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null);
    }, Jb = function Jb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
    }) : y.documentElement.currentStyle && (Ib = function Ib(a) {
        return a.currentStyle;
    }, Jb = function Jb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
    });function Lb(a, b) {
        return { get: function get() {
                var c = a();if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments);
            } };
    }!function () {
        var b, c, d, e, f, g, h;if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            var _i = function _i() {
                var b, c, d, i;c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d));
            };

            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function reliableHiddenOffsets() {
                    return null == g && _i(), g;
                }, boxSizingReliable: function boxSizingReliable() {
                    return null == f && _i(), f;
                }, pixelPosition: function pixelPosition() {
                    return null == e && _i(), e;
                }, reliableMarginRight: function reliableMarginRight() {
                    return null == h && _i(), h;
                } });
        }
    }(), m.swap = function (a, b, c, d) {
        var e,
            f,
            g = {};for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f];
        }e = c.apply(a, d || []);for (f in b) {
            a.style[f] = g[f];
        }return e;
    };var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = { position: "absolute", visibility: "hidden", display: "block" },
        Sb = { letterSpacing: "0", fontWeight: "400" },
        Tb = ["Webkit", "O", "Moz", "ms"];function Ub(a, b) {
        if (b in a) return b;var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;while (e--) {
            if (b = Tb[e] + c, b in a) return b;
        }return d;
    }function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
            d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        }for (g = 0; h > g; g++) {
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        }return a;
    }function Wb(a, b, c) {
        var d = Pb.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        }return g;
    }function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }m.extend({ cssHooks: { opacity: { get: function get(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");return "" === c ? "1" : c;
                    }
                } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" }, style: function style(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = m.camelCase(b),
                    i = a.style;if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];if (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c;
                } catch (j) {}
            }
        }, css: function css(a, b, c, d) {
            var e,
                f,
                g,
                h = m.camelCase(b);return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
        } }), m.each(["height", "width"], function (a, b) {
        m.cssHooks[b] = { get: function get(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {
                    return Yb(a, b, d);
                }) : Yb(a, b, d) : void 0;
            }, set: function set(a, c, d) {
                var e = d && Ib(a);return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0);
            } };
    }), k.opacity || (m.cssHooks.opacity = { get: function get(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
        }, set: function set(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e);
        } }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, { display: "inline-block" }, Jb, [a, "marginRight"]) : void 0;
    }), m.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
        m.cssHooks[a + b] = { expand: function expand(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                }return e;
            } }, Gb.test(a) || (m.cssHooks[a + b].set = Wb);
    }), m.fn.extend({ css: function css(a, b) {
            return V(this, function (a, b, c) {
                var d,
                    e,
                    f = {},
                    g = 0;if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) {
                        f[b[g]] = m.css(a, b[g], !1, d);
                    }return f;
                }return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
            }, a, b, arguments.length > 1);
        }, show: function show() {
            return Vb(this, !0);
        }, hide: function hide() {
            return Vb(this);
        }, toggle: function toggle(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                U(this) ? m(this).show() : m(this).hide();
            });
        } });function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e);
    }m.Tween = Zb, Zb.prototype = { constructor: Zb, init: function init(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px");
        }, cur: function cur() {
            var a = Zb.propHooks[this.prop];return a && a.get ? a.get(this) : Zb.propHooks._default.get(this);
        }, run: function run(a) {
            var b,
                c = Zb.propHooks[this.prop];return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this;
        } }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = { _default: { get: function get(a) {
                var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
            }, set: function set(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            } } }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = { set: function set(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        } }, m.easing = { linear: function linear(a) {
            return a;
        }, swing: function swing(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        } }, m.fx = Zb.prototype.init, m.fx.step = {};var $b,
        _b,
        ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = { "*": [function (a, b) {
            var c = this.createTween(a, b),
                d = c.cur(),
                e = bc.exec(b),
                f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                h = 1,
                i = 20;if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;do {
                    h = h || ".5", g /= h, m.style(c.elem, a, g + f);
                } while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
        }] };function fc() {
        return setTimeout(function () {
            $b = void 0;
        }), $b = m.now();
    }function gc(a, b) {
        var c,
            d = { height: a },
            e = 0;for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
            c = T[e], d["margin" + c] = d["padding" + c] = a;
        }return b && (d.opacity = d.width = a), d;
    }function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) return d;
        }
    }function ic(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            l,
            n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i();
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
        }));for (d in b) {
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;q = !0;
                }o[d] = r && r[d] || m.style(a, d);
            } else j = void 0;
        }if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
                m(a).hide();
            }), n.done(function () {
                var b;m._removeData(a, "fxshow");for (b in o) {
                    m.style(a, b, o[b]);
                }
            });for (d in o) {
                g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
            }
        }
    }function jc(a, b) {
        var c, d, e, f, g;for (c in a) {
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e);
                }
            } else b[d] = e;
        }
    }function kc(a, b, c) {
        var d,
            e,
            f = 0,
            g = dc.length,
            h = m.Deferred().always(function () {
            delete i.elem;
        }),
            i = function i() {
            if (e) return !1;for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                j.tweens[g].run(f);
            }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
        },
            j = h.promise({ elem: a, props: m.extend({}, b), opts: m.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: $b || fc(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
            }, stop: function stop(b) {
                var c = 0,
                    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
                    j.tweens[c].run(1);
                }return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
            } }),
            k = j.props;for (jc(k, j.opts.specialEasing); g > f; f++) {
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        }return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }m.Animation = m.extend(kc, { tweener: function tweener(a, b) {
            m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) {
                c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b);
            }
        }, prefilter: function prefilter(a, b) {
            b ? dc.unshift(a) : dc.push(a);
        } }), m.speed = function (a, b, c) {
        var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b };return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
        }, d;
    }, m.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
        }, animate: function animate(a, b, c, d) {
            var e = m.isEmptyObject(a),
                f = m.speed(b, c, d),
                g = function g() {
                var b = kc(this, m.extend({}, a), f);(e || m._data(this, "finish")) && b.stop(!0);
            };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        }, stop: function stop(a, b, c) {
            var d = function d(a) {
                var b = a.stop;delete a.stop, b(c);
            };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = m.timers,
                    g = m._data(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
                    g[e] && g[e].stop && cc.test(e) && d(g[e]);
                }for (e = f.length; e--;) {
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                }(b || !c) && m.dequeue(this, a);
            });
        }, finish: function finish(a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b,
                    c = m._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = m.timers,
                    g = d ? d.length : 0;for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                }for (b = 0; g > b; b++) {
                    d[b] && d[b].finish && d[b].finish.call(this);
                }delete c.finish;
            });
        } }), m.each(["toggle", "show", "hide"], function (a, b) {
        var c = m.fn[b];m.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e);
        };
    }), m.each({ slideDown: gc("show"), slideUp: gc("hide"), slideToggle: gc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
        m.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), m.timers = [], m.fx.tick = function () {
        var a,
            b = m.timers,
            c = 0;for ($b = m.now(); c < b.length; c++) {
            a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        }b.length || m.fx.stop(), $b = void 0;
    }, m.fx.timer = function (a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
    }, m.fx.interval = 13, m.fx.start = function () {
        _b || (_b = setInterval(m.fx.tick, m.fx.interval));
    }, m.fx.stop = function () {
        clearInterval(_b), _b = null;
    }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function (a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);c.stop = function () {
                clearTimeout(d);
            };
        });
    }, function () {
        var a, b, c, d, e;b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value;
    }();var lc = /\r/g;m.fn.extend({ val: function val(a) {
            var b,
                c,
                d,
                e = this[0];{
                if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
                    var e;1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
                        return null == a ? "" : a + "";
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c);
            }
        } }), m.extend({ valHooks: { option: { get: function get(a) {
                    var b = m.find.attr(a, "value");return null != b ? b : m.trim(m.text(a));
                } }, select: { get: function get(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;g.push(b);
                        }
                    }return g;
                }, set: function set(a, b) {
                    var c,
                        d,
                        e = a.options,
                        f = m.makeArray(b),
                        g = e.length;while (g--) {
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0;
                        } catch (h) {
                            d.scrollHeight;
                        } else d.selected = !1;
                    }return c || (a.selectedIndex = -1), e;
                } } } }), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = { set: function set(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
            } }, k.checkOn || (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });var mc,
        nc,
        oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;m.fn.extend({ attr: function attr(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1);
        }, removeAttr: function removeAttr(a) {
            return this.each(function () {
                m.removeAttr(this, a);
            });
        } }), m.extend({ attr: function attr(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b));
        }, removeAttr: function removeAttr(a, b) {
            var c,
                d,
                e = 0,
                f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) {
                d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d);
            }
        }, attrHooks: { type: { set: function set(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                } } } }), nc = { set: function set(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c;
        } }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = oc[b] || m.find.attr;oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
            var e, f;return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e;
        } : function (a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null;
        };
    }), rc && qc || (m.attrHooks.value = { set: function set(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c);
        } }), qc || (mc = { set: function set(a, b, c) {
            var d = a.getAttributeNode(c);return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
        } }, oc.id = oc.name = oc.coords = function (a, b, c) {
        var d;return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
    }, m.valHooks.button = { get: function get(a, b) {
            var c = a.getAttributeNode(b);return c && c.specified ? c.value : void 0;
        }, set: mc.set }, m.attrHooks.contenteditable = { set: function set(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c);
        } }, m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = { set: function set(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
            } };
    })), k.style || (m.attrHooks.style = { get: function get(a) {
            return a.style.cssText || void 0;
        }, set: function set(a, b) {
            return a.style.cssText = b + "";
        } });var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;m.fn.extend({ prop: function prop(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1);
        }, removeProp: function removeProp(a) {
            return a = m.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a];
                } catch (b) {}
            });
        } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
            var d,
                e,
                f,
                g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        }, propHooks: { tabIndex: { get: function get(a) {
                    var b = m.find.attr(a, "tabindex");return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1;
                } } } }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = { get: function get(a) {
                return a.getAttribute(b, 4);
            } };
    }), k.optSelected || (m.propHooks.selected = { get: function get(a) {
            var b = a.parentNode;return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
        } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this;
    }), k.enctype || (m.propFix.enctype = "encoding");var uc = /[\t\r\n\f]/g;m.fn.extend({ addClass: function addClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = 0,
                i = this.length,
                j = "string" == typeof a && a;if (m.isFunction(a)) return this.each(function (b) {
                m(this).addClass(a.call(this, b, this.className));
            });if (j) for (b = (a || "").match(E) || []; i > h; h++) {
                if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                    f = 0;while (e = b[f++]) {
                        d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                    }g = m.trim(d), c.className !== g && (c.className = g);
                }
            }return this;
        }, removeClass: function removeClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;if (m.isFunction(a)) return this.each(function (b) {
                m(this).removeClass(a.call(this, b, this.className));
            });if (j) for (b = (a || "").match(E) || []; i > h; h++) {
                if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                    f = 0;while (e = b[f++]) {
                        while (d.indexOf(" " + e + " ") >= 0) {
                            d = d.replace(" " + e + " ", " ");
                        }
                    }g = a ? m.trim(d) : "", c.className !== g && (c.className = g);
                }
            }return this;
        }, toggleClass: function toggleClass(a, b) {
            var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function () {
                if ("string" === c) {
                    var b,
                        d = 0,
                        e = m(this),
                        f = a.match(E) || [];while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    }
                } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "");
            });
        }, hasClass: function hasClass(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
            }return !1;
        } }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), m.fn.extend({ hover: function hover(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }, bind: function bind(a, b, c) {
            return this.on(a, null, b, c);
        }, unbind: function unbind(a, b) {
            return this.off(a, null, b);
        }, delegate: function delegate(a, b, c, d) {
            return this.on(b, a, c, d);
        }, undelegate: function undelegate(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        } });var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");var c,
            d = null,
            e = m.trim(b + "");return e && !m.trim(e.replace(xc, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b);
    }, m.parseXML = function (b) {
        var c, d;if (!b || "string" != typeof b) return null;try {
            a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
        } catch (e) {
            c = void 0;
        }return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c;
    };var yc,
        zc,
        Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");try {
        zc = location.href;
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href;
    }yc = Gc.exec(zc.toLowerCase()) || [];function Lc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");var d,
                e = 0,
                f = b.toLowerCase().match(E) || [];if (m.isFunction(c)) while (d = f[e++]) {
                "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
            }
        };
    }function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;function g(h) {
            var i;return e[h] = !0, m.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }return g(b.dataTypes[0]) || !e["*"] && g("*");
    }function Nc(a, b) {
        var c,
            d,
            e = m.ajaxSettings.flatOptions || {};for (d in b) {
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        }return c && m.extend(!0, a, c), a;
    }function Oc(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;while ("*" === i[0]) {
            i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        }if (e) for (g in h) {
            if (h[g] && h[g].test(e)) {
                i.unshift(g);break;
            }
        }if (i[0] in c) f = i[0];else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;break;
                }d || (d = g);
            }f = f || d;
        }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }function Pc(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
            j[g.toLowerCase()] = a.converters[g];
        }f = k.shift();while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
                    }
                }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
                    b = g(b);
                } catch (l) {
                    return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                }
            }
        }return { state: "success", data: b };
    }m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: zc, type: "GET", isLocal: Dc.test(yc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a);
        }, ajaxPrefilter: Lc(Hc), ajaxTransport: Lc(Ic), ajax: function ajax(a, b) {
            "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (b = a, a = void 0), b = b || {};var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
                    var b;if (2 === t) {
                        if (!j) {
                            j = {};while (b = Cc.exec(f)) {
                                j[b[1].toLowerCase()] = b[2];
                            }
                        }b = j[a.toLowerCase()];
                    }return null == b ? null : b;
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                    return 2 === t ? f : null;
                }, setRequestHeader: function setRequestHeader(a, b) {
                    var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
                }, overrideMimeType: function overrideMimeType(a) {
                    return t || (k.mimeType = a), this;
                }, statusCode: function statusCode(a) {
                    var b;if (a) if (2 > t) for (b in a) {
                        q[b] = [q[b], a[b]];
                    } else v.always(a[v.status]);return this;
                }, abort: function abort(a) {
                    var b = a || u;return i && i.abort(b), x(0, b), this;
                } };if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);for (d in k.headers) {
                v.setRequestHeader(d, k.headers[d]);
            }if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (d in { success: 1, error: 1, complete: 1 }) {
                v[d](k[d]);
            }if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout");
                }, k.timeout));try {
                    t = 1, i.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;x(-1, w);
                }
            } else x(-1, "No Transport");function x(a, b, c, d) {
                var j,
                    r,
                    s,
                    u,
                    w,
                    x = b;2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")));
            }return v;
        }, getJSON: function getJSON(a, b, c) {
            return m.get(a, b, c, "json");
        }, getScript: function getScript(a, b) {
            return m.get(a, void 0, b, "script");
        } }), m.each(["get", "post"], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d });
        };
    }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), m._evalUrl = function (a) {
        return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
    }, m.fn.extend({ wrapAll: function wrapAll(a) {
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).wrapAll(a.call(this, b));
            });if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;while (a.firstChild && 1 === a.firstChild.nodeType) {
                        a = a.firstChild;
                    }return a;
                }).append(this);
            }return this;
        }, wrapInner: function wrapInner(a) {
            return this.each(m.isFunction(a) ? function (b) {
                m(this).wrapInner(a.call(this, b));
            } : function () {
                var b = m(this),
                    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
            });
        }, wrap: function wrap(a) {
            var b = m.isFunction(a);return this.each(function (c) {
                m(this).wrapAll(b ? a.call(this, c) : a);
            });
        }, unwrap: function unwrap() {
            return this.parent().each(function () {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
            }).end();
        } }), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"));
    }, m.expr.filters.visible = function (a) {
        return !m.expr.filters.hidden(a);
    };var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;function Vc(a, b, c, d) {
        var e;if (m.isArray(b)) m.each(b, function (b, e) {
            c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? b : "") + "]", e, c, d);
        });else if (c || "object" !== m.type(b)) d(a, b);else for (e in b) {
            Vc(a + "[" + e + "]", b[e], c, d);
        }
    }m.param = function (a, b) {
        var c,
            d = [],
            e = function e(a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
            e(this.name, this.value);
        });else for (c in a) {
            Vc(c, a[c], b, e);
        }return d.join("&").replace(Qc, "+");
    }, m.fn.extend({ serialize: function serialize() {
            return m.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var a = m.prop(this, "elements");return a ? m.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a));
            }).map(function (a, b) {
                var c = m(this).val();return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
                    return { name: b.name, value: a.replace(Sc, "\r\n") };
                }) : { name: b.name, value: c.replace(Sc, "\r\n") };
            }).get();
        } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c();
    } : Zc;var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();a.ActiveXObject && m(a).on("unload", function () {
        for (var a in Xc) {
            Xc[a](void 0, !0);
        }
    }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
            var _b3;return { send: function send(c, d) {
                    var e,
                        f = a.xhr(),
                        g = ++Wc;if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
                        f[e] = a.xhrFields[e];
                    }a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) {
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    }f.send(a.hasContent && a.data || null), _b3 = function b(c, e) {
                        var h, i, j;if (_b3 && (e || 4 === f.readyState)) if (delete Xc[g], _b3 = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();else {
                            j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);try {
                                i = f.statusText;
                            } catch (k) {
                                i = "";
                            }h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
                        }j && d(h, i, j, f.getAllResponseHeaders());
                    }, a.async ? 4 === f.readyState ? setTimeout(_b3) : f.onreadystatechange = Xc[g] = _b3 : _b3();
                }, abort: function abort() {
                    _b3 && _b3(void 0, !0);
                } };
        }
    });function Zc() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
                return m.globalEval(a), a;
            } } }), m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
    }), m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b,
                c = y.head || m("head")[0] || y.documentElement;return { send: function send(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"));
                    }, c.insertBefore(b, c.firstChild);
                }, abort: function abort() {
                    b && b.onload(void 0, !0);
                } };
        }
    });var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;m.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var a = _c.pop() || m.expando + "_" + vc++;return this[a] = !0, a;
        } }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
            f,
            g,
            h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
    }), m.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || y;var d = u.exec(a),
            e = !c && [];return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes));
    };var bd = m.fn.load;m.fn.load = function (a, b, c) {
        if ("string" != typeof a && bd) return bd.apply(this, arguments);var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a]);
        }), this;
    }, m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem;
        }).length;
    };var cd = a.document.documentElement;function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
    }m.offset = { setOffset: function setOffset(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = m.css(a, "position"),
                l = m(a),
                n = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n);
        } }, m.fn.extend({ offset: function offset(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                m.offset.setOffset(this, a, b);
            });var b,
                c,
                d = { top: 0, left: 0 },
                e = this[0],
                f = e && e.ownerDocument;if (f) return b = f.documentElement, m.contains(b, e) ? (_typeof(e.getBoundingClientRect) !== K && (d = e.getBoundingClientRect()), c = dd(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d;
        }, position: function position() {
            if (this[0]) {
                var a,
                    b,
                    c = { top: 0, left: 0 },
                    d = this[0];return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) };
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var a = this.offsetParent || cd;while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) {
                    a = a.offsetParent;
                }return a || cd;
            });
        } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
        var c = /Y/.test(b);m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dd(a);return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
            }, a, d, arguments.length, null);
        };
    }), m.each(["top", "left"], function (a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0;
        });
    }), m.each({ Height: "height", Width: "width" }, function (a, b) {
        m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");return V(this, function (b, c, d) {
                    var e;return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), m.fn.size = function () {
        return this.length;
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return m;
    });var ed = a.jQuery,
        fd = a.$;return m.noConflict = function (b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m;
    }, (typeof b === "undefined" ? "undefined" : _typeof(b)) === K && (a.jQuery = a.$ = m), m;
});

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function swing(x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function easeInQuad(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function easeOutQuad(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * (--t * (t - 2) - 1) + b;
    },
    easeInCubic: function easeInCubic(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function easeOutCubic(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function easeInQuart(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function easeOutQuart(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function easeInOutQuart(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function easeInQuint(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function easeOutQuint(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function easeInOutQuint(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function easeInSine(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function easeOutSine(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function easeInOutSine(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function easeInExpo(x, t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function easeOutExpo(x, t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function easeInOutExpo(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function easeInCirc(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function easeOutCirc(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function easeInOutCirc(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function easeInElastic(x, t, b, c, d) {
        var s = 1.70158;var p = 0;var a = c;
        if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function easeOutElastic(x, t, b, c, d) {
        var s = 1.70158;var p = 0;var a = c;
        if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function easeInOutElastic(x, t, b, c, d) {
        var s = 1.70158;var p = 0;var a = c;
        if (t == 0) return b;if ((t /= d / 2) == 2) return b + c;if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function easeInBack(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function easeOutBack(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function easeInOutBack(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function easeInBounce(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function easeOutBounce(x, t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
        } else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
        } else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
        }
    },
    easeInOutBounce: function easeInOutBounce(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
/**
* jquery.matchHeight-min.js v0.5.2
* http://brm.io/jquery-match-height/
* License: MIT
*/
(function (c) {
    var n = -1,
        f = -1,
        r = function r(a) {
        var b = null,
            d = [];c(a).each(function () {
            var a = c(this),
                k = a.offset().top - h(a.css("margin-top")),
                l = 0 < d.length ? d[d.length - 1] : null;null === l ? d.push(a) : 1 >= Math.floor(Math.abs(b - k)) ? d[d.length - 1] = l.add(a) : d.push(a);b = k;
        });return d;
    },
        h = function h(a) {
        return parseFloat(a) || 0;
    },
        p = function p(a) {
        var b = { byRow: !0, remove: !1, property: "height" };if ("object" === (typeof a === "undefined" ? "undefined" : _typeof(a))) return c.extend(b, a);"boolean" === typeof a ? b.byRow = a : "remove" === a && (b.remove = !0);return b;
    },
        b = c.fn.matchHeight = function (a) {
        a = p(a);if (a.remove) {
            var e = this;this.css(a.property, "");c.each(b._groups, function (a, b) {
                b.elements = b.elements.not(e);
            });return this;
        }if (1 >= this.length) return this;b._groups.push({ elements: this, options: a });b._apply(this, a);return this;
    };b._groups = [];b._throttle = 80;b._maintainScroll = !1;b._beforeUpdate = null;b._afterUpdate = null;b._apply = function (a, e) {
        var d = p(e),
            g = c(a),
            k = [g],
            l = c(window).scrollTop(),
            f = c("html").outerHeight(!0),
            m = g.parents().filter(":hidden");m.each(function () {
            var a = c(this);a.data("style-cache", a.attr("style"));
        });m.css("display", "block");d.byRow && (g.each(function () {
            var a = c(this),
                b = "inline-block" === a.css("display") ? "inline-block" : "block";a.data("style-cache", a.attr("style"));a.css({ display: b, "padding-top": "0", "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px" });
        }), k = r(g), g.each(function () {
            var a = c(this);a.attr("style", a.data("style-cache") || "");
        }));c.each(k, function (a, b) {
            var e = c(b),
                f = 0;d.byRow && 1 >= e.length ? e.css(d.property, "") : (e.each(function () {
                var a = c(this),
                    b = { display: "inline-block" === a.css("display") ? "inline-block" : "block" };b[d.property] = "";a.css(b);a.outerHeight(!1) > f && (f = a.outerHeight(!1));a.css("display", "");
            }), e.each(function () {
                var a = c(this),
                    b = 0;"border-box" !== a.css("box-sizing") && (b += h(a.css("border-top-width")) + h(a.css("border-bottom-width")), b += h(a.css("padding-top")) + h(a.css("padding-bottom")));a.css(d.property, f - b);
            }));
        });m.each(function () {
            var a = c(this);a.attr("style", a.data("style-cache") || null);
        });b._maintainScroll && c(window).scrollTop(l / f * c("html").outerHeight(!0));return this;
    };b._applyDataApi = function () {
        var a = {};c("[data-match-height], [data-mh]").each(function () {
            var b = c(this),
                d = b.attr("data-match-height") || b.attr("data-mh");a[d] = d in a ? a[d].add(b) : b;
        });c.each(a, function () {
            this.matchHeight(!0);
        });
    };var q = function q(a) {
        b._beforeUpdate && b._beforeUpdate(a, b._groups);c.each(b._groups, function () {
            b._apply(this.elements, this.options);
        });b._afterUpdate && b._afterUpdate(a, b._groups);
    };b._update = function (a, e) {
        if (e && "resize" === e.type) {
            var d = c(window).width();if (d === n) return;n = d;
        }a ? -1 === f && (f = setTimeout(function () {
            q(e);f = -1;
        }, b._throttle)) : q(e);
    };c(b._applyDataApi);c(window).bind("load", function (a) {
        b._update(!1, a);
    });c(window).bind("resize orientationchange", function (a) {
        b._update(!0, a);
    });
})(jQuery);
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
    "use strict";
    var b = window.Slick || {};b = function () {
        function c(c, d) {
            var f,
                e = this;e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
                }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0);
        }var b = 0;return c;
    }(), b.prototype.activateADA = function () {
        var a = this;a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
    }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
        var e = this;if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b);
        }), e.$slidesCache = e.$slides, e.reinit();
    }, b.prototype.animateHeight = function () {
        var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({ height: b }, a.options.speed);
        }
    }, b.prototype.animateSlide = function (b, c) {
        var d = {},
            e = this;e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b }, { duration: e.options.speed, easing: e.options.easing, step: function step(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
            }, complete: function complete() {
                c && c.call();
            } })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
            e.disableTransition(), c.call();
        }, e.options.speed));
    }, b.prototype.getNavTarget = function () {
        var b = this,
            c = b.options.asNavFor;return c && null !== c && (c = a(c).not(b.$slider)), c;
    }, b.prototype.asNavFor = function (b) {
        var c = this,
            d = c.getNavTarget();null !== d && "object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) && d.each(function () {
            var c = a(this).slick("getSlick");c.unslicked || c.slideHandler(b, !0);
        });
    }, b.prototype.applyTransition = function (a) {
        var b = this,
            c = {};b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }, b.prototype.autoPlay = function () {
        var a = this;a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
    }, b.prototype.autoPlayClear = function () {
        var a = this;a.autoPlayTimer && clearInterval(a.autoPlayTimer);
    }, b.prototype.autoPlayIterator = function () {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
    }, b.prototype.buildArrows = function () {
        var b = this;b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
    }, b.prototype.buildDots = function () {
        var c,
            d,
            b = this;if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) {
                d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            }b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
        }
    }, b.prototype.buildOut = function () {
        var b = this;b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
    }, b.prototype.buildRows = function () {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            a = this;if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);g.get(k) && j.appendChild(g.get(k));
                    }i.appendChild(j);
                }e.appendChild(i);
            }a.$slider.empty().append(e), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
        }
    }, b.prototype.checkResponsive = function (b, c) {
        var e,
            f,
            g,
            d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;for (e in d.breakpoints) {
                d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            }null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
        }
    }, b.prototype.changeSlide = function (b, c) {
        var f,
            g,
            h,
            d = this,
            e = a(b.currentTarget);switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);break;case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);break;case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");break;default:
                return;}
    }, b.prototype.checkNavigable = function (a) {
        var c,
            d,
            b = this;if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];else for (var e in c) {
            if (a < c[e]) {
                a = d;break;
            }d = c[e];
        }return a;
    }, b.prototype.cleanUpEvents = function () {
        var b = this;b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }, b.prototype.cleanUpSlideEvents = function () {
        var b = this;b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }, b.prototype.cleanUpRows = function () {
        var b,
            a = this;a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b));
    }, b.prototype.clickHandler = function (a) {
        var b = this;b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
    }, b.prototype.destroy = function (b) {
        var c = this;c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            a(this).attr("style", a(this).data("originalStyling"));
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
    }, b.prototype.disableTransition = function (a) {
        var b = this,
            c = {};c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }, b.prototype.fadeSlide = function (a, b) {
        var c = this;c.cssTransitions === !1 ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }), b && setTimeout(function () {
            c.disableTransition(a), b.call();
        }, c.options.speed));
    }, b.prototype.fadeSlideOut = function (a) {
        var b = this;b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
    }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
        var b = this;null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
    }, b.prototype.focusHandler = function () {
        var b = this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
            c.stopImmediatePropagation();var d = a(this);setTimeout(function () {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
            }, 0);
        });
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
        var a = this;return a.currentSlide;
    }, b.prototype.getDotCount = function () {
        var a = this,
            b = 0,
            c = 0,
            d = 0;if (a.options.infinite === !0) for (; b < a.slideCount;) {
            ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        } else if (a.options.centerMode === !0) d = a.slideCount;else if (a.options.asNavFor) for (; b < a.slideCount;) {
            ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        } else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);return d - 1;
    }, b.prototype.getLeft = function (a) {
        var c,
            d,
            f,
            b = this,
            e = 0;return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c;
    }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
        var b = this;return b.options[a];
    }, b.prototype.getNavigableIndexes = function () {
        var e,
            a = this,
            b = 0,
            c = 0,
            d = [];for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) {
            d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        }return d;
    }, b.prototype.getSlick = function () {
        return this;
    }, b.prototype.getSlideCount = function () {
        var c,
            d,
            e,
            b = this;return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
    }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
        var c = this;c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
    }, b.prototype.init = function (b) {
        var c = this;a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay());
    }, b.prototype.initADA = function () {
        var b = this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
            a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c });
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
            a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c });
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
    }, b.prototype.initArrowEvents = function () {
        var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide));
    }, b.prototype.initDotEvents = function () {
        var b = this;b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }, b.prototype.initSlideEvents = function () {
        var b = this;b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
    }, b.prototype.initializeEvents = function () {
        var b = this;b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }, b.prototype.initUI = function () {
        var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
    }, b.prototype.keyHandler = function (a) {
        var b = this;a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } }));
    }, b.prototype.lazyLoad = function () {
        function g(c) {
            a("img[data-lazy]", c).each(function () {
                var c = a(this),
                    d = a(this).attr("data-lazy"),
                    e = document.createElement("img");e.onload = function () {
                    c.animate({ opacity: 0 }, 100, function () {
                        c.attr("src", d).animate({ opacity: 1 }, 200, function () {
                            c.removeAttr("data-lazy").removeClass("slick-loading");
                        }), b.$slider.trigger("lazyLoaded", [b, c, d]);
                    });
                }, e.onerror = function () {
                    c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]);
                }, e.src = d;
            });
        }var c,
            d,
            e,
            f,
            b = this;b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
    }, b.prototype.loadSlider = function () {
        var a = this;a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
    }, b.prototype.next = b.prototype.slickNext = function () {
        var a = this;a.changeSlide({ data: { message: "next" } });
    }, b.prototype.orientationChange = function () {
        var a = this;a.checkResponsive(), a.setPosition();
    }, b.prototype.pause = b.prototype.slickPause = function () {
        var a = this;a.autoPlayClear(), a.paused = !0;
    }, b.prototype.play = b.prototype.slickPlay = function () {
        var a = this;a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
    }, b.prototype.postSlide = function (a) {
        var b = this;b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
    }, b.prototype.prev = b.prototype.slickPrev = function () {
        var a = this;a.changeSlide({ data: { message: "previous" } });
    }, b.prototype.preventDefault = function (a) {
        a.preventDefault();
    }, b.prototype.progressiveLazyLoad = function (b) {
        b = b || 1;var e,
            f,
            g,
            c = this,
            d = a("img[data-lazy]", c.$slider);d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
        }, g.onerror = function () {
            3 > b ? setTimeout(function () {
                c.progressiveLazyLoad(b + 1);
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
        }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]);
    }, b.prototype.refresh = function (b) {
        var d,
            e,
            c = this;e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1);
    }, b.prototype.registerBreakpoints = function () {
        var c,
            d,
            e,
            b = this,
            f = b.options.responsive || null;if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";for (c in f) {
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) {
                        b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    }b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
                }
            }b.breakpoints.sort(function (a, c) {
                return b.options.mobileFirst ? a - c : c - a;
            });
        }
    }, b.prototype.reinit = function () {
        var b = this;b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b]);
    }, b.prototype.resize = function () {
        var b = this;a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
        }, 50));
    }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
        var d = this;return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
    }, b.prototype.setCSS = function (a) {
        var d,
            e,
            b = this,
            c = {};b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
    }, b.prototype.setDimensions = function () {
        var a = this;a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
    }, b.prototype.setFade = function () {
        var c,
            b = this;b.$slides.each(function (d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 });
        }), b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 });
    }, b.prototype.setHeight = function () {
        var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height", b);
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function () {
        var c,
            d,
            e,
            f,
            h,
            b = this,
            g = !1;if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;else if ("multiple" === h) a.each(e, function (a, c) {
            b.options[a] = c;
        });else if ("responsive" === h) for (d in f) {
            if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];else {
                for (c = b.options.responsive.length - 1; c >= 0;) {
                    b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                }b.options.responsive.push(f[d]);
            }
        }g && (b.unload(), b.reinit());
    }, b.prototype.setPosition = function () {
        var a = this;a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
    }, b.prototype.setProps = function () {
        var a = this,
            b = document.body.style;a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
    }, b.prototype.setSlideClasses = function (a) {
        var c,
            d,
            e,
            f,
            b = this;d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
    }, b.prototype.setupInfinite = function () {
        var c,
            d,
            e,
            b = this;if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
                d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            }for (c = 0; e > c; c += 1) {
                d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            }b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                a(this).attr("id", "");
            });
        }
    }, b.prototype.interrupt = function (a) {
        var b = this;a || b.autoPlay(), b.interrupted = a;
    }, b.prototype.selectHandler = function (b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
    }, b.prototype.slideHandler = function (a, b, c) {
        var d,
            e,
            f,
            g,
            j,
            h = null,
            i = this;return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d);
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d);
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
            i.postSlide(e);
        })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
            i.postSlide(e);
        }) : i.postSlide(e))));
    }, b.prototype.startLoad = function () {
        var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
    }, b.prototype.swipeDirection = function () {
        var a,
            b,
            c,
            d,
            e = this;return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
    }, b.prototype.swipeEnd = function (a) {
        var c,
            d,
            b = this;if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {case "left":case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;break;case "right":case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1;}"vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]));
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
    }, b.prototype.swipeHandler = function (a) {
        var b = this;if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {case "start":
                b.swipeStart(a);break;case "move":
                b.swipeMove(a);break;case "end":
                b.swipeEnd(a);}
    }, b.prototype.swipeMove = function (a) {
        var d,
            e,
            f,
            g,
            h,
            b = this;return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0);
    }, b.prototype.swipeStart = function (a) {
        var c,
            b = this;return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
        var a = this;null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
    }, b.prototype.unload = function () {
        var b = this;a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, b.prototype.unslick = function (a) {
        var b = this;b.$slider.trigger("unslick", [b, a]), b.destroy();
    }, b.prototype.updateArrows = function () {
        var b,
            a = this;b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, b.prototype.updateDots = function () {
        var a = this;null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
    }, b.prototype.visibility = function () {
        var a = this;a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1);
    }, a.fn.slick = function () {
        var f,
            g,
            a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;for (f = 0; e > f; f++) {
            if ("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        }return a;
    };
});
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.0+f9a5575b
 */

(function (global, factory) {
    (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.ES6Promise = factory();
})(window, function () {
    'use strict';

    function objectOrFunction(x) {
        return typeof x === 'function' || (typeof x === "undefined" ? "undefined" : _typeof(x)) === 'object' && x !== null;
    }

    function isFunction(x) {
        return typeof x === 'function';
    }

    var _isArray = undefined;
    if (!Array.isArray) {
        _isArray = function _isArray(x) {
            return Object.prototype.toString.call(x) === '[object Array]';
        };
    } else {
        _isArray = Array.isArray;
    }

    var isArray = _isArray;

    var len = 0;
    var vertxNext = undefined;
    var customSchedulerFn = undefined;

    var asap = function asap(callback, arg) {
        queue[len] = callback;
        queue[len + 1] = arg;
        len += 2;
        if (len === 2) {
            // If len is 2, that means that we need to schedule an async flush.
            // If additional callbacks are queued before the queue is flushed, they
            // will be processed by this flush that we are scheduling.
            if (customSchedulerFn) {
                customSchedulerFn(flush);
            } else {
                scheduleFlush();
            }
        }
    };

    function setScheduler(scheduleFn) {
        customSchedulerFn = scheduleFn;
    }

    function setAsap(asapFn) {
        asap = asapFn;
    }

    var browserWindow = typeof window !== 'undefined' ? window : undefined;
    var browserGlobal = browserWindow || {};
    var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
    var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

    // test for web worker but not in IE10
    var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

    // node
    function useNextTick() {
        // node version 0.10.x displays a deprecation warning when nextTick is used recursively
        // see https://github.com/cujojs/when/issues/410 for details
        return function () {
            return process.nextTick(flush);
        };
    }

    // vertx
    function useVertxTimer() {
        if (typeof vertxNext !== 'undefined') {
            return function () {
                vertxNext(flush);
            };
        }

        return useSetTimeout();
    }

    function useMutationObserver() {
        var iterations = 0;
        var observer = new BrowserMutationObserver(flush);
        var node = document.createTextNode('');
        observer.observe(node, { characterData: true });

        return function () {
            node.data = iterations = ++iterations % 2;
        };
    }

    // web worker
    function useMessageChannel() {
        var channel = new MessageChannel();
        channel.port1.onmessage = flush;
        return function () {
            return channel.port2.postMessage(0);
        };
    }

    function useSetTimeout() {
        // Store setTimeout reference so es6-promise will be unaffected by
        // other code modifying setTimeout (like sinon.useFakeTimers())
        var globalSetTimeout = setTimeout;
        return function () {
            return globalSetTimeout(flush, 1);
        };
    }

    var queue = new Array(1000);
    function flush() {
        for (var i = 0; i < len; i += 2) {
            var callback = queue[i];
            var arg = queue[i + 1];

            callback(arg);

            queue[i] = undefined;
            queue[i + 1] = undefined;
        }

        len = 0;
    }

    function attemptVertx() {
        try {
            var r = require;
            var vertx = r('vertx');
            vertxNext = vertx.runOnLoop || vertx.runOnContext;
            return useVertxTimer();
        } catch (e) {
            return useSetTimeout();
        }
    }

    var scheduleFlush = undefined;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (isNode) {
        scheduleFlush = useNextTick();
    } else if (BrowserMutationObserver) {
        scheduleFlush = useMutationObserver();
    } else if (isWorker) {
        scheduleFlush = useMessageChannel();
    } else if (browserWindow === undefined && typeof require === 'function') {
        scheduleFlush = attemptVertx();
    } else {
        scheduleFlush = useSetTimeout();
    }

    function then(onFulfillment, onRejection) {
        var _arguments = arguments;

        var parent = this;

        var child = new this.constructor(noop);

        if (child[PROMISE_ID] === undefined) {
            makePromise(child);
        }

        var _state = parent._state;

        if (_state) {
            (function () {
                var callback = _arguments[_state - 1];
                asap(function () {
                    return invokeCallback(_state, child, callback, parent._result);
                });
            })();
        } else {
            subscribe(parent, child, onFulfillment, onRejection);
        }

        return child;
    }

    /**
      `Promise.resolve` returns a promise that will become resolved with the
      passed `value`. It is shorthand for the following:
    
      ```javascript
      let promise = new Promise(function(resolve, reject){
        resolve(1);
      });
    
      promise.then(function(value){
        // value === 1
      });
      ```
    
      Instead of writing the above, your code now simply becomes the following:
    
      ```javascript
      let promise = Promise.resolve(1);
    
      promise.then(function(value){
        // value === 1
      });
      ```
    
      @method resolve
      @static
      @param {Any} value value that the returned promise will be resolved with
      Useful for tooling.
      @return {Promise} a promise that will become fulfilled with the given
      `value`
    */
    function resolve(object) {
        /*jshint validthis:true */
        var Constructor = this;

        if (object && (typeof object === "undefined" ? "undefined" : _typeof(object)) === 'object' && object.constructor === Constructor) {
            return object;
        }

        var promise = new Constructor(noop);
        _resolve(promise, object);
        return promise;
    }

    var PROMISE_ID = Math.random().toString(36).substring(16);

    function noop() {}

    var PENDING = void 0;
    var FULFILLED = 1;
    var REJECTED = 2;

    var GET_THEN_ERROR = new ErrorObject();

    function selfFulfillment() {
        return new TypeError("You cannot resolve a promise with itself");
    }

    function cannotReturnOwn() {
        return new TypeError('A promises callback cannot return that same promise.');
    }

    function getThen(promise) {
        try {
            return promise.then;
        } catch (error) {
            GET_THEN_ERROR.error = error;
            return GET_THEN_ERROR;
        }
    }

    function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
        try {
            then.call(value, fulfillmentHandler, rejectionHandler);
        } catch (e) {
            return e;
        }
    }

    function handleForeignThenable(promise, thenable, then) {
        asap(function (promise) {
            var sealed = false;
            var error = tryThen(then, thenable, function (value) {
                if (sealed) {
                    return;
                }
                sealed = true;
                if (thenable !== value) {
                    _resolve(promise, value);
                } else {
                    fulfill(promise, value);
                }
            }, function (reason) {
                if (sealed) {
                    return;
                }
                sealed = true;

                _reject(promise, reason);
            }, 'Settle: ' + (promise._label || ' unknown promise'));

            if (!sealed && error) {
                sealed = true;
                _reject(promise, error);
            }
        }, promise);
    }

    function handleOwnThenable(promise, thenable) {
        if (thenable._state === FULFILLED) {
            fulfill(promise, thenable._result);
        } else if (thenable._state === REJECTED) {
            _reject(promise, thenable._result);
        } else {
            subscribe(thenable, undefined, function (value) {
                return _resolve(promise, value);
            }, function (reason) {
                return _reject(promise, reason);
            });
        }
    }

    function handleMaybeThenable(promise, maybeThenable, then$$) {
        if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
            handleOwnThenable(promise, maybeThenable);
        } else {
            if (then$$ === GET_THEN_ERROR) {
                _reject(promise, GET_THEN_ERROR.error);
                GET_THEN_ERROR.error = null;
            } else if (then$$ === undefined) {
                fulfill(promise, maybeThenable);
            } else if (isFunction(then$$)) {
                handleForeignThenable(promise, maybeThenable, then$$);
            } else {
                fulfill(promise, maybeThenable);
            }
        }
    }

    function _resolve(promise, value) {
        if (promise === value) {
            _reject(promise, selfFulfillment());
        } else if (objectOrFunction(value)) {
            handleMaybeThenable(promise, value, getThen(value));
        } else {
            fulfill(promise, value);
        }
    }

    function publishRejection(promise) {
        if (promise._onerror) {
            promise._onerror(promise._result);
        }

        publish(promise);
    }

    function fulfill(promise, value) {
        if (promise._state !== PENDING) {
            return;
        }

        promise._result = value;
        promise._state = FULFILLED;

        if (promise._subscribers.length !== 0) {
            asap(publish, promise);
        }
    }

    function _reject(promise, reason) {
        if (promise._state !== PENDING) {
            return;
        }
        promise._state = REJECTED;
        promise._result = reason;

        asap(publishRejection, promise);
    }

    function subscribe(parent, child, onFulfillment, onRejection) {
        var _subscribers = parent._subscribers;
        var length = _subscribers.length;

        parent._onerror = null;

        _subscribers[length] = child;
        _subscribers[length + FULFILLED] = onFulfillment;
        _subscribers[length + REJECTED] = onRejection;

        if (length === 0 && parent._state) {
            asap(publish, parent);
        }
    }

    function publish(promise) {
        var subscribers = promise._subscribers;
        var settled = promise._state;

        if (subscribers.length === 0) {
            return;
        }

        var child = undefined,
            callback = undefined,
            detail = promise._result;

        for (var i = 0; i < subscribers.length; i += 3) {
            child = subscribers[i];
            callback = subscribers[i + settled];

            if (child) {
                invokeCallback(settled, child, callback, detail);
            } else {
                callback(detail);
            }
        }

        promise._subscribers.length = 0;
    }

    function ErrorObject() {
        this.error = null;
    }

    var TRY_CATCH_ERROR = new ErrorObject();

    function tryCatch(callback, detail) {
        try {
            return callback(detail);
        } catch (e) {
            TRY_CATCH_ERROR.error = e;
            return TRY_CATCH_ERROR;
        }
    }

    function invokeCallback(settled, promise, callback, detail) {
        var hasCallback = isFunction(callback),
            value = undefined,
            error = undefined,
            succeeded = undefined,
            failed = undefined;

        if (hasCallback) {
            value = tryCatch(callback, detail);

            if (value === TRY_CATCH_ERROR) {
                failed = true;
                error = value.error;
                value.error = null;
            } else {
                succeeded = true;
            }

            if (promise === value) {
                _reject(promise, cannotReturnOwn());
                return;
            }
        } else {
            value = detail;
            succeeded = true;
        }

        if (promise._state !== PENDING) {
            // noop
        } else if (hasCallback && succeeded) {
            _resolve(promise, value);
        } else if (failed) {
            _reject(promise, error);
        } else if (settled === FULFILLED) {
            fulfill(promise, value);
        } else if (settled === REJECTED) {
            _reject(promise, value);
        }
    }

    function initializePromise(promise, resolver) {
        try {
            resolver(function resolvePromise(value) {
                _resolve(promise, value);
            }, function rejectPromise(reason) {
                _reject(promise, reason);
            });
        } catch (e) {
            _reject(promise, e);
        }
    }

    var id = 0;
    function nextId() {
        return id++;
    }

    function makePromise(promise) {
        promise[PROMISE_ID] = id++;
        promise._state = undefined;
        promise._result = undefined;
        promise._subscribers = [];
    }

    function Enumerator(Constructor, input) {
        this._instanceConstructor = Constructor;
        this.promise = new Constructor(noop);

        if (!this.promise[PROMISE_ID]) {
            makePromise(this.promise);
        }

        if (isArray(input)) {
            this._input = input;
            this.length = input.length;
            this._remaining = input.length;

            this._result = new Array(this.length);

            if (this.length === 0) {
                fulfill(this.promise, this._result);
            } else {
                this.length = this.length || 0;
                this._enumerate();
                if (this._remaining === 0) {
                    fulfill(this.promise, this._result);
                }
            }
        } else {
            _reject(this.promise, validationError());
        }
    }

    function validationError() {
        return new Error('Array Methods must be provided an Array');
    };

    Enumerator.prototype._enumerate = function () {
        var length = this.length;
        var _input = this._input;

        for (var i = 0; this._state === PENDING && i < length; i++) {
            this._eachEntry(_input[i], i);
        }
    };

    Enumerator.prototype._eachEntry = function (entry, i) {
        var c = this._instanceConstructor;
        var resolve$$ = c.resolve;

        if (resolve$$ === resolve) {
            var _then = getThen(entry);

            if (_then === then && entry._state !== PENDING) {
                this._settledAt(entry._state, i, entry._result);
            } else if (typeof _then !== 'function') {
                this._remaining--;
                this._result[i] = entry;
            } else if (c === Promise) {
                var promise = new c(noop);
                handleMaybeThenable(promise, entry, _then);
                this._willSettleAt(promise, i);
            } else {
                this._willSettleAt(new c(function (resolve$$) {
                    return resolve$$(entry);
                }), i);
            }
        } else {
            this._willSettleAt(resolve$$(entry), i);
        }
    };

    Enumerator.prototype._settledAt = function (state, i, value) {
        var promise = this.promise;

        if (promise._state === PENDING) {
            this._remaining--;

            if (state === REJECTED) {
                _reject(promise, value);
            } else {
                this._result[i] = value;
            }
        }

        if (this._remaining === 0) {
            fulfill(promise, this._result);
        }
    };

    Enumerator.prototype._willSettleAt = function (promise, i) {
        var enumerator = this;

        subscribe(promise, undefined, function (value) {
            return enumerator._settledAt(FULFILLED, i, value);
        }, function (reason) {
            return enumerator._settledAt(REJECTED, i, reason);
        });
    };

    /**
      `Promise.all` accepts an array of promises, and returns a new promise which
      is fulfilled with an array of fulfillment values for the passed promises, or
      rejected with the reason of the first passed promise to be rejected. It casts all
      elements of the passed iterable to promises as it runs this algorithm.
    
      Example:
    
      ```javascript
      let promise1 = resolve(1);
      let promise2 = resolve(2);
      let promise3 = resolve(3);
      let promises = [ promise1, promise2, promise3 ];
    
      Promise.all(promises).then(function(array){
        // The array here would be [ 1, 2, 3 ];
      });
      ```
    
      If any of the `promises` given to `all` are rejected, the first promise
      that is rejected will be given as an argument to the returned promises's
      rejection handler. For example:
    
      Example:
    
      ```javascript
      let promise1 = resolve(1);
      let promise2 = reject(new Error("2"));
      let promise3 = reject(new Error("3"));
      let promises = [ promise1, promise2, promise3 ];
    
      Promise.all(promises).then(function(array){
        // Code here never runs because there are rejected promises!
      }, function(error) {
        // error.message === "2"
      });
      ```
    
      @method all
      @static
      @param {Array} entries array of promises
      @param {String} label optional string for labeling the promise.
      Useful for tooling.
      @return {Promise} promise that is fulfilled when all `promises` have been
      fulfilled, or rejected if any of them become rejected.
      @static
    */
    function all(entries) {
        return new Enumerator(this, entries).promise;
    }

    /**
      `Promise.race` returns a new promise which is settled in the same way as the
      first passed promise to settle.
    
      Example:
    
      ```javascript
      let promise1 = new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve('promise 1');
        }, 200);
      });
    
      let promise2 = new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve('promise 2');
        }, 100);
      });
    
      Promise.race([promise1, promise2]).then(function(result){
        // result === 'promise 2' because it was resolved before promise1
        // was resolved.
      });
      ```
    
      `Promise.race` is deterministic in that only the state of the first
      settled promise matters. For example, even if other promises given to the
      `promises` array argument are resolved, but the first settled promise has
      become rejected before the other promises became fulfilled, the returned
      promise will become rejected:
    
      ```javascript
      let promise1 = new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve('promise 1');
        }, 200);
      });
    
      let promise2 = new Promise(function(resolve, reject){
        setTimeout(function(){
          reject(new Error('promise 2'));
        }, 100);
      });
    
      Promise.race([promise1, promise2]).then(function(result){
        // Code here never runs
      }, function(reason){
        // reason.message === 'promise 2' because promise 2 became rejected before
        // promise 1 became fulfilled
      });
      ```
    
      An example real-world use case is implementing timeouts:
    
      ```javascript
      Promise.race([ajax('foo.json'), timeout(5000)])
      ```
    
      @method race
      @static
      @param {Array} promises array of promises to observe
      Useful for tooling.
      @return {Promise} a promise which settles in the same way as the first passed
      promise to settle.
    */
    function race(entries) {
        /*jshint validthis:true */
        var Constructor = this;

        if (!isArray(entries)) {
            return new Constructor(function (_, reject) {
                return reject(new TypeError('You must pass an array to race.'));
            });
        } else {
            return new Constructor(function (resolve, reject) {
                var length = entries.length;
                for (var i = 0; i < length; i++) {
                    Constructor.resolve(entries[i]).then(resolve, reject);
                }
            });
        }
    }

    /**
      `Promise.reject` returns a promise rejected with the passed `reason`.
      It is shorthand for the following:
    
      ```javascript
      let promise = new Promise(function(resolve, reject){
        reject(new Error('WHOOPS'));
      });
    
      promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
      ```
    
      Instead of writing the above, your code now simply becomes the following:
    
      ```javascript
      let promise = Promise.reject(new Error('WHOOPS'));
    
      promise.then(function(value){
        // Code here doesn't run because the promise is rejected!
      }, function(reason){
        // reason.message === 'WHOOPS'
      });
      ```
    
      @method reject
      @static
      @param {Any} reason value that the returned promise will be rejected with.
      Useful for tooling.
      @return {Promise} a promise rejected with the given `reason`.
    */
    function reject(reason) {
        /*jshint validthis:true */
        var Constructor = this;
        var promise = new Constructor(noop);
        _reject(promise, reason);
        return promise;
    }

    function needsResolver() {
        throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function needsNew() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise's eventual value or the reason
      why the promise cannot be fulfilled.
    
      Terminology
      -----------
    
      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.
    
      A promise can be in one of three states: pending, fulfilled, or rejected.
    
      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.
    
      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.
    
    
      Basic Usage:
      ------------
    
      ```js
      let promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);
    
        // on failure
        reject(reason);
      });
    
      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```
    
      Advanced Usage:
      ---------------
    
      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.
    
      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          let xhr = new XMLHttpRequest();
    
          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();
    
          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }
    
      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```
    
      Unlike callbacks, promises are great composable primitives.
    
      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON
    
        return values;
      });
      ```
    
      @class Promise
      @param {function} resolver
      Useful for tooling.
      @constructor
    */
    function Promise(resolver) {
        this[PROMISE_ID] = nextId();
        this._result = this._state = undefined;
        this._subscribers = [];

        if (noop !== resolver) {
            typeof resolver !== 'function' && needsResolver();
            this instanceof Promise ? initializePromise(this, resolver) : needsNew();
        }
    }

    Promise.all = all;
    Promise.race = race;
    Promise.resolve = resolve;
    Promise.reject = reject;
    Promise._setScheduler = setScheduler;
    Promise._setAsap = setAsap;
    Promise._asap = asap;

    Promise.prototype = {
        constructor: Promise,

        /**
          The primary way of interacting with a promise is through its `then` method,
          which registers callbacks to receive either a promise's eventual value or the
          reason why the promise cannot be fulfilled.
           ```js
          findUser().then(function(user){
            // user is available
          }, function(reason){
            // user is unavailable, and you are given the reason why
          });
          ```
           Chaining
          --------
           The return value of `then` is itself a promise.  This second, 'downstream'
          promise is resolved with the return value of the first promise's fulfillment
          or rejection handler, or rejected if the handler throws an exception.
           ```js
          findUser().then(function (user) {
            return user.name;
          }, function (reason) {
            return 'default name';
          }).then(function (userName) {
            // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
            // will be `'default name'`
          });
           findUser().then(function (user) {
            throw new Error('Found user, but still unhappy');
          }, function (reason) {
            throw new Error('`findUser` rejected and we're unhappy');
          }).then(function (value) {
            // never reached
          }, function (reason) {
            // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
            // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
          });
          ```
          If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
           ```js
          findUser().then(function (user) {
            throw new PedagogicalException('Upstream error');
          }).then(function (value) {
            // never reached
          }).then(function (value) {
            // never reached
          }, function (reason) {
            // The `PedgagocialException` is propagated all the way down to here
          });
          ```
           Assimilation
          ------------
           Sometimes the value you want to propagate to a downstream promise can only be
          retrieved asynchronously. This can be achieved by returning a promise in the
          fulfillment or rejection handler. The downstream promise will then be pending
          until the returned promise is settled. This is called *assimilation*.
           ```js
          findUser().then(function (user) {
            return findCommentsByAuthor(user);
          }).then(function (comments) {
            // The user's comments are now available
          });
          ```
           If the assimliated promise rejects, then the downstream promise will also reject.
           ```js
          findUser().then(function (user) {
            return findCommentsByAuthor(user);
          }).then(function (comments) {
            // If `findCommentsByAuthor` fulfills, we'll have the value here
          }, function (reason) {
            // If `findCommentsByAuthor` rejects, we'll have the reason here
          });
          ```
           Simple Example
          --------------
           Synchronous Example
           ```javascript
          let result;
           try {
            result = findResult();
            // success
          } catch(reason) {
            // failure
          }
          ```
           Errback Example
           ```js
          findResult(function(result, err){
            if (err) {
              // failure
            } else {
              // success
            }
          });
          ```
           Promise Example;
           ```javascript
          findResult().then(function(result){
            // success
          }, function(reason){
            // failure
          });
          ```
           Advanced Example
          --------------
           Synchronous Example
           ```javascript
          let author, books;
           try {
            author = findAuthor();
            books  = findBooksByAuthor(author);
            // success
          } catch(reason) {
            // failure
          }
          ```
           Errback Example
           ```js
           function foundBooks(books) {
           }
           function failure(reason) {
           }
           findAuthor(function(author, err){
            if (err) {
              failure(err);
              // failure
            } else {
              try {
                findBoooksByAuthor(author, function(books, err) {
                  if (err) {
                    failure(err);
                  } else {
                    try {
                      foundBooks(books);
                    } catch(reason) {
                      failure(reason);
                    }
                  }
                });
              } catch(error) {
                failure(err);
              }
              // success
            }
          });
          ```
           Promise Example;
           ```javascript
          findAuthor().
            then(findBooksByAuthor).
            then(function(books){
              // found books
          }).catch(function(reason){
            // something went wrong
          });
          ```
           @method then
          @param {Function} onFulfilled
          @param {Function} onRejected
          Useful for tooling.
          @return {Promise}
        */
        then: then,

        /**
          `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
          as the catch block of a try/catch statement.
           ```js
          function findAuthor(){
            throw new Error('couldn't find that author');
          }
           // synchronous
          try {
            findAuthor();
          } catch(reason) {
            // something went wrong
          }
           // async with promises
          findAuthor().catch(function(reason){
            // something went wrong
          });
          ```
           @method catch
          @param {Function} onRejection
          Useful for tooling.
          @return {Promise}
        */
        'catch': function _catch(onRejection) {
            return this.then(null, onRejection);
        }
    };

    function polyfill() {
        var local = undefined;

        if (typeof global !== 'undefined') {
            local = global;
        } else if (typeof self !== 'undefined') {
            local = self;
        } else {
            try {
                local = Function('return this')();
            } catch (e) {
                throw new Error('polyfill failed because global object is unavailable in this environment');
            }
        }

        var P = local.Promise;

        if (P) {
            var promiseToString = null;
            try {
                promiseToString = Object.prototype.toString.call(P.resolve());
            } catch (e) {
                // silently ignored
            }

            if (promiseToString === '[object Promise]' && !P.cast) {
                return;
            }
        }

        local.Promise = Promise;
    }

    // Strange compat..
    Promise.polyfill = polyfill;
    Promise.Promise = Promise;

    Promise.polyfill();

    return Promise;
});
//# sourceMappingURL=es6-promise.auto.map

/*! lightgallery - v1.5.0 - 2017-07-16
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */
/*! lightgallery - v1.5.0 - 2017-07-16
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */
(function (root, factory) {
    factory(jQuery);
})(undefined, function ($) {

    (function () {
        'use strict';

        var defaults = {

            mode: 'lg-slide',

            // Ex : 'ease'
            cssEasing: 'ease',

            //'for jquery animation'
            easing: 'linear',
            speed: 600,
            height: '100%',
            width: '100%',
            addClass: '',
            startClass: 'lg-start-zoom',
            backdropDuration: 150,
            hideBarsDelay: 6000,

            useLeft: false,

            closable: true,
            loop: true,
            escKey: true,
            keyPress: true,
            controls: true,
            slideEndAnimatoin: true,
            hideControlOnEnd: false,
            mousewheel: true,

            getCaptionFromTitleOrAlt: true,

            // .lg-item || '.lg-sub-html'
            appendSubHtmlTo: '.lg-sub-html',

            subHtmlSelectorRelative: false,

            /**
             * @desc number of preload slides
             * will exicute only after the current slide is fully loaded.
             *
             * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
             * slide will be loaded in the background after the 4th slide is fully loaded..
             * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
             *
             */
            preload: 1,
            showAfterLoad: true,
            selector: '',
            selectWithin: '',
            nextHtml: '',
            prevHtml: '',

            // 0, 1
            index: false,

            iframeMaxWidth: '100%',

            download: true,
            counter: true,
            appendCounterTo: '.lg-toolbar',

            swipeThreshold: 50,
            enableSwipe: true,
            enableDrag: true,

            dynamic: false,
            dynamicEl: [],
            galleryId: 1
        };

        function Plugin(element, options) {

            // Current lightGallery element
            this.el = element;

            // Current jquery element
            this.$el = $(element);

            // lightGallery settings
            this.s = $.extend({}, defaults, options);

            // When using dynamic mode, ensure dynamicEl is an array
            if (this.s.dynamic && this.s.dynamicEl !== 'undefined' && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
                throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
            }

            // lightGallery modules
            this.modules = {};

            // false when lightgallery complete first slide;
            this.lGalleryOn = false;

            this.lgBusy = false;

            // Timeout function for hiding controls;
            this.hideBartimeout = false;

            // To determine browser supports for touch events;
            this.isTouch = 'ontouchstart' in document.documentElement;

            // Disable hideControlOnEnd if sildeEndAnimation is true
            if (this.s.slideEndAnimatoin) {
                this.s.hideControlOnEnd = false;
            }

            // Gallery items
            if (this.s.dynamic) {
                this.$items = this.s.dynamicEl;
            } else {
                if (this.s.selector === 'this') {
                    this.$items = this.$el;
                } else if (this.s.selector !== '') {
                    if (this.s.selectWithin) {
                        this.$items = $(this.s.selectWithin).find(this.s.selector);
                    } else {
                        this.$items = this.$el.find($(this.s.selector));
                    }
                } else {
                    this.$items = this.$el.children();
                }
            }

            // .lg-item
            this.$slide = '';

            // .lg-outer
            this.$outer = '';

            this.init();

            return this;
        }

        Plugin.prototype.init = function () {

            var _this = this;

            // s.preload should not be more than $item.length
            if (_this.s.preload > _this.$items.length) {
                _this.s.preload = _this.$items.length;
            }

            // if dynamic option is enabled execute immediately
            var _hash = window.location.hash;
            if (_hash.indexOf('lg=' + this.s.galleryId) > 0) {

                _this.index = parseInt(_hash.split('&slide=')[1], 10);

                $('body').addClass('lg-from-hash');
                if (!$('body').hasClass('lg-on')) {
                    setTimeout(function () {
                        _this.build(_this.index);
                    });

                    $('body').addClass('lg-on');
                }
            }

            if (_this.s.dynamic) {

                _this.$el.trigger('onBeforeOpen.lg');

                _this.index = _this.s.index || 0;

                // prevent accidental double execution
                if (!$('body').hasClass('lg-on')) {
                    setTimeout(function () {
                        _this.build(_this.index);
                        $('body').addClass('lg-on');
                    });
                }
            } else {

                // Using different namespace for click because click event should not unbind if selector is same object('this')
                _this.$items.on('click.lgcustom', function (event) {

                    // For IE8
                    try {
                        event.preventDefault();
                        event.preventDefault();
                    } catch (er) {
                        event.returnValue = false;
                    }

                    _this.$el.trigger('onBeforeOpen.lg');

                    _this.index = _this.s.index || _this.$items.index(this);

                    // prevent accidental double execution
                    if (!$('body').hasClass('lg-on')) {
                        _this.build(_this.index);
                        $('body').addClass('lg-on');
                    }
                });
            }
        };

        Plugin.prototype.build = function (index) {

            var _this = this;

            _this.structure();

            // module constructor
            $.each($.fn.lightGallery.modules, function (key) {
                _this.modules[key] = new $.fn.lightGallery.modules[key](_this.el);
            });

            // initiate slide function
            _this.slide(index, false, false, false);

            if (_this.s.keyPress) {
                _this.keyPress();
            }

            if (_this.$items.length > 1) {

                _this.arrow();

                setTimeout(function () {
                    _this.enableDrag();
                    _this.enableSwipe();
                }, 50);

                if (_this.s.mousewheel) {
                    _this.mousewheel();
                }
            } else {
                _this.$slide.on('click.lg', function () {
                    _this.$el.trigger('onSlideClick.lg');
                });
            }

            _this.counter();

            _this.closeGallery();

            _this.$el.trigger('onAfterOpen.lg');

            // Hide controllers if mouse doesn't move for some period
            _this.$outer.on('mousemove.lg click.lg touchstart.lg', function () {

                _this.$outer.removeClass('lg-hide-items');

                clearTimeout(_this.hideBartimeout);

                // Timeout will be cleared on each slide movement also
                _this.hideBartimeout = setTimeout(function () {
                    _this.$outer.addClass('lg-hide-items');
                }, _this.s.hideBarsDelay);
            });

            _this.$outer.trigger('mousemove.lg');
        };

        Plugin.prototype.structure = function () {
            var list = '';
            var controls = '';
            var i = 0;
            var subHtmlCont = '';
            var template;
            var _this = this;

            $('body').append('<div class="lg-backdrop"></div>');
            $('.lg-backdrop').css('transition-duration', this.s.backdropDuration + 'ms');

            // Create gallery items
            for (i = 0; i < this.$items.length; i++) {
                list += '<div class="lg-item"></div>';
            }

            // Create controlls
            if (this.s.controls && this.$items.length > 1) {
                controls = '<div class="lg-actions">' + '<button class="lg-prev lg-icon">' + this.s.prevHtml + '</button>' + '<button class="lg-next lg-icon">' + this.s.nextHtml + '</button>' + '</div>';
            }

            if (this.s.appendSubHtmlTo === '.lg-sub-html') {
                subHtmlCont = '<div class="lg-sub-html"></div>';
            }

            template = '<div class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '">' + '<div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '">' + '<div class="lg-inner">' + list + '</div>' + '<div class="lg-toolbar lg-group">' + '<span class="lg-close lg-icon"></span>' + '</div>' + controls + subHtmlCont + '</div>' + '</div>';

            $('body').append(template);
            this.$outer = $('.lg-outer');
            this.$slide = this.$outer.find('.lg-item');

            if (this.s.useLeft) {
                this.$outer.addClass('lg-use-left');

                // Set mode lg-slide if use left is true;
                this.s.mode = 'lg-slide';
            } else {
                this.$outer.addClass('lg-use-css3');
            }

            // For fixed height gallery
            _this.setTop();
            $(window).on('resize.lg orientationchange.lg', function () {
                setTimeout(function () {
                    _this.setTop();
                }, 100);
            });

            // add class lg-current to remove initial transition
            this.$slide.eq(this.index).addClass('lg-current');

            // add Class for css support and transition mode
            if (this.doCss()) {
                this.$outer.addClass('lg-css3');
            } else {
                this.$outer.addClass('lg-css');

                // Set speed 0 because no animation will happen if browser doesn't support css3
                this.s.speed = 0;
            }

            this.$outer.addClass(this.s.mode);

            if (this.s.enableDrag && this.$items.length > 1) {
                this.$outer.addClass('lg-grab');
            }

            if (this.s.showAfterLoad) {
                this.$outer.addClass('lg-show-after-load');
            }

            if (this.doCss()) {
                var $inner = this.$outer.find('.lg-inner');
                $inner.css('transition-timing-function', this.s.cssEasing);
                $inner.css('transition-duration', this.s.speed + 'ms');
            }

            setTimeout(function () {
                $('.lg-backdrop').addClass('in');
            });

            setTimeout(function () {
                _this.$outer.addClass('lg-visible');
            }, this.s.backdropDuration);

            if (this.s.download) {
                this.$outer.find('.lg-toolbar').append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>');
            }

            // Store the current scroll top value to scroll back after closing the gallery..
            this.prevScrollTop = $(window).scrollTop();
        };

        // For fixed height gallery
        Plugin.prototype.setTop = function () {
            if (this.s.height !== '100%') {
                var wH = $(window).height();
                var top = (wH - parseInt(this.s.height, 10)) / 2;
                var $lGallery = this.$outer.find('.lg');
                if (wH >= parseInt(this.s.height, 10)) {
                    $lGallery.css('top', top + 'px');
                } else {
                    $lGallery.css('top', '0px');
                }
            }
        };

        // Find css3 support
        Plugin.prototype.doCss = function () {
            // check for css animation support
            var support = function support() {
                var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
                var root = document.documentElement;
                var i = 0;
                for (i = 0; i < transition.length; i++) {
                    if (transition[i] in root.style) {
                        return true;
                    }
                }
            };

            if (support()) {
                return true;
            }

            return false;
        };

        /**
         *  @desc Check the given src is video
         *  @param {String} src
         *  @return {Object} video type
         *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
         */
        Plugin.prototype.isVideo = function (src, index) {

            var html;
            if (this.s.dynamic) {
                html = this.s.dynamicEl[index].html;
            } else {
                html = this.$items.eq(index).attr('data-html');
            }

            if (!src) {
                if (html) {
                    return {
                        html5: true
                    };
                } else {
                    console.error('lightGallery :- data-src is not pvovided on slide item ' + (index + 1) + '. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html');
                    return false;
                }
            }

            var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
            var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
            var dailymotion = src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
            var vk = src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);

            if (youtube) {
                return {
                    youtube: youtube
                };
            } else if (vimeo) {
                return {
                    vimeo: vimeo
                };
            } else if (dailymotion) {
                return {
                    dailymotion: dailymotion
                };
            } else if (vk) {
                return {
                    vk: vk
                };
            }
        };

        /**
         *  @desc Create image counter
         *  Ex: 1/10
         */
        Plugin.prototype.counter = function () {
            if (this.s.counter) {
                $(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + '</span></div>');
            }
        };

        /**
         *  @desc add sub-html into the slide
         *  @param {Number} index - index of the slide
         */
        Plugin.prototype.addHtml = function (index) {
            var subHtml = null;
            var subHtmlUrl;
            var $currentEle;
            if (this.s.dynamic) {
                if (this.s.dynamicEl[index].subHtmlUrl) {
                    subHtmlUrl = this.s.dynamicEl[index].subHtmlUrl;
                } else {
                    subHtml = this.s.dynamicEl[index].subHtml;
                }
            } else {
                $currentEle = this.$items.eq(index);
                if ($currentEle.attr('data-sub-html-url')) {
                    subHtmlUrl = $currentEle.attr('data-sub-html-url');
                } else {
                    subHtml = $currentEle.attr('data-sub-html');
                    if (this.s.getCaptionFromTitleOrAlt && !subHtml) {
                        subHtml = $currentEle.attr('title') || $currentEle.find('img').first().attr('alt');
                    }
                }
            }

            if (!subHtmlUrl) {
                if (typeof subHtml !== 'undefined' && subHtml !== null) {

                    // get first letter of subhtml
                    // if first letter starts with . or # get the html form the jQuery object
                    var fL = subHtml.substring(0, 1);
                    if (fL === '.' || fL === '#') {
                        if (this.s.subHtmlSelectorRelative && !this.s.dynamic) {
                            subHtml = $currentEle.find(subHtml).html();
                        } else {
                            subHtml = $(subHtml).html();
                        }
                    }
                } else {
                    subHtml = '';
                }
            }

            if (this.s.appendSubHtmlTo === '.lg-sub-html') {

                if (subHtmlUrl) {
                    this.$outer.find(this.s.appendSubHtmlTo).load(subHtmlUrl);
                } else {
                    this.$outer.find(this.s.appendSubHtmlTo).html(subHtml);
                }
            } else {

                if (subHtmlUrl) {
                    this.$slide.eq(index).load(subHtmlUrl);
                } else {
                    this.$slide.eq(index).append(subHtml);
                }
            }

            // Add lg-empty-html class if title doesn't exist
            if (typeof subHtml !== 'undefined' && subHtml !== null) {
                if (subHtml === '') {
                    this.$outer.find(this.s.appendSubHtmlTo).addClass('lg-empty-html');
                } else {
                    this.$outer.find(this.s.appendSubHtmlTo).removeClass('lg-empty-html');
                }
            }

            this.$el.trigger('onAfterAppendSubHtml.lg', [index]);
        };

        /**
         *  @desc Preload slides
         *  @param {Number} index - index of the slide
         */
        Plugin.prototype.preload = function (index) {
            var i = 1;
            var j = 1;
            for (i = 1; i <= this.s.preload; i++) {
                if (i >= this.$items.length - index) {
                    break;
                }

                this.loadContent(index + i, false, 0);
            }

            for (j = 1; j <= this.s.preload; j++) {
                if (index - j < 0) {
                    break;
                }

                this.loadContent(index - j, false, 0);
            }
        };

        /**
         *  @desc Load slide content into slide.
         *  @param {Number} index - index of the slide.
         *  @param {Boolean} rec - if true call loadcontent() function again.
         *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
         */
        Plugin.prototype.loadContent = function (index, rec, delay) {

            var _this = this;
            var _hasPoster = false;
            var _$img;
            var _src;
            var _poster;
            var _srcset;
            var _sizes;
            var _html;
            var getResponsiveSrc = function getResponsiveSrc(srcItms) {
                var rsWidth = [];
                var rsSrc = [];
                for (var i = 0; i < srcItms.length; i++) {
                    var __src = srcItms[i].split(' ');

                    // Manage empty space
                    if (__src[0] === '') {
                        __src.splice(0, 1);
                    }

                    rsSrc.push(__src[0]);
                    rsWidth.push(__src[1]);
                }

                var wWidth = $(window).width();
                for (var j = 0; j < rsWidth.length; j++) {
                    if (parseInt(rsWidth[j], 10) > wWidth) {
                        _src = rsSrc[j];
                        break;
                    }
                }
            };

            if (_this.s.dynamic) {

                if (_this.s.dynamicEl[index].poster) {
                    _hasPoster = true;
                    _poster = _this.s.dynamicEl[index].poster;
                }

                _html = _this.s.dynamicEl[index].html;
                _src = _this.s.dynamicEl[index].src;

                if (_this.s.dynamicEl[index].responsive) {
                    var srcDyItms = _this.s.dynamicEl[index].responsive.split(',');
                    getResponsiveSrc(srcDyItms);
                }

                _srcset = _this.s.dynamicEl[index].srcset;
                _sizes = _this.s.dynamicEl[index].sizes;
            } else {

                if (_this.$items.eq(index).attr('data-poster')) {
                    _hasPoster = true;
                    _poster = _this.$items.eq(index).attr('data-poster');
                }

                _html = _this.$items.eq(index).attr('data-html');
                _src = _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src');

                if (_this.$items.eq(index).attr('data-responsive')) {
                    var srcItms = _this.$items.eq(index).attr('data-responsive').split(',');
                    getResponsiveSrc(srcItms);
                }

                _srcset = _this.$items.eq(index).attr('data-srcset');
                _sizes = _this.$items.eq(index).attr('data-sizes');
            }

            //if (_src || _srcset || _sizes || _poster) {

            var iframe = false;
            if (_this.s.dynamic) {
                if (_this.s.dynamicEl[index].iframe) {
                    iframe = true;
                }
            } else {
                if (_this.$items.eq(index).attr('data-iframe') === 'true') {
                    iframe = true;
                }
            }

            var _isVideo = _this.isVideo(_src, index);
            if (!_this.$slide.eq(index).hasClass('lg-loaded')) {
                if (iframe) {
                    _this.$slide.eq(index).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
                } else if (_hasPoster) {
                    var videoClass = '';
                    if (_isVideo && _isVideo.youtube) {
                        videoClass = 'lg-has-youtube';
                    } else if (_isVideo && _isVideo.vimeo) {
                        videoClass = 'lg-has-vimeo';
                    } else {
                        videoClass = 'lg-has-html5';
                    }

                    _this.$slide.eq(index).prepend('<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');
                } else if (_isVideo) {
                    _this.$slide.eq(index).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>');
                    _this.$el.trigger('hasVideo.lg', [index, _src, _html]);
                } else {
                    _this.$slide.eq(index).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + _src + '" /></div>');
                }

                _this.$el.trigger('onAferAppendSlide.lg', [index]);

                _$img = _this.$slide.eq(index).find('.lg-object');
                if (_sizes) {
                    _$img.attr('sizes', _sizes);
                }

                if (_srcset) {
                    _$img.attr('srcset', _srcset);
                    try {
                        picturefill({
                            elements: [_$img[0]]
                        });
                    } catch (e) {
                        console.warn('lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.');
                    }
                }

                if (this.s.appendSubHtmlTo !== '.lg-sub-html') {
                    _this.addHtml(index);
                }

                _this.$slide.eq(index).addClass('lg-loaded');
            }

            _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function () {

                // For first time add some delay for displaying the start animation.
                var _speed = 0;

                // Do not change the delay value because it is required for zoom plugin.
                // If gallery opened from direct url (hash) speed value should be 0
                if (delay && !$('body').hasClass('lg-from-hash')) {
                    _speed = delay;
                }

                setTimeout(function () {
                    _this.$slide.eq(index).addClass('lg-complete');
                    _this.$el.trigger('onSlideItemLoad.lg', [index, delay || 0]);
                }, _speed);
            });

            // @todo check load state for html5 videos
            if (_isVideo && _isVideo.html5 && !_hasPoster) {
                _this.$slide.eq(index).addClass('lg-complete');
            }

            if (rec === true) {
                if (!_this.$slide.eq(index).hasClass('lg-complete')) {
                    _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function () {
                        _this.preload(index);
                    });
                } else {
                    _this.preload(index);
                }
            }

            //}
        };

        /**
        *   @desc slide function for lightgallery
            ** Slide() gets call on start
            ** ** Set lg.on true once slide() function gets called.
            ** Call loadContent() on slide() function inside setTimeout
            ** ** On first slide we do not want any animation like slide of fade
            ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
            ** ** Else loadContent() should wait for the transition to complete.
            ** ** So set timeout s.speed + 50
        <=> ** loadContent() will load slide content in to the particular slide
            ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
            ** ** preload will execute only when the previous slide is fully loaded (images iframe)
            ** ** avoid simultaneous image load
        <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
            ** loadContent()  <====> Preload();
         *   @param {Number} index - index of the slide
        *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
        *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
        *   @param {String} direction - Direction of the slide(next/prev)
        */
        Plugin.prototype.slide = function (index, fromTouch, fromThumb, direction) {

            var _prevIndex = this.$outer.find('.lg-current').index();
            var _this = this;

            // Prevent if multiple call
            // Required for hsh plugin
            if (_this.lGalleryOn && _prevIndex === index) {
                return;
            }

            var _length = this.$slide.length;
            var _time = _this.lGalleryOn ? this.s.speed : 0;

            if (!_this.lgBusy) {

                if (this.s.download) {
                    var _src;
                    if (_this.s.dynamic) {
                        _src = _this.s.dynamicEl[index].downloadUrl !== false && (_this.s.dynamicEl[index].downloadUrl || _this.s.dynamicEl[index].src);
                    } else {
                        _src = _this.$items.eq(index).attr('data-download-url') !== 'false' && (_this.$items.eq(index).attr('data-download-url') || _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src'));
                    }

                    if (_src) {
                        $('#lg-download').attr('href', _src);
                        _this.$outer.removeClass('lg-hide-download');
                    } else {
                        _this.$outer.addClass('lg-hide-download');
                    }
                }

                this.$el.trigger('onBeforeSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);

                _this.lgBusy = true;

                clearTimeout(_this.hideBartimeout);

                // Add title if this.s.appendSubHtmlTo === lg-sub-html
                if (this.s.appendSubHtmlTo === '.lg-sub-html') {

                    // wait for slide animation to complete
                    setTimeout(function () {
                        _this.addHtml(index);
                    }, _time);
                }

                this.arrowDisable(index);

                if (!direction) {
                    if (index < _prevIndex) {
                        direction = 'prev';
                    } else if (index > _prevIndex) {
                        direction = 'next';
                    }
                }

                if (!fromTouch) {

                    // remove all transitions
                    _this.$outer.addClass('lg-no-trans');

                    this.$slide.removeClass('lg-prev-slide lg-next-slide');

                    if (direction === 'prev') {

                        //prevslide
                        this.$slide.eq(index).addClass('lg-prev-slide');
                        this.$slide.eq(_prevIndex).addClass('lg-next-slide');
                    } else {

                        // next slide
                        this.$slide.eq(index).addClass('lg-next-slide');
                        this.$slide.eq(_prevIndex).addClass('lg-prev-slide');
                    }

                    // give 50 ms for browser to add/remove class
                    setTimeout(function () {
                        _this.$slide.removeClass('lg-current');

                        //_this.$slide.eq(_prevIndex).removeClass('lg-current');
                        _this.$slide.eq(index).addClass('lg-current');

                        // reset all transitions
                        _this.$outer.removeClass('lg-no-trans');
                    }, 50);
                } else {

                    this.$slide.removeClass('lg-prev-slide lg-current lg-next-slide');
                    var touchPrev;
                    var touchNext;
                    if (_length > 2) {
                        touchPrev = index - 1;
                        touchNext = index + 1;

                        if (index === 0 && _prevIndex === _length - 1) {

                            // next slide
                            touchNext = 0;
                            touchPrev = _length - 1;
                        } else if (index === _length - 1 && _prevIndex === 0) {

                            // prev slide
                            touchNext = 0;
                            touchPrev = _length - 1;
                        }
                    } else {
                        touchPrev = 0;
                        touchNext = 1;
                    }

                    if (direction === 'prev') {
                        _this.$slide.eq(touchNext).addClass('lg-next-slide');
                    } else {
                        _this.$slide.eq(touchPrev).addClass('lg-prev-slide');
                    }

                    _this.$slide.eq(index).addClass('lg-current');
                }

                if (_this.lGalleryOn) {
                    setTimeout(function () {
                        _this.loadContent(index, true, 0);
                    }, this.s.speed + 50);

                    setTimeout(function () {
                        _this.lgBusy = false;
                        _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
                    }, this.s.speed);
                } else {
                    _this.loadContent(index, true, _this.s.backdropDuration);

                    _this.lgBusy = false;
                    _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
                }

                _this.lGalleryOn = true;

                if (this.s.counter) {
                    $('#lg-counter-current').text(index + 1);
                }
            }
        };

        /**
         *  @desc Go to next slide
         *  @param {Boolean} fromTouch - true if slide function called via touch event
         */
        Plugin.prototype.goToNextSlide = function (fromTouch) {
            var _this = this;
            var _loop = _this.s.loop;
            if (fromTouch && _this.$slide.length < 3) {
                _loop = false;
            }

            if (!_this.lgBusy) {
                if (_this.index + 1 < _this.$slide.length) {
                    _this.index++;
                    _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
                    _this.slide(_this.index, fromTouch, false, 'next');
                } else {
                    if (_loop) {
                        _this.index = 0;
                        _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
                        _this.slide(_this.index, fromTouch, false, 'next');
                    } else if (_this.s.slideEndAnimatoin && !fromTouch) {
                        _this.$outer.addClass('lg-right-end');
                        setTimeout(function () {
                            _this.$outer.removeClass('lg-right-end');
                        }, 400);
                    }
                }
            }
        };

        /**
         *  @desc Go to previous slide
         *  @param {Boolean} fromTouch - true if slide function called via touch event
         */
        Plugin.prototype.goToPrevSlide = function (fromTouch) {
            var _this = this;
            var _loop = _this.s.loop;
            if (fromTouch && _this.$slide.length < 3) {
                _loop = false;
            }

            if (!_this.lgBusy) {
                if (_this.index > 0) {
                    _this.index--;
                    _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
                    _this.slide(_this.index, fromTouch, false, 'prev');
                } else {
                    if (_loop) {
                        _this.index = _this.$items.length - 1;
                        _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
                        _this.slide(_this.index, fromTouch, false, 'prev');
                    } else if (_this.s.slideEndAnimatoin && !fromTouch) {
                        _this.$outer.addClass('lg-left-end');
                        setTimeout(function () {
                            _this.$outer.removeClass('lg-left-end');
                        }, 400);
                    }
                }
            }
        };

        Plugin.prototype.keyPress = function () {
            var _this = this;
            if (this.$items.length > 1) {
                $(window).on('keyup.lg', function (e) {
                    if (_this.$items.length > 1) {
                        if (e.keyCode === 37) {
                            e.preventDefault();
                            _this.goToPrevSlide();
                        }

                        if (e.keyCode === 39) {
                            e.preventDefault();
                            _this.goToNextSlide();
                        }
                    }
                });
            }

            $(window).on('keydown.lg', function (e) {
                if (_this.s.escKey === true && e.keyCode === 27) {
                    e.preventDefault();
                    if (!_this.$outer.hasClass('lg-thumb-open')) {
                        _this.destroy();
                    } else {
                        _this.$outer.removeClass('lg-thumb-open');
                    }
                }
            });
        };

        Plugin.prototype.arrow = function () {
            var _this = this;
            this.$outer.find('.lg-prev').on('click.lg', function () {
                _this.goToPrevSlide();
            });

            this.$outer.find('.lg-next').on('click.lg', function () {
                _this.goToNextSlide();
            });
        };

        Plugin.prototype.arrowDisable = function (index) {

            // Disable arrows if s.hideControlOnEnd is true
            if (!this.s.loop && this.s.hideControlOnEnd) {
                if (index + 1 < this.$slide.length) {
                    this.$outer.find('.lg-next').removeAttr('disabled').removeClass('disabled');
                } else {
                    this.$outer.find('.lg-next').attr('disabled', 'disabled').addClass('disabled');
                }

                if (index > 0) {
                    this.$outer.find('.lg-prev').removeAttr('disabled').removeClass('disabled');
                } else {
                    this.$outer.find('.lg-prev').attr('disabled', 'disabled').addClass('disabled');
                }
            }
        };

        Plugin.prototype.setTranslate = function ($el, xValue, yValue) {
            // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
            if (this.s.useLeft) {
                $el.css('left', xValue);
            } else {
                $el.css({
                    transform: 'translate3d(' + xValue + 'px, ' + yValue + 'px, 0px)'
                });
            }
        };

        Plugin.prototype.touchMove = function (startCoords, endCoords) {

            var distance = endCoords - startCoords;

            if (Math.abs(distance) > 15) {
                // reset opacity and transition duration
                this.$outer.addClass('lg-dragging');

                // move current slide
                this.setTranslate(this.$slide.eq(this.index), distance, 0);

                // move next and prev slide with current slide
                this.setTranslate($('.lg-prev-slide'), -this.$slide.eq(this.index).width() + distance, 0);
                this.setTranslate($('.lg-next-slide'), this.$slide.eq(this.index).width() + distance, 0);
            }
        };

        Plugin.prototype.touchEnd = function (distance) {
            var _this = this;

            // keep slide animation for any mode while dragg/swipe
            if (_this.s.mode !== 'lg-slide') {
                _this.$outer.addClass('lg-slide');
            }

            this.$slide.not('.lg-current, .lg-prev-slide, .lg-next-slide').css('opacity', '0');

            // set transition duration
            setTimeout(function () {
                _this.$outer.removeClass('lg-dragging');
                if (distance < 0 && Math.abs(distance) > _this.s.swipeThreshold) {
                    _this.goToNextSlide(true);
                } else if (distance > 0 && Math.abs(distance) > _this.s.swipeThreshold) {
                    _this.goToPrevSlide(true);
                } else if (Math.abs(distance) < 5) {

                    // Trigger click if distance is less than 5 pix
                    _this.$el.trigger('onSlideClick.lg');
                }

                _this.$slide.removeAttr('style');
            });

            // remove slide class once drag/swipe is completed if mode is not slide
            setTimeout(function () {
                if (!_this.$outer.hasClass('lg-dragging') && _this.s.mode !== 'lg-slide') {
                    _this.$outer.removeClass('lg-slide');
                }
            }, _this.s.speed + 100);
        };

        Plugin.prototype.enableSwipe = function () {
            var _this = this;
            var startCoords = 0;
            var endCoords = 0;
            var isMoved = false;

            if (_this.s.enableSwipe && _this.isTouch && _this.doCss()) {

                _this.$slide.on('touchstart.lg', function (e) {
                    if (!_this.$outer.hasClass('lg-zoomed') && !_this.lgBusy) {
                        e.preventDefault();
                        _this.manageSwipeClass();
                        startCoords = e.originalEvent.targetTouches[0].pageX;
                    }
                });

                _this.$slide.on('touchmove.lg', function (e) {
                    if (!_this.$outer.hasClass('lg-zoomed')) {
                        e.preventDefault();
                        endCoords = e.originalEvent.targetTouches[0].pageX;
                        _this.touchMove(startCoords, endCoords);
                        isMoved = true;
                    }
                });

                _this.$slide.on('touchend.lg', function () {
                    if (!_this.$outer.hasClass('lg-zoomed')) {
                        if (isMoved) {
                            isMoved = false;
                            _this.touchEnd(endCoords - startCoords);
                        } else {
                            _this.$el.trigger('onSlideClick.lg');
                        }
                    }
                });
            }
        };

        Plugin.prototype.enableDrag = function () {
            var _this = this;
            var startCoords = 0;
            var endCoords = 0;
            var isDraging = false;
            var isMoved = false;
            if (_this.s.enableDrag && !_this.isTouch && _this.doCss()) {
                _this.$slide.on('mousedown.lg', function (e) {
                    // execute only on .lg-object
                    if (!_this.$outer.hasClass('lg-zoomed')) {
                        if ($(e.target).hasClass('lg-object') || $(e.target).hasClass('lg-video-play')) {
                            e.preventDefault();

                            if (!_this.lgBusy) {
                                _this.manageSwipeClass();
                                startCoords = e.pageX;
                                isDraging = true;

                                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                                _this.$outer.scrollLeft += 1;
                                _this.$outer.scrollLeft -= 1;

                                // *

                                _this.$outer.removeClass('lg-grab').addClass('lg-grabbing');

                                _this.$el.trigger('onDragstart.lg');
                            }
                        }
                    }
                });

                $(window).on('mousemove.lg', function (e) {
                    if (isDraging) {
                        isMoved = true;
                        endCoords = e.pageX;
                        _this.touchMove(startCoords, endCoords);
                        _this.$el.trigger('onDragmove.lg');
                    }
                });

                $(window).on('mouseup.lg', function (e) {
                    if (isMoved) {
                        isMoved = false;
                        _this.touchEnd(endCoords - startCoords);
                        _this.$el.trigger('onDragend.lg');
                    } else if ($(e.target).hasClass('lg-object') || $(e.target).hasClass('lg-video-play')) {
                        _this.$el.trigger('onSlideClick.lg');
                    }

                    // Prevent execution on click
                    if (isDraging) {
                        isDraging = false;
                        _this.$outer.removeClass('lg-grabbing').addClass('lg-grab');
                    }
                });
            }
        };

        Plugin.prototype.manageSwipeClass = function () {
            var _touchNext = this.index + 1;
            var _touchPrev = this.index - 1;
            if (this.s.loop && this.$slide.length > 2) {
                if (this.index === 0) {
                    _touchPrev = this.$slide.length - 1;
                } else if (this.index === this.$slide.length - 1) {
                    _touchNext = 0;
                }
            }

            this.$slide.removeClass('lg-next-slide lg-prev-slide');
            if (_touchPrev > -1) {
                this.$slide.eq(_touchPrev).addClass('lg-prev-slide');
            }

            this.$slide.eq(_touchNext).addClass('lg-next-slide');
        };

        Plugin.prototype.mousewheel = function () {
            var _this = this;
            _this.$outer.on('mousewheel.lg', function (e) {

                if (!e.deltaY) {
                    return;
                }

                if (e.deltaY > 0) {
                    _this.goToPrevSlide();
                } else {
                    _this.goToNextSlide();
                }

                e.preventDefault();
            });
        };

        Plugin.prototype.closeGallery = function () {

            var _this = this;
            var mousedown = false;
            this.$outer.find('.lg-close').on('click.lg', function () {
                _this.destroy();
            });

            if (_this.s.closable) {

                // If you drag the slide and release outside gallery gets close on chrome
                // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
                _this.$outer.on('mousedown.lg', function (e) {

                    if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap')) {
                        mousedown = true;
                    } else {
                        mousedown = false;
                    }
                });

                _this.$outer.on('mouseup.lg', function (e) {

                    if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap') && mousedown) {
                        if (!_this.$outer.hasClass('lg-dragging')) {
                            _this.destroy();
                        }
                    }
                });
            }
        };

        Plugin.prototype.destroy = function (d) {

            var _this = this;

            if (!d) {
                _this.$el.trigger('onBeforeClose.lg');
                $(window).scrollTop(_this.prevScrollTop);
            }

            /**
             * if d is false or undefined destroy will only close the gallery
             * plugins instance remains with the element
             *
             * if d is true destroy will completely remove the plugin
             */

            if (d) {
                if (!_this.s.dynamic) {
                    // only when not using dynamic mode is $items a jquery collection
                    this.$items.off('click.lg click.lgcustom');
                }

                $.removeData(_this.el, 'lightGallery');
            }

            // Unbind all events added by lightGallery
            this.$el.off('.lg.tm');

            // Distroy all lightGallery modules
            $.each($.fn.lightGallery.modules, function (key) {
                if (_this.modules[key]) {
                    _this.modules[key].destroy();
                }
            });

            this.lGalleryOn = false;

            clearTimeout(_this.hideBartimeout);
            this.hideBartimeout = false;
            $(window).off('.lg');
            $('body').removeClass('lg-on lg-from-hash');

            if (_this.$outer) {
                _this.$outer.removeClass('lg-visible');
            }

            $('.lg-backdrop').removeClass('in');

            setTimeout(function () {
                if (_this.$outer) {
                    _this.$outer.remove();
                }

                $('.lg-backdrop').remove();

                if (!d) {
                    _this.$el.trigger('onCloseAfter.lg');
                }
            }, _this.s.backdropDuration + 50);
        };

        $.fn.lightGallery = function (options) {
            return this.each(function () {
                if (!$.data(this, 'lightGallery')) {
                    $.data(this, 'lightGallery', new Plugin(this, options));
                } else {
                    try {
                        $(this).data('lightGallery').init();
                    } catch (err) {
                        console.error('lightGallery has not initiated properly');
                    }
                }
            });
        };

        $.fn.lightGallery.modules = {};
    })();
});

/*! lg-autoplay - v1.0.4 - 2017-03-28
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define(['jquery'], function (a0) {
            return factory(a0);
        });
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(undefined, function ($) {

    (function () {

        'use strict';

        var defaults = {
            autoplay: false,
            pause: 5000,
            progressBar: true,
            fourceAutoplay: false,
            autoplayControls: true,
            appendAutoplayControlsTo: '.lg-toolbar'
        };

        /**
         * Creates the autoplay plugin.
         * @param {object} element - lightGallery element
         */
        var Autoplay = function Autoplay(element) {

            this.core = $(element).data('lightGallery');

            this.$el = $(element);

            // Execute only if items are above 1
            if (this.core.$items.length < 2) {
                return false;
            }

            this.core.s = $.extend({}, defaults, this.core.s);
            this.interval = false;

            // Identify if slide happened from autoplay
            this.fromAuto = true;

            // Identify if autoplay canceled from touch/drag
            this.canceledOnTouch = false;

            // save fourceautoplay value
            this.fourceAutoplayTemp = this.core.s.fourceAutoplay;

            // do not allow progress bar if browser does not support css3 transitions
            if (!this.core.doCss()) {
                this.core.s.progressBar = false;
            }

            this.init();

            return this;
        };

        Autoplay.prototype.init = function () {
            var _this = this;

            // append autoplay controls
            if (_this.core.s.autoplayControls) {
                _this.controls();
            }

            // Create progress bar
            if (_this.core.s.progressBar) {
                _this.core.$outer.find('.lg').append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>');
            }

            // set progress
            _this.progress();

            // Start autoplay
            if (_this.core.s.autoplay) {
                _this.$el.one('onSlideItemLoad.lg.tm', function () {
                    _this.startlAuto();
                });
            }

            // cancel interval on touchstart and dragstart
            _this.$el.on('onDragstart.lg.tm touchstart.lg.tm', function () {
                if (_this.interval) {
                    _this.cancelAuto();
                    _this.canceledOnTouch = true;
                }
            });

            // restore autoplay if autoplay canceled from touchstart / dragstart
            _this.$el.on('onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm', function () {
                if (!_this.interval && _this.canceledOnTouch) {
                    _this.startlAuto();
                    _this.canceledOnTouch = false;
                }
            });
        };

        Autoplay.prototype.progress = function () {

            var _this = this;
            var _$progressBar;
            var _$progress;

            _this.$el.on('onBeforeSlide.lg.tm', function () {

                // start progress bar animation
                if (_this.core.s.progressBar && _this.fromAuto) {
                    _$progressBar = _this.core.$outer.find('.lg-progress-bar');
                    _$progress = _this.core.$outer.find('.lg-progress');
                    if (_this.interval) {
                        _$progress.removeAttr('style');
                        _$progressBar.removeClass('lg-start');
                        setTimeout(function () {
                            _$progress.css('transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
                            _$progressBar.addClass('lg-start');
                        }, 20);
                    }
                }

                // Remove setinterval if slide is triggered manually and fourceautoplay is false
                if (!_this.fromAuto && !_this.core.s.fourceAutoplay) {
                    _this.cancelAuto();
                }

                _this.fromAuto = false;
            });
        };

        // Manage autoplay via play/stop buttons
        Autoplay.prototype.controls = function () {
            var _this = this;
            var _html = '<span class="lg-autoplay-button lg-icon"></span>';

            // Append autoplay controls
            $(this.core.s.appendAutoplayControlsTo).append(_html);

            _this.core.$outer.find('.lg-autoplay-button').on('click.lg', function () {
                if ($(_this.core.$outer).hasClass('lg-show-autoplay')) {
                    _this.cancelAuto();
                    _this.core.s.fourceAutoplay = false;
                } else {
                    if (!_this.interval) {
                        _this.startlAuto();
                        _this.core.s.fourceAutoplay = _this.fourceAutoplayTemp;
                    }
                }
            });
        };

        // Autostart gallery
        Autoplay.prototype.startlAuto = function () {
            var _this = this;

            _this.core.$outer.find('.lg-progress').css('transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
            _this.core.$outer.addClass('lg-show-autoplay');
            _this.core.$outer.find('.lg-progress-bar').addClass('lg-start');

            _this.interval = setInterval(function () {
                if (_this.core.index + 1 < _this.core.$items.length) {
                    _this.core.index++;
                } else {
                    _this.core.index = 0;
                }

                _this.fromAuto = true;
                _this.core.slide(_this.core.index, false, false, 'next');
            }, _this.core.s.speed + _this.core.s.pause);
        };

        // cancel Autostart
        Autoplay.prototype.cancelAuto = function () {
            clearInterval(this.interval);
            this.interval = false;
            this.core.$outer.find('.lg-progress').removeAttr('style');
            this.core.$outer.removeClass('lg-show-autoplay');
            this.core.$outer.find('.lg-progress-bar').removeClass('lg-start');
        };

        Autoplay.prototype.destroy = function () {

            this.cancelAuto();
            this.core.$outer.find('.lg-progress-bar').remove();
        };

        $.fn.lightGallery.modules.autoplay = Autoplay;
    })();
});

/*! lg-fullscreen - v1.0.1 - 2016-09-30
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2016 Sachin N; Licensed GPLv3 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define(['jquery'], function (a0) {
            return factory(a0);
        });
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(undefined, function ($) {

    (function () {

        'use strict';

        var defaults = {
            fullScreen: true
        };

        var Fullscreen = function Fullscreen(element) {

            // get lightGallery core plugin data
            this.core = $(element).data('lightGallery');

            this.$el = $(element);

            // extend module defalut settings with lightGallery core settings
            this.core.s = $.extend({}, defaults, this.core.s);

            this.init();

            return this;
        };

        Fullscreen.prototype.init = function () {
            var fullScreen = '';
            if (this.core.s.fullScreen) {

                // check for fullscreen browser support
                if (!document.fullscreenEnabled && !document.webkitFullscreenEnabled && !document.mozFullScreenEnabled && !document.msFullscreenEnabled) {
                    return;
                } else {
                    fullScreen = '<span class="lg-fullscreen lg-icon"></span>';
                    this.core.$outer.find('.lg-toolbar').append(fullScreen);
                    this.fullScreen();
                }
            }
        };

        Fullscreen.prototype.requestFullscreen = function () {
            var el = document.documentElement;
            if (el.requestFullscreen) {
                el.requestFullscreen();
            } else if (el.msRequestFullscreen) {
                el.msRequestFullscreen();
            } else if (el.mozRequestFullScreen) {
                el.mozRequestFullScreen();
            } else if (el.webkitRequestFullscreen) {
                el.webkitRequestFullscreen();
            }
        };

        Fullscreen.prototype.exitFullscreen = function () {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        };

        // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
        Fullscreen.prototype.fullScreen = function () {
            var _this = this;

            $(document).on('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg', function () {
                _this.core.$outer.toggleClass('lg-fullscreen-on');
            });

            this.core.$outer.find('.lg-fullscreen').on('click.lg', function () {
                if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                    _this.requestFullscreen();
                } else {
                    _this.exitFullscreen();
                }
            });
        };

        Fullscreen.prototype.destroy = function () {

            // exit from fullscreen if activated
            this.exitFullscreen();

            $(document).off('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg');
        };

        $.fn.lightGallery.modules.fullscreen = Fullscreen;
    })();
});

/*! lg-pager - v1.0.2 - 2017-01-22
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define(['jquery'], function (a0) {
            return factory(a0);
        });
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(undefined, function ($) {

    (function () {

        'use strict';

        var defaults = {
            pager: false
        };

        var Pager = function Pager(element) {

            this.core = $(element).data('lightGallery');

            this.$el = $(element);
            this.core.s = $.extend({}, defaults, this.core.s);
            if (this.core.s.pager && this.core.$items.length > 1) {
                this.init();
            }

            return this;
        };

        Pager.prototype.init = function () {
            var _this = this;
            var pagerList = '';
            var $pagerCont;
            var $pagerOuter;
            var timeout;

            _this.core.$outer.find('.lg').append('<div class="lg-pager-outer"></div>');

            if (_this.core.s.dynamic) {
                for (var i = 0; i < _this.core.s.dynamicEl.length; i++) {
                    pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + _this.core.s.dynamicEl[i].thumb + '" /></div></span>';
                }
            } else {
                _this.core.$items.each(function () {

                    if (!_this.core.s.exThumbImage) {
                        pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + $(this).find('img').attr('src') + '" /></div></span>';
                    } else {
                        pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + $(this).attr(_this.core.s.exThumbImage) + '" /></div></span>';
                    }
                });
            }

            $pagerOuter = _this.core.$outer.find('.lg-pager-outer');

            $pagerOuter.html(pagerList);

            $pagerCont = _this.core.$outer.find('.lg-pager-cont');
            $pagerCont.on('click.lg touchend.lg', function () {
                var _$this = $(this);
                _this.core.index = _$this.index();
                _this.core.slide(_this.core.index, false, true, false);
            });

            $pagerOuter.on('mouseover.lg', function () {
                clearTimeout(timeout);
                $pagerOuter.addClass('lg-pager-hover');
            });

            $pagerOuter.on('mouseout.lg', function () {
                timeout = setTimeout(function () {
                    $pagerOuter.removeClass('lg-pager-hover');
                });
            });

            _this.core.$el.on('onBeforeSlide.lg.tm', function (e, prevIndex, index) {
                $pagerCont.removeClass('lg-pager-active');
                $pagerCont.eq(index).addClass('lg-pager-active');
            });
        };

        Pager.prototype.destroy = function () {};

        $.fn.lightGallery.modules.pager = Pager;
    })();
});

/*! lg-thumbnail - v1.0.3 - 2017-02-05
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define(['jquery'], function (a0) {
            return factory(a0);
        });
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(undefined, function ($) {

    (function () {

        'use strict';

        var defaults = {
            thumbnail: true,

            animateThumb: true,
            currentPagerPosition: 'middle',

            thumbWidth: 100,
            thumbContHeight: 100,
            thumbMargin: 5,

            exThumbImage: false,
            showThumbByDefault: true,
            toogleThumb: true,
            pullCaptionUp: true,

            enableThumbDrag: true,
            enableThumbSwipe: true,
            swipeThreshold: 50,

            loadYoutubeThumbnail: true,
            youtubeThumbSize: 1,

            loadVimeoThumbnail: true,
            vimeoThumbSize: 'thumbnail_small',

            loadDailymotionThumbnail: true
        };

        var Thumbnail = function Thumbnail(element) {

            // get lightGallery core plugin data
            this.core = $(element).data('lightGallery');

            // extend module default settings with lightGallery core settings
            this.core.s = $.extend({}, defaults, this.core.s);

            this.$el = $(element);
            this.$thumbOuter = null;
            this.thumbOuterWidth = 0;
            this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin);
            this.thumbIndex = this.core.index;

            // Thumbnail animation value
            this.left = 0;

            this.init();

            return this;
        };

        Thumbnail.prototype.init = function () {
            var _this = this;
            if (this.core.s.thumbnail && this.core.$items.length > 1) {
                if (this.core.s.showThumbByDefault) {
                    setTimeout(function () {
                        _this.core.$outer.addClass('lg-thumb-open');
                    }, 700);
                }

                if (this.core.s.pullCaptionUp) {
                    this.core.$outer.addClass('lg-pull-caption-up');
                }

                this.build();
                if (this.core.s.animateThumb) {
                    if (this.core.s.enableThumbDrag && !this.core.isTouch && this.core.doCss()) {
                        this.enableThumbDrag();
                    }

                    if (this.core.s.enableThumbSwipe && this.core.isTouch && this.core.doCss()) {
                        this.enableThumbSwipe();
                    }

                    this.thumbClickable = false;
                } else {
                    this.thumbClickable = true;
                }

                this.toogle();
                this.thumbkeyPress();
            }
        };

        Thumbnail.prototype.build = function () {
            var _this = this;
            var thumbList = '';
            var vimeoErrorThumbSize = '';
            var $thumb;
            var html = '<div class="lg-thumb-outer">' + '<div class="lg-thumb lg-group">' + '</div>' + '</div>';

            switch (this.core.s.vimeoThumbSize) {
                case 'thumbnail_large':
                    vimeoErrorThumbSize = '640';
                    break;
                case 'thumbnail_medium':
                    vimeoErrorThumbSize = '200x150';
                    break;
                case 'thumbnail_small':
                    vimeoErrorThumbSize = '100x75';
            }

            _this.core.$outer.addClass('lg-has-thumb');

            _this.core.$outer.find('.lg').append(html);

            _this.$thumbOuter = _this.core.$outer.find('.lg-thumb-outer');
            _this.thumbOuterWidth = _this.$thumbOuter.width();

            if (_this.core.s.animateThumb) {
                _this.core.$outer.find('.lg-thumb').css({
                    width: _this.thumbTotalWidth + 'px',
                    position: 'relative'
                });
            }

            if (this.core.s.animateThumb) {
                _this.$thumbOuter.css('height', _this.core.s.thumbContHeight + 'px');
            }

            function getThumb(src, thumb, index) {
                var isVideo = _this.core.isVideo(src, index) || {};
                var thumbImg;
                var vimeoId = '';

                if (isVideo.youtube || isVideo.vimeo || isVideo.dailymotion) {
                    if (isVideo.youtube) {
                        if (_this.core.s.loadYoutubeThumbnail) {
                            thumbImg = '//img.youtube.com/vi/' + isVideo.youtube[1] + '/' + _this.core.s.youtubeThumbSize + '.jpg';
                        } else {
                            thumbImg = thumb;
                        }
                    } else if (isVideo.vimeo) {
                        if (_this.core.s.loadVimeoThumbnail) {
                            thumbImg = '//i.vimeocdn.com/video/error_' + vimeoErrorThumbSize + '.jpg';
                            vimeoId = isVideo.vimeo[1];
                        } else {
                            thumbImg = thumb;
                        }
                    } else if (isVideo.dailymotion) {
                        if (_this.core.s.loadDailymotionThumbnail) {
                            thumbImg = '//www.dailymotion.com/thumbnail/video/' + isVideo.dailymotion[1];
                        } else {
                            thumbImg = thumb;
                        }
                    }
                } else {
                    thumbImg = thumb;
                }

                thumbList += '<div data-vimeo-id="' + vimeoId + '" class="lg-thumb-item" style="width:' + _this.core.s.thumbWidth + 'px; margin-right: ' + _this.core.s.thumbMargin + 'px"><img src="' + thumbImg + '" /></div>';
                vimeoId = '';
            }

            if (_this.core.s.dynamic) {
                for (var i = 0; i < _this.core.s.dynamicEl.length; i++) {
                    getThumb(_this.core.s.dynamicEl[i].src, _this.core.s.dynamicEl[i].thumb, i);
                }
            } else {
                _this.core.$items.each(function (i) {

                    if (!_this.core.s.exThumbImage) {
                        getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).find('img').attr('src'), i);
                    } else {
                        getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).attr(_this.core.s.exThumbImage), i);
                    }
                });
            }

            _this.core.$outer.find('.lg-thumb').html(thumbList);

            $thumb = _this.core.$outer.find('.lg-thumb-item');

            // Load vimeo thumbnails
            $thumb.each(function () {
                var $this = $(this);
                var vimeoVideoId = $this.attr('data-vimeo-id');

                if (vimeoVideoId) {
                    $.getJSON('//www.vimeo.com/api/v2/video/' + vimeoVideoId + '.json?callback=?', {
                        format: 'json'
                    }, function (data) {
                        $this.find('img').attr('src', data[0][_this.core.s.vimeoThumbSize]);
                    });
                }
            });

            // manage active class for thumbnail
            $thumb.eq(_this.core.index).addClass('active');
            _this.core.$el.on('onBeforeSlide.lg.tm', function () {
                $thumb.removeClass('active');
                $thumb.eq(_this.core.index).addClass('active');
            });

            $thumb.on('click.lg touchend.lg', function () {
                var _$this = $(this);
                setTimeout(function () {

                    // In IE9 and bellow touch does not support
                    // Go to slide if browser does not support css transitions
                    if (_this.thumbClickable && !_this.core.lgBusy || !_this.core.doCss()) {
                        _this.core.index = _$this.index();
                        _this.core.slide(_this.core.index, false, true, false);
                    }
                }, 50);
            });

            _this.core.$el.on('onBeforeSlide.lg.tm', function () {
                _this.animateThumb(_this.core.index);
            });

            $(window).on('resize.lg.thumb orientationchange.lg.thumb', function () {
                setTimeout(function () {
                    _this.animateThumb(_this.core.index);
                    _this.thumbOuterWidth = _this.$thumbOuter.width();
                }, 200);
            });
        };

        Thumbnail.prototype.setTranslate = function (value) {
            // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
            this.core.$outer.find('.lg-thumb').css({
                transform: 'translate3d(-' + value + 'px, 0px, 0px)'
            });
        };

        Thumbnail.prototype.animateThumb = function (index) {
            var $thumb = this.core.$outer.find('.lg-thumb');
            if (this.core.s.animateThumb) {
                var position;
                switch (this.core.s.currentPagerPosition) {
                    case 'left':
                        position = 0;
                        break;
                    case 'middle':
                        position = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                        break;
                    case 'right':
                        position = this.thumbOuterWidth - this.core.s.thumbWidth;
                }
                this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * index - 1 - position;
                if (this.left > this.thumbTotalWidth - this.thumbOuterWidth) {
                    this.left = this.thumbTotalWidth - this.thumbOuterWidth;
                }

                if (this.left < 0) {
                    this.left = 0;
                }

                if (this.core.lGalleryOn) {
                    if (!$thumb.hasClass('on')) {
                        this.core.$outer.find('.lg-thumb').css('transition-duration', this.core.s.speed + 'ms');
                    }

                    if (!this.core.doCss()) {
                        $thumb.animate({
                            left: -this.left + 'px'
                        }, this.core.s.speed);
                    }
                } else {
                    if (!this.core.doCss()) {
                        $thumb.css('left', -this.left + 'px');
                    }
                }

                this.setTranslate(this.left);
            }
        };

        // Enable thumbnail dragging and swiping
        Thumbnail.prototype.enableThumbDrag = function () {

            var _this = this;
            var startCoords = 0;
            var endCoords = 0;
            var isDraging = false;
            var isMoved = false;
            var tempLeft = 0;

            _this.$thumbOuter.addClass('lg-grab');

            _this.core.$outer.find('.lg-thumb').on('mousedown.lg.thumb', function (e) {
                if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                    // execute only on .lg-object
                    e.preventDefault();
                    startCoords = e.pageX;
                    isDraging = true;

                    // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                    _this.core.$outer.scrollLeft += 1;
                    _this.core.$outer.scrollLeft -= 1;

                    // *
                    _this.thumbClickable = false;
                    _this.$thumbOuter.removeClass('lg-grab').addClass('lg-grabbing');
                }
            });

            $(window).on('mousemove.lg.thumb', function (e) {
                if (isDraging) {
                    tempLeft = _this.left;
                    isMoved = true;
                    endCoords = e.pageX;

                    _this.$thumbOuter.addClass('lg-dragging');

                    tempLeft = tempLeft - (endCoords - startCoords);

                    if (tempLeft > _this.thumbTotalWidth - _this.thumbOuterWidth) {
                        tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                    }

                    if (tempLeft < 0) {
                        tempLeft = 0;
                    }

                    // move current slide
                    _this.setTranslate(tempLeft);
                }
            });

            $(window).on('mouseup.lg.thumb', function () {
                if (isMoved) {
                    isMoved = false;
                    _this.$thumbOuter.removeClass('lg-dragging');

                    _this.left = tempLeft;

                    if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                        _this.thumbClickable = true;
                    }
                } else {
                    _this.thumbClickable = true;
                }

                if (isDraging) {
                    isDraging = false;
                    _this.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab');
                }
            });
        };

        Thumbnail.prototype.enableThumbSwipe = function () {
            var _this = this;
            var startCoords = 0;
            var endCoords = 0;
            var isMoved = false;
            var tempLeft = 0;

            _this.core.$outer.find('.lg-thumb').on('touchstart.lg', function (e) {
                if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                    e.preventDefault();
                    startCoords = e.originalEvent.targetTouches[0].pageX;
                    _this.thumbClickable = false;
                }
            });

            _this.core.$outer.find('.lg-thumb').on('touchmove.lg', function (e) {
                if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                    e.preventDefault();
                    endCoords = e.originalEvent.targetTouches[0].pageX;
                    isMoved = true;

                    _this.$thumbOuter.addClass('lg-dragging');

                    tempLeft = _this.left;

                    tempLeft = tempLeft - (endCoords - startCoords);

                    if (tempLeft > _this.thumbTotalWidth - _this.thumbOuterWidth) {
                        tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                    }

                    if (tempLeft < 0) {
                        tempLeft = 0;
                    }

                    // move current slide
                    _this.setTranslate(tempLeft);
                }
            });

            _this.core.$outer.find('.lg-thumb').on('touchend.lg', function () {
                if (_this.thumbTotalWidth > _this.thumbOuterWidth) {

                    if (isMoved) {
                        isMoved = false;
                        _this.$thumbOuter.removeClass('lg-dragging');
                        if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                            _this.thumbClickable = true;
                        }

                        _this.left = tempLeft;
                    } else {
                        _this.thumbClickable = true;
                    }
                } else {
                    _this.thumbClickable = true;
                }
            });
        };

        Thumbnail.prototype.toogle = function () {
            var _this = this;
            if (_this.core.s.toogleThumb) {
                _this.core.$outer.addClass('lg-can-toggle');
                _this.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>');
                _this.core.$outer.find('.lg-toogle-thumb').on('click.lg', function () {
                    _this.core.$outer.toggleClass('lg-thumb-open');
                });
            }
        };

        Thumbnail.prototype.thumbkeyPress = function () {
            var _this = this;
            $(window).on('keydown.lg.thumb', function (e) {
                if (e.keyCode === 38) {
                    e.preventDefault();
                    _this.core.$outer.addClass('lg-thumb-open');
                } else if (e.keyCode === 40) {
                    e.preventDefault();
                    _this.core.$outer.removeClass('lg-thumb-open');
                }
            });
        };

        Thumbnail.prototype.destroy = function () {
            if (this.core.s.thumbnail && this.core.$items.length > 1) {
                $(window).off('resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb');
                this.$thumbOuter.remove();
                this.core.$outer.removeClass('lg-has-thumb');
            }
        };

        $.fn.lightGallery.modules.Thumbnail = Thumbnail;
    })();
});

/*! lg-video - v1.0.2 - 2017-06-04
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define(['jquery'], function (a0) {
            return factory(a0);
        });
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(undefined, function ($) {

    (function () {

        'use strict';

        var defaults = {
            videoMaxWidth: '855px',
            youtubePlayerParams: false,
            vimeoPlayerParams: false,
            dailymotionPlayerParams: false,
            vkPlayerParams: false,
            videojs: false,
            videojsOptions: {}
        };

        var Video = function Video(element) {

            this.core = $(element).data('lightGallery');

            this.$el = $(element);
            this.core.s = $.extend({}, defaults, this.core.s);
            this.videoLoaded = false;

            this.init();

            return this;
        };

        Video.prototype.init = function () {
            var _this = this;

            // Event triggered when video url found without poster
            _this.core.$el.on('hasVideo.lg.tm', function (event, index, src, html) {
                _this.core.$slide.eq(index).find('.lg-video').append(_this.loadVideo(src, 'lg-object', true, index, html));
                if (html) {
                    if (_this.core.s.videojs) {
                        try {
                            videojs(_this.core.$slide.eq(index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function () {
                                if (!_this.videoLoaded) {
                                    this.play();
                                }
                            });
                        } catch (e) {
                            console.error('Make sure you have included videojs');
                        }
                    } else {
                        if (!_this.videoLoaded) {
                            _this.core.$slide.eq(index).find('.lg-html5').get(0).play();
                        }
                    }
                }
            });

            // Set max width for video
            _this.core.$el.on('onAferAppendSlide.lg.tm', function (event, index) {
                var $videoCont = _this.core.$slide.eq(index).find('.lg-video-cont');
                if (!$videoCont.hasClass('lg-has-iframe')) {
                    $videoCont.css('max-width', _this.core.s.videoMaxWidth);
                    _this.videoLoaded = true;
                }
            });

            var loadOnClick = function loadOnClick($el) {
                // check slide has poster
                if ($el.find('.lg-object').hasClass('lg-has-poster') && $el.find('.lg-object').is(':visible')) {

                    // check already video element present
                    if (!$el.hasClass('lg-has-video')) {

                        $el.addClass('lg-video-playing lg-has-video');

                        var _src;
                        var _html;
                        var _loadVideo = function _loadVideo(_src, _html) {

                            $el.find('.lg-video').append(_this.loadVideo(_src, '', false, _this.core.index, _html));

                            if (_html) {
                                if (_this.core.s.videojs) {
                                    try {
                                        videojs(_this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function () {
                                            this.play();
                                        });
                                    } catch (e) {
                                        console.error('Make sure you have included videojs');
                                    }
                                } else {
                                    _this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0).play();
                                }
                            }
                        };

                        if (_this.core.s.dynamic) {

                            _src = _this.core.s.dynamicEl[_this.core.index].src;
                            _html = _this.core.s.dynamicEl[_this.core.index].html;

                            _loadVideo(_src, _html);
                        } else {

                            _src = _this.core.$items.eq(_this.core.index).attr('href') || _this.core.$items.eq(_this.core.index).attr('data-src');
                            _html = _this.core.$items.eq(_this.core.index).attr('data-html');

                            _loadVideo(_src, _html);
                        }

                        var $tempImg = $el.find('.lg-object');
                        $el.find('.lg-video').append($tempImg);

                        // @todo loading icon for html5 videos also
                        // for showing the loading indicator while loading video
                        if (!$el.find('.lg-video-object').hasClass('lg-html5')) {
                            $el.removeClass('lg-complete');
                            $el.find('.lg-video-object').on('load.lg error.lg', function () {
                                $el.addClass('lg-complete');
                            });
                        }
                    } else {

                        var youtubePlayer = $el.find('.lg-youtube').get(0);
                        var vimeoPlayer = $el.find('.lg-vimeo').get(0);
                        var dailymotionPlayer = $el.find('.lg-dailymotion').get(0);
                        var html5Player = $el.find('.lg-html5').get(0);
                        if (youtubePlayer) {
                            youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                        } else if (vimeoPlayer) {
                            try {
                                $f(vimeoPlayer).api('play');
                            } catch (e) {
                                console.error('Make sure you have included froogaloop2 js');
                            }
                        } else if (dailymotionPlayer) {
                            dailymotionPlayer.contentWindow.postMessage('play', '*');
                        } else if (html5Player) {
                            if (_this.core.s.videojs) {
                                try {
                                    videojs(html5Player).play();
                                } catch (e) {
                                    console.error('Make sure you have included videojs');
                                }
                            } else {
                                html5Player.play();
                            }
                        }

                        $el.addClass('lg-video-playing');
                    }
                }
            };

            if (_this.core.doCss() && _this.core.$items.length > 1 && (_this.core.s.enableSwipe && _this.core.isTouch || _this.core.s.enableDrag && !_this.core.isTouch)) {
                _this.core.$el.on('onSlideClick.lg.tm', function () {
                    var $el = _this.core.$slide.eq(_this.core.index);
                    loadOnClick($el);
                });
            } else {

                // For IE 9 and bellow
                _this.core.$slide.on('click.lg', function () {
                    loadOnClick($(this));
                });
            }

            _this.core.$el.on('onBeforeSlide.lg.tm', function (event, prevIndex, index) {

                var $videoSlide = _this.core.$slide.eq(prevIndex);
                var youtubePlayer = $videoSlide.find('.lg-youtube').get(0);
                var vimeoPlayer = $videoSlide.find('.lg-vimeo').get(0);
                var dailymotionPlayer = $videoSlide.find('.lg-dailymotion').get(0);
                var vkPlayer = $videoSlide.find('.lg-vk').get(0);
                var html5Player = $videoSlide.find('.lg-html5').get(0);
                if (youtubePlayer) {
                    youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                } else if (vimeoPlayer) {
                    try {
                        $f(vimeoPlayer).api('pause');
                    } catch (e) {
                        console.error('Make sure you have included froogaloop2 js');
                    }
                } else if (dailymotionPlayer) {
                    dailymotionPlayer.contentWindow.postMessage('pause', '*');
                } else if (html5Player) {
                    if (_this.core.s.videojs) {
                        try {
                            videojs(html5Player).pause();
                        } catch (e) {
                            console.error('Make sure you have included videojs');
                        }
                    } else {
                        html5Player.pause();
                    }
                }if (vkPlayer) {
                    $(vkPlayer).attr('src', $(vkPlayer).attr('src').replace('&autoplay', '&noplay'));
                }

                var _src;
                if (_this.core.s.dynamic) {
                    _src = _this.core.s.dynamicEl[index].src;
                } else {
                    _src = _this.core.$items.eq(index).attr('href') || _this.core.$items.eq(index).attr('data-src');
                }

                var _isVideo = _this.core.isVideo(_src, index) || {};
                if (_isVideo.youtube || _isVideo.vimeo || _isVideo.dailymotion || _isVideo.vk) {
                    _this.core.$outer.addClass('lg-hide-download');
                }

                //$videoSlide.addClass('lg-complete');
            });

            _this.core.$el.on('onAfterSlide.lg.tm', function (event, prevIndex) {
                _this.core.$slide.eq(prevIndex).removeClass('lg-video-playing');
            });
        };

        Video.prototype.loadVideo = function (src, addClass, noposter, index, html) {
            var video = '';
            var autoplay = 1;
            var a = '';
            var isVideo = this.core.isVideo(src, index) || {};

            // Enable autoplay for first video if poster doesn't exist
            if (noposter) {
                if (this.videoLoaded) {
                    autoplay = 0;
                } else {
                    autoplay = 1;
                }
            }

            if (isVideo.youtube) {

                a = '?wmode=opaque&autoplay=' + autoplay + '&enablejsapi=1';
                if (this.core.s.youtubePlayerParams) {
                    a = a + '&' + $.param(this.core.s.youtubePlayerParams);
                }

                video = '<iframe class="lg-video-object lg-youtube ' + addClass + '" width="560" height="315" src="//www.youtube.com/embed/' + isVideo.youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>';
            } else if (isVideo.vimeo) {

                a = '?autoplay=' + autoplay + '&api=1';
                if (this.core.s.vimeoPlayerParams) {
                    a = a + '&' + $.param(this.core.s.vimeoPlayerParams);
                }

                video = '<iframe class="lg-video-object lg-vimeo ' + addClass + '" width="560" height="315"  src="//player.vimeo.com/video/' + isVideo.vimeo[1] + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
            } else if (isVideo.dailymotion) {

                a = '?wmode=opaque&autoplay=' + autoplay + '&api=postMessage';
                if (this.core.s.dailymotionPlayerParams) {
                    a = a + '&' + $.param(this.core.s.dailymotionPlayerParams);
                }

                video = '<iframe class="lg-video-object lg-dailymotion ' + addClass + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + isVideo.dailymotion[1] + a + '" frameborder="0" allowfullscreen></iframe>';
            } else if (isVideo.html5) {
                var fL = html.substring(0, 1);
                if (fL === '.' || fL === '#') {
                    html = $(html).html();
                }

                video = html;
            } else if (isVideo.vk) {

                a = '&autoplay=' + autoplay;
                if (this.core.s.vkPlayerParams) {
                    a = a + '&' + $.param(this.core.s.vkPlayerParams);
                }

                video = '<iframe class="lg-video-object lg-vk ' + addClass + '" width="560" height="315" src="http://vk.com/video_ext.php?' + isVideo.vk[1] + a + '" frameborder="0" allowfullscreen></iframe>';
            }

            return video;
        };

        Video.prototype.destroy = function () {
            this.videoLoaded = false;
        };

        $.fn.lightGallery.modules.video = Video;
    })();
});

/*! lg-zoom - v1.0.4 - 2016-12-20
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2016 Sachin N; Licensed GPLv3 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define(['jquery'], function (a0) {
            return factory(a0);
        });
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(undefined, function ($) {

    (function () {

        'use strict';

        var getUseLeft = function getUseLeft() {
            var useLeft = false;
            var isChrome = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            if (isChrome && parseInt(isChrome[2], 10) < 54) {
                useLeft = true;
            }

            return useLeft;
        };

        var defaults = {
            scale: 1,
            zoom: true,
            actualSize: true,
            enableZoomAfter: 300,
            useLeftForZoom: getUseLeft()
        };

        var Zoom = function Zoom(element) {

            this.core = $(element).data('lightGallery');

            this.core.s = $.extend({}, defaults, this.core.s);

            if (this.core.s.zoom && this.core.doCss()) {
                this.init();

                // Store the zoomable timeout value just to clear it while closing
                this.zoomabletimeout = false;

                // Set the initial value center
                this.pageX = $(window).width() / 2;
                this.pageY = $(window).height() / 2 + $(window).scrollTop();
            }

            return this;
        };

        Zoom.prototype.init = function () {

            var _this = this;
            var zoomIcons = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';

            if (_this.core.s.actualSize) {
                zoomIcons += '<span id="lg-actual-size" class="lg-icon"></span>';
            }

            if (_this.core.s.useLeftForZoom) {
                _this.core.$outer.addClass('lg-use-left-for-zoom');
            } else {
                _this.core.$outer.addClass('lg-use-transition-for-zoom');
            }

            this.core.$outer.find('.lg-toolbar').append(zoomIcons);

            // Add zoomable class
            _this.core.$el.on('onSlideItemLoad.lg.tm.zoom', function (event, index, delay) {

                // delay will be 0 except first time
                var _speed = _this.core.s.enableZoomAfter + delay;

                // set _speed value 0 if gallery opened from direct url and if it is first slide
                if ($('body').hasClass('lg-from-hash') && delay) {

                    // will execute only once
                    _speed = 0;
                } else {

                    // Remove lg-from-hash to enable starting animation.
                    $('body').removeClass('lg-from-hash');
                }

                _this.zoomabletimeout = setTimeout(function () {
                    _this.core.$slide.eq(index).addClass('lg-zoomable');
                }, _speed + 30);
            });

            var scale = 1;
            /**
             * @desc Image zoom
             * Translate the wrap and scale the image to get better user experience
             *
             * @param {String} scaleVal - Zoom decrement/increment value
             */
            var zoom = function zoom(scaleVal) {

                var $image = _this.core.$outer.find('.lg-current .lg-image');
                var _x;
                var _y;

                // Find offset manually to avoid issue after zoom
                var offsetX = ($(window).width() - $image.prop('offsetWidth')) / 2;
                var offsetY = ($(window).height() - $image.prop('offsetHeight')) / 2 + $(window).scrollTop();

                _x = _this.pageX - offsetX;
                _y = _this.pageY - offsetY;

                var x = (scaleVal - 1) * _x;
                var y = (scaleVal - 1) * _y;

                $image.css('transform', 'scale3d(' + scaleVal + ', ' + scaleVal + ', 1)').attr('data-scale', scaleVal);

                if (_this.core.s.useLeftForZoom) {
                    $image.parent().css({
                        left: -x + 'px',
                        top: -y + 'px'
                    }).attr('data-x', x).attr('data-y', y);
                } else {
                    $image.parent().css('transform', 'translate3d(-' + x + 'px, -' + y + 'px, 0)').attr('data-x', x).attr('data-y', y);
                }
            };

            var callScale = function callScale() {
                if (scale > 1) {
                    _this.core.$outer.addClass('lg-zoomed');
                } else {
                    _this.resetZoom();
                }

                if (scale < 1) {
                    scale = 1;
                }

                zoom(scale);
            };

            var actualSize = function actualSize(event, $image, index, fromIcon) {
                var w = $image.prop('offsetWidth');
                var nw;
                if (_this.core.s.dynamic) {
                    nw = _this.core.s.dynamicEl[index].width || $image[0].naturalWidth || w;
                } else {
                    nw = _this.core.$items.eq(index).attr('data-width') || $image[0].naturalWidth || w;
                }

                var _scale;

                if (_this.core.$outer.hasClass('lg-zoomed')) {
                    scale = 1;
                } else {
                    if (nw > w) {
                        _scale = nw / w;
                        scale = _scale || 2;
                    }
                }

                if (fromIcon) {
                    _this.pageX = $(window).width() / 2;
                    _this.pageY = $(window).height() / 2 + $(window).scrollTop();
                } else {
                    _this.pageX = event.pageX || event.originalEvent.targetTouches[0].pageX;
                    _this.pageY = event.pageY || event.originalEvent.targetTouches[0].pageY;
                }

                callScale();
                setTimeout(function () {
                    _this.core.$outer.removeClass('lg-grabbing').addClass('lg-grab');
                }, 10);
            };

            var tapped = false;

            // event triggered after appending slide content
            _this.core.$el.on('onAferAppendSlide.lg.tm.zoom', function (event, index) {

                // Get the current element
                var $image = _this.core.$slide.eq(index).find('.lg-image');

                $image.on('dblclick', function (event) {
                    actualSize(event, $image, index);
                });

                $image.on('touchstart', function (event) {
                    if (!tapped) {
                        tapped = setTimeout(function () {
                            tapped = null;
                        }, 300);
                    } else {
                        clearTimeout(tapped);
                        tapped = null;
                        actualSize(event, $image, index);
                    }

                    event.preventDefault();
                });
            });

            // Update zoom on resize and orientationchange
            $(window).on('resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom', function () {
                _this.pageX = $(window).width() / 2;
                _this.pageY = $(window).height() / 2 + $(window).scrollTop();
                zoom(scale);
            });

            $('#lg-zoom-out').on('click.lg', function () {
                if (_this.core.$outer.find('.lg-current .lg-image').length) {
                    scale -= _this.core.s.scale;
                    callScale();
                }
            });

            $('#lg-zoom-in').on('click.lg', function () {
                if (_this.core.$outer.find('.lg-current .lg-image').length) {
                    scale += _this.core.s.scale;
                    callScale();
                }
            });

            $('#lg-actual-size').on('click.lg', function (event) {
                actualSize(event, _this.core.$slide.eq(_this.core.index).find('.lg-image'), _this.core.index, true);
            });

            // Reset zoom on slide change
            _this.core.$el.on('onBeforeSlide.lg.tm', function () {
                scale = 1;
                _this.resetZoom();
            });

            // Drag option after zoom
            if (!_this.core.isTouch) {
                _this.zoomDrag();
            }

            if (_this.core.isTouch) {
                _this.zoomSwipe();
            }
        };

        // Reset zoom effect
        Zoom.prototype.resetZoom = function () {
            this.core.$outer.removeClass('lg-zoomed');
            this.core.$slide.find('.lg-img-wrap').removeAttr('style data-x data-y');
            this.core.$slide.find('.lg-image').removeAttr('style data-scale');

            // Reset pagx pagy values to center
            this.pageX = $(window).width() / 2;
            this.pageY = $(window).height() / 2 + $(window).scrollTop();
        };

        Zoom.prototype.zoomSwipe = function () {
            var _this = this;
            var startCoords = {};
            var endCoords = {};
            var isMoved = false;

            // Allow x direction drag
            var allowX = false;

            // Allow Y direction drag
            var allowY = false;

            _this.core.$slide.on('touchstart.lg', function (e) {

                if (_this.core.$outer.hasClass('lg-zoomed')) {
                    var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');

                    allowY = $image.prop('offsetHeight') * $image.attr('data-scale') > _this.core.$outer.find('.lg').height();
                    allowX = $image.prop('offsetWidth') * $image.attr('data-scale') > _this.core.$outer.find('.lg').width();
                    if (allowX || allowY) {
                        e.preventDefault();
                        startCoords = {
                            x: e.originalEvent.targetTouches[0].pageX,
                            y: e.originalEvent.targetTouches[0].pageY
                        };
                    }
                }
            });

            _this.core.$slide.on('touchmove.lg', function (e) {

                if (_this.core.$outer.hasClass('lg-zoomed')) {

                    var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
                    var distanceX;
                    var distanceY;

                    e.preventDefault();
                    isMoved = true;

                    endCoords = {
                        x: e.originalEvent.targetTouches[0].pageX,
                        y: e.originalEvent.targetTouches[0].pageY
                    };

                    // reset opacity and transition duration
                    _this.core.$outer.addClass('lg-zoom-dragging');

                    if (allowY) {
                        distanceY = -Math.abs(_$el.attr('data-y')) + (endCoords.y - startCoords.y);
                    } else {
                        distanceY = -Math.abs(_$el.attr('data-y'));
                    }

                    if (allowX) {
                        distanceX = -Math.abs(_$el.attr('data-x')) + (endCoords.x - startCoords.x);
                    } else {
                        distanceX = -Math.abs(_$el.attr('data-x'));
                    }

                    if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {

                        if (_this.core.s.useLeftForZoom) {
                            _$el.css({
                                left: distanceX + 'px',
                                top: distanceY + 'px'
                            });
                        } else {
                            _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                        }
                    }
                }
            });

            _this.core.$slide.on('touchend.lg', function () {
                if (_this.core.$outer.hasClass('lg-zoomed')) {
                    if (isMoved) {
                        isMoved = false;
                        _this.core.$outer.removeClass('lg-zoom-dragging');
                        _this.touchendZoom(startCoords, endCoords, allowX, allowY);
                    }
                }
            });
        };

        Zoom.prototype.zoomDrag = function () {

            var _this = this;
            var startCoords = {};
            var endCoords = {};
            var isDraging = false;
            var isMoved = false;

            // Allow x direction drag
            var allowX = false;

            // Allow Y direction drag
            var allowY = false;

            _this.core.$slide.on('mousedown.lg.zoom', function (e) {

                // execute only on .lg-object
                var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');

                allowY = $image.prop('offsetHeight') * $image.attr('data-scale') > _this.core.$outer.find('.lg').height();
                allowX = $image.prop('offsetWidth') * $image.attr('data-scale') > _this.core.$outer.find('.lg').width();

                if (_this.core.$outer.hasClass('lg-zoomed')) {
                    if ($(e.target).hasClass('lg-object') && (allowX || allowY)) {
                        e.preventDefault();
                        startCoords = {
                            x: e.pageX,
                            y: e.pageY
                        };

                        isDraging = true;

                        // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                        _this.core.$outer.scrollLeft += 1;
                        _this.core.$outer.scrollLeft -= 1;

                        _this.core.$outer.removeClass('lg-grab').addClass('lg-grabbing');
                    }
                }
            });

            $(window).on('mousemove.lg.zoom', function (e) {
                if (isDraging) {
                    var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
                    var distanceX;
                    var distanceY;

                    isMoved = true;
                    endCoords = {
                        x: e.pageX,
                        y: e.pageY
                    };

                    // reset opacity and transition duration
                    _this.core.$outer.addClass('lg-zoom-dragging');

                    if (allowY) {
                        distanceY = -Math.abs(_$el.attr('data-y')) + (endCoords.y - startCoords.y);
                    } else {
                        distanceY = -Math.abs(_$el.attr('data-y'));
                    }

                    if (allowX) {
                        distanceX = -Math.abs(_$el.attr('data-x')) + (endCoords.x - startCoords.x);
                    } else {
                        distanceX = -Math.abs(_$el.attr('data-x'));
                    }

                    if (_this.core.s.useLeftForZoom) {
                        _$el.css({
                            left: distanceX + 'px',
                            top: distanceY + 'px'
                        });
                    } else {
                        _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                    }
                }
            });

            $(window).on('mouseup.lg.zoom', function (e) {

                if (isDraging) {
                    isDraging = false;
                    _this.core.$outer.removeClass('lg-zoom-dragging');

                    // Fix for chrome mouse move on click
                    if (isMoved && (startCoords.x !== endCoords.x || startCoords.y !== endCoords.y)) {
                        endCoords = {
                            x: e.pageX,
                            y: e.pageY
                        };
                        _this.touchendZoom(startCoords, endCoords, allowX, allowY);
                    }

                    isMoved = false;
                }

                _this.core.$outer.removeClass('lg-grabbing').addClass('lg-grab');
            });
        };

        Zoom.prototype.touchendZoom = function (startCoords, endCoords, allowX, allowY) {

            var _this = this;
            var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
            var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');
            var distanceX = -Math.abs(_$el.attr('data-x')) + (endCoords.x - startCoords.x);
            var distanceY = -Math.abs(_$el.attr('data-y')) + (endCoords.y - startCoords.y);
            var minY = (_this.core.$outer.find('.lg').height() - $image.prop('offsetHeight')) / 2;
            var maxY = Math.abs($image.prop('offsetHeight') * Math.abs($image.attr('data-scale')) - _this.core.$outer.find('.lg').height() + minY);
            var minX = (_this.core.$outer.find('.lg').width() - $image.prop('offsetWidth')) / 2;
            var maxX = Math.abs($image.prop('offsetWidth') * Math.abs($image.attr('data-scale')) - _this.core.$outer.find('.lg').width() + minX);

            if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
                if (allowY) {
                    if (distanceY <= -maxY) {
                        distanceY = -maxY;
                    } else if (distanceY >= -minY) {
                        distanceY = -minY;
                    }
                }

                if (allowX) {
                    if (distanceX <= -maxX) {
                        distanceX = -maxX;
                    } else if (distanceX >= -minX) {
                        distanceX = -minX;
                    }
                }

                if (allowY) {
                    _$el.attr('data-y', Math.abs(distanceY));
                } else {
                    distanceY = -Math.abs(_$el.attr('data-y'));
                }

                if (allowX) {
                    _$el.attr('data-x', Math.abs(distanceX));
                } else {
                    distanceX = -Math.abs(_$el.attr('data-x'));
                }

                if (_this.core.s.useLeftForZoom) {
                    _$el.css({
                        left: distanceX + 'px',
                        top: distanceY + 'px'
                    });
                } else {
                    _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                }
            }
        };

        Zoom.prototype.destroy = function () {

            var _this = this;

            // Unbind all events added by lightGallery zoom plugin
            _this.core.$el.off('.lg.zoom');
            $(window).off('.lg.zoom');
            _this.core.$slide.off('.lg.zoom');
            _this.core.$el.off('.lg.tm.zoom');
            _this.resetZoom();
            clearTimeout(_this.zoomabletimeout);
            _this.zoomabletimeout = false;
        };

        $.fn.lightGallery.modules.zoom = Zoom;
    })();
});

/*! lg-hash - v1.0.2 - 2017-06-03
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define(['jquery'], function (a0) {
            return factory(a0);
        });
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(undefined, function ($) {

    (function () {

        'use strict';

        var defaults = {
            hash: true
        };

        var Hash = function Hash(element) {

            this.core = $(element).data('lightGallery');

            this.core.s = $.extend({}, defaults, this.core.s);

            if (this.core.s.hash) {
                this.oldHash = window.location.hash;
                this.init();
            }

            return this;
        };

        Hash.prototype.init = function () {
            var _this = this;
            var _hash;

            // Change hash value on after each slide transition
            _this.core.$el.on('onAfterSlide.lg.tm', function (event, prevIndex, index) {
                if (history.replaceState) {
                    history.replaceState(null, null, '#lg=' + _this.core.s.galleryId + '&slide=' + index);
                } else {
                    window.location.hash = 'lg=' + _this.core.s.galleryId + '&slide=' + index;
                }
            });

            // Listen hash change and change the slide according to slide value
            $(window).on('hashchange.lg.hash', function () {
                _hash = window.location.hash;
                var _idx = parseInt(_hash.split('&slide=')[1], 10);

                // it galleryId doesn't exist in the url close the gallery
                if (_hash.indexOf('lg=' + _this.core.s.galleryId) > -1) {
                    _this.core.slide(_idx, false, false);
                } else if (_this.core.lGalleryOn) {
                    _this.core.destroy();
                }
            });
        };

        Hash.prototype.destroy = function () {

            if (!this.core.s.hash) {
                return;
            }

            // Reset to old hash value
            if (this.oldHash && this.oldHash.indexOf('lg=' + this.core.s.galleryId) < 0) {
                if (history.replaceState) {
                    history.replaceState(null, null, this.oldHash);
                } else {
                    window.location.hash = this.oldHash;
                }
            } else {
                if (history.replaceState) {
                    history.replaceState(null, document.title, window.location.pathname + window.location.search);
                } else {
                    window.location.hash = '';
                }
            }

            this.core.$el.off('.lg.hash');
        };

        $.fn.lightGallery.modules.hash = Hash;
    })();
});

/*! lg-share - v1.0.2 - 2016-11-26
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2016 Sachin N; Licensed GPLv3 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        define(['jquery'], function (a0) {
            return factory(a0);
        });
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(undefined, function ($) {

    (function () {

        'use strict';

        var defaults = {
            share: true,
            facebook: true,
            facebookDropdownText: 'Facebook',
            twitter: true,
            twitterDropdownText: 'Twitter',
            googlePlus: true,
            googlePlusDropdownText: 'GooglePlus',
            pinterest: true,
            pinterestDropdownText: 'Pinterest'
        };

        var Share = function Share(element) {

            this.core = $(element).data('lightGallery');

            this.core.s = $.extend({}, defaults, this.core.s);
            if (this.core.s.share) {
                this.init();
            }

            return this;
        };

        Share.prototype.init = function () {
            var _this = this;
            var shareHtml = '<span id="lg-share" class="lg-icon">' + '<ul class="lg-dropdown" style="position: absolute;">';
            shareHtml += _this.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + '</span></a></li>' : '';
            shareHtml += _this.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + '</span></a></li>' : '';
            shareHtml += _this.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + '</span></a></li>' : '';
            shareHtml += _this.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + '</span></a></li>' : '';
            shareHtml += '</ul></span>';

            this.core.$outer.find('.lg-toolbar').append(shareHtml);
            this.core.$outer.find('.lg').append('<div id="lg-dropdown-overlay"></div>');
            $('#lg-share').on('click.lg', function () {
                _this.core.$outer.toggleClass('lg-dropdown-active');
            });

            $('#lg-dropdown-overlay').on('click.lg', function () {
                _this.core.$outer.removeClass('lg-dropdown-active');
            });

            _this.core.$el.on('onAfterSlide.lg.tm', function (event, prevIndex, index) {

                setTimeout(function () {
                    $('#lg-share-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(_this.core.$items.eq(index).attr('data-facebook-share-url') || window.location.href));

                    $('#lg-share-twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + _this.core.$items.eq(index).attr('data-tweet-text') + '&url=' + encodeURIComponent(_this.core.$items.eq(index).attr('data-twitter-share-url') || window.location.href));

                    $('#lg-share-googleplus').attr('href', 'https://plus.google.com/share?url=' + encodeURIComponent(_this.core.$items.eq(index).attr('data-googleplus-share-url') || window.location.href));

                    $('#lg-share-pinterest').attr('href', 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(_this.core.$items.eq(index).attr('data-pinterest-share-url') || window.location.href) + '&media=' + encodeURIComponent(_this.core.$items.eq(index).attr('href') || _this.core.$items.eq(index).attr('data-src')) + '&description=' + _this.core.$items.eq(index).attr('data-pinterest-text'));
                }, 100);
            });
        };

        Share.prototype.destroy = function () {};

        $.fn.lightGallery.modules.share = Share;
    })();
});

$.fn.extend({
    switchClass: function switchClass(before, after) {
        $(this).removeClass(before);
        $(this).addClass(after);
    }
});

var $$$ = $$$ || {};
/*************************************************************************************
* resizeend(幅のみ)
*************************************************************************************/
$$$.resizeend = function () {
    var _delta = 200;
    var _rtime;
    var _timeout = false;
    var _ww = 0;

    var _init = function _init(args) {
        _ww = $(window).width();

        $(window).on('resize', function (event) {
            _rtime = new Date();
            if (!_timeout) {
                _timeout = true;
                setTimeout(_judge, _delta);
            }
        });
    };

    var _judge = function _judge() {
        if (new Date() - _rtime < _delta) {
            setTimeout(_judge, _delta);
        } else {
            _timeout = false;
            $$$.viewport.init();
            if (_ww !== $(window).width()) {
                $(window).trigger('resizeend');
            }
            _ww = $(window).width();
        }
    };
    return {
        init: _init
    };
}();

/*************************************************************************************
* pcかスマホか判定（幅で）
*************************************************************************************/
$$$.pcsp = function () {
    var _breakpoint = 736;
    var _mode;
    var _oldMode;
    var _init = function _init(args) {
        _judge();
    };
    var _judge = function _judge() {
        if (_mode) {
            _oldMode = _mode;
        }
        if ($(window).innerWidth() > _breakpoint) {
            _mode = 'pc';
        } else {
            _mode = 'sp';
        }

        //modeが変わったらpcsp.changedイベント発火
        if (_mode !== _oldMode) {
            $(window).trigger('pcsp.changed', [_mode]);
        }
    };
    var _getMode = function _getMode() {
        return _mode;
    };
    var _getBreakpoint = function _getBreakpoint() {
        return _breakpoint;
    };

    return {
        init: _init,
        judge: _judge,
        getMode: _getMode,
        getBreakpoint: _getBreakpoint
    };
}();

/*************************************************************************************
* タブレットにフィットさせる
*************************************************************************************/
$$$.viewport = function () {
    var _tag = $('meta[name=viewport]');
    var _ww = $(window).innerWidth() < window.screen.width ? $(window).innerWidth() : window.screen.width; //get proper width
    var _mw = 1220;
    var _ratio = _ww / _mw;

    var _init = function _init(args) {
        _tag.attr('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0');
        _ww = $(window).innerWidth() < window.screen.width ? $(window).innerWidth() : window.screen.width;
        _ratio = _ww / _mw;
        if (_ww < _mw && _ww > 767) {
            _tag.attr('content', 'width=' + _ww + ', initial-scale=' + _ratio + ', minimum-scale=' + _ratio + ', maximum-scale=' + _ratio);
        }
    };
    return {
        init: _init
    };
}();

/*************************************************************************************
* anchorJump
*************************************************************************************/
$$$.anchorJump = function () {
    var _hash = location.hash;
    var _adjust = 0;

    var _jump = function _jump(args) {
        if (_hash) {
            if ($$$.pcsp.getMode() === 'sp') {
                _adjust = 63 + 10;
            } else {
                _adjust = 0;
            }
            $(window).scrollTop($(_hash).offset().top - _adjust);
        }
    };
    return {
        init: _jump
    };
}();

/*************************************************************************************
* スムーズスクロール
*************************************************************************************/
$$$.smoothScroll = function () {
    var _config = {
        speed: 1000, // 'slow', 'fast', 1000
        easing: 'easeInOutQuad' // 'swing', 'linear'
    };
    var _speed;
    var _hash;
    var _top = 0;
    var _adjust = 0;

    var _getOffset = function _getOffset() {
        _hash = $(this).attr('href');
        if (_hash === '#') {
            _top = 0;
        } else {
            _top = $(_hash).offset().top;
        }
        if ($$$.pcsp.getMode() === 'sp') {
            _adjust = 63 + 10;
        } else {
            _adjust = 0;
        }
        return _top - _adjust;
    };
    var _scroll = function _scroll() {
        var $self = this;

        $(window).on('wheel', function (event) {
            _stopScroll();
        });
        $('html,body').animate({
            scrollTop: _getOffset.call($self)
        }, _config.speed, _config.easing, function () {
            $(window).off('wheel');
        });
    };
    var _stopScroll = function _stopScroll() {
        $('html,body').stop();
    };

    return {
        scroll: _scroll
    };
}();

/*************************************************************************************
* アコーディオン
*************************************************************************************/
$$$.accordion = function () {
    var _init = function _init(args) {
        $('[data-acc-body]').attr('style', '');
        $('[data-acc]').each(function (index, el) {
            var _$root = $(this);
            var _$btn = _$root.find('[data-acc-btn]');
            var _$body = _$root.find('[data-acc-body]');

            _$body.data('acc-max-h', _$body.outerHeight()).css({
                visibility: 'visible'
            });

            _slide.call(_$btn);
        });
    };
    var _slide = function _slide() {
        var _$root = $(this).closest('[data-acc]');
        var _$btn = _$root.find('[data-acc-btn]');
        var _$body = _$root.find('[data-acc-body]');

        if (_$btn.attr('data-acc-btn') === 'open') {
            _$body.css({
                maxHeight: _$body.data('acc-max-h')
            });
        } else {
            _$body.css({
                maxHeight: 0
            });
        }
    };
    var _txtSwitch = function _txtSwitch() {
        var _$root = $(this).closest('[data-acc]');
        var _$txt = _$root.find('[data-acc-btn-txt]');
        var _cash = '';

        if (!_$txt) {
            return false;
        }
        _$txt.each(function (index, el) {
            if ($(this).data('acc-btn-txt') === '') {
                return false;
            }
            _cash = $(this).text();
            $(this).text($(this).data('acc-btn-txt'));
            $(this).data('acc-btn-txt', _cash);
        });
    };
    var _toggle = function _toggle() {
        var _$btns = $(this).closest('[data-acc]').find('[data-acc-btn]');
        if ($(this).attr('data-acc-btn') === 'open') {
            _$btns.each(function (index, el) {
                $(this).attr('data-acc-btn', '');
            });
        } else {
            _$btns.each(function (index, el) {
                $(this).attr('data-acc-btn', 'open');
            });
        }
        _txtSwitch.call($(this));
        _slide.call($(this));
    };

    return {
        init: _init,
        toggle: _toggle
    };
}();

/*************************************************************************************
* オーバーレイ
*************************************************************************************/
$$$.overlay = function () {
    var _init = function _init(args) {};
    var _open = function _open() {
        $('.overlay').switchClass('overlay-isClose', 'overlay-isOpen');
    };
    var _close = function _close() {
        if ($('.overlay').hasClass('overlay-isOpen')) {
            $('.overlay').switchClass('overlay-isOpen', 'overlay-isClose');
        }
    };
    var _toggle = function _toggle() {
        if ($('.overlay').hasClass('overlay-isOpen')) {
            $('.overlay').switchClass('overlay-isOpen', 'overlay-isClose');
        } else {
            $('.overlay').switchClass('overlay-isClose', 'overlay-isOpen');
        }
    };

    return {
        init: _init,
        open: _open,
        close: _close,
        toggle: _toggle
    };
}();

/*************************************************************************************
* アラート
*************************************************************************************/
$$$.alert = function () {
    var _init = function _init() {
        $('body').append('<div class="customDialog">\
				<div class="customDialog_overlay"></div>\
				<div class="customDialog_inner">\
				</div>\
			</div>');
    };
    var _pause = function _pause() {
        return new Promise(function (resolve, reject) {
            $(document).on('click', '.customDialog_btn-ok > a', function (event) {
                event.preventDefault();
                resolve();
            });
        });
    };
    var _open = function _open(options) {
        if (!$('.customDialog')[0]) {
            _init();
        }

        $('.customDialog_inner').html('');
        var _contents = '<p class="customDialog_txt">' + options.text + '</p><ul class="customDialog_btns"><li class="customDialog_btn customDialog_btn-ok"><a href="javascript: void(0);">OK</a></li></ul>';
        $('.customDialog_inner').append(_contents);

        $('.customDialog').switchClass('customDialog-isClose', 'customDialog-isOpen');

        _pause().then(function () {
            _close();
            if (options.ok) {
                options.ok();
            }
        }, function () {
            _close();
        });
    };

    var _close = function _close() {
        $('.customDialog').switchClass('customDialog-isOpen', 'customDialog-isClose');
        $(document).off('.click', '.customDialog_btn > a');
    };

    return {
        open: _open
    };
}();

/*************************************************************************************
* confirm
*************************************************************************************/
$$$.confirm = function () {
    var _init = function _init() {
        $('body').append('<div class="customDialog">\
				<div class="customDialog_overlay"></div>\
				<div class="customDialog_inner">\
				</div>\
			</div>');
    };
    var _pause = function _pause() {
        return new Promise(function (resolve, reject) {
            $(document).on('click', '.customDialog_btn-ok > a', function (event) {
                event.preventDefault();
                resolve();
            });
            $(document).on('click', '.customDialog_btn-cancel > a', function (event) {
                event.preventDefault();
                reject();
            });
        });
    };
    var _open = function _open(options) {
        if (!$('.customDialog')[0]) {
            _init();
        }

        $('.customDialog_inner').html('');
        var _contents = '<p class="customDialog_txt">' + options.text + '</p><ul class="customDialog_btns"><li class="customDialog_btn customDialog_btn-cancel"><a href="javascript: void(0);">キャンセル</a></li><li class="customDialog_btn customDialog_btn-ok"><a href="javascript: void(0);">OK</a></li></ul>';
        $('.customDialog_inner').append(_contents);

        $('.customDialog').switchClass('customDialog-isClose', 'customDialog-isOpen');

        _pause().then(function () {
            _close();
            if (options.ok) {
                options.ok();
            }
            return true;
        }, function () {
            _close();
            if (options.cancel) {
                options.cancel();
            }
            return false;
        });
    };

    var _close = function _close() {
        $('.customDialog').switchClass('customDialog-isOpen', 'customDialog-isClose');
        $(document).off('.click', '.customDialog_btn > a');
    };

    return {
        open: _open
    };
}();

/*************************************************************************************
* loading
*************************************************************************************/
$$$.loading = function () {
    var _init = function _init() {
        $('body').append('<div class="customDialog">\
				<div class="customDialog_overlay"></div>\
				<div class="customDialog_inner">\
				</div>\
			</div>');
    };
    var _open = function _open(options) {
        if (!$('.customDialog')[0]) {
            _init();
        }

        $('.customDialog_inner').html('');
        var _contents = '<p class="customDialog_txt">' + options.text + '</p>';
        $('.customDialog_inner').append(_contents);

        $('.customDialog').switchClass('customDialog-isClose', 'customDialog-isOpen');
    };

    var _close = function _close() {
        $('.customDialog').switchClass('customDialog-isOpen', 'customDialog-isClose');
    };

    return {
        open: _open,
        close: _close
    };
}();

/*************************************************************************************
* tab
*************************************************************************************/
$$$.tab = function () {
    var _init = function _init(args) {
        $('[data-tab]').each(function (index, el) {
            $(this).find('[data-tab-content-active]').removeAttr('data-tab-content-active');
            var _index = 0;
            if ($(this).find('[data-tab-item][data-tab-item-active]').length > 0) {
                _index = $(this).find('[data-tab-item][data-tab-item-active]').eq(0).data('tab-item');
                $(this).find('[data-tab-item-active]').removeAttr('data-tab-item-active');
            }
            $(this).find('[data-tab-item]').eq(_index).attr('data-tab-item-active', '');
            $(this).find('[data-tab-content]').eq(_index).attr('data-tab-content-active', '');
        });
    };
    var _show = function _show() {
        var _$root = $(this).closest('[data-tab]');
        var _index = $(this).data('tab-item');
        _hide.call($(this));
        _$root.find('[data-tab-item=' + _index + ']').attr('data-tab-item-active', '');
        _$root.find('[data-tab-content=' + _index + ']').attr('data-tab-content-active', '');
    };
    var _hide = function _hide() {
        $(this).closest('[data-tab]').find('[data-tab-content-active]').removeAttr('data-tab-content-active');
        $(this).closest('[data-tab]').find('[data-tab-item-active]').removeAttr('data-tab-item-active');
    };

    return {
        init: _init,
        show: _show,
        hide: _hide
    };
}();

/*************************************************************************************
* tree
*************************************************************************************/
$$$.tree = function () {
    var _init = function _init(args) {
        $('.tree_name-isActive').each(function (index, el) {
            var _$parent = $(this).parents('.tree_list');
            _$parent.addClass('tree_list-isOpen');
            _$parent.prev('.tree_head').find('.tree_toggle').addClass('tree_toggle-isOpen');
        });
    };
    var _open = function _open(args) {
        $(this).children('.tree_head').children('.tree_toggle').addClass('tree_toggle-isOpen');
        $(this).children('.tree_list').addClass('tree_list-isOpen');
    };
    var _close = function _close(args) {
        $(this).find('.tree_toggle').removeClass('tree_toggle-isOpen');
        $(this).find('.tree_list').removeClass('tree_list-isOpen');
    };
    var _toggle = function _toggle(args) {
        var _$root = $(this).closest('.tree_item');
        var _$btn = $(this).closest('.tree_toggle');
        if (_$btn.hasClass('tree_toggle-isOpen')) {
            _close.call(_$root);
        } else {
            _open.call(_$root);
        }
    };

    return {
        init: _init,
        toggle: _toggle
    };
}();

/*************************************************************************************
* agree 同意しますか？のやつ
*************************************************************************************/
$$$.agree = function () {
    var _change = function _change(args) {
        var _$target = $(this).data('agree-target');
        if ($(this).data('agree-condition') === 'yes') {
            $('[data-agree="' + _$target + '"]').removeAttr('disabled');
        } else {
            $('[data-agree="' + _$target + '"]').attr('disabled', 'disabled');
        }
    };

    return {
        change: _change
    };
}();

/*************************************************************************************
* contentsModal
*************************************************************************************/
$$$.contentsModal = function () {
    var _onImgLoad = function _onImgLoad(callback) {
        if ($('.contentsModal img')[0]) {
            $('.contentsModal img').each(function () {
                if (this.complete || /*for IE 10-*/$(this).height() > 0) {
                    callback.apply(this);
                } else {
                    $(this).on('load', function () {
                        callback.apply(this);
                    });
                }
            });
        } else {
            callback();
        }
    };
    var _init = function _init(args) {
        $('body').append('<div class="contentsModal"><a href="javascript: void(0);" class="contentsModal_overlay"></a><div class="contentsModal_toolBar"><a href="javascript: void(0);" class="contentsModal_close"></a></div><div class="contentsModal_contents"></div></div>');
    };
    var _destroy = function _destroy(args) {
        $('.contentsModal_contents').html('');
    };
    var _ajax = function _ajax(url) {
        $.ajax({
            url: url
            // dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
            // data: {param1: 'value1'},
        }).done(function (data) {
            $('.contentsModal_contents').append(data);
        }).fail(function () {
            $('.contentsModal_contents').append('<p>読み込みエラー</p>');
        }).always(function () {
            _onImgLoad(function () {
                $('.contentsModal').switchClass('contentsModal-isClose', 'contentsModal-isOpen');
            });
        });
    };
    var _html = function _html(url) {
        $('.contentsModal_contents').append($(url).clone());
        $('.contentsModal').switchClass('contentsModal-isClose', 'contentsModal-isOpen');
    };
    var _open = function _open() {
        if (!$('.contentsModal')[0]) {
            _init();
        }
        _destroy();
        var _url = $(this).attr('href');
        if (_url.match(/^#.+/)) {
            _html(_url);
        } else {
            _ajax(_url);
        }
    };
    var _close = function _close() {
        $('.contentsModal').switchClass('contentsModal-isOpen', 'contentsModal-isClose');
    };

    return {
        open: _open,
        close: _close
    };
}();

/*************************************************************************************
* コメント
*************************************************************************************/
$$$.moduleName = function () {
    var _init = function _init(args) {};

    return {
        init: _init
    };
}();

var $$$ = $$$ || {};

$(function () {
    $$$.pcsp.init();
    $$$.viewport.init();
    $$$.resizeend.init();
    $$$.tab.init();
    $('[data-agree-target]:checked').each(function (index, el) {
        $$$.agree.change.call($(this));
    });

    /*************************************************************************************
    * window load
    *************************************************************************************/
    $(window).on('load', function (event) {
        $$$.anchorJump.init();
    });

    /*************************************************************************************
    * window resize
    *************************************************************************************/
    $(window).on('load resizeend', function (event) {
        $$$.pcsp.judge();
        $.fn.matchHeight._update();
        $$$.accordion.init();
        $$$.tree.init();
    });

    /*************************************************************************************
    * pcspのbreakpointが切り替わったとき
    *************************************************************************************/
    $(window).on('pcsp.changed', function (event, mode) {
        // console.log($$$.pcsp.mode)
    });

    /*************************************************************************************
    * クリックイベント
    *************************************************************************************/
    $(document).on('click', '[href^=#]', function (event) {
        event.preventDefault();
        $$$.smoothScroll.scroll.call($(this));
    });
    $(document).on('click', '[data-acc-btn], [data-acc-close]', function (event) {
        event.preventDefault();
        $$$.accordion.toggle.call($(this));
    });
    $(document).on('click', '[data-tab-item]', function (event) {
        event.preventDefault();
        $$$.tab.show.call($(this));
    });
    $(document).on('click', '.tree_toggle', function (event) {
        event.preventDefault();
        $$$.tree.toggle.call($(this));
    });

    /*************************************************************************************
    * その他イベント
    *************************************************************************************/
    // 同意しますかのやつ
    $(document).on('change', '[data-agree-target]', function (event) {
        event.preventDefault();
        $$$.agree.change.call($(this));
    });

    /*************************************************************************************
    * モーダル
    *************************************************************************************/
    //modal
    $('[data-modal]').lightGallery({
        selector: 'this',
        download: false,
        counter: false,
        zoom: true,
        hash: false,
        share: false,
        fullScreen: false
    });

    //modal-gallery
    $('[data-modal-gallerys]').lightGallery({
        selector: $(this).find('[data-modal-gallery]'),
        download: false,
        counter: true,
        zoom: true,
        hash: false,
        share: false,
        fullScreen: false
    });

    //modal-iframe
    $('[data-modal-iframe]').attr('data-iframe', 'true').lightGallery({
        selector: 'this',
        download: false,
        counter: false,
        zoom: false,
        hash: false,
        share: false,
        fullScreen: false
    });

    //modal-contents
    $(document).on('click', '[data-modal-contents]', function (event) {
        event.preventDefault();
        $$$.contentsModal.open.call($(this));
    });
    $(document).on('click', '.contentsModal_close, .contentsModal_overlay', function (event) {
        event.preventDefault();
        $$$.contentsModal.close($(this));
    });

    /*************************************************************************************
    * プラグイン
    *************************************************************************************/
});