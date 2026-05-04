/*! jQuery v3.2.0 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
        : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";
    var c = []
        , d = a.document
        , e = Object.getPrototypeOf
        , f = c.slice
        , g = c.concat
        , h = c.push
        , i = c.indexOf
        , j = {}
        , k = j.toString
        , l = j.hasOwnProperty
        , m = l.toString
        , n = m.call(Object)
        , o = {};
    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a,
            b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.2.0"
        , r = function (a, b) {
            return new r.fn.init(a, b)
        }
        , s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , t = /^-ms-/
        , u = /-([a-z])/g
        , v = function (a, b) {
            return b.toUpperCase()
        };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function () {
            return f.call(this)
        },
        get: function (a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function (a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this,
                b
        },
        each: function (a) {
            return r.each(this, a)
        },
        map: function (a) {
            return this.pushStack(r.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length
                , c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    },
        r.extend = r.fn.extend = function () {
            var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
            for ("boolean" == typeof g && (j = g,
                g = arguments[h] || {},
                h++),
                "object" == typeof g || r.isFunction(g) || (g = {}),
                h === i && (g = this,
                    h--); h < i; h++)
                if (null != (a = arguments[h]))
                    for (b in a)
                        c = g[b],
                            d = a[b],
                            g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1,
                                f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {},
                                g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }
        ,
        r.extend({
            expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (a) {
                throw new Error(a)
            },
            noop: function () { },
            isFunction: function (a) {
                return "function" === r.type(a)
            },
            isWindow: function (a) {
                return null != a && a === a.window
            },
            isNumeric: function (a) {
                var b = r.type(a);
                return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
            },
            isPlainObject: function (a) {
                var b, c;
                return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor,
                    "function" == typeof c && m.call(c) === n))
            },
            isEmptyObject: function (a) {
                var b;
                for (b in a)
                    return !1;
                return !0
            },
            type: function (a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
            },
            globalEval: function (a) {
                p(a)
            },
            camelCase: function (a) {
                return a.replace(t, "ms-").replace(u, v)
            },
            each: function (a, b) {
                var c, d = 0;
                if (w(a)) {
                    for (c = a.length; d < c; d++)
                        if (b.call(a[d], d, a[d]) === !1)
                            break
                } else
                    for (d in a)
                        if (b.call(a[d], d, a[d]) === !1)
                            break;
                return a
            },
            trim: function (a) {
                return null == a ? "" : (a + "").replace(s, "")
            },
            makeArray: function (a, b) {
                var c = b || [];
                return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)),
                    c
            },
            inArray: function (a, b, c) {
                return null == b ? -1 : i.call(b, a, c)
            },
            merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; d < c; d++)
                    a[e++] = b[d];
                return a.length = e,
                    a
            },
            grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
                    d = !b(a[f], f),
                        d !== h && e.push(a[f]);
                return e
            },
            map: function (a, b, c) {
                var d, e, f = 0, h = [];
                if (w(a))
                    for (d = a.length; f < d; f++)
                        e = b(a[f], f, c),
                            null != e && h.push(e);
                else
                    for (f in a)
                        e = b(a[f], f, c),
                            null != e && h.push(e);
                return g.apply([], h)
            },
            guid: 1,
            proxy: function (a, b) {
                var c, d, e;
                if ("string" == typeof b && (c = a[b],
                    b = a,
                    a = c),
                    r.isFunction(a))
                    return d = f.call(arguments, 2),
                        e = function () {
                            return a.apply(b || this, d.concat(f.call(arguments)))
                        }
                        ,
                        e.guid = a.guid = a.guid || r.guid++,
                        e
            },
            now: Date.now,
            support: o
        }),
        "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
        r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
            j["[object " + b + "]"] = b.toLowerCase()
        });
    function w(a) {
        var b = !!a && "length" in a && a.length
            , c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
            return a === b && (l = !0),
                0
        }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function (a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+", "g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(N), U = new RegExp("^" + L + "$"), V = {
            ID: new RegExp("^#(" + L + ")"),
            CLASS: new RegExp("^\\.(" + L + ")"),
            TAG: new RegExp("^(" + L + "|[*])"),
            ATTR: new RegExp("^" + M),
            PSEUDO: new RegExp("^" + N),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + J + ")$", "i"),
            needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
        }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), aa = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function (a, b) {
            return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
        }, da = function () {
            m()
        }, ea = ta(function (a) {
            return a.disabled === !0 && ("form" in a || "label" in a)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes),
                D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b))
                }
                    : function (a, b) {
                        var c = a.length
                            , d = 0;
                        while (a[c++] = b[d++])
                            ;
                        a.length = c - 1
                    }
            }
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9;
            if (d = d || [],
                "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
                b = b || n,
                p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f)))
                                return d;
                            if (j.id === f)
                                return d.push(j),
                                    d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j),
                                d
                    } else {
                        if (l[2])
                            return G.apply(d, b.getElementsByTagName(a)),
                                d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return G.apply(d, b.getElementsByClassName(f)),
                                d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w)
                        s = b,
                            r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u),
                            o = g(a),
                            h = o.length;
                        while (h--)
                            o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","),
                            s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r)
                        try {
                            return G.apply(d, s.querySelectorAll(r)),
                                d
                        } catch (x) { } finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                    b[c + " "] = e
            }
            return b
        }
        function ia(a) {
            return a[u] = !0,
                a
        }
        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                    b = null
            }
        }
        function ka(a, b) {
            var c = a.split("|")
                , e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function la(a, b) {
            var c = b && a
                , d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function oa(a) {
            return function (b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }
        function pa(a) {
            return ia(function (b) {
                return b = +b,
                    ia(function (c, d) {
                        var e, f = a([], c.length, b), g = f.length;
                        while (g--)
                            c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
            })
        }
        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {},
            f = ga.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName
            }
            ,
            m = ga.setDocument = function (a) {
                var b, e, g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
                    o = n.documentElement,
                    p = !f(n),
                    v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
                    c.attributes = ja(function (a) {
                        return a.className = "i",
                            !a.getAttribute("className")
                    }),
                    c.getElementsByTagName = ja(function (a) {
                        return a.appendChild(n.createComment("")),
                            !a.getElementsByTagName("*").length
                    }),
                    c.getElementsByClassName = Y.test(n.getElementsByClassName),
                    c.getById = ja(function (a) {
                        return o.appendChild(a).id = u,
                            !n.getElementsByName || !n.getElementsByName(u).length
                    }),
                    c.getById ? (d.filter.ID = function (a) {
                        var b = a.replace(_, aa);
                        return function (a) {
                            return a.getAttribute("id") === b
                        }
                    }
                        ,
                        d.find.ID = function (a, b) {
                            if ("undefined" != typeof b.getElementById && p) {
                                var c = b.getElementById(a);
                                return c ? [c] : []
                            }
                        }
                    ) : (d.filter.ID = function (a) {
                        var b = a.replace(_, aa);
                        return function (a) {
                            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                            return c && c.value === b
                        }
                    }
                        ,
                        d.find.ID = function (a, b) {
                            if ("undefined" != typeof b.getElementById && p) {
                                var c, d, e, f = b.getElementById(a);
                                if (f) {
                                    if (c = f.getAttributeNode("id"),
                                        c && c.value === a)
                                        return [f];
                                    e = b.getElementsByName(a),
                                        d = 0;
                                    while (f = e[d++])
                                        if (c = f.getAttributeNode("id"),
                                            c && c.value === a)
                                            return [f]
                                }
                                return []
                            }
                        }
                    ),
                    d.find.TAG = c.getElementsByTagName ? function (a, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                    }
                        : function (a, b) {
                            var c, d = [], e = 0, f = b.getElementsByTagName(a);
                            if ("*" === a) {
                                while (c = f[e++])
                                    1 === c.nodeType && d.push(c);
                                return d
                            }
                            return f
                        }
                    ,
                    d.find.CLASS = c.getElementsByClassName && function (a, b) {
                        if ("undefined" != typeof b.getElementsByClassName && p)
                            return b.getElementsByClassName(a)
                    }
                    ,
                    r = [],
                    q = [],
                    (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
                        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"),
                            a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"),
                            a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                            a.querySelectorAll(":checked").length || q.push(":checked"),
                            a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                    }),
                        ja(function (a) {
                            a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var b = n.createElement("input");
                            b.setAttribute("type", "hidden"),
                                a.appendChild(b).setAttribute("name", "D"),
                                a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="),
                                2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"),
                                o.appendChild(a).disabled = !0,
                                2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"),
                                a.querySelectorAll("*,:x"),
                                q.push(",.*:")
                        })),
                    (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                        c.disconnectedMatch = s.call(a, "*"),
                            s.call(a, "[s!='']:x"),
                            r.push("!=", N)
                    }),
                    q = q.length && new RegExp(q.join("|")),
                    r = r.length && new RegExp(r.join("|")),
                    b = Y.test(o.compareDocumentPosition),
                    t = b || Y.test(o.contains) ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a
                            , d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    }
                        : function (a, b) {
                            if (b)
                                while (b = b.parentNode)
                                    if (b === a)
                                        return !0;
                            return !1
                        }
                    ,
                    B = b ? function (a, b) {
                        if (a === b)
                            return l = !0,
                                0;
                        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                            1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
                    }
                        : function (a, b) {
                            if (a === b)
                                return l = !0,
                                    0;
                            var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                            if (!e || !f)
                                return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                            if (e === f)
                                return la(a, b);
                            c = a;
                            while (c = c.parentNode)
                                g.unshift(c);
                            c = b;
                            while (c = c.parentNode)
                                h.unshift(c);
                            while (g[d] === h[d])
                                d++;
                            return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
                        }
                    ,
                    n) : n
            }
            ,
            ga.matches = function (a, b) {
                return ga(a, null, null, b)
            }
            ,
            ga.matchesSelector = function (a, b) {
                if ((a.ownerDocument || a) !== n && m(a),
                    b = b.replace(S, "='$1']"),
                    c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
                    try {
                        var d = s.call(a, b);
                        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                            return d
                    } catch (e) { }
                return ga(b, n, null, [a]).length > 0
            }
            ,
            ga.contains = function (a, b) {
                return (a.ownerDocument || a) !== n && m(a),
                    t(a, b)
            }
            ,
            ga.attr = function (a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()]
                    , f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }
            ,
            ga.escape = function (a) {
                return (a + "").replace(ba, ca)
            }
            ,
            ga.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }
            ,
            ga.uniqueSort = function (a) {
                var b, d = [], e = 0, f = 0;
                if (l = !c.detectDuplicates,
                    k = !c.sortStable && a.slice(0),
                    a.sort(B),
                    l) {
                    while (b = a[f++])
                        b === a[f] && (e = d.push(f));
                    while (e--)
                        a.splice(d[e], 1)
                }
                return k = null,
                    a
            }
            ,
            e = ga.getText = function (a) {
                var b, c = "", d = 0, f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent)
                            return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling)
                            c += e(a)
                    } else if (3 === f || 4 === f)
                        return a.nodeValue
                } else
                    while (b = a[d++])
                        c += e(b);
                return c
            }
            ,
            d = ga.selectors = {
                cacheLength: 50,
                createPseudo: ia,
                match: V,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (a) {
                        return a[1] = a[1].replace(_, aa),
                            a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa),
                            "~=" === a[2] && (a[3] = " " + a[3] + " "),
                            a.slice(0, 4)
                    },
                    CHILD: function (a) {
                        return a[1] = a[1].toLowerCase(),
                            "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]),
                                a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                                a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]),
                            a
                    },
                    PSEUDO: function (a) {
                        var b, c = !a[6] && a[2];
                        return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                            a[2] = c.slice(0, b)),
                            a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(_, aa).toLowerCase();
                        return "*" === a ? function () {
                            return !0
                        }
                            : function (a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b
                            }
                    },
                    CLASS: function (a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (a, b, c) {
                        return function (d) {
                            var e = ga.attr(d, a);
                            return null == e ? "!=" === b : !b || (e += "",
                                "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                        }
                    },
                    CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3)
                            , g = "last" !== a.slice(-4)
                            , h = "of-type" === b;
                        return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        }
                            : function (b, c, i) {
                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                                if (q) {
                                    if (f) {
                                        while (p) {
                                            m = b;
                                            while (m = m[p])
                                                if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                                    return !1;
                                            o = p = "only" === a && !o && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (o = [g ? q.firstChild : q.lastChild],
                                        g && s) {
                                        m = q,
                                            l = m[u] || (m[u] = {}),
                                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                            j = k[a] || [],
                                            n = j[0] === w && j[1],
                                            t = n && j[2],
                                            m = n && q.childNodes[n];
                                        while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                            if (1 === m.nodeType && ++t && m === b) {
                                                k[a] = [w, n, t];
                                                break
                                            }
                                    } else if (s && (m = b,
                                        l = m[u] || (m[u] = {}),
                                        k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                        j = k[a] || [],
                                        n = j[0] === w && j[1],
                                        t = n),
                                        t === !1)
                                        while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                            if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
                                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                                k[a] = [w, t]),
                                                m === b))
                                                break;
                                    return t -= e,
                                        t === d || t % d === 0 && t / d >= 0
                                }
                            }
                    },
                    PSEUDO: function (a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                            d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                                var d, f = e(a, b), g = f.length;
                                while (g--)
                                    d = I(a, f[g]),
                                        a[d] = !(c[d] = f[g])
                            }) : function (a) {
                                return e(a, 0, c)
                            }
                        ) : e
                    }
                },
                pseudos: {
                    not: ia(function (a) {
                        var b = []
                            , c = []
                            , d = h(a.replace(P, "$1"));
                        return d[u] ? ia(function (a, b, c, e) {
                            var f, g = d(a, null, e, []), h = a.length;
                            while (h--)
                                (f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, e, f) {
                            return b[0] = a,
                                d(b, null, f, c),
                                b[0] = null,
                                !c.pop()
                        }
                    }),
                    has: ia(function (a) {
                        return function (b) {
                            return ga(a, b).length > 0
                        }
                    }),
                    contains: ia(function (a) {
                        return a = a.replace(_, aa),
                            function (b) {
                                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                            }
                    }),
                    lang: ia(function (a) {
                        return U.test(a || "") || ga.error("unsupported lang: " + a),
                            a = a.replace(_, aa).toLowerCase(),
                            function (b) {
                                var c;
                                do
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                        return c = c.toLowerCase(),
                                            c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function (a) {
                        return a === o
                    },
                    focus: function (a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: oa(!1),
                    disabled: oa(!0),
                    checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex,
                            a.selected === !0
                    },
                    empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function (a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function (a) {
                        return X.test(a.nodeName)
                    },
                    input: function (a) {
                        return W.test(a.nodeName)
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: pa(function () {
                        return [0]
                    }),
                    last: pa(function (a, b) {
                        return [b - 1]
                    }),
                    eq: pa(function (a, b, c) {
                        return [c < 0 ? c + b : c]
                    }),
                    even: pa(function (a, b) {
                        for (var c = 0; c < b; c += 2)
                            a.push(c);
                        return a
                    }),
                    odd: pa(function (a, b) {
                        for (var c = 1; c < b; c += 2)
                            a.push(c);
                        return a
                    }),
                    lt: pa(function (a, b, c) {
                        for (var d = c < 0 ? c + b : c; --d >= 0;)
                            a.push(d);
                        return a
                    }),
                    gt: pa(function (a, b, c) {
                        for (var d = c < 0 ? c + b : c; ++d < b;)
                            a.push(d);
                        return a
                    })
                }
            },
            d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = na(b);
        function ra() { }
        ra.prototype = d.filters = d.pseudos,
            d.setFilters = new ra,
            g = ga.tokenize = function (a, b) {
                var c, e, f, g, h, i, j, k = z[a + " "];
                if (k)
                    return b ? 0 : k.slice(0);
                h = a,
                    i = [],
                    j = d.preFilter;
                while (h) {
                    c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                        i.push(f = [])),
                        c = !1,
                        (e = R.exec(h)) && (c = e.shift(),
                            f.push({
                                value: c,
                                type: e[0].replace(P, " ")
                            }),
                            h = h.slice(c.length));
                    for (g in d.filter)
                        !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                            f.push({
                                value: c,
                                type: g,
                                matches: e
                            }),
                            h = h.slice(c.length));
                    if (!c)
                        break
                }
                return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
            }
            ;
        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++)
                d += a[b].value;
            return d
        }
        function ta(a, b, c) {
            var d = b.dir
                , e = b.next
                , f = e || d
                , g = c && "parentNode" === f
                , h = x++;
            return b.first ? function (b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g)
                        return a(b, c, e);
                return !1
            }
                : function (b, c, i) {
                    var j, k, l, m = [w, h];
                    if (i) {
                        while (b = b[d])
                            if ((1 === b.nodeType || g) && a(b, c, i))
                                return !0
                    } else
                        while (b = b[d])
                            if (1 === b.nodeType || g)
                                if (l = b[u] || (b[u] = {}),
                                    k = l[b.uniqueID] || (l[b.uniqueID] = {}),
                                    e && e === b.nodeName.toLowerCase())
                                    b = b[d] || b;
                                else {
                                    if ((j = k[f]) && j[0] === w && j[1] === h)
                                        return m[2] = j[2];
                                    if (k[f] = m,
                                        m[2] = a(b, c, i))
                                        return !0
                                }
                    return !1
                }
        }
        function ua(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
                : a[0]
        }
        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++)
                ga(a, b[d], c);
            return c
        }
        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                    j && b.push(h)));
            return g
        }
        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)),
                e && !e[u] && (e = xa(e, f)),
                ia(function (f, g, h, i) {
                    var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i),
                        d) {
                        j = wa(r, n),
                            d(j, [], h, i),
                            k = j.length;
                        while (k--)
                            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                j = [],
                                    k = r.length;
                                while (k--)
                                    (l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i)
                            }
                            k = r.length;
                            while (k--)
                                (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    } else
                        r = wa(r === g ? r.splice(o, r.length) : r),
                            e ? e(null, g, r, i) : G.apply(g, r)
                })
        }
        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
                return a === b
            }, h, !0), l = ta(function (a) {
                return I(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                    e
            }
            ]; i < f; i++)
                if (c = d.relative[a[i].type])
                    m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                        c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type])
                                break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                }
            return ua(m)
        }
        function za(a, b) {
            var c = b.length > 0
                , e = a.length > 0
                , f = function (f, g, h, i, k) {
                    var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0,
                                g || l.ownerDocument === n || (m(l),
                                    h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--,
                            f && t.push(l))
                    }
                    if (r += s,
                        c && s !== r) {
                        o = 0;
                        while (q = b[o++])
                            q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--)
                                    t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u),
                            k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y,
                        j = v),
                        t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                    c = b.length;
                while (c--)
                    f = ya(b[c]),
                        f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)),
                    f.selector = a
            }
            return f
        }
            ,
            i = ga.select = function (a, b, c, e) {
                var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g(a = m.selector || a);
                if (c = c || [],
                    1 === n.length) {
                    if (i = n[0] = n[0].slice(0),
                        i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                        if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0],
                            !b)
                            return c;
                        m && (b = b.parentNode),
                            a = a.slice(i.shift().value.length)
                    }
                    f = V.needsContext.test(a) ? 0 : i.length;
                    while (f--) {
                        if (j = i[f],
                            d.relative[k = j.type])
                            break;
                        if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                            if (i.splice(f, 1),
                                a = e.length && sa(i),
                                !a)
                                return G.apply(c, e),
                                    c;
                            break
                        }
                    }
                }
                return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b),
                    c
            }
            ,
            c.sortStable = u.split("").sort(B).join("") === u,
            c.detectDuplicates = !!l,
            m(),
            c.sortDetached = ja(function (a) {
                return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
            }),
            ja(function (a) {
                return a.innerHTML = "<a href='#'></a>",
                    "#" === a.firstChild.getAttribute("href")
            }) || ka("type|href|height|width", function (a, b, c) {
                if (!c)
                    return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }),
            c.attributes && ja(function (a) {
                return a.innerHTML = "<input/>",
                    a.firstChild.setAttribute("value", ""),
                    "" === a.firstChild.getAttribute("value")
            }) || ka("value", function (a, b, c) {
                if (!c && "input" === a.nodeName.toLowerCase())
                    return a.defaultValue
            }),
            ja(function (a) {
                return null == a.getAttribute("disabled")
            }) || ka(J, function (a, b, c) {
                var d;
                if (!c)
                    return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }),
            ga
    }(a);
    r.find = x,
        r.expr = x.selectors,
        r.expr[":"] = r.expr.pseudos,
        r.uniqueSort = r.unique = x.uniqueSort,
        r.text = x.getText,
        r.isXMLDoc = x.isXML,
        r.contains = x.contains,
        r.escapeSelector = x.escape;
    var y = function (a, b, c) {
        var d = []
            , e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && r(a).is(c))
                    break;
                d.push(a)
            }
        return d
    }
        , z = function (a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
        , A = r.expr.match.needsContext;
    function B(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
        , D = /^.[^:#\[\.,]*$/;
    function E(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function (a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c
        }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a),
            r.grep(a, function (a) {
                return i.call(b, a) > -1 !== c && 1 === a.nodeType
            }))
    }
    r.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
                return 1 === a.nodeType
            }))
    }
        ,
        r.fn.extend({
            find: function (a) {
                var b, c, d = this.length, e = this;
                if ("string" != typeof a)
                    return this.pushStack(r(a).filter(function () {
                        for (b = 0; b < d; b++)
                            if (r.contains(e[b], this))
                                return !0
                    }));
                for (c = this.pushStack([]),
                    b = 0; b < d; b++)
                    r.find(a, e[b], c);
                return d > 1 ? r.uniqueSort(c) : c
            },
            filter: function (a) {
                return this.pushStack(E(this, a || [], !1))
            },
            not: function (a) {
                return this.pushStack(E(this, a || [], !0))
            },
            is: function (a) {
                return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
            }
        });
    var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, H = r.fn.init = function (a, b, c) {
        var e, f;
        if (!a)
            return this;
        if (c = c || F,
            "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a),
                !e || !e[1] && b)
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof r ? b[0] : b,
                    r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
                    C.test(e[1]) && r.isPlainObject(b))
                    for (e in b)
                        r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return f = d.getElementById(e[2]),
                f && (this[0] = f,
                    this.length = 1),
                this
        }
        return a.nodeType ? (this[0] = a,
            this.length = 1,
            this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
    }
        ;
    H.prototype = r.fn,
        F = r(d);
    var I = /^(?:parents|prev(?:Until|All))/
        , J = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    r.fn.extend({
        has: function (a) {
            var b = r(a, this)
                , c = b.length;
            return this.filter(function () {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a]))
                        return !0
            })
        },
        closest: function (a, b) {
            var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function K(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType)
            ;
        return a
    }
    r.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return y(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function (a) {
            return K(a, "nextSibling")
        },
        prev: function (a) {
            return K(a, "previousSibling")
        },
        nextAll: function (a) {
            return y(a, "nextSibling")
        },
        prevAll: function (a) {
            return y(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function (a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return z(a.firstChild)
        },
        contents: function (a) {
            return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a),
                r.merge([], a.childNodes))
        }
    }, function (a, b) {
        r.fn[a] = function (c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
                d && "string" == typeof d && (e = r.filter(d, e)),
                this.length > 1 && (J[a] || r.uniqueSort(e),
                    I.test(a) && e.reverse()),
                this.pushStack(e)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;
    function M(a) {
        var b = {};
        return r.each(a.match(L) || [], function (a, c) {
            b[c] = !0
        }),
            b
    }
    r.Callbacks = function (a) {
        a = "string" == typeof a ? M(a) : r.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function () {
            for (e = e || a.once,
                d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length)
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
                        c = !1)
            }
            a.memory || (c = !1),
                b = !1,
                e && (f = c ? [] : "")
        }, j = {
            add: function () {
                return f && (c && !b && (h = f.length - 1,
                    g.push(c)),
                    function d(b) {
                        r.each(b, function (b, c) {
                            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                        })
                    }(arguments),
                    c && !b && i()),
                    this
            },
            remove: function () {
                return r.each(arguments, function (a, b) {
                    var c;
                    while ((c = r.inArray(b, f, c)) > -1)
                        f.splice(c, 1),
                            c <= h && h--
                }),
                    this
            },
            has: function (a) {
                return a ? r.inArray(a, f) > -1 : f.length > 0
            },
            empty: function () {
                return f && (f = []),
                    this
            },
            disable: function () {
                return e = g = [],
                    f = c = "",
                    this
            },
            disabled: function () {
                return !f
            },
            lock: function () {
                return e = g = [],
                    c || b || (f = c = ""),
                    this
            },
            locked: function () {
                return !!e
            },
            fireWith: function (a, c) {
                return e || (c = c || [],
                    c = [a, c.slice ? c.slice() : c],
                    g.push(c),
                    b || i()),
                    this
            },
            fire: function () {
                return j.fireWith(this, arguments),
                    this
            },
            fired: function () {
                return !!d
            }
        };
        return j
    }
        ;
    function N(a) {
        return a
    }
    function O(a) {
        throw a
    }
    function P(a, b, c, d) {
        var e;
        try {
            a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d))
        } catch (a) {
            c.apply(void 0, [a])
        }
    }
    r.extend({
        Deferred: function (b) {
            var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]]
                , d = "pending"
                , e = {
                    state: function () {
                        return d
                    },
                    always: function () {
                        return f.done(arguments).fail(arguments),
                            this
                    },
                    "catch": function (a) {
                        return e.then(null, a)
                    },
                    pipe: function () {
                        var a = arguments;
                        return r.Deferred(function (b) {
                            r.each(c, function (c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function () {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }),
                                a = null
                        }).promise()
                    },
                    then: function (b, d, e) {
                        var f = 0;
                        function g(b, c, d, e) {
                            return function () {
                                var h = this
                                    , i = arguments
                                    , j = function () {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (a = d.apply(h, i),
                                                a === c.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then,
                                                r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++,
                                                    j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0,
                                                        i = [a]),
                                                        (e || c.resolveWith)(h, i))
                                        }
                                    }
                                    , k = e ? j : function () {
                                        try {
                                            j()
                                        } catch (a) {
                                            r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace),
                                                b + 1 >= f && (d !== O && (h = void 0,
                                                    i = [a]),
                                                    c.rejectWith(h, i))
                                        }
                                    }
                                    ;
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()),
                                    a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function (a) {
                            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)),
                                c[1][3].add(g(0, a, r.isFunction(b) ? b : N)),
                                c[2][3].add(g(0, a, r.isFunction(d) ? d : O))
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? r.extend(a, e) : e
                    }
                }
                , f = {};
            return r.each(c, function (a, b) {
                var g = b[2]
                    , h = b[5];
                e[b[1]] = g.add,
                    h && g.add(function () {
                        d = h
                    }, c[3 - a][2].disable, c[0][2].lock),
                    g.add(b[3].fire),
                    f[b[0]] = function () {
                        return f[b[0] + "With"](this === f ? void 0 : this, arguments),
                            this
                    }
                    ,
                    f[b[0] + "With"] = g.fireWith
            }),
                e.promise(f),
                b && b.call(f, f),
                f
        },
        when: function (a) {
            var b = arguments.length
                , c = b
                , d = Array(c)
                , e = f.call(arguments)
                , g = r.Deferred()
                , h = function (a) {
                    return function (c) {
                        d[a] = this,
                            e[a] = arguments.length > 1 ? f.call(arguments) : c,
                            --b || g.resolveWith(d, e)
                    }
                };
            if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b),
                "pending" === g.state() || r.isFunction(e[c] && e[c].then)))
                return g.then();
            while (c--)
                P(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }
        ,
        r.readyException = function (b) {
            a.setTimeout(function () {
                throw b
            })
        }
        ;
    var R = r.Deferred();
    r.fn.ready = function (a) {
        return R.then(a)["catch"](function (a) {
            r.readyException(a)
        }),
            this
    }
        ,
        r.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (a) {
                (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0,
                    a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
            }
        }),
        r.ready.then = R.then;
    function S() {
        d.removeEventListener("DOMContentLoaded", S),
            a.removeEventListener("load", S),
            r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S),
        a.addEventListener("load", S));
    var T = function (a, b, c, d, e, f, g) {
        var h = 0
            , i = a.length
            , j = null == c;
        if ("object" === r.type(c)) {
            e = !0;
            for (h in c)
                T(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
            r.isFunction(d) || (g = !0),
            j && (g ? (b.call(a, d),
                b = null) : (j = b,
                    b = function (a, b, c) {
                        return j.call(r(a), c)
                    }
            )),
            b))
            for (; h < i; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
        , U = function (a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    function V() {
        this.expando = r.expando + V.uid++
    }
    V.uid = 1,
        V.prototype = {
            cache: function (a) {
                var b = a[this.expando];
                return b || (b = {},
                    U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                        value: b,
                        configurable: !0
                    }))),
                    b
            },
            set: function (a, b, c) {
                var d, e = this.cache(a);
                if ("string" == typeof b)
                    e[r.camelCase(b)] = c;
                else
                    for (d in b)
                        e[r.camelCase(d)] = b[d];
                return e
            },
            get: function (a, b) {
                return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
            },
            access: function (a, b, c) {
                return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c),
                    void 0 !== c ? c : b)
            },
            remove: function (a, b) {
                var c, d = a[this.expando];
                if (void 0 !== d) {
                    if (void 0 !== b) {
                        Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b),
                            b = b in d ? [b] : b.match(L) || []),
                            c = b.length;
                        while (c--)
                            delete d[b[c]]
                    }
                    (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
                }
            },
            hasData: function (a) {
                var b = a[this.expando];
                return void 0 !== b && !r.isEmptyObject(b)
            }
        };
    var W = new V
        , X = new V
        , Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , Z = /[A-Z]/g;
    function $(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a)
    }
    function _(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Z, "-$&").toLowerCase(),
                c = a.getAttribute(d),
                "string" == typeof c) {
                try {
                    c = $(c)
                } catch (e) { }
                X.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    r.extend({
        hasData: function (a) {
            return X.hasData(a) || W.hasData(a)
        },
        data: function (a, b, c) {
            return X.access(a, b, c)
        },
        removeData: function (a, b) {
            X.remove(a, b)
        },
        _data: function (a, b, c) {
            return W.access(a, b, c)
        },
        _removeData: function (a, b) {
            W.remove(a, b)
        }
    }),
        r.fn.extend({
            data: function (a, b) {
                var c, d, e, f = this[0], g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = X.get(f),
                        1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
                        c = g.length;
                        while (c--)
                            g[c] && (d = g[c].name,
                                0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)),
                                    _(f, d, e[d])));
                        W.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function () {
                    X.set(this, a)
                }) : T(this, function (b) {
                    var c;
                    if (f && void 0 === b) {
                        if (c = X.get(f, a),
                            void 0 !== c)
                            return c;
                        if (c = _(f, a),
                            void 0 !== c)
                            return c
                    } else
                        this.each(function () {
                            X.set(this, a, b)
                        })
                }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function (a) {
                return this.each(function () {
                    X.remove(this, a)
                })
            }
        }),
        r.extend({
            queue: function (a, b, c) {
                var d;
                if (a)
                    return b = (b || "fx") + "queue",
                        d = W.get(a, b),
                        c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)),
                        d || []
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = r.queue(a, b)
                    , d = c.length
                    , e = c.shift()
                    , f = r._queueHooks(a, b)
                    , g = function () {
                        r.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(),
                    d--),
                    e && ("fx" === b && c.unshift("inprogress"),
                        delete f.stop,
                        e.call(a, g, f)),
                    !d && f && f.empty.fire()
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return W.get(a, c) || W.access(a, c, {
                    empty: r.Callbacks("once memory").add(function () {
                        W.remove(a, [b + "queue", c])
                    })
                })
            }
        }),
        r.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return "string" != typeof a && (b = a,
                    a = "fx",
                    c--),
                    arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                        var c = r.queue(this, a, b);
                        r._queueHooks(this, a),
                            "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
                    })
            },
            dequeue: function (a) {
                return this.each(function () {
                    r.dequeue(this, a)
                })
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", [])
            },
            promise: function (a, b) {
                var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function () {
                    --d || e.resolveWith(f, [f])
                };
                "string" != typeof a && (b = a,
                    a = void 0),
                    a = a || "fx";
                while (g--)
                    c = W.get(f[g], a + "queueHooks"),
                        c && c.empty && (d++,
                            c.empty.add(h));
                return h(),
                    e.promise(b)
            }
        });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i")
        , ca = ["Top", "Right", "Bottom", "Left"]
        , da = function (a, b) {
            return a = b || a,
                "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
        }
        , ea = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b)
                g[f] = a.style[f],
                    a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)
                a.style[f] = g[f];
            return e
        };
    function fa(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function () {
            return d.cur()
        }
            : function () {
                return r.css(a, b, "")
            }
            , i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"), k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
                c = c || [],
                k = +i || 1;
            do
                f = f || ".5",
                    k /= f,
                    r.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0,
            e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
            d && (d.unit = j,
                d.start = k,
                d.end = e)),
            e
    }
    var ga = {};
    function ha(a) {
        var b, c = a.ownerDocument, d = a.nodeName, e = ga[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)),
            e = r.css(b, "display"),
            b.parentNode.removeChild(b),
            "none" === e && (e = "block"),
            ga[d] = e,
            e)
    }
    function ia(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
            d = a[f],
                d.style && (c = d.style.display,
                    b ? ("none" === c && (e[f] = W.get(d, "display") || null,
                        e[f] || (d.style.display = "")),
                        "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none",
                            W.set(d, "display", c)));
        for (f = 0; f < g; f++)
            null != e[f] && (a[f].style.display = e[f]);
        return a
    }
    r.fn.extend({
        show: function () {
            return ia(this, !0)
        },
        hide: function () {
            return ia(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                da(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ja = /^(?:checkbox|radio)$/i
        , ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
        , la = /^$|\/(?:java|ecma)script/i
        , ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ma.optgroup = ma.option,
        ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead,
        ma.th = ma.td;
    function na(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [],
            void 0 === b || b && B(a, b) ? r.merge([a], c) : c
    }
    function oa(a, b) {
        for (var c = 0, d = a.length; c < d; c++)
            W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"))
    }
    var pa = /<|&#?\w+;/;
    function qa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n],
                f || 0 === f)
                if ("object" === r.type(f))
                    r.merge(m, f.nodeType ? [f] : f);
                else if (pa.test(f)) {
                    g = g || l.appendChild(b.createElement("div")),
                        h = (ka.exec(f) || ["", ""])[1].toLowerCase(),
                        i = ma[h] || ma._default,
                        g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2],
                        k = i[0];
                    while (k--)
                        g = g.lastChild;
                    r.merge(m, g.childNodes),
                        g = l.firstChild,
                        g.textContent = ""
                } else
                    m.push(b.createTextNode(f));
        l.textContent = "",
            n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1)
                e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f),
                g = na(l.appendChild(f), "script"),
                j && oa(g),
                c) {
                k = 0;
                while (f = g[k++])
                    la.test(f.type || "") && c.push(f)
            }
        return l
    }
    !function () {
        var a = d.createDocumentFragment()
            , b = a.appendChild(d.createElement("div"))
            , c = d.createElement("input");
        c.setAttribute("type", "radio"),
            c.setAttribute("checked", "checked"),
            c.setAttribute("name", "t"),
            b.appendChild(c),
            o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
            b.innerHTML = "<textarea>x</textarea>",
            o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var ra = d.documentElement
        , sa = /^key/
        , ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , ua = /^([^.]*)(?:\.(.+)|)/;
    function va() {
        return !0
    }
    function wa() {
        return !1
    }
    function xa() {
        try {
            return d.activeElement
        } catch (a) { }
    }
    function ya(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c,
                c = void 0);
            for (h in b)
                ya(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c,
            d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
                d = void 0) : (e = d,
                    d = c,
                    c = void 0)),
            e === !1)
            e = wa;
        else if (!e)
            return a;
        return 1 === f && (g = e,
            e = function (a) {
                return r().off(a),
                    g.apply(this, arguments)
            }
            ,
            e.guid = g.guid || (g.guid = r.guid++)),
            a.each(function () {
                r.event.add(this, b, e, d, c)
            })
    }
    r.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a);
            if (q) {
                c.handler && (f = c,
                    c = f.handler,
                    e = f.selector),
                    e && r.find.matchesSelector(ra, e),
                    c.guid || (c.guid = r.guid++),
                    (i = q.events) || (i = q.events = {}),
                    (g = q.handle) || (g = q.handle = function (b) {
                        return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                    }
                    ),
                    b = (b || "").match(L) || [""],
                    j = b.length;
                while (j--)
                    h = ua.exec(b[j]) || [],
                        n = p = h[1],
                        o = (h[2] || "").split(".").sort(),
                        n && (l = r.event.special[n] || {},
                            n = (e ? l.delegateType : l.bindType) || n,
                            l = r.event.special[n] || {},
                            k = r.extend({
                                type: n,
                                origType: p,
                                data: d,
                                handler: c,
                                guid: c.guid,
                                selector: e,
                                needsContext: e && r.expr.match.needsContext.test(e),
                                namespace: o.join(".")
                            }, f),
                            (m = i[n]) || (m = i[n] = [],
                                m.delegateCount = 0,
                                l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)),
                            l.add && (l.add.call(a, k),
                                k.handler.guid || (k.handler.guid = c.guid)),
                            e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                            r.event.global[n] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(L) || [""],
                    j = b.length;
                while (j--)
                    if (h = ua.exec(b[j]) || [],
                        n = p = h[1],
                        o = (h[2] || "").split(".").sort(),
                        n) {
                        l = r.event.special[n] || {},
                            n = (d ? l.delegateType : l.bindType) || n,
                            m = i[n] || [],
                            h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            g = f = m.length;
                        while (f--)
                            k = m[f],
                                !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                                    k.selector && m.delegateCount--,
                                    l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle),
                            delete i[n])
                    } else
                        for (n in i)
                            r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && W.remove(a, "handle events")
            }
        },
        dispatch: function (a) {
            var b = r.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (W.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {};
            for (i[0] = b,
                c = 1; c < arguments.length; c++)
                i[c] = arguments[c];
            if (b.delegateTarget = this,
                !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j),
                    c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem,
                        d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
                        b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g,
                            b.data = g.data,
                            e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                            void 0 !== e && (b.result = e) === !1 && (b.preventDefault(),
                                b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b),
                    b.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [],
                            g = {},
                            c = 0; c < i; c++)
                            d = b[c],
                                e = d.selector + " ",
                                void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length),
                                g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    }
            return j = this,
                i < b.length && h.push({
                    elem: j,
                    handlers: b.slice(i)
                }),
                h
        },
        addProp: function (a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function () {
                    if (this.originalEvent)
                        return b(this.originalEvent)
                }
                    : function () {
                        if (this.originalEvent)
                            return this.originalEvent[a]
                    }
                ,
                set: function (b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function (a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== xa() && this.focus)
                        return this.focus(),
                            !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === xa() && this.blur)
                        return this.blur(),
                            !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (ja.test(this.type) && this.click && B(this, "input"))
                        return this.click(),
                            !1
                },
                _default: function (a) {
                    return B(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    },
        r.removeEvent = function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c)
        }
        ,
        r.Event = function (a, b) {
            return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a,
                this.type = a.type,
                this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa,
                this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target,
                this.currentTarget = a.currentTarget,
                this.relatedTarget = a.relatedTarget) : this.type = a,
                b && r.extend(this, b),
                this.timeStamp = a && a.timeStamp || r.now(),
                void (this[r.expando] = !0)) : new r.Event(a, b)
        }
        ,
        r.Event.prototype = {
            constructor: r.Event,
            isDefaultPrevented: wa,
            isPropagationStopped: wa,
            isImmediatePropagationStopped: wa,
            isSimulated: !1,
            preventDefault: function () {
                var a = this.originalEvent;
                this.isDefaultPrevented = va,
                    a && !this.isSimulated && a.preventDefault()
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                this.isPropagationStopped = va,
                    a && !this.isSimulated && a.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = va,
                    a && !this.isSimulated && a.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        r.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (a) {
                var b = a.button;
                return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
            }
        }, r.event.addProp),
        r.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (a, b) {
            r.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function (a) {
                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                    return e && (e === d || r.contains(d, e)) || (a.type = f.origType,
                        c = f.handler.apply(this, arguments),
                        a.type = b),
                        c
                }
            }
        }),
        r.fn.extend({
            on: function (a, b, c, d) {
                return ya(this, a, b, c, d)
            },
            one: function (a, b, c, d) {
                return ya(this, a, b, c, d, 1)
            },
            off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)
                    return d = a.handleObj,
                        r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                        this;
                if ("object" == typeof a) {
                    for (e in a)
                        this.off(e, b, a[e]);
                    return this
                }
                return b !== !1 && "function" != typeof b || (c = b,
                    b = void 0),
                    c === !1 && (c = wa),
                    this.each(function () {
                        r.event.remove(this, a, c, b)
                    })
            }
        });
    var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
        , Aa = /<script|<style|<link/i
        , Ba = /checked\s*(?:[^=]|=\s*.checked.)/i
        , Ca = /^true\/(.*)/
        , Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ea(a, b) {
        return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a
    }
    function Fa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
            a
    }
    function Ga(a) {
        var b = Ca.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
            a
    }
    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (W.hasData(a) && (f = W.access(a),
                g = W.set(b, f),
                j = f.events)) {
                delete g.handle,
                    g.events = {};
                for (e in j)
                    for (c = 0,
                        d = j[e].length; c < d; c++)
                        r.event.add(b, e, j[e][c])
            }
            X.hasData(a) && (h = X.access(a),
                i = r.extend({}, h),
                X.set(b, i))
        }
    }
    function Ia(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }
    function Ja(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q))
            return a.each(function (e) {
                var f = a.eq(e);
                s && (b[0] = q.call(this, e, f.html())),
                    Ja(f, b, c, d)
            });
        if (m && (e = qa(b, a[0].ownerDocument, !1, a, d),
            f = e.firstChild,
            1 === e.childNodes.length && (e = f),
            f || d)) {
            for (h = r.map(na(e, "script"), Fa),
                i = h.length; l < m; l++)
                j = e,
                    l !== n && (j = r.clone(j, !0, !0),
                        i && r.merge(h, na(j, "script"))),
                    c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument,
                    r.map(h, Ga),
                    l = 0; l < i; l++)
                    j = h[l],
                        la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
        }
        return a
    }
    function Ka(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || r.cleanData(na(d)),
                d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")),
                    d.parentNode.removeChild(d));
        return a
    }
    r.extend({
        htmlPrefilter: function (a) {
            return a.replace(za, "<$1></$2>")
        },
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = na(h),
                    f = na(a),
                    d = 0,
                    e = f.length; d < e; d++)
                    Ia(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || na(a),
                        g = g || na(h),
                        d = 0,
                        e = f.length; d < e; d++)
                        Ha(f[d], g[d]);
                else
                    Ha(a, h);
            return g = na(h, "script"),
                g.length > 0 && oa(g, !i && na(a, "script")),
                h
        },
        cleanData: function (a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (U(c)) {
                    if (b = c[W.expando]) {
                        if (b.events)
                            for (d in b.events)
                                e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[W.expando] = void 0
                    }
                    c[X.expando] && (c[X.expando] = void 0)
                }
        }
    }),
        r.fn.extend({
            detach: function (a) {
                return Ka(this, a, !0)
            },
            remove: function (a) {
                return Ka(this, a)
            },
            text: function (a) {
                return T(this, function (a) {
                    return void 0 === a ? r.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                    })
                }, null, a, arguments.length)
            },
            append: function () {
                return Ja(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = Ea(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function () {
                return Ja(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = Ea(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function () {
                return Ja(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function () {
                return Ja(this, arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++)
                    1 === a.nodeType && (r.cleanData(na(a, !1)),
                        a.textContent = "");
                return this
            },
            clone: function (a, b) {
                return a = null != a && a,
                    b = null == b ? a : b,
                    this.map(function () {
                        return r.clone(this, a, b)
                    })
            },
            html: function (a) {
                return T(this, function (a) {
                    var b = this[0] || {}
                        , c = 0
                        , d = this.length;
                    if (void 0 === a && 1 === b.nodeType)
                        return b.innerHTML;
                    if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = r.htmlPrefilter(a);
                        try {
                            for (; c < d; c++)
                                b = this[c] || {},
                                    1 === b.nodeType && (r.cleanData(na(b, !1)),
                                        b.innerHTML = a);
                            b = 0
                        } catch (e) { }
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function () {
                var a = [];
                return Ja(this, arguments, function (b) {
                    var c = this.parentNode;
                    r.inArray(this, a) < 0 && (r.cleanData(na(this)),
                        c && c.replaceChild(b, this))
                }, a)
            }
        }),
        r.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (a, b) {
            r.fn[a] = function (a) {
                for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)
                    c = g === f ? this : this.clone(!0),
                        r(e[g])[b](c),
                        h.apply(d, c.get());
                return this.pushStack(d)
            }
        });
    var La = /^margin/
        , Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i")
        , Na = function (b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a),
                c.getComputedStyle(b)
        };
    !function () {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    i.innerHTML = "",
                    ra.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top,
                    g = "2px" === b.marginLeft,
                    e = "4px" === b.width,
                    i.style.marginRight = "50%",
                    f = "4px" === b.marginRight,
                    ra.removeChild(h),
                    i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"), i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box",
            i.cloneNode(!0).style.backgroundClip = "",
            o.clearCloneStyle = "content-box" === i.style.backgroundClip,
            h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            h.appendChild(i),
            r.extend(o, {
                pixelPosition: function () {
                    return b(),
                        c
                },
                boxSizingReliable: function () {
                    return b(),
                        e
                },
                pixelMarginRight: function () {
                    return b(),
                        f
                },
                reliableMarginLeft: function () {
                    return b(),
                        g
                }
            }))
    }();
    function Oa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Na(a),
            c && (g = c.getPropertyValue(b) || c[b],
                "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)),
                !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width,
                    e = h.minWidth,
                    f = h.maxWidth,
                    h.minWidth = h.maxWidth = h.width = g,
                    g = c.width,
                    h.width = d,
                    h.minWidth = e,
                    h.maxWidth = f)),
            void 0 !== g ? g + "" : g
    }
    function Pa(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Qa = /^(none|table(?!-c[ea]).+)/
        , Ra = /^--/
        , Sa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
        , Ta = {
            letterSpacing: "0",
            fontWeight: "400"
        }
        , Ua = ["Webkit", "Moz", "ms"]
        , Va = d.createElement("div").style;
    function Wa(a) {
        if (a in Va)
            return a;
        var b = a[0].toUpperCase() + a.slice(1)
            , c = Ua.length;
        while (c--)
            if (a = Ua[c] + b,
                a in Va)
                return a
    }
    function Xa(a) {
        var b = r.cssProps[a];
        return b || (b = r.cssProps[a] = Wa(a) || a),
            b
    }
    function Ya(a, b, c) {
        var d = ba.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }
    function Za(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2)
            "margin" === c && (g += r.css(a, c + ca[f], !0, e)),
                d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)),
                    "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e),
                        "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
        return g
    }
    function $a(a, b, c) {
        var d, e = Na(a), f = Oa(a, b, e), g = "border-box" === r.css(a, "boxSizing", !1, e);
        return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]),
            f = parseFloat(f) || 0,
            f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Oa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b), i = Ra.test(b), j = a.style;
                return i || (b = Xa(h)),
                    g = r.cssHooks[b] || r.cssHooks[h],
                    void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c,
                        "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e),
                            f = "number"),
                        null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")),
                            o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"),
                            g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)),
                        void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = r.camelCase(b), i = Ra.test(b);
            return i || (b = Xa(h)),
                g = r.cssHooks[b] || r.cssHooks[h],
                g && "get" in g && (e = g.get(a, !0, c)),
                void 0 === e && (e = Oa(a, b, d)),
                "normal" === e && b in Ta && (e = Ta[b]),
                "" === c || c ? (f = parseFloat(e),
                    c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }),
        r.each(["height", "width"], function (a, b) {
            r.cssHooks[b] = {
                get: function (a, c, d) {
                    if (c)
                        return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
                            return $a(a, b, d)
                        })
                },
                set: function (a, c, d) {
                    var e, f = d && Na(a), g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                    return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c,
                        c = r.css(a, b)),
                        Ya(a, c, g)
                }
            }
        }),
        r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
            if (b)
                return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
                    marginLeft: 0
                }, function () {
                    return a.getBoundingClientRect().left
                })) + "px"
        }),
        r.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (a, b) {
            r.cssHooks[a + b] = {
                expand: function (c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++)
                        e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            },
                La.test(a) || (r.cssHooks[a + b].set = Ya)
        }),
        r.fn.extend({
            css: function (a, b) {
                return T(this, function (a, b, c) {
                    var d, e, f = {}, g = 0;
                    if (Array.isArray(b)) {
                        for (d = Na(a),
                            e = b.length; g < e; g++)
                            f[b[g]] = r.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
                }, a, b, arguments.length > 1)
            }
        });
    function _a(a, b, c, d, e) {
        return new _a.prototype.init(a, b, c, d, e)
    }
    r.Tween = _a,
        _a.prototype = {
            constructor: _a,
            init: function (a, b, c, d, e, f) {
                this.elem = a,
                    this.prop = c,
                    this.easing = e || r.easing._default,
                    this.options = b,
                    this.start = this.now = this.cur(),
                    this.end = d,
                    this.unit = f || (r.cssNumber[c] ? "" : "px")
            },
            cur: function () {
                var a = _a.propHooks[this.prop];
                return a && a.get ? a.get(this) : _a.propHooks._default.get(this)
            },
            run: function (a) {
                var b, c = _a.propHooks[this.prop];
                return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
                    this.now = (this.end - this.start) * b + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : _a.propHooks._default.set(this),
                    this
            }
        },
        _a.prototype.init.prototype = _a.prototype,
        _a.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""),
                        b && "auto" !== b ? b : 0)
                },
                set: function (a) {
                    r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
                }
            }
        },
        _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
            set: function (a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        },
        r.easing = {
            linear: function (a) {
                return a
            },
            swing: function (a) {
                return .5 - Math.cos(a * Math.PI) / 2
            },
            _default: "swing"
        },
        r.fx = _a.prototype.init,
        r.fx.step = {};
    var ab, bb, cb = /^(?:toggle|show|hide)$/, db = /queueHooks$/;
    function eb() {
        bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval),
            r.fx.tick())
    }
    function fb() {
        return a.setTimeout(function () {
            ab = void 0
        }),
            ab = r.now()
    }
    function gb(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; d < 4; d += 2 - b)
            c = ca[d],
                e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
            e
    }
    function hb(a, b, c) {
        for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ib(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style, p = a.nodeType && da(a), q = W.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"),
            null == g.unqueued && (g.unqueued = 0,
                h = g.empty.fire,
                g.empty.fire = function () {
                    g.unqueued || h()
                }
            ),
            g.unqueued++,
            m.always(function () {
                m.always(function () {
                    g.unqueued--,
                        r.queue(a, "fx").length || g.empty.fire()
                })
            }));
        for (d in b)
            if (e = b[d],
                cb.test(e)) {
                if (delete b[d],
                    f = f || "toggle" === e,
                    e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d])
                        continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            }
        if (i = !r.isEmptyObject(b),
            i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
                j = q && q.display,
                null == j && (j = W.get(a, "display")),
                k = r.css(a, "display"),
                "none" === k && (j ? k = j : (ia([a], !0),
                    j = a.style.display || j,
                    k = r.css(a, "display"),
                    ia([a]))),
                ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
                    o.display = j
                }),
                    null == j && (k = o.display,
                        j = "none" === k ? "" : k)),
                    o.display = "inline-block")),
                c.overflow && (o.overflow = "hidden",
                    m.always(function () {
                        o.overflow = c.overflow[0],
                            o.overflowX = c.overflow[1],
                            o.overflowY = c.overflow[2]
                    })),
                i = !1;
            for (d in n)
                i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", {
                    display: j
                }),
                    f && (q.hidden = !p),
                    p && ia([a], !0),
                    m.done(function () {
                        p || ia([a]),
                            W.remove(a, "fxshow");
                        for (d in n)
                            r.style(a, d, n[d])
                    })),
                    i = hb(p ? q[d] : 0, d, m),
                    d in q || (q[d] = i.start,
                        p && (i.end = i.start,
                            i.start = 0))
        }
    }
    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c),
                e = b[d],
                f = a[c],
                Array.isArray(f) && (e = f[1],
                    f = a[c] = f[0]),
                c !== d && (a[d] = f,
                    delete a[c]),
                g = r.cssHooks[d],
                g && "expand" in g) {
                f = g.expand(f),
                    delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                        b[c] = e)
            } else
                b[d] = e
    }
    function kb(a, b, c) {
        var d, e, f = 0, g = kb.prefilters.length, h = r.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)
                return !1;
            for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
                f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]),
                    h.resolveWith(a, [j]),
                    !1)
        }, j = h.promise({
            elem: a,
            props: r.extend({}, b),
            opts: r.extend(!0, {
                specialEasing: {},
                easing: r.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: ab || fb(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                    d
            },
            stop: function (b) {
                var c = 0
                    , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; c < d; c++)
                    j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]),
                    h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                    this
            }
        }), k = j.props;
        for (jb(k, j.opts.specialEasing); f < g; f++)
            if (d = kb.prefilters[f].call(j, a, k, j.opts))
                return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)),
                    d;
        return r.map(k, hb, j),
            r.isFunction(j.opts.start) && j.opts.start.call(a, j),
            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always),
            r.fx.timer(r.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })),
            j
    }
    r.Animation = r.extend(kb, {
        tweeners: {
            "*": [function (a, b) {
                var c = this.createTween(a, b);
                return fa(c.elem, a, ba.exec(b), c),
                    c
            }
            ]
        },
        tweener: function (a, b) {
            r.isFunction(a) ? (b = a,
                a = ["*"]) : a = a.match(L);
            for (var c, d = 0, e = a.length; d < e; d++)
                c = a[d],
                    kb.tweeners[c] = kb.tweeners[c] || [],
                    kb.tweeners[c].unshift(b)
        },
        prefilters: [ib],
        prefilter: function (a, b) {
            b ? kb.prefilters.unshift(a) : kb.prefilters.push(a)
        }
    }),
        r.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? r.extend({}, a) : {
                complete: c || !c && b || r.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !r.isFunction(b) && b
            };
            return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default),
                null != d.queue && d.queue !== !0 || (d.queue = "fx"),
                d.old = d.complete,
                d.complete = function () {
                    r.isFunction(d.old) && d.old.call(this),
                        d.queue && r.dequeue(this, d.queue)
                }
                ,
                d
        }
        ,
        r.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(da).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function (a, b, c, d) {
                var e = r.isEmptyObject(a)
                    , f = r.speed(b, c, d)
                    , g = function () {
                        var b = kb(this, r.extend({}, a), f);
                        (e || W.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g,
                    e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop,
                        b(c)
                };
                return "string" != typeof a && (c = b,
                    b = a,
                    a = void 0),
                    b && a !== !1 && this.queue(a || "fx", []),
                    this.each(function () {
                        var b = !0
                            , e = null != a && a + "queueHooks"
                            , f = r.timers
                            , g = W.get(this);
                        if (e)
                            g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g)
                                g[e] && g[e].stop && db.test(e) && d(g[e]);
                        for (e = f.length; e--;)
                            f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                                b = !1,
                                f.splice(e, 1));
                        !b && c || r.dequeue(this, a)
                    })
            },
            finish: function (a) {
                return a !== !1 && (a = a || "fx"),
                    this.each(function () {
                        var b, c = W.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0;
                        for (c.finish = !0,
                            r.queue(this, a, []),
                            e && e.stop && e.stop.call(this, !0),
                            b = f.length; b--;)
                            f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                                f.splice(b, 1));
                        for (b = 0; b < g; b++)
                            d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
            }
        }),
        r.each(["toggle", "show", "hide"], function (a, b) {
            var c = r.fn[b];
            r.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
            }
        }),
        r.each({
            slideDown: gb("show"),
            slideUp: gb("hide"),
            slideToggle: gb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            r.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }),
        r.timers = [],
        r.fx.tick = function () {
            var a, b = 0, c = r.timers;
            for (ab = r.now(); b < c.length; b++)
                a = c[b],
                    a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(),
                ab = void 0
        }
        ,
        r.fx.timer = function (a) {
            r.timers.push(a),
                r.fx.start()
        }
        ,
        r.fx.interval = 13,
        r.fx.start = function () {
            bb || (bb = !0,
                eb())
        }
        ,
        r.fx.stop = function () {
            bb = null
        }
        ,
        r.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        r.fn.delay = function (b, c) {
            return b = r.fx ? r.fx.speeds[b] || b : b,
                c = c || "fx",
                this.queue(c, function (c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function () {
                        a.clearTimeout(e)
                    }
                })
        }
        ,
        function () {
            var a = d.createElement("input")
                , b = d.createElement("select")
                , c = b.appendChild(d.createElement("option"));
            a.type = "checkbox",
                o.checkOn = "" !== a.value,
                o.optSelected = c.selected,
                a = d.createElement("input"),
                a.value = "t",
                a.type = "radio",
                o.radioValue = "t" === a.value
        }();
    var lb, mb = r.expr.attrHandle;
    r.fn.extend({
        attr: function (a, b) {
            return T(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                r.removeAttr(this, a)
            })
        }
    }),
        r.extend({
            attr: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)),
                        void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                            c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
                                null == d ? void 0 : d));
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!o.radioValue && "radio" === b && B(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b),
                                c && (a.value = c),
                                b
                        }
                    }
                }
            },
            removeAttr: function (a, b) {
                var c, d = 0, e = b && b.match(L);
                if (e && 1 === a.nodeType)
                    while (c = e[d++])
                        a.removeAttribute(c)
            }
        }),
        lb = {
            set: function (a, b, c) {
                return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c),
                    c
            }
        },
        r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = mb[b] || r.find.attr;
            mb[b] = function (a, b, d) {
                var e, f, g = b.toLowerCase();
                return d || (f = mb[g],
                    mb[g] = e,
                    e = null != c(a, b, d) ? g : null,
                    mb[g] = f),
                    e
            }
        });
    var nb = /^(?:input|select|textarea|button)$/i
        , ob = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function (a, b) {
            return T(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[r.propFix[a] || a]
            })
        }
    }),
        r.extend({
            prop: function (a, b, c) {
                var d, e, f = a.nodeType;
                if (3 !== f && 8 !== f && 2 !== f)
                    return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b,
                        e = r.propHooks[b]),
                        void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = r.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
        o.optSelected || (r.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex,
                    null
            },
            set: function (a) {
                var b = a.parentNode;
                b && (b.selectedIndex,
                    b.parentNode && b.parentNode.selectedIndex)
            }
        }),
        r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            r.propFix[this.toLowerCase()] = this
        });
    function pb(a) {
        var b = a.match(L) || [];
        return b.join(" ")
    }
    function qb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a))
                return this.each(function (b) {
                    r(this).addClass(a.call(this, b, qb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c),
                        d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = pb(d),
                            e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a))
                return this.each(function (b) {
                    r(this).removeClass(a.call(this, b, qb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c),
                        d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        h = pb(d),
                            e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
                r(this).toggleClass(a.call(this, c, qb(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                        e = r(this),
                        f = a.match(L) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    void 0 !== a && "boolean" !== c || (b = qb(this),
                        b && W.set(this, "__className__", b),
                        this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""))
            })
        },
        hasClass: function (a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    });
    var rb = /\r/g;
    r.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = r.isFunction(a),
                        this.each(function (c) {
                            var e;
                            1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a,
                                null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
                                    return null == a ? "" : a + ""
                                })),
                                b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()],
                                b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                        });
                if (e)
                    return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()],
                        b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                            "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }),
        r.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = r.find.attr(a, "value");
                        return null != b ? b : pb(r.text(a))
                    }
                },
                select: {
                    get: function (a) {
                        var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length;
                        for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                            if (c = e[d],
                                (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
                                if (b = r(c).val(),
                                    g)
                                    return b;
                                h.push(b)
                            }
                        return h
                    },
                    set: function (a, b) {
                        var c, d, e = a.options, f = r.makeArray(b), g = e.length;
                        while (g--)
                            d = e[g],
                                (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                        return c || (a.selectedIndex = -1),
                            f
                    }
                }
            }
        }),
        r.each(["radio", "checkbox"], function () {
            r.valHooks[this] = {
                set: function (a, b) {
                    if (Array.isArray(b))
                        return a.checked = r.inArray(r(a).val(), b) > -1
                }
            },
                o.checkOn || (r.valHooks[this].get = function (a) {
                    return null === a.getAttribute("value") ? "on" : a.value
                }
                )
        });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function (b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d], p = l.call(b, "type") ? b.type : b, q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d,
                3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."),
                    p = q.shift(),
                    q.sort()),
                    k = p.indexOf(":") < 0 && "on" + p,
                    b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b),
                    b.isTrigger = f ? 2 : 3,
                    b.namespace = q.join("."),
                    b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    b.result = void 0,
                    b.target || (b.target = e),
                    c = null == c ? [b] : r.makeArray(c, [b]),
                    n = r.event.special[p] || {},
                    f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p,
                        sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode)
                        o.push(h),
                            i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped())
                    b.type = g > 1 ? j : n.bindType || p,
                        m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"),
                        m && m.apply(h, c),
                        m = k && h[k],
                        m && m.apply && U(h) && (b.result = m.apply(h, c),
                            b.result === !1 && b.preventDefault());
                return b.type = p,
                    f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k],
                        i && (e[k] = null),
                        r.event.triggered = p,
                        e[p](),
                        r.event.triggered = void 0,
                        i && (e[k] = i)),
                    b.result
            }
        },
        simulate: function (a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }),
        r.fn.extend({
            trigger: function (a, b) {
                return this.each(function () {
                    r.event.trigger(a, b, this)
                })
            },
            triggerHandler: function (a, b) {
                var c = this[0];
                if (c)
                    return r.event.trigger(a, b, c, !0)
            }
        }),
        r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
            r.fn[b] = function (a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }),
        r.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }),
        o.focusin = "onfocusin" in a,
        o.focusin || r.each({
            focus: "focusin",
            blur: "focusout"
        }, function (a, b) {
            var c = function (a) {
                r.event.simulate(b, a.target, r.event.fix(a))
            };
            r.event.special[b] = {
                setup: function () {
                    var d = this.ownerDocument || this
                        , e = W.access(d, b);
                    e || d.addEventListener(a, c, !0),
                        W.access(d, b, (e || 0) + 1)
                },
                teardown: function () {
                    var d = this.ownerDocument || this
                        , e = W.access(d, b) - 1;
                    e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0),
                        W.remove(d, b))
                }
            }
        });
    var tb = a.location
        , ub = r.now()
        , vb = /\?/;
    r.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b)
            return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b),
            c
    }
        ;
    var wb = /\[\]$/
        , xb = /\r?\n/g
        , yb = /^(?:submit|button|image|reset|file)$/i
        , zb = /^(?:input|select|textarea|keygen)/i;
    function Ab(a, b, c, d) {
        var e;
        if (Array.isArray(b))
            r.each(b, function (b, e) {
                c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== r.type(b))
            d(a, b);
        else
            for (e in b)
                Ab(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            var c = r.isFunction(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
        };
        if (Array.isArray(a) || a.jquery && !r.isPlainObject(a))
            r.each(a, function () {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Ab(c, a[c], b, e);
        return d.join("&")
    }
        ,
        r.fn.extend({
            serialize: function () {
                return r.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var a = r.prop(this, "elements");
                    return a ? r.makeArray(a) : this
                }).filter(function () {
                    var a = this.type;
                    return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a))
                }).map(function (a, b) {
                    var c = r(this).val();
                    return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
                        return {
                            name: b.name,
                            value: a.replace(xb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(xb, "\r\n")
                    }
                }).get()
            }
        });
    var Bb = /%20/g
        , Cb = /#.*$/
        , Db = /([?&])_=[^&]*/
        , Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
        , Gb = /^(?:GET|HEAD)$/
        , Hb = /^\/\//
        , Ib = {}
        , Jb = {}
        , Kb = "*/".concat("*")
        , Lb = d.createElement("a");
    Lb.href = tb.href;
    function Mb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b,
                b = "*");
            var d, e = 0, f = b.toLowerCase().match(L) || [];
            if (r.isFunction(c))
                while (d = f[e++])
                    "+" === d[0] ? (d = d.slice(1) || "*",
                        (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Nb(a, b, c, d) {
        var e = {}
            , f = a === Jb;
        function g(h) {
            var i;
            return e[h] = !0,
                r.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                        g(j),
                        !1)
                }),
                i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Ob(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d),
            a
    }
    function Pb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
                void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f)
            return f !== i[0] && i.unshift(f),
                c[f]
    }
    function Qb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
                !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                i = f,
                f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                        !g)
                        for (e in j)
                            if (h = e.split(" "),
                                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                    k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tb.href,
            type: "GET",
            isLocal: Fb.test(tb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a)
        },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function (b, c) {
            "object" == typeof b && (c = b,
                b = void 0),
                c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(), t = r.Callbacks("once memory"), u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (k) {
                        if (!h) {
                            h = {};
                            while (b = Eb.exec(g))
                                h[b[1].toLowerCase()] = b[2]
                        }
                        b = h[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return k ? g : null
                },
                setRequestHeader: function (a, b) {
                    return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a,
                        v[a] = b),
                        this
                },
                overrideMimeType: function (a) {
                    return null == k && (o.mimeType = a),
                        this
                },
                statusCode: function (a) {
                    var b;
                    if (a)
                        if (k)
                            y.always(a[y.status]);
                        else
                            for (b in a)
                                u[b] = [u[b], a[b]];
                    return this
                },
                abort: function (a) {
                    var b = a || x;
                    return e && e.abort(b),
                        A(0, b),
                        this
                }
            };
            if (s.promise(y),
                o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"),
                o.type = c.method || c.type || o.method || o.type,
                o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""],
                null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url,
                        j.href = j.href,
                        o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)),
                Nb(Ib, o, c, y),
                k)
                return y;
            l = r.event && o.global,
                l && 0 === r.active++ && r.event.trigger("ajaxStart"),
                o.type = o.type.toUpperCase(),
                o.hasContent = !Gb.test(o.type),
                f = o.url.replace(Cb, ""),
                o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length),
                    o.data && (f += (vb.test(f) ? "&" : "?") + o.data,
                        delete o.data),
                    o.cache === !1 && (f = f.replace(Db, "$1"),
                        n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n),
                    o.url = f + n),
                o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]),
                    r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])),
                (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType),
                y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers)
                y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
                return y.abort();
            if (x = "abort",
                t.add(o.complete),
                y.done(o.success),
                y.fail(o.error),
                e = Nb(Jb, o, c, y)) {
                if (y.readyState = 1,
                    l && q.trigger("ajaxSend", [y, o]),
                    k)
                    return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1,
                        e.send(v, A)
                } catch (z) {
                    if (k)
                        throw z;
                    A(-1, z)
                }
            } else
                A(-1, "No Transport");
            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0,
                    i && a.clearTimeout(i),
                    e = void 0,
                    g = h || "",
                    y.readyState = b > 0 ? 4 : 0,
                    j = b >= 200 && b < 300 || 304 === b,
                    d && (v = Pb(o, y, d)),
                    v = Qb(o, v, y, j),
                    j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"),
                        w && (r.lastModified[f] = w),
                        w = y.getResponseHeader("etag"),
                        w && (r.etag[f] = w)),
                        204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state,
                            m = v.data,
                            n = v.error,
                            j = !n)) : (n = x,
                                !b && x || (x = "error",
                                    b < 0 && (b = 0))),
                    y.status = b,
                    y.statusText = (c || x) + "",
                    j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]),
                    y.statusCode(u),
                    u = void 0,
                    l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]),
                    t.fireWith(p, [y, x]),
                    l && (q.trigger("ajaxComplete", [y, o]),
                        --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function (a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return r.get(a, void 0, b, "script")
        }
    }),
        r.each(["get", "post"], function (a, b) {
            r[b] = function (a, c, d, e) {
                return r.isFunction(c) && (e = e || d,
                    d = c,
                    c = void 0),
                    r.ajax(r.extend({
                        url: a,
                        type: b,
                        dataType: e,
                        data: c,
                        success: d
                    }, r.isPlainObject(a) && a))
            }
        }),
        r._evalUrl = function (a) {
            return r.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        r.fn.extend({
            wrapAll: function (a) {
                var b;
                return this[0] && (r.isFunction(a) && (a = a.call(this[0])),
                    b = r(a, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && b.insertBefore(this[0]),
                    b.map(function () {
                        var a = this;
                        while (a.firstElementChild)
                            a = a.firstElementChild;
                        return a
                    }).append(this)),
                    this
            },
            wrapInner: function (a) {
                return r.isFunction(a) ? this.each(function (b) {
                    r(this).wrapInner(a.call(this, b))
                }) : this.each(function () {
                    var b = r(this)
                        , c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function (a) {
                var b = r.isFunction(a);
                return this.each(function (c) {
                    r(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function (a) {
                return this.parent(a).not("body").each(function () {
                    r(this).replaceWith(this.childNodes)
                }),
                    this
            }
        }),
        r.expr.pseudos.hidden = function (a) {
            return !r.expr.pseudos.visible(a)
        }
        ,
        r.expr.pseudos.visible = function (a) {
            return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
        }
        ,
        r.ajaxSettings.xhr = function () {
            try {
                return new a.XMLHttpRequest
            } catch (b) { }
        }
        ;
    var Rb = {
        0: 200,
        1223: 204
    }
        , Sb = r.ajaxSettings.xhr();
    o.cors = !!Sb && "withCredentials" in Sb,
        o.ajax = Sb = !!Sb,
        r.ajaxTransport(function (b) {
            var c, d;
            if (o.cors || Sb && !b.crossDomain)
                return {
                    send: function (e, f) {
                        var g, h = b.xhr();
                        if (h.open(b.type, b.url, b.async, b.username, b.password),
                            b.xhrFields)
                            for (g in b.xhrFields)
                                h[g] = b.xhrFields[g];
                        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
                            b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                        for (g in e)
                            h.setRequestHeader(g, e[g]);
                        c = function (a) {
                            return function () {
                                c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null,
                                    "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                                        binary: h.response
                                    } : {
                                        text: h.responseText
                                    }, h.getAllResponseHeaders()))
                            }
                        }
                            ,
                            h.onload = c(),
                            d = h.onerror = c("error"),
                            void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                                4 === h.readyState && a.setTimeout(function () {
                                    c && d()
                                })
                            }
                            ,
                            c = c("abort");
                        try {
                            h.send(b.hasContent && b.data || null)
                        } catch (i) {
                            if (c)
                                throw i
                        }
                    },
                    abort: function () {
                        c && c()
                    }
                }
        }),
        r.ajaxPrefilter(function (a) {
            a.crossDomain && (a.contents.script = !1)
        }),
        r.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (a) {
                    return r.globalEval(a),
                        a
                }
            }
        }),
        r.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1),
                a.crossDomain && (a.type = "GET")
        }),
        r.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function (e, f) {
                        b = r("<script>").prop({
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function (a) {
                            b.remove(),
                                c = null,
                                a && f("error" === a.type ? 404 : 200, a.type)
                        }
                        ),
                            d.head.appendChild(b[0])
                    },
                    abort: function () {
                        c && c()
                    }
                }
            }
        });
    var Tb = []
        , Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Tb.pop() || r.expando + "_" + ub++;
            return this[a] = !0,
                a
        }
    }),
        r.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
            if (h || "jsonp" === b.dataTypes[0])
                return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                    h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                    b.converters["script json"] = function () {
                        return g || r.error(e + " was not called"),
                            g[0]
                    }
                    ,
                    b.dataTypes[0] = "json",
                    f = a[e],
                    a[e] = function () {
                        g = arguments
                    }
                    ,
                    d.always(function () {
                        void 0 === f ? r(a).removeProp(e) : a[e] = f,
                            b[e] && (b.jsonpCallback = c.jsonpCallback,
                                Tb.push(e)),
                            g && r.isFunction(f) && f(g[0]),
                            g = f = void 0
                    }),
                    "script"
        }),
        o.createHTMLDocument = function () {
            var a = d.implementation.createHTMLDocument("").body;
            return a.innerHTML = "<form></form><form></form>",
                2 === a.childNodes.length
        }(),
        r.parseHTML = function (a, b, c) {
            if ("string" != typeof a)
                return [];
            "boolean" == typeof b && (c = b,
                b = !1);
            var e, f, g;
            return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""),
                e = b.createElement("base"),
                e.href = d.location.href,
                b.head.appendChild(e)) : b = d),
                f = C.exec(a),
                g = !c && [],
                f ? [b.createElement(f[1])] : (f = qa([a], b, g),
                    g && g.length && r(g).remove(),
                    r.merge([], f.childNodes))
        }
        ,
        r.fn.load = function (a, b, c) {
            var d, e, f, g = this, h = a.indexOf(" ");
            return h > -1 && (d = pb(a.slice(h)),
                a = a.slice(0, h)),
                r.isFunction(b) ? (c = b,
                    b = void 0) : b && "object" == typeof b && (e = "POST"),
                g.length > 0 && r.ajax({
                    url: a,
                    type: e || "GET",
                    dataType: "html",
                    data: b
                }).done(function (a) {
                    f = arguments,
                        g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
                }).always(c && function (a, b) {
                    g.each(function () {
                        c.apply(this, f || [a.responseText, b, a])
                    })
                }
                ),
                this
        }
        ,
        r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
            r.fn[b] = function (a) {
                return this.on(b, a)
            }
        }),
        r.expr.pseudos.animated = function (a) {
            return r.grep(r.timers, function (b) {
                return a === b.elem
            }).length
        }
        ,
        r.offset = {
            setOffset: function (a, b, c) {
                var d, e, f, g, h, i, j, k = r.css(a, "position"), l = r(a), m = {};
                "static" === k && (a.style.position = "relative"),
                    h = l.offset(),
                    f = r.css(a, "top"),
                    i = r.css(a, "left"),
                    j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
                    j ? (d = l.position(),
                        g = d.top,
                        e = d.left) : (g = parseFloat(f) || 0,
                            e = parseFloat(i) || 0),
                    r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
                    null != b.top && (m.top = b.top - h.top + g),
                    null != b.left && (m.left = b.left - h.left + e),
                    "using" in b ? b.using.call(a, m) : l.css(m)
            }
        },
        r.fn.extend({
            offset: function (a) {
                if (arguments.length)
                    return void 0 === a ? this : this.each(function (b) {
                        r.offset.setOffset(this, a, b)
                    });
                var b, c, d, e, f = this[0];
                if (f)
                    return f.getClientRects().length ? (d = f.getBoundingClientRect(),
                        b = f.ownerDocument,
                        c = b.documentElement,
                        e = b.defaultView,
                    {
                        top: d.top + e.pageYOffset - c.clientTop,
                        left: d.left + e.pageXOffset - c.clientLeft
                    }) : {
                        top: 0,
                        left: 0
                    }
            },
            position: function () {
                if (this[0]) {
                    var a, b, c = this[0], d = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                        b = this.offset(),
                        B(a[0], "html") || (d = a.offset()),
                        d = {
                            top: d.top + r.css(a[0], "borderTopWidth", !0),
                            left: d.left + r.css(a[0], "borderLeftWidth", !0)
                        }),
                    {
                        top: b.top - d.top - r.css(c, "marginTop", !0),
                        left: b.left - d.left - r.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var a = this.offsetParent;
                    while (a && "static" === r.css(a, "position"))
                        a = a.offsetParent;
                    return a || ra
                })
            }
        }),
        r.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (a, b) {
            var c = "pageYOffset" === b;
            r.fn[a] = function (d) {
                return T(this, function (a, d, e) {
                    var f;
                    return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView),
                        void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
                }, a, d, arguments.length)
            }
        }),
        r.each(["top", "left"], function (a, b) {
            r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
                if (c)
                    return c = Oa(a, b),
                        Ma.test(c) ? r(a).position()[b] + "px" : c
            })
        }),
        r.each({
            Height: "height",
            Width: "width"
        }, function (a, b) {
            r.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function (c, d) {
                r.fn[d] = function (e, f) {
                    var g = arguments.length && (c || "boolean" != typeof e)
                        , h = c || (e === !0 || f === !0 ? "margin" : "border");
                    return T(this, function (b, c, e) {
                        var f;
                        return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement,
                            Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                    }, b, g ? e : void 0, g)
                }
            })
        }),
        r.fn.extend({
            bind: function (a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function (a, b) {
                return this.off(a, null, b)
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function (a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            },
            holdReady: function (a) {
                a ? r.readyWait++ : r.ready(!0)
            }
        }),
        r.isArray = Array.isArray,
        r.parseJSON = JSON.parse,
        r.nodeName = B,
        "function" == typeof define && define.amd && define("jquery", [], function () {
            return r
        });
    var Vb = a.jQuery
        , Wb = a.$;
    return r.noConflict = function (b) {
        return a.$ === r && (a.$ = Wb),
            b && a.jQuery === r && (a.jQuery = Vb),
            r
    }
        ,
        b || (a.jQuery = a.$ = r),
        r
});
var urlkocka, activeView = 1, a = new Array, s = new Array, orig = new Array, center = new Array, kics = new Array, step = new Array, sbs = new Array, activeColor = 0, cubeplaybackspeed = 3e3, playingBackTheSolution = 0, osszlepesszam = 0, i = 0, aktstep = 0, elozorot = 0, megprobalKirakniEnnyiLepesben = 20, facingFront = 3, facingUp = 1, error = "ok", cubex = -22, cubey = -38, cubez = 0, lastClickedFiled = 0, scrambler = 0;
function initVariables() {
    if ($("#simulator").length && "ontouchstart" in document.documentElement && $("#simulator").addClass("touchDevice"),
        0 != $("#scrambler").length)
        a[0] = 0,
            scrambler = 1,
            window.setInterval(function () {
                refreshSolveLink()
            }, 300);
    else {
        for (null == (urlkocka = getUrlVars().cube) && (urlkocka = "0111111111222222222333333333444444444555555555666666666"),
            a = urlkocka.split(""),
            i = 1; i <= 54; i++)
            orig[i] = a[i];
        center[0] = 0,
            center[1] = a[5],
            center[2] = a[14],
            center[3] = a[23],
            center[4] = a[32],
            center[5] = a[41],
            center[6] = a[50],
            updateCube();
        var e;
        for (i = 1; i <= 54; i++)
            (e = a[i]) == center[1] && (a[i] = 1),
                e == center[2] && (a[i] = 2),
                e == center[3] && (a[i] = 3),
                e == center[4] && (a[i] = 4),
                e == center[5] && (a[i] = 5),
                e == center[6] && (a[i] = 6);
        worker.postMessage({
            type: "generateTables"
        }),
            kociembaFieldsTransform()
    }
}
function rekurzivSolutionPlayback() {
    aktstep < osszlepesszam ? eddigkiir(aktstep + 1) : $("#currentRot").removeClass(),
        setTimeout(function () {
            1 == playingBackTheSolution && rekurzivSolutionPlayback()
        }, Math.round(cubeplaybackspeed))
}
function eddigkiir(e) {
    if (document.getElementById("rotacioSzoveg")) {
        var s = "orient";
        for (1 == step[aktstep = e] && (s = "U"),
            2 == step[e] && (s = "U'"),
            3 == step[e] && (s = "L"),
            4 == step[e] && (s = "L'"),
            5 == step[e] && (s = "F"),
            6 == step[e] && (s = "F'"),
            7 == step[e] && (s = "R"),
            8 == step[e] && (s = "R'"),
            9 == step[e] && (s = "B"),
            10 == step[e] && (s = "B'"),
            11 == step[e] && (s = "D"),
            12 == step[e] && (s = "D'"),
            13 == step[e] && (s = "U2"),
            14 == step[e] && (s = "L2"),
            15 == step[e] && (s = "F2"),
            16 == step[e] && (s = "R2"),
            17 == step[e] && (s = "B2"),
            18 == step[e] && (s = "D2"),
            document.getElementById("rotacioSzoveg").innerHTML = e + ".<span>" + s + "</span>",
            0 == e && (document.getElementById("rotacioSzoveg").innerHTML = "&nbsp;"),
            12 < step[e] ? 0 < e && $("#vigyazzKetszer").show() : $("#vigyazzKetszer").hide(),
            $("#algoritmusHanyadik" + elozorot).removeClass("active"),
            $("#algoritmusHanyadik" + e).addClass("active"),
            elozorot = e,
            step[0] = 0,
            i = 1; i <= 54; i++)
            kics[i] = orig[i];
        for (ij = 0; ij <= e; ij++)
            1 == step[ij] && kicsiuu(),
                2 == step[ij] && kicsiui(),
                3 == step[ij] && kicsill(),
                4 == step[ij] && kicsili(),
                5 == step[ij] && kicsiff(),
                6 == step[ij] && kicsifi(),
                7 == step[ij] && kicsirr(),
                8 == step[ij] && kicsiri(),
                9 == step[ij] && kicsibb(),
                10 == step[ij] && kicsibi(),
                11 == step[ij] && kicsidd(),
                12 == step[ij] && kicsidi(),
                13 == step[ij] && (kicsiuu(),
                    kicsiuu()),
                14 == step[ij] && (kicsill(),
                    kicsill()),
                15 == step[ij] && (kicsiff(),
                    kicsiff()),
                16 == step[ij] && (kicsirr(),
                    kicsirr()),
                17 == step[ij] && (kicsibb(),
                    kicsibb()),
                18 == step[ij] && (kicsidd(),
                    kicsidd());
        for (i = 1; i <= 54; i++)
            a[i] = kics[i];
        if ($("#currentRot").removeClass(),
            $("#currentRot").addClass("thisRotIs" + step[e]),
            1 == playingBackTheSolution)
            setTimeout(function () {
                for (updateCube(),
                    i = 1; i <= 54; i++)
                    a[i] = orig[i]
            }, Math.round(cubeplaybackspeed / 5)),
                setTimeout(function () {
                    1 == playingBackTheSolution && ($("#currentRot").removeClass(),
                        $("#vigyazzKetszer").hide())
                }, Math.round(4 * cubeplaybackspeed / 5));
        else
            for (updateCube(),
                i = 1; i <= 54; i++)
                a[i] = orig[i]
    }
}
function kiirarrayt() {
    var e = document.getElementById("segedvaltozo");
    if (e) {
        e.innerHTML = "<div class='hanysztep'>" + stp + " steps:</div> <span id='algoritmusHanyadik0' onclick='playingBackTheSolution = 0;eddigkiir(0);'> &raquo; </span>",
            osszlepesszam = stp;
        var s = "A";
        for (i = 1; i <= stp; i++)
            -1 == String(document.domain).indexOf("nec") && step[i] < 16 && (step[i] = step[i] + 1),
                1 == step[i] && (s = "U"),
                2 == step[i] && (s = "U&#39;"),
                3 == step[i] && (s = "L"),
                4 == step[i] && (s = "L&#39;"),
                5 == step[i] && (s = "F"),
                6 == step[i] && (s = "F&#39;"),
                7 == step[i] && (s = "R"),
                8 == step[i] && (s = "R&#39;"),
                9 == step[i] && (s = "B"),
                10 == step[i] && (s = "B&#39;"),
                11 == step[i] && (s = "D"),
                12 == step[i] && (s = "D&#39;"),
                13 == step[i] && (s = "U2"),
                14 == step[i] && (s = "L2"),
                15 == step[i] && (s = "F2"),
                16 == step[i] && (s = "R2"),
                17 == step[i] && (s = "B2"),
                18 == step[i] && (s = "D2"),
                e.innerHTML = e.innerHTML + " <span id='algoritmusHanyadik" + i + "' onclick='playingBackTheSolution = 0;eddigkiir(" + i + ");'>" + s + "</span>";
        kiirStepByStep()
    }
}
function kiirStepByStep() {
    for (var e, s = 1; s <= 54; s++)
        sbs[s] = orig[s];
    kiirSbs(0, 0, "Start");
    for (var t = 1; t <= osszlepesszam; t++)
        1 == step[t] && (e = "U"),
            2 == step[t] && (e = "U&#39;"),
            3 == step[t] && (e = "L"),
            4 == step[t] && (e = "L&#39;"),
            5 == step[t] && (e = "F"),
            6 == step[t] && (e = "F&#39;"),
            7 == step[t] && (e = "R"),
            8 == step[t] && (e = "R&#39;"),
            9 == step[t] && (e = "B"),
            10 == step[t] && (e = "B&#39;"),
            11 == step[t] && (e = "D"),
            12 == step[t] && (e = "D&#39;"),
            13 == step[t] && (e = "U2"),
            14 == step[t] && (e = "L2"),
            15 == step[t] && (e = "F2"),
            16 == step[t] && (e = "R2"),
            17 == step[t] && (e = "B2"),
            18 == step[t] && (e = "D2"),
            kiirSbs(t, step[t], e),
            1 == step[t] && sbsuu(),
            2 == step[t] && sbsui(),
            3 == step[t] && sbsll(),
            4 == step[t] && sbsli(),
            5 == step[t] && sbsff(),
            6 == step[t] && sbsfi(),
            7 == step[t] && sbsrr(),
            8 == step[t] && sbsri(),
            9 == step[t] && sbsbb(),
            10 == step[t] && sbsbi(),
            11 == step[t] && sbsdd(),
            12 == step[t] && sbsdi(),
            13 == step[t] && (sbsuu(),
                sbsuu()),
            14 == step[t] && (sbsll(),
                sbsll()),
            15 == step[t] && (sbsff(),
                sbsff()),
            16 == step[t] && (sbsrr(),
                sbsrr()),
            17 == step[t] && (sbsbb(),
                sbsbb()),
            18 == step[t] && (sbsdd(),
                sbsdd());
    kiirSbs(0, 0, "Done!")
}
function kiirSbs(e, s, t) {
    for (var i = '<div class="sbsStep"><div class="sbsLabel"><span class="sbsLabelID' + e + '">' + e + ": </span>" + t + '</div><div class="sbsKocka">', a = 1; a <= 9; a++)
        i = i + '<div class="topFace field' + a + " color" + sbs[a] + '">' + a + "</div>";
    for (a = 19; a <= 27; a++)
        i = i + '<div class="frontFace field' + a + " color" + sbs[a] + '">' + a + "</div>";
    for (a = 28; a <= 36; a++)
        i = i + '<div class="rightFace field' + a + " color" + sbs[a] + '">' + a + "</div>";
    t = 12 < s ? "2x" : "&nbsp;",
        i = (i += "</div>") + '<div class="sbsRotArr sbsRot' + s + '">' + t + "</div></div>",
        document.getElementById("stepByStep").innerHTML = document.getElementById("stepByStep").innerHTML + i
}
function kociembaFieldsTransform() {
    var e = ""
        , s = new Array
        , t = new Array
        , i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 37, 38, 39, 40, 41, 42, 43, 44, 45, 19, 20, 21, 22, 23, 24, 25, 26, 27, 10, 11, 12, 13, 14, 15, 16, 17, 18, 46, 47, 48, 49, 50, 51, 52, 53, 54, 28, 29, 30, 31, 32, 33, 34, 35, 36];
    for (kind = 1; kind <= 54; kind++)
        s[kind] = 0,
            1 == a[kind] && (s[kind] = "U"),
            2 == a[kind] && (s[kind] = "L"),
            3 == a[kind] && (s[kind] = "F"),
            4 == a[kind] && (s[kind] = "R"),
            5 == a[kind] && (s[kind] = "B"),
            6 == a[kind] && (s[kind] = "D");
    for (kind = 1; kind <= 54; kind++)
        t[i[kind]] = s[kind];
    for (kind = 1; kind <= 54; kind++)
        e += s[kind];
    for (e = "",
        kind = 1; kind <= 54; kind++)
        e += t[kind];
    $("#cube").val(e)
}
function warning(e, s) {
    document.getElementById("hiba").innerHTML = "<h2>" + e + "</h2>",
        document.getElementById("hiba").innerHTML += s,
        $("#hibaUzenet").fadeIn(300),
        $("#pleasewait").hide()
}
function getUrlVars() {
    var i = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (e, s, t) {
        i[s] = t
    });
    return i
}
var oldActiveSection = "top";
function updateActiveSection() {
    var e = "top";
    $(this).scrollTop() >= $("#simulator").position().top - 150 && (e = "play"),
        $(this).scrollTop() >= $("#solver").position().top - 150 && (e = "solve"),
        $(this).scrollTop() >= $("#timer").position().top - 150 && (e = "time"),
        $(this).scrollTop() >= $("#tutorial").position().top - 150 && (e = "learn"),
        oldActiveSection != e && (oldActiveSection = e,
            $("body").removeClass(),
            $("body").addClass("activeSection" + e))
}
function initCube3d() {
    var e = ERNO.Locked
        , s = navigator.userAgent
        , s = -1 < s.indexOf("MSIE") || -1 < s.indexOf("Trident/");
    window.cube = new ERNO.Cube({
        hideInvisibleFaces: !0,
        controls: e,
        renderer: s ? ERNO.renderers.IeCSS3D : null
    }),
        document.getElementById("container").appendChild(cube.domElement),
        e === ERNO.Locked && (e = new THREE.Euler(.1 * Math.PI, -.25 * Math.PI, 0),
            cube.object3D.lookAt(cube.camera.position),
            cube.rotation.x += e.x,
            cube.rotation.y += e.y,
            cube.rotation.z += e.z)
}
!function () {
    function e(e) {
        for (var s = e.target; s && s !== document.body;) {
            if (function (e) {
                if (e && e !== document.body) {
                    var s = window.getComputedStyle(e)
                        , s = s.overflowY || s.overflow;
                    return "auto" === s || "scroll" === s ? e.scrollHeight > e.clientHeight : void 0
                }
            }(s))
                return;
            s = s.parentElement
        }
        e.preventDefault(),
            window.scrollBy(0, e.deltaY)
    }
    function s() {
        document.addEventListener("wheel", e, {
            passive: !1
        })
    }
    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", s) : s()
}(),
    window.addEventListener("keydown", function (e) {
        32 !== e.keyCode || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target.isContentEditable || (e.preventDefault(),
            spaceDown("key"))
    }),
    window.addEventListener("keyup", function (e) {
        32 !== e.keyCode || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target.isContentEditable || (e.preventDefault(),
            spaceUp("key"))
    });
var ido = 0
    , hanyadikmeres = 1
    , idok = new Array
    , plustwo = new Array
    , dnf = new Array
    , wca = 0
    , inspection = 0
    , PlaySounds = 0
    , cleng = 20
    , placeholder = "<span class='placeHolder'><span><span> </span><span>0</span></span>.<span><span>0</span><span>0</span></span></span>";
function spaceDown(e) {
    $(".sectionHelp").removeClass("active"),
        $("#timeLink").trigger("click"),
        0 == ido && (ido = 10,
            $("#test").removeClass(),
            $("#test").addClass("redTimerHand"),
            document.getElementById("time").innerHTML = "<span><span> </span><span>0</span></span>.<span><span>0</span><span>0</span></span>",
            0 == wca ? setTimeout(function () {
                $("#test").removeClass(),
                    10 == ido && ($("#test").addClass("greenTimerHand"),
                        ido = 15)
            }, 300) : ($("#test").removeClass(),
                $("#test").addClass("greenTimerHand"),
                ido = 15)),
        25 == ido && (ido = 27,
            $("#test").addClass("redTimerHand"),
            setTimeout(function () {
                27 == ido && ($("#test").removeClass("redTimerHand"),
                    $("#test").addClass("greenTimerHand"),
                    ido = 28)
            }, 300)),
        40 == ido && (ido = 70,
            $("#test").removeClass(),
            $("#test").addClass("redTimerHand"),
            addNewMeasuredTimeToTimeList(),
            $("#solutionTimes div:nth-child(1)").animate({
                opacity: 1,
                height: "22px"
            }, 1e3, function () {
                "tap" != e && "mouse" != e || (ido = 0),
                    thinkandscrambleAnimate(),
                    $("#test").removeClass()
            }))
}
function spaceUp(e) {
    10 == ido && ($("#test").removeClass(),
        ido = 0),
        27 == ido && ($("#test").removeClass("redTimerHand"),
            ido = 25),
        15 == ido && (0 == wca ? 0 == inspection ? (ido = 40,
            getStartTime(),
            timedCount(),
            $("#test").removeClass(),
            $("#test").addClass("clockRunning")) : (xy = inspection,
                $("#test").removeClass(),
                $("#test").addClass("inspectionTime"),
                ido = 30,
                inspectionCount()) : (xy = 15,
                    $("#test").removeClass(),
                    $("#test").addClass("inspectionTime"),
                    ido = 25,
                    inspectionWCA())),
        28 == ido && (ido = 40,
            getStartTime(),
            timedCount(),
            $("#test").removeClass(),
            $("#test").addClass("clockRunning")),
        70 == ido && (ido = 0)
}
var thisPenalty = "";
function inspectionWCA() {
    var e;
    29 != ido ? ido < 29 && 24 < ido && (7 == xy && playSound("sip.mp3"),
        3 == xy && playSound("beep.mp3"),
        xy <= 0 && (thisPenalty = "+2"),
        -2 == xy && (thisPenalty = "DNF"),
        e = "<span>" + putInSpans(xy) + " </span>",
        "+2" == thisPenalty && (e = "<span><span>+</span><span>2</span></span>"),
        "DNF" == thisPenalty && (e = "<span>DNF</span>"),
        document.getElementById("time").innerHTML = e,
        -2 < xy && (--xy,
            setTimeout("inspectionWCA()", 1e3))) : (ido = 0,
                $("#test").removeClass(),
                document.getElementById("time").innerHTML = "<span><span> </span><span>0</span></span>.<span><span>0</span><span>0</span></span>")
}
function putInSpans(e) {
    e = e < 0 ? "-" + -e : e < 10 && 0 <= e ? "0" + e : 9 < e ? "" + e : "seg";
    return e = "<span>" + (e = e.split("").join("</span><span>")) + "</span>"
}
function getStartTime() {
    h = new Date,
        h1 = h.getMilliseconds(),
        h2 = h.getSeconds(),
        h3 = h.getMinutes(),
        h4 = h.getHours(),
        h5 = h.getDate(),
        startNumber = h1 + 1e3 * (h2 + 60 * (h3 + 60 * (h4 + 24 * h5)))
}
function getStopTime() {
    h = new Date,
        h1 = h.getMilliseconds(),
        h2 = h.getSeconds(),
        h3 = h.getMinutes(),
        h4 = h.getHours(),
        h5 = h.getDate(),
        stopNumber = h1 + 1e3 * (h2 + 60 * (h3 + 60 * (h4 + 24 * h5))),
        difference = stopNumber - startNumber,
        document.getElementById("time").innerHTML = miliseconds(difference),
        Math.round(difference / 100) % 2 == 0 ? $("#stackmatLeds").addClass("blinkingLed") : $("#stackmatLeds").removeClass("blinkingLed")
}
function timedCount() {
    40 == ido && (getStopTime(),
        t = setTimeout("timedCount()", 1))
}
function miliseconds(e) {
    if ("DNF" == e)
        return "DNF";
    var s = e;
    5 <= e % 10 && (e -= 5),
        stringem = "",
        d1 = e % 1e3,
        e /= 1e3,
        e = 500 <= d1 ? Math.round(e) - 1 : Math.round(e),
        d1 = Math.round(d1 / 10),
        100 == d1 && (d1 = 10),
        d2 = e % 60,
        e /= 60,
        e = 30 <= d2 ? Math.round(e) - 1 : Math.round(e),
        d3 = e % 60,
        e /= 60,
        e = 30 <= d3 ? Math.round(e) - 1 : Math.round(e),
        d4 = e % 24,
        e /= 24,
        e = 12 <= d4 ? Math.round(e) - 1 : Math.round(e),
        d5 = e;
    var t = 0;
    100 == d1 && (d1 = 99),
        d1 < 10 && (t = "0" + d1),
        10 <= d1 && d1 < 100 && (t = "" + d1),
        100 <= d1 && (t = "" + d1),
        t = "<span>" + (t = t.split("").join("</span><span>")) + "</span>";
    var i = 0;
    i = "<span>" + (i = (i = d2 < 10 ? 0 < d3 ? "0" + d2 : " " + d2 : "" + d2).split("").join("</span><span>")) + "</span>";
    var a = 0;
    a = "<span><span>" + (a = (a = d3 < 10 ? 0 < d4 ? "0" + d3 : " " + d3 : "" + d3).split("").join("</span><span>")) + "</span></span>:",
        0 == d3 && s < 3599999 && (a = "");
    e = "";
    return 0 == d4 && 0 == d5 || (e = "<span><span>" + (e = (e = d4 < 10 ? "0" + d4 : "" + d4).split("").join("</span><span>")) + "</span></span> "),
        stringem = e + a + "<span>" + i + "</span>.<span>" + t + "</span>",
        863e5 <= s && (stringem = "<em>Give it up, you'll never finish!</em>",
            ido = 0,
            addNewMeasuredTimeToTimeList()),
        stringem
}
function standardDeviation(e) {
    var s = averageSD(e)
        , e = averageSD(e.map(function (e) {
            e -= s;
            return e * e
        }))
        , e = Math.sqrt(e);
    return Math.round(e)
}
function averageSD(e) {
    return e.reduce(function (e, s) {
        return e + s
    }, 0) / e.length
}
function median(e) {
    e.sort(function (e, s) {
        return e - s
    });
    var s = Math.floor(e.length / 2)
        , s = e.length % 2 ? e[s] : (e[s - 1] + e[s]) / 2;
    return Math.round(s)
}
function calculateAverages() {
    var e = idok[1]
        , s = idok[1]
        , t = 0;
    bestindex = 1;
    for (var i = [], a = worstindex = 1; a <= hanyadikmeres - 1; a++)
        i[a - 1] = idok[a];
    if (1 < hanyadikmeres) {
        for (a = 1; a <= hanyadikmeres - 1; a++)
            e > idok[a] && (e = idok[a],
                bestindex = a),
                s < idok[a] && (s = idok[a],
                    worstindex = a),
                t += idok[a];
        document.getElementById("statBest").innerHTML = miliseconds(e),
            document.getElementById("statWorst").innerHTML = miliseconds(s),
            document.getElementById("statAvg").innerHTML = miliseconds(Number((t / (hanyadikmeres - 1)).toFixed(0))),
            document.getElementById("statMedian").innerHTML = miliseconds(median(i)),
            document.getElementById("statSDeviation").innerHTML = miliseconds(standardDeviation(i)),
            hanyadikmeres < 3 && (document.getElementById("statSDeviation").innerHTML = placeholder)
    } else
        bestindex = 0,
            worstindex = 0,
            document.getElementById("statBest").innerHTML = placeholder,
            document.getElementById("statWorst").innerHTML = placeholder,
            document.getElementById("statAvg").innerHTML = placeholder,
            document.getElementById("statMedian").innerHTML = placeholder,
            document.getElementById("statSDeviation").innerHTML = placeholder;
    if (t = 0,
        document.getElementById("statAvgLast5").innerHTML = placeholder,
        document.getElementById("statLast3of5").innerHTML = placeholder,
        5 < hanyadikmeres) {
        for (a = hanyadikmeres - 5; a <= hanyadikmeres - 1; a++)
            t += idok[a];
        document.getElementById("statAvgLast5").innerHTML = miliseconds(Number((t / 5).toFixed(0))),
            document.getElementById("statLast3of5").innerHTML = miliseconds(meanOf(hanyadikmeres, 5))
    }
    if (document.getElementById("statBest3of5").innerHTML = placeholder,
        5 < hanyadikmeres) {
        for (t = meanOf(hanyadikmeres, 5),
            a = hanyadikmeres; 5 < a; a--)
            t > meanOf(a, 5) && (t = meanOf(a, 5));
        document.getElementById("statBest3of5").innerHTML = miliseconds(t)
    }
    if (t = 0,
        document.getElementById("statAvgLast12").innerHTML = placeholder,
        document.getElementById("statLast10of12").innerHTML = placeholder,
        12 < hanyadikmeres) {
        for (a = hanyadikmeres - 12; a <= hanyadikmeres - 1; a++)
            t += idok[a];
        document.getElementById("statAvgLast12").innerHTML = miliseconds(Number((t / 12).toFixed(0))),
            document.getElementById("statLast10of12").innerHTML = miliseconds(meanOf(hanyadikmeres, 12))
    }
    if (document.getElementById("statBest10of12").innerHTML = placeholder,
        12 < hanyadikmeres) {
        for (t = meanOf(hanyadikmeres, 12),
            a = hanyadikmeres; 12 < a; a--)
            t > meanOf(a, 12) && (t = meanOf(a, 12));
        document.getElementById("statBest10of12").innerHTML = miliseconds(t)
    }
}
function meanOf(e, s) {
    var t = idok[--e]
        , i = idok[e]
        , a = e
        , n = e
        , o = 0;
    for (z = e - (s - 1); z <= e; z++)
        t > idok[z] && (t = idok[z],
            a = z),
            i < idok[z] && (i = idok[z],
                n = z),
            1 == dnf[z] && (i = 999e6,
                n = z,
                o++);
    if (1 < o)
        return "DNF";
    var r = 0;
    for (z = e - (s - 1); z <= e; z++)
        z != a && z != n && (r += idok[z]);
    return Number((r / (s - 2)).toFixed(0))
}
function addNewMeasuredTimeToTimeList() {
    idok[hanyadikmeres] = difference,
        plustwo[hanyadikmeres] = "+2" == thisPenalty ? 1 : 0,
        dnf[hanyadikmeres] = "DNF" == thisPenalty ? 1 : 0,
        hanyadikmeres++,
        thisPenalty = "",
        calculateAverages();
    var e = ""
        , s = "";
    for (i = hanyadikmeres - 1; 0 < i; i--)
        s = "",
            2 < hanyadikmeres && (worstindex == i && (s = ' class="theWorstTime"'),
                bestindex == i && (s = ' class="theBestTime"')),
            e = i == hanyadikmeres - 1 ? e + "<div" + s + ' style="opacity: 0;height: 0;"><span class="sorszam">' + i + '.</span><a title="Info" class="measuredTime">' + miliseconds(idok[i]) + '</a> <span class="plus2sec plus2sec' + plustwo[i] + '" onclick="plus2this(' + i + ')">+2</span> <span class="dnfThis dnfThis' + dnf[i] + '" onclick="dnfThis(' + i + ')">DNF</span> <span class="timeRemove" onclick="timeRemove(' + i + ',this)">&times;</span></div>' : e + "<div" + s + '><span class="sorszam">' + i + '.</span><a title="Info" class="hasComment measuredTime">' + miliseconds(idok[i]) + '</a> <span class="plus2sec plus2sec' + plustwo[i] + '" onclick="plus2this(' + i + ')">+2</span> <span class="dnfThis dnfThis' + dnf[i] + '" onclick="dnfThis(' + i + ')">DNF</span> <span class="timeRemove" onclick="timeRemove(' + i + ',this)">&times;</span></div>';
    document.getElementById("solutionTimes").innerHTML = e
}
function refreshTimesList() {
    calculateAverages();
    var e = "";
    for (i = hanyadikmeres - 1; 0 < i; i--)
        classa = "",
            2 < hanyadikmeres && (worstindex == i && (classa = ' class="theWorstTime"'),
                bestindex == i && (classa = ' class="theBestTime"')),
            e = e + "<div" + classa + '><span class="sorszam">' + i + '.</span><a title="Info" class="hasComment measuredTime">' + miliseconds(idok[i]) + '</a> <span class="plus2sec plus2sec' + plustwo[i] + '" onclick="plus2this(' + i + ')">+2</span> <span class="dnfThis dnfThis' + dnf[i] + '" onclick="dnfThis(' + i + ')">DNF</span> <span class="timeRemove" onclick="timeRemove(' + i + ',this)">&times;</span></div>';
    document.getElementById("solutionTimes").innerHTML = e
}
function playSound(e) {
    1 == PlaySounds && new Audio("img/" + e).play()
}
function domanyscrambles() {
    doScramble(),
        $("#scrambleAlgorithm").html(aktalgoritm)
}
function thinkandscrambleAnimate() {
    $("#scrambleAlgorithm span").each(function (e) {
        $(this).delay(20 * e).fadeOut(200)
    }),
        setTimeout(function () {
            thinkandscramble()
        }, 500)
}
function thinkandscramble() {
    setTimeout("domanyscrambles()", 10)
}
function plus2this(e) {
    0 == plustwo[e] ? (plustwo[e] = 1,
        idok[e] = idok[e] + 2e3) : (plustwo[e] = 0,
            idok[e] = idok[e] - 2e3),
        refreshTimesList()
}
function dnfThis(e) {
    0 == dnf[e] ? dnf[e] = 1 : dnf[e] = 0,
        refreshTimesList()
}
function timeRemove(e, s) {
    $(s).parent().hide(333, function () {
        idok.splice(e, 1),
            plustwo.splice(e, 1),
            dnf.splice(e, 1),
            hanyadikmeres--,
            refreshTimesList()
    })
}
function doScramble() {
    var e, s, t = 0, i = 86, a = 86, n = "F", o = "";
    for (initnotscrambled(); t < cleng;)
        n = "no",
            0 == (e = Math.floor(6 * Math.random())) && 0 != i && (0 == a && 3 == i || (n = "F")),
            1 == e && 1 != i && (1 == a && 4 == i || (n = "R")),
            2 == e && 2 != i && (2 == a && 5 == i || (n = "U")),
            3 == e && 3 != i && (3 == a && 0 == i || (n = "B")),
            4 == e && 4 != i && (4 == a && 1 == i || (n = "L")),
            5 == e && 5 != i && (5 == a && 2 == i || (n = "D")),
            "no" != n && (a = i,
                i = e,
                1 == (s = Math.floor(3 * Math.random())) && (n += "2"),
                2 == s && (n += "'"),
                "F" == n && ff(),
                "F'" == n && fi(),
                "F2" == n && (ff(),
                    ff()),
                "R" == n && rr(),
                "R'" == n && ri(),
                "R2" == n && (rr(),
                    rr()),
                "U" == n && uu(),
                "U'" == n && ui(),
                "U2" == n && (uu(),
                    uu()),
                "B" == n && bb(),
                "B'" == n && bi(),
                "B2" == n && (bb(),
                    bb()),
                "L" == n && ll(),
                "L'" == n && li(),
                "L2" == n && (ll(),
                    ll()),
                "D" == n && dd(),
                "D'" == n && di(),
                "D2" == n && (dd(),
                    dd()),
                t++,
                o += n = "<span class='" + n.toLowerCase().replace("'", "i") + "'>" + n + "</span>");
    aktalgoritm = o
}
function initnotscrambled() {
    for (i = 1; i < 10; i++)
        a[i] = 6,
            a[i + 9] = 3,
            a[i + 18] = 2,
            a[i + 27] = 5,
            a[i + 36] = 4,
            a[i + 45] = 1
}
function refreshSolveLink() {
    updateA(),
        error = "ok";
    for (var e = 1, s = 1; s <= 9; s++)
        1 == a[s] && 2 == a[s + 9] && 3 == a[s + 18] && 4 == a[s + 27] && 5 == a[s + 36] && 6 == a[s + 45] || (e = 0);
    1 == e && (error = "Please set up a scrambled&nbsp;cube.");
    var t = 0
        , i = 0
        , n = 0
        , o = 0
        , r = 0
        , c = 0;
    for (s = 1; s <= 54; s++)
        1 == a[s] && t++,
            2 == a[s] && i++,
            3 == a[s] && n++,
            4 == a[s] && o++,
            5 == a[s] && r++,
            6 == a[s] && c++;
    for (9 != t && (error = "There are " + t + " white fields.<br />You should have 9 of each&nbsp;color."),
        9 != i && (error = "There are " + i + " white fields.<br />You should have 9 of each&nbsp;color."),
        9 != n && (error = "There are " + n + " white fields.<br />You should have 9 of each&nbsp;color."),
        9 != o && (error = "There are " + o + " white fields.<br />You should have 9 of each&nbsp;color."),
        9 != r && (error = "There are " + r + " white fields.<br />You should have 9 of each&nbsp;color."),
        9 != c && (error = "There are " + c + " white fields.<br />You should have 9 of each&nbsp;color."),
        c = r = o = n = i = t = 0,
        s = 1; s <= 9; s++)
        1 == a[9 * s - 4] && t++,
            2 == a[9 * s - 4] && i++,
            3 == a[9 * s - 4] && n++,
            4 == a[9 * s - 4] && o++,
            5 == a[9 * s - 4] && r++,
            6 == a[9 * s - 4] && c++;
    t * i * n * o * r * c != 1 && (1 < t && (error = "There are " + t + " white centers. "),
        1 < i && (error = "There are " + i + " orange centers. "),
        1 < n && (error = "There are " + n + " green centers. "),
        1 < o && (error = "There are " + o + " red centers. "),
        1 < r && (error = "There are " + r + " blue centers. "),
        1 < c && (error = "There are " + c + " yellow centers. "),
        error += "<br />Please don't use a color more than once as&nbsp;a&nbsp;center.");
    e = 0;
    for (s = 1; s <= 54; s++)
        0 == a[s] && e++;
    1 < e && (error = "There are " + e + " blank fields to&nbsp;color."),
        1 == e && (error = "There is a blank field left to&nbsp;color.");
    var l = "/solution/?cube=0";
    if ("ok" == error) {
        for (var s = 1; s < 55; s++)
            l += a[s];
        $("#solveCube").attr("target", "_blank")
    } else
        l = "#solver",
            $("#solveCube").attr("target", "_self");
    $("#solveCube").attr("href", l)
}
function jumbleCube() {
    for (i = 0; i < 200; i++) {
        var e = Math.floor(12 * Math.random());
        0 == e && (bor(),
            uu()),
            1 == e && (fd(),
                ui()),
            2 == e && ff(),
            3 == e && fi(),
            4 == e && dd(),
            5 == e && di(),
            6 == e && (bor(),
                bb()),
            7 == e && (fd(),
                bi()),
            8 == e && rr(),
            9 == e && ri(),
            10 == e && ll(),
            11 == e && li()
    }
}
function turnRight() {
    rotal("cubey", 90),
        6 == facingUp ? 5 < ++facingFront && (facingFront = 2) : --facingFront < 2 && (facingFront = 5),
        $("#scrambler").removeClass(),
        $("#scrambler").addClass("cubeOrient" + facingUp + facingFront)
}
function turnLeft() {
    rotal("cubey", -90),
        1 == facingUp ? 5 < ++facingFront && (facingFront = 2) : --facingFront < 2 && (facingFront = 5),
        $("#scrambler").removeClass(),
        $("#scrambler").addClass("cubeOrient" + facingUp + facingFront)
}
function flipCube() {
    rotal("cubez", 1 == facingUp ? -180 : 180),
        2 == facingFront ? facingFront = 4 : 3 == facingFront ? facingFront = 3 : 4 == facingFront ? facingFront = 2 : 5 == facingFront && (facingFront = 5),
        facingUp = 1 == facingUp ? 6 : 1,
        $("#scrambler").removeClass(),
        $("#scrambler").addClass("cubeOrient" + facingUp + facingFront)
}
function resetCube() {
    $("#wrapCube > div#face1 > div").each(function () {
        $(this).removeClass(),
            $(this).addClass("color1")
    }),
        $("#wrapCube > div#face2 > div").each(function () {
            $(this).removeClass(),
                $(this).addClass("color2")
        }),
        $("#wrapCube > div#face3 > div").each(function () {
            $(this).removeClass(),
                $(this).addClass("color3")
        }),
        $("#wrapCube > div#face4 > div").each(function () {
            $(this).removeClass(),
                $(this).addClass("color4")
        }),
        $("#wrapCube > div#face5 > div").each(function () {
            $(this).removeClass(),
                $(this).addClass("color5")
        }),
        $("#wrapCube > div#face6 > div").each(function () {
            $(this).removeClass(),
                $(this).addClass("color6")
        })
}
function rotCube(e, s, t) {
    segs = "rotateX(" + e + "deg) rotateY(" + s + "deg) rotateZ(" + t + "deg) translateX(0) translateY(0) translateZ(0)",
        $("#wrapCube").css({
            transform: segs
        })
}
function rotal(e, s) {
    window[e] = window[e] + s,
        rotCube(cubex, cubey, cubez)
}
$(document).ready(function () {
    thinkandscrambleAnimate();
    var t, s = "ontouchstart" in document.documentElement;
    $("#touchSensitive").mousedown(function (e) {
        e.preventDefault(),
            0 == s && spaceDown("mouse")
    }),
        $("#touchSensitive").mouseup(function (e) {
            e.preventDefault(),
                0 == s && spaceUp("mouse")
        }),
        $("#touchSensitive").on("touchstart", function () {
            s && spaceDown("tap")
        }),
        $("#touchSensitive").on("touchend", function () {
            s && spaceUp("tap")
        }),
        $("a#timerSettInspect").click(function (e) {
            $(this).toggleClass("active"),
                $(this).hasClass("active") ? wca = 1 : (wca = 0,
                    $("a#timerSettSound").removeClass("active"),
                    PlaySounds = 0)
        }),
        $("#scrambleAlgorithm").click(function (e) {
            thinkandscrambleAnimate()
        }),
        $("a#timerSettSound").click(function (e) {
            $(this).toggleClass("active"),
                PlaySounds = $(this).hasClass("active") ? 1 : 0
        }),
        $("a#timerSettScramble").click(function (e) {
            $(this).toggleClass("active"),
                $(this).hasClass("active") ? $("#scrambleAlgorithm").fadeIn(300) : $("#scrambleAlgorithm").fadeOut(300)
        }),
        initVariables(),
        $("#simulator").hasClass("touchDevice") && $("#fullSizeIcon").length && (t = !1,
            $(window).on("scroll.simulatorMobileWarning", function () {
                var e, s;
                t || 0 < $(window).scrollTop() && (t = !0,
                    $(window).off("scroll.simulatorMobileWarning"),
                    e = $("#fullSizeIcon").length ? $("#fullSizeIcon").attr("href") : "/play/",
                    s = $('<a href="' + e + '" class="simulator-mobile-warning" id="simulatorFullscreenWarning">↖️&nbsp;Go full screen on mobile</a>'),
                    $("#simulator").append(s),
                    setTimeout(function () {
                        s.addClass("simulator-mobile-warning-hide")
                    }, 5e3))
            })),
        $(".sectionHelp").on("click touchstart", function (e) {
            e.preventDefault(),
                $(this).toggleClass("active")
        }),
        $("span.algo").each(function () {
            alg = $(this).text() + "",
                tomb = alg.split(" "),
                stri = "";
            for (var e = 0; e < tomb.length; e++)
                classz = tomb[e].charAt(0),
                    2 == tomb[e].charAt(1) && (classz += "2"),
                    2 != tomb[e].charAt(1) && 2 == tomb[e].length && (classz += "i"),
                    classz = classz.toLowerCase(),
                    stri = stri + "<span class=" + classz + ">" + tomb[e] + "</span>";
            $(this).html(stri)
        }),
        $("a.scrollLink").click(function (e) {
            e.preventDefault(),
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top
                }, 500)
        }),
        $("a#shuffleToPlay").click(function (e) {
            $("html, body").animate({
                scrollTop: $("#container").offset().top
            }, 500)
        }),
        $("#solveCube").on("click", function () {
            "ok" != error && ($("#hiba").html(error),
                $("#hibaUzenet").fadeIn(300))
        }),
        $("#speedSlider").change(function () {
            1e3 <= (cubeplaybackspeed = $("#speedSlider").val()) ? $("#currentSpeedDisplay").html(Math.round(cubeplaybackspeed / 1e3 * 10) / 10 + " s/rot") : $("#currentSpeedDisplay").html(Math.round(1e3 / cubeplaybackspeed * 10) / 10 + " rot/s")
        }),
        $("#wrapPaletta a").on("click", function () {
            $("#wrapPaletta").removeClass(),
                activeColor = $(this).attr("data-color"),
                $("#wrapPaletta").addClass("color" + activeColor),
                $("#wrapCube > div > div > div").removeClass(),
                $("#wrapCube > div > div > div").addClass("color" + activeColor)
        }),
        $("#scrambler #wrapCube > div > div").on("click", function () {
            var e, s = $(this).attr("data-field");
            lastClickedFiled == s && (activeColor = 0,
                $("#wrapPaletta").removeClass(),
                $("#wrapPaletta").addClass("color" + activeColor)),
                0 < activeColor ? ($(this).removeClass(),
                    $(this).addClass("color" + activeColor)) : ($("#wrapCube > div > div > div").removeClass(),
                        e = (e = $(this).attr("class")).substr(e.length - 1),
                        6 < (e = Number(e) + 1) && (e = 1),
                        $(this).removeClass(),
                        $(this).addClass("color" + e)),
                lastClickedFiled = s
        }),
        $("#cubeRotations a").mouseover(function (e) {
            var s = "#" + $(this).attr("data-arrow");
            $(s).addClass("visible")
        }),
        $("#cubeRotations a").mouseleave(function (e) {
            var s = "#" + $(this).attr("data-arrow");
            $(s).removeClass("visible")
        }),
        $("#clearCube").on("click", function () {
            $("#wrapCube > div > div").each(function () {
                $(this).removeClass(),
                    $(this).addClass("color0")
            })
        }),
        $("#resetCube").on("click", function () {
            resetCube()
        }),
        $("#transparency").on("click", function () {
            $("#wrapCube").toggleClass("transparent"),
                $("#transparency").toggleClass("active")
        }),
        $("#floatingBacks").on("click", function () {
            $("#scrambler").removeClass(),
                $("#scrambler").addClass("cubeOrient13"),
                facingFront = 3,
                facingUp = 1,
                $("#floatingBacks").toggleClass("active"),
                $("#solver").toggleClass("floatingBacksActive"),
                rotCube(cubex = -22, cubey = -38, cubez = 0),
                setTimeout(function () {
                    $("#wrapCube").toggleClass("floatingBacks")
                }, 200)
        }),
        $("#tothreeDView").on("click", function () {
            activeView = 1,
                $("#scrambler").addClass("cubeOrient13"),
                facingFront = 3,
                facingUp = 1,
                rotCube(cubex, cubey, cubez),
                $("#switchView a").removeClass(),
                $(this).addClass("active"),
                $("#wrapCube").removeClass(),
                $("#transparency").removeClass(),
                $("#floatingBacks").removeClass(),
                $("#solver").removeClass("floatingBacksActive"),
                setTimeout(function () {
                    $("#wrapCube").addClass("threeDView")
                }, 400),
                setTimeout(function () {
                    $("#wrapCubeSettings").fadeIn(300)
                }, 1e3)
        }),
        $("#toflatView").on("click", function () {
            activeView = 2,
                cubex = -22,
                cubey = -38,
                rotCube(cubez = 0, 0, 0),
                $("#switchView a").removeClass(),
                $(this).addClass("active"),
                $("#wrapCube").removeClass(),
                $("#transparency").removeClass(),
                $("#floatingBacks").removeClass(),
                $("#solver").removeClass("floatingBacksActive"),
                setTimeout(function () {
                    $("#wrapCube").addClass("flatView")
                }, 400),
                $("#scrambler").removeClass(),
                $("#wrapCubeSettings").hide(0)
        }),
        $("#tokociembaView").on("click", function () {
            cubex = -22,
                cubey = -38,
                rotCube(cubez = 0, 0, 0),
                $("#wrapCube").css({
                    transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0) translateY(0) translateZ(0)"
                }),
                $("#switchView a").removeClass(),
                $(this).addClass("active"),
                $("#wrapCube").removeClass(),
                $("#transparency").removeClass(),
                $("#floatingBacks").removeClass(),
                $("#solver").removeClass("floatingBacksActive"),
                1 == activeView ? setTimeout(function () {
                    $("#wrapCube").addClass("kociembaView")
                }, 400) : $("#wrapCube").addClass("kociembaView"),
                activeView = 3,
                $("#scrambler").removeClass(),
                $("#wrapCubeSettings").fadeOut(300)
        }),
        $("#turnLeft").on("click", function () {
            turnLeft()
        }),
        $("#turnRight").on("click", function () {
            turnRight()
        }),
        $("#turnUp").on("click", function () {
            flipCube()
        }),
        $("#rotateF").on("click", function () {
            updateA(),
                ff(),
                updateCube()
        }),
        $("#rotateR").on("click", function () {
            updateA(),
                rr(),
                updateCube()
        }),
        $("#rotateU").on("click", function () {
            updateA(),
                uu(),
                updateCube()
        }),
        $("#rotateB").on("click", function () {
            updateA(),
                bb(),
                updateCube()
        }),
        $("#rotateL").on("click", function () {
            updateA(),
                ll(),
                updateCube()
        }),
        $("#rotateD").on("click", function () {
            updateA(),
                dd(),
                updateCube()
        }),
        $("#rotateFi").on("click", function () {
            updateA(),
                fi(),
                updateCube()
        }),
        $("#rotateRi").on("click", function () {
            updateA(),
                ri(),
                updateCube()
        }),
        $("#rotateUi").on("click", function () {
            updateA(),
                ui(),
                updateCube()
        }),
        $("#rotateBi").on("click", function () {
            updateA(),
                bi(),
                updateCube()
        }),
        $("#rotateLi").on("click", function () {
            updateA(),
                li(),
                updateCube()
        }),
        $("#rotateDi").on("click", function () {
            updateA(),
                di(),
                updateCube()
        }),
        $("#scrambleCube").on("click", function () {
            resetCube(),
                updateA(),
                jumbleCube(),
                setTimeout(function () {
                    jumbleCube(),
                        updateCube()
                }, 300),
                setTimeout(function () {
                    jumbleCube(),
                        updateCube()
                }, 600),
                setTimeout(function () {
                    jumbleCube(),
                        updateCube()
                }, 900),
                updateCube()
        }),
        $("#closeHibauzenet").on("click", function (e) {
            $("#hibaUzenet").fadeOut(200)
        }),
        $("#prevButton").on("click", function (e) {
            (playingBackTheSolution = 0) < aktstep && eddigkiir(aktstep - 1)
        }),
        $("#pauseButton").on("click", function (e) {
            playingBackTheSolution = 0
        }),
        $("#playButton").on("click", function (e) {
            playingBackTheSolution = 1,
                rekurzivSolutionPlayback()
        }),
        $("#stopButton").on("click", function (e) {
            eddigkiir(aktstep = playingBackTheSolution = 0)
        }),
        $("#nextButton").on("click", function (e) {
            playingBackTheSolution = 0,
                aktstep < osszlepesszam && eddigkiir(aktstep + 1)
        }),
        $("#submitScrambleAlg").on("click", function (e) {
            doInputScramble(800)
        }),
        $("#executeScrambleAlg").on("click", function (e) {
            doInputScramble(0)
        }),
        $("#scrambleAlg").keyup(function (e) {
            13 === e.which && doInputScramble(800)
        })
});
var cc, turn = new Array, type = new Array, inputerror = 0;
function doInputScramble(e) {
    inputerror = 0;
    var s = $("#scrambleAlg").val()
        , t = "";
    turn = s.split(" "),
        $("#inputScrambleError").html("");
    for (var i = 0; i < turn.length; i++)
        if (type[i] = 0,
            -1 != turn[i].indexOf("’") && (type[i] = 1),
            -1 != turn[i].indexOf("'") && (type[i] = 1),
            turn[i] == turn[i].toLowerCase() && (type[i] = 1),
            -1 != turn[i].indexOf("2") && (type[i] = 2),
            turn[i] = turn[i].toUpperCase(),
            -1 != turn[i].indexOf("U"))
            turn[i] = 1;
        else if (-1 != turn[i].indexOf("L"))
            turn[i] = 3;
        else if (-1 != turn[i].indexOf("F"))
            turn[i] = 5;
        else if (-1 != turn[i].indexOf("R"))
            turn[i] = 7;
        else if (-1 != turn[i].indexOf("B"))
            turn[i] = 9;
        else if (-1 != turn[i].indexOf("D"))
            turn[i] = 11;
        else if (-1 != turn[i].indexOf("M"))
            turn[i] = 13;
        else if (-1 != turn[i].indexOf("E"))
            turn[i] = 15;
        else if (-1 != turn[i].indexOf("S"))
            turn[i] = 17;
        else if (-1 != turn[i].indexOf("X"))
            turn[i] = 19;
        else if (-1 != turn[i].indexOf("Y"))
            turn[i] = 21;
        else {
            if (-1 == turn[i].indexOf("Z")) {
                inputerror = 1,
                    $("#inputScrambleError").html("Error in position " + (i + 1) + ": " + turn[i]);
                break
            }
            turn[i] = 23
        }
    if (0 == inputerror) {
        for (i = 0; i < turn.length; i++)
            t += '<span id="compiledAlg' + i + '">',
                1 == turn[i] && (t += "U"),
                3 == turn[i] && (t += "L"),
                5 == turn[i] && (t += "F"),
                7 == turn[i] && (t += "R"),
                9 == turn[i] && (t += "B"),
                11 == turn[i] && (t += "D"),
                13 == turn[i] && (t += "M"),
                15 == turn[i] && (t += "E"),
                17 == turn[i] && (t += "S"),
                19 == turn[i] && (t += "X"),
                21 == turn[i] && (t += "Y"),
                23 == turn[i] && (t += "Z"),
                1 == type[i] && (t += "'"),
                2 == type[i] && (t += "2"),
                t += "</span>";
        $("#compiledScramble").html(t),
            $("#scrambleAlg, #submitScrambleAlg, #executeScrambleAlg").hide(),
            executeInputScramble(0, e)
    }
    s.length < 1 && $("#inputScrambleError").html("Add a scramble algorithm")
}
function executeInputScramble(e, s) {
    updateA(),
        $("#compiledScramble span").removeClass("active"),
        $("#compiledAlg" + e).addClass("active");
    var t = 0;
    turn.length > e ? (t = turn[e],
        1 == type[e] && t++,
        1 == t && uu(),
        2 == t && ui(),
        3 == t && ll(),
        4 == t && li(),
        5 == t && ff(),
        6 == t && fi(),
        7 == t && rr(),
        8 == t && ri(),
        9 == t && bb(),
        10 == t && bi(),
        11 == t && dd(),
        12 == t && di(),
        13 == t && (li(),
            rr(),
            bor()),
        14 == t && (ll(),
            ri(),
            bor(),
            bor(),
            bor()),
        15 == t && (uu(),
            di(),
            fd(),
            fd(),
            fd()),
        16 == t && (ui(),
            dd(),
            fd()),
        17 == t && (fi(),
            bb(),
            fd(),
            bor(),
            fd(),
            fd(),
            fd()),
        18 == t && (ff(),
            bi(),
            bor(),
            fd(),
            fd(),
            fd(),
            bor(),
            fd(),
            fd()),
        19 == t && (bor(),
            bor(),
            bor()),
        20 == t && bor(),
        21 == t && fd(),
        22 == t && (fd(),
            fd(),
            fd()),
        23 == t && (fd(),
            bor(),
            fd(),
            fd(),
            fd()),
        24 == t && (fd(),
            fd(),
            fd(),
            bor(),
            fd()),
        setTimeout(function () {
            updateCube()
        }, s / 2),
        2 == type[e] ? type[e] = 0 : e++,
        setTimeout(function () {
            executeInputScramble(e, s)
        }, s)) : ($("#compiledScramble").html(""),
            $("#scrambleAlg, #submitScrambleAlg, #executeScrambleAlg").show()),
        updateCube()
}
function updateA() {
    for (i = 1; i < 55; i++)
        a[i] = $("#sticker" + i).attr("class").charAt(5)
}
function updateCube() {
    for (i = 1; i < 55; i++)
        $("#sticker" + i).removeClass(),
            $("#sticker" + i).addClass("color" + a[i])
}
function bor() {
    s[1] = a[1],
        s[2] = a[4],
        s[3] = a[7],
        a[1] = a[45],
        a[4] = a[42],
        a[7] = a[39],
        a[45] = a[46],
        a[42] = a[49],
        a[39] = a[52],
        a[46] = a[19],
        a[49] = a[22],
        a[52] = a[25],
        a[19] = s[1],
        a[22] = s[2],
        a[25] = s[3],
        s[1] = a[2],
        s[2] = a[5],
        s[3] = a[8],
        a[2] = a[44],
        a[5] = a[41],
        a[8] = a[38],
        a[44] = a[47],
        a[41] = a[50],
        a[38] = a[53],
        a[47] = a[20],
        a[50] = a[23],
        a[53] = a[26],
        a[20] = s[1],
        a[23] = s[2],
        a[26] = s[3],
        s[1] = a[3],
        s[2] = a[6],
        s[3] = a[9],
        a[3] = a[43],
        a[6] = a[40],
        a[9] = a[37],
        a[43] = a[48],
        a[40] = a[51],
        a[37] = a[54],
        a[48] = a[21],
        a[51] = a[24],
        a[54] = a[27],
        a[21] = s[1],
        a[24] = s[2],
        a[27] = s[3],
        s[1] = a[10],
        s[2] = a[11],
        a[10] = a[16],
        a[11] = a[13],
        a[16] = a[18],
        a[13] = a[17],
        a[18] = a[12],
        a[17] = a[15],
        a[12] = s[1],
        a[15] = s[2],
        s[1] = a[28],
        s[2] = a[29],
        a[28] = a[30],
        a[29] = a[33],
        a[30] = a[36],
        a[33] = a[35],
        a[36] = a[34],
        a[35] = a[31],
        a[34] = s[1],
        a[31] = s[2]
}
function rot() {
    s[1] = a[25],
        s[2] = a[26],
        s[3] = a[27],
        a[25] = a[16],
        a[26] = a[17],
        a[27] = a[18],
        a[16] = a[43],
        a[17] = a[44],
        a[18] = a[45],
        a[43] = a[34],
        a[44] = a[35],
        a[45] = a[36],
        a[34] = s[1],
        a[35] = s[2],
        a[36] = s[3],
        s[1] = a[46],
        s[2] = a[47],
        a[46] = a[52],
        a[47] = a[49],
        a[52] = a[54],
        a[49] = a[53],
        a[54] = a[48],
        a[53] = a[51],
        a[48] = s[1],
        a[51] = s[2]
}
function roti() {
    s[1] = a[25],
        s[2] = a[26],
        s[3] = a[27],
        a[25] = a[34],
        a[26] = a[35],
        a[27] = a[36],
        a[34] = a[43],
        a[35] = a[44],
        a[36] = a[45],
        a[43] = a[16],
        a[44] = a[17],
        a[45] = a[18],
        a[16] = s[1],
        a[17] = s[2],
        a[18] = s[3],
        s[1] = a[46],
        s[2] = a[47],
        a[46] = a[48],
        a[47] = a[51],
        a[48] = a[54],
        a[51] = a[53],
        a[54] = a[52],
        a[53] = a[49],
        a[52] = s[1],
        a[49] = s[2]
}
function fd() {
    s[1] = a[19],
        s[2] = a[20],
        s[3] = a[21],
        a[19] = a[28],
        a[20] = a[29],
        a[21] = a[30],
        a[28] = a[37],
        a[29] = a[38],
        a[30] = a[39],
        a[37] = a[10],
        a[38] = a[11],
        a[39] = a[12],
        a[10] = s[1],
        a[11] = s[2],
        a[12] = s[3],
        s[1] = a[22],
        s[2] = a[23],
        s[3] = a[24],
        a[22] = a[31],
        a[23] = a[32],
        a[24] = a[33],
        a[31] = a[40],
        a[32] = a[41],
        a[33] = a[42],
        a[40] = a[13],
        a[41] = a[14],
        a[42] = a[15],
        a[13] = s[1],
        a[14] = s[2],
        a[15] = s[3],
        s[1] = a[25],
        s[2] = a[26],
        s[3] = a[27],
        a[25] = a[34],
        a[26] = a[35],
        a[27] = a[36],
        a[34] = a[43],
        a[35] = a[44],
        a[36] = a[45],
        a[43] = a[16],
        a[44] = a[17],
        a[45] = a[18],
        a[16] = s[1],
        a[17] = s[2],
        a[18] = s[3],
        s[1] = a[1],
        s[2] = a[2],
        a[1] = a[7],
        a[2] = a[4],
        a[7] = a[9],
        a[4] = a[8],
        a[9] = a[3],
        a[8] = a[6],
        a[3] = s[1],
        a[6] = s[2],
        s[1] = a[46],
        s[2] = a[47],
        a[46] = a[48],
        a[47] = a[51],
        a[48] = a[54],
        a[51] = a[53],
        a[54] = a[52],
        a[53] = a[49],
        a[52] = s[1],
        a[49] = s[2]
}
function uu() {
    bor(),
        bor(),
        rot(),
        bor(),
        bor()
}
function ui() {
    bor(),
        bor(),
        roti(),
        bor(),
        bor()
}
function ff() {
    bor(),
        rot(),
        bor(),
        bor(),
        bor()
}
function fi() {
    bor(),
        roti(),
        bor(),
        bor(),
        bor()
}
function rr() {
    fd(),
        bor(),
        rot(),
        bor(),
        bor(),
        bor(),
        fd(),
        fd(),
        fd()
}
function ri() {
    fd(),
        bor(),
        roti(),
        bor(),
        bor(),
        bor(),
        fd(),
        fd(),
        fd()
}
function ll() {
    fd(),
        fd(),
        fd(),
        bor(),
        rot(),
        bor(),
        bor(),
        bor(),
        fd()
}
function li() {
    fd(),
        fd(),
        fd(),
        bor(),
        roti(),
        bor(),
        bor(),
        bor(),
        fd()
}
function dd() {
    rot()
}
function di() {
    roti()
}
function bb() {
    bor(),
        bor(),
        bor(),
        rot(),
        bor()
}
function bi() {
    bor(),
        bor(),
        bor(),
        roti(),
        bor()
}
function kicsibor() {
    s[1] = kics[1],
        s[2] = kics[4],
        s[3] = kics[7],
        kics[1] = kics[45],
        kics[4] = kics[42],
        kics[7] = kics[39],
        kics[45] = kics[46],
        kics[42] = kics[49],
        kics[39] = kics[52],
        kics[46] = kics[19],
        kics[49] = kics[22],
        kics[52] = kics[25],
        kics[19] = s[1],
        kics[22] = s[2],
        kics[25] = s[3],
        s[1] = kics[2],
        s[2] = kics[5],
        s[3] = kics[8],
        kics[2] = kics[44],
        kics[5] = kics[41],
        kics[8] = kics[38],
        kics[44] = kics[47],
        kics[41] = kics[50],
        kics[38] = kics[53],
        kics[47] = kics[20],
        kics[50] = kics[23],
        kics[53] = kics[26],
        kics[20] = s[1],
        kics[23] = s[2],
        kics[26] = s[3],
        s[1] = kics[3],
        s[2] = kics[6],
        s[3] = kics[9],
        kics[3] = kics[43],
        kics[6] = kics[40],
        kics[9] = kics[37],
        kics[43] = kics[48],
        kics[40] = kics[51],
        kics[37] = kics[54],
        kics[48] = kics[21],
        kics[51] = kics[24],
        kics[54] = kics[27],
        kics[21] = s[1],
        kics[24] = s[2],
        kics[27] = s[3],
        s[1] = kics[10],
        s[2] = kics[11],
        kics[10] = kics[16],
        kics[11] = kics[13],
        kics[16] = kics[18],
        kics[13] = kics[17],
        kics[18] = kics[12],
        kics[17] = kics[15],
        kics[12] = s[1],
        kics[15] = s[2],
        s[1] = kics[28],
        s[2] = kics[29],
        kics[28] = kics[30],
        kics[29] = kics[33],
        kics[30] = kics[36],
        kics[33] = kics[35],
        kics[36] = kics[34],
        kics[35] = kics[31],
        kics[34] = s[1],
        kics[31] = s[2]
}
function kicsirot() {
    s[1] = kics[25],
        s[2] = kics[26],
        s[3] = kics[27],
        kics[25] = kics[16],
        kics[26] = kics[17],
        kics[27] = kics[18],
        kics[16] = kics[43],
        kics[17] = kics[44],
        kics[18] = kics[45],
        kics[43] = kics[34],
        kics[44] = kics[35],
        kics[45] = kics[36],
        kics[34] = s[1],
        kics[35] = s[2],
        kics[36] = s[3],
        s[1] = kics[46],
        s[2] = kics[47],
        kics[46] = kics[52],
        kics[47] = kics[49],
        kics[52] = kics[54],
        kics[49] = kics[53],
        kics[54] = kics[48],
        kics[53] = kics[51],
        kics[48] = s[1],
        kics[51] = s[2]
}
function kicsiroti() {
    s[1] = kics[25],
        s[2] = kics[26],
        s[3] = kics[27],
        kics[25] = kics[34],
        kics[26] = kics[35],
        kics[27] = kics[36],
        kics[34] = kics[43],
        kics[35] = kics[44],
        kics[36] = kics[45],
        kics[43] = kics[16],
        kics[44] = kics[17],
        kics[45] = kics[18],
        kics[16] = s[1],
        kics[17] = s[2],
        kics[18] = s[3],
        s[1] = kics[46],
        s[2] = kics[47],
        kics[46] = kics[48],
        kics[47] = kics[51],
        kics[48] = kics[54],
        kics[51] = kics[53],
        kics[54] = kics[52],
        kics[53] = kics[49],
        kics[52] = s[1],
        kics[49] = s[2]
}
function kicsifd() {
    s[1] = kics[19],
        s[2] = kics[20],
        s[3] = kics[21],
        kics[19] = kics[28],
        kics[20] = kics[29],
        kics[21] = kics[30],
        kics[28] = kics[37],
        kics[29] = kics[38],
        kics[30] = kics[39],
        kics[37] = kics[10],
        kics[38] = kics[11],
        kics[39] = kics[12],
        kics[10] = s[1],
        kics[11] = s[2],
        kics[12] = s[3],
        s[1] = kics[22],
        s[2] = kics[23],
        s[3] = kics[24],
        kics[22] = kics[31],
        kics[23] = kics[32],
        kics[24] = kics[33],
        kics[31] = kics[40],
        kics[32] = kics[41],
        kics[33] = kics[42],
        kics[40] = kics[13],
        kics[41] = kics[14],
        kics[42] = kics[15],
        kics[13] = s[1],
        kics[14] = s[2],
        kics[15] = s[3],
        s[1] = kics[25],
        s[2] = kics[26],
        s[3] = kics[27],
        kics[25] = kics[34],
        kics[26] = kics[35],
        kics[27] = kics[36],
        kics[34] = kics[43],
        kics[35] = kics[44],
        kics[36] = kics[45],
        kics[43] = kics[16],
        kics[44] = kics[17],
        kics[45] = kics[18],
        kics[16] = s[1],
        kics[17] = s[2],
        kics[18] = s[3],
        s[1] = kics[1],
        s[2] = kics[2],
        kics[1] = kics[7],
        kics[2] = kics[4],
        kics[7] = kics[9],
        kics[4] = kics[8],
        kics[9] = kics[3],
        kics[8] = kics[6],
        kics[3] = s[1],
        kics[6] = s[2],
        s[1] = kics[46],
        s[2] = kics[47],
        kics[46] = kics[48],
        kics[47] = kics[51],
        kics[48] = kics[54],
        kics[51] = kics[53],
        kics[54] = kics[52],
        kics[53] = kics[49],
        kics[52] = s[1],
        kics[49] = s[2]
}
function kicsiuu() {
    kicsibor(),
        kicsibor(),
        kicsirot(),
        kicsibor(),
        kicsibor()
}
function kicsiui() {
    kicsibor(),
        kicsibor(),
        kicsiroti(),
        kicsibor(),
        kicsibor()
}
function kicsiff() {
    kicsibor(),
        kicsirot(),
        kicsibor(),
        kicsibor(),
        kicsibor()
}
function kicsifi() {
    kicsibor(),
        kicsiroti(),
        kicsibor(),
        kicsibor(),
        kicsibor()
}
function kicsirr() {
    kicsifd(),
        kicsibor(),
        kicsirot(),
        kicsibor(),
        kicsibor(),
        kicsibor(),
        kicsifd(),
        kicsifd(),
        kicsifd()
}
function kicsiri() {
    kicsifd(),
        kicsibor(),
        kicsiroti(),
        kicsibor(),
        kicsibor(),
        kicsibor(),
        kicsifd(),
        kicsifd(),
        kicsifd()
}
function kicsill() {
    kicsifd(),
        kicsifd(),
        kicsifd(),
        kicsibor(),
        kicsirot(),
        kicsibor(),
        kicsibor(),
        kicsibor(),
        kicsifd()
}
function kicsili() {
    kicsifd(),
        kicsifd(),
        kicsifd(),
        kicsibor(),
        kicsiroti(),
        kicsibor(),
        kicsibor(),
        kicsibor(),
        kicsifd()
}
function kicsidd() {
    kicsirot()
}
function kicsidi() {
    kicsiroti()
}
function kicsibb() {
    kicsibor(),
        kicsibor(),
        kicsibor(),
        kicsirot(),
        kicsibor(),
        stp++,
        step[stp] = 9
}
function kicsibi() {
    kicsibor(),
        kicsibor(),
        kicsibor(),
        kicsiroti(),
        kicsibor(),
        stp++,
        step[stp] = 10
}
function sbsbor() {
    s[1] = sbs[1],
        s[2] = sbs[4],
        s[3] = sbs[7],
        sbs[1] = sbs[45],
        sbs[4] = sbs[42],
        sbs[7] = sbs[39],
        sbs[45] = sbs[46],
        sbs[42] = sbs[49],
        sbs[39] = sbs[52],
        sbs[46] = sbs[19],
        sbs[49] = sbs[22],
        sbs[52] = sbs[25],
        sbs[19] = s[1],
        sbs[22] = s[2],
        sbs[25] = s[3],
        s[1] = sbs[2],
        s[2] = sbs[5],
        s[3] = sbs[8],
        sbs[2] = sbs[44],
        sbs[5] = sbs[41],
        sbs[8] = sbs[38],
        sbs[44] = sbs[47],
        sbs[41] = sbs[50],
        sbs[38] = sbs[53],
        sbs[47] = sbs[20],
        sbs[50] = sbs[23],
        sbs[53] = sbs[26],
        sbs[20] = s[1],
        sbs[23] = s[2],
        sbs[26] = s[3],
        s[1] = sbs[3],
        s[2] = sbs[6],
        s[3] = sbs[9],
        sbs[3] = sbs[43],
        sbs[6] = sbs[40],
        sbs[9] = sbs[37],
        sbs[43] = sbs[48],
        sbs[40] = sbs[51],
        sbs[37] = sbs[54],
        sbs[48] = sbs[21],
        sbs[51] = sbs[24],
        sbs[54] = sbs[27],
        sbs[21] = s[1],
        sbs[24] = s[2],
        sbs[27] = s[3],
        s[1] = sbs[10],
        s[2] = sbs[11],
        sbs[10] = sbs[16],
        sbs[11] = sbs[13],
        sbs[16] = sbs[18],
        sbs[13] = sbs[17],
        sbs[18] = sbs[12],
        sbs[17] = sbs[15],
        sbs[12] = s[1],
        sbs[15] = s[2],
        s[1] = sbs[28],
        s[2] = sbs[29],
        sbs[28] = sbs[30],
        sbs[29] = sbs[33],
        sbs[30] = sbs[36],
        sbs[33] = sbs[35],
        sbs[36] = sbs[34],
        sbs[35] = sbs[31],
        sbs[34] = s[1],
        sbs[31] = s[2]
}
function sbsrot() {
    s[1] = sbs[25],
        s[2] = sbs[26],
        s[3] = sbs[27],
        sbs[25] = sbs[16],
        sbs[26] = sbs[17],
        sbs[27] = sbs[18],
        sbs[16] = sbs[43],
        sbs[17] = sbs[44],
        sbs[18] = sbs[45],
        sbs[43] = sbs[34],
        sbs[44] = sbs[35],
        sbs[45] = sbs[36],
        sbs[34] = s[1],
        sbs[35] = s[2],
        sbs[36] = s[3],
        s[1] = sbs[46],
        s[2] = sbs[47],
        sbs[46] = sbs[52],
        sbs[47] = sbs[49],
        sbs[52] = sbs[54],
        sbs[49] = sbs[53],
        sbs[54] = sbs[48],
        sbs[53] = sbs[51],
        sbs[48] = s[1],
        sbs[51] = s[2]
}
function sbsroti() {
    s[1] = sbs[25],
        s[2] = sbs[26],
        s[3] = sbs[27],
        sbs[25] = sbs[34],
        sbs[26] = sbs[35],
        sbs[27] = sbs[36],
        sbs[34] = sbs[43],
        sbs[35] = sbs[44],
        sbs[36] = sbs[45],
        sbs[43] = sbs[16],
        sbs[44] = sbs[17],
        sbs[45] = sbs[18],
        sbs[16] = s[1],
        sbs[17] = s[2],
        sbs[18] = s[3],
        s[1] = sbs[46],
        s[2] = sbs[47],
        sbs[46] = sbs[48],
        sbs[47] = sbs[51],
        sbs[48] = sbs[54],
        sbs[51] = sbs[53],
        sbs[54] = sbs[52],
        sbs[53] = sbs[49],
        sbs[52] = s[1],
        sbs[49] = s[2]
}
function sbsfd() {
    s[1] = sbs[19],
        s[2] = sbs[20],
        s[3] = sbs[21],
        sbs[19] = sbs[28],
        sbs[20] = sbs[29],
        sbs[21] = sbs[30],
        sbs[28] = sbs[37],
        sbs[29] = sbs[38],
        sbs[30] = sbs[39],
        sbs[37] = sbs[10],
        sbs[38] = sbs[11],
        sbs[39] = sbs[12],
        sbs[10] = s[1],
        sbs[11] = s[2],
        sbs[12] = s[3],
        s[1] = sbs[22],
        s[2] = sbs[23],
        s[3] = sbs[24],
        sbs[22] = sbs[31],
        sbs[23] = sbs[32],
        sbs[24] = sbs[33],
        sbs[31] = sbs[40],
        sbs[32] = sbs[41],
        sbs[33] = sbs[42],
        sbs[40] = sbs[13],
        sbs[41] = sbs[14],
        sbs[42] = sbs[15],
        sbs[13] = s[1],
        sbs[14] = s[2],
        sbs[15] = s[3],
        s[1] = sbs[25],
        s[2] = sbs[26],
        s[3] = sbs[27],
        sbs[25] = sbs[34],
        sbs[26] = sbs[35],
        sbs[27] = sbs[36],
        sbs[34] = sbs[43],
        sbs[35] = sbs[44],
        sbs[36] = sbs[45],
        sbs[43] = sbs[16],
        sbs[44] = sbs[17],
        sbs[45] = sbs[18],
        sbs[16] = s[1],
        sbs[17] = s[2],
        sbs[18] = s[3],
        s[1] = sbs[1],
        s[2] = sbs[2],
        sbs[1] = sbs[7],
        sbs[2] = sbs[4],
        sbs[7] = sbs[9],
        sbs[4] = sbs[8],
        sbs[9] = sbs[3],
        sbs[8] = sbs[6],
        sbs[3] = s[1],
        sbs[6] = s[2],
        s[1] = sbs[46],
        s[2] = sbs[47],
        sbs[46] = sbs[48],
        sbs[47] = sbs[51],
        sbs[48] = sbs[54],
        sbs[51] = sbs[53],
        sbs[54] = sbs[52],
        sbs[53] = sbs[49],
        sbs[52] = s[1],
        sbs[49] = s[2]
}
function sbsuu() {
    sbsbor(),
        sbsbor(),
        sbsrot(),
        sbsbor(),
        sbsbor()
}
function sbsui() {
    sbsbor(),
        sbsbor(),
        sbsroti(),
        sbsbor(),
        sbsbor()
}
function sbsff() {
    sbsbor(),
        sbsrot(),
        sbsbor(),
        sbsbor(),
        sbsbor()
}
function sbsfi() {
    sbsbor(),
        sbsroti(),
        sbsbor(),
        sbsbor(),
        sbsbor()
}
function sbsrr() {
    sbsfd(),
        sbsbor(),
        sbsrot(),
        sbsbor(),
        sbsbor(),
        sbsbor(),
        sbsfd(),
        sbsfd(),
        sbsfd()
}
function sbsri() {
    sbsfd(),
        sbsbor(),
        sbsroti(),
        sbsbor(),
        sbsbor(),
        sbsbor(),
        sbsfd(),
        sbsfd(),
        sbsfd()
}
function sbsll() {
    sbsfd(),
        sbsfd(),
        sbsfd(),
        sbsbor(),
        sbsrot(),
        sbsbor(),
        sbsbor(),
        sbsbor(),
        sbsfd()
}
function sbsli() {
    sbsfd(),
        sbsfd(),
        sbsfd(),
        sbsbor(),
        sbsroti(),
        sbsbor(),
        sbsbor(),
        sbsbor(),
        sbsfd()
}
function sbsdd() {
    sbsrot()
}
function sbsdi() {
    sbsroti()
}
function sbsbb() {
    sbsbor(),
        sbsbor(),
        sbsbor(),
        sbsrot(),
        sbsbor(),
        stp++,
        step[stp] = 9
}
function sbsbi() {
    sbsbor(),
        sbsbor(),
        sbsbor(),
        sbsroti(),
        sbsbor(),
        stp++,
        step[stp] = 10
}
"object" == typeof Cube || (window.Cube = {
    worker: new Worker("/RubikWorker.js"),
    tablesGenerated: !1,
    movesetToArray: function (e) {
        for (var s = e.split(" "), t = [], i = 0; i < s.length; i++)
            t.push(new Cube.move(s[i]));
        return t
    },
    move: function (e) {
        this.face = e.substring(0, 1) || "U";
        e = e.substring(1, 2);
        "" == e ? (this.move = 1,
            this.direction = 1) : "'" == e ? (this.move = 1,
                this.direction = -1) : "2" == e ? (this.move = 2,
                    this.direction = 0) : (this.move = 1,
                        this.direction = 1)
    },
    colors: ["U", "R", "F", "D", "L", "B"],
    facelets: ["U1", "U2", "U3", "U4", "U5", "U6", "U7", "U8", "U9", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9"],
    corners: ["URF", "UFL", "ULB", "URB", "RFD", "FDL", "DLB", "RDB"],
    edges: ["UR", "UF", "UL", "UB", "RD", "FD", "DL", "DB", "RF", "FL", "LB", "RB"],
    colorIndexes: {
        U: 0,
        R: 1,
        F: 2,
        D: 3,
        L: 4,
        B: 5
    },
    cubeToArr: function (e) {
        for (var s = [], t = 0; t < 6; t++) {
            s[t] = [];
            for (var i = 0; i < 3; i++) {
                s[t][i] = [];
                for (var a = 0; a < 3; a++)
                    s[t][i][a] = e.charAt(9 * t + 3 * i + a)
            }
        }
        return s
    },
    arrToCube: function (e) {
        for (var s = "", t = 0; t < 6; t++)
            for (var i = 0; i < 3; i++)
                for (var a = 0; a < 3; a++)
                    s += e[t][i][a];
        return s
    },
    getAdjacentFacelets: function (e, s, t) {
        for (var i = Cube.faceletToCubelet[e][s][t], a = [], n = 0; n < 6; n++)
            for (var o = 0; o < 3; o++)
                for (var r = 0; r < 3; r++)
                    n == e && o == s && r == t || Cube.faceletToCubelet[n][o][r] != i || a.push([n, o, r]);
        return a
    },
    faceletToCubelet: [[[0, 1, 2], [3, 4, 5], [6, 7, 8]], [[8, 5, 2], [17, 14, 11], [26, 23, 20]], [[6, 7, 8], [15, 16, 17], [24, 25, 26]], [[24, 25, 26], [21, 22, 23], [18, 19, 20]], [[0, 3, 6], [9, 12, 15], [18, 21, 24]], [[2, 1, 0], [11, 10, 9], [20, 19, 18]]],
    orderColors: function () {
        return Array.prototype.slice.call(arguments).sort(function (e, s) {
            return Cube.colorIndexes[e] < Cube.colorIndexes[s] ? -1 : Cube.colorIndexes[e] > Cube.colorIndexes[s] ? 1 : 0
        }).join("")
    },
    autocompleteCube: function (e) {
        return Cube.arrToCube(Cube.autocompleteArray(Cube.cubeToArr(e)))
    },
    autocompleteArray: function (e) {
        for (var s, t = e.slice(); s = t.slice(),
            t = Cube.autocompleteEdge(t),
            Cube.arrToCube(t) != Cube.arrToCube(s);)
            ;
        for (; s = t.slice(),
            t = Cube.autocompleteCorner(t),
            Cube.arrToCube(t) != Cube.arrToCube(s);)
            ;
        return t
    },
    autocompleteEdge: function (e) {
        for (var s = e.slice(), t = [], i = 0; i < 6; i++)
            for (var a = 0; a < 3; a++)
                for (var n = 1 - a % 2; n < 3; n += 2)
                    "_" != (o = s[i][a][n]) && "_" != (c = s[(r = Cube.getAdjacentFacelets(i, a, n)[0])[0]][r[1]][r[2]]) && (l = Cube.orderColors(o, c),
                        -1 == t.indexOf(l) && t.push(l));
        for (i = 0; i < 6; i++)
            for (a = 0; a < 3; a++)
                for (var o, n = 1 - a % 2; n < 3; n += 2)
                    if ("_" == (o = s[i][a][n])) {
                        var r, c = s[(r = Cube.getAdjacentFacelets(i, a, n)[0])[0]][r[1]][r[2]], l = Cube.orderColors(o, c);
                        if ("_" != c) {
                            for (var d = [], u = 0; u < Cube.colors.length; u++) {
                                var b = Cube.colors[u]
                                    , l = Cube.orderColors(c, b);
                                -1 != Cube.edges.indexOf(l) && -1 == t.indexOf(l) && d.push(b)
                            }
                            1 == d.length && (s[i][a][n] = d[0])
                        }
                    }
        return s
    },
    autocompleteCorner: function (e) {
        for (var s = e.slice(), t = [], i = 0; i < 6; i++)
            for (var a = 0; a < 3; a += 2)
                for (var n = 0; n < 3; n += 2)
                    "_" != (o = s[i][a][n]) && (c = s[(r = Cube.getAdjacentFacelets(i, a, n))[0][0]][r[0][1]][r[0][2]],
                        l = s[r[1][0]][r[1][1]][r[1][2]],
                        "_" != c && "_" != l && (d = Cube.orderColors(o, c, l),
                            -1 == t.indexOf(d) && t.push(d)));
        for (i = 0; i < 6; i++)
            for (a = 0; a < 3; a += 2)
                for (var o, n = 0; n < 3; n += 2)
                    if ("_" == (o = s[i][a][n])) {
                        var r, c = s[(r = Cube.getAdjacentFacelets(i, a, n))[0][0]][r[0][1]][r[0][2]], l = s[r[1][0]][r[1][1]][r[1][2]], d = Cube.orderColors(o, c, l);
                        if ("_" != c && "_" != l) {
                            for (var u = [], b = 0; b < Cube.colors.length; b++) {
                                var f = Cube.colors[b]
                                    , d = Cube.orderColors(c, l, f);
                                -1 != Cube.corners.indexOf(d) && -1 == t.indexOf(d) && u.push(f)
                            }
                            1 == u.length && (s[i][a][n] = u[0])
                        }
                    }
        return s
    },
    reverseArray: function (e) {
        for (var s = Cube.movesetToArray(Cube.arrayToMoveset(e)).reverse(), t = 0; t < s.length; t++)
            s[t].direction = -1 * s[t].direction;
        return s
    },
    arrayToMoveset: function (e, s) {
        for (var t = "", i = 0; i < e.length; i++)
            t += e[i].text,
                i != e.length - 1 && (t += s ? "_" : " ");
        return t
    },
    validateMoveset: function (e) {
        return !!e.match(/^([ULFRBD](['2]|))( ([ULFRBD](['2]|)))*$/)
    },
    reverseMoveset: function (e) {
        return Cube.arrayToMoveset(Cube.reverseArray(Cube.movesetToArray(e)))
    },
    randomCube: function (s) {
        var t = function (e) {
            "random" == e.data.type && (s(e.data.result),
                Cube.worker.removeEventListener("message", t, !1))
        };
        Cube.worker.addEventListener("message", t, !1),
            Cube.worker.postMessage({
                type: "random"
            })
    },
    verifyCube: function (s, t) {
        var i = function (e) {
            "verify" == e.data.type && e.data.cube == s && (t(Math.abs(e.data.result)),
                Cube.worker.removeEventListener("message", i, !1))
        };
        Cube.worker.addEventListener("message", i, !1),
            Cube.worker.postMessage({
                type: "verify",
                cube: s
            })
    },
    solveCube: function (s, t, e, i, a, n, o) {
        if (!Cube.tablesGenerated)
            throw new Error("First the tables need to be generated!");
        var r = function (e) {
            "solution" == e.data.type && e.data.cube == s && (0 == e.data.result.indexOf("Error") && errorCallback ? errorCallback(parseInt(e.data.result.substring(6, 7))) : (e = e.data.result.substring(0, e.data.result.length - 1),
                t(i ? Cube.movesetToArray(e) : e)),
                Cube.worker.removeEventListener("message", r, !1))
        };
        Cube.worker.addEventListener("message", r, !1);
        o = {
            cube: s,
            maxDepth: a || 20,
            maxTime: n || 30,
            useSeparator: !!o,
            type: "solve"
        };
        Cube.worker.postMessage(o)
    },
    generateTables: function (s, t) {
        var i = function (e) {
            "progress" == e.data.type && t ? t(e.data.line, e.data.time) : "CoordCube" == e.data.type && (s(),
                Cube.tablesGenerated = !0,
                Cube.worker.removeEventListener("message", i, !1))
        };
        Cube.worker.addEventListener("message", i, !1),
            Cube.worker.postMessage({
                type: "generateTables"
            })
    }
},
    Object.defineProperty(Cube.move.prototype, "text", {
        get: function () {
            var e = this.face;
            return -1 == this.direction ? e += "'" : 2 == this.move && (e += "2"),
                e
        },
        set: function (e) {
            var s = e.substring(0, 1)
                , t = e.substring(1, 2)
                , e = 0;
            "" == t ? e = t = 1 : "'" == t ? e = -(t = 1) : "2" == t && (t = 2,
                e = 0),
                this.face = s,
                this.move = t,
                this.direction = e
        }
    }),
    Object.defineProperty(Cube.move.prototype, "toString", {
        value: function () {
            return this.text
        }
    }));
var generateColorsString = function () {
    return "FFFF00FFFFFFFF0000FF80400000FF00FF00"
};
function getQueryString(e) {
    for (var s = {}, t = e.split("&"), i = 0; i < t.length; i++) {
        var a = t[i].split("=")
            , n = a.shift()
            , a = !(a = a.join("=")) || ("true" == a.toLowerCase() || "false" != a.toLowerCase() && unescape(a).replace(/\+/g, " "));
        s[n] = a
    }
    return s
}
var maxtime = 30
    , maxmoves = 20
    , worker = new Worker("/RubikWorker.js");
function typedToArray(e) {
    for (var s = [], t = 0; t < e.length; t++)
        s.push(t);
    return s
}
var totalTime = 0
    , facelets = ["U1", "U2", "U3", "U4", "U5", "U6", "U7", "U8", "U9", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9"]
    , colors = ["U", "L", "F", "R", "B", "D"]
    , colorNames = {
        U: "#FFFF0F",
        R: "#1D16DB",
        F: "#F7A000",
        L: "#299E05",
        D: "#FFFFFF",
        B: "#EB0000",
        _: "#BBBBBB"
    }
    , times = {
        twistMove: 257,
        flipMove: 220,
        FRtoBR_Move: 1645,
        URFtoDLF_Move: 3189,
        URtoDF_Move: 2904,
        URtoUL_Move: 173,
        UBtoDF_Move: 185,
        MergeURtoULandUBtoDF: 2803,
        Slice_URFtoDLF_Parity_Prun: 3022,
        Slice_URtoDF_Parity_Prun: 2828,
        Slice_Twist_Prun: 2714,
        Slice_Flip_Prun: 2544
    };
function buildOutput(e) {
    var s = document.getElementById("solution");
    if (s) {
        s.moveset = e,
            s.innerHTML = "";
        for (var t = 0; t < e.length; t++) {
            var i = document.createElement("span");
            i.innerHTML = e[t].text,
                i.move = e[t],
                i.className = 0 == t ? "current move" : "move",
                s.appendChild(i),
                e[t].el = i
        }
        stp = e.length;
        for (t = 0; t < e.length; t++)
            "U" == e[t].text && (step[t + 1] = 1),
                "U'" == e[t].text && (step[t + 1] = 2),
                "L" == e[t].text && (step[t + 1] = 3),
                "L'" == e[t].text && (step[t + 1] = 4),
                "F" == e[t].text && (step[t + 1] = 5),
                "F'" == e[t].text && (step[t + 1] = 6),
                "R" == e[t].text && (step[t + 1] = 7),
                "R'" == e[t].text && (step[t + 1] = 8),
                "B" == e[t].text && (step[t + 1] = 9),
                "B'" == e[t].text && (step[t + 1] = 10),
                "D" == e[t].text && (step[t + 1] = 11),
                "D'" == e[t].text && (step[t + 1] = 12),
                "U2" == e[t].text && (step[t + 1] = 13),
                "L2" == e[t].text && (step[t + 1] = 14),
                "F2" == e[t].text && (step[t + 1] = 15),
                "R2" == e[t].text && (step[t + 1] = 16),
                "B2" == e[t].text && (step[t + 1] = 17),
                "D2" == e[t].text && (step[t + 1] = 18);
        kiirarrayt(),
            eddigkiir(0),
            $("#pleasewait").hide()
    }
}
worker.addEventListener("message", function (e) {
    if ("message" == e.data.type)
        warning(" ", e.data.msg),
            console.log(e.data.msg);
    else if ("CoordCube" == e.data.type) {
        document.getElementById("bar").outerHTML = "Done in " + totalTime + "ms",
            document.getElementById("solve").disabled = !1,
            worker.postMessage({
                type: "solve",
                cube: document.getElementById("cube").value,
                maxDepth: megprobalKirakniEnnyiLepesben,
                maxTime: 30
            }),
            megprobalKirakniEnnyiLepesben = 24;
        var s, t = e.data.cc;
        for (s in t)
            0 == s.indexOf("Slice") && (t[s] = typedToArray(t[s]))
    } else if ("verify" == e.data.type)
        if (0 == e.data.result)
            console.log("Valid cube.");
        else {
            switch (e.data.result) {
                case -1:
                    a = "Each color must be added exactly 9 times";
                    break;
                case -2:
                    a = "Every edge must be added once";
                    break;
                case -3:
                    a = "An edge needs to be flipped";
                    break;
                case -4:
                    a = "Every corner must be added once";
                    break;
                case -5:
                    a = "A corner needs to be twisted";
                    break;
                case -6:
                    a = "Two corners or two edges need to be swapped";
                    break;
                default:
                    a = "Unknown error"
            }
            console.log("Invalid cube! " + e.data.result + ": " + a + ". "),
                warning("Invalid cube", e.data.result + ": " + a + ". <br />Close this window and check the cube!")
        }
    else if ("random" == e.data.type)
        document.getElementById("cube").value = e.data.result,
            setInput.apply(document.getElementById("cube"));
    else if ("progress" == e.data.type) {
        var i = document.createElement("li");
        totalTime += e.data.time,
            i.innerHTML = e.data.line + " Completed, Took " + e.data.time + "ms",
            document.getElementById("details").appendChild(i),
            document.getElementById("bar").value += times[e.data.line]
    } else if ("solution" == e.data.type)
        if (0 == e.data.result.indexOf("Error")) {
            var a, i = parseInt(e.data.result.substring(6, 7));
            switch (i) {
                case 1:
                    a = "Each color must be added exactly 9 times";
                    break;
                case 2:
                    a = "Every edge must be added once";
                    break;
                case 3:
                    a = "An edge needs to be flipped";
                    break;
                case 4:
                    a = "Every corner must be added once";
                    break;
                case 5:
                    a = "A corner needs to be twisted";
                    break;
                case 6:
                    a = "Two corners or two edges need to be swapped";
                    break;
                case 7:
                    a = "Couldn't find a solution in " + maxmoves + " moves";
                    break;
                case 8:
                    a = "No solution found within " + maxtime + " seconds";
                    break;
                default:
                    a = "Unknown error"
            }
            console.log((i < 7 ? "Invalid Cube. " : "Solver ") + "  " + a + "."),
                i < 7 && (warning("Invalid Cube", a + ". <br />Close this window and check the&nbsp;cube!"),
                    updateCube()),
                6 < i && (70 != megprobalKirakniEnnyiLepesben ? (worker.postMessage({
                    type: "solve",
                    cube: document.getElementById("cube").value,
                    maxDepth: megprobalKirakniEnnyiLepesben,
                    maxTime: 60
                }),
                    megprobalKirakniEnnyiLepesben = 70) : warning("This is unusual...", "Sorry but I couldn't find the optimal solution in 2 minutes.<br />Please make a few random moves on your cube and retry to solve it or use another computer."))
        } else
            buildOutput(Cube.movesetToArray(e.data.result)),
                pushState()
}, !1),
    worker.addEventListener("error", function (e) {
        warning("Error", e),
            e.preventDefault()
    }, !1);
var currentColor = "F";
function makeQueryString(e, s, t) {
    var i, a = t ? "?" : "", n = !1;
    for (i in e)
        e.hasOwnProperty(i) && (s && 0 == e[i] || (n = !0,
            a += encodeURIComponent(i) + "=" + encodeURIComponent(e[i]) + "&"));
    return n ? a.substring(0, a.length - 1) : ""
}
function popState(e) {
    var s = e.state;
    s && (e = document.getElementById("cube"),
        s.cube && ("clean" == s.cube ? cleanCube(!0) : "clear" == s.cube ? clearFacelets(!0) : "random" == s.cube ? worker.postMessage({
            type: "random"
        }) : 54 == s.cube.length && (e.value = s.cube,
            setInput.apply(e))),
        s.solution && (s = s.solution.replace(/_/g, " "),
            Cube.validateMoveset(s) && buildOutput(Cube.movesetToArray(s))))
}
function pushState() { }
window.addEventListener("popstate", popState, !1);
var isRandom = !1;
function setCubeText() {
    isRandom = !1;
    for (var e = "", s = document.getElementById("cube"), t = 0; t < facelets.length; t++) {
        if ("" == document.getElementById(facelets[t]).color)
            return void (s.value = "");
        e += document.getElementById(facelets[t]).color
    }
    1 == document.getElementById("autocomplete").checked ? (e = Cube.autocompleteCube(e),
        s.value = e,
        setInput()) : s.value = e,
        pushState()
}
function setInput() {
    isRandom = !1;
    var e = document.getElementById("cube");
    if (54 == e.value.length)
        for (var s = e.value.split(""), t = 0; t < 54; t++) {
            var i = facelets[t]
                , i = document.getElementById(i);
            i.color = s[t],
                i.style.backgroundColor = colorNames[s[t]]
        }
}
function clearFacelets(e) {
    isRandom = !1,
        document.getElementById("cube").value = "____U________R________F________D________L________B____";
    for (var s = 0; s < facelets.length; s++) {
        var t = document.getElementById(facelets[s]);
        t.classList.contains("center") || (t.color = "_",
            t.style.backgroundColor = colorNames._)
    }
    !0 !== e && pushState()
}
function cleanCube(e) {
    isRandom = !1;
    for (var s = 0; s < facelets.length; s++) {
        var t = document.getElementById(facelets[s]);
        t.classList.contains("center") || (t.color = facelets[s].substring(0, 1),
            t.style.backgroundColor = colorNames[t.color])
    }
    document.getElementById("cube").value = "UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB",
        !0 !== e && pushState()
}
function setColor() {
    this.classList.contains("center") ? (currentColor = this.color,
        document.getElementById("currentColor").color = currentColor,
        document.getElementById("currentColor").style.backgroundColor = colorNames[currentColor]) : (this.color = currentColor,
            this.style.backgroundColor = colorNames[currentColor],
            setCubeText())
}
function calculateChanges(e) {
    var s, t, i, a, n = {
        from: [],
        to: []
    }, o = e.direction;
    "U" == e.face ? (s = "y",
        t = "x",
        i = "z",
        a = 2) : "R" == e.face ? (s = "x",
            t = "z",
            i = "y",
            a = 2,
            o *= -1) : "F" == e.face ? (s = "z",
                t = "x",
                i = "y",
                a = 0) : "D" == e.face ? (s = "y",
                    t = "z",
                    i = "x",
                    a = 0,
                    o *= -1) : "L" == e.face ? (s = "x",
                        t = "y",
                        i = "z",
                        a = 0) : "B" == e.face && (s = "z",
                            t = "y",
                            i = "x",
                            a = 2,
                            o *= -1);
    for (var r = {
        x: [2, 5, 3, 4],
        y: [1, 5, 0, 4],
        z: [0, 2, 1, 3]
    }[s], c = 2 - o, l = n.faceMoves = [0, 1, 2, 3, 4, 5], d = 0; d < c; d++)
        for (var u = l.slice(), b = 0; b < 4; b++)
            l[r[b]] = u[r[(b + 1) % 4]];
    for (d = 0; d < 9; d++) {
        var f = {}
            , p = {};
        f[s] = a,
            f[t] = d % 3,
            f[i] = d / 3 | 0,
            n.from.push(f),
            p[s] = a,
            0 == e.direction ? (p[t] = 2 - d % 3,
                p[i] = 2 - (d / 3 | 0)) : 1 == e.direction ? (p[t] = d / 3 | 0,
                    p[i] = 2 - d % 3) : -1 == e.direction && (p[t] = 2 - (d / 3 | 0),
                        p[i] = d % 3),
            n.to.push(p)
    }
    return n
}
function setColorNames() {
    localStorage.colorNames = JSON.stringify(colorNames)
}
function getColorNames() {
    for (var e in colorNames = localStorage.colorNames ? JSON.parse(localStorage.colorNames) : {
        U: "#FFFF00",
        R: "#008000",
        F: "#FF0000",
        L: "#0000FF",
        D: "#FFFFFF",
        B: "#FFA500",
        _: "#808080"
    }) {
        var s, t = document.getElementById(e + "Color");
        t && (t.value = colorNames[e],
            (s = document.createEvent("HTMLEvents")).initEvent("input", !0, !0),
            t.dispatchEvent(s))
    }
}
function resetColorNames() {
    localStorage.colorNames = "",
        getColorNames(),
        setInput.apply(document.getElementById("cube"))
}
function setColors(e) {
    colorNames[this.getAttribute("data-side")] = this.value,
        setInput.apply(document.getElementById("cube")),
        setColorNames()
}
function setColorBlank() {
    currentColor = "_",
        document.getElementById("currentColor").color = currentColor,
        document.getElementById("currentColor").style.backgroundColor = colorNames[currentColor]
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generateButton").addEventListener("click", function () {
        worker.postMessage({
            type: "generateTables"
        }),
            document.getElementById("progress").hidden = !1,
            document.getElementById("generate").hidden = !0
    }, !1),
        document.getElementById("randomButton").addEventListener("click", function () {
            worker.postMessage({
                type: "random"
            }),
                isRandom = !0,
                pushState()
        }, !1),
        document.getElementById("maxmoves").addEventListener("input", function () {
            maxmoves = this.valueAsNumber
        }, !1),
        document.getElementById("maxtime").addEventListener("input", function () {
            maxtime = this.valueAsNumber
        }, !1),
        document.getElementById("verify").addEventListener("click", function () {
            worker.postMessage({
                type: "verify",
                cube: document.getElementById("cube").value
            })
        }, !1),
        document.getElementById("solve").addEventListener("click", function () {
            worker.postMessage({
                type: "solve",
                cube: document.getElementById("cube").value,
                maxDepth: maxmoves,
                maxTime: maxtime
            })
        }, !1);
    for (var e = document.getElementsByClassName("colorInput"), s = 0; s < e.length; s++)
        e[s].addEventListener("change", setColors, !1);
    document.getElementById("cube").addEventListener("input", setInput, !1),
        document.getElementById("clear").addEventListener("click", clearFacelets, !1),
        document.getElementById("clean").addEventListener("click", cleanCube, !1);
    for (var t = document.getElementById("entry"), s = 0; s < colors.length; s++)
        (i = document.createElement("div")).className = "side",
            i.id = colors[s],
            t.appendChild(i);
    for (s = 0; s < facelets.length; s++) {
        var i = document.createElement("div");
        "5" == facelets[s].substring(1, 2) ? i.className = "facelet center" : (parseInt(facelets[s].substring(1, 2)) - 1) % 3 == 0 && "9" != facelets[s].substring(1, 2) ? i.className = "facelet right" : i.className = "facelet",
            i.id = facelets[s],
            i.color = facelets[s].substring(0, 1),
            i.style.backgroundColor = colorNames[i.color],
            i.addEventListener("click", setColor, !1),
            document.getElementById(facelets[s].substring(0, 1)).appendChild(i)
    }
    document.getElementById("currentColor").addEventListener("click", setColorBlank, !1),
        "" != window.location.search ? popState({
            state: getQueryString(window.location.search.substring(1))
        }) : popState({
            state: {
                cube: "clear"
            }
        }),
        document.getElementById("currentColor").style.backgroundColor = colorNames[currentColor]
}, !1),
    function (a) {
        "use strict";
        a(document).ready(function () {
            var t, e, i = document.querySelector(".back2topScroll path");
            i && (t = i.getTotalLength(),
                i.style.transition = i.style.WebkitTransition = "none",
                i.style.strokeDasharray = t + " " + t,
                i.style.strokeDashoffset = t,
                i.getBoundingClientRect(),
                i.style.transition = i.style.WebkitTransition = "stroke-dashoffset 10ms linear",
                (e = function () {
                    var e = a(window).scrollTop()
                        , s = a(document).height() - a(window).height()
                        , s = t - e * t / s;
                    i.style.strokeDashoffset = s
                }
                )(),
                a(window).scroll(e),
                jQuery(window).on("scroll", function () {
                    50 < jQuery(this).scrollTop() ? jQuery(".back2topScroll").addClass("showProgress") : jQuery(".back2topScroll").removeClass("showProgress")
                }),
                jQuery(".back2topScroll").on("click", function (e) {
                    return e.preventDefault(),
                        jQuery("html, body").animate({
                            scrollTop: 0
                        }, 550),
                        !1
                }))
        })
    }(jQuery);
!function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
    "use strict";
    function i(i, r, a) {
        function h(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function (t, h) {
                var u = a.data(h, i);
                if (!u)
                    return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var d = u[e];
                if (!d || "_" == e.charAt(0))
                    return void s(r + " is not a valid method");
                var l = d.apply(u, n);
                o = void 0 === o ? l : o
            }),
                void 0 !== o ? o : t
        }
        function u(t, e) {
            t.each(function (t, n) {
                var o = a.data(n, i);
                o ? (o.option(e),
                    o._init()) : (o = new r(n, e),
                        a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery,
            a && (r.prototype.option || (r.prototype.option = function (t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }
            ),
                a.fn[i] = function (t) {
                    if ("string" == typeof t) {
                        var e = o.call(arguments, 1);
                        return h(this, t, e)
                    }
                    return u(this, t),
                        this
                }
                ,
                n(a))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice
        , r = t.console
        , s = "undefined" == typeof r ? function () { }
            : function (t) {
                r.error(t)
            }
        ;
    return n(e || t.jQuery),
        i
}),
    function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function () {
        function t() { }
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var i = this._events = this._events || {}
                    , n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e),
                    this
            }
        }
            ,
            e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = this._onceEvents = this._onceEvents || {}
                        , n = i[t] = i[t] || {};
                    return n[e] = !0,
                        this
                }
            }
            ,
            e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = i.indexOf(e);
                    return -1 != n && i.splice(n, 1),
                        this
                }
            }
            ,
            e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = 0
                        , o = i[n];
                    e = e || [];
                    for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                        var s = r && r[o];
                        s && (this.off(t, o),
                            delete r[o]),
                            o.apply(this, e),
                            n += s ? 0 : 1,
                            o = i[n]
                    }
                    return this
                }
            }
            ,
            t
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t)
                , i = -1 == t.indexOf("%") && !isNaN(e);
            return i && e
        }
        function e() { }
        function i() {
            for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; u > e; e++) {
                var i = h[e];
                t[i] = 0
            }
            return t
        }
        function n(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
                e
        }
        function o() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                e.style.width = "200px",
                    e.style.padding = "1px 2px 3px 4px",
                    e.style.borderStyle = "solid",
                    e.style.borderWidth = "1px 2px 3px 4px",
                    e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                r.isBoxSizeOuter = s = 200 == t(o.width),
                    i.removeChild(e)
            }
        }
        function r(e) {
            if (o(),
                "string" == typeof e && (e = document.querySelector(e)),
                e && "object" == typeof e && e.nodeType) {
                var r = n(e);
                if ("none" == r.display)
                    return i();
                var a = {};
                a.width = e.offsetWidth,
                    a.height = e.offsetHeight;
                for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
                    var c = h[l]
                        , f = r[c]
                        , m = parseFloat(f);
                    a[c] = isNaN(m) ? 0 : m
                }
                var p = a.paddingLeft + a.paddingRight
                    , g = a.paddingTop + a.paddingBottom
                    , y = a.marginLeft + a.marginRight
                    , v = a.marginTop + a.marginBottom
                    , _ = a.borderLeftWidth + a.borderRightWidth
                    , z = a.borderTopWidth + a.borderBottomWidth
                    , E = d && s
                    , b = t(r.width);
                b !== !1 && (a.width = b + (E ? 0 : p + _));
                var x = t(r.height);
                return x !== !1 && (a.height = x + (E ? 0 : g + z)),
                    a.innerWidth = a.width - (p + _),
                    a.innerHeight = a.height - (g + z),
                    a.outerWidth = a.width + y,
                    a.outerHeight = a.height + v,
                    a
            }
        }
        var s, a = "undefined" == typeof console ? e : function (t) {
            console.error(t)
        }
            , h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], u = h.length, d = !1;
        return r
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function () {
        "use strict";
        var t = function () {
            var t = window.Element.prototype;
            if (t.matches)
                return "matches";
            if (t.matchesSelector)
                return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i]
                    , o = n + "MatchesSelector";
                if (t[o])
                    return o
            }
        }();
        return function (e, i) {
            return e[t](i)
        }
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function (t, e) {
        var i = {};
        i.extend = function (t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        }
            ,
            i.modulo = function (t, e) {
                return (t % e + e) % e
            }
            ,
            i.makeArray = function (t) {
                var e = [];
                if (Array.isArray(t))
                    e = t;
                else if (t && "object" == typeof t && "number" == typeof t.length)
                    for (var i = 0; i < t.length; i++)
                        e.push(t[i]);
                else
                    e.push(t);
                return e
            }
            ,
            i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                -1 != i && t.splice(i, 1)
            }
            ,
            i.getParent = function (t, i) {
                for (; t != document.body;)
                    if (t = t.parentNode,
                        e(t, i))
                        return t
            }
            ,
            i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t
            }
            ,
            i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }
            ,
            i.filterFindElements = function (t, n) {
                t = i.makeArray(t);
                var o = [];
                return t.forEach(function (t) {
                    if (t instanceof HTMLElement) {
                        if (!n)
                            return void o.push(t);
                        e(t, n) && o.push(t);
                        for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                            o.push(i[r])
                    }
                }),
                    o
            }
            ,
            i.debounceMethod = function (t, e, i) {
                var n = t.prototype[e]
                    , o = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[o];
                    t && clearTimeout(t);
                    var e = arguments
                        , r = this;
                    this[o] = setTimeout(function () {
                        n.apply(r, e),
                            delete r[o]
                    }, i || 100)
                }
            }
            ,
            i.docReady = function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
            }
            ,
            i.toDashed = function (t) {
                return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                    return e + "-" + i
                }).toLowerCase()
            }
            ;
        var n = t.console;
        return i.htmlInit = function (e, o) {
            i.docReady(function () {
                var r = i.toDashed(o)
                    , s = "data-" + r
                    , a = document.querySelectorAll("[" + s + "]")
                    , h = document.querySelectorAll(".js-" + r)
                    , u = i.makeArray(a).concat(i.makeArray(h))
                    , d = s + "-options"
                    , l = t.jQuery;
                u.forEach(function (t) {
                    var i, r = t.getAttribute(s) || t.getAttribute(d);
                    try {
                        i = r && JSON.parse(r)
                    } catch (a) {
                        return void (n && n.error("Error parsing " + s + " on " + t.className + ": " + a))
                    }
                    var h = new e(t, i);
                    l && l.data(t, o, h)
                })
            })
        }
            ,
            i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
            t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function (t, e) {
        "use strict";
        function i(t) {
            for (var e in t)
                return !1;
            return e = null,
                !0
        }
        function n(t, e) {
            t && (this.element = t,
                this.layout = e,
                this.position = {
                    x: 0,
                    y: 0
                },
                this._create())
        }
        function o(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }
        var r = document.documentElement.style
            , s = "string" == typeof r.transition ? "transition" : "WebkitTransition"
            , a = "string" == typeof r.transform ? "transform" : "WebkitTransform"
            , h = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[s]
            , u = {
                transform: a,
                transition: s,
                transitionDuration: s + "Duration",
                transitionProperty: s + "Property",
                transitionDelay: s + "Delay"
            }
            , d = n.prototype = Object.create(t.prototype);
        d.constructor = n,
            d._create = function () {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                },
                    this.css({
                        position: "absolute"
                    })
            }
            ,
            d.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }
            ,
            d.getSize = function () {
                this.size = e(this.element)
            }
            ,
            d.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    var n = u[i] || i;
                    e[n] = t[i]
                }
            }
            ,
            d.getPosition = function () {
                var t = getComputedStyle(this.element)
                    , e = this.layout._getOption("originLeft")
                    , i = this.layout._getOption("originTop")
                    , n = t[e ? "left" : "right"]
                    , o = t[i ? "top" : "bottom"]
                    , r = this.layout.size
                    , s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10)
                    , a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
                s = isNaN(s) ? 0 : s,
                    a = isNaN(a) ? 0 : a,
                    s -= e ? r.paddingLeft : r.paddingRight,
                    a -= i ? r.paddingTop : r.paddingBottom,
                    this.position.x = s,
                    this.position.y = a
            }
            ,
            d.layoutPosition = function () {
                var t = this.layout.size
                    , e = {}
                    , i = this.layout._getOption("originLeft")
                    , n = this.layout._getOption("originTop")
                    , o = i ? "paddingLeft" : "paddingRight"
                    , r = i ? "left" : "right"
                    , s = i ? "right" : "left"
                    , a = this.position.x + t[o];
                e[r] = this.getXValue(a),
                    e[s] = "";
                var h = n ? "paddingTop" : "paddingBottom"
                    , u = n ? "top" : "bottom"
                    , d = n ? "bottom" : "top"
                    , l = this.position.y + t[h];
                e[u] = this.getYValue(l),
                    e[d] = "",
                    this.css(e),
                    this.emitEvent("layout", [this])
            }
            ,
            d.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
            }
            ,
            d.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
            }
            ,
            d._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x
                    , n = this.position.y
                    , o = parseInt(t, 10)
                    , r = parseInt(e, 10)
                    , s = o === this.position.x && r === this.position.y;
                if (this.setPosition(t, e),
                    s && !this.isTransitioning)
                    return void this.layoutPosition();
                var a = t - i
                    , h = e - n
                    , u = {};
                u.transform = this.getTranslate(a, h),
                    this.transition({
                        to: u,
                        onTransitionEnd: {
                            transform: this.layoutPosition
                        },
                        isCleaning: !0
                    })
            }
            ,
            d.getTranslate = function (t, e) {
                var i = this.layout._getOption("originLeft")
                    , n = this.layout._getOption("originTop");
                return t = i ? t : -t,
                    e = n ? e : -e,
                    "translate3d(" + t + "px, " + e + "px, 0)"
            }
            ,
            d.goTo = function (t, e) {
                this.setPosition(t, e),
                    this.layoutPosition()
            }
            ,
            d.moveTo = d._transitionTo,
            d.setPosition = function (t, e) {
                this.position.x = parseInt(t, 10),
                    this.position.y = parseInt(e, 10)
            }
            ,
            d._nonTransition = function (t) {
                this.css(t.to),
                    t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd)
                    t.onTransitionEnd[e].call(this)
            }
            ,
            d.transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration))
                    return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd)
                    e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to)
                    e.ingProperties[i] = !0,
                        t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var n = this.element.offsetHeight;
                    n = null
                }
                this.enableTransition(t.to),
                    this.css(t.to),
                    this.isTransitioning = !0
            }
            ;
        var l = "opacity," + o(a);
        d.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t,
                    this.css({
                        transitionProperty: l,
                        transitionDuration: t,
                        transitionDelay: this.staggerDelay || 0
                    }),
                    this.element.addEventListener(h, this, !1)
            }
        }
            ,
            d.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t)
            }
            ,
            d.onotransitionend = function (t) {
                this.ontransitionend(t)
            }
            ;
        var c = {
            "-webkit-transform": "transform"
        };
        d.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn
                    , n = c[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n],
                    i(e.ingProperties) && this.disableTransition(),
                    n in e.clean && (this.element.style[t.propertyName] = "",
                        delete e.clean[n]),
                    n in e.onEnd) {
                    var o = e.onEnd[n];
                    o.call(this),
                        delete e.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }
            ,
            d.disableTransition = function () {
                this.removeTransitionStyles(),
                    this.element.removeEventListener(h, this, !1),
                    this.isTransitioning = !1
            }
            ,
            d._removeStyles = function (t) {
                var e = {};
                for (var i in t)
                    e[i] = "";
                this.css(e)
            }
            ;
        var f = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return d.removeTransitionStyles = function () {
            this.css(f)
        }
            ,
            d.stagger = function (t) {
                t = isNaN(t) ? 0 : t,
                    this.staggerDelay = t + "ms"
            }
            ,
            d.removeElem = function () {
                this.element.parentNode.removeChild(this.element),
                    this.css({
                        display: ""
                    }),
                    this.emitEvent("remove", [this])
            }
            ,
            d.remove = function () {
                return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
                    this.removeElem()
                }),
                    void this.hide()) : void this.removeElem()
            }
            ,
            d.reveal = function () {
                delete this.isHidden,
                    this.css({
                        display: ""
                    });
                var t = this.layout.options
                    , e = {}
                    , i = this.getHideRevealTransitionEndProperty("visibleStyle");
                e[i] = this.onRevealTransitionEnd,
                    this.transition({
                        from: t.hiddenStyle,
                        to: t.visibleStyle,
                        isCleaning: !0,
                        onTransitionEnd: e
                    })
            }
            ,
            d.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal")
            }
            ,
            d.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity)
                    return "opacity";
                for (var i in e)
                    return i
            }
            ,
            d.hide = function () {
                this.isHidden = !0,
                    this.css({
                        display: ""
                    });
                var t = this.layout.options
                    , e = {}
                    , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                e[i] = this.onHideTransitionEnd,
                    this.transition({
                        from: t.visibleStyle,
                        to: t.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: e
                    })
            }
            ,
            d.onHideTransitionEnd = function () {
                this.isHidden && (this.css({
                    display: "none"
                }),
                    this.emitEvent("hide"))
            }
            ,
            d.destroy = function () {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }
            ,
            n
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r) {
            return e(t, i, n, o, r)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function (t, e, i, n, o) {
        "use strict";
        function r(t, e) {
            var i = n.getQueryElement(t);
            if (!i)
                return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i,
                u && (this.$element = u(this.element)),
                this.options = n.extend({}, this.constructor.defaults),
                this.option(e);
            var o = ++l;
            this.element.outlayerGUID = o,
                c[o] = this,
                this._create();
            var r = this._getOption("initLayout");
            r && this.layout()
        }
        function s(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype),
                e.prototype.constructor = e,
                e
        }
        function a(t) {
            if ("number" == typeof t)
                return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/)
                , i = e && e[1]
                , n = e && e[2];
            if (!i.length)
                return 0;
            i = parseFloat(i);
            var o = m[n] || 1;
            return i * o
        }
        var h = t.console
            , u = t.jQuery
            , d = function () { }
            , l = 0
            , c = {};
        r.namespace = "outlayer",
            r.Item = o,
            r.defaults = {
                containerStyle: {
                    position: "relative"
                },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            };
        var f = r.prototype;
        n.extend(f, e.prototype),
            f.option = function (t) {
                n.extend(this.options, t)
            }
            ,
            f._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
            }
            ,
            r.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer"
            },
            f._create = function () {
                this.reloadItems(),
                    this.stamps = [],
                    this.stamp(this.options.stamp),
                    n.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize()
            }
            ,
            f.reloadItems = function () {
                this.items = this._itemize(this.element.children)
            }
            ,
            f._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                    var r = e[o]
                        , s = new i(r, this);
                    n.push(s)
                }
                return n
            }
            ,
            f._filterFindItemElements = function (t) {
                return n.filterFindElements(t, this.options.itemSelector)
            }
            ,
            f.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element
                })
            }
            ,
            f.layout = function () {
                this._resetLayout(),
                    this._manageStamps();
                var t = this._getOption("layoutInstant")
                    , e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e),
                    this._isLayoutInited = !0
            }
            ,
            f._init = f.layout,
            f._resetLayout = function () {
                this.getSize()
            }
            ,
            f.getSize = function () {
                this.size = i(this.element)
            }
            ,
            f._getMeasurement = function (t, e) {
                var n, o = this.options[t];
                o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o),
                    this[t] = n ? i(n)[e] : o) : this[t] = 0
            }
            ,
            f.layoutItems = function (t, e) {
                t = this._getItemsForLayout(t),
                    this._layoutItems(t, e),
                    this._postLayout()
            }
            ,
            f._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored
                })
            }
            ,
            f._layoutItems = function (t, e) {
                if (this._emitCompleteOnItems("layout", t),
                    t && t.length) {
                    var i = [];
                    t.forEach(function (t) {
                        var n = this._getItemLayoutPosition(t);
                        n.item = t,
                            n.isInstant = e || t.isLayoutInstant,
                            i.push(n)
                    }, this),
                        this._processLayoutQueue(i)
                }
            }
            ,
            f._getItemLayoutPosition = function () {
                return {
                    x: 0,
                    y: 0
                }
            }
            ,
            f._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e)
                    }, this)
            }
            ,
            f.updateStagger = function () {
                var t = this.options.stagger;
                return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
                    this.stagger)
            }
            ,
            f._positionItem = function (t, e, i, n, o) {
                n ? t.goTo(e, i) : (t.stagger(o * this.stagger),
                    t.moveTo(e, i))
            }
            ,
            f._postLayout = function () {
                this.resizeContainer()
            }
            ,
            f.resizeContainer = function () {
                var t = this._getOption("resizeContainer");
                if (t) {
                    var e = this._getContainerSize();
                    e && (this._setContainerMeasure(e.width, !0),
                        this._setContainerMeasure(e.height, !1))
                }
            }
            ,
            f._getContainerSize = d,
            f._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                        t = Math.max(t, 0),
                        this.element.style[e ? "width" : "height"] = t + "px"
                }
            }
            ,
            f._emitCompleteOnItems = function (t, e) {
                function i() {
                    o.dispatchEvent(t + "Complete", null, [e])
                }
                function n() {
                    s++,
                        s == r && i()
                }
                var o = this
                    , r = e.length;
                if (!e || !r)
                    return void i();
                var s = 0;
                e.forEach(function (e) {
                    e.once(t, n)
                })
            }
            ,
            f.dispatchEvent = function (t, e, i) {
                var n = e ? [e].concat(i) : i;
                if (this.emitEvent(t, n),
                    u)
                    if (this.$element = this.$element || u(this.element),
                        e) {
                        var o = u.Event(e);
                        o.type = t,
                            this.$element.trigger(o, i)
                    } else
                        this.$element.trigger(t, i)
            }
            ,
            f.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }
            ,
            f.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }
            ,
            f.stamp = function (t) {
                t = this._find(t),
                    t && (this.stamps = this.stamps.concat(t),
                        t.forEach(this.ignore, this))
            }
            ,
            f.unstamp = function (t) {
                t = this._find(t),
                    t && t.forEach(function (t) {
                        n.removeFrom(this.stamps, t),
                            this.unignore(t)
                    }, this)
            }
            ,
            f._find = function (t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
                    t = n.makeArray(t)) : void 0
            }
            ,
            f._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(),
                    this.stamps.forEach(this._manageStamp, this))
            }
            ,
            f._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect()
                    , e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }
            ,
            f._manageStamp = d,
            f._getElementOffset = function (t) {
                var e = t.getBoundingClientRect()
                    , n = this._boundingRect
                    , o = i(t)
                    , r = {
                        left: e.left - n.left - o.marginLeft,
                        top: e.top - n.top - o.marginTop,
                        right: n.right - e.right - o.marginRight,
                        bottom: n.bottom - e.bottom - o.marginBottom
                    };
                return r
            }
            ,
            f.handleEvent = n.handleEvent,
            f.bindResize = function () {
                t.addEventListener("resize", this),
                    this.isResizeBound = !0
            }
            ,
            f.unbindResize = function () {
                t.removeEventListener("resize", this),
                    this.isResizeBound = !1
            }
            ,
            f.onresize = function () {
                this.resize()
            }
            ,
            n.debounceMethod(r, "onresize", 100),
            f.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }
            ,
            f.needsResizeLayout = function () {
                var t = i(this.element)
                    , e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }
            ,
            f.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)),
                    e
            }
            ,
            f.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0),
                    this.reveal(e))
            }
            ,
            f.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i),
                        this._resetLayout(),
                        this._manageStamps(),
                        this.layoutItems(e, !0),
                        this.reveal(e),
                        this.layoutItems(i)
                }
            }
            ,
            f.reveal = function (t) {
                if (this._emitCompleteOnItems("reveal", t),
                    t && t.length) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e),
                            t.reveal()
                    })
                }
            }
            ,
            f.hide = function (t) {
                if (this._emitCompleteOnItems("hide", t),
                    t && t.length) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e),
                            t.hide()
                    })
                }
            }
            ,
            f.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e)
            }
            ,
            f.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e)
            }
            ,
            f.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t)
                        return i
                }
            }
            ,
            f.getItems = function (t) {
                t = n.makeArray(t);
                var e = [];
                return t.forEach(function (t) {
                    var i = this.getItem(t);
                    i && e.push(i)
                }, this),
                    e
            }
            ,
            f.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e && e.length && e.forEach(function (t) {
                        t.remove(),
                            n.removeFrom(this.items, t)
                    }, this)
            }
            ,
            f.destroy = function () {
                var t = this.element.style;
                t.height = "",
                    t.position = "",
                    t.width = "",
                    this.items.forEach(function (t) {
                        t.destroy()
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete c[e],
                    delete this.element.outlayerGUID,
                    u && u.removeData(this.element, this.constructor.namespace)
            }
            ,
            r.data = function (t) {
                t = n.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && c[e]
            }
            ,
            r.create = function (t, e) {
                var i = s(r);
                return i.defaults = n.extend({}, r.defaults),
                    n.extend(i.defaults, e),
                    i.compatOptions = n.extend({}, r.compatOptions),
                    i.namespace = t,
                    i.data = r.data,
                    i.Item = s(o),
                    n.htmlInit(i, t),
                    u && u.bridget && u.bridget(t, i),
                    i
            }
            ;
        var m = {
            ms: 1,
            s: 1e3
        };
        return r.Item = o,
            r
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function (t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var n = i.prototype;
        return n._resetLayout = function () {
            this.getSize(),
                this._getMeasurement("columnWidth", "outerWidth"),
                this._getMeasurement("gutter", "outerWidth"),
                this.measureColumns(),
                this.colYs = [];
            for (var t = 0; t < this.cols; t++)
                this.colYs.push(0);
            this.maxY = 0,
                this.horizontalColIndex = 0
        }
            ,
            n.measureColumns = function () {
                if (this.getContainerWidth(),
                    !this.columnWidth) {
                    var t = this.items[0]
                        , i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth
                }
                var n = this.columnWidth += this.gutter
                    , o = this.containerWidth + this.gutter
                    , r = o / n
                    , s = n - o % n
                    , a = s && 1 > s ? "round" : "floor";
                r = Math[a](r),
                    this.cols = Math.max(r, 1)
            }
            ,
            n.getContainerWidth = function () {
                var t = this._getOption("fitWidth")
                    , i = t ? this.element.parentNode : this.element
                    , n = e(i);
                this.containerWidth = n && n.innerWidth
            }
            ,
            n._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth
                    , i = e && 1 > e ? "round" : "ceil"
                    , n = Math[i](t.size.outerWidth / this.columnWidth);
                n = Math.min(n, this.cols);
                for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
                    x: this.columnWidth * r.col,
                    y: r.y
                }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++)
                    this.colYs[u] = a;
                return s
            }
            ,
            n._getTopColPosition = function (t) {
                var e = this._getTopColGroup(t)
                    , i = Math.min.apply(Math, e);
                return {
                    col: e.indexOf(i),
                    y: i
                }
            }
            ,
            n._getTopColGroup = function (t) {
                if (2 > t)
                    return this.colYs;
                for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++)
                    e[n] = this._getColGroupY(n, t);
                return e
            }
            ,
            n._getColGroupY = function (t, e) {
                if (2 > e)
                    return this.colYs[t];
                var i = this.colYs.slice(t, t + e);
                return Math.max.apply(Math, i)
            }
            ,
            n._getHorizontalColPosition = function (t, e) {
                var i = this.horizontalColIndex % this.cols
                    , n = t > 1 && i + t > this.cols;
                i = n ? 0 : i;
                var o = e.size.outerWidth && e.size.outerHeight;
                return this.horizontalColIndex = o ? i + t : this.horizontalColIndex,
                {
                    col: i,
                    y: this._getColGroupY(i, t)
                }
            }
            ,
            n._manageStamp = function (t) {
                var i = e(t)
                    , n = this._getElementOffset(t)
                    , o = this._getOption("originLeft")
                    , r = o ? n.left : n.right
                    , s = r + i.outerWidth
                    , a = Math.floor(r / this.columnWidth);
                a = Math.max(0, a);
                var h = Math.floor(s / this.columnWidth);
                h -= s % this.columnWidth ? 0 : 1,
                    h = Math.min(this.cols - 1, h);
                for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++)
                    this.colYs[l] = Math.max(d, this.colYs[l])
            }
            ,
            n._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
                    t
            }
            ,
            n._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)
                    t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }
            ,
            n.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(),
                    t != this.containerWidth
            }
            ,
            i
    });
(function () {
    /**
@license
CUBER
-----
Cuber is a programmable Rubiks cube of sorts.
Made with love by:
@author Mark Lundin - http://mark-lundin.com / @mark_lundin
@author Stewart Smith - stewd.io
@author Google Creative Lab
NOTATION
UPPERCASE = Clockwise to next 90 degree peg
lowercase = Anticlockwise to next 90 degree peg
FACE & SLICE ROTATION COMMANDS
F   Front
S   Standing (rotate according to Front Face's orientation)
B   Back
L   Left
M   Middle (rotate according to Left Face's orientation)
R   Right
U   Up
E   Equator (rotate according to Up Face's orientation)
D   Down
ENTIRE CUBE ROTATION COMMANDS
X   Rotate entire cube according to Right Face's orientation
Y   Rotate entire cube according to Up Face's orientation
Z   Rotate entire cube according to Front Face's orientation
NOTATION REFERENCES
http://en.wikipedia.org/wiki/Rubik's_Cube#Move_notation
http://en.wikibooks.org/wiki/Template:Rubik's_cube_notation
*/
    var ERNO = {};
    (function () {
        function a(a, c) {
            c = c || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var d = document.createEvent("CustomEvent");
            d.initCustomEvent(a, c.bubbles, c.cancelable, c.detail);
            return d
        }
        a.prototype = window.Event.prototype;
        window.CustomEvent = a;
        Function.prototype.bind || (Function.prototype.bind = function (a) {
            if ("function" !== typeof this)
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var c = Array.prototype.slice.call(arguments, 1)
                , d = this
                , e = function () { }
                , f = function () {
                    return d.apply(this instanceof e && a ? this : a, c.concat(Array.prototype.slice.call(arguments)))
                };
            e.prototype = this.prototype;
            f.prototype = new e;
            return f
        }
        )
    }
    )();
    ERNO.extend = function (a, b) {
        if (Object.keys)
            for (var c = Object.keys(b), d = 0, e = c.length; d < e; d++) {
                var f = c[d];
                Object.defineProperty(a, f, Object.getOwnPropertyDescriptor(b, f))
            }
        else
            for (f in c = {}.hasOwnProperty,
                b)
                c.call(b, f) && (a[f] = b[f]);
        return a
    }
        ;
    void 0 === Date.now && (Date.now = function () {
        return (new Date).valueOf()
    }
    );
    var TWEEN = TWEEN || function () {
        var a = [];
        return {
            REVISION: "12",
            getAll: function () {
                return a
            },
            removeAll: function () {
                a = []
            },
            add: function (b) {
                a.push(b)
            },
            remove: function (b) {
                b = a.indexOf(b);
                -1 !== b && a.splice(b, 1)
            },
            update: function (b) {
                if (0 === a.length)
                    return !1;
                var c = 0;
                for (b = void 0 !== b ? b : "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(); c < a.length;)
                    a[c].update(b) ? c++ : a.splice(c, 1);
                return !0
            }
        }
    }();
    TWEEN.Tween = function (a) {
        var b = {}, c = {}, d = {}, e = 1E3, f = 0, g = !1, h = !1, k = 0, l = null, n = TWEEN.Easing.Linear.None, m = TWEEN.Interpolation.Linear, r = [], q = null, t = !1, u = null, p = null, s;
        for (s in a)
            b[s] = parseFloat(a[s], 10);
        this.to = function (a, b) {
            void 0 !== b && (e = b);
            c = a;
            return this
        }
            ;
        this.start = function (e) {
            TWEEN.add(this);
            h = !0;
            t = !1;
            l = void 0 !== e ? e : "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now();
            l += k;
            for (var f in c) {
                if (c[f] instanceof Array) {
                    if (0 === c[f].length)
                        continue;
                    c[f] = [a[f]].concat(c[f])
                }
                b[f] = a[f];
                !1 === b[f] instanceof Array && (b[f] *= 1);
                d[f] = b[f] || 0
            }
            return this
        }
            ;
        this.stop = function () {
            if (!h)
                return this;
            TWEEN.remove(this);
            h = !1;
            this.stopChainedTweens();
            return this
        }
            ;
        this.stopChainedTweens = function () {
            for (var a = 0, b = r.length; a < b; a++)
                r[a].stop()
        }
            ;
        this.delay = function (a) {
            k = a;
            return this
        }
            ;
        this.repeat = function (a) {
            f = a;
            return this
        }
            ;
        this.yoyo = function (a) {
            g = a;
            return this
        }
            ;
        this.easing = function (a) {
            n = a;
            return this
        }
            ;
        this.interpolation = function (a) {
            m = a;
            return this
        }
            ;
        this.chain = function () {
            r = arguments;
            return this
        }
            ;
        this.onStart = function (a) {
            q = a;
            return this
        }
            ;
        this.onUpdate = function (a) {
            u = a;
            return this
        }
            ;
        this.onComplete = function (a) {
            p = a;
            return this
        }
            ;
        this.update = function (h) {
            var w;
            if (h < l)
                return !0;
            !1 === t && (null !== q && q.call(a),
                t = !0);
            var s = (h - l) / e
                , s = 1 < s ? 1 : s
                , x = n(s);
            for (w in c) {
                var C = b[w] || 0
                    , z = c[w];
                z instanceof Array ? a[w] = m(z, x) : ("string" === typeof z && (z = C + parseFloat(z, 10)),
                    "number" === typeof z && (a[w] = C + (z - C) * x))
            }
            null !== u && u.call(a, x);
            if (1 == s)
                if (0 < f) {
                    isFinite(f) && f--;
                    for (w in d)
                        "string" === typeof c[w] && (d[w] += parseFloat(c[w], 10)),
                            g && (s = d[w],
                                d[w] = c[w],
                                c[w] = s),
                            b[w] = d[w];
                    l = h + k
                } else {
                    null !== p && p.call(a);
                    w = 0;
                    for (s = r.length; w < s; w++)
                        r[w].start(h);
                    return !1
                }
            return !0
        }
    }
        ;
    TWEEN.Easing = {
        Linear: {
            None: function (a) {
                return a
            }
        },
        Quadratic: {
            In: function (a) {
                return a * a
            },
            Out: function (a) {
                return a * (2 - a)
            },
            InOut: function (a) {
                return 1 > (a *= 2) ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1)
            }
        },
        Cubic: {
            In: function (a) {
                return a * a * a
            },
            Out: function (a) {
                return --a * a * a + 1
            },
            InOut: function (a) {
                return 1 > (a *= 2) ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2)
            }
        },
        Quartic: {
            In: function (a) {
                return a * a * a * a
            },
            Out: function (a) {
                return 1 - --a * a * a * a
            },
            InOut: function (a) {
                return 1 > (a *= 2) ? 0.5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2)
            }
        },
        Quintic: {
            In: function (a) {
                return a * a * a * a * a
            },
            Out: function (a) {
                return --a * a * a * a * a + 1
            },
            InOut: function (a) {
                return 1 > (a *= 2) ? 0.5 * a * a * a * a * a : 0.5 * ((a -= 2) * a * a * a * a + 2)
            }
        },
        Sinusoidal: {
            In: function (a) {
                return 1 - Math.cos(a * Math.PI / 2)
            },
            Out: function (a) {
                return Math.sin(a * Math.PI / 2)
            },
            InOut: function (a) {
                return 0.5 * (1 - Math.cos(Math.PI * a))
            }
        },
        Exponential: {
            In: function (a) {
                return 0 === a ? 0 : Math.pow(1024, a - 1)
            },
            Out: function (a) {
                return 1 === a ? 1 : 1 - Math.pow(2, -10 * a)
            },
            InOut: function (a) {
                return 0 === a ? 0 : 1 === a ? 1 : 1 > (a *= 2) ? 0.5 * Math.pow(1024, a - 1) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2)
            }
        },
        Circular: {
            In: function (a) {
                return 1 - Math.sqrt(1 - a * a)
            },
            Out: function (a) {
                return Math.sqrt(1 - --a * a)
            },
            InOut: function (a) {
                return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            }
        },
        Elastic: {
            In: function (a) {
                var b, c = 0.1;
                if (0 === a)
                    return 0;
                if (1 === a)
                    return 1;
                !c || 1 > c ? (c = 1,
                    b = 0.1) : b = 0.4 * Math.asin(1 / c) / (2 * Math.PI);
                return -(c * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / 0.4))
            },
            Out: function (a) {
                var b, c = 0.1;
                if (0 === a)
                    return 0;
                if (1 === a)
                    return 1;
                !c || 1 > c ? (c = 1,
                    b = 0.1) : b = 0.4 * Math.asin(1 / c) / (2 * Math.PI);
                return c * Math.pow(2, -10 * a) * Math.sin(2 * (a - b) * Math.PI / 0.4) + 1
            },
            InOut: function (a) {
                var b, c = 0.1;
                if (0 === a)
                    return 0;
                if (1 === a)
                    return 1;
                !c || 1 > c ? (c = 1,
                    b = 0.1) : b = 0.4 * Math.asin(1 / c) / (2 * Math.PI);
                return 1 > (a *= 2) ? -0.5 * c * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / 0.4) : c * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / 0.4) * 0.5 + 1
            }
        },
        Back: {
            In: function (a) {
                return a * a * (2.70158 * a - 1.70158)
            },
            Out: function (a) {
                return --a * a * (2.70158 * a + 1.70158) + 1
            },
            InOut: function (a) {
                return 1 > (a *= 2) ? 0.5 * a * a * (3.5949095 * a - 2.5949095) : 0.5 * ((a -= 2) * a * (3.5949095 * a + 2.5949095) + 2)
            }
        },
        Bounce: {
            In: function (a) {
                return 1 - TWEEN.Easing.Bounce.Out(1 - a)
            },
            Out: function (a) {
                return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
            },
            InOut: function (a) {
                return 0.5 > a ? 0.5 * TWEEN.Easing.Bounce.In(2 * a) : 0.5 * TWEEN.Easing.Bounce.Out(2 * a - 1) + 0.5
            }
        }
    };
    TWEEN.Interpolation = {
        Linear: function (a, b) {
            var c = a.length - 1
                , d = c * b
                , e = Math.floor(d)
                , f = TWEEN.Interpolation.Utils.Linear;
            return 0 > b ? f(a[0], a[1], d) : 1 < b ? f(a[c], a[c - 1], c - d) : f(a[e], a[e + 1 > c ? c : e + 1], d - e)
        },
        Bezier: function (a, b) {
            var c = 0, d = a.length - 1, e = Math.pow, f = TWEEN.Interpolation.Utils.Bernstein, g;
            for (g = 0; g <= d; g++)
                c += e(1 - b, d - g) * e(b, g) * a[g] * f(d, g);
            return c
        },
        CatmullRom: function (a, b) {
            var c = a.length - 1
                , d = c * b
                , e = Math.floor(d)
                , f = TWEEN.Interpolation.Utils.CatmullRom;
            return a[0] === a[c] ? (0 > b && (e = Math.floor(d = c * (1 + b))),
                f(a[(e - 1 + c) % c], a[e], a[(e + 1) % c], a[(e + 2) % c], d - e)) : 0 > b ? a[0] - (f(a[0], a[0], a[1], a[1], -d) - a[0]) : 1 < b ? a[c] - (f(a[c], a[c], a[c - 1], a[c - 1], d - c) - a[c]) : f(a[e ? e - 1 : 0], a[e], a[c < e + 1 ? c : e + 1], a[c < e + 2 ? c : e + 2], d - e)
        },
        Utils: {
            Linear: function (a, b, c) {
                return (b - a) * c + a
            },
            Bernstein: function (a, b) {
                var c = TWEEN.Interpolation.Utils.Factorial;
                return c(a) / c(b) / c(a - b)
            },
            Factorial: function () {
                var a = [1];
                return function (b) {
                    var c = 1, d;
                    if (a[b])
                        return a[b];
                    for (d = b; 1 < d; d--)
                        c *= d;
                    return a[b] = c
                }
            }(),
            CatmullRom: function (a, b, c, d, e) {
                a = 0.5 * (c - a);
                d = 0.5 * (d - b);
                var f = e * e;
                return (2 * b - 2 * c + a + d) * e * f + (-3 * b + 3 * c - 2 * a - d) * f + a * e + b
            }
        }
    };
    /**
THREE.JS
 @license
 The MIT License
 Copyright &copy; 2010-2014 three.js authors
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/
    var THREE = {
        REVISION: "66"
    };
    self.console = self.console || {
        info: function () { },
        log: function () { },
        debug: function () { },
        warn: function () { },
        error: function () { }
    };
    (function () {
        for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !self.requestAnimationFrame; ++c)
            self.requestAnimationFrame = self[b[c] + "RequestAnimationFrame"],
                self.cancelAnimationFrame = self[b[c] + "CancelAnimationFrame"] || self[b[c] + "CancelRequestAnimationFrame"];
        void 0 === self.requestAnimationFrame && void 0 !== self.setTimeout && (self.requestAnimationFrame = function (b) {
            var c = Date.now()
                , f = Math.max(0, 16 - (c - a))
                , g = self.setTimeout(function () {
                    b(c + f)
                }, f);
            a = c + f;
            return g
        }
        );
        void 0 === self.cancelAnimationFrame && void 0 !== self.clearTimeout && (self.cancelAnimationFrame = function (a) {
            self.clearTimeout(a)
        }
        )
    }
    )();
    THREE.CullFaceNone = 0;
    THREE.CullFaceBack = 1;
    THREE.CullFaceFront = 2;
    THREE.CullFaceFrontBack = 3;
    THREE.FrontFaceDirectionCW = 0;
    THREE.FrontFaceDirectionCCW = 1;
    THREE.BasicShadowMap = 0;
    THREE.PCFShadowMap = 1;
    THREE.PCFSoftShadowMap = 2;
    THREE.FrontSide = 0;
    THREE.BackSide = 1;
    THREE.DoubleSide = 2;
    THREE.NoShading = 0;
    THREE.FlatShading = 1;
    THREE.SmoothShading = 2;
    THREE.NoColors = 0;
    THREE.FaceColors = 1;
    THREE.VertexColors = 2;
    THREE.NoBlending = 0;
    THREE.NormalBlending = 1;
    THREE.AdditiveBlending = 2;
    THREE.SubtractiveBlending = 3;
    THREE.MultiplyBlending = 4;
    THREE.CustomBlending = 5;
    THREE.AddEquation = 100;
    THREE.SubtractEquation = 101;
    THREE.ReverseSubtractEquation = 102;
    THREE.ZeroFactor = 200;
    THREE.OneFactor = 201;
    THREE.SrcColorFactor = 202;
    THREE.OneMinusSrcColorFactor = 203;
    THREE.SrcAlphaFactor = 204;
    THREE.OneMinusSrcAlphaFactor = 205;
    THREE.DstAlphaFactor = 206;
    THREE.OneMinusDstAlphaFactor = 207;
    THREE.DstColorFactor = 208;
    THREE.OneMinusDstColorFactor = 209;
    THREE.SrcAlphaSaturateFactor = 210;
    THREE.MultiplyOperation = 0;
    THREE.MixOperation = 1;
    THREE.AddOperation = 2;
    THREE.UVMapping = function () { }
        ;
    THREE.CubeReflectionMapping = function () { }
        ;
    THREE.CubeRefractionMapping = function () { }
        ;
    THREE.SphericalReflectionMapping = function () { }
        ;
    THREE.SphericalRefractionMapping = function () { }
        ;
    THREE.RepeatWrapping = 1E3;
    THREE.ClampToEdgeWrapping = 1001;
    THREE.MirroredRepeatWrapping = 1002;
    THREE.NearestFilter = 1003;
    THREE.NearestMipMapNearestFilter = 1004;
    THREE.NearestMipMapLinearFilter = 1005;
    THREE.LinearFilter = 1006;
    THREE.LinearMipMapNearestFilter = 1007;
    THREE.LinearMipMapLinearFilter = 1008;
    THREE.UnsignedByteType = 1009;
    THREE.ByteType = 1010;
    THREE.ShortType = 1011;
    THREE.UnsignedShortType = 1012;
    THREE.IntType = 1013;
    THREE.UnsignedIntType = 1014;
    THREE.FloatType = 1015;
    THREE.UnsignedShort4444Type = 1016;
    THREE.UnsignedShort5551Type = 1017;
    THREE.UnsignedShort565Type = 1018;
    THREE.AlphaFormat = 1019;
    THREE.RGBFormat = 1020;
    THREE.RGBAFormat = 1021;
    THREE.LuminanceFormat = 1022;
    THREE.LuminanceAlphaFormat = 1023;
    THREE.RGB_S3TC_DXT1_Format = 2001;
    THREE.RGBA_S3TC_DXT1_Format = 2002;
    THREE.RGBA_S3TC_DXT3_Format = 2003;
    THREE.RGBA_S3TC_DXT5_Format = 2004;
    THREE.EventDispatcher = function () { }
        ;
    THREE.EventDispatcher.prototype = {
        constructor: THREE.EventDispatcher,
        apply: function (a) {
            a.addEventListener = THREE.EventDispatcher.prototype.addEventListener;
            a.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener;
            a.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener;
            a.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent
        },
        addEventListener: function (a, b) {
            void 0 === this._listeners && (this._listeners = {});
            var c = this._listeners;
            void 0 === c[a] && (c[a] = []);
            -1 === c[a].indexOf(b) && c[a].push(b)
        },
        hasEventListener: function (a, b) {
            if (void 0 === this._listeners)
                return !1;
            var c = this._listeners;
            return void 0 !== c[a] && -1 !== c[a].indexOf(b) ? !0 : !1
        },
        removeEventListener: function (a, b) {
            if (void 0 !== this._listeners) {
                var c = this._listeners[a];
                if (void 0 !== c) {
                    var d = c.indexOf(b);
                    -1 !== d && c.splice(d, 1)
                }
            }
        },
        dispatchEvent: function () {
            var a = [];
            return function (b) {
                if (void 0 !== this._listeners) {
                    var c = this._listeners[b.type];
                    if (void 0 !== c) {
                        b.target = this;
                        for (var d = c.length, e = 0; e < d; e++)
                            a[e] = c[e];
                        for (e = 0; e < d; e++)
                            a[e].call(this, b)
                    }
                }
            }
        }()
    };
    THREE.Math = {
        PI2: 2 * Math.PI,
        generateUUID: function () {
            var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), b = Array(36), c = 0, d;
            return function () {
                for (var e = 0; 36 > e; e++)
                    8 == e || 13 == e || 18 == e || 23 == e ? b[e] = "-" : 14 == e ? b[e] = "4" : (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0),
                        d = c & 15,
                        c >>= 4,
                        b[e] = a[19 == e ? d & 3 | 8 : d]);
                return b.join("")
            }
        }(),
        clamp: function (a, b, c) {
            return a < b ? b : a > c ? c : a
        },
        clampBottom: function (a, b) {
            return a < b ? b : a
        },
        mapLinear: function (a, b, c, d, e) {
            return d + (a - b) * (e - d) / (c - b)
        },
        smoothstep: function (a, b, c) {
            if (a <= b)
                return 0;
            if (a >= c)
                return 1;
            a = (a - b) / (c - b);
            return a * a * (3 - 2 * a)
        },
        smootherstep: function (a, b, c) {
            if (a <= b)
                return 0;
            if (a >= c)
                return 1;
            a = (a - b) / (c - b);
            return a * a * a * (a * (6 * a - 15) + 10)
        },
        random16: function () {
            return (65280 * Math.random() + 255 * Math.random()) / 65535
        },
        randInt: function (a, b) {
            return a + Math.floor(Math.random() * (b - a + 1))
        },
        randFloat: function (a, b) {
            return a + Math.random() * (b - a)
        },
        randFloatSpread: function (a) {
            return a * (0.5 - Math.random())
        },
        sign: function (a) {
            return 0 > a ? -1 : 0 < a ? 1 : 0
        },
        degToRad: function () {
            var a = Math.PI / 180;
            return function (b) {
                return b * a
            }
        }(),
        radToDeg: function () {
            var a = 180 / Math.PI;
            return function (b) {
                return b * a
            }
        }(),
        isPowerOfTwo: function (a) {
            return 0 === (a & a - 1) && 0 !== a
        }
    };
    THREE.Quaternion = function (a, b, c, d) {
        this._x = a || 0;
        this._y = b || 0;
        this._z = c || 0;
        this._w = void 0 !== d ? d : 1
    }
        ;
    THREE.Quaternion.prototype = {
        constructor: THREE.Quaternion,
        _x: 0,
        _y: 0,
        _z: 0,
        _w: 0,
        _euler: void 0,
        _updateEuler: function (a) {
            void 0 !== this._euler && this._euler.setFromQuaternion(this, void 0, !1)
        },
        get x() {
            return this._x
        },
        set x(a) {
            this._x = a;
            this._updateEuler()
        },
        get y() {
            return this._y
        },
        set y(a) {
            this._y = a;
            this._updateEuler()
        },
        get z() {
            return this._z
        },
        set z(a) {
            this._z = a;
            this._updateEuler()
        },
        get w() {
            return this._w
        },
        set w(a) {
            this._w = a;
            this._updateEuler()
        },
        set: function (a, b, c, d) {
            this._x = a;
            this._y = b;
            this._z = c;
            this._w = d;
            this._updateEuler();
            return this
        },
        copy: function (a) {
            this._x = a._x;
            this._y = a._y;
            this._z = a._z;
            this._w = a._w;
            this._updateEuler();
            return this
        },
        setFromEuler: function (a, b) {
            if (!1 === a instanceof THREE.Euler)
                throw Error("ERROR: Quaternion's .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");
            var c = Math.cos(a._x / 2)
                , d = Math.cos(a._y / 2)
                , e = Math.cos(a._z / 2)
                , f = Math.sin(a._x / 2)
                , g = Math.sin(a._y / 2)
                , h = Math.sin(a._z / 2);
            "XYZ" === a.order ? (this._x = f * d * e + c * g * h,
                this._y = c * g * e - f * d * h,
                this._z = c * d * h + f * g * e,
                this._w = c * d * e - f * g * h) : "YXZ" === a.order ? (this._x = f * d * e + c * g * h,
                    this._y = c * g * e - f * d * h,
                    this._z = c * d * h - f * g * e,
                    this._w = c * d * e + f * g * h) : "ZXY" === a.order ? (this._x = f * d * e - c * g * h,
                        this._y = c * g * e + f * d * h,
                        this._z = c * d * h + f * g * e,
                        this._w = c * d * e - f * g * h) : "ZYX" === a.order ? (this._x = f * d * e - c * g * h,
                            this._y = c * g * e + f * d * h,
                            this._z = c * d * h - f * g * e,
                            this._w = c * d * e + f * g * h) : "YZX" === a.order ? (this._x = f * d * e + c * g * h,
                                this._y = c * g * e + f * d * h,
                                this._z = c * d * h - f * g * e,
                                this._w = c * d * e - f * g * h) : "XZY" === a.order && (this._x = f * d * e - c * g * h,
                                    this._y = c * g * e - f * d * h,
                                    this._z = c * d * h + f * g * e,
                                    this._w = c * d * e + f * g * h);
            !1 !== b && this._updateEuler();
            return this
        },
        setFromAxisAngle: function (a, b) {
            var c = b / 2
                , d = Math.sin(c);
            this._x = a.x * d;
            this._y = a.y * d;
            this._z = a.z * d;
            this._w = Math.cos(c);
            this._updateEuler();
            return this
        },
        setFromRotationMatrix: function (a) {
            var b = a.elements
                , c = b[0];
            a = b[4];
            var d = b[8]
                , e = b[1]
                , f = b[5]
                , g = b[9]
                , h = b[2]
                , k = b[6]
                , b = b[10]
                , l = c + f + b;
            0 < l ? (c = 0.5 / Math.sqrt(l + 1),
                this._w = 0.25 / c,
                this._x = (k - g) * c,
                this._y = (d - h) * c,
                this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b),
                    this._w = (k - g) / c,
                    this._x = 0.25 * c,
                    this._y = (a + e) / c,
                    this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b),
                        this._w = (d - h) / c,
                        this._x = (a + e) / c,
                        this._y = 0.25 * c,
                        this._z = (g + k) / c) : (c = 2 * Math.sqrt(1 + b - c - f),
                            this._w = (e - a) / c,
                            this._x = (d + h) / c,
                            this._y = (g + k) / c,
                            this._z = 0.25 * c);
            this._updateEuler();
            return this
        },
        inverse: function () {
            this.conjugate().normalize();
            return this
        },
        conjugate: function () {
            this._x *= -1;
            this._y *= -1;
            this._z *= -1;
            this._updateEuler();
            return this
        },
        lengthSq: function () {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function () {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function () {
            var a = this.length();
            0 === a ? (this._z = this._y = this._x = 0,
                this._w = 1) : (a = 1 / a,
                    this._x *= a,
                    this._y *= a,
                    this._z *= a,
                    this._w *= a);
            return this
        },
        multiply: function (a, b) {
            return void 0 !== b ? (console.warn("DEPRECATED: Quaternion's .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
                this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a)
        },
        multiplyQuaternions: function (a, b) {
            var c = a._x
                , d = a._y
                , e = a._z
                , f = a._w
                , g = b._x
                , h = b._y
                , k = b._z
                , l = b._w;
            this._x = c * l + f * g + d * k - e * h;
            this._y = d * l + f * h + e * g - c * k;
            this._z = e * l + f * k + c * h - d * g;
            this._w = f * l - c * g - d * h - e * k;
            this._updateEuler();
            return this
        },
        multiplyVector3: function (a) {
            console.warn("DEPRECATED: Quaternion's .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
            return a.applyQuaternion(this)
        },
        slerp: function (a, b) {
            var c = this._x
                , d = this._y
                , e = this._z
                , f = this._w
                , g = f * a._w + c * a._x + d * a._y + e * a._z;
            0 > g ? (this._w = -a._w,
                this._x = -a._x,
                this._y = -a._y,
                this._z = -a._z,
                g = -g) : this.copy(a);
            if (1 <= g)
                return this._w = f,
                    this._x = c,
                    this._y = d,
                    this._z = e,
                    this;
            var h = Math.acos(g)
                , k = Math.sqrt(1 - g * g);
            if (0.001 > Math.abs(k))
                return this._w = 0.5 * (f + this._w),
                    this._x = 0.5 * (c + this._x),
                    this._y = 0.5 * (d + this._y),
                    this._z = 0.5 * (e + this._z),
                    this;
            g = Math.sin((1 - b) * h) / k;
            h = Math.sin(b * h) / k;
            this._w = f * g + this._w * h;
            this._x = c * g + this._x * h;
            this._y = d * g + this._y * h;
            this._z = e * g + this._z * h;
            this._updateEuler();
            return this
        },
        equals: function (a) {
            return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w
        },
        fromArray: function (a) {
            this._x = a[0];
            this._y = a[1];
            this._z = a[2];
            this._w = a[3];
            this._updateEuler();
            return this
        },
        toArray: function () {
            return [this._x, this._y, this._z, this._w]
        },
        clone: function () {
            return new THREE.Quaternion(this._x, this._y, this._z, this._w)
        }
    };
    THREE.Quaternion.slerp = function (a, b, c, d) {
        return c.copy(a).slerp(b, d)
    }
        ;
    THREE.Vector2 = function (a, b) {
        this.x = a || 0;
        this.y = b || 0
    }
        ;
    THREE.Vector2.prototype = {
        constructor: THREE.Vector2,
        set: function (a, b) {
            this.x = a;
            this.y = b;
            return this
        },
        setX: function (a) {
            this.x = a;
            return this
        },
        setY: function (a) {
            this.y = a;
            return this
        },
        setComponent: function (a, b) {
            switch (a) {
                case 0:
                    this.x = b;
                    break;
                case 1:
                    this.y = b;
                    break;
                default:
                    throw Error("index is out of range: " + a);
            }
        },
        getComponent: function (a) {
            switch (a) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw Error("index is out of range: " + a);
            }
        },
        copy: function (a) {
            this.x = a.x;
            this.y = a.y;
            return this
        },
        add: function (a, b) {
            if (void 0 !== b)
                return console.warn("DEPRECATED: Vector2's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                    this.addVectors(a, b);
            this.x += a.x;
            this.y += a.y;
            return this
        },
        addVectors: function (a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            return this
        },
        addScalar: function (a) {
            this.x += a;
            this.y += a;
            return this
        },
        sub: function (a, b) {
            if (void 0 !== b)
                return console.warn("DEPRECATED: Vector2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                    this.subVectors(a, b);
            this.x -= a.x;
            this.y -= a.y;
            return this
        },
        subVectors: function (a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            return this
        },
        multiplyScalar: function (a) {
            this.x *= a;
            this.y *= a;
            return this
        },
        divideScalar: function (a) {
            0 !== a ? (a = 1 / a,
                this.x *= a,
                this.y *= a) : this.y = this.x = 0;
            return this
        },
        min: function (a) {
            this.x > a.x && (this.x = a.x);
            this.y > a.y && (this.y = a.y);
            return this
        },
        max: function (a) {
            this.x < a.x && (this.x = a.x);
            this.y < a.y && (this.y = a.y);
            return this
        },
        clamp: function (a, b) {
            this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
            this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
            return this
        },
        clampScalar: function () {
            var a, b;
            return function (c, d) {
                void 0 === a && (a = new THREE.Vector2,
                    b = new THREE.Vector2);
                a.set(c, c);
                b.set(d, d);
                return this.clamp(a, b)
            }
        }(),
        floor: function () {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        },
        ceil: function () {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        },
        round: function () {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        },
        roundToZero: function () {
            this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
            this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
            return this
        },
        negate: function () {
            return this.multiplyScalar(-1)
        },
        dot: function (a) {
            return this.x * a.x + this.y * a.y
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        normalize: function () {
            return this.divideScalar(this.length())
        },
        distanceTo: function (a) {
            return Math.sqrt(this.distanceToSquared(a))
        },
        distanceToSquared: function (a) {
            var b = this.x - a.x;
            a = this.y - a.y;
            return b * b + a * a
        },
        setLength: function (a) {
            var b = this.length();
            0 !== b && a !== b && this.multiplyScalar(a / b);
            return this
        },
        lerp: function (a, b) {
            this.x += (a.x - this.x) * b;
            this.y += (a.y - this.y) * b;
            return this
        },
        equals: function (a) {
            return a.x === this.x && a.y === this.y
        },
        fromArray: function (a) {
            this.x = a[0];
            this.y = a[1];
            return this
        },
        toArray: function () {
            return [this.x, this.y]
        },
        clone: function () {
            return new THREE.Vector2(this.x, this.y)
        }
    };
    THREE.Vector3 = function (a, b, c) {
        this.x = a || 0;
        this.y = b || 0;
        this.z = c || 0
    }
        ;
    THREE.Vector3.prototype = {
        constructor: THREE.Vector3,
        set: function (a, b, c) {
            this.x = a;
            this.y = b;
            this.z = c;
            return this
        },
        setX: function (a) {
            this.x = a;
            return this
        },
        setY: function (a) {
            this.y = a;
            return this
        },
        setZ: function (a) {
            this.z = a;
            return this
        },
        setComponent: function (a, b) {
            switch (a) {
                case 0:
                    this.x = b;
                    break;
                case 1:
                    this.y = b;
                    break;
                case 2:
                    this.z = b;
                    break;
                default:
                    throw Error("index is out of range: " + a);
            }
        },
        getComponent: function (a) {
            switch (a) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw Error("index is out of range: " + a);
            }
        },
        copy: function (a) {
            this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            return this
        },
        add: function (a, b) {
            if (void 0 !== b)
                return console.warn("DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                    this.addVectors(a, b);
            this.x += a.x;
            this.y += a.y;
            this.z += a.z;
            return this
        },
        addScalar: function (a) {
            this.x += a;
            this.y += a;
            this.z += a;
            return this
        },
        addVectors: function (a, b) {
            this.x = a.x + b.x;
            this.y = a.y + b.y;
            this.z = a.z + b.z;
            return this
        },
        sub: function (a, b) {
            if (void 0 !== b)
                return console.warn("DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                    this.subVectors(a, b);
            this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            return this
        },
        subVectors: function (a, b) {
            this.x = a.x - b.x;
            this.y = a.y - b.y;
            this.z = a.z - b.z;
            return this
        },
        multiply: function (a, b) {
            if (void 0 !== b)
                return console.warn("DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
                    this.multiplyVectors(a, b);
            this.x *= a.x;
            this.y *= a.y;
            this.z *= a.z;
            return this
        },
        multiplyScalar: function (a) {
            this.x *= a;
            this.y *= a;
            this.z *= a;
            return this
        },
        multiplyVectors: function (a, b) {
            this.x = a.x * b.x;
            this.y = a.y * b.y;
            this.z = a.z * b.z;
            return this
        },
        applyEuler: function () {
            var a;
            return function (b) {
                !1 === b instanceof THREE.Euler && console.error("ERROR: Vector3's .applyEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");
                void 0 === a && (a = new THREE.Quaternion);
                this.applyQuaternion(a.setFromEuler(b));
                return this
            }
        }(),
        applyAxisAngle: function () {
            var a;
            return function (b, c) {
                void 0 === a && (a = new THREE.Quaternion);
                this.applyQuaternion(a.setFromAxisAngle(b, c));
                return this
            }
        }(),
        applyMatrix3: function (a) {
            var b = this.x
                , c = this.y
                , d = this.z;
            a = a.elements;
            this.x = a[0] * b + a[3] * c + a[6] * d;
            this.y = a[1] * b + a[4] * c + a[7] * d;
            this.z = a[2] * b + a[5] * c + a[8] * d;
            return this
        },
        applyMatrix4: function (a) {
            var b = this.x
                , c = this.y
                , d = this.z;
            a = a.elements;
            this.x = a[0] * b + a[4] * c + a[8] * d + a[12];
            this.y = a[1] * b + a[5] * c + a[9] * d + a[13];
            this.z = a[2] * b + a[6] * c + a[10] * d + a[14];
            return this
        },
        applyProjection: function (a) {
            var b = this.x
                , c = this.y
                , d = this.z;
            a = a.elements;
            var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
            this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
            this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
            this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
            return this
        },
        applyQuaternion: function (a) {
            var b = this.x
                , c = this.y
                , d = this.z
                , e = a.x
                , f = a.y
                , g = a.z;
            a = a.w;
            var h = a * b + f * d - g * c
                , k = a * c + g * b - e * d
                , l = a * d + e * c - f * b
                , b = -e * b - f * c - g * d;
            this.x = h * a + b * -e + k * -g - l * -f;
            this.y = k * a + b * -f + l * -e - h * -g;
            this.z = l * a + b * -g + h * -f - k * -e;
            return this
        },
        transformDirection: function (a) {
            var b = this.x
                , c = this.y
                , d = this.z;
            a = a.elements;
            this.x = a[0] * b + a[4] * c + a[8] * d;
            this.y = a[1] * b + a[5] * c + a[9] * d;
            this.z = a[2] * b + a[6] * c + a[10] * d;
            this.normalize();
            return this
        },
        divide: function (a) {
            this.x /= a.x;
            this.y /= a.y;
            this.z /= a.z;
            return this
        },
        divideScalar: function (a) {
            0 !== a ? (a = 1 / a,
                this.x *= a,
                this.y *= a,
                this.z *= a) : this.z = this.y = this.x = 0;
            return this
        },
        min: function (a) {
            this.x > a.x && (this.x = a.x);
            this.y > a.y && (this.y = a.y);
            this.z > a.z && (this.z = a.z);
            return this
        },
        max: function (a) {
            this.x < a.x && (this.x = a.x);
            this.y < a.y && (this.y = a.y);
            this.z < a.z && (this.z = a.z);
            return this
        },
        clamp: function (a, b) {
            this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
            this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
            this.z < a.z ? this.z = a.z : this.z > b.z && (this.z = b.z);
            return this
        },
        clampScalar: function () {
            var a, b;
            return function (c, d) {
                void 0 === a && (a = new THREE.Vector3,
                    b = new THREE.Vector3);
                a.set(c, c, c);
                b.set(d, d, d);
                return this.clamp(a, b)
            }
        }(),
        floor: function () {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            this.z = Math.floor(this.z);
            return this
        },
        ceil: function () {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            this.z = Math.ceil(this.z);
            return this
        },
        round: function () {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.z = Math.round(this.z);
            return this
        },
        roundToZero: function () {
            this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
            this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
            this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
            return this
        },
        negate: function () {
            return this.multiplyScalar(-1)
        },
        dot: function (a) {
            return this.x * a.x + this.y * a.y + this.z * a.z
        },
        lengthSq: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        lengthManhattan: function () {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function () {
            return this.divideScalar(this.length())
        },
        setLength: function (a) {
            var b = this.length();
            0 !== b && a !== b && this.multiplyScalar(a / b);
            return this
        },
        lerp: function (a, b) {
            this.x += (a.x - this.x) * b;
            this.y += (a.y - this.y) * b;
            this.z += (a.z - this.z) * b;
            return this
        },
        cross: function (a, b) {
            if (void 0 !== b)
                return console.warn("DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
                    this.crossVectors(a, b);
            var c = this.x
                , d = this.y
                , e = this.z;
            this.x = d * a.z - e * a.y;
            this.y = e * a.x - c * a.z;
            this.z = c * a.y - d * a.x;
            return this
        },
        crossVectors: function (a, b) {
            var c = a.x
                , d = a.y
                , e = a.z
                , f = b.x
                , g = b.y
                , h = b.z;
            this.x = d * h - e * g;
            this.y = e * f - c * h;
            this.z = c * g - d * f;
            return this
        },
        projectOnVector: function () {
            var a, b;
            return function (c) {
                void 0 === a && (a = new THREE.Vector3);
                a.copy(c).normalize();
                b = this.dot(a);
                return this.copy(a).multiplyScalar(b)
            }
        }(),
        projectOnPlane: function () {
            var a;
            return function (b) {
                void 0 === a && (a = new THREE.Vector3);
                a.copy(this).projectOnVector(b);
                return this.sub(a)
            }
        }(),
        reflect: function () {
            var a;
            return function (b) {
                void 0 === a && (a = new THREE.Vector3);
                return this.sub(a.copy(b).multiplyScalar(2 * this.dot(b)))
            }
        }(),
        angleTo: function (a) {
            a = this.dot(a) / (this.length() * a.length());
            return Math.acos(THREE.Math.clamp(a, -1, 1))
        },
        distanceTo: function (a) {
            return Math.sqrt(this.distanceToSquared(a))
        },
        distanceToSquared: function (a) {
            var b = this.x - a.x
                , c = this.y - a.y;
            a = this.z - a.z;
            return b * b + c * c + a * a
        },
        setEulerFromRotationMatrix: function (a, b) {
            console.error("REMOVED: Vector3's setEulerFromRotationMatrix has been removed in favor of Euler.setFromRotationMatrix(), please update your code.")
        },
        setEulerFromQuaternion: function (a, b) {
            console.error("REMOVED: Vector3's setEulerFromQuaternion: has been removed in favor of Euler.setFromQuaternion(), please update your code.")
        },
        getPositionFromMatrix: function (a) {
            console.warn("DEPRECATED: Vector3's .getPositionFromMatrix() has been renamed to .setFromMatrixPosition(). Please update your code.");
            return this.setFromMatrixPosition(a)
        },
        getScaleFromMatrix: function (a) {
            console.warn("DEPRECATED: Vector3's .getScaleFromMatrix() has been renamed to .setFromMatrixScale(). Please update your code.");
            return this.setFromMatrixScale(a)
        },
        getColumnFromMatrix: function (a, b) {
            console.warn("DEPRECATED: Vector3's .getColumnFromMatrix() has been renamed to .setFromMatrixColumn(). Please update your code.");
            return this.setFromMatrixColumn(a, b)
        },
        setFromMatrixPosition: function (a) {
            this.x = a.elements[12];
            this.y = a.elements[13];
            this.z = a.elements[14];
            return this
        },
        setFromMatrixScale: function (a) {
            var b = this.set(a.elements[0], a.elements[1], a.elements[2]).length()
                , c = this.set(a.elements[4], a.elements[5], a.elements[6]).length();
            a = this.set(a.elements[8], a.elements[9], a.elements[10]).length();
            this.x = b;
            this.y = c;
            this.z = a;
            return this
        },
        setFromMatrixColumn: function (a, b) {
            var c = 4 * a
                , d = b.elements;
            this.x = d[c];
            this.y = d[c + 1];
            this.z = d[c + 2];
            return this
        },
        equals: function (a) {
            return a.x === this.x && a.y === this.y && a.z === this.z
        },
        fromArray: function (a) {
            this.x = a[0];
            this.y = a[1];
            this.z = a[2];
            return this
        },
        toArray: function () {
            return [this.x, this.y, this.z]
        },
        clone: function () {
            return new THREE.Vector3(this.x, this.y, this.z)
        }
    };
    THREE.Box3 = function (a, b) {
        this.min = void 0 !== a ? a : new THREE.Vector3(Infinity, Infinity, Infinity);
        this.max = void 0 !== b ? b : new THREE.Vector3(-Infinity, -Infinity, -Infinity)
    }
        ;
    THREE.Box3.prototype = {
        constructor: THREE.Box3,
        set: function (a, b) {
            this.min.copy(a);
            this.max.copy(b);
            return this
        },
        addPoint: function (a) {
            a.x < this.min.x ? this.min.x = a.x : a.x > this.max.x && (this.max.x = a.x);
            a.y < this.min.y ? this.min.y = a.y : a.y > this.max.y && (this.max.y = a.y);
            a.z < this.min.z ? this.min.z = a.z : a.z > this.max.z && (this.max.z = a.z)
        },
        setFromPoints: function (a) {
            if (0 < a.length) {
                var b = a[0];
                this.min.copy(b);
                this.max.copy(b);
                for (var b = 1, c = a.length; b < c; b++)
                    this.addPoint(a[b])
            } else
                this.makeEmpty();
            return this
        },
        setFromCenterAndSize: function () {
            var a = new THREE.Vector3;
            return function (b, c) {
                var d = a.copy(c).multiplyScalar(0.5);
                this.min.copy(b).sub(d);
                this.max.copy(b).add(d);
                return this
            }
        }(),
        setFromObject: function () {
            var a = new THREE.Vector3;
            return function (b) {
                var c = this;
                b.updateMatrixWorld(!0);
                this.makeEmpty();
                b.traverse(function (b) {
                    if (void 0 !== b.geometry && void 0 !== b.geometry.vertices)
                        for (var e = b.geometry.vertices, f = 0, g = e.length; f < g; f++)
                            a.copy(e[f]),
                                a.applyMatrix4(b.matrixWorld),
                                c.expandByPoint(a)
                });
                return this
            }
        }(),
        copy: function (a) {
            this.min.copy(a.min);
            this.max.copy(a.max);
            return this
        },
        makeEmpty: function () {
            this.min.x = this.min.y = this.min.z = Infinity;
            this.max.x = this.max.y = this.max.z = -Infinity;
            return this
        },
        empty: function () {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        center: function (a) {
            return (a || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(0.5)
        },
        size: function (a) {
            return (a || new THREE.Vector3).subVectors(this.max, this.min)
        },
        expandByPoint: function (a) {
            this.min.min(a);
            this.max.max(a);
            return this
        },
        expandByVector: function (a) {
            this.min.sub(a);
            this.max.add(a);
            return this
        },
        expandByScalar: function (a) {
            this.min.addScalar(-a);
            this.max.addScalar(a);
            return this
        },
        containsPoint: function (a) {
            return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0
        },
        containsBox: function (a) {
            return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z ? !0 : !1
        },
        getParameter: function (a, b) {
            return (b || new THREE.Vector3).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
        },
        isIntersectionBox: function (a) {
            return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0
        },
        clampPoint: function (a, b) {
            return (b || new THREE.Vector3).copy(a).clamp(this.min, this.max)
        },
        distanceToPoint: function () {
            var a = new THREE.Vector3;
            return function (b) {
                return a.copy(b).clamp(this.min, this.max).sub(b).length()
            }
        }(),
        getBoundingSphere: function () {
            var a = new THREE.Vector3;
            return function (b) {
                b = b || new THREE.Sphere;
                b.center = this.center();
                b.radius = 0.5 * this.size(a).length();
                return b
            }
        }(),
        intersect: function (a) {
            this.min.max(a.min);
            this.max.min(a.max);
            return this
        },
        union: function (a) {
            this.min.min(a.min);
            this.max.max(a.max);
            return this
        },
        applyMatrix4: function () {
            var a = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
            return function (b) {
                a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(b);
                a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b);
                a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b);
                a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b);
                a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b);
                a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b);
                a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b);
                a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b);
                this.makeEmpty();
                this.setFromPoints(a);
                return this
            }
        }(),
        translate: function (a) {
            this.min.add(a);
            this.max.add(a);
            return this
        },
        equals: function (a) {
            return a.min.equals(this.min) && a.max.equals(this.max)
        },
        clone: function () {
            return (new THREE.Box3).copy(this)
        }
    };
    THREE.Sphere = function (a, b) {
        this.center = void 0 !== a ? a : new THREE.Vector3;
        this.radius = void 0 !== b ? b : 0
    }
        ;
    THREE.Sphere.prototype = {
        constructor: THREE.Sphere,
        set: function (a, b) {
            this.center.copy(a);
            this.radius = b;
            return this
        },
        setFromPoints: function () {
            var a = new THREE.Box3;
            return function (b, c) {
                var d = this.center;
                void 0 !== c ? d.copy(c) : a.setFromPoints(b).center(d);
                for (var e = 0, f = 0, g = b.length; f < g; f++)
                    e = Math.max(e, d.distanceToSquared(b[f]));
                this.radius = Math.sqrt(e);
                return this
            }
        }(),
        copy: function (a) {
            this.center.copy(a.center);
            this.radius = a.radius;
            return this
        },
        empty: function () {
            return 0 >= this.radius
        },
        containsPoint: function (a) {
            return a.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function (a) {
            return a.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function (a) {
            var b = this.radius + a.radius;
            return a.center.distanceToSquared(this.center) <= b * b
        },
        clampPoint: function (a, b) {
            var c = this.center.distanceToSquared(a)
                , d = b || new THREE.Vector3;
            d.copy(a);
            c > this.radius * this.radius && (d.sub(this.center).normalize(),
                d.multiplyScalar(this.radius).add(this.center));
            return d
        },
        getBoundingBox: function (a) {
            a = a || new THREE.Box3;
            a.set(this.center, this.center);
            a.expandByScalar(this.radius);
            return a
        },
        applyMatrix4: function (a) {
            this.center.applyMatrix4(a);
            this.radius *= a.getMaxScaleOnAxis();
            return this
        },
        translate: function (a) {
            this.center.add(a);
            return this
        },
        equals: function (a) {
            return a.center.equals(this.center) && a.radius === this.radius
        },
        clone: function () {
            return (new THREE.Sphere).copy(this)
        }
    };
    THREE.Euler = function (a, b, c, d) {
        this._x = a || 0;
        this._y = b || 0;
        this._z = c || 0;
        this._order = d || THREE.Euler.DefaultOrder
    }
        ;
    THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
    THREE.Euler.DefaultOrder = "XYZ";
    THREE.Euler.prototype = {
        constructor: THREE.Euler,
        _x: 0,
        _y: 0,
        _z: 0,
        _order: THREE.Euler.DefaultOrder,
        _quaternion: void 0,
        _updateQuaternion: function () {
            void 0 !== this._quaternion && this._quaternion.setFromEuler(this, !1)
        },
        get x() {
            return this._x
        },
        set x(a) {
            this._x = a;
            this._updateQuaternion()
        },
        get y() {
            return this._y
        },
        set y(a) {
            this._y = a;
            this._updateQuaternion()
        },
        get z() {
            return this._z
        },
        set z(a) {
            this._z = a;
            this._updateQuaternion()
        },
        get order() {
            return this._order
        },
        set order(a) {
            this._order = a;
            this._updateQuaternion()
        },
        set: function (a, b, c, d) {
            this._x = a;
            this._y = b;
            this._z = c;
            this._order = d || this._order;
            this._updateQuaternion();
            return this
        },
        copy: function (a) {
            this._x = a._x;
            this._y = a._y;
            this._z = a._z;
            this._order = a._order;
            this._updateQuaternion();
            return this
        },
        setFromRotationMatrix: function (a, b) {
            function c(a) {
                return Math.min(Math.max(a, -1), 1)
            }
            var d = a.elements
                , e = d[0]
                , f = d[4]
                , g = d[8]
                , h = d[1]
                , k = d[5]
                , l = d[9]
                , n = d[2]
                , m = d[6]
                , d = d[10];
            b = b || this._order;
            "XYZ" === b ? (this._y = Math.asin(c(g)),
                0.99999 > Math.abs(g) ? (this._x = Math.atan2(-l, d),
                    this._z = Math.atan2(-f, e)) : (this._x = Math.atan2(m, k),
                        this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-c(l)),
                            0.99999 > Math.abs(l) ? (this._y = Math.atan2(g, d),
                                this._z = Math.atan2(h, k)) : (this._y = Math.atan2(-n, e),
                                    this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(c(m)),
                                        0.99999 > Math.abs(m) ? (this._y = Math.atan2(-n, d),
                                            this._z = Math.atan2(-f, k)) : (this._y = 0,
                                                this._z = Math.atan2(h, e))) : "ZYX" === b ? (this._y = Math.asin(-c(n)),
                                                    0.99999 > Math.abs(n) ? (this._x = Math.atan2(m, d),
                                                        this._z = Math.atan2(h, e)) : (this._x = 0,
                                                            this._z = Math.atan2(-f, k))) : "YZX" === b ? (this._z = Math.asin(c(h)),
                                                                0.99999 > Math.abs(h) ? (this._x = Math.atan2(-l, k),
                                                                    this._y = Math.atan2(-n, e)) : (this._x = 0,
                                                                        this._y = Math.atan2(g, d))) : "XZY" === b ? (this._z = Math.asin(-c(f)),
                                                                            0.99999 > Math.abs(f) ? (this._x = Math.atan2(m, k),
                                                                                this._y = Math.atan2(g, e)) : (this._x = Math.atan2(-l, d),
                                                                                    this._y = 0)) : console.warn("WARNING: Euler.setFromRotationMatrix() given unsupported order: " + b);
            this._order = b;
            this._updateQuaternion();
            return this
        },
        setFromQuaternion: function (a, b, c) {
            function d(a) {
                return Math.min(Math.max(a, -1), 1)
            }
            var e = a.x * a.x
                , f = a.y * a.y
                , g = a.z * a.z
                , h = a.w * a.w;
            b = b || this._order;
            "XYZ" === b ? (this._x = Math.atan2(2 * (a.x * a.w - a.y * a.z), h - e - f + g),
                this._y = Math.asin(d(2 * (a.x * a.z + a.y * a.w))),
                this._z = Math.atan2(2 * (a.z * a.w - a.x * a.y), h + e - f - g)) : "YXZ" === b ? (this._x = Math.asin(d(2 * (a.x * a.w - a.y * a.z))),
                    this._y = Math.atan2(2 * (a.x * a.z + a.y * a.w), h - e - f + g),
                    this._z = Math.atan2(2 * (a.x * a.y + a.z * a.w), h - e + f - g)) : "ZXY" === b ? (this._x = Math.asin(d(2 * (a.x * a.w + a.y * a.z))),
                        this._y = Math.atan2(2 * (a.y * a.w - a.z * a.x), h - e - f + g),
                        this._z = Math.atan2(2 * (a.z * a.w - a.x * a.y), h - e + f - g)) : "ZYX" === b ? (this._x = Math.atan2(2 * (a.x * a.w + a.z * a.y), h - e - f + g),
                            this._y = Math.asin(d(2 * (a.y * a.w - a.x * a.z))),
                            this._z = Math.atan2(2 * (a.x * a.y + a.z * a.w), h + e - f - g)) : "YZX" === b ? (this._x = Math.atan2(2 * (a.x * a.w - a.z * a.y), h - e + f - g),
                                this._y = Math.atan2(2 * (a.y * a.w - a.x * a.z), h + e - f - g),
                                this._z = Math.asin(d(2 * (a.x * a.y + a.z * a.w)))) : "XZY" === b ? (this._x = Math.atan2(2 * (a.x * a.w + a.y * a.z), h - e + f - g),
                                    this._y = Math.atan2(2 * (a.x * a.z + a.y * a.w), h + e - f - g),
                                    this._z = Math.asin(d(2 * (a.z * a.w - a.x * a.y)))) : console.warn("WARNING: Euler.setFromQuaternion() given unsupported order: " + b);
            this._order = b;
            !1 !== c && this._updateQuaternion();
            return this
        },
        reorder: function () {
            var a = new THREE.Quaternion;
            return function (b) {
                a.setFromEuler(this);
                this.setFromQuaternion(a, b)
            }
        }(),
        fromArray: function (a) {
            this._x = a[0];
            this._y = a[1];
            this._z = a[2];
            void 0 !== a[3] && (this._order = a[3]);
            this._updateQuaternion();
            return this
        },
        toArray: function () {
            return [this._x, this._y, this._z, this._order]
        },
        equals: function (a) {
            return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order
        },
        clone: function () {
            return new THREE.Euler(this._x, this._y, this._z, this._order)
        }
    };
    THREE.Matrix3 = function (a, b, c, d, e, f, g, h, k) {
        this.elements = new Float32Array(9);
        this.set(void 0 !== a ? a : 1, b || 0, c || 0, d || 0, void 0 !== e ? e : 1, f || 0, g || 0, h || 0, void 0 !== k ? k : 1)
    }
        ;
    THREE.Matrix3.prototype = {
        constructor: THREE.Matrix3,
        set: function (a, b, c, d, e, f, g, h, k) {
            var l = this.elements;
            l[0] = a;
            l[3] = b;
            l[6] = c;
            l[1] = d;
            l[4] = e;
            l[7] = f;
            l[2] = g;
            l[5] = h;
            l[8] = k;
            return this
        },
        identity: function () {
            this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
            return this
        },
        copy: function (a) {
            a = a.elements;
            this.set(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]);
            return this
        },
        multiplyVector3: function (a) {
            console.warn("DEPRECATED: Matrix3's .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
            return a.applyMatrix3(this)
        },
        multiplyVector3Array: function () {
            var a = new THREE.Vector3;
            return function (b) {
                for (var c = 0, d = b.length; c < d; c += 3)
                    a.x = b[c],
                        a.y = b[c + 1],
                        a.z = b[c + 2],
                        a.applyMatrix3(this),
                        b[c] = a.x,
                        b[c + 1] = a.y,
                        b[c + 2] = a.z;
                return b
            }
        }(),
        multiplyScalar: function (a) {
            var b = this.elements;
            b[0] *= a;
            b[3] *= a;
            b[6] *= a;
            b[1] *= a;
            b[4] *= a;
            b[7] *= a;
            b[2] *= a;
            b[5] *= a;
            b[8] *= a;
            return this
        },
        determinant: function () {
            var a = this.elements
                , b = a[0]
                , c = a[1]
                , d = a[2]
                , e = a[3]
                , f = a[4]
                , g = a[5]
                , h = a[6]
                , k = a[7]
                , a = a[8];
            return b * f * a - b * g * k - c * e * a + c * g * h + d * e * k - d * f * h
        },
        getInverse: function (a, b) {
            var c = a.elements
                , d = this.elements;
            d[0] = c[10] * c[5] - c[6] * c[9];
            d[1] = -c[10] * c[1] + c[2] * c[9];
            d[2] = c[6] * c[1] - c[2] * c[5];
            d[3] = -c[10] * c[4] + c[6] * c[8];
            d[4] = c[10] * c[0] - c[2] * c[8];
            d[5] = -c[6] * c[0] + c[2] * c[4];
            d[6] = c[9] * c[4] - c[5] * c[8];
            d[7] = -c[9] * c[0] + c[1] * c[8];
            d[8] = c[5] * c[0] - c[1] * c[4];
            c = c[0] * d[0] + c[1] * d[3] + c[2] * d[6];
            if (0 === c) {
                if (b)
                    throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");
                console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");
                this.identity();
                return this
            }
            this.multiplyScalar(1 / c);
            return this
        },
        transpose: function () {
            var a, b = this.elements;
            a = b[1];
            b[1] = b[3];
            b[3] = a;
            a = b[2];
            b[2] = b[6];
            b[6] = a;
            a = b[5];
            b[5] = b[7];
            b[7] = a;
            return this
        },
        getNormalMatrix: function (a) {
            this.getInverse(a).transpose();
            return this
        },
        transposeIntoArray: function (a) {
            var b = this.elements;
            a[0] = b[0];
            a[1] = b[3];
            a[2] = b[6];
            a[3] = b[1];
            a[4] = b[4];
            a[5] = b[7];
            a[6] = b[2];
            a[7] = b[5];
            a[8] = b[8];
            return this
        },
        fromArray: function (a) {
            this.elements.set(a);
            return this
        },
        toArray: function () {
            var a = this.elements;
            return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]]
        },
        clone: function () {
            var a = this.elements;
            return new THREE.Matrix3(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8])
        }
    };
    THREE.Matrix4 = function (a, b, c, d, e, f, g, h, k, l, n, m, r, q, t, u) {
        var p = this.elements = new Float32Array(16);
        p[0] = void 0 !== a ? a : 1;
        p[4] = b || 0;
        p[8] = c || 0;
        p[12] = d || 0;
        p[1] = e || 0;
        p[5] = void 0 !== f ? f : 1;
        p[9] = g || 0;
        p[13] = h || 0;
        p[2] = k || 0;
        p[6] = l || 0;
        p[10] = void 0 !== n ? n : 1;
        p[14] = m || 0;
        p[3] = r || 0;
        p[7] = q || 0;
        p[11] = t || 0;
        p[15] = void 0 !== u ? u : 1
    }
        ;
    THREE.Matrix4.prototype = {
        constructor: THREE.Matrix4,
        set: function (a, b, c, d, e, f, g, h, k, l, n, m, r, q, t, u) {
            var p = this.elements;
            p[0] = a;
            p[4] = b;
            p[8] = c;
            p[12] = d;
            p[1] = e;
            p[5] = f;
            p[9] = g;
            p[13] = h;
            p[2] = k;
            p[6] = l;
            p[10] = n;
            p[14] = m;
            p[3] = r;
            p[7] = q;
            p[11] = t;
            p[15] = u;
            return this
        },
        identity: function () {
            this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this
        },
        copy: function (a) {
            this.elements.set(a.elements);
            return this
        },
        extractPosition: function (a) {
            console.warn("DEPRECATED: Matrix4's .extractPosition() has been renamed to .copyPosition().");
            return this.copyPosition(a)
        },
        copyPosition: function (a) {
            var b = this.elements;
            a = a.elements;
            b[12] = a[12];
            b[13] = a[13];
            b[14] = a[14];
            return this
        },
        extractRotation: function () {
            var a = new THREE.Vector3;
            return function (b) {
                var c = this.elements;
                b = b.elements;
                var d = 1 / a.set(b[0], b[1], b[2]).length()
                    , e = 1 / a.set(b[4], b[5], b[6]).length()
                    , f = 1 / a.set(b[8], b[9], b[10]).length();
                c[0] = b[0] * d;
                c[1] = b[1] * d;
                c[2] = b[2] * d;
                c[4] = b[4] * e;
                c[5] = b[5] * e;
                c[6] = b[6] * e;
                c[8] = b[8] * f;
                c[9] = b[9] * f;
                c[10] = b[10] * f;
                return this
            }
        }(),
        makeRotationFromEuler: function (a) {
            !1 === a instanceof THREE.Euler && console.error("ERROR: Matrix's .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");
            var b = this.elements
                , c = a.x
                , d = a.y
                , e = a.z
                , f = Math.cos(c)
                , c = Math.sin(c)
                , g = Math.cos(d)
                , d = Math.sin(d)
                , h = Math.cos(e)
                , e = Math.sin(e);
            if ("XYZ" === a.order) {
                a = f * h;
                var k = f * e
                    , l = c * h
                    , n = c * e;
                b[0] = g * h;
                b[4] = -g * e;
                b[8] = d;
                b[1] = k + l * d;
                b[5] = a - n * d;
                b[9] = -c * g;
                b[2] = n - a * d;
                b[6] = l + k * d;
                b[10] = f * g
            } else
                "YXZ" === a.order ? (a = g * h,
                    k = g * e,
                    l = d * h,
                    n = d * e,
                    b[0] = a + n * c,
                    b[4] = l * c - k,
                    b[8] = f * d,
                    b[1] = f * e,
                    b[5] = f * h,
                    b[9] = -c,
                    b[2] = k * c - l,
                    b[6] = n + a * c,
                    b[10] = f * g) : "ZXY" === a.order ? (a = g * h,
                        k = g * e,
                        l = d * h,
                        n = d * e,
                        b[0] = a - n * c,
                        b[4] = -f * e,
                        b[8] = l + k * c,
                        b[1] = k + l * c,
                        b[5] = f * h,
                        b[9] = n - a * c,
                        b[2] = -f * d,
                        b[6] = c,
                        b[10] = f * g) : "ZYX" === a.order ? (a = f * h,
                            k = f * e,
                            l = c * h,
                            n = c * e,
                            b[0] = g * h,
                            b[4] = l * d - k,
                            b[8] = a * d + n,
                            b[1] = g * e,
                            b[5] = n * d + a,
                            b[9] = k * d - l,
                            b[2] = -d,
                            b[6] = c * g,
                            b[10] = f * g) : "YZX" === a.order ? (a = f * g,
                                k = f * d,
                                l = c * g,
                                n = c * d,
                                b[0] = g * h,
                                b[4] = n - a * e,
                                b[8] = l * e + k,
                                b[1] = e,
                                b[5] = f * h,
                                b[9] = -c * h,
                                b[2] = -d * h,
                                b[6] = k * e + l,
                                b[10] = a - n * e) : "XZY" === a.order && (a = f * g,
                                    k = f * d,
                                    l = c * g,
                                    n = c * d,
                                    b[0] = g * h,
                                    b[4] = -e,
                                    b[8] = d * h,
                                    b[1] = a * e + n,
                                    b[5] = f * h,
                                    b[9] = k * e - l,
                                    b[2] = l * e - k,
                                    b[6] = c * h,
                                    b[10] = n * e + a);
            b[3] = 0;
            b[7] = 0;
            b[11] = 0;
            b[12] = 0;
            b[13] = 0;
            b[14] = 0;
            b[15] = 1;
            return this
        },
        setRotationFromQuaternion: function (a) {
            console.warn("DEPRECATED: Matrix4's .setRotationFromQuaternion() has been deprecated in favor of makeRotationFromQuaternion.  Please update your code.");
            return this.makeRotationFromQuaternion(a)
        },
        makeRotationFromQuaternion: function (a) {
            var b = this.elements
                , c = a.x
                , d = a.y
                , e = a.z
                , f = a.w
                , g = c + c
                , h = d + d
                , k = e + e;
            a = c * g;
            var l = c * h
                , c = c * k
                , n = d * h
                , d = d * k
                , e = e * k
                , g = f * g
                , h = f * h
                , f = f * k;
            b[0] = 1 - (n + e);
            b[4] = l - f;
            b[8] = c + h;
            b[1] = l + f;
            b[5] = 1 - (a + e);
            b[9] = d - g;
            b[2] = c - h;
            b[6] = d + g;
            b[10] = 1 - (a + n);
            b[3] = 0;
            b[7] = 0;
            b[11] = 0;
            b[12] = 0;
            b[13] = 0;
            b[14] = 0;
            b[15] = 1;
            return this
        },
        lookAt: function () {
            var a = new THREE.Vector3
                , b = new THREE.Vector3
                , c = new THREE.Vector3;
            return function (d, e, f) {
                var g = this.elements;
                c.subVectors(d, e).normalize();
                0 === c.length() && (c.z = 1);
                a.crossVectors(f, c).normalize();
                0 === a.length() && (c.x += 1E-4,
                    a.crossVectors(f, c).normalize());
                b.crossVectors(c, a);
                g[0] = a.x;
                g[4] = b.x;
                g[8] = c.x;
                g[1] = a.y;
                g[5] = b.y;
                g[9] = c.y;
                g[2] = a.z;
                g[6] = b.z;
                g[10] = c.z;
                return this
            }
        }(),
        multiply: function (a, b) {
            return void 0 !== b ? (console.warn("DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
                this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a)
        },
        multiplyMatrices: function (a, b) {
            var c = a.elements
                , d = b.elements
                , e = this.elements
                , f = c[0]
                , g = c[4]
                , h = c[8]
                , k = c[12]
                , l = c[1]
                , n = c[5]
                , m = c[9]
                , r = c[13]
                , q = c[2]
                , t = c[6]
                , u = c[10]
                , p = c[14]
                , s = c[3]
                , v = c[7]
                , w = c[11]
                , c = c[15]
                , A = d[0]
                , x = d[4]
                , C = d[8]
                , z = d[12]
                , y = d[1]
                , F = d[5]
                , D = d[9]
                , E = d[13]
                , H = d[2]
                , I = d[6]
                , J = d[10]
                , K = d[14]
                , L = d[3]
                , M = d[7]
                , N = d[11]
                , d = d[15];
            e[0] = f * A + g * y + h * H + k * L;
            e[4] = f * x + g * F + h * I + k * M;
            e[8] = f * C + g * D + h * J + k * N;
            e[12] = f * z + g * E + h * K + k * d;
            e[1] = l * A + n * y + m * H + r * L;
            e[5] = l * x + n * F + m * I + r * M;
            e[9] = l * C + n * D + m * J + r * N;
            e[13] = l * z + n * E + m * K + r * d;
            e[2] = q * A + t * y + u * H + p * L;
            e[6] = q * x + t * F + u * I + p * M;
            e[10] = q * C + t * D + u * J + p * N;
            e[14] = q * z + t * E + u * K + p * d;
            e[3] = s * A + v * y + w * H + c * L;
            e[7] = s * x + v * F + w * I + c * M;
            e[11] = s * C + v * D + w * J + c * N;
            e[15] = s * z + v * E + w * K + c * d;
            return this
        },
        multiplyToArray: function (a, b, c) {
            var d = this.elements;
            this.multiplyMatrices(a, b);
            c[0] = d[0];
            c[1] = d[1];
            c[2] = d[2];
            c[3] = d[3];
            c[4] = d[4];
            c[5] = d[5];
            c[6] = d[6];
            c[7] = d[7];
            c[8] = d[8];
            c[9] = d[9];
            c[10] = d[10];
            c[11] = d[11];
            c[12] = d[12];
            c[13] = d[13];
            c[14] = d[14];
            c[15] = d[15];
            return this
        },
        multiplyScalar: function (a) {
            var b = this.elements;
            b[0] *= a;
            b[4] *= a;
            b[8] *= a;
            b[12] *= a;
            b[1] *= a;
            b[5] *= a;
            b[9] *= a;
            b[13] *= a;
            b[2] *= a;
            b[6] *= a;
            b[10] *= a;
            b[14] *= a;
            b[3] *= a;
            b[7] *= a;
            b[11] *= a;
            b[15] *= a;
            return this
        },
        multiplyVector3: function (a) {
            console.warn("DEPRECATED: Matrix4's .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
            return a.applyProjection(this)
        },
        multiplyVector4: function (a) {
            console.warn("DEPRECATED: Matrix4's .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this)
        },
        multiplyVector3Array: function () {
            var a = new THREE.Vector3;
            return function (b) {
                for (var c = 0, d = b.length; c < d; c += 3)
                    a.x = b[c],
                        a.y = b[c + 1],
                        a.z = b[c + 2],
                        a.applyProjection(this),
                        b[c] = a.x,
                        b[c + 1] = a.y,
                        b[c + 2] = a.z;
                return b
            }
        }(),
        rotateAxis: function (a) {
            console.warn("DEPRECATED: Matrix4's .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
            a.transformDirection(this)
        },
        crossVector: function (a) {
            console.warn("DEPRECATED: Matrix4's .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
            return a.applyMatrix4(this)
        },
        determinant: function () {
            var a = this.elements
                , b = a[0]
                , c = a[4]
                , d = a[8]
                , e = a[12]
                , f = a[1]
                , g = a[5]
                , h = a[9]
                , k = a[13]
                , l = a[2]
                , n = a[6]
                , m = a[10]
                , r = a[14];
            return a[3] * (+e * h * n - d * k * n - e * g * m + c * k * m + d * g * r - c * h * r) + a[7] * (+b * h * r - b * k * m + e * f * m - d * f * r + d * k * l - e * h * l) + a[11] * (+b * k * n - b * g * r - e * f * n + c * f * r + e * g * l - c * k * l) + a[15] * (-d * g * l - b * h * n + b * g * m + d * f * n - c * f * m + c * h * l)
        },
        transpose: function () {
            var a = this.elements, b;
            b = a[1];
            a[1] = a[4];
            a[4] = b;
            b = a[2];
            a[2] = a[8];
            a[8] = b;
            b = a[6];
            a[6] = a[9];
            a[9] = b;
            b = a[3];
            a[3] = a[12];
            a[12] = b;
            b = a[7];
            a[7] = a[13];
            a[13] = b;
            b = a[11];
            a[11] = a[14];
            a[14] = b;
            return this
        },
        flattenToArray: function (a) {
            var b = this.elements;
            a[0] = b[0];
            a[1] = b[1];
            a[2] = b[2];
            a[3] = b[3];
            a[4] = b[4];
            a[5] = b[5];
            a[6] = b[6];
            a[7] = b[7];
            a[8] = b[8];
            a[9] = b[9];
            a[10] = b[10];
            a[11] = b[11];
            a[12] = b[12];
            a[13] = b[13];
            a[14] = b[14];
            a[15] = b[15];
            return a
        },
        flattenToArrayOffset: function (a, b) {
            var c = this.elements;
            a[b] = c[0];
            a[b + 1] = c[1];
            a[b + 2] = c[2];
            a[b + 3] = c[3];
            a[b + 4] = c[4];
            a[b + 5] = c[5];
            a[b + 6] = c[6];
            a[b + 7] = c[7];
            a[b + 8] = c[8];
            a[b + 9] = c[9];
            a[b + 10] = c[10];
            a[b + 11] = c[11];
            a[b + 12] = c[12];
            a[b + 13] = c[13];
            a[b + 14] = c[14];
            a[b + 15] = c[15];
            return a
        },
        getPosition: function () {
            var a = new THREE.Vector3;
            return function () {
                console.warn("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
                var b = this.elements;
                return a.set(b[12], b[13], b[14])
            }
        }(),
        setPosition: function (a) {
            var b = this.elements;
            b[12] = a.x;
            b[13] = a.y;
            b[14] = a.z;
            return this
        },
        getInverse: function (a, b) {
            var c = this.elements
                , d = a.elements
                , e = d[0]
                , f = d[4]
                , g = d[8]
                , h = d[12]
                , k = d[1]
                , l = d[5]
                , n = d[9]
                , m = d[13]
                , r = d[2]
                , q = d[6]
                , t = d[10]
                , u = d[14]
                , p = d[3]
                , s = d[7]
                , v = d[11]
                , d = d[15];
            c[0] = n * u * s - m * t * s + m * q * v - l * u * v - n * q * d + l * t * d;
            c[4] = h * t * s - g * u * s - h * q * v + f * u * v + g * q * d - f * t * d;
            c[8] = g * m * s - h * n * s + h * l * v - f * m * v - g * l * d + f * n * d;
            c[12] = h * n * q - g * m * q - h * l * t + f * m * t + g * l * u - f * n * u;
            c[1] = m * t * p - n * u * p - m * r * v + k * u * v + n * r * d - k * t * d;
            c[5] = g * u * p - h * t * p + h * r * v - e * u * v - g * r * d + e * t * d;
            c[9] = h * n * p - g * m * p - h * k * v + e * m * v + g * k * d - e * n * d;
            c[13] = g * m * r - h * n * r + h * k * t - e * m * t - g * k * u + e * n * u;
            c[2] = l * u * p - m * q * p + m * r * s - k * u * s - l * r * d + k * q * d;
            c[6] = h * q * p - f * u * p - h * r * s + e * u * s + f * r * d - e * q * d;
            c[10] = f * m * p - h * l * p + h * k * s - e * m * s - f * k * d + e * l * d;
            c[14] = h * l * r - f * m * r - h * k * q + e * m * q + f * k * u - e * l * u;
            c[3] = n * q * p - l * t * p - n * r * s + k * t * s + l * r * v - k * q * v;
            c[7] = f * t * p - g * q * p + g * r * s - e * t * s - f * r * v + e * q * v;
            c[11] = g * l * p - f * n * p - g * k * s + e * n * s + f * k * v - e * l * v;
            c[15] = f * n * r - g * l * r + g * k * q - e * n * q - f * k * t + e * l * t;
            c = e * c[0] + k * c[4] + r * c[8] + p * c[12];
            if (0 == c) {
                if (b)
                    throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");
                console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");
                this.identity();
                return this
            }
            this.multiplyScalar(1 / c);
            return this
        },
        translate: function (a) {
            console.warn("DEPRECATED: Matrix4's .translate() has been removed.")
        },
        rotateX: function (a) {
            console.warn("DEPRECATED: Matrix4's .rotateX() has been removed.")
        },
        rotateY: function (a) {
            console.warn("DEPRECATED: Matrix4's .rotateY() has been removed.")
        },
        rotateZ: function (a) {
            console.warn("DEPRECATED: Matrix4's .rotateZ() has been removed.")
        },
        rotateByAxis: function (a, b) {
            console.warn("DEPRECATED: Matrix4's .rotateByAxis() has been removed.")
        },
        scale: function (a) {
            var b = this.elements
                , c = a.x
                , d = a.y;
            a = a.z;
            b[0] *= c;
            b[4] *= d;
            b[8] *= a;
            b[1] *= c;
            b[5] *= d;
            b[9] *= a;
            b[2] *= c;
            b[6] *= d;
            b[10] *= a;
            b[3] *= c;
            b[7] *= d;
            b[11] *= a;
            return this
        },
        getMaxScaleOnAxis: function () {
            var a = this.elements;
            return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], Math.max(a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10])))
        },
        makeTranslation: function (a, b, c) {
            this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
            return this
        },
        makeRotationX: function (a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
            return this
        },
        makeRotationY: function (a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
            return this
        },
        makeRotationZ: function (a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            return this
        },
        makeRotationAxis: function (a, b) {
            var c = Math.cos(b)
                , d = Math.sin(b)
                , e = 1 - c
                , f = a.x
                , g = a.y
                , h = a.z
                , k = e * f
                , l = e * g;
            this.set(k * f + c, k * g - d * h, k * h + d * g, 0, k * g + d * h, l * g + c, l * h - d * f, 0, k * h - d * g, l * h + d * f, e * h * h + c, 0, 0, 0, 0, 1);
            return this
        },
        makeScale: function (a, b, c) {
            this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
            return this
        },
        compose: function (a, b, c) {
            this.makeRotationFromQuaternion(b);
            this.scale(c);
            this.setPosition(a);
            return this
        },
        decompose: function () {
            var a = new THREE.Vector3
                , b = new THREE.Matrix4;
            return function (c, d, e) {
                var f = this.elements
                    , g = a.set(f[0], f[1], f[2]).length()
                    , h = a.set(f[4], f[5], f[6]).length()
                    , k = a.set(f[8], f[9], f[10]).length();
                0 > this.determinant() && (g = -g);
                c.x = f[12];
                c.y = f[13];
                c.z = f[14];
                b.elements.set(this.elements);
                c = 1 / g;
                var f = 1 / h
                    , l = 1 / k;
                b.elements[0] *= c;
                b.elements[1] *= c;
                b.elements[2] *= c;
                b.elements[4] *= f;
                b.elements[5] *= f;
                b.elements[6] *= f;
                b.elements[8] *= l;
                b.elements[9] *= l;
                b.elements[10] *= l;
                d.setFromRotationMatrix(b);
                e.x = g;
                e.y = h;
                e.z = k;
                return this
            }
        }(),
        makeFrustum: function (a, b, c, d, e, f) {
            var g = this.elements;
            g[0] = 2 * e / (b - a);
            g[4] = 0;
            g[8] = (b + a) / (b - a);
            g[12] = 0;
            g[1] = 0;
            g[5] = 2 * e / (d - c);
            g[9] = (d + c) / (d - c);
            g[13] = 0;
            g[2] = 0;
            g[6] = 0;
            g[10] = -(f + e) / (f - e);
            g[14] = -2 * f * e / (f - e);
            g[3] = 0;
            g[7] = 0;
            g[11] = -1;
            g[15] = 0;
            return this
        },
        makePerspective: function (a, b, c, d) {
            a = c * Math.tan(THREE.Math.degToRad(0.5 * a));
            var e = -a;
            return this.makeFrustum(e * b, a * b, e, a, c, d)
        },
        makeOrthographic: function (a, b, c, d, e, f) {
            var g = this.elements
                , h = b - a
                , k = c - d
                , l = f - e;
            g[0] = 2 / h;
            g[4] = 0;
            g[8] = 0;
            g[12] = -((b + a) / h);
            g[1] = 0;
            g[5] = 2 / k;
            g[9] = 0;
            g[13] = -((c + d) / k);
            g[2] = 0;
            g[6] = 0;
            g[10] = -2 / l;
            g[14] = -((f + e) / l);
            g[3] = 0;
            g[7] = 0;
            g[11] = 0;
            g[15] = 1;
            return this
        },
        fromArray: function (a) {
            this.elements.set(a);
            return this
        },
        toArray: function () {
            var a = this.elements;
            return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]]
        },
        clone: function () {
            var a = this.elements;
            return new THREE.Matrix4(a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15])
        }
    };
    THREE.Object3D = function () {
        this.id = THREE.Object3DIdCount++;
        this.uuid = THREE.Math.generateUUID();
        this.name = "";
        this.parent = void 0;
        this.children = [];
        this.up = new THREE.Vector3(0, 1, 0);
        this.position = new THREE.Vector3;
        this._rotation = new THREE.Euler;
        this._quaternion = new THREE.Quaternion;
        this.scale = new THREE.Vector3(1, 1, 1);
        this._rotation._quaternion = this.quaternion;
        this._quaternion._euler = this.rotation;
        this.renderDepth = null;
        this.rotationAutoUpdate = !0;
        this.matrix = new THREE.Matrix4;
        this.matrixWorld = new THREE.Matrix4;
        this.visible = this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0;
        this.receiveShadow = this.castShadow = !1;
        this.frustumCulled = !0;
        this.userData = {}
    }
        ;
    THREE.Object3D.prototype = {
        constructor: THREE.Object3D,
        get rotation() {
            return this._rotation
        },
        set rotation(a) {
            this._rotation = a;
            this._rotation._quaternion = this._quaternion;
            this._quaternion._euler = this._rotation;
            this._rotation._updateQuaternion()
        },
        get quaternion() {
            return this._quaternion
        },
        set quaternion(a) {
            this._quaternion = a;
            this._quaternion._euler = this._rotation;
            this._rotation._quaternion = this._quaternion;
            this._quaternion._updateEuler()
        },
        get eulerOrder() {
            console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");
            return this.rotation.order
        },
        set eulerOrder(a) {
            console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");
            this.rotation.order = a
        },
        get useQuaternion() {
            console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")
        },
        set useQuaternion(a) {
            console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")
        },
        applyMatrix: function (a) {
            this.matrix.multiplyMatrices(a, this.matrix);
            this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        setRotationFromAxisAngle: function (a, b) {
            this.quaternion.setFromAxisAngle(a, b)
        },
        setRotationFromEuler: function (a) {
            this.quaternion.setFromEuler(a, !0)
        },
        setRotationFromMatrix: function (a) {
            this.quaternion.setFromRotationMatrix(a)
        },
        setRotationFromQuaternion: function (a) {
            this.quaternion.copy(a)
        },
        rotateOnAxis: function () {
            var a = new THREE.Quaternion;
            return function (b, c) {
                a.setFromAxisAngle(b, c);
                this.quaternion.multiply(a);
                return this
            }
        }(),
        rotateX: function () {
            var a = new THREE.Vector3(1, 0, 0);
            return function (b) {
                return this.rotateOnAxis(a, b)
            }
        }(),
        rotateY: function () {
            var a = new THREE.Vector3(0, 1, 0);
            return function (b) {
                return this.rotateOnAxis(a, b)
            }
        }(),
        rotateZ: function () {
            var a = new THREE.Vector3(0, 0, 1);
            return function (b) {
                return this.rotateOnAxis(a, b)
            }
        }(),
        translateOnAxis: function () {
            var a = new THREE.Vector3;
            return function (b, c) {
                a.copy(b);
                a.applyQuaternion(this.quaternion);
                this.position.add(a.multiplyScalar(c));
                return this
            }
        }(),
        translate: function (a, b) {
            console.warn("DEPRECATED: Object3D's .translate() has been removed. Use .translateOnAxis( axis, distance ) instead. Note args have been changed.");
            return this.translateOnAxis(b, a)
        },
        translateX: function () {
            var a = new THREE.Vector3(1, 0, 0);
            return function (b) {
                return this.translateOnAxis(a, b)
            }
        }(),
        translateY: function () {
            var a = new THREE.Vector3(0, 1, 0);
            return function (b) {
                return this.translateOnAxis(a, b)
            }
        }(),
        translateZ: function () {
            var a = new THREE.Vector3(0, 0, 1);
            return function (b) {
                return this.translateOnAxis(a, b)
            }
        }(),
        localToWorld: function (a) {
            return a.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function () {
            var a = new THREE.Matrix4;
            return function (b) {
                return b.applyMatrix4(a.getInverse(this.matrixWorld))
            }
        }(),
        lookAt: function () {
            var a = new THREE.Matrix4;
            return function (b) {
                a.lookAt(b, this.position, this.up);
                this.quaternion.setFromRotationMatrix(a)
            }
        }(),
        add: function (a) {
            if (a === this)
                console.warn("THREE.Object3D.add: An object can't be added as a child of itself.");
            else if (a instanceof THREE.Object3D) {
                void 0 !== a.parent && a.parent.remove(a);
                a.parent = this;
                a.dispatchEvent({
                    type: "added"
                });
                this.children.push(a);
                for (var b = this; void 0 !== b.parent;)
                    b = b.parent;
                void 0 !== b && b instanceof THREE.Scene && b.__addObject(a)
            }
        },
        remove: function (a) {
            var b = this.children.indexOf(a);
            if (-1 !== b) {
                a.parent = void 0;
                a.dispatchEvent({
                    type: "removed"
                });
                this.children.splice(b, 1);
                for (b = this; void 0 !== b.parent;)
                    b = b.parent;
                void 0 !== b && b instanceof THREE.Scene && b.__removeObject(a)
            }
        },
        traverse: function (a) {
            a(this);
            for (var b = 0, c = this.children.length; b < c; b++)
                this.children[b].traverse(a)
        },
        getObjectById: function (a, b) {
            for (var c = 0, d = this.children.length; c < d; c++) {
                var e = this.children[c];
                if (e.id === a || !0 === b && (e = e.getObjectById(a, b),
                    void 0 !== e))
                    return e
            }
        },
        getObjectByName: function (a, b) {
            for (var c = 0, d = this.children.length; c < d; c++) {
                var e = this.children[c];
                if (e.name === a || !0 === b && (e = e.getObjectByName(a, b),
                    void 0 !== e))
                    return e
            }
        },
        getChildByName: function (a, b) {
            console.warn("DEPRECATED: Object3D's .getChildByName() has been renamed to .getObjectByName().");
            return this.getObjectByName(a, b)
        },
        getDescendants: function (a) {
            void 0 === a && (a = []);
            Array.prototype.push.apply(a, this.children);
            for (var b = 0, c = this.children.length; b < c; b++)
                this.children[b].getDescendants(a);
            return a
        },
        updateMatrix: function () {
            this.matrix.compose(this.position, this.quaternion, this.scale);
            this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function (a) {
            !0 === this.matrixAutoUpdate && this.updateMatrix();
            if (!0 === this.matrixWorldNeedsUpdate || !0 === a)
                void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
                    this.matrixWorldNeedsUpdate = !1,
                    a = !0;
            for (var b = 0, c = this.children.length; b < c; b++)
                this.children[b].updateMatrixWorld(a)
        },
        clone: function (a, b) {
            void 0 === a && (a = new THREE.Object3D);
            void 0 === b && (b = !0);
            a.name = this.name;
            a.up.copy(this.up);
            a.position.copy(this.position);
            a.quaternion.copy(this.quaternion);
            a.scale.copy(this.scale);
            a.renderDepth = this.renderDepth;
            a.rotationAutoUpdate = this.rotationAutoUpdate;
            a.matrix.copy(this.matrix);
            a.matrixWorld.copy(this.matrixWorld);
            a.matrixAutoUpdate = this.matrixAutoUpdate;
            a.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate;
            a.visible = this.visible;
            a.castShadow = this.castShadow;
            a.receiveShadow = this.receiveShadow;
            a.frustumCulled = this.frustumCulled;
            a.userData = JSON.parse(JSON.stringify(this.userData));
            if (!0 === b)
                for (var c = 0; c < this.children.length; c++)
                    a.add(this.children[c].clone());
            return a
        }
    };
    THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);
    THREE.Object3DIdCount = 0;
    THREE.Camera = function () {
        THREE.Object3D.call(this);
        this.matrixWorldInverse = new THREE.Matrix4;
        this.projectionMatrix = new THREE.Matrix4
    }
        ;
    THREE.Camera.prototype = Object.create(THREE.Object3D.prototype);
    THREE.Camera.prototype.lookAt = function () {
        var a = new THREE.Matrix4;
        return function (b) {
            a.lookAt(this.position, b, this.up);
            this.quaternion.setFromRotationMatrix(a)
        }
    }();
    THREE.Camera.prototype.clone = function (a) {
        void 0 === a && (a = new THREE.Camera);
        THREE.Object3D.prototype.clone.call(this, a);
        a.matrixWorldInverse.copy(this.matrixWorldInverse);
        a.projectionMatrix.copy(this.projectionMatrix);
        return a
    }
        ;
    THREE.PerspectiveCamera = function (a, b, c, d) {
        THREE.Camera.call(this);
        this.fov = void 0 !== a ? a : 50;
        this.aspect = void 0 !== b ? b : 1;
        this.near = void 0 !== c ? c : 0.1;
        this.far = void 0 !== d ? d : 2E3;
        this.updateProjectionMatrix()
    }
        ;
    THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype);
    THREE.PerspectiveCamera.prototype.setLens = function (a, b) {
        void 0 === b && (b = 24);
        this.fov = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a)));
        this.updateProjectionMatrix()
    }
        ;
    THREE.PerspectiveCamera.prototype.setViewOffset = function (a, b, c, d, e, f) {
        this.fullWidth = a;
        this.fullHeight = b;
        this.x = c;
        this.y = d;
        this.width = e;
        this.height = f;
        this.updateProjectionMatrix()
    }
        ;
    THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
        if (this.fullWidth) {
            var a = this.fullWidth / this.fullHeight
                , b = Math.tan(THREE.Math.degToRad(0.5 * this.fov)) * this.near
                , c = -b
                , d = a * c
                , a = Math.abs(a * b - d)
                , c = Math.abs(b - c);
            this.projectionMatrix.makeFrustum(d + this.x * a / this.fullWidth, d + (this.x + this.width) * a / this.fullWidth, b - (this.y + this.height) * c / this.fullHeight, b - this.y * c / this.fullHeight, this.near, this.far)
        } else
            this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far)
    }
        ;
    THREE.PerspectiveCamera.prototype.clone = function () {
        var a = new THREE.PerspectiveCamera;
        THREE.Camera.prototype.clone.call(this, a);
        a.fov = this.fov;
        a.aspect = this.aspect;
        a.near = this.near;
        a.far = this.far;
        return a
    }
        ;
    THREE.Ray = function (a, b) {
        this.origin = void 0 !== a ? a : new THREE.Vector3;
        this.direction = void 0 !== b ? b : new THREE.Vector3
    }
        ;
    THREE.Ray.prototype = {
        constructor: THREE.Ray,
        set: function (a, b) {
            this.origin.copy(a);
            this.direction.copy(b);
            return this
        },
        copy: function (a) {
            this.origin.copy(a.origin);
            this.direction.copy(a.direction);
            return this
        },
        at: function (a, b) {
            return (b || new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)
        },
        recast: function () {
            var a = new THREE.Vector3;
            return function (b) {
                this.origin.copy(this.at(b, a));
                return this
            }
        }(),
        closestPointToPoint: function (a, b) {
            var c = b || new THREE.Vector3;
            c.subVectors(a, this.origin);
            var d = c.dot(this.direction);
            return 0 > d ? c.copy(this.origin) : c.copy(this.direction).multiplyScalar(d).add(this.origin)
        },
        distanceToPoint: function () {
            var a = new THREE.Vector3;
            return function (b) {
                var c = a.subVectors(b, this.origin).dot(this.direction);
                if (0 > c)
                    return this.origin.distanceTo(b);
                a.copy(this.direction).multiplyScalar(c).add(this.origin);
                return a.distanceTo(b)
            }
        }(),
        distanceSqToSegment: function (a, b, c, d) {
            var e = a.clone().add(b).multiplyScalar(0.5)
                , f = b.clone().sub(a).normalize()
                , g = 0.5 * a.distanceTo(b)
                , h = this.origin.clone().sub(e);
            a = -this.direction.dot(f);
            b = h.dot(this.direction);
            var k = -h.dot(f), l = h.lengthSq(), n = Math.abs(1 - a * a), m, r;
            0 <= n ? (h = a * k - b,
                m = a * b - k,
                r = g * n,
                0 <= h ? m >= -r ? m <= r ? (g = 1 / n,
                    h *= g,
                    m *= g,
                    a = h * (h + a * m + 2 * b) + m * (a * h + m + 2 * k) + l) : (m = g,
                        h = Math.max(0, -(a * m + b)),
                        a = -h * h + m * (m + 2 * k) + l) : (m = -g,
                            h = Math.max(0, -(a * m + b)),
                            a = -h * h + m * (m + 2 * k) + l) : m <= -r ? (h = Math.max(0, -(-a * g + b)),
                                m = 0 < h ? -g : Math.min(Math.max(-g, -k), g),
                                a = -h * h + m * (m + 2 * k) + l) : m <= r ? (h = 0,
                                    m = Math.min(Math.max(-g, -k), g),
                                    a = m * (m + 2 * k) + l) : (h = Math.max(0, -(a * g + b)),
                                        m = 0 < h ? g : Math.min(Math.max(-g, -k), g),
                                        a = -h * h + m * (m + 2 * k) + l)) : (m = 0 < a ? -g : g,
                                            h = Math.max(0, -(a * m + b)),
                                            a = -h * h + m * (m + 2 * k) + l);
            c && c.copy(this.direction.clone().multiplyScalar(h).add(this.origin));
            d && d.copy(f.clone().multiplyScalar(m).add(e));
            return a
        },
        isIntersectionSphere: function (a) {
            return this.distanceToPoint(a.center) <= a.radius
        },
        isIntersectionPlane: function (a) {
            var b = a.distanceToPoint(this.origin);
            return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1
        },
        distanceToPlane: function (a) {
            var b = a.normal.dot(this.direction);
            if (0 == b)
                return 0 == a.distanceToPoint(this.origin) ? 0 : null;
            a = -(this.origin.dot(a.normal) + a.constant) / b;
            return 0 <= a ? a : null
        },
        intersectPlane: function (a, b) {
            var c = this.distanceToPlane(a);
            return null === c ? null : this.at(c, b)
        },
        isIntersectionBox: function () {
            var a = new THREE.Vector3;
            return function (b) {
                return null !== this.intersectBox(b, a)
            }
        }(),
        intersectBox: function (a, b) {
            var c, d, e, f, g;
            d = 1 / this.direction.x;
            f = 1 / this.direction.y;
            g = 1 / this.direction.z;
            var h = this.origin;
            0 <= d ? (c = (a.min.x - h.x) * d,
                d *= a.max.x - h.x) : (c = (a.max.x - h.x) * d,
                    d *= a.min.x - h.x);
            0 <= f ? (e = (a.min.y - h.y) * f,
                f *= a.max.y - h.y) : (e = (a.max.y - h.y) * f,
                    f *= a.min.y - h.y);
            if (c > f || e > d)
                return null;
            if (e > c || c !== c)
                c = e;
            if (f < d || d !== d)
                d = f;
            0 <= g ? (e = (a.min.z - h.z) * g,
                g *= a.max.z - h.z) : (e = (a.max.z - h.z) * g,
                    g *= a.min.z - h.z);
            if (c > g || e > d)
                return null;
            if (e > c || c !== c)
                c = e;
            if (g < d || d !== d)
                d = g;
            return 0 > d ? null : this.at(0 <= c ? c : d, b)
        },
        intersectTriangle: function () {
            var a = new THREE.Vector3
                , b = new THREE.Vector3
                , c = new THREE.Vector3
                , d = new THREE.Vector3;
            return function (e, f, g, h, k) {
                b.subVectors(f, e);
                c.subVectors(g, e);
                d.crossVectors(b, c);
                f = this.direction.dot(d);
                if (0 < f) {
                    if (h)
                        return null;
                    h = 1
                } else if (0 > f)
                    h = -1,
                        f = -f;
                else
                    return null;
                a.subVectors(this.origin, e);
                e = h * this.direction.dot(c.crossVectors(a, c));
                if (0 > e)
                    return null;
                g = h * this.direction.dot(b.cross(a));
                if (0 > g || e + g > f)
                    return null;
                e = -h * a.dot(d);
                return 0 > e ? null : this.at(e / f, k)
            }
        }(),
        applyMatrix4: function (a) {
            this.direction.add(this.origin).applyMatrix4(a);
            this.origin.applyMatrix4(a);
            this.direction.sub(this.origin);
            this.direction.normalize();
            return this
        },
        equals: function (a) {
            return a.origin.equals(this.origin) && a.direction.equals(this.direction)
        },
        clone: function () {
            return (new THREE.Ray).copy(this)
        }
    };
    THREE.Plane = function (a, b) {
        this.normal = void 0 !== a ? a : new THREE.Vector3(1, 0, 0);
        this.constant = void 0 !== b ? b : 0
    }
        ;
    THREE.Plane.prototype = {
        constructor: THREE.Plane,
        set: function (a, b) {
            this.normal.copy(a);
            this.constant = b;
            return this
        },
        setComponents: function (a, b, c, d) {
            this.normal.set(a, b, c);
            this.constant = d;
            return this
        },
        setFromNormalAndCoplanarPoint: function (a, b) {
            this.normal.copy(a);
            this.constant = -b.dot(this.normal);
            return this
        },
        setFromCoplanarPoints: function () {
            var a = new THREE.Vector3
                , b = new THREE.Vector3;
            return function (c, d, e) {
                d = a.subVectors(e, d).cross(b.subVectors(c, d)).normalize();
                this.setFromNormalAndCoplanarPoint(d, c);
                return this
            }
        }(),
        copy: function (a) {
            this.normal.copy(a.normal);
            this.constant = a.constant;
            return this
        },
        normalize: function () {
            var a = 1 / this.normal.length();
            this.normal.multiplyScalar(a);
            this.constant *= a;
            return this
        },
        negate: function () {
            this.constant *= -1;
            this.normal.negate();
            return this
        },
        distanceToPoint: function (a) {
            return this.normal.dot(a) + this.constant
        },
        distanceToSphere: function (a) {
            return this.distanceToPoint(a.center) - a.radius
        },
        projectPoint: function (a, b) {
            return this.orthoPoint(a, b).sub(a).negate()
        },
        orthoPoint: function (a, b) {
            var c = this.distanceToPoint(a);
            return (b || new THREE.Vector3).copy(this.normal).multiplyScalar(c)
        },
        isIntersectionLine: function (a) {
            var b = this.distanceToPoint(a.start);
            a = this.distanceToPoint(a.end);
            return 0 > b && 0 < a || 0 > a && 0 < b
        },
        intersectLine: function () {
            var a = new THREE.Vector3;
            return function (b, c) {
                var d = c || new THREE.Vector3
                    , e = b.delta(a)
                    , f = this.normal.dot(e);
                if (0 == f) {
                    if (0 == this.distanceToPoint(b.start))
                        return d.copy(b.start)
                } else
                    return f = -(b.start.dot(this.normal) + this.constant) / f,
                        0 > f || 1 < f ? void 0 : d.copy(e).multiplyScalar(f).add(b.start)
            }
        }(),
        coplanarPoint: function (a) {
            return (a || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function () {
            var a = new THREE.Vector3
                , b = new THREE.Vector3
                , c = new THREE.Matrix3;
            return function (d, e) {
                var f = e || c.getNormalMatrix(d)
                    , f = a.copy(this.normal).applyMatrix3(f)
                    , g = this.coplanarPoint(b);
                g.applyMatrix4(d);
                this.setFromNormalAndCoplanarPoint(f, g);
                return this
            }
        }(),
        translate: function (a) {
            this.constant -= a.dot(this.normal);
            return this
        },
        equals: function (a) {
            return a.normal.equals(this.normal) && a.constant == this.constant
        },
        clone: function () {
            return (new THREE.Plane).copy(this)
        }
    };
    THREE.CSS3DObject = function (a) {
        THREE.Object3D.call(this);
        this.element = a;
        this.done = !1;
        this.element.style.position = "absolute";
        this.addEventListener("removed", function (a) {
            if (null !== this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
                for (var c = 0, d = this.children.length; c < d; c++)
                    this.children[c].dispatchEvent(a)
            }
        })
    }
        ;
    THREE.CSS3DObject.prototype = Object.create(THREE.Object3D.prototype);
    THREE.CSS3DSprite = function (a) {
        THREE.CSS3DObject.call(this, a)
    }
        ;
    THREE.CSS3DSprite.prototype = Object.create(THREE.CSS3DObject.prototype);
    THREE.CSS3DRenderer = function () {
        var a, b, c, d, e = new THREE.Matrix4, f = document.createElement("div");
        f.style.overflow = "hidden";
        f.style.WebkitTransformStyle = "preserve-3d";
        f.style.MozTransformStyle = "preserve-3d";
        f.style.oTransformStyle = "preserve-3d";
        f.style.transformStyle = "preserve-3d";
        this.domElement = f;
        var g = document.createElement("div");
        g.style.WebkitTransformStyle = "preserve-3d";
        g.style.MozTransformStyle = "preserve-3d";
        g.style.oTransformStyle = "preserve-3d";
        g.style.transformStyle = "preserve-3d";
        f.appendChild(g);
        this.setClearColor = function () { }
            ;
        this.setSize = function (e, h) {
            a = e;
            b = h;
            c = a / 2;
            d = b / 2;
            f.style.width = e + "px";
            f.style.height = h + "px";
            g.style.width = e + "px";
            g.style.height = h + "px"
        }
            ;
        var h = function (a) {
            return 1E-6 > Math.abs(a) ? 0 : a
        }
            , k = function () {
                var a = new THREE.Vector3
                    , b = new THREE.Vector3
                    , c = new THREE.Euler
                    , d = new THREE.Quaternion;
                c._quaternion = d;
                d._euler = c;
                return function (e) {
                    e.decompose(a, d, b);
                    return "translate3d(-50%,-50%,0) translate3d(" + h(a.x) + "px, " + h(a.y) + "px, " + h(a.z) + "px) rotateX(" + h(c.x) + "rad) rotateY(" + h(c.y) + "rad) rotateZ(" + h(c.z) + "rad) scale3d(" + h(b.x) + ", " + h(-b.y) + ", " + h(b.z) + ")"
                }
            }()
            , l = function (a, b) {
                if (a instanceof THREE.CSS3DObject) {
                    var c;
                    a instanceof THREE.CSS3DSprite ? (e.copy(b.matrixWorldInverse),
                        e.transpose(),
                        e.copyPosition(a.matrixWorld),
                        e.scale(a.scale),
                        e.elements[3] = 0,
                        e.elements[7] = 0,
                        e.elements[11] = 0,
                        e.elements[15] = 1,
                        c = k(e)) : c = k(a.matrixWorld);
                    var d = a.element;
                    d.style.WebkitTransformStyle = "preserve-3d";
                    d.style.MozTransformStyle = "preserve-3d";
                    d.style.oTransformStyle = "preserve-3d";
                    d.style.transformStyle = "preserve-3d";
                    d.style.WebkitTransform = c;
                    d.style.MozTransform = c;
                    d.style.oTransform = c;
                    d.style.transform = c;
                    d.parentNode !== g && g.appendChild(d)
                }
                c = 0;
                for (d = a.children.length; c < d; c++)
                    l(a.children[c], b)
            };
        this.render = function (a, e) {
            var k = 0.5 / Math.tan(THREE.Math.degToRad(0.5 * e.fov)) * b;
            f.style.WebkitPerspective = k + "px";
            f.style.MozPerspective = k + "px";
            f.style.oPerspective = k + "px";
            f.style.perspective = k + "px";
            a.updateMatrixWorld();
            void 0 === e.parent && e.updateMatrixWorld();
            e.matrixWorldInverse.getInverse(e.matrixWorld);
            var k = "translate3d(0,0," + k + "px)", q;
            q = e.matrixWorldInverse.elements;
            q = "matrix3d(" + h(q[0]) + "," + h(-q[1]) + "," + h(q[2]) + "," + h(q[3]) + "," + h(q[4]) + "," + h(-q[5]) + "," + h(q[6]) + "," + h(q[7]) + "," + h(q[8]) + "," + h(-q[9]) + "," + h(q[10]) + "," + h(q[11]) + "," + h(q[12]) + "," + h(-q[13]) + "," + h(q[14]) + "," + h(q[15]) + ")";
            k = k + q + " translate3d(" + c + "px," + d + "px, 0)";
            g.style.WebkitTransform = k;
            g.style.MozTransform = k;
            g.style.oTransform = k;
            g.style.transform = k;
            l(a, e)
        }
    }
        ;
    var _ = {
        isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        cascade: function () {
            var a, b = Array.prototype.slice.call(arguments);
            for (a = 0; a < b.length; a++)
                if (void 0 !== b[a])
                    return b[a];
            return !1
        },
        hexToRgb: function (a) {
            a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, c, d, e) {
                return c + c + d + d + e + e
            });
            return (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)) ? {
                r: parseInt(a[1], 16),
                g: parseInt(a[2], 16),
                b: parseInt(a[3], 16)
            } : null
        }
    };
    ERNO.extend(Number.prototype, {
        absolute: function () {
            return Math.abs(this)
        },
        add: function () {
            var a = this;
            Array.prototype.slice.call(arguments).forEach(function (b) {
                a += b
            });
            return a
        },
        arcCosine: function () {
            return Math.acos(this)
        },
        arcSine: function () {
            return Math.asin(this)
        },
        arcTangent: function () {
            return Math.atan(this)
        },
        constrain: function (a, b) {
            var c, d, e = this;
            b = b || 0;
            c = Math.max(a, b);
            d = Math.min(a, b);
            e = Math.min(e, c);
            return e = Math.max(e, d)
        },
        cosine: function () {
            return Math.cos(this)
        },
        degreesToDirection: function () {
            var a = "N NNE NE NEE E SEE SE SSE S SSW SW SWW W NWW NW NNW N".split(" ");
            return a[this.scale(0, 360, 0, a.length - 1).round()]
        },
        degreesToRadians: function () {
            return this * Math.PI / 180
        },
        divide: function () {
            var a = this;
            Array.prototype.slice.call(arguments).forEach(function (b) {
                a /= b
            });
            return a
        },
        isBetween: function (a, b) {
            var c = Math.min(a, b)
                , d = Math.max(a, b);
            return c <= this && this <= d
        },
        lerp: function (a, b) {
            return a + (b - a) * this
        },
        log: function (a) {
            return Math.log(this) / (void 0 === a ? 1 : Math.log(a))
        },
        log10: function () {
            return Math.log(this) / Math.LN10
        },
        maximum: function (a) {
            return Math.max(this, a)
        },
        minimum: function (a) {
            return Math.min(this, a)
        },
        modulo: function (a) {
            return (this % a + a) % a
        },
        multiply: function () {
            var a = this;
            Array.prototype.slice.call(arguments).forEach(function (b) {
                a *= b
            });
            return a
        },
        normalize: function (a, b) {
            return a == b ? 1 : (this - a) / (b - a)
        },
        raiseTo: function (a) {
            return Math.pow(this, a)
        },
        radiansToDegrees: function () {
            return 180 * this / Math.PI
        },
        rand: function (a) {
            var b;
            return void 0 !== a ? (b = Math.min(this, a),
                a = Math.max(this, a),
                b + Math.floor(Math.random() * (a - b))) : Math.floor(Math.random() * this)
        },
        random: function (a) {
            var b;
            return void 0 !== a ? (b = Math.min(this, a),
                a = Math.max(this, a),
                b + Math.random() * (a - b)) : Math.random() * this
        },
        remainder: function (a) {
            return this % a
        },
        round: function (a) {
            var b;
            a = a || 0;
            b = this * Math.pow(10, a);
            b = Math.round(b);
            return b /= Math.pow(10, a)
        },
        roundDown: function () {
            return Math.floor(this)
        },
        roundUp: function () {
            return Math.ceil(this)
        },
        scale: function (a, b, c, d) {
            a = this.normalize(a, b);
            return c == d ? d : c + a * (d - c)
        },
        sine: function () {
            return Math.sin(this)
        },
        subtract: function () {
            var a = this;
            Array.prototype.slice.call(arguments).forEach(function (b) {
                a -= b
            });
            return a
        },
        tangent: function () {
            return Math.tan(this)
        },
        toArray: function () {
            return [this.valueOf()]
        },
        toNumber: function () {
            return this.valueOf()
        },
        toPaddedString: function (a) {
            return ("0000000000000" + String(this)).slice(-a)
        },
        toSignedString: function () {
            var a = "" + this;
            0 <= this && (a = "+" + a);
            return a
        },
        toString: function () {
            return "" + this
        }
    });
    ERNO.extend(String.prototype, {
        capitalize: function () {
            return this.charAt(0).toUpperCase() + this.slice(1)
        },
        invert: function () {
            var a = "", b;
            for (b = 0; b < this.length; b++)
                a = this.charAt(b) === this.charAt(b).toUpperCase() ? a + this.charAt(b).toLowerCase() : a + this.charAt(b).toUpperCase();
            return a
        },
        justifyCenter: function (a) {
            var b = Math.round(this.length / 2)
                , c = this.length - b
                , d = Math.round(a / 2)
                , b = d - b;
            a = a - d - c;
            c = this;
            if (0 < b)
                for (; b--;)
                    c = " " + c;
            else
                0 > b && (c = c.substr(-1 * b));
            if (0 < a)
                for (; a--;)
                    c += " ";
            else
                0 > a && (c = c.substr(0, c.length + a));
            return c
        },
        justifyLeft: function (a) {
            for (var b = this; b.length < a;)
                b += " ";
            return b
        },
        justifyRight: function (a) {
            for (var b = this; b.length < a;)
                b = " " + b;
            return b
        },
        multiply: function (a) {
            var b, c = "";
            a = _.cascade(a, 2);
            for (b = 0; b < a; b++)
                c += this;
            return c
        },
        reverse: function () {
            var a, b = "";
            for (a = 0; a < this.length; a++)
                b = this[a] + b;
            return b
        },
        size: function () {
            return this.length
        },
        toEntities: function () {
            var a, b = "";
            for (a = 0; a < this.length; a++)
                b += "&#" + this.charCodeAt(a) + ";";
            return b
        },
        toCamelCase: function () {
            var a = this.split(/\W+|_+/), b = a[0], c;
            for (c = 1; c < a.length; c++)
                b += a[c].capitalize();
            return b
        },
        directionToDegrees: function () {
            var a = "N NNE NE NEE E SEE SE SSE S SSW SW SWW W NWW NW NNW N".split(" ")
                , b = a.indexOf(this.toUpperCase());
            return 0 <= b ? b.scale(0, a.length - 1, 0, 360) : Number.NaN
        },
        toArray: function () {
            return [this]
        },
        toNumber: function () {
            return parseFloat(this)
        },
        toString: function () {
            return this
        },
        toUnderscoreCase: function () {
            var a = this.replace(/[A-Z]+/g, function (a) {
                return "_" + a
            });
            "_" === a.charAt(0) && (a = a.substr(1));
            return a.toLowerCase()
        },
        toUnicode: function () {
            var a, b, c = "";
            for (a = 0; a < this.length; a++) {
                for (b = this.charCodeAt(a).toString(16).toUpperCase(); 4 > b.length;)
                    b = "0" + b;
                c += "\\u" + b
            }
            return c
        }
    });
    ERNO.extend(Array.prototype, {
        distanceTo: function (a) {
            var b, c = 0;
            0 < arguments.length && (a = Array.prototype.slice.call(arguments));
            if (this.length === a.length) {
                for (b = 0; b < this.length; b++)
                    c += Math.pow(a[b] - this[b], 2);
                return Math.pow(c, 0.5)
            }
            return null
        },
        first: function () {
            return this[0]
        },
        last: function () {
            return this[this.length - 1]
        },
        maximum: function () {
            return Math.max.apply(null, this)
        },
        middle: function () {
            return this[Math.round((this.length - 1) / 2)]
        },
        minimum: function () {
            return Math.min.apply(null, this)
        },
        rand: function () {
            return this[Math.floor(Math.random() * this.length)]
        },
        random: function () {
            return this[Math.floor(Math.random() * this.length)]
        },
        shuffle: function () {
            var a = this.length, b, c, d;
            if (0 == a)
                return !1;
            for (; --a;)
                b = Math.floor(Math.random() * (a + 1)),
                    c = this[a],
                    d = this[b],
                    this[a] = d,
                    this[b] = c;
            return this
        },
        toArray: function () {
            return this
        },
        toHtml: function () {
            var a, b = "<ul>";
            for (a = 0; a < this.length; a++)
                b = this[a] instanceof Array ? b + this[a].toHtml() : b + ("<li>" + this[a] + "</li>");
            return b + "</ul>"
        },
        toText: function (a) {
            var b, c, d;
            a = _.cascade(a, 0);
            c = "\n" + "\t".multiply(a);
            d = "";
            for (b = 0; b < this.length; b++)
                d = this[b] instanceof Array ? d + (c + this[b].toText(a + 1)) : d + (c + this[b]);
            return d
        }
    });
    ERNO.Color = function (a, b, c, d, e) {
        this.name = a;
        this.initial = b;
        this.hex = c;
        this.styleF = d;
        this.styleB = e
    }
        ;
    var W, O, B, R, G, Y, COLOURLESS;
    W = ERNO.WHITE = new ERNO.Color("white", "W", "#FFF", "font-weight: bold; color: #888", "background-color: #F3F3F3; color: rgba( 0, 0, 0, 0.5 )");
    O = ERNO.ORANGE = new ERNO.Color("orange", "O", "#F60", "font-weight: bold; color: #F60", "background-color: #F60; color: rgba( 255, 255, 255, 0.9 )");
    B = ERNO.BLUE = new ERNO.Color("blue", "B", "#00D", "font-weight: bold; color: #00D", "background-color: #00D; color: rgba( 255, 255, 255, 0.9 )");
    R = ERNO.RED = new ERNO.Color("red", "R", "#F00", "font-weight: bold; color: #F00", "background-color: #F00; color: rgba( 255, 255, 255, 0.9 )");
    G = ERNO.GREEN = new ERNO.Color("green", "G", "#0A0", "font-weight: bold; color: #0A0", "background-color: #0A0; color: rgba( 255, 255, 255, 0.9 )");
    Y = ERNO.YELLOW = new ERNO.Color("yellow", "Y", "#FE0", "font-weight: bold; color: #ED0", "background-color: #FE0; color: rgba( 0, 0, 0, 0.5 )");
    ERNO.COLORLESS = new ERNO.Color("NA", "X", "#DDD", "color: #EEE", "color: #DDD");
    ERNO.Direction = function (a, b, c) {
        this.id = a;
        this.name = b.toLowerCase();
        this.normal = c;
        this.initial = b.substr(0, 1).toUpperCase();
        this.neighbors = [];
        this.opposite = null
    }
        ;
    ERNO.Direction.prototype.setRelationships = function (a, b, c, d, e) {
        this.neighbors = [a, b, c, d];
        this.opposite = e
    }
        ;
    ERNO.Direction.getNameById = function (a) {
        return "front up right down left back".split(" ")[a]
    }
        ;
    ERNO.Direction.getIdByName = function (a) {
        return {
            front: 0,
            up: 1,
            right: 2,
            down: 3,
            left: 4,
            back: 5
        }[a]
    }
        ;
    ERNO.Direction.getDirectionById = function (a) {
        return [ERNO.Direction.FRONT, ERNO.Direction.UP, ERNO.Direction.RIGHT, ERNO.Direction.DOWN, ERNO.Direction.LEFT, ERNO.Direction.BACK][a]
    }
        ;
    ERNO.Direction.getDirectionByInitial = function (a) {
        return {
            F: ERNO.Direction.FRONT,
            U: ERNO.Direction.UP,
            R: ERNO.Direction.RIGHT,
            D: ERNO.Direction.DOWN,
            L: ERNO.Direction.LEFT,
            B: ERNO.Direction.BACK
        }[a.toUpperCase()]
    }
        ;
    ERNO.Direction.getDirectionByName = function (a) {
        return {
            front: ERNO.Direction.FRONT,
            up: ERNO.Direction.UP,
            right: ERNO.Direction.RIGHT,
            down: ERNO.Direction.DOWN,
            left: ERNO.Direction.LEFT,
            back: ERNO.Direction.BACK
        }[a.toLowerCase()]
    }
        ;
    ERNO.Direction.getDirectionByNormal = function () {
        var a = new THREE.Vector3;
        return function (b) {
            a.x = Math.round(b.x);
            a.y = Math.round(b.y);
            a.z = Math.round(b.z);
            return a.equals(ERNO.Direction.FRONT.normal) ? ERNO.Direction.FRONT : a.equals(ERNO.Direction.BACK.normal) ? ERNO.Direction.BACK : a.equals(ERNO.Direction.UP.normal) ? ERNO.Direction.UP : a.equals(ERNO.Direction.DOWN.normal) ? ERNO.Direction.DOWN : a.equals(ERNO.Direction.LEFT.normal) ? ERNO.Direction.LEFT : a.equals(ERNO.Direction.RIGHT.normal) ? ERNO.Direction.RIGHT : null
        }
    }();
    ERNO.Direction.prototype.getRotation = function (a, b, c) {
        void 0 === b && (b = this.neighbors[0]);
        if (b === this || b === this.opposite)
            return null;
        c = void 0 === c ? 1 : c.modulo(4);
        for (var d = 0; 5 > d && this.neighbors[d] !== b; d++)
            ;
        return this.neighbors[d.add(c * a).modulo(4)]
    }
        ;
    ERNO.Direction.prototype.getClockwise = function (a, b) {
        return this.getRotation(1, a, b)
    }
        ;
    ERNO.Direction.prototype.getAnticlockwise = function (a, b) {
        return this.getRotation(-1, a, b)
    }
        ;
    ERNO.Direction.prototype.getDirection = function (a, b) {
        return this.getRotation(1, b, a.id - 1)
    }
        ;
    ERNO.Direction.prototype.getUp = function (a) {
        return this.getDirection(ERNO.Direction.UP, a)
    }
        ;
    ERNO.Direction.prototype.getRight = function (a) {
        return this.getDirection(ERNO.Direction.RIGHT, a)
    }
        ;
    ERNO.Direction.prototype.getDown = function (a) {
        return this.getDirection(ERNO.Direction.DOWN, a)
    }
        ;
    ERNO.Direction.prototype.getLeft = function (a) {
        return this.getDirection(ERNO.Direction.LEFT, a)
    }
        ;
    ERNO.Direction.prototype.getOpposite = function () {
        return this.opposite
    }
        ;
    ERNO.Direction.FRONT = new ERNO.Direction(0, "front", new THREE.Vector3(0, 0, 1));
    ERNO.Direction.UP = new ERNO.Direction(1, "up", new THREE.Vector3(0, 1, 0));
    ERNO.Direction.RIGHT = new ERNO.Direction(2, "right", new THREE.Vector3(1, 0, 0));
    ERNO.Direction.DOWN = new ERNO.Direction(3, "down", new THREE.Vector3(0, -1, 0));
    ERNO.Direction.LEFT = new ERNO.Direction(4, "left", new THREE.Vector3(-1, 0, 0));
    ERNO.Direction.BACK = new ERNO.Direction(5, "back", new THREE.Vector3(0, 0, -1));
    ERNO.Direction.FRONT.setRelationships(ERNO.Direction.UP, ERNO.Direction.RIGHT, ERNO.Direction.DOWN, ERNO.Direction.LEFT, ERNO.Direction.BACK);
    ERNO.Direction.UP.setRelationships(ERNO.Direction.BACK, ERNO.Direction.RIGHT, ERNO.Direction.FRONT, ERNO.Direction.LEFT, ERNO.Direction.DOWN);
    ERNO.Direction.RIGHT.setRelationships(ERNO.Direction.UP, ERNO.Direction.BACK, ERNO.Direction.DOWN, ERNO.Direction.FRONT, ERNO.Direction.LEFT);
    ERNO.Direction.DOWN.setRelationships(ERNO.Direction.FRONT, ERNO.Direction.RIGHT, ERNO.Direction.BACK, ERNO.Direction.LEFT, ERNO.Direction.UP);
    ERNO.Direction.LEFT.setRelationships(ERNO.Direction.UP, ERNO.Direction.FRONT, ERNO.Direction.DOWN, ERNO.Direction.BACK, ERNO.Direction.RIGHT);
    ERNO.Direction.BACK.setRelationships(ERNO.Direction.UP, ERNO.Direction.LEFT, ERNO.Direction.DOWN, ERNO.Direction.RIGHT, ERNO.Direction.FRONT);
    ERNO.Queue = function (a) {
        void 0 !== a && a instanceof Function && (this.validate = a);
        this.history = [];
        this.useHistory = !0;
        this.future = [];
        this.isReady = !0;
        this.isLooping = !1
    }
        ;
    ERNO.Queue.prototype.add = function () {
        var a = Array.prototype.slice.call(arguments);
        void 0 !== this.validate && this.validate instanceof Function && (a = this.validate(a));
        a instanceof Array && a.forEach(function (a) {
            this.future.push(a)
        }
            .bind(this));
        return this.future
    }
        ;
    ERNO.Queue.prototype.remove = function () {
        var a = Array.prototype.slice.call(arguments);
        a instanceof Array && a.forEach(function (a) {
            this.future = this.future.filter(function (c) {
                return c != a
            })
        }
            .bind(this));
        return this.future
    }
        ;
    ERNO.Queue.prototype.purge = function () {
        var a = Array.prototype.slice.call(arguments);
        a instanceof Array && a.forEach(function (a) {
            this.history = this.history.filter(function (c) {
                return c != a
            })
        }
            .bind(this));
        return this.history
    }
        ;
    ERNO.Queue.prototype.empty = function (a) {
        this.future = [];
        a && (this.history = [])
    }
        ;
    ERNO.Queue.prototype.do = function () {
        if (this.future.length) {
            var a = this.future.shift();
            this.useHistory && this.history.push(a);
            return a
        }
        this.isLooping && (this.future = this.history.slice(),
            this.history = [])
    }
        ;
    ERNO.Queue.prototype.undo = function () {
        if (this.history.length) {
            var a = this.history.pop();
            this.future.unshift(a);
            return a
        }
    }
        ;
    ERNO.Queue.prototype.redo = function () {
        return this.do()
    }
        ;
    ERNO.Twist = function (a, b) {
        a && this.set(a, b)
    }
        ;
    ERNO.Twist.prototype.set = function (a, b) {
        var c = {
            X: "Cube on X",
            L: "Left face",
            M: "Middle slice",
            R: "Right face",
            Y: "Cube on Y",
            U: "Up face",
            E: "Equator slice",
            D: "Down face",
            Z: "Cube on Z",
            F: "Front face",
            S: "Standing slice",
            B: "Back face"
        }[a.toUpperCase()];
        if (void 0 !== c) {
            void 0 != b && 0 > b && (a = a.invert(),
                b = b.absolute());
            var d = 0
                , e = "unwise";
            a === a.toUpperCase() ? (d = 1,
                e = "clockwise") : a === a.toLowerCase() && (d = -1,
                    e = "anticlockwise");
            this.command = a;
            this.group = c;
            this.degrees = b;
            this.vector = d;
            this.wise = e;
            this.isShuffle = !1;
            this.getInverse = function () {
                return new ERNO.Twist(a.invert(), b)
            }
        } else
            return !1
    }
        ;
    ERNO.Twist.prototype.equals = function (a) {
        return this.command === a.command && this.degrees === a.degrees
    }
        ;
    ERNO.Twist.prototype.copy = function (a) {
        this.command = a.command;
        this.group = a.group;
        this.degrees = a.degrees;
        this.vector = a.vector;
        this.wise = a.wise;
        this.isShuffle = a.isShuffle;
        return this
    }
        ;
    ERNO.Twist.validate = function () {
        var a = Array.prototype.slice.call(arguments), b, c, d, e, f, g;
        for (c = 0; c < a.length; c++)
            if (b = a[c],
                d = c + 1 < a.length ? a[c + 1] : void 0,
                !(b instanceof ERNO.Twist))
                if ("string" === typeof b)
                    if (1 === b.length)
                        a[c] = "number" === typeof d ? new ERNO.Twist(b, d) : new ERNO.Twist(b);
                    else {
                        if (1 < b.length) {
                            d = /(-?\d+|[XLMRYUEDZFSB])/gi;
                            b = b.match(d);
                            for (f = 0; f < b.length; f++)
                                e = b[f],
                                    _.isNumeric(e) ? b[f] = +e : (d = b.slice(0, f),
                                        g = b.slice(f + 1),
                                        e = e.split(""),
                                        b = d.concat(e, g));
                            d = a.slice(0, c);
                            g = a.slice(c + 1);
                            a = d.concat(b, g);
                            c--
                        }
                    }
                else
                    b instanceof ERNO.Direction ? a[c] = b.initial : b instanceof Array ? (d = a.slice(0, c),
                        g = a.slice(c + 1),
                        a = d.concat(b, g)) : a.splice(c, 1),
                        c--;
        return a
    }
        ;
    ERNO.Cubelet = function (a, b, c) {
        THREE.Object3D.call(this);
        this.cube = a;
        this.id = b || 0;
        this.setAddress(this.id);
        this.size = a.cubeletSize || 140;
        a = this.addressX * (this.size + 0.1);
        b = this.addressY * (this.size + 0.1);
        var d = this.addressZ * (this.size + 0.1);
        this.position.set(a, b, d);
        this.matrixSlice = (new THREE.Matrix4).makeTranslation(a, b, d);
        this.updateMatrix();
        this.cube.object3D.add(this);
        a = 0;
        void 0 === c && (c = [W, O, , , G]);
        this.faces = [];
        for (b = 0; 6 > b; b++)
            d = c[b] || ERNO.COLORLESS,
                this.faces[b] = {},
                this.faces[b].id = b,
                this.faces[b].color = d,
                this.faces[b].normal = ERNO.Direction.getNameById(b),
                this.faces[b].isIntrovert = d === ERNO.COLORLESS,
                d !== ERNO.COLORLESS && a++;
        this.type = ["core", "center", "edge", "corner"][a];
        this.front = this.faces[0];
        this.up = this.faces[1];
        this.right = this.faces[2];
        this.down = this.faces[3];
        this.left = this.faces[4];
        this.back = this.faces[5];
        this.colors = (this.faces[0].color ? this.faces[0].color.initial : "-") + (this.faces[1].color ? this.faces[1].color.initial : "-") + (this.faces[2].color ? this.faces[2].color.initial : "-") + (this.faces[3].color ? this.faces[3].color.initial : "-") + (this.faces[4].color ? this.faces[4].color.initial : "-") + (this.faces[5].color ? this.faces[5].color.initial : "-");
        this.isStickerCubelet = this.front.color && "white" === this.front.color.name && "center" === this.type;
        this.isTweening = !0;
        this.isTweening = this.isEngagedZ = this.isEngagedY = this.isEngagedX = !1;
        this.opacity = 1;
        this.radius = 0
    }
        ;
    ERNO.Cubelet.prototype = Object.create(THREE.Object3D.prototype);
    ERNO.extend(ERNO.Cubelet.prototype, {
        setAddress: function (a) {
            this.address = a || 0;
            this.addressX = a.modulo(3).subtract(1);
            this.addressY = -1 * a.modulo(9).divide(3).roundDown().subtract(1);
            this.addressZ = -1 * a.divide(9).roundDown().subtract(1)
        },
        hasColor: function (a) {
            var b, c, d = _.hexToRgb(a.hex);
            for (a = 0; 6 > a; a++)
                if (c = _.hexToRgb(this.faces[a].color.hex),
                    c.r === d.r && c.g === d.g && c.b === d.b) {
                    b = a;
                    break
                }
            return void 0 !== b ? "front up right down left back".split(" ")[b] : !1
        },
        hasColors: function () {
            var a = this
                , b = !0;
            Array.prototype.slice.call(arguments).forEach(function (c) {
                b = b && !!a.hasColor(c)
            });
            return b
        },
        getRadius: function () {
            return this.radius
        },
        setRadius: function (a, b) {
            if (!1 === this.isTweening && (a = a || 0,
                void 0 === this.radius && (this.radius = 0),
                this.radius !== a)) {
                this.isTweening = !0;
                var c = (this.radius - a).absolute()
                    , d = {
                        radius: this.radius
                    };
                (new TWEEN.Tween(d)).to({
                    radius: a
                }, c).easing(TWEEN.Easing.Quartic.Out).onUpdate(function () {
                    this.position.set(this.addressX.multiply(this.size + d.radius) + 0.2, this.addressY.multiply(this.size + d.radius) + 0.2, this.addressZ.multiply(this.size + d.radius) + 0.2);
                    this.updateMatrix();
                    this.matrixSlice.copy(this.matrix);
                    this.radius = d.radius
                }
                    .bind(this)).onComplete(function () {
                        this.isTweening = !1;
                        this.position.set(this.addressX.multiply(this.size + d.radius) + 0.2, this.addressY.multiply(this.size + d.radius) + 0.2, this.addressZ.multiply(this.size + d.radius) + 0.2);
                        this.updateMatrix();
                        this.matrixSlice.copy(this.matrix);
                        this.radius = d.radius;
                        b instanceof Function && b()
                    }
                        .bind(this)).start(this.cube.time)
            }
        }
    });
    ERNO.Group = function () {
        this.cubelets = [];
        this.add(Array.prototype.slice.call(arguments))
    }
        ;
    ERNO.extend(ERNO.Group.prototype, THREE.EventDispatcher.prototype);
    ERNO.extend(ERNO.Group.prototype, {
        add: function () {
            var a = this;
            Array.prototype.slice.call(arguments).forEach(function (b) {
                b instanceof ERNO.Group && (b = b.cubelets);
                b instanceof Array ? a.add.apply(a, b) : a.cubelets.push(b)
            });
            return this
        },
        remove: function (a) {
            a instanceof ERNO.Group && (a = a.cubelets);
            if (a instanceof Array) {
                var b = this;
                a.forEach(function (a) {
                    b.remove(a)
                })
            }
            for (var c = this.cubelets.length; 0 < c--;)
                this.cubelets[c] === a && this.cubelets.splice(c, 1);
            return this
        },
        isFlagged: function (a) {
            var b = 0;
            this.cubelets.forEach(function (c) {
                b += c[a] ? 1 : 0
            });
            return b
        },
        isTweening: function () {
            return this.isFlagged("isTweening")
        },
        isEngagedX: function () {
            return this.isFlagged("isEngagedX")
        },
        isEngagedY: function () {
            return this.isFlagged("isEngagedY")
        },
        isEngagedZ: function () {
            return this.isFlagged("isEngagedZ")
        },
        isEngaged: function () {
            return this.isEngagedX() + this.isEngagedY() + this.isEngagedZ()
        },
        hasProperty: function (a, b) {
            var c = new ERNO.Group;
            this.cubelets.forEach(function (d) {
                d[a] === b && c.add(d)
            });
            return c
        },
        hasId: function (a) {
            return this.hasProperty("id", a)
        },
        hasAddress: function (a) {
            return this.hasProperty("address", a)
        },
        hasType: function (a) {
            return this.hasProperty("type", a)
        },
        hasColor: function (a) {
            var b = new ERNO.Group;
            this.cubelets.forEach(function (c) {
                c.hasColor(a) && b.add(c)
            });
            return b
        },
        hasColors: function () {
            var a = new ERNO.Group
                , b = Array.prototype.slice.call(arguments);
            this.cubelets.forEach(function (c) {
                c.hasColors.apply(c, b) && a.add(c)
            });
            return a
        },
        isSolved: function (a) {
            if (a) {
                var b = {}
                    , c = 0;
                a instanceof ERNO.Direction && (a = a.name);
                this.cubelets.forEach(function (d) {
                    d = d[a].color.name;
                    void 0 === b[d] ? (b[d] = 1,
                        c++) : b[d]++
                });
                return 1 === c ? !0 : !1
            }
            console.warn("A face [String or ERNO.Controls] argument must be specified when using ERNO.Group.isSolved().");
            return !1
        },
        show: function () {
            this.cubelets.forEach(function (a) {
                a.show()
            });
            return this
        },
        hide: function () {
            this.cubelets.forEach(function (a) {
                a.hide()
            });
            return this
        },
        showPlastics: function () {
            this.cubelets.forEach(function (a) {
                a.showPlastics()
            });
            return this
        },
        hidePlastics: function () {
            this.cubelets.forEach(function (a) {
                a.hidePlastics()
            });
            return this
        },
        showExtroverts: function () {
            this.cubelets.forEach(function (a) {
                a.showExtroverts()
            });
            return this
        },
        hideExtroverts: function () {
            this.cubelets.forEach(function (a) {
                a.hideExtroverts()
            });
            return this
        },
        showIntroverts: function (a, b) {
            this.cubelets.forEach(function (c) {
                c.showIntroverts(a, b)
            });
            return this
        },
        hideIntroverts: function (a, b) {
            this.cubelets.forEach(function (c) {
                c.hideIntroverts(a, b)
            });
            return this
        },
        showStickers: function () {
            this.cubelets.forEach(function (a) {
                a.showStickers()
            });
            return this
        },
        hideStickers: function () {
            this.cubelets.forEach(function (a) {
                a.hideStickers()
            });
            return this
        },
        showWireframes: function () {
            this.cubelets.forEach(function (a) {
                a.showWireframes()
            });
            return this
        },
        hideWireframes: function () {
            this.cubelets.forEach(function (a) {
                a.hideWireframes()
            });
            return this
        },
        showIds: function () {
            this.cubelets.forEach(function (a) {
                a.showIds()
            });
            return this
        },
        hideIds: function () {
            this.cubelets.forEach(function (a) {
                a.hideIds()
            });
            return this
        },
        showTexts: function () {
            this.cubelets.forEach(function (a) {
                a.showTexts()
            });
            return this
        },
        hideTexts: function () {
            this.cubelets.forEach(function (a) {
                a.hideTexts()
            });
            return this
        },
        getOpacity: function () {
            var a = 0;
            this.cubelets.forEach(function (b) {
                a += b.getOpacity()
            });
            return a / this.cubelets.length
        },
        setOpacity: function (a, b) {
            this.cubelets.forEach(function (c) {
                c.setOpacity(a, b)
            });
            return this
        },
        getRadius: function () {
            var a = 0;
            this.cubelets.forEach(function (b) {
                a += b.getRadius()
            });
            return a / this.cubelets.length
        },
        setRadius: function (a, b) {
            this.cubelets.forEach(function (c) {
                c.setRadius(a, b)
            });
            return this
        }
    });
    ERNO.Slice = function (a, b) {
        this.axis = new THREE.Vector3;
        this.invertedAxis = new THREE.Vector3;
        this.matrix = new THREE.Matrix4;
        this.axis.rotation = 0;
        this.indices = a;
        this.neighbour = null;
        this.ableToHideInternalFaces = !0;
        this.cube = b;
        this.getCubelet = function (c) {
            return b.cubelets[a[c]]
        }
            ;
        this.rotateGroupMappingOnAxis = function () {
            var c = new THREE.Vector3, d = new THREE.Vector3(1, 1, 1), e = new THREE.Vector3, f = new THREE.Vector3, g = new THREE.Matrix4, h;
            return function (k) {
                k = Math.round(k / (0.25 * Math.PI)) * Math.PI * 0.25;
                c.copy(d);
                c.sub(this.axis);
                var l = b.cubelets.slice();
                g.makeRotationAxis(this.axis, -1 * k);
                for (var n = a.length, m; 0 < n--;)
                    m = b.cubelets[a[n]],
                        e.set(m.addressX, m.addressY, m.addressZ),
                        f.copy(e),
                        e.multiply(c).applyMatrix4(g),
                        e.x = Math.round(e.x),
                        e.y = Math.round(e.y),
                        e.z = Math.round(e.z),
                        e.add(f.multiply(this.axis)),
                        e.add(d),
                        e.y = 2 - e.y,
                        e.z = 2 - e.z,
                        b.cubelets[m.address] = l[9 * e.z + 3 * e.y + e.x];
                for (n = 0; n < b.cubelets.length; n++)
                    b.cubelets[n].setAddress(n);
                g.makeRotationAxis(this.axis, k);
                this.cubelets.forEach(function (a) {
                    h = [];
                    a.faces.forEach(function (a, b) {
                        e.copy(ERNO.Direction.getDirectionByName(a.normal).normal);
                        e.applyMatrix4(g);
                        h[ERNO.Direction.getDirectionByNormal(e).id] = a;
                        a.normal = ERNO.Direction.getDirectionByNormal(e).name
                    });
                    a.faces = h.slice();
                    a.front = a.faces[0];
                    a.up = a.faces[1];
                    a.right = a.faces[2];
                    a.down = a.faces[3];
                    a.left = a.faces[4];
                    a.back = a.faces[5]
                })
            }
        }();
        this.map()
    }
        ;
    ERNO.Slice.prototype = Object.create(ERNO.Group.prototype);
    ERNO.extend(ERNO.Slice.prototype, {
        get origin() {
            return this.cube.cubelets[this.indices[4]]
        },
        get north() {
            return this.cube.cubelets[this.indices[1]]
        },
        get northEast() {
            return this.cube.cubelets[this.indices[2]]
        },
        get east() {
            return this.cube.cubelets[this.indices[5]]
        },
        get southEast() {
            return this.cube.cubelets[this.indices[8]]
        },
        get south() {
            return this.cube.cubelets[this.indices[7]]
        },
        get southWest() {
            return this.cube.cubelets[this.indices[6]]
        },
        get west() {
            return this.cube.cubelets[this.indices[3]]
        },
        get northWest() {
            return this.cube.cubelets[this.indices[0]]
        },
        get cubelets() {
            for (var a = [], b = this.indices.length; 0 < b--;)
                a.push(this.getCubelet(b));
            return a
        },
        map: function (a, b) {
            for (var c = 0; 6 > c; c++)
                if (this.origin.faces[c].color && this.origin.faces[c].color !== ERNO.COLORLESS) {
                    this.color = this.origin.faces[c].color;
                    this.face = ERNO.Direction.getNameById(c);
                    break
                }
            if (void 0 === this.axis || 0 === this.axis.lengthSq()) {
                var c = this.northEast.position.clone()
                    , d = this.southWest.position.clone()
                    , e = this.northWest.position.clone();
                this.axis = (new THREE.Vector3).crossVectors(d.sub(c), e.sub(c)).normalize();
                this.axis.rotation = 0
            }
            this.up = new ERNO.Group(this.northWest, this.north, this.northEast);
            this.equator = new ERNO.Group(this.west, this.origin, this.east);
            this.down = new ERNO.Group(this.southWest, this.south, this.southEast);
            this.left = new ERNO.Group(this.northWest, this.west, this.southWest);
            this.middle = new ERNO.Group(this.north, this.origin, this.south);
            this.right = new ERNO.Group(this.northEast, this.east, this.southEast);
            (c = this.hasType("center")) && 1 === c.cubelets.length ? (this.center = this.hasType("center"),
                this.corners = new ERNO.Group(this.hasType("corner")),
                this.cross = new ERNO.Group(this.center, this.hasType("edge")),
                this.ex = new ERNO.Group(this.center, this.hasType("corner"))) : this.centers = new ERNO.Group(this.hasType("center"));
            this.edges = new ERNO.Group(this.hasType("edge"));
            this.ring = new ERNO.Group(this.northWest, this.north, this.northEast, this.west, this.east, this.southWest, this.south, this.southEast);
            this.dexter = new ERNO.Group(this.northWest, this.origin, this.southEast);
            this.sinister = new ERNO.Group(this.northEast, this.origin, this.southWest);
            return this
        },
        set rotation(a) {
            if (this.ableToHideInternalFaces && 0 !== this.cube.isFlagged("showingIntroverts") && this.cube.hideInvisibleFaces) {
                var b = 0 !== a % (0.5 * Math.PI);
                this.invertedAxis.copy(this.axis).negate();
                b ? this.neighbour ? (this.showIntroverts(this.axis, !0),
                    this.neighbour.showIntroverts(this.invertedAxis, !0)) : (this.cube.showIntroverts(this.axis, !0),
                        this.cube.showIntroverts(this.invertedAxis, !0)) : this.neighbour ? (this.hideIntroverts(null, !0),
                            this.neighbour.hideIntroverts(null, !0)) : this.cube.hideIntroverts(null, !0)
            }
            this.matrix.makeRotationAxis(this.axis, a);
            this.axis.rotation = a;
            a = this.indices.length;
            for (var c = new THREE.Matrix4; a--;)
                b = this.getCubelet(a),
                    b.matrix.multiplyMatrices(this.matrix, b.matrixSlice),
                    b.position.setFromMatrixPosition(b.matrix),
                    b.scale.setFromMatrixScale(b.matrix),
                    c.extractRotation(b.matrix),
                    b.quaternion.setFromRotationMatrix(c)
        },
        get rotation() {
            return this.axis.rotation
        },
        getLocation: function (a) {
            return a === this.origin ? "origin" : a === this.north ? "north" : a === this.northEast ? "northEast" : a === this.east ? "east" : a === this.southEast ? "southEast" : a === this.south ? "south" : a === this.southWest ? "southWest" : a === this.west ? "west" : a === this.northWest ? "northWest" : !1
        },
        isSolved: function (a) {
            if (a) {
                var b = {}, c, d = this.indices.length, e = 0;
                a instanceof ERNO.Direction && (a = a.name);
                for (; 0 < d--;)
                    c = this.getCubelet(d),
                        c = c[a].color.name,
                        void 0 === b[c] ? (b[c] = 1,
                            e++) : b[c]++;
                return 1 === e ? !0 : !1
            }
            console.warn("A face [String or ERNO.Controls] argument must be specified when using ERNO.Group.isSolved().");
            return !1
        }
    });
    ERNO.Fold = function (a, b) {
        this.map = [a.northWest[a.face].text, a.north[a.face].text, a.northEast[a.face].text, b.northWest[b.face].text, b.north[b.face].text, b.northEast[b.face].text, a.west[a.face].text, a.origin[a.face].text, a.east[a.face].text, b.west[b.face].text, b.origin[b.face].text, b.east[b.face].text, a.southWest[a.face].text, a.south[a.face].text, a.southEast[a.face].text, b.southWest[b.face].text, b.south[b.face].text, b.southEast[b.face].text]
    }
        ;
    ERNO.Fold.prototype.getText = function () {
        var a = "";
        this.map.forEach(function (b) {
            a += b.innerHTML
        });
        return a
    }
        ;
    ERNO.Fold.prototype.setText = function (a) {
        var b;
        a = a.justifyLeft(18);
        for (b = 0; 18 > b; b++)
            this.map[b].innerHTML = a.substr(b, 1)
    }
        ;
    ERNO.Projector = function () {
        return function (a, b) {
            function c(a, b) {
                q.getInverse(b.projectionMatrix);
                f.multiplyMatrices(b.matrixWorld, q);
                return a.applyProjection(f)
            }
            function d(d, f, l) {
                var m = b
                    , q = m !== document ? m.getBoundingClientRect() : {
                        left: 0,
                        top: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                m !== document && (m = m.ownerDocument.documentElement,
                    q.left += window.pageXOffset - m.clientLeft,
                    q.top += window.pageYOffset - m.clientTop);
                e = q;
                h.x = (f - e.left) / e.width * 2 - 1;
                h.y = (l - e.top) / e.height * -2 + 1;
                h.z = -1;
                k.set(h.x, h.y, 1);
                c(h, d);
                c(k, d);
                k.sub(h).normalize();
                n.set(h, k);
                g.getInverse(a.matrixWorld);
                n.applyMatrix4(g);
                return n
            }
            var e, f = new THREE.Matrix4, g = new THREE.Matrix4, h = new THREE.Vector3, k = new THREE.Vector3(1, 1, 1), l = new THREE.Vector3, n = new THREE.Ray, m = new THREE.Box3, r = new THREE.Sphere, q = new THREE.Matrix4, t = h.distanceTo(k);
            m.min.set(0.5 * -a.size, 0.5 * -a.size, 0.5 * -a.size);
            m.max.set(0.5 * a.size, 0.5 * a.size, 0.5 * a.size);
            r.radius = t * a.size * 0.5;
            return {
                getIntersection: function (b, c, e, f, g) {
                    f = f || new THREE.Vector3;
                    if (null === c || null === e)
                        return null;
                    d(b, c, e);
                    return n.isIntersectionSphere(r) && null !== n.intersectBox(m, f) ? (g && (b = l || new THREE.Vector3,
                        b.copy(f).set(Math.round(b.x), Math.round(b.y), Math.round(b.z)).multiplyScalar(2 / a.size).set(b.x | 0, b.y | 0, b.z | 0),
                        g.setFromNormalAndCoplanarPoint(l, f)),
                        f) : null
                },
                getIntersectionOnPlane: function (a, b, c, e, f) {
                    if (null === b || null === c)
                        return null;
                    d(a, b, c);
                    return n.intersectPlane(e, f)
                },
                getCubeletAtIntersection: function () {
                    var b = new THREE.Vector3;
                    return function (c) {
                        b.copy(c).add(m.max).multiplyScalar(3 / a.size).set(Math.min(b.x | 0, 2), Math.min(3 - b.y | 0, 2), Math.min(3 - b.z | 0, 2));
                        return a.cubelets[9 * b.z + 3 * b.y + b.x]
                    }
                }()
            }
        }
    }();
    ERNO.Interaction = function () {
        return function (a, b, c, d, e) {
            function f(d) {
                y.enabled && 2 !== d.button && (q = (d.touches && d.touches[0] || d).clientX,
                    t = (d.touches && d.touches[0] || d).clientY,
                    k.getIntersection(b, q, t, l, s) && (null !== d.touches && d.preventDefault(),
                        0 === a.isTweening() && (z = "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(),
                            y.active = !0,
                            n = k.getCubeletAtIntersection(l),
                            m = [a.slices[n.addressX + 1], a.slices[n.addressY + 4], a.slices[n.addressZ + 7]],
                            c.addEventListener("mousemove", g),
                            c.addEventListener("touchmove", g),
                            c.addEventListener("mouseup", h),
                            c.addEventListener("touchcancel", h),
                            c.addEventListener("touchend", h),
                            c.removeEventListener("mousedown", f),
                            c.removeEventListener("touchstart", f))))
            }
            function g(a) {
                y.active && (A.x = (a.touches && a.touches[0] || a).clientX,
                    A.y = (a.touches && a.touches[0] || a).clientY);
                y.enabled && (a.preventDefault(),
                    a.stopImmediatePropagation())
            }
            function h(b) {
                var d = (b.touches && b.touches[0] || b).clientX
                    , e = (b.touches && b.touches[0] || b).clientY;
                y.active = !1;
                y.enabled && (d !== t || e !== t) && p && (null !== b.touches && b.preventDefault(),
                    b = r.name[0].toUpperCase(),
                    d = Math.round(C / Math.PI * 2) * Math.PI * 0.5,
                    0.3 < v.length() / (("undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now()) - z) && (d = Math.floor(C / Math.PI * 2) * Math.PI * 0.5,
                        d += 0 < w.dot(v.normalize()) ? 0.5 * Math.PI : 0),
                    a.twist(new ERNO.Twist(b, d.radiansToDegrees())));
                z = 0;
                A.x = void 0;
                A.y = void 0;
                p = !1;
                r = null;
                c.removeEventListener("mousemove", g);
                c.removeEventListener("touchmove", g);
                c.removeEventListener("mouseup", h);
                c.removeEventListener("touchend", h);
                c.removeEventListener("touchcancel", h);
                c.addEventListener("mousedown", f);
                c.addEventListener("touchstart", f)
            }
            var k = new ERNO.Projector(a, c), l = new THREE.Vector3, n, m, r, q, t, u = new THREE.Vector3, p = !1, s = new THREE.Plane, v = new THREE.Vector3, w = new THREE.Vector3, A = new THREE.Vector2;
            new THREE.Vector3;
            var x = new THREE.Vector3
                , C = 0
                , z = 0;
            A.x = void 0;
            A.y = void 0;
            var y = {
                active: !1,
                enabled: !0,
                multiDrag: e || !1,
                multiDragSnapArea: 100,
                dragSpeed: d || 1.3
            };
            THREE.EventDispatcher.prototype.apply(y);
            y.getIntersectionAt = function () {
                var a = new THREE.Vector3
                    , c = new THREE.Plane;
                return function (d, e) {
                    return null === k.getIntersection(b, d, e, a, c) ? null : {
                        cubelet: k.getCubeletAtIntersection(a),
                        face: 1 === c.normal.x ? "RIGHT" : -1 === c.normal.x ? "LEFT" : 1 === c.normal.y ? "UP" : -1 === c.normal.y ? "DOWN" : 1 === c.normal.z ? "FRONT" : "BACK"
                    }
                }
            }();
            y.update = function () {
                var c = A.x
                    , d = A.y;
                y.enabled && y.active && void 0 !== c && void 0 != d && (q !== c || t !== d) && (k.getIntersectionOnPlane(b, c, d, s, u),
                    v.subVectors(u, l),
                    !p && 5 < v.length() && (r && (r.rotation = 0),
                        p = !0,
                        x.crossVectors(s.normal, v),
                        c = Math.max(Math.abs(x.x), Math.abs(x.y), Math.abs(x.z)),
                        x.x = x.x / c | 0,
                        x.y = 1 === x.x ? 0 : x.y / c | 0,
                        x.z = 1 === x.x || 1 === x.y ? 0 : x.z / c | 0,
                        r = m[Math.abs(3 * x.z + 2 * x.y + x.x) - 1],
                        w.crossVectors(r.axis, s.normal).normalize()),
                    p && (v.subVectors(u, l),
                        C = w.dot(v) / a.size * y.dragSpeed),
                    r && (r.rotation = C))
            }
                ;
            c.addEventListener("mousedown", f);
            c.addEventListener("touchstart", f);
            var F = function (a, b) {
                var c = this.getIntersectionAt(a, b);
                return c ? (this.dispatchEvent(new CustomEvent("click", {
                    detail: c
                })),
                    !0) : !1
            }
                .bind(y), D, E;
            c.addEventListener("mousedown", function (a) {
                D = a.clientX;
                E = a.clientY
            });
            c.addEventListener("mouseup", function (a) {
                var b = a.clientX;
                a = a.clientY;
                !p && Math.abs(Math.sqrt((b - D) * (b - D) + (a - E) * (a - E))) < 10 * (window.devicePixelratio || 1) && F(D, E)
            });
            c.addEventListener("touchstart", function (a) {
                D = a.touches[0].clientX;
                E = a.touches[0].clientY
            });
            c.addEventListener("touchend", function (a) {
                var b = a.changedTouches[0].clientX
                    , c = a.changedTouches[0].clientY;
                !p && Math.abs(Math.sqrt((b - D) * (b - D) + (c - E) * (c - E))) < 10 * (window.devicePixelratio || 1) && F(D, E) && a.preventDefault()
            });
            return y
        }
    }();
    ERNO.Controls = function () {
        var a, b;
        a = 0;
        b = 1;
        return function (c, d, e) {
            function f(b) {
                p.enabled && 1 === b.which && null === u.getIntersection(d, b.pageX, b.pageY) && (m = a,
                    r.multiplyScalar(0),
                    s(b.pageX, b.pageY, q),
                    t.copy(q),
                    p.domElement.removeEventListener("mousedown", f),
                    document.addEventListener("mousemove", g),
                    document.addEventListener("mouseup", h))
            }
            function g(b) {
                p.enabled && (b.preventDefault(),
                    m = a,
                    s(b.pageX, b.pageY, q),
                    r.subVectors(q, t),
                    t.copy(q))
            }
            function h(a) {
                document.removeEventListener("mousemove", g);
                document.removeEventListener("mouseup", h);
                p.domElement.addEventListener("mousedown", f);
                p.enabled && (m = b)
            }
            function k(b) {
                p.enabled && null === u.getIntersection(d, b.touches[0].pageX, b.touches[0].pageY) && (m = a,
                    r.multiplyScalar(0),
                    s(b.touches[0].pageX, b.touches[0].pageY, q),
                    t.copy(q),
                    p.domElement.removeEventListener("touchstart", k),
                    document.addEventListener("touchend", n),
                    document.addEventListener("touchmove", l))
            }
            function l(b) {
                p.enabled && (m = a,
                    s(b.changedTouches[0].pageX, b.changedTouches[0].pageY, q),
                    r.subVectors(q, t),
                    t.copy(q))
            }
            function n(a) {
                document.removeEventListener("touchend", n);
                document.removeEventListener("touchmove", l);
                p.domElement.addEventListener("touchstart", k);
                p.enabled && (m = b)
            }
            var m = -1
                , r = new THREE.Vector2
                , q = new THREE.Vector2;
            new THREE.Vector2;
            var t = new THREE.Vector2
                , u = new ERNO.Projector(c, e)
                , p = {
                    enabled: !0,
                    domElement: e,
                    rotationSpeed: 4,
                    damping: 0.25
                }
                , s = function (a, b, c) {
                    var d;
                    d = p.domElement;
                    d = d !== document ? d.getBoundingClientRect() : {
                        left: 0,
                        top: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                    var e = window.devicePixelRatio || 1;
                    return c.set(0.001 * (a * e - d.width - d.left), 0.001 * (d.height + d.top - b * e))
                };
            p.update = function () {
                var e = new THREE.Vector3
                    , f = 0
                    , g = new THREE.Matrix4;
                return function () {
                    !1 !== p.enabled && -1 !== m && (e.set(r.y, -1 * r.x, 0).normalize(),
                        g.getInverse(c.matrixWorld),
                        g.multiply(d.matrixWorld),
                        e.transformDirection(g),
                        r.multiplyScalar(1 - Math.max(0, Math.min(1, p.damping))),
                        f = r.length(),
                        c.object3D.rotateOnAxis(e, -f * p.rotationSpeed),
                        m === a ? m = -1 : m === b && 1E-4 <= f ? q.add(r) : m = -1)
                }
            }();
            p.domElement.addEventListener("mousedown", f);
            p.domElement.addEventListener("touchstart", k);
            return p
        }
    }();
    var SceneType = THREE.Scene;
    THREE.Scene = SceneType || function () { }
        ;
    ERNO.renderers = ERNO.renderers || {};
    ERNO.renderers.CSS3D = function (a, b) {
        function c(a) {
            a.style.display = "block"
        }
        function d(a) {
            a.style.display = "none"
        }
        function e() {
            return Array.prototype.slice.call(g.domElement.querySelectorAll(".faceLabel"))
        }
        function f() {
            if (b.domElement.parentNode) {
                var a = b.domElement.parentNode.clientWidth
                    , c = b.domElement.parentNode.clientHeight;
                !b.domElement.parentNode || b.domElement.clientWidth === a && b.domElement.clientHeight === c || b.setSize(a, c);
                g.render(h, b.camera)
            }
            requestAnimationFrame(f)
        }
        var g = new THREE.CSS3DRenderer
            , h = new THREE.Object3D;
        g.scene = h;
        h.add(b.autoRotateObj3D);
        h.add(b.camera);
        var k;
        new THREE.Vector3;
        b.faces.forEach(function (a, c) {
            k = b[a.face].label = new THREE.CSS3DObject(document.createElement("div"));
            k.element.classList.add("faceLabel");
            k.position.copy(a.axis).multiplyScalar(b.size);
            k.position.negate();
            k.element.innerHTML = a.face.toUpperCase();
            b.object3D.add(k)
        });
        b.right.label.rotation.y = 0.5 * Math.PI;
        b.left.label.rotation.y = -0.5 * Math.PI;
        b.back.label.rotation.y = Math.PI;
        b.up.label.rotation.x = -0.5 * Math.PI;
        b.down.label.rotation.x = 0.5 * Math.PI;
        b.showFaceLabels = function () {
            e().forEach(c);
            this.showingFaceLabels = !0;
            return this
        }
            ;
        b.hideFaceLabels = function () {
            e().forEach(d);
            this.showingFaceLabels = !1;
            return this
        }
            ;
        ERNO.extend(ERNO.Cubelet.prototype, ERNO.renderers.CSS3DCubelet.methods);
        a.forEach(ERNO.renderers.CSS3DCubelet);
        requestAnimationFrame(f);
        SceneType && (THREE.Scene = SceneType);
        return g
    }
        ;
    ERNO.renderers.CSS3DCubelet = function () {
        return function (a) {
            var b = document.createElement("div");
            b.classList.add("cubelet");
            b.classList.add("cubeletId-" + a.id);
            a.css3DObject = new THREE.CSS3DObject(b);
            a.css3DObject.name = "css3DObject-" + a.id;
            a.add(a.css3DObject);
            var b = a.size / 2
                , c = ["rotateX(   0deg ) translateZ(" + b + "px ) rotateZ(   0deg )", "rotateX(  90deg ) translateZ(" + b + "px ) rotateZ(   0deg )", "rotateY(  90deg ) translateZ(" + b + "px ) rotateZ(   0deg )", "rotateX( -90deg ) translateZ(" + b + "px ) rotateZ(  90deg )", "rotateY( -90deg ) translateZ(" + b + "px ) rotateZ( -90deg )", "rotateY( 180deg ) translateZ(" + b + "px ) rotateZ( -90deg )"]
                , d = "axisZ axisY axisX axisY axisX axisZ".split(" ");
            a.faces.forEach(function (b) {
                b.element = document.createElement("div");
                b.element.classList.add("face");
                b.element.classList.add(d[b.id]);
                b.element.classList.add("face" + ERNO.Direction.getNameById(b.id).capitalize());
                a.css3DObject.element.appendChild(b.element);
                var f = document.createElement("div");
                f.classList.add("wireframe");
                b.element.appendChild(f);
                f = document.createElement("div");
                f.classList.add("id");
                b.element.appendChild(f);
                var g = document.createElement("span");
                g.classList.add("underline");
                g.innerText = a.id;
                f.appendChild(g);
                f = b.element.style;
                f.OTransform = f.MozTransform = f.WebkitTransform = f.transform = c[b.id];
                b.isIntrovert ? (b.element.classList.add("faceIntroverted"),
                    b.element.appendChild(document.createElement("div"))) : (b.element.classList.add("faceExtroverted"),
                        f = document.createElement("div"),
                        f.classList.add("sticker"),
                        f.classList.add(b.color.name),
                        b.element.appendChild(f),
                        a.isStickerCubelet && f.classList.add("stickerLogo"),
                        f = document.createElement("div"),
                        f.classList.add("text"),
                        f.innerText = b.id,
                        b.text = f,
                        b.element.appendChild(f))
            });
            a.show();
            a.showIntroverts();
            a.showPlastics();
            a.showStickers();
            a.hideIds();
            a.hideTexts();
            a.hideWireframes()
        }
    }();
    ERNO.renderers.CSS3DCubelet.methods = function () {
        function a(a) {
            a.style.display = "block"
        }
        function b(a) {
            a.style.display = "none"
        }
        return {
            getFaceElements: function (a) {
                return Array.prototype.slice.call(this.css3DObject.element.querySelectorAll(".face" + (a || "")))
            },
            show: function () {
                a(this.css3DObject.element);
                this.showing = !0
            },
            hide: function () {
                b(this.css3DObject.element);
                this.showing = !1
            },
            showExtroverts: function () {
                this.getFaceElements(".faceExtroverted").forEach(a);
                this.showingExtroverts = !0
            },
            hideExtroverts: function () {
                this.getFaceElements(".faceExtroverted").forEach(b);
                this.showingExtroverts = !1
            },
            showIntroverts: function () {
                var b = new THREE.Vector3, d = new THREE.Matrix4, e;
                return function (f, g) {
                    e = "";
                    f && (d.getInverse(this.matrix),
                        b.copy(f).transformDirection(d),
                        e = 1 === Math.abs(Math.round(b.x)) ? ".axisX" : 1 === Math.round(Math.abs(b.y)) ? ".axisY" : ".axisZ");
                    this.getFaceElements(".faceIntroverted" + (void 0 !== f ? e : "")).forEach(a);
                    g || (this.showingIntroverts = !0)
                }
            }(),
            hideIntroverts: function () {
                var a = new THREE.Vector3, d = new THREE.Matrix4, e;
                return function (f, g) {
                    e = "";
                    f && (d.getInverse(this.matrix),
                        a.copy(f).transformDirection(d),
                        e = 1 === Math.abs(Math.round(a.x)) ? ".axisX" : 1 === Math.round(Math.abs(a.y)) ? ".axisY" : ".axisZ");
                    this.getFaceElements(".faceIntroverted" + (void 0 !== f ? e : "")).forEach(b);
                    g || (this.showingIntroverts = !1)
                }
            }(),
            showPlastics: function () {
                this.getFaceElements().forEach(function (a) {
                    a.classList.remove("faceTransparent")
                });
                this.showingPlastics = !0
            },
            hidePlastics: function () {
                this.getFaceElements().forEach(function (a) {
                    a.classList.add("faceTransparent")
                });
                this.showingPlastics = !1
            },
            hideStickers: function () {
                this.getFaceElements(" .sticker").forEach(b);
                this.showingStickers = !1
            },
            showStickers: function () {
                this.getFaceElements(" .sticker").forEach(a);
                this.showingStickers = !0
            },
            showWireframes: function () {
                this.getFaceElements(" .wireframe").forEach(a);
                this.showingWireframes = !0
            },
            hideWireframes: function () {
                this.getFaceElements(" .wireframe").forEach(b);
                this.showingWireframes = !1
            },
            showIds: function () {
                this.getFaceElements(" .id").forEach(a);
                this.showingIds = !0
            },
            hideIds: function () {
                this.getFaceElements(" .id").forEach(b);
                this.showingIds = !1
            },
            showTexts: function () {
                this.getFaceElements(" .text").forEach(a);
                this.showingTexts = !0
            },
            hideTexts: function () {
                this.getFaceElements(" .text").forEach(b);
                this.showingTexts = !1
            },
            getOpacity: function () {
                return this.opacity
            },
            setOpacity: function (a, b) {
                this.opacityTween && this.opacityTween.stop();
                void 0 === a && (a = 1);
                if (a !== this.opacity) {
                    var e = this
                        , f = (a - this.opacity).absolute().scale(0, 1, 0, 200);
                    this.opacityTween = (new TWEEN.Tween({
                        opacity: this.opacity
                    })).to({
                        opacity: a
                    }, f).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
                        e.css3DObject.element.style.opacity = this.opacity;
                        e.opacity = this.opacity
                    }).onComplete(function () {
                        b instanceof Function && b()
                    }).start()
                }
            },
            getStickersOpacity: function (a) {
                return parseFloat(this.getFaceElements(" .sticker")[0].style.opacity)
            },
            setStickersOpacity: function (a) {
                void 0 === a && (a = 0.2);
                var b = a;
                this.getFaceElements(" .sticker").forEach(function (a) {
                    a.style.opacity = b.toString()
                })
            }
        }
    }();
    ERNO.Cube = function (a) {
        ERNO.Group.call(this);
        a = a || {};
        this.paused = void 0 === a.paused ? !1 : a.paused;
        this.autoRotate = void 0 === a.autoRotate ? !1 : a.autoRotate;
        this.keyboardControlsEnabled = void 0 === a.keyboardControlsEnabled ? !0 : a.keyboardControlsEnabled;
        this.mouseControlsEnabled = void 0 === a.mouseControlsEnabled ? !0 : a.mouseControlsEnabled;
        var b = a.renderer || ERNO.renderers.CSS3D;
        a.textureSize = void 0 === a.textureSize ? 120 : a.textureSize;
        this.isShuffling = !1;
        this.isReady = !0;
        this.undoing = this.isSolving = !1;
        this.render = !0;
        this.finalShuffle = null;
        this.hideInvisibleFaces = void 0 === a.hideInvisibleFaces ? !1 : a.hideInvisibleFaces;
        this.moveCounter = this.time = 0;
        this.taskQueue = new ERNO.Queue;
        this.twistQueue = new ERNO.Queue(ERNO.Twist.validate);
        this.historyQueue = new ERNO.Queue(ERNO.Twist.validate);
        this.twistDuration = void 0 !== a.twistDuration ? a.twistDuration : 500;
        this.shuffleMethod = this.PRESERVE_LOGO;
        this.size = 3 * a.textureSize;
        this.cubeletSize = this.size / 3;
        this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 6E3);
        this.camera.position.z = 4 * this.size;
        this.object3D = new THREE.Object3D;
        this.autoRotateObj3D = new THREE.Object3D;
        this.rotation = this.object3D.rotation;
        this.quaternion = this.object3D.quaternion;
        this.position = this.object3D.position;
        this.matrix = this.object3D.matrix;
        this.matrixWorld = this.object3D.matrixWorld;
        this.rotation.set(25 * Math.PI / 180, -30 * Math.PI / 180, 0);
        this.rotationDelta = new THREE.Euler(0.1 * Math.PI / 180, 0.15 * Math.PI / 180, 0);
        this.cubelets = [];
        [[W, O, , , G], [W, O, , , ,], [W, O, B, , ,], [W, , , , G], [W, , , , ,], [W, , B, , ,], [W, , , R, G], [W, , , R, ,], [W, , B, R, ,], [, O, , , G], [, O, , , ,], [, O, B, , ,], [, , , , G], [, , , , ,], [, , B, , ,], [, , , R, G], [, , , R, ,], [, , B, R, ,], [, O, , , G, Y], [, O, , , , Y], [, O, B, , , Y], [, , , , G, Y], [, , , , , Y], [, , B, , , Y], [, , , R, G, Y], [, , , R, , Y], [, , B, R, , Y]].forEach(function (a, b) {
            this.cubelets.push(new ERNO.Cubelet(this, b, a))
        }
            .bind(this));
        this.core = new ERNO.Group;
        this.centers = new ERNO.Group;
        this.edges = new ERNO.Group;
        this.corners = new ERNO.Group;
        this.crosses = new ERNO.Group;
        this.cubelets.forEach(function (a, b) {
            "core" === a.type && this.core.add(a);
            "center" === a.type && this.centers.add(a);
            "edge" === a.type && this.edges.add(a);
            "corner" === a.type && this.corners.add(a);
            "center" !== a.type && "edge" !== a.type || this.crosses.add(a)
        }
            .bind(this));
        this.left = new ERNO.Slice([24, 21, 18, 15, 12, 9, 6, 3, 0], this);
        this.left.name = "left";
        this.middle = new ERNO.Slice([25, 22, 19, 16, 13, 10, 7, 4, 1], this);
        this.middle.name = "middle";
        this.right = new ERNO.Slice([2, 11, 20, 5, 14, 23, 8, 17, 26], this);
        this.right.name = "right";
        this.right.neighbour = this.middle;
        this.left.neighbour = this.middle;
        this.up = new ERNO.Slice([18, 19, 20, 9, 10, 11, 0, 1, 2], this);
        this.up.name = "up";
        this.equator = new ERNO.Slice([21, 22, 23, 12, 13, 14, 3, 4, 5], this);
        this.equator.name = "equator";
        this.down = new ERNO.Slice([8, 17, 26, 7, 16, 25, 6, 15, 24], this);
        this.down.name = "down";
        this.down.neighbour = this.equator;
        this.up.neighbour = this.equator;
        this.front = new ERNO.Slice([0, 1, 2, 3, 4, 5, 6, 7, 8], this);
        this.front.name = "front";
        this.standing = new ERNO.Slice([9, 10, 11, 12, 13, 14, 15, 16, 17], this);
        this.standing.name = "standing";
        this.back = new ERNO.Slice([26, 23, 20, 25, 22, 19, 24, 21, 18], this);
        this.back.name = "back";
        this.back.neighbour = this.standing;
        this.front.neighbour = this.standing;
        this.faces = [this.front, this.up, this.right, this.down, this.left, this.back];
        this.slices = [this.left, this.middle, this.right, this.down, this.equator, this.up, this.back, this.standing, this.front];
        var c = function (a) {
            this.dispatchEvent(new CustomEvent("onTwistComplete", {
                detail: {
                    slice: a.target
                }
            }))
        }
            .bind(this);
        this.slices.forEach(function (a) {
            a.addEventListener("change", c)
        });
        var d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
        this.slicesDictionary = {
            f: this.front,
            s: this.standing,
            b: this.back,
            u: this.up,
            e: this.equator,
            d: this.down,
            r: this.right,
            m: this.middle,
            l: this.left,
            x: new ERNO.Slice(d, this),
            y: new ERNO.Slice(d, this),
            z: new ERNO.Slice(d, this)
        };
        this.slicesDictionary.x.ableToHideInternalFaces = !1;
        this.slicesDictionary.y.ableToHideInternalFaces = !1;
        this.slicesDictionary.z.ableToHideInternalFaces = !1;
        this.slicesDictionary.x.axis.set(-1, 0, 0);
        this.slicesDictionary.y.axis.set(0, -1, 0);
        this.slicesDictionary.z.axis.set(0, 0, -1);
        this.cubelets.forEach(function (a, b) {
            a.setAddress(b)
        });
        this.renderer = b(this.cubelets, this);
        this.domElement = this.renderer.domElement;
        this.domElement.classList.add("cube");
        this.domElement.style.fontSize = this.cubeletSize + "px";
        this.autoRotateObj3D.add(this.object3D);
        this.hideInvisibleFaces && this.hideIntroverts(null, !0);
        this.mouseInteraction = new ERNO.Interaction(this, this.camera, this.domElement);
        this.mouseInteraction.addEventListener("click", function (a) {
            this.dispatchEvent(new CustomEvent("click", {
                detail: a.detail
            }))
        }
            .bind(this));
        this.controls = new (a.controls || ERNO.Controls)(this, this.camera, this.domElement);
        this.folds = [new ERNO.Fold(this.front, this.right), new ERNO.Fold(this.left, this.up), new ERNO.Fold(this.down, this.back)];
        this.setSize(400, 200);
        this.loop = this.loop.bind(this);
        requestAnimationFrame(this.loop);
        document.addEventListener("keypress", function (a) {
            "input" !== a.target.tagName.toLowerCase() && "textarea" !== a.target.tagName.toLowerCase() && !this.mouseInteraction.active && this.keyboardControlsEnabled && (a = String.fromCharCode(a.which),
                0 <= "XxRrMmLlYyUuEeDdZzFfSsBb".indexOf(a) && this.twist(a))
        }
            .bind(this))
    }
        ;
    ERNO.Cube.prototype = Object.create(ERNO.Group.prototype);
    ERNO.Cube.prototype.constructor = ERNO.Cube;
    ERNO.extend(ERNO.Cube.prototype, {
        shuffle: function (a, b) {
            a = a || 30;
            b = b || "";
            var c = this.shuffleMethod.slice(), d, e = new ERNO.Twist, f, g = b.length, h = 0;
            this.twistQueue.empty(!0);
            for (this.historyQueue.empty(!0); 0 < a--;) {
                if (b)
                    d.set(b[h]),
                        h = (h + 1) % g;
                else
                    for (f = c.split(""),
                        d = (new ERNO.Twist).copy(e); d.equals(e);)
                        d.set(f.splice(Math.floor(Math.random() * f.length), 1)[0]);
                d.isShuffle = !0;
                this.twist(d);
                e = d.getInverse()
            }
            this.finalShuffle = d
        },
        solve: function () {
            this.isSolving = !0
        },
        isSolved: function () {
            return this.front.isSolved(ERNO.Direction.FRONT) && this.up.isSolved(ERNO.Direction.UP) && this.right.isSolved(ERNO.Direction.RIGHT) && this.down.isSolved(ERNO.Direction.DOWN) && this.left.isSolved(ERNO.Direction.LEFT) && this.back.isSolved(ERNO.Direction.BACK)
        },
        undo: function () {
            0 < this.twistQueue.history.length && (this.historyQueue.add(this.twistQueue.undo().getInverse()),
                this.undoing = !0)
        },
        redo: function () {
            0 < this.twistQueue.future.length && (this.undoing = !0,
                this.historyQueue.empty(),
                this.historyQueue.add(this.twistQueue.redo()))
        },
        twist: function (a) {
            this.undoing && this.twistQueue.empty();
            this.historyQueue.empty();
            this.undoing = !1;
            this.twistQueue.add(a)
        },
        immediateTwist: function (a) {
            0.8 <= this.verbosity && console.log("Executing a twist command to rotate the " + a.group + " " + a.wise + " by", a.degrees, "degrees.");
            for (var b = this.slicesDictionary[a.command.toLowerCase()], c = (void 0 === a.degrees ? 90 : a.degrees) * a.vector, d = c.degreesToRadians(), e = Math.abs(d - b.rotation) / (0.5 * Math.PI) * this.twistDuration, f = b.indices.length, g; 0 < f--;)
                b.getCubelet(f).isTweening = !0;
            (new TWEEN.Tween(b)).to({
                rotation: d
            }, e).easing(TWEEN.Easing.Quartic.Out).onComplete(function () {
                b.rotation = d;
                b.axis.rotation = 0;
                for (f = b.indices.length; 0 < f--;)
                    g = b.getCubelet(f),
                        g.isTweening = !1,
                        g.updateMatrix(),
                        g.matrixSlice.copy(g.matrix);
                0 !== c && (b.rotateGroupMappingOnAxis(d),
                    this.dispatchEvent(new CustomEvent("onTwistComplete", {
                        detail: {
                            slice: b,
                            twist: a
                        }
                    })));
                a === this.finalShuffle && (this.finalShuffle = null,
                    this.dispatchEvent(new CustomEvent("onShuffleComplete", {
                        detail: {
                            slice: b,
                            twist: a
                        }
                    })))
            }
                .bind(this)).start(this.time)
        },
        getText: function (a) {
            if (void 0 === a)
                return [this.folds[0].getText(), this.folds[1].getText(), this.folds[2].getText()];
            if (_.isNumeric(a) && 0 <= a && 2 >= a)
                return this.folds[a].getText()
        },
        setText: function (a, b) {
            void 0 === b ? (this.folds[0].setText(a),
                this.folds[1].setText(a),
                this.folds[2].setText(a)) : _.isNumeric(b) && 0 <= b && 2 >= b && this.folds[b].setText(a)
        },
        setSize: function (a, b) {
            this.camera.aspect = a / b;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(a, b)
        },
        PRESERVE_LOGO: "RrLlUuDdSsBb",
        ALL_SLICES: "RrMmLlUuEeDdFfSsBb",
        EVERYTHING: "XxRrMmLlYyUuEeDdZzFfSsBb",
        loop: function () {
            var a = 0;
            return function () {
                requestAnimationFrame(this.loop);
                var b = "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now()
                    , c = b - (a || b);
                a = b;
                this.paused || (this.time += c,
                    TWEEN.update(this.time),
                    this.autoRotate && (this.rotation.x += this.rotationDelta.x,
                        this.rotation.y += this.rotationDelta.y,
                        this.rotation.z += this.rotationDelta.z),
                    this.isReady && 0 === this.isTweening() && (b = this.undoing ? this.historyQueue : this.twistQueue,
                        0 === b.future.length ? this.isSolving && window.solver ? this.isSolving = window.solver.consider(this) : !0 === this.taskQueue.isReady && (b = this.taskQueue.do(),
                            b instanceof Function && b()) : (c = b.do(),
                                "x" !== c.command.toLowerCase() && "y" !== c.command.toLowerCase() && "z" !== c.command.toLowerCase() && 0 !== c.degrees && (this.moveCounter += this.undoing ? -1 : 1),
                                (0 === c.degrees || c.isShuffle) && b.purge(c),
                                this.immediateTwist(c))),
                    this.mouseInteraction.enabled = this.mouseControlsEnabled && !this.finalShuffle,
                    this.mouseInteraction.update(),
                    this.controls.enabled = this.mouseControlsEnabled && !this.mouseInteraction.active,
                    this.controls.update())
            }
        }()
    });
    ERNO.Solver = function () {
        this.logic = function (a) {
            return !1
        }
    }
        ;
    ERNO.Solver.prototype.consider = function (a) {
        if (void 0 === a)
            return console.warn("A cube [Cube] argument must be specified for Solver.consider()."),
                !1;
        if (!1 === a instanceof ERNO.Cube)
            return console.warn("The cube argument provided is not a valid Cube."),
                !1;
        a.isShuffling = !1;
        return a.isSolved() ? (ERNO.Solver.prototype.explain("I\u2019ve found that the cube is already solved."),
            !1) : this.logic(a)
    }
        ;
    ERNO.Solver.prototype.hint = function (a) {
        console.log("%c" + a + "%c\n", "background-color: #EEE; color: #333", "")
    }
        ;
    ERNO.Solver.prototype.explain = function (a) {
        console.log("Solver says: %c " + a + " %c\n", "color: #080", "")
    }
        ;
    window.ERNO = ERNO;
    window._ = _;
    window.TWEEN = window.TWEEN || TWEEN;
    window.THREE = window.THREE || THREE;
}())
