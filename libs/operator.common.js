/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
;
(function (root) {
  // Detect free variables `exports`.
  var freeExports = typeof exports == 'object' && exports;

  // Detect free variable `module`.
  var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;

  // Detect free variable `global`, from Node.js or Browserified code,
  // and use it as `root`.
  var freeGlobal = typeof global == 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
    root = freeGlobal;
  }

  /*--------------------------------------------------------------------------*/

  // All astral symbols.
  var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  // All ASCII symbols (not just printable ASCII) except those listed in the
  // first column of the overrides table.
  // https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides
  var regexAsciiWhitelist = /[\x01-\x7F]/g;
  // All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
  // code points listed in the first column of the overrides table on
  // https://html.spec.whatwg.org/multipage/syntax.html#table-charref-overrides.
  var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
  var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
  var encodeMap = {
    '\xAD': 'shy',
    '\u200C': 'zwnj',
    '\u200D': 'zwj',
    '\u200E': 'lrm',
    '\u2063': 'ic',
    '\u2062': 'it',
    '\u2061': 'af',
    '\u200F': 'rlm',
    '\u200B': 'ZeroWidthSpace',
    '\u2060': 'NoBreak',
    '\u0311': 'DownBreve',
    '\u20DB': 'tdot',
    '\u20DC': 'DotDot',
    '\t': 'Tab',
    '\n': 'NewLine',
    '\u2008': 'puncsp',
    '\u205F': 'MediumSpace',
    '\u2009': 'thinsp',
    '\u200A': 'hairsp',
    '\u2004': 'emsp13',
    '\u2002': 'ensp',
    '\u2005': 'emsp14',
    '\u2003': 'emsp',
    '\u2007': 'numsp',
    '\xA0': 'nbsp',
    '\u205F\u200A': 'ThickSpace',
    '\u203E': 'oline',
    '_': 'lowbar',
    '\u2010': 'dash',
    '\u2013': 'ndash',
    '\u2014': 'mdash',
    '\u2015': 'horbar',
    ',': 'comma',
    ';': 'semi',
    '\u204F': 'bsemi',
    ':': 'colon',
    '\u2A74': 'Colone',
    '!': 'excl',
    '\xA1': 'iexcl',
    '?': 'quest',
    '\xBF': 'iquest',
    '.': 'period',
    '\u2025': 'nldr',
    '\u2026': 'mldr',
    '\xB7': 'middot',
    '\'': 'apos',
    '\u2018': 'lsquo',
    '\u2019': 'rsquo',
    '\u201A': 'sbquo',
    '\u2039': 'lsaquo',
    '\u203A': 'rsaquo',
    '"': 'quot',
    '\u201C': 'ldquo',
    '\u201D': 'rdquo',
    '\u201E': 'bdquo',
    '\xAB': 'laquo',
    '\xBB': 'raquo',
    '(': 'lpar',
    ')': 'rpar',
    '[': 'lsqb',
    ']': 'rsqb',
    '{': 'lcub',
    '}': 'rcub',
    '\u2308': 'lceil',
    '\u2309': 'rceil',
    '\u230A': 'lfloor',
    '\u230B': 'rfloor',
    '\u2985': 'lopar',
    '\u2986': 'ropar',
    '\u298B': 'lbrke',
    '\u298C': 'rbrke',
    '\u298D': 'lbrkslu',
    '\u298E': 'rbrksld',
    '\u298F': 'lbrksld',
    '\u2990': 'rbrkslu',
    '\u2991': 'langd',
    '\u2992': 'rangd',
    '\u2993': 'lparlt',
    '\u2994': 'rpargt',
    '\u2995': 'gtlPar',
    '\u2996': 'ltrPar',
    '\u27E6': 'lobrk',
    '\u27E7': 'robrk',
    '\u27E8': 'lang',
    '\u27E9': 'rang',
    '\u27EA': 'Lang',
    '\u27EB': 'Rang',
    '\u27EC': 'loang',
    '\u27ED': 'roang',
    '\u2772': 'lbbrk',
    '\u2773': 'rbbrk',
    '\u2016': 'Vert',
    '\xA7': 'sect',
    '\xB6': 'para',
    '@': 'commat',
    '*': 'ast',
    '/': 'sol',
    'undefined': null,
    '&': 'amp',
    '#': 'num',
    '%': 'percnt',
    '\u2030': 'permil',
    '\u2031': 'pertenk',
    '\u2020': 'dagger',
    '\u2021': 'Dagger',
    '\u2022': 'bull',
    '\u2043': 'hybull',
    '\u2032': 'prime',
    '\u2033': 'Prime',
    '\u2034': 'tprime',
    '\u2057': 'qprime',
    '\u2035': 'bprime',
    '\u2041': 'caret',
    '`': 'grave',
    '\xB4': 'acute',
    '\u02DC': 'tilde',
    '^': 'Hat',
    '\xAF': 'macr',
    '\u02D8': 'breve',
    '\u02D9': 'dot',
    '\xA8': 'die',
    '\u02DA': 'ring',
    '\u02DD': 'dblac',
    '\xB8': 'cedil',
    '\u02DB': 'ogon',
    '\u02C6': 'circ',
    '\u02C7': 'caron',
    '\xB0': 'deg',
    '\xA9': 'copy',
    '\xAE': 'reg',
    '\u2117': 'copysr',
    '\u2118': 'wp',
    '\u211E': 'rx',
    '\u2127': 'mho',
    '\u2129': 'iiota',
    '\u2190': 'larr',
    '\u219A': 'nlarr',
    '\u2192': 'rarr',
    '\u219B': 'nrarr',
    '\u2191': 'uarr',
    '\u2193': 'darr',
    '\u2194': 'harr',
    '\u21AE': 'nharr',
    '\u2195': 'varr',
    '\u2196': 'nwarr',
    '\u2197': 'nearr',
    '\u2198': 'searr',
    '\u2199': 'swarr',
    '\u219D': 'rarrw',
    '\u219D\u0338': 'nrarrw',
    '\u219E': 'Larr',
    '\u219F': 'Uarr',
    '\u21A0': 'Rarr',
    '\u21A1': 'Darr',
    '\u21A2': 'larrtl',
    '\u21A3': 'rarrtl',
    '\u21A4': 'mapstoleft',
    '\u21A5': 'mapstoup',
    '\u21A6': 'map',
    '\u21A7': 'mapstodown',
    '\u21A9': 'larrhk',
    '\u21AA': 'rarrhk',
    '\u21AB': 'larrlp',
    '\u21AC': 'rarrlp',
    '\u21AD': 'harrw',
    '\u21B0': 'lsh',
    '\u21B1': 'rsh',
    '\u21B2': 'ldsh',
    '\u21B3': 'rdsh',
    '\u21B5': 'crarr',
    '\u21B6': 'cularr',
    '\u21B7': 'curarr',
    '\u21BA': 'olarr',
    '\u21BB': 'orarr',
    '\u21BC': 'lharu',
    '\u21BD': 'lhard',
    '\u21BE': 'uharr',
    '\u21BF': 'uharl',
    '\u21C0': 'rharu',
    '\u21C1': 'rhard',
    '\u21C2': 'dharr',
    '\u21C3': 'dharl',
    '\u21C4': 'rlarr',
    '\u21C5': 'udarr',
    '\u21C6': 'lrarr',
    '\u21C7': 'llarr',
    '\u21C8': 'uuarr',
    '\u21C9': 'rrarr',
    '\u21CA': 'ddarr',
    '\u21CB': 'lrhar',
    '\u21CC': 'rlhar',
    '\u21D0': 'lArr',
    '\u21CD': 'nlArr',
    '\u21D1': 'uArr',
    '\u21D2': 'rArr',
    '\u21CF': 'nrArr',
    '\u21D3': 'dArr',
    '\u21D4': 'iff',
    '\u21CE': 'nhArr',
    '\u21D5': 'vArr',
    '\u21D6': 'nwArr',
    '\u21D7': 'neArr',
    '\u21D8': 'seArr',
    '\u21D9': 'swArr',
    '\u21DA': 'lAarr',
    '\u21DB': 'rAarr',
    '\u21DD': 'zigrarr',
    '\u21E4': 'larrb',
    '\u21E5': 'rarrb',
    '\u21F5': 'duarr',
    '\u21FD': 'loarr',
    '\u21FE': 'roarr',
    '\u21FF': 'hoarr',
    '\u2200': 'forall',
    '\u2201': 'comp',
    '\u2202': 'part',
    '\u2202\u0338': 'npart',
    '\u2203': 'exist',
    '\u2204': 'nexist',
    '\u2205': 'empty',
    '\u2207': 'Del',
    '\u2208': 'in',
    '\u2209': 'notin',
    '\u220B': 'ni',
    '\u220C': 'notni',
    '\u03F6': 'bepsi',
    '\u220F': 'prod',
    '\u2210': 'coprod',
    '\u2211': 'sum',
    '+': 'plus',
    '\xB1': 'pm',
    '\xF7': 'div',
    '\xD7': 'times',
    '<': 'lt',
    '\u226E': 'nlt',
    '<\u20D2': 'nvlt',
    '=': 'equals',
    '\u2260': 'ne',
    '=\u20E5': 'bne',
    '\u2A75': 'Equal',
    '>': 'gt',
    '\u226F': 'ngt',
    '>\u20D2': 'nvgt',
    '\xAC': 'not',
    '|': 'vert',
    '\xA6': 'brvbar',
    '\u2212': 'minus',
    '\u2213': 'mp',
    '\u2214': 'plusdo',
    '\u2044': 'frasl',
    '\u2216': 'setmn',
    '\u2217': 'lowast',
    '\u2218': 'compfn',
    '\u221A': 'Sqrt',
    '\u221D': 'prop',
    '\u221E': 'infin',
    '\u221F': 'angrt',
    '\u2220': 'ang',
    '\u2220\u20D2': 'nang',
    '\u2221': 'angmsd',
    '\u2222': 'angsph',
    '\u2223': 'mid',
    '\u2224': 'nmid',
    '\u2225': 'par',
    '\u2226': 'npar',
    '\u2227': 'and',
    '\u2228': 'or',
    '\u2229': 'cap',
    '\u2229\uFE00': 'caps',
    '\u222A': 'cup',
    '\u222A\uFE00': 'cups',
    '\u222B': 'int',
    '\u222C': 'Int',
    '\u222D': 'tint',
    '\u2A0C': 'qint',
    '\u222E': 'oint',
    '\u222F': 'Conint',
    '\u2230': 'Cconint',
    '\u2231': 'cwint',
    '\u2232': 'cwconint',
    '\u2233': 'awconint',
    '\u2234': 'there4',
    '\u2235': 'becaus',
    '\u2236': 'ratio',
    '\u2237': 'Colon',
    '\u2238': 'minusd',
    '\u223A': 'mDDot',
    '\u223B': 'homtht',
    '\u223C': 'sim',
    '\u2241': 'nsim',
    '\u223C\u20D2': 'nvsim',
    '\u223D': 'bsim',
    '\u223D\u0331': 'race',
    '\u223E': 'ac',
    '\u223E\u0333': 'acE',
    '\u223F': 'acd',
    '\u2240': 'wr',
    '\u2242': 'esim',
    '\u2242\u0338': 'nesim',
    '\u2243': 'sime',
    '\u2244': 'nsime',
    '\u2245': 'cong',
    '\u2247': 'ncong',
    '\u2246': 'simne',
    '\u2248': 'ap',
    '\u2249': 'nap',
    '\u224A': 'ape',
    '\u224B': 'apid',
    '\u224B\u0338': 'napid',
    '\u224C': 'bcong',
    '\u224D': 'CupCap',
    '\u226D': 'NotCupCap',
    '\u224D\u20D2': 'nvap',
    '\u224E': 'bump',
    '\u224E\u0338': 'nbump',
    '\u224F': 'bumpe',
    '\u224F\u0338': 'nbumpe',
    '\u2250': 'doteq',
    '\u2250\u0338': 'nedot',
    '\u2251': 'eDot',
    '\u2252': 'efDot',
    '\u2253': 'erDot',
    '\u2254': 'colone',
    '\u2255': 'ecolon',
    '\u2256': 'ecir',
    '\u2257': 'cire',
    '\u2259': 'wedgeq',
    '\u225A': 'veeeq',
    '\u225C': 'trie',
    '\u225F': 'equest',
    '\u2261': 'equiv',
    '\u2262': 'nequiv',
    '\u2261\u20E5': 'bnequiv',
    '\u2264': 'le',
    '\u2270': 'nle',
    '\u2264\u20D2': 'nvle',
    '\u2265': 'ge',
    '\u2271': 'nge',
    '\u2265\u20D2': 'nvge',
    '\u2266': 'lE',
    '\u2266\u0338': 'nlE',
    '\u2267': 'gE',
    '\u2267\u0338': 'ngE',
    '\u2268\uFE00': 'lvnE',
    '\u2268': 'lnE',
    '\u2269': 'gnE',
    '\u2269\uFE00': 'gvnE',
    '\u226A': 'll',
    '\u226A\u0338': 'nLtv',
    '\u226A\u20D2': 'nLt',
    '\u226B': 'gg',
    '\u226B\u0338': 'nGtv',
    '\u226B\u20D2': 'nGt',
    '\u226C': 'twixt',
    '\u2272': 'lsim',
    '\u2274': 'nlsim',
    '\u2273': 'gsim',
    '\u2275': 'ngsim',
    '\u2276': 'lg',
    '\u2278': 'ntlg',
    '\u2277': 'gl',
    '\u2279': 'ntgl',
    '\u227A': 'pr',
    '\u2280': 'npr',
    '\u227B': 'sc',
    '\u2281': 'nsc',
    '\u227C': 'prcue',
    '\u22E0': 'nprcue',
    '\u227D': 'sccue',
    '\u22E1': 'nsccue',
    '\u227E': 'prsim',
    '\u227F': 'scsim',
    '\u227F\u0338': 'NotSucceedsTilde',
    '\u2282': 'sub',
    '\u2284': 'nsub',
    '\u2282\u20D2': 'vnsub',
    '\u2283': 'sup',
    '\u2285': 'nsup',
    '\u2283\u20D2': 'vnsup',
    '\u2286': 'sube',
    '\u2288': 'nsube',
    '\u2287': 'supe',
    '\u2289': 'nsupe',
    '\u228A\uFE00': 'vsubne',
    '\u228A': 'subne',
    '\u228B\uFE00': 'vsupne',
    '\u228B': 'supne',
    '\u228D': 'cupdot',
    '\u228E': 'uplus',
    '\u228F': 'sqsub',
    '\u228F\u0338': 'NotSquareSubset',
    '\u2290': 'sqsup',
    '\u2290\u0338': 'NotSquareSuperset',
    '\u2291': 'sqsube',
    '\u22E2': 'nsqsube',
    '\u2292': 'sqsupe',
    '\u22E3': 'nsqsupe',
    '\u2293': 'sqcap',
    '\u2293\uFE00': 'sqcaps',
    '\u2294': 'sqcup',
    '\u2294\uFE00': 'sqcups',
    '\u2295': 'oplus',
    '\u2296': 'ominus',
    '\u2297': 'otimes',
    '\u2298': 'osol',
    '\u2299': 'odot',
    '\u229A': 'ocir',
    '\u229B': 'oast',
    '\u229D': 'odash',
    '\u229E': 'plusb',
    '\u229F': 'minusb',
    '\u22A0': 'timesb',
    '\u22A1': 'sdotb',
    '\u22A2': 'vdash',
    '\u22AC': 'nvdash',
    '\u22A3': 'dashv',
    '\u22A4': 'top',
    '\u22A5': 'bot',
    '\u22A7': 'models',
    '\u22A8': 'vDash',
    '\u22AD': 'nvDash',
    '\u22A9': 'Vdash',
    '\u22AE': 'nVdash',
    '\u22AA': 'Vvdash',
    '\u22AB': 'VDash',
    '\u22AF': 'nVDash',
    '\u22B0': 'prurel',
    '\u22B2': 'vltri',
    '\u22EA': 'nltri',
    '\u22B3': 'vrtri',
    '\u22EB': 'nrtri',
    '\u22B4': 'ltrie',
    '\u22EC': 'nltrie',
    '\u22B4\u20D2': 'nvltrie',
    '\u22B5': 'rtrie',
    '\u22ED': 'nrtrie',
    '\u22B5\u20D2': 'nvrtrie',
    '\u22B6': 'origof',
    '\u22B7': 'imof',
    '\u22B8': 'mumap',
    '\u22B9': 'hercon',
    '\u22BA': 'intcal',
    '\u22BB': 'veebar',
    '\u22BD': 'barvee',
    '\u22BE': 'angrtvb',
    '\u22BF': 'lrtri',
    '\u22C0': 'Wedge',
    '\u22C1': 'Vee',
    '\u22C2': 'xcap',
    '\u22C3': 'xcup',
    '\u22C4': 'diam',
    '\u22C5': 'sdot',
    '\u22C6': 'Star',
    '\u22C7': 'divonx',
    '\u22C8': 'bowtie',
    '\u22C9': 'ltimes',
    '\u22CA': 'rtimes',
    '\u22CB': 'lthree',
    '\u22CC': 'rthree',
    '\u22CD': 'bsime',
    '\u22CE': 'cuvee',
    '\u22CF': 'cuwed',
    '\u22D0': 'Sub',
    '\u22D1': 'Sup',
    '\u22D2': 'Cap',
    '\u22D3': 'Cup',
    '\u22D4': 'fork',
    '\u22D5': 'epar',
    '\u22D6': 'ltdot',
    '\u22D7': 'gtdot',
    '\u22D8': 'Ll',
    '\u22D8\u0338': 'nLl',
    '\u22D9': 'Gg',
    '\u22D9\u0338': 'nGg',
    '\u22DA\uFE00': 'lesg',
    '\u22DA': 'leg',
    '\u22DB': 'gel',
    '\u22DB\uFE00': 'gesl',
    '\u22DE': 'cuepr',
    '\u22DF': 'cuesc',
    '\u22E6': 'lnsim',
    '\u22E7': 'gnsim',
    '\u22E8': 'prnsim',
    '\u22E9': 'scnsim',
    '\u22EE': 'vellip',
    '\u22EF': 'ctdot',
    '\u22F0': 'utdot',
    '\u22F1': 'dtdot',
    '\u22F2': 'disin',
    '\u22F3': 'isinsv',
    '\u22F4': 'isins',
    '\u22F5': 'isindot',
    '\u22F5\u0338': 'notindot',
    '\u22F6': 'notinvc',
    '\u22F7': 'notinvb',
    '\u22F9': 'isinE',
    '\u22F9\u0338': 'notinE',
    '\u22FA': 'nisd',
    '\u22FB': 'xnis',
    '\u22FC': 'nis',
    '\u22FD': 'notnivc',
    '\u22FE': 'notnivb',
    '\u2305': 'barwed',
    '\u2306': 'Barwed',
    '\u230C': 'drcrop',
    '\u230D': 'dlcrop',
    '\u230E': 'urcrop',
    '\u230F': 'ulcrop',
    '\u2310': 'bnot',
    '\u2312': 'profline',
    '\u2313': 'profsurf',
    '\u2315': 'telrec',
    '\u2316': 'target',
    '\u231C': 'ulcorn',
    '\u231D': 'urcorn',
    '\u231E': 'dlcorn',
    '\u231F': 'drcorn',
    '\u2322': 'frown',
    '\u2323': 'smile',
    '\u232D': 'cylcty',
    '\u232E': 'profalar',
    '\u2336': 'topbot',
    '\u233D': 'ovbar',
    '\u233F': 'solbar',
    '\u237C': 'angzarr',
    '\u23B0': 'lmoust',
    '\u23B1': 'rmoust',
    '\u23B4': 'tbrk',
    '\u23B5': 'bbrk',
    '\u23B6': 'bbrktbrk',
    '\u23DC': 'OverParenthesis',
    '\u23DD': 'UnderParenthesis',
    '\u23DE': 'OverBrace',
    '\u23DF': 'UnderBrace',
    '\u23E2': 'trpezium',
    '\u23E7': 'elinters',
    '\u2423': 'blank',
    '\u2500': 'boxh',
    '\u2502': 'boxv',
    '\u250C': 'boxdr',
    '\u2510': 'boxdl',
    '\u2514': 'boxur',
    '\u2518': 'boxul',
    '\u251C': 'boxvr',
    '\u2524': 'boxvl',
    '\u252C': 'boxhd',
    '\u2534': 'boxhu',
    '\u253C': 'boxvh',
    '\u2550': 'boxH',
    '\u2551': 'boxV',
    '\u2552': 'boxdR',
    '\u2553': 'boxDr',
    '\u2554': 'boxDR',
    '\u2555': 'boxdL',
    '\u2556': 'boxDl',
    '\u2557': 'boxDL',
    '\u2558': 'boxuR',
    '\u2559': 'boxUr',
    '\u255A': 'boxUR',
    '\u255B': 'boxuL',
    '\u255C': 'boxUl',
    '\u255D': 'boxUL',
    '\u255E': 'boxvR',
    '\u255F': 'boxVr',
    '\u2560': 'boxVR',
    '\u2561': 'boxvL',
    '\u2562': 'boxVl',
    '\u2563': 'boxVL',
    '\u2564': 'boxHd',
    '\u2565': 'boxhD',
    '\u2566': 'boxHD',
    '\u2567': 'boxHu',
    '\u2568': 'boxhU',
    '\u2569': 'boxHU',
    '\u256A': 'boxvH',
    '\u256B': 'boxVh',
    '\u256C': 'boxVH',
    '\u2580': 'uhblk',
    '\u2584': 'lhblk',
    '\u2588': 'block',
    '\u2591': 'blk14',
    '\u2592': 'blk12',
    '\u2593': 'blk34',
    '\u25A1': 'squ',
    '\u25AA': 'squf',
    '\u25AB': 'EmptyVerySmallSquare',
    '\u25AD': 'rect',
    '\u25AE': 'marker',
    '\u25B1': 'fltns',
    '\u25B3': 'xutri',
    '\u25B4': 'utrif',
    '\u25B5': 'utri',
    '\u25B8': 'rtrif',
    '\u25B9': 'rtri',
    '\u25BD': 'xdtri',
    '\u25BE': 'dtrif',
    '\u25BF': 'dtri',
    '\u25C2': 'ltrif',
    '\u25C3': 'ltri',
    '\u25CA': 'loz',
    '\u25CB': 'cir',
    '\u25EC': 'tridot',
    '\u25EF': 'xcirc',
    '\u25F8': 'ultri',
    '\u25F9': 'urtri',
    '\u25FA': 'lltri',
    '\u25FB': 'EmptySmallSquare',
    '\u25FC': 'FilledSmallSquare',
    '\u2605': 'starf',
    '\u2606': 'star',
    '\u260E': 'phone',
    '\u2640': 'female',
    '\u2642': 'male',
    '\u2660': 'spades',
    '\u2663': 'clubs',
    '\u2665': 'hearts',
    '\u2666': 'diams',
    '\u266A': 'sung',
    '\u2713': 'check',
    '\u2717': 'cross',
    '\u2720': 'malt',
    '\u2736': 'sext',
    '\u2758': 'VerticalSeparator',
    '\u27C8': 'bsolhsub',
    '\u27C9': 'suphsol',
    '\u27F5': 'xlarr',
    '\u27F6': 'xrarr',
    '\u27F7': 'xharr',
    '\u27F8': 'xlArr',
    '\u27F9': 'xrArr',
    '\u27FA': 'xhArr',
    '\u27FC': 'xmap',
    '\u27FF': 'dzigrarr',
    '\u2902': 'nvlArr',
    '\u2903': 'nvrArr',
    '\u2904': 'nvHarr',
    '\u2905': 'Map',
    '\u290C': 'lbarr',
    '\u290D': 'rbarr',
    '\u290E': 'lBarr',
    '\u290F': 'rBarr',
    '\u2910': 'RBarr',
    '\u2911': 'DDotrahd',
    '\u2912': 'UpArrowBar',
    '\u2913': 'DownArrowBar',
    '\u2916': 'Rarrtl',
    '\u2919': 'latail',
    '\u291A': 'ratail',
    '\u291B': 'lAtail',
    '\u291C': 'rAtail',
    '\u291D': 'larrfs',
    '\u291E': 'rarrfs',
    '\u291F': 'larrbfs',
    '\u2920': 'rarrbfs',
    '\u2923': 'nwarhk',
    '\u2924': 'nearhk',
    '\u2925': 'searhk',
    '\u2926': 'swarhk',
    '\u2927': 'nwnear',
    '\u2928': 'toea',
    '\u2929': 'tosa',
    '\u292A': 'swnwar',
    '\u2933': 'rarrc',
    '\u2933\u0338': 'nrarrc',
    '\u2935': 'cudarrr',
    '\u2936': 'ldca',
    '\u2937': 'rdca',
    '\u2938': 'cudarrl',
    '\u2939': 'larrpl',
    '\u293C': 'curarrm',
    '\u293D': 'cularrp',
    '\u2945': 'rarrpl',
    '\u2948': 'harrcir',
    '\u2949': 'Uarrocir',
    '\u294A': 'lurdshar',
    '\u294B': 'ldrushar',
    '\u294E': 'LeftRightVector',
    '\u294F': 'RightUpDownVector',
    '\u2950': 'DownLeftRightVector',
    '\u2951': 'LeftUpDownVector',
    '\u2952': 'LeftVectorBar',
    '\u2953': 'RightVectorBar',
    '\u2954': 'RightUpVectorBar',
    '\u2955': 'RightDownVectorBar',
    '\u2956': 'DownLeftVectorBar',
    '\u2957': 'DownRightVectorBar',
    '\u2958': 'LeftUpVectorBar',
    '\u2959': 'LeftDownVectorBar',
    '\u295A': 'LeftTeeVector',
    '\u295B': 'RightTeeVector',
    '\u295C': 'RightUpTeeVector',
    '\u295D': 'RightDownTeeVector',
    '\u295E': 'DownLeftTeeVector',
    '\u295F': 'DownRightTeeVector',
    '\u2960': 'LeftUpTeeVector',
    '\u2961': 'LeftDownTeeVector',
    '\u2962': 'lHar',
    '\u2963': 'uHar',
    '\u2964': 'rHar',
    '\u2965': 'dHar',
    '\u2966': 'luruhar',
    '\u2967': 'ldrdhar',
    '\u2968': 'ruluhar',
    '\u2969': 'rdldhar',
    '\u296A': 'lharul',
    '\u296B': 'llhard',
    '\u296C': 'rharul',
    '\u296D': 'lrhard',
    '\u296E': 'udhar',
    '\u296F': 'duhar',
    '\u2970': 'RoundImplies',
    '\u2971': 'erarr',
    '\u2972': 'simrarr',
    '\u2973': 'larrsim',
    '\u2974': 'rarrsim',
    '\u2975': 'rarrap',
    '\u2976': 'ltlarr',
    '\u2978': 'gtrarr',
    '\u2979': 'subrarr',
    '\u297B': 'suplarr',
    '\u297C': 'lfisht',
    '\u297D': 'rfisht',
    '\u297E': 'ufisht',
    '\u297F': 'dfisht',
    '\u299A': 'vzigzag',
    '\u299C': 'vangrt',
    '\u299D': 'angrtvbd',
    '\u29A4': 'ange',
    '\u29A5': 'range',
    '\u29A6': 'dwangle',
    '\u29A7': 'uwangle',
    '\u29A8': 'angmsdaa',
    '\u29A9': 'angmsdab',
    '\u29AA': 'angmsdac',
    '\u29AB': 'angmsdad',
    '\u29AC': 'angmsdae',
    '\u29AD': 'angmsdaf',
    '\u29AE': 'angmsdag',
    '\u29AF': 'angmsdah',
    '\u29B0': 'bemptyv',
    '\u29B1': 'demptyv',
    '\u29B2': 'cemptyv',
    '\u29B3': 'raemptyv',
    '\u29B4': 'laemptyv',
    '\u29B5': 'ohbar',
    '\u29B6': 'omid',
    '\u29B7': 'opar',
    '\u29B9': 'operp',
    '\u29BB': 'olcross',
    '\u29BC': 'odsold',
    '\u29BE': 'olcir',
    '\u29BF': 'ofcir',
    '\u29C0': 'olt',
    '\u29C1': 'ogt',
    '\u29C2': 'cirscir',
    '\u29C3': 'cirE',
    '\u29C4': 'solb',
    '\u29C5': 'bsolb',
    '\u29C9': 'boxbox',
    '\u29CD': 'trisb',
    '\u29CE': 'rtriltri',
    '\u29CF': 'LeftTriangleBar',
    '\u29CF\u0338': 'NotLeftTriangleBar',
    '\u29D0': 'RightTriangleBar',
    '\u29D0\u0338': 'NotRightTriangleBar',
    '\u29DC': 'iinfin',
    '\u29DD': 'infintie',
    '\u29DE': 'nvinfin',
    '\u29E3': 'eparsl',
    '\u29E4': 'smeparsl',
    '\u29E5': 'eqvparsl',
    '\u29EB': 'lozf',
    '\u29F4': 'RuleDelayed',
    '\u29F6': 'dsol',
    '\u2A00': 'xodot',
    '\u2A01': 'xoplus',
    '\u2A02': 'xotime',
    '\u2A04': 'xuplus',
    '\u2A06': 'xsqcup',
    '\u2A0D': 'fpartint',
    '\u2A10': 'cirfnint',
    '\u2A11': 'awint',
    '\u2A12': 'rppolint',
    '\u2A13': 'scpolint',
    '\u2A14': 'npolint',
    '\u2A15': 'pointint',
    '\u2A16': 'quatint',
    '\u2A17': 'intlarhk',
    '\u2A22': 'pluscir',
    '\u2A23': 'plusacir',
    '\u2A24': 'simplus',
    '\u2A25': 'plusdu',
    '\u2A26': 'plussim',
    '\u2A27': 'plustwo',
    '\u2A29': 'mcomma',
    '\u2A2A': 'minusdu',
    '\u2A2D': 'loplus',
    '\u2A2E': 'roplus',
    '\u2A2F': 'Cross',
    '\u2A30': 'timesd',
    '\u2A31': 'timesbar',
    '\u2A33': 'smashp',
    '\u2A34': 'lotimes',
    '\u2A35': 'rotimes',
    '\u2A36': 'otimesas',
    '\u2A37': 'Otimes',
    '\u2A38': 'odiv',
    '\u2A39': 'triplus',
    '\u2A3A': 'triminus',
    '\u2A3B': 'tritime',
    '\u2A3C': 'iprod',
    '\u2A3F': 'amalg',
    '\u2A40': 'capdot',
    '\u2A42': 'ncup',
    '\u2A43': 'ncap',
    '\u2A44': 'capand',
    '\u2A45': 'cupor',
    '\u2A46': 'cupcap',
    '\u2A47': 'capcup',
    '\u2A48': 'cupbrcap',
    '\u2A49': 'capbrcup',
    '\u2A4A': 'cupcup',
    '\u2A4B': 'capcap',
    '\u2A4C': 'ccups',
    '\u2A4D': 'ccaps',
    '\u2A50': 'ccupssm',
    '\u2A53': 'And',
    '\u2A54': 'Or',
    '\u2A55': 'andand',
    '\u2A56': 'oror',
    '\u2A57': 'orslope',
    '\u2A58': 'andslope',
    '\u2A5A': 'andv',
    '\u2A5B': 'orv',
    '\u2A5C': 'andd',
    '\u2A5D': 'ord',
    '\u2A5F': 'wedbar',
    '\u2A66': 'sdote',
    '\u2A6A': 'simdot',
    '\u2A6D': 'congdot',
    '\u2A6D\u0338': 'ncongdot',
    '\u2A6E': 'easter',
    '\u2A6F': 'apacir',
    '\u2A70': 'apE',
    '\u2A70\u0338': 'napE',
    '\u2A71': 'eplus',
    '\u2A72': 'pluse',
    '\u2A73': 'Esim',
    '\u2A77': 'eDDot',
    '\u2A78': 'equivDD',
    '\u2A79': 'ltcir',
    '\u2A7A': 'gtcir',
    '\u2A7B': 'ltquest',
    '\u2A7C': 'gtquest',
    '\u2A7D': 'les',
    '\u2A7D\u0338': 'nles',
    '\u2A7E': 'ges',
    '\u2A7E\u0338': 'nges',
    '\u2A7F': 'lesdot',
    '\u2A80': 'gesdot',
    '\u2A81': 'lesdoto',
    '\u2A82': 'gesdoto',
    '\u2A83': 'lesdotor',
    '\u2A84': 'gesdotol',
    '\u2A85': 'lap',
    '\u2A86': 'gap',
    '\u2A87': 'lne',
    '\u2A88': 'gne',
    '\u2A89': 'lnap',
    '\u2A8A': 'gnap',
    '\u2A8B': 'lEg',
    '\u2A8C': 'gEl',
    '\u2A8D': 'lsime',
    '\u2A8E': 'gsime',
    '\u2A8F': 'lsimg',
    '\u2A90': 'gsiml',
    '\u2A91': 'lgE',
    '\u2A92': 'glE',
    '\u2A93': 'lesges',
    '\u2A94': 'gesles',
    '\u2A95': 'els',
    '\u2A96': 'egs',
    '\u2A97': 'elsdot',
    '\u2A98': 'egsdot',
    '\u2A99': 'el',
    '\u2A9A': 'eg',
    '\u2A9D': 'siml',
    '\u2A9E': 'simg',
    '\u2A9F': 'simlE',
    '\u2AA0': 'simgE',
    '\u2AA1': 'LessLess',
    '\u2AA1\u0338': 'NotNestedLessLess',
    '\u2AA2': 'GreaterGreater',
    '\u2AA2\u0338': 'NotNestedGreaterGreater',
    '\u2AA4': 'glj',
    '\u2AA5': 'gla',
    '\u2AA6': 'ltcc',
    '\u2AA7': 'gtcc',
    '\u2AA8': 'lescc',
    '\u2AA9': 'gescc',
    '\u2AAA': 'smt',
    '\u2AAB': 'lat',
    '\u2AAC': 'smte',
    '\u2AAC\uFE00': 'smtes',
    '\u2AAD': 'late',
    '\u2AAD\uFE00': 'lates',
    '\u2AAE': 'bumpE',
    '\u2AAF': 'pre',
    '\u2AAF\u0338': 'npre',
    '\u2AB0': 'sce',
    '\u2AB0\u0338': 'nsce',
    '\u2AB3': 'prE',
    '\u2AB4': 'scE',
    '\u2AB5': 'prnE',
    '\u2AB6': 'scnE',
    '\u2AB7': 'prap',
    '\u2AB8': 'scap',
    '\u2AB9': 'prnap',
    '\u2ABA': 'scnap',
    '\u2ABB': 'Pr',
    '\u2ABC': 'Sc',
    '\u2ABD': 'subdot',
    '\u2ABE': 'supdot',
    '\u2ABF': 'subplus',
    '\u2AC0': 'supplus',
    '\u2AC1': 'submult',
    '\u2AC2': 'supmult',
    '\u2AC3': 'subedot',
    '\u2AC4': 'supedot',
    '\u2AC5': 'subE',
    '\u2AC5\u0338': 'nsubE',
    '\u2AC6': 'supE',
    '\u2AC6\u0338': 'nsupE',
    '\u2AC7': 'subsim',
    '\u2AC8': 'supsim',
    '\u2ACB\uFE00': 'vsubnE',
    '\u2ACB': 'subnE',
    '\u2ACC\uFE00': 'vsupnE',
    '\u2ACC': 'supnE',
    '\u2ACF': 'csub',
    '\u2AD0': 'csup',
    '\u2AD1': 'csube',
    '\u2AD2': 'csupe',
    '\u2AD3': 'subsup',
    '\u2AD4': 'supsub',
    '\u2AD5': 'subsub',
    '\u2AD6': 'supsup',
    '\u2AD7': 'suphsub',
    '\u2AD8': 'supdsub',
    '\u2AD9': 'forkv',
    '\u2ADA': 'topfork',
    '\u2ADB': 'mlcp',
    '\u2AE4': 'Dashv',
    '\u2AE6': 'Vdashl',
    '\u2AE7': 'Barv',
    '\u2AE8': 'vBar',
    '\u2AE9': 'vBarv',
    '\u2AEB': 'Vbar',
    '\u2AEC': 'Not',
    '\u2AED': 'bNot',
    '\u2AEE': 'rnmid',
    '\u2AEF': 'cirmid',
    '\u2AF0': 'midcir',
    '\u2AF1': 'topcir',
    '\u2AF2': 'nhpar',
    '\u2AF3': 'parsim',
    '\u2AFD': 'parsl',
    '\u2AFD\u20E5': 'nparsl',
    '\u266D': 'flat',
    '\u266E': 'natur',
    '\u266F': 'sharp',
    '\xA4': 'curren',
    '\xA2': 'cent',
    '$': 'dollar',
    '\xA3': 'pound',
    '\xA5': 'yen',
    '\u20AC': 'euro',
    '\xB9': 'sup1',
    '\xBD': 'half',
    '\u2153': 'frac13',
    '\xBC': 'frac14',
    '\u2155': 'frac15',
    '\u2159': 'frac16',
    '\u215B': 'frac18',
    '\xB2': 'sup2',
    '\u2154': 'frac23',
    '\u2156': 'frac25',
    '\xB3': 'sup3',
    '\xBE': 'frac34',
    '\u2157': 'frac35',
    '\u215C': 'frac38',
    '\u2158': 'frac45',
    '\u215A': 'frac56',
    '\u215D': 'frac58',
    '\u215E': 'frac78',
    '\uD835\uDCB6': 'ascr',
    '\uD835\uDD52': 'aopf',
    '\uD835\uDD1E': 'afr',
    '\uD835\uDD38': 'Aopf',
    '\uD835\uDD04': 'Afr',
    '\uD835\uDC9C': 'Ascr',
    '\xAA': 'ordf',
    '\xE1': 'aacute',
    '\xC1': 'Aacute',
    '\xE0': 'agrave',
    '\xC0': 'Agrave',
    '\u0103': 'abreve',
    '\u0102': 'Abreve',
    '\xE2': 'acirc',
    '\xC2': 'Acirc',
    '\xE5': 'aring',
    '\xC5': 'angst',
    '\xE4': 'auml',
    '\xC4': 'Auml',
    '\xE3': 'atilde',
    '\xC3': 'Atilde',
    '\u0105': 'aogon',
    '\u0104': 'Aogon',
    '\u0101': 'amacr',
    '\u0100': 'Amacr',
    '\xE6': 'aelig',
    '\xC6': 'AElig',
    '\uD835\uDCB7': 'bscr',
    '\uD835\uDD53': 'bopf',
    '\uD835\uDD1F': 'bfr',
    '\uD835\uDD39': 'Bopf',
    '\u212C': 'Bscr',
    '\uD835\uDD05': 'Bfr',
    '\uD835\uDD20': 'cfr',
    '\uD835\uDCB8': 'cscr',
    '\uD835\uDD54': 'copf',
    '\u212D': 'Cfr',
    '\uD835\uDC9E': 'Cscr',
    '\u2102': 'Copf',
    '\u0107': 'cacute',
    '\u0106': 'Cacute',
    '\u0109': 'ccirc',
    '\u0108': 'Ccirc',
    '\u010D': 'ccaron',
    '\u010C': 'Ccaron',
    '\u010B': 'cdot',
    '\u010A': 'Cdot',
    '\xE7': 'ccedil',
    '\xC7': 'Ccedil',
    '\u2105': 'incare',
    '\uD835\uDD21': 'dfr',
    '\u2146': 'dd',
    '\uD835\uDD55': 'dopf',
    '\uD835\uDCB9': 'dscr',
    '\uD835\uDC9F': 'Dscr',
    '\uD835\uDD07': 'Dfr',
    '\u2145': 'DD',
    '\uD835\uDD3B': 'Dopf',
    '\u010F': 'dcaron',
    '\u010E': 'Dcaron',
    '\u0111': 'dstrok',
    '\u0110': 'Dstrok',
    '\xF0': 'eth',
    '\xD0': 'ETH',
    '\u2147': 'ee',
    '\u212F': 'escr',
    '\uD835\uDD22': 'efr',
    '\uD835\uDD56': 'eopf',
    '\u2130': 'Escr',
    '\uD835\uDD08': 'Efr',
    '\uD835\uDD3C': 'Eopf',
    '\xE9': 'eacute',
    '\xC9': 'Eacute',
    '\xE8': 'egrave',
    '\xC8': 'Egrave',
    '\xEA': 'ecirc',
    '\xCA': 'Ecirc',
    '\u011B': 'ecaron',
    '\u011A': 'Ecaron',
    '\xEB': 'euml',
    '\xCB': 'Euml',
    '\u0117': 'edot',
    '\u0116': 'Edot',
    '\u0119': 'eogon',
    '\u0118': 'Eogon',
    '\u0113': 'emacr',
    '\u0112': 'Emacr',
    '\uD835\uDD23': 'ffr',
    '\uD835\uDD57': 'fopf',
    '\uD835\uDCBB': 'fscr',
    '\uD835\uDD09': 'Ffr',
    '\uD835\uDD3D': 'Fopf',
    '\u2131': 'Fscr',
    '\uFB00': 'fflig',
    '\uFB03': 'ffilig',
    '\uFB04': 'ffllig',
    '\uFB01': 'filig',
    'fj': 'fjlig',
    '\uFB02': 'fllig',
    '\u0192': 'fnof',
    '\u210A': 'gscr',
    '\uD835\uDD58': 'gopf',
    '\uD835\uDD24': 'gfr',
    '\uD835\uDCA2': 'Gscr',
    '\uD835\uDD3E': 'Gopf',
    '\uD835\uDD0A': 'Gfr',
    '\u01F5': 'gacute',
    '\u011F': 'gbreve',
    '\u011E': 'Gbreve',
    '\u011D': 'gcirc',
    '\u011C': 'Gcirc',
    '\u0121': 'gdot',
    '\u0120': 'Gdot',
    '\u0122': 'Gcedil',
    '\uD835\uDD25': 'hfr',
    '\u210E': 'planckh',
    '\uD835\uDCBD': 'hscr',
    '\uD835\uDD59': 'hopf',
    '\u210B': 'Hscr',
    '\u210C': 'Hfr',
    '\u210D': 'Hopf',
    '\u0125': 'hcirc',
    '\u0124': 'Hcirc',
    '\u210F': 'hbar',
    '\u0127': 'hstrok',
    '\u0126': 'Hstrok',
    '\uD835\uDD5A': 'iopf',
    '\uD835\uDD26': 'ifr',
    '\uD835\uDCBE': 'iscr',
    '\u2148': 'ii',
    '\uD835\uDD40': 'Iopf',
    '\u2110': 'Iscr',
    '\u2111': 'Im',
    '\xED': 'iacute',
    '\xCD': 'Iacute',
    '\xEC': 'igrave',
    '\xCC': 'Igrave',
    '\xEE': 'icirc',
    '\xCE': 'Icirc',
    '\xEF': 'iuml',
    '\xCF': 'Iuml',
    '\u0129': 'itilde',
    '\u0128': 'Itilde',
    '\u0130': 'Idot',
    '\u012F': 'iogon',
    '\u012E': 'Iogon',
    '\u012B': 'imacr',
    '\u012A': 'Imacr',
    '\u0133': 'ijlig',
    '\u0132': 'IJlig',
    '\u0131': 'imath',
    '\uD835\uDCBF': 'jscr',
    '\uD835\uDD5B': 'jopf',
    '\uD835\uDD27': 'jfr',
    '\uD835\uDCA5': 'Jscr',
    '\uD835\uDD0D': 'Jfr',
    '\uD835\uDD41': 'Jopf',
    '\u0135': 'jcirc',
    '\u0134': 'Jcirc',
    '\u0237': 'jmath',
    '\uD835\uDD5C': 'kopf',
    '\uD835\uDCC0': 'kscr',
    '\uD835\uDD28': 'kfr',
    '\uD835\uDCA6': 'Kscr',
    '\uD835\uDD42': 'Kopf',
    '\uD835\uDD0E': 'Kfr',
    '\u0137': 'kcedil',
    '\u0136': 'Kcedil',
    '\uD835\uDD29': 'lfr',
    '\uD835\uDCC1': 'lscr',
    '\u2113': 'ell',
    '\uD835\uDD5D': 'lopf',
    '\u2112': 'Lscr',
    '\uD835\uDD0F': 'Lfr',
    '\uD835\uDD43': 'Lopf',
    '\u013A': 'lacute',
    '\u0139': 'Lacute',
    '\u013E': 'lcaron',
    '\u013D': 'Lcaron',
    '\u013C': 'lcedil',
    '\u013B': 'Lcedil',
    '\u0142': 'lstrok',
    '\u0141': 'Lstrok',
    '\u0140': 'lmidot',
    '\u013F': 'Lmidot',
    '\uD835\uDD2A': 'mfr',
    '\uD835\uDD5E': 'mopf',
    '\uD835\uDCC2': 'mscr',
    '\uD835\uDD10': 'Mfr',
    '\uD835\uDD44': 'Mopf',
    '\u2133': 'Mscr',
    '\uD835\uDD2B': 'nfr',
    '\uD835\uDD5F': 'nopf',
    '\uD835\uDCC3': 'nscr',
    '\u2115': 'Nopf',
    '\uD835\uDCA9': 'Nscr',
    '\uD835\uDD11': 'Nfr',
    '\u0144': 'nacute',
    '\u0143': 'Nacute',
    '\u0148': 'ncaron',
    '\u0147': 'Ncaron',
    '\xF1': 'ntilde',
    '\xD1': 'Ntilde',
    '\u0146': 'ncedil',
    '\u0145': 'Ncedil',
    '\u2116': 'numero',
    '\u014B': 'eng',
    '\u014A': 'ENG',
    '\uD835\uDD60': 'oopf',
    '\uD835\uDD2C': 'ofr',
    '\u2134': 'oscr',
    '\uD835\uDCAA': 'Oscr',
    '\uD835\uDD12': 'Ofr',
    '\uD835\uDD46': 'Oopf',
    '\xBA': 'ordm',
    '\xF3': 'oacute',
    '\xD3': 'Oacute',
    '\xF2': 'ograve',
    '\xD2': 'Ograve',
    '\xF4': 'ocirc',
    '\xD4': 'Ocirc',
    '\xF6': 'ouml',
    '\xD6': 'Ouml',
    '\u0151': 'odblac',
    '\u0150': 'Odblac',
    '\xF5': 'otilde',
    '\xD5': 'Otilde',
    '\xF8': 'oslash',
    '\xD8': 'Oslash',
    '\u014D': 'omacr',
    '\u014C': 'Omacr',
    '\u0153': 'oelig',
    '\u0152': 'OElig',
    '\uD835\uDD2D': 'pfr',
    '\uD835\uDCC5': 'pscr',
    '\uD835\uDD61': 'popf',
    '\u2119': 'Popf',
    '\uD835\uDD13': 'Pfr',
    '\uD835\uDCAB': 'Pscr',
    '\uD835\uDD62': 'qopf',
    '\uD835\uDD2E': 'qfr',
    '\uD835\uDCC6': 'qscr',
    '\uD835\uDCAC': 'Qscr',
    '\uD835\uDD14': 'Qfr',
    '\u211A': 'Qopf',
    '\u0138': 'kgreen',
    '\uD835\uDD2F': 'rfr',
    '\uD835\uDD63': 'ropf',
    '\uD835\uDCC7': 'rscr',
    '\u211B': 'Rscr',
    '\u211C': 'Re',
    '\u211D': 'Ropf',
    '\u0155': 'racute',
    '\u0154': 'Racute',
    '\u0159': 'rcaron',
    '\u0158': 'Rcaron',
    '\u0157': 'rcedil',
    '\u0156': 'Rcedil',
    '\uD835\uDD64': 'sopf',
    '\uD835\uDCC8': 'sscr',
    '\uD835\uDD30': 'sfr',
    '\uD835\uDD4A': 'Sopf',
    '\uD835\uDD16': 'Sfr',
    '\uD835\uDCAE': 'Sscr',
    '\u24C8': 'oS',
    '\u015B': 'sacute',
    '\u015A': 'Sacute',
    '\u015D': 'scirc',
    '\u015C': 'Scirc',
    '\u0161': 'scaron',
    '\u0160': 'Scaron',
    '\u015F': 'scedil',
    '\u015E': 'Scedil',
    '\xDF': 'szlig',
    '\uD835\uDD31': 'tfr',
    '\uD835\uDCC9': 'tscr',
    '\uD835\uDD65': 'topf',
    '\uD835\uDCAF': 'Tscr',
    '\uD835\uDD17': 'Tfr',
    '\uD835\uDD4B': 'Topf',
    '\u0165': 'tcaron',
    '\u0164': 'Tcaron',
    '\u0163': 'tcedil',
    '\u0162': 'Tcedil',
    '\u2122': 'trade',
    '\u0167': 'tstrok',
    '\u0166': 'Tstrok',
    '\uD835\uDCCA': 'uscr',
    '\uD835\uDD66': 'uopf',
    '\uD835\uDD32': 'ufr',
    '\uD835\uDD4C': 'Uopf',
    '\uD835\uDD18': 'Ufr',
    '\uD835\uDCB0': 'Uscr',
    '\xFA': 'uacute',
    '\xDA': 'Uacute',
    '\xF9': 'ugrave',
    '\xD9': 'Ugrave',
    '\u016D': 'ubreve',
    '\u016C': 'Ubreve',
    '\xFB': 'ucirc',
    '\xDB': 'Ucirc',
    '\u016F': 'uring',
    '\u016E': 'Uring',
    '\xFC': 'uuml',
    '\xDC': 'Uuml',
    '\u0171': 'udblac',
    '\u0170': 'Udblac',
    '\u0169': 'utilde',
    '\u0168': 'Utilde',
    '\u0173': 'uogon',
    '\u0172': 'Uogon',
    '\u016B': 'umacr',
    '\u016A': 'Umacr',
    '\uD835\uDD33': 'vfr',
    '\uD835\uDD67': 'vopf',
    '\uD835\uDCCB': 'vscr',
    '\uD835\uDD19': 'Vfr',
    '\uD835\uDD4D': 'Vopf',
    '\uD835\uDCB1': 'Vscr',
    '\uD835\uDD68': 'wopf',
    '\uD835\uDCCC': 'wscr',
    '\uD835\uDD34': 'wfr',
    '\uD835\uDCB2': 'Wscr',
    '\uD835\uDD4E': 'Wopf',
    '\uD835\uDD1A': 'Wfr',
    '\u0175': 'wcirc',
    '\u0174': 'Wcirc',
    '\uD835\uDD35': 'xfr',
    '\uD835\uDCCD': 'xscr',
    '\uD835\uDD69': 'xopf',
    '\uD835\uDD4F': 'Xopf',
    '\uD835\uDD1B': 'Xfr',
    '\uD835\uDCB3': 'Xscr',
    '\uD835\uDD36': 'yfr',
    '\uD835\uDCCE': 'yscr',
    '\uD835\uDD6A': 'yopf',
    '\uD835\uDCB4': 'Yscr',
    '\uD835\uDD1C': 'Yfr',
    '\uD835\uDD50': 'Yopf',
    '\xFD': 'yacute',
    '\xDD': 'Yacute',
    '\u0177': 'ycirc',
    '\u0176': 'Ycirc',
    '\xFF': 'yuml',
    '\u0178': 'Yuml',
    '\uD835\uDCCF': 'zscr',
    '\uD835\uDD37': 'zfr',
    '\uD835\uDD6B': 'zopf',
    '\u2128': 'Zfr',
    '\u2124': 'Zopf',
    '\uD835\uDCB5': 'Zscr',
    '\u017A': 'zacute',
    '\u0179': 'Zacute',
    '\u017E': 'zcaron',
    '\u017D': 'Zcaron',
    '\u017C': 'zdot',
    '\u017B': 'Zdot',
    '\u01B5': 'imped',
    '\xFE': 'thorn',
    '\xDE': 'THORN',
    '\u0149': 'napos',
    '\u03B1': 'alpha',
    '\u0391': 'Alpha',
    '\u03B2': 'beta',
    '\u0392': 'Beta',
    '\u03B3': 'gamma',
    '\u0393': 'Gamma',
    '\u03B4': 'delta',
    '\u0394': 'Delta',
    '\u03B5': 'epsi',
    '\u03F5': 'epsiv',
    '\u0395': 'Epsilon',
    '\u03DD': 'gammad',
    '\u03DC': 'Gammad',
    '\u03B6': 'zeta',
    '\u0396': 'Zeta',
    '\u03B7': 'eta',
    '\u0397': 'Eta',
    '\u03B8': 'theta',
    '\u03D1': 'thetav',
    '\u0398': 'Theta',
    '\u03B9': 'iota',
    '\u0399': 'Iota',
    '\u03BA': 'kappa',
    '\u03F0': 'kappav',
    '\u039A': 'Kappa',
    '\u03BB': 'lambda',
    '\u039B': 'Lambda',
    '\u03BC': 'mu',
    '\xB5': 'micro',
    '\u039C': 'Mu',
    '\u03BD': 'nu',
    '\u039D': 'Nu',
    '\u03BE': 'xi',
    '\u039E': 'Xi',
    '\u03BF': 'omicron',
    '\u039F': 'Omicron',
    '\u03C0': 'pi',
    '\u03D6': 'piv',
    '\u03A0': 'Pi',
    '\u03C1': 'rho',
    '\u03F1': 'rhov',
    '\u03A1': 'Rho',
    '\u03C3': 'sigma',
    '\u03A3': 'Sigma',
    '\u03C2': 'sigmaf',
    '\u03C4': 'tau',
    '\u03A4': 'Tau',
    '\u03C5': 'upsi',
    '\u03A5': 'Upsilon',
    '\u03D2': 'Upsi',
    '\u03C6': 'phi',
    '\u03D5': 'phiv',
    '\u03A6': 'Phi',
    '\u03C7': 'chi',
    '\u03A7': 'Chi',
    '\u03C8': 'psi',
    '\u03A8': 'Psi',
    '\u03C9': 'omega',
    '\u03A9': 'ohm',
    '\u0430': 'acy',
    '\u0410': 'Acy',
    '\u0431': 'bcy',
    '\u0411': 'Bcy',
    '\u0432': 'vcy',
    '\u0412': 'Vcy',
    '\u0433': 'gcy',
    '\u0413': 'Gcy',
    '\u0453': 'gjcy',
    '\u0403': 'GJcy',
    '\u0434': 'dcy',
    '\u0414': 'Dcy',
    '\u0452': 'djcy',
    '\u0402': 'DJcy',
    '\u0435': 'iecy',
    '\u0415': 'IEcy',
    '\u0451': 'iocy',
    '\u0401': 'IOcy',
    '\u0454': 'jukcy',
    '\u0404': 'Jukcy',
    '\u0436': 'zhcy',
    '\u0416': 'ZHcy',
    '\u0437': 'zcy',
    '\u0417': 'Zcy',
    '\u0455': 'dscy',
    '\u0405': 'DScy',
    '\u0438': 'icy',
    '\u0418': 'Icy',
    '\u0456': 'iukcy',
    '\u0406': 'Iukcy',
    '\u0457': 'yicy',
    '\u0407': 'YIcy',
    '\u0439': 'jcy',
    '\u0419': 'Jcy',
    '\u0458': 'jsercy',
    '\u0408': 'Jsercy',
    '\u043A': 'kcy',
    '\u041A': 'Kcy',
    '\u045C': 'kjcy',
    '\u040C': 'KJcy',
    '\u043B': 'lcy',
    '\u041B': 'Lcy',
    '\u0459': 'ljcy',
    '\u0409': 'LJcy',
    '\u043C': 'mcy',
    '\u041C': 'Mcy',
    '\u043D': 'ncy',
    '\u041D': 'Ncy',
    '\u045A': 'njcy',
    '\u040A': 'NJcy',
    '\u043E': 'ocy',
    '\u041E': 'Ocy',
    '\u043F': 'pcy',
    '\u041F': 'Pcy',
    '\u0440': 'rcy',
    '\u0420': 'Rcy',
    '\u0441': 'scy',
    '\u0421': 'Scy',
    '\u0442': 'tcy',
    '\u0422': 'Tcy',
    '\u045B': 'tshcy',
    '\u040B': 'TSHcy',
    '\u0443': 'ucy',
    '\u0423': 'Ucy',
    '\u045E': 'ubrcy',
    '\u040E': 'Ubrcy',
    '\u0444': 'fcy',
    '\u0424': 'Fcy',
    '\u0445': 'khcy',
    '\u0425': 'KHcy',
    '\u0446': 'tscy',
    '\u0426': 'TScy',
    '\u0447': 'chcy',
    '\u0427': 'CHcy',
    '\u045F': 'dzcy',
    '\u040F': 'DZcy',
    '\u0448': 'shcy',
    '\u0428': 'SHcy',
    '\u0449': 'shchcy',
    '\u0429': 'SHCHcy',
    '\u044A': 'hardcy',
    '\u042A': 'HARDcy',
    '\u044B': 'ycy',
    '\u042B': 'Ycy',
    '\u044C': 'softcy',
    '\u042C': 'SOFTcy',
    '\u044D': 'ecy',
    '\u042D': 'Ecy',
    '\u044E': 'yucy',
    '\u042E': 'YUcy',
    '\u044F': 'yacy',
    '\u042F': 'YAcy',
    '\u2135': 'aleph',
    '\u2136': 'beth',
    '\u2137': 'gimel',
    '\u2138': 'daleth'
  };
  var regexEscape = /["&'<>`]/g;
  var escapeMap = {
    '"': '&quot;',
    '&': '&amp;',
    '\'': '&#x27;',
    '<': '&lt;',
    // See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
    // following is not strictly necessary unless it’s part of a tag or an
    // unquoted attribute value. We’re only escaping it to support those
    // situations, and for XML support.
    '>': '&gt;',
    // In Internet Explorer ≤ 8, the backtick character can be used
    // to break out of (un)quoted attribute values or HTML comments.
    // See http://html5sec.org/#102, http://html5sec.org/#108, and
    // http://html5sec.org/#133.
    '`': '&#x60;'
  };
  var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
  var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  var regexDecode = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g;
  var decodeMap = {
    'aacute': '\xE1',
    'Aacute': '\xC1',
    'abreve': '\u0103',
    'Abreve': '\u0102',
    'ac': '\u223E',
    'acd': '\u223F',
    'acE': '\u223E\u0333',
    'acirc': '\xE2',
    'Acirc': '\xC2',
    'acute': '\xB4',
    'acy': '\u0430',
    'Acy': '\u0410',
    'aelig': '\xE6',
    'AElig': '\xC6',
    'af': '\u2061',
    'afr': '\uD835\uDD1E',
    'Afr': '\uD835\uDD04',
    'agrave': '\xE0',
    'Agrave': '\xC0',
    'alefsym': '\u2135',
    'aleph': '\u2135',
    'alpha': '\u03B1',
    'Alpha': '\u0391',
    'amacr': '\u0101',
    'Amacr': '\u0100',
    'amalg': '\u2A3F',
    'amp': '&',
    'AMP': '&',
    'and': '\u2227',
    'And': '\u2A53',
    'andand': '\u2A55',
    'andd': '\u2A5C',
    'andslope': '\u2A58',
    'andv': '\u2A5A',
    'ang': '\u2220',
    'ange': '\u29A4',
    'angle': '\u2220',
    'angmsd': '\u2221',
    'angmsdaa': '\u29A8',
    'angmsdab': '\u29A9',
    'angmsdac': '\u29AA',
    'angmsdad': '\u29AB',
    'angmsdae': '\u29AC',
    'angmsdaf': '\u29AD',
    'angmsdag': '\u29AE',
    'angmsdah': '\u29AF',
    'angrt': '\u221F',
    'angrtvb': '\u22BE',
    'angrtvbd': '\u299D',
    'angsph': '\u2222',
    'angst': '\xC5',
    'angzarr': '\u237C',
    'aogon': '\u0105',
    'Aogon': '\u0104',
    'aopf': '\uD835\uDD52',
    'Aopf': '\uD835\uDD38',
    'ap': '\u2248',
    'apacir': '\u2A6F',
    'ape': '\u224A',
    'apE': '\u2A70',
    'apid': '\u224B',
    'apos': '\'',
    'ApplyFunction': '\u2061',
    'approx': '\u2248',
    'approxeq': '\u224A',
    'aring': '\xE5',
    'Aring': '\xC5',
    'ascr': '\uD835\uDCB6',
    'Ascr': '\uD835\uDC9C',
    'Assign': '\u2254',
    'ast': '*',
    'asymp': '\u2248',
    'asympeq': '\u224D',
    'atilde': '\xE3',
    'Atilde': '\xC3',
    'auml': '\xE4',
    'Auml': '\xC4',
    'awconint': '\u2233',
    'awint': '\u2A11',
    'backcong': '\u224C',
    'backepsilon': '\u03F6',
    'backprime': '\u2035',
    'backsim': '\u223D',
    'backsimeq': '\u22CD',
    'Backslash': '\u2216',
    'Barv': '\u2AE7',
    'barvee': '\u22BD',
    'barwed': '\u2305',
    'Barwed': '\u2306',
    'barwedge': '\u2305',
    'bbrk': '\u23B5',
    'bbrktbrk': '\u23B6',
    'bcong': '\u224C',
    'bcy': '\u0431',
    'Bcy': '\u0411',
    'bdquo': '\u201E',
    'becaus': '\u2235',
    'because': '\u2235',
    'Because': '\u2235',
    'bemptyv': '\u29B0',
    'bepsi': '\u03F6',
    'bernou': '\u212C',
    'Bernoullis': '\u212C',
    'beta': '\u03B2',
    'Beta': '\u0392',
    'beth': '\u2136',
    'between': '\u226C',
    'bfr': '\uD835\uDD1F',
    'Bfr': '\uD835\uDD05',
    'bigcap': '\u22C2',
    'bigcirc': '\u25EF',
    'bigcup': '\u22C3',
    'bigodot': '\u2A00',
    'bigoplus': '\u2A01',
    'bigotimes': '\u2A02',
    'bigsqcup': '\u2A06',
    'bigstar': '\u2605',
    'bigtriangledown': '\u25BD',
    'bigtriangleup': '\u25B3',
    'biguplus': '\u2A04',
    'bigvee': '\u22C1',
    'bigwedge': '\u22C0',
    'bkarow': '\u290D',
    'blacklozenge': '\u29EB',
    'blacksquare': '\u25AA',
    'blacktriangle': '\u25B4',
    'blacktriangledown': '\u25BE',
    'blacktriangleleft': '\u25C2',
    'blacktriangleright': '\u25B8',
    'blank': '\u2423',
    'blk12': '\u2592',
    'blk14': '\u2591',
    'blk34': '\u2593',
    'block': '\u2588',
    'bne': '=\u20E5',
    'bnequiv': '\u2261\u20E5',
    'bnot': '\u2310',
    'bNot': '\u2AED',
    'bopf': '\uD835\uDD53',
    'Bopf': '\uD835\uDD39',
    'bot': '\u22A5',
    'bottom': '\u22A5',
    'bowtie': '\u22C8',
    'boxbox': '\u29C9',
    'boxdl': '\u2510',
    'boxdL': '\u2555',
    'boxDl': '\u2556',
    'boxDL': '\u2557',
    'boxdr': '\u250C',
    'boxdR': '\u2552',
    'boxDr': '\u2553',
    'boxDR': '\u2554',
    'boxh': '\u2500',
    'boxH': '\u2550',
    'boxhd': '\u252C',
    'boxhD': '\u2565',
    'boxHd': '\u2564',
    'boxHD': '\u2566',
    'boxhu': '\u2534',
    'boxhU': '\u2568',
    'boxHu': '\u2567',
    'boxHU': '\u2569',
    'boxminus': '\u229F',
    'boxplus': '\u229E',
    'boxtimes': '\u22A0',
    'boxul': '\u2518',
    'boxuL': '\u255B',
    'boxUl': '\u255C',
    'boxUL': '\u255D',
    'boxur': '\u2514',
    'boxuR': '\u2558',
    'boxUr': '\u2559',
    'boxUR': '\u255A',
    'boxv': '\u2502',
    'boxV': '\u2551',
    'boxvh': '\u253C',
    'boxvH': '\u256A',
    'boxVh': '\u256B',
    'boxVH': '\u256C',
    'boxvl': '\u2524',
    'boxvL': '\u2561',
    'boxVl': '\u2562',
    'boxVL': '\u2563',
    'boxvr': '\u251C',
    'boxvR': '\u255E',
    'boxVr': '\u255F',
    'boxVR': '\u2560',
    'bprime': '\u2035',
    'breve': '\u02D8',
    'Breve': '\u02D8',
    'brvbar': '\xA6',
    'bscr': '\uD835\uDCB7',
    'Bscr': '\u212C',
    'bsemi': '\u204F',
    'bsim': '\u223D',
    'bsime': '\u22CD',
    'bsol': '\\',
    'bsolb': '\u29C5',
    'bsolhsub': '\u27C8',
    'bull': '\u2022',
    'bullet': '\u2022',
    'bump': '\u224E',
    'bumpe': '\u224F',
    'bumpE': '\u2AAE',
    'bumpeq': '\u224F',
    'Bumpeq': '\u224E',
    'cacute': '\u0107',
    'Cacute': '\u0106',
    'cap': '\u2229',
    'Cap': '\u22D2',
    'capand': '\u2A44',
    'capbrcup': '\u2A49',
    'capcap': '\u2A4B',
    'capcup': '\u2A47',
    'capdot': '\u2A40',
    'CapitalDifferentialD': '\u2145',
    'caps': '\u2229\uFE00',
    'caret': '\u2041',
    'caron': '\u02C7',
    'Cayleys': '\u212D',
    'ccaps': '\u2A4D',
    'ccaron': '\u010D',
    'Ccaron': '\u010C',
    'ccedil': '\xE7',
    'Ccedil': '\xC7',
    'ccirc': '\u0109',
    'Ccirc': '\u0108',
    'Cconint': '\u2230',
    'ccups': '\u2A4C',
    'ccupssm': '\u2A50',
    'cdot': '\u010B',
    'Cdot': '\u010A',
    'cedil': '\xB8',
    'Cedilla': '\xB8',
    'cemptyv': '\u29B2',
    'cent': '\xA2',
    'centerdot': '\xB7',
    'CenterDot': '\xB7',
    'cfr': '\uD835\uDD20',
    'Cfr': '\u212D',
    'chcy': '\u0447',
    'CHcy': '\u0427',
    'check': '\u2713',
    'checkmark': '\u2713',
    'chi': '\u03C7',
    'Chi': '\u03A7',
    'cir': '\u25CB',
    'circ': '\u02C6',
    'circeq': '\u2257',
    'circlearrowleft': '\u21BA',
    'circlearrowright': '\u21BB',
    'circledast': '\u229B',
    'circledcirc': '\u229A',
    'circleddash': '\u229D',
    'CircleDot': '\u2299',
    'circledR': '\xAE',
    'circledS': '\u24C8',
    'CircleMinus': '\u2296',
    'CirclePlus': '\u2295',
    'CircleTimes': '\u2297',
    'cire': '\u2257',
    'cirE': '\u29C3',
    'cirfnint': '\u2A10',
    'cirmid': '\u2AEF',
    'cirscir': '\u29C2',
    'ClockwiseContourIntegral': '\u2232',
    'CloseCurlyDoubleQuote': '\u201D',
    'CloseCurlyQuote': '\u2019',
    'clubs': '\u2663',
    'clubsuit': '\u2663',
    'colon': ':',
    'Colon': '\u2237',
    'colone': '\u2254',
    'Colone': '\u2A74',
    'coloneq': '\u2254',
    'comma': ',',
    'commat': '@',
    'comp': '\u2201',
    'compfn': '\u2218',
    'complement': '\u2201',
    'complexes': '\u2102',
    'cong': '\u2245',
    'congdot': '\u2A6D',
    'Congruent': '\u2261',
    'conint': '\u222E',
    'Conint': '\u222F',
    'ContourIntegral': '\u222E',
    'copf': '\uD835\uDD54',
    'Copf': '\u2102',
    'coprod': '\u2210',
    'Coproduct': '\u2210',
    'copy': '\xA9',
    'COPY': '\xA9',
    'copysr': '\u2117',
    'CounterClockwiseContourIntegral': '\u2233',
    'crarr': '\u21B5',
    'cross': '\u2717',
    'Cross': '\u2A2F',
    'cscr': '\uD835\uDCB8',
    'Cscr': '\uD835\uDC9E',
    'csub': '\u2ACF',
    'csube': '\u2AD1',
    'csup': '\u2AD0',
    'csupe': '\u2AD2',
    'ctdot': '\u22EF',
    'cudarrl': '\u2938',
    'cudarrr': '\u2935',
    'cuepr': '\u22DE',
    'cuesc': '\u22DF',
    'cularr': '\u21B6',
    'cularrp': '\u293D',
    'cup': '\u222A',
    'Cup': '\u22D3',
    'cupbrcap': '\u2A48',
    'cupcap': '\u2A46',
    'CupCap': '\u224D',
    'cupcup': '\u2A4A',
    'cupdot': '\u228D',
    'cupor': '\u2A45',
    'cups': '\u222A\uFE00',
    'curarr': '\u21B7',
    'curarrm': '\u293C',
    'curlyeqprec': '\u22DE',
    'curlyeqsucc': '\u22DF',
    'curlyvee': '\u22CE',
    'curlywedge': '\u22CF',
    'curren': '\xA4',
    'curvearrowleft': '\u21B6',
    'curvearrowright': '\u21B7',
    'cuvee': '\u22CE',
    'cuwed': '\u22CF',
    'cwconint': '\u2232',
    'cwint': '\u2231',
    'cylcty': '\u232D',
    'dagger': '\u2020',
    'Dagger': '\u2021',
    'daleth': '\u2138',
    'darr': '\u2193',
    'dArr': '\u21D3',
    'Darr': '\u21A1',
    'dash': '\u2010',
    'dashv': '\u22A3',
    'Dashv': '\u2AE4',
    'dbkarow': '\u290F',
    'dblac': '\u02DD',
    'dcaron': '\u010F',
    'Dcaron': '\u010E',
    'dcy': '\u0434',
    'Dcy': '\u0414',
    'dd': '\u2146',
    'DD': '\u2145',
    'ddagger': '\u2021',
    'ddarr': '\u21CA',
    'DDotrahd': '\u2911',
    'ddotseq': '\u2A77',
    'deg': '\xB0',
    'Del': '\u2207',
    'delta': '\u03B4',
    'Delta': '\u0394',
    'demptyv': '\u29B1',
    'dfisht': '\u297F',
    'dfr': '\uD835\uDD21',
    'Dfr': '\uD835\uDD07',
    'dHar': '\u2965',
    'dharl': '\u21C3',
    'dharr': '\u21C2',
    'DiacriticalAcute': '\xB4',
    'DiacriticalDot': '\u02D9',
    'DiacriticalDoubleAcute': '\u02DD',
    'DiacriticalGrave': '`',
    'DiacriticalTilde': '\u02DC',
    'diam': '\u22C4',
    'diamond': '\u22C4',
    'Diamond': '\u22C4',
    'diamondsuit': '\u2666',
    'diams': '\u2666',
    'die': '\xA8',
    'DifferentialD': '\u2146',
    'digamma': '\u03DD',
    'disin': '\u22F2',
    'div': '\xF7',
    'divide': '\xF7',
    'divideontimes': '\u22C7',
    'divonx': '\u22C7',
    'djcy': '\u0452',
    'DJcy': '\u0402',
    'dlcorn': '\u231E',
    'dlcrop': '\u230D',
    'dollar': '$',
    'dopf': '\uD835\uDD55',
    'Dopf': '\uD835\uDD3B',
    'dot': '\u02D9',
    'Dot': '\xA8',
    'DotDot': '\u20DC',
    'doteq': '\u2250',
    'doteqdot': '\u2251',
    'DotEqual': '\u2250',
    'dotminus': '\u2238',
    'dotplus': '\u2214',
    'dotsquare': '\u22A1',
    'doublebarwedge': '\u2306',
    'DoubleContourIntegral': '\u222F',
    'DoubleDot': '\xA8',
    'DoubleDownArrow': '\u21D3',
    'DoubleLeftArrow': '\u21D0',
    'DoubleLeftRightArrow': '\u21D4',
    'DoubleLeftTee': '\u2AE4',
    'DoubleLongLeftArrow': '\u27F8',
    'DoubleLongLeftRightArrow': '\u27FA',
    'DoubleLongRightArrow': '\u27F9',
    'DoubleRightArrow': '\u21D2',
    'DoubleRightTee': '\u22A8',
    'DoubleUpArrow': '\u21D1',
    'DoubleUpDownArrow': '\u21D5',
    'DoubleVerticalBar': '\u2225',
    'downarrow': '\u2193',
    'Downarrow': '\u21D3',
    'DownArrow': '\u2193',
    'DownArrowBar': '\u2913',
    'DownArrowUpArrow': '\u21F5',
    'DownBreve': '\u0311',
    'downdownarrows': '\u21CA',
    'downharpoonleft': '\u21C3',
    'downharpoonright': '\u21C2',
    'DownLeftRightVector': '\u2950',
    'DownLeftTeeVector': '\u295E',
    'DownLeftVector': '\u21BD',
    'DownLeftVectorBar': '\u2956',
    'DownRightTeeVector': '\u295F',
    'DownRightVector': '\u21C1',
    'DownRightVectorBar': '\u2957',
    'DownTee': '\u22A4',
    'DownTeeArrow': '\u21A7',
    'drbkarow': '\u2910',
    'drcorn': '\u231F',
    'drcrop': '\u230C',
    'dscr': '\uD835\uDCB9',
    'Dscr': '\uD835\uDC9F',
    'dscy': '\u0455',
    'DScy': '\u0405',
    'dsol': '\u29F6',
    'dstrok': '\u0111',
    'Dstrok': '\u0110',
    'dtdot': '\u22F1',
    'dtri': '\u25BF',
    'dtrif': '\u25BE',
    'duarr': '\u21F5',
    'duhar': '\u296F',
    'dwangle': '\u29A6',
    'dzcy': '\u045F',
    'DZcy': '\u040F',
    'dzigrarr': '\u27FF',
    'eacute': '\xE9',
    'Eacute': '\xC9',
    'easter': '\u2A6E',
    'ecaron': '\u011B',
    'Ecaron': '\u011A',
    'ecir': '\u2256',
    'ecirc': '\xEA',
    'Ecirc': '\xCA',
    'ecolon': '\u2255',
    'ecy': '\u044D',
    'Ecy': '\u042D',
    'eDDot': '\u2A77',
    'edot': '\u0117',
    'eDot': '\u2251',
    'Edot': '\u0116',
    'ee': '\u2147',
    'efDot': '\u2252',
    'efr': '\uD835\uDD22',
    'Efr': '\uD835\uDD08',
    'eg': '\u2A9A',
    'egrave': '\xE8',
    'Egrave': '\xC8',
    'egs': '\u2A96',
    'egsdot': '\u2A98',
    'el': '\u2A99',
    'Element': '\u2208',
    'elinters': '\u23E7',
    'ell': '\u2113',
    'els': '\u2A95',
    'elsdot': '\u2A97',
    'emacr': '\u0113',
    'Emacr': '\u0112',
    'empty': '\u2205',
    'emptyset': '\u2205',
    'EmptySmallSquare': '\u25FB',
    'emptyv': '\u2205',
    'EmptyVerySmallSquare': '\u25AB',
    'emsp': '\u2003',
    'emsp13': '\u2004',
    'emsp14': '\u2005',
    'eng': '\u014B',
    'ENG': '\u014A',
    'ensp': '\u2002',
    'eogon': '\u0119',
    'Eogon': '\u0118',
    'eopf': '\uD835\uDD56',
    'Eopf': '\uD835\uDD3C',
    'epar': '\u22D5',
    'eparsl': '\u29E3',
    'eplus': '\u2A71',
    'epsi': '\u03B5',
    'epsilon': '\u03B5',
    'Epsilon': '\u0395',
    'epsiv': '\u03F5',
    'eqcirc': '\u2256',
    'eqcolon': '\u2255',
    'eqsim': '\u2242',
    'eqslantgtr': '\u2A96',
    'eqslantless': '\u2A95',
    'Equal': '\u2A75',
    'equals': '=',
    'EqualTilde': '\u2242',
    'equest': '\u225F',
    'Equilibrium': '\u21CC',
    'equiv': '\u2261',
    'equivDD': '\u2A78',
    'eqvparsl': '\u29E5',
    'erarr': '\u2971',
    'erDot': '\u2253',
    'escr': '\u212F',
    'Escr': '\u2130',
    'esdot': '\u2250',
    'esim': '\u2242',
    'Esim': '\u2A73',
    'eta': '\u03B7',
    'Eta': '\u0397',
    'eth': '\xF0',
    'ETH': '\xD0',
    'euml': '\xEB',
    'Euml': '\xCB',
    'euro': '\u20AC',
    'excl': '!',
    'exist': '\u2203',
    'Exists': '\u2203',
    'expectation': '\u2130',
    'exponentiale': '\u2147',
    'ExponentialE': '\u2147',
    'fallingdotseq': '\u2252',
    'fcy': '\u0444',
    'Fcy': '\u0424',
    'female': '\u2640',
    'ffilig': '\uFB03',
    'fflig': '\uFB00',
    'ffllig': '\uFB04',
    'ffr': '\uD835\uDD23',
    'Ffr': '\uD835\uDD09',
    'filig': '\uFB01',
    'FilledSmallSquare': '\u25FC',
    'FilledVerySmallSquare': '\u25AA',
    'fjlig': 'fj',
    'flat': '\u266D',
    'fllig': '\uFB02',
    'fltns': '\u25B1',
    'fnof': '\u0192',
    'fopf': '\uD835\uDD57',
    'Fopf': '\uD835\uDD3D',
    'forall': '\u2200',
    'ForAll': '\u2200',
    'fork': '\u22D4',
    'forkv': '\u2AD9',
    'Fouriertrf': '\u2131',
    'fpartint': '\u2A0D',
    'frac12': '\xBD',
    'frac13': '\u2153',
    'frac14': '\xBC',
    'frac15': '\u2155',
    'frac16': '\u2159',
    'frac18': '\u215B',
    'frac23': '\u2154',
    'frac25': '\u2156',
    'frac34': '\xBE',
    'frac35': '\u2157',
    'frac38': '\u215C',
    'frac45': '\u2158',
    'frac56': '\u215A',
    'frac58': '\u215D',
    'frac78': '\u215E',
    'frasl': '\u2044',
    'frown': '\u2322',
    'fscr': '\uD835\uDCBB',
    'Fscr': '\u2131',
    'gacute': '\u01F5',
    'gamma': '\u03B3',
    'Gamma': '\u0393',
    'gammad': '\u03DD',
    'Gammad': '\u03DC',
    'gap': '\u2A86',
    'gbreve': '\u011F',
    'Gbreve': '\u011E',
    'Gcedil': '\u0122',
    'gcirc': '\u011D',
    'Gcirc': '\u011C',
    'gcy': '\u0433',
    'Gcy': '\u0413',
    'gdot': '\u0121',
    'Gdot': '\u0120',
    'ge': '\u2265',
    'gE': '\u2267',
    'gel': '\u22DB',
    'gEl': '\u2A8C',
    'geq': '\u2265',
    'geqq': '\u2267',
    'geqslant': '\u2A7E',
    'ges': '\u2A7E',
    'gescc': '\u2AA9',
    'gesdot': '\u2A80',
    'gesdoto': '\u2A82',
    'gesdotol': '\u2A84',
    'gesl': '\u22DB\uFE00',
    'gesles': '\u2A94',
    'gfr': '\uD835\uDD24',
    'Gfr': '\uD835\uDD0A',
    'gg': '\u226B',
    'Gg': '\u22D9',
    'ggg': '\u22D9',
    'gimel': '\u2137',
    'gjcy': '\u0453',
    'GJcy': '\u0403',
    'gl': '\u2277',
    'gla': '\u2AA5',
    'glE': '\u2A92',
    'glj': '\u2AA4',
    'gnap': '\u2A8A',
    'gnapprox': '\u2A8A',
    'gne': '\u2A88',
    'gnE': '\u2269',
    'gneq': '\u2A88',
    'gneqq': '\u2269',
    'gnsim': '\u22E7',
    'gopf': '\uD835\uDD58',
    'Gopf': '\uD835\uDD3E',
    'grave': '`',
    'GreaterEqual': '\u2265',
    'GreaterEqualLess': '\u22DB',
    'GreaterFullEqual': '\u2267',
    'GreaterGreater': '\u2AA2',
    'GreaterLess': '\u2277',
    'GreaterSlantEqual': '\u2A7E',
    'GreaterTilde': '\u2273',
    'gscr': '\u210A',
    'Gscr': '\uD835\uDCA2',
    'gsim': '\u2273',
    'gsime': '\u2A8E',
    'gsiml': '\u2A90',
    'gt': '>',
    'Gt': '\u226B',
    'GT': '>',
    'gtcc': '\u2AA7',
    'gtcir': '\u2A7A',
    'gtdot': '\u22D7',
    'gtlPar': '\u2995',
    'gtquest': '\u2A7C',
    'gtrapprox': '\u2A86',
    'gtrarr': '\u2978',
    'gtrdot': '\u22D7',
    'gtreqless': '\u22DB',
    'gtreqqless': '\u2A8C',
    'gtrless': '\u2277',
    'gtrsim': '\u2273',
    'gvertneqq': '\u2269\uFE00',
    'gvnE': '\u2269\uFE00',
    'Hacek': '\u02C7',
    'hairsp': '\u200A',
    'half': '\xBD',
    'hamilt': '\u210B',
    'hardcy': '\u044A',
    'HARDcy': '\u042A',
    'harr': '\u2194',
    'hArr': '\u21D4',
    'harrcir': '\u2948',
    'harrw': '\u21AD',
    'Hat': '^',
    'hbar': '\u210F',
    'hcirc': '\u0125',
    'Hcirc': '\u0124',
    'hearts': '\u2665',
    'heartsuit': '\u2665',
    'hellip': '\u2026',
    'hercon': '\u22B9',
    'hfr': '\uD835\uDD25',
    'Hfr': '\u210C',
    'HilbertSpace': '\u210B',
    'hksearow': '\u2925',
    'hkswarow': '\u2926',
    'hoarr': '\u21FF',
    'homtht': '\u223B',
    'hookleftarrow': '\u21A9',
    'hookrightarrow': '\u21AA',
    'hopf': '\uD835\uDD59',
    'Hopf': '\u210D',
    'horbar': '\u2015',
    'HorizontalLine': '\u2500',
    'hscr': '\uD835\uDCBD',
    'Hscr': '\u210B',
    'hslash': '\u210F',
    'hstrok': '\u0127',
    'Hstrok': '\u0126',
    'HumpDownHump': '\u224E',
    'HumpEqual': '\u224F',
    'hybull': '\u2043',
    'hyphen': '\u2010',
    'iacute': '\xED',
    'Iacute': '\xCD',
    'ic': '\u2063',
    'icirc': '\xEE',
    'Icirc': '\xCE',
    'icy': '\u0438',
    'Icy': '\u0418',
    'Idot': '\u0130',
    'iecy': '\u0435',
    'IEcy': '\u0415',
    'iexcl': '\xA1',
    'iff': '\u21D4',
    'ifr': '\uD835\uDD26',
    'Ifr': '\u2111',
    'igrave': '\xEC',
    'Igrave': '\xCC',
    'ii': '\u2148',
    'iiiint': '\u2A0C',
    'iiint': '\u222D',
    'iinfin': '\u29DC',
    'iiota': '\u2129',
    'ijlig': '\u0133',
    'IJlig': '\u0132',
    'Im': '\u2111',
    'imacr': '\u012B',
    'Imacr': '\u012A',
    'image': '\u2111',
    'ImaginaryI': '\u2148',
    'imagline': '\u2110',
    'imagpart': '\u2111',
    'imath': '\u0131',
    'imof': '\u22B7',
    'imped': '\u01B5',
    'Implies': '\u21D2',
    'in': '\u2208',
    'incare': '\u2105',
    'infin': '\u221E',
    'infintie': '\u29DD',
    'inodot': '\u0131',
    'int': '\u222B',
    'Int': '\u222C',
    'intcal': '\u22BA',
    'integers': '\u2124',
    'Integral': '\u222B',
    'intercal': '\u22BA',
    'Intersection': '\u22C2',
    'intlarhk': '\u2A17',
    'intprod': '\u2A3C',
    'InvisibleComma': '\u2063',
    'InvisibleTimes': '\u2062',
    'iocy': '\u0451',
    'IOcy': '\u0401',
    'iogon': '\u012F',
    'Iogon': '\u012E',
    'iopf': '\uD835\uDD5A',
    'Iopf': '\uD835\uDD40',
    'iota': '\u03B9',
    'Iota': '\u0399',
    'iprod': '\u2A3C',
    'iquest': '\xBF',
    'iscr': '\uD835\uDCBE',
    'Iscr': '\u2110',
    'isin': '\u2208',
    'isindot': '\u22F5',
    'isinE': '\u22F9',
    'isins': '\u22F4',
    'isinsv': '\u22F3',
    'isinv': '\u2208',
    'it': '\u2062',
    'itilde': '\u0129',
    'Itilde': '\u0128',
    'iukcy': '\u0456',
    'Iukcy': '\u0406',
    'iuml': '\xEF',
    'Iuml': '\xCF',
    'jcirc': '\u0135',
    'Jcirc': '\u0134',
    'jcy': '\u0439',
    'Jcy': '\u0419',
    'jfr': '\uD835\uDD27',
    'Jfr': '\uD835\uDD0D',
    'jmath': '\u0237',
    'jopf': '\uD835\uDD5B',
    'Jopf': '\uD835\uDD41',
    'jscr': '\uD835\uDCBF',
    'Jscr': '\uD835\uDCA5',
    'jsercy': '\u0458',
    'Jsercy': '\u0408',
    'jukcy': '\u0454',
    'Jukcy': '\u0404',
    'kappa': '\u03BA',
    'Kappa': '\u039A',
    'kappav': '\u03F0',
    'kcedil': '\u0137',
    'Kcedil': '\u0136',
    'kcy': '\u043A',
    'Kcy': '\u041A',
    'kfr': '\uD835\uDD28',
    'Kfr': '\uD835\uDD0E',
    'kgreen': '\u0138',
    'khcy': '\u0445',
    'KHcy': '\u0425',
    'kjcy': '\u045C',
    'KJcy': '\u040C',
    'kopf': '\uD835\uDD5C',
    'Kopf': '\uD835\uDD42',
    'kscr': '\uD835\uDCC0',
    'Kscr': '\uD835\uDCA6',
    'lAarr': '\u21DA',
    'lacute': '\u013A',
    'Lacute': '\u0139',
    'laemptyv': '\u29B4',
    'lagran': '\u2112',
    'lambda': '\u03BB',
    'Lambda': '\u039B',
    'lang': '\u27E8',
    'Lang': '\u27EA',
    'langd': '\u2991',
    'langle': '\u27E8',
    'lap': '\u2A85',
    'Laplacetrf': '\u2112',
    'laquo': '\xAB',
    'larr': '\u2190',
    'lArr': '\u21D0',
    'Larr': '\u219E',
    'larrb': '\u21E4',
    'larrbfs': '\u291F',
    'larrfs': '\u291D',
    'larrhk': '\u21A9',
    'larrlp': '\u21AB',
    'larrpl': '\u2939',
    'larrsim': '\u2973',
    'larrtl': '\u21A2',
    'lat': '\u2AAB',
    'latail': '\u2919',
    'lAtail': '\u291B',
    'late': '\u2AAD',
    'lates': '\u2AAD\uFE00',
    'lbarr': '\u290C',
    'lBarr': '\u290E',
    'lbbrk': '\u2772',
    'lbrace': '{',
    'lbrack': '[',
    'lbrke': '\u298B',
    'lbrksld': '\u298F',
    'lbrkslu': '\u298D',
    'lcaron': '\u013E',
    'Lcaron': '\u013D',
    'lcedil': '\u013C',
    'Lcedil': '\u013B',
    'lceil': '\u2308',
    'lcub': '{',
    'lcy': '\u043B',
    'Lcy': '\u041B',
    'ldca': '\u2936',
    'ldquo': '\u201C',
    'ldquor': '\u201E',
    'ldrdhar': '\u2967',
    'ldrushar': '\u294B',
    'ldsh': '\u21B2',
    'le': '\u2264',
    'lE': '\u2266',
    'LeftAngleBracket': '\u27E8',
    'leftarrow': '\u2190',
    'Leftarrow': '\u21D0',
    'LeftArrow': '\u2190',
    'LeftArrowBar': '\u21E4',
    'LeftArrowRightArrow': '\u21C6',
    'leftarrowtail': '\u21A2',
    'LeftCeiling': '\u2308',
    'LeftDoubleBracket': '\u27E6',
    'LeftDownTeeVector': '\u2961',
    'LeftDownVector': '\u21C3',
    'LeftDownVectorBar': '\u2959',
    'LeftFloor': '\u230A',
    'leftharpoondown': '\u21BD',
    'leftharpoonup': '\u21BC',
    'leftleftarrows': '\u21C7',
    'leftrightarrow': '\u2194',
    'Leftrightarrow': '\u21D4',
    'LeftRightArrow': '\u2194',
    'leftrightarrows': '\u21C6',
    'leftrightharpoons': '\u21CB',
    'leftrightsquigarrow': '\u21AD',
    'LeftRightVector': '\u294E',
    'LeftTee': '\u22A3',
    'LeftTeeArrow': '\u21A4',
    'LeftTeeVector': '\u295A',
    'leftthreetimes': '\u22CB',
    'LeftTriangle': '\u22B2',
    'LeftTriangleBar': '\u29CF',
    'LeftTriangleEqual': '\u22B4',
    'LeftUpDownVector': '\u2951',
    'LeftUpTeeVector': '\u2960',
    'LeftUpVector': '\u21BF',
    'LeftUpVectorBar': '\u2958',
    'LeftVector': '\u21BC',
    'LeftVectorBar': '\u2952',
    'leg': '\u22DA',
    'lEg': '\u2A8B',
    'leq': '\u2264',
    'leqq': '\u2266',
    'leqslant': '\u2A7D',
    'les': '\u2A7D',
    'lescc': '\u2AA8',
    'lesdot': '\u2A7F',
    'lesdoto': '\u2A81',
    'lesdotor': '\u2A83',
    'lesg': '\u22DA\uFE00',
    'lesges': '\u2A93',
    'lessapprox': '\u2A85',
    'lessdot': '\u22D6',
    'lesseqgtr': '\u22DA',
    'lesseqqgtr': '\u2A8B',
    'LessEqualGreater': '\u22DA',
    'LessFullEqual': '\u2266',
    'LessGreater': '\u2276',
    'lessgtr': '\u2276',
    'LessLess': '\u2AA1',
    'lesssim': '\u2272',
    'LessSlantEqual': '\u2A7D',
    'LessTilde': '\u2272',
    'lfisht': '\u297C',
    'lfloor': '\u230A',
    'lfr': '\uD835\uDD29',
    'Lfr': '\uD835\uDD0F',
    'lg': '\u2276',
    'lgE': '\u2A91',
    'lHar': '\u2962',
    'lhard': '\u21BD',
    'lharu': '\u21BC',
    'lharul': '\u296A',
    'lhblk': '\u2584',
    'ljcy': '\u0459',
    'LJcy': '\u0409',
    'll': '\u226A',
    'Ll': '\u22D8',
    'llarr': '\u21C7',
    'llcorner': '\u231E',
    'Lleftarrow': '\u21DA',
    'llhard': '\u296B',
    'lltri': '\u25FA',
    'lmidot': '\u0140',
    'Lmidot': '\u013F',
    'lmoust': '\u23B0',
    'lmoustache': '\u23B0',
    'lnap': '\u2A89',
    'lnapprox': '\u2A89',
    'lne': '\u2A87',
    'lnE': '\u2268',
    'lneq': '\u2A87',
    'lneqq': '\u2268',
    'lnsim': '\u22E6',
    'loang': '\u27EC',
    'loarr': '\u21FD',
    'lobrk': '\u27E6',
    'longleftarrow': '\u27F5',
    'Longleftarrow': '\u27F8',
    'LongLeftArrow': '\u27F5',
    'longleftrightarrow': '\u27F7',
    'Longleftrightarrow': '\u27FA',
    'LongLeftRightArrow': '\u27F7',
    'longmapsto': '\u27FC',
    'longrightarrow': '\u27F6',
    'Longrightarrow': '\u27F9',
    'LongRightArrow': '\u27F6',
    'looparrowleft': '\u21AB',
    'looparrowright': '\u21AC',
    'lopar': '\u2985',
    'lopf': '\uD835\uDD5D',
    'Lopf': '\uD835\uDD43',
    'loplus': '\u2A2D',
    'lotimes': '\u2A34',
    'lowast': '\u2217',
    'lowbar': '_',
    'LowerLeftArrow': '\u2199',
    'LowerRightArrow': '\u2198',
    'loz': '\u25CA',
    'lozenge': '\u25CA',
    'lozf': '\u29EB',
    'lpar': '(',
    'lparlt': '\u2993',
    'lrarr': '\u21C6',
    'lrcorner': '\u231F',
    'lrhar': '\u21CB',
    'lrhard': '\u296D',
    'lrm': '\u200E',
    'lrtri': '\u22BF',
    'lsaquo': '\u2039',
    'lscr': '\uD835\uDCC1',
    'Lscr': '\u2112',
    'lsh': '\u21B0',
    'Lsh': '\u21B0',
    'lsim': '\u2272',
    'lsime': '\u2A8D',
    'lsimg': '\u2A8F',
    'lsqb': '[',
    'lsquo': '\u2018',
    'lsquor': '\u201A',
    'lstrok': '\u0142',
    'Lstrok': '\u0141',
    'lt': '<',
    'Lt': '\u226A',
    'LT': '<',
    'ltcc': '\u2AA6',
    'ltcir': '\u2A79',
    'ltdot': '\u22D6',
    'lthree': '\u22CB',
    'ltimes': '\u22C9',
    'ltlarr': '\u2976',
    'ltquest': '\u2A7B',
    'ltri': '\u25C3',
    'ltrie': '\u22B4',
    'ltrif': '\u25C2',
    'ltrPar': '\u2996',
    'lurdshar': '\u294A',
    'luruhar': '\u2966',
    'lvertneqq': '\u2268\uFE00',
    'lvnE': '\u2268\uFE00',
    'macr': '\xAF',
    'male': '\u2642',
    'malt': '\u2720',
    'maltese': '\u2720',
    'map': '\u21A6',
    'Map': '\u2905',
    'mapsto': '\u21A6',
    'mapstodown': '\u21A7',
    'mapstoleft': '\u21A4',
    'mapstoup': '\u21A5',
    'marker': '\u25AE',
    'mcomma': '\u2A29',
    'mcy': '\u043C',
    'Mcy': '\u041C',
    'mdash': '\u2014',
    'mDDot': '\u223A',
    'measuredangle': '\u2221',
    'MediumSpace': '\u205F',
    'Mellintrf': '\u2133',
    'mfr': '\uD835\uDD2A',
    'Mfr': '\uD835\uDD10',
    'mho': '\u2127',
    'micro': '\xB5',
    'mid': '\u2223',
    'midast': '*',
    'midcir': '\u2AF0',
    'middot': '\xB7',
    'minus': '\u2212',
    'minusb': '\u229F',
    'minusd': '\u2238',
    'minusdu': '\u2A2A',
    'MinusPlus': '\u2213',
    'mlcp': '\u2ADB',
    'mldr': '\u2026',
    'mnplus': '\u2213',
    'models': '\u22A7',
    'mopf': '\uD835\uDD5E',
    'Mopf': '\uD835\uDD44',
    'mp': '\u2213',
    'mscr': '\uD835\uDCC2',
    'Mscr': '\u2133',
    'mstpos': '\u223E',
    'mu': '\u03BC',
    'Mu': '\u039C',
    'multimap': '\u22B8',
    'mumap': '\u22B8',
    'nabla': '\u2207',
    'nacute': '\u0144',
    'Nacute': '\u0143',
    'nang': '\u2220\u20D2',
    'nap': '\u2249',
    'napE': '\u2A70\u0338',
    'napid': '\u224B\u0338',
    'napos': '\u0149',
    'napprox': '\u2249',
    'natur': '\u266E',
    'natural': '\u266E',
    'naturals': '\u2115',
    'nbsp': '\xA0',
    'nbump': '\u224E\u0338',
    'nbumpe': '\u224F\u0338',
    'ncap': '\u2A43',
    'ncaron': '\u0148',
    'Ncaron': '\u0147',
    'ncedil': '\u0146',
    'Ncedil': '\u0145',
    'ncong': '\u2247',
    'ncongdot': '\u2A6D\u0338',
    'ncup': '\u2A42',
    'ncy': '\u043D',
    'Ncy': '\u041D',
    'ndash': '\u2013',
    'ne': '\u2260',
    'nearhk': '\u2924',
    'nearr': '\u2197',
    'neArr': '\u21D7',
    'nearrow': '\u2197',
    'nedot': '\u2250\u0338',
    'NegativeMediumSpace': '\u200B',
    'NegativeThickSpace': '\u200B',
    'NegativeThinSpace': '\u200B',
    'NegativeVeryThinSpace': '\u200B',
    'nequiv': '\u2262',
    'nesear': '\u2928',
    'nesim': '\u2242\u0338',
    'NestedGreaterGreater': '\u226B',
    'NestedLessLess': '\u226A',
    'NewLine': '\n',
    'nexist': '\u2204',
    'nexists': '\u2204',
    'nfr': '\uD835\uDD2B',
    'Nfr': '\uD835\uDD11',
    'nge': '\u2271',
    'ngE': '\u2267\u0338',
    'ngeq': '\u2271',
    'ngeqq': '\u2267\u0338',
    'ngeqslant': '\u2A7E\u0338',
    'nges': '\u2A7E\u0338',
    'nGg': '\u22D9\u0338',
    'ngsim': '\u2275',
    'ngt': '\u226F',
    'nGt': '\u226B\u20D2',
    'ngtr': '\u226F',
    'nGtv': '\u226B\u0338',
    'nharr': '\u21AE',
    'nhArr': '\u21CE',
    'nhpar': '\u2AF2',
    'ni': '\u220B',
    'nis': '\u22FC',
    'nisd': '\u22FA',
    'niv': '\u220B',
    'njcy': '\u045A',
    'NJcy': '\u040A',
    'nlarr': '\u219A',
    'nlArr': '\u21CD',
    'nldr': '\u2025',
    'nle': '\u2270',
    'nlE': '\u2266\u0338',
    'nleftarrow': '\u219A',
    'nLeftarrow': '\u21CD',
    'nleftrightarrow': '\u21AE',
    'nLeftrightarrow': '\u21CE',
    'nleq': '\u2270',
    'nleqq': '\u2266\u0338',
    'nleqslant': '\u2A7D\u0338',
    'nles': '\u2A7D\u0338',
    'nless': '\u226E',
    'nLl': '\u22D8\u0338',
    'nlsim': '\u2274',
    'nlt': '\u226E',
    'nLt': '\u226A\u20D2',
    'nltri': '\u22EA',
    'nltrie': '\u22EC',
    'nLtv': '\u226A\u0338',
    'nmid': '\u2224',
    'NoBreak': '\u2060',
    'NonBreakingSpace': '\xA0',
    'nopf': '\uD835\uDD5F',
    'Nopf': '\u2115',
    'not': '\xAC',
    'Not': '\u2AEC',
    'NotCongruent': '\u2262',
    'NotCupCap': '\u226D',
    'NotDoubleVerticalBar': '\u2226',
    'NotElement': '\u2209',
    'NotEqual': '\u2260',
    'NotEqualTilde': '\u2242\u0338',
    'NotExists': '\u2204',
    'NotGreater': '\u226F',
    'NotGreaterEqual': '\u2271',
    'NotGreaterFullEqual': '\u2267\u0338',
    'NotGreaterGreater': '\u226B\u0338',
    'NotGreaterLess': '\u2279',
    'NotGreaterSlantEqual': '\u2A7E\u0338',
    'NotGreaterTilde': '\u2275',
    'NotHumpDownHump': '\u224E\u0338',
    'NotHumpEqual': '\u224F\u0338',
    'notin': '\u2209',
    'notindot': '\u22F5\u0338',
    'notinE': '\u22F9\u0338',
    'notinva': '\u2209',
    'notinvb': '\u22F7',
    'notinvc': '\u22F6',
    'NotLeftTriangle': '\u22EA',
    'NotLeftTriangleBar': '\u29CF\u0338',
    'NotLeftTriangleEqual': '\u22EC',
    'NotLess': '\u226E',
    'NotLessEqual': '\u2270',
    'NotLessGreater': '\u2278',
    'NotLessLess': '\u226A\u0338',
    'NotLessSlantEqual': '\u2A7D\u0338',
    'NotLessTilde': '\u2274',
    'NotNestedGreaterGreater': '\u2AA2\u0338',
    'NotNestedLessLess': '\u2AA1\u0338',
    'notni': '\u220C',
    'notniva': '\u220C',
    'notnivb': '\u22FE',
    'notnivc': '\u22FD',
    'NotPrecedes': '\u2280',
    'NotPrecedesEqual': '\u2AAF\u0338',
    'NotPrecedesSlantEqual': '\u22E0',
    'NotReverseElement': '\u220C',
    'NotRightTriangle': '\u22EB',
    'NotRightTriangleBar': '\u29D0\u0338',
    'NotRightTriangleEqual': '\u22ED',
    'NotSquareSubset': '\u228F\u0338',
    'NotSquareSubsetEqual': '\u22E2',
    'NotSquareSuperset': '\u2290\u0338',
    'NotSquareSupersetEqual': '\u22E3',
    'NotSubset': '\u2282\u20D2',
    'NotSubsetEqual': '\u2288',
    'NotSucceeds': '\u2281',
    'NotSucceedsEqual': '\u2AB0\u0338',
    'NotSucceedsSlantEqual': '\u22E1',
    'NotSucceedsTilde': '\u227F\u0338',
    'NotSuperset': '\u2283\u20D2',
    'NotSupersetEqual': '\u2289',
    'NotTilde': '\u2241',
    'NotTildeEqual': '\u2244',
    'NotTildeFullEqual': '\u2247',
    'NotTildeTilde': '\u2249',
    'NotVerticalBar': '\u2224',
    'npar': '\u2226',
    'nparallel': '\u2226',
    'nparsl': '\u2AFD\u20E5',
    'npart': '\u2202\u0338',
    'npolint': '\u2A14',
    'npr': '\u2280',
    'nprcue': '\u22E0',
    'npre': '\u2AAF\u0338',
    'nprec': '\u2280',
    'npreceq': '\u2AAF\u0338',
    'nrarr': '\u219B',
    'nrArr': '\u21CF',
    'nrarrc': '\u2933\u0338',
    'nrarrw': '\u219D\u0338',
    'nrightarrow': '\u219B',
    'nRightarrow': '\u21CF',
    'nrtri': '\u22EB',
    'nrtrie': '\u22ED',
    'nsc': '\u2281',
    'nsccue': '\u22E1',
    'nsce': '\u2AB0\u0338',
    'nscr': '\uD835\uDCC3',
    'Nscr': '\uD835\uDCA9',
    'nshortmid': '\u2224',
    'nshortparallel': '\u2226',
    'nsim': '\u2241',
    'nsime': '\u2244',
    'nsimeq': '\u2244',
    'nsmid': '\u2224',
    'nspar': '\u2226',
    'nsqsube': '\u22E2',
    'nsqsupe': '\u22E3',
    'nsub': '\u2284',
    'nsube': '\u2288',
    'nsubE': '\u2AC5\u0338',
    'nsubset': '\u2282\u20D2',
    'nsubseteq': '\u2288',
    'nsubseteqq': '\u2AC5\u0338',
    'nsucc': '\u2281',
    'nsucceq': '\u2AB0\u0338',
    'nsup': '\u2285',
    'nsupe': '\u2289',
    'nsupE': '\u2AC6\u0338',
    'nsupset': '\u2283\u20D2',
    'nsupseteq': '\u2289',
    'nsupseteqq': '\u2AC6\u0338',
    'ntgl': '\u2279',
    'ntilde': '\xF1',
    'Ntilde': '\xD1',
    'ntlg': '\u2278',
    'ntriangleleft': '\u22EA',
    'ntrianglelefteq': '\u22EC',
    'ntriangleright': '\u22EB',
    'ntrianglerighteq': '\u22ED',
    'nu': '\u03BD',
    'Nu': '\u039D',
    'num': '#',
    'numero': '\u2116',
    'numsp': '\u2007',
    'nvap': '\u224D\u20D2',
    'nvdash': '\u22AC',
    'nvDash': '\u22AD',
    'nVdash': '\u22AE',
    'nVDash': '\u22AF',
    'nvge': '\u2265\u20D2',
    'nvgt': '>\u20D2',
    'nvHarr': '\u2904',
    'nvinfin': '\u29DE',
    'nvlArr': '\u2902',
    'nvle': '\u2264\u20D2',
    'nvlt': '<\u20D2',
    'nvltrie': '\u22B4\u20D2',
    'nvrArr': '\u2903',
    'nvrtrie': '\u22B5\u20D2',
    'nvsim': '\u223C\u20D2',
    'nwarhk': '\u2923',
    'nwarr': '\u2196',
    'nwArr': '\u21D6',
    'nwarrow': '\u2196',
    'nwnear': '\u2927',
    'oacute': '\xF3',
    'Oacute': '\xD3',
    'oast': '\u229B',
    'ocir': '\u229A',
    'ocirc': '\xF4',
    'Ocirc': '\xD4',
    'ocy': '\u043E',
    'Ocy': '\u041E',
    'odash': '\u229D',
    'odblac': '\u0151',
    'Odblac': '\u0150',
    'odiv': '\u2A38',
    'odot': '\u2299',
    'odsold': '\u29BC',
    'oelig': '\u0153',
    'OElig': '\u0152',
    'ofcir': '\u29BF',
    'ofr': '\uD835\uDD2C',
    'Ofr': '\uD835\uDD12',
    'ogon': '\u02DB',
    'ograve': '\xF2',
    'Ograve': '\xD2',
    'ogt': '\u29C1',
    'ohbar': '\u29B5',
    'ohm': '\u03A9',
    'oint': '\u222E',
    'olarr': '\u21BA',
    'olcir': '\u29BE',
    'olcross': '\u29BB',
    'oline': '\u203E',
    'olt': '\u29C0',
    'omacr': '\u014D',
    'Omacr': '\u014C',
    'omega': '\u03C9',
    'Omega': '\u03A9',
    'omicron': '\u03BF',
    'Omicron': '\u039F',
    'omid': '\u29B6',
    'ominus': '\u2296',
    'oopf': '\uD835\uDD60',
    'Oopf': '\uD835\uDD46',
    'opar': '\u29B7',
    'OpenCurlyDoubleQuote': '\u201C',
    'OpenCurlyQuote': '\u2018',
    'operp': '\u29B9',
    'oplus': '\u2295',
    'or': '\u2228',
    'Or': '\u2A54',
    'orarr': '\u21BB',
    'ord': '\u2A5D',
    'order': '\u2134',
    'orderof': '\u2134',
    'ordf': '\xAA',
    'ordm': '\xBA',
    'origof': '\u22B6',
    'oror': '\u2A56',
    'orslope': '\u2A57',
    'orv': '\u2A5B',
    'oS': '\u24C8',
    'oscr': '\u2134',
    'Oscr': '\uD835\uDCAA',
    'oslash': '\xF8',
    'Oslash': '\xD8',
    'osol': '\u2298',
    'otilde': '\xF5',
    'Otilde': '\xD5',
    'otimes': '\u2297',
    'Otimes': '\u2A37',
    'otimesas': '\u2A36',
    'ouml': '\xF6',
    'Ouml': '\xD6',
    'ovbar': '\u233D',
    'OverBar': '\u203E',
    'OverBrace': '\u23DE',
    'OverBracket': '\u23B4',
    'OverParenthesis': '\u23DC',
    'par': '\u2225',
    'para': '\xB6',
    'parallel': '\u2225',
    'parsim': '\u2AF3',
    'parsl': '\u2AFD',
    'part': '\u2202',
    'PartialD': '\u2202',
    'pcy': '\u043F',
    'Pcy': '\u041F',
    'percnt': '%',
    'period': '.',
    'permil': '\u2030',
    'perp': '\u22A5',
    'pertenk': '\u2031',
    'pfr': '\uD835\uDD2D',
    'Pfr': '\uD835\uDD13',
    'phi': '\u03C6',
    'Phi': '\u03A6',
    'phiv': '\u03D5',
    'phmmat': '\u2133',
    'phone': '\u260E',
    'pi': '\u03C0',
    'Pi': '\u03A0',
    'pitchfork': '\u22D4',
    'piv': '\u03D6',
    'planck': '\u210F',
    'planckh': '\u210E',
    'plankv': '\u210F',
    'plus': '+',
    'plusacir': '\u2A23',
    'plusb': '\u229E',
    'pluscir': '\u2A22',
    'plusdo': '\u2214',
    'plusdu': '\u2A25',
    'pluse': '\u2A72',
    'PlusMinus': '\xB1',
    'plusmn': '\xB1',
    'plussim': '\u2A26',
    'plustwo': '\u2A27',
    'pm': '\xB1',
    'Poincareplane': '\u210C',
    'pointint': '\u2A15',
    'popf': '\uD835\uDD61',
    'Popf': '\u2119',
    'pound': '\xA3',
    'pr': '\u227A',
    'Pr': '\u2ABB',
    'prap': '\u2AB7',
    'prcue': '\u227C',
    'pre': '\u2AAF',
    'prE': '\u2AB3',
    'prec': '\u227A',
    'precapprox': '\u2AB7',
    'preccurlyeq': '\u227C',
    'Precedes': '\u227A',
    'PrecedesEqual': '\u2AAF',
    'PrecedesSlantEqual': '\u227C',
    'PrecedesTilde': '\u227E',
    'preceq': '\u2AAF',
    'precnapprox': '\u2AB9',
    'precneqq': '\u2AB5',
    'precnsim': '\u22E8',
    'precsim': '\u227E',
    'prime': '\u2032',
    'Prime': '\u2033',
    'primes': '\u2119',
    'prnap': '\u2AB9',
    'prnE': '\u2AB5',
    'prnsim': '\u22E8',
    'prod': '\u220F',
    'Product': '\u220F',
    'profalar': '\u232E',
    'profline': '\u2312',
    'profsurf': '\u2313',
    'prop': '\u221D',
    'Proportion': '\u2237',
    'Proportional': '\u221D',
    'propto': '\u221D',
    'prsim': '\u227E',
    'prurel': '\u22B0',
    'pscr': '\uD835\uDCC5',
    'Pscr': '\uD835\uDCAB',
    'psi': '\u03C8',
    'Psi': '\u03A8',
    'puncsp': '\u2008',
    'qfr': '\uD835\uDD2E',
    'Qfr': '\uD835\uDD14',
    'qint': '\u2A0C',
    'qopf': '\uD835\uDD62',
    'Qopf': '\u211A',
    'qprime': '\u2057',
    'qscr': '\uD835\uDCC6',
    'Qscr': '\uD835\uDCAC',
    'quaternions': '\u210D',
    'quatint': '\u2A16',
    'quest': '?',
    'questeq': '\u225F',
    'quot': '"',
    'QUOT': '"',
    'rAarr': '\u21DB',
    'race': '\u223D\u0331',
    'racute': '\u0155',
    'Racute': '\u0154',
    'radic': '\u221A',
    'raemptyv': '\u29B3',
    'rang': '\u27E9',
    'Rang': '\u27EB',
    'rangd': '\u2992',
    'range': '\u29A5',
    'rangle': '\u27E9',
    'raquo': '\xBB',
    'rarr': '\u2192',
    'rArr': '\u21D2',
    'Rarr': '\u21A0',
    'rarrap': '\u2975',
    'rarrb': '\u21E5',
    'rarrbfs': '\u2920',
    'rarrc': '\u2933',
    'rarrfs': '\u291E',
    'rarrhk': '\u21AA',
    'rarrlp': '\u21AC',
    'rarrpl': '\u2945',
    'rarrsim': '\u2974',
    'rarrtl': '\u21A3',
    'Rarrtl': '\u2916',
    'rarrw': '\u219D',
    'ratail': '\u291A',
    'rAtail': '\u291C',
    'ratio': '\u2236',
    'rationals': '\u211A',
    'rbarr': '\u290D',
    'rBarr': '\u290F',
    'RBarr': '\u2910',
    'rbbrk': '\u2773',
    'rbrace': '}',
    'rbrack': ']',
    'rbrke': '\u298C',
    'rbrksld': '\u298E',
    'rbrkslu': '\u2990',
    'rcaron': '\u0159',
    'Rcaron': '\u0158',
    'rcedil': '\u0157',
    'Rcedil': '\u0156',
    'rceil': '\u2309',
    'rcub': '}',
    'rcy': '\u0440',
    'Rcy': '\u0420',
    'rdca': '\u2937',
    'rdldhar': '\u2969',
    'rdquo': '\u201D',
    'rdquor': '\u201D',
    'rdsh': '\u21B3',
    'Re': '\u211C',
    'real': '\u211C',
    'realine': '\u211B',
    'realpart': '\u211C',
    'reals': '\u211D',
    'rect': '\u25AD',
    'reg': '\xAE',
    'REG': '\xAE',
    'ReverseElement': '\u220B',
    'ReverseEquilibrium': '\u21CB',
    'ReverseUpEquilibrium': '\u296F',
    'rfisht': '\u297D',
    'rfloor': '\u230B',
    'rfr': '\uD835\uDD2F',
    'Rfr': '\u211C',
    'rHar': '\u2964',
    'rhard': '\u21C1',
    'rharu': '\u21C0',
    'rharul': '\u296C',
    'rho': '\u03C1',
    'Rho': '\u03A1',
    'rhov': '\u03F1',
    'RightAngleBracket': '\u27E9',
    'rightarrow': '\u2192',
    'Rightarrow': '\u21D2',
    'RightArrow': '\u2192',
    'RightArrowBar': '\u21E5',
    'RightArrowLeftArrow': '\u21C4',
    'rightarrowtail': '\u21A3',
    'RightCeiling': '\u2309',
    'RightDoubleBracket': '\u27E7',
    'RightDownTeeVector': '\u295D',
    'RightDownVector': '\u21C2',
    'RightDownVectorBar': '\u2955',
    'RightFloor': '\u230B',
    'rightharpoondown': '\u21C1',
    'rightharpoonup': '\u21C0',
    'rightleftarrows': '\u21C4',
    'rightleftharpoons': '\u21CC',
    'rightrightarrows': '\u21C9',
    'rightsquigarrow': '\u219D',
    'RightTee': '\u22A2',
    'RightTeeArrow': '\u21A6',
    'RightTeeVector': '\u295B',
    'rightthreetimes': '\u22CC',
    'RightTriangle': '\u22B3',
    'RightTriangleBar': '\u29D0',
    'RightTriangleEqual': '\u22B5',
    'RightUpDownVector': '\u294F',
    'RightUpTeeVector': '\u295C',
    'RightUpVector': '\u21BE',
    'RightUpVectorBar': '\u2954',
    'RightVector': '\u21C0',
    'RightVectorBar': '\u2953',
    'ring': '\u02DA',
    'risingdotseq': '\u2253',
    'rlarr': '\u21C4',
    'rlhar': '\u21CC',
    'rlm': '\u200F',
    'rmoust': '\u23B1',
    'rmoustache': '\u23B1',
    'rnmid': '\u2AEE',
    'roang': '\u27ED',
    'roarr': '\u21FE',
    'robrk': '\u27E7',
    'ropar': '\u2986',
    'ropf': '\uD835\uDD63',
    'Ropf': '\u211D',
    'roplus': '\u2A2E',
    'rotimes': '\u2A35',
    'RoundImplies': '\u2970',
    'rpar': ')',
    'rpargt': '\u2994',
    'rppolint': '\u2A12',
    'rrarr': '\u21C9',
    'Rrightarrow': '\u21DB',
    'rsaquo': '\u203A',
    'rscr': '\uD835\uDCC7',
    'Rscr': '\u211B',
    'rsh': '\u21B1',
    'Rsh': '\u21B1',
    'rsqb': ']',
    'rsquo': '\u2019',
    'rsquor': '\u2019',
    'rthree': '\u22CC',
    'rtimes': '\u22CA',
    'rtri': '\u25B9',
    'rtrie': '\u22B5',
    'rtrif': '\u25B8',
    'rtriltri': '\u29CE',
    'RuleDelayed': '\u29F4',
    'ruluhar': '\u2968',
    'rx': '\u211E',
    'sacute': '\u015B',
    'Sacute': '\u015A',
    'sbquo': '\u201A',
    'sc': '\u227B',
    'Sc': '\u2ABC',
    'scap': '\u2AB8',
    'scaron': '\u0161',
    'Scaron': '\u0160',
    'sccue': '\u227D',
    'sce': '\u2AB0',
    'scE': '\u2AB4',
    'scedil': '\u015F',
    'Scedil': '\u015E',
    'scirc': '\u015D',
    'Scirc': '\u015C',
    'scnap': '\u2ABA',
    'scnE': '\u2AB6',
    'scnsim': '\u22E9',
    'scpolint': '\u2A13',
    'scsim': '\u227F',
    'scy': '\u0441',
    'Scy': '\u0421',
    'sdot': '\u22C5',
    'sdotb': '\u22A1',
    'sdote': '\u2A66',
    'searhk': '\u2925',
    'searr': '\u2198',
    'seArr': '\u21D8',
    'searrow': '\u2198',
    'sect': '\xA7',
    'semi': ';',
    'seswar': '\u2929',
    'setminus': '\u2216',
    'setmn': '\u2216',
    'sext': '\u2736',
    'sfr': '\uD835\uDD30',
    'Sfr': '\uD835\uDD16',
    'sfrown': '\u2322',
    'sharp': '\u266F',
    'shchcy': '\u0449',
    'SHCHcy': '\u0429',
    'shcy': '\u0448',
    'SHcy': '\u0428',
    'ShortDownArrow': '\u2193',
    'ShortLeftArrow': '\u2190',
    'shortmid': '\u2223',
    'shortparallel': '\u2225',
    'ShortRightArrow': '\u2192',
    'ShortUpArrow': '\u2191',
    'shy': '\xAD',
    'sigma': '\u03C3',
    'Sigma': '\u03A3',
    'sigmaf': '\u03C2',
    'sigmav': '\u03C2',
    'sim': '\u223C',
    'simdot': '\u2A6A',
    'sime': '\u2243',
    'simeq': '\u2243',
    'simg': '\u2A9E',
    'simgE': '\u2AA0',
    'siml': '\u2A9D',
    'simlE': '\u2A9F',
    'simne': '\u2246',
    'simplus': '\u2A24',
    'simrarr': '\u2972',
    'slarr': '\u2190',
    'SmallCircle': '\u2218',
    'smallsetminus': '\u2216',
    'smashp': '\u2A33',
    'smeparsl': '\u29E4',
    'smid': '\u2223',
    'smile': '\u2323',
    'smt': '\u2AAA',
    'smte': '\u2AAC',
    'smtes': '\u2AAC\uFE00',
    'softcy': '\u044C',
    'SOFTcy': '\u042C',
    'sol': '/',
    'solb': '\u29C4',
    'solbar': '\u233F',
    'sopf': '\uD835\uDD64',
    'Sopf': '\uD835\uDD4A',
    'spades': '\u2660',
    'spadesuit': '\u2660',
    'spar': '\u2225',
    'sqcap': '\u2293',
    'sqcaps': '\u2293\uFE00',
    'sqcup': '\u2294',
    'sqcups': '\u2294\uFE00',
    'Sqrt': '\u221A',
    'sqsub': '\u228F',
    'sqsube': '\u2291',
    'sqsubset': '\u228F',
    'sqsubseteq': '\u2291',
    'sqsup': '\u2290',
    'sqsupe': '\u2292',
    'sqsupset': '\u2290',
    'sqsupseteq': '\u2292',
    'squ': '\u25A1',
    'square': '\u25A1',
    'Square': '\u25A1',
    'SquareIntersection': '\u2293',
    'SquareSubset': '\u228F',
    'SquareSubsetEqual': '\u2291',
    'SquareSuperset': '\u2290',
    'SquareSupersetEqual': '\u2292',
    'SquareUnion': '\u2294',
    'squarf': '\u25AA',
    'squf': '\u25AA',
    'srarr': '\u2192',
    'sscr': '\uD835\uDCC8',
    'Sscr': '\uD835\uDCAE',
    'ssetmn': '\u2216',
    'ssmile': '\u2323',
    'sstarf': '\u22C6',
    'star': '\u2606',
    'Star': '\u22C6',
    'starf': '\u2605',
    'straightepsilon': '\u03F5',
    'straightphi': '\u03D5',
    'strns': '\xAF',
    'sub': '\u2282',
    'Sub': '\u22D0',
    'subdot': '\u2ABD',
    'sube': '\u2286',
    'subE': '\u2AC5',
    'subedot': '\u2AC3',
    'submult': '\u2AC1',
    'subne': '\u228A',
    'subnE': '\u2ACB',
    'subplus': '\u2ABF',
    'subrarr': '\u2979',
    'subset': '\u2282',
    'Subset': '\u22D0',
    'subseteq': '\u2286',
    'subseteqq': '\u2AC5',
    'SubsetEqual': '\u2286',
    'subsetneq': '\u228A',
    'subsetneqq': '\u2ACB',
    'subsim': '\u2AC7',
    'subsub': '\u2AD5',
    'subsup': '\u2AD3',
    'succ': '\u227B',
    'succapprox': '\u2AB8',
    'succcurlyeq': '\u227D',
    'Succeeds': '\u227B',
    'SucceedsEqual': '\u2AB0',
    'SucceedsSlantEqual': '\u227D',
    'SucceedsTilde': '\u227F',
    'succeq': '\u2AB0',
    'succnapprox': '\u2ABA',
    'succneqq': '\u2AB6',
    'succnsim': '\u22E9',
    'succsim': '\u227F',
    'SuchThat': '\u220B',
    'sum': '\u2211',
    'Sum': '\u2211',
    'sung': '\u266A',
    'sup': '\u2283',
    'Sup': '\u22D1',
    'sup1': '\xB9',
    'sup2': '\xB2',
    'sup3': '\xB3',
    'supdot': '\u2ABE',
    'supdsub': '\u2AD8',
    'supe': '\u2287',
    'supE': '\u2AC6',
    'supedot': '\u2AC4',
    'Superset': '\u2283',
    'SupersetEqual': '\u2287',
    'suphsol': '\u27C9',
    'suphsub': '\u2AD7',
    'suplarr': '\u297B',
    'supmult': '\u2AC2',
    'supne': '\u228B',
    'supnE': '\u2ACC',
    'supplus': '\u2AC0',
    'supset': '\u2283',
    'Supset': '\u22D1',
    'supseteq': '\u2287',
    'supseteqq': '\u2AC6',
    'supsetneq': '\u228B',
    'supsetneqq': '\u2ACC',
    'supsim': '\u2AC8',
    'supsub': '\u2AD4',
    'supsup': '\u2AD6',
    'swarhk': '\u2926',
    'swarr': '\u2199',
    'swArr': '\u21D9',
    'swarrow': '\u2199',
    'swnwar': '\u292A',
    'szlig': '\xDF',
    'Tab': '\t',
    'target': '\u2316',
    'tau': '\u03C4',
    'Tau': '\u03A4',
    'tbrk': '\u23B4',
    'tcaron': '\u0165',
    'Tcaron': '\u0164',
    'tcedil': '\u0163',
    'Tcedil': '\u0162',
    'tcy': '\u0442',
    'Tcy': '\u0422',
    'tdot': '\u20DB',
    'telrec': '\u2315',
    'tfr': '\uD835\uDD31',
    'Tfr': '\uD835\uDD17',
    'there4': '\u2234',
    'therefore': '\u2234',
    'Therefore': '\u2234',
    'theta': '\u03B8',
    'Theta': '\u0398',
    'thetasym': '\u03D1',
    'thetav': '\u03D1',
    'thickapprox': '\u2248',
    'thicksim': '\u223C',
    'ThickSpace': '\u205F\u200A',
    'thinsp': '\u2009',
    'ThinSpace': '\u2009',
    'thkap': '\u2248',
    'thksim': '\u223C',
    'thorn': '\xFE',
    'THORN': '\xDE',
    'tilde': '\u02DC',
    'Tilde': '\u223C',
    'TildeEqual': '\u2243',
    'TildeFullEqual': '\u2245',
    'TildeTilde': '\u2248',
    'times': '\xD7',
    'timesb': '\u22A0',
    'timesbar': '\u2A31',
    'timesd': '\u2A30',
    'tint': '\u222D',
    'toea': '\u2928',
    'top': '\u22A4',
    'topbot': '\u2336',
    'topcir': '\u2AF1',
    'topf': '\uD835\uDD65',
    'Topf': '\uD835\uDD4B',
    'topfork': '\u2ADA',
    'tosa': '\u2929',
    'tprime': '\u2034',
    'trade': '\u2122',
    'TRADE': '\u2122',
    'triangle': '\u25B5',
    'triangledown': '\u25BF',
    'triangleleft': '\u25C3',
    'trianglelefteq': '\u22B4',
    'triangleq': '\u225C',
    'triangleright': '\u25B9',
    'trianglerighteq': '\u22B5',
    'tridot': '\u25EC',
    'trie': '\u225C',
    'triminus': '\u2A3A',
    'TripleDot': '\u20DB',
    'triplus': '\u2A39',
    'trisb': '\u29CD',
    'tritime': '\u2A3B',
    'trpezium': '\u23E2',
    'tscr': '\uD835\uDCC9',
    'Tscr': '\uD835\uDCAF',
    'tscy': '\u0446',
    'TScy': '\u0426',
    'tshcy': '\u045B',
    'TSHcy': '\u040B',
    'tstrok': '\u0167',
    'Tstrok': '\u0166',
    'twixt': '\u226C',
    'twoheadleftarrow': '\u219E',
    'twoheadrightarrow': '\u21A0',
    'uacute': '\xFA',
    'Uacute': '\xDA',
    'uarr': '\u2191',
    'uArr': '\u21D1',
    'Uarr': '\u219F',
    'Uarrocir': '\u2949',
    'ubrcy': '\u045E',
    'Ubrcy': '\u040E',
    'ubreve': '\u016D',
    'Ubreve': '\u016C',
    'ucirc': '\xFB',
    'Ucirc': '\xDB',
    'ucy': '\u0443',
    'Ucy': '\u0423',
    'udarr': '\u21C5',
    'udblac': '\u0171',
    'Udblac': '\u0170',
    'udhar': '\u296E',
    'ufisht': '\u297E',
    'ufr': '\uD835\uDD32',
    'Ufr': '\uD835\uDD18',
    'ugrave': '\xF9',
    'Ugrave': '\xD9',
    'uHar': '\u2963',
    'uharl': '\u21BF',
    'uharr': '\u21BE',
    'uhblk': '\u2580',
    'ulcorn': '\u231C',
    'ulcorner': '\u231C',
    'ulcrop': '\u230F',
    'ultri': '\u25F8',
    'umacr': '\u016B',
    'Umacr': '\u016A',
    'uml': '\xA8',
    'UnderBar': '_',
    'UnderBrace': '\u23DF',
    'UnderBracket': '\u23B5',
    'UnderParenthesis': '\u23DD',
    'Union': '\u22C3',
    'UnionPlus': '\u228E',
    'uogon': '\u0173',
    'Uogon': '\u0172',
    'uopf': '\uD835\uDD66',
    'Uopf': '\uD835\uDD4C',
    'uparrow': '\u2191',
    'Uparrow': '\u21D1',
    'UpArrow': '\u2191',
    'UpArrowBar': '\u2912',
    'UpArrowDownArrow': '\u21C5',
    'updownarrow': '\u2195',
    'Updownarrow': '\u21D5',
    'UpDownArrow': '\u2195',
    'UpEquilibrium': '\u296E',
    'upharpoonleft': '\u21BF',
    'upharpoonright': '\u21BE',
    'uplus': '\u228E',
    'UpperLeftArrow': '\u2196',
    'UpperRightArrow': '\u2197',
    'upsi': '\u03C5',
    'Upsi': '\u03D2',
    'upsih': '\u03D2',
    'upsilon': '\u03C5',
    'Upsilon': '\u03A5',
    'UpTee': '\u22A5',
    'UpTeeArrow': '\u21A5',
    'upuparrows': '\u21C8',
    'urcorn': '\u231D',
    'urcorner': '\u231D',
    'urcrop': '\u230E',
    'uring': '\u016F',
    'Uring': '\u016E',
    'urtri': '\u25F9',
    'uscr': '\uD835\uDCCA',
    'Uscr': '\uD835\uDCB0',
    'utdot': '\u22F0',
    'utilde': '\u0169',
    'Utilde': '\u0168',
    'utri': '\u25B5',
    'utrif': '\u25B4',
    'uuarr': '\u21C8',
    'uuml': '\xFC',
    'Uuml': '\xDC',
    'uwangle': '\u29A7',
    'vangrt': '\u299C',
    'varepsilon': '\u03F5',
    'varkappa': '\u03F0',
    'varnothing': '\u2205',
    'varphi': '\u03D5',
    'varpi': '\u03D6',
    'varpropto': '\u221D',
    'varr': '\u2195',
    'vArr': '\u21D5',
    'varrho': '\u03F1',
    'varsigma': '\u03C2',
    'varsubsetneq': '\u228A\uFE00',
    'varsubsetneqq': '\u2ACB\uFE00',
    'varsupsetneq': '\u228B\uFE00',
    'varsupsetneqq': '\u2ACC\uFE00',
    'vartheta': '\u03D1',
    'vartriangleleft': '\u22B2',
    'vartriangleright': '\u22B3',
    'vBar': '\u2AE8',
    'Vbar': '\u2AEB',
    'vBarv': '\u2AE9',
    'vcy': '\u0432',
    'Vcy': '\u0412',
    'vdash': '\u22A2',
    'vDash': '\u22A8',
    'Vdash': '\u22A9',
    'VDash': '\u22AB',
    'Vdashl': '\u2AE6',
    'vee': '\u2228',
    'Vee': '\u22C1',
    'veebar': '\u22BB',
    'veeeq': '\u225A',
    'vellip': '\u22EE',
    'verbar': '|',
    'Verbar': '\u2016',
    'vert': '|',
    'Vert': '\u2016',
    'VerticalBar': '\u2223',
    'VerticalLine': '|',
    'VerticalSeparator': '\u2758',
    'VerticalTilde': '\u2240',
    'VeryThinSpace': '\u200A',
    'vfr': '\uD835\uDD33',
    'Vfr': '\uD835\uDD19',
    'vltri': '\u22B2',
    'vnsub': '\u2282\u20D2',
    'vnsup': '\u2283\u20D2',
    'vopf': '\uD835\uDD67',
    'Vopf': '\uD835\uDD4D',
    'vprop': '\u221D',
    'vrtri': '\u22B3',
    'vscr': '\uD835\uDCCB',
    'Vscr': '\uD835\uDCB1',
    'vsubne': '\u228A\uFE00',
    'vsubnE': '\u2ACB\uFE00',
    'vsupne': '\u228B\uFE00',
    'vsupnE': '\u2ACC\uFE00',
    'Vvdash': '\u22AA',
    'vzigzag': '\u299A',
    'wcirc': '\u0175',
    'Wcirc': '\u0174',
    'wedbar': '\u2A5F',
    'wedge': '\u2227',
    'Wedge': '\u22C0',
    'wedgeq': '\u2259',
    'weierp': '\u2118',
    'wfr': '\uD835\uDD34',
    'Wfr': '\uD835\uDD1A',
    'wopf': '\uD835\uDD68',
    'Wopf': '\uD835\uDD4E',
    'wp': '\u2118',
    'wr': '\u2240',
    'wreath': '\u2240',
    'wscr': '\uD835\uDCCC',
    'Wscr': '\uD835\uDCB2',
    'xcap': '\u22C2',
    'xcirc': '\u25EF',
    'xcup': '\u22C3',
    'xdtri': '\u25BD',
    'xfr': '\uD835\uDD35',
    'Xfr': '\uD835\uDD1B',
    'xharr': '\u27F7',
    'xhArr': '\u27FA',
    'xi': '\u03BE',
    'Xi': '\u039E',
    'xlarr': '\u27F5',
    'xlArr': '\u27F8',
    'xmap': '\u27FC',
    'xnis': '\u22FB',
    'xodot': '\u2A00',
    'xopf': '\uD835\uDD69',
    'Xopf': '\uD835\uDD4F',
    'xoplus': '\u2A01',
    'xotime': '\u2A02',
    'xrarr': '\u27F6',
    'xrArr': '\u27F9',
    'xscr': '\uD835\uDCCD',
    'Xscr': '\uD835\uDCB3',
    'xsqcup': '\u2A06',
    'xuplus': '\u2A04',
    'xutri': '\u25B3',
    'xvee': '\u22C1',
    'xwedge': '\u22C0',
    'yacute': '\xFD',
    'Yacute': '\xDD',
    'yacy': '\u044F',
    'YAcy': '\u042F',
    'ycirc': '\u0177',
    'Ycirc': '\u0176',
    'ycy': '\u044B',
    'Ycy': '\u042B',
    'yen': '\xA5',
    'yfr': '\uD835\uDD36',
    'Yfr': '\uD835\uDD1C',
    'yicy': '\u0457',
    'YIcy': '\u0407',
    'yopf': '\uD835\uDD6A',
    'Yopf': '\uD835\uDD50',
    'yscr': '\uD835\uDCCE',
    'Yscr': '\uD835\uDCB4',
    'yucy': '\u044E',
    'YUcy': '\u042E',
    'yuml': '\xFF',
    'Yuml': '\u0178',
    'zacute': '\u017A',
    'Zacute': '\u0179',
    'zcaron': '\u017E',
    'Zcaron': '\u017D',
    'zcy': '\u0437',
    'Zcy': '\u0417',
    'zdot': '\u017C',
    'Zdot': '\u017B',
    'zeetrf': '\u2128',
    'ZeroWidthSpace': '\u200B',
    'zeta': '\u03B6',
    'Zeta': '\u0396',
    'zfr': '\uD835\uDD37',
    'Zfr': '\u2128',
    'zhcy': '\u0436',
    'ZHcy': '\u0416',
    'zigrarr': '\u21DD',
    'zopf': '\uD835\uDD6B',
    'Zopf': '\u2124',
    'zscr': '\uD835\uDCCF',
    'Zscr': '\uD835\uDCB5',
    'zwj': '\u200D',
    'zwnj': '\u200C'
  };
  var decodeMapLegacy = {
    'aacute': '\xE1',
    'Aacute': '\xC1',
    'acirc': '\xE2',
    'Acirc': '\xC2',
    'acute': '\xB4',
    'aelig': '\xE6',
    'AElig': '\xC6',
    'agrave': '\xE0',
    'Agrave': '\xC0',
    'amp': '&',
    'AMP': '&',
    'aring': '\xE5',
    'Aring': '\xC5',
    'atilde': '\xE3',
    'Atilde': '\xC3',
    'auml': '\xE4',
    'Auml': '\xC4',
    'brvbar': '\xA6',
    'ccedil': '\xE7',
    'Ccedil': '\xC7',
    'cedil': '\xB8',
    'cent': '\xA2',
    'copy': '\xA9',
    'COPY': '\xA9',
    'curren': '\xA4',
    'deg': '\xB0',
    'divide': '\xF7',
    'eacute': '\xE9',
    'Eacute': '\xC9',
    'ecirc': '\xEA',
    'Ecirc': '\xCA',
    'egrave': '\xE8',
    'Egrave': '\xC8',
    'eth': '\xF0',
    'ETH': '\xD0',
    'euml': '\xEB',
    'Euml': '\xCB',
    'frac12': '\xBD',
    'frac14': '\xBC',
    'frac34': '\xBE',
    'gt': '>',
    'GT': '>',
    'iacute': '\xED',
    'Iacute': '\xCD',
    'icirc': '\xEE',
    'Icirc': '\xCE',
    'iexcl': '\xA1',
    'igrave': '\xEC',
    'Igrave': '\xCC',
    'iquest': '\xBF',
    'iuml': '\xEF',
    'Iuml': '\xCF',
    'laquo': '\xAB',
    'lt': '<',
    'LT': '<',
    'macr': '\xAF',
    'micro': '\xB5',
    'middot': '\xB7',
    'nbsp': '\xA0',
    'not': '\xAC',
    'ntilde': '\xF1',
    'Ntilde': '\xD1',
    'oacute': '\xF3',
    'Oacute': '\xD3',
    'ocirc': '\xF4',
    'Ocirc': '\xD4',
    'ograve': '\xF2',
    'Ograve': '\xD2',
    'ordf': '\xAA',
    'ordm': '\xBA',
    'oslash': '\xF8',
    'Oslash': '\xD8',
    'otilde': '\xF5',
    'Otilde': '\xD5',
    'ouml': '\xF6',
    'Ouml': '\xD6',
    'para': '\xB6',
    'plusmn': '\xB1',
    'pound': '\xA3',
    'quot': '"',
    'QUOT': '"',
    'raquo': '\xBB',
    'reg': '\xAE',
    'REG': '\xAE',
    'sect': '\xA7',
    'shy': '\xAD',
    'sup1': '\xB9',
    'sup2': '\xB2',
    'sup3': '\xB3',
    'szlig': '\xDF',
    'thorn': '\xFE',
    'THORN': '\xDE',
    'times': '\xD7',
    'uacute': '\xFA',
    'Uacute': '\xDA',
    'ucirc': '\xFB',
    'Ucirc': '\xDB',
    'ugrave': '\xF9',
    'Ugrave': '\xD9',
    'uml': '\xA8',
    'uuml': '\xFC',
    'Uuml': '\xDC',
    'yacute': '\xFD',
    'Yacute': '\xDD',
    'yen': '\xA5',
    'yuml': '\xFF'
  };
  var decodeMapNumeric = {
    '0': '\uFFFD',
    '128': '\u20AC',
    '130': '\u201A',
    '131': '\u0192',
    '132': '\u201E',
    '133': '\u2026',
    '134': '\u2020',
    '135': '\u2021',
    '136': '\u02C6',
    '137': '\u2030',
    '138': '\u0160',
    '139': '\u2039',
    '140': '\u0152',
    '142': '\u017D',
    '145': '\u2018',
    '146': '\u2019',
    '147': '\u201C',
    '148': '\u201D',
    '149': '\u2022',
    '150': '\u2013',
    '151': '\u2014',
    '152': '\u02DC',
    '153': '\u2122',
    '154': '\u0161',
    '155': '\u203A',
    '156': '\u0153',
    '158': '\u017E',
    '159': '\u0178'
  };
  var invalidReferenceCodePoints = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65000, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111];

  /*--------------------------------------------------------------------------*/

  var stringFromCharCode = String.fromCharCode;
  var object = {};
  var hasOwnProperty = object.hasOwnProperty;
  var has = function (object, propertyName) {
    return hasOwnProperty.call(object, propertyName);
  };
  var contains = function (array, value) {
    var index = -1;
    var length = array.length;
    while (++index < length) {
      if (array[index] == value) {
        return true;
      }
    }
    return false;
  };
  var merge = function (options, defaults) {
    if (!options) {
      return defaults;
    }
    var result = {};
    var key;
    for (key in defaults) {
      // A `hasOwnProperty` check is not needed here, since only recognized
      // option names are used anyway. Any others are ignored.
      result[key] = has(options, key) ? options[key] : defaults[key];
    }
    return result;
  };

  // Modified version of `ucs2encode`; see https://mths.be/punycode.
  var codePointToSymbol = function (codePoint, strict) {
    var output = '';
    if (codePoint >= 0xD800 && codePoint <= 0xDFFF || codePoint > 0x10FFFF) {
      // See issue #4:
      // “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
      // greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
      // REPLACEMENT CHARACTER.”
      if (strict) {
        parseError('character reference outside the permissible Unicode range');
      }
      return '\uFFFD';
    }
    if (has(decodeMapNumeric, codePoint)) {
      if (strict) {
        parseError('disallowed character reference');
      }
      return decodeMapNumeric[codePoint];
    }
    if (strict && contains(invalidReferenceCodePoints, codePoint)) {
      parseError('disallowed character reference');
    }
    if (codePoint > 0xFFFF) {
      codePoint -= 0x10000;
      output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }
    output += stringFromCharCode(codePoint);
    return output;
  };
  var hexEscape = function (codePoint) {
    return '&#x' + codePoint.toString(16).toUpperCase() + ';';
  };
  var decEscape = function (codePoint) {
    return '&#' + codePoint + ';';
  };
  var parseError = function (message) {
    throw Error('Parse error: ' + message);
  };

  /*--------------------------------------------------------------------------*/

  var encode = function (string, options) {
    options = merge(options, encode.options);
    var strict = options.strict;
    if (strict && regexInvalidRawCodePoint.test(string)) {
      parseError('forbidden code point');
    }
    var encodeEverything = options.encodeEverything;
    var useNamedReferences = options.useNamedReferences;
    var allowUnsafeSymbols = options.allowUnsafeSymbols;
    var escapeCodePoint = options.decimal ? decEscape : hexEscape;
    var escapeBmpSymbol = function (symbol) {
      return escapeCodePoint(symbol.charCodeAt(0));
    };
    if (encodeEverything) {
      // Encode ASCII symbols.
      string = string.replace(regexAsciiWhitelist, function (symbol) {
        // Use named references if requested & possible.
        if (useNamedReferences && has(encodeMap, symbol)) {
          return '&' + encodeMap[symbol] + ';';
        }
        return escapeBmpSymbol(symbol);
      });
      // Shorten a few escapes that represent two symbols, of which at least one
      // is within the ASCII range.
      if (useNamedReferences) {
        string = string.replace(/&gt;\u20D2/g, '&nvgt;').replace(/&lt;\u20D2/g, '&nvlt;').replace(/&#x66;&#x6A;/g, '&fjlig;');
      }
      // Encode non-ASCII symbols.
      if (useNamedReferences) {
        // Encode non-ASCII symbols that can be replaced with a named reference.
        string = string.replace(regexEncodeNonAscii, function (string) {
          // Note: there is no need to check `has(encodeMap, string)` here.
          return '&' + encodeMap[string] + ';';
        });
      }
      // Note: any remaining non-ASCII symbols are handled outside of the `if`.
    } else if (useNamedReferences) {
      // Apply named character references.
      // Encode `<>"'&` using named character references.
      if (!allowUnsafeSymbols) {
        string = string.replace(regexEscape, function (string) {
          return '&' + encodeMap[string] + ';'; // no need to check `has()` here
        });
      }
      // Shorten escapes that represent two symbols, of which at least one is
      // `<>"'&`.
      string = string.replace(/&gt;\u20D2/g, '&nvgt;').replace(/&lt;\u20D2/g, '&nvlt;');
      // Encode non-ASCII symbols that can be replaced with a named reference.
      string = string.replace(regexEncodeNonAscii, function (string) {
        // Note: there is no need to check `has(encodeMap, string)` here.
        return '&' + encodeMap[string] + ';';
      });
    } else if (!allowUnsafeSymbols) {
      // Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
      // using named character references.
      string = string.replace(regexEscape, escapeBmpSymbol);
    }
    return string
    // Encode astral symbols.
    .replace(regexAstralSymbols, function ($0) {
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      var high = $0.charCodeAt(0);
      var low = $0.charCodeAt(1);
      var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
      return escapeCodePoint(codePoint);
    })
    // Encode any remaining BMP symbols that are not printable ASCII symbols
    // using a hexadecimal escape.
    .replace(regexBmpWhitelist, escapeBmpSymbol);
  };
  // Expose default options (so they can be overridden globally).
  encode.options = {
    'allowUnsafeSymbols': false,
    'encodeEverything': false,
    'strict': false,
    'useNamedReferences': false,
    'decimal': false
  };
  var decode = function (html, options) {
    options = merge(options, decode.options);
    var strict = options.strict;
    if (strict && regexInvalidEntity.test(html)) {
      parseError('malformed character reference');
    }
    return html.replace(regexDecode, function ($0, $1, $2, $3, $4, $5, $6, $7, $8) {
      var codePoint;
      var semicolon;
      var decDigits;
      var hexDigits;
      var reference;
      var next;
      if ($1) {
        reference = $1;
        // Note: there is no need to check `has(decodeMap, reference)`.
        return decodeMap[reference];
      }
      if ($2) {
        // Decode named character references without trailing `;`, e.g. `&amp`.
        // This is only a parse error if it gets converted to `&`, or if it is
        // followed by `=` in an attribute context.
        reference = $2;
        next = $3;
        if (next && options.isAttributeValue) {
          if (strict && next == '=') {
            parseError('`&` did not start a character reference');
          }
          return $0;
        } else {
          if (strict) {
            parseError('named character reference was not terminated by a semicolon');
          }
          // Note: there is no need to check `has(decodeMapLegacy, reference)`.
          return decodeMapLegacy[reference] + (next || '');
        }
      }
      if ($4) {
        // Decode decimal escapes, e.g. `&#119558;`.
        decDigits = $4;
        semicolon = $5;
        if (strict && !semicolon) {
          parseError('character reference was not terminated by a semicolon');
        }
        codePoint = parseInt(decDigits, 10);
        return codePointToSymbol(codePoint, strict);
      }
      if ($6) {
        // Decode hexadecimal escapes, e.g. `&#x1D306;`.
        hexDigits = $6;
        semicolon = $7;
        if (strict && !semicolon) {
          parseError('character reference was not terminated by a semicolon');
        }
        codePoint = parseInt(hexDigits, 16);
        return codePointToSymbol(codePoint, strict);
      }

      // If we’re still here, `if ($7)` is implied; it’s an ambiguous
      // ampersand for sure. https://mths.be/notes/ambiguous-ampersands
      if (strict) {
        parseError('named character reference was not terminated by a semicolon');
      }
      return $0;
    });
  };
  // Expose default options (so they can be overridden globally).
  decode.options = {
    'isAttributeValue': false,
    'strict': false
  };
  var escape = function (string) {
    return string.replace(regexEscape, function ($0) {
      // Note: there is no need to check `has(escapeMap, $0)` here.
      return escapeMap[$0];
    });
  };

  /*--------------------------------------------------------------------------*/

  var he = {
    'version': '1.2.0',
    'encode': encode,
    'decode': decode,
    'escape': escape,
    'unescape': decode
  };

  // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    define(function () {
      return he;
    });
  } else if (freeExports && !freeExports.nodeType) {
    if (freeModule) {
      // in Node.js, io.js, or RingoJS v0.8.0+
      freeModule.exports = he;
    } else {
      // in Narwhal or RingoJS v0.7.0-
      for (var key in he) {
        has(he, key) && (freeExports[key] = he[key]);
      }
    }
  } else {
    // in Rhino or a web browser
    root.he = he;
  }
})(this);

//
// jQuery MiniColors: A tiny color picker built on jQuery
//
// Developed by Cory LaViska for A Beautiful Site, LLC
//
// Licensed under the MIT license: http://opensource.org/licenses/MIT
//
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  // Defaults
  $.minicolors = {
    defaults: {
      animationSpeed: 50,
      animationEasing: 'swing',
      change: null,
      changeDelay: 0,
      control: 'hue',
      defaultValue: '',
      format: 'hex',
      hide: null,
      hideSpeed: 100,
      inline: false,
      keywords: '',
      letterCase: 'lowercase',
      opacity: false,
      position: 'bottom',
      show: null,
      showSpeed: 100,
      theme: 'default',
      swatches: []
    }
  };

  // Public methods
  $.extend($.fn, {
    minicolors: function (method, data) {
      switch (method) {
        // Destroy the control
        case 'destroy':
          $(this).each(function () {
            destroy($(this));
          });
          return $(this);

        // Hide the color picker
        case 'hide':
          hide();
          return $(this);

        // Get/set opacity
        case 'opacity':
          // Getter
          if (data === undefined) {
            // Getter
            return $(this).attr('data-opacity');
          } else {
            // Setter
            $(this).each(function () {
              updateFromInput($(this).attr('data-opacity', data));
            });
          }
          return $(this);

        // Get an RGB(A) object based on the current color/opacity
        case 'rgbObject':
          return rgbObject($(this), method === 'rgbaObject');

        // Get an RGB(A) string based on the current color/opacity
        case 'rgbString':
        case 'rgbaString':
          return rgbString($(this), method === 'rgbaString');

        // Get/set settings on the fly
        case 'settings':
          if (data === undefined) {
            return $(this).data('minicolors-settings');
          } else {
            // Setter
            $(this).each(function () {
              var settings = $(this).data('minicolors-settings') || {};
              destroy($(this));
              $(this).minicolors($.extend(true, settings, data));
            });
          }
          return $(this);

        // Show the color picker
        case 'show':
          show($(this).eq(0));
          return $(this);

        // Get/set the hex color value
        case 'value':
          if (data === undefined) {
            // Getter
            return $(this).val();
          } else {
            // Setter
            $(this).each(function () {
              if (typeof data === 'object' && data !== null) {
                if (data.opacity !== undefined) {
                  $(this).attr('data-opacity', keepWithin(data.opacity, 0, 1));
                }
                if (data.color) {
                  $(this).val(data.color);
                }
              } else {
                $(this).val(data);
              }
              updateFromInput($(this));
            });
          }
          return $(this);

        // Initializes the control
        default:
          if (method !== 'create') data = method;
          $(this).each(function () {
            init($(this), data);
          });
          return $(this);
      }
    }
  });

  // Initialize input elements
  function init(input, settings) {
    var minicolors = $('<div class="minicolors" />');
    var defaults = $.minicolors.defaults;
    var name;
    var size;
    var swatches;
    var swatch;
    var swatchString;
    var panel;
    var i;

    // Do nothing if already initialized
    if (input.data('minicolors-initialized')) return;

    // Handle settings
    settings = $.extend(true, {}, defaults, settings);

    // The wrapper
    minicolors.addClass('minicolors-theme-' + settings.theme).toggleClass('minicolors-with-opacity', settings.opacity);

    // Custom positioning
    if (settings.position !== undefined) {
      $.each(settings.position.split(' '), function () {
        minicolors.addClass('minicolors-position-' + this);
      });
    }

    // Input size
    if (settings.format === 'rgb') {
      size = settings.opacity ? '25' : '20';
    } else {
      size = settings.keywords ? '11' : '7';
    }

    // The input
    input.addClass('minicolors-input').data('minicolors-initialized', false).data('minicolors-settings', settings).prop('size', size).wrap(minicolors).after('<div class="minicolors-panel minicolors-slider-' + settings.control + '">' + '<div class="minicolors-slider minicolors-sprite">' + '<div class="minicolors-picker"></div>' + '</div>' + '<div class="minicolors-opacity-slider minicolors-sprite">' + '<div class="minicolors-picker"></div>' + '</div>' + '<div class="minicolors-grid minicolors-sprite">' + '<div class="minicolors-grid-inner"></div>' + '<div class="minicolors-picker"><div></div></div>' + '</div>' + '</div>');

    // The swatch
    if (!settings.inline) {
      input.after('<span class="minicolors-swatch minicolors-sprite minicolors-input-swatch"><span class="minicolors-swatch-color"></span></span>');
      input.next('.minicolors-input-swatch').on('click', function (event) {
        event.preventDefault();
        input.trigger('focus');
      });
    }

    // Prevent text selection in IE
    panel = input.parent().find('.minicolors-panel');
    panel.on('selectstart', function () {
      return false;
    }).end();

    // Swatches
    if (settings.swatches && settings.swatches.length !== 0) {
      panel.addClass('minicolors-with-swatches');
      swatches = $('<ul class="minicolors-swatches"></ul>').appendTo(panel);
      for (i = 0; i < settings.swatches.length; ++i) {
        // allow for custom objects as swatches
        if (typeof settings.swatches[i] === 'object') {
          name = settings.swatches[i].name;
          swatch = settings.swatches[i].color;
        } else {
          name = '';
          swatch = settings.swatches[i];
        }
        swatchString = swatch;
        swatch = isRgb(swatch) ? parseRgb(swatch, true) : hex2rgb(parseHex(swatch, true));
        $('<li class="minicolors-swatch minicolors-sprite"><span class="minicolors-swatch-color"></span></li>').attr("title", name).appendTo(swatches).data('swatch-color', swatchString).find('.minicolors-swatch-color').css({
          backgroundColor: swatchString !== 'transparent' ? rgb2hex(swatch) : 'transparent',
          opacity: String(swatch.a)
        });
        settings.swatches[i] = swatch;
      }
    }

    // Inline controls
    if (settings.inline) input.parent().addClass('minicolors-inline');
    updateFromInput(input, false);
    input.data('minicolors-initialized', true);
  }

  // Returns the input back to its original state
  function destroy(input) {
    var minicolors = input.parent();

    // Revert the input element
    input.removeData('minicolors-initialized').removeData('minicolors-settings').removeProp('size').removeClass('minicolors-input');

    // Remove the wrap and destroy whatever remains
    minicolors.before(input).remove();
  }

  // Shows the specified dropdown panel
  function show(input) {
    var minicolors = input.parent();
    var panel = minicolors.find('.minicolors-panel');
    var settings = input.data('minicolors-settings');

    // Do nothing if uninitialized, disabled, inline, or already open
    if (!input.data('minicolors-initialized') || input.prop('disabled') || minicolors.hasClass('minicolors-inline') || minicolors.hasClass('minicolors-focus')) return;
    hide();
    minicolors.addClass('minicolors-focus');
    if (panel.animate) {
      panel.stop(true, true).fadeIn(settings.showSpeed, function () {
        if (settings.show) settings.show.call(input.get(0));
      });
    } else {
      panel.show();
      if (settings.show) settings.show.call(input.get(0));
    }
  }

  // Hides all dropdown panels
  function hide() {
    $('.minicolors-focus').each(function () {
      var minicolors = $(this);
      var input = minicolors.find('.minicolors-input');
      var panel = minicolors.find('.minicolors-panel');
      var settings = input.data('minicolors-settings');
      if (panel.animate) {
        panel.fadeOut(settings.hideSpeed, function () {
          if (settings.hide) settings.hide.call(input.get(0));
          minicolors.removeClass('minicolors-focus');
        });
      } else {
        panel.hide();
        if (settings.hide) settings.hide.call(input.get(0));
        minicolors.removeClass('minicolors-focus');
      }
    });
  }

  // Moves the selected picker
  function move(target, event, animate) {
    var input = target.parents('.minicolors').find('.minicolors-input');
    var settings = input.data('minicolors-settings');
    var picker = target.find('[class$=-picker]');
    var offsetX = target.offset().left;
    var offsetY = target.offset().top;
    var x = Math.round(event.pageX - offsetX);
    var y = Math.round(event.pageY - offsetY);
    var duration = animate ? settings.animationSpeed : 0;
    var wx, wy, r, phi, styles;

    // Touch support
    if (event.originalEvent.changedTouches) {
      x = event.originalEvent.changedTouches[0].pageX - offsetX;
      y = event.originalEvent.changedTouches[0].pageY - offsetY;
    }

    // Constrain picker to its container
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > target.width()) x = target.width();
    if (y > target.height()) y = target.height();

    // Constrain color wheel values to the wheel
    if (target.parent().is('.minicolors-slider-wheel') && picker.parent().is('.minicolors-grid')) {
      wx = 75 - x;
      wy = 75 - y;
      r = Math.sqrt(wx * wx + wy * wy);
      phi = Math.atan2(wy, wx);
      if (phi < 0) phi += Math.PI * 2;
      if (r > 75) {
        r = 75;
        x = 75 - 75 * Math.cos(phi);
        y = 75 - 75 * Math.sin(phi);
      }
      x = Math.round(x);
      y = Math.round(y);
    }

    // Move the picker
    styles = {
      top: y + 'px'
    };
    if (target.is('.minicolors-grid')) {
      styles.left = x + 'px';
    }
    if (picker.animate) {
      picker.stop(true).animate(styles, duration, settings.animationEasing, function () {
        updateFromControl(input, target);
      });
    } else {
      picker.css(styles);
      updateFromControl(input, target);
    }
  }

  // Sets the input based on the color picker values
  function updateFromControl(input, target) {
    function getCoords(picker, container) {
      var left, top;
      if (!picker.length || !container) return null;
      left = picker.offset().left;
      top = picker.offset().top;
      return {
        x: left - container.offset().left + picker.outerWidth() / 2,
        y: top - container.offset().top + picker.outerHeight() / 2
      };
    }
    var hue, saturation, brightness, x, y, r, phi;
    var hex = input.val();
    var opacity = input.attr('data-opacity');

    // Helpful references
    var minicolors = input.parent();
    var settings = input.data('minicolors-settings');
    var swatch = minicolors.find('.minicolors-input-swatch');

    // Panel objects
    var grid = minicolors.find('.minicolors-grid');
    var slider = minicolors.find('.minicolors-slider');
    var opacitySlider = minicolors.find('.minicolors-opacity-slider');

    // Picker objects
    var gridPicker = grid.find('[class$=-picker]');
    var sliderPicker = slider.find('[class$=-picker]');
    var opacityPicker = opacitySlider.find('[class$=-picker]');

    // Picker positions
    var gridPos = getCoords(gridPicker, grid);
    var sliderPos = getCoords(sliderPicker, slider);
    var opacityPos = getCoords(opacityPicker, opacitySlider);

    // Handle colors
    if (target.is('.minicolors-grid, .minicolors-slider, .minicolors-opacity-slider')) {
      // Determine HSB values
      switch (settings.control) {
        case 'wheel':
          // Calculate hue, saturation, and brightness
          x = grid.width() / 2 - gridPos.x;
          y = grid.height() / 2 - gridPos.y;
          r = Math.sqrt(x * x + y * y);
          phi = Math.atan2(y, x);
          if (phi < 0) phi += Math.PI * 2;
          if (r > 75) {
            r = 75;
            gridPos.x = 69 - 75 * Math.cos(phi);
            gridPos.y = 69 - 75 * Math.sin(phi);
          }
          saturation = keepWithin(r / 0.75, 0, 100);
          hue = keepWithin(phi * 180 / Math.PI, 0, 360);
          brightness = keepWithin(100 - Math.floor(sliderPos.y * (100 / slider.height())), 0, 100);
          hex = hsb2hex({
            h: hue,
            s: saturation,
            b: brightness
          });

          // Update UI
          slider.css('backgroundColor', hsb2hex({
            h: hue,
            s: saturation,
            b: 100
          }));
          break;
        case 'saturation':
          // Calculate hue, saturation, and brightness
          hue = keepWithin(parseInt(gridPos.x * (360 / grid.width()), 10), 0, 360);
          saturation = keepWithin(100 - Math.floor(sliderPos.y * (100 / slider.height())), 0, 100);
          brightness = keepWithin(100 - Math.floor(gridPos.y * (100 / grid.height())), 0, 100);
          hex = hsb2hex({
            h: hue,
            s: saturation,
            b: brightness
          });

          // Update UI
          slider.css('backgroundColor', hsb2hex({
            h: hue,
            s: 100,
            b: brightness
          }));
          minicolors.find('.minicolors-grid-inner').css('opacity', saturation / 100);
          break;
        case 'brightness':
          // Calculate hue, saturation, and brightness
          hue = keepWithin(parseInt(gridPos.x * (360 / grid.width()), 10), 0, 360);
          saturation = keepWithin(100 - Math.floor(gridPos.y * (100 / grid.height())), 0, 100);
          brightness = keepWithin(100 - Math.floor(sliderPos.y * (100 / slider.height())), 0, 100);
          hex = hsb2hex({
            h: hue,
            s: saturation,
            b: brightness
          });

          // Update UI
          slider.css('backgroundColor', hsb2hex({
            h: hue,
            s: saturation,
            b: 100
          }));
          minicolors.find('.minicolors-grid-inner').css('opacity', 1 - brightness / 100);
          break;
        default:
          // Calculate hue, saturation, and brightness
          hue = keepWithin(360 - parseInt(sliderPos.y * (360 / slider.height()), 10), 0, 360);
          saturation = keepWithin(Math.floor(gridPos.x * (100 / grid.width())), 0, 100);
          brightness = keepWithin(100 - Math.floor(gridPos.y * (100 / grid.height())), 0, 100);
          hex = hsb2hex({
            h: hue,
            s: saturation,
            b: brightness
          });

          // Update UI
          grid.css('backgroundColor', hsb2hex({
            h: hue,
            s: 100,
            b: 100
          }));
          break;
      }

      // Handle opacity
      if (settings.opacity) {
        opacity = parseFloat(1 - opacityPos.y / opacitySlider.height()).toFixed(2);
      } else {
        opacity = 1;
      }
      updateInput(input, hex, opacity);
    } else {
      // Set swatch color
      swatch.find('span').css({
        backgroundColor: hex,
        opacity: String(opacity)
      });

      // Handle change event
      doChange(input, hex, opacity);
    }
  }

  // Sets the value of the input and does the appropriate conversions
  // to respect settings, also updates the swatch
  function updateInput(input, value, opacity) {
    var rgb;

    // Helpful references
    var minicolors = input.parent();
    var settings = input.data('minicolors-settings');
    var swatch = minicolors.find('.minicolors-input-swatch');
    if (settings.opacity) input.attr('data-opacity', opacity);

    // Set color string
    if (settings.format === 'rgb') {
      // Returns RGB(A) string

      // Checks for input format and does the conversion
      if (isRgb(value)) {
        rgb = parseRgb(value, true);
      } else {
        rgb = hex2rgb(parseHex(value, true));
      }
      opacity = input.attr('data-opacity') === '' ? 1 : keepWithin(parseFloat(input.attr('data-opacity')).toFixed(2), 0, 1);
      if (isNaN(opacity) || !settings.opacity) opacity = 1;
      if (input.minicolors('rgbObject').a <= 1 && rgb && settings.opacity) {
        // Set RGBA string if alpha
        value = 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + parseFloat(opacity) + ')';
      } else {
        // Set RGB string (alpha = 1)
        value = 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
      }
    } else {
      // Returns hex color

      // Checks for input format and does the conversion
      if (isRgb(value)) {
        value = rgbString2hex(value);
      }
      value = convertCase(value, settings.letterCase);
    }

    // Update value from picker
    input.val(value);

    // Set swatch color
    swatch.find('span').css({
      backgroundColor: value,
      opacity: String(opacity)
    });

    // Handle change event
    doChange(input, value, opacity);
  }

  // Sets the color picker values from the input
  function updateFromInput(input, preserveInputValue) {
    var hex, hsb, opacity, keywords, alpha, value, x, y, r, phi;

    // Helpful references
    var minicolors = input.parent();
    var settings = input.data('minicolors-settings');
    var swatch = minicolors.find('.minicolors-input-swatch');

    // Panel objects
    var grid = minicolors.find('.minicolors-grid');
    var slider = minicolors.find('.minicolors-slider');
    var opacitySlider = minicolors.find('.minicolors-opacity-slider');

    // Picker objects
    var gridPicker = grid.find('[class$=-picker]');
    var sliderPicker = slider.find('[class$=-picker]');
    var opacityPicker = opacitySlider.find('[class$=-picker]');

    // Determine hex/HSB values
    if (isRgb(input.val())) {
      // If input value is a rgb(a) string, convert it to hex color and update opacity
      hex = rgbString2hex(input.val());
      alpha = keepWithin(parseFloat(getAlpha(input.val())).toFixed(2), 0, 1);
      if (alpha) {
        input.attr('data-opacity', alpha);
      }
    } else {
      hex = convertCase(parseHex(input.val(), true), settings.letterCase);
    }
    if (!hex) {
      hex = convertCase(parseInput(settings.defaultValue, true), settings.letterCase);
    }
    hsb = hex2hsb(hex);

    // Get array of lowercase keywords
    keywords = !settings.keywords ? [] : $.map(settings.keywords.split(','), function (a) {
      return a.toLowerCase().trim();
    });

    // Set color string
    if (input.val() !== '' && $.inArray(input.val().toLowerCase(), keywords) > -1) {
      value = convertCase(input.val());
    } else {
      value = isRgb(input.val()) ? parseRgb(input.val()) : hex;
    }

    // Update input value
    if (!preserveInputValue) input.val(value);

    // Determine opacity value
    if (settings.opacity) {
      // Get from data-opacity attribute and keep within 0-1 range
      opacity = input.attr('data-opacity') === '' ? 1 : keepWithin(parseFloat(input.attr('data-opacity')).toFixed(2), 0, 1);
      if (isNaN(opacity)) opacity = 1;
      input.attr('data-opacity', opacity);
      swatch.find('span').css('opacity', String(opacity));

      // Set opacity picker position
      y = keepWithin(opacitySlider.height() - opacitySlider.height() * opacity, 0, opacitySlider.height());
      opacityPicker.css('top', y + 'px');
    }

    // Set opacity to zero if input value is transparent
    if (input.val().toLowerCase() === 'transparent') {
      swatch.find('span').css('opacity', String(0));
    }

    // Update swatch
    swatch.find('span').css('backgroundColor', hex);

    // Determine picker locations
    switch (settings.control) {
      case 'wheel':
        // Set grid position
        r = keepWithin(Math.ceil(hsb.s * 0.75), 0, grid.height() / 2);
        phi = hsb.h * Math.PI / 180;
        x = keepWithin(75 - Math.cos(phi) * r, 0, grid.width());
        y = keepWithin(75 - Math.sin(phi) * r, 0, grid.height());
        gridPicker.css({
          top: y + 'px',
          left: x + 'px'
        });

        // Set slider position
        y = 150 - hsb.b / (100 / grid.height());
        if (hex === '') y = 0;
        sliderPicker.css('top', y + 'px');

        // Update panel color
        slider.css('backgroundColor', hsb2hex({
          h: hsb.h,
          s: hsb.s,
          b: 100
        }));
        break;
      case 'saturation':
        // Set grid position
        x = keepWithin(5 * hsb.h / 12, 0, 150);
        y = keepWithin(grid.height() - Math.ceil(hsb.b / (100 / grid.height())), 0, grid.height());
        gridPicker.css({
          top: y + 'px',
          left: x + 'px'
        });

        // Set slider position
        y = keepWithin(slider.height() - hsb.s * (slider.height() / 100), 0, slider.height());
        sliderPicker.css('top', y + 'px');

        // Update UI
        slider.css('backgroundColor', hsb2hex({
          h: hsb.h,
          s: 100,
          b: hsb.b
        }));
        minicolors.find('.minicolors-grid-inner').css('opacity', hsb.s / 100);
        break;
      case 'brightness':
        // Set grid position
        x = keepWithin(5 * hsb.h / 12, 0, 150);
        y = keepWithin(grid.height() - Math.ceil(hsb.s / (100 / grid.height())), 0, grid.height());
        gridPicker.css({
          top: y + 'px',
          left: x + 'px'
        });

        // Set slider position
        y = keepWithin(slider.height() - hsb.b * (slider.height() / 100), 0, slider.height());
        sliderPicker.css('top', y + 'px');

        // Update UI
        slider.css('backgroundColor', hsb2hex({
          h: hsb.h,
          s: hsb.s,
          b: 100
        }));
        minicolors.find('.minicolors-grid-inner').css('opacity', 1 - hsb.b / 100);
        break;
      default:
        // Set grid position
        x = keepWithin(Math.ceil(hsb.s / (100 / grid.width())), 0, grid.width());
        y = keepWithin(grid.height() - Math.ceil(hsb.b / (100 / grid.height())), 0, grid.height());
        gridPicker.css({
          top: y + 'px',
          left: x + 'px'
        });

        // Set slider position
        y = keepWithin(slider.height() - hsb.h / (360 / slider.height()), 0, slider.height());
        sliderPicker.css('top', y + 'px');

        // Update panel color
        grid.css('backgroundColor', hsb2hex({
          h: hsb.h,
          s: 100,
          b: 100
        }));
        break;
    }

    // Fire change event, but only if minicolors is fully initialized
    if (input.data('minicolors-initialized')) {
      doChange(input, value, opacity);
    }
  }

  // Runs the change and changeDelay callbacks
  function doChange(input, value, opacity) {
    var settings = input.data('minicolors-settings');
    var lastChange = input.data('minicolors-lastChange');
    var obj, sel, i;

    // Only run if it actually changed
    if (!lastChange || lastChange.value !== value || lastChange.opacity !== opacity) {
      // Remember last-changed value
      input.data('minicolors-lastChange', {
        value: value,
        opacity: opacity
      });

      // Check and select applicable swatch
      if (settings.swatches && settings.swatches.length !== 0) {
        if (!isRgb(value)) {
          obj = hex2rgb(value);
        } else {
          obj = parseRgb(value, true);
        }
        sel = -1;
        for (i = 0; i < settings.swatches.length; ++i) {
          if (obj.r === settings.swatches[i].r && obj.g === settings.swatches[i].g && obj.b === settings.swatches[i].b && obj.a === settings.swatches[i].a) {
            sel = i;
            break;
          }
        }
        input.parent().find('.minicolors-swatches .minicolors-swatch').removeClass('selected');
        if (sel !== -1) {
          input.parent().find('.minicolors-swatches .minicolors-swatch').eq(i).addClass('selected');
        }
      }

      // Fire change event
      if (settings.change) {
        if (settings.changeDelay) {
          // Call after a delay
          clearTimeout(input.data('minicolors-changeTimeout'));
          input.data('minicolors-changeTimeout', setTimeout(function () {
            settings.change.call(input.get(0), value, opacity);
          }, settings.changeDelay));
        } else {
          // Call immediately
          settings.change.call(input.get(0), value, opacity);
        }
      }
      input.trigger('change').trigger('input');
    }
  }

  // Generates an RGB(A) object based on the input's value
  function rgbObject(input) {
    var rgb,
      opacity = $(input).attr('data-opacity');
    if (isRgb($(input).val())) {
      rgb = parseRgb($(input).val(), true);
    } else {
      var hex = parseHex($(input).val(), true);
      rgb = hex2rgb(hex);
    }
    if (!rgb) return null;
    if (opacity !== undefined) $.extend(rgb, {
      a: parseFloat(opacity)
    });
    return rgb;
  }

  // Generates an RGB(A) string based on the input's value
  function rgbString(input, alpha) {
    var rgb,
      opacity = $(input).attr('data-opacity');
    if (isRgb($(input).val())) {
      rgb = parseRgb($(input).val(), true);
    } else {
      var hex = parseHex($(input).val(), true);
      rgb = hex2rgb(hex);
    }
    if (!rgb) return null;
    if (opacity === undefined) opacity = 1;
    if (alpha) {
      return 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + parseFloat(opacity) + ')';
    } else {
      return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
    }
  }

  // Converts to the letter case specified in settings
  function convertCase(string, letterCase) {
    return letterCase === 'uppercase' ? string.toUpperCase() : string.toLowerCase();
  }

  // Parses a string and returns a valid hex string when possible
  function parseHex(string, expand) {
    string = string.replace(/^#/g, '');
    if (!string.match(/^[A-F0-9]{3,6}/ig)) return '';
    if (string.length !== 3 && string.length !== 6) return '';
    if (string.length === 3 && expand) {
      string = string[0] + string[0] + string[1] + string[1] + string[2] + string[2];
    }
    return '#' + string;
  }

  // Parses a string and returns a valid RGB(A) string when possible
  function parseRgb(string, obj) {
    var values = string.replace(/[^\d,.]/g, '');
    var rgba = values.split(',');
    rgba[0] = keepWithin(parseInt(rgba[0], 10), 0, 255);
    rgba[1] = keepWithin(parseInt(rgba[1], 10), 0, 255);
    rgba[2] = keepWithin(parseInt(rgba[2], 10), 0, 255);
    if (rgba[3] !== undefined) {
      rgba[3] = keepWithin(parseFloat(rgba[3], 10), 0, 1);
    }

    // Return RGBA object
    if (obj) {
      if (rgba[3] !== undefined) {
        return {
          r: rgba[0],
          g: rgba[1],
          b: rgba[2],
          a: rgba[3]
        };
      } else {
        return {
          r: rgba[0],
          g: rgba[1],
          b: rgba[2]
        };
      }
    }

    // Return RGBA string
    if (typeof rgba[3] !== 'undefined' && rgba[3] <= 1) {
      return 'rgba(' + rgba[0] + ', ' + rgba[1] + ', ' + rgba[2] + ', ' + rgba[3] + ')';
    } else {
      return 'rgb(' + rgba[0] + ', ' + rgba[1] + ', ' + rgba[2] + ')';
    }
  }

  // Parses a string and returns a valid color string when possible
  function parseInput(string, expand) {
    if (isRgb(string)) {
      // Returns a valid rgb(a) string
      return parseRgb(string);
    } else {
      return parseHex(string, expand);
    }
  }

  // Keeps value within min and max
  function keepWithin(value, min, max) {
    if (value < min) value = min;
    if (value > max) value = max;
    return value;
  }

  // Checks if a string is a valid RGB(A) string
  function isRgb(string) {
    var rgb = string.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return rgb && rgb.length === 4 ? true : false;
  }

  // Function to get alpha from a RGB(A) string
  function getAlpha(rgba) {
    rgba = rgba.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+(\.\d{1,2})?|\.\d{1,2})[\s+]?/i);
    return rgba && rgba.length === 6 ? rgba[4] : '1';
  }

  // Converts an HSB object to an RGB object
  function hsb2rgb(hsb) {
    var rgb = {};
    var h = Math.round(hsb.h);
    var s = Math.round(hsb.s * 255 / 100);
    var v = Math.round(hsb.b * 255 / 100);
    if (s === 0) {
      rgb.r = rgb.g = rgb.b = v;
    } else {
      var t1 = v;
      var t2 = (255 - s) * v / 255;
      var t3 = (t1 - t2) * (h % 60) / 60;
      if (h === 360) h = 0;
      if (h < 60) {
        rgb.r = t1;
        rgb.b = t2;
        rgb.g = t2 + t3;
      } else if (h < 120) {
        rgb.g = t1;
        rgb.b = t2;
        rgb.r = t1 - t3;
      } else if (h < 180) {
        rgb.g = t1;
        rgb.r = t2;
        rgb.b = t2 + t3;
      } else if (h < 240) {
        rgb.b = t1;
        rgb.r = t2;
        rgb.g = t1 - t3;
      } else if (h < 300) {
        rgb.b = t1;
        rgb.g = t2;
        rgb.r = t2 + t3;
      } else if (h < 360) {
        rgb.r = t1;
        rgb.g = t2;
        rgb.b = t1 - t3;
      } else {
        rgb.r = 0;
        rgb.g = 0;
        rgb.b = 0;
      }
    }
    return {
      r: Math.round(rgb.r),
      g: Math.round(rgb.g),
      b: Math.round(rgb.b)
    };
  }

  // Converts an RGB string to a hex string
  function rgbString2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return rgb && rgb.length === 4 ? '#' + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
  }

  // Converts an RGB object to a hex string
  function rgb2hex(rgb) {
    var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
    $.each(hex, function (nr, val) {
      if (val.length === 1) hex[nr] = '0' + val;
    });
    return '#' + hex.join('');
  }

  // Converts an HSB object to a hex string
  function hsb2hex(hsb) {
    return rgb2hex(hsb2rgb(hsb));
  }

  // Converts a hex string to an HSB object
  function hex2hsb(hex) {
    var hsb = rgb2hsb(hex2rgb(hex));
    if (hsb.s === 0) hsb.h = 360;
    return hsb;
  }

  // Converts an RGB object to an HSB object
  function rgb2hsb(rgb) {
    var hsb = {
      h: 0,
      s: 0,
      b: 0
    };
    var min = Math.min(rgb.r, rgb.g, rgb.b);
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var delta = max - min;
    hsb.b = max;
    hsb.s = max !== 0 ? 255 * delta / max : 0;
    if (hsb.s !== 0) {
      if (rgb.r === max) {
        hsb.h = (rgb.g - rgb.b) / delta;
      } else if (rgb.g === max) {
        hsb.h = 2 + (rgb.b - rgb.r) / delta;
      } else {
        hsb.h = 4 + (rgb.r - rgb.g) / delta;
      }
    } else {
      hsb.h = -1;
    }
    hsb.h *= 60;
    if (hsb.h < 0) {
      hsb.h += 360;
    }
    hsb.s *= 100 / 255;
    hsb.b *= 100 / 255;
    return hsb;
  }

  // Converts a hex string to an RGB object
  function hex2rgb(hex) {
    hex = parseInt(hex.indexOf('#') > -1 ? hex.substring(1) : hex, 16);
    return {
      r: hex >> 16,
      g: (hex & 0x00FF00) >> 8,
      b: hex & 0x0000FF
    };
  }

  // Handle events
  $([document])
  // Hide on clicks outside of the control
  .on('mousedown.minicolors touchstart.minicolors', function (event) {
    if (!$(event.target).parents().add(event.target).hasClass('minicolors')) {
      hide();
    }
  })
  // Start moving
  .on('mousedown.minicolors touchstart.minicolors', '.minicolors-grid, .minicolors-slider, .minicolors-opacity-slider', function (event) {
    var target = $(this);
    event.preventDefault();
    $(event.delegateTarget).data('minicolors-target', target);
    move(target, event, true);
  })
  // Move pickers
  .on('mousemove.minicolors touchmove.minicolors', function (event) {
    var target = $(event.delegateTarget).data('minicolors-target');
    if (target) move(target, event);
  })
  // Stop moving
  .on('mouseup.minicolors touchend.minicolors', function () {
    $(this).removeData('minicolors-target');
  })
  // Selected a swatch
  .on('click.minicolors', '.minicolors-swatches li', function (event) {
    event.preventDefault();
    var target = $(this),
      input = target.parents('.minicolors').find('.minicolors-input'),
      color = target.data('swatch-color');
    updateInput(input, color, getAlpha(color));
    updateFromInput(input);
  })
  // Show panel when swatch is clicked
  .on('mousedown.minicolors touchstart.minicolors', '.minicolors-input-swatch', function (event) {
    var input = $(this).parent().find('.minicolors-input');
    event.preventDefault();
    show(input);
  })
  // Show on focus
  .on('focus.minicolors', '.minicolors-input', function () {
    var input = $(this);
    if (!input.data('minicolors-initialized')) return;
    show(input);
  })
  // Update value on blur
  .on('blur.minicolors', '.minicolors-input', function () {
    var input = $(this);
    var settings = input.data('minicolors-settings');
    var keywords;
    var hex;
    var rgba;
    var swatchOpacity;
    var value;
    if (!input.data('minicolors-initialized')) return;

    // Get array of lowercase keywords
    keywords = !settings.keywords ? [] : $.map(settings.keywords.split(','), function (a) {
      return a.toLowerCase().trim();
    });

    // Set color string
    if (input.val() !== '' && $.inArray(input.val().toLowerCase(), keywords) > -1) {
      value = input.val();
    } else {
      // Get RGBA values for easy conversion
      if (isRgb(input.val())) {
        rgba = parseRgb(input.val(), true);
      } else {
        hex = parseHex(input.val(), true);
        rgba = hex ? hex2rgb(hex) : null;
      }

      // Convert to format
      if (rgba === null) {
        value = settings.defaultValue;
      } else if (settings.format === 'rgb') {
        value = settings.opacity ? parseRgb('rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' + input.attr('data-opacity') + ')') : parseRgb('rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')');
      } else {
        value = rgb2hex(rgba);
      }
    }

    // Update swatch opacity
    swatchOpacity = settings.opacity ? input.attr('data-opacity') : 1;
    if (value.toLowerCase() === 'transparent') swatchOpacity = 0;
    input.closest('.minicolors').find('.minicolors-input-swatch > span').css('opacity', String(swatchOpacity));

    // Set input value
    input.val(value);

    // Is it blank?
    if (input.val() === '') input.val(parseInput(settings.defaultValue, true));

    // Adjust case
    input.val(convertCase(input.val(), settings.letterCase));
  })
  // Handle keypresses
  .on('keydown.minicolors', '.minicolors-input', function (event) {
    var input = $(this);
    if (!input.data('minicolors-initialized')) return;
    switch (event.which) {
      case 9:
        // tab
        hide();
        break;
      case 13: // enter
      case 27:
        // esc
        hide();
        input.blur();
        break;
    }
  })
  // Update on keyup
  .on('keyup.minicolors', '.minicolors-input', function () {
    var input = $(this);
    if (!input.data('minicolors-initialized')) return;
    updateFromInput(input, true);
  })
  // Update on paste
  .on('paste.minicolors', '.minicolors-input', function () {
    var input = $(this);
    if (!input.data('minicolors-initialized')) return;
    setTimeout(function () {
      updateFromInput(input, true);
    }, 1);
  });
});

/*! js-cookie v3.0.5 | MIT */
;
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, function () {
    var current = global.Cookies;
    var exports = global.Cookies = factory();
    exports.noConflict = function () {
      global.Cookies = current;
      return exports;
    };
  }());
})(this, function () {
  'use strict';

  /* eslint-disable no-var */
  function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target;
  }
  /* eslint-enable no-var */

  /* eslint-disable no-var */
  var defaultConverter = {
    read: function (value) {
      if (value[0] === '"') {
        value = value.slice(1, -1);
      }
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function (value) {
      return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    }
  };
  /* eslint-enable no-var */

  /* eslint-disable no-var */

  function init(converter, defaultAttributes) {
    function set(name, value, attributes) {
      if (typeof document === 'undefined') {
        return;
      }
      attributes = assign({}, defaultAttributes, attributes);
      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
      }
      if (attributes.expires) {
        attributes.expires = attributes.expires.toUTCString();
      }
      name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var stringifiedAttributes = '';
      for (var attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue;
        }
        stringifiedAttributes += '; ' + attributeName;
        if (attributes[attributeName] === true) {
          continue;
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }
      return document.cookie = name + '=' + converter.write(value, name) + stringifiedAttributes;
    }
    function get(name) {
      if (typeof document === 'undefined' || arguments.length && !name) {
        return;
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var jar = {};
      for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var value = parts.slice(1).join('=');
        try {
          var found = decodeURIComponent(parts[0]);
          jar[found] = converter.read(value, found);
          if (name === found) {
            break;
          }
        } catch (e) {}
      }
      return name ? jar[name] : jar;
    }
    return Object.create({
      set,
      get,
      remove: function (name, attributes) {
        set(name, '', assign({}, attributes, {
          expires: -1
        }));
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes);
      }
    }, {
      attributes: {
        value: Object.freeze(defaultAttributes)
      },
      converter: {
        value: Object.freeze(converter)
      }
    });
  }
  var api = init(defaultConverter, {
    path: '/'
  });
  /* eslint-enable no-var */

  return api;
});

/*!
 * OverlayScrollbars
 * Version: 2.3.2
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */

var OverlayScrollbarsGlobal = function (t) {
  "use strict";

  function each(t, n) {
    if (isArrayLike(t)) {
      for (let o = 0; o < t.length; o++) {
        if (n(t[o], o, t) === false) {
          break;
        }
      }
    } else if (t) {
      each(Object.keys(t), o => n(t[o], o, t));
    }
    return t;
  }
  function style(t, n) {
    const o = isString(n);
    const s = isArray(n) || o;
    if (s) {
      let s = o ? "" : {};
      if (t) {
        const e = window.getComputedStyle(t, null);
        s = o ? getCSSVal(t, e, n) : n.reduce((n, o) => {
          n[o] = getCSSVal(t, e, o);
          return n;
        }, s);
      }
      return s;
    }
    t && each(keys(n), o => setCSSVal(t, o, n[o]));
  }
  const createCache = (t, n) => {
    const {
      o: o,
      u: s,
      _: e
    } = t;
    let c = o;
    let r;
    const cacheUpdateContextual = (t, n) => {
      const o = c;
      const l = t;
      const i = n || (s ? !s(o, l) : o !== l);
      if (i || e) {
        c = l;
        r = o;
      }
      return [c, i, r];
    };
    const cacheUpdateIsolated = t => cacheUpdateContextual(n(c, r), t);
    const getCurrentCache = t => [c, !!t, r];
    return [n ? cacheUpdateIsolated : cacheUpdateContextual, getCurrentCache];
  };
  const isClient = () => typeof window !== "undefined";
  const n = isClient() && Node.ELEMENT_NODE;
  const {
    toString: o,
    hasOwnProperty: s
  } = Object.prototype;
  const isUndefined = t => t === void 0;
  const isNull = t => t === null;
  const type = t => isUndefined(t) || isNull(t) ? `${t}` : o.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
  const isNumber = t => typeof t === "number";
  const isString = t => typeof t === "string";
  const isBoolean = t => typeof t === "boolean";
  const isFunction = t => typeof t === "function";
  const isArray = t => Array.isArray(t);
  const isObject = t => typeof t === "object" && !isArray(t) && !isNull(t);
  const isArrayLike = t => {
    const n = !!t && t.length;
    const o = isNumber(n) && n > -1 && n % 1 == 0;
    return isArray(t) || !isFunction(t) && o ? n > 0 && isObject(t) ? n - 1 in t : true : false;
  };
  const isPlainObject = t => {
    if (!t || !isObject(t) || type(t) !== "object") {
      return false;
    }
    let n;
    const o = "constructor";
    const e = t[o];
    const c = e && e.prototype;
    const r = s.call(t, o);
    const l = c && s.call(c, "isPrototypeOf");
    if (e && !r && !l) {
      return false;
    }
    for (n in t) {}
    return isUndefined(n) || s.call(t, n);
  };
  const isHTMLElement = t => {
    const o = HTMLElement;
    return t ? o ? t instanceof o : t.nodeType === n : false;
  };
  const isElement = t => {
    const o = Element;
    return t ? o ? t instanceof o : t.nodeType === n : false;
  };
  const indexOf = (t, n, o) => t.indexOf(n, o);
  const push = (t, n, o) => {
    !o && !isString(n) && isArrayLike(n) ? Array.prototype.push.apply(t, n) : t.push(n);
    return t;
  };
  const from = t => {
    const n = Array.from;
    const o = [];
    if (n && t) {
      return n(t);
    }
    if (t instanceof Set) {
      t.forEach(t => {
        push(o, t);
      });
    } else {
      each(t, t => {
        push(o, t);
      });
    }
    return o;
  };
  const isEmptyArray = t => !!t && t.length === 0;
  const runEachAndClear = (t, n, o) => {
    const runFn = t => t && t.apply(void 0, n || []);
    each(t, runFn);
    !o && (t.length = 0);
  };
  const hasOwnProperty = (t, n) => Object.prototype.hasOwnProperty.call(t, n);
  const keys = t => t ? Object.keys(t) : [];
  const assignDeep = (t, n, o, s, e, c, r) => {
    const l = [n, o, s, e, c, r];
    if ((typeof t !== "object" || isNull(t)) && !isFunction(t)) {
      t = {};
    }
    each(l, n => {
      each(keys(n), o => {
        const s = n[o];
        if (t === s) {
          return true;
        }
        const e = isArray(s);
        if (s && isPlainObject(s)) {
          const n = t[o];
          let c = n;
          if (e && !isArray(n)) {
            c = [];
          } else if (!e && !isPlainObject(n)) {
            c = {};
          }
          t[o] = assignDeep(c, s);
        } else {
          t[o] = e ? s.slice() : s;
        }
      });
    });
    return t;
  };
  const isEmptyObject = t => {
    for (const n in t) {
      return false;
    }
    return true;
  };
  const getSetProp = (t, n, o, s) => {
    if (isUndefined(s)) {
      return o ? o[t] : n;
    }
    o && (isString(s) || isNumber(s)) && (o[t] = s);
  };
  const attr = (t, n, o) => {
    if (isUndefined(o)) {
      return t ? t.getAttribute(n) : null;
    }
    t && t.setAttribute(n, o);
  };
  const getValueSet = (t, n) => new Set((attr(t, n) || "").split(" "));
  const removeAttr = (t, n) => {
    t && t.removeAttribute(n);
  };
  const attrClass = (t, n, o, s) => {
    if (o) {
      const e = getValueSet(t, n);
      e[s ? "add" : "delete"](o);
      const c = from(e).join(" ").trim();
      attr(t, n, c);
    }
  };
  const hasAttrClass = (t, n, o) => getValueSet(t, n).has(o);
  const scrollLeft = (t, n) => getSetProp("scrollLeft", 0, t, n);
  const scrollTop = (t, n) => getSetProp("scrollTop", 0, t, n);
  const e = isClient() && Element.prototype;
  const find = (t, n) => {
    const o = [];
    const s = n ? isElement(n) && n : document;
    return s ? push(o, s.querySelectorAll(t)) : o;
  };
  const findFirst = (t, n) => {
    const o = n ? isElement(n) && n : document;
    return o ? o.querySelector(t) : null;
  };
  const is = (t, n) => {
    if (isElement(t)) {
      const o = e.matches || e.msMatchesSelector;
      return o.call(t, n);
    }
    return false;
  };
  const contents = t => t ? from(t.childNodes) : [];
  const parent = t => t && t.parentElement;
  const closest = (t, n) => {
    if (isElement(t)) {
      const o = e.closest;
      if (o) {
        return o.call(t, n);
      }
      do {
        if (is(t, n)) {
          return t;
        }
        t = parent(t);
      } while (t);
    }
  };
  const liesBetween = (t, n, o) => {
    const s = closest(t, n);
    const e = t && findFirst(o, s);
    const c = closest(e, n) === s;
    return s && e ? s === t || e === t || c && closest(closest(t, o), n) !== s : false;
  };
  const before = (t, n, o) => {
    if (o && t) {
      let s = n;
      let e;
      if (isArrayLike(o)) {
        e = document.createDocumentFragment();
        each(o, t => {
          if (t === s) {
            s = t.previousSibling;
          }
          e.appendChild(t);
        });
      } else {
        e = o;
      }
      if (n) {
        if (!s) {
          s = t.firstChild;
        } else if (s !== n) {
          s = s.nextSibling;
        }
      }
      t.insertBefore(e, s || null);
    }
  };
  const appendChildren = (t, n) => {
    before(t, null, n);
  };
  const insertBefore = (t, n) => {
    before(parent(t), t, n);
  };
  const insertAfter = (t, n) => {
    before(parent(t), t && t.nextSibling, n);
  };
  const removeElements = t => {
    if (isArrayLike(t)) {
      each(from(t), t => removeElements(t));
    } else if (t) {
      const n = parent(t);
      if (n) {
        n.removeChild(t);
      }
    }
  };
  const createDiv = t => {
    const n = document.createElement("div");
    if (t) {
      attr(n, "class", t);
    }
    return n;
  };
  const createDOM = t => {
    const n = createDiv();
    n.innerHTML = t.trim();
    return each(contents(n), t => removeElements(t));
  };
  const firstLetterToUpper = t => t.charAt(0).toUpperCase() + t.slice(1);
  const getDummyStyle = () => createDiv().style;
  const c = ["-webkit-", "-moz-", "-o-", "-ms-"];
  const r = ["WebKit", "Moz", "O", "MS", "webkit", "moz", "o", "ms"];
  const l = {};
  const i = {};
  const cssProperty = t => {
    let n = i[t];
    if (hasOwnProperty(i, t)) {
      return n;
    }
    const o = firstLetterToUpper(t);
    const s = getDummyStyle();
    each(c, e => {
      const c = e.replace(/-/g, "");
      const r = [t, e + t, c + o, firstLetterToUpper(c) + o];
      return !(n = r.find(t => s[t] !== void 0));
    });
    return i[t] = n || "";
  };
  const jsAPI = t => {
    if (isClient()) {
      let n = l[t] || window[t];
      if (hasOwnProperty(l, t)) {
        return n;
      }
      each(r, o => {
        n = n || window[o + firstLetterToUpper(t)];
        return !n;
      });
      l[t] = n;
      return n;
    }
  };
  const a = jsAPI("MutationObserver");
  const u = jsAPI("IntersectionObserver");
  const f = jsAPI("ResizeObserver");
  const d = jsAPI("cancelAnimationFrame");
  const _ = jsAPI("requestAnimationFrame");
  const h = jsAPI("ScrollTimeline");
  const g = isClient() && window.setTimeout;
  const v = isClient() && window.clearTimeout;
  const p = /[^\x20\t\r\n\f]+/g;
  const classListAction = (t, n, o) => {
    const s = t && t.classList;
    let e;
    let c = 0;
    let r = false;
    if (s && n && isString(n)) {
      const t = n.match(p) || [];
      r = t.length > 0;
      while (e = t[c++]) {
        r = !!o(s, e) && r;
      }
    }
    return r;
  };
  const removeClass = (t, n) => {
    classListAction(t, n, (t, n) => t.remove(n));
  };
  const addClass = (t, n) => {
    classListAction(t, n, (t, n) => t.add(n));
    return removeClass.bind(0, t, n);
  };
  const {
    max: w
  } = Math;
  const animationCurrentTime = () => performance.now();
  const animateNumber = (t, n, o, s, e) => {
    let c = 0;
    const r = animationCurrentTime();
    const l = w(0, o);
    const frame = o => {
      const i = animationCurrentTime();
      const a = i - r;
      const u = a >= l;
      const f = o ? 1 : 1 - (w(0, r + l - i) / l || 0);
      const d = (n - t) * (isFunction(e) ? e(f, f * l, 0, 1, l) : f) + t;
      const h = u || f === 1;
      s && s(d, f, h);
      c = h ? 0 : _(() => frame());
    };
    frame();
    return t => {
      d(c);
      t && frame(t);
    };
  };
  const equal = (t, n, o, s) => {
    if (t && n) {
      let e = true;
      each(o, o => {
        const c = s ? s(t[o]) : t[o];
        const r = s ? s(n[o]) : n[o];
        if (c !== r) {
          e = false;
        }
      });
      return e;
    }
    return false;
  };
  const equalWH = (t, n) => equal(t, n, ["w", "h"]);
  const equalXY = (t, n) => equal(t, n, ["x", "y"]);
  const equalTRBL = (t, n) => equal(t, n, ["t", "r", "b", "l"]);
  const equalBCRWH = (t, n, o) => equal(t, n, ["width", "height"], o && (t => Math.round(t)));
  const noop = () => {};
  const selfClearTimeout = t => {
    let n;
    const o = t ? g : _;
    const s = t ? v : d;
    return [e => {
      s(n);
      n = o(e, isFunction(t) ? t() : t);
    }, () => s(n)];
  };
  const debounce = (t, n) => {
    let o;
    let s;
    let e;
    let c = noop;
    const {
      g: r,
      v: l,
      p: i
    } = n || {};
    const a = function invokeFunctionToDebounce(n) {
      c();
      v(o);
      o = s = void 0;
      c = noop;
      t.apply(this, n);
    };
    const mergeParms = t => i && s ? i(s, t) : t;
    const flush = () => {
      if (c !== noop) {
        a(mergeParms(e) || e);
      }
    };
    const u = function debouncedFn() {
      const t = from(arguments);
      const n = isFunction(r) ? r() : r;
      const i = isNumber(n) && n >= 0;
      if (i) {
        const r = isFunction(l) ? l() : l;
        const i = isNumber(r) && r >= 0;
        const u = n > 0 ? g : _;
        const f = n > 0 ? v : d;
        const h = mergeParms(t);
        const p = h || t;
        const w = a.bind(0, p);
        c();
        const b = u(w, n);
        c = () => f(b);
        if (i && !o) {
          o = g(flush, r);
        }
        s = e = p;
      } else {
        a(t);
      }
    };
    u.m = flush;
    return u;
  };
  const b = {
    opacity: 1,
    zIndex: 1
  };
  const parseToZeroOrNumber = (t, n) => {
    const o = t || "";
    const s = n ? parseFloat(o) : parseInt(o, 10);
    return s === s ? s : 0;
  };
  const adaptCSSVal = (t, n) => !b[t] && isNumber(n) ? `${n}px` : n;
  const getCSSVal = (t, n, o) => String((n != null ? n[o] || n.getPropertyValue(o) : t.style[o]) || "");
  const setCSSVal = (t, n, o) => {
    try {
      const {
        style: s
      } = t;
      if (!isUndefined(s[n])) {
        s[n] = adaptCSSVal(n, o);
      } else {
        s.setProperty(n, o);
      }
    } catch (s) {}
  };
  const directionIsRTL = t => style(t, "direction") === "rtl";
  const topRightBottomLeft = (t, n, o) => {
    const s = n ? `${n}-` : "";
    const e = o ? `-${o}` : "";
    const c = `${s}top${e}`;
    const r = `${s}right${e}`;
    const l = `${s}bottom${e}`;
    const i = `${s}left${e}`;
    const a = style(t, [c, r, l, i]);
    return {
      t: parseToZeroOrNumber(a[c], true),
      r: parseToZeroOrNumber(a[r], true),
      b: parseToZeroOrNumber(a[l], true),
      l: parseToZeroOrNumber(a[i], true)
    };
  };
  const getTrasformTranslateValue = (t, n) => `translate${isArray(t) ? `(${t[0]},${t[1]})` : `${n ? "X" : "Y"}(${t})`}`;
  const {
    round: m
  } = Math;
  const y = {
    w: 0,
    h: 0
  };
  const windowSize = () => ({
    w: window.innerWidth,
    h: window.innerHeight
  });
  const offsetSize = t => t ? {
    w: t.offsetWidth,
    h: t.offsetHeight
  } : y;
  const clientSize = t => t ? {
    w: t.clientWidth,
    h: t.clientHeight
  } : y;
  const scrollSize = t => t ? {
    w: t.scrollWidth,
    h: t.scrollHeight
  } : y;
  const fractionalSize = t => {
    const n = parseFloat(style(t, "height")) || 0;
    const o = parseFloat(style(t, "width")) || 0;
    return {
      w: o - m(o),
      h: n - m(n)
    };
  };
  const getBoundingClientRect = t => t.getBoundingClientRect();
  const domRectHasDimensions = t => !!(t && (t.height || t.width));
  let S;
  const supportPassiveEvents = () => {
    if (isUndefined(S)) {
      S = false;
      try {
        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
          get() {
            S = true;
          }
        }));
      } catch (t) {}
    }
    return S;
  };
  const splitEventNames = t => t.split(" ");
  const off = (t, n, o, s) => {
    each(splitEventNames(n), n => {
      t.removeEventListener(n, o, s);
    });
  };
  const on = (t, n, o, s) => {
    var e;
    const c = supportPassiveEvents();
    const r = (e = c && s && s.S) != null ? e : c;
    const l = s && s.$ || false;
    const i = s && s.C || false;
    const a = [];
    const u = c ? {
      passive: r,
      capture: l
    } : l;
    each(splitEventNames(n), n => {
      const s = i ? e => {
        t.removeEventListener(n, s, l);
        o && o(e);
      } : o;
      push(a, off.bind(null, t, n, s, l));
      t.addEventListener(n, s, u);
    });
    return runEachAndClear.bind(0, a);
  };
  const stopPropagation = t => t.stopPropagation();
  const preventDefault = t => t.preventDefault();
  const $ = {
    x: 0,
    y: 0
  };
  const absoluteCoordinates = t => {
    const n = t ? getBoundingClientRect(t) : 0;
    return n ? {
      x: n.left + window.pageYOffset,
      y: n.top + window.pageXOffset
    } : $;
  };
  const manageListener = (t, n) => {
    each(isArray(n) ? n : [n], t);
  };
  const createEventListenerHub = t => {
    const n = new Map();
    const removeEvent = (t, o) => {
      if (t) {
        const s = n.get(t);
        manageListener(t => {
          if (s) {
            s[t ? "delete" : "clear"](t);
          }
        }, o);
      } else {
        n.forEach(t => {
          t.clear();
        });
        n.clear();
      }
    };
    const addEvent = (t, o) => {
      if (isString(t)) {
        const s = n.get(t) || new Set();
        n.set(t, s);
        manageListener(t => {
          isFunction(t) && s.add(t);
        }, o);
        return removeEvent.bind(0, t, o);
      }
      if (isBoolean(o) && o) {
        removeEvent();
      }
      const s = keys(t);
      const e = [];
      each(s, n => {
        const o = t[n];
        o && push(e, addEvent(n, o));
      });
      return runEachAndClear.bind(0, e);
    };
    const triggerEvent = (t, o) => {
      const s = n.get(t);
      each(from(s), t => {
        if (o && !isEmptyArray(o)) {
          t.apply(0, o);
        } else {
          t();
        }
      });
    };
    addEvent(t || {});
    return [addEvent, removeEvent, triggerEvent];
  };
  const opsStringify = t => JSON.stringify(t, (t, n) => {
    if (isFunction(n)) {
      throw new Error();
    }
    return n;
  });
  const x = {
    paddingAbsolute: false,
    showNativeOverlaidScrollbars: false,
    update: {
      elementEvents: [["img", "load"]],
      debounce: [0, 33],
      attributes: null,
      ignoreMutation: null
    },
    overflow: {
      x: "scroll",
      y: "scroll"
    },
    scrollbars: {
      theme: "os-theme-dark",
      visibility: "auto",
      autoHide: "never",
      autoHideDelay: 1300,
      autoHideSuspend: false,
      dragScroll: true,
      clickScroll: false,
      pointers: ["mouse", "touch", "pen"]
    }
  };
  const getOptionsDiff = (t, n) => {
    const o = {};
    const s = keys(n).concat(keys(t));
    each(s, s => {
      const e = t[s];
      const c = n[s];
      if (isObject(e) && isObject(c)) {
        assignDeep(o[s] = {}, getOptionsDiff(e, c));
        if (isEmptyObject(o[s])) {
          delete o[s];
        }
      } else if (hasOwnProperty(n, s) && c !== e) {
        let t = true;
        if (isArray(e) || isArray(c)) {
          try {
            if (opsStringify(e) === opsStringify(c)) {
              t = false;
            }
          } catch (r) {}
        }
        if (t) {
          o[s] = c;
        }
      }
    });
    return o;
  };
  const C = `data-overlayscrollbars`;
  const O = "os-environment";
  const T = `${O}-flexbox-glue`;
  const z = `${T}-max`;
  const E = `os-scrollbar-hidden`;
  const A = `${C}-initialize`;
  const I = C;
  const H = `${I}-overflow-x`;
  const L = `${I}-overflow-y`;
  const M = "overflowVisible";
  const P = "scrollbarHidden";
  const D = "scrollbarPressed";
  const R = "updating";
  const k = `${C}-viewport`;
  const B = "arrange";
  const V = "scrollbarHidden";
  const Y = M;
  const j = `${C}-padding`;
  const N = Y;
  const q = `${C}-content`;
  const G = "os-size-observer";
  const F = `${G}-appear`;
  const X = `${G}-listener`;
  const U = `${X}-scroll`;
  const W = `${X}-item`;
  const Z = `${W}-final`;
  const J = "os-trinsic-observer";
  const K = "os-no-css-vars";
  const Q = "os-theme-none";
  const tt = "os-scrollbar";
  const nt = `${tt}-rtl`;
  const ot = `${tt}-horizontal`;
  const st = `${tt}-vertical`;
  const et = `${tt}-track`;
  const ct = `${tt}-handle`;
  const rt = `${tt}-visible`;
  const lt = `${tt}-cornerless`;
  const it = `${tt}-transitionless`;
  const at = `${tt}-interaction`;
  const ut = `${tt}-unusable`;
  const ft = `${tt}-auto-hide`;
  const dt = `${ft}-hidden`;
  const _t = `${tt}-wheel`;
  const ht = `${et}-interactive`;
  const gt = `${ct}-interactive`;
  const vt = {};
  const getPlugins = () => vt;
  const addPlugin = t => {
    const n = [];
    each(isArray(t) ? t : [t], t => {
      const o = keys(t);
      each(o, o => {
        push(n, vt[o] = t[o]);
      });
    });
    return n;
  };
  const pt = {
    boolean: "__TPL_boolean_TYPE__",
    number: "__TPL_number_TYPE__",
    string: "__TPL_string_TYPE__",
    array: "__TPL_array_TYPE__",
    object: "__TPL_object_TYPE__",
    function: "__TPL_function_TYPE__",
    null: "__TPL_null_TYPE__"
  };
  const wt = pt.number;
  const bt = pt.boolean;
  const mt = [pt.array, pt.null];
  const yt = "hidden scroll visible visible-hidden";
  const St = "visible hidden auto";
  const $t = "never scroll leavemove";
  ({
    paddingAbsolute: bt,
    showNativeOverlaidScrollbars: bt,
    update: {
      elementEvents: mt,
      attributes: mt,
      debounce: [pt.number, pt.array, pt.null],
      ignoreMutation: [pt.function, pt.null]
    },
    overflow: {
      x: yt,
      y: yt
    },
    scrollbars: {
      theme: [pt.string, pt.null],
      visibility: St,
      autoHide: $t,
      autoHideDelay: wt,
      autoHideSuspend: bt,
      dragScroll: bt,
      clickScroll: bt,
      pointers: [pt.array, pt.null]
    }
  });
  const xt = "__osOptionsValidationPlugin";
  const Ct = 3333333;
  const Ot = "scroll";
  const Tt = "__osSizeObserverPlugin";
  const zt = /* @__PURE__ */(() => ({
    [Tt]: {
      O: (t, n, o) => {
        const s = createDOM(`<div class="${W}" dir="ltr"><div class="${W}"><div class="${Z}"></div></div><div class="${W}"><div class="${Z}" style="width: 200%; height: 200%"></div></div></div>`);
        appendChildren(t, s);
        addClass(t, U);
        const e = s[0];
        const c = e.lastChild;
        const r = e.firstChild;
        const l = r == null ? void 0 : r.firstChild;
        let i = offsetSize(e);
        let a = i;
        let u = false;
        let f;
        const reset = () => {
          scrollLeft(r, Ct);
          scrollTop(r, Ct);
          scrollLeft(c, Ct);
          scrollTop(c, Ct);
        };
        const onResized = t => {
          f = 0;
          if (u) {
            i = a;
            n(t === true);
          }
        };
        const onScroll = t => {
          a = offsetSize(e);
          u = !t || !equalWH(a, i);
          if (t) {
            stopPropagation(t);
            if (u && !f) {
              d(f);
              f = _(onResized);
            }
          } else {
            onResized(t === false);
          }
          reset();
        };
        const h = push([], [on(r, Ot, onScroll), on(c, Ot, onScroll)]);
        style(l, {
          width: Ct,
          height: Ct
        });
        _(reset);
        return [o ? onScroll.bind(0, false) : reset, h];
      }
    }
  }))();
  let Et = 0;
  const {
    round: At,
    abs: It
  } = Math;
  const getWindowDPR = () => {
    const t = window.screen.deviceXDPI || 0;
    const n = window.screen.logicalXDPI || 1;
    return window.devicePixelRatio || t / n;
  };
  const diffBiggerThanOne = (t, n) => {
    const o = It(t);
    const s = It(n);
    return !(o === s || o + 1 === s || o - 1 === s);
  };
  const Ht = "__osScrollbarsHidingPlugin";
  const Lt = /* @__PURE__ */(() => ({
    [Ht]: {
      T: t => {
        const {
          A: n,
          I: o,
          H: s
        } = t;
        const e = !s && !n && (o.x || o.y);
        const c = e ? document.createElement("style") : false;
        if (c) {
          attr(c, "id", `${k}-${B}-${Et}`);
          Et++;
        }
        return c;
      },
      L: (t, n, o, s, e, c, r) => {
        const arrangeViewport = (n, c, r, l) => {
          if (t) {
            const {
              M: t
            } = e();
            const {
              P: i,
              D: a
            } = n;
            const {
              x: u,
              y: f
            } = a;
            const {
              x: d,
              y: _
            } = i;
            const h = l ? "paddingRight" : "paddingLeft";
            const g = t[h];
            const v = t.paddingTop;
            const p = c.w + r.w;
            const w = c.h + r.h;
            const b = {
              w: _ && f ? `${_ + p - g}px` : "",
              h: d && u ? `${d + w - v}px` : ""
            };
            if (s) {
              const {
                sheet: t
              } = s;
              if (t) {
                const {
                  cssRules: n
                } = t;
                if (n) {
                  if (!n.length) {
                    t.insertRule(`#${attr(s, "id")} + [${k}~='${B}']::before {}`, 0);
                  }
                  const o = n[0].style;
                  o.width = b.w;
                  o.height = b.h;
                }
              }
            } else {
              style(o, {
                "--os-vaw": b.w,
                "--os-vah": b.h
              });
            }
          }
          return t;
        };
        const undoViewportArrange = (s, l, i) => {
          if (t) {
            const a = i || c(s);
            const {
              M: u
            } = e();
            const {
              D: f
            } = a;
            const {
              x: d,
              y: _
            } = f;
            const h = {};
            const assignProps = t => each(t.split(" "), t => {
              h[t] = u[t];
            });
            if (d) {
              assignProps("marginBottom paddingTop paddingBottom");
            }
            if (_) {
              assignProps("marginLeft marginRight paddingLeft paddingRight");
            }
            const g = style(o, keys(h));
            attrClass(o, k, B);
            if (!n) {
              h.height = "";
            }
            style(o, h);
            return [() => {
              r(a, l, t, g);
              style(o, g);
              attrClass(o, k, B, true);
            }, a];
          }
          return [noop];
        };
        return [arrangeViewport, undoViewportArrange];
      },
      R: () => {
        let t = {
          w: 0,
          h: 0
        };
        let n = 0;
        return (o, s, e) => {
          const c = windowSize();
          const r = {
            w: c.w - t.w,
            h: c.h - t.h
          };
          if (r.w === 0 && r.h === 0) {
            return;
          }
          const l = {
            w: It(r.w),
            h: It(r.h)
          };
          const i = {
            w: It(At(c.w / (t.w / 100))),
            h: It(At(c.h / (t.h / 100)))
          };
          const a = getWindowDPR();
          const u = l.w > 2 && l.h > 2;
          const f = !diffBiggerThanOne(i.w, i.h);
          const d = a !== n && a > 0;
          const _ = u && f && d;
          if (_) {
            const [t, n] = s();
            assignDeep(o.k, t);
            if (n) {
              e();
            }
          }
          t = c;
          n = a;
        };
      }
    }
  }))();
  const Mt = "__osClickScrollPlugin";
  const Pt = /* @__PURE__ */(() => ({
    [Mt]: {
      O: (t, n, o, s, e) => {
        let c = 0;
        let r = noop;
        const animateClickScroll = l => {
          r = animateNumber(l, l + s * Math.sign(o), 133, (o, l, i) => {
            t(o);
            const a = n();
            const u = a + s;
            const f = e >= a && e <= u;
            if (i && !f) {
              if (c) {
                animateClickScroll(o);
              } else {
                const t = setTimeout(() => {
                  animateClickScroll(o);
                }, 222);
                r = () => {
                  clearTimeout(t);
                };
              }
              c++;
            }
          });
        };
        animateClickScroll(0);
        return () => r();
      }
    }
  }))();
  let Dt;
  const getNativeScrollbarSize = (t, n, o, s) => {
    appendChildren(t, n);
    const e = clientSize(n);
    const c = offsetSize(n);
    const r = fractionalSize(o);
    s && removeElements(n);
    return {
      x: c.h - e.h + r.h,
      y: c.w - e.w + r.w
    };
  };
  const getNativeScrollbarsHiding = t => {
    let n = false;
    const o = addClass(t, E);
    try {
      n = style(t, cssProperty("scrollbar-width")) === "none" || window.getComputedStyle(t, "::-webkit-scrollbar").getPropertyValue("display") === "none";
    } catch (s) {}
    o();
    return n;
  };
  const getRtlScrollBehavior = (t, n) => {
    const o = "hidden";
    style(t, {
      overflowX: o,
      overflowY: o,
      direction: "rtl"
    });
    scrollLeft(t, 0);
    const s = absoluteCoordinates(t);
    const e = absoluteCoordinates(n);
    scrollLeft(t, -999);
    const c = absoluteCoordinates(n);
    return {
      i: s.x === e.x,
      n: e.x !== c.x
    };
  };
  const getFlexboxGlue = (t, n) => {
    const o = addClass(t, T);
    const s = getBoundingClientRect(t);
    const e = getBoundingClientRect(n);
    const c = equalBCRWH(e, s, true);
    const r = addClass(t, z);
    const l = getBoundingClientRect(t);
    const i = getBoundingClientRect(n);
    const a = equalBCRWH(i, l, true);
    o();
    r();
    return c && a;
  };
  const createEnvironment = () => {
    const {
      body: t
    } = document;
    const n = createDOM(`<div class="${O}"><div></div></div>`);
    const o = n[0];
    const s = o.firstChild;
    const [e,, c] = createEventListenerHub();
    const [r, l] = createCache({
      o: getNativeScrollbarSize(t, o, s),
      u: equalXY
    }, getNativeScrollbarSize.bind(0, t, o, s, true));
    const [i] = l();
    const a = getNativeScrollbarsHiding(o);
    const u = {
      x: i.x === 0,
      y: i.y === 0
    };
    const f = {
      elements: {
        host: null,
        padding: !a,
        viewport: t => a && t === t.ownerDocument.body && t,
        content: false
      },
      scrollbars: {
        slot: true
      },
      cancel: {
        nativeScrollbarsOverlaid: false,
        body: null
      }
    };
    const d = assignDeep({}, x);
    const _ = assignDeep.bind(0, {}, d);
    const g = assignDeep.bind(0, {}, f);
    const v = {
      k: i,
      I: u,
      A: a,
      H: style(o, "zIndex") === "-1",
      B: !!h,
      V: getRtlScrollBehavior(o, s),
      Y: getFlexboxGlue(o, s),
      j: e.bind(0, "z"),
      N: e.bind(0, "r"),
      q: g,
      G: t => assignDeep(f, t) && g(),
      F: _,
      X: t => assignDeep(d, t) && _(),
      U: assignDeep({}, f),
      W: assignDeep({}, d)
    };
    const p = window.addEventListener;
    const w = debounce(t => c(t ? "z" : "r"), {
      g: 33,
      v: 99
    });
    removeAttr(o, "style");
    removeElements(o);
    p("resize", w.bind(0, false));
    if (!a && (!u.x || !u.y)) {
      let t;
      p("resize", () => {
        const n = getPlugins()[Ht];
        t = t || n && n.R();
        t && t(v, r, w.bind(0, true));
      });
    }
    return v;
  };
  const getEnvironment = () => {
    if (!Dt) {
      Dt = createEnvironment();
    }
    return Dt;
  };
  const resolveInitialization = (t, n) => isFunction(n) ? n.apply(0, t) : n;
  const staticInitializationElement = (t, n, o, s) => {
    const e = isUndefined(s) ? o : s;
    const c = resolveInitialization(t, e);
    return c || n.apply(0, t);
  };
  const dynamicInitializationElement = (t, n, o, s) => {
    const e = isUndefined(s) ? o : s;
    const c = resolveInitialization(t, e);
    return !!c && (isHTMLElement(c) ? c : n.apply(0, t));
  };
  const cancelInitialization = (t, n, o) => {
    const {
      nativeScrollbarsOverlaid: s,
      body: e
    } = o || {};
    const {
      I: c,
      A: r
    } = getEnvironment();
    const {
      nativeScrollbarsOverlaid: l,
      body: i
    } = n;
    const a = s != null ? s : l;
    const u = isUndefined(e) ? i : e;
    const f = (c.x || c.y) && a;
    const d = t && (isNull(u) ? !r : u);
    return !!f || !!d;
  };
  const Rt = new WeakMap();
  const addInstance = (t, n) => {
    Rt.set(t, n);
  };
  const removeInstance = t => {
    Rt.delete(t);
  };
  const getInstance = t => Rt.get(t);
  const getPropByPath = (t, n) => t ? n.split(".").reduce((t, n) => t && hasOwnProperty(t, n) ? t[n] : void 0, t) : void 0;
  const createOptionCheck = (t, n, o) => s => [getPropByPath(t, s), o || getPropByPath(n, s) !== void 0];
  const createState = t => {
    let n = t;
    return [() => n, t => {
      n = assignDeep({}, n, t);
    }];
  };
  const kt = "tabindex";
  const Bt = createDiv.bind(0, "");
  const unwrap = t => {
    appendChildren(parent(t), contents(t));
    removeElements(t);
  };
  const createStructureSetupElements = t => {
    const n = getEnvironment();
    const {
      q: o,
      A: s
    } = n;
    const e = getPlugins()[Ht];
    const c = e && e.T;
    const {
      elements: r
    } = o();
    const {
      host: l,
      padding: i,
      viewport: a,
      content: u
    } = r;
    const f = isHTMLElement(t);
    const d = f ? {} : t;
    const {
      elements: _
    } = d;
    const {
      host: h,
      padding: g,
      viewport: v,
      content: p
    } = _ || {};
    const w = f ? t : d.target;
    const b = is(w, "textarea");
    const m = w.ownerDocument;
    const y = m.documentElement;
    const S = w === m.body;
    const $ = m.defaultView;
    const x = staticInitializationElement.bind(0, [w]);
    const C = dynamicInitializationElement.bind(0, [w]);
    const O = resolveInitialization.bind(0, [w]);
    const T = x.bind(0, Bt, a);
    const z = C.bind(0, Bt, u);
    const M = T(v);
    const P = M === w;
    const D = P && S;
    const R = !P && z(p);
    const B = !P && isHTMLElement(M) && M === R;
    const Y = B && !!O(u);
    const N = Y ? T() : M;
    const G = Y ? R : z();
    const F = B ? N : M;
    const X = D ? y : F;
    const U = b ? x(Bt, l, h) : w;
    const W = D ? X : U;
    const Z = B ? G : R;
    const J = m.activeElement;
    const K = !P && $.top === $ && J === w;
    const Q = {
      Z: w,
      J: W,
      K: X,
      tt: !P && C(Bt, i, g),
      nt: Z,
      ot: !P && !s && c && c(n),
      st: D ? y : X,
      et: D ? m : X,
      ct: $,
      rt: m,
      lt: b,
      it: S,
      ut: f,
      ft: P,
      dt: B,
      _t: (t, n) => hasAttrClass(X, P ? I : k, P ? n : t),
      ht: (t, n, o) => attrClass(X, P ? I : k, P ? n : t, o)
    };
    const tt = keys(Q).reduce((t, n) => {
      const o = Q[n];
      return push(t, o && isHTMLElement(o) && !parent(o) ? o : false);
    }, []);
    const elementIsGenerated = t => t ? indexOf(tt, t) > -1 : null;
    const {
      Z: nt,
      J: ot,
      tt: st,
      K: et,
      nt: ct,
      ot: rt
    } = Q;
    const lt = [() => {
      removeAttr(ot, I);
      removeAttr(ot, A);
      removeAttr(nt, A);
      if (S) {
        removeAttr(y, I);
        removeAttr(y, A);
      }
    }];
    const it = b && elementIsGenerated(ot);
    let at = b ? nt : contents([ct, et, st, ot, nt].find(t => elementIsGenerated(t) === false));
    const ut = D ? nt : ct || et;
    const appendElements = () => {
      attr(ot, I, P ? "viewport" : "host");
      attr(st, j, "");
      attr(ct, q, "");
      if (!P) {
        attr(et, k, "");
      }
      const t = S && !P ? addClass(parent(w), E) : noop;
      if (it) {
        insertAfter(nt, ot);
        push(lt, () => {
          insertAfter(ot, nt);
          removeElements(ot);
        });
      }
      appendChildren(ut, at);
      appendChildren(ot, st);
      appendChildren(st || ot, !P && et);
      appendChildren(et, ct);
      push(lt, () => {
        t();
        removeAttr(st, j);
        removeAttr(ct, q);
        removeAttr(et, H);
        removeAttr(et, L);
        removeAttr(et, k);
        if (elementIsGenerated(ct)) {
          unwrap(ct);
        }
        if (elementIsGenerated(et)) {
          unwrap(et);
        }
        if (elementIsGenerated(st)) {
          unwrap(st);
        }
      });
      if (s && !P) {
        attrClass(et, k, V, true);
        push(lt, removeAttr.bind(0, et, k));
      }
      if (rt) {
        insertBefore(et, rt);
        push(lt, removeElements.bind(0, rt));
      }
      if (K) {
        const t = attr(et, kt);
        attr(et, kt, "-1");
        et.focus();
        const revertViewportTabIndex = () => t ? attr(et, kt, t) : removeAttr(et, kt);
        const n = on(m, "pointerdown keydown", () => {
          revertViewportTabIndex();
          n();
        });
        push(lt, [revertViewportTabIndex, n]);
      } else if (J && J.focus) {
        J.focus();
      }
      at = 0;
    };
    return [Q, appendElements, runEachAndClear.bind(0, lt)];
  };
  const createTrinsicUpdateSegment = (t, n) => {
    const {
      nt: o
    } = t;
    const [s] = n;
    return t => {
      const {
        Y: n
      } = getEnvironment();
      const {
        gt: e
      } = s();
      const {
        vt: c
      } = t;
      const r = (o || !n) && c;
      if (r) {
        style(o, {
          height: e ? "" : "100%"
        });
      }
      return {
        wt: r,
        bt: r
      };
    };
  };
  const createPaddingUpdateSegment = (t, n) => {
    const [o, s] = n;
    const {
      J: e,
      tt: c,
      K: r,
      ft: l
    } = t;
    const [i, a] = createCache({
      u: equalTRBL,
      o: topRightBottomLeft()
    }, topRightBottomLeft.bind(0, e, "padding", ""));
    return (t, n, e) => {
      let [u, f] = a(e);
      const {
        A: d,
        Y: _
      } = getEnvironment();
      const {
        yt: h
      } = o();
      const {
        wt: g,
        bt: v,
        St: p
      } = t;
      const [w, b] = n("paddingAbsolute");
      const m = !_ && v;
      if (g || f || m) {
        [u, f] = i(e);
      }
      const y = !l && (b || p || f);
      if (y) {
        const t = !w || !c && !d;
        const n = u.r + u.l;
        const o = u.t + u.b;
        const e = {
          marginRight: t && !h ? -n : 0,
          marginBottom: t ? -o : 0,
          marginLeft: t && h ? -n : 0,
          top: t ? -u.t : 0,
          right: t ? h ? -u.r : "auto" : 0,
          left: t ? h ? "auto" : -u.l : 0,
          width: t ? `calc(100% + ${n}px)` : ""
        };
        const l = {
          paddingTop: t ? u.t : 0,
          paddingRight: t ? u.r : 0,
          paddingBottom: t ? u.b : 0,
          paddingLeft: t ? u.l : 0
        };
        style(c || r, e);
        style(r, l);
        s({
          tt: u,
          $t: !t,
          M: c ? l : assignDeep({}, e, l)
        });
      }
      return {
        xt: y
      };
    };
  };
  const {
    max: Vt
  } = Math;
  const Yt = Vt.bind(0, 0);
  const jt = "visible";
  const Nt = "hidden";
  const qt = 42;
  const Gt = {
    u: equalWH,
    o: {
      w: 0,
      h: 0
    }
  };
  const Ft = {
    u: equalXY,
    o: {
      x: Nt,
      y: Nt
    }
  };
  const getOverflowAmount = (t, n) => {
    const o = window.devicePixelRatio % 1 !== 0 ? 1 : 0;
    const s = {
      w: Yt(t.w - n.w),
      h: Yt(t.h - n.h)
    };
    return {
      w: s.w > o ? s.w : 0,
      h: s.h > o ? s.h : 0
    };
  };
  const overflowIsVisible = t => t.indexOf(jt) === 0;
  const createOverflowUpdateSegment = (t, n) => {
    const [o, s] = n;
    const {
      J: e,
      tt: c,
      K: r,
      ot: l,
      ft: i,
      ht: a,
      it: u,
      ct: f
    } = t;
    const {
      k: d,
      Y: _,
      A: h,
      I: g
    } = getEnvironment();
    const v = getPlugins()[Ht];
    const p = !i && !h && (g.x || g.y);
    const w = u && i;
    const [b, m] = createCache(Gt, fractionalSize.bind(0, r));
    const [y, S] = createCache(Gt, scrollSize.bind(0, r));
    const [$, x] = createCache(Gt);
    const [C, O] = createCache(Gt);
    const [T] = createCache(Ft);
    const fixFlexboxGlue = (t, n) => {
      style(r, {
        height: ""
      });
      if (n) {
        const {
          $t: n,
          tt: s
        } = o();
        const {
          Ct: c,
          P: l
        } = t;
        const i = fractionalSize(e);
        const a = clientSize(e);
        const u = style(r, "boxSizing") === "content-box";
        const f = n || u ? s.b + s.t : 0;
        const d = !(g.x && u);
        style(r, {
          height: a.h + i.h + (c.x && d ? l.x : 0) - f
        });
      }
    };
    const getViewportOverflowState = (t, n) => {
      const o = !h && !t ? qt : 0;
      const getStatePerAxis = (t, s, e) => {
        const c = style(r, t);
        const l = n ? n[t] : c;
        const i = l === "scroll";
        const a = s ? o : e;
        const u = i && !h ? a : 0;
        const f = s && !!o;
        return [c, i, u, f];
      };
      const [s, e, c, l] = getStatePerAxis("overflowX", g.x, d.x);
      const [i, a, u, f] = getStatePerAxis("overflowY", g.y, d.y);
      return {
        Ot: {
          x: s,
          y: i
        },
        Ct: {
          x: e,
          y: a
        },
        P: {
          x: c,
          y: u
        },
        D: {
          x: l,
          y: f
        }
      };
    };
    const setViewportOverflowState = (t, n, o, s) => {
      const setAxisOverflowStyle = (t, n) => {
        const o = overflowIsVisible(t);
        const s = n && o && t.replace(`${jt}-`, "") || "";
        return [n && !o ? t : "", overflowIsVisible(s) ? "hidden" : s];
      };
      const [e, c] = setAxisOverflowStyle(o.x, n.x);
      const [r, l] = setAxisOverflowStyle(o.y, n.y);
      s.overflowX = c && r ? c : e;
      s.overflowY = l && e ? l : r;
      return getViewportOverflowState(t, s);
    };
    const hideNativeScrollbars = (t, n, s, e) => {
      const {
        P: c,
        D: r
      } = t;
      const {
        x: l,
        y: i
      } = r;
      const {
        x: a,
        y: u
      } = c;
      const {
        M: f
      } = o();
      const d = n ? "marginLeft" : "marginRight";
      const _ = n ? "paddingLeft" : "paddingRight";
      const h = f[d];
      const g = f.marginBottom;
      const v = f[_];
      const p = f.paddingBottom;
      e.width = `calc(100% + ${u + h * -1}px)`;
      e[d] = -u + h;
      e.marginBottom = -a + g;
      if (s) {
        e[_] = v + (i ? u : 0);
        e.paddingBottom = p + (l ? a : 0);
      }
    };
    const [z, E] = v ? v.L(p, _, r, l, o, getViewportOverflowState, hideNativeScrollbars) : [() => p, () => [noop]];
    return (t, n, l) => {
      const {
        wt: u,
        Tt: d,
        bt: v,
        xt: p,
        vt: A,
        St: D
      } = t;
      const {
        gt: R,
        yt: B
      } = o();
      const [q, G] = n("showNativeOverlaidScrollbars");
      const [F, X] = n("overflow");
      const U = q && g.x && g.y;
      const W = !i && !_ && (u || v || d || G || A);
      const Z = overflowIsVisible(F.x);
      const J = overflowIsVisible(F.y);
      const K = Z || J;
      let Q = m(l);
      let tt = S(l);
      let nt = x(l);
      let ot = O(l);
      let st;
      if (G && h) {
        a(V, P, !U);
      }
      if (W) {
        st = getViewportOverflowState(U);
        fixFlexboxGlue(st, R);
      }
      if (u || p || v || D || G) {
        if (K) {
          a(Y, M, false);
        }
        const [t, n] = E(U, B, st);
        const [o, s] = Q = b(l);
        const [e, c] = tt = y(l);
        const i = clientSize(r);
        let u = e;
        let d = i;
        t();
        if ((c || s || G) && n && !U && z(n, e, o, B)) {
          d = clientSize(r);
          u = scrollSize(r);
        }
        const _ = {
          w: Yt(Vt(e.w, u.w) + o.w),
          h: Yt(Vt(e.h, u.h) + o.h)
        };
        const h = {
          w: Yt((w ? f.innerWidth : d.w + Yt(i.w - e.w)) + o.w),
          h: Yt((w ? f.innerHeight + o.h : d.h + Yt(i.h - e.h)) + o.h)
        };
        ot = C(h);
        nt = $(getOverflowAmount(_, h), l);
      }
      const [et, ct] = ot;
      const [rt, lt] = nt;
      const [it, at] = tt;
      const [ut, ft] = Q;
      const dt = {
        x: rt.w > 0,
        y: rt.h > 0
      };
      const _t = Z && J && (dt.x || dt.y) || Z && dt.x && !dt.y || J && dt.y && !dt.x;
      if (p || D || ft || at || ct || lt || X || G || W) {
        const t = {
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
          width: "",
          overflowY: "",
          overflowX: ""
        };
        const n = setViewportOverflowState(U, dt, F, t);
        const o = z(n, it, ut, B);
        if (!i) {
          hideNativeScrollbars(n, B, o, t);
        }
        if (W) {
          fixFlexboxGlue(n, R);
        }
        if (i) {
          attr(e, H, t.overflowX);
          attr(e, L, t.overflowY);
        } else {
          style(r, t);
        }
      }
      attrClass(e, I, M, _t);
      attrClass(c, j, N, _t);
      if (!i) {
        attrClass(r, k, Y, K);
      }
      const [ht, gt] = T(getViewportOverflowState(U).Ot);
      s({
        Ot: ht,
        zt: {
          x: et.w,
          y: et.h
        },
        Et: {
          x: rt.w,
          y: rt.h
        },
        At: dt
      });
      return {
        It: gt,
        Ht: ct,
        Lt: lt
      };
    };
  };
  const prepareUpdateHints = (t, n, o) => {
    const s = {};
    const e = n || {};
    const c = keys(t).concat(keys(e));
    each(c, n => {
      const c = t[n];
      const r = e[n];
      s[n] = !!(o || c || r);
    });
    return s;
  };
  const createStructureSetupUpdate = (t, n) => {
    const {
      Z: o,
      K: s,
      ht: e,
      ft: c
    } = t;
    const {
      A: r,
      I: l,
      Y: i
    } = getEnvironment();
    const a = !r && (l.x || l.y);
    const u = [createTrinsicUpdateSegment(t, n), createPaddingUpdateSegment(t, n), createOverflowUpdateSegment(t, n)];
    return (t, n, r) => {
      const l = prepareUpdateHints(assignDeep({
        wt: false,
        xt: false,
        St: false,
        vt: false,
        Ht: false,
        Lt: false,
        It: false,
        Tt: false,
        bt: false,
        Mt: false
      }, n), {}, r);
      const f = a || !i;
      const d = f && scrollLeft(s);
      const _ = f && scrollTop(s);
      e("", R, true);
      let h = l;
      each(u, n => {
        h = prepareUpdateHints(h, n(h, t, !!r) || {}, r);
      });
      scrollLeft(s, d);
      scrollTop(s, _);
      e("", R);
      if (!c) {
        scrollLeft(o, 0);
        scrollTop(o, 0);
      }
      return h;
    };
  };
  const createEventContentChange = (t, n, o) => {
    let s;
    let e = false;
    const destroy = () => {
      e = true;
    };
    const updateElements = c => {
      if (o) {
        const r = o.reduce((n, o) => {
          if (o) {
            const [s, e] = o;
            const r = e && s && (c ? c(s) : find(s, t));
            if (r && r.length && e && isString(e)) {
              push(n, [r, e.trim()], true);
            }
          }
          return n;
        }, []);
        each(r, o => each(o[0], c => {
          const r = o[1];
          const l = s.get(c) || [];
          const i = t.contains(c);
          if (i) {
            const t = on(c, r, o => {
              if (e) {
                t();
                s.delete(c);
              } else {
                n(o);
              }
            });
            s.set(c, push(l, t));
          } else {
            runEachAndClear(l);
            s.delete(c);
          }
        }));
      }
    };
    if (o) {
      s = new WeakMap();
      updateElements();
    }
    return [destroy, updateElements];
  };
  const createDOMObserver = (t, n, o, s) => {
    let e = false;
    const {
      Pt: c,
      Dt: r,
      Rt: l,
      kt: i,
      Bt: u,
      Vt: f
    } = s || {};
    const d = debounce(() => e && o(true), {
      g: 33,
      v: 99
    });
    const [_, h] = createEventContentChange(t, d, l);
    const g = c || [];
    const v = r || [];
    const p = g.concat(v);
    const observerCallback = (e, c) => {
      const r = u || noop;
      const l = f || noop;
      const a = new Set();
      const d = new Set();
      let _ = false;
      let g = false;
      each(e, o => {
        const {
          attributeName: e,
          target: c,
          type: u,
          oldValue: f,
          addedNodes: h,
          removedNodes: p
        } = o;
        const w = u === "attributes";
        const b = u === "childList";
        const m = t === c;
        const y = w && isString(e) ? attr(c, e) : 0;
        const S = y !== 0 && f !== y;
        const $ = indexOf(v, e) > -1 && S;
        if (n && (b || !m)) {
          const n = !w;
          const u = w && S;
          const d = u && i && is(c, i);
          const _ = d ? !r(c, e, f, y) : n || u;
          const v = _ && !l(o, !!d, t, s);
          each(h, t => a.add(t));
          each(p, t => a.add(t));
          g = g || v;
        }
        if (!n && m && S && !r(c, e, f, y)) {
          d.add(e);
          _ = _ || $;
        }
      });
      if (a.size > 0) {
        h(t => from(a).reduce((n, o) => {
          push(n, find(t, o));
          return is(o, t) ? push(n, o) : n;
        }, []));
      }
      if (n) {
        !c && g && o(false);
        return [false];
      }
      if (d.size > 0 || _) {
        const t = [from(d), _];
        !c && o.apply(0, t);
        return t;
      }
    };
    const w = new a(t => observerCallback(t));
    w.observe(t, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: p,
      subtree: n,
      childList: n,
      characterData: n
    });
    e = true;
    return [() => {
      if (e) {
        _();
        w.disconnect();
        e = false;
      }
    }, () => {
      if (e) {
        d.m();
        const t = w.takeRecords();
        return !isEmptyArray(t) && observerCallback(t, true);
      }
    }];
  };
  const Xt = 3333333;
  const createSizeObserver = (t, n, o) => {
    const {
      Yt: s,
      Mt: e
    } = o || {};
    const c = getPlugins()[Tt];
    const {
      V: r
    } = getEnvironment();
    const l = createDOM(`<div class="${G}"><div class="${X}"></div></div>`);
    const i = l[0];
    const a = i.firstChild;
    const u = directionIsRTL.bind(0, t);
    const [d] = createCache({
      o: false,
      _: true,
      u: (t, n) => !(!t || !domRectHasDimensions(t) && domRectHasDimensions(n))
    });
    const onSizeChangedCallbackProxy = t => {
      const o = isArray(t) && t.length > 0 && isObject(t[0]);
      const e = !o && isBoolean(t[0]);
      let c = false;
      let l = false;
      let a = true;
      if (o) {
        const [n,, o] = d(t.pop().contentRect);
        const s = domRectHasDimensions(n);
        const e = domRectHasDimensions(o);
        const r = !o;
        c = r && !!e || !s;
        l = !e && s;
        a = !c;
      } else if (e) {
        [, a] = t;
      } else {
        l = t === true;
      }
      if (s && a) {
        const n = e ? t[0] : directionIsRTL(i);
        scrollLeft(i, n ? r.n ? -Xt : r.i ? 0 : Xt : Xt);
        scrollTop(i, Xt);
      }
      if (!c) {
        n({
          wt: !e,
          jt: e ? t : void 0,
          Mt: !!l
        });
      }
    };
    const _ = [];
    return [() => {
      runEachAndClear(_);
      removeElements(i);
    }, () => {
      let n = e && onSizeChangedCallbackProxy;
      if (f) {
        const t = new f(onSizeChangedCallbackProxy);
        t.observe(a);
        push(_, () => {
          t.disconnect();
        });
      } else if (c) {
        const [t, o] = c.O(a, onSizeChangedCallbackProxy, e);
        n = t;
        push(_, o);
      }
      if (s) {
        const [t] = createCache({
          o: void 0
        }, u);
        push(_, on(i, "scroll", n => {
          const o = t();
          const [s, e, c] = o;
          if (e) {
            removeClass(a, "ltr rtl");
            addClass(a, s ? "rtl" : "ltr");
            onSizeChangedCallbackProxy([!!s, e, c]);
          }
          stopPropagation(n);
        }));
      }
      if (n) {
        addClass(i, F);
        push(_, on(i, "animationstart", n, {
          C: !!f
        }));
      }
      if (f || c) {
        appendChildren(t, i);
      }
    }];
  };
  const isHeightIntrinsic = t => t.h === 0 || t.isIntersecting || t.intersectionRatio > 0;
  const createTrinsicObserver = (t, n) => {
    let o;
    const s = createDiv(J);
    const e = [];
    const [c] = createCache({
      o: false
    });
    const triggerOnTrinsicChangedCallback = (t, o) => {
      if (t) {
        const s = c(isHeightIntrinsic(t));
        const [, e] = s;
        return e && !o && n(s) && [s];
      }
    };
    const intersectionObserverCallback = (t, n) => t && t.length > 0 && triggerOnTrinsicChangedCallback(t.pop(), n);
    return [() => {
      runEachAndClear(e);
      removeElements(s);
    }, () => {
      if (u) {
        o = new u(t => intersectionObserverCallback(t), {
          root: t
        });
        o.observe(s);
        push(e, () => {
          o.disconnect();
        });
      } else {
        const onSizeChanged = () => {
          const t = offsetSize(s);
          triggerOnTrinsicChangedCallback(t);
        };
        const [t, n] = createSizeObserver(s, onSizeChanged);
        push(e, t);
        n();
        onSizeChanged();
      }
      appendChildren(t, s);
    }, () => o && intersectionObserverCallback(o.takeRecords(), true)];
  };
  const Ut = `[${I}]`;
  const Wt = `[${k}]`;
  const Zt = ["tabindex"];
  const Jt = ["wrap", "cols", "rows"];
  const Kt = ["id", "class", "style", "open"];
  const createStructureSetupObservers = (t, n, o) => {
    let s;
    let e;
    let c;
    const {
      J: r,
      K: l,
      nt: i,
      lt: a,
      ft: u,
      _t: d,
      ht: _
    } = t;
    const {
      Y: h
    } = getEnvironment();
    const [g] = createCache({
      u: equalWH,
      o: {
        w: 0,
        h: 0
      }
    }, () => {
      const t = d(Y, M);
      const n = d(B, "");
      const o = n && scrollLeft(l);
      const s = n && scrollTop(l);
      _(Y, M);
      _(B, "");
      _("", R, true);
      const e = scrollSize(i);
      const c = scrollSize(l);
      const r = fractionalSize(l);
      _(Y, M, t);
      _(B, "", n);
      _("", R);
      scrollLeft(l, o);
      scrollTop(l, s);
      return {
        w: c.w + e.w + r.w,
        h: c.h + e.h + r.h
      };
    });
    const v = a ? Jt : Kt.concat(Jt);
    const p = debounce(o, {
      g: () => s,
      v: () => e,
      p(t, n) {
        const [o] = t;
        const [s] = n;
        return [keys(o).concat(keys(s)).reduce((t, n) => {
          t[n] = o[n] || s[n];
          return t;
        }, {})];
      }
    });
    const updateViewportAttrsFromHost = t => {
      each(t || Zt, t => {
        if (indexOf(Zt, t) > -1) {
          const n = attr(r, t);
          if (isString(n)) {
            attr(l, t, n);
          } else {
            removeAttr(l, t);
          }
        }
      });
    };
    const onTrinsicChanged = (t, s) => {
      const [e, c] = t;
      const r = {
        vt: c
      };
      n({
        gt: e
      });
      !s && o(r);
      return r;
    };
    const onSizeChanged = ({
      wt: t,
      jt: s,
      Mt: e
    }) => {
      const c = !t || e ? o : p;
      let r = false;
      if (s) {
        const [t, o] = s;
        r = o;
        n({
          yt: t
        });
      }
      c({
        wt: t,
        Mt: e,
        St: r
      });
    };
    const onContentMutation = (t, n) => {
      const [, s] = g();
      const e = {
        bt: s
      };
      const c = t ? o : p;
      if (s) {
        !n && c(e);
      }
      return e;
    };
    const onHostMutation = (t, n, o) => {
      const s = {
        Tt: n
      };
      if (n) {
        !o && p(s);
      } else if (!u) {
        updateViewportAttrsFromHost(t);
      }
      return s;
    };
    const [w, b, m] = i || !h ? createTrinsicObserver(r, onTrinsicChanged) : [noop, noop, noop];
    const [y, S] = !u ? createSizeObserver(r, onSizeChanged, {
      Mt: true,
      Yt: true
    }) : [noop, noop];
    const [$, x] = createDOMObserver(r, false, onHostMutation, {
      Dt: Kt,
      Pt: Kt.concat(Zt)
    });
    let C;
    const O = u && f && new f(t => {
      const n = t[t.length - 1].contentRect;
      const o = domRectHasDimensions(n);
      const s = domRectHasDimensions(C);
      const e = !s && o;
      onSizeChanged({
        wt: true,
        Mt: e
      });
      C = n;
    });
    return [() => {
      w();
      y();
      c && c[0]();
      O && O.disconnect();
      $();
    }, () => {
      O && O.observe(r);
      updateViewportAttrsFromHost();
      S();
      b();
    }, () => {
      const t = {};
      const n = x();
      const o = m();
      const s = c && c[1]();
      if (n) {
        assignDeep(t, onHostMutation.apply(0, push(n, true)));
      }
      if (o) {
        assignDeep(t, onTrinsicChanged.apply(0, push(o, true)));
      }
      if (s) {
        assignDeep(t, onContentMutation.apply(0, push(s, true)));
      }
      return t;
    }, t => {
      const [n] = t("update.ignoreMutation");
      const [o, r] = t("update.attributes");
      const [a, f] = t("update.elementEvents");
      const [d, _] = t("update.debounce");
      const h = f || r;
      const ignoreMutationFromOptions = t => isFunction(n) && n(t);
      if (h) {
        if (c) {
          c[1]();
          c[0]();
        }
        c = createDOMObserver(i || l, true, onContentMutation, {
          Pt: v.concat(o || []),
          Rt: a,
          kt: Ut,
          Vt: (t, n) => {
            const {
              target: o,
              attributeName: s
            } = t;
            const e = !n && s && !u ? liesBetween(o, Ut, Wt) : false;
            return e || !!closest(o, `.${tt}`) || !!ignoreMutationFromOptions(t);
          }
        });
      }
      if (_) {
        p.m();
        if (isArray(d)) {
          const t = d[0];
          const n = d[1];
          s = isNumber(t) && t;
          e = isNumber(n) && n;
        } else if (isNumber(d)) {
          s = d;
          e = false;
        } else {
          s = false;
          e = false;
        }
      }
    }];
  };
  const Qt = {
    x: 0,
    y: 0
  };
  const createInitialStructureSetupUpdateState = t => ({
    tt: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    $t: false,
    M: {
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0
    },
    zt: Qt,
    Et: Qt,
    Ot: {
      x: "hidden",
      y: "hidden"
    },
    At: {
      x: false,
      y: false
    },
    gt: false,
    yt: directionIsRTL(t.J)
  });
  const createStructureSetup = (t, n) => {
    const o = createOptionCheck(n, {});
    const [s, e, c] = createEventListenerHub();
    const [r, l, i] = createStructureSetupElements(t);
    const a = createState(createInitialStructureSetupUpdateState(r));
    const [u, f] = a;
    const d = createStructureSetupUpdate(r, a);
    const triggerUpdateEvent = (t, n, o) => {
      const s = keys(t).some(n => !!t[n]);
      const e = s || !isEmptyObject(n) || o;
      if (e) {
        c("u", [t, n, o]);
      }
      return e;
    };
    const [_, h, g, v] = createStructureSetupObservers(r, f, t => triggerUpdateEvent(d(o, t), {}, false));
    const p = u.bind(0);
    p.Nt = t => s("u", t);
    p.qt = () => {
      const {
        Z: t,
        K: n,
        rt: o,
        it: s
      } = r;
      const e = s ? o.documentElement : t;
      const c = scrollLeft(e);
      const i = scrollTop(e);
      h();
      l();
      scrollLeft(n, c);
      scrollTop(n, i);
    };
    p.Gt = r;
    return [(t, o) => {
      const s = createOptionCheck(n, t, o);
      v(s);
      return triggerUpdateEvent(d(s, g(), o), t, !!o);
    }, p, () => {
      e();
      _();
      i();
    }];
  };
  const {
    round: tn
  } = Math;
  const getScale = t => {
    const {
      width: n,
      height: o
    } = getBoundingClientRect(t);
    const {
      w: s,
      h: e
    } = offsetSize(t);
    return {
      x: tn(n) / s || 1,
      y: tn(o) / e || 1
    };
  };
  const continuePointerDown = (t, n, o) => {
    const s = n.scrollbars;
    const {
      button: e,
      isPrimary: c,
      pointerType: r
    } = t;
    const {
      pointers: l
    } = s;
    return e === 0 && c && s[o ? "dragScroll" : "clickScroll"] && (l || []).includes(r);
  };
  const nn = "pointerup pointerleave pointercancel lostpointercapture";
  const createRootClickStopPropagationEvents = (t, n) => on(t, "mousedown", on.bind(0, n, "click", stopPropagation, {
    C: true,
    $: true
  }), {
    $: true
  });
  const createInteractiveScrollEvents = (t, n, o, s, e, c, r) => {
    const {
      V: l
    } = getEnvironment();
    const {
      Ft: i,
      Xt: a,
      Ut: u
    } = s;
    const f = `scroll${r ? "Left" : "Top"}`;
    const d = `client${r ? "X" : "Y"}`;
    const _ = r ? "width" : "height";
    const h = r ? "left" : "top";
    const g = r ? "w" : "h";
    const v = r ? "x" : "y";
    const createRelativeHandleMove = (t, n) => o => {
      const {
        Et: s
      } = c();
      const d = offsetSize(a)[g] - offsetSize(i)[g];
      const _ = n * o / d;
      const h = _ * s[v];
      const p = directionIsRTL(u);
      const w = p && r ? l.n || l.i ? 1 : -1 : 1;
      e[f] = t + h * w;
    };
    return on(a, "pointerdown", s => {
      const c = closest(s.target, `.${ct}`) === i;
      const r = c ? i : a;
      attrClass(n, I, D, true);
      if (continuePointerDown(s, t, c)) {
        const t = !c && s.shiftKey;
        const getHandleRect = () => getBoundingClientRect(i);
        const getTrackRect = () => getBoundingClientRect(a);
        const getHandleOffset = (t, n) => (t || getHandleRect())[h] - (n || getTrackRect())[h];
        const l = createRelativeHandleMove(e[f] || 0, 1 / getScale(e)[v]);
        const u = s[d];
        const g = getHandleRect();
        const p = getTrackRect();
        const w = g[_];
        const b = getHandleOffset(g, p) + w / 2;
        const m = u - p[h];
        const y = c ? 0 : m - b;
        const releasePointerCapture = t => {
          runEachAndClear(S);
          r.releasePointerCapture(t.pointerId);
        };
        const S = [attrClass.bind(0, n, I, D), on(o, nn, releasePointerCapture), on(o, "selectstart", t => preventDefault(t), {
          S: false
        }), on(a, nn, releasePointerCapture), on(a, "pointermove", n => {
          const o = n[d] - u;
          if (c || t) {
            l(y + o);
          }
        })];
        if (t) {
          l(y);
        } else if (!c) {
          const t = getPlugins()[Mt];
          if (t) {
            push(S, t.O(l, getHandleOffset, y, w, m));
          }
        }
        r.setPointerCapture(s.pointerId);
      }
    });
  };
  const createScrollbarsSetupEvents = (t, n) => (o, s, e, c, r, l, i) => {
    const {
      Ut: a
    } = o;
    const [u, f] = selfClearTimeout(333);
    const d = !!r.scrollBy;
    let _ = true;
    return runEachAndClear.bind(0, [on(a, "pointerenter", () => {
      s(at, true);
    }), on(a, "pointerleave pointercancel", () => {
      s(at);
    }), on(a, "wheel", t => {
      const {
        deltaX: n,
        deltaY: o,
        deltaMode: e
      } = t;
      if (d && _ && e === 0 && parent(a) === c) {
        r.scrollBy({
          left: n,
          top: o,
          behavior: "smooth"
        });
      }
      _ = false;
      s(_t, true);
      u(() => {
        _ = true;
        s(_t);
      });
      preventDefault(t);
    }, {
      S: false,
      $: true
    }), createRootClickStopPropagationEvents(a, e), createInteractiveScrollEvents(t, c, e, o, r, n, i), f]);
  };
  const {
    min: sn,
    max: en,
    round: cn
  } = Math;
  const getScrollbarHandleLengthRatio = (t, n, o, s) => {
    if (s) {
      const t = o ? "x" : "y";
      const {
        Et: n,
        zt: e
      } = s;
      const c = e[t];
      const r = n[t];
      return en(0, sn(1, c / (c + r)));
    }
    const e = o ? "width" : "height";
    const c = getBoundingClientRect(t)[e];
    const r = getBoundingClientRect(n)[e];
    return en(0, sn(1, c / r));
  };
  const getScrollbarHandleOffsetRatio = (t, n, o, s, e, c) => {
    const {
      V: r
    } = getEnvironment();
    const l = c ? "x" : "y";
    const i = c ? "Left" : "Top";
    const {
      Et: a
    } = s;
    const u = cn(a[l]);
    const f = sn(u, en(0, o[`scroll${i}`]));
    const d = c && e;
    const _ = r.i ? f : u - f;
    const h = d ? _ : f;
    const g = sn(1, h / u);
    const v = getScrollbarHandleLengthRatio(t, n, c);
    return 1 / v * (1 - v) * g;
  };
  const animateElement = (t, n, o, s) => n && t.animate(o, {
    timeline: n,
    composite: s
  });
  const getScrollbarHandleAnimationKeyFrames = (t, n) => ({
    transform: [getTrasformTranslateValue(`0%`, n), getTrasformTranslateValue(n && t ? "100%" : "-100%", n)],
    [n ? t ? "right" : "left" : "top"]: ["0%", "100%"]
  });
  const maxScrollbarOffsetFrameValue = t => `${Math.max(0, t - .5)}px`;
  const animateScrollbarOffset = (t, n, o, s) => animateElement(t, n, {
    transform: [getTrasformTranslateValue(`0px`, s), getTrasformTranslateValue(maxScrollbarOffsetFrameValue(o), s)]
  }, "add");
  const initScrollTimeline = (t, n) => h ? new h({
    source: t,
    axis: n
  }) : null;
  const createScrollbarsSetupElements = (t, n, o) => {
    const {
      q: s,
      H: e
    } = getEnvironment();
    const {
      scrollbars: c
    } = s();
    const {
      slot: r
    } = c;
    const {
      rt: l,
      Z: i,
      J: a,
      K: u,
      ut: f,
      st: d,
      it: _,
      ft: h
    } = n;
    const {
      scrollbars: v
    } = f ? {} : t;
    const {
      slot: p
    } = v || {};
    const w = new Map();
    const b = initScrollTimeline(d, "x");
    const m = initScrollTimeline(d, "y");
    const y = dynamicInitializationElement([i, a, u], () => h && _ ? i : a, r, p);
    const doRefreshScrollbarOffset = t => h && !_ && parent(t) === u;
    const cancelElementAnimations = t => {
      w.forEach((n, o) => {
        const s = t ? indexOf(isArray(t) ? t : [t], o) > -1 : true;
        if (s) {
          (n || []).forEach(t => {
            t && t.cancel();
          });
          w.delete(o);
        }
      });
    };
    const scrollbarStructureAddRemoveClass = (t, n, o) => {
      const s = o ? addClass : removeClass;
      each(t, t => {
        s(t.Ut, n);
      });
    };
    const scrollbarStyle = (t, n) => {
      each(t, t => {
        const [o, s] = n(t);
        style(o, s);
      });
    };
    const scrollbarStructureRefreshHandleLength = (t, n, o) => {
      scrollbarStyle(t, t => {
        const {
          Ft: s,
          Xt: e
        } = t;
        return [s, {
          [o ? "width" : "height"]: `${(getScrollbarHandleLengthRatio(s, e, o, n) * 100).toFixed(3)}%`
        }];
      });
    };
    const scrollbarStructureRefreshHandleOffset = (t, n, o) => {
      if (!m && !m) {
        scrollbarStyle(t, t => {
          const {
            Ft: s,
            Xt: e,
            Ut: c
          } = t;
          const r = getScrollbarHandleOffsetRatio(s, e, d, n, directionIsRTL(c), o);
          const l = r === r;
          return [s, {
            transform: l ? getTrasformTranslateValue(`${(r * 100).toFixed(3)}%`, o) : ""
          }];
        });
      }
    };
    const styleScrollbarPosition = t => {
      const {
        Ut: n
      } = t;
      const o = doRefreshScrollbarOffset(n) && n;
      return [o, {
        transform: o ? getTrasformTranslateValue([`${scrollLeft(d)}px`, `${scrollTop(d)}px`]) : ""
      }];
    };
    const S = [];
    const $ = [];
    const x = [];
    const scrollbarsAddRemoveClass = (t, n, o) => {
      const s = isBoolean(o);
      const e = s ? o : true;
      const c = s ? !o : true;
      e && scrollbarStructureAddRemoveClass($, t, n);
      c && scrollbarStructureAddRemoveClass(x, t, n);
    };
    const refreshScrollbarsHandleLength = t => {
      scrollbarStructureRefreshHandleLength($, t, true);
      scrollbarStructureRefreshHandleLength(x, t);
    };
    const refreshScrollbarsHandleOffset = t => {
      scrollbarStructureRefreshHandleOffset($, t, true);
      scrollbarStructureRefreshHandleOffset(x, t);
    };
    const refreshScrollbarsHandleOffsetTimeline = () => {
      const forEachFn = (t, {
        Ut: n,
        Ft: o
      }) => {
        cancelElementAnimations(o);
        w.set(o, [animateElement(o, t ? b : m, getScrollbarHandleAnimationKeyFrames(t && directionIsRTL(n), t))]);
      };
      $.forEach(forEachFn.bind(0, true));
      x.forEach(forEachFn.bind(0, false));
    };
    const refreshScrollbarsScrollbarOffset = () => {
      if (!m && !m) {
        h && scrollbarStyle($, styleScrollbarPosition);
        h && scrollbarStyle(x, styleScrollbarPosition);
      }
    };
    const refreshScrollbarsScrollbarOffsetTimeline = ({
      Et: t
    }) => {
      x.concat($).forEach(({
        Ut: n
      }) => {
        cancelElementAnimations(n);
        if (doRefreshScrollbarOffset(n)) {
          w.set(n, [animateScrollbarOffset(n, b, t.x, true), animateScrollbarOffset(n, m, t.y)]);
        }
      });
    };
    const generateScrollbarDOM = t => {
      const n = t ? ot : st;
      const s = t ? $ : x;
      const c = isEmptyArray(s) ? it : "";
      const r = createDiv(`${tt} ${n} ${c}`);
      const i = createDiv(et);
      const u = createDiv(ct);
      const f = {
        Ut: r,
        Xt: i,
        Ft: u
      };
      if (!e) {
        addClass(r, K);
      }
      appendChildren(r, i);
      appendChildren(i, u);
      push(s, f);
      push(S, [removeElements.bind(0, r), cancelElementAnimations, o(f, scrollbarsAddRemoveClass, l, a, d, t ? b : m, t)]);
      return f;
    };
    const C = generateScrollbarDOM.bind(0, true);
    const O = generateScrollbarDOM.bind(0, false);
    const appendElements = () => {
      appendChildren(y, $[0].Ut);
      appendChildren(y, x[0].Ut);
      g(() => {
        scrollbarsAddRemoveClass(it);
      }, 300);
    };
    C();
    O();
    return [{
      Wt: refreshScrollbarsHandleLength,
      Zt: refreshScrollbarsHandleOffset,
      Jt: refreshScrollbarsHandleOffsetTimeline,
      Kt: refreshScrollbarsScrollbarOffsetTimeline,
      Qt: refreshScrollbarsScrollbarOffset,
      tn: scrollbarsAddRemoveClass,
      nn: {
        B: b,
        sn: $,
        en: C,
        cn: scrollbarStyle.bind(0, $)
      },
      rn: {
        B: m,
        sn: x,
        en: O,
        cn: scrollbarStyle.bind(0, x)
      }
    }, appendElements, runEachAndClear.bind(0, S)];
  };
  const isHoverablePointerType = t => t.pointerType === "mouse";
  const createScrollbarsSetup = (t, n, o, s) => {
    let e;
    let c;
    let r;
    let l;
    let i;
    let a = noop;
    let u = 0;
    const f = createState({});
    const [d] = f;
    const [_, h] = selfClearTimeout();
    const [g, v] = selfClearTimeout();
    const [p, w] = selfClearTimeout(100);
    const [b, m] = selfClearTimeout(100);
    const [y, S] = selfClearTimeout(100);
    const [$, x] = selfClearTimeout(() => u);
    const [C, O, T] = createScrollbarsSetupElements(t, o.Gt, createScrollbarsSetupEvents(n, o));
    const {
      J: z,
      et: E,
      it: A
    } = o.Gt;
    const {
      tn: I,
      Wt: H,
      Zt: L,
      Jt: M,
      Kt: P,
      Qt: D
    } = C;
    const manageAutoHideSuspension = t => {
      I(ft, t, true);
      I(ft, t, false);
    };
    const manageScrollbarsAutoHide = (t, n) => {
      x();
      if (t) {
        I(dt);
      } else {
        const hide = () => I(dt, true);
        if (u > 0 && !n) {
          $(hide);
        } else {
          hide();
        }
      }
    };
    const onHostMouseEnter = t => {
      if (isHoverablePointerType(t)) {
        l = c;
        l && manageScrollbarsAutoHide(true);
      }
    };
    const R = [w, x, m, S, v, h, T, on(z, "pointerover", onHostMouseEnter, {
      C: true
    }), on(z, "pointerenter", onHostMouseEnter), on(z, "pointerleave", t => {
      if (isHoverablePointerType(t)) {
        l = false;
        c && manageScrollbarsAutoHide(false);
      }
    }), on(z, "pointermove", t => {
      isHoverablePointerType(t) && e && _(() => {
        w();
        manageScrollbarsAutoHide(true);
        b(() => {
          e && manageScrollbarsAutoHide(false);
        });
      });
    }), on(E, "scroll", t => {
      g(() => {
        L(o());
        r && manageScrollbarsAutoHide(true);
        p(() => {
          r && !l && manageScrollbarsAutoHide(false);
        });
      });
      s(t);
      D();
    })];
    const k = d.bind(0);
    k.Gt = C;
    k.qt = O;
    return [(t, s, l) => {
      const {
        Ht: f,
        Lt: d,
        It: _,
        St: h,
        Mt: g
      } = l;
      const {
        I: v
      } = getEnvironment();
      const p = createOptionCheck(n, t, s);
      const w = o();
      const {
        Et: b,
        Ot: m,
        yt: S,
        At: $
      } = w;
      const [x, C] = p("showNativeOverlaidScrollbars");
      const [O, T] = p("scrollbars.theme");
      const [z, R] = p("scrollbars.visibility");
      const [k, B] = p("scrollbars.autoHide");
      const [V, Y] = p("scrollbars.autoHideSuspend");
      const [j] = p("scrollbars.autoHideDelay");
      const [N, q] = p("scrollbars.dragScroll");
      const [G, F] = p("scrollbars.clickScroll");
      const X = g && !s;
      const U = $.x || $.y;
      const W = f || d || h;
      const Z = _ || R;
      const J = x && v.x && v.y;
      const setScrollbarVisibility = (t, n) => {
        const o = z === "visible" || z === "auto" && t === "scroll";
        I(rt, o, n);
        return o;
      };
      u = j;
      if (X) {
        if (V && U) {
          manageAutoHideSuspension(false);
          a();
          y(() => {
            a = on(E, "scroll", manageAutoHideSuspension.bind(0, true), {
              C: true
            });
          });
        } else {
          manageAutoHideSuspension(true);
        }
      }
      if (C) {
        I(Q, J);
      }
      if (T) {
        I(i);
        I(O, true);
        i = O;
      }
      if (Y && !V) {
        manageAutoHideSuspension(true);
      }
      if (B) {
        e = k === "move";
        c = k === "leave";
        r = k !== "never";
        manageScrollbarsAutoHide(!r, true);
      }
      if (q) {
        I(gt, N);
      }
      if (F) {
        I(ht, G);
      }
      if (Z) {
        const t = setScrollbarVisibility(m.x, true);
        const n = setScrollbarVisibility(m.y, false);
        const o = t && n;
        I(lt, !o);
      }
      if (W) {
        H(w);
        L(w);
        M(w);
        P(w);
        D();
        I(ut, !b.x, true);
        I(ut, !b.y, false);
        I(nt, S && !A);
      }
    }, k, () => {
      runEachAndClear(R);
      a();
    }];
  };
  const invokePluginInstance = (t, n, o) => {
    if (isFunction(t)) {
      t(n || void 0, o || void 0);
    }
  };
  const OverlayScrollbars = (t, n, o) => {
    const {
      F: s,
      q: e,
      j: c,
      N: r
    } = getEnvironment();
    const l = getPlugins();
    const i = isHTMLElement(t);
    const a = i ? t : t.target;
    const u = getInstance(a);
    if (n && !u) {
      let u = false;
      const validateOptions = t => {
        const n = getPlugins()[xt];
        const o = n && n.O;
        return o ? o(t, true) : t;
      };
      const f = assignDeep({}, s(), validateOptions(n));
      const [d, _, h] = createEventListenerHub(o);
      const [g, v, p] = createStructureSetup(t, f);
      const [w, b, m] = createScrollbarsSetup(t, f, v, t => h("scroll", [x, t]));
      const update = (t, n) => g(t, !!n);
      const y = update.bind(0, {}, true);
      const S = c(y);
      const $ = r(y);
      const destroy = t => {
        removeInstance(a);
        S();
        $();
        m();
        p();
        u = true;
        h("destroyed", [x, !!t]);
        _();
      };
      const x = {
        options(t, n) {
          if (t) {
            const o = n ? s() : {};
            const e = getOptionsDiff(f, assignDeep(o, validateOptions(t)));
            if (!isEmptyObject(e)) {
              assignDeep(f, e);
              update(e);
            }
          }
          return assignDeep({}, f);
        },
        on: d,
        off: (t, n) => {
          t && n && _(t, n);
        },
        state() {
          const {
            zt: t,
            Et: n,
            Ot: o,
            At: s,
            tt: e,
            $t: c,
            yt: r
          } = v();
          return assignDeep({}, {
            overflowEdge: t,
            overflowAmount: n,
            overflowStyle: o,
            hasOverflow: s,
            padding: e,
            paddingAbsolute: c,
            directionRTL: r,
            destroyed: u
          });
        },
        elements() {
          const {
            Z: t,
            J: n,
            tt: o,
            K: s,
            nt: e,
            st: c,
            et: r
          } = v.Gt;
          const {
            nn: l,
            rn: i
          } = b.Gt;
          const translateScrollbarStructure = t => {
            const {
              Ft: n,
              Xt: o,
              Ut: s
            } = t;
            return {
              scrollbar: s,
              track: o,
              handle: n
            };
          };
          const translateScrollbarsSetupElement = t => {
            const {
              sn: n,
              en: o
            } = t;
            const s = translateScrollbarStructure(n[0]);
            return assignDeep({}, s, {
              clone: () => {
                const t = translateScrollbarStructure(o());
                w({}, true, {});
                return t;
              }
            });
          };
          return assignDeep({}, {
            target: t,
            host: n,
            padding: o || s,
            viewport: s,
            content: e || s,
            scrollOffsetElement: c,
            scrollEventElement: r,
            scrollbarHorizontal: translateScrollbarsSetupElement(l),
            scrollbarVertical: translateScrollbarsSetupElement(i)
          });
        },
        update: t => update({}, t),
        destroy: destroy.bind(0)
      };
      v.Nt((t, n, o) => {
        w(n, o, t);
      });
      addInstance(a, x);
      each(keys(l), t => invokePluginInstance(l[t], 0, x));
      if (cancelInitialization(v.Gt.it, e().cancel, !i && t.cancel)) {
        destroy(true);
        return x;
      }
      v.qt();
      b.qt();
      h("initialized", [x]);
      v.Nt((t, n, o) => {
        const {
          wt: s,
          St: e,
          vt: c,
          Ht: r,
          Lt: l,
          It: i,
          bt: a,
          Tt: u
        } = t;
        h("updated", [x, {
          updateHints: {
            sizeChanged: s,
            directionChanged: e,
            heightIntrinsicChanged: c,
            overflowEdgeChanged: r,
            overflowAmountChanged: l,
            overflowStyleChanged: i,
            contentMutation: a,
            hostMutation: u
          },
          changedOptions: n,
          force: o
        }]);
      });
      x.update(true);
      return x;
    }
    return u;
  };
  OverlayScrollbars.plugin = t => {
    each(addPlugin(t), t => invokePluginInstance(t, OverlayScrollbars));
  };
  OverlayScrollbars.valid = t => {
    const n = t && t.elements;
    const o = isFunction(n) && n();
    return isPlainObject(o) && !!getInstance(o.target);
  };
  OverlayScrollbars.env = () => {
    const {
      k: t,
      I: n,
      A: o,
      V: s,
      Y: e,
      H: c,
      B: r,
      U: l,
      W: i,
      q: a,
      G: u,
      F: f,
      X: d
    } = getEnvironment();
    return assignDeep({}, {
      scrollbarsSize: t,
      scrollbarsOverlaid: n,
      scrollbarsHiding: o,
      rtlScrollBehavior: s,
      flexboxGlue: e,
      cssCustomProperties: c,
      scrollTimeline: r,
      staticDefaultInitialization: l,
      staticDefaultOptions: i,
      getDefaultInitialization: a,
      setDefaultInitialization: u,
      getDefaultOptions: f,
      setDefaultOptions: d
    });
  };
  t.ClickScrollPlugin = Pt;
  t.OverlayScrollbars = OverlayScrollbars;
  t.ScrollbarsHidingPlugin = Lt;
  t.SizeObserverPlugin = zt;
  Object.defineProperties(t, {
    ln: {
      value: true
    },
    [Symbol.toStringTag]: {
      value: "Module"
    }
  });
  return t;
}({});
!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).PNotify = {});
}(this, function (t) {
  "use strict";

  function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
  }
  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function r(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }
  function s(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e && (i = i.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, i);
    }
    return n;
  }
  function a(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? s(Object(n), !0).forEach(function (e) {
        r(t, e, n[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }
    return t;
  }
  function c(t) {
    return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }
  function l(t, e) {
    return (l = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }
  function u() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }
  function f(t, e, n) {
    return (f = u() ? Reflect.construct : function (t, e, n) {
      var i = [null];
      i.push.apply(i, e);
      var o = new (Function.bind.apply(t, i))();
      return n && l(o, n.prototype), o;
    }).apply(null, arguments);
  }
  function d(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function h(t, e) {
    return !e || "object" != typeof e && "function" != typeof e ? d(t) : e;
  }
  function p(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
        i = !0,
        o = !1,
        r = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
      } catch (t) {
        o = !0, r = t;
      } finally {
        try {
          i || null == a.return || a.return();
        } finally {
          if (o) throw r;
        }
      }
      return n;
    }(t, e) || v(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function m(t) {
    return function (t) {
      if (Array.isArray(t)) return y(t);
    }(t) || function (t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
    }(t) || v(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function v(t, e) {
    if (t) {
      if ("string" == typeof t) return y(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0;
    }
  }
  function y(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
    return i;
  }
  function g() {}
  function $(t, e) {
    for (var n in e) t[n] = e[n];
    return t;
  }
  function _(t) {
    return t();
  }
  function k() {
    return Object.create(null);
  }
  function x(t) {
    t.forEach(_);
  }
  function b(t) {
    return "function" == typeof t;
  }
  function w(t, n) {
    return t != t ? n == n : t !== n || t && "object" === e(t) || "function" == typeof t;
  }
  function O(t, e) {
    t.appendChild(e);
  }
  function C(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function M(t) {
    t.parentNode.removeChild(t);
  }
  function T(t) {
    return document.createElement(t);
  }
  function H(t) {
    return document.createTextNode(t);
  }
  function E() {
    return H(" ");
  }
  function S() {
    return H("");
  }
  function N(t, e, n, i) {
    return t.addEventListener(e, n, i), function () {
      return t.removeEventListener(e, n, i);
    };
  }
  function P(t, e, n) {
    null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function A(t) {
    return Array.from(t.childNodes);
  }
  function L(t, e) {
    e = "" + e, t.wholeText !== e && (t.data = e);
  }
  var j,
    R = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        n(this, t), this.a = e, this.e = this.n = null;
      }
      return o(t, [{
        key: "m",
        value: function (t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          this.e || (this.e = T(e.nodeName), this.t = e, this.h(t)), this.i(n);
        }
      }, {
        key: "h",
        value: function (t) {
          this.e.innerHTML = t, this.n = Array.from(this.e.childNodes);
        }
      }, {
        key: "i",
        value: function (t) {
          for (var e = 0; e < this.n.length; e += 1) C(this.t, this.n[e], t);
        }
      }, {
        key: "p",
        value: function (t) {
          this.d(), this.h(t), this.i(this.a);
        }
      }, {
        key: "d",
        value: function () {
          this.n.forEach(M);
        }
      }]), t;
    }();
  function W(t) {
    j = t;
  }
  function I() {
    if (!j) throw new Error("Function called outside component initialization");
    return j;
  }
  function D() {
    var t = I();
    return function (e, n) {
      var i = t.$$.callbacks[e];
      if (i) {
        var o = function (t, e) {
          var n = document.createEvent("CustomEvent");
          return n.initCustomEvent(t, !1, !1, e), n;
        }(e, n);
        i.slice().forEach(function (e) {
          e.call(t, o);
        });
      }
    };
  }
  function F(t, e) {
    var n = t.$$.callbacks[e.type];
    n && n.slice().forEach(function (t) {
      return t(e);
    });
  }
  var q = [],
    B = [],
    z = [],
    U = [],
    G = Promise.resolve(),
    J = !1;
  function K() {
    J || (J = !0, G.then(Z));
  }
  function Q() {
    return K(), G;
  }
  function V(t) {
    z.push(t);
  }
  var X = !1,
    Y = new Set();
  function Z() {
    if (!X) {
      X = !0;
      do {
        for (var t = 0; t < q.length; t += 1) {
          var e = q[t];
          W(e), tt(e.$$);
        }
        for (W(null), q.length = 0; B.length;) B.pop()();
        for (var n = 0; n < z.length; n += 1) {
          var i = z[n];
          Y.has(i) || (Y.add(i), i());
        }
        z.length = 0;
      } while (q.length);
      for (; U.length;) U.pop()();
      J = !1, X = !1, Y.clear();
    }
  }
  function tt(t) {
    if (null !== t.fragment) {
      t.update(), x(t.before_update);
      var e = t.dirty;
      t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(V);
    }
  }
  var et,
    nt = new Set();
  function it() {
    et = {
      r: 0,
      c: [],
      p: et
    };
  }
  function ot() {
    et.r || x(et.c), et = et.p;
  }
  function rt(t, e) {
    t && t.i && (nt.delete(t), t.i(e));
  }
  function st(t, e, n, i) {
    if (t && t.o) {
      if (nt.has(t)) return;
      nt.add(t), et.c.push(function () {
        nt.delete(t), i && (n && t.d(1), i());
      }), t.o(e);
    }
  }
  var at = "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;
  function ct(t, e) {
    st(t, 1, 1, function () {
      e.delete(t.key);
    });
  }
  function lt(t, e, n, i, o, r, s, a, c, l, u, f) {
    for (var d = t.length, h = r.length, p = d, m = {}; p--;) m[t[p].key] = p;
    var v = [],
      y = new Map(),
      g = new Map();
    for (p = h; p--;) {
      var $ = f(o, r, p),
        _ = n($),
        k = s.get(_);
      k ? i && k.p($, e) : (k = l(_, $)).c(), y.set(_, v[p] = k), _ in m && g.set(_, Math.abs(p - m[_]));
    }
    var x = new Set(),
      b = new Set();
    function w(t) {
      rt(t, 1), t.m(a, u), s.set(t.key, t), u = t.first, h--;
    }
    for (; d && h;) {
      var O = v[h - 1],
        C = t[d - 1],
        M = O.key,
        T = C.key;
      O === C ? (u = O.first, d--, h--) : y.has(T) ? !s.has(M) || x.has(M) ? w(O) : b.has(T) ? d-- : g.get(M) > g.get(T) ? (b.add(M), w(O)) : (x.add(T), d--) : (c(C, s), d--);
    }
    for (; d--;) {
      var H = t[d];
      y.has(H.key) || c(H, s);
    }
    for (; h;) w(v[h - 1]);
    return v;
  }
  function ut(t, e) {
    for (var n = {}, i = {}, o = {
        $$scope: 1
      }, r = t.length; r--;) {
      var s = t[r],
        a = e[r];
      if (a) {
        for (var c in s) c in a || (i[c] = 1);
        for (var l in a) o[l] || (n[l] = a[l], o[l] = 1);
        t[r] = a;
      } else for (var u in s) o[u] = 1;
    }
    for (var f in i) f in n || (n[f] = void 0);
    return n;
  }
  function ft(t) {
    return "object" === e(t) && null !== t ? t : {};
  }
  function dt(t) {
    t && t.c();
  }
  function ht(t, e, n) {
    var i = t.$$,
      o = i.fragment,
      r = i.on_mount,
      s = i.on_destroy,
      a = i.after_update;
    o && o.m(e, n), V(function () {
      var e = r.map(_).filter(b);
      s ? s.push.apply(s, m(e)) : x(e), t.$$.on_mount = [];
    }), a.forEach(V);
  }
  function pt(t, e) {
    var n = t.$$;
    null !== n.fragment && (x(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
  }
  function mt(t, e) {
    -1 === t.$$.dirty[0] && (q.push(t), K(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
  }
  var vt = function () {
      function t() {
        n(this, t);
      }
      return o(t, [{
        key: "$destroy",
        value: function () {
          pt(this, 1), this.$destroy = g;
        }
      }, {
        key: "$on",
        value: function (t, e) {
          var n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
          return n.push(e), function () {
            var t = n.indexOf(e);
            -1 !== t && n.splice(t, 1);
          };
        }
      }, {
        key: "$set",
        value: function (t) {
          var e;
          this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
        }
      }]), t;
    }(),
    yt = function () {
      function t(e) {
        if (n(this, t), Object.assign(this, {
          dir1: null,
          dir2: null,
          firstpos1: null,
          firstpos2: null,
          spacing1: 25,
          spacing2: 25,
          push: "bottom",
          maxOpen: 1,
          maxStrategy: "wait",
          maxClosureCausesWait: !0,
          modal: "ish",
          modalishFlash: !0,
          overlayClose: !0,
          overlayClosesPinned: !1,
          positioned: !0,
          context: window && document.body || null
        }, e), "ish" === this.modal && 1 !== this.maxOpen) throw new Error("A modalish stack must have a maxOpen value of 1.");
        if ("ish" === this.modal && !this.dir1) throw new Error("A modalish stack must have a direction.");
        if ("top" === this.push && "ish" === this.modal && "close" !== this.maxStrategy) throw new Error("A modalish stack that pushes to the top must use the close maxStrategy.");
        this._noticeHead = {
          notice: null,
          prev: null,
          next: null
        }, this._noticeTail = {
          notice: null,
          prev: this._noticeHead,
          next: null
        }, this._noticeHead.next = this._noticeTail, this._noticeMap = new WeakMap(), this._length = 0, this._addpos2 = 0, this._animation = !0, this._posTimer = null, this._openNotices = 0, this._listener = null, this._overlayOpen = !1, this._overlayInserted = !1, this._collapsingModalState = !1, this._leader = null, this._leaderOff = null, this._masking = null, this._maskingOff = null, this._swapping = !1, this._callbacks = {};
      }
      return o(t, [{
        key: "forEach",
        value: function (t) {
          var e,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = n.start,
            o = void 0 === i ? "oldest" : i,
            r = n.dir,
            s = void 0 === r ? "newer" : r,
            a = n.skipModuleHandled,
            c = void 0 !== a && a;
          if ("head" === o || "newest" === o && "top" === this.push || "oldest" === o && "bottom" === this.push) e = this._noticeHead.next;else if ("tail" === o || "newest" === o && "bottom" === this.push || "oldest" === o && "top" === this.push) e = this._noticeTail.prev;else {
            if (!this._noticeMap.has(o)) throw new Error("Invalid start param.");
            e = this._noticeMap.get(o);
          }
          for (; e.notice;) {
            var l = e.notice;
            if ("prev" === s || "top" === this.push && "newer" === s || "bottom" === this.push && "older" === s) e = e.prev;else {
              if (!("next" === s || "top" === this.push && "older" === s || "bottom" === this.push && "newer" === s)) throw new Error("Invalid dir param.");
              e = e.next;
            }
            if (!(c && l.getModuleHandled() || !1 !== t(l))) break;
          }
        }
      }, {
        key: "close",
        value: function (t) {
          this.forEach(function (e) {
            return e.close(t, !1, !1);
          });
        }
      }, {
        key: "open",
        value: function (t) {
          this.forEach(function (e) {
            return e.open(t);
          });
        }
      }, {
        key: "openLast",
        value: function () {
          this.forEach(function (t) {
            if (-1 === ["opening", "open", "waiting"].indexOf(t.getState())) return t.open(), !1;
          }, {
            start: "newest",
            dir: "older"
          });
        }
      }, {
        key: "swap",
        value: function (t, e) {
          var n = this,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          return -1 === ["open", "opening", "closing"].indexOf(t.getState()) ? Promise.reject() : (this._swapping = e, t.close(i, !1, o).then(function () {
            return e.open(i);
          }).finally(function () {
            n._swapping = !1;
          }));
        }
      }, {
        key: "on",
        value: function (t, e) {
          var n = this;
          return t in this._callbacks || (this._callbacks[t] = []), this._callbacks[t].push(e), function () {
            n._callbacks[t].splice(n._callbacks[t].indexOf(e), 1);
          };
        }
      }, {
        key: "fire",
        value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          e.stack = this, t in this._callbacks && this._callbacks[t].forEach(function (t) {
            return t(e);
          });
        }
      }, {
        key: "position",
        value: function () {
          var t = this;
          this.positioned && this._length > 0 ? (this.fire("beforePosition"), this._resetPositionData(), this.forEach(function (e) {
            t._positionNotice(e);
          }, {
            start: "head",
            dir: "next",
            skipModuleHandled: !0
          }), this.fire("afterPosition")) : (delete this._nextpos1, delete this._nextpos2);
        }
      }, {
        key: "queuePosition",
        value: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
          this._posTimer && clearTimeout(this._posTimer), this._posTimer = setTimeout(function () {
            return t.position();
          }, e);
        }
      }, {
        key: "_resetPositionData",
        value: function () {
          this._nextpos1 = this.firstpos1, this._nextpos2 = this.firstpos2, this._addpos2 = 0;
        }
      }, {
        key: "_positionNotice",
        value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t === this._masking;
          if (this.positioned) {
            var n = t.refs.elem;
            if (n && (n.classList.contains("pnotify-in") || n.classList.contains("pnotify-initial") || e)) {
              var i = [this.firstpos1, this.firstpos2, this._nextpos1, this._nextpos2, this._addpos2],
                o = i[0],
                r = i[1],
                s = i[2],
                a = i[3],
                c = i[4];
              n.getBoundingClientRect(), !this._animation || e || this._collapsingModalState ? t._setMoveClass("") : t._setMoveClass("pnotify-move");
              var l,
                u = this.context === document.body ? window.innerHeight : this.context.scrollHeight,
                f = this.context === document.body ? window.innerWidth : this.context.scrollWidth;
              if (this.dir1) {
                var d;
                switch (l = {
                  down: "top",
                  up: "bottom",
                  left: "right",
                  right: "left"
                }[this.dir1], this.dir1) {
                  case "down":
                    d = n.offsetTop;
                    break;
                  case "up":
                    d = u - n.scrollHeight - n.offsetTop;
                    break;
                  case "left":
                    d = f - n.scrollWidth - n.offsetLeft;
                    break;
                  case "right":
                    d = n.offsetLeft;
                }
                null == o && (s = o = d);
              }
              if (this.dir1 && this.dir2) {
                var h,
                  p = {
                    down: "top",
                    up: "bottom",
                    left: "right",
                    right: "left"
                  }[this.dir2];
                switch (this.dir2) {
                  case "down":
                    h = n.offsetTop;
                    break;
                  case "up":
                    h = u - n.scrollHeight - n.offsetTop;
                    break;
                  case "left":
                    h = f - n.scrollWidth - n.offsetLeft;
                    break;
                  case "right":
                    h = n.offsetLeft;
                }
                if (null == r && (a = r = h), !e) {
                  var m = s + n.offsetHeight + this.spacing1,
                    v = s + n.offsetWidth + this.spacing1;
                  (("down" === this.dir1 || "up" === this.dir1) && m > u || ("left" === this.dir1 || "right" === this.dir1) && v > f) && (s = o, a += c + this.spacing2, c = 0);
                }
                switch (null != a && (n.style[p] = "".concat(a, "px"), this._animation || n.style[p]), this.dir2) {
                  case "down":
                  case "up":
                    n.offsetHeight + (parseFloat(n.style.marginTop, 10) || 0) + (parseFloat(n.style.marginBottom, 10) || 0) > c && (c = n.offsetHeight);
                    break;
                  case "left":
                  case "right":
                    n.offsetWidth + (parseFloat(n.style.marginLeft, 10) || 0) + (parseFloat(n.style.marginRight, 10) || 0) > c && (c = n.offsetWidth);
                }
              } else if (this.dir1) {
                var y, g;
                switch (this.dir1) {
                  case "down":
                  case "up":
                    g = ["left", "right"], y = this.context.scrollWidth / 2 - n.offsetWidth / 2;
                    break;
                  case "left":
                  case "right":
                    g = ["top", "bottom"], y = u / 2 - n.offsetHeight / 2;
                }
                n.style[g[0]] = "".concat(y, "px"), n.style[g[1]] = "auto", this._animation || n.style[g[0]];
              }
              if (this.dir1) switch (null != s && (n.style[l] = "".concat(s, "px"), this._animation || n.style[l]), this.dir1) {
                case "down":
                case "up":
                  s += n.offsetHeight + this.spacing1;
                  break;
                case "left":
                case "right":
                  s += n.offsetWidth + this.spacing1;
              } else {
                var $ = f / 2 - n.offsetWidth / 2,
                  _ = u / 2 - n.offsetHeight / 2;
                n.style.left = "".concat($, "px"), n.style.top = "".concat(_, "px"), this._animation || n.style.left;
              }
              e || (this.firstpos1 = o, this.firstpos2 = r, this._nextpos1 = s, this._nextpos2 = a, this._addpos2 = c);
            }
          }
        }
      }, {
        key: "_addNotice",
        value: function (t) {
          var e = this;
          this.fire("beforeAddNotice", {
            notice: t
          });
          var n = function () {
              if (e.fire("beforeOpenNotice", {
                notice: t
              }), t.getModuleHandled()) e.fire("afterOpenNotice", {
                notice: t
              });else {
                if (e._openNotices++, ("ish" !== e.modal || !e._overlayOpen) && e.maxOpen !== 1 / 0 && e._openNotices > e.maxOpen && "close" === e.maxStrategy) {
                  var n = e._openNotices - e.maxOpen;
                  e.forEach(function (t) {
                    if (-1 !== ["opening", "open"].indexOf(t.getState())) return t.close(!1, !1, e.maxClosureCausesWait), t === e._leader && e._setLeader(null), !! --n;
                  });
                }
                !0 === e.modal && e._insertOverlay(), "ish" !== e.modal || e._leader && -1 !== ["opening", "open", "closing"].indexOf(e._leader.getState()) || e._setLeader(t), "ish" === e.modal && e._overlayOpen && t._preventTimerClose(!0), e.fire("afterOpenNotice", {
                  notice: t
                });
              }
            },
            i = {
              notice: t,
              prev: null,
              next: null,
              beforeOpenOff: t.on("pnotify:beforeOpen", n),
              afterCloseOff: t.on("pnotify:afterClose", function () {
                if (e.fire("beforeCloseNotice", {
                  notice: t
                }), t.getModuleHandled()) e.fire("afterCloseNotice", {
                  notice: t
                });else {
                  if (e._openNotices--, "ish" === e.modal && t === e._leader && (e._setLeader(null), e._masking && e._setMasking(null)), !e._swapping && e.maxOpen !== 1 / 0 && e._openNotices < e.maxOpen) {
                    var n = !1,
                      i = function (i) {
                        if (i !== t && "waiting" === i.getState() && (i.open().catch(function () {}), e._openNotices >= e.maxOpen)) return n = !0, !1;
                      };
                    "wait" === e.maxStrategy ? (e.forEach(i, {
                      start: t,
                      dir: "next"
                    }), n || e.forEach(i, {
                      start: t,
                      dir: "prev"
                    })) : "close" === e.maxStrategy && e.maxClosureCausesWait && (e.forEach(i, {
                      start: t,
                      dir: "older"
                    }), n || e.forEach(i, {
                      start: t,
                      dir: "newer"
                    }));
                  }
                  e._openNotices <= 0 ? (e._openNotices = 0, e._resetPositionData(), e._overlayOpen && !e._swapping && e._removeOverlay()) : e._collapsingModalState || e.queuePosition(0), e.fire("afterCloseNotice", {
                    notice: t
                  });
                }
              })
            };
          if ("top" === this.push ? (i.next = this._noticeHead.next, i.prev = this._noticeHead, i.next.prev = i, i.prev.next = i) : (i.prev = this._noticeTail.prev, i.next = this._noticeTail, i.prev.next = i, i.next.prev = i), this._noticeMap.set(t, i), this._length++, this._listener || (this._listener = function () {
            return e.position();
          }, this.context.addEventListener("pnotify:position", this._listener)), -1 !== ["open", "opening", "closing"].indexOf(t.getState())) n();else if ("ish" === this.modal && this.modalishFlash && this._shouldNoticeWait(t)) var o = t.on("pnotify:mount", function () {
            o(), t._setMasking(!0, !1, function () {
              t._setMasking(!1);
            }), e._resetPositionData(), e._positionNotice(e._leader), window.requestAnimationFrame(function () {
              e._positionNotice(t, !0);
            });
          });
          this.fire("afterAddNotice", {
            notice: t
          });
        }
      }, {
        key: "_removeNotice",
        value: function (t) {
          if (this._noticeMap.has(t)) {
            this.fire("beforeRemoveNotice", {
              notice: t
            });
            var e = this._noticeMap.get(t);
            this._leader === t && this._setLeader(null), this._masking === t && this._setMasking(null), e.prev.next = e.next, e.next.prev = e.prev, e.prev = null, e.next = null, e.beforeOpenOff(), e.beforeOpenOff = null, e.afterCloseOff(), e.afterCloseOff = null, this._noticeMap.delete(t), this._length--, !this._length && this._listener && (this.context.removeEventListener("pnotify:position", this._listener), this._listener = null), !this._length && this._overlayOpen && this._removeOverlay(), -1 !== ["open", "opening", "closing"].indexOf(t.getState()) && this._handleNoticeClosed(t), this.fire("afterRemoveNotice", {
              notice: t
            });
          }
        }
      }, {
        key: "_setLeader",
        value: function (t) {
          var e = this;
          if (this.fire("beforeSetLeader", {
            leader: t
          }), this._leaderOff && (this._leaderOff(), this._leaderOff = null), this._leader = t, this._leader) {
            var n,
              i = function () {
                var t = null;
                e._overlayOpen && (e._collapsingModalState = !0, e.forEach(function (n) {
                  n._preventTimerClose(!1), n !== e._leader && -1 !== ["opening", "open"].indexOf(n.getState()) && (t || (t = n), n.close(n === t, !1, !0));
                }, {
                  start: e._leader,
                  dir: "next",
                  skipModuleHandled: !0
                }), e._removeOverlay()), o && (clearTimeout(o), o = null), e.forEach(function (n) {
                  if (n !== e._leader) return "waiting" === n.getState() || n === t ? (e._setMasking(n, !!t), !1) : void 0;
                }, {
                  start: e._leader,
                  dir: "next",
                  skipModuleHandled: !0
                });
              },
              o = null,
              r = function () {
                o && (clearTimeout(o), o = null), o = setTimeout(function () {
                  o = null, e._setMasking(null);
                }, 750);
              };
            this._leaderOff = (n = [this._leader.on("mouseenter", i), this._leader.on("focusin", i), this._leader.on("mouseleave", r), this._leader.on("focusout", r)], function () {
              return n.map(function (t) {
                return t();
              });
            }), this.fire("afterSetLeader", {
              leader: t
            });
          } else this.fire("afterSetLeader", {
            leader: t
          });
        }
      }, {
        key: "_setMasking",
        value: function (t, e) {
          var n = this;
          if (this._masking) {
            if (this._masking === t) return;
            this._masking._setMasking(!1, e);
          }
          if (this._maskingOff && (this._maskingOff(), this._maskingOff = null), this._masking = t, this._masking) {
            this._resetPositionData(), this._leader && this._positionNotice(this._leader), this._masking._setMasking(!0, e), window.requestAnimationFrame(function () {
              n._masking && n._positionNotice(n._masking);
            });
            var i,
              o = function () {
                "ish" === n.modal && (n._insertOverlay(), n._setMasking(null, !0), n.forEach(function (t) {
                  t._preventTimerClose(!0), "waiting" === t.getState() && t.open();
                }, {
                  start: n._leader,
                  dir: "next",
                  skipModuleHandled: !0
                }));
              };
            this._maskingOff = (i = [this._masking.on("mouseenter", o), this._masking.on("focusin", o)], function () {
              return i.map(function (t) {
                return t();
              });
            });
          }
        }
      }, {
        key: "_shouldNoticeWait",
        value: function (t) {
          return this._swapping !== t && !("ish" === this.modal && this._overlayOpen) && this.maxOpen !== 1 / 0 && this._openNotices >= this.maxOpen && "wait" === this.maxStrategy;
        }
      }, {
        key: "_insertOverlay",
        value: function () {
          var t = this;
          this._overlay || (this._overlay = document.createElement("div"), this._overlay.classList.add("pnotify-modal-overlay"), this.dir1 && this._overlay.classList.add("pnotify-modal-overlay-".concat(this.dir1)), this.overlayClose && this._overlay.classList.add("pnotify-modal-overlay-closes"), this.context !== document.body && (this._overlay.style.height = "".concat(this.context.scrollHeight, "px"), this._overlay.style.width = "".concat(this.context.scrollWidth, "px")), this._overlay.addEventListener("click", function (e) {
            if (t.overlayClose) {
              if (t.fire("overlayClose", {
                clickEvent: e
              }), e.defaultPrevented) return;
              t._leader && t._setLeader(null), t.forEach(function (e) {
                -1 === ["closed", "closing", "waiting"].indexOf(e.getState()) && (e.hide || t.overlayClosesPinned ? e.close() : e.hide || "ish" !== t.modal || (t._leader ? e.close(!1, !1, !0) : t._setLeader(e)));
              }, {
                skipModuleHandled: !0
              }), t._overlayOpen && t._removeOverlay();
            }
          })), this._overlay.parentNode !== this.context && (this.fire("beforeAddOverlay"), this._overlay.classList.remove("pnotify-modal-overlay-in"), this._overlay = this.context.insertBefore(this._overlay, this.context.firstChild), this._overlayOpen = !0, this._overlayInserted = !0, window.requestAnimationFrame(function () {
            t._overlay.classList.add("pnotify-modal-overlay-in"), t.fire("afterAddOverlay");
          })), this._collapsingModalState = !1;
        }
      }, {
        key: "_removeOverlay",
        value: function () {
          var t = this;
          this._overlay.parentNode && (this.fire("beforeRemoveOverlay"), this._overlay.classList.remove("pnotify-modal-overlay-in"), this._overlayOpen = !1, setTimeout(function () {
            t._overlayInserted = !1, t._overlay.parentNode && (t._overlay.parentNode.removeChild(t._overlay), t.fire("afterRemoveOverlay"));
          }, 250), setTimeout(function () {
            t._collapsingModalState = !1;
          }, 400));
        }
      }, {
        key: "notices",
        get: function () {
          var t = [];
          return this.forEach(function (e) {
            return t.push(e);
          }), t;
        }
      }, {
        key: "length",
        get: function () {
          return this._length;
        }
      }, {
        key: "leader",
        get: function () {
          return this._leader;
        }
      }]), t;
    }(),
    gt = function () {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
      return f(Jt, e);
    };
  var $t = at.Map;
  function _t(t, e, n) {
    var i = t.slice();
    return i[109] = e[n][0], i[110] = e[n][1], i;
  }
  function kt(t, e, n) {
    var i = t.slice();
    return i[109] = e[n][0], i[110] = e[n][1], i;
  }
  function xt(t, e, n) {
    var i = t.slice();
    return i[109] = e[n][0], i[110] = e[n][1], i;
  }
  function bt(t, e, n) {
    var i = t.slice();
    return i[109] = e[n][0], i[110] = e[n][1], i;
  }
  function wt(t, e) {
    var n,
      i,
      o,
      r,
      s = [{
        self: e[42]
      }, e[110]],
      a = e[109].default;
    function c(t) {
      for (var e = {}, n = 0; n < s.length; n += 1) e = $(e, s[n]);
      return {
        props: e
      };
    }
    return a && (i = new a(c())), {
      key: t,
      first: null,
      c: function () {
        n = S(), i && dt(i.$$.fragment), o = S(), this.first = n;
      },
      m: function (t, e) {
        C(t, n, e), i && ht(i, t, e), C(t, o, e), r = !0;
      },
      p: function (t, e) {
        var n = 2176 & e[1] ? ut(s, [2048 & e[1] && {
          self: t[42]
        }, 128 & e[1] && ft(t[110])]) : {};
        if (a !== (a = t[109].default)) {
          if (i) {
            it();
            var r = i;
            st(r.$$.fragment, 1, 0, function () {
              pt(r, 1);
            }), ot();
          }
          a ? (dt((i = new a(c())).$$.fragment), rt(i.$$.fragment, 1), ht(i, o.parentNode, o)) : i = null;
        } else a && i.$set(n);
      },
      i: function (t) {
        r || (i && rt(i.$$.fragment, t), r = !0);
      },
      o: function (t) {
        i && st(i.$$.fragment, t), r = !1;
      },
      d: function (t) {
        t && M(n), t && M(o), i && pt(i, t);
      }
    };
  }
  function Ot(t) {
    var e, n, i, o, r, s;
    return {
      c: function () {
        e = T("div"), P(n = T("span"), "class", t[22]("closer")), P(e, "class", i = "pnotify-closer ".concat(t[21]("closer"), " ").concat(t[17] && !t[26] || t[28] ? "pnotify-hidden" : "")), P(e, "role", "button"), P(e, "tabindex", "0"), P(e, "title", o = t[20].close);
      },
      m: function (i, o) {
        C(i, e, o), O(e, n), r || (s = N(e, "click", t[81]), r = !0);
      },
      p: function (t, n) {
        335675392 & n[0] && i !== (i = "pnotify-closer ".concat(t[21]("closer"), " ").concat(t[17] && !t[26] || t[28] ? "pnotify-hidden" : "")) && P(e, "class", i), 1048576 & n[0] && o !== (o = t[20].close) && P(e, "title", o);
      },
      d: function (t) {
        t && M(e), r = !1, s();
      }
    };
  }
  function Ct(t) {
    var e, n, i, o, r, s, a, c;
    return {
      c: function () {
        e = T("div"), P(n = T("span"), "class", i = "".concat(t[22]("sticker"), " ").concat(t[3] ? t[22]("unstuck") : t[22]("stuck"))), P(e, "class", o = "pnotify-sticker ".concat(t[21]("sticker"), " ").concat(t[19] && !t[26] || t[28] ? "pnotify-hidden" : "")), P(e, "role", "button"), P(e, "aria-pressed", r = !t[3]), P(e, "tabindex", "0"), P(e, "title", s = t[3] ? t[20].stick : t[20].unstick);
      },
      m: function (i, o) {
        C(i, e, o), O(e, n), a || (c = N(e, "click", t[82]), a = !0);
      },
      p: function (t, a) {
        8 & a[0] && i !== (i = "".concat(t[22]("sticker"), " ").concat(t[3] ? t[22]("unstuck") : t[22]("stuck"))) && P(n, "class", i), 336068608 & a[0] && o !== (o = "pnotify-sticker ".concat(t[21]("sticker"), " ").concat(t[19] && !t[26] || t[28] ? "pnotify-hidden" : "")) && P(e, "class", o), 8 & a[0] && r !== (r = !t[3]) && P(e, "aria-pressed", r), 1048584 & a[0] && s !== (s = t[3] ? t[20].stick : t[20].unstick) && P(e, "title", s);
      },
      d: function (t) {
        t && M(e), a = !1, c();
      }
    };
  }
  function Mt(t) {
    var e, n, i;
    return {
      c: function () {
        e = T("div"), P(n = T("span"), "class", i = !0 === t[13] ? t[22](t[4]) : t[13]), P(e, "class", "pnotify-icon ".concat(t[21]("icon")));
      },
      m: function (i, o) {
        C(i, e, o), O(e, n), t[83](e);
      },
      p: function (t, e) {
        8208 & e[0] && i !== (i = !0 === t[13] ? t[22](t[4]) : t[13]) && P(n, "class", i);
      },
      d: function (n) {
        n && M(e), t[83](null);
      }
    };
  }
  function Tt(t, e) {
    var n,
      i,
      o,
      r,
      s = [{
        self: e[42]
      }, e[110]],
      a = e[109].default;
    function c(t) {
      for (var e = {}, n = 0; n < s.length; n += 1) e = $(e, s[n]);
      return {
        props: e
      };
    }
    return a && (i = new a(c())), {
      key: t,
      first: null,
      c: function () {
        n = S(), i && dt(i.$$.fragment), o = S(), this.first = n;
      },
      m: function (t, e) {
        C(t, n, e), i && ht(i, t, e), C(t, o, e), r = !0;
      },
      p: function (t, e) {
        var n = 2304 & e[1] ? ut(s, [2048 & e[1] && {
          self: t[42]
        }, 256 & e[1] && ft(t[110])]) : {};
        if (a !== (a = t[109].default)) {
          if (i) {
            it();
            var r = i;
            st(r.$$.fragment, 1, 0, function () {
              pt(r, 1);
            }), ot();
          }
          a ? (dt((i = new a(c())).$$.fragment), rt(i.$$.fragment, 1), ht(i, o.parentNode, o)) : i = null;
        } else a && i.$set(n);
      },
      i: function (t) {
        r || (i && rt(i.$$.fragment, t), r = !0);
      },
      o: function (t) {
        i && st(i.$$.fragment, t), r = !1;
      },
      d: function (t) {
        t && M(n), t && M(o), i && pt(i, t);
      }
    };
  }
  function Ht(t) {
    var e,
      n = !t[34] && Et(t);
    return {
      c: function () {
        e = T("div"), n && n.c(), P(e, "class", "pnotify-title ".concat(t[21]("title")));
      },
      m: function (i, o) {
        C(i, e, o), n && n.m(e, null), t[84](e);
      },
      p: function (t, i) {
        t[34] ? n && (n.d(1), n = null) : n ? n.p(t, i) : ((n = Et(t)).c(), n.m(e, null));
      },
      d: function (i) {
        i && M(e), n && n.d(), t[84](null);
      }
    };
  }
  function Et(t) {
    var e;
    function n(t, e) {
      return t[6] ? Nt : St;
    }
    var i = n(t),
      o = i(t);
    return {
      c: function () {
        o.c(), e = S();
      },
      m: function (t, n) {
        o.m(t, n), C(t, e, n);
      },
      p: function (t, r) {
        i === (i = n(t)) && o ? o.p(t, r) : (o.d(1), (o = i(t)) && (o.c(), o.m(e.parentNode, e)));
      },
      d: function (t) {
        o.d(t), t && M(e);
      }
    };
  }
  function St(t) {
    var e, n;
    return {
      c: function () {
        e = T("span"), n = H(t[5]), P(e, "class", "pnotify-pre-line");
      },
      m: function (t, i) {
        C(t, e, i), O(e, n);
      },
      p: function (t, e) {
        32 & e[0] && L(n, t[5]);
      },
      d: function (t) {
        t && M(e);
      }
    };
  }
  function Nt(t) {
    var e, n;
    return {
      c: function () {
        n = S(), e = new R(n);
      },
      m: function (i, o) {
        e.m(t[5], i, o), C(i, n, o);
      },
      p: function (t, n) {
        32 & n[0] && e.p(t[5]);
      },
      d: function (t) {
        t && M(n), t && e.d();
      }
    };
  }
  function Pt(t) {
    var e,
      n,
      i = !t[35] && At(t);
    return {
      c: function () {
        e = T("div"), i && i.c(), P(e, "class", n = "pnotify-text ".concat(t[21]("text"), " ").concat("" === t[33] ? "" : "pnotify-text-with-max-height")), P(e, "style", t[33]), P(e, "role", "alert");
      },
      m: function (n, o) {
        C(n, e, o), i && i.m(e, null), t[85](e);
      },
      p: function (t, o) {
        t[35] ? i && (i.d(1), i = null) : i ? i.p(t, o) : ((i = At(t)).c(), i.m(e, null)), 4 & o[1] && n !== (n = "pnotify-text ".concat(t[21]("text"), " ").concat("" === t[33] ? "" : "pnotify-text-with-max-height")) && P(e, "class", n), 4 & o[1] && P(e, "style", t[33]);
      },
      d: function (n) {
        n && M(e), i && i.d(), t[85](null);
      }
    };
  }
  function At(t) {
    var e;
    function n(t, e) {
      return t[8] ? jt : Lt;
    }
    var i = n(t),
      o = i(t);
    return {
      c: function () {
        o.c(), e = S();
      },
      m: function (t, n) {
        o.m(t, n), C(t, e, n);
      },
      p: function (t, r) {
        i === (i = n(t)) && o ? o.p(t, r) : (o.d(1), (o = i(t)) && (o.c(), o.m(e.parentNode, e)));
      },
      d: function (t) {
        o.d(t), t && M(e);
      }
    };
  }
  function Lt(t) {
    var e, n;
    return {
      c: function () {
        e = T("span"), n = H(t[7]), P(e, "class", "pnotify-pre-line");
      },
      m: function (t, i) {
        C(t, e, i), O(e, n);
      },
      p: function (t, e) {
        128 & e[0] && L(n, t[7]);
      },
      d: function (t) {
        t && M(e);
      }
    };
  }
  function jt(t) {
    var e, n;
    return {
      c: function () {
        n = S(), e = new R(n);
      },
      m: function (i, o) {
        e.m(t[7], i, o), C(i, n, o);
      },
      p: function (t, n) {
        128 & n[0] && e.p(t[7]);
      },
      d: function (t) {
        t && M(n), t && e.d();
      }
    };
  }
  function Rt(t, e) {
    var n,
      i,
      o,
      r,
      s = [{
        self: e[42]
      }, e[110]],
      a = e[109].default;
    function c(t) {
      for (var e = {}, n = 0; n < s.length; n += 1) e = $(e, s[n]);
      return {
        props: e
      };
    }
    return a && (i = new a(c())), {
      key: t,
      first: null,
      c: function () {
        n = S(), i && dt(i.$$.fragment), o = S(), this.first = n;
      },
      m: function (t, e) {
        C(t, n, e), i && ht(i, t, e), C(t, o, e), r = !0;
      },
      p: function (t, e) {
        var n = 2560 & e[1] ? ut(s, [2048 & e[1] && {
          self: t[42]
        }, 512 & e[1] && ft(t[110])]) : {};
        if (a !== (a = t[109].default)) {
          if (i) {
            it();
            var r = i;
            st(r.$$.fragment, 1, 0, function () {
              pt(r, 1);
            }), ot();
          }
          a ? (dt((i = new a(c())).$$.fragment), rt(i.$$.fragment, 1), ht(i, o.parentNode, o)) : i = null;
        } else a && i.$set(n);
      },
      i: function (t) {
        r || (i && rt(i.$$.fragment, t), r = !0);
      },
      o: function (t) {
        i && st(i.$$.fragment, t), r = !1;
      },
      d: function (t) {
        t && M(n), t && M(o), i && pt(i, t);
      }
    };
  }
  function Wt(t, e) {
    var n,
      i,
      o,
      r,
      s = [{
        self: e[42]
      }, e[110]],
      a = e[109].default;
    function c(t) {
      for (var e = {}, n = 0; n < s.length; n += 1) e = $(e, s[n]);
      return {
        props: e
      };
    }
    return a && (i = new a(c())), {
      key: t,
      first: null,
      c: function () {
        n = S(), i && dt(i.$$.fragment), o = S(), this.first = n;
      },
      m: function (t, e) {
        C(t, n, e), i && ht(i, t, e), C(t, o, e), r = !0;
      },
      p: function (t, e) {
        var n = 3072 & e[1] ? ut(s, [2048 & e[1] && {
          self: t[42]
        }, 1024 & e[1] && ft(t[110])]) : {};
        if (a !== (a = t[109].default)) {
          if (i) {
            it();
            var r = i;
            st(r.$$.fragment, 1, 0, function () {
              pt(r, 1);
            }), ot();
          }
          a ? (dt((i = new a(c())).$$.fragment), rt(i.$$.fragment, 1), ht(i, o.parentNode, o)) : i = null;
        } else a && i.$set(n);
      },
      i: function (t) {
        r || (i && rt(i.$$.fragment, t), r = !0);
      },
      o: function (t) {
        i && st(i.$$.fragment, t), r = !1;
      },
      d: function (t) {
        t && M(n), t && M(o), i && pt(i, t);
      }
    };
  }
  function It(t) {
    for (var e, n, i, o, r, s, a, c, l, u, f, d, h, p, m, v, y, $ = [], _ = new $t(), k = [], w = new $t(), H = [], S = new $t(), A = [], L = new $t(), j = t[38], R = function (t) {
        return t[109];
      }, W = 0; W < j.length; W += 1) {
      var I = bt(t, j, W),
        D = R(I);
      _.set(D, $[W] = wt(D, I));
    }
    for (var F = t[16] && !t[36] && Ot(t), q = t[18] && !t[36] && Ct(t), B = !1 !== t[13] && Mt(t), z = t[39], U = function (t) {
        return t[109];
      }, G = 0; G < z.length; G += 1) {
      var J = xt(t, z, G),
        K = U(J);
      w.set(K, k[G] = Tt(K, J));
    }
    for (var Q = !1 !== t[5] && Ht(t), V = !1 !== t[7] && Pt(t), X = t[40], Y = function (t) {
        return t[109];
      }, Z = 0; Z < X.length; Z += 1) {
      var tt = kt(t, X, Z),
        et = Y(tt);
      S.set(et, H[Z] = Rt(et, tt));
    }
    for (var nt = t[41], at = function (t) {
        return t[109];
      }, ut = 0; ut < nt.length; ut += 1) {
      var ft = _t(t, nt, ut),
        dt = at(ft);
      L.set(dt, A[ut] = Wt(dt, ft));
    }
    return {
      c: function () {
        e = T("div"), n = T("div");
        for (var m = 0; m < $.length; m += 1) $[m].c();
        i = E(), F && F.c(), o = E(), q && q.c(), r = E(), B && B.c(), s = E(), a = T("div");
        for (var v = 0; v < k.length; v += 1) k[v].c();
        c = E(), Q && Q.c(), l = E(), V && V.c(), u = E();
        for (var y = 0; y < H.length; y += 1) H[y].c();
        f = E();
        for (var g = 0; g < A.length; g += 1) A[g].c();
        P(a, "class", "pnotify-content ".concat(t[21]("content"))), P(n, "class", d = "pnotify-container ".concat(t[21]("container"), " ").concat(t[21](t[4]), " ").concat(t[15] ? "pnotify-shadow" : "", " ").concat(t[27].container.join(" "))), P(n, "style", h = "".concat(t[31], " ").concat(t[32])), P(n, "role", "alert"), P(e, "data-pnotify", ""), P(e, "class", p = "pnotify ".concat(!t[0] || t[0].positioned ? "pnotify-positioned" : "", " ").concat(!1 !== t[13] ? "pnotify-with-icon" : "", " ").concat(t[21]("elem"), " pnotify-mode-").concat(t[9], " ").concat(t[10], " ").concat(t[24], " ").concat(t[25], " ").concat(t[37], " ").concat("fade" === t[2] ? "pnotify-fade-".concat(t[14]) : "", " ").concat(t[30] ? "pnotify-modal ".concat(t[11]) : t[12], " ").concat(t[28] ? "pnotify-masking" : "", " ").concat(t[29] ? "pnotify-masking-in" : "", " ").concat(t[27].elem.join(" "))), P(e, "aria-live", "assertive"), P(e, "role", "alertdialog");
      },
      m: function (d, h) {
        C(d, e, h), O(e, n);
        for (var p = 0; p < $.length; p += 1) $[p].m(n, null);
        O(n, i), F && F.m(n, null), O(n, o), q && q.m(n, null), O(n, r), B && B.m(n, null), O(n, s), O(n, a);
        for (var _ = 0; _ < k.length; _ += 1) k[_].m(a, null);
        O(a, c), Q && Q.m(a, null), O(a, l), V && V.m(a, null), O(a, u);
        for (var x = 0; x < H.length; x += 1) H[x].m(a, null);
        t[86](a), O(n, f);
        for (var w = 0; w < A.length; w += 1) A[w].m(n, null);
        var M;
        t[87](n), t[88](e), m = !0, v || (y = [(M = t[43].call(null, e), M && b(M.destroy) ? M.destroy : g), N(e, "mouseenter", t[44]), N(e, "mouseleave", t[45]), N(e, "focusin", t[44]), N(e, "focusout", t[45])], v = !0);
      },
      p: function (t, f) {
        if (2176 & f[1]) {
          var v = t[38];
          it(), $ = lt($, f, R, 1, t, v, _, n, ct, wt, i, bt), ot();
        }
        if (t[16] && !t[36] ? F ? F.p(t, f) : ((F = Ot(t)).c(), F.m(n, o)) : F && (F.d(1), F = null), t[18] && !t[36] ? q ? q.p(t, f) : ((q = Ct(t)).c(), q.m(n, r)) : q && (q.d(1), q = null), !1 !== t[13] ? B ? B.p(t, f) : ((B = Mt(t)).c(), B.m(n, s)) : B && (B.d(1), B = null), 2304 & f[1]) {
          var y = t[39];
          it(), k = lt(k, f, U, 1, t, y, w, a, ct, Tt, c, xt), ot();
        }
        if (!1 !== t[5] ? Q ? Q.p(t, f) : ((Q = Ht(t)).c(), Q.m(a, l)) : Q && (Q.d(1), Q = null), !1 !== t[7] ? V ? V.p(t, f) : ((V = Pt(t)).c(), V.m(a, u)) : V && (V.d(1), V = null), 2560 & f[1]) {
          var g = t[40];
          it(), H = lt(H, f, Y, 1, t, g, S, a, ct, Rt, null, kt), ot();
        }
        if (3072 & f[1]) {
          var x = t[41];
          it(), A = lt(A, f, at, 1, t, x, L, n, ct, Wt, null, _t), ot();
        }
        (!m || 134250512 & f[0] && d !== (d = "pnotify-container ".concat(t[21]("container"), " ").concat(t[21](t[4]), " ").concat(t[15] ? "pnotify-shadow" : "", " ").concat(t[27].container.join(" ")))) && P(n, "class", d), (!m || 3 & f[1] && h !== (h = "".concat(t[31], " ").concat(t[32]))) && P(n, "style", h), (!m || 2063629829 & f[0] | 64 & f[1] && p !== (p = "pnotify ".concat(!t[0] || t[0].positioned ? "pnotify-positioned" : "", " ").concat(!1 !== t[13] ? "pnotify-with-icon" : "", " ").concat(t[21]("elem"), " pnotify-mode-").concat(t[9], " ").concat(t[10], " ").concat(t[24], " ").concat(t[25], " ").concat(t[37], " ").concat("fade" === t[2] ? "pnotify-fade-".concat(t[14]) : "", " ").concat(t[30] ? "pnotify-modal ".concat(t[11]) : t[12], " ").concat(t[28] ? "pnotify-masking" : "", " ").concat(t[29] ? "pnotify-masking-in" : "", " ").concat(t[27].elem.join(" ")))) && P(e, "class", p);
      },
      i: function (t) {
        if (!m) {
          for (var e = 0; e < j.length; e += 1) rt($[e]);
          for (var n = 0; n < z.length; n += 1) rt(k[n]);
          for (var i = 0; i < X.length; i += 1) rt(H[i]);
          for (var o = 0; o < nt.length; o += 1) rt(A[o]);
          m = !0;
        }
      },
      o: function (t) {
        for (var e = 0; e < $.length; e += 1) st($[e]);
        for (var n = 0; n < k.length; n += 1) st(k[n]);
        for (var i = 0; i < H.length; i += 1) st(H[i]);
        for (var o = 0; o < A.length; o += 1) st(A[o]);
        m = !1;
      },
      d: function (n) {
        n && M(e);
        for (var i = 0; i < $.length; i += 1) $[i].d();
        F && F.d(), q && q.d(), B && B.d();
        for (var o = 0; o < k.length; o += 1) k[o].d();
        Q && Q.d(), V && V.d();
        for (var r = 0; r < H.length; r += 1) H[r].d();
        t[86](null);
        for (var s = 0; s < A.length; s += 1) A[s].d();
        t[87](null), t[88](null), v = !1, x(y);
      }
    };
  }
  function Dt(t, n) {
    "object" !== e(t) && (t = {
      text: t
    }), n && (t.type = n);
    var i = document.body;
    return "stack" in t && t.stack && t.stack.context && (i = t.stack.context), {
      target: i,
      props: t
    };
  }
  var Ft,
    qt = new yt({
      dir1: "down",
      dir2: "left",
      firstpos1: 25,
      firstpos2: 25,
      spacing1: 36,
      spacing2: 36,
      push: "bottom"
    }),
    Bt = new Map(),
    zt = {
      type: "notice",
      title: !1,
      titleTrusted: !1,
      text: !1,
      textTrusted: !1,
      styling: "brighttheme",
      icons: "brighttheme",
      mode: "no-preference",
      addClass: "",
      addModalClass: "",
      addModelessClass: "",
      autoOpen: !0,
      width: "360px",
      minHeight: "16px",
      maxTextHeight: "200px",
      icon: !0,
      animation: "fade",
      animateSpeed: "normal",
      shadow: !0,
      hide: !0,
      delay: 8e3,
      mouseReset: !0,
      closer: !0,
      closerHover: !0,
      sticker: !0,
      stickerHover: !0,
      labels: {
        close: "Close",
        stick: "Pin",
        unstick: "Unpin"
      },
      remove: !0,
      destroy: !0,
      stack: qt,
      modules: Bt
    };
  function Ut() {
    qt.context || (qt.context = document.body), window.addEventListener("resize", function () {
      Ft && clearTimeout(Ft), Ft = setTimeout(function () {
        var t = new Event("pnotify:position");
        document.body.dispatchEvent(t), Ft = null;
      }, 10);
    });
  }
  function Gt(t, e, n) {
    var i = I(),
      o = D(),
      r = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = ["focus", "blur", "fullscreenchange", "fullscreenerror", "scroll", "cut", "copy", "paste", "keydown", "keypress", "keyup", "auxclick", "click", "contextmenu", "dblclick", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseout", "mouseup", "pointerlockchange", "pointerlockerror", "select", "wheel", "drag", "dragend", "dragenter", "dragstart", "dragleave", "dragover", "drop", "touchcancel", "touchend", "touchmove", "touchstart", "pointerover", "pointerenter", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerout", "pointerleave", "gotpointercapture", "lostpointercapture"].concat(m(e));
        function i(e) {
          F(t, e);
        }
        return function (t) {
          for (var e = [], o = 0; o < n.length; o++) e.push(N(t, n[o], i));
          return {
            destroy: function () {
              for (var t = 0; t < e.length; t++) e[t]();
            }
          };
        };
      }(i, ["pnotify:init", "pnotify:mount", "pnotify:update", "pnotify:beforeOpen", "pnotify:afterOpen", "pnotify:enterModal", "pnotify:leaveModal", "pnotify:beforeClose", "pnotify:afterClose", "pnotify:beforeDestroy", "pnotify:afterDestroy", "focusin", "focusout", "animationend", "transitionend"]),
      s = e.modules,
      c = void 0 === s ? new Map(zt.modules) : s,
      l = e.stack,
      u = void 0 === l ? zt.stack : l,
      f = {
        elem: null,
        container: null,
        content: null,
        iconContainer: null,
        titleContainer: null,
        textContainer: null
      },
      d = a({}, zt);
    Qt("init", {
      notice: i,
      defaults: d
    });
    var h,
      v = e.type,
      y = void 0 === v ? d.type : v,
      g = e.title,
      $ = void 0 === g ? d.title : g,
      _ = e.titleTrusted,
      k = void 0 === _ ? d.titleTrusted : _,
      x = e.text,
      b = void 0 === x ? d.text : x,
      w = e.textTrusted,
      O = void 0 === w ? d.textTrusted : w,
      C = e.styling,
      M = void 0 === C ? d.styling : C,
      T = e.icons,
      H = void 0 === T ? d.icons : T,
      E = e.mode,
      S = void 0 === E ? d.mode : E,
      P = e.addClass,
      A = void 0 === P ? d.addClass : P,
      L = e.addModalClass,
      j = void 0 === L ? d.addModalClass : L,
      R = e.addModelessClass,
      W = void 0 === R ? d.addModelessClass : R,
      q = e.autoOpen,
      z = void 0 === q ? d.autoOpen : q,
      U = e.width,
      G = void 0 === U ? d.width : U,
      J = e.minHeight,
      K = void 0 === J ? d.minHeight : J,
      V = e.maxTextHeight,
      X = void 0 === V ? d.maxTextHeight : V,
      Y = e.icon,
      Z = void 0 === Y ? d.icon : Y,
      tt = e.animation,
      et = void 0 === tt ? d.animation : tt,
      nt = e.animateSpeed,
      it = void 0 === nt ? d.animateSpeed : nt,
      ot = e.shadow,
      rt = void 0 === ot ? d.shadow : ot,
      st = e.hide,
      at = void 0 === st ? d.hide : st,
      ct = e.delay,
      lt = void 0 === ct ? d.delay : ct,
      ut = e.mouseReset,
      ft = void 0 === ut ? d.mouseReset : ut,
      dt = e.closer,
      ht = void 0 === dt ? d.closer : dt,
      pt = e.closerHover,
      mt = void 0 === pt ? d.closerHover : pt,
      vt = e.sticker,
      yt = void 0 === vt ? d.sticker : vt,
      gt = e.stickerHover,
      $t = void 0 === gt ? d.stickerHover : gt,
      _t = e.labels,
      kt = void 0 === _t ? d.labels : _t,
      xt = e.remove,
      bt = void 0 === xt ? d.remove : xt,
      wt = e.destroy,
      Ot = void 0 === wt ? d.destroy : wt,
      Ct = "closed",
      Mt = null,
      Tt = null,
      Ht = null,
      Et = !1,
      St = "",
      Nt = "",
      Pt = !1,
      At = !1,
      Lt = {
        elem: [],
        container: []
      },
      jt = !1,
      Rt = !1,
      Wt = !1,
      It = !1,
      Dt = null,
      Ft = at,
      qt = null,
      Bt = null,
      Ut = u && (!0 === u.modal || "ish" === u.modal && "prevented" === Mt),
      Gt = NaN,
      Jt = null,
      Kt = null;
    function Qt(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = a({
          notice: i
        }, e);
      "init" === t && Array.from(c).forEach(function (t) {
        var e = p(t, 2),
          i = e[0];
        e[1];
        return "init" in i && i.init(n);
      });
      var r = f.elem || u && u.context || document.body;
      if (!r) return o("pnotify:".concat(t), n), !0;
      var s = new Event("pnotify:".concat(t), {
        bubbles: "init" === t || "mount" === t,
        cancelable: t.startsWith("before")
      });
      return s.detail = n, r.dispatchEvent(s), !s.defaultPrevented;
    }
    function Vt() {
      var t = u && u.context || document.body;
      if (!t) throw new Error("No context to insert this notice into.");
      if (!f.elem) throw new Error("Trying to insert notice before element is available.");
      f.elem.parentNode !== t && t.appendChild(f.elem);
    }
    function Xt() {
      f.elem && f.elem.parentNode.removeChild(f.elem);
    }
    h = function () {
      Qt("mount"), z && Zt().catch(function () {});
    }, I().$$.on_mount.push(h), function (t) {
      I().$$.before_update.push(t);
    }(function () {
      Qt("update"), "closed" !== Ct && "waiting" !== Ct && at !== Ft && (at ? Ft || ae() : se()), "closed" !== Ct && "closing" !== Ct && u && !u._collapsingModalState && u.queuePosition(), Ft = at;
    });
    var Yt = e.open,
      Zt = void 0 === Yt ? function (t) {
        if ("opening" === Ct) return qt;
        if ("open" === Ct) return at && ae(), Promise.resolve();
        if (!jt && u && u._shouldNoticeWait(i)) return Ct = "waiting", Promise.reject();
        if (!Qt("beforeOpen", {
          immediate: t
        })) return Promise.reject();
        var e, o;
        Ct = "opening", n(28, Wt = !1), n(24, St = "pnotify-initial pnotify-hidden");
        var r = new Promise(function (t, n) {
          e = t, o = n;
        });
        qt = r;
        var s = function () {
          at && ae(), Ct = "open", Qt("afterOpen", {
            immediate: t
          }), qt = null, e();
        };
        return Rt ? (s(), Promise.resolve()) : (Vt(), window.requestAnimationFrame(function () {
          if ("opening" !== Ct) return o(), void (qt = null);
          u && (n(0, u._animation = !1, u), "top" === u.push && u._resetPositionData(), u._positionNotice(i), u.queuePosition(0), n(0, u._animation = !0, u)), ie(s, t);
        }), r);
      } : Yt,
      te = e.close,
      ee = void 0 === te ? function (t, e, o) {
        if ("closing" === Ct) return Bt;
        if ("closed" === Ct) return Promise.resolve();
        var r,
          s = function () {
            Qt("beforeDestroy") && (u && u._removeNotice(i), i.$destroy(), Qt("afterDestroy"));
          };
        if ("waiting" === Ct) return o || (Ct = "closed", Ot && !o && s()), Promise.resolve();
        if (!Qt("beforeClose", {
          immediate: t,
          timerHide: e,
          waitAfterward: o
        })) return Promise.reject();
        Ct = "closing", Pt = !!e, Mt && "prevented" !== Mt && clearTimeout && clearTimeout(Mt), Mt = null;
        var a = new Promise(function (t, e) {
          r = t;
        });
        return Bt = a, re(function () {
          n(26, At = !1), Pt = !1, Ct = o ? "waiting" : "closed", Qt("afterClose", {
            immediate: t,
            timerHide: e,
            waitAfterward: o
          }), Bt = null, r(), o || (Ot ? s() : bt && Xt());
        }, t), a;
      } : te,
      ne = e.animateIn,
      ie = void 0 === ne ? function (t, e) {
        Et = "in";
        var i = function e(n) {
          if (!(n && f.elem && n.target !== f.elem || (f.elem && f.elem.removeEventListener("transitionend", e), Tt && clearTimeout(Tt), "in" !== Et))) {
            var i = Rt;
            if (!i && f.elem) {
              var o = f.elem.getBoundingClientRect();
              for (var r in o) if (o[r] > 0) {
                i = !0;
                break;
              }
            }
            i ? (t && t.call(), Et = !1) : Tt = setTimeout(e, 40);
          }
        };
        if ("fade" !== et || e) {
          var o = et;
          n(2, et = "none"), n(24, St = "pnotify-in ".concat("fade" === o ? "pnotify-fade-in" : "")), Q().then(function () {
            n(2, et = o), i();
          });
        } else f.elem && f.elem.addEventListener("transitionend", i), n(24, St = "pnotify-in"), Q().then(function () {
          n(24, St = "pnotify-in pnotify-fade-in"), Tt = setTimeout(i, 650);
        });
      } : ne,
      oe = e.animateOut,
      re = void 0 === oe ? function (t, e) {
        Et = "out";
        var i = function e(i) {
          if (!(i && f.elem && i.target !== f.elem || (f.elem && f.elem.removeEventListener("transitionend", e), Ht && clearTimeout(Ht), "out" !== Et))) {
            var o = Rt;
            if (!o && f.elem) {
              var r = f.elem.getBoundingClientRect();
              for (var s in r) if (r[s] > 0) {
                o = !0;
                break;
              }
            }
            f.elem && f.elem.style.opacity && "0" !== f.elem.style.opacity && o ? Ht = setTimeout(e, 40) : (n(24, St = ""), t && t.call(), Et = !1);
          }
        };
        "fade" !== et || e ? (n(24, St = ""), Q().then(function () {
          i();
        })) : (f.elem && f.elem.addEventListener("transitionend", i), n(24, St = "pnotify-in"), Ht = setTimeout(i, 650));
      } : oe;
    function se() {
      Mt && "prevented" !== Mt && (clearTimeout(Mt), Mt = null), Ht && clearTimeout(Ht), "closing" === Ct && (Ct = "open", Et = !1, n(24, St = "fade" === et ? "pnotify-in pnotify-fade-in" : "pnotify-in"));
    }
    function ae() {
      "prevented" !== Mt && (se(), lt !== 1 / 0 && (Mt = setTimeout(function () {
        return ee(!1, !0);
      }, isNaN(lt) ? 0 : lt)));
    }
    var ce, le, ue, fe, de, he, pe, me, ve, ye, ge;
    return t.$$set = function (t) {
      "modules" in t && n(46, c = t.modules), "stack" in t && n(0, u = t.stack), "type" in t && n(4, y = t.type), "title" in t && n(5, $ = t.title), "titleTrusted" in t && n(6, k = t.titleTrusted), "text" in t && n(7, b = t.text), "textTrusted" in t && n(8, O = t.textTrusted), "styling" in t && n(47, M = t.styling), "icons" in t && n(48, H = t.icons), "mode" in t && n(9, S = t.mode), "addClass" in t && n(10, A = t.addClass), "addModalClass" in t && n(11, j = t.addModalClass), "addModelessClass" in t && n(12, W = t.addModelessClass), "autoOpen" in t && n(49, z = t.autoOpen), "width" in t && n(50, G = t.width), "minHeight" in t && n(51, K = t.minHeight), "maxTextHeight" in t && n(52, X = t.maxTextHeight), "icon" in t && n(13, Z = t.icon), "animation" in t && n(2, et = t.animation), "animateSpeed" in t && n(14, it = t.animateSpeed), "shadow" in t && n(15, rt = t.shadow), "hide" in t && n(3, at = t.hide), "delay" in t && n(53, lt = t.delay), "mouseReset" in t && n(54, ft = t.mouseReset), "closer" in t && n(16, ht = t.closer), "closerHover" in t && n(17, mt = t.closerHover), "sticker" in t && n(18, yt = t.sticker), "stickerHover" in t && n(19, $t = t.stickerHover), "labels" in t && n(20, kt = t.labels), "remove" in t && n(55, bt = t.remove), "destroy" in t && n(56, Ot = t.destroy), "open" in t && n(59, Zt = t.open), "close" in t && n(23, ee = t.close), "animateIn" in t && n(60, ie = t.animateIn), "animateOut" in t && n(61, re = t.animateOut);
    }, t.$$.update = function () {
      524288 & t.$$.dirty[1] && n(31, ce = "string" == typeof G ? "width: ".concat(G, ";") : ""), 1048576 & t.$$.dirty[1] && n(32, le = "string" == typeof K ? "min-height: ".concat(K, ";") : ""), 2097152 & t.$$.dirty[1] && n(33, ue = "string" == typeof X ? "max-height: ".concat(X, ";") : ""), 32 & t.$$.dirty[0] && n(34, fe = $ instanceof HTMLElement), 128 & t.$$.dirty[0] && n(35, de = b instanceof HTMLElement), 1 & t.$$.dirty[0] | 1792 & t.$$.dirty[3] && Gt !== u && (Gt && (Gt._removeNotice(i), n(30, Ut = !1), Jt(), Kt()), u && (u._addNotice(i), n(102, Jt = u.on("beforeAddOverlay", function () {
        n(30, Ut = !0), Qt("enterModal");
      })), n(103, Kt = u.on("afterRemoveOverlay", function () {
        n(30, Ut = !1), Qt("leaveModal");
      }))), n(101, Gt = u)), 1073748992 & t.$$.dirty[0] && n(36, he = A.match(/\bnonblock\b/) || j.match(/\bnonblock\b/) && Ut || W.match(/\bnonblock\b/) && !Ut), 1 & t.$$.dirty[0] && n(37, pe = u && u.dir1 ? "pnotify-stack-".concat(u.dir1) : ""), 32768 & t.$$.dirty[1] && n(38, me = Array.from(c).filter(function (t) {
        var e = p(t, 2),
          n = e[0];
        e[1];
        return "PrependContainer" === n.position;
      })), 32768 & t.$$.dirty[1] && n(39, ve = Array.from(c).filter(function (t) {
        var e = p(t, 2),
          n = e[0];
        e[1];
        return "PrependContent" === n.position;
      })), 32768 & t.$$.dirty[1] && n(40, ye = Array.from(c).filter(function (t) {
        var e = p(t, 2),
          n = e[0];
        e[1];
        return "AppendContent" === n.position;
      })), 32768 & t.$$.dirty[1] && n(41, ge = Array.from(c).filter(function (t) {
        var e = p(t, 2),
          n = e[0];
        e[1];
        return "AppendContainer" === n.position;
      })), 34 & t.$$.dirty[0] | 8 & t.$$.dirty[1] && fe && f.titleContainer && f.titleContainer.appendChild($), 130 & t.$$.dirty[0] | 16 & t.$$.dirty[1] && de && f.textContainer && f.textContainer.appendChild(b);
    }, [u, f, et, at, y, $, k, b, O, S, A, j, W, Z, it, rt, ht, mt, yt, $t, kt, function (t) {
      return "string" == typeof M ? "".concat(M, "-").concat(t) : t in M ? M[t] : "".concat(M.prefix, "-").concat(t);
    }, function (t) {
      return "string" == typeof H ? "".concat(H, "-icon-").concat(t) : t in H ? H[t] : "".concat(H.prefix, "-icon-").concat(t);
    }, ee, St, Nt, At, Lt, Wt, It, Ut, ce, le, ue, fe, de, he, pe, me, ve, ye, ge, i, r, function (t) {
      if (n(26, At = !0), ft && "closing" === Ct) {
        if (!Pt) return;
        se();
      }
      at && ft && se();
    }, function (t) {
      n(26, At = !1), at && ft && "out" !== Et && -1 !== ["open", "opening"].indexOf(Ct) && ae();
    }, c, M, H, z, G, K, X, lt, ft, bt, Ot, function () {
      return Ct;
    }, function () {
      return Mt;
    }, Zt, ie, re, se, ae, function (t) {
      t ? (se(), Mt = "prevented") : "prevented" === Mt && (Mt = null, "open" === Ct && at && ae());
    }, function () {
      return i.$on.apply(i, arguments);
    }, function () {
      return i.$set.apply(i, arguments);
    }, function (t, e) {
      o(t, e);
    }, function (t) {
      for (var e = 0; e < (arguments.length <= 1 ? 0 : arguments.length - 1); e++) {
        var i = e + 1 < 1 || arguments.length <= e + 1 ? void 0 : arguments[e + 1];
        -1 === Lt[t].indexOf(i) && Lt[t].push(i);
      }
      n(27, Lt);
    }, function (t) {
      for (var e = 0; e < (arguments.length <= 1 ? 0 : arguments.length - 1); e++) {
        var i = e + 1 < 1 || arguments.length <= e + 1 ? void 0 : arguments[e + 1],
          o = Lt[t].indexOf(i);
        -1 !== o && Lt[t].splice(o, 1);
      }
      n(27, Lt);
    }, function (t) {
      for (var e = 0; e < (arguments.length <= 1 ? 0 : arguments.length - 1); e++) {
        var n = e + 1 < 1 || arguments.length <= e + 1 ? void 0 : arguments[e + 1];
        if (-1 === Lt[t].indexOf(n)) return !1;
      }
      return !0;
    }, function () {
      return jt;
    }, function (t) {
      return jt = t;
    }, function () {
      return Rt;
    }, function (t) {
      return Rt = t;
    }, function (t) {
      return Et = t;
    }, function () {
      return St;
    }, function (t) {
      return n(24, St = t);
    }, function () {
      return Nt;
    }, function (t) {
      return n(25, Nt = t);
    }, function (t, e, i) {
      if (Dt && clearTimeout(Dt), Wt !== t) if (t) n(28, Wt = !0), n(29, It = !!e), Vt(), Q().then(function () {
        window.requestAnimationFrame(function () {
          if (Wt) if (e && i) i();else {
            n(29, It = !0);
            var t = function t() {
              f.elem && f.elem.removeEventListener("transitionend", t), Dt && clearTimeout(Dt), It && i && i();
            };
            f.elem && f.elem.addEventListener("transitionend", t), Dt = setTimeout(t, 650);
          }
        });
      });else if (e) n(28, Wt = !1), n(29, It = !1), bt && -1 === ["open", "opening", "closing"].indexOf(Ct) && Xt(), i && i();else {
        var o = function t() {
          f.elem && f.elem.removeEventListener("transitionend", t), Dt && clearTimeout(Dt), It || (n(28, Wt = !1), bt && -1 === ["open", "opening", "closing"].indexOf(Ct) && Xt(), i && i());
        };
        n(29, It = !1), f.elem && f.elem.addEventListener("transitionend", o), f.elem && f.elem.style.opacity, Dt = setTimeout(o, 650);
      }
    }, function () {
      return ee(!1);
    }, function () {
      return n(3, at = !at);
    }, function (t) {
      B[t ? "unshift" : "push"](function () {
        f.iconContainer = t, n(1, f);
      });
    }, function (t) {
      B[t ? "unshift" : "push"](function () {
        f.titleContainer = t, n(1, f);
      });
    }, function (t) {
      B[t ? "unshift" : "push"](function () {
        f.textContainer = t, n(1, f);
      });
    }, function (t) {
      B[t ? "unshift" : "push"](function () {
        f.content = t, n(1, f);
      });
    }, function (t) {
      B[t ? "unshift" : "push"](function () {
        f.container = t, n(1, f);
      });
    }, function (t) {
      B[t ? "unshift" : "push"](function () {
        f.elem = t, n(1, f);
      });
    }];
  }
  window && document.body ? Ut() : document.addEventListener("DOMContentLoaded", Ut);
  var Jt = function (t) {
    !function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && l(t, e);
    }(s, t);
    var e,
      i,
      r = (e = s, i = u(), function () {
        var t,
          n = c(e);
        if (i) {
          var o = c(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);
        return h(this, t);
      });
    function s(t) {
      var e;
      return n(this, s), function (t, e, n, i, o, r) {
        var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [-1],
          a = j;
        W(t);
        var c = e.props || {},
          l = t.$$ = {
            fragment: null,
            ctx: null,
            props: r,
            update: g,
            not_equal: o,
            bound: k(),
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(a ? a.$$.context : []),
            callbacks: k(),
            dirty: s,
            skip_bound: !1
          },
          u = !1;
        if (l.ctx = n ? n(t, c, function (e, n) {
          var i = !(arguments.length <= 2) && arguments.length - 2 ? arguments.length <= 2 ? void 0 : arguments[2] : n;
          return l.ctx && o(l.ctx[e], l.ctx[e] = i) && (!l.skip_bound && l.bound[e] && l.bound[e](i), u && mt(t, e)), n;
        }) : [], l.update(), u = !0, x(l.before_update), l.fragment = !!i && i(l.ctx), e.target) {
          if (e.hydrate) {
            var f = A(e.target);
            l.fragment && l.fragment.l(f), f.forEach(M);
          } else l.fragment && l.fragment.c();
          e.intro && rt(t.$$.fragment), ht(t, e.target, e.anchor), Z();
        }
        W(a);
      }(d(e = r.call(this)), t, Gt, It, w, {
        modules: 46,
        stack: 0,
        refs: 1,
        type: 4,
        title: 5,
        titleTrusted: 6,
        text: 7,
        textTrusted: 8,
        styling: 47,
        icons: 48,
        mode: 9,
        addClass: 10,
        addModalClass: 11,
        addModelessClass: 12,
        autoOpen: 49,
        width: 50,
        minHeight: 51,
        maxTextHeight: 52,
        icon: 13,
        animation: 2,
        animateSpeed: 14,
        shadow: 15,
        hide: 3,
        delay: 53,
        mouseReset: 54,
        closer: 16,
        closerHover: 17,
        sticker: 18,
        stickerHover: 19,
        labels: 20,
        remove: 55,
        destroy: 56,
        getState: 57,
        getTimer: 58,
        getStyle: 21,
        getIcon: 22,
        open: 59,
        close: 23,
        animateIn: 60,
        animateOut: 61,
        cancelClose: 62,
        queueClose: 63,
        _preventTimerClose: 64,
        on: 65,
        update: 66,
        fire: 67,
        addModuleClass: 68,
        removeModuleClass: 69,
        hasModuleClass: 70,
        getModuleHandled: 71,
        setModuleHandled: 72,
        getModuleOpen: 73,
        setModuleOpen: 74,
        setAnimating: 75,
        getAnimatingClass: 76,
        setAnimatingClass: 77,
        _getMoveClass: 78,
        _setMoveClass: 79,
        _setMasking: 80
      }, [-1, -1, -1, -1]), e;
    }
    return o(s, [{
      key: "modules",
      get: function () {
        return this.$$.ctx[46];
      },
      set: function (t) {
        this.$set({
          modules: t
        }), Z();
      }
    }, {
      key: "stack",
      get: function () {
        return this.$$.ctx[0];
      },
      set: function (t) {
        this.$set({
          stack: t
        }), Z();
      }
    }, {
      key: "refs",
      get: function () {
        return this.$$.ctx[1];
      }
    }, {
      key: "type",
      get: function () {
        return this.$$.ctx[4];
      },
      set: function (t) {
        this.$set({
          type: t
        }), Z();
      }
    }, {
      key: "title",
      get: function () {
        return this.$$.ctx[5];
      },
      set: function (t) {
        this.$set({
          title: t
        }), Z();
      }
    }, {
      key: "titleTrusted",
      get: function () {
        return this.$$.ctx[6];
      },
      set: function (t) {
        this.$set({
          titleTrusted: t
        }), Z();
      }
    }, {
      key: "text",
      get: function () {
        return this.$$.ctx[7];
      },
      set: function (t) {
        this.$set({
          text: t
        }), Z();
      }
    }, {
      key: "textTrusted",
      get: function () {
        return this.$$.ctx[8];
      },
      set: function (t) {
        this.$set({
          textTrusted: t
        }), Z();
      }
    }, {
      key: "styling",
      get: function () {
        return this.$$.ctx[47];
      },
      set: function (t) {
        this.$set({
          styling: t
        }), Z();
      }
    }, {
      key: "icons",
      get: function () {
        return this.$$.ctx[48];
      },
      set: function (t) {
        this.$set({
          icons: t
        }), Z();
      }
    }, {
      key: "mode",
      get: function () {
        return this.$$.ctx[9];
      },
      set: function (t) {
        this.$set({
          mode: t
        }), Z();
      }
    }, {
      key: "addClass",
      get: function () {
        return this.$$.ctx[10];
      },
      set: function (t) {
        this.$set({
          addClass: t
        }), Z();
      }
    }, {
      key: "addModalClass",
      get: function () {
        return this.$$.ctx[11];
      },
      set: function (t) {
        this.$set({
          addModalClass: t
        }), Z();
      }
    }, {
      key: "addModelessClass",
      get: function () {
        return this.$$.ctx[12];
      },
      set: function (t) {
        this.$set({
          addModelessClass: t
        }), Z();
      }
    }, {
      key: "autoOpen",
      get: function () {
        return this.$$.ctx[49];
      },
      set: function (t) {
        this.$set({
          autoOpen: t
        }), Z();
      }
    }, {
      key: "width",
      get: function () {
        return this.$$.ctx[50];
      },
      set: function (t) {
        this.$set({
          width: t
        }), Z();
      }
    }, {
      key: "minHeight",
      get: function () {
        return this.$$.ctx[51];
      },
      set: function (t) {
        this.$set({
          minHeight: t
        }), Z();
      }
    }, {
      key: "maxTextHeight",
      get: function () {
        return this.$$.ctx[52];
      },
      set: function (t) {
        this.$set({
          maxTextHeight: t
        }), Z();
      }
    }, {
      key: "icon",
      get: function () {
        return this.$$.ctx[13];
      },
      set: function (t) {
        this.$set({
          icon: t
        }), Z();
      }
    }, {
      key: "animation",
      get: function () {
        return this.$$.ctx[2];
      },
      set: function (t) {
        this.$set({
          animation: t
        }), Z();
      }
    }, {
      key: "animateSpeed",
      get: function () {
        return this.$$.ctx[14];
      },
      set: function (t) {
        this.$set({
          animateSpeed: t
        }), Z();
      }
    }, {
      key: "shadow",
      get: function () {
        return this.$$.ctx[15];
      },
      set: function (t) {
        this.$set({
          shadow: t
        }), Z();
      }
    }, {
      key: "hide",
      get: function () {
        return this.$$.ctx[3];
      },
      set: function (t) {
        this.$set({
          hide: t
        }), Z();
      }
    }, {
      key: "delay",
      get: function () {
        return this.$$.ctx[53];
      },
      set: function (t) {
        this.$set({
          delay: t
        }), Z();
      }
    }, {
      key: "mouseReset",
      get: function () {
        return this.$$.ctx[54];
      },
      set: function (t) {
        this.$set({
          mouseReset: t
        }), Z();
      }
    }, {
      key: "closer",
      get: function () {
        return this.$$.ctx[16];
      },
      set: function (t) {
        this.$set({
          closer: t
        }), Z();
      }
    }, {
      key: "closerHover",
      get: function () {
        return this.$$.ctx[17];
      },
      set: function (t) {
        this.$set({
          closerHover: t
        }), Z();
      }
    }, {
      key: "sticker",
      get: function () {
        return this.$$.ctx[18];
      },
      set: function (t) {
        this.$set({
          sticker: t
        }), Z();
      }
    }, {
      key: "stickerHover",
      get: function () {
        return this.$$.ctx[19];
      },
      set: function (t) {
        this.$set({
          stickerHover: t
        }), Z();
      }
    }, {
      key: "labels",
      get: function () {
        return this.$$.ctx[20];
      },
      set: function (t) {
        this.$set({
          labels: t
        }), Z();
      }
    }, {
      key: "remove",
      get: function () {
        return this.$$.ctx[55];
      },
      set: function (t) {
        this.$set({
          remove: t
        }), Z();
      }
    }, {
      key: "destroy",
      get: function () {
        return this.$$.ctx[56];
      },
      set: function (t) {
        this.$set({
          destroy: t
        }), Z();
      }
    }, {
      key: "getState",
      get: function () {
        return this.$$.ctx[57];
      }
    }, {
      key: "getTimer",
      get: function () {
        return this.$$.ctx[58];
      }
    }, {
      key: "getStyle",
      get: function () {
        return this.$$.ctx[21];
      }
    }, {
      key: "getIcon",
      get: function () {
        return this.$$.ctx[22];
      }
    }, {
      key: "open",
      get: function () {
        return this.$$.ctx[59];
      },
      set: function (t) {
        this.$set({
          open: t
        }), Z();
      }
    }, {
      key: "close",
      get: function () {
        return this.$$.ctx[23];
      },
      set: function (t) {
        this.$set({
          close: t
        }), Z();
      }
    }, {
      key: "animateIn",
      get: function () {
        return this.$$.ctx[60];
      },
      set: function (t) {
        this.$set({
          animateIn: t
        }), Z();
      }
    }, {
      key: "animateOut",
      get: function () {
        return this.$$.ctx[61];
      },
      set: function (t) {
        this.$set({
          animateOut: t
        }), Z();
      }
    }, {
      key: "cancelClose",
      get: function () {
        return this.$$.ctx[62];
      }
    }, {
      key: "queueClose",
      get: function () {
        return this.$$.ctx[63];
      }
    }, {
      key: "_preventTimerClose",
      get: function () {
        return this.$$.ctx[64];
      }
    }, {
      key: "on",
      get: function () {
        return this.$$.ctx[65];
      }
    }, {
      key: "update",
      get: function () {
        return this.$$.ctx[66];
      }
    }, {
      key: "fire",
      get: function () {
        return this.$$.ctx[67];
      }
    }, {
      key: "addModuleClass",
      get: function () {
        return this.$$.ctx[68];
      }
    }, {
      key: "removeModuleClass",
      get: function () {
        return this.$$.ctx[69];
      }
    }, {
      key: "hasModuleClass",
      get: function () {
        return this.$$.ctx[70];
      }
    }, {
      key: "getModuleHandled",
      get: function () {
        return this.$$.ctx[71];
      }
    }, {
      key: "setModuleHandled",
      get: function () {
        return this.$$.ctx[72];
      }
    }, {
      key: "getModuleOpen",
      get: function () {
        return this.$$.ctx[73];
      }
    }, {
      key: "setModuleOpen",
      get: function () {
        return this.$$.ctx[74];
      }
    }, {
      key: "setAnimating",
      get: function () {
        return this.$$.ctx[75];
      }
    }, {
      key: "getAnimatingClass",
      get: function () {
        return this.$$.ctx[76];
      }
    }, {
      key: "setAnimatingClass",
      get: function () {
        return this.$$.ctx[77];
      }
    }, {
      key: "_getMoveClass",
      get: function () {
        return this.$$.ctx[78];
      }
    }, {
      key: "_setMoveClass",
      get: function () {
        return this.$$.ctx[79];
      }
    }, {
      key: "_setMasking",
      get: function () {
        return this.$$.ctx[80];
      }
    }]), s;
  }(vt);
  t.Stack = yt, t.alert = function (t) {
    return gt(Dt(t));
  }, t.default = Jt, t.defaultModules = Bt, t.defaultStack = qt, t.defaults = zt, t.error = function (t) {
    return gt(Dt(t, "error"));
  }, t.info = function (t) {
    return gt(Dt(t, "info"));
  }, t.notice = function (t) {
    return gt(Dt(t, "notice"));
  }, t.success = function (t) {
    return gt(Dt(t, "success"));
  }, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
!function (t, n) {
  "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((t = "undefined" != typeof globalThis ? globalThis : t || self).PNotifyDesktop = {});
}(this, function (t) {
  "use strict";

  function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(t);
  }
  function e(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function o(t, n) {
    for (var e = 0; e < n.length; e++) {
      var o = n[e];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }
  function i(t) {
    return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }
  function r(t, n) {
    return (r = Object.setPrototypeOf || function (t, n) {
      return t.__proto__ = n, t;
    })(t, n);
  }
  function A(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function a(t, n) {
    return !n || "object" != typeof n && "function" != typeof n ? A(t) : n;
  }
  function c(t) {
    var n = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();
    return function () {
      var e,
        o = i(t);
      if (n) {
        var r = i(this).constructor;
        e = Reflect.construct(o, arguments, r);
      } else e = o.apply(this, arguments);
      return a(this, e);
    };
  }
  function u(t) {
    return function (t) {
      if (Array.isArray(t)) return l(t);
    }(t) || function (t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
    }(t) || function (t, n) {
      if (!t) return;
      if ("string" == typeof t) return l(t, n);
      var e = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === e && t.constructor && (e = t.constructor.name);
      if ("Map" === e || "Set" === e) return Array.from(t);
      if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return l(t, n);
    }(t) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function l(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, o = new Array(n); e < n; e++) o[e] = t[e];
    return o;
  }
  function f() {}
  function s(t) {
    return t();
  }
  function d() {
    return Object.create(null);
  }
  function g(t) {
    t.forEach(s);
  }
  function p(t) {
    return "function" == typeof t;
  }
  function w(t, e) {
    return t != t ? e == e : t !== e || t && "object" === n(t) || "function" == typeof t;
  }
  function y(t) {
    t.parentNode.removeChild(t);
  }
  function b(t) {
    return Array.from(t.childNodes);
  }
  var h;
  function m(t) {
    h = t;
  }
  var v = [],
    C = [],
    E = [],
    k = [],
    B = Promise.resolve(),
    S = !1;
  function M(t) {
    E.push(t);
  }
  var R = !1,
    O = new Set();
  function T() {
    if (!R) {
      R = !0;
      do {
        for (var t = 0; t < v.length; t += 1) {
          var n = v[t];
          m(n), J(n.$$);
        }
        for (m(null), v.length = 0; C.length;) C.pop()();
        for (var e = 0; e < E.length; e += 1) {
          var o = E[e];
          O.has(o) || (O.add(o), o());
        }
        E.length = 0;
      } while (v.length);
      for (; k.length;) k.pop()();
      S = !1, R = !1, O.clear();
    }
  }
  function J(t) {
    if (null !== t.fragment) {
      t.update(), g(t.before_update);
      var n = t.dirty;
      t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(M);
    }
  }
  var Q = new Set();
  function L(t, n) {
    t && t.i && (Q.delete(t), t.i(n));
  }
  function U(t, n, e) {
    var o = t.$$,
      i = o.fragment,
      r = o.on_mount,
      A = o.on_destroy,
      a = o.after_update;
    i && i.m(n, e), M(function () {
      var n = r.map(s).filter(p);
      A ? A.push.apply(A, u(n)) : g(n), t.$$.on_mount = [];
    }), a.forEach(M);
  }
  function x(t, n) {
    -1 === t.$$.dirty[0] && (v.push(t), S || (S = !0, B.then(T)), t.$$.dirty.fill(0)), t.$$.dirty[n / 31 | 0] |= 1 << n % 31;
  }
  var j = function () {
      function t() {
        e(this, t);
      }
      var n, i, r;
      return n = t, (i = [{
        key: "$destroy",
        value: function () {
          var t, n;
          t = 1, null !== (n = this.$$).fragment && (g(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []), this.$destroy = f;
        }
      }, {
        key: "$on",
        value: function (t, n) {
          var e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
          return e.push(n), function () {
            var t = e.indexOf(n);
            -1 !== t && e.splice(t, 1);
          };
        }
      }, {
        key: "$set",
        value: function (t) {
          var n;
          this.$$set && (n = t, 0 !== Object.keys(n).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
        }
      }]) && o(n.prototype, i), r && o(n, r), t;
    }(),
    F = {
      fallback: !0,
      icon: null,
      tag: null,
      title: null,
      text: null,
      options: {}
    };
  function N() {
    void 0 !== I && "requestPermission" in I ? I.requestPermission() : "webkitNotifications" in window && window.webkitNotifications.requestPermission();
  }
  var I = window.Notification,
    q = function (t, n, e, o) {
      return (q = "Notification" in window ? function (t, n, e, o) {
        var i = new I(t, n);
        return "NotificationEvent" in window ? (i.addEventListener("notificationclick", e), i.addEventListener("close", o)) : "addEventListener" in i ? (i.addEventListener("click", e), i.addEventListener("close", o)) : (i.onclick = e, i.onclose = o), i;
      } : "mozNotification" in navigator ? function (t, n, e, o) {
        var i = navigator.mozNotification.createNotification(t, n.body, n.icon).show();
        return i.onclick = e, i.onclose = o, i;
      } : "webkitNotifications" in window ? function (t, n, e, o) {
        var i = window.webkitNotifications.createNotification(n.icon, t, n.body);
        return i.onclick = e, i.onclose = o, i;
      } : function (t, n, e, o) {
        return null;
      })(t, n, e, o);
    };
  function H() {
    return void 0 !== I && "permission" in I ? "granted" === I.permission : "webkitNotifications" in window && 0 == window.webkitNotifications.checkPermission();
  }
  var P = H();
  function Y(t, n, e) {
    var o,
      i,
      r,
      A = n.self,
      a = void 0 === A ? null : A,
      c = n.fallback,
      u = void 0 === c ? F.fallback : c,
      l = n.icon,
      f = void 0 === l ? F.icon : l,
      s = n.tag,
      d = void 0 === s ? F.tag : s,
      g = n.title,
      p = void 0 === g ? F.title : g,
      w = n.text,
      y = void 0 === w ? F.text : w,
      b = n.options,
      h = void 0 === b ? F.options : b,
      m = "none";
    function v() {
      if (null === f) switch (a.type) {
        case "error":
          i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gQJATQg7e6HvQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABr0lEQVRYw8WXu0oDQRSGv7hRSFYrLTTWKihaqUgUJO+gphBLL1jYpPSCVcAggpWthYhC7Ows9An0IbSPkMRCw8ZmFuI6yczs9cAPuzNz5v92brtrESxGARtokkCcAg2hk7jNl4G2R/m4zFPAiwTgWdRFHnmJuaulOAAaPQDqUZvv9DB3tR0lwIcGwHtU5uca5q4qYZvngJbHpAZ8CtU8dS1gLEyAisegBGTFKWiL65KnzVlY5uOSId6VtNuTtMupOu/TAHiQlNmSskHNXCOAGWBeUp7VhFoApoMAXAOWJoCszBJ9+ALY6vL0JiPgjsKmKUAaOOoBZwIAcNxlJLsCrAOTIQJMAWu62y4LOIqT7lGS96TIcYCMDkBZ46h1gB+PHI28ssq8X/G6DaqG8Piz2DrjVjGXbtSBy46F5QAHwJAizwZugKKscs7gSaqS/KpB/qxsFxwafhf6Odb/eblJi8BGwJdW26BtURxQpMU83hmaDQsNiPtvYMSwj3tgAqDgYzU7wJdHjo9+CgBvEW47lV5Tgj5DMtG0xIfESkIAF+522gdWxTzGEX3i9+6KpOMXF5UBt0NKJCAAAAAASUVORK5CYII=";
          break;
        case "success":
          i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gQJATQPRj+65AAAAdBJREFUWMPtlzsvRFEQx3+7HmEjoiYKolVJJDRqnS8ggvVIVEQhCIUsEYJGCEH2E4h4FPREaLTbEo1IEJXHrmY2GTf33nPuY7ud5OTenTMz//89Z86ZWShLWf5LB3AOfACFiOMF2AkC3qOc88BXxFEAxlX8ftGdaNCEen8H6oFHYBR4FocwkpTngzzHgF01fwL0aYcp9fVtMW/rsMcWXWijK1Hexgye9smRT6CxaHgjytMYwccNSXqoja9FeVbiZS+OVaeDiUBLAPAJA/i2m5MXgRSQk7llC/DBMOBeBGqAe0eAjQhfvurH3EmgQk6EW6CVEHt+ZFo6J4EU8OoTcF35jhnAl2wSx20LFgyB1yyOWtY2c72ScMAAkPeZy6g4zUBdGAIAcyEq4Z7y7xbdTFgCACMBwPVJqVDHeNqvaplkH5i0sNuUwmaNkQxww20ZSOy7gFvX7SAk0i76jPQQlJoAwAEwq35ngfmwVatSdUMArZZ+K9JQ1Bp6iGqgSt7f/AIOqSzujLEn6AV+JG6zm4HuCZ+AJuAbWAQu5aIJu7JDck0ngDugC/j1c2qPqR13jpxuvWyS8liY/kQcean/lX6ACQ99DdAQYe+Lf0zylMUgf7qDKgzv284QAAAAAElFTkSuQmCC";
          break;
        case "info":
          i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gQJATQ09zRTwAAAAdxJREFUWMPtl88rRFEUxz8zBolRCgsrpOym8TMSO2WplLKwUrKi/B0W7JSFmhVLNlhSlLKx8CtRGpEsJpofpZk3Nkc9b968e++8mdlw6vTeu/edc773nl/3wl+ngOH/zUAf0AN0AmEgB7wCD8AtcFMJoM3ADpAHLHk62RIwL8B0uQwHgXVRnDfkS2DSj/EW4K0Ew05eLMV4O/CuUJwEUvJUgdgwMd4IpBUKl13kVG6aL+ZjJ20DDQqQXy5jKYVMDBhVrb5f069LLrKfGnInqh040HRTvsTAHgei9oGQ7X0YaNNUNCdFKChgQvKtQ1vAkNvEahlSToez9oXad2BCA30ceHZxRxMQMShuvZLmv+hOA32/h+KUwS7MugVhqwb6Go+5nEEwht0ABDUEzyXdFsrQYwqMJjTbdxio9Qkg6QbgvkpnkLw0uQIAZ1UCYNkXawdw4qPCmVBcuADAMZCpAoCVYr3AKtYyHZSWauakjMx50TWwrzJw6lFARjQOt3se8jM6W9TloSCqIb9bRHbN5Fg+KkEZcow/Ak+KFBsD6h3jR8CUabAMlqn7xfxEbAdwWKLhhO3sGPCbOsNSvSyF0Z/5TaCuEleziLhmAOiWG1NWrmZXwIVU1A/+SZO+AcgLC4wt0zD3AAAAAElFTkSuQmCC";
          break;
        case "notice":
        default:
          i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gQJATM4scOJLAAAAcxJREFUWMPtljtLA0EQx3+J0QRfnYqCiCA+MERBrIwgFtoFbMTOR61i5QcQBdEihZWNoEWwsNAvkMJeBLHRQtHC0iIP4utOmw2cx97d7l2SRgcGbufmv/Pf2dmdhb8uIR+YJqAPaBff30AeeAHuxLgqMgRkgS/AAEybGuLfEdBcycCTwKVYmY5mgO6gwdd8BLaqAST9Bs8EDG7VTd3gex4TbgEjwKjQOHDugZlRDb7sMZEJpCS4bYVMJOygsG1cB+wqHN0Gib1RYXFpLwL74nx7Sb3EFlXATQNjTgRagA3FbZIRiCliT5wITGgUaRACA0CPjMC4xtUcDUAgDAzLCCQ0MhALQCAE9MoIdGkQCJIBgE4ZgWiNMvDL10qgUMMMFGQEnjQmkLXbVg38s8y4qtFcTCAnHiJ5oKiJnSoHjVgIXAmHkGIl5yy+YcWruIy9dvqpupIDCfZWEXvh1gsWFVfxIbG9a3RbRwJnYiuqJYfAqxsBgBWFiQyJzfTAlIB1uzEicbwBFoBTl8lSwINoSuXKjrv4F4FBh61zlKUKvgn7/e5ZEngMEDgLdFSieHaAT42LpgTMVbqC24B54Bi4twV9E6cnDcw6PFj+RSo/l6rlSlldhx4AAAAASUVORK5CYII=";
      } else i = !1 === f ? null : f;
      r && null === d || (r = null === d ? "PNotify-".concat(Math.round(1e6 * Math.random())) : d);
      var t = {
        body: y || a.text,
        tag: r
      };
      a.hide || (t.requireInteraction = !0), null !== i && (t.icon = i), Object.apply(t, h), !("close" in (o = q(p || a.title, t, function () {
        a.fire && a.fire("click", {
          target: o
        });
      }, function () {
        a.close && a.close();
      }))) && "cancel" in o && (o.close = function () {
        o.cancel();
      });
    }
    return a.on("pnotify:beforeOpen", function () {
      P ? o && "show" in o && (a.setModuleOpen(!0), o.show()) : N();
    }), a.on("pnotify:beforeClose", function () {
      P && o && "close" in o && (o.close(), a.setModuleOpen(!1));
    }), (P = H()) ? (a.addModuleClass("elem", "pnotify-desktop-hide"), a.animation = "none", v()) : u || (a.autoOpen = !1), t.$$set = function (t) {
      "self" in t && e(0, a = t.self), "fallback" in t && e(1, u = t.fallback), "icon" in t && e(2, f = t.icon), "tag" in t && e(3, d = t.tag), "title" in t && e(4, p = t.title), "text" in t && e(5, y = t.text), "options" in t && e(6, h = t.options);
    }, t.$$.update = function () {
      257 & t.$$.dirty && ("none" !== a.animation && e(8, m = a.animation), "" !== a.getAnimatingClass() && P && a.setAnimatingClass(""), !P && a.hasModuleClass("elem", "pnotify-desktop-hide") ? (a.removeModuleClass("elem", "pnotify-desktop-hide"), e(0, a.animation = m, a)) : P && !a.hasModuleClass("elem", "pnotify-desktop-hide") && (a.addModuleClass("elem", "pnotify-desktop-hide"), e(0, a.animation = "none", a), v())), 1 & t.$$.dirty && a.setModuleHandled(P);
    }, [a, u, f, d, p, y, h];
  }
  var V = function (t) {
    !function (t, n) {
      if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), n && r(t, n);
    }(o, t);
    var n = c(o);
    function o(t) {
      var i;
      return e(this, o), function (t, n, e, o, i, r) {
        var A = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [-1],
          a = h;
        m(t);
        var c = n.props || {},
          u = t.$$ = {
            fragment: null,
            ctx: null,
            props: r,
            update: f,
            not_equal: i,
            bound: d(),
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(a ? a.$$.context : []),
            callbacks: d(),
            dirty: A,
            skip_bound: !1
          },
          l = !1;
        if (u.ctx = e ? e(t, c, function (n, e) {
          var o = !(arguments.length <= 2) && arguments.length - 2 ? arguments.length <= 2 ? void 0 : arguments[2] : e;
          return u.ctx && i(u.ctx[n], u.ctx[n] = o) && (!u.skip_bound && u.bound[n] && u.bound[n](o), l && x(t, n)), e;
        }) : [], u.update(), l = !0, g(u.before_update), u.fragment = !!o && o(u.ctx), n.target) {
          if (n.hydrate) {
            var s = b(n.target);
            u.fragment && u.fragment.l(s), s.forEach(y);
          } else u.fragment && u.fragment.c();
          n.intro && L(t.$$.fragment), U(t, n.target, n.anchor), T();
        }
        m(a);
      }(A(i = n.call(this)), t, Y, null, w, {
        self: 0,
        fallback: 1,
        icon: 2,
        tag: 3,
        title: 4,
        text: 5,
        options: 6
      }), i;
    }
    return o;
  }(j);
  t.default = V, t.defaults = F, t.permission = N, t.position = "PrependContainer", Object.defineProperty(t, "__esModule", {
    value: !0
  });
});

/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Sortable = factory());
})(this, function () {
  'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var version = "1.15.0";
  function userAgent(pattern) {
    if (typeof window !== 'undefined' && window.navigator) {
      return !! /*@__PURE__*/navigator.userAgent.match(pattern);
    }
  }
  var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
  var Edge = userAgent(/Edge/i);
  var FireFox = userAgent(/firefox/i);
  var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
  var IOS = userAgent(/iP(ad|od|hone)/i);
  var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
  var captureMode = {
    capture: false,
    passive: false
  };
  function on(el, event, fn) {
    el.addEventListener(event, fn, !IE11OrLess && captureMode);
  }
  function off(el, event, fn) {
    el.removeEventListener(event, fn, !IE11OrLess && captureMode);
  }
  function matches( /**HTMLElement*/
  el, /**String*/
  selector) {
    if (!selector) return;
    selector[0] === '>' && (selector = selector.substring(1));
    if (el) {
      try {
        if (el.matches) {
          return el.matches(selector);
        } else if (el.msMatchesSelector) {
          return el.msMatchesSelector(selector);
        } else if (el.webkitMatchesSelector) {
          return el.webkitMatchesSelector(selector);
        }
      } catch (_) {
        return false;
      }
    }
    return false;
  }
  function getParentOrHost(el) {
    return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
  }
  function closest( /**HTMLElement*/
  el, /**String*/
  selector, /**HTMLElement*/
  ctx, includeCTX) {
    if (el) {
      ctx = ctx || document;
      do {
        if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
          return el;
        }
        if (el === ctx) break;
        /* jshint boss:true */
      } while (el = getParentOrHost(el));
    }
    return null;
  }
  var R_SPACE = /\s+/g;
  function toggleClass(el, name, state) {
    if (el && name) {
      if (el.classList) {
        el.classList[state ? 'add' : 'remove'](name);
      } else {
        var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
        el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
      }
    }
  }
  function css(el, prop, val) {
    var style = el && el.style;
    if (style) {
      if (val === void 0) {
        if (document.defaultView && document.defaultView.getComputedStyle) {
          val = document.defaultView.getComputedStyle(el, '');
        } else if (el.currentStyle) {
          val = el.currentStyle;
        }
        return prop === void 0 ? val : val[prop];
      } else {
        if (!(prop in style) && prop.indexOf('webkit') === -1) {
          prop = '-webkit-' + prop;
        }
        style[prop] = val + (typeof val === 'string' ? '' : 'px');
      }
    }
  }
  function matrix(el, selfOnly) {
    var appliedTransforms = '';
    if (typeof el === 'string') {
      appliedTransforms = el;
    } else {
      do {
        var transform = css(el, 'transform');
        if (transform && transform !== 'none') {
          appliedTransforms = transform + ' ' + appliedTransforms;
        }
        /* jshint boss:true */
      } while (!selfOnly && (el = el.parentNode));
    }
    var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    /*jshint -W056 */

    return matrixFn && new matrixFn(appliedTransforms);
  }
  function find(ctx, tagName, iterator) {
    if (ctx) {
      var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;
      if (iterator) {
        for (; i < n; i++) {
          iterator(list[i], i);
        }
      }
      return list;
    }
    return [];
  }
  function getWindowScrollingElement() {
    var scrollingElement = document.scrollingElement;
    if (scrollingElement) {
      return scrollingElement;
    } else {
      return document.documentElement;
    }
  }
  /**
   * Returns the "bounding client rect" of given element
   * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
   * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
   * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
   * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
   * @param  {[HTMLElement]} container              The parent the element will be placed in
   * @return {Object}                               The boundingClientRect of el, with specified adjustments
   */

  function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
    if (!el.getBoundingClientRect && el !== window) return;
    var elRect, top, left, bottom, right, height, width;
    if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
      elRect = el.getBoundingClientRect();
      top = elRect.top;
      left = elRect.left;
      bottom = elRect.bottom;
      right = elRect.right;
      height = elRect.height;
      width = elRect.width;
    } else {
      top = 0;
      left = 0;
      bottom = window.innerHeight;
      right = window.innerWidth;
      height = window.innerHeight;
      width = window.innerWidth;
    }
    if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
      // Adjust for translate()
      container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
      // Not needed on <= IE11

      if (!IE11OrLess) {
        do {
          if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
            var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

            top -= containerRect.top + parseInt(css(container, 'border-top-width'));
            left -= containerRect.left + parseInt(css(container, 'border-left-width'));
            bottom = top + elRect.height;
            right = left + elRect.width;
            break;
          }
          /* jshint boss:true */
        } while (container = container.parentNode);
      }
    }
    if (undoScale && el !== window) {
      // Adjust for scale()
      var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;
      if (elMatrix) {
        top /= scaleY;
        left /= scaleX;
        width /= scaleX;
        height /= scaleY;
        bottom = top + height;
        right = left + width;
      }
    }
    return {
      top: top,
      left: left,
      bottom: bottom,
      right: right,
      width: width,
      height: height
    };
  }
  /**
   * Checks if a side of an element is scrolled past a side of its parents
   * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
   * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
   * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
   * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
   */

  function isScrolledPast(el, elSide, parentSide) {
    var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
    /* jshint boss:true */

    while (parent) {
      var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;
      if (parentSide === 'top' || parentSide === 'left') {
        visible = elSideVal >= parentSideVal;
      } else {
        visible = elSideVal <= parentSideVal;
      }
      if (!visible) return parent;
      if (parent === getWindowScrollingElement()) break;
      parent = getParentAutoScrollElement(parent, false);
    }
    return false;
  }
  /**
   * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
   * and non-draggable elements
   * @param  {HTMLElement} el       The parent element
   * @param  {Number} childNum      The index of the child
   * @param  {Object} options       Parent Sortable's options
   * @return {HTMLElement}          The child at index childNum, or null if not found
   */

  function getChild(el, childNum, options, includeDragEl) {
    var currentChild = 0,
      i = 0,
      children = el.children;
    while (i < children.length) {
      if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
        if (currentChild === childNum) {
          return children[i];
        }
        currentChild++;
      }
      i++;
    }
    return null;
  }
  /**
   * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
   * @param  {HTMLElement} el       Parent element
   * @param  {selector} selector    Any other elements that should be ignored
   * @return {HTMLElement}          The last child, ignoring ghostEl
   */

  function lastChild(el, selector) {
    var last = el.lastElementChild;
    while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
      last = last.previousElementSibling;
    }
    return last || null;
  }
  /**
   * Returns the index of an element within its parent for a selected set of
   * elements
   * @param  {HTMLElement} el
   * @param  {selector} selector
   * @return {number}
   */

  function index(el, selector) {
    var index = 0;
    if (!el || !el.parentNode) {
      return -1;
    }
    /* jshint boss:true */

    while (el = el.previousElementSibling) {
      if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
        index++;
      }
    }
    return index;
  }
  /**
   * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
   * The value is returned in real pixels.
   * @param  {HTMLElement} el
   * @return {Array}             Offsets in the format of [left, top]
   */

  function getRelativeScrollOffset(el) {
    var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();
    if (el) {
      do {
        var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
        offsetLeft += el.scrollLeft * scaleX;
        offsetTop += el.scrollTop * scaleY;
      } while (el !== winScroller && (el = el.parentNode));
    }
    return [offsetLeft, offsetTop];
  }
  /**
   * Returns the index of the object within the given array
   * @param  {Array} arr   Array that may or may not hold the object
   * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
   * @return {Number}      The index of the object in the array, or -1
   */

  function indexOfObject(arr, obj) {
    for (var i in arr) {
      if (!arr.hasOwnProperty(i)) continue;
      for (var key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
      }
    }
    return -1;
  }
  function getParentAutoScrollElement(el, includeSelf) {
    // skip to window
    if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
    var elem = el;
    var gotSelf = false;
    do {
      // we don't need to get elem css if it isn't even overflowing in the first place (performance)
      if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
        var elemCSS = css(elem);
        if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
          if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
          if (gotSelf || includeSelf) return elem;
          gotSelf = true;
        }
      }
      /* jshint boss:true */
    } while (elem = elem.parentNode);
    return getWindowScrollingElement();
  }
  function extend(dst, src) {
    if (dst && src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dst[key] = src[key];
        }
      }
    }
    return dst;
  }
  function isRectEqual(rect1, rect2) {
    return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
  }
  var _throttleTimeout;
  function throttle(callback, ms) {
    return function () {
      if (!_throttleTimeout) {
        var args = arguments,
          _this = this;
        if (args.length === 1) {
          callback.call(_this, args[0]);
        } else {
          callback.apply(_this, args);
        }
        _throttleTimeout = setTimeout(function () {
          _throttleTimeout = void 0;
        }, ms);
      }
    };
  }
  function cancelThrottle() {
    clearTimeout(_throttleTimeout);
    _throttleTimeout = void 0;
  }
  function scrollBy(el, x, y) {
    el.scrollLeft += x;
    el.scrollTop += y;
  }
  function clone(el) {
    var Polymer = window.Polymer;
    var $ = window.jQuery || window.Zepto;
    if (Polymer && Polymer.dom) {
      return Polymer.dom(el).cloneNode(true);
    } else if ($) {
      return $(el).clone(true)[0];
    } else {
      return el.cloneNode(true);
    }
  }
  function setRect(el, rect) {
    css(el, 'position', 'absolute');
    css(el, 'top', rect.top);
    css(el, 'left', rect.left);
    css(el, 'width', rect.width);
    css(el, 'height', rect.height);
  }
  function unsetRect(el) {
    css(el, 'position', '');
    css(el, 'top', '');
    css(el, 'left', '');
    css(el, 'width', '');
    css(el, 'height', '');
  }
  var expando = 'Sortable' + new Date().getTime();
  function AnimationStateManager() {
    var animationStates = [],
      animationCallbackId;
    return {
      captureAnimationState: function captureAnimationState() {
        animationStates = [];
        if (!this.options.animation) return;
        var children = [].slice.call(this.el.children);
        children.forEach(function (child) {
          if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
          animationStates.push({
            target: child,
            rect: getRect(child)
          });
          var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation

          if (child.thisAnimationDuration) {
            var childMatrix = matrix(child, true);
            if (childMatrix) {
              fromRect.top -= childMatrix.f;
              fromRect.left -= childMatrix.e;
            }
          }
          child.fromRect = fromRect;
        });
      },
      addAnimationState: function addAnimationState(state) {
        animationStates.push(state);
      },
      removeAnimationState: function removeAnimationState(target) {
        animationStates.splice(indexOfObject(animationStates, {
          target: target
        }), 1);
      },
      animateAll: function animateAll(callback) {
        var _this = this;
        if (!this.options.animation) {
          clearTimeout(animationCallbackId);
          if (typeof callback === 'function') callback();
          return;
        }
        var animating = false,
          animationTime = 0;
        animationStates.forEach(function (state) {
          var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);
          if (targetMatrix) {
            // Compensate for current animation
            toRect.top -= targetMatrix.f;
            toRect.left -= targetMatrix.e;
          }
          target.toRect = toRect;
          if (target.thisAnimationDuration) {
            // Could also check if animatingRect is between fromRect and toRect
            if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) &&
            // Make sure animatingRect is on line between toRect & fromRect
            (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
              // If returning to same place as started from animation and on same axis
              time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
            }
          } // if fromRect != toRect: animate

          if (!isRectEqual(toRect, fromRect)) {
            target.prevFromRect = fromRect;
            target.prevToRect = toRect;
            if (!time) {
              time = _this.options.animation;
            }
            _this.animate(target, animatingRect, toRect, time);
          }
          if (time) {
            animating = true;
            animationTime = Math.max(animationTime, time);
            clearTimeout(target.animationResetTimer);
            target.animationResetTimer = setTimeout(function () {
              target.animationTime = 0;
              target.prevFromRect = null;
              target.fromRect = null;
              target.prevToRect = null;
              target.thisAnimationDuration = null;
            }, time);
            target.thisAnimationDuration = time;
          }
        });
        clearTimeout(animationCallbackId);
        if (!animating) {
          if (typeof callback === 'function') callback();
        } else {
          animationCallbackId = setTimeout(function () {
            if (typeof callback === 'function') callback();
          }, animationTime);
        }
        animationStates = [];
      },
      animate: function animate(target, currentRect, toRect, duration) {
        if (duration) {
          css(target, 'transition', '');
          css(target, 'transform', '');
          var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
          target.animatingX = !!translateX;
          target.animatingY = !!translateY;
          css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
          this.forRepaintDummy = repaint(target); // repaint

          css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
          css(target, 'transform', 'translate3d(0,0,0)');
          typeof target.animated === 'number' && clearTimeout(target.animated);
          target.animated = setTimeout(function () {
            css(target, 'transition', '');
            css(target, 'transform', '');
            target.animated = false;
            target.animatingX = false;
            target.animatingY = false;
          }, duration);
        }
      }
    };
  }
  function repaint(target) {
    return target.offsetWidth;
  }
  function calculateRealTime(animatingRect, fromRect, toRect, options) {
    return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
  }
  var plugins = [];
  var defaults = {
    initializeByDefault: true
  };
  var PluginManager = {
    mount: function mount(plugin) {
      // Set default static properties
      for (var option in defaults) {
        if (defaults.hasOwnProperty(option) && !(option in plugin)) {
          plugin[option] = defaults[option];
        }
      }
      plugins.forEach(function (p) {
        if (p.pluginName === plugin.pluginName) {
          throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
        }
      });
      plugins.push(plugin);
    },
    pluginEvent: function pluginEvent(eventName, sortable, evt) {
      var _this = this;
      this.eventCanceled = false;
      evt.cancel = function () {
        _this.eventCanceled = true;
      };
      var eventNameGlobal = eventName + 'Global';
      plugins.forEach(function (plugin) {
        if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

        if (sortable[plugin.pluginName][eventNameGlobal]) {
          sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
            sortable: sortable
          }, evt));
        } // Only fire plugin event if plugin is enabled in this sortable,
        // and plugin has event defined

        if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
          sortable[plugin.pluginName][eventName](_objectSpread2({
            sortable: sortable
          }, evt));
        }
      });
    },
    initializePlugins: function initializePlugins(sortable, el, defaults, options) {
      plugins.forEach(function (plugin) {
        var pluginName = plugin.pluginName;
        if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
        var initialized = new plugin(sortable, el, sortable.options);
        initialized.sortable = sortable;
        initialized.options = sortable.options;
        sortable[pluginName] = initialized; // Add default options from plugin

        _extends(defaults, initialized.defaults);
      });
      for (var option in sortable.options) {
        if (!sortable.options.hasOwnProperty(option)) continue;
        var modified = this.modifyOption(sortable, option, sortable.options[option]);
        if (typeof modified !== 'undefined') {
          sortable.options[option] = modified;
        }
      }
    },
    getEventProperties: function getEventProperties(name, sortable) {
      var eventProperties = {};
      plugins.forEach(function (plugin) {
        if (typeof plugin.eventProperties !== 'function') return;
        _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
      });
      return eventProperties;
    },
    modifyOption: function modifyOption(sortable, name, value) {
      var modifiedValue;
      plugins.forEach(function (plugin) {
        // Plugin must exist on the Sortable
        if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

        if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
          modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
        }
      });
      return modifiedValue;
    }
  };
  function dispatchEvent(_ref) {
    var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
    sortable = sortable || rootEl && rootEl[expando];
    if (!sortable) return;
    var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

    if (window.CustomEvent && !IE11OrLess && !Edge) {
      evt = new CustomEvent(name, {
        bubbles: true,
        cancelable: true
      });
    } else {
      evt = document.createEvent('Event');
      evt.initEvent(name, true, true);
    }
    evt.to = toEl || rootEl;
    evt.from = fromEl || rootEl;
    evt.item = targetEl || rootEl;
    evt.clone = cloneEl;
    evt.oldIndex = oldIndex;
    evt.newIndex = newIndex;
    evt.oldDraggableIndex = oldDraggableIndex;
    evt.newDraggableIndex = newDraggableIndex;
    evt.originalEvent = originalEvent;
    evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
    var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
    for (var option in allEventProperties) {
      evt[option] = allEventProperties[option];
    }
    if (rootEl) {
      rootEl.dispatchEvent(evt);
    }
    if (options[onName]) {
      options[onName].call(sortable, evt);
    }
  }
  var _excluded = ["evt"];
  var pluginEvent = function pluginEvent(eventName, sortable) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, _excluded);
    PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
      dragEl: dragEl,
      parentEl: parentEl,
      ghostEl: ghostEl,
      rootEl: rootEl,
      nextEl: nextEl,
      lastDownEl: lastDownEl,
      cloneEl: cloneEl,
      cloneHidden: cloneHidden,
      dragStarted: moved,
      putSortable: putSortable,
      activeSortable: Sortable.active,
      originalEvent: originalEvent,
      oldIndex: oldIndex,
      oldDraggableIndex: oldDraggableIndex,
      newIndex: newIndex,
      newDraggableIndex: newDraggableIndex,
      hideGhostForTarget: _hideGhostForTarget,
      unhideGhostForTarget: _unhideGhostForTarget,
      cloneNowHidden: function cloneNowHidden() {
        cloneHidden = true;
      },
      cloneNowShown: function cloneNowShown() {
        cloneHidden = false;
      },
      dispatchSortableEvent: function dispatchSortableEvent(name) {
        _dispatchEvent({
          sortable: sortable,
          name: name,
          originalEvent: originalEvent
        });
      }
    }, data));
  };
  function _dispatchEvent(info) {
    dispatchEvent(_objectSpread2({
      putSortable: putSortable,
      cloneEl: cloneEl,
      targetEl: dragEl,
      rootEl: rootEl,
      oldIndex: oldIndex,
      oldDraggableIndex: oldDraggableIndex,
      newIndex: newIndex,
      newDraggableIndex: newDraggableIndex
    }, info));
  }
  var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
    ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
    _silent = false,
    savedInputChecked = [];
  /** @const */

  var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
    supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
      if (!documentExists) return; // false when <= IE11

      if (IE11OrLess) {
        return false;
      }
      var el = document.createElement('x');
      el.style.cssText = 'pointer-events:auto';
      return el.style.pointerEvents === 'auto';
    }(),
    _detectDirection = function _detectDirection(el, options) {
      var elCSS = css(el),
        elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
        child1 = getChild(el, 0, options),
        child2 = getChild(el, 1, options),
        firstChildCSS = child1 && css(child1),
        secondChildCSS = child2 && css(child2),
        firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
        secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
      if (elCSS.display === 'flex') {
        return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
      }
      if (elCSS.display === 'grid') {
        return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
      }
      if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
        var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
        return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
      }
      return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
    },
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
      var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
        dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
        dragElOppLength = vertical ? dragRect.width : dragRect.height,
        targetS1Opp = vertical ? targetRect.left : targetRect.top,
        targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
        targetOppLength = vertical ? targetRect.width : targetRect.height;
      return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
    },
    /**
     * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
     * @param  {Number} x      X position
     * @param  {Number} y      Y position
     * @return {HTMLElement}   Element of the first found nearest Sortable
     */
    _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
      var ret;
      sortables.some(function (sortable) {
        var threshold = sortable[expando].options.emptyInsertThreshold;
        if (!threshold || lastChild(sortable)) return;
        var rect = getRect(sortable),
          insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
          insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
        if (insideHorizontally && insideVertically) {
          return ret = sortable;
        }
      });
      return ret;
    },
    _prepareGroup = function _prepareGroup(options) {
      function toFn(value, pull) {
        return function (to, from, dragEl, evt) {
          var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
          if (value == null && (pull || sameGroup)) {
            // Default pull value
            // Default pull and put value if same group
            return true;
          } else if (value == null || value === false) {
            return false;
          } else if (pull && value === 'clone') {
            return value;
          } else if (typeof value === 'function') {
            return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
          } else {
            var otherGroup = (pull ? to : from).options.group.name;
            return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
          }
        };
      }
      var group = {};
      var originalGroup = options.group;
      if (!originalGroup || _typeof(originalGroup) != 'object') {
        originalGroup = {
          name: originalGroup
        };
      }
      group.name = originalGroup.name;
      group.checkPull = toFn(originalGroup.pull, true);
      group.checkPut = toFn(originalGroup.put);
      group.revertClone = originalGroup.revertClone;
      options.group = group;
    },
    _hideGhostForTarget = function _hideGhostForTarget() {
      if (!supportCssPointerEvents && ghostEl) {
        css(ghostEl, 'display', 'none');
      }
    },
    _unhideGhostForTarget = function _unhideGhostForTarget() {
      if (!supportCssPointerEvents && ghostEl) {
        css(ghostEl, 'display', '');
      }
    }; // #1184 fix - Prevent click event on fallback if dragged but item not changed position

  if (documentExists && !ChromeForAndroid) {
    document.addEventListener('click', function (evt) {
      if (ignoreNextClick) {
        evt.preventDefault();
        evt.stopPropagation && evt.stopPropagation();
        evt.stopImmediatePropagation && evt.stopImmediatePropagation();
        ignoreNextClick = false;
        return false;
      }
    }, true);
  }
  var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
    if (dragEl) {
      evt = evt.touches ? evt.touches[0] : evt;
      var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
      if (nearest) {
        // Create imitation event
        var event = {};
        for (var i in evt) {
          if (evt.hasOwnProperty(i)) {
            event[i] = evt[i];
          }
        }
        event.target = event.rootEl = nearest;
        event.preventDefault = void 0;
        event.stopPropagation = void 0;
        nearest[expando]._onDragOver(event);
      }
    }
  };
  var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
    if (dragEl) {
      dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
    }
  };
  /**
   * @class  Sortable
   * @param  {HTMLElement}  el
   * @param  {Object}       [options]
   */

  function Sortable(el, options) {
    if (!(el && el.nodeType && el.nodeType === 1)) {
      throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
    }
    this.el = el; // root element

    this.options = options = _extends({}, options); // Export instance

    el[expando] = this;
    var defaults = {
      group: null,
      sort: true,
      disabled: false,
      store: null,
      handle: null,
      draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
      swapThreshold: 1,
      // percentage; 0 <= x <= 1
      invertSwap: false,
      // invert always
      invertedSwapThreshold: null,
      // will be set to same as swapThreshold if default
      removeCloneOnHide: true,
      direction: function direction() {
        return _detectDirection(el, this.options);
      },
      ghostClass: 'sortable-ghost',
      chosenClass: 'sortable-chosen',
      dragClass: 'sortable-drag',
      ignore: 'a, img',
      filter: null,
      preventOnFilter: true,
      animation: 0,
      easing: null,
      setData: function setData(dataTransfer, dragEl) {
        dataTransfer.setData('Text', dragEl.textContent);
      },
      dropBubble: false,
      dragoverBubble: false,
      dataIdAttr: 'data-id',
      delay: 0,
      delayOnTouchOnly: false,
      touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
      forceFallback: false,
      fallbackClass: 'sortable-fallback',
      fallbackOnBody: false,
      fallbackTolerance: 0,
      fallbackOffset: {
        x: 0,
        y: 0
      },
      supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
      emptyInsertThreshold: 5
    };
    PluginManager.initializePlugins(this, el, defaults); // Set default options

    for (var name in defaults) {
      !(name in options) && (options[name] = defaults[name]);
    }
    _prepareGroup(options); // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    } // Setup drag mode

    this.nativeDraggable = options.forceFallback ? false : supportDraggable;
    if (this.nativeDraggable) {
      // Touch start threshold cannot be greater than the native dragstart threshold
      this.options.touchStartThreshold = 1;
    } // Bind events

    if (options.supportPointer) {
      on(el, 'pointerdown', this._onTapStart);
    } else {
      on(el, 'mousedown', this._onTapStart);
      on(el, 'touchstart', this._onTapStart);
    }
    if (this.nativeDraggable) {
      on(el, 'dragover', this);
      on(el, 'dragenter', this);
    }
    sortables.push(this.el); // Restore sorting

    options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

    _extends(this, AnimationStateManager());
  }
  Sortable.prototype = /** @lends Sortable.prototype */
  {
    constructor: Sortable,
    _isOutsideThisEl: function _isOutsideThisEl(target) {
      if (!this.el.contains(target) && target !== this.el) {
        lastTarget = null;
      }
    },
    _getDirection: function _getDirection(evt, target) {
      return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
    },
    _onTapStart: function _onTapStart( /** Event|TouchEvent */
    evt) {
      if (!evt.cancelable) return;
      var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;
      _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.

      if (dragEl) {
        return;
      }
      if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
        return; // only left button and enabled
      } // cancel dnd if original target is content editable

      if (originalTarget.isContentEditable) {
        return;
      } // Safari ignores further event handling after mousedown

      if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
        return;
      }
      target = closest(target, options.draggable, el, false);
      if (target && target.animated) {
        return;
      }
      if (lastDownEl === target) {
        // Ignoring duplicate `down`
        return;
      } // Get the index of the dragged element within its parent

      oldIndex = index(target);
      oldDraggableIndex = index(target, options.draggable); // Check filter

      if (typeof filter === 'function') {
        if (filter.call(this, evt, target, this)) {
          _dispatchEvent({
            sortable: _this,
            rootEl: originalTarget,
            name: 'filter',
            targetEl: target,
            toEl: el,
            fromEl: el
          });
          pluginEvent('filter', _this, {
            evt: evt
          });
          preventOnFilter && evt.cancelable && evt.preventDefault();
          return; // cancel dnd
        }
      } else if (filter) {
        filter = filter.split(',').some(function (criteria) {
          criteria = closest(originalTarget, criteria.trim(), el, false);
          if (criteria) {
            _dispatchEvent({
              sortable: _this,
              rootEl: criteria,
              name: 'filter',
              targetEl: target,
              fromEl: el,
              toEl: el
            });
            pluginEvent('filter', _this, {
              evt: evt
            });
            return true;
          }
        });
        if (filter) {
          preventOnFilter && evt.cancelable && evt.preventDefault();
          return; // cancel dnd
        }
      }

      if (options.handle && !closest(originalTarget, options.handle, el, false)) {
        return;
      } // Prepare `dragstart`

      this._prepareDragStart(evt, touch, target);
    },
    _prepareDragStart: function _prepareDragStart( /** Event */
    evt, /** Touch */
    touch, /** HTMLElement */
    target) {
      var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;
      if (target && !dragEl && target.parentNode === el) {
        var dragRect = getRect(target);
        rootEl = el;
        dragEl = target;
        parentEl = dragEl.parentNode;
        nextEl = dragEl.nextSibling;
        lastDownEl = target;
        activeGroup = options.group;
        Sortable.dragged = dragEl;
        tapEvt = {
          target: dragEl,
          clientX: (touch || evt).clientX,
          clientY: (touch || evt).clientY
        };
        tapDistanceLeft = tapEvt.clientX - dragRect.left;
        tapDistanceTop = tapEvt.clientY - dragRect.top;
        this._lastX = (touch || evt).clientX;
        this._lastY = (touch || evt).clientY;
        dragEl.style['will-change'] = 'all';
        dragStartFn = function dragStartFn() {
          pluginEvent('delayEnded', _this, {
            evt: evt
          });
          if (Sortable.eventCanceled) {
            _this._onDrop();
            return;
          } // Delayed drag has been triggered
          // we can re-enable the events: touchmove/mousemove

          _this._disableDelayedDragEvents();
          if (!FireFox && _this.nativeDraggable) {
            dragEl.draggable = true;
          } // Bind the events: dragstart/dragend

          _this._triggerDragStart(evt, touch); // Drag start event

          _dispatchEvent({
            sortable: _this,
            name: 'choose',
            originalEvent: evt
          }); // Chosen item

          toggleClass(dragEl, options.chosenClass, true);
        }; // Disable "draggable"

        options.ignore.split(',').forEach(function (criteria) {
          find(dragEl, criteria.trim(), _disableDraggable);
        });
        on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
        on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
        on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
        on(ownerDocument, 'mouseup', _this._onDrop);
        on(ownerDocument, 'touchend', _this._onDrop);
        on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

        if (FireFox && this.nativeDraggable) {
          this.options.touchStartThreshold = 4;
          dragEl.draggable = true;
        }
        pluginEvent('delayStart', this, {
          evt: evt
        }); // Delay is impossible for native DnD in Edge or IE

        if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
          if (Sortable.eventCanceled) {
            this._onDrop();
            return;
          } // If the user moves the pointer or let go the click or touch
          // before the delay has been reached:
          // disable the delayed drag

          on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
          on(ownerDocument, 'touchend', _this._disableDelayedDrag);
          on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
          on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
          on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
          options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
          _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
        } else {
          dragStartFn();
        }
      }
    },
    _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler( /** TouchEvent|PointerEvent **/
    e) {
      var touch = e.touches ? e.touches[0] : e;
      if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
        this._disableDelayedDrag();
      }
    },
    _disableDelayedDrag: function _disableDelayedDrag() {
      dragEl && _disableDraggable(dragEl);
      clearTimeout(this._dragStartTimer);
      this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function _disableDelayedDragEvents() {
      var ownerDocument = this.el.ownerDocument;
      off(ownerDocument, 'mouseup', this._disableDelayedDrag);
      off(ownerDocument, 'touchend', this._disableDelayedDrag);
      off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
      off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
      off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
      off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function _triggerDragStart( /** Event */
    evt, /** Touch */
    touch) {
      touch = touch || evt.pointerType == 'touch' && evt;
      if (!this.nativeDraggable || touch) {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._onTouchMove);
        } else if (touch) {
          on(document, 'touchmove', this._onTouchMove);
        } else {
          on(document, 'mousemove', this._onTouchMove);
        }
      } else {
        on(dragEl, 'dragend', this);
        on(rootEl, 'dragstart', this._onDragStart);
      }
      try {
        if (document.selection) {
          // Timeout neccessary for IE9
          _nextTick(function () {
            document.selection.empty();
          });
        } else {
          window.getSelection().removeAllRanges();
        }
      } catch (err) {}
    },
    _dragStarted: function _dragStarted(fallback, evt) {
      awaitingDragStarted = false;
      if (rootEl && dragEl) {
        pluginEvent('dragStarted', this, {
          evt: evt
        });
        if (this.nativeDraggable) {
          on(document, 'dragover', _checkOutsideTargetEl);
        }
        var options = this.options; // Apply effect

        !fallback && toggleClass(dragEl, options.dragClass, false);
        toggleClass(dragEl, options.ghostClass, true);
        Sortable.active = this;
        fallback && this._appendGhost(); // Drag start event

        _dispatchEvent({
          sortable: this,
          name: 'start',
          originalEvent: evt
        });
      } else {
        this._nulling();
      }
    },
    _emulateDragOver: function _emulateDragOver() {
      if (touchEvt) {
        this._lastX = touchEvt.clientX;
        this._lastY = touchEvt.clientY;
        _hideGhostForTarget();
        var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        var parent = target;
        while (target && target.shadowRoot) {
          target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
          if (target === parent) break;
          parent = target;
        }
        dragEl.parentNode[expando]._isOutsideThisEl(target);
        if (parent) {
          do {
            if (parent[expando]) {
              var inserted = void 0;
              inserted = parent[expando]._onDragOver({
                clientX: touchEvt.clientX,
                clientY: touchEvt.clientY,
                target: target,
                rootEl: parent
              });
              if (inserted && !this.options.dragoverBubble) {
                break;
              }
            }
            target = parent; // store last element
          }
          /* jshint boss:true */ while (parent = parent.parentNode);
        }
        _unhideGhostForTarget();
      }
    },
    _onTouchMove: function _onTouchMove( /**TouchEvent*/
    evt) {
      if (tapEvt) {
        var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

        if (!Sortable.active && !awaitingDragStarted) {
          if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
            return;
          }
          this._onDragStart(evt, true);
        }
        if (ghostEl) {
          if (ghostMatrix) {
            ghostMatrix.e += dx - (lastDx || 0);
            ghostMatrix.f += dy - (lastDy || 0);
          } else {
            ghostMatrix = {
              a: 1,
              b: 0,
              c: 0,
              d: 1,
              e: dx,
              f: dy
            };
          }
          var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
          css(ghostEl, 'webkitTransform', cssMatrix);
          css(ghostEl, 'mozTransform', cssMatrix);
          css(ghostEl, 'msTransform', cssMatrix);
          css(ghostEl, 'transform', cssMatrix);
          lastDx = dx;
          lastDy = dy;
          touchEvt = touch;
        }
        evt.cancelable && evt.preventDefault();
      }
    },
    _appendGhost: function _appendGhost() {
      // Bug if using scale(): https://stackoverflow.com/questions/2637058
      // Not being adjusted for
      if (!ghostEl) {
        var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

        if (PositionGhostAbsolutely) {
          // Get relatively positioned parent
          ghostRelativeParent = container;
          while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
            ghostRelativeParent = ghostRelativeParent.parentNode;
          }
          if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
            if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
            rect.top += ghostRelativeParent.scrollTop;
            rect.left += ghostRelativeParent.scrollLeft;
          } else {
            ghostRelativeParent = getWindowScrollingElement();
          }
          ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
        }
        ghostEl = dragEl.cloneNode(true);
        toggleClass(ghostEl, options.ghostClass, false);
        toggleClass(ghostEl, options.fallbackClass, true);
        toggleClass(ghostEl, options.dragClass, true);
        css(ghostEl, 'transition', '');
        css(ghostEl, 'transform', '');
        css(ghostEl, 'box-sizing', 'border-box');
        css(ghostEl, 'margin', 0);
        css(ghostEl, 'top', rect.top);
        css(ghostEl, 'left', rect.left);
        css(ghostEl, 'width', rect.width);
        css(ghostEl, 'height', rect.height);
        css(ghostEl, 'opacity', '0.8');
        css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
        css(ghostEl, 'zIndex', '100000');
        css(ghostEl, 'pointerEvents', 'none');
        Sortable.ghost = ghostEl;
        container.appendChild(ghostEl); // Set transform-origin

        css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
      }
    },
    _onDragStart: function _onDragStart( /**Event*/
    evt, /**boolean*/
    fallback) {
      var _this = this;
      var dataTransfer = evt.dataTransfer;
      var options = _this.options;
      pluginEvent('dragStart', this, {
        evt: evt
      });
      if (Sortable.eventCanceled) {
        this._onDrop();
        return;
      }
      pluginEvent('setupClone', this);
      if (!Sortable.eventCanceled) {
        cloneEl = clone(dragEl);
        cloneEl.removeAttribute("id");
        cloneEl.draggable = false;
        cloneEl.style['will-change'] = '';
        this._hideClone();
        toggleClass(cloneEl, this.options.chosenClass, false);
        Sortable.clone = cloneEl;
      } // #1143: IFrame support workaround

      _this.cloneId = _nextTick(function () {
        pluginEvent('clone', _this);
        if (Sortable.eventCanceled) return;
        if (!_this.options.removeCloneOnHide) {
          rootEl.insertBefore(cloneEl, dragEl);
        }
        _this._hideClone();
        _dispatchEvent({
          sortable: _this,
          name: 'clone'
        });
      });
      !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

      if (fallback) {
        ignoreNextClick = true;
        _this._loopId = setInterval(_this._emulateDragOver, 50);
      } else {
        // Undo what was set in _prepareDragStart before drag started
        off(document, 'mouseup', _this._onDrop);
        off(document, 'touchend', _this._onDrop);
        off(document, 'touchcancel', _this._onDrop);
        if (dataTransfer) {
          dataTransfer.effectAllowed = 'move';
          options.setData && options.setData.call(_this, dataTransfer, dragEl);
        }
        on(document, 'drop', _this); // #1276 fix:

        css(dragEl, 'transform', 'translateZ(0)');
      }
      awaitingDragStarted = true;
      _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
      on(document, 'selectstart', _this);
      moved = true;
      if (Safari) {
        css(document.body, 'user-select', 'none');
      }
    },
    // Returns true - if no further action is needed (either inserted or another condition)
    _onDragOver: function _onDragOver( /**Event*/
    evt) {
      var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;
      if (_silent) return;
      function dragOverEvent(name, extra) {
        pluginEvent(name, _this, _objectSpread2({
          evt: evt,
          isOwner: isOwner,
          axis: vertical ? 'vertical' : 'horizontal',
          revert: revert,
          dragRect: dragRect,
          targetRect: targetRect,
          canSort: canSort,
          fromSortable: fromSortable,
          target: target,
          completed: completed,
          onMove: function onMove(target, after) {
            return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
          },
          changed: changed
        }, extra));
      } // Capture animation state

      function capture() {
        dragOverEvent('dragOverAnimationCapture');
        _this.captureAnimationState();
        if (_this !== fromSortable) {
          fromSortable.captureAnimationState();
        }
      } // Return invocation when dragEl is inserted (or completed)

      function completed(insertion) {
        dragOverEvent('dragOverCompleted', {
          insertion: insertion
        });
        if (insertion) {
          // Clones must be hidden before folding animation to capture dragRectAbsolute properly
          if (isOwner) {
            activeSortable._hideClone();
          } else {
            activeSortable._showClone(_this);
          }
          if (_this !== fromSortable) {
            // Set ghost class to new sortable's ghost class
            toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
            toggleClass(dragEl, options.ghostClass, true);
          }
          if (putSortable !== _this && _this !== Sortable.active) {
            putSortable = _this;
          } else if (_this === Sortable.active && putSortable) {
            putSortable = null;
          } // Animation

          if (fromSortable === _this) {
            _this._ignoreWhileAnimating = target;
          }
          _this.animateAll(function () {
            dragOverEvent('dragOverAnimationComplete');
            _this._ignoreWhileAnimating = null;
          });
          if (_this !== fromSortable) {
            fromSortable.animateAll();
            fromSortable._ignoreWhileAnimating = null;
          }
        } // Null lastTarget if it is not inside a previously swapped element

        if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
          lastTarget = null;
        } // no bubbling and not fallback

        if (!options.dragoverBubble && !evt.rootEl && target !== document) {
          dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted

          !insertion && nearestEmptyInsertDetectEvent(evt);
        }
        !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
        return completedFired = true;
      } // Call when dragEl has been inserted

      function changed() {
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        _dispatchEvent({
          sortable: _this,
          name: 'change',
          toEl: el,
          newIndex: newIndex,
          newDraggableIndex: newDraggableIndex,
          originalEvent: evt
        });
      }
      if (evt.preventDefault !== void 0) {
        evt.cancelable && evt.preventDefault();
      }
      target = closest(target, options.draggable, el, true);
      dragOverEvent('dragOver');
      if (Sortable.eventCanceled) return completedFired;
      if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
        return completed(false);
      }
      ignoreNextClick = false;
      if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
      : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
        vertical = this._getDirection(evt, target) === 'vertical';
        dragRect = getRect(dragEl);
        dragOverEvent('dragOverValid');
        if (Sortable.eventCanceled) return completedFired;
        if (revert) {
          parentEl = rootEl; // actualization

          capture();
          this._hideClone();
          dragOverEvent('revert');
          if (!Sortable.eventCanceled) {
            if (nextEl) {
              rootEl.insertBefore(dragEl, nextEl);
            } else {
              rootEl.appendChild(dragEl);
            }
          }
          return completed(true);
        }
        var elLastChild = lastChild(el, options.draggable);
        if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
          // Insert to end of list
          // If already at end of list: Do not insert
          if (elLastChild === dragEl) {
            return completed(false);
          } // if there is a last element, it is the target

          if (elLastChild && el === evt.target) {
            target = elLastChild;
          }
          if (target) {
            targetRect = getRect(target);
          }
          if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
            capture();
            if (elLastChild && elLastChild.nextSibling) {
              // the last draggable element is not the last node
              el.insertBefore(dragEl, elLastChild.nextSibling);
            } else {
              el.appendChild(dragEl);
            }
            parentEl = el; // actualization

            changed();
            return completed(true);
          }
        } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
          // Insert to start of list
          var firstChild = getChild(el, 0, options, true);
          if (firstChild === dragEl) {
            return completed(false);
          }
          target = firstChild;
          targetRect = getRect(target);
          if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
            capture();
            el.insertBefore(dragEl, firstChild);
            parentEl = el; // actualization

            changed();
            return completed(true);
          }
        } else if (target.parentNode === el) {
          targetRect = getRect(target);
          var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
          if (lastTarget !== target) {
            targetBeforeFirstSwap = targetRect[side1];
            pastFirstInvertThresh = false;
            isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
          }
          direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
          var sibling;
          if (direction !== 0) {
            // Check if target is beside dragEl in respective direction (ignoring hidden elements)
            var dragIndex = index(dragEl);
            do {
              dragIndex -= direction;
              sibling = parentEl.children[dragIndex];
            } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
          } // If dragEl is already beside target: Do not insert

          if (direction === 0 || sibling === target) {
            return completed(false);
          }
          lastTarget = target;
          lastDirection = direction;
          var nextSibling = target.nextElementSibling,
            after = false;
          after = direction === 1;
          var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
          if (moveVector !== false) {
            if (moveVector === 1 || moveVector === -1) {
              after = moveVector === 1;
            }
            _silent = true;
            setTimeout(_unsilent, 30);
            capture();
            if (after && !nextSibling) {
              el.appendChild(dragEl);
            } else {
              target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
            } // Undo chrome's scroll adjustment (has no effect on other browsers)

            if (scrolledPastTop) {
              scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
            }
            parentEl = dragEl.parentNode; // actualization
            // must be done before animation

            if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
              targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
            }
            changed();
            return completed(true);
          }
        }
        if (el.contains(dragEl)) {
          return completed(false);
        }
      }
      return false;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function _offMoveEvents() {
      off(document, 'mousemove', this._onTouchMove);
      off(document, 'touchmove', this._onTouchMove);
      off(document, 'pointermove', this._onTouchMove);
      off(document, 'dragover', nearestEmptyInsertDetectEvent);
      off(document, 'mousemove', nearestEmptyInsertDetectEvent);
      off(document, 'touchmove', nearestEmptyInsertDetectEvent);
    },
    _offUpEvents: function _offUpEvents() {
      var ownerDocument = this.el.ownerDocument;
      off(ownerDocument, 'mouseup', this._onDrop);
      off(ownerDocument, 'touchend', this._onDrop);
      off(ownerDocument, 'pointerup', this._onDrop);
      off(ownerDocument, 'touchcancel', this._onDrop);
      off(document, 'selectstart', this);
    },
    _onDrop: function _onDrop( /**Event*/
    evt) {
      var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      pluginEvent('drop', this, {
        evt: evt
      });
      parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      if (Sortable.eventCanceled) {
        this._nulling();
        return;
      }
      awaitingDragStarted = false;
      isCircumstantialInvert = false;
      pastFirstInvertThresh = false;
      clearInterval(this._loopId);
      clearTimeout(this._dragStartTimer);
      _cancelNextTick(this.cloneId);
      _cancelNextTick(this._dragStartId); // Unbind events

      if (this.nativeDraggable) {
        off(document, 'drop', this);
        off(el, 'dragstart', this._onDragStart);
      }
      this._offMoveEvents();
      this._offUpEvents();
      if (Safari) {
        css(document.body, 'user-select', '');
      }
      css(dragEl, 'transform', '');
      if (evt) {
        if (moved) {
          evt.cancelable && evt.preventDefault();
          !options.dropBubble && evt.stopPropagation();
        }
        ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
        if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
          // Remove clone(s)
          cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
        }
        if (dragEl) {
          if (this.nativeDraggable) {
            off(dragEl, 'dragend', this);
          }
          _disableDraggable(dragEl);
          dragEl.style['will-change'] = ''; // Remove classes
          // ghostClass is added in dragStarted

          if (moved && !awaitingDragStarted) {
            toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
          }
          toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

          _dispatchEvent({
            sortable: this,
            name: 'unchoose',
            toEl: parentEl,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: evt
          });
          if (rootEl !== parentEl) {
            if (newIndex >= 0) {
              // Add event
              _dispatchEvent({
                rootEl: parentEl,
                name: 'add',
                toEl: parentEl,
                fromEl: rootEl,
                originalEvent: evt
              }); // Remove event

              _dispatchEvent({
                sortable: this,
                name: 'remove',
                toEl: parentEl,
                originalEvent: evt
              }); // drag from one list and drop into another

              _dispatchEvent({
                rootEl: parentEl,
                name: 'sort',
                toEl: parentEl,
                fromEl: rootEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
            putSortable && putSortable.save();
          } else {
            if (newIndex !== oldIndex) {
              if (newIndex >= 0) {
                // drag & drop within the same list
                _dispatchEvent({
                  sortable: this,
                  name: 'update',
                  toEl: parentEl,
                  originalEvent: evt
                });
                _dispatchEvent({
                  sortable: this,
                  name: 'sort',
                  toEl: parentEl,
                  originalEvent: evt
                });
              }
            }
          }
          if (Sortable.active) {
            /* jshint eqnull:true */
            if (newIndex == null || newIndex === -1) {
              newIndex = oldIndex;
              newDraggableIndex = oldDraggableIndex;
            }
            _dispatchEvent({
              sortable: this,
              name: 'end',
              toEl: parentEl,
              originalEvent: evt
            }); // Save sorting

            this.save();
          }
        }
      }
      this._nulling();
    },
    _nulling: function _nulling() {
      pluginEvent('nulling', this);
      rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
      savedInputChecked.forEach(function (el) {
        el.checked = true;
      });
      savedInputChecked.length = lastDx = lastDy = 0;
    },
    handleEvent: function handleEvent( /**Event*/
    evt) {
      switch (evt.type) {
        case 'drop':
        case 'dragend':
          this._onDrop(evt);
          break;
        case 'dragenter':
        case 'dragover':
          if (dragEl) {
            this._onDragOver(evt);
            _globalDragOver(evt);
          }
          break;
        case 'selectstart':
          evt.preventDefault();
          break;
      }
    },
    /**
     * Serializes the item into an array of string.
     * @returns {String[]}
     */
    toArray: function toArray() {
      var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;
      for (; i < n; i++) {
        el = children[i];
        if (closest(el, options.draggable, this.el, false)) {
          order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
        }
      }
      return order;
    },
    /**
     * Sorts the elements according to the array.
     * @param  {String[]}  order  order of the items
     */
    sort: function sort(order, useAnimation) {
      var items = {},
        rootEl = this.el;
      this.toArray().forEach(function (id, i) {
        var el = rootEl.children[i];
        if (closest(el, this.options.draggable, rootEl, false)) {
          items[id] = el;
        }
      }, this);
      useAnimation && this.captureAnimationState();
      order.forEach(function (id) {
        if (items[id]) {
          rootEl.removeChild(items[id]);
          rootEl.appendChild(items[id]);
        }
      });
      useAnimation && this.animateAll();
    },
    /**
     * Save the current sorting
     */
    save: function save() {
      var store = this.options.store;
      store && store.set && store.set(this);
    },
    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * @param   {HTMLElement}  el
     * @param   {String}       [selector]  default: `options.draggable`
     * @returns {HTMLElement|null}
     */
    closest: function closest$1(el, selector) {
      return closest(el, selector || this.options.draggable, this.el, false);
    },
    /**
     * Set/get option
     * @param   {string} name
     * @param   {*}      [value]
     * @returns {*}
     */
    option: function option(name, value) {
      var options = this.options;
      if (value === void 0) {
        return options[name];
      } else {
        var modifiedValue = PluginManager.modifyOption(this, name, value);
        if (typeof modifiedValue !== 'undefined') {
          options[name] = modifiedValue;
        } else {
          options[name] = value;
        }
        if (name === 'group') {
          _prepareGroup(options);
        }
      }
    },
    /**
     * Destroy
     */
    destroy: function destroy() {
      pluginEvent('destroy', this);
      var el = this.el;
      el[expando] = null;
      off(el, 'mousedown', this._onTapStart);
      off(el, 'touchstart', this._onTapStart);
      off(el, 'pointerdown', this._onTapStart);
      if (this.nativeDraggable) {
        off(el, 'dragover', this);
        off(el, 'dragenter', this);
      } // Remove draggable attributes

      Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
        el.removeAttribute('draggable');
      });
      this._onDrop();
      this._disableDelayedDragEvents();
      sortables.splice(sortables.indexOf(this.el), 1);
      this.el = el = null;
    },
    _hideClone: function _hideClone() {
      if (!cloneHidden) {
        pluginEvent('hideClone', this);
        if (Sortable.eventCanceled) return;
        css(cloneEl, 'display', 'none');
        if (this.options.removeCloneOnHide && cloneEl.parentNode) {
          cloneEl.parentNode.removeChild(cloneEl);
        }
        cloneHidden = true;
      }
    },
    _showClone: function _showClone(putSortable) {
      if (putSortable.lastPutMode !== 'clone') {
        this._hideClone();
        return;
      }
      if (cloneHidden) {
        pluginEvent('showClone', this);
        if (Sortable.eventCanceled) return; // show clone at dragEl or original position

        if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
          rootEl.insertBefore(cloneEl, dragEl);
        } else if (nextEl) {
          rootEl.insertBefore(cloneEl, nextEl);
        } else {
          rootEl.appendChild(cloneEl);
        }
        if (this.options.group.revertClone) {
          this.animate(dragEl, cloneEl);
        }
        css(cloneEl, 'display', '');
        cloneHidden = false;
      }
    }
  };
  function _globalDragOver( /**Event*/
  evt) {
    if (evt.dataTransfer) {
      evt.dataTransfer.dropEffect = 'move';
    }
    evt.cancelable && evt.preventDefault();
  }
  function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
    var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

    if (window.CustomEvent && !IE11OrLess && !Edge) {
      evt = new CustomEvent('move', {
        bubbles: true,
        cancelable: true
      });
    } else {
      evt = document.createEvent('Event');
      evt.initEvent('move', true, true);
    }
    evt.to = toEl;
    evt.from = fromEl;
    evt.dragged = dragEl;
    evt.draggedRect = dragRect;
    evt.related = targetEl || toEl;
    evt.relatedRect = targetRect || getRect(toEl);
    evt.willInsertAfter = willInsertAfter;
    evt.originalEvent = originalEvent;
    fromEl.dispatchEvent(evt);
    if (onMoveFn) {
      retVal = onMoveFn.call(sortable, evt, originalEvent);
    }
    return retVal;
  }
  function _disableDraggable(el) {
    el.draggable = false;
  }
  function _unsilent() {
    _silent = false;
  }
  function _ghostIsFirst(evt, vertical, sortable) {
    var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
    var spacer = 10;
    return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
  }
  function _ghostIsLast(evt, vertical, sortable) {
    var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
    var spacer = 10;
    return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
  }
  function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
    var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;
    if (!invertSwap) {
      // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
      if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
        // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
        // check if past first invert threshold on side opposite of lastDirection
        if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
          // past first invert threshold, do not restrict inverted threshold to dragEl shadow
          pastFirstInvertThresh = true;
        }
        if (!pastFirstInvertThresh) {
          // dragEl shadow (target move distance shadow)
          if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
          : mouseOnAxis > targetS2 - targetMoveDistance) {
            return -lastDirection;
          }
        } else {
          invert = true;
        }
      } else {
        // Regular
        if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
          return _getInsertDirection(target);
        }
      }
    }
    invert = invert || invertSwap;
    if (invert) {
      // Invert of regular
      if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
        return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
      }
    }
    return 0;
  }
  /**
   * Gets the direction dragEl must be swapped relative to target in order to make it
   * seem that dragEl has been "inserted" into that element's position
   * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
   * @return {Number}                   Direction dragEl must be swapped
   */

  function _getInsertDirection(target) {
    if (index(dragEl) < index(target)) {
      return 1;
    } else {
      return -1;
    }
  }
  /**
   * Generate id
   * @param   {HTMLElement} el
   * @returns {String}
   * @private
   */

  function _generateId(el) {
    var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;
    while (i--) {
      sum += str.charCodeAt(i);
    }
    return sum.toString(36);
  }
  function _saveInputCheckedState(root) {
    savedInputChecked.length = 0;
    var inputs = root.getElementsByTagName('input');
    var idx = inputs.length;
    while (idx--) {
      var el = inputs[idx];
      el.checked && savedInputChecked.push(el);
    }
  }
  function _nextTick(fn) {
    return setTimeout(fn, 0);
  }
  function _cancelNextTick(id) {
    return clearTimeout(id);
  } // Fixed #973:

  if (documentExists) {
    on(document, 'touchmove', function (evt) {
      if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
        evt.preventDefault();
      }
    });
  } // Export utils

  Sortable.utils = {
    on: on,
    off: off,
    css: css,
    find: find,
    is: function is(el, selector) {
      return !!closest(el, selector, el, false);
    },
    extend: extend,
    throttle: throttle,
    closest: closest,
    toggleClass: toggleClass,
    clone: clone,
    index: index,
    nextTick: _nextTick,
    cancelNextTick: _cancelNextTick,
    detectDirection: _detectDirection,
    getChild: getChild
  };
  /**
   * Get the Sortable instance of an element
   * @param  {HTMLElement} element The element
   * @return {Sortable|undefined}         The instance of Sortable
   */

  Sortable.get = function (element) {
    return element[expando];
  };
  /**
   * Mount a plugin to Sortable
   * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
   */

  Sortable.mount = function () {
    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments[_key];
    }
    if (plugins[0].constructor === Array) plugins = plugins[0];
    plugins.forEach(function (plugin) {
      if (!plugin.prototype || !plugin.prototype.constructor) {
        throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
      }
      if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
      PluginManager.mount(plugin);
    });
  };
  /**
   * Create sortable instance
   * @param {HTMLElement}  el
   * @param {Object}      [options]
   */

  Sortable.create = function (el, options) {
    return new Sortable(el, options);
  }; // Export

  Sortable.version = version;
  var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;
  function AutoScrollPlugin() {
    function AutoScroll() {
      this.defaults = {
        scroll: true,
        forceAutoScrollFallback: false,
        scrollSensitivity: 30,
        scrollSpeed: 10,
        bubbleScroll: true
      }; // Bind all private methods

      for (var fn in this) {
        if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
          this[fn] = this[fn].bind(this);
        }
      }
    }
    AutoScroll.prototype = {
      dragStarted: function dragStarted(_ref) {
        var originalEvent = _ref.originalEvent;
        if (this.sortable.nativeDraggable) {
          on(document, 'dragover', this._handleAutoScroll);
        } else {
          if (this.options.supportPointer) {
            on(document, 'pointermove', this._handleFallbackAutoScroll);
          } else if (originalEvent.touches) {
            on(document, 'touchmove', this._handleFallbackAutoScroll);
          } else {
            on(document, 'mousemove', this._handleFallbackAutoScroll);
          }
        }
      },
      dragOverCompleted: function dragOverCompleted(_ref2) {
        var originalEvent = _ref2.originalEvent;

        // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
        if (!this.options.dragOverBubble && !originalEvent.rootEl) {
          this._handleAutoScroll(originalEvent);
        }
      },
      drop: function drop() {
        if (this.sortable.nativeDraggable) {
          off(document, 'dragover', this._handleAutoScroll);
        } else {
          off(document, 'pointermove', this._handleFallbackAutoScroll);
          off(document, 'touchmove', this._handleFallbackAutoScroll);
          off(document, 'mousemove', this._handleFallbackAutoScroll);
        }
        clearPointerElemChangedInterval();
        clearAutoScrolls();
        cancelThrottle();
      },
      nulling: function nulling() {
        touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
        autoScrolls.length = 0;
      },
      _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
        this._handleAutoScroll(evt, true);
      },
      _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
        var _this = this;
        var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
        touchEvt$1 = evt; // IE does not seem to have native autoscroll,
        // Edge's autoscroll seems too conditional,
        // MACOS Safari does not have autoscroll,
        // Firefox and Chrome are good

        if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
          autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

          var ogElemScroller = getParentAutoScrollElement(elem, true);
          if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
            pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

            pointerElemChangedInterval = setInterval(function () {
              var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
              if (newElem !== ogElemScroller) {
                ogElemScroller = newElem;
                clearAutoScrolls();
              }
              autoScroll(evt, _this.options, newElem, fallback);
            }, 10);
            lastAutoScrollX = x;
            lastAutoScrollY = y;
          }
        } else {
          // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
          if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
            clearAutoScrolls();
            return;
          }
          autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
        }
      }
    };
    return _extends(AutoScroll, {
      pluginName: 'scroll',
      initializeByDefault: true
    });
  }
  function clearAutoScrolls() {
    autoScrolls.forEach(function (autoScroll) {
      clearInterval(autoScroll.pid);
    });
    autoScrolls = [];
  }
  function clearPointerElemChangedInterval() {
    clearInterval(pointerElemChangedInterval);
  }
  var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
    // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
    if (!options.scroll) return;
    var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
    var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

    if (scrollRootEl !== rootEl) {
      scrollRootEl = rootEl;
      clearAutoScrolls();
      scrollEl = options.scroll;
      scrollCustomFn = options.scrollFn;
      if (scrollEl === true) {
        scrollEl = getParentAutoScrollElement(rootEl, true);
      }
    }
    var layersOut = 0;
    var currentParent = scrollEl;
    do {
      var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;
      if (el === winScroller) {
        canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
        canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
      } else {
        canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
        canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
      }
      var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
      var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
      if (!autoScrolls[layersOut]) {
        for (var i = 0; i <= layersOut; i++) {
          if (!autoScrolls[i]) {
            autoScrolls[i] = {};
          }
        }
      }
      if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
        autoScrolls[layersOut].el = el;
        autoScrolls[layersOut].vx = vx;
        autoScrolls[layersOut].vy = vy;
        clearInterval(autoScrolls[layersOut].pid);
        if (vx != 0 || vy != 0) {
          scrollThisInstance = true;
          /* jshint loopfunc:true */

          autoScrolls[layersOut].pid = setInterval(function () {
            // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
            if (isFallback && this.layer === 0) {
              Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely
            }

            var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
            var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
            if (typeof scrollCustomFn === 'function') {
              if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
                return;
              }
            }
            scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
          }.bind({
            layer: layersOut
          }), 24);
        }
      }
      layersOut++;
    } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
    scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
  }, 30);
  var drop = function drop(_ref) {
    var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
    if (!originalEvent) return;
    var toSortable = putSortable || activeSortable;
    hideGhostForTarget();
    var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
    var target = document.elementFromPoint(touch.clientX, touch.clientY);
    unhideGhostForTarget();
    if (toSortable && !toSortable.el.contains(target)) {
      dispatchSortableEvent('spill');
      this.onSpill({
        dragEl: dragEl,
        putSortable: putSortable
      });
    }
  };
  function Revert() {}
  Revert.prototype = {
    startIndex: null,
    dragStart: function dragStart(_ref2) {
      var oldDraggableIndex = _ref2.oldDraggableIndex;
      this.startIndex = oldDraggableIndex;
    },
    onSpill: function onSpill(_ref3) {
      var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
      this.sortable.captureAnimationState();
      if (putSortable) {
        putSortable.captureAnimationState();
      }
      var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
      if (nextSibling) {
        this.sortable.el.insertBefore(dragEl, nextSibling);
      } else {
        this.sortable.el.appendChild(dragEl);
      }
      this.sortable.animateAll();
      if (putSortable) {
        putSortable.animateAll();
      }
    },
    drop: drop
  };
  _extends(Revert, {
    pluginName: 'revertOnSpill'
  });
  function Remove() {}
  Remove.prototype = {
    onSpill: function onSpill(_ref4) {
      var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
      var parentSortable = putSortable || this.sortable;
      parentSortable.captureAnimationState();
      dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
      parentSortable.animateAll();
    },
    drop: drop
  };
  _extends(Remove, {
    pluginName: 'removeOnSpill'
  });
  var lastSwapEl;
  function SwapPlugin() {
    function Swap() {
      this.defaults = {
        swapClass: 'sortable-swap-highlight'
      };
    }
    Swap.prototype = {
      dragStart: function dragStart(_ref) {
        var dragEl = _ref.dragEl;
        lastSwapEl = dragEl;
      },
      dragOverValid: function dragOverValid(_ref2) {
        var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
        if (!activeSortable.options.swap) return;
        var el = this.sortable.el,
          options = this.options;
        if (target && target !== el) {
          var prevSwapEl = lastSwapEl;
          if (onMove(target) !== false) {
            toggleClass(target, options.swapClass, true);
            lastSwapEl = target;
          } else {
            lastSwapEl = null;
          }
          if (prevSwapEl && prevSwapEl !== lastSwapEl) {
            toggleClass(prevSwapEl, options.swapClass, false);
          }
        }
        changed();
        completed(true);
        cancel();
      },
      drop: function drop(_ref3) {
        var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
        var toSortable = putSortable || this.sortable;
        var options = this.options;
        lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
        if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
          if (dragEl !== lastSwapEl) {
            toSortable.captureAnimationState();
            if (toSortable !== activeSortable) activeSortable.captureAnimationState();
            swapNodes(dragEl, lastSwapEl);
            toSortable.animateAll();
            if (toSortable !== activeSortable) activeSortable.animateAll();
          }
        }
      },
      nulling: function nulling() {
        lastSwapEl = null;
      }
    };
    return _extends(Swap, {
      pluginName: 'swap',
      eventProperties: function eventProperties() {
        return {
          swapItem: lastSwapEl
        };
      }
    });
  }
  function swapNodes(n1, n2) {
    var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
    if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
    i1 = index(n1);
    i2 = index(n2);
    if (p1.isEqualNode(p2) && i1 < i2) {
      i2++;
    }
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
  }
  var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
    multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
    folding = false,
    // Folding any other time
    dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;
  function MultiDragPlugin() {
    function MultiDrag(sortable) {
      // Bind all private methods
      for (var fn in this) {
        if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
          this[fn] = this[fn].bind(this);
        }
      }
      if (!sortable.options.avoidImplicitDeselect) {
        if (sortable.options.supportPointer) {
          on(document, 'pointerup', this._deselectMultiDrag);
        } else {
          on(document, 'mouseup', this._deselectMultiDrag);
          on(document, 'touchend', this._deselectMultiDrag);
        }
      }
      on(document, 'keydown', this._checkKeyDown);
      on(document, 'keyup', this._checkKeyUp);
      this.defaults = {
        selectedClass: 'sortable-selected',
        multiDragKey: null,
        avoidImplicitDeselect: false,
        setData: function setData(dataTransfer, dragEl) {
          var data = '';
          if (multiDragElements.length && multiDragSortable === sortable) {
            multiDragElements.forEach(function (multiDragElement, i) {
              data += (!i ? '' : ', ') + multiDragElement.textContent;
            });
          } else {
            data = dragEl.textContent;
          }
          dataTransfer.setData('Text', data);
        }
      };
    }
    MultiDrag.prototype = {
      multiDragKeyDown: false,
      isMultiDrag: false,
      delayStartGlobal: function delayStartGlobal(_ref) {
        var dragged = _ref.dragEl;
        dragEl$1 = dragged;
      },
      delayEnded: function delayEnded() {
        this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
      },
      setupClone: function setupClone(_ref2) {
        var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
        if (!this.isMultiDrag) return;
        for (var i = 0; i < multiDragElements.length; i++) {
          multiDragClones.push(clone(multiDragElements[i]));
          multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
          multiDragClones[i].draggable = false;
          multiDragClones[i].style['will-change'] = '';
          toggleClass(multiDragClones[i], this.options.selectedClass, false);
          multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
        }
        sortable._hideClone();
        cancel();
      },
      clone: function clone(_ref3) {
        var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
        if (!this.isMultiDrag) return;
        if (!this.options.removeCloneOnHide) {
          if (multiDragElements.length && multiDragSortable === sortable) {
            insertMultiDragClones(true, rootEl);
            dispatchSortableEvent('clone');
            cancel();
          }
        }
      },
      showClone: function showClone(_ref4) {
        var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
        if (!this.isMultiDrag) return;
        insertMultiDragClones(false, rootEl);
        multiDragClones.forEach(function (clone) {
          css(clone, 'display', '');
        });
        cloneNowShown();
        clonesHidden = false;
        cancel();
      },
      hideClone: function hideClone(_ref5) {
        var _this = this;
        var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
        if (!this.isMultiDrag) return;
        multiDragClones.forEach(function (clone) {
          css(clone, 'display', 'none');
          if (_this.options.removeCloneOnHide && clone.parentNode) {
            clone.parentNode.removeChild(clone);
          }
        });
        cloneNowHidden();
        clonesHidden = true;
        cancel();
      },
      dragStartGlobal: function dragStartGlobal(_ref6) {
        var sortable = _ref6.sortable;
        if (!this.isMultiDrag && multiDragSortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();
        }
        multiDragElements.forEach(function (multiDragElement) {
          multiDragElement.sortableIndex = index(multiDragElement);
        }); // Sort multi-drag elements

        multiDragElements = multiDragElements.sort(function (a, b) {
          return a.sortableIndex - b.sortableIndex;
        });
        dragStarted = true;
      },
      dragStarted: function dragStarted(_ref7) {
        var _this2 = this;
        var sortable = _ref7.sortable;
        if (!this.isMultiDrag) return;
        if (this.options.sort) {
          // Capture rects,
          // hide multi drag elements (by positioning them absolute),
          // set multi drag elements rects to dragRect,
          // show multi drag elements,
          // animate to rects,
          // unset rects & remove from DOM
          sortable.captureAnimationState();
          if (this.options.animation) {
            multiDragElements.forEach(function (multiDragElement) {
              if (multiDragElement === dragEl$1) return;
              css(multiDragElement, 'position', 'absolute');
            });
            var dragRect = getRect(dragEl$1, false, true, true);
            multiDragElements.forEach(function (multiDragElement) {
              if (multiDragElement === dragEl$1) return;
              setRect(multiDragElement, dragRect);
            });
            folding = true;
            initialFolding = true;
          }
        }
        sortable.animateAll(function () {
          folding = false;
          initialFolding = false;
          if (_this2.options.animation) {
            multiDragElements.forEach(function (multiDragElement) {
              unsetRect(multiDragElement);
            });
          } // Remove all auxiliary multidrag items from el, if sorting enabled

          if (_this2.options.sort) {
            removeMultiDragElements();
          }
        });
      },
      dragOver: function dragOver(_ref8) {
        var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;
        if (folding && ~multiDragElements.indexOf(target)) {
          completed(false);
          cancel();
        }
      },
      revert: function revert(_ref9) {
        var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;
        if (multiDragElements.length > 1) {
          // Setup unfold animation
          multiDragElements.forEach(function (multiDragElement) {
            sortable.addAnimationState({
              target: multiDragElement,
              rect: folding ? getRect(multiDragElement) : dragRect
            });
            unsetRect(multiDragElement);
            multiDragElement.fromRect = dragRect;
            fromSortable.removeAnimationState(multiDragElement);
          });
          folding = false;
          insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
        }
      },
      dragOverCompleted: function dragOverCompleted(_ref10) {
        var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
        var options = this.options;
        if (insertion) {
          // Clones must be hidden before folding animation to capture dragRectAbsolute properly
          if (isOwner) {
            activeSortable._hideClone();
          }
          initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

          if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
            // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
            var dragRectAbsolute = getRect(dragEl$1, false, true, true);
            multiDragElements.forEach(function (multiDragElement) {
              if (multiDragElement === dragEl$1) return;
              setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
              // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

              parentEl.appendChild(multiDragElement);
            });
            folding = true;
          } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out

          if (!isOwner) {
            // Only remove if not folding (folding will remove them anyways)
            if (!folding) {
              removeMultiDragElements();
            }
            if (multiDragElements.length > 1) {
              var clonesHiddenBefore = clonesHidden;
              activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden

              if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
                multiDragClones.forEach(function (clone) {
                  activeSortable.addAnimationState({
                    target: clone,
                    rect: clonesFromRect
                  });
                  clone.fromRect = clonesFromRect;
                  clone.thisAnimationDuration = null;
                });
              }
            } else {
              activeSortable._showClone(sortable);
            }
          }
        }
      },
      dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
        var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
        multiDragElements.forEach(function (multiDragElement) {
          multiDragElement.thisAnimationDuration = null;
        });
        if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
          clonesFromRect = _extends({}, dragRect);
          var dragMatrix = matrix(dragEl$1, true);
          clonesFromRect.top -= dragMatrix.f;
          clonesFromRect.left -= dragMatrix.e;
        }
      },
      dragOverAnimationComplete: function dragOverAnimationComplete() {
        if (folding) {
          folding = false;
          removeMultiDragElements();
        }
      },
      drop: function drop(_ref12) {
        var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
        var toSortable = putSortable || this.sortable;
        if (!evt) return;
        var options = this.options,
          children = parentEl.children; // Multi-drag selection

        if (!dragStarted) {
          if (options.multiDragKey && !this.multiDragKeyDown) {
            this._deselectMultiDrag();
          }
          toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
          if (!~multiDragElements.indexOf(dragEl$1)) {
            multiDragElements.push(dragEl$1);
            dispatchEvent({
              sortable: sortable,
              rootEl: rootEl,
              name: 'select',
              targetEl: dragEl$1,
              originalEvent: evt
            }); // Modifier activated, select from last to dragEl

            if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
              var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);
              if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
                // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                // (but previous selection existed)
                var n, i;
                if (currentIndex > lastIndex) {
                  i = lastIndex;
                  n = currentIndex;
                } else {
                  i = currentIndex;
                  n = lastIndex + 1;
                }
                for (; i < n; i++) {
                  if (~multiDragElements.indexOf(children[i])) continue;
                  toggleClass(children[i], options.selectedClass, true);
                  multiDragElements.push(children[i]);
                  dispatchEvent({
                    sortable: sortable,
                    rootEl: rootEl,
                    name: 'select',
                    targetEl: children[i],
                    originalEvent: evt
                  });
                }
              }
            } else {
              lastMultiDragSelect = dragEl$1;
            }
            multiDragSortable = toSortable;
          } else {
            multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
            lastMultiDragSelect = null;
            dispatchEvent({
              sortable: sortable,
              rootEl: rootEl,
              name: 'deselect',
              targetEl: dragEl$1,
              originalEvent: evt
            });
          }
        } // Multi-drag drop

        if (dragStarted && this.isMultiDrag) {
          folding = false; // Do not "unfold" after around dragEl if reverted

          if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
            var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
            if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
            toSortable.captureAnimationState();
            if (!initialFolding) {
              if (options.animation) {
                dragEl$1.fromRect = dragRect;
                multiDragElements.forEach(function (multiDragElement) {
                  multiDragElement.thisAnimationDuration = null;
                  if (multiDragElement !== dragEl$1) {
                    var rect = folding ? getRect(multiDragElement) : dragRect;
                    multiDragElement.fromRect = rect; // Prepare unfold animation

                    toSortable.addAnimationState({
                      target: multiDragElement,
                      rect: rect
                    });
                  }
                });
              } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
              // properly they must all be removed

              removeMultiDragElements();
              multiDragElements.forEach(function (multiDragElement) {
                if (children[multiDragIndex]) {
                  parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
                } else {
                  parentEl.appendChild(multiDragElement);
                }
                multiDragIndex++;
              }); // If initial folding is done, the elements may have changed position because they are now
              // unfolding around dragEl, even though dragEl may not have his index changed, so update event
              // must be fired here as Sortable will not.

              if (oldIndex === index(dragEl$1)) {
                var update = false;
                multiDragElements.forEach(function (multiDragElement) {
                  if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                    update = true;
                    return;
                  }
                });
                if (update) {
                  dispatchSortableEvent('update');
                }
              }
            } // Must be done after capturing individual rects (scroll bar)

            multiDragElements.forEach(function (multiDragElement) {
              unsetRect(multiDragElement);
            });
            toSortable.animateAll();
          }
          multiDragSortable = toSortable;
        } // Remove clones if necessary

        if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
          multiDragClones.forEach(function (clone) {
            clone.parentNode && clone.parentNode.removeChild(clone);
          });
        }
      },
      nullingGlobal: function nullingGlobal() {
        this.isMultiDrag = dragStarted = false;
        multiDragClones.length = 0;
      },
      destroyGlobal: function destroyGlobal() {
        this._deselectMultiDrag();
        off(document, 'pointerup', this._deselectMultiDrag);
        off(document, 'mouseup', this._deselectMultiDrag);
        off(document, 'touchend', this._deselectMultiDrag);
        off(document, 'keydown', this._checkKeyDown);
        off(document, 'keyup', this._checkKeyUp);
      },
      _deselectMultiDrag: function _deselectMultiDrag(evt) {
        if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

        if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

        if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

        if (evt && evt.button !== 0) return;
        while (multiDragElements.length) {
          var el = multiDragElements[0];
          toggleClass(el, this.options.selectedClass, false);
          multiDragElements.shift();
          dispatchEvent({
            sortable: this.sortable,
            rootEl: this.sortable.el,
            name: 'deselect',
            targetEl: el,
            originalEvent: evt
          });
        }
      },
      _checkKeyDown: function _checkKeyDown(evt) {
        if (evt.key === this.options.multiDragKey) {
          this.multiDragKeyDown = true;
        }
      },
      _checkKeyUp: function _checkKeyUp(evt) {
        if (evt.key === this.options.multiDragKey) {
          this.multiDragKeyDown = false;
        }
      }
    };
    return _extends(MultiDrag, {
      // Static methods & properties
      pluginName: 'multiDrag',
      utils: {
        /**
         * Selects the provided multi-drag item
         * @param  {HTMLElement} el    The element to be selected
         */
        select: function select(el) {
          var sortable = el.parentNode[expando];
          if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
          if (multiDragSortable && multiDragSortable !== sortable) {
            multiDragSortable.multiDrag._deselectMultiDrag();
            multiDragSortable = sortable;
          }
          toggleClass(el, sortable.options.selectedClass, true);
          multiDragElements.push(el);
        },
        /**
         * Deselects the provided multi-drag item
         * @param  {HTMLElement} el    The element to be deselected
         */
        deselect: function deselect(el) {
          var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
          if (!sortable || !sortable.options.multiDrag || !~index) return;
          toggleClass(el, sortable.options.selectedClass, false);
          multiDragElements.splice(index, 1);
        }
      },
      eventProperties: function eventProperties() {
        var _this3 = this;
        var oldIndicies = [],
          newIndicies = [];
        multiDragElements.forEach(function (multiDragElement) {
          oldIndicies.push({
            multiDragElement: multiDragElement,
            index: multiDragElement.sortableIndex
          }); // multiDragElements will already be sorted if folding

          var newIndex;
          if (folding && multiDragElement !== dragEl$1) {
            newIndex = -1;
          } else if (folding) {
            newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
          } else {
            newIndex = index(multiDragElement);
          }
          newIndicies.push({
            multiDragElement: multiDragElement,
            index: newIndex
          });
        });
        return {
          items: _toConsumableArray(multiDragElements),
          clones: [].concat(multiDragClones),
          oldIndicies: oldIndicies,
          newIndicies: newIndicies
        };
      },
      optionListeners: {
        multiDragKey: function multiDragKey(key) {
          key = key.toLowerCase();
          if (key === 'ctrl') {
            key = 'Control';
          } else if (key.length > 1) {
            key = key.charAt(0).toUpperCase() + key.substr(1);
          }
          return key;
        }
      }
    });
  }
  function insertMultiDragElements(clonesInserted, rootEl) {
    multiDragElements.forEach(function (multiDragElement, i) {
      var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
      if (target) {
        rootEl.insertBefore(multiDragElement, target);
      } else {
        rootEl.appendChild(multiDragElement);
      }
    });
  }
  /**
   * Insert multi-drag clones
   * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
   * @param  {HTMLElement} rootEl
   */

  function insertMultiDragClones(elementsInserted, rootEl) {
    multiDragClones.forEach(function (clone, i) {
      var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
      if (target) {
        rootEl.insertBefore(clone, target);
      } else {
        rootEl.appendChild(clone);
      }
    });
  }
  function removeMultiDragElements() {
    multiDragElements.forEach(function (multiDragElement) {
      if (multiDragElement === dragEl$1) return;
      multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
    });
  }
  Sortable.mount(new AutoScrollPlugin());
  Sortable.mount(Remove, Revert);
  Sortable.mount(new SwapPlugin());
  Sortable.mount(new MultiDragPlugin());
  return Sortable;
});
(function (factory) {
  "use strict";

  var sortable,
    jq,
    _this = this;
  if (typeof define === "function" && define.amd) {
    try {
      define(["sortablejs", "jquery"], function (Sortable, $) {
        sortable = Sortable;
        jq = $;
        checkErrors();
        factory(Sortable, $);
      });
    } catch (err) {
      checkErrors();
    }
    return;
  } else if (typeof exports === 'object') {
    try {
      sortable = require('sortablejs');
      jq = require('jquery');
    } catch (err) {}
  }
  if (typeof jQuery === 'function' || typeof $ === 'function') {
    jq = jQuery || $;
  }
  if (typeof Sortable !== 'undefined') {
    sortable = Sortable;
  }
  function checkErrors() {
    if (!jq) {
      throw new Error('jQuery is required for jquery-sortablejs');
    }
    if (!sortable) {
      throw new Error('SortableJS is required for jquery-sortablejs (https://github.com/SortableJS/Sortable)');
    }
  }
  checkErrors();
  factory(sortable, jq);
})(function (Sortable, $) {
  "use strict";

  $.fn.sortable = function (options) {
    var retVal,
      args = arguments;
    this.each(function () {
      var $el = $(this),
        sortable = $el.data('sortable');
      if (!sortable && (options instanceof Object || !options)) {
        sortable = new Sortable(this, options);
        $el.data('sortable', sortable);
      } else if (sortable) {
        if (options === 'destroy') {
          sortable.destroy();
          $el.removeData('sortable');
        } else if (options === 'widget') {
          retVal = sortable;
        } else if (typeof sortable[options] === 'function') {
          retVal = sortable[options].apply(sortable, [].slice.call(args, 1));
        } else if (options in sortable.options) {
          retVal = sortable.option.apply(sortable, args);
        }
      }
    });
    return retVal === void 0 ? this : retVal;
  };
});

/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.5
 * @url craig.is/killing/mice
 */
(function (window, document, undefined) {
  // Check if mousetrap is used inside browser, if not, return
  if (!window) {
    return;
  }

  /**
   * mapping of special keycodes to their corresponding keys
   *
   * everything in this dictionary cannot use keypress events
   * so it has to be here to map to the correct keycodes for
   * keyup/keydown events
   *
   * @type {Object}
   */
  var _MAP = {
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    20: 'capslock',
    27: 'esc',
    32: 'space',
    33: 'pageup',
    34: 'pagedown',
    35: 'end',
    36: 'home',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    45: 'ins',
    46: 'del',
    91: 'meta',
    93: 'meta',
    224: 'meta'
  };

  /**
   * mapping for special characters so they can support
   *
   * this dictionary is only used incase you want to bind a
   * keyup or keydown event to one of these keys
   *
   * @type {Object}
   */
  var _KEYCODE_MAP = {
    106: '*',
    107: '+',
    109: '-',
    110: '.',
    111: '/',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: '\''
  };

  /**
   * this is a mapping of keys that require shift on a US keypad
   * back to the non shift equivelents
   *
   * this is so you can use keyup events with these keys
   *
   * note that this will only work reliably on US keyboards
   *
   * @type {Object}
   */
  var _SHIFT_MAP = {
    '~': '`',
    '!': '1',
    '@': '2',
    '#': '3',
    '$': '4',
    '%': '5',
    '^': '6',
    '&': '7',
    '*': '8',
    '(': '9',
    ')': '0',
    '_': '-',
    '+': '=',
    ':': ';',
    '\"': '\'',
    '<': ',',
    '>': '.',
    '?': '/',
    '|': '\\'
  };

  /**
   * this is a list of special strings you can use to map
   * to modifier keys when you specify your keyboard shortcuts
   *
   * @type {Object}
   */
  var _SPECIAL_ALIASES = {
    'option': 'alt',
    'command': 'meta',
    'return': 'enter',
    'escape': 'esc',
    'plus': '+',
    'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
  };

  /**
   * variable to store the flipped version of _MAP from above
   * needed to check if we should use keypress or not when no action
   * is specified
   *
   * @type {Object|undefined}
   */
  var _REVERSE_MAP;

  /**
   * loop through the f keys, f1 to f19 and add them to the map
   * programatically
   */
  for (var i = 1; i < 20; ++i) {
    _MAP[111 + i] = 'f' + i;
  }

  /**
   * loop through to map numbers on the numeric keypad
   */
  for (i = 0; i <= 9; ++i) {
    // This needs to use a string cause otherwise since 0 is falsey
    // mousetrap will never fire for numpad 0 pressed as part of a keydown
    // event.
    //
    // @see https://github.com/ccampbell/mousetrap/pull/258
    _MAP[i + 96] = i.toString();
  }

  /**
   * cross browser add event method
   *
   * @param {Element|HTMLDocument} object
   * @param {string} type
   * @param {Function} callback
   * @returns void
   */
  function _addEvent(object, type, callback) {
    if (object.addEventListener) {
      object.addEventListener(type, callback, false);
      return;
    }
    object.attachEvent('on' + type, callback);
  }

  /**
   * takes the event and returns the key character
   *
   * @param {Event} e
   * @return {string}
   */
  function _characterFromEvent(e) {
    // for keypress events we should return the character as is
    if (e.type == 'keypress') {
      var character = String.fromCharCode(e.which);

      // if the shift key is not pressed then it is safe to assume
      // that we want the character to be lowercase.  this means if
      // you accidentally have caps lock on then your key bindings
      // will continue to work
      //
      // the only side effect that might not be desired is if you
      // bind something like 'A' cause you want to trigger an
      // event when capital A is pressed caps lock will no longer
      // trigger the event.  shift+a will though.
      if (!e.shiftKey) {
        character = character.toLowerCase();
      }
      return character;
    }

    // for non keypress events the special maps are needed
    if (_MAP[e.which]) {
      return _MAP[e.which];
    }
    if (_KEYCODE_MAP[e.which]) {
      return _KEYCODE_MAP[e.which];
    }

    // if it is not in the special map

    // with keydown and keyup events the character seems to always
    // come in as an uppercase character whether you are pressing shift
    // or not.  we should make sure it is always lowercase for comparisons
    return String.fromCharCode(e.which).toLowerCase();
  }

  /**
   * checks if two arrays are equal
   *
   * @param {Array} modifiers1
   * @param {Array} modifiers2
   * @returns {boolean}
   */
  function _modifiersMatch(modifiers1, modifiers2) {
    return modifiers1.sort().join(',') === modifiers2.sort().join(',');
  }

  /**
   * takes a key event and figures out what the modifiers are
   *
   * @param {Event} e
   * @returns {Array}
   */
  function _eventModifiers(e) {
    var modifiers = [];
    if (e.shiftKey) {
      modifiers.push('shift');
    }
    if (e.altKey) {
      modifiers.push('alt');
    }
    if (e.ctrlKey) {
      modifiers.push('ctrl');
    }
    if (e.metaKey) {
      modifiers.push('meta');
    }
    return modifiers;
  }

  /**
   * prevents default for this event
   *
   * @param {Event} e
   * @returns void
   */
  function _preventDefault(e) {
    if (e.preventDefault) {
      e.preventDefault();
      return;
    }
    e.returnValue = false;
  }

  /**
   * stops propogation for this event
   *
   * @param {Event} e
   * @returns void
   */
  function _stopPropagation(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
      return;
    }
    e.cancelBubble = true;
  }

  /**
   * determines if the keycode specified is a modifier key or not
   *
   * @param {string} key
   * @returns {boolean}
   */
  function _isModifier(key) {
    return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
  }

  /**
   * reverses the map lookup so that we can look for specific keys
   * to see what can and can't use keypress
   *
   * @return {Object}
   */
  function _getReverseMap() {
    if (!_REVERSE_MAP) {
      _REVERSE_MAP = {};
      for (var key in _MAP) {
        // pull out the numeric keypad from here cause keypress should
        // be able to detect the keys from the character
        if (key > 95 && key < 112) {
          continue;
        }
        if (_MAP.hasOwnProperty(key)) {
          _REVERSE_MAP[_MAP[key]] = key;
        }
      }
    }
    return _REVERSE_MAP;
  }

  /**
   * picks the best action based on the key combination
   *
   * @param {string} key - character for key
   * @param {Array} modifiers
   * @param {string=} action passed in
   */
  function _pickBestAction(key, modifiers, action) {
    // if no action was picked in we should try to pick the one
    // that we think would work best for this key
    if (!action) {
      action = _getReverseMap()[key] ? 'keydown' : 'keypress';
    }

    // modifier keys don't work as expected with keypress,
    // switch to keydown
    if (action == 'keypress' && modifiers.length) {
      action = 'keydown';
    }
    return action;
  }

  /**
   * Converts from a string key combination to an array
   *
   * @param  {string} combination like "command+shift+l"
   * @return {Array}
   */
  function _keysFromString(combination) {
    if (combination === '+') {
      return ['+'];
    }
    combination = combination.replace(/\+{2}/g, '+plus');
    return combination.split('+');
  }

  /**
   * Gets info for a specific key combination
   *
   * @param  {string} combination key combination ("command+s" or "a" or "*")
   * @param  {string=} action
   * @returns {Object}
   */
  function _getKeyInfo(combination, action) {
    var keys;
    var key;
    var i;
    var modifiers = [];

    // take the keys from this pattern and figure out what the actual
    // pattern is all about
    keys = _keysFromString(combination);
    for (i = 0; i < keys.length; ++i) {
      key = keys[i];

      // normalize key names
      if (_SPECIAL_ALIASES[key]) {
        key = _SPECIAL_ALIASES[key];
      }

      // if this is not a keypress event then we should
      // be smart about using shift keys
      // this will only work for US keyboards however
      if (action && action != 'keypress' && _SHIFT_MAP[key]) {
        key = _SHIFT_MAP[key];
        modifiers.push('shift');
      }

      // if this key is a modifier then add it to the list of modifiers
      if (_isModifier(key)) {
        modifiers.push(key);
      }
    }

    // depending on what the key combination is
    // we will try to pick the best event for it
    action = _pickBestAction(key, modifiers, action);
    return {
      key: key,
      modifiers: modifiers,
      action: action
    };
  }
  function _belongsTo(element, ancestor) {
    if (element === null || element === document) {
      return false;
    }
    if (element === ancestor) {
      return true;
    }
    return _belongsTo(element.parentNode, ancestor);
  }
  function Mousetrap(targetElement) {
    var self = this;
    targetElement = targetElement || document;
    if (!(self instanceof Mousetrap)) {
      return new Mousetrap(targetElement);
    }

    /**
     * element to attach key events to
     *
     * @type {Element}
     */
    self.target = targetElement;

    /**
     * a list of all the callbacks setup via Mousetrap.bind()
     *
     * @type {Object}
     */
    self._callbacks = {};

    /**
     * direct map of string combinations to callbacks used for trigger()
     *
     * @type {Object}
     */
    self._directMap = {};

    /**
     * keeps track of what level each sequence is at since multiple
     * sequences can start out with the same sequence
     *
     * @type {Object}
     */
    var _sequenceLevels = {};

    /**
     * variable to store the setTimeout call
     *
     * @type {null|number}
     */
    var _resetTimer;

    /**
     * temporary state where we will ignore the next keyup
     *
     * @type {boolean|string}
     */
    var _ignoreNextKeyup = false;

    /**
     * temporary state where we will ignore the next keypress
     *
     * @type {boolean}
     */
    var _ignoreNextKeypress = false;

    /**
     * are we currently inside of a sequence?
     * type of action ("keyup" or "keydown" or "keypress") or false
     *
     * @type {boolean|string}
     */
    var _nextExpectedAction = false;

    /**
     * resets all sequence counters except for the ones passed in
     *
     * @param {Object} doNotReset
     * @returns void
     */
    function _resetSequences(doNotReset) {
      doNotReset = doNotReset || {};
      var activeSequences = false,
        key;
      for (key in _sequenceLevels) {
        if (doNotReset[key]) {
          activeSequences = true;
          continue;
        }
        _sequenceLevels[key] = 0;
      }
      if (!activeSequences) {
        _nextExpectedAction = false;
      }
    }

    /**
     * finds all callbacks that match based on the keycode, modifiers,
     * and action
     *
     * @param {string} character
     * @param {Array} modifiers
     * @param {Event|Object} e
     * @param {string=} sequenceName - name of the sequence we are looking for
     * @param {string=} combination
     * @param {number=} level
     * @returns {Array}
     */
    function _getMatches(character, modifiers, e, sequenceName, combination, level) {
      var i;
      var callback;
      var matches = [];
      var action = e.type;

      // if there are no events related to this keycode
      if (!self._callbacks[character]) {
        return [];
      }

      // if a modifier key is coming up on its own we should allow it
      if (action == 'keyup' && _isModifier(character)) {
        modifiers = [character];
      }

      // loop through all callbacks for the key that was pressed
      // and see if any of them match
      for (i = 0; i < self._callbacks[character].length; ++i) {
        callback = self._callbacks[character][i];

        // if a sequence name is not specified, but this is a sequence at
        // the wrong level then move onto the next match
        if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
          continue;
        }

        // if the action we are looking for doesn't match the action we got
        // then we should keep going
        if (action != callback.action) {
          continue;
        }

        // if this is a keypress event and the meta key and control key
        // are not pressed that means that we need to only look at the
        // character, otherwise check the modifiers as well
        //
        // chrome will not fire a keypress if meta or control is down
        // safari will fire a keypress if meta or meta+shift is down
        // firefox will fire a keypress if meta or control is down
        if (action == 'keypress' && !e.metaKey && !e.ctrlKey || _modifiersMatch(modifiers, callback.modifiers)) {
          // when you bind a combination or sequence a second time it
          // should overwrite the first one.  if a sequenceName or
          // combination is specified in this call it does just that
          //
          // @todo make deleting its own method?
          var deleteCombo = !sequenceName && callback.combo == combination;
          var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
          if (deleteCombo || deleteSequence) {
            self._callbacks[character].splice(i, 1);
          }
          matches.push(callback);
        }
      }
      return matches;
    }

    /**
     * actually calls the callback function
     *
     * if your callback function returns false this will use the jquery
     * convention - prevent default and stop propogation on the event
     *
     * @param {Function} callback
     * @param {Event} e
     * @returns void
     */
    function _fireCallback(callback, e, combo, sequence) {
      // if this event should not happen stop here
      if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
        return;
      }
      if (callback(e, combo) === false) {
        _preventDefault(e);
        _stopPropagation(e);
      }
    }

    /**
     * handles a character key event
     *
     * @param {string} character
     * @param {Array} modifiers
     * @param {Event} e
     * @returns void
     */
    self._handleKey = function (character, modifiers, e) {
      var callbacks = _getMatches(character, modifiers, e);
      var i;
      var doNotReset = {};
      var maxLevel = 0;
      var processedSequenceCallback = false;

      // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
      for (i = 0; i < callbacks.length; ++i) {
        if (callbacks[i].seq) {
          maxLevel = Math.max(maxLevel, callbacks[i].level);
        }
      }

      // loop through matching callbacks for this key event
      for (i = 0; i < callbacks.length; ++i) {
        // fire for all sequence callbacks
        // this is because if for example you have multiple sequences
        // bound such as "g i" and "g t" they both need to fire the
        // callback for matching g cause otherwise you can only ever
        // match the first one
        if (callbacks[i].seq) {
          // only fire callbacks for the maxLevel to prevent
          // subsequences from also firing
          //
          // for example 'a option b' should not cause 'option b' to fire
          // even though 'option b' is part of the other sequence
          //
          // any sequences that do not match here will be discarded
          // below by the _resetSequences call
          if (callbacks[i].level != maxLevel) {
            continue;
          }
          processedSequenceCallback = true;

          // keep a list of which sequences were matches for later
          doNotReset[callbacks[i].seq] = 1;
          _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
          continue;
        }

        // if there were no sequence matches but we are still here
        // that means this is a regular match so we should fire that
        if (!processedSequenceCallback) {
          _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
        }
      }

      // if the key you pressed matches the type of sequence without
      // being a modifier (ie "keyup" or "keypress") then we should
      // reset all sequences that were not matched by this event
      //
      // this is so, for example, if you have the sequence "h a t" and you
      // type "h e a r t" it does not match.  in this case the "e" will
      // cause the sequence to reset
      //
      // modifier keys are ignored because you can have a sequence
      // that contains modifiers such as "enter ctrl+space" and in most
      // cases the modifier key will be pressed before the next key
      //
      // also if you have a sequence such as "ctrl+b a" then pressing the
      // "b" key will trigger a "keypress" and a "keydown"
      //
      // the "keydown" is expected when there is a modifier, but the
      // "keypress" ends up matching the _nextExpectedAction since it occurs
      // after and that causes the sequence to reset
      //
      // we ignore keypresses in a sequence that directly follow a keydown
      // for the same character
      var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
      if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
        _resetSequences(doNotReset);
      }
      _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
    };

    /**
     * handles a keydown event
     *
     * @param {Event} e
     * @returns void
     */
    function _handleKeyEvent(e) {
      // normalize e.which for key events
      // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
      if (typeof e.which !== 'number') {
        e.which = e.keyCode;
      }
      var character = _characterFromEvent(e);

      // no character found then stop
      if (!character) {
        return;
      }

      // need to use === for the character check because the character can be 0
      if (e.type == 'keyup' && _ignoreNextKeyup === character) {
        _ignoreNextKeyup = false;
        return;
      }
      self.handleKey(character, _eventModifiers(e), e);
    }

    /**
     * called to set a 1 second timeout on the specified sequence
     *
     * this is so after each key press in the sequence you have 1 second
     * to press the next key before you have to start over
     *
     * @returns void
     */
    function _resetSequenceTimer() {
      clearTimeout(_resetTimer);
      _resetTimer = setTimeout(_resetSequences, 1000);
    }

    /**
     * binds a key sequence to an event
     *
     * @param {string} combo - combo specified in bind call
     * @param {Array} keys
     * @param {Function} callback
     * @param {string=} action
     * @returns void
     */
    function _bindSequence(combo, keys, callback, action) {
      // start off by adding a sequence level record for this combination
      // and setting the level to 0
      _sequenceLevels[combo] = 0;

      /**
       * callback to increase the sequence level for this sequence and reset
       * all other sequences that were active
       *
       * @param {string} nextAction
       * @returns {Function}
       */
      function _increaseSequence(nextAction) {
        return function () {
          _nextExpectedAction = nextAction;
          ++_sequenceLevels[combo];
          _resetSequenceTimer();
        };
      }

      /**
       * wraps the specified callback inside of another function in order
       * to reset all sequence counters as soon as this sequence is done
       *
       * @param {Event} e
       * @returns void
       */
      function _callbackAndReset(e) {
        _fireCallback(callback, e, combo);

        // we should ignore the next key up if the action is key down
        // or keypress.  this is so if you finish a sequence and
        // release the key the final key will not trigger a keyup
        if (action !== 'keyup') {
          _ignoreNextKeyup = _characterFromEvent(e);
        }

        // weird race condition if a sequence ends with the key
        // another sequence begins with
        setTimeout(_resetSequences, 10);
      }

      // loop through keys one at a time and bind the appropriate callback
      // function.  for any key leading up to the final one it should
      // increase the sequence. after the final, it should reset all sequences
      //
      // if an action is specified in the original bind call then that will
      // be used throughout.  otherwise we will pass the action that the
      // next key in the sequence should match.  this allows a sequence
      // to mix and match keypress and keydown events depending on which
      // ones are better suited to the key provided
      for (var i = 0; i < keys.length; ++i) {
        var isFinal = i + 1 === keys.length;
        var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
        _bindSingle(keys[i], wrappedCallback, action, combo, i);
      }
    }

    /**
     * binds a single keyboard combination
     *
     * @param {string} combination
     * @param {Function} callback
     * @param {string=} action
     * @param {string=} sequenceName - name of sequence if part of sequence
     * @param {number=} level - what part of the sequence the command is
     * @returns void
     */
    function _bindSingle(combination, callback, action, sequenceName, level) {
      // store a direct mapped reference for use with Mousetrap.trigger
      self._directMap[combination + ':' + action] = callback;

      // make sure multiple spaces in a row become a single space
      combination = combination.replace(/\s+/g, ' ');
      var sequence = combination.split(' ');
      var info;

      // if this pattern is a sequence of keys then run through this method
      // to reprocess each pattern one key at a time
      if (sequence.length > 1) {
        _bindSequence(combination, sequence, callback, action);
        return;
      }
      info = _getKeyInfo(combination, action);

      // make sure to initialize array if this is the first time
      // a callback is added for this key
      self._callbacks[info.key] = self._callbacks[info.key] || [];

      // remove an existing match if there is one
      _getMatches(info.key, info.modifiers, {
        type: info.action
      }, sequenceName, combination, level);

      // add this call back to the array
      // if it is a sequence put it at the beginning
      // if not put it at the end
      //
      // this is important because the way these are processed expects
      // the sequence ones to come first
      self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
        callback: callback,
        modifiers: info.modifiers,
        action: info.action,
        seq: sequenceName,
        level: level,
        combo: combination
      });
    }

    /**
     * binds multiple combinations to the same callback
     *
     * @param {Array} combinations
     * @param {Function} callback
     * @param {string|undefined} action
     * @returns void
     */
    self._bindMultiple = function (combinations, callback, action) {
      for (var i = 0; i < combinations.length; ++i) {
        _bindSingle(combinations[i], callback, action);
      }
    };

    // start!
    _addEvent(targetElement, 'keypress', _handleKeyEvent);
    _addEvent(targetElement, 'keydown', _handleKeyEvent);
    _addEvent(targetElement, 'keyup', _handleKeyEvent);
  }

  /**
   * binds an event to mousetrap
   *
   * can be a single key, a combination of keys separated with +,
   * an array of keys, or a sequence of keys separated by spaces
   *
   * be sure to list the modifier keys first to make sure that the
   * correct key ends up getting bound (the last key in the pattern)
   *
   * @param {string|Array} keys
   * @param {Function} callback
   * @param {string=} action - 'keypress', 'keydown', or 'keyup'
   * @returns void
   */
  Mousetrap.prototype.bind = function (keys, callback, action) {
    var self = this;
    keys = keys instanceof Array ? keys : [keys];
    self._bindMultiple.call(self, keys, callback, action);
    return self;
  };

  /**
   * unbinds an event to mousetrap
   *
   * the unbinding sets the callback function of the specified key combo
   * to an empty function and deletes the corresponding key in the
   * _directMap dict.
   *
   * TODO: actually remove this from the _callbacks dictionary instead
   * of binding an empty function
   *
   * the keycombo+action has to be exactly the same as
   * it was defined in the bind method
   *
   * @param {string|Array} keys
   * @param {string} action
   * @returns void
   */
  Mousetrap.prototype.unbind = function (keys, action) {
    var self = this;
    return self.bind.call(self, keys, function () {}, action);
  };

  /**
   * triggers an event that has already been bound
   *
   * @param {string} keys
   * @param {string=} action
   * @returns void
   */
  Mousetrap.prototype.trigger = function (keys, action) {
    var self = this;
    if (self._directMap[keys + ':' + action]) {
      self._directMap[keys + ':' + action]({}, keys);
    }
    return self;
  };

  /**
   * resets the library back to its initial state.  this is useful
   * if you want to clear out the current keyboard shortcuts and bind
   * new ones - for example if you switch to another page
   *
   * @returns void
   */
  Mousetrap.prototype.reset = function () {
    var self = this;
    self._callbacks = {};
    self._directMap = {};
    return self;
  };

  /**
   * should we stop this event before firing off callbacks
   *
   * @param {Event} e
   * @param {Element} element
   * @return {boolean}
   */
  Mousetrap.prototype.stopCallback = function (e, element) {
    var self = this;

    // if the element has the class "mousetrap" then no need to stop
    if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
      return false;
    }
    if (_belongsTo(element, self.target)) {
      return false;
    }

    // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
    // not the initial event target in the shadow tree. Note that not all events cross the
    // shadow boundary.
    // For shadow trees with `mode: 'open'`, the initial event target is the first element in
    // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
    // target cannot be obtained.
    if ('composedPath' in e && typeof e.composedPath === 'function') {
      // For open shadow trees, update `element` so that the following check works.
      var initialEventTarget = e.composedPath()[0];
      if (initialEventTarget !== e.target) {
        element = initialEventTarget;
      }
    }

    // stop for input, select, and textarea
    return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
  };

  /**
   * exposes _handleKey publicly so it can be overwritten by extensions
   */
  Mousetrap.prototype.handleKey = function () {
    var self = this;
    return self._handleKey.apply(self, arguments);
  };

  /**
   * allow custom key mappings
   */
  Mousetrap.addKeycodes = function (object) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        _MAP[key] = object[key];
      }
    }
    _REVERSE_MAP = null;
  };

  /**
   * Init the global mousetrap functions
   *
   * This method is needed to allow the global mousetrap functions to work
   * now that mousetrap is a constructor function.
   */
  Mousetrap.init = function () {
    var documentMousetrap = Mousetrap(document);
    for (var method in documentMousetrap) {
      if (method.charAt(0) !== '_') {
        Mousetrap[method] = function (method) {
          return function () {
            return documentMousetrap[method].apply(documentMousetrap, arguments);
          };
        }(method);
      }
    }
  };
  Mousetrap.init();

  // expose mousetrap to the global object
  window.Mousetrap = Mousetrap;

  // expose as a common js module
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Mousetrap;
  }

  // expose mousetrap as an AMD module
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return Mousetrap;
    });
  }
})(typeof window !== 'undefined' ? window : null, typeof window !== 'undefined' ? document : null);

/**
 * adds a pause and unpause method to Mousetrap
 * this allows you to enable or disable keyboard shortcuts
 * without having to reset Mousetrap and rebind everything
 */
/* global Mousetrap:true */
(function (Mousetrap) {
  var _originalStopCallback = Mousetrap.prototype.stopCallback;
  Mousetrap.prototype.stopCallback = function (e, element, combo) {
    var self = this;
    if (self.paused) {
      return true;
    }
    return _originalStopCallback.call(self, e, element, combo);
  };
  Mousetrap.prototype.pause = function () {
    var self = this;
    self.paused = true;
  };
  Mousetrap.prototype.unpause = function () {
    var self = this;
    self.paused = false;
  };
  Mousetrap.init();
})(Mousetrap);