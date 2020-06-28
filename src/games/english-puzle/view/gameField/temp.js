!function (e) {
  var a = {};

  function t(i) {
    if (a[i]) return a[i].exports;
    var n = a[i] = {i : i, l : !1, exports : {}};
    return e[i].call( n.exports, n, n.exports, t ), n.l = !0, n.exports
  }

  t.m = e, t.c = a, t.d = function (e, a, i) {
    t.o( e, a ) || Object.defineProperty( e, a, {enumerable : !0, get : i} )
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty( e, Symbol.toStringTag, {value : "Module"} ), Object.defineProperty( e, "__esModule", {value : !0} )
  }, t.t = function (e, a) {
    if (1 & a && (e = t( e )), 8 & a) return e;
    if (4 & a && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create( null );
    if (t.r( i ), Object.defineProperty( i, "default", {
      enumerable : !0,
      value      : e
    } ), 2 & a && "string" != typeof e) for (var n in e) t.d( i, n, function (a) {
      return e[a]
    }.bind( null, n ) );
    return i
  }, t.n = function (e) {
    var a = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return t.d( a, "a", a ), a
  }, t.o = function (e, a) {
    return Object.prototype.hasOwnProperty.call( e, a )
  }, t.p = "", t( t.s = 150 )
}( [function (e, a, t) {
  var i = t( 1 ), n = t( 60 ), s = t( 9 ), o = t( 61 ), l = t( 65 ), r = t( 103 ), m = n( "wks" ), p = i.Symbol,
    d = r ? p : p && p.withoutSetter || o;
  e.exports = function (e) {
    return s( m, e ) || (l && s( p, e ) ? m[e] = p[e] : m[e] = d( "Symbol." + e )), m[e]
  }
}, function (e, a, t) {
  (function (a) {
    var t = function (e) {
      return e && e.Math == Math && e
    };
    e.exports = t( "object" == typeof globalThis && globalThis ) || t( "object" == typeof window && window ) || t( "object" == typeof self && self ) || t( "object" == typeof a && a ) || Function( "return this" )()
  }).call( this, t( 57 ) )
}, function (e, a, t) {
  var i = t( 1 ), n = t( 33 ).f, s = t( 13 ), o = t( 17 ), l = t( 36 ), r = t( 98 ), m = t( 63 );
  e.exports = function (e, a) {
    var t, p, d, g, x, u = e.target, f = e.global, h = e.stat;
    if (t = f ? i : h ? i[u] || l( u, {} ) : (i[u] || {}).prototype) for (p in a) {
      if (g = a[p], d = e.noTargetGet ? (x = n( t, p )) && x.value : t[p], !m( f ? p : u + (h ? "." : "#") + p, e.forced ) && void 0 !== d) {
        if (typeof g == typeof d) continue;
        r( g, d )
      }
      (e.sham || d && d.sham) && s( g, "sham", !0 ), o( t, p, g, e )
    }
  }
}, function (e, a) {
  e.exports = function (e) {
    try {
      return !!e()
    } catch (e) {
      return !0
    }
  }
}, function (e, a, t) {
  "use strict";
  var i, n = function () {
    return void 0 === i && (i = Boolean( window && document && document.all && !window.atob )), i
  }, s = function () {
    var e = {};
    return function (a) {
      if (void 0 === e[a]) {
        var t = document.querySelector( a );
        if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
          t = t.contentDocument.head
        } catch (e) {
          t = null
        }
        e[a] = t
      }
      return e[a]
    }
  }(), o = [];

  function l(e) {
    for (var a = -1, t = 0; t < o.length; t++) if (o[t].identifier === e) {
      a = t;
      break
    }
    return a
  }

  function r(e, a) {
    for (var t = {}, i = [], n = 0; n < e.length; n++) {
      var s = e[n], r = a.base ? s[0] + a.base : s[0], m = t[r] || 0, p = "".concat( r, " " ).concat( m );
      t[r] = m + 1;
      var d = l( p ), g = {css : s[1], media : s[2], sourceMap : s[3]};
      -1 !== d ? (o[d].references++, o[d].updater( g )) : o.push( {
        identifier : p,
        updater    : h( g, a ),
        references : 1
      } ), i.push( p )
    }
    return i
  }

  function m(e) {
    var a = document.createElement( "style" ), i = e.attributes || {};
    if (void 0 === i.nonce) {
      var n = t.nc;
      n && (i.nonce = n)
    }
    if (Object.keys( i ).forEach( (function (e) {
      a.setAttribute( e, i[e] )
    }) ), "function" == typeof e.insert) e.insert( a ); else {
      var o = s( e.insert || "head" );
      if (!o) throw new Error( "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid." );
      o.appendChild( a )
    }
    return a
  }

  var p, d = (p = [], function (e, a) {
    return p[e] = a, p.filter( Boolean ).join( "\n" )
  });

  function g(e, a, t, i) {
    var n = t ? "" : i.media ? "@media ".concat( i.media, " {" ).concat( i.css, "}" ) : i.css;
    if (e.styleSheet) e.styleSheet.cssText = d( a, n ); else {
      var s = document.createTextNode( n ), o = e.childNodes;
      o[a] && e.removeChild( o[a] ), o.length ? e.insertBefore( s, o[a] ) : e.appendChild( s )
    }
  }

  function x(e, a, t) {
    var i = t.css, n = t.media, s = t.sourceMap;
    if (n ? e.setAttribute( "media", n ) : e.removeAttribute( "media" ), s && btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat( btoa( unescape( encodeURIComponent( JSON.stringify( s ) ) ) ), " */" )), e.styleSheet) e.styleSheet.cssText = i; else {
      for (; e.firstChild;) e.removeChild( e.firstChild );
      e.appendChild( document.createTextNode( i ) )
    }
  }

  var u = null, f = 0;

  function h(e, a) {
    var t, i, n;
    if (a.singleton) {
      var s = f++;
      t = u || (u = m( a )), i = g.bind( null, t, s, !1 ), n = g.bind( null, t, s, !0 )
    } else t = m( a ), i = x.bind( null, t, a ), n = function () {
      !function (e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild( e )
      }( t )
    };
    return i( e ), function (a) {
      if (a) {
        if (a.css === e.css && a.media === e.media && a.sourceMap === e.sourceMap) return;
        i( e = a )
      } else n()
    }
  }

  e.exports = function (e, a) {
    (a = a || {}).singleton || "boolean" == typeof a.singleton || (a.singleton = n());
    var t = r( e = e || [], a );
    return function (e) {
      if (e = e || [], "[object Array]" === Object.prototype.toString.call( e )) {
        for (var i = 0; i < t.length; i++) {
          var n = l( t[i] );
          o[n].references--
        }
        for (var s = r( e, a ), m = 0; m < t.length; m++) {
          var p = l( t[m] );
          0 === o[p].references && (o[p].updater(), o.splice( p, 1 ))
        }
        t = s
      }
    }
  }
}, function (e, a, t) {
  var i = {"./pages/puzzle/assets/images/Flat-Mountains.svg" : 6};

  function n(e) {
    var a = s( e );
    return t( a )
  }

  function s(e) {
    if (!t.o( i, e )) {
      var a = new Error( "Cannot find module '" + e + "'" );
      throw a.code = "MODULE_NOT_FOUND", a
    }
    return i[e]
  }

  n.keys = function () {
    return Object.keys( i )
  }, n.resolve = s, e.exports = n, n.id = 5
}, function (e, a) {
  e.exports = "../img/Flat-Mountains.svg"
}, function (e, a) {
  e.exports = function (e) {
    return "object" == typeof e ? null !== e : "function" == typeof e
  }
}, function (e, a, t) {
  var i = t( 7 );
  e.exports = function (e) {
    if (!i( e )) throw TypeError( String( e ) + " is not an object" );
    return e
  }
}, function (e, a) {
  var t = {}.hasOwnProperty;
  e.exports = function (e, a) {
    return t.call( e, a )
  }
}, function (e, a, t) {
  var i = t( 42 ), n = Math.min;
  e.exports = function (e) {
    return e > 0 ? n( i( e ), 9007199254740991 ) : 0
  }
}, function (e, a, t) {
  var i = t( 3 );
  e.exports = !i( (function () {
    return 7 != Object.defineProperty( {}, 1, {
      get : function () {
        return 7
      }
    } )[1]
  }) )
}, function (e, a) {
  var t = {}.toString;
  e.exports = function (e) {
    return t.call( e ).slice( 8, -1 )
  }
}, function (e, a, t) {
  var i = t( 11 ), n = t( 14 ), s = t( 24 );
  e.exports = i ? function (e, a, t) {
    return n.f( e, a, s( 1, t ) )
  } : function (e, a, t) {
    return e[a] = t, e
  }
}, function (e, a, t) {
  var i = t( 11 ), n = t( 58 ), s = t( 8 ), o = t( 34 ), l = Object.defineProperty;
  a.f = i ? l : function (e, a, t) {
    if (s( e ), a = o( a, !0 ), s( t ), n) try {
      return l( e, a, t )
    } catch (e) {
    }
    if ("get" in t || "set" in t) throw TypeError( "Accessors not supported" );
    return "value" in t && (e[a] = t.value), e
  }
}, function (e, a, t) {
  var i = t( 20 );
  e.exports = function (e) {
    return Object( i( e ) )
  }
}, function (e, a, t) {
  var i = t( 11 ), n = t( 3 ), s = t( 9 ), o = Object.defineProperty, l = {}, r = function (e) {
    throw e
  };
  e.exports = function (e, a) {
    if (s( l, e )) return l[e];
    a || (a = {});
    var t = [][e], m = !!s( a, "ACCESSORS" ) && a.ACCESSORS, p = s( a, 0 ) ? a[0] : r, d = s( a, 1 ) ? a[1] : void 0;
    return l[e] = !!t && !n( (function () {
      if (m && !i) return !0;
      var e = {length : -1};
      m ? o( e, 1, {enumerable : !0, get : r} ) : e[1] = 1, t.call( e, p, d )
    }) )
  }
}, function (e, a, t) {
  var i = t( 1 ), n = t( 13 ), s = t( 9 ), o = t( 36 ), l = t( 37 ), r = t( 38 ), m = r.get, p = r.enforce,
    d = String( String ).split( "String" );
  (e.exports = function (e, a, t, l) {
    var r = !!l && !!l.unsafe, m = !!l && !!l.enumerable, g = !!l && !!l.noTargetGet;
    "function" == typeof t && ("string" != typeof a || s( t, "name" ) || n( t, "name", a ), p( t ).source = d.join( "string" == typeof a ? a : "" )), e !== i ? (r ? !g && e[a] && (m = !0) : delete e[a], m ? e[a] = t : n( e, a, t )) : m ? e[a] = t : o( a, t )
  })( Function.prototype, "toString", (function () {
    return "function" == typeof this && m( this ).source || l( this )
  }) )
}, function (e, a) {
  e.exports = function (e) {
    if ("function" != typeof e) throw TypeError( String( e ) + " is not a function" );
    return e
  }
}, function (e, a, t) {
  var i = t( 25 ), n = t( 20 );
  e.exports = function (e) {
    return i( n( e ) )
  }
}, function (e, a) {
  e.exports = function (e) {
    if (null == e) throw TypeError( "Can't call method on " + e );
    return e
  }
}, function (e, a, t) {
  var i = t( 100 ), n = t( 1 ), s = function (e) {
    return "function" == typeof e ? e : void 0
  };
  e.exports = function (e, a) {
    return arguments.length < 2 ? s( i[e] ) || s( n[e] ) : i[e] && i[e][a] || n[e] && n[e][a]
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 3 );
  e.exports = function (e, a) {
    var t = [][e];
    return !!t && i( (function () {
      t.call( null, a || function () {
        throw 1
      }, 1 )
    }) )
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 2 ), n = t( 3 ), s = t( 45 ), o = t( 7 ), l = t( 15 ), r = t( 10 ), m = t( 46 ), p = t( 64 ), d = t( 47 ),
    g = t( 0 ), x = t( 48 ), u = g( "isConcatSpreadable" ), f = x >= 51 || !n( (function () {
      var e = [];
      return e[u] = !1, e.concat()[0] !== e
    }) ), h = d( "concat" ), _ = function (e) {
      if (!o( e )) return !1;
      var a = e[u];
      return void 0 !== a ? !!a : s( e )
    };
  i( {target : "Array", proto : !0, forced : !f || !h}, {
    concat : function (e) {
      var a, t, i, n, s, o = l( this ), d = p( o, 0 ), g = 0;
      for (a = -1, i = arguments.length; a < i; a++) if (_( s = -1 === a ? o : arguments[a] )) {
        if (g + (n = r( s.length )) > 9007199254740991) throw TypeError( "Maximum allowed index exceeded" );
        for (t = 0; t < n; t++, g++) t in s && m( d, g, s[t] )
      } else {
        if (g >= 9007199254740991) throw TypeError( "Maximum allowed index exceeded" );
        m( d, g++, s )
      }
      return d.length = g, d
    }
  } )
}, function (e, a) {
  e.exports = function (e, a) {
    return {enumerable : !(1 & e), configurable : !(2 & e), writable : !(4 & e), value : a}
  }
}, function (e, a, t) {
  var i = t( 3 ), n = t( 12 ), s = "".split;
  e.exports = i( (function () {
    return !Object( "z" ).propertyIsEnumerable( 0 )
  }) ) ? function (e) {
    return "String" == n( e ) ? s.call( e, "" ) : Object( e )
  } : Object
}, function (e, a) {
  e.exports = !1
}, function (e, a, t) {
  "use strict";
  var i = t( 2 ), n = t( 67 );
  i( {target : "Array", proto : !0, forced : [].forEach != n}, {forEach : n} )
}, function (e, a, t) {
  var i = t( 18 );
  e.exports = function (e, a, t) {
    if (i( e ), void 0 === a) return e;
    switch (t) {
      case 0:
        return function () {
          return e.call( a )
        };
      case 1:
        return function (t) {
          return e.call( a, t )
        };
      case 2:
        return function (t, i) {
          return e.call( a, t, i )
        };
      case 3:
        return function (t, i, n) {
          return e.call( a, t, i, n )
        }
    }
    return function () {
      return e.apply( a, arguments )
    }
  }
}, function (e, a) {
  e.exports = {}
}, function (e, a, t) {
  var i = t( 1 ), n = t( 118 ), s = t( 67 ), o = t( 13 );
  for (var l in n) {
    var r = i[l], m = r && r.prototype;
    if (m && m.forEach !== s) try {
      o( m, "forEach", s )
    } catch (e) {
      m.forEach = s
    }
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 2 ), n = t( 32 );
  i( {target : "RegExp", proto : !0, forced : /./.exec !== n}, {exec : n} )
}, function (e, a, t) {
  "use strict";
  var i, n, s = t( 120 ), o = t( 121 ), l = RegExp.prototype.exec, r = String.prototype.replace, m = l,
    p = (i = /a/, n = /b*/g, l.call( i, "a" ), l.call( n, "a" ), 0 !== i.lastIndex || 0 !== n.lastIndex),
    d = o.UNSUPPORTED_Y || o.BROKEN_CARET, g = void 0 !== /()??/.exec( "" )[1];
  (p || g || d) && (m = function (e) {
    var a, t, i, n, o = this, m = d && o.sticky, x = s.call( o ), u = o.source, f = 0, h = e;
    return m && (-1 === (x = x.replace( "y", "" )).indexOf( "g" ) && (x += "g"), h = String( e ).slice( o.lastIndex ), o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== e[o.lastIndex - 1]) && (u = "(?: " + u + ")", h = " " + h, f++), t = new RegExp( "^(?:" + u + ")", x )), g && (t = new RegExp( "^" + u + "$(?!\\s)", x )), p && (a = o.lastIndex), i = l.call( m ? t : o, h ), m ? i ? (i.input = i.input.slice( f ), i[0] = i[0].slice( f ), i.index = o.lastIndex, o.lastIndex += i[0].length) : o.lastIndex = 0 : p && i && (o.lastIndex = o.global ? i.index + i[0].length : a), g && i && i.length > 1 && r.call( i[0], t, (function () {
      for (n = 1; n < arguments.length - 2; n++) void 0 === arguments[n] && (i[n] = void 0)
    }) ), i
  }), e.exports = m
}, function (e, a, t) {
  var i = t( 11 ), n = t( 96 ), s = t( 24 ), o = t( 19 ), l = t( 34 ), r = t( 9 ), m = t( 58 ),
    p = Object.getOwnPropertyDescriptor;
  a.f = i ? p : function (e, a) {
    if (e = o( e ), a = l( a, !0 ), m) try {
      return p( e, a )
    } catch (e) {
    }
    if (r( e, a )) return s( !n.f.call( e, a ), e[a] )
  }
}, function (e, a, t) {
  var i = t( 7 );
  e.exports = function (e, a) {
    if (!i( e )) return e;
    var t, n;
    if (a && "function" == typeof(t = e.toString) && !i( n = t.call( e ) )) return n;
    if ("function" == typeof(t = e.valueOf) && !i( n = t.call( e ) )) return n;
    if (!a && "function" == typeof(t = e.toString) && !i( n = t.call( e ) )) return n;
    throw TypeError( "Can't convert object to primitive value" )
  }
}, function (e, a, t) {
  var i = t( 1 ), n = t( 7 ), s = i.document, o = n( s ) && n( s.createElement );
  e.exports = function (e) {
    return o ? s.createElement( e ) : {}
  }
}, function (e, a, t) {
  var i = t( 1 ), n = t( 13 );
  e.exports = function (e, a) {
    try {
      n( i, e, a )
    } catch (t) {
      i[e] = a
    }
    return a
  }
}, function (e, a, t) {
  var i = t( 59 ), n = Function.toString;
  "function" != typeof i.inspectSource && (i.inspectSource = function (e) {
    return n.call( e )
  }), e.exports = i.inspectSource
}, function (e, a, t) {
  var i, n, s, o = t( 97 ), l = t( 1 ), r = t( 7 ), m = t( 13 ), p = t( 9 ), d = t( 39 ), g = t( 40 ), x = l.WeakMap;
  if (o) {
    var u = new x, f = u.get, h = u.has, _ = u.set;
    i = function (e, a) {
      return _.call( u, e, a ), a
    }, n = function (e) {
      return f.call( u, e ) || {}
    }, s = function (e) {
      return h.call( u, e )
    }
  } else {
    var c = d( "state" );
    g[c] = !0, i = function (e, a) {
      return m( e, c, a ), a
    }, n = function (e) {
      return p( e, c ) ? e[c] : {}
    }, s = function (e) {
      return p( e, c )
    }
  }
  e.exports = {
    set          : i, get : n, has : s, enforce : function (e) {
      return s( e ) ? n( e ) : i( e, {} )
    }, getterFor : function (e) {
      return function (a) {
        var t;
        if (!r( a ) || (t = n( a )).type !== e) throw TypeError( "Incompatible receiver, " + e + " required" );
        return t
      }
    }
  }
}, function (e, a, t) {
  var i = t( 60 ), n = t( 61 ), s = i( "keys" );
  e.exports = function (e) {
    return s[e] || (s[e] = n( e ))
  }
}, function (e, a) {
  e.exports = {}
}, function (e, a, t) {
  var i = t( 19 ), n = t( 10 ), s = t( 43 ), o = function (e) {
    return function (a, t, o) {
      var l, r = i( a ), m = n( r.length ), p = s( o, m );
      if (e && t != t) {
        for (; m > p;) if ((l = r[p++]) != l) return !0
      } else for (; m > p; p++) if ((e || p in r) && r[p] === t) return e || p || 0;
      return !e && -1
    }
  };
  e.exports = {includes : o( !0 ), indexOf : o( !1 )}
}, function (e, a) {
  var t = Math.ceil, i = Math.floor;
  e.exports = function (e) {
    return isNaN( e = +e ) ? 0 : (e > 0 ? i : t)( e )
  }
}, function (e, a, t) {
  var i = t( 42 ), n = Math.max, s = Math.min;
  e.exports = function (e, a) {
    var t = i( e );
    return t < 0 ? n( t + a, 0 ) : s( t, a )
  }
}, function (e, a) {
  e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (e, a, t) {
  var i = t( 12 );
  e.exports = Array.isArray || function (e) {
    return "Array" == i( e )
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 34 ), n = t( 14 ), s = t( 24 );
  e.exports = function (e, a, t) {
    var o = i( a );
    o in e ? n.f( e, o, s( 0, t ) ) : e[o] = t
  }
}, function (e, a, t) {
  var i = t( 3 ), n = t( 0 ), s = t( 48 ), o = n( "species" );
  e.exports = function (e) {
    return s >= 51 || !i( (function () {
      var a = [];
      return (a.constructor = {})[o] = function () {
        return {foo : 1}
      }, 1 !== a[e]( Boolean ).foo
    }) )
  }
}, function (e, a, t) {
  var i, n, s = t( 1 ), o = t( 66 ), l = s.process, r = l && l.versions, m = r && r.v8;
  m ? n = (i = m.split( "." ))[0] + i[1] : o && (!(i = o.match( /Edge\/(\d+)/ )) || i[1] >= 74) && (i = o.match( /Chrome\/(\d+)/ )) && (n = i[1]), e.exports = n && +n
}, function (e, a, t) {
  var i = t( 28 ), n = t( 25 ), s = t( 15 ), o = t( 10 ), l = t( 64 ), r = [].push, m = function (e) {
    var a = 1 == e, t = 2 == e, m = 3 == e, p = 4 == e, d = 6 == e, g = 5 == e || d;
    return function (x, u, f, h) {
      for (var _, c, T = s( x ), w = n( T ), E = i( u, f, 3 ), M = o( w.length ), y = 0, v = h || l, b = a ? v( x, M ) : t ? v( x, 0 ) : void 0; M > y; y++) if ((g || y in w) && (c = E( _ = w[y], y, T ), e)) if (a) b[y] = c; else if (c) switch (e) {
        case 3:
          return !0;
        case 5:
          return _;
        case 6:
          return y;
        case 2:
          r.call( b, _ )
      } else if (p) return !1;
      return d ? -1 : m || p ? p : b
    }
  };
  e.exports = {
    forEach   : m( 0 ),
    map       : m( 1 ),
    filter    : m( 2 ),
    some      : m( 3 ),
    every     : m( 4 ),
    find      : m( 5 ),
    findIndex : m( 6 )
  }
}, function (e, a, t) {
  var i = t( 0 ), n = t( 69 ), s = t( 14 ), o = i( "unscopables" ), l = Array.prototype;
  null == l[o] && s.f( l, o, {configurable : !0, value : n( null )} ), e.exports = function (e) {
    l[o][e] = !0
  }
}, function (e, a, t) {
  var i = t( 52 ), n = t( 17 ), s = t( 106 );
  i || n( Object.prototype, "toString", s, {unsafe : !0} )
}, function (e, a, t) {
  var i = {};
  i[t( 0 )( "toStringTag" )] = "z", e.exports = "[object z]" === String( i )
}, function (e, a, t) {
  "use strict";
  var i, n, s, o, l = t( 2 ), r = t( 26 ), m = t( 1 ), p = t( 21 ), d = t( 107 ), g = t( 17 ), x = t( 108 ),
    u = t( 54 ), f = t( 109 ), h = t( 7 ), _ = t( 18 ), c = t( 110 ), T = t( 12 ), w = t( 37 ), E = t( 111 ),
    M = t( 75 ), y = t( 76 ), v = t( 77 ).set, b = t( 112 ), k = t( 113 ), j = t( 114 ), A = t( 79 ), I = t( 115 ),
    S = t( 38 ), C = t( 63 ), L = t( 0 ), O = t( 48 ), H = L( "species" ), W = "Promise", B = S.get, D = S.set,
    z = S.getterFor( W ), R = d, P = m.TypeError, q = m.document, $ = m.process, N = p( "fetch" ), F = A.f, V = F,
    G = "process" == T( $ ), J = !!(q && q.createEvent && m.dispatchEvent), Y = C( W, (function () {
      if (!(w( R ) !== String( R ))) {
        if (66 === O) return !0;
        if (!G && "function" != typeof PromiseRejectionEvent) return !0
      }
      if (r && !R.prototype.finally) return !0;
      if (O >= 51 && /native code/.test( R )) return !1;
      var e = R.resolve( 1 ), a = function (e) {
        e( (function () {
        }), (function () {
        }) )
      };
      return (e.constructor = {})[H] = a, !(e.then( (function () {
      }) ) instanceof a)
    }) ), K = Y || !M( (function (e) {
      R.all( e ).catch( (function () {
      }) )
    }) ), U = function (e) {
      var a;
      return !(!h( e ) || "function" != typeof(a = e.then)) && a
    }, X = function (e, a, t) {
      if (!a.notified) {
        a.notified = !0;
        var i = a.reactions;
        b( (function () {
          for (var n = a.value, s = 1 == a.state, o = 0; i.length > o;) {
            var l, r, m, p = i[o++], d = s ? p.ok : p.fail, g = p.resolve, x = p.reject, u = p.domain;
            try {
              d ? (s || (2 === a.rejection && ae( e, a ), a.rejection = 1), !0 === d ? l = n : (u && u.enter(), l = d( n ), u && (u.exit(), m = !0)), l === p.promise ? x( P( "Promise-chain cycle" ) ) : (r = U( l )) ? r.call( l, g, x ) : g( l )) : x( n )
            } catch (e) {
              u && !m && u.exit(), x( e )
            }
          }
          a.reactions = [], a.notified = !1, t && !a.rejection && Z( e, a )
        }) )
      }
    }, Q = function (e, a, t) {
      var i, n;
      J ? ((i = q.createEvent( "Event" )).promise = a, i.reason = t, i.initEvent( e, !1, !0 ), m.dispatchEvent( i )) : i = {
        promise : a,
        reason : t
      }, (n = m["on" + e]) ? n( i ) : "unhandledrejection" === e && j( "Unhandled promise rejection", t )
    }, Z = function (e, a) {
      v.call( m, (function () {
        var t, i = a.value;
        if (ee( a ) && (t = I( (function () {
          G ? $.emit( "unhandledRejection", i, e ) : Q( "unhandledrejection", e, i )
        }) ), a.rejection = G || ee( a ) ? 2 : 1, t.error)) throw t.value
      }) )
    }, ee = function (e) {
      return 1 !== e.rejection && !e.parent
    }, ae = function (e, a) {
      v.call( m, (function () {
        G ? $.emit( "rejectionHandled", e ) : Q( "rejectionhandled", e, a.value )
      }) )
    }, te = function (e, a, t, i) {
      return function (n) {
        e( a, t, n, i )
      }
    }, ie = function (e, a, t, i) {
      a.done || (a.done = !0, i && (a = i), a.value = t, a.state = 2, X( e, a, !0 ))
    }, ne = function (e, a, t, i) {
      if (!a.done) {
        a.done = !0, i && (a = i);
        try {
          if (e === t) throw P( "Promise can't be resolved itself" );
          var n = U( t );
          n ? b( (function () {
            var i = {done : !1};
            try {
              n.call( t, te( ne, e, i, a ), te( ie, e, i, a ) )
            } catch (t) {
              ie( e, i, t, a )
            }
          }) ) : (a.value = t, a.state = 1, X( e, a, !1 ))
        } catch (t) {
          ie( e, {done : !1}, t, a )
        }
      }
    };
  Y && (R = function (e) {
    c( this, R, W ), _( e ), i.call( this );
    var a = B( this );
    try {
      e( te( ne, this, a ), te( ie, this, a ) )
    } catch (e) {
      ie( this, a, e )
    }
  }, (i = function (e) {
    D( this, {
      type      : W,
      done      : !1,
      notified  : !1,
      parent    : !1,
      reactions : [],
      rejection : !1,
      state     : 0,
      value     : void 0
    } )
  }).prototype = x( R.prototype, {
    then     : function (e, a) {
      var t = z( this ), i = F( y( this, R ) );
      return i.ok = "function" != typeof e || e, i.fail = "function" == typeof a && a, i.domain = G ? $.domain : void 0, t.parent = !0, t.reactions.push( i ), 0 != t.state && X( this, t, !1 ), i.promise
    }, catch : function (e) {
      return this.then( void 0, e )
    }
  } ), n = function () {
    var e = new i, a = B( e );
    this.promise = e, this.resolve = te( ne, e, a ), this.reject = te( ie, e, a )
  }, A.f = F = function (e) {
    return e === R || e === s ? new n( e ) : V( e )
  }, r || "function" != typeof d || (o = d.prototype.then, g( d.prototype, "then", (function (e, a) {
    var t = this;
    return new R( (function (e, a) {
      o.call( t, e, a )
    }) ).then( e, a )
  }), {unsafe : !0} ), "function" == typeof N && l( {global : !0, enumerable : !0, forced : !0}, {
    fetch : function (e) {
      return k( R, N.apply( m, arguments ) )
    }
  } ))), l( {
    global : !0,
    wrap   : !0,
    forced : Y
  }, {Promise : R} ), u( R, W, !1, !0 ), f( W ), s = p( W ), l( {
    target : W,
    stat   : !0,
    forced : Y
  }, {
    reject : function (e) {
      var a = F( this );
      return a.reject.call( void 0, e ), a.promise
    }
  } ), l( {target : W, stat : !0, forced : r || Y}, {
    resolve : function (e) {
      return k( r && this === s ? R : this, e )
    }
  } ), l( {target : W, stat : !0, forced : K}, {
    all     : function (e) {
      var a = this, t = F( a ), i = t.resolve, n = t.reject, s = I( (function () {
        var t = _( a.resolve ), s = [], o = 0, l = 1;
        E( e, (function (e) {
          var r = o++, m = !1;
          s.push( void 0 ), l++, t.call( a, e ).then( (function (e) {
            m || (m = !0, s[r] = e, --l || i( s ))
          }), n )
        }) ), --l || i( s )
      }) );
      return s.error && n( s.value ), t.promise
    }, race : function (e) {
      var a = this, t = F( a ), i = t.reject, n = I( (function () {
        var n = _( a.resolve );
        E( e, (function (e) {
          n.call( a, e ).then( t.resolve, i )
        }) )
      }) );
      return n.error && i( n.value ), t.promise
    }
  } )
}, function (e, a, t) {
  var i = t( 14 ).f, n = t( 9 ), s = t( 0 )( "toStringTag" );
  e.exports = function (e, a, t) {
    e && !n( e = t ? e : e.prototype, s ) && i( e, s, {configurable : !0, value : a} )
  }
}, function (e, a, t) {
  var i = function (e) {
    "use strict";
    var a = Object.prototype, t = a.hasOwnProperty, i = "function" == typeof Symbol ? Symbol : {},
      n = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", o = i.toStringTag || "@@toStringTag";

    function l(e, a, t, i) {
      var n = a && a.prototype instanceof p ? a : p, s = Object.create( n.prototype ), o = new M( i || [] );
      return s._invoke = function (e, a, t) {
        var i = "suspendedStart";
        return function (n, s) {
          if ("executing" === i) throw new Error( "Generator is already running" );
          if ("completed" === i) {
            if ("throw" === n) throw s;
            return v()
          }
          for (t.method = n, t.arg = s; ;) {
            var o = t.delegate;
            if (o) {
              var l = T( o, t );
              if (l) {
                if (l === m) continue;
                return l
              }
            }
            if ("next" === t.method) t.sent = t._sent = t.arg; else if ("throw" === t.method) {
              if ("suspendedStart" === i) throw i = "completed", t.arg;
              t.dispatchException( t.arg )
            } else "return" === t.method && t.abrupt( "return", t.arg );
            i = "executing";
            var p = r( e, a, t );
            if ("normal" === p.type) {
              if (i = t.done ? "completed" : "suspendedYield", p.arg === m) continue;
              return {value : p.arg, done : t.done}
            }
            "throw" === p.type && (i = "completed", t.method = "throw", t.arg = p.arg)
          }
        }
      }( e, t, o ), s
    }

    function r(e, a, t) {
      try {
        return {type : "normal", arg : e.call( a, t )}
      } catch (e) {
        return {type : "throw", arg : e}
      }
    }

    e.wrap = l;
    var m = {};

    function p() {
    }

    function d() {
    }

    function g() {
    }

    var x = {};
    x[n] = function () {
      return this
    };
    var u = Object.getPrototypeOf, f = u && u( u( y( [] ) ) );
    f && f !== a && t.call( f, n ) && (x = f);
    var h = g.prototype = p.prototype = Object.create( x );

    function _(e) {
      ["next", "throw", "return"].forEach( (function (a) {
        e[a] = function (e) {
          return this._invoke( a, e )
        }
      }) )
    }

    function c(e, a) {
      var i;
      this._invoke = function (n, s) {
        function o() {
          return new a( (function (i, o) {
            !function i(n, s, o, l) {
              var m = r( e[n], e, s );
              if ("throw" !== m.type) {
                var p = m.arg, d = p.value;
                return d && "object" == typeof d && t.call( d, "__await" ) ? a.resolve( d.__await ).then( (function (e) {
                  i( "next", e, o, l )
                }), (function (e) {
                  i( "throw", e, o, l )
                }) ) : a.resolve( d ).then( (function (e) {
                  p.value = e, o( p )
                }), (function (e) {
                  return i( "throw", e, o, l )
                }) )
              }
              l( m.arg )
            }( n, s, i, o )
          }) )
        }

        return i = i ? i.then( o, o ) : o()
      }
    }

    function T(e, a) {
      var t = e.iterator[a.method];
      if (void 0 === t) {
        if (a.delegate = null, "throw" === a.method) {
          if (e.iterator.return && (a.method = "return", a.arg = void 0, T( e, a ), "throw" === a.method)) return m;
          a.method = "throw", a.arg = new TypeError( "The iterator does not provide a 'throw' method" )
        }
        return m
      }
      var i = r( t, e.iterator, a.arg );
      if ("throw" === i.type) return a.method = "throw", a.arg = i.arg, a.delegate = null, m;
      var n = i.arg;
      return n ? n.done ? (a[e.resultName] = n.value, a.next = e.nextLoc, "return" !== a.method && (a.method = "next", a.arg = void 0), a.delegate = null, m) : n : (a.method = "throw", a.arg = new TypeError( "iterator result is not an object" ), a.delegate = null, m)
    }

    function w(e) {
      var a = {tryLoc : e[0]};
      1 in e && (a.catchLoc = e[1]), 2 in e && (a.finallyLoc = e[2], a.afterLoc = e[3]), this.tryEntries.push( a )
    }

    function E(e) {
      var a = e.completion || {};
      a.type = "normal", delete a.arg, e.completion = a
    }

    function M(e) {
      this.tryEntries = [{tryLoc : "root"}], e.forEach( w, this ), this.reset( !0 )
    }

    function y(e) {
      if (e) {
        var a = e[n];
        if (a) return a.call( e );
        if ("function" == typeof e.next) return e;
        if (!isNaN( e.length )) {
          var i = -1, s = function a() {
            for (; ++i < e.length;) if (t.call( e, i )) return a.value = e[i], a.done = !1, a;
            return a.value = void 0, a.done = !0, a
          };
          return s.next = s
        }
      }
      return {next : v}
    }

    function v() {
      return {value : void 0, done : !0}
    }

    return d.prototype = h.constructor = g, g.constructor = d, g[o] = d.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) {
      var a = "function" == typeof e && e.constructor;
      return !!a && (a === d || "GeneratorFunction" === (a.displayName || a.name))
    }, e.mark = function (e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf( e, g ) : (e.__proto__ = g, o in e || (e[o] = "GeneratorFunction")), e.prototype = Object.create( h ), e
    }, e.awrap = function (e) {
      return {__await : e}
    }, _( c.prototype ), c.prototype[s] = function () {
      return this
    }, e.AsyncIterator = c, e.async = function (a, t, i, n, s) {
      void 0 === s && (s = Promise);
      var o = new c( l( a, t, i, n ), s );
      return e.isGeneratorFunction( t ) ? o : o.next().then( (function (e) {
        return e.done ? e.value : o.next()
      }) )
    }, _( h ), h[o] = "Generator", h[n] = function () {
      return this
    }, h.toString = function () {
      return "[object Generator]"
    }, e.keys = function (e) {
      var a = [];
      for (var t in e) a.push( t );
      return a.reverse(), function t() {
        for (; a.length;) {
          var i = a.pop();
          if (i in e) return t.value = i, t.done = !1, t
        }
        return t.done = !0, t
      }
    }, e.values = y, M.prototype = {
      constructor          : M, reset : function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach( E ), !e) for (var a in this) "t" === a.charAt( 0 ) && t.call( this, a ) && !isNaN( +a.slice( 1 ) ) && (this[a] = void 0)
      }, stop              : function () {
        this.done = !0;
        var e = this.tryEntries[0].completion;
        if ("throw" === e.type) throw e.arg;
        return this.rval
      }, dispatchException : function (e) {
        if (this.done) throw e;
        var a = this;

        function i(t, i) {
          return o.type = "throw", o.arg = e, a.next = t, i && (a.method = "next", a.arg = void 0), !!i
        }

        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var s = this.tryEntries[n], o = s.completion;
          if ("root" === s.tryLoc) return i( "end" );
          if (s.tryLoc <= this.prev) {
            var l = t.call( s, "catchLoc" ), r = t.call( s, "finallyLoc" );
            if (l && r) {
              if (this.prev < s.catchLoc) return i( s.catchLoc, !0 );
              if (this.prev < s.finallyLoc) return i( s.finallyLoc )
            } else if (l) {
              if (this.prev < s.catchLoc) return i( s.catchLoc, !0 )
            } else {
              if (!r) throw new Error( "try statement without catch or finally" );
              if (this.prev < s.finallyLoc) return i( s.finallyLoc )
            }
          }
        }
      }, abrupt            : function (e, a) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var n = this.tryEntries[i];
          if (n.tryLoc <= this.prev && t.call( n, "finallyLoc" ) && this.prev < n.finallyLoc) {
            var s = n;
            break
          }
        }
        s && ("break" === e || "continue" === e) && s.tryLoc <= a && a <= s.finallyLoc && (s = null);
        var o = s ? s.completion : {};
        return o.type = e, o.arg = a, s ? (this.method = "next", this.next = s.finallyLoc, m) : this.complete( o )
      }, complete          : function (e, a) {
        if ("throw" === e.type) throw e.arg;
        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && a && (this.next = a), m
      }, finish            : function (e) {
        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
          var t = this.tryEntries[a];
          if (t.finallyLoc === e) return this.complete( t.completion, t.afterLoc ), E( t ), m
        }
      }, catch             : function (e) {
        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
          var t = this.tryEntries[a];
          if (t.tryLoc === e) {
            var i = t.completion;
            if ("throw" === i.type) {
              var n = i.arg;
              E( t )
            }
            return n
          }
        }
        throw new Error( "illegal catch attempt" )
      }, delegateYield     : function (e, a, t) {
        return this.delegate = {
          iterator   : y( e ),
          resultName : a,
          nextLoc    : t
        }, "next" === this.method && (this.arg = void 0), m
      }
    }, e
  }( e.exports );
  try {
    regeneratorRuntime = i
  } catch (e) {
    Function( "r", "regeneratorRuntime = r" )( i )
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 122 ), n = t( 81 ), s = t( 8 ), o = t( 20 ), l = t( 76 ), r = t( 123 ), m = t( 10 ), p = t( 124 ),
    d = t( 32 ), g = t( 3 ), x = [].push, u = Math.min, f = !g( (function () {
      return !RegExp( 4294967295, "y" )
    }) );
  i( "split", 2, (function (e, a, t) {
    var i;
    return i = "c" == "abbc".split( /(b)*/ )[1] || 4 != "test".split( /(?:)/, -1 ).length || 2 != "ab".split( /(?:ab)*/ ).length || 4 != ".".split( /(.?)(.?)/ ).length || ".".split( /()()/ ).length > 1 || "".split( /.?/ ).length ? function (e, t) {
      var i = String( o( this ) ), s = void 0 === t ? 4294967295 : t >>> 0;
      if (0 === s) return [];
      if (void 0 === e) return [i];
      if (!n( e )) return a.call( i, e, s );
      for (var l, r, m, p = [], g = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), u = 0, f = new RegExp( e.source, g + "g" ); (l = d.call( f, i )) && !((r = f.lastIndex) > u && (p.push( i.slice( u, l.index ) ), l.length > 1 && l.index < i.length && x.apply( p, l.slice( 1 ) ), m = l[0].length, u = r, p.length >= s));) f.lastIndex === l.index && f.lastIndex++;
      return u === i.length ? !m && f.test( "" ) || p.push( "" ) : p.push( i.slice( u ) ), p.length > s ? p.slice( 0, s ) : p
    } : "0".split( void 0, 0 ).length ? function (e, t) {
      return void 0 === e && 0 === t ? [] : a.call( this, e, t )
    } : a, [function (a, t) {
      var n = o( this ), s = null == a ? void 0 : a[e];
      return void 0 !== s ? s.call( a, n, t ) : i.call( String( n ), a, t )
    }, function (e, n) {
      var o = t( i, e, this, n, i !== a );
      if (o.done) return o.value;
      var d = s( e ), g = String( this ), x = l( d, RegExp ), h = d.unicode,
        _ = (d.ignoreCase ? "i" : "") + (d.multiline ? "m" : "") + (d.unicode ? "u" : "") + (f ? "y" : "g"),
        c = new x( f ? d : "^(?:" + d.source + ")", _ ), T = void 0 === n ? 4294967295 : n >>> 0;
      if (0 === T) return [];
      if (0 === g.length) return null === p( c, g ) ? [g] : [];
      for (var w = 0, E = 0, M = []; E < g.length;) {
        c.lastIndex = f ? E : 0;
        var y, v = p( c, f ? g : g.slice( E ) );
        if (null === v || (y = u( m( c.lastIndex + (f ? 0 : E) ), g.length )) === w) E = r( g, E, h ); else {
          if (M.push( g.slice( w, E ) ), M.length === T) return M;
          for (var b = 1; b <= v.length - 1; b++) if (M.push( v[b] ), M.length === T) return M;
          E = w = y
        }
      }
      return M.push( g.slice( w ) ), M
    }]
  }), !f )
}, function (e, a) {
  var t;
  t = function () {
    return this
  }();
  try {
    t = t || new Function( "return this" )()
  } catch (e) {
    "object" == typeof window && (t = window)
  }
  e.exports = t
}, function (e, a, t) {
  var i = t( 11 ), n = t( 3 ), s = t( 35 );
  e.exports = !i && !n( (function () {
    return 7 != Object.defineProperty( s( "div" ), "a", {
      get : function () {
        return 7
      }
    } ).a
  }) )
}, function (e, a, t) {
  var i = t( 1 ), n = t( 36 ), s = i["__core-js_shared__"] || n( "__core-js_shared__", {} );
  e.exports = s
}, function (e, a, t) {
  var i = t( 26 ), n = t( 59 );
  (e.exports = function (e, a) {
    return n[e] || (n[e] = void 0 !== a ? a : {})
  })( "versions", [] ).push( {
    version   : "3.6.5",
    mode      : i ? "pure" : "global",
    copyright : "В© 2020 Denis Pushkarev (zloirock.ru)"
  } )
}, function (e, a) {
  var t = 0, i = Math.random();
  e.exports = function (e) {
    return "Symbol(" + String( void 0 === e ? "" : e ) + ")_" + (++t + i).toString( 36 )
  }
}, function (e, a, t) {
  var i = t( 9 ), n = t( 19 ), s = t( 41 ).indexOf, o = t( 40 );
  e.exports = function (e, a) {
    var t, l = n( e ), r = 0, m = [];
    for (t in l) !i( o, t ) && i( l, t ) && m.push( t );
    for (; a.length > r;) i( l, t = a[r++] ) && (~s( m, t ) || m.push( t ));
    return m
  }
}, function (e, a, t) {
  var i = t( 3 ), n = /#|\.prototype\./, s = function (e, a) {
    var t = l[o( e )];
    return t == m || t != r && ("function" == typeof a ? i( a ) : !!a)
  }, o = s.normalize = function (e) {
    return String( e ).replace( n, "." ).toLowerCase()
  }, l = s.data = {}, r = s.NATIVE = "N", m = s.POLYFILL = "P";
  e.exports = s
}, function (e, a, t) {
  var i = t( 7 ), n = t( 45 ), s = t( 0 )( "species" );
  e.exports = function (e, a) {
    var t;
    return n( e ) && ("function" != typeof(t = e.constructor) || t !== Array && !n( t.prototype ) ? i( t ) && null === (t = t[s]) && (t = void 0) : t = void 0), new (void 0 === t ? Array : t)( 0 === a ? 0 : a )
  }
}, function (e, a, t) {
  var i = t( 3 );
  e.exports = !!Object.getOwnPropertySymbols && !i( (function () {
    return !String( Symbol() )
  }) )
}, function (e, a, t) {
  var i = t( 21 );
  e.exports = i( "navigator", "userAgent" ) || ""
}, function (e, a, t) {
  "use strict";
  var i = t( 49 ).forEach, n = t( 22 ), s = t( 16 ), o = n( "forEach" ), l = s( "forEach" );
  e.exports = o && l ? [].forEach : function (e) {
    return i( this, e, arguments.length > 1 ? arguments[1] : void 0 )
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 2 ), n = t( 41 ).includes, s = t( 50 );
  i( {target : "Array", proto : !0, forced : !t( 16 )( "indexOf", {ACCESSORS : !0, 1 : 0} )}, {
    includes : function (e) {
      return n( this, e, arguments.length > 1 ? arguments[1] : void 0 )
    }
  } ), s( "includes" )
}, function (e, a, t) {
  var i, n = t( 8 ), s = t( 104 ), o = t( 44 ), l = t( 40 ), r = t( 70 ), m = t( 35 ), p = t( 39 ), d = p( "IE_PROTO" ),
    g = function () {
    }, x = function (e) {
      return "<script>" + e + "<\/script>"
    }, u = function () {
      try {
        i = document.domain && new ActiveXObject( "htmlfile" )
      } catch (e) {
      }
      var e, a;
      u = i ? function (e) {
        e.write( x( "" ) ), e.close();
        var a = e.parentWindow.Object;
        return e = null, a
      }( i ) : ((a = m( "iframe" )).style.display = "none", r.appendChild( a ), a.src = String( "javascript:" ), (e = a.contentWindow.document).open(), e.write( x( "document.F=Object" ) ), e.close(), e.F);
      for (var t = o.length; t--;) delete u.prototype[o[t]];
      return u()
    };
  l[d] = !0, e.exports = Object.create || function (e, a) {
    var t;
    return null !== e ? (g.prototype = n( e ), t = new g, g.prototype = null, t[d] = e) : t = u(), void 0 === a ? t : s( t, a )
  }
}, function (e, a, t) {
  var i = t( 21 );
  e.exports = i( "document", "documentElement" )
}, function (e, a, t) {
  var i = t( 52 ), n = t( 12 ), s = t( 0 )( "toStringTag" ), o = "Arguments" == n( function () {
    return arguments
  }() );
  e.exports = i ? n : function (e) {
    var a, t, i;
    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(t = function (e, a) {
      try {
        return e[a]
      } catch (e) {
      }
    }( a = Object( e ), s )) ? t : o ? n( a ) : "Object" == (i = n( a )) && "function" == typeof a.callee ? "Arguments" : i
  }
}, function (e, a, t) {
  var i = t( 0 ), n = t( 29 ), s = i( "iterator" ), o = Array.prototype;
  e.exports = function (e) {
    return void 0 !== e && (n.Array === e || o[s] === e)
  }
}, function (e, a, t) {
  var i = t( 71 ), n = t( 29 ), s = t( 0 )( "iterator" );
  e.exports = function (e) {
    if (null != e) return e[s] || e["@@iterator"] || n[i( e )]
  }
}, function (e, a, t) {
  var i = t( 8 );
  e.exports = function (e, a, t, n) {
    try {
      return n ? a( i( t )[0], t[1] ) : a( t )
    } catch (a) {
      var s = e.return;
      throw void 0 !== s && i( s.call( e ) ), a
    }
  }
}, function (e, a, t) {
  var i = t( 0 )( "iterator" ), n = !1;
  try {
    var s = 0, o = {
      next      : function () {
        return {done : !!s++}
      }, return : function () {
        n = !0
      }
    };
    o[i] = function () {
      return this
    }, Array.from( o, (function () {
      throw 2
    }) )
  } catch (e) {
  }
  e.exports = function (e, a) {
    if (!a && !n) return !1;
    var t = !1;
    try {
      var s = {};
      s[i] = function () {
        return {
          next : function () {
            return {done : t = !0}
          }
        }
      }, e( s )
    } catch (e) {
    }
    return t
  }
}, function (e, a, t) {
  var i = t( 8 ), n = t( 18 ), s = t( 0 )( "species" );
  e.exports = function (e, a) {
    var t, o = i( e ).constructor;
    return void 0 === o || null == (t = i( o )[s]) ? a : n( t )
  }
}, function (e, a, t) {
  var i, n, s, o = t( 1 ), l = t( 3 ), r = t( 12 ), m = t( 28 ), p = t( 70 ), d = t( 35 ), g = t( 78 ), x = o.location,
    u = o.setImmediate, f = o.clearImmediate, h = o.process, _ = o.MessageChannel, c = o.Dispatch, T = 0, w = {},
    E = function (e) {
      if (w.hasOwnProperty( e )) {
        var a = w[e];
        delete w[e], a()
      }
    }, M = function (e) {
      return function () {
        E( e )
      }
    }, y = function (e) {
      E( e.data )
    }, v = function (e) {
      o.postMessage( e + "", x.protocol + "//" + x.host )
    };
  u && f || (u = function (e) {
    for (var a = [], t = 1; arguments.length > t;) a.push( arguments[t++] );
    return w[++T] = function () {
      ("function" == typeof e ? e : Function( e )).apply( void 0, a )
    }, i( T ), T
  }, f = function (e) {
    delete w[e]
  }, "process" == r( h ) ? i = function (e) {
    h.nextTick( M( e ) )
  } : c && c.now ? i = function (e) {
    c.now( M( e ) )
  } : _ && !g ? (s = (n = new _).port2, n.port1.onmessage = y, i = m( s.postMessage, s, 1 )) : !o.addEventListener || "function" != typeof postMessage || o.importScripts || l( v ) || "file:" === x.protocol ? i = "onreadystatechange" in d( "script" ) ? function (e) {
    p.appendChild( d( "script" ) ).onreadystatechange = function () {
      p.removeChild( this ), E( e )
    }
  } : function (e) {
    setTimeout( M( e ), 0 )
  } : (i = v, o.addEventListener( "message", y, !1 ))), e.exports = {set : u, clear : f}
}, function (e, a, t) {
  var i = t( 66 );
  e.exports = /(iphone|ipod|ipad).*applewebkit/i.test( i )
}, function (e, a, t) {
  "use strict";
  var i = t( 18 ), n = function (e) {
    var a, t;
    this.promise = new e( (function (e, i) {
      if (void 0 !== a || void 0 !== t) throw TypeError( "Bad Promise constructor" );
      a = e, t = i
    }) ), this.resolve = i( a ), this.reject = i( t )
  };
  e.exports.f = function (e) {
    return new n( e )
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 2 ), n = t( 116 ), s = t( 20 );
  i( {target : "String", proto : !0, forced : !t( 117 )( "includes" )}, {
    includes : function (e) {
      return !!~String( s( this ) ).indexOf( n( e ), arguments.length > 1 ? arguments[1] : void 0 )
    }
  } )
}, function (e, a, t) {
  var i = t( 7 ), n = t( 12 ), s = t( 0 )( "match" );
  e.exports = function (e) {
    var a;
    return i( e ) && (void 0 !== (a = e[s]) ? !!a : "RegExp" == n( e ))
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 2 ), n = t( 25 ), s = t( 19 ), o = t( 22 ), l = [].join, r = n != Object, m = o( "join", "," );
  i( {target : "Array", proto : !0, forced : r || !m}, {
    join : function (e) {
      return l.call( s( this ), void 0 === e ? "," : e )
    }
  } )
}, function (e, a, t) {
  var i = t( 42 ), n = t( 20 ), s = function (e) {
    return function (a, t) {
      var s, o, l = String( n( a ) ), r = i( t ), m = l.length;
      return r < 0 || r >= m ? e ? "" : void 0 : (s = l.charCodeAt( r )) < 55296 || s > 56319 || r + 1 === m || (o = l.charCodeAt( r + 1 )) < 56320 || o > 57343 ? e ? l.charAt( r ) : s : e ? l.slice( r, r + 2 ) : o - 56320 + (s - 55296 << 10) + 65536
    }
  };
  e.exports = {codeAt : s( !1 ), charAt : s( !0 )}
}, function (e, a, t) {
  "use strict";
  var i = t( 2 ), n = t( 49 ).filter, s = t( 47 ), o = t( 16 ), l = s( "filter" ), r = o( "filter" );
  i( {target : "Array", proto : !0, forced : !l || !r}, {
    filter : function (e) {
      return n( this, e, arguments.length > 1 ? arguments[1] : void 0 )
    }
  } )
}, function (e, a, t) {
  "use strict";
  var i, n, s, o = t( 86 ), l = t( 13 ), r = t( 9 ), m = t( 0 ), p = t( 26 ), d = m( "iterator" ), g = !1;
  [].keys && ("next" in (s = [].keys()) ? (n = o( o( s ) )) !== Object.prototype && (i = n) : g = !0), null == i && (i = {}), p || r( i, d ) || l( i, d, (function () {
    return this
  }) ), e.exports = {IteratorPrototype : i, BUGGY_SAFARI_ITERATORS : g}
}, function (e, a, t) {
  var i = t( 9 ), n = t( 15 ), s = t( 39 ), o = t( 131 ), l = s( "IE_PROTO" ), r = Object.prototype;
  e.exports = o ? Object.getPrototypeOf : function (e) {
    return e = n( e ), i( e, l ) ? e[l] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? r : null
  }
}, , , , , , , function (e, a, t) {
  var i = t( 4 ), n = t( 94 );
  "string" == typeof(n = n.__esModule ? n.default : n) && (n = [[e.i, n, ""]]);
  var s = {insert : "head", singleton : !1};
  i( n, s );
  e.exports = n.locals || {}
}, function (e, a, t) {
}, function (e, a, t) {
  (function (t) {
    var i, n = function e(a, t, i) {
      null === a && (a = Function.prototype);
      var n = Object.getOwnPropertyDescriptor( a, t );
      if (void 0 === n) {
        var s = Object.getPrototypeOf( a );
        return null === s ? void 0 : e( s, t, i )
      }
      if ("value" in n) return n.value;
      var o = n.get;
      return void 0 !== o ? o.call( i ) : void 0
    }, s = function () {
      function e(e, a) {
        for (var t = 0; t < a.length; t++) {
          var i = a[t];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty( e, i.key, i )
        }
      }

      return function (a, t, i) {
        return t && e( a.prototype, t ), i && e( a, i ), a
      }
    }();

    /*!
   * Materialize v1.0.0-rc.2 (http://materializecss.com)
   * Copyright 2014-2017 Materialize
   * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
   */
    function o(e, a) {
      if (!e) throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" );
      return !a || "object" != typeof a && "function" != typeof a ? e : a
    }

    function l(e, a) {
      if ("function" != typeof a && null !== a) throw new TypeError( "Super expression must either be null or a function, not " + typeof a );
      e.prototype = Object.create( a && a.prototype, {
        constructor : {
          value        : e,
          enumerable   : !1,
          writable     : !0,
          configurable : !0
        }
      } ), a && (Object.setPrototypeOf ? Object.setPrototypeOf( e, a ) : e.__proto__ = a)
    }

    function r(e, a) {
      if (!(e instanceof a)) throw new TypeError( "Cannot call a class as a function" )
    }

    /*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */
    window.cash = function () {
      var e, a = document, t = window, i = Array.prototype, n = i.slice, s = i.filter, o = i.push, l = function () {
      }, r = function (e) {
        return typeof e == typeof l && e.call
      }, m = function (e) {
        return "string" == typeof e
      }, p = /^#[\w-]*$/, d = /^\.[\w-]*$/, g = /<.+>/, x = /^\w+$/;

      function u(e, t) {
        return t = t || a, d.test( e ) ? t.getElementsByClassName( e.slice( 1 ) ) : x.test( e ) ? t.getElementsByTagName( e ) : t.querySelectorAll( e )
      }

      function f(t) {
        if (!e) {
          var i = (e = a.implementation.createHTMLDocument( null )).createElement( "base" );
          i.href = a.location.href, e.head.appendChild( i )
        }
        return e.body.innerHTML = t, e.body.childNodes
      }

      function h(e) {
        "loading" !== a.readyState ? e() : a.addEventListener( "DOMContentLoaded", e )
      }

      function _(e, i) {
        if (!e) return this;
        if (e.cash && e !== t) return e;
        var n, s = e, o = 0;
        if (m( e )) s = p.test( e ) ? a.getElementById( e.slice( 1 ) ) : g.test( e ) ? f( e ) : u( e, i ); else if (r( e )) return h( e ), this;
        if (!s) return this;
        if (s.nodeType || s === t) this[0] = s, this.length = 1; else for (n = this.length = s.length; o < n; o++) this[o] = s[o];
        return this
      }

      function c(e, a) {
        return new _( e, a )
      }

      var T = c.fn = c.prototype = _.prototype = {
        cash   : !0,
        length : 0,
        push   : o,
        splice : i.splice,
        map    : i.map,
        init   : _
      };

      function w(e, a) {
        for (var t = e.length, i = 0; i < t && !1 !== a.call( e[i], e[i], i, e ); i++) ;
      }

      function E(e, a) {
        var t = e && (e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector);
        return !!t && t.call( e, a )
      }

      function M(e) {
        return m( e ) ? E : e.cash ? function (a) {
          return e.is( a )
        } : function (e, a) {
          return e === a
        }
      }

      function y(e) {
        return c( n.call( e ).filter( (function (e, a, t) {
          return t.indexOf( e ) === a
        }) ) )
      }

      Object.defineProperty( T, "constructor", {value : c} ), c.parseHTML = f, c.noop = l, c.isFunction = r, c.isString = m, c.extend = T.extend = function (e) {
        e = e || {};
        var a = n.call( arguments ), t = a.length, i = 1;
        for (1 === a.length && (e = this, i = 0); i < t; i++) if (a[i]) for (var s in a[i]) a[i].hasOwnProperty( s ) && (e[s] = a[i][s]);
        return e
      }, c.extend( {
        merge   : function (e, a) {
          for (var t = +a.length, i = e.length, n = 0; n < t; i++, n++) e[i] = a[n];
          return e.length = i, e
        }, each : w, matches : E, unique : y, isArray : Array.isArray, isNumeric : function (e) {
          return !isNaN( parseFloat( e ) ) && isFinite( e )
        }
      } );
      var v = c.uid = "_cash" + Date.now();

      function b(e) {
        return e[v] = e[v] || {}
      }

      function k(e, a, t) {
        return b( e )[a] = t
      }

      function j(e, a) {
        var t = b( e );
        return void 0 === t[a] && (t[a] = e.dataset ? e.dataset[a] : c( e ).attr( "data-" + a )), t[a]
      }

      T.extend( {
        data          : function (e, a) {
          if (m( e )) return void 0 === a ? j( this[0], e ) : this.each( (function (t) {
            return k( t, e, a )
          }) );
          for (var t in e) this.data( t, e[t] );
          return this
        }, removeData : function (e) {
          return this.each( (function (a) {
            return function (e, a) {
              var t = b( e );
              t ? delete t[a] : e.dataset ? delete e.dataset[a] : c( e ).removeAttr( "data-" + name )
            }( a, e )
          }) )
        }
      } );
      var A = /\S+/g;

      function I(e) {
        return m( e ) && e.match( A )
      }

      function S(e, a) {
        return e.classList ? e.classList.contains( a ) : new RegExp( "(^| )" + a + "( |$)", "gi" ).test( e.className )
      }

      function C(e, a, t) {
        e.classList ? e.classList.add( a ) : t.indexOf( " " + a + " " ) && (e.className += " " + a)
      }

      function L(e, a) {
        e.classList ? e.classList.remove( a ) : e.className = e.className.replace( a, "" )
      }

      T.extend( {
        addClass       : function (e) {
          var a = I( e );
          return a ? this.each( (function (e) {
            var t = " " + e.className + " ";
            w( a, (function (a) {
              C( e, a, t )
            }) )
          }) ) : this
        }, attr        : function (e, a) {
          if (e) {
            if (m( e )) return void 0 === a ? this[0] ? this[0].getAttribute ? this[0].getAttribute( e ) : this[0][e] : void 0 : this.each( (function (t) {
              t.setAttribute ? t.setAttribute( e, a ) : t[e] = a
            }) );
            for (var t in e) this.attr( t, e[t] );
            return this
          }
        }, hasClass    : function (e) {
          var a = !1, t = I( e );
          return t && t.length && this.each( (function (e) {
            return !(a = S( e, t[0] ))
          }) ), a
        }, prop        : function (e, a) {
          if (m( e )) return void 0 === a ? this[0][e] : this.each( (function (t) {
            t[e] = a
          }) );
          for (var t in e) this.prop( t, e[t] );
          return this
        }, removeAttr  : function (e) {
          return this.each( (function (a) {
            a.removeAttribute ? a.removeAttribute( e ) : delete a[e]
          }) )
        }, removeClass : function (e) {
          if (!arguments.length) return this.attr( "class", "" );
          var a = I( e );
          return a ? this.each( (function (e) {
            w( a, (function (a) {
              L( e, a )
            }) )
          }) ) : this
        }, removeProp  : function (e) {
          return this.each( (function (a) {
            delete a[e]
          }) )
        }, toggleClass : function (e, a) {
          if (void 0 !== a) return this[a ? "addClass" : "removeClass"]( e );
          var t = I( e );
          return t ? this.each( (function (e) {
            var a = " " + e.className + " ";
            w( t, (function (t) {
              S( e, t ) ? L( e, t ) : C( e, t, a )
            }) )
          }) ) : this
        }
      } ), T.extend( {
        add       : function (e, a) {
          return y( c.merge( this, c( e, a ) ) )
        }, each   : function (e) {
          return w( this, e ), this
        }, eq     : function (e) {
          return c( this.get( e ) )
        }, filter : function (e) {
          if (!e) return this;
          var a = r( e ) ? e : M( e );
          return c( s.call( this, (function (t) {
            return a( t, e )
          }) ) )
        }, first  : function () {
          return this.eq( 0 )
        }, get    : function (e) {
          return void 0 === e ? n.call( this ) : e < 0 ? this[e + this.length] : this[e]
        }, index  : function (e) {
          var a = e ? c( e )[0] : this[0], t = e ? this : c( a ).parent().children();
          return n.call( t ).indexOf( a )
        }, last   : function () {
          return this.eq( -1 )
        }
      } );
      var O, H, W, B, D = (W = /(?:^\w|[A-Z]|\b\w)/g, B = /[\s-_]+/g, function (e) {
        return e.replace( W, (function (e, a) {
          return e[0 === a ? "toLowerCase" : "toUpperCase"]()
        }) ).replace( B, "" )
      }), z = (O = {}, H = document.createElement( "div" ).style, function (e) {
        if (e = D( e ), O[e]) return O[e];
        var a = e.charAt( 0 ).toUpperCase() + e.slice( 1 );
        return w( (e + " " + ["webkit", "moz", "ms", "o"].join( a + " " ) + a).split( " " ), (function (a) {
          if (a in H) return O[a] = e = O[e] = a, !1
        }) ), O[e]
      });

      function R(e, a) {
        return parseInt( t.getComputedStyle( e[0], null )[a], 10 ) || 0
      }

      function P(e, a, t) {
        var i, n = j( e, "_cashEvents" ), s = n && n[a];
        s && (t ? (e.removeEventListener( a, t ), (i = s.indexOf( t )) >= 0 && s.splice( i, 1 )) : (w( s, (function (t) {
          e.removeEventListener( a, t )
        }) ), s = []))
      }

      function q(e, a) {
        return "&" + encodeURIComponent( e ) + "=" + encodeURIComponent( a ).replace( /%20/g, "+" )
      }

      function $(e) {
        var a = e.type;
        if (!a) return null;
        switch (a.toLowerCase()) {
          case"select-one":
            return function (e) {
              var a = e.selectedIndex;
              return a >= 0 ? e.options[a].value : null
            }( e );
          case"select-multiple":
            return function (e) {
              var a = [];
              return w( e.options, (function (e) {
                e.selected && a.push( e.value )
              }) ), a.length ? a : null
            }( e );
          case"radio":
          case"checkbox":
            return e.checked ? e.value : null;
          default:
            return e.value ? e.value : null
        }
      }

      function N(e, a, t) {
        var i = m( a );
        i || !a.length ? w( e, i ? function (e) {
          return e.insertAdjacentHTML( t ? "afterbegin" : "beforeend", a )
        } : function (e, i) {
          return function (e, a, t) {
            if (t) {
              var i = e.childNodes[0];
              e.insertBefore( a, i )
            } else e.appendChild( a )
          }( e, 0 === i ? a : a.cloneNode( !0 ), t )
        } ) : w( a, (function (a) {
          return N( e, a, t )
        }) )
      }

      c.prefixedProp = z, c.camelCase = D, T.extend( {
        css : function (e, a) {
          if (m( e )) return e = z( e ), arguments.length > 1 ? this.each( (function (t) {
            return t.style[e] = a
          }) ) : t.getComputedStyle( this[0] )[e];
          for (var i in e) this.css( i, e[i] );
          return this
        }
      } ), w( ["Width", "Height"], (function (e) {
        var a = e.toLowerCase();
        T[a] = function () {
          return this[0].getBoundingClientRect()[a]
        }, T["inner" + e] = function () {
          return this[0]["client" + e]
        }, T["outer" + e] = function (a) {
          return this[0]["offset" + e] + (a ? R( this, "margin" + ("Width" === e ? "Left" : "Top") ) + R( this, "margin" + ("Width" === e ? "Right" : "Bottom") ) : 0)
        }
      }) ), T.extend( {
        off      : function (e, a) {
          return this.each( (function (t) {
            return P( t, e, a )
          }) )
        }, on    : function (e, a, t, i) {
          var n;
          if (!m( e )) {
            for (var s in e) this.on( s, a, e[s] );
            return this
          }
          return r( a ) && (t = a, a = null), "ready" === e ? (h( t ), this) : (a && (n = t, t = function (e) {
            for (var t = e.target; !E( t, a );) {
              if (t === this || null === t) return !1;
              t = t.parentNode
            }
            t && n.call( t, e )
          }), this.each( (function (a) {
            var n = t;
            i && (n = function () {
              t.apply( this, arguments ), P( a, e, n )
            }), function (e, a, t) {
              var i = j( e, "_cashEvents" ) || k( e, "_cashEvents", {} );
              i[a] = i[a] || [], i[a].push( t ), e.addEventListener( a, t )
            }( a, e, n )
          }) ))
        }, one   : function (e, a, t) {
          return this.on( e, a, t, !0 )
        }, ready : h, trigger : function (e, a) {
          if (document.createEvent) {
            var t = document.createEvent( "HTMLEvents" );
            return t.initEvent( e, !0, !1 ), t = this.extend( t, a ), this.each( (function (e) {
              return e.dispatchEvent( t )
            }) )
          }
        }
      } ), T.extend( {
        serialize : function () {
          var e = "";
          return w( this[0].elements || this, (function (a) {
            if (!a.disabled && "FIELDSET" !== a.tagName) {
              var t = a.name;
              switch (a.type.toLowerCase()) {
                case"file":
                case"reset":
                case"submit":
                case"button":
                  break;
                case"select-multiple":
                  var i = $( a );
                  null !== i && w( i, (function (a) {
                    e += q( t, a )
                  }) );
                  break;
                default:
                  var n = $( a );
                  null !== n && (e += q( t, n ))
              }
            }
          }) ), e.substr( 1 )
        }, val    : function (e) {
          return void 0 === e ? $( this[0] ) : this.each( (function (a) {
            return a.value = e
          }) )
        }
      } ), T.extend( {
        after           : function (e) {
          return c( e ).insertAfter( this ), this
        }, append       : function (e) {
          return N( this, e ), this
        }, appendTo     : function (e) {
          return N( c( e ), this ), this
        }, before       : function (e) {
          return c( e ).insertBefore( this ), this
        }, clone        : function () {
          return c( this.map( (function (e) {
            return e.cloneNode( !0 )
          }) ) )
        }, empty        : function () {
          return this.html( "" ), this
        }, html         : function (e) {
          if (void 0 === e) return this[0].innerHTML;
          var a = e.nodeType ? e[0].outerHTML : e;
          return this.each( (function (e) {
            return e.innerHTML = a
          }) )
        }, insertAfter  : function (e) {
          var a = this;
          return c( e ).each( (function (e, t) {
            var i = e.parentNode, n = e.nextSibling;
            a.each( (function (e) {
              i.insertBefore( 0 === t ? e : e.cloneNode( !0 ), n )
            }) )
          }) ), this
        }, insertBefore : function (e) {
          var a = this;
          return c( e ).each( (function (e, t) {
            var i = e.parentNode;
            a.each( (function (a) {
              i.insertBefore( 0 === t ? a : a.cloneNode( !0 ), e )
            }) )
          }) ), this
        }, prepend      : function (e) {
          return N( this, e, !0 ), this
        }, prependTo    : function (e) {
          return N( c( e ), this, !0 ), this
        }, remove       : function () {
          return this.each( (function (e) {
            if (e.parentNode) return e.parentNode.removeChild( e )
          }) )
        }, text         : function (e) {
          return void 0 === e ? this[0].textContent : this.each( (function (a) {
            return a.textContent = e
          }) )
        }
      } );
      var F = a.documentElement;
      return T.extend( {
        position        : function () {
          var e = this[0];
          return {left : e.offsetLeft, top : e.offsetTop}
        }, offset       : function () {
          var e = this[0].getBoundingClientRect();
          return {top : e.top + t.pageYOffset - F.clientTop, left : e.left + t.pageXOffset - F.clientLeft}
        }, offsetParent : function () {
          return c( this[0].offsetParent )
        }
      } ), T.extend( {
        children    : function (e) {
          var a = [];
          return this.each( (function (e) {
            o.apply( a, e.children )
          }) ), a = y( a ), e ? a.filter( (function (a) {
            return E( a, e )
          }) ) : a
        }, closest  : function (e) {
          return !e || this.length < 1 ? c() : this.is( e ) ? this.filter( e ) : this.parent().closest( e )
        }, is       : function (e) {
          if (!e) return !1;
          var a = !1, t = M( e );
          return this.each( (function (i) {
            return !(a = t( i, e ))
          }) ), a
        }, find     : function (e) {
          if (!e || e.nodeType) return c( e && this.has( e ).length ? e : null );
          var a = [];
          return this.each( (function (t) {
            o.apply( a, u( e, t ) )
          }) ), y( a )
        }, has      : function (e) {
          var a = m( e ) ? function (a) {
            return 0 !== u( e, a ).length
          } : function (a) {
            return a.contains( e )
          };
          return this.filter( a )
        }, next     : function () {
          return c( this[0].nextElementSibling )
        }, not      : function (e) {
          if (!e) return this;
          var a = M( e );
          return this.filter( (function (t) {
            return !a( t, e )
          }) )
        }, parent   : function () {
          var e = [];
          return this.each( (function (a) {
            a && a.parentNode && e.push( a.parentNode )
          }) ), y( e )
        }, parents  : function (e) {
          var t, i = [];
          return this.each( (function (n) {
            for (t = n; t && t.parentNode && t !== a.body.parentNode;) t = t.parentNode, (!e || e && E( t, e )) && i.push( t )
          }) ), y( i )
        }, prev     : function () {
          return c( this[0].previousElementSibling )
        }, siblings : function (e) {
          var a = this.parent().children( e ), t = this[0];
          return a.filter( (function (e) {
            return e !== t
          }) )
        }
      } ), c
    }();
    var m = function () {
      function e(a, t, i) {
        r( this, e ), t instanceof Element || console.error( Error( t + " is not an HTML Element" ) );
        var n = a.getInstance( t );
        n && n.destroy(), this.el = t, this.$el = cash( t )
      }

      return s( e, null, [{
        key : "init", value : function (e, a, t) {
          var i = null;
          if (a instanceof Element) i = new e( a, t ); else if (a && (a.jquery || a.cash || a instanceof NodeList)) {
            for (var n = [], s = 0; s < a.length; s++) n.push( new e( a[s], t ) );
            i = n
          }
          return i
        }
      }] ), e
    }();
    !function (e) {
      e.Package ? M = {} : e.M = {}, M.jQueryLoaded = !!e.jQuery
    }( window ), void 0 === (i = function () {
      return M
    }.apply( a, [] )) || (e.exports = i), M.keys = {
      TAB        : 9,
      ENTER      : 13,
      ESC        : 27,
      ARROW_UP   : 38,
      ARROW_DOWN : 40
    }, M.tabPressed = !1, M.keyDown = !1;
    document.addEventListener( "keydown", (function (e) {
      M.keyDown = !0, e.which !== M.keys.TAB && e.which !== M.keys.ARROW_DOWN && e.which !== M.keys.ARROW_UP || (M.tabPressed = !0)
    }), !0 ), document.addEventListener( "keyup", (function (e) {
      M.keyDown = !1, e.which !== M.keys.TAB && e.which !== M.keys.ARROW_DOWN && e.which !== M.keys.ARROW_UP || (M.tabPressed = !1)
    }), !0 ), document.addEventListener( "focus", (function (e) {
      M.keyDown && document.body.classList.add( "keyboard-focused" )
    }), !0 ), document.addEventListener( "blur", (function (e) {
      document.body.classList.remove( "keyboard-focused" )
    }), !0 ), M.initializeJqueryWrapper = function (e, a, t) {
      jQuery.fn[a] = function (i) {
        if (e.prototype[i]) {
          var n = Array.prototype.slice.call( arguments, 1 );
          if ("get" === i.slice( 0, 3 )) {
            var s = this.first()[0][t];
            return s[i].apply( s, n )
          }
          return this.each( (function () {
            var e = this[t];
            e[i].apply( e, n )
          }) )
        }
        if ("object" == typeof i || !i) return e.init( this, arguments[0] ), this;
        jQuery.error( "Method " + i + " does not exist on jQuery." + a )
      }
    }, M.AutoInit = function (e) {
      var a = e || document.body, t = {
        Autocomplete         : a.querySelectorAll( ".autocomplete:not(.no-autoinit)" ),
        Carousel             : a.querySelectorAll( ".carousel:not(.no-autoinit)" ),
        Chips                : a.querySelectorAll( ".chips:not(.no-autoinit)" ),
        Collapsible          : a.querySelectorAll( ".collapsible:not(.no-autoinit)" ),
        Datepicker           : a.querySelectorAll( ".datepicker:not(.no-autoinit)" ),
        Dropdown             : a.querySelectorAll( ".dropdown-trigger:not(.no-autoinit)" ),
        Materialbox          : a.querySelectorAll( ".materialboxed:not(.no-autoinit)" ),
        Modal                : a.querySelectorAll( ".modal:not(.no-autoinit)" ),
        Parallax             : a.querySelectorAll( ".parallax:not(.no-autoinit)" ),
        Pushpin              : a.querySelectorAll( ".pushpin:not(.no-autoinit)" ),
        ScrollSpy            : a.querySelectorAll( ".scrollspy:not(.no-autoinit)" ),
        FormSelect           : a.querySelectorAll( "select:not(.no-autoinit)" ),
        Sidenav              : a.querySelectorAll( ".sidenav:not(.no-autoinit)" ),
        Tabs                 : a.querySelectorAll( ".tabs:not(.no-autoinit)" ),
        TapTarget            : a.querySelectorAll( ".tap-target:not(.no-autoinit)" ),
        Timepicker           : a.querySelectorAll( ".timepicker:not(.no-autoinit)" ),
        Tooltip              : a.querySelectorAll( ".tooltipped:not(.no-autoinit)" ),
        FloatingActionButton : a.querySelectorAll( ".fixed-action-btn:not(.no-autoinit)" )
      };
      for (var i in t) {
        M[i].init( t[i] )
      }
    }, M.objectSelectorString = function (e) {
      return ((e.prop( "tagName" ) || "") + (e.attr( "id" ) || "") + (e.attr( "class" ) || "")).replace( /\s/g, "" )
    }, M.guid = function () {
      function e() {
        return Math.floor( 65536 * (1 + Math.random()) ).toString( 16 ).substring( 1 )
      }

      return function () {
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
      }
    }(), M.escapeHash = function (e) {
      return e.replace( /(:|\.|\[|\]|,|=|\/)/g, "\\$1" )
    }, M.elementOrParentIsFixed = function (e) {
      var a = $( e ), t = a.add( a.parents() ), i = !1;
      return t.each( (function () {
        if ("fixed" === $( this ).css( "position" )) return i = !0, !1
      }) ), i
    }, M.checkWithinContainer = function (e, a, t) {
      var i = {top : !1, right : !1, bottom : !1, left : !1}, n = e.getBoundingClientRect(),
        s = e === document.body ? Math.max( n.bottom, window.innerHeight ) : n.bottom, o = e.scrollLeft,
        l = e.scrollTop, r = a.left - o, m = a.top - l;
      return (r < n.left + t || r < t) && (i.left = !0), (r + a.width > n.right - t || r + a.width > window.innerWidth - t) && (i.right = !0), (m < n.top + t || m < t) && (i.top = !0), (m + a.height > s - t || m + a.height > window.innerHeight - t) && (i.bottom = !0), i
    }, M.checkPossibleAlignments = function (e, a, t, i) {
      var n = {
          top : !0,
          right : !0,
          bottom : !0,
          left : !0,
          spaceOnTop : null,
          spaceOnRight : null,
          spaceOnBottom : null,
          spaceOnLeft : null
        }, s = "visible" === getComputedStyle( a ).overflow, o = a.getBoundingClientRect(),
        l = Math.min( o.height, window.innerHeight ), r = Math.min( o.width, window.innerWidth ),
        m = e.getBoundingClientRect(), p = a.scrollLeft, d = a.scrollTop, g = t.left - p, x = t.top - d,
        u = t.top + m.height - d;
      return n.spaceOnRight = s ? window.innerWidth - (m.left + t.width) : r - (g + t.width), n.spaceOnRight < 0 && (n.left = !1), n.spaceOnLeft = s ? m.right - t.width : g - t.width + m.width, n.spaceOnLeft < 0 && (n.right = !1), n.spaceOnBottom = s ? window.innerHeight - (m.top + t.height + i) : l - (x + t.height + i), n.spaceOnBottom < 0 && (n.top = !1), n.spaceOnTop = s ? m.bottom - (t.height + i) : u - (t.height - i), n.spaceOnTop < 0 && (n.bottom = !1), n
    }, M.getOverflowParent = function (e) {
      return null == e ? null : e === document.body || "visible" !== getComputedStyle( e ).overflow ? e : M.getOverflowParent( e.parentElement )
    }, M.getIdFromTrigger = function (e) {
      var a = e.getAttribute( "data-target" );
      return a || (a = (a = e.getAttribute( "href" )) ? a.slice( 1 ) : ""), a
    }, M.getDocumentScrollTop = function () {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    }, M.getDocumentScrollLeft = function () {
      return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
    /**
     * Get time in ms
     * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
     * @type {function}
     * @return {number}
     */
    var p = Date.now || function () {
      return (new Date).getTime()
    };
    /**
     * Returns a function, that, when invoked, will only be triggered at most once
     * during a given window of time. Normally, the throttled function will run
     * as much as it can, without ever going more than once per `wait` duration;
     * but if you'd like to disable the execution on the leading edge, pass
     * `{leading: false}`. To disable execution on the trailing edge, ditto.
     * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
     * @param {function} func
     * @param {number} wait
     * @param {Object=} options
     * @returns {Function}
     */M.throttle = function (e, a, t) {
      var i = void 0, n = void 0, s = void 0, o = null, l = 0;
      t || (t = {});
      var r = function () {
        l = !1 === t.leading ? 0 : p(), o = null, s = e.apply( i, n ), i = n = null
      };
      return function () {
        var m = p();
        l || !1 !== t.leading || (l = m);
        var d = a - (m - l);
        return i = this, n = arguments, d <= 0 ? (clearTimeout( o ), o = null, l = m, s = e.apply( i, n ), i = n = null) : o || !1 === t.trailing || (o = setTimeout( r, d )), s
      }
    };
    var d = {scope : {}};
    d.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, a, t) {
      if (t.get || t.set) throw new TypeError( "ES3 does not support getters and setters." );
      e != Array.prototype && e != Object.prototype && (e[a] = t.value)
    }, d.getGlobal = function (e) {
      return "undefined" != typeof window && window === e ? e : void 0 !== t && null != t ? t : e
    }, d.global = d.getGlobal( this ), d.SYMBOL_PREFIX = "jscomp_symbol_", d.initSymbol = function () {
      d.initSymbol = function () {
      }, d.global.Symbol || (d.global.Symbol = d.Symbol)
    }, d.symbolCounter_ = 0, d.Symbol = function (e) {
      return d.SYMBOL_PREFIX + (e || "") + d.symbolCounter_++
    }, d.initSymbolIterator = function () {
      d.initSymbol();
      var e = d.global.Symbol.iterator;
      e || (e = d.global.Symbol.iterator = d.global.Symbol( "iterator" )), "function" != typeof Array.prototype[e] && d.defineProperty( Array.prototype, e, {
        configurable : !0,
        writable     : !0,
        value        : function () {
          return d.arrayIterator( this )
        }
      } ), d.initSymbolIterator = function () {
      }
    }, d.arrayIterator = function (e) {
      var a = 0;
      return d.iteratorPrototype( (function () {
        return a < e.length ? {done : !1, value : e[a++]} : {done : !0}
      }) )
    }, d.iteratorPrototype = function (e) {
      return d.initSymbolIterator(), (e = {next : e})[d.global.Symbol.iterator] = function () {
        return this
      }, e
    }, d.array = d.array || {}, d.iteratorFromArray = function (e, a) {
      d.initSymbolIterator(), e instanceof String && (e += "");
      var t = 0, i = {
        next : function () {
          if (t < e.length) {
            var n = t++;
            return {value : a( n, e[n] ), done : !1}
          }
          return i.next = function () {
            return {done : !0, value : void 0}
          }, i.next()
        }
      };
      return i[Symbol.iterator] = function () {
        return i
      }, i
    }, d.polyfill = function (e, a, t, i) {
      if (a) {
        for (t = d.global, e = e.split( "." ), i = 0; i < e.length - 1; i++) {
          var n = e[i];
          n in t || (t[n] = {}), t = t[n]
        }
        (a = a( i = t[e = e[e.length - 1]] )) != i && null != a && d.defineProperty( t, e, {
          configurable : !0,
          writable     : !0,
          value        : a
        } )
      }
    }, d.polyfill( "Array.prototype.keys", (function (e) {
      return e || function () {
        return d.iteratorFromArray( this, (function (e) {
          return e
        }) )
      }
    }), "es6-impl", "es3" );
    var g = this;
    M.anime = function () {
      function e(e) {
        if (!S.col( e )) try {
          return document.querySelectorAll( e )
        } catch (e) {
        }
      }

      function a(e, a) {
        for (var t = e.length, i = 2 <= arguments.length ? arguments[1] : void 0, n = [], s = 0; s < t; s++) if (s in e) {
          var o = e[s];
          a.call( i, o, s, e ) && n.push( o )
        }
        return n
      }

      function t(e) {
        return e.reduce( (function (e, a) {
          return e.concat( S.arr( a ) ? t( a ) : a )
        }), [] )
      }

      function i(a) {
        return S.arr( a ) ? a : (S.str( a ) && (a = e( a ) || a), a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call( a ) : [a])
      }

      function n(e, a) {
        return e.some( (function (e) {
          return e === a
        }) )
      }

      function s(e) {
        var a, t = {};
        for (a in e) t[a] = e[a];
        return t
      }

      function o(e, a) {
        var t, i = s( e );
        for (t in e) i[t] = a.hasOwnProperty( t ) ? a[t] : e[t];
        return i
      }

      function l(e, a) {
        var t, i = s( e );
        for (t in a) i[t] = S.und( e[t] ) ? a[t] : e[t];
        return i
      }

      function r(e) {
        if (e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec( e )) return e[2]
      }

      function m(e, a) {
        return S.fnc( e ) ? e( a.target, a.id, a.total ) : e
      }

      function p(e, a) {
        if (a in e.style) return getComputedStyle( e ).getPropertyValue( a.replace( /([a-z])([A-Z])/g, "$1-$2" ).toLowerCase() ) || "0"
      }

      function d(e, a) {
        return S.dom( e ) && n( I, a ) ? "transform" : S.dom( e ) && (e.getAttribute( a ) || S.svg( e ) && e[a]) ? "attribute" : S.dom( e ) && "transform" !== a && p( e, a ) ? "css" : null != e[a] ? "object" : void 0
      }

      function x(e, t) {
        switch (d( e, t )) {
          case"transform":
            return function (e, t) {
              var i = function (e) {
                return -1 < e.indexOf( "translate" ) || "perspective" === e ? "px" : -1 < e.indexOf( "rotate" ) || -1 < e.indexOf( "skew" ) ? "deg" : void 0
              }( t );
              if (i = -1 < t.indexOf( "scale" ) ? 1 : 0 + i, !(e = e.style.transform)) return i;
              for (var n = [], s = [], o = [], l = /(\w+)\((.+?)\)/g; n = l.exec( e );) s.push( n[1] ), o.push( n[2] );
              return (e = a( o, (function (e, a) {
                return s[a] === t
              }) )).length ? e[0] : i
            }( e, t );
          case"css":
            return p( e, t );
          case"attribute":
            return e.getAttribute( t )
        }
        return e[t] || 0
      }

      function u(e, a) {
        var t = /^(\*=|\+=|-=)/.exec( e );
        if (!t) return e;
        var i = r( e ) || 0;
        switch (a = parseFloat( a ), e = parseFloat( e.replace( t[0], "" ) ), t[0][0]) {
          case"+":
            return a + e + i;
          case"-":
            return a - e + i;
          case"*":
            return a * e + i
        }
      }

      function f(e, a) {
        return Math.sqrt( Math.pow( a.x - e.x, 2 ) + Math.pow( a.y - e.y, 2 ) )
      }

      function h(e) {
        e = e.points;
        for (var a, t = 0, i = 0; i < e.numberOfItems; i++) {
          var n = e.getItem( i );
          0 < i && (t += f( a, n )), a = n
        }
        return t
      }

      function _(e) {
        if (e.getTotalLength) return e.getTotalLength();
        switch (e.tagName.toLowerCase()) {
          case"circle":
            return 2 * Math.PI * e.getAttribute( "r" );
          case"rect":
            return 2 * e.getAttribute( "width" ) + 2 * e.getAttribute( "height" );
          case"line":
            return f( {x : e.getAttribute( "x1" ), y : e.getAttribute( "y1" )}, {
              x : e.getAttribute( "x2" ),
              y : e.getAttribute( "y2" )
            } );
          case"polyline":
            return h( e );
          case"polygon":
            var a = e.points;
            return h( e ) + f( a.getItem( a.numberOfItems - 1 ), a.getItem( 0 ) )
        }
      }

      function c(e, a) {
        function t(t) {
          return t = void 0 === t ? 0 : t, e.el.getPointAtLength( 1 <= a + t ? a + t : 0 )
        }

        var i = t(), n = t( -1 ), s = t( 1 );
        switch (e.property) {
          case"x":
            return i.x;
          case"y":
            return i.y;
          case"angle":
            return 180 * Math.atan2( s.y - n.y, s.x - n.x ) / Math.PI
        }
      }

      function T(e, a) {
        var t, i = /-?\d*\.?\d+/g;
        if (t = S.pth( e ) ? e.totalLength : e, S.col( t )) if (S.rgb( t )) {
          var n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec( t );
          t = n ? "rgba(" + n[1] + ",1)" : t
        } else t = S.hex( t ) ? function (e) {
          e = e.replace( /^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function (e, a, t, i) {
            return a + a + t + t + i + i
          }) );
          var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( e );
          return "rgba(" + (e = parseInt( a[1], 16 )) + "," + parseInt( a[2], 16 ) + "," + (a = parseInt( a[3], 16 )) + ",1)"
        }( t ) : S.hsl( t ) ? function (e) {
          function a(e, a, t) {
            return 0 > t && (t += 1), 1 < t && --t, t < 1 / 6 ? e + 6 * (a - e) * t : .5 > t ? a : t < 2 / 3 ? e + (a - e) * (2 / 3 - t) * 6 : e
          }

          var t = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec( e ) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec( e );
          e = parseInt( t[1] ) / 360;
          var i = parseInt( t[2] ) / 100, n = parseInt( t[3] ) / 100;
          if (t = t[4] || 1, 0 == i) n = i = e = n; else {
            var s = .5 > n ? n * (1 + i) : n + i - n * i, o = 2 * n - s;
            n = a( o, s, e + 1 / 3 ), i = a( o, s, e ), e = a( o, s, e - 1 / 3 )
          }
          return "rgba(" + 255 * n + "," + 255 * i + "," + 255 * e + "," + t + ")"
        }( t ) : void 0; else n = (n = r( t )) ? t.substr( 0, t.length - n.length ) : t, t = a && !/\s/g.test( t ) ? n + a : n;
        return {
          original : t += "",
          numbers  : t.match( i ) ? t.match( i ).map( Number ) : [0],
          strings  : S.str( e ) || a ? t.split( i ) : []
        }
      }

      function w(e) {
        return a( e = e ? t( S.arr( e ) ? e.map( i ) : i( e ) ) : [], (function (e, a, t) {
          return t.indexOf( e ) === a
        }) )
      }

      function E(e, a) {
        var t = s( a );
        if (S.arr( e )) {
          var n = e.length;
          2 !== n || S.obj( e[0] ) ? S.fnc( a.duration ) || (t.duration = a.duration / n) : e = {value : e}
        }
        return i( e ).map( (function (e, t) {
          return t = t ? 0 : a.delay, e = S.obj( e ) && !S.pth( e ) ? e : {value : e}, S.und( e.delay ) && (e.delay = t), e
        }) ).map( (function (e) {
          return l( e, t )
        }) )
      }

      function M(e, a) {
        var t;
        return e.tweens.map( (function (i) {
          var n = (i = function (e, a) {
              var t, i = {};
              for (t in e) {
                var n = m( e[t], a );
                S.arr( n ) && 1 === (n = n.map( (function (e) {
                  return m( e, a )
                }) )).length && (n = n[0]), i[t] = n
              }
              return i.duration = parseFloat( i.duration ), i.delay = parseFloat( i.delay ), i
            }( i, a )).value, s = x( a.target, e.name ), o = t ? t.to.original : s,
            l = (o = S.arr( n ) ? n[0] : o, u( S.arr( n ) ? n[1] : n, o ));
          return s = r( l ) || r( o ) || r( s ), i.from = T( o, s ), i.to = T( l, s ), i.start = t ? t.end : e.offset, i.end = i.start + i.delay + i.duration, i.easing = function (e) {
            return S.arr( e ) ? C.apply( this, e ) : L[e]
          }( i.easing ), i.elasticity = (1e3 - Math.min( Math.max( i.elasticity, 1 ), 999 )) / 1e3, i.isPath = S.pth( n ), i.isColor = S.col( i.from.original ), i.isColor && (i.round = 1), t = i
        }) )
      }

      function y(e, a, t, i) {
        var n = "delay" === e;
        return a.length ? (n ? Math.min : Math.max).apply( Math, a.map( (function (a) {
          return a[e]
        }) ) ) : n ? i.delay : t.offset + i.delay + i.duration
      }

      function v(e) {
        var i, n = o( j, e ), s = o( A, e ), r = function (e) {
          var a = w( e );
          return a.map( (function (e, t) {
            return {target : e, id : t, total : a.length}
          }) )
        }( e.targets ), m = [], p = l( n, s );
        for (i in e) p.hasOwnProperty( i ) || "targets" === i || m.push( {
          name   : i,
          offset : p.offset,
          tweens : E( e[i], s )
        } );
        return e = function (e, i) {
          return a( t( e.map( (function (e) {
            return i.map( (function (a) {
              var t = d( e.target, a.name );
              if (t) {
                var i = M( a, e );
                a = {
                  type       : t,
                  property   : a.name,
                  animatable : e,
                  tweens     : i,
                  duration   : i[i.length - 1].end,
                  delay      : i[0].delay
                }
              } else a = void 0;
              return a
            }) )
          }) ) ), (function (e) {
            return !S.und( e )
          }) )
        }( r, m ), l( n, {
          children    : [],
          animatables : r,
          animations  : e,
          duration    : y( "duration", e, n, s ),
          delay       : y( "delay", e, n, s )
        } )
      }

      function b(e) {
        function t() {
          return window.Promise && new Promise( (function (e) {
            return g = e
          }) )
        }

        function i(e) {
          return u.reversed ? u.duration - e : e
        }

        function n(e) {
          for (var t = 0, i = {}, n = u.animations, s = n.length; t < s;) {
            var o = n[t], l = o.animatable, r = (m = o.tweens)[x = m.length - 1];
            x && (r = a( m, (function (a) {
              return e < a.end
            }) )[0] || r);
            for (var m = Math.min( Math.max( e - r.start - r.delay, 0 ), r.duration ) / r.duration, d = isNaN( m ) ? 1 : r.easing( m, r.elasticity ), g = (m = r.to.strings, r.round), x = [], f = void 0, h = (f = r.to.numbers.length, 0); h < f; h++) {
              var _ = void 0, T = (_ = r.to.numbers[h], r.from.numbers[h]);
              _ = r.isPath ? c( r.value, d * _ ) : T + d * (_ - T), g && (r.isColor && 2 < h || (_ = Math.round( _ * g ) / g)), x.push( _ )
            }
            if (r = m.length) for (f = m[0], d = 0; d < r; d++) g = m[d + 1], h = x[d], isNaN( h ) || (f = g ? f + (h + g) : f + (h + " ")); else f = x[0];
            O[o.type]( l.target, o.property, f, i, l.id ), o.currentValue = f, t++
          }
          if (t = Object.keys( i ).length) for (n = 0; n < t; n++) k || (k = p( document.body, "transform" ) ? "transform" : "-webkit-transform"), u.animatables[n].target.style[k] = i[n].join( " " );
          u.currentTime = e, u.progress = e / u.duration * 100
        }

        function s(e) {
          u[e] && u[e]( u )
        }

        function o() {
          u.remaining && !0 !== u.remaining && u.remaining--
        }

        function l(e) {
          var a = u.duration, l = u.offset, p = l + u.delay, f = u.currentTime, h = u.reversed, _ = i( e );
          if (u.children.length) {
            var c = u.children, T = c.length;
            if (_ >= u.currentTime) for (var w = 0; w < T; w++) c[w].seek( _ ); else for (; T--;) c[T].seek( _ )
          }
          (_ >= p || !a) && (u.began || (u.began = !0, s( "begin" )), s( "run" )), _ > l && _ < a ? n( _ ) : (_ <= l && 0 !== f && (n( 0 ), h && o()), (_ >= a && f !== a || !a) && (n( a ), h || o())), s( "update" ), e >= a && (u.remaining ? (m = r, "alternate" === u.direction && (u.reversed = !u.reversed)) : (u.pause(), u.completed || (u.completed = !0, s( "complete" ), "Promise" in window && (g(), x = t()))), d = 0)
        }

        e = void 0 === e ? {} : e;
        var r, m, d = 0, g = null, x = t(), u = v( e );
        return u.reset = function () {
          var e = u.direction, a = u.loop;
          for (u.currentTime = 0, u.progress = 0, u.paused = !0, u.began = !1, u.completed = !1, u.reversed = "reverse" === e, u.remaining = "alternate" === e && 1 === a ? 2 : a, n( 0 ), e = u.children.length; e--;) u.children[e].reset()
        }, u.tick = function (e) {
          r = e, m || (m = r), l( (d + r - m) * b.speed )
        }, u.seek = function (e) {
          l( i( e ) )
        }, u.pause = function () {
          var e = H.indexOf( u );
          -1 < e && H.splice( e, 1 ), u.paused = !0
        }, u.play = function () {
          u.paused && (u.paused = !1, m = 0, d = i( u.currentTime ), H.push( u ), W || B())
        }, u.reverse = function () {
          u.reversed = !u.reversed, m = 0, d = i( u.currentTime )
        }, u.restart = function () {
          u.pause(), u.reset(), u.play()
        }, u.finished = x, u.reset(), u.autoplay && u.play(), u
      }

      var k, j = {
          update : void 0,
          begin : void 0,
          run : void 0,
          complete : void 0,
          loop : 1,
          direction : "normal",
          autoplay : !0,
          offset : 0
        }, A = {duration : 1e3, delay : 0, easing : "easeOutElastic", elasticity : 500, round : 0},
        I = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split( " " ),
        S = {
          arr : function (e) {
            return Array.isArray( e )
          }, obj : function (e) {
            return -1 < Object.prototype.toString.call( e ).indexOf( "Object" )
          }, pth : function (e) {
            return S.obj( e ) && e.hasOwnProperty( "totalLength" )
          }, svg : function (e) {
            return e instanceof SVGElement
          }, dom : function (e) {
            return e.nodeType || S.svg( e )
          }, str : function (e) {
            return "string" == typeof e
          }, fnc : function (e) {
            return "function" == typeof e
          }, und : function (e) {
            return void 0 === e
          }, hex : function (e) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test( e )
          }, rgb : function (e) {
            return /^rgb/.test( e )
          }, hsl : function (e) {
            return /^hsl/.test( e )
          }, col : function (e) {
            return S.hex( e ) || S.rgb( e ) || S.hsl( e )
          }
        }, C = function () {
          function e(e, a, t) {
            return (((1 - 3 * t + 3 * a) * e + (3 * t - 6 * a)) * e + 3 * a) * e
          }

          return function (a, t, i, n) {
            if (0 <= a && 1 >= a && 0 <= i && 1 >= i) {
              var s = new Float32Array( 11 );
              if (a !== t || i !== n) for (var o = 0; 11 > o; ++o) s[o] = e( .1 * o, a, i );
              return function (o) {
                if (a === t && i === n) return o;
                if (0 === o) return 0;
                if (1 === o) return 1;
                for (var l = 0, r = 1; 10 !== r && s[r] <= o; ++r) l += .1;
                --r, r = l + (o - s[r]) / (s[r + 1] - s[r]) * .1;
                var m = 3 * (1 - 3 * i + 3 * a) * r * r + 2 * (3 * i - 6 * a) * r + 3 * a;
                if (.001 <= m) {
                  for (l = 0; 4 > l && 0 != (m = 3 * (1 - 3 * i + 3 * a) * r * r + 2 * (3 * i - 6 * a) * r + 3 * a); ++l) {
                    var p = e( r, a, i ) - o;
                    r -= p / m
                  }
                  o = r
                } else if (0 === m) o = r; else {
                  r = l, l += .1;
                  var d = 0;
                  do {
                    0 < (m = e( p = r + (l - r) / 2, a, i ) - o) ? l = p : r = p
                  } while (1e-7 < Math.abs( m ) && 10 > ++d);
                  o = p
                }
                return e( o, t, n )
              }
            }
          }
        }(), L = function () {
          function e(e, a) {
            return 0 === e || 1 === e ? e : -Math.pow( 2, 10 * (e - 1) ) * Math.sin( 2 * (e - 1 - a / (2 * Math.PI) * Math.asin( 1 )) * Math.PI / a )
          }

          var a, t = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split( " " ), i = {
            In : [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], e],
            Out : [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (a, t) {
              return 1 - e( 1 - a, t )
            }],
            InOut : [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (a, t) {
              return .5 > a ? e( 2 * a, t ) / 2 : 1 - e( -2 * a + 2, t ) / 2
            }]
          }, n = {linear : C( .25, .25, .75, .75 )}, s = {};
          for (a in i) s.type = a, i[s.type].forEach( function (e) {
            return function (a, i) {
              n["ease" + e.type + t[i]] = S.fnc( a ) ? a : C.apply( g, a )
            }
          }( s ) ), s = {type : s.type};
          return n
        }(), O = {
          css : function (e, a, t) {
            return e.style[a] = t
          }, attribute : function (e, a, t) {
            return e.setAttribute( a, t )
          }, object : function (e, a, t) {
            return e[a] = t
          }, transform : function (e, a, t, i, n) {
            i[n] || (i[n] = []), i[n].push( a + "(" + t + ")" )
          }
        }, H = [], W = 0, B = function () {
          function e() {
            W = requestAnimationFrame( a )
          }

          function a(a) {
            var t = H.length;
            if (t) {
              for (var i = 0; i < t;) H[i] && H[i].tick( a ), i++;
              e()
            } else cancelAnimationFrame( W ), W = 0
          }

          return e
        }();
      return b.version = "2.2.0", b.speed = 1, b.running = H, b.remove = function (e) {
        e = w( e );
        for (var a = H.length; a--;) for (var t = H[a], i = t.animations, s = i.length; s--;) n( e, i[s].animatable.target ) && (i.splice( s, 1 ), i.length || t.pause())
      }, b.getValue = x, b.path = function (a, t) {
        var i = S.str( a ) ? e( a )[0] : a, n = t || 100;
        return function (e) {
          return {el : i, property : e, totalLength : _( i ) * (n / 100)}
        }
      }, b.setDashoffset = function (e) {
        var a = _( e );
        return e.setAttribute( "stroke-dasharray", a ), a
      }, b.bezier = C, b.easings = L, b.timeline = function (e) {
        var a = b( e );
        return a.pause(), a.duration = 0, a.add = function (t) {
          return a.children.forEach( (function (e) {
            e.began = !0, e.completed = !0
          }) ), i( t ).forEach( (function (t) {
            var i = l( t, o( A, e || {} ) );
            i.targets = i.targets || e.targets, t = a.duration;
            var n = i.offset;
            i.autoplay = !1, i.direction = a.direction, i.offset = S.und( n ) ? t : u( n, t ), a.began = !0, a.completed = !0, a.seek( i.offset ), (i = b( i )).began = !0, i.completed = !0, i.duration > t && (a.duration = i.duration), a.children.push( i )
          }) ), a.seek( 0 ), a.reset(), a.autoplay && a.restart(), a
        }, a
      }, b.random = function (e, a) {
        return Math.floor( Math.random() * (a - e + 1) ) + e
      }, b
    }(), function (e, a) {
      "use strict";
      var t = {
        accordion    : !0,
        onOpenStart  : void 0,
        onOpenEnd    : void 0,
        onCloseStart : void 0,
        onCloseEnd   : void 0,
        inDuration   : 300,
        outDuration  : 300
      }, i = function (i) {
        function m(a, t) {
          r( this, m );
          var i = o( this, (m.__proto__ || Object.getPrototypeOf( m )).call( this, m, a, t ) );
          i.el.M_Collapsible = i, i.options = e.extend( {}, m.defaults, t ), i.$headers = i.$el.children( "li" ).children( ".collapsible-header" ), i.$headers.attr( "tabindex", 0 ), i._setupEventHandlers();
          var n = i.$el.children( "li.active" ).children( ".collapsible-body" );
          return i.options.accordion ? n.first().css( "display", "block" ) : n.css( "display", "block" ), i
        }

        return l( m, i ), s( m, [{
          key : "destroy", value : function () {
            this._removeEventHandlers(), this.el.M_Collapsible = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            var e = this;
            this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind( this ), this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind( this ), this.el.addEventListener( "click", this._handleCollapsibleClickBound ), this.$headers.each( (function (a) {
              a.addEventListener( "keydown", e._handleCollapsibleKeydownBound )
            }) )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            var e = this;
            this.el.removeEventListener( "click", this._handleCollapsibleClickBound ), this.$headers.each( (function (a) {
              a.removeEventListener( "keydown", e._handleCollapsibleKeydownBound )
            }) )
          }
        }, {
          key : "_handleCollapsibleClick", value : function (a) {
            var t = e( a.target ).closest( ".collapsible-header" );
            if (a.target && t.length) {
              var i = t.closest( ".collapsible" );
              if (i[0] === this.el) {
                var n = t.closest( "li" ), s = i.children( "li" ), o = n[0].classList.contains( "active" ),
                  l = s.index( n );
                o ? this.close( l ) : this.open( l )
              }
            }
          }
        }, {
          key : "_handleCollapsibleKeydown", value : function (e) {
            13 === e.keyCode && this._handleCollapsibleClickBound( e )
          }
        }, {
          key : "_animateIn", value : function (e) {
            var t = this, i = this.$el.children( "li" ).eq( e );
            if (i.length) {
              var n = i.children( ".collapsible-body" );
              a.remove( n[0] ), n.css( {
                display       : "block",
                overflow      : "hidden",
                height        : 0,
                paddingTop    : "",
                paddingBottom : ""
              } );
              var s = n.css( "padding-top" ), o = n.css( "padding-bottom" ), l = n[0].scrollHeight;
              n.css( {paddingTop : 0, paddingBottom : 0} ), a( {
                targets       : n[0],
                height        : l,
                paddingTop    : s,
                paddingBottom : o,
                duration      : this.options.inDuration,
                easing        : "easeInOutCubic",
                complete      : function (e) {
                  n.css( {
                    overflow      : "",
                    paddingTop    : "",
                    paddingBottom : "",
                    height        : ""
                  } ), "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call( t, i[0] )
                }
              } )
            }
          }
        }, {
          key : "_animateOut", value : function (e) {
            var t = this, i = this.$el.children( "li" ).eq( e );
            if (i.length) {
              var n = i.children( ".collapsible-body" );
              a.remove( n[0] ), n.css( "overflow", "hidden" ), a( {
                targets       : n[0],
                height        : 0,
                paddingTop    : 0,
                paddingBottom : 0,
                duration      : this.options.outDuration,
                easing        : "easeInOutCubic",
                complete      : function () {
                  n.css( {
                    height   : "",
                    overflow : "",
                    padding  : "",
                    display  : ""
                  } ), "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call( t, i[0] )
                }
              } )
            }
          }
        }, {
          key : "open", value : function (a) {
            var t = this, i = this.$el.children( "li" ).eq( a );
            if (i.length && !i[0].classList.contains( "active" )) {
              if ("function" == typeof this.options.onOpenStart && this.options.onOpenStart.call( this, i[0] ), this.options.accordion) {
                var n = this.$el.children( "li" );
                this.$el.children( "li.active" ).each( (function (a) {
                  var i = n.index( e( a ) );
                  t.close( i )
                }) )
              }
              i[0].classList.add( "active" ), this._animateIn( a )
            }
          }
        }, {
          key : "close", value : function (e) {
            var a = this.$el.children( "li" ).eq( e );
            a.length && a[0].classList.contains( "active" ) && ("function" == typeof this.options.onCloseStart && this.options.onCloseStart.call( this, a[0] ), a[0].classList.remove( "active" ), this._animateOut( e ))
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( m.__proto__ || Object.getPrototypeOf( m ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Collapsible
          }
        }, {
          key : "defaults", get : function () {
            return t
          }
        }] ), m
      }( m );
      M.Collapsible = i, M.jQueryLoaded && M.initializeJqueryWrapper( i, "collapsible", "M_Collapsible" )
    }( cash, M.anime ), function (e, a) {
      "use strict";
      var t = {
        alignment      : "left",
        autoFocus      : !0,
        constrainWidth : !0,
        container      : null,
        coverTrigger   : !0,
        closeOnClick   : !0,
        hover          : !1,
        inDuration     : 150,
        outDuration    : 250,
        onOpenStart    : null,
        onOpenEnd      : null,
        onCloseStart   : null,
        onCloseEnd     : null,
        onItemClick    : null
      }, i = function (i) {
        function m(a, t) {
          r( this, m );
          var i = o( this, (m.__proto__ || Object.getPrototypeOf( m )).call( this, m, a, t ) );
          return i.el.M_Dropdown = i, m._dropdowns.push( i ), i.id = M.getIdFromTrigger( a ), i.dropdownEl = document.getElementById( i.id ), i.$dropdownEl = e( i.dropdownEl ), i.options = e.extend( {}, m.defaults, t ), i.isOpen = !1, i.isScrollable = !1, i.isTouchMoving = !1, i.focusedIndex = -1, i.filterQuery = [], i.options.container ? e( i.options.container ).append( i.dropdownEl ) : i.$el.after( i.dropdownEl ), i._makeDropdownFocusable(), i._resetFilterQueryBound = i._resetFilterQuery.bind( i ), i._handleDocumentClickBound = i._handleDocumentClick.bind( i ), i._handleDocumentTouchmoveBound = i._handleDocumentTouchmove.bind( i ), i._handleDropdownClickBound = i._handleDropdownClick.bind( i ), i._handleDropdownKeydownBound = i._handleDropdownKeydown.bind( i ), i._handleTriggerKeydownBound = i._handleTriggerKeydown.bind( i ), i._setupEventHandlers(), i
        }

        return l( m, i ), s( m, [{
          key : "destroy", value : function () {
            this._resetDropdownStyles(), this._removeEventHandlers(), m._dropdowns.splice( m._dropdowns.indexOf( this ), 1 ), this.el.M_Dropdown = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            this.el.addEventListener( "keydown", this._handleTriggerKeydownBound ), this.dropdownEl.addEventListener( "click", this._handleDropdownClickBound ), this.options.hover ? (this._handleMouseEnterBound = this._handleMouseEnter.bind( this ), this.el.addEventListener( "mouseenter", this._handleMouseEnterBound ), this._handleMouseLeaveBound = this._handleMouseLeave.bind( this ), this.el.addEventListener( "mouseleave", this._handleMouseLeaveBound ), this.dropdownEl.addEventListener( "mouseleave", this._handleMouseLeaveBound )) : (this._handleClickBound = this._handleClick.bind( this ), this.el.addEventListener( "click", this._handleClickBound ))
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            this.el.removeEventListener( "keydown", this._handleTriggerKeydownBound ), this.dropdownEl.removeEventListener( "click", this._handleDropdownClickBound ), this.options.hover ? (this.el.removeEventListener( "mouseenter", this._handleMouseEnterBound ), this.el.removeEventListener( "mouseleave", this._handleMouseLeaveBound ), this.dropdownEl.removeEventListener( "mouseleave", this._handleMouseLeaveBound )) : this.el.removeEventListener( "click", this._handleClickBound )
          }
        }, {
          key : "_setupTemporaryEventHandlers", value : function () {
            document.body.addEventListener( "click", this._handleDocumentClickBound, !0 ), document.body.addEventListener( "touchend", this._handleDocumentClickBound ), document.body.addEventListener( "touchmove", this._handleDocumentTouchmoveBound ), this.dropdownEl.addEventListener( "keydown", this._handleDropdownKeydownBound )
          }
        }, {
          key : "_removeTemporaryEventHandlers", value : function () {
            document.body.removeEventListener( "click", this._handleDocumentClickBound, !0 ), document.body.removeEventListener( "touchend", this._handleDocumentClickBound ), document.body.removeEventListener( "touchmove", this._handleDocumentTouchmoveBound ), this.dropdownEl.removeEventListener( "keydown", this._handleDropdownKeydownBound )
          }
        }, {
          key : "_handleClick", value : function (e) {
            e.preventDefault(), this.open()
          }
        }, {
          key : "_handleMouseEnter", value : function () {
            this.open()
          }
        }, {
          key : "_handleMouseLeave", value : function (a) {
            var t = a.toElement || a.relatedTarget, i = !!e( t ).closest( ".dropdown-content" ).length, n = !1,
              s = e( t ).closest( ".dropdown-trigger" );
            s.length && s[0].M_Dropdown && s[0].M_Dropdown.isOpen && (n = !0), n || i || this.close()
          }
        }, {
          key : "_handleDocumentClick", value : function (a) {
            var t = this, i = e( a.target );
            this.options.closeOnClick && i.closest( ".dropdown-content" ).length && !this.isTouchMoving ? setTimeout( (function () {
              t.close()
            }), 0 ) : !i.closest( ".dropdown-trigger" ).length && i.closest( ".dropdown-content" ).length || setTimeout( (function () {
              t.close()
            }), 0 ), this.isTouchMoving = !1
          }
        }, {
          key : "_handleTriggerKeydown", value : function (e) {
            e.which !== M.keys.ARROW_DOWN && e.which !== M.keys.ENTER || this.isOpen || (e.preventDefault(), this.open())
          }
        }, {
          key : "_handleDocumentTouchmove", value : function (a) {
            e( a.target ).closest( ".dropdown-content" ).length && (this.isTouchMoving = !0)
          }
        }, {
          key : "_handleDropdownClick", value : function (a) {
            if ("function" == typeof this.options.onItemClick) {
              var t = e( a.target ).closest( "li" )[0];
              this.options.onItemClick.call( this, t )
            }
          }
        }, {
          key : "_handleDropdownKeydown", value : function (a) {
            if (a.which === M.keys.TAB) a.preventDefault(), this.close(); else if (a.which !== M.keys.ARROW_DOWN && a.which !== M.keys.ARROW_UP || !this.isOpen) if (a.which === M.keys.ENTER && this.isOpen) {
              var t = this.dropdownEl.children[this.focusedIndex], i = e( t ).find( "a, button" ).first();
              i.length ? i[0].click() : t.click()
            } else a.which === M.keys.ESC && this.isOpen && (a.preventDefault(), this.close()); else {
              a.preventDefault();
              var n = a.which === M.keys.ARROW_DOWN ? 1 : -1, s = this.focusedIndex, o = !1;
              do {
                if (s += n, this.dropdownEl.children[s] && -1 !== this.dropdownEl.children[s].tabIndex) {
                  o = !0;
                  break
                }
              } while (s < this.dropdownEl.children.length && s >= 0);
              o && (this.focusedIndex = s, this._focusFocusedItem())
            }
            var l = String.fromCharCode( a.which ).toLowerCase();
            if (l && -1 === [9, 13, 27, 38, 40].indexOf( a.which )) {
              this.filterQuery.push( l );
              var r = this.filterQuery.join( "" ), m = e( this.dropdownEl ).find( "li" ).filter( (function (a) {
                return 0 === e( a ).text().toLowerCase().indexOf( r )
              }) )[0];
              m && (this.focusedIndex = e( m ).index(), this._focusFocusedItem())
            }
            this.filterTimeout = setTimeout( this._resetFilterQueryBound, 1e3 )
          }
        }, {
          key : "_resetFilterQuery", value : function () {
            this.filterQuery = []
          }
        }, {
          key : "_resetDropdownStyles", value : function () {
            this.$dropdownEl.css( {
              display            : "",
              width              : "",
              height             : "",
              left               : "",
              top                : "",
              "transform-origin" : "",
              transform          : "",
              opacity            : ""
            } )
          }
        }, {
          key : "_makeDropdownFocusable", value : function () {
            this.dropdownEl.tabIndex = 0, e( this.dropdownEl ).children().each( (function (e) {
              e.getAttribute( "tabindex" ) || e.setAttribute( "tabindex", 0 )
            }) )
          }
        }, {
          key : "_focusFocusedItem", value : function () {
            this.focusedIndex >= 0 && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus && this.dropdownEl.children[this.focusedIndex].focus()
          }
        }, {
          key : "_getDropdownPosition", value : function () {
            this.el.offsetParent.getBoundingClientRect();
            var e = this.el.getBoundingClientRect(), a = this.dropdownEl.getBoundingClientRect(), t = a.height,
              i = a.width, n = e.left - a.left, s = e.top - a.top, o = {left : n, top : s, height : t, width : i},
              l = this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode,
              r = M.checkPossibleAlignments( this.el, l, o, this.options.coverTrigger ? 0 : e.height ), m = "top",
              p = this.options.alignment;
            if (s += this.options.coverTrigger ? 0 : e.height, this.isScrollable = !1, r.top || (r.bottom ? m = "bottom" : (this.isScrollable = !0, r.spaceOnTop > r.spaceOnBottom ? (m = "bottom", t += r.spaceOnTop, s -= r.spaceOnTop) : t += r.spaceOnBottom)), !r[p]) {
              var d = "left" === p ? "right" : "left";
              r[d] ? p = d : r.spaceOnLeft > r.spaceOnRight ? (p = "right", i += r.spaceOnLeft, n -= r.spaceOnLeft) : (p = "left", i += r.spaceOnRight)
            }
            return "bottom" === m && (s = s - a.height + (this.options.coverTrigger ? e.height : 0)), "right" === p && (n = n - a.width + e.width), {
              x                   : n,
              y                   : s,
              verticalAlignment   : m,
              horizontalAlignment : p,
              height              : t,
              width               : i
            }
          }
        }, {
          key : "_animateIn", value : function () {
            var e = this;
            a.remove( this.dropdownEl ), a( {
              targets  : this.dropdownEl,
              opacity  : {value : [0, 1], easing : "easeOutQuad"},
              scaleX   : [.3, 1],
              scaleY   : [.3, 1],
              duration : this.options.inDuration,
              easing   : "easeOutQuint",
              complete : function (a) {
                if (e.options.autoFocus && e.dropdownEl.focus(), "function" == typeof e.options.onOpenEnd) {
                  var t = a.animatables[0].target;
                  e.options.onOpenEnd.call( t, e.el )
                }
              }
            } )
          }
        }, {
          key : "_animateOut", value : function () {
            var e = this;
            a.remove( this.dropdownEl ), a( {
              targets  : this.dropdownEl,
              opacity  : {value : 0, easing : "easeOutQuint"},
              scaleX   : .3,
              scaleY   : .3,
              duration : this.options.outDuration,
              easing   : "easeOutQuint",
              complete : function (a) {
                if (e._resetDropdownStyles(), "function" == typeof e.options.onCloseEnd) {
                  a.animatables[0].target;
                  e.options.onCloseEnd.call( e, e.el )
                }
              }
            } )
          }
        }, {
          key : "_placeDropdown", value : function () {
            var e = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
            this.dropdownEl.style.width = e + "px";
            var a = this._getDropdownPosition();
            this.dropdownEl.style.left = a.x + "px", this.dropdownEl.style.top = a.y + "px", this.dropdownEl.style.height = a.height + "px", this.dropdownEl.style.width = a.width + "px", this.dropdownEl.style.transformOrigin = ("left" === a.horizontalAlignment ? "0" : "100%") + " " + ("top" === a.verticalAlignment ? "0" : "100%")
          }
        }, {
          key : "open", value : function () {
            this.isOpen || (this.isOpen = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call( this, this.el ), this._resetDropdownStyles(), this.dropdownEl.style.display = "block", this._placeDropdown(), this._animateIn(), this._setupTemporaryEventHandlers())
          }
        }, {
          key : "close", value : function () {
            this.isOpen && (this.isOpen = !1, this.focusedIndex = -1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call( this, this.el ), this._animateOut(), this._removeTemporaryEventHandlers(), this.options.autoFocus && this.el.focus())
          }
        }, {
          key : "recalculateDimensions", value : function () {
            this.isOpen && (this.$dropdownEl.css( {
              width              : "",
              height             : "",
              left               : "",
              top                : "",
              "transform-origin" : ""
            } ), this._placeDropdown())
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( m.__proto__ || Object.getPrototypeOf( m ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Dropdown
          }
        }, {
          key : "defaults", get : function () {
            return t
          }
        }] ), m
      }( m );
      i._dropdowns = [], window.M.Dropdown = i, M.jQueryLoaded && M.initializeJqueryWrapper( i, "dropdown", "M_Dropdown" )
    }( cash, M.anime ), function (e, a) {
      "use strict";
      var t = {
        opacity          : .5,
        inDuration       : 250,
        outDuration      : 250,
        onOpenStart      : null,
        onOpenEnd        : null,
        onCloseStart     : null,
        onCloseEnd       : null,
        preventScrolling : !0,
        dismissible      : !0,
        startingTop      : "4%",
        endingTop        : "10%"
      }, i = function (i) {
        function m(a, t) {
          r( this, m );
          var i = o( this, (m.__proto__ || Object.getPrototypeOf( m )).call( this, m, a, t ) );
          return i.el.M_Modal = i, i.options = e.extend( {}, m.defaults, t ), i.isOpen = !1, i.id = i.$el.attr( "id" ), i._openingTrigger = void 0, i.$overlay = e( '<div class="modal-overlay"></div>' ), i.el.tabIndex = 0, i._nthModalOpened = 0, m._count++, i._setupEventHandlers(), i
        }

        return l( m, i ), s( m, [{
          key : "destroy", value : function () {
            m._count--, this._removeEventHandlers(), this.el.removeAttribute( "style" ), this.$overlay.remove(), this.el.M_Modal = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            this._handleOverlayClickBound = this._handleOverlayClick.bind( this ), this._handleModalCloseClickBound = this._handleModalCloseClick.bind( this ), 1 === m._count && document.body.addEventListener( "click", this._handleTriggerClick ), this.$overlay[0].addEventListener( "click", this._handleOverlayClickBound ), this.el.addEventListener( "click", this._handleModalCloseClickBound )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            0 === m._count && document.body.removeEventListener( "click", this._handleTriggerClick ), this.$overlay[0].removeEventListener( "click", this._handleOverlayClickBound ), this.el.removeEventListener( "click", this._handleModalCloseClickBound )
          }
        }, {
          key : "_handleTriggerClick", value : function (a) {
            var t = e( a.target ).closest( ".modal-trigger" );
            if (t.length) {
              var i = M.getIdFromTrigger( t[0] ), n = document.getElementById( i ).M_Modal;
              n && n.open( t ), a.preventDefault()
            }
          }
        }, {
          key : "_handleOverlayClick", value : function () {
            this.options.dismissible && this.close()
          }
        }, {
          key : "_handleModalCloseClick", value : function (a) {
            e( a.target ).closest( ".modal-close" ).length && this.close()
          }
        }, {
          key : "_handleKeydown", value : function (e) {
            27 === e.keyCode && this.options.dismissible && this.close()
          }
        }, {
          key : "_handleFocus", value : function (e) {
            this.el.contains( e.target ) || this._nthModalOpened !== m._modalsOpen || this.el.focus()
          }
        }, {
          key : "_animateIn", value : function () {
            var t = this;
            e.extend( this.el.style, {
              display : "block",
              opacity : 0
            } ), e.extend( this.$overlay[0].style, {display : "block", opacity : 0} ), a( {
              targets  : this.$overlay[0],
              opacity  : this.options.opacity,
              duration : this.options.inDuration,
              easing   : "easeOutQuad"
            } );
            var i = {
              targets  : this.el,
              duration : this.options.inDuration,
              easing   : "easeOutCubic",
              complete : function () {
                "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call( t, t.el, t._openingTrigger )
              }
            };
            this.el.classList.contains( "bottom-sheet" ) ? (e.extend( i, {
              bottom  : 0,
              opacity : 1
            } ), a( i )) : (e.extend( i, {
              top     : [this.options.startingTop, this.options.endingTop],
              opacity : 1,
              scaleX  : [.8, 1],
              scaleY  : [.8, 1]
            } ), a( i ))
          }
        }, {
          key : "_animateOut", value : function () {
            var t = this;
            a( {
              targets  : this.$overlay[0],
              opacity  : 0,
              duration : this.options.outDuration,
              easing   : "easeOutQuart"
            } );
            var i = {
              targets  : this.el,
              duration : this.options.outDuration,
              easing   : "easeOutCubic",
              complete : function () {
                t.el.style.display = "none", t.$overlay.remove(), "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call( t, t.el )
              }
            };
            this.el.classList.contains( "bottom-sheet" ) ? (e.extend( i, {
              bottom  : "-100%",
              opacity : 0
            } ), a( i )) : (e.extend( i, {
              top     : [this.options.endingTop, this.options.startingTop],
              opacity : 0,
              scaleX  : .8,
              scaleY  : .8
            } ), a( i ))
          }
        }, {
          key : "open", value : function (e) {
            if (!this.isOpen) return this.isOpen = !0, m._modalsOpen++, this._nthModalOpened = m._modalsOpen, this.$overlay[0].style.zIndex = 1e3 + 2 * m._modalsOpen, this.el.style.zIndex = 1e3 + 2 * m._modalsOpen + 1, this._openingTrigger = e ? e[0] : void 0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call( this, this.el, this._openingTrigger ), this.options.preventScrolling && (document.body.style.overflow = "hidden"), this.el.classList.add( "open" ), this.el.insertAdjacentElement( "afterend", this.$overlay[0] ), this.options.dismissible && (this._handleKeydownBound = this._handleKeydown.bind( this ), this._handleFocusBound = this._handleFocus.bind( this ), document.addEventListener( "keydown", this._handleKeydownBound ), document.addEventListener( "focus", this._handleFocusBound, !0 )), a.remove( this.el ), a.remove( this.$overlay[0] ), this._animateIn(), this.el.focus(), this
          }
        }, {
          key : "close", value : function () {
            if (this.isOpen) return this.isOpen = !1, m._modalsOpen--, this._nthModalOpened = 0, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call( this, this.el ), this.el.classList.remove( "open" ), 0 === m._modalsOpen && (document.body.style.overflow = ""), this.options.dismissible && (document.removeEventListener( "keydown", this._handleKeydownBound ), document.removeEventListener( "focus", this._handleFocusBound, !0 )), a.remove( this.el ), a.remove( this.$overlay[0] ), this._animateOut(), this
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( m.__proto__ || Object.getPrototypeOf( m ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Modal
          }
        }, {
          key : "defaults", get : function () {
            return t
          }
        }] ), m
      }( m );
      i._modalsOpen = 0, i._count = 0, M.Modal = i, M.jQueryLoaded && M.initializeJqueryWrapper( i, "modal", "M_Modal" )
    }( cash, M.anime ), function (e, a) {
      "use strict";
      var t = {
        inDuration   : 275,
        outDuration  : 200,
        onOpenStart  : null,
        onOpenEnd    : null,
        onCloseStart : null,
        onCloseEnd   : null
      }, i = function (i) {
        function m(a, t) {
          r( this, m );
          var i = o( this, (m.__proto__ || Object.getPrototypeOf( m )).call( this, m, a, t ) );
          return i.el.M_Materialbox = i, i.options = e.extend( {}, m.defaults, t ), i.overlayActive = !1, i.doneAnimating = !0, i.placeholder = e( "<div></div>" ).addClass( "material-placeholder" ), i.originalWidth = 0, i.originalHeight = 0, i.originInlineStyles = i.$el.attr( "style" ), i.caption = i.el.getAttribute( "data-caption" ) || "", i.$el.before( i.placeholder ), i.placeholder.append( i.$el ), i._setupEventHandlers(), i
        }

        return l( m, i ), s( m, [{
          key : "destroy", value : function () {
            this._removeEventHandlers(), this.el.M_Materialbox = void 0, e( this.placeholder ).after( this.el ).remove(), this.$el.removeAttr( "style" )
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind( this ), this.el.addEventListener( "click", this._handleMaterialboxClickBound )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            this.el.removeEventListener( "click", this._handleMaterialboxClickBound )
          }
        }, {
          key : "_handleMaterialboxClick", value : function (e) {
            !1 === this.doneAnimating || this.overlayActive && this.doneAnimating ? this.close() : this.open()
          }
        }, {
          key : "_handleWindowScroll", value : function () {
            this.overlayActive && this.close()
          }
        }, {
          key : "_handleWindowResize", value : function () {
            this.overlayActive && this.close()
          }
        }, {
          key : "_handleWindowEscape", value : function (e) {
            27 === e.keyCode && this.doneAnimating && this.overlayActive && this.close()
          }
        }, {
          key : "_makeAncestorsOverflowVisible", value : function () {
            this.ancestorsChanged = e();
            for (var a = this.placeholder[0].parentNode; null !== a && !e( a ).is( document );) {
              var t = e( a );
              "visible" !== t.css( "overflow" ) && (t.css( "overflow", "visible" ), void 0 === this.ancestorsChanged ? this.ancestorsChanged = t : this.ancestorsChanged = this.ancestorsChanged.add( t )), a = a.parentNode
            }
          }
        }, {
          key : "_animateImageIn", value : function () {
            var e = this, t = {
              targets  : this.el,
              height   : [this.originalHeight, this.newHeight],
              width    : [this.originalWidth, this.newWidth],
              left     : M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
              top      : M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
              duration : this.options.inDuration,
              easing   : "easeOutQuad",
              complete : function () {
                e.doneAnimating = !0, "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call( e, e.el )
              }
            };
            this.maxWidth = this.$el.css( "max-width" ), this.maxHeight = this.$el.css( "max-height" ), "none" !== this.maxWidth && (t.maxWidth = this.newWidth), "none" !== this.maxHeight && (t.maxHeight = this.newHeight), a( t )
          }
        }, {
          key : "_animateImageOut", value : function () {
            var e = this, t = {
              targets  : this.el,
              width    : this.originalWidth,
              height   : this.originalHeight,
              left     : 0,
              top      : 0,
              duration : this.options.outDuration,
              easing   : "easeOutQuad",
              complete : function () {
                e.placeholder.css( {
                  height   : "",
                  width    : "",
                  position : "",
                  top      : "",
                  left     : ""
                } ), e.attrWidth && e.$el.attr( "width", e.attrWidth ), e.attrHeight && e.$el.attr( "height", e.attrHeight ), e.$el.removeAttr( "style" ), e.originInlineStyles && e.$el.attr( "style", e.originInlineStyles ), e.$el.removeClass( "active" ), e.doneAnimating = !0, e.ancestorsChanged.length && e.ancestorsChanged.css( "overflow", "" ), "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call( e, e.el )
              }
            };
            a( t )
          }
        }, {
          key : "_updateVars", value : function () {
            this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.caption = this.el.getAttribute( "data-caption" ) || ""
          }
        }, {
          key : "open", value : function () {
            var t = this;
            this._updateVars(), this.originalWidth = this.el.getBoundingClientRect().width, this.originalHeight = this.el.getBoundingClientRect().height, this.doneAnimating = !1, this.$el.addClass( "active" ), this.overlayActive = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call( this, this.el ), this.placeholder.css( {
              width    : this.placeholder[0].getBoundingClientRect().width + "px",
              height   : this.placeholder[0].getBoundingClientRect().height + "px",
              position : "relative",
              top      : 0,
              left     : 0
            } ), this._makeAncestorsOverflowVisible(), this.$el.css( {
              position      : "absolute",
              "z-index"     : 1e3,
              "will-change" : "left, top, width, height"
            } ), this.attrWidth = this.$el.attr( "width" ), this.attrHeight = this.$el.attr( "height" ), this.attrWidth && (this.$el.css( "width", this.attrWidth + "px" ), this.$el.removeAttr( "width" )), this.attrHeight && (this.$el.css( "width", this.attrHeight + "px" ), this.$el.removeAttr( "height" )), this.$overlay = e( '<div id="materialbox-overlay"></div>' ).css( {opacity : 0} ).one( "click", (function () {
              t.doneAnimating && t.close()
            }) ), this.$el.before( this.$overlay );
            var i = this.$overlay[0].getBoundingClientRect();
            this.$overlay.css( {
              width  : this.windowWidth + "px",
              height : this.windowHeight + "px",
              left   : -1 * i.left + "px",
              top    : -1 * i.top + "px"
            } ), a.remove( this.el ), a.remove( this.$overlay[0] ), a( {
              targets  : this.$overlay[0],
              opacity  : 1,
              duration : this.options.inDuration,
              easing   : "easeOutQuad"
            } ), "" !== this.caption && (this.$photocaption && a.remove( this.$photoCaption[0] ), this.$photoCaption = e( '<div class="materialbox-caption"></div>' ), this.$photoCaption.text( this.caption ), e( "body" ).append( this.$photoCaption ), this.$photoCaption.css( {display : "inline"} ), a( {
              targets  : this.$photoCaption[0],
              opacity  : 1,
              duration : this.options.inDuration,
              easing   : "easeOutQuad"
            } ));
            var n = 0, s = this.originalWidth / this.windowWidth, o = this.originalHeight / this.windowHeight;
            this.newWidth = 0, this.newHeight = 0, s > o ? (n = this.originalHeight / this.originalWidth, this.newWidth = .9 * this.windowWidth, this.newHeight = .9 * this.windowWidth * n) : (n = this.originalWidth / this.originalHeight, this.newWidth = .9 * this.windowHeight * n, this.newHeight = .9 * this.windowHeight), this._animateImageIn(), this._handleWindowScrollBound = this._handleWindowScroll.bind( this ), this._handleWindowResizeBound = this._handleWindowResize.bind( this ), this._handleWindowEscapeBound = this._handleWindowEscape.bind( this ), window.addEventListener( "scroll", this._handleWindowScrollBound ), window.addEventListener( "resize", this._handleWindowResizeBound ), window.addEventListener( "keyup", this._handleWindowEscapeBound )
          }
        }, {
          key : "close", value : function () {
            var e = this;
            this._updateVars(), this.doneAnimating = !1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call( this, this.el ), a.remove( this.el ), a.remove( this.$overlay[0] ), "" !== this.caption && a.remove( this.$photoCaption[0] ), window.removeEventListener( "scroll", this._handleWindowScrollBound ), window.removeEventListener( "resize", this._handleWindowResizeBound ), window.removeEventListener( "keyup", this._handleWindowEscapeBound ), a( {
              targets  : this.$overlay[0],
              opacity  : 0,
              duration : this.options.outDuration,
              easing   : "easeOutQuad",
              complete : function () {
                e.overlayActive = !1, e.$overlay.remove()
              }
            } ), this._animateImageOut(), "" !== this.caption && a( {
              targets  : this.$photoCaption[0],
              opacity  : 0,
              duration : this.options.outDuration,
              easing   : "easeOutQuad",
              complete : function () {
                e.$photoCaption.remove()
              }
            } )
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( m.__proto__ || Object.getPrototypeOf( m ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Materialbox
          }
        }, {
          key : "defaults", get : function () {
            return t
          }
        }] ), m
      }( m );
      M.Materialbox = i, M.jQueryLoaded && M.initializeJqueryWrapper( i, "materialbox", "M_Materialbox" )
    }( cash, M.anime ), function (e) {
      "use strict";
      var a = {responsiveThreshold : 0}, t = function (t) {
        function i(a, t) {
          r( this, i );
          var n = o( this, (i.__proto__ || Object.getPrototypeOf( i )).call( this, i, a, t ) );
          return n.el.M_Parallax = n, n.options = e.extend( {}, i.defaults, t ), n._enabled = window.innerWidth > n.options.responsiveThreshold, n.$img = n.$el.find( "img" ).first(), n.$img.each( (function () {
            this.complete && e( this ).trigger( "load" )
          }) ), n._updateParallax(), n._setupEventHandlers(), n._setupStyles(), i._parallaxes.push( n ), n
        }

        return l( i, t ), s( i, [{
          key : "destroy", value : function () {
            i._parallaxes.splice( i._parallaxes.indexOf( this ), 1 ), this.$img[0].style.transform = "", this._removeEventHandlers(), this.$el[0].M_Parallax = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            this._handleImageLoadBound = this._handleImageLoad.bind( this ), this.$img[0].addEventListener( "load", this._handleImageLoadBound ), 0 === i._parallaxes.length && (i._handleScrollThrottled = M.throttle( i._handleScroll, 5 ), window.addEventListener( "scroll", i._handleScrollThrottled ), i._handleWindowResizeThrottled = M.throttle( i._handleWindowResize, 5 ), window.addEventListener( "resize", i._handleWindowResizeThrottled ))
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            this.$img[0].removeEventListener( "load", this._handleImageLoadBound ), 0 === i._parallaxes.length && (window.removeEventListener( "scroll", i._handleScrollThrottled ), window.removeEventListener( "resize", i._handleWindowResizeThrottled ))
          }
        }, {
          key : "_setupStyles", value : function () {
            this.$img[0].style.opacity = 1
          }
        }, {
          key : "_handleImageLoad", value : function () {
            this._updateParallax()
          }
        }, {
          key : "_updateParallax", value : function () {
            var e = this.$el.height() > 0 ? this.el.parentNode.offsetHeight : 500, a = this.$img[0].offsetHeight - e,
              t = this.$el.offset().top + e, i = this.$el.offset().top, n = M.getDocumentScrollTop(),
              s = window.innerHeight, o = a * ((n + s - i) / (e + s));
            this._enabled ? t > n && i < n + s && (this.$img[0].style.transform = "translate3D(-50%, " + o + "px, 0)") : this.$img[0].style.transform = ""
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( i.__proto__ || Object.getPrototypeOf( i ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Parallax
          }
        }, {
          key : "_handleScroll", value : function () {
            for (var e = 0; e < i._parallaxes.length; e++) {
              var a = i._parallaxes[e];
              a._updateParallax.call( a )
            }
          }
        }, {
          key : "_handleWindowResize", value : function () {
            for (var e = 0; e < i._parallaxes.length; e++) {
              var a = i._parallaxes[e];
              a._enabled = window.innerWidth > a.options.responsiveThreshold
            }
          }
        }, {
          key : "defaults", get : function () {
            return a
          }
        }] ), i
      }( m );
      t._parallaxes = [], M.Parallax = t, M.jQueryLoaded && M.initializeJqueryWrapper( t, "parallax", "M_Parallax" )
    }( cash ), function (e, a) {
      "use strict";
      var t = {duration : 300, onShow : null, swipeable : !1, responsiveThreshold : 1 / 0}, i = function (i) {
        function m(a, t) {
          r( this, m );
          var i = o( this, (m.__proto__ || Object.getPrototypeOf( m )).call( this, m, a, t ) );
          return i.el.M_Tabs = i, i.options = e.extend( {}, m.defaults, t ), i.$tabLinks = i.$el.children( "li.tab" ).children( "a" ), i.index = 0, i._setupActiveTabLink(), i.options.swipeable ? i._setupSwipeableTabs() : i._setupNormalTabs(), i._setTabsAndTabWidth(), i._createIndicator(), i._setupEventHandlers(), i
        }

        return l( m, i ), s( m, [{
          key : "destroy", value : function () {
            this._removeEventHandlers(), this._indicator.parentNode.removeChild( this._indicator ), this.options.swipeable ? this._teardownSwipeableTabs() : this._teardownNormalTabs(), this.$el[0].M_Tabs = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            this._handleWindowResizeBound = this._handleWindowResize.bind( this ), window.addEventListener( "resize", this._handleWindowResizeBound ), this._handleTabClickBound = this._handleTabClick.bind( this ), this.el.addEventListener( "click", this._handleTabClickBound )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            window.removeEventListener( "resize", this._handleWindowResizeBound ), this.el.removeEventListener( "click", this._handleTabClickBound )
          }
        }, {
          key : "_handleWindowResize", value : function () {
            this._setTabsAndTabWidth(), 0 !== this.tabWidth && 0 !== this.tabsWidth && (this._indicator.style.left = this._calcLeftPos( this.$activeTabLink ) + "px", this._indicator.style.right = this._calcRightPos( this.$activeTabLink ) + "px")
          }
        }, {
          key : "_handleTabClick", value : function (a) {
            var t = this, i = e( a.target ).closest( "li.tab" ), n = e( a.target ).closest( "a" );
            if (n.length && n.parent().hasClass( "tab" )) if (i.hasClass( "disabled" )) a.preventDefault(); else if (!n.attr( "target" )) {
              this.$activeTabLink.removeClass( "active" );
              var s = this.$content;
              this.$activeTabLink = n, this.$content = e( M.escapeHash( n[0].hash ) ), this.$tabLinks = this.$el.children( "li.tab" ).children( "a" ), this.$activeTabLink.addClass( "active" );
              var o = this.index;
              this.index = Math.max( this.$tabLinks.index( n ), 0 ), this.options.swipeable ? this._tabsCarousel && this._tabsCarousel.set( this.index, (function () {
                "function" == typeof t.options.onShow && t.options.onShow.call( t, t.$content[0] )
              }) ) : this.$content.length && (this.$content[0].style.display = "block", this.$content.addClass( "active" ), "function" == typeof this.options.onShow && this.options.onShow.call( this, this.$content[0] ), s.length && !s.is( this.$content ) && (s[0].style.display = "none", s.removeClass( "active" ))), this._setTabsAndTabWidth(), this._animateIndicator( o ), a.preventDefault()
            }
          }
        }, {
          key : "_createIndicator", value : function () {
            var e = this, a = document.createElement( "li" );
            a.classList.add( "indicator" ), this.el.appendChild( a ), this._indicator = a, setTimeout( (function () {
              e._indicator.style.left = e._calcLeftPos( e.$activeTabLink ) + "px", e._indicator.style.right = e._calcRightPos( e.$activeTabLink ) + "px"
            }), 0 )
          }
        }, {
          key : "_setupActiveTabLink", value : function () {
            this.$activeTabLink = e( this.$tabLinks.filter( '[href="' + location.hash + '"]' ) ), 0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children( "li.tab" ).children( "a.active" ).first()), 0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children( "li.tab" ).children( "a" ).first()), this.$tabLinks.removeClass( "active" ), this.$activeTabLink[0].classList.add( "active" ), this.index = Math.max( this.$tabLinks.index( this.$activeTabLink ), 0 ), this.$activeTabLink.length && (this.$content = e( M.escapeHash( this.$activeTabLink[0].hash ) ), this.$content.addClass( "active" ))
          }
        }, {
          key : "_setupSwipeableTabs", value : function () {
            var a = this;
            window.innerWidth > this.options.responsiveThreshold && (this.options.swipeable = !1);
            var t = e();
            this.$tabLinks.each( (function (a) {
              var i = e( M.escapeHash( a.hash ) );
              i.addClass( "carousel-item" ), t = t.add( i )
            }) );
            var i = e( '<div class="tabs-content carousel carousel-slider"></div>' );
            t.first().before( i ), i.append( t ), t[0].style.display = "";
            var n = this.$activeTabLink.closest( ".tab" ).index();
            this._tabsCarousel = M.Carousel.init( i[0], {
              fullWidth : !0, noWrap : !0, onCycleTo : function (t) {
                var i = a.index;
                a.index = e( t ).index(), a.$activeTabLink.removeClass( "active" ), a.$activeTabLink = a.$tabLinks.eq( a.index ), a.$activeTabLink.addClass( "active" ), a._animateIndicator( i ), "function" == typeof a.options.onShow && a.options.onShow.call( a, a.$content[0] )
              }
            } ), this._tabsCarousel.set( n )
          }
        }, {
          key : "_teardownSwipeableTabs", value : function () {
            var e = this._tabsCarousel.$el;
            this._tabsCarousel.destroy(), e.after( e.children() ), e.remove()
          }
        }, {
          key : "_setupNormalTabs", value : function () {
            this.$tabLinks.not( this.$activeTabLink ).each( (function (a) {
              if (a.hash) {
                var t = e( M.escapeHash( a.hash ) );
                t.length && (t[0].style.display = "none")
              }
            }) )
          }
        }, {
          key : "_teardownNormalTabs", value : function () {
            this.$tabLinks.each( (function (a) {
              if (a.hash) {
                var t = e( M.escapeHash( a.hash ) );
                t.length && (t[0].style.display = "")
              }
            }) )
          }
        }, {
          key : "_setTabsAndTabWidth", value : function () {
            this.tabsWidth = this.$el.width(), this.tabWidth = Math.max( this.tabsWidth, this.el.scrollWidth ) / this.$tabLinks.length
          }
        }, {
          key : "_calcRightPos", value : function (e) {
            return Math.ceil( this.tabsWidth - e.position().left - e[0].getBoundingClientRect().width )
          }
        }, {
          key : "_calcLeftPos", value : function (e) {
            return Math.floor( e.position().left )
          }
        }, {
          key : "updateTabIndicator", value : function () {
            this._setTabsAndTabWidth(), this._animateIndicator( this.index )
          }
        }, {
          key : "_animateIndicator", value : function (e) {
            var t = 0, i = 0;
            this.index - e >= 0 ? t = 90 : i = 90;
            var n = {
              targets  : this._indicator,
              left     : {value : this._calcLeftPos( this.$activeTabLink ), delay : t},
              right    : {value : this._calcRightPos( this.$activeTabLink ), delay : i},
              duration : this.options.duration,
              easing   : "easeOutQuad"
            };
            a.remove( this._indicator ), a( n )
          }
        }, {
          key : "select", value : function (e) {
            var a = this.$tabLinks.filter( '[href="#' + e + '"]' );
            a.length && a.trigger( "click" )
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( m.__proto__ || Object.getPrototypeOf( m ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Tabs
          }
        }, {
          key : "defaults", get : function () {
            return t
          }
        }] ), m
      }( m );
      window.M.Tabs = i, M.jQueryLoaded && M.initializeJqueryWrapper( i, "tabs", "M_Tabs" )
    }( cash, M.anime ), function (e, a) {
      "use strict";
      var t = {
        exitDelay          : 200,
        enterDelay         : 0,
        html               : null,
        margin             : 5,
        inDuration         : 250,
        outDuration        : 200,
        position           : "bottom",
        transitionMovement : 10
      }, i = function (i) {
        function m(a, t) {
          r( this, m );
          var i = o( this, (m.__proto__ || Object.getPrototypeOf( m )).call( this, m, a, t ) );
          return i.el.M_Tooltip = i, i.options = e.extend( {}, m.defaults, t ), i.isOpen = !1, i.isHovered = !1, i.isFocused = !1, i._appendTooltipEl(), i._setupEventHandlers(), i
        }

        return l( m, i ), s( m, [{
          key : "destroy", value : function () {
            e( this.tooltipEl ).remove(), this._removeEventHandlers(), this.el.M_Tooltip = void 0
          }
        }, {
          key : "_appendTooltipEl", value : function () {
            var e = document.createElement( "div" );
            e.classList.add( "material-tooltip" ), this.tooltipEl = e;
            var a = document.createElement( "div" );
            a.classList.add( "tooltip-content" ), a.innerHTML = this.options.html, e.appendChild( a ), document.body.appendChild( e )
          }
        }, {
          key : "_updateTooltipContent", value : function () {
            this.tooltipEl.querySelector( ".tooltip-content" ).innerHTML = this.options.html
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            this._handleMouseEnterBound = this._handleMouseEnter.bind( this ), this._handleMouseLeaveBound = this._handleMouseLeave.bind( this ), this._handleFocusBound = this._handleFocus.bind( this ), this._handleBlurBound = this._handleBlur.bind( this ), this.el.addEventListener( "mouseenter", this._handleMouseEnterBound ), this.el.addEventListener( "mouseleave", this._handleMouseLeaveBound ), this.el.addEventListener( "focus", this._handleFocusBound, !0 ), this.el.addEventListener( "blur", this._handleBlurBound, !0 )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            this.el.removeEventListener( "mouseenter", this._handleMouseEnterBound ), this.el.removeEventListener( "mouseleave", this._handleMouseLeaveBound ), this.el.removeEventListener( "focus", this._handleFocusBound, !0 ), this.el.removeEventListener( "blur", this._handleBlurBound, !0 )
          }
        }, {
          key : "open", value : function (a) {
            this.isOpen || (a = void 0 === a || void 0, this.isOpen = !0, this.options = e.extend( {}, this.options, this._getAttributeOptions() ), this._updateTooltipContent(), this._setEnterDelayTimeout( a ))
          }
        }, {
          key : "close", value : function () {
            this.isOpen && (this.isHovered = !1, this.isFocused = !1, this.isOpen = !1, this._setExitDelayTimeout())
          }
        }, {
          key : "_setExitDelayTimeout", value : function () {
            var e = this;
            clearTimeout( this._exitDelayTimeout ), this._exitDelayTimeout = setTimeout( (function () {
              e.isHovered || e.isFocused || e._animateOut()
            }), this.options.exitDelay )
          }
        }, {
          key : "_setEnterDelayTimeout", value : function (e) {
            var a = this;
            clearTimeout( this._enterDelayTimeout ), this._enterDelayTimeout = setTimeout( (function () {
              (a.isHovered || a.isFocused || e) && a._animateIn()
            }), this.options.enterDelay )
          }
        }, {
          key : "_positionTooltip", value : function () {
            var a, t = this.el, i = this.tooltipEl, n = t.offsetHeight, s = t.offsetWidth, o = i.offsetHeight,
              l = i.offsetWidth, r = this.options.margin, m = void 0, p = void 0;
            this.xMovement = 0, this.yMovement = 0, m = t.getBoundingClientRect().top + M.getDocumentScrollTop(), p = t.getBoundingClientRect().left + M.getDocumentScrollLeft(), "top" === this.options.position ? (m += -o - r, p += s / 2 - l / 2, this.yMovement = -this.options.transitionMovement) : "right" === this.options.position ? (m += n / 2 - o / 2, p += s + r, this.xMovement = this.options.transitionMovement) : "left" === this.options.position ? (m += n / 2 - o / 2, p += -l - r, this.xMovement = -this.options.transitionMovement) : (m += n + r, p += s / 2 - l / 2, this.yMovement = this.options.transitionMovement), a = this._repositionWithinScreen( p, m, l, o ), e( i ).css( {
              top  : a.y + "px",
              left : a.x + "px"
            } )
          }
        }, {
          key : "_repositionWithinScreen", value : function (e, a, t, i) {
            var n = M.getDocumentScrollLeft(), s = M.getDocumentScrollTop(), o = e - n, l = a - s,
              r = {left : o, top : l, width : t, height : i}, m = this.options.margin + this.options.transitionMovement,
              p = M.checkWithinContainer( document.body, r, m );
            return p.left ? o = m : p.right && (o -= o + t - window.innerWidth), p.top ? l = m : p.bottom && (l -= l + i - window.innerHeight), {
              x : o + n,
              y : l + s
            }
          }
        }, {
          key : "_animateIn", value : function () {
            this._positionTooltip(), this.tooltipEl.style.visibility = "visible", a.remove( this.tooltipEl ), a( {
              targets    : this.tooltipEl,
              opacity    : 1,
              translateX : this.xMovement,
              translateY : this.yMovement,
              duration   : this.options.inDuration,
              easing     : "easeOutCubic"
            } )
          }
        }, {
          key : "_animateOut", value : function () {
            a.remove( this.tooltipEl ), a( {
              targets    : this.tooltipEl,
              opacity    : 0,
              translateX : 0,
              translateY : 0,
              duration   : this.options.outDuration,
              easing     : "easeOutCubic"
            } )
          }
        }, {
          key : "_handleMouseEnter", value : function () {
            this.isHovered = !0, this.isFocused = !1, this.open( !1 )
          }
        }, {
          key : "_handleMouseLeave", value : function () {
            this.isHovered = !1, this.isFocused = !1, this.close()
          }
        }, {
          key : "_handleFocus", value : function () {
            M.tabPressed && (this.isFocused = !0, this.open( !1 ))
          }
        }, {
          key : "_handleBlur", value : function () {
            this.isFocused = !1, this.close()
          }
        }, {
          key : "_getAttributeOptions", value : function () {
            var e = {}, a = this.el.getAttribute( "data-tooltip" ), t = this.el.getAttribute( "data-position" );
            return a && (e.html = a), t && (e.position = t), e
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( m.__proto__ || Object.getPrototypeOf( m ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Tooltip
          }
        }, {
          key : "defaults", get : function () {
            return t
          }
        }] ), m
      }( m );
      M.Tooltip = i, M.jQueryLoaded && M.initializeJqueryWrapper( i, "tooltip", "M_Tooltip" )
    }( cash, M.anime ), function (e) {
      "use strict";
      var a = a || {}, t = document.querySelectorAll.bind( document );

      function i(e) {
        var a = "";
        for (var t in e) e.hasOwnProperty( t ) && (a += t + ":" + e[t] + ";");
        return a
      }

      var n = {
        duration     : 750, show : function (e, a) {
          if (2 === e.button) return !1;
          var t = a || this, s = document.createElement( "div" );
          s.className = "waves-ripple", t.appendChild( s );
          var o, l, r, m, p, d = (m = {
              top : 0,
              left : 0
            }, p = (o = t) && o.ownerDocument, l = p.documentElement, void 0 !== o.getBoundingClientRect && (m = o.getBoundingClientRect()), r = function (e) {
              return null !== (a = e) && a === a.window ? e : 9 === e.nodeType && e.defaultView;
              var a
            }( p ), {top : m.top + r.pageYOffset - l.clientTop, left : m.left + r.pageXOffset - l.clientLeft}),
            g = e.pageY - d.top, x = e.pageX - d.left, u = "scale(" + t.clientWidth / 100 * 10 + ")";
          "touches" in e && (g = e.touches[0].pageY - d.top, x = e.touches[0].pageX - d.left), s.setAttribute( "data-hold", Date.now() ), s.setAttribute( "data-scale", u ), s.setAttribute( "data-x", x ), s.setAttribute( "data-y", g );
          var f = {top : g + "px", left : x + "px"};
          s.className = s.className + " waves-notransition", s.setAttribute( "style", i( f ) ), s.className = s.className.replace( "waves-notransition", "" ), f["-webkit-transform"] = u, f["-moz-transform"] = u, f["-ms-transform"] = u, f["-o-transform"] = u, f.transform = u, f.opacity = "1", f["-webkit-transition-duration"] = n.duration + "ms", f["-moz-transition-duration"] = n.duration + "ms", f["-o-transition-duration"] = n.duration + "ms", f["transition-duration"] = n.duration + "ms", f["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", s.setAttribute( "style", i( f ) )
        }, hide      : function (e) {
          s.touchup( e );
          var a = this, t = (a.clientWidth, null), o = a.getElementsByClassName( "waves-ripple" );
          if (!(o.length > 0)) return !1;
          var l = (t = o[o.length - 1]).getAttribute( "data-x" ), r = t.getAttribute( "data-y" ),
            m = t.getAttribute( "data-scale" ), p = 350 - (Date.now() - Number( t.getAttribute( "data-hold" ) ));
          p < 0 && (p = 0), setTimeout( (function () {
            var e = {
              top                           : r + "px",
              left                          : l + "px",
              opacity                       : "0",
              "-webkit-transition-duration" : n.duration + "ms",
              "-moz-transition-duration"    : n.duration + "ms",
              "-o-transition-duration"      : n.duration + "ms",
              "transition-duration"         : n.duration + "ms",
              "-webkit-transform"           : m,
              "-moz-transform"              : m,
              "-ms-transform"               : m,
              "-o-transform"                : m,
              transform                     : m
            };
            t.setAttribute( "style", i( e ) ), setTimeout( (function () {
              try {
                a.removeChild( t )
              } catch (e) {
                return !1
              }
            }), n.duration )
          }), p )
        }, wrapInput : function (e) {
          for (var a = 0; a < e.length; a++) {
            var t = e[a];
            if ("input" === t.tagName.toLowerCase()) {
              var i = t.parentNode;
              if ("i" === i.tagName.toLowerCase() && -1 !== i.className.indexOf( "waves-effect" )) continue;
              var n = document.createElement( "i" );
              n.className = t.className + " waves-input-wrapper";
              var s = t.getAttribute( "style" );
              s || (s = ""), n.setAttribute( "style", s ), t.className = "waves-button-input", t.removeAttribute( "style" ), i.replaceChild( n, t ), n.appendChild( t )
            }
          }
        }
      }, s = {
        touches    : 0, allowEvent : function (e) {
          var a = !0;
          return "touchstart" === e.type ? s.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout( (function () {
            s.touches > 0 && (s.touches -= 1)
          }), 500 ) : "mousedown" === e.type && s.touches > 0 && (a = !1), a
        }, touchup : function (e) {
          s.allowEvent( e )
        }
      };

      function o(a) {
        var t = function (e) {
          if (!1 === s.allowEvent( e )) return null;
          for (var a = null, t = e.target || e.srcElement; null !== t.parentNode;) {
            if (!(t instanceof SVGElement) && -1 !== t.className.indexOf( "waves-effect" )) {
              a = t;
              break
            }
            t = t.parentNode
          }
          return a
        }( a );
        null !== t && (n.show( a, t ), "ontouchstart" in e && (t.addEventListener( "touchend", n.hide, !1 ), t.addEventListener( "touchcancel", n.hide, !1 )), t.addEventListener( "mouseup", n.hide, !1 ), t.addEventListener( "mouseleave", n.hide, !1 ), t.addEventListener( "dragend", n.hide, !1 ))
      }

      a.displayEffect = function (a) {
        "duration" in (a = a || {}) && (n.duration = a.duration), n.wrapInput( t( ".waves-effect" ) ), "ontouchstart" in e && document.body.addEventListener( "touchstart", o, !1 ), document.body.addEventListener( "mousedown", o, !1 )
      }, a.attach = function (a) {
        "input" === a.tagName.toLowerCase() && (n.wrapInput( [a] ), a = a.parentNode), "ontouchstart" in e && a.addEventListener( "touchstart", o, !1 ), a.addEventListener( "mousedown", o, !1 )
      }, e.Waves = a, document.addEventListener( "DOMContentLoaded", (function () {
        a.displayEffect()
      }), !1 )
    }( window ), function (e, a) {
      "use strict";
      var t = {
        html              : "",
        displayLength     : 4e3,
        inDuration        : 300,
        outDuration       : 375,
        classes           : "",
        completeCallback  : null,
        activationPercent : .8
      }, i = function () {
        function i(a) {
          r( this, i ), this.options = e.extend( {}, i.defaults, a ), this.message = this.options.html, this.panning = !1, this.timeRemaining = this.options.displayLength, 0 === i._toasts.length && i._createContainer(), i._toasts.push( this );
          var t = this._createToast();
          t.M_Toast = this, this.el = t, this.$el = e( t ), this._animateIn(), this._setTimer()
        }

        return s( i, [{
          key : "_createToast", value : function () {
            var a = document.createElement( "div" );
            return a.classList.add( "toast" ), this.options.classes.length && e( a ).addClass( this.options.classes ), ("object" == typeof HTMLElement ? this.message instanceof HTMLElement : this.message && "object" == typeof this.message && null !== this.message && 1 === this.message.nodeType && "string" == typeof this.message.nodeName) ? a.appendChild( this.message ) : this.message.jquery ? e( a ).append( this.message[0] ) : a.innerHTML = this.message, i._container.appendChild( a ), a
          }
        }, {
          key : "_animateIn", value : function () {
            a( {targets : this.el, top : 0, opacity : 1, duration : this.options.inDuration, easing : "easeOutCubic"} )
          }
        }, {
          key : "_setTimer", value : function () {
            var e = this;
            this.timeRemaining !== 1 / 0 && (this.counterInterval = setInterval( (function () {
              e.panning || (e.timeRemaining -= 20), e.timeRemaining <= 0 && e.dismiss()
            }), 20 ))
          }
        }, {
          key : "dismiss", value : function () {
            var e = this;
            window.clearInterval( this.counterInterval );
            var t = this.el.offsetWidth * this.options.activationPercent;
            this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s", this.el.style.transform = "translateX(" + t + "px)", this.el.style.opacity = 0), a( {
              targets   : this.el,
              opacity   : 0,
              marginTop : -40,
              duration  : this.options.outDuration,
              easing    : "easeOutExpo",
              complete  : function () {
                "function" == typeof e.options.completeCallback && e.options.completeCallback(), e.$el.remove(), i._toasts.splice( i._toasts.indexOf( e ), 1 ), 0 === i._toasts.length && i._removeContainer()
              }
            } )
          }
        }], [{
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Toast
          }
        }, {
          key : "_createContainer", value : function () {
            var e = document.createElement( "div" );
            e.setAttribute( "id", "toast-container" ), e.addEventListener( "touchstart", i._onDragStart ), e.addEventListener( "touchmove", i._onDragMove ), e.addEventListener( "touchend", i._onDragEnd ), e.addEventListener( "mousedown", i._onDragStart ), document.addEventListener( "mousemove", i._onDragMove ), document.addEventListener( "mouseup", i._onDragEnd ), document.body.appendChild( e ), i._container = e
          }
        }, {
          key : "_removeContainer", value : function () {
            document.removeEventListener( "mousemove", i._onDragMove ), document.removeEventListener( "mouseup", i._onDragEnd ), e( i._container ).remove(), i._container = null
          }
        }, {
          key : "_onDragStart", value : function (a) {
            if (a.target && e( a.target ).closest( ".toast" ).length) {
              var t = e( a.target ).closest( ".toast" )[0].M_Toast;
              t.panning = !0, i._draggedToast = t, t.el.classList.add( "panning" ), t.el.style.transition = "", t.startingXPos = i._xPos( a ), t.time = Date.now(), t.xPos = i._xPos( a )
            }
          }
        }, {
          key : "_onDragMove", value : function (e) {
            if (i._draggedToast) {
              e.preventDefault();
              var a = i._draggedToast;
              a.deltaX = Math.abs( a.xPos - i._xPos( e ) ), a.xPos = i._xPos( e ), a.velocityX = a.deltaX / (Date.now() - a.time), a.time = Date.now();
              var t = a.xPos - a.startingXPos, n = a.el.offsetWidth * a.options.activationPercent;
              a.el.style.transform = "translateX(" + t + "px)", a.el.style.opacity = 1 - Math.abs( t / n )
            }
          }
        }, {
          key : "_onDragEnd", value : function () {
            if (i._draggedToast) {
              var e = i._draggedToast;
              e.panning = !1, e.el.classList.remove( "panning" );
              var a = e.xPos - e.startingXPos, t = e.el.offsetWidth * e.options.activationPercent;
              Math.abs( a ) > t || e.velocityX > 1 ? (e.wasSwiped = !0, e.dismiss()) : (e.el.style.transition = "transform .2s, opacity .2s", e.el.style.transform = "", e.el.style.opacity = ""), i._draggedToast = null
            }
          }
        }, {
          key : "_xPos", value : function (e) {
            return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
          }
        }, {
          key : "dismissAll", value : function () {
            for (var e in i._toasts) i._toasts[e].dismiss()
          }
        }, {
          key : "defaults", get : function () {
            return t
          }
        }] ), i
      }();
      i._toasts = [], i._container = null, i._draggedToast = null, M.Toast = i, M.toast = function (e) {
        return new i( e )
      }
    }( cash, M.anime ), function (e, a) {
      "use strict";
      var t = {
        edge             : "left",
        draggable        : !0,
        inDuration       : 250,
        outDuration      : 200,
        onOpenStart      : null,
        onOpenEnd        : null,
        onCloseStart     : null,
        onCloseEnd       : null,
        preventScrolling : !0
      }, i = function (i) {
        function m(a, t) {
          r( this, m );
          var i = o( this, (m.__proto__ || Object.getPrototypeOf( m )).call( this, m, a, t ) );
          return i.el.M_Sidenav = i, i.id = i.$el.attr( "id" ), i.options = e.extend( {}, m.defaults, t ), i.isOpen = !1, i.isFixed = i.el.classList.contains( "sidenav-fixed" ), i.isDragged = !1, i.lastWindowWidth = window.innerWidth, i.lastWindowHeight = window.innerHeight, i._createOverlay(), i._createDragTarget(), i._setupEventHandlers(), i._setupClasses(), i._setupFixed(), m._sidenavs.push( i ), i
        }

        return l( m, i ), s( m, [{
          key : "destroy", value : function () {
            this._removeEventHandlers(), this._enableBodyScrolling(), this._overlay.parentNode.removeChild( this._overlay ), this.dragTarget.parentNode.removeChild( this.dragTarget ), this.el.M_Sidenav = void 0, this.el.style.transform = "";
            var e = m._sidenavs.indexOf( this );
            e >= 0 && m._sidenavs.splice( e, 1 )
          }
        }, {
          key : "_createOverlay", value : function () {
            var e = document.createElement( "div" );
            this._closeBound = this.close.bind( this ), e.classList.add( "sidenav-overlay" ), e.addEventListener( "click", this._closeBound ), document.body.appendChild( e ), this._overlay = e
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            0 === m._sidenavs.length && document.body.addEventListener( "click", this._handleTriggerClick ), this._handleDragTargetDragBound = this._handleDragTargetDrag.bind( this ), this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind( this ), this._handleCloseDragBound = this._handleCloseDrag.bind( this ), this._handleCloseReleaseBound = this._handleCloseRelease.bind( this ), this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind( this ), this.dragTarget.addEventListener( "touchmove", this._handleDragTargetDragBound ), this.dragTarget.addEventListener( "touchend", this._handleDragTargetReleaseBound ), this._overlay.addEventListener( "touchmove", this._handleCloseDragBound ), this._overlay.addEventListener( "touchend", this._handleCloseReleaseBound ), this.el.addEventListener( "touchmove", this._handleCloseDragBound ), this.el.addEventListener( "touchend", this._handleCloseReleaseBound ), this.el.addEventListener( "click", this._handleCloseTriggerClickBound ), this.isFixed && (this._handleWindowResizeBound = this._handleWindowResize.bind( this ), window.addEventListener( "resize", this._handleWindowResizeBound ))
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            1 === m._sidenavs.length && document.body.removeEventListener( "click", this._handleTriggerClick ), this.dragTarget.removeEventListener( "touchmove", this._handleDragTargetDragBound ), this.dragTarget.removeEventListener( "touchend", this._handleDragTargetReleaseBound ), this._overlay.removeEventListener( "touchmove", this._handleCloseDragBound ), this._overlay.removeEventListener( "touchend", this._handleCloseReleaseBound ), this.el.removeEventListener( "touchmove", this._handleCloseDragBound ), this.el.removeEventListener( "touchend", this._handleCloseReleaseBound ), this.el.removeEventListener( "click", this._handleCloseTriggerClickBound ), this.isFixed && window.removeEventListener( "resize", this._handleWindowResizeBound )
          }
        }, {
          key : "_handleTriggerClick", value : function (a) {
            var t = e( a.target ).closest( ".sidenav-trigger" );
            if (a.target && t.length) {
              var i = M.getIdFromTrigger( t[0] ), n = document.getElementById( i ).M_Sidenav;
              n && n.open( t ), a.preventDefault()
            }
          }
        }, {
          key : "_startDrag", value : function (e) {
            var t = e.targetTouches[0].clientX;
            this.isDragged = !0, this._startingXpos = t, this._xPos = this._startingXpos, this._time = Date.now(), this._width = this.el.getBoundingClientRect().width, this._overlay.style.display = "block", this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop(), this._verticallyScrolling = !1, a.remove( this.el ), a.remove( this._overlay )
          }
        }, {
          key : "_dragMoveUpdate", value : function (e) {
            var a = e.targetTouches[0].clientX, t = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
            this.deltaX = Math.abs( this._xPos - a ), this._xPos = a, this.velocityX = this.deltaX / (Date.now() - this._time), this._time = Date.now(), this._initialScrollTop !== t && (this._verticallyScrolling = !0)
          }
        }, {
          key : "_handleDragTargetDrag", value : function (e) {
            if (this.options.draggable && !this._isCurrentlyFixed() && !this._verticallyScrolling) {
              this.isDragged || this._startDrag( e ), this._dragMoveUpdate( e );
              var a = this._xPos - this._startingXpos, t = a > 0 ? "right" : "left";
              a = Math.min( this._width, Math.abs( a ) ), this.options.edge === t && (a = 0);
              var i = a, n = "translateX(-100%)";
              "right" === this.options.edge && (n = "translateX(100%)", i = -i), this.percentOpen = Math.min( 1, a / this._width ), this.el.style.transform = n + " translateX(" + i + "px)", this._overlay.style.opacity = this.percentOpen
            }
          }
        }, {
          key : "_handleDragTargetRelease", value : function () {
            this.isDragged && (this.percentOpen > .2 ? this.open() : this._animateOut(), this.isDragged = !1, this._verticallyScrolling = !1)
          }
        }, {
          key : "_handleCloseDrag", value : function (e) {
            if (this.isOpen) {
              if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) return;
              this.isDragged || this._startDrag( e ), this._dragMoveUpdate( e );
              var a = this._xPos - this._startingXpos, t = a > 0 ? "right" : "left";
              a = Math.min( this._width, Math.abs( a ) ), this.options.edge !== t && (a = 0);
              var i = -a;
              "right" === this.options.edge && (i = -i), this.percentOpen = Math.min( 1, 1 - a / this._width ), this.el.style.transform = "translateX(" + i + "px)", this._overlay.style.opacity = this.percentOpen
            }
          }
        }, {
          key : "_handleCloseRelease", value : function () {
            this.isOpen && this.isDragged && (this.percentOpen > .8 ? this._animateIn() : this.close(), this.isDragged = !1, this._verticallyScrolling = !1)
          }
        }, {
          key : "_handleCloseTriggerClick", value : function (a) {
            e( a.target ).closest( ".sidenav-close" ).length && !this._isCurrentlyFixed() && this.close()
          }
        }, {
          key : "_handleWindowResize", value : function () {
            this.lastWindowWidth !== window.innerWidth && (window.innerWidth > 992 ? this.open() : this.close()), this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight
          }
        }, {
          key : "_setupClasses", value : function () {
            "right" === this.options.edge && (this.el.classList.add( "right-aligned" ), this.dragTarget.classList.add( "right-aligned" ))
          }
        }, {
          key : "_removeClasses", value : function () {
            this.el.classList.remove( "right-aligned" ), this.dragTarget.classList.remove( "right-aligned" )
          }
        }, {
          key : "_setupFixed", value : function () {
            this._isCurrentlyFixed() && this.open()
          }
        }, {
          key : "_isCurrentlyFixed", value : function () {
            return this.isFixed && window.innerWidth > 992
          }
        }, {
          key : "_createDragTarget", value : function () {
            var e = document.createElement( "div" );
            e.classList.add( "drag-target" ), document.body.appendChild( e ), this.dragTarget = e
          }
        }, {
          key : "_preventBodyScrolling", value : function () {
            document.body.style.overflow = "hidden"
          }
        }, {
          key : "_enableBodyScrolling", value : function () {
            document.body.style.overflow = ""
          }
        }, {
          key : "open", value : function () {
            !0 !== this.isOpen && (this.isOpen = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call( this, this.el ), this._isCurrentlyFixed() ? (a.remove( this.el ), a( {
              targets    : this.el,
              translateX : 0,
              duration   : 0,
              easing     : "easeOutQuad"
            } ), this._enableBodyScrolling(), this._overlay.style.display = "none") : (this.options.preventScrolling && this._preventBodyScrolling(), this.isDragged && 1 == this.percentOpen || this._animateIn()))
          }
        }, {
          key : "close", value : function () {
            if (!1 !== this.isOpen) if (this.isOpen = !1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call( this, this.el ), this._isCurrentlyFixed()) {
              var e = "left" === this.options.edge ? "-105%" : "105%";
              this.el.style.transform = "translateX(" + e + ")"
            } else this._enableBodyScrolling(), this.isDragged && 0 == this.percentOpen ? this._overlay.style.display = "none" : this._animateOut()
          }
        }, {
          key : "_animateIn", value : function () {
            this._animateSidenavIn(), this._animateOverlayIn()
          }
        }, {
          key : "_animateSidenavIn", value : function () {
            var e = this, t = "left" === this.options.edge ? -1 : 1;
            this.isDragged && (t = "left" === this.options.edge ? t + this.percentOpen : t - this.percentOpen), a.remove( this.el ), a( {
              targets    : this.el,
              translateX : [100 * t + "%", 0],
              duration   : this.options.inDuration,
              easing     : "easeOutQuad",
              complete   : function () {
                "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call( e, e.el )
              }
            } )
          }
        }, {
          key : "_animateOverlayIn", value : function () {
            var t = 0;
            this.isDragged ? t = this.percentOpen : e( this._overlay ).css( {display : "block"} ), a.remove( this._overlay ), a( {
              targets  : this._overlay,
              opacity  : [t, 1],
              duration : this.options.inDuration,
              easing   : "easeOutQuad"
            } )
          }
        }, {
          key : "_animateOut", value : function () {
            this._animateSidenavOut(), this._animateOverlayOut()
          }
        }, {
          key : "_animateSidenavOut", value : function () {
            var e = this, t = "left" === this.options.edge ? -1 : 1, i = 0;
            this.isDragged && (i = "left" === this.options.edge ? t + this.percentOpen : t - this.percentOpen), a.remove( this.el ), a( {
              targets    : this.el,
              translateX : [100 * i + "%", 105 * t + "%"],
              duration   : this.options.outDuration,
              easing     : "easeOutQuad",
              complete   : function () {
                "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call( e, e.el )
              }
            } )
          }
        }, {
          key : "_animateOverlayOut", value : function () {
            var t = this;
            a.remove( this._overlay ), a( {
              targets  : this._overlay,
              opacity  : 0,
              duration : this.options.outDuration,
              easing   : "easeOutQuad",
              complete : function () {
                e( t._overlay ).css( "display", "none" )
              }
            } )
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( m.__proto__ || Object.getPrototypeOf( m ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Sidenav
          }
        }, {
          key : "defaults", get : function () {
            return t
          }
        }] ), m
      }( m );
      i._sidenavs = [], window.M.Sidenav = i, M.jQueryLoaded && M.initializeJqueryWrapper( i, "sidenav", "M_Sidenav" )
    }( cash, M.anime ), function (e, a) {
      "use strict";
      var t = {
        throttle : 100, scrollOffset : 200, activeClass : "active", getActiveElement : function (e) {
          return 'a[href="#' + e + '"]'
        }
      }, i = function (i) {
        function m(a, t) {
          r( this, m );
          var i = o( this, (m.__proto__ || Object.getPrototypeOf( m )).call( this, m, a, t ) );
          return i.el.M_ScrollSpy = i, i.options = e.extend( {}, m.defaults, t ), m._elements.push( i ), m._count++, m._increment++, i.tickId = -1, i.id = m._increment, i._setupEventHandlers(), i._handleWindowScroll(), i
        }

        return l( m, i ), s( m, [{
          key : "destroy", value : function () {
            m._elements.splice( m._elements.indexOf( this ), 1 ), m._elementsInView.splice( m._elementsInView.indexOf( this ), 1 ), m._visibleElements.splice( m._visibleElements.indexOf( this.$el ), 1 ), m._count--, this._removeEventHandlers(), e( this.options.getActiveElement( this.$el.attr( "id" ) ) ).removeClass( this.options.activeClass ), this.el.M_ScrollSpy = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            var e = M.throttle( this._handleWindowScroll, 200 );
            this._handleThrottledResizeBound = e.bind( this ), this._handleWindowScrollBound = this._handleWindowScroll.bind( this ), 1 === m._count && (window.addEventListener( "scroll", this._handleWindowScrollBound ), window.addEventListener( "resize", this._handleThrottledResizeBound ), document.body.addEventListener( "click", this._handleTriggerClick ))
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            0 === m._count && (window.removeEventListener( "scroll", this._handleWindowScrollBound ), window.removeEventListener( "resize", this._handleThrottledResizeBound ), document.body.removeEventListener( "click", this._handleTriggerClick ))
          }
        }, {
          key : "_handleTriggerClick", value : function (t) {
            for (var i = e( t.target ), n = m._elements.length - 1; n >= 0; n--) {
              var s = m._elements[n];
              if (i.is( 'a[href="#' + s.$el.attr( "id" ) + '"]' )) {
                t.preventDefault();
                var o = s.$el.offset().top + 1;
                a( {
                  targets   : [document.documentElement, document.body],
                  scrollTop : o - s.options.scrollOffset,
                  duration  : 400,
                  easing    : "easeOutCubic"
                } );
                break
              }
            }
          }
        }, {
          key : "_handleWindowScroll", value : function () {
            m._ticks++;
            for (var e = M.getDocumentScrollTop(), a = M.getDocumentScrollLeft(), t = a + window.innerWidth, i = e + window.innerHeight, n = m._findElements( e, t, i, a ), s = 0; s < n.length; s++) {
              var o = n[s];
              o.tickId < 0 && o._enter(), o.tickId = m._ticks
            }
            for (var l = 0; l < m._elementsInView.length; l++) {
              var r = m._elementsInView[l], p = r.tickId;
              p >= 0 && p !== m._ticks && (r._exit(), r.tickId = -1)
            }
            m._elementsInView = n
          }
        }, {
          key : "_enter", value : function () {
            m._visibleElements = m._visibleElements.filter( (function (e) {
              return 0 != e.height()
            }) ), m._visibleElements[0] ? (e( this.options.getActiveElement( m._visibleElements[0].attr( "id" ) ) ).removeClass( this.options.activeClass ), m._visibleElements[0][0].M_ScrollSpy && this.id < m._visibleElements[0][0].M_ScrollSpy.id ? m._visibleElements.unshift( this.$el ) : m._visibleElements.push( this.$el )) : m._visibleElements.push( this.$el ), e( this.options.getActiveElement( m._visibleElements[0].attr( "id" ) ) ).addClass( this.options.activeClass )
          }
        }, {
          key : "_exit", value : function () {
            var a = this;
            m._visibleElements = m._visibleElements.filter( (function (e) {
              return 0 != e.height()
            }) ), m._visibleElements[0] && (e( this.options.getActiveElement( m._visibleElements[0].attr( "id" ) ) ).removeClass( this.options.activeClass ), m._visibleElements = m._visibleElements.filter( (function (e) {
              return e.attr( "id" ) != a.$el.attr( "id" )
            }) ), m._visibleElements[0] && e( this.options.getActiveElement( m._visibleElements[0].attr( "id" ) ) ).addClass( this.options.activeClass ))
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( m.__proto__ || Object.getPrototypeOf( m ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_ScrollSpy
          }
        }, {
          key : "_findElements", value : function (e, a, t, i) {
            for (var n = [], s = 0; s < m._elements.length; s++) {
              var o = m._elements[s], l = e + o.options.scrollOffset || 200;
              if (o.$el.height() > 0) {
                var r = o.$el.offset().top, p = o.$el.offset().left, d = p + o.$el.width(), g = r + o.$el.height();
                !(p > a || d < i || r > t || g < l) && n.push( o )
              }
            }
            return n
          }
        }, {
          key : "defaults", get : function () {
            return t
          }
        }] ), m
      }( m );
      i._elements = [], i._elementsInView = [], i._visibleElements = [], i._count = 0, i._increment = 0, i._ticks = 0, M.ScrollSpy = i, M.jQueryLoaded && M.initializeJqueryWrapper( i, "scrollSpy", "M_ScrollSpy" )
    }( cash, M.anime ), function (e) {
      "use strict";
      var a = {
        data : {}, limit : 1 / 0, onAutocomplete : null, minLength : 1, sortFunction : function (e, a, t) {
          return e.indexOf( t ) - a.indexOf( t )
        }
      }, t = function (t) {
        function i(a, t) {
          r( this, i );
          var n = o( this, (i.__proto__ || Object.getPrototypeOf( i )).call( this, i, a, t ) );
          return n.el.M_Autocomplete = n, n.options = e.extend( {}, i.defaults, t ), n.isOpen = !1, n.count = 0, n.activeIndex = -1, n.oldVal, n.$inputField = n.$el.closest( ".input-field" ), n.$active = e(), n._mousedown = !1, n._setupDropdown(), n._setupEventHandlers(), n
        }

        return l( i, t ), s( i, [{
          key : "destroy", value : function () {
            this._removeEventHandlers(), this._removeDropdown(), this.el.M_Autocomplete = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            this._handleInputBlurBound = this._handleInputBlur.bind( this ), this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind( this ), this._handleInputKeydownBound = this._handleInputKeydown.bind( this ), this._handleInputClickBound = this._handleInputClick.bind( this ), this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind( this ), this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind( this ), this.el.addEventListener( "blur", this._handleInputBlurBound ), this.el.addEventListener( "keyup", this._handleInputKeyupAndFocusBound ), this.el.addEventListener( "focus", this._handleInputKeyupAndFocusBound ), this.el.addEventListener( "keydown", this._handleInputKeydownBound ), this.el.addEventListener( "click", this._handleInputClickBound ), this.container.addEventListener( "mousedown", this._handleContainerMousedownAndTouchstartBound ), this.container.addEventListener( "mouseup", this._handleContainerMouseupAndTouchendBound ), void 0 !== window.ontouchstart && (this.container.addEventListener( "touchstart", this._handleContainerMousedownAndTouchstartBound ), this.container.addEventListener( "touchend", this._handleContainerMouseupAndTouchendBound ))
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            this.el.removeEventListener( "blur", this._handleInputBlurBound ), this.el.removeEventListener( "keyup", this._handleInputKeyupAndFocusBound ), this.el.removeEventListener( "focus", this._handleInputKeyupAndFocusBound ), this.el.removeEventListener( "keydown", this._handleInputKeydownBound ), this.el.removeEventListener( "click", this._handleInputClickBound ), this.container.removeEventListener( "mousedown", this._handleContainerMousedownAndTouchstartBound ), this.container.removeEventListener( "mouseup", this._handleContainerMouseupAndTouchendBound ), void 0 !== window.ontouchstart && (this.container.removeEventListener( "touchstart", this._handleContainerMousedownAndTouchstartBound ), this.container.removeEventListener( "touchend", this._handleContainerMouseupAndTouchendBound ))
          }
        }, {
          key : "_setupDropdown", value : function () {
            var a = this;
            this.container = document.createElement( "ul" ), this.container.id = "autocomplete-options-" + M.guid(), e( this.container ).addClass( "autocomplete-content dropdown-content" ), this.$inputField.append( this.container ), this.el.setAttribute( "data-target", this.container.id ), this.dropdown = M.Dropdown.init( this.el, {
              autoFocus    : !1,
              closeOnClick : !1,
              coverTrigger : !1,
              onItemClick  : function (t) {
                a.selectOption( e( t ) )
              }
            } ), this.el.removeEventListener( "click", this.dropdown._handleClickBound )
          }
        }, {
          key : "_removeDropdown", value : function () {
            this.container.parentNode.removeChild( this.container )
          }
        }, {
          key : "_handleInputBlur", value : function () {
            this._mousedown || (this.close(), this._resetAutocomplete())
          }
        }, {
          key : "_handleInputKeyupAndFocus", value : function (e) {
            "keyup" === e.type && (i._keydown = !1), this.count = 0;
            var a = this.el.value.toLowerCase();
            13 !== e.keyCode && 38 !== e.keyCode && 40 !== e.keyCode && (this.oldVal === a || !M.tabPressed && "focus" === e.type || this.open(), this.oldVal = a)
          }
        }, {
          key : "_handleInputKeydown", value : function (a) {
            i._keydown = !0;
            var t = a.keyCode, n = void 0, s = e( this.container ).children( "li" ).length;
            t === M.keys.ENTER && this.activeIndex >= 0 ? (n = e( this.container ).children( "li" ).eq( this.activeIndex )).length && (this.selectOption( n ), a.preventDefault()) : t !== M.keys.ARROW_UP && t !== M.keys.ARROW_DOWN || (a.preventDefault(), t === M.keys.ARROW_UP && this.activeIndex > 0 && this.activeIndex--, t === M.keys.ARROW_DOWN && this.activeIndex < s - 1 && this.activeIndex++, this.$active.removeClass( "active" ), this.activeIndex >= 0 && (this.$active = e( this.container ).children( "li" ).eq( this.activeIndex ), this.$active.addClass( "active" )))
          }
        }, {
          key : "_handleInputClick", value : function (e) {
            this.open()
          }
        }, {
          key : "_handleContainerMousedownAndTouchstart", value : function (e) {
            this._mousedown = !0
          }
        }, {
          key : "_handleContainerMouseupAndTouchend", value : function (e) {
            this._mousedown = !1
          }
        }, {
          key : "_highlight", value : function (e, a) {
            var t = a.find( "img" ), i = a.text().toLowerCase().indexOf( "" + e.toLowerCase() ), n = i + e.length - 1,
              s = a.text().slice( 0, i ), o = a.text().slice( i, n + 1 ), l = a.text().slice( n + 1 );
            a.html( "<span>" + s + "<span class='highlight'>" + o + "</span>" + l + "</span>" ), t.length && a.prepend( t )
          }
        }, {
          key : "_resetCurrentElement", value : function () {
            this.activeIndex = -1, this.$active.removeClass( "active" )
          }
        }, {
          key : "_resetAutocomplete", value : function () {
            e( this.container ).empty(), this._resetCurrentElement(), this.oldVal = null, this.isOpen = !1, this._mousedown = !1
          }
        }, {
          key : "selectOption", value : function (e) {
            var a = e.text().trim();
            this.el.value = a, this.$el.trigger( "change" ), this._resetAutocomplete(), this.close(), "function" == typeof this.options.onAutocomplete && this.options.onAutocomplete.call( this, a )
          }
        }, {
          key : "_renderDropdown", value : function (a, t) {
            var i = this;
            this._resetAutocomplete();
            var n = [];
            for (var s in a) if (a.hasOwnProperty( s ) && -1 !== s.toLowerCase().indexOf( t )) {
              if (this.count >= this.options.limit) break;
              var o = {data : a[s], key : s};
              n.push( o ), this.count++
            }
            if (this.options.sortFunction) {
              n.sort( (function (e, a) {
                return i.options.sortFunction( e.key.toLowerCase(), a.key.toLowerCase(), t.toLowerCase() )
              }) )
            }
            for (var l = 0; l < n.length; l++) {
              var r = n[l], m = e( "<li></li>" );
              r.data ? m.append( '<img src="' + r.data + '" class="right circle"><span>' + r.key + "</span>" ) : m.append( "<span>" + r.key + "</span>" ), e( this.container ).append( m ), this._highlight( t, m )
            }
          }
        }, {
          key : "open", value : function () {
            var e = this.el.value.toLowerCase();
            this._resetAutocomplete(), e.length >= this.options.minLength && (this.isOpen = !0, this._renderDropdown( this.options.data, e )), this.dropdown.isOpen ? this.dropdown.recalculateDimensions() : this.dropdown.open()
          }
        }, {
          key : "close", value : function () {
            this.dropdown.close()
          }
        }, {
          key : "updateData", value : function (e) {
            var a = this.el.value.toLowerCase();
            this.options.data = e, this.isOpen && this._renderDropdown( e, a )
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( i.__proto__ || Object.getPrototypeOf( i ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Autocomplete
          }
        }, {
          key : "defaults", get : function () {
            return a
          }
        }] ), i
      }( m );
      t._keydown = !1, M.Autocomplete = t, M.jQueryLoaded && M.initializeJqueryWrapper( t, "autocomplete", "M_Autocomplete" )
    }( cash ), function (e) {
      M.updateTextFields = function () {
        e( "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea" ).each( (function (a, t) {
          var i = e( this );
          a.value.length > 0 || e( a ).is( ":focus" ) || a.autofocus || null !== i.attr( "placeholder" ) ? i.siblings( "label" ).addClass( "active" ) : a.validity ? i.siblings( "label" ).toggleClass( "active", !0 === a.validity.badInput ) : i.siblings( "label" ).removeClass( "active" )
        }) )
      }, M.validate_field = function (e) {
        var a = null !== e.attr( "data-length" ), t = parseInt( e.attr( "data-length" ) ), i = e[0].value.length;
        0 !== i || !1 !== e[0].validity.badInput || e.is( ":required" ) ? e.hasClass( "validate" ) && (e.is( ":valid" ) && a && i <= t || e.is( ":valid" ) && !a ? (e.removeClass( "invalid" ), e.addClass( "valid" )) : (e.removeClass( "valid" ), e.addClass( "invalid" ))) : e.hasClass( "validate" ) && (e.removeClass( "valid" ), e.removeClass( "invalid" ))
      }, M.textareaAutoResize = function (a) {
        if (a instanceof Element && (a = e( a )), a.length) {
          var t = e( ".hiddendiv" ).first();
          t.length || (t = e( '<div class="hiddendiv common"></div>' ), e( "body" ).append( t ));
          var i = a.css( "font-family" ), n = a.css( "font-size" ), s = a.css( "line-height" ),
            o = a.css( "padding-top" ), l = a.css( "padding-right" ), r = a.css( "padding-bottom" ),
            m = a.css( "padding-left" );
          n && t.css( "font-size", n ), i && t.css( "font-family", i ), s && t.css( "line-height", s ), o && t.css( "padding-top", o ), l && t.css( "padding-right", l ), r && t.css( "padding-bottom", r ), m && t.css( "padding-left", m ), a.data( "original-height" ) || a.data( "original-height", a.height() ), "off" === a.attr( "wrap" ) && t.css( "overflow-wrap", "normal" ).css( "white-space", "pre" ), t.text( a[0].value + "\n" );
          var p = t.html().replace( /\n/g, "<br>" );
          t.html( p ), a[0].offsetWidth > 0 && a[0].offsetHeight > 0 ? t.css( "width", a.width() + "px" ) : t.css( "width", window.innerWidth / 2 + "px" ), a.data( "original-height" ) <= t.innerHeight() ? a.css( "height", t.innerHeight() + "px" ) : a[0].value.length < a.data( "previous-length" ) && a.css( "height", a.data( "original-height" ) + "px" ), a.data( "previous-length", a[0].value.length )
        } else console.error( "No textarea element found" )
      }, e( document ).ready( (function () {
        var a = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
        e( document ).on( "change", a, (function () {
          0 === this.value.length && null === e( this ).attr( "placeholder" ) || e( this ).siblings( "label" ).addClass( "active" ), M.validate_field( e( this ) )
        }) ), e( document ).ready( (function () {
          M.updateTextFields()
        }) ), e( document ).on( "reset", (function (t) {
          var i = e( t.target );
          i.is( "form" ) && (i.find( a ).removeClass( "valid" ).removeClass( "invalid" ), i.find( a ).each( (function (a) {
            this.value.length && e( this ).siblings( "label" ).removeClass( "active" )
          }) ), setTimeout( (function () {
            i.find( "select" ).each( (function () {
              this.M_FormSelect && e( this ).trigger( "change" )
            }) )
          }), 0 ))
        }) ), document.addEventListener( "focus", (function (t) {
          e( t.target ).is( a ) && e( t.target ).siblings( "label, .prefix" ).addClass( "active" )
        }), !0 ), document.addEventListener( "blur", (function (t) {
          var i = e( t.target );
          if (i.is( a )) {
            var n = ".prefix";
            0 === i[0].value.length && !0 !== i[0].validity.badInput && null === i.attr( "placeholder" ) && (n += ", label"), i.siblings( n ).removeClass( "active" ), M.validate_field( i )
          }
        }), !0 );
        e( document ).on( "keyup", "input[type=radio], input[type=checkbox]", (function (a) {
          if (a.which === M.keys.TAB) return e( this ).addClass( "tabbed" ), void e( this ).one( "blur", (function (a) {
            e( this ).removeClass( "tabbed" )
          }) )
        }) );
        e( ".materialize-textarea" ).each( (function () {
          var a = e( this );
          a.data( "original-height", a.height() ), a.data( "previous-length", this.value.length ), M.textareaAutoResize( a )
        }) ), e( document ).on( "keyup", ".materialize-textarea", (function () {
          M.textareaAutoResize( e( this ) )
        }) ), e( document ).on( "keydown", ".materialize-textarea", (function () {
          M.textareaAutoResize( e( this ) )
        }) ), e( document ).on( "change", '.file-field input[type="file"]', (function () {
          for (var a = e( this ).closest( ".file-field" ).find( "input.file-path" ), t = e( this )[0].files, i = [], n = 0; n < t.length; n++) i.push( t[n].name );
          a[0].value = i.join( ", " ), a.trigger( "change" )
        }) )
      }) )
    }( cash ), function (e, a) {
      "use strict";
      var t = {indicators : !0, height : 400, duration : 500, interval : 6e3}, i = function (i) {
        function m(t, i) {
          r( this, m );
          var n = o( this, (m.__proto__ || Object.getPrototypeOf( m )).call( this, m, t, i ) );
          return n.el.M_Slider = n, n.options = e.extend( {}, m.defaults, i ), n.$slider = n.$el.find( ".slides" ), n.$slides = n.$slider.children( "li" ), n.activeIndex = n.$slides.filter( (function (a) {
            return e( a ).hasClass( "active" )
          }) ).first().index(), -1 != n.activeIndex && (n.$active = n.$slides.eq( n.activeIndex )), n._setSliderHeight(), n.$slides.find( ".caption" ).each( (function (e) {
            n._animateCaptionIn( e, 0 )
          }) ), n.$slides.find( "img" ).each( (function (a) {
            var t = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            e( a ).attr( "src" ) !== t && (e( a ).css( "background-image", 'url("' + e( a ).attr( "src" ) + '")' ), e( a ).attr( "src", t ))
          }) ), n._setupIndicators(), n.$active ? n.$active.css( "display", "block" ) : (n.$slides.first().addClass( "active" ), a( {
            targets  : n.$slides.first()[0],
            opacity  : 1,
            duration : n.options.duration,
            easing   : "easeOutQuad"
          } ), n.activeIndex = 0, n.$active = n.$slides.eq( n.activeIndex ), n.options.indicators && n.$indicators.eq( n.activeIndex ).addClass( "active" )), n.$active.find( "img" ).each( (function (e) {
            a( {
              targets    : n.$active.find( ".caption" )[0],
              opacity    : 1,
              translateX : 0,
              translateY : 0,
              duration   : n.options.duration,
              easing     : "easeOutQuad"
            } )
          }) ), n._setupEventHandlers(), n.start(), n
        }

        return l( m, i ), s( m, [{
          key : "destroy", value : function () {
            this.pause(), this._removeIndicators(), this._removeEventHandlers(), this.el.M_Slider = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            var e = this;
            this._handleIntervalBound = this._handleInterval.bind( this ), this._handleIndicatorClickBound = this._handleIndicatorClick.bind( this ), this.options.indicators && this.$indicators.each( (function (a) {
              a.addEventListener( "click", e._handleIndicatorClickBound )
            }) )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            var e = this;
            this.options.indicators && this.$indicators.each( (function (a) {
              a.removeEventListener( "click", e._handleIndicatorClickBound )
            }) )
          }
        }, {
          key : "_handleIndicatorClick", value : function (a) {
            var t = e( a.target ).index();
            this.set( t )
          }
        }, {
          key : "_handleInterval", value : function () {
            var e = this.$slider.find( ".active" ).index();
            this.$slides.length === e + 1 ? e = 0 : e += 1, this.set( e )
          }
        }, {
          key : "_animateCaptionIn", value : function (t, i) {
            var n = {targets : t, opacity : 0, duration : i, easing : "easeOutQuad"};
            e( t ).hasClass( "center-align" ) ? n.translateY = -100 : e( t ).hasClass( "right-align" ) ? n.translateX = 100 : e( t ).hasClass( "left-align" ) && (n.translateX = -100), a( n )
          }
        }, {
          key : "_setSliderHeight", value : function () {
            this.$el.hasClass( "fullscreen" ) || (this.options.indicators ? this.$el.css( "height", this.options.height + 40 + "px" ) : this.$el.css( "height", this.options.height + "px" ), this.$slider.css( "height", this.options.height + "px" ))
          }
        }, {
          key : "_setupIndicators", value : function () {
            var a = this;
            this.options.indicators && (this.$indicators = e( '<ul class="indicators"></ul>' ), this.$slides.each( (function (t, i) {
              var n = e( '<li class="indicator-item"></li>' );
              a.$indicators.append( n[0] )
            }) ), this.$el.append( this.$indicators[0] ), this.$indicators = this.$indicators.children( "li.indicator-item" ))
          }
        }, {
          key : "_removeIndicators", value : function () {
            this.$el.find( "ul.indicators" ).remove()
          }
        }, {
          key : "set", value : function (e) {
            var t = this;
            if (e >= this.$slides.length ? e = 0 : e < 0 && (e = this.$slides.length - 1), this.activeIndex != e) {
              this.$active = this.$slides.eq( this.activeIndex );
              var i = this.$active.find( ".caption" );
              this.$active.removeClass( "active" ), a( {
                targets  : this.$active[0],
                opacity  : 0,
                duration : this.options.duration,
                easing   : "easeOutQuad",
                complete : function () {
                  t.$slides.not( ".active" ).each( (function (e) {
                    a( {
                      targets    : e,
                      opacity    : 0,
                      translateX : 0,
                      translateY : 0,
                      duration   : 0,
                      easing     : "easeOutQuad"
                    } )
                  }) )
                }
              } ), this._animateCaptionIn( i[0], this.options.duration ), this.options.indicators && (this.$indicators.eq( this.activeIndex ).removeClass( "active" ), this.$indicators.eq( e ).addClass( "active" )), a( {
                targets  : this.$slides.eq( e )[0],
                opacity  : 1,
                duration : this.options.duration,
                easing   : "easeOutQuad"
              } ), a( {
                targets    : this.$slides.eq( e ).find( ".caption" )[0],
                opacity    : 1,
                translateX : 0,
                translateY : 0,
                duration   : this.options.duration,
                delay      : this.options.duration,
                easing     : "easeOutQuad"
              } ), this.$slides.eq( e ).addClass( "active" ), this.activeIndex = e, this.start()
            }
          }
        }, {
          key : "pause", value : function () {
            clearInterval( this.interval )
          }
        }, {
          key : "start", value : function () {
            clearInterval( this.interval ), this.interval = setInterval( this._handleIntervalBound, this.options.duration + this.options.interval )
          }
        }, {
          key : "next", value : function () {
            var e = this.activeIndex + 1;
            e >= this.$slides.length ? e = 0 : e < 0 && (e = this.$slides.length - 1), this.set( e )
          }
        }, {
          key : "prev", value : function () {
            var e = this.activeIndex - 1;
            e >= this.$slides.length ? e = 0 : e < 0 && (e = this.$slides.length - 1), this.set( e )
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( m.__proto__ || Object.getPrototypeOf( m ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Slider
          }
        }, {
          key : "defaults", get : function () {
            return t
          }
        }] ), m
      }( m );
      M.Slider = i, M.jQueryLoaded && M.initializeJqueryWrapper( i, "slider", "M_Slider" )
    }( cash, M.anime ), function (e, a) {
      e( document ).on( "click", ".card", (function (t) {
        if (e( this ).children( ".card-reveal" ).length) {
          var i = e( t.target ).closest( ".card" );
          void 0 === i.data( "initialOverflow" ) && i.data( "initialOverflow", void 0 === i.css( "overflow" ) ? "" : i.css( "overflow" ) );
          var n = e( this ).find( ".card-reveal" );
          e( t.target ).is( e( ".card-reveal .card-title" ) ) || e( t.target ).is( e( ".card-reveal .card-title i" ) ) ? a( {
            targets    : n[0],
            translateY : 0,
            duration   : 225,
            easing     : "easeInOutQuad",
            complete   : function (a) {
              var t = a.animatables[0].target;
              e( t ).css( {display : "none"} ), i.css( "overflow", i.data( "initialOverflow" ) )
            }
          } ) : (e( t.target ).is( e( ".card .activator" ) ) || e( t.target ).is( e( ".card .activator i" ) )) && (i.css( "overflow", "hidden" ), n.css( {display : "block"} ), a( {
            targets    : n[0],
            translateY : "-100%",
            duration   : 300,
            easing     : "easeInOutQuad"
          } ))
        }
      }) )
    }( cash, M.anime ), function (e) {
      "use strict";
      var a = {
        data                 : [],
        placeholder          : "",
        secondaryPlaceholder : "",
        autocompleteOptions  : {},
        limit                : 1 / 0,
        onChipAdd            : null,
        onChipSelect         : null,
        onChipDelete         : null
      }, t = function (t) {
        function i(a, t) {
          r( this, i );
          var n = o( this, (i.__proto__ || Object.getPrototypeOf( i )).call( this, i, a, t ) );
          return n.el.M_Chips = n, n.options = e.extend( {}, i.defaults, t ), n.$el.addClass( "chips input-field" ), n.chipsData = [], n.$chips = e(), n._setupInput(), n.hasAutocomplete = Object.keys( n.options.autocompleteOptions ).length > 0, n.$input.attr( "id" ) || n.$input.attr( "id", M.guid() ), n.options.data.length && (n.chipsData = n.options.data, n._renderChips( n.chipsData )), n.hasAutocomplete && n._setupAutocomplete(), n._setPlaceholder(), n._setupLabel(), n._setupEventHandlers(), n
        }

        return l( i, t ), s( i, [{
          key : "getData", value : function () {
            return this.chipsData
          }
        }, {
          key : "destroy", value : function () {
            this._removeEventHandlers(), this.$chips.remove(), this.el.M_Chips = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            this._handleChipClickBound = this._handleChipClick.bind( this ), this._handleInputKeydownBound = this._handleInputKeydown.bind( this ), this._handleInputFocusBound = this._handleInputFocus.bind( this ), this._handleInputBlurBound = this._handleInputBlur.bind( this ), this.el.addEventListener( "click", this._handleChipClickBound ), document.addEventListener( "keydown", i._handleChipsKeydown ), document.addEventListener( "keyup", i._handleChipsKeyup ), this.el.addEventListener( "blur", i._handleChipsBlur, !0 ), this.$input[0].addEventListener( "focus", this._handleInputFocusBound ), this.$input[0].addEventListener( "blur", this._handleInputBlurBound ), this.$input[0].addEventListener( "keydown", this._handleInputKeydownBound )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            this.el.removeEventListener( "click", this._handleChipClickBound ), document.removeEventListener( "keydown", i._handleChipsKeydown ), document.removeEventListener( "keyup", i._handleChipsKeyup ), this.el.removeEventListener( "blur", i._handleChipsBlur, !0 ), this.$input[0].removeEventListener( "focus", this._handleInputFocusBound ), this.$input[0].removeEventListener( "blur", this._handleInputBlurBound ), this.$input[0].removeEventListener( "keydown", this._handleInputKeydownBound )
          }
        }, {
          key : "_handleChipClick", value : function (a) {
            var t = e( a.target ).closest( ".chip" ), i = e( a.target ).is( ".close" );
            if (t.length) {
              var n = t.index();
              i ? (this.deleteChip( n ), this.$input[0].focus()) : this.selectChip( n )
            } else this.$input[0].focus()
          }
        }, {
          key : "_handleInputFocus", value : function () {
            this.$el.addClass( "focus" )
          }
        }, {
          key : "_handleInputBlur", value : function () {
            this.$el.removeClass( "focus" )
          }
        }, {
          key : "_handleInputKeydown", value : function (e) {
            if (i._keydown = !0, 13 === e.keyCode) {
              if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen) return;
              e.preventDefault(), this.addChip( {tag : this.$input[0].value} ), this.$input[0].value = ""
            } else 8 !== e.keyCode && 37 !== e.keyCode || "" !== this.$input[0].value || !this.chipsData.length || (e.preventDefault(), this.selectChip( this.chipsData.length - 1 ))
          }
        }, {
          key : "_renderChip", value : function (a) {
            if (a.tag) {
              var t = document.createElement( "div" ), i = document.createElement( "i" );
              if (t.classList.add( "chip" ), t.textContent = a.tag, t.setAttribute( "tabindex", 0 ), e( i ).addClass( "material-icons close" ), i.textContent = "close", a.image) {
                var n = document.createElement( "img" );
                n.setAttribute( "src", a.image ), t.insertBefore( n, t.firstChild )
              }
              return t.appendChild( i ), t
            }
          }
        }, {
          key : "_renderChips", value : function () {
            this.$chips.remove();
            for (var e = 0; e < this.chipsData.length; e++) {
              var a = this._renderChip( this.chipsData[e] );
              this.$el.append( a ), this.$chips.add( a )
            }
            this.$el.append( this.$input[0] )
          }
        }, {
          key : "_setupAutocomplete", value : function () {
            var e = this;
            this.options.autocompleteOptions.onAutocomplete = function (a) {
              e.addChip( {tag : a} ), e.$input[0].value = "", e.$input[0].focus()
            }, this.autocomplete = M.Autocomplete.init( this.$input[0], this.options.autocompleteOptions )
          }
        }, {
          key : "_setupInput", value : function () {
            this.$input = this.$el.find( "input" ), this.$input.length || (this.$input = e( "<input></input>" ), this.$el.append( this.$input )), this.$input.addClass( "input" )
          }
        }, {
          key : "_setupLabel", value : function () {
            this.$label = this.$el.find( "label" ), this.$label.length && this.$label.setAttribute( "for", this.$input.attr( "id" ) )
          }
        }, {
          key : "_setPlaceholder", value : function () {
            void 0 !== this.chipsData && !this.chipsData.length && this.options.placeholder ? e( this.$input ).prop( "placeholder", this.options.placeholder ) : (void 0 === this.chipsData || this.chipsData.length) && this.options.secondaryPlaceholder && e( this.$input ).prop( "placeholder", this.options.secondaryPlaceholder )
          }
        }, {
          key : "_isValid", value : function (e) {
            if (e.hasOwnProperty( "tag" ) && "" !== e.tag) {
              for (var a = !1, t = 0; t < this.chipsData.length; t++) if (this.chipsData[t].tag === e.tag) {
                a = !0;
                break
              }
              return !a
            }
            return !1
          }
        }, {
          key : "addChip", value : function (a) {
            if (this._isValid( a ) && !(this.chipsData.length >= this.options.limit)) {
              var t = this._renderChip( a );
              this.$chips.add( t ), this.chipsData.push( a ), e( this.$input ).before( t ), this._setPlaceholder(), "function" == typeof this.options.onChipAdd && this.options.onChipAdd.call( this, this.$el, t )
            }
          }
        }, {
          key : "deleteChip", value : function (a) {
            var t = this.$chips.eq( a );
            this.$chips.eq( a ).remove(), this.$chips = this.$chips.filter( (function (a) {
              return e( a ).index() >= 0
            }) ), this.chipsData.splice( a, 1 ), this._setPlaceholder(), "function" == typeof this.options.onChipDelete && this.options.onChipDelete.call( this, this.$el, t[0] )
          }
        }, {
          key : "selectChip", value : function (e) {
            var a = this.$chips.eq( e );
            this._selectedChip = a, a[0].focus(), "function" == typeof this.options.onChipSelect && this.options.onChipSelect.call( this, this.$el, a[0] )
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( i.__proto__ || Object.getPrototypeOf( i ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Chips
          }
        }, {
          key : "_handleChipsKeydown", value : function (a) {
            i._keydown = !0;
            var t = e( a.target ).closest( ".chips" ), n = a.target && t.length;
            if (!e( a.target ).is( "input, textarea" ) && n) {
              var s = t[0].M_Chips;
              if (8 === a.keyCode || 46 === a.keyCode) {
                a.preventDefault();
                var o = s.chipsData.length;
                if (s._selectedChip) {
                  var l = s._selectedChip.index();
                  s.deleteChip( l ), s._selectedChip = null, o = Math.max( l - 1, 0 )
                }
                s.chipsData.length && s.selectChip( o )
              } else if (37 === a.keyCode) {
                if (s._selectedChip) {
                  var r = s._selectedChip.index() - 1;
                  if (r < 0) return;
                  s.selectChip( r )
                }
              } else if (39 === a.keyCode && s._selectedChip) {
                var m = s._selectedChip.index() + 1;
                m >= s.chipsData.length ? s.$input[0].focus() : s.selectChip( m )
              }
            }
          }
        }, {
          key : "_handleChipsKeyup", value : function (e) {
            i._keydown = !1
          }
        }, {
          key : "_handleChipsBlur", value : function (a) {
            i._keydown || (e( a.target ).closest( ".chips" )[0].M_Chips._selectedChip = null)
          }
        }, {
          key : "defaults", get : function () {
            return a
          }
        }] ), i
      }( m );
      t._keydown = !1, M.Chips = t, M.jQueryLoaded && M.initializeJqueryWrapper( t, "chips", "M_Chips" ), e( document ).ready( (function () {
        e( document.body ).on( "click", ".chip .close", (function () {
          var a = e( this ).closest( ".chips" );
          a.length && a[0].M_Chips || e( this ).closest( ".chip" ).remove()
        }) )
      }) )
    }( cash ), function (e) {
      "use strict";
      var a = {top : 0, bottom : 1 / 0, offset : 0, onPositionChange : null}, t = function (t) {
        function i(a, t) {
          r( this, i );
          var n = o( this, (i.__proto__ || Object.getPrototypeOf( i )).call( this, i, a, t ) );
          return n.el.M_Pushpin = n, n.options = e.extend( {}, i.defaults, t ), n.originalOffset = n.el.offsetTop, i._pushpins.push( n ), n._setupEventHandlers(), n._updatePosition(), n
        }

        return l( i, t ), s( i, [{
          key : "destroy", value : function () {
            this.el.style.top = null, this._removePinClasses(), this._removeEventHandlers();
            var e = i._pushpins.indexOf( this );
            i._pushpins.splice( e, 1 )
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            document.addEventListener( "scroll", i._updateElements )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            document.removeEventListener( "scroll", i._updateElements )
          }
        }, {
          key : "_updatePosition", value : function () {
            var e = M.getDocumentScrollTop() + this.options.offset;
            this.options.top <= e && this.options.bottom >= e && !this.el.classList.contains( "pinned" ) && (this._removePinClasses(), this.el.style.top = this.options.offset + "px", this.el.classList.add( "pinned" ), "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call( this, "pinned" )), e < this.options.top && !this.el.classList.contains( "pin-top" ) && (this._removePinClasses(), this.el.style.top = 0, this.el.classList.add( "pin-top" ), "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call( this, "pin-top" )), e > this.options.bottom && !this.el.classList.contains( "pin-bottom" ) && (this._removePinClasses(), this.el.classList.add( "pin-bottom" ), this.el.style.top = this.options.bottom - this.originalOffset + "px", "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call( this, "pin-bottom" ))
          }
        }, {
          key : "_removePinClasses", value : function () {
            this.el.classList.remove( "pin-top" ), this.el.classList.remove( "pinned" ), this.el.classList.remove( "pin-bottom" )
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( i.__proto__ || Object.getPrototypeOf( i ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Pushpin
          }
        }, {
          key : "_updateElements", value : function () {
            for (var e in i._pushpins) {
              i._pushpins[e]._updatePosition()
            }
          }
        }, {
          key : "defaults", get : function () {
            return a
          }
        }] ), i
      }( m );
      t._pushpins = [], M.Pushpin = t, M.jQueryLoaded && M.initializeJqueryWrapper( t, "pushpin", "M_Pushpin" )
    }( cash ), function (e, a) {
      "use strict";
      var t = {direction : "top", hoverEnabled : !0, toolbarEnabled : !1};
      e.fn.reverse = [].reverse;
      var i = function (i) {
        function m(a, t) {
          r( this, m );
          var i = o( this, (m.__proto__ || Object.getPrototypeOf( m )).call( this, m, a, t ) );
          return i.el.M_FloatingActionButton = i, i.options = e.extend( {}, m.defaults, t ), i.isOpen = !1, i.$anchor = i.$el.children( "a" ).first(), i.$menu = i.$el.children( "ul" ).first(), i.$floatingBtns = i.$el.find( "ul .btn-floating" ), i.$floatingBtnsReverse = i.$el.find( "ul .btn-floating" ).reverse(), i.offsetY = 0, i.offsetX = 0, i.$el.addClass( "direction-" + i.options.direction ), "top" === i.options.direction ? i.offsetY = 40 : "right" === i.options.direction ? i.offsetX = -40 : "bottom" === i.options.direction ? i.offsetY = -40 : i.offsetX = 40, i._setupEventHandlers(), i
        }

        return l( m, i ), s( m, [{
          key : "destroy", value : function () {
            this._removeEventHandlers(), this.el.M_FloatingActionButton = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            this._handleFABClickBound = this._handleFABClick.bind( this ), this._handleOpenBound = this.open.bind( this ), this._handleCloseBound = this.close.bind( this ), this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.addEventListener( "mouseenter", this._handleOpenBound ), this.el.addEventListener( "mouseleave", this._handleCloseBound )) : this.el.addEventListener( "click", this._handleFABClickBound )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.removeEventListener( "mouseenter", this._handleOpenBound ), this.el.removeEventListener( "mouseleave", this._handleCloseBound )) : this.el.removeEventListener( "click", this._handleFABClickBound )
          }
        }, {
          key : "_handleFABClick", value : function () {
            this.isOpen ? this.close() : this.open()
          }
        }, {
          key : "_handleDocumentClick", value : function (a) {
            e( a.target ).closest( this.$menu ).length || this.close()
          }
        }, {
          key : "open", value : function () {
            this.isOpen || (this.options.toolbarEnabled ? this._animateInToolbar() : this._animateInFAB(), this.isOpen = !0)
          }
        }, {
          key : "close", value : function () {
            this.isOpen && (this.options.toolbarEnabled ? (window.removeEventListener( "scroll", this._handleCloseBound, !0 ), document.body.removeEventListener( "click", this._handleDocumentClickBound, !0 ), this._animateOutToolbar()) : this._animateOutFAB(), this.isOpen = !1)
          }
        }, {
          key : "_animateInFAB", value : function () {
            var e = this;
            this.$el.addClass( "active" );
            var t = 0;
            this.$floatingBtnsReverse.each( (function (i) {
              a( {
                targets    : i,
                opacity    : 1,
                scale      : [.4, 1],
                translateY : [e.offsetY, 0],
                translateX : [e.offsetX, 0],
                duration   : 275,
                delay      : t,
                easing     : "easeInOutQuad"
              } ), t += 40
            }) )
          }
        }, {
          key : "_animateOutFAB", value : function () {
            var e = this;
            this.$floatingBtnsReverse.each( (function (t) {
              a.remove( t ), a( {
                targets    : t,
                opacity    : 0,
                scale      : .4,
                translateY : e.offsetY,
                translateX : e.offsetX,
                duration   : 175,
                easing     : "easeOutQuad",
                complete   : function () {
                  e.$el.removeClass( "active" )
                }
              } )
            }) )
          }
        }, {
          key : "_animateInToolbar", value : function () {
            var a, t = this, i = window.innerWidth, n = window.innerHeight, s = this.el.getBoundingClientRect(),
              o = e( '<div class="fab-backdrop"></div>' ), l = this.$anchor.css( "background-color" );
            this.$anchor.append( o ), this.offsetX = s.left - i / 2 + s.width / 2, this.offsetY = n - s.bottom, a = i / o[0].clientWidth, this.btnBottom = s.bottom, this.btnLeft = s.left, this.btnWidth = s.width, this.$el.addClass( "active" ), this.$el.css( {
              "text-align" : "center",
              width        : "100%",
              bottom       : 0,
              left         : 0,
              transform    : "translateX(" + this.offsetX + "px)",
              transition   : "none"
            } ), this.$anchor.css( {
              transform  : "translateY(" + -this.offsetY + "px)",
              transition : "none"
            } ), o.css( {"background-color" : l} ), setTimeout( (function () {
              t.$el.css( {
                transform  : "",
                transition : "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
              } ), t.$anchor.css( {
                overflow   : "visible",
                transform  : "",
                transition : "transform .2s"
              } ), setTimeout( (function () {
                t.$el.css( {overflow : "hidden", "background-color" : l} ), o.css( {
                  transform  : "scale(" + a + ")",
                  transition : "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                } ), t.$menu.children( "li" ).children( "a" ).css( {opacity : 1} ), t._handleDocumentClickBound = t._handleDocumentClick.bind( t ), window.addEventListener( "scroll", t._handleCloseBound, !0 ), document.body.addEventListener( "click", t._handleDocumentClickBound, !0 )
              }), 100 )
            }), 0 )
          }
        }, {
          key : "_animateOutToolbar", value : function () {
            var e = this, a = window.innerWidth, t = window.innerHeight, i = this.$el.find( ".fab-backdrop" ),
              n = this.$anchor.css( "background-color" );
            this.offsetX = this.btnLeft - a / 2 + this.btnWidth / 2, this.offsetY = t - this.btnBottom, this.$el.removeClass( "active" ), this.$el.css( {
              "background-color" : "transparent",
              transition         : "none"
            } ), this.$anchor.css( {transition : "none"} ), i.css( {
              transform          : "scale(0)",
              "background-color" : n
            } ), this.$menu.children( "li" ).children( "a" ).css( {opacity : ""} ), setTimeout( (function () {
              i.remove(), e.$el.css( {
                "text-align"       : "",
                width              : "",
                bottom             : "",
                left               : "",
                overflow           : "",
                "background-color" : "",
                transform          : "translate3d(" + -e.offsetX + "px,0,0)"
              } ), e.$anchor.css( {
                overflow  : "",
                transform : "translate3d(0," + e.offsetY + "px,0)"
              } ), setTimeout( (function () {
                e.$el.css( {
                  transform  : "translate3d(0,0,0)",
                  transition : "transform .2s"
                } ), e.$anchor.css( {
                  transform  : "translate3d(0,0,0)",
                  transition : "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                } )
              }), 20 )
            }), 200 )
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( m.__proto__ || Object.getPrototypeOf( m ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_FloatingActionButton
          }
        }, {
          key : "defaults", get : function () {
            return t
          }
        }] ), m
      }( m );
      M.FloatingActionButton = i, M.jQueryLoaded && M.initializeJqueryWrapper( i, "floatingActionButton", "M_FloatingActionButton" )
    }( cash, M.anime ), function (e) {
      "use strict";
      var a = {
        autoClose                       : !1,
        format                          : "mmm dd, yyyy",
        parse                           : null,
        defaultDate                     : null,
        setDefaultDate                  : !1,
        disableWeekends                 : !1,
        disableDayFn                    : null,
        firstDay                        : 0,
        minDate                         : null,
        maxDate                         : null,
        yearRange                       : 10,
        minYear                         : 0,
        maxYear                         : 9999,
        minMonth                        : void 0,
        maxMonth                        : void 0,
        startRange                      : null,
        endRange                        : null,
        isRTL                           : !1,
        showMonthAfterYear              : !1,
        showDaysInNextAndPreviousMonths : !1,
        container                       : null,
        showClearBtn                    : !1,
        i18n                            : {
          cancel         : "Cancel",
          clear          : "Clear",
          done           : "Ok",
          previousMonth  : "вЂ№",
          nextMonth      : "вЂє",
          months         : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          monthsShort    : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          weekdays       : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          weekdaysShort  : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          weekdaysAbbrev : ["S", "M", "T", "W", "T", "F", "S"]
        },
        events                          : [],
        onSelect                        : null,
        onOpen                          : null,
        onClose                         : null,
        onDraw                          : null
      }, t = function (t) {
        function i(a, t) {
          r( this, i );
          var n = o( this, (i.__proto__ || Object.getPrototypeOf( i )).call( this, i, a, t ) );
          n.el.M_Datepicker = n, n.options = e.extend( {}, i.defaults, t ), t && t.hasOwnProperty( "i18n" ) && "object" == typeof t.i18n && (n.options.i18n = e.extend( {}, i.defaults.i18n, t.i18n )), n.options.minDate && n.options.minDate.setHours( 0, 0, 0, 0 ), n.options.maxDate && n.options.maxDate.setHours( 0, 0, 0, 0 ), n.id = M.guid(), n._setupVariables(), n._insertHTMLIntoDOM(), n._setupModal(), n._setupEventHandlers(), n.options.defaultDate || (n.options.defaultDate = new Date( Date.parse( n.el.value ) ));
          var s = n.options.defaultDate;
          return i._isDate( s ) ? n.options.setDefaultDate ? (n.setDate( s, !0 ), n.setInputValue()) : n.gotoDate( s ) : n.gotoDate( new Date ), n.isOpen = !1, n
        }

        return l( i, t ), s( i, [{
          key : "destroy", value : function () {
            this._removeEventHandlers(), this.modal.destroy(), e( this.modalEl ).remove(), this.destroySelects(), this.el.M_Datepicker = void 0
          }
        }, {
          key : "destroySelects", value : function () {
            var e = this.calendarEl.querySelector( ".orig-select-year" );
            e && M.FormSelect.getInstance( e ).destroy();
            var a = this.calendarEl.querySelector( ".orig-select-month" );
            a && M.FormSelect.getInstance( a ).destroy()
          }
        }, {
          key : "_insertHTMLIntoDOM", value : function () {
            this.options.showClearBtn && (e( this.clearBtn ).css( {visibility : ""} ), this.clearBtn.innerHTML = this.options.i18n.clear), this.doneBtn.innerHTML = this.options.i18n.done, this.cancelBtn.innerHTML = this.options.i18n.cancel, this.options.container ? this.$modalEl.appendTo( this.options.container ) : this.$modalEl.insertBefore( this.el )
          }
        }, {
          key : "_setupModal", value : function () {
            var e = this;
            this.modalEl.id = "modal-" + this.id, this.modal = M.Modal.init( this.modalEl, {
              onCloseEnd : function () {
                e.isOpen = !1
              }
            } )
          }
        }, {
          key : "toString", value : function (e) {
            var a = this;
            return e = e || this.options.format, i._isDate( this.date ) ? e.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ).map( (function (e) {
              return a.formats[e] ? a.formats[e]() : e
            }) ).join( "" ) : ""
          }
        }, {
          key : "setDate", value : function (e, a) {
            if (!e) return this.date = null, this._renderDateDisplay(), this.draw();
            if ("string" == typeof e && (e = new Date( Date.parse( e ) )), i._isDate( e )) {
              var t = this.options.minDate, n = this.options.maxDate;
              i._isDate( t ) && e < t ? e = t : i._isDate( n ) && e > n && (e = n), this.date = new Date( e.getTime() ), this._renderDateDisplay(), i._setToStartOfDay( this.date ), this.gotoDate( this.date ), a || "function" != typeof this.options.onSelect || this.options.onSelect.call( this, this.date )
            }
          }
        }, {
          key : "setInputValue", value : function () {
            this.el.value = this.toString(), this.$el.trigger( "change", {firedBy : this} )
          }
        }, {
          key : "_renderDateDisplay", value : function () {
            var e = i._isDate( this.date ) ? this.date : new Date, a = this.options.i18n,
              t = a.weekdaysShort[e.getDay()], n = a.monthsShort[e.getMonth()], s = e.getDate();
            this.yearTextEl.innerHTML = e.getFullYear(), this.dateTextEl.innerHTML = t + ", " + n + " " + s
          }
        }, {
          key : "gotoDate", value : function (e) {
            var a = !0;
            if (i._isDate( e )) {
              if (this.calendars) {
                var t = new Date( this.calendars[0].year, this.calendars[0].month, 1 ),
                  n = new Date( this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1 ),
                  s = e.getTime();
                n.setMonth( n.getMonth() + 1 ), n.setDate( n.getDate() - 1 ), a = s < t.getTime() || n.getTime() < s
              }
              a && (this.calendars = [{month : e.getMonth(), year : e.getFullYear()}]), this.adjustCalendars()
            }
          }
        }, {
          key : "adjustCalendars", value : function () {
            this.calendars[0] = this.adjustCalendar( this.calendars[0] ), this.draw()
          }
        }, {
          key : "adjustCalendar", value : function (e) {
            return e.month < 0 && (e.year -= Math.ceil( Math.abs( e.month ) / 12 ), e.month += 12), e.month > 11 && (e.year += Math.floor( Math.abs( e.month ) / 12 ), e.month -= 12), e
          }
        }, {
          key : "nextMonth", value : function () {
            this.calendars[0].month++, this.adjustCalendars()
          }
        }, {
          key : "prevMonth", value : function () {
            this.calendars[0].month--, this.adjustCalendars()
          }
        }, {
          key : "render", value : function (e, a, t) {
            var n = this.options, s = new Date, o = i._getDaysInMonth( e, a ), l = new Date( e, a, 1 ).getDay(), r = [],
              m = [];
            i._setToStartOfDay( s ), n.firstDay > 0 && (l -= n.firstDay) < 0 && (l += 7);
            for (var p = 0 === a ? 11 : a - 1, d = 11 === a ? 0 : a + 1, g = 0 === a ? e - 1 : e, x = 11 === a ? e + 1 : e, u = i._getDaysInMonth( g, p ), f = o + l, h = f; h > 7;) h -= 7;
            f += 7 - h;
            for (var _ = !1, c = 0, T = 0; c < f; c++) {
              var w = new Date( e, a, c - l + 1 ), E = !!i._isDate( this.date ) && i._compareDates( w, this.date ),
                M = i._compareDates( w, s ), y = -1 !== n.events.indexOf( w.toDateString() ), v = c < l || c >= o + l,
                b = c - l + 1, k = a, j = e, A = n.startRange && i._compareDates( n.startRange, w ),
                I = n.endRange && i._compareDates( n.endRange, w ),
                S = n.startRange && n.endRange && n.startRange < w && w < n.endRange;
              v && (c < l ? (b = u + b, k = p, j = g) : (b -= o, k = d, j = x));
              var C = {
                day                             : b,
                month                           : k,
                year                            : j,
                hasEvent                        : y,
                isSelected                      : E,
                isToday                         : M,
                isDisabled                      : n.minDate && w < n.minDate || n.maxDate && w > n.maxDate || n.disableWeekends && i._isWeekend( w ) || n.disableDayFn && n.disableDayFn( w ),
                isEmpty                         : v,
                isStartRange                    : A,
                isEndRange                      : I,
                isInRange                       : S,
                showDaysInNextAndPreviousMonths : n.showDaysInNextAndPreviousMonths
              };
              m.push( this.renderDay( C ) ), 7 == ++T && (r.push( this.renderRow( m, n.isRTL, _ ) ), m = [], T = 0, _ = !1)
            }
            return this.renderTable( n, r, t )
          }
        }, {
          key : "renderDay", value : function (e) {
            var a = [], t = "false";
            if (e.isEmpty) {
              if (!e.showDaysInNextAndPreviousMonths) return '<td class="is-empty"></td>';
              a.push( "is-outside-current-month" ), a.push( "is-selection-disabled" )
            }
            return e.isDisabled && a.push( "is-disabled" ), e.isToday && a.push( "is-today" ), e.isSelected && (a.push( "is-selected" ), t = "true"), e.hasEvent && a.push( "has-event" ), e.isInRange && a.push( "is-inrange" ), e.isStartRange && a.push( "is-startrange" ), e.isEndRange && a.push( "is-endrange" ), '<td data-day="' + e.day + '" class="' + a.join( " " ) + '" aria-selected="' + t + '"><button class="datepicker-day-button" type="button" data-year="' + e.year + '" data-month="' + e.month + '" data-day="' + e.day + '">' + e.day + "</button></td>"
          }
        }, {
          key : "renderRow", value : function (e, a, t) {
            return '<tr class="datepicker-row' + (t ? " is-selected" : "") + '">' + (a ? e.reverse() : e).join( "" ) + "</tr>"
          }
        }, {
          key : "renderTable", value : function (e, a, t) {
            return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + t + '">' + this.renderHead( e ) + this.renderBody( a ) + "</table></div>"
          }
        }, {
          key : "renderHead", value : function (e) {
            var a = void 0, t = [];
            for (a = 0; a < 7; a++) t.push( '<th scope="col"><abbr title="' + this.renderDayName( e, a ) + '">' + this.renderDayName( e, a, !0 ) + "</abbr></th>" );
            return "<thead><tr>" + (e.isRTL ? t.reverse() : t).join( "" ) + "</tr></thead>"
          }
        }, {
          key : "renderBody", value : function (e) {
            return "<tbody>" + e.join( "" ) + "</tbody>"
          }
        }, {
          key : "renderTitle", value : function (a, t, i, n, s, o) {
            var l, r, m = void 0, p = void 0, d = void 0, g = this.options, x = i === g.minYear, u = i === g.maxYear,
              f = '<div id="' + o + '" class="datepicker-controls" role="heading" aria-live="assertive">', h = !0,
              _ = !0;
            for (d = [], m = 0; m < 12; m++) d.push( '<option value="' + (i === s ? m - t : 12 + m - t) + '"' + (m === n ? ' selected="selected"' : "") + (x && m < g.minMonth || u && m > g.maxMonth ? 'disabled="disabled"' : "") + ">" + g.i18n.months[m] + "</option>" );
            for (l = '<select class="datepicker-select orig-select-month" tabindex="-1">' + d.join( "" ) + "</select>", e.isArray( g.yearRange ) ? (m = g.yearRange[0], p = g.yearRange[1] + 1) : (m = i - g.yearRange, p = 1 + i + g.yearRange), d = []; m < p && m <= g.maxYear; m++) m >= g.minYear && d.push( '<option value="' + m + '" ' + (m === i ? 'selected="selected"' : "") + ">" + m + "</option>" );
            r = '<select class="datepicker-select orig-select-year" tabindex="-1">' + d.join( "" ) + "</select>";
            f += '<button class="month-prev' + (h ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg></button>', f += '<div class="selects-container">', g.showMonthAfterYear ? f += r + l : f += l + r, f += "</div>", x && (0 === n || g.minMonth >= n) && (h = !1), u && (11 === n || g.maxMonth <= n) && (_ = !1);
            return (f += '<button class="month-next' + (_ ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg></button>') + "</div>"
          }
        }, {
          key : "draw", value : function (e) {
            if (this.isOpen || e) {
              var a, t = this.options, i = t.minYear, n = t.maxYear, s = t.minMonth, o = t.maxMonth, l = "";
              this._y <= i && (this._y = i, !isNaN( s ) && this._m < s && (this._m = s)), this._y >= n && (this._y = n, !isNaN( o ) && this._m > o && (this._m = o)), a = "datepicker-title-" + Math.random().toString( 36 ).replace( /[^a-z]+/g, "" ).substr( 0, 2 );
              for (var r = 0; r < 1; r++) this._renderDateDisplay(), l += this.renderTitle( this, r, this.calendars[r].year, this.calendars[r].month, this.calendars[0].year, a ) + this.render( this.calendars[r].year, this.calendars[r].month, a );
              this.destroySelects(), this.calendarEl.innerHTML = l;
              var m = this.calendarEl.querySelector( ".orig-select-year" ),
                p = this.calendarEl.querySelector( ".orig-select-month" );
              M.FormSelect.init( m, {
                classes         : "select-year",
                dropdownOptions : {container : document.body, constrainWidth : !1}
              } ), M.FormSelect.init( p, {
                classes         : "select-month",
                dropdownOptions : {container : document.body, constrainWidth : !1}
              } ), m.addEventListener( "change", this._handleYearChange.bind( this ) ), p.addEventListener( "change", this._handleMonthChange.bind( this ) ), "function" == typeof this.options.onDraw && this.options.onDraw( this )
            }
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            this._handleInputKeydownBound = this._handleInputKeydown.bind( this ), this._handleInputClickBound = this._handleInputClick.bind( this ), this._handleInputChangeBound = this._handleInputChange.bind( this ), this._handleCalendarClickBound = this._handleCalendarClick.bind( this ), this._finishSelectionBound = this._finishSelection.bind( this ), this._handleMonthChange = this._handleMonthChange.bind( this ), this._closeBound = this.close.bind( this ), this.el.addEventListener( "click", this._handleInputClickBound ), this.el.addEventListener( "keydown", this._handleInputKeydownBound ), this.el.addEventListener( "change", this._handleInputChangeBound ), this.calendarEl.addEventListener( "click", this._handleCalendarClickBound ), this.doneBtn.addEventListener( "click", this._finishSelectionBound ), this.cancelBtn.addEventListener( "click", this._closeBound ), this.options.showClearBtn && (this._handleClearClickBound = this._handleClearClick.bind( this ), this.clearBtn.addEventListener( "click", this._handleClearClickBound ))
          }
        }, {
          key : "_setupVariables", value : function () {
            var a = this;
            this.$modalEl = e( i._template ), this.modalEl = this.$modalEl[0], this.calendarEl = this.modalEl.querySelector( ".datepicker-calendar" ), this.yearTextEl = this.modalEl.querySelector( ".year-text" ), this.dateTextEl = this.modalEl.querySelector( ".date-text" ), this.options.showClearBtn && (this.clearBtn = this.modalEl.querySelector( ".datepicker-clear" )), this.doneBtn = this.modalEl.querySelector( ".datepicker-done" ), this.cancelBtn = this.modalEl.querySelector( ".datepicker-cancel" ), this.formats = {
              d    : function () {
                return a.date.getDate()
              },
              dd   : function () {
                var e = a.date.getDate();
                return (e < 10 ? "0" : "") + e
              },
              ddd  : function () {
                return a.options.i18n.weekdaysShort[a.date.getDay()]
              },
              dddd : function () {
                return a.options.i18n.weekdays[a.date.getDay()]
              },
              m    : function () {
                return a.date.getMonth() + 1
              },
              mm   : function () {
                var e = a.date.getMonth() + 1;
                return (e < 10 ? "0" : "") + e
              },
              mmm  : function () {
                return a.options.i18n.monthsShort[a.date.getMonth()]
              },
              mmmm : function () {
                return a.options.i18n.months[a.date.getMonth()]
              },
              yy   : function () {
                return ("" + a.date.getFullYear()).slice( 2 )
              },
              yyyy : function () {
                return a.date.getFullYear()
              }
            }
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            this.el.removeEventListener( "click", this._handleInputClickBound ), this.el.removeEventListener( "keydown", this._handleInputKeydownBound ), this.el.removeEventListener( "change", this._handleInputChangeBound ), this.calendarEl.removeEventListener( "click", this._handleCalendarClickBound )
          }
        }, {
          key : "_handleInputClick", value : function () {
            this.open()
          }
        }, {
          key : "_handleInputKeydown", value : function (e) {
            e.which === M.keys.ENTER && (e.preventDefault(), this.open())
          }
        }, {
          key : "_handleCalendarClick", value : function (a) {
            if (this.isOpen) {
              var t = e( a.target );
              t.hasClass( "is-disabled" ) || (!t.hasClass( "datepicker-day-button" ) || t.hasClass( "is-empty" ) || t.parent().hasClass( "is-disabled" ) ? t.closest( ".month-prev" ).length ? this.prevMonth() : t.closest( ".month-next" ).length && this.nextMonth() : (this.setDate( new Date( a.target.getAttribute( "data-year" ), a.target.getAttribute( "data-month" ), a.target.getAttribute( "data-day" ) ) ), this.options.autoClose && this._finishSelection()))
            }
          }
        }, {
          key : "_handleClearClick", value : function () {
            this.date = null, this.setInputValue(), this.close()
          }
        }, {
          key : "_handleMonthChange", value : function (e) {
            this.gotoMonth( e.target.value )
          }
        }, {
          key : "_handleYearChange", value : function (e) {
            this.gotoYear( e.target.value )
          }
        }, {
          key : "gotoMonth", value : function (e) {
            isNaN( e ) || (this.calendars[0].month = parseInt( e, 10 ), this.adjustCalendars())
          }
        }, {
          key : "gotoYear", value : function (e) {
            isNaN( e ) || (this.calendars[0].year = parseInt( e, 10 ), this.adjustCalendars())
          }
        }, {
          key : "_handleInputChange", value : function (e) {
            var a = void 0;
            e.firedBy !== this && (a = this.options.parse ? this.options.parse( this.el.value, this.options.format ) : new Date( Date.parse( this.el.value ) ), i._isDate( a ) && this.setDate( a ))
          }
        }, {
          key : "renderDayName", value : function (e, a, t) {
            for (a += e.firstDay; a >= 7;) a -= 7;
            return t ? e.i18n.weekdaysAbbrev[a] : e.i18n.weekdays[a]
          }
        }, {
          key : "_finishSelection", value : function () {
            this.setInputValue(), this.close()
          }
        }, {
          key : "open", value : function () {
            if (!this.isOpen) return this.isOpen = !0, "function" == typeof this.options.onOpen && this.options.onOpen.call( this ), this.draw(), this.modal.open(), this
          }
        }, {
          key : "close", value : function () {
            if (this.isOpen) return this.isOpen = !1, "function" == typeof this.options.onClose && this.options.onClose.call( this ), this.modal.close(), this
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( i.__proto__ || Object.getPrototypeOf( i ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "_isDate", value : function (e) {
            return /Date/.test( Object.prototype.toString.call( e ) ) && !isNaN( e.getTime() )
          }
        }, {
          key : "_isWeekend", value : function (e) {
            var a = e.getDay();
            return 0 === a || 6 === a
          }
        }, {
          key : "_setToStartOfDay", value : function (e) {
            i._isDate( e ) && e.setHours( 0, 0, 0, 0 )
          }
        }, {
          key : "_getDaysInMonth", value : function (e, a) {
            return [31, i._isLeapYear( e ) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][a]
          }
        }, {
          key : "_isLeapYear", value : function (e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
          }
        }, {
          key : "_compareDates", value : function (e, a) {
            return e.getTime() === a.getTime()
          }
        }, {
          key : "_setToStartOfDay", value : function (e) {
            i._isDate( e ) && e.setHours( 0, 0, 0, 0 )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Datepicker
          }
        }, {
          key : "defaults", get : function () {
            return a
          }
        }] ), i
      }( m );
      t._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', "</div>", '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join( "" ), M.Datepicker = t, M.jQueryLoaded && M.initializeJqueryWrapper( t, "datepicker", "M_Datepicker" )
    }( cash ), function (e) {
      "use strict";
      var a = {
        dialRadius   : 135,
        outerRadius  : 105,
        innerRadius  : 70,
        tickRadius   : 20,
        duration     : 350,
        container    : null,
        defaultTime  : "now",
        fromNow      : 0,
        showClearBtn : !1,
        i18n         : {cancel : "Cancel", clear : "Clear", done : "Ok"},
        autoClose    : !1,
        twelveHour   : !0,
        vibrate      : !0,
        onOpenStart  : null,
        onOpenEnd    : null,
        onCloseStart : null,
        onCloseEnd   : null,
        onSelect     : null
      }, t = function (t) {
        function i(a, t) {
          r( this, i );
          var n = o( this, (i.__proto__ || Object.getPrototypeOf( i )).call( this, i, a, t ) );
          return n.el.M_Timepicker = n, n.options = e.extend( {}, i.defaults, t ), n.id = M.guid(), n._insertHTMLIntoDOM(), n._setupModal(), n._setupVariables(), n._setupEventHandlers(), n._clockSetup(), n._pickerSetup(), n
        }

        return l( i, t ), s( i, [{
          key : "destroy", value : function () {
            this._removeEventHandlers(), this.modal.destroy(), e( this.modalEl ).remove(), this.el.M_Timepicker = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            this._handleInputKeydownBound = this._handleInputKeydown.bind( this ), this._handleInputClickBound = this._handleInputClick.bind( this ), this._handleClockClickStartBound = this._handleClockClickStart.bind( this ), this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind( this ), this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind( this ), this.el.addEventListener( "click", this._handleInputClickBound ), this.el.addEventListener( "keydown", this._handleInputKeydownBound ), this.plate.addEventListener( "mousedown", this._handleClockClickStartBound ), this.plate.addEventListener( "touchstart", this._handleClockClickStartBound ), e( this.spanHours ).on( "click", this.showView.bind( this, "hours" ) ), e( this.spanMinutes ).on( "click", this.showView.bind( this, "minutes" ) )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            this.el.removeEventListener( "click", this._handleInputClickBound ), this.el.removeEventListener( "keydown", this._handleInputKeydownBound )
          }
        }, {
          key : "_handleInputClick", value : function () {
            this.open()
          }
        }, {
          key : "_handleInputKeydown", value : function (e) {
            e.which === M.keys.ENTER && (e.preventDefault(), this.open())
          }
        }, {
          key : "_handleClockClickStart", value : function (e) {
            e.preventDefault();
            var a = this.plate.getBoundingClientRect(), t = a.left, n = a.top;
            this.x0 = t + this.options.dialRadius, this.y0 = n + this.options.dialRadius, this.moved = !1;
            var s = i._Pos( e );
            this.dx = s.x - this.x0, this.dy = s.y - this.y0, this.setHand( this.dx, this.dy, !1 ), document.addEventListener( "mousemove", this._handleDocumentClickMoveBound ), document.addEventListener( "touchmove", this._handleDocumentClickMoveBound ), document.addEventListener( "mouseup", this._handleDocumentClickEndBound ), document.addEventListener( "touchend", this._handleDocumentClickEndBound )
          }
        }, {
          key : "_handleDocumentClickMove", value : function (e) {
            e.preventDefault();
            var a = i._Pos( e ), t = a.x - this.x0, n = a.y - this.y0;
            this.moved = !0, this.setHand( t, n, !1, !0 )
          }
        }, {
          key : "_handleDocumentClickEnd", value : function (a) {
            var t = this;
            a.preventDefault(), document.removeEventListener( "mouseup", this._handleDocumentClickEndBound ), document.removeEventListener( "touchend", this._handleDocumentClickEndBound );
            var n = i._Pos( a ), s = n.x - this.x0, o = n.y - this.y0;
            this.moved && s === this.dx && o === this.dy && this.setHand( s, o ), "hours" === this.currentView ? this.showView( "minutes", this.options.duration / 2 ) : this.options.autoClose && (e( this.minutesView ).addClass( "timepicker-dial-out" ), setTimeout( (function () {
              t.done()
            }), this.options.duration / 2 )), "function" == typeof this.options.onSelect && this.options.onSelect.call( this, this.hours, this.minutes ), document.removeEventListener( "mousemove", this._handleDocumentClickMoveBound ), document.removeEventListener( "touchmove", this._handleDocumentClickMoveBound )
          }
        }, {
          key : "_insertHTMLIntoDOM", value : function () {
            this.$modalEl = e( i._template ), this.modalEl = this.$modalEl[0], this.modalEl.id = "modal-" + this.id;
            var a = document.querySelector( this.options.container );
            this.options.container && a ? this.$modalEl.appendTo( a ) : this.$modalEl.insertBefore( this.el )
          }
        }, {
          key : "_setupModal", value : function () {
            var e = this;
            this.modal = M.Modal.init( this.modalEl, {
              onOpenStart  : this.options.onOpenStart,
              onOpenEnd    : this.options.onOpenEnd,
              onCloseStart : this.options.onCloseStart,
              onCloseEnd   : function () {
                "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call( e ), e.isOpen = !1
              }
            } )
          }
        }, {
          key : "_setupVariables", value : function () {
            this.currentView = "hours", this.vibrate = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null, this._canvas = this.modalEl.querySelector( ".timepicker-canvas" ), this.plate = this.modalEl.querySelector( ".timepicker-plate" ), this.hoursView = this.modalEl.querySelector( ".timepicker-hours" ), this.minutesView = this.modalEl.querySelector( ".timepicker-minutes" ), this.spanHours = this.modalEl.querySelector( ".timepicker-span-hours" ), this.spanMinutes = this.modalEl.querySelector( ".timepicker-span-minutes" ), this.spanAmPm = this.modalEl.querySelector( ".timepicker-span-am-pm" ), this.footer = this.modalEl.querySelector( ".timepicker-footer" ), this.amOrPm = "PM"
          }
        }, {
          key : "_pickerSetup", value : function () {
            var a = e( '<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.clear + "</button>" ).appendTo( this.footer ).on( "click", this.clear.bind( this ) );
            this.options.showClearBtn && a.css( {visibility : ""} );
            var t = e( '<div class="confirmation-btns"></div>' );
            e( '<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.cancel + "</button>" ).appendTo( t ).on( "click", this.close.bind( this ) ), e( '<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.done + "</button>" ).appendTo( t ).on( "click", this.done.bind( this ) ), t.appendTo( this.footer )
          }
        }, {
          key : "_clockSetup", value : function () {
            this.options.twelveHour && (this.$amBtn = e( '<div class="am-btn">AM</div>' ), this.$pmBtn = e( '<div class="pm-btn">PM</div>' ), this.$amBtn.on( "click", this._handleAmPmClick.bind( this ) ).appendTo( this.spanAmPm ), this.$pmBtn.on( "click", this._handleAmPmClick.bind( this ) ).appendTo( this.spanAmPm )), this._buildHoursView(), this._buildMinutesView(), this._buildSVGClock()
          }
        }, {
          key : "_buildSVGClock", value : function () {
            var e = this.options.dialRadius, a = this.options.tickRadius, t = 2 * e, n = i._createSVGEl( "svg" );
            n.setAttribute( "class", "timepicker-svg" ), n.setAttribute( "width", t ), n.setAttribute( "height", t );
            var s = i._createSVGEl( "g" );
            s.setAttribute( "transform", "translate(" + e + "," + e + ")" );
            var o = i._createSVGEl( "circle" );
            o.setAttribute( "class", "timepicker-canvas-bearing" ), o.setAttribute( "cx", 0 ), o.setAttribute( "cy", 0 ), o.setAttribute( "r", 4 );
            var l = i._createSVGEl( "line" );
            l.setAttribute( "x1", 0 ), l.setAttribute( "y1", 0 );
            var r = i._createSVGEl( "circle" );
            r.setAttribute( "class", "timepicker-canvas-bg" ), r.setAttribute( "r", a ), s.appendChild( l ), s.appendChild( r ), s.appendChild( o ), n.appendChild( s ), this._canvas.appendChild( n ), this.hand = l, this.bg = r, this.bearing = o, this.g = s
          }
        }, {
          key : "_buildHoursView", value : function () {
            var a = e( '<div class="timepicker-tick"></div>' );
            if (this.options.twelveHour) for (var t = 1; t < 13; t += 1) {
              var i = a.clone(), n = t / 6 * Math.PI, s = this.options.outerRadius;
              i.css( {
                left : this.options.dialRadius + Math.sin( n ) * s - this.options.tickRadius + "px",
                top  : this.options.dialRadius - Math.cos( n ) * s - this.options.tickRadius + "px"
              } ), i.html( 0 === t ? "00" : t ), this.hoursView.appendChild( i[0] )
            } else for (var o = 0; o < 24; o += 1) {
              var l = a.clone(), r = o / 6 * Math.PI,
                m = o > 0 && o < 13 ? this.options.innerRadius : this.options.outerRadius;
              l.css( {
                left : this.options.dialRadius + Math.sin( r ) * m - this.options.tickRadius + "px",
                top  : this.options.dialRadius - Math.cos( r ) * m - this.options.tickRadius + "px"
              } ), l.html( 0 === o ? "00" : o ), this.hoursView.appendChild( l[0] )
            }
          }
        }, {
          key : "_buildMinutesView", value : function () {
            for (var a = e( '<div class="timepicker-tick"></div>' ), t = 0; t < 60; t += 5) {
              var n = a.clone(), s = t / 30 * Math.PI;
              n.css( {
                left : this.options.dialRadius + Math.sin( s ) * this.options.outerRadius - this.options.tickRadius + "px",
                top  : this.options.dialRadius - Math.cos( s ) * this.options.outerRadius - this.options.tickRadius + "px"
              } ), n.html( i._addLeadingZero( t ) ), this.minutesView.appendChild( n[0] )
            }
          }
        }, {
          key : "_handleAmPmClick", value : function (a) {
            var t = e( a.target );
            this.amOrPm = t.hasClass( "am-btn" ) ? "AM" : "PM", this._updateAmPmView()
          }
        }, {
          key : "_updateAmPmView", value : function () {
            this.options.twelveHour && (this.$amBtn.toggleClass( "text-primary", "AM" === this.amOrPm ), this.$pmBtn.toggleClass( "text-primary", "PM" === this.amOrPm ))
          }
        }, {
          key : "_updateTimeFromInput", value : function () {
            var e = ((this.el.value || this.options.defaultTime || "") + "").split( ":" );
            if (this.options.twelveHour && void 0 !== e[1] && (e[1].toUpperCase().indexOf( "AM" ) > 0 ? this.amOrPm = "AM" : this.amOrPm = "PM", e[1] = e[1].replace( "AM", "" ).replace( "PM", "" )), "now" === e[0]) {
              var a = new Date( +new Date + this.options.fromNow );
              e = [a.getHours(), a.getMinutes()], this.options.twelveHour && (this.amOrPm = e[0] >= 12 && e[0] < 24 ? "PM" : "AM")
            }
            this.hours = +e[0] || 0, this.minutes = +e[1] || 0, this.spanHours.innerHTML = this.hours, this.spanMinutes.innerHTML = i._addLeadingZero( this.minutes ), this._updateAmPmView()
          }
        }, {
          key : "showView", value : function (a, t) {
            "minutes" === a && e( this.hoursView ).css( "visibility" );
            var i = "hours" === a, n = i ? this.hoursView : this.minutesView, s = i ? this.minutesView : this.hoursView;
            this.currentView = a, e( this.spanHours ).toggleClass( "text-primary", i ), e( this.spanMinutes ).toggleClass( "text-primary", !i ), s.classList.add( "timepicker-dial-out" ), e( n ).css( "visibility", "visible" ).removeClass( "timepicker-dial-out" ), this.resetClock( t ), clearTimeout( this.toggleViewTimer ), this.toggleViewTimer = setTimeout( (function () {
              e( s ).css( "visibility", "hidden" )
            }), this.options.duration )
          }
        }, {
          key : "resetClock", value : function (a) {
            var t = this.currentView, i = this[t], n = "hours" === t, s = i * (Math.PI / (n ? 6 : 30)),
              o = n && i > 0 && i < 13 ? this.options.innerRadius : this.options.outerRadius, l = Math.sin( s ) * o,
              r = -Math.cos( s ) * o, m = this;
            a ? (e( this.canvas ).addClass( "timepicker-canvas-out" ), setTimeout( (function () {
              e( m.canvas ).removeClass( "timepicker-canvas-out" ), m.setHand( l, r )
            }), a )) : this.setHand( l, r )
          }
        }, {
          key : "setHand", value : function (e, a, t) {
            var n = this, s = Math.atan2( e, -a ), o = "hours" === this.currentView, l = Math.PI / (o || t ? 6 : 30),
              r = Math.sqrt( e * e + a * a ), m = o && r < (this.options.outerRadius + this.options.innerRadius) / 2,
              p = m ? this.options.innerRadius : this.options.outerRadius;
            this.options.twelveHour && (p = this.options.outerRadius), s < 0 && (s = 2 * Math.PI + s);
            var d = Math.round( s / l );
            s = d * l, this.options.twelveHour ? o ? 0 === d && (d = 12) : (t && (d *= 5), 60 === d && (d = 0)) : o ? (12 === d && (d = 0), d = m ? 0 === d ? 12 : d : 0 === d ? 0 : d + 12) : (t && (d *= 5), 60 === d && (d = 0)), this[this.currentView] !== d && this.vibrate && this.options.vibrate && (this.vibrateTimer || (navigator[this.vibrate]( 10 ), this.vibrateTimer = setTimeout( (function () {
              n.vibrateTimer = null
            }), 100 ))), this[this.currentView] = d, o ? this.spanHours.innerHTML = d : this.spanMinutes.innerHTML = i._addLeadingZero( d );
            var g = Math.sin( s ) * (p - this.options.tickRadius), x = -Math.cos( s ) * (p - this.options.tickRadius),
              u = Math.sin( s ) * p, f = -Math.cos( s ) * p;
            this.hand.setAttribute( "x2", g ), this.hand.setAttribute( "y2", x ), this.bg.setAttribute( "cx", u ), this.bg.setAttribute( "cy", f )
          }
        }, {
          key : "open", value : function () {
            this.isOpen || (this.isOpen = !0, this._updateTimeFromInput(), this.showView( "hours" ), this.modal.open())
          }
        }, {
          key : "close", value : function () {
            this.isOpen && (this.isOpen = !1, this.modal.close())
          }
        }, {
          key : "done", value : function (e, a) {
            var t = this.el.value,
              n = a ? "" : i._addLeadingZero( this.hours ) + ":" + i._addLeadingZero( this.minutes );
            this.time = n, !a && this.options.twelveHour && (n = n + " " + this.amOrPm), this.el.value = n, n !== t && this.$el.trigger( "change" ), this.close(), this.el.focus()
          }
        }, {
          key : "clear", value : function () {
            this.done( null, !0 )
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( i.__proto__ || Object.getPrototypeOf( i ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "_addLeadingZero", value : function (e) {
            return (e < 10 ? "0" : "") + e
          }
        }, {
          key : "_createSVGEl", value : function (e) {
            return document.createElementNS( "http://www.w3.org/2000/svg", e )
          }
        }, {
          key : "_Pos", value : function (e) {
            return e.targetTouches && e.targetTouches.length >= 1 ? {
              x : e.targetTouches[0].clientX,
              y : e.targetTouches[0].clientY
            } : {x : e.clientX, y : e.clientY}
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Timepicker
          }
        }, {
          key : "defaults", get : function () {
            return a
          }
        }] ), i
      }( m );
      t._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ":", '<span class="timepicker-span-minutes"></span>', "</div>", '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', "</div>", '<div class="timepicker-footer"></div>', "</div>", "</div>", "</div>"].join( "" ), M.Timepicker = t, M.jQueryLoaded && M.initializeJqueryWrapper( t, "timepicker", "M_Timepicker" )
    }( cash ), function (e) {
      "use strict";
      var a = {}, t = function (t) {
        function i(a, t) {
          r( this, i );
          var n = o( this, (i.__proto__ || Object.getPrototypeOf( i )).call( this, i, a, t ) );
          return n.el.M_CharacterCounter = n, n.options = e.extend( {}, i.defaults, t ), n.isInvalid = !1, n.isValidLength = !1, n._setupCounter(), n._setupEventHandlers(), n
        }

        return l( i, t ), s( i, [{
          key : "destroy", value : function () {
            this._removeEventHandlers(), this.el.CharacterCounter = void 0, this._removeCounter()
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            this._handleUpdateCounterBound = this.updateCounter.bind( this ), this.el.addEventListener( "focus", this._handleUpdateCounterBound, !0 ), this.el.addEventListener( "input", this._handleUpdateCounterBound, !0 )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            this.el.removeEventListener( "focus", this._handleUpdateCounterBound, !0 ), this.el.removeEventListener( "input", this._handleUpdateCounterBound, !0 )
          }
        }, {
          key : "_setupCounter", value : function () {
            this.counterEl = document.createElement( "span" ), e( this.counterEl ).addClass( "character-counter" ).css( {
              float       : "right",
              "font-size" : "12px",
              height      : 1
            } ), this.$el.parent().append( this.counterEl )
          }
        }, {
          key : "_removeCounter", value : function () {
            e( this.counterEl ).remove()
          }
        }, {
          key : "updateCounter", value : function () {
            var a = +this.$el.attr( "data-length" ), t = this.el.value.length;
            this.isValidLength = t <= a;
            var i = t;
            a && (i += "/" + a, this._validateInput()), e( this.counterEl ).html( i )
          }
        }, {
          key : "_validateInput", value : function () {
            this.isValidLength && this.isInvalid ? (this.isInvalid = !1, this.$el.removeClass( "invalid" )) : this.isValidLength || this.isInvalid || (this.isInvalid = !0, this.$el.removeClass( "valid" ), this.$el.addClass( "invalid" ))
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( i.__proto__ || Object.getPrototypeOf( i ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_CharacterCounter
          }
        }, {
          key : "defaults", get : function () {
            return a
          }
        }] ), i
      }( m );
      M.CharacterCounter = t, M.jQueryLoaded && M.initializeJqueryWrapper( t, "characterCounter", "M_CharacterCounter" )
    }( cash ), function (e) {
      "use strict";
      var a = {
        duration   : 200,
        dist       : -100,
        shift      : 0,
        padding    : 0,
        numVisible : 5,
        fullWidth  : !1,
        indicators : !1,
        noWrap     : !1,
        onCycleTo  : null
      }, t = function (t) {
        function i(a, t) {
          r( this, i );
          var n = o( this, (i.__proto__ || Object.getPrototypeOf( i )).call( this, i, a, t ) );
          return n.el.M_Carousel = n, n.options = e.extend( {}, i.defaults, t ), n.hasMultipleSlides = n.$el.find( ".carousel-item" ).length > 1, n.showIndicators = n.options.indicators && n.hasMultipleSlides, n.noWrap = n.options.noWrap || !n.hasMultipleSlides, n.pressed = !1, n.dragged = !1, n.offset = n.target = 0, n.images = [], n.itemWidth = n.$el.find( ".carousel-item" ).first().innerWidth(), n.itemHeight = n.$el.find( ".carousel-item" ).first().innerHeight(), n.dim = 2 * n.itemWidth + n.options.padding || 1, n._autoScrollBound = n._autoScroll.bind( n ), n._trackBound = n._track.bind( n ), n.options.fullWidth && (n.options.dist = 0, n._setCarouselHeight(), n.showIndicators && n.$el.find( ".carousel-fixed-item" ).addClass( "with-indicators" )), n.$indicators = e( '<ul class="indicators"></ul>' ), n.$el.find( ".carousel-item" ).each( (function (a, t) {
            if (n.images.push( a ), n.showIndicators) {
              var i = e( '<li class="indicator-item"></li>' );
              0 === t && i[0].classList.add( "active" ), n.$indicators.append( i )
            }
          }) ), n.showIndicators && n.$el.append( n.$indicators ), n.count = n.images.length, n.options.numVisible = Math.min( n.count, n.options.numVisible ), n.xform = "transform", ["webkit", "Moz", "O", "ms"].every( (function (e) {
            var a = e + "Transform";
            return void 0 === document.body.style[a] || (n.xform = a, !1)
          }) ), n._setupEventHandlers(), n._scroll( n.offset ), n
        }

        return l( i, t ), s( i, [{
          key : "destroy", value : function () {
            this._removeEventHandlers(), this.el.M_Carousel = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            var e = this;
            this._handleCarouselTapBound = this._handleCarouselTap.bind( this ), this._handleCarouselDragBound = this._handleCarouselDrag.bind( this ), this._handleCarouselReleaseBound = this._handleCarouselRelease.bind( this ), this._handleCarouselClickBound = this._handleCarouselClick.bind( this ), void 0 !== window.ontouchstart && (this.el.addEventListener( "touchstart", this._handleCarouselTapBound ), this.el.addEventListener( "touchmove", this._handleCarouselDragBound ), this.el.addEventListener( "touchend", this._handleCarouselReleaseBound )), this.el.addEventListener( "mousedown", this._handleCarouselTapBound ), this.el.addEventListener( "mousemove", this._handleCarouselDragBound ), this.el.addEventListener( "mouseup", this._handleCarouselReleaseBound ), this.el.addEventListener( "mouseleave", this._handleCarouselReleaseBound ), this.el.addEventListener( "click", this._handleCarouselClickBound ), this.showIndicators && this.$indicators && (this._handleIndicatorClickBound = this._handleIndicatorClick.bind( this ), this.$indicators.find( ".indicator-item" ).each( (function (a, t) {
              a.addEventListener( "click", e._handleIndicatorClickBound )
            }) ));
            var a = M.throttle( this._handleResize, 200 );
            this._handleThrottledResizeBound = a.bind( this ), window.addEventListener( "resize", this._handleThrottledResizeBound )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            var e = this;
            void 0 !== window.ontouchstart && (this.el.removeEventListener( "touchstart", this._handleCarouselTapBound ), this.el.removeEventListener( "touchmove", this._handleCarouselDragBound ), this.el.removeEventListener( "touchend", this._handleCarouselReleaseBound )), this.el.removeEventListener( "mousedown", this._handleCarouselTapBound ), this.el.removeEventListener( "mousemove", this._handleCarouselDragBound ), this.el.removeEventListener( "mouseup", this._handleCarouselReleaseBound ), this.el.removeEventListener( "mouseleave", this._handleCarouselReleaseBound ), this.el.removeEventListener( "click", this._handleCarouselClickBound ), this.showIndicators && this.$indicators && this.$indicators.find( ".indicator-item" ).each( (function (a, t) {
              a.removeEventListener( "click", e._handleIndicatorClickBound )
            }) ), window.removeEventListener( "resize", this._handleThrottledResizeBound )
          }
        }, {
          key : "_handleCarouselTap", value : function (a) {
            "mousedown" === a.type && e( a.target ).is( "img" ) && a.preventDefault(), this.pressed = !0, this.dragged = !1, this.verticalDragged = !1, this.reference = this._xpos( a ), this.referenceY = this._ypos( a ), this.velocity = this.amplitude = 0, this.frame = this.offset, this.timestamp = Date.now(), clearInterval( this.ticker ), this.ticker = setInterval( this._trackBound, 100 )
          }
        }, {
          key : "_handleCarouselDrag", value : function (e) {
            var a = void 0, t = void 0, i = void 0;
            if (this.pressed) if (a = this._xpos( e ), t = this._ypos( e ), i = this.reference - a, Math.abs( this.referenceY - t ) < 30 && !this.verticalDragged) (i > 2 || i < -2) && (this.dragged = !0, this.reference = a, this._scroll( this.offset + i )); else {
              if (this.dragged) return e.preventDefault(), e.stopPropagation(), !1;
              this.verticalDragged = !0
            }
            if (this.dragged) return e.preventDefault(), e.stopPropagation(), !1
          }
        }, {
          key : "_handleCarouselRelease", value : function (e) {
            if (this.pressed) return this.pressed = !1, clearInterval( this.ticker ), this.target = this.offset, (this.velocity > 10 || this.velocity < -10) && (this.amplitude = .9 * this.velocity, this.target = this.offset + this.amplitude), this.target = Math.round( this.target / this.dim ) * this.dim, this.noWrap && (this.target >= this.dim * (this.count - 1) ? this.target = this.dim * (this.count - 1) : this.target < 0 && (this.target = 0)), this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimationFrame( this._autoScrollBound ), this.dragged && (e.preventDefault(), e.stopPropagation()), !1
          }
        }, {
          key : "_handleCarouselClick", value : function (a) {
            if (this.dragged) return a.preventDefault(), a.stopPropagation(), !1;
            if (!this.options.fullWidth) {
              var t = e( a.target ).closest( ".carousel-item" ).index();
              0 !== this._wrap( this.center ) - t && (a.preventDefault(), a.stopPropagation()), this._cycleTo( t )
            }
          }
        }, {
          key : "_handleIndicatorClick", value : function (a) {
            a.stopPropagation();
            var t = e( a.target ).closest( ".indicator-item" );
            t.length && this._cycleTo( t.index() )
          }
        }, {
          key : "_handleResize", value : function (e) {
            this.options.fullWidth ? (this.itemWidth = this.$el.find( ".carousel-item" ).first().innerWidth(), this.imageHeight = this.$el.find( ".carousel-item.active" ).height(), this.dim = 2 * this.itemWidth + this.options.padding, this.offset = 2 * this.center * this.itemWidth, this.target = this.offset, this._setCarouselHeight( !0 )) : this._scroll()
          }
        }, {
          key : "_setCarouselHeight", value : function (e) {
            var a = this,
              t = this.$el.find( ".carousel-item.active" ).length ? this.$el.find( ".carousel-item.active" ).first() : this.$el.find( ".carousel-item" ).first(),
              i = t.find( "img" ).first();
            if (i.length) if (i[0].complete) {
              var n = i.height();
              if (n > 0) this.$el.css( "height", n + "px" ); else {
                var s = i[0].naturalWidth, o = i[0].naturalHeight, l = this.$el.width() / s * o;
                this.$el.css( "height", l + "px" )
              }
            } else i.one( "load", (function (e, t) {
              a.$el.css( "height", e.offsetHeight + "px" )
            }) ); else if (!e) {
              var r = t.height();
              this.$el.css( "height", r + "px" )
            }
          }
        }, {
          key : "_xpos", value : function (e) {
            return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
          }
        }, {
          key : "_ypos", value : function (e) {
            return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
          }
        }, {
          key : "_wrap", value : function (e) {
            return e >= this.count ? e % this.count : e < 0 ? this._wrap( this.count + e % this.count ) : e
          }
        }, {
          key : "_track", value : function () {
            var e, a, t, i;
            a = (e = Date.now()) - this.timestamp, this.timestamp = e, t = this.offset - this.frame, this.frame = this.offset, i = 1e3 * t / (1 + a), this.velocity = .8 * i + .2 * this.velocity
          }
        }, {
          key : "_autoScroll", value : function () {
            var e = void 0, a = void 0;
            this.amplitude && (e = Date.now() - this.timestamp, (a = this.amplitude * Math.exp( -e / this.options.duration )) > 2 || a < -2 ? (this._scroll( this.target - a ), requestAnimationFrame( this._autoScrollBound )) : this._scroll( this.target ))
          }
        }, {
          key : "_scroll", value : function (a) {
            var t = this;
            this.$el.hasClass( "scrolling" ) || this.el.classList.add( "scrolling" ), null != this.scrollingTimeout && window.clearTimeout( this.scrollingTimeout ), this.scrollingTimeout = window.setTimeout( (function () {
              t.$el.removeClass( "scrolling" )
            }), this.options.duration );
            var i, n, s, o, l = void 0, r = void 0, m = void 0, p = void 0, d = void 0, g = void 0, x = this.center,
              u = 1 / this.options.numVisible;
            if (this.offset = "number" == typeof a ? a : this.offset, this.center = Math.floor( (this.offset + this.dim / 2) / this.dim ), o = -(s = (n = this.offset - this.center * this.dim) < 0 ? 1 : -1) * n * 2 / this.dim, i = this.count >> 1, this.options.fullWidth ? (m = "translateX(0)", g = 1) : (m = "translateX(" + (this.el.clientWidth - this.itemWidth) / 2 + "px) ", m += "translateY(" + (this.el.clientHeight - this.itemHeight) / 2 + "px)", g = 1 - u * o), this.showIndicators) {
              var f = this.center % this.count, h = this.$indicators.find( ".indicator-item.active" );
              h.index() !== f && (h.removeClass( "active" ), this.$indicators.find( ".indicator-item" ).eq( f )[0].classList.add( "active" ))
            }
            if (!this.noWrap || this.center >= 0 && this.center < this.count) {
              r = this.images[this._wrap( this.center )], e( r ).hasClass( "active" ) || (this.$el.find( ".carousel-item" ).removeClass( "active" ), r.classList.add( "active" ));
              var _ = m + " translateX(" + -n / 2 + "px) translateX(" + s * this.options.shift * o * l + "px) translateZ(" + this.options.dist * o + "px)";
              this._updateItemStyle( r, g, 0, _ )
            }
            for (l = 1; l <= i; ++l) {
              if (this.options.fullWidth ? (p = this.options.dist, d = l === i && n < 0 ? 1 - o : 1) : (p = this.options.dist * (2 * l + o * s), d = 1 - u * (2 * l + o * s)), !this.noWrap || this.center + l < this.count) {
                r = this.images[this._wrap( this.center + l )];
                var c = m + " translateX(" + (this.options.shift + (this.dim * l - n) / 2) + "px) translateZ(" + p + "px)";
                this._updateItemStyle( r, d, -l, c )
              }
              if (this.options.fullWidth ? (p = this.options.dist, d = l === i && n > 0 ? 1 - o : 1) : (p = this.options.dist * (2 * l - o * s), d = 1 - u * (2 * l - o * s)), !this.noWrap || this.center - l >= 0) {
                r = this.images[this._wrap( this.center - l )];
                var T = m + " translateX(" + (-this.options.shift + (-this.dim * l - n) / 2) + "px) translateZ(" + p + "px)";
                this._updateItemStyle( r, d, -l, T )
              }
            }
            if (!this.noWrap || this.center >= 0 && this.center < this.count) {
              r = this.images[this._wrap( this.center )];
              var w = m + " translateX(" + -n / 2 + "px) translateX(" + s * this.options.shift * o + "px) translateZ(" + this.options.dist * o + "px)";
              this._updateItemStyle( r, g, 0, w )
            }
            var E = this.$el.find( ".carousel-item" ).eq( this._wrap( this.center ) );
            x !== this.center && "function" == typeof this.options.onCycleTo && this.options.onCycleTo.call( this, E[0], this.dragged ), "function" == typeof this.oneTimeCallback && (this.oneTimeCallback.call( this, E[0], this.dragged ), this.oneTimeCallback = null)
          }
        }, {
          key : "_updateItemStyle", value : function (e, a, t, i) {
            e.style[this.xform] = i, e.style.zIndex = t, e.style.opacity = a, e.style.visibility = "visible"
          }
        }, {
          key : "_cycleTo", value : function (e, a) {
            var t = this.center % this.count - e;
            this.noWrap || (t < 0 ? Math.abs( t + this.count ) < Math.abs( t ) && (t += this.count) : t > 0 && Math.abs( t - this.count ) < t && (t -= this.count)), this.target = this.dim * Math.round( this.offset / this.dim ), t < 0 ? this.target += this.dim * Math.abs( t ) : t > 0 && (this.target -= this.dim * t), "function" == typeof a && (this.oneTimeCallback = a), this.offset !== this.target && (this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimationFrame( this._autoScrollBound ))
          }
        }, {
          key : "next", value : function (e) {
            (void 0 === e || isNaN( e )) && (e = 1);
            var a = this.center + e;
            if (a >= this.count || a < 0) {
              if (this.noWrap) return;
              a = this._wrap( a )
            }
            this._cycleTo( a )
          }
        }, {
          key : "prev", value : function (e) {
            (void 0 === e || isNaN( e )) && (e = 1);
            var a = this.center - e;
            if (a >= this.count || a < 0) {
              if (this.noWrap) return;
              a = this._wrap( a )
            }
            this._cycleTo( a )
          }
        }, {
          key : "set", value : function (e, a) {
            if ((void 0 === e || isNaN( e )) && (e = 0), e > this.count || e < 0) {
              if (this.noWrap) return;
              e = this._wrap( e )
            }
            this._cycleTo( e, a )
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( i.__proto__ || Object.getPrototypeOf( i ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Carousel
          }
        }, {
          key : "defaults", get : function () {
            return a
          }
        }] ), i
      }( m );
      M.Carousel = t, M.jQueryLoaded && M.initializeJqueryWrapper( t, "carousel", "M_Carousel" )
    }( cash ), function (e) {
      "use strict";
      var a = {onOpen : void 0, onClose : void 0}, t = function (t) {
        function i(a, t) {
          r( this, i );
          var n = o( this, (i.__proto__ || Object.getPrototypeOf( i )).call( this, i, a, t ) );
          return n.el.M_TapTarget = n, n.options = e.extend( {}, i.defaults, t ), n.isOpen = !1, n.$origin = e( "#" + n.$el.attr( "data-target" ) ), n._setup(), n._calculatePositioning(), n._setupEventHandlers(), n
        }

        return l( i, t ), s( i, [{
          key : "destroy", value : function () {
            this._removeEventHandlers(), this.el.TapTarget = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            this._handleDocumentClickBound = this._handleDocumentClick.bind( this ), this._handleTargetClickBound = this._handleTargetClick.bind( this ), this._handleOriginClickBound = this._handleOriginClick.bind( this ), this.el.addEventListener( "click", this._handleTargetClickBound ), this.originEl.addEventListener( "click", this._handleOriginClickBound );
            var e = M.throttle( this._handleResize, 200 );
            this._handleThrottledResizeBound = e.bind( this ), window.addEventListener( "resize", this._handleThrottledResizeBound )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            this.el.removeEventListener( "click", this._handleTargetClickBound ), this.originEl.removeEventListener( "click", this._handleOriginClickBound ), window.removeEventListener( "resize", this._handleThrottledResizeBound )
          }
        }, {
          key : "_handleTargetClick", value : function (e) {
            this.open()
          }
        }, {
          key : "_handleOriginClick", value : function (e) {
            this.close()
          }
        }, {
          key : "_handleResize", value : function (e) {
            this._calculatePositioning()
          }
        }, {
          key : "_handleDocumentClick", value : function (a) {
            e( a.target ).closest( ".tap-target-wrapper" ).length || (this.close(), a.preventDefault(), a.stopPropagation())
          }
        }, {
          key : "_setup", value : function () {
            this.wrapper = this.$el.parent()[0], this.waveEl = e( this.wrapper ).find( ".tap-target-wave" )[0], this.originEl = e( this.wrapper ).find( ".tap-target-origin" )[0], this.contentEl = this.$el.find( ".tap-target-content" )[0], e( this.wrapper ).hasClass( ".tap-target-wrapper" ) || (this.wrapper = document.createElement( "div" ), this.wrapper.classList.add( "tap-target-wrapper" ), this.$el.before( e( this.wrapper ) ), this.wrapper.append( this.el )), this.contentEl || (this.contentEl = document.createElement( "div" ), this.contentEl.classList.add( "tap-target-content" ), this.$el.append( this.contentEl )), this.waveEl || (this.waveEl = document.createElement( "div" ), this.waveEl.classList.add( "tap-target-wave" ), this.originEl || (this.originEl = this.$origin.clone( !0, !0 ), this.originEl.addClass( "tap-target-origin" ), this.originEl.removeAttr( "id" ), this.originEl.removeAttr( "style" ), this.originEl = this.originEl[0], this.waveEl.append( this.originEl )), this.wrapper.append( this.waveEl ))
          }
        }, {
          key : "_calculatePositioning", value : function () {
            var a = "fixed" === this.$origin.css( "position" );
            if (!a) for (var t = this.$origin.parents(), i = 0; i < t.length && !(a = "fixed" == e( t[i] ).css( "position" )); i++) ;
            var n = this.$origin.outerWidth(), s = this.$origin.outerHeight(),
              o = a ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top,
              l = a ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left,
              r = window.innerWidth, m = window.innerHeight, p = r / 2, d = m / 2, g = l <= p, x = l > p, u = o <= d,
              f = o > d, h = l >= .25 * r && l <= .75 * r, _ = this.$el.outerWidth(), c = this.$el.outerHeight(),
              T = o + s / 2 - c / 2, w = l + n / 2 - _ / 2, E = a ? "fixed" : "absolute", y = h ? _ : _ / 2 + n,
              v = c / 2, b = u ? c / 2 : 0, k = g && !h ? _ / 2 - n : 0, j = n, A = f ? "bottom" : "top", I = 2 * n,
              S = I, C = c / 2 - S / 2, L = _ / 2 - I / 2, O = {};
            O.top = u ? T + "px" : "", O.right = x ? r - w - _ + "px" : "", O.bottom = f ? m - T - c + "px" : "", O.left = g ? w + "px" : "", O.position = E, e( this.wrapper ).css( O ), e( this.contentEl ).css( {
              width         : y + "px",
              height        : v + "px",
              top           : b + "px",
              right         : "0px",
              bottom        : "0px",
              left          : k + "px",
              padding       : j + "px",
              verticalAlign : A
            } ), e( this.waveEl ).css( {top : C + "px", left : L + "px", width : I + "px", height : S + "px"} )
          }
        }, {
          key : "open", value : function () {
            this.isOpen || ("function" == typeof this.options.onOpen && this.options.onOpen.call( this, this.$origin[0] ), this.isOpen = !0, this.wrapper.classList.add( "open" ), document.body.addEventListener( "click", this._handleDocumentClickBound, !0 ), document.body.addEventListener( "touchend", this._handleDocumentClickBound ))
          }
        }, {
          key : "close", value : function () {
            this.isOpen && ("function" == typeof this.options.onClose && this.options.onClose.call( this, this.$origin[0] ), this.isOpen = !1, this.wrapper.classList.remove( "open" ), document.body.removeEventListener( "click", this._handleDocumentClickBound, !0 ), document.body.removeEventListener( "touchend", this._handleDocumentClickBound ))
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( i.__proto__ || Object.getPrototypeOf( i ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_TapTarget
          }
        }, {
          key : "defaults", get : function () {
            return a
          }
        }] ), i
      }( m );
      M.TapTarget = t, M.jQueryLoaded && M.initializeJqueryWrapper( t, "tapTarget", "M_TapTarget" )
    }( cash ), function (e) {
      "use strict";
      var a = {classes : "", dropdownOptions : {}}, t = function (t) {
        function i(a, t) {
          r( this, i );
          var n = o( this, (i.__proto__ || Object.getPrototypeOf( i )).call( this, i, a, t ) );
          return n.$el.hasClass( "browser-default" ) ? o( n ) : (n.el.M_FormSelect = n, n.options = e.extend( {}, i.defaults, t ), n.isMultiple = n.$el.prop( "multiple" ), n.el.tabIndex = -1, n._keysSelected = {}, n._valueDict = {}, n._setupDropdown(), n._setupEventHandlers(), n)
        }

        return l( i, t ), s( i, [{
          key : "destroy", value : function () {
            this._removeEventHandlers(), this._removeDropdown(), this.el.M_FormSelect = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            var a = this;
            this._handleSelectChangeBound = this._handleSelectChange.bind( this ), this._handleOptionClickBound = this._handleOptionClick.bind( this ), this._handleInputClickBound = this._handleInputClick.bind( this ), e( this.dropdownOptions ).find( "li:not(.optgroup)" ).each( (function (e) {
              e.addEventListener( "click", a._handleOptionClickBound )
            }) ), this.el.addEventListener( "change", this._handleSelectChangeBound ), this.input.addEventListener( "click", this._handleInputClickBound )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            var a = this;
            e( this.dropdownOptions ).find( "li:not(.optgroup)" ).each( (function (e) {
              e.removeEventListener( "click", a._handleOptionClickBound )
            }) ), this.el.removeEventListener( "change", this._handleSelectChangeBound ), this.input.removeEventListener( "click", this._handleInputClickBound )
          }
        }, {
          key : "_handleSelectChange", value : function (e) {
            this._setValueToInput()
          }
        }, {
          key : "_handleOptionClick", value : function (a) {
            a.preventDefault();
            var t = e( a.target ).closest( "li" )[0], i = t.id;
            if (!e( t ).hasClass( "disabled" ) && !e( t ).hasClass( "optgroup" ) && i.length) {
              var n = !0;
              if (this.isMultiple) {
                var s = e( this.dropdownOptions ).find( "li.disabled.selected" );
                s.length && (s.removeClass( "selected" ), s.find( 'input[type="checkbox"]' ).prop( "checked", !1 ), this._toggleEntryFromArray( s[0].id )), n = this._toggleEntryFromArray( i )
              } else e( this.dropdownOptions ).find( "li" ).removeClass( "selected" ), e( t ).toggleClass( "selected", n );
              e( this._valueDict[i].el ).prop( "selected" ) !== n && (e( this._valueDict[i].el ).prop( "selected", n ), this.$el.trigger( "change" ))
            }
            a.stopPropagation()
          }
        }, {
          key : "_handleInputClick", value : function () {
            this.dropdown && this.dropdown.isOpen && (this._setValueToInput(), this._setSelectedStates())
          }
        }, {
          key : "_setupDropdown", value : function () {
            var a = this;
            this.wrapper = document.createElement( "div" ), e( this.wrapper ).addClass( "select-wrapper " + this.options.classes ), this.$el.before( e( this.wrapper ) ), this.wrapper.appendChild( this.el ), this.el.disabled && this.wrapper.classList.add( "disabled" ), this.$selectOptions = this.$el.children( "option, optgroup" ), this.dropdownOptions = document.createElement( "ul" ), this.dropdownOptions.id = "select-options-" + M.guid(), e( this.dropdownOptions ).addClass( "dropdown-content select-dropdown " + (this.isMultiple ? "multiple-select-dropdown" : "") ), this.$selectOptions.length && this.$selectOptions.each( (function (t) {
              if (e( t ).is( "option" )) {
                var i = void 0;
                i = a.isMultiple ? a._appendOptionWithIcon( a.$el, t, "multiple" ) : a._appendOptionWithIcon( a.$el, t ), a._addOptionToValueDict( t, i )
              } else if (e( t ).is( "optgroup" )) {
                var n = e( t ).children( "option" );
                e( a.dropdownOptions ).append( e( '<li class="optgroup"><span>' + t.getAttribute( "label" ) + "</span></li>" )[0] ), n.each( (function (e) {
                  var t = a._appendOptionWithIcon( a.$el, e, "optgroup-option" );
                  a._addOptionToValueDict( e, t )
                }) )
              }
            }) ), this.$el.after( this.dropdownOptions ), this.input = document.createElement( "input" ), e( this.input ).addClass( "select-dropdown dropdown-trigger" ), this.input.setAttribute( "type", "text" ), this.input.setAttribute( "readonly", "true" ), this.input.setAttribute( "data-target", this.dropdownOptions.id ), this.el.disabled && e( this.input ).prop( "disabled", "true" ), this.$el.before( this.input ), this._setValueToInput();
            var t = e( '<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>' );
            if (this.$el.before( t[0] ), !this.el.disabled) {
              var i = e.extend( {}, this.options.dropdownOptions );
              i.onOpenEnd = function (t) {
                var i = e( a.dropdownOptions ).find( ".selected" ).first();
                if (a.dropdown.isScrollable && i.length) {
                  var n = i[0].getBoundingClientRect().top - a.dropdownOptions.getBoundingClientRect().top;
                  n -= a.dropdownOptions.clientHeight / 2, a.dropdownOptions.scrollTop = n
                }
              }, this.isMultiple && (i.closeOnClick = !1), this.dropdown = M.Dropdown.init( this.input, i )
            }
            this._setSelectedStates()
          }
        }, {
          key : "_addOptionToValueDict", value : function (e, a) {
            var t = Object.keys( this._valueDict ).length, i = this.dropdownOptions.id + t, n = {};
            a.id = i, n.el = e, n.optionEl = a, this._valueDict[i] = n
          }
        }, {
          key : "_removeDropdown", value : function () {
            e( this.wrapper ).find( ".caret" ).remove(), e( this.input ).remove(), e( this.dropdownOptions ).remove(), e( this.wrapper ).before( this.$el ), e( this.wrapper ).remove()
          }
        }, {
          key : "_appendOptionWithIcon", value : function (a, t, i) {
            var n = t.disabled ? "disabled " : "", s = "optgroup-option" === i ? "optgroup-option " : "",
              o = this.isMultiple ? '<label><input type="checkbox"' + n + '"/><span>' + t.innerHTML + "</span></label>" : t.innerHTML,
              l = e( "<li></li>" ), r = e( "<span></span>" );
            r.html( o ), l.addClass( n + " " + s ), l.append( r );
            var m = t.getAttribute( "data-icon" );
            if (m) {
              var p = e( '<img alt="" src="' + m + '">' );
              l.prepend( p )
            }
            return e( this.dropdownOptions ).append( l[0] ), l[0]
          }
        }, {
          key : "_toggleEntryFromArray", value : function (a) {
            var t = !this._keysSelected.hasOwnProperty( a ), i = e( this._valueDict[a].optionEl );
            return t ? this._keysSelected[a] = !0 : delete this._keysSelected[a], i.toggleClass( "selected", t ), i.find( 'input[type="checkbox"]' ).prop( "checked", t ), i.prop( "selected", t ), t
          }
        }, {
          key : "_setValueToInput", value : function () {
            var a = [];
            if (this.$el.find( "option" ).each( (function (t) {
              if (e( t ).prop( "selected" )) {
                var i = e( t ).text();
                a.push( i )
              }
            }) ), !a.length) {
              var t = this.$el.find( "option:disabled" ).eq( 0 );
              t.length && "" === t[0].value && a.push( t.text() )
            }
            this.input.value = a.join( ", " )
          }
        }, {
          key : "_setSelectedStates", value : function () {
            for (var a in this._keysSelected = {}, this._valueDict) {
              var t = this._valueDict[a], i = e( t.el ).prop( "selected" );
              e( t.optionEl ).find( 'input[type="checkbox"]' ).prop( "checked", i ), i ? (this._activateOption( e( this.dropdownOptions ), e( t.optionEl ) ), this._keysSelected[a] = !0) : e( t.optionEl ).removeClass( "selected" )
            }
          }
        }, {
          key : "_activateOption", value : function (a, t) {
            t && (this.isMultiple || a.find( "li.selected" ).removeClass( "selected" ), e( t ).addClass( "selected" ))
          }
        }, {
          key : "getSelectedValues", value : function () {
            var e = [];
            for (var a in this._keysSelected) e.push( this._valueDict[a].el.value );
            return e
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( i.__proto__ || Object.getPrototypeOf( i ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_FormSelect
          }
        }, {
          key : "defaults", get : function () {
            return a
          }
        }] ), i
      }( m );
      M.FormSelect = t, M.jQueryLoaded && M.initializeJqueryWrapper( t, "formSelect", "M_FormSelect" )
    }( cash ), function (e, a) {
      "use strict";
      var t = {}, i = function (i) {
        function m(a, t) {
          r( this, m );
          var i = o( this, (m.__proto__ || Object.getPrototypeOf( m )).call( this, m, a, t ) );
          return i.el.M_Range = i, i.options = e.extend( {}, m.defaults, t ), i._mousedown = !1, i._setupThumb(), i._setupEventHandlers(), i
        }

        return l( m, i ), s( m, [{
          key : "destroy", value : function () {
            this._removeEventHandlers(), this._removeThumb(), this.el.M_Range = void 0
          }
        }, {
          key : "_setupEventHandlers", value : function () {
            this._handleRangeChangeBound = this._handleRangeChange.bind( this ), this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind( this ), this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind( this ), this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind( this ), this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind( this ), this.el.addEventListener( "change", this._handleRangeChangeBound ), this.el.addEventListener( "mousedown", this._handleRangeMousedownTouchstartBound ), this.el.addEventListener( "touchstart", this._handleRangeMousedownTouchstartBound ), this.el.addEventListener( "input", this._handleRangeInputMousemoveTouchmoveBound ), this.el.addEventListener( "mousemove", this._handleRangeInputMousemoveTouchmoveBound ), this.el.addEventListener( "touchmove", this._handleRangeInputMousemoveTouchmoveBound ), this.el.addEventListener( "mouseup", this._handleRangeMouseupTouchendBound ), this.el.addEventListener( "touchend", this._handleRangeMouseupTouchendBound ), this.el.addEventListener( "blur", this._handleRangeBlurMouseoutTouchleaveBound ), this.el.addEventListener( "mouseout", this._handleRangeBlurMouseoutTouchleaveBound ), this.el.addEventListener( "touchleave", this._handleRangeBlurMouseoutTouchleaveBound )
          }
        }, {
          key : "_removeEventHandlers", value : function () {
            this.el.removeEventListener( "change", this._handleRangeChangeBound ), this.el.removeEventListener( "mousedown", this._handleRangeMousedownTouchstartBound ), this.el.removeEventListener( "touchstart", this._handleRangeMousedownTouchstartBound ), this.el.removeEventListener( "input", this._handleRangeInputMousemoveTouchmoveBound ), this.el.removeEventListener( "mousemove", this._handleRangeInputMousemoveTouchmoveBound ), this.el.removeEventListener( "touchmove", this._handleRangeInputMousemoveTouchmoveBound ), this.el.removeEventListener( "mouseup", this._handleRangeMouseupTouchendBound ), this.el.removeEventListener( "touchend", this._handleRangeMouseupTouchendBound ), this.el.removeEventListener( "blur", this._handleRangeBlurMouseoutTouchleaveBound ), this.el.removeEventListener( "mouseout", this._handleRangeBlurMouseoutTouchleaveBound ), this.el.removeEventListener( "touchleave", this._handleRangeBlurMouseoutTouchleaveBound )
          }
        }, {
          key : "_handleRangeChange", value : function () {
            e( this.value ).html( this.$el.val() ), e( this.thumb ).hasClass( "active" ) || this._showRangeBubble();
            var a = this._calcRangeOffset();
            e( this.thumb ).addClass( "active" ).css( "left", a + "px" )
          }
        }, {
          key : "_handleRangeMousedownTouchstart", value : function (a) {
            if (e( this.value ).html( this.$el.val() ), this._mousedown = !0, this.$el.addClass( "active" ), e( this.thumb ).hasClass( "active" ) || this._showRangeBubble(), "input" !== a.type) {
              var t = this._calcRangeOffset();
              e( this.thumb ).addClass( "active" ).css( "left", t + "px" )
            }
          }
        }, {
          key : "_handleRangeInputMousemoveTouchmove", value : function () {
            if (this._mousedown) {
              e( this.thumb ).hasClass( "active" ) || this._showRangeBubble();
              var a = this._calcRangeOffset();
              e( this.thumb ).addClass( "active" ).css( "left", a + "px" ), e( this.value ).html( this.$el.val() )
            }
          }
        }, {
          key : "_handleRangeMouseupTouchend", value : function () {
            this._mousedown = !1, this.$el.removeClass( "active" )
          }
        }, {
          key : "_handleRangeBlurMouseoutTouchleave", value : function () {
            if (!this._mousedown) {
              var t = 7 + parseInt( this.$el.css( "padding-left" ) ) + "px";
              e( this.thumb ).hasClass( "active" ) && (a.remove( this.thumb ), a( {
                targets    : this.thumb,
                height     : 0,
                width      : 0,
                top        : 10,
                easing     : "easeOutQuad",
                marginLeft : t,
                duration   : 100
              } )), e( this.thumb ).removeClass( "active" )
            }
          }
        }, {
          key : "_setupThumb", value : function () {
            this.thumb = document.createElement( "span" ), this.value = document.createElement( "span" ), e( this.thumb ).addClass( "thumb" ), e( this.value ).addClass( "value" ), e( this.thumb ).append( this.value ), this.$el.after( this.thumb )
          }
        }, {
          key : "_removeThumb", value : function () {
            e( this.thumb ).remove()
          }
        }, {
          key : "_showRangeBubble", value : function () {
            var t = -7 + parseInt( e( this.thumb ).parent().css( "padding-left" ) ) + "px";
            a.remove( this.thumb ), a( {
              targets    : this.thumb,
              height     : 30,
              width      : 30,
              top        : -30,
              marginLeft : t,
              duration   : 300,
              easing     : "easeOutQuint"
            } )
          }
        }, {
          key : "_calcRangeOffset", value : function () {
            var e = this.$el.width() - 15, a = parseFloat( this.$el.attr( "max" ) ) || 100,
              t = parseFloat( this.$el.attr( "min" ) ) || 0;
            return (parseFloat( this.$el.val() ) - t) / (a - t) * e
          }
        }], [{
          key : "init", value : function (e, a) {
            return n( m.__proto__ || Object.getPrototypeOf( m ), "init", this ).call( this, this, e, a )
          }
        }, {
          key : "getInstance", value : function (e) {
            return (e.jquery ? e[0] : e).M_Range
          }
        }, {
          key : "defaults", get : function () {
            return t
          }
        }] ), m
      }( m );
      M.Range = i, M.jQueryLoaded && M.initializeJqueryWrapper( i, "range", "M_Range" ), i.init( e( "input[type=range]" ) )
    }( cash, M.anime )
  }).call( this, t( 57 ) )
}, function (e, a, t) {
  "use strict";
  var i = {}.propertyIsEnumerable, n = Object.getOwnPropertyDescriptor, s = n && !i.call( {1 : 2}, 1 );
  a.f = s ? function (e) {
    var a = n( this, e );
    return !!a && a.enumerable
  } : i
}, function (e, a, t) {
  var i = t( 1 ), n = t( 37 ), s = i.WeakMap;
  e.exports = "function" == typeof s && /native code/.test( n( s ) )
}, function (e, a, t) {
  var i = t( 9 ), n = t( 99 ), s = t( 33 ), o = t( 14 );
  e.exports = function (e, a) {
    for (var t = n( a ), l = o.f, r = s.f, m = 0; m < t.length; m++) {
      var p = t[m];
      i( e, p ) || l( e, p, r( a, p ) )
    }
  }
}, function (e, a, t) {
  var i = t( 21 ), n = t( 101 ), s = t( 102 ), o = t( 8 );
  e.exports = i( "Reflect", "ownKeys" ) || function (e) {
    var a = n.f( o( e ) ), t = s.f;
    return t ? a.concat( t( e ) ) : a
  }
}, function (e, a, t) {
  var i = t( 1 );
  e.exports = i
}, function (e, a, t) {
  var i = t( 62 ), n = t( 44 ).concat( "length", "prototype" );
  a.f = Object.getOwnPropertyNames || function (e) {
    return i( e, n )
  }
}, function (e, a) {
  a.f = Object.getOwnPropertySymbols
}, function (e, a, t) {
  var i = t( 65 );
  e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function (e, a, t) {
  var i = t( 11 ), n = t( 14 ), s = t( 8 ), o = t( 105 );
  e.exports = i ? Object.defineProperties : function (e, a) {
    s( e );
    for (var t, i = o( a ), l = i.length, r = 0; l > r;) n.f( e, t = i[r++], a[t] );
    return e
  }
}, function (e, a, t) {
  var i = t( 62 ), n = t( 44 );
  e.exports = Object.keys || function (e) {
    return i( e, n )
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 52 ), n = t( 71 );
  e.exports = i ? {}.toString : function () {
    return "[object " + n( this ) + "]"
  }
}, function (e, a, t) {
  var i = t( 1 );
  e.exports = i.Promise
}, function (e, a, t) {
  var i = t( 17 );
  e.exports = function (e, a, t) {
    for (var n in a) i( e, n, a[n], t );
    return e
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 21 ), n = t( 14 ), s = t( 0 ), o = t( 11 ), l = s( "species" );
  e.exports = function (e) {
    var a = i( e ), t = n.f;
    o && a && !a[l] && t( a, l, {
      configurable : !0, get : function () {
        return this
      }
    } )
  }
}, function (e, a) {
  e.exports = function (e, a, t) {
    if (!(e instanceof a)) throw TypeError( "Incorrect " + (t ? t + " " : "") + "invocation" );
    return e
  }
}, function (e, a, t) {
  var i = t( 8 ), n = t( 72 ), s = t( 10 ), o = t( 28 ), l = t( 73 ), r = t( 74 ), m = function (e, a) {
    this.stopped = e, this.result = a
  };
  (e.exports = function (e, a, t, p, d) {
    var g, x, u, f, h, _, c, T = o( a, t, p ? 2 : 1 );
    if (d) g = e; else {
      if ("function" != typeof(x = l( e ))) throw TypeError( "Target is not iterable" );
      if (n( x )) {
        for (u = 0, f = s( e.length ); f > u; u++) if ((h = p ? T( i( c = e[u] )[0], c[1] ) : T( e[u] )) && h instanceof m) return h;
        return new m( !1 )
      }
      g = x.call( e )
    }
    for (_ = g.next; !(c = _.call( g )).done;) if ("object" == typeof(h = r( g, T, c.value, p )) && h && h instanceof m) return h;
    return new m( !1 )
  }).stop = function (e) {
    return new m( !0, e )
  }
}, function (e, a, t) {
  var i, n, s, o, l, r, m, p, d = t( 1 ), g = t( 33 ).f, x = t( 12 ), u = t( 77 ).set, f = t( 78 ),
    h = d.MutationObserver || d.WebKitMutationObserver, _ = d.process, c = d.Promise, T = "process" == x( _ ),
    w = g( d, "queueMicrotask" ), E = w && w.value;
  E || (i = function () {
    var e, a;
    for (T && (e = _.domain) && e.exit(); n;) {
      a = n.fn, n = n.next;
      try {
        a()
      } catch (e) {
        throw n ? o() : s = void 0, e
      }
    }
    s = void 0, e && e.enter()
  }, T ? o = function () {
    _.nextTick( i )
  } : h && !f ? (l = !0, r = document.createTextNode( "" ), new h( i ).observe( r, {characterData : !0} ), o = function () {
    r.data = l = !l
  }) : c && c.resolve ? (m = c.resolve( void 0 ), p = m.then, o = function () {
    p.call( m, i )
  }) : o = function () {
    u.call( d, i )
  }), e.exports = E || function (e) {
    var a = {fn : e, next : void 0};
    s && (s.next = a), n || (n = a, o()), s = a
  }
}, function (e, a, t) {
  var i = t( 8 ), n = t( 7 ), s = t( 79 );
  e.exports = function (e, a) {
    if (i( e ), n( a ) && a.constructor === e) return a;
    var t = s.f( e );
    return (0, t.resolve)( a ), t.promise
  }
}, function (e, a, t) {
  var i = t( 1 );
  e.exports = function (e, a) {
    var t = i.console;
    t && t.error && (1 === arguments.length ? t.error( e ) : t.error( e, a ))
  }
}, function (e, a) {
  e.exports = function (e) {
    try {
      return {error : !1, value : e()}
    } catch (e) {
      return {error : !0, value : e}
    }
  }
}, function (e, a, t) {
  var i = t( 81 );
  e.exports = function (e) {
    if (i( e )) throw TypeError( "The method doesn't accept regular expressions" );
    return e
  }
}, function (e, a, t) {
  var i = t( 0 )( "match" );
  e.exports = function (e) {
    var a = /./;
    try {
      "/./"[e]( a )
    } catch (t) {
      try {
        return a[i] = !1, "/./"[e]( a )
      } catch (e) {
      }
    }
    return !1
  }
}, function (e, a) {
  e.exports = {
    CSSRuleList          : 0,
    CSSStyleDeclaration  : 0,
    CSSValueList         : 0,
    ClientRectList       : 0,
    DOMRectList          : 0,
    DOMStringList        : 0,
    DOMTokenList         : 1,
    DataTransferItemList : 0,
    FileList             : 0,
    HTMLAllCollection    : 0,
    HTMLCollection       : 0,
    HTMLFormElement      : 0,
    HTMLSelectElement    : 0,
    MediaList            : 0,
    MimeTypeArray        : 0,
    NamedNodeMap         : 0,
    NodeList             : 1,
    PaintRequestList     : 0,
    Plugin               : 0,
    PluginArray          : 0,
    SVGLengthList        : 0,
    SVGNumberList        : 0,
    SVGPathSegList       : 0,
    SVGPointList         : 0,
    SVGStringList        : 0,
    SVGTransformList     : 0,
    SourceBufferList     : 0,
    StyleSheetList       : 0,
    TextTrackCueList     : 0,
    TextTrackList        : 0,
    TouchList            : 0
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 2 ), n = t( 41 ).indexOf, s = t( 22 ), o = t( 16 ), l = [].indexOf,
    r = !!l && 1 / [1].indexOf( 1, -0 ) < 0, m = s( "indexOf" ), p = o( "indexOf", {ACCESSORS : !0, 1 : 0} );
  i( {target : "Array", proto : !0, forced : r || !m || !p}, {
    indexOf : function (e) {
      return r ? l.apply( this, arguments ) || 0 : n( this, e, arguments.length > 1 ? arguments[1] : void 0 )
    }
  } )
}, function (e, a, t) {
  "use strict";
  var i = t( 8 );
  e.exports = function () {
    var e = i( this ), a = "";
    return e.global && (a += "g"), e.ignoreCase && (a += "i"), e.multiline && (a += "m"), e.dotAll && (a += "s"), e.unicode && (a += "u"), e.sticky && (a += "y"), a
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 3 );

  function n(e, a) {
    return RegExp( e, a )
  }

  a.UNSUPPORTED_Y = i( (function () {
    var e = n( "a", "y" );
    return e.lastIndex = 2, null != e.exec( "abcd" )
  }) ), a.BROKEN_CARET = i( (function () {
    var e = n( "^r", "gy" );
    return e.lastIndex = 2, null != e.exec( "str" )
  }) )
}, function (e, a, t) {
  "use strict";
  t( 31 );
  var i = t( 17 ), n = t( 3 ), s = t( 0 ), o = t( 32 ), l = t( 13 ), r = s( "species" ), m = !n( (function () {
      var e = /./;
      return e.exec = function () {
        var e = [];
        return e.groups = {a : "7"}, e
      }, "7" !== "".replace( e, "$<a>" )
    }) ), p = "$0" === "a".replace( /./, "$0" ), d = s( "replace" ), g = !!/./[d] && "" === /./[d]( "a", "$0" ),
    x = !n( (function () {
      var e = /(?:)/, a = e.exec;
      e.exec = function () {
        return a.apply( this, arguments )
      };
      var t = "ab".split( e );
      return 2 !== t.length || "a" !== t[0] || "b" !== t[1]
    }) );
  e.exports = function (e, a, t, d) {
    var u = s( e ), f = !n( (function () {
      var a = {};
      return a[u] = function () {
        return 7
      }, 7 != ""[e]( a )
    }) ), h = f && !n( (function () {
      var a = !1, t = /a/;
      return "split" === e && ((t = {}).constructor = {}, t.constructor[r] = function () {
        return t
      }, t.flags = "", t[u] = /./[u]), t.exec = function () {
        return a = !0, null
      }, t[u]( "" ), !a
    }) );
    if (!f || !h || "replace" === e && (!m || !p || g) || "split" === e && !x) {
      var _ = /./[u], c = t( u, ""[e], (function (e, a, t, i, n) {
        return a.exec === o ? f && !n ? {done : !0, value : _.call( a, t, i )} : {
          done  : !0,
          value : e.call( t, a, i )
        } : {done : !1}
      }), {REPLACE_KEEPS_$0 : p, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE : g} ), T = c[0], w = c[1];
      i( String.prototype, e, T ), i( RegExp.prototype, u, 2 == a ? function (e, a) {
        return w.call( e, this, a )
      } : function (e) {
        return w.call( e, this )
      } )
    }
    d && l( RegExp.prototype[u], "sham", !0 )
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 83 ).charAt;
  e.exports = function (e, a, t) {
    return a + (t ? i( e, a ).length : 1)
  }
}, function (e, a, t) {
  var i = t( 12 ), n = t( 32 );
  e.exports = function (e, a) {
    var t = e.exec;
    if ("function" == typeof t) {
      var s = t.call( e, a );
      if ("object" != typeof s) throw TypeError( "RegExp exec method returned something other than an Object or null" );
      return s
    }
    if ("RegExp" !== i( e )) throw TypeError( "RegExp#exec called on incompatible receiver" );
    return n.call( e, a )
  }
}, function (e, a, t) {
  var i = t( 2 ), n = t( 126 );
  i( {
    target : "Array", stat : !0, forced : !t( 75 )( (function (e) {
      Array.from( e )
    }) )
  }, {from : n} )
}, function (e, a, t) {
  "use strict";
  var i = t( 28 ), n = t( 15 ), s = t( 74 ), o = t( 72 ), l = t( 10 ), r = t( 46 ), m = t( 73 );
  e.exports = function (e) {
    var a, t, p, d, g, x, u = n( e ), f = "function" == typeof this ? this : Array, h = arguments.length,
      _ = h > 1 ? arguments[1] : void 0, c = void 0 !== _, T = m( u ), w = 0;
    if (c && (_ = i( _, h > 2 ? arguments[2] : void 0, 2 )), null == T || f == Array && o( T )) for (t = new f( a = l( u.length ) ); a > w; w++) x = c ? _( u[w], w ) : u[w], r( t, w, x ); else for (g = (d = T.call( u )).next, t = new f; !(p = g.call( d )).done; w++) x = c ? s( d, _, [p.value, w], !0 ) : p.value, r( t, w, x );
    return t.length = w, t
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 2 ), n = t( 18 ), s = t( 15 ), o = t( 3 ), l = t( 22 ), r = [], m = r.sort, p = o( (function () {
    r.sort( void 0 )
  }) ), d = o( (function () {
    r.sort( null )
  }) ), g = l( "sort" );
  i( {target : "Array", proto : !0, forced : p || !d || !g}, {
    sort : function (e) {
      return void 0 === e ? m.call( s( this ) ) : m.call( s( this ), n( e ) )
    }
  } )
}, function (e, a, t) {
  "use strict";
  var i = t( 83 ).charAt, n = t( 38 ), s = t( 129 ), o = n.set, l = n.getterFor( "String Iterator" );
  s( String, "String", (function (e) {
    o( this, {type : "String Iterator", string : String( e ), index : 0} )
  }), (function () {
    var e, a = l( this ), t = a.string, n = a.index;
    return n >= t.length ? {value : void 0, done : !0} : (e = i( t, n ), a.index += e.length, {value : e, done : !1})
  }) )
}, function (e, a, t) {
  "use strict";
  var i = t( 2 ), n = t( 130 ), s = t( 86 ), o = t( 132 ), l = t( 54 ), r = t( 13 ), m = t( 17 ), p = t( 0 ),
    d = t( 26 ), g = t( 29 ), x = t( 85 ), u = x.IteratorPrototype, f = x.BUGGY_SAFARI_ITERATORS, h = p( "iterator" ),
    _ = function () {
      return this
    };
  e.exports = function (e, a, t, p, x, c, T) {
    n( t, a, p );
    var w, E, M, y = function (e) {
        if (e === x && A) return A;
        if (!f && e in k) return k[e];
        switch (e) {
          case"keys":
          case"values":
          case"entries":
            return function () {
              return new t( this, e )
            }
        }
        return function () {
          return new t( this )
        }
      }, v = a + " Iterator", b = !1, k = e.prototype, j = k[h] || k["@@iterator"] || x && k[x], A = !f && j || y( x ),
      I = "Array" == a && k.entries || j;
    if (I && (w = s( I.call( new e ) ), u !== Object.prototype && w.next && (d || s( w ) === u || (o ? o( w, u ) : "function" != typeof w[h] && r( w, h, _ )), l( w, v, !0, !0 ), d && (g[v] = _))), "values" == x && j && "values" !== j.name && (b = !0, A = function () {
      return j.call( this )
    }), d && !T || k[h] === A || r( k, h, A ), g[a] = A, x) if (E = {
      values  : y( "values" ),
      keys    : c ? A : y( "keys" ),
      entries : y( "entries" )
    }, T) for (M in E) (f || b || !(M in k)) && m( k, M, E[M] ); else i( {target : a, proto : !0, forced : f || b}, E );
    return E
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 85 ).IteratorPrototype, n = t( 69 ), s = t( 24 ), o = t( 54 ), l = t( 29 ), r = function () {
    return this
  };
  e.exports = function (e, a, t) {
    var m = a + " Iterator";
    return e.prototype = n( i, {next : s( 1, t )} ), o( e, m, !1, !0 ), l[m] = r, e
  }
}, function (e, a, t) {
  var i = t( 3 );
  e.exports = !i( (function () {
    function e() {
    }

    return e.prototype.constructor = null, Object.getPrototypeOf( new e ) !== e.prototype
  }) )
}, function (e, a, t) {
  var i = t( 8 ), n = t( 133 );
  e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var e, a = !1, t = {};
    try {
      (e = Object.getOwnPropertyDescriptor( Object.prototype, "__proto__" ).set).call( t, [] ), a = t instanceof Array
    } catch (e) {
    }
    return function (t, s) {
      return i( t ), n( s ), a ? e.call( t, s ) : t.__proto__ = s, t
    }
  }() : void 0)
}, function (e, a, t) {
  var i = t( 7 );
  e.exports = function (e) {
    if (!i( e ) && null !== e) throw TypeError( "Can't set " + String( e ) + " as a prototype" );
    return e
  }
}, function (e, a, t) {
  "use strict";
  var i = t( 2 ), n = t( 49 ).find, s = t( 50 ), o = t( 16 ), l = !0, r = o( "find" );
  "find" in [] && Array( 1 ).find( (function () {
    l = !1
  }) ), i( {target : "Array", proto : !0, forced : l || !r}, {
    find : function (e) {
      return n( this, e, arguments.length > 1 ? arguments[1] : void 0 )
    }
  } ), s( "find" )
}, function (e, a, t) {
  "use strict";
  var i = t( 2 ), n = t( 136 ).left, s = t( 22 ), o = t( 16 ), l = s( "reduce" ), r = o( "reduce", {1 : 0} );
  i( {target : "Array", proto : !0, forced : !l || !r}, {
    reduce : function (e) {
      return n( this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0 )
    }
  } )
}, function (e, a, t) {
  var i = t( 18 ), n = t( 15 ), s = t( 25 ), o = t( 10 ), l = function (e) {
    return function (a, t, l, r) {
      i( t );
      var m = n( a ), p = s( m ), d = o( m.length ), g = e ? d - 1 : 0, x = e ? -1 : 1;
      if (l < 2) for (; ;) {
        if (g in p) {
          r = p[g], g += x;
          break
        }
        if (g += x, e ? g < 0 : d <= g) throw TypeError( "Reduce of empty array with no initial value" )
      }
      for (; e ? g >= 0 : d > g; g += x) g in p && (r = t( r, p[g], g, m ));
      return r
    }
  };
  e.exports = {left : l( !1 ), right : l( !0 )}
}, function (e, a, t) {
  "use strict";
  var i = t( 2 ), n = t( 7 ), s = t( 45 ), o = t( 43 ), l = t( 10 ), r = t( 19 ), m = t( 46 ), p = t( 0 ), d = t( 47 ),
    g = t( 16 ), x = d( "slice" ), u = g( "slice", {ACCESSORS : !0, 0 : 0, 1 : 2} ), f = p( "species" ), h = [].slice,
    _ = Math.max;
  i( {target : "Array", proto : !0, forced : !x || !u}, {
    slice : function (e, a) {
      var t, i, p, d = r( this ), g = l( d.length ), x = o( e, g ), u = o( void 0 === a ? g : a, g );
      if (s( d ) && ("function" != typeof(t = d.constructor) || t !== Array && !s( t.prototype ) ? n( t ) && null === (t = t[f]) && (t = void 0) : t = void 0, t === Array || void 0 === t)) return h.call( d, x, u );
      for (i = new (void 0 === t ? Array : t)( _( u - x, 0 ) ), p = 0; x < u; x++, p++) x in d && m( i, p, d[x] );
      return i.length = p, i
    }
  } )
}, function (e, a, t) {
  var i = t( 11 ), n = t( 14 ).f, s = Function.prototype, o = s.toString, l = /^\s*function ([^ (]*)/;
  i && !("name" in s) && n( s, "name", {
    configurable : !0, get : function () {
      try {
        return o.call( this ).match( l )[1]
      } catch (e) {
        return ""
      }
    }
  } )
}, function (e, a, t) {
  var i = t( 2 ), n = t( 140 ), s = t( 50 );
  i( {target : "Array", proto : !0}, {fill : n} ), s( "fill" )
}, function (e, a, t) {
  "use strict";
  var i = t( 15 ), n = t( 43 ), s = t( 10 );
  e.exports = function (e) {
    for (var a = i( this ), t = s( a.length ), o = arguments.length, l = n( o > 1 ? arguments[1] : void 0, t ), r = o > 2 ? arguments[2] : void 0, m = void 0 === r ? t : n( r, t ); m > l;) a[l++] = e;
    return a
  }
}, , , , , , , , , , function (e, a, t) {
  "use strict";
  t.r( a );
  t( 93 ), t( 95 );
  var i = {
      user : JSON.parse( localStorage.getItem( "user" ) ),
      level : localStorage.getItem( "level" ) || 1,
      round : localStorage.getItem( "round" ) || 1,
      isAutoPronounceOn : +(localStorage.getItem( "isAutoPronounceOn" ) || 1),
      hints : {
        isPronounceOn : +(localStorage.getItem( "isPronounceOn" ) || 1),
        isTranslationOn : +(localStorage.getItem( "isTranslationOn" ) || 1),
        isPictureOn : +(localStorage.getItem( "isPictureOn" ) || 0)
      },
      passedRounds : JSON.parse( localStorage.getItem( "passedRounds" ) ) || [],
      iKnowPerRound : JSON.parse( localStorage.getItem( "iKnowPerRound" ) ) || [],
      dates : JSON.parse( localStorage.getItem( "dates" ) ) || []
    }, n = function (e) {
      i.user = e, i.level = 1, i.round = 1, i.isAutoPronounceOn = 1, i.hints = {
        isPronounceOn : 1,
        isTranslationOn : 1,
        isPictureOn : 0
      }, i.passedRounds = [], i.iKnowPerRound = [], i.dates = []
    },
    s = (t( 23 ), t( 27 ), t( 68 ), t( 51 ), t( 53 ), t( 80 ), t( 30 ), t( 55 ), document.querySelector( ".authorization" )),
    o = document.querySelector( ".login-btn " ), l = document.querySelector( ".signup-btn" ),
    r = document.querySelector( ".logout-btn" ), m = document.querySelector( ".game-page" ),
    p = document.querySelector( ".home-page" ), d = document.querySelector( ".translate-btn" ),
    g = document.querySelector( ".pronounce-btn" ), x = document.querySelector( ".picture-btn" ),
    u = document.querySelector( ".game-input" ), f = document.querySelector( ".dontknow-btn" ),
    h = document.querySelector( ".check-btn" ), _ = document.querySelector( ".continue-btn" ),
    c = document.querySelector( ".results-btn" ), T = document.querySelector( ".painting" ),
    w = document.querySelector( "audio" ), E = document.querySelector( ".sentence-translation" ),
    y = u.querySelector( ".painting-info" ), v = document.querySelector( ".sidenav" ), b = [45, 41, 40, 29, 29, 25],
    k = document.querySelector( ".error-message" ), j = document.querySelector( ".miniature-painting" ),
    A = document.querySelector( ".miniature-painting-info" ), I = document.querySelector( ".link-to-painting" ),
    S = document.querySelector( ".round-statistics-page" ), C = document.querySelector( ".full-stat-page" ),
    L = document.querySelector( ".statistic-btn" ), O = function (e) {
      var a = M.Modal.getInstance( document.querySelector( ".modal" ) );
      document.querySelector( ".error-text" ).innerText = "API request failed with error ".concat( e.status, ". \n    " ).concat( 403 === e.status ? "Request limit reached." : "" ), a.open()
    };

  function H(e, a, t, i, n, s, o) {
    try {
      var l = e[s]( o ), r = l.value
    } catch (e) {
      return void t( e )
    }
    l.done ? a( r ) : Promise.resolve( r ).then( i, n )
  }

  function W(e) {
    return function () {
      var a = this, t = arguments;
      return new Promise( (function (i, n) {
        var s = e.apply( a, t );

        function o(e) {
          H( s, i, n, o, l, "next", e )
        }

        function l(e) {
          H( s, i, n, o, l, "throw", e )
        }

        o( void 0 )
      }) )
    }
  }

  var B = function () {
    var e = W( regeneratorRuntime.mark( (function e(a) {
      var t, i;
      return regeneratorRuntime.wrap( (function (e) {
        for (; ;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, fetch( "https://afternoon-falls-25894.herokuapp.com/users", {
              method  : "POST",
              headers : {
                Accept         : "application/json",
                "Content-Type" : "application/json"
              },
              body    : JSON.stringify( a )
            } );
          case 2:
            return t = e.sent, e.prev = 3, e.next = 6, t.json();
          case 6:
            i = e.sent, e.next = 13;
            break;
          case 9:
            e.prev = 9, e.t0 = e.catch( 3 ), console.log( e.t0 ), i = t.status;
          case 13:
            return e.prev = 13, e.abrupt( "return", i );
          case 16:
          case"end":
            return e.stop()
        }
      }), e, null, [[3, 9, 13, 16]] )
    }) ) );
    return function (a) {
      return e.apply( this, arguments )
    }
  }(), D = function () {
    var e = W( regeneratorRuntime.mark( (function e(a) {
      var t, i;
      return regeneratorRuntime.wrap( (function (e) {
        for (; ;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, fetch( "https://afternoon-falls-25894.herokuapp.com/signin", {
              method  : "POST",
              headers : {
                Accept         : "application/json",
                "Content-Type" : "application/json"
              },
              body    : JSON.stringify( a )
            } );
          case 2:
            return t = e.sent, e.prev = 3, e.next = 6, t.json();
          case 6:
            i = e.sent, e.next = 13;
            break;
          case 9:
            e.prev = 9, e.t0 = e.catch( 3 ), console.log( e.t0 ), i = t.status;
          case 13:
            return e.prev = 13, e.abrupt( "return", i );
          case 16:
          case"end":
            return e.stop()
        }
      }), e, null, [[3, 9, 13, 16]] )
    }) ) );
    return function (a) {
      return e.apply( this, arguments )
    }
  }(), z = function () {
    var e = W( regeneratorRuntime.mark( (function e(a, t, i) {
      var n, s;
      return regeneratorRuntime.wrap( (function (e) {
        for (; ;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, fetch( "https://afternoon-falls-25894.herokuapp.com/users/".concat( a, "/statistics" ), {
              method          : "PUT",
              withCredentials : !0,
              headers         : {
                Authorization  : "Bearer ".concat( t ),
                Accept         : "application/json",
                "Content-Type" : "application/json"
              },
              body            : JSON.stringify( i )
            } );
          case 2:
            return n = e.sent, e.prev = 3, e.next = 6, n.json();
          case 6:
            s = e.sent, e.next = 14;
            break;
          case 9:
            e.prev = 9, e.t0 = e.catch( 3 ), console.log( e.t0 ), O( n ), s = n.status;
          case 14:
            return e.prev = 14, e.abrupt( "return", s );
          case 17:
          case"end":
            return e.stop()
        }
      }), e, null, [[3, 9, 14, 17]] )
    }) ) );
    return function (a, t, i) {
      return e.apply( this, arguments )
    }
  }(), R = function () {
    var e = W( regeneratorRuntime.mark( (function e(a, t) {
      var i, n;
      return regeneratorRuntime.wrap( (function (e) {
        for (; ;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, fetch( "https://afternoon-falls-25894.herokuapp.com/users/".concat( a, "/statistics" ), {
              method          : "GET",
              withCredentials : !0,
              headers         : {
                Authorization : "Bearer ".concat( t ),
                Accept        : "application/json"
              }
            } );
          case 2:
            return i = e.sent, e.prev = 3, e.next = 6, i.json();
          case 6:
            n = e.sent, e.next = 14;
            break;
          case 9:
            e.prev = 9, e.t0 = e.catch( 3 ), console.log( e.t0 ), O( i ), n = i.status;
          case 14:
            return e.prev = 14, e.abrupt( "return", n );
          case 17:
          case"end":
            return e.stop()
        }
      }), e, null, [[3, 9, 14, 17]] )
    }) ) );
    return function (a, t) {
      return e.apply( this, arguments )
    }
  }();
  t( 119 ), t( 82 ), t( 31 ), t( 56 );

  function P(e, a, t, i, n, s, o) {
    try {
      var l = e[s]( o ), r = l.value
    } catch (e) {
      return void t( e )
    }
    l.done ? a( r ) : Promise.resolve( r ).then( i, n )
  }

  function q(e) {
    return function () {
      var a = this, t = arguments;
      return new Promise( (function (i, n) {
        var s = e.apply( a, t );

        function o(e) {
          P( s, i, n, o, l, "next", e )
        }

        function l(e) {
          P( s, i, n, o, l, "throw", e )
        }

        o( void 0 )
      }) )
    }
  }

  var $ = function (e) {
    i.hints.isTranslationOn = +e.optional.isTranslationOn, i.hints.isPronounceOn = +e.optional.isPronounceOn, i.hints.isPictureOn = +e.optional.isPictureOn, i.isAutoPronounceOn = +e.optional.isAutoPronounceOn, i.level = e.optional.level, i.round = e.optional.round, i.passedRounds = "0" !== e.optional.passedRounds && e.optional.passedRounds ? e.optional.passedRounds.split( ";" ) : [], i.iKnowPerRound = "0" !== e.optional.iKnowPerRound && e.optional.iKnowPerRound ? e.optional.iKnowPerRound.split( ";" ) : [], i.dates = "0" !== e.optional.dates && e.optional.dates ? e.optional.dates.split( ";" ) : [], localStorage.setItem( "isTranslationOn", i.hints.isTranslationOn ), localStorage.setItem( "isPronounceOn", i.hints.isPronounceOn ), localStorage.setItem( "isPictureOn", i.hints.isPictureOn ), localStorage.setItem( "isAutoPronounceOn", i.isAutoPronounceOn ), localStorage.setItem( "level", i.level ), localStorage.setItem( "round", i.round ), localStorage.setItem( "passedRounds", JSON.stringify( i.passedRounds ) ), localStorage.setItem( "iKnowPerRound", JSON.stringify( i.iKnowPerRound ) ), localStorage.setItem( "dates", JSON.stringify( i.dates ) )
  }, N = function () {
    var e = q( regeneratorRuntime.mark( (function e() {
      var a;
      return regeneratorRuntime.wrap( (function (e) {
        for (; ;) switch (e.prev = e.next) {
          case 0:
            return a = {
              learnedWords : 0,
              optional     : {
                isAutoPronounceOn : String( i.isAutoPronounceOn ),
                isTranslationOn   : String( i.hints.isTranslationOn ),
                isPronounceOn     : String( i.hints.isPronounceOn ),
                isPictureOn       : String( i.hints.isPictureOn ),
                level             : String( i.level ),
                round             : String( i.round ),
                passedRounds      : 0 !== i.passedRounds.length ? i.passedRounds.join( ";" ) : "0",
                iKnowPerRound     : 0 !== i.iKnowPerRound.length ? i.iKnowPerRound.join( ";" ) : "0",
                dates             : 0 !== i.dates.length ? i.dates.join( ";" ) : "0"
              }
            }, e.next = 3, z( i.user.id, i.user.token, a );
          case 3:
          case"end":
            return e.stop()
        }
      }), e )
    }) ) );
    return function () {
      return e.apply( this, arguments )
    }
  }(), F = function () {
    var e = q( regeneratorRuntime.mark( (function e() {
      var a;
      return regeneratorRuntime.wrap( (function (e) {
        for (; ;) switch (e.prev = e.next) {
          case 0:
            return a = {
              learnedWords : 0,
              optional     : {
                isAutoPronounceOn : "1",
                isTranslationOn   : "1",
                isPronounceOn     : "1",
                isPictureOn       : "0",
                level             : "1",
                round             : "1",
                passedRounds      : "0",
                iKnowPerRound     : "0",
                dates             : "0"
              }
            }, e.next = 3, z( i.user.id, i.user.token, a );
          case 3:
          case"end":
            return e.stop()
        }
      }), e )
    }) ) );
    return function () {
      return e.apply( this, arguments )
    }
  }(), V = function () {
    var e = C.querySelector( "tbody" );
    i.passedRounds.forEach( (function (a, t) {
      e.appendChild( function (e, a) {
        var t = document.createElement( "tr" ), n = document.createElement( "td" );
        n.insertAdjacentText( "afterbegin", e );
        var s = document.createElement( "td" );
        s.insertAdjacentText( "afterbegin", i.dates[a] );
        var o = document.createElement( "td" );
        o.insertAdjacentText( "afterbegin", i.iKnowPerRound[a] );
        var l = document.createElement( "td" );
        return l.insertAdjacentText( "afterbegin", 10 - +i.iKnowPerRound[a] ), t.appendChild( n ), t.appendChild( s ), t.appendChild( o ), t.appendChild( l ), t
      }( a, t ) )
    }) )
  }, G = function () {
    return (new Date).toLocaleString( "en-US", {
      day    : "numeric",
      month  : "long",
      year   : "numeric",
      hour   : "2-digit",
      minute : "2-digit",
      hour12 : !1
    } )
  }, J = function (e) {
    var a = document.createElement( "tr" ), t = document.createElement( "td" );
    t.className = "col s1", t.insertAdjacentHTML( "afterbegin", '<i class="material-icons sound-icon" data-audio-src="https://raw.githubusercontent.com/jules0802/rslang-data/master/'.concat( e.audioExample, '">volume_up</i>' ) );
    var i = document.createElement( "td" );
    return i.className = "col s11", i.insertAdjacentText( "afterbegin", e.textExample ), a.appendChild( t ), a.appendChild( i ), a
  };
  var Y = function e(a, t) {
    !function (e, a) {
      if (!(e instanceof a)) throw new TypeError( "Cannot call a class as a function" )
    }( this, e ), this.email = a, this.password = t
  }, K = (t( 84 ), t( 125 ), t( 127 ), t( 128 ), t( 134 ), t( 135 ), t( 137 ), t( 138 ), [{
    word                 : "agree",
    image                : "files/01_0001.jpg",
    audio                : "files/01_0001.mp3",
    audioMeaning         : "files/01_0001_meaning.mp3",
    audioExample         : "files/01_0001_example.mp3",
    textMeaning          : "To agree is to have the same opinion or belief as another person",
    textExample          : "The students agree they have too much homework",
    transcription        : "[Й™grГ­Лђ]",
    wordTranslate        : "СЃРѕРіР»Р°СЃРЅР°",
    textMeaningTranslate : "РЎРѕРіР»Р°СЃРёС‚СЊСЃСЏ - Р·РЅР°С‡РёС‚ РёРјРµС‚СЊ С‚Рѕ Р¶Рµ РјРЅРµРЅРёРµ РёР»Рё СѓР±РµР¶РґРµРЅРёРµ, С‡С‚Рѕ Рё РґСЂСѓРіРѕР№ С‡РµР»РѕРІРµРє",
    textExampleTranslate : "РЎС‚СѓРґРµРЅС‚С‹ СЃРѕРіР»Р°СЃРЅС‹, С‡С‚Рѕ Сѓ РЅРёС… СЃР»РёС€РєРѕРј РјРЅРѕРіРѕ РґРѕРјР°С€РЅРµР№ СЂР°Р±РѕС‚С‹",
    id                   : 1
  }, {
    word                 : "alcohol",
    image                : "files/01_0002.jpg",
    audio                : "files/01_0002.mp3",
    audioMeaning         : "files/01_0002_meaning.mp3",
    audioExample         : "files/01_0002_example.mp3",
    textMeaning          : "Alcohol is a type of drink that can make people drunk",
    textExample          : "A person should not drive a car after drinking alcohol",
    transcription        : "[ЗЅlkЙ™hЙ”МЂЛђl]",
    wordTranslate        : "Р°Р»РєРѕРіРѕР»СЊ",
    textMeaningTranslate : "РђР»РєРѕРіРѕР»СЊ - СЌС‚Рѕ С‚РёРї РЅР°РїРёС‚РєР°, РєРѕС‚РѕСЂС‹Р№ РјРѕР¶РµС‚ СЃРґРµР»Р°С‚СЊ Р»СЋРґРµР№ РїСЊСЏРЅС‹РјРё",
    textExampleTranslate : "Р§РµР»РѕРІРµРє РЅРµ РґРѕР»Р¶РµРЅ РІРѕРґРёС‚СЊ РјР°С€РёРЅСѓ РїРѕСЃР»Рµ С‚РѕРіРѕ, РєР°Рє РѕРЅ РІС‹РїРёР» Р°Р»РєРѕРіРѕР»СЊ",
    id                   : 2
  }, {
    word                 : "arrive",
    image                : "files/01_0003.jpg",
    audio                : "files/01_0003.mp3",
    audioMeaning         : "files/01_0003_meaning.mp3",
    audioExample         : "files/01_0003_example.mp3",
    textMeaning          : "To arrive is to get somewhere",
    textExample          : "They arrived at school at 7 a.m",
    transcription        : "[Й™rГЎiv]",
    wordTranslate        : "РїСЂРёР±С‹С‚СЊ",
    textMeaningTranslate : "РџСЂРёРµС…Р°С‚СЊ Р·РЅР°С‡РёС‚ РїРѕРїР°СЃС‚СЊ РєСѓРґР°-С‚Рѕ",
    textExampleTranslate : "РћРЅРё РїСЂРёР±С‹Р»Рё РІ С€РєРѕР»Сѓ РІ 7 С‡Р°СЃРѕРІ СѓС‚СЂР°",
    id                   : 3
  }, {
    word                 : "August",
    image                : "files/01_0004.jpg",
    audio                : "files/01_0004.mp3",
    audioMeaning         : "files/01_0004_meaning.mp3",
    audioExample         : "files/01_0004_example.mp3",
    textMeaning          : "August is the eighth month of the year",
    textExample          : "Is your birthday in August?",
    transcription        : "[Й”МЃЛђgЙ™st]",
    wordTranslate        : "Р°РІРіСѓСЃС‚",
    textMeaningTranslate : "РђРІРіСѓСЃС‚ - РІРѕСЃСЊРјРѕР№ РјРµСЃСЏС† РіРѕРґР°",
    textExampleTranslate : "РЈ С‚РµР±СЏ РґРµРЅСЊ СЂРѕР¶РґРµРЅРёСЏ РІ Р°РІРіСѓСЃС‚Рµ?",
    id                   : 4
  }, {
    word                 : "boat",
    image                : "files/01_0005.jpg",
    audio                : "files/01_0005.mp3",
    audioMeaning         : "files/01_0005_meaning.mp3",
    audioExample         : "files/01_0005_example.mp3",
    textMeaning          : "A boat is a vehicle that moves across water",
    textExample          : "There is a small boat on the lake",
    transcription        : "[bout]",
    wordTranslate        : "Р»РѕРґРєР°",
    textMeaningTranslate : "Р›РѕРґРєР° - СЌС‚Рѕ С‚СЂР°РЅСЃРїРѕСЂС‚РЅРѕРµ СЃСЂРµРґСЃС‚РІРѕ, РєРѕС‚РѕСЂРѕРµ РґРІРёР¶РµС‚СЃСЏ РїРѕ РІРѕРґРµ",
    textExampleTranslate : "РќР° РѕР·РµСЂРµ РµСЃС‚СЊ РјР°Р»РµРЅСЊРєР°СЏ Р»РѕРґРєР°",
    id                   : 5
  }, {
    word                 : "breakfast",
    image                : "files/01_0006.jpg",
    audio                : "files/01_0006.mp3",
    audioMeaning         : "files/01_0006_meaning.mp3",
    audioExample         : "files/01_0006_example.mp3",
    textMeaning          : "Breakfast is the morning meal",
    textExample          : "I ate eggs for breakfast",
    transcription        : "[brekfЙ™st]",
    wordTranslate        : "Р·Р°РІС‚СЂР°Рє",
    textMeaningTranslate : "Р—Р°РІС‚СЂР°Рє - СЌС‚Рѕ СѓС‚СЂРµРЅРЅСЏСЏ С‚СЂР°РїРµР·Р°",
    textExampleTranslate : "РЇ РµР» СЏР№С†Р° РЅР° Р·Р°РІС‚СЂР°Рє",
    id                   : 6
  }, {
    word                 : "camera",
    image                : "files/01_0007.jpg",
    audio                : "files/01_0007.mp3",
    audioMeaning         : "files/01_0007_meaning.mp3",
    audioExample         : "files/01_0007_example.mp3",
    textMeaning          : "A camera is a piece of equipment that takes pictures",
    textExample          : "I brought my camera on my vacation",
    transcription        : "[kЗЅmЙ™rЙ™]",
    wordTranslate        : "РєР°РјРµСЂР°",
    textMeaningTranslate : "РљР°РјРµСЂР° - СЌС‚Рѕ С‡Р°СЃС‚СЊ РѕР±РѕСЂСѓРґРѕРІР°РЅРёСЏ, РєРѕС‚РѕСЂР°СЏ РґРµР»Р°РµС‚ СЃРЅРёРјРєРё",
    textExampleTranslate : "РЇ РїСЂРёРЅРµСЃ СЃРІРѕСЋ РєР°РјРµСЂСѓ РІ РѕС‚РїСѓСЃРє",
    id                   : 7
  }, {
    word                 : "capital",
    image                : "files/01_0008.jpg",
    audio                : "files/01_0008.mp3",
    audioMeaning         : "files/01_0008_meaning.mp3",
    audioExample         : "files/01_0008_example.mp3",
    textMeaning          : "A capital is a city where a countryвЂ™s government is based",
    textExample          : "The capital of the United States is Washington, D.C",
    transcription        : "[kГ¦pЙ™tl]",
    wordTranslate        : "СЃС‚РѕР»РёС†Р°",
    textMeaningTranslate : "РЎС‚РѕР»РёС†Р° - СЌС‚Рѕ РіРѕСЂРѕРґ, РІ РєРѕС‚РѕСЂРѕРј Р±Р°Р·РёСЂСѓРµС‚СЃСЏ РїСЂР°РІРёС‚РµР»СЊСЃС‚РІРѕ СЃС‚СЂР°РЅС‹",
    textExampleTranslate : "РЎС‚РѕР»РёС†Р° РЎРѕРµРґРёРЅРµРЅРЅС‹С… РЁС‚Р°С‚РѕРІ - Р’Р°С€РёРЅРіС‚РѕРЅ, РѕРєСЂСѓРі РљРѕР»СѓРјР±РёСЏ",
    id                   : 8
  }, {
    word                 : "catch",
    image                : "files/01_0009.jpg",
    audio                : "files/01_0009.mp3",
    audioMeaning         : "files/01_0009_meaning.mp3",
    audioExample         : "files/01_0009_example.mp3",
    textMeaning          : "To catch is to grab or get something",
    textExample          : "Did you catch the ball during the baseball game?",
    transcription        : "[kГ¦tКѓ]",
    wordTranslate        : "РїРѕР№РјР°С‚СЊ",
    textMeaningTranslate : "РџРѕР№РјР°С‚СЊ - Р·РЅР°С‡РёС‚ СЃС…РІР°С‚РёС‚СЊ РёР»Рё РїРѕР»СѓС‡РёС‚СЊ С‡С‚Рѕ-С‚Рѕ",
    textExampleTranslate : "Р’С‹ РїРѕР№РјР°Р»Рё РјСЏС‡ РІРѕ РІСЂРµРјСЏ РёРіСЂС‹ РІ Р±РµР№СЃР±РѕР»?",
    id                   : 9
  }, {
    word                 : "duck",
    image                : "files/01_0010.jpg",
    audio                : "files/01_0010.mp3",
    audioMeaning         : "files/01_0010_meaning.mp3",
    audioExample         : "files/01_0010_example.mp3",
    textMeaning          : "A duck is a small water bird",
    textExample          : "People feed ducks at the lake",
    transcription        : "[dКЊk]",
    wordTranslate        : "СѓС‚РєР°",
    textMeaningTranslate : "РЈС‚РєР° - РјР°Р»РµРЅСЊРєР°СЏ РІРѕРґСЏРЅР°СЏ РїС‚РёС†Р°",
    textExampleTranslate : "Р›СЋРґРё РєРѕСЂРјСЏС‚ СѓС‚РѕРє Сѓ РѕР·РµСЂР°",
    id                   : 10
  }, {
    word                 : "enjoy",
    image                : "files/01_0011.jpg",
    audio                : "files/01_0011.mp3",
    audioMeaning         : "files/01_0011_meaning.mp3",
    audioExample         : "files/01_0011_example.mp3",
    textMeaning          : "To enjoy is to like something",
    textExample          : "The woman enjoys riding her bicycle",
    transcription        : "[indК’Й”МЃi]",
    wordTranslate        : "РЅР°СЃР»Р°Р¶РґР°С‚СЊСЃСЏ",
    textMeaningTranslate : "РќР°СЃР»Р°Р¶РґР°С‚СЊСЃСЏ Р·РЅР°С‡РёС‚ Р»СЋР±РёС‚СЊ С‡С‚Рѕ-С‚Рѕ",
    textExampleTranslate : "Р–РµРЅС‰РёРЅР° Р»СЋР±РёС‚ РєР°С‚Р°С‚СЊСЃСЏ РЅР° РІРµР»РѕСЃРёРїРµРґРµ",
    id                   : 11
  }, {
    word                 : "invite",
    image                : "files/01_0012.jpg",
    audio                : "files/01_0012.mp3",
    audioMeaning         : "files/01_0012_meaning.mp3",
    audioExample         : "files/01_0012_example.mp3",
    textMeaning          : "To invite is to ask someone to come to a place or event",
    textExample          : "I will invite my friends to my birthday party",
    transcription        : "[invГЎit]",
    wordTranslate        : "РїСЂРёРіР»Р°СЃРёС‚СЊ",
    textMeaningTranslate : "РџСЂРёРіР»Р°СЃРёС‚СЊ - СЌС‚Рѕ РїРѕРїСЂРѕСЃРёС‚СЊ РєРѕРіРѕ-РЅРёР±СѓРґСЊ РїСЂРёР№С‚Рё РЅР° РјРµСЃС‚Рѕ РёР»Рё СЃРѕР±С‹С‚РёРµ",
    textExampleTranslate : "РЇ РїСЂРёРіР»Р°С€Р°СЋ СЃРІРѕРёС… РґСЂСѓР·РµР№ РЅР° РјРѕР№ РґРµРЅСЊ СЂРѕР¶РґРµРЅРёСЏ",
    id                   : 12
  }, {
    word                 : "love",
    image                : "files/01_0013.jpg",
    audio                : "files/01_0013.mp3",
    audioMeaning         : "files/01_0013_meaning.mp3",
    audioExample         : "files/01_0013_example.mp3",
    textMeaning          : "To love is to like something or someone a lot",
    textExample          : "I love my family very much",
    transcription        : "[lКЊv]",
    wordTranslate        : "Р»СЋР±РѕРІСЊ",
    textMeaningTranslate : "Р›СЋР±РёС‚СЊ Р·РЅР°С‡РёС‚ Р»СЋР±РёС‚СЊ С‡С‚Рѕ-С‚Рѕ РёР»Рё РєРѕРіРѕ-С‚Рѕ РјРЅРѕРіРѕ",
    textExampleTranslate : "РЇ РѕС‡РµРЅСЊ Р»СЋР±Р»СЋ СЃРІРѕСЋ СЃРµРјСЊСЋ",
    id                   : 13
  }, {
    word                 : "month",
    image                : "files/01_0014.jpg",
    audio                : "files/01_0014.mp3",
    audioMeaning         : "files/01_0014_meaning.mp3",
    audioExample         : "files/01_0014_example.mp3",
    textMeaning          : "A month is one of 12 periods of time in one year",
    textExample          : "January is the first month of the year",
    transcription        : "[mКЊnОё]",
    wordTranslate        : "РјРµСЃСЏС†",
    textMeaningTranslate : "РњРµСЃСЏС† - СЌС‚Рѕ РѕРґРёРЅ РёР· 12 РїРµСЂРёРѕРґРѕРІ РІСЂРµРјРµРЅРё РІ РіРѕРґСѓ",
    textExampleTranslate : "СЏРЅРІР°СЂСЊ - РїРµСЂРІС‹Р№ РјРµСЃСЏС† РіРѕРґР°",
    id                   : 14
  }, {
    word                 : "travel",
    image                : "files/01_0015.jpg",
    audio                : "files/01_0015.mp3",
    audioMeaning         : "files/01_0015_meaning.mp3",
    audioExample         : "files/01_0015_example.mp3",
    textMeaning          : "To travel is to go to a faraway place on vacation or business",
    textExample          : "They will travel to Argentina this summer",
    transcription        : "[trЗЅvЙ™l]",
    wordTranslate        : "РїСѓС‚РµС€РµСЃС‚РІРѕРІР°С‚СЊ",
    textMeaningTranslate : "РџСѓС‚РµС€РµСЃС‚РІРѕРІР°С‚СЊ - СЌС‚Рѕ РѕС‚РїСЂР°РІРёС‚СЊСЃСЏ РІ РґР°Р»РµРєРѕРµ РјРµСЃС‚Рѕ РЅР° РѕС‚РґС‹С… РёР»Рё РїРѕ РґРµР»Р°Рј",
    textExampleTranslate : "Р­С‚РёРј Р»РµС‚РѕРј РѕРЅРё РѕС‚РїСЂР°РІСЏС‚СЃСЏ РІ РђСЂРіРµРЅС‚РёРЅСѓ",
    id                   : 15
  }, {
    word                 : "typical",
    image                : "files/01_0016.jpg",
    audio                : "files/01_0016.mp3",
    audioMeaning         : "files/01_0016_meaning.mp3",
    audioExample         : "files/01_0016_example.mp3",
    textMeaning          : "If something is typical, it is normal, or something that usually happens",
    textExample          : "My typical breakfast is toast and eggs",
    transcription        : "[tГ­pikЙ™l]",
    wordTranslate        : "С‚РёРїРёС‡РЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ С‚РёРїРёС‡РЅРѕРµ, СЌС‚Рѕ РЅРѕСЂРјР°Р»СЊРЅРѕ, РёР»Рё С‡С‚Рѕ-С‚Рѕ, С‡С‚Рѕ РѕР±С‹С‡РЅРѕ РїСЂРѕРёСЃС…РѕРґРёС‚",
    textExampleTranslate : "РњРѕР№ С‚РёРїРёС‡РЅС‹Р№ Р·Р°РІС‚СЂР°Рє - С‚РѕСЃС‚ Рё СЏР№С†Р°",
    id                   : 16
  }, {
    word                 : "visit",
    image                : "files/01_0017.jpg",
    audio                : "files/01_0017.mp3",
    audioMeaning         : "files/01_0017_meaning.mp3",
    audioExample         : "files/01_0017_example.mp3",
    textMeaning          : "To visit is to go and spend time in another place or see another person",
    textExample          : "She wants to visit her grandmother",
    transcription        : "[vГ­zit]",
    wordTranslate        : "РїРѕСЃРµС‰РµРЅРёРµ",
    textMeaningTranslate : "РџРѕСЃРµС‚РёС‚СЊ - Р·РЅР°С‡РёС‚ РїРѕР№С‚Рё Рё РїСЂРѕРІРµСЃС‚Рё РІСЂРµРјСЏ РІ РґСЂСѓРіРѕРј РјРµСЃС‚Рµ РёР»Рё СѓРІРёРґРµС‚СЊ РґСЂСѓРіРѕРіРѕ С‡РµР»РѕРІРµРєР°",
    textExampleTranslate : "РћРЅР° С…РѕС‡РµС‚ РЅР°РІРµСЃС‚РёС‚СЊ СЃРІРѕСЋ Р±Р°Р±СѓС€РєСѓ",
    id                   : 17
  }, {
    word                 : "weather",
    image                : "files/01_0018.jpg",
    audio                : "files/01_0018.mp3",
    audioMeaning         : "files/01_0018_meaning.mp3",
    audioExample         : "files/01_0018_example.mp3",
    textMeaning          : "Weather is the temperature and the state of the outdoors",
    textExample          : "TodayвЂ™s weather is rainy and cloudy",
    transcription        : "[weГ°Й™r]",
    wordTranslate        : "РїРѕРіРѕРґР°",
    textMeaningTranslate : "РџРѕРіРѕРґР° СЌС‚Рѕ С‚РµРјРїРµСЂР°С‚СѓСЂР° Рё СЃРѕСЃС‚РѕСЏРЅРёРµ РЅР° СѓР»РёС†Рµ",
    textExampleTranslate : "РЎРµРіРѕРґРЅСЏ РїРѕРіРѕРґР° РґРѕР¶РґР»РёРІР°СЏ Рё РѕР±Р»Р°С‡РЅР°СЏ",
    id                   : 18
  }, {
    word                 : "week",
    image                : "files/01_0019.jpg",
    audio                : "files/01_0019.mp3",
    audioMeaning         : "files/01_0019_meaning.mp3",
    audioExample         : "files/01_0019_example.mp3",
    textMeaning          : "A week is a period of time that is seven days long",
    textExample          : "What are you doing next week?",
    transcription        : "[wiЛђk]",
    wordTranslate        : "РЅРµРґРµР»СЏ",
    textMeaningTranslate : "РќРµРґРµР»СЏ - СЌС‚Рѕ РїРµСЂРёРѕРґ РІСЂРµРјРµРЅРё, РєРѕС‚РѕСЂС‹Р№ РґР»РёС‚СЃСЏ СЃРµРјСЊ РґРЅРµР№",
    textExampleTranslate : "Р§С‚Рѕ С‚С‹ РґРµР»Р°РµС€СЊ РЅР° СЃР»РµРґСѓСЋС‰РµР№ РЅРµРґРµР»Рµ?",
    id                   : 19
  }, {
    word                 : "wine",
    image                : "files/01_0020.jpg",
    audio                : "files/01_0020.mp3",
    audioMeaning         : "files/01_0020_meaning.mp3",
    audioExample         : "files/01_0020_example.mp3",
    textMeaning          : "Wine is an alcoholic drink made from grapes",
    textExample          : "The store carried both red and white wine",
    transcription        : "[wain]",
    wordTranslate        : "РІРёРЅРѕ",
    textMeaningTranslate : "Р’РёРЅРѕ - СЌС‚Рѕ Р°Р»РєРѕРіРѕР»СЊРЅС‹Р№ РЅР°РїРёС‚РѕРє РёР· РІРёРЅРѕРіСЂР°РґР°",
    textExampleTranslate : "Р’ РјР°РіР°Р·РёРЅРµ Р±С‹Р»Рѕ РєСЂР°СЃРЅРѕРµ Рё Р±РµР»РѕРµ РІРёРЅРѕ",
    id                   : 20
  }, {
    word                 : "adventure",
    image                : "files/02_0021.jpg",
    audio                : "files/02_0021.mp3",
    audioMeaning         : "files/02_0021_meaning.mp3",
    audioExample         : "files/02_0021_example.mp3",
    textMeaning          : "An adventure is a fun or exciting thing that you do",
    textExample          : "Riding in the rough water was an adventure",
    transcription        : "[Й™dvГ©ntКѓЙ™r]",
    wordTranslate        : "РїСЂРёРєР»СЋС‡РµРЅРёРµ",
    textMeaningTranslate : "РџСЂРёРєР»СЋС‡РµРЅРёРµ - СЌС‚Рѕ Р·Р°Р±Р°РІРЅР°СЏ РёР»Рё Р·Р°С…РІР°С‚С‹РІР°СЋС‰Р°СЏ РІРµС‰СЊ, РєРѕС‚РѕСЂСѓСЋ С‚С‹ РґРµР»Р°РµС€СЊ",
    textExampleTranslate : "Р•Р·РґР° РІ Р±СѓСЂРЅРѕР№ РІРѕРґРµ Р±С‹Р»Р° РїСЂРёРєР»СЋС‡РµРЅРёРµРј",
    id                   : 21
  }, {
    word                 : "approach",
    image                : "files/02_0022.jpg",
    audio                : "files/02_0022.mp3",
    audioMeaning         : "files/02_0022_meaning.mp3",
    audioExample         : "files/02_0022_example.mp3",
    textMeaning          : "To approach something means to move close to it",
    textExample          : "The boy approached his school",
    transcription        : "[Й™prГіutКѓ]",
    wordTranslate        : "РїРѕРґС…РѕРґРёС‚СЊ",
    textMeaningTranslate : "РџРѕРґРѕР№С‚Рё Рє С‡РµРјСѓ-С‚Рѕ - Р·РЅР°С‡РёС‚ РїСЂРёР±Р»РёР·РёС‚СЊСЃСЏ Рє РЅРµРјСѓ",
    textExampleTranslate : "РњР°Р»СЊС‡РёРє РїСЂРёР±Р»РёР·РёР»СЃСЏ Рє СЃРІРѕРµР№ С€РєРѕР»Рµ",
    id                   : 22
  }, {
    word                 : "carefully",
    image                : "files/02_0023.jpg",
    audio                : "files/02_0023.mp3",
    audioMeaning         : "files/02_0023_meaning.mp3",
    audioExample         : "files/02_0023_example.mp3",
    textMeaning          : "Carefully means with great attention, especially to detail or safety",
    textExample          : "The baby carefully climbed down the stairs",
    transcription        : "[kЙ›МЃЙ™rfЙ™li]",
    wordTranslate        : "РІРЅРёРјР°С‚РµР»СЊРЅРѕ",
    textMeaningTranslate : "РћСЃС‚РѕСЂРѕР¶РЅРѕ РѕР·РЅР°С‡Р°РµС‚ СЃ Р±РѕР»СЊС€РёРј РІРЅРёРјР°РЅРёРµРј, РѕСЃРѕР±РµРЅРЅРѕ Рє РґРµС‚Р°Р»СЏРј РёР»Рё Р±РµР·РѕРїР°СЃРЅРѕСЃС‚Рё",
    textExampleTranslate : "РњР°Р»С‹С€ РѕСЃС‚РѕСЂРѕР¶РЅРѕ СЃРїСѓСЃРєР°Р»СЃСЏ РїРѕ Р»РµСЃС‚РЅРёС†Рµ",
    id                   : 23
  }, {
    word                 : "chemical",
    image                : "files/02_0024.jpg",
    audio                : "files/02_0024.mp3",
    audioMeaning         : "files/02_0024_meaning.mp3",
    audioExample         : "files/02_0024_example.mp3",
    textMeaning          : "A chemical is something that scientists use in chemistry",
    textExample          : "The scientist mixed the chemicals",
    transcription        : "[kГ©mikЙ™l]",
    wordTranslate        : "С…РёРјРёС‡РµСЃРєРёР№",
    textMeaningTranslate : "РҐРёРјРёС‡РµСЃРєРѕРµ РІРµС‰РµСЃС‚РІРѕ - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ СѓС‡РµРЅС‹Рµ РёСЃРїРѕР»СЊР·СѓСЋС‚ РІ С…РёРјРёРё",
    textExampleTranslate : "РЈС‡РµРЅС‹Р№ СЃРјРµС€Р°Р» С…РёРјРёРєР°С‚С‹",
    id                   : 24
  }, {
    word                 : "create",
    image                : "files/02_0025.jpg",
    audio                : "files/02_0025.mp3",
    audioMeaning         : "files/02_0025_meaning.mp3",
    audioExample         : "files/02_0025_example.mp3",
    textMeaning          : "To create means to make something new",
    textExample          : "She created an igloo from blocks of snow",
    transcription        : "[kriГ©it]",
    wordTranslate        : "СЃРѕР·РґР°Р№С‚Рµ",
    textMeaningTranslate : "РЎРѕР·РґР°С‚СЊ Р·РЅР°С‡РёС‚ СЃРѕР·РґР°С‚СЊ С‡С‚Рѕ-С‚Рѕ РЅРѕРІРѕРµ",
    textExampleTranslate : "РћРЅР° СЃРѕР·РґР°Р»Р° РёРіР»Сѓ РёР· СЃРЅРµР¶РЅС‹С… РіР»С‹Р±",
    id                   : 25
  }, {
    word                 : "evil",
    image                : "files/02_0026.jpg",
    audio                : "files/02_0026.mp3",
    audioMeaning         : "files/02_0026_meaning.mp3",
    audioExample         : "files/02_0026_example.mp3",
    textMeaning          : "Evil describes something or someone bad or cruel, not good",
    textExample          : "They felt a strange, evil presence as they got closer to the house",
    transcription        : "[Г­ЛђvЙ™l]",
    wordTranslate        : "Р·Р»РѕР№",
    textMeaningTranslate : "Р—Р»Рѕ РѕРїРёСЃС‹РІР°РµС‚ С‡С‚Рѕ-С‚Рѕ РёР»Рё РєРѕРіРѕ-С‚Рѕ РїР»РѕС…РѕРіРѕ РёР»Рё Р¶РµСЃС‚РѕРєРѕРіРѕ, Р° РЅРµ С…РѕСЂРѕС€РµРіРѕ",
    textExampleTranslate : "РћРЅРё РїРѕС‡СѓРІСЃС‚РІРѕРІР°Р»Рё СЃС‚СЂР°РЅРЅРѕРµ Р·Р»РѕРµ РїСЂРёСЃСѓС‚СЃС‚РІРёРµ, РєРѕРіРґР° РїСЂРёР±Р»РёР·РёР»РёСЃСЊ Рє РґРѕРјСѓ",
    id                   : 26
  }, {
    word                 : "experiment",
    image                : "files/02_0027.jpg",
    audio                : "files/02_0027.mp3",
    audioMeaning         : "files/02_0027_meaning.mp3",
    audioExample         : "files/02_0027_example.mp3",
    textMeaning          : "An experiment is a test that you do to see what will happen",
    textExample          : "The student did an experiment in science class",
    transcription        : "[ikspГ©rЙ™mЙ™nt]",
    wordTranslate        : "СЌРєСЃРїРµСЂРёРјРµРЅС‚",
    textMeaningTranslate : "Р­РєСЃРїРµСЂРёРјРµРЅС‚ - СЌС‚Рѕ С‚РµСЃС‚, РєРѕС‚РѕСЂС‹Р№ РІС‹ РїСЂРѕРІРѕРґРёС‚Рµ, С‡С‚РѕР±С‹ СѓРІРёРґРµС‚СЊ, С‡С‚Рѕ РїСЂРѕРёР·РѕР№РґРµС‚",
    textExampleTranslate : "РЎС‚СѓРґРµРЅС‚ СЃРґРµР»Р°Р» СЌРєСЃРїРµСЂРёРјРµРЅС‚ РІ РєР»Р°СЃСЃРµ РЅР°СѓРєРё",
    id                   : 27
  }, {
    word                 : "kill",
    image                : "files/02_0028.jpg",
    audio                : "files/02_0028.mp3",
    audioMeaning         : "files/02_0028_meaning.mp3",
    audioExample         : "files/02_0028_example.mp3",
    textMeaning          : "To kill someone or something is to make them die",
    textExample          : "I killed the fly",
    transcription        : "[kil]",
    wordTranslate        : "СѓР±РёР№СЃС‚РІРѕ",
    textMeaningTranslate : "РЈР±РёС‚СЊ РєРѕРіРѕ-С‚Рѕ РёР»Рё С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ Р·Р°СЃС‚Р°РІРёС‚СЊ РёС… СѓРјРµСЂРµС‚СЊ",
    textExampleTranslate : "РЇ СѓР±РёР» РјСѓС…Сѓ",
    id                   : 28
  }, {
    word                 : "laboratory",
    image                : "files/02_0029.jpg",
    audio                : "files/02_0029.mp3",
    audioMeaning         : "files/02_0029_meaning.mp3",
    audioExample         : "files/02_0029_example.mp3",
    textMeaning          : "A laboratory is a room where a scientist works",
    textExample          : "My mother works in a laboratory",
    transcription        : "[lЗЅbЙ™rЙ™tЙ”МЂЛђri]",
    wordTranslate        : "Р»Р°Р±РѕСЂР°С‚РѕСЂРёСЏ",
    textMeaningTranslate : "Р›Р°Р±РѕСЂР°С‚РѕСЂРёСЏ - СЌС‚Рѕ РєРѕРјРЅР°С‚Р°, РіРґРµ СЂР°Р±РѕС‚Р°РµС‚ СѓС‡РµРЅС‹Р№",
    textExampleTranslate : "РњРѕСЏ РјР°РјР° СЂР°Р±РѕС‚Р°РµС‚ РІ Р»Р°Р±РѕСЂР°С‚РѕСЂРёРё",
    id                   : 29
  }, {
    word                 : "laugh",
    image                : "files/02_0030.jpg",
    audio                : "files/02_0030.mp3",
    audioMeaning         : "files/02_0030_meaning.mp3",
    audioExample         : "files/02_0030_example.mp3",
    textMeaning          : "Laugh is the sound made when someone is happy or a funny thing occurs",
    textExample          : "The sound of her laugh filled the room",
    transcription        : "[lГ¦f]",
    wordTranslate        : "СЃРјРµС…",
    textMeaningTranslate : "РЎРјРµС… - СЌС‚Рѕ Р·РІСѓРє, РєРѕС‚РѕСЂС‹Р№ Р·РІСѓС‡РёС‚, РєРѕРіРґР° РєС‚Рѕ-С‚Рѕ СЃС‡Р°СЃС‚Р»РёРІ РёР»Рё РїСЂРѕРёСЃС…РѕРґРёС‚ СЃРјРµС€РЅР°СЏ РІРµС‰СЊ",
    textExampleTranslate : "Р—РІСѓРє РµРµ СЃРјРµС…Р° Р·Р°РїРѕР»РЅРёР» РєРѕРјРЅР°С‚Сѓ",
    id                   : 30
  }, {
    word                 : "loud",
    image                : "files/02_0031.jpg",
    audio                : "files/02_0031.mp3",
    audioMeaning         : "files/02_0031_meaning.mp3",
    audioExample         : "files/02_0031_example.mp3",
    textMeaning          : "If a sound is loud, it is strong and very easy to hear",
    textExample          : "The manвЂ™s voice was so loud that we all could hear him",
    transcription        : "[laud]",
    wordTranslate        : "РіСЂРѕРјРєРёР№",
    textMeaningTranslate : "Р•СЃР»Рё Р·РІСѓРє РіСЂРѕРјРєРёР№, РѕРЅ СЃРёР»СЊРЅС‹Р№ Рё РѕС‡РµРЅСЊ Р»РµРіРєРѕ СЃР»С‹С€РёРјС‹Р№",
    textExampleTranslate : "Р“РѕР»РѕСЃ СЌС‚РѕРіРѕ С‡РµР»РѕРІРµРєР° Р±С‹Р» РЅР°СЃС‚РѕР»СЊРєРѕ РіСЂРѕРјРєРёРј, С‡С‚Рѕ РјС‹ РІСЃРµ РјРѕРіР»Рё СЃР»С‹С€Р°С‚СЊ РµРіРѕ",
    id                   : 31
  }, {
    word                 : "nervous",
    image                : "files/02_0032.jpg",
    audio                : "files/02_0032.mp3",
    audioMeaning         : "files/02_0032_meaning.mp3",
    audioExample         : "files/02_0032_example.mp3",
    textMeaning          : "When a person is nervous, they think something bad will happen",
    textExample          : "The boy became nervous when he heard the news",
    transcription        : "[nЙ™МЃЛђrvЙ™s]",
    wordTranslate        : "РЅРµСЂРІРЅР°СЏ",
    textMeaningTranslate : "РљРѕРіРґР° С‡РµР»РѕРІРµРє РЅРµСЂРІРЅРёС‡Р°РµС‚, РѕРЅ РґСѓРјР°РµС‚, С‡С‚Рѕ СЃР»СѓС‡РёС‚СЃСЏ С‡С‚Рѕ-С‚Рѕ РїР»РѕС…РѕРµ",
    textExampleTranslate : "РњР°Р»СЊС‡РёРє СЃС‚Р°Р» РЅРµСЂРІРЅС‹Рј, РєРѕРіРґР° СѓСЃР»С‹С€Р°Р» РЅРѕРІРѕСЃС‚Рё",
    id                   : 32
  }, {
    word                 : "noise",
    image                : "files/02_0033.jpg",
    audio                : "files/02_0033.mp3",
    audioMeaning         : "files/02_0033_meaning.mp3",
    audioExample         : "files/02_0033_example.mp3",
    textMeaning          : "A noise is an unpleasant sound",
    textExample          : "The crying baby made a loud noise",
    transcription        : "[nЙ”iz]",
    wordTranslate        : "С€СѓРј",
    textMeaningTranslate : "РЁСѓРј - СЌС‚Рѕ РЅРµРїСЂРёСЏС‚РЅС‹Р№ Р·РІСѓРє",
    textExampleTranslate : "РџР»Р°С‡СѓС‰РёР№ СЂРµР±РµРЅРѕРє РёР·РґР°Р» РіСЂРѕРјРєРёР№ С€СѓРј",
    id                   : 33
  }, {
    word                 : "project",
    image                : "files/02_0034.jpg",
    audio                : "files/02_0034.mp3",
    audioMeaning         : "files/02_0034_meaning.mp3",
    audioExample         : "files/02_0034_example.mp3",
    textMeaning          : "A project is a type of work that you do for school or a job",
    textExample          : "His afternoon work project was to paint the room green",
    transcription        : "[prО¬dК’ekt]",
    wordTranslate        : "РїСЂРѕРµРєС‚",
    textMeaningTranslate : "РџСЂРѕРµРєС‚ - СЌС‚Рѕ РІРёРґ СЂР°Р±РѕС‚С‹, РєРѕС‚РѕСЂСѓСЋ РІС‹ РґРµР»Р°РµС‚Рµ РґР»СЏ С€РєРѕР»С‹ РёР»Рё СЂР°Р±РѕС‚С‹",
    textExampleTranslate : "Р•РіРѕ РґРЅРµРІРЅРѕР№ СЂР°Р±РѕС‡РёР№ РїСЂРѕРµРєС‚ РґРѕР»Р¶РµРЅ Р±С‹Р» РїРѕРєСЂР°СЃРёС‚СЊ РєРѕРјРЅР°С‚Сѓ РІ Р·РµР»РµРЅС‹Р№ С†РІРµС‚",
    id                   : 34
  }, {
    word                 : "scare",
    image                : "files/02_0035.jpg",
    audio                : "files/02_0035.mp3",
    audioMeaning         : "files/02_0035_meaning.mp3",
    audioExample         : "files/02_0035_example.mp3",
    textMeaning          : "To scare someone is to make them feel afraid",
    textExample          : "My uncle was scared by what he saw in the room",
    transcription        : "[skЙ›Й™Лђr]",
    wordTranslate        : "РїРѕРїСѓРіР°С‚СЊ",
    textMeaningTranslate : "РќР°РїСѓРіР°С‚СЊ РєРѕРіРѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ Р·Р°СЃС‚Р°РІРёС‚СЊ РµРіРѕ Р±РѕСЏС‚СЊСЃСЏ",
    textExampleTranslate : "РњРѕР№ РґСЏРґСЏ РёСЃРїСѓРіР°Р»СЃСЏ СѓРІРёРґРµРЅРЅРѕРіРѕ РІ РєРѕРјРЅР°С‚Рµ",
    id                   : 35
  }, {
    word                 : "secret",
    image                : "files/02_0036.jpg",
    audio                : "files/02_0036.mp3",
    audioMeaning         : "files/02_0036_meaning.mp3",
    audioExample         : "files/02_0036_example.mp3",
    textMeaning          : "A secret is something that you do not tell other people",
    textExample          : "The two boys were sharing a secret",
    transcription        : "[sГ­Лђkrit]",
    wordTranslate        : "СЃРµРєСЂРµС‚",
    textMeaningTranslate : "РЎРµРєСЂРµС‚ СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ РІС‹ РЅРµ РіРѕРІРѕСЂРёС‚Рµ РґСЂСѓРіРёРј Р»СЋРґСЏРј",
    textExampleTranslate : "Р”РІР° РјР°Р»СЊС‡РёРєР° РґРµР»РёР»РёСЃСЊ СЃРµРєСЂРµС‚РѕРј",
    id                   : 36
  }, {
    word                 : "shout",
    image                : "files/02_0037.jpg",
    audio                : "files/02_0037.mp3",
    audioMeaning         : "files/02_0037_meaning.mp3",
    audioExample         : "files/02_0037_example.mp3",
    textMeaning          : "To shout is to say something loudly",
    textExample          : "My boss shouted at me because I was late for work",
    transcription        : "[Кѓaut]",
    wordTranslate        : "РєСЂРёС‡Р°С‚СЊ",
    textMeaningTranslate : "РљСЂРёС‡Р°С‚СЊ - СЌС‚Рѕ РіРѕРІРѕСЂРёС‚СЊ С‡С‚Рѕ-С‚Рѕ РіСЂРѕРјРєРѕ",
    textExampleTranslate : "РњРѕР№ РЅР°С‡Р°Р»СЊРЅРёРє РєСЂРёС‡Р°Р» РЅР° РјРµРЅСЏ, РїРѕС‚РѕРјСѓ С‡С‚Рѕ СЏ РѕРїРѕР·РґР°Р» РЅР° СЂР°Р±РѕС‚Сѓ",
    id                   : 37
  }, {
    word                 : "smell",
    image                : "files/02_0038.jpg",
    audio                : "files/02_0038.mp3",
    audioMeaning         : "files/02_0038_meaning.mp3",
    audioExample         : "files/02_0038_example.mp3",
    textMeaning          : "To smell something means to use your nose to sense it",
    textExample          : "The two friends smelled the flower",
    transcription        : "[smel]",
    wordTranslate        : "Р·Р°РїР°С…",
    textMeaningTranslate : "РћР±РѕРЅСЏС‚СЊ С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ СЃРІРѕР№ РЅРѕСЃ, С‡С‚РѕР±С‹ РїРѕС‡СѓРІСЃС‚РІРѕРІР°С‚СЊ СЌС‚Рѕ",
    textExampleTranslate : "Р”РІР° РґСЂСѓРіР° РїРѕРЅСЋС…Р°Р»Рё С†РІРµС‚РѕРє",
    id                   : 38
  }, {
    word                 : "terrible",
    image                : "files/02_0039.jpg",
    audio                : "files/02_0039.mp3",
    audioMeaning         : "files/02_0039_meaning.mp3",
    audioExample         : "files/02_0039_example.mp3",
    textMeaning          : "If something is terrible, it is very bad",
    textExample          : "The way he treated his classmate was terrible",
    transcription        : "[tГ©rЙ™bЙ™l]",
    wordTranslate        : "СѓР¶Р°СЃРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СѓР¶Р°СЃРЅРѕ, СЌС‚Рѕ РѕС‡РµРЅСЊ РїР»РѕС…Рѕ",
    textExampleTranslate : "РўРѕ, РєР°Рє РѕРЅ РѕС‚РЅРѕСЃРёР»СЃСЏ Рє СЃРІРѕРµРјСѓ РѕРґРЅРѕРєР»Р°СЃСЃРЅРёРєСѓ, Р±С‹Р»Рѕ СѓР¶Р°СЃРЅРѕ",
    id                   : 39
  }, {
    word                 : "worse",
    image                : "files/02_0040.jpg",
    audio                : "files/02_0040.mp3",
    audioMeaning         : "files/02_0040_meaning.mp3",
    audioExample         : "files/02_0040_example.mp3",
    textMeaning          : "If something is worse, it is of poorer quality than another thing",
    textExample          : "Business was worse this month than last month",
    transcription        : "[wЙ™Лђrs]",
    wordTranslate        : "С…СѓР¶Рµ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ С…СѓР¶Рµ, СЌС‚Рѕ С…СѓР¶Рµ, С‡РµРј С‡С‚Рѕ-С‚Рѕ РґСЂСѓРіРѕРµ",
    textExampleTranslate : "Р‘РёР·РЅРµСЃ Р±С‹Р» С…СѓР¶Рµ РІ СЌС‚РѕРј РјРµСЃСЏС†Рµ, С‡РµРј РІ РїСЂРѕС€Р»РѕРј РјРµСЃСЏС†Рµ",
    id                   : 40
  }, {
    word                 : "alien",
    image                : "files/03_0041.jpg",
    audio                : "files/03_0041.mp3",
    audioMeaning         : "files/03_0041_meaning.mp3",
    audioExample         : "files/03_0041_example.mp3",
    textMeaning          : "An alien is a creature from a different world",
    textExample          : "The alien came in peace",
    transcription        : "[Г©iljЙ™n]",
    wordTranslate        : "РёРЅРѕРїР»Р°РЅРµС‚СЏРЅРёРЅ",
    textMeaningTranslate : "РРЅРѕРїР»Р°РЅРµС‚СЏРЅРёРЅ - СЌС‚Рѕ СЃСѓС‰РµСЃС‚РІРѕ РёР· РґСЂСѓРіРѕРіРѕ РјРёСЂР°",
    textExampleTranslate : "РїСЂРёС€РµР»РµС† РїСЂРёС€РµР» СЃ РјРёСЂРѕРј",
    id                   : 41
  }, {
    word                 : "among",
    image                : "files/03_0042.jpg",
    audio                : "files/03_0042.mp3",
    audioMeaning         : "files/03_0042_meaning.mp3",
    audioExample         : "files/03_0042_example.mp3",
    textMeaning          : "If you are among certain things, they are all around you",
    textExample          : "There was a red apple among the green ones",
    transcription        : "[Й™mКЊМЂЕ‹]",
    wordTranslate        : "СЃСЂРµРґРё",
    textMeaningTranslate : "Р•СЃР»Рё РІС‹ СЃСЂРµРґРё РѕРїСЂРµРґРµР»РµРЅРЅС‹С… РІРµС‰РµР№, РѕРЅРё РІСЃРµ РІРѕРєСЂСѓРі РІР°СЃ",
    textExampleTranslate : "РЎСЂРµРґРё Р·РµР»РµРЅС‹С… Р±С‹Р»Рѕ РєСЂР°СЃРЅРѕРµ СЏР±Р»РѕРєРѕ",
    id                   : 42
  }, {
    word                 : "chart",
    image                : "files/03_0043.jpg",
    audio                : "files/03_0043.mp3",
    audioMeaning         : "files/03_0043_meaning.mp3",
    audioExample         : "files/03_0043_example.mp3",
    textMeaning          : "A chart is a list of information",
    textExample          : "We used a chart to see how we had improved",
    transcription        : "[tКѓЙ‘Лђrt]",
    wordTranslate        : "РґРёР°РіСЂР°РјРјР°",
    textMeaningTranslate : "Р”РёР°РіСЂР°РјРјР° - СЌС‚Рѕ СЃРїРёСЃРѕРє РёРЅС„РѕСЂРјР°С†РёРё",
    textExampleTranslate : "РњС‹ РёСЃРїРѕР»СЊР·РѕРІР°Р»Рё РіСЂР°С„РёРє, С‡С‚РѕР±С‹ СѓРІРёРґРµС‚СЊ, РєР°Рє РјС‹ СѓР»СѓС‡С€РёР»Рё",
    id                   : 43
  }, {
    word                 : "cloud",
    image                : "files/03_0044.jpg",
    audio                : "files/03_0044.mp3",
    audioMeaning         : "files/03_0044_meaning.mp3",
    audioExample         : "files/03_0044_example.mp3",
    textMeaning          : "A cloud is a group of water drops in the sky",
    textExample          : "The sky was filled with white clouds",
    transcription        : "[klaud]",
    wordTranslate        : "РѕР±Р»Р°РєРѕ",
    textMeaningTranslate : "РћР±Р»Р°РєРѕ - СЌС‚Рѕ РіСЂСѓРїРїР° РєР°РїРµР»СЊ РІРѕРґС‹ РІ РЅРµР±Рµ",
    textExampleTranslate : "РќРµР±Рѕ Р±С‹Р»Рѕ РЅР°РїРѕР»РЅРµРЅРѕ Р±РµР»С‹РјРё РѕР±Р»Р°РєР°РјРё",
    id                   : 44
  }, {
    word                 : "describe",
    image                : "files/03_0045.jpg",
    audio                : "files/03_0045.mp3",
    audioMeaning         : "files/03_0045_meaning.mp3",
    audioExample         : "files/03_0045_example.mp3",
    textMeaning          : "To describe is to say or write what someone or something is like",
    textExample          : "They described their tree as colorful, with gold ribbon and a star",
    transcription        : "[diskrГЎib]",
    wordTranslate        : "РѕРїРёСЃР°С‚СЊ",
    textMeaningTranslate : "РћРїРёСЃР°С‚СЊ - СЌС‚Рѕ СЃРєР°Р·Р°С‚СЊ РёР»Рё РЅР°РїРёСЃР°С‚СЊ, РЅР° С‡С‚Рѕ РїРѕС…РѕР¶ РєС‚Рѕ-С‚Рѕ РёР»Рё С‡С‚Рѕ-С‚Рѕ",
    textExampleTranslate : "РћРЅРё РѕРїРёСЃР°Р»Рё СЃРІРѕРµ РґРµСЂРµРІРѕ РєР°Рє РєСЂР°СЃРѕС‡РЅРѕРµ, СЃ Р·РѕР»РѕС‚РѕР№ Р»РµРЅС‚РѕР№ Рё Р·РІРµР·РґРѕР№",
    id                   : 45
  }, {
    word                 : "ever",
    image                : "files/03_0046.jpg",
    audio                : "files/03_0046.mp3",
    audioMeaning         : "files/03_0046_meaning.mp3",
    audioExample         : "files/03_0046_example.mp3",
    textMeaning          : "Ever means at any time",
    textExample          : "Going skiing last winter was the most fun IвЂ™ve ever had",
    transcription        : "[Г©vЙ™r]",
    wordTranslate        : "РєРѕРіРґР°-Р»РёР±Рѕ",
    textMeaningTranslate : "Р’СЃРµРіРґР° РѕР·РЅР°С‡Р°РµС‚ РІ Р»СЋР±РѕРµ РІСЂРµРјСЏ",
    textExampleTranslate : "РљР°С‚Р°С‚СЊСЃСЏ РЅР° Р»С‹Р¶Р°С… РїСЂРѕС€Р»РѕР№ Р·РёРјРѕР№ Р±С‹Р»Рѕ СЃР°РјС‹Рј РІРµСЃРµР»С‹Рј РёР· РІСЃРµРіРѕ, С‡С‚Рѕ СЏ РєРѕРіРґР°-Р»РёР±Рѕ РµР»",
    id                   : 46
  }, {
    word                 : "fail",
    image                : "files/03_0047.jpg",
    audio                : "files/03_0047.mp3",
    audioMeaning         : "files/03_0047_meaning.mp3",
    audioExample         : "files/03_0047_example.mp3",
    textMeaning          : "To fail means you do not succeed in what you try to do",
    textExample          : "Since he failed to get the job, he was sad",
    transcription        : "[feil]",
    wordTranslate        : "РїРѕС‚РµСЂРїРµС‚СЊ РїРѕСЂР°Р¶РµРЅРёРµ",
    textMeaningTranslate : "РќРµСѓРґР°С‡Р° РѕР·РЅР°С‡Р°РµС‚, С‡С‚Рѕ РІР°Рј РЅРµ СѓРґР°РµС‚СЃСЏ С‚Рѕ, С‡С‚Рѕ РІС‹ РїС‹С‚Р°РµС‚РµСЃСЊ СЃРґРµР»Р°С‚СЊ",
    textExampleTranslate : "РўР°Рє РєР°Рє РѕРЅ РЅРµ СЃРјРѕРі РїРѕР»СѓС‡РёС‚СЊ СЂР°Р±РѕС‚Сѓ, РµРјСѓ Р±С‹Р»Рѕ РіСЂСѓСЃС‚РЅРѕ",
    id                   : 47
  }, {
    word                 : "grade",
    image                : "files/03_0048.jpg",
    audio                : "files/03_0048.mp3",
    audioMeaning         : "files/03_0048_meaning.mp3",
    audioExample         : "files/03_0048_example.mp3",
    textMeaning          : "A grade is a score or mark given to someoneвЂ™s work",
    textExample          : "I managed to get good grades on my report card",
    transcription        : "[greid]",
    wordTranslate        : "РєР»Р°СЃСЃ",
    textMeaningTranslate : "РћС†РµРЅРєР° - СЌС‚Рѕ РѕС†РµРЅРєР° РёР»Рё РѕС†РµРЅРєР°, РїСЂРёСЃРІРѕРµРЅРЅР°СЏ С‡СЊРµР№-Р»РёР±Рѕ СЂР°Р±РѕС‚Рµ",
    textExampleTranslate : "РњРЅРµ СѓРґР°Р»РѕСЃСЊ РїРѕР»СѓС‡РёС‚СЊ С…РѕСЂРѕС€РёРµ РѕС†РµРЅРєРё РЅР° РјРѕРµРј С‚Р°Р±РµР»Рµ",
    id                   : 48
  }, {
    word                 : "instead",
    image                : "files/03_0049.jpg",
    audio                : "files/03_0049.mp3",
    audioMeaning         : "files/03_0049_meaning.mp3",
    audioExample         : "files/03_0049_example.mp3",
    textMeaning          : "Instead means in place of",
    textExample          : "He ate the carrot instead of the ice cream",
    transcription        : "[instГ©d]",
    wordTranslate        : "РІРјРµСЃС‚Рѕ",
    textMeaningTranslate : "Р’РјРµСЃС‚Рѕ РѕР·РЅР°С‡Р°РµС‚ РІРјРµСЃС‚Рѕ",
    textExampleTranslate : "РћРЅ СЃСЉРµР» РјРѕСЂРєРѕРІРєСѓ РІРјРµСЃС‚Рѕ РјРѕСЂРѕР¶РµРЅРѕРіРѕ",
    id                   : 49
  }, {
    word                 : "library",
    image                : "files/03_0050.jpg",
    audio                : "files/03_0050.mp3",
    audioMeaning         : "files/03_0050_meaning.mp3",
    audioExample         : "files/03_0050_example.mp3",
    textMeaning          : "A library is a place where you go to read books",
    textExample          : "The library at school is full of books",
    transcription        : "[lГЎibrГЁri]",
    wordTranslate        : "Р±РёР±Р»РёРѕС‚РµРєР°",
    textMeaningTranslate : "Р‘РёР±Р»РёРѕС‚РµРєР° - СЌС‚Рѕ РјРµСЃС‚Рѕ, РєСѓРґР° РІС‹ С…РѕРґРёС‚Рµ С‡РёС‚Р°С‚СЊ РєРЅРёРіРё",
    textExampleTranslate : "Р‘РёР±Р»РёРѕС‚РµРєР° РІ С€РєРѕР»Рµ РїРѕР»РЅР° РєРЅРёРі",
    id                   : 50
  }, {
    word                 : "photograph",
    image                : "files/03_0051.jpg",
    audio                : "files/03_0051.mp3",
    audioMeaning         : "files/03_0051_meaning.mp3",
    audioExample         : "files/03_0051_example.mp3",
    textMeaning          : "I like taking photographs",
    textExample          : "I took this photograph with my cell phone",
    transcription        : "[fГіutЙ™grУ•f]",
    wordTranslate        : "С„РѕС‚РѕРіСЂР°С„РёСЏ",
    textMeaningTranslate : "РњРЅРµ РЅСЂР°РІРёС‚СЃСЏ С„РѕС‚РѕРіСЂР°С„РёСЂРѕРІР°С‚СЊ",
    textExampleTranslate : "РЇ СЃРґРµР»Р°Р» СЌС‚Сѓ С„РѕС‚РѕРіСЂР°С„РёСЋ РЅР° СЃРІРѕР№ РјРѕР±РёР»СЊРЅС‹Р№",
    id                   : 51
  }, {
    word                 : "planet",
    image                : "files/03_0052.jpg",
    audio                : "files/03_0052.mp3",
    audioMeaning         : "files/03_0052_meaning.mp3",
    audioExample         : "files/03_0052_example.mp3",
    textMeaning          : "A planet is a large round thing in space",
    textExample          : "Saturn is the planet with the ring around it",
    transcription        : "[plЗЅnЙ™t]",
    wordTranslate        : "РїР»Р°РЅРµС‚Р°",
    textMeaningTranslate : "РџР»Р°РЅРµС‚Р° - СЌС‚Рѕ Р±РѕР»СЊС€Р°СЏ РєСЂСѓРіР»Р°СЏ РІРµС‰СЊ РІ РєРѕСЃРјРѕСЃРµ",
    textExampleTranslate : "РЎР°С‚СѓСЂРЅ - РїР»Р°РЅРµС‚Р° СЃ РєРѕР»СЊС†РѕРј РІРѕРєСЂСѓРі РЅРµРіРѕ",
    id                   : 52
  }, {
    word                 : "report",
    image                : "files/03_0053.jpg",
    audio                : "files/03_0053.mp3",
    audioMeaning         : "files/03_0053_meaning.mp3",
    audioExample         : "files/03_0053_example.mp3",
    textMeaning          : "A report is something someone writes for school or work",
    textExample          : "Karen had trouble writing her report",
    transcription        : "[ripЙ”МЃЛђrt]",
    wordTranslate        : "РѕС‚С‡РµС‚",
    textMeaningTranslate : "РћС‚С‡РµС‚ - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ РєС‚Рѕ-С‚Рѕ РїРёС€РµС‚ РґР»СЏ С€РєРѕР»С‹ РёР»Рё СЂР°Р±РѕС‚С‹",
    textExampleTranslate : "РљР°СЂРµРЅ РЅРµ РјРѕРіР»Р° РЅР°РїРёСЃР°С‚СЊ СЃРІРѕР№ РѕС‚С‡РµС‚",
    id                   : 53
  }, {
    word                 : "several",
    image                : "files/03_0054.jpg",
    audio                : "files/03_0054.mp3",
    audioMeaning         : "files/03_0054_meaning.mp3",
    audioExample         : "files/03_0054_example.mp3",
    textMeaning          : "Several is more than two but not many",
    textExample          : "He had to read several books for class",
    transcription        : "[sГ©vЙ™rЙ™l]",
    wordTranslate        : "РЅРµСЃРєРѕР»СЊРєРѕ",
    textMeaningTranslate : "РќРµСЃРєРѕР»СЊРєРѕ Р±РѕР»СЊС€Рµ РґРІСѓС…, РЅРѕ РЅРµ РјРЅРѕРіРѕ",
    textExampleTranslate : "РћРЅ РґРѕР»Р¶РµРЅ Р±С‹Р» РїСЂРѕС‡РёС‚Р°С‚СЊ РЅРµСЃРєРѕР»СЊРєРѕ РєРЅРёРі РґР»СЏ РєР»Р°СЃСЃР°",
    id                   : 54
  }, {
    word                 : "shape",
    image                : "files/03_0055.jpg",
    audio                : "files/03_0055.mp3",
    audioMeaning         : "files/03_0055_meaning.mp3",
    audioExample         : "files/03_0055_example.mp3",
    textMeaning          : "An objectвЂ™s shape is the arrangement of its sides and surfaces",
    textExample          : "Even with your eyes closed you can feel the shape of it",
    transcription        : "[Кѓeip]",
    wordTranslate        : "С„РѕСЂРјР°",
    textMeaningTranslate : "Р¤РѕСЂРјР° РѕР±СЉРµРєС‚Р° - СЌС‚Рѕ СЂР°СЃРїРѕР»РѕР¶РµРЅРёРµ РµРіРѕ СЃС‚РѕСЂРѕРЅ Рё РїРѕРІРµСЂС…РЅРѕСЃС‚РµР№",
    textExampleTranslate : "Р”Р°Р¶Рµ СЃ Р·Р°РєСЂС‹С‚С‹РјРё РіР»Р°Р·Р°РјРё РІС‹ РјРѕР¶РµС‚Рµ РїРѕС‡СѓРІСЃС‚РІРѕРІР°С‚СЊ РµРіРѕ С„РѕСЂРјСѓ",
    id                   : 55
  }, {
    word                 : "solve",
    image                : "files/03_0056.jpg",
    audio                : "files/03_0056.mp3",
    audioMeaning         : "files/03_0056_meaning.mp3",
    audioExample         : "files/03_0056_example.mp3",
    textMeaning          : "To solve something is to find an answer to it",
    textExample          : "All the students could easily solve the math problem",
    transcription        : "[sЙ‘lv]",
    wordTranslate        : "СЂРµС€Р°С‚СЊ",
    textMeaningTranslate : "Р РµС€РёС‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РЅР°Р№С‚Рё РѕС‚РІРµС‚",
    textExampleTranslate : "Р’СЃРµ СѓС‡РµРЅРёРєРё РјРѕРіР»Рё Р»РµРіРєРѕ СЂРµС€РёС‚СЊ РјР°С‚РµРјР°С‚РёС‡РµСЃРєСѓСЋ Р·Р°РґР°С‡Сѓ",
    id                   : 56
  }, {
    word                 : "suddenly",
    image                : "files/03_0057.jpg",
    audio                : "files/03_0057.mp3",
    audioMeaning         : "files/03_0057_meaning.mp3",
    audioExample         : "files/03_0057_example.mp3",
    textMeaning          : "If something happens suddenly, it happens quickly and unexpectedly",
    textExample          : "I was surprised when my friends suddenly shouted, вЂњHappy birthday!вЂќ",
    transcription        : "[sКЊМЃdnli]",
    wordTranslate        : "РІРґСЂСѓРі, РІРЅРµР·Р°РїРЅРѕ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚ РІРЅРµР·Р°РїРЅРѕ, СЌС‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚ Р±С‹СЃС‚СЂРѕ Рё РЅРµРѕР¶РёРґР°РЅРЅРѕ",
    textExampleTranslate : "РЇ Р±С‹Р» СѓРґРёРІР»РµРЅ, РєРѕРіРґР° РјРѕРё РґСЂСѓР·СЊСЏ РІРґСЂСѓРі Р·Р°РєСЂРёС‡Р°Р»Рё: 'РЎ РґРЅРµРј СЂРѕР¶РґРµРЅРёСЏ!'",
    id                   : 57
  }, {
    word                 : "suppose",
    image                : "files/03_0058.jpg",
    audio                : "files/03_0058.mp3",
    audioMeaning         : "files/03_0058_meaning.mp3",
    audioExample         : "files/03_0058_example.mp3",
    textMeaning          : "To suppose is to guess",
    textExample          : "I suppose I should go home now",
    transcription        : "[sЙ™pГіuz]",
    wordTranslate        : "РїСЂРµРґРїРѕР»РѕР¶РёРј",
    textMeaningTranslate : "РџСЂРµРґРїРѕР»РѕР¶РёС‚СЊ, Р·РЅР°С‡РёС‚ СѓРіР°РґР°С‚СЊ",
    textExampleTranslate : "РџРѕР»Р°РіР°СЋ, РјРЅРµ РїРѕСЂР° РґРѕРјРѕР№",
    id                   : 58
  }, {
    word                 : "understand",
    image                : "files/03_0059.jpg",
    audio                : "files/03_0059.mp3",
    audioMeaning         : "files/03_0059_meaning.mp3",
    audioExample         : "files/03_0059_example.mp3",
    textMeaning          : "To understand something you need to know what it means",
    textExample          : "Henry could not understand the message",
    transcription        : "[О›ndЙ™rstЗЅnd]",
    wordTranslate        : "РїРѕРЅРёРјР°СЋ",
    textMeaningTranslate : "Р§С‚РѕР±С‹ РїРѕРЅСЏС‚СЊ С‡С‚Рѕ-С‚Рѕ, РЅСѓР¶РЅРѕ Р·РЅР°С‚СЊ, С‡С‚Рѕ СЌС‚Рѕ Р·РЅР°С‡РёС‚",
    textExampleTranslate : "Р“РµРЅСЂРё РЅРµ РјРѕРі РїРѕРЅСЏС‚СЊ СЃРѕРѕР±С‰РµРЅРёРµ",
    id                   : 59
  }, {
    word                 : "view",
    image                : "files/03_0060.jpg",
    audio                : "files/03_0060.mp3",
    audioMeaning         : "files/03_0060_meaning.mp3",
    audioExample         : "files/03_0060_example.mp3",
    textMeaning          : "To view is to look at something",
    textExample          : "Michael likes to view himself in the mirror",
    transcription        : "[vjuЛђ]",
    wordTranslate        : "РїРѕСЃРјРѕС‚СЂРµС‚СЊ",
    textMeaningTranslate : "РЎРјРѕС‚СЂРµС‚СЊ - Р·РЅР°С‡РёС‚ СЃРјРѕС‚СЂРµС‚СЊ РЅР° С‡С‚Рѕ-С‚Рѕ",
    textExampleTranslate : "РњРёС…Р°РёР»Сѓ РЅСЂР°РІРёС‚СЃСЏ РІРёРґРµС‚СЊ СЃРµР±СЏ РІ Р·РµСЂРєР°Р»Рµ",
    id                   : 60
  }, {
    word                 : "appropriate",
    image                : "files/04_0061.jpg",
    audio                : "files/04_0061.mp3",
    audioMeaning         : "files/04_0061_meaning.mp3",
    audioExample         : "files/04_0061_example.mp3",
    textMeaning          : "When a thing is appropriate, it is right or normal",
    textExample          : "ItвЂ™s appropriate to wear a suit when you go to the office",
    transcription        : "[Й™prГіupriГЁit]",
    wordTranslate        : "РїРѕРґС…РѕРґСЏС‰РµРµ",
    textMeaningTranslate : "РљРѕРіРґР° РІРµС‰СЊ СѓРјРµСЃС‚РЅР°, РѕРЅР° РїСЂР°РІРёР»СЊРЅР°СЏ РёР»Рё РЅРѕСЂРјР°Р»СЊРЅР°СЏ",
    textExampleTranslate : "РЈРјРµСЃС‚РЅРѕ РЅРѕСЃРёС‚СЊ РєРѕСЃС‚СЋРј, РєРѕРіРґР° РІС‹ РёРґРµС‚Рµ РІ РѕС„РёСЃ",
    id                   : 61
  }, {
    word                 : "avoid",
    image                : "files/04_0062.jpg",
    audio                : "files/04_0062.mp3",
    audioMeaning         : "files/04_0062_meaning.mp3",
    audioExample         : "files/04_0062_example.mp3",
    textMeaning          : "To avoid something is to stay away from it",
    textExample          : "Avoid the broken bottle on the floor",
    transcription        : "[Й™vЙ”МЃid]",
    wordTranslate        : "РёР·Р±РµРіР°С‚СЊ",
    textMeaningTranslate : "РР·Р±РµРіР°С‚СЊ С‡РµРіРѕ-Р»РёР±Рѕ - Р·РЅР°С‡РёС‚ РґРµСЂР¶Р°С‚СЊСЃСЏ РїРѕРґР°Р»СЊС€Рµ РѕС‚ СЌС‚РѕРіРѕ",
    textExampleTranslate : "РР·Р±РµРіР°Р№С‚Рµ СЂР°Р·Р±РёС‚РѕР№ Р±СѓС‚С‹Р»РєРё РЅР° РїРѕР»Сѓ",
    id                   : 62
  }, {
    word                 : "behave",
    image                : "files/04_0063.jpg",
    audio                : "files/04_0063.mp3",
    audioMeaning         : "files/04_0063_meaning.mp3",
    audioExample         : "files/04_0063_example.mp3",
    textMeaning          : "To behave is to act in a particular way, especially to be good",
    textExample          : "She always behaves well when her father is around",
    transcription        : "[bihГ©iv]",
    wordTranslate        : "РІРµСЃС‚Рё СЃРµР±СЏ",
    textMeaningTranslate : "Р’РµСЃС‚Рё СЃРµР±СЏ - Р·РЅР°С‡РёС‚ РґРµР№СЃС‚РІРѕРІР°С‚СЊ РѕРїСЂРµРґРµР»РµРЅРЅС‹Рј РѕР±СЂР°Р·РѕРј, РѕСЃРѕР±РµРЅРЅРѕ Р±С‹С‚СЊ С…РѕСЂРѕС€РёРј",
    textExampleTranslate : "РћРЅР° РІСЃРµРіРґР° РІРµРґРµС‚ СЃРµР±СЏ С…РѕСЂРѕС€Рѕ, РєРѕРіРґР° РµРµ РѕС‚РµС† СЂСЏРґРѕРј",
    id                   : 63
  }, {
    word                 : "calm",
    image                : "files/04_0064.jpg",
    audio                : "files/04_0064.mp3",
    audioMeaning         : "files/04_0064_meaning.mp3",
    audioExample         : "files/04_0064_example.mp3",
    textMeaning          : "When someone is calm, they do not get excited or upset",
    textExample          : "A nice warm bath makes me feel so calm",
    transcription        : "[kЙ‘Лђm]",
    wordTranslate        : "СЃРїРѕРєРѕР№РЅС‹Р№",
    textMeaningTranslate : "РљРѕРіРґР° РєС‚Рѕ-С‚Рѕ СЃРїРѕРєРѕРµРЅ, РѕРЅ РЅРµ РІРѕР»РЅСѓРµС‚СЃСЏ Рё РЅРµ СЂР°СЃСЃС‚СЂР°РёРІР°РµС‚СЃСЏ",
    textExampleTranslate : "РҐРѕСЂРѕС€Р°СЏ С‚РµРїР»Р°СЏ РІР°РЅРЅР° Р·Р°СЃС‚Р°РІР»СЏРµС‚ РјРµРЅСЏ С‡СѓРІСЃС‚РІРѕРІР°С‚СЊ СЃРµР±СЏ С‚Р°Рє СЃРїРѕРєРѕР№РЅРѕ",
    id                   : 64
  }, {
    word                 : "concern",
    image                : "files/04_0065.jpg",
    audio                : "files/04_0065.mp3",
    audioMeaning         : "files/04_0065_meaning.mp3",
    audioExample         : "files/04_0065_example.mp3",
    textMeaning          : "Concern is a feeling of worry",
    textExample          : "I was filled with concern after reading the newspaper",
    transcription        : "[kЙ™nsЙ™МЃЛђrn]",
    wordTranslate        : "Р±РµСЃРїРѕРєРѕР№СЃС‚РІРѕ",
    textMeaningTranslate : "Р‘РµСЃРїРѕРєРѕР№СЃС‚РІРѕ - СЌС‚Рѕ С‡СѓРІСЃС‚РІРѕ Р±РµСЃРїРѕРєРѕР№СЃС‚РІР°",
    textExampleTranslate : "РЇ Р±С‹Р» РїРѕР»РѕРЅ Р±РµСЃРїРѕРєРѕР№СЃС‚РІР° РїРѕСЃР»Рµ РїСЂРѕС‡С‚РµРЅРёСЏ РіР°Р·РµС‚С‹",
    id                   : 65
  }, {
    word                 : "content",
    image                : "files/04_0066.jpg",
    audio                : "files/04_0066.mp3",
    audioMeaning         : "files/04_0066_meaning.mp3",
    audioExample         : "files/04_0066_example.mp3",
    textMeaning          : "To be content is to be happy and not want more",
    textExample          : "The baby looked very content sitting on the floor",
    transcription        : "[kЙ™ntГ©nt]",
    wordTranslate        : "СЃРѕРґРµСЂР¶Р°РЅРёРµ",
    textMeaningTranslate : "Р‘С‹С‚СЊ РґРѕРІРѕР»СЊРЅС‹Рј Р·РЅР°С‡РёС‚ Р±С‹С‚СЊ СЃС‡Р°СЃС‚Р»РёРІС‹Рј Рё РЅРµ С…РѕС‚РµС‚СЊ Р±РѕР»СЊС€РµРіРѕ",
    textExampleTranslate : "Р РµР±РµРЅРѕРє РІС‹РіР»СЏРґРµР» РѕС‡РµРЅСЊ РґРѕРІРѕР»СЊРЅС‹Рј, СЃРёРґСЏ РЅР° РїРѕР»Сѓ",
    id                   : 66
  }, {
    word                 : "expect",
    image                : "files/04_0067.jpg",
    audio                : "files/04_0067.mp3",
    audioMeaning         : "files/04_0067_meaning.mp3",
    audioExample         : "files/04_0067_example.mp3",
    textMeaning          : "If you expect something to happen, you believe it will happen",
    textExample          : "I expect the bus to be here very soon",
    transcription        : "[ikspГ©kt]",
    wordTranslate        : "РѕР¶РёРґР°С‚СЊ",
    textMeaningTranslate : "Р•СЃР»Рё РІС‹ РѕР¶РёРґР°РµС‚Рµ, С‡С‚Рѕ С‡С‚Рѕ-С‚Рѕ СЃР»СѓС‡РёС‚СЃСЏ, РІС‹ РІРµСЂРёС‚Рµ, С‡С‚Рѕ СЌС‚Рѕ РїСЂРѕРёР·РѕР№РґРµС‚",
    textExampleTranslate : "РЇ РѕР¶РёРґР°СЋ, С‡С‚Рѕ Р°РІС‚РѕР±СѓСЃ Р±СѓРґРµС‚ Р·РґРµСЃСЊ РѕС‡РµРЅСЊ СЃРєРѕСЂРѕ",
    id                   : 67
  }, {
    word                 : "frequently",
    image                : "files/04_0068.jpg",
    audio                : "files/04_0068.mp3",
    audioMeaning         : "files/04_0068_meaning.mp3",
    audioExample         : "files/04_0068_example.mp3",
    textMeaning          : "When something happens frequently, it happens often",
    textExample          : "We meet frequently, either at the beginning or end of the week",
    transcription        : "[frГ­ЛђkwЙ™ntli]",
    wordTranslate        : "С‡Р°СЃС‚Рѕ",
    textMeaningTranslate : "РљРѕРіРґР° С‡С‚Рѕ-С‚Рѕ СЃР»СѓС‡Р°РµС‚СЃСЏ С‡Р°СЃС‚Рѕ, СЌС‚Рѕ СЃР»СѓС‡Р°РµС‚СЃСЏ С‡Р°СЃС‚Рѕ",
    textExampleTranslate : "РњС‹ С‡Р°СЃС‚Рѕ РІСЃС‚СЂРµС‡Р°РµРјСЃСЏ, Р»РёР±Рѕ РІ РЅР°С‡Р°Р»Рµ, Р»РёР±Рѕ РІ РєРѕРЅС†Рµ РЅРµРґРµР»Рё",
    id                   : 68
  }, {
    word                 : "habit",
    image                : "files/04_0069.jpg",
    audio                : "files/04_0069.mp3",
    audioMeaning         : "files/04_0069_meaning.mp3",
    audioExample         : "files/04_0069_example.mp3",
    textMeaning          : "A habit is a thing that you do often",
    textExample          : "Smoking is a bad habit that can kill you",
    transcription        : "[hЗЅbit]",
    wordTranslate        : "РїСЂРёРІС‹С‡РєР°",
    textMeaningTranslate : "РџСЂРёРІС‹С‡РєР° - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ РІС‹ С‡Р°СЃС‚Рѕ РґРµР»Р°РµС‚Рµ",
    textExampleTranslate : "РљСѓСЂРµРЅРёРµ - СЌС‚Рѕ РІСЂРµРґРЅР°СЏ РїСЂРёРІС‹С‡РєР°, РєРѕС‚РѕСЂР°СЏ РјРѕР¶РµС‚ С‚РµР±СЏ СѓР±РёС‚СЊ",
    id                   : 69
  }, {
    word                 : "instruct",
    image                : "files/04_0070.jpg",
    audio                : "files/04_0070.mp3",
    audioMeaning         : "files/04_0070_meaning.mp3",
    audioExample         : "files/04_0070_example.mp3",
    textMeaning          : "To instruct is to teach",
    textExample          : "My teacher instructs us in several subjects",
    transcription        : "[instrКЊМЃkt]",
    wordTranslate        : "РёРЅСЃС‚СЂСѓРєС‚РёСЂСѓРµС‚",
    textMeaningTranslate : "РћР±СѓС‡Р°С‚СЊ - Р·РЅР°С‡РёС‚ СѓС‡РёС‚СЊ",
    textExampleTranslate : "РњРѕР№ СѓС‡РёС‚РµР»СЊ СѓС‡РёС‚ РЅР°СЃ РЅРµСЃРєРѕР»СЊРєРёРј РїСЂРµРґРјРµС‚Р°Рј",
    id                   : 70
  }, {
    word                 : "issue",
    image                : "files/04_0071.jpg",
    audio                : "files/04_0071.mp3",
    audioMeaning         : "files/04_0071_meaning.mp3",
    audioExample         : "files/04_0071_example.mp3",
    textMeaning          : "An issue is an important topic",
    textExample          : "The men spoke about issues that were important to the people",
    transcription        : "[Г­КѓuЛђ]",
    wordTranslate        : "РїСЂРѕР±Р»РµРјР°",
    textMeaningTranslate : "РџСЂРѕР±Р»РµРјР° - РІР°Р¶РЅР°СЏ С‚РµРјР°",
    textExampleTranslate : "РњСѓР¶С‡РёРЅС‹ РіРѕРІРѕСЂРёР»Рё Рѕ РїСЂРѕР±Р»РµРјР°С…, РєРѕС‚РѕСЂС‹Рµ Р±С‹Р»Рё РІР°Р¶РЅС‹ РґР»СЏ Р»СЋРґРµР№",
    id                   : 71
  }, {
    word                 : "none",
    image                : "files/04_0072.jpg",
    audio                : "files/04_0072.mp3",
    audioMeaning         : "files/04_0072_meaning.mp3",
    audioExample         : "files/04_0072_example.mp3",
    textMeaning          : "None means not any of something",
    textExample          : "He spent all his money. There is none left",
    transcription        : "[nКЊn]",
    wordTranslate        : "РЅРёРєС‚Рѕ",
    textMeaningTranslate : "РќРёРєС‚Рѕ РЅРµ РѕР·РЅР°С‡Р°РµС‚ РЅРµ С‡С‚Рѕ-С‚Рѕ",
    textExampleTranslate : "РћРЅ РїРѕС‚СЂР°С‚РёР» РІСЃРµ СЃРІРѕРё РґРµРЅСЊРіРё. РўР°Рј РЅРёС‡РµРіРѕ РЅРµ РѕСЃС‚Р°Р»РѕСЃСЊ",
    id                   : 72
  }, {
    word                 : "patient",
    image                : "files/04_0073.jpg",
    audio                : "files/04_0073.mp3",
    audioMeaning         : "files/04_0073_meaning.mp3",
    audioExample         : "files/04_0073_example.mp3",
    textMeaning          : "If people are patient, they donвЂ™t become angry or upset easily",
    textExample          : "I had to be patient and wait until 5 oвЂ™clock to leave",
    transcription        : "[pГ©iКѓЙ™nt]",
    wordTranslate        : "РїР°С†РёРµРЅС‚",
    textMeaningTranslate : "Р•СЃР»Рё Р»СЋРґРё С‚РµСЂРїРµР»РёРІС‹, РѕРЅРё РЅРµ СЃРµСЂРґСЏС‚СЃСЏ Рё РЅРµ СЂР°СЃСЃС‚СЂР°РёРІР°СЋС‚СЃСЏ",
    textExampleTranslate : "РЇ РґРѕР»Р¶РµРЅ Р±С‹Р» Р±С‹С‚СЊ С‚РµСЂРїРµР»РёРІС‹Рј Рё Р¶РґР°С‚СЊ, РїРѕРєР° 5 С‡Р°СЃРѕРІ, С‡С‚РѕР±С‹ СѓР№С‚Рё",
    id                   : 73
  }, {
    word                 : "positive",
    image                : "files/04_0074.jpg",
    audio                : "files/04_0074.mp3",
    audioMeaning         : "files/04_0074_meaning.mp3",
    audioExample         : "files/04_0074_example.mp3",
    textMeaning          : "If something is positive, it is good",
    textExample          : "She has a positive future ahead of her after finishing college",
    transcription        : "[pЙ‘МЃzЙ™tiv]",
    wordTranslate        : "РїРѕР·РёС‚РёРІРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РїРѕР»РѕР¶РёС‚РµР»СЊРЅРѕРµ, СЌС‚Рѕ С…РѕСЂРѕС€Рѕ",
    textExampleTranslate : "РЈ РЅРµРµ РІРїРµСЂРµРґРё С…РѕСЂРѕС€РµРµ Р±СѓРґСѓС‰РµРµ РїРѕСЃР»Рµ РѕРєРѕРЅС‡Р°РЅРёСЏ РєРѕР»Р»РµРґР¶Р°",
    id                   : 74
  }, {
    word                 : "punish",
    image                : "files/04_0075.jpg",
    audio                : "files/04_0075.mp3",
    audioMeaning         : "files/04_0075_meaning.mp3",
    audioExample         : "files/04_0075_example.mp3",
    textMeaning          : "To punish means to make someone suffer for breaking the rules or laws",
    textExample          : "To punish me, my teacher had me stand in the corner",
    transcription        : "[pКЊМЃniКѓ]",
    wordTranslate        : "РЅР°РєР°Р·Р°С‚СЊ",
    textMeaningTranslate : "РќР°РєР°Р·Р°С‚СЊ Р·РЅР°С‡РёС‚ Р·Р°СЃС‚Р°РІРёС‚СЊ РєРѕРіРѕ-С‚Рѕ СЃС‚СЂР°РґР°С‚СЊ Р·Р° РЅР°СЂСѓС€РµРЅРёРµ РїСЂР°РІРёР» РёР»Рё Р·Р°РєРѕРЅРѕРІ",
    textExampleTranslate : "Р§С‚РѕР±С‹ РЅР°РєР°Р·Р°С‚СЊ РјРµРЅСЏ, РјРѕР№ СѓС‡РёС‚РµР»СЊ Р·Р°СЃС‚Р°РІРёР» РјРµРЅСЏ РІСЃС‚Р°С‚СЊ РІ СѓРіР»Сѓ",
    id                   : 75
  }, {
    word                 : "represent",
    image                : "files/04_0076.jpg",
    audio                : "files/04_0076.mp3",
    audioMeaning         : "files/04_0076_meaning.mp3",
    audioExample         : "files/04_0076_example.mp3",
    textMeaning          : "To represent is to speak or act for a person or group",
    textExample          : "My lawyer will represent me in court",
    transcription        : "[rГЁprizГ©nt]",
    wordTranslate        : "РїСЂРµРґСЃС‚Р°РІР»СЏС‚СЊ",
    textMeaningTranslate : "РџСЂРµРґСЃС‚Р°РІР»СЏС‚СЊ - Р·РЅР°С‡РёС‚ РіРѕРІРѕСЂРёС‚СЊ РёР»Рё РґРµР№СЃС‚РІРѕРІР°С‚СЊ РѕС‚ Р»РёС†Р° РёР»Рё РіСЂСѓРїРїС‹",
    textExampleTranslate : "РњРѕР№ Р°РґРІРѕРєР°С‚ Р±СѓРґРµС‚ РїСЂРµРґСЃС‚Р°РІР»СЏС‚СЊ РјРµРЅСЏ РІ СЃСѓРґРµ",
    id                   : 76
  }, {
    word                 : "shake",
    image                : "files/04_0077.jpg",
    audio                : "files/04_0077.mp3",
    audioMeaning         : "files/04_0077_meaning.mp3",
    audioExample         : "files/04_0077_example.mp3",
    textMeaning          : "To shake is to move back and forth or up and down quickly",
    textExample          : "When people shake hands, it usually means they agree",
    transcription        : "[Кѓeik]",
    wordTranslate        : "С‚СЂСЏСЃС‚Рё",
    textMeaningTranslate : "РўСЂСЏСЃС‚Рё - Р·РЅР°С‡РёС‚ Р±С‹СЃС‚СЂРѕ РґРІРёРіР°С‚СЊСЃСЏ РІРїРµСЂРµРґ-РЅР°Р·Р°Рґ РёР»Рё РІРІРµСЂС…-РІРЅРёР·",
    textExampleTranslate : "РљРѕРіРґР° Р»СЋРґРё РїРѕР¶РёРјР°СЋС‚ РґСЂСѓРі РґСЂСѓРіСѓ СЂСѓРєРё, СЌС‚Рѕ РѕР±С‹С‡РЅРѕ РѕР·РЅР°С‡Р°РµС‚, С‡С‚Рѕ РѕРЅРё СЃРѕРіР»Р°СЃРЅС‹",
    id                   : 77
  }, {
    word                 : "spread",
    image                : "files/04_0078.jpg",
    audio                : "files/04_0078.mp3",
    audioMeaning         : "files/04_0078_meaning.mp3",
    audioExample         : "files/04_0078_example.mp3",
    textMeaning          : "To spread is to move out to cover a larger area",
    textExample          : "I like to spread butter on my toast",
    transcription        : "[spred]",
    wordTranslate        : "СЂР°СЃРїСЂРѕСЃС‚СЂР°РЅРµРЅРёРµ",
    textMeaningTranslate : "Р Р°СЃРїСЂРѕСЃС‚СЂР°РЅРµРЅРёРµ РѕР·РЅР°С‡Р°РµС‚ РІС‹С…РѕРґ РЅР° Р±РѕР»СЊС€СѓСЋ РїР»РѕС‰Р°РґСЊ",
    textExampleTranslate : "РњРЅРµ РЅСЂР°РІРёС‚СЃСЏ СЂР°Р·Р»РёРІР°С‚СЊ РјР°СЃР»Рѕ РїРѕ РјРѕРµРјСѓ С‚РѕСЃС‚Сѓ",
    id                   : 78
  }, {
    word                 : "stroll",
    image                : "files/04_0079.jpg",
    audio                : "files/04_0079.mp3",
    audioMeaning         : "files/04_0079_meaning.mp3",
    audioExample         : "files/04_0079_example.mp3",
    textMeaning          : "To stroll means to walk slowly and calmly",
    textExample          : "My dog and I strolled through the park today",
    transcription        : "[stroul]",
    wordTranslate        : "РїСЂРѕРіСѓР»РєР°",
    textMeaningTranslate : "Р“СѓР»СЏС‚СЊ Р·РЅР°С‡РёС‚ С…РѕРґРёС‚СЊ РјРµРґР»РµРЅРЅРѕ Рё СЃРїРѕРєРѕР№РЅРѕ",
    textExampleTranslate : "РЎРµРіРѕРґРЅСЏ РјС‹ СЃ СЃРѕР±Р°РєРѕР№ РїСЂРѕРіСѓР»СЏР»РёСЃСЊ РїРѕ РїР°СЂРєСѓ",
    id                   : 79
  }, {
    word                 : "village",
    image                : "files/04_0080.jpg",
    audio                : "files/04_0080.mp3",
    audioMeaning         : "files/04_0080_meaning.mp3",
    audioExample         : "files/04_0080_example.mp3",
    textMeaning          : "A village is a very small town",
    textExample          : "There are only a few houses in my village",
    transcription        : "[vГ­lidК’]",
    wordTranslate        : "РґРµСЂРµРІРЅСЏ",
    textMeaningTranslate : "Р”РµСЂРµРІРЅСЏ РѕС‡РµРЅСЊ РјР°Р»РµРЅСЊРєРёР№ РіРѕСЂРѕРґ",
    textExampleTranslate : "Р’ РјРѕРµР№ РґРµСЂРµРІРЅРµ РІСЃРµРіРѕ РЅРµСЃРєРѕР»СЊРєРѕ РґРѕРјРѕРІ",
    id                   : 80
  }, {
    word                 : "active",
    image                : "files/05_0081.jpg",
    audio                : "files/05_0081.mp3",
    audioMeaning         : "files/05_0081_meaning.mp3",
    audioExample         : "files/05_0081_example.mp3",
    textMeaning          : "When someone is active, they move a lot or have a lot of things to do",
    textExample          : "It is important to be active and not sit around all the time",
    transcription        : "[ЗЅktiv]",
    wordTranslate        : "Р°РєС‚РёРІРЅС‹Р№",
    textMeaningTranslate : "РљРѕРіРґР° РєС‚Рѕ-С‚Рѕ Р°РєС‚РёРІРµРЅ, РѕРЅ РјРЅРѕРіРѕ РґРІРёРіР°РµС‚СЃСЏ РёР»Рё Сѓ РЅРµРіРѕ РјРЅРѕРіРѕ РґРµР»",
    textExampleTranslate : "Р’Р°Р¶РЅРѕ Р±С‹С‚СЊ Р°РєС‚РёРІРЅС‹Рј, Р° РЅРµ СЃРёРґРµС‚СЊ Р±РµР· РґРµР»Р° РІСЃРµ РІСЂРµРјСЏ",
    id                   : 81
  }, {
    word                 : "adult",
    image                : "files/05_0082.jpg",
    audio                : "files/05_0082.mp3",
    audioMeaning         : "files/05_0082_meaning.mp3",
    audioExample         : "files/05_0082_example.mp3",
    textMeaning          : "An adult is a person who is more than 18 years old",
    textExample          : "My mom and dad are adults",
    transcription        : "[Й™dО›lt]",
    wordTranslate        : "РІР·СЂРѕСЃР»С‹Р№",
    textMeaningTranslate : "Р’Р·СЂРѕСЃР»С‹Р№ - СЌС‚Рѕ С‡РµР»РѕРІРµРє СЃС‚Р°СЂС€Рµ 18 Р»РµС‚",
    textExampleTranslate : "РњРѕРё РјР°РјР° Рё РїР°РїР° РІР·СЂРѕСЃР»С‹Рµ",
    id                   : 82
  }, {
    word                 : "age",
    image                : "files/05_0083.jpg",
    audio                : "files/05_0083.mp3",
    audioMeaning         : "files/05_0083_meaning.mp3",
    audioExample         : "files/05_0083_example.mp3",
    textMeaning          : "Age is how many years someone has lived",
    textExample          : "She died at the age of 80",
    transcription        : "[eidК’]",
    wordTranslate        : "РІРѕР·СЂР°СЃС‚",
    textMeaningTranslate : "Р’РѕР·СЂР°СЃС‚ - СЌС‚Рѕ СЃРєРѕР»СЊРєРѕ Р»РµС‚ РєС‚Рѕ-С‚Рѕ РїСЂРѕР¶РёР»",
    textExampleTranslate : "РћРЅР° СѓРјРµСЂР»Р° РІ РІРѕР·СЂР°СЃС‚Рµ 80 Р»РµС‚",
    id                   : 83
  }, {
    word                 : "bad",
    image                : "files/05_0084.jpg",
    audio                : "files/05_0084.mp3",
    audioMeaning         : "files/05_0084_meaning.mp3",
    audioExample         : "files/05_0084_example.mp3",
    textMeaning          : "When something is bad, it is not good",
    textExample          : "She is unhappy because she had a bad day",
    transcription        : "[bГ¦d]",
    wordTranslate        : "РїР»РѕС…РѕР№",
    textMeaningTranslate : "РљРѕРіРґР° С‡С‚Рѕ-С‚Рѕ РїР»РѕС…Рѕ, СЌС‚Рѕ РЅРµ С…РѕСЂРѕС€Рѕ",
    textExampleTranslate : "РћРЅР° РЅРµСЃС‡Р°СЃС‚РЅР°, РїРѕС‚РѕРјСѓ С‡С‚Рѕ Сѓ РЅРµРµ Р±С‹Р» РїР»РѕС…РѕР№ РґРµРЅСЊ",
    id                   : 84
  }, {
    word                 : "balance",
    image                : "files/05_0085.jpg",
    audio                : "files/05_0085.mp3",
    audioMeaning         : "files/05_0085_meaning.mp3",
    audioExample         : "files/05_0085_example.mp3",
    textMeaning          : "Balance is when two or more things are equal",
    textExample          : "A good balance between work and fun helps keep you healthy",
    transcription        : "[bЗЅlЙ™ns]",
    wordTranslate        : "Р±Р°Р»Р°РЅСЃ",
    textMeaningTranslate : "Р‘Р°Р»Р°РЅСЃ - СЌС‚Рѕ РєРѕРіРґР° РґРІРµ РёР»Рё Р±РѕР»РµРµ РІРµС‰Рё СЂР°РІРЅС‹",
    textExampleTranslate : "РҐРѕСЂРѕС€РёР№ Р±Р°Р»Р°РЅСЃ РјРµР¶РґСѓ СЂР°Р±РѕС‚РѕР№ Рё РІРµСЃРµР»СЊРµРј РїРѕРјРѕРіР°РµС‚ РїРѕРґРґРµСЂР¶РёРІР°С‚СЊ Р·РґРѕСЂРѕРІСЊРµ",
    id                   : 85
  }, {
    word                 : "bike",
    image                : "files/05_0086.jpg",
    audio                : "files/05_0086.mp3",
    audioMeaning         : "files/05_0086_meaning.mp3",
    audioExample         : "files/05_0086_example.mp3",
    textMeaning          : "A bike is a vehicle with two wheels powered by a human",
    textExample          : "He rides his bike to school every day",
    transcription        : "[baik]",
    wordTranslate        : "РІРµР»РѕСЃРёРїРµРґ",
    textMeaningTranslate : "Р’РµР»РѕСЃРёРїРµРґ - СЌС‚Рѕ Р°РІС‚РѕРјРѕР±РёР»СЊ СЃ РґРІСѓРјСЏ РєРѕР»РµСЃР°РјРё, РїСЂРёРІРѕРґРёРјС‹Р№ РІ РґРІРёР¶РµРЅРёРµ С‡РµР»РѕРІРµРєРѕРј",
    textExampleTranslate : "РћРЅ РµР·РґРёС‚ РЅР° РІРµР»РѕСЃРёРїРµРґРµ РІ С€РєРѕР»Сѓ РєР°Р¶РґС‹Р№ РґРµРЅСЊ",
    id                   : 86
  }, {
    word                 : "choose",
    image                : "files/05_0087.jpg",
    audio                : "files/05_0087.mp3",
    audioMeaning         : "files/05_0087_meaning.mp3",
    audioExample         : "files/05_0087_example.mp3",
    textMeaning          : "To choose is to pick something or make a decision",
    textExample          : "I have to choose between taking art classes and sports lessons",
    transcription        : "[tКѓuЛђz]",
    wordTranslate        : "РІС‹Р±РёСЂР°С‚СЊ",
    textMeaningTranslate : "Р’С‹Р±СЂР°С‚СЊ - СЌС‚Рѕ РІС‹Р±СЂР°С‚СЊ С‡С‚Рѕ-С‚Рѕ РёР»Рё РїСЂРёРЅСЏС‚СЊ СЂРµС€РµРЅРёРµ",
    textExampleTranslate : "РњРЅРµ РЅСѓР¶РЅРѕ РІС‹Р±РёСЂР°С‚СЊ РјРµР¶РґСѓ Р·Р°РЅСЏС‚РёСЏРјРё РёСЃРєСѓСЃСЃС‚РІРѕРј Рё Р·Р°РЅСЏС‚РёСЏРјРё СЃРїРѕСЂС‚РѕРј",
    id                   : 87
  }, {
    word                 : "doctor",
    image                : "files/05_0088.jpg",
    audio                : "files/05_0088.mp3",
    audioMeaning         : "files/05_0088_meaning.mp3",
    audioExample         : "files/05_0088_example.mp3",
    textMeaning          : "A doctor is a person who studies medicine and helps sick people",
    textExample          : "You should go to the doctor when you are sick",
    transcription        : "[dО¬ktЙ™r]",
    wordTranslate        : "РґРѕРєС‚РѕСЂ",
    textMeaningTranslate : "Р’СЂР°С‡ - СЌС‚Рѕ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ РёР·СѓС‡Р°РµС‚ РјРµРґРёС†РёРЅСѓ Рё РїРѕРјРѕРіР°РµС‚ Р±РѕР»СЊРЅС‹Рј Р»СЋРґСЏРј",
    textExampleTranslate : "Р’С‹ РґРѕР»Р¶РЅС‹ РёРґС‚Рё Рє РІСЂР°С‡Сѓ, РєРѕРіРґР° РІС‹ Р±РѕР»СЊРЅС‹",
    id                   : 88
  }, {
    word                 : "during",
    image                : "files/05_0089.jpg",
    audio                : "files/05_0089.mp3",
    audioMeaning         : "files/05_0089_meaning.mp3",
    audioExample         : "files/05_0089_example.mp3",
    textMeaning          : "During an event means while the event was happening",
    textExample          : "Did you sleep during the movie?",
    transcription        : "[djГєЙ™riЕ‹]",
    wordTranslate        : "РІ С‚РµС‡РµРЅРёРµ",
    textMeaningTranslate : "Р’Рѕ РІСЂРµРјСЏ СЃРѕР±С‹С‚РёСЏ РѕР·РЅР°С‡Р°РµС‚, С‡С‚Рѕ СЃРѕР±С‹С‚РёРµ РїСЂРѕРёСЃС…РѕРґРёР»Рѕ",
    textExampleTranslate : "РўС‹ СЃРїР°Р» РІРѕ РІСЂРµРјСЏ С„РёР»СЊРјР°?",
    id                   : 89
  }, {
    word                 : "football",
    image                : "files/05_0090.jpg",
    audio                : "files/05_0090.mp3",
    audioMeaning         : "files/05_0090_meaning.mp3",
    audioExample         : "files/05_0090_example.mp3",
    textMeaning          : "Football is a sport with eleven members and an oval-shaped ball",
    textExample          : "Football is a popular sport in the United States",
    transcription        : "[fКЉtbЙ’Лђl]",
    wordTranslate        : "С„СѓС‚Р±РѕР»",
    textMeaningTranslate : "Р¤СѓС‚Р±РѕР» - СЌС‚Рѕ СЃРїРѕСЂС‚ СЃ РѕРґРёРЅРЅР°РґС†Р°С‚СЊСЋ С‡Р»РµРЅР°РјРё Рё РјСЏС‡РѕРј РѕРІР°Р»СЊРЅРѕР№ С„РѕСЂРјС‹",
    textExampleTranslate : "Р¤СѓС‚Р±РѕР» - РїРѕРїСѓР»СЏСЂРЅС‹Р№ РІРёРґ СЃРїРѕСЂС‚Р° РІ РЎРѕРµРґРёРЅРµРЅРЅС‹С… РЁС‚Р°С‚Р°С…",
    id                   : 90
  }, {
    word                 : "fun",
    image                : "files/05_0091.jpg",
    audio                : "files/05_0091.mp3",
    audioMeaning         : "files/05_0091_meaning.mp3",
    audioExample         : "files/05_0091_example.mp3",
    textMeaning          : "When something is fun, it is enjoyable",
    textExample          : "We had a fun time at the birthday party",
    transcription        : "[fКЊn]",
    wordTranslate        : "РІРµСЃРµР»СЊРµ",
    textMeaningTranslate : "РљРѕРіРґР° С‡С‚Рѕ-С‚Рѕ РІРµСЃРµР»Рѕ, СЌС‚Рѕ РїСЂРёСЏС‚РЅРѕ",
    textExampleTranslate : "РњС‹ РІРµСЃРµР»Рѕ РїСЂРѕРІРµР»Рё РІСЂРµРјСЏ РЅР° РІРµС‡РµСЂРёРЅРєРµ РїРѕ СЃР»СѓС‡Р°СЋ РґРЅСЏ СЂРѕР¶РґРµРЅРёСЏ",
    id                   : 91
  }, {
    word                 : "game",
    image                : "files/05_0092.jpg",
    audio                : "files/05_0092.mp3",
    audioMeaning         : "files/05_0092_meaning.mp3",
    audioExample         : "files/05_0092_example.mp3",
    textMeaning          : "A game is an activity where people compete against each other",
    textExample          : "LetвЂ™s play a board game tonight",
    transcription        : "[geim]",
    wordTranslate        : "РёРіСЂР°",
    textMeaningTranslate : "РРіСЂР° - СЌС‚Рѕ РёРіСЂР°, РІ РєРѕС‚РѕСЂРѕР№ Р»СЋРґРё СЃРѕСЂРµРІРЅСѓСЋС‚СЃСЏ РґСЂСѓРі СЃ РґСЂСѓРіРѕРј",
    textExampleTranslate : "Р”Р°РІР°Р№ РїРѕРёРіСЂР°РµРј РІ РЅР°СЃС‚РѕР»СЊРЅСѓСЋ РёРіСЂСѓ СЃРµРіРѕРґРЅСЏ РІРµС‡РµСЂРѕРј",
    id                   : 92
  }, {
    word                 : "heart",
    image                : "files/05_0093.jpg",
    audio                : "files/05_0093.mp3",
    audioMeaning         : "files/05_0093_meaning.mp3",
    audioExample         : "files/05_0093_example.mp3",
    textMeaning          : "A heart is an organ that keeps the body alive",
    textExample          : "My heart beats fast when I am nervous",
    transcription        : "[hЙ‘Лђrt]",
    wordTranslate        : "СЃРµСЂРґС†Рµ",
    textMeaningTranslate : "РЎРµСЂРґС†Рµ - СЌС‚Рѕ РѕСЂРіР°РЅ, РєРѕС‚РѕСЂС‹Р№ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ Р¶РёР·РЅСЊ С‚РµР»Р°",
    textExampleTranslate : "РњРѕРµ СЃРµСЂРґС†Рµ Р±СЊРµС‚СЃСЏ Р±С‹СЃС‚СЂРѕ, РєРѕРіРґР° СЏ РЅРµСЂРІРЅРёС‡Р°СЋ",
    id                   : 93
  }, {
    word                 : "golf",
    image                : "files/05_0094.jpg",
    audio                : "files/05_0094.mp3",
    audioMeaning         : "files/05_0094_meaning.mp3",
    audioExample         : "files/05_0094_example.mp3",
    textMeaning          : "Golf is a sport with clubs and a small white ball",
    textExample          : "People play golf in nice weather",
    transcription        : "[galf]",
    wordTranslate        : "РіРѕР»СЊС„",
    textMeaningTranslate : "Р“РѕР»СЊС„ - СЌС‚Рѕ СЃРїРѕСЂС‚ СЃ РєР»СЋС€РєР°РјРё Рё РјР°Р»РµРЅСЊРєРёРј Р±РµР»С‹Рј С€Р°СЂРёРєРѕРј",
    textExampleTranslate : "Р›СЋРґРё РёРіСЂР°СЋС‚ РІ РіРѕР»СЊС„ РІ С…РѕСЂРѕС€СѓСЋ РїРѕРіРѕРґСѓ",
    id                   : 94
  }, {
    word                 : "increase",
    image                : "files/05_0095.jpg",
    audio                : "files/05_0095.mp3",
    audioMeaning         : "files/05_0095_meaning.mp3",
    audioExample         : "files/05_0095_example.mp3",
    textMeaning          : "To increase is to make something larger",
    textExample          : "I will increase my score if I study for the test",
    transcription        : "[inkrГ­Лђs]",
    wordTranslate        : "СѓРІРµР»РёС‡РµРЅРёРµ",
    textMeaningTranslate : "РЈРІРµР»РёС‡РёС‚СЊ Р·РЅР°С‡РёС‚ СЃРґРµР»Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ Р±РѕР»СЊС€РµРµ",
    textExampleTranslate : "РЇ СѓРІРµР»РёС‡Сѓ СЃРІРѕР№ СЃС‡РµС‚, РµСЃР»Рё СЏ Р±СѓРґСѓ РіРѕС‚РѕРІРёС‚СЊСЃСЏ Рє СЌРєР·Р°РјРµРЅСѓ",
    id                   : 95
  }, {
    word                 : "life",
    image                : "files/05_0096.jpg",
    audio                : "files/05_0096.mp3",
    audioMeaning         : "files/05_0096_meaning.mp3",
    audioExample         : "files/05_0096_example.mp3",
    textMeaning          : "Life is the time when a person is alive",
    textExample          : "My grandfather had a long life",
    transcription        : "[laif]",
    wordTranslate        : "Р¶РёР·РЅСЊ",
    textMeaningTranslate : "Р–РёР·РЅСЊ - СЌС‚Рѕ РІСЂРµРјСЏ, РєРѕРіРґР° С‡РµР»РѕРІРµРє Р¶РёРІ",
    textExampleTranslate : "РЈ РјРѕРµРіРѕ РґРµРґР° Р±С‹Р»Р° РґРѕР»РіР°СЏ Р¶РёР·РЅСЊ",
    id                   : 96
  }, {
    word                 : "kilometer",
    image                : "files/05_0097.jpg",
    audio                : "files/05_0097.mp3",
    audioMeaning         : "files/05_0097_meaning.mp3",
    audioExample         : "files/05_0097_example.mp3",
    textMeaning          : "A kilometer is a unit of measurement that is 1,000 meters",
    textExample          : "A marathon is 42.2 kilometers",
    transcription        : "[kilО¬mЙ™tЙ™r]",
    wordTranslate        : "РєРёР»РѕРјРµС‚СЂ",
    textMeaningTranslate : "РљРёР»РѕРјРµС‚СЂ - СЌС‚Рѕ РµРґРёРЅРёС†Р° РёР·РјРµСЂРµРЅРёСЏ, РєРѕС‚РѕСЂР°СЏ СЃРѕСЃС‚Р°РІР»СЏРµС‚ 1000 РјРµС‚СЂРѕРІ",
    textExampleTranslate : "РњР°СЂР°С„РѕРЅ 42,2 РєРёР»РѕРјРµС‚СЂР°",
    id                   : 97
  }, {
    word                 : "often",
    image                : "files/05_0098.jpg",
    audio                : "files/05_0098.mp3",
    audioMeaning         : "files/05_0098_meaning.mp3",
    audioExample         : "files/05_0098_example.mp3",
    textMeaning          : "Often is when something happens many times",
    textExample          : "He often goes to bed early during the week",
    transcription        : "[Й”МЃЛђfЙ™n]",
    wordTranslate        : "РґРѕРІРѕР»СЊРЅРѕ С‡Р°СЃС‚Рѕ",
    textMeaningTranslate : "Р§Р°СЃС‚Рѕ Р±С‹РІР°РµС‚, РєРѕРіРґР° С‡С‚Рѕ-С‚Рѕ СЃР»СѓС‡Р°РµС‚СЃСЏ РјРЅРѕРіРѕ СЂР°Р·",
    textExampleTranslate : "РћРЅ С‡Р°СЃС‚Рѕ Р»РѕР¶РёС‚СЃСЏ СЃРїР°С‚СЊ СЂР°РЅРѕ РІ С‚РµС‡РµРЅРёРµ РЅРµРґРµР»Рё",
    id                   : 98
  }, {
    word                 : "plenty",
    image                : "files/05_0099.jpg",
    audio                : "files/05_0099.mp3",
    audioMeaning         : "files/05_0099_meaning.mp3",
    audioExample         : "files/05_0099_example.mp3",
    textMeaning          : "If you have plenty of something, there is a lot of it",
    textExample          : "We have plenty of fruit, so help yourself",
    transcription        : "[plenti]",
    wordTranslate        : "РјРЅРѕРіРѕ",
    textMeaningTranslate : "Р•СЃР»Рё Сѓ РІР°СЃ РјРЅРѕРіРѕ С‡РµРіРѕ-С‚Рѕ, С‚Рѕ СЌС‚РѕРіРѕ РјРЅРѕРіРѕ",
    textExampleTranslate : "РЈ РЅР°СЃ РјРЅРѕРіРѕ С„СЂСѓРєС‚РѕРІ, С‚Р°Рє С‡С‚Рѕ РїРѕРјРѕРіРёС‚Рµ СЃРµР±Рµ",
    id                   : 99
  }, {
    word                 : "weight",
    image                : "files/05_0100.jpg",
    audio                : "files/05_0100.mp3",
    audioMeaning         : "files/05_0100_meaning.mp3",
    audioExample         : "files/05_0100_example.mp3",
    textMeaning          : "Weight is how heavy something or someone is",
    textExample          : "I gained weight because I ate a lot of pizza",
    transcription        : "[weit]",
    wordTranslate        : "РІРµСЃ",
    textMeaningTranslate : "Р’РµСЃ - СЌС‚Рѕ С‚Рѕ, РєР°Рє С‚СЏР¶РµР»Рѕ С‡С‚Рѕ-С‚Рѕ РёР»Рё РєС‚Рѕ-С‚Рѕ",
    textExampleTranslate : "РЇ РЅР°Р±СЂР°Р» РІРµСЃ, РїРѕС‚РѕРјСѓ С‡С‚Рѕ СЏ РµР» РјРЅРѕРіРѕ РїРёС†С†С‹",
    id                   : 100
  }, {
    word                 : "apart",
    image                : "files/06_0101.jpg",
    audio                : "files/06_0101.mp3",
    audioMeaning         : "files/06_0101_meaning.mp3",
    audioExample         : "files/06_0101_example.mp3",
    textMeaning          : "When people or things are apart, they are not next to each other",
    textExample          : "They moved apart and then came back together",
    transcription        : "[Й™pО¬Лђrt]",
    wordTranslate        : "РѕС‚РґРµР»СЊРЅРѕ",
    textMeaningTranslate : "РљРѕРіРґР° Р»СЋРґРё РёР»Рё РІРµС‰Рё СЂР°Р·Р»СѓС‡РµРЅС‹, РѕРЅРё РЅРµ СЂСЏРґРѕРј РґСЂСѓРі СЃ РґСЂСѓРіРѕРј",
    textExampleTranslate : "РћРЅРё СЂР°Р·РґРІРёРЅСѓР»РёСЃСЊ, Р° Р·Р°С‚РµРј РІРµСЂРЅСѓР»РёСЃСЊ РІРјРµСЃС‚Рµ",
    id                   : 101
  }, {
    word                 : "attribute",
    image                : "files/06_0102.jpg",
    audio                : "files/06_0102.mp3",
    audioMeaning         : "files/06_0102_meaning.mp3",
    audioExample         : "files/06_0102_example.mp3",
    textMeaning          : "An attribute is a characteristic of a person or thing",
    textExample          : "He isnвЂ™t very clever, but he does have some other positive attributes",
    transcription        : "[ЗЅtribjГ№Лђt]",
    wordTranslate        : "Р°С‚СЂРёР±СѓС‚",
    textMeaningTranslate : "РђС‚СЂРёР±СѓС‚ СЏРІР»СЏРµС‚СЃСЏ С…Р°СЂР°РєС‚РµСЂРёСЃС‚РёРєРѕР№ С‡РµР»РѕРІРµРєР° РёР»Рё РІРµС‰Рё",
    textExampleTranslate : "РћРЅ РЅРµ РѕС‡РµРЅСЊ СѓРјРµРЅ, РЅРѕ Сѓ РЅРµРіРѕ РµСЃС‚СЊ РЅРµРєРѕС‚РѕСЂС‹Рµ РґСЂСѓРіРёРµ РїРѕР»РѕР¶РёС‚РµР»СЊРЅС‹Рµ РєР°С‡РµСЃС‚РІР°",
    id                   : 102
  }, {
    word                 : "bilingual",
    image                : "files/06_0103.jpg",
    audio                : "files/06_0103.mp3",
    audioMeaning         : "files/06_0103_meaning.mp3",
    audioExample         : "files/06_0103_example.mp3",
    textMeaning          : "A bilingual person can speak two languages",
    textExample          : "Since you already know English, after learning French youвЂ™ll be bilingual",
    transcription        : "[bailГ­Е‹gwЙ™l]",
    wordTranslate        : "РґРІСѓСЏР·С‹С‡РЅС‹Р№",
    textMeaningTranslate : "Р”РІСѓСЏР·С‹С‡РЅС‹Р№ С‡РµР»РѕРІРµРє РјРѕР¶РµС‚ РіРѕРІРѕСЂРёС‚СЊ РЅР° РґРІСѓС… СЏР·С‹РєР°С…",
    textExampleTranslate : "РўР°Рє РєР°Рє РІС‹ СѓР¶Рµ Р·РЅР°РµС‚Рµ Р°РЅРіР»РёР№СЃРєРёР№, РёР·СѓС‡Р°СЏ С„СЂР°РЅС†СѓР·СЃРєРёР№, РІС‹ СЃС‚Р°РЅРµС‚Рµ РґРІСѓСЏР·С‹С‡РЅС‹Рј",
    id                   : 103
  }, {
    word                 : "completely",
    image                : "files/06_0104.jpg",
    audio                : "files/06_0104.mp3",
    audioMeaning         : "files/06_0104_meaning.mp3",
    audioExample         : "files/06_0104_example.mp3",
    textMeaning          : "Something completely different is very, very different from before",
    textExample          : "I was completely wrong",
    transcription        : "[kЙ™mplГ­Лђtli]",
    wordTranslate        : "РїРѕР»РЅРѕСЃС‚СЊСЋ",
    textMeaningTranslate : "Р§С‚Рѕ-С‚Рѕ СЃРѕРІРµСЂС€РµРЅРЅРѕ РґСЂСѓРіРѕРµ, РѕС‡РµРЅСЊ, РѕС‡РµРЅСЊ РѕС‚Р»РёС‡Р°РµС‚СЃСЏ РѕС‚ СЂР°РЅРµРµ",
    textExampleTranslate : "РЇ Р±С‹Р» СЃРѕРІРµСЂС€РµРЅРЅРѕ РЅРµРїСЂР°РІ",
    id                   : 104
  }, {
    word                 : "dash",
    image                : "files/06_0105.jpg",
    audio                : "files/06_0105.mp3",
    audioMeaning         : "files/06_0105_meaning.mp3",
    audioExample         : "files/06_0105_example.mp3",
    textMeaning          : "To dash means to run or move quickly",
    textExample          : "Helen dashed up the stairs so she wouldnвЂ™t be late for her appointment",
    transcription        : "[dГ¦Кѓ]",
    wordTranslate        : "С‚РёСЂРµ",
    textMeaningTranslate : "Р‘РµР¶Р°С‚СЊ - Р·РЅР°С‡РёС‚ Р±РµРіР°С‚СЊ РёР»Рё РґРІРёРіР°С‚СЊСЃСЏ Р±С‹СЃС‚СЂРѕ",
    textExampleTranslate : "РҐРµР»РµРЅ Р±СЂРѕСЃРёР»Р°СЃСЊ РІРІРµСЂС… РїРѕ Р»РµСЃС‚РЅРёС†Рµ, С‡С‚РѕР±С‹ РѕРЅР° РЅРµ РѕРїРѕР·РґР°Р»Р° РЅР° РІСЃС‚СЂРµС‡Сѓ",
    id                   : 105
  }, {
    word                 : "disgust",
    image                : "files/06_0106.jpg",
    audio                : "files/06_0106.mp3",
    audioMeaning         : "files/06_0106_meaning.mp3",
    audioExample         : "files/06_0106_example.mp3",
    textMeaning          : "Disgust is a feeling of distaste and anger caused by something rude or unpleasant",
    textExample          : "He felt disgust toward his date because she had such terrible eating habits",
    transcription        : "[disgКЊМЃst]",
    wordTranslate        : "РѕС‚РІСЂР°С‰РµРЅРёРµ",
    textMeaningTranslate : "РћС‚РІСЂР°С‰РµРЅРёРµ - СЌС‚Рѕ С‡СѓРІСЃС‚РІРѕ РѕС‚РІСЂР°С‰РµРЅРёСЏ Рё РіРЅРµРІР°, РІС‹Р·РІР°РЅРЅРѕРµ С‡РµРј-С‚Рѕ РіСЂСѓР±С‹Рј РёР»Рё РЅРµРїСЂРёСЏС‚РЅС‹Рј",
    textExampleTranslate : "РћРЅ С‡СѓРІСЃС‚РІРѕРІР°Р» РѕС‚РІСЂР°С‰РµРЅРёРµ Рє СЃРІРѕРµРјСѓ СЃРІРёРґР°РЅРёСЋ, РїРѕС‚РѕРјСѓ С‡С‚Рѕ Сѓ РЅРµРµ Р±С‹Р»Рё С‚Р°РєРёРµ Р°СЃРЅС‹Рµ РµРґРїРѕС‡С‚РµРЅРёСЏ РІ РµРґРµ",
    id                   : 106
  }, {
    word                 : "fashionable",
    image                : "files/06_0107.jpg",
    audio                : "files/06_0107.mp3",
    audioMeaning         : "files/06_0107_meaning.mp3",
    audioExample         : "files/06_0107_example.mp3",
    textMeaning          : "Something fashionable is what people like to wear and do now",
    textExample          : "It is very fashionable to wear a hat",
    transcription        : "[fЗЅКѓЙ™nЙ™bl]",
    wordTranslate        : "РјРѕРґРЅРѕ",
    textMeaningTranslate : "Р§С‚Рѕ-С‚Рѕ РјРѕРґРЅРѕРµ - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ Р»СЋРґРё Р»СЋР±СЏС‚ РЅРѕСЃРёС‚СЊ Рё РґРµР»Р°С‚СЊ СЃРµР№С‡Р°СЃ",
    textExampleTranslate : "РћС‡РµРЅСЊ РјРѕРґРЅРѕ РЅРѕСЃРёС‚СЊ С€Р»СЏРїСѓ",
    id                   : 107
  }, {
    word                 : "foreign",
    image                : "files/06_0108.jpg",
    audio                : "files/06_0108.mp3",
    audioMeaning         : "files/06_0108_meaning.mp3",
    audioExample         : "files/06_0108_example.mp3",
    textMeaning          : "Something foreign is something we are not used to",
    textExample          : "He has travelled widely in foreign countries",
    transcription        : "[fО¬rЙ™n]",
    wordTranslate        : "РёРЅРѕСЃС‚СЂР°РЅРЅС‹Рµ",
    textMeaningTranslate : "Р§С‚Рѕ-С‚Рѕ С‡СѓР¶РѕРµ - СЌС‚Рѕ С‚Рѕ, Рє С‡РµРјСѓ РјС‹ РЅРµ РїСЂРёРІС‹РєР»Рё",
    textExampleTranslate : "РћРЅ РјРЅРѕРіРѕ РїСѓС‚РµС€РµСЃС‚РІРѕРІР°Р» РїРѕ Р·Р°СЂСѓР±РµР¶РЅС‹Рј СЃС‚СЂР°РЅР°Рј",
    id                   : 108
  }, {
    word                 : "gulf",
    image                : "files/06_0109.jpg",
    audio                : "files/06_0109.mp3",
    audioMeaning         : "files/06_0109_meaning.mp3",
    audioExample         : "files/06_0109_example.mp3",
    textMeaning          : "A gulf is a gap between people who do not understand each other",
    textExample          : "There has been a gulf between James and Tony since their parents died",
    transcription        : "[gКЊlf]",
    wordTranslate        : "Р·Р°Р»РёРІ",
    textMeaningTranslate : "РџСЂРѕРїР°СЃС‚СЊ - СЌС‚Рѕ РїСЂРѕРїР°СЃС‚СЊ РјРµР¶РґСѓ Р»СЋРґСЊРјРё, РєРѕС‚РѕСЂС‹Рµ РЅРµ РїРѕРЅРёРјР°СЋС‚ РґСЂСѓРі РґСЂСѓРіР°",
    textExampleTranslate : "РњРµР¶РґСѓ Р”Р¶РµР№РјСЃРѕРј Рё РўРѕРЅРё Р±С‹Р»Р° РїСЂРѕРїР°СЃС‚СЊ СЃ С‚РµС… РїРѕСЂ, РєР°Рє СѓРјРµСЂР»Рё РёС… СЂРѕРґРёС‚РµР»Рё",
    id                   : 109
  }, {
    word                 : "mirror",
    image                : "files/06_0110.jpg",
    audio                : "files/06_0110.mp3",
    audioMeaning         : "files/06_0110_meaning.mp3",
    audioExample         : "files/06_0110_example.mp3",
    textMeaning          : "A mirror is usually made of glass, and you can see yourself in it",
    textExample          : "He used the mirror to shine light in their eyes",
    transcription        : "[mГ­rЙ™(r)]",
    wordTranslate        : "Р·РµСЂРєР°Р»Рѕ",
    textMeaningTranslate : "Р—РµСЂРєР°Р»Рѕ РѕР±С‹С‡РЅРѕ РґРµР»Р°РµС‚СЃСЏ РёР· СЃС‚РµРєР»Р°, Рё РІС‹ РјРѕР¶РµС‚Рµ СѓРІРёРґРµС‚СЊ СЃРµР±СЏ РІ РЅРµРј",
    textExampleTranslate : "РћРЅ РёСЃРїРѕР»СЊР·РѕРІР°Р» Р·РµСЂРєР°Р»Рѕ, С‡С‚РѕР±С‹ СЃРІРµС‚РёС‚СЊ РёРј РІ РіР»Р°Р·Р°",
    id                   : 110
  }, {
    word                 : "natural",
    image                : "files/06_0111.jpg",
    audio                : "files/06_0111.mp3",
    audioMeaning         : "files/06_0111_meaning.mp3",
    audioExample         : "files/06_0111_example.mp3",
    textMeaning          : "Things that are natural are not made by people",
    textExample          : "We need to take care of the natural world",
    transcription        : "[nЗЅК§Й™rЙ™l]",
    wordTranslate        : "РµСЃС‚РµСЃС‚РІРµРЅРЅС‹Р№",
    textMeaningTranslate : "Р’РµС‰Рё, РєРѕС‚РѕСЂС‹Рµ РµСЃС‚РµСЃС‚РІРµРЅРЅС‹, РЅРµ СЃРґРµР»Р°РЅС‹ Р»СЋРґСЊРјРё",
    textExampleTranslate : "РќР°Рј РЅСѓР¶РЅРѕ Р·Р°Р±РѕС‚РёС‚СЊСЃСЏ Рѕ РјРёСЂРµ РїСЂРёСЂРѕРґС‹",
    id                   : 111
  }, {
    word                 : "nowadays",
    image                : "files/06_0112.jpg",
    audio                : "files/06_0112.mp3",
    audioMeaning         : "files/06_0112_meaning.mp3",
    audioExample         : "files/06_0112_example.mp3",
    textMeaning          : "Nowadays means at the present time",
    textExample          : "Nowadays, not so many people smoke",
    transcription        : "[nГЎuЙ™dГЁiz]",
    wordTranslate        : "РІ РЅР°С€Рµ РІСЂРµРјСЏ",
    textMeaningTranslate : "Р’ РЅР°СЃС‚РѕСЏС‰РµРµ РІСЂРµРјСЏ Р·РЅР°С‡РёС‚ РІ РЅР°СЃС‚РѕСЏС‰РµРµ РІСЂРµРјСЏ",
    textExampleTranslate : "Р’ РЅР°СЃС‚РѕСЏС‰РµРµ РІСЂРµРјСЏ РЅРµ С‚Р°Рє РјРЅРѕРіРѕ Р»СЋРґРµР№ РєСѓСЂСЏС‚",
    id                   : 112
  }, {
    word                 : "participant",
    image                : "files/06_0113.jpg",
    audio                : "files/06_0113.mp3",
    audioMeaning         : "files/06_0113_meaning.mp3",
    audioExample         : "files/06_0113_example.mp3",
    textMeaning          : "A participant is someone who joins in a social event or competition",
    textExample          : "There were thousands of participants in this yearвЂ™s marathon",
    transcription        : "[pЙ‘ЛђrtГ­sЙ™pЙ™nt]",
    wordTranslate        : "СѓС‡Р°СЃС‚РЅРёРє",
    textMeaningTranslate : "РЈС‡Р°СЃС‚РЅРёРє - СЌС‚Рѕ С‚РѕС‚, РєС‚Рѕ СѓС‡Р°СЃС‚РІСѓРµС‚ РІ РѕР±С‰РµСЃС‚РІРµРЅРЅРѕРј РјРµСЂРѕРїСЂРёСЏС‚РёРё РёР»Рё РєРѕРЅРєСѓСЂСЃРµ",
    textExampleTranslate : "Р’ СЌС‚РѕРј РіРѕРґСѓ РІ РјР°СЂР°С„РѕРЅРµ РїСЂРёРЅСЏР»Рё СѓС‡Р°СЃС‚РёРµ С‚С‹СЃСЏС‡Рё С‡РµР»РѕРІРµРє",
    id                   : 113
  }, {
    word                 : "ritual",
    image                : "files/06_0114.jpg",
    audio                : "files/06_0114.mp3",
    audioMeaning         : "files/06_0114_meaning.mp3",
    audioExample         : "files/06_0114_example.mp3",
    textMeaning          : "A ritual is a formal custom that people do regularly",
    textExample          : "Ken was very interested to learn about the religious rituals of the natives",
    transcription        : "[rГ­tКѓuЙ™l]",
    wordTranslate        : "СЂРёС‚СѓР°Р»",
    textMeaningTranslate : "Р РёС‚СѓР°Р» - СЌС‚Рѕ С„РѕСЂРјР°Р»СЊРЅС‹Р№ РѕР±С‹С‡Р°Р№, РєРѕС‚РѕСЂС‹Р№ СЂРµРіСѓР»СЏСЂРЅРѕ РґРµР»Р°СЋС‚ Р»СЋРґРё",
    textExampleTranslate : "РљРµРЅСѓ Р±С‹Р»Рѕ РѕС‡РµРЅСЊ РёРЅС‚РµСЂРµСЃРЅРѕ СѓР·РЅР°С‚СЊ Рѕ СЂРµР»РёРіРёРѕР·РЅС‹С… СЂРёС‚СѓР°Р»Р°С… С‚СѓР·РµРјС†РµРІ",
    id                   : 114
  }, {
    word                 : "spoken",
    image                : "files/06_0115.jpg",
    audio                : "files/06_0115.mp3",
    audioMeaning         : "files/06_0115_meaning.mp3",
    audioExample         : "files/06_0115_example.mp3",
    textMeaning          : "Spoken language is what we say",
    textExample          : "We cannot take back what has been spoken",
    transcription        : "[spГіukЙ™n]",
    wordTranslate        : "Р·РЅР°РЅРёРµ",
    textMeaningTranslate : "Р Р°Р·РіРѕРІРѕСЂРЅС‹Р№ СЏР·С‹Рє - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ РјС‹ РіРѕРІРѕСЂРёРј",
    textExampleTranslate : "РњС‹ РЅРµ РјРѕР¶РµРј Р·Р°Р±СЂР°С‚СЊ С‚Рѕ, С‡С‚Рѕ Р±С‹Р»Рѕ СЃРєР°Р·Р°РЅРѕ",
    id                   : 115
  }, {
    word                 : "sport",
    image                : "files/06_0116.jpg",
    audio                : "files/06_0116.mp3",
    audioMeaning         : "files/06_0116_meaning.mp3",
    audioExample         : "files/06_0116_example.mp3",
    textMeaning          : "Sport involves games like running, jumping, football, and tennis",
    textExample          : "She loves watching sport on TV",
    transcription        : "[spЙ”Лђrt]",
    wordTranslate        : "СЃРїРѕСЂС‚",
    textMeaningTranslate : "РЎРїРѕСЂС‚ РІРєР»СЋС‡Р°РµС‚ РІ СЃРµР±СЏ С‚Р°РєРёРµ РёРіСЂС‹, РєР°Рє Р±РµРі, РїСЂС‹Р¶РєРё, С„СѓС‚Р±РѕР» Рё С‚РµРЅРЅРёСЃ",
    textExampleTranslate : "РћРЅР° Р»СЋР±РёС‚ СЃРјРѕС‚СЂРµС‚СЊ СЃРїРѕСЂС‚ РїРѕ С‚РµР»РµРІРёР·РѕСЂСѓ",
    id                   : 116
  }, {
    word                 : "surprised",
    image                : "files/06_0117.jpg",
    audio                : "files/06_0117.mp3",
    audioMeaning         : "files/06_0117_meaning.mp3",
    audioExample         : "files/06_0117_example.mp3",
    textMeaning          : "You are surprised when something unexpected happens",
    textExample          : "He didnвЂ™t appear at all surprised when he read the article",
    transcription        : "[sЙ™rprГЎizd]",
    wordTranslate        : "СѓРґРёРІРёР»",
    textMeaningTranslate : "Р’С‹ СѓРґРёРІР»СЏРµС‚РµСЃСЊ, РєРѕРіРґР° РїСЂРѕРёСЃС…РѕРґРёС‚ С‡С‚Рѕ-С‚Рѕ РЅРµРѕР¶РёРґР°РЅРЅРѕРµ",
    textExampleTranslate : "РћРЅ СЃРѕРІСЃРµРј РЅРµ СѓРґРёРІРёР»СЃСЏ, РєРѕРіРґР° РїСЂРѕС‡РёС‚Р°Р» СЃС‚Р°С‚СЊСЋ",
    id                   : 117
  }, {
    word                 : "tense",
    image                : "files/06_0118.jpg",
    audio                : "files/06_0118.mp3",
    audioMeaning         : "files/06_0118_meaning.mp3",
    audioExample         : "files/06_0118_example.mp3",
    textMeaning          : "When you are tense, you are not comfortable and feel unhappy",
    textExample          : "I felt very tense waiting to hear the result of the vote",
    transcription        : "[tens]",
    wordTranslate        : "РІСЂРµРјСЏ",
    textMeaningTranslate : "РљРѕРіРґР° РІС‹ РЅР°РїСЂСЏР¶РµРЅС‹, РІС‹ РЅРµ С‡СѓРІСЃС‚РІСѓРµС‚Рµ СЃРµР±СЏ РєРѕРјС„РѕСЂС‚РЅРѕ Рё С‡СѓРІСЃС‚РІСѓРµС‚Рµ СЃРµР±СЏ РЅРµСЃС‡Р°СЃС‚РЅС‹Рј",
    textExampleTranslate : "РЇ С‡СѓРІСЃС‚РІРѕРІР°Р» СЃРµР±СЏ РѕС‡РµРЅСЊ РЅР°РїСЂСЏР¶РµРЅРЅС‹Рј, РѕР¶РёРґР°СЏ СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ РіРѕР»РѕСЃРѕРІР°РЅРёСЏ",
    id                   : 118
  }, {
    word                 : "totally",
    image                : "files/06_0119.jpg",
    audio                : "files/06_0119.mp3",
    audioMeaning         : "files/06_0119_meaning.mp3",
    audioExample         : "files/06_0119_example.mp3",
    textMeaning          : "If you totally agree, you agree with everything just said",
    textExample          : "I am totally against that",
    transcription        : "[tГіutЙ™li]",
    wordTranslate        : "РїРѕР»РЅРѕСЃС‚СЊСЋ",
    textMeaningTranslate : "Р•СЃР»Рё РІС‹ РїРѕР»РЅРѕСЃС‚СЊСЋ СЃРѕРіР»Р°СЃРЅС‹, РІС‹ СЃРѕРіР»Р°С€Р°РµС‚РµСЃСЊ СЃРѕ РІСЃРµРј С‚РѕР»СЊРєРѕ С‡С‚Рѕ СЃРєР°Р·Р°РЅРЅС‹Рј",
    textExampleTranslate : "РЇ РїРѕР»РЅРѕСЃС‚СЊСЋ РїСЂРѕС‚РёРІ СЌС‚РѕРіРѕ",
    id                   : 119
  }, {
    word                 : "vague",
    image                : "files/06_0120.jpg",
    audio                : "files/06_0120.mp3",
    audioMeaning         : "files/06_0120_meaning.mp3",
    audioExample         : "files/06_0120_example.mp3",
    textMeaning          : "If something is vague, it is not clear and gives very few details",
    textExample          : "I asked him about his motherвЂ™s health, but he was very vague about it",
    transcription        : "[veig]",
    wordTranslate        : "СЂР°СЃРїР»С‹РІС‡Р°С‚С‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЂР°СЃРїР»С‹РІС‡Р°С‚Рѕ, СЌС‚Рѕ РЅРµ СЏСЃРЅРѕ Рё РґР°РµС‚ РѕС‡РµРЅСЊ РјР°Р»Рѕ РґРµС‚Р°Р»РµР№",
    textExampleTranslate : "РЇ СЃРїСЂРѕСЃРёР» РµРіРѕ Рѕ Р·РґРѕСЂРѕРІСЊРµ РµРіРѕ РјР°С‚РµСЂРё, РЅРѕ РѕРЅ Р±С‹Р» РѕС‡РµРЅСЊ СЃРјСѓС‚РЅС‹Рј РѕР± СЌС‚РѕРј",
    id                   : 120
  }, {
    word                 : "allow",
    image                : "files/07_0121.jpg",
    audio                : "files/07_0121.mp3",
    audioMeaning         : "files/07_0121_meaning.mp3",
    audioExample         : "files/07_0121_example.mp3",
    textMeaning          : "To allow something to happen means to let it happen",
    textExample          : "Having a ticket will allow you to enter the show",
    transcription        : "[Й™lГЎu]",
    wordTranslate        : "РїРѕР·РІРѕР»СЏС‚СЊ",
    textMeaningTranslate : "РџРѕР·РІРѕР»РёС‚СЊ С‡РµРјСѓ-С‚Рѕ СЃР»СѓС‡РёС‚СЊСЃСЏ - Р·РЅР°С‡РёС‚ РїРѕР·РІРѕР»РёС‚СЊ СЌС‚РѕРјСѓ СЃР»СѓС‡РёС‚СЊСЃСЏ",
    textExampleTranslate : "РќР°Р»РёС‡РёРµ Р±РёР»РµС‚Р° РїРѕР·РІРѕР»РёС‚ РІР°Рј РІРѕР№С‚Рё РІ С€РѕСѓ",
    id                   : 121
  }, {
    word                 : "announce",
    image                : "files/07_0122.jpg",
    audio                : "files/07_0122.mp3",
    audioMeaning         : "files/07_0122_meaning.mp3",
    audioExample         : "files/07_0122_example.mp3",
    textMeaning          : "To announce something is to make it known",
    textExample          : "He announced to everyone his new idea for the company",
    transcription        : "[Й™nГЎuns]",
    wordTranslate        : "РѕР±СЉСЏРІРёС‚СЊ",
    textMeaningTranslate : "РћР±СЉСЏРІРёС‚СЊ С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ СЃРґРµР»Р°С‚СЊ СЌС‚Рѕ РёР·РІРµСЃС‚РЅС‹Рј",
    textExampleTranslate : "РћРЅ РѕР±СЉСЏРІРёР» РІСЃРµРј СЃРІРѕСЋ РЅРѕРІСѓСЋ РёРґРµСЋ РґР»СЏ РєРѕРјРїР°РЅРёРё",
    id                   : 122
  }, {
    word                 : "beside",
    image                : "files/07_0123.jpg",
    audio                : "files/07_0123.mp3",
    audioMeaning         : "files/07_0123_meaning.mp3",
    audioExample         : "files/07_0123_example.mp3",
    textMeaning          : "Someone or something beside you is next to you",
    textExample          : "The two brothers stood beside each other",
    transcription        : "[bisГЎid]",
    wordTranslate        : "СЂСЏРґ",
    textMeaningTranslate : "РљС‚Рѕ-С‚Рѕ РёР»Рё С‡С‚Рѕ-С‚Рѕ СЂСЏРґРѕРј СЃ С‚РѕР±РѕР№ СЂСЏРґРѕРј СЃ С‚РѕР±РѕР№",
    textExampleTranslate : "Р”РІР° Р±СЂР°С‚Р° СЃС‚РѕСЏР»Рё СЂСЏРґРѕРј РґСЂСѓРі СЃ РґСЂСѓРіРѕРј",
    id                   : 123
  }, {
    word                 : "challenge",
    image                : "files/07_0124.jpg",
    audio                : "files/07_0124.mp3",
    audioMeaning         : "files/07_0124_meaning.mp3",
    audioExample         : "files/07_0124_example.mp3",
    textMeaning          : "A challenge is something difficult to complete",
    textExample          : "It was a challenge to climb to the top of the mountain",
    transcription        : "[tКѓЗЅlindК’]",
    wordTranslate        : "РІС‹Р·РѕРІ",
    textMeaningTranslate : "Р—Р°РґР°С‡Р° - СЌС‚Рѕ РЅРµС‡С‚Рѕ СЃР»РѕР¶РЅРѕРµ",
    textExampleTranslate : "Р­С‚Рѕ Р±С‹Р»Р° РїСЂРѕР±Р»РµРјР° - РїРѕРґРЅСЏС‚СЊСЃСЏ РЅР° РІРµСЂС€РёРЅСѓ РіРѕСЂС‹",
    id                   : 124
  }, {
    word                 : "claim",
    image                : "files/07_0125.jpg",
    audio                : "files/07_0125.mp3",
    audioMeaning         : "files/07_0125_meaning.mp3",
    audioExample         : "files/07_0125_example.mp3",
    textMeaning          : "To claim means to say that something is true",
    textExample          : "He claimed to know why the countryвЂ™s laws were weak",
    transcription        : "[kleim]",
    wordTranslate        : "Р·Р°РїСЂРѕСЃ",
    textMeaningTranslate : "РЈС‚РІРµСЂР¶РґР°С‚СЊ - Р·РЅР°С‡РёС‚ РіРѕРІРѕСЂРёС‚СЊ, С‡С‚Рѕ С‡С‚Рѕ-С‚Рѕ РІРµСЂРЅРѕ",
    textExampleTranslate : "РћРЅ СѓС‚РІРµСЂР¶РґР°Р», С‡С‚Рѕ Р·РЅР°РµС‚, РїРѕС‡РµРјСѓ Р·Р°РєРѕРЅС‹ СЃС‚СЂР°РЅС‹ Р±С‹Р»Рё СЃР»Р°Р±С‹РјРё",
    id                   : 125
  }, {
    word                 : "condition",
    image                : "files/07_0126.jpg",
    audio                : "files/07_0126.mp3",
    audioMeaning         : "files/07_0126_meaning.mp3",
    audioExample         : "files/07_0126_example.mp3",
    textMeaning          : "The condition of someone or something is the state that they are in",
    textExample          : "The patientвЂ™s condition was very good",
    transcription        : "[kЙ™ndГ­КѓЙ™n]",
    wordTranslate        : "СЃРѕСЃС‚РѕСЏРЅРёРµ",
    textMeaningTranslate : "РЎРѕСЃС‚РѕСЏРЅРёРµ РєРѕРіРѕ-С‚Рѕ РёР»Рё С‡РµРіРѕ-С‚Рѕ - СЌС‚Рѕ СЃРѕСЃС‚РѕСЏРЅРёРµ, РІ РєРѕС‚РѕСЂРѕРј РѕРЅРё РЅР°С…РѕРґСЏС‚СЃСЏ",
    textExampleTranslate : "РЎРѕСЃС‚РѕСЏРЅРёРµ РїР°С†РёРµРЅС‚Р° Р±С‹Р»Рѕ РѕС‡РµРЅСЊ С…РѕСЂРѕС€РёРј",
    id                   : 126
  }, {
    word                 : "contribute",
    image                : "files/07_0127.jpg",
    audio                : "files/07_0127.mp3",
    audioMeaning         : "files/07_0127_meaning.mp3",
    audioExample         : "files/07_0127_example.mp3",
    textMeaning          : "To contribute to something means to do something to make it successful",
    textExample          : "We decided to contribute money to the new hospital",
    transcription        : "[kЙ™ntrГ­bjuЛђt]",
    wordTranslate        : "РґРµР»Р°С‚СЊ РІРєР»Р°Рґ",
    textMeaningTranslate : "РџРѕРјРѕРіР°С‚СЊ С‡РµРјСѓ-С‚Рѕ - Р·РЅР°С‡РёС‚ РґРµР»Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ, С‡С‚РѕР±С‹ СЃРґРµР»Р°С‚СЊ СЌС‚Рѕ СѓСЃРїРµС€РЅС‹Рј",
    textExampleTranslate : "РњС‹ СЂРµС€РёР»Рё РІРЅРµСЃС‚Рё РґРµРЅСЊРіРё РІ РЅРѕРІСѓСЋ Р±РѕР»СЊРЅРёС†Сѓ",
    id                   : 127
  }, {
    word                 : "difference",
    image                : "files/07_0128.jpg",
    audio                : "files/07_0128.mp3",
    audioMeaning         : "files/07_0128_meaning.mp3",
    audioExample         : "files/07_0128_example.mp3",
    textMeaning          : "A difference is a way that something is not like other things",
    textExample          : "The biggest difference between the birds is the color of their feathers",
    transcription        : "[dГ­fЙ™rЙ™ns]",
    wordTranslate        : "СЂР°Р·РЅРёС†Р°",
    textMeaningTranslate : "Р Р°Р·РЅРёС†Р° - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ С‡С‚Рѕ-С‚Рѕ РЅРµ С‚Р°Рє, РєР°Рє РґСЂСѓРіРёРµ",
    textExampleTranslate : "РЎР°РјР°СЏ Р±РѕР»СЊС€Р°СЏ СЂР°Р·РЅРёС†Р° РјРµР¶РґСѓ РїС‚РёС†Р°РјРё - СЌС‚Рѕ С†РІРµС‚ РёС… РїРµСЂСЊРµРІ",
    id                   : 128
  }, {
    word                 : "divide",
    image                : "files/07_0129.jpg",
    audio                : "files/07_0129.mp3",
    audioMeaning         : "files/07_0129_meaning.mp3",
    audioExample         : "files/07_0129_example.mp3",
    textMeaning          : "To divide something is to split it into smaller parts",
    textExample          : "We divided the pizza",
    transcription        : "[divГЎid]",
    wordTranslate        : "РґРµР»РёС‚СЊ",
    textMeaningTranslate : "Р”РµР»РёС‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РґРµР»РёС‚СЊ СЌС‚Рѕ РЅР° Р±РѕР»РµРµ РјРµР»РєРёРµ С‡Р°СЃС‚Рё",
    textExampleTranslate : "РњС‹ СЂР°Р·РґРµР»РёР»Рё РїРёС†С†Сѓ",
    id                   : 129
  }, {
    word                 : "expert",
    image                : "files/07_0130.jpg",
    audio                : "files/07_0130.mp3",
    audioMeaning         : "files/07_0130_meaning.mp3",
    audioExample         : "files/07_0130_example.mp3",
    textMeaning          : "An expert is someone who is very good at doing something",
    textExample          : "The wizard was an expert at magic",
    transcription        : "[Г©kspЙ™Лђrt]",
    wordTranslate        : "СЌРєСЃРїРµСЂС‚",
    textMeaningTranslate : "Р­РєСЃРїРµСЂС‚ - СЌС‚Рѕ С‚РѕС‚, РєС‚Рѕ РѕС‡РµРЅСЊ С…РѕСЂРѕС€Рѕ РґРµР»Р°РµС‚ С‡С‚Рѕ-С‚Рѕ",
    textExampleTranslate : "Р’РѕР»С€РµР±РЅРёРє Р±С‹Р» СЌРєСЃРїРµСЂС‚РѕРј РІ РјР°РіРёРё",
    id                   : 130
  }, {
    word                 : "famous",
    image                : "files/07_0131.jpg",
    audio                : "files/07_0131.mp3",
    audioMeaning         : "files/07_0131_meaning.mp3",
    audioExample         : "files/07_0131_example.mp3",
    textMeaning          : "A famous person or thing is well known",
    textExample          : "The Eiffel Tower in Paris is very famous",
    transcription        : "[fГ©imЙ™s]",
    wordTranslate        : "РёР·РІРµСЃС‚РЅС‹Р№",
    textMeaningTranslate : "РР·РІРµСЃС‚РЅС‹Р№ С‡РµР»РѕРІРµРє РёР»Рё РІРµС‰СЊ С…РѕСЂРѕС€Рѕ РёР·РІРµСЃС‚РЅР°",
    textExampleTranslate : "Р­Р№С„РµР»РµРІР° Р±Р°С€РЅСЏ РІ РџР°СЂРёР¶Рµ РѕС‡РµРЅСЊ РёР·РІРµСЃС‚РЅР°",
    id                   : 131
  }, {
    word                 : "force",
    image                : "files/07_0132.jpg",
    audio                : "files/07_0132.mp3",
    audioMeaning         : "files/07_0132_meaning.mp3",
    audioExample         : "files/07_0132_example.mp3",
    textMeaning          : "Force is a personвЂ™s strength or power",
    textExample          : "He used all his force to try and open the door",
    transcription        : "[fЙ”Лђrs]",
    wordTranslate        : "СЃРёР»Р°",
    textMeaningTranslate : "РЎРёР»Р° - СЌС‚Рѕ СЃРёР»Р° РёР»Рё СЃРёР»Р° С‡РµР»РѕРІРµРєР°",
    textExampleTranslate : "РћРЅ РёСЃРїРѕР»СЊР·РѕРІР°Р» РІСЃРµ СЃРІРѕРё СЃРёР»С‹, С‡С‚РѕР±С‹ РїРѕРїС‹С‚Р°С‚СЊСЃСЏ РѕС‚РєСЂС‹С‚СЊ РґРІРµСЂСЊ",
    id                   : 132
  }, {
    word                 : "harm",
    image                : "files/07_0133.jpg",
    audio                : "files/07_0133.mp3",
    audioMeaning         : "files/07_0133_meaning.mp3",
    audioExample         : "files/07_0133_example.mp3",
    textMeaning          : "To cause harm is to hurt someone or damage something",
    textExample          : "A hot iron can cause great harm if you are not careful",
    transcription        : "[hЙ‘Лђrm]",
    wordTranslate        : "РІСЂРµРґ",
    textMeaningTranslate : "РџСЂРёС‡РёРЅРёС‚СЊ РІСЂРµРґ - Р·РЅР°С‡РёС‚ РїСЂРёС‡РёРЅРёС‚СЊ РєРѕРјСѓ-С‚Рѕ Р±РѕР»СЊ РёР»Рё С‡С‚Рѕ-С‚Рѕ РїРѕРІСЂРµРґРёС‚СЊ",
    textExampleTranslate : "Р“РѕСЂСЏС‡РёР№ СѓС‚СЋРі РјРѕР¶РµС‚ РїСЂРёС‡РёРЅРёС‚СЊ Р±РѕР»СЊС€РѕР№ РІСЂРµРґ, РµСЃР»Рё РІС‹ РЅРµ Р±СѓРґРµС‚Рµ РѕСЃС‚РѕСЂРѕР¶РЅС‹",
    id                   : 133
  }, {
    word                 : "lay",
    image                : "files/07_0134.jpg",
    audio                : "files/07_0134.mp3",
    audioMeaning         : "files/07_0134_meaning.mp3",
    audioExample         : "files/07_0134_example.mp3",
    textMeaning          : "To lay means to put or place in a horizontal or flat position",
    textExample          : "DonвЂ™t lay your socks on the floor",
    transcription        : "[lei]",
    wordTranslate        : "Р»РµР¶Р°Р»",
    textMeaningTranslate : "РЈР»РѕР¶РёС‚СЊ РѕР·РЅР°С‡Р°РµС‚ РїРѕР»РѕР¶РёС‚СЊ РёР»Рё РїРѕРјРµСЃС‚РёС‚СЊ РІ РіРѕСЂРёР·РѕРЅС‚Р°Р»СЊРЅРѕРµ РёР»Рё РїР»РѕСЃРєРѕРµ РїРѕР»РѕР¶РµРЅРёРµ",
    textExampleTranslate : "РќРµ РєР»Р°РґРёС‚Рµ РЅРѕСЃРєРё РЅР° РїРѕР»",
    id                   : 134
  }, {
    word                 : "peace",
    image                : "files/07_0135.jpg",
    audio                : "files/07_0135.mp3",
    audioMeaning         : "files/07_0135_meaning.mp3",
    audioExample         : "files/07_0135_example.mp3",
    textMeaning          : "Peace is a time without war",
    textExample          : "A white dove is a symbol of peace",
    transcription        : "[piЛђs]",
    wordTranslate        : "РјРёСЂ",
    textMeaningTranslate : "РњРёСЂ - СЌС‚Рѕ РІСЂРµРјСЏ Р±РµР· РІРѕР№РЅС‹",
    textExampleTranslate : "Р‘РµР»С‹Р№ РіРѕР»СѓР±СЊ - СЃРёРјРІРѕР» РјРёСЂР°",
    id                   : 135
  }, {
    word                 : "prince",
    image                : "files/07_0136.jpg",
    audio                : "files/07_0136.mp3",
    audioMeaning         : "files/07_0136_meaning.mp3",
    audioExample         : "files/07_0136_example.mp3",
    textMeaning          : "A prince is the son of a king",
    textExample          : "The prince and the princess were married",
    transcription        : "[prins]",
    wordTranslate        : "РїСЂРёРЅС†",
    textMeaningTranslate : "РџСЂРёРЅС† - СЃС‹РЅ РєРѕСЂРѕР»СЏ",
    textExampleTranslate : "РџСЂРёРЅС† Рё РїСЂРёРЅС†РµСЃСЃР° Р±С‹Р»Рё Р¶РµРЅР°С‚С‹",
    id                   : 136
  }, {
    word                 : "protect",
    image                : "files/07_0137.jpg",
    audio                : "files/07_0137.mp3",
    audioMeaning         : "files/07_0137_meaning.mp3",
    audioExample         : "files/07_0137_example.mp3",
    textMeaning          : "To protect someone is to stop them from getting hurt",
    textExample          : "Firemen protect us from fires",
    transcription        : "[prЙ™tГ©kt]",
    wordTranslate        : "Р·Р°С‰РёС‚Р°",
    textMeaningTranslate : "Р—Р°С‰РёС‰Р°С‚СЊ РєРѕРіРѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РЅРµ РґР°С‚СЊ РёРј РїРѕСЃС‚СЂР°РґР°С‚СЊ",
    textExampleTranslate : "РџРѕР¶Р°СЂРЅС‹Рµ Р·Р°С‰РёС‰Р°СЋС‚ РЅР°СЃ РѕС‚ РїРѕР¶Р°СЂРѕРІ",
    id                   : 137
  }, {
    word                 : "sense",
    image                : "files/07_0138.jpg",
    audio                : "files/07_0138.mp3",
    audioMeaning         : "files/07_0138_meaning.mp3",
    audioExample         : "files/07_0138_example.mp3",
    textMeaning          : "To sense something is to know about it without being told",
    textExample          : "I could sense that he was watching me",
    transcription        : "[sens]",
    wordTranslate        : "СЃРјС‹СЃР»",
    textMeaningTranslate : "Р§СѓРІСЃС‚РІРѕРІР°С‚СЊ С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ Р·РЅР°С‚СЊ РѕР± СЌС‚РѕРј, РЅРµ СЃРєР°Р·Р°РІ РЅРёС‡РµРіРѕ",
    textExampleTranslate : "РЇ С‡СѓРІСЃС‚РІРѕРІР°Р», С‡С‚Рѕ РѕРЅ СЃРјРѕС‚СЂРёС‚ РЅР° РјРµРЅСЏ",
    id                   : 138
  }, {
    word                 : "sudden",
    image                : "files/07_0139.jpg",
    audio                : "files/07_0139.mp3",
    audioMeaning         : "files/07_0139_meaning.mp3",
    audioExample         : "files/07_0139_example.mp3",
    textMeaning          : "When something is sudden, it happens very quickly",
    textExample          : "He felt a sudden pain in his chest",
    transcription        : "[sКЊМЃdn]",
    wordTranslate        : "РІРЅРµР·Р°РїРЅРѕРµ",
    textMeaningTranslate : "РљРѕРіРґР° С‡С‚Рѕ-С‚Рѕ РІРЅРµР·Р°РїРЅРѕ, СЌС‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚ РѕС‡РµРЅСЊ Р±С‹СЃС‚СЂРѕ",
    textExampleTranslate : "РћРЅ РїРѕС‡СѓРІСЃС‚РІРѕРІР°Р» РІРЅРµР·Р°РїРЅСѓСЋ Р±РѕР»СЊ РІ РіСЂСѓРґРё",
    id                   : 139
  }, {
    word                 : "therefore",
    image                : "files/07_0140.jpg",
    audio                : "files/07_0140.mp3",
    audioMeaning         : "files/07_0140_meaning.mp3",
    audioExample         : "files/07_0140_example.mp3",
    textMeaning          : "Therefore means for this reason",
    textExample          : "He is fat. Therefore, he should go on a diet",
    transcription        : "[Г°Й›МЃЙ™ЛђrfЙ”МЂЛђr]",
    wordTranslate        : "СЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕ",
    textMeaningTranslate : "РџРѕСЌС‚РѕРјСѓ Р·РЅР°С‡РёС‚ РїРѕ СЌС‚РѕР№ РїСЂРёС‡РёРЅРµ",
    textExampleTranslate : "РћРЅ С‚РѕР»СЃС‚С‹Р№. РџРѕСЌС‚РѕРјСѓ РµРјСѓ СЃР»РµРґСѓРµС‚ СЃРµСЃС‚СЊ РЅР° РґРёРµС‚Сѓ",
    id                   : 140
  }, {
    word                 : "accept",
    image                : "files/08_0141.jpg",
    audio                : "files/08_0141.mp3",
    audioMeaning         : "files/08_0141_meaning.mp3",
    audioExample         : "files/08_0141_example.mp3",
    textMeaning          : "To accept something that is offered is to take it",
    textExample          : "I accepted the girlвЂ™s very nice gift",
    transcription        : "[Г¦ksГ©pt]",
    wordTranslate        : "РїСЂРёРЅСЏС‚СЊ",
    textMeaningTranslate : "РџСЂРёРЅСЏС‚СЊ С‚Рѕ, С‡С‚Рѕ РїСЂРµРґР»Р°РіР°РµС‚СЃСЏ, Р·РЅР°С‡РёС‚ РїСЂРёРЅСЏС‚СЊ",
    textExampleTranslate : "РЇ РїСЂРёРЅСЏР» РѕС‡РµРЅСЊ С…РѕСЂРѕС€РёР№ РїРѕРґР°СЂРѕРє РґРµРІСѓС€РєРё",
    id                   : 141
  }, {
    word                 : "arrange",
    image                : "files/08_0142.jpg",
    audio                : "files/08_0142.mp3",
    audioMeaning         : "files/08_0142_meaning.mp3",
    audioExample         : "files/08_0142_example.mp3",
    textMeaning          : "To arrange things is to put them in the right place",
    textExample          : "Please arrange the words in order from A to Z",
    transcription        : "[Й™rГ©indК’]",
    wordTranslate        : "РѕСЂРіР°РЅРёР·РѕРІР°С‚СЊ",
    textMeaningTranslate : "Р Р°СЃСЃС‚Р°РІРёС‚СЊ РІРµС‰Рё - Р·РЅР°С‡РёС‚ РїРѕСЃС‚Р°РІРёС‚СЊ РёС… РІ РЅСѓР¶РЅРѕРµ РјРµСЃС‚Рѕ",
    textExampleTranslate : "РџРѕР¶Р°Р»СѓР№СЃС‚Р°, СЂР°СЃРїРѕР»РѕР¶РёС‚Рµ СЃР»РѕРІР° РІ РїРѕСЂСЏРґРєРµ РѕС‚ Рђ РґРѕ РЇ",
    id                   : 142
  }, {
    word                 : "attend",
    image                : "files/08_0143.jpg",
    audio                : "files/08_0143.mp3",
    audioMeaning         : "files/08_0143_meaning.mp3",
    audioExample         : "files/08_0143_example.mp3",
    textMeaning          : "To attend something is to go to it",
    textExample          : "My sister and I attend the same school",
    transcription        : "[Й™tГ©nd]",
    wordTranslate        : "РїСЂРёСЃСѓС‚СЃС‚РІРѕРІР°С‚СЊ",
    textMeaningTranslate : "РџРѕР±С‹РІР°С‚СЊ РЅР° С‡РµРј-С‚Рѕ - Р·РЅР°С‡РёС‚ РїРѕР№С‚Рё РЅР° СЌС‚Рѕ",
    textExampleTranslate : "РњС‹ СЃ СЃРµСЃС‚СЂРѕР№ СѓС‡РёРјСЃСЏ РІ РѕРґРЅРѕР№ С€РєРѕР»Рµ",
    id                   : 143
  }, {
    word                 : "chase",
    image                : "files/08_0144.jpg",
    audio                : "files/08_0144.mp3",
    audioMeaning         : "files/08_0144_meaning.mp3",
    audioExample         : "files/08_0144_example.mp3",
    textMeaning          : "You chase people when you run after them and try to catch them",
    textExample          : "I was chased by a dog",
    transcription        : "[К§eis]",
    wordTranslate        : "РіРЅР°С‚СЊСЃСЏ",
    textMeaningTranslate : "Р’С‹ РїСЂРµСЃР»РµРґСѓРµС‚Рµ Р»СЋРґРµР№, РєРѕРіРґР° Р±РµР¶РёС‚Рµ Р·Р° РЅРёРјРё Рё РїС‹С‚Р°РµС‚РµСЃСЊ РїРѕР№РјР°С‚СЊ РёС…",
    textExampleTranslate : "РњРµРЅСЏ РїСЂРµСЃР»РµРґРѕРІР°Р»Р° СЃРѕР±Р°РєР°",
    id                   : 144
  }, {
    word                 : "contrast",
    image                : "files/08_0145.jpg",
    audio                : "files/08_0145.mp3",
    audioMeaning         : "files/08_0145_meaning.mp3",
    audioExample         : "files/08_0145_example.mp3",
    textMeaning          : "A contrast is a sharp difference between two things",
    textExample          : "The contrast between my parents is very noticeable",
    transcription        : "[kЙ‘МЃntrГ¦st]",
    wordTranslate        : "РєРѕРЅС‚СЂР°СЃС‚",
    textMeaningTranslate : "РљРѕРЅС‚СЂР°СЃС‚ - СЌС‚Рѕ СЂРµР·РєР°СЏ СЂР°Р·РЅРёС†Р° РјРµР¶РґСѓ РґРІСѓРјСЏ РІРµС‰Р°РјРё",
    textExampleTranslate : "РљРѕРЅС‚СЂР°СЃС‚ РјРµР¶РґСѓ РјРѕРёРјРё СЂРѕРґРёС‚РµР»СЏРјРё РѕС‡РµРЅСЊ Р·Р°РјРµС‚РµРЅ",
    id                   : 145
  }, {
    word                 : "encourage",
    image                : "files/08_0146.jpg",
    audio                : "files/08_0146.mp3",
    audioMeaning         : "files/08_0146_meaning.mp3",
    audioExample         : "files/08_0146_example.mp3",
    textMeaning          : "To encourage people is to make them want to do something",
    textExample          : "My football coach will encourage us when we are losing",
    transcription        : "[inkЙ™МЃЛђridК’]",
    wordTranslate        : "РїРѕРѕС‰СЂСЏС‚СЊ",
    textMeaningTranslate : "Р’РѕРѕРґСѓС€РµРІР»СЏС‚СЊ Р»СЋРґРµР№ - Р·РЅР°С‡РёС‚ Р·Р°СЃС‚Р°РІР»СЏС‚СЊ РёС… С…РѕС‚РµС‚СЊ С‡С‚Рѕ-С‚Рѕ РґРµР»Р°С‚СЊ",
    textExampleTranslate : "РњРѕР№ С„СѓС‚Р±РѕР»СЊРЅС‹Р№ С‚СЂРµРЅРµСЂ Р±СѓРґРµС‚ РІРѕРѕРґСѓС€РµРІР»СЏС‚СЊ РЅР°СЃ, РєРѕРіРґР° РјС‹ РїСЂРѕРёРіСЂС‹РІР°РµРј",
    id                   : 146
  }, {
    word                 : "familiar",
    image                : "files/08_0147.jpg",
    audio                : "files/08_0147.mp3",
    audioMeaning         : "files/08_0147_meaning.mp3",
    audioExample         : "files/08_0147_example.mp3",
    textMeaning          : "People or things familiar to you are those you know well",
    textExample          : "The two friends were very familiar with each other",
    transcription        : "[fЙ™mГ­ljЙ™r]",
    wordTranslate        : "Р·РЅР°РєРѕРјС‹Рµ",
    textMeaningTranslate : "Р›СЋРґРё РёР»Рё РІРµС‰Рё, РєРѕС‚РѕСЂС‹Рµ РІР°Рј Р·РЅР°РєРѕРјС‹, СЌС‚Рѕ С‚Рµ, РєРѕРіРѕ РІС‹ С…РѕСЂРѕС€Рѕ Р·РЅР°РµС‚Рµ",
    textExampleTranslate : "Р”РІР° РґСЂСѓРіР° Р±С‹Р»Рё РѕС‡РµРЅСЊ Р·РЅР°РєРѕРјС‹ РґСЂСѓРі СЃ РґСЂСѓРіРѕРј",
    id                   : 147
  }, {
    word                 : "grab",
    image                : "files/08_0148.jpg",
    audio                : "files/08_0148.mp3",
    audioMeaning         : "files/08_0148_meaning.mp3",
    audioExample         : "files/08_0148_example.mp3",
    textMeaning          : "To grab is to take a hold of someone or something suddenly",
    textExample          : "I grabbed a pear from the tree",
    transcription        : "[grГ¦b]",
    wordTranslate        : "Р·Р°С…РІР°С‚",
    textMeaningTranslate : "Р—Р°С…РІР°С‚РёС‚СЊ - Р·РЅР°С‡РёС‚ СЃС…РІР°С‚РёС‚СЊ РєРѕРіРѕ-С‚Рѕ РёР»Рё С‡С‚Рѕ-С‚Рѕ РІРЅРµР·Р°РїРЅРѕ",
    textExampleTranslate : "РЇ СЃС…РІР°С‚РёР» РіСЂСѓС€Сѓ СЃ РґРµСЂРµРІР°",
    id                   : 148
  }, {
    word                 : "hang",
    image                : "files/08_0149.jpg",
    audio                : "files/08_0149.mp3",
    audioMeaning         : "files/08_0149_meaning.mp3",
    audioExample         : "files/08_0149_example.mp3",
    textMeaning          : "To hang something is to keep it above the ground",
    textExample          : "I drew a picture of my family, and my mother hung it on the wall",
    transcription        : "[hГ¦Е‹]",
    wordTranslate        : "РїРѕРІРµСЃРёС‚СЊ",
    textMeaningTranslate : "РџРѕРІРµСЃРёС‚СЊ С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ РґРµСЂР¶Р°С‚СЊ РµРіРѕ РЅР°Рґ Р·РµРјР»РµР№",
    textExampleTranslate : "РЇ РЅР°СЂРёСЃРѕРІР°Р» РєР°СЂС‚РёРЅСѓ СЃРІРѕРµР№ СЃРµРјСЊРё, Р° РјР°РјР° РїРѕРІРµСЃРёР»Р° РµРµ РЅР° СЃС‚РµРЅСѓ",
    id                   : 149
  }, {
    word                 : "huge",
    image                : "files/08_0150.jpg",
    audio                : "files/08_0150.mp3",
    audioMeaning         : "files/08_0150_meaning.mp3",
    audioExample         : "files/08_0150_example.mp3",
    textMeaning          : "If something is huge, it is very big",
    textExample          : "At work, my father drives a huge truck",
    transcription        : "[hjuЛђdК’]",
    wordTranslate        : "РѕРіСЂРѕРјРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РѕРіСЂРѕРјРЅРѕРµ, РѕРЅРѕ РѕС‡РµРЅСЊ Р±РѕР»СЊС€РѕРµ",
    textExampleTranslate : "РќР° СЂР°Р±РѕС‚Рµ РјРѕР№ РѕС‚РµС† РІРѕРґРёС‚ РѕРіСЂРѕРјРЅС‹Р№ РіСЂСѓР·РѕРІРёРє",
    id                   : 150
  }, {
    word                 : "necessary",
    image                : "files/08_0151.jpg",
    audio                : "files/08_0151.mp3",
    audioMeaning         : "files/08_0151_meaning.mp3",
    audioExample         : "files/08_0151_example.mp3",
    textMeaning          : "If something is necessary, you must do it",
    textExample          : "A passport is necessary if you travel to other countries",
    transcription        : "[nГ©sЙ™sГЁri]",
    wordTranslate        : "РЅСѓР¶РЅРѕ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РЅСѓР¶РЅРѕ, С‚С‹ РґРѕР»Р¶РµРЅ СЌС‚Рѕ СЃРґРµР»Р°С‚СЊ",
    textExampleTranslate : "РџР°СЃРїРѕСЂС‚ РЅРµРѕР±С…РѕРґРёРј, РµСЃР»Рё РІС‹ РїСѓС‚РµС€РµСЃС‚РІСѓРµС‚Рµ РІ РґСЂСѓРіРёРµ СЃС‚СЂР°РЅС‹",
    id                   : 151
  }, {
    word                 : "pattern",
    image                : "files/08_0152.jpg",
    audio                : "files/08_0152.mp3",
    audioMeaning         : "files/08_0152_meaning.mp3",
    audioExample         : "files/08_0152_example.mp3",
    textMeaning          : "A pattern is a way in which something is done or organized",
    textExample          : "My pattern of brushing my teeth is the same as most peopleвЂ™s",
    transcription        : "[pЗЅtЙ™rn]",
    wordTranslate        : "С€Р°Р±Р»РѕРЅ",
    textMeaningTranslate : "РЁР°Р±Р»РѕРЅ - СЌС‚Рѕ СЃРїРѕСЃРѕР±, РєРѕС‚РѕСЂС‹Рј С‡С‚Рѕ-С‚Рѕ РґРµР»Р°РµС‚СЃСЏ РёР»Рё РѕСЂРіР°РЅРёР·РѕРІР°РЅРѕ",
    textExampleTranslate : "РњРѕР№ РїРѕСЂСЏРґРѕРє С‡РёСЃС‚РєРё Р·СѓР±РѕРІ С‚Р°РєРѕР№ Р¶Рµ, РєР°Рє Сѓ Р±РѕР»СЊС€РёРЅСЃС‚РІР° Р»СЋРґРµР№",
    id                   : 152
  }, {
    word                 : "propose",
    image                : "files/08_0153.jpg",
    audio                : "files/08_0153.mp3",
    audioMeaning         : "files/08_0153_meaning.mp3",
    audioExample         : "files/08_0153_example.mp3",
    textMeaning          : "To propose something is to say that it should be done",
    textExample          : "My grandmother proposed that we have our picture taken with Santa",
    transcription        : "[prЙ™pГіuz]",
    wordTranslate        : "РїСЂРµРґР»РѕР¶РёС‚СЊ",
    textMeaningTranslate : "РџСЂРµРґР»РѕР¶РёС‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ СЃРєР°Р·Р°С‚СЊ, С‡С‚Рѕ СЌС‚Рѕ РґРѕР»Р¶РЅРѕ Р±С‹С‚СЊ СЃРґРµР»Р°РЅРѕ",
    textExampleTranslate : "РњРѕСЏ Р±Р°Р±СѓС€РєР° РїСЂРµРґР»РѕР¶РёР»Р° СЃС„РѕС‚РѕРіСЂР°С„РёСЂРѕРІР°С‚СЊСЃСЏ СЃ РЎР°РЅС‚Р°",
    id                   : 153
  }, {
    word                 : "purpose",
    image                : "files/08_0154.jpg",
    audio                : "files/08_0154.mp3",
    audioMeaning         : "files/08_0154_meaning.mp3",
    audioExample         : "files/08_0154_example.mp3",
    textMeaning          : "A purpose is the reason that you do something",
    textExample          : "The purpose of exercising is to get into shape",
    transcription        : "[pЙ™МЃЛђrpЙ™s]",
    wordTranslate        : "С†РµР»СЊ",
    textMeaningTranslate : "Р¦РµР»СЊ - СЌС‚Рѕ РїСЂРёС‡РёРЅР°, РїРѕ РєРѕС‚РѕСЂРѕР№ С‚С‹ С‡С‚Рѕ-С‚Рѕ РґРµР»Р°РµС€СЊ",
    textExampleTranslate : "Р¦РµР»СЊ СѓРїСЂР°Р¶РЅРµРЅРёР№ - РїСЂРёР№С‚Рё РІ С„РѕСЂРјСѓ",
    id                   : 154
  }, {
    word                 : "release",
    image                : "files/08_0155.jpg",
    audio                : "files/08_0155.mp3",
    audioMeaning         : "files/08_0155_meaning.mp3",
    audioExample         : "files/08_0155_example.mp3",
    textMeaning          : "To release something is to stop holding it",
    textExample          : "She released the bird from her hands",
    transcription        : "[rilГ­Лђs]",
    wordTranslate        : "СЂРµР»РёР·",
    textMeaningTranslate : "Р’С‹РїСѓСЃС‚РёС‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РїРµСЂРµСЃС‚Р°С‚СЊ РґРµСЂР¶Р°С‚СЊ СЌС‚Рѕ",
    textExampleTranslate : "РћРЅР° РІС‹РїСѓСЃС‚РёР»Р° РїС‚РёС†Сѓ РёР· СЂСѓРє",
    id                   : 155
  }, {
    word                 : "require",
    image                : "files/08_0156.jpg",
    audio                : "files/08_0156.mp3",
    audioMeaning         : "files/08_0156_meaning.mp3",
    audioExample         : "files/08_0156_example.mp3",
    textMeaning          : "To require something is to say that it is necessary",
    textExample          : "We require teachers to have a university degree",
    transcription        : "[rikwГЎiЙ™Лђr]",
    wordTranslate        : "С‚СЂРµР±СѓСЋС‚",
    textMeaningTranslate : "РўСЂРµР±РѕРІР°С‚СЊ С‡РµРіРѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РіРѕРІРѕСЂРёС‚СЊ, С‡С‚Рѕ СЌС‚Рѕ РЅРµРѕР±С…РѕРґРёРјРѕ",
    textExampleTranslate : "РњС‹ С‚СЂРµР±СѓРµРј, С‡С‚РѕР±С‹ РїСЂРµРїРѕРґР°РІР°С‚РµР»Рё РёРјРµР»Рё РІС‹СЃС€РµРµ РѕР±СЂР°Р·РѕРІР°РЅРёРµ",
    id                   : 156
  }, {
    word                 : "satisfied",
    image                : "files/08_0157.jpg",
    audio                : "files/08_0157.mp3",
    audioMeaning         : "files/08_0157_meaning.mp3",
    audioExample         : "files/08_0157_example.mp3",
    textMeaning          : "You are satisfied when you have what you wanted",
    textExample          : "I am very satisfied with your work",
    transcription        : "[sЗЅtisfГ id]",
    wordTranslate        : "РґРѕРІРѕР»РµРЅ",
    textMeaningTranslate : "Р’С‹ СѓРґРѕРІР»РµС‚РІРѕСЂРµРЅС‹, РєРѕРіРґР° Сѓ РІР°СЃ РµСЃС‚СЊ С‚Рѕ, С‡С‚Рѕ РІС‹ С…РѕС‚РµР»Рё",
    textExampleTranslate : "РЇ РѕС‡РµРЅСЊ РґРѕРІРѕР»РµРЅ РІР°С€РµР№ СЂР°Р±РѕС‚РѕР№",
    id                   : 157
  }, {
    word                 : "single",
    image                : "files/08_0158.jpg",
    audio                : "files/08_0158.mp3",
    audioMeaning         : "files/08_0158_meaning.mp3",
    audioExample         : "files/08_0158_example.mp3",
    textMeaning          : "If something is single, then there is only one",
    textExample          : "I have a single key in my hand",
    transcription        : "[sГ­Е‹gЙ™l]",
    wordTranslate        : "РѕРґРёРЅ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РѕРґРЅРѕ, С‚Рѕ РµСЃС‚СЊ С‚РѕР»СЊРєРѕ РѕРґРЅРѕ",
    textExampleTranslate : "РЈ РјРµРЅСЏ РІ СЂСѓРєРµ РѕРґРёРЅ РєР»СЋС‡",
    id                   : 158
  }, {
    word                 : "tear",
    image                : "files/08_0159.jpg",
    audio                : "files/08_0159.mp3",
    audioMeaning         : "files/08_0159_meaning.mp3",
    audioExample         : "files/08_0159_example.mp3",
    textMeaning          : "To tear something means to pull it apart",
    textExample          : "It is easy to tear paper",
    transcription        : "[teЙ™r]",
    wordTranslate        : "СЃР»РµР·Р°",
    textMeaningTranslate : "Р Р°Р·РѕСЂРІР°С‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ СЂР°Р·РѕСЂРІР°С‚СЊ СЌС‚Рѕ РЅР° С‡Р°СЃС‚Рё",
    textExampleTranslate : "Р‘СѓРјР°РіСѓ Р»РµРіРєРѕ РїРѕСЂРІР°С‚СЊ",
    id                   : 159
  }, {
    word                 : "theory",
    image                : "files/08_0160.jpg",
    audio                : "files/08_0160.mp3",
    audioMeaning         : "files/08_0160_meaning.mp3",
    audioExample         : "files/08_0160_example.mp3",
    textMeaning          : "A theory is an idea about how something works",
    textExample          : "We talked about EinsteinвЂ™s theory of relativity in class",
    transcription        : "[ОёГ­ЛђЙ™ri]",
    wordTranslate        : "С‚РµРѕСЂРёСЏ",
    textMeaningTranslate : "РўРµРѕСЂРёСЏ - СЌС‚Рѕ РёРґРµСЏ Рѕ С‚РѕРј, РєР°Рє С‡С‚Рѕ-С‚Рѕ СЂР°Р±РѕС‚Р°РµС‚",
    textExampleTranslate : "РњС‹ РіРѕРІРѕСЂРёР»Рё Рѕ С‚РµРѕСЂРёРё РѕС‚РЅРѕСЃРёС‚РµР»СЊРЅРѕСЃС‚Рё Р­Р№РЅС€С‚РµР№РЅР° РІ РєР»Р°СЃСЃРµ",
    id                   : 160
  }, {
    word                 : "animal",
    image                : "files/09_0161.jpg",
    audio                : "files/09_0161.mp3",
    audioMeaning         : "files/09_0161_meaning.mp3",
    audioExample         : "files/09_0161_example.mp3",
    textMeaning          : "An animal is a living thing that can move",
    textExample          : "My favorite animal is the panda",
    transcription        : "[ЗЅnЙ™mЙ™l]",
    wordTranslate        : "Р¶РёРІРѕС‚РЅРѕРµ",
    textMeaningTranslate : "Р–РёРІРѕС‚РЅРѕРµ - СЌС‚Рѕ Р¶РёРІРѕРµ СЃСѓС‰РµСЃС‚РІРѕ, РєРѕС‚РѕСЂРѕРµ РјРѕР¶РµС‚ РґРІРёРіР°С‚СЊСЃСЏ",
    textExampleTranslate : "РњРѕРµ Р»СЋР±РёРјРѕРµ Р¶РёРІРѕС‚РЅРѕРµ - РїР°РЅРґР°",
    id                   : 161
  }, {
    word                 : "bus",
    image                : "files/09_0162.jpg",
    audio                : "files/09_0162.mp3",
    audioMeaning         : "files/09_0162_meaning.mp3",
    audioExample         : "files/09_0162_example.mp3",
    textMeaning          : "A bus is a large vehicle that people travel on",
    textExample          : "My father takes the bus to work",
    transcription        : "[bКЊs]",
    wordTranslate        : "Р°РІС‚РѕР±СѓСЃ",
    textMeaningTranslate : "РђРІС‚РѕР±СѓСЃ - СЌС‚Рѕ Р±РѕР»СЊС€РѕР№ С‚СЂР°РЅСЃРїРѕСЂС‚, РїРѕ РєРѕС‚РѕСЂРѕРјСѓ Р»СЋРґРё РµРґСѓС‚",
    textExampleTranslate : "РњРѕР№ РѕС‚РµС† СЃР°РґРёС‚СЃСЏ РЅР° Р°РІС‚РѕР±СѓСЃ РЅР° СЂР°Р±РѕС‚Сѓ",
    id                   : 162
  }, {
    word                 : "cat",
    image                : "files/09_0163.jpg",
    audio                : "files/09_0163.mp3",
    audioMeaning         : "files/09_0163_meaning.mp3",
    audioExample         : "files/09_0163_example.mp3",
    textMeaning          : "A cat is a small animal related to lions and tigers that is kept as a pet",
    textExample          : "This cat is playing with a ball",
    transcription        : "[kГ¦t]",
    wordTranslate        : "РєРѕС€РєР°",
    textMeaningTranslate : "РљРѕС€РєР° - СЌС‚Рѕ РјР°Р»РµРЅСЊРєРѕРµ Р¶РёРІРѕС‚РЅРѕРµ, СЃРІСЏР·Р°РЅРЅРѕРµ СЃРѕ Р»СЊРІР°РјРё Рё С‚РёРіСЂР°РјРё, РєРѕС‚РѕСЂРѕРµ СЃРѕРґРµСЂР¶РёС‚СЃСЏ РєР°Рє РґРѕРјР°С€РЅРµРµ Р¶РёРІРѕС‚РЅРѕРµ",
    textExampleTranslate : "Р­С‚РѕС‚ РєРѕС‚ РёРіСЂР°РµС‚ СЃ РјСЏС‡РѕРј",
    id                   : 163
  }, {
    word                 : "command",
    image                : "files/09_0164.jpg",
    audio                : "files/09_0164.mp3",
    audioMeaning         : "files/09_0164_meaning.mp3",
    audioExample         : "files/09_0164_example.mp3",
    textMeaning          : "A command is an order given to a person or animal to do something",
    textExample          : "Joe gave the students a command to stand up",
    transcription        : "[kЙ™mЗЅnd]",
    wordTranslate        : "РєРѕРјР°РЅРґР°",
    textMeaningTranslate : "РљРѕРјР°РЅРґР° - СЌС‚Рѕ РїСЂРёРєР°Р· С‡РµР»РѕРІРµРєСѓ РёР»Рё Р¶РёРІРѕС‚РЅРѕРјСѓ С‡С‚Рѕ-С‚Рѕ РґРµР»Р°С‚СЊ",
    textExampleTranslate : "Р”Р¶Рѕ РґР°Р» СЃС‚СѓРґРµРЅС‚Р°Рј РєРѕРјР°РЅРґСѓ РІСЃС‚Р°С‚СЊ",
    id                   : 164
  }, {
    word                 : "depend",
    image                : "files/09_0165.jpg",
    audio                : "files/09_0165.mp3",
    audioMeaning         : "files/09_0165_meaning.mp3",
    audioExample         : "files/09_0165_example.mp3",
    textMeaning          : "To depend on something is to need it for support or help",
    textExample          : "My grandfather depends on a cane when he walks",
    transcription        : "[dipГ©nd]",
    wordTranslate        : "Р·Р°РІРёСЃРёС‚",
    textMeaningTranslate : "Р§С‚РѕР±С‹ Р·Р°РІРёСЃРµС‚СЊ РѕС‚ С‡РµРіРѕ-С‚Рѕ, РЅСѓР¶РЅРѕ РЅСѓР¶РґР°С‚СЊСЃСЏ РІ РїРѕРґРґРµСЂР¶РєРµ РёР»Рё РїРѕРјРѕС‰Рё",
    textExampleTranslate : "РњРѕР№ РґРµРґСѓС€РєР° Р·Р°РІРёСЃРёС‚ РѕС‚ С‚СЂРѕСЃС‚Рё, РєРѕРіРґР° РѕРЅ РіСѓР»СЏРµС‚",
    id                   : 165
  }, {
    word                 : "dog",
    image                : "files/09_0166.jpg",
    audio                : "files/09_0166.mp3",
    audioMeaning         : "files/09_0166_meaning.mp3",
    audioExample         : "files/09_0166_example.mp3",
    textMeaning          : "A dog is an animal with four legs and a tail that is kept as a pet or trained to work",
    textExample          : "This womanвЂ™s best friend is her dog",
    transcription        : "[dЙ”Лђg]",
    wordTranslate        : "СЃРѕР±Р°РєР°",
    textMeaningTranslate : "РЎРѕР±Р°РєР° - СЌС‚Рѕ Р¶РёРІРѕС‚РЅРѕРµ СЃ С‡РµС‚С‹СЂСЊРјСЏ РЅРѕРіР°РјРё Рё С…РІРѕСЃС‚РѕРј, РєРѕС‚РѕСЂРѕРіРѕ РґРµСЂР¶Р°С‚ РІ РєР°С‡РµСЃС‚РІРµ РґРѕРјР°С€РЅРµРіРѕ Р¶РёРІРѕС‚РЅРѕРіРѕ РёР»Рё РѕР±СѓС‡Р°СЋС‚ СЂР°Р±РѕС‚Р°С‚СЊ",
    textExampleTranslate : "Р›СѓС‡С€РёР№ РґСЂСѓРі СЌС‚РѕР№ Р¶РµРЅС‰РёРЅС‹ - РµРµ СЃРѕР±Р°РєР°",
    id                   : 166
  }, {
    word                 : "door",
    image                : "files/09_0167.jpg",
    audio                : "files/09_0167.mp3",
    audioMeaning         : "files/09_0167_meaning.mp3",
    audioExample         : "files/09_0167_example.mp3",
    textMeaning          : "A door is an object that swings or slides open and shut",
    textExample          : "Can you close the door, please?",
    transcription        : "[dЙ”Лђr]",
    wordTranslate        : "РґРІРµСЂСЊ",
    textMeaningTranslate : "Р”РІРµСЂСЊ - СЌС‚Рѕ РѕР±СЉРµРєС‚, РєРѕС‚РѕСЂС‹Р№ СЂР°СЃРїР°С…РёРІР°РµС‚СЃСЏ РёР»Рё СЃРєРѕР»СЊР·РёС‚, РѕС‚РєСЂС‹РІР°РµС‚СЃСЏ Рё Р·Р°РєСЂС‹РІР°РµС‚СЃСЏ",
    textExampleTranslate : "РњРѕР¶РµС‚Рµ Р»Рё РІС‹ Р·Р°РєСЂС‹С‚СЊ РґРІРµСЂСЊ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°?",
    id                   : 167
  }, {
    word                 : "friend",
    image                : "files/09_0168.jpg",
    audio                : "files/09_0168.mp3",
    audioMeaning         : "files/09_0168_meaning.mp3",
    audioExample         : "files/09_0168_example.mp3",
    textMeaning          : "A friend is someone a person knows and likes spending time with",
    textExample          : "BrianвЂ™s friend is very sad",
    transcription        : "[frend]",
    wordTranslate        : "РґСЂСѓРі",
    textMeaningTranslate : "Р”СЂСѓРі - СЌС‚Рѕ С‚РѕС‚, СЃ РєРµРј Р·РЅР°РєРѕРј Рё Р»СЋР±РёС‚ РїСЂРѕРІРѕРґРёС‚СЊ РІСЂРµРјСЏ",
    textExampleTranslate : "Р”СЂСѓРі Р‘СЂР°Р№Р°РЅР° РѕС‡РµРЅСЊ РіСЂСѓСЃС‚РЅС‹Р№",
    id                   : 168
  }, {
    word                 : "hear",
    image                : "files/09_0169.jpg",
    audio                : "files/09_0169.mp3",
    audioMeaning         : "files/09_0169_meaning.mp3",
    audioExample         : "files/09_0169_example.mp3",
    textMeaning          : "To hear is to be aware of sound through your ears",
    textExample          : "Michelle cannot hear what you are saying",
    transcription        : "[hiЙ™r]",
    wordTranslate        : "СЃР»С‹С€Р°С‚СЊ",
    textMeaningTranslate : "РЎР»С‹С€Р°С‚СЊ - Р·РЅР°С‡РёС‚ РѕСЃРѕР·РЅР°РІР°С‚СЊ Р·РІСѓРє С‡РµСЂРµР· СѓС€Рё",
    textExampleTranslate : "РњРёС€РµР»СЊ РЅРµ СЃР»С‹С€РёС‚, С‡С‚Рѕ С‚С‹ РіРѕРІРѕСЂРёС€СЊ",
    id                   : 169
  }, {
    word                 : "help",
    image                : "files/09_0170.jpg",
    audio                : "files/09_0170.mp3",
    audioMeaning         : "files/09_0170_meaning.mp3",
    audioExample         : "files/09_0170_example.mp3",
    textMeaning          : "To help is to do something that makes something easier for someone else",
    textExample          : "Jane can help Nathan climb up the rock",
    transcription        : "[help]",
    wordTranslate        : "РїРѕРјРѕРіРёС‚Рµ",
    textMeaningTranslate : "РџРѕРјРѕС‡СЊ - СЃРґРµР»Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ, С‡С‚Рѕ РѕР±Р»РµРіС‡Р°РµС‚ РєРѕРјСѓ-С‚Рѕ РµС‰Рµ",
    textExampleTranslate : "Р”Р¶РµР№РЅ РјРѕР¶РµС‚ РїРѕРјРѕС‡СЊ РќР°С‚Р°РЅСѓ РІР·РѕР±СЂР°С‚СЊСЃСЏ РЅР° СЃРєР°Р»Сѓ",
    id                   : 170
  }, {
    word                 : "horse",
    image                : "files/09_0171.jpg",
    audio                : "files/09_0171.mp3",
    audioMeaning         : "files/09_0171_meaning.mp3",
    audioExample         : "files/09_0171_example.mp3",
    textMeaning          : "A horse is a big, strong animal that people ride and use for pulling heavy things",
    textExample          : "I went to a farm and saw a horse",
    transcription        : "[hЙ”Лђrs]",
    wordTranslate        : "Р»РѕС€Р°РґСЊ",
    textMeaningTranslate : "Р›РѕС€Р°РґСЊ - СЌС‚Рѕ Р±РѕР»СЊС€РѕРµ, СЃРёР»СЊРЅРѕРµ Р¶РёРІРѕС‚РЅРѕРµ, РєРѕС‚РѕСЂРѕРіРѕ Р»СЋРґРё РµРґСѓС‚ Рё РёСЃРїРѕР»СЊР·СѓСЋС‚ РґР»СЏ С‚РѕРіРѕ, С‡С‚РѕР±С‹ С‚СЏРЅСѓС‚СЊ С‚СЏР¶РµР»С‹Рµ РІРµС‰Рё",
    textExampleTranslate : "РЇ РїРѕС€РµР» РЅР° С„РµСЂРјСѓ Рё СѓРІРёРґРµР» Р»РѕС€Р°РґСЊ",
    id                   : 171
  }, {
    word                 : "hospital",
    image                : "files/09_0172.jpg",
    audio                : "files/09_0172.mp3",
    audioMeaning         : "files/09_0172_meaning.mp3",
    audioExample         : "files/09_0172_example.mp3",
    textMeaning          : "A hospital is where sick or hurt people receive care or treatment",
    textExample          : "The doctor talks to a patient at the hospital",
    transcription        : "[hО¬spitl]",
    wordTranslate        : "Р±РѕР»СЊРЅРёС†Р°",
    textMeaningTranslate : "Р‘РѕР»СЊРЅРёС†Р° - СЌС‚Рѕ РјРµСЃС‚Рѕ, РіРґРµ Р±РѕР»СЊРЅС‹Рµ РёР»Рё РїРѕСЃС‚СЂР°РґР°РІС€РёРµ РїРѕР»СѓС‡Р°СЋС‚ РїРѕРјРѕС‰СЊ РёР»Рё Р»РµС‡РµРЅРёРµ",
    textExampleTranslate : "Р”РѕРєС‚РѕСЂ СЂР°Р·РіРѕРІР°СЂРёРІР°РµС‚ СЃ РїР°С†РёРµРЅС‚РѕРј РІ Р±РѕР»СЊРЅРёС†Рµ",
    id                   : 172
  }, {
    word                 : "leg",
    image                : "files/09_0173.jpg",
    audio                : "files/09_0173.mp3",
    audioMeaning         : "files/09_0173_meaning.mp3",
    audioExample         : "files/09_0173_example.mp3",
    textMeaning          : "A leg is a body part used for standing and walking",
    textExample          : "She hurt her leg",
    transcription        : "[leg]",
    wordTranslate        : "РЅРѕРіР°",
    textMeaningTranslate : "РќРѕРіР° - СЌС‚Рѕ С‡Р°СЃС‚СЊ С‚РµР»Р°, РёСЃРїРѕР»СЊР·СѓРµРјР°СЏ РґР»СЏ СЃС‚РѕСЏРЅРёСЏ Рё С…РѕРґСЊР±С‹",
    textExampleTranslate : "РћРЅР° РїРѕРІСЂРµРґРёР»Р° РЅРѕРіСѓ",
    id                   : 173
  }, {
    word                 : "medical",
    image                : "files/09_0174.jpg",
    audio                : "files/09_0174.mp3",
    audioMeaning         : "files/09_0174_meaning.mp3",
    audioExample         : "files/09_0174_example.mp3",
    textMeaning          : "Medical means related to the treatment of an injury or disease",
    textExample          : "Tyler is a medical student studying to become a doctor",
    transcription        : "[mГ©dikЙ™l]",
    wordTranslate        : "РјРµРґРёС†РёРЅСЃРєРёР№",
    textMeaningTranslate : "РњРµРґРёС†РёРЅСЃРєРёРµ СЃСЂРµРґСЃС‚РІР°, СЃРІСЏР·Р°РЅРЅС‹Рµ СЃ Р»РµС‡РµРЅРёРµРј С‚СЂР°РІРјС‹ РёР»Рё Р·Р°Р±РѕР»РµРІР°РЅРёСЏ",
    textExampleTranslate : "РўР°Р№Р»РµСЂ СЃС‚СѓРґРµРЅС‚-РјРµРґРёРє СѓС‡РёС‚СЃСЏ РЅР° РґРѕРєС‚РѕСЂР°",
    id                   : 174
  }, {
    word                 : "open",
    image                : "files/09_0175.jpg",
    audio                : "files/09_0175.mp3",
    audioMeaning         : "files/09_0175_meaning.mp3",
    audioExample         : "files/09_0175_example.mp3",
    textMeaning          : "To open is to move something so that an opening is not covered",
    textExample          : "Amy likes to open the window to let fresh air in",
    transcription        : "[ГіupЙ™n]",
    wordTranslate        : "РѕС‚РєСЂС‹С‚С‹Р№",
    textMeaningTranslate : "РћС‚РєСЂС‹С‚СЊ - СЌС‚Рѕ РїРµСЂРµРјРµСЃС‚РёС‚СЊ С‡С‚Рѕ-С‚Рѕ, С‡С‚РѕР±С‹ РѕС‚РІРµСЂСЃС‚РёРµ РЅРµ Р·Р°РєСЂС‹Р»РѕСЃСЊ",
    textExampleTranslate : "Р­РјРё РЅСЂР°РІРёС‚СЃСЏ РѕС‚РєСЂС‹РІР°С‚СЊ РѕРєРЅРѕ, С‡С‚РѕР±С‹ РІРїСѓСЃС‚РёС‚СЊ СЃРІРµР¶РёР№ РІРѕР·РґСѓС…",
    id                   : 175
  }, {
    word                 : "pull",
    image                : "files/09_0176.jpg",
    audio                : "files/09_0176.mp3",
    audioMeaning         : "files/09_0176_meaning.mp3",
    audioExample         : "files/09_0176_example.mp3",
    textMeaning          : "To pull is to hold onto something to move it toward you",
    textExample          : "The children pull the rope",
    transcription        : "[pul]",
    wordTranslate        : "РІС‹С‚Р°С‰РёС‚СЊ",
    textMeaningTranslate : "РўСЏРЅСѓС‚СЊ - Р·РЅР°С‡РёС‚ РґРµСЂР¶Р°С‚СЊСЃСЏ Р·Р° С‡С‚Рѕ-С‚Рѕ, С‡С‚РѕР±С‹ РґРІРёРіР°С‚СЊ СЌС‚Рѕ Рє С‚РµР±Рµ",
    textExampleTranslate : "Р”РµС‚Рё С‚СЏРЅСѓС‚ РІРµСЂРµРІРєСѓ",
    id                   : 176
  }, {
    word                 : "rabbit",
    image                : "files/09_0177.jpg",
    audio                : "files/09_0177.mp3",
    audioMeaning         : "files/09_0177_meaning.mp3",
    audioExample         : "files/09_0177_example.mp3",
    textMeaning          : "A rabbit is a small animal with long ears that lives in a hole in the ground",
    textExample          : "Look at the rabbit in the park",
    transcription        : "[rЗЅbit]",
    wordTranslate        : "РєСЂРѕР»РёРє",
    textMeaningTranslate : "РљСЂРѕР»РёРє - СЌС‚Рѕ РјР°Р»РµРЅСЊРєРѕРµ Р¶РёРІРѕС‚РЅРѕРµ СЃ РґР»РёРЅРЅС‹РјРё СѓС€Р°РјРё, РєРѕС‚РѕСЂРѕРµ Р¶РёРІРµС‚ РІ СЏРјРµ РІ Р·РµРјР»Рµ",
    textExampleTranslate : "РџРѕСЃРјРѕС‚СЂРё РЅР° РєСЂРѕР»РёРєР° РІ РїР°СЂРєРµ",
    id                   : 177
  }, {
    word                 : "school",
    image                : "files/09_0178.jpg",
    audio                : "files/09_0178.mp3",
    audioMeaning         : "files/09_0178_meaning.mp3",
    audioExample         : "files/09_0178_example.mp3",
    textMeaning          : "A school is a place where children go to learn",
    textExample          : "The students study at school",
    transcription        : "[skuЛђl]",
    wordTranslate        : "С€РєРѕР»Р°",
    textMeaningTranslate : "РЁРєРѕР»Р° - СЌС‚Рѕ РјРµСЃС‚Рѕ, РєСѓРґР° РґРµС‚Рё С…РѕРґСЏС‚ СѓС‡РёС‚СЊСЃСЏ",
    textExampleTranslate : "РЈС‡РµРЅРёРєРё СѓС‡Р°С‚СЃСЏ РІ С€РєРѕР»Рµ",
    id                   : 178
  }, {
    word                 : "see",
    image                : "files/09_0179.jpg",
    audio                : "files/09_0179.mp3",
    audioMeaning         : "files/09_0179_meaning.mp3",
    audioExample         : "files/09_0179_example.mp3",
    textMeaning          : "To see is to use your eyes to look at something or someone",
    textExample          : "Steven does not want to see the scary picture",
    transcription        : "[siЛђ]",
    wordTranslate        : "РІРёРґРµС‚СЊ",
    textMeaningTranslate : "Р’РёРґРµС‚СЊ - Р·РЅР°С‡РёС‚ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РіР»Р°Р·Р°, С‡С‚РѕР±С‹ СЃРјРѕС‚СЂРµС‚СЊ РЅР° С‡С‚Рѕ-С‚Рѕ РёР»Рё РєРѕРіРѕ-С‚Рѕ",
    textExampleTranslate : "РЎС‚РёРІРµРЅ РЅРµ С…РѕС‡РµС‚ РІРёРґРµС‚СЊ СЃС‚СЂР°С€РЅСѓСЋ РєР°СЂС‚РёРЅСѓ",
    id                   : 179
  }, {
    word                 : "service",
    image                : "files/09_0180.jpg",
    audio                : "files/09_0180.mp3",
    audioMeaning         : "files/09_0180_meaning.mp3",
    audioExample         : "files/09_0180_example.mp3",
    textMeaning          : "Service is the act of helping or serving someone",
    textExample          : "This coffee shop has excellent service",
    transcription        : "[sЙ™МЃЛђrvis]",
    wordTranslate        : "СЃР»СѓР¶Р±Р°",
    textMeaningTranslate : "РЎР»СѓР¶Р±Р° - СЌС‚Рѕ Р°РєС‚ РїРѕРјРѕС‰Рё РёР»Рё СЃР»СѓР¶РµРЅРёСЏ РєРѕРјСѓ-Р»РёР±Рѕ",
    textExampleTranslate : "Р’ СЌС‚РѕР№ РєРѕС„РµР№РЅРµ РѕС‚Р»РёС‡РЅС‹Р№ СЃРµСЂРІРёСЃ",
    id                   : 180
  }, {
    word                 : "benefit",
    image                : "files/10_0181.jpg",
    audio                : "files/10_0181.mp3",
    audioMeaning         : "files/10_0181_meaning.mp3",
    audioExample         : "files/10_0181_example.mp3",
    textMeaning          : "A benefit is a good thing",
    textExample          : "Being able to fly is a benefit to birds",
    transcription        : "[bГ©nЙ™fit]",
    wordTranslate        : "РІС‹РіРѕРґР°",
    textMeaningTranslate : "Р‘Р»Р°РіРѕ СЌС‚Рѕ С…РѕСЂРѕС€Рѕ",
    textExampleTranslate : "РЈРјРµРЅРёРµ Р»РµС‚Р°С‚СЊ РїСЂРёРЅРѕСЃРёС‚ РїРѕР»СЊР·Сѓ РїС‚РёС†Р°Рј",
    id                   : 181
  }, {
    word                 : "certain",
    image                : "files/10_0182.jpg",
    audio                : "files/10_0182.mp3",
    audioMeaning         : "files/10_0182_meaning.mp3",
    audioExample         : "files/10_0182_example.mp3",
    textMeaning          : "If you are certain about something, you know it is true",
    textExample          : "I am certain that zebras have stripes",
    transcription        : "[sЙ™МЃЛђrtЙ™n]",
    wordTranslate        : "РѕРїСЂРµРґРµР»РµРЅРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё РІС‹ СѓРІРµСЂРµРЅС‹ РІ С‡РµРј-С‚Рѕ, РІС‹ Р·РЅР°РµС‚Рµ, С‡С‚Рѕ СЌС‚Рѕ РїСЂР°РІРґР°",
    textExampleTranslate : "РЇ СѓРІРµСЂРµРЅ, С‡С‚Рѕ Сѓ Р·РµР±СЂ РµСЃС‚СЊ РїРѕР»РѕСЃРєРё",
    id                   : 182
  }, {
    word                 : "chance",
    image                : "files/10_0183.jpg",
    audio                : "files/10_0183.mp3",
    audioMeaning         : "files/10_0183_meaning.mp3",
    audioExample         : "files/10_0183_example.mp3",
    textMeaning          : "A chance is an opportunity to do something",
    textExample          : "I had a chance to see the Coliseum in Rome last summer",
    transcription        : "[tКѓГ¦ns]",
    wordTranslate        : "С€Р°РЅСЃ",
    textMeaningTranslate : "РЁР°РЅСЃ РµСЃС‚СЊ РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ С‡С‚Рѕ-С‚Рѕ СЃРґРµР»Р°С‚СЊ",
    textExampleTranslate : "РЈ РјРµРЅСЏ Р±С‹Р» С€Р°РЅСЃ СѓРІРёРґРµС‚СЊ РљРѕР»РёР·РµР№ РІ Р РёРјРµ РїСЂРѕС€Р»С‹Рј Р»РµС‚РѕРј",
    id                   : 183
  }, {
    word                 : "effect",
    image                : "files/10_0184.jpg",
    audio                : "files/10_0184.mp3",
    audioMeaning         : "files/10_0184_meaning.mp3",
    audioExample         : "files/10_0184_example.mp3",
    textMeaning          : "An effect is a change made by something else",
    textExample          : "The medicine had a good effect on the boy",
    transcription        : "[ifГ©kt]",
    wordTranslate        : "СЌС„С„РµРєС‚",
    textMeaningTranslate : "Р­С„С„РµРєС‚ - СЌС‚Рѕ РёР·РјРµРЅРµРЅРёРµ, СЃРґРµР»Р°РЅРЅРѕРµ С‡РµРј-С‚Рѕ РґСЂСѓРіРёРј",
    textExampleTranslate : "Р›РµРєР°СЂСЃС‚РІРѕ РѕРєР°Р·Р°Р»Рѕ С…РѕСЂРѕС€РµРµ РІР»РёСЏРЅРёРµ РЅР° РјР°Р»СЊС‡РёРєР°",
    id                   : 184
  }, {
    word                 : "essential",
    image                : "files/10_0185.jpg",
    audio                : "files/10_0185.mp3",
    audioMeaning         : "files/10_0185_meaning.mp3",
    audioExample         : "files/10_0185_example.mp3",
    textMeaning          : "If something is essential, it is very important and necessary",
    textExample          : "It is essential to have oxygen when you scuba dive",
    transcription        : "[isГ©nКѓЙ™l]",
    wordTranslate        : "СЃСѓС‰РµСЃС‚РІРµРЅРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РІР°Р¶РЅРѕ, СЌС‚Рѕ РѕС‡РµРЅСЊ РІР°Р¶РЅРѕ Рё РЅРµРѕР±С…РѕРґРёРјРѕ",
    textExampleTranslate : "РљСЂР°Р№РЅРµ РІР°Р¶РЅРѕ РёРјРµС‚СЊ РєРёСЃР»РѕСЂРѕРґ, РєРѕРіРґР° РІС‹ РїРѕРіСЂСѓР¶Р°РµС‚РµСЃСЊ СЃ Р°РєРІР°Р»Р°РЅРіРѕРј",
    id                   : 185
  }, {
    word                 : "far",
    image                : "files/10_0186.jpg",
    audio                : "files/10_0186.mp3",
    audioMeaning         : "files/10_0186_meaning.mp3",
    audioExample         : "files/10_0186_example.mp3",
    textMeaning          : "If something is far, it is not close",
    textExample          : "ItвЂ™s far from the east coast to the west coast of America",
    transcription        : "[fЙ‘Лђr]",
    wordTranslate        : "РґР°Р»РµРєРѕ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РґР°Р»РµРєРѕ, СЌС‚Рѕ РЅРµ Р±Р»РёР·РєРѕ",
    textExampleTranslate : "Р­С‚Рѕ РґР°Р»РµРєРѕ РѕС‚ РІРѕСЃС‚РѕС‡РЅРѕРіРѕ РїРѕР±РµСЂРµР¶СЊСЏ РґРѕ Р·Р°РїР°РґРЅРѕРіРѕ РїРѕР±РµСЂРµР¶СЊСЏ РђРјРµСЂРёРєРё",
    id                   : 186
  }, {
    word                 : "focus",
    image                : "files/10_0187.jpg",
    audio                : "files/10_0187.mp3",
    audioMeaning         : "files/10_0187_meaning.mp3",
    audioExample         : "files/10_0187_example.mp3",
    textMeaning          : "To focus on something is to think about it and pay attention to it",
    textExample          : "My mom always helps me to focus on my school work",
    transcription        : "[fГіukЙ™s]",
    wordTranslate        : "С„РѕРєСѓСЃ",
    textMeaningTranslate : "РЎРѕСЃСЂРµРґРѕС‚РѕС‡РёС‚СЊСЃСЏ РЅР° С‡РµРј-С‚Рѕ - Р·РЅР°С‡РёС‚ РґСѓРјР°С‚СЊ РѕР± СЌС‚РѕРј Рё РѕР±СЂР°С‰Р°С‚СЊ РЅР° СЌС‚Рѕ РІРЅРёРјР°РЅРёРµ",
    textExampleTranslate : "РњРѕСЏ РјР°РјР° РІСЃРµРіРґР° РїРѕРјРѕРіР°РµС‚ РјРЅРµ СЃРѕСЃСЂРµРґРѕС‚РѕС‡РёС‚СЊСЃСЏ РЅР° С€РєРѕР»СЊРЅРѕР№ СЂР°Р±РѕС‚Рµ",
    id                   : 187
  }, {
    word                 : "function",
    image                : "files/10_0188.jpg",
    audio                : "files/10_0188.mp3",
    audioMeaning         : "files/10_0188_meaning.mp3",
    audioExample         : "files/10_0188_example.mp3",
    textMeaning          : "The function of something is what it does",
    textExample          : "The function of a flashlight is to help you see in the dark",
    transcription        : "[fКЊМЃЕ‹kКѓЙ™n]",
    wordTranslate        : "С„СѓРЅРєС†РёСЏ",
    textMeaningTranslate : "Р¤СѓРЅРєС†РёСЏ С‡РµРіРѕ-С‚Рѕ - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ РѕРЅ РґРµР»Р°РµС‚",
    textExampleTranslate : "Р¤СѓРЅРєС†РёСЏ С„РѕРЅР°СЂРёРєР° СЃРѕСЃС‚РѕРёС‚ РІ С‚РѕРј, С‡С‚РѕР±С‹ РїРѕРјРѕС‡СЊ РІР°Рј РІРёРґРµС‚СЊ РІ С‚РµРјРЅРѕС‚Рµ",
    id                   : 188
  }, {
    word                 : "grass",
    image                : "files/10_0189.jpg",
    audio                : "files/10_0189.mp3",
    audioMeaning         : "files/10_0189_meaning.mp3",
    audioExample         : "files/10_0189_example.mp3",
    textMeaning          : "Grass is the green leaves that cover the ground",
    textExample          : "The grass looked so soft and green",
    transcription        : "[grГ¦s]",
    wordTranslate        : "С‚СЂР°РІР°",
    textMeaningTranslate : "РўСЂР°РІР° - СЌС‚Рѕ Р·РµР»РµРЅС‹Рµ Р»РёСЃС‚СЊСЏ, РєРѕС‚РѕСЂС‹Рµ РїРѕРєСЂС‹РІР°СЋС‚ Р·РµРјР»СЋ",
    textExampleTranslate : "РўСЂР°РІР° РІС‹РіР»СЏРґРµР»Р° С‚Р°РєРѕР№ РјСЏРіРєРѕР№ Рё Р·РµР»РµРЅРѕР№",
    id                   : 189
  }, {
    word                 : "guard",
    image                : "files/10_0190.jpg",
    audio                : "files/10_0190.mp3",
    audioMeaning         : "files/10_0190_meaning.mp3",
    audioExample         : "files/10_0190_example.mp3",
    textMeaning          : "To guard something is to take care of it",
    textExample          : "The police officer will guard us from any harm",
    transcription        : "[gЙ‘Лђrd]",
    wordTranslate        : "РѕС…СЂР°РЅРЅРёРє",
    textMeaningTranslate : "РћС…СЂР°РЅСЏС‚СЊ С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ Р·Р°Р±РѕС‚РёС‚СЊСЃСЏ РѕР± СЌС‚РѕРј",
    textExampleTranslate : "РџРѕР»РёС†РµР№СЃРєРёР№ Р±СѓРґРµС‚ РѕС…СЂР°РЅСЏС‚СЊ РЅР°СЃ РѕС‚ Р»СЋР±РѕРіРѕ РІСЂРµРґР°",
    id                   : 190
  }, {
    word                 : "image",
    image                : "files/10_0191.jpg",
    audio                : "files/10_0191.mp3",
    audioMeaning         : "files/10_0191_meaning.mp3",
    audioExample         : "files/10_0191_example.mp3",
    textMeaning          : "The image of something is a picture of it",
    textExample          : "The image of her eye was very clear",
    transcription        : "[Г­midК’]",
    wordTranslate        : "РѕР±СЂР°Р·",
    textMeaningTranslate : "РћР±СЂР°Р· С‡РµРіРѕ-С‚Рѕ РµСЃС‚СЊ РёР·РѕР±СЂР°Р¶РµРЅРёРµ СЌС‚РѕРіРѕ",
    textExampleTranslate : "РћР±СЂР°Р· РµРµ РіР»Р°Р·Р° Р±С‹Р» РѕС‡РµРЅСЊ С‡РµС‚РєРёРј",
    id                   : 191
  }, {
    word                 : "immediate",
    image                : "files/10_0192.jpg",
    audio                : "files/10_0192.mp3",
    audioMeaning         : "files/10_0192_meaning.mp3",
    audioExample         : "files/10_0192_example.mp3",
    textMeaning          : "If something is immediate, it happens quickly",
    textExample          : "An immediate response came from the pizza place",
    transcription        : "[imГ­ЛђdiЙ™t]",
    wordTranslate        : "РЅРµРјРµРґР»РµРЅРЅРѕ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚ РЅРµРјРµРґР»РµРЅРЅРѕ, СЌС‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚ Р±С‹СЃС‚СЂРѕ",
    textExampleTranslate : "РќРµРјРµРґР»РµРЅРЅС‹Р№ РѕС‚РІРµС‚ РїСЂРёС€РµР» РёР· РїРёС†С†РµСЂРёРё",
    id                   : 192
  }, {
    word                 : "primary",
    image                : "files/10_0193.jpg",
    audio                : "files/10_0193.mp3",
    audioMeaning         : "files/10_0193_meaning.mp3",
    audioExample         : "files/10_0193_example.mp3",
    textMeaning          : "If something is primary, it is the most important thing",
    textExample          : "His primary thoughts are about money",
    transcription        : "[prГЎimeri]",
    wordTranslate        : "РїРµСЂРІРёС‡РЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РїРµСЂРІРёС‡РЅРѕ, СЌС‚Рѕ СЃР°РјРѕРµ РіР»Р°РІРЅРѕРµ",
    textExampleTranslate : "Р•РіРѕ РіР»Р°РІРЅС‹Рµ РјС‹СЃР»Рё Рѕ РґРµРЅСЊРіР°С…",
    id                   : 193
  }, {
    word                 : "proud",
    image                : "files/10_0194.jpg",
    audio                : "files/10_0194.mp3",
    audioMeaning         : "files/10_0194_meaning.mp3",
    audioExample         : "files/10_0194_example.mp3",
    textMeaning          : "People who feel proud are happy about what they have done",
    textExample          : "She is proud of the picture she drew of her house",
    transcription        : "[praud]",
    wordTranslate        : "РіРѕСЂРґС‹Р№",
    textMeaningTranslate : "Р›СЋРґРё, РєРѕС‚РѕСЂС‹Рµ РіРѕСЂРґСЏС‚СЃСЏ, РґРѕРІРѕР»СЊРЅС‹ С‚РµРј, С‡С‚Рѕ РѕРЅРё СЃРґРµР»Р°Р»Рё",
    textExampleTranslate : "РћРЅР° РіРѕСЂРґРёС‚СЃСЏ РєР°СЂС‚РёРЅРѕР№, РєРѕС‚РѕСЂСѓСЋ РѕРЅР° РЅР°СЂРёСЃРѕРІР°Р»Р° РІ СЃРІРѕРµРј РґРѕРјРµ",
    id                   : 194
  }, {
    word                 : "remain",
    image                : "files/10_0195.jpg",
    audio                : "files/10_0195.mp3",
    audioMeaning         : "files/10_0195_meaning.mp3",
    audioExample         : "files/10_0195_example.mp3",
    textMeaning          : "To remain somewhere is to stay there",
    textExample          : "My sister had to remain home since she was sick",
    transcription        : "[rimГ©in]",
    wordTranslate        : "РѕСЃС‚Р°СЋС‚СЃСЏ",
    textMeaningTranslate : "РћСЃС‚Р°РІР°С‚СЊСЃСЏ РіРґРµ-С‚Рѕ - Р·РЅР°С‡РёС‚ РѕСЃС‚Р°РІР°С‚СЊСЃСЏ С‚Р°Рј",
    textExampleTranslate : "РњРѕСЏ СЃРµСЃС‚СЂР° РґРѕР»Р¶РЅР° Р±С‹Р»Р° РѕСЃС‚Р°РІР°С‚СЊСЃСЏ РґРѕРјР°, С‚Р°Рє РєР°Рє РѕРЅР° Р±С‹Р»Р° Р±РѕР»СЊРЅР°",
    id                   : 195
  }, {
    word                 : "rest",
    image                : "files/10_0196.jpg",
    audio                : "files/10_0196.mp3",
    audioMeaning         : "files/10_0196_meaning.mp3",
    audioExample         : "files/10_0196_example.mp3",
    textMeaning          : "To rest is to stop being active while the body gets back its strength",
    textExample          : "I rested on the couch after work",
    transcription        : "[rest]",
    wordTranslate        : "РѕСЃС‚Р°С‚РѕРє",
    textMeaningTranslate : "РћС‚РґС‹С…Р°С‚СЊ - Р·РЅР°С‡РёС‚ РїРµСЂРµСЃС‚Р°С‚СЊ Р±С‹С‚СЊ Р°РєС‚РёРІРЅС‹Рј, РїРѕРєР° С‚РµР»Рѕ РІРѕСЃСЃС‚Р°РЅР°РІР»РёРІР°РµС‚ СЃРёР»С‹",
    textExampleTranslate : "РЇ РѕС‚РґС‹С…Р°Р» РЅР° РґРёРІР°РЅРµ РїРѕСЃР»Рµ СЂР°Р±РѕС‚С‹",
    id                   : 196
  }, {
    word                 : "separate",
    image                : "files/10_0197.jpg",
    audio                : "files/10_0197.mp3",
    audioMeaning         : "files/10_0197_meaning.mp3",
    audioExample         : "files/10_0197_example.mp3",
    textMeaning          : "If two things are separate, they are not together",
    textExample          : "New York and Los Angeles are in two separate parts of America",
    transcription        : "[sГ©pЙ™rГЁit]",
    wordTranslate        : "РѕС‚РґРµР»РёС‚СЊ",
    textMeaningTranslate : "Р•СЃР»Рё РґРІРµ РІРµС‰Рё СЂР°Р·РЅС‹Рµ, РѕРЅРё РЅРµ РІРјРµСЃС‚Рµ",
    textExampleTranslate : "РќСЊСЋ-Р™РѕСЂРє Рё Р›РѕСЃ-РђРЅРґР¶РµР»РµСЃ РЅР°С…РѕРґСЏС‚СЃСЏ РІ РґРІСѓС… СЂР°Р·РЅС‹С… С‡Р°СЃС‚СЏС… РђРјРµСЂРёРєРё",
    id                   : 197
  }, {
    word                 : "site",
    image                : "files/10_0198.jpg",
    audio                : "files/10_0198.mp3",
    audioMeaning         : "files/10_0198_meaning.mp3",
    audioExample         : "files/10_0198_example.mp3",
    textMeaning          : "A site is a place",
    textExample          : "We found the perfect site for our picnic",
    transcription        : "[sait]",
    wordTranslate        : "СЃР°Р№С‚",
    textMeaningTranslate : "РЎР°Р№С‚ - СЌС‚Рѕ РјРµСЃС‚Рѕ",
    textExampleTranslate : "РњС‹ РЅР°С€Р»Рё РёРґРµР°Р»СЊРЅРѕРµ РјРµСЃС‚Рѕ РґР»СЏ РЅР°С€РµРіРѕ РїРёРєРЅРёРєР°",
    id                   : 198
  }, {
    word                 : "tail",
    image                : "files/10_0199.jpg",
    audio                : "files/10_0199.mp3",
    audioMeaning         : "files/10_0199_meaning.mp3",
    audioExample         : "files/10_0199_example.mp3",
    textMeaning          : "A tail is a part of an animalвЂ™s body that sticks out from its rear or back",
    textExample          : "Our dog wags its tail when itвЂ™s happy",
    transcription        : "[teil]",
    wordTranslate        : "С…РІРѕСЃС‚",
    textMeaningTranslate : "РҐРІРѕСЃС‚ - СЌС‚Рѕ С‡Р°СЃС‚СЊ С‚РµР»Р° Р¶РёРІРѕС‚РЅРѕРіРѕ, РєРѕС‚РѕСЂР°СЏ С‚РѕСЂС‡РёС‚ РёР· РµРіРѕ СЃРїРёРЅС‹ РёР»Рё СЃРїРёРЅС‹",
    textExampleTranslate : "РќР°С€Р° СЃРѕР±Р°РєР° РІРёР»СЏРµС‚ С…РІРѕСЃС‚РѕРј, РєРѕРіРґР° РѕРЅР° СЃС‡Р°СЃС‚Р»РёРІР°",
    id                   : 199
  }, {
    word                 : "trouble",
    image                : "files/10_0200.jpg",
    audio                : "files/10_0200.mp3",
    audioMeaning         : "files/10_0200_meaning.mp3",
    audioExample         : "files/10_0200_example.mp3",
    textMeaning          : "Trouble is a problem or a difficulty",
    textExample          : "I have trouble working with my boss",
    transcription        : "[trКЊМЃbЙ™l]",
    wordTranslate        : "Р±РµРґР°",
    textMeaningTranslate : "РџСЂРѕР±Р»РµРјР° - СЌС‚Рѕ РїСЂРѕР±Р»РµРјР° РёР»Рё С‚СЂСѓРґРЅРѕСЃС‚СЊ",
    textExampleTranslate : "РЈ РјРµРЅСЏ РїСЂРѕР±Р»РµРјС‹ СЃ СЂР°Р±РѕС‚РѕР№ СЃ РјРѕРёРј Р±РѕСЃСЃРѕРј",
    id                   : 200
  }, {
    word                 : "advertise",
    image                : "files/11_0201.jpg",
    audio                : "files/11_0201.mp3",
    audioMeaning         : "files/11_0201_meaning.mp3",
    audioExample         : "files/11_0201_example.mp3",
    textMeaning          : "To advertise is to describe or draw attention to a product or event by using a public medium",
    textExample          : "The woman started a new company and needed to advertise her products",
    transcription        : "[ЗЅdvЙ™rtГ iz]",
    wordTranslate        : "СЂРµРєР»Р°РјР°",
    textMeaningTranslate : "Р РµРєР»Р°РјРёСЂРѕРІР°С‚СЊ РѕР·РЅР°С‡Р°РµС‚ РѕРїРёСЃС‹РІР°С‚СЊ РёР»Рё РїСЂРёРІР»РµРєР°С‚СЊ РІРЅРёРјР°РЅРёРµ Рє РїСЂРѕРґСѓРєС‚Сѓ РёР»Рё СЃРѕР±С‹С‚РёСЋ СЃ РїРѕРјРѕС‰СЊСЋ РѕР±С‰РµРґРѕСЃС‚СѓРїРЅРѕРіРѕ СЃСЂРµРґСЃС‚РІР° РјР°СЃСЃРѕРІРѕР№ РёРЅС„РѕСЂРјР°С†РёРё",
    textExampleTranslate : "Р–РµРЅС‰РёРЅР° РѕСЃРЅРѕРІР°Р»Р° РЅРѕРІСѓСЋ РєРѕРјРїР°РЅРёСЋ Рё РµР№ РЅСѓР¶РЅРѕ Р±С‹Р»Рѕ СЂРµРєР»Р°РјРёСЂРѕРІР°С‚СЊ СЃРІРѕСЋ РѕРґСѓРєС†РёСЋ",
    id                   : 201
  }, {
    word                 : "aware",
    image                : "files/11_0202.jpg",
    audio                : "files/11_0202.mp3",
    audioMeaning         : "files/11_0202_meaning.mp3",
    audioExample         : "files/11_0202_example.mp3",
    textMeaning          : "If someone is aware, they know that something or a situation exists",
    textExample          : "The student became aware that the teacher was watching him",
    transcription        : "[Й™wО­Й™r]",
    wordTranslate        : "Р·РЅР°СЋС‚",
    textMeaningTranslate : "Р•СЃР»Рё РєС‚Рѕ-С‚Рѕ Р·РЅР°РµС‚, РѕРЅ Р·РЅР°РµС‚, С‡С‚Рѕ С‡С‚Рѕ-С‚Рѕ РёР»Рё СЃРёС‚СѓР°С†РёСЏ СЃСѓС‰РµСЃС‚РІСѓРµС‚",
    textExampleTranslate : "РЈС‡РµРЅРёРє РѕСЃРѕР·РЅР°Р», С‡С‚Рѕ СѓС‡РёС‚РµР»СЊ СЃР»РµРґРёС‚ Р·Р° РЅРёРј",
    id                   : 202
  }, {
    word                 : "battery",
    image                : "files/11_0203.jpg",
    audio                : "files/11_0203.mp3",
    audioMeaning         : "files/11_0203_meaning.mp3",
    audioExample         : "files/11_0203_example.mp3",
    textMeaning          : "A battery is an object placed inside something to supply it with electricity",
    textExample          : "My brother needs a battery for his clock",
    transcription        : "[bЗЅtЙ™ri]",
    wordTranslate        : "Р±Р°С‚Р°СЂРµСЏ",
    textMeaningTranslate : "Р‘Р°С‚Р°СЂРµСЏ - СЌС‚Рѕ РѕР±СЉРµРєС‚, РїРѕРјРµС‰РµРЅРЅС‹Р№ РІРЅСѓС‚СЂСЊ С‡РµРіРѕ-Р»РёР±Рѕ, С‡С‚РѕР±С‹ РѕР±РµСЃРїРµС‡РёС‚СЊ РµРіРѕ СЌР»РµРєС‚СЂРёС‡РµСЃС‚РІРѕРј",
    textExampleTranslate : "РњРѕРµРјСѓ Р±СЂР°С‚Сѓ РЅСѓР¶РЅР° Р±Р°С‚Р°СЂРµСЏ РґР»СЏ РµРіРѕ С‡Р°СЃРѕРІ",
    id                   : 203
  }, {
    word                 : "black",
    image                : "files/11_0204.jpg",
    audio                : "files/11_0204.mp3",
    audioMeaning         : "files/11_0204_meaning.mp3",
    audioExample         : "files/11_0204_example.mp3",
    textMeaning          : "Black is the darkest color",
    textExample          : "Our street is black at night because there are no street lights",
    transcription        : "[blГ¦k]",
    wordTranslate        : "С‡РµСЂРЅС‹Р№",
    textMeaningTranslate : "Р§РµСЂРЅС‹Р№ СЃР°РјС‹Р№ С‚РµРјРЅС‹Р№ С†РІРµС‚",
    textExampleTranslate : "РќР°С€Р° СѓР»РёС†Р° РЅРѕС‡СЊСЋ С‡РµСЂРЅР°СЏ, РїРѕС‚РѕРјСѓ С‡С‚Рѕ РЅРµС‚ СѓР»РёС‡РЅС‹С… С„РѕРЅР°СЂРµР№",
    id                   : 204
  }, {
    word                 : "city",
    image                : "files/11_0205.jpg",
    audio                : "files/11_0205.mp3",
    audioMeaning         : "files/11_0205_meaning.mp3",
    audioExample         : "files/11_0205_example.mp3",
    textMeaning          : "A city is a place where a lot of people live",
    textExample          : "Tokyo is a very big city in Japan",
    transcription        : "[sГ­ti]",
    wordTranslate        : "РіРѕСЂРѕРґ",
    textMeaningTranslate : "Р“РѕСЂРѕРґ - СЌС‚Рѕ РјРµСЃС‚Рѕ, РіРґРµ Р¶РёРІРµС‚ РјРЅРѕРіРѕ Р»СЋРґРµР№",
    textExampleTranslate : "РўРѕРєРёРѕ - РѕС‡РµРЅСЊ Р±РѕР»СЊС€РѕР№ РіРѕСЂРѕРґ РІ РЇРїРѕРЅРёРё",
    id                   : 205
  }, {
    word                 : "clean",
    image                : "files/11_0206.jpg",
    audio                : "files/11_0206.mp3",
    audioMeaning         : "files/11_0206_meaning.mp3",
    audioExample         : "files/11_0206_example.mp3",
    textMeaning          : "To clean is to make something neat and tidy",
    textExample          : "I clean our kitchen every Saturday",
    transcription        : "[kliЛђn]",
    wordTranslate        : "С‡РёСЃС‚С‹Р№",
    textMeaningTranslate : "Р§РёСЃС‚РёС‚СЊ - Р·РЅР°С‡РёС‚ РґРµР»Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ Р°РєРєСѓСЂР°С‚РЅРѕРµ Рё РѕРїСЂСЏС‚РЅРѕРµ",
    textExampleTranslate : "РЇ СѓР±РёСЂР°СЋ РЅР°С€Сѓ РєСѓС…РЅСЋ РєР°Р¶РґСѓСЋ СЃСѓР±Р±РѕС‚Сѓ",
    id                   : 206
  }, {
    word                 : "country",
    image                : "files/11_0207.jpg",
    audio                : "files/11_0207.mp3",
    audioMeaning         : "files/11_0207_meaning.mp3",
    audioExample         : "files/11_0207_example.mp3",
    textMeaning          : "A country is an area of land with the same government and laws",
    textExample          : "France is a country in Europe",
    transcription        : "[kКЊntri]",
    wordTranslate        : "СЃС‚СЂР°РЅР°",
    textMeaningTranslate : "РЎС‚СЂР°РЅР° - СЌС‚Рѕ С‚РµСЂСЂРёС‚РѕСЂРёСЏ СЃ С‚РµРј Р¶Рµ РїСЂР°РІРёС‚РµР»СЊСЃС‚РІРѕРј Рё Р·Р°РєРѕРЅР°РјРё",
    textExampleTranslate : "Р¤СЂР°РЅС†РёСЏ - СЌС‚Рѕ СЃС‚СЂР°РЅР° РІ Р•РІСЂРѕРїРµ",
    id                   : 207
  }, {
    word                 : "develop",
    image                : "files/11_0208.jpg",
    audio                : "files/11_0208.mp3",
    audioMeaning         : "files/11_0208_meaning.mp3",
    audioExample         : "files/11_0208_example.mp3",
    textMeaning          : "To develop is to make something larger or more advanced",
    textExample          : "This practice will help you develop your math skills",
    transcription        : "[divГ©lЙ™p]",
    wordTranslate        : "СЂР°Р·РІРёРІР°С‚СЊ",
    textMeaningTranslate : "Р Р°Р·РІРёРІР°С‚СЊ - Р·РЅР°С‡РёС‚ РґРµР»Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ Р±РѕР»СЊС€РµРµ РёР»Рё Р±РѕР»РµРµ РїСЂРѕРґРІРёРЅСѓС‚РѕРµ",
    textExampleTranslate : "Р­С‚Р° РїСЂР°РєС‚РёРєР° РїРѕРјРѕР¶РµС‚ РІР°Рј СЂР°Р·РІРёС‚СЊ СЃРІРѕРё РјР°С‚РµРјР°С‚РёС‡РµСЃРєРёРµ РЅР°РІС‹РєРё",
    id                   : 208
  }, {
    word                 : "electric",
    image                : "files/11_0209.jpg",
    audio                : "files/11_0209.mp3",
    audioMeaning         : "files/11_0209_meaning.mp3",
    audioExample         : "files/11_0209_example.mp3",
    textMeaning          : "If something is electric, it uses electricity",
    textExample          : "Some car companies make electric cars",
    transcription        : "[ilГ©ktrik]",
    wordTranslate        : "СЌР»РµРєС‚СЂРёС‡РµСЃРєРёР№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЌР»РµРєС‚СЂРёС‡РµСЃРєРѕРµ, РѕРЅРѕ РёСЃРїРѕР»СЊР·СѓРµС‚ СЌР»РµРєС‚СЂРёС‡РµСЃС‚РІРѕ",
    textExampleTranslate : "РќРµРєРѕС‚РѕСЂС‹Рµ Р°РІС‚РѕРјРѕР±РёР»СЊРЅС‹Рµ РєРѕРјРїР°РЅРёРё РїСЂРѕРёР·РІРѕРґСЏС‚ СЌР»РµРєС‚СЂРѕРјРѕР±РёР»Рё",
    id                   : 209
  }, {
    word                 : "eventually",
    image                : "files/11_0210.jpg",
    audio                : "files/11_0210.mp3",
    audioMeaning         : "files/11_0210_meaning.mp3",
    audioExample         : "files/11_0210_example.mp3",
    textMeaning          : "When something happens at a later time or in the end, it happens eventually",
    textExample          : "He will eventually move to London to find a new job",
    transcription        : "[ivГ©nК§uЙ™li]",
    wordTranslate        : "РІ РєРѕРЅС†Рµ РєРѕРЅС†РѕРІ",
    textMeaningTranslate : "РљРѕРіРґР° С‡С‚Рѕ-С‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚ РІ Р±РѕР»РµРµ РїРѕР·РґРЅРµРµ РІСЂРµРјСЏ РёР»Рё РІ РєРѕРЅС†Рµ, СЌС‚Рѕ СЃР»СѓС‡Р°РµС‚СЃСЏ РІ РєРѕРЅС†Рµ РєРѕРЅС†РѕРІ",
    textExampleTranslate : "Р’ РєРѕРЅС†Рµ РєРѕРЅС†РѕРІ РѕРЅ РїРµСЂРµРµРґРµС‚ РІ Р›РѕРЅРґРѕРЅ, С‡С‚РѕР±С‹ РЅР°Р№С‚Рё РЅРѕРІСѓСЋ СЂР°Р±РѕС‚Сѓ",
    id                   : 210
  }, {
    word                 : "fact",
    image                : "files/11_0211.jpg",
    audio                : "files/11_0211.mp3",
    audioMeaning         : "files/11_0211_meaning.mp3",
    audioExample         : "files/11_0211_example.mp3",
    textMeaning          : "A fact is a piece of information that is true",
    textExample          : "A fact about South America is that it is a continent",
    transcription        : "[fГ¦kt]",
    wordTranslate        : "С„Р°РєС‚",
    textMeaningTranslate : "Р¤Р°РєС‚ - СЌС‚Рѕ РёРЅС„РѕСЂРјР°С†РёСЏ, РєРѕС‚РѕСЂР°СЏ СЏРІР»СЏРµС‚СЃСЏ РїСЂР°РІРґРѕР№",
    textExampleTranslate : "Р¤Р°РєС‚ Рѕ Р®Р¶РЅРѕР№ РђРјРµСЂРёРєРµ РІ С‚РѕРј, С‡С‚Рѕ СЌС‚Рѕ РєРѕРЅС‚РёРЅРµРЅС‚",
    id                   : 211
  }, {
    word                 : "glass",
    image                : "files/11_0212.jpg",
    audio                : "files/11_0212.mp3",
    audioMeaning         : "files/11_0212_meaning.mp3",
    audioExample         : "files/11_0212_example.mp3",
    textMeaning          : "Glass is a transparent, breakable material",
    textExample          : "Windows are made of glass",
    transcription        : "[ЙЎlГ¦s]",
    wordTranslate        : "СЃС‚Р°РєР°РЅ",
    textMeaningTranslate : "РЎС‚РµРєР»Рѕ - РїСЂРѕР·СЂР°С‡РЅС‹Р№, С…СЂСѓРїРєРёР№ РјР°С‚РµСЂРёР°Р»",
    textExampleTranslate : "РћРєРЅР° СЃРґРµР»Р°РЅС‹ РёР· СЃС‚РµРєР»Р°",
    id                   : 212
  }, {
    word                 : "history",
    image                : "files/11_0213.jpg",
    audio                : "files/11_0213.mp3",
    audioMeaning         : "files/11_0213_meaning.mp3",
    audioExample         : "files/11_0213_example.mp3",
    textMeaning          : "History is the study of the past",
    textExample          : "History was my favorite subject in school",
    transcription        : "[hГ­stЙ™ri]",
    wordTranslate        : "РёСЃС‚РѕСЂРёСЏ",
    textMeaningTranslate : "РСЃС‚РѕСЂРёСЏ - СЌС‚Рѕ РёР·СѓС‡РµРЅРёРµ РїСЂРѕС€Р»РѕРіРѕ",
    textExampleTranslate : "РСЃС‚РѕСЂРёСЏ Р±С‹Р»Р° РјРѕРёРј Р»СЋР±РёРјС‹Рј РїСЂРµРґРјРµС‚РѕРј РІ С€РєРѕР»Рµ",
    id                   : 213
  }, {
    word                 : "nature",
    image                : "files/11_0214.jpg",
    audio                : "files/11_0214.mp3",
    audioMeaning         : "files/11_0214_meaning.mp3",
    audioExample         : "files/11_0214_example.mp3",
    textMeaning          : "Nature is everything in the physical world that is not made by people",
    textExample          : "On the weekends, I love to walk in nature among the trees",
    transcription        : "[nГ©iК§Й™r]",
    wordTranslate        : "РїСЂРёСЂРѕРґР°",
    textMeaningTranslate : "РџСЂРёСЂРѕРґР° - СЌС‚Рѕ РІСЃРµ РІ С„РёР·РёС‡РµСЃРєРѕРј РјРёСЂРµ, РєРѕС‚РѕСЂРѕРµ СЃРѕР·РґР°РЅРѕ РЅРµ Р»СЋРґСЊРјРё",
    textExampleTranslate : "РџРѕ РІС‹С…РѕРґРЅС‹Рј СЏ Р»СЋР±Р»СЋ РіСѓР»СЏС‚СЊ РЅР° РїСЂРёСЂРѕРґРµ СЃСЂРµРґРё РґРµСЂРµРІСЊРµРІ",
    id                   : 214
  }, {
    word                 : "never",
    image                : "files/11_0215.jpg",
    audio                : "files/11_0215.mp3",
    audioMeaning         : "files/11_0215_meaning.mp3",
    audioExample         : "files/11_0215_example.mp3",
    textMeaning          : "Never is when something is impossible or will not happen",
    textExample          : "They never eat meat because they are vegetarians",
    transcription        : "[nГ©vЙ™r]",
    wordTranslate        : "РЅРёРєРѕРіРґР°",
    textMeaningTranslate : "РќРёРєРѕРіРґР° РЅРµ Р±С‹РІР°РµС‚, РєРѕРіРґР° С‡С‚Рѕ-С‚Рѕ РЅРµРІРѕР·РјРѕР¶РЅРѕ РёР»Рё РЅРµ СЃР»СѓС‡РёС‚СЃСЏ",
    textExampleTranslate : "РћРЅРё РЅРёРєРѕРіРґР° РЅРµ РµРґСЏС‚ РјСЏСЃРѕ, РїРѕС‚РѕРјСѓ С‡С‚Рѕ РѕРЅРё РІРµРіРµС‚Р°СЂРёР°РЅС†С‹",
    id                   : 215
  }, {
    word                 : "people",
    image                : "files/11_0216.jpg",
    audio                : "files/11_0216.mp3",
    audioMeaning         : "files/11_0216_meaning.mp3",
    audioExample         : "files/11_0216_example.mp3",
    textMeaning          : "People are humans",
    textExample          : "How many people live in China?",
    transcription        : "[piЛђpЙ™l]",
    wordTranslate        : "Р»СЋРґРё",
    textMeaningTranslate : "Р›СЋРґРё РµСЃС‚СЊ Р»СЋРґРё",
    textExampleTranslate : "РЎРєРѕР»СЊРєРѕ Р»СЋРґРµР№ Р¶РёРІРµС‚ РІ РљРёС‚Р°Рµ?",
    id                   : 216
  }, {
    word                 : "plastic",
    image                : "files/11_0217.jpg",
    audio                : "files/11_0217.mp3",
    audioMeaning         : "files/11_0217_meaning.mp3",
    audioExample         : "files/11_0217_example.mp3",
    textMeaning          : "Plastic is a material made by people",
    textExample          : "Many drinks are sold in plastic bottles",
    transcription        : "[plЗЅstik]",
    wordTranslate        : "РїР»Р°СЃС‚РёРє",
    textMeaningTranslate : "РџР»Р°СЃС‚РёРє - СЌС‚Рѕ РјР°С‚РµСЂРёР°Р», СЃРѕР·РґР°РЅРЅС‹Р№ Р»СЋРґСЊРјРё",
    textExampleTranslate : "РњРЅРѕРіРёРµ РЅР°РїРёС‚РєРё РїСЂРѕРґР°СЋС‚СЃСЏ РІ РїР»Р°СЃС‚РёРєРѕРІС‹С… Р±СѓС‚С‹Р»РєР°С…",
    id                   : 217
  }, {
    word                 : "problem",
    image                : "files/11_0218.jpg",
    audio                : "files/11_0218.mp3",
    audioMeaning         : "files/11_0218_meaning.mp3",
    audioExample         : "files/11_0218_example.mp3",
    textMeaning          : "A problem is a situation when something goes wrong",
    textExample          : "My problem is that I lost my dog",
    transcription        : "[prО¬blЙ™m]",
    wordTranslate        : "РїСЂРѕР±Р»РµРјР°",
    textMeaningTranslate : "РџСЂРѕР±Р»РµРјР° - СЌС‚Рѕ СЃРёС‚СѓР°С†РёСЏ, РєРѕРіРґР° С‡С‚Рѕ-С‚Рѕ РёРґРµС‚ РЅРµ С‚Р°Рє",
    textExampleTranslate : "РњРѕСЏ РїСЂРѕР±Р»РµРјР° РІ С‚РѕРј, С‡С‚Рѕ СЏ РїРѕС‚РµСЂСЏР» СЃРІРѕСЋ СЃРѕР±Р°РєСѓ",
    id                   : 218
  }, {
    word                 : "street",
    image                : "files/11_0219.jpg",
    audio                : "files/11_0219.mp3",
    audioMeaning         : "files/11_0219_meaning.mp3",
    audioExample         : "files/11_0219_example.mp3",
    textMeaning          : "A street is a road in a city or village",
    textExample          : "What is the name of the street you live on?",
    transcription        : "[striЛђt]",
    wordTranslate        : "СѓР»РёС†Р°",
    textMeaningTranslate : "РЈР»РёС†Р° - СЌС‚Рѕ РґРѕСЂРѕРіР° РІ РіРѕСЂРѕРґРµ РёР»Рё РґРµСЂРµРІРЅРµ",
    textExampleTranslate : "РљР°Рє РЅР°Р·С‹РІР°РµС‚СЃСЏ СѓР»РёС†Р°, РЅР° РєРѕС‚РѕСЂРѕР№ РІС‹ Р¶РёРІРµС‚Рµ?",
    id                   : 219
  }, {
    word                 : "think",
    image                : "files/11_0220.jpg",
    audio                : "files/11_0220.mp3",
    audioMeaning         : "files/11_0220_meaning.mp3",
    audioExample         : "files/11_0220_example.mp3",
    textMeaning          : "To think is to have an opinion or thought about something",
    textExample          : "I think summer is the best season",
    transcription        : "[ОёЙЄЕ‹k]",
    wordTranslate        : "СЃС‡РёС‚Р°С‚СЊ",
    textMeaningTranslate : "Р”СѓРјР°С‚СЊ - Р·РЅР°С‡РёС‚ РёРјРµС‚СЊ РјРЅРµРЅРёРµ РёР»Рё РґСѓРјР°С‚СЊ Рѕ С‡РµРј-С‚Рѕ",
    textExampleTranslate : "РЇ СЃС‡РёС‚Р°СЋ Р»РµС‚Рѕ Р»СѓС‡С€РёРј СЃРµР·РѕРЅРѕРј",
    id                   : 220
  }, {
    word                 : "alone",
    image                : "files/12_0221.jpg",
    audio                : "files/12_0221.mp3",
    audioMeaning         : "files/12_0221_meaning.mp3",
    audioExample         : "files/12_0221_example.mp3",
    textMeaning          : "A person who is alone is not with another person",
    textExample          : "The boy wanted to be alone to think",
    transcription        : "[Й™lГіun]",
    wordTranslate        : "РѕРґРёРЅ",
    textMeaningTranslate : "Р§РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ РѕРґРёРЅ, РЅРµ СЃ РґСЂСѓРіРёРј С‡РµР»РѕРІРµРєРѕРј",
    textExampleTranslate : "РњР°Р»СЊС‡РёРє С…РѕС‚РµР» РїРѕР±С‹С‚СЊ РѕРґРёРЅ, С‡С‚РѕР±С‹ РґСѓРјР°С‚СЊ",
    id                   : 221
  }, {
    word                 : "apartment",
    image                : "files/12_0222.jpg",
    audio                : "files/12_0222.mp3",
    audioMeaning         : "files/12_0222_meaning.mp3",
    audioExample         : "files/12_0222_example.mp3",
    textMeaning          : "An apartment is a set of rooms in a building where people live",
    textExample          : "She has a nice apartment in the city",
    transcription        : "[Й™pЙ‘МЃЛђrtmЙ™nt]",
    wordTranslate        : "РєРІР°СЂС‚РёСЂР°",
    textMeaningTranslate : "РљРІР°СЂС‚РёСЂР° - СЌС‚Рѕ РЅР°Р±РѕСЂ РєРѕРјРЅР°С‚ РІ РґРѕРјРµ, РіРґРµ Р¶РёРІСѓС‚ Р»СЋРґРё",
    textExampleTranslate : "РЈ РЅРµРµ С…РѕСЂРѕС€Р°СЏ РєРІР°СЂС‚РёСЂР° РІ РіРѕСЂРѕРґРµ",
    id                   : 222
  }, {
    word                 : "article",
    image                : "files/12_0223.jpg",
    audio                : "files/12_0223.mp3",
    audioMeaning         : "files/12_0223_meaning.mp3",
    audioExample         : "files/12_0223_example.mp3",
    textMeaning          : "An article is a story in a newspaper or magazine",
    textExample          : "Did you read the article in the newspaper about the soccer game?",
    transcription        : "[Й‘МЃЛђrtikl]",
    wordTranslate        : "СЃС‚Р°С‚СЊСЏ",
    textMeaningTranslate : "РЎС‚Р°С‚СЊСЏ - СЌС‚Рѕ РёСЃС‚РѕСЂРёСЏ РІ РіР°Р·РµС‚Рµ РёР»Рё Р¶СѓСЂРЅР°Р»Рµ",
    textExampleTranslate : "Р’С‹ С‡РёС‚Р°Р»Рё СЃС‚Р°С‚СЊСЋ РІ РіР°Р·РµС‚Рµ Рѕ С„СѓС‚Р±РѕР»СЊРЅРѕРј РјР°С‚С‡Рµ?",
    id                   : 223
  }, {
    word                 : "artist",
    image                : "files/12_0224.jpg",
    audio                : "files/12_0224.mp3",
    audioMeaning         : "files/12_0224_meaning.mp3",
    audioExample         : "files/12_0224_example.mp3",
    textMeaning          : "An artist is a person who paints, draws, or makes sculptures",
    textExample          : "He went to Paris to become an artist",
    transcription        : "[Й‘МЃЛђrtist]",
    wordTranslate        : "С…СѓРґРѕР¶РЅРёРє",
    textMeaningTranslate : "РҐСѓРґРѕР¶РЅРёРє - СЌС‚Рѕ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ СЂРёСЃСѓРµС‚, СЂРёСЃСѓРµС‚ РёР»Рё РґРµР»Р°РµС‚ СЃРєСѓР»СЊРїС‚СѓСЂС‹",
    textExampleTranslate : "РћРЅ РѕС‚РїСЂР°РІРёР»СЃСЏ РІ РџР°СЂРёР¶, С‡С‚РѕР±С‹ СЃС‚Р°С‚СЊ С…СѓРґРѕР¶РЅРёРєРѕРј",
    id                   : 224
  }, {
    word                 : "attitude",
    image                : "files/12_0225.jpg",
    audio                : "files/12_0225.mp3",
    audioMeaning         : "files/12_0225_meaning.mp3",
    audioExample         : "files/12_0225_example.mp3",
    textMeaning          : "SomeoneвЂ™s attitude is the way they feel and think",
    textExample          : "John has a bad attitude. HeвЂ™s always angry",
    transcription        : "[ЗЅtitjГ№Лђd]",
    wordTranslate        : "РѕС‚РЅРѕС€РµРЅРёРµ",
    textMeaningTranslate : "Р§СЊРµ-С‚Рѕ РѕС‚РЅРѕС€РµРЅРёРµ - СЌС‚Рѕ С‚Рѕ, РєР°Рє РѕРЅРё С‡СѓРІСЃС‚РІСѓСЋС‚ Рё РґСѓРјР°СЋС‚",
    textExampleTranslate : "РЈ Р”Р¶РѕРЅР° РїР»РѕС…РѕРµ РѕС‚РЅРѕС€РµРЅРёРµ. РћРЅ РІСЃРµРіРґР° Р·РѕР»",
    id                   : 225
  }, {
    word                 : "beauty",
    image                : "files/12_0226.jpg",
    audio                : "files/12_0226.mp3",
    audioMeaning         : "files/12_0226_meaning.mp3",
    audioExample         : "files/12_0226_example.mp3",
    textMeaning          : "Beauty is the state or quality of being beautiful",
    textExample          : "I heard my mother was a great beauty when she was young",
    transcription        : "[bjГєЛђti]",
    wordTranslate        : "РєСЂР°СЃРѕС‚Р°",
    textMeaningTranslate : "РљСЂР°СЃРѕС‚Р° - СЌС‚Рѕ СЃРѕСЃС‚РѕСЏРЅРёРµ РёР»Рё РєР°С‡РµСЃС‚РІРѕ РєСЂР°СЃРѕС‚С‹",
    textExampleTranslate : "РЇ СЃР»С‹С€Р°Р», С‡С‚Рѕ РјРѕСЏ РјР°РјР° Р±С‹Р»Р° РїСЂРµРєСЂР°СЃРЅРѕР№ РєСЂР°СЃРѕС‚РѕР№, РєРѕРіРґР° РѕРЅР° Р±С‹Р»Р° РјР°Р»РµРЅСЊРєРѕР№",
    id                   : 226
  }, {
    word                 : "compare",
    image                : "files/12_0227.jpg",
    audio                : "files/12_0227.mp3",
    audioMeaning         : "files/12_0227_meaning.mp3",
    audioExample         : "files/12_0227_example.mp3",
    textMeaning          : "To compare means to say how two things are the same and different",
    textExample          : "If you compare cats and dogs, youвЂ™ll see that theyвЂ™re both good pets",
    transcription        : "[kЙ™mpЙ›МЃЙ™r]",
    wordTranslate        : "СЃСЂР°РІРЅРёС‚СЊ",
    textMeaningTranslate : "РЎСЂР°РІРЅРёС‚СЊ - Р·РЅР°С‡РёС‚ СЃРєР°Р·Р°С‚СЊ, С‡С‚Рѕ РґРІРµ РІРµС‰Рё РѕРґРёРЅР°РєРѕРІС‹ Рё СЂР°Р·Р»РёС‡РЅС‹",
    textExampleTranslate : "Р•СЃР»Рё РІС‹ СЃСЂР°РІРЅРёС‚Рµ РєРѕС€РµРє Рё СЃРѕР±Р°Рє, РІС‹ СѓРІРёРґРёС‚Рµ, С‡С‚Рѕ РѕРЅРё РѕР±Р° С…РѕСЂРѕС€РёРµ РґРѕРјР°С€РЅРёРµ РІРѕС‚РЅС‹Рµ",
    id                   : 227
  }, {
    word                 : "judge",
    image                : "files/12_0228.jpg",
    audio                : "files/12_0228.mp3",
    audioMeaning         : "files/12_0228_meaning.mp3",
    audioExample         : "files/12_0228_example.mp3",
    textMeaning          : "To judge something is to say if it is good or bad",
    textExample          : "The boy was going to judge how his motherвЂ™s turkey tasted",
    transcription        : "[dК’КЊdК’]",
    wordTranslate        : "СЃСѓРґСЊСЏ",
    textMeaningTranslate : "РЎСѓРґРёС‚СЊ Рѕ С‡РµРј-С‚Рѕ, Р·РЅР°С‡РёС‚ СЃРєР°Р·Р°С‚СЊ, С…РѕСЂРѕС€Рѕ СЌС‚Рѕ РёР»Рё РїР»РѕС…Рѕ",
    textExampleTranslate : "РњР°Р»СЊС‡РёРє СЃРѕР±РёСЂР°Р»СЃСЏ СЃСѓРґРёС‚СЊ, РєР°Рє РЅР° РІРєСѓСЃ РјР°РјРёРЅР° РёРЅРґРµР№РєР°",
    id                   : 228
  }, {
    word                 : "magazine",
    image                : "files/12_0229.jpg",
    audio                : "files/12_0229.mp3",
    audioMeaning         : "files/12_0229_meaning.mp3",
    audioExample         : "files/12_0229_example.mp3",
    textMeaning          : "A magazine is a regular publication with news, stories, and articles",
    textExample          : "She likes to read fashion magazines",
    transcription        : "[mГ¦МЂgЙ™zГ­Лђn]",
    wordTranslate        : "Р¶СѓСЂРЅР°Р»",
    textMeaningTranslate : "Р–СѓСЂРЅР°Р» - СЌС‚Рѕ СЂРµРіСѓР»СЏСЂРЅРѕРµ РёР·РґР°РЅРёРµ СЃ РЅРѕРІРѕСЃС‚СЏРјРё, РёСЃС‚РѕСЂРёСЏРјРё Рё СЃС‚Р°С‚СЊСЏРјРё",
    textExampleTranslate : "РћРЅР° Р»СЋР±РёС‚ С‡РёС‚Р°С‚СЊ Р¶СѓСЂРЅР°Р»С‹ РјРѕРґ",
    id                   : 229
  }, {
    word                 : "material",
    image                : "files/12_0230.jpg",
    audio                : "files/12_0230.mp3",
    audioMeaning         : "files/12_0230_meaning.mp3",
    audioExample         : "files/12_0230_example.mp3",
    textMeaning          : "A material is what is used to make something",
    textExample          : "Brick is a good material for building houses",
    transcription        : "[mЙ™tГ­Й™riЙ™l]",
    wordTranslate        : "РјР°С‚РµСЂРёР°Р»",
    textMeaningTranslate : "РњР°С‚РµСЂРёР°Р» - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ, С‡С‚РѕР±С‹ СЃРґРµР»Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ",
    textExampleTranslate : "РљРёСЂРїРёС‡ - С…РѕСЂРѕС€РёР№ РјР°С‚РµСЂРёР°Р» РґР»СЏ СЃС‚СЂРѕРёС‚РµР»СЊСЃС‚РІР° РґРѕРјРѕРІ",
    id                   : 230
  }, {
    word                 : "meal",
    image                : "files/12_0231.jpg",
    audio                : "files/12_0231.mp3",
    audioMeaning         : "files/12_0231_meaning.mp3",
    audioExample         : "files/12_0231_example.mp3",
    textMeaning          : "A meal is a time when food is eaten, such as breakfast, lunch, or dinner",
    textExample          : "Breakfast is my favorite meal because I enjoy cereal",
    transcription        : "[miЛђl]",
    wordTranslate        : "РµРґР°",
    textMeaningTranslate : "Р•РґР° - СЌС‚Рѕ РІСЂРµРјСЏ, РєРѕРіРґР° РµРґСЏС‚ РµРґСѓ, РЅР°РїСЂРёРјРµСЂ, Р·Р°РІС‚СЂР°Рє, РѕР±РµРґ РёР»Рё СѓР¶РёРЅ",
    textExampleTranslate : "Р—Р°РІС‚СЂР°Рє - РјРѕСЏ Р»СЋР±РёРјР°СЏ РµРґР°, РїРѕС‚РѕРјСѓ С‡С‚Рѕ СЏ РЅР°СЃР»Р°Р¶РґР°СЋСЃСЊ С…Р»РѕРїСЊСЏРјРё",
    id                   : 231
  }, {
    word                 : "method",
    image                : "files/12_0232.jpg",
    audio                : "files/12_0232.mp3",
    audioMeaning         : "files/12_0232_meaning.mp3",
    audioExample         : "files/12_0232_example.mp3",
    textMeaning          : "A method is the way to do something",
    textExample          : "One method to remember things is to tie a string around your finger",
    transcription        : "[mГ©ОёЙ™d]",
    wordTranslate        : "РјРµС‚РѕРґ",
    textMeaningTranslate : "РњРµС‚РѕРґ - СЌС‚Рѕ СЃРїРѕСЃРѕР± СЃРґРµР»Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ",
    textExampleTranslate : "РћРґРёРЅ РёР· СЃРїРѕСЃРѕР±РѕРІ Р·Р°РїРѕРјРёРЅР°РЅРёСЏ РІРµС‰РµР№ - СЌС‚Рѕ РѕР±РІСЏР·Р°С‚СЊ РїР°Р»СЊС†РµРј РІРµСЂРµРІРєСѓ",
    id                   : 232
  }, {
    word                 : "neighbor",
    image                : "files/12_0233.jpg",
    audio                : "files/12_0233.mp3",
    audioMeaning         : "files/12_0233_meaning.mp3",
    audioExample         : "files/12_0233_example.mp3",
    textMeaning          : "A neighbor is a person who lives near you",
    textExample          : "I like my neighbor because heвЂ™s very friendly",
    transcription        : "[nГ©ibЙ™r]",
    wordTranslate        : "СЃРѕСЃРµРґ",
    textMeaningTranslate : "РЎРѕСЃРµРґ - СЌС‚Рѕ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ Р¶РёРІРµС‚ СЂСЏРґРѕРј СЃ С‚РѕР±РѕР№",
    textExampleTranslate : "РњРЅРµ РЅСЂР°РІРёС‚СЃСЏ РјРѕР№ СЃРѕСЃРµРґ, РїРѕС‚РѕРјСѓ С‡С‚Рѕ РѕРЅ РѕС‡РµРЅСЊ РґСЂСѓР¶РµР»СЋР±РЅС‹Р№",
    id                   : 233
  }, {
    word                 : "professional",
    image                : "files/12_0234.jpg",
    audio                : "files/12_0234.mp3",
    audioMeaning         : "files/12_0234_meaning.mp3",
    audioExample         : "files/12_0234_example.mp3",
    textMeaning          : "If something is professional, it deals with work that uses special skills",
    textExample          : "If you want to be a pilot, you must have professional training",
    transcription        : "[prЙ™fГ©КѓЙ™nЙ™l]",
    wordTranslate        : "РїСЂРѕС„РµСЃСЃРёРѕРЅР°Р»",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РїСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅРѕРµ, РѕРЅРѕ РёРјРµРµС‚ РґРµР»Рѕ СЃ СЂР°Р±РѕС‚РѕР№, РєРѕС‚РѕСЂР°СЏ РёСЃРїРѕР»СЊР·СѓРµС‚ СЃРїРµС†РёР°Р»СЊРЅС‹Рµ РЅР°РІС‹РєРё",
    textExampleTranslate : "Р•СЃР»Рё РІС‹ С…РѕС‚РёС‚Рµ СЃС‚Р°С‚СЊ РїРёР»РѕС‚РѕРј, РІС‹ РґРѕР»Р¶РЅС‹ РїСЂРѕР№С‚Рё РїСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅСѓСЋ РїРѕРґРіРѕС‚РѕРІРєСѓ",
    id                   : 234
  }, {
    word                 : "profit",
    image                : "files/12_0235.jpg",
    audio                : "files/12_0235.mp3",
    audioMeaning         : "files/12_0235_meaning.mp3",
    audioExample         : "files/12_0235_example.mp3",
    textMeaning          : "A profit is the extra money you make when you sell something",
    textExample          : "I made a small profit from selling my old clothes",
    transcription        : "[prЙ‘МЃfit]",
    wordTranslate        : "РїСЂРёР±С‹Р»СЊ",
    textMeaningTranslate : "РџСЂРёР±С‹Р»СЊ - СЌС‚Рѕ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РґРµРЅСЊРіРё, РєРѕС‚РѕСЂС‹Рµ РІС‹ Р·Р°СЂР°Р±Р°С‚С‹РІР°РµС‚Рµ, РєРѕРіРґР° С‡С‚Рѕ-С‚Рѕ РїСЂРѕРґР°РµС‚Рµ",
    textExampleTranslate : "РЇ РїРѕР»СѓС‡РёР» РЅРµР±РѕР»СЊС€СѓСЋ РїСЂРёР±С‹Р»СЊ РѕС‚ РїСЂРѕРґР°Р¶Рё РјРѕРµР№ СЃС‚Р°СЂРѕР№ РѕРґРµР¶РґС‹",
    id                   : 235
  }, {
    word                 : "quality",
    image                : "files/12_0236.jpg",
    audio                : "files/12_0236.mp3",
    audioMeaning         : "files/12_0236_meaning.mp3",
    audioExample         : "files/12_0236_example.mp3",
    textMeaning          : "The quality of something is how good it is",
    textExample          : "The quality of his car is very good",
    transcription        : "[kwЙ‘МЃlЙ™ti]",
    wordTranslate        : "РєР°С‡РµСЃС‚РІРµРЅРЅС‹Р№",
    textMeaningTranslate : "РљР°С‡РµСЃС‚РІРѕ С‡РµРіРѕ-С‚Рѕ, РЅР°СЃРєРѕР»СЊРєРѕ СЌС‚Рѕ С…РѕСЂРѕС€Рѕ",
    textExampleTranslate : "РљР°С‡РµСЃС‚РІРѕ РµРіРѕ РјР°С€РёРЅС‹ РѕС‡РµРЅСЊ С…РѕСЂРѕС€РµРµ",
    id                   : 236
  }, {
    word                 : "space",
    image                : "files/12_0237.jpg",
    audio                : "files/12_0237.mp3",
    audioMeaning         : "files/12_0237_meaning.mp3",
    audioExample         : "files/12_0237_example.mp3",
    textMeaning          : "A space is an empty area",
    textExample          : "I donвЂ™t have much space for things in my small house",
    transcription        : "[speis]",
    wordTranslate        : "РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕ",
    textMeaningTranslate : "РџСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕ - СЌС‚Рѕ РїСѓСЃС‚РѕРµ РјРµСЃС‚Рѕ",
    textExampleTranslate : "РЈ РјРµРЅСЏ РјР°Р»Рѕ РјРµСЃС‚Р° РґР»СЏ РІРµС‰РµР№ РІ РјРѕРµРј РјР°Р»РµРЅСЊРєРѕРј РґРѕРјРµ",
    id                   : 237
  }, {
    word                 : "stair",
    image                : "files/12_0238.jpg",
    audio                : "files/12_0238.mp3",
    audioMeaning         : "files/12_0238_meaning.mp3",
    audioExample         : "files/12_0238_example.mp3",
    textMeaning          : "Stairs are the things that are used to walk up or down in a building",
    textExample          : "You can take the stairs to the second floor",
    transcription        : "[stЙ›Й™Лђr]",
    wordTranslate        : "СЃС‚СѓРїРµРЅСЊРєР°",
    textMeaningTranslate : "Р›РµСЃС‚РЅРёС†Р° - СЌС‚Рѕ РІРµС‰Рё, РєРѕС‚РѕСЂС‹Рµ РёСЃРїРѕР»СЊР·СѓСЋС‚СЃСЏ, С‡С‚РѕР±С‹ РёРґС‚Рё РІРІРµСЂС… РёР»Рё РІРЅРёР· РІ Р·РґР°РЅРёРё",
    textExampleTranslate : "Р’С‹ РјРѕР¶РµС‚Рµ РїРѕРґРЅСЏС‚СЊСЃСЏ РїРѕ Р»РµСЃС‚РЅРёС†Рµ РЅР° РІС‚РѕСЂРѕР№ СЌС‚Р°Р¶",
    id                   : 238
  }, {
    word                 : "symbol",
    image                : "files/12_0239.jpg",
    audio                : "files/12_0239.mp3",
    audioMeaning         : "files/12_0239_meaning.mp3",
    audioExample         : "files/12_0239_example.mp3",
    textMeaning          : "A symbol is a thing that stands for something else",
    textExample          : "This symbol tells us that we cannot smoke in this area",
    transcription        : "[sГ­mbЙ™l]",
    wordTranslate        : "СЃРёРјРІРѕР»",
    textMeaningTranslate : "РЎРёРјРІРѕР» - СЌС‚Рѕ РІРµС‰СЊ, РєРѕС‚РѕСЂР°СЏ РѕР·РЅР°С‡Р°РµС‚ С‡С‚Рѕ-С‚Рѕ РґСЂСѓРіРѕРµ",
    textExampleTranslate : "Р­С‚РѕС‚ СЃРёРјРІРѕР» РіРѕРІРѕСЂРёС‚ РЅР°Рј, С‡С‚Рѕ РјС‹ РЅРµ РјРѕР¶РµРј РєСѓСЂРёС‚СЊ РІ СЌС‚РѕР№ РѕР±Р»Р°СЃС‚Рё",
    id                   : 239
  }, {
    word                 : "thin",
    image                : "files/12_0240.jpg",
    audio                : "files/12_0240.mp3",
    audioMeaning         : "files/12_0240_meaning.mp3",
    audioExample         : "files/12_0240_example.mp3",
    textMeaning          : "If someone or something is thin, they are not fat",
    textExample          : "The man was thin because he didnвЂ™t eat much",
    transcription        : "[Оёin]",
    wordTranslate        : "С‚РѕРЅРєРёР№",
    textMeaningTranslate : "Р•СЃР»Рё РєС‚Рѕ-С‚Рѕ РёР»Рё С‡С‚Рѕ-С‚Рѕ С…СѓРґРѕРµ, РѕРЅРё РЅРµ С‚РѕР»СЃС‚С‹Рµ",
    textExampleTranslate : "Р§РµР»РѕРІРµРє Р±С‹Р» С…СѓРґС‹Рј, РїРѕС‚РѕРјСѓ С‡С‚Рѕ РѕРЅ РјР°Р»Рѕ РµР»",
    id                   : 240
  }, {
    word                 : "accounting",
    image                : "files/13_0241.jpg",
    audio                : "files/13_0241.mp3",
    audioMeaning         : "files/13_0241_meaning.mp3",
    audioExample         : "files/13_0241_example.mp3",
    textMeaning          : "People study accounting so they can deal with money and finance properly",
    textExample          : "He works for an accounting firm",
    transcription        : "[Й™kГЎuntiЕ‹]",
    wordTranslate        : "Р±СѓС…РіР°Р»С‚РµСЂСЃРєРёР№ СѓС‡РµС‚",
    textMeaningTranslate : "Р›СЋРґРё РёР·СѓС‡Р°СЋС‚ Р±СѓС…РіР°Р»С‚РµСЂСЃРєРёР№ СѓС‡РµС‚, С‡С‚РѕР±С‹ РёРјРµС‚СЊ РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ РїСЂР°РІРёР»СЊРЅРѕ РѕР±СЂР°С‰Р°С‚СЊСЃСЏ СЃ РґРµРЅСЊРіР°РјРё Рё С„РёРЅР°РЅСЃР°РјРё",
    textExampleTranslate : "РћРЅ СЂР°Р±РѕС‚Р°РµС‚ РІ Р±СѓС…РіР°Р»С‚РµСЂСЃРєРѕР№ С„РёСЂРјРµ",
    id                   : 241
  }, {
    word                 : "appeal",
    image                : "files/13_0242.jpg",
    audio                : "files/13_0242.mp3",
    audioMeaning         : "files/13_0242_meaning.mp3",
    audioExample         : "files/13_0242_example.mp3",
    textMeaning          : "To appeal to someone is to be interesting or attractive",
    textExample          : "Sleeping all day appeals to me, but I have to go to school",
    transcription        : "[Й™pГ­Лђl]",
    wordTranslate        : "РѕР±СЂР°С‰РµРЅРёРµ",
    textMeaningTranslate : "РћР±СЂР°С‰Р°С‚СЊСЃСЏ Рє РєРѕРјСѓ-С‚Рѕ - Р·РЅР°С‡РёС‚ Р±С‹С‚СЊ РёРЅС‚РµСЂРµСЃРЅС‹Рј РёР»Рё РїСЂРёРІР»РµРєР°С‚РµР»СЊРЅС‹Рј",
    textExampleTranslate : "РЎРїРёС‚ С†РµР»С‹Р№ РґРµРЅСЊ, РјРЅРµ РЅСЂР°РІРёС‚СЃСЏ, РЅРѕ СЏ РґРѕР»Р¶РµРЅ РёРґС‚Рё РІ С€РєРѕР»Сѓ",
    id                   : 242
  }, {
    word                 : "assume",
    image                : "files/13_0243.jpg",
    audio                : "files/13_0243.mp3",
    audioMeaning         : "files/13_0243_meaning.mp3",
    audioExample         : "files/13_0243_example.mp3",
    textMeaning          : "To assume something is to think that it is true, even with no proof",
    textExample          : "I assume you are both familiar with this plan",
    transcription        : "[Й™sjГєЛђm]",
    wordTranslate        : "РїСЂРµРґРїРѕР»Р°РіР°С‚СЊ",
    textMeaningTranslate : "РџСЂРµРґРїРѕР»Р°РіР°С‚СЊ, С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ РґСѓРјР°С‚СЊ, С‡С‚Рѕ СЌС‚Рѕ РїСЂР°РІРґР°, РґР°Р¶Рµ Р±РµР· РґРѕРєР°Р·Р°С‚РµР»СЊСЃС‚РІ",
    textExampleTranslate : "РЇ РїРѕР»Р°РіР°СЋ, РІС‹ РѕР±Р° Р·РЅР°РєРѕРјС‹ СЃ СЌС‚РёРј РїР»Р°РЅРѕРј",
    id                   : 243
  }, {
    word                 : "borrow",
    image                : "files/13_0244.jpg",
    audio                : "files/13_0244.mp3",
    audioMeaning         : "files/13_0244_meaning.mp3",
    audioExample         : "files/13_0244_example.mp3",
    textMeaning          : "To borrow something is to take it and then give it back later",
    textExample          : "Can I borrow a pencil to use today? IвЂ™ll give it back to you tomorrow",
    transcription        : "[bО¬rou]",
    wordTranslate        : "Р·Р°РёРјСЃС‚РІРѕРІР°С‚СЊ",
    textMeaningTranslate : "РћРґРѕР»Р¶РёС‚СЊ - Р·РЅР°С‡РёС‚ РІР·СЏС‚СЊ, Р° РїРѕС‚РѕРј РѕС‚РґР°С‚СЊ РѕР±СЂР°С‚РЅРѕ",
    textExampleTranslate : "РњРѕРіСѓ Р»Рё СЏ РѕРґРѕР»Р¶РёС‚СЊ РєР°СЂР°РЅРґР°С€ РґР»СЏ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ СЃРµРіРѕРґРЅСЏ? РЇ РІРµСЂРЅСѓ РµРіРѕ РІР°Рј Р·Р°РІС‚СЂР°",
    id                   : 244
  }, {
    word                 : "client",
    image                : "files/13_0245.jpg",
    audio                : "files/13_0245.mp3",
    audioMeaning         : "files/13_0245_meaning.mp3",
    audioExample         : "files/13_0245_example.mp3",
    textMeaning          : "A client is a person or business that pays another to do a service",
    textExample          : "She has many clients who enjoy coming to her salon",
    transcription        : "[klГЎiЙ™nt]",
    wordTranslate        : "РєР»РёРµРЅС‚",
    textMeaningTranslate : "РљР»РёРµРЅС‚ - СЌС‚Рѕ С‡РµР»РѕРІРµРє РёР»Рё Р±РёР·РЅРµСЃ, РєРѕС‚РѕСЂС‹Р№ РїР»Р°С‚РёС‚ РґСЂСѓРіРѕРјСѓ Р·Р° РѕРєР°Р·Р°РЅРёРµ СѓСЃР»СѓРіРё",
    textExampleTranslate : "РЈ РЅРµРµ РјРЅРѕРіРѕ РєР»РёРµРЅС‚РѕРІ, РєРѕС‚РѕСЂС‹Рј РЅСЂР°РІРёС‚СЃСЏ РїСЂРёС…РѕРґРёС‚СЊ РІ РµРµ СЃР°Р»РѕРЅ",
    id                   : 245
  }, {
    word                 : "downtown",
    image                : "files/13_0246.jpg",
    audio                : "files/13_0246.mp3",
    audioMeaning         : "files/13_0246_meaning.mp3",
    audioExample         : "files/13_0246_example.mp3",
    textMeaning          : "The downtown area is the center of most cities",
    textExample          : "The downtown area is filled with many tall buildings",
    transcription        : "[dauntГЎun]",
    wordTranslate        : "С†РµРЅС‚СЂ РіРѕСЂРѕРґР°",
    textMeaningTranslate : "Р¦РµРЅС‚СЂ РіРѕСЂРѕРґР° СЏРІР»СЏРµС‚СЃСЏ С†РµРЅС‚СЂРѕРј Р±РѕР»СЊС€РёРЅСЃС‚РІР° РіРѕСЂРѕРґРѕРІ",
    textExampleTranslate : "Р¦РµРЅС‚СЂ РіРѕСЂРѕРґР° Р·Р°РїРѕР»РЅРµРЅ РјРЅРѕР¶РµСЃС‚РІРѕРј РІС‹СЃРѕРєРёС… Р·РґР°РЅРёР№",
    id                   : 246
  }, {
    word                 : "dull",
    image                : "files/13_0247.jpg",
    audio                : "files/13_0247.mp3",
    audioMeaning         : "files/13_0247_meaning.mp3",
    audioExample         : "files/13_0247_example.mp3",
    textMeaning          : "If something is dull, it is not exciting",
    textExample          : "The movie was very dull. I fell asleep watching it",
    transcription        : "[dКЊl]",
    wordTranslate        : "С‚СѓРїРѕР№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЃРєСѓС‡РЅРѕ, СЌС‚Рѕ РЅРµ РІРѕР»РЅРёС‚РµР»СЊРЅРѕ",
    textExampleTranslate : "Р¤РёР»СЊРј Р±С‹Р» РѕС‡РµРЅСЊ СЃРєСѓС‡РЅС‹Рј. РЇ Р·Р°СЃРЅСѓР», СЃРјРѕС‚СЂСЏ РµРіРѕ",
    id                   : 247
  }, {
    word                 : "embarrass",
    image                : "files/13_0248.jpg",
    audio                : "files/13_0248.mp3",
    audioMeaning         : "files/13_0248_meaning.mp3",
    audioExample         : "files/13_0248_example.mp3",
    textMeaning          : "To embarrass people is to make them feel ashamed or foolish",
    textExample          : "He was embarrassed when he couldnвЂ™t remember her name",
    transcription        : "[imbЗЅrЙ™s]",
    wordTranslate        : "СЃРјСѓС‰Р°С‚СЊ",
    textMeaningTranslate : "РЎРјСѓС‰Р°С‚СЊ Р»СЋРґРµР№ - Р·РЅР°С‡РёС‚ Р·Р°СЃС‚Р°РІР»СЏС‚СЊ РёС… С‡СѓРІСЃС‚РІРѕРІР°С‚СЊ СЃРµР±СЏ СЃС‚С‹РґРЅРѕ РёР»Рё РіР»СѓРїРѕ",
    textExampleTranslate : "РћРЅ Р±С‹Р» СЃРјСѓС‰РµРЅ, РєРѕРіРґР° РЅРµ РјРѕРі РІСЃРїРѕРјРЅРёС‚СЊ РµРµ РёРјСЏ",
    id                   : 248
  }, {
    word                 : "fare",
    image                : "files/13_0249.jpg",
    audio                : "files/13_0249.mp3",
    audioMeaning         : "files/13_0249_meaning.mp3",
    audioExample         : "files/13_0249_example.mp3",
    textMeaning          : "A fare is an amount of money paid to use a bus, train, or taxi",
    textExample          : "Since he is a senior, my grandfather pays a low fare for the bus",
    transcription        : "[fЙ›Й™r]",
    wordTranslate        : "РїР»Р°С‚Р° Р·Р° РїСЂРѕРµР·Рґ",
    textMeaningTranslate : "РўР°СЂРёС„ - СЌС‚Рѕ СЃСѓРјРјР° РґРµРЅРµРі, СѓРїР»Р°С‡РµРЅРЅР°СЏ Р·Р° РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ Р°РІС‚РѕР±СѓСЃР°, РїРѕРµР·РґР° РёР»Рё С‚Р°РєСЃРё",
    textExampleTranslate : "РўР°Рє РєР°Рє РѕРЅ СЃС‚Р°СЂС€РёР№, РјРѕР№ РґРµРґ РїР»Р°С‚РёС‚ Р·Р° РїСЂРѕРµР·Рґ РІ Р°РІС‚РѕР±СѓСЃРµ РїРѕ РЅРёР·РєРѕР№ С†РµРЅРµ",
    id                   : 249
  }, {
    word                 : "former",
    image                : "files/13_0250.jpg",
    audio                : "files/13_0250.mp3",
    audioMeaning         : "files/13_0250_meaning.mp3",
    audioExample         : "files/13_0250_example.mp3",
    textMeaning          : "Former describes something that used to be but is not anymore",
    textExample          : "The hotel, a former castle, was built over 200 years ago",
    transcription        : "[fЙ”МЃЛђrmЙ™Лђr]",
    wordTranslate        : "Р±С‹РІС€РёР№",
    textMeaningTranslate : "Р‘С‹РІС€РёР№ РѕРїРёСЃС‹РІР°РµС‚ С‡С‚Рѕ-С‚Рѕ, С‡С‚Рѕ СЂР°РЅСЊС€Рµ Р±С‹Р»Рѕ, РЅРѕ РЅРµ Р±РѕР»СЊС€Рµ",
    textExampleTranslate : "РћС‚РµР»СЊ, Р±С‹РІС€РёР№ Р·Р°РјРѕРє, Р±С‹Р» РїРѕСЃС‚СЂРѕРµРЅ Р±РѕР»РµРµ 200 Р»РµС‚ РЅР°Р·Р°Рґ",
    id                   : 250
  }, {
    word                 : "found",
    image                : "files/13_0251.jpg",
    audio                : "files/13_0251.mp3",
    audioMeaning         : "files/13_0251_meaning.mp3",
    audioExample         : "files/13_0251_example.mp3",
    textMeaning          : "To found a company or organization means to start it",
    textExample          : "The Pilgrims founded one of the first colonies in the United States",
    transcription        : "[faund]",
    wordTranslate        : "РЅР°С€РµР»",
    textMeaningTranslate : "РЈС‡СЂРµРґРёС‚СЊ РєРѕРјРїР°РЅРёСЋ РёР»Рё РѕСЂРіР°РЅРёР·Р°С†РёСЋ - Р·РЅР°С‡РёС‚ РЅР°С‡Р°С‚СЊ РµРµ",
    textExampleTranslate : "РџР°Р»РѕРјРЅРёРєРё РѕСЃРЅРѕРІР°Р»Рё РѕРґРЅСѓ РёР· РїРµСЂРІС‹С… РєРѕР»РѕРЅРёР№ РІ РЎРѕРµРґРёРЅРµРЅРЅС‹С… РЁС‚Р°С‚Р°С…",
    id                   : 251
  }, {
    word                 : "invest",
    image                : "files/13_0252.jpg",
    audio                : "files/13_0252.mp3",
    audioMeaning         : "files/13_0252_meaning.mp3",
    audioExample         : "files/13_0252_example.mp3",
    textMeaning          : "To invest means to use money in a way that will bring a profit later",
    textExample          : "I invested money in a new building that should bring me a profit",
    transcription        : "[invГ©st]",
    wordTranslate        : "РІРєР»Р°РґС‹РІР°С‚СЊ РґРµРЅСЊРіРё",
    textMeaningTranslate : "РРЅРІРµСЃС‚РёСЂРѕРІР°С‚СЊ РѕР·РЅР°С‡Р°РµС‚ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РґРµРЅСЊРіРё С‚Р°РєРёРј РѕР±СЂР°Р·РѕРј, С‡С‚РѕР±С‹ РїРѕС‚РѕРј РїСЂРёРЅРѕСЃРёС‚СЊ РїСЂРёР±С‹Р»СЊ",
    textExampleTranslate : "РЇ РІР»РѕР¶РёР» РґРµРЅСЊРіРё РІ РЅРѕРІРѕРµ Р·РґР°РЅРёРµ, РєРѕС‚РѕСЂРѕРµ РґРѕР»Р¶РЅРѕ РїСЂРёРЅРѕСЃРёС‚СЊ РјРЅРµ РїСЂРёР±С‹Р»СЊ",
    id                   : 252
  }, {
    word                 : "loan",
    image                : "files/13_0253.jpg",
    audio                : "files/13_0253.mp3",
    audioMeaning         : "files/13_0253_meaning.mp3",
    audioExample         : "files/13_0253_example.mp3",
    textMeaning          : "A loan is something, usually money, that one person lends to another",
    textExample          : "I got a loan from the bank",
    transcription        : "[loun]",
    wordTranslate        : "РєСЂРµРґРёС‚",
    textMeaningTranslate : "РљСЂРµРґРёС‚ - СЌС‚Рѕ, РєР°Рє РїСЂР°РІРёР»Рѕ, РґРµРЅСЊРіРё, РєРѕС‚РѕСЂС‹Рµ РѕРґРёРЅ С‡РµР»РѕРІРµРє РґР°РµС‚ РґСЂСѓРіРѕРјСѓ",
    textExampleTranslate : "РЇ РїРѕР»СѓС‡РёР» РєСЂРµРґРёС‚ РІ Р±Р°РЅРєРµ",
    id                   : 253
  }, {
    word                 : "practical",
    image                : "files/13_0254.jpg",
    audio                : "files/13_0254.mp3",
    audioMeaning         : "files/13_0254_meaning.mp3",
    audioExample         : "files/13_0254_example.mp3",
    textMeaning          : "If something is practical, it is useful",
    textExample          : "Learning English is practical; you can use it in many places",
    transcription        : "[prЗЅktikЙ™l]",
    wordTranslate        : "РїСЂР°РєС‚РёС‡РµСЃРєРёР№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РїСЂР°РєС‚РёС‡РЅРѕ, СЌС‚Рѕ РїРѕР»РµР·РЅРѕ",
    textExampleTranslate : "РР·СѓС‡РµРЅРёРµ Р°РЅРіР»РёР№СЃРєРѕРіРѕ СЏР·С‹РєР° РїСЂР°РєС‚РёС‡РЅРѕ; РІС‹ РјРѕР¶РµС‚Рµ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РµРіРѕ РІРѕ РјРЅРѕРіРёС… СЃС‚Р°С…",
    id                   : 254
  }, {
    word                 : "quarter",
    image                : "files/13_0255.jpg",
    audio                : "files/13_0255.mp3",
    audioMeaning         : "files/13_0255_meaning.mp3",
    audioExample         : "files/13_0255_example.mp3",
    textMeaning          : "A quarter is 1/4 or 25% of something",
    textExample          : "He paid a quarter for the candy",
    transcription        : "[kwЙ”МЃЛђrtЙ™r]",
    wordTranslate        : "РєРІР°СЂС‚Р°Р»",
    textMeaningTranslate : "Р§РµС‚РІРµСЂС‚СЊ СЌС‚Рѕ 1/4 РёР»Рё 25% С‡РµРіРѕ-С‚Рѕ",
    textExampleTranslate : "РћРЅ Р·Р°РїР»Р°С‚РёР» С‡РµС‚РІРµСЂС‚СЊ Р·Р° РєРѕРЅС„РµС‚Сѓ",
    id                   : 255
  }, {
    word                 : "salary",
    image                : "files/13_0256.jpg",
    audio                : "files/13_0256.mp3",
    audioMeaning         : "files/13_0256_meaning.mp3",
    audioExample         : "files/13_0256_example.mp3",
    textMeaning          : "A salary is how much money a person makes at his or her job",
    textExample          : "He got a new job with a better salary",
    transcription        : "[sЗЅlЙ™ri]",
    wordTranslate        : "Р·Р°СЂРїР»Р°С‚Р°",
    textMeaningTranslate : "Р—Р°СЂР°Р±РѕС‚РЅР°СЏ РїР»Р°С‚Р° - СЌС‚Рѕ С‚Рѕ, СЃРєРѕР»СЊРєРѕ С‡РµР»РѕРІРµРє Р·Р°СЂР°Р±Р°С‚С‹РІР°РµС‚ РЅР° СЃРІРѕРµР№ СЂР°Р±РѕС‚Рµ",
    textExampleTranslate : "РћРЅ РїРѕР»СѓС‡РёР» РЅРѕРІСѓСЋ СЂР°Р±РѕС‚Сѓ СЃ Р»СѓС‡С€РµР№ Р·Р°СЂРїР»Р°С‚РѕР№",
    id                   : 256
  }, {
    word                 : "scholarship",
    image                : "files/13_0257.jpg",
    audio                : "files/13_0257.mp3",
    audioMeaning         : "files/13_0257_meaning.mp3",
    audioExample         : "files/13_0257_example.mp3",
    textMeaning          : "A scholarship is money given so someone can go to school",
    textExample          : "I got a scholarship to help me pay for university",
    transcription        : "[skЙ‘МЃlЙ™ЛђrКѓГ¬p]",
    wordTranslate        : "СЃС‚РёРїРµРЅРґРёСЏ",
    textMeaningTranslate : "РЎС‚РёРїРµРЅРґРёСЏ - СЌС‚Рѕ РґРµРЅСЊРіРё, РєРѕС‚РѕСЂС‹Рµ РґР°СЋС‚СЃСЏ, С‡С‚РѕР±С‹ РєС‚Рѕ-С‚Рѕ РјРѕРі РїРѕР№С‚Рё РІ С€РєРѕР»Сѓ",
    textExampleTranslate : "РЇ РїРѕР»СѓС‡РёР» СЃС‚РёРїРµРЅРґРёСЋ, С‡С‚РѕР±С‹ РїРѕРјРѕС‡СЊ РјРЅРµ Р·Р°РїР»Р°С‚РёС‚СЊ Р·Р° СѓРЅРёРІРµСЂСЃРёС‚РµС‚",
    id                   : 257
  }, {
    word                 : "temporary",
    image                : "files/13_0258.jpg",
    audio                : "files/13_0258.mp3",
    audioMeaning         : "files/13_0258_meaning.mp3",
    audioExample         : "files/13_0258_example.mp3",
    textMeaning          : "If something is temporary, it exists for a short time",
    textExample          : "This car is only temporary; IвЂ™ll get a new one soon",
    transcription        : "[tГ©mpЙ™rГЁri]",
    wordTranslate        : "РІСЂРµРјРµРЅРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РІСЂРµРјРµРЅРЅРѕ, РѕРЅРѕ СЃСѓС‰РµСЃС‚РІСѓРµС‚ РЅР° РєРѕСЂРѕС‚РєРѕРµ РІСЂРµРјСЏ",
    textExampleTranslate : "Р­С‚Р° РјР°С€РёРЅР° С‚РѕР»СЊРєРѕ РІСЂРµРјРµРЅРЅР°СЏ; СЃРєРѕСЂРѕ СЏ РїРѕР»СѓС‡Сѓ РЅРѕРІСѓСЋ",
    id                   : 258
  }, {
    word                 : "treasure",
    image                : "files/13_0259.jpg",
    audio                : "files/13_0259.mp3",
    audioMeaning         : "files/13_0259_meaning.mp3",
    audioExample         : "files/13_0259_example.mp3",
    textMeaning          : "A treasure is a collection of valuable things, especially jewels or gold",
    textExample          : "They became very rich when they found the buried treasure",
    transcription        : "[trГ©К’Й™Лђr]",
    wordTranslate        : "СЃРѕРєСЂРѕРІРёС‰Рµ",
    textMeaningTranslate : "РЎРѕРєСЂРѕРІРёС‰Рµ - СЌС‚Рѕ РєРѕР»Р»РµРєС†РёСЏ С†РµРЅРЅС‹С… РІРµС‰РµР№, РѕСЃРѕР±РµРЅРЅРѕ РґСЂР°РіРѕС†РµРЅРЅС‹С… РєР°РјРЅРµР№ РёР»Рё Р·РѕР»РѕС‚Р°",
    textExampleTranslate : "РћРЅРё СЃС‚Р°Р»Рё РѕС‡РµРЅСЊ Р±РѕРіР°С‚С‹РјРё, РєРѕРіРґР° РЅР°С€Р»Рё РєР»Р°Рґ",
    id                   : 259
  }, {
    word                 : "urge",
    image                : "files/13_0260.jpg",
    audio                : "files/13_0260.mp3",
    audioMeaning         : "files/13_0260_meaning.mp3",
    audioExample         : "files/13_0260_example.mp3",
    textMeaning          : "To urge someone is to try very hard to get them to do something",
    textExample          : "He urged them to believe his story",
    transcription        : "[Й™ЛђrdК’]",
    wordTranslate        : "РїРѕР±СѓР¶РґРµРЅРёРµ",
    textMeaningTranslate : "РџСЂРёР·С‹РІР°С‚СЊ РєРѕРіРѕ-С‚Рѕ - СЌС‚Рѕ РѕС‡РµРЅСЊ СЃС‚Р°СЂР°С‚СЊСЃСЏ, С‡С‚РѕР±С‹ Р·Р°СЃС‚Р°РІРёС‚СЊ РµРіРѕ С‡С‚Рѕ-С‚Рѕ СЃРґРµР»Р°С‚СЊ",
    textExampleTranslate : "РћРЅ РїСЂРёР·РІР°Р» РёС… РїРѕРІРµСЂРёС‚СЊ РІ РµРіРѕ РёСЃС‚РѕСЂРёСЋ",
    id                   : 260
  }, {
    word                 : "coach",
    image                : "files/14_0261.jpg",
    audio                : "files/14_0261.mp3",
    audioMeaning         : "files/14_0261_meaning.mp3",
    audioExample         : "files/14_0261_example.mp3",
    textMeaning          : "A coach is a person who teaches sports",
    textExample          : "My coach gets very excited during games",
    transcription        : "[koutКѓ]",
    wordTranslate        : "С‚СЂРµРЅРµСЂ",
    textMeaningTranslate : "РўСЂРµРЅРµСЂ - СЌС‚Рѕ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ РїСЂРµРїРѕРґР°РµС‚ СЃРїРѕСЂС‚",
    textExampleTranslate : "РњРѕР№ С‚СЂРµРЅРµСЂ РѕС‡РµРЅСЊ РІР·РІРѕР»РЅРѕРІР°РЅ РІРѕ РІСЂРµРјСЏ РёРіСЂ",
    id                   : 261
  }, {
    word                 : "control",
    image                : "files/14_0262.jpg",
    audio                : "files/14_0262.mp3",
    audioMeaning         : "files/14_0262_meaning.mp3",
    audioExample         : "files/14_0262_example.mp3",
    textMeaning          : "To control something is to make it do what you want",
    textExample          : "To control the TV, just push the buttons",
    transcription        : "[kЙ™ntrГіul]",
    wordTranslate        : "РєРѕРЅС‚СЂРѕР»СЊ",
    textMeaningTranslate : "РљРѕРЅС‚СЂРѕР»РёСЂРѕРІР°С‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РґРµР»Р°С‚СЊ С‚Рѕ, С‡С‚Рѕ С‚С‹ С…РѕС‡РµС€СЊ",
    textExampleTranslate : "Р§С‚РѕР±С‹ СѓРїСЂР°РІР»СЏС‚СЊ С‚РµР»РµРІРёР·РѕСЂРѕРј, РїСЂРѕСЃС‚Рѕ РЅР°Р¶РёРјР°Р№С‚Рµ РєРЅРѕРїРєРё",
    id                   : 262
  }, {
    word                 : "description",
    image                : "files/14_0263.jpg",
    audio                : "files/14_0263.mp3",
    audioMeaning         : "files/14_0263_meaning.mp3",
    audioExample         : "files/14_0263_example.mp3",
    textMeaning          : "A description of someone or something says what they are like",
    textExample          : "I gave a description of the man with the gun and hat to the police",
    transcription        : "[diskrГ­pКѓЙ™n]",
    wordTranslate        : "РѕРїРёСЃР°РЅРёРµ",
    textMeaningTranslate : "РћРїРёСЃР°РЅРёРµ РєРѕРіРѕ-С‚Рѕ РёР»Рё С‡РµРіРѕ-С‚Рѕ РіРѕРІРѕСЂРёС‚ Рѕ С‚РѕРј, РЅР° С‡С‚Рѕ РѕРЅРё РїРѕС…РѕР¶Рё",
    textExampleTranslate : "РЇ РґР°Р» РѕРїРёСЃР°РЅРёРµ С‡РµР»РѕРІРµРєР° СЃ РїРёСЃС‚РѕР»РµС‚РѕРј Рё С€Р»СЏРїРѕР№ РІ РїРѕР»РёС†РёСЋ",
    id                   : 263
  }, {
    word                 : "direct",
    image                : "files/14_0264.jpg",
    audio                : "files/14_0264.mp3",
    audioMeaning         : "files/14_0264_meaning.mp3",
    audioExample         : "files/14_0264_example.mp3",
    textMeaning          : "If something is direct, it goes straight between two places",
    textExample          : "The green path is a direct route to my house",
    transcription        : "[dirГ©kt]",
    wordTranslate        : "РЅРµРїРѕСЃСЂРµРґСЃС‚РІРµРЅРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РїСЂСЏРјРѕРµ, РѕРЅРѕ РёРґРµС‚ РїСЂСЏРјРѕ РјРµР¶РґСѓ РґРІСѓРјСЏ РјРµСЃС‚Р°РјРё",
    textExampleTranslate : "Р—РµР»РµРЅР°СЏ С‚СЂРѕРїР° - РїСЂСЏРјРѕР№ РїСѓС‚СЊ Рє РјРѕРµРјСѓ РґРѕРјСѓ",
    id                   : 264
  }, {
    word                 : "exam",
    image                : "files/14_0265.jpg",
    audio                : "files/14_0265.mp3",
    audioMeaning         : "files/14_0265_meaning.mp3",
    audioExample         : "files/14_0265_example.mp3",
    textMeaning          : "An exam is a test",
    textExample          : "I did some practice questions for the math exam on the board",
    transcription        : "[igzЗЅm]",
    wordTranslate        : "СЌРєР·Р°РјРµРЅ",
    textMeaningTranslate : "Р­РєР·Р°РјРµРЅ - СЌС‚Рѕ С‚РµСЃС‚",
    textExampleTranslate : "РЇ СЃРґРµР»Р°Р» РЅРµСЃРєРѕР»СЊРєРѕ РїСЂР°РєС‚РёС‡РµСЃРєРёС… РІРѕРїСЂРѕСЃРѕРІ РґР»СЏ СЌРєР·Р°РјРµРЅР° РїРѕ РјР°С‚РµРјР°С‚РёРєРµ РЅР° РґРѕСЃРєРµ",
    id                   : 265
  }, {
    word                 : "example",
    image                : "files/14_0266.jpg",
    audio                : "files/14_0266.mp3",
    audioMeaning         : "files/14_0266_meaning.mp3",
    audioExample         : "files/14_0266_example.mp3",
    textMeaning          : "An example of something is a thing that is typical of it",
    textExample          : "Cola is an example of a soft drink",
    transcription        : "[igzЗЅmpЙ™l]",
    wordTranslate        : "РїСЂРёРјРµСЂ",
    textMeaningTranslate : "РџСЂРёРјРµСЂРѕРј С‡РµРіРѕ-С‚Рѕ СЏРІР»СЏРµС‚СЃСЏ С‚РёРїРёС‡РЅР°СЏ РІРµС‰СЊ",
    textExampleTranslate : "РљРѕР»Р° - РїСЂРёРјРµСЂ Р±РµР·Р°Р»РєРѕРіРѕР»СЊРЅРѕРіРѕ РЅР°РїРёС‚РєР°",
    id                   : 266
  }, {
    word                 : "limit",
    image                : "files/14_0267.jpg",
    audio                : "files/14_0267.mp3",
    audioMeaning         : "files/14_0267_meaning.mp3",
    audioExample         : "files/14_0267_example.mp3",
    textMeaning          : "A limit is the largest or smallest amount of something that you allow",
    textExample          : "My mother put a limit on how much I could use the phone",
    transcription        : "[lГ­mit]",
    wordTranslate        : "РїСЂРµРґРµР»",
    textMeaningTranslate : "Р›РёРјРёС‚ - СЌС‚Рѕ РЅР°РёР±РѕР»СЊС€РµРµ РёР»Рё РЅР°РёРјРµРЅСЊС€РµРµ РєРѕР»РёС‡РµСЃС‚РІРѕ С‚РѕРіРѕ, С‡С‚Рѕ РІС‹ СЂР°Р·СЂРµС€Р°РµС‚Рµ",
    textExampleTranslate : "РњРѕСЏ РјР°РјР° РЅР°Р»РѕР¶РёР»Р° РѕРіСЂР°РЅРёС‡РµРЅРёРµ РЅР° С‚Рѕ, СЃРєРѕР»СЊРєРѕ СЏ РјРѕРі Р±С‹ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ С‚РµР»РµС„РѕРЅ",
    id                   : 267
  }, {
    word                 : "local",
    image                : "files/14_0268.jpg",
    audio                : "files/14_0268.mp3",
    audioMeaning         : "files/14_0268_meaning.mp3",
    audioExample         : "files/14_0268_example.mp3",
    textMeaning          : "If something is local, it is nearby",
    textExample          : "The local market in my neighborhood sells all the food we need",
    transcription        : "[lГіukЙ™l]",
    wordTranslate        : "РјРµСЃС‚РЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ Р»РѕРєР°Р»СЊРЅРѕРµ, РѕРЅРѕ СЂСЏРґРѕРј",
    textExampleTranslate : "РњРµСЃС‚РЅС‹Р№ СЂС‹РЅРѕРє РІ РјРѕРµРј СЂР°Р№РѕРЅРµ РїСЂРѕРґР°РµС‚ РІСЃСЋ РµРґСѓ, РІ РєРѕС‚РѕСЂРѕР№ РјС‹ РЅСѓР¶РґР°РµРјСЃСЏ",
    id                   : 268
  }, {
    word                 : "magical",
    image                : "files/14_0269.jpg",
    audio                : "files/14_0269.mp3",
    audioMeaning         : "files/14_0269_meaning.mp3",
    audioExample         : "files/14_0269_example.mp3",
    textMeaning          : "Magical describes a quality that makes someone or something special",
    textExample          : "The fireworks made the night sky look so magical",
    transcription        : "[mЗЅdК’ikЙ™l]",
    wordTranslate        : "РІРѕР»С€РµР±РЅС‹Р№",
    textMeaningTranslate : "Р’РѕР»С€РµР±СЃС‚РІРѕ РѕРїРёСЃС‹РІР°РµС‚ РєР°С‡РµСЃС‚РІРѕ, РєРѕС‚РѕСЂРѕРµ РґРµР»Р°РµС‚ РєРѕРіРѕ-С‚Рѕ РёР»Рё С‡С‚Рѕ-С‚Рѕ РѕСЃРѕР±РµРЅРЅРѕРµ",
    textExampleTranslate : "Р¤РµР№РµСЂРІРµСЂРє Р·Р°СЃС‚Р°РІРёР» РЅРѕС‡РЅРѕРµ РЅРµР±Рѕ РІС‹РіР»СЏРґРµС‚СЊ С‚Р°РєРёРј РІРѕР»С€РµР±РЅС‹Рј",
    id                   : 269
  }, {
    word                 : "mail",
    image                : "files/14_0270.jpg",
    audio                : "files/14_0270.mp3",
    audioMeaning         : "files/14_0270_meaning.mp3",
    audioExample         : "files/14_0270_example.mp3",
    textMeaning          : "Mail is letters and other things sent to people",
    textExample          : "I get a lot of mail because I have friends all over the world",
    transcription        : "[meil]",
    wordTranslate        : "РїРѕС‡С‚Р°",
    textMeaningTranslate : "РџРѕС‡С‚Р° - СЌС‚Рѕ РїРёСЃСЊРјР° Рё РґСЂСѓРіРёРµ РІРµС‰Рё, РѕС‚РїСЂР°РІР»РµРЅРЅС‹Рµ Р»СЋРґСЏРј",
    textExampleTranslate : "РЇ РїРѕР»СѓС‡Р°СЋ РјРЅРѕРіРѕ РїРѕС‡С‚С‹, РїРѕС‚РѕРјСѓ С‡С‚Рѕ Сѓ РјРµРЅСЏ РµСЃС‚СЊ РґСЂСѓР·СЊСЏ РїРѕ РІСЃРµРјСѓ РјРёСЂСѓ",
    id                   : 270
  }, {
    word                 : "novel",
    image                : "files/14_0271.jpg",
    audio                : "files/14_0271.mp3",
    audioMeaning         : "files/14_0271_meaning.mp3",
    audioExample         : "files/14_0271_example.mp3",
    textMeaning          : "A novel is a book that tells a story",
    textExample          : "He wrote a great novel about ancient China",
    transcription        : "[nЙ‘МЃvЙ™l]",
    wordTranslate        : "СЂРѕРјР°РЅ",
    textMeaningTranslate : "Р РѕРјР°РЅ - СЌС‚Рѕ РєРЅРёРіР°, СЂР°СЃСЃРєР°Р·С‹РІР°СЋС‰Р°СЏ РёСЃС‚РѕСЂРёСЋ",
    textExampleTranslate : "РћРЅ РЅР°РїРёСЃР°Р» РІРµР»РёРєРёР№ СЂРѕРјР°РЅ Рѕ РґСЂРµРІРЅРµРј РљРёС‚Р°Рµ",
    id                   : 271
  }, {
    word                 : "outline",
    image                : "files/14_0272.jpg",
    audio                : "files/14_0272.mp3",
    audioMeaning         : "files/14_0272_meaning.mp3",
    audioExample         : "files/14_0272_example.mp3",
    textMeaning          : "An outline is the plan for a story or essay",
    textExample          : "Before I wrote my essay, I made an outline",
    transcription        : "[ГЎutlГ in]",
    wordTranslate        : "РєРѕРЅС‚СѓСЂ",
    textMeaningTranslate : "РџР»Р°РЅ - СЌС‚Рѕ РїР»Р°РЅ РёСЃС‚РѕСЂРёРё РёР»Рё СЌСЃСЃРµ",
    textExampleTranslate : "РџСЂРµР¶РґРµ С‡РµРј СЏ РЅР°РїРёСЃР°Р» СЃРІРѕРµ СЌСЃСЃРµ, СЏ СЃРґРµР»Р°Р» РЅР°Р±СЂРѕСЃРѕРє",
    id                   : 272
  }, {
    word                 : "poet",
    image                : "files/14_0273.jpg",
    audio                : "files/14_0273.mp3",
    audioMeaning         : "files/14_0273_meaning.mp3",
    audioExample         : "files/14_0273_example.mp3",
    textMeaning          : "A poet is a person who writes poems",
    textExample          : "William Shakespeare was one of the greatest poets",
    transcription        : "[pГіuit]",
    wordTranslate        : "РїРѕСЌС‚",
    textMeaningTranslate : "РџРѕСЌС‚ - СЌС‚Рѕ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ РїРёС€РµС‚ СЃС‚РёС…Рё",
    textExampleTranslate : "РЈРёР»СЊСЏРј РЁРµРєСЃРїРёСЂ Р±С‹Р» РѕРґРЅРёРј РёР· РІРµР»РёС‡Р°Р№С€РёС… РїРѕСЌС‚РѕРІ",
    id                   : 273
  }, {
    word                 : "print",
    image                : "files/14_0274.jpg",
    audio                : "files/14_0274.mp3",
    audioMeaning         : "files/14_0274_meaning.mp3",
    audioExample         : "files/14_0274_example.mp3",
    textMeaning          : "To print something is to put it onto paper",
    textExample          : "Make sure that you print your name clearly",
    transcription        : "[print]",
    wordTranslate        : "СЂР°СЃРїРµС‡Р°С‚Р°С‚СЊ",
    textMeaningTranslate : "РќР°РїРµС‡Р°С‚Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РїРѕР»РѕР¶РёС‚СЊ СЌС‚Рѕ РЅР° Р±СѓРјР°РіСѓ",
    textExampleTranslate : "РЈР±РµРґРёС‚РµСЃСЊ, С‡С‚Рѕ РІС‹ РїРµС‡Р°С‚Р°РµС‚Рµ СЃРІРѕРµ РёРјСЏ С‡РµС‚РєРѕ",
    id                   : 274
  }, {
    word                 : "scene",
    image                : "files/14_0275.jpg",
    audio                : "files/14_0275.mp3",
    audioMeaning         : "files/14_0275_meaning.mp3",
    audioExample         : "files/14_0275_example.mp3",
    textMeaning          : "A scene is one part of a book or movie",
    textExample          : "A movie is made up of many short pieces or scenes",
    transcription        : "[siЛђn]",
    wordTranslate        : "СЃС†РµРЅР°",
    textMeaningTranslate : "РЎС†РµРЅР° - СЌС‚Рѕ РѕРґРЅР° С‡Р°СЃС‚СЊ РєРЅРёРіРё РёР»Рё С„РёР»СЊРјР°",
    textExampleTranslate : "Р¤РёР»СЊРј СЃРѕСЃС‚РѕРёС‚ РёР· РјРЅРѕР¶РµСЃС‚РІР° РєРѕСЂРѕС‚РєРёС… РїСЊРµСЃ РёР»Рё СЃС†РµРЅ",
    id                   : 275
  }, {
    word                 : "sheet",
    image                : "files/14_0276.jpg",
    audio                : "files/14_0276.mp3",
    audioMeaning         : "files/14_0276_meaning.mp3",
    audioExample         : "files/14_0276_example.mp3",
    textMeaning          : "A sheet is a thin flat piece of paper",
    textExample          : "I only needed a single sheet of paper to do my homework",
    transcription        : "[КѓiЛђt]",
    wordTranslate        : "Р»РёСЃС‚",
    textMeaningTranslate : "Р›РёСЃС‚ - СЌС‚Рѕ С‚РѕРЅРєРёР№ РїР»РѕСЃРєРёР№ Р»РёСЃС‚ Р±СѓРјР°РіРё",
    textExampleTranslate : "РњРЅРµ РЅСѓР¶РµРЅ Р±С‹Р» С‚РѕР»СЊРєРѕ РѕРґРёРЅ Р»РёСЃС‚ Р±СѓРјР°РіРё, С‡С‚РѕР±С‹ СЃРґРµР»Р°С‚СЊ РґРѕРјР°С€РЅРµРµ Р·Р°РґР°РЅРёРµ",
    id                   : 276
  }, {
    word                 : "silly",
    image                : "files/14_0277.jpg",
    audio                : "files/14_0277.mp3",
    audioMeaning         : "files/14_0277_meaning.mp3",
    audioExample         : "files/14_0277_example.mp3",
    textMeaning          : "People who are silly show a lack of serious thought",
    textExample          : "I made a silly mistake of dropping momвЂ™s vase",
    transcription        : "[sГ­li]",
    wordTranslate        : "РіР»СѓРїС‹Р№",
    textMeaningTranslate : "Р“Р»СѓРїС‹Рµ Р»СЋРґРё РїРѕРєР°Р·С‹РІР°СЋС‚ РѕС‚СЃСѓС‚СЃС‚РІРёРµ СЃРµСЂСЊРµР·РЅС‹С… РјС‹СЃР»РµР№",
    textExampleTranslate : "РЇ СЃРґРµР»Р°Р» РіР»СѓРїСѓСЋ РѕС€РёР±РєСѓ, СѓСЂРѕРЅРёРІ РјР°РјРёРЅСѓ РІР°Р·Сѓ",
    id                   : 277
  }, {
    word                 : "store",
    image                : "files/14_0278.jpg",
    audio                : "files/14_0278.mp3",
    audioMeaning         : "files/14_0278_meaning.mp3",
    audioExample         : "files/14_0278_example.mp3",
    textMeaning          : "A store is a place where you can buy things",
    textExample          : "I picked up a few things at the grocery store",
    transcription        : "[stЙ”Лђr]",
    wordTranslate        : "С…СЂР°РЅРёС‚СЊ",
    textMeaningTranslate : "РњР°РіР°Р·РёРЅ - СЌС‚Рѕ РјРµСЃС‚Рѕ, РіРґРµ РјРѕР¶РЅРѕ РєСѓРїРёС‚СЊ РІРµС‰Рё",
    textExampleTranslate : "РЇ РІР·СЏР» РЅРµСЃРєРѕР»СЊРєРѕ РІРµС‰РµР№ РІ РїСЂРѕРґСѓРєС‚РѕРІРѕРј РјР°РіР°Р·РёРЅРµ",
    id                   : 278
  }, {
    word                 : "suffer",
    image                : "files/14_0279.jpg",
    audio                : "files/14_0279.mp3",
    audioMeaning         : "files/14_0279_meaning.mp3",
    audioExample         : "files/14_0279_example.mp3",
    textMeaning          : "To suffer is to feel pain",
    textExample          : "Her headache made her suffer all day",
    transcription        : "[sКЊМЃfЙ™r]",
    wordTranslate        : "СЃС‚СЂР°РґР°С‚СЊ",
    textMeaningTranslate : "РЎС‚СЂР°РґР°С‚СЊ - Р·РЅР°С‡РёС‚ С‡СѓРІСЃС‚РІРѕРІР°С‚СЊ Р±РѕР»СЊ",
    textExampleTranslate : "Р•Рµ РіРѕР»РѕРІРЅР°СЏ Р±РѕР»СЊ Р·Р°СЃС‚Р°РІР»СЏР»Р° РµРµ СЃС‚СЂР°РґР°С‚СЊ РІРµСЃСЊ РґРµРЅСЊ",
    id                   : 279
  }, {
    word                 : "technology",
    image                : "files/14_0280.jpg",
    audio                : "files/14_0280.mp3",
    audioMeaning         : "files/14_0280_meaning.mp3",
    audioExample         : "files/14_0280_example.mp3",
    textMeaning          : "Technology is new things made by using science",
    textExample          : "He loves technology such as laptop computers",
    transcription        : "[teknЙ‘МЃlЙ™dК’i]",
    wordTranslate        : "С‚РµС…РЅРѕР»РѕРіРёРё",
    textMeaningTranslate : "РўРµС…РЅРѕР»РѕРіРёСЏ - СЌС‚Рѕ РЅРѕРІС‹Рµ РІРµС‰Рё, СЃРѕР·РґР°РЅРЅС‹Рµ СЃ РїРѕРјРѕС‰СЊСЋ РЅР°СѓРєРё",
    textExampleTranslate : "РћРЅ Р»СЋР±РёС‚ С‚Р°РєРёРµ С‚РµС…РЅРѕР»РѕРіРёРё, РєР°Рє РЅРѕСѓС‚Р±СѓРєРё",
    id                   : 280
  }, {
    word                 : "across",
    image                : "files/15_0281.jpg",
    audio                : "files/15_0281.mp3",
    audioMeaning         : "files/15_0281_meaning.mp3",
    audioExample         : "files/15_0281_example.mp3",
    textMeaning          : "To go across something is to go to the other side of it",
    textExample          : "He walked across the board to the other side",
    transcription        : "[Й™krЙ”МЃЛђs]",
    wordTranslate        : "С‡РµСЂРµР·",
    textMeaningTranslate : "РџРµСЂРµСЃРµС‡СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РїРµСЂРµР№С‚Рё РЅР° РґСЂСѓРіСѓСЋ СЃС‚РѕСЂРѕРЅСѓ",
    textExampleTranslate : "РћРЅ РїСЂРѕС€РµР» С‡РµСЂРµР· РґРѕСЃРєСѓ РЅР° РґСЂСѓРіСѓСЋ СЃС‚РѕСЂРѕРЅСѓ",
    id                   : 281
  }, {
    word                 : "breathe",
    image                : "files/15_0282.jpg",
    audio                : "files/15_0282.mp3",
    audioMeaning         : "files/15_0282_meaning.mp3",
    audioExample         : "files/15_0282_example.mp3",
    textMeaning          : "To breathe means to let air go in and out of your body",
    textExample          : "We need strong healthy lungs to help us breathe well",
    transcription        : "[briЛђГ°]",
    wordTranslate        : "РґС‹С€Р°С‚СЊ",
    textMeaningTranslate : "Р”С‹С€Р°С‚СЊ - Р·РЅР°С‡РёС‚ РїРѕР·РІРѕР»СЏС‚СЊ РІРѕР·РґСѓС…Сѓ РІС…РѕРґРёС‚СЊ Рё РІС‹С…РѕРґРёС‚СЊ РёР· РІР°С€РµРіРѕ С‚РµР»Р°",
    textExampleTranslate : "РќР°Рј РЅСѓР¶РЅС‹ РєСЂРµРїРєРёРµ Р·РґРѕСЂРѕРІС‹Рµ Р»РµРіРєРёРµ, С‡С‚РѕР±С‹ РјС‹ РјРѕРіР»Рё С…РѕСЂРѕС€Рѕ РґС‹С€Р°С‚СЊ",
    id                   : 282
  }, {
    word                 : "characteristic",
    image                : "files/15_0283.jpg",
    audio                : "files/15_0283.mp3",
    audioMeaning         : "files/15_0283_meaning.mp3",
    audioExample         : "files/15_0283_example.mp3",
    textMeaning          : "A characteristic is something that shows what a person or a thing is like",
    textExample          : "One characteristic of tigers is their black stripes",
    transcription        : "[kГ¦МЂriktЙ™rГ­stik]",
    wordTranslate        : "С…Р°СЂР°РєС‚РµСЂРёСЃС‚РёРєР°",
    textMeaningTranslate : "РҐР°СЂР°РєС‚РµСЂРёСЃС‚РёРєР° - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ РїРѕРєР°Р·С‹РІР°РµС‚, РЅР° С‡С‚Рѕ РїРѕС…РѕР¶ С‡РµР»РѕРІРµРє РёР»Рё РІРµС‰СЊ",
    textExampleTranslate : "РћРґРЅР° РёР· С…Р°СЂР°РєС‚РµСЂРёСЃС‚РёРє С‚РёРіСЂРѕРІ - РёС… С‡РµСЂРЅС‹Рµ РїРѕР»РѕСЃС‹",
    id                   : 283
  }, {
    word                 : "consume",
    image                : "files/15_0284.jpg",
    audio                : "files/15_0284.mp3",
    audioMeaning         : "files/15_0284_meaning.mp3",
    audioExample         : "files/15_0284_example.mp3",
    textMeaning          : "To consume something means to eat or drink it",
    textExample          : "Jack consumed a whole plate of spaghetti",
    transcription        : "[kЙ™nsГєЛђm]",
    wordTranslate        : "РїРѕС‚СЂРµР±Р»СЏС‚СЊ",
    textMeaningTranslate : "РџРѕС‚СЂРµР±Р»СЏС‚СЊ С‡С‚Рѕ-Р»РёР±Рѕ - Р·РЅР°С‡РёС‚ РµСЃС‚СЊ РёР»Рё РїРёС‚СЊ",
    textExampleTranslate : "Р”Р¶РµРє СЃСЉРµР» С†РµР»СѓСЋ С‚Р°СЂРµР»РєСѓ СЃРїР°РіРµС‚С‚Рё",
    id                   : 284
  }, {
    word                 : "excite",
    image                : "files/15_0285.jpg",
    audio                : "files/15_0285.mp3",
    audioMeaning         : "files/15_0285_meaning.mp3",
    audioExample         : "files/15_0285_example.mp3",
    textMeaning          : "To excite someone means to make them happy and interested",
    textExample          : "I heard about the school dance on Friday. This excited me",
    transcription        : "[iksГЎit]",
    wordTranslate        : "РІРѕР·Р±СѓР¶РґР°С‚СЊ",
    textMeaningTranslate : "Р’Р·РІРѕР»РЅРѕРІР°С‚СЊ РєРѕРіРѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ СЃРґРµР»Р°С‚СЊ РµРіРѕ СЃС‡Р°СЃС‚Р»РёРІС‹Рј Рё Р·Р°РёРЅС‚РµСЂРµСЃРѕРІР°РЅРЅС‹Рј",
    textExampleTranslate : "РЇ СЃР»С‹С€Р°Р» Рѕ С€РєРѕР»СЊРЅРѕРј С‚Р°РЅС†Рµ РІ РїСЏС‚РЅРёС†Сѓ. Р­С‚Рѕ РІР·РІРѕР»РЅРѕРІР°Р»Рѕ РјРµРЅСЏ",
    id                   : 285
  }, {
    word                 : "extremely",
    image                : "files/15_0286.jpg",
    audio                : "files/15_0286.mp3",
    audioMeaning         : "files/15_0286_meaning.mp3",
    audioExample         : "files/15_0286_example.mp3",
    textMeaning          : "If something is extremely good, it is very, very good",
    textExample          : "I was extremely worried about him",
    transcription        : "[ikstrГ­Лђm]",
    wordTranslate        : "С‡СЂРµР·РІС‹С‡Р°Р№РЅРѕ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РѕС‡РµРЅСЊ С…РѕСЂРѕС€Рѕ, СЌС‚Рѕ РѕС‡РµРЅСЊ, РѕС‡РµРЅСЊ С…РѕСЂРѕС€Рѕ",
    textExampleTranslate : "РЇ РѕС‡РµРЅСЊ РїРµСЂРµР¶РёРІР°Р» Р·Р° РЅРµРіРѕ",
    id                   : 286
  }, {
    word                 : "fear",
    image                : "files/15_0287.jpg",
    audio                : "files/15_0287.mp3",
    audioMeaning         : "files/15_0287_meaning.mp3",
    audioExample         : "files/15_0287_example.mp3",
    textMeaning          : "Fear is the feeling of being afraid",
    textExample          : "I have a great fear of skateboarding",
    transcription        : "[fГ­Й™r]",
    wordTranslate        : "СЃС‚СЂР°С…",
    textMeaningTranslate : "РЎС‚СЂР°С… - СЌС‚Рѕ С‡СѓРІСЃС‚РІРѕ СЃС‚СЂР°С…Р°",
    textExampleTranslate : "РЇ РѕС‡РµРЅСЊ Р±РѕСЋСЃСЊ РєР°С‚Р°С‚СЊСЃСЏ РЅР° СЃРєРµР№С‚Р±РѕСЂРґРµ",
    id                   : 287
  }, {
    word                 : "fortunate",
    image                : "files/15_0288.jpg",
    audio                : "files/15_0288.mp3",
    audioMeaning         : "files/15_0288_meaning.mp3",
    audioExample         : "files/15_0288_example.mp3",
    textMeaning          : "If you are fortunate, you are lucky",
    textExample          : "I was fortunate to get a seat",
    transcription        : "[fЙ”МЃЛђrtКѓЙ™nit]",
    wordTranslate        : "РїРѕРІРµР·Р»Рѕ",
    textMeaningTranslate : "Р•СЃР»Рё РІР°Рј РїРѕРІРµР·Р»Рѕ, РІР°Рј РїРѕРІРµР·Р»Рѕ",
    textExampleTranslate : "РњРЅРµ РїРѕРІРµР·Р»Рѕ РїРѕР»СѓС‡РёС‚СЊ РјРµСЃС‚Рѕ",
    id                   : 288
  }, {
    word                 : "happen",
    image                : "files/15_0289.jpg",
    audio                : "files/15_0289.mp3",
    audioMeaning         : "files/15_0289_meaning.mp3",
    audioExample         : "files/15_0289_example.mp3",
    textMeaning          : "If someone happens to do something, he or she does it by chance",
    textExample          : "I happened to meet some new friends at school today",
    transcription        : "[hЗЅpЙ™n]",
    wordTranslate        : "СЃР»СѓС‡РёС‚СЊСЃСЏ",
    textMeaningTranslate : "Р•СЃР»Рё РєС‚Рѕ-С‚Рѕ С‡С‚Рѕ-С‚Рѕ РґРµР»Р°РµС‚, РѕРЅ РёР»Рё РѕРЅР° РґРµР»Р°СЋС‚ СЌС‚Рѕ СЃР»СѓС‡Р°Р№РЅРѕ",
    textExampleTranslate : "РЇ СЃР»СѓС‡Р°Р№РЅРѕ РІСЃС‚СЂРµС‚РёР» РІ С€РєРѕР»Рµ РЅРѕРІС‹С… РґСЂСѓР·РµР№",
    id                   : 289
  }, {
    word                 : "length",
    image                : "files/15_0290.jpg",
    audio                : "files/15_0290.mp3",
    audioMeaning         : "files/15_0290_meaning.mp3",
    audioExample         : "files/15_0290_example.mp3",
    textMeaning          : "The length of something is how long it is from one end to the other",
    textExample          : "The length of the floor is three meters",
    transcription        : "[leЕ‹kОё]",
    wordTranslate        : "РґР»РёРЅР°",
    textMeaningTranslate : "Р”Р»РёРЅР° С‡РµРіРѕ-С‚Рѕ - СЌС‚Рѕ РєР°Рє РґРѕР»РіРѕ СЌС‚Рѕ РѕС‚ РѕРґРЅРѕРіРѕ РєРѕРЅС†Р° РґРѕ РґСЂСѓРіРѕРіРѕ",
    textExampleTranslate : "Р”Р»РёРЅР° РїРѕР»Р° С‚СЂРё РјРµС‚СЂР°",
    id                   : 290
  }, {
    word                 : "mistake",
    image                : "files/15_0291.jpg",
    audio                : "files/15_0291.mp3",
    audioMeaning         : "files/15_0291_meaning.mp3",
    audioExample         : "files/15_0291_example.mp3",
    textMeaning          : "A mistake is something you do wrong",
    textExample          : "My boss always yells at me when I make a mistake",
    transcription        : "[mistГ©ik]",
    wordTranslate        : "РѕС€РёР±РєР°",
    textMeaningTranslate : "РћС€РёР±РєР° - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ РІС‹ РґРµР»Р°РµС‚Рµ РЅРµРїСЂР°РІРёР»СЊРЅРѕ",
    textExampleTranslate : "РњРѕР№ РЅР°С‡Р°Р»СЊРЅРёРє РІСЃРµРіРґР° РєСЂРёС‡РёС‚ РЅР° РјРµРЅСЏ, РєРѕРіРґР° СЏ СЃРѕРІРµСЂС€Р°СЋ РѕС€РёР±РєСѓ",
    id                   : 291
  }, {
    word                 : "observe",
    image                : "files/15_0292.jpg",
    audio                : "files/15_0292.mp3",
    audioMeaning         : "files/15_0292_meaning.mp3",
    audioExample         : "files/15_0292_example.mp3",
    textMeaning          : "To observe something is to watch it",
    textExample          : "Brian observed the sun rising over the mountains",
    transcription        : "[Й™bzЙ™МЃЛђrv]",
    wordTranslate        : "РЅР°Р±Р»СЋРґР°С‚СЊ",
    textMeaningTranslate : "РќР°Р±Р»СЋРґР°С‚СЊ Р·Р° С‡РµРј-С‚Рѕ - СЌС‚Рѕ РЅР°Р±Р»СЋРґР°С‚СЊ Р·Р° СЌС‚РёРј",
    textExampleTranslate : "Р‘СЂР°Р№Р°РЅ РЅР°Р±Р»СЋРґР°Р», РєР°Рє СЃРѕР»РЅС†Рµ РїРѕРґРЅРёРјР°РµС‚СЃСЏ РЅР°Рґ РіРѕСЂР°РјРё",
    id                   : 292
  }, {
    word                 : "opportunity",
    image                : "files/15_0293.jpg",
    audio                : "files/15_0293.mp3",
    audioMeaning         : "files/15_0293_meaning.mp3",
    audioExample         : "files/15_0293_example.mp3",
    textMeaning          : "An opportunity is a chance to do something",
    textExample          : "I had an opportunity to take pictures in the jungle",
    transcription        : "[бЅ°pЙ™rtjГєЛђnЙ™ti]",
    wordTranslate        : "РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ",
    textMeaningTranslate : "Р’РѕР·РјРѕР¶РЅРѕСЃС‚СЊ - СЌС‚Рѕ С€Р°РЅСЃ С‡С‚Рѕ-С‚Рѕ СЃРґРµР»Р°С‚СЊ",
    textExampleTranslate : "РЈ РјРµРЅСЏ Р±С‹Р»Р° РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ С„РѕС‚РѕРіСЂР°С„РёСЂРѕРІР°С‚СЊСЃСЏ РІ РґР¶СѓРЅРіР»СЏС…",
    id                   : 293
  }, {
    word                 : "prize",
    image                : "files/15_0294.jpg",
    audio                : "files/15_0294.mp3",
    audioMeaning         : "files/15_0294_meaning.mp3",
    audioExample         : "files/15_0294_example.mp3",
    textMeaning          : "A prize is something of value that is given to the winner",
    textExample          : "I won a prize for getting the best grade on my science test",
    transcription        : "[praiz]",
    wordTranslate        : "РїСЂРёР·",
    textMeaningTranslate : "РџСЂРёР· - СЌС‚Рѕ РЅРµС‡С‚Рѕ С†РµРЅРЅРѕРµ, С‡С‚Рѕ РґР°РµС‚СЃСЏ РїРѕР±РµРґРёС‚РµР»СЋ",
    textExampleTranslate : "РЇ РІС‹РёРіСЂР°Р» РїСЂРёР· Р·Р° Р»СѓС‡С€РёР№ СЂРµР·СѓР»СЊС‚Р°С‚ РІ РјРѕРµРј РЅР°СѓС‡РЅРѕРј С‚РµСЃС‚Рµ",
    id                   : 294
  }, {
    word                 : "race",
    image                : "files/15_0295.jpg",
    audio                : "files/15_0295.mp3",
    audioMeaning         : "files/15_0295_meaning.mp3",
    audioExample         : "files/15_0295_example.mp3",
    textMeaning          : "A race is a contest to see who is the fastest",
    textExample          : "Paul is a fast runner, so he easily won the race",
    transcription        : "[reis]",
    wordTranslate        : "РіРѕРЅРєР°",
    textMeaningTranslate : "Р“РѕРЅРєР° - СЌС‚Рѕ СЃРѕСЂРµРІРЅРѕРІР°РЅРёРµ, С‡С‚РѕР±С‹ СѓРІРёРґРµС‚СЊ, РєС‚Рѕ СЃР°РјС‹Р№ Р±С‹СЃС‚СЂС‹Р№",
    textExampleTranslate : "РџРѕР» - Р±С‹СЃС‚СЂС‹Р№ Р±РµРіСѓРЅ, РїРѕСЌС‚РѕРјСѓ РѕРЅ Р»РµРіРєРѕ РІС‹РёРіСЂР°Р» РіРѕРЅРєСѓ",
    id                   : 295
  }, {
    word                 : "realize",
    image                : "files/15_0296.jpg",
    audio                : "files/15_0296.mp3",
    audioMeaning         : "files/15_0296_meaning.mp3",
    audioExample         : "files/15_0296_example.mp3",
    textMeaning          : "To realize is to suddenly understand",
    textExample          : "After I left my house, I realized that I left the light on",
    transcription        : "[rГ­ЛђЙ™lГ iz]",
    wordTranslate        : "РїРѕРЅРёРјР°С‚СЊ",
    textMeaningTranslate : "РћСЃРѕР·РЅР°С‚СЊ - Р·РЅР°С‡РёС‚ РІРЅРµР·Р°РїРЅРѕ РїРѕРЅСЏС‚СЊ",
    textExampleTranslate : "РџРѕСЃР»Рµ С‚РѕРіРѕ, РєР°Рє СЏ РІС‹С€РµР» РёР· РґРѕРјР°, СЏ РїРѕРЅСЏР», С‡С‚Рѕ СЏ РѕСЃС‚Р°РІРёР» СЃРІРµС‚ РІРєР»СЋС‡РµРЅРЅС‹Рј",
    id                   : 296
  }, {
    word                 : "respond",
    image                : "files/15_0297.jpg",
    audio                : "files/15_0297.mp3",
    audioMeaning         : "files/15_0297_meaning.mp3",
    audioExample         : "files/15_0297_example.mp3",
    textMeaning          : "To respond is to give an answer to what someone else said",
    textExample          : "When the teacher asked the question, we all responded",
    transcription        : "[rispЙ‘МЃnd]",
    wordTranslate        : "РѕС‚РІРµС‡Р°С‚СЊ",
    textMeaningTranslate : "РћС‚РІРµС‚РёС‚СЊ - СЌС‚Рѕ РґР°С‚СЊ РѕС‚РІРµС‚ РЅР° С‚Рѕ, С‡С‚Рѕ СЃРєР°Р·Р°Р» РєС‚Рѕ-С‚Рѕ РґСЂСѓРіРѕР№",
    textExampleTranslate : "РљРѕРіРґР° СѓС‡РёС‚РµР»СЊ Р·Р°РґР°Р» РІРѕРїСЂРѕСЃ, РјС‹ РІСЃРµ РѕС‚РІРµС‚РёР»Рё",
    id                   : 297
  }, {
    word                 : "risk",
    image                : "files/15_0298.jpg",
    audio                : "files/15_0298.mp3",
    audioMeaning         : "files/15_0298_meaning.mp3",
    audioExample         : "files/15_0298_example.mp3",
    textMeaning          : "A risk is a chance of something bad happening",
    textExample          : "I took a risk and climbed the snowy mountain",
    transcription        : "[risk]",
    wordTranslate        : "СЂРёСЃРє",
    textMeaningTranslate : "Р РёСЃРє - СЌС‚Рѕ С€Р°РЅСЃ РЅР° С‡С‚Рѕ-С‚Рѕ РїР»РѕС…РѕРµ",
    textExampleTranslate : "РЇ СЂРёСЃРєРЅСѓР» Рё РїРѕРґРЅСЏР»СЃСЏ РЅР° СЃРЅРµР¶РЅСѓСЋ РіРѕСЂСѓ",
    id                   : 298
  }, {
    word                 : "wonder",
    image                : "files/15_0299.jpg",
    audio                : "files/15_0299.mp3",
    audioMeaning         : "files/15_0299_meaning.mp3",
    audioExample         : "files/15_0299_example.mp3",
    textMeaning          : "To wonder is to ask yourself questions or have a need to know",
    textExample          : "The young mother wondered if sheвЂ™d have a boy or a girl",
    transcription        : "[wКЊМЃndЙ™Лђr]",
    wordTranslate        : "Р·Р°РґР°РІР°С‚СЊСЃСЏ РІРѕРїСЂРѕСЃРѕРј",
    textMeaningTranslate : "Р—Р°РґР°С‚СЊСЃСЏ РІРѕРїСЂРѕСЃРѕРј - СЌС‚Рѕ Р·Р°РґР°РІР°С‚СЊ СЃРµР±Рµ РІРѕРїСЂРѕСЃС‹ РёР»Рё РёРјРµС‚СЊ РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚СЊ Р·РЅР°С‚СЊ",
    textExampleTranslate : "РњРѕР»РѕРґР°СЏ РјР°С‚СЊ Р·Р°РґР°Р»Р°СЃСЊ РІРѕРїСЂРѕСЃРѕРј, Р±СѓРґРµС‚ Р»Рё Сѓ РЅРµРµ РјР°Р»СЊС‡РёРє РёР»Рё РґРµРІРѕС‡РєР°",
    id                   : 299
  }, {
    word                 : "yet",
    image                : "files/15_0300.jpg",
    audio                : "files/15_0300.mp3",
    audioMeaning         : "files/15_0300_meaning.mp3",
    audioExample         : "files/15_0300_example.mp3",
    textMeaning          : "Yet is used to say something has not happened up to now",
    textExample          : "We canвЂ™t go out yet; weвЂ™re still eating",
    transcription        : "[jet]",
    wordTranslate        : "РµС‰Рµ",
    textMeaningTranslate : "РўРµРј РЅРµ РјРµРЅРµРµ, РіРѕРІРѕСЂСЏС‚, С‡С‚Рѕ РґРѕ СЃРёС… РїРѕСЂ РЅРёС‡РµРіРѕ РЅРµ РїСЂРѕРёР·РѕС€Р»Рѕ",
    textExampleTranslate : "РњС‹ РµС‰Рµ РЅРµ РјРѕР¶РµРј РІС‹Р№С‚Рё; РјС‹ РІСЃРµ РµС‰Рµ РµРґРёРј",
    id                   : 300
  }, {
    word                 : "art",
    image                : "files/16_0301.jpg",
    audio                : "files/16_0301.mp3",
    audioMeaning         : "files/16_0301_meaning.mp3",
    audioExample         : "files/16_0301_example.mp3",
    textMeaning          : "Art is something creative that expresses ideas and feelings",
    textExample          : "My sister likes to look at the art in the museum",
    transcription        : "[Й‘Лђrt]",
    wordTranslate        : "РёР·РѕР±СЂР°Р·РёС‚РµР»СЊРЅРѕРµ РёСЃРєСѓСЃСЃС‚РІРѕ",
    textMeaningTranslate : "РСЃРєСѓСЃСЃС‚РІРѕ - СЌС‚Рѕ РЅРµС‡С‚Рѕ С‚РІРѕСЂС‡РµСЃРєРѕРµ, РІС‹СЂР°Р¶Р°СЋС‰РµРµ РёРґРµРё Рё С‡СѓРІСЃС‚РІР°",
    textExampleTranslate : "РњРѕСЏ СЃРµСЃС‚СЂР° Р»СЋР±РёС‚ СЃРјРѕС‚СЂРµС‚СЊ РЅР° РёСЃРєСѓСЃСЃС‚РІРѕ РІ РјСѓР·РµРµ",
    id                   : 301
  }, {
    word                 : "book",
    image                : "files/16_0302.jpg",
    audio                : "files/16_0302.mp3",
    audioMeaning         : "files/16_0302_meaning.mp3",
    audioExample         : "files/16_0302_example.mp3",
    textMeaning          : "A book is a set of printed sheets of paper that are held together inside a cover",
    textExample          : "The man smiles as he reads his favorite book",
    transcription        : "[buk]",
    wordTranslate        : "РєРЅРёРіР°",
    textMeaningTranslate : "РљРЅРёРіР° - СЌС‚Рѕ РЅР°Р±РѕСЂ РїРµС‡Р°С‚РЅС‹С… Р»РёСЃС‚РѕРІ Р±СѓРјР°РіРё, РєРѕС‚РѕСЂС‹Рµ СЃРєСЂРµРїР»РµРЅС‹ РІРЅСѓС‚СЂРё РѕР±Р»РѕР¶РєРё",
    textExampleTranslate : "Р§РµР»РѕРІРµРє СѓР»С‹Р±Р°РµС‚СЃСЏ, С‡РёС‚Р°СЏ СЃРІРѕСЋ Р»СЋР±РёРјСѓСЋ РєРЅРёРіСѓ",
    id                   : 302
  }, {
    word                 : "clothes",
    image                : "files/16_0303.jpg",
    audio                : "files/16_0303.mp3",
    audioMeaning         : "files/16_0303_meaning.mp3",
    audioExample         : "files/16_0303_example.mp3",
    textMeaning          : "Clothes are what people wear to cover their bodies",
    textExample          : "I bought warm clothes for the cold winter",
    transcription        : "[klouz]",
    wordTranslate        : "РѕРґРµР¶РґР°",
    textMeaningTranslate : "РћРґРµР¶РґР° - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ Р»СЋРґРё РЅРѕСЃСЏС‚, С‡С‚РѕР±С‹ РїРѕРєСЂС‹С‚СЊ СЃРІРѕРµ С‚РµР»Рѕ",
    textExampleTranslate : "РЇ РєСѓРїРёР» С‚РµРїР»СѓСЋ РѕРґРµР¶РґСѓ РґР»СЏ С…РѕР»РѕРґРЅРѕР№ Р·РёРјС‹",
    id                   : 303
  }, {
    word                 : "community",
    image                : "files/16_0304.jpg",
    audio                : "files/16_0304.mp3",
    audioMeaning         : "files/16_0304_meaning.mp3",
    audioExample         : "files/16_0304_example.mp3",
    textMeaning          : "A community is a group of people who share the same area or interests",
    textExample          : "The community got together to plant trees",
    transcription        : "[kЙ™mjГєЛђnЙ™ti]",
    wordTranslate        : "СЃРѕРѕР±С‰РµСЃС‚РІРѕ",
    textMeaningTranslate : "РЎРѕРѕР±С‰РµСЃС‚РІРѕ - СЌС‚Рѕ РіСЂСѓРїРїР° Р»СЋРґРµР№, РєРѕС‚РѕСЂС‹Рµ СЂР°Р·РґРµР»СЏСЋС‚ РѕРґРЅСѓ РѕР±Р»Р°СЃС‚СЊ РёР»Рё РёРЅС‚РµСЂРµСЃС‹",
    textExampleTranslate : "РћР±С‰РёРЅР° СЃРѕР±СЂР°Р»Р°СЃСЊ СЃР°Р¶Р°С‚СЊ РґРµСЂРµРІСЊСЏ",
    id                   : 304
  }, {
    word                 : "December",
    image                : "files/16_0305.jpg",
    audio                : "files/16_0305.mp3",
    audioMeaning         : "files/16_0305_meaning.mp3",
    audioExample         : "files/16_0305_example.mp3",
    textMeaning          : "December is the twelfth month of the year",
    textExample          : "The last day of the year is December 31st",
    transcription        : "[disГ©mbЙ™r]",
    wordTranslate        : "РґРµРєР°Р±СЂСЊ",
    textMeaningTranslate : "Р”РµРєР°Р±СЂСЊ - РґРІРµРЅР°РґС†Р°С‚С‹Р№ РјРµСЃСЏС† РіРѕРґР°",
    textExampleTranslate : "РџРѕСЃР»РµРґРЅРёР№ РґРµРЅСЊ РіРѕРґР° - 31 РґРµРєР°Р±СЂСЏ",
    id                   : 305
  }, {
    word                 : "dinner",
    image                : "files/16_0306.jpg",
    audio                : "files/16_0306.mp3",
    audioMeaning         : "files/16_0306_meaning.mp3",
    audioExample         : "files/16_0306_example.mp3",
    textMeaning          : "Dinner is the main meal eaten in the evening",
    textExample          : "I had a hamburger for dinner",
    transcription        : "[dГ­nЙ™r]",
    wordTranslate        : "РѕР±РµРґ",
    textMeaningTranslate : "РЈР¶РёРЅ - РѕСЃРЅРѕРІРЅР°СЏ РµРґР°, РєРѕС‚РѕСЂСѓСЋ РµРґСЏС‚ РІРµС‡РµСЂРѕРј",
    textExampleTranslate : "РЈ РјРµРЅСЏ Р±С‹Р» РіР°РјР±СѓСЂРіРµСЂ РЅР° СѓР¶РёРЅ",
    id                   : 306
  }, {
    word                 : "end",
    image                : "files/16_0307.jpg",
    audio                : "files/16_0307.mp3",
    audioMeaning         : "files/16_0307_meaning.mp3",
    audioExample         : "files/16_0307_example.mp3",
    textMeaning          : "To end is to stop or finish",
    textExample          : "They are happy because the teacher wanted to end the class early",
    transcription        : "[end]",
    wordTranslate        : "РєРѕРЅРµС†",
    textMeaningTranslate : "Р—Р°РІРµСЂС€РёС‚СЊ - Р·РЅР°С‡РёС‚ РѕСЃС‚Р°РЅРѕРІРёС‚СЊСЃСЏ РёР»Рё Р·Р°РєРѕРЅС‡РёС‚СЊ",
    textExampleTranslate : "РћРЅРё СЃС‡Р°СЃС‚Р»РёРІС‹, РїРѕС‚РѕРјСѓ С‡С‚Рѕ СѓС‡РёС‚РµР»СЊ С…РѕС‚РµР» СЂР°РЅРѕ Р·Р°РєРѕРЅС‡РёС‚СЊ СѓСЂРѕРє",
    id                   : 307
  }, {
    word                 : "exchange",
    image                : "files/16_0308.jpg",
    audio                : "files/16_0308.mp3",
    audioMeaning         : "files/16_0308_meaning.mp3",
    audioExample         : "files/16_0308_example.mp3",
    textMeaning          : "To exchange is to give one thing in return for another",
    textExample          : "The men exchange business cards",
    transcription        : "[iksК§Г©indК’]",
    wordTranslate        : "РѕР±РјРµРЅ",
    textMeaningTranslate : "РћР±РјРµРЅСЏС‚СЊ - Р·РЅР°С‡РёС‚ РѕС‚РґР°РІР°С‚СЊ РѕРґРЅРѕ Р·Р° РґСЂСѓРіРѕРµ",
    textExampleTranslate : "РњСѓР¶С‡РёРЅС‹ РѕР±РјРµРЅРёРІР°СЋС‚СЃСЏ РІРёР·РёС‚РєР°РјРё",
    id                   : 308
  }, {
    word                 : "family",
    image                : "files/16_0309.jpg",
    audio                : "files/16_0309.mp3",
    audioMeaning         : "files/16_0309_meaning.mp3",
    audioExample         : "files/16_0309_example.mp3",
    textMeaning          : "A family is a group of people who are related to each other",
    textExample          : "There are four people in my family",
    transcription        : "[fЗЅmЙ™li]",
    wordTranslate        : "СЃРµРјСЊСЏ",
    textMeaningTranslate : "РЎРµРјСЊСЏ - СЌС‚Рѕ РіСЂСѓРїРїР° Р»СЋРґРµР№, РєРѕС‚РѕСЂС‹Рµ СЃРІСЏР·Р°РЅС‹ РґСЂСѓРі СЃ РґСЂСѓРіРѕРј",
    textExampleTranslate : "Р’ РјРѕРµР№ СЃРµРјСЊРµ С‡РµС‚С‹СЂРµ С‡РµР»РѕРІРµРєР°",
    id                   : 309
  }, {
    word                 : "from",
    image                : "files/16_0310.jpg",
    audio                : "files/16_0310.mp3",
    audioMeaning         : "files/16_0310_meaning.mp3",
    audioExample         : "files/16_0310_example.mp3",
    textMeaning          : "From shows a starting place or position",
    textExample          : "Chris studies from 10 oвЂ™clock to noon every morning",
    transcription        : "[frЙ™m]",
    wordTranslate        : "РѕС‚",
    textMeaningTranslate : "РћС‚ РїРѕРєР°Р·С‹РІР°РµС‚ РЅР°С‡Р°Р»СЊРЅРѕРµ РјРµСЃС‚Рѕ РёР»Рё РїРѕР·РёС†РёСЋ",
    textExampleTranslate : "РљСЂРёСЃ СѓС‡РёС‚СЃСЏ СЃ 10 РґРѕ 12 С‡Р°СЃРѕРІ РєР°Р¶РґРѕРµ СѓС‚СЂРѕ",
    id                   : 310
  }, {
    word                 : "green",
    image                : "files/16_0311.jpg",
    audio                : "files/16_0311.mp3",
    audioMeaning         : "files/16_0311_meaning.mp3",
    audioExample         : "files/16_0311_example.mp3",
    textMeaning          : "Green is the color of growing grass or leaves",
    textExample          : "I donвЂ™t like green apples",
    transcription        : "[griЛђn]",
    wordTranslate        : "Р·РµР»РµРЅС‹Р№",
    textMeaningTranslate : "Р—РµР»РµРЅС‹Р№ - СЌС‚Рѕ С†РІРµС‚ СЂР°СЃС‚СѓС‰РµР№ С‚СЂР°РІС‹ РёР»Рё Р»РёСЃС‚СЊРµРІ",
    textExampleTranslate : "РЇ РЅРµ Р»СЋР±Р»СЋ Р·РµР»РµРЅС‹Рµ СЏР±Р»РѕРєРё",
    id                   : 311
  }, {
    word                 : "home",
    image                : "files/16_0312.jpg",
    audio                : "files/16_0312.mp3",
    audioMeaning         : "files/16_0312_meaning.mp3",
    audioExample         : "files/16_0312_example.mp3",
    textMeaning          : "A personвЂ™s home is the place where that person lives",
    textExample          : "The family likes to stay at home on the weekends",
    transcription        : "[houm]",
    wordTranslate        : "РґРѕРј",
    textMeaningTranslate : "Р”РѕРј С‡РµР»РѕРІРµРєР° - СЌС‚Рѕ РјРµСЃС‚Рѕ, РіРґРµ Р¶РёРІРµС‚ СЌС‚РѕС‚ С‡РµР»РѕРІРµРє",
    textExampleTranslate : "РЎРµРјСЊСЏ Р»СЋР±РёС‚ СЃРёРґРµС‚СЊ РґРѕРјР° РїРѕ РІС‹С…РѕРґРЅС‹Рј",
    id                   : 312
  }, {
    word                 : "January",
    image                : "files/16_0313.jpg",
    audio                : "files/16_0313.mp3",
    audioMeaning         : "files/16_0313_meaning.mp3",
    audioExample         : "files/16_0313_example.mp3",
    textMeaning          : "January is the first month of the year",
    textExample          : "My birthday is in January",
    transcription        : "[dК’ЗЅnjuГЁri]",
    wordTranslate        : "СЏРЅРІР°СЂСЊ",
    textMeaningTranslate : "РЇРЅРІР°СЂСЊ - РїРµСЂРІС‹Р№ РјРµСЃСЏС† РіРѕРґР°",
    textExampleTranslate : "РњРѕР№ РґРµРЅСЊ СЂРѕР¶РґРµРЅРёСЏ РІ СЏРЅРІР°СЂРµ",
    id                   : 313
  }, {
    word                 : "red",
    image                : "files/16_0314.jpg",
    audio                : "files/16_0314.mp3",
    audioMeaning         : "files/16_0314_meaning.mp3",
    audioExample         : "files/16_0314_example.mp3",
    textMeaning          : "Red is the color of blood",
    textExample          : "Jack is wearing a red shirt",
    transcription        : "[red]",
    wordTranslate        : "РєСЂР°СЃРЅС‹Р№",
    textMeaningTranslate : "РљСЂР°СЃРЅС‹Р№ - СЌС‚Рѕ С†РІРµС‚ РєСЂРѕРІРё",
    textExampleTranslate : "Р”Р¶РµРє РѕРґРµС‚ РІ РєСЂР°СЃРЅСѓСЋ СЂСѓР±Р°С€РєСѓ",
    id                   : 314
  }, {
    word                 : "seven",
    image                : "files/16_0315.jpg",
    audio                : "files/16_0315.mp3",
    audioMeaning         : "files/16_0315_meaning.mp3",
    audioExample         : "files/16_0315_example.mp3",
    textMeaning          : "Seven is the word for the number 7",
    textExample          : "I have seven colored pencils on my desk",
    transcription        : "[sevЙ™n]",
    wordTranslate        : "СЃРµРјСЊ",
    textMeaningTranslate : "РЎРµРјСЊ СЌС‚Рѕ СЃР»РѕРІРѕ РґР»СЏ С‡РёСЃР»Р° 7",
    textExampleTranslate : "РЈ РјРµРЅСЏ РЅР° СЃС‚РѕР»Рµ СЃРµРјСЊ С†РІРµС‚РЅС‹С… РєР°СЂР°РЅРґР°С€РµР№",
    id                   : 315
  }, {
    word                 : "start",
    image                : "files/16_0316.jpg",
    audio                : "files/16_0316.mp3",
    audioMeaning         : "files/16_0316_meaning.mp3",
    audioExample         : "files/16_0316_example.mp3",
    textMeaning          : "To start is to begin doing something",
    textExample          : "Catherine has to start work at 8 oвЂ™clock in the morning",
    transcription        : "[staЛђrt]",
    wordTranslate        : "РЅР°С‡РЅРёС‚Рµ",
    textMeaningTranslate : "Р”Р»СЏ РЅР°С‡Р°Р»Р° Р·РЅР°С‡РёС‚ РЅР°С‡Р°С‚СЊ РґРµР»Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ",
    textExampleTranslate : "Р•РєР°С‚РµСЂРёРЅР° РґРѕР»Р¶РЅР° РЅР°С‡Р°С‚СЊ СЂР°Р±РѕС‚Сѓ РІ 8 С‡Р°СЃРѕРІ СѓС‚СЂР°",
    id                   : 316
  }, {
    word                 : "together",
    image                : "files/16_0317.jpg",
    audio                : "files/16_0317.mp3",
    audioMeaning         : "files/16_0317_meaning.mp3",
    audioExample         : "files/16_0317_example.mp3",
    textMeaning          : "Together shows an action is done with another person or thing",
    textExample          : "LetвЂ™s work together to finish the project",
    transcription        : "[tЙ™ЙЎeГ°Й™r]",
    wordTranslate        : "РІСЃРµ РІРјРµСЃС‚Рµ",
    textMeaningTranslate : "Р’РјРµСЃС‚Рµ РїРѕРєР°Р·С‹РІР°РµС‚, С‡С‚Рѕ РґРµР№СЃС‚РІРёРµ СЃРѕРІРµСЂС€Р°РµС‚СЃСЏ СЃ РґСЂСѓРіРёРј С‡РµР»РѕРІРµРєРѕРј РёР»Рё РІРµС‰СЊСЋ",
    textExampleTranslate : "Р”Р°РІР°Р№С‚Рµ СЂР°Р±РѕС‚Р°С‚СЊ РІРјРµСЃС‚Рµ, С‡С‚РѕР±С‹ Р·Р°РєРѕРЅС‡РёС‚СЊ РїСЂРѕРµРєС‚",
    id                   : 317
  }, {
    word                 : "university",
    image                : "files/16_0318.jpg",
    audio                : "files/16_0318.mp3",
    audioMeaning         : "files/16_0318_meaning.mp3",
    audioExample         : "files/16_0318_example.mp3",
    textMeaning          : "A university is a school where people study for a degree",
    textExample          : "My dream is to go to a good university",
    transcription        : "[jГ№ЛђnЙ™vЙ™МЃЛђrsЙ™ti]",
    wordTranslate        : "СѓРЅРёРІРµСЂСЃРёС‚РµС‚",
    textMeaningTranslate : "РЈРЅРёРІРµСЂСЃРёС‚РµС‚ - СЌС‚Рѕ С€РєРѕР»Р°, РІ РєРѕС‚РѕСЂРѕР№ Р»СЋРґРё СѓС‡Р°С‚СЃСЏ РґР»СЏ РїРѕР»СѓС‡РµРЅРёСЏ СЃС‚РµРїРµРЅРё",
    textExampleTranslate : "РњРѕСЏ РјРµС‡С‚Р° - РїРѕСЃС‚СѓРїРёС‚СЊ РІ С…РѕСЂРѕС€РёР№ СѓРЅРёРІРµСЂСЃРёС‚РµС‚",
    id                   : 318
  }, {
    word                 : "wear",
    image                : "files/16_0319.jpg",
    audio                : "files/16_0319.mp3",
    audioMeaning         : "files/16_0319_meaning.mp3",
    audioExample         : "files/16_0319_example.mp3",
    textMeaning          : "To wear is to have clothing on your body",
    textExample          : "The man has to wear a suit to work",
    transcription        : "[wОµЙ™r]",
    wordTranslate        : "РёР·РЅРѕСЃ",
    textMeaningTranslate : "РќРѕСЃРёС‚СЊ - Р·РЅР°С‡РёС‚ РЅРѕСЃРёС‚СЊ РѕРґРµР¶РґСѓ РЅР° С‚РµР»Рµ",
    textExampleTranslate : "Р§РµР»РѕРІРµРє РґРѕР»Р¶РµРЅ РЅРѕСЃРёС‚СЊ РєРѕСЃС‚СЋРј, С‡С‚РѕР±С‹ СЂР°Р±РѕС‚Р°С‚СЊ",
    id                   : 319
  }, {
    word                 : "year",
    image                : "files/16_0320.jpg",
    audio                : "files/16_0320.mp3",
    audioMeaning         : "files/16_0320_meaning.mp3",
    audioExample         : "files/16_0320_example.mp3",
    textMeaning          : "A year is a period of 365 days or twelve months",
    textExample          : "You become one year older every birthday",
    transcription        : "[jiЙ™r]",
    wordTranslate        : "РіРѕРґ",
    textMeaningTranslate : "Р“РѕРґ - СЌС‚Рѕ РїРµСЂРёРѕРґ 365 РґРЅРµР№ РёР»Рё РґРІРµРЅР°РґС†Р°С‚Рё РјРµСЃСЏС†РµРІ",
    textExampleTranslate : "Р’С‹ СЃС‚Р°РЅРѕРІРёС‚РµСЃСЊ РЅР° РіРѕРґ СЃС‚Р°СЂС€Рµ СЃ РєР°Р¶РґС‹Рј РґРЅРµРј СЂРѕР¶РґРµРЅРёСЏ",
    id                   : 320
  }, {
    word                 : "appreciate",
    image                : "files/17_0321.jpg",
    audio                : "files/17_0321.mp3",
    audioMeaning         : "files/17_0321_meaning.mp3",
    audioExample         : "files/17_0321_example.mp3",
    textMeaning          : "To appreciate something is to understand its good qualities",
    textExample          : "I can appreciate the lovely scenery",
    transcription        : "[Й™prГ­ЛђКѓiГЁit]",
    wordTranslate        : "РѕС†РµРЅРёС‚СЊ",
    textMeaningTranslate : "Р¦РµРЅРёС‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РїРѕРЅРёРјР°С‚СЊ РµРіРѕ С…РѕСЂРѕС€РёРµ РєР°С‡РµСЃС‚РІР°",
    textExampleTranslate : "РЇ РјРѕРіСѓ РѕС†РµРЅРёС‚СЊ РїСЂРµРєСЂР°СЃРЅС‹Рµ РїРµР№Р·Р°Р¶Рё",
    id                   : 321
  }, {
    word                 : "available",
    image                : "files/17_0322.jpg",
    audio                : "files/17_0322.mp3",
    audioMeaning         : "files/17_0322_meaning.mp3",
    audioExample         : "files/17_0322_example.mp3",
    textMeaning          : "If something is available, it means you can get it",
    textExample          : "There were many seats available in the room",
    transcription        : "[Й™vГ©ilЙ™bЙ™l]",
    wordTranslate        : "РґРѕСЃС‚СѓРїРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РґРѕСЃС‚СѓРїРЅРѕ, Р·РЅР°С‡РёС‚, РІС‹ РјРѕР¶РµС‚Рµ СЌС‚Рѕ РїРѕР»СѓС‡РёС‚СЊ",
    textExampleTranslate : "Р’ РєРѕРјРЅР°С‚Рµ Р±С‹Р»Рѕ РјРЅРѕРіРѕ СЃРІРѕР±РѕРґРЅС‹С… РјРµСЃС‚",
    id                   : 322
  }, {
    word                 : "beat",
    image                : "files/17_0323.jpg",
    audio                : "files/17_0323.mp3",
    audioMeaning         : "files/17_0323_meaning.mp3",
    audioExample         : "files/17_0323_example.mp3",
    textMeaning          : "To beat someone means to do better than they do",
    textExample          : "I managed to beat everyone in the race",
    transcription        : "[biЛђt]",
    wordTranslate        : "Р±РёС‚СЊ",
    textMeaningTranslate : "Р‘РёС‚СЊ РєРѕРіРѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РґРµР»Р°С‚СЊ Р»СѓС‡С€Рµ, С‡РµРј РѕРЅРё",
    textExampleTranslate : "РњРЅРµ СѓРґР°Р»РѕСЃСЊ РїРѕР±РµРґРёС‚СЊ РІСЃРµС… РІ РіРѕРЅРєРµ",
    id                   : 323
  }, {
    word                 : "bright",
    image                : "files/17_0324.jpg",
    audio                : "files/17_0324.mp3",
    audioMeaning         : "files/17_0324_meaning.mp3",
    audioExample         : "files/17_0324_example.mp3",
    textMeaning          : "If something is bright, it gives off a lot of light",
    textExample          : "The bright light from the explosion hurt my eyes",
    transcription        : "[brait]",
    wordTranslate        : "СЏСЂРєРёР№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЏСЂРєРѕРµ, РѕРЅРѕ РёР·Р»СѓС‡Р°РµС‚ РјРЅРѕРіРѕ СЃРІРµС‚Р°",
    textExampleTranslate : "РЇСЂРєРёР№ СЃРІРµС‚ РѕС‚ РІР·СЂС‹РІР° РїРѕРІСЂРµРґРёР» РјРЅРµ РіР»Р°Р·Р°",
    id                   : 324
  }, {
    word                 : "celebrate",
    image                : "files/17_0325.jpg",
    audio                : "files/17_0325.mp3",
    audioMeaning         : "files/17_0325_meaning.mp3",
    audioExample         : "files/17_0325_example.mp3",
    textMeaning          : "To celebrate is to do something to show that an event is special",
    textExample          : "We all celebrated when we heard the great news",
    transcription        : "[sГ©lЙ™brГЁit]",
    wordTranslate        : "РїСЂР°Р·РґРЅРѕРІР°С‚СЊ",
    textMeaningTranslate : "РџСЂР°Р·РґРЅРѕРІР°С‚СЊ - Р·РЅР°С‡РёС‚ РґРµР»Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ, С‡С‚РѕР±С‹ РїРѕРєР°Р·Р°С‚СЊ, С‡С‚Рѕ СЃРѕР±С‹С‚РёРµ РѕСЃРѕР±РµРЅРЅРѕРµ",
    textExampleTranslate : "РњС‹ РІСЃРµ РїСЂР°Р·РґРЅРѕРІР°Р»Рё, РєРѕРіРґР° СѓСЃР»С‹С€Р°Р»Рё РІРµР»РёРєРёРµ РЅРѕРІРѕСЃС‚Рё",
    id                   : 325
  }, {
    word                 : "decide",
    image                : "files/17_0326.jpg",
    audio                : "files/17_0326.mp3",
    audioMeaning         : "files/17_0326_meaning.mp3",
    audioExample         : "files/17_0326_example.mp3",
    textMeaning          : "To decide is to make a definite choice",
    textExample          : "He tried to decide which one to eat first",
    transcription        : "[disГЎid]",
    wordTranslate        : "РїСЂРёРЅСЏС‚СЊ СЂРµС€РµРЅРёРµ",
    textMeaningTranslate : "Р РµС€РёС‚СЊ - Р·РЅР°С‡РёС‚ СЃРґРµР»Р°С‚СЊ РѕРїСЂРµРґРµР»РµРЅРЅС‹Р№ РІС‹Р±РѕСЂ",
    textExampleTranslate : "РћРЅ РїС‹С‚Р°Р»СЃСЏ СЂРµС€РёС‚СЊ, РєР°РєРѕР№ РёР· РЅРёС… СЃСЉРµСЃС‚СЊ РїРµСЂРІС‹Рј",
    id                   : 326
  }, {
    word                 : "disappear",
    image                : "files/17_0327.jpg",
    audio                : "files/17_0327.mp3",
    audioMeaning         : "files/17_0327_meaning.mp3",
    audioExample         : "files/17_0327_example.mp3",
    textMeaning          : "To disappear means to go away or not be seen",
    textExample          : "The top of the building is disappearing in the clouds",
    transcription        : "[dГ¬sЙ™pГ­Й™r]",
    wordTranslate        : "РёСЃС‡РµР·Р°СЋС‚",
    textMeaningTranslate : "РСЃС‡РµР·РЅСѓС‚СЊ - Р·РЅР°С‡РёС‚ СѓР№С‚Рё РёР»Рё РЅРµ Р±С‹С‚СЊ СѓРІРёРґРµРЅРЅС‹Рј",
    textExampleTranslate : "Р’РµСЂС…РЅСЏСЏ С‡Р°СЃС‚СЊ Р·РґР°РЅРёСЏ РёСЃС‡РµР·Р°РµС‚ РІ РѕР±Р»Р°РєР°С…",
    id                   : 327
  }, {
    word                 : "else",
    image                : "files/17_0328.jpg",
    audio                : "files/17_0328.mp3",
    audioMeaning         : "files/17_0328_meaning.mp3",
    audioExample         : "files/17_0328_example.mp3",
    textMeaning          : "If you talk about something else, you talk about something different",
    textExample          : "I wanted a bike for my birthday, but I got something else",
    transcription        : "[els]",
    wordTranslate        : "РґСЂСѓРіРѕР№",
    textMeaningTranslate : "Р•СЃР»Рё РІС‹ РіРѕРІРѕСЂРёС‚Рµ Рѕ С‡РµРј-С‚Рѕ РґСЂСѓРіРѕРј, РІС‹ РіРѕРІРѕСЂРёС‚Рµ Рѕ С‡РµРј-С‚Рѕ РґСЂСѓРіРѕРј",
    textExampleTranslate : "РЇ С…РѕС‚РµР» РІРµР»РѕСЃРёРїРµРґ РЅР° РґРµРЅСЊ СЂРѕР¶РґРµРЅРёСЏ, РЅРѕ РїРѕР»СѓС‡РёР» РєРѕРµ-С‡С‚Рѕ РµС‰Рµ",
    id                   : 328
  }, {
    word                 : "fair",
    image                : "files/17_0329.jpg",
    audio                : "files/17_0329.mp3",
    audioMeaning         : "files/17_0329_meaning.mp3",
    audioExample         : "files/17_0329_example.mp3",
    textMeaning          : "Fair means reasonable or right",
    textExample          : "He sold me his car for a fair price",
    transcription        : "[fЙ›Й™r]",
    wordTranslate        : "СЃРїСЂР°РІРµРґР»РёРІР°СЏ",
    textMeaningTranslate : "РЎРїСЂР°РІРµРґР»РёРІС‹Р№ РѕР·РЅР°С‡Р°РµС‚ СЂР°Р·СѓРјРЅС‹Р№ РёР»Рё РїСЂР°РІРёР»СЊРЅС‹Р№",
    textExampleTranslate : "РћРЅ РїСЂРѕРґР°Р» РјРЅРµ СЃРІРѕСЋ РјР°С€РёРЅСѓ РїРѕ СЃРїСЂР°РІРµРґР»РёРІРѕР№ С†РµРЅРµ",
    id                   : 329
  }, {
    word                 : "flow",
    image                : "files/17_0330.jpg",
    audio                : "files/17_0330.mp3",
    audioMeaning         : "files/17_0330_meaning.mp3",
    audioExample         : "files/17_0330_example.mp3",
    textMeaning          : "To flow is to move easily and continuously in one direction",
    textExample          : "The water flowed over the rocks and into the lake",
    transcription        : "[flГіu]",
    wordTranslate        : "С‚РµС‡СЊ",
    textMeaningTranslate : "РџРѕС‚РѕРє - СЌС‚Рѕ РґРІРёР¶РµРЅРёРµ Р»РµРіРєРѕ Рё РЅРµРїСЂРµСЂС‹РІРЅРѕ РІ РѕРґРЅРѕРј РЅР°РїСЂР°РІР»РµРЅРёРё",
    textExampleTranslate : "Р’РѕРґР° С‚РµРєР»Р° РїРѕ СЃРєР°Р»Р°Рј Рё РІ РѕР·РµСЂРѕ",
    id                   : 330
  }, {
    word                 : "forward",
    image                : "files/17_0331.jpg",
    audio                : "files/17_0331.mp3",
    audioMeaning         : "files/17_0331_meaning.mp3",
    audioExample         : "files/17_0331_example.mp3",
    textMeaning          : "If you move forward, you move in the direction in front of you",
    textExample          : "When he saw his mother, the baby crawled forward to her",
    transcription        : "[fЙ”МЃЛђrwЙ™Лђrd]",
    wordTranslate        : "РІРїРµСЂРµРґ",
    textMeaningTranslate : "Р•СЃР»Рё РІС‹ РґРІРёРіР°РµС‚РµСЃСЊ РІРїРµСЂРµРґ, РІС‹ РґРІРёРіР°РµС‚РµСЃСЊ РІ РЅР°РїСЂР°РІР»РµРЅРёРё РїРµСЂРµРґ РІР°РјРё",
    textExampleTranslate : "РљРѕРіРґР° РѕРЅ СѓРІРёРґРµР» СЃРІРѕСЋ РјР°С‚СЊ, РјР°Р»С‹С€ РїРѕРїРѕР»Р· Рє РЅРµР№ РІРїРµСЂРµРґ",
    id                   : 331
  }, {
    word                 : "hill",
    image                : "files/17_0332.jpg",
    audio                : "files/17_0332.mp3",
    audioMeaning         : "files/17_0332_meaning.mp3",
    audioExample         : "files/17_0332_example.mp3",
    textMeaning          : "A hill is a raised area of land. It is higher than the land around it",
    textExample          : "The sun was rising above the green hills",
    transcription        : "[hil]",
    wordTranslate        : "С…РѕР»Рј",
    textMeaningTranslate : "РҐРѕР»Рј - СЌС‚Рѕ РІРѕР·РІС‹С€РµРЅРЅС‹Р№ СѓС‡Р°СЃС‚РѕРє Р·РµРјР»Рё. РћРЅ РІС‹С€Рµ Р·РµРјР»Рё РІРѕРєСЂСѓРі РЅРµРіРѕ",
    textExampleTranslate : "РЎРѕР»РЅС†Рµ РїРѕРґРЅРёРјР°Р»РѕСЃСЊ РЅР°Рґ Р·РµР»РµРЅС‹РјРё С…РѕР»РјР°РјРё",
    id                   : 332
  }, {
    word                 : "level",
    image                : "files/17_0333.jpg",
    audio                : "files/17_0333.mp3",
    audioMeaning         : "files/17_0333_meaning.mp3",
    audioExample         : "files/17_0333_example.mp3",
    textMeaning          : "A level is a point on a scale that measures something",
    textExample          : "Please check the level of the temperature",
    transcription        : "[lГ©vЙ™l]",
    wordTranslate        : "СѓСЂРѕРІРµРЅСЊ",
    textMeaningTranslate : "РЈСЂРѕРІРµРЅСЊ - СЌС‚Рѕ С‚РѕС‡РєР° РЅР° С€РєР°Р»Рµ, РєРѕС‚РѕСЂР°СЏ РёР·РјРµСЂСЏРµС‚ С‡С‚Рѕ-С‚Рѕ",
    textExampleTranslate : "РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РїСЂРѕРІРµСЂСЊС‚Рµ СѓСЂРѕРІРµРЅСЊ С‚РµРјРїРµСЂР°С‚СѓСЂС‹",
    id                   : 333
  }, {
    word                 : "lone",
    image                : "files/17_0334.jpg",
    audio                : "files/17_0334.mp3",
    audioMeaning         : "files/17_0334_meaning.mp3",
    audioExample         : "files/17_0334_example.mp3",
    textMeaning          : "A lone person or thing is the only one in a given place",
    textExample          : "A lone man walked along the street",
    transcription        : "[loun]",
    wordTranslate        : "РѕРґРёРЅРѕРєРёР№",
    textMeaningTranslate : "РћРґРёРЅРѕРєРёР№ С‡РµР»РѕРІРµРє РёР»Рё РІРµС‰СЊ - РµРґРёРЅСЃС‚РІРµРЅРЅС‹Р№ РІ РґР°РЅРЅРѕРј РјРµСЃС‚Рµ",
    textExampleTranslate : "РћРґРёРЅРѕРєРёР№ С‡РµР»РѕРІРµРє С€РµР» РїРѕ СѓР»РёС†Рµ",
    id                   : 334
  }, {
    word                 : "puddle",
    image                : "files/17_0335.jpg",
    audio                : "files/17_0335.mp3",
    audioMeaning         : "files/17_0335_meaning.mp3",
    audioExample         : "files/17_0335_example.mp3",
    textMeaning          : "A puddle is a pool of liquid on the ground",
    textExample          : "When the ice melted, it formed a puddle",
    transcription        : "[pКЊМЃdl]",
    wordTranslate        : "Р»СѓР¶Р°",
    textMeaningTranslate : "Р›СѓР¶Р° - СЌС‚Рѕ Р»СѓР¶Р° Р¶РёРґРєРѕСЃС‚Рё РЅР° Р·РµРјР»Рµ",
    textExampleTranslate : "РљРѕРіРґР° Р»РµРґ СЂР°СЃС‚Р°СЏР», РѕР±СЂР°Р·РѕРІР°Р»Р°СЃСЊ Р»СѓР¶Р°",
    id                   : 335
  }, {
    word                 : "response",
    image                : "files/17_0336.jpg",
    audio                : "files/17_0336.mp3",
    audioMeaning         : "files/17_0336_meaning.mp3",
    audioExample         : "files/17_0336_example.mp3",
    textMeaning          : "A response is the answer to a question",
    textExample          : "He asked if I was sad. My response was вЂњNo.вЂќ",
    transcription        : "[rispЙ‘МЃns]",
    wordTranslate        : "РѕС‚РІРµС‚",
    textMeaningTranslate : "РћС‚РІРµС‚ - СЌС‚Рѕ РѕС‚РІРµС‚ РЅР° РІРѕРїСЂРѕСЃ",
    textExampleTranslate : "РћРЅ СЃРїСЂРѕСЃРёР», РіСЂСѓСЃС‚РЅРѕ Р»Рё РјРЅРµ. РњРѕР№ РѕС‚РІРµС‚ Р±С‹Р» 'РќРµС‚'",
    id                   : 336
  }, {
    word                 : "season",
    image                : "files/17_0337.jpg",
    audio                : "files/17_0337.mp3",
    audioMeaning         : "files/17_0337_meaning.mp3",
    audioExample         : "files/17_0337_example.mp3",
    textMeaning          : "A season is a time of the year: spring, summer, fall, or winter",
    textExample          : "Fall is a warm season, while winter is very cold",
    transcription        : "[sГ­ЛђzЙ™n]",
    wordTranslate        : "РІСЂРµРјСЏ РіРѕРґР°",
    textMeaningTranslate : "РЎРµР·РѕРЅ - СЌС‚Рѕ РІСЂРµРјСЏ РіРѕРґР°: РІРµСЃРЅР°, Р»РµС‚Рѕ, РѕСЃРµРЅСЊ РёР»Рё Р·РёРјР°",
    textExampleTranslate : "РћСЃРµРЅСЊ - С‚РµРїР»РѕРµ РІСЂРµРјСЏ РіРѕРґР°, Р° Р·РёРјР° РѕС‡РµРЅСЊ С…РѕР»РѕРґРЅР°СЏ",
    id                   : 337
  }, {
    word                 : "solution",
    image                : "files/17_0338.jpg",
    audio                : "files/17_0338.mp3",
    audioMeaning         : "files/17_0338_meaning.mp3",
    audioExample         : "files/17_0338_example.mp3",
    textMeaning          : "A solution is a way to solve a problem",
    textExample          : "There are many problems. We need solutions!",
    transcription        : "[sЙ™lГєЛђКѓЙ™n]",
    wordTranslate        : "СЂРµС€РµРЅРёРµ",
    textMeaningTranslate : "Р РµС€РµРЅРёРµ - СЌС‚Рѕ СЃРїРѕСЃРѕР± СЂРµС€РёС‚СЊ РїСЂРѕР±Р»РµРјСѓ",
    textExampleTranslate : "Р•СЃС‚СЊ РјРЅРѕРіРѕ РїСЂРѕР±Р»РµРј. РќР°Рј РЅСѓР¶РЅС‹ СЂРµС€РµРЅРёСЏ!",
    id                   : 338
  }, {
    word                 : "waste",
    image                : "files/17_0339.jpg",
    audio                : "files/17_0339.mp3",
    audioMeaning         : "files/17_0339_meaning.mp3",
    audioExample         : "files/17_0339_example.mp3",
    textMeaning          : "To waste means to use something carelessly and unnecessarily",
    textExample          : "Turn off the water so you donвЂ™t waste it",
    transcription        : "[weist]",
    wordTranslate        : "РѕС‚С…РѕРґС‹",
    textMeaningTranslate : "РўСЂР°С‚РёС‚СЊ РІРїСѓСЃС‚СѓСЋ РѕР·РЅР°С‡Р°РµС‚ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ С‡С‚Рѕ-С‚Рѕ РЅРµР±СЂРµР¶РЅРѕ Рё РёР·Р»РёС€РЅРµ",
    textExampleTranslate : "Р’С‹РєР»СЋС‡Рё РІРѕРґСѓ, С‡С‚РѕР±С‹ РЅРµ С‚СЂР°С‚РёС‚СЊ РµРµ РІРїСѓСЃС‚СѓСЋ",
    id                   : 339
  }, {
    word                 : "whether",
    image                : "files/17_0340.jpg",
    audio                : "files/17_0340.mp3",
    audioMeaning         : "files/17_0340_meaning.mp3",
    audioExample         : "files/17_0340_example.mp3",
    textMeaning          : "You use whether when you must choose between two things",
    textExample          : "I could not decide whether to go left or right",
    transcription        : "[hwГ©Г°Й™Лђr]",
    wordTranslate        : "Р±СѓРґСЊ С‚Рѕ",
    textMeaningTranslate : "РСЃРїРѕР»СЊР·СѓРµС‚Рµ Р»Рё РІС‹ РєРѕРіРґР° РЅСѓР¶РЅРѕ РІС‹Р±РёСЂР°С‚СЊ РјРµР¶РґСѓ РґРІСѓРјСЏ РІРµС‰Р°РјРё",
    textExampleTranslate : "РЇ РЅРµ РјРѕРі СЂРµС€РёС‚СЊ, РёРґС‚Рё Р»Рё РЅР°Р»РµРІРѕ РёР»Рё РЅР°РїСЂР°РІРѕ",
    id                   : 340
  }, {
    word                 : "always",
    image                : "files/18_0341.jpg",
    audio                : "files/18_0341.mp3",
    audioMeaning         : "files/18_0341_meaning.mp3",
    audioExample         : "files/18_0341_example.mp3",
    textMeaning          : "Always means that something happens all the time",
    textExample          : "They always brush their teeth in the morning",
    transcription        : "[Й”МЃЛђlweiz]",
    wordTranslate        : "РІСЃРµРіРґР°",
    textMeaningTranslate : "Р’СЃРµРіРґР° РѕР·РЅР°С‡Р°РµС‚, С‡С‚Рѕ С‡С‚Рѕ-С‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚ РїРѕСЃС‚РѕСЏРЅРЅРѕ",
    textExampleTranslate : "РћРЅРё РІСЃРµРіРґР° С‡РёСЃС‚СЏС‚ Р·СѓР±С‹ РїРѕ СѓС‚СЂР°Рј",
    id                   : 341
  }, {
    word                 : "ask",
    image                : "files/18_0342.jpg",
    audio                : "files/18_0342.mp3",
    audioMeaning         : "files/18_0342_meaning.mp3",
    audioExample         : "files/18_0342_example.mp3",
    textMeaning          : "To ask is to say or write something to get an answer",
    textExample          : "Please ask questions if you do not understand",
    transcription        : "[Г¦sk]",
    wordTranslate        : "СЃРїСЂРѕСЃРёС‚СЊ",
    textMeaningTranslate : "РЎРїСЂРѕСЃРёС‚СЊ - Р·РЅР°С‡РёС‚ СЃРєР°Р·Р°С‚СЊ РёР»Рё РЅР°РїРёСЃР°С‚СЊ С‡С‚Рѕ-С‚Рѕ, С‡С‚РѕР±С‹ РїРѕР»СѓС‡РёС‚СЊ РѕС‚РІРµС‚",
    textExampleTranslate : "РџРѕР¶Р°Р»СѓР№СЃС‚Р°, Р·Р°РґР°РІР°Р№С‚Рµ РІРѕРїСЂРѕСЃС‹, РµСЃР»Рё РІС‹ РЅРµ РїРѕРЅРёРјР°РµС‚Рµ",
    id                   : 342
  }, {
    word                 : "banana",
    image                : "files/18_0343.jpg",
    audio                : "files/18_0343.mp3",
    audioMeaning         : "files/18_0343_meaning.mp3",
    audioExample         : "files/18_0343_example.mp3",
    textMeaning          : "A banana is a long yellow fruit with soft white flesh inside",
    textExample          : "Did you eat a banana for breakfast?",
    transcription        : "[bЙ™nЗЅnЙ™]",
    wordTranslate        : "Р±Р°РЅР°РЅ",
    textMeaningTranslate : "Р‘Р°РЅР°РЅ - СЌС‚Рѕ РґР»РёРЅРЅС‹Р№ Р¶РµР»С‚С‹Р№ С„СЂСѓРєС‚ СЃ РјСЏРіРєРѕР№ Р±РµР»РѕР№ РјСЏРєРѕС‚СЊСЋ РІРЅСѓС‚СЂРё",
    textExampleTranslate : "РўС‹ РµР» Р±Р°РЅР°РЅ РЅР° Р·Р°РІС‚СЂР°Рє?",
    id                   : 343
  }, {
    word                 : "bread",
    image                : "files/18_0344.jpg",
    audio                : "files/18_0344.mp3",
    audioMeaning         : "files/18_0344_meaning.mp3",
    audioExample         : "files/18_0344_example.mp3",
    textMeaning          : "Bread is a food made from flour and water",
    textExample          : "You need two pieces of bread to make a sandwich",
    transcription        : "[bred]",
    wordTranslate        : "С…Р»РµР±",
    textMeaningTranslate : "РҐР»РµР± - СЌС‚Рѕ РµРґР° РёР· РјСѓРєРё Рё РІРѕРґС‹",
    textExampleTranslate : "Р’Р°Рј РЅСѓР¶РЅРѕ РґРІР° РєСѓСЃРєР° С…Р»РµР±Р°, С‡С‚РѕР±С‹ СЃРґРµР»Р°С‚СЊ Р±СѓС‚РµСЂР±СЂРѕРґ",
    id                   : 344
  }, {
    word                 : "cake",
    image                : "files/18_0345.jpg",
    audio                : "files/18_0345.mp3",
    audioMeaning         : "files/18_0345_meaning.mp3",
    audioExample         : "files/18_0345_example.mp3",
    textMeaning          : "Cake is a sweet dessert made from flour, water, sugar, and eggs",
    textExample          : "What a beautiful birthday cake!",
    transcription        : "[keik]",
    wordTranslate        : "С‚РѕСЂС‚",
    textMeaningTranslate : "РўРѕСЂС‚ - СЌС‚Рѕ СЃР»Р°РґРєРёР№ РґРµСЃРµСЂС‚ РёР· РјСѓРєРё, РІРѕРґС‹, СЃР°С…Р°СЂР° Рё СЏРёС†",
    textExampleTranslate : "РљР°РєРѕР№ РєСЂР°СЃРёРІС‹Р№ С‚РѕСЂС‚ РєРѕ РґРЅСЋ СЂРѕР¶РґРµРЅРёСЏ!",
    id                   : 345
  }, {
    word                 : "carrot",
    image                : "files/18_0346.jpg",
    audio                : "files/18_0346.mp3",
    audioMeaning         : "files/18_0346_meaning.mp3",
    audioExample         : "files/18_0346_example.mp3",
    textMeaning          : "A carrot is an orange vegetable",
    textExample          : "I put a carrot in my salad",
    transcription        : "[kЗЅrЙ™t]",
    wordTranslate        : "РјРѕСЂРєРѕРІСЊ",
    textMeaningTranslate : "РњРѕСЂРєРѕРІСЊ - СЌС‚Рѕ Р°РїРµР»СЊСЃРёРЅРѕРІС‹Р№ РѕРІРѕС‰",
    textExampleTranslate : "РЇ РїРѕР»РѕР¶РёР» РјРѕСЂРєРѕРІРєСѓ РІ СЃРІРѕР№ СЃР°Р»Р°С‚",
    id                   : 346
  }, {
    word                 : "chicken",
    image                : "files/18_0347.jpg",
    audio                : "files/18_0347.mp3",
    audioMeaning         : "files/18_0347_meaning.mp3",
    audioExample         : "files/18_0347_example.mp3",
    textMeaning          : "Chicken is a bird that is often used for food",
    textExample          : "Chicken is his favorite kind of meat",
    transcription        : "[К§Г­kЙ™n]",
    wordTranslate        : "РєСѓСЂРёС†Р°",
    textMeaningTranslate : "РљСѓСЂРёС†Р° - СЌС‚Рѕ РїС‚РёС†Р°, РєРѕС‚РѕСЂСѓСЋ С‡Р°СЃС‚Рѕ РёСЃРїРѕР»СЊР·СѓСЋС‚ РІ РїРёС‰Сѓ",
    textExampleTranslate : "РљСѓСЂРёС†Р° - РµРіРѕ Р»СЋР±РёРјС‹Р№ РІРёРґ РјСЏСЃР°",
    id                   : 347
  }, {
    word                 : "chocolate",
    image                : "files/18_0348.jpg",
    audio                : "files/18_0348.mp3",
    audioMeaning         : "files/18_0348_meaning.mp3",
    audioExample         : "files/18_0348_example.mp3",
    textMeaning          : "Chocolate is a sweet food made from cacao beans",
    textExample          : "I made a chocolate cake for my momвЂ™s party",
    transcription        : "[К§О¬kЙ™lЙ™t]",
    wordTranslate        : "С€РѕРєРѕР»Р°Рґ",
    textMeaningTranslate : "РЁРѕРєРѕР»Р°Рґ - СЌС‚Рѕ СЃР»Р°РґРєР°СЏ РїРёС‰Р° РёР· РєР°РєР°Рѕ-Р±РѕР±РѕРІ",
    textExampleTranslate : "РЇ СЃРґРµР»Р°Р» С€РѕРєРѕР»Р°РґРЅС‹Р№ С‚РѕСЂС‚ РґР»СЏ РІРµС‡РµСЂРёРЅРєРё РјРѕРµР№ РјР°РјС‹",
    id                   : 348
  }, {
    word                 : "contain",
    image                : "files/18_0349.jpg",
    audio                : "files/18_0349.mp3",
    audioMeaning         : "files/18_0349_meaning.mp3",
    audioExample         : "files/18_0349_example.mp3",
    textMeaning          : "To contain is to hold or have something",
    textExample          : "I have to find something to contain these apples",
    transcription        : "[kЙ™ntГ©in]",
    wordTranslate        : "СЃРѕРґРµСЂР¶Р°С‚СЊ",
    textMeaningTranslate : "РЎРѕРґРµСЂР¶Р°С‚СЊ - Р·РЅР°С‡РёС‚ РґРµСЂР¶Р°С‚СЊ РёР»Рё РёРјРµС‚СЊ С‡С‚Рѕ-С‚Рѕ",
    textExampleTranslate : "РЇ РґРѕР»Р¶РµРЅ РЅР°Р№С‚Рё С‡С‚Рѕ-С‚Рѕ, С‡С‚РѕР±С‹ СЃРѕРґРµСЂР¶Р°С‚СЊ СЌС‚Рё СЏР±Р»РѕРєРё",
    id                   : 349
  }, {
    word                 : "delicious",
    image                : "files/18_0350.jpg",
    audio                : "files/18_0350.mp3",
    audioMeaning         : "files/18_0350_meaning.mp3",
    audioExample         : "files/18_0350_example.mp3",
    textMeaning          : "If a food is delicious, it is tasty",
    textExample          : "I loved the delicious fried chicken I ate for dinner!",
    transcription        : "[dilГ­КѓЙ™s]",
    wordTranslate        : "РѕС‡РµРЅСЊ РІРєСѓСЃРЅРѕ",
    textMeaningTranslate : "Р•СЃР»Рё РµРґР° РІРєСѓСЃРЅР°СЏ, С‚Рѕ РѕРЅР° РІРєСѓСЃРЅР°СЏ",
    textExampleTranslate : "РњРЅРµ РѕС‡РµРЅСЊ РїРѕРЅСЂР°РІРёР»Р°СЃСЊ РІРєСѓСЃРЅР°СЏ Р¶Р°СЂРµРЅР°СЏ РєСѓСЂРёС†Р°, РєРѕС‚РѕСЂСѓСЋ СЏ РµР» РЅР° СѓР¶РёРЅ!",
    id                   : 350
  }, {
    word                 : "diet",
    image                : "files/18_0351.jpg",
    audio                : "files/18_0351.mp3",
    audioMeaning         : "files/18_0351_meaning.mp3",
    audioExample         : "files/18_0351_example.mp3",
    textMeaning          : "A diet is the food regularly eaten by a person",
    textExample          : "His diet mostly consists of fruits and vegetables",
    transcription        : "[dГЎiЙ™t]",
    wordTranslate        : "СЂР°С†РёРѕРЅ РїРёС‚Р°РЅРёСЏ",
    textMeaningTranslate : "Р”РёРµС‚Р° - СЌС‚Рѕ РїРёС‰Р°, РєРѕС‚РѕСЂСѓСЋ СЂРµРіСѓР»СЏСЂРЅРѕ РµСЃС‚ С‡РµР»РѕРІРµРє",
    textExampleTranslate : "Р•РіРѕ РґРёРµС‚Р° СЃРѕСЃС‚РѕРёС‚ РІ РѕСЃРЅРѕРІРЅРѕРј РёР· С„СЂСѓРєС‚РѕРІ Рё РѕРІРѕС‰РµР№",
    id                   : 351
  }, {
    word                 : "eat",
    image                : "files/18_0352.jpg",
    audio                : "files/18_0352.mp3",
    audioMeaning         : "files/18_0352_meaning.mp3",
    audioExample         : "files/18_0352_example.mp3",
    textMeaning          : "To eat is to chew and swallow food",
    textExample          : "You should eat breakfast every day",
    transcription        : "[iЛђt]",
    wordTranslate        : "РµСЃС‚СЊ",
    textMeaningTranslate : "РљСѓС€Р°С‚СЊ - Р·РЅР°С‡РёС‚ Р¶РµРІР°С‚СЊ Рё РіР»РѕС‚Р°С‚СЊ РїРёС‰Сѓ",
    textExampleTranslate : "РўС‹ РґРѕР»Р¶РµРЅ Р·Р°РІС‚СЂР°РєР°С‚СЊ РєР°Р¶РґС‹Р№ РґРµРЅСЊ",
    id                   : 352
  }, {
    word                 : "food",
    image                : "files/18_0353.jpg",
    audio                : "files/18_0353.mp3",
    audioMeaning         : "files/18_0353_meaning.mp3",
    audioExample         : "files/18_0353_example.mp3",
    textMeaning          : "Food is things people and animals eat",
    textExample          : "Pasta is a famous food in Italy",
    transcription        : "[fuЛђd]",
    wordTranslate        : "РїРёС‰Р°",
    textMeaningTranslate : "Р•РґР° - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ РµРґСЏС‚ Р»СЋРґРё Рё Р¶РёРІРѕС‚РЅС‹Рµ",
    textExampleTranslate : "РњР°РєР°СЂРѕРЅС‹ - РёР·РІРµСЃС‚РЅР°СЏ РµРґР° РІ РС‚Р°Р»РёРё",
    id                   : 353
  }, {
    word                 : "fruit",
    image                : "files/18_0354.jpg",
    audio                : "files/18_0354.mp3",
    audioMeaning         : "files/18_0354_meaning.mp3",
    audioExample         : "files/18_0354_example.mp3",
    textMeaning          : "Fruit is a type of healthy food that grows on trees and plants",
    textExample          : "Apples, pears, and oranges are types of fruit",
    transcription        : "[fruЛђt]",
    wordTranslate        : "С„СЂСѓРєС‚С‹",
    textMeaningTranslate : "Р¤СЂСѓРєС‚С‹ - СЌС‚Рѕ РІРёРґ Р·РґРѕСЂРѕРІРѕР№ РїРёС‰Рё, РєРѕС‚РѕСЂР°СЏ СЂР°СЃС‚РµС‚ РЅР° РґРµСЂРµРІСЊСЏС… Рё СЂР°СЃС‚РµРЅРёСЏС…",
    textExampleTranslate : "РЇР±Р»РѕРєРё, РіСЂСѓС€Рё Рё Р°РїРµР»СЊСЃРёРЅС‹ - СЌС‚Рѕ РІРёРґС‹ С„СЂСѓРєС‚РѕРІ",
    id                   : 354
  }, {
    word                 : "great",
    image                : "files/18_0355.jpg",
    audio                : "files/18_0355.mp3",
    audioMeaning         : "files/18_0355_meaning.mp3",
    audioExample         : "files/18_0355_example.mp3",
    textMeaning          : "When something is great, it is very good",
    textExample          : "It was a great, exciting game!",
    transcription        : "[greit]",
    wordTranslate        : "РІРµР»РёРєРёР№",
    textMeaningTranslate : "РљРѕРіРґР° С‡С‚Рѕ-С‚Рѕ Р·РґРѕСЂРѕРІРѕ, СЌС‚Рѕ РѕС‡РµРЅСЊ С…РѕСЂРѕС€Рѕ",
    textExampleTranslate : "Р­С‚Рѕ Р±С‹Р»Р° РѕС‚Р»РёС‡РЅР°СЏ, Р·Р°С…РІР°С‚С‹РІР°СЋС‰Р°СЏ РёРіСЂР°!",
    id                   : 355
  }, {
    word                 : "health",
    image                : "files/18_0356.jpg",
    audio                : "files/18_0356.mp3",
    audioMeaning         : "files/18_0356_meaning.mp3",
    audioExample         : "files/18_0356_example.mp3",
    textMeaning          : "Health is the state of a personвЂ™s body",
    textExample          : "People who want good health should not smoke",
    transcription        : "[helОё]",
    wordTranslate        : "Р·РґРѕСЂРѕРІСЊРµ",
    textMeaningTranslate : "Р—РґРѕСЂРѕРІСЊРµ - СЌС‚Рѕ СЃРѕСЃС‚РѕСЏРЅРёРµ С‚РµР»Р° С‡РµР»РѕРІРµРєР°",
    textExampleTranslate : "Р›СЋРґРё, РєРѕС‚РѕСЂС‹Рµ С…РѕС‚СЏС‚ С…РѕСЂРѕС€РµРіРѕ Р·РґРѕСЂРѕРІСЊСЏ, РЅРµ РґРѕР»Р¶РЅС‹ РєСѓСЂРёС‚СЊ",
    id                   : 356
  }, {
    word                 : "recipe",
    image                : "files/18_0357.jpg",
    audio                : "files/18_0357.mp3",
    audioMeaning         : "files/18_0357_meaning.mp3",
    audioExample         : "files/18_0357_example.mp3",
    textMeaning          : "A recipe is a set of instructions for cooking a certain type of food",
    textExample          : "Do you use a recipe when you make that sauce?",
    transcription        : "[rГ©sЙ™pi]",
    wordTranslate        : "СЂРµС†РµРїС‚ Р±Р»СЋРґР°",
    textMeaningTranslate : "Р РµС†РµРїС‚ - СЌС‚Рѕ РЅР°Р±РѕСЂ РёРЅСЃС‚СЂСѓРєС†РёР№ РґР»СЏ РїСЂРёРіРѕС‚РѕРІР»РµРЅРёСЏ РѕРїСЂРµРґРµР»РµРЅРЅРѕРіРѕ РІРёРґР° РїРёС‰Рё",
    textExampleTranslate : "РўС‹ РёСЃРїРѕР»СЊР·СѓРµС€СЊ СЂРµС†РµРїС‚, РєРѕРіРґР° РіРѕС‚РѕРІРёС€СЊ СЌС‚РѕС‚ СЃРѕСѓСЃ?",
    id                   : 357
  }, {
    word                 : "restaurant",
    image                : "files/18_0358.jpg",
    audio                : "files/18_0358.mp3",
    audioMeaning         : "files/18_0358_meaning.mp3",
    audioExample         : "files/18_0358_example.mp3",
    textMeaning          : "A restaurant is a business where people sit and eat food",
    textExample          : "LetвЂ™s eat at the Indian restaurant",
    transcription        : "[restЙ™rЙ’nt]",
    wordTranslate        : "СЂРµСЃС‚РѕСЂР°РЅ",
    textMeaningTranslate : "Р РµСЃС‚РѕСЂР°РЅ - СЌС‚Рѕ Р±РёР·РЅРµСЃ, РіРґРµ Р»СЋРґРё СЃРёРґСЏС‚ Рё РµРґСЏС‚ РµРґСѓ",
    textExampleTranslate : "Р”Р°РІР°Р№С‚Рµ РµСЃС‚СЊ РІ РёРЅРґРёР№СЃРєРѕРј СЂРµСЃС‚РѕСЂР°РЅРµ",
    id                   : 358
  }, {
    word                 : "special",
    image                : "files/18_0359.jpg",
    audio                : "files/18_0359.mp3",
    audioMeaning         : "files/18_0359_meaning.mp3",
    audioExample         : "files/18_0359_example.mp3",
    textMeaning          : "If something is special, it is unique and different",
    textExample          : "The cupcake was special because it had blue frosting",
    transcription        : "[spГ©КѓЙ™l]",
    wordTranslate        : "СЃРїРµС†РёР°Р»СЊРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РѕСЃРѕР±РµРЅРЅРѕРµ, РѕРЅРѕ СѓРЅРёРєР°Р»СЊРЅРѕ Рё РѕС‚Р»РёС‡Р°РµС‚СЃСЏ",
    textExampleTranslate : "РљРµРєСЃ Р±С‹Р» РѕСЃРѕР±РµРЅРЅС‹Рј, РїРѕС‚РѕРјСѓ С‡С‚Рѕ Сѓ РЅРµРіРѕ Р±С‹Р»Р° РіРѕР»СѓР±Р°СЏ РіР»Р°Р·СѓСЂСЊ",
    id                   : 359
  }, {
    word                 : "water",
    image                : "files/18_0360.jpg",
    audio                : "files/18_0360.mp3",
    audioMeaning         : "files/18_0360_meaning.mp3",
    audioExample         : "files/18_0360_example.mp3",
    textMeaning          : "Water is a clear liquid that people need to survive",
    textExample          : "Drink eight cups of water every day",
    transcription        : "[wЙ”МЃЛђtЙ™r]",
    wordTranslate        : "РІРѕРґР°",
    textMeaningTranslate : "Р’РѕРґР° - СЌС‚Рѕ РїСЂРѕР·СЂР°С‡РЅР°СЏ Р¶РёРґРєРѕСЃС‚СЊ, РєРѕС‚РѕСЂР°СЏ РЅСѓР¶РЅР° Р»СЋРґСЏРј, С‡С‚РѕР±С‹ РІС‹Р¶РёС‚СЊ",
    textExampleTranslate : "РџРµР№С‚Рµ РІРѕСЃРµРјСЊ С‡Р°С€РµРє РІРѕРґС‹ РєР°Р¶РґС‹Р№ РґРµРЅСЊ",
    id                   : 360
  }, {
    word                 : "alive",
    image                : "files/19_0361.jpg",
    audio                : "files/19_0361.mp3",
    audioMeaning         : "files/19_0361_meaning.mp3",
    audioExample         : "files/19_0361_example.mp3",
    textMeaning          : "Someone or something that is alive is not dead",
    textExample          : "My grandparents are still alive even though they are over 90",
    transcription        : "[Й™lГЎiv]",
    wordTranslate        : "Р¶РёРІРѕР№",
    textMeaningTranslate : "РљС‚Рѕ-С‚Рѕ РёР»Рё С‡С‚Рѕ-С‚Рѕ Р¶РёРІРѕРµ РЅРµ РјРµСЂС‚РІРѕ",
    textExampleTranslate : "РњРѕРё Р±Р°Р±СѓС€РєР° Рё РґРµРґСѓС€РєР° РІСЃРµ РµС‰Рµ Р¶РёРІС‹, С…РѕС‚СЏ РёРј СѓР¶Рµ Р·Р° 90",
    id                   : 361
  }, {
    word                 : "bone",
    image                : "files/19_0362.jpg",
    audio                : "files/19_0362.mp3",
    audioMeaning         : "files/19_0362_meaning.mp3",
    audioExample         : "files/19_0362_example.mp3",
    textMeaning          : "A bone is a hard part of the body",
    textExample          : "I brought home a nice bone for my dog",
    transcription        : "[boun]",
    wordTranslate        : "РєРѕСЃС‚СЊ",
    textMeaningTranslate : "РљРѕСЃС‚СЊ - СЌС‚Рѕ С‚РІРµСЂРґР°СЏ С‡Р°СЃС‚СЊ С‚РµР»Р°",
    textExampleTranslate : "РЇ РїСЂРёРЅРµСЃ РґРѕРјРѕР№ С…РѕСЂРѕС€СѓСЋ СЃРѕР±Р°РєСѓ РґР»СЏ РјРѕРµР№ СЃРѕР±Р°РєРё",
    id                   : 362
  }, {
    word                 : "bother",
    image                : "files/19_0363.jpg",
    audio                : "files/19_0363.mp3",
    audioMeaning         : "files/19_0363_meaning.mp3",
    audioExample         : "files/19_0363_example.mp3",
    textMeaning          : "To bother is to make the effort to do something",
    textExample          : "No one bothered to wash the dishes today",
    transcription        : "[bЙ‘МЃГ°Й™Лђr]",
    wordTranslate        : "Р·Р°РјРѕСЂР°С‡РёРІР°С‚СЊСЃСЏ",
    textMeaningTranslate : "Р‘РµСЃРїРѕРєРѕРёС‚СЊ - Р·РЅР°С‡РёС‚ РїСЂРёР»Р°РіР°С‚СЊ СѓСЃРёР»РёСЏ, С‡С‚РѕР±С‹ С‡С‚Рѕ-С‚Рѕ СЃРґРµР»Р°С‚СЊ",
    textExampleTranslate : "РќРёРєС‚Рѕ РЅРµ СѓРґРѕСЃСѓР¶РёР»СЃСЏ РјС‹С‚СЊ РїРѕСЃСѓРґСѓ СЃРµРіРѕРґРЅСЏ",
    id                   : 363
  }, {
    word                 : "captain",
    image                : "files/19_0364.jpg",
    audio                : "files/19_0364.mp3",
    audioMeaning         : "files/19_0364_meaning.mp3",
    audioExample         : "files/19_0364_example.mp3",
    textMeaning          : "A captain is the person who controls a ship or airplane",
    textExample          : "The captain sailed his ship to Australia",
    transcription        : "[kЗЅptin]",
    wordTranslate        : "РєР°РїРёС‚Р°РЅ",
    textMeaningTranslate : "РљР°РїРёС‚Р°РЅ - СЌС‚Рѕ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ СѓРїСЂР°РІР»СЏРµС‚ РєРѕСЂР°Р±Р»РµРј РёР»Рё СЃР°РјРѕР»РµС‚РѕРј",
    textExampleTranslate : "РљР°РїРёС‚Р°РЅ РѕС‚РїР»С‹Р» РЅР° СЃРІРѕРµРј РєРѕСЂР°Р±Р»Рµ РІ РђРІСЃС‚СЂР°Р»РёСЋ",
    id                   : 364
  }, {
    word                 : "conclusion",
    image                : "files/19_0365.jpg",
    audio                : "files/19_0365.mp3",
    audioMeaning         : "files/19_0365_meaning.mp3",
    audioExample         : "files/19_0365_example.mp3",
    textMeaning          : "The conclusion of something is the final part of it",
    textExample          : "At the conclusion of the race, the spectators cheered for the winner",
    transcription        : "[kЙ™nklГєЛђК’Й™n]",
    wordTranslate        : "РІС‹РІРѕРґ",
    textMeaningTranslate : "Р—Р°РєР»СЋС‡РµРЅРёРµ С‡РµРіРѕ-Р»РёР±Рѕ СЏРІР»СЏРµС‚СЃСЏ Р·Р°РєР»СЋС‡РёС‚РµР»СЊРЅРѕР№ С‡Р°СЃС‚СЊСЋ СЌС‚РѕРіРѕ",
    textExampleTranslate : "Р’ РєРѕРЅС†Рµ РіРѕРЅРєРё Р·СЂРёС‚РµР»Рё РїСЂРёРІРµС‚СЃС‚РІРѕРІР°Р»Рё РїРѕР±РµРґРёС‚РµР»СЏ",
    id                   : 365
  }, {
    word                 : "doubt",
    image                : "files/19_0366.jpg",
    audio                : "files/19_0366.mp3",
    audioMeaning         : "files/19_0366_meaning.mp3",
    audioExample         : "files/19_0366_example.mp3",
    textMeaning          : "Doubt is a feeling of not being sure",
    textExample          : "I have doubt that the story is true",
    transcription        : "[daut]",
    wordTranslate        : "СЃРѕРјРЅРµРЅРёРµ",
    textMeaningTranslate : "РЎРѕРјРЅРµРЅРёРµ - СЌС‚Рѕ С‡СѓРІСЃС‚РІРѕ РЅРµСѓРІРµСЂРµРЅРЅРѕСЃС‚Рё",
    textExampleTranslate : "РЇ СЃРѕРјРЅРµРІР°СЋСЃСЊ, С‡С‚Рѕ РёСЃС‚РѕСЂРёСЏ РїСЂР°РІРґРёРІР°",
    id                   : 366
  }, {
    word                 : "explore",
    image                : "files/19_0367.jpg",
    audio                : "files/19_0367.mp3",
    audioMeaning         : "files/19_0367_meaning.mp3",
    audioExample         : "files/19_0367_example.mp3",
    textMeaning          : "To explore is to look for new places",
    textExample          : "He wants to explore the world and see new things",
    transcription        : "[iksplЙ”МЃЛђr]",
    wordTranslate        : "РёСЃСЃР»РµРґРѕРІР°С‚СЊ",
    textMeaningTranslate : "РСЃСЃР»РµРґРѕРІР°С‚СЊ - Р·РЅР°С‡РёС‚ РёСЃРєР°С‚СЊ РЅРѕРІС‹Рµ РјРµСЃС‚Р°",
    textExampleTranslate : "РћРЅ С…РѕС‡РµС‚ РёСЃСЃР»РµРґРѕРІР°С‚СЊ РјРёСЂ Рё РІРёРґРµС‚СЊ РЅРѕРІС‹Рµ РІРµС‰Рё",
    id                   : 367
  }, {
    word                 : "glad",
    image                : "files/19_0368.jpg",
    audio                : "files/19_0368.mp3",
    audioMeaning         : "files/19_0368_meaning.mp3",
    audioExample         : "files/19_0368_example.mp3",
    textMeaning          : "If you are glad, you are happy",
    textExample          : "I am glad you came to my party",
    transcription        : "[glГ¦d]",
    wordTranslate        : "СЂР°РґС‹",
    textMeaningTranslate : "Р•СЃР»Рё С‚С‹ СЂР°Рґ, С‚С‹ СЃС‡Р°СЃС‚Р»РёРІ",
    textExampleTranslate : "РЇ СЂР°Рґ, С‡С‚Рѕ С‚С‹ РїСЂРёС€РµР» РЅР° РјРѕСЋ РІРµС‡РµСЂРёРЅРєСѓ",
    id                   : 368
  }, {
    word                 : "however",
    image                : "files/19_0369.jpg",
    audio                : "files/19_0369.mp3",
    audioMeaning         : "files/19_0369_meaning.mp3",
    audioExample         : "files/19_0369_example.mp3",
    textMeaning          : "However means despite or not being influenced by something",
    textExample          : "She is a great cook. However, she never had professional lessons",
    transcription        : "[hauГ©vЙ™r]",
    wordTranslate        : "РѕРґРЅР°РєРѕ",
    textMeaningTranslate : "РўРµРј РЅРµ РјРµРЅРµРµ, РѕР·РЅР°С‡Р°РµС‚ С‡С‚Рѕ-С‚Рѕ, РЅРµСЃРјРѕС‚СЂСЏ РЅР° С‚Рѕ, С‡С‚Рѕ С‡С‚Рѕ-С‚Рѕ РЅР° РЅРµРіРѕ РЅРµ РІР»РёСЏРµС‚",
    textExampleTranslate : "РћРЅР° - РѕС‚Р»РёС‡РЅС‹Р№ РїРѕРІР°СЂ. РћРґРЅР°РєРѕ Сѓ РЅРµРµ РЅРёРєРѕРіРґР° РЅРµ Р±С‹Р»Рѕ РїСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹С… СѓСЂРѕРєРѕРІ",
    id                   : 369
  }, {
    word                 : "injustice",
    image                : "files/19_0370.jpg",
    audio                : "files/19_0370.mp3",
    audioMeaning         : "files/19_0370_meaning.mp3",
    audioExample         : "files/19_0370_example.mp3",
    textMeaning          : "Injustice is a lack of fairness or justice",
    textExample          : "Putting an innocent person in jail is an act of injustice",
    transcription        : "[indК’КЊМЃstis]",
    wordTranslate        : "РЅРµСЃРїСЂР°РІРµРґР»РёРІРѕСЃС‚СЊ",
    textMeaningTranslate : "РќРµСЃРїСЂР°РІРµРґР»РёРІРѕСЃС‚СЊ - СЌС‚Рѕ РѕС‚СЃСѓС‚СЃС‚РІРёРµ СЃРїСЂР°РІРµРґР»РёРІРѕСЃС‚Рё РёР»Рё СЃРїСЂР°РІРµРґР»РёРІРѕСЃС‚Рё",
    textExampleTranslate : "РџРѕСЃС‹Р»РєР° РЅРµРІРёРЅРЅРѕРіРѕ С‡РµР»РѕРІРµРєР° РІ С‚СЋСЂСЊРјСѓ СЏРІР»СЏРµС‚СЃСЏ Р°РєС‚РѕРј РЅРµСЃРїСЂР°РІРµРґР»РёРІРѕСЃС‚Рё",
    id                   : 370
  }, {
    word                 : "international",
    image                : "files/19_0371.jpg",
    audio                : "files/19_0371.mp3",
    audioMeaning         : "files/19_0371_meaning.mp3",
    audioExample         : "files/19_0371_example.mp3",
    textMeaning          : "If something is international, it involves more than one country",
    textExample          : "The United Nations is a powerful international organization",
    transcription        : "[Г¬ntЙ™rnЗЅКѓЙ™nЙ™l]",
    wordTranslate        : "РјРµР¶РґСѓРЅР°СЂРѕРґРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РЅРѕСЃРёС‚ РјРµР¶РґСѓРЅР°СЂРѕРґРЅС‹Р№ С…Р°СЂР°РєС‚РµСЂ, СЌС‚Рѕ Р·Р°С‚СЂР°РіРёРІР°РµС‚ Р±РѕР»РµРµ РѕРґРЅРѕР№ СЃС‚СЂР°РЅС‹",
    textExampleTranslate : "РћСЂРіР°РЅРёР·Р°С†РёСЏ РћР±СЉРµРґРёРЅРµРЅРЅС‹С… РќР°С†РёР№ СЏРІР»СЏРµС‚СЃСЏ РјРѕС‰РЅРѕР№ РјРµР¶РґСѓРЅР°СЂРѕРґРЅРѕР№ РѕСЂРіР°РЅРёР·Р°С†РёРµР№",
    id                   : 371
  }, {
    word                 : "lawyer",
    image                : "files/19_0372.jpg",
    audio                : "files/19_0372.mp3",
    audioMeaning         : "files/19_0372_meaning.mp3",
    audioExample         : "files/19_0372_example.mp3",
    textMeaning          : "A lawyer works with the law and represents people in court",
    textExample          : "The lawyer left the courthouse after the judge made her decision",
    transcription        : "[lЙ”МЃЛђjЙ™Лђr]",
    wordTranslate        : "Р°РґРІРѕРєР°С‚",
    textMeaningTranslate : "РђРґРІРѕРєР°С‚ СЂР°Р±РѕС‚Р°РµС‚ СЃ Р·Р°РєРѕРЅРѕРј Рё РїСЂРµРґСЃС‚Р°РІР»СЏРµС‚ Р»СЋРґРµР№ РІ СЃСѓРґРµ",
    textExampleTranslate : "РђРґРІРѕРєР°С‚ РїРѕРєРёРЅСѓР» Р·РґР°РЅРёРµ СЃСѓРґР° РїРѕСЃР»Рµ С‚РѕРіРѕ, РєР°Рє СЃСѓРґСЊСЏ РІС‹РЅРµСЃР»Р° СЂРµС€РµРЅРёРµ",
    id                   : 372
  }, {
    word                 : "mention",
    image                : "files/19_0373.jpg",
    audio                : "files/19_0373.mp3",
    audioMeaning         : "files/19_0373_meaning.mp3",
    audioExample         : "files/19_0373_example.mp3",
    textMeaning          : "To mention something is to talk about it",
    textExample          : "The doctors mentioned the problems that the patient was having",
    transcription        : "[mГ©nКѓЙ™n]",
    wordTranslate        : "РѕС‚РјРµС‚РёС‚СЊ",
    textMeaningTranslate : "РЈРїРѕРјРёРЅР°С‚СЊ С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ РіРѕРІРѕСЂРёС‚СЊ РѕР± СЌС‚РѕРј",
    textExampleTranslate : "Р’СЂР°С‡Рё СѓРїРѕРјСЏРЅСѓР»Рё Рѕ РїСЂРѕР±Р»РµРјР°С…, СЃ РєРѕС‚РѕСЂС‹РјРё СЃС‚Р°Р»РєРёРІР°Р»СЃСЏ РїР°С†РёРµРЅС‚",
    id                   : 373
  }, {
    word                 : "old",
    image                : "files/19_0374.jpg",
    audio                : "files/19_0374.mp3",
    audioMeaning         : "files/19_0374_meaning.mp3",
    audioExample         : "files/19_0374_example.mp3",
    textMeaning          : "Someone who is old has lived for many years",
    textExample          : "My mother is seventy years old now",
    transcription        : "[ould]",
    wordTranslate        : "СЃС‚Р°СЂС‹Р№",
    textMeaningTranslate : "РўРѕС‚, РєС‚Рѕ СЃС‚Р°СЂ, РїСЂРѕР¶РёР» РјРЅРѕРіРѕ Р»РµС‚",
    textExampleTranslate : "РњРѕРµР№ РјР°РјРµ СЃРµР№С‡Р°СЃ СЃРµРјСЊРґРµСЃСЏС‚ Р»РµС‚",
    id                   : 374
  }, {
    word                 : "policy",
    image                : "files/19_0375.jpg",
    audio                : "files/19_0375.mp3",
    audioMeaning         : "files/19_0375_meaning.mp3",
    audioExample         : "files/19_0375_example.mp3",
    textMeaning          : "A policy is a rule",
    textExample          : "He told us that his policy was to put customers first",
    transcription        : "[pЙ‘МЃlЙ™si]",
    wordTranslate        : "РїРѕР»РёС‚РёРєР°",
    textMeaningTranslate : "РџРѕР»РёС‚РёРєР° - СЌС‚Рѕ РїСЂР°РІРёР»Рѕ",
    textExampleTranslate : "РћРЅ СЃРєР°Р·Р°Р» РЅР°Рј, С‡С‚Рѕ РµРіРѕ РїРѕР»РёС‚РёРєР° - СЃС‚Р°РІРёС‚СЊ РєР»РёРµРЅС‚РѕРІ РЅР° РїРµСЂРІРѕРµ РјРµСЃС‚Рѕ",
    id                   : 375
  }, {
    word                 : "social",
    image                : "files/19_0376.jpg",
    audio                : "files/19_0376.mp3",
    audioMeaning         : "files/19_0376_meaning.mp3",
    audioExample         : "files/19_0376_example.mp3",
    textMeaning          : "If something is social, it is about many people in a community",
    textExample          : "People should come together and fix the worldвЂ™s social problems",
    transcription        : "[sГіuКѓЙ™l]",
    wordTranslate        : "СЃРѕС†РёР°Р»СЊРЅРѕРµ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЏРІР»СЏРµС‚СЃСЏ СЃРѕС†РёР°Р»СЊРЅС‹Рј, СЌС‚Рѕ РєР°СЃР°РµС‚СЃСЏ РјРЅРѕРіРёС… Р»СЋРґРµР№ РІ СЃРѕРѕР±С‰РµСЃС‚РІРµ",
    textExampleTranslate : "Р›СЋРґРё РґРѕР»Р¶РЅС‹ СЃРѕР±СЂР°С‚СЊСЃСЏ РІРјРµСЃС‚Рµ Рё СЂРµС€РёС‚СЊ СЃРѕС†РёР°Р»СЊРЅС‹Рµ РїСЂРѕР±Р»РµРјС‹ РјРёСЂР°",
    id                   : 376
  }, {
    word                 : "speech",
    image                : "files/19_0377.jpg",
    audio                : "files/19_0377.mp3",
    audioMeaning         : "files/19_0377_meaning.mp3",
    audioExample         : "files/19_0377_example.mp3",
    textMeaning          : "A speech is something said to a group of people",
    textExample          : "She gave a speech to the class",
    transcription        : "[spiЛђtКѓ]",
    wordTranslate        : "СЂРµС‡СЊ",
    textMeaningTranslate : "Р РµС‡СЊ - СЌС‚Рѕ С‡С‚Рѕ-С‚Рѕ, СЃРєР°Р·Р°РЅРЅРѕРµ РіСЂСѓРїРїРµ Р»СЋРґРµР№",
    textExampleTranslate : "РћРЅР° РІС‹СЃС‚СѓРїРёР»Р° СЃ СЂРµС‡СЊСЋ РїРµСЂРµРґ РєР»Р°СЃСЃРѕРј",
    id                   : 377
  }, {
    word                 : "staff",
    image                : "files/19_0378.jpg",
    audio                : "files/19_0378.mp3",
    audioMeaning         : "files/19_0378_meaning.mp3",
    audioExample         : "files/19_0378_example.mp3",
    textMeaning          : "A staff is a group of people working together in a company",
    textExample          : "My dad has a staff of four people to help him at the office",
    transcription        : "[stГ¦f]",
    wordTranslate        : "СЃРѕС‚СЂСѓРґРЅРёРєРё",
    textMeaningTranslate : "РџРµСЂСЃРѕРЅР°Р» - СЌС‚Рѕ РіСЂСѓРїРїР° Р»СЋРґРµР№, СЂР°Р±РѕС‚Р°СЋС‰РёС… РІРјРµСЃС‚Рµ РІ РєРѕРјРїР°РЅРёРё",
    textExampleTranslate : "РЈ РјРѕРµРіРѕ РѕС‚С†Р° РµСЃС‚СЊ С€С‚Р°С‚ РёР· С‡РµС‚С‹СЂРµС… С‡РµР»РѕРІРµРє, С‡С‚РѕР±С‹ РїРѕРјРѕС‡СЊ РµРјСѓ РІ РѕС„РёСЃРµ",
    id                   : 378
  }, {
    word                 : "toward",
    image                : "files/19_0379.jpg",
    audio                : "files/19_0379.mp3",
    audioMeaning         : "files/19_0379_meaning.mp3",
    audioExample         : "files/19_0379_example.mp3",
    textMeaning          : "If you go toward something, you go closer to it",
    textExample          : "Santa walked toward my house with a bag of gifts",
    transcription        : "[tЙ™wЙ”МЃЛђrd]",
    wordTranslate        : "РІ СЃС‚РѕСЂРѕРЅСѓ",
    textMeaningTranslate : "Р•СЃР»Рё РІС‹ РёРґРµС‚Рµ Рє С‡РµРјСѓ-С‚Рѕ, РІС‹ РёРґРµС‚Рµ Р±Р»РёР¶Рµ Рє СЌС‚РѕРјСѓ",
    textExampleTranslate : "РЎР°РЅС‚Р° С€РµР» Рє РјРѕРµРјСѓ РґРѕРјСѓ СЃ РјРµС€РєРѕРј РїРѕРґР°СЂРєРѕРІ",
    id                   : 379
  }, {
    word                 : "wood",
    image                : "files/19_0380.jpg",
    audio                : "files/19_0380.mp3",
    audioMeaning         : "files/19_0380_meaning.mp3",
    audioExample         : "files/19_0380_example.mp3",
    textMeaning          : "Wood is the thing that trees are made of",
    textExample          : "I put the pieces of wood in a pile",
    transcription        : "[wud]",
    wordTranslate        : "РґРµСЂРµРІРѕ",
    textMeaningTranslate : "Р”РµСЂРµРІРѕ - СЌС‚Рѕ С‚Рѕ, РёР· С‡РµРіРѕ СЃРґРµР»Р°РЅС‹ РґРµСЂРµРІСЊСЏ",
    textExampleTranslate : "РЇ РїРѕР»РѕР¶РёР» РєСѓСЃРѕС‡РєРё РґРµСЂРµРІР° РІ РєСѓС‡Сѓ",
    id                   : 380
  }, {
    word                 : "achieve",
    image                : "files/20_0381.jpg",
    audio                : "files/20_0381.mp3",
    audioMeaning         : "files/20_0381_meaning.mp3",
    audioExample         : "files/20_0381_example.mp3",
    textMeaning          : "To achieve something is to successfully do it after trying hard",
    textExample          : "I was happy that I could achieve my goal",
    transcription        : "[Й™tКѓГ­Лђv]",
    wordTranslate        : "РґРѕСЃС‚РёР¶РµРЅРёСЏ",
    textMeaningTranslate : "Р”РѕСЃС‚РёРіРЅСѓС‚СЊ С‡РµРіРѕ-Р»РёР±Рѕ - СЌС‚Рѕ СѓСЃРїРµС€РЅРѕ СЃРґРµР»Р°С‚СЊ СЌС‚Рѕ РїРѕСЃР»Рµ С‚РѕРіРѕ, РєР°Рє РјРЅРѕРіРѕ СЃРёР»",
    textExampleTranslate : "РЇ Р±С‹Р» СЃС‡Р°СЃС‚Р»РёРІ, С‡С‚Рѕ СЃРјРѕРі РґРѕСЃС‚РёС‡СЊ СЃРІРѕРµР№ С†РµР»Рё",
    id                   : 381
  }, {
    word                 : "advise",
    image                : "files/20_0382.jpg",
    audio                : "files/20_0382.mp3",
    audioMeaning         : "files/20_0382_meaning.mp3",
    audioExample         : "files/20_0382_example.mp3",
    textMeaning          : "To advise someone is to tell them what to do",
    textExample          : "My mother often advises people about their money",
    transcription        : "[Й™dvГЎiz]",
    wordTranslate        : "СЃРѕРІРµС‚РѕРІР°С‚СЊ",
    textMeaningTranslate : "РџРѕСЃРѕРІРµС‚РѕРІР°С‚СЊ РєРѕРјСѓ-С‚Рѕ - СЌС‚Рѕ СЃРєР°Р·Р°С‚СЊ РёРј, С‡С‚Рѕ РґРµР»Р°С‚СЊ",
    textExampleTranslate : "РњРѕСЏ РјР°РјР° С‡Р°СЃС‚Рѕ СЃРѕРІРµС‚СѓРµС‚ Р»СЋРґСЏРј РѕР± РёС… РґРµРЅСЊРіР°С…",
    id                   : 382
  }, {
    word                 : "already",
    image                : "files/20_0383.jpg",
    audio                : "files/20_0383.mp3",
    audioMeaning         : "files/20_0383_meaning.mp3",
    audioExample         : "files/20_0383_example.mp3",
    textMeaning          : "If something happens already, it happens before a certain time",
    textExample          : "It is already time for the movie to start. LetвЂ™s go in",
    transcription        : "[Й”ЛђlrГ©di]",
    wordTranslate        : "СѓР¶Рµ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СѓР¶Рµ РїСЂРѕРёСЃС…РѕРґРёС‚, СЌС‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚ СЂР°РЅСЊС€Рµ РѕРїСЂРµРґРµР»РµРЅРЅРѕРіРѕ РІСЂРµРјРµРЅРё",
    textExampleTranslate : "Р¤РёР»СЊРј СѓР¶Рµ РїРѕСЂР° РЅР°С‡РёРЅР°С‚СЊ. РџРѕР№РґРµРј",
    id                   : 383
  }, {
    word                 : "basic",
    image                : "files/20_0384.jpg",
    audio                : "files/20_0384.mp3",
    audioMeaning         : "files/20_0384_meaning.mp3",
    audioExample         : "files/20_0384_example.mp3",
    textMeaning          : "If something is basic, it is very simple or easy",
    textExample          : "I learned some basic English skills in school today",
    transcription        : "[bГ©isik]",
    wordTranslate        : "Р±Р°Р·РѕРІС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЏРІР»СЏРµС‚СЃСЏ РѕСЃРЅРѕРІРЅС‹Рј, СЌС‚Рѕ РѕС‡РµРЅСЊ РїСЂРѕСЃС‚Рѕ РёР»Рё Р»РµРіРєРѕ",
    textExampleTranslate : "РЇ РІС‹СѓС‡РёР» РЅРµРєРѕС‚РѕСЂС‹Рµ Р±Р°Р·РѕРІС‹Рµ РЅР°РІС‹РєРё Р°РЅРіР»РёР№СЃРєРѕРіРѕ РІ С€РєРѕР»Рµ СЃРµРіРѕРґРЅСЏ",
    id                   : 384
  }, {
    word                 : "bit",
    image                : "files/20_0385.jpg",
    audio                : "files/20_0385.mp3",
    audioMeaning         : "files/20_0385_meaning.mp3",
    audioExample         : "files/20_0385_example.mp3",
    textMeaning          : "A bit is a small amount of something",
    textExample          : "I ate a bit of chocolate before I went to bed",
    transcription        : "[bit]",
    wordTranslate        : "РЅРµРјРЅРѕРіРѕ",
    textMeaningTranslate : "РќРµРјРЅРѕРіРѕ - СЌС‚Рѕ РЅРµР±РѕР»СЊС€РѕРµ РєРѕР»РёС‡РµСЃС‚РІРѕ С‡РµРіРѕ-С‚Рѕ",
    textExampleTranslate : "РЇ СЃСЉРµР» РЅРµРјРЅРѕРіРѕ С€РѕРєРѕР»Р°РґР° РїРµСЂРµРґ СЃРЅРѕРј",
    id                   : 385
  }, {
    word                 : "consider",
    image                : "files/20_0386.jpg",
    audio                : "files/20_0386.mp3",
    audioMeaning         : "files/20_0386_meaning.mp3",
    audioExample         : "files/20_0386_example.mp3",
    textMeaning          : "To consider something means to think about it",
    textExample          : "Pete didnвЂ™t like his job. He considered getting a new one",
    transcription        : "[kЙ™nsГ­dЙ™r]",
    wordTranslate        : "СЂР°СЃСЃРјР°С‚СЂРёРІР°С‚СЊ",
    textMeaningTranslate : "Р Р°СЃСЃРјР°С‚СЂРёРІР°С‚СЊ С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ РґСѓРјР°С‚СЊ РѕР± СЌС‚РѕРј",
    textExampleTranslate : "РџРёС‚Сѓ РЅРµ РїРѕРЅСЂР°РІРёР»Р°СЃСЊ РµРіРѕ СЂР°Р±РѕС‚Р°. РћРЅ РїРѕРґСѓРјС‹РІР°Р» РїРѕР»СѓС‡РёС‚СЊ РЅРѕРІСѓСЋ",
    id                   : 386
  }, {
    word                 : "destroy",
    image                : "files/20_0387.jpg",
    audio                : "files/20_0387.mp3",
    audioMeaning         : "files/20_0387_meaning.mp3",
    audioExample         : "files/20_0387_example.mp3",
    textMeaning          : "To destroy means to damage something so badly that it cannot be used",
    textExample          : "The glass was destroyed",
    transcription        : "[distrЙ”МЃi]",
    wordTranslate        : "СѓРЅРёС‡С‚РѕР¶РёС‚СЊ",
    textMeaningTranslate : "РЈРЅРёС‡С‚РѕР¶РёС‚СЊ - Р·РЅР°С‡РёС‚ РїРѕРІСЂРµРґРёС‚СЊ С‡С‚Рѕ-С‚Рѕ РЅР°СЃС‚РѕР»СЊРєРѕ СЃРёР»СЊРЅРѕРµ, С‡С‚Рѕ РµРіРѕ РЅРµР»СЊР·СЏ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ",
    textExampleTranslate : "РЎС‚РµРєР»Рѕ Р±С‹Р»Рѕ СЂР°Р·СЂСѓС€РµРЅРѕ",
    id                   : 387
  }, {
    word                 : "entertain",
    image                : "files/20_0388.jpg",
    audio                : "files/20_0388.mp3",
    audioMeaning         : "files/20_0388_meaning.mp3",
    audioExample         : "files/20_0388_example.mp3",
    textMeaning          : "To entertain someone is to do something that they enjoy",
    textExample          : "The clown entertained the kids at the party",
    transcription        : "[ГЁntЙ™rtГ©in]",
    wordTranslate        : "СЂР°Р·РІР»РµРєР°С‚СЊ",
    textMeaningTranslate : "Р Р°Р·РІР»РµРєР°С‚СЊ РєРѕРіРѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РґРµР»Р°С‚СЊ С‚Рѕ, С‡С‚Рѕ РµРјСѓ РЅСЂР°РІРёС‚СЃСЏ",
    textExampleTranslate : "РљР»РѕСѓРЅ СЂР°Р·РІР»РµРєР°Р» РґРµС‚РµР№ РЅР° РІРµС‡РµСЂРёРЅРєРµ",
    id                   : 388
  }, {
    word                 : "extra",
    image                : "files/20_0389.jpg",
    audio                : "files/20_0389.mp3",
    audioMeaning         : "files/20_0389_meaning.mp3",
    audioExample         : "files/20_0389_example.mp3",
    textMeaning          : "If something is extra, it is more than what is needed",
    textExample          : "The squirrel had extra nuts for the winter",
    transcription        : "[Г©kstrЙ™]",
    wordTranslate        : "СЌРєСЃС‚СЂР°",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ Р»РёС€РЅРµРµ, СЌС‚Рѕ Р±РѕР»СЊС€Рµ, С‡РµРј РЅСѓР¶РЅРѕ",
    textExampleTranslate : "РЈ Р±РµР»РєРё Р±С‹Р»Рё РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РѕСЂРµС…Рё РЅР° Р·РёРјСѓ",
    id                   : 389
  }, {
    word                 : "goal",
    image                : "files/20_0390.jpg",
    audio                : "files/20_0390.mp3",
    audioMeaning         : "files/20_0390_meaning.mp3",
    audioExample         : "files/20_0390_example.mp3",
    textMeaning          : "A goal is something you work toward",
    textExample          : "Her goal was to become a doctor",
    transcription        : "[goul]",
    wordTranslate        : "С†РµР»СЊ",
    textMeaningTranslate : "Р¦РµР»СЊ - СЌС‚Рѕ С‚Рѕ, СЂР°РґРё С‡РµРіРѕ С‚С‹ СЂР°Р±РѕС‚Р°РµС€СЊ",
    textExampleTranslate : "Р•Рµ С†РµР»СЊСЋ Р±С‹Р»Рѕ СЃС‚Р°С‚СЊ РІСЂР°С‡РѕРј",
    id                   : 390
  }, {
    word                 : "lie",
    image                : "files/20_0391.jpg",
    audio                : "files/20_0391.mp3",
    audioMeaning         : "files/20_0391_meaning.mp3",
    audioExample         : "files/20_0391_example.mp3",
    textMeaning          : "To lie is to say or write something untrue to deceive someone",
    textExample          : "Whenever Pinocchio lied to his father, his nose grew",
    transcription        : "[lai]",
    wordTranslate        : "Р»РѕР¶СЊ",
    textMeaningTranslate : "Р›РіР°С‚СЊ - Р·РЅР°С‡РёС‚ РіРѕРІРѕСЂРёС‚СЊ РёР»Рё РїРёСЃР°С‚СЊ С‡С‚Рѕ-С‚Рѕ РЅРµРїСЂР°РІРґРёРІРѕРµ, С‡С‚РѕР±С‹ РєРѕРіРѕ-С‚Рѕ РѕР±РјР°РЅСѓС‚СЊ",
    textExampleTranslate : "Р’СЃСЏРєРёР№ СЂР°Р·, РєРѕРіРґР° РџРёРЅРѕРєРєРёРѕ Р»РіР°Р» СЃРІРѕРµРјСѓ РѕС‚С†Сѓ, РµРіРѕ РЅРѕСЃ СЂРѕСЃ",
    id                   : 391
  }, {
    word                 : "meat",
    image                : "files/20_0392.jpg",
    audio                : "files/20_0392.mp3",
    audioMeaning         : "files/20_0392_meaning.mp3",
    audioExample         : "files/20_0392_example.mp3",
    textMeaning          : "Meat is food made of animals",
    textExample          : "This piece of meat IвЂ™m eating tastes very good",
    transcription        : "[miЛђt]",
    wordTranslate        : "РјСЏСЃРѕ",
    textMeaningTranslate : "РњСЏСЃРѕ - СЌС‚Рѕ РµРґР° РёР· Р¶РёРІРѕС‚РЅС‹С…",
    textExampleTranslate : "Р­С‚РѕС‚ РєСѓСЃРѕРє РјСЏСЃР°, РєРѕС‚РѕСЂС‹Р№ СЏ РµРј, РёРјРµРµС‚ РѕС‡РµРЅСЊ С…РѕСЂРѕС€РёР№ РІРєСѓСЃ",
    id                   : 392
  }, {
    word                 : "opinion",
    image                : "files/20_0393.jpg",
    audio                : "files/20_0393.mp3",
    audioMeaning         : "files/20_0393_meaning.mp3",
    audioExample         : "files/20_0393_example.mp3",
    textMeaning          : "An opinion is a thought about a person or a thing",
    textExample          : "Meg told me her opinion of my story. She said it was not funny",
    transcription        : "[Й™pГ­njЙ™n]",
    wordTranslate        : "РјРЅРµРЅРёРµ",
    textMeaningTranslate : "РњРЅРµРЅРёРµ - СЌС‚Рѕ РјС‹СЃР»СЊ Рѕ С‡РµР»РѕРІРµРєРµ РёР»Рё РІРµС‰Рё",
    textExampleTranslate : "РњСЌРі СЂР°СЃСЃРєР°Р·Р°Р»Р° РјРЅРµ СЃРІРѕРµ РјРЅРµРЅРёРµ Рѕ РјРѕРµР№ РёСЃС‚РѕСЂРёРё. РћРЅР° СЃРєР°Р·Р°Р»Р°, С‡С‚Рѕ СЌС‚Рѕ РЅРµ СЃРјРµС€РЅРѕ",
    id                   : 393
  }, {
    word                 : "real",
    image                : "files/20_0394.jpg",
    audio                : "files/20_0394.mp3",
    audioMeaning         : "files/20_0394_meaning.mp3",
    audioExample         : "files/20_0394_example.mp3",
    textMeaning          : "If something is real, it actually exists",
    textExample          : "Some people donвЂ™t believe in aliens from space, but I think theyвЂ™re real",
    transcription        : "[rГ­ЛђЙ™l]",
    wordTranslate        : "СЂРµР°Р»СЊРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЂРµР°Р»СЊРЅРѕ, РѕРЅРѕ РґРµР№СЃС‚РІРёС‚РµР»СЊРЅРѕ СЃСѓС‰РµСЃС‚РІСѓРµС‚",
    textExampleTranslate : "РќРµРєРѕС‚РѕСЂС‹Рµ Р»СЋРґРё РЅРµ РІРµСЂСЏС‚ РІ РїСЂРёС€РµР»СЊС†РµРІ РёР· РєРѕСЃРјРѕСЃР°, РЅРѕ СЏ РґСѓРјР°СЋ, С‡С‚Рѕ РѕРЅРё РЅР°СЃС‚РѕСЏС‰РёРµ",
    id                   : 394
  }, {
    word                 : "reflect",
    image                : "files/20_0395.jpg",
    audio                : "files/20_0395.mp3",
    audioMeaning         : "files/20_0395_meaning.mp3",
    audioExample         : "files/20_0395_example.mp3",
    textMeaning          : "To reflect is when a surface sends back light, heat, sound or an image",
    textExample          : "Her face was reflected in the smooth glass",
    transcription        : "[rifГ©kt]",
    wordTranslate        : "РѕС‚СЂР°Р¶Р°С‚СЊ",
    textMeaningTranslate : "РћС‚СЂР°Р¶Р°С‚СЊ - СЌС‚Рѕ РєРѕРіРґР° РїРѕРІРµСЂС…РЅРѕСЃС‚СЊ РїРѕСЃС‹Р»Р°РµС‚ РѕР±СЂР°С‚РЅРѕ СЃРІРµС‚, С‚РµРїР»Рѕ, Р·РІСѓРє РёР»Рё РёР·РѕР±СЂР°Р¶РµРЅРёРµ",
    textExampleTranslate : "Р•Рµ Р»РёС†Рѕ РѕС‚СЂР°Р¶Р°Р»РѕСЃСЊ РІ РіР»Р°РґРєРѕРј СЃС‚РµРєР»Рµ",
    id                   : 395
  }, {
    word                 : "regard",
    image                : "files/20_0396.jpg",
    audio                : "files/20_0396.mp3",
    audioMeaning         : "files/20_0396_meaning.mp3",
    audioExample         : "files/20_0396_example.mp3",
    textMeaning          : "To regard people is to think of them in a certain way",
    textExample          : "The boy regarded the girl as a good friend",
    transcription        : "[rigЙ‘МЃЛђrd]",
    wordTranslate        : "СѓС‡РёС‚С‹РІР°СЏ",
    textMeaningTranslate : "РћС‚РЅРѕСЃРёС‚СЊСЃСЏ Рє Р»СЋРґСЏРј Р·РЅР°С‡РёС‚ РґСѓРјР°С‚СЊ Рѕ РЅРёС… РѕРїСЂРµРґРµР»РµРЅРЅС‹Рј РѕР±СЂР°Р·РѕРј",
    textExampleTranslate : "РњР°Р»СЊС‡РёРє СЃС‡РёС‚Р°Р» РґРµРІСѓС€РєСѓ С…РѕСЂРѕС€РёРј РґСЂСѓРіРѕРј",
    id                   : 396
  }, {
    word                 : "serve",
    image                : "files/20_0397.jpg",
    audio                : "files/20_0397.mp3",
    audioMeaning         : "files/20_0397_meaning.mp3",
    audioExample         : "files/20_0397_example.mp3",
    textMeaning          : "To serve someone is to give them food or drinks",
    textExample          : "He served us our drinks quickly",
    transcription        : "[sЙ™Лђrv]",
    wordTranslate        : "РѕР±СЃР»СѓР¶РёРІР°С‚СЊ",
    textMeaningTranslate : "РЎР»СѓР¶РёС‚СЊ РєРѕРјСѓ-С‚Рѕ - Р·РЅР°С‡РёС‚ РґР°РІР°С‚СЊ РµРјСѓ РµРґСѓ РёР»Рё РЅР°РїРёС‚РєРё",
    textExampleTranslate : "РћРЅ РїРѕРґР°Р» РЅР°Рј РЅР°С€Рё РЅР°РїРёС‚РєРё Р±С‹СЃС‚СЂРѕ",
    id                   : 397
  }, {
    word                 : "vegetable",
    image                : "files/20_0398.jpg",
    audio                : "files/20_0398.mp3",
    audioMeaning         : "files/20_0398_meaning.mp3",
    audioExample         : "files/20_0398_example.mp3",
    textMeaning          : "A vegetable is a plant used as food",
    textExample          : "Carrots are my favorite vegetable",
    transcription        : "[vГ©dК’Й™tЙ™bl]",
    wordTranslate        : "СЂР°СЃС‚РёС‚РµР»СЊРЅРѕРµ",
    textMeaningTranslate : "РћРІРѕС‰ - СЌС‚Рѕ СЂР°СЃС‚РµРЅРёРµ, РёСЃРїРѕР»СЊР·СѓРµРјРѕРµ РІ РїРёС‰Сѓ",
    textExampleTranslate : "РњРѕСЂРєРѕРІСЊ - РјРѕР№ Р»СЋР±РёРјС‹Р№ РѕРІРѕС‰",
    id                   : 398
  }, {
    word                 : "war",
    image                : "files/20_0399.jpg",
    audio                : "files/20_0399.mp3",
    audioMeaning         : "files/20_0399_meaning.mp3",
    audioExample         : "files/20_0399_example.mp3",
    textMeaning          : "A war is a big fight between two groups of people",
    textExample          : "Many young men died in the war",
    transcription        : "[wЙ”Лђr]",
    wordTranslate        : "РІРѕР№РЅР°",
    textMeaningTranslate : "Р’РѕР№РЅР° - СЌС‚Рѕ Р±РѕР»СЊС€Р°СЏ Р±РёС‚РІР° РјРµР¶РґСѓ РґРІСѓРјСЏ РіСЂСѓРїРїР°РјРё Р»СЋРґРµР№",
    textExampleTranslate : "РњРЅРѕРіРёРµ РјРѕР»РѕРґС‹Рµ Р»СЋРґРё РїРѕРіРёР±Р»Рё РЅР° РІРѕР№РЅРµ",
    id                   : 399
  }, {
    word                 : "worth",
    image                : "files/20_0400.jpg",
    audio                : "files/20_0400.mp3",
    audioMeaning         : "files/20_0400_meaning.mp3",
    audioExample         : "files/20_0400_example.mp3",
    textMeaning          : "If something is worth an amount of money, it costs that amount",
    textExample          : "Our house is worth a lot of money",
    transcription        : "[wЙ™ЛђrОё]",
    wordTranslate        : "С†РµРЅРЅРѕСЃС‚СЊ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЃС‚РѕРёС‚ РґРµРЅРµРі, СЌС‚Рѕ СЃС‚РѕРёС‚ СЌС‚РѕР№ СЃСѓРјРјС‹",
    textExampleTranslate : "РќР°С€ РґРѕРј СЃС‚РѕРёС‚ РјРЅРѕРіРѕ РґРµРЅРµРі",
    id                   : 400
  }, {
    word                 : "appear",
    image                : "files/21_0401.jpg",
    audio                : "files/21_0401.mp3",
    audioMeaning         : "files/21_0401_meaning.mp3",
    audioExample         : "files/21_0401_example.mp3",
    textMeaning          : "To appear is to seem",
    textExample          : "She appeared to be sad. She was crying",
    transcription        : "[Й™pГ­Й™r]",
    wordTranslate        : "РїРѕСЏРІР»СЏСЋС‚СЃСЏ",
    textMeaningTranslate : "РџРѕСЏРІРёС‚СЊСЃСЏ - Р·РЅР°С‡РёС‚ РїРѕРєР°Р·Р°С‚СЊСЃСЏ",
    textExampleTranslate : "РћРЅР° РєР°Р·Р°Р»Р°СЃСЊ РіСЂСѓСЃС‚РЅРѕР№. РћРЅР° РїР»Р°РєР°Р»Р°",
    id                   : 401
  }, {
    word                 : "base",
    image                : "files/21_0402.jpg",
    audio                : "files/21_0402.mp3",
    audioMeaning         : "files/21_0402_meaning.mp3",
    audioExample         : "files/21_0402_example.mp3",
    textMeaning          : "The base is the bottom of something",
    textExample          : "The base of the table has three legs",
    transcription        : "[beis]",
    wordTranslate        : "Р±Р°Р·Р°",
    textMeaningTranslate : "Р‘Р°Р·Р° - СЌС‚Рѕ РѕСЃРЅРѕРІР°РЅРёРµ С‡РµРіРѕ-С‚Рѕ",
    textExampleTranslate : "РЈ РѕСЃРЅРѕРІР°РЅРёСЏ СЃС‚РѕР»Р° С‚СЂРё РЅРѕР¶РєРё",
    id                   : 402
  }, {
    word                 : "brain",
    image                : "files/21_0403.jpg",
    audio                : "files/21_0403.mp3",
    audioMeaning         : "files/21_0403_meaning.mp3",
    audioExample         : "files/21_0403_example.mp3",
    textMeaning          : "The brain is the organ in your head that lets you think",
    textExample          : "You must use your brain to solve the problem",
    transcription        : "[brein]",
    wordTranslate        : "РіРѕР»РѕРІРЅРѕР№ РјРѕР·Рі",
    textMeaningTranslate : "РњРѕР·Рі - СЌС‚Рѕ РѕСЂРіР°РЅ РІ РІР°С€РµР№ РіРѕР»РѕРІРµ, РєРѕС‚РѕСЂС‹Р№ РїРѕР·РІРѕР»СЏРµС‚ РІР°Рј РґСѓРјР°С‚СЊ",
    textExampleTranslate : "Р’С‹ РґРѕР»Р¶РЅС‹ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ СЃРІРѕР№ РјРѕР·Рі, С‡С‚РѕР±С‹ СЂРµС€РёС‚СЊ РїСЂРѕР±Р»РµРјСѓ",
    id                   : 403
  }, {
    word                 : "career",
    image                : "files/21_0404.jpg",
    audio                : "files/21_0404.mp3",
    audioMeaning         : "files/21_0404_meaning.mp3",
    audioExample         : "files/21_0404_example.mp3",
    textMeaning          : "A career is a job that you do for a large part of your life",
    textExample          : "He was in the hospitality business for most of his career",
    transcription        : "[kЙ™rГ­Й™r]",
    wordTranslate        : "РєР°СЂСЊРµСЂР°",
    textMeaningTranslate : "РљР°СЂСЊРµСЂР° - СЌС‚Рѕ СЂР°Р±РѕС‚Р°, РєРѕС‚РѕСЂСѓСЋ РІС‹ РґРµР»Р°РµС‚Рµ Р±РѕР»СЊС€СѓСЋ С‡Р°СЃС‚СЊ СЃРІРѕРµР№ Р¶РёР·РЅРё",
    textExampleTranslate : "РћРЅ Р±С‹Р» РІ РіРѕСЃС‚РёРЅРёС‡РЅРѕРј Р±РёР·РЅРµСЃРµ Р±РѕР»СЊС€СѓСЋ С‡Р°СЃС‚СЊ СЃРІРѕРµР№ РєР°СЂСЊРµСЂС‹",
    id                   : 404
  }, {
    word                 : "clerk",
    image                : "files/21_0405.jpg",
    audio                : "files/21_0405.mp3",
    audioMeaning         : "files/21_0405_meaning.mp3",
    audioExample         : "files/21_0405_example.mp3",
    textMeaning          : "A clerk is a type of worker. Clerks in a store help customers",
    textExample          : "The clerk added up her bill for the groceries",
    transcription        : "[klЙ™Лђrk]",
    wordTranslate        : "РєР»РµСЂРє",
    textMeaningTranslate : "РљР»РµСЂРє - СЌС‚Рѕ С‚РёРї СЂР°Р±РѕС‚РЅРёРєР°. РљР»РµСЂРєРё РІ РјР°РіР°Р·РёРЅРµ РїРѕРјРѕРіР°СЋС‚ РїРѕРєСѓРїР°С‚РµР»СЏРј",
    textExampleTranslate : "РљР»РµСЂРє СЃР»РѕР¶РёР» СЃРІРѕР№ СЃС‡РµС‚ Р·Р° РїСЂРѕРґСѓРєС‚С‹",
    id                   : 405
  }, {
    word                 : "effort",
    image                : "files/21_0406.jpg",
    audio                : "files/21_0406.mp3",
    audioMeaning         : "files/21_0406_meaning.mp3",
    audioExample         : "files/21_0406_example.mp3",
    textMeaning          : "Effort is hard work or an attempt to do something",
    textExample          : "He always puts a lot of effort into his studies",
    transcription        : "[Г©fЙ™rt]",
    wordTranslate        : "СѓСЃРёР»РёРµ",
    textMeaningTranslate : "РЈСЃРёР»РёРµ - СЌС‚Рѕ С‚СЏР¶РµР»Р°СЏ СЂР°Р±РѕС‚Р° РёР»Рё РїРѕРїС‹С‚РєР° С‡С‚Рѕ-С‚Рѕ СЃРґРµР»Р°С‚СЊ",
    textExampleTranslate : "РћРЅ РІСЃРµРіРґР° РїСЂРёРєР»Р°РґС‹РІР°РµС‚ РјРЅРѕРіРѕ СѓСЃРёР»РёР№ Рє СѓС‡РµР±Рµ",
    id                   : 406
  }, {
    word                 : "enter",
    image                : "files/21_0407.jpg",
    audio                : "files/21_0407.mp3",
    audioMeaning         : "files/21_0407_meaning.mp3",
    audioExample         : "files/21_0407_example.mp3",
    textMeaning          : "To enter a place is to go into it",
    textExample          : "Two guards greeted me as I entered the front door",
    transcription        : "[Г©ntЙ™r]",
    wordTranslate        : "РІРѕР№С‚Рё",
    textMeaningTranslate : "Р’РѕР№С‚Рё РІ РјРµСЃС‚Рѕ - Р·РЅР°С‡РёС‚ РІРѕР№С‚Рё РІ РЅРµРіРѕ",
    textExampleTranslate : "Р”РІР° РѕС…СЂР°РЅРЅРёРєР° РІСЃС‚СЂРµС‚РёР»Рё РјРµРЅСЏ, РєРѕРіРґР° СЏ РІРѕС€РµР» РІ РїРµСЂРµРґРЅСЋСЋ РґРІРµСЂСЊ",
    id                   : 407
  }, {
    word                 : "excellent",
    image                : "files/21_0408.jpg",
    audio                : "files/21_0408.mp3",
    audioMeaning         : "files/21_0408_meaning.mp3",
    audioExample         : "files/21_0408_example.mp3",
    textMeaning          : "When something is excellent, it is very good",
    textExample          : "I got an excellent score on my school test",
    transcription        : "[Г©ksЙ™lЙ™nt]",
    wordTranslate        : "РѕС‚Р»РёС‡РЅРѕ",
    textMeaningTranslate : "РљРѕРіРґР° С‡С‚Рѕ-С‚Рѕ РѕС‚Р»РёС‡РЅРѕ, СЌС‚Рѕ РѕС‡РµРЅСЊ С…РѕСЂРѕС€Рѕ",
    textExampleTranslate : "РЇ РїРѕР»СѓС‡РёР» РѕС‚Р»РёС‡РЅСѓСЋ РѕС†РµРЅРєСѓ РЅР° С€РєРѕР»СЊРЅРѕРј С‚РµСЃС‚Рµ",
    id                   : 408
  }, {
    word                 : "hero",
    image                : "files/21_0409.jpg",
    audio                : "files/21_0409.mp3",
    audioMeaning         : "files/21_0409_meaning.mp3",
    audioExample         : "files/21_0409_example.mp3",
    textMeaning          : "A hero is a brave person who does things to help others",
    textExample          : "To children, the man in the blue and red costume was a real hero",
    transcription        : "[hГ­Лђrou]",
    wordTranslate        : "РіРµСЂРѕР№",
    textMeaningTranslate : "Р“РµСЂРѕР№ - СЃРјРµР»С‹Р№ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ РїРѕРјРѕРіР°РµС‚ РґСЂСѓРіРёРј",
    textExampleTranslate : "Р”Р»СЏ РґРµС‚РµР№ РјСѓР¶С‡РёРЅР° РІ СЃРёРЅРµ-РєСЂР°СЃРЅРѕРј РєРѕСЃС‚СЋРјРµ Р±С‹Р» РЅР°СЃС‚РѕСЏС‰РёРј РіРµСЂРѕРµРј",
    id                   : 409
  }, {
    word                 : "hurry",
    image                : "files/21_0410.jpg",
    audio                : "files/21_0410.mp3",
    audioMeaning         : "files/21_0410_meaning.mp3",
    audioExample         : "files/21_0410_example.mp3",
    textMeaning          : "To hurry is to do something quickly",
    textExample          : "I hurried home on my bike",
    transcription        : "[hЙ™МЃЛђri]",
    wordTranslate        : "С‚РѕСЂРѕРїРёС‚СЊСЃСЏ",
    textMeaningTranslate : "РЎРїРµС€РёС‚СЊ - Р·РЅР°С‡РёС‚ РґРµР»Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ Р±С‹СЃС‚СЂРѕ",
    textExampleTranslate : "РЇ РїРѕСЃРїРµС€РёР» РґРѕРјРѕР№ РЅР° СЃРІРѕРµРј РІРµР»РѕСЃРёРїРµРґРµ",
    id                   : 410
  }, {
    word                 : "inform",
    image                : "files/21_0411.jpg",
    audio                : "files/21_0411.mp3",
    audioMeaning         : "files/21_0411_meaning.mp3",
    audioExample         : "files/21_0411_example.mp3",
    textMeaning          : "To inform someone is to tell them about something",
    textExample          : "I called and informed her about my idea",
    transcription        : "[infЙ”МЃЛђrm]",
    wordTranslate        : "СЃРѕРѕР±С‰РёС‚СЊ",
    textMeaningTranslate : "РРЅС„РѕСЂРјРёСЂРѕРІР°С‚СЊ РєРѕРіРѕ-Р»РёР±Рѕ - Р·РЅР°С‡РёС‚ РіРѕРІРѕСЂРёС‚СЊ РµРјСѓ Рѕ С‡РµРј-С‚Рѕ",
    textExampleTranslate : "РЇ РїРѕР·РІРѕРЅРёР» Рё СЃРѕРѕР±С‰РёР» РµР№ Рѕ СЃРІРѕРµР№ РёРґРµРµ",
    id                   : 411
  }, {
    word                 : "later",
    image                : "files/21_0412.jpg",
    audio                : "files/21_0412.mp3",
    audioMeaning         : "files/21_0412_meaning.mp3",
    audioExample         : "files/21_0412_example.mp3",
    textMeaning          : "Later means after the present, expected, or usual time",
    textExample          : "She missed the train, so sheвЂ™ll arrive a little later than expected",
    transcription        : "[lГ©itЙ™Лђr]",
    wordTranslate        : "РїРѕС‚РѕРј",
    textMeaningTranslate : "РџРѕР·Р¶Рµ РѕР·РЅР°С‡Р°РµС‚ РїРѕСЃР»Рµ РЅР°СЃС‚РѕСЏС‰РµРіРѕ, РѕР¶РёРґР°РµРјРѕРіРѕ РёР»Рё РѕР±С‹С‡РЅРѕРіРѕ РІСЂРµРјРµРЅРё",
    textExampleTranslate : "РћРЅР° РѕРїРѕР·РґР°Р»Р° РЅР° РїРѕРµР·Рґ, РїРѕСЌС‚РѕРјСѓ РѕРЅР° РїСЂРёР±СѓРґРµС‚ РЅРµРјРЅРѕРіРѕ РїРѕР·Р¶Рµ, С‡РµРј РѕР¶РёРґР°Р»РѕСЃСЊ",
    id                   : 412
  }, {
    word                 : "leave",
    image                : "files/21_0413.jpg",
    audio                : "files/21_0413.mp3",
    audioMeaning         : "files/21_0413_meaning.mp3",
    audioExample         : "files/21_0413_example.mp3",
    textMeaning          : "To leave means to go away from someone or something",
    textExample          : "He packed his bag and was ready to leave for home",
    transcription        : "[liЛђv]",
    wordTranslate        : "РѕСЃС‚Р°РІР»СЏС‚СЊ",
    textMeaningTranslate : "РЈР№С‚Рё - Р·РЅР°С‡РёС‚ СѓР№С‚Рё РѕС‚ РєРѕРіРѕ-С‚Рѕ РёР»Рё С‡РµРіРѕ-С‚Рѕ",
    textExampleTranslate : "РћРЅ СЃРѕР±СЂР°Р» СЃРІРѕСЋ СЃСѓРјРєСѓ Рё Р±С‹Р» РіРѕС‚РѕРІ СѓРµС…Р°С‚СЊ РґРѕРјРѕР№",
    id                   : 413
  }, {
    word                 : "locate",
    image                : "files/21_0414.jpg",
    audio                : "files/21_0414.mp3",
    audioMeaning         : "files/21_0414_meaning.mp3",
    audioExample         : "files/21_0414_example.mp3",
    textMeaning          : "To locate something is to find it",
    textExample          : "I could not locate my keys in the house",
    transcription        : "[lГіukeit]",
    wordTranslate        : "РЅР°Р№С‚Рё",
    textMeaningTranslate : "РќР°Р№С‚Рё С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ РЅР°Р№С‚Рё СЌС‚Рѕ",
    textExampleTranslate : "РЇ РЅРµ РјРѕРі РЅР°Р№С‚Рё СЃРІРѕРё РєР»СЋС‡Рё РІ РґРѕРјРµ",
    id                   : 414
  }, {
    word                 : "nurse",
    image                : "files/21_0415.jpg",
    audio                : "files/21_0415.mp3",
    audioMeaning         : "files/21_0415_meaning.mp3",
    audioExample         : "files/21_0415_example.mp3",
    textMeaning          : "A nurse is a person who helps sick people in the hospital",
    textExample          : "A nurse helped me get better",
    transcription        : "[nЙ™Лђrs]",
    wordTranslate        : "РјРµРґСЃРµСЃС‚СЂР°",
    textMeaningTranslate : "РњРµРґСЃРµСЃС‚СЂР° - СЌС‚Рѕ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ РїРѕРјРѕРіР°РµС‚ Р±РѕР»СЊРЅС‹Рј Р»СЋРґСЏРј РІ Р±РѕР»СЊРЅРёС†Рµ",
    textExampleTranslate : "РњРµРґСЃРµСЃС‚СЂР° РїРѕРјРѕРіР»Р° РјРЅРµ РїРѕРїСЂР°РІРёС‚СЊСЃСЏ",
    id                   : 415
  }, {
    word                 : "operation",
    image                : "files/21_0416.jpg",
    audio                : "files/21_0416.mp3",
    audioMeaning         : "files/21_0416_meaning.mp3",
    audioExample         : "files/21_0416_example.mp3",
    textMeaning          : "An operation is when a doctor replaces or removes something in the body",
    textExample          : "The operation on my arm was a success",
    transcription        : "[Й‘МЂpЙ™rГ©iКѓЙ™n]",
    wordTranslate        : "РѕРїРµСЂР°С†РёСЏ",
    textMeaningTranslate : "РћРїРµСЂР°С†РёСЏ - СЌС‚Рѕ РєРѕРіРґР° РІСЂР°С‡ Р·Р°РјРµРЅСЏРµС‚ РёР»Рё СѓРґР°Р»СЏРµС‚ С‡С‚Рѕ-С‚Рѕ РІ РѕСЂРіР°РЅРёР·РјРµ",
    textExampleTranslate : "РћРїРµСЂР°С†РёСЏ РЅР° РјРѕРµР№ СЂСѓРєРµ РїСЂРѕС€Р»Р° СѓСЃРїРµС€РЅРѕ",
    id                   : 416
  }, {
    word                 : "pain",
    image                : "files/21_0417.jpg",
    audio                : "files/21_0417.mp3",
    audioMeaning         : "files/21_0417_meaning.mp3",
    audioExample         : "files/21_0417_example.mp3",
    textMeaning          : "Pain is the feeling that you have when you are hurt",
    textExample          : "His head was full of pain",
    transcription        : "[pein]",
    wordTranslate        : "Р±РѕР»СЊ",
    textMeaningTranslate : "Р‘РѕР»СЊ - СЌС‚Рѕ С‡СѓРІСЃС‚РІРѕ, РєРѕС‚РѕСЂРѕРµ С‚С‹ РёСЃРїС‹С‚С‹РІР°РµС€СЊ, РєРѕРіРґР° С‚РµР±Рµ Р±РѕР»СЊРЅРѕ",
    textExampleTranslate : "Р•РіРѕ РіРѕР»РѕРІР° Р±С‹Р»Р° РїРѕР»РЅР° Р±РѕР»Рё",
    id                   : 417
  }, {
    word                 : "refuse",
    image                : "files/21_0418.jpg",
    audio                : "files/21_0418.mp3",
    audioMeaning         : "files/21_0418_meaning.mp3",
    audioExample         : "files/21_0418_example.mp3",
    textMeaning          : "To refuse something is to say вЂњnoвЂќ to it",
    textExample          : "The dog refused to play with the cat",
    transcription        : "[rifjГєЛђz]",
    wordTranslate        : "РѕС‚РєР°Р·С‹РІР°С‚СЊСЃСЏ",
    textMeaningTranslate : "РћС‚РєР°Р·Р°С‚СЊСЃСЏ РѕС‚ С‡РµРіРѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ СЃРєР°Р·Р°С‚СЊ 'РЅРµС‚' СЌС‚РѕРјСѓ",
    textExampleTranslate : "РЎРѕР±Р°РєР° РѕС‚РєР°Р·Р°Р»Р°СЃСЊ РёРіСЂР°С‚СЊ СЃ РєРѕС€РєРѕР№",
    id                   : 418
  }, {
    word                 : "though",
    image                : "files/21_0419.jpg",
    audio                : "files/21_0419.mp3",
    audioMeaning         : "files/21_0419_meaning.mp3",
    audioExample         : "files/21_0419_example.mp3",
    textMeaning          : "Though is used when one idea makes another seem surprising",
    textExample          : "Though he was overweight, he liked to be active",
    transcription        : "[Г°ou]",
    wordTranslate        : "С…РѕС‚СЊ",
    textMeaningTranslate : "РҐРѕС‚СЏ РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ, РєРѕРіРґР° РѕРґРЅР° РёРґРµСЏ Р·Р°СЃС‚Р°РІР»СЏРµС‚ РґСЂСѓРіСѓСЋ РєР°Р·Р°С‚СЊСЃСЏ СѓРґРёРІРёС‚РµР»СЊРЅРѕР№",
    textExampleTranslate : "РҐРѕС‚СЏ РѕРЅ РІРµСЃРёР» Р±РѕР»СЊС€Рµ РЅРѕСЂРјС‹, РµРјСѓ РЅСЂР°РІРёР»РѕСЃСЊ Р±С‹С‚СЊ Р°РєС‚РёРІРЅС‹Рј",
    id                   : 419
  }, {
    word                 : "various",
    image                : "files/21_0420.jpg",
    audio                : "files/21_0420.mp3",
    audioMeaning         : "files/21_0420_meaning.mp3",
    audioExample         : "files/21_0420_example.mp3",
    textMeaning          : "If something is various, there are many types of it",
    textExample          : "She owned shoes of various styles",
    transcription        : "[vЙ›Й™МЃriЙ™s]",
    wordTranslate        : "СЂР°Р·РЅС‹Рµ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЂР°Р·Р»РёС‡РЅРѕ, РµСЃС‚СЊ РјРЅРѕРіРѕ С‚РёРїРѕРІ",
    textExampleTranslate : "РћРЅР° РІР»Р°РґРµР»Р° РѕР±СѓРІСЊСЋ СЂР°Р·РЅС‹С… СЃС‚РёР»РµР№",
    id                   : 420
  }, {
    word                 : "actual",
    image                : "files/22_0421.jpg",
    audio                : "files/22_0421.mp3",
    audioMeaning         : "files/22_0421_meaning.mp3",
    audioExample         : "files/22_0421_example.mp3",
    textMeaning          : "Actual means real or true",
    textExample          : "This is the actual sword that the king owned, not a fake one",
    transcription        : "[ЗЅktКѓuЙ™l]",
    wordTranslate        : "С„Р°РєС‚РёС‡РµСЃРєРёР№",
    textMeaningTranslate : "Р¤Р°РєС‚РёС‡РµСЃРєРѕРµ РѕР·РЅР°С‡Р°РµС‚ СЂРµР°Р»СЊРЅРѕРµ РёР»Рё РёСЃС‚РёРЅРЅРѕРµ",
    textExampleTranslate : "Р­С‚Рѕ РЅР°СЃС‚РѕСЏС‰РёР№ РјРµС‡, РєРѕС‚РѕСЂС‹Рј РІР»Р°РґРµР» РєРѕСЂРѕР»СЊ, Р° РЅРµ С„Р°Р»СЊС€РёРІС‹Р№",
    id                   : 421
  }, {
    word                 : "amaze",
    image                : "files/22_0422.jpg",
    audio                : "files/22_0422.mp3",
    audioMeaning         : "files/22_0422_meaning.mp3",
    audioExample         : "files/22_0422_example.mp3",
    textMeaning          : "To amaze people is to surprise them very much",
    textExample          : "The news in the paper amazed Jack",
    transcription        : "[Й™mГ©iz]",
    wordTranslate        : "РїРѕСЂР°Р¶Р°СЋС‚",
    textMeaningTranslate : "РЈРґРёРІР»СЏС‚СЊ Р»СЋРґРµР№ - Р·РЅР°С‡РёС‚ СѓРґРёРІР»СЏС‚СЊ РёС… РѕС‡РµРЅСЊ СЃРёР»СЊРЅРѕ",
    textExampleTranslate : "РќРѕРІРѕСЃС‚Рё РІ РіР°Р·РµС‚Рµ РїРѕСЂР°Р·РёР»Рё Р”Р¶РµРєР°",
    id                   : 422
  }, {
    word                 : "charge",
    image                : "files/22_0423.jpg",
    audio                : "files/22_0423.mp3",
    audioMeaning         : "files/22_0423_meaning.mp3",
    audioExample         : "files/22_0423_example.mp3",
    textMeaning          : "A charge is the price to pay for something",
    textExample          : "The charge for the shirts was $15",
    transcription        : "[tКѓЙ‘ЛђrdК’]",
    wordTranslate        : "РѕР±РІРёРЅСЏС‚СЊ",
    textMeaningTranslate : "РџР»Р°С‚РѕР№ СЏРІР»СЏРµС‚СЃСЏ С†РµРЅР°, РєРѕС‚РѕСЂСѓСЋ РЅСѓР¶РЅРѕ Р·Р°РїР»Р°С‚РёС‚СЊ Р·Р° С‡С‚Рѕ-С‚Рѕ",
    textExampleTranslate : "РџР»Р°С‚Р° Р·Р° С„СѓС‚Р±РѕР»РєРё СЃРѕСЃС‚Р°РІРёР»Р° 15 РґРѕР»Р»Р°СЂРѕРІ",
    id                   : 423
  }, {
    word                 : "comfort",
    image                : "files/22_0424.jpg",
    audio                : "files/22_0424.mp3",
    audioMeaning         : "files/22_0424_meaning.mp3",
    audioExample         : "files/22_0424_example.mp3",
    textMeaning          : "To comfort someone means to make them feel better",
    textExample          : "I wanted to comfort my friend after I heard the bad news",
    transcription        : "[kКЊМЃmfЙ™rt]",
    wordTranslate        : "РєРѕРјС„РѕСЂС‚",
    textMeaningTranslate : "РЈС‚РµС€РёС‚СЊ РєРѕРіРѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ Р·Р°СЃС‚Р°РІРёС‚СЊ РµРіРѕ С‡СѓРІСЃС‚РІРѕРІР°С‚СЊ СЃРµР±СЏ Р»СѓС‡С€Рµ",
    textExampleTranslate : "РЇ С…РѕС‚РµР» СѓС‚РµС€РёС‚СЊ СЃРІРѕРµРіРѕ РґСЂСѓРіР° РїРѕСЃР»Рµ С‚РѕРіРѕ, РєР°Рє СѓСЃР»С‹С€Р°Р» РїР»РѕС…РёРµ РЅРѕРІРѕСЃС‚Рё",
    id                   : 424
  }, {
    word                 : "contact",
    image                : "files/22_0425.jpg",
    audio                : "files/22_0425.mp3",
    audioMeaning         : "files/22_0425_meaning.mp3",
    audioExample         : "files/22_0425_example.mp3",
    textMeaning          : "To contact people is to speak or write to them",
    textExample          : "I contacted Sue about my party",
    transcription        : "[kantaekt]",
    wordTranslate        : "РєРѕРЅС‚Р°РєС‚",
    textMeaningTranslate : "РЎРІСЏР·Р°С‚СЊСЃСЏ СЃ Р»СЋРґСЊРјРё - Р·РЅР°С‡РёС‚ РіРѕРІРѕСЂРёС‚СЊ РёР»Рё РїРёСЃР°С‚СЊ РёРј",
    textExampleTranslate : "РЇ СЃРІСЏР·Р°Р»СЃСЏ СЃ РЎСЊСЋ РїРѕ РїРѕРІРѕРґСѓ РјРѕРµР№ РІРµС‡РµСЂРёРЅРєРё",
    id                   : 425
  }, {
    word                 : "customer",
    image                : "files/22_0426.jpg",
    audio                : "files/22_0426.mp3",
    audioMeaning         : "files/22_0426_meaning.mp3",
    audioExample         : "files/22_0426_example.mp3",
    textMeaning          : "A customer is a person who buys something at a store",
    textExample          : "The customer put a few items in a bag",
    transcription        : "[kКЊМЃstЙ™mЙ™r]",
    wordTranslate        : "РєР»РёРµРЅС‚",
    textMeaningTranslate : "РљР»РёРµРЅС‚ - СЌС‚Рѕ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ РїРѕРєСѓРїР°РµС‚ С‡С‚Рѕ-С‚Рѕ РІ РјР°РіР°Р·РёРЅРµ",
    textExampleTranslate : "РљР»РёРµРЅС‚ РїРѕР»РѕР¶РёР» РЅРµСЃРєРѕР»СЊРєРѕ РІРµС‰РµР№ РІ СЃСѓРјРєСѓ",
    id                   : 426
  }, {
    word                 : "deliver",
    image                : "files/22_0427.jpg",
    audio                : "files/22_0427.mp3",
    audioMeaning         : "files/22_0427_meaning.mp3",
    audioExample         : "files/22_0427_example.mp3",
    textMeaning          : "To deliver something is to take it from one place to another",
    textExample          : "The man delivered Chinese food to my house",
    transcription        : "[dilГ­vЙ™r]",
    wordTranslate        : "РґРѕСЃС‚Р°РІРёС‚СЊ",
    textMeaningTranslate : "Р”РѕСЃС‚Р°РІРёС‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РІР·СЏС‚СЊ СЌС‚Рѕ РёР· РѕРґРЅРѕРіРѕ РјРµСЃС‚Р° РІ РґСЂСѓРіРѕРµ",
    textExampleTranslate : "РњСѓР¶С‡РёРЅР° РґРѕСЃС‚Р°РІРёР» РєРёС‚Р°Р№СЃРєСѓСЋ РµРґСѓ РІ РјРѕР№ РґРѕРј",
    id                   : 427
  }, {
    word                 : "earn",
    image                : "files/22_0428.jpg",
    audio                : "files/22_0428.mp3",
    audioMeaning         : "files/22_0428_meaning.mp3",
    audioExample         : "files/22_0428_example.mp3",
    textMeaning          : "To earn means to get money for the work you do",
    textExample          : "He earns his living as a chef in a great restaurant",
    transcription        : "[Й™Лђrn]",
    wordTranslate        : "Р·Р°СЂР°Р±РѕС‚Р°С‚СЊ",
    textMeaningTranslate : "Р—Р°СЂР°Р±Р°С‚С‹РІР°С‚СЊ - Р·РЅР°С‡РёС‚ РїРѕР»СѓС‡Р°С‚СЊ РґРµРЅСЊРіРё Р·Р° СЂР°Р±РѕС‚Сѓ, РєРѕС‚РѕСЂСѓСЋ РІС‹ РґРµР»Р°РµС‚Рµ",
    textExampleTranslate : "РћРЅ Р·Р°СЂР°Р±Р°С‚С‹РІР°РµС‚ РЅР° Р¶РёР·РЅСЊ С€РµС„-РїРѕРІР°СЂРѕРј РІ РѕС‚Р»РёС‡РЅРѕРј СЂРµСЃС‚РѕСЂР°РЅРµ",
    id                   : 428
  }, {
    word                 : "gate",
    image                : "files/22_0429.jpg",
    audio                : "files/22_0429.mp3",
    audioMeaning         : "files/22_0429_meaning.mp3",
    audioExample         : "files/22_0429_example.mp3",
    textMeaning          : "A gate is a type of door. Gates are usually made of metal or wood",
    textExample          : "We want to put up a wooden gate around our house",
    transcription        : "[geit]",
    wordTranslate        : "РІРѕСЂРѕС‚Р°",
    textMeaningTranslate : "Р’РѕСЂРѕС‚Р° - СЌС‚Рѕ С‚РёРї РґРІРµСЂРё. Р’РѕСЂРѕС‚Р° РѕР±С‹С‡РЅРѕ СЃРґРµР»Р°РЅС‹ РёР· РјРµС‚Р°Р»Р»Р° РёР»Рё РґРµСЂРµРІР°",
    textExampleTranslate : "РњС‹ С…РѕС‚РёРј РїРѕСЃС‚Р°РІРёС‚СЊ РґРµСЂРµРІСЏРЅРЅС‹Рµ РІРѕСЂРѕС‚Р° РІРѕРєСЂСѓРі РЅР°С€РµРіРѕ РґРѕРјР°",
    id                   : 429
  }, {
    word                 : "include",
    image                : "files/22_0430.jpg",
    audio                : "files/22_0430.mp3",
    audioMeaning         : "files/22_0430_meaning.mp3",
    audioExample         : "files/22_0430_example.mp3",
    textMeaning          : "To include something means to have it as part of a group",
    textExample          : "Does this meal include a soft drink?",
    transcription        : "[inklГєЛђd]",
    wordTranslate        : "РІРєР»СЋС‡Р°СЋС‚",
    textMeaningTranslate : "Р’РєР»СЋС‡Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ РѕР·РЅР°С‡Р°РµС‚ РёРјРµС‚СЊ СЌС‚Рѕ РєР°Рє С‡Р°СЃС‚СЊ РіСЂСѓРїРїС‹",
    textExampleTranslate : "Р’РєР»СЋС‡Р°РµС‚ Р»Рё СЌС‚Рѕ Р±Р»СЋРґРѕ Р±РµР·Р°Р»РєРѕРіРѕР»СЊРЅС‹Р№ РЅР°РїРёС‚РѕРє?",
    id                   : 430
  }, {
    word                 : "manage",
    image                : "files/22_0431.jpg",
    audio                : "files/22_0431.mp3",
    audioMeaning         : "files/22_0431_meaning.mp3",
    audioExample         : "files/22_0431_example.mp3",
    textMeaning          : "To manage something means to control or be in charge of it",
    textExample          : "I had to manage the meeting myself",
    transcription        : "[mЗЅnidК’]",
    wordTranslate        : "СѓРїСЂР°РІР»СЏС‚СЊ",
    textMeaningTranslate : "РЈРїСЂР°РІР»СЏС‚СЊ С‡РµРј-С‚Рѕ - Р·РЅР°С‡РёС‚ РєРѕРЅС‚СЂРѕР»РёСЂРѕРІР°С‚СЊ РёР»Рё РѕС‚РІРµС‡Р°С‚СЊ Р·Р° СЌС‚Рѕ",
    textExampleTranslate : "РЇ РґРѕР»Р¶РµРЅ Р±С‹Р» СЃР°Рј СѓРїСЂР°РІР»СЏС‚СЊ РІСЃС‚СЂРµС‡РµР№",
    id                   : 431
  }, {
    word                 : "mystery",
    image                : "files/22_0432.jpg",
    audio                : "files/22_0432.mp3",
    audioMeaning         : "files/22_0432_meaning.mp3",
    audioExample         : "files/22_0432_example.mp3",
    textMeaning          : "A mystery is something that is difficult to understand or explain",
    textExample          : "The path on the map was a complete mystery to me",
    transcription        : "[mГ­stЙ™ri]",
    wordTranslate        : "С‚Р°Р№РЅР°",
    textMeaningTranslate : "РўР°Р№РЅР° - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ С‚СЂСѓРґРЅРѕ РїРѕРЅСЏС‚СЊ РёР»Рё РѕР±СЉСЏСЃРЅРёС‚СЊ",
    textExampleTranslate : "РџСѓС‚СЊ РЅР° РєР°СЂС‚Рµ Р±С‹Р» РґР»СЏ РјРµРЅСЏ РїРѕР»РЅРѕР№ Р·Р°РіР°РґРєРѕР№",
    id                   : 432
  }, {
    word                 : "occur",
    image                : "files/22_0433.jpg",
    audio                : "files/22_0433.mp3",
    audioMeaning         : "files/22_0433_meaning.mp3",
    audioExample         : "files/22_0433_example.mp3",
    textMeaning          : "To occur means to happen",
    textExample          : "When did the thunderstorm occur?",
    transcription        : "[Й™kЙ™МЃЛђr]",
    wordTranslate        : "РїСЂРѕРёСЃС…РѕРґСЏС‚",
    textMeaningTranslate : "РџСЂРѕРёР·РѕР№С‚Рё - Р·РЅР°С‡РёС‚ СЃР»СѓС‡РёС‚СЊСЃСЏ",
    textExampleTranslate : "РљРѕРіРґР° РїСЂРѕРёР·РѕС€Р»Р° РіСЂРѕР·Р°?",
    id                   : 433
  }, {
    word                 : "opposite",
    image                : "files/22_0434.jpg",
    audio                : "files/22_0434.mp3",
    audioMeaning         : "files/22_0434_meaning.mp3",
    audioExample         : "files/22_0434_example.mp3",
    textMeaning          : "If A is the opposite of B, A is completely different from B",
    textExample          : "The opposite of black is white",
    transcription        : "[Й‘МЃpЙ™zit]",
    wordTranslate        : "РЅР°РїСЂРѕС‚РёРІ",
    textMeaningTranslate : "Р•СЃР»Рё A СЏРІР»СЏРµС‚СЃСЏ РїСЂРѕС‚РёРІРѕРїРѕР»РѕР¶РЅРѕСЃС‚СЊСЋ B, A РїРѕР»РЅРѕСЃС‚СЊСЋ РѕС‚Р»РёС‡Р°РµС‚СЃСЏ РѕС‚ B",
    textExampleTranslate : "РџСЂРѕС‚РёРІРѕРїРѕР»РѕР¶РЅРѕСЃС‚СЊ С‡РµСЂРЅРѕРіРѕ РµСЃС‚СЊ Р±РµР»РѕРµ",
    id                   : 434
  }, {
    word                 : "plate",
    image                : "files/22_0435.jpg",
    audio                : "files/22_0435.mp3",
    audioMeaning         : "files/22_0435_meaning.mp3",
    audioExample         : "files/22_0435_example.mp3",
    textMeaning          : "A plate is a flat round thing that you put food on",
    textExample          : "I put my plate down so I could put some food on it",
    transcription        : "[pleit]",
    wordTranslate        : "РїР»Р°СЃС‚РёРЅР°",
    textMeaningTranslate : "РўР°СЂРµР»РєР° - СЌС‚Рѕ РїР»РѕСЃРєР°СЏ РєСЂСѓРіР»Р°СЏ РІРµС‰СЊ, РЅР° РєРѕС‚РѕСЂСѓСЋ РІС‹ РєР»Р°РґРµС‚Рµ РµРґСѓ",
    textExampleTranslate : "РЇ РїРѕР»РѕР¶РёР» СЃРІРѕСЋ С‚Р°СЂРµР»РєСѓ, С‡С‚РѕР±С‹ СЏ РјРѕРі РїРѕР»РѕР¶РёС‚СЊ РЅР° РЅРµРµ РЅРµРјРЅРѕРіРѕ РµРґС‹",
    id                   : 435
  }, {
    word                 : "receive",
    image                : "files/22_0436.jpg",
    audio                : "files/22_0436.mp3",
    audioMeaning         : "files/22_0436_meaning.mp3",
    audioExample         : "files/22_0436_example.mp3",
    textMeaning          : "To receive something is to get it",
    textExample          : "I received a present on my birthday",
    transcription        : "[risГ­Лђv]",
    wordTranslate        : "РїРѕР»СѓС‡Р°С‚СЊ",
    textMeaningTranslate : "РџРѕР»СѓС‡РёС‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РїРѕР»СѓС‡РёС‚СЊ СЌС‚Рѕ",
    textExampleTranslate : "РЇ РїРѕР»СѓС‡РёР» РїРѕРґР°СЂРѕРє РЅР° РјРѕР№ РґРµРЅСЊ СЂРѕР¶РґРµРЅРёСЏ",
    id                   : 436
  }, {
    word                 : "reward",
    image                : "files/22_0437.jpg",
    audio                : "files/22_0437.mp3",
    audioMeaning         : "files/22_0437_meaning.mp3",
    audioExample         : "files/22_0437_example.mp3",
    textMeaning          : "A reward is something given in exchange for good behavior or work",
    textExample          : "He was given a reward for his excellent performance",
    transcription        : "[riwЙ”МЃЛђrd]",
    wordTranslate        : "РЅР°РіСЂР°РґР°",
    textMeaningTranslate : "РќР°РіСЂР°РґР° - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ РґР°РµС‚СЃСЏ РІ РѕР±РјРµРЅ РЅР° С…РѕСЂРѕС€РµРµ РїРѕРІРµРґРµРЅРёРµ РёР»Рё СЂР°Р±РѕС‚Сѓ",
    textExampleTranslate : "РћРЅ РїРѕР»СѓС‡РёР» РЅР°РіСЂР°РґСѓ Р·Р° РѕС‚Р»РёС‡РЅСѓСЋ СЂР°Р±РѕС‚Сѓ",
    id                   : 437
  }, {
    word                 : "set",
    image                : "files/22_0438.jpg",
    audio                : "files/22_0438.mp3",
    audioMeaning         : "files/22_0438_meaning.mp3",
    audioExample         : "files/22_0438_example.mp3",
    textMeaning          : "To set something is to put it somewhere",
    textExample          : "Please set the dice down on the table",
    transcription        : "[set]",
    wordTranslate        : "РЅР°Р±РѕСЂ",
    textMeaningTranslate : "РЈСЃС‚Р°РЅРѕРІРёС‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РїРѕР»РѕР¶РёС‚СЊ СЌС‚Рѕ РєСѓРґР°-С‚Рѕ",
    textExampleTranslate : "РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РїРѕСЃС‚Р°РІСЊС‚Рµ РєРѕСЃС‚Рё РЅР° СЃС‚РѕР»",
    id                   : 438
  }, {
    word                 : "steal",
    image                : "files/22_0439.jpg",
    audio                : "files/22_0439.mp3",
    audioMeaning         : "files/22_0439_meaning.mp3",
    audioExample         : "files/22_0439_example.mp3",
    textMeaning          : "To steal is to take something that is not yours",
    textExample          : "The men tried to steal money from the bank",
    transcription        : "[stiЛђl]",
    wordTranslate        : "СѓРєСЂР°СЃС‚СЊ",
    textMeaningTranslate : "РЈРєСЂР°СЃС‚СЊ Р·РЅР°С‡РёС‚ РІР·СЏС‚СЊ С‡С‚Рѕ-С‚Рѕ, С‡С‚Рѕ РЅРµ С‚РІРѕРµ",
    textExampleTranslate : "РњСѓР¶С‡РёРЅС‹ РїС‹С‚Р°Р»РёСЃСЊ СѓРєСЂР°СЃС‚СЊ РґРµРЅСЊРіРё РёР· Р±Р°РЅРєР°",
    id                   : 439
  }, {
    word                 : "thief",
    image                : "files/22_0440.jpg",
    audio                : "files/22_0440.mp3",
    audioMeaning         : "files/22_0440_meaning.mp3",
    audioExample         : "files/22_0440_example.mp3",
    textMeaning          : "A thief is someone who quietly takes things that do not belong to them",
    textExample          : "A thief broke into our home and took my motherвЂ™s jewelry",
    transcription        : "[ОёiЛђf]",
    wordTranslate        : "РІРѕСЂ",
    textMeaningTranslate : "Р’РѕСЂ - СЌС‚Рѕ С‚РѕС‚, РєС‚Рѕ СЃРїРѕРєРѕР№РЅРѕ Р±РµСЂРµС‚ РІРµС‰Рё, РєРѕС‚РѕСЂС‹Рµ РёРј РЅРµ РїСЂРёРЅР°РґР»РµР¶Р°С‚",
    textExampleTranslate : "Р’РѕСЂ РІРѕСЂРІР°Р»СЃСЏ РІ РЅР°С€ РґРѕРј Рё Р·Р°Р±СЂР°Р» СѓРєСЂР°С€РµРЅРёСЏ РјРѕРµР№ РјР°С‚РµСЂРё",
    id                   : 440
  }, {
    word                 : "advance",
    image                : "files/23_0441.jpg",
    audio                : "files/23_0441.mp3",
    audioMeaning         : "files/23_0441_meaning.mp3",
    audioExample         : "files/23_0441_example.mp3",
    textMeaning          : "To advance is to go forward",
    textExample          : "He advanced across the bridge slowly",
    transcription        : "[Й™dvЗЅns]",
    wordTranslate        : "РІРїРµСЂРµРґ",
    textMeaningTranslate : "РџСЂРѕРґРІРёРіР°С‚СЊСЃСЏ - Р·РЅР°С‡РёС‚ РёРґС‚Рё РІРїРµСЂРµРґ",
    textExampleTranslate : "РћРЅ РјРµРґР»РµРЅРЅРѕ РїСЂРѕРґРІРёРіР°Р»СЃСЏ С‡РµСЂРµР· РјРѕСЃС‚",
    id                   : 441
  }, {
    word                 : "athlete",
    image                : "files/23_0442.jpg",
    audio                : "files/23_0442.mp3",
    audioMeaning         : "files/23_0442_meaning.mp3",
    audioExample         : "files/23_0442_example.mp3",
    textMeaning          : "An athlete is a person who plays sports",
    textExample          : "Some athletes can play many sports very well",
    transcription        : "[ЗЅОёliЛђt]",
    wordTranslate        : "СЃРїРѕСЂС‚СЃРјРµРЅ",
    textMeaningTranslate : "РЎРїРѕСЂС‚СЃРјРµРЅ - СЌС‚Рѕ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ Р·Р°РЅРёРјР°РµС‚СЃСЏ СЃРїРѕСЂС‚РѕРј",
    textExampleTranslate : "РќРµРєРѕС‚РѕСЂС‹Рµ СЃРїРѕСЂС‚СЃРјРµРЅС‹ РјРѕРіСѓС‚ РѕС‡РµРЅСЊ С…РѕСЂРѕС€Рѕ Р·Р°РЅРёРјР°С‚СЊСЃСЏ РјРЅРѕРіРёРјРё РІРёРґР°РјРё СЃРїРѕСЂС‚Р°",
    id                   : 442
  }, {
    word                 : "average",
    image                : "files/23_0443.jpg",
    audio                : "files/23_0443.mp3",
    audioMeaning         : "files/23_0443_meaning.mp3",
    audioExample         : "files/23_0443_example.mp3",
    textMeaning          : "If something is average, it is at a normal level",
    textExample          : "IвЂ™m not rich or poor; IвЂ™m average",
    transcription        : "[ЗЅvЙ™ridК’]",
    wordTranslate        : "СЃСЂРµРґРЅРёР№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЃСЂРµРґРЅРµРµ, СЌС‚Рѕ РЅР° РЅРѕСЂРјР°Р»СЊРЅРѕРј СѓСЂРѕРІРЅРµ",
    textExampleTranslate : "РЇ РЅРµ Р±РѕРіР°С‚ РёР»Рё РЅРµ Р±РµРґРµРЅ; СЏ СЃСЂРµРґРЅРёР№",
    id                   : 443
  }, {
    word                 : "behavior",
    image                : "files/23_0444.jpg",
    audio                : "files/23_0444.mp3",
    audioMeaning         : "files/23_0444_meaning.mp3",
    audioExample         : "files/23_0444_example.mp3",
    textMeaning          : "Your behavior is the way you act",
    textExample          : "Their behavior was good this semester. They didnвЂ™t cause trouble",
    transcription        : "[bihГ©ivjЙ™r]",
    wordTranslate        : "РїРѕРІРµРґРµРЅРёРµ",
    textMeaningTranslate : "Р’Р°С€Рµ РїРѕРІРµРґРµРЅРёРµ - СЌС‚Рѕ СЃРїРѕСЃРѕР±, РєРѕС‚РѕСЂС‹Рј РІС‹ РґРµР№СЃС‚РІСѓРµС‚Рµ",
    textExampleTranslate : "РС… РїРѕРІРµРґРµРЅРёРµ Р±С‹Р»Рѕ С…РѕСЂРѕС€РёРј РІ СЌС‚РѕРј СЃРµРјРµСЃС‚СЂРµ. РћРЅРё РЅРµ РґРѕСЃС‚Р°РІР»СЏР»Рё С…Р»РѕРїРѕС‚",
    id                   : 444
  }, {
    word                 : "behind",
    image                : "files/23_0445.jpg",
    audio                : "files/23_0445.mp3",
    audioMeaning         : "files/23_0445_meaning.mp3",
    audioExample         : "files/23_0445_example.mp3",
    textMeaning          : "Behind means to be at the back of something",
    textExample          : "The little girl was hiding behind a tree",
    transcription        : "[bihГЎind]",
    wordTranslate        : "РїРѕР·Р°РґРё",
    textMeaningTranslate : "РџРѕР·Р°РґРё РѕР·РЅР°С‡Р°РµС‚ Р±С‹С‚СЊ РїРѕР·Р°РґРё С‡РµРіРѕ-С‚Рѕ",
    textExampleTranslate : "РњР°Р»РµРЅСЊРєР°СЏ РґРµРІРѕС‡РєР° РїСЂСЏС‚Р°Р»Р°СЃСЊ Р·Р° РґРµСЂРµРІРѕРј",
    id                   : 445
  }, {
    word                 : "course",
    image                : "files/23_0446.jpg",
    audio                : "files/23_0446.mp3",
    audioMeaning         : "files/23_0446_meaning.mp3",
    audioExample         : "files/23_0446_example.mp3",
    textMeaning          : "A course is a class in school",
    textExample          : "I took a P.E. course in school this year",
    transcription        : "[kЙ”Лђrs]",
    wordTranslate        : "РєСѓСЂСЃ",
    textMeaningTranslate : "РљСѓСЂСЃ - СЌС‚Рѕ СѓСЂРѕРє РІ С€РєРѕР»Рµ",
    textExampleTranslate : "Р’ СЌС‚РѕРј РіРѕРґСѓ СЏ РїСЂРѕС€РµР» РєСѓСЂСЃ РѕР±СѓС‡РµРЅРёСЏ РІ С€РєРѕР»Рµ",
    id                   : 446
  }, {
    word                 : "lower",
    image                : "files/23_0447.jpg",
    audio                : "files/23_0447.mp3",
    audioMeaning         : "files/23_0447_meaning.mp3",
    audioExample         : "files/23_0447_example.mp3",
    textMeaning          : "To lower something is to make it go down",
    textExample          : "The chart shows how his production has lowered over the year",
    transcription        : "[lГіuЙ™r]",
    wordTranslate        : "РѕРїСѓСЃС‚РёС‚СЊ",
    textMeaningTranslate : "РџРѕРЅРёР·РёС‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ Р·Р°СЃС‚Р°РІРёС‚СЊ РµРіРѕ СѓРїР°СЃС‚СЊ",
    textExampleTranslate : "Р”РёР°РіСЂР°РјРјР° РїРѕРєР°Р·С‹РІР°РµС‚, РєР°Рє РµРіРѕ РїСЂРѕРёР·РІРѕРґСЃС‚РІРѕ СЃРЅРёР·РёР»РѕСЃСЊ Р·Р° РіРѕРґ",
    id                   : 447
  }, {
    word                 : "match",
    image                : "files/23_0448.jpg",
    audio                : "files/23_0448.mp3",
    audioMeaning         : "files/23_0448_meaning.mp3",
    audioExample         : "files/23_0448_example.mp3",
    textMeaning          : "To match is to be the same or similar",
    textExample          : "The two shoes matched. They looked the same",
    transcription        : "[mГ¦tКѓ]",
    wordTranslate        : "РјР°С‚С‡",
    textMeaningTranslate : "РЎРѕРѕС‚РІРµС‚СЃС‚РІРѕРІР°С‚СЊ - Р·РЅР°С‡РёС‚ Р±С‹С‚СЊ С‚Р°РєРёРј Р¶Рµ РёР»Рё РїРѕС…РѕР¶РёРј",
    textExampleTranslate : "Р”РІРµ С‚СѓС„Р»Рё СЃРѕРІРїР°Р»Рё. РћРЅРё РІС‹РіР»СЏРґРµР»Рё РѕРґРёРЅР°РєРѕРІРѕ",
    id                   : 448
  }, {
    word                 : "member",
    image                : "files/23_0449.jpg",
    audio                : "files/23_0449.mp3",
    audioMeaning         : "files/23_0449_meaning.mp3",
    audioExample         : "files/23_0449_example.mp3",
    textMeaning          : "A member is a person who is part of a group",
    textExample          : "Julie is the newest member of our team",
    transcription        : "[mГ©mbЙ™r]",
    wordTranslate        : "С‡Р»РµРЅ",
    textMeaningTranslate : "Р§Р»РµРЅ - СЌС‚Рѕ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ СЏРІР»СЏРµС‚СЃСЏ С‡Р°СЃС‚СЊСЋ РіСЂСѓРїРїС‹",
    textExampleTranslate : "Р”Р¶СѓР»Рё - СЃР°РјС‹Р№ РЅРѕРІС‹Р№ С‡Р»РµРЅ РЅР°С€РµР№ РєРѕРјР°РЅРґС‹",
    id                   : 449
  }, {
    word                 : "mental",
    image                : "files/23_0450.jpg",
    audio                : "files/23_0450.mp3",
    audioMeaning         : "files/23_0450_meaning.mp3",
    audioExample         : "files/23_0450_example.mp3",
    textMeaning          : "If something is mental, it has to do with your mind",
    textExample          : "I made a mental picture of the room",
    transcription        : "[mГ©ntl]",
    wordTranslate        : "РїСЃРёС…РёС‡РµСЃРєРѕРіРѕ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РјРµРЅС‚Р°Р»СЊРЅРѕ, СЌС‚Рѕ СЃРІСЏР·Р°РЅРѕ СЃ РІР°С€РёРј СѓРјРѕРј",
    textExampleTranslate : "РЇ СЃРґРµР»Р°Р» РјС‹СЃР»РµРЅРЅСѓСЋ РєР°СЂС‚РёРЅСѓ РєРѕРјРЅР°С‚С‹",
    id                   : 450
  }, {
    word                 : "passenger",
    image                : "files/23_0451.jpg",
    audio                : "files/23_0451.mp3",
    audioMeaning         : "files/23_0451_meaning.mp3",
    audioExample         : "files/23_0451_example.mp3",
    textMeaning          : "A passenger is a person who rides in a car, train, or airplane",
    textExample          : "One passenger was standing near the subway train",
    transcription        : "[pЗЅsЙ™ndК’Й™r]",
    wordTranslate        : "РїР°СЃСЃР°Р¶РёСЂ",
    textMeaningTranslate : "РџР°СЃСЃР°Р¶РёСЂ - СЌС‚Рѕ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ РµРґРµС‚ РІ РјР°С€РёРЅРµ, РїРѕРµР·РґРµ РёР»Рё СЃР°РјРѕР»РµС‚Рµ",
    textExampleTranslate : "РћРґРёРЅ РїР°СЃСЃР°Р¶РёСЂ СЃС‚РѕСЏР» РІРѕР·Р»Рµ РїРѕРµР·РґР° РјРµС‚СЂРѕ",
    id                   : 451
  }, {
    word                 : "personality",
    image                : "files/23_0452.jpg",
    audio                : "files/23_0452.mp3",
    audioMeaning         : "files/23_0452_meaning.mp3",
    audioExample         : "files/23_0452_example.mp3",
    textMeaning          : "Your personality is what you are like and how you behave",
    textExample          : "John has a bad personality",
    transcription        : "[pЙ™МЂЛђrsЙ™nЗЅlЙ™ti]",
    wordTranslate        : "Р»РёС‡РЅРѕСЃС‚СЊ",
    textMeaningTranslate : "РўРІРѕСЏ Р»РёС‡РЅРѕСЃС‚СЊ С‚Р°РєР°СЏ, РєР°РєР°СЏ С‚С‹ РµСЃС‚СЊ Рё РєР°Рє С‚С‹ СЃРµР±СЏ РІРµРґРµС€СЊ",
    textExampleTranslate : "РЈ Р”Р¶РѕРЅР° РїР»РѕС…Р°СЏ Р»РёС‡РЅРѕСЃС‚СЊ",
    id                   : 452
  }, {
    word                 : "poem",
    image                : "files/23_0453.jpg",
    audio                : "files/23_0453.mp3",
    audioMeaning         : "files/23_0453_meaning.mp3",
    audioExample         : "files/23_0453_example.mp3",
    textMeaning          : "A poem is a short kind of writing",
    textExample          : "William Shakespeare wrote many poems",
    transcription        : "[pГіuЙ™m]",
    wordTranslate        : "СЃС‚РёС…РѕС‚РІРѕСЂРµРЅРёРµ",
    textMeaningTranslate : "РЎС‚РёС…РѕС‚РІРѕСЂРµРЅРёРµ - СЌС‚Рѕ РєРѕСЂРѕС‚РєРёР№ РІРёРґ РїРёСЃСЊРјР°",
    textExampleTranslate : "РЈРёР»СЊСЏРј РЁРµРєСЃРїРёСЂ РЅР°РїРёСЃР°Р» РјРЅРѕРіРѕ СЃС‚РёС…РѕРІ",
    id                   : 453
  }, {
    word                 : "pole",
    image                : "files/23_0454.jpg",
    audio                : "files/23_0454.mp3",
    audioMeaning         : "files/23_0454_meaning.mp3",
    audioExample         : "files/23_0454_example.mp3",
    textMeaning          : "A pole is a long thin stick made of wood or metal that supports things",
    textExample          : "The flag was hanging from the flag pole",
    transcription        : "[poul]",
    wordTranslate        : "СЃС‚РѕР»Р±",
    textMeaningTranslate : "РџРѕР»СЋСЃ - СЌС‚Рѕ РґР»РёРЅРЅР°СЏ С‚РѕРЅРєР°СЏ РїР°Р»РєР° РёР· РґРµСЂРµРІР° РёР»Рё РјРµС‚Р°Р»Р»Р°, РєРѕС‚РѕСЂР°СЏ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ РІРµС‰Рё",
    textExampleTranslate : "Р¤Р»Р°Рі РІРёСЃРµР» РЅР° С„Р»Р°РіС€С‚РѕРєРµ",
    id                   : 454
  }, {
    word                 : "remove",
    image                : "files/23_0455.jpg",
    audio                : "files/23_0455.mp3",
    audioMeaning         : "files/23_0455_meaning.mp3",
    audioExample         : "files/23_0455_example.mp3",
    textMeaning          : "To remove something is to take it away",
    textExample          : "I removed the nail from the board",
    transcription        : "[rimГєЛђv]",
    wordTranslate        : "СѓРґР°Р»РёС‚СЊ",
    textMeaningTranslate : "РЈР±СЂР°С‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ СѓР±СЂР°С‚СЊ СЌС‚Рѕ",
    textExampleTranslate : "РЇ СЃРЅСЏР» РіРІРѕР·РґСЊ СЃ РґРѕСЃРєРё",
    id                   : 455
  }, {
    word                 : "safety",
    image                : "files/23_0456.jpg",
    audio                : "files/23_0456.mp3",
    audioMeaning         : "files/23_0456_meaning.mp3",
    audioExample         : "files/23_0456_example.mp3",
    textMeaning          : "Safety means the condition of being safe and free from danger",
    textExample          : "For his own safety, he was placed in a car seat",
    transcription        : "[sГ©ifti]",
    wordTranslate        : "Р±РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ",
    textMeaningTranslate : "Р‘РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ РѕР·РЅР°С‡Р°РµС‚ СЃРѕСЃС‚РѕСЏРЅРёРµ Р±РµР·РѕРїР°СЃРЅРѕСЃС‚Рё Рё РѕС‚СЃСѓС‚СЃС‚РІРёСЏ РѕРїР°СЃРЅРѕСЃС‚Рё",
    textExampleTranslate : "Р”Р»СЏ СЃРѕР±СЃС‚РІРµРЅРЅРѕР№ Р±РµР·РѕРїР°СЃРЅРѕСЃС‚Рё РµРіРѕ РїРѕСЃР°РґРёР»Рё РІ Р°РІС‚РѕРјРѕР±РёР»СЊРЅРѕРµ РєСЂРµСЃР»Рѕ",
    id                   : 456
  }, {
    word                 : "shoot",
    image                : "files/23_0457.jpg",
    audio                : "files/23_0457.mp3",
    audioMeaning         : "files/23_0457_meaning.mp3",
    audioExample         : "files/23_0457_example.mp3",
    textMeaning          : "To shoot is to fire something like a bullet at someone or something",
    textExample          : "The hunter raised his gun to shoot at the target",
    transcription        : "[КѓuЛђt]",
    wordTranslate        : "СЃС‚СЂРµР»СЏС‚СЊ",
    textMeaningTranslate : "РЎС‚СЂРµР»СЏС‚СЊ - Р·РЅР°С‡РёС‚ СЃС‚СЂРµР»СЏС‚СЊ РІ РєРѕРіРѕ-С‚Рѕ РёР»Рё С‡С‚Рѕ-С‚Рѕ РІСЂРѕРґРµ РїСѓР»Рё",
    textExampleTranslate : "РћС…РѕС‚РЅРёРє РїРѕРґРЅСЏР» СЂСѓР¶СЊРµ, С‡С‚РѕР±С‹ РІС‹СЃС‚СЂРµР»РёС‚СЊ РІ С†РµР»СЊ",
    id                   : 457
  }, {
    word                 : "sound",
    image                : "files/23_0458.jpg",
    audio                : "files/23_0458.mp3",
    audioMeaning         : "files/23_0458_meaning.mp3",
    audioExample         : "files/23_0458_example.mp3",
    textMeaning          : "To sound means to make a noise",
    textExample          : "The alarm clock sounded and woke us all up",
    transcription        : "[saund]",
    wordTranslate        : "Р·РІСѓРє",
    textMeaningTranslate : "Р—РІСѓС‡Р°С‚СЊ Р·РЅР°С‡РёС‚ С€СѓРјРµС‚СЊ",
    textExampleTranslate : "РџСЂРѕР·РІСѓС‡Р°Р» Р±СѓРґРёР»СЊРЅРёРє Рё СЂР°Р·Р±СѓРґРёР» РЅР°СЃ РІСЃРµС…",
    id                   : 458
  }, {
    word                 : "swim",
    image                : "files/23_0459.jpg",
    audio                : "files/23_0459.mp3",
    audioMeaning         : "files/23_0459_meaning.mp3",
    audioExample         : "files/23_0459_example.mp3",
    textMeaning          : "To swim is to move through water",
    textExample          : "I love to swim in the ocean",
    transcription        : "[swim]",
    wordTranslate        : "РїР»Р°РІР°С‚СЊ",
    textMeaningTranslate : "РџР»Р°РІР°С‚СЊ - Р·РЅР°С‡РёС‚ РґРІРёРіР°С‚СЊСЃСЏ РїРѕ РІРѕРґРµ",
    textExampleTranslate : "РЇ Р»СЋР±Р»СЋ РїР»Р°РІР°С‚СЊ РІ РѕРєРµР°РЅРµ",
    id                   : 459
  }, {
    word                 : "web",
    image                : "files/23_0460.jpg",
    audio                : "files/23_0460.mp3",
    audioMeaning         : "files/23_0460_meaning.mp3",
    audioExample         : "files/23_0460_example.mp3",
    textMeaning          : "A web is a home made by a spider",
    textExample          : "Mom cleaned the spider webs out of the garage",
    transcription        : "[web]",
    wordTranslate        : "РїР°СѓС‚РёРЅР°",
    textMeaningTranslate : "РџР°СѓС‚РёРЅР° - СЌС‚Рѕ РґРѕРј, СЃРґРµР»Р°РЅРЅС‹Р№ РїР°СѓРєРѕРј",
    textExampleTranslate : "РњР°РјР° СѓР±СЂР°Р»Р° РїР°СѓС‚РёРЅСѓ РёР· РіР°СЂР°Р¶Р°",
    id                   : 460
  }, {
    word                 : "block",
    image                : "files/24_0461.jpg",
    audio                : "files/24_0461.mp3",
    audioMeaning         : "files/24_0461_meaning.mp3",
    audioExample         : "files/24_0461_example.mp3",
    textMeaning          : "A block is a solid piece of wood, stone, or ice",
    textExample          : "I saw a block of ice on the floor",
    transcription        : "[blЙ‘k]",
    wordTranslate        : "Р±Р»РѕРє",
    textMeaningTranslate : "Р‘Р»РѕРє - СЌС‚Рѕ РєСѓСЃРѕРє РґРµСЂРµРІР°, РєР°РјРЅСЏ РёР»Рё Р»СЊРґР°",
    textExampleTranslate : "РЇ РІРёРґРµР» РєСѓСЃРѕРє Р»СЊРґР° РЅР° РїРѕР»Сѓ",
    id                   : 461
  }, {
    word                 : "bury",
    image                : "files/24_0462.jpg",
    audio                : "files/24_0462.mp3",
    audioMeaning         : "files/24_0462_meaning.mp3",
    audioExample         : "files/24_0462_example.mp3",
    textMeaning          : "When you bury something, you put it under the ground or under a lot of other things",
    textExample          : "My father was buried in his hometown when he died",
    transcription        : "[bГ©ri]",
    wordTranslate        : "РїРѕС…РѕСЂРѕРЅРёС‚СЊ",
    textMeaningTranslate : "РљРѕРіРґР° РІС‹ С‡С‚Рѕ-С‚Рѕ С…РѕСЂРѕРЅРёС‚Рµ, РІС‹ РєР»Р°РґРµС‚Рµ СЌС‚Рѕ РїРѕРґ Р·РµРјР»СЋ РёР»Рё РїРѕРґ РјРЅРѕРіРѕ РґСЂСѓРіРёС… РІРµС‰РµР№",
    textExampleTranslate : "РњРѕР№ РѕС‚РµС† Р±С‹Р» РїРѕС…РѕСЂРѕРЅРµРЅ РІ СЃРІРѕРµРј СЂРѕРґРЅРѕРј РіРѕСЂРѕРґРµ, РєРѕРіРґР° РѕРЅ СѓРјРµСЂ",
    id                   : 462
  }, {
    word                 : "cheer",
    image                : "files/24_0463.jpg",
    audio                : "files/24_0463.mp3",
    audioMeaning         : "files/24_0463_meaning.mp3",
    audioExample         : "files/24_0463_example.mp3",
    textMeaning          : "To cheer is to give a loud shout of approval or encouragement",
    textExample          : "The crowd all cheered when the home team won",
    transcription        : "[tКѓiЙ™r]",
    wordTranslate        : "РїРѕР±РѕР»РµС‚СЊ",
    textMeaningTranslate : "РџРѕРґРЅСЏС‚СЊ РЅР°СЃС‚СЂРѕРµРЅРёРµ - СЌС‚Рѕ РґР°С‚СЊ РіСЂРѕРјРєРёР№ РєСЂРёРє РѕРґРѕР±СЂРµРЅРёСЏ РёР»Рё РѕР±РѕРґСЂРµРЅРёСЏ",
    textExampleTranslate : "РўРѕР»РїР° РІСЃРµС… РїСЂРёРІРµС‚СЃС‚РІРѕРІР°Р»Р°, РєРѕРіРґР° РїРѕР±РµРґРёР»Р° С…РѕР·СЏРµРІР°",
    id                   : 463
  }, {
    word                 : "complex",
    image                : "files/24_0464.jpg",
    audio                : "files/24_0464.mp3",
    audioMeaning         : "files/24_0464_meaning.mp3",
    audioExample         : "files/24_0464_example.mp3",
    textMeaning          : "If something is complex, it has many small parts. It is hard to understand",
    textExample          : "A jigsaw puzzle can be complex because it has so many pieces",
    transcription        : "[kЙ™mplГ©ks]",
    wordTranslate        : "СЃР»РѕР¶РЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЃР»РѕР¶РЅРѕРµ, Сѓ РЅРµРіРѕ РјРЅРѕРіРѕ РјРµР»РєРёС… РґРµС‚Р°Р»РµР№. Р­С‚Рѕ С‚СЂСѓРґРЅРѕ РїРѕРЅСЏС‚СЊ",
    textExampleTranslate : "РџР°Р·Р» РјРѕР¶РµС‚ Р±С‹С‚СЊ СЃР»РѕР¶РЅС‹Рј, РїРѕС‚РѕРјСѓ С‡С‚Рѕ РІ РЅРµРј С‚Р°Рє РјРЅРѕРіРѕ РєСѓСЃРѕС‡РєРѕРІ",
    id                   : 464
  }, {
    word                 : "critic",
    image                : "files/24_0465.jpg",
    audio                : "files/24_0465.mp3",
    audioMeaning         : "files/24_0465_meaning.mp3",
    audioExample         : "files/24_0465_example.mp3",
    textMeaning          : "A critic is someone who gives opinions about movies, books, plays, etc",
    textExample          : "The wine critic tasted the wine so he could give his opinion",
    transcription        : "[krГ­tik]",
    wordTranslate        : "РєСЂРёС‚РёРє",
    textMeaningTranslate : "РљСЂРёС‚РёРє - СЌС‚Рѕ С‚РѕС‚, РєС‚Рѕ РІС‹СЃРєР°Р·С‹РІР°РµС‚ СЃРІРѕРµ РјРЅРµРЅРёРµ Рѕ С„РёР»СЊРјР°С…, РєРЅРёРіР°С…, СЃРїРµРєС‚Р°РєР»СЏС… Рё С‚. Р”",
    textExampleTranslate : "Р’РёРЅРЅС‹Р№ РєСЂРёС‚РёРє РїРѕРїСЂРѕР±РѕРІР°Р» РІРёРЅРѕ, С‡С‚РѕР±С‹ РѕРЅ РјРѕРі РІС‹СЃРєР°Р·Р°С‚СЊ СЃРІРѕРµ РјРЅРµРЅРёРµ",
    id                   : 465
  }, {
    word                 : "direction",
    image                : "files/24_0466.jpg",
    audio                : "files/24_0466.mp3",
    audioMeaning         : "files/24_0466_meaning.mp3",
    audioExample         : "files/24_0466_example.mp3",
    textMeaning          : "A direction is the way to go",
    textExample          : "Go in this direction for 10 minutes, and you will get to the river",
    transcription        : "[dirГ©kКѓЙ™n]",
    wordTranslate        : "РЅР°РїСЂР°РІР»РµРЅРёРµ",
    textMeaningTranslate : "РќР°РїСЂР°РІР»РµРЅРёРµ - СЌС‚Рѕ РїСѓС‚СЊ",
    textExampleTranslate : "РРґРёС‚Рµ РІ СЌС‚РѕРј РЅР°РїСЂР°РІР»РµРЅРёРё РЅР° 10 РјРёРЅСѓС‚, Рё РІС‹ РґРѕР±РµСЂРµС‚РµСЃСЊ РґРѕ СЂРµРєРё",
    id                   : 466
  }, {
    word                 : "event",
    image                : "files/24_0467.jpg",
    audio                : "files/24_0467.mp3",
    audioMeaning         : "files/24_0467_meaning.mp3",
    audioExample         : "files/24_0467_example.mp3",
    textMeaning          : "An event is something that happens, especially something important",
    textExample          : "Finishing high school was a major event in his life",
    transcription        : "[ivГ©nt]",
    wordTranslate        : "СЃРѕР±С‹С‚РёРµ",
    textMeaningTranslate : "РЎРѕР±С‹С‚РёРµ - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚, РѕСЃРѕР±РµРЅРЅРѕ С‡С‚Рѕ-С‚Рѕ РІР°Р¶РЅРѕРµ",
    textExampleTranslate : "РћРєРѕРЅС‡Р°РЅРёРµ СЃСЂРµРґРЅРµР№ С€РєРѕР»С‹ Р±С‹Р»Рѕ РіР»Р°РІРЅС‹Рј СЃРѕР±С‹С‚РёРµРј РІ РµРіРѕ Р¶РёР·РЅРё",
    id                   : 467
  }, {
    word                 : "exercise",
    image                : "files/24_0468.jpg",
    audio                : "files/24_0468.mp3",
    audioMeaning         : "files/24_0468_meaning.mp3",
    audioExample         : "files/24_0468_example.mp3",
    textMeaning          : "To exercise is to run or play sports so that you can be healthy",
    textExample          : "You should exercise every day",
    transcription        : "[Г©ksЙ™rsГ iz]",
    wordTranslate        : "СѓРїСЂР°Р¶РЅРµРЅРёРµ",
    textMeaningTranslate : "Р—Р°РЅРёРјР°С‚СЊСЃСЏ СЃРїРѕСЂС‚РѕРј - Р·РЅР°С‡РёС‚ Р±РµРіР°С‚СЊ РёР»Рё Р·Р°РЅРёРјР°С‚СЊСЃСЏ СЃРїРѕСЂС‚РѕРј, С‡С‚РѕР±С‹ Р±С‹С‚СЊ Р·РґРѕСЂРѕРІС‹Рј",
    textExampleTranslate : "РўС‹ РґРѕР»Р¶РµРЅ Р·Р°РЅРёРјР°С‚СЊСЃСЏ РєР°Р¶РґС‹Р№ РґРµРЅСЊ",
    id                   : 468
  }, {
    word                 : "friendship",
    image                : "files/24_0469.jpg",
    audio                : "files/24_0469.mp3",
    audioMeaning         : "files/24_0469_meaning.mp3",
    audioExample         : "files/24_0469_example.mp3",
    textMeaning          : "Friendship is the relationship between people who are friends",
    textExample          : "Michael and Lisa have a very strong friendship with each other",
    transcription        : "[frГ©ndКѓГ¬p]",
    wordTranslate        : "РґСЂСѓР¶Р±Р°",
    textMeaningTranslate : "Р”СЂСѓР¶Р±Р° - СЌС‚Рѕ РѕС‚РЅРѕС€РµРЅРёСЏ РјРµР¶РґСѓ Р»СЋРґСЊРјРё, РєРѕС‚РѕСЂС‹Рµ СЏРІР»СЏСЋС‚СЃСЏ РґСЂСѓР·СЊСЏРјРё",
    textExampleTranslate : "РЈ РњР°Р№РєР»Р° Рё Р›РёР·С‹ РѕС‡РµРЅСЊ РєСЂРµРїРєРёРµ РґСЂСѓР¶РµСЃРєРёРµ РѕС‚РЅРѕС€РµРЅРёСЏ",
    id                   : 469
  }, {
    word                 : "guide",
    image                : "files/24_0470.jpg",
    audio                : "files/24_0470.mp3",
    audioMeaning         : "files/24_0470_meaning.mp3",
    audioExample         : "files/24_0470_example.mp3",
    textMeaning          : "A guide is someone who shows you where to go",
    textExample          : "We followed a guide at the park",
    transcription        : "[gaid]",
    wordTranslate        : "СЂСѓРєРѕРІРѕРґСЃС‚РІРѕ",
    textMeaningTranslate : "Р“РёРґ - СЌС‚Рѕ С‚РѕС‚, РєС‚Рѕ РїРѕРєР°Р·С‹РІР°РµС‚ РІР°Рј, РєСѓРґР° РёРґС‚Рё",
    textExampleTranslate : "РњС‹ СЃР»РµРґРѕРІР°Р»Рё Р·Р° РіРёРґРѕРј РІ РїР°СЂРєРµ",
    id                   : 470
  }, {
    word                 : "lack",
    image                : "files/24_0471.jpg",
    audio                : "files/24_0471.mp3",
    audioMeaning         : "files/24_0471_meaning.mp3",
    audioExample         : "files/24_0471_example.mp3",
    textMeaning          : "If there is a lack of something, there is not enough of it",
    textExample          : "His only problem is a lack of money",
    transcription        : "[lГ¦k]",
    wordTranslate        : "РѕС‚СЃСѓС‚СЃС‚РІРёРµ",
    textMeaningTranslate : "Р•СЃР»Рё С‡РµРіРѕ-С‚Рѕ РЅРµ С…РІР°С‚Р°РµС‚, СЌС‚РѕРіРѕ РЅРµ С…РІР°С‚Р°РµС‚",
    textExampleTranslate : "Р•РіРѕ РµРґРёРЅСЃС‚РІРµРЅРЅР°СЏ РїСЂРѕР±Р»РµРјР° - РЅРµС…РІР°С‚РєР° РґРµРЅРµРі",
    id                   : 471
  }, {
    word                 : "perform",
    image                : "files/24_0472.jpg",
    audio                : "files/24_0472.mp3",
    audioMeaning         : "files/24_0472_meaning.mp3",
    audioExample         : "files/24_0472_example.mp3",
    textMeaning          : "To perform is to do something in front of people who watch",
    textExample          : "He will perform a song for the class",
    transcription        : "[pЙ™rfЙ”МЃЛђrm]",
    wordTranslate        : "РІС‹РїРѕР»РЅРёС‚СЊ",
    textMeaningTranslate : "Р’С‹РїРѕР»РЅСЏС‚СЊ - Р·РЅР°С‡РёС‚ РґРµР»Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ РїРµСЂРµРґ Р»СЋРґСЊРјРё, РєРѕС‚РѕСЂС‹Рµ СЃРјРѕС‚СЂСЏС‚",
    textExampleTranslate : "РћРЅ РёСЃРїРѕР»РЅРёС‚ РїРµСЃРЅСЋ РґР»СЏ РєР»Р°СЃСЃР°",
    id                   : 472
  }, {
    word                 : "pressure",
    image                : "files/24_0473.jpg",
    audio                : "files/24_0473.mp3",
    audioMeaning         : "files/24_0473_meaning.mp3",
    audioExample         : "files/24_0473_example.mp3",
    textMeaning          : "Pressure is what you apply to make someone do something",
    textExample          : "They put pressure on him to change his mind",
    transcription        : "[prГ©КѓЙ™r]",
    wordTranslate        : "РґР°РІР»РµРЅРёРµ",
    textMeaningTranslate : "Р”Р°РІР»РµРЅРёРµ - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ РІС‹ РїСЂРёРјРµРЅСЏРµС‚Рµ, С‡С‚РѕР±С‹ Р·Р°СЃС‚Р°РІРёС‚СЊ РєРѕРіРѕ-С‚Рѕ С‡С‚Рѕ-С‚Рѕ РґРµР»Р°С‚СЊ",
    textExampleTranslate : "РћРЅРё Р·Р°СЃС‚Р°РІР»СЏСЋС‚ РµРіРѕ РїРµСЂРµРґСѓРјР°С‚СЊ",
    id                   : 473
  }, {
    word                 : "probably",
    image                : "files/24_0474.jpg",
    audio                : "files/24_0474.mp3",
    audioMeaning         : "files/24_0474_meaning.mp3",
    audioExample         : "files/24_0474_example.mp3",
    textMeaning          : "If something will probably happen, it is likely to happen",
    textExample          : "You will probably get a good grade if you study for the test",
    transcription        : "[prЙ‘МЃbЙ™bli]",
    wordTranslate        : "РІРµСЂРѕСЏС‚РЅРѕ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ, РІРµСЂРѕСЏС‚РЅРѕ, СЃР»СѓС‡РёС‚СЃСЏ, СЌС‚Рѕ РјРѕР¶РµС‚ РїСЂРѕРёР·РѕР№С‚Рё",
    textExampleTranslate : "Р’С‹, РІРµСЂРѕСЏС‚РЅРѕ, РїРѕР»СѓС‡РёС‚Рµ С…РѕСЂРѕС€СѓСЋ РѕС†РµРЅРєСѓ, РµСЃР»Рё Р±СѓРґРµС‚Рµ РіРѕС‚РѕРІРёС‚СЊСЃСЏ Рє СЌРєР·Р°РјРµРЅСѓ",
    id                   : 474
  }, {
    word                 : "public",
    image                : "files/24_0475.jpg",
    audio                : "files/24_0475.mp3",
    audioMeaning         : "files/24_0475_meaning.mp3",
    audioExample         : "files/24_0475_example.mp3",
    textMeaning          : "If something is public, it is meant for everyone to use",
    textExample          : "I went to the public park to play with my friends",
    transcription        : "[pКЊМЃblik]",
    wordTranslate        : "РѕР±С‰РµСЃС‚РІРµРЅРЅРѕСЃС‚СЊ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЏРІР»СЏРµС‚СЃСЏ РїСѓР±Р»РёС‡РЅС‹Рј, РѕРЅРѕ РїСЂРµРґРЅР°Р·РЅР°С‡РµРЅРѕ РґР»СЏ РІСЃРµС…",
    textExampleTranslate : "РЇ РїРѕС€РµР» РІ РѕР±С‰РµСЃС‚РІРµРЅРЅС‹Р№ РїР°СЂРє, С‡С‚РѕР±С‹ РїРѕРёРіСЂР°С‚СЊ СЃ РґСЂСѓР·СЊСЏРјРё",
    id                   : 475
  }, {
    word                 : "smart",
    image                : "files/24_0476.jpg",
    audio                : "files/24_0476.mp3",
    audioMeaning         : "files/24_0476_meaning.mp3",
    audioExample         : "files/24_0476_example.mp3",
    textMeaning          : "Smart means intelligent",
    textExample          : "Mary is a smart student",
    transcription        : "[smaЛђrt]",
    wordTranslate        : "СѓРјРЅС‹Р№",
    textMeaningTranslate : "РЈРјРЅС‹Р№ Р·РЅР°С‡РёС‚ СѓРјРЅС‹Р№",
    textExampleTranslate : "РњР°СЂРёСЏ СѓРјРЅР°СЏ СѓС‡РµРЅРёС†Р°",
    id                   : 476
  }, {
    word                 : "strike",
    image                : "files/24_0477.jpg",
    audio                : "files/24_0477.mp3",
    audioMeaning         : "files/24_0477_meaning.mp3",
    audioExample         : "files/24_0477_example.mp3",
    textMeaning          : "To strike people or things is to hit them",
    textExample          : "She struck the other girl in the face",
    transcription        : "[straik]",
    wordTranslate        : "Р·Р°Р±Р°СЃС‚РѕРІРєР°",
    textMeaningTranslate : "Р‘РёС‚СЊ Р»СЋРґРµР№ РёР»Рё РІРµС‰Рё - Р·РЅР°С‡РёС‚ Р±РёС‚СЊ РёС…",
    textExampleTranslate : "РћРЅР° СѓРґР°СЂРёР»Р° РґСЂСѓРіСѓСЋ РґРµРІСѓС€РєСѓ РїРѕ Р»РёС†Сѓ",
    id                   : 477
  }, {
    word                 : "support",
    image                : "files/24_0478.jpg",
    audio                : "files/24_0478.mp3",
    audioMeaning         : "files/24_0478_meaning.mp3",
    audioExample         : "files/24_0478_example.mp3",
    textMeaning          : "To support something is to like it and help it be successful",
    textExample          : "Everyone at work supports the new plan",
    transcription        : "[sЙ™pЙ”МЃЛђrt]",
    wordTranslate        : "СЃР»СѓР¶Р±Р° РїРѕРґРґРµСЂР¶РєРё",
    textMeaningTranslate : "РџРѕРґРґРµСЂР¶РёРІР°С‚СЊ С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ Р»СЋР±РёС‚СЊ СЌС‚Рѕ Рё РїРѕРјРѕРіР°С‚СЊ РµРјСѓ Р±С‹С‚СЊ СѓСЃРїРµС€РЅС‹Рј",
    textExampleTranslate : "Р’СЃРµ РЅР° СЂР°Р±РѕС‚Рµ РїРѕРґРґРµСЂР¶РёРІР°СЋС‚ РЅРѕРІС‹Р№ РїР»Р°РЅ",
    id                   : 478
  }, {
    word                 : "term",
    image                : "files/24_0479.jpg",
    audio                : "files/24_0479.mp3",
    audioMeaning         : "files/24_0479_meaning.mp3",
    audioExample         : "files/24_0479_example.mp3",
    textMeaning          : "A term is a word for something",
    textExample          : "I often use the term вЂњoopsвЂќ when I make a mistake",
    transcription        : "[tЙ™Лђrm]",
    wordTranslate        : "СЃСЂРѕРє",
    textMeaningTranslate : "РўРµСЂРјРёРЅ - СЌС‚Рѕ СЃР»РѕРІРѕ РґР»СЏ С‡РµРіРѕ-С‚Рѕ",
    textExampleTranslate : "РЇ С‡Р°СЃС‚Рѕ РёСЃРїРѕР»СЊР·СѓСЋ С‚РµСЂРјРёРЅ 'СѓРїСЃ', РєРѕРіРґР° СЃРѕРІРµСЂС€Р°СЋ РѕС€РёР±РєСѓ",
    id                   : 479
  }, {
    word                 : "unite",
    image                : "files/24_0480.jpg",
    audio                : "files/24_0480.mp3",
    audioMeaning         : "files/24_0480_meaning.mp3",
    audioExample         : "files/24_0480_example.mp3",
    textMeaning          : "To unite is to get together to do something",
    textExample          : "If we unite, we can finish our project faster",
    transcription        : "[juЛђnГЎit]",
    wordTranslate        : "РѕР±СЉРµРґРёРЅРёС‚СЊ",
    textMeaningTranslate : "РћР±СЉРµРґРёРЅРёС‚СЊСЃСЏ - Р·РЅР°С‡РёС‚ СЃРѕР±СЂР°С‚СЊСЃСЏ РІРјРµСЃС‚Рµ, С‡С‚РѕР±С‹ С‡С‚Рѕ-С‚Рѕ СЃРґРµР»Р°С‚СЊ",
    textExampleTranslate : "Р•СЃР»Рё РјС‹ РѕР±СЉРµРґРёРЅРёРјСЃСЏ, РјС‹ СЃРјРѕР¶РµРј Р·Р°РІРµСЂС€РёС‚СЊ РЅР°С€ РїСЂРѕРµРєС‚ Р±С‹СЃС‚СЂРµРµ",
    id                   : 480
  }, {
    word                 : "associate",
    image                : "files/25_0481.jpg",
    audio                : "files/25_0481.mp3",
    audioMeaning         : "files/25_0481_meaning.mp3",
    audioExample         : "files/25_0481_example.mp3",
    textMeaning          : "To associate means to connect something with a person or thing",
    textExample          : "Most people associate birthday parties with having fun",
    transcription        : "[Й™sГіuКѓiГЁit]",
    wordTranslate        : "Р°СЃСЃРѕС†РёРёСЂРѕРІР°С‚СЊ",
    textMeaningTranslate : "РЎРІСЏР·Р°С‚СЊ РѕР·РЅР°С‡Р°РµС‚ СЃРІСЏР·Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ СЃ С‡РµР»РѕРІРµРєРѕРј РёР»Рё РІРµС‰СЊСЋ",
    textExampleTranslate : "РЈ Р±РѕР»СЊС€РёРЅСЃС‚РІР° Р»СЋРґРµР№ РґРЅРё СЂРѕР¶РґРµРЅРёСЏ Р°СЃСЃРѕС†РёРёСЂСѓСЋС‚СЃСЏ СЃ РІРµСЃРµР»СЊРµРј",
    id                   : 481
  }, {
    word                 : "environment",
    image                : "files/25_0482.jpg",
    audio                : "files/25_0482.mp3",
    audioMeaning         : "files/25_0482_meaning.mp3",
    audioExample         : "files/25_0482_example.mp3",
    textMeaning          : "The environment is the place where people work or live",
    textExample          : "Keeping our environment clean is important to our health",
    transcription        : "[invГЎiЙ™rЙ™nmЙ™nt]",
    wordTranslate        : "РѕРєСЂСѓР¶Р°СЋС‰Р°СЏ РѕР±СЃС‚Р°РЅРѕРІРєР°",
    textMeaningTranslate : "РћРєСЂСѓР¶Р°СЋС‰Р°СЏ СЃСЂРµРґР° - СЌС‚Рѕ РјРµСЃС‚Рѕ, РіРґРµ Р»СЋРґРё СЂР°Р±РѕС‚Р°СЋС‚ РёР»Рё Р¶РёРІСѓС‚",
    textExampleTranslate : "РџРѕРґРґРµСЂР¶Р°РЅРёРµ РЅР°С€РµР№ РѕРєСЂСѓР¶Р°СЋС‰РµР№ СЃСЂРµРґС‹ РІ С‡РёСЃС‚РѕС‚Рµ РІР°Р¶РЅРѕ РґР»СЏ РЅР°С€РµРіРѕ Р·РґРѕСЂРѕРІСЊСЏ",
    id                   : 482
  }, {
    word                 : "factory",
    image                : "files/25_0483.jpg",
    audio                : "files/25_0483.mp3",
    audioMeaning         : "files/25_0483_meaning.mp3",
    audioExample         : "files/25_0483_example.mp3",
    textMeaning          : "A factory is a building where things are made or put together",
    textExample          : "We have only one factory in our town",
    transcription        : "[fЗЅktЙ™ri]",
    wordTranslate        : "С„Р°Р±СЂРёРєР°",
    textMeaningTranslate : "Р¤Р°Р±СЂРёРєР° - СЌС‚Рѕ Р·РґР°РЅРёРµ, РіРґРµ РІРµС‰Рё СЃРґРµР»Р°РЅС‹ РёР»Рё СЃРѕР±СЂР°РЅС‹ РІРјРµСЃС‚Рµ",
    textExampleTranslate : "РЈ РЅР°СЃ С‚РѕР»СЊРєРѕ РѕРґРёРЅ Р·Р°РІРѕРґ РІ РЅР°С€РµРј РіРѕСЂРѕРґРµ",
    id                   : 483
  }, {
    word                 : "feature",
    image                : "files/25_0484.jpg",
    audio                : "files/25_0484.mp3",
    audioMeaning         : "files/25_0484_meaning.mp3",
    audioExample         : "files/25_0484_example.mp3",
    textMeaning          : "A feature is an important part of something",
    textExample          : "The cell phone has many features",
    transcription        : "[fГ­ЛђtКѓЙ™r]",
    wordTranslate        : "С…Р°СЂР°РєС‚РµСЂРЅР°СЏ С‡РµСЂС‚Р°",
    textMeaningTranslate : "РћСЃРѕР±РµРЅРЅРѕСЃС‚СЊ СЏРІР»СЏРµС‚СЃСЏ РІР°Р¶РЅРѕР№ С‡Р°СЃС‚СЊСЋ С‡РµРіРѕ-С‚Рѕ",
    textExampleTranslate : "РЈ РјРѕР±РёР»СЊРЅРѕРіРѕ С‚РµР»РµС„РѕРЅР° РјРЅРѕРіРѕ С„СѓРЅРєС†РёР№",
    id                   : 484
  }, {
    word                 : "instance",
    image                : "files/25_0485.jpg",
    audio                : "files/25_0485.mp3",
    audioMeaning         : "files/25_0485_meaning.mp3",
    audioExample         : "files/25_0485_example.mp3",
    textMeaning          : "An instance is an example of something",
    textExample          : "I have never experienced an instance of hate. Have you?",
    transcription        : "[Г­nstЙ™ns]",
    wordTranslate        : "РїСЂРёРјРµСЂ",
    textMeaningTranslate : "Р­РєР·РµРјРїР»СЏСЂ - СЌС‚Рѕ РїСЂРёРјРµСЂ С‡РµРіРѕ-С‚Рѕ",
    textExampleTranslate : "РЇ РЅРёРєРѕРіРґР° РЅРµ РёСЃРїС‹С‚С‹РІР°Р» РЅРµРЅР°РІРёСЃС‚Рё. Рђ С‚С‹?",
    id                   : 485
  }, {
    word                 : "involve",
    image                : "files/25_0486.jpg",
    audio                : "files/25_0486.mp3",
    audioMeaning         : "files/25_0486_meaning.mp3",
    audioExample         : "files/25_0486_example.mp3",
    textMeaning          : "To involve means to include as an active participant",
    textExample          : "The whole family was involved in playing the game",
    transcription        : "[invЙ‘МЃlv]",
    wordTranslate        : "РІРєР»СЋС‡Р°С‚СЊ",
    textMeaningTranslate : "РџСЂРёРІР»РµРєР°С‚СЊ - Р·РЅР°С‡РёС‚ РІРєР»СЋС‡Р°С‚СЊ РІ РєР°С‡РµСЃС‚РІРµ Р°РєС‚РёРІРЅРѕРіРѕ СѓС‡Р°СЃС‚РЅРёРєР°",
    textExampleTranslate : "Р’СЃСЏ СЃРµРјСЊСЏ Р±С‹Р»Р° РІРѕРІР»РµС‡РµРЅР° РІ РёРіСЂСѓ",
    id                   : 486
  }, {
    word                 : "medicine",
    image                : "files/25_0487.jpg",
    audio                : "files/25_0487.mp3",
    audioMeaning         : "files/25_0487_meaning.mp3",
    audioExample         : "files/25_0487_example.mp3",
    textMeaning          : "Medicine is something you take to feel better or treat an illness",
    textExample          : "The doctor gave me medicine for my cold",
    transcription        : "[mГ©dЙ™sin]",
    wordTranslate        : "Р»РµРєР°СЂСЃС‚РІРѕ",
    textMeaningTranslate : "РњРµРґРёС†РёРЅР° - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ РІС‹ РїСЂРёРЅРёРјР°РµС‚Рµ, С‡С‚РѕР±С‹ С‡СѓРІСЃС‚РІРѕРІР°С‚СЊ СЃРµР±СЏ Р»СѓС‡С€Рµ РёР»Рё Р»РµС‡РёС‚СЊ Р±РѕР»РµР·РЅСЊ",
    textExampleTranslate : "Р”РѕРєС‚РѕСЂ РґР°Р» РјРЅРµ Р»РµРєР°СЂСЃС‚РІРѕ РѕС‚ РїСЂРѕСЃС‚СѓРґС‹",
    id                   : 487
  }, {
    word                 : "mix",
    image                : "files/25_0488.jpg",
    audio                : "files/25_0488.mp3",
    audioMeaning         : "files/25_0488_meaning.mp3",
    audioExample         : "files/25_0488_example.mp3",
    textMeaning          : "A mix is different things put together",
    textExample          : "The green mix we made in science class spilled onto the table",
    transcription        : "[miks]",
    wordTranslate        : "СЃРјРµС€РёРІР°С‚СЊ",
    textMeaningTranslate : "РњРёРєСЃ - СЌС‚Рѕ СЂР°Р·РЅС‹Рµ РІРµС‰Рё, РІРјРµСЃС‚Рµ РІР·СЏС‚С‹Рµ",
    textExampleTranslate : "Р—РµР»РµРЅР°СЏ СЃРјРµСЃСЊ, РєРѕС‚РѕСЂСѓСЋ РјС‹ СЃРґРµР»Р°Р»Рё РЅР° СѓСЂРѕРєРµ РЅР°СѓРєРё, РїСЂРѕР»РёР»Р°СЃСЊ РЅР° СЃС‚РѕР»",
    id                   : 488
  }, {
    word                 : "organize",
    image                : "files/25_0489.jpg",
    audio                : "files/25_0489.mp3",
    audioMeaning         : "files/25_0489_meaning.mp3",
    audioExample         : "files/25_0489_example.mp3",
    textMeaning          : "To organize is to plan or get ready for an event",
    textExample          : "Make a list to help you organize the things you need",
    transcription        : "[Й”МЃЛђrgЙ™nГ iz]",
    wordTranslate        : "РѕСЂРіР°РЅРёР·РѕРІР°С‚СЊ",
    textMeaningTranslate : "РћСЂРіР°РЅРёР·РѕРІР°С‚СЊ - СЌС‚Рѕ СЃРїР»Р°РЅРёСЂРѕРІР°С‚СЊ РёР»Рё РїРѕРґРіРѕС‚РѕРІРёС‚СЊСЃСЏ Рє СЃРѕР±С‹С‚РёСЋ",
    textExampleTranslate : "РЎРѕСЃС‚Р°РІСЊС‚Рµ СЃРїРёСЃРѕРє, РєРѕС‚РѕСЂС‹Р№ РїРѕРјРѕР¶РµС‚ РІР°Рј РѕСЂРіР°РЅРёР·РѕРІР°С‚СЊ С‚Рѕ, С‡С‚Рѕ РІР°Рј РЅСѓР¶РЅРѕ",
    id                   : 489
  }, {
    word                 : "period",
    image                : "files/25_0490.jpg",
    audio                : "files/25_0490.mp3",
    audioMeaning         : "files/25_0490_meaning.mp3",
    audioExample         : "files/25_0490_example.mp3",
    textMeaning          : "A period is an amount of time when something happens",
    textExample          : "In one period in Europe, there were many knights",
    transcription        : "[pГ­ЛђЙ™riЙ™d]",
    wordTranslate        : "РїРµСЂРёРѕРґ",
    textMeaningTranslate : "РџРµСЂРёРѕРґ - СЌС‚Рѕ РєРѕР»РёС‡РµСЃС‚РІРѕ РІСЂРµРјРµРЅРё, РєРѕРіРґР° С‡С‚Рѕ-С‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚",
    textExampleTranslate : "Р—Р° РѕРґРёРЅ РїРµСЂРёРѕРґ РІ Р•РІСЂРѕРїРµ Р±С‹Р»Рѕ РјРЅРѕРіРѕ СЂС‹С†Р°СЂРµР№",
    id                   : 490
  }, {
    word                 : "populate",
    image                : "files/25_0491.jpg",
    audio                : "files/25_0491.mp3",
    audioMeaning         : "files/25_0491_meaning.mp3",
    audioExample         : "files/25_0491_example.mp3",
    textMeaning          : "If people populate an area, they live there",
    textExample          : "Billions of people populate the Earth",
    transcription        : "[pЙ‘МЃpjЙ™lГЁit]",
    wordTranslate        : "Р·Р°СЃРµР»РёС‚СЊ",
    textMeaningTranslate : "Р•СЃР»Рё Р»СЋРґРё РЅР°СЃРµР»СЏСЋС‚ РѕР±Р»Р°СЃС‚СЊ, РѕРЅРё Р¶РёРІСѓС‚ С‚Р°Рј",
    textExampleTranslate : "РњРёР»Р»РёР°СЂРґС‹ Р»СЋРґРµР№ РЅР°СЃРµР»СЏСЋС‚ Р—РµРјР»СЋ",
    id                   : 491
  }, {
    word                 : "produce",
    image                : "files/25_0492.jpg",
    audio                : "files/25_0492.mp3",
    audioMeaning         : "files/25_0492_meaning.mp3",
    audioExample         : "files/25_0492_example.mp3",
    textMeaning          : "To produce something is to make or grow it",
    textExample          : "This tree produces apples every year",
    transcription        : "[prЙ™djГєЛђs]",
    wordTranslate        : "РїСЂРѕРёР·РІРѕРґРёС‚СЊ",
    textMeaningTranslate : "РџСЂРѕРёР·РІРµСЃС‚Рё С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ СЃРґРµР»Р°С‚СЊ РёР»Рё РІС‹СЂР°СЃС‚РёС‚СЊ СЌС‚Рѕ",
    textExampleTranslate : "Р­С‚Рѕ РґРµСЂРµРІРѕ РїСЂРѕРёР·РІРѕРґРёС‚ СЏР±Р»РѕРєРё РєР°Р¶РґС‹Р№ РіРѕРґ",
    id                   : 492
  }, {
    word                 : "range",
    image                : "files/25_0493.jpg",
    audio                : "files/25_0493.mp3",
    audioMeaning         : "files/25_0493_meaning.mp3",
    audioExample         : "files/25_0493_example.mp3",
    textMeaning          : "A range is a number or a set of similar things",
    textExample          : "I saw a range of cars to choose from",
    transcription        : "[reindК’]",
    wordTranslate        : "СЃРїРµРєС‚СЂ",
    textMeaningTranslate : "Р”РёР°РїР°Р·РѕРЅ - СЌС‚Рѕ С‡РёСЃР»Рѕ РёР»Рё РЅР°Р±РѕСЂ РїРѕС…РѕР¶РёС… РІРµС‰РµР№",
    textExampleTranslate : "РЇ РІРёРґРµР» С†РµР»С‹Р№ СЂСЏРґ Р°РІС‚РѕРјРѕР±РёР»РµР№ РЅР° РІС‹Р±РѕСЂ",
    id                   : 493
  }, {
    word                 : "recognize",
    image                : "files/25_0494.jpg",
    audio                : "files/25_0494.mp3",
    audioMeaning         : "files/25_0494_meaning.mp3",
    audioExample         : "files/25_0494_example.mp3",
    textMeaning          : "To recognize something is to know it because you have seen it before",
    textExample          : "I recognized an old friend from many years ago",
    transcription        : "[rГ©kЙ™gnГ iz]",
    wordTranslate        : "РїСЂРёР·РЅР°СЋС‚",
    textMeaningTranslate : "РџСЂРёР·РЅР°С‚СЊ С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ Р·РЅР°С‚СЊ СЌС‚Рѕ, РїРѕС‚РѕРјСѓ С‡С‚Рѕ РІС‹ РІРёРґРµР»Рё СЌС‚Рѕ СЂР°РЅСЊС€Рµ",
    textExampleTranslate : "РЇ СѓР·РЅР°Р» СЃС‚Р°СЂРѕРіРѕ РґСЂСѓРіР° РјРЅРѕРіРѕ Р»РµС‚ РЅР°Р·Р°Рґ",
    id                   : 494
  }, {
    word                 : "regular",
    image                : "files/25_0495.jpg",
    audio                : "files/25_0495.mp3",
    audioMeaning         : "files/25_0495_meaning.mp3",
    audioExample         : "files/25_0495_example.mp3",
    textMeaning          : "If something is regular, it happens often and in equal amounts of time",
    textExample          : "Our regular lunch time is around noon",
    transcription        : "[rГ©gjulЙ™r]",
    wordTranslate        : "СЃС‚Р°Р±РёР»СЊРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЂРµРіСѓР»СЏСЂРЅРѕ, СЌС‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚ С‡Р°СЃС‚Рѕ Рё РІ СЂР°РІРЅС‹Рµ РїСЂРѕРјРµР¶СѓС‚РєРё РІСЂРµРјРµРЅРё",
    textExampleTranslate : "РњС‹ СЂРµРіСѓР»СЏСЂРЅРѕ РѕР±РµРґР°РµРј РѕРєРѕР»Рѕ РїРѕР»СѓРґРЅСЏ",
    id                   : 495
  }, {
    word                 : "sign",
    image                : "files/25_0496.jpg",
    audio                : "files/25_0496.mp3",
    audioMeaning         : "files/25_0496_meaning.mp3",
    audioExample         : "files/25_0496_example.mp3",
    textMeaning          : "A sign is an indication giving information, directions, a warning, etc",
    textExample          : "The sign indicated that today would be a bad day",
    transcription        : "[sain]",
    wordTranslate        : "РїРѕРґРїРёСЃР°С‚СЊ",
    textMeaningTranslate : "Р—РЅР°Рє - СЌС‚Рѕ СѓРєР°Р·Р°РЅРёРµ, РґР°СЋС‰РµРµ РёРЅС„РѕСЂРјР°С†РёСЋ, СѓРєР°Р·Р°РЅРёСЏ, РїСЂРµРґСѓРїСЂРµР¶РґРµРЅРёРµ Рё С‚. Р”",
    textExampleTranslate : "Р—РЅР°Рє СѓРєР°Р·С‹РІР°РµС‚, С‡С‚Рѕ СЃРµРіРѕРґРЅСЏ Р±СѓРґРµС‚ РїР»РѕС…РѕР№ РґРµРЅСЊ",
    id                   : 496
  }, {
    word                 : "tip",
    image                : "files/25_0497.jpg",
    audio                : "files/25_0497.mp3",
    audioMeaning         : "files/25_0497_meaning.mp3",
    audioExample         : "files/25_0497_example.mp3",
    textMeaning          : "A tip is a pointed end of something",
    textExample          : "The tip of his pen was very sharp",
    transcription        : "[tip]",
    wordTranslate        : "РїРѕРґСЃРєР°Р·РєР°",
    textMeaningTranslate : "РќР°РєРѕРЅРµС‡РЅРёРє - СЌС‚Рѕ Р·Р°РѕСЃС‚СЂРµРЅРЅС‹Р№ РєРѕРЅРµС† С‡РµРіРѕ-С‚Рѕ",
    textExampleTranslate : "РљРѕРЅС‡РёРє РµРіРѕ СЂСѓС‡РєРё Р±С‹Р» РѕС‡РµРЅСЊ РѕСЃС‚СЂС‹Рј",
    id                   : 497
  }, {
    word                 : "tradition",
    image                : "files/25_0498.jpg",
    audio                : "files/25_0498.mp3",
    audioMeaning         : "files/25_0498_meaning.mp3",
    audioExample         : "files/25_0498_example.mp3",
    textMeaning          : "A tradition is something people have been doing for a long time",
    textExample          : "Marriage is a tradition all over the world",
    transcription        : "[trЙ™dГ­КѓЙ™n]",
    wordTranslate        : "С‚СЂР°РґРёС†РёСЏ",
    textMeaningTranslate : "РўСЂР°РґРёС†РёСЏ - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ Р»СЋРґРё РґРµР»Р°Р»Рё РІ С‚РµС‡РµРЅРёРµ РґРѕР»РіРѕРіРѕ РІСЂРµРјРµРЅРё",
    textExampleTranslate : "Р‘СЂР°Рє - СЌС‚Рѕ С‚СЂР°РґРёС†РёСЏ РІРѕ РІСЃРµРј РјРёСЂРµ",
    id                   : 498
  }, {
    word                 : "trash",
    image                : "files/25_0499.jpg",
    audio                : "files/25_0499.mp3",
    audioMeaning         : "files/25_0499_meaning.mp3",
    audioExample         : "files/25_0499_example.mp3",
    textMeaning          : "Trash is waste material or unwanted or worthless things",
    textExample          : "Please take out the trash; it smells bad",
    transcription        : "[trГ¦Кѓ]",
    wordTranslate        : "РјСѓСЃРѕСЂ",
    textMeaningTranslate : "РњСѓСЃРѕСЂ - СЌС‚Рѕ РЅРµРЅСѓР¶РЅС‹Р№ РјР°С‚РµСЂРёР°Р», РЅРµР¶РµР»Р°С‚РµР»СЊРЅС‹Рµ РёР»Рё Р±РµСЃРїРѕР»РµР·РЅС‹Рµ РІРµС‰Рё",
    textExampleTranslate : "РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РІС‹РЅСЊС‚Рµ РјСѓСЃРѕСЂ; РѕРЅ РїР»РѕС…Рѕ РїР°С…РЅРµС‚",
    id                   : 499
  }, {
    word                 : "wide",
    image                : "files/25_0500.jpg",
    audio                : "files/25_0500.mp3",
    audioMeaning         : "files/25_0500_meaning.mp3",
    audioExample         : "files/25_0500_example.mp3",
    textMeaning          : "If something is wide, it is large from side to side",
    textExample          : "The door was as wide as my arms",
    transcription        : "[waid]",
    wordTranslate        : "С€РёСЂРѕРєРёР№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ С€РёСЂРѕРєРѕРµ, РѕРЅРѕ Р±РѕР»СЊС€РѕРµ РёР· СЃС‚РѕСЂРѕРЅС‹ РІ СЃС‚РѕСЂРѕРЅСѓ",
    textExampleTranslate : "Р”РІРµСЂСЊ Р±С‹Р»Р° С‚Р°РєР°СЏ Р¶Рµ С€РёСЂРѕРєР°СЏ, РєР°Рє РјРѕРё СЂСѓРєРё",
    id                   : 500
  }, {
    word                 : "advice",
    image                : "files/26_0501.jpg",
    audio                : "files/26_0501.mp3",
    audioMeaning         : "files/26_0501_meaning.mp3",
    audioExample         : "files/26_0501_example.mp3",
    textMeaning          : "Advice is an opinion about what to do",
    textExample          : "I donвЂ™t know how to study for my exams. Can you give me some advice?",
    transcription        : "[Й™dvГЎis]",
    wordTranslate        : "СЃРѕРІРµС‚",
    textMeaningTranslate : "РЎРѕРІРµС‚ - СЌС‚Рѕ РјРЅРµРЅРёРµ Рѕ С‚РѕРј, С‡С‚Рѕ РґРµР»Р°С‚СЊ",
    textExampleTranslate : "РЇ РЅРµ Р·РЅР°СЋ, РєР°Рє РїРѕРґРіРѕС‚РѕРІРёС‚СЊСЃСЏ Рє СЌРєР·Р°РјРµРЅР°Рј. РњРѕР¶РµС‚Рµ РґР°С‚СЊ РјРЅРµ СЃРѕРІРµС‚?",
    id                   : 501
  }, {
    word                 : "along",
    image                : "files/26_0502.jpg",
    audio                : "files/26_0502.mp3",
    audioMeaning         : "files/26_0502_meaning.mp3",
    audioExample         : "files/26_0502_example.mp3",
    textMeaning          : "Along means down the length of a road, river, etc",
    textExample          : "Walk along this tunnel for ten minutes, and youвЂ™ll see a door on the left",
    transcription        : "[Й™lЙ”МЃЛђЕ‹]",
    wordTranslate        : "РІРјРµСЃС‚Рµ",
    textMeaningTranslate : "Р’РґРѕР»СЊ РѕР·РЅР°С‡Р°РµС‚ РїРѕ РґРѕСЂРѕРіРµ, СЂРµРєРµ Рё С‚. Р”",
    textExampleTranslate : "РџСЂРѕР№РґРёС‚Рµ РїРѕ СЌС‚РѕРјСѓ С‚СѓРЅРЅРµР»СЋ РІ С‚РµС‡РµРЅРёРµ РґРµСЃСЏС‚Рё РјРёРЅСѓС‚, Рё РІС‹ СѓРІРёРґРёС‚Рµ РґРІРµСЂСЊ СЃР»РµРІР°",
    id                   : 502
  }, {
    word                 : "attention",
    image                : "files/26_0503.jpg",
    audio                : "files/26_0503.mp3",
    audioMeaning         : "files/26_0503_meaning.mp3",
    audioExample         : "files/26_0503_example.mp3",
    textMeaning          : "Attention is the notice, thought, or consideration of someone",
    textExample          : "His work got the attention of two of his co-workers",
    transcription        : "[Й™tГ©nКѓЙ™n]",
    wordTranslate        : "РІРЅРёРјР°РЅРёРµ",
    textMeaningTranslate : "Р’РЅРёРјР°РЅРёРµ - СЌС‚Рѕ РІРЅРёРјР°РЅРёРµ, РјС‹СЃР»СЊ РёР»Рё СЃРѕРѕР±СЂР°Р¶РµРЅРёРµ РєРѕРіРѕ-Р»РёР±Рѕ",
    textExampleTranslate : "Р•РіРѕ СЂР°Р±РѕС‚Р° РїСЂРёРІР»РµРєР»Р° РІРЅРёРјР°РЅРёРµ РґРІСѓС… РµРіРѕ СЃРѕС‚СЂСѓРґРЅРёРєРѕРІ",
    id                   : 503
  }, {
    word                 : "attract",
    image                : "files/26_0504.jpg",
    audio                : "files/26_0504.mp3",
    audioMeaning         : "files/26_0504_meaning.mp3",
    audioExample         : "files/26_0504_example.mp3",
    textMeaning          : "To attract means to make a person or thing come closer or be interested",
    textExample          : "The magnet attracted the metal",
    transcription        : "[Й™trЗЅkt]",
    wordTranslate        : "РїСЂРёРІР»РµС‡СЊ",
    textMeaningTranslate : "РџСЂРёРІР»РµС‡СЊ - Р·РЅР°С‡РёС‚ СЃРґРµР»Р°С‚СЊ С‡РµР»РѕРІРµРєР° РёР»Рё РІРµС‰СЊ Р±Р»РёР¶Рµ РёР»Рё Р·Р°РёРЅС‚РµСЂРµСЃРѕРІР°С‚СЊСЃСЏ",
    textExampleTranslate : "РњР°РіРЅРёС‚ РїСЂРёС‚СЏРіРёРІР°Р» РјРµС‚Р°Р»Р»",
    id                   : 504
  }, {
    word                 : "climb",
    image                : "files/26_0505.jpg",
    audio                : "files/26_0505.mp3",
    audioMeaning         : "files/26_0505_meaning.mp3",
    audioExample         : "files/26_0505_example.mp3",
    textMeaning          : "To climb means to use your hands and feet to go up something",
    textExample          : "The girls climbed to the top of the mountain",
    transcription        : "[klaim]",
    wordTranslate        : "РїРѕРґРЅСЏС‚СЊСЃСЏ",
    textMeaningTranslate : "РџРѕРґРЅСЏС‚СЊСЃСЏ РѕР·РЅР°С‡Р°РµС‚ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ СЂСѓРєРё Рё РЅРѕРіРё, С‡С‚РѕР±С‹ РїРѕРґРЅСЏС‚СЊСЃСЏ",
    textExampleTranslate : "Р”РµРІС‡РѕРЅРєРё Р·Р°Р±СЂР°Р»РёСЃСЊ РЅР° РІРµСЂС€РёРЅСѓ РіРѕСЂС‹",
    id                   : 505
  }, {
    word                 : "drop",
    image                : "files/26_0506.jpg",
    audio                : "files/26_0506.mp3",
    audioMeaning         : "files/26_0506_meaning.mp3",
    audioExample         : "files/26_0506_example.mp3",
    textMeaning          : "To drop is to fall or allow something to fall",
    textExample          : "A small amount of water dropped from the bottle",
    transcription        : "[drЙ‘p]",
    wordTranslate        : "РїР°РґРµРЅРёРµ",
    textMeaningTranslate : "Р‘СЂРѕСЃРёС‚СЊ - Р·РЅР°С‡РёС‚ СѓРїР°СЃС‚СЊ РёР»Рё РїРѕР·РІРѕР»РёС‚СЊ С‡РµРјСѓ-С‚Рѕ СѓРїР°СЃС‚СЊ",
    textExampleTranslate : "РёР· Р±СѓС‚С‹Р»РєРё РІС‹РїР°Р»Рѕ РЅРµР±РѕР»СЊС€РѕРµ РєРѕР»РёС‡РµСЃС‚РІРѕ РІРѕРґС‹",
    id                   : 506
  }, {
    word                 : "final",
    image                : "files/26_0507.jpg",
    audio                : "files/26_0507.mp3",
    audioMeaning         : "files/26_0507_meaning.mp3",
    audioExample         : "files/26_0507_example.mp3",
    textMeaning          : "If something is final, it is the last part",
    textExample          : "In the final part of the film, the man and the woman got married",
    transcription        : "[fГЎinl]",
    wordTranslate        : "РѕРєРѕРЅС‡Р°С‚РµР»СЊРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РѕРєРѕРЅС‡Р°С‚РµР»СЊРЅРѕ, СЌС‚Рѕ РїРѕСЃР»РµРґРЅСЏСЏ С‡Р°СЃС‚СЊ",
    textExampleTranslate : "Р’ Р·Р°РєР»СЋС‡РёС‚РµР»СЊРЅРѕР№ С‡Р°СЃС‚Рё С„РёР»СЊРјР° РјСѓР¶С‡РёРЅР° Рё Р¶РµРЅС‰РёРЅР° РїРѕР¶РµРЅРёР»РёСЃСЊ",
    id                   : 507
  }, {
    word                 : "further",
    image                : "files/26_0508.jpg",
    audio                : "files/26_0508.mp3",
    audioMeaning         : "files/26_0508_meaning.mp3",
    audioExample         : "files/26_0508_example.mp3",
    textMeaning          : "Further means at or from a greater distance or time",
    textExample          : "The escalator is further than I thought",
    transcription        : "[fЙ™МЃЛђrГ°Й™r]",
    wordTranslate        : "РґР°Р»СЊС€Рµ",
    textMeaningTranslate : "Р”Р°Р»РµРµ РѕР·РЅР°С‡Р°РµС‚ РЅР° РёР»Рё СЃ Р±РѕР»СЊС€РµРіРѕ СЂР°СЃСЃС‚РѕСЏРЅРёСЏ РёР»Рё РІСЂРµРјРµРЅРё",
    textExampleTranslate : "Р­СЃРєР°Р»Р°С‚РѕСЂ РґР°Р»СЊС€Рµ, С‡РµРј СЏ РґСѓРјР°Р»",
    id                   : 508
  }, {
    word                 : "imply",
    image                : "files/26_0509.jpg",
    audio                : "files/26_0509.mp3",
    audioMeaning         : "files/26_0509_meaning.mp3",
    audioExample         : "files/26_0509_example.mp3",
    textMeaning          : "To imply something is to suggest it without saying it",
    textExample          : "The man implied that he wanted the job, but he didnвЂ™t say so",
    transcription        : "[implГЎi]",
    wordTranslate        : "РїСЂРµРґРїРѕР»Р°РіР°РµС‚",
    textMeaningTranslate : "РџРѕРґСЂР°Р·СѓРјРёС‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РїСЂРµРґР»РѕР¶РёС‚СЊ СЌС‚Рѕ, РЅРµ СЃРєР°Р·Р°РІ СЌС‚РѕРіРѕ",
    textExampleTranslate : "Р§РµР»РѕРІРµРє РїРѕРґСЂР°Р·СѓРјРµРІР°Р», С‡С‚Рѕ РѕРЅ С…РѕС‚РµР» СЂР°Р±РѕС‚Сѓ, РЅРѕ РѕРЅ РЅРµ СЃРєР°Р·Р°Р» С‚Р°Рє",
    id                   : 509
  }, {
    word                 : "maintain",
    image                : "files/26_0510.jpg",
    audio                : "files/26_0510.mp3",
    audioMeaning         : "files/26_0510_meaning.mp3",
    audioExample         : "files/26_0510_example.mp3",
    textMeaning          : "To maintain means to make something stay the same",
    textExample          : "The balls maintain constant movement",
    transcription        : "[meintГ©in]",
    wordTranslate        : "РїРѕРґРґРµСЂР¶РёРІР°С‚СЊ",
    textMeaningTranslate : "РџРѕРґРґРµСЂР¶РёРІР°С‚СЊ - Р·РЅР°С‡РёС‚ Р·Р°СЃС‚Р°РІРёС‚СЊ С‡С‚Рѕ-С‚Рѕ РѕСЃС‚Р°РІР°С‚СЊСЃСЏ РїСЂРµР¶РЅРёРј",
    textExampleTranslate : "РЁР°СЂРёРєРё РїРѕРґРґРµСЂР¶РёРІР°СЋС‚ РїРѕСЃС‚РѕСЏРЅРЅРѕРµ РґРІРёР¶РµРЅРёРµ",
    id                   : 510
  }, {
    word                 : "neither",
    image                : "files/26_0511.jpg",
    audio                : "files/26_0511.mp3",
    audioMeaning         : "files/26_0511_meaning.mp3",
    audioExample         : "files/26_0511_example.mp3",
    textMeaning          : "You use neither to connect two negative possibilities",
    textExample          : "Neither the path on the left nor the path on the right will lead us home",
    transcription        : "[nГ­ЛђГ°Й™r]",
    wordTranslate        : "РЅРё",
    textMeaningTranslate : "Р’С‹ РЅРµ РёСЃРїРѕР»СЊР·СѓРµС‚Рµ РЅРё РѕРґРёРЅ, С‡С‚РѕР±С‹ СЃРѕРµРґРёРЅРёС‚СЊ РґРІРµ РѕС‚СЂРёС†Р°С‚РµР»СЊРЅС‹Рµ РІРѕР·РјРѕР¶РЅРѕСЃС‚Рё",
    textExampleTranslate : "РќРё РїСѓС‚СЊ СЃР»РµРІР°, РЅРё РїСѓС‚СЊ СЃРїСЂР°РІР° РЅРµ РїСЂРёРІРµРґСѓС‚ РЅР°СЃ РґРѕРјРѕР№",
    id                   : 511
  }, {
    word                 : "otherwise",
    image                : "files/26_0512.jpg",
    audio                : "files/26_0512.mp3",
    audioMeaning         : "files/26_0512_meaning.mp3",
    audioExample         : "files/26_0512_example.mp3",
    textMeaning          : "Otherwise means in another way if you donвЂ™t do this",
    textExample          : "ItвЂ™s good to stay active; otherwise, youвЂ™ll gain weight",
    transcription        : "[КЊМЃГ°Й™rwГ iz]",
    wordTranslate        : "РІ РїСЂРѕС‚РёРІРЅРѕРј СЃР»СѓС‡Р°Рµ",
    textMeaningTranslate : "Р’ РїСЂРѕС‚РёРІРЅРѕРј СЃР»СѓС‡Р°Рµ РѕР·РЅР°С‡Р°РµС‚ РїРѕ-РґСЂСѓРіРѕРјСѓ, РµСЃР»Рё РІС‹ СЌС‚РѕРіРѕ РЅРµ СЃРґРµР»Р°РµС‚Рµ",
    textExampleTranslate : "РҐРѕСЂРѕС€Рѕ Р±С‹С‚СЊ Р°РєС‚РёРІРЅС‹Рј, РёРЅР°С‡Рµ С‚С‹ РЅР°Р±РµСЂРµС€СЊ РІРµСЃ",
    id                   : 512
  }, {
    word                 : "physical",
    image                : "files/26_0513.jpg",
    audio                : "files/26_0513.mp3",
    audioMeaning         : "files/26_0513_meaning.mp3",
    audioExample         : "files/26_0513_example.mp3",
    textMeaning          : "If something is physical, it is related to your body and not your mind",
    textExample          : "Biking is good for your physical health",
    transcription        : "[fГ­zikЙ™l]",
    wordTranslate        : "С„РёР·РёС‡РµСЃРєРёР№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ С„РёР·РёС‡РµСЃРєРѕРµ, СЌС‚Рѕ СЃРІСЏР·Р°РЅРѕ СЃ РІР°С€РёРј С‚РµР»РѕРј, Р° РЅРµ СЃ РІР°С€РёРј СѓРјРѕРј",
    textExampleTranslate : "Р•Р·РґР° РЅР° РІРµР»РѕСЃРёРїРµРґРµ РїРѕР»РµР·РЅР° РґР»СЏ РІР°С€РµРіРѕ С„РёР·РёС‡РµСЃРєРѕРіРѕ Р·РґРѕСЂРѕРІСЊСЏ",
    id                   : 513
  }, {
    word                 : "prove",
    image                : "files/26_0514.jpg",
    audio                : "files/26_0514.mp3",
    audioMeaning         : "files/26_0514_meaning.mp3",
    audioExample         : "files/26_0514_example.mp3",
    textMeaning          : "To prove something is to show that it is true",
    textExample          : "My teacher proved the answer on the board",
    transcription        : "[pruЛђv]",
    wordTranslate        : "РґРѕРєР°Р·Р°С‚СЊ",
    textMeaningTranslate : "Р”РѕРєР°Р·Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ РїРѕРєР°Р·Р°С‚СЊ, С‡С‚Рѕ СЌС‚Рѕ РїСЂР°РІРґР°",
    textExampleTranslate : "РњРѕР№ СѓС‡РёС‚РµР»СЊ РґРѕРєР°Р·Р°Р» РѕС‚РІРµС‚ РЅР° РґРѕСЃРєРµ",
    id                   : 514
  }, {
    word                 : "react",
    image                : "files/26_0515.jpg",
    audio                : "files/26_0515.mp3",
    audioMeaning         : "files/26_0515_meaning.mp3",
    audioExample         : "files/26_0515_example.mp3",
    textMeaning          : "To react is to respond by acting in a certain way",
    textExample          : "James reacted badly to the news",
    transcription        : "[riЛђЗЅkt]",
    wordTranslate        : "СЂРµР°РіРёСЂСѓСЋС‚",
    textMeaningTranslate : "Р РµР°РіРёСЂРѕРІР°С‚СЊ - Р·РЅР°С‡РёС‚ СЂРµР°РіРёСЂРѕРІР°С‚СЊ РѕРїСЂРµРґРµР»РµРЅРЅС‹Рј РѕР±СЂР°Р·РѕРј",
    textExampleTranslate : "Р”Р¶РµР№РјСЃ РїР»РѕС…Рѕ РѕС‚СЂРµР°РіРёСЂРѕРІР°Р» РЅР° РЅРѕРІРѕСЃС‚Рё",
    id                   : 515
  }, {
    word                 : "ride",
    image                : "files/26_0516.jpg",
    audio                : "files/26_0516.mp3",
    audioMeaning         : "files/26_0516_meaning.mp3",
    audioExample         : "files/26_0516_example.mp3",
    textMeaning          : "To ride something is to travel on it. You can ride an animal, a bike, etc",
    textExample          : "I will ride a roller coaster for the first time today",
    transcription        : "[raid]",
    wordTranslate        : "РµР·РґРёС‚СЊ",
    textMeaningTranslate : "Р•Р·РґРёС‚СЊ РЅР° С‡РµРј-С‚Рѕ - Р·РЅР°С‡РёС‚ РїСѓС‚РµС€РµСЃС‚РІРѕРІР°С‚СЊ РЅР° РЅРµРј. Р’С‹ РјРѕР¶РµС‚Рµ РµР·РґРёС‚СЊ РЅР° Р¶РёРІРѕС‚РЅРѕРј, РЅР° РІРµР»РѕСЃРёРїРµРґРµ Рё С‚. Р”",
    textExampleTranslate : "РЎРµРіРѕРґРЅСЏ СЏ РІРїРµСЂРІС‹Рµ Р±СѓРґСѓ РєР°С‚Р°С‚СЊСЃСЏ РЅР° Р°РјРµСЂРёРєР°РЅСЃРєРёС… РіРѕСЂРєР°С…",
    id                   : 516
  }, {
    word                 : "situated",
    image                : "files/26_0517.jpg",
    audio                : "files/26_0517.mp3",
    audioMeaning         : "files/26_0517_meaning.mp3",
    audioExample         : "files/26_0517_example.mp3",
    textMeaning          : "If something is situated somewhere, it is in that place",
    textExample          : "The whiteboard is situated between the two men",
    transcription        : "[sГ­К§uГЁitid]",
    wordTranslate        : "СЂР°СЃРїРѕР»РѕР¶РµРЅРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РЅР°С…РѕРґРёС‚СЃСЏ РіРґРµ-С‚Рѕ, РѕРЅРѕ РµСЃС‚СЊ РІ СЌС‚РѕРј РјРµСЃС‚Рµ",
    textExampleTranslate : "Р”РѕСЃРєР° СЂР°СЃРїРѕР»РѕР¶РµРЅР° РјРµР¶РґСѓ РґРІСѓРјСЏ РјСѓР¶С‡РёРЅР°РјРё",
    id                   : 517
  }, {
    word                 : "society",
    image                : "files/26_0518.jpg",
    audio                : "files/26_0518.mp3",
    audioMeaning         : "files/26_0518_meaning.mp3",
    audioExample         : "files/26_0518_example.mp3",
    textMeaning          : "Society is a group of people who interact and share a culture",
    textExample          : "Society expects people to be good and honest",
    transcription        : "[sЙ™sГЎiЙ™ti]",
    wordTranslate        : "РѕР±С‰РµСЃС‚РІРѕ",
    textMeaningTranslate : "РћР±С‰РµСЃС‚РІРѕ - СЌС‚Рѕ РіСЂСѓРїРїР° Р»СЋРґРµР№, РєРѕС‚РѕСЂС‹Рµ РІР·Р°РёРјРѕРґРµР№СЃС‚РІСѓСЋС‚ Рё СЂР°Р·РґРµР»СЏСЋС‚ РєСѓР»СЊС‚СѓСЂСѓ",
    textExampleTranslate : "РћР±С‰РµСЃС‚РІРѕ РѕР¶РёРґР°РµС‚, С‡С‚Рѕ Р»СЋРґРё Р±СѓРґСѓС‚ С…РѕСЂРѕС€РёРјРё Рё С‡РµСЃС‚РЅС‹РјРё",
    id                   : 518
  }, {
    word                 : "standard",
    image                : "files/26_0519.jpg",
    audio                : "files/26_0519.mp3",
    audioMeaning         : "files/26_0519_meaning.mp3",
    audioExample         : "files/26_0519_example.mp3",
    textMeaning          : "A standard is what people consider normal or good",
    textExample          : "This older model TV is below our storeвЂ™s standards",
    transcription        : "[stЗЅndЙ™rd]",
    wordTranslate        : "СЃС‚Р°РЅРґР°СЂС‚",
    textMeaningTranslate : "РЎС‚Р°РЅРґР°СЂС‚ - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ Р»СЋРґРё СЃС‡РёС‚Р°СЋС‚ РЅРѕСЂРјР°Р»СЊРЅС‹Рј РёР»Рё С…РѕСЂРѕС€РёРј",
    textExampleTranslate : "Р­С‚Р° СЃС‚Р°СЂР°СЏ РјРѕРґРµР»СЊ С‚РµР»РµРІРёР·РѕСЂР° РЅРµ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ СЃС‚Р°РЅРґР°СЂС‚Р°Рј РЅР°С€РµРіРѕ РјР°РіР°Р·РёРЅР°",
    id                   : 519
  }, {
    word                 : "suggest",
    image                : "files/26_0520.jpg",
    audio                : "files/26_0520.mp3",
    audioMeaning         : "files/26_0520_meaning.mp3",
    audioExample         : "files/26_0520_example.mp3",
    textMeaning          : "To suggest something means to give an idea or plan about it",
    textExample          : "He suggested that we go to see his boss",
    transcription        : "[sЙ™gdК’Г©st]",
    wordTranslate        : "РїСЂРµРґР»РѕР¶РёС‚СЊ",
    textMeaningTranslate : "РџСЂРµРґР»Р°РіР°С‚СЊ С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ РґР°РІР°С‚СЊ РёРґРµСЋ РёР»Рё РїР»Р°РЅ РѕР± СЌС‚РѕРј",
    textExampleTranslate : "РћРЅ РїСЂРµРґР»РѕР¶РёР» РїРѕР№С‚Рё Рє РµРіРѕ Р±РѕСЃСЃСѓ",
    id                   : 520
  }, {
    word                 : "actually",
    image                : "files/27_0521.jpg",
    audio                : "files/27_0521.mp3",
    audioMeaning         : "files/27_0521_meaning.mp3",
    audioExample         : "files/27_0521_example.mp3",
    textMeaning          : "Actually means in fact or really",
    textExample          : "My dad looks a little mean, but actually heвЂ™s very kind",
    transcription        : "[ЗЅktКѓuЙ™li]",
    wordTranslate        : "С„Р°РєС‚РёС‡РµСЃРєРё",
    textMeaningTranslate : "РќР° СЃР°РјРѕРј РґРµР»Рµ РѕР·РЅР°С‡Р°РµС‚ РЅР° СЃР°РјРѕРј РґРµР»Рµ РёР»Рё РЅР° СЃР°РјРѕРј РґРµР»Рµ",
    textExampleTranslate : "РњРѕР№ РїР°РїР° РІС‹РіР»СЏРґРёС‚ РЅРµРјРЅРѕРіРѕ СЃРєСѓРїС‹Рј, РЅРѕ РЅР° СЃР°РјРѕРј РґРµР»Рµ РѕРЅ РѕС‡РµРЅСЊ РґРѕР±СЂС‹Р№",
    id                   : 521
  }, {
    word                 : "bite",
    image                : "files/27_0522.jpg",
    audio                : "files/27_0522.mp3",
    audioMeaning         : "files/27_0522_meaning.mp3",
    audioExample         : "files/27_0522_example.mp3",
    textMeaning          : "Bite is the act of using your teeth to cut and tear into something",
    textExample          : "The boy took a big bite of his hamburger",
    transcription        : "[bait]",
    wordTranslate        : "СѓРєСѓСЃРёС‚СЊ",
    textMeaningTranslate : "РЈРєСѓСЃ - СЌС‚Рѕ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ РІР°С€РёС… Р·СѓР±РѕРІ, С‡С‚РѕР±С‹ С‡С‚Рѕ-С‚Рѕ РїРѕСЂРµР·Р°С‚СЊ",
    textExampleTranslate : "РњР°Р»СЊС‡РёРє РѕС‚РєСѓСЃРёР» РіР°РјР±СѓСЂРіРµСЂ",
    id                   : 522
  }, {
    word                 : "coast",
    image                : "files/27_0523.jpg",
    audio                : "files/27_0523.mp3",
    audioMeaning         : "files/27_0523_meaning.mp3",
    audioExample         : "files/27_0523_example.mp3",
    textMeaning          : "The coast is the land by an ocean",
    textExample          : "I stayed on the southern coast of Australia",
    transcription        : "[koust]",
    wordTranslate        : "РїРѕР±РµСЂРµР¶СЊРµ",
    textMeaningTranslate : "Р‘РµСЂРµРі - СЌС‚Рѕ Р·РµРјР»СЏ Сѓ РѕРєРµР°РЅР°",
    textExampleTranslate : "РЇ РѕСЃС‚Р°Р»СЃСЏ РЅР° СЋР¶РЅРѕРј РїРѕР±РµСЂРµР¶СЊРµ РђРІСЃС‚СЂР°Р»РёРё",
    id                   : 523
  }, {
    word                 : "deal",
    image                : "files/27_0524.jpg",
    audio                : "files/27_0524.mp3",
    audioMeaning         : "files/27_0524_meaning.mp3",
    audioExample         : "files/27_0524_example.mp3",
    textMeaning          : "A deal is an agreement that you have with another person",
    textExample          : "I made a deal with the other company to give us some money",
    transcription        : "[diЛђl]",
    wordTranslate        : "СЃРґРµР»РєР°",
    textMeaningTranslate : "РЎРґРµР»РєР° - СЌС‚Рѕ СЃРѕРіР»Р°С€РµРЅРёРµ, РєРѕС‚РѕСЂРѕРµ РІС‹ Р·Р°РєР»СЋС‡РёР»Рё СЃ РґСЂСѓРіРёРј С‡РµР»РѕРІРµРєРѕРј",
    textExampleTranslate : "РЇ Р·Р°РєР»СЋС‡РёР» СЃРґРµР»РєСѓ СЃ РґСЂСѓРіРѕР№ РєРѕРјРїР°РЅРёРµР№, С‡С‚РѕР±С‹ РґР°С‚СЊ РЅР°Рј РЅРµРјРЅРѕРіРѕ РґРµРЅРµРі",
    id                   : 524
  }, {
    word                 : "desert",
    image                : "files/27_0525.jpg",
    audio                : "files/27_0525.mp3",
    audioMeaning         : "files/27_0525_meaning.mp3",
    audioExample         : "files/27_0525_example.mp3",
    textMeaning          : "The desert is an area of land without many plants or water",
    textExample          : "Not many plants grow in the desert",
    transcription        : "[dГ©zЙ™rt]",
    wordTranslate        : "РїСѓСЃС‚С‹РЅСЏ",
    textMeaningTranslate : "РџСѓСЃС‚С‹РЅСЏ - СЌС‚Рѕ С‚РµСЂСЂРёС‚РѕСЂРёСЏ Р±РµР· РјРЅРѕРіРёС… СЂР°СЃС‚РµРЅРёР№ РёР»Рё РІРѕРґС‹",
    textExampleTranslate : "Р’ РїСѓСЃС‚С‹РЅРµ РјР°Р»Рѕ СЂР°СЃС‚РµРЅРёР№",
    id                   : 525
  }, {
    word                 : "effective",
    image                : "files/27_0526.jpg",
    audio                : "files/27_0526.mp3",
    audioMeaning         : "files/27_0526_meaning.mp3",
    audioExample         : "files/27_0526_example.mp3",
    textMeaning          : "If something is effective, it works well",
    textExample          : "Swimming is an effective way to stay healthy",
    transcription        : "[ifГ©ktiv]",
    wordTranslate        : "СЌС„С„РµРєС‚РёРІРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЌС„С„РµРєС‚РёРІРЅРѕ, СЌС‚Рѕ СЂР°Р±РѕС‚Р°РµС‚ С…РѕСЂРѕС€Рѕ",
    textExampleTranslate : "РџР»Р°РІР°РЅРёРµ - СЌС„С„РµРєС‚РёРІРЅС‹Р№ СЃРїРѕСЃРѕР± РѕСЃС‚Р°РІР°С‚СЊСЃСЏ Р·РґРѕСЂРѕРІС‹Рј",
    id                   : 526
  }, {
    word                 : "examine",
    image                : "files/27_0527.jpg",
    audio                : "files/27_0527.mp3",
    audioMeaning         : "files/27_0527_meaning.mp3",
    audioExample         : "files/27_0527_example.mp3",
    textMeaning          : "To examine something is to look at it carefully",
    textExample          : "The doctor examined my eyes today",
    transcription        : "[igzЗЅmin]",
    wordTranslate        : "РёСЃСЃР»РµРґРѕРІР°С‚СЊ",
    textMeaningTranslate : "РСЃСЃР»РµРґРѕРІР°С‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ РІРЅРёРјР°С‚РµР»СЊРЅРѕ СЃРјРѕС‚СЂРµС‚СЊ РЅР° СЌС‚Рѕ",
    textExampleTranslate : "Р”РѕРєС‚РѕСЂ РѕСЃРјРѕС‚СЂРµР» РјРѕРё РіР»Р°Р·Р° СЃРµРіРѕРґРЅСЏ",
    id                   : 527
  }, {
    word                 : "false",
    image                : "files/27_0528.jpg",
    audio                : "files/27_0528.mp3",
    audioMeaning         : "files/27_0528_meaning.mp3",
    audioExample         : "files/27_0528_example.mp3",
    textMeaning          : "If something is false, it is not correct",
    textExample          : "If you think the answer is false, press the red button",
    transcription        : "[fЙ”Лђls]",
    wordTranslate        : "Р»РѕР¶РЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЏРІР»СЏРµС‚СЃСЏ Р»РѕР¶РЅС‹Рј, СЌС‚Рѕ РЅРµ РїСЂР°РІРёР»СЊРЅРѕ",
    textExampleTranslate : "Р•СЃР»Рё РІС‹ РґСѓРјР°РµС‚Рµ, С‡С‚Рѕ РѕС‚РІРµС‚ Р»РѕР¶РЅС‹Р№, РЅР°Р¶РјРёС‚Рµ РєСЂР°СЃРЅСѓСЋ РєРЅРѕРїРєСѓ",
    id                   : 528
  }, {
    word                 : "figure out",
    image                : "files/27_0529.jpg",
    audio                : "files/27_0529.mp3",
    audioMeaning         : "files/27_0529_meaning.mp3",
    audioExample         : "files/27_0529_example.mp3",
    textMeaning          : "When you figure something out, you come to understand it and find an answer",
    textExample          : "I couldnвЂ™t figure out what he wanted me to do",
    transcription        : "[fГ­gjЙ™raut]",
    wordTranslate        : "РІС‹СЏСЃРЅСЏС‚СЊ",
    textMeaningTranslate : "РљРѕРіРґР° РІС‹ С‡С‚Рѕ-С‚Рѕ РїРѕРЅРёРјР°РµС‚Рµ  РІРЅРµ </ i>, РІС‹ РїРѕРЅРёРјР°РµС‚Рµ СЌС‚Рѕ Рё РЅР°С…РѕРґРёС‚Рµ РѕС‚РІРµС‚",
    textExampleTranslate : "РЇ РЅРµ РјРѕРі РїРѕРЅСЏС‚СЊ, С‡С‚Рѕ РѕРЅ РѕС‚ РјРµРЅСЏ С…РѕС‚РµР»",
    id                   : 529
  }, {
    word                 : "gift",
    image                : "files/27_0530.jpg",
    audio                : "files/27_0530.mp3",
    audioMeaning         : "files/27_0530_meaning.mp3",
    audioExample         : "files/27_0530_example.mp3",
    textMeaning          : "A gift is something you give someone",
    textExample          : "Dave received many gifts for Christmas",
    transcription        : "[gift]",
    wordTranslate        : "РїРѕРґР°СЂРѕРє",
    textMeaningTranslate : "РџРѕРґР°СЂРѕРє - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ С‚С‹ РґР°СЂРёС€СЊ РєРѕРјСѓ-С‚Рѕ",
    textExampleTranslate : "Р”РµР№РІ РїРѕР»СѓС‡РёР» РјРЅРѕРіРѕ РїРѕРґР°СЂРєРѕРІ РЅР° Р РѕР¶РґРµСЃС‚РІРѕ",
    id                   : 530
  }, {
    word                 : "hunger",
    image                : "files/27_0531.jpg",
    audio                : "files/27_0531.mp3",
    audioMeaning         : "files/27_0531_meaning.mp3",
    audioExample         : "files/27_0531_example.mp3",
    textMeaning          : "Hunger is the feeling that you get when you need to eat",
    textExample          : "After playing all day long, he was filled with hunger",
    transcription        : "[hКЊМЃЕ‹gЙ™r]",
    wordTranslate        : "РіРѕР»РѕРґ",
    textMeaningTranslate : "Р“РѕР»РѕРґ - СЌС‚Рѕ С‡СѓРІСЃС‚РІРѕ, РєРѕС‚РѕСЂРѕРµ С‚С‹ РёСЃРїС‹С‚С‹РІР°РµС€СЊ, РєРѕРіРґР° РЅСѓР¶РЅРѕ РµСЃС‚СЊ",
    textExampleTranslate : "РџРѕСЃР»Рµ С†РµР»РѕРіРѕ РґРЅСЏ РёРіСЂС‹ РѕРЅ Р±С‹Р» РїРѕР»РѕРЅ РіРѕР»РѕРґР°",
    id                   : 531
  }, {
    word                 : "imagine",
    image                : "files/27_0532.jpg",
    audio                : "files/27_0532.mp3",
    audioMeaning         : "files/27_0532_meaning.mp3",
    audioExample         : "files/27_0532_example.mp3",
    textMeaning          : "To imagine something is to think of it in your mind",
    textExample          : "Sally imagined herself winning lots of money",
    transcription        : "[imЗЅdК’in]",
    wordTranslate        : "РїСЂРµРґСЃС‚Р°РІРёС‚СЊ",
    textMeaningTranslate : "Р’РѕРѕР±СЂР°Р·РёС‚СЊ С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ РґСѓРјР°С‚СЊ РѕР± СЌС‚РѕРј РІ СЃРІРѕРµРј СѓРјРµ",
    textExampleTranslate : "РЎР°Р»Р»Рё РїСЂРµРґСЃС‚Р°РІРёР»Р°, С‡С‚Рѕ РІС‹РёРіСЂС‹РІР°РµС‚ РјРЅРѕРіРѕ РґРµРЅРµРі",
    id                   : 532
  }, {
    word                 : "journey",
    image                : "files/27_0533.jpg",
    audio                : "files/27_0533.mp3",
    audioMeaning         : "files/27_0533_meaning.mp3",
    audioExample         : "files/27_0533_example.mp3",
    textMeaning          : "A journey is a long trip",
    textExample          : "I went on a journey across the country with my parents",
    transcription        : "[dК’Й™МЃЛђrni]",
    wordTranslate        : "РїРѕРµР·РґРєР°",
    textMeaningTranslate : "РџСѓС‚РµС€РµСЃС‚РІРёРµ - СЌС‚Рѕ РґРѕР»РіРѕРµ РїСѓС‚РµС€РµСЃС‚РІРёРµ",
    textExampleTranslate : "РЇ РѕС‚РїСЂР°РІРёР»СЃСЏ РІ РїСѓС‚РµС€РµСЃС‚РІРёРµ РїРѕ СЃС‚СЂР°РЅРµ СЃ СЂРѕРґРёС‚РµР»СЏРјРё",
    id                   : 533
  }, {
    word                 : "puzzle",
    image                : "files/27_0534.jpg",
    audio                : "files/27_0534.mp3",
    audioMeaning         : "files/27_0534_meaning.mp3",
    audioExample         : "files/27_0534_example.mp3",
    textMeaning          : "A puzzle is something that is hard to understand",
    textExample          : "The question was a puzzle to him",
    transcription        : "[pКЊМЃzl]",
    wordTranslate        : "РіРѕР»РѕРІРѕР»РѕРјРєР°",
    textMeaningTranslate : "Р“РѕР»РѕРІРѕР»РѕРјРєР° - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ С‚СЂСѓРґРЅРѕ РїРѕРЅСЏС‚СЊ",
    textExampleTranslate : "Р’РѕРїСЂРѕСЃ Р±С‹Р» РґР»СЏ РЅРµРіРѕ Р·Р°РіР°РґРєРѕР№",
    id                   : 534
  }, {
    word                 : "quite",
    image                : "files/27_0535.jpg",
    audio                : "files/27_0535.mp3",
    audioMeaning         : "files/27_0535_meaning.mp3",
    audioExample         : "files/27_0535_example.mp3",
    textMeaning          : "Quite means that something is a certain way completely or very much",
    textExample          : "I think typing on a keyboard is quite easy",
    transcription        : "[kwait]",
    wordTranslate        : "РґРѕРІРѕР»СЊРЅРѕ",
    textMeaningTranslate : "Р’РїРѕР»РЅРµ РѕР·РЅР°С‡Р°РµС‚, С‡С‚Рѕ С‡С‚Рѕ-С‚Рѕ СЏРІР»СЏРµС‚СЃСЏ РѕРїСЂРµРґРµР»РµРЅРЅС‹Рј РѕР±СЂР°Р·РѕРј РїРѕР»РЅРѕСЃС‚СЊСЋ РёР»Рё РѕС‡РµРЅСЊ РјРЅРѕРіРѕ",
    textExampleTranslate : "РЇ РґСѓРјР°СЋ, С‡С‚Рѕ РЅР°Р±РёСЂР°С‚СЊ С‚РµРєСЃС‚ РЅР° РєР»Р°РІРёР°С‚СѓСЂРµ РґРѕРІРѕР»СЊРЅРѕ РїСЂРѕСЃС‚Рѕ",
    id                   : 535
  }, {
    word                 : "rather",
    image                : "files/27_0536.jpg",
    audio                : "files/27_0536.mp3",
    audioMeaning         : "files/27_0536_meaning.mp3",
    audioExample         : "files/27_0536_example.mp3",
    textMeaning          : "Rather is used when you want to do one thing but not the other",
    textExample          : "I would rather have the red one than the blue one",
    transcription        : "[rЗЅГ°Й™Лђr]",
    wordTranslate        : "СЃРєРѕСЂРµРµ",
    textMeaningTranslate : "РЎРєРѕСЂРµРµ РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ, РєРѕРіРґР° РІС‹ С…РѕС‚РёС‚Рµ СЃРґРµР»Р°С‚СЊ РѕРґРЅРѕ, Р° РЅРµ РґСЂСѓРіРѕРµ",
    textExampleTranslate : "РЇ Р±С‹ РїСЂРµРґРїРѕС‡РµР» РєСЂР°СЃРЅС‹Р№, С‡РµРј СЃРёРЅРёР№",
    id                   : 536
  }, {
    word                 : "specific",
    image                : "files/27_0537.jpg",
    audio                : "files/27_0537.mp3",
    audioMeaning         : "files/27_0537_meaning.mp3",
    audioExample         : "files/27_0537_example.mp3",
    textMeaning          : "If something is specific, it is precise or exact",
    textExample          : "Please choose a specific place on the map",
    transcription        : "[spisГ­fik]",
    wordTranslate        : "РєРѕРЅРєСЂРµС‚РЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РєРѕРЅРєСЂРµС‚РЅРѕРµ, С‚Рѕ С‚РѕС‡РЅРѕРµ РёР»Рё С‚РѕС‡РЅРѕРµ",
    textExampleTranslate : "РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РІС‹Р±РµСЂРёС‚Рµ РєРѕРЅРєСЂРµС‚РЅРѕРµ РјРµСЃС‚Рѕ РЅР° РєР°СЂС‚Рµ",
    id                   : 537
  }, {
    word                 : "spider",
    image                : "files/27_0538.jpg",
    audio                : "files/27_0538.mp3",
    audioMeaning         : "files/27_0538_meaning.mp3",
    audioExample         : "files/27_0538_example.mp3",
    textMeaning          : "A spider is a small creature with eight legs",
    textExample          : "Some adults have a fear of little creatures such as spiders",
    transcription        : "[spГЎidЙ™r]",
    wordTranslate        : "РїР°СѓРє",
    textMeaningTranslate : "РџР°СѓРє - РјР°Р»РµРЅСЊРєРѕРµ СЃСѓС‰РµСЃС‚РІРѕ СЃ РІРѕСЃРµРјСЊСЋ РЅРѕРіР°РјРё",
    textExampleTranslate : "РќРµРєРѕС‚РѕСЂС‹Рµ РІР·СЂРѕСЃР»С‹Рµ Р±РѕСЏС‚СЃСЏ РјР°Р»РµРЅСЊРєРёС… СЃСѓС‰РµСЃС‚РІ, С‚Р°РєРёС… РєР°Рє РїР°СѓРєРё",
    id                   : 538
  }, {
    word                 : "tour",
    image                : "files/27_0539.jpg",
    audio                : "files/27_0539.mp3",
    audioMeaning         : "files/27_0539_meaning.mp3",
    audioExample         : "files/27_0539_example.mp3",
    textMeaning          : "A tour is a short trip in which you see many sights",
    textExample          : "I took a tour of Asia and Europe",
    transcription        : "[tuЙ™Лђr]",
    wordTranslate        : "С‚СѓСЂ",
    textMeaningTranslate : "РўСѓСЂ - СЌС‚Рѕ РєРѕСЂРѕС‚РєРѕРµ РїСѓС‚РµС€РµСЃС‚РІРёРµ, РІ РєРѕС‚РѕСЂРѕРј РІС‹ СѓРІРёРґРёС‚Рµ РјРЅРѕРіРѕ РґРѕСЃС‚РѕРїСЂРёРјРµС‡Р°С‚РµР»СЊРЅРѕСЃС‚РµР№",
    textExampleTranslate : "РЇ РІР·СЏР» С‚СѓСЂ РїРѕ РђР·РёРё Рё Р•РІСЂРѕРїРµ",
    id                   : 539
  }, {
    word                 : "trip",
    image                : "files/27_0540.jpg",
    audio                : "files/27_0540.mp3",
    audioMeaning         : "files/27_0540_meaning.mp3",
    audioExample         : "files/27_0540_example.mp3",
    textMeaning          : "A trip is a journey to a certain place",
    textExample          : "Ken took a trip to the city yesterday",
    transcription        : "[trip]",
    wordTranslate        : "РїРѕРµР·РґРєР°",
    textMeaningTranslate : "РџРѕРµР·РґРєР° - СЌС‚Рѕ РїСѓС‚РµС€РµСЃС‚РІРёРµ РІ РѕРїСЂРµРґРµР»РµРЅРЅРѕРµ РјРµСЃС‚Рѕ",
    textExampleTranslate : "РљРµРЅ РѕС‚РїСЂР°РІРёР»СЃСЏ РІ РіРѕСЂРѕРґ РІС‡РµСЂР°",
    id                   : 540
  }, {
    word                 : "band",
    image                : "files/28_0541.jpg",
    audio                : "files/28_0541.mp3",
    audioMeaning         : "files/28_0541_meaning.mp3",
    audioExample         : "files/28_0541_example.mp3",
    textMeaning          : "A band is a group of people who play music",
    textExample          : "My brother is in a rock band",
    transcription        : "[bГ¦nd]",
    wordTranslate        : "РіСЂСѓРїРїР°",
    textMeaningTranslate : "Р“СЂСѓРїРїР° - СЌС‚Рѕ РіСЂСѓРїРїР° Р»СЋРґРµР№, РєРѕС‚РѕСЂС‹Рµ РёРіСЂР°СЋС‚ РјСѓР·С‹РєСѓ",
    textExampleTranslate : "РњРѕР№ Р±СЂР°С‚ РІ СЂРѕРє-РіСЂСѓРїРїРµ",
    id                   : 541
  }, {
    word                 : "barely",
    image                : "files/28_0542.jpg",
    audio                : "files/28_0542.mp3",
    audioMeaning         : "files/28_0542_meaning.mp3",
    audioExample         : "files/28_0542_example.mp3",
    textMeaning          : "Barely means by the smallest amount, almost not",
    textExample          : "I barely had enough money to pay for my bus ticket",
    transcription        : "[bЙ›МЃЙ™rli]",
    wordTranslate        : "РµРґРІР°",
    textMeaningTranslate : "Р•РґРІР° Р»Рё РЅРµ РЅР°РёРјРµРЅСЊС€РµРµ РєРѕР»РёС‡РµСЃС‚РІРѕ, РїРѕС‡С‚Рё РЅРµС‚",
    textExampleTranslate : "РњРЅРµ РµРґРІР° С…РІР°С‚РёР»Рѕ РґРµРЅРµРі, С‡С‚РѕР±С‹ РѕРїР»Р°С‚РёС‚СЊ Р±РёР»РµС‚ РЅР° Р°РІС‚РѕР±СѓСЃ",
    id                   : 542
  }, {
    word                 : "boring",
    image                : "files/28_0543.jpg",
    audio                : "files/28_0543.mp3",
    audioMeaning         : "files/28_0543_meaning.mp3",
    audioExample         : "files/28_0543_example.mp3",
    textMeaning          : "If something is boring, it is not fun",
    textExample          : "I think the Internet is boring",
    transcription        : "[bЙ”МЃЛђriЕ‹]",
    wordTranslate        : "СЃРєСѓС‡РЅРѕ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЃРєСѓС‡РЅРѕ, СЌС‚Рѕ РЅРµ РІРµСЃРµР»Рѕ",
    textExampleTranslate : "РЇ РґСѓРјР°СЋ, С‡С‚Рѕ РРЅС‚РµСЂРЅРµС‚ СЃРєСѓС‡РµРЅ",
    id                   : 543
  }, {
    word                 : "cancel",
    image                : "files/28_0544.jpg",
    audio                : "files/28_0544.mp3",
    audioMeaning         : "files/28_0544_meaning.mp3",
    audioExample         : "files/28_0544_example.mp3",
    textMeaning          : "To cancel means to decide that an event or a request will not happen",
    textExample          : "She canceled the rest of her plans because of the rain",
    transcription        : "[kЗЅnsЙ™l]",
    wordTranslate        : "РѕС‚РјРµРЅР°",
    textMeaningTranslate : "РћС‚РјРµРЅРёС‚СЊ РѕР·РЅР°С‡Р°РµС‚ СЂРµС€РёС‚СЊ, С‡С‚Рѕ СЃРѕР±С‹С‚РёРµ РёР»Рё Р·Р°РїСЂРѕСЃ РЅРµ РїСЂРѕРёР·РѕР№РґРµС‚",
    textExampleTranslate : "РћРЅР° РѕС‚РјРµРЅРёР»Р° РІСЃРµ СЃРІРѕРё РїР»Р°РЅС‹ РёР·-Р·Р° РґРѕР¶РґСЏ",
    id                   : 544
  }, {
    word                 : "driveway",
    image                : "files/28_0545.jpg",
    audio                : "files/28_0545.mp3",
    audioMeaning         : "files/28_0545_meaning.mp3",
    audioExample         : "files/28_0545_example.mp3",
    textMeaning          : "A driveway is a short private road that leads to a personвЂ™s home",
    textExample          : "The long driveway led us to their new house",
    transcription        : "[drГЎivwГЁi]",
    wordTranslate        : "РїРѕРґСЉРµР·РґРЅС‹Рµ РїСѓС‚Рё",
    textMeaningTranslate : "РџРѕРґСЉРµР·РґРЅР°СЏ РґРѕСЂРѕРіР° - СЌС‚Рѕ РєРѕСЂРѕС‚РєР°СЏ С‡Р°СЃС‚РЅР°СЏ РґРѕСЂРѕРіР°, РєРѕС‚РѕСЂР°СЏ РІРµРґРµС‚ Рє РґРѕРјСѓ С‡РµР»РѕРІРµРєР°",
    textExampleTranslate : "Р”РѕР»РіРёР№ РїСѓС‚СЊ РїСЂРёРІРµР» РЅР°СЃ Рє РёС… РЅРѕРІРѕРјСѓ РґРѕРјСѓ",
    id                   : 545
  }, {
    word                 : "garbage",
    image                : "files/28_0546.jpg",
    audio                : "files/28_0546.mp3",
    audioMeaning         : "files/28_0546_meaning.mp3",
    audioExample         : "files/28_0546_example.mp3",
    textMeaning          : "Garbage is waste material like unwanted or spoiled food, bottles, paper, etc",
    textExample          : "The boy cleaned up the garbage around his house",
    transcription        : "[gЙ‘МЃЛђrbidК’]",
    wordTranslate        : "РјСѓСЃРѕСЂ",
    textMeaningTranslate : "РњСѓСЃРѕСЂ - СЌС‚Рѕ РѕС‚С…РѕРґС‹, С‚Р°РєРёРµ РєР°Рє РЅРµР¶РµР»Р°С‚РµР»СЊРЅС‹Рµ РёР»Рё РёСЃРїРѕСЂС‡РµРЅРЅС‹Рµ РїСЂРѕРґСѓРєС‚С‹, Р±СѓС‚С‹Р»РєРё, Р±СѓРјР°РіР° Рё С‚. Р”",
    textExampleTranslate : "РњР°Р»СЊС‡РёРє СѓР±СЂР°Р» РјСѓСЃРѕСЂ РІРѕРєСЂСѓРі СЃРІРѕРµРіРѕ РґРѕРјР°",
    id                   : 546
  }, {
    word                 : "instrument",
    image                : "files/28_0547.jpg",
    audio                : "files/28_0547.mp3",
    audioMeaning         : "files/28_0547_meaning.mp3",
    audioExample         : "files/28_0547_example.mp3",
    textMeaning          : "An instrument is something designed to do a certain task like play music",
    textExample          : "My favorite musical instrument is the piano",
    transcription        : "[Г­nstrЙ™mЙ™nt]",
    wordTranslate        : "РёРЅСЃС‚СЂСѓРјРµРЅС‚",
    textMeaningTranslate : "РРЅСЃС‚СЂСѓРјРµРЅС‚ - СЌС‚Рѕ РЅРµС‡С‚Рѕ, РїСЂРµРґРЅР°Р·РЅР°С‡РµРЅРЅРѕРµ РґР»СЏ РІС‹РїРѕР»РЅРµРЅРёСЏ РѕРїСЂРµРґРµР»РµРЅРЅРѕР№ Р·Р°РґР°С‡Рё, РЅР°РїСЂРёРјРµСЂ, РґР»СЏ РІРѕСЃРїСЂРѕРёР·РІРµРґРµРЅРёСЏ РјСѓР·С‹РєРё",
    textExampleTranslate : "РњРѕР№ Р»СЋР±РёРјС‹Р№ РјСѓР·С‹РєР°Р»СЊРЅС‹Р№ РёРЅСЃС‚СЂСѓРјРµРЅС‚ - РїРёР°РЅРёРЅРѕ",
    id                   : 547
  }, {
    word                 : "list",
    image                : "files/28_0548.jpg",
    audio                : "files/28_0548.mp3",
    audioMeaning         : "files/28_0548_meaning.mp3",
    audioExample         : "files/28_0548_example.mp3",
    textMeaning          : "A list is a record of information printed with an item on each line",
    textExample          : "My mom makes a list of groceries to buy",
    transcription        : "[list]",
    wordTranslate        : "СЃРїРёСЃРѕРє",
    textMeaningTranslate : "РЎРїРёСЃРѕРє - СЌС‚Рѕ Р·Р°РїРёСЃСЊ РёРЅС„РѕСЂРјР°С†РёРё, РЅР°РїРµС‡Р°С‚Р°РЅРЅРѕР№ СЃ СЌР»РµРјРµРЅС‚РѕРј РІ РєР°Р¶РґРѕР№ СЃС‚СЂРѕРєРµ",
    textExampleTranslate : "РњРѕСЏ РјР°РјР° СЃРѕСЃС‚Р°РІР»СЏРµС‚ СЃРїРёСЃРѕРє РїРѕРєСѓРїРѕРє",
    id                   : 548
  }, {
    word                 : "magic",
    image                : "files/28_0549.jpg",
    audio                : "files/28_0549.mp3",
    audioMeaning         : "files/28_0549_meaning.mp3",
    audioExample         : "files/28_0549_example.mp3",
    textMeaning          : "Magic is the power to do impossible things",
    textExample          : "The magician used magic to pull a rabbit out of his hat",
    transcription        : "[mЗЅdК’ik]",
    wordTranslate        : "РјР°РіРёСЏ",
    textMeaningTranslate : "РњР°РіРёСЏ - СЌС‚Рѕ СЃРёР»Р° РґРµР»Р°С‚СЊ РЅРµРІРѕР·РјРѕР¶РЅС‹Рµ РІРµС‰Рё",
    textExampleTranslate : "РњР°Рі РёСЃРїРѕР»СЊР·РѕРІР°Р» РјР°РіРёСЋ, С‡С‚РѕР±С‹ РІС‹С‚Р°С‰РёС‚СЊ РєСЂРѕР»РёРєР° РёР· С€Р»СЏРїС‹",
    id                   : 549
  }, {
    word                 : "message",
    image                : "files/28_0550.jpg",
    audio                : "files/28_0550.mp3",
    audioMeaning         : "files/28_0550_meaning.mp3",
    audioExample         : "files/28_0550_example.mp3",
    textMeaning          : "A message is a set of words that you send to someone",
    textExample          : "I left a message for you in the envelope",
    transcription        : "[mГ©sidК’]",
    wordTranslate        : "СЃРѕРѕР±С‰РµРЅРёРµ",
    textMeaningTranslate : "РЎРѕРѕР±С‰РµРЅРёРµ - СЌС‚Рѕ РЅР°Р±РѕСЂ СЃР»РѕРІ, РєРѕС‚РѕСЂС‹Рµ РІС‹ РѕС‚РїСЂР°РІР»СЏРµС‚Рµ РєРѕРјСѓ-С‚Рѕ",
    textExampleTranslate : "РЇ РѕСЃС‚Р°РІРёР» С‚РµР±Рµ СЃРѕРѕР±С‰РµРЅРёРµ РІ РєРѕРЅРІРµСЂС‚Рµ",
    id                   : 550
  }, {
    word                 : "notice",
    image                : "files/28_0551.jpg",
    audio                : "files/28_0551.mp3",
    audioMeaning         : "files/28_0551_meaning.mp3",
    audioExample         : "files/28_0551_example.mp3",
    textMeaning          : "To notice something is to see it for the first time",
    textExample          : "Did you notice the view?",
    transcription        : "[nГіutis]",
    wordTranslate        : "СѓРІРµРґРѕРјР»РµРЅРёРµ",
    textMeaningTranslate : "Р—Р°РјРµС‚РёС‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ СѓРІРёРґРµС‚СЊ СЌС‚Рѕ РІРїРµСЂРІС‹Рµ",
    textExampleTranslate : "Р’С‹ Р·Р°РјРµС‚РёР»Рё РІРёРґ?",
    id                   : 551
  }, {
    word                 : "own",
    image                : "files/28_0552.jpg",
    audio                : "files/28_0552.mp3",
    audioMeaning         : "files/28_0552_meaning.mp3",
    audioExample         : "files/28_0552_example.mp3",
    textMeaning          : "To own something means to have it. That thing belongs to you",
    textExample          : "My grandfather owns that house",
    transcription        : "[oun]",
    wordTranslate        : "СЃРІРѕСЏ",
    textMeaningTranslate : "Р’Р»Р°РґРµС‚СЊ С‡РµРј-С‚Рѕ - Р·РЅР°С‡РёС‚ РёРјРµС‚СЊ СЌС‚Рѕ. Р­С‚Р° РІРµС‰СЊ РїСЂРёРЅР°РґР»РµР¶РёС‚ С‚РµР±Рµ",
    textExampleTranslate : "РњРѕР№ РґРµРґСѓС€РєР° РІР»Р°РґРµРµС‚ СЌС‚РёРј РґРѕРјРѕРј",
    id                   : 552
  }, {
    word                 : "predict",
    image                : "files/28_0553.jpg",
    audio                : "files/28_0553.mp3",
    audioMeaning         : "files/28_0553_meaning.mp3",
    audioExample         : "files/28_0553_example.mp3",
    textMeaning          : "To predict something is to say that it will happen",
    textExample          : "She predicted that I would get married next year",
    transcription        : "[pridГ­kt]",
    wordTranslate        : "РїСЂРµРґСЃРєР°Р·Р°С‚СЊ",
    textMeaningTranslate : "РџСЂРµРґСЃРєР°Р·Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ СЃРєР°Р·Р°С‚СЊ, С‡С‚Рѕ СЌС‚Рѕ РїСЂРѕРёР·РѕР№РґРµС‚",
    textExampleTranslate : "РћРЅР° РїСЂРµРґСЃРєР°Р·Р°Р»Р°, С‡С‚Рѕ СЏ РІС‹Р№РґСѓ Р·Р°РјСѓР¶ РІ СЃР»РµРґСѓСЋС‰РµРј РіРѕРґСѓ",
    id                   : 553
  }, {
    word                 : "professor",
    image                : "files/28_0554.jpg",
    audio                : "files/28_0554.mp3",
    audioMeaning         : "files/28_0554_meaning.mp3",
    audioExample         : "files/28_0554_example.mp3",
    textMeaning          : "A professor is a person who teaches in college",
    textExample          : "MikeвЂ™s science professor knows a lot about physics",
    transcription        : "[prЙ™fГ©sЙ™r]",
    wordTranslate        : "РїСЂРѕС„РµСЃСЃРѕСЂ",
    textMeaningTranslate : "РџСЂРѕС„РµСЃСЃРѕСЂ - СЌС‚Рѕ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ РїСЂРµРїРѕРґР°РµС‚ РІ РєРѕР»Р»РµРґР¶Рµ",
    textExampleTranslate : "РџСЂРѕС„РµСЃСЃРѕСЂ РњР°Р№РєР° РјРЅРѕРіРѕ Р·РЅР°РµС‚ Рѕ С„РёР·РёРєРµ",
    id                   : 554
  }, {
    word                 : "rush",
    image                : "files/28_0555.jpg",
    audio                : "files/28_0555.mp3",
    audioMeaning         : "files/28_0555_meaning.mp3",
    audioExample         : "files/28_0555_example.mp3",
    textMeaning          : "To rush is to go somewhere or do something very quickly",
    textExample          : "Nancy rushed to finish her homework",
    transcription        : "[rКЊКѓ]",
    wordTranslate        : "РїРѕСЂС‹РІ",
    textMeaningTranslate : "РЎРїРµС€РёС‚СЊ - Р·РЅР°С‡РёС‚ РёРґС‚Рё РєСѓРґР°-С‚Рѕ РёР»Рё РґРµР»Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ РѕС‡РµРЅСЊ Р±С‹СЃС‚СЂРѕ",
    textExampleTranslate : "РќСЌРЅСЃРё РїРѕСЃРїРµС€РёР»Р° Р·Р°РєРѕРЅС‡РёС‚СЊ РґРѕРјР°С€РЅРµРµ Р·Р°РґР°РЅРёРµ",
    id                   : 555
  }, {
    word                 : "schedule",
    image                : "files/28_0556.jpg",
    audio                : "files/28_0556.mp3",
    audioMeaning         : "files/28_0556_meaning.mp3",
    audioExample         : "files/28_0556_example.mp3",
    textMeaning          : "A schedule is a plan that tells you when to do things",
    textExample          : "What is your class schedule for today?",
    transcription        : "[skГ©dК’uЛђl]",
    wordTranslate        : "РіСЂР°С„РёРє",
    textMeaningTranslate : "Р Р°СЃРїРёСЃР°РЅРёРµ - СЌС‚Рѕ РїР»Р°РЅ, РєРѕС‚РѕСЂС‹Р№ РіРѕРІРѕСЂРёС‚ РІР°Рј, РєРѕРіРґР° РЅСѓР¶РЅРѕ С‡С‚Рѕ-С‚Рѕ РґРµР»Р°С‚СЊ",
    textExampleTranslate : "РљР°РєРѕРµ Сѓ С‚РµР±СЏ СЂР°СЃРїРёСЃР°РЅРёРµ Р·Р°РЅСЏС‚РёР№ РЅР° СЃРµРіРѕРґРЅСЏ?",
    id                   : 556
  }, {
    word                 : "share",
    image                : "files/28_0557.jpg",
    audio                : "files/28_0557.mp3",
    audioMeaning         : "files/28_0557_meaning.mp3",
    audioExample         : "files/28_0557_example.mp3",
    textMeaning          : "To share something is to give some of it to another person",
    textExample          : "Jimmy shared his apple with me",
    transcription        : "[КѓЙ›Й™Лђr]",
    wordTranslate        : "РґРѕР»СЏ",
    textMeaningTranslate : "РџРѕРґРµР»РёС‚СЊСЃСЏ С‡РµРј-С‚Рѕ - СЌС‚Рѕ РїРµСЂРµРґР°С‚СЊ С‡С‚Рѕ-С‚Рѕ РґСЂСѓРіРѕРјСѓ",
    textExampleTranslate : "Р”Р¶РёРјРјРё РїРѕРґРµР»РёР»СЃСЏ СЃРѕ РјРЅРѕР№ СЃРІРѕРёРј СЏР±Р»РѕРєРѕРј",
    id                   : 557
  }, {
    word                 : "stage",
    image                : "files/28_0558.jpg",
    audio                : "files/28_0558.mp3",
    audioMeaning         : "files/28_0558_meaning.mp3",
    audioExample         : "files/28_0558_example.mp3",
    textMeaning          : "A stage is a place where actors or musicians act or sing",
    textExample          : "A large screen was on the stage",
    transcription        : "[steidК’]",
    wordTranslate        : "СЃС†РµРЅР°",
    textMeaningTranslate : "РЎС†РµРЅР° - СЌС‚Рѕ РјРµСЃС‚Рѕ, РіРґРµ Р°РєС‚РµСЂС‹ РёР»Рё РјСѓР·С‹РєР°РЅС‚С‹ РёРіСЂР°СЋС‚ РёР»Рё РїРѕСЋС‚",
    textExampleTranslate : "Р‘РѕР»СЊС€РѕР№ СЌРєСЂР°РЅ Р±С‹Р» РЅР° СЃС†РµРЅРµ",
    id                   : 558
  }, {
    word                 : "storm",
    image                : "files/28_0559.jpg",
    audio                : "files/28_0559.mp3",
    audioMeaning         : "files/28_0559_meaning.mp3",
    audioExample         : "files/28_0559_example.mp3",
    textMeaning          : "A storm is very bad weather. There is a lot of rain or snow",
    textExample          : "Did that storm wake you up last night?",
    transcription        : "[stЙ”Лђrm]",
    wordTranslate        : "Р±СѓСЂСЏ",
    textMeaningTranslate : "РЁС‚РѕСЂРј РѕС‡РµРЅСЊ РїР»РѕС…Р°СЏ РїРѕРіРѕРґР°. РўР°Рј РјРЅРѕРіРѕ РґРѕР¶РґСЏ РёР»Рё СЃРЅРµРіР°",
    textExampleTranslate : "Р­С‚РѕС‚ С€С‚РѕСЂРј СЂР°Р·Р±СѓРґРёР» С‚РµР±СЏ РїСЂРѕС€Р»РѕР№ РЅРѕС‡СЊСЋ?",
    id                   : 559
  }, {
    word                 : "within",
    image                : "files/28_0560.jpg",
    audio                : "files/28_0560.mp3",
    audioMeaning         : "files/28_0560_meaning.mp3",
    audioExample         : "files/28_0560_example.mp3",
    textMeaning          : "You use within to say that something is inside another thing",
    textExample          : "Within the box, there was a pizza",
    transcription        : "[wiГ°Г­n]",
    wordTranslate        : "РІ РїСЂРµРґРµР»Р°С…",
    textMeaningTranslate : "Р’С‹ РёСЃРїРѕР»СЊР·СѓРµС‚Рµ РІРЅСѓС‚СЂРё, С‡С‚РѕР±С‹ СЃРєР°Р·Р°С‚СЊ, С‡С‚Рѕ С‡С‚Рѕ-С‚Рѕ РЅР°С…РѕРґРёС‚СЃСЏ РІРЅСѓС‚СЂРё РґСЂСѓРіРѕРіРѕ",
    textExampleTranslate : "Р’РЅСѓС‚СЂРё РєРѕСЂРѕР±РєРё Р±С‹Р»Р° РїРёС†С†Р°",
    id                   : 560
  }, {
    word                 : "burden",
    image                : "files/29_0561.jpg",
    audio                : "files/29_0561.mp3",
    audioMeaning         : "files/29_0561_meaning.mp3",
    audioExample         : "files/29_0561_example.mp3",
    textMeaning          : "A burden is a serious or difficult responsibility",
    textExample          : "Children who do not behave are a burden to their parents",
    transcription        : "[bЙ™МЃЛђrdn]",
    wordTranslate        : "Р±СЂРµРјСЏ",
    textMeaningTranslate : "Р‘СЂРµРјСЏ - СЌС‚Рѕ СЃРµСЂСЊРµР·РЅР°СЏ РёР»Рё С‚СЂСѓРґРЅР°СЏ РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚СЊ",
    textExampleTranslate : "Р”РµС‚Рё, РєРѕС‚РѕСЂС‹Рµ РЅРµ РІРµРґСѓС‚ СЃРµР±СЏ, СЏРІР»СЏСЋС‚СЃСЏ РѕР±СѓР·РѕР№ РґР»СЏ РёС… СЂРѕРґРёС‚РµР»РµР№",
    id                   : 561
  }, {
    word                 : "compromise",
    image                : "files/29_0562.jpg",
    audio                : "files/29_0562.mp3",
    audioMeaning         : "files/29_0562_meaning.mp3",
    audioExample         : "files/29_0562_example.mp3",
    textMeaning          : "To compromise is to agree to something that is not exactly what you want",
    textExample          : "We both compromised about the game we decided to play",
    transcription        : "[kЙ‘МЃmprЙ™mГ iz]",
    wordTranslate        : "РєРѕРјРїСЂРѕРјРёСЃСЃ",
    textMeaningTranslate : "РРґС‚Рё РЅР° РєРѕРјРїСЂРѕРјРёСЃСЃ - Р·РЅР°С‡РёС‚ СЃРѕРіР»Р°С€Р°С‚СЊСЃСЏ РЅР° С‚Рѕ, С‡С‚Рѕ РЅРµ СЃРѕРІСЃРµРј С‚Рѕ, С‡С‚Рѕ РІС‹ С…РѕС‚РёС‚Рµ",
    textExampleTranslate : "РњС‹ РѕР±Р° РїРѕС€Р»Рё РЅР° РєРѕРјРїСЂРѕРјРёСЃСЃ РїРѕ РїРѕРІРѕРґСѓ РёРіСЂС‹, РІ РєРѕС‚РѕСЂСѓСЋ СЂРµС€РёР»Рё РёРіСЂР°С‚СЊ",
    id                   : 562
  }, {
    word                 : "craft",
    image                : "files/29_0563.jpg",
    audio                : "files/29_0563.mp3",
    audioMeaning         : "files/29_0563_meaning.mp3",
    audioExample         : "files/29_0563_example.mp3",
    textMeaning          : "To craft something is to make it using skill",
    textExample          : "She crafted the bookcase out of solid pine wood and then painted it",
    transcription        : "[krГ¦ft]",
    wordTranslate        : "СЂРµРјРµСЃР»Рѕ",
    textMeaningTranslate : "РЎРґРµР»Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ - Р·РЅР°С‡РёС‚ СЃРґРµР»Р°С‚СЊ СЌС‚Рѕ, РёСЃРїРѕР»СЊР·СѓСЏ СѓРјРµРЅРёРµ",
    textExampleTranslate : "РћРЅР° РёР·РіРѕС‚РѕРІРёР»Р° РєРЅРёР¶РЅС‹Р№ С€РєР°С„ РёР· РјР°СЃСЃРёРІР° СЃРѕСЃРЅС‹, Р° Р·Р°С‚РµРј РїРѕРєСЂР°СЃРёР»Р° РµРіРѕ",
    id                   : 563
  }, {
    word                 : "dive",
    image                : "files/29_0564.jpg",
    audio                : "files/29_0564.mp3",
    audioMeaning         : "files/29_0564_meaning.mp3",
    audioExample         : "files/29_0564_example.mp3",
    textMeaning          : "When you dive into water, you go down head first into the water",
    textExample          : "I like sky-diving from an airplane",
    transcription        : "[daiv]",
    wordTranslate        : "РїРѕРіСЂСѓР¶РµРЅРёРµ",
    textMeaningTranslate : "РљРѕРіРґР° РІС‹ РїРѕРіСЂСѓР¶Р°РµС‚РµСЃСЊ РІ РІРѕРґСѓ, РІС‹ СЃРїСѓСЃРєР°РµС‚РµСЃСЊ РіРѕР»РѕРІРѕР№ РІРЅРёР· РІ РІРѕРґСѓ",
    textExampleTranslate : "РњРЅРµ РЅСЂР°РІРёС‚СЃСЏ СЃРєР°Р№РґР°Р№РІРёРЅРі СЃ СЃР°РјРѕР»РµС‚Р°",
    id                   : 564
  }, {
    word                 : "fragile",
    image                : "files/29_0565.jpg",
    audio                : "files/29_0565.mp3",
    audioMeaning         : "files/29_0565_meaning.mp3",
    audioExample         : "files/29_0565_example.mp3",
    textMeaning          : "When people or things are fragile, they are not strong and can be damaged easily",
    textExample          : "The fragile glassware was carefully packed into boxes",
    transcription        : "[frЗЅdК’Й™l]",
    wordTranslate        : "С…СЂСѓРїРєРёР№",
    textMeaningTranslate : "РљРѕРіРґР° Р»СЋРґРё РёР»Рё РІРµС‰Рё С…СЂСѓРїРєРёРµ, РѕРЅРё РЅРµ СЃРёР»СЊРЅС‹ Рё РјРѕРіСѓС‚ Р±С‹С‚СЊ Р»РµРіРєРѕ РїРѕРІСЂРµР¶РґРµРЅС‹",
    textExampleTranslate : "РҐСЂСѓРїРєР°СЏ СЃС‚РµРєР»СЏРЅРЅР°СЏ РїРѕСЃСѓРґР° Р±С‹Р»Р° С‚С‰Р°С‚РµР»СЊРЅРѕ СѓРїР°РєРѕРІР°РЅР° РІ РєРѕСЂРѕР±РєРё",
    id                   : 565
  }, {
    word                 : "half",
    image                : "files/29_0566.jpg",
    audio                : "files/29_0566.mp3",
    audioMeaning         : "files/29_0566_meaning.mp3",
    audioExample         : "files/29_0566_example.mp3",
    textMeaning          : "If you cut something into two parts that are the same size, you cut it half",
    textExample          : "The machine can divide the book in half",
    transcription        : "[hГ¦f]",
    wordTranslate        : "РїРѕР»РѕРІРёРЅР°",
    textMeaningTranslate : "Р•СЃР»Рё РІС‹ СЂР°Р·СЂРµР·Р°РµС‚Рµ С‡С‚Рѕ-С‚Рѕ РЅР° РґРІРµ С‡Р°СЃС‚Рё РѕРґРёРЅР°РєРѕРІРѕРіРѕ СЂР°Р·РјРµСЂР°, РІС‹ СЂР°Р·СЂРµР·Р°РµС‚Рµ СЌС‚Рѕ РїРѕРїРѕР»Р°Рј",
    textExampleTranslate : "РњР°С€РёРЅР° РјРѕР¶РµС‚ СЂР°Р·РґРµР»РёС‚СЊ РєРЅРёРіСѓ РїРѕРїРѕР»Р°Рј",
    id                   : 566
  }, {
    word                 : "innocence",
    image                : "files/29_0567.jpg",
    audio                : "files/29_0567.mp3",
    audioMeaning         : "files/29_0567_meaning.mp3",
    audioExample         : "files/29_0567_example.mp3",
    textMeaning          : "Innocence is a lack of experience of difficult or complex things in life",
    textExample          : "Everyone who met her found her innocence to be charming",
    transcription        : "[Г­nЙ™sЙ™ns]",
    wordTranslate        : "РЅРµРІРёРЅРЅРѕСЃС‚СЊ",
    textMeaningTranslate : "РќРµРІРёРЅРЅРѕСЃС‚СЊ - СЌС‚Рѕ РЅРµРґРѕСЃС‚Р°С‚РѕРє РѕРїС‹С‚Р° СЃР»РѕР¶РЅС‹С… РёР»Рё СЃР»РѕР¶РЅС‹С… РІРµС‰РµР№ РІ Р¶РёР·РЅРё",
    textExampleTranslate : "Р’СЃРµ, РєС‚Рѕ РІСЃС‚СЂРµС‡Р°Р» РµРµ, РЅР°С…РѕРґРёР»Рё РµРµ РЅРµРІРёРЅРЅРѕСЃС‚СЊ РѕС‡Р°СЂРѕРІР°С‚РµР»СЊРЅРѕР№",
    id                   : 567
  }, {
    word                 : "lead",
    image                : "files/29_0568.jpg",
    audio                : "files/29_0568.mp3",
    audioMeaning         : "files/29_0568_meaning.mp3",
    audioExample         : "files/29_0568_example.mp3",
    textMeaning          : "When you lead something, you go first and it follows you",
    textExample          : "I will lead you to the right place",
    transcription        : "[liЛђd]",
    wordTranslate        : "РІРµСЃС‚Рё",
    textMeaningTranslate : "РљРѕРіРґР° С‚С‹ РІРµРґРµС€СЊ С‡С‚Рѕ-С‚Рѕ, С‚С‹ РёРґРµС€СЊ РїРµСЂРІС‹Рј, Рё СЌС‚Рѕ СЃР»РµРґСѓРµС‚ Р·Р° С‚РѕР±РѕР№",
    textExampleTranslate : "РЇ РїСЂРёРІРµРґСѓ РІР°СЃ РІ РЅСѓР¶РЅРѕРµ РјРµСЃС‚Рѕ",
    id                   : 568
  }, {
    word                 : "meeting",
    image                : "files/29_0569.jpg",
    audio                : "files/29_0569.mp3",
    audioMeaning         : "files/29_0569_meaning.mp3",
    audioExample         : "files/29_0569_example.mp3",
    textMeaning          : "When you have a meeting, you are with other people",
    textExample          : "We have lots of meetings at our school to plan what to do",
    transcription        : "[mГ­ЛђtiЕ‹]",
    wordTranslate        : "РІСЃС‚СЂРµС‡Р°",
    textMeaningTranslate : "РљРѕРіРґР° Сѓ С‚РµР±СЏ РІСЃС‚СЂРµС‡Р°, С‚С‹ СЃ РґСЂСѓРіРёРјРё Р»СЋРґСЊРјРё",
    textExampleTranslate : "РЈ РЅР°СЃ РІ С€РєРѕР»Рµ РјРЅРѕРіРѕ РІСЃС‚СЂРµС‡, С‡С‚РѕР±С‹ СЃРїР»Р°РЅРёСЂРѕРІР°С‚СЊ, С‡С‚Рѕ РґРµР»Р°С‚СЊ",
    id                   : 569
  }, {
    word                 : "merge",
    image                : "files/29_0570.jpg",
    audio                : "files/29_0570.mp3",
    audioMeaning         : "files/29_0570_meaning.mp3",
    audioExample         : "files/29_0570_example.mp3",
    textMeaning          : "To merge two things is to combine them into one whole thing",
    textExample          : "The storm clouds merged into one large menacing cloud that filled the sky",
    transcription        : "[mЙ™ЛђrdК’]",
    wordTranslate        : "СЃР»РёСЏРЅРёРµ",
    textMeaningTranslate : "РћР±СЉРµРґРёРЅРёС‚СЊ РґРІРµ РІРµС‰Рё - Р·РЅР°С‡РёС‚ РѕР±СЉРµРґРёРЅРёС‚СЊ РёС… РІ РѕРґРЅРѕ С†РµР»РѕРµ",
    textExampleTranslate : "Р“СЂРѕР·РѕРІС‹Рµ С‚СѓС‡Рё СЃР»РёР»РёСЃСЊ РІ РѕРґРЅРѕ Р±РѕР»СЊС€РѕРµ РіСЂРѕР·РЅРѕРµ РѕР±Р»Р°РєРѕ, РєРѕС‚РѕСЂРѕРµ Р·Р°РїРѕР»РЅРёР»Рѕ РЅРµР±Рѕ",
    id                   : 570
  }, {
    word                 : "moderate",
    image                : "files/29_0571.jpg",
    audio                : "files/29_0571.mp3",
    audioMeaning         : "files/29_0571_meaning.mp3",
    audioExample         : "files/29_0571_example.mp3",
    textMeaning          : "When something is moderate, it is not too big or too small in size or amount",
    textExample          : "It takes a moderate amount of patience to be around small children all day",
    transcription        : "[mЙ‘МЃdЙ™rГЁit]",
    wordTranslate        : "СѓРјРµСЂРµРЅРЅС‹Р№",
    textMeaningTranslate : "РљРѕРіРґР° С‡С‚Рѕ-С‚Рѕ СѓРјРµСЂРµРЅРЅРѕРµ, РѕРЅРѕ РЅРµ СЃР»РёС€РєРѕРј Р±РѕР»СЊС€РѕРµ РёР»Рё СЃР»РёС€РєРѕРј РјР°Р»РµРЅСЊРєРѕРµ РїРѕ СЂР°Р·РјРµСЂСѓ РёР»Рё РєРѕР»РёС‡РµСЃС‚РІСѓ",
    textExampleTranslate : "РўСЂРµР±СѓРµС‚СЃСЏ СѓРјРµСЂРµРЅРЅРѕРµ РєРѕР»РёС‡РµСЃС‚РІРѕ С‚РµСЂРїРµРЅРёСЏ, С‡С‚РѕР±С‹ Р±С‹С‚СЊ СЂСЏРґРѕРј СЃ РјР°Р»РµРЅСЊРєРёРјРё РґРµС‚СЊРјРё СЃСЊ РЅСЊ",
    id                   : 571
  }, {
    word                 : "overwhelm",
    image                : "files/29_0572.jpg",
    audio                : "files/29_0572.mp3",
    audioMeaning         : "files/29_0572_meaning.mp3",
    audioExample         : "files/29_0572_example.mp3",
    textMeaning          : "To overwhelm is to exist in such a large amount that someone cannot deal with it",
    textExample          : "The amount of homework her teacher assigned has overwhelmed her",
    transcription        : "[ГІuvЙ™rhwГ©lm]",
    wordTranslate        : "РЅР°РїР°РґР°РµС‚",
    textMeaningTranslate : "РџРѕРґР°РІРёС‚СЊ Р·РЅР°С‡РёС‚ СЃСѓС‰РµСЃС‚РІРѕРІР°С‚СЊ РІ С‚Р°РєРѕРј Р±РѕР»СЊС€РѕРј РєРѕР»РёС‡РµСЃС‚РІРµ, С‡С‚Рѕ РєС‚Рѕ-С‚Рѕ РЅРµ РјРѕР¶РµС‚ СЃРїСЂР°РІРёС‚СЊСЃСЏ СЃ СЌС‚РёРј",
    textExampleTranslate : "РљРѕР»РёС‡РµСЃС‚РІРѕ РґРѕРјР°С€РЅРёС… Р·Р°РґР°РЅРёР№, РєРѕС‚РѕСЂС‹Рµ РЅР°Р·РЅР°С‡РёР» РµРµ СѓС‡РёС‚РµР»СЊ, РѕС€РµР»РѕРјРёР»Рѕ РµРµ",
    id                   : 572
  }, {
    word                 : "payment",
    image                : "files/29_0573.jpg",
    audio                : "files/29_0573.mp3",
    audioMeaning         : "files/29_0573_meaning.mp3",
    audioExample         : "files/29_0573_example.mp3",
    textMeaning          : "When you make a payment, you give someone some money for what you get",
    textExample          : "I made the last payment on my car yesterday. Now I am really the owner",
    transcription        : "[pГ©imЙ™nt]",
    wordTranslate        : "РѕРїР»Р°С‚Р°",
    textMeaningTranslate : "РљРѕРіРґР° РІС‹ РґРµР»Р°РµС‚Рµ РїР»Р°С‚РµР¶, РІС‹ РґР°РµС‚Рµ РєРѕРјСѓ-С‚Рѕ РЅРµРјРЅРѕРіРѕ РґРµРЅРµРі Р·Р° С‚Рѕ, С‡С‚Рѕ РІС‹ РїРѕР»СѓС‡Р°РµС‚Рµ",
    textExampleTranslate : "РЇ СЃРґРµР»Р°Р» РїРѕСЃР»РµРґРЅРёР№ РїР»Р°С‚РµР¶ РЅР° РјРѕРµР№ РјР°С€РёРЅРµ РІС‡РµСЂР°. РўРµРїРµСЂСЊ СЏ РґРµР№СЃС‚РІРёС‚РµР»СЊРЅРѕ РІР»Р°РґРµР»РµС†",
    id                   : 573
  }, {
    word                 : "perception",
    image                : "files/29_0574.jpg",
    audio                : "files/29_0574.mp3",
    audioMeaning         : "files/29_0574_meaning.mp3",
    audioExample         : "files/29_0574_example.mp3",
    textMeaning          : "A perception of a situation is a way of thinking about it or understanding it",
    textExample          : "Since he couldnвЂ™t see, his perception of life was much different than mine",
    transcription        : "[pЙ™rsГ©pКѓЙ™n]",
    wordTranslate        : "РІРѕСЃРїСЂРёСЏС‚РёРµ",
    textMeaningTranslate : "Р’РѕСЃРїСЂРёСЏС‚РёРµ СЃРёС‚СѓР°С†РёРё - СЌС‚Рѕ СЃРїРѕСЃРѕР± РґСѓРјР°С‚СЊ РѕР± СЌС‚РѕРј РёР»Рё РїРѕРЅРёРјР°С‚СЊ РµРіРѕ",
    textExampleTranslate : "РўР°Рє РєР°Рє РѕРЅ РЅРµ РјРѕРі РІРёРґРµС‚СЊ, РµРіРѕ РІРѕСЃРїСЂРёСЏС‚РёРµ Р¶РёР·РЅРё СЃРёР»СЊРЅРѕ РѕС‚Р»РёС‡Р°Р»РѕСЃСЊ РѕС‚ РјРѕРµРіРѕ",
    id                   : 574
  }, {
    word                 : "settle",
    image                : "files/29_0575.jpg",
    audio                : "files/29_0575.mp3",
    audioMeaning         : "files/29_0575_meaning.mp3",
    audioExample         : "files/29_0575_example.mp3",
    textMeaning          : "When you settle something, you reach an agreement",
    textExample          : "We settled the argument by looking up the answer on the web",
    transcription        : "[sГ©tl]",
    wordTranslate        : "СЃРµР»РёС‚СЊСЃСЏ",
    textMeaningTranslate : "РљРѕРіРґР° РІС‹ С‡С‚Рѕ-С‚Рѕ СЂРµС€Р°РµС‚Рµ, РІС‹ РґРѕСЃС‚РёРіР°РµС‚Рµ СЃРѕРіР»Р°С€РµРЅРёСЏ",
    textExampleTranslate : "РњС‹ СѓР»Р°РґРёР»Рё СЃРїРѕСЂ, РїРѕСЃРјРѕС‚СЂРµРІ РѕС‚РІРµС‚ РІ РРЅС‚РµСЂРЅРµС‚Рµ",
    id                   : 575
  }, {
    word                 : "shiver",
    image                : "files/29_0576.jpg",
    audio                : "files/29_0576.mp3",
    audioMeaning         : "files/29_0576_meaning.mp3",
    audioExample         : "files/29_0576_example.mp3",
    textMeaning          : "A shiver is a shaking movement the body makes when someone is cold or scared",
    textExample          : "I got shivers on my way home because it was so cold",
    transcription        : "[КѓГ­vЙ™Лђr]",
    wordTranslate        : "РјСѓСЂР°С€РєРё",
    textMeaningTranslate : "Р”СЂРѕР¶СЊ - СЌС‚Рѕ РґСЂРѕР¶Р°С‰РµРµ РґРІРёР¶РµРЅРёРµ, РєРѕС‚РѕСЂРѕРµ РґРµР»Р°РµС‚ С‚РµР»Рѕ, РєРѕРіРґР° РєС‚Рѕ-С‚Рѕ С…РѕР»РѕРґРµРЅ РёР»Рё РЅР°РїСѓРіР°РЅ",
    textExampleTranslate : "РџРѕ РґРѕСЂРѕРіРµ РґРѕРјРѕР№ Сѓ РјРµРЅСЏ РЅР°С‡Р°Р»Р°СЃСЊ РґСЂРѕР¶СЊ, РїРѕС‚РѕРјСѓ С‡С‚Рѕ Р±С‹Р»Рѕ С‚Р°Рє С…РѕР»РѕРґРЅРѕ",
    id                   : 576
  }, {
    word                 : "sociable",
    image                : "files/29_0577.jpg",
    audio                : "files/29_0577.mp3",
    audioMeaning         : "files/29_0577_meaning.mp3",
    audioExample         : "files/29_0577_example.mp3",
    textMeaning          : "When someone is sociable, they are friendly",
    textExample          : "Many of my good friends are sociable, but I am shy",
    transcription        : "[sГіuКѓЙ™bl]",
    wordTranslate        : "РѕР±С‰РёС‚РµР»СЊРЅС‹Р№",
    textMeaningTranslate : "РљРѕРіРґР° РєС‚Рѕ-С‚Рѕ РѕР±С‰РёС‚РµР»СЊРЅС‹Р№, РѕРЅ РґСЂСѓР¶РµР»СЋР±РЅС‹Р№",
    textExampleTranslate : "РњРЅРѕРіРёРµ РёР· РјРѕРёС… С…РѕСЂРѕС€РёС… РґСЂСѓР·РµР№ РѕР±С‰РёС‚РµР»СЊРЅС‹, РЅРѕ СЏ СЃС‚РµСЃРЅСЏСЋСЃСЊ",
    id                   : 577
  }, {
    word                 : "speed",
    image                : "files/29_0578.jpg",
    audio                : "files/29_0578.mp3",
    audioMeaning         : "files/29_0578_meaning.mp3",
    audioExample         : "files/29_0578_example.mp3",
    textMeaning          : "When you speed, you go very fast",
    textExample          : "Speeding is the cause of most car accidents",
    transcription        : "[spiЛђd]",
    wordTranslate        : "СЃРєРѕСЂРѕСЃС‚СЊ",
    textMeaningTranslate : "РљРѕРіРґР° С‚С‹ СѓСЃРєРѕСЂСЏРµС€СЊСЃСЏ, С‚С‹ РµРґРµС€СЊ РѕС‡РµРЅСЊ Р±С‹СЃС‚СЂРѕ",
    textExampleTranslate : "РЈСЃРєРѕСЂРµРЅРёРµ СЏРІР»СЏРµС‚СЃСЏ РїСЂРёС‡РёРЅРѕР№ Р±РѕР»СЊС€РёРЅСЃС‚РІР° Р°РІС‚РѕРјРѕР±РёР»СЊРЅС‹С… Р°РІР°СЂРёР№",
    id                   : 578
  }, {
    word                 : "talkative",
    image                : "files/29_0579.jpg",
    audio                : "files/29_0579.mp3",
    audioMeaning         : "files/29_0579_meaning.mp3",
    audioExample         : "files/29_0579_example.mp3",
    textMeaning          : "When someone is talkative, he or she talks a lot",
    textExample          : "My aunt is very talkative whenever she is on the phone",
    transcription        : "[tЙ”МЃЛђkЙ™tiv]",
    wordTranslate        : "СЂР°Р·РіРѕРІРѕСЂС‡РёРІС‹",
    textMeaningTranslate : "РљРѕРіРґР° РєС‚Рѕ-С‚Рѕ Р±РѕР»С‚Р»РёРІ, РѕРЅ РёР»Рё РѕРЅР° РјРЅРѕРіРѕ РіРѕРІРѕСЂРёС‚",
    textExampleTranslate : "РњРѕСЏ С‚РµС‚СЏ РѕС‡РµРЅСЊ СЂР°Р·РіРѕРІРѕСЂС‡РёРІР°, РєРѕРіРґР° СЂР°Р·РіРѕРІР°СЂРёРІР°РµС‚ РїРѕ С‚РµР»РµС„РѕРЅСѓ",
    id                   : 579
  }, {
    word                 : "usual",
    image                : "files/29_0580.jpg",
    audio                : "files/29_0580.mp3",
    audioMeaning         : "files/29_0580_meaning.mp3",
    audioExample         : "files/29_0580_example.mp3",
    textMeaning          : "When something is usual, it is what we expect",
    textExample          : "It was just the usual people who came",
    transcription        : "[jГєЛђК’uЙ™l]",
    wordTranslate        : "РѕР±С‹С‡РЅС‹Р№",
    textMeaningTranslate : "РљРѕРіРґР° С‡С‚Рѕ-С‚Рѕ РѕР±С‹С‡РЅРѕРµ, СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ РјС‹ РѕР¶РёРґР°РµРј",
    textExampleTranslate : "Р­С‚Рѕ Р±С‹Р»Рё РїСЂРѕСЃС‚Рѕ РѕР±С‹С‡РЅС‹Рµ Р»СЋРґРё, РєРѕС‚РѕСЂС‹Рµ РїСЂРёС€Р»Рё",
    id                   : 580
  }, {
    word                 : "above",
    image                : "files/30_0581.jpg",
    audio                : "files/30_0581.mp3",
    audioMeaning         : "files/30_0581_meaning.mp3",
    audioExample         : "files/30_0581_example.mp3",
    textMeaning          : "If something is above, it is at a higher level than something else",
    textExample          : "He straightened the sign that was above the crowd",
    transcription        : "[Й™bКЊМЃv]",
    wordTranslate        : "РЅР°Рґ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РІС‹С€Рµ, СЌС‚Рѕ РЅР° Р±РѕР»РµРµ РІС‹СЃРѕРєРѕРј СѓСЂРѕРІРЅРµ, С‡РµРј С‡С‚Рѕ-С‚Рѕ РґСЂСѓРіРѕРµ",
    textExampleTranslate : "РћРЅ РїРѕРїСЂР°РІРёР» Р·РЅР°Рє, РєРѕС‚РѕСЂС‹Р№ Р±С‹Р» РЅР°Рґ С‚РѕР»РїРѕР№",
    id                   : 581
  }, {
    word                 : "ahead",
    image                : "files/30_0582.jpg",
    audio                : "files/30_0582.mp3",
    audioMeaning         : "files/30_0582_meaning.mp3",
    audioExample         : "files/30_0582_example.mp3",
    textMeaning          : "If something is ahead of something else, it is in front of it",
    textExample          : "The blue car drove on ahead of us",
    transcription        : "[Й™hГ©d]",
    wordTranslate        : "РІРїРµСЂРµРґ",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РІРїРµСЂРµРґРё С‡РµРіРѕ-С‚Рѕ РґСЂСѓРіРѕРіРѕ, С‚Рѕ РѕРЅРѕ РІРїРµСЂРµРґРё",
    textExampleTranslate : "РЎРёРЅСЏСЏ РјР°С€РёРЅР° РµС…Р°Р»Р° РІРїРµСЂРµРґРё РЅР°СЃ",
    id                   : 582
  }, {
    word                 : "amount",
    image                : "files/30_0583.jpg",
    audio                : "files/30_0583.mp3",
    audioMeaning         : "files/30_0583_meaning.mp3",
    audioExample         : "files/30_0583_example.mp3",
    textMeaning          : "An amount is how much there is of something",
    textExample          : "Can I use my card to pay for the entire amount?",
    transcription        : "[Й™mГЎunt]",
    wordTranslate        : "РєРѕР»РёС‡РµСЃС‚РІРѕ",
    textMeaningTranslate : "РљРѕР»РёС‡РµСЃС‚РІРѕ - СЌС‚Рѕ С‚Рѕ, СЃРєРѕР»СЊРєРѕ РµСЃС‚СЊ С‡РµРіРѕ-С‚Рѕ",
    textExampleTranslate : "РњРѕРіСѓ Р»Рё СЏ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ СЃРІРѕСЋ РєР°СЂС‚Сѓ РґР»СЏ РѕРїР»Р°С‚С‹ РІСЃРµР№ СЃСѓРјРјС‹?",
    id                   : 583
  }, {
    word                 : "belief",
    image                : "files/30_0584.jpg",
    audio                : "files/30_0584.mp3",
    audioMeaning         : "files/30_0584_meaning.mp3",
    audioExample         : "files/30_0584_example.mp3",
    textMeaning          : "A belief is a strong feeling that something is correct or true",
    textExample          : "A preacher or priest should have a strong belief in God",
    transcription        : "[bilГ­Лђf]",
    wordTranslate        : "РІРµСЂР°",
    textMeaningTranslate : "Р’РµСЂР° - СЌС‚Рѕ СЃРёР»СЊРЅРѕРµ С‡СѓРІСЃС‚РІРѕ, С‡С‚Рѕ С‡С‚Рѕ-С‚Рѕ РїСЂР°РІРёР»СЊРЅРѕ РёР»Рё РІРµСЂРЅРѕ",
    textExampleTranslate : "РџСЂРѕРїРѕРІРµРґРЅРёРє РёР»Рё СЃРІСЏС‰РµРЅРЅРёРє РґРѕР»Р¶РЅС‹ РёРјРµС‚СЊ С‚РІРµСЂРґСѓСЋ РІРµСЂСѓ РІ Р‘РѕРіР°",
    id                   : 584
  }, {
    word                 : "center",
    image                : "files/30_0585.jpg",
    audio                : "files/30_0585.mp3",
    audioMeaning         : "files/30_0585_meaning.mp3",
    audioExample         : "files/30_0585_example.mp3",
    textMeaning          : "The center of something is the middle of it",
    textExample          : "The center of a dart board is the most important spot",
    transcription        : "[sГ©ntЙ™r]",
    wordTranslate        : "С†РµРЅС‚СЂ",
    textMeaningTranslate : "Р¦РµРЅС‚СЂ С‡РµРіРѕ-С‚Рѕ - СЌС‚Рѕ СЃРµСЂРµРґРёРЅР°",
    textExampleTranslate : "Р¦РµРЅС‚СЂ РґРѕСЃРєРё РґР»СЏ РґР°СЂС‚СЃР° - СЃР°РјРѕРµ РІР°Р¶РЅРѕРµ РјРµСЃС‚Рѕ",
    id                   : 585
  }, {
    word                 : "common",
    image                : "files/30_0586.jpg",
    audio                : "files/30_0586.mp3",
    audioMeaning         : "files/30_0586_meaning.mp3",
    audioExample         : "files/30_0586_example.mp3",
    textMeaning          : "If something is common, it happens often or there is much of it",
    textExample          : "It is common for snow to fall in the winter",
    transcription        : "[kЙ‘МЃmЙ™n]",
    wordTranslate        : "РѕР±С‰РёР№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РѕР±С‰РµРµ, СЌС‚Рѕ СЃР»СѓС‡Р°РµС‚СЃСЏ С‡Р°СЃС‚Рѕ РёР»Рё РµРіРѕ РјРЅРѕРіРѕ",
    textExampleTranslate : "Р—РёРјРѕР№ РІС‹РїР°РґР°РµС‚ СЃРЅРµРі",
    id                   : 586
  }, {
    word                 : "cost",
    image                : "files/30_0587.jpg",
    audio                : "files/30_0587.mp3",
    audioMeaning         : "files/30_0587_meaning.mp3",
    audioExample         : "files/30_0587_example.mp3",
    textMeaning          : "To cost is to require payment",
    textExample          : "These designer shoes cost more than the regular ones",
    transcription        : "[kЙ”Лђst]",
    wordTranslate        : "СЃС‚РѕРёРјРѕСЃС‚СЊ",
    textMeaningTranslate : "Рљ СЃС‚РѕРёРјРѕСЃС‚Рё - Р·РЅР°С‡РёС‚ С‚СЂРµР±РѕРІР°С‚СЊ РѕРїР»Р°С‚Сѓ",
    textExampleTranslate : "Р­С‚Рё РґРёР·Р°Р№РЅРµСЂСЃРєРёРµ С‚СѓС„Р»Рё СЃС‚РѕСЏС‚ РґРѕСЂРѕР¶Рµ РѕР±С‹С‡РЅС‹С…",
    id                   : 587
  }, {
    word                 : "demonstrate",
    image                : "files/30_0588.jpg",
    audio                : "files/30_0588.mp3",
    audioMeaning         : "files/30_0588_meaning.mp3",
    audioExample         : "files/30_0588_example.mp3",
    textMeaning          : "To demonstrate something is to show how it is done",
    textExample          : "She demonstrated her plan to her co-workers",
    transcription        : "[dГ©mЙ™nstrГЁit]",
    wordTranslate        : "РїСЂРѕРґРµРјРѕРЅСЃС‚СЂРёСЂРѕРІР°С‚СЊ",
    textMeaningTranslate : "РџСЂРѕРґРµРјРѕРЅСЃС‚СЂРёСЂРѕРІР°С‚СЊ С‡С‚Рѕ-С‚Рѕ Р·РЅР°С‡РёС‚ РїРѕРєР°Р·Р°С‚СЊ, РєР°Рє СЌС‚Рѕ РґРµР»Р°РµС‚СЃСЏ",
    textExampleTranslate : "РћРЅР° РїСЂРѕРґРµРјРѕРЅСЃС‚СЂРёСЂРѕРІР°Р»Р° СЃРІРѕР№ РїР»Р°РЅ СЃРІРѕРёРј СЃРѕС‚СЂСѓРґРЅРёРєР°Рј",
    id                   : 588
  }, {
    word                 : "different",
    image                : "files/30_0589.jpg",
    audio                : "files/30_0589.mp3",
    audioMeaning         : "files/30_0589_meaning.mp3",
    audioExample         : "files/30_0589_example.mp3",
    textMeaning          : "Different describes someone or something that is not the same as others",
    textExample          : "Each of my sisters has a different hair style",
    transcription        : "[dГ­fЙ™rЙ™nt]",
    wordTranslate        : "РґСЂСѓРіРѕР№",
    textMeaningTranslate : "Р Р°Р·РЅРѕРµ РѕРїРёСЃС‹РІР°РµС‚ РєРѕРіРѕ-С‚Рѕ РёР»Рё С‡С‚Рѕ-С‚Рѕ, С‡С‚Рѕ РЅРµ СЃРѕРІРїР°РґР°РµС‚ СЃ РґСЂСѓРіРёРјРё",
    textExampleTranslate : "РЈ РєР°Р¶РґРѕР№ РёР· РјРѕРёС… СЃРµСЃС‚РµСЂ СЂР°Р·РЅС‹Рµ РїСЂРёС‡РµСЃРєРё",
    id                   : 589
  }, {
    word                 : "evidence",
    image                : "files/30_0590.jpg",
    audio                : "files/30_0590.mp3",
    audioMeaning         : "files/30_0590_meaning.mp3",
    audioExample         : "files/30_0590_example.mp3",
    textMeaning          : "Evidence is a fact or thing that you use to prove something",
    textExample          : "He used the pictures as evidence that UFOs are real",
    transcription        : "[Г©vidЙ™ns]",
    wordTranslate        : "РґРѕРєР°Р·Р°С‚РµР»СЊСЃС‚РІРѕ",
    textMeaningTranslate : "Р”РѕРєР°Р·Р°С‚РµР»СЊСЃС‚РІР° - СЌС‚Рѕ С„Р°РєС‚ РёР»Рё РІРµС‰СЊ, РєРѕС‚РѕСЂСѓСЋ РІС‹ РёСЃРїРѕР»СЊР·СѓРµС‚Рµ, С‡С‚РѕР±С‹ РґРѕРєР°Р·Р°С‚СЊ С‡С‚Рѕ-С‚Рѕ",
    textExampleTranslate : "РћРЅ РёСЃРїРѕР»СЊР·РѕРІР°Р» С„РѕС‚РѕРіСЂР°С„РёРё РІ РєР°С‡РµСЃС‚РІРµ РґРѕРєР°Р·Р°С‚РµР»СЊСЃС‚РІР° С‚РѕРіРѕ, С‡С‚Рѕ РќР›Рћ СЂРµР°Р»СЊРЅС‹",
    id                   : 590
  }, {
    word                 : "honesty",
    image                : "files/30_0591.jpg",
    audio                : "files/30_0591.mp3",
    audioMeaning         : "files/30_0591_meaning.mp3",
    audioExample         : "files/30_0591_example.mp3",
    textMeaning          : "Honesty means the quality of being truthful or honest",
    textExample          : "A courtroom should be a place of honesty",
    transcription        : "[Й‘МЃnisti]",
    wordTranslate        : "С‡РµСЃС‚РЅРѕСЃС‚СЊ",
    textMeaningTranslate : "Р§РµСЃС‚РЅРѕСЃС‚СЊ РѕР·РЅР°С‡Р°РµС‚ РєР°С‡РµСЃС‚РІРѕ Р±С‹С‚СЊ РїСЂР°РІРґРёРІС‹Рј РёР»Рё С‡РµСЃС‚РЅС‹Рј",
    textExampleTranslate : "Р—Р°Р» СЃСѓРґР° РґРѕР»Р¶РµРЅ Р±С‹С‚СЊ РјРµСЃС‚РѕРј С‡РµСЃС‚РЅРѕСЃС‚Рё",
    id                   : 591
  }, {
    word                 : "idiom",
    image                : "files/30_0592.jpg",
    audio                : "files/30_0592.mp3",
    audioMeaning         : "files/30_0592_meaning.mp3",
    audioExample         : "files/30_0592_example.mp3",
    textMeaning          : "An idiom is a phrase with a meaning different from its words",
    textExample          : "The idiom вЂњwhen pigs flyвЂќ means that something will never happen",
    transcription        : "[Г­diЙ™m]",
    wordTranslate        : "РёРґРёРѕРјР°",
    textMeaningTranslate : "РРґРёРѕРјР° - СЌС‚Рѕ С„СЂР°Р·Р°, Р·РЅР°С‡РµРЅРёРµ РєРѕС‚РѕСЂРѕР№ РѕС‚Р»РёС‡Р°РµС‚СЃСЏ РѕС‚ РµРµ СЃР»РѕРІ",
    textExampleTranslate : "РРґРёРѕРјР° В«РєРѕРіРґР° СЃРІРёРЅСЊРё Р»РµС‚Р°СЋС‚В» РѕР·РЅР°С‡Р°РµС‚, С‡С‚Рѕ С‡С‚Рѕ-С‚Рѕ РЅРёРєРѕРіРґР° РЅРµ СЃР»СѓС‡РёС‚СЃСЏ",
    id                   : 592
  }, {
    word                 : "independent",
    image                : "files/30_0593.jpg",
    audio                : "files/30_0593.mp3",
    audioMeaning         : "files/30_0593_meaning.mp3",
    audioExample         : "files/30_0593_example.mp3",
    textMeaning          : "If something is independent, it is not controlled by something else",
    textExample          : "She chose to live an independent life in the country",
    transcription        : "[Г¬ndipГ©ndЙ™nt]",
    wordTranslate        : "РЅРµР·Р°РІРёСЃРёРјС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ СЏРІР»СЏРµС‚СЃСЏ РЅРµР·Р°РІРёСЃРёРјС‹Рј, РѕРЅРѕ РЅРµ РєРѕРЅС‚СЂРѕР»РёСЂСѓРµС‚СЃСЏ С‡РµРј-С‚Рѕ РґСЂСѓРіРёРј",
    textExampleTranslate : "РћРЅР° СЂРµС€РёР»Р° Р¶РёС‚СЊ РЅРµР·Р°РІРёСЃРёРјРѕР№ Р¶РёР·РЅСЊСЋ РІ СЃС‚СЂР°РЅРµ",
    id                   : 593
  }, {
    word                 : "inside",
    image                : "files/30_0594.jpg",
    audio                : "files/30_0594.mp3",
    audioMeaning         : "files/30_0594_meaning.mp3",
    audioExample         : "files/30_0594_example.mp3",
    textMeaning          : "Inside means the inner part, space or side of something",
    textExample          : "The inside of the box was empty",
    transcription        : "[Г­nsГЎid]",
    wordTranslate        : "РІРЅСѓС‚СЂРё",
    textMeaningTranslate : "Р’РЅСѓС‚СЂРё РѕР·РЅР°С‡Р°РµС‚ РІРЅСѓС‚СЂРµРЅРЅСЋСЋ С‡Р°СЃС‚СЊ, РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕ РёР»Рё СЃС‚РѕСЂРѕРЅСѓ С‡РµРіРѕ-Р»РёР±Рѕ",
    textExampleTranslate : "Р’РЅСѓС‚СЂРё РєРѕСЂРѕР±РєРё Р±С‹Р»Рѕ РїСѓСЃС‚Рѕ",
    id                   : 594
  }, {
    word                 : "jail",
    image                : "files/30_0595.jpg",
    audio                : "files/30_0595.mp3",
    audioMeaning         : "files/30_0595_meaning.mp3",
    audioExample         : "files/30_0595_example.mp3",
    textMeaning          : "A jail is a place to keep bad people",
    textExample          : "He was sent to jail for taking other peopleвЂ™s cars",
    transcription        : "[dК’eil]",
    wordTranslate        : "С‚СЋСЂСЊРјР°",
    textMeaningTranslate : "РўСЋСЂСЊРјР° - СЌС‚Рѕ РјРµСЃС‚Рѕ, РіРґРµ СЃРѕРґРµСЂР¶Р°С‚СЃСЏ РїР»РѕС…РёРµ Р»СЋРґРё",
    textExampleTranslate : "Р•РіРѕ РїРѕСЃР°РґРёР»Рё РІ С‚СЋСЂСЊРјСѓ Р·Р° С‚Рѕ, С‡С‚Рѕ РѕРЅ Р±СЂР°Р» С‡СѓР¶РёРµ РјР°С€РёРЅС‹",
    id                   : 595
  }, {
    word                 : "master",
    image                : "files/30_0596.jpg",
    audio                : "files/30_0596.mp3",
    audioMeaning         : "files/30_0596_meaning.mp3",
    audioExample         : "files/30_0596_example.mp3",
    textMeaning          : "A master is a person who is very good at something",
    textExample          : "My brother is a master of taekwondo",
    transcription        : "[mЗЅstЙ™Лђr]",
    wordTranslate        : "РјР°СЃС‚РµСЂ",
    textMeaningTranslate : "РњР°СЃС‚РµСЂ - СЌС‚Рѕ С‡РµР»РѕРІРµРє, РєРѕС‚РѕСЂС‹Р№ РѕС‡РµРЅСЊ С…РѕСЂРѕС€ РІ С‡РµРј-С‚Рѕ",
    textExampleTranslate : "РњРѕР№ Р±СЂР°С‚ РјР°СЃС‚РµСЂ С‚С…СЌРєРІРѕРЅРґРѕ",
    id                   : 596
  }, {
    word                 : "memory",
    image                : "files/30_0597.jpg",
    audio                : "files/30_0597.mp3",
    audioMeaning         : "files/30_0597_meaning.mp3",
    audioExample         : "files/30_0597_example.mp3",
    textMeaning          : "A memory is something you remember",
    textExample          : "The memory of my first time in the city will always be the best",
    transcription        : "[mГ©mЙ™ri]",
    wordTranslate        : "РїР°РјСЏС‚СЊ",
    textMeaningTranslate : "РџР°РјСЏС‚СЊ - СЌС‚Рѕ С‚Рѕ, С‡С‚Рѕ С‚С‹ РїРѕРјРЅРёС€СЊ",
    textExampleTranslate : "РџР°РјСЏС‚СЊ Рѕ РјРѕРµРј РїРµСЂРІРѕРј РїСЂРµР±С‹РІР°РЅРёРё РІ РіРѕСЂРѕРґРµ РІСЃРµРіРґР° Р±СѓРґРµС‚ Р»СѓС‡С€РµР№",
    id                   : 597
  }, {
    word                 : "pocket",
    image                : "files/30_0598.jpg",
    audio                : "files/30_0598.mp3",
    audioMeaning         : "files/30_0598_meaning.mp3",
    audioExample         : "files/30_0598_example.mp3",
    textMeaning          : "A pocket is a part of your clothing where you can keep things",
    textExample          : "She always had her hands in her pockets",
    transcription        : "[pО¬kit]",
    wordTranslate        : "РєР°СЂРјР°РЅ",
    textMeaningTranslate : "РљР°СЂРјР°РЅ - СЌС‚Рѕ С‡Р°СЃС‚СЊ РІР°С€РµР№ РѕРґРµР¶РґС‹, РіРґРµ РІС‹ РјРѕР¶РµС‚Рµ С…СЂР°РЅРёС‚СЊ РІРµС‰Рё",
    textExampleTranslate : "РћРЅР° РІСЃРµРіРґР° РґРµСЂР¶Р°Р»Р° СЂСѓРєРё РІ РєР°СЂРјР°РЅР°С…",
    id                   : 598
  }, {
    word                 : "proper",
    image                : "files/30_0599.jpg",
    audio                : "files/30_0599.mp3",
    audioMeaning         : "files/30_0599_meaning.mp3",
    audioExample         : "files/30_0599_example.mp3",
    textMeaning          : "If something is proper, it is right",
    textExample          : "It is not proper to throw your garbage on the road",
    transcription        : "[prЙ‘МЃpЙ™r]",
    wordTranslate        : "РїСЂР°РІРёР»СЊРЅС‹Р№",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РїСЂР°РІРёР»СЊРЅРѕ, СЌС‚Рѕ РїСЂР°РІРёР»СЊРЅРѕ",
    textExampleTranslate : "РќРµ СЃС‚РѕРёС‚ РІС‹Р±СЂР°СЃС‹РІР°С‚СЊ РјСѓСЃРѕСЂ РЅР° РґРѕСЂРѕРіСѓ",
    id                   : 599
  }, {
    word                 : "sale",
    image                : "files/30_0600.jpg",
    audio                : "files/30_0600.mp3",
    audioMeaning         : "files/30_0600_meaning.mp3",
    audioExample         : "files/30_0600_example.mp3",
    textMeaning          : "If something is for sale, you can buy it",
    textExample          : "Everything for sale here is the same price",
    transcription        : "[seil]",
    wordTranslate        : "РїСЂРѕРґР°Р¶Р°",
    textMeaningTranslate : "Р•СЃР»Рё С‡С‚Рѕ-С‚Рѕ РїСЂРѕРґР°РµС‚СЃСЏ, РІС‹ РјРѕР¶РµС‚Рµ РєСѓРїРёС‚СЊ СЌС‚Рѕ",
    textExampleTranslate : "Р’СЃРµ РґР»СЏ РїСЂРѕРґР°Р¶Рё Р·РґРµСЃСЊ РїРѕ С‚РѕР№ Р¶Рµ С†РµРЅРµ",
    id                   : 600
  }]), U = [{
    word                 : "because",
    image                : "files/01_0601.jpg",
    audio                : "files/01_0601.mp3",
    audioMeaning         : "files/01_0601_meaning.mp3",
    audioExample         : "files/01_0601_example.mp3",
    textMeaning          : "Because introduces a reason for something",
    textExample          : "We need to study because we have a test tomorrow",
    transcription        : "[bikЙ”МЃЛђz]",
    wordTranslate        : "РїРѕС‚РѕРјСѓ С‡С‚Рѕ",
    textMeaningTranslate : "РџРѕС‚РѕРјСѓ С‡С‚Рѕ РІРІРѕРґРёС‚ РїСЂРёС‡РёРЅСѓ С‡РµРіРѕ-С‚Рѕ",
    textExampleTranslate : "РќР°Рј РЅСѓР¶РЅРѕ СѓС‡РёС‚СЊСЃСЏ, РїРѕС‚РѕРјСѓ С‡С‚Рѕ Р·Р°РІС‚СЂР° Сѓ РЅР°СЃ С‚РµСЃС‚",
    id                   : 601
  }, {
    word                 : "east",
    image                : "files/01_0602.jpg",
    audio                : "files/01_0602.mp3",
    audioMeaning         : "files/01_0602_meaning.mp3",
    audioExample         : "files/01_0602_example.mp3",
    textMeaning          : "East is the direction the sun rises from",
    textExample          : "My window looks to the east, so I can watch the sunrise every morning",
    transcription        : "[iЛђst]",
    wordTranslate        : "РІРѕСЃС‚РѕРє",
    textMeaningTranslate : "Р’РѕСЃС‚РѕРє - СЌС‚Рѕ РЅР°РїСЂР°РІР»РµРЅРёРµ, РёР· РєРѕС‚РѕСЂРѕРіРѕ РІРѕСЃС…РѕРґРёС‚ СЃРѕР»РЅС†Рµ",
    textExampleTranslate : "РњРѕРµ РѕРєРЅРѕ СЃРјРѕС‚СЂРёС‚ РЅР° РІРѕСЃС‚РѕРє, РїРѕСЌС‚РѕРјСѓ СЏ РјРѕРіСѓ РЅР°Р±Р»СЋРґР°С‚СЊ РІРѕСЃС…РѕРґ СЃРѕР»РЅС†Р° РєР°Р¶РґРѕРµ СѓС‚СЂРѕ",
    id                   : 602
  }, {
    word                 : "expensive",
    image                : "files/01_0603.jpg",
    audio                : "files/01_0603.mp3",
    audioMeaning         : "files/01_0603_meaning.mp3",
    audioExample         : "files/01_0603_example.mp3",
    textMeaning          : "Expensive things cost a lot of money",
    textExample          : "My friend drives an expensive sports car",
    transcription        : "[ikspГ©nsiv]",
    wordTranslate        : "РґРѕСЂРѕРіРѕР№",
    textMeaningTranslate : "Р”РѕСЂРѕРіРёРµ РІРµС‰Рё СЃС‚РѕСЏС‚ Р±РѕР»СЊС€РёС… РґРµРЅРµРі",
    textExampleTranslate : "РњРѕР№ РґСЂСѓРі РІРѕРґРёС‚ РґРѕСЂРѕРіРѕР№ СЃРїРѕСЂС‚РёРІРЅС‹Р№ Р°РІС‚РѕРјРѕР±РёР»СЊ",
    id                   : 603
  }, {
    word                 : "flower",
    image                : "files/01_0604.jpg",
    audio                : "files/01_0604.mp3",
    audioMeaning         : "files/01_0604_meaning.mp3",
    audioExample         : "files/01_0604_example.mp3",
    textMeaning          : "A flower is the colored part of a plant",
    textExample          : "She gave pink flowers to her grandmother",
    transcription        : "[fГЎuЙ™r]",
    wordTranslate        : "С†РІРµС‚РѕРє",
    textMeaningTranslate : "Р¦РІРµС‚РѕРє - СЌС‚Рѕ С†РІРµС‚РЅР°СЏ С‡Р°СЃС‚СЊ СЂР°СЃС‚РµРЅРёСЏ",
    textExampleTranslate : "РћРЅР° РґР°Р»Р° СЂРѕР·РѕРІС‹Рµ С†РІРµС‚С‹ СЃРІРѕРµР№ Р±Р°Р±СѓС€РєРµ",
    id                   : 604
  }, {
    word                 : "garden",
    image                : "files/01_0605.jpg",
    audio                : "files/01_0605.mp3",
    audioMeaning         : "files/01_0605_meaning.mp3",
    audioExample         : "files/01_0605_example.mp3",
    textMeaning          : "A garden is an area where people grow plants",
    textExample          : "The garden is very bright and colorful in the spring",
    transcription        : "[gО¬Лђrdn]",
    wordTranslate        : "СЃР°Рґ",
    textMeaningTranslate : "РЎР°Рґ - СЌС‚Рѕ РјРµСЃС‚Рѕ, РіРґРµ Р»СЋРґРё РІС‹СЂР°С‰РёРІР°СЋС‚ СЂР°СЃС‚РµРЅРёСЏ",
    textExampleTranslate : "РЎР°Рґ РѕС‡РµРЅСЊ СЏСЂРєРёР№ Рё РєСЂР°СЃРѕС‡РЅС‹Р№ РІРµСЃРЅРѕР№",
    id                   : 605
  }, {
    word                 : "holiday",
    image                : "files/01_0606.jpg",
    audio                : "files/01_0606.mp3",
    audioMeaning         : "files/01_0606_meaning.mp3",
    audioExample         : "files/01_0606_example.mp3",
    textMeaning          : "A holiday is a special day of celebration",
    textExample          : "Monday was a holiday, so there was no school or work",
    transcription        : "[hО¬lЙ™dГЁi]",
    wordTranslate        : "РїСЂР°Р·РґРЅРёС‡РЅС‹Р№ РґРµРЅСЊ",
    textMeaningTranslate : "РџСЂР°Р·РґРЅРёРє - РѕСЃРѕР±С‹Р№ РґРµРЅСЊ РїСЂР°Р·РґРЅРѕРІР°РЅРёСЏ",
    textExampleTranslate : "РџРѕРЅРµРґРµР»СЊРЅРёРє Р±С‹Р» РІС‹С…РѕРґРЅС‹Рј, РїРѕСЌС‚РѕРјСѓ РЅРµ Р±С‹Р»Рѕ С€РєРѕР»С‹ РёР»Рё СЂР°Р±РѕС‚С‹",
    id                   : 606
  }, {
    word                 : "many",
    image                : "files/01_0607.jpg",
    audio                : "files/01_0607.mp3",
    audioMeaning         : "files/01_0607_meaning.mp3",
    audioExample         : "files/01_0607_example.mp3",
    textMeaning          : "Many shows that there is a large number of something",
    textExample          : "There are many people on the street",
    transcription        : "[mГ©ni]",
    wordTranslate        : "РјРЅРѕРіРёРµ",
    textMeaningTranslate : "РњРЅРѕРіРёРµ РїРѕРєР°Р·С‹РІР°СЋС‚, С‡С‚Рѕ РµСЃС‚СЊ РјРЅРѕРіРѕ С‡РµРіРѕ-С‚Рѕ",
    textExampleTranslate : "РќР° СѓР»РёС†Рµ РјРЅРѕРіРѕ Р»СЋРґРµР№",
    id                   : 607
  }, {
    word                 : "million",
    image                : "files/01_0608.jpg",
    audio                : "files/01_0608.mp3",
    audioMeaning         : "files/01_0608_meaning.mp3",
    audioExample         : "files/01_0608_example.mp3",
    textMeaning          : "A million is another way to write the number 1,000,000",
    textExample          : "Almost 19 million people live in Delhi, India",
    transcription        : "[mГ­ljЙ™n]",
    wordTranslate        : "РјРёР»Р»РёРѕРЅ",
    textMeaningTranslate : "РњРёР»Р»РёРѕРЅ - СЌС‚Рѕ РµС‰Рµ РѕРґРёРЅ СЃРїРѕСЃРѕР± РЅР°РїРёСЃР°С‚СЊ С‡РёСЃР»Рѕ 1 000 000",
    textExampleTranslate : "РџРѕС‡С‚Рё 19 РјРёР»Р»РёРѕРЅРѕРІ С‡РµР»РѕРІРµРє Р¶РёРІСѓС‚ РІ Р”РµР»Рё, РРЅРґРёСЏ",
    id                   : 608
  }, {
    word                 : "mountain",
    image                : "files/01_0609.jpg",
    audio                : "files/01_0609.mp3",
    audioMeaning         : "files/01_0609_meaning.mp3",
    audioExample         : "files/01_0609_example.mp3",
    textMeaning          : "A mountain is a very high hill",
    textExample          : "Mount Everest is the highest mountain in the world",
    transcription        : "[mГЎuntЙ™n]",
    wordTranslate        : "РіРѕСЂР°",
    textMeaningTranslate : "Р“РѕСЂР° - СЌС‚Рѕ РѕС‡РµРЅСЊ РІС‹СЃРѕРєРёР№ С…РѕР»Рј",
    textExampleTranslate : "Р“РѕСЂР° Р­РІРµСЂРµСЃС‚ - СЃР°РјР°СЏ РІС‹СЃРѕРєР°СЏ РіРѕСЂР° РІ РјРёСЂРµ",
    id                   : 609
  }, {
    word                 : "place",
    image                : "files/01_0610.jpg",
    audio                : "files/01_0610.mp3",
    audioMeaning         : "files/01_0610_meaning.mp3",
    audioExample         : "files/01_0610_example.mp3",
    textMeaning          : "A place is a space or area",
    textExample          : "A library is a place where people can read books",
    transcription        : "[pleis]",
    wordTranslate        : "РјРµСЃС‚Рѕ",
    textMeaningTranslate : "РњРµСЃС‚Рѕ - СЌС‚Рѕ РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕ РёР»Рё РѕР±Р»Р°СЃС‚СЊ",
    textExampleTranslate : "Р‘РёР±Р»РёРѕС‚РµРєР° - СЌС‚Рѕ РјРµСЃС‚Рѕ, РіРґРµ Р»СЋРґРё РјРѕРіСѓС‚ С‡РёС‚Р°С‚СЊ РєРЅРёРіРё",
    id                   : 610
  }, {
    word                 : "popular",
    image                : "files/01_0611.jpg",
    audio                : "files/01_0611.mp3",
    audioMeaning         : "files/01_0611_meaning.mp3",
    audioExample         : "files/01_0611_example.mp3",
    textMeaning          : "A popular thing is liked by many people",
    textExample          : "These people are listening to a popular man speak",
    transcription        : "[pО¬pjulЙ™r]",
    wordTranslate        : "РїРѕРїСѓР»СЏСЂРЅС‹Р№",
    textMeaningTranslate : "РџРѕРїСѓР»СЏСЂРЅР°СЏ РІРµС‰СЊ РЅСЂР°РІРёС‚СЃСЏ РјРЅРѕРіРёРј Р»СЋРґСЏРј",
    textExampleTranslate : "Р­С‚Рё Р»СЋРґРё СЃР»СѓС€Р°СЋС‚ СЂР°Р·РіРѕРІРѕСЂ РїРѕРїСѓР»СЏСЂРЅРѕРіРѕ С‡РµР»РѕРІРµРєР°",
    id                   : 611
  }, {
    word                 : "ski",
    image                : "files/01_0612.jpg",
    audio                : "files/01_0612.mp3",
    audioMeaning         : "files/01_0612_meaning.mp3",
    audioExample         : "files/01_0612_example.mp3",
    textMeaning          : "To ski is to glide on long pieces of wood or metal over snow",
    textExample          : "The man likes to ski and goes every weekend",
    transcription        : "[skiЛђ]",
    wordTranslate        : "Р»С‹Р¶Рё",
    textMeaningTranslate : "РљР°С‚Р°С‚СЊСЃСЏ РЅР° Р»С‹Р¶Р°С… - Р·РЅР°С‡РёС‚ СЃРєРѕР»СЊР·РёС‚СЊ РїРѕ РґР»РёРЅРЅС‹Рј РєСѓСЃРєР°Рј РґРµСЂРµРІР° РёР»Рё РјРµС‚Р°Р»Р»Р° РїРѕ СЃРЅРµРіСѓ",
    textExampleTranslate : "РњСѓР¶С‡РёРЅР° Р»СЋР±РёС‚ РєР°С‚Р°С‚СЊСЃСЏ РЅР° Р»С‹Р¶Р°С… Рё РµР·РґРёС‚ РєР°Р¶РґС‹Рµ РІС‹С…РѕРґРЅС‹Рµ",
    id                   : 612
  }, {
    word                 : "such",
    image                : "files/01_0613.jpg",
    audio                : "files/01_0613.mp3",
    audioMeaning         : "files/01_0613_meaning.mp3",
    audioExample         : "files/01_0613_example.mp3",
    textMeaning          : "Such means вЂњlike thisвЂќ",
    textExample          : "I have never seen such a beautiful sunset before",
    transcription        : "[sКЊtКѓ]",
    wordTranslate        : "С‚Р°РєРѕР№",
    textMeaningTranslate : "РўР°РєРёРµ РѕР·РЅР°С‡Р°РµС‚ 'РєР°Рє СЌС‚Рѕ'",
    textExampleTranslate : "РЇ РЅРёРєРѕРіРґР° СЂР°РЅСЊС€Рµ РЅРµ РІРёРґРµР» С‚Р°РєРѕР№ РєСЂР°СЃРёРІС‹Р№ Р·Р°РєР°С‚",
    id                   : 613
  }, {
    word                 : "total",
    image                : "files/01_0614.jpg",
    audio                : "files/01_0614.mp3",
    audioMeaning         : "files/01_0614_meaning.mp3",
    audioExample         : "files/01_0614_example.mp3",
    textMeaning          : "Total shows that everyone or everything has been counted",
    textExample          : ".The total cost of the items she bought was $52",
    transcription        : "[tГіutl]",
    wordTranslate        : "РІСЃРµРіРѕ",
    textMeaningTranslate : "Р’СЃРµРіРѕ РїРѕРєР°Р·С‹РІР°РµС‚, С‡С‚Рѕ РІСЃРµ РёР»Рё РІСЃРµ Р±С‹Р»Рѕ РїРѕСЃС‡РёС‚Р°РЅРѕ",
    textExampleTranslate : "РћР±С‰Р°СЏ СЃС‚РѕРёРјРѕСЃС‚СЊ РїСЂРµРґРјРµС‚РѕРІ, РєРѕС‚РѕСЂС‹Рµ РѕРЅР° РєСѓРїРёР»Р°, СЃРѕСЃС‚Р°РІРёР»Р° 52 РґРѕР»Р»Р°СЂР°",
    id                   : 614
  }, {
    word                 : "tower",
    image                : "files/01_0615.jpg",
    audio                : "files/01_0615.mp3",
    audioMeaning         : "files/01_0615_meaning.mp3",
    audioExample         : "files/01_0615_example.mp3",
    textMeaning          : "A tower is a tall, narrow building",
    textExample          : "This is a very famous tower in Italy",
    transcription        : "[tГЎuЙ™r]",
    wordTranslate        : "Р±Р°С€РЅСЏ",
    textMeaningTranslate : "Р‘Р°С€РЅСЏ - СЌС‚Рѕ РІС‹СЃРѕРєРѕРµ СѓР·РєРѕРµ Р·РґР°РЅРёРµ",
    textExampleTranslate : "Р­С‚Рѕ РѕС‡РµРЅСЊ РёР·РІРµСЃС‚РЅР°СЏ Р±Р°С€РЅСЏ РІ РС‚Р°Р»РёРё",
    id                   : 615
  }, {
    word                 : "town",
    image                : "files/01_0616.jpg",
    audio                : "files/01_0616.mp3",
    audioMeaning         : "files/01_0616_meaning.mp3",
    audioExample         : "files/01_0616_example.mp3",
    textMeaning          : "A town is a place where people live and work, and is smaller than a city",
    textExample          : "I come from a small town, and everyone there knows each other",
    transcription        : "[taun]",
    wordTranslate        : "РіРѕСЂРѕРґ",
    textMeaningTranslate : "Р“РѕСЂРѕРґ - СЌС‚Рѕ РјРµСЃС‚Рѕ, РіРґРµ Р»СЋРґРё Р¶РёРІСѓС‚ Рё СЂР°Р±РѕС‚Р°СЋС‚, Рё РѕРЅ РјРµРЅСЊС€Рµ РіРѕСЂРѕРґР°",
    textExampleTranslate : "РЇ РёР· РјР°Р»РµРЅСЊРєРѕРіРѕ РіРѕСЂРѕРґРєР°, Рё РІСЃРµ С‚Р°Рј Р·РЅР°СЋС‚ РґСЂСѓРі РґСЂСѓРіР°",
    id                   : 616
  }, {
    word                 : "train",
    image                : "files/01_0617.jpg",
    audio                : "files/01_0617.mp3",
    audioMeaning         : "files/01_0617_meaning.mp3",
    audioExample         : "files/01_0617_example.mp3",
    textMeaning          : "A train is a group of railway cars connected together",
    textExample          : "The train is very fast, so we can get home in one hour",
    transcription        : "[trein]",
    wordTranslate        : "РїРѕРµР·Рґ",
    textMeaningTranslate : "РџРѕРµР·Рґ - СЌС‚Рѕ РіСЂСѓРїРїР° Р¶РµР»РµР·РЅРѕРґРѕСЂРѕР¶РЅС‹С… РІР°РіРѕРЅРѕРІ, СЃРѕРµРґРёРЅРµРЅРЅС‹С… РІРјРµСЃС‚Рµ",
    textExampleTranslate : "РџРѕРµР·Рґ РѕС‡РµРЅСЊ Р±С‹СЃС‚СЂС‹Р№, РїРѕСЌС‚РѕРјСѓ РјС‹ РјРѕР¶РµРј РґРѕР±СЂР°С‚СЊСЃСЏ РґРѕРјРѕР№ Р·Р° РѕРґРёРЅ С‡Р°СЃ",
    id                   : 617
  }, {
    word                 : "walk",
    image                : "files/01_0618.jpg",
    audio                : "files/01_0618.mp3",
    audioMeaning         : "files/01_0618_meaning.mp3",
    audioExample         : "files/01_0618_example.mp3",
    textMeaning          : "To walk is to move forward using legs, but it is slower than running",
    textExample          : "The children walk to school in the morning",
    transcription        : "[wЙ”Лђk]",
    wordTranslate        : "С…РѕРґРёС‚СЊ",
    textMeaningTranslate : "РҐРѕРґРёС‚СЊ - Р·РЅР°С‡РёС‚ РґРІРёРіР°С‚СЊСЃСЏ РІРїРµСЂРµРґ, РёСЃРїРѕР»СЊР·СѓСЏ РЅРѕРіРё, РЅРѕ СЌС‚Рѕ РјРµРґР»РµРЅРЅРµРµ, С‡РµРј Р±РµРі",
    textExampleTranslate : "Р”РµС‚Рё РіСѓР»СЏСЋС‚ РІ С€РєРѕР»Сѓ РїРѕ СѓС‚СЂР°Рј",
    id                   : 618
  }, {
    word                 : "watch",
    image                : "files/01_0619.jpg",
    audio                : "files/01_0619.mp3",
    audioMeaning         : "files/01_0619_meaning.mp3",
    audioExample         : "files/01_0619_example.mp3",
    textMeaning          : "To watch is to look at someone or something for a period of time",
    textExample          : "My friend came over to watch a movie with me",
    transcription        : "[waК§]",
    wordTranslate        : "СЃРјРѕС‚СЂРµС‚СЊ",
    textMeaningTranslate : "РЎРјРѕС‚СЂРµС‚СЊ - Р·РЅР°С‡РёС‚ СЃРјРѕС‚СЂРµС‚СЊ РЅР° РєРѕРіРѕ-С‚Рѕ РёР»Рё С‡С‚Рѕ-С‚Рѕ РІ С‚РµС‡РµРЅРёРµ РѕРїСЂРµРґРµР»РµРЅРЅРѕРіРѕ РїРµСЂРёРѕРґР° РІСЂРµРјРµРЅРё",
    textExampleTranslate : "РњРѕР№ РґСЂСѓРі РїСЂРёС€РµР» РїРѕСЃРјРѕС‚СЂРµС‚СЊ С„РёР»СЊРј СЃРѕ РјРЅРѕР№",
    id                   : 619
  }, {
    word                 : "world",
    image                : "files/01_0620.jpg",
    audio                : "files/01_0620.mp3",
    audioMeaning         : "files/01_0620_meaning.mp3",
    audioExample         : "files/01_0620_example.mp3",
    textMeaning          : "The world is the Earth and all the people and things in it",
    textExample          : "What are the names of the five oceans of the world?",
    transcription        : "[wЙ™Лђrld]",
    wordTranslate        : "РјРёСЂ",
    textMeaningTranslate : "РњРёСЂ - СЌС‚Рѕ Р—РµРјР»СЏ Рё РІСЃРµ Р»СЋРґРё Рё РІРµС‰Рё РІ РЅРµР№",
    textExampleTranslate : "РљР°Рє РЅР°Р·С‹РІР°СЋС‚СЃСЏ РїСЏС‚СЊ РѕРєРµР°РЅРѕРІ РјРёСЂР°?",
    id                   : 620
  }, {
    word                 : "anxious",
    image                : "files/02_0621.jpg",
    audio                : "files/02_0621.mp3",
    audioMeaning         : "files/02_0621_meaning.mp3",
    audioExample         : "files/02_0621_example.mp3",
    textMeaning          : "Anxious means feeling worried or nervous",
    textExample          : "She was anxious about not making her appointment on time",
    transcription        : "[ЗЅЕ‹kКѓЙ™s]",
    wordTranslate        : "РѕР·Р°Р±РѕС‡РµРЅРЅС‹Р№",
    textMeaningTranslate : "РўСЂРµРІРѕР¶РЅРѕ РѕР·РЅР°С‡Р°РµС‚ С‡СѓРІСЃС‚РІРѕРІР°С‚СЊ СЃРµР±СЏ РѕР±РµСЃРїРѕРєРѕРµРЅРЅС‹Рј РёР»Рё РЅРµСЂРІРЅС‹Рј",
    textExampleTranslate : "РћРЅР° Р±РµСЃРїРѕРєРѕРёР»Р°СЃСЊ Рѕ С‚РѕРј, С‡С‚РѕР±С‹ РЅРµ РґРѕРіРѕРІРѕСЂРёС‚СЊСЃСЏ Рѕ РІСЃС‚СЂРµС‡Рµ РІРѕРІСЂРµРјСЏ",
    id                   : 621
  }, {
    word                 : "awful",
    image                : "files/02_0622.jpg",
    audio                : "files/02_0622.mp3",
    audioMeaning         : "files/02_0622_meaning.mp3",
    audioExample         : "files/02_0622_example.mp3",
    textMeaning          : "An awful thing is very bad",
    textExample          : "Her performance last night was awful",
    transcription        : "[Й”МЃЛђfЙ™l]",
    wordTranslate        : "СѓР¶Р°СЃРЅС‹Р№",
    textMeaningTranslate : "РЈР¶Р°СЃРЅРѕ РѕС‡РµРЅСЊ РїР»РѕС…Рѕ",
    textExampleTranslate : "Р•Рµ РІС‹СЃС‚СѓРїР»РµРЅРёРµ РїСЂРѕС€Р»РѕР№ РЅРѕС‡СЊСЋ Р±С‹Р»Рѕ СѓР¶Р°СЃРЅС‹Рј",
    id                   : 622
  }, {
    word                 : "consist",
    image                : "files/02_0623.jpg",
    audio                : "files/02_0623.mp3",
    audioMeaning         : "files/02_0623_meaning.mp3",
    audioExample         : "files/02_0623_example.mp3",
    textMeaning          : "To consist of certain is to be made of parts or things them",
    textExample          : "TodayвЂ™s choices for lunch consisted of pizza, hamburgers, and hot dogs",
    transcription        : "[kЙ™nsГ­st]",
    wordTranslate        : "СЃРѕСЃС‚РѕСЏС‚",
    textMeaningTranslate : "Р‘С‹С‚СЊ СЃРѕСЃС‚РѕСЏС‰РёРј РёР· РѕРїСЂРµРґРµР»РµРЅРЅРѕРіРѕ РѕР·РЅР°С‡Р°РµС‚ Р±С‹С‚СЊ СЃРѕСЃС‚Р°РІР»РµРЅРЅС‹Рј РёР· С‡Р°СЃС‚РµР№ РёР»Рё РІРµС‰РµР№ РёР· РЅРёС…",
    textExampleTranslate : "РЎРµРіРѕРґРЅСЏС€РЅРёР№ РІС‹Р±РѕСЂ РЅР° РѕР±РµРґ СЃРѕСЃС‚РѕСЏР» РёР· РїРёС†С†С‹, РіР°РјР±СѓСЂРіРµСЂРѕРІ Рё С…РѕС‚-РґРѕРіРѕРІ",
    id                   : 623
  }, {
    word                 : "desire",
    image                : "files/02_0624.jpg",
    audio                : "files/02_0624.mp3",
    audioMeaning         : "files/02_0624_meaning.mp3",
    audioExample         : "files/02_0624_example.mp3",
    textMeaning          : "To desire is to want something",
    textExample          : "My sister desires a big house and lots of money",
    transcription        : "[dizГЎiЙ™r]",
    wordTranslate        : "Р¶РµР»Р°РЅРёРµ",
    textMeaningTranslate : "Р–РµР»Р°С‚СЊ - Р·РЅР°С‡РёС‚ С…РѕС‚РµС‚СЊ С‡РµРіРѕ-С‚Рѕ",
    textExampleTranslate : "РњРѕСЏ СЃРµСЃС‚СЂР° С…РѕС‡РµС‚ Р±РѕР»СЊС€РѕР№ РґРѕРј Рё РјРЅРѕРіРѕ РґРµРЅРµРі",
    id                   : 624
  }, {
    word                 : "eager",
    image                : "files/02_0625.jpg",
    audio                : "files/02_0625.mp3",
    audioMeaning         : "files/02_0625_meaning.mp3",
    audioExample         : "files/02_0625_example.mp3",
    textMeaning          : "Eager shows excitement about something",
    textExample          : "The man was eager to talk about the good news",
    transcription        : "[Г­ЛђgЙ™r]",
    wordTranslate        : "РЅРµС‚РµСЂРїРµР»РёРІС‹Р№",
    textMeaningTranslate : "РЎС‚СЂРµРјР»РµРЅРёРµ РїРѕРєР°Р·С‹РІР°РµС‚ РІРѕР»РЅРµРЅРёРµ Рѕ С‡РµРј-С‚Рѕ",
    textExampleTranslate : "Р§РµР»РѕРІРµРє СЃС‚СЂРµРјРёР»СЃСЏ РіРѕРІРѕСЂРёС‚СЊ Рѕ С…РѕСЂРѕС€РёС… РЅРѕРІРѕСЃС‚СЏС…",
    id                   : 625
  }, {
    word                 : "household",
    image                : "files/02_0626.jpg",
    audio                : "files/02_0626.mp3",
    audioMeaning         : "files/02_0626_meaning.mp3",
    audioExample         : "files/02_0626_example.mp3",
    textMeaning          : "A household is all the people who live in one house",
    textExample          : "Our household is made up of my father, my mother, and me",
    transcription        : "[hГЎushГІuld]",
    wordTranslate        : "РґРѕРјР°С€РЅРµРµ С…РѕР·СЏР№СЃС‚РІРѕ",
    textMeaningTranslate : "Р”РѕРјРѕС…РѕР·СЏР№СЃС‚РІРѕ - СЌС‚Рѕ РІСЃРµ Р»СЋРґРё, РєРѕС‚РѕСЂС‹Рµ Р¶РёРІСѓС‚ РІ РѕРґРЅРѕРј РґРѕРјРµ",
    textExampleTranslate : "РќР°С€Р° СЃРµРјСЊСЏ СЃРѕСЃС‚РѕРёС‚ РёР· РјРѕРµРіРѕ РѕС‚С†Р°, РјРѕРµР№ РјР°С‚РµСЂРё Рё РјРµРЅСЏ",
    id                   : 626
  }, {
    word                 : "intent",
    image                : "files/02_0627.jpg",
    audio                : "files/02_0627.mp3",
    audioMeaning         : "files/02_0627_meaning.mp3",
    audioExample         : "files/02_0627_example.mp3",
    textMeaning          : "An intent is a plan to do something",
    textExample          : "Her intent is to visit Italy next summer",
    transcription        : "[intГ©nt]",
    wordTranslate        : "РЅР°РјРµСЂРµРЅРёРµ",
    textMeaningTranslate : "РќР°РјРµСЂРµРЅРёРµ - СЌС‚Рѕ Р