/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(global,factory){"use strict";if(typeof module==="object"&&typeof module.exports==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
})(typeof window!=="undefined"?window:this,function(window,noGlobal){// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";var arr=[];var getProto=Object.getPrototypeOf;var slice=arr.slice;var flat=arr.flat?function(array){return arr.flat.call(array);}:function(array){return arr.concat.apply([],array);};var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};var isFunction=function isFunction(obj){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return typeof obj==="function"&&typeof obj.nodeType!=="number"&&typeof obj.item!=="function";};var isWindow=function isWindow(obj){return obj!=null&&obj===obj.window;};var document=window.document;var preservedScriptAttributes={type:true,src:true,nonce:true,noModule:true};function DOMEval(code,node,doc){doc=doc||document;var i,val,script=doc.createElement("script");script.text=code;if(node){for(i in preservedScriptAttributes){// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
val=node[i]||node.getAttribute&&node.getAttribute(i);if(val){script.setAttribute(i,val);}}}doc.head.appendChild(script).parentNode.removeChild(script);}function toType(obj){if(obj==null){return obj+"";}// Support: Android <=2.3 only (functionish RegExp)
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;}/* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var version="3.7.1",rhtmlSuffix=/HTML$/i,// Define a local copy of jQuery
jQuery=function(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new jQuery.fn.init(selector,context);};jQuery.fn=jQuery.prototype={// The current version of jQuery being used
jquery:version,constructor:jQuery,// The default length of a jQuery object is 0
length:0,toArray:function(){return slice.call(this);},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(num){// Return all the elements in a clean array
if(num==null){return slice.call(this);}// Return just the one element from the set
return num<0?this[num+this.length]:this[num];},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(elems){// Build a new jQuery matched element set
var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
ret.prevObject=this;// Return the newly-formed element set
return ret;},// Execute a callback for every element in the matched set.
each:function(callback){return jQuery.each(this,callback);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},even:function(){return this.pushStack(jQuery.grep(this,function(_elem,i){return(i+1)%2;}));},odd:function(){return this.pushStack(jQuery.grep(this,function(_elem,i){return i%2;}));},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor();},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
if(typeof target!=="object"&&!isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
if((options=arguments[i])!=null){// Extend the base object
for(name in options){copy=options[name];// Prevent Object.prototype pollution
// Prevent never-ending loop
if(name==="__proto__"||target===copy){continue;}// Recurse if we're merging plain objects or arrays
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=Array.isArray(copy)))){src=target[name];// Ensure proper type for the source value
if(copyIsArray&&!Array.isArray(src)){clone=[];}else if(!copyIsArray&&!jQuery.isPlainObject(src)){clone={};}else{clone=src;}copyIsArray=false;// Never move original objects, clone them
target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
return target;};jQuery.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isPlainObject:function(obj){var proto,Ctor;// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
if(!obj||toString.call(obj)!=="[object Object]"){return false;}proto=getProto(obj);// Objects with no prototype (e.g., `Object.create( null )`) are plain
if(!proto){return true;}// Objects with prototype are plain iff they were constructed by a global Object function
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function(obj){var name;for(name in obj){return false;}return true;},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(code,options,doc){DOMEval(code,{nonce:options&&options.nonce},doc);},each:function(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// Retrieve the text value of an array of DOM nodes
text:function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
while(node=elem[i++]){// Do not traverse comment nodes
ret+=jQuery.text(node);}}if(nodeType===1||nodeType===11){return elem.textContent;}if(nodeType===9){return elem.documentElement.textContent;}if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
return ret;},// results is for internal usage only
makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},isXMLDoc:function(elem){var namespace=elem&&elem.namespaceURI,docElem=elem&&(elem.ownerDocument||elem).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!rhtmlSuffix.test(namespace||docElem&&docElem.nodeName||"HTML");},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
// that pass the validator function
for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
map:function(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
return flat(ret);},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(_i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var length=!!obj&&"length"in obj&&obj.length,type=toType(obj);if(isFunction(obj)||isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();}var pop=arr.pop;var sort=arr.sort;var splice=arr.splice;var whitespace="[\\x20\\t\\r\\n\\f]";var rtrimCSS=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g");// Note: an element does not contain itself
jQuery.contains=function(a,b){var bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
a.contains?a.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function fcssescape(ch,asCodePoint){if(asCodePoint){// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
if(ch==="\0"){return"\uFFFD";}// Control characters and (dependent upon position) numbers get escaped as code points
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}// Other potentially-special ASCII characters get backslash-escaped
return"\\"+ch;}jQuery.escapeSelector=function(sel){return(sel+"").replace(rcssescape,fcssescape);};var preferredDoc=document,pushNative=push;(function(){var i,Expr,outermostContext,sortInput,hasDuplicate,push=pushNative,// Local document vars
document,documentElement,documentIsHTML,rbuggyQSA,matches,// Instance-specific data
expando=jQuery.expando,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),nonnativeSelectorCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}return 0;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|"+"loop|multiple|open|readonly|required|scoped",// Regular expressions
// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
identifier="(?:\\\\[\\da-fA-F]{1,6}"+whitespace+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
// 1. quoted (capture 3; capture 4 or capture 5)
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
rwhitespace=new RegExp(whitespace+"+","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rleadingCombinator=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rdescend=new RegExp(whitespace+"|>"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={ID:new RegExp("^#("+identifier+")"),CLASS:new RegExp("^\\.("+identifier+")"),TAG:new RegExp("^("+identifier+"|[*])"),ATTR:new RegExp("^"+attributes),PSEUDO:new RegExp("^"+pseudos),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),bool:new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,// Easily-parseable/retrievable ID or TAG or CLASS selectors
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,// CSS escapes
// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
runescape=new RegExp("\\\\[\\da-fA-F]{1,6}"+whitespace+"?|\\\\([^\\r\\n\\f])","g"),funescape=function(escape,nonHex){var high="0x"+escape.slice(1)-0x10000;if(nonHex){// Strip the backslash prefix from a non-hex escape sequence
return nonHex;}// Replace a hexadecimal escape sequence with the encoded Unicode code point
// Support: IE <=11+
// For values outside the Basic Multilingual Plane (BMP), manually construct a
// surrogate pair
return high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// Used for iframes; see `setDocument`.
// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
unloadHandler=function(){setDocument();},inDisabledFieldset=addCombinator(function(elem){return elem.disabled===true&&nodeName(elem,"fieldset");},{dir:"parentNode",next:"legend"});// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement(){try{return document.activeElement;}catch(err){}}// Optimize for push.apply( _, NodeList )
try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:function(target,els){pushNative.apply(target,slice.call(els));},call:function(target){pushNative.apply(target,slice.call(arguments,1));}};}function find(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!seed){setDocument(context);context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
if(m=match[1]){// Document context
if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE 9 only
// getElementById can match elements by name instead of ID
if(elem.id===m){push.call(results,elem);return results;}}else{return results;}// Element context
}else{// Support: IE 9 only
// getElementById can match elements by name instead of ID
if(newContext&&(elem=newContext.getElementById(m))&&find.contains(context,elem)&&elem.id===m){push.call(results,elem);return results;}}// Type selector
}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
}else if((m=match[3])&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
if(!nonnativeSelectorCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){newSelector=selector;newContext=context;// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(nodeType===1&&(rdescend.test(selector)||rleadingCombinator.test(selector))){// Expand context for sibling selectors
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;// We can use :scope instead of the ID hack if the browser
// supports it & if we're not changing the context.
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when
// strict-comparing two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
if(newContext!=context||!support.scope){// Capture the context ID, setting it first if necessary
if(nid=context.getAttribute("id")){nid=jQuery.escapeSelector(nid);}else{context.setAttribute("id",nid=expando);}}// Prefix every selector in the list
groups=tokenize(selector);i=groups.length;while(i--){groups[i]=(nid?"#"+nid:":scope")+" "+toSelector(groups[i]);}newSelector=groups.join(",");}try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){nonnativeSelectorCache(selector,true);}finally{if(nid===expando){context.removeAttribute("id");}}}}}// All others
return select(selector.replace(rtrimCSS,"$1"),context,results,seed);}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties
// (see https://github.com/jquery/sizzle/issues/157)
if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function markFunction(fn){fn[expando]=true;return fn;}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{// Remove from its parent by default
if(el.parentNode){el.parentNode.removeChild(el);}// release memory in IE
el=null;}}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function createInputPseudo(type){return function(elem){return nodeName(elem,"input")&&elem.type===type;};}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function createButtonPseudo(type){return function(elem){return(nodeName(elem,"input")||nodeName(elem,"button"))&&elem.type===type;};}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function createDisabledPseudo(disabled){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(elem){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in elem){// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
if(elem.parentNode&&elem.disabled===false){// Option elements defer to a parent optgroup if present
if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}// Support: IE 6 - 11+
// Use the isDisabled shortcut property to check for disabled fieldset ancestors
return elem.isDisabled===disabled||// Where there is no isDisabled, check manually
elem.isDisabled!==!disabled&&inDisabledFieldset(elem)===disabled;}return elem.disabled===disabled;// Try to winnow out elements that can't be disabled before trusting the disabled property.
// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
// even exist on them, let alone have a boolean value.
}else if("label"in elem){return elem.disabled===disabled;}// Remaining elements are neither :enabled nor :disabled
return false;};}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */function setDocument(node){var subWindow,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
if(doc==document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
document=doc;documentElement=document.documentElement;documentIsHTML=!jQuery.isXMLDoc(document);// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
matches=documentElement.matches||documentElement.webkitMatchesSelector||documentElement.msMatchesSelector;// Support: IE 9 - 11+, Edge 12 - 18+
// Accessing iframe documents after unload throws "permission denied" errors
// (see trac-13936).
// Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
// all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
if(documentElement.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
preferredDoc!=document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){// Support: IE 9 - 11+, Edge 12 - 18+
subWindow.addEventListener("unload",unloadHandler);}// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
support.getById=assert(function(el){documentElement.appendChild(el).id=jQuery.expando;return!document.getElementsByName||!document.getElementsByName(jQuery.expando).length;});// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
support.disconnectedMatch=assert(function(el){return matches.call(el,"*");});// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
support.scope=assert(function(){return document.querySelectorAll(":scope");});// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
support.cssHas=assert(function(){try{document.querySelector(":has(*,:jqfake)");return false;}catch(e){return true;}});// ID filter and find
if(support.getById){Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find.ID=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter.ID=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
Expr.find.ID=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){// Verify the id attribute
node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}// Fall back on getElementsByName
elems=context.getElementsByName(id);i=0;while(elem=elems[i++]){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}return[];}};}// Tag
Expr.find.TAG=function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
}else{return context.querySelectorAll(tag);}};// Class
Expr.find.CLASS=function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
	---------------------------------------------------------------------- */ // QSA and matchesSelector support
rbuggyQSA=[];// Build QSA regex
// Regex strategy adopted from Diego Perini
assert(function(el){var input;documentElement.appendChild(el).innerHTML="<a id='"+expando+"' href='' disabled='disabled'></a>"+"<select id='"+expando+"-\r\\' disabled='disabled'>"+"<option selected=''></option></select>";// Support: iOS <=7 - 8 only
// Boolean attributes and "value" are not treated correctly in some XML documents
if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: iOS <=7 - 8 only
if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Support: iOS 8 only
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
documentElement.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
input=document.createElement("input");input.setAttribute("name","");el.appendChild(input);if(!el.querySelectorAll("[name='']").length){rbuggyQSA.push("\\["+whitespace+"*name"+whitespace+"*="+whitespace+"*(?:''|\"\")");}});if(!support.cssHas){// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
rbuggyQSA.push(":has");}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));/* Sorting
	---------------------------------------------------------------------- */ // Document order sorting
sortOrder=function(a,b){// Flag for duplicate removal
if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
compare=(a.ownerDocument||a)==(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
1;// Disconnected nodes
if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
if(a===document||a.ownerDocument==preferredDoc&&find.contains(preferredDoc,a)){return-1;}// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
if(b===document||b.ownerDocument==preferredDoc&&find.contains(preferredDoc,b)){return 1;}// Maintain original order
return sortInput?indexOf.call(sortInput,a)-indexOf.call(sortInput,b):0;}return compare&4?-1:1;};return document;}find.matches=function(expr,elements){return find(expr,null,null,elements);};find.matchesSelector=function(elem,expr){setDocument(elem);if(documentIsHTML&&!nonnativeSelectorCache[expr+" "]&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){nonnativeSelectorCache(expr,true);}}return find(expr,document,null,[elem]).length>0;};find.contains=function(context,elem){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
if((context.ownerDocument||context)!=document){setDocument(context);}return jQuery.contains(context,elem);};find.attr=function(elem,name){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
if((elem.ownerDocument||elem)!=document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (see trac-13807)
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;if(val!==undefined){return val;}return elem.getAttribute(name);};find.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */jQuery.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
hasDuplicate=!support.sortStable;sortInput=!support.sortStable&&slice.call(results,0);sort.call(results,sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){splice.call(results,duplicates[j],1);}}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
sortInput=null;return results;};jQuery.fn.uniqueSort=function(){return this.pushStack(jQuery.uniqueSort(slice.apply(this)));};Expr=jQuery.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},CHILD:function(match){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
if(!match[3]){find.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
}else if(match[3]){find.error(match[0]);}return match;},PSEUDO:function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr.CHILD.test(match[0])){return null;}// Accept quoted arguments as-is
if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
return match.slice(0,3);}},filter:{TAG:function(nodeNameSelector){var expectedNodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return nodeName(elem,expectedNodeName);};},CLASS:function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},ATTR:function(name,operator,check){return function(elem){var result=find.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";if(operator==="="){return result===check;}if(operator==="!="){return result!==check;}if(operator==="^="){return check&&result.indexOf(check)===0;}if(operator==="*="){return check&&result.indexOf(check)>-1;}if(operator==="$="){return check&&result.slice(-check.length)===check;}if(operator==="~="){return(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1;}if(operator==="|="){return result===check||result.slice(0,check.length+1)===check+"-";}return false;};},CHILD:function(type,what,_argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
function(elem){return!!elem.parentNode;}:function(elem,_context,xml){var cache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?nodeName(node,name):node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
if(forward&&useCache){// Seek `elem` from a previously-cached index
outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
if(useCache){outerCache=elem[expando]||(elem[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(diff===false){// Use the same loop as above to seek `elem` from the start
while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?nodeName(node,name):node.nodeType===1)&&++diff){// Cache the index of each encountered element
if(useCache){outerCache=node[expando]||(node[expando]={});outerCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},PSEUDO:function(pseudo,argument){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||find.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
if(fn[expando]){return fn(argument);}// But maintain support for old signatures
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
not:markFunction(function(selector){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var input=[],results=[],matcher=compile(selector.replace(rtrimCSS,"$1"));return matcher[expando]?markFunction(function(seed,matches,_context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,_context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
input[0]=null;return!results.pop();};}),has:markFunction(function(selector){return function(elem){return find(selector,elem).length>0;};}),contains:markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||jQuery.text(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:markFunction(function(lang){// lang value must be a valid identifier
if(!ridentifier.test(lang||"")){find.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
target:function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},root:function(elem){return elem===documentElement;},focus:function(elem){return elem===safeActiveElement()&&document.hasFocus()&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
enabled:createDisabledPseudo(false),disabled:createDisabledPseudo(true),checked:function(elem){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return nodeName(elem,"input")&&!!elem.checked||nodeName(elem,"option")&&!!elem.selected;},selected:function(elem){// Support: IE <=11+
// Accessing the selectedIndex property
// forces the browser to treat the default option as
// selected when in an optgroup.
if(elem.parentNode){// eslint-disable-next-line no-unused-expressions
elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
empty:function(elem){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},parent:function(elem){return!Expr.pseudos.empty(elem);},// Element/input types
header:function(elem){return rheader.test(elem.nodeName);},input:function(elem){return rinputs.test(elem.nodeName);},button:function(elem){return nodeName(elem,"input")&&elem.type==="button"||nodeName(elem,"button");},text:function(elem){var attr;return nodeName(elem,"input")&&elem.type==="text"&&(// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
first:createPositionalPseudo(function(){return[0];}),last:createPositionalPseudo(function(_matchIndexes,length){return[length-1];}),eq:createPositionalPseudo(function(_matchIndexes,length,argument){return[argument<0?argument+length:argument];}),even:createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),odd:createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),lt:createPositionalPseudo(function(matchIndexes,length,argument){var i;if(argument<0){i=argument+length;}else if(argument>length){i=length;}else{i=argument;}for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),gt:createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos.nth=Expr.pseudos.eq;// Add button/input type pseudos
for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();function tokenize(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
if(match=rleadingCombinator.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
type:match[0].replace(rtrimCSS," ")});soFar=soFar.slice(matched.length);}// Filters
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
if(parseOnly){return soFar.length;}return soFar?find.error(selector):// Cache the tokens
tokenCache(selector,groups).slice(0);}function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}return false;}:// Check against all ancestor/preceding elements
function(elem,context,xml){var oldCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if(skip&&nodeName(elem,skip)){elem=elem[dir]||elem;}else if((oldCache=outerCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
outerCache[key]=newCache;// A match means we're done; a fail means we have to keep checking
if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}return false;};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){find(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,matcherOut,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems;if(matcher){// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
matcherOut=postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
results;// Find primary matches
matcher(matcherIn,matcherOut,context,xml);}else{matcherOut=matcherIn;}// Apply postFilter
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf.call(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var ret=!leadingRelative&&(xml||context!=outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
if(matcher[expando]){// Find the next relative operator (if any) for proper handling
j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrimCSS,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
elems=seed||byElement&&Expr.find.TAG("*",outermost),// Use integer dirruns iff this is the outermost matcher
dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
outermostContext=context==document||context||outermost;}// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
if(!context&&elem.ownerDocument!=document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){push.call(results,elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
if(bySet){// They will have gone through all possible matchers
if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
matchedCount+=i;// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
setMatched=condense(setMatched);}// Add matches to results
push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){jQuery.uniqueSort(results);}}// Override manipulation of globals by nested matchers
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}function compile(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
cached.selector=selector;}return cached;}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function select(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(match.length===1){// Reduce context if the leading compound selector is an ID
tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find.ID(token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
i=matchExpr.needsContext.test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;}// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Initialize against the default document
setDocument();// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
support.sortDetached=assert(function(el){// Should return 1, but returns 4 (following)
return el.compareDocumentPosition(document.createElement("fieldset"))&1;});jQuery.find=find;// Deprecated
jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=jQuery.uniqueSort;// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
find.compile=compile;find.select=select;find.setDocument=setDocument;find.tokenize=tokenize;find.escape=jQuery.escapeSelector;find.getText=jQuery.text;find.isXML=jQuery.isXMLDoc;find.selectors=jQuery.expr;find.support=jQuery.support;find.uniqueSort=jQuery.uniqueSort;/* eslint-enable */})();var dir=function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var siblings=function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function winnow(elements,qualifier,not){if(isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}// Single element
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}// Arraylike of elements (jQuery, arguments, Array)
if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}// Filtered directly for both simple and complex selectors
return jQuery.filter(qualifier,elements,not);}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}return len>1?jQuery.uniqueSort(ret):ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var rootjQuery,// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!selector){return this;}// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
root=root||rootjQuery;// Handle HTML strings
if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
if(isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
}else{elem=document.getElementById(match[2]);if(elem){// Inject the element directly into the jQuery object
this[0]=elem;this.length=1;}return this;}// HANDLE: $(expr, $(...))
}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
// (which is just equivalent to: $(context).find(expr)
}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
}else if(selector.nodeType){this[0]=selector;this.length=1;return this;// HANDLE: $(function)
// Shortcut for document ready
}else if(isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
selector(jQuery);}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
init.prototype=jQuery.fn;// Initialize central reference
rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);// Positional selectors never match, since there's no _selection_ context
if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
if(cur.nodeType<11&&(targets?targets.index(cur)>-1:// Don't pass non-elements to jQuery#find
cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
index:function(elem){// No argument, return index in parent
if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
return indexOf.call(this,// If it receives a jQuery object, the first element is used
elem.jquery?elem[0]:elem);},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return dir(elem,"parentNode");},parentsUntil:function(elem,_i,until){return dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return dir(elem,"nextSibling");},prevAll:function(elem){return dir(elem,"previousSibling");},nextUntil:function(elem,_i,until){return dir(elem,"nextSibling",until);},prevUntil:function(elem,_i,until){return dir(elem,"previousSibling",until);},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem);},children:function(elem){return siblings(elem.firstChild);},contents:function(elem){if(elem.contentDocument!=null&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
getProto(elem.contentDocument)){return elem.contentDocument;}// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
if(nodeName(elem,"template")){elem=elem.content||elem;}return jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnothtmlwhite=/[^\x20\t\r\n\f]+/g;// Convert String-formatted options into Object-formatted ones
function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
firing,// Last fire value for non-forgettable lists
memory,// Flag to know if list was already fired
fired,// Flag to prevent firing
locked,// Actual callback list
list=[],// Queue of execution data for repeatable lists
queue=[],// Index of currently firing callback (modified by add/remove as needed)
firingIndex=-1,// Fire callbacks
fire=function(){// Enforce single-firing
locked=locked||options.once;// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
if(locked){// Keep an empty list if we have data for future add calls
if(memory){list=[];// Otherwise, this object is spent
}else{list="";}}},// Actual Callbacks object
self={// Add a callback or a collection of callbacks to the list
add:function(){if(list){// If we have memory from a past run, we should fire after adding
if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&toType(arg)!=="string"){// Inspect recursively
add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
remove:function(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
empty:function(){if(list){list=[];}return this;},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){locked=queue=[];list=memory="";return this;},disabled:function(){return!list;},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){locked=queue=[];if(!memory&&!firing){list=memory="";}return this;},locked:function(){return!!locked;},// Call all callbacks with the given context and arguments
fireWith:function(context,args){if(!locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
fire:function(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
fired:function(){return!!fired;}};return self;};function Identity(v){return v;}function Thrower(ex){throw ex;}function adoptValue(value,resolve,reject,noValue){var method;try{// Check for promise aspect first to privilege synchronous behavior
if(value&&isFunction(method=value.promise)){method.call(value).done(resolve).fail(reject);// Other thenables
}else if(value&&isFunction(method=value.then)){method.call(value,resolve,reject);// Other non-thenables
}else{// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
resolve.apply(undefined,[value].slice(noValue));}// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(value){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
reject.apply(undefined,[value]);}}jQuery.extend({Deferred:function(func){var tuples=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},"catch":function(fn){return promise.then(null,fn);},// Keep pipe for back-compat
pipe:function/* fnDone, fnFail, fnProgress */(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(_i,tuple){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var fn=isFunction(fns[tuple[4]])&&fns[tuple[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function(){var returned,then;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(depth<maxDepth){return;}returned=handler.apply(that,args);// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
then=returned&&(// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
typeof returned==="object"||typeof returned==="function")&&returned.then;// Handle a returned thenable
if(isFunction(then)){// Special processors (notify) just wait for resolution
if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));// Normal processors (resolve) also hook into progress
}else{// ...and disregard older resolution values
maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}// Handle all other returned values
}else{// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Identity){that=undefined;args=[returned];}// Process the value(s)
// Default process is resolve
(special||deferred.resolveWith)(that,args);}},// Only normal processors (resolve) catch and reject exceptions
process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.error);}// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
if(depth+1>=maxDepth){// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Thrower){that=undefined;args=[e];}deferred.rejectWith(that,args);}}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
if(depth){process();}else{// Call an optional hook to record the error, in case of exception
// since it's otherwise lost when execution goes async
if(jQuery.Deferred.getErrorHook){process.error=jQuery.Deferred.getErrorHook();// The deprecated alias of the above. While the name suggests
// returning the stack, not an error instance, jQuery just passes
// it directly to `console.warn` so both will work; an instance
// just better cooperates with source maps.
}else if(jQuery.Deferred.getStackHook){process.error=jQuery.Deferred.getStackHook();}window.setTimeout(process);}};}return jQuery.Deferred(function(newDefer){// progress_handlers.add( ... )
tuples[0][3].add(resolve(0,newDefer,isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));// fulfilled_handlers.add( ... )
tuples[1][3].add(resolve(0,newDefer,isFunction(onFulfilled)?onFulfilled:Identity));// rejected_handlers.add( ... )
tuples[2][3].add(resolve(0,newDefer,isFunction(onRejected)?onRejected:Thrower));}).promise();},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};// Add list-specific methods
jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
promise[tuple[1]]=list.add;// Handle state
if(stateString){list.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
state=stateString;},// rejected_callbacks.disable
// fulfilled_callbacks.disable
tuples[3-i][2].disable,// rejected_handlers.disable
// fulfilled_handlers.disable
tuples[3-i][3].disable,// progress_callbacks.lock
tuples[0][2].lock,// progress_handlers.lock
tuples[0][3].lock);}// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
list.add(tuple[3].fire);// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
promise.promise(deferred);// Call given func if any
if(func){func.call(deferred,deferred);}// All done!
return deferred;},// Deferred helper
when:function(singleValue){var// count of uncompleted subordinates
remaining=arguments.length,// count of unprocessed arguments
i=remaining,// subordinate fulfillment data
resolveContexts=Array(i),resolveValues=slice.call(arguments),// the primary Deferred
primary=jQuery.Deferred(),// subordinate callback factory
updateFunc=function(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?slice.call(arguments):value;if(! --remaining){primary.resolveWith(resolveContexts,resolveValues);}};};// Single- and empty arguments are adopted like Promise.resolve
if(remaining<=1){adoptValue(singleValue,primary.done(updateFunc(i)).resolve,primary.reject,!remaining);// Use .then() to unwrap secondary thenables (cf. gh-3000)
if(primary.state()==="pending"||isFunction(resolveValues[i]&&resolveValues[i].then)){return primary.then();}}// Multiple arguments are aggregated like Promise.all array elements
while(i--){adoptValue(resolveValues[i],updateFunc(i),primary.reject);}return primary.promise();}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
jQuery.Deferred.exceptionHook=function(error,asyncError){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){void 0;}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};// The deferred used on DOM ready
var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:false,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(wait){// Abort if there are pending holds or we're already ready
if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;// The ready event handler and self cleanup method
function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
window.setTimeout(jQuery.ready);}else{// Use the handy event callback
document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
window.addEventListener("load",completed);}// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
if(toType(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
}else if(value!==undefined){chainable=true;if(!isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
}else{bulk=fn;fn=function(elem,_key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}if(chainable){return elems;}// Gets
if(bulk){return fn.call(elems);}return len?fn(elems[0],key):emptyGet;};// Matches dashed string for camelizing
var rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g;// Used by camelCase as callback to replace()
function fcamelCase(_all,letter){return letter.toUpperCase();}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);}var acceptData=function(owner){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={cache:function(owner){// Check if the owner object already has a cache
var value=owner[this.expando];// If not, create one
if(!value){value={};// We can accept data for non-element nodes in modern browsers,
// but we should not, see trac-8335.
// Always return an empty object.
if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
// configurable must be true to allow the property to be
// deleted when data is removed
}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if(typeof data==="string"){cache[camelCase(data)]=value;// Handle: [ owner, { properties } ] args
}else{// Copy the properties one-by-one to the cache object
for(prop in data){cache[camelCase(prop)]=data[prop];}}return cache;},get:function(owner,key){return key===undefined?this.cache(owner):// Always use camelCase key (gh-2257)
owner[this.expando]&&owner[this.expando][camelCase(key)];},access:function(owner,key,value){// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
if(key===undefined||key&&typeof key==="string"&&value===undefined){return this.get(owner,key);}// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(owner,key,value);// Since the "set" path can have two possible entry points
// return the expected data based on which path was taken[*]
return value!==undefined?value:key;},remove:function(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}if(key!==undefined){// Support array or space separated string of keys
if(Array.isArray(key)){// If key is an array of keys...
// We always set camelCase keys, so remove that.
key=key.map(camelCase);}else{key=camelCase(key);// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
key=key in cache?[key]:key.match(rnothtmlwhite)||[];}i=key.length;while(i--){delete cache[key[i]];}}// Remove the expando if there's no more data
if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}if(data==="false"){return false;}if(data==="null"){return null;}// Only convert to a number if it doesn't change the string
if(data===+data+""){return+data;}if(rbrace.test(data)){return JSON.parse(data);}return data;}function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}// Make sure we set the data so it isn't changed later
dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function(elem,name,data){return dataUser.access(elem,name,data);},removeData:function(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE 11 only
// The attrs elements can be null (trac-14894)
if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
if(typeof key==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(elem&&value===undefined){// Attempt to get data from the cache
// The key will always be camelCased in Data
data=dataUser.get(elem,key);if(data!==undefined){return data;}// Attempt to "discover" the data in
// HTML5 custom data-* attrs
data=dataAttr(elem,key);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
return;}// Set the data...
this.each(function(){// We always store the camelCased key
dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
if(data){if(!queue||Array.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var documentElement=document.documentElement;var isAttached=function(elem){return jQuery.contains(elem.ownerDocument,elem);},composed={composed:true};// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
// Check attachment across shadow DOM boundaries when possible (gh-3504)
// Support: iOS 10.0-10.2 only
// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
// leading to errors. We need to check for `getRootNode`.
if(documentElement.getRootNode){isAttached=function(elem){return jQuery.contains(elem.ownerDocument,elem)||elem.getRootNode(composed)===elem.ownerDocument;};}var isHiddenWithinTree=function(elem,el){// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
elem=el||elem;// Inline style trumps all
return elem.style.display==="none"||elem.style.display===""&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
isAttached(elem)&&jQuery.css(elem,"display")==="none";};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
initialInUnit=elem.nodeType&&(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
initial=initial/2;// Trust units reported by jQuery.css
unit=unit||initialInUnit[3];// Iteratively approximate from a nonzero starting point
initialInUnit=+initial||1;while(maxIterations--){// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
jQuery.style(elem,prop,initialInUnit+unit);if((1-scale)*(1-(scale=currentValue()/initial||0.5))<=0){maxIterations=0;}initialInUnit=initialInUnit/scale;}initialInUnit=initialInUnit*2;jQuery.style(elem,prop,initialInUnit+unit);// Make sure we update the tween properties later on
valueParts=valueParts||[];}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}defaultDisplayMap[nodeName]=display;return display;}function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;// Determine new display value for elements that need to change
for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}display=elem.style.display;if(show){// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";// Remember what we're overwriting
dataPriv.set(elem,"display",display);}}}// Set the display of the elements in a second loop to avoid constant reflow
for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}return elements;}jQuery.fn.extend({show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i;var rscriptType=/^$|^module$|\/(?:java|ecma)script/i;(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
div.innerHTML="<option></option>";support.option=!!div.lastChild;})();// We have to close these tags to support XHTML (trac-13200)
var wrapMap={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;// Support: IE <=9 only
if(!support.option){wrapMap.optgroup=wrapMap.option=[1,"<select multiple='multiple'>","</select>"];}function getAll(context,tag){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}if(tag===undefined||tag&&nodeName(context,tag)){return jQuery.merge([context],ret);}return ret;}// Mark scripts as having already been evaluated
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,attached,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
if(toType(elem)==="object"){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
tmp=fragment.firstChild;// Ensure the created nodes are orphaned (trac-12392)
tmp.textContent="";}}}// Remove wrapper from fragment
fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}attached=isAttached(elem);// Append to fragment
tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
if(attached){setGlobalEval(tmp);}// Capture executables
if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}var rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}function on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
if(typeof types==="object"){// ( types-Object, selector, data )
if(typeof selector!=="string"){// ( types-Object, data )
data=data||selector;selector=undefined;}for(type in types){on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
fn=data;data=undefined;}else{// ( types, data, fn )
fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function(event){// Can use an empty set, since event contains the info
jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Only attach events to objects that accept data
if(!acceptData(elem)){return;}// Caller can pass in an object of custom data in lieu of the handler
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
if(selector){jQuery.find.matchesSelector(documentElement,selector);}// Make sure that the handler has a unique ID, used to find/remove it later
if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
if(!(events=elemData.events)){events=elemData.events=Object.create(null);}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function(nativeEvent){var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),// Make a writable jQuery.Event from the native event object
event=jQuery.event.fix(nativeEvent),handlers=(dataPriv.get(this,"events")||Object.create(null))[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// If the event is namespaced, then each handler is only invoked if it is
// specially universal or its namespaces are a superset of the event's.
if(!event.rnamespace||handleObj.namespace===false||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function(event,handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;// Find delegate handlers
if(delegateCount&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
cur.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (trac-13208)
// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=handlers[i];// Don't conflict with Object.prototype properties (trac-13203)
sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}// Add the remaining (directly-bound) handlers
cur=this;if(delegateCount<handlers.length){handlerQueue.push({elem:cur,handlers:handlers.slice(delegateCount)});}return handlerQueue;},addProp:function(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:true},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(data){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var el=this||data;// Claim the first handler
if(rcheckableType.test(el.type)&&el.click&&nodeName(el,"input")){// dataPriv.set( el, "click", ... )
leverageNative(el,"click",true);}// Return false to allow normal processing in the caller
return false;},trigger:function(data){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var el=this||data;// Force setup before triggering a click
if(rcheckableType.test(el.type)&&el.click&&nodeName(el,"input")){leverageNative(el,"click");}// Return non-false to allow normal event-path propagation
return true;},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(event){var target=event.target;return rcheckableType.test(target.type)&&target.click&&nodeName(target,"input")&&dataPriv.get(target,"click")||nodeName(target,"a");}},beforeunload:{postDispatch:function(event){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative(el,type,isSetup){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!isSetup){if(dataPriv.get(el,type)===undefined){jQuery.event.add(el,type,returnTrue);}return;}// Register the controller as a special universal handler for all event namespaces
dataPriv.set(el,type,false);jQuery.event.add(el,type,{namespace:false,handler:function(event){var result,saved=dataPriv.get(this,type);if(event.isTrigger&1&&this[type]){// Interrupt processing of the outer synthetic .trigger()ed event
if(!saved){// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
saved=slice.call(arguments);dataPriv.set(this,type,saved);// Trigger the native event and capture its result
this[type]();result=dataPriv.get(this,type);dataPriv.set(this,type,false);if(saved!==result){// Cancel the outer synthetic event
event.stopImmediatePropagation();event.preventDefault();return result;}// If this is an inner synthetic event for an event with a bubbling surrogate
// (focus or blur), assume that the surrogate already propagated from triggering
// the native event and prevent that from happening again here.
// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
// bubbling surrogate propagates *after* the non-bubbling base), but that seems
// less bad than duplication.
}else if((jQuery.event.special[type]||{}).delegateType){event.stopPropagation();}// If this is a native event triggered above, everything is now in order
// Fire an inner synthetic event with the original arguments
}else if(saved){// ...and capture the result
dataPriv.set(this,type,jQuery.event.trigger(saved[0],saved.slice(1),this));// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
event.stopPropagation();event.isImmediatePropagationStopped=returnTrue;}}});}jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android <=2.3 only
src.returnValue===false?returnTrue:returnFalse;// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=src.target&&src.target.nodeType===3?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;// Event type
}else{this.type=src;}// Put explicitly provided properties onto the event object
if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
this.timeStamp=src&&src.timeStamp||Date.now();// Mark it as fixed
this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,code:true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:true},jQuery.event.addProp);jQuery.each({focus:"focusin",blur:"focusout"},function(type,delegateType){function focusMappedHandler(nativeEvent){if(document.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var handle=dataPriv.get(this,"handle"),event=jQuery.event.fix(nativeEvent);event.type=nativeEvent.type==="focusin"?"focus":"blur";event.isSimulated=true;// First, handle focusin/focusout
handle(nativeEvent);// ...then, handle focus/blur
//
// focus/blur don't bubble while focusin/focusout do; simulate the former by only
// invoking the handler at the lower level.
if(event.target===event.currentTarget){// The setup part calls `leverageNative`, which, in turn, calls
// `jQuery.event.add`, so event handle will already have been set
// by this point.
handle(event);}}else{// For non-IE browsers, attach a single capturing handler on the document
// while someone wants focusin/focusout.
jQuery.event.simulate(delegateType,nativeEvent.target,jQuery.event.fix(nativeEvent));}}jQuery.event.special[type]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var attaches;// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
leverageNative(this,type,true);if(document.documentMode){// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
attaches=dataPriv.get(this,delegateType);if(!attaches){this.addEventListener(delegateType,focusMappedHandler);}dataPriv.set(this,delegateType,(attaches||0)+1);}else{// Return false to allow normal processing in the caller
return false;}},trigger:function(){// Force setup before trigger
leverageNative(this,type);// Return non-false to allow normal event-path propagation
return true;},teardown:function(){var attaches;if(document.documentMode){attaches=dataPriv.get(this,delegateType)-1;if(!attaches){this.removeEventListener(delegateType,focusMappedHandler);dataPriv.remove(this,delegateType);}else{dataPriv.set(this,delegateType,attaches);}}else{// Return false to indicate standard teardown should be applied
return false;}},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(event){return dataPriv.get(event.target,type);},delegateType:delegateType};// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
//
// Support: IE 9 - 11+
// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
// attach a single handler for both events in IE.
jQuery.event.special[delegateType]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var doc=this.ownerDocument||this.document||this,dataHolder=document.documentMode?this:doc,attaches=dataPriv.get(dataHolder,delegateType);// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
if(!attaches){if(document.documentMode){this.addEventListener(delegateType,focusMappedHandler);}else{doc.addEventListener(type,focusMappedHandler,true);}}dataPriv.set(dataHolder,delegateType,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this.document||this,dataHolder=document.documentMode?this:doc,attaches=dataPriv.get(dataHolder,delegateType)-1;if(!attaches){if(document.documentMode){this.removeEventListener(delegateType,focusMappedHandler);}else{doc.removeEventListener(type,focusMappedHandler,true);}dataPriv.remove(dataHolder,delegateType);}else{dataPriv.set(dataHolder,delegateType,attaches);}}};});// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn);},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if(typeof types==="object"){// ( types-object [, selector] )
for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rcleanScript=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function manipulationTarget(elem,content){if(nodeName(elem,"table")&&nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return jQuery(elem).children("tbody")[0]||elem;}return elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){if((elem.type||"").slice(0,5)==="true/"){elem.type=elem.type.slice(5);}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
if(dataPriv.hasData(src)){pdataOld=dataPriv.get(src);events=pdataOld.events;if(events){dataPriv.remove(dest,"handle events");for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
args=flat(args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],valueIsFunction=isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
if(valueIsFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(valueIsFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
if(hasScripts){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Re-enable scripts
jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src&&(node.type||"").toLowerCase()!=="module"){// Optional AJAX dependency, but won't run scripts if not present
if(jQuery._evalUrl&&!node.noModule){jQuery._evalUrl(node.src,{nonce:node.nonce||node.getAttribute("nonce")},doc);}}else{// Unwrap a CDATA section containing script contents. This shouldn't be
// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
DOMEval(node.textContent.replace(rcleanScript,""),node,doc);}}}}}}return collection;}function remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&isAttached(node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function(html){return html;},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=isAttached(elem);// Fix IE cloning issues
if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
return clone;},cleanData:function(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function(selector){return remove(this,selector,true);},remove:function(selector){return remove(this,selector);},text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
elem.textContent="";}}return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
push.apply(ret,elems.get());}return this.pushStack(ret);};});var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var rcustomProp=/^--/;var getStyles=function(elem){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};var swap=function(elem,options,callback){var ret,name,old={};// Remember the old values, and insert the new ones
for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.call(elem);// Revert the old values
for(name in options){elem.style[name]=old[name];}return ret;};var rboxStyle=new RegExp(cssExpand.join("|"),"i");(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function computeStyleTests(){// This is a singleton, we need to execute it only once
if(!div){return;}container.style.cssText="position:absolute;left:-11111px;width:60px;"+"margin-top:1px;padding:0;border:0";div.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;"+"margin:auto;border:1px;padding:1px;"+"width:60%;top:1%";documentElement.appendChild(container).appendChild(div);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
reliableMarginLeftVal=roundPixelMeasures(divStyle.marginLeft)===12;// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
div.style.right="60%";pixelBoxStylesVal=roundPixelMeasures(divStyle.right)===36;// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
boxSizingReliableVal=roundPixelMeasures(divStyle.width)===36;// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
div.style.position="absolute";scrollboxSizeVal=roundPixelMeasures(div.offsetWidth/3)===12;documentElement.removeChild(container);// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
div=null;}function roundPixelMeasures(measure){return Math.round(parseFloat(measure));}var pixelPositionVal,boxSizingReliableVal,scrollboxSizeVal,pixelBoxStylesVal,reliableTrDimensionsVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
if(!div.style){return;}// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";jQuery.extend(support,{boxSizingReliable:function(){computeStyleTests();return boxSizingReliableVal;},pixelBoxStyles:function(){computeStyleTests();return pixelBoxStylesVal;},pixelPosition:function(){computeStyleTests();return pixelPositionVal;},reliableMarginLeft:function(){computeStyleTests();return reliableMarginLeftVal;},scrollboxSize:function(){computeStyleTests();return scrollboxSizeVal;},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var table,tr,trChild,trStyle;if(reliableTrDimensionsVal==null){table=document.createElement("table");tr=document.createElement("tr");trChild=document.createElement("div");table.style.cssText="position:absolute;left:-11111px;border-collapse:separate";tr.style.cssText="box-sizing:content-box;border:1px solid";// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
tr.style.height="1px";trChild.style.height="9px";// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
trChild.style.display="block";documentElement.appendChild(table).appendChild(tr).appendChild(trChild);trStyle=window.getComputedStyle(tr);reliableTrDimensionsVal=parseInt(trStyle.height,10)+parseInt(trStyle.borderTopWidth,10)+parseInt(trStyle.borderBottomWidth,10)===tr.offsetHeight;documentElement.removeChild(table);}return reliableTrDimensionsVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,isCustomProp=rcustomProp.test(name),// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
style=elem.style;computed=computed||getStyles(elem);// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, trac-12537)
//   .css('--customProperty) (gh-3144)
if(computed){// Support: IE <=9 - 11+
// IE only supports `"float"` in `getPropertyValue`; in computed styles
// it's only available as `"cssFloat"`. We no longer modify properties
// sent to `.css()` apart from camelCasing, so we need to check both.
// Normally, this would create difference in behavior: if
// `getPropertyValue` returns an empty string, the value returned
// by `.css()` would be `undefined`. This is usually the case for
// disconnected elements. However, in IE even disconnected elements
// with no styles return `"none"` for `getPropertyValue( "float" )`
ret=computed.getPropertyValue(name)||computed[name];if(isCustomProp&&ret){// Support: Firefox 105+, Chrome <=105+
// Spec requires trimming whitespace for custom properties (gh-4926).
// Firefox only trims leading whitespace. Chrome just collapses
// both leading & trailing whitespace to a single space.
//
// Fall back to `undefined` if empty string returned.
// This collapses a missing definition with property defined
// and set to an empty string but there's no standard API
// allowing us to differentiate them without a performance penalty
// and returning `undefined` aligns with older jQuery.
//
// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
// as whitespace while CSS does not, but this is not a problem
// because CSS preprocessing replaces them with U+000A LINE FEED
// (which *is* CSS whitespace)
// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
ret=ret.replace(rtrimCSS,"$1")||undefined;}if(ret===""&&!isAttached(elem)){ret=jQuery.style(elem,name);}// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
if(!support.pixelBoxStyles()&&rnumnonpx.test(ret)&&rboxStyle.test(name)){// Remember the original values
width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=hookFn).apply(this,arguments);}};}var cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style,vendorProps={};// Return a vendor-prefixed property or undefined
function vendorPropName(name){// Check for vendor prefixed names
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName(name){var final=jQuery.cssProps[name]||vendorProps[name];if(final){return final;}if(name in emptyStyle){return name;}return vendorProps[name]=vendorPropName(name)||name;}var// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"};function setPositiveNumber(_elem,value,subtract){// Any relative (+/-) values have already been
// normalized at this point
var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function boxModelAdjustment(elem,dimension,box,isBorderBox,styles,computedVal){var i=dimension==="width"?1:0,extra=0,delta=0,marginDelta=0;// Adjustment may not be necessary
if(box===(isBorderBox?"border":"content")){return 0;}for(;i<4;i+=2){// Both box models exclude margin
// Count margin delta separately to only add it after scroll gutter adjustment.
// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
if(box==="margin"){marginDelta+=jQuery.css(elem,box+cssExpand[i],true,styles);}// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
if(!isBorderBox){// Add padding
delta+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// For "border" or "margin", add border
if(box!=="padding"){delta+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);// But still keep track of it otherwise
}else{extra+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}// If we get here with a border-box (content + padding + border), we're seeking "content" or
// "padding" or "margin"
}else{// For "content", subtract padding
if(box==="content"){delta-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// For "content" or "padding", subtract border
if(box!=="margin"){delta-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}// Account for positive content-box scroll gutter when requested by providing computedVal
if(!isBorderBox&&computedVal>=0){// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
delta+=Math.max(0,Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-computedVal-delta-extra-0.5// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
// Use an explicit zero to avoid NaN (gh-3964)
))||0;}return delta+marginDelta;}function getWidthOrHeight(elem,dimension,extra){// Start with computed style
var styles=getStyles(elem),// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
// Fake content-box until we know it's needed to know the true value.
boxSizingNeeded=!support.boxSizingReliable()||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",valueIsBorderBox=isBorderBox,val=curCSS(elem,dimension,styles),offsetProp="offset"+dimension[0].toUpperCase()+dimension.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(rnumnonpx.test(val)){if(!extra){return val;}val="auto";}// Support: IE 9 - 11 only
// Use offsetWidth/offsetHeight for when box sizing is unreliable.
// In those cases, the computed value can be trusted to be border-box.
if((!support.boxSizingReliable()&&isBorderBox||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!support.reliableTrDimensions()&&nodeName(elem,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
val==="auto"||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(val)&&jQuery.css(elem,"display",false,styles)==="inline")&&// Make sure the element is visible & connected
elem.getClientRects().length){isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
valueIsBorderBox=offsetProp in elem;if(valueIsBorderBox){val=elem[offsetProp];}}// Normalize "" and auto
val=parseFloat(val)||0;// Adjust for the element's box model
return val+boxModelAdjustment(elem,dimension,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles,// Provide the current computed size to request scroll gutter calculation (gh-3589)
val)+"px";}jQuery.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(elem,computed){if(computed){// We should always get a number back from opacity
var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:true,aspectRatio:true,borderImageSlice:true,columnCount:true,flexGrow:true,flexShrink:true,fontWeight:true,gridArea:true,gridColumn:true,gridColumnEnd:true,gridColumnStart:true,gridRow:true,gridRowEnd:true,gridRowStart:true,lineHeight:true,opacity:true,order:true,orphans:true,scale:true,widows:true,zIndex:true,zoom:true,// SVG-related
fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeMiterlimit:true,strokeOpacity:true},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(elem,name,value,extra){// Don't set styles on text and comment nodes
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
var ret,type,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name),style=elem.style;// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
if(!isCustomProp){name=finalPropName(origName);}// Gets hook for the prefixed version, then unprefixed version
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
if(value!==undefined){type=typeof value;// Convert "+=" or "-=" to relative numbers (trac-7345)
if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug trac-9237
type="number";}// Make sure that null and NaN values aren't set (trac-7116)
if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
// "px" to a few hardcoded values.
if(type==="number"&&!isCustomProp){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// background-* props affect original clone's values
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){if(isCustomProp){style.setProperty(name,value);}else{style[name]=value;}}}else{// If a hook was provided get the non-computed value from there
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
return style[name];}},css:function(elem,name,extra,styles){var val,num,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name);// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
if(!isCustomProp){name=finalPropName(origName);}// Try prefixed name followed by the unprefixed name
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(_i,dimension){jQuery.cssHooks[dimension]={get:function(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return rdisplayswap.test(jQuery.css(elem,"display"))&&(// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,dimension,extra);}):getWidthOrHeight(elem,dimension,extra);}},set:function(elem,value,extra){var matches,styles=getStyles(elem),// Only read styles.position if the test has a chance to fail
// to avoid forcing a reflow.
scrollboxSizeBuggy=!support.scrollboxSize()&&styles.position==="absolute",// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
boxSizingNeeded=scrollboxSizeBuggy||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",subtract=extra?boxModelAdjustment(elem,dimension,extra,isBorderBox,styles):0;// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
if(isBorderBox&&scrollboxSizeBuggy){subtract-=Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-parseFloat(styles[dimension])-boxModelAdjustment(elem,dimension,"border",false,styles)-0.5);}// Convert to pixels if value adjustment is needed
if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[dimension]=value;value=jQuery.css(elem,dimension);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// These hooks are used by animate to expand properties
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},// Assumes a single number if not a string
parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(prefix!=="margin"){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(Array.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
return!result||result==="auto"?0:result;},set:function(tween){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(jQuery.cssHooks[tween.prop]||tween.elem.style[finalPropName(tween.prop)]!=null)){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back compat <1.8 extension point
jQuery.fx.step={};var fxNow,inProgress,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function schedule(){if(inProgress){if(document.hidden===false&&window.requestAnimationFrame){window.requestAnimationFrame(schedule);}else{window.setTimeout(schedule,jQuery.fx.interval);}jQuery.fx.tick();}}// Animations created synchronously will run synchronously
function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=Date.now();}// Generate parameters to create a standard animation
function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
return tween;}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");// Queue-skipping animations hijack the fx hooks
if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Detect show/hide animations
for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;// Ignore all other no-op show/hide data
}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}// Bail out if this is a no-op like .hide().hide()
propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}// Restrict "overflow" and "display" styles during box animations
if(isBox&&elem.nodeType===1){// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Identify a display type, preferring old show/hide data over the CSS cascade
restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{// Get nonempty value(s) by temporarily forcing visibility
showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}// Animate inline elements as inline-block
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){// Restore the original display value at the end of pure show/hide animations
if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}style.display="inline-block";}}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// Implement show/hide animations
propTween=false;for(prop in orig){// General show/hide setup for this element animation
if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
if(toggle){dataShow.hidden=!hidden;}// Show elements before animating them
if(hidden){showHide([elem],true);}/* eslint-disable no-loop-func */anim.done(function(){/* eslint-enable no-loop-func */ // The final step of a "hide" animation is actually hiding the element
if(!hidden){showHide([elem]);}dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}// Per-property setup
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
for(index in props){name=camelCase(index);easing=specialEasing[name];value=props[index];if(Array.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
delete tick.elem;}),tick=function(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);// If there's more to do, yield
if(percent<1&&length){return remaining;}// If this was an empty animation, synthesize a final progress notification
if(!length){deferred.notifyWith(elem,[animation,1,0]);}// Resolve the animation and report its conclusion
deferred.resolveWith(elem,[animation]);return false;},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=result.stop.bind(result);}return result;}}jQuery.map(props,createTween,animation);if(isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}// Attach callbacks from options
animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation;}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function(props,callback){if(isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!isFunction(easing)&&easing};// Go to the end state if fx are off
if(jQuery.fx.off){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}// Normalize opt.queue - true/undefined/null -> "fx"
if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
opt.old=opt.complete;opt.complete=function(){if(isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
return this.filter(isHiddenWithinTree).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){// Operate on a copy of prop so per-property easing won't be lost
var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
data.finish=true;// Empty the queue first
jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(_i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=Date.now();for(;i<timers.length;i++){timer=timers[i];// Run the timer and safely remove it when done (allowing for external removal)
if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);jQuery.fx.start();};jQuery.fx.interval=13;jQuery.fx.start=function(){if(inProgress){return;}inProgress=true;schedule();};jQuery.fx.stop=function(){inProgress=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
_default:400};// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
support.checkOn=input.value!=="";// Support: IE <=11 only
// Must access selectedIndex to make default options select
support.optSelected=opt.selected;// Support: IE <=11 only
// An input loses its value after becoming a radio
input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
return ret==null?undefined:ret;},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function(elem,value){var name,i=0,// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){elem.removeAttribute(name);}}}});// Hooks for boolean attributes
boolHook={set:function(elem,value,name){if(value===false){// Remove boolean attributes when set to false
jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(_i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function(elem){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}return-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}function classesToArray(value){if(Array.isArray(value)){return value;}if(typeof value==="string"){return value.match(rnothtmlwhite)||[];}return[];}jQuery.fn.extend({addClass:function(value){var classNames,cur,curValue,className,i,finalValue;if(isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}classNames=classesToArray(value);if(classNames.length){return this.each(function(){curValue=getClass(this);cur=this.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){for(i=0;i<classNames.length;i++){className=classNames[i];if(cur.indexOf(" "+className+" ")<0){cur+=className+" ";}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){this.setAttribute("class",finalValue);}}});}return this;},removeClass:function(value){var classNames,cur,curValue,className,i,finalValue;if(isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}classNames=classesToArray(value);if(classNames.length){return this.each(function(){curValue=getClass(this);// This expression is here for better compressibility (see addClass)
cur=this.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){for(i=0;i<classNames.length;i++){className=classNames[i];// Remove *all* instances
while(cur.indexOf(" "+className+" ")>-1){cur=cur.replace(" "+className+" "," ");}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){this.setAttribute("class",finalValue);}}});}return this;},toggleClass:function(value,stateVal){var classNames,className,i,self,type=typeof value,isValidValue=type==="string"||Array.isArray(value);if(isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}if(typeof stateVal==="boolean"&&isValidValue){return stateVal?this.addClass(value):this.removeClass(value);}classNames=classesToArray(value);return this.each(function(){if(isValidValue){// Toggle individual class names
self=jQuery(this);for(i=0;i<classNames.length;i++){className=classNames[i];// Check each className given, space separated list
if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,valueIsFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;// Handle most common string cases
if(typeof ret==="string"){return ret.replace(rreturn,"");}// Handle cases where value is null/undef or number
return ret==null?"":ret;}return;}valueIsFunction=isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(valueIsFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(Array.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE <=10 - 11 only
// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
stripAndCollapse(jQuery.text(elem));}},select:{get:function(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}// Loop through all the selected options
for(;i<max;i++){option=options[i];// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if((option.selected||i===index)&&// Don't return options that are disabled or in a disabled optgroup
!option.disabled&&(!option.parentNode.disabled||!nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
value=jQuery(option).val();// We don't need an array for one selects
if(one){return value;}// Multi-Selects return an array
values.push(value);}}return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];/* eslint-disable no-cond-assign */if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}/* eslint-enable no-cond-assign */}// Force browsers to behave consistently when non-matching value is set
if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(Array.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
var location=window.location;var nonce={guid:Date.now()};var rquery=/\?/;// Cross-browser xml parsing
jQuery.parseXML=function(data){var xml,parserErrorElem;if(!data||typeof data!=="string"){return null;}// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){}parserErrorElem=xml&&xml.getElementsByTagName("parsererror")[0];if(!xml||parserErrorElem){jQuery.error("Invalid XML: "+(parserErrorElem?jQuery.map(parserErrorElem.childNodes,function(el){return el.textContent;}).join("\n"):data));}return xml;};var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,stopPropagationCallback=function(e){e.stopPropagation();};jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,lastElement,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=lastElement=tmp=elem=elem||document;// Don't do events on text and comment nodes
if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!onlyHandlers&&!special.noBubble&&!isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){lastElement=cur;event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
handle=(dataPriv.get(cur,"events")||Object.create(null))[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (trac-6170)
if(ontype&&isFunction(elem[type])&&!isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
jQuery.event.triggered=type;if(event.isPropagationStopped()){lastElement.addEventListener(type,stopPropagationCallback);}elem[type]();if(event.isPropagationStopped()){lastElement.removeEventListener(type,stopPropagationCallback);}jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(Array.isArray(obj)){// Serialize array item.
jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
buildParams(prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&toType(obj)==="object"){// Serialize object item.
for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
add(prefix,obj);}}// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,valueOrFunction){// If value is a function, invoke it and use its return value
var value=isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value==null?"":value);};if(a==null){return"";}// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
return s.join("&");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(_i,elem){var val=jQuery(this).val();if(val==null){return null;}if(Array.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// trac-7653, trac-8125, trac-8152: local protocol detection
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */prefilters={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */transports={},// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(isFunction(func)){// For each dataType in the dataTypeExpression
while(dataType=dataTypes[i++]){// Prepend if requested
if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
finalDataType=finalDataType||firstDataType;}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
}else if(prev!=="*"&&prev!==current){// Seek a direct converter
conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
if(!conv){for(conv2 in converters){// If conv2 outputs current
tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
if(conv!==true){// Unless errors are allowed to bubble, catch and return them
if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":true,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(target,settings){return settings?// Building a settings object
ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
ajax:function(url,options){// If url is an object, simulate pre-1.5 signature
if(typeof url==="object"){options=url;url=undefined;}// Force options to be an object
options=options||{};var transport,// URL without anti-cache param
cacheURL,// Response headers
responseHeadersString,responseHeaders,// timeout handle
timeoutTimer,// Url cleanup var
urlAnchor,// Request state (becomes false upon send and true upon completion)
completed,// To know if global events are to be dispatched
fireGlobals,// Loop variable
i,// uncached part of the url
uncached,// Create the final options object
s=jQuery.ajaxSetup({},options),// Callbacks context
callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
statusCode=s.statusCode||{},// Headers (they are sent all at once)
requestHeaders={},requestHeadersNames={},// Default abort message
strAbort="canceled",// Fake xhr
jqXHR={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()+" "]=(responseHeaders[match[1].toLowerCase()+" "]||[]).concat(match[2]);}}match=responseHeaders[key.toLowerCase()+" "];}return match==null?null:match.join(", ");},// Raw string
getAllResponseHeaders:function(){return completed?responseHeadersString:null;},// Caches the header
setRequestHeader:function(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
overrideMimeType:function(type){if(completed==null){s.mimeType=type;}return this;},// Status-dependent callbacks
statusCode:function(map){var code;if(map){if(completed){// Execute the appropriate callbacks
jqXHR.always(map[jqXHR.status]);}else{// Lazy-add the new callbacks in a way that preserves old ones
for(code in map){statusCode[code]=[statusCode[code],map[code]];}}}return this;},// Cancel the request
abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
deferred.promise(jqXHR);// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket trac-12004
s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{urlAnchor.href=s.url;// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
s.crossDomain=true;}}// Convert data if not already a string
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
if(completed){return jqXHR;}// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
s.type=s.type.toUpperCase();// Determine if request has content
s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
cacheURL=s.url.replace(rhash,"");// More options handling for requests with no content
if(!s.hasContent){// Remember the hash so we can put it back
uncached=s.url.slice(cacheURL.length);// If data is available and should be processed, append data to url
if(s.data&&(s.processData||typeof s.data==="string")){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;// trac-9682: remove data so that it's not used in an eventual retry
delete s.data;}// Add or update anti-cache param if needed
if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+nonce.guid++ +uncached;}// Put hash and anti-cache on the URL that will be requested (gh-1732)
s.url=cacheURL+uncached;// Change '%20' to '+' if this is encoded form body content (gh-2658)
}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){// Abort if not done already and return
return jqXHR.abort();}// Aborting is no longer a cancellation
strAbort="abort";// Install callbacks on deferreds
completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);// Get transport
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
if(completed){return jqXHR;}// Timeout
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{completed=false;transport.send(requestHeaders,done);}catch(e){// Rethrow post-completion exceptions
if(completed){throw e;}// Propagate others as results
done(-1,e);}}// Callback for when everything is done
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Ignore repeat invocations
if(completed){return;}completed=true;// Clear timeout if it exists
if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
transport=undefined;// Cache response headers
responseHeadersString=headers||"";// Set readyState
jqXHR.readyState=status>0?4:0;// Determine if successful
isSuccess=status>=200&&status<300||status===304;// Get response data
if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Use a noop converter for missing script but not if jsonp
if(!isSuccess&&jQuery.inArray("script",s.dataTypes)>-1&&jQuery.inArray("json",s.dataTypes)<0){s.converters["text script"]=function(){};}// Convert no matter what (that way responseXXX fields are always set)
response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
}else if(status===304){statusText="notmodified";// If we have data, let's convert it
}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(_i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
if(isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery.ajaxPrefilter(function(s){var i;for(i in s.headers){if(i.toLowerCase()==="content-type"){s.contentType=s.headers[i]||"";}}});jQuery._evalUrl=function(url,options,doc){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:true,async:false,global:false,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(response){jQuery.globalEval(response,options,doc);}});};jQuery.fn.extend({wrapAll:function(html){var wrap;if(this[0]){if(isFunction(html)){html=html.call(this[0]);}// The elements to wrap the target around
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function(html){if(isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var htmlIsFunction=isFunction(html);return this.each(function(i){jQuery(this).wrapAll(htmlIsFunction?html.call(this,i):html);});},unwrap:function(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
callback=function(type){return function(){if(callback){callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.ontimeout=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see trac-8605, trac-14207
xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
xhr.onload=callback();errorCallback=xhr.onerror=xhr.ontimeout=callback("error");// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
if(xhr.readyState===4){// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
window.setTimeout(function(){if(callback){errorCallback();}});}};}// Create the abort callback
callback=callback("abort");try{// Do send the request (this may raise an exception)
xhr.send(options.hasContent&&options.data||null);}catch(e){// trac-14683: Only rethrow if this hasn't been notified as an error yet
if(callback){throw e;}}},abort:function(){if(callback){callback();}}};}});// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});// Install script dataType
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain or forced-by-attrs requests
if(s.crossDomain||s.scriptAttrs){var script,callback;return{send:function(_,complete){script=jQuery("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
document.head.appendChild(script[0]);},abort:function(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce.guid++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
callbackName=s.jsonpCallback=isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
s.dataTypes[0]="json";// Install callback
overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
jqXHR.always(function(){// If previous value didn't exist - remove it
if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
}else{window[callbackName]=overwritten;}// Save back as free
if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
if(responseContainer&&isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
return"script";}});// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument=function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;}();// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}if(typeof context==="boolean"){keepScripts=context;context=false;}var base,parsed,scripts;if(!context){// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];// Single tag
if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};/**
 * Load a url into a page
 */jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}// If it's a function
if(isFunction(params)){// We assume that it's the callback
callback=params;params=undefined;// Otherwise, build a param string
}else if(params&&typeof params==="object"){type="POST";}// If we have elements to modify, make the request
if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({// offset() relates an element's border box to the document origin
offset:function(options){// Preserve chaining for setter
if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var rect,win,elem=this[0];if(!elem){return;}// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
if(!elem.getClientRects().length){return{top:0,left:0};}// Get document-relative position by adding viewport scroll to viewport-relative gBCR
rect=elem.getBoundingClientRect();win=elem.ownerDocument.defaultView;return{top:rect.top+win.pageYOffset,left:rect.left+win.pageXOffset};},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(!this[0]){return;}var offsetParent,offset,doc,elem=this[0],parentOffset={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if(jQuery.css(elem,"position")==="fixed"){// Assume position:fixed implies availability of getBoundingClientRect
offset=elem.getBoundingClientRect();}else{offset=this.offset();// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
doc=elem.ownerDocument;offsetParent=elem.offsetParent||doc.documentElement;while(offsetParent&&(offsetParent===doc.body||offsetParent===doc.documentElement)&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.parentNode;}if(offsetParent&&offsetParent!==elem&&offsetParent.nodeType===1){// Incorporate borders into its offset, since they are outside its content origin
parentOffset=jQuery(offsetParent).offset();parentOffset.top+=jQuery.css(offsetParent,"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent,"borderLeftWidth",true);}}// Subtract parent offsets and element margins
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){// Coalesce documents and windows
var win;if(isWindow(elem)){win=elem;}else if(elem.nodeType===9){win=elem.defaultView;}if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each(["top","left"],function(_i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(isWindow(elem)){// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}// Get document width or height
if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
// whichever is greatest
return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
jQuery.css(elem,type,extra):// Set width or height on the element
jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(_i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},hover:function(fnOver,fnOut){return this.on("mouseenter",fnOver).on("mouseleave",fnOut||fnOver);}});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(_i,name){// Handle event binding
jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy=function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if(!isFunction(fn)){return undefined;}// Simulated bind
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;};jQuery.holdReady=function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}};jQuery.isArray=Array.isArray;jQuery.parseJSON=JSON.parse;jQuery.nodeName=nodeName;jQuery.isFunction=isFunction;jQuery.isWindow=isWindow;jQuery.camelCase=camelCase;jQuery.type=toType;jQuery.now=Date.now;jQuery.isNumeric=function(obj){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var type=jQuery.type(obj);return(type==="number"||type==="string")&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(obj-parseFloat(obj));};jQuery.trim=function(text){return text==null?"":(text+"").replace(rtrim,"$1");};// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}var// Map over jQuery in case of overwrite
_jQuery=window.jQuery,// Map over the $ in case of overwrite
_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if(typeof noGlobal==="undefined"){window.jQuery=window.$=jQuery;}return jQuery;});/* flatpickr v4.6.13, @license MIT */(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):(global=typeof globalThis!=='undefined'?globalThis:global||self,global.flatpickr=factory());})(this,function(){'use strict';/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var __assign=function(){__assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};function __spreadArrays(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;for(var r=Array(s),k=0,i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r;}var HOOKS=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"];var defaults={_disable:[],allowInput:false,allowInvalidPreload:false,altFormat:"F j, Y",altInput:false,altInputClass:"form-control input",animate:typeof window==="object"&&window.navigator.userAgent.indexOf("MSIE")===-1,ariaDateFormat:"F j, Y",autoFillDefaultTime:true,clickOpens:true,closeOnSelect:true,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:false,enableSeconds:false,enableTime:false,errorHandler:function(err){return typeof console!=="undefined"&&void 0;},getWeek:function(givenDate){var date=new Date(givenDate.getTime());date.setHours(0,0,0,0);// Thursday in current week decides the year.
date.setDate(date.getDate()+3-(date.getDay()+6)%7);// January 4 is always in week 1.
var week1=new Date(date.getFullYear(),0,4);// Adjust to Thursday in week 1 and count number of weeks from date to week1.
return 1+Math.round(((date.getTime()-week1.getTime())/86400000-3+(week1.getDay()+6)%7)/7);},hourIncrement:1,ignoredFocusElements:[],inline:false,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:false,now:new Date(),onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:undefined,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:false,showMonths:1,static:false,time_24hr:false,weekNumbers:false,wrap:false};var english={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(nth){var s=nth%100;if(s>3&&s<21)return"th";switch(s%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th";}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:false};var pad=function(number,length){if(length===void 0){length=2;}return("000"+number).slice(length*-1);};var int=function(bool){return bool===true?1:0;};/* istanbul ignore next */function debounce(fn,wait){var t;return function(){var _this=this;var args=arguments;clearTimeout(t);t=setTimeout(function(){return fn.apply(_this,args);},wait);};}var arrayify=function(obj){return obj instanceof Array?obj:[obj];};function toggleClass(elem,className,bool){if(bool===true)return elem.classList.add(className);elem.classList.remove(className);}function createElement(tag,className,content){var e=window.document.createElement(tag);className=className||"";content=content||"";e.className=className;if(content!==undefined)e.textContent=content;return e;}function clearNode(node){while(node.firstChild)node.removeChild(node.firstChild);}function findParent(node,condition){if(condition(node))return node;else if(node.parentNode)return findParent(node.parentNode,condition);return undefined;// nothing found
}function createNumberInput(inputClassName,opts){var wrapper=createElement("div","numInputWrapper"),numInput=createElement("input","numInput "+inputClassName),arrowUp=createElement("span","arrowUp"),arrowDown=createElement("span","arrowDown");if(navigator.userAgent.indexOf("MSIE 9.0")===-1){numInput.type="number";}else{numInput.type="text";numInput.pattern="\\d*";}if(opts!==undefined)for(var key in opts)numInput.setAttribute(key,opts[key]);wrapper.appendChild(numInput);wrapper.appendChild(arrowUp);wrapper.appendChild(arrowDown);return wrapper;}function getEventTarget(event){try{if(typeof event.composedPath==="function"){var path=event.composedPath();return path[0];}return event.target;}catch(error){return event.target;}}var doNothing=function(){return undefined;};var monthToStr=function(monthNumber,shorthand,locale){return locale.months[shorthand?"shorthand":"longhand"][monthNumber];};var revFormat={D:doNothing,F:function(dateObj,monthName,locale){dateObj.setMonth(locale.months.longhand.indexOf(monthName));},G:function(dateObj,hour){dateObj.setHours((dateObj.getHours()>=12?12:0)+parseFloat(hour));},H:function(dateObj,hour){dateObj.setHours(parseFloat(hour));},J:function(dateObj,day){dateObj.setDate(parseFloat(day));},K:function(dateObj,amPM,locale){dateObj.setHours(dateObj.getHours()%12+12*int(new RegExp(locale.amPM[1],"i").test(amPM)));},M:function(dateObj,shortMonth,locale){dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));},S:function(dateObj,seconds){dateObj.setSeconds(parseFloat(seconds));},U:function(_,unixSeconds){return new Date(parseFloat(unixSeconds)*1000);},W:function(dateObj,weekNum,locale){var weekNumber=parseInt(weekNum);var date=new Date(dateObj.getFullYear(),0,2+(weekNumber-1)*7,0,0,0,0);date.setDate(date.getDate()-date.getDay()+locale.firstDayOfWeek);return date;},Y:function(dateObj,year){dateObj.setFullYear(parseFloat(year));},Z:function(_,ISODate){return new Date(ISODate);},d:function(dateObj,day){dateObj.setDate(parseFloat(day));},h:function(dateObj,hour){dateObj.setHours((dateObj.getHours()>=12?12:0)+parseFloat(hour));},i:function(dateObj,minutes){dateObj.setMinutes(parseFloat(minutes));},j:function(dateObj,day){dateObj.setDate(parseFloat(day));},l:doNothing,m:function(dateObj,month){dateObj.setMonth(parseFloat(month)-1);},n:function(dateObj,month){dateObj.setMonth(parseFloat(month)-1);},s:function(dateObj,seconds){dateObj.setSeconds(parseFloat(seconds));},u:function(_,unixMillSeconds){return new Date(parseFloat(unixMillSeconds));},w:doNothing,y:function(dateObj,year){dateObj.setFullYear(2000+parseFloat(year));}};var tokenRegex={D:"",F:"",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"};var formats={// get the date in UTC
Z:function(date){return date.toISOString();},// weekday name, short, e.g. Thu
D:function(date,locale,options){return locale.weekdays.shorthand[formats.w(date,locale,options)];},// full month name e.g. January
F:function(date,locale,options){return monthToStr(formats.n(date,locale,options)-1,false,locale);},// padded hour 1-12
G:function(date,locale,options){return pad(formats.h(date,locale,options));},// hours with leading zero e.g. 03
H:function(date){return pad(date.getHours());},// day (1-30) with ordinal suffix e.g. 1st, 2nd
J:function(date,locale){return locale.ordinal!==undefined?date.getDate()+locale.ordinal(date.getDate()):date.getDate();},// AM/PM
K:function(date,locale){return locale.amPM[int(date.getHours()>11)];},// shorthand month e.g. Jan, Sep, Oct, etc
M:function(date,locale){return monthToStr(date.getMonth(),true,locale);},// seconds 00-59
S:function(date){return pad(date.getSeconds());},// unix timestamp
U:function(date){return date.getTime()/1000;},W:function(date,_,options){return options.getWeek(date);},// full year e.g. 2016, padded (0001-9999)
Y:function(date){return pad(date.getFullYear(),4);},// day in month, padded (01-30)
d:function(date){return pad(date.getDate());},// hour from 1-12 (am/pm)
h:function(date){return date.getHours()%12?date.getHours()%12:12;},// minutes, padded with leading zero e.g. 09
i:function(date){return pad(date.getMinutes());},// day in month (1-30)
j:function(date){return date.getDate();},// weekday name, full, e.g. Thursday
l:function(date,locale){return locale.weekdays.longhand[date.getDay()];},// padded month number (01-12)
m:function(date){return pad(date.getMonth()+1);},// the month number (1-12)
n:function(date){return date.getMonth()+1;},// seconds 0-59
s:function(date){return date.getSeconds();},// Unix Milliseconds
u:function(date){return date.getTime();},// number of the day of the week
w:function(date){return date.getDay();},// last two digits of year e.g. 16 for 2016
y:function(date){return String(date.getFullYear()).substring(2);}};var createDateFormatter=function(_a){var _b=_a.config,config=_b===void 0?defaults:_b,_c=_a.l10n,l10n=_c===void 0?english:_c,_d=_a.isMobile,isMobile=_d===void 0?false:_d;return function(dateObj,frmt,overrideLocale){var locale=overrideLocale||l10n;if(config.formatDate!==undefined&&!isMobile){return config.formatDate(dateObj,frmt,locale);}return frmt.split("").map(function(c,i,arr){return formats[c]&&arr[i-1]!=="\\"?formats[c](dateObj,locale,config):c!=="\\"?c:"";}).join("");};};var createDateParser=function(_a){var _b=_a.config,config=_b===void 0?defaults:_b,_c=_a.l10n,l10n=_c===void 0?english:_c;return function(date,givenFormat,timeless,customLocale){if(date!==0&&!date)return undefined;var locale=customLocale||l10n;var parsedDate;var dateOrig=date;if(date instanceof Date)parsedDate=new Date(date.getTime());else if(typeof date!=="string"&&date.toFixed!==undefined// timestamp
)// create a copy
parsedDate=new Date(date);else if(typeof date==="string"){// date string
var format=givenFormat||(config||defaults).dateFormat;var datestr=String(date).trim();if(datestr==="today"){parsedDate=new Date();timeless=true;}else if(config&&config.parseDate){parsedDate=config.parseDate(date,format);}else if(/Z$/.test(datestr)||/GMT$/.test(datestr)// datestrings w/ timezone
){parsedDate=new Date(date);}else{var matched=void 0,ops=[];for(var i=0,matchIndex=0,regexStr="";i<format.length;i++){var token_1=format[i];var isBackSlash=token_1==="\\";var escaped=format[i-1]==="\\"||isBackSlash;if(tokenRegex[token_1]&&!escaped){regexStr+=tokenRegex[token_1];var match=new RegExp(regexStr).exec(date);if(match&&(matched=true)){ops[token_1!=="Y"?"push":"unshift"]({fn:revFormat[token_1],val:match[++matchIndex]});}}else if(!isBackSlash)regexStr+=".";// don't really care
}parsedDate=!config||!config.noCalendar?new Date(new Date().getFullYear(),0,1,0,0,0,0):new Date(new Date().setHours(0,0,0,0));ops.forEach(function(_a){var fn=_a.fn,val=_a.val;return parsedDate=fn(parsedDate,val,locale)||parsedDate;});parsedDate=matched?parsedDate:undefined;}}/* istanbul ignore next */if(!(parsedDate instanceof Date&&!isNaN(parsedDate.getTime()))){config.errorHandler(new Error("Invalid date provided: "+dateOrig));return undefined;}if(timeless===true)parsedDate.setHours(0,0,0,0);return parsedDate;};};/**
     * Compute the difference in dates, measured in ms
     */function compareDates(date1,date2,timeless){if(timeless===void 0){timeless=true;}if(timeless!==false){return new Date(date1.getTime()).setHours(0,0,0,0)-new Date(date2.getTime()).setHours(0,0,0,0);}return date1.getTime()-date2.getTime();}var isBetween=function(ts,ts1,ts2){return ts>Math.min(ts1,ts2)&&ts<Math.max(ts1,ts2);};var calculateSecondsSinceMidnight=function(hours,minutes,seconds){return hours*3600+minutes*60+seconds;};var parseSeconds=function(secondsSinceMidnight){var hours=Math.floor(secondsSinceMidnight/3600),minutes=(secondsSinceMidnight-hours*3600)/60;return[hours,minutes,secondsSinceMidnight-hours*3600-minutes*60];};var duration={DAY:86400000};function getDefaultHours(config){var hours=config.defaultHour;var minutes=config.defaultMinute;var seconds=config.defaultSeconds;if(config.minDate!==undefined){var minHour=config.minDate.getHours();var minMinutes=config.minDate.getMinutes();var minSeconds=config.minDate.getSeconds();if(hours<minHour){hours=minHour;}if(hours===minHour&&minutes<minMinutes){minutes=minMinutes;}if(hours===minHour&&minutes===minMinutes&&seconds<minSeconds)seconds=config.minDate.getSeconds();}if(config.maxDate!==undefined){var maxHr=config.maxDate.getHours();var maxMinutes=config.maxDate.getMinutes();hours=Math.min(hours,maxHr);if(hours===maxHr)minutes=Math.min(maxMinutes,minutes);if(hours===maxHr&&minutes===maxMinutes)seconds=config.maxDate.getSeconds();}return{hours:hours,minutes:minutes,seconds:seconds};}if(typeof Object.assign!=="function"){Object.assign=function(target){var args=[];for(var _i=1;_i<arguments.length;_i++){args[_i-1]=arguments[_i];}if(!target){throw TypeError("Cannot convert undefined or null to object");}var _loop_1=function(source){if(source){Object.keys(source).forEach(function(key){return target[key]=source[key];});}};for(var _a=0,args_1=args;_a<args_1.length;_a++){var source=args_1[_a];_loop_1(source);}return target;};}var DEBOUNCED_CHANGE_MS=300;function FlatpickrInstance(element,instanceConfig){var self={config:__assign(__assign({},defaults),flatpickr.defaultConfig),l10n:english};self.parseDate=createDateParser({config:self.config,l10n:self.l10n});self._handlers=[];self.pluginElements=[];self.loadedPlugins=[];self._bind=bind;self._setHoursFromDate=setHoursFromDate;self._positionCalendar=positionCalendar;self.changeMonth=changeMonth;self.changeYear=changeYear;self.clear=clear;self.close=close;self.onMouseOver=onMouseOver;self._createElement=createElement;self.createDay=createDay;self.destroy=destroy;self.isEnabled=isEnabled;self.jumpToDate=jumpToDate;self.updateValue=updateValue;self.open=open;self.redraw=redraw;self.set=set;self.setDate=setDate;self.toggle=toggle;function setupHelperFunctions(){self.utils={getDaysInMonth:function(month,yr){if(month===void 0){month=self.currentMonth;}if(yr===void 0){yr=self.currentYear;}if(month===1&&(yr%4===0&&yr%100!==0||yr%400===0))return 29;return self.l10n.daysInMonth[month];}};}function init(){self.element=self.input=element;self.isOpen=false;parseConfig();setupLocale();setupInputs();setupDates();setupHelperFunctions();if(!self.isMobile)build();bindEvents();if(self.selectedDates.length||self.config.noCalendar){if(self.config.enableTime){setHoursFromDate(self.config.noCalendar?self.latestSelectedDateObj:undefined);}updateValue(false);}setCalendarWidth();var isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);/* TODO: investigate this further
        
              Currently, there is weird positioning behavior in safari causing pages
              to scroll up. https://github.com/chmln/flatpickr/issues/563
        
              However, most browsers are not Safari and positioning is expensive when used
              in scale. https://github.com/chmln/flatpickr/issues/1096
            */if(!self.isMobile&&isSafari){positionCalendar();}triggerEvent("onReady");}function getClosestActiveElement(){var _a;return((_a=self.calendarContainer)===null||_a===void 0?void 0:_a.getRootNode()).activeElement||document.activeElement;}function bindToInstance(fn){return fn.bind(self);}function setCalendarWidth(){var config=self.config;if(config.weekNumbers===false&&config.showMonths===1){return;}else if(config.noCalendar!==true){window.requestAnimationFrame(function(){if(self.calendarContainer!==undefined){self.calendarContainer.style.visibility="hidden";self.calendarContainer.style.display="block";}if(self.daysContainer!==undefined){var daysWidth=(self.days.offsetWidth+1)*config.showMonths;self.daysContainer.style.width=daysWidth+"px";self.calendarContainer.style.width=daysWidth+(self.weekWrapper!==undefined?self.weekWrapper.offsetWidth:0)+"px";self.calendarContainer.style.removeProperty("visibility");self.calendarContainer.style.removeProperty("display");}});}}/**
         * The handler for all events targeting the time inputs
         */function updateTime(e){if(self.selectedDates.length===0){var defaultDate=self.config.minDate===undefined||compareDates(new Date(),self.config.minDate)>=0?new Date():new Date(self.config.minDate.getTime());var defaults=getDefaultHours(self.config);defaultDate.setHours(defaults.hours,defaults.minutes,defaults.seconds,defaultDate.getMilliseconds());self.selectedDates=[defaultDate];self.latestSelectedDateObj=defaultDate;}if(e!==undefined&&e.type!=="blur"){timeWrapper(e);}var prevValue=self._input.value;setHoursFromInputs();updateValue();if(self._input.value!==prevValue){self._debouncedChange();}}function ampm2military(hour,amPM){return hour%12+12*int(amPM===self.l10n.amPM[1]);}function military2ampm(hour){switch(hour%24){case 0:case 12:return 12;default:return hour%12;}}/**
         * Syncs the selected date object time with user's time input
         */function setHoursFromInputs(){if(self.hourElement===undefined||self.minuteElement===undefined)return;var hours=(parseInt(self.hourElement.value.slice(-2),10)||0)%24,minutes=(parseInt(self.minuteElement.value,10)||0)%60,seconds=self.secondElement!==undefined?(parseInt(self.secondElement.value,10)||0)%60:0;if(self.amPM!==undefined){hours=ampm2military(hours,self.amPM.textContent);}var limitMinHours=self.config.minTime!==undefined||self.config.minDate&&self.minDateHasTime&&self.latestSelectedDateObj&&compareDates(self.latestSelectedDateObj,self.config.minDate,true)===0;var limitMaxHours=self.config.maxTime!==undefined||self.config.maxDate&&self.maxDateHasTime&&self.latestSelectedDateObj&&compareDates(self.latestSelectedDateObj,self.config.maxDate,true)===0;if(self.config.maxTime!==undefined&&self.config.minTime!==undefined&&self.config.minTime>self.config.maxTime){var minBound=calculateSecondsSinceMidnight(self.config.minTime.getHours(),self.config.minTime.getMinutes(),self.config.minTime.getSeconds());var maxBound=calculateSecondsSinceMidnight(self.config.maxTime.getHours(),self.config.maxTime.getMinutes(),self.config.maxTime.getSeconds());var currentTime=calculateSecondsSinceMidnight(hours,minutes,seconds);if(currentTime>maxBound&&currentTime<minBound){var result=parseSeconds(minBound);hours=result[0];minutes=result[1];seconds=result[2];}}else{if(limitMaxHours){var maxTime=self.config.maxTime!==undefined?self.config.maxTime:self.config.maxDate;hours=Math.min(hours,maxTime.getHours());if(hours===maxTime.getHours())minutes=Math.min(minutes,maxTime.getMinutes());if(minutes===maxTime.getMinutes())seconds=Math.min(seconds,maxTime.getSeconds());}if(limitMinHours){var minTime=self.config.minTime!==undefined?self.config.minTime:self.config.minDate;hours=Math.max(hours,minTime.getHours());if(hours===minTime.getHours()&&minutes<minTime.getMinutes())minutes=minTime.getMinutes();if(minutes===minTime.getMinutes())seconds=Math.max(seconds,minTime.getSeconds());}}setHours(hours,minutes,seconds);}/**
         * Syncs time input values with a date
         */function setHoursFromDate(dateObj){var date=dateObj||self.latestSelectedDateObj;if(date&&date instanceof Date){setHours(date.getHours(),date.getMinutes(),date.getSeconds());}}/**
         * Sets the hours, minutes, and optionally seconds
         * of the latest selected date object and the
         * corresponding time inputs
         * @param {Number} hours the hour. whether its military
         *                 or am-pm gets inferred from config
         * @param {Number} minutes the minutes
         * @param {Number} seconds the seconds (optional)
         */function setHours(hours,minutes,seconds){if(self.latestSelectedDateObj!==undefined){self.latestSelectedDateObj.setHours(hours%24,minutes,seconds||0,0);}if(!self.hourElement||!self.minuteElement||self.isMobile)return;self.hourElement.value=pad(!self.config.time_24hr?(12+hours)%12+12*int(hours%12===0):hours);self.minuteElement.value=pad(minutes);if(self.amPM!==undefined)self.amPM.textContent=self.l10n.amPM[int(hours>=12)];if(self.secondElement!==undefined)self.secondElement.value=pad(seconds);}/**
         * Handles the year input and incrementing events
         * @param {Event} event the keyup or increment event
         */function onYearInput(event){var eventTarget=getEventTarget(event);var year=parseInt(eventTarget.value)+(event.delta||0);if(year/1000>1||event.key==="Enter"&&!/[^\d]/.test(year.toString())){changeYear(year);}}/**
         * Essentially addEventListener + tracking
         * @param {Element} element the element to addEventListener to
         * @param {String} event the event name
         * @param {Function} handler the event handler
         */function bind(element,event,handler,options){if(event instanceof Array)return event.forEach(function(ev){return bind(element,ev,handler,options);});if(element instanceof Array)return element.forEach(function(el){return bind(el,event,handler,options);});element.addEventListener(event,handler,options);self._handlers.push({remove:function(){return element.removeEventListener(event,handler,options);}});}function triggerChange(){triggerEvent("onChange");}/**
         * Adds all the necessary event listeners
         */function bindEvents(){if(self.config.wrap){["open","close","toggle","clear"].forEach(function(evt){Array.prototype.forEach.call(self.element.querySelectorAll("[data-"+evt+"]"),function(el){return bind(el,"click",self[evt]);});});}if(self.isMobile){setupMobile();return;}var debouncedResize=debounce(onResize,50);self._debouncedChange=debounce(triggerChange,DEBOUNCED_CHANGE_MS);if(self.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent))bind(self.daysContainer,"mouseover",function(e){if(self.config.mode==="range")onMouseOver(getEventTarget(e));});bind(self._input,"keydown",onKeyDown);if(self.calendarContainer!==undefined){bind(self.calendarContainer,"keydown",onKeyDown);}if(!self.config.inline&&!self.config.static)bind(window,"resize",debouncedResize);if(window.ontouchstart!==undefined)bind(window.document,"touchstart",documentClick);else bind(window.document,"mousedown",documentClick);bind(window.document,"focus",documentClick,{capture:true});if(self.config.clickOpens===true){bind(self._input,"focus",self.open);bind(self._input,"click",self.open);}if(self.daysContainer!==undefined){bind(self.monthNav,"click",onMonthNavClick);bind(self.monthNav,["keyup","increment"],onYearInput);bind(self.daysContainer,"click",selectDate);}if(self.timeContainer!==undefined&&self.minuteElement!==undefined&&self.hourElement!==undefined){var selText=function(e){return getEventTarget(e).select();};bind(self.timeContainer,["increment"],updateTime);bind(self.timeContainer,"blur",updateTime,{capture:true});bind(self.timeContainer,"click",timeIncrement);bind([self.hourElement,self.minuteElement],["focus","click"],selText);if(self.secondElement!==undefined)bind(self.secondElement,"focus",function(){return self.secondElement&&self.secondElement.select();});if(self.amPM!==undefined){bind(self.amPM,"click",function(e){updateTime(e);});}}if(self.config.allowInput){bind(self._input,"blur",onBlur);}}/**
         * Set the calendar view to a particular date.
         * @param {Date} jumpDate the date to set the view to
         * @param {boolean} triggerChange if change events should be triggered
         */function jumpToDate(jumpDate,triggerChange){var jumpTo=jumpDate!==undefined?self.parseDate(jumpDate):self.latestSelectedDateObj||(self.config.minDate&&self.config.minDate>self.now?self.config.minDate:self.config.maxDate&&self.config.maxDate<self.now?self.config.maxDate:self.now);var oldYear=self.currentYear;var oldMonth=self.currentMonth;try{if(jumpTo!==undefined){self.currentYear=jumpTo.getFullYear();self.currentMonth=jumpTo.getMonth();}}catch(e){/* istanbul ignore next */e.message="Invalid date supplied: "+jumpTo;self.config.errorHandler(e);}if(triggerChange&&self.currentYear!==oldYear){triggerEvent("onYearChange");buildMonthSwitch();}if(triggerChange&&(self.currentYear!==oldYear||self.currentMonth!==oldMonth)){triggerEvent("onMonthChange");}self.redraw();}/**
         * The up/down arrow handler for time inputs
         * @param {Event} e the click event
         */function timeIncrement(e){var eventTarget=getEventTarget(e);if(~eventTarget.className.indexOf("arrow"))incrementNumInput(e,eventTarget.classList.contains("arrowUp")?1:-1);}/**
         * Increments/decrements the value of input associ-
         * ated with the up/down arrow by dispatching an
         * "increment" event on the input.
         *
         * @param {Event} e the click event
         * @param {Number} delta the diff (usually 1 or -1)
         * @param {Element} inputElem the input element
         */function incrementNumInput(e,delta,inputElem){var target=e&&getEventTarget(e);var input=inputElem||target&&target.parentNode&&target.parentNode.firstChild;var event=createEvent("increment");event.delta=delta;input&&input.dispatchEvent(event);}function build(){var fragment=window.document.createDocumentFragment();self.calendarContainer=createElement("div","flatpickr-calendar");self.calendarContainer.tabIndex=-1;if(!self.config.noCalendar){fragment.appendChild(buildMonthNav());self.innerContainer=createElement("div","flatpickr-innerContainer");if(self.config.weekNumbers){var _a=buildWeeks(),weekWrapper=_a.weekWrapper,weekNumbers=_a.weekNumbers;self.innerContainer.appendChild(weekWrapper);self.weekNumbers=weekNumbers;self.weekWrapper=weekWrapper;}self.rContainer=createElement("div","flatpickr-rContainer");self.rContainer.appendChild(buildWeekdays());if(!self.daysContainer){self.daysContainer=createElement("div","flatpickr-days");self.daysContainer.tabIndex=-1;}buildDays();self.rContainer.appendChild(self.daysContainer);self.innerContainer.appendChild(self.rContainer);fragment.appendChild(self.innerContainer);}if(self.config.enableTime){fragment.appendChild(buildTime());}toggleClass(self.calendarContainer,"rangeMode",self.config.mode==="range");toggleClass(self.calendarContainer,"animate",self.config.animate===true);toggleClass(self.calendarContainer,"multiMonth",self.config.showMonths>1);self.calendarContainer.appendChild(fragment);var customAppend=self.config.appendTo!==undefined&&self.config.appendTo.nodeType!==undefined;if(self.config.inline||self.config.static){self.calendarContainer.classList.add(self.config.inline?"inline":"static");if(self.config.inline){if(!customAppend&&self.element.parentNode)self.element.parentNode.insertBefore(self.calendarContainer,self._input.nextSibling);else if(self.config.appendTo!==undefined)self.config.appendTo.appendChild(self.calendarContainer);}if(self.config.static){var wrapper=createElement("div","flatpickr-wrapper");if(self.element.parentNode)self.element.parentNode.insertBefore(wrapper,self.element);wrapper.appendChild(self.element);if(self.altInput)wrapper.appendChild(self.altInput);wrapper.appendChild(self.calendarContainer);}}if(!self.config.static&&!self.config.inline)(self.config.appendTo!==undefined?self.config.appendTo:window.document.body).appendChild(self.calendarContainer);}function createDay(className,date,_dayNumber,i){var dateIsEnabled=isEnabled(date,true),dayElement=createElement("span",className,date.getDate().toString());dayElement.dateObj=date;dayElement.$i=i;dayElement.setAttribute("aria-label",self.formatDate(date,self.config.ariaDateFormat));if(className.indexOf("hidden")===-1&&compareDates(date,self.now)===0){self.todayDateElem=dayElement;dayElement.classList.add("today");dayElement.setAttribute("aria-current","date");}if(dateIsEnabled){dayElement.tabIndex=-1;if(isDateSelected(date)){dayElement.classList.add("selected");self.selectedDateElem=dayElement;if(self.config.mode==="range"){toggleClass(dayElement,"startRange",self.selectedDates[0]&&compareDates(date,self.selectedDates[0],true)===0);toggleClass(dayElement,"endRange",self.selectedDates[1]&&compareDates(date,self.selectedDates[1],true)===0);if(className==="nextMonthDay")dayElement.classList.add("inRange");}}}else{dayElement.classList.add("flatpickr-disabled");}if(self.config.mode==="range"){if(isDateInRange(date)&&!isDateSelected(date))dayElement.classList.add("inRange");}if(self.weekNumbers&&self.config.showMonths===1&&className!=="prevMonthDay"&&i%7===6){self.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+self.config.getWeek(date)+"</span>");}triggerEvent("onDayCreate",dayElement);return dayElement;}function focusOnDayElem(targetNode){targetNode.focus();if(self.config.mode==="range")onMouseOver(targetNode);}function getFirstAvailableDay(delta){var startMonth=delta>0?0:self.config.showMonths-1;var endMonth=delta>0?self.config.showMonths:-1;for(var m=startMonth;m!=endMonth;m+=delta){var month=self.daysContainer.children[m];var startIndex=delta>0?0:month.children.length-1;var endIndex=delta>0?month.children.length:-1;for(var i=startIndex;i!=endIndex;i+=delta){var c=month.children[i];if(c.className.indexOf("hidden")===-1&&isEnabled(c.dateObj))return c;}}return undefined;}function getNextAvailableDay(current,delta){var givenMonth=current.className.indexOf("Month")===-1?current.dateObj.getMonth():self.currentMonth;var endMonth=delta>0?self.config.showMonths:-1;var loopDelta=delta>0?1:-1;for(var m=givenMonth-self.currentMonth;m!=endMonth;m+=loopDelta){var month=self.daysContainer.children[m];var startIndex=givenMonth-self.currentMonth===m?current.$i+delta:delta<0?month.children.length-1:0;var numMonthDays=month.children.length;for(var i=startIndex;i>=0&&i<numMonthDays&&i!=(delta>0?numMonthDays:-1);i+=loopDelta){var c=month.children[i];if(c.className.indexOf("hidden")===-1&&isEnabled(c.dateObj)&&Math.abs(current.$i-i)>=Math.abs(delta))return focusOnDayElem(c);}}self.changeMonth(loopDelta);focusOnDay(getFirstAvailableDay(loopDelta),0);return undefined;}function focusOnDay(current,offset){var activeElement=getClosestActiveElement();var dayFocused=isInView(activeElement||document.body);var startElem=current!==undefined?current:dayFocused?activeElement:self.selectedDateElem!==undefined&&isInView(self.selectedDateElem)?self.selectedDateElem:self.todayDateElem!==undefined&&isInView(self.todayDateElem)?self.todayDateElem:getFirstAvailableDay(offset>0?1:-1);if(startElem===undefined){self._input.focus();}else if(!dayFocused){focusOnDayElem(startElem);}else{getNextAvailableDay(startElem,offset);}}function buildMonthDays(year,month){var firstOfMonth=(new Date(year,month,1).getDay()-self.l10n.firstDayOfWeek+7)%7;var prevMonthDays=self.utils.getDaysInMonth((month-1+12)%12,year);var daysInMonth=self.utils.getDaysInMonth(month,year),days=window.document.createDocumentFragment(),isMultiMonth=self.config.showMonths>1,prevMonthDayClass=isMultiMonth?"prevMonthDay hidden":"prevMonthDay",nextMonthDayClass=isMultiMonth?"nextMonthDay hidden":"nextMonthDay";var dayNumber=prevMonthDays+1-firstOfMonth,dayIndex=0;// prepend days from the ending of previous month
for(;dayNumber<=prevMonthDays;dayNumber++,dayIndex++){days.appendChild(createDay("flatpickr-day "+prevMonthDayClass,new Date(year,month-1,dayNumber),dayNumber,dayIndex));}// Start at 1 since there is no 0th day
for(dayNumber=1;dayNumber<=daysInMonth;dayNumber++,dayIndex++){days.appendChild(createDay("flatpickr-day",new Date(year,month,dayNumber),dayNumber,dayIndex));}// append days from the next month
for(var dayNum=daysInMonth+1;dayNum<=42-firstOfMonth&&(self.config.showMonths===1||dayIndex%7!==0);dayNum++,dayIndex++){days.appendChild(createDay("flatpickr-day "+nextMonthDayClass,new Date(year,month+1,dayNum%daysInMonth),dayNum,dayIndex));}//updateNavigationCurrentMonth();
var dayContainer=createElement("div","dayContainer");dayContainer.appendChild(days);return dayContainer;}function buildDays(){if(self.daysContainer===undefined){return;}clearNode(self.daysContainer);// TODO: week numbers for each month
if(self.weekNumbers)clearNode(self.weekNumbers);var frag=document.createDocumentFragment();for(var i=0;i<self.config.showMonths;i++){var d=new Date(self.currentYear,self.currentMonth,1);d.setMonth(self.currentMonth+i);frag.appendChild(buildMonthDays(d.getFullYear(),d.getMonth()));}self.daysContainer.appendChild(frag);self.days=self.daysContainer.firstChild;if(self.config.mode==="range"&&self.selectedDates.length===1){onMouseOver();}}function buildMonthSwitch(){if(self.config.showMonths>1||self.config.monthSelectorType!=="dropdown")return;var shouldBuildMonth=function(month){if(self.config.minDate!==undefined&&self.currentYear===self.config.minDate.getFullYear()&&month<self.config.minDate.getMonth()){return false;}return!(self.config.maxDate!==undefined&&self.currentYear===self.config.maxDate.getFullYear()&&month>self.config.maxDate.getMonth());};self.monthsDropdownContainer.tabIndex=-1;self.monthsDropdownContainer.innerHTML="";for(var i=0;i<12;i++){if(!shouldBuildMonth(i))continue;var month=createElement("option","flatpickr-monthDropdown-month");month.value=new Date(self.currentYear,i).getMonth().toString();month.textContent=monthToStr(i,self.config.shorthandCurrentMonth,self.l10n);month.tabIndex=-1;if(self.currentMonth===i){month.selected=true;}self.monthsDropdownContainer.appendChild(month);}}function buildMonth(){var container=createElement("div","flatpickr-month");var monthNavFragment=window.document.createDocumentFragment();var monthElement;if(self.config.showMonths>1||self.config.monthSelectorType==="static"){monthElement=createElement("span","cur-month");}else{self.monthsDropdownContainer=createElement("select","flatpickr-monthDropdown-months");self.monthsDropdownContainer.setAttribute("aria-label",self.l10n.monthAriaLabel);bind(self.monthsDropdownContainer,"change",function(e){var target=getEventTarget(e);var selectedMonth=parseInt(target.value,10);self.changeMonth(selectedMonth-self.currentMonth);triggerEvent("onMonthChange");});buildMonthSwitch();monthElement=self.monthsDropdownContainer;}var yearInput=createNumberInput("cur-year",{tabindex:"-1"});var yearElement=yearInput.getElementsByTagName("input")[0];yearElement.setAttribute("aria-label",self.l10n.yearAriaLabel);if(self.config.minDate){yearElement.setAttribute("min",self.config.minDate.getFullYear().toString());}if(self.config.maxDate){yearElement.setAttribute("max",self.config.maxDate.getFullYear().toString());yearElement.disabled=!!self.config.minDate&&self.config.minDate.getFullYear()===self.config.maxDate.getFullYear();}var currentMonth=createElement("div","flatpickr-current-month");currentMonth.appendChild(monthElement);currentMonth.appendChild(yearInput);monthNavFragment.appendChild(currentMonth);container.appendChild(monthNavFragment);return{container:container,yearElement:yearElement,monthElement:monthElement};}function buildMonths(){clearNode(self.monthNav);self.monthNav.appendChild(self.prevMonthNav);if(self.config.showMonths){self.yearElements=[];self.monthElements=[];}for(var m=self.config.showMonths;m--;){var month=buildMonth();self.yearElements.push(month.yearElement);self.monthElements.push(month.monthElement);self.monthNav.appendChild(month.container);}self.monthNav.appendChild(self.nextMonthNav);}function buildMonthNav(){self.monthNav=createElement("div","flatpickr-months");self.yearElements=[];self.monthElements=[];self.prevMonthNav=createElement("span","flatpickr-prev-month");self.prevMonthNav.innerHTML=self.config.prevArrow;self.nextMonthNav=createElement("span","flatpickr-next-month");self.nextMonthNav.innerHTML=self.config.nextArrow;buildMonths();Object.defineProperty(self,"_hidePrevMonthArrow",{get:function(){return self.__hidePrevMonthArrow;},set:function(bool){if(self.__hidePrevMonthArrow!==bool){toggleClass(self.prevMonthNav,"flatpickr-disabled",bool);self.__hidePrevMonthArrow=bool;}}});Object.defineProperty(self,"_hideNextMonthArrow",{get:function(){return self.__hideNextMonthArrow;},set:function(bool){if(self.__hideNextMonthArrow!==bool){toggleClass(self.nextMonthNav,"flatpickr-disabled",bool);self.__hideNextMonthArrow=bool;}}});self.currentYearElement=self.yearElements[0];updateNavigationCurrentMonth();return self.monthNav;}function buildTime(){self.calendarContainer.classList.add("hasTime");if(self.config.noCalendar)self.calendarContainer.classList.add("noCalendar");var defaults=getDefaultHours(self.config);self.timeContainer=createElement("div","flatpickr-time");self.timeContainer.tabIndex=-1;var separator=createElement("span","flatpickr-time-separator",":");var hourInput=createNumberInput("flatpickr-hour",{"aria-label":self.l10n.hourAriaLabel});self.hourElement=hourInput.getElementsByTagName("input")[0];var minuteInput=createNumberInput("flatpickr-minute",{"aria-label":self.l10n.minuteAriaLabel});self.minuteElement=minuteInput.getElementsByTagName("input")[0];self.hourElement.tabIndex=self.minuteElement.tabIndex=-1;self.hourElement.value=pad(self.latestSelectedDateObj?self.latestSelectedDateObj.getHours():self.config.time_24hr?defaults.hours:military2ampm(defaults.hours));self.minuteElement.value=pad(self.latestSelectedDateObj?self.latestSelectedDateObj.getMinutes():defaults.minutes);self.hourElement.setAttribute("step",self.config.hourIncrement.toString());self.minuteElement.setAttribute("step",self.config.minuteIncrement.toString());self.hourElement.setAttribute("min",self.config.time_24hr?"0":"1");self.hourElement.setAttribute("max",self.config.time_24hr?"23":"12");self.hourElement.setAttribute("maxlength","2");self.minuteElement.setAttribute("min","0");self.minuteElement.setAttribute("max","59");self.minuteElement.setAttribute("maxlength","2");self.timeContainer.appendChild(hourInput);self.timeContainer.appendChild(separator);self.timeContainer.appendChild(minuteInput);if(self.config.time_24hr)self.timeContainer.classList.add("time24hr");if(self.config.enableSeconds){self.timeContainer.classList.add("hasSeconds");var secondInput=createNumberInput("flatpickr-second");self.secondElement=secondInput.getElementsByTagName("input")[0];self.secondElement.value=pad(self.latestSelectedDateObj?self.latestSelectedDateObj.getSeconds():defaults.seconds);self.secondElement.setAttribute("step",self.minuteElement.getAttribute("step"));self.secondElement.setAttribute("min","0");self.secondElement.setAttribute("max","59");self.secondElement.setAttribute("maxlength","2");self.timeContainer.appendChild(createElement("span","flatpickr-time-separator",":"));self.timeContainer.appendChild(secondInput);}if(!self.config.time_24hr){// add self.amPM if appropriate
self.amPM=createElement("span","flatpickr-am-pm",self.l10n.amPM[int((self.latestSelectedDateObj?self.hourElement.value:self.config.defaultHour)>11)]);self.amPM.title=self.l10n.toggleTitle;self.amPM.tabIndex=-1;self.timeContainer.appendChild(self.amPM);}return self.timeContainer;}function buildWeekdays(){if(!self.weekdayContainer)self.weekdayContainer=createElement("div","flatpickr-weekdays");else clearNode(self.weekdayContainer);for(var i=self.config.showMonths;i--;){var container=createElement("div","flatpickr-weekdaycontainer");self.weekdayContainer.appendChild(container);}updateWeekdays();return self.weekdayContainer;}function updateWeekdays(){if(!self.weekdayContainer){return;}var firstDayOfWeek=self.l10n.firstDayOfWeek;var weekdays=__spreadArrays(self.l10n.weekdays.shorthand);if(firstDayOfWeek>0&&firstDayOfWeek<weekdays.length){weekdays=__spreadArrays(weekdays.splice(firstDayOfWeek,weekdays.length),weekdays.splice(0,firstDayOfWeek));}for(var i=self.config.showMonths;i--;){self.weekdayContainer.children[i].innerHTML="\n      <span class='flatpickr-weekday'>\n        "+weekdays.join("</span><span class='flatpickr-weekday'>")+"\n      </span>\n      ";}}/* istanbul ignore next */function buildWeeks(){self.calendarContainer.classList.add("hasWeeks");var weekWrapper=createElement("div","flatpickr-weekwrapper");weekWrapper.appendChild(createElement("span","flatpickr-weekday",self.l10n.weekAbbreviation));var weekNumbers=createElement("div","flatpickr-weeks");weekWrapper.appendChild(weekNumbers);return{weekWrapper:weekWrapper,weekNumbers:weekNumbers};}function changeMonth(value,isOffset){if(isOffset===void 0){isOffset=true;}var delta=isOffset?value:value-self.currentMonth;if(delta<0&&self._hidePrevMonthArrow===true||delta>0&&self._hideNextMonthArrow===true)return;self.currentMonth+=delta;if(self.currentMonth<0||self.currentMonth>11){self.currentYear+=self.currentMonth>11?1:-1;self.currentMonth=(self.currentMonth+12)%12;triggerEvent("onYearChange");buildMonthSwitch();}buildDays();triggerEvent("onMonthChange");updateNavigationCurrentMonth();}function clear(triggerChangeEvent,toInitial){if(triggerChangeEvent===void 0){triggerChangeEvent=true;}if(toInitial===void 0){toInitial=true;}self.input.value="";if(self.altInput!==undefined)self.altInput.value="";if(self.mobileInput!==undefined)self.mobileInput.value="";self.selectedDates=[];self.latestSelectedDateObj=undefined;if(toInitial===true){self.currentYear=self._initialDate.getFullYear();self.currentMonth=self._initialDate.getMonth();}if(self.config.enableTime===true){var _a=getDefaultHours(self.config),hours=_a.hours,minutes=_a.minutes,seconds=_a.seconds;setHours(hours,minutes,seconds);}self.redraw();if(triggerChangeEvent)// triggerChangeEvent is true (default) or an Event
triggerEvent("onChange");}function close(){self.isOpen=false;if(!self.isMobile){if(self.calendarContainer!==undefined){self.calendarContainer.classList.remove("open");}if(self._input!==undefined){self._input.classList.remove("active");}}triggerEvent("onClose");}function destroy(){if(self.config!==undefined)triggerEvent("onDestroy");for(var i=self._handlers.length;i--;){self._handlers[i].remove();}self._handlers=[];if(self.mobileInput){if(self.mobileInput.parentNode)self.mobileInput.parentNode.removeChild(self.mobileInput);self.mobileInput=undefined;}else if(self.calendarContainer&&self.calendarContainer.parentNode){if(self.config.static&&self.calendarContainer.parentNode){var wrapper=self.calendarContainer.parentNode;wrapper.lastChild&&wrapper.removeChild(wrapper.lastChild);if(wrapper.parentNode){while(wrapper.firstChild)wrapper.parentNode.insertBefore(wrapper.firstChild,wrapper);wrapper.parentNode.removeChild(wrapper);}}else self.calendarContainer.parentNode.removeChild(self.calendarContainer);}if(self.altInput){self.input.type="text";if(self.altInput.parentNode)self.altInput.parentNode.removeChild(self.altInput);delete self.altInput;}if(self.input){self.input.type=self.input._type;self.input.classList.remove("flatpickr-input");self.input.removeAttribute("readonly");}["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(k){try{delete self[k];}catch(_){}});}function isCalendarElem(elem){return self.calendarContainer.contains(elem);}function documentClick(e){if(self.isOpen&&!self.config.inline){var eventTarget_1=getEventTarget(e);var isCalendarElement=isCalendarElem(eventTarget_1);var isInput=eventTarget_1===self.input||eventTarget_1===self.altInput||self.element.contains(eventTarget_1)||// web components
// e.path is not present in all browsers. circumventing typechecks
e.path&&e.path.indexOf&&(~e.path.indexOf(self.input)||~e.path.indexOf(self.altInput));var lostFocus=!isInput&&!isCalendarElement&&!isCalendarElem(e.relatedTarget);var isIgnored=!self.config.ignoredFocusElements.some(function(elem){return elem.contains(eventTarget_1);});if(lostFocus&&isIgnored){if(self.config.allowInput){self.setDate(self._input.value,false,self.config.altInput?self.config.altFormat:self.config.dateFormat);}if(self.timeContainer!==undefined&&self.minuteElement!==undefined&&self.hourElement!==undefined&&self.input.value!==""&&self.input.value!==undefined){updateTime();}self.close();if(self.config&&self.config.mode==="range"&&self.selectedDates.length===1)self.clear(false);}}}function changeYear(newYear){if(!newYear||self.config.minDate&&newYear<self.config.minDate.getFullYear()||self.config.maxDate&&newYear>self.config.maxDate.getFullYear())return;var newYearNum=newYear,isNewYear=self.currentYear!==newYearNum;self.currentYear=newYearNum||self.currentYear;if(self.config.maxDate&&self.currentYear===self.config.maxDate.getFullYear()){self.currentMonth=Math.min(self.config.maxDate.getMonth(),self.currentMonth);}else if(self.config.minDate&&self.currentYear===self.config.minDate.getFullYear()){self.currentMonth=Math.max(self.config.minDate.getMonth(),self.currentMonth);}if(isNewYear){self.redraw();triggerEvent("onYearChange");buildMonthSwitch();}}function isEnabled(date,timeless){var _a;if(timeless===void 0){timeless=true;}var dateToCheck=self.parseDate(date,undefined,timeless);// timeless
if(self.config.minDate&&dateToCheck&&compareDates(dateToCheck,self.config.minDate,timeless!==undefined?timeless:!self.minDateHasTime)<0||self.config.maxDate&&dateToCheck&&compareDates(dateToCheck,self.config.maxDate,timeless!==undefined?timeless:!self.maxDateHasTime)>0)return false;if(!self.config.enable&&self.config.disable.length===0)return true;if(dateToCheck===undefined)return false;var bool=!!self.config.enable,array=(_a=self.config.enable)!==null&&_a!==void 0?_a:self.config.disable;for(var i=0,d=void 0;i<array.length;i++){d=array[i];if(typeof d==="function"&&d(dateToCheck)// disabled by function
)return bool;else if(d instanceof Date&&dateToCheck!==undefined&&d.getTime()===dateToCheck.getTime())// disabled by date
return bool;else if(typeof d==="string"){// disabled by date string
var parsed=self.parseDate(d,undefined,true);return parsed&&parsed.getTime()===dateToCheck.getTime()?bool:!bool;}else if(// disabled by range
typeof d==="object"&&dateToCheck!==undefined&&d.from&&d.to&&dateToCheck.getTime()>=d.from.getTime()&&dateToCheck.getTime()<=d.to.getTime())return bool;}return!bool;}function isInView(elem){if(self.daysContainer!==undefined)return elem.className.indexOf("hidden")===-1&&elem.className.indexOf("flatpickr-disabled")===-1&&self.daysContainer.contains(elem);return false;}function onBlur(e){var isInput=e.target===self._input;var valueChanged=self._input.value.trimEnd()!==getDateStr();if(isInput&&valueChanged&&!(e.relatedTarget&&isCalendarElem(e.relatedTarget))){self.setDate(self._input.value,true,e.target===self.altInput?self.config.altFormat:self.config.dateFormat);}}function onKeyDown(e){// e.key                      e.keyCode
// "Backspace"                        8
// "Tab"                              9
// "Enter"                           13
// "Escape"     (IE "Esc")           27
// "ArrowLeft"  (IE "Left")          37
// "ArrowUp"    (IE "Up")            38
// "ArrowRight" (IE "Right")         39
// "ArrowDown"  (IE "Down")          40
// "Delete"     (IE "Del")           46
var eventTarget=getEventTarget(e);var isInput=self.config.wrap?element.contains(eventTarget):eventTarget===self._input;var allowInput=self.config.allowInput;var allowKeydown=self.isOpen&&(!allowInput||!isInput);var allowInlineKeydown=self.config.inline&&isInput&&!allowInput;if(e.keyCode===13&&isInput){if(allowInput){self.setDate(self._input.value,true,eventTarget===self.altInput?self.config.altFormat:self.config.dateFormat);self.close();return eventTarget.blur();}else{self.open();}}else if(isCalendarElem(eventTarget)||allowKeydown||allowInlineKeydown){var isTimeObj=!!self.timeContainer&&self.timeContainer.contains(eventTarget);switch(e.keyCode){case 13:if(isTimeObj){e.preventDefault();updateTime();focusAndClose();}else selectDate(e);break;case 27:// escape
e.preventDefault();focusAndClose();break;case 8:case 46:if(isInput&&!self.config.allowInput){e.preventDefault();self.clear();}break;case 37:case 39:if(!isTimeObj&&!isInput){e.preventDefault();var activeElement=getClosestActiveElement();if(self.daysContainer!==undefined&&(allowInput===false||activeElement&&isInView(activeElement))){var delta_1=e.keyCode===39?1:-1;if(!e.ctrlKey)focusOnDay(undefined,delta_1);else{e.stopPropagation();changeMonth(delta_1);focusOnDay(getFirstAvailableDay(1),0);}}}else if(self.hourElement)self.hourElement.focus();break;case 38:case 40:e.preventDefault();var delta=e.keyCode===40?1:-1;if(self.daysContainer&&eventTarget.$i!==undefined||eventTarget===self.input||eventTarget===self.altInput){if(e.ctrlKey){e.stopPropagation();changeYear(self.currentYear-delta);focusOnDay(getFirstAvailableDay(1),0);}else if(!isTimeObj)focusOnDay(undefined,delta*7);}else if(eventTarget===self.currentYearElement){changeYear(self.currentYear-delta);}else if(self.config.enableTime){if(!isTimeObj&&self.hourElement)self.hourElement.focus();updateTime(e);self._debouncedChange();}break;case 9:if(isTimeObj){var elems=[self.hourElement,self.minuteElement,self.secondElement,self.amPM].concat(self.pluginElements).filter(function(x){return x;});var i=elems.indexOf(eventTarget);if(i!==-1){var target=elems[i+(e.shiftKey?-1:1)];e.preventDefault();(target||self._input).focus();}}else if(!self.config.noCalendar&&self.daysContainer&&self.daysContainer.contains(eventTarget)&&e.shiftKey){e.preventDefault();self._input.focus();}break;}}if(self.amPM!==undefined&&eventTarget===self.amPM){switch(e.key){case self.l10n.amPM[0].charAt(0):case self.l10n.amPM[0].charAt(0).toLowerCase():self.amPM.textContent=self.l10n.amPM[0];setHoursFromInputs();updateValue();break;case self.l10n.amPM[1].charAt(0):case self.l10n.amPM[1].charAt(0).toLowerCase():self.amPM.textContent=self.l10n.amPM[1];setHoursFromInputs();updateValue();break;}}if(isInput||isCalendarElem(eventTarget)){triggerEvent("onKeyDown",e);}}function onMouseOver(elem,cellClass){if(cellClass===void 0){cellClass="flatpickr-day";}if(self.selectedDates.length!==1||elem&&(!elem.classList.contains(cellClass)||elem.classList.contains("flatpickr-disabled")))return;var hoverDate=elem?elem.dateObj.getTime():self.days.firstElementChild.dateObj.getTime(),initialDate=self.parseDate(self.selectedDates[0],undefined,true).getTime(),rangeStartDate=Math.min(hoverDate,self.selectedDates[0].getTime()),rangeEndDate=Math.max(hoverDate,self.selectedDates[0].getTime());var containsDisabled=false;var minRange=0,maxRange=0;for(var t=rangeStartDate;t<rangeEndDate;t+=duration.DAY){if(!isEnabled(new Date(t),true)){containsDisabled=containsDisabled||t>rangeStartDate&&t<rangeEndDate;if(t<initialDate&&(!minRange||t>minRange))minRange=t;else if(t>initialDate&&(!maxRange||t<maxRange))maxRange=t;}}var hoverableCells=Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+"+self.config.showMonths+") > ."+cellClass));hoverableCells.forEach(function(dayElem){var date=dayElem.dateObj;var timestamp=date.getTime();var outOfRange=minRange>0&&timestamp<minRange||maxRange>0&&timestamp>maxRange;if(outOfRange){dayElem.classList.add("notAllowed");["inRange","startRange","endRange"].forEach(function(c){dayElem.classList.remove(c);});return;}else if(containsDisabled&&!outOfRange)return;["startRange","inRange","endRange","notAllowed"].forEach(function(c){dayElem.classList.remove(c);});if(elem!==undefined){elem.classList.add(hoverDate<=self.selectedDates[0].getTime()?"startRange":"endRange");if(initialDate<hoverDate&&timestamp===initialDate)dayElem.classList.add("startRange");else if(initialDate>hoverDate&&timestamp===initialDate)dayElem.classList.add("endRange");if(timestamp>=minRange&&(maxRange===0||timestamp<=maxRange)&&isBetween(timestamp,initialDate,hoverDate))dayElem.classList.add("inRange");}});}function onResize(){if(self.isOpen&&!self.config.static&&!self.config.inline)positionCalendar();}function open(e,positionElement){if(positionElement===void 0){positionElement=self._positionElement;}if(self.isMobile===true){if(e){e.preventDefault();var eventTarget=getEventTarget(e);if(eventTarget){eventTarget.blur();}}if(self.mobileInput!==undefined){self.mobileInput.focus();self.mobileInput.click();}triggerEvent("onOpen");return;}else if(self._input.disabled||self.config.inline){return;}var wasOpen=self.isOpen;self.isOpen=true;if(!wasOpen){self.calendarContainer.classList.add("open");self._input.classList.add("active");triggerEvent("onOpen");positionCalendar(positionElement);}if(self.config.enableTime===true&&self.config.noCalendar===true){if(self.config.allowInput===false&&(e===undefined||!self.timeContainer.contains(e.relatedTarget))){setTimeout(function(){return self.hourElement.select();},50);}}}function minMaxDateSetter(type){return function(date){var dateObj=self.config["_"+type+"Date"]=self.parseDate(date,self.config.dateFormat);var inverseDateObj=self.config["_"+(type==="min"?"max":"min")+"Date"];if(dateObj!==undefined){self[type==="min"?"minDateHasTime":"maxDateHasTime"]=dateObj.getHours()>0||dateObj.getMinutes()>0||dateObj.getSeconds()>0;}if(self.selectedDates){self.selectedDates=self.selectedDates.filter(function(d){return isEnabled(d);});if(!self.selectedDates.length&&type==="min")setHoursFromDate(dateObj);updateValue();}if(self.daysContainer){redraw();if(dateObj!==undefined)self.currentYearElement[type]=dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);self.currentYearElement.disabled=!!inverseDateObj&&dateObj!==undefined&&inverseDateObj.getFullYear()===dateObj.getFullYear();}};}function parseConfig(){var boolOpts=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"];var userConfig=__assign(__assign({},JSON.parse(JSON.stringify(element.dataset||{}))),instanceConfig);var formats={};self.config.parseDate=userConfig.parseDate;self.config.formatDate=userConfig.formatDate;Object.defineProperty(self.config,"enable",{get:function(){return self.config._enable;},set:function(dates){self.config._enable=parseDateRules(dates);}});Object.defineProperty(self.config,"disable",{get:function(){return self.config._disable;},set:function(dates){self.config._disable=parseDateRules(dates);}});var timeMode=userConfig.mode==="time";if(!userConfig.dateFormat&&(userConfig.enableTime||timeMode)){var defaultDateFormat=flatpickr.defaultConfig.dateFormat||defaults.dateFormat;formats.dateFormat=userConfig.noCalendar||timeMode?"H:i"+(userConfig.enableSeconds?":S":""):defaultDateFormat+" H:i"+(userConfig.enableSeconds?":S":"");}if(userConfig.altInput&&(userConfig.enableTime||timeMode)&&!userConfig.altFormat){var defaultAltFormat=flatpickr.defaultConfig.altFormat||defaults.altFormat;formats.altFormat=userConfig.noCalendar||timeMode?"h:i"+(userConfig.enableSeconds?":S K":" K"):defaultAltFormat+(" h:i"+(userConfig.enableSeconds?":S":"")+" K");}Object.defineProperty(self.config,"minDate",{get:function(){return self.config._minDate;},set:minMaxDateSetter("min")});Object.defineProperty(self.config,"maxDate",{get:function(){return self.config._maxDate;},set:minMaxDateSetter("max")});var minMaxTimeSetter=function(type){return function(val){self.config[type==="min"?"_minTime":"_maxTime"]=self.parseDate(val,"H:i:S");};};Object.defineProperty(self.config,"minTime",{get:function(){return self.config._minTime;},set:minMaxTimeSetter("min")});Object.defineProperty(self.config,"maxTime",{get:function(){return self.config._maxTime;},set:minMaxTimeSetter("max")});if(userConfig.mode==="time"){self.config.noCalendar=true;self.config.enableTime=true;}Object.assign(self.config,formats,userConfig);for(var i=0;i<boolOpts.length;i++)// https://github.com/microsoft/TypeScript/issues/31663
self.config[boolOpts[i]]=self.config[boolOpts[i]]===true||self.config[boolOpts[i]]==="true";HOOKS.filter(function(hook){return self.config[hook]!==undefined;}).forEach(function(hook){self.config[hook]=arrayify(self.config[hook]||[]).map(bindToInstance);});self.isMobile=!self.config.disableMobile&&!self.config.inline&&self.config.mode==="single"&&!self.config.disable.length&&!self.config.enable&&!self.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var i=0;i<self.config.plugins.length;i++){var pluginConf=self.config.plugins[i](self)||{};for(var key in pluginConf){if(HOOKS.indexOf(key)>-1){self.config[key]=arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);}else if(typeof userConfig[key]==="undefined")self.config[key]=pluginConf[key];}}if(!userConfig.altInputClass){self.config.altInputClass=getInputElem().className+" "+self.config.altInputClass;}triggerEvent("onParseConfig");}function getInputElem(){return self.config.wrap?element.querySelector("[data-input]"):element;}function setupLocale(){if(typeof self.config.locale!=="object"&&typeof flatpickr.l10ns[self.config.locale]==="undefined")self.config.errorHandler(new Error("flatpickr: invalid locale "+self.config.locale));self.l10n=__assign(__assign({},flatpickr.l10ns.default),typeof self.config.locale==="object"?self.config.locale:self.config.locale!=="default"?flatpickr.l10ns[self.config.locale]:undefined);tokenRegex.D="("+self.l10n.weekdays.shorthand.join("|")+")";tokenRegex.l="("+self.l10n.weekdays.longhand.join("|")+")";tokenRegex.M="("+self.l10n.months.shorthand.join("|")+")";tokenRegex.F="("+self.l10n.months.longhand.join("|")+")";tokenRegex.K="("+self.l10n.amPM[0]+"|"+self.l10n.amPM[1]+"|"+self.l10n.amPM[0].toLowerCase()+"|"+self.l10n.amPM[1].toLowerCase()+")";var userConfig=__assign(__assign({},instanceConfig),JSON.parse(JSON.stringify(element.dataset||{})));if(userConfig.time_24hr===undefined&&flatpickr.defaultConfig.time_24hr===undefined){self.config.time_24hr=self.l10n.time_24hr;}self.formatDate=createDateFormatter(self);self.parseDate=createDateParser({config:self.config,l10n:self.l10n});}function positionCalendar(customPositionElement){if(typeof self.config.position==="function"){return void self.config.position(self,customPositionElement);}if(self.calendarContainer===undefined)return;triggerEvent("onPreCalendarPosition");var positionElement=customPositionElement||self._positionElement;var calendarHeight=Array.prototype.reduce.call(self.calendarContainer.children,function(acc,child){return acc+child.offsetHeight;},0),calendarWidth=self.calendarContainer.offsetWidth,configPos=self.config.position.split(" "),configPosVertical=configPos[0],configPosHorizontal=configPos.length>1?configPos[1]:null,inputBounds=positionElement.getBoundingClientRect(),distanceFromBottom=window.innerHeight-inputBounds.bottom,showOnTop=configPosVertical==="above"||configPosVertical!=="below"&&distanceFromBottom<calendarHeight&&inputBounds.top>calendarHeight;var top=window.pageYOffset+inputBounds.top+(!showOnTop?positionElement.offsetHeight+2:-calendarHeight-2);toggleClass(self.calendarContainer,"arrowTop",!showOnTop);toggleClass(self.calendarContainer,"arrowBottom",showOnTop);if(self.config.inline)return;var left=window.pageXOffset+inputBounds.left;var isCenter=false;var isRight=false;if(configPosHorizontal==="center"){left-=(calendarWidth-inputBounds.width)/2;isCenter=true;}else if(configPosHorizontal==="right"){left-=calendarWidth-inputBounds.width;isRight=true;}toggleClass(self.calendarContainer,"arrowLeft",!isCenter&&!isRight);toggleClass(self.calendarContainer,"arrowCenter",isCenter);toggleClass(self.calendarContainer,"arrowRight",isRight);var right=window.document.body.offsetWidth-(window.pageXOffset+inputBounds.right);var rightMost=left+calendarWidth>window.document.body.offsetWidth;var centerMost=right+calendarWidth>window.document.body.offsetWidth;toggleClass(self.calendarContainer,"rightMost",rightMost);if(self.config.static)return;self.calendarContainer.style.top=top+"px";if(!rightMost){self.calendarContainer.style.left=left+"px";self.calendarContainer.style.right="auto";}else if(!centerMost){self.calendarContainer.style.left="auto";self.calendarContainer.style.right=right+"px";}else{var doc=getDocumentStyleSheet();// some testing environments don't have css support
if(doc===undefined)return;var bodyWidth=window.document.body.offsetWidth;var centerLeft=Math.max(0,bodyWidth/2-calendarWidth/2);var centerBefore=".flatpickr-calendar.centerMost:before";var centerAfter=".flatpickr-calendar.centerMost:after";var centerIndex=doc.cssRules.length;var centerStyle="{left:"+inputBounds.left+"px;right:auto;}";toggleClass(self.calendarContainer,"rightMost",false);toggleClass(self.calendarContainer,"centerMost",true);doc.insertRule(centerBefore+","+centerAfter+centerStyle,centerIndex);self.calendarContainer.style.left=centerLeft+"px";self.calendarContainer.style.right="auto";}}function getDocumentStyleSheet(){var editableSheet=null;for(var i=0;i<document.styleSheets.length;i++){var sheet=document.styleSheets[i];if(!sheet.cssRules)continue;try{sheet.cssRules;}catch(err){continue;}editableSheet=sheet;break;}return editableSheet!=null?editableSheet:createStyleSheet();}function createStyleSheet(){var style=document.createElement("style");document.head.appendChild(style);return style.sheet;}function redraw(){if(self.config.noCalendar||self.isMobile)return;buildMonthSwitch();updateNavigationCurrentMonth();buildDays();}function focusAndClose(){self._input.focus();if(window.navigator.userAgent.indexOf("MSIE")!==-1||navigator.msMaxTouchPoints!==undefined){// hack - bugs in the way IE handles focus keeps the calendar open
setTimeout(self.close,0);}else{self.close();}}function selectDate(e){e.preventDefault();e.stopPropagation();var isSelectable=function(day){return day.classList&&day.classList.contains("flatpickr-day")&&!day.classList.contains("flatpickr-disabled")&&!day.classList.contains("notAllowed");};var t=findParent(getEventTarget(e),isSelectable);if(t===undefined)return;var target=t;var selectedDate=self.latestSelectedDateObj=new Date(target.dateObj.getTime());var shouldChangeMonth=(selectedDate.getMonth()<self.currentMonth||selectedDate.getMonth()>self.currentMonth+self.config.showMonths-1)&&self.config.mode!=="range";self.selectedDateElem=target;if(self.config.mode==="single")self.selectedDates=[selectedDate];else if(self.config.mode==="multiple"){var selectedIndex=isDateSelected(selectedDate);if(selectedIndex)self.selectedDates.splice(parseInt(selectedIndex),1);else self.selectedDates.push(selectedDate);}else if(self.config.mode==="range"){if(self.selectedDates.length===2){self.clear(false,false);}self.latestSelectedDateObj=selectedDate;self.selectedDates.push(selectedDate);// unless selecting same date twice, sort ascendingly
if(compareDates(selectedDate,self.selectedDates[0],true)!==0)self.selectedDates.sort(function(a,b){return a.getTime()-b.getTime();});}setHoursFromInputs();if(shouldChangeMonth){var isNewYear=self.currentYear!==selectedDate.getFullYear();self.currentYear=selectedDate.getFullYear();self.currentMonth=selectedDate.getMonth();if(isNewYear){triggerEvent("onYearChange");buildMonthSwitch();}triggerEvent("onMonthChange");}updateNavigationCurrentMonth();buildDays();updateValue();// maintain focus
if(!shouldChangeMonth&&self.config.mode!=="range"&&self.config.showMonths===1)focusOnDayElem(target);else if(self.selectedDateElem!==undefined&&self.hourElement===undefined){self.selectedDateElem&&self.selectedDateElem.focus();}if(self.hourElement!==undefined)self.hourElement!==undefined&&self.hourElement.focus();if(self.config.closeOnSelect){var single=self.config.mode==="single"&&!self.config.enableTime;var range=self.config.mode==="range"&&self.selectedDates.length===2&&!self.config.enableTime;if(single||range){focusAndClose();}}triggerChange();}var CALLBACKS={locale:[setupLocale,updateWeekdays],showMonths:[buildMonths,setCalendarWidth,buildWeekdays],minDate:[jumpToDate],maxDate:[jumpToDate],positionElement:[updatePositionElement],clickOpens:[function(){if(self.config.clickOpens===true){bind(self._input,"focus",self.open);bind(self._input,"click",self.open);}else{self._input.removeEventListener("focus",self.open);self._input.removeEventListener("click",self.open);}}]};function set(option,value){if(option!==null&&typeof option==="object"){Object.assign(self.config,option);for(var key in option){if(CALLBACKS[key]!==undefined)CALLBACKS[key].forEach(function(x){return x();});}}else{self.config[option]=value;if(CALLBACKS[option]!==undefined)CALLBACKS[option].forEach(function(x){return x();});else if(HOOKS.indexOf(option)>-1)self.config[option]=arrayify(value);}self.redraw();updateValue(true);}function setSelectedDate(inputDate,format){var dates=[];if(inputDate instanceof Array)dates=inputDate.map(function(d){return self.parseDate(d,format);});else if(inputDate instanceof Date||typeof inputDate==="number")dates=[self.parseDate(inputDate,format)];else if(typeof inputDate==="string"){switch(self.config.mode){case"single":case"time":dates=[self.parseDate(inputDate,format)];break;case"multiple":dates=inputDate.split(self.config.conjunction).map(function(date){return self.parseDate(date,format);});break;case"range":dates=inputDate.split(self.l10n.rangeSeparator).map(function(date){return self.parseDate(date,format);});break;}}else self.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(inputDate)));self.selectedDates=self.config.allowInvalidPreload?dates:dates.filter(function(d){return d instanceof Date&&isEnabled(d,false);});if(self.config.mode==="range")self.selectedDates.sort(function(a,b){return a.getTime()-b.getTime();});}function setDate(date,triggerChange,format){if(triggerChange===void 0){triggerChange=false;}if(format===void 0){format=self.config.dateFormat;}if(date!==0&&!date||date instanceof Array&&date.length===0)return self.clear(triggerChange);setSelectedDate(date,format);self.latestSelectedDateObj=self.selectedDates[self.selectedDates.length-1];self.redraw();jumpToDate(undefined,triggerChange);setHoursFromDate();if(self.selectedDates.length===0){self.clear(false);}updateValue(triggerChange);if(triggerChange)triggerEvent("onChange");}function parseDateRules(arr){return arr.slice().map(function(rule){if(typeof rule==="string"||typeof rule==="number"||rule instanceof Date){return self.parseDate(rule,undefined,true);}else if(rule&&typeof rule==="object"&&rule.from&&rule.to)return{from:self.parseDate(rule.from,undefined),to:self.parseDate(rule.to,undefined)};return rule;}).filter(function(x){return x;});// remove falsy values
}function setupDates(){self.selectedDates=[];self.now=self.parseDate(self.config.now)||new Date();// Workaround IE11 setting placeholder as the input's value
var preloadedDate=self.config.defaultDate||((self.input.nodeName==="INPUT"||self.input.nodeName==="TEXTAREA")&&self.input.placeholder&&self.input.value===self.input.placeholder?null:self.input.value);if(preloadedDate)setSelectedDate(preloadedDate,self.config.dateFormat);self._initialDate=self.selectedDates.length>0?self.selectedDates[0]:self.config.minDate&&self.config.minDate.getTime()>self.now.getTime()?self.config.minDate:self.config.maxDate&&self.config.maxDate.getTime()<self.now.getTime()?self.config.maxDate:self.now;self.currentYear=self._initialDate.getFullYear();self.currentMonth=self._initialDate.getMonth();if(self.selectedDates.length>0)self.latestSelectedDateObj=self.selectedDates[0];if(self.config.minTime!==undefined)self.config.minTime=self.parseDate(self.config.minTime,"H:i");if(self.config.maxTime!==undefined)self.config.maxTime=self.parseDate(self.config.maxTime,"H:i");self.minDateHasTime=!!self.config.minDate&&(self.config.minDate.getHours()>0||self.config.minDate.getMinutes()>0||self.config.minDate.getSeconds()>0);self.maxDateHasTime=!!self.config.maxDate&&(self.config.maxDate.getHours()>0||self.config.maxDate.getMinutes()>0||self.config.maxDate.getSeconds()>0);}function setupInputs(){self.input=getInputElem();/* istanbul ignore next */if(!self.input){self.config.errorHandler(new Error("Invalid input element specified"));return;}// hack: store previous type to restore it after destroy()
self.input._type=self.input.type;self.input.type="text";self.input.classList.add("flatpickr-input");self._input=self.input;if(self.config.altInput){// replicate self.element
self.altInput=createElement(self.input.nodeName,self.config.altInputClass);self._input=self.altInput;self.altInput.placeholder=self.input.placeholder;self.altInput.disabled=self.input.disabled;self.altInput.required=self.input.required;self.altInput.tabIndex=self.input.tabIndex;self.altInput.type="text";self.input.setAttribute("type","hidden");if(!self.config.static&&self.input.parentNode)self.input.parentNode.insertBefore(self.altInput,self.input.nextSibling);}if(!self.config.allowInput)self._input.setAttribute("readonly","readonly");updatePositionElement();}function updatePositionElement(){self._positionElement=self.config.positionElement||self._input;}function setupMobile(){var inputType=self.config.enableTime?self.config.noCalendar?"time":"datetime-local":"date";self.mobileInput=createElement("input",self.input.className+" flatpickr-mobile");self.mobileInput.tabIndex=1;self.mobileInput.type=inputType;self.mobileInput.disabled=self.input.disabled;self.mobileInput.required=self.input.required;self.mobileInput.placeholder=self.input.placeholder;self.mobileFormatStr=inputType==="datetime-local"?"Y-m-d\\TH:i:S":inputType==="date"?"Y-m-d":"H:i:S";if(self.selectedDates.length>0){self.mobileInput.defaultValue=self.mobileInput.value=self.formatDate(self.selectedDates[0],self.mobileFormatStr);}if(self.config.minDate)self.mobileInput.min=self.formatDate(self.config.minDate,"Y-m-d");if(self.config.maxDate)self.mobileInput.max=self.formatDate(self.config.maxDate,"Y-m-d");if(self.input.getAttribute("step"))self.mobileInput.step=String(self.input.getAttribute("step"));self.input.type="hidden";if(self.altInput!==undefined)self.altInput.type="hidden";try{if(self.input.parentNode)self.input.parentNode.insertBefore(self.mobileInput,self.input.nextSibling);}catch(_a){}bind(self.mobileInput,"change",function(e){self.setDate(getEventTarget(e).value,false,self.mobileFormatStr);triggerEvent("onChange");triggerEvent("onClose");});}function toggle(e){if(self.isOpen===true)return self.close();self.open(e);}function triggerEvent(event,data){// If the instance has been destroyed already, all hooks have been removed
if(self.config===undefined)return;var hooks=self.config[event];if(hooks!==undefined&&hooks.length>0){for(var i=0;hooks[i]&&i<hooks.length;i++)hooks[i](self.selectedDates,self.input.value,self,data);}if(event==="onChange"){self.input.dispatchEvent(createEvent("change"));// many front-end frameworks bind to the input event
self.input.dispatchEvent(createEvent("input"));}}function createEvent(name){var e=document.createEvent("Event");e.initEvent(name,true,true);return e;}function isDateSelected(date){for(var i=0;i<self.selectedDates.length;i++){var selectedDate=self.selectedDates[i];if(selectedDate instanceof Date&&compareDates(selectedDate,date)===0)return""+i;}return false;}function isDateInRange(date){if(self.config.mode!=="range"||self.selectedDates.length<2)return false;return compareDates(date,self.selectedDates[0])>=0&&compareDates(date,self.selectedDates[1])<=0;}function updateNavigationCurrentMonth(){if(self.config.noCalendar||self.isMobile||!self.monthNav)return;self.yearElements.forEach(function(yearElement,i){var d=new Date(self.currentYear,self.currentMonth,1);d.setMonth(self.currentMonth+i);if(self.config.showMonths>1||self.config.monthSelectorType==="static"){self.monthElements[i].textContent=monthToStr(d.getMonth(),self.config.shorthandCurrentMonth,self.l10n)+" ";}else{self.monthsDropdownContainer.value=d.getMonth().toString();}yearElement.value=d.getFullYear().toString();});self._hidePrevMonthArrow=self.config.minDate!==undefined&&(self.currentYear===self.config.minDate.getFullYear()?self.currentMonth<=self.config.minDate.getMonth():self.currentYear<self.config.minDate.getFullYear());self._hideNextMonthArrow=self.config.maxDate!==undefined&&(self.currentYear===self.config.maxDate.getFullYear()?self.currentMonth+1>self.config.maxDate.getMonth():self.currentYear>self.config.maxDate.getFullYear());}function getDateStr(specificFormat){var format=specificFormat||(self.config.altInput?self.config.altFormat:self.config.dateFormat);return self.selectedDates.map(function(dObj){return self.formatDate(dObj,format);}).filter(function(d,i,arr){return self.config.mode!=="range"||self.config.enableTime||arr.indexOf(d)===i;}).join(self.config.mode!=="range"?self.config.conjunction:self.l10n.rangeSeparator);}/**
         * Updates the values of inputs associated with the calendar
         */function updateValue(triggerChange){if(triggerChange===void 0){triggerChange=true;}if(self.mobileInput!==undefined&&self.mobileFormatStr){self.mobileInput.value=self.latestSelectedDateObj!==undefined?self.formatDate(self.latestSelectedDateObj,self.mobileFormatStr):"";}self.input.value=getDateStr(self.config.dateFormat);if(self.altInput!==undefined){self.altInput.value=getDateStr(self.config.altFormat);}if(triggerChange!==false)triggerEvent("onValueUpdate");}function onMonthNavClick(e){var eventTarget=getEventTarget(e);var isPrevMonth=self.prevMonthNav.contains(eventTarget);var isNextMonth=self.nextMonthNav.contains(eventTarget);if(isPrevMonth||isNextMonth){changeMonth(isPrevMonth?-1:1);}else if(self.yearElements.indexOf(eventTarget)>=0){eventTarget.select();}else if(eventTarget.classList.contains("arrowUp")){self.changeYear(self.currentYear+1);}else if(eventTarget.classList.contains("arrowDown")){self.changeYear(self.currentYear-1);}}function timeWrapper(e){e.preventDefault();var isKeyDown=e.type==="keydown",eventTarget=getEventTarget(e),input=eventTarget;if(self.amPM!==undefined&&eventTarget===self.amPM){self.amPM.textContent=self.l10n.amPM[int(self.amPM.textContent===self.l10n.amPM[0])];}var min=parseFloat(input.getAttribute("min")),max=parseFloat(input.getAttribute("max")),step=parseFloat(input.getAttribute("step")),curValue=parseInt(input.value,10),delta=e.delta||(isKeyDown?e.which===38?1:-1:0);var newValue=curValue+step*delta;if(typeof input.value!=="undefined"&&input.value.length===2){var isHourElem=input===self.hourElement,isMinuteElem=input===self.minuteElement;if(newValue<min){newValue=max+newValue+int(!isHourElem)+(int(isHourElem)&&int(!self.amPM));if(isMinuteElem)incrementNumInput(undefined,-1,self.hourElement);}else if(newValue>max){newValue=input===self.hourElement?newValue-max-int(!self.amPM):min;if(isMinuteElem)incrementNumInput(undefined,1,self.hourElement);}if(self.amPM&&isHourElem&&(step===1?newValue+curValue===23:Math.abs(newValue-curValue)>step)){self.amPM.textContent=self.l10n.amPM[int(self.amPM.textContent===self.l10n.amPM[0])];}input.value=pad(newValue);}}init();return self;}/* istanbul ignore next */function _flatpickr(nodeList,config){// static list
var nodes=Array.prototype.slice.call(nodeList).filter(function(x){return x instanceof HTMLElement;});var instances=[];for(var i=0;i<nodes.length;i++){var node=nodes[i];try{if(node.getAttribute("data-fp-omit")!==null)continue;if(node._flatpickr!==undefined){node._flatpickr.destroy();node._flatpickr=undefined;}node._flatpickr=FlatpickrInstance(node,config||{});instances.push(node._flatpickr);}catch(e){void 0;}}return instances.length===1?instances[0]:instances;}/* istanbul ignore next */if(typeof HTMLElement!=="undefined"&&typeof HTMLCollection!=="undefined"&&typeof NodeList!=="undefined"){// browser env
HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(config){return _flatpickr(this,config);};HTMLElement.prototype.flatpickr=function(config){return _flatpickr([this],config);};}/* istanbul ignore next */var flatpickr=function(selector,config){if(typeof selector==="string"){return _flatpickr(window.document.querySelectorAll(selector),config);}else if(selector instanceof Node){return _flatpickr([selector],config);}else{return _flatpickr(selector,config);}};/* istanbul ignore next */flatpickr.defaultConfig={};flatpickr.l10ns={en:__assign({},english),default:__assign({},english)};flatpickr.localize=function(l10n){flatpickr.l10ns.default=__assign(__assign({},flatpickr.l10ns.default),l10n);};flatpickr.setDefaults=function(config){flatpickr.defaultConfig=__assign(__assign({},flatpickr.defaultConfig),config);};flatpickr.parseDate=createDateParser({});flatpickr.formatDate=createDateFormatter({});flatpickr.compareDates=compareDates;/* istanbul ignore next */if(typeof jQuery!=="undefined"&&typeof jQuery.fn!=="undefined"){jQuery.fn.flatpickr=function(config){return _flatpickr(this,config);};}Date.prototype.fp_incr=function(days){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+(typeof days==="string"?parseInt(days,10):days));};if(typeof window!=="undefined"){window.flatpickr=flatpickr;}return flatpickr;});(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else if(typeof exports==="object"){factory(require("jquery"));}else{factory(jQuery);}})(function($,undef){var dataKey="plugin_hideShowPassword",shorthandArgs=["show","innerToggle"],SPACE=32,ENTER=13;var canSetInputAttribute=function(){var body=document.body,input=document.createElement("input"),result=true;if(!body){body=document.createElement("body");}input=body.appendChild(input);try{input.setAttribute("type","text");}catch(e){result=false;}body.removeChild(input);return result;}();function HideShowPassword(element,options){this.element=$(element);this.wrapperElement=$();this.toggleElement=$();this.init(options);}HideShowPassword.prototype={init:function(options){if(this.update(options,$.fn.hideShowPassword.defaults)){this.element.addClass(this.options.className);if(this.options.innerToggle){this.wrapElement(this.options.wrapper);this.initToggle(this.options.toggle);if(typeof this.options.innerToggle==="string"){this.toggleElement.hide();this.element.one(this.options.innerToggle,$.proxy(function(){this.toggleElement.show();},this));}}this.element.trigger(this.options.initEvent,[this]);}},update:function(options,base){this.options=this.prepareOptions(options,base);if(this.updateElement()){this.element.trigger(this.options.changeEvent,[this]).trigger(this.state().changeEvent,[this]);}return this.options.enable;},toggle:function(showVal){showVal=showVal||"toggle";return this.update({show:showVal});},prepareOptions:function(options,base){var original=options||{},keyCodes=[],testElement;base=base||this.options;options=$.extend(true,{},base,options);if(original.hasOwnProperty("wrapper")&&original.wrapper.hasOwnProperty("inheritStyles")){options.wrapper.inheritStyles=original.wrapper.inheritStyles;}if(options.enable){if(options.show==="toggle"){options.show=this.isType("hidden",options.states);}else if(options.show==="infer"){options.show=this.isType("shown",options.states);}if(options.toggle.position==="infer"){options.toggle.position=this.element.css("text-direction")==="rtl"?"left":"right";}if(!$.isArray(options.toggle.attachToKeyCodes)){if(options.toggle.attachToKeyCodes===true){testElement=$(options.toggle.element);switch(testElement.prop("tagName").toLowerCase()){case"button":case"input":break;case"a":if(testElement.filter("[href]").length){keyCodes.push(SPACE);break;}default:keyCodes.push(SPACE,ENTER);break;}}options.toggle.attachToKeyCodes=keyCodes;}}return options;},updateElement:function(){if(!this.options.enable||this.isType())return false;this.element.prop($.extend({},this.options.props,this.state().props)).addClass(this.state().className).removeClass(this.otherState().className);if(this.options.triggerOnToggle){this.element.trigger(this.options.triggerOnToggle,[this]);}this.updateToggle();return true;},isType:function(comparison,states){states=states||this.options.states;comparison=comparison||this.state(undef,undef,states).props.type;if(states[comparison]){comparison=states[comparison].props.type;}return this.element.prop("type")===comparison;},state:function(key,invert,states){states=states||this.options.states;if(key===undef){key=this.options.show;}if(typeof key==="boolean"){key=key?"shown":"hidden";}if(invert){key=key==="shown"?"hidden":"shown";}return states[key];},otherState:function(key){return this.state(key,true);},wrapElement:function(options){var enforceWidth=options.enforceWidth,targetWidth;if(!this.wrapperElement.length){targetWidth=this.element.outerWidth();$.each(options.inheritStyles,$.proxy(function(index,prop){options.styles[prop]=this.element.css(prop);},this));this.element.css(options.innerElementStyles).wrap($(options.element).addClass(options.className).css(options.styles));this.wrapperElement=this.element.parent();if(enforceWidth===true){enforceWidth=this.wrapperElement.outerWidth()===targetWidth?false:targetWidth;}if(enforceWidth!==false){this.wrapperElement.css("width",enforceWidth);}}return this.wrapperElement;},initToggle:function(options){if(!this.toggleElement.length){this.toggleElement=$(options.element).attr(options.attr).addClass(options.className).css(options.styles).appendTo(this.wrapperElement);this.updateToggle();this.positionToggle(options.position,options.verticalAlign,options.offset);if(options.touchSupport){this.toggleElement.css(options.touchStyles);this.element.on(options.attachToTouchEvent,$.proxy(this.toggleTouchEvent,this));}else{this.toggleElement.on(options.attachToEvent,$.proxy(this.toggleEvent,this));}if(options.attachToKeyCodes.length){this.toggleElement.on(options.attachToKeyEvent,$.proxy(this.toggleKeyEvent,this));}}return this.toggleElement;},positionToggle:function(position,verticalAlign,offset){var styles={};styles[position]=offset;switch(verticalAlign){case"top":case"bottom":styles[verticalAlign]=offset;break;case"middle":styles.top="50%";styles.marginTop=this.toggleElement.outerHeight()/-2;break;}return this.toggleElement.css(styles);},updateToggle:function(state,otherState){var paddingProp,targetPadding;if(this.toggleElement.length){paddingProp="padding-"+this.options.toggle.position;state=state||this.state().toggle;otherState=otherState||this.otherState().toggle;this.toggleElement.attr(state.attr).addClass(state.className).removeClass(otherState.className).html(state.content);targetPadding=this.toggleElement.outerWidth()+this.options.toggle.offset*2;if(this.element.css(paddingProp)!==targetPadding){this.element.css(paddingProp,targetPadding);}}return this.toggleElement;},toggleEvent:function(event){event.preventDefault();this.toggle();},toggleKeyEvent:function(event){$.each(this.options.toggle.attachToKeyCodes,$.proxy(function(index,keyCode){if(event.which===keyCode){this.toggleEvent(event);return false;}},this));},toggleTouchEvent:function(event){var toggleX=this.toggleElement.offset().left,eventX,lesser,greater;if(toggleX){eventX=event.pageX||event.originalEvent.pageX;if(this.options.toggle.position==="left"){toggleX+=this.toggleElement.outerWidth();lesser=eventX;greater=toggleX;}else{lesser=toggleX;greater=eventX;}if(greater>=lesser){this.toggleEvent(event);}}}};$.fn.hideShowPassword=function(){var options={};$.each(arguments,function(index,value){var newOptions={};if(typeof value==="object"){newOptions=value;}else if(shorthandArgs[index]){newOptions[shorthandArgs[index]]=value;}else{return false;}$.extend(true,options,newOptions);});return this.each(function(){var $this=$(this),data=$this.data(dataKey);if(data){data.update(options);}else{$this.data(dataKey,new HideShowPassword(this,options));}});};$.each({show:true,hide:false,toggle:"toggle"},function(verb,showVal){$.fn[verb+"Password"]=function(innerToggle,options){return this.hideShowPassword(showVal,innerToggle,options);};});$.fn.hideShowPassword.defaults={show:"infer",innerToggle:false,enable:canSetInputAttribute,triggerOnToggle:false,className:"hideShowPassword-field",initEvent:"hideShowPasswordInit",changeEvent:"passwordVisibilityChange",props:{autocapitalize:"off",autocomplete:"off",autocorrect:"off",spellcheck:"false"},toggle:{element:'<button type="button">',className:"hideShowPassword-toggle",touchSupport:typeof Modernizr==="undefined"?false:Modernizr.touchevents,attachToEvent:"click.hideShowPassword",attachToTouchEvent:"touchstart.hideShowPassword mousedown.hideShowPassword",attachToKeyEvent:"keyup",attachToKeyCodes:true,styles:{position:"absolute"},touchStyles:{pointerEvents:"none"},position:"infer",verticalAlign:"middle",offset:0,attr:{role:"button","aria-label":"Show Password",title:"Show Password",tabIndex:0}},wrapper:{element:"<div>",className:"hideShowPassword-wrapper",enforceWidth:true,styles:{position:"relative"},inheritStyles:["display","verticalAlign","marginTop","marginRight","marginBottom","marginLeft"],innerElementStyles:{marginTop:0,marginRight:0,marginBottom:0,marginLeft:0}},states:{shown:{className:"hideShowPassword-shown",changeEvent:"passwordShown",props:{type:"text"},toggle:{className:"hideShowPassword-toggle-hide",content:"Hide",attr:{"aria-pressed":"true",title:"Hide Password"}}},hidden:{className:"hideShowPassword-hidden",changeEvent:"passwordHidden",props:{type:"password"},toggle:{className:"hideShowPassword-toggle-show",content:"Show",attr:{"aria-pressed":"false",title:"Show Password"}}}}};});/*!
 * jQuery Validation Plugin v1.19.5
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2022 Jörn Zaefferer
 * Released under the MIT license
 */(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else if(typeof module==="object"&&module.exports){module.exports=factory(require("jquery"));}else{factory(jQuery);}})(function($){$.extend($.fn,{// https://jqueryvalidation.org/validate/
validate:function(options){// If nothing is selected, return nothing; can't chain anyway
if(!this.length){if(options&&options.debug&&window.console){void 0;}return;}// Check if a validator for this form was already created
var validator=$.data(this[0],"validator");if(validator){return validator;}// Add novalidate tag if HTML5.
this.attr("novalidate","novalidate");validator=new $.validator(options,this[0]);$.data(this[0],"validator",validator);if(validator.settings.onsubmit){this.on("click.validate",":submit",function(event){// Track the used submit button to properly handle scripted
// submits later.
validator.submitButton=event.currentTarget;// Allow suppressing validation by adding a cancel class to the submit button
if($(this).hasClass("cancel")){validator.cancelSubmit=true;}// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
if($(this).attr("formnovalidate")!==undefined){validator.cancelSubmit=true;}});// Validate the form on submit
this.on("submit.validate",function(event){if(validator.settings.debug){// Prevent form submit to be able to see console output
event.preventDefault();}function handle(){var hidden,result;// Insert a hidden input as a replacement for the missing submit button
// The hidden input is inserted in two cases:
//   - A user defined a `submitHandler`
//   - There was a pending request due to `remote` method and `stopRequest()`
//     was called to submit the form in case it's valid
if(validator.submitButton&&(validator.settings.submitHandler||validator.formSubmitted)){hidden=$("<input type='hidden'/>").attr("name",validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);}if(validator.settings.submitHandler&&!validator.settings.debug){result=validator.settings.submitHandler.call(validator,validator.currentForm,event);if(hidden){// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
hidden.remove();}if(result!==undefined){return result;}return false;}return true;}// Prevent submit for invalid forms or custom submit handlers
if(validator.cancelSubmit){validator.cancelSubmit=false;return handle();}if(validator.form()){if(validator.pendingRequest){validator.formSubmitted=true;return false;}return handle();}else{validator.focusInvalid();return false;}});}return validator;},// https://jqueryvalidation.org/valid/
valid:function(){var valid,validator,errorList;if($(this[0]).is("form")){valid=this.validate().form();}else{errorList=[];valid=true;validator=$(this[0].form).validate();this.each(function(){valid=validator.element(this)&&valid;if(!valid){errorList=errorList.concat(validator.errorList);}});validator.errorList=errorList;}return valid;},// https://jqueryvalidation.org/rules/
rules:function(command,argument){var element=this[0],isContentEditable=typeof this.attr("contenteditable")!=="undefined"&&this.attr("contenteditable")!=="false",settings,staticRules,existingRules,data,param,filtered;// If nothing is selected, return empty object; can't chain anyway
if(element==null){return;}if(!element.form&&isContentEditable){element.form=this.closest("form")[0];element.name=this.attr("name");}if(element.form==null){return;}if(command){settings=$.data(element.form,"validator").settings;staticRules=settings.rules;existingRules=$.validator.staticRules(element);switch(command){case"add":$.extend(existingRules,$.validator.normalizeRule(argument));// Remove messages from rules, but allow them to be set separately
delete existingRules.messages;staticRules[element.name]=existingRules;if(argument.messages){settings.messages[element.name]=$.extend(settings.messages[element.name],argument.messages);}break;case"remove":if(!argument){delete staticRules[element.name];return existingRules;}filtered={};$.each(argument.split(/\s/),function(index,method){filtered[method]=existingRules[method];delete existingRules[method];});return filtered;}}data=$.validator.normalizeRules($.extend({},$.validator.classRules(element),$.validator.attributeRules(element),$.validator.dataRules(element),$.validator.staticRules(element)),element);// Make sure required is at front
if(data.required){param=data.required;delete data.required;data=$.extend({required:param},data);}// Make sure remote is at back
if(data.remote){param=data.remote;delete data.remote;data=$.extend(data,{remote:param});}return data;}});// JQuery trim is deprecated, provide a trim method based on String.prototype.trim
var trim=function(str){// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim#Polyfill
return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");};// Custom selectors
$.extend($.expr.pseudos||$.expr[":"],{// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support
// https://jqueryvalidation.org/blank-selector/
blank:function(a){return!trim(""+$(a).val());},// https://jqueryvalidation.org/filled-selector/
filled:function(a){var val=$(a).val();return val!==null&&!!trim(""+val);},// https://jqueryvalidation.org/unchecked-selector/
unchecked:function(a){return!$(a).prop("checked");}});// Constructor for validator
$.validator=function(options,form){this.settings=$.extend(true,{},$.validator.defaults,options);this.currentForm=form;this.init();};// https://jqueryvalidation.org/jQuery.validator.format/
$.validator.format=function(source,params){if(arguments.length===1){return function(){var args=$.makeArray(arguments);args.unshift(source);return $.validator.format.apply(this,args);};}if(params===undefined){return source;}if(arguments.length>2&&params.constructor!==Array){params=$.makeArray(arguments).slice(1);}if(params.constructor!==Array){params=[params];}$.each(params,function(i,n){source=source.replace(new RegExp("\\{"+i+"\\}","g"),function(){return n;});});return source;};$.extend($.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:false,focusInvalid:true,errorContainer:$([]),errorLabelContainer:$([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(element){this.lastActive=element;// Hide error label and remove error class on focus if enabled
if(this.settings.focusCleanup){if(this.settings.unhighlight){this.settings.unhighlight.call(this,element,this.settings.errorClass,this.settings.validClass);}this.hideThese(this.errorsFor(element));}},onfocusout:function(element){if(!this.checkable(element)&&(element.name in this.submitted||!this.optional(element))){this.element(element);}},onkeyup:function(element,event){// Avoid revalidate the field when pressing one of the following keys
// Shift       => 16
// Ctrl        => 17
// Alt         => 18
// Caps lock   => 20
// End         => 35
// Home        => 36
// Left arrow  => 37
// Up arrow    => 38
// Right arrow => 39
// Down arrow  => 40
// Insert      => 45
// Num lock    => 144
// AltGr key   => 225
var excludedKeys=[16,17,18,20,35,36,37,38,39,40,45,144,225];if(event.which===9&&this.elementValue(element)===""||$.inArray(event.keyCode,excludedKeys)!==-1){return;}else if(element.name in this.submitted||element.name in this.invalid){this.element(element);}},onclick:function(element){// Click on selects, radiobuttons and checkboxes
if(element.name in this.submitted){this.element(element);// Or option elements, check parent select in that case
}else if(element.parentNode.name in this.submitted){this.element(element.parentNode);}},highlight:function(element,errorClass,validClass){if(element.type==="radio"){this.findByName(element.name).addClass(errorClass).removeClass(validClass);}else{$(element).addClass(errorClass).removeClass(validClass);}},unhighlight:function(element,errorClass,validClass){if(element.type==="radio"){this.findByName(element.name).removeClass(errorClass).addClass(validClass);}else{$(element).removeClass(errorClass).addClass(validClass);}}},// https://jqueryvalidation.org/jQuery.validator.setDefaults/
setDefaults:function(settings){$.extend($.validator.defaults,settings);},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:$.validator.format("Please enter no more than {0} characters."),minlength:$.validator.format("Please enter at least {0} characters."),rangelength:$.validator.format("Please enter a value between {0} and {1} characters long."),range:$.validator.format("Please enter a value between {0} and {1}."),max:$.validator.format("Please enter a value less than or equal to {0}."),min:$.validator.format("Please enter a value greater than or equal to {0}."),step:$.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=$(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||$(this.currentForm);this.containers=$(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var currentForm=this.currentForm,groups=this.groups={},rules;$.each(this.settings.groups,function(key,value){if(typeof value==="string"){value=value.split(/\s/);}$.each(value,function(index,name){groups[name]=key;});});rules=this.settings.rules;$.each(rules,function(key,value){rules[key]=$.validator.normalizeRule(value);});function delegate(event){var isContentEditable=typeof $(this).attr("contenteditable")!=="undefined"&&$(this).attr("contenteditable")!=="false";// Set form expando on contenteditable
if(!this.form&&isContentEditable){this.form=$(this).closest("form")[0];this.name=$(this).attr("name");}// Ignore the element if it belongs to another form. This will happen mainly
// when setting the `form` attribute of an input to the id of another form.
if(currentForm!==this.form){return;}var validator=$.data(this.form,"validator"),eventType="on"+event.type.replace(/^validate/,""),settings=validator.settings;if(settings[eventType]&&!$(this).is(settings.ignore)){settings[eventType].call(validator,this,event);}}$(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], "+"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], "+"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], "+"[type='radio'], [type='checkbox'], [contenteditable], [type='button']",delegate)// Support: Chrome, oldIE
// "select" is provided as event.target when clicking a option
.on("click.validate","select, option, [type='radio'], [type='checkbox']",delegate);if(this.settings.invalidHandler){$(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler);}},// https://jqueryvalidation.org/Validator.form/
form:function(){this.checkForm();$.extend(this.submitted,this.errorMap);this.invalid=$.extend({},this.errorMap);if(!this.valid()){$(this.currentForm).triggerHandler("invalid-form",[this]);}this.showErrors();return this.valid();},checkForm:function(){this.prepareForm();for(var i=0,elements=this.currentElements=this.elements();elements[i];i++){this.check(elements[i]);}return this.valid();},// https://jqueryvalidation.org/Validator.element/
element:function(element){var cleanElement=this.clean(element),checkElement=this.validationTargetFor(cleanElement),v=this,result=true,rs,group;if(checkElement===undefined){delete this.invalid[cleanElement.name];}else{this.prepareElement(checkElement);this.currentElements=$(checkElement);// If this element is grouped, then validate all group elements already
// containing a value
group=this.groups[checkElement.name];if(group){$.each(this.groups,function(name,testgroup){if(testgroup===group&&name!==checkElement.name){cleanElement=v.validationTargetFor(v.clean(v.findByName(name)));if(cleanElement&&cleanElement.name in v.invalid){v.currentElements.push(cleanElement);result=v.check(cleanElement)&&result;}}});}rs=this.check(checkElement)!==false;result=result&&rs;if(rs){this.invalid[checkElement.name]=false;}else{this.invalid[checkElement.name]=true;}if(!this.numberOfInvalids()){// Hide error containers on last error
this.toHide=this.toHide.add(this.containers);}this.showErrors();// Add aria-invalid status for screen readers
$(element).attr("aria-invalid",!rs);}return result;},// https://jqueryvalidation.org/Validator.showErrors/
showErrors:function(errors){if(errors){var validator=this;// Add items to error list and map
$.extend(this.errorMap,errors);this.errorList=$.map(this.errorMap,function(message,name){return{message:message,element:validator.findByName(name)[0]};});// Remove items from success list
this.successList=$.grep(this.successList,function(element){return!(element.name in errors);});}if(this.settings.showErrors){this.settings.showErrors.call(this,this.errorMap,this.errorList);}else{this.defaultShowErrors();}},// https://jqueryvalidation.org/Validator.resetForm/
resetForm:function(){if($.fn.resetForm){$(this.currentForm).resetForm();}this.invalid={};this.submitted={};this.prepareForm();this.hideErrors();var elements=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(elements);},resetElements:function(elements){var i;if(this.settings.unhighlight){for(i=0;elements[i];i++){this.settings.unhighlight.call(this,elements[i],this.settings.errorClass,"");this.findByName(elements[i].name).removeClass(this.settings.validClass);}}else{elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);}},numberOfInvalids:function(){return this.objectLength(this.invalid);},objectLength:function(obj){/* jshint unused: false */var count=0,i;for(i in obj){// This check allows counting elements with empty error
// message as invalid elements
if(obj[i]!==undefined&&obj[i]!==null&&obj[i]!==false){count++;}}return count;},hideErrors:function(){this.hideThese(this.toHide);},hideThese:function(errors){errors.not(this.containers).text("");this.addWrapper(errors).hide();},valid:function(){return this.size()===0;},size:function(){return this.errorList.length;},focusInvalid:function(){if(this.settings.focusInvalid){try{$(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus")// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
.trigger("focusin");}catch(e){// Ignore IE throwing errors when focusing hidden elements
}}},findLastActive:function(){var lastActive=this.lastActive;return lastActive&&$.grep(this.errorList,function(n){return n.element.name===lastActive.name;}).length===1&&lastActive;},elements:function(){var validator=this,rulesCache={};// Select all valid inputs inside the form (no submit or reset buttons)
return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var name=this.name||$(this).attr("name");// For contenteditable
var isContentEditable=typeof $(this).attr("contenteditable")!=="undefined"&&$(this).attr("contenteditable")!=="false";if(!name&&validator.settings.debug&&window.console){void 0;}// Set form expando on contenteditable
if(isContentEditable){this.form=$(this).closest("form")[0];this.name=name;}// Ignore elements that belong to other/nested forms
if(this.form!==validator.currentForm){return false;}// Select only the first element for each name, and only those with rules specified
if(name in rulesCache||!validator.objectLength($(this).rules())){return false;}rulesCache[name]=true;return true;});},clean:function(selector){return $(selector)[0];},errors:function(){var errorClass=this.settings.errorClass.split(" ").join(".");return $(this.settings.errorElement+"."+errorClass,this.errorContext);},resetInternals:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=$([]);this.toHide=$([]);},reset:function(){this.resetInternals();this.currentElements=$([]);},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers);},prepareElement:function(element){this.reset();this.toHide=this.errorsFor(element);},elementValue:function(element){var $element=$(element),type=element.type,isContentEditable=typeof $element.attr("contenteditable")!=="undefined"&&$element.attr("contenteditable")!=="false",val,idx;if(type==="radio"||type==="checkbox"){return this.findByName(element.name).filter(":checked").val();}else if(type==="number"&&typeof element.validity!=="undefined"){return element.validity.badInput?"NaN":$element.val();}if(isContentEditable){val=$element.text();}else{val=$element.val();}if(type==="file"){// Modern browser (chrome & safari)
if(val.substr(0,12)==="C:\\fakepath\\"){return val.substr(12);}// Legacy browsers
// Unix-based path
idx=val.lastIndexOf("/");if(idx>=0){return val.substr(idx+1);}// Windows-based path
idx=val.lastIndexOf("\\");if(idx>=0){return val.substr(idx+1);}// Just the file name
return val;}if(typeof val==="string"){return val.replace(/\r/g,"");}return val;},check:function(element){element=this.validationTargetFor(this.clean(element));var rules=$(element).rules(),rulesCount=$.map(rules,function(n,i){return i;}).length,dependencyMismatch=false,val=this.elementValue(element),result,method,rule,normalizer;// Prioritize the local normalizer defined for this element over the global one
// if the former exists, otherwise user the global one in case it exists.
if(typeof rules.normalizer==="function"){normalizer=rules.normalizer;}else if(typeof this.settings.normalizer==="function"){normalizer=this.settings.normalizer;}// If normalizer is defined, then call it to retreive the changed value instead
// of using the real one.
// Note that `this` in the normalizer is `element`.
if(normalizer){val=normalizer.call(element,val);// Delete the normalizer from rules to avoid treating it as a pre-defined method.
delete rules.normalizer;}for(method in rules){rule={method:method,parameters:rules[method]};try{result=$.validator.methods[method].call(this,val,element,rule.parameters);// If a method indicates that the field is optional and therefore valid,
// don't mark it as valid when there are no other rules
if(result==="dependency-mismatch"&&rulesCount===1){dependencyMismatch=true;continue;}dependencyMismatch=false;if(result==="pending"){this.toHide=this.toHide.not(this.errorsFor(element));return;}if(!result){this.formatAndAdd(element,rule);return false;}}catch(e){if(this.settings.debug&&window.console){void 0;}if(e instanceof TypeError){e.message+=".  Exception occurred when checking element "+element.id+", check the '"+rule.method+"' method.";}throw e;}}if(dependencyMismatch){return;}if(this.objectLength(rules)){this.successList.push(element);}return true;},// Return the custom message for the given element and validation method
// specified in the element's HTML5 data attribute
// return the generic message if present and no method specific message is present
customDataMessage:function(element,method){return $(element).data("msg"+method.charAt(0).toUpperCase()+method.substring(1).toLowerCase())||$(element).data("msg");},// Return the custom message for the given element name and validation method
customMessage:function(name,method){var m=this.settings.messages[name];return m&&(m.constructor===String?m:m[method]);},// Return the first defined argument, allowing empty strings
findDefined:function(){for(var i=0;i<arguments.length;i++){if(arguments[i]!==undefined){return arguments[i];}}return undefined;},// The second parameter 'rule' used to be a string, and extended to an object literal
// of the following form:
// rule = {
//     method: "method name",
//     parameters: "the given method parameters"
// }
//
// The old behavior still supported, kept to maintain backward compatibility with
// old code, and will be removed in the next major release.
defaultMessage:function(element,rule){if(typeof rule==="string"){rule={method:rule};}var message=this.findDefined(this.customMessage(element.name,rule.method),this.customDataMessage(element,rule.method),// 'title' is never undefined, so handle empty string as undefined
!this.settings.ignoreTitle&&element.title||undefined,$.validator.messages[rule.method],"<strong>Warning: No message defined for "+element.name+"</strong>"),theregex=/\$?\{(\d+)\}/g;if(typeof message==="function"){message=message.call(this,rule.parameters,element);}else if(theregex.test(message)){message=$.validator.format(message.replace(theregex,"{$1}"),rule.parameters);}return message;},formatAndAdd:function(element,rule){var message=this.defaultMessage(element,rule);this.errorList.push({message:message,element:element,method:rule.method});this.errorMap[element.name]=message;this.submitted[element.name]=message;},addWrapper:function(toToggle){if(this.settings.wrapper){toToggle=toToggle.add(toToggle.parent(this.settings.wrapper));}return toToggle;},defaultShowErrors:function(){var i,elements,error;for(i=0;this.errorList[i];i++){error=this.errorList[i];if(this.settings.highlight){this.settings.highlight.call(this,error.element,this.settings.errorClass,this.settings.validClass);}this.showLabel(error.element,error.message);}if(this.errorList.length){this.toShow=this.toShow.add(this.containers);}if(this.settings.success){for(i=0;this.successList[i];i++){this.showLabel(this.successList[i]);}}if(this.settings.unhighlight){for(i=0,elements=this.validElements();elements[i];i++){this.settings.unhighlight.call(this,elements[i],this.settings.errorClass,this.settings.validClass);}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show();},validElements:function(){return this.currentElements.not(this.invalidElements());},invalidElements:function(){return $(this.errorList).map(function(){return this.element;});},showLabel:function(element,message){var place,group,errorID,v,error=this.errorsFor(element),elementID=this.idOrName(element),describedBy=$(element).attr("aria-describedby");if(error.length){// Refresh error/success class
error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);// Replace message on existing label
error.html(message);}else{// Create error element
error=$("<"+this.settings.errorElement+">").attr("id",elementID+"-error").addClass(this.settings.errorClass).html(message||"");// Maintain reference to the element to be placed into the DOM
place=error;if(this.settings.wrapper){// Make sure the element is visible, even in IE
// actually showing the wrapped element is handled elsewhere
place=error.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();}if(this.labelContainer.length){this.labelContainer.append(place);}else if(this.settings.errorPlacement){this.settings.errorPlacement.call(this,place,$(element));}else{place.insertAfter(element);}// Link error back to the element
if(error.is("label")){// If the error is a label, then associate using 'for'
error.attr("for",elementID);// If the element is not a child of an associated label, then it's necessary
// to explicitly apply aria-describedby
}else if(error.parents("label[for='"+this.escapeCssMeta(elementID)+"']").length===0){errorID=error.attr("id");// Respect existing non-error aria-describedby
if(!describedBy){describedBy=errorID;}else if(!describedBy.match(new RegExp("\\b"+this.escapeCssMeta(errorID)+"\\b"))){// Add to end of list if not already present
describedBy+=" "+errorID;}$(element).attr("aria-describedby",describedBy);// If this element is grouped, then assign to all elements in the same group
group=this.groups[element.name];if(group){v=this;$.each(v.groups,function(name,testgroup){if(testgroup===group){$("[name='"+v.escapeCssMeta(name)+"']",v.currentForm).attr("aria-describedby",error.attr("id"));}});}}}if(!message&&this.settings.success){error.text("");if(typeof this.settings.success==="string"){error.addClass(this.settings.success);}else{this.settings.success(error,element);}}this.toShow=this.toShow.add(error);},errorsFor:function(element){var name=this.escapeCssMeta(this.idOrName(element)),describer=$(element).attr("aria-describedby"),selector="label[for='"+name+"'], label[for='"+name+"'] *";// 'aria-describedby' should directly reference the error element
if(describer){selector=selector+", #"+this.escapeCssMeta(describer).replace(/\s+/g,", #");}return this.errors().filter(selector);},// See https://api.jquery.com/category/selectors/, for CSS
// meta-characters that should be escaped in order to be used with JQuery
// as a literal part of a name/id or any selector.
escapeCssMeta:function(string){if(string===undefined){return"";}return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1");},idOrName:function(element){return this.groups[element.name]||(this.checkable(element)?element.name:element.id||element.name);},validationTargetFor:function(element){// If radio/checkbox, validate first element in group instead
if(this.checkable(element)){element=this.findByName(element.name);}// Always apply ignore filter
return $(element).not(this.settings.ignore)[0];},checkable:function(element){return /radio|checkbox/i.test(element.type);},findByName:function(name){return $(this.currentForm).find("[name='"+this.escapeCssMeta(name)+"']");},getLength:function(value,element){switch(element.nodeName.toLowerCase()){case"select":return $("option:selected",element).length;case"input":if(this.checkable(element)){return this.findByName(element.name).filter(":checked").length;}}return value.length;},depend:function(param,element){return this.dependTypes[typeof param]?this.dependTypes[typeof param](param,element):true;},dependTypes:{"boolean":function(param){return param;},"string":function(param,element){return!!$(param,element.form).length;},"function":function(param,element){return param(element);}},optional:function(element){var val=this.elementValue(element);return!$.validator.methods.required.call(this,val,element)&&"dependency-mismatch";},startRequest:function(element){if(!this.pending[element.name]){this.pendingRequest++;$(element).addClass(this.settings.pendingClass);this.pending[element.name]=true;}},stopRequest:function(element,valid){this.pendingRequest--;// Sometimes synchronization fails, make sure pendingRequest is never < 0
if(this.pendingRequest<0){this.pendingRequest=0;}delete this.pending[element.name];$(element).removeClass(this.settings.pendingClass);if(valid&&this.pendingRequest===0&&this.formSubmitted&&this.form()&&this.pendingRequest===0){$(this.currentForm).trigger("submit");// Remove the hidden input that was used as a replacement for the
// missing submit button. The hidden input is added by `handle()`
// to ensure that the value of the used submit button is passed on
// for scripted submits triggered by this method
if(this.submitButton){$("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove();}this.formSubmitted=false;}else if(!valid&&this.pendingRequest===0&&this.formSubmitted){$(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false;}},previousValue:function(element,method){method=typeof method==="string"&&method||"remote";return $.data(element,"previousValue")||$.data(element,"previousValue",{old:null,valid:true,message:this.defaultMessage(element,{method:method})});},// Cleans up all forms and elements, removes validator-specific events
destroy:function(){this.resetForm();$(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},number:{number:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(className,rules){if(className.constructor===String){this.classRuleSettings[className]=rules;}else{$.extend(this.classRuleSettings,className);}},classRules:function(element){var rules={},classes=$(element).attr("class");if(classes){$.each(classes.split(" "),function(){if(this in $.validator.classRuleSettings){$.extend(rules,$.validator.classRuleSettings[this]);}});}return rules;},normalizeAttributeRule:function(rules,type,method,value){// Convert the value to a number for number inputs, and for text for backwards compability
// allows type="date" and others to be compared as strings
if(/min|max|step/.test(method)&&(type===null||/number|range|text/.test(type))){value=Number(value);// Support Opera Mini, which returns NaN for undefined minlength
if(isNaN(value)){value=undefined;}}if(value||value===0){rules[method]=value;}else if(type===method&&type!=="range"){// Exception: the jquery validate 'range' method
// does not test for the html5 'range' type
rules[type==="date"?"dateISO":method]=true;}},attributeRules:function(element){var rules={},$element=$(element),type=element.getAttribute("type"),method,value;for(method in $.validator.methods){// Support for <input required> in both html5 and older browsers
if(method==="required"){value=element.getAttribute(method);// Some browsers return an empty string for the required attribute
// and non-HTML5 browsers might have required="" markup
if(value===""){value=true;}// Force non-HTML5 browsers to return bool
value=!!value;}else{value=$element.attr(method);}this.normalizeAttributeRule(rules,type,method,value);}// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
if(rules.maxlength&&/-1|2147483647|524288/.test(rules.maxlength)){delete rules.maxlength;}return rules;},dataRules:function(element){var rules={},$element=$(element),type=element.getAttribute("type"),method,value;for(method in $.validator.methods){value=$element.data("rule"+method.charAt(0).toUpperCase()+method.substring(1).toLowerCase());// Cast empty attributes like `data-rule-required` to `true`
if(value===""){value=true;}this.normalizeAttributeRule(rules,type,method,value);}return rules;},staticRules:function(element){var rules={},validator=$.data(element.form,"validator");if(validator.settings.rules){rules=$.validator.normalizeRule(validator.settings.rules[element.name])||{};}return rules;},normalizeRules:function(rules,element){// Handle dependency check
$.each(rules,function(prop,val){// Ignore rule when param is explicitly false, eg. required:false
if(val===false){delete rules[prop];return;}if(val.param||val.depends){var keepRule=true;switch(typeof val.depends){case"string":keepRule=!!$(val.depends,element.form).length;break;case"function":keepRule=val.depends.call(element,element);break;}if(keepRule){rules[prop]=val.param!==undefined?val.param:true;}else{$.data(element.form,"validator").resetElements($(element));delete rules[prop];}}});// Evaluate parameters
$.each(rules,function(rule,parameter){rules[rule]=typeof parameter==="function"&&rule!=="normalizer"?parameter(element):parameter;});// Clean number parameters
$.each(["minlength","maxlength"],function(){if(rules[this]){rules[this]=Number(rules[this]);}});$.each(["rangelength","range"],function(){var parts;if(rules[this]){if(Array.isArray(rules[this])){rules[this]=[Number(rules[this][0]),Number(rules[this][1])];}else if(typeof rules[this]==="string"){parts=rules[this].replace(/[\[\]]/g,"").split(/[\s,]+/);rules[this]=[Number(parts[0]),Number(parts[1])];}}});if($.validator.autoCreateRanges){// Auto-create ranges
if(rules.min!=null&&rules.max!=null){rules.range=[rules.min,rules.max];delete rules.min;delete rules.max;}if(rules.minlength!=null&&rules.maxlength!=null){rules.rangelength=[rules.minlength,rules.maxlength];delete rules.minlength;delete rules.maxlength;}}return rules;},// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
normalizeRule:function(data){if(typeof data==="string"){var transformed={};$.each(data.split(/\s/),function(){transformed[this]=true;});data=transformed;}return data;},// https://jqueryvalidation.org/jQuery.validator.addMethod/
addMethod:function(name,method,message){$.validator.methods[name]=method;$.validator.messages[name]=message!==undefined?message:$.validator.messages[name];if(method.length<3){$.validator.addClassRules(name,$.validator.normalizeRule(name));}},// https://jqueryvalidation.org/jQuery.validator.methods/
methods:{// https://jqueryvalidation.org/required-method/
required:function(value,element,param){// Check if dependency is met
if(!this.depend(param,element)){return"dependency-mismatch";}if(element.nodeName.toLowerCase()==="select"){// Could be an array for select-multiple or a string, both are fine this way
var val=$(element).val();return val&&val.length>0;}if(this.checkable(element)){return this.getLength(value,element)>0;}return value!==undefined&&value!==null&&value.length>0;},// https://jqueryvalidation.org/email-method/
email:function(value,element){// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
// Retrieved 2014-01-14
// If you have a problem with this implementation, report a bug against the above spec
// Or use custom methods to implement your own email validation
return this.optional(element)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);},// https://jqueryvalidation.org/url-method/
url:function(value,element){// Copyright (c) 2010-2013 Diego Perini, MIT licensed
// https://gist.github.com/dperini/729294
// see also https://mathiasbynens.be/demo/url-regex
// modified to allow protocol-relative URLs
return this.optional(element)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);},// https://jqueryvalidation.org/date-method/
date:function(){var called=false;return function(value,element){if(!called){called=true;if(this.settings.debug&&window.console){void 0;}}return this.optional(element)||!/Invalid|NaN/.test(new Date(value).toString());};}(),// https://jqueryvalidation.org/dateISO-method/
dateISO:function(value,element){return this.optional(element)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);},// https://jqueryvalidation.org/number-method/
number:function(value,element){return this.optional(element)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);},// https://jqueryvalidation.org/digits-method/
digits:function(value,element){return this.optional(element)||/^\d+$/.test(value);},// https://jqueryvalidation.org/minlength-method/
minlength:function(value,element,param){var length=Array.isArray(value)?value.length:this.getLength(value,element);return this.optional(element)||length>=param;},// https://jqueryvalidation.org/maxlength-method/
maxlength:function(value,element,param){var length=Array.isArray(value)?value.length:this.getLength(value,element);return this.optional(element)||length<=param;},// https://jqueryvalidation.org/rangelength-method/
rangelength:function(value,element,param){var length=Array.isArray(value)?value.length:this.getLength(value,element);return this.optional(element)||length>=param[0]&&length<=param[1];},// https://jqueryvalidation.org/min-method/
min:function(value,element,param){return this.optional(element)||value>=param;},// https://jqueryvalidation.org/max-method/
max:function(value,element,param){return this.optional(element)||value<=param;},// https://jqueryvalidation.org/range-method/
range:function(value,element,param){return this.optional(element)||value>=param[0]&&value<=param[1];},// https://jqueryvalidation.org/step-method/
step:function(value,element,param){var type=$(element).attr("type"),errorMessage="Step attribute on input type "+type+" is not supported.",supportedTypes=["text","number","range"],re=new RegExp("\\b"+type+"\\b"),notSupported=type&&!re.test(supportedTypes.join()),decimalPlaces=function(num){var match=(""+num).match(/(?:\.(\d+))?$/);if(!match){return 0;}// Number of digits right of decimal point.
return match[1]?match[1].length:0;},toInt=function(num){return Math.round(num*Math.pow(10,decimals));},valid=true,decimals;// Works only for text, number and range input types
// TODO find a way to support input types date, datetime, datetime-local, month, time and week
if(notSupported){throw new Error(errorMessage);}decimals=decimalPlaces(param);// Value can't have too many decimals
if(decimalPlaces(value)>decimals||toInt(value)%toInt(param)!==0){valid=false;}return this.optional(element)||valid;},// https://jqueryvalidation.org/equalTo-method/
equalTo:function(value,element,param){// Bind to the blur event of the target in order to revalidate whenever the target field is updated
var target=$(param);if(this.settings.onfocusout&&target.not(".validate-equalTo-blur").length){target.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){$(element).valid();});}return value===target.val();},// https://jqueryvalidation.org/remote-method/
remote:function(value,element,param,method){if(this.optional(element)){return"dependency-mismatch";}method=typeof method==="string"&&method||"remote";var previous=this.previousValue(element,method),validator,data,optionDataString;if(!this.settings.messages[element.name]){this.settings.messages[element.name]={};}previous.originalMessage=previous.originalMessage||this.settings.messages[element.name][method];this.settings.messages[element.name][method]=previous.message;param=typeof param==="string"&&{url:param}||param;optionDataString=$.param($.extend({data:value},param.data));if(previous.old===optionDataString){return previous.valid;}previous.old=optionDataString;validator=this;this.startRequest(element);data={};data[element.name]=value;$.ajax($.extend(true,{mode:"abort",port:"validate"+element.name,dataType:"json",data:data,context:validator.currentForm,success:function(response){var valid=response===true||response==="true",errors,message,submitted;validator.settings.messages[element.name][method]=previous.originalMessage;if(valid){submitted=validator.formSubmitted;validator.resetInternals();validator.toHide=validator.errorsFor(element);validator.formSubmitted=submitted;validator.successList.push(element);validator.invalid[element.name]=false;validator.showErrors();}else{errors={};message=response||validator.defaultMessage(element,{method:method,parameters:value});errors[element.name]=previous.message=message;validator.invalid[element.name]=true;validator.showErrors(errors);}previous.valid=valid;validator.stopRequest(element,valid);}},param));return"pending";}}});// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
var pendingRequests={},ajax;// Use a prefilter if available (1.5+)
if($.ajaxPrefilter){$.ajaxPrefilter(function(settings,_,xhr){var port=settings.port;if(settings.mode==="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}pendingRequests[port]=xhr;}});}else{// Proxy ajax
ajax=$.ajax;$.ajax=function(settings){var mode=("mode"in settings?settings:$.ajaxSettings).mode,port=("port"in settings?settings:$.ajaxSettings).port;if(mode==="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}pendingRequests[port]=ajax.apply(this,arguments);return pendingRequests[port];}return ajax.apply(this,arguments);};}return $;});/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2020
 * @version 1.3.6
 *
 * Date formatter utility library that allows formatting date/time variables or Date objects using PHP DateTime format.
 * This library is a standalone javascript library and does not depend on other libraries or plugins like jQuery. The
 * library also adds support for Universal Module Definition (UMD).
 * 
 * @see http://php.net/manual/en/function.date.php
 *
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */(function(root,factory){// noinspection JSUnresolvedVariable
if(typeof define==='function'&&define.amd){// AMD
// noinspection JSUnresolvedFunction
define([],factory);}else{// noinspection JSUnresolvedVariable
if(typeof module==='object'&&module.exports){// Node
// noinspection JSUnresolvedVariable
module.exports=factory();}else{// Browser globals
root.DateFormatter=factory();}}})(typeof self!=='undefined'?self:this,function(){var DateFormatter,$h;/**
     * Global helper object
     */$h={DAY:1000*60*60*24,HOUR:3600,defaults:{dateSettings:{days:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],daysShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],months:['January','February','March','April','May','June','July','August','September','October','November','December'],monthsShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],meridiem:['AM','PM'],ordinal:function(number){var n=number%10,suffixes={1:'st',2:'nd',3:'rd'};return Math.floor(number%100/10)===1||!suffixes[n]?'th':suffixes[n];}},separators:/[ \-+\/.:@]/g,validParts:/[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,intParts:/[djwNzmnyYhHgGis]/g,tzParts:/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,tzClip:/[^-+\dA-Z]/g},getInt:function(str,radix){return parseInt(str,radix?radix:10);},compare:function(str1,str2){return typeof str1==='string'&&typeof str2==='string'&&str1.toLowerCase()===str2.toLowerCase();},lpad:function(value,length,chr){var val=value.toString();chr=chr||'0';return val.length<length?$h.lpad(chr+val,length):val;},merge:function(out){var i,obj;out=out||{};for(i=1;i<arguments.length;i++){obj=arguments[i];if(!obj){continue;}for(var key in obj){if(obj.hasOwnProperty(key)){if(typeof obj[key]==='object'){$h.merge(out[key],obj[key]);}else{out[key]=obj[key];}}}}return out;},getIndex:function(val,arr){for(var i=0;i<arr.length;i++){if(arr[i].toLowerCase()===val.toLowerCase()){return i;}}return-1;}};/**
     * Date Formatter Library Constructor
     * @param options
     * @constructor
     */DateFormatter=function(options){var self=this,config=$h.merge($h.defaults,options);self.dateSettings=config.dateSettings;self.separators=config.separators;self.validParts=config.validParts;self.intParts=config.intParts;self.tzParts=config.tzParts;self.tzClip=config.tzClip;};/**
     * DateFormatter Library Prototype
     */DateFormatter.prototype={constructor:DateFormatter,getMonth:function(val){var self=this,i;i=$h.getIndex(val,self.dateSettings.monthsShort)+1;if(i===0){i=$h.getIndex(val,self.dateSettings.months)+1;}return i;},parseDate:function(vDate,vFormat){var self=this,vFormatParts,vDateParts,i,vDateFlag=false,vTimeFlag=false,vDatePart,iDatePart,vSettings=self.dateSettings,vMonth,vMeriIndex,vMeriOffset,len,mer,out={date:null,year:null,month:null,day:null,hour:0,min:0,sec:0};if(!vDate){return null;}if(vDate instanceof Date){return vDate;}if(vFormat==='U'){i=$h.getInt(vDate);return i?new Date(i*1000):vDate;}switch(typeof vDate){case'number':return new Date(vDate);case'string':break;default:return null;}vFormatParts=vFormat.match(self.validParts);if(!vFormatParts||vFormatParts.length===0){throw new Error('Invalid date format definition.');}for(i=vFormatParts.length-1;i>=0;i--){if(vFormatParts[i]==='S'){vFormatParts.splice(i,1);}}vDateParts=vDate.replace(self.separators,'\0').split('\0');for(i=0;i<vDateParts.length;i++){vDatePart=vDateParts[i];iDatePart=$h.getInt(vDatePart);switch(vFormatParts[i]){case'y':case'Y':if(iDatePart){len=vDatePart.length;out.year=len===2?$h.getInt((iDatePart<70?'20':'19')+vDatePart):iDatePart;}else{return null;}vDateFlag=true;break;case'm':case'n':case'M':case'F':if(isNaN(iDatePart)){vMonth=self.getMonth(vDatePart);if(vMonth>0){out.month=vMonth;}else{return null;}}else{if(iDatePart>=1&&iDatePart<=12){out.month=iDatePart;}else{return null;}}vDateFlag=true;break;case'd':case'j':if(iDatePart>=1&&iDatePart<=31){out.day=iDatePart;}else{return null;}vDateFlag=true;break;case'g':case'h':vMeriIndex=vFormatParts.indexOf('a')>-1?vFormatParts.indexOf('a'):vFormatParts.indexOf('A')>-1?vFormatParts.indexOf('A'):-1;mer=vDateParts[vMeriIndex];if(vMeriIndex!==-1){vMeriOffset=$h.compare(mer,vSettings.meridiem[0])?0:$h.compare(mer,vSettings.meridiem[1])?12:-1;if(iDatePart>=1&&iDatePart<=12&&vMeriOffset!==-1){out.hour=iDatePart%12===0?vMeriOffset:iDatePart+vMeriOffset;}else{if(iDatePart>=0&&iDatePart<=23){out.hour=iDatePart;}}}else{if(iDatePart>=0&&iDatePart<=23){out.hour=iDatePart;}else{return null;}}vTimeFlag=true;break;case'G':case'H':if(iDatePart>=0&&iDatePart<=23){out.hour=iDatePart;}else{return null;}vTimeFlag=true;break;case'i':if(iDatePart>=0&&iDatePart<=59){out.min=iDatePart;}else{return null;}vTimeFlag=true;break;case's':if(iDatePart>=0&&iDatePart<=59){out.sec=iDatePart;}else{return null;}vTimeFlag=true;break;}}if(vDateFlag===true){var varY=out.year||0,varM=out.month?out.month-1:0,varD=out.day||1;out.date=new Date(varY,varM,varD,out.hour,out.min,out.sec,0);}else{if(vTimeFlag!==true){return null;}out.date=new Date(0,0,0,out.hour,out.min,out.sec,0);}return out.date;},guessDate:function(vDateStr,vFormat){if(typeof vDateStr!=='string'){return vDateStr;}var self=this,vParts=vDateStr.replace(self.separators,'\0').split('\0'),vPattern=/^[djmn]/g,len,vFormatParts=vFormat.match(self.validParts),vDate=new Date(),vDigit=0,vYear,i,n,iPart,iSec;if(!vPattern.test(vFormatParts[0])){return vDateStr;}for(i=0;i<vParts.length;i++){vDigit=2;iPart=vParts[i];iSec=$h.getInt(iPart.substr(0,2));if(isNaN(iSec)){return null;}switch(i){case 0:if(vFormatParts[0]==='m'||vFormatParts[0]==='n'){vDate.setMonth(iSec-1);}else{vDate.setDate(iSec);}break;case 1:if(vFormatParts[0]==='m'||vFormatParts[0]==='n'){vDate.setDate(iSec);}else{vDate.setMonth(iSec-1);}break;case 2:vYear=vDate.getFullYear();len=iPart.length;vDigit=len<4?len:4;vYear=$h.getInt(len<4?vYear.toString().substr(0,4-len)+iPart:iPart.substr(0,4));if(!vYear){return null;}vDate.setFullYear(vYear);break;case 3:vDate.setHours(iSec);break;case 4:vDate.setMinutes(iSec);break;case 5:vDate.setSeconds(iSec);break;}n=iPart.substr(vDigit);if(n.length>0){vParts.splice(i+1,0,n);}}return vDate;},parseFormat:function(vChar,vDate){var self=this,vSettings=self.dateSettings,fmt,backslash=/\\?(.?)/gi,doFormat=function(t,s){return fmt[t]?fmt[t]():s;};fmt={/////////
// DAY //
/////////
/**
                 * Day of month with leading 0: `01..31`
                 * @return {string}
                 */d:function(){return $h.lpad(fmt.j(),2);},/**
                 * Shorthand day name: `Mon...Sun`
                 * @return {string}
                 */D:function(){return vSettings.daysShort[fmt.w()];},/**
                 * Day of month: `1..31`
                 * @return {number}
                 */j:function(){return vDate.getDate();},/**
                 * Full day name: `Monday...Sunday`
                 * @return {string}
                 */l:function(){return vSettings.days[fmt.w()];},/**
                 * ISO-8601 day of week: `1[Mon]..7[Sun]`
                 * @return {number}
                 */N:function(){return fmt.w()||7;},/**
                 * Day of week: `0[Sun]..6[Sat]`
                 * @return {number}
                 */w:function(){return vDate.getDay();},/**
                 * Day of year: `0..365`
                 * @return {number}
                 */z:function(){var a=new Date(fmt.Y(),fmt.n()-1,fmt.j()),b=new Date(fmt.Y(),0,1);return Math.round((a-b)/$h.DAY);},//////////
// WEEK //
//////////
/**
                 * ISO-8601 week number
                 * @return {number}
                 */W:function(){var a=new Date(fmt.Y(),fmt.n()-1,fmt.j()-fmt.N()+3),b=new Date(a.getFullYear(),0,4);return $h.lpad(1+Math.round((a-b)/$h.DAY/7),2);},///////////
// MONTH //
///////////
/**
                 * Full month name: `January...December`
                 * @return {string}
                 */F:function(){return vSettings.months[vDate.getMonth()];},/**
                 * Month w/leading 0: `01..12`
                 * @return {string}
                 */m:function(){return $h.lpad(fmt.n(),2);},/**
                 * Shorthand month name; `Jan...Dec`
                 * @return {string}
                 */M:function(){return vSettings.monthsShort[vDate.getMonth()];},/**
                 * Month: `1...12`
                 * @return {number}
                 */n:function(){return vDate.getMonth()+1;},/**
                 * Days in month: `28...31`
                 * @return {number}
                 */t:function(){return new Date(fmt.Y(),fmt.n(),0).getDate();},//////////
// YEAR //
//////////
/**
                 * Is leap year? `0 or 1`
                 * @return {number}
                 */L:function(){var Y=fmt.Y();return Y%4===0&&Y%100!==0||Y%400===0?1:0;},/**
                 * ISO-8601 year
                 * @return {number}
                 */o:function(){var n=fmt.n(),W=fmt.W(),Y=fmt.Y();return Y+(n===12&&W<9?1:n===1&&W>9?-1:0);},/**
                 * Full year: `e.g. 1980...2010`
                 * @return {number}
                 */Y:function(){return vDate.getFullYear();},/**
                 * Last two digits of year: `00...99`
                 * @return {string}
                 */y:function(){return fmt.Y().toString().slice(-2);},//////////
// TIME //
//////////
/**
                 * Meridian lower: `am or pm`
                 * @return {string}
                 */a:function(){return fmt.A().toLowerCase();},/**
                 * Meridian upper: `AM or PM`
                 * @return {string}
                 */A:function(){var n=fmt.G()<12?0:1;return vSettings.meridiem[n];},/**
                 * Swatch Internet time: `000..999`
                 * @return {string}
                 */B:function(){var H=vDate.getUTCHours()*$h.HOUR,i=vDate.getUTCMinutes()*60,s=vDate.getUTCSeconds();return $h.lpad(Math.floor((H+i+s+$h.HOUR)/86.4)%1000,3);},/**
                 * 12-Hours: `1..12`
                 * @return {number}
                 */g:function(){return fmt.G()%12||12;},/**
                 * 24-Hours: `0..23`
                 * @return {number}
                 */G:function(){return vDate.getHours();},/**
                 * 12-Hours with leading 0: `01..12`
                 * @return {string}
                 */h:function(){return $h.lpad(fmt.g(),2);},/**
                 * 24-Hours w/leading 0: `00..23`
                 * @return {string}
                 */H:function(){return $h.lpad(fmt.G(),2);},/**
                 * Minutes w/leading 0: `00..59`
                 * @return {string}
                 */i:function(){return $h.lpad(vDate.getMinutes(),2);},/**
                 * Seconds w/leading 0: `00..59`
                 * @return {string}
                 */s:function(){return $h.lpad(vDate.getSeconds(),2);},/**
                 * Microseconds: `000000-999000`
                 * @return {string}
                 */u:function(){return $h.lpad(vDate.getMilliseconds()*1000,6);},//////////////
// TIMEZONE //
//////////////
/**
                 * Timezone identifier: `e.g. Atlantic/Azores, ...`
                 * @return {string}
                 */e:function(){var str=/\((.*)\)/.exec(String(vDate))[1];return str||'Coordinated Universal Time';},/**
                 * DST observed? `0 or 1`
                 * @return {number}
                 */I:function(){var a=new Date(fmt.Y(),0),c=Date.UTC(fmt.Y(),0),b=new Date(fmt.Y(),6),d=Date.UTC(fmt.Y(),6);return a-c!==b-d?1:0;},/**
                 * Difference to GMT in hour format: `e.g. +0200`
                 * @return {string}
                 */O:function(){var tzo=vDate.getTimezoneOffset(),a=Math.abs(tzo);return(tzo>0?'-':'+')+$h.lpad(Math.floor(a/60)*100+a%60,4);},/**
                 * Difference to GMT with colon: `e.g. +02:00`
                 * @return {string}
                 */P:function(){var O=fmt.O();return O.substr(0,3)+':'+O.substr(3,2);},/**
                 * Timezone abbreviation: `e.g. EST, MDT, ...`
                 * @return {string}
                 */T:function(){var str=(String(vDate).match(self.tzParts)||['']).pop().replace(self.tzClip,'');return str||'UTC';},/**
                 * Timezone offset in seconds: `-43200...50400`
                 * @return {number}
                 */Z:function(){return-vDate.getTimezoneOffset()*60;},////////////////////
// FULL DATE TIME //
////////////////////
/**
                 * ISO-8601 date
                 * @return {string}
                 */c:function(){return'Y-m-d\\TH:i:sP'.replace(backslash,doFormat);},/**
                 * RFC 2822 date
                 * @return {string}
                 */r:function(){return'D, d M Y H:i:s O'.replace(backslash,doFormat);},/**
                 * Seconds since UNIX epoch
                 * @return {number}
                 */U:function(){return vDate.getTime()/1000||0;}};return doFormat(vChar,vChar);},formatDate:function(vDate,vFormat){var self=this,i,n,len,str,vChar,vDateStr='',BACKSLASH='\\';if(typeof vDate==='string'){vDate=self.parseDate(vDate,vFormat);if(!vDate){return null;}}if(vDate instanceof Date){len=vFormat.length;for(i=0;i<len;i++){vChar=vFormat.charAt(i);if(vChar==='S'||vChar===BACKSLASH){continue;}if(i>0&&vFormat.charAt(i-1)===BACKSLASH){vDateStr+=vChar;continue;}str=self.parseFormat(vChar,vDate);if(i!==len-1&&self.intParts.test(vChar)&&vFormat.charAt(i+1)==='S'){n=$h.getInt(str)||0;str+=self.dateSettings.ordinal(n);}vDateStr+=str;}return vDateStr;}return'';}};return DateFormatter;});/*!
 * Laravel Javascript Validation
 *
 * https://github.com/proengsoft/laravel-jsvalidation
 *
 * Copyright (c) 2017 Proengsoft
 * Released under the MIT license
 */var laravelValidation;laravelValidation={implicitRules:['Required','Confirmed'],/**
     * Initialize laravel validations.
     */init:function(){// jquery-validation requires the field under validation to be present. We're adding a dummy hidden
// field so that any errors are not visible.
var constructor=$.fn.validate;$.fn.validate=function(options){var name='proengsoft_jsvalidation';// must match the name defined in JsValidatorFactory.newFormRequestValidator
var $elm=$(this).find('input[name="'+name+'"]');if($elm.length===0){$('<input>').attr({type:'hidden',name:name}).appendTo(this);}return constructor.apply(this,[options]);};// Disable class rules and attribute rules
$.validator.classRuleSettings={};$.validator.attributeRules=function(){};$.validator.dataRules=this.arrayRules;$.validator.prototype.arrayRulesCache={};// Register validations methods
this.setupValidations();},arrayRules:function(element){var rules={},validator=$.data(element.form,"validator"),cache=validator.arrayRulesCache;// Is not an Array
if(element.name.indexOf('[')===-1){return rules;}if(!(element.name in cache)){cache[element.name]={};}$.each(validator.settings.rules,function(name,tmpRules){if(name in cache[element.name]){rules=laravelValidation.helpers.mergeRules(rules,cache[element.name][name]);}else{cache[element.name][name]={};var nameRegExp=laravelValidation.helpers.regexFromWildcard(name);if(element.name.match(nameRegExp)){var newRules=$.validator.normalizeRule(tmpRules)||{};cache[element.name][name]=newRules;rules=laravelValidation.helpers.mergeRules(rules,newRules);}}});return rules;},setupValidations:function(){/**
         * Get CSRF token.
         *
         * @param params
         * @returns {string}
         */var getCsrfToken=function(params){return params[0][1][1];};/**
         * Whether to validate all attributes.
         *
         * @param params
         * @returns {boolean}
         */var isValidateAll=function(params){return params[0][1][2];};/**
         * Determine whether the rule is implicit.
         *
         * @param params
         * @returns {boolean}
         */var isImplicit=function(params){var implicit=false;$.each(params,function(i,parameters){implicit=implicit||parameters[3];});return implicit;};/**
         * Get form method from a validator instance.
         *
         * @param validator
         * @returns {string}
         */var formMethod=function(validator){var formMethod=$(validator.currentForm).attr('method');if($(validator.currentForm).find('input[name="_method"]').length){formMethod=$(validator.currentForm).find('input[name="_method"]').val();}return formMethod;};/**
         * Get AJAX parameters for remote requests.
         *
         * @param validator
         * @param element
         * @param params
         * @param data
         * @returns {object}
         */var ajaxOpts=function(validator,element,params,data){return{mode:'abort',port:'validate'+element.name,dataType:'json',data:data,context:validator.currentForm,url:$(validator.currentForm).attr('action'),type:formMethod(validator),beforeSend:function(xhr){var token=getCsrfToken(params);if(formMethod(validator)!=='get'&&token){return xhr.setRequestHeader('X-XSRF-TOKEN',token);}}};};/**
         * Validate a set of local JS based rules against an element.
         *
         * @param validator
         * @param values
         * @param element
         * @param rules
         * @returns {boolean}
         */var validateLocalRules=function(validator,values,element,rules){var validated=true,previous=validator.previousValue(element);$.each(rules,function(i,param){var implicit=param[3]||laravelValidation.implicitRules.indexOf(param[0])!==-1;var rule=param[0];var message=param[2];if(!implicit&&validator.optional(element)){validated="dependency-mismatch";return false;}if(laravelValidation.methods[rule]!==undefined){$.each(values,function(index,value){validated=laravelValidation.methods[rule].call(validator,value,element,param[1],function(valid){validator.settings.messages[element.name].laravelValidationRemote=previous.originalMessage;if(valid){var submitted=validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted=submitted;validator.successList.push(element);delete validator.invalid[element.name];validator.showErrors();}else{var errors={};errors[element.name]=previous.message=typeof message==="function"?message(value):message;validator.invalid[element.name]=true;validator.showErrors(errors);}validator.showErrors(validator.errorMap);previous.valid=valid;});// Break loop.
if(validated===false){return false;}});}else{validated=false;}if(validated!==true){if(!validator.settings.messages[element.name]){validator.settings.messages[element.name]={};}validator.settings.messages[element.name].laravelValidation=message;return false;}});return validated;};/**
         * Create JQueryValidation check to validate Laravel rules.
         */$.validator.addMethod("laravelValidation",function(value,element,params){var rules=[],arrayRules=[];$.each(params,function(i,param){// put Implicit rules in front
var isArrayRule=param[4].indexOf('[')!==-1;if(param[3]||laravelValidation.implicitRules.indexOf(param[0])!==-1){isArrayRule?arrayRules.unshift(param):rules.unshift(param);}else{isArrayRule?arrayRules.push(param):rules.push(param);}});// Validate normal rules.
var localRulesResult=validateLocalRules(this,[value],element,rules);// Validate items of the array using array rules.
var arrayValue=!Array.isArray(value)?[value]:value;var arrayRulesResult=validateLocalRules(this,arrayValue,element,arrayRules);return localRulesResult&&arrayRulesResult;},'');/**
         * Create JQueryValidation check to validate Remote Laravel rules.
         */$.validator.addMethod("laravelValidationRemote",function(value,element,params){if(!isImplicit(params)&&this.optional(element)){return"dependency-mismatch";}var previous=this.previousValue(element),validator,data;if(!this.settings.messages[element.name]){this.settings.messages[element.name]={};}previous.originalMessage=this.settings.messages[element.name].laravelValidationRemote;this.settings.messages[element.name].laravelValidationRemote=previous.message;if(laravelValidation.helpers.arrayEquals(previous.old,value)||previous.old===value){return previous.valid;}previous.old=value;validator=this;this.startRequest(element);data=$(validator.currentForm).serializeArray();data.push({'name':'_jsvalidation','value':element.name});data.push({'name':'_jsvalidation_validate_all','value':isValidateAll(params)});$.ajax(ajaxOpts(validator,element,params,data)).always(function(response,textStatus){var errors,message,submitted,valid;if(textStatus==='error'){valid=false;response=laravelValidation.helpers.parseErrorResponse(response);}else if(textStatus==='success'){valid=response===true||response==="true";}else{return;}validator.settings.messages[element.name].laravelValidationRemote=previous.originalMessage;if(valid){submitted=validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted=submitted;validator.successList.push(element);delete validator.invalid[element.name];validator.showErrors();}else{errors={};message=response||validator.defaultMessage(element,"remote");errors[element.name]=previous.message=typeof message==="function"?message(value):message[0];validator.invalid[element.name]=true;validator.showErrors(errors);}validator.showErrors(validator.errorMap);previous.valid=valid;validator.stopRequest(element,valid);});return"pending";},'');/**
         * Create JQueryValidation check to form requests.
         */$.validator.addMethod("laravelValidationFormRequest",function(value,element,params){var validator=this,previous=validator.previousValue(element);var data=$(validator.currentForm).serializeArray();data.push({name:'__proengsoft_form_request',value:1});// must match FormRequest.JS_VALIDATION_FIELD
// Skip AJAX if the value remains the same as a prior request.
if(JSON.stringify(previous.old)===JSON.stringify(data)){if(!previous.valid){validator.showErrors(previous.errors||{});}return previous.valid;}previous.old=data;this.startRequest(element);$.ajax(ajaxOpts(validator,element,params,data)).always(function(response,textStatus){var errors={},valid=textStatus==='success'&&(response===true||response==='true');if(valid){validator.resetInternals();validator.toHide=validator.errorsFor(element);}else{$.each(response,function(fieldName,errorMessages){var errorElement=laravelValidation.helpers.findByName(validator,fieldName)[0];if(errorElement){errors[errorElement.name]=laravelValidation.helpers.encode(errorMessages[0]||'');}});// Failed to find the error fields so mark the form as valid otherwise user
// will be left in limbo with no visible error messages.
if($.isEmptyObject(errors)){valid=true;}}previous.valid=valid;previous.errors=errors;validator.showErrors(errors);validator.stopRequest(element,valid);});return'pending';},'');}};$(function(){laravelValidation.init();});/******/(function(){// webpackBootstrap
/******/"use strict";/******/var __webpack_modules__={/***/"./node_modules/locutus/php/array/array_diff.js":/*!******************************************************!*\
  !*** ./node_modules/locutus/php/array/array_diff.js ***!
  \******************************************************/ /***/function(module){module.exports=function array_diff(arr1){// eslint-disable-line camelcase
//  discuss at: https://locutus.io/php/array_diff/
// original by: Kevin van Zonneveld (https://kvz.io)
// improved by: Sanjoy Roy
//  revised by: Brett Zamir (https://brett-zamir.me)
//   example 1: array_diff(['Kevin', 'van', 'Zonneveld'], ['van', 'Zonneveld'])
//   returns 1: {0:'Kevin'}
var retArr={};var argl=arguments.length;var k1='';var i=1;var k='';var arr={};arr1keys:for(k1 in arr1){// eslint-disable-line no-labels
for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]){// If it reaches here, it was found in at least one array, so try next value
continue arr1keys;// eslint-disable-line no-labels
}}retArr[k1]=arr1[k1];}}return retArr;};//# sourceMappingURL=array_diff.js.map
/***/},/***/"./node_modules/locutus/php/datetime/strtotime.js":/*!********************************************************!*\
  !*** ./node_modules/locutus/php/datetime/strtotime.js ***!
  \********************************************************/ /***/function(module){var reSpace='[ \\t]+';var reSpaceOpt='[ \\t]*';var reMeridian='(?:([ap])\\.?m\\.?([\\t ]|$))';var reHour24='(2[0-4]|[01]?[0-9])';var reHour24lz='([01][0-9]|2[0-4])';var reHour12='(0?[1-9]|1[0-2])';var reMinute='([0-5]?[0-9])';var reMinutelz='([0-5][0-9])';var reSecond='(60|[0-5]?[0-9])';var reSecondlz='(60|[0-5][0-9])';var reFrac='(?:\\.([0-9]+))';var reDayfull='sunday|monday|tuesday|wednesday|thursday|friday|saturday';var reDayabbr='sun|mon|tue|wed|thu|fri|sat';var reDaytext=reDayfull+'|'+reDayabbr+'|weekdays?';var reReltextnumber='first|second|third|fourth|fifth|sixth|seventh|eighth?|ninth|tenth|eleventh|twelfth';var reReltexttext='next|last|previous|this';var reReltextunit='(?:second|sec|minute|min|hour|day|fortnight|forthnight|month|year)s?|weeks|'+reDaytext;var reYear='([0-9]{1,4})';var reYear2='([0-9]{2})';var reYear4='([0-9]{4})';var reYear4withSign='([+-]?[0-9]{4})';var reMonth='(1[0-2]|0?[0-9])';var reMonthlz='(0[0-9]|1[0-2])';var reDay='(?:(3[01]|[0-2]?[0-9])(?:st|nd|rd|th)?)';var reDaylz='(0[0-9]|[1-2][0-9]|3[01])';var reMonthFull='january|february|march|april|may|june|july|august|september|october|november|december';var reMonthAbbr='jan|feb|mar|apr|may|jun|jul|aug|sept?|oct|nov|dec';var reMonthroman='i[vx]|vi{0,3}|xi{0,2}|i{1,3}';var reMonthText='('+reMonthFull+'|'+reMonthAbbr+'|'+reMonthroman+')';var reTzCorrection='((?:GMT)?([+-])'+reHour24+':?'+reMinute+'?)';var reTzAbbr='\\(?([a-zA-Z]{1,6})\\)?';var reDayOfYear='(00[1-9]|0[1-9][0-9]|[12][0-9][0-9]|3[0-5][0-9]|36[0-6])';var reWeekOfYear='(0[1-9]|[1-4][0-9]|5[0-3])';var reDateNoYear=reMonthText+'[ .\\t-]*'+reDay+'[,.stndrh\\t ]*';function processMeridian(hour,meridian){meridian=meridian&&meridian.toLowerCase();switch(meridian){case'a':hour+=hour===12?-12:0;break;case'p':hour+=hour!==12?12:0;break;}return hour;}function processYear(yearStr){var year=+yearStr;if(yearStr.length<4&&year<100){year+=year<70?2000:1900;}return year;}function lookupMonth(monthStr){return{jan:0,january:0,i:0,feb:1,february:1,ii:1,mar:2,march:2,iii:2,apr:3,april:3,iv:3,may:4,v:4,jun:5,june:5,vi:5,jul:6,july:6,vii:6,aug:7,august:7,viii:7,sep:8,sept:8,september:8,ix:8,oct:9,october:9,x:9,nov:10,november:10,xi:10,dec:11,december:11,xii:11}[monthStr.toLowerCase()];}function lookupWeekday(dayStr){var desiredSundayNumber=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var dayNumbers={mon:1,monday:1,tue:2,tuesday:2,wed:3,wednesday:3,thu:4,thursday:4,fri:5,friday:5,sat:6,saturday:6,sun:0,sunday:0};return dayNumbers[dayStr.toLowerCase()]||desiredSundayNumber;}function lookupRelative(relText){var relativeNumbers={last:-1,previous:-1,this:0,first:1,next:1,second:2,third:3,fourth:4,fifth:5,sixth:6,seventh:7,eight:8,eighth:8,ninth:9,tenth:10,eleventh:11,twelfth:12};var relativeBehavior={this:1};var relTextLower=relText.toLowerCase();return{amount:relativeNumbers[relTextLower],behavior:relativeBehavior[relTextLower]||0};}function processTzCorrection(tzOffset,oldValue){var reTzCorrectionLoose=/(?:GMT)?([+-])(\d+)(:?)(\d{0,2})/i;tzOffset=tzOffset&&tzOffset.match(reTzCorrectionLoose);if(!tzOffset){return oldValue;}var sign=tzOffset[1]==='-'?-1:1;var hours=+tzOffset[2];var minutes=+tzOffset[4];if(!tzOffset[4]&&!tzOffset[3]){minutes=Math.floor(hours%100);hours=Math.floor(hours/100);}// timezone offset in seconds
return sign*(hours*60+minutes)*60;}// tz abbrevation : tz offset in seconds
var tzAbbrOffsets={acdt:37800,acst:34200,addt:-7200,adt:-10800,aedt:39600,aest:36000,ahdt:-32400,ahst:-36000,akdt:-28800,akst:-32400,amt:-13840,apt:-10800,ast:-14400,awdt:32400,awst:28800,awt:-10800,bdst:7200,bdt:-36000,bmt:-14309,bst:3600,cast:34200,cat:7200,cddt:-14400,cdt:-18000,cemt:10800,cest:7200,cet:3600,cmt:-15408,cpt:-18000,cst:-21600,cwt:-18000,chst:36000,dmt:-1521,eat:10800,eddt:-10800,edt:-14400,eest:10800,eet:7200,emt:-26248,ept:-14400,est:-18000,ewt:-14400,ffmt:-14660,fmt:-4056,gdt:39600,gmt:0,gst:36000,hdt:-34200,hkst:32400,hkt:28800,hmt:-19776,hpt:-34200,hst:-36000,hwt:-34200,iddt:14400,idt:10800,imt:25025,ist:7200,jdt:36000,jmt:8440,jst:32400,kdt:36000,kmt:5736,kst:30600,lst:9394,mddt:-18000,mdst:16279,mdt:-21600,mest:7200,met:3600,mmt:9017,mpt:-21600,msd:14400,msk:10800,mst:-25200,mwt:-21600,nddt:-5400,ndt:-9052,npt:-9000,nst:-12600,nwt:-9000,nzdt:46800,nzmt:41400,nzst:43200,pddt:-21600,pdt:-25200,pkst:21600,pkt:18000,plmt:25590,pmt:-13236,ppmt:-17340,ppt:-25200,pst:-28800,pwt:-25200,qmt:-18840,rmt:5794,sast:7200,sdmt:-16800,sjmt:-20173,smt:-13884,sst:-39600,tbmt:10751,tmt:12344,uct:0,utc:0,wast:7200,wat:3600,wemt:7200,west:3600,wet:0,wib:25200,wita:28800,wit:32400,wmt:5040,yddt:-25200,ydt:-28800,ypt:-28800,yst:-32400,ywt:-28800,a:3600,b:7200,c:10800,d:14400,e:18000,f:21600,g:25200,h:28800,i:32400,k:36000,l:39600,m:43200,n:-3600,o:-7200,p:-10800,q:-14400,r:-18000,s:-21600,t:-25200,u:-28800,v:-32400,w:-36000,x:-39600,y:-43200,z:0};var formats={yesterday:{regex:/^yesterday/i,name:'yesterday',callback:function callback(){this.rd-=1;return this.resetTime();}},now:{regex:/^now/i,name:'now'// do nothing
},noon:{regex:/^noon/i,name:'noon',callback:function callback(){return this.resetTime()&&this.time(12,0,0,0);}},midnightOrToday:{regex:/^(midnight|today)/i,name:'midnight | today',callback:function callback(){return this.resetTime();}},tomorrow:{regex:/^tomorrow/i,name:'tomorrow',callback:function callback(){this.rd+=1;return this.resetTime();}},timestamp:{regex:/^@(-?\d+)/i,name:'timestamp',callback:function callback(match,timestamp){this.rs+=+timestamp;this.y=1970;this.m=0;this.d=1;this.dates=0;return this.resetTime()&&this.zone(0);}},firstOrLastDay:{regex:/^(first|last) day of/i,name:'firstdayof | lastdayof',callback:function callback(match,day){if(day.toLowerCase()==='first'){this.firstOrLastDayOfMonth=1;}else{this.firstOrLastDayOfMonth=-1;}}},backOrFrontOf:{regex:RegExp('^(back|front) of '+reHour24+reSpaceOpt+reMeridian+'?','i'),name:'backof | frontof',callback:function callback(match,side,hours,meridian){var back=side.toLowerCase()==='back';var hour=+hours;var minute=15;if(!back){hour-=1;minute=45;}hour=processMeridian(hour,meridian);return this.resetTime()&&this.time(hour,minute,0,0);}},weekdayOf:{regex:RegExp('^('+reReltextnumber+'|'+reReltexttext+')'+reSpace+'('+reDayfull+'|'+reDayabbr+')'+reSpace+'of','i'),name:'weekdayof'// todo
},mssqltime:{regex:RegExp('^'+reHour12+':'+reMinutelz+':'+reSecondlz+'[:.]([0-9]+)'+reMeridian,'i'),name:'mssqltime',callback:function callback(match,hour,minute,second,frac,meridian){return this.time(processMeridian(+hour,meridian),+minute,+second,+frac.substr(0,3));}},timeLong12:{regex:RegExp('^'+reHour12+'[:.]'+reMinute+'[:.]'+reSecondlz+reSpaceOpt+reMeridian,'i'),name:'timelong12',callback:function callback(match,hour,minute,second,meridian){return this.time(processMeridian(+hour,meridian),+minute,+second,0);}},timeShort12:{regex:RegExp('^'+reHour12+'[:.]'+reMinutelz+reSpaceOpt+reMeridian,'i'),name:'timeshort12',callback:function callback(match,hour,minute,meridian){return this.time(processMeridian(+hour,meridian),+minute,0,0);}},timeTiny12:{regex:RegExp('^'+reHour12+reSpaceOpt+reMeridian,'i'),name:'timetiny12',callback:function callback(match,hour,meridian){return this.time(processMeridian(+hour,meridian),0,0,0);}},soap:{regex:RegExp('^'+reYear4+'-'+reMonthlz+'-'+reDaylz+'T'+reHour24lz+':'+reMinutelz+':'+reSecondlz+reFrac+reTzCorrection+'?','i'),name:'soap',callback:function callback(match,year,month,day,hour,minute,second,frac,tzCorrection){return this.ymd(+year,month-1,+day)&&this.time(+hour,+minute,+second,+frac.substr(0,3))&&this.zone(processTzCorrection(tzCorrection));}},wddx:{regex:RegExp('^'+reYear4+'-'+reMonth+'-'+reDay+'T'+reHour24+':'+reMinute+':'+reSecond),name:'wddx',callback:function callback(match,year,month,day,hour,minute,second){return this.ymd(+year,month-1,+day)&&this.time(+hour,+minute,+second,0);}},exif:{regex:RegExp('^'+reYear4+':'+reMonthlz+':'+reDaylz+' '+reHour24lz+':'+reMinutelz+':'+reSecondlz,'i'),name:'exif',callback:function callback(match,year,month,day,hour,minute,second){return this.ymd(+year,month-1,+day)&&this.time(+hour,+minute,+second,0);}},xmlRpc:{regex:RegExp('^'+reYear4+reMonthlz+reDaylz+'T'+reHour24+':'+reMinutelz+':'+reSecondlz),name:'xmlrpc',callback:function callback(match,year,month,day,hour,minute,second){return this.ymd(+year,month-1,+day)&&this.time(+hour,+minute,+second,0);}},xmlRpcNoColon:{regex:RegExp('^'+reYear4+reMonthlz+reDaylz+'[Tt]'+reHour24+reMinutelz+reSecondlz),name:'xmlrpcnocolon',callback:function callback(match,year,month,day,hour,minute,second){return this.ymd(+year,month-1,+day)&&this.time(+hour,+minute,+second,0);}},clf:{regex:RegExp('^'+reDay+'/('+reMonthAbbr+')/'+reYear4+':'+reHour24lz+':'+reMinutelz+':'+reSecondlz+reSpace+reTzCorrection,'i'),name:'clf',callback:function callback(match,day,month,year,hour,minute,second,tzCorrection){return this.ymd(+year,lookupMonth(month),+day)&&this.time(+hour,+minute,+second,0)&&this.zone(processTzCorrection(tzCorrection));}},iso8601long:{regex:RegExp('^t?'+reHour24+'[:.]'+reMinute+'[:.]'+reSecond+reFrac,'i'),name:'iso8601long',callback:function callback(match,hour,minute,second,frac){return this.time(+hour,+minute,+second,+frac.substr(0,3));}},dateTextual:{regex:RegExp('^'+reMonthText+'[ .\\t-]*'+reDay+'[,.stndrh\\t ]+'+reYear,'i'),name:'datetextual',callback:function callback(match,month,day,year){return this.ymd(processYear(year),lookupMonth(month),+day);}},pointedDate4:{regex:RegExp('^'+reDay+'[.\\t-]'+reMonth+'[.-]'+reYear4),name:'pointeddate4',callback:function callback(match,day,month,year){return this.ymd(+year,month-1,+day);}},pointedDate2:{regex:RegExp('^'+reDay+'[.\\t]'+reMonth+'\\.'+reYear2),name:'pointeddate2',callback:function callback(match,day,month,year){return this.ymd(processYear(year),month-1,+day);}},timeLong24:{regex:RegExp('^t?'+reHour24+'[:.]'+reMinute+'[:.]'+reSecond),name:'timelong24',callback:function callback(match,hour,minute,second){return this.time(+hour,+minute,+second,0);}},dateNoColon:{regex:RegExp('^'+reYear4+reMonthlz+reDaylz),name:'datenocolon',callback:function callback(match,year,month,day){return this.ymd(+year,month-1,+day);}},pgydotd:{regex:RegExp('^'+reYear4+'\\.?'+reDayOfYear),name:'pgydotd',callback:function callback(match,year,day){return this.ymd(+year,0,+day);}},timeShort24:{regex:RegExp('^t?'+reHour24+'[:.]'+reMinute,'i'),name:'timeshort24',callback:function callback(match,hour,minute){return this.time(+hour,+minute,0,0);}},iso8601noColon:{regex:RegExp('^t?'+reHour24lz+reMinutelz+reSecondlz,'i'),name:'iso8601nocolon',callback:function callback(match,hour,minute,second){return this.time(+hour,+minute,+second,0);}},iso8601dateSlash:{// eventhough the trailing slash is optional in PHP
// here it's mandatory and inputs without the slash
// are handled by dateslash
regex:RegExp('^'+reYear4+'/'+reMonthlz+'/'+reDaylz+'/'),name:'iso8601dateslash',callback:function callback(match,year,month,day){return this.ymd(+year,month-1,+day);}},dateSlash:{regex:RegExp('^'+reYear4+'/'+reMonth+'/'+reDay),name:'dateslash',callback:function callback(match,year,month,day){return this.ymd(+year,month-1,+day);}},american:{regex:RegExp('^'+reMonth+'/'+reDay+'/'+reYear),name:'american',callback:function callback(match,month,day,year){return this.ymd(processYear(year),month-1,+day);}},americanShort:{regex:RegExp('^'+reMonth+'/'+reDay),name:'americanshort',callback:function callback(match,month,day){return this.ymd(this.y,month-1,+day);}},gnuDateShortOrIso8601date2:{// iso8601date2 is complete subset of gnudateshort
regex:RegExp('^'+reYear+'-'+reMonth+'-'+reDay),name:'gnudateshort | iso8601date2',callback:function callback(match,year,month,day){return this.ymd(processYear(year),month-1,+day);}},iso8601date4:{regex:RegExp('^'+reYear4withSign+'-'+reMonthlz+'-'+reDaylz),name:'iso8601date4',callback:function callback(match,year,month,day){return this.ymd(+year,month-1,+day);}},gnuNoColon:{regex:RegExp('^t?'+reHour24lz+reMinutelz,'i'),name:'gnunocolon',callback:function callback(match,hour,minute){// this rule is a special case
// if time was already set once by any preceding rule, it sets the captured value as year
switch(this.times){case 0:return this.time(+hour,+minute,0,this.f);case 1:this.y=hour*100+ +minute;this.times++;return true;default:return false;}}},gnuDateShorter:{regex:RegExp('^'+reYear4+'-'+reMonth),name:'gnudateshorter',callback:function callback(match,year,month){return this.ymd(+year,month-1,1);}},pgTextReverse:{// note: allowed years are from 32-9999
// years below 32 should be treated as days in datefull
regex:RegExp('^'+'(\\d{3,4}|[4-9]\\d|3[2-9])-('+reMonthAbbr+')-'+reDaylz,'i'),name:'pgtextreverse',callback:function callback(match,year,month,day){return this.ymd(processYear(year),lookupMonth(month),+day);}},dateFull:{regex:RegExp('^'+reDay+'[ \\t.-]*'+reMonthText+'[ \\t.-]*'+reYear,'i'),name:'datefull',callback:function callback(match,day,month,year){return this.ymd(processYear(year),lookupMonth(month),+day);}},dateNoDay:{regex:RegExp('^'+reMonthText+'[ .\\t-]*'+reYear4,'i'),name:'datenoday',callback:function callback(match,month,year){return this.ymd(+year,lookupMonth(month),1);}},dateNoDayRev:{regex:RegExp('^'+reYear4+'[ .\\t-]*'+reMonthText,'i'),name:'datenodayrev',callback:function callback(match,year,month){return this.ymd(+year,lookupMonth(month),1);}},pgTextShort:{regex:RegExp('^('+reMonthAbbr+')-'+reDaylz+'-'+reYear,'i'),name:'pgtextshort',callback:function callback(match,month,day,year){return this.ymd(processYear(year),lookupMonth(month),+day);}},dateNoYear:{regex:RegExp('^'+reDateNoYear,'i'),name:'datenoyear',callback:function callback(match,month,day){return this.ymd(this.y,lookupMonth(month),+day);}},dateNoYearRev:{regex:RegExp('^'+reDay+'[ .\\t-]*'+reMonthText,'i'),name:'datenoyearrev',callback:function callback(match,day,month){return this.ymd(this.y,lookupMonth(month),+day);}},isoWeekDay:{regex:RegExp('^'+reYear4+'-?W'+reWeekOfYear+'(?:-?([0-7]))?'),name:'isoweekday | isoweek',callback:function callback(match,year,week,day){day=day?+day:1;if(!this.ymd(+year,0,1)){return false;}// get day of week for Jan 1st
var dayOfWeek=new Date(this.y,this.m,this.d).getDay();// and use the day to figure out the offset for day 1 of week 1
dayOfWeek=0-(dayOfWeek>4?dayOfWeek-7:dayOfWeek);this.rd+=dayOfWeek+(week-1)*7+day;}},relativeText:{regex:RegExp('^('+reReltextnumber+'|'+reReltexttext+')'+reSpace+'('+reReltextunit+')','i'),name:'relativetext',callback:function callback(match,relValue,relUnit){// todo: implement handling of 'this time-unit'
// eslint-disable-next-line no-unused-vars
var _lookupRelative=lookupRelative(relValue),amount=_lookupRelative.amount,behavior=_lookupRelative.behavior;switch(relUnit.toLowerCase()){case'sec':case'secs':case'second':case'seconds':this.rs+=amount;break;case'min':case'mins':case'minute':case'minutes':this.ri+=amount;break;case'hour':case'hours':this.rh+=amount;break;case'day':case'days':this.rd+=amount;break;case'fortnight':case'fortnights':case'forthnight':case'forthnights':this.rd+=amount*14;break;case'week':case'weeks':this.rd+=amount*7;break;case'month':case'months':this.rm+=amount;break;case'year':case'years':this.ry+=amount;break;case'mon':case'monday':case'tue':case'tuesday':case'wed':case'wednesday':case'thu':case'thursday':case'fri':case'friday':case'sat':case'saturday':case'sun':case'sunday':this.resetTime();this.weekday=lookupWeekday(relUnit,7);this.weekdayBehavior=1;this.rd+=(amount>0?amount-1:amount)*7;break;case'weekday':case'weekdays':// todo
break;}}},relative:{regex:RegExp('^([+-]*)[ \\t]*(\\d+)'+reSpaceOpt+'('+reReltextunit+'|week)','i'),name:'relative',callback:function callback(match,signs,relValue,relUnit){var minuses=signs.replace(/[^-]/g,'').length;var amount=+relValue*Math.pow(-1,minuses);switch(relUnit.toLowerCase()){case'sec':case'secs':case'second':case'seconds':this.rs+=amount;break;case'min':case'mins':case'minute':case'minutes':this.ri+=amount;break;case'hour':case'hours':this.rh+=amount;break;case'day':case'days':this.rd+=amount;break;case'fortnight':case'fortnights':case'forthnight':case'forthnights':this.rd+=amount*14;break;case'week':case'weeks':this.rd+=amount*7;break;case'month':case'months':this.rm+=amount;break;case'year':case'years':this.ry+=amount;break;case'mon':case'monday':case'tue':case'tuesday':case'wed':case'wednesday':case'thu':case'thursday':case'fri':case'friday':case'sat':case'saturday':case'sun':case'sunday':this.resetTime();this.weekday=lookupWeekday(relUnit,7);this.weekdayBehavior=1;this.rd+=(amount>0?amount-1:amount)*7;break;case'weekday':case'weekdays':// todo
break;}}},dayText:{regex:RegExp('^('+reDaytext+')','i'),name:'daytext',callback:function callback(match,dayText){this.resetTime();this.weekday=lookupWeekday(dayText,0);if(this.weekdayBehavior!==2){this.weekdayBehavior=1;}}},relativeTextWeek:{regex:RegExp('^('+reReltexttext+')'+reSpace+'week','i'),name:'relativetextweek',callback:function callback(match,relText){this.weekdayBehavior=2;switch(relText.toLowerCase()){case'this':this.rd+=0;break;case'next':this.rd+=7;break;case'last':case'previous':this.rd-=7;break;}if(isNaN(this.weekday)){this.weekday=1;}}},monthFullOrMonthAbbr:{regex:RegExp('^('+reMonthFull+'|'+reMonthAbbr+')','i'),name:'monthfull | monthabbr',callback:function callback(match,month){return this.ymd(this.y,lookupMonth(month),this.d);}},tzCorrection:{regex:RegExp('^'+reTzCorrection,'i'),name:'tzcorrection',callback:function callback(tzCorrection){return this.zone(processTzCorrection(tzCorrection));}},tzAbbr:{regex:RegExp('^'+reTzAbbr),name:'tzabbr',callback:function callback(match,abbr){var offset=tzAbbrOffsets[abbr.toLowerCase()];if(isNaN(offset)){return false;}return this.zone(offset);}},ago:{regex:/^ago/i,name:'ago',callback:function callback(){this.ry=-this.ry;this.rm=-this.rm;this.rd=-this.rd;this.rh=-this.rh;this.ri=-this.ri;this.rs=-this.rs;this.rf=-this.rf;}},year4:{regex:RegExp('^'+reYear4),name:'year4',callback:function callback(match,year){this.y=+year;return true;}},whitespace:{regex:/^[ .,\t]+/,name:'whitespace'// do nothing
},dateShortWithTimeLong:{regex:RegExp('^'+reDateNoYear+'t?'+reHour24+'[:.]'+reMinute+'[:.]'+reSecond,'i'),name:'dateshortwithtimelong',callback:function callback(match,month,day,hour,minute,second){return this.ymd(this.y,lookupMonth(month),+day)&&this.time(+hour,+minute,+second,0);}},dateShortWithTimeLong12:{regex:RegExp('^'+reDateNoYear+reHour12+'[:.]'+reMinute+'[:.]'+reSecondlz+reSpaceOpt+reMeridian,'i'),name:'dateshortwithtimelong12',callback:function callback(match,month,day,hour,minute,second,meridian){return this.ymd(this.y,lookupMonth(month),+day)&&this.time(processMeridian(+hour,meridian),+minute,+second,0);}},dateShortWithTimeShort:{regex:RegExp('^'+reDateNoYear+'t?'+reHour24+'[:.]'+reMinute,'i'),name:'dateshortwithtimeshort',callback:function callback(match,month,day,hour,minute){return this.ymd(this.y,lookupMonth(month),+day)&&this.time(+hour,+minute,0,0);}},dateShortWithTimeShort12:{regex:RegExp('^'+reDateNoYear+reHour12+'[:.]'+reMinutelz+reSpaceOpt+reMeridian,'i'),name:'dateshortwithtimeshort12',callback:function callback(match,month,day,hour,minute,meridian){return this.ymd(this.y,lookupMonth(month),+day)&&this.time(processMeridian(+hour,meridian),+minute,0,0);}}};var resultProto={// date
y:NaN,m:NaN,d:NaN,// time
h:NaN,i:NaN,s:NaN,f:NaN,// relative shifts
ry:0,rm:0,rd:0,rh:0,ri:0,rs:0,rf:0,// weekday related shifts
weekday:NaN,weekdayBehavior:0,// first or last day of month
// 0 none, 1 first, -1 last
firstOrLastDayOfMonth:0,// timezone correction in minutes
z:NaN,// counters
dates:0,times:0,zones:0,// helper functions
ymd:function ymd(y,m,d){if(this.dates>0){return false;}this.dates++;this.y=y;this.m=m;this.d=d;return true;},time:function time(h,i,s,f){if(this.times>0){return false;}this.times++;this.h=h;this.i=i;this.s=s;this.f=f;return true;},resetTime:function resetTime(){this.h=0;this.i=0;this.s=0;this.f=0;this.times=0;return true;},zone:function zone(minutes){if(this.zones<=1){this.zones++;this.z=minutes;return true;}return false;},toDate:function toDate(relativeTo){if(this.dates&&!this.times){this.h=this.i=this.s=this.f=0;}// fill holes
if(isNaN(this.y)){this.y=relativeTo.getFullYear();}if(isNaN(this.m)){this.m=relativeTo.getMonth();}if(isNaN(this.d)){this.d=relativeTo.getDate();}if(isNaN(this.h)){this.h=relativeTo.getHours();}if(isNaN(this.i)){this.i=relativeTo.getMinutes();}if(isNaN(this.s)){this.s=relativeTo.getSeconds();}if(isNaN(this.f)){this.f=relativeTo.getMilliseconds();}// adjust special early
switch(this.firstOrLastDayOfMonth){case 1:this.d=1;break;case-1:this.d=0;this.m+=1;break;}if(!isNaN(this.weekday)){var date=new Date(relativeTo.getTime());date.setFullYear(this.y,this.m,this.d);date.setHours(this.h,this.i,this.s,this.f);var dow=date.getDay();if(this.weekdayBehavior===2){// To make "this week" work, where the current day of week is a "sunday"
if(dow===0&&this.weekday!==0){this.weekday=-6;}// To make "sunday this week" work, where the current day of week is not a "sunday"
if(this.weekday===0&&dow!==0){this.weekday=7;}this.d-=dow;this.d+=this.weekday;}else{var diff=this.weekday-dow;// some PHP magic
if(this.rd<0&&diff<0||this.rd>=0&&diff<=-this.weekdayBehavior){diff+=7;}if(this.weekday>=0){this.d+=diff;}else{this.d-=7-(Math.abs(this.weekday)-dow);}this.weekday=NaN;}}// adjust relative
this.y+=this.ry;this.m+=this.rm;this.d+=this.rd;this.h+=this.rh;this.i+=this.ri;this.s+=this.rs;this.f+=this.rf;this.ry=this.rm=this.rd=0;this.rh=this.ri=this.rs=this.rf=0;var result=new Date(relativeTo.getTime());// since Date constructor treats years <= 99 as 1900+
// it can't be used, thus this weird way
result.setFullYear(this.y,this.m,this.d);result.setHours(this.h,this.i,this.s,this.f);// note: this is done twice in PHP
// early when processing special relatives
// and late
// todo: check if the logic can be reduced
// to just one time action
switch(this.firstOrLastDayOfMonth){case 1:result.setDate(1);break;case-1:result.setMonth(result.getMonth()+1,0);break;}// adjust timezone
if(!isNaN(this.z)&&result.getTimezoneOffset()!==this.z){result.setUTCFullYear(result.getFullYear(),result.getMonth(),result.getDate());result.setUTCHours(result.getHours(),result.getMinutes(),result.getSeconds()-this.z,result.getMilliseconds());}return result;}};module.exports=function strtotime(str,now){//       discuss at: https://locutus.io/php/strtotime/
//      original by: Caio Ariede (https://caioariede.com)
//      improved by: Kevin van Zonneveld (https://kvz.io)
//      improved by: Caio Ariede (https://caioariede.com)
//      improved by: A. Matías Quezada (https://amatiasq.com)
//      improved by: preuter
//      improved by: Brett Zamir (https://brett-zamir.me)
//      improved by: Mirko Faber
//         input by: David
//      bugfixed by: Wagner B. Soares
//      bugfixed by: Artur Tchernychev
//      bugfixed by: Stephan Bösch-Plepelits (https://github.com/plepe)
// reimplemented by: Rafał Kukawski
//           note 1: Examples all have a fixed timestamp to prevent
//           note 1: tests to fail because of variable time(zones)
//        example 1: strtotime('+1 day', 1129633200)
//        returns 1: 1129719600
//        example 2: strtotime('+1 week 2 days 4 hours 2 seconds', 1129633200)
//        returns 2: 1130425202
//        example 3: strtotime('last month', 1129633200)
//        returns 3: 1127041200
//        example 4: strtotime('2009-05-04 08:30:00+00')
//        returns 4: 1241425800
//        example 5: strtotime('2009-05-04 08:30:00+02:00')
//        returns 5: 1241418600
//        example 6: strtotime('2009-05-04 08:30:00 YWT')
//        returns 6: 1241454600
if(now==null){now=Math.floor(Date.now()/1000);}// the rule order is important
// if multiple rules match, the longest match wins
// if multiple rules match the same string, the first match wins
var rules=[formats.yesterday,formats.now,formats.noon,formats.midnightOrToday,formats.tomorrow,formats.timestamp,formats.firstOrLastDay,formats.backOrFrontOf,// formats.weekdayOf, // not yet implemented
formats.timeTiny12,formats.timeShort12,formats.timeLong12,formats.mssqltime,formats.timeShort24,formats.timeLong24,formats.iso8601long,formats.gnuNoColon,formats.iso8601noColon,formats.americanShort,formats.american,formats.iso8601date4,formats.iso8601dateSlash,formats.dateSlash,formats.gnuDateShortOrIso8601date2,formats.gnuDateShorter,formats.dateFull,formats.pointedDate4,formats.pointedDate2,formats.dateNoDay,formats.dateNoDayRev,formats.dateTextual,formats.dateNoYear,formats.dateNoYearRev,formats.dateNoColon,formats.xmlRpc,formats.xmlRpcNoColon,formats.soap,formats.wddx,formats.exif,formats.pgydotd,formats.isoWeekDay,formats.pgTextShort,formats.pgTextReverse,formats.clf,formats.year4,formats.ago,formats.dayText,formats.relativeTextWeek,formats.relativeText,formats.monthFullOrMonthAbbr,formats.tzCorrection,formats.tzAbbr,formats.dateShortWithTimeShort12,formats.dateShortWithTimeLong12,formats.dateShortWithTimeShort,formats.dateShortWithTimeLong,formats.relative,formats.whitespace];var result=Object.create(resultProto);while(str.length){var longestMatch=null;var finalRule=null;for(var i=0,l=rules.length;i<l;i++){var format=rules[i];var match=str.match(format.regex);if(match){if(!longestMatch||match[0].length>longestMatch[0].length){longestMatch=match;finalRule=format;}}}if(!finalRule||finalRule.callback&&finalRule.callback.apply(result,longestMatch)===false){return false;}str=str.substr(longestMatch[0].length);finalRule=null;longestMatch=null;}return Math.floor(result.toDate(new Date(now*1000))/1000);};//# sourceMappingURL=strtotime.js.map
/***/},/***/"./node_modules/locutus/php/info/ini_get.js":/*!**************************************************!*\
  !*** ./node_modules/locutus/php/info/ini_get.js ***!
  \**************************************************/ /***/function(module,__unused_webpack_exports,__webpack_require__){module.exports=function ini_get(varname){// eslint-disable-line camelcase
//  discuss at: https://locutus.io/php/ini_get/
// original by: Brett Zamir (https://brett-zamir.me)
//      note 1: The ini values must be set by ini_set or manually within an ini file
//   example 1: ini_set('date.timezone', 'Asia/Hong_Kong')
//   example 1: ini_get('date.timezone')
//   returns 1: 'Asia/Hong_Kong'
var $global=typeof window!=='undefined'?window:__webpack_require__.g;$global.$locutus=$global.$locutus||{};var $locutus=$global.$locutus;$locutus.php=$locutus.php||{};$locutus.php.ini=$locutus.php.ini||{};if($locutus.php.ini[varname]&&$locutus.php.ini[varname].local_value!==undefined){if($locutus.php.ini[varname].local_value===null){return'';}return $locutus.php.ini[varname].local_value;}return'';};//# sourceMappingURL=ini_get.js.map
/***/},/***/"./node_modules/locutus/php/strings/strlen.js":/*!****************************************************!*\
  !*** ./node_modules/locutus/php/strings/strlen.js ***!
  \****************************************************/ /***/function(module,__unused_webpack_exports,__webpack_require__){module.exports=function strlen(string){//  discuss at: https://locutus.io/php/strlen/
// original by: Kevin van Zonneveld (https://kvz.io)
// improved by: Sakimori
// improved by: Kevin van Zonneveld (https://kvz.io)
//    input by: Kirk Strobeck
// bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
//  revised by: Brett Zamir (https://brett-zamir.me)
//      note 1: May look like overkill, but in order to be truly faithful to handling all Unicode
//      note 1: characters and to this function in PHP which does not count the number of bytes
//      note 1: but counts the number of characters, something like this is really necessary.
//   example 1: strlen('Kevin van Zonneveld')
//   returns 1: 19
//   example 2: ini_set('unicode.semantics', 'on')
//   example 2: strlen('A\ud87e\udc04Z')
//   returns 2: 3
var str=string+'';var iniVal=(true?__webpack_require__(/*! ../info/ini_get */"./node_modules/locutus/php/info/ini_get.js")('unicode.semantics'):0)||'off';if(iniVal==='off'){return str.length;}var i=0;var lgth=0;var getWholeChar=function getWholeChar(str,i){var code=str.charCodeAt(i);var next='';var prev='';if(code>=0xD800&&code<=0xDBFF){// High surrogate (could change last hex to 0xDB7F to
// treat high private surrogates as single characters)
if(str.length<=i+1){throw new Error('High surrogate without following low surrogate');}next=str.charCodeAt(i+1);if(next<0xDC00||next>0xDFFF){throw new Error('High surrogate without following low surrogate');}return str.charAt(i)+str.charAt(i+1);}else if(code>=0xDC00&&code<=0xDFFF){// Low surrogate
if(i===0){throw new Error('Low surrogate without preceding high surrogate');}prev=str.charCodeAt(i-1);if(prev<0xD800||prev>0xDBFF){// (could change last hex to 0xDB7F to treat high private surrogates
// as single characters)
throw new Error('Low surrogate without preceding high surrogate');}// We can pass over low surrogates now as the second
// component in a pair which we have already processed
return false;}return str.charAt(i);};for(i=0,lgth=0;i<str.length;i++){if(getWholeChar(str,i)===false){continue;}// Adapt this line at the top of any loop, passing in the whole string and
// the current iteration and returning a variable to represent the individual character;
// purpose is to treat the first part of a surrogate pair as the whole character and then
// ignore the second part
lgth++;}return lgth;};//# sourceMappingURL=strlen.js.map
/***/},/***/"./node_modules/locutus/php/var/is_numeric.js":/*!****************************************************!*\
  !*** ./node_modules/locutus/php/var/is_numeric.js ***!
  \****************************************************/ /***/function(module){module.exports=function is_numeric(mixedVar){// eslint-disable-line camelcase
//  discuss at: https://locutus.io/php/is_numeric/
// original by: Kevin van Zonneveld (https://kvz.io)
// improved by: David
// improved by: taith
// bugfixed by: Tim de Koning
// bugfixed by: WebDevHobo (https://webdevhobo.blogspot.com/)
// bugfixed by: Brett Zamir (https://brett-zamir.me)
// bugfixed by: Denis Chenu (https://shnoulle.net)
//   example 1: is_numeric(186.31)
//   returns 1: true
//   example 2: is_numeric('Kevin van Zonneveld')
//   returns 2: false
//   example 3: is_numeric(' +186.31e2')
//   returns 3: true
//   example 4: is_numeric('')
//   returns 4: false
//   example 5: is_numeric([])
//   returns 5: false
//   example 6: is_numeric('1 ')
//   returns 6: false
var whitespace=[' ','\n','\r','\t','\f','\x0b','\xa0','\u2000','\u2001','\u2002','\u2003','\u2004','\u2005','\u2006','\u2007','\u2008','\u2009','\u200A','\u200B','\u2028','\u2029','\u3000'].join('');// @todo: Break this up using many single conditions with early returns
return(typeof mixedVar==='number'||typeof mixedVar==='string'&&whitespace.indexOf(mixedVar.slice(-1))===-1)&&mixedVar!==''&&!isNaN(mixedVar);};//# sourceMappingURL=is_numeric.js.map
/***/}/******/};/************************************************************************/ /******/ // The module cache
/******/var __webpack_module_cache__={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ // Check if module is in cache
/******/var cachedModule=__webpack_module_cache__[moduleId];/******/if(cachedModule!==undefined){/******/return cachedModule.exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=__webpack_module_cache__[moduleId]={/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/__webpack_modules__[moduleId](module,module.exports,__webpack_require__);/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /************************************************************************/ /******/ /* webpack/runtime/compat get default export */ /******/!function(){/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function(){return module['default'];}:/******/function(){return module;};/******/__webpack_require__.d(getter,{a:getter});/******/return getter;/******/};/******/}();/******/ /******/ /* webpack/runtime/define property getters */ /******/!function(){/******/ // define getter functions for harmony exports
/******/__webpack_require__.d=function(exports,definition){/******/for(var key in definition){/******/if(__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)){/******/Object.defineProperty(exports,key,{enumerable:true,get:definition[key]});/******/}/******/}/******/};/******/}();/******/ /******/ /* webpack/runtime/global */ /******/!function(){/******/__webpack_require__.g=function(){/******/if(typeof globalThis==='object')return globalThis;/******/try{/******/return this||new Function('return this')();/******/}catch(e){/******/if(typeof window==='object')return window;/******/}/******/}();/******/}();/******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/!function(){/******/__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop);};/******/}();/******/ /******/ /* webpack/runtime/make namespace object */ /******/!function(){/******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/}();/******/ /************************************************************************/var __webpack_exports__={};// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function(){/*!****************************************!*\
  !*** ./resources/assets/js/helpers.js ***!
  \****************************************/__webpack_require__.r(__webpack_exports__);/* harmony import */var locutus_php_strings_strlen__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! locutus/php/strings/strlen */"./node_modules/locutus/php/strings/strlen.js");/* harmony import */var locutus_php_strings_strlen__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(locutus_php_strings_strlen__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var locutus_php_array_array_diff__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! locutus/php/array/array_diff */"./node_modules/locutus/php/array/array_diff.js");/* harmony import */var locutus_php_array_array_diff__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(locutus_php_array_array_diff__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var locutus_php_datetime_strtotime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! locutus/php/datetime/strtotime */"./node_modules/locutus/php/datetime/strtotime.js");/* harmony import */var locutus_php_datetime_strtotime__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(locutus_php_datetime_strtotime__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var locutus_php_var_is_numeric__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! locutus/php/var/is_numeric */"./node_modules/locutus/php/var/is_numeric.js");/* harmony import */var locutus_php_var_is_numeric__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(locutus_php_var_is_numeric__WEBPACK_IMPORTED_MODULE_3__);/*!
 * Laravel Javascript Validation
 *
 * https://github.com/proengsoft/laravel-jsvalidation
 *
 * Helper functions used by validators
 *
 * Copyright (c) 2017 Proengsoft
 * Released under the MIT license
 */$.extend(true,laravelValidation,{helpers:{/**
     * Numeric rules
     */numericRules:['Integer','Numeric'],/**
     * Gets the file information from file input.
     *
     * @param fieldObj
     * @param index
     * @returns {{file: *, extension: string, size: number}}
     */fileinfo:function(fieldObj,index){var FileName=fieldObj.value;index=typeof index!=='undefined'?index:0;if(fieldObj.files!==null){if(typeof fieldObj.files[index]!=='undefined'){return{file:FileName,extension:FileName.substr(FileName.lastIndexOf('.')+1),size:fieldObj.files[index].size/1024,type:fieldObj.files[index].type};}}return false;},/**
     * Gets the selectors for th specified field names.
     *
     * @param names
     * @returns {string}
     */selector:function(names){var selector=[];if(!this.isArray(names)){names=[names];}for(var i=0;i<names.length;i++){selector.push("[name='"+names[i]+"']");}return selector.join();},/**
     * Check if element has numeric rules.
     *
     * @param element
     * @returns {boolean}
     */hasNumericRules:function(element){return this.hasRules(element,this.numericRules);},/**
     * Check if element has passed rules.
     *
     * @param element
     * @param rules
     * @returns {boolean}
     */hasRules:function(element,rules){var found=false;if(typeof rules==='string'){rules=[rules];}var validator=$.data(element.form,"validator");var listRules=[];var cache=validator.arrayRulesCache;if(element.name in cache){$.each(cache[element.name],function(index,arrayRule){listRules.push(arrayRule);});}if(element.name in validator.settings.rules){listRules.push(validator.settings.rules[element.name]);}$.each(listRules,function(index,objRules){if('laravelValidation'in objRules){var _rules=objRules.laravelValidation;for(var i=0;i<_rules.length;i++){if($.inArray(_rules[i][0],rules)!==-1){found=true;return false;}}}});return found;},/**
     * Return the string length using PHP function.
     * http://php.net/manual/en/function.strlen.php
     * http://phpjs.org/functions/strlen/
     *
     * @param string
     */strlen:function(string){return locutus_php_strings_strlen__WEBPACK_IMPORTED_MODULE_0___default()(string);},/**
     * Get the size of the object depending of his type.
     *
     * @param obj
     * @param element
     * @param value
     * @returns int
     */getSize:function getSize(obj,element,value){if(this.hasNumericRules(element)&&this.is_numeric(value)){return parseFloat(value);}else if(this.isArray(value)){return parseFloat(value.length);}else if(element.type==='file'){return parseFloat(Math.floor(this.fileinfo(element).size));}return parseFloat(this.strlen(value));},/**
     * Return specified rule from element.
     *
     * @param rule
     * @param element
     * @returns object
     */getLaravelValidation:function(rule,element){var found=undefined;$.each($.validator.staticRules(element),function(key,rules){if(key==="laravelValidation"){$.each(rules,function(i,value){if(value[0]===rule){found=value;}});}});return found;},/**
     * Return he timestamp of value passed using format or default format in element.
     *
     * @param value
     * @param format
     * @returns {boolean|int}
     */parseTime:function(value,format){var timeValue=false;var fmt=new DateFormatter();if(typeof value==='number'&&typeof format==='undefined'){return value;}if(typeof format==='object'){var dateRule=this.getLaravelValidation('DateFormat',format);if(dateRule!==undefined){format=dateRule[1][0];}else{format=null;}}if(format==null){timeValue=this.strtotime(value);}else{timeValue=fmt.parseDate(value,format);if(timeValue instanceof Date&&fmt.formatDate(timeValue,format)===value){timeValue=Math.round(timeValue.getTime()/1000);}else{timeValue=false;}}return timeValue;},/**
     * Compare a given date against another using an operator.
     *
     * @param validator
     * @param value
     * @param element
     * @param params
     * @param operator
     * @return {boolean}
     */compareDates:function(validator,value,element,params,operator){var timeCompare=this.parseTime(params);if(!timeCompare){var target=this.dependentElement(validator,element,params);if(target===undefined){return false;}timeCompare=this.parseTime(validator.elementValue(target),target);}var timeValue=this.parseTime(value,element);if(timeValue===false){return false;}switch(operator){case'<':return timeValue<timeCompare;case'<=':return timeValue<=timeCompare;case'==':case'===':return timeValue===timeCompare;case'>':return timeValue>timeCompare;case'>=':return timeValue>=timeCompare;default:throw new Error('Unsupported operator.');}},/**
     * This method allows you to intelligently guess the date by closely matching the specific format.
     *
     * @param value
     * @param format
     * @returns {Date}
     */guessDate:function(value,format){var fmt=new DateFormatter();return fmt.guessDate(value,format);},/**
     * Returns Unix timestamp based on PHP function strototime.
     * http://php.net/manual/es/function.strtotime.php
     * http://phpjs.org/functions/strtotime/
     *
     * @param text
     * @param now
     * @returns {*}
     */strtotime:function(text,now){return locutus_php_datetime_strtotime__WEBPACK_IMPORTED_MODULE_2___default()(text,now);},/**
     * Returns if value is numeric.
     * http://php.net/manual/es/var.is_numeric.php
     * http://phpjs.org/functions/is_numeric/
     *
     * @param mixed_var
     * @returns {*}
     */is_numeric:function(mixed_var){return locutus_php_var_is_numeric__WEBPACK_IMPORTED_MODULE_3___default()(mixed_var);},/**
     * Check whether the argument is of type Array.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#Polyfill
     *
     * @param arg
     * @returns {boolean}
     */isArray:function(arg){return Object.prototype.toString.call(arg)==='[object Array]';},/**
     * Returns Array diff based on PHP function array_diff.
     * http://php.net/manual/es/function.array_diff.php
     * http://phpjs.org/functions/array_diff/
     *
     * @param arr1
     * @param arr2
     * @returns {*}
     */arrayDiff:function(arr1,arr2){return locutus_php_array_array_diff__WEBPACK_IMPORTED_MODULE_1___default()(arr1,arr2);},/**
     * Check whether two arrays are equal to one another.
     *
     * @param arr1
     * @param arr2
     * @returns {*}
     */arrayEquals:function(arr1,arr2){if(!this.isArray(arr1)||!this.isArray(arr2)){return false;}if(arr1.length!==arr2.length){return false;}return $.isEmptyObject(this.arrayDiff(arr1,arr2));},/**
     * Makes element dependant from other.
     *
     * @param validator
     * @param element
     * @param name
     * @returns {*}
     */dependentElement:function(validator,element,name){var el=validator.findByName(name);if(el[0]!==undefined&&validator.settings.onfocusout){var event='blur';if(el[0].tagName==='SELECT'||el[0].tagName==='OPTION'||el[0].type==='checkbox'||el[0].type==='radio'){event='click';}var ruleName='.validate-laravelValidation';el.off(ruleName).off(event+ruleName+'-'+element.name).on(event+ruleName+'-'+element.name,function(){$(element).valid();});}return el[0];},/**
     * Parses error Ajax response and gets the message.
     *
     * @param response
     * @returns {string[]}
     */parseErrorResponse:function(response){var newResponse=['Whoops, looks like something went wrong.'];if('responseText'in response){var errorMsg=response.responseText.match(/<h1\s*>(.*)<\/h1\s*>/i);if(this.isArray(errorMsg)){newResponse=[errorMsg[1]];}}return newResponse;},/**
     * Escape string to use as Regular Expression.
     *
     * @param str
     * @returns string
     */escapeRegExp:function(str){return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");},/**
     * Generate RegExp from wildcard attributes.
     *
     * @param name
     * @returns {RegExp}
     */regexFromWildcard:function(name){var nameParts=name.split('[*]');if(nameParts.length===1)nameParts.push('');return new RegExp('^'+nameParts.map(function(x){return laravelValidation.helpers.escapeRegExp(x);}).join('\\[[^\\]]*\\]')+'$');},/**
     * Merge additional laravel validation rules into the current rule set.
     *
     * @param {object} rules
     * @param {object} newRules
     * @returns {object}
     */mergeRules:function(rules,newRules){var rulesList={'laravelValidation':newRules.laravelValidation||[],'laravelValidationRemote':newRules.laravelValidationRemote||[]};for(var key in rulesList){if(rulesList[key].length===0){continue;}if(typeof rules[key]==="undefined"){rules[key]=[];}rules[key]=rules[key].concat(rulesList[key]);}return rules;},/**
     * HTML entity encode a string.
     *
     * @param string
     * @returns {string}
     */encode:function(string){return $('<div/>').text(string).html();},/**
     * Lookup name in an array.
     *
     * @param validator
     * @param {string} name Name in dot notation format.
     * @returns {*}
     */findByArrayName:function(validator,name){var sqName=name.replace(/\.([^\.]+)/g,'[$1]'),lookups=[// Convert dot to square brackets. e.g. foo.bar.0 becomes foo[bar][0]
sqName,// Append [] to the name e.g. foo becomes foo[] or foo.bar.0 becomes foo[bar][0][]
sqName+'[]',// Remove key from last array e.g. foo[bar][0] becomes foo[bar][]
sqName.replace(/(.*)\[(.*)\]$/g,'$1[]')];for(var i=0;i<lookups.length;i++){var elem=validator.findByName(lookups[i]);if(elem.length>0){return elem;}}return $(null);},/**
     * Attempt to find an element in the DOM matching the given name.
     * Example names include:
     *    - domain.0 which matches domain[]
     *    - customfield.3 which matches customfield[3]
     *
     * @param validator
     * @param {string} name
     * @returns {*}
     */findByName:function(validator,name){// Exact match.
var elem=validator.findByName(name);if(elem.length>0){return elem;}// Find name in data, using dot notation.
var delim='.',parts=name.split(delim);for(var i=parts.length;i>0;i--){var reconstructed=[];for(var c=0;c<i;c++){reconstructed.push(parts[c]);}elem=this.findByArrayName(validator,reconstructed.join(delim));if(elem.length>0){return elem;}}return $(null);},/**
     * If it's an array element, get all values.
     *
     * @param validator
     * @param element
     * @returns {*|string}
     */allElementValues:function(validator,element){if(element.name.indexOf('[]')!==-1){return validator.findByName(element.name).map(function(i,e){return validator.elementValue(e);}).get();}return validator.elementValue(element);}}});}();/******/})();/*!
 * Laravel Javascript Validation
 *
 * https://github.com/proengsoft/laravel-jsvalidation
 *
 * Timezone Helper functions used by validators
 *
 * Copyright (c) 2017 Proengsoft
 * Released under the MIT license
 */$.extend(true,laravelValidation,{helpers:{/**
         * Check if the specified timezone is valid.
         *
         * @param value
         * @returns {boolean}
         */isTimezone:function(value){var timezones={"africa":["abidjan","accra","addis_ababa","algiers","asmara","bamako","bangui","banjul","bissau","blantyre","brazzaville","bujumbura","cairo","casablanca","ceuta","conakry","dakar","dar_es_salaam","djibouti","douala","el_aaiun","freetown","gaborone","harare","johannesburg","juba","kampala","khartoum","kigali","kinshasa","lagos","libreville","lome","luanda","lubumbashi","lusaka","malabo","maputo","maseru","mbabane","mogadishu","monrovia","nairobi","ndjamena","niamey","nouakchott","ouagadougou","porto-novo","sao_tome","tripoli","tunis","windhoek"],"america":["adak","anchorage","anguilla","antigua","araguaina","argentina\/buenos_aires","argentina\/catamarca","argentina\/cordoba","argentina\/jujuy","argentina\/la_rioja","argentina\/mendoza","argentina\/rio_gallegos","argentina\/salta","argentina\/san_juan","argentina\/san_luis","argentina\/tucuman","argentina\/ushuaia","aruba","asuncion","atikokan","bahia","bahia_banderas","barbados","belem","belize","blanc-sablon","boa_vista","bogota","boise","cambridge_bay","campo_grande","cancun","caracas","cayenne","cayman","chicago","chihuahua","costa_rica","creston","cuiaba","curacao","danmarkshavn","dawson","dawson_creek","denver","detroit","dominica","edmonton","eirunepe","el_salvador","fortaleza","glace_bay","godthab","goose_bay","grand_turk","grenada","guadeloupe","guatemala","guayaquil","guyana","halifax","havana","hermosillo","indiana\/indianapolis","indiana\/knox","indiana\/marengo","indiana\/petersburg","indiana\/tell_city","indiana\/vevay","indiana\/vincennes","indiana\/winamac","inuvik","iqaluit","jamaica","juneau","kentucky\/louisville","kentucky\/monticello","kralendijk","la_paz","lima","los_angeles","lower_princes","maceio","managua","manaus","marigot","martinique","matamoros","mazatlan","menominee","merida","metlakatla","mexico_city","miquelon","moncton","monterrey","montevideo","montreal","montserrat","nassau","new_york","nipigon","nome","noronha","north_dakota\/beulah","north_dakota\/center","north_dakota\/new_salem","ojinaga","panama","pangnirtung","paramaribo","phoenix","port-au-prince","port_of_spain","porto_velho","puerto_rico","rainy_river","rankin_inlet","recife","regina","resolute","rio_branco","santa_isabel","santarem","santiago","santo_domingo","sao_paulo","scoresbysund","shiprock","sitka","st_barthelemy","st_johns","st_kitts","st_lucia","st_thomas","st_vincent","swift_current","tegucigalpa","thule","thunder_bay","tijuana","toronto","tortola","vancouver","whitehorse","winnipeg","yakutat","yellowknife"],"antarctica":["casey","davis","dumontdurville","macquarie","mawson","mcmurdo","palmer","rothera","south_pole","syowa","vostok"],"arctic":["longyearbyen"],"asia":["aden","almaty","amman","anadyr","aqtau","aqtobe","ashgabat","baghdad","bahrain","baku","bangkok","beirut","bishkek","brunei","choibalsan","chongqing","colombo","damascus","dhaka","dili","dubai","dushanbe","gaza","harbin","hebron","ho_chi_minh","hong_kong","hovd","irkutsk","jakarta","jayapura","jerusalem","kabul","kamchatka","karachi","kashgar","kathmandu","khandyga","kolkata","krasnoyarsk","kuala_lumpur","kuching","kuwait","macau","magadan","makassar","manila","muscat","nicosia","novokuznetsk","novosibirsk","omsk","oral","phnom_penh","pontianak","pyongyang","qatar","qyzylorda","rangoon","riyadh","sakhalin","samarkand","seoul","shanghai","singapore","taipei","tashkent","tbilisi","tehran","thimphu","tokyo","ulaanbaatar","urumqi","ust-nera","vientiane","vladivostok","yakutsk","yekaterinburg","yerevan"],"atlantic":["azores","bermuda","canary","cape_verde","faroe","madeira","reykjavik","south_georgia","st_helena","stanley"],"australia":["adelaide","brisbane","broken_hill","currie","darwin","eucla","hobart","lindeman","lord_howe","melbourne","perth","sydney"],"europe":["amsterdam","andorra","athens","belgrade","berlin","bratislava","brussels","bucharest","budapest","busingen","chisinau","copenhagen","dublin","gibraltar","guernsey","helsinki","isle_of_man","istanbul","jersey","kaliningrad","kiev","lisbon","ljubljana","london","luxembourg","madrid","malta","mariehamn","minsk","monaco","moscow","oslo","paris","podgorica","prague","riga","rome","samara","san_marino","sarajevo","simferopol","skopje","sofia","stockholm","tallinn","tirane","uzhgorod","vaduz","vatican","vienna","vilnius","volgograd","warsaw","zagreb","zaporozhye","zurich"],"indian":["antananarivo","chagos","christmas","cocos","comoro","kerguelen","mahe","maldives","mauritius","mayotte","reunion"],"pacific":["apia","auckland","chatham","chuuk","easter","efate","enderbury","fakaofo","fiji","funafuti","galapagos","gambier","guadalcanal","guam","honolulu","johnston","kiritimati","kosrae","kwajalein","majuro","marquesas","midway","nauru","niue","norfolk","noumea","pago_pago","palau","pitcairn","pohnpei","port_moresby","rarotonga","saipan","tahiti","tarawa","tongatapu","wake","wallis"],"utc":[""]};var tzparts=value.split('/',2);var continent=tzparts[0].toLowerCase();var city='';if(tzparts[1]){city=tzparts[1].toLowerCase();}return continent in timezones&&(timezones[continent].length===0||timezones[continent].indexOf(city)!==-1);}}});/*!
 * Laravel Javascript Validation
 *
 * https://github.com/proengsoft/laravel-jsvalidation
 *
 * Methods that implement Laravel Validations
 *
 * Copyright (c) 2017 Proengsoft
 * Released under the MIT license
 */$.extend(true,laravelValidation,{methods:{helpers:laravelValidation.helpers,jsRemoteTimer:0,/**
         * "Validate" optional attributes.
         * Always returns true, just lets us put sometimes in rules.
         *
         * @return {boolean}
         */Sometimes:function(){return true;},/**
         * Bail This is the default behaivour os JSValidation.
         * Always returns true, just lets us put sometimes in rules.
         *
         * @return {boolean}
         */Bail:function(){return true;},/**
         * "Indicate" validation should pass if value is null.
         * Always returns true, just lets us put "nullable" in rules.
         *
         * @return {boolean}
         */Nullable:function(){return true;},/**
         * Validate the given attribute is filled if it is present.
         */Filled:function(value,element){return $.validator.methods.required.call(this,value,element,true);},/**
         * Validate that a required attribute exists.
         */Required:function(value,element){return $.validator.methods.required.call(this,value,element);},/**
         * Validate that an attribute exists when any other attribute exists.
         *
         * @return {boolean}
         */RequiredWith:function(value,element,params){var validator=this,required=false;var currentObject=this;$.each(params,function(i,param){var target=laravelValidation.helpers.dependentElement(currentObject,element,param);required=required||target!==undefined&&$.validator.methods.required.call(validator,currentObject.elementValue(target),target,true);});if(required){return $.validator.methods.required.call(this,value,element,true);}return true;},/**
         * Validate that an attribute exists when all other attribute exists.
         *
         * @return {boolean}
         */RequiredWithAll:function(value,element,params){var validator=this,required=true;var currentObject=this;$.each(params,function(i,param){var target=laravelValidation.helpers.dependentElement(currentObject,element,param);required=required&&target!==undefined&&$.validator.methods.required.call(validator,currentObject.elementValue(target),target,true);});if(required){return $.validator.methods.required.call(this,value,element,true);}return true;},/**
         * Validate that an attribute exists when any other attribute does not exists.
         *
         * @return {boolean}
         */RequiredWithout:function(value,element,params){var validator=this,required=false;var currentObject=this;$.each(params,function(i,param){var target=laravelValidation.helpers.dependentElement(currentObject,element,param);required=required||target===undefined||!$.validator.methods.required.call(validator,currentObject.elementValue(target),target,true);});if(required){return $.validator.methods.required.call(this,value,element,true);}return true;},/**
         * Validate that an attribute exists when all other attribute does not exists.
         *
         * @return {boolean}
         */RequiredWithoutAll:function(value,element,params){var validator=this,required=true,currentObject=this;$.each(params,function(i,param){var target=laravelValidation.helpers.dependentElement(currentObject,element,param);required=required&&(target===undefined||!$.validator.methods.required.call(validator,currentObject.elementValue(target),target,true));});if(required){return $.validator.methods.required.call(this,value,element,true);}return true;},/**
         * Validate that an attribute exists when another attribute has a given value.
         *
         * @return {boolean}
         */RequiredIf:function(value,element,params){var target=laravelValidation.helpers.dependentElement(this,element,params[0]);if(target!==undefined){var val=String(this.elementValue(target));if(typeof val!=='undefined'){var data=params.slice(1);if($.inArray(val,data)!==-1){return $.validator.methods.required.call(this,value,element,true);}}}return true;},/**
         * Validate that an attribute exists when another
         * attribute does not have a given value.
         *
         * @return {boolean}
         */RequiredUnless:function(value,element,params){var target=laravelValidation.helpers.dependentElement(this,element,params[0]);if(target!==undefined){var val=String(this.elementValue(target));if(typeof val!=='undefined'){var data=params.slice(1);if($.inArray(val,data)!==-1){return true;}}}return $.validator.methods.required.call(this,value,element,true);},/**
         * Validate that an attribute has a matching confirmation.
         *
         * @return {boolean}
         */Confirmed:function(value,element,params){return laravelValidation.methods.Same.call(this,value,element,params);},/**
         * Validate that two attributes match.
         *
         * @return {boolean}
         */Same:function(value,element,params){var target=laravelValidation.helpers.dependentElement(this,element,params[0]);if(target!==undefined){return String(value)===String(this.elementValue(target));}return false;},/**
         * Validate that the values of an attribute is in another attribute.
         *
         * @param value
         * @param element
         * @param params
         * @returns {boolean}
         * @constructor
         */InArray:function(value,element,params){if(typeof params[0]==='undefined'){return false;}var elements=this.elements();var found=false;var nameRegExp=laravelValidation.helpers.regexFromWildcard(params[0]);for(var i=0;i<elements.length;i++){var targetName=elements[i].name;if(targetName.match(nameRegExp)){var equals=laravelValidation.methods.Same.call(this,value,element,[targetName]);found=found||equals;}}return found;},/**
         * Validate an attribute is unique among other values.
         *
         * @param value
         * @param element
         * @param params
         * @returns {boolean}
         */Distinct:function(value,element,params){if(typeof params[0]==='undefined'){return false;}var elements=this.elements();var found=false;var nameRegExp=laravelValidation.helpers.regexFromWildcard(params[0]);for(var i=0;i<elements.length;i++){var targetName=elements[i].name;if(targetName!==element.name&&targetName.match(nameRegExp)){var equals=laravelValidation.methods.Same.call(this,value,element,[targetName]);found=found||equals;}}return!found;},/**
         * Validate that an attribute is different from another attribute.
         *
         * @return {boolean}
         */Different:function(value,element,params){return!laravelValidation.methods.Same.call(this,value,element,params);},/**
         * Validate that an attribute was "accepted".
         * This validation rule implies the attribute is "required".
         *
         * @return {boolean}
         */Accepted:function(value){var regex=new RegExp("^(?:(yes|on|1|true))$",'i');return regex.test(value);},/**
         * Validate that an attribute is an array.
         *
         * @param value
         * @param element
         */Array:function(value,element){if(element.name.indexOf('[')!==-1&&element.name.indexOf(']')!==-1){return true;}return laravelValidation.helpers.isArray(value);},/**
         * Validate that an attribute is a boolean.
         *
         * @return {boolean}
         */Boolean:function(value){var regex=new RegExp("^(?:(true|false|1|0))$",'i');return regex.test(value);},/**
         * Validate that an attribute is an integer.
         *
         * @return {boolean}
         */Integer:function(value){var regex=new RegExp("^(?:-?\\d+)$",'i');return regex.test(value);},/**
         * Validate that an attribute is numeric.
         */Numeric:function(value,element){return $.validator.methods.number.call(this,value,element,true);},/**
         * Validate that an attribute is a string.
         *
         * @return {boolean}
         */String:function(value){return typeof value==='string';},/**
         * The field under validation must be numeric and must have an exact length of value.
         */Digits:function(value,element,params){return $.validator.methods.number.call(this,value,element,true)&&value.length===parseInt(params,10);},/**
         * The field under validation must have a length between the given min and max.
         */DigitsBetween:function(value,element,params){return $.validator.methods.number.call(this,value,element,true)&&value.length>=parseFloat(params[0])&&value.length<=parseFloat(params[1]);},/**
         * Validate the size of an attribute.
         *
         * @return {boolean}
         */Size:function(value,element,params){return laravelValidation.helpers.getSize(this,element,value)===parseFloat(params[0]);},/**
         * Validate the size of an attribute is between a set of values.
         *
         * @return {boolean}
         */Between:function(value,element,params){return laravelValidation.helpers.getSize(this,element,value)>=parseFloat(params[0])&&laravelValidation.helpers.getSize(this,element,value)<=parseFloat(params[1]);},/**
         * Validate the size of an attribute is greater than a minimum value.
         *
         * @return {boolean}
         */Min:function(value,element,params){value=laravelValidation.helpers.allElementValues(this,element);return laravelValidation.helpers.getSize(this,element,value)>=parseFloat(params[0]);},/**
         * Validate the size of an attribute is less than a maximum value.
         *
         * @return {boolean}
         */Max:function(value,element,params){value=laravelValidation.helpers.allElementValues(this,element);return laravelValidation.helpers.getSize(this,element,value)<=parseFloat(params[0]);},/**
         * Validate an attribute is contained within a list of values.
         *
         * @return {boolean}
         */In:function(value,element,params){if(laravelValidation.helpers.isArray(value)&&laravelValidation.helpers.hasRules(element,"Array")){var diff=laravelValidation.helpers.arrayDiff(value,params);return Object.keys(diff).length===0;}return params.indexOf(value.toString())!==-1;},/**
         * Validate an attribute is not contained within a list of values.
         *
         * @return {boolean}
         */NotIn:function(value,element,params){return params.indexOf(value.toString())===-1;},/**
         * Validate that an attribute is a valid IP.
         *
         * @return {boolean}
         */Ip:function(value){return /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(value)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(value);},/**
         * Validate that an attribute is a valid e-mail address.
         */Email:function(value,element){return $.validator.methods.email.call(this,value,element,true);},/**
         * Validate that an attribute is a valid URL.
         */Url:function(value,element){return $.validator.methods.url.call(this,value,element,true);},/**
         * The field under validation must be a successfully uploaded file.
         *
         * @return {boolean}
         */File:function(value,element){if(!window.File||!window.FileReader||!window.FileList||!window.Blob){return true;}if('files'in element){return element.files.length>0;}return false;},/**
         * Validate the MIME type of a file upload attribute is in a set of MIME types.
         *
         * @return {boolean}
         */Mimes:function(value,element,params){if(!window.File||!window.FileReader||!window.FileList||!window.Blob){return true;}var lowerParams=$.map(params,function(item){return item.toLowerCase();});var fileinfo=laravelValidation.helpers.fileinfo(element);return fileinfo!==false&&lowerParams.indexOf(fileinfo.extension.toLowerCase())!==-1;},/**
         * The file under validation must match one of the given MIME types.
         *
         * @return {boolean}
         */Mimetypes:function(value,element,params){if(!window.File||!window.FileReader||!window.FileList||!window.Blob){return true;}var lowerParams=$.map(params,function(item){return item.toLowerCase();});var fileinfo=laravelValidation.helpers.fileinfo(element);if(fileinfo===false){return false;}return lowerParams.indexOf(fileinfo.type.toLowerCase())!==-1;},/**
         * Validate the MIME type of a file upload attribute is in a set of MIME types.
         */Image:function(value,element){return laravelValidation.methods.Mimes.call(this,value,element,['jpg','png','gif','bmp','svg','jpeg']);},/**
         * Validate dimensions of Image.
         *
         * @return {boolean|string}
         */Dimensions:function(value,element,params,callback){if(!window.File||!window.FileReader||!window.FileList||!window.Blob){return true;}if(element.files===null||typeof element.files[0]==='undefined'){return false;}var fr=new FileReader();fr.onload=function(){var img=new Image();img.onload=function(){var height=parseFloat(img.naturalHeight);var width=parseFloat(img.naturalWidth);var ratio=width/height;var notValid=params['width']&&parseFloat(params['width']!==width)||params['min_width']&&parseFloat(params['min_width'])>width||params['max_width']&&parseFloat(params['max_width'])<width||params['height']&&parseFloat(params['height'])!==height||params['min_height']&&parseFloat(params['min_height'])>height||params['max_height']&&parseFloat(params['max_height'])<height||params['ratio']&&ratio!==parseFloat(eval(params['ratio']));callback(!notValid);};img.onerror=function(){callback(false);};img.src=fr.result;};fr.readAsDataURL(element.files[0]);return'pending';},/**
         * Validate that an attribute contains only alphabetic characters.
         *
         * @return {boolean}
         */Alpha:function(value){if(typeof value!=='string'){return false;}var regex=new RegExp("^(?:^[a-z\u00E0-\u00FC]+$)$",'i');return regex.test(value);},/**
         * Validate that an attribute contains only alpha-numeric characters.
         *
         * @return {boolean}
         */AlphaNum:function(value){if(typeof value!=='string'){return false;}var regex=new RegExp("^(?:^[a-z0-9\u00E0-\u00FC]+$)$",'i');return regex.test(value);},/**
         * Validate that an attribute contains only alphabetic characters.
         *
         * @return {boolean}
         */AlphaDash:function(value){if(typeof value!=='string'){return false;}var regex=new RegExp("^(?:^[a-z0-9\u00E0-\u00FC_-]+$)$",'i');return regex.test(value);},/**
         * Validate that an attribute passes a regular expression check.
         *
         * @return {boolean}
         */Regex:function(value,element,params){var invalidModifiers=['x','s','u','X','U','A'];// Converting php regular expression
var phpReg=new RegExp('^(?:\/)(.*\\\/?[^\/]*|[^\/]*)(?:\/)([gmixXsuUAJ]*)?$');var matches=params[0].match(phpReg);if(matches===null){return false;}// checking modifiers
var php_modifiers=[];if(matches[2]!==undefined){php_modifiers=matches[2].split('');for(var i=0;i<php_modifiers.length<i;i++){if(invalidModifiers.indexOf(php_modifiers[i])!==-1){return true;}}}var regex=new RegExp("^(?:"+matches[1]+")$",php_modifiers.join());return regex.test(value);},/**
         * Validate that an attribute is a valid date.
         *
         * @return {boolean}
         */Date:function(value){return laravelValidation.helpers.strtotime(value)!==false;},/**
         * Validate that an attribute matches a date format.
         *
         * @return {boolean}
         */DateFormat:function(value,element,params){return laravelValidation.helpers.parseTime(value,params[0])!==false;},/**
         * Validate the date is before a given date.
         *
         * @return {boolean}
         */Before:function(value,element,params){return laravelValidation.helpers.compareDates(this,value,element,params[0],'<');},/**
         * Validate the date is equal or before a given date.
         *
         * @return {boolean}
         */BeforeOrEqual:function(value,element,params){return laravelValidation.helpers.compareDates(this,value,element,params[0],'<=');},/**
         * Validate the date is after a given date.
         *
         * @return {boolean}
         */After:function(value,element,params){return laravelValidation.helpers.compareDates(this,value,element,params[0],'>');},/**
         * Validate the date is equal or after a given date.
         *
         * @return {boolean}
         */AfterOrEqual:function(value,element,params){return laravelValidation.helpers.compareDates(this,value,element,params[0],'>=');},/**
         * Validate that an attribute is a valid date.
         */Timezone:function(value){return laravelValidation.helpers.isTimezone(value);},/**
         * Validate the attribute is a valid JSON string.
         *
         * @param  value
         * @return bool
         */Json:function(value){var result=true;try{JSON.parse(value);}catch(e){result=false;}return result;},/**
         * Noop (always returns true).
         *
         * @param value
         * @returns {boolean}
         */ProengsoftNoop:function(value){return true;}}});//# sourceMappingURL=jsvalidation.js.map
if(document.body.hasAttribute('data-disable-pace')){paceOptions={ajax:false,startOnPageLoad:false};}(function(){var AjaxMonitor,Bar,DocumentMonitor,ElementMonitor,ElementTracker,EventLagMonitor,Evented,Events,NoTargetError,Pace,RequestIntercept,SOURCE_KEYS,Scaler,SocketRequestTracker,XHRRequestTracker,animation,avgAmplitude,bar,cancelAnimation,cancelAnimationFrame,defaultOptions,extend,extendNative,getFromDOM,getIntercept,handlePushState,ignoreStack,init,now,options,requestAnimationFrame,result,runAnimation,scalers,shouldIgnoreURL,shouldTrack,source,sources,uniScaler,_WebSocket,_XDomainRequest,_XMLHttpRequest,_i,_intercept,_len,_pushState,_ref,_ref1,_replaceState,__slice=[].slice,__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;};defaultOptions={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:true,restartOnPushState:true,restartOnRequestAfter:500,target:'body',elements:{checkInterval:100,selectors:['body']},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:['GET'],trackWebSockets:true,ignoreURLs:[]}};now=function(){var _ref;return(_ref=typeof performance!=="undefined"&&performance!==null?typeof performance.now==="function"?performance.now():void 0:void 0)!=null?_ref:+new Date();};requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame;if(requestAnimationFrame==null){requestAnimationFrame=function(fn){return setTimeout(fn,50);};cancelAnimationFrame=function(id){return clearTimeout(id);};}runAnimation=function(fn){var last,tick;last=now();tick=function(){var diff;diff=now()-last;if(diff>=33){last=now();return fn(diff,function(){return requestAnimationFrame(tick);});}else{return setTimeout(tick,33-diff);}};return tick();};result=function(){var args,key,obj;obj=arguments[0],key=arguments[1],args=3<=arguments.length?__slice.call(arguments,2):[];if(typeof obj[key]==='function'){return obj[key].apply(obj,args);}else{return obj[key];}};extend=function(){var key,out,source,sources,val,_i,_len;out=arguments[0],sources=2<=arguments.length?__slice.call(arguments,1):[];for(_i=0,_len=sources.length;_i<_len;_i++){source=sources[_i];if(source){for(key in source){if(!__hasProp.call(source,key))continue;val=source[key];if(out[key]!=null&&typeof out[key]==='object'&&val!=null&&typeof val==='object'){extend(out[key],val);}else{out[key]=val;}}}}return out;};avgAmplitude=function(arr){var count,sum,v,_i,_len;sum=count=0;for(_i=0,_len=arr.length;_i<_len;_i++){v=arr[_i];sum+=Math.abs(v);count++;}return sum/count;};getFromDOM=function(key,json){var data,e,el;if(key==null){key='options';}if(json==null){json=true;}el=document.querySelector("[data-pace-"+key+"]");if(!el){return;}data=el.getAttribute("data-pace-"+key);if(!json){return data;}try{return JSON.parse(data);}catch(_error){e=_error;return typeof console!=="undefined"&&console!==null?void 0:void 0;}};Evented=function(){function Evented(){}Evented.prototype.on=function(event,handler,ctx,once){var _base;if(once==null){once=false;}if(this.bindings==null){this.bindings={};}if((_base=this.bindings)[event]==null){_base[event]=[];}return this.bindings[event].push({handler:handler,ctx:ctx,once:once});};Evented.prototype.once=function(event,handler,ctx){return this.on(event,handler,ctx,true);};Evented.prototype.off=function(event,handler){var i,_ref,_results;if(((_ref=this.bindings)!=null?_ref[event]:void 0)==null){return;}if(handler==null){return delete this.bindings[event];}else{i=0;_results=[];while(i<this.bindings[event].length){if(this.bindings[event][i].handler===handler){_results.push(this.bindings[event].splice(i,1));}else{_results.push(i++);}}return _results;}};Evented.prototype.trigger=function(){var args,ctx,event,handler,i,once,_ref,_ref1,_results;event=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];if((_ref=this.bindings)!=null?_ref[event]:void 0){i=0;_results=[];while(i<this.bindings[event].length){_ref1=this.bindings[event][i],handler=_ref1.handler,ctx=_ref1.ctx,once=_ref1.once;handler.apply(ctx!=null?ctx:this,args);if(once){_results.push(this.bindings[event].splice(i,1));}else{_results.push(i++);}}return _results;}};return Evented;}();Pace=window.Pace||{};window.Pace=Pace;extend(Pace,Evented.prototype);options=Pace.options=extend({},defaultOptions,window.paceOptions,getFromDOM());_ref=['ajax','document','eventLag','elements'];for(_i=0,_len=_ref.length;_i<_len;_i++){source=_ref[_i];if(options[source]===true){options[source]=defaultOptions[source];}}NoTargetError=function(_super){__extends(NoTargetError,_super);function NoTargetError(){_ref1=NoTargetError.__super__.constructor.apply(this,arguments);return _ref1;}return NoTargetError;}(Error);Bar=function(){function Bar(){this.progress=0;}Bar.prototype.getElement=function(){var targetElement;if(this.el==null){targetElement=document.querySelector(options.target);if(!targetElement){throw new NoTargetError();}this.el=document.createElement('div');this.el.className="pace pace-active";document.body.className=document.body.className.replace(/pace-done/g,'');document.body.className+=' pace-running';this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';if(targetElement.firstChild!=null){targetElement.insertBefore(this.el,targetElement.firstChild);}else{targetElement.appendChild(this.el);}}return this.el;};Bar.prototype.finish=function(){var el;el=this.getElement();el.className=el.className.replace('pace-active','');el.className+=' pace-inactive';document.body.className=document.body.className.replace('pace-running','');return document.body.className+=' pace-done';};Bar.prototype.update=function(prog){this.progress=prog;return this.render();};Bar.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement());}catch(_error){NoTargetError=_error;}return this.el=void 0;};Bar.prototype.render=function(){var el,key,progressStr,transform,_j,_len1,_ref2;if(document.querySelector(options.target)==null){return false;}el=this.getElement();transform="translate3d("+this.progress+"%, 0, 0)";_ref2=['webkitTransform','msTransform','transform'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){key=_ref2[_j];el.children[0].style[key]=transform;}if(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0){el.children[0].setAttribute('data-progress-text',""+(this.progress|0)+"%");if(this.progress>=100){progressStr='99';}else{progressStr=this.progress<10?"0":"";progressStr+=this.progress|0;}el.children[0].setAttribute('data-progress',""+progressStr);}return this.lastRenderedProgress=this.progress;};Bar.prototype.done=function(){return this.progress>=100;};return Bar;}();Events=function(){function Events(){this.bindings={};}Events.prototype.trigger=function(name,val){var binding,_j,_len1,_ref2,_results;if(this.bindings[name]!=null){_ref2=this.bindings[name];_results=[];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){binding=_ref2[_j];_results.push(binding.call(this,val));}return _results;}};Events.prototype.on=function(name,fn){var _base;if((_base=this.bindings)[name]==null){_base[name]=[];}return this.bindings[name].push(fn);};return Events;}();_XMLHttpRequest=window.XMLHttpRequest;_XDomainRequest=window.XDomainRequest;_WebSocket=window.WebSocket;extendNative=function(to,from){var e,key,_results;_results=[];for(key in from.prototype){try{if(to[key]==null&&typeof from[key]!=='function'){if(typeof Object.defineProperty==='function'){_results.push(Object.defineProperty(to,key,{get:function(){return from.prototype[key];},configurable:true,enumerable:true}));}else{_results.push(to[key]=from.prototype[key]);}}else{_results.push(void 0);}}catch(_error){e=_error;}}return _results;};ignoreStack=[];Pace.ignore=function(){var args,fn,ret;fn=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];ignoreStack.unshift('ignore');ret=fn.apply(null,args);ignoreStack.shift();return ret;};Pace.track=function(){var args,fn,ret;fn=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];ignoreStack.unshift('track');ret=fn.apply(null,args);ignoreStack.shift();return ret;};shouldTrack=function(method){var _ref2;if(method==null){method='GET';}if(ignoreStack[0]==='track'){return'force';}if(!ignoreStack.length&&options.ajax){if(method==='socket'&&options.ajax.trackWebSockets){return true;}else if(_ref2=method.toUpperCase(),__indexOf.call(options.ajax.trackMethods,_ref2)>=0){return true;}}return false;};RequestIntercept=function(_super){__extends(RequestIntercept,_super);function RequestIntercept(){var monitorXHR,_this=this;RequestIntercept.__super__.constructor.apply(this,arguments);monitorXHR=function(req){var _open;_open=req.open;return req.open=function(type,url,async){if(shouldTrack(type)){_this.trigger('request',{type:type,url:url,request:req});}return _open.apply(req,arguments);};};window.XMLHttpRequest=function(flags){var req;req=new _XMLHttpRequest(flags);monitorXHR(req);return req;};try{extendNative(window.XMLHttpRequest,_XMLHttpRequest);}catch(_error){}if(_XDomainRequest!=null){window.XDomainRequest=function(){var req;req=new _XDomainRequest();monitorXHR(req);return req;};try{extendNative(window.XDomainRequest,_XDomainRequest);}catch(_error){}}if(_WebSocket!=null&&options.ajax.trackWebSockets){window.WebSocket=function(url,protocols){var req;if(protocols!=null){req=new _WebSocket(url,protocols);}else{req=new _WebSocket(url);}if(shouldTrack('socket')){_this.trigger('request',{type:'socket',url:url,protocols:protocols,request:req});}return req;};try{extendNative(window.WebSocket,_WebSocket);}catch(_error){}}}return RequestIntercept;}(Events);_intercept=null;getIntercept=function(){if(_intercept==null){_intercept=new RequestIntercept();}return _intercept;};shouldIgnoreURL=function(url){var pattern,_j,_len1,_ref2;_ref2=options.ajax.ignoreURLs;for(_j=0,_len1=_ref2.length;_j<_len1;_j++){pattern=_ref2[_j];if(typeof pattern==='string'){if(url.indexOf(pattern)!==-1){return true;}}else{if(pattern.test(url)){return true;}}}return false;};getIntercept().on('request',function(_arg){var after,args,request,type,url;type=_arg.type,request=_arg.request,url=_arg.url;if(shouldIgnoreURL(url)){return;}if(!Pace.running&&(options.restartOnRequestAfter!==false||shouldTrack(type)==='force')){args=arguments;after=options.restartOnRequestAfter||0;if(typeof after==='boolean'){after=0;}return setTimeout(function(){var stillActive,_j,_len1,_ref2,_ref3,_results;if(type==='socket'){stillActive=request.readyState<2;}else{stillActive=0<(_ref2=request.readyState)&&_ref2<4;}if(stillActive){Pace.restart();_ref3=Pace.sources;_results=[];for(_j=0,_len1=_ref3.length;_j<_len1;_j++){source=_ref3[_j];if(source instanceof AjaxMonitor){source.watch.apply(source,args);break;}else{_results.push(void 0);}}return _results;}},after);}});AjaxMonitor=function(){function AjaxMonitor(){var _this=this;this.elements=[];getIntercept().on('request',function(){return _this.watch.apply(_this,arguments);});}AjaxMonitor.prototype.watch=function(_arg){var request,tracker,type,url;type=_arg.type,request=_arg.request,url=_arg.url;if(shouldIgnoreURL(url)){return;}if(type==='socket'){tracker=new SocketRequestTracker(request);}else{tracker=new XHRRequestTracker(request);}return this.elements.push(tracker);};return AjaxMonitor;}();XHRRequestTracker=function(){function XHRRequestTracker(request){var event,size,_j,_len1,_onreadystatechange,_ref2,_this=this;this.progress=0;if(window.ProgressEvent!=null){size=null;request.addEventListener('progress',function(evt){if(evt.lengthComputable){return _this.progress=100*evt.loaded/evt.total;}else{return _this.progress=_this.progress+(100-_this.progress)/2;}},false);_ref2=['load','abort','timeout','error'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){event=_ref2[_j];request.addEventListener(event,function(){return _this.progress=100;},false);}}else{_onreadystatechange=request.onreadystatechange;request.onreadystatechange=function(){var _ref3;if((_ref3=request.readyState)===0||_ref3===4){_this.progress=100;}else if(request.readyState===3){_this.progress=50;}return typeof _onreadystatechange==="function"?_onreadystatechange.apply(null,arguments):void 0;};}}return XHRRequestTracker;}();SocketRequestTracker=function(){function SocketRequestTracker(request){var event,_j,_len1,_ref2,_this=this;this.progress=0;_ref2=['error','open'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){event=_ref2[_j];request.addEventListener(event,function(){return _this.progress=100;},false);}}return SocketRequestTracker;}();ElementMonitor=function(){function ElementMonitor(options){var selector,_j,_len1,_ref2;if(options==null){options={};}this.elements=[];if(options.selectors==null){options.selectors=[];}_ref2=options.selectors;for(_j=0,_len1=_ref2.length;_j<_len1;_j++){selector=_ref2[_j];this.elements.push(new ElementTracker(selector));}}return ElementMonitor;}();ElementTracker=function(){function ElementTracker(selector){this.selector=selector;this.progress=0;this.check();}ElementTracker.prototype.check=function(){var _this=this;if(document.querySelector(this.selector)){return this.done();}else{return setTimeout(function(){return _this.check();},options.elements.checkInterval);}};ElementTracker.prototype.done=function(){return this.progress=100;};return ElementTracker;}();DocumentMonitor=function(){DocumentMonitor.prototype.states={loading:0,interactive:50,complete:100};function DocumentMonitor(){var _onreadystatechange,_ref2,_this=this;this.progress=(_ref2=this.states[document.readyState])!=null?_ref2:100;_onreadystatechange=document.onreadystatechange;document.onreadystatechange=function(){if(_this.states[document.readyState]!=null){_this.progress=_this.states[document.readyState];}return typeof _onreadystatechange==="function"?_onreadystatechange.apply(null,arguments):void 0;};}return DocumentMonitor;}();EventLagMonitor=function(){function EventLagMonitor(){var avg,interval,last,points,samples,_this=this;this.progress=0;avg=0;samples=[];points=0;last=now();interval=setInterval(function(){var diff;diff=now()-last-50;last=now();samples.push(diff);if(samples.length>options.eventLag.sampleCount){samples.shift();}avg=avgAmplitude(samples);if(++points>=options.eventLag.minSamples&&avg<options.eventLag.lagThreshold){_this.progress=100;return clearInterval(interval);}else{return _this.progress=100*(3/(avg+3));}},50);}return EventLagMonitor;}();Scaler=function(){function Scaler(source){this.source=source;this.last=this.sinceLastUpdate=0;this.rate=options.initialRate;this.catchup=0;this.progress=this.lastProgress=0;if(this.source!=null){this.progress=result(this.source,'progress');}}Scaler.prototype.tick=function(frameTime,val){var scaling;if(val==null){val=result(this.source,'progress');}if(val>=100){this.done=true;}if(val===this.last){this.sinceLastUpdate+=frameTime;}else{if(this.sinceLastUpdate){this.rate=(val-this.last)/this.sinceLastUpdate;}this.catchup=(val-this.progress)/options.catchupTime;this.sinceLastUpdate=0;this.last=val;}if(val>this.progress){this.progress+=this.catchup*frameTime;}scaling=1-Math.pow(this.progress/100,options.easeFactor);this.progress+=scaling*this.rate*frameTime;this.progress=Math.min(this.lastProgress+options.maxProgressPerFrame,this.progress);this.progress=Math.max(0,this.progress);this.progress=Math.min(100,this.progress);this.lastProgress=this.progress;return this.progress;};return Scaler;}();sources=null;scalers=null;bar=null;uniScaler=null;animation=null;cancelAnimation=null;Pace.running=false;handlePushState=function(){if(options.restartOnPushState){return Pace.restart();}};if(window.history.pushState!=null){_pushState=window.history.pushState;window.history.pushState=function(){handlePushState();return _pushState.apply(window.history,arguments);};}if(window.history.replaceState!=null){_replaceState=window.history.replaceState;window.history.replaceState=function(){handlePushState();return _replaceState.apply(window.history,arguments);};}SOURCE_KEYS={ajax:AjaxMonitor,elements:ElementMonitor,document:DocumentMonitor,eventLag:EventLagMonitor};(init=function(){var type,_j,_k,_len1,_len2,_ref2,_ref3,_ref4;Pace.sources=sources=[];_ref2=['ajax','elements','document','eventLag'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){type=_ref2[_j];if(options[type]!==false){sources.push(new SOURCE_KEYS[type](options[type]));}}_ref4=(_ref3=options.extraSources)!=null?_ref3:[];for(_k=0,_len2=_ref4.length;_k<_len2;_k++){source=_ref4[_k];sources.push(new source(options));}Pace.bar=bar=new Bar();scalers=[];return uniScaler=new Scaler();})();Pace.stop=function(){Pace.trigger('stop');Pace.running=false;bar.destroy();cancelAnimation=true;if(animation!=null){if(typeof cancelAnimationFrame==="function"){cancelAnimationFrame(animation);}animation=null;}return init();};Pace.restart=function(){Pace.trigger('restart');Pace.stop();return Pace.start();};Pace.go=function(){var start;Pace.running=true;bar.render();start=now();cancelAnimation=false;return animation=runAnimation(function(frameTime,enqueueNextFrame){var avg,count,done,element,elements,i,j,remaining,scaler,scalerList,sum,_j,_k,_len1,_len2,_ref2;remaining=100-bar.progress;count=sum=0;done=true;for(i=_j=0,_len1=sources.length;_j<_len1;i=++_j){source=sources[i];scalerList=scalers[i]!=null?scalers[i]:scalers[i]=[];elements=(_ref2=source.elements)!=null?_ref2:[source];for(j=_k=0,_len2=elements.length;_k<_len2;j=++_k){element=elements[j];scaler=scalerList[j]!=null?scalerList[j]:scalerList[j]=new Scaler(element);done&=scaler.done;if(scaler.done){continue;}count++;sum+=scaler.tick(frameTime);}}avg=sum/count;bar.update(uniScaler.tick(frameTime,avg));if(bar.done()||done||cancelAnimation){bar.update(100);Pace.trigger('done');return setTimeout(function(){bar.finish();Pace.running=false;return Pace.trigger('hide');},Math.max(options.ghostTime,Math.max(options.minTime-(now()-start),0)));}else{return enqueueNextFrame();}});};Pace.start=function(_options){extend(options,_options);Pace.running=true;try{bar.render();}catch(_error){NoTargetError=_error;}if(!document.querySelector('.pace')){return setTimeout(Pace.start,50);}else{Pace.trigger('start');return Pace.go();}};if(typeof define==='function'&&define.amd){define(['pace'],function(){return Pace;});}else if(typeof exports==='object'){module.exports=Pace;}else{if(options.startOnPageLoad){Pace.start();}}}).call(this);/**
 * sifter.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */(function(root,factory){if(typeof define==='function'&&define.amd){define('sifter',factory);}else if(typeof exports==='object'){module.exports=factory();}else{root.Sifter=factory();}})(this,function(){/**
	 * Textually searches arrays and hashes of objects
	 * by property (or multiple properties). Designed
	 * specifically for autocomplete.
	 *
	 * @constructor
	 * @param {array|object} items
	 * @param {object} items
	 */var Sifter=function(items,settings){this.items=items;this.settings=settings||{diacritics:true};};/**
	 * Splits a search string into an array of individual
	 * regexps to be used to match results.
	 *
	 * @param {string} query
	 * @returns {array}
	 */Sifter.prototype.tokenize=function(query){query=trim(String(query||'').toLowerCase());if(!query||!query.length)return[];var i,n,regex,letter;var tokens=[];var words=query.split(/ +/);for(i=0,n=words.length;i<n;i++){regex=escape_regex(words[i]);if(this.settings.diacritics){for(letter in DIACRITICS){if(DIACRITICS.hasOwnProperty(letter)){regex=regex.replace(new RegExp(letter,'g'),DIACRITICS[letter]);}}}tokens.push({string:words[i],regex:new RegExp(regex,'i')});}return tokens;};/**
	 * Iterates over arrays and hashes.
	 *
	 * ```
	 * this.iterator(this.items, function(item, id) {
	 *    // invoked for each item
	 * });
	 * ```
	 *
	 * @param {array|object} object
	 */Sifter.prototype.iterator=function(object,callback){var iterator;if(is_array(object)){iterator=Array.prototype.forEach||function(callback){for(var i=0,n=this.length;i<n;i++){callback(this[i],i,this);}};}else{iterator=function(callback){for(var key in this){if(this.hasOwnProperty(key)){callback(this[key],key,this);}}};}iterator.apply(object,[callback]);};/**
	 * Returns a function to be used to score individual results.
	 *
	 * Good matches will have a higher score than poor matches.
	 * If an item is not a match, 0 will be returned by the function.
	 *
	 * @param {object|string} search
	 * @param {object} options (optional)
	 * @returns {function}
	 */Sifter.prototype.getScoreFunction=function(search,options){var self,fields,tokens,token_count,nesting;self=this;search=self.prepareSearch(search,options);tokens=search.tokens;fields=search.options.fields;token_count=tokens.length;nesting=search.options.nesting;/**
		 * Calculates how close of a match the
		 * given value is against a search token.
		 *
		 * @param {mixed} value
		 * @param {object} token
		 * @return {number}
		 */var scoreValue=function(value,token){var score,pos;if(!value)return 0;value=String(value||'');pos=value.search(token.regex);if(pos===-1)return 0;score=token.string.length/value.length;if(pos===0)score+=0.5;return score;};/**
		 * Calculates the score of an object
		 * against the search query.
		 *
		 * @param {object} token
		 * @param {object} data
		 * @return {number}
		 */var scoreObject=function(){var field_count=fields.length;if(!field_count){return function(){return 0;};}if(field_count===1){return function(token,data){return scoreValue(getattr(data,fields[0],nesting),token);};}return function(token,data){for(var i=0,sum=0;i<field_count;i++){sum+=scoreValue(getattr(data,fields[i],nesting),token);}return sum/field_count;};}();if(!token_count){return function(){return 0;};}if(token_count===1){return function(data){return scoreObject(tokens[0],data);};}if(search.options.conjunction==='and'){return function(data){var score;for(var i=0,sum=0;i<token_count;i++){score=scoreObject(tokens[i],data);if(score<=0)return 0;sum+=score;}return sum/token_count;};}else{return function(data){for(var i=0,sum=0;i<token_count;i++){sum+=scoreObject(tokens[i],data);}return sum/token_count;};}};/**
	 * Returns a function that can be used to compare two
	 * results, for sorting purposes. If no sorting should
	 * be performed, `null` will be returned.
	 *
	 * @param {string|object} search
	 * @param {object} options
	 * @return function(a,b)
	 */Sifter.prototype.getSortFunction=function(search,options){var i,n,self,field,fields,fields_count,multiplier,multipliers,get_field,implicit_score,sort;self=this;search=self.prepareSearch(search,options);sort=!search.query&&options.sort_empty||options.sort;/**
		 * Fetches the specified sort field value
		 * from a search result item.
		 *
		 * @param  {string} name
		 * @param  {object} result
		 * @return {mixed}
		 */get_field=function(name,result){if(name==='$score')return result.score;return getattr(self.items[result.id],name,options.nesting);};// parse options
fields=[];if(sort){for(i=0,n=sort.length;i<n;i++){if(search.query||sort[i].field!=='$score'){fields.push(sort[i]);}}}// the "$score" field is implied to be the primary
// sort field, unless it's manually specified
if(search.query){implicit_score=true;for(i=0,n=fields.length;i<n;i++){if(fields[i].field==='$score'){implicit_score=false;break;}}if(implicit_score){fields.unshift({field:'$score',direction:'desc'});}}else{for(i=0,n=fields.length;i<n;i++){if(fields[i].field==='$score'){fields.splice(i,1);break;}}}multipliers=[];for(i=0,n=fields.length;i<n;i++){multipliers.push(fields[i].direction==='desc'?-1:1);}// build function
fields_count=fields.length;if(!fields_count){return null;}else if(fields_count===1){field=fields[0].field;multiplier=multipliers[0];return function(a,b){return multiplier*cmp(get_field(field,a),get_field(field,b));};}else{return function(a,b){var i,result,a_value,b_value,field;for(i=0;i<fields_count;i++){field=fields[i].field;result=multipliers[i]*cmp(get_field(field,a),get_field(field,b));if(result)return result;}return 0;};}};/**
	 * Parses a search query and returns an object
	 * with tokens and fields ready to be populated
	 * with results.
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */Sifter.prototype.prepareSearch=function(query,options){if(typeof query==='object')return query;options=extend({},options);var option_fields=options.fields;var option_sort=options.sort;var option_sort_empty=options.sort_empty;if(option_fields&&!is_array(option_fields))options.fields=[option_fields];if(option_sort&&!is_array(option_sort))options.sort=[option_sort];if(option_sort_empty&&!is_array(option_sort_empty))options.sort_empty=[option_sort_empty];return{options:options,query:String(query||'').toLowerCase(),tokens:this.tokenize(query),total:0,items:[]};};/**
	 * Searches through all items and returns a sorted array of matches.
	 *
	 * The `options` parameter can contain:
	 *
	 *   - fields {string|array}
	 *   - sort {array}
	 *   - score {function}
	 *   - filter {bool}
	 *   - limit {integer}
	 *
	 * Returns an object containing:
	 *
	 *   - options {object}
	 *   - query {string}
	 *   - tokens {array}
	 *   - total {int}
	 *   - items {array}
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */Sifter.prototype.search=function(query,options){var self=this,value,score,search,calculateScore;var fn_sort;var fn_score;search=this.prepareSearch(query,options);options=search.options;query=search.query;// generate result scoring function
fn_score=options.score||self.getScoreFunction(search);// perform search and sort
if(query.length){self.iterator(self.items,function(item,id){score=fn_score(item);if(options.filter===false||score>0){search.items.push({'score':score,'id':id});}});}else{self.iterator(self.items,function(item,id){search.items.push({'score':1,'id':id});});}fn_sort=self.getSortFunction(search,options);if(fn_sort)search.items.sort(fn_sort);// apply limits
search.total=search.items.length;if(typeof options.limit==='number'){search.items=search.items.slice(0,options.limit);}return search;};// utilities
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var cmp=function(a,b){if(typeof a==='number'&&typeof b==='number'){return a>b?1:a<b?-1:0;}a=asciifold(String(a||''));b=asciifold(String(b||''));if(a>b)return 1;if(b>a)return-1;return 0;};var extend=function(a,b){var i,n,k,object;for(i=1,n=arguments.length;i<n;i++){object=arguments[i];if(!object)continue;for(k in object){if(object.hasOwnProperty(k)){a[k]=object[k];}}}return a;};/**
	 * A property getter resolving dot-notation
	 * @param  {Object}  obj     The root object to fetch property on
	 * @param  {String}  name    The optionally dotted property name to fetch
	 * @param  {Boolean} nesting Handle nesting or not
	 * @return {Object}          The resolved property value
	 */var getattr=function(obj,name,nesting){if(!obj||!name)return;if(!nesting)return obj[name];var names=name.split(".");while(names.length&&(obj=obj[names.shift()]));return obj;};var trim=function(str){return(str+'').replace(/^\s+|\s+$|/g,'');};var escape_regex=function(str){return(str+'').replace(/([.?*+^$[\]\\(){}|-])/g,'\\$1');};var is_array=Array.isArray||typeof $!=='undefined'&&$.isArray||function(object){return Object.prototype.toString.call(object)==='[object Array]';};var DIACRITICS={'a':'[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]','b':'[b␢βΒB฿𐌁ᛒ]','c':'[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]','d':'[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]','e':'[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]','f':'[fƑƒḞḟ]','g':'[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]','h':'[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]','i':'[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]','j':'[jȷĴĵɈɉʝɟʲ]','k':'[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]','l':'[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]','n':'[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]','o':'[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]','p':'[pṔṕṖṗⱣᵽƤƥᵱ]','q':'[qꝖꝗʠɊɋꝘꝙq̃]','r':'[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]','s':'[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]','t':'[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]','u':'[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]','v':'[vṼṽṾṿƲʋꝞꝟⱱʋ]','w':'[wẂẃẀẁŴŵẄẅẆẇẈẉ]','x':'[xẌẍẊẋχ]','y':'[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]','z':'[zŹźẐẑŽžŻżẒẓẔẕƵƶ]'};var asciifold=function(){var i,n,k,chunk;var foreignletters='';var lookup={};for(k in DIACRITICS){if(DIACRITICS.hasOwnProperty(k)){chunk=DIACRITICS[k].substring(2,DIACRITICS[k].length-1);foreignletters+=chunk;for(i=0,n=chunk.length;i<n;i++){lookup[chunk.charAt(i)]=k;}}}var regexp=new RegExp('['+foreignletters+']','g');return function(str){return str.replace(regexp,function(foreignletter){return lookup[foreignletter];}).toLowerCase();};}();// export
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
return Sifter;});/**
 * microplugin.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */(function(root,factory){if(typeof define==='function'&&define.amd){define('microplugin',factory);}else if(typeof exports==='object'){module.exports=factory();}else{root.MicroPlugin=factory();}})(this,function(){var MicroPlugin={};MicroPlugin.mixin=function(Interface){Interface.plugins={};/**
		 * Initializes the listed plugins (with options).
		 * Acceptable formats:
		 *
		 * List (without options):
		 *   ['a', 'b', 'c']
		 *
		 * List (with options):
		 *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
		 *
		 * Hash (with options):
		 *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
		 *
		 * @param {mixed} plugins
		 */Interface.prototype.initializePlugins=function(plugins){var i,n,key;var self=this;var queue=[];self.plugins={names:[],settings:{},requested:{},loaded:{}};if(utils.isArray(plugins)){for(i=0,n=plugins.length;i<n;i++){if(typeof plugins[i]==='string'){queue.push(plugins[i]);}else{self.plugins.settings[plugins[i].name]=plugins[i].options;queue.push(plugins[i].name);}}}else if(plugins){for(key in plugins){if(plugins.hasOwnProperty(key)){self.plugins.settings[key]=plugins[key];queue.push(key);}}}while(queue.length){self.require(queue.shift());}};Interface.prototype.loadPlugin=function(name){var self=this;var plugins=self.plugins;var plugin=Interface.plugins[name];if(!Interface.plugins.hasOwnProperty(name)){throw new Error('Unable to find "'+name+'" plugin');}plugins.requested[name]=true;plugins.loaded[name]=plugin.fn.apply(self,[self.plugins.settings[name]||{}]);plugins.names.push(name);};/**
		 * Initializes a plugin.
		 *
		 * @param {string} name
		 */Interface.prototype.require=function(name){var self=this;var plugins=self.plugins;if(!self.plugins.loaded.hasOwnProperty(name)){if(plugins.requested[name]){throw new Error('Plugin has circular dependency ("'+name+'")');}self.loadPlugin(name);}return plugins.loaded[name];};/**
		 * Registers a plugin.
		 *
		 * @param {string} name
		 * @param {function} fn
		 */Interface.define=function(name,fn){Interface.plugins[name]={'name':name,'fn':fn};};};var utils={isArray:Array.isArray||function(vArg){return Object.prototype.toString.call(vArg)==='[object Array]';}};return MicroPlugin;});/**
 * selectize.js (v0.12.6)
 * Copyright (c) 2013–2015 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */ /*jshint curly:false */ /*jshint browser:true */(function(root,factory){if(typeof define==='function'&&define.amd){define('selectize',['jquery','sifter','microplugin'],factory);}else if(typeof exports==='object'){module.exports=factory(require('jquery'),require('sifter'),require('microplugin'));}else{root.Selectize=factory(root.jQuery,root.Sifter,root.MicroPlugin);}})(this,function($,Sifter,MicroPlugin){'use strict';var highlight=function($element,pattern){if(typeof pattern==='string'&&!pattern.length)return;var regex=typeof pattern==='string'?new RegExp(pattern,'i'):pattern;var highlight=function(node){var skip=0;// Wrap matching part of text node with highlighting <span>, e.g.
// Soccer  ->  <span class="highlight">Soc</span>cer  for regex = /soc/i
if(node.nodeType===3){var pos=node.data.search(regex);if(pos>=0&&node.data.length>0){var match=node.data.match(regex);var spannode=document.createElement('span');spannode.className='highlight';var middlebit=node.splitText(pos);var endbit=middlebit.splitText(match[0].length);var middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);skip=1;}}// Recurse element node, looking for child text nodes to highlight, unless element 
// is childless, <script>, <style>, or already highlighted: <span class="hightlight">
else if(node.nodeType===1&&node.childNodes&&!/(script|style)/i.test(node.tagName)&&(node.className!=='highlight'||node.tagName!=='SPAN')){for(var i=0;i<node.childNodes.length;++i){i+=highlight(node.childNodes[i]);}}return skip;};return $element.each(function(){highlight(this);});};/**
	 * removeHighlight fn copied from highlight v5 and
	 * edited to remove with() and pass js strict mode
	 */$.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;var parent=this.parentNode;parent.replaceChild(this.firstChild,this);parent.normalize();}).end();};var MicroEvent=function(){};MicroEvent.prototype={on:function(event,fct){this._events=this._events||{};this._events[event]=this._events[event]||[];this._events[event].push(fct);},off:function(event,fct){var n=arguments.length;if(n===0)return delete this._events;if(n===1)return delete this._events[event];this._events=this._events||{};if(event in this._events===false)return;this._events[event].splice(this._events[event].indexOf(fct),1);},trigger:function(event/* , args... */){this._events=this._events||{};if(event in this._events===false)return;for(var i=0;i<this._events[event].length;i++){this._events[event][i].apply(this,Array.prototype.slice.call(arguments,1));}}};/**
	 * Mixin will delegate all MicroEvent.js function in the destination object.
	 *
	 * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
	 *
	 * @param {object} the object which will support MicroEvent
	 */MicroEvent.mixin=function(destObject){var props=['on','off','trigger'];for(var i=0;i<props.length;i++){destObject.prototype[props[i]]=MicroEvent.prototype[props[i]];}};var IS_MAC=/Mac/.test(navigator.userAgent);var KEY_A=65;var KEY_COMMA=188;var KEY_RETURN=13;var KEY_ESC=27;var KEY_LEFT=37;var KEY_UP=38;var KEY_P=80;var KEY_RIGHT=39;var KEY_DOWN=40;var KEY_N=78;var KEY_BACKSPACE=8;var KEY_DELETE=46;var KEY_SHIFT=16;var KEY_CMD=IS_MAC?91:17;var KEY_CTRL=IS_MAC?18:17;var KEY_TAB=9;var TAG_SELECT=1;var TAG_INPUT=2;// for now, android support in general is too spotty to support validity
var SUPPORTS_VALIDITY_API=!/android/i.test(window.navigator.userAgent)&&!!document.createElement('input').validity;var isset=function(object){return typeof object!=='undefined';};/**
	 * Converts a scalar to its best string representation
	 * for hash keys and HTML attribute values.
	 *
	 * Transformations:
	 *   'str'     -> 'str'
	 *   null      -> ''
	 *   undefined -> ''
	 *   true      -> '1'
	 *   false     -> '0'
	 *   0         -> '0'
	 *   1         -> '1'
	 *
	 * @param {string} value
	 * @returns {string|null}
	 */var hash_key=function(value){if(typeof value==='undefined'||value===null)return null;if(typeof value==='boolean')return value?'1':'0';return value+'';};/**
	 * Escapes a string for use within HTML.
	 *
	 * @param {string} str
	 * @returns {string}
	 */var escape_html=function(str){return(str+'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');};/**
	 * Escapes "$" characters in replacement strings.
	 *
	 * @param {string} str
	 * @returns {string}
	 */var escape_replace=function(str){return(str+'').replace(/\$/g,'$$$$');};var hook={};/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked before the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */hook.before=function(self,method,fn){var original=self[method];self[method]=function(){fn.apply(self,arguments);return original.apply(self,arguments);};};/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked after the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */hook.after=function(self,method,fn){var original=self[method];self[method]=function(){var result=original.apply(self,arguments);fn.apply(self,arguments);return result;};};/**
	 * Wraps `fn` so that it can only be invoked once.
	 *
	 * @param {function} fn
	 * @returns {function}
	 */var once=function(fn){var called=false;return function(){if(called)return;called=true;fn.apply(this,arguments);};};/**
	 * Wraps `fn` so that it can only be called once
	 * every `delay` milliseconds (invoked on the falling edge).
	 *
	 * @param {function} fn
	 * @param {int} delay
	 * @returns {function}
	 */var debounce=function(fn,delay){var timeout;return function(){var self=this;var args=arguments;window.clearTimeout(timeout);timeout=window.setTimeout(function(){fn.apply(self,args);},delay);};};/**
	 * Debounce all fired events types listed in `types`
	 * while executing the provided `fn`.
	 *
	 * @param {object} self
	 * @param {array} types
	 * @param {function} fn
	 */var debounce_events=function(self,types,fn){var type;var trigger=self.trigger;var event_args={};// override trigger method
self.trigger=function(){var type=arguments[0];if(types.indexOf(type)!==-1){event_args[type]=arguments;}else{return trigger.apply(self,arguments);}};// invoke provided function
fn.apply(self,[]);self.trigger=trigger;// trigger queued events
for(type in event_args){if(event_args.hasOwnProperty(type)){trigger.apply(self,event_args[type]);}}};/**
	 * A workaround for http://bugs.jquery.com/ticket/6696
	 *
	 * @param {object} $parent - Parent element to listen on.
	 * @param {string} event - Event name.
	 * @param {string} selector - Descendant selector to filter by.
	 * @param {function} fn - Event handler.
	 */var watchChildEvent=function($parent,event,selector,fn){$parent.on(event,selector,function(e){var child=e.target;while(child&&child.parentNode!==$parent[0]){child=child.parentNode;}e.currentTarget=child;return fn.apply(this,[e]);});};/**
	 * Determines the current selection within a text input control.
	 * Returns an object containing:
	 *   - start
	 *   - length
	 *
	 * @param {object} input
	 * @returns {object}
	 */var getSelection=function(input){var result={};if('selectionStart'in input){result.start=input.selectionStart;result.length=input.selectionEnd-result.start;}else if(document.selection){input.focus();var sel=document.selection.createRange();var selLen=document.selection.createRange().text.length;sel.moveStart('character',-input.value.length);result.start=sel.text.length-selLen;result.length=selLen;}return result;};/**
	 * Copies CSS properties from one element to another.
	 *
	 * @param {object} $from
	 * @param {object} $to
	 * @param {array} properties
	 */var transferStyles=function($from,$to,properties){var i,n,styles={};if(properties){for(i=0,n=properties.length;i<n;i++){styles[properties[i]]=$from.css(properties[i]);}}else{styles=$from.css();}$to.css(styles);};/**
	 * Measures the width of a string within a
	 * parent element (in pixels).
	 *
	 * @param {string} str
	 * @param {object} $parent
	 * @returns {int}
	 */var measureString=function(str,$parent){if(!str){return 0;}if(!Selectize.$testInput){Selectize.$testInput=$('<span />').css({position:'absolute',top:-99999,left:-99999,width:'auto',padding:0,whiteSpace:'pre'}).appendTo('body');}Selectize.$testInput.text(str);transferStyles($parent,Selectize.$testInput,['letterSpacing','fontSize','fontFamily','fontWeight','textTransform']);return Selectize.$testInput.width();};/**
	 * Sets up an input to grow horizontally as the user
	 * types. If the value is changed manually, you can
	 * trigger the "update" handler to resize:
	 *
	 * $input.trigger('update');
	 *
	 * @param {object} $input
	 */var autoGrow=function($input){var currentWidth=null;var update=function(e,options){var value,keyCode,printable,placeholder,width;var shift,character,selection;e=e||window.event||{};options=options||{};if(e.metaKey||e.altKey)return;if(!options.force&&$input.data('grow')===false)return;value=$input.val();if(e.type&&e.type.toLowerCase()==='keydown'){keyCode=e.keyCode;printable=keyCode>=48&&keyCode<=57||// 0-9
keyCode>=65&&keyCode<=90||// a-z
keyCode>=96&&keyCode<=111||// numpad 0-9, numeric operators
keyCode>=186&&keyCode<=222||// semicolon, equal, comma, dash, etc.
keyCode===32// space
;if(keyCode===KEY_DELETE||keyCode===KEY_BACKSPACE){selection=getSelection($input[0]);if(selection.length){value=value.substring(0,selection.start)+value.substring(selection.start+selection.length);}else if(keyCode===KEY_BACKSPACE&&selection.start){value=value.substring(0,selection.start-1)+value.substring(selection.start+1);}else if(keyCode===KEY_DELETE&&typeof selection.start!=='undefined'){value=value.substring(0,selection.start)+value.substring(selection.start+1);}}else if(printable){shift=e.shiftKey;character=String.fromCharCode(e.keyCode);if(shift)character=character.toUpperCase();else character=character.toLowerCase();value+=character;}}placeholder=$input.attr('placeholder');if(!value&&placeholder){value=placeholder;}width=measureString(value,$input)+4;if(width!==currentWidth){currentWidth=width;$input.width(width);$input.triggerHandler('resize');}};$input.on('keydown keyup update blur',update);update();};var domToString=function(d){var tmp=document.createElement('div');tmp.appendChild(d.cloneNode(true));return tmp.innerHTML;};var logError=function(message,options){if(!options)options={};var component="Selectize";void 0;if(options.explanation){// console.group is undefined in <IE11
if(console.group)void 0;void 0;if(console.group)void 0;}};var Selectize=function($input,settings){var key,i,n,dir,input,self=this;input=$input[0];input.selectize=self;// detect rtl environment
var computedStyle=window.getComputedStyle&&window.getComputedStyle(input,null);dir=computedStyle?computedStyle.getPropertyValue('direction'):input.currentStyle&&input.currentStyle.direction;dir=dir||$input.parents('[dir]:first').attr('dir')||'';// setup default state
$.extend(self,{order:0,settings:settings,$input:$input,tabIndex:$input.attr('tabindex')||'',tagType:input.tagName.toLowerCase()==='select'?TAG_SELECT:TAG_INPUT,rtl:/rtl/i.test(dir),eventNS:'.selectize'+ ++Selectize.count,highlightedValue:null,isBlurring:false,isOpen:false,isDisabled:false,isRequired:$input.is('[required]'),isInvalid:false,isLocked:false,isFocused:false,isInputHidden:false,isSetup:false,isShiftDown:false,isCmdDown:false,isCtrlDown:false,ignoreFocus:false,ignoreBlur:false,ignoreHover:false,hasOptions:false,currentResults:null,lastValue:'',caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:settings.loadThrottle===null?self.onSearchChange:debounce(self.onSearchChange,settings.loadThrottle)});// search system
self.sifter=new Sifter(this.options,{diacritics:settings.diacritics});// build options table
if(self.settings.options){for(i=0,n=self.settings.options.length;i<n;i++){self.registerOption(self.settings.options[i]);}delete self.settings.options;}// build optgroup table
if(self.settings.optgroups){for(i=0,n=self.settings.optgroups.length;i<n;i++){self.registerOptionGroup(self.settings.optgroups[i]);}delete self.settings.optgroups;}// option-dependent defaults
self.settings.mode=self.settings.mode||(self.settings.maxItems===1?'single':'multi');if(typeof self.settings.hideSelected!=='boolean'){self.settings.hideSelected=self.settings.mode==='multi';}self.initializePlugins(self.settings.plugins);self.setupCallbacks();self.setupTemplates();self.setup();};// mixins
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
MicroEvent.mixin(Selectize);if(typeof MicroPlugin!=="undefined"){MicroPlugin.mixin(Selectize);}else{logError("Dependency MicroPlugin is missing",{explanation:"Make sure you either: (1) are using the \"standalone\" "+"version of Selectize, or (2) require MicroPlugin before you "+"load Selectize."});}// methods
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
$.extend(Selectize.prototype,{/**
		 * Creates all elements and sets up event bindings.
		 */setup:function(){var self=this;var settings=self.settings;var eventNS=self.eventNS;var $window=$(window);var $document=$(document);var $input=self.$input;var $wrapper;var $control;var $control_input;var $dropdown;var $dropdown_content;var $dropdown_parent;var inputMode;var timeout_blur;var timeout_focus;var classes;var classes_plugins;var inputId;inputMode=self.settings.mode;classes=$input.attr('class')||'';$wrapper=$('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);$control=$('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);$control_input=$('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex',$input.is(':disabled')?'-1':self.tabIndex);$dropdown_parent=$(settings.dropdownParent||$wrapper);$dropdown=$('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);$dropdown_content=$('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);if(inputId=$input.attr('id')){$control_input.attr('id',inputId+'-selectized');$("label[for='"+inputId+"']").attr('for',inputId+'-selectized');}if(self.settings.copyClassesToDropdown){$dropdown.addClass(classes);}$wrapper.css({width:$input[0].style.width});if(self.plugins.names.length){classes_plugins='plugin-'+self.plugins.names.join(' plugin-');$wrapper.addClass(classes_plugins);$dropdown.addClass(classes_plugins);}if((settings.maxItems===null||settings.maxItems>1)&&self.tagType===TAG_SELECT){$input.attr('multiple','multiple');}if(self.settings.placeholder){$control_input.attr('placeholder',settings.placeholder);}// if splitOn was not passed in, construct it from the delimiter to allow pasting universally
if(!self.settings.splitOn&&self.settings.delimiter){var delimiterEscaped=self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');self.settings.splitOn=new RegExp('\\s*'+delimiterEscaped+'+\\s*');}if($input.attr('autocorrect')){$control_input.attr('autocorrect',$input.attr('autocorrect'));}if($input.attr('autocapitalize')){$control_input.attr('autocapitalize',$input.attr('autocapitalize'));}$control_input[0].type=$input[0].type;self.$wrapper=$wrapper;self.$control=$control;self.$control_input=$control_input;self.$dropdown=$dropdown;self.$dropdown_content=$dropdown_content;$dropdown.on('mouseenter mousedown click','[data-disabled]>[data-selectable]',function(e){e.stopImmediatePropagation();});$dropdown.on('mouseenter','[data-selectable]',function(){return self.onOptionHover.apply(self,arguments);});$dropdown.on('mousedown click','[data-selectable]',function(){return self.onOptionSelect.apply(self,arguments);});watchChildEvent($control,'mousedown','*:not(input)',function(){return self.onItemSelect.apply(self,arguments);});autoGrow($control_input);$control.on({mousedown:function(){return self.onMouseDown.apply(self,arguments);},click:function(){return self.onClick.apply(self,arguments);}});$control_input.on({mousedown:function(e){e.stopPropagation();},keydown:function(){return self.onKeyDown.apply(self,arguments);},keyup:function(){return self.onKeyUp.apply(self,arguments);},keypress:function(){return self.onKeyPress.apply(self,arguments);},resize:function(){self.positionDropdown.apply(self,[]);},blur:function(){return self.onBlur.apply(self,arguments);},focus:function(){self.ignoreBlur=false;return self.onFocus.apply(self,arguments);},paste:function(){return self.onPaste.apply(self,arguments);}});$document.on('keydown'+eventNS,function(e){self.isCmdDown=e[IS_MAC?'metaKey':'ctrlKey'];self.isCtrlDown=e[IS_MAC?'altKey':'ctrlKey'];self.isShiftDown=e.shiftKey;});$document.on('keyup'+eventNS,function(e){if(e.keyCode===KEY_CTRL)self.isCtrlDown=false;if(e.keyCode===KEY_SHIFT)self.isShiftDown=false;if(e.keyCode===KEY_CMD)self.isCmdDown=false;});$document.on('mousedown'+eventNS,function(e){if(self.isFocused){// prevent events on the dropdown scrollbar from causing the control to blur
if(e.target===self.$dropdown[0]||e.target.parentNode===self.$dropdown[0]){return false;}// blur on click outside
if(!self.$control.has(e.target).length&&e.target!==self.$control[0]){self.blur(e.target);}}});$window.on(['scroll'+eventNS,'resize'+eventNS].join(' '),function(){if(self.isOpen){self.positionDropdown.apply(self,arguments);}});$window.on('mousemove'+eventNS,function(){self.ignoreHover=false;});// store original children and tab index so that they can be
// restored when the destroy() method is called.
this.revertSettings={$children:$input.children().detach(),tabindex:$input.attr('tabindex')};$input.attr('tabindex',-1).hide().after(self.$wrapper);if($.isArray(settings.items)){self.setValue(settings.items);delete settings.items;}// feature detect for the validation API
if(SUPPORTS_VALIDITY_API){$input.on('invalid'+eventNS,function(e){e.preventDefault();self.isInvalid=true;self.refreshState();});}self.updateOriginalInput();self.refreshItems();self.refreshState();self.updatePlaceholder();self.isSetup=true;if($input.is(':disabled')){self.disable();}self.on('change',this.onChange);$input.data('selectize',self);$input.addClass('selectized');self.trigger('initialize');// preload options
if(settings.preload===true){self.onSearchChange('');}},/**
		 * Sets up default rendering functions.
		 */setupTemplates:function(){var self=this;var field_label=self.settings.labelField;var field_optgroup=self.settings.optgroupLabelField;var templates={'optgroup':function(data){return'<div class="optgroup">'+data.html+'</div>';},'optgroup_header':function(data,escape){return'<div class="optgroup-header">'+escape(data[field_optgroup])+'</div>';},'option':function(data,escape){return'<div class="option">'+escape(data[field_label])+'</div>';},'item':function(data,escape){return'<div class="item">'+escape(data[field_label])+'</div>';},'option_create':function(data,escape){return'<div class="create">Add <strong>'+escape(data.input)+'</strong>&hellip;</div>';}};self.settings.render=$.extend({},templates,self.settings.render);},/**
		 * Maps fired events to callbacks provided
		 * in the settings used when creating the control.
		 */setupCallbacks:function(){var key,fn,callbacks={'initialize':'onInitialize','change':'onChange','item_add':'onItemAdd','item_remove':'onItemRemove','clear':'onClear','option_add':'onOptionAdd','option_remove':'onOptionRemove','option_clear':'onOptionClear','optgroup_add':'onOptionGroupAdd','optgroup_remove':'onOptionGroupRemove','optgroup_clear':'onOptionGroupClear','dropdown_open':'onDropdownOpen','dropdown_close':'onDropdownClose','type':'onType','load':'onLoad','focus':'onFocus','blur':'onBlur'};for(key in callbacks){if(callbacks.hasOwnProperty(key)){fn=this.settings[callbacks[key]];if(fn)this.on(key,fn);}}},/**
		 * Triggered when the main control element
		 * has a click event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */onClick:function(e){var self=this;// necessary for mobile webkit devices (manual focus triggering
// is ignored unless invoked within a click event)
// also necessary to reopen a dropdown that has been closed by
// closeAfterSelect
if(!self.isFocused||!self.isOpen){self.focus();e.preventDefault();}},/**
		 * Triggered when the main control element
		 * has a mouse down event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */onMouseDown:function(e){var self=this;var defaultPrevented=e.isDefaultPrevented();var $target=$(e.target);if(self.isFocused){// retain focus by preventing native handling. if the
// event target is the input it should not be modified.
// otherwise, text selection within the input won't work.
if(e.target!==self.$control_input[0]){if(self.settings.mode==='single'){// toggle dropdown
self.isOpen?self.close():self.open();}else if(!defaultPrevented){self.setActiveItem(null);}return false;}}else{// give control focus
if(!defaultPrevented){window.setTimeout(function(){self.focus();},0);}}},/**
		 * Triggered when the value of the control has been changed.
		 * This should propagate the event to the original DOM
		 * input / select element.
		 */onChange:function(){this.$input.trigger('change');},/**
		 * Triggered on <input> paste.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */onPaste:function(e){var self=this;if(self.isFull()||self.isInputHidden||self.isLocked){e.preventDefault();return;}// If a regex or string is included, this will split the pasted
// input and create Items for each separate value
if(self.settings.splitOn){// Wait for pasted text to be recognized in value
setTimeout(function(){var pastedText=self.$control_input.val();if(!pastedText.match(self.settings.splitOn)){return;}var splitInput=$.trim(pastedText).split(self.settings.splitOn);for(var i=0,n=splitInput.length;i<n;i++){self.createItem(splitInput[i]);}},0);}},/**
		 * Triggered on <input> keypress.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */onKeyPress:function(e){if(this.isLocked)return e&&e.preventDefault();var character=String.fromCharCode(e.keyCode||e.which);if(this.settings.create&&this.settings.mode==='multi'&&character===this.settings.delimiter){this.createItem();e.preventDefault();return false;}},/**
		 * Triggered on <input> keydown.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */onKeyDown:function(e){var isInput=e.target===this.$control_input[0];var self=this;if(self.isLocked){if(e.keyCode!==KEY_TAB){e.preventDefault();}return;}switch(e.keyCode){case KEY_A:if(self.isCmdDown){self.selectAll();return;}break;case KEY_ESC:if(self.isOpen){e.preventDefault();e.stopPropagation();self.close();}return;case KEY_N:if(!e.ctrlKey||e.altKey)break;case KEY_DOWN:if(!self.isOpen&&self.hasOptions){self.open();}else if(self.$activeOption){self.ignoreHover=true;var $next=self.getAdjacentOption(self.$activeOption,1);if($next.length)self.setActiveOption($next,true,true);}e.preventDefault();return;case KEY_P:if(!e.ctrlKey||e.altKey)break;case KEY_UP:if(self.$activeOption){self.ignoreHover=true;var $prev=self.getAdjacentOption(self.$activeOption,-1);if($prev.length)self.setActiveOption($prev,true,true);}e.preventDefault();return;case KEY_RETURN:if(self.isOpen&&self.$activeOption){self.onOptionSelect({currentTarget:self.$activeOption});e.preventDefault();}return;case KEY_LEFT:self.advanceSelection(-1,e);return;case KEY_RIGHT:self.advanceSelection(1,e);return;case KEY_TAB:if(self.settings.selectOnTab&&self.isOpen&&self.$activeOption){self.onOptionSelect({currentTarget:self.$activeOption});// Default behaviour is to jump to the next field, we only want this
// if the current field doesn't accept any more entries
if(!self.isFull()){e.preventDefault();}}if(self.settings.create&&self.createItem()){e.preventDefault();}return;case KEY_BACKSPACE:case KEY_DELETE:self.deleteSelection(e);return;}if((self.isFull()||self.isInputHidden)&&!(IS_MAC?e.metaKey:e.ctrlKey)){e.preventDefault();return;}},/**
		 * Triggered on <input> keyup.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */onKeyUp:function(e){var self=this;if(self.isLocked)return e&&e.preventDefault();var value=self.$control_input.val()||'';if(self.lastValue!==value){self.lastValue=value;self.onSearchChange(value);self.refreshOptions();self.trigger('type',value);}},/**
		 * Invokes the user-provide option provider / loader.
		 *
		 * Note: this function is debounced in the Selectize
		 * constructor (by `settings.loadThrottle` milliseconds)
		 *
		 * @param {string} value
		 */onSearchChange:function(value){var self=this;var fn=self.settings.load;if(!fn)return;if(self.loadedSearches.hasOwnProperty(value))return;self.loadedSearches[value]=true;self.load(function(callback){fn.apply(self,[value,callback]);});},/**
		 * Triggered on <input> focus.
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */onFocus:function(e){var self=this;var wasFocused=self.isFocused;if(self.isDisabled){self.blur();e&&e.preventDefault();return false;}if(self.ignoreFocus)return;self.isFocused=true;if(self.settings.preload==='focus')self.onSearchChange('');if(!wasFocused)self.trigger('focus');if(!self.$activeItems.length){self.showInput();self.setActiveItem(null);self.refreshOptions(!!self.settings.openOnFocus);}self.refreshState();},/**
		 * Triggered on <input> blur.
		 *
		 * @param {object} e
		 * @param {Element} dest
		 */onBlur:function(e,dest){var self=this;if(!self.isFocused)return;self.isFocused=false;if(self.ignoreFocus){return;}else if(!self.ignoreBlur&&document.activeElement===self.$dropdown_content[0]){// necessary to prevent IE closing the dropdown when the scrollbar is clicked
self.ignoreBlur=true;self.onFocus(e);return;}var deactivate=function(){self.close();self.setTextboxValue('');self.setActiveItem(null);self.setActiveOption(null);self.setCaret(self.items.length);self.refreshState();// IE11 bug: element still marked as active
dest&&dest.focus&&dest.focus();self.isBlurring=false;self.ignoreFocus=false;self.trigger('blur');};self.isBlurring=true;self.ignoreFocus=true;if(self.settings.create&&self.settings.createOnBlur){self.createItem(null,false,deactivate);}else{deactivate();}},/**
		 * Triggered when the user rolls over
		 * an option in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */onOptionHover:function(e){if(this.ignoreHover)return;this.setActiveOption(e.currentTarget,false);},/**
		 * Triggered when the user clicks on an option
		 * in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */onOptionSelect:function(e){var value,$target,$option,self=this;if(e.preventDefault){e.preventDefault();e.stopPropagation();}$target=$(e.currentTarget);if($target.hasClass('create')){self.createItem(null,function(){if(self.settings.closeAfterSelect){self.close();}});}else{value=$target.attr('data-value');if(typeof value!=='undefined'){self.lastQuery=null;self.setTextboxValue('');self.addItem(value);if(self.settings.closeAfterSelect){self.close();}else if(!self.settings.hideSelected&&e.type&&/mouse/.test(e.type)){self.setActiveOption(self.getOption(value));}}}},/**
		 * Triggered when the user clicks on an item
		 * that has been selected.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */onItemSelect:function(e){var self=this;if(self.isLocked)return;if(self.settings.mode==='multi'){e.preventDefault();self.setActiveItem(e.currentTarget,e);}},/**
		 * Invokes the provided method that provides
		 * results to a callback---which are then added
		 * as options to the control.
		 *
		 * @param {function} fn
		 */load:function(fn){var self=this;var $wrapper=self.$wrapper.addClass(self.settings.loadingClass);self.loading++;fn.apply(self,[function(results){self.loading=Math.max(self.loading-1,0);if(results&&results.length){self.addOption(results);self.refreshOptions(self.isFocused&&!self.isInputHidden);}if(!self.loading){$wrapper.removeClass(self.settings.loadingClass);}self.trigger('load',results);}]);},/**
		 * Sets the input field of the control to the specified value.
		 *
		 * @param {string} value
		 */setTextboxValue:function(value){var $input=this.$control_input;var changed=$input.val()!==value;if(changed){$input.val(value).triggerHandler('update');this.lastValue=value;}},/**
		 * Returns the value of the control. If multiple items
		 * can be selected (e.g. <select multiple>), this returns
		 * an array. If only one item can be selected, this
		 * returns a string.
		 *
		 * @returns {mixed}
		 */getValue:function(){if(this.tagType===TAG_SELECT&&this.$input.attr('multiple')){return this.items;}else{return this.items.join(this.settings.delimiter);}},/**
		 * Resets the selected items to the given value.
		 *
		 * @param {mixed} value
		 */setValue:function(value,silent){var events=silent?[]:['change'];debounce_events(this,events,function(){this.clear(silent);this.addItems(value,silent);});},/**
		 * Sets the selected item.
		 *
		 * @param {object} $item
		 * @param {object} e (optional)
		 */setActiveItem:function($item,e){var self=this;var eventName;var i,idx,begin,end,item,swap;var $last;if(self.settings.mode==='single')return;$item=$($item);// clear the active selection
if(!$item.length){$(self.$activeItems).removeClass('active');self.$activeItems=[];if(self.isFocused){self.showInput();}return;}// modify selection
eventName=e&&e.type.toLowerCase();if(eventName==='mousedown'&&self.isShiftDown&&self.$activeItems.length){$last=self.$control.children('.active:last');begin=Array.prototype.indexOf.apply(self.$control[0].childNodes,[$last[0]]);end=Array.prototype.indexOf.apply(self.$control[0].childNodes,[$item[0]]);if(begin>end){swap=begin;begin=end;end=swap;}for(i=begin;i<=end;i++){item=self.$control[0].childNodes[i];if(self.$activeItems.indexOf(item)===-1){$(item).addClass('active');self.$activeItems.push(item);}}e.preventDefault();}else if(eventName==='mousedown'&&self.isCtrlDown||eventName==='keydown'&&this.isShiftDown){if($item.hasClass('active')){idx=self.$activeItems.indexOf($item[0]);self.$activeItems.splice(idx,1);$item.removeClass('active');}else{self.$activeItems.push($item.addClass('active')[0]);}}else{$(self.$activeItems).removeClass('active');self.$activeItems=[$item.addClass('active')[0]];}// ensure control has focus
self.hideInput();if(!this.isFocused){self.focus();}},/**
		 * Sets the selected item in the dropdown menu
		 * of available options.
		 *
		 * @param {object} $object
		 * @param {boolean} scroll
		 * @param {boolean} animate
		 */setActiveOption:function($option,scroll,animate){var height_menu,height_item,y;var scroll_top,scroll_bottom;var self=this;if(self.$activeOption)self.$activeOption.removeClass('active');self.$activeOption=null;$option=$($option);if(!$option.length)return;self.$activeOption=$option.addClass('active');if(scroll||!isset(scroll)){height_menu=self.$dropdown_content.height();height_item=self.$activeOption.outerHeight(true);scroll=self.$dropdown_content.scrollTop()||0;y=self.$activeOption.offset().top-self.$dropdown_content.offset().top+scroll;scroll_top=y;scroll_bottom=y-height_menu+height_item;if(y+height_item>height_menu+scroll){self.$dropdown_content.stop().animate({scrollTop:scroll_bottom},animate?self.settings.scrollDuration:0);}else if(y<scroll){self.$dropdown_content.stop().animate({scrollTop:scroll_top},animate?self.settings.scrollDuration:0);}}},/**
		 * Selects all items (CTRL + A).
		 */selectAll:function(){var self=this;if(self.settings.mode==='single')return;self.$activeItems=Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));if(self.$activeItems.length){self.hideInput();self.close();}self.focus();},/**
		 * Hides the input element out of view, while
		 * retaining its focus.
		 */hideInput:function(){var self=this;self.setTextboxValue('');self.$control_input.css({opacity:0,position:'absolute',left:self.rtl?10000:-10000});self.isInputHidden=true;},/**
		 * Restores input visibility.
		 */showInput:function(){this.$control_input.css({opacity:1,position:'relative',left:0});this.isInputHidden=false;},/**
		 * Gives the control focus.
		 */focus:function(){var self=this;if(self.isDisabled)return;self.ignoreFocus=true;self.$control_input[0].focus();window.setTimeout(function(){self.ignoreFocus=false;self.onFocus();},0);},/**
		 * Forces the control out of focus.
		 *
		 * @param {Element} dest
		 */blur:function(dest){this.$control_input[0].blur();this.onBlur(null,dest);},/**
		 * Returns a function that scores an object
		 * to show how good of a match it is to the
		 * provided query.
		 *
		 * @param {string} query
		 * @param {object} options
		 * @return {function}
		 */getScoreFunction:function(query){return this.sifter.getScoreFunction(query,this.getSearchOptions());},/**
		 * Returns search options for sifter (the system
		 * for scoring and sorting results).
		 *
		 * @see https://github.com/brianreavis/sifter.js
		 * @return {object}
		 */getSearchOptions:function(){var settings=this.settings;var sort=settings.sortField;if(typeof sort==='string'){sort=[{field:sort}];}return{fields:settings.searchField,conjunction:settings.searchConjunction,sort:sort,nesting:settings.nesting};},/**
		 * Searches through available options and returns
		 * a sorted array of matches.
		 *
		 * Returns an object containing:
		 *
		 *   - query {string}
		 *   - tokens {array}
		 *   - total {int}
		 *   - items {array}
		 *
		 * @param {string} query
		 * @returns {object}
		 */search:function(query){var i,value,score,result,calculateScore;var self=this;var settings=self.settings;var options=this.getSearchOptions();// validate user-provided result scoring function
if(settings.score){calculateScore=self.settings.score.apply(this,[query]);if(typeof calculateScore!=='function'){throw new Error('Selectize "score" setting must be a function that returns a function');}}// perform search
if(query!==self.lastQuery){self.lastQuery=query;result=self.sifter.search(query,$.extend(options,{score:calculateScore}));self.currentResults=result;}else{result=$.extend(true,{},self.currentResults);}// filter out selected items
if(settings.hideSelected){for(i=result.items.length-1;i>=0;i--){if(self.items.indexOf(hash_key(result.items[i].id))!==-1){result.items.splice(i,1);}}}return result;},/**
		 * Refreshes the list of available options shown
		 * in the autocomplete dropdown menu.
		 *
		 * @param {boolean} triggerDropdown
		 */refreshOptions:function(triggerDropdown){var i,j,k,n,groups,groups_order,option,option_html,optgroup,optgroups,html,html_children,has_create_option;var $active,$active_before,$create;if(typeof triggerDropdown==='undefined'){triggerDropdown=true;}var self=this;var query=$.trim(self.$control_input.val());var results=self.search(query);var $dropdown_content=self.$dropdown_content;var active_before=self.$activeOption&&hash_key(self.$activeOption.attr('data-value'));// build markup
n=results.items.length;if(typeof self.settings.maxOptions==='number'){n=Math.min(n,self.settings.maxOptions);}// render and group available options individually
groups={};groups_order=[];for(i=0;i<n;i++){option=self.options[results.items[i].id];option_html=self.render('option',option);optgroup=option[self.settings.optgroupField]||'';optgroups=$.isArray(optgroup)?optgroup:[optgroup];for(j=0,k=optgroups&&optgroups.length;j<k;j++){optgroup=optgroups[j];if(!self.optgroups.hasOwnProperty(optgroup)){optgroup='';}if(!groups.hasOwnProperty(optgroup)){groups[optgroup]=document.createDocumentFragment();groups_order.push(optgroup);}groups[optgroup].appendChild(option_html);}}// sort optgroups
if(this.settings.lockOptgroupOrder){groups_order.sort(function(a,b){var a_order=self.optgroups[a].$order||0;var b_order=self.optgroups[b].$order||0;return a_order-b_order;});}// render optgroup headers & join groups
html=document.createDocumentFragment();for(i=0,n=groups_order.length;i<n;i++){optgroup=groups_order[i];if(self.optgroups.hasOwnProperty(optgroup)&&groups[optgroup].childNodes.length){// render the optgroup header and options within it,
// then pass it to the wrapper template
html_children=document.createDocumentFragment();html_children.appendChild(self.render('optgroup_header',self.optgroups[optgroup]));html_children.appendChild(groups[optgroup]);html.appendChild(self.render('optgroup',$.extend({},self.optgroups[optgroup],{html:domToString(html_children),dom:html_children})));}else{html.appendChild(groups[optgroup]);}}$dropdown_content.html(html);// highlight matching terms inline
if(self.settings.highlight){$dropdown_content.removeHighlight();if(results.query.length&&results.tokens.length){for(i=0,n=results.tokens.length;i<n;i++){highlight($dropdown_content,results.tokens[i].regex);}}}// add "selected" class to selected options
if(!self.settings.hideSelected){for(i=0,n=self.items.length;i<n;i++){self.getOption(self.items[i]).addClass('selected');}}// add create option
has_create_option=self.canCreate(query);if(has_create_option){$dropdown_content.prepend(self.render('option_create',{input:query}));$create=$($dropdown_content[0].childNodes[0]);}// activate
self.hasOptions=results.items.length>0||has_create_option;if(self.hasOptions){if(results.items.length>0){$active_before=active_before&&self.getOption(active_before);if($active_before&&$active_before.length){$active=$active_before;}else if(self.settings.mode==='single'&&self.items.length){$active=self.getOption(self.items[0]);}if(!$active||!$active.length){if($create&&!self.settings.addPrecedence){$active=self.getAdjacentOption($create,1);}else{$active=$dropdown_content.find('[data-selectable]:first');}}}else{$active=$create;}self.setActiveOption($active);if(triggerDropdown&&!self.isOpen){self.open();}}else{self.setActiveOption(null);if(triggerDropdown&&self.isOpen){self.close();}}},/**
		 * Adds an available option. If it already exists,
		 * nothing will happen. Note: this does not refresh
		 * the options list dropdown (use `refreshOptions`
		 * for that).
		 *
		 * Usage:
		 *
		 *   this.addOption(data)
		 *
		 * @param {object|array} data
		 */addOption:function(data){var i,n,value,self=this;if($.isArray(data)){for(i=0,n=data.length;i<n;i++){self.addOption(data[i]);}return;}if(value=self.registerOption(data)){self.userOptions[value]=true;self.lastQuery=null;self.trigger('option_add',value,data);}},/**
		 * Registers an option to the pool of options.
		 *
		 * @param {object} data
		 * @return {boolean|string}
		 */registerOption:function(data){var key=hash_key(data[this.settings.valueField]);if(typeof key==='undefined'||key===null||this.options.hasOwnProperty(key))return false;data.$order=data.$order||++this.order;this.options[key]=data;return key;},/**
		 * Registers an option group to the pool of option groups.
		 *
		 * @param {object} data
		 * @return {boolean|string}
		 */registerOptionGroup:function(data){var key=hash_key(data[this.settings.optgroupValueField]);if(!key)return false;data.$order=data.$order||++this.order;this.optgroups[key]=data;return key;},/**
		 * Registers a new optgroup for options
		 * to be bucketed into.
		 *
		 * @param {string} id
		 * @param {object} data
		 */addOptionGroup:function(id,data){data[this.settings.optgroupValueField]=id;if(id=this.registerOptionGroup(data)){this.trigger('optgroup_add',id,data);}},/**
		 * Removes an existing option group.
		 *
		 * @param {string} id
		 */removeOptionGroup:function(id){if(this.optgroups.hasOwnProperty(id)){delete this.optgroups[id];this.renderCache={};this.trigger('optgroup_remove',id);}},/**
		 * Clears all existing option groups.
		 */clearOptionGroups:function(){this.optgroups={};this.renderCache={};this.trigger('optgroup_clear');},/**
		 * Updates an option available for selection. If
		 * it is visible in the selected items or options
		 * dropdown, it will be re-rendered automatically.
		 *
		 * @param {string} value
		 * @param {object} data
		 */updateOption:function(value,data){var self=this;var $item,$item_new;var value_new,index_item,cache_items,cache_options,order_old;value=hash_key(value);value_new=hash_key(data[self.settings.valueField]);// sanity checks
if(value===null)return;if(!self.options.hasOwnProperty(value))return;if(typeof value_new!=='string')throw new Error('Value must be set in option data');order_old=self.options[value].$order;// update references
if(value_new!==value){delete self.options[value];index_item=self.items.indexOf(value);if(index_item!==-1){self.items.splice(index_item,1,value_new);}}data.$order=data.$order||order_old;self.options[value_new]=data;// invalidate render cache
cache_items=self.renderCache['item'];cache_options=self.renderCache['option'];if(cache_items){delete cache_items[value];delete cache_items[value_new];}if(cache_options){delete cache_options[value];delete cache_options[value_new];}// update the item if it's selected
if(self.items.indexOf(value_new)!==-1){$item=self.getItem(value);$item_new=$(self.render('item',data));if($item.hasClass('active'))$item_new.addClass('active');$item.replaceWith($item_new);}// invalidate last query because we might have updated the sortField
self.lastQuery=null;// update dropdown contents
if(self.isOpen){self.refreshOptions(false);}},/**
		 * Removes a single option.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */removeOption:function(value,silent){var self=this;value=hash_key(value);var cache_items=self.renderCache['item'];var cache_options=self.renderCache['option'];if(cache_items)delete cache_items[value];if(cache_options)delete cache_options[value];delete self.userOptions[value];delete self.options[value];self.lastQuery=null;self.trigger('option_remove',value);self.removeItem(value,silent);},/**
		 * Clears all options.
		 */clearOptions:function(){var self=this;self.loadedSearches={};self.userOptions={};self.renderCache={};var options=self.options;$.each(self.options,function(key,value){if(self.items.indexOf(key)==-1){delete options[key];}});self.options=self.sifter.items=options;self.lastQuery=null;self.trigger('option_clear');},/**
		 * Returns the jQuery element of the option
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */getOption:function(value){return this.getElementWithValue(value,this.$dropdown_content.find('[data-selectable]'));},/**
		 * Returns the jQuery element of the next or
		 * previous selectable option.
		 *
		 * @param {object} $option
		 * @param {int} direction  can be 1 for next or -1 for previous
		 * @return {object}
		 */getAdjacentOption:function($option,direction){var $options=this.$dropdown.find('[data-selectable]');var index=$options.index($option)+direction;return index>=0&&index<$options.length?$options.eq(index):$();},/**
		 * Finds the first element with a "data-value" attribute
		 * that matches the given value.
		 *
		 * @param {mixed} value
		 * @param {object} $els
		 * @return {object}
		 */getElementWithValue:function(value,$els){value=hash_key(value);if(typeof value!=='undefined'&&value!==null){for(var i=0,n=$els.length;i<n;i++){if($els[i].getAttribute('data-value')===value){return $($els[i]);}}}return $();},/**
		 * Returns the jQuery element of the item
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */getItem:function(value){return this.getElementWithValue(value,this.$control.children());},/**
		 * "Selects" multiple items at once. Adds them to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */addItems:function(values,silent){this.buffer=document.createDocumentFragment();var childNodes=this.$control[0].childNodes;for(var i=0;i<childNodes.length;i++){this.buffer.appendChild(childNodes[i]);}var items=$.isArray(values)?values:[values];for(var i=0,n=items.length;i<n;i++){this.isPending=i<n-1;this.addItem(items[i],silent);}var control=this.$control[0];control.insertBefore(this.buffer,control.firstChild);this.buffer=null;},/**
		 * "Selects" an item. Adds it to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */addItem:function(value,silent){var events=silent?[]:['change'];debounce_events(this,events,function(){var $item,$option,$options;var self=this;var inputMode=self.settings.mode;var i,active,value_next,wasFull;value=hash_key(value);if(self.items.indexOf(value)!==-1){if(inputMode==='single')self.close();return;}if(!self.options.hasOwnProperty(value))return;if(inputMode==='single')self.clear(silent);if(inputMode==='multi'&&self.isFull())return;$item=$(self.render('item',self.options[value]));wasFull=self.isFull();self.items.splice(self.caretPos,0,value);self.insertAtCaret($item);if(!self.isPending||!wasFull&&self.isFull()){self.refreshState();}if(self.isSetup){$options=self.$dropdown_content.find('[data-selectable]');// update menu / remove the option (if this is not one item being added as part of series)
if(!self.isPending){$option=self.getOption(value);value_next=self.getAdjacentOption($option,1).attr('data-value');self.refreshOptions(self.isFocused&&inputMode!=='single');if(value_next){self.setActiveOption(self.getOption(value_next));}}// hide the menu if the maximum number of items have been selected or no options are left
if(!$options.length||self.isFull()){self.close();}else if(!self.isPending){self.positionDropdown();}self.updatePlaceholder();self.trigger('item_add',value,$item);if(!self.isPending){self.updateOriginalInput({silent:silent});}}});},/**
		 * Removes the selected item matching
		 * the provided value.
		 *
		 * @param {string} value
		 */removeItem:function(value,silent){var self=this;var $item,i,idx;$item=value instanceof $?value:self.getItem(value);value=hash_key($item.attr('data-value'));i=self.items.indexOf(value);if(i!==-1){$item.remove();if($item.hasClass('active')){idx=self.$activeItems.indexOf($item[0]);self.$activeItems.splice(idx,1);}self.items.splice(i,1);self.lastQuery=null;if(!self.settings.persist&&self.userOptions.hasOwnProperty(value)){self.removeOption(value,silent);}if(i<self.caretPos){self.setCaret(self.caretPos-1);}self.refreshState();self.updatePlaceholder();self.updateOriginalInput({silent:silent});self.positionDropdown();self.trigger('item_remove',value,$item);}},/**
		 * Invokes the `create` method provided in the
		 * selectize options that should provide the data
		 * for the new item, given the user input.
		 *
		 * Once this completes, it will be added
		 * to the item list.
		 *
		 * @param {string} value
		 * @param {boolean} [triggerDropdown]
		 * @param {function} [callback]
		 * @return {boolean}
		 */createItem:function(input,triggerDropdown){var self=this;var caret=self.caretPos;input=input||$.trim(self.$control_input.val()||'');var callback=arguments[arguments.length-1];if(typeof callback!=='function')callback=function(){};if(typeof triggerDropdown!=='boolean'){triggerDropdown=true;}if(!self.canCreate(input)){callback();return false;}self.lock();var setup=typeof self.settings.create==='function'?this.settings.create:function(input){var data={};data[self.settings.labelField]=input;data[self.settings.valueField]=input;return data;};var create=once(function(data){self.unlock();if(!data||typeof data!=='object')return callback();var value=hash_key(data[self.settings.valueField]);if(typeof value!=='string')return callback();self.setTextboxValue('');self.addOption(data);self.setCaret(caret);self.addItem(value);self.refreshOptions(triggerDropdown&&self.settings.mode!=='single');callback(data);});var output=setup.apply(this,[input,create]);if(typeof output!=='undefined'){create(output);}return true;},/**
		 * Re-renders the selected item lists.
		 */refreshItems:function(){this.lastQuery=null;if(this.isSetup){this.addItem(this.items);}this.refreshState();this.updateOriginalInput();},/**
		 * Updates all state-dependent attributes
		 * and CSS classes.
		 */refreshState:function(){this.refreshValidityState();this.refreshClasses();},/**
		 * Update the `required` attribute of both input and control input.
		 *
		 * The `required` property needs to be activated on the control input
		 * for the error to be displayed at the right place. `required` also
		 * needs to be temporarily deactivated on the input since the input is
		 * hidden and can't show errors.
		 */refreshValidityState:function(){if(!this.isRequired)return false;var invalid=!this.items.length;this.isInvalid=invalid;this.$control_input.prop('required',invalid);this.$input.prop('required',!invalid);},/**
		 * Updates all state-dependent CSS classes.
		 */refreshClasses:function(){var self=this;var isFull=self.isFull();var isLocked=self.isLocked;self.$wrapper.toggleClass('rtl',self.rtl);self.$control.toggleClass('focus',self.isFocused).toggleClass('disabled',self.isDisabled).toggleClass('required',self.isRequired).toggleClass('invalid',self.isInvalid).toggleClass('locked',isLocked).toggleClass('full',isFull).toggleClass('not-full',!isFull).toggleClass('input-active',self.isFocused&&!self.isInputHidden).toggleClass('dropdown-active',self.isOpen).toggleClass('has-options',!$.isEmptyObject(self.options)).toggleClass('has-items',self.items.length>0);self.$control_input.data('grow',!isFull&&!isLocked);},/**
		 * Determines whether or not more items can be added
		 * to the control without exceeding the user-defined maximum.
		 *
		 * @returns {boolean}
		 */isFull:function(){return this.settings.maxItems!==null&&this.items.length>=this.settings.maxItems;},/**
		 * Refreshes the original <select> or <input>
		 * element to reflect the current state.
		 */updateOriginalInput:function(opts){var i,n,options,label,self=this;opts=opts||{};if(self.tagType===TAG_SELECT){options=[];for(i=0,n=self.items.length;i<n;i++){label=self.options[self.items[i]][self.settings.labelField]||'';options.push('<option value="'+escape_html(self.items[i])+'" selected="selected">'+escape_html(label)+'</option>');}if(!options.length&&!this.$input.attr('multiple')){options.push('<option value="" selected="selected"></option>');}self.$input.html(options.join(''));}else{self.$input.val(self.getValue());self.$input.attr('value',self.$input.val());}if(self.isSetup){if(!opts.silent){self.trigger('change',self.$input.val());}}},/**
		 * Shows/hide the input placeholder depending
		 * on if there items in the list already.
		 */updatePlaceholder:function(){if(!this.settings.placeholder)return;var $input=this.$control_input;if(this.items.length){$input.removeAttr('placeholder');}else{$input.attr('placeholder',this.settings.placeholder);}$input.triggerHandler('update',{force:true});},/**
		 * Shows the autocomplete dropdown containing
		 * the available options.
		 */open:function(){var self=this;if(self.isLocked||self.isOpen||self.settings.mode==='multi'&&self.isFull())return;self.focus();self.isOpen=true;self.refreshState();self.$dropdown.css({visibility:'hidden',display:'block'});self.positionDropdown();self.$dropdown.css({visibility:'visible'});self.trigger('dropdown_open',self.$dropdown);},/**
		 * Closes the autocomplete dropdown menu.
		 */close:function(){var self=this;var trigger=self.isOpen;if(self.settings.mode==='single'&&self.items.length){self.hideInput();// Do not trigger blur while inside a blur event,
// this fixes some weird tabbing behavior in FF and IE.
// See #1164
if(!self.isBlurring){self.$control_input.blur();// close keyboard on iOS
}}self.isOpen=false;self.$dropdown.hide();self.setActiveOption(null);self.refreshState();if(trigger)self.trigger('dropdown_close',self.$dropdown);},/**
		 * Calculates and applies the appropriate
		 * position of the dropdown.
		 */positionDropdown:function(){var $control=this.$control;var offset=this.settings.dropdownParent==='body'?$control.offset():$control.position();offset.top+=$control.outerHeight(true);this.$dropdown.css({width:$control[0].getBoundingClientRect().width,top:offset.top,left:offset.left});},/**
		 * Resets / clears all selected items
		 * from the control.
		 *
		 * @param {boolean} silent
		 */clear:function(silent){var self=this;if(!self.items.length)return;self.$control.children(':not(input)').remove();self.items=[];self.lastQuery=null;self.setCaret(0);self.setActiveItem(null);self.updatePlaceholder();self.updateOriginalInput({silent:silent});self.refreshState();self.showInput();self.trigger('clear');},/**
		 * A helper method for inserting an element
		 * at the current caret position.
		 *
		 * @param {object} $el
		 */insertAtCaret:function($el){var caret=Math.min(this.caretPos,this.items.length);var el=$el[0];var target=this.buffer||this.$control[0];if(caret===0){target.insertBefore(el,target.firstChild);}else{target.insertBefore(el,target.childNodes[caret]);}this.setCaret(caret+1);},/**
		 * Removes the current selected item(s).
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */deleteSelection:function(e){var i,n,direction,selection,values,caret,option_select,$option_select,$tail;var self=this;direction=e&&e.keyCode===KEY_BACKSPACE?-1:1;selection=getSelection(self.$control_input[0]);if(self.$activeOption&&!self.settings.hideSelected){option_select=self.getAdjacentOption(self.$activeOption,-1).attr('data-value');}// determine items that will be removed
values=[];if(self.$activeItems.length){$tail=self.$control.children('.active:'+(direction>0?'last':'first'));caret=self.$control.children(':not(input)').index($tail);if(direction>0){caret++;}for(i=0,n=self.$activeItems.length;i<n;i++){values.push($(self.$activeItems[i]).attr('data-value'));}if(e){e.preventDefault();e.stopPropagation();}}else if((self.isFocused||self.settings.mode==='single')&&self.items.length){if(direction<0&&selection.start===0&&selection.length===0){values.push(self.items[self.caretPos-1]);}else if(direction>0&&selection.start===self.$control_input.val().length){values.push(self.items[self.caretPos]);}}// allow the callback to abort
if(!values.length||typeof self.settings.onDelete==='function'&&self.settings.onDelete.apply(self,[values])===false){return false;}// perform removal
if(typeof caret!=='undefined'){self.setCaret(caret);}while(values.length){self.removeItem(values.pop());}self.showInput();self.positionDropdown();self.refreshOptions(true);// select previous option
if(option_select){$option_select=self.getOption(option_select);if($option_select.length){self.setActiveOption($option_select);}}return true;},/**
		 * Selects the previous / next item (depending
		 * on the `direction` argument).
		 *
		 * > 0 - right
		 * < 0 - left
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */advanceSelection:function(direction,e){var tail,selection,idx,valueLength,cursorAtEdge,$tail;var self=this;if(direction===0)return;if(self.rtl)direction*=-1;tail=direction>0?'last':'first';selection=getSelection(self.$control_input[0]);if(self.isFocused&&!self.isInputHidden){valueLength=self.$control_input.val().length;cursorAtEdge=direction<0?selection.start===0&&selection.length===0:selection.start===valueLength;if(cursorAtEdge&&!valueLength){self.advanceCaret(direction,e);}}else{$tail=self.$control.children('.active:'+tail);if($tail.length){idx=self.$control.children(':not(input)').index($tail);self.setActiveItem(null);self.setCaret(direction>0?idx+1:idx);}}},/**
		 * Moves the caret left / right.
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */advanceCaret:function(direction,e){var self=this,fn,$adj;if(direction===0)return;fn=direction>0?'next':'prev';if(self.isShiftDown){$adj=self.$control_input[fn]();if($adj.length){self.hideInput();self.setActiveItem($adj);e&&e.preventDefault();}}else{self.setCaret(self.caretPos+direction);}},/**
		 * Moves the caret to the specified index.
		 *
		 * @param {int} i
		 */setCaret:function(i){var self=this;if(self.settings.mode==='single'){i=self.items.length;}else{i=Math.max(0,Math.min(self.items.length,i));}if(!self.isPending){// the input must be moved by leaving it in place and moving the
// siblings, due to the fact that focus cannot be restored once lost
// on mobile webkit devices
var j,n,fn,$children,$child;$children=self.$control.children(':not(input)');for(j=0,n=$children.length;j<n;j++){$child=$($children[j]).detach();if(j<i){self.$control_input.before($child);}else{self.$control.append($child);}}}self.caretPos=i;},/**
		 * Disables user input on the control. Used while
		 * items are being asynchronously created.
		 */lock:function(){this.close();this.isLocked=true;this.refreshState();},/**
		 * Re-enables user input on the control.
		 */unlock:function(){this.isLocked=false;this.refreshState();},/**
		 * Disables user input on the control completely.
		 * While disabled, it cannot receive focus.
		 */disable:function(){var self=this;self.$input.prop('disabled',true);self.$control_input.prop('disabled',true).prop('tabindex',-1);self.isDisabled=true;self.lock();},/**
		 * Enables the control so that it can respond
		 * to focus and user input.
		 */enable:function(){var self=this;self.$input.prop('disabled',false);self.$control_input.prop('disabled',false).prop('tabindex',self.tabIndex);self.isDisabled=false;self.unlock();},/**
		 * Completely destroys the control and
		 * unbinds all event listeners so that it can
		 * be garbage collected.
		 */destroy:function(){var self=this;var eventNS=self.eventNS;var revertSettings=self.revertSettings;self.trigger('destroy');self.off();self.$wrapper.remove();self.$dropdown.remove();self.$input.html('').append(revertSettings.$children).removeAttr('tabindex').removeClass('selectized').attr({tabindex:revertSettings.tabindex}).show();self.$control_input.removeData('grow');self.$input.removeData('selectize');if(--Selectize.count==0&&Selectize.$testInput){Selectize.$testInput.remove();Selectize.$testInput=undefined;}$(window).off(eventNS);$(document).off(eventNS);$(document.body).off(eventNS);delete self.$input[0].selectize;},/**
		 * A helper method for rendering "item" and
		 * "option" templates, given the data.
		 *
		 * @param {string} templateName
		 * @param {object} data
		 * @returns {string}
		 */render:function(templateName,data){var value,id,label;var html='';var cache=false;var self=this;var regex_tag=/^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;if(templateName==='option'||templateName==='item'){value=hash_key(data[self.settings.valueField]);cache=!!value;}// pull markup from cache if it exists
if(cache){if(!isset(self.renderCache[templateName])){self.renderCache[templateName]={};}if(self.renderCache[templateName].hasOwnProperty(value)){return self.renderCache[templateName][value];}}// render markup
html=$(self.settings.render[templateName].apply(this,[data,escape_html]));// add mandatory attributes
if(templateName==='option'||templateName==='option_create'){if(!data[self.settings.disabledField]){html.attr('data-selectable','');}}else if(templateName==='optgroup'){id=data[self.settings.optgroupValueField]||'';html.attr('data-group',id);if(data[self.settings.disabledField]){html.attr('data-disabled','');}}if(templateName==='option'||templateName==='item'){html.attr('data-value',value||'');}// update cache
if(cache){self.renderCache[templateName][value]=html[0];}return html[0];},/**
		 * Clears the render cache for a template. If
		 * no template is given, clears all render
		 * caches.
		 *
		 * @param {string} templateName
		 */clearCache:function(templateName){var self=this;if(typeof templateName==='undefined'){self.renderCache={};}else{delete self.renderCache[templateName];}},/**
		 * Determines whether or not to display the
		 * create item prompt, given a user input.
		 *
		 * @param {string} input
		 * @return {boolean}
		 */canCreate:function(input){var self=this;if(!self.settings.create)return false;var filter=self.settings.createFilter;return input.length&&(typeof filter!=='function'||filter.apply(self,[input]))&&(typeof filter!=='string'||new RegExp(filter).test(input))&&(!(filter instanceof RegExp)||filter.test(input));}});Selectize.count=0;Selectize.defaults={options:[],optgroups:[],plugins:[],delimiter:',',splitOn:null,// regexp or string for splitting up values from a paste command
persist:true,diacritics:true,create:false,createOnBlur:false,createFilter:null,highlight:true,openOnFocus:true,maxOptions:1000,maxItems:null,hideSelected:null,addPrecedence:false,selectOnTab:false,preload:false,allowEmptyOption:false,closeAfterSelect:false,scrollDuration:60,loadThrottle:300,loadingClass:'loading',dataAttr:'data-data',optgroupField:'optgroup',valueField:'value',labelField:'text',disabledField:'disabled',optgroupLabelField:'label',optgroupValueField:'value',lockOptgroupOrder:false,sortField:'$order',searchField:['text'],searchConjunction:'and',mode:null,wrapperClass:'selectize-control',inputClass:'selectize-input',dropdownClass:'selectize-dropdown',dropdownContentClass:'selectize-dropdown-content',dropdownParent:null,copyClassesToDropdown:true,/*
		load                 : null, // function(query, callback) { ... }
		score                : null, // function(search) { ... }
		onInitialize         : null, // function() { ... }
		onChange             : null, // function(value) { ... }
		onItemAdd            : null, // function(value, $item) { ... }
		onItemRemove         : null, // function(value) { ... }
		onClear              : null, // function() { ... }
		onOptionAdd          : null, // function(value, data) { ... }
		onOptionRemove       : null, // function(value) { ... }
		onOptionClear        : null, // function() { ... }
		onOptionGroupAdd     : null, // function(id, data) { ... }
		onOptionGroupRemove  : null, // function(id) { ... }
		onOptionGroupClear   : null, // function() { ... }
		onDropdownOpen       : null, // function($dropdown) { ... }
		onDropdownClose      : null, // function($dropdown) { ... }
		onType               : null, // function(str) { ... }
		onDelete             : null, // function(values) { ... }
		*/render:{/*
			item: null,
			optgroup: null,
			optgroup_header: null,
			option: null,
			option_create: null
			*/}};$.fn.selectize=function(settings_user){var defaults=$.fn.selectize.defaults;var settings=$.extend({},defaults,settings_user);var attr_data=settings.dataAttr;var field_label=settings.labelField;var field_value=settings.valueField;var field_disabled=settings.disabledField;var field_optgroup=settings.optgroupField;var field_optgroup_label=settings.optgroupLabelField;var field_optgroup_value=settings.optgroupValueField;/**
		 * Initializes selectize from a <input type="text"> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */var init_textbox=function($input,settings_element){var i,n,values,option;var data_raw=$input.attr(attr_data);if(!data_raw){var value=$.trim($input.val()||'');if(!settings.allowEmptyOption&&!value.length)return;values=value.split(settings.delimiter);for(i=0,n=values.length;i<n;i++){option={};option[field_label]=values[i];option[field_value]=values[i];settings_element.options.push(option);}settings_element.items=values;}else{settings_element.options=JSON.parse(data_raw);for(i=0,n=settings_element.options.length;i<n;i++){settings_element.items.push(settings_element.options[i][field_value]);}}};/**
		 * Initializes selectize from a <select> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */var init_select=function($input,settings_element){var i,n,tagName,$children,order=0;var options=settings_element.options;var optionsMap={};var readData=function($el){var data=attr_data&&$el.attr(attr_data);if(typeof data==='string'&&data.length){return JSON.parse(data);}return null;};var addOption=function($option,group){$option=$($option);var value=hash_key($option.val());if(!value&&!settings.allowEmptyOption)return;// if the option already exists, it's probably been
// duplicated in another optgroup. in this case, push
// the current group to the "optgroup" property on the
// existing option so that it's rendered in both places.
if(optionsMap.hasOwnProperty(value)){if(group){var arr=optionsMap[value][field_optgroup];if(!arr){optionsMap[value][field_optgroup]=group;}else if(!$.isArray(arr)){optionsMap[value][field_optgroup]=[arr,group];}else{arr.push(group);}}return;}var option=readData($option)||{};option[field_label]=option[field_label]||$option.text();option[field_value]=option[field_value]||value;option[field_disabled]=option[field_disabled]||$option.prop('disabled');option[field_optgroup]=option[field_optgroup]||group;optionsMap[value]=option;options.push(option);if($option.is(':selected')){settings_element.items.push(value);}};var addGroup=function($optgroup){var i,n,id,optgroup,$options;$optgroup=$($optgroup);id=$optgroup.attr('label');if(id){optgroup=readData($optgroup)||{};optgroup[field_optgroup_label]=id;optgroup[field_optgroup_value]=id;optgroup[field_disabled]=$optgroup.prop('disabled');settings_element.optgroups.push(optgroup);}$options=$('option',$optgroup);for(i=0,n=$options.length;i<n;i++){addOption($options[i],id);}};settings_element.maxItems=$input.attr('multiple')?null:1;$children=$input.children();for(i=0,n=$children.length;i<n;i++){tagName=$children[i].tagName.toLowerCase();if(tagName==='optgroup'){addGroup($children[i]);}else if(tagName==='option'){addOption($children[i]);}}};return this.each(function(){if(this.selectize)return;var instance;var $input=$(this);var tag_name=this.tagName.toLowerCase();var placeholder=$input.attr('placeholder')||$input.attr('data-placeholder');if(!placeholder&&!settings.allowEmptyOption){placeholder=$input.children('option[value=""]').text();}var settings_element={'placeholder':placeholder,'options':[],'optgroups':[],'items':[]};if(tag_name==='select'){init_select($input,settings_element);}else{init_textbox($input,settings_element);}instance=new Selectize($input,$.extend(true,{},defaults,settings_element,settings_user));});};$.fn.selectize.defaults=Selectize.defaults;$.fn.selectize.support={validity:SUPPORTS_VALIDITY_API};Selectize.define('drag_drop',function(options){if(!$.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if(this.settings.mode!=='multi')return;var self=this;self.lock=function(){var original=self.lock;return function(){var sortable=self.$control.data('sortable');if(sortable)sortable.disable();return original.apply(self,arguments);};}();self.unlock=function(){var original=self.unlock;return function(){var sortable=self.$control.data('sortable');if(sortable)sortable.enable();return original.apply(self,arguments);};}();self.setup=function(){var original=self.setup;return function(){original.apply(this,arguments);var $control=self.$control.sortable({items:'[data-value]',forcePlaceholderSize:true,disabled:self.isLocked,start:function(e,ui){ui.placeholder.css('width',ui.helper.css('width'));$control.css({overflow:'visible'});},stop:function(){$control.css({overflow:'hidden'});var active=self.$activeItems?self.$activeItems.slice():null;var values=[];$control.children('[data-value]').each(function(){values.push($(this).attr('data-value'));});self.setValue(values);self.setActiveItem(active);}});};}();});Selectize.define('dropdown_header',function(options){var self=this;options=$.extend({title:'Untitled',headerClass:'selectize-dropdown-header',titleRowClass:'selectize-dropdown-header-title',labelClass:'selectize-dropdown-header-label',closeClass:'selectize-dropdown-header-close',html:function(data){return'<div class="'+data.headerClass+'">'+'<div class="'+data.titleRowClass+'">'+'<span class="'+data.labelClass+'">'+data.title+'</span>'+'<a href="javascript:void(0)" class="'+data.closeClass+'">&times;</a>'+'</div>'+'</div>';}},options);self.setup=function(){var original=self.setup;return function(){original.apply(self,arguments);self.$dropdown_header=$(options.html(options));self.$dropdown.prepend(self.$dropdown_header);};}();});Selectize.define('optgroup_columns',function(options){var self=this;options=$.extend({equalizeWidth:true,equalizeHeight:true},options);this.getAdjacentOption=function($option,direction){var $options=$option.closest('[data-group]').find('[data-selectable]');var index=$options.index($option)+direction;return index>=0&&index<$options.length?$options.eq(index):$();};this.onKeyDown=function(){var original=self.onKeyDown;return function(e){var index,$option,$options,$optgroup;if(this.isOpen&&(e.keyCode===KEY_LEFT||e.keyCode===KEY_RIGHT)){self.ignoreHover=true;$optgroup=this.$activeOption.closest('[data-group]');index=$optgroup.find('[data-selectable]').index(this.$activeOption);if(e.keyCode===KEY_LEFT){$optgroup=$optgroup.prev('[data-group]');}else{$optgroup=$optgroup.next('[data-group]');}$options=$optgroup.find('[data-selectable]');$option=$options.eq(Math.min($options.length-1,index));if($option.length){this.setActiveOption($option);}return;}return original.apply(this,arguments);};}();var getScrollbarWidth=function(){var div;var width=getScrollbarWidth.width;var doc=document;if(typeof width==='undefined'){div=doc.createElement('div');div.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';div=div.firstChild;doc.body.appendChild(div);width=getScrollbarWidth.width=div.offsetWidth-div.clientWidth;doc.body.removeChild(div);}return width;};var equalizeSizes=function(){var i,n,height_max,width,width_last,width_parent,$optgroups;$optgroups=$('[data-group]',self.$dropdown_content);n=$optgroups.length;if(!n||!self.$dropdown_content.width())return;if(options.equalizeHeight){height_max=0;for(i=0;i<n;i++){height_max=Math.max(height_max,$optgroups.eq(i).height());}$optgroups.css({height:height_max});}if(options.equalizeWidth){width_parent=self.$dropdown_content.innerWidth()-getScrollbarWidth();width=Math.round(width_parent/n);$optgroups.css({width:width});if(n>1){width_last=width_parent-width*(n-1);$optgroups.eq(n-1).css({width:width_last});}}};if(options.equalizeHeight||options.equalizeWidth){hook.after(this,'positionDropdown',equalizeSizes);hook.after(this,'refreshOptions',equalizeSizes);}});Selectize.define('remove_button',function(options){options=$.extend({label:'&times;',title:'Remove',className:'remove',append:true},options);var singleClose=function(thisRef,options){options.className='remove-single';var self=thisRef;var html='<a href="javascript:void(0)" class="'+options.className+'" tabindex="-1" title="'+escape_html(options.title)+'">'+options.label+'</a>';/**
				 * Appends an element as a child (with raw HTML).
				 *
				 * @param {string} html_container
				 * @param {string} html_element
				 * @return {string}
				 */var append=function(html_container,html_element){return $('<span>').append(html_container).append(html_element);};thisRef.setup=function(){var original=self.setup;return function(){// override the item rendering method to add the button to each
if(options.append){var id=$(self.$input.context).attr('id');var selectizer=$('#'+id);var render_item=self.settings.render.item;self.settings.render.item=function(data){return append(render_item.apply(thisRef,arguments),html);};}original.apply(thisRef,arguments);// add event listener
thisRef.$control.on('click','.'+options.className,function(e){e.preventDefault();if(self.isLocked)return;self.clear();});};}();};var multiClose=function(thisRef,options){var self=thisRef;var html='<a href="javascript:void(0)" class="'+options.className+'" tabindex="-1" title="'+escape_html(options.title)+'">'+options.label+'</a>';/**
				 * Appends an element as a child (with raw HTML).
				 *
				 * @param {string} html_container
				 * @param {string} html_element
				 * @return {string}
				 */var append=function(html_container,html_element){var pos=html_container.search(/(<\/[^>]+>\s*)$/);return html_container.substring(0,pos)+html_element+html_container.substring(pos);};thisRef.setup=function(){var original=self.setup;return function(){// override the item rendering method to add the button to each
if(options.append){var render_item=self.settings.render.item;self.settings.render.item=function(data){return append(render_item.apply(thisRef,arguments),html);};}original.apply(thisRef,arguments);// add event listener
thisRef.$control.on('click','.'+options.className,function(e){e.preventDefault();if(self.isLocked)return;var $item=$(e.currentTarget).parent();self.setActiveItem($item);if(self.deleteSelection()){self.setCaret(self.items.length);}});};}();};if(this.settings.mode==='single'){singleClose(this,options);return;}else{multiClose(this,options);}});Selectize.define('restore_on_backspace',function(options){var self=this;options.text=options.text||function(option){return option[this.settings.labelField];};this.onKeyDown=function(){var original=self.onKeyDown;return function(e){var index,option;if(e.keyCode===KEY_BACKSPACE&&this.$control_input.val()===''&&!this.$activeItems.length){index=this.caretPos-1;if(index>=0&&index<this.items.length){option=this.options[this.items[index]];if(this.deleteSelection(e)){this.setTextboxValue(options.text.apply(this,[option]));this.refreshOptions(true);}e.preventDefault();return;}}return original.apply(this,arguments);};}();});return Selectize;});(function(){/**
     * The backspace key will not delete the selected item.
     */Selectize.define('disableDelete',function(options){this.deleteSelection=function(){//
};});})();(function(){Selectize.define('max_items',function(options){var self=this;options=$.extend({max:3,message:'Show :count more...',html:function(data,count){return'<a href="javascript:void(0)" class="selectize-show-more-items sp-description" '+'style="display:block; line-height: 18px; margin-bottom: 3px;">'+data.message.replace(':count',count)+'</a>';}},options);self.setup=function(){var original=self.setup;return function(){original.apply(self,arguments);// Too few items, don't bother doing anything.
if(self.items.length<=options.max){return;}var count=self.items.length-options.max;self.$show_more=$(options.html(options,count));self.$show_more.insertAfter(self.$control);self.$control.find('.item:gt('+(options.max-1)+')').hide();self.$show_more.on('click',function(){self.$control.find('.item').show();$(this).hide();});};}();});})();/*!
* @supportpal/sweetalert2 v11.6.13
* Released under the MIT License.
*/(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):(global=typeof globalThis!=='undefined'?globalThis:global||self,global.Sweetalert2=factory());})(this,function(){'use strict';/**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */var privateProps={awaitingPromise:new WeakMap(),promise:new WeakMap(),innerParams:new WeakMap(),domCache:new WeakMap()};const swalPrefix='swal2-';/**
   * @param {string[]} items
   * @returns {object}
   */const prefix=items=>{const result={};for(const i in items){result[items[i]]=swalPrefix+items[i];}return result;};const swalClasses=prefix(['container','shown','height-auto','iosfix','popup','modal','no-backdrop','no-transition','toast','toast-shown','show','hide','close','title','html-container','actions','confirm','deny','cancel','default-outline','footer','icon','icon-content','image','input','file','range','select','radio','checkbox','label','textarea','inputerror','input-label','validation-message','progress-steps','active-progress-step','progress-step','progress-step-line','loader','loading','styled','top','top-start','top-end','top-left','top-right','center','center-start','center-end','center-left','center-right','bottom','bottom-start','bottom-end','bottom-left','bottom-right','grow-row','grow-column','grow-fullscreen','rtl','timer-progress-bar','timer-progress-bar-container','scrollbar-measure','icon-success','icon-warning','icon-info','icon-question','icon-error']);const iconTypes=prefix(['success','warning','info','question','error']);const consolePrefix='SweetAlert2:';/**
   * Filter the unique values into a new array
   *
   * @param {Array} arr
   * @returns {Array}
   */const uniqueArray=arr=>{const result=[];for(let i=0;i<arr.length;i++){if(result.indexOf(arr[i])===-1){result.push(arr[i]);}}return result;};/**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */const capitalizeFirstLetter=str=>str.charAt(0).toUpperCase()+str.slice(1);/**
   * Standardize console warnings
   *
   * @param {string | Array} message
   */const warn=message=>{void 0;};/**
   * Standardize console errors
   *
   * @param {string} message
   */const error=message=>{void 0;};/**
   * Private global state for `warnOnce`
   *
   * @type {Array}
   * @private
   */const previousWarnOnceMessages=[];/**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */const warnOnce=message=>{if(!previousWarnOnceMessages.includes(message)){previousWarnOnceMessages.push(message);warn(message);}};/**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string} useInstead
   */const warnAboutDeprecation=(deprecatedParam,useInstead)=>{warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`);};/**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */const callIfFunction=arg=>typeof arg==='function'?arg():arg;/**
   * @param {any} arg
   * @returns {boolean}
   */const hasToPromiseFn=arg=>arg&&typeof arg.toPromise==='function';/**
   * @param {any} arg
   * @returns {Promise}
   */const asPromise=arg=>hasToPromiseFn(arg)?arg.toPromise():Promise.resolve(arg);/**
   * @param {any} arg
   * @returns {boolean}
   */const isPromise=arg=>arg&&Promise.resolve(arg)===arg;/**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */const getContainer=()=>document.body.querySelector(`.${swalClasses.container}`);/**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */const elementBySelector=selectorString=>{const container=getContainer();return container?container.querySelector(selectorString):null;};/**
   * @param {string} className
   * @returns {HTMLElement | null}
   */const elementByClass=className=>{return elementBySelector(`.${className}`);};/**
   * @returns {HTMLElement | null}
   */const getPopup=()=>elementByClass(swalClasses.popup);/**
   * @returns {HTMLElement | null}
   */const getIcon=()=>elementByClass(swalClasses.icon);/**
   * @returns {HTMLElement | null}
   */const getIconContent=()=>elementByClass(swalClasses['icon-content']);/**
   * @returns {HTMLElement | null}
   */const getTitle=()=>elementByClass(swalClasses.title);/**
   * @returns {HTMLElement | null}
   */const getHtmlContainer=()=>elementByClass(swalClasses['html-container']);/**
   * @returns {HTMLElement | null}
   */const getImage=()=>elementByClass(swalClasses.image);/**
   * @returns {HTMLElement | null}
   */const getProgressSteps$1=()=>elementByClass(swalClasses['progress-steps']);/**
   * @returns {HTMLElement | null}
   */const getValidationMessage=()=>elementByClass(swalClasses['validation-message']);/**
   * @returns {HTMLButtonElement | null}
   */const getConfirmButton=()=>/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`);/**
   * @returns {HTMLButtonElement | null}
   */const getCancelButton=()=>/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`);/**
   * @returns {HTMLButtonElement | null}
   */const getDenyButton=()=>/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`);/**
   * @returns {HTMLElement | null}
   */const getInputLabel=()=>elementByClass(swalClasses['input-label']);/**
   * @returns {HTMLElement | null}
   */const getLoader=()=>elementBySelector(`.${swalClasses.loader}`);/**
   * @returns {HTMLElement | null}
   */const getActions=()=>elementByClass(swalClasses.actions);/**
   * @returns {HTMLElement | null}
   */const getFooter=()=>elementByClass(swalClasses.footer);/**
   * @returns {HTMLElement | null}
   */const getTimerProgressBar=()=>elementByClass(swalClasses['timer-progress-bar']);/**
   * @returns {HTMLElement | null}
   */const getCloseButton=()=>elementByClass(swalClasses.close);// https://github.com/jkup/focusable/blob/master/index.js
const focusable=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;/**
   * @returns {HTMLElement[]}
   */const getFocusableElements=()=>{const focusableElementsWithTabindex=Array.from(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))// sort according to tabindex
.sort((a,b)=>{const tabindexA=parseInt(a.getAttribute('tabindex'));const tabindexB=parseInt(b.getAttribute('tabindex'));if(tabindexA>tabindexB){return 1;}else if(tabindexA<tabindexB){return-1;}return 0;});const otherFocusableElements=Array.from(getPopup().querySelectorAll(focusable)).filter(el=>el.getAttribute('tabindex')!=='-1');return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el=>isVisible$1(el));};/**
   * @returns {boolean}
   */const isModal=()=>{return hasClass(document.body,swalClasses.shown)&&!hasClass(document.body,swalClasses['toast-shown'])&&!hasClass(document.body,swalClasses['no-backdrop']);};/**
   * @returns {boolean}
   */const isToast=()=>{return getPopup()&&hasClass(getPopup(),swalClasses.toast);};/**
   * @returns {boolean}
   */const isLoading=()=>{return getPopup().hasAttribute('data-loading');};// Remember state in cases where opening and handling a modal will fiddle with it.
const states={previousBodyPadding:null};/**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */const setInnerHtml=(elem,html)=>{elem.textContent='';if(html){const parser=new DOMParser();const parsed=parser.parseFromString(html,`text/html`);Array.from(parsed.querySelector('head').childNodes).forEach(child=>{elem.appendChild(child);});Array.from(parsed.querySelector('body').childNodes).forEach(child=>{if(child instanceof HTMLVideoElement||child instanceof HTMLAudioElement){elem.appendChild(child.cloneNode(true));// https://github.com/sweetalert2/sweetalert2/issues/2507
}else{elem.appendChild(child);}});}};/**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */const hasClass=(elem,className)=>{if(!className){return false;}const classList=className.split(/\s+/);for(let i=0;i<classList.length;i++){if(!elem.classList.contains(classList[i])){return false;}}return true;};/**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */const removeCustomClasses=(elem,params)=>{Array.from(elem.classList).forEach(className=>{if(!Object.values(swalClasses).includes(className)&&!Object.values(iconTypes).includes(className)&&!Object.values(params.showClass).includes(className)){elem.classList.remove(className);}});};/**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */const applyCustomClass=(elem,params,className)=>{removeCustomClasses(elem,params);if(params.customClass&&params.customClass[className]){if(typeof params.customClass[className]!=='string'&&!params.customClass[className].forEach){warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`);return;}addClass(elem,params.customClass[className]);}};/**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass} inputClass
   * @returns {HTMLInputElement | null}
   */const getInput$1=(popup,inputClass)=>{if(!inputClass){return null;}switch(inputClass){case'select':case'textarea':case'file':return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);case'checkbox':return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);case'radio':return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`)||popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);case'range':return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);default:return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);}};/**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */const focusInput=input=>{input.focus();// place cursor at end of text in text input
if(input.type!=='file'){// http://stackoverflow.com/a/2345915
const val=input.value;input.value='';input.value=val;}};/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   * @param {boolean} condition
   */const toggleClass=(target,classList,condition)=>{if(!target||!classList){return;}if(typeof classList==='string'){classList=classList.split(/\s+/).filter(Boolean);}classList.forEach(className=>{if(Array.isArray(target)){target.forEach(elem=>{condition?elem.classList.add(className):elem.classList.remove(className);});}else{condition?target.classList.add(className):target.classList.remove(className);}});};/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */const addClass=(target,classList)=>{toggleClass(target,classList,true);};/**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */const removeClass=(target,classList)=>{toggleClass(target,classList,false);};/**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */const getDirectChildByClass=(elem,className)=>{const children=Array.from(elem.children);for(let i=0;i<children.length;i++){const child=children[i];if(child instanceof HTMLElement&&hasClass(child,className)){return child;}}};/**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */const applyNumericalStyle=(elem,property,value)=>{if(value===`${parseInt(value)}`){value=parseInt(value);}if(value||parseInt(value)===0){elem.style[property]=typeof value==='number'?`${value}px`:value;}else{elem.style.removeProperty(property);}};/**
   * @param {HTMLElement} elem
   * @param {string} display
   */const show=function(elem){let display=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'flex';elem.style.display=display;};/**
   * @param {HTMLElement} elem
   */const hide=elem=>{elem.style.display='none';};/**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */const setStyle=(parent,selector,property,value)=>{/** @type {HTMLElement} */const el=parent.querySelector(selector);if(el){el.style[property]=value;}};/**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */const toggle=function(elem,condition){let display=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'flex';condition?show(elem,display):hide(elem);};/**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */const isVisible$1=elem=>!!(elem&&(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length));/**
   * @returns {boolean}
   */const allButtonsAreHidden=()=>!isVisible$1(getConfirmButton())&&!isVisible$1(getDenyButton())&&!isVisible$1(getCancelButton());/**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */const isScrollable=elem=>!!(elem.scrollHeight>elem.clientHeight);/**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */const hasCssAnimation=elem=>{const style=window.getComputedStyle(elem);const animDuration=parseFloat(style.getPropertyValue('animation-duration')||'0');const transDuration=parseFloat(style.getPropertyValue('transition-duration')||'0');return animDuration>0||transDuration>0;};/**
   * @param {number} timer
   * @param {boolean} reset
   */const animateTimerProgressBar=function(timer){let reset=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;const timerProgressBar=getTimerProgressBar();if(isVisible$1(timerProgressBar)){if(reset){timerProgressBar.style.transition='none';timerProgressBar.style.width='100%';}setTimeout(()=>{timerProgressBar.style.transition=`width ${timer/1000}s linear`;timerProgressBar.style.width='0%';},10);}};const stopTimerProgressBar=()=>{const timerProgressBar=getTimerProgressBar();const timerProgressBarWidth=parseInt(window.getComputedStyle(timerProgressBar).width);timerProgressBar.style.removeProperty('transition');timerProgressBar.style.width='100%';const timerProgressBarFullWidth=parseInt(window.getComputedStyle(timerProgressBar).width);const timerProgressBarPercent=timerProgressBarWidth/timerProgressBarFullWidth*100;timerProgressBar.style.removeProperty('transition');timerProgressBar.style.width=`${timerProgressBarPercent}%`;};const RESTORE_FOCUS_TIMEOUT=100;/** @type {GlobalState} */const globalState={};const focusPreviousActiveElement=()=>{if(globalState.previousActiveElement instanceof HTMLElement){globalState.previousActiveElement.focus();globalState.previousActiveElement=null;}else if(document.body){document.body.focus();}};/**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise}
   */const restoreActiveElement=returnFocus=>{return new Promise(resolve=>{if(!returnFocus){return resolve();}const x=window.scrollX;const y=window.scrollY;globalState.restoreFocusTimeout=setTimeout(()=>{focusPreviousActiveElement();resolve();},RESTORE_FOCUS_TIMEOUT);// issues/900
window.scrollTo(x,y);});};/**
   * Detect Node env
   *
   * @returns {boolean}
   */const isNodeEnv=()=>typeof window==='undefined'||typeof document==='undefined';const sweetHTML=`
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses['html-container']}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses['progress-steps']}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses['html-container']}" id="${swalClasses['html-container']}"></div>
   <input class="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label for="${swalClasses.checkbox}" class="${swalClasses.checkbox}">
     <input type="checkbox" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses['validation-message']}" id="${swalClasses['validation-message']}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses['timer-progress-bar-container']}">
     <div class="${swalClasses['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,'');/**
   * @returns {boolean}
   */const resetOldContainer=()=>{const oldContainer=getContainer();if(!oldContainer){return false;}oldContainer.remove();removeClass([document.documentElement,document.body],[swalClasses['no-backdrop'],swalClasses['toast-shown'],swalClasses['has-column']]);return true;};const resetValidationMessage$1=()=>{globalState.currentInstance.resetValidationMessage();};const addInputChangeListeners=()=>{const popup=getPopup();const input=getDirectChildByClass(popup,swalClasses.input);const file=getDirectChildByClass(popup,swalClasses.file);/** @type {HTMLInputElement} */const range=popup.querySelector(`.${swalClasses.range} input`);/** @type {HTMLOutputElement} */const rangeOutput=popup.querySelector(`.${swalClasses.range} output`);const select=getDirectChildByClass(popup,swalClasses.select);/** @type {HTMLInputElement} */const checkbox=popup.querySelector(`.${swalClasses.checkbox} input`);const textarea=getDirectChildByClass(popup,swalClasses.textarea);input.oninput=resetValidationMessage$1;file.onchange=resetValidationMessage$1;select.onchange=resetValidationMessage$1;checkbox.onchange=resetValidationMessage$1;textarea.oninput=resetValidationMessage$1;range.oninput=()=>{resetValidationMessage$1();rangeOutput.value=range.value;};range.onchange=()=>{resetValidationMessage$1();rangeOutput.value=range.value;};};/**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */const getTarget=target=>typeof target==='string'?document.querySelector(target):target;/**
   * @param {SweetAlertOptions} params
   */const setupAccessibility=params=>{const popup=getPopup();popup.setAttribute('role',params.toast?'alert':'dialog');popup.setAttribute('aria-live',params.toast?'polite':'assertive');if(!params.toast){popup.setAttribute('aria-modal','true');}};/**
   * @param {HTMLElement} targetElement
   */const setupRTL=targetElement=>{if(window.getComputedStyle(targetElement).direction==='rtl'){addClass(getContainer(),swalClasses.rtl);}};/**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */const init=params=>{// Clean up the old popup container if it exists
const oldContainerExisted=resetOldContainer();/* istanbul ignore if */if(isNodeEnv()){error('SweetAlert2 requires document to initialize');return;}const container=document.createElement('div');container.className=swalClasses.container;if(oldContainerExisted){addClass(container,swalClasses['no-transition']);}setInnerHtml(container,sweetHTML);const targetElement=getTarget(params.target);targetElement.appendChild(container);setupAccessibility(params);setupRTL(targetElement);addInputChangeListeners();};/**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */const parseHtmlToContainer=(param,target)=>{// DOM element
if(param instanceof HTMLElement){target.appendChild(param);}// Object
else if(typeof param==='object'){handleObject(param,target);}// Plain string
else if(param){setInnerHtml(target,param);}};/**
   * @param {object} param
   * @param {HTMLElement} target
   */const handleObject=(param,target)=>{// JQuery element(s)
if(param.jquery){handleJqueryElem(target,param);}// For other objects use their string representation
else{setInnerHtml(target,param.toString());}};/**
   * @param {HTMLElement} target
   * @param {HTMLElement} elem
   */const handleJqueryElem=(target,elem)=>{target.textContent='';if(0 in elem){for(let i=0;(i in elem);i++){target.appendChild(elem[i].cloneNode(true));}}else{target.appendChild(elem.cloneNode(true));}};/**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */const animationEndEvent=(()=>{// Prevent run in Node env
/* istanbul ignore if */if(isNodeEnv()){return false;}const testEl=document.createElement('div');const transEndEventNames={WebkitAnimation:'webkitAnimationEnd',// Chrome, Safari and Opera
animation:'animationend'// Standard syntax
};for(const i in transEndEventNames){if(Object.prototype.hasOwnProperty.call(transEndEventNames,i)&&typeof testEl.style[i]!=='undefined'){return transEndEventNames[i];}}return false;})();/**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */const measureScrollbar=()=>{const scrollDiv=document.createElement('div');scrollDiv.className=swalClasses['scrollbar-measure'];document.body.appendChild(scrollDiv);const scrollbarWidth=scrollDiv.getBoundingClientRect().width-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);return scrollbarWidth;};/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const renderActions=(instance,params)=>{const actions=getActions();const loader=getLoader();// Actions (buttons) wrapper
if(!params.showConfirmButton&&!params.showDenyButton&&!params.showCancelButton){hide(actions);}else{show(actions);}// Custom class
applyCustomClass(actions,params,'actions');// Render all the buttons
renderButtons(actions,loader,params);// Loader
setInnerHtml(loader,params.loaderHtml);applyCustomClass(loader,params,'loader');};/**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */function renderButtons(actions,loader,params){const confirmButton=getConfirmButton();const denyButton=getDenyButton();const cancelButton=getCancelButton();// Render buttons
renderButton(confirmButton,'confirm',params);renderButton(denyButton,'deny',params);renderButton(cancelButton,'cancel',params);handleButtonsStyling(confirmButton,denyButton,cancelButton,params);if(params.reverseButtons){if(params.toast){actions.insertBefore(cancelButton,confirmButton);actions.insertBefore(denyButton,confirmButton);}else{actions.insertBefore(cancelButton,loader);actions.insertBefore(denyButton,loader);actions.insertBefore(confirmButton,loader);}}}/**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */function handleButtonsStyling(confirmButton,denyButton,cancelButton,params){if(!params.buttonsStyling){removeClass([confirmButton,denyButton,cancelButton],swalClasses.styled);return;}addClass([confirmButton,denyButton,cancelButton],swalClasses.styled);// Buttons background colors
if(params.confirmButtonColor){confirmButton.style.backgroundColor=params.confirmButtonColor;addClass(confirmButton,swalClasses['default-outline']);}if(params.denyButtonColor){denyButton.style.backgroundColor=params.denyButtonColor;addClass(denyButton,swalClasses['default-outline']);}if(params.cancelButtonColor){cancelButton.style.backgroundColor=params.cancelButtonColor;addClass(cancelButton,swalClasses['default-outline']);}}/**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */function renderButton(button,buttonType,params){toggle(button,params[`show${capitalizeFirstLetter(buttonType)}Button`],'inline-block');setInnerHtml(button,params[`${buttonType}ButtonText`]);// Set caption text
button.setAttribute('aria-label',params[`${buttonType}ButtonAriaLabel`]);// ARIA label
// Add buttons custom classes
button.className=swalClasses[buttonType];applyCustomClass(button,params,`${buttonType}Button`);addClass(button,params[`${buttonType}ButtonClass`]);}/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const renderCloseButton=(instance,params)=>{const closeButton=getCloseButton();setInnerHtml(closeButton,params.closeButtonHtml);// Custom class
applyCustomClass(closeButton,params,'closeButton');toggle(closeButton,params.showCloseButton);closeButton.setAttribute('aria-label',params.closeButtonAriaLabel);};/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const renderContainer=(instance,params)=>{const container=getContainer();if(!container){return;}handleBackdropParam(container,params.backdrop);handlePositionParam(container,params.position);handleGrowParam(container,params.grow);// Custom class
applyCustomClass(container,params,'container');};/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */function handleBackdropParam(container,backdrop){if(typeof backdrop==='string'){container.style.background=backdrop;}else if(!backdrop){addClass([document.documentElement,document.body],swalClasses['no-backdrop']);}}/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */function handlePositionParam(container,position){if(position in swalClasses){addClass(container,swalClasses[position]);}else{warn('The "position" parameter is not valid, defaulting to "center"');addClass(container,swalClasses.center);}}/**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */function handleGrowParam(container,grow){if(grow&&typeof grow==='string'){const growClass=`grow-${grow}`;if(growClass in swalClasses){addClass(container,swalClasses[growClass]);}}}/// <reference path="../../../../sweetalert2.d.ts"/>
/** @type {InputClass[]} */const inputClasses=['input','file','range','select','radio','checkbox','textarea'];/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const renderInput=(instance,params)=>{const popup=getPopup();const innerParams=privateProps.innerParams.get(instance);const rerender=!innerParams||params.input!==innerParams.input;inputClasses.forEach(inputClass=>{const inputContainer=getDirectChildByClass(popup,swalClasses[inputClass]);// set attributes
setAttributes(inputClass,params.inputAttributes);// set class
inputContainer.className=swalClasses[inputClass];if(rerender){hide(inputContainer);}});if(params.input){if(rerender){showInput(params);}// set custom class
setCustomClass(params);}};/**
   * @param {SweetAlertOptions} params
   */const showInput=params=>{if(!renderInputType[params.input]){error(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`);return;}const inputContainer=getInputContainer(params.input);const input=renderInputType[params.input](inputContainer,params);show(inputContainer);// input autofocus
setTimeout(()=>{focusInput(input);});};/**
   * @param {HTMLInputElement} input
   */const removeAttributes=input=>{for(let i=0;i<input.attributes.length;i++){const attrName=input.attributes[i].name;if(!['type','value','style'].includes(attrName)){input.removeAttribute(attrName);}}};/**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */const setAttributes=(inputClass,inputAttributes)=>{const input=getInput$1(getPopup(),inputClass);if(!input){return;}removeAttributes(input);for(const attr in inputAttributes){input.setAttribute(attr,inputAttributes[attr]);}};/**
   * @param {SweetAlertOptions} params
   */const setCustomClass=params=>{const inputContainer=getInputContainer(params.input);if(typeof params.customClass==='object'){addClass(inputContainer,params.customClass.input);}};/**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */const setInputPlaceholder=(input,params)=>{if(!input.placeholder||params.inputPlaceholder){input.placeholder=params.inputPlaceholder;}};/**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */const setInputLabel=(input,prependTo,params)=>{if(params.inputLabel){input.id=swalClasses.input;const label=document.createElement('label');const labelClass=swalClasses['input-label'];label.setAttribute('for',input.id);label.className=labelClass;if(typeof params.customClass==='object'){addClass(label,params.customClass.inputLabel);}label.innerText=params.inputLabel;prependTo.insertAdjacentElement('beforebegin',label);}};/**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */const getInputContainer=inputType=>{return getDirectChildByClass(getPopup(),swalClasses[inputType]||swalClasses.input);};/**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */const checkAndSetInputValue=(input,inputValue)=>{if(['string','number'].includes(typeof inputValue)){input.value=`${inputValue}`;}else if(!isPromise(inputValue)){warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);}};/** @type {Record<string, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */const renderInputType={};/**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */renderInputType.text=renderInputType.email=renderInputType.password=renderInputType.number=renderInputType.tel=renderInputType.url=(input,params)=>{checkAndSetInputValue(input,params.inputValue);setInputLabel(input,input,params);setInputPlaceholder(input,params);input.type=params.input;return input;};/**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */renderInputType.file=(input,params)=>{setInputLabel(input,input,params);setInputPlaceholder(input,params);return input;};/**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */renderInputType.range=(range,params)=>{const rangeInput=range.querySelector('input');const rangeOutput=range.querySelector('output');checkAndSetInputValue(rangeInput,params.inputValue);rangeInput.type=params.input;checkAndSetInputValue(rangeOutput,params.inputValue);setInputLabel(rangeInput,range,params);return range;};/**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */renderInputType.select=(select,params)=>{select.textContent='';if(params.inputPlaceholder){const placeholder=document.createElement('option');setInnerHtml(placeholder,params.inputPlaceholder);placeholder.value='';placeholder.disabled=true;placeholder.selected=true;select.appendChild(placeholder);}setInputLabel(select,select,params);return select;};/**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */renderInputType.radio=radio=>{radio.textContent='';return radio;};/**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */renderInputType.checkbox=(checkboxContainer,params)=>{const checkbox=getInput$1(getPopup(),'checkbox');checkbox.value='1';checkbox.id=swalClasses.checkbox;checkbox.checked=Boolean(params.inputValue);const label=checkboxContainer.querySelector('span');setInnerHtml(label,params.inputPlaceholder);return checkbox;};/**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */renderInputType.textarea=(textarea,params)=>{checkAndSetInputValue(textarea,params.inputValue);setInputPlaceholder(textarea,params);setInputLabel(textarea,textarea,params);/**
     * @param {HTMLElement} el
     * @returns {number}
     */const getMargin=el=>parseInt(window.getComputedStyle(el).marginLeft)+parseInt(window.getComputedStyle(el).marginRight);// https://github.com/sweetalert2/sweetalert2/issues/2291
setTimeout(()=>{// https://github.com/sweetalert2/sweetalert2/issues/1699
if('MutationObserver'in window){const initialPopupWidth=parseInt(window.getComputedStyle(getPopup()).width);const textareaResizeHandler=()=>{const textareaWidth=textarea.offsetWidth+getMargin(textarea);if(textareaWidth>initialPopupWidth){getPopup().style.width=`${textareaWidth}px`;}else{getPopup().style.width=null;}};new MutationObserver(textareaResizeHandler).observe(textarea,{attributes:true,attributeFilter:['style']});}});return textarea;};/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const renderContent=(instance,params)=>{const htmlContainer=getHtmlContainer();applyCustomClass(htmlContainer,params,'htmlContainer');// Content as HTML
if(params.html){parseHtmlToContainer(params.html,htmlContainer);show(htmlContainer,'block');}// Content as plain text
else if(params.text){htmlContainer.textContent=params.text;show(htmlContainer,'block');}// No content
else{hide(htmlContainer);}renderInput(instance,params);};/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const renderFooter=(instance,params)=>{const footer=getFooter();toggle(footer,params.footer);if(params.footer){parseHtmlToContainer(params.footer,footer);}// Custom class
applyCustomClass(footer,params,'footer');};/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const renderIcon=(instance,params)=>{const innerParams=privateProps.innerParams.get(instance);const icon=getIcon();// if the given icon already rendered, apply the styling without re-rendering the icon
if(innerParams&&params.icon===innerParams.icon){// Custom or default content
setContent(icon,params);applyStyles(icon,params);return;}if(!params.icon&&!params.iconHtml){hide(icon);return;}if(params.icon&&Object.keys(iconTypes).indexOf(params.icon)===-1){error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);hide(icon);return;}show(icon);// Custom or default content
setContent(icon,params);applyStyles(icon,params);// Animate icon
addClass(icon,params.showClass.icon);};/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */const applyStyles=(icon,params)=>{for(const iconType in iconTypes){if(params.icon!==iconType){removeClass(icon,iconTypes[iconType]);}}addClass(icon,iconTypes[params.icon]);// Icon color
setColor(icon,params);// Success icon background color
adjustSuccessIconBackgroundColor();// Custom class
applyCustomClass(icon,params,'icon');};// Adjust success icon background color to match the popup background color
const adjustSuccessIconBackgroundColor=()=>{const popup=getPopup();const popupBackgroundColor=window.getComputedStyle(popup).getPropertyValue('background-color');/** @type {NodeListOf<HTMLElement>} */const successIconParts=popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');for(let i=0;i<successIconParts.length;i++){successIconParts[i].style.backgroundColor=popupBackgroundColor;}};const successIconHtml=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;const errorIconHtml=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */const setContent=(icon,params)=>{let oldContent=icon.innerHTML;let newContent;if(params.iconHtml){newContent=iconContent(params.iconHtml);}else if(params.icon==='success'){newContent=successIconHtml;oldContent=oldContent.replace(/ style=".*?"/g,'');// undo adjustSuccessIconBackgroundColor()
}else if(params.icon==='error'){newContent=errorIconHtml;}else{const defaultIconHtml={question:'?',warning:'!',info:'i'};newContent=iconContent(defaultIconHtml[params.icon]);}if(oldContent.trim()!==newContent.trim()){setInnerHtml(icon,newContent);}};/**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */const setColor=(icon,params)=>{if(!params.iconColor){return;}icon.style.color=params.iconColor;icon.style.borderColor=params.iconColor;for(const sel of['.swal2-success-line-tip','.swal2-success-line-long','.swal2-x-mark-line-left','.swal2-x-mark-line-right']){setStyle(icon,sel,'backgroundColor',params.iconColor);}setStyle(icon,'.swal2-success-ring','borderColor',params.iconColor);};/**
   * @param {string} content
   * @returns {string}
   */const iconContent=content=>`<div class="${swalClasses['icon-content']}">${content}</div>`;/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const renderImage=(instance,params)=>{const image=getImage();if(!params.imageUrl){hide(image);return;}show(image,'');// Src, alt
image.setAttribute('src',params.imageUrl);image.setAttribute('alt',params.imageAlt);// Width, height
applyNumericalStyle(image,'width',params.imageWidth);applyNumericalStyle(image,'height',params.imageHeight);// Class
image.className=swalClasses.image;applyCustomClass(image,params,'image');};/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const renderPopup=(instance,params)=>{const container=getContainer();const popup=getPopup();// Width
// https://github.com/sweetalert2/sweetalert2/issues/2170
if(params.toast){applyNumericalStyle(container,'width',params.width);popup.style.width='100%';popup.insertBefore(getLoader(),getIcon());}else{applyNumericalStyle(popup,'width',params.width);}// Padding
applyNumericalStyle(popup,'padding',params.padding);// Color
if(params.color){popup.style.color=params.color;}// Background
if(params.background){popup.style.background=params.background;}hide(getValidationMessage());// Classes
addClasses$1(popup,params);};/**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */const addClasses$1=(popup,params)=>{// Default Class + showClass when updating Swal.update({})
popup.className=`${swalClasses.popup} ${isVisible$1(popup)?params.showClass.popup:''}`;if(params.toast){addClass([document.documentElement,document.body],swalClasses['toast-shown']);addClass(popup,swalClasses.toast);}else{addClass(popup,swalClasses.modal);}// Custom class
applyCustomClass(popup,params,'popup');if(typeof params.customClass==='string'){addClass(popup,params.customClass);}// Icon class (#1842)
if(params.icon){addClass(popup,swalClasses[`icon-${params.icon}`]);}};/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const renderProgressSteps=(instance,params)=>{const progressStepsContainer=getProgressSteps$1();if(!params.progressSteps||params.progressSteps.length===0){hide(progressStepsContainer);return;}show(progressStepsContainer);progressStepsContainer.textContent='';if(params.currentProgressStep>=params.progressSteps.length){warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length '+'(currentProgressStep like JS arrays starts from 0)');}params.progressSteps.forEach((step,index)=>{const stepEl=createStepElement(step);progressStepsContainer.appendChild(stepEl);if(index===params.currentProgressStep){addClass(stepEl,swalClasses['active-progress-step']);}if(index!==params.progressSteps.length-1){const lineEl=createLineElement(params);progressStepsContainer.appendChild(lineEl);}});};/**
   * @param {string} step
   * @returns {HTMLLIElement}
   */const createStepElement=step=>{const stepEl=document.createElement('li');addClass(stepEl,swalClasses['progress-step']);setInnerHtml(stepEl,step);return stepEl;};/**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */const createLineElement=params=>{const lineEl=document.createElement('li');addClass(lineEl,swalClasses['progress-step-line']);if(params.progressStepsDistance){applyNumericalStyle(lineEl,'width',params.progressStepsDistance);}return lineEl;};/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const renderTitle=(instance,params)=>{const title=getTitle();toggle(title,params.title||params.titleText,'block');if(params.title){parseHtmlToContainer(params.title,title);}if(params.titleText){title.innerText=params.titleText;}// Custom class
applyCustomClass(title,params,'title');};/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const render=(instance,params)=>{renderPopup(instance,params);renderContainer(instance,params);renderProgressSteps(instance,params);renderIcon(instance,params);renderImage(instance,params);renderTitle(instance,params);renderCloseButton(instance,params);renderContent(instance,params);renderActions(instance,params);renderFooter(instance,params);if(typeof params.didRender==='function'){params.didRender(getPopup());}};/**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */function hideLoading(){// do nothing if popup is closed
const innerParams=privateProps.innerParams.get(this);if(!innerParams){return;}const domCache=privateProps.domCache.get(this);hide(domCache.loader);if(isToast()){if(innerParams.icon){show(getIcon());}}else{showRelatedButton(domCache);}removeClass([domCache.popup,domCache.actions],swalClasses.loading);domCache.popup.removeAttribute('aria-busy');domCache.popup.removeAttribute('data-loading');domCache.confirmButton.disabled=false;domCache.denyButton.disabled=false;domCache.cancelButton.disabled=false;}const showRelatedButton=domCache=>{const buttonToReplace=domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));if(buttonToReplace.length){show(buttonToReplace[0],'inline-block');}else if(allButtonsAreHidden()){hide(domCache.actions);}};/**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @param {SweetAlert2} instance
   * @returns {HTMLElement | null}
   */function getInput(instance){const innerParams=privateProps.innerParams.get(instance||this);const domCache=privateProps.domCache.get(instance||this);if(!domCache){return null;}return getInput$1(domCache.popup,innerParams.input);}/*
   * Global function to determine if SweetAlert2 popup is shown
   */const isVisible=()=>{return isVisible$1(getPopup());};/*
   * Global function to click 'Confirm' button
   */const clickConfirm=()=>getConfirmButton()&&getConfirmButton().click();/*
   * Global function to click 'Deny' button
   */const clickDeny=()=>getDenyButton()&&getDenyButton().click();/*
   * Global function to click 'Cancel' button
   */const clickCancel=()=>getCancelButton()&&getCancelButton().click();const DismissReason=Object.freeze({cancel:'cancel',backdrop:'backdrop',close:'close',esc:'esc',timer:'timer'});/**
   * @param {GlobalState} globalState
   */const removeKeydownHandler=globalState=>{if(globalState.keydownTarget&&globalState.keydownHandlerAdded){globalState.keydownTarget.removeEventListener('keydown',globalState.keydownHandler,{capture:globalState.keydownListenerCapture});globalState.keydownHandlerAdded=false;}};/**
   * @param {SweetAlert2} instance
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */const addKeydownHandler=(instance,globalState,innerParams,dismissWith)=>{removeKeydownHandler(globalState);if(!innerParams.toast){globalState.keydownHandler=e=>keydownHandler(instance,e,dismissWith);globalState.keydownTarget=innerParams.keydownListenerCapture?window:getPopup();globalState.keydownListenerCapture=innerParams.keydownListenerCapture;globalState.keydownTarget.addEventListener('keydown',globalState.keydownHandler,{capture:globalState.keydownListenerCapture});globalState.keydownHandlerAdded=true;}};/**
   * @param {SweetAlertOptions} innerParams
   * @param {number} index
   * @param {number} increment
   */const setFocus=(innerParams,index,increment)=>{const focusableElements=getFocusableElements();// search for visible elements and select the next possible match
if(focusableElements.length){index=index+increment;// rollover to first item
if(index===focusableElements.length){index=0;// go to last item
}else if(index===-1){index=focusableElements.length-1;}return focusableElements[index].focus();}// no visible focusable elements, focus the popup
getPopup().focus();};const arrowKeysNextButton=['ArrowRight','ArrowDown'];const arrowKeysPreviousButton=['ArrowLeft','ArrowUp'];/**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} e
   * @param {function} dismissWith
   */const keydownHandler=(instance,e,dismissWith)=>{const innerParams=privateProps.innerParams.get(instance);if(!innerParams){return;// This instance has already been destroyed
}// Ignore keydown during IME composition
// https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
// https://github.com/sweetalert2/sweetalert2/issues/720
// https://github.com/sweetalert2/sweetalert2/issues/2406
if(e.isComposing||e.keyCode===229){return;}if(innerParams.stopKeydownPropagation){e.stopPropagation();}// ENTER
if(e.key==='Enter'){handleEnter(instance,e,innerParams);}// TAB
else if(e.key==='Tab'){handleTab(e,innerParams);}// ARROWS - switch focus between buttons
else if([...arrowKeysNextButton,...arrowKeysPreviousButton].includes(e.key)){handleArrows(e.key);}// ESC
else if(e.key==='Escape'){handleEsc(e,innerParams,dismissWith);}};/**
   * @param {SweetAlert2} instance
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   */const handleEnter=(instance,e,innerParams)=>{// https://github.com/sweetalert2/sweetalert2/issues/2386
if(!callIfFunction(innerParams.allowEnterKey)){return;}if(e.target&&instance.getInput()&&e.target instanceof HTMLElement&&e.target.outerHTML===instance.getInput().outerHTML){if(['textarea','file'].includes(innerParams.input)){return;// do not submit
}clickConfirm();e.preventDefault();}};/**
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   */const handleTab=(e,innerParams)=>{const targetElement=e.target;const focusableElements=getFocusableElements();let btnIndex=-1;for(let i=0;i<focusableElements.length;i++){if(targetElement===focusableElements[i]){btnIndex=i;break;}}// Cycle to the next button
if(!e.shiftKey){setFocus(innerParams,btnIndex,1);}// Cycle to the prev button
else{setFocus(innerParams,btnIndex,-1);}e.stopPropagation();e.preventDefault();};/**
   * @param {string} key
   */const handleArrows=key=>{const confirmButton=getConfirmButton();const denyButton=getDenyButton();const cancelButton=getCancelButton();/** @type HTMLElement[] */const buttons=[confirmButton,denyButton,cancelButton];if(document.activeElement instanceof HTMLElement&&!buttons.includes(document.activeElement)){return;}const sibling=arrowKeysNextButton.includes(key)?'nextElementSibling':'previousElementSibling';let buttonToFocus=document.activeElement;for(let i=0;i<getActions().children.length;i++){buttonToFocus=buttonToFocus[sibling];if(!buttonToFocus){return;}if(buttonToFocus instanceof HTMLButtonElement&&isVisible$1(buttonToFocus)){break;}}if(buttonToFocus instanceof HTMLButtonElement){buttonToFocus.focus();}};/**
   * @param {KeyboardEvent} e
   * @param {SweetAlertOptions} innerParams
   * @param {function} dismissWith
   */const handleEsc=(e,innerParams,dismissWith)=>{if(callIfFunction(innerParams.allowEscapeKey)){e.preventDefault();dismissWith(DismissReason.esc);}};/**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */var privateMethods={swalPromiseResolve:new WeakMap(),swalPromiseReject:new WeakMap()};// From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.
const setAriaHidden=()=>{const bodyChildren=Array.from(document.body.children);bodyChildren.forEach(el=>{if(el===getContainer()||el.contains(getContainer())){return;}if(el.hasAttribute('aria-hidden')){el.setAttribute('data-previous-aria-hidden',el.getAttribute('aria-hidden'));}el.setAttribute('aria-hidden','true');});};const unsetAriaHidden=()=>{const bodyChildren=Array.from(document.body.children);bodyChildren.forEach(el=>{if(el.hasAttribute('data-previous-aria-hidden')){el.setAttribute('aria-hidden',el.getAttribute('data-previous-aria-hidden'));el.removeAttribute('data-previous-aria-hidden');}else{el.removeAttribute('aria-hidden');}});};/* istanbul ignore file */ // Fix iOS scrolling http://stackoverflow.com/q/39626302
const iOSfix=()=>{const iOS=// @ts-ignore
/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1;if(iOS&&!hasClass(document.body,swalClasses.iosfix)){const offset=document.body.scrollTop;document.body.style.top=`${offset*-1}px`;addClass(document.body,swalClasses.iosfix);lockBodyScroll();addBottomPaddingForTallPopups();}};/**
   * https://github.com/sweetalert2/sweetalert2/issues/1948
   */const addBottomPaddingForTallPopups=()=>{const ua=navigator.userAgent;const iOS=!!ua.match(/iPad/i)||!!ua.match(/iPhone/i);const webkit=!!ua.match(/WebKit/i);const iOSSafari=iOS&&webkit&&!ua.match(/CriOS/i);if(iOSSafari){const bottomPanelHeight=44;if(getPopup().scrollHeight>window.innerHeight-bottomPanelHeight){getContainer().style.paddingBottom=`${bottomPanelHeight}px`;}}};/**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */const lockBodyScroll=()=>{const container=getContainer();let preventTouchMove;/**
     * @param {TouchEvent} e
     */container.ontouchstart=e=>{preventTouchMove=shouldPreventTouchMove(e);};/**
     * @param {TouchEvent} e
     */container.ontouchmove=e=>{if(preventTouchMove){e.preventDefault();e.stopPropagation();}};};/**
   * @param {TouchEvent} event
   * @returns {boolean}
   */const shouldPreventTouchMove=event=>{const target=event.target;const container=getContainer();if(isStylus(event)||isZoom(event)){return false;}if(target===container){return true;}if(!isScrollable(container)&&target instanceof HTMLElement&&target.tagName!=='INPUT'&&// #1603
target.tagName!=='TEXTAREA'&&// #2266
!(isScrollable(getHtmlContainer())&&// #1944
getHtmlContainer().contains(target))){return true;}return false;};/**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */const isStylus=event=>{return event.touches&&event.touches.length&&event.touches[0].touchType==='stylus';};/**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */const isZoom=event=>{return event.touches&&event.touches.length>1;};const undoIOSfix=()=>{if(hasClass(document.body,swalClasses.iosfix)){const offset=parseInt(document.body.style.top,10);removeClass(document.body,swalClasses.iosfix);document.body.style.top='';document.body.scrollTop=offset*-1;}};const fixScrollbar=()=>{// for queues, do not do this more than once
if(states.previousBodyPadding!==null){return;}// if the body has overflow
if(document.body.scrollHeight>window.innerHeight){// add padding so the content doesn't shift after removal of scrollbar
states.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));document.body.style.paddingRight=`${states.previousBodyPadding+measureScrollbar()}px`;}};const undoScrollbar=()=>{if(states.previousBodyPadding!==null){document.body.style.paddingRight=`${states.previousBodyPadding}px`;states.previousBodyPadding=null;}};/*
   * Instance method to close sweetAlert
   */function removePopupAndResetState(instance,container,returnFocus,didClose){if(isToast()){triggerDidCloseAndDispose(instance,didClose);}else{restoreActiveElement(returnFocus).then(()=>triggerDidCloseAndDispose(instance,didClose));removeKeydownHandler(globalState);}const isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);// workaround for #2088
// for some reason removing the container in Safari will scroll the document to bottom
if(isSafari){container.setAttribute('style','display:none !important');container.removeAttribute('class');container.innerHTML='';}else{container.remove();}if(isModal()){undoScrollbar();undoIOSfix();unsetAriaHidden();}removeBodyClasses();}function removeBodyClasses(){removeClass([document.documentElement,document.body],[swalClasses.shown,swalClasses['height-auto'],swalClasses['no-backdrop'],swalClasses['toast-shown']]);}function close(resolveValue){resolveValue=prepareResolveValue(resolveValue);const swalPromiseResolve=privateMethods.swalPromiseResolve.get(this);const didClose=triggerClosePopup(this);if(this.isAwaitingPromise()){// A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
if(!resolveValue.isDismissed){handleAwaitingPromise(this);swalPromiseResolve(resolveValue);}}else if(didClose){// Resolve Swal promise
swalPromiseResolve(resolveValue);}}function isAwaitingPromise(){return!!privateProps.awaitingPromise.get(this);}const triggerClosePopup=instance=>{const popup=getPopup();if(!popup){return false;}const innerParams=privateProps.innerParams.get(instance);if(!innerParams||hasClass(popup,innerParams.hideClass.popup)){return false;}removeClass(popup,innerParams.showClass.popup);addClass(popup,innerParams.hideClass.popup);const backdrop=getContainer();removeClass(backdrop,innerParams.showClass.backdrop);addClass(backdrop,innerParams.hideClass.backdrop);handlePopupAnimation(instance,popup,innerParams);return true;};function rejectPromise(error){const rejectPromise=privateMethods.swalPromiseReject.get(this);handleAwaitingPromise(this);if(rejectPromise){// Reject Swal promise
rejectPromise(error);}}const handleAwaitingPromise=instance=>{if(instance.isAwaitingPromise()){privateProps.awaitingPromise.delete(instance);// The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
if(!privateProps.innerParams.get(instance)){instance._destroy();}}};const prepareResolveValue=resolveValue=>{// When user calls Swal.close()
if(typeof resolveValue==='undefined'){return{isConfirmed:false,isDenied:false,isDismissed:true};}return Object.assign({isConfirmed:false,isDenied:false,isDismissed:false},resolveValue);};const handlePopupAnimation=(instance,popup,innerParams)=>{const container=getContainer();// If animation is supported, animate
const animationIsSupported=animationEndEvent&&hasCssAnimation(popup);if(typeof innerParams.willClose==='function'){innerParams.willClose(popup);}if(animationIsSupported){animatePopup(instance,popup,container,innerParams.returnFocus,innerParams.didClose);}else{// Otherwise, remove immediately
removePopupAndResetState(instance,container,innerParams.returnFocus,innerParams.didClose);}};const animatePopup=(instance,popup,container,returnFocus,didClose)=>{globalState.swalCloseEventFinishedCallback=removePopupAndResetState.bind(null,instance,container,returnFocus,didClose);popup.addEventListener(animationEndEvent,function(e){if(e.target===popup){globalState.swalCloseEventFinishedCallback();delete globalState.swalCloseEventFinishedCallback;}});};const triggerDidCloseAndDispose=(instance,didClose)=>{setTimeout(()=>{if(typeof didClose==='function'){didClose.bind(instance.params)();}instance._destroy();});};/**
   * @param {SweetAlert2} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */function setButtonsDisabled(instance,buttons,disabled){const domCache=privateProps.domCache.get(instance);buttons.forEach(button=>{domCache[button].disabled=disabled;});}/**
   * @param {HTMLInputElement} input
   * @param {boolean} disabled
   */function setInputDisabled(input,disabled){if(!input){return;}if(input.type==='radio'){const radiosContainer=input.parentNode.parentNode;const radios=radiosContainer.querySelectorAll('input');for(let i=0;i<radios.length;i++){radios[i].disabled=disabled;}}else{input.disabled=disabled;}}function enableButtons(){setButtonsDisabled(this,['confirmButton','denyButton','cancelButton'],false);}function disableButtons(){setButtonsDisabled(this,['confirmButton','denyButton','cancelButton'],true);}function enableInput(){setInputDisabled(this.getInput(),false);}function disableInput(){setInputDisabled(this.getInput(),true);}// Show block with validation message
function showValidationMessage(error){const domCache=privateProps.domCache.get(this);const params=privateProps.innerParams.get(this);setInnerHtml(domCache.validationMessage,error);domCache.validationMessage.className=swalClasses['validation-message'];if(params.customClass&&params.customClass.validationMessage){addClass(domCache.validationMessage,params.customClass.validationMessage);}show(domCache.validationMessage);const input=this.getInput();if(input){input.setAttribute('aria-invalid',true);input.setAttribute('aria-describedby',swalClasses['validation-message']);focusInput(input);addClass(input,swalClasses.inputerror);}}// Hide block with validation message
function resetValidationMessage(){const domCache=privateProps.domCache.get(this);if(domCache.validationMessage){hide(domCache.validationMessage);}const input=this.getInput();if(input){input.removeAttribute('aria-invalid');input.removeAttribute('aria-describedby');removeClass(input,swalClasses.inputerror);}}function getProgressSteps(){const domCache=privateProps.domCache.get(this);return domCache.progressSteps;}const defaultParams={title:'',titleText:'',text:'',html:'',footer:'',icon:undefined,iconColor:undefined,iconHtml:undefined,template:undefined,toast:false,showClass:{popup:'swal2-show',backdrop:'swal2-backdrop-show',icon:'swal2-icon-show'},hideClass:{popup:'swal2-hide',backdrop:'swal2-backdrop-hide',icon:'swal2-icon-hide'},customClass:{},target:'body',color:undefined,backdrop:true,heightAuto:true,allowOutsideClick:true,allowEscapeKey:true,allowEnterKey:true,stopKeydownPropagation:true,keydownListenerCapture:false,showConfirmButton:true,showDenyButton:false,showCancelButton:false,preConfirm:undefined,preDeny:undefined,confirmButtonText:'OK',confirmButtonAriaLabel:'',confirmButtonColor:undefined,denyButtonText:'No',denyButtonAriaLabel:'',denyButtonColor:undefined,cancelButtonText:'Cancel',cancelButtonAriaLabel:'',cancelButtonColor:undefined,buttonsStyling:true,reverseButtons:false,focusConfirm:true,focusDeny:false,focusCancel:false,returnFocus:true,showCloseButton:false,closeButtonHtml:'&times;',closeButtonAriaLabel:'Close this dialog',loaderHtml:'',showLoaderOnConfirm:false,showLoaderOnDeny:false,imageUrl:undefined,imageWidth:undefined,imageHeight:undefined,imageAlt:'',timer:undefined,timerProgressBar:false,width:undefined,padding:undefined,background:undefined,input:undefined,inputPlaceholder:'',inputLabel:'',inputValue:'',inputOptions:{},inputAutoTrim:true,inputAttributes:{},inputValidator:undefined,returnInputValueOnDeny:false,validationMessage:undefined,grow:false,position:'center',progressSteps:[],currentProgressStep:undefined,progressStepsDistance:undefined,willOpen:undefined,didOpen:undefined,didRender:undefined,willClose:undefined,didClose:undefined,didDestroy:undefined,scrollbarPadding:true};const updatableParams=['allowEscapeKey','allowOutsideClick','background','buttonsStyling','cancelButtonAriaLabel','cancelButtonColor','cancelButtonText','closeButtonAriaLabel','closeButtonHtml','color','confirmButtonAriaLabel','confirmButtonColor','confirmButtonText','currentProgressStep','customClass','denyButtonAriaLabel','denyButtonColor','denyButtonText','didClose','didDestroy','footer','hideClass','html','icon','iconColor','iconHtml','imageAlt','imageHeight','imageUrl','imageWidth','preConfirm','preDeny','progressSteps','returnFocus','reverseButtons','showCancelButton','showCloseButton','showConfirmButton','showDenyButton','text','title','titleText','willClose'];const deprecatedParams={};const toastIncompatibleParams=['allowOutsideClick','allowEnterKey','backdrop','focusConfirm','focusDeny','focusCancel','returnFocus','heightAuto','keydownListenerCapture'];/**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */const isValidParameter=paramName=>{return Object.prototype.hasOwnProperty.call(defaultParams,paramName);};/**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */const isUpdatableParameter=paramName=>{return updatableParams.indexOf(paramName)!==-1;};/**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */const isDeprecatedParameter=paramName=>{return deprecatedParams[paramName];};/**
   * @param {string} param
   */const checkIfParamIsValid=param=>{if(!isValidParameter(param)){warn(`Unknown parameter "${param}"`);}};/**
   * @param {string} param
   */const checkIfToastParamIsValid=param=>{if(toastIncompatibleParams.includes(param)){warn(`The parameter "${param}" is incompatible with toasts`);}};/**
   * @param {string} param
   */const checkIfParamIsDeprecated=param=>{if(isDeprecatedParameter(param)){warnAboutDeprecation(param,isDeprecatedParameter(param));}};/**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */const showWarningsForParams=params=>{if(params.backdrop===false&&params.allowOutsideClick){warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');}for(const param in params){checkIfParamIsValid(param);if(params.toast){checkIfToastParamIsValid(param);}checkIfParamIsDeprecated(param);}};/**
   * Updates popup parameters.
   */function update(params){const popup=getPopup();const innerParams=privateProps.innerParams.get(this);if(!popup||hasClass(popup,innerParams.hideClass.popup)){return warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);}const validUpdatableParams=filterValidParams(params);const updatedParams=Object.assign({},innerParams,validUpdatableParams);render(this,updatedParams);privateProps.innerParams.set(this,updatedParams);Object.defineProperties(this,{params:{value:Object.assign({},this.params,params),writable:false,enumerable:true}});}const filterValidParams=params=>{const validUpdatableParams={};Object.keys(params).forEach(param=>{if(isUpdatableParameter(param)){validUpdatableParams[param]=params[param];}else{warn(`Invalid parameter to update: ${param}`);}});return validUpdatableParams;};function _destroy(){const domCache=privateProps.domCache.get(this);const innerParams=privateProps.innerParams.get(this);if(!innerParams){disposeWeakMaps(this);// The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
return;// This instance has already been destroyed
}// Check if there is another Swal closing
if(domCache.popup&&globalState.swalCloseEventFinishedCallback){globalState.swalCloseEventFinishedCallback();delete globalState.swalCloseEventFinishedCallback;}if(typeof innerParams.didDestroy==='function'){innerParams.didDestroy();}disposeSwal(this);}/**
   * @param {SweetAlert2} instance
   */const disposeSwal=instance=>{disposeWeakMaps(instance);// Unset this.params so GC will dispose it (#1569)
// @ts-ignore
delete instance.params;// Unset globalState props so GC will dispose globalState (#1569)
delete globalState.keydownHandler;delete globalState.keydownTarget;// Unset currentInstance
delete globalState.currentInstance;};/**
   * @param {SweetAlert2} instance
   */const disposeWeakMaps=instance=>{// If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
// @ts-ignore
if(instance.isAwaitingPromise()){unsetWeakMaps(privateProps,instance);privateProps.awaitingPromise.set(instance,true);}else{unsetWeakMaps(privateMethods,instance);unsetWeakMaps(privateProps,instance);}};/**
   * @param {object} obj
   * @param {SweetAlert2} instance
   */const unsetWeakMaps=(obj,instance)=>{for(const i in obj){obj[i].delete(instance);}};var instanceMethods=/*#__PURE__*/Object.freeze({__proto__:null,hideLoading:hideLoading,disableLoading:hideLoading,getInput:getInput,close:close,isAwaitingPromise:isAwaitingPromise,rejectPromise:rejectPromise,handleAwaitingPromise:handleAwaitingPromise,closePopup:close,closeModal:close,closeToast:close,enableButtons:enableButtons,disableButtons:disableButtons,enableInput:enableInput,disableInput:disableInput,showValidationMessage:showValidationMessage,resetValidationMessage:resetValidationMessage,getProgressSteps:getProgressSteps,update:update,_destroy:_destroy});/**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement} [buttonToReplace]
   */const showLoading=buttonToReplace=>{let popup=getPopup();if(!popup){new Swal();// eslint-disable-line no-new
}popup=getPopup();const loader=getLoader();if(isToast()){hide(getIcon());}else{replaceButton(popup,buttonToReplace);}show(loader);popup.setAttribute('data-loading','true');popup.setAttribute('aria-busy','true');popup.focus();};/**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement} [buttonToReplace]
   */const replaceButton=(popup,buttonToReplace)=>{const actions=getActions();const loader=getLoader();if(!buttonToReplace&&isVisible$1(getConfirmButton())){buttonToReplace=getConfirmButton();}show(actions);if(buttonToReplace){hide(buttonToReplace);loader.setAttribute('data-button-to-replace',buttonToReplace.className);}loader.parentNode.insertBefore(loader,buttonToReplace);addClass([popup,actions],swalClasses.loading);};/**
   * @typedef { string | number | boolean } InputValue
   */ /**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const handleInputOptionsAndValue=(instance,params)=>{if(params.input==='select'||params.input==='radio'){handleInputOptions(instance,params);}else if(['text','email','number','tel','textarea'].includes(params.input)&&(hasToPromiseFn(params.inputValue)||isPromise(params.inputValue))){showLoading(getConfirmButton());handleInputValue(instance,params);}};/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {string | number | File | FileList | null}
   */const getInputValue=(instance,innerParams)=>{const input=instance.getInput();if(!input){return null;}switch(innerParams.input){case'checkbox':return getCheckboxValue(input);case'radio':return getRadioValue(input);case'file':return getFileValue(input);default:return innerParams.inputAutoTrim?input.value.trim():input.value;}};/**
   * @param {HTMLInputElement} input
   * @returns {number}
   */const getCheckboxValue=input=>input.checked?1:0;/**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */const getRadioValue=input=>input.checked?input.value:null;/**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */const getFileValue=input=>input.files.length?input.getAttribute('multiple')!==null?input.files:input.files[0]:null;/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const handleInputOptions=(instance,params)=>{const popup=getPopup();/**
     * @param {Record<string, any>} inputOptions
     */const processInputOptions=inputOptions=>{populateInputOptions[params.input](popup,formatInputOptions(inputOptions),params);};if(hasToPromiseFn(params.inputOptions)||isPromise(params.inputOptions)){showLoading(getConfirmButton());asPromise(params.inputOptions).then(inputOptions=>{instance.hideLoading();processInputOptions(inputOptions);});}else if(typeof params.inputOptions==='object'){processInputOptions(params.inputOptions);}else{error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);}};/**
   * @param {SweetAlert2} instance
   * @param {SweetAlertOptions} params
   */const handleInputValue=(instance,params)=>{const input=instance.getInput();hide(input);asPromise(params.inputValue).then(inputValue=>{input.value=params.input==='number'?`${parseFloat(inputValue)||0}`:`${inputValue}`;show(input);input.focus();instance.hideLoading();}).catch(err=>{error(`Error in inputValue promise: ${err}`);input.value='';show(input);input.focus();instance.hideLoading();});};const populateInputOptions={/**
     * @param {HTMLElement} popup
     * @param {Record<string, any>} inputOptions
     * @param {SweetAlertOptions} params
     */select:(popup,inputOptions,params)=>{const select=getDirectChildByClass(popup,swalClasses.select);/**
       * @param {HTMLElement} parent
       * @param {string} optionLabel
       * @param {string} optionValue
       */const renderOption=(parent,optionLabel,optionValue)=>{const option=document.createElement('option');option.value=optionValue;setInnerHtml(option,optionLabel);option.selected=isSelected(optionValue,params.inputValue);parent.appendChild(option);};inputOptions.forEach(inputOption=>{const optionValue=inputOption[0];const optionLabel=inputOption[1];// <optgroup> spec:
// https://www.w3.org/TR/html401/interact/forms.html#h-17.6
// "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
// check whether this is a <optgroup>
if(Array.isArray(optionLabel)){// if it is an array, then it is an <optgroup>
const optgroup=document.createElement('optgroup');optgroup.label=optionValue;optgroup.disabled=false;// not configurable for now
select.appendChild(optgroup);optionLabel.forEach(o=>renderOption(optgroup,o[1],o[0]));}else{// case of <option>
renderOption(select,optionLabel,optionValue);}});select.focus();},/**
     * @param {HTMLElement} popup
     * @param {Record<string, any>} inputOptions
     * @param {SweetAlertOptions} params
     */radio:(popup,inputOptions,params)=>{const radio=getDirectChildByClass(popup,swalClasses.radio);inputOptions.forEach(inputOption=>{const radioValue=inputOption[0];const radioLabel=inputOption[1];const radioInput=document.createElement('input');const radioLabelElement=document.createElement('label');radioInput.type='radio';radioInput.name=swalClasses.radio;radioInput.value=radioValue;if(isSelected(radioValue,params.inputValue)){radioInput.checked=true;}const label=document.createElement('span');setInnerHtml(label,radioLabel);label.className=swalClasses.label;radioLabelElement.appendChild(radioInput);radioLabelElement.appendChild(label);radio.appendChild(radioLabelElement);});const radios=radio.querySelectorAll('input');if(radios.length){radios[0].focus();}}};/**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @returns {Array<Array<string>>}
   */const formatInputOptions=inputOptions=>{const result=[];if(typeof Map!=='undefined'&&inputOptions instanceof Map){inputOptions.forEach((value,key)=>{let valueFormatted=value;if(typeof valueFormatted==='object'){// case of <optgroup>
valueFormatted=formatInputOptions(valueFormatted);}result.push([key,valueFormatted]);});}else{Object.keys(inputOptions).forEach(key=>{let valueFormatted=inputOptions[key];if(typeof valueFormatted==='object'){// case of <optgroup>
valueFormatted=formatInputOptions(valueFormatted);}result.push([key,valueFormatted]);});}return result;};/**
   * @param {string} optionValue
   * @param {InputValue | Promise<InputValue> | { toPromise: () => InputValue }} inputValue
   * @returns {boolean}
   */const isSelected=(optionValue,inputValue)=>{return inputValue&&inputValue.toString()===optionValue.toString();};/**
   * @param {SweetAlert2} instance
   */const handleConfirmButtonClick=instance=>{const innerParams=privateProps.innerParams.get(instance);instance.disableButtons();if(innerParams.input){handleConfirmOrDenyWithInput(instance,'confirm');}else{confirm(instance,true);}};/**
   * @param {SweetAlert2} instance
   */const handleDenyButtonClick=instance=>{const innerParams=privateProps.innerParams.get(instance);instance.disableButtons();if(innerParams.returnInputValueOnDeny){handleConfirmOrDenyWithInput(instance,'deny');}else{deny(instance,false);}};/**
   * @param {SweetAlert2} instance
   * @param {Function} dismissWith
   */const handleCancelButtonClick=(instance,dismissWith)=>{instance.disableButtons();dismissWith(DismissReason.cancel);};/**
   * @param {SweetAlert2} instance
   * @param {'confirm' | 'deny'} type
   */const handleConfirmOrDenyWithInput=(instance,type)=>{const innerParams=privateProps.innerParams.get(instance);if(!innerParams.input){error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);return;}const inputValue=getInputValue(instance,innerParams);if(innerParams.inputValidator){handleInputValidator(instance,inputValue,type);}else if(!instance.getInput().checkValidity()){instance.enableButtons();instance.showValidationMessage(innerParams.validationMessage);}else if(type==='deny'){deny(instance,inputValue);}else{confirm(instance,inputValue);}};/**
   * @param {SweetAlert2} instance
   * @param {string | number | File | FileList | null} inputValue
   * @param {'confirm' | 'deny'} type
   */const handleInputValidator=(instance,inputValue,type)=>{const innerParams=privateProps.innerParams.get(instance);instance.disableInput();const validationPromise=Promise.resolve().then(()=>asPromise(innerParams.inputValidator(inputValue,innerParams.validationMessage)));validationPromise.then(validationMessage=>{instance.enableButtons();instance.enableInput();if(validationMessage){instance.showValidationMessage(validationMessage);}else if(type==='deny'){deny(instance,inputValue);}else{confirm(instance,inputValue);}});};/**
   * @param {SweetAlert2} instance
   * @param {any} value
   */const deny=(instance,value)=>{const innerParams=privateProps.innerParams.get(instance||undefined);if(innerParams.showLoaderOnDeny){showLoading(getDenyButton());}if(innerParams.preDeny){privateProps.awaitingPromise.set(instance||undefined,true);// Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
const preDenyPromise=Promise.resolve().then(()=>asPromise(innerParams.preDeny(value,innerParams.validationMessage)));preDenyPromise.then(preDenyValue=>{if(preDenyValue===false){instance.hideLoading();handleAwaitingPromise(instance);}else{instance.close({isDenied:true,value:typeof preDenyValue==='undefined'?value:preDenyValue});}}).catch(error=>rejectWith(instance||undefined,error));}else{instance.close({isDenied:true,value});}};/**
   * @param {SweetAlert2} instance
   * @param {any} value
   */const succeedWith=(instance,value)=>{instance.close({isConfirmed:true,value});};/**
   *
   * @param {SweetAlert2} instance
   * @param {string} error
   */const rejectWith=(instance,error)=>{// @ts-ignore
instance.rejectPromise(error);};/**
   *
   * @param {SweetAlert2} instance
   * @param {any} value
   */const confirm=(instance,value)=>{const innerParams=privateProps.innerParams.get(instance||undefined);if(innerParams.showLoaderOnConfirm){showLoading();}if(innerParams.preConfirm){instance.resetValidationMessage();privateProps.awaitingPromise.set(instance||undefined,true);// Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
const preConfirmPromise=Promise.resolve().then(()=>asPromise(innerParams.preConfirm(value,innerParams.validationMessage)));preConfirmPromise.then(preConfirmValue=>{if(isVisible$1(getValidationMessage())||preConfirmValue===false){instance.hideLoading();handleAwaitingPromise(instance);}else{succeedWith(instance,typeof preConfirmValue==='undefined'?value:preConfirmValue);}}).catch(error=>rejectWith(instance||undefined,error));}else{succeedWith(instance,value);}};const handlePopupClick=(instance,domCache,dismissWith)=>{const innerParams=privateProps.innerParams.get(instance);if(innerParams.toast){handleToastClick(instance,domCache,dismissWith);}else{// Ignore click events that had mousedown on the popup but mouseup on the container
// This can happen when the user drags a slider
handleModalMousedown(domCache);// Ignore click events that had mousedown on the container but mouseup on the popup
handleContainerMousedown(domCache);handleModalClick(instance,domCache,dismissWith);}};const handleToastClick=(instance,domCache,dismissWith)=>{// Closing toast by internal click
domCache.popup.onclick=()=>{const innerParams=privateProps.innerParams.get(instance);if(innerParams&&(isAnyButtonShown(innerParams)||innerParams.timer||innerParams.input)){return;}dismissWith(DismissReason.close);};};/**
   * @param {*} innerParams
   * @returns {boolean}
   */const isAnyButtonShown=innerParams=>{return innerParams.showConfirmButton||innerParams.showDenyButton||innerParams.showCancelButton||innerParams.showCloseButton;};let ignoreOutsideClick=false;const handleModalMousedown=domCache=>{domCache.popup.onmousedown=()=>{domCache.container.onmouseup=function(e){domCache.container.onmouseup=undefined;// We only check if the mouseup target is the container because usually it doesn't
// have any other direct children aside of the popup
if(e.target===domCache.container){ignoreOutsideClick=true;}};};};const handleContainerMousedown=domCache=>{domCache.container.onmousedown=()=>{domCache.popup.onmouseup=function(e){domCache.popup.onmouseup=undefined;// We also need to check if the mouseup target is a child of the popup
if(e.target===domCache.popup||domCache.popup.contains(e.target)){ignoreOutsideClick=true;}};};};const handleModalClick=(instance,domCache,dismissWith)=>{domCache.container.onclick=e=>{const innerParams=privateProps.innerParams.get(instance);if(ignoreOutsideClick){ignoreOutsideClick=false;return;}if(e.target===domCache.container&&callIfFunction(innerParams.allowOutsideClick)){dismissWith(DismissReason.backdrop);}};};const isJqueryElement=elem=>typeof elem==='object'&&elem.jquery;const isElement=elem=>elem instanceof Element||isJqueryElement(elem);const argsToParams=args=>{const params={};if(typeof args[0]==='object'&&!isElement(args[0])){Object.assign(params,args[0]);}else{['title','html','icon'].forEach((name,index)=>{const arg=args[index];if(typeof arg==='string'||isElement(arg)){params[name]=arg;}else if(arg!==undefined){error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);}});}return params;};function fire(){const Swal=this;// eslint-disable-line @typescript-eslint/no-this-alias
for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return new Swal(...args);}/**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */function mixin(mixinParams){class MixinSwal extends this{_main(params,priorityMixinParams){return super._main(params,Object.assign({},mixinParams,priorityMixinParams));}}return MixinSwal;}/**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */const getTimerLeft=()=>{return globalState.timeout&&globalState.timeout.getTimerLeft();};/**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */const stopTimer=()=>{if(globalState.timeout){stopTimerProgressBar();return globalState.timeout.stop();}};/**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */const resumeTimer=()=>{if(globalState.timeout){const remaining=globalState.timeout.start();animateTimerProgressBar(remaining);return remaining;}};/**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */const toggleTimer=()=>{const timer=globalState.timeout;return timer&&(timer.running?stopTimer():resumeTimer());};/**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} n
   * @returns {number | undefined}
   */const increaseTimer=n=>{if(globalState.timeout){const remaining=globalState.timeout.increase(n);animateTimerProgressBar(remaining,true);return remaining;}};/**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */const isTimerRunning=()=>{return globalState.timeout&&globalState.timeout.isRunning();};let bodyClickListenerAdded=false;const clickHandlers={};/**
   * @param {string} attr
   */function bindClickHandler(){let attr=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'data-swal-template';clickHandlers[attr]=this;if(!bodyClickListenerAdded){document.body.addEventListener('click',bodyClickListener);bodyClickListenerAdded=true;}}const bodyClickListener=event=>{for(let el=event.target;el&&el!==document;el=el.parentNode){for(const attr in clickHandlers){const template=el.getAttribute(attr);if(template){clickHandlers[attr].fire({template});return;}}}};var staticMethods=/*#__PURE__*/Object.freeze({__proto__:null,isValidParameter:isValidParameter,isUpdatableParameter:isUpdatableParameter,isDeprecatedParameter:isDeprecatedParameter,argsToParams:argsToParams,getContainer:getContainer,getPopup:getPopup,getTitle:getTitle,getHtmlContainer:getHtmlContainer,getImage:getImage,getIcon:getIcon,getIconContent:getIconContent,getInputLabel:getInputLabel,getCloseButton:getCloseButton,getActions:getActions,getConfirmButton:getConfirmButton,getDenyButton:getDenyButton,getCancelButton:getCancelButton,getLoader:getLoader,getFooter:getFooter,getTimerProgressBar:getTimerProgressBar,getFocusableElements:getFocusableElements,getValidationMessage:getValidationMessage,isLoading:isLoading,isVisible:isVisible,clickConfirm:clickConfirm,clickDeny:clickDeny,clickCancel:clickCancel,fire:fire,mixin:mixin,showLoading:showLoading,enableLoading:showLoading,getTimerLeft:getTimerLeft,stopTimer:stopTimer,resumeTimer:resumeTimer,toggleTimer:toggleTimer,increaseTimer:increaseTimer,isTimerRunning:isTimerRunning,bindClickHandler:bindClickHandler});class Timer{/**
     * @param {Function} callback
     * @param {number} delay
     */constructor(callback,delay){this.callback=callback;this.remaining=delay;this.running=false;this.start();}start(){if(!this.running){this.running=true;this.started=new Date();this.id=setTimeout(this.callback,this.remaining);}return this.remaining;}stop(){if(this.running){this.running=false;clearTimeout(this.id);this.remaining-=new Date().getTime()-this.started.getTime();}return this.remaining;}increase(n){const running=this.running;if(running){this.stop();}this.remaining+=n;if(running){this.start();}return this.remaining;}getTimerLeft(){if(this.running){this.stop();this.start();}return this.remaining;}isRunning(){return this.running;}}const swalStringParams=['swal-title','swal-html','swal-footer'];/**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */const getTemplateParams=params=>{/** @type {HTMLTemplateElement} */const template=typeof params.template==='string'?document.querySelector(params.template):params.template;if(!template){return{};}/** @type {DocumentFragment} */const templateContent=template.content;showWarningsForElements(templateContent);const result=Object.assign(getSwalParams(templateContent),getSwalFunctionParams(templateContent),getSwalButtons(templateContent),getSwalImage(templateContent),getSwalIcon(templateContent),getSwalInput(templateContent),getSwalStringParams(templateContent,swalStringParams));return result;};/**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */const getSwalParams=templateContent=>{const result={};/** @type {HTMLElement[]} */const swalParams=Array.from(templateContent.querySelectorAll('swal-param'));swalParams.forEach(param=>{showWarningsForAttributes(param,['name','value']);const paramName=param.getAttribute('name');const value=param.getAttribute('value');if(typeof defaultParams[paramName]==='boolean'){result[paramName]=value!=='false';}else if(typeof defaultParams[paramName]==='object'){result[paramName]=JSON.parse(value);}else{result[paramName]=value;}});return result;};/**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */const getSwalFunctionParams=templateContent=>{const result={};/** @type {HTMLElement[]} */const swalFunctions=Array.from(templateContent.querySelectorAll('swal-function-param'));swalFunctions.forEach(param=>{const paramName=param.getAttribute('name');const value=param.getAttribute('value');result[paramName]=new Function(`return ${value}`)();});return result;};/**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */const getSwalButtons=templateContent=>{const result={};/** @type {HTMLElement[]} */const swalButtons=Array.from(templateContent.querySelectorAll('swal-button'));swalButtons.forEach(button=>{showWarningsForAttributes(button,['type','color','aria-label']);const type=button.getAttribute('type');result[`${type}ButtonText`]=button.innerHTML;result[`show${capitalizeFirstLetter(type)}Button`]=true;if(button.hasAttribute('color')){result[`${type}ButtonColor`]=button.getAttribute('color');}if(button.hasAttribute('aria-label')){result[`${type}ButtonAriaLabel`]=button.getAttribute('aria-label');}});return result;};/**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */const getSwalImage=templateContent=>{const result={};/** @type {HTMLElement} */const image=templateContent.querySelector('swal-image');if(image){showWarningsForAttributes(image,['src','width','height','alt']);if(image.hasAttribute('src')){result.imageUrl=image.getAttribute('src');}if(image.hasAttribute('width')){result.imageWidth=image.getAttribute('width');}if(image.hasAttribute('height')){result.imageHeight=image.getAttribute('height');}if(image.hasAttribute('alt')){result.imageAlt=image.getAttribute('alt');}}return result;};/**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */const getSwalIcon=templateContent=>{const result={};/** @type {HTMLElement} */const icon=templateContent.querySelector('swal-icon');if(icon){showWarningsForAttributes(icon,['type','color']);if(icon.hasAttribute('type')){/** @type {SweetAlertIcon} */ // @ts-ignore
result.icon=icon.getAttribute('type');}if(icon.hasAttribute('color')){result.iconColor=icon.getAttribute('color');}result.iconHtml=icon.innerHTML;}return result;};/**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */const getSwalInput=templateContent=>{const result={};/** @type {HTMLElement} */const input=templateContent.querySelector('swal-input');if(input){showWarningsForAttributes(input,['type','label','placeholder','value']);/** @type {SweetAlertInput} */ // @ts-ignore
result.input=input.getAttribute('type')||'text';if(input.hasAttribute('label')){result.inputLabel=input.getAttribute('label');}if(input.hasAttribute('placeholder')){result.inputPlaceholder=input.getAttribute('placeholder');}if(input.hasAttribute('value')){result.inputValue=input.getAttribute('value');}}/** @type {HTMLElement[]} */const inputOptions=Array.from(templateContent.querySelectorAll('swal-input-option'));if(inputOptions.length){result.inputOptions={};inputOptions.forEach(option=>{showWarningsForAttributes(option,['value']);const optionValue=option.getAttribute('value');const optionName=option.innerHTML;result.inputOptions[optionValue]=optionName;});}return result;};/**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {SweetAlertOptions}
   */const getSwalStringParams=(templateContent,paramNames)=>{const result={};for(const i in paramNames){const paramName=paramNames[i];/** @type {HTMLElement} */const tag=templateContent.querySelector(paramName);if(tag){showWarningsForAttributes(tag,[]);result[paramName.replace(/^swal-/,'')]=tag.innerHTML.trim();}}return result;};/**
   * @param {DocumentFragment} templateContent
   */const showWarningsForElements=templateContent=>{const allowedElements=swalStringParams.concat(['swal-param','swal-function-param','swal-button','swal-image','swal-icon','swal-input','swal-input-option']);Array.from(templateContent.children).forEach(el=>{const tagName=el.tagName.toLowerCase();if(!allowedElements.includes(tagName)){warn(`Unrecognized element <${tagName}>`);}});};/**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */const showWarningsForAttributes=(el,allowedAttributes)=>{Array.from(el.attributes).forEach(attribute=>{if(allowedAttributes.indexOf(attribute.name)===-1){warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`,`${allowedAttributes.length?`Allowed attributes are: ${allowedAttributes.join(', ')}`:'To set the value, use HTML within the element.'}`]);}});};const SHOW_CLASS_TIMEOUT=10;/**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */const openPopup=params=>{const container=getContainer();const popup=getPopup();if(typeof params.willOpen==='function'){params.willOpen(popup);}const bodyStyles=window.getComputedStyle(document.body);const initialBodyOverflow=bodyStyles.overflowY;addClasses(container,popup,params);// scrolling is 'hidden' until animation is done, after that 'auto'
setTimeout(()=>{setScrollingVisibility(container,popup);},SHOW_CLASS_TIMEOUT);if(isModal()){fixScrollContainer(container,params.scrollbarPadding,initialBodyOverflow);setAriaHidden();}if(!isToast()&&!globalState.previousActiveElement){globalState.previousActiveElement=document.activeElement;}if(typeof params.didOpen==='function'){setTimeout(()=>params.didOpen(popup));}removeClass(container,swalClasses['no-transition']);};/**
   * @param {AnimationEvent} event
   */const swalOpenAnimationFinished=event=>{const popup=getPopup();if(event.target!==popup){return;}const container=getContainer();popup.removeEventListener(animationEndEvent,swalOpenAnimationFinished);container.style.overflowY='auto';};/**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */const setScrollingVisibility=(container,popup)=>{if(animationEndEvent&&hasCssAnimation(popup)){container.style.overflowY='hidden';popup.addEventListener(animationEndEvent,swalOpenAnimationFinished);}else{container.style.overflowY='auto';}};/**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */const fixScrollContainer=(container,scrollbarPadding,initialBodyOverflow)=>{iOSfix();if(scrollbarPadding&&initialBodyOverflow!=='hidden'){fixScrollbar();}// sweetalert2/issues/1247
setTimeout(()=>{container.scrollTop=0;});};/**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */const addClasses=(container,popup,params)=>{addClass(container,params.showClass.backdrop);// this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
popup.style.setProperty('opacity','0','important');show(popup,'grid');setTimeout(()=>{// Animate popup right after showing it
addClass(popup,params.showClass.popup);// and remove the opacity workaround
popup.style.removeProperty('opacity');},SHOW_CLASS_TIMEOUT);// 10ms in order to fix #2062
addClass([document.documentElement,document.body],swalClasses.shown);if(params.heightAuto&&params.backdrop&&!params.toast){addClass([document.documentElement,document.body],swalClasses['height-auto']);}};var defaultInputValidators={/**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */email:(string,validationMessage)=>{return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string)?Promise.resolve():Promise.resolve(validationMessage||'Invalid email address');},/**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */url:(string,validationMessage)=>{// taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string)?Promise.resolve():Promise.resolve(validationMessage||'Invalid URL');}};/**
   * @param {SweetAlertOptions} params
   */function setDefaultInputValidators(params){// Use default `inputValidator` for supported input types if not provided
if(!params.inputValidator){Object.keys(defaultInputValidators).forEach(key=>{if(params.input===key){params.inputValidator=defaultInputValidators[key];}});}}/**
   * @param {SweetAlertOptions} params
   */function validateCustomTargetElement(params){// Determine if the custom target element is valid
if(!params.target||typeof params.target==='string'&&!document.querySelector(params.target)||typeof params.target!=='string'&&!params.target.appendChild){warn('Target parameter is not valid, defaulting to "body"');params.target='body';}}/**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */function setParameters(params){setDefaultInputValidators(params);// showLoaderOnConfirm && preConfirm
if(params.showLoaderOnConfirm&&!params.preConfirm){warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n'+'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n'+'https://sweetalert2.github.io/#ajax-request');}validateCustomTargetElement(params);// Replace newlines with <br> in title
if(typeof params.title==='string'){params.title=params.title.split('\n').join('<br />');}init(params);}let currentInstance;class SweetAlert{constructor(){// Prevent run in Node env
if(typeof window==='undefined'){return;}currentInstance=this;// @ts-ignore
for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}const outerParams=Object.freeze(this.constructor.argsToParams(args));Object.defineProperties(this,{params:{value:outerParams,writable:false,enumerable:true,configurable:true}});// @ts-ignore
const promise=currentInstance._main(currentInstance.params);privateProps.promise.set(this,promise);}_main(userParams){let mixinParams=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};showWarningsForParams(Object.assign({},mixinParams,userParams));if(globalState.currentInstance){// @ts-ignore
globalState.currentInstance._destroy();if(isModal()){unsetAriaHidden();}}globalState.currentInstance=currentInstance;const innerParams=prepareParams(userParams,mixinParams);setParameters(innerParams);Object.freeze(innerParams);// clear the previous timer
if(globalState.timeout){globalState.timeout.stop();delete globalState.timeout;}// clear the restore focus timeout
clearTimeout(globalState.restoreFocusTimeout);const domCache=populateDomCache(currentInstance);render(currentInstance,innerParams);privateProps.innerParams.set(currentInstance,innerParams);return swalPromise(currentInstance,domCache,innerParams);}// `catch` cannot be the name of a module export, so we define our thenable methods here instead
then(onFulfilled){const promise=privateProps.promise.get(this);return promise.then(onFulfilled);}finally(onFinally){const promise=privateProps.promise.get(this);return promise.finally(onFinally);}}/**
   * @param {SweetAlert2} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */const swalPromise=(instance,domCache,innerParams)=>{return new Promise((resolve,reject)=>{// functions to handle all closings/dismissals
/**
       * @param {DismissReason} dismiss
       */const dismissWith=dismiss=>{// @ts-ignore
instance.close({isDismissed:true,dismiss});};privateMethods.swalPromiseResolve.set(instance,resolve);privateMethods.swalPromiseReject.set(instance,reject);domCache.confirmButton.onclick=()=>{handleConfirmButtonClick(instance);};domCache.denyButton.onclick=()=>{handleDenyButtonClick(instance);};domCache.cancelButton.onclick=()=>{handleCancelButtonClick(instance,dismissWith);};domCache.closeButton.onclick=()=>{// @ts-ignore
dismissWith(DismissReason.close);};handlePopupClick(instance,domCache,dismissWith);addKeydownHandler(instance,globalState,innerParams,dismissWith);handleInputOptionsAndValue(instance,innerParams);openPopup(innerParams);setupTimer(globalState,innerParams,dismissWith);initFocus(domCache,innerParams);// Scroll container to top on open (#1247, #1946)
setTimeout(()=>{domCache.container.scrollTop=0;});});};/**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */const prepareParams=(userParams,mixinParams)=>{const templateParams=getTemplateParams(userParams);const params=Object.assign({},defaultParams,mixinParams,templateParams,userParams);// precedence is described in #2131
params.showClass=Object.assign({},defaultParams.showClass,params.showClass);params.hideClass=Object.assign({},defaultParams.hideClass,params.hideClass);return params;};/**
   * @param {SweetAlert2} instance
   * @returns {DomCache}
   */const populateDomCache=instance=>{const domCache={popup:getPopup(),container:getContainer(),actions:getActions(),confirmButton:getConfirmButton(),denyButton:getDenyButton(),cancelButton:getCancelButton(),loader:getLoader(),closeButton:getCloseButton(),validationMessage:getValidationMessage(),progressSteps:getProgressSteps$1()};privateProps.domCache.set(instance,domCache);return domCache;};/**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */const setupTimer=(globalState,innerParams,dismissWith)=>{const timerProgressBar=getTimerProgressBar();hide(timerProgressBar);if(innerParams.timer){globalState.timeout=new Timer(()=>{dismissWith('timer');delete globalState.timeout;},innerParams.timer);if(innerParams.timerProgressBar){show(timerProgressBar);applyCustomClass(timerProgressBar,innerParams,'timerProgressBar');setTimeout(()=>{if(globalState.timeout&&globalState.timeout.running){// timer can be already stopped or unset at this point
animateTimerProgressBar(innerParams.timer);}});}}};/**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */const initFocus=(domCache,innerParams)=>{if(innerParams.toast){return;}if(!callIfFunction(innerParams.allowEnterKey)){blurActiveElement();return;}if(!focusButton(domCache,innerParams)){setFocus(innerParams,-1,1);}};/**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */const focusButton=(domCache,innerParams)=>{if(innerParams.focusDeny&&isVisible$1(domCache.denyButton)){domCache.denyButton.focus();return true;}if(innerParams.focusCancel&&isVisible$1(domCache.cancelButton)){domCache.cancelButton.focus();return true;}if(innerParams.focusConfirm&&isVisible$1(domCache.confirmButton)){domCache.confirmButton.focus();return true;}return false;};const blurActiveElement=()=>{if(document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur==='function'){document.activeElement.blur();}};// Assign instance methods from src/instanceMethods/*.js to prototype
Object.assign(SweetAlert.prototype,instanceMethods);// Assign static methods from src/staticMethods/*.js to constructor
Object.assign(SweetAlert,staticMethods);// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(instanceMethods).forEach(key=>{/**
     * @param {...any} args
     * @returns {any}
     */SweetAlert[key]=function(){if(currentInstance){return currentInstance[key](...arguments);}};});SweetAlert.DismissReason=DismissReason;SweetAlert.version='11.6.13';const Swal=SweetAlert;// @ts-ignore
Swal.default=Swal;return Swal;});if(typeof this!=='undefined'&&this.Sweetalert2){this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2;}/**
 * Initialise a new delete alert modal.
 *
 * @constructor
 */function deleteAlert(parameters){"use strict";// Validate parameters.
if(typeof parameters!=='object'){throw new Error("Expected 'parameters' argument to be of type 'object'.");}/**
     * The current instance.
     *
     * @type {deleteAlert}
     */var instance=this;/**
     * Delete options common to both delete alert types.
     *
     * @type {object}
     */this.defaultOpts=$.extend(true,{},{showLoaderOnConfirm:true,allowOutsideClick:function(){return!Swal.isLoading();},width:550},parameters.defaultOpts||{});/**
     * Checkbox selector for severe modal.
     *
     * @type {string}
     */this.checkboxSelector=parameters.checkboxSelector?parameters.checkboxSelector:deleteAlert.defaultCheckboxSelector;/**
     * List of translation keys to use in the alert modal.
     *
     * @type {object}
     */this.translationKeys=$.extend(true,{},deleteAlert.translationKeys,parameters.translationKeys||{});/**
     * Make description for deleting a record with several relations.
     *
     * @param section
     * @param name
     * @param relations
     * @param disabled
     * @returns {string}
     */var makeRelationsDescription=function(section,name,relations,disabled){disabled=disabled||false;// Make checklist.
var checklist=[];for(var i=0;i<relations.length;i++){var str='<label style="margin: 0 10px 0 20px">'+'<input type="checkbox" name="confirm-delete[]" style="margin: 0 15px 0 0" '+(disabled?'disabled checked':'')+' />'+relations[i]+'</label>';checklist.push(str);}// Lang string replacements.
var replacements={"record":section.toLowerCase(),'name':name};return'<span>'+Lang.get(instance.translationKeys.relations,replacements)+'</span>'+'<br />'+checklist.join('<br />');};/**
     * Swal2 preconfirm parameter.
     *
     * @returns {void|*}
     */var preConfirm=function(){if(typeof parameters.ajax!=='object'){return Swal.showLoading();}return $.ajax($.extend(true,{},{type:'DELETE',dataType:'json'},parameters.ajax)).then(function(response){if(response.status=='success'){return response;}throw new Error(response.statusText);}).catch(function(){Swal.showValidationMessage(Lang.get('messages.error_deleted',{item:Lang.get('general.record')}));});};/**
     * Modify the default HTML.
     *
     * @param html
     * @returns {*}
     */var modifyHtml=function(html){if(typeof parameters.html!=='function'){return html;}return parameters.html(html);};/**
     * SWAL options for deleting a normal record.
     *
     * @param name
     * @param section
     * @param relations
     * @returns {Promise}
     */this.fireDefault=function(section,name,relations){name=name||'';if(typeof section!=='string'||typeof name!=='string'){throw"Expecting parameters 'section' and 'name' to be of type string.";}var message=Lang.get(this.translationKeys.warning,{"record":section.toLowerCase(),'name':name});if(typeof relations==='object'&&relations.length>0){message=makeRelationsDescription(section,name,relations,true);}return Swal.fire($.extend(this.defaultOpts,{title:Lang.get(this.translationKeys.title,{'record':section}),html:modifyHtml('<div style="text-align: left">'+'<div class="sp-alert sp-alert-warning">'+'<i class="fas fa-exclamation-triangle" aria-hidden="true"></i> &nbsp;'+Lang.get('messages.cannot_be_undone')+'</div>'+message+'</div>'),showCancelButton:true,confirmButtonColor:"#e74c3c",confirmButtonText:Lang.get(this.translationKeys.confirmButton,{'record':section}),cancelButtonText:Lang.get(this.translationKeys.cancelButton,{'record':section}),preConfirm:function(){return preConfirm();}}));};/**
     * SWAL options for deleting a record that has severe consequences i.e. the delete will cascade and
     * wipe out several other related records.
     *
     * @param section
     * @param name
     * @param relations
     * @returns {{title: (*|String), html: string, showCancelButton: boolean, confirmButtonColor: string, confirmButtonText: (*|String), closeOnConfirm: boolean, width: number}}
     */this.fireSevere=function(section,name,relations){name=name||'';relations=relations||[];if(typeof name!=='string'||typeof section!=='string'){throw"Expecting parameters 'section' and 'name' to be of type string.";}else if(typeof relations!=='object'){throw"Expecting 'relations' parameter of type array.";}return Swal.fire($.extend(this.defaultOpts,{title:Lang.get(this.translationKeys.title,{'record':section}),html:modifyHtml('<div style="text-align: left;">'+'<div class="sp-alert sp-alert-warning">'+'<i class="fas fa-exclamation-triangle" aria-hidden="true"></i> &nbsp;'+Lang.get('messages.cannot_be_undone')+'</div>'+makeRelationsDescription(section,name,relations)+'<br /><span>'+Lang.get('messages.please_check')+'</span>'+'</div>'),showCancelButton:true,cancelButtonText:Lang.get(this.translationKeys.cancelButton,{'record':section}),confirmButtonColor:"#e74c3c",confirmButtonText:Lang.get(this.translationKeys.confirmButton,{'record':section}),preConfirm:function(){instance.disableCheckboxes();return preConfirm();}}));};/**
     * Disable severe modal checkboxes.
     */this.disableCheckboxes=function(){$(this.checkboxSelector).prop('disabled','disabled');};/**
     * Enable severe modal checkboxes.
     */this.enableCheckboxes=function(){$(this.checkboxSelector).prop('disabled',false);};}/**
 * Default checkbox selector.
 *
 * @type {string}
 */deleteAlert.defaultCheckboxSelector='input[name="confirm-delete[]"]';/**
 * Default translation keys.
 *
 * @type {{cancelButton: string, warning: string, title: string, relations: string, confirmButton: string}}
 */deleteAlert.translationKeys={title:'messages.delete_record',warning:'messages.warn_delete',relations:'messages.delete_relations',confirmButton:'messages.delete_confirm',cancelButton:'messages.keep_record'};$(function(){var checkboxSelector=deleteAlert.defaultCheckboxSelector;$(document).on('change',checkboxSelector,function(e){if($(checkboxSelector+':checked').length===$(checkboxSelector).length){$('.swal2-modal').find('button.swal2-confirm').prop('disabled',false).removeClass('disabled');$('.swal2-modal').find('button.swal-cancel').hide();}else{$('.swal2-modal').find('button.swal2-confirm').prop('disabled','disabled').addClass('disabled');$('.swal2-modal').find('button.swal2-cancel').show();}});$(document.body).on('click','.delete-confirm',function(){// Save the delete route
var deleteRoute=$(this).data('route'),name=$('<div/>').text($(this).data('name')).html(),LANG=$(this).data('lang'),section=typeof LANG==='object'?LANG.section:Lang.get('general.record'),// backwards compatibility.
relations=typeof LANG==='object'?LANG.relations:[],_self=this;// Show the alert
var func=$(this).data('severe')?'fireSevere':'fireDefault',params={ajax:{url:deleteRoute}};new deleteAlert(params)[func](section,name,relations).then(function(result){if(result.value){Swal.fire(Lang.get('messages.deleted'),Lang.get('messages.success_deleted',{item:Lang.get('general.record')}),'success');// Trigger an event for any custom handling on successful deletion
$(_self).trigger("delete-successful",[result.value]);// Remove the row from the table. If we're using DataTables we'll refresh it via
// AJAX in a moment anyway... This resolves an issue with departments were refreshing
// DataTables doesn't actually remove the row.
$(_self).parents('tr').remove();// Check if DataTables exists, otherwise try and delete the row
if(typeof $.fn.dataTable==='function'&&$('.dataTable').length>=1){$('.dataTable').dataTable()._fnAjaxUpdate();}}});// User must confirm before the button will unlock.
if($(this).data('severe')){$('.swal2-modal').find('button.swal2-confirm').prop('disabled','disabled').addClass('disabled');}});});/**
 * Copyright (c) 2016 hustcc
 * License: MIT
 * Version: v3.0.2
 * https://github.com/hustcc/timeago.js
**/ /* jshint expr: true */!function(root,factory){if(typeof module==='object'&&module.exports){module.exports=factory(root);// nodejs support
module.exports['default']=module.exports;// es6 support
}else root.timeago=factory(root);}(typeof window!=='undefined'?window:this,function(){var indexMapEn='second_minute_hour_day_week_month_year'.split('_'),indexMapZh='秒_分钟_小时_天_周_月_年'.split('_'),// build-in locales: en & zh_CN
locales={'en':function(number,index){if(index===0)return['just now','right now'];var unit=indexMapEn[parseInt(index/2)];if(number>1)unit+='s';return[number+' '+unit+' ago','in '+number+' '+unit];},'zh_CN':function(number,index){if(index===0)return['刚刚','片刻后'];var unit=indexMapZh[parseInt(index/2)];return[number+unit+'前',number+unit+'后'];}},// second, minute, hour, day, week, month, year(365 days)
SEC_ARRAY=[60,60,24,7,365/7/12,12],SEC_ARRAY_LEN=6,// ATTR_DATETIME = 'datetime',
ATTR_DATA_TID='data-tid',timers={};// real-time render timers
// format Date / string / timestamp to Date instance.
function toDate(input){if(input instanceof Date)return input;if(!isNaN(input))return new Date(toInt(input));if(/^\d+$/.test(input))return new Date(toInt(input));input=(input||'').trim().replace(/\.\d+/,'')// remove milliseconds
.replace(/-/,'/').replace(/-/,'/').replace(/(\d)T(\d)/,'$1 $2').replace(/Z/,' UTC')// 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
.replace(/([\+\-]\d\d)\:?(\d\d)/,' $1$2');// -04:00 -> -0400
return new Date(input);}// change f into int, remove decimal. Just for code compression
function toInt(f){return parseInt(f);}// format the diff second to *** time ago, with setting locale
function formatDiff(diff,locale,defaultLocale){// if locale is not exist, use defaultLocale.
// if defaultLocale is not exist, use build-in `en`.
// be sure of no error when locale is not exist.
locale=locales[locale]?locale:locales[defaultLocale]?defaultLocale:'en';// if (! locales[locale]) locale = defaultLocale;
var i=0,agoin=diff<0?1:0,// timein or timeago
total_sec=diff=Math.abs(diff);for(;diff>=SEC_ARRAY[i]&&i<SEC_ARRAY_LEN;i++){diff/=SEC_ARRAY[i];}diff=toInt(diff);i*=2;if(diff>(i===0?9:1))i+=1;return locales[locale](diff,i,total_sec)[agoin].replace('%s',diff);}// calculate the diff second between date to be formated an now date.
function diffSec(date,nowDate){nowDate=nowDate?toDate(nowDate):new Date();return(nowDate-toDate(date))/1000;}/**
   * nextInterval: calculate the next interval time.
   * - diff: the diff sec between now and date to be formated.
   *
   * What's the meaning?
   * diff = 61 then return 59
   * diff = 3601 (an hour + 1 second), then return 3599
   * make the interval with high performace.
  **/function nextInterval(diff){var rst=1,i=0,d=Math.abs(diff);for(;diff>=SEC_ARRAY[i]&&i<SEC_ARRAY_LEN;i++){diff/=SEC_ARRAY[i];rst*=SEC_ARRAY[i];}// return leftSec(d, rst);
d=d%rst;d=d?rst-d:rst;return Math.ceil(d);}// get the datetime attribute, `data-timeagp` / `datetime` are supported.
function getDateAttr(node){return getAttr(node,'data-timeago')||getAttr(node,'datetime');}// get the node attribute, native DOM and jquery supported.
function getAttr(node,name){if(node.getAttribute)return node.getAttribute(name);// native
if(node.attr)return node.attr(name);// jquery
}// set the node attribute, native DOM and jquery supported.
function setTidAttr(node,val){if(node.setAttribute)return node.setAttribute(ATTR_DATA_TID,val);// native
if(node.attr)return node.attr(ATTR_DATA_TID,val);// jquery
}// get the timer id of node.
// remove the function, can save some bytes.
// function getTidFromNode(node) {
//   return getAttr(node, ATTR_DATA_TID);
// }
/**
   * timeago: the function to get `timeago` instance.
   * - nowDate: the relative date, default is new Date().
   * - defaultLocale: the default locale, default is en. if your set it, then the `locale` parameter of format is not needed of you.
   *
   * How to use it?
   * var timeagoLib = require('timeago.js');
   * var timeago = timeagoLib(); // all use default.
   * var timeago = timeagoLib('2016-09-10'); // the relative date is 2016-09-10, so the 2016-09-11 will be 1 day ago.
   * var timeago = timeagoLib(null, 'zh_CN'); // set default locale is `zh_CN`.
   * var timeago = timeagoLib('2016-09-10', 'zh_CN'); // the relative date is 2016-09-10, and locale is zh_CN, so the 2016-09-11 will be 1天前.
  **/function Timeago(nowDate,defaultLocale){this.nowDate=nowDate;// if do not set the defaultLocale, set it with `en`
this.defaultLocale=defaultLocale||'en';// use default build-in locale
// for dev test
// this.nextInterval = nextInterval;
}// what the timer will do
Timeago.prototype.doRender=function(node,date,locale){var diff=diffSec(date,this.nowDate),self=this,tid;// delete previously assigned timeout's id to node
node.innerHTML=formatDiff(diff,locale,this.defaultLocale);// waiting %s seconds, do the next render
timers[tid=setTimeout(function(){self.doRender(node,date,locale);delete timers[tid];},Math.min(nextInterval(diff)*1000,0x7FFFFFFF))]=0;// there is no need to save node in object.
// set attribute date-tid
setTidAttr(node,tid);};/**
   * format: format the date to *** time ago, with setting or default locale
   * - date: the date / string / timestamp to be formated
   * - locale: the formated string's locale name, e.g. en / zh_CN
   *
   * How to use it?
   * var timeago = require('timeago.js')();
   * timeago.format(new Date(), 'pl'); // Date instance
   * timeago.format('2016-09-10', 'fr'); // formated date string
   * timeago.format(1473473400269); // timestamp with ms
  **/Timeago.prototype.format=function(date,locale){return formatDiff(diffSec(date,this.nowDate),locale,this.defaultLocale);};/**
   * render: render the DOM real-time.
   * - nodes: which nodes will be rendered.
   * - locale: the locale name used to format date.
   *
   * How to use it?
   * var timeago = require('timeago.js')();
   * // 1. javascript selector
   * timeago.render(document.querySelectorAll('.need_to_be_rendered'));
   * // 2. use jQuery selector
   * timeago.render($('.need_to_be_rendered'), 'pl');
   *
   * Notice: please be sure the dom has attribute `datetime`.
  **/Timeago.prototype.render=function(nodes,locale){if(nodes.length===undefined)nodes=[nodes];for(var i=0,len=nodes.length;i<len;i++){this.doRender(nodes[i],getDateAttr(nodes[i]),locale);// render item
}};/**
   * setLocale: set the default locale name.
   *
   * How to use it?
   * var timeago = require('timeago.js')();
   * timeago.setLocale('fr');
  **/Timeago.prototype.setLocale=function(locale){this.defaultLocale=locale;};/**
   * timeago: the function to get `timeago` instance.
   * - nowDate: the relative date, default is new Date().
   * - defaultLocale: the default locale, default is en. if your set it, then the `locale` parameter of format is not needed of you.
   *
   * How to use it?
   * var timeagoFactory = require('timeago.js');
   * var timeago = timeagoFactory(); // all use default.
   * var timeago = timeagoFactory('2016-09-10'); // the relative date is 2016-09-10, so the 2016-09-11 will be 1 day ago.
   * var timeago = timeagoFactory(null, 'zh_CN'); // set default locale is `zh_CN`.
   * var timeago = timeagoFactory('2016-09-10', 'zh_CN'); // the relative date is 2016-09-10, and locale is zh_CN, so the 2016-09-11 will be 1天前.
   **/function timeagoFactory(nowDate,defaultLocale){return new Timeago(nowDate,defaultLocale);}/**
   * register: register a new language locale
   * - locale: locale name, e.g. en / zh_CN, notice the standard.
   * - localeFunc: the locale process function
   *
   * How to use it?
   * var timeagoFactory = require('timeago.js');
   *
   * timeagoFactory.register('the locale name', the_locale_func);
   * // or
   * timeagoFactory.register('pl', require('timeago.js/locales/pl'));
   **/timeagoFactory.register=function(locale,localeFunc){locales[locale]=localeFunc;};/**
   * cancel: cancels one or all the timers which are doing real-time render.
   *
   * How to use it?
   * For canceling all the timers:
   * var timeagoFactory = require('timeago.js');
   * var timeago = timeagoFactory();
   * timeago.render(document.querySelectorAll('.need_to_be_rendered'));
   * timeagoFactory.cancel(); // will stop all the timers, stop render in real time.
   *
   * For canceling single timer on specific node:
   * var timeagoFactory = require('timeago.js');
   * var timeago = timeagoFactory();
   * var nodes = document.querySelectorAll('.need_to_be_rendered');
   * timeago.render(nodes);
   * timeagoFactory.cancel(nodes[0]); // will clear a timer attached to the first node, stop render in real time.
   **/timeagoFactory.cancel=function(node){var tid;// assigning in if statement to save space
if(node){tid=getAttr(node,ATTR_DATA_TID);// get the timer of DOM node(native / jq).
if(tid){clearTimeout(tid);delete timers[tid];}}else{for(tid in timers)clearTimeout(tid);timers={};}};return timeagoFactory;});/**
 * @popperjs/core v2.11.8 - MIT License
 */(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?factory(exports):typeof define==='function'&&define.amd?define(['exports'],factory):(global=typeof globalThis!=='undefined'?globalThis:global||self,factory(global.Popper={}));})(this,function(exports){'use strict';function getWindow(node){if(node==null){return window;}if(node.toString()!=='[object Window]'){var ownerDocument=node.ownerDocument;return ownerDocument?ownerDocument.defaultView||window:window;}return node;}function isElement(node){var OwnElement=getWindow(node).Element;return node instanceof OwnElement||node instanceof Element;}function isHTMLElement(node){var OwnElement=getWindow(node).HTMLElement;return node instanceof OwnElement||node instanceof HTMLElement;}function isShadowRoot(node){// IE 11 has no ShadowRoot
if(typeof ShadowRoot==='undefined'){return false;}var OwnElement=getWindow(node).ShadowRoot;return node instanceof OwnElement||node instanceof ShadowRoot;}var max=Math.max;var min=Math.min;var round=Math.round;function getUAString(){var uaData=navigator.userAgentData;if(uaData!=null&&uaData.brands&&Array.isArray(uaData.brands)){return uaData.brands.map(function(item){return item.brand+"/"+item.version;}).join(' ');}return navigator.userAgent;}function isLayoutViewport(){return!/^((?!chrome|android).)*safari/i.test(getUAString());}function getBoundingClientRect(element,includeScale,isFixedStrategy){if(includeScale===void 0){includeScale=false;}if(isFixedStrategy===void 0){isFixedStrategy=false;}var clientRect=element.getBoundingClientRect();var scaleX=1;var scaleY=1;if(includeScale&&isHTMLElement(element)){scaleX=element.offsetWidth>0?round(clientRect.width)/element.offsetWidth||1:1;scaleY=element.offsetHeight>0?round(clientRect.height)/element.offsetHeight||1:1;}var _ref=isElement(element)?getWindow(element):window,visualViewport=_ref.visualViewport;var addVisualOffsets=!isLayoutViewport()&&isFixedStrategy;var x=(clientRect.left+(addVisualOffsets&&visualViewport?visualViewport.offsetLeft:0))/scaleX;var y=(clientRect.top+(addVisualOffsets&&visualViewport?visualViewport.offsetTop:0))/scaleY;var width=clientRect.width/scaleX;var height=clientRect.height/scaleY;return{width:width,height:height,top:y,right:x+width,bottom:y+height,left:x,x:x,y:y};}function getWindowScroll(node){var win=getWindow(node);var scrollLeft=win.pageXOffset;var scrollTop=win.pageYOffset;return{scrollLeft:scrollLeft,scrollTop:scrollTop};}function getHTMLElementScroll(element){return{scrollLeft:element.scrollLeft,scrollTop:element.scrollTop};}function getNodeScroll(node){if(node===getWindow(node)||!isHTMLElement(node)){return getWindowScroll(node);}else{return getHTMLElementScroll(node);}}function getNodeName(element){return element?(element.nodeName||'').toLowerCase():null;}function getDocumentElement(element){// $FlowFixMe[incompatible-return]: assume body is always available
return((isElement(element)?element.ownerDocument:// $FlowFixMe[prop-missing]
element.document)||window.document).documentElement;}function getWindowScrollBarX(element){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
// Popper 1 is broken in this case and never had a bug report so let's assume
// it's not an issue. I don't think anyone ever specifies width on <html>
// anyway.
// Browsers where the left scrollbar doesn't cause an issue report `0` for
// this (e.g. Edge 2019, IE11, Safari)
return getBoundingClientRect(getDocumentElement(element)).left+getWindowScroll(element).scrollLeft;}function getComputedStyle(element){return getWindow(element).getComputedStyle(element);}function isScrollParent(element){// Firefox wants us to check `-x` and `-y` variations as well
var _getComputedStyle=getComputedStyle(element),overflow=_getComputedStyle.overflow,overflowX=_getComputedStyle.overflowX,overflowY=_getComputedStyle.overflowY;return /auto|scroll|overlay|hidden/.test(overflow+overflowY+overflowX);}function isElementScaled(element){var rect=element.getBoundingClientRect();var scaleX=round(rect.width)/element.offsetWidth||1;var scaleY=round(rect.height)/element.offsetHeight||1;return scaleX!==1||scaleY!==1;}// Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
function getCompositeRect(elementOrVirtualElement,offsetParent,isFixed){if(isFixed===void 0){isFixed=false;}var isOffsetParentAnElement=isHTMLElement(offsetParent);var offsetParentIsScaled=isHTMLElement(offsetParent)&&isElementScaled(offsetParent);var documentElement=getDocumentElement(offsetParent);var rect=getBoundingClientRect(elementOrVirtualElement,offsetParentIsScaled,isFixed);var scroll={scrollLeft:0,scrollTop:0};var offsets={x:0,y:0};if(isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed){if(getNodeName(offsetParent)!=='body'||// https://github.com/popperjs/popper-core/issues/1078
isScrollParent(documentElement)){scroll=getNodeScroll(offsetParent);}if(isHTMLElement(offsetParent)){offsets=getBoundingClientRect(offsetParent,true);offsets.x+=offsetParent.clientLeft;offsets.y+=offsetParent.clientTop;}else if(documentElement){offsets.x=getWindowScrollBarX(documentElement);}}return{x:rect.left+scroll.scrollLeft-offsets.x,y:rect.top+scroll.scrollTop-offsets.y,width:rect.width,height:rect.height};}// means it doesn't take into account transforms.
function getLayoutRect(element){var clientRect=getBoundingClientRect(element);// Use the clientRect sizes if it's not been transformed.
// Fixes https://github.com/popperjs/popper-core/issues/1223
var width=element.offsetWidth;var height=element.offsetHeight;if(Math.abs(clientRect.width-width)<=1){width=clientRect.width;}if(Math.abs(clientRect.height-height)<=1){height=clientRect.height;}return{x:element.offsetLeft,y:element.offsetTop,width:width,height:height};}function getParentNode(element){if(getNodeName(element)==='html'){return element;}return(// this is a quicker (but less type safe) way to save quite some bytes from the bundle
// $FlowFixMe[incompatible-return]
// $FlowFixMe[prop-missing]
element.assignedSlot||// step into the shadow DOM of the parent of a slotted node
element.parentNode||(// DOM Element detected
isShadowRoot(element)?element.host:null)||// ShadowRoot detected
// $FlowFixMe[incompatible-call]: HTMLElement is a Node
getDocumentElement(element)// fallback
);}function getScrollParent(node){if(['html','body','#document'].indexOf(getNodeName(node))>=0){// $FlowFixMe[incompatible-return]: assume body is always available
return node.ownerDocument.body;}if(isHTMLElement(node)&&isScrollParent(node)){return node;}return getScrollParent(getParentNode(node));}/*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */function listScrollParents(element,list){var _element$ownerDocumen;if(list===void 0){list=[];}var scrollParent=getScrollParent(element);var isBody=scrollParent===((_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body);var win=getWindow(scrollParent);var target=isBody?[win].concat(win.visualViewport||[],isScrollParent(scrollParent)?scrollParent:[]):scrollParent;var updatedList=list.concat(target);return isBody?updatedList:// $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
updatedList.concat(listScrollParents(getParentNode(target)));}function isTableElement(element){return['table','td','th'].indexOf(getNodeName(element))>=0;}function getTrueOffsetParent(element){if(!isHTMLElement(element)||// https://github.com/popperjs/popper-core/issues/837
getComputedStyle(element).position==='fixed'){return null;}return element.offsetParent;}// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element){var isFirefox=/firefox/i.test(getUAString());var isIE=/Trident/i.test(getUAString());if(isIE&&isHTMLElement(element)){// In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
var elementCss=getComputedStyle(element);if(elementCss.position==='fixed'){return null;}}var currentNode=getParentNode(element);if(isShadowRoot(currentNode)){currentNode=currentNode.host;}while(isHTMLElement(currentNode)&&['html','body'].indexOf(getNodeName(currentNode))<0){var css=getComputedStyle(currentNode);// This is non-exhaustive but covers the most common CSS properties that
// create a containing block.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
if(css.transform!=='none'||css.perspective!=='none'||css.contain==='paint'||['transform','perspective'].indexOf(css.willChange)!==-1||isFirefox&&css.willChange==='filter'||isFirefox&&css.filter&&css.filter!=='none'){return currentNode;}else{currentNode=currentNode.parentNode;}}return null;}// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element){var window=getWindow(element);var offsetParent=getTrueOffsetParent(element);while(offsetParent&&isTableElement(offsetParent)&&getComputedStyle(offsetParent).position==='static'){offsetParent=getTrueOffsetParent(offsetParent);}if(offsetParent&&(getNodeName(offsetParent)==='html'||getNodeName(offsetParent)==='body'&&getComputedStyle(offsetParent).position==='static')){return window;}return offsetParent||getContainingBlock(element)||window;}var top='top';var bottom='bottom';var right='right';var left='left';var auto='auto';var basePlacements=[top,bottom,right,left];var start='start';var end='end';var clippingParents='clippingParents';var viewport='viewport';var popper='popper';var reference='reference';var variationPlacements=/*#__PURE__*/basePlacements.reduce(function(acc,placement){return acc.concat([placement+"-"+start,placement+"-"+end]);},[]);var placements=/*#__PURE__*/[].concat(basePlacements,[auto]).reduce(function(acc,placement){return acc.concat([placement,placement+"-"+start,placement+"-"+end]);},[]);// modifiers that need to read the DOM
var beforeRead='beforeRead';var read='read';var afterRead='afterRead';// pure-logic modifiers
var beforeMain='beforeMain';var main='main';var afterMain='afterMain';// modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite='beforeWrite';var write='write';var afterWrite='afterWrite';var modifierPhases=[beforeRead,read,afterRead,beforeMain,main,afterMain,beforeWrite,write,afterWrite];function order(modifiers){var map=new Map();var visited=new Set();var result=[];modifiers.forEach(function(modifier){map.set(modifier.name,modifier);});// On visiting object, check for its dependencies and visit them recursively
function sort(modifier){visited.add(modifier.name);var requires=[].concat(modifier.requires||[],modifier.requiresIfExists||[]);requires.forEach(function(dep){if(!visited.has(dep)){var depModifier=map.get(dep);if(depModifier){sort(depModifier);}}});result.push(modifier);}modifiers.forEach(function(modifier){if(!visited.has(modifier.name)){// check for visited object
sort(modifier);}});return result;}function orderModifiers(modifiers){// order based on dependencies
var orderedModifiers=order(modifiers);// order based on phase
return modifierPhases.reduce(function(acc,phase){return acc.concat(orderedModifiers.filter(function(modifier){return modifier.phase===phase;}));},[]);}function debounce(fn){var pending;return function(){if(!pending){pending=new Promise(function(resolve){Promise.resolve().then(function(){pending=undefined;resolve(fn());});});}return pending;};}function mergeByName(modifiers){var merged=modifiers.reduce(function(merged,current){var existing=merged[current.name];merged[current.name]=existing?Object.assign({},existing,current,{options:Object.assign({},existing.options,current.options),data:Object.assign({},existing.data,current.data)}):current;return merged;},{});// IE11 does not support Object.values
return Object.keys(merged).map(function(key){return merged[key];});}function getViewportRect(element,strategy){var win=getWindow(element);var html=getDocumentElement(element);var visualViewport=win.visualViewport;var width=html.clientWidth;var height=html.clientHeight;var x=0;var y=0;if(visualViewport){width=visualViewport.width;height=visualViewport.height;var layoutViewport=isLayoutViewport();if(layoutViewport||!layoutViewport&&strategy==='fixed'){x=visualViewport.offsetLeft;y=visualViewport.offsetTop;}}return{width:width,height:height,x:x+getWindowScrollBarX(element),y:y};}// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element){var _element$ownerDocumen;var html=getDocumentElement(element);var winScroll=getWindowScroll(element);var body=(_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body;var width=max(html.scrollWidth,html.clientWidth,body?body.scrollWidth:0,body?body.clientWidth:0);var height=max(html.scrollHeight,html.clientHeight,body?body.scrollHeight:0,body?body.clientHeight:0);var x=-winScroll.scrollLeft+getWindowScrollBarX(element);var y=-winScroll.scrollTop;if(getComputedStyle(body||html).direction==='rtl'){x+=max(html.clientWidth,body?body.clientWidth:0)-width;}return{width:width,height:height,x:x,y:y};}function contains(parent,child){var rootNode=child.getRootNode&&child.getRootNode();// First, attempt with faster native method
if(parent.contains(child)){return true;}// then fallback to custom implementation with Shadow DOM support
else if(rootNode&&isShadowRoot(rootNode)){var next=child;do{if(next&&parent.isSameNode(next)){return true;}// $FlowFixMe[prop-missing]: need a better way to handle this...
next=next.parentNode||next.host;}while(next);}// Give up, the result is false
return false;}function rectToClientRect(rect){return Object.assign({},rect,{left:rect.x,top:rect.y,right:rect.x+rect.width,bottom:rect.y+rect.height});}function getInnerBoundingClientRect(element,strategy){var rect=getBoundingClientRect(element,false,strategy==='fixed');rect.top=rect.top+element.clientTop;rect.left=rect.left+element.clientLeft;rect.bottom=rect.top+element.clientHeight;rect.right=rect.left+element.clientWidth;rect.width=element.clientWidth;rect.height=element.clientHeight;rect.x=rect.left;rect.y=rect.top;return rect;}function getClientRectFromMixedType(element,clippingParent,strategy){return clippingParent===viewport?rectToClientRect(getViewportRect(element,strategy)):isElement(clippingParent)?getInnerBoundingClientRect(clippingParent,strategy):rectToClientRect(getDocumentRect(getDocumentElement(element)));}// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element){var clippingParents=listScrollParents(getParentNode(element));var canEscapeClipping=['absolute','fixed'].indexOf(getComputedStyle(element).position)>=0;var clipperElement=canEscapeClipping&&isHTMLElement(element)?getOffsetParent(element):element;if(!isElement(clipperElement)){return[];}// $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
return clippingParents.filter(function(clippingParent){return isElement(clippingParent)&&contains(clippingParent,clipperElement)&&getNodeName(clippingParent)!=='body';});}// Gets the maximum area that the element is visible in due to any number of
// clipping parents
function getClippingRect(element,boundary,rootBoundary,strategy){var mainClippingParents=boundary==='clippingParents'?getClippingParents(element):[].concat(boundary);var clippingParents=[].concat(mainClippingParents,[rootBoundary]);var firstClippingParent=clippingParents[0];var clippingRect=clippingParents.reduce(function(accRect,clippingParent){var rect=getClientRectFromMixedType(element,clippingParent,strategy);accRect.top=max(rect.top,accRect.top);accRect.right=min(rect.right,accRect.right);accRect.bottom=min(rect.bottom,accRect.bottom);accRect.left=max(rect.left,accRect.left);return accRect;},getClientRectFromMixedType(element,firstClippingParent,strategy));clippingRect.width=clippingRect.right-clippingRect.left;clippingRect.height=clippingRect.bottom-clippingRect.top;clippingRect.x=clippingRect.left;clippingRect.y=clippingRect.top;return clippingRect;}function getBasePlacement(placement){return placement.split('-')[0];}function getVariation(placement){return placement.split('-')[1];}function getMainAxisFromPlacement(placement){return['top','bottom'].indexOf(placement)>=0?'x':'y';}function computeOffsets(_ref){var reference=_ref.reference,element=_ref.element,placement=_ref.placement;var basePlacement=placement?getBasePlacement(placement):null;var variation=placement?getVariation(placement):null;var commonX=reference.x+reference.width/2-element.width/2;var commonY=reference.y+reference.height/2-element.height/2;var offsets;switch(basePlacement){case top:offsets={x:commonX,y:reference.y-element.height};break;case bottom:offsets={x:commonX,y:reference.y+reference.height};break;case right:offsets={x:reference.x+reference.width,y:commonY};break;case left:offsets={x:reference.x-element.width,y:commonY};break;default:offsets={x:reference.x,y:reference.y};}var mainAxis=basePlacement?getMainAxisFromPlacement(basePlacement):null;if(mainAxis!=null){var len=mainAxis==='y'?'height':'width';switch(variation){case start:offsets[mainAxis]=offsets[mainAxis]-(reference[len]/2-element[len]/2);break;case end:offsets[mainAxis]=offsets[mainAxis]+(reference[len]/2-element[len]/2);break;}}return offsets;}function getFreshSideObject(){return{top:0,right:0,bottom:0,left:0};}function mergePaddingObject(paddingObject){return Object.assign({},getFreshSideObject(),paddingObject);}function expandToHashMap(value,keys){return keys.reduce(function(hashMap,key){hashMap[key]=value;return hashMap;},{});}function detectOverflow(state,options){if(options===void 0){options={};}var _options=options,_options$placement=_options.placement,placement=_options$placement===void 0?state.placement:_options$placement,_options$strategy=_options.strategy,strategy=_options$strategy===void 0?state.strategy:_options$strategy,_options$boundary=_options.boundary,boundary=_options$boundary===void 0?clippingParents:_options$boundary,_options$rootBoundary=_options.rootBoundary,rootBoundary=_options$rootBoundary===void 0?viewport:_options$rootBoundary,_options$elementConte=_options.elementContext,elementContext=_options$elementConte===void 0?popper:_options$elementConte,_options$altBoundary=_options.altBoundary,altBoundary=_options$altBoundary===void 0?false:_options$altBoundary,_options$padding=_options.padding,padding=_options$padding===void 0?0:_options$padding;var paddingObject=mergePaddingObject(typeof padding!=='number'?padding:expandToHashMap(padding,basePlacements));var altContext=elementContext===popper?reference:popper;var popperRect=state.rects.popper;var element=state.elements[altBoundary?altContext:elementContext];var clippingClientRect=getClippingRect(isElement(element)?element:element.contextElement||getDocumentElement(state.elements.popper),boundary,rootBoundary,strategy);var referenceClientRect=getBoundingClientRect(state.elements.reference);var popperOffsets=computeOffsets({reference:referenceClientRect,element:popperRect,strategy:'absolute',placement:placement});var popperClientRect=rectToClientRect(Object.assign({},popperRect,popperOffsets));var elementClientRect=elementContext===popper?popperClientRect:referenceClientRect;// positive = overflowing the clipping rect
// 0 or negative = within the clipping rect
var overflowOffsets={top:clippingClientRect.top-elementClientRect.top+paddingObject.top,bottom:elementClientRect.bottom-clippingClientRect.bottom+paddingObject.bottom,left:clippingClientRect.left-elementClientRect.left+paddingObject.left,right:elementClientRect.right-clippingClientRect.right+paddingObject.right};var offsetData=state.modifiersData.offset;// Offsets can be applied only to the popper element
if(elementContext===popper&&offsetData){var offset=offsetData[placement];Object.keys(overflowOffsets).forEach(function(key){var multiply=[right,bottom].indexOf(key)>=0?1:-1;var axis=[top,bottom].indexOf(key)>=0?'y':'x';overflowOffsets[key]+=offset[axis]*multiply;});}return overflowOffsets;}var DEFAULT_OPTIONS={placement:'bottom',modifiers:[],strategy:'absolute'};function areValidElements(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return!args.some(function(element){return!(element&&typeof element.getBoundingClientRect==='function');});}function popperGenerator(generatorOptions){if(generatorOptions===void 0){generatorOptions={};}var _generatorOptions=generatorOptions,_generatorOptions$def=_generatorOptions.defaultModifiers,defaultModifiers=_generatorOptions$def===void 0?[]:_generatorOptions$def,_generatorOptions$def2=_generatorOptions.defaultOptions,defaultOptions=_generatorOptions$def2===void 0?DEFAULT_OPTIONS:_generatorOptions$def2;return function createPopper(reference,popper,options){if(options===void 0){options=defaultOptions;}var state={placement:'bottom',orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,defaultOptions),modifiersData:{},elements:{reference:reference,popper:popper},attributes:{},styles:{}};var effectCleanupFns=[];var isDestroyed=false;var instance={state:state,setOptions:function setOptions(setOptionsAction){var options=typeof setOptionsAction==='function'?setOptionsAction(state.options):setOptionsAction;cleanupModifierEffects();state.options=Object.assign({},defaultOptions,state.options,options);state.scrollParents={reference:isElement(reference)?listScrollParents(reference):reference.contextElement?listScrollParents(reference.contextElement):[],popper:listScrollParents(popper)};// Orders the modifiers based on their dependencies and `phase`
// properties
var orderedModifiers=orderModifiers(mergeByName([].concat(defaultModifiers,state.options.modifiers)));// Strip out disabled modifiers
state.orderedModifiers=orderedModifiers.filter(function(m){return m.enabled;});runModifierEffects();return instance.update();},// Sync update – it will always be executed, even if not necessary. This
// is useful for low frequency updates where sync behavior simplifies the
// logic.
// For high frequency updates (e.g. `resize` and `scroll` events), always
// prefer the async Popper#update method
forceUpdate:function forceUpdate(){if(isDestroyed){return;}var _state$elements=state.elements,reference=_state$elements.reference,popper=_state$elements.popper;// Don't proceed if `reference` or `popper` are not valid elements
// anymore
if(!areValidElements(reference,popper)){return;}// Store the reference and popper rects to be read by modifiers
state.rects={reference:getCompositeRect(reference,getOffsetParent(popper),state.options.strategy==='fixed'),popper:getLayoutRect(popper)};// Modifiers have the ability to reset the current update cycle. The
// most common use case for this is the `flip` modifier changing the
// placement, which then needs to re-run all the modifiers, because the
// logic was previously ran for the previous placement and is therefore
// stale/incorrect
state.reset=false;state.placement=state.options.placement;// On each update cycle, the `modifiersData` property for each modifier
// is filled with the initial data specified by the modifier. This means
// it doesn't persist and is fresh on each update.
// To ensure persistent data, use `${name}#persistent`
state.orderedModifiers.forEach(function(modifier){return state.modifiersData[modifier.name]=Object.assign({},modifier.data);});for(var index=0;index<state.orderedModifiers.length;index++){if(state.reset===true){state.reset=false;index=-1;continue;}var _state$orderedModifie=state.orderedModifiers[index],fn=_state$orderedModifie.fn,_state$orderedModifie2=_state$orderedModifie.options,_options=_state$orderedModifie2===void 0?{}:_state$orderedModifie2,name=_state$orderedModifie.name;if(typeof fn==='function'){state=fn({state:state,options:_options,name:name,instance:instance})||state;}}},// Async and optimistically optimized update – it will not be executed if
// not necessary (debounced to run at most once-per-tick)
update:debounce(function(){return new Promise(function(resolve){instance.forceUpdate();resolve(state);});}),destroy:function destroy(){cleanupModifierEffects();isDestroyed=true;}};if(!areValidElements(reference,popper)){return instance;}instance.setOptions(options).then(function(state){if(!isDestroyed&&options.onFirstUpdate){options.onFirstUpdate(state);}});// Modifiers have the ability to execute arbitrary code before the first
// update cycle runs. They will be executed in the same order as the update
// cycle. This is useful when a modifier adds some persistent data that
// other modifiers need to use, but the modifier is run after the dependent
// one.
function runModifierEffects(){state.orderedModifiers.forEach(function(_ref){var name=_ref.name,_ref$options=_ref.options,options=_ref$options===void 0?{}:_ref$options,effect=_ref.effect;if(typeof effect==='function'){var cleanupFn=effect({state:state,name:name,instance:instance,options:options});var noopFn=function noopFn(){};effectCleanupFns.push(cleanupFn||noopFn);}});}function cleanupModifierEffects(){effectCleanupFns.forEach(function(fn){return fn();});effectCleanupFns=[];}return instance;};}var passive={passive:true};function effect$2(_ref){var state=_ref.state,instance=_ref.instance,options=_ref.options;var _options$scroll=options.scroll,scroll=_options$scroll===void 0?true:_options$scroll,_options$resize=options.resize,resize=_options$resize===void 0?true:_options$resize;var window=getWindow(state.elements.popper);var scrollParents=[].concat(state.scrollParents.reference,state.scrollParents.popper);if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.addEventListener('scroll',instance.update,passive);});}if(resize){window.addEventListener('resize',instance.update,passive);}return function(){if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.removeEventListener('scroll',instance.update,passive);});}if(resize){window.removeEventListener('resize',instance.update,passive);}};}// eslint-disable-next-line import/no-unused-modules
var eventListeners={name:'eventListeners',enabled:true,phase:'write',fn:function fn(){},effect:effect$2,data:{}};function popperOffsets(_ref){var state=_ref.state,name=_ref.name;// Offsets are the actual position the popper needs to have to be
// properly positioned near its reference element
// This is the most basic placement, and will be adjusted by
// the modifiers in the next step
state.modifiersData[name]=computeOffsets({reference:state.rects.reference,element:state.rects.popper,strategy:'absolute',placement:state.placement});}// eslint-disable-next-line import/no-unused-modules
var popperOffsets$1={name:'popperOffsets',enabled:true,phase:'read',fn:popperOffsets,data:{}};var unsetSides={top:'auto',right:'auto',bottom:'auto',left:'auto'};// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref,win){var x=_ref.x,y=_ref.y;var dpr=win.devicePixelRatio||1;return{x:round(x*dpr)/dpr||0,y:round(y*dpr)/dpr||0};}function mapToStyles(_ref2){var _Object$assign2;var popper=_ref2.popper,popperRect=_ref2.popperRect,placement=_ref2.placement,variation=_ref2.variation,offsets=_ref2.offsets,position=_ref2.position,gpuAcceleration=_ref2.gpuAcceleration,adaptive=_ref2.adaptive,roundOffsets=_ref2.roundOffsets,isFixed=_ref2.isFixed;var _offsets$x=offsets.x,x=_offsets$x===void 0?0:_offsets$x,_offsets$y=offsets.y,y=_offsets$y===void 0?0:_offsets$y;var _ref3=typeof roundOffsets==='function'?roundOffsets({x:x,y:y}):{x:x,y:y};x=_ref3.x;y=_ref3.y;var hasX=offsets.hasOwnProperty('x');var hasY=offsets.hasOwnProperty('y');var sideX=left;var sideY=top;var win=window;if(adaptive){var offsetParent=getOffsetParent(popper);var heightProp='clientHeight';var widthProp='clientWidth';if(offsetParent===getWindow(popper)){offsetParent=getDocumentElement(popper);if(getComputedStyle(offsetParent).position!=='static'&&position==='absolute'){heightProp='scrollHeight';widthProp='scrollWidth';}}// $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
offsetParent=offsetParent;if(placement===top||(placement===left||placement===right)&&variation===end){sideY=bottom;var offsetY=isFixed&&offsetParent===win&&win.visualViewport?win.visualViewport.height:// $FlowFixMe[prop-missing]
offsetParent[heightProp];y-=offsetY-popperRect.height;y*=gpuAcceleration?1:-1;}if(placement===left||(placement===top||placement===bottom)&&variation===end){sideX=right;var offsetX=isFixed&&offsetParent===win&&win.visualViewport?win.visualViewport.width:// $FlowFixMe[prop-missing]
offsetParent[widthProp];x-=offsetX-popperRect.width;x*=gpuAcceleration?1:-1;}}var commonStyles=Object.assign({position:position},adaptive&&unsetSides);var _ref4=roundOffsets===true?roundOffsetsByDPR({x:x,y:y},getWindow(popper)):{x:x,y:y};x=_ref4.x;y=_ref4.y;if(gpuAcceleration){var _Object$assign;return Object.assign({},commonStyles,(_Object$assign={},_Object$assign[sideY]=hasY?'0':'',_Object$assign[sideX]=hasX?'0':'',_Object$assign.transform=(win.devicePixelRatio||1)<=1?"translate("+x+"px, "+y+"px)":"translate3d("+x+"px, "+y+"px, 0)",_Object$assign));}return Object.assign({},commonStyles,(_Object$assign2={},_Object$assign2[sideY]=hasY?y+"px":'',_Object$assign2[sideX]=hasX?x+"px":'',_Object$assign2.transform='',_Object$assign2));}function computeStyles(_ref5){var state=_ref5.state,options=_ref5.options;var _options$gpuAccelerat=options.gpuAcceleration,gpuAcceleration=_options$gpuAccelerat===void 0?true:_options$gpuAccelerat,_options$adaptive=options.adaptive,adaptive=_options$adaptive===void 0?true:_options$adaptive,_options$roundOffsets=options.roundOffsets,roundOffsets=_options$roundOffsets===void 0?true:_options$roundOffsets;var commonStyles={placement:getBasePlacement(state.placement),variation:getVariation(state.placement),popper:state.elements.popper,popperRect:state.rects.popper,gpuAcceleration:gpuAcceleration,isFixed:state.options.strategy==='fixed'};if(state.modifiersData.popperOffsets!=null){state.styles.popper=Object.assign({},state.styles.popper,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.popperOffsets,position:state.options.strategy,adaptive:adaptive,roundOffsets:roundOffsets})));}if(state.modifiersData.arrow!=null){state.styles.arrow=Object.assign({},state.styles.arrow,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.arrow,position:'absolute',adaptive:false,roundOffsets:roundOffsets})));}state.attributes.popper=Object.assign({},state.attributes.popper,{'data-popper-placement':state.placement});}// eslint-disable-next-line import/no-unused-modules
var computeStyles$1={name:'computeStyles',enabled:true,phase:'beforeWrite',fn:computeStyles,data:{}};// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref){var state=_ref.state;Object.keys(state.elements).forEach(function(name){var style=state.styles[name]||{};var attributes=state.attributes[name]||{};var element=state.elements[name];// arrow is optional + virtual elements
if(!isHTMLElement(element)||!getNodeName(element)){return;}// Flow doesn't support to extend this property, but it's the most
// effective way to apply styles to an HTMLElement
// $FlowFixMe[cannot-write]
Object.assign(element.style,style);Object.keys(attributes).forEach(function(name){var value=attributes[name];if(value===false){element.removeAttribute(name);}else{element.setAttribute(name,value===true?'':value);}});});}function effect$1(_ref2){var state=_ref2.state;var initialStyles={popper:{position:state.options.strategy,left:'0',top:'0',margin:'0'},arrow:{position:'absolute'},reference:{}};Object.assign(state.elements.popper.style,initialStyles.popper);state.styles=initialStyles;if(state.elements.arrow){Object.assign(state.elements.arrow.style,initialStyles.arrow);}return function(){Object.keys(state.elements).forEach(function(name){var element=state.elements[name];var attributes=state.attributes[name]||{};var styleProperties=Object.keys(state.styles.hasOwnProperty(name)?state.styles[name]:initialStyles[name]);// Set all values to an empty string to unset them
var style=styleProperties.reduce(function(style,property){style[property]='';return style;},{});// arrow is optional + virtual elements
if(!isHTMLElement(element)||!getNodeName(element)){return;}Object.assign(element.style,style);Object.keys(attributes).forEach(function(attribute){element.removeAttribute(attribute);});});};}// eslint-disable-next-line import/no-unused-modules
var applyStyles$1={name:'applyStyles',enabled:true,phase:'write',fn:applyStyles,effect:effect$1,requires:['computeStyles']};function distanceAndSkiddingToXY(placement,rects,offset){var basePlacement=getBasePlacement(placement);var invertDistance=[left,top].indexOf(basePlacement)>=0?-1:1;var _ref=typeof offset==='function'?offset(Object.assign({},rects,{placement:placement})):offset,skidding=_ref[0],distance=_ref[1];skidding=skidding||0;distance=(distance||0)*invertDistance;return[left,right].indexOf(basePlacement)>=0?{x:distance,y:skidding}:{x:skidding,y:distance};}function offset(_ref2){var state=_ref2.state,options=_ref2.options,name=_ref2.name;var _options$offset=options.offset,offset=_options$offset===void 0?[0,0]:_options$offset;var data=placements.reduce(function(acc,placement){acc[placement]=distanceAndSkiddingToXY(placement,state.rects,offset);return acc;},{});var _data$state$placement=data[state.placement],x=_data$state$placement.x,y=_data$state$placement.y;if(state.modifiersData.popperOffsets!=null){state.modifiersData.popperOffsets.x+=x;state.modifiersData.popperOffsets.y+=y;}state.modifiersData[name]=data;}// eslint-disable-next-line import/no-unused-modules
var offset$1={name:'offset',enabled:true,phase:'main',requires:['popperOffsets'],fn:offset};var hash$1={left:'right',right:'left',bottom:'top',top:'bottom'};function getOppositePlacement(placement){return placement.replace(/left|right|bottom|top/g,function(matched){return hash$1[matched];});}var hash={start:'end',end:'start'};function getOppositeVariationPlacement(placement){return placement.replace(/start|end/g,function(matched){return hash[matched];});}function computeAutoPlacement(state,options){if(options===void 0){options={};}var _options=options,placement=_options.placement,boundary=_options.boundary,rootBoundary=_options.rootBoundary,padding=_options.padding,flipVariations=_options.flipVariations,_options$allowedAutoP=_options.allowedAutoPlacements,allowedAutoPlacements=_options$allowedAutoP===void 0?placements:_options$allowedAutoP;var variation=getVariation(placement);var placements$1=variation?flipVariations?variationPlacements:variationPlacements.filter(function(placement){return getVariation(placement)===variation;}):basePlacements;var allowedPlacements=placements$1.filter(function(placement){return allowedAutoPlacements.indexOf(placement)>=0;});if(allowedPlacements.length===0){allowedPlacements=placements$1;}// $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
var overflows=allowedPlacements.reduce(function(acc,placement){acc[placement]=detectOverflow(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding})[getBasePlacement(placement)];return acc;},{});return Object.keys(overflows).sort(function(a,b){return overflows[a]-overflows[b];});}function getExpandedFallbackPlacements(placement){if(getBasePlacement(placement)===auto){return[];}var oppositePlacement=getOppositePlacement(placement);return[getOppositeVariationPlacement(placement),oppositePlacement,getOppositeVariationPlacement(oppositePlacement)];}function flip(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;if(state.modifiersData[name]._skip){return;}var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?true:_options$altAxis,specifiedFallbackPlacements=options.fallbackPlacements,padding=options.padding,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,_options$flipVariatio=options.flipVariations,flipVariations=_options$flipVariatio===void 0?true:_options$flipVariatio,allowedAutoPlacements=options.allowedAutoPlacements;var preferredPlacement=state.options.placement;var basePlacement=getBasePlacement(preferredPlacement);var isBasePlacement=basePlacement===preferredPlacement;var fallbackPlacements=specifiedFallbackPlacements||(isBasePlacement||!flipVariations?[getOppositePlacement(preferredPlacement)]:getExpandedFallbackPlacements(preferredPlacement));var placements=[preferredPlacement].concat(fallbackPlacements).reduce(function(acc,placement){return acc.concat(getBasePlacement(placement)===auto?computeAutoPlacement(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding,flipVariations:flipVariations,allowedAutoPlacements:allowedAutoPlacements}):placement);},[]);var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var checksMap=new Map();var makeFallbackChecks=true;var firstFittingPlacement=placements[0];for(var i=0;i<placements.length;i++){var placement=placements[i];var _basePlacement=getBasePlacement(placement);var isStartVariation=getVariation(placement)===start;var isVertical=[top,bottom].indexOf(_basePlacement)>=0;var len=isVertical?'width':'height';var overflow=detectOverflow(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,altBoundary:altBoundary,padding:padding});var mainVariationSide=isVertical?isStartVariation?right:left:isStartVariation?bottom:top;if(referenceRect[len]>popperRect[len]){mainVariationSide=getOppositePlacement(mainVariationSide);}var altVariationSide=getOppositePlacement(mainVariationSide);var checks=[];if(checkMainAxis){checks.push(overflow[_basePlacement]<=0);}if(checkAltAxis){checks.push(overflow[mainVariationSide]<=0,overflow[altVariationSide]<=0);}if(checks.every(function(check){return check;})){firstFittingPlacement=placement;makeFallbackChecks=false;break;}checksMap.set(placement,checks);}if(makeFallbackChecks){// `2` may be desired in some cases – research later
var numberOfChecks=flipVariations?3:1;var _loop=function _loop(_i){var fittingPlacement=placements.find(function(placement){var checks=checksMap.get(placement);if(checks){return checks.slice(0,_i).every(function(check){return check;});}});if(fittingPlacement){firstFittingPlacement=fittingPlacement;return"break";}};for(var _i=numberOfChecks;_i>0;_i--){var _ret=_loop(_i);if(_ret==="break")break;}}if(state.placement!==firstFittingPlacement){state.modifiersData[name]._skip=true;state.placement=firstFittingPlacement;state.reset=true;}}// eslint-disable-next-line import/no-unused-modules
var flip$1={name:'flip',enabled:true,phase:'main',fn:flip,requiresIfExists:['offset'],data:{_skip:false}};function getAltAxis(axis){return axis==='x'?'y':'x';}function within(min$1,value,max$1){return max(min$1,min(value,max$1));}function withinMaxClamp(min,value,max){var v=within(min,value,max);return v>max?max:v;}function preventOverflow(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?false:_options$altAxis,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,padding=options.padding,_options$tether=options.tether,tether=_options$tether===void 0?true:_options$tether,_options$tetherOffset=options.tetherOffset,tetherOffset=_options$tetherOffset===void 0?0:_options$tetherOffset;var overflow=detectOverflow(state,{boundary:boundary,rootBoundary:rootBoundary,padding:padding,altBoundary:altBoundary});var basePlacement=getBasePlacement(state.placement);var variation=getVariation(state.placement);var isBasePlacement=!variation;var mainAxis=getMainAxisFromPlacement(basePlacement);var altAxis=getAltAxis(mainAxis);var popperOffsets=state.modifiersData.popperOffsets;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var tetherOffsetValue=typeof tetherOffset==='function'?tetherOffset(Object.assign({},state.rects,{placement:state.placement})):tetherOffset;var normalizedTetherOffsetValue=typeof tetherOffsetValue==='number'?{mainAxis:tetherOffsetValue,altAxis:tetherOffsetValue}:Object.assign({mainAxis:0,altAxis:0},tetherOffsetValue);var offsetModifierState=state.modifiersData.offset?state.modifiersData.offset[state.placement]:null;var data={x:0,y:0};if(!popperOffsets){return;}if(checkMainAxis){var _offsetModifierState$;var mainSide=mainAxis==='y'?top:left;var altSide=mainAxis==='y'?bottom:right;var len=mainAxis==='y'?'height':'width';var offset=popperOffsets[mainAxis];var min$1=offset+overflow[mainSide];var max$1=offset-overflow[altSide];var additive=tether?-popperRect[len]/2:0;var minLen=variation===start?referenceRect[len]:popperRect[len];var maxLen=variation===start?-popperRect[len]:-referenceRect[len];// We need to include the arrow in the calculation so the arrow doesn't go
// outside the reference bounds
var arrowElement=state.elements.arrow;var arrowRect=tether&&arrowElement?getLayoutRect(arrowElement):{width:0,height:0};var arrowPaddingObject=state.modifiersData['arrow#persistent']?state.modifiersData['arrow#persistent'].padding:getFreshSideObject();var arrowPaddingMin=arrowPaddingObject[mainSide];var arrowPaddingMax=arrowPaddingObject[altSide];// If the reference length is smaller than the arrow length, we don't want
// to include its full size in the calculation. If the reference is small
// and near the edge of a boundary, the popper can overflow even if the
// reference is not overflowing as well (e.g. virtual elements with no
// width or height)
var arrowLen=within(0,referenceRect[len],arrowRect[len]);var minOffset=isBasePlacement?referenceRect[len]/2-additive-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis:minLen-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis;var maxOffset=isBasePlacement?-referenceRect[len]/2+additive+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis:maxLen+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis;var arrowOffsetParent=state.elements.arrow&&getOffsetParent(state.elements.arrow);var clientOffset=arrowOffsetParent?mainAxis==='y'?arrowOffsetParent.clientTop||0:arrowOffsetParent.clientLeft||0:0;var offsetModifierValue=(_offsetModifierState$=offsetModifierState==null?void 0:offsetModifierState[mainAxis])!=null?_offsetModifierState$:0;var tetherMin=offset+minOffset-offsetModifierValue-clientOffset;var tetherMax=offset+maxOffset-offsetModifierValue;var preventedOffset=within(tether?min(min$1,tetherMin):min$1,offset,tether?max(max$1,tetherMax):max$1);popperOffsets[mainAxis]=preventedOffset;data[mainAxis]=preventedOffset-offset;}if(checkAltAxis){var _offsetModifierState$2;var _mainSide=mainAxis==='x'?top:left;var _altSide=mainAxis==='x'?bottom:right;var _offset=popperOffsets[altAxis];var _len=altAxis==='y'?'height':'width';var _min=_offset+overflow[_mainSide];var _max=_offset-overflow[_altSide];var isOriginSide=[top,left].indexOf(basePlacement)!==-1;var _offsetModifierValue=(_offsetModifierState$2=offsetModifierState==null?void 0:offsetModifierState[altAxis])!=null?_offsetModifierState$2:0;var _tetherMin=isOriginSide?_min:_offset-referenceRect[_len]-popperRect[_len]-_offsetModifierValue+normalizedTetherOffsetValue.altAxis;var _tetherMax=isOriginSide?_offset+referenceRect[_len]+popperRect[_len]-_offsetModifierValue-normalizedTetherOffsetValue.altAxis:_max;var _preventedOffset=tether&&isOriginSide?withinMaxClamp(_tetherMin,_offset,_tetherMax):within(tether?_tetherMin:_min,_offset,tether?_tetherMax:_max);popperOffsets[altAxis]=_preventedOffset;data[altAxis]=_preventedOffset-_offset;}state.modifiersData[name]=data;}// eslint-disable-next-line import/no-unused-modules
var preventOverflow$1={name:'preventOverflow',enabled:true,phase:'main',fn:preventOverflow,requiresIfExists:['offset']};var toPaddingObject=function toPaddingObject(padding,state){padding=typeof padding==='function'?padding(Object.assign({},state.rects,{placement:state.placement})):padding;return mergePaddingObject(typeof padding!=='number'?padding:expandToHashMap(padding,basePlacements));};function arrow(_ref){var _state$modifiersData$;var state=_ref.state,name=_ref.name,options=_ref.options;var arrowElement=state.elements.arrow;var popperOffsets=state.modifiersData.popperOffsets;var basePlacement=getBasePlacement(state.placement);var axis=getMainAxisFromPlacement(basePlacement);var isVertical=[left,right].indexOf(basePlacement)>=0;var len=isVertical?'height':'width';if(!arrowElement||!popperOffsets){return;}var paddingObject=toPaddingObject(options.padding,state);var arrowRect=getLayoutRect(arrowElement);var minProp=axis==='y'?top:left;var maxProp=axis==='y'?bottom:right;var endDiff=state.rects.reference[len]+state.rects.reference[axis]-popperOffsets[axis]-state.rects.popper[len];var startDiff=popperOffsets[axis]-state.rects.reference[axis];var arrowOffsetParent=getOffsetParent(arrowElement);var clientSize=arrowOffsetParent?axis==='y'?arrowOffsetParent.clientHeight||0:arrowOffsetParent.clientWidth||0:0;var centerToReference=endDiff/2-startDiff/2;// Make sure the arrow doesn't overflow the popper if the center point is
// outside of the popper bounds
var min=paddingObject[minProp];var max=clientSize-arrowRect[len]-paddingObject[maxProp];var center=clientSize/2-arrowRect[len]/2+centerToReference;var offset=within(min,center,max);// Prevents breaking syntax highlighting...
var axisProp=axis;state.modifiersData[name]=(_state$modifiersData$={},_state$modifiersData$[axisProp]=offset,_state$modifiersData$.centerOffset=offset-center,_state$modifiersData$);}function effect(_ref2){var state=_ref2.state,options=_ref2.options;var _options$element=options.element,arrowElement=_options$element===void 0?'[data-popper-arrow]':_options$element;if(arrowElement==null){return;}// CSS selector
if(typeof arrowElement==='string'){arrowElement=state.elements.popper.querySelector(arrowElement);if(!arrowElement){return;}}if(!contains(state.elements.popper,arrowElement)){return;}state.elements.arrow=arrowElement;}// eslint-disable-next-line import/no-unused-modules
var arrow$1={name:'arrow',enabled:true,phase:'main',fn:arrow,effect:effect,requires:['popperOffsets'],requiresIfExists:['preventOverflow']};function getSideOffsets(overflow,rect,preventedOffsets){if(preventedOffsets===void 0){preventedOffsets={x:0,y:0};}return{top:overflow.top-rect.height-preventedOffsets.y,right:overflow.right-rect.width+preventedOffsets.x,bottom:overflow.bottom-rect.height+preventedOffsets.y,left:overflow.left-rect.width-preventedOffsets.x};}function isAnySideFullyClipped(overflow){return[top,right,bottom,left].some(function(side){return overflow[side]>=0;});}function hide(_ref){var state=_ref.state,name=_ref.name;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var preventedOffsets=state.modifiersData.preventOverflow;var referenceOverflow=detectOverflow(state,{elementContext:'reference'});var popperAltOverflow=detectOverflow(state,{altBoundary:true});var referenceClippingOffsets=getSideOffsets(referenceOverflow,referenceRect);var popperEscapeOffsets=getSideOffsets(popperAltOverflow,popperRect,preventedOffsets);var isReferenceHidden=isAnySideFullyClipped(referenceClippingOffsets);var hasPopperEscaped=isAnySideFullyClipped(popperEscapeOffsets);state.modifiersData[name]={referenceClippingOffsets:referenceClippingOffsets,popperEscapeOffsets:popperEscapeOffsets,isReferenceHidden:isReferenceHidden,hasPopperEscaped:hasPopperEscaped};state.attributes.popper=Object.assign({},state.attributes.popper,{'data-popper-reference-hidden':isReferenceHidden,'data-popper-escaped':hasPopperEscaped});}// eslint-disable-next-line import/no-unused-modules
var hide$1={name:'hide',enabled:true,phase:'main',requiresIfExists:['preventOverflow'],fn:hide};var defaultModifiers$1=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1];var createPopper$1=/*#__PURE__*/popperGenerator({defaultModifiers:defaultModifiers$1});// eslint-disable-next-line import/no-unused-modules
var defaultModifiers=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1,offset$1,flip$1,preventOverflow$1,arrow$1,hide$1];var createPopper=/*#__PURE__*/popperGenerator({defaultModifiers:defaultModifiers});// eslint-disable-next-line import/no-unused-modules
exports.applyStyles=applyStyles$1;exports.arrow=arrow$1;exports.computeStyles=computeStyles$1;exports.createPopper=createPopper;exports.createPopperLite=createPopper$1;exports.defaultModifiers=defaultModifiers;exports.detectOverflow=detectOverflow;exports.eventListeners=eventListeners;exports.flip=flip$1;exports.hide=hide$1;exports.offset=offset$1;exports.popperGenerator=popperGenerator;exports.popperOffsets=popperOffsets$1;exports.preventOverflow=preventOverflow$1;Object.defineProperty(exports,'__esModule',{value:true});});//# sourceMappingURL=popper.js.map
/**!
* tippy.js v6.3.7
* (c) 2017-2021 atomiks
* MIT License
*/(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory(require('@popperjs/core')):typeof define==='function'&&define.amd?define(['@popperjs/core'],factory):(global=global||self,global.tippy=factory(global.Popper));})(this,function(core){'use strict';var ROUND_ARROW='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';var BOX_CLASS="tippy-box";var CONTENT_CLASS="tippy-content";var BACKDROP_CLASS="tippy-backdrop";var ARROW_CLASS="tippy-arrow";var SVG_ARROW_CLASS="tippy-svg-arrow";var TOUCH_OPTIONS={passive:true,capture:true};var TIPPY_DEFAULT_APPEND_TO=function TIPPY_DEFAULT_APPEND_TO(){return document.body;};function hasOwnProperty(obj,key){return{}.hasOwnProperty.call(obj,key);}function getValueAtIndexOrReturn(value,index,defaultValue){if(Array.isArray(value)){var v=value[index];return v==null?Array.isArray(defaultValue)?defaultValue[index]:defaultValue:v;}return value;}function isType(value,type){var str={}.toString.call(value);return str.indexOf('[object')===0&&str.indexOf(type+"]")>-1;}function invokeWithArgsOrReturn(value,args){return typeof value==='function'?value.apply(void 0,args):value;}function debounce(fn,ms){// Avoid wrapping in `setTimeout` if ms is 0 anyway
if(ms===0){return fn;}var timeout;return function(arg){clearTimeout(timeout);timeout=setTimeout(function(){fn(arg);},ms);};}function removeProperties(obj,keys){var clone=Object.assign({},obj);keys.forEach(function(key){delete clone[key];});return clone;}function splitBySpaces(value){return value.split(/\s+/).filter(Boolean);}function normalizeToArray(value){return[].concat(value);}function pushIfUnique(arr,value){if(arr.indexOf(value)===-1){arr.push(value);}}function unique(arr){return arr.filter(function(item,index){return arr.indexOf(item)===index;});}function getBasePlacement(placement){return placement.split('-')[0];}function arrayFrom(value){return[].slice.call(value);}function removeUndefinedProps(obj){return Object.keys(obj).reduce(function(acc,key){if(obj[key]!==undefined){acc[key]=obj[key];}return acc;},{});}function div(){return document.createElement('div');}function isElement(value){return['Element','Fragment'].some(function(type){return isType(value,type);});}function isNodeList(value){return isType(value,'NodeList');}function isMouseEvent(value){return isType(value,'MouseEvent');}function isReferenceElement(value){return!!(value&&value._tippy&&value._tippy.reference===value);}function getArrayOfElements(value){if(isElement(value)){return[value];}if(isNodeList(value)){return arrayFrom(value);}if(Array.isArray(value)){return value;}return arrayFrom(document.querySelectorAll(value));}function setTransitionDuration(els,value){els.forEach(function(el){if(el){el.style.transitionDuration=value+"ms";}});}function setVisibilityState(els,state){els.forEach(function(el){if(el){el.setAttribute('data-state',state);}});}function getOwnerDocument(elementOrElements){var _element$ownerDocumen;var _normalizeToArray=normalizeToArray(elementOrElements),element=_normalizeToArray[0];// Elements created via a <template> have an ownerDocument with no reference to the body
return element!=null&&(_element$ownerDocumen=element.ownerDocument)!=null&&_element$ownerDocumen.body?element.ownerDocument:document;}function isCursorOutsideInteractiveBorder(popperTreeData,event){var clientX=event.clientX,clientY=event.clientY;return popperTreeData.every(function(_ref){var popperRect=_ref.popperRect,popperState=_ref.popperState,props=_ref.props;var interactiveBorder=props.interactiveBorder;var basePlacement=getBasePlacement(popperState.placement);var offsetData=popperState.modifiersData.offset;if(!offsetData){return true;}var topDistance=basePlacement==='bottom'?offsetData.top.y:0;var bottomDistance=basePlacement==='top'?offsetData.bottom.y:0;var leftDistance=basePlacement==='right'?offsetData.left.x:0;var rightDistance=basePlacement==='left'?offsetData.right.x:0;var exceedsTop=popperRect.top-clientY+topDistance>interactiveBorder;var exceedsBottom=clientY-popperRect.bottom-bottomDistance>interactiveBorder;var exceedsLeft=popperRect.left-clientX+leftDistance>interactiveBorder;var exceedsRight=clientX-popperRect.right-rightDistance>interactiveBorder;return exceedsTop||exceedsBottom||exceedsLeft||exceedsRight;});}function updateTransitionEndListener(box,action,listener){var method=action+"EventListener";// some browsers apparently support `transition` (unprefixed) but only fire
// `webkitTransitionEnd`...
['transitionend','webkitTransitionEnd'].forEach(function(event){box[method](event,listener);});}/**
   * Compared to xxx.contains, this function works for dom structures with shadow
   * dom
   */function actualContains(parent,child){var target=child;while(target){var _target$getRootNode;if(parent.contains(target)){return true;}target=target.getRootNode==null?void 0:(_target$getRootNode=target.getRootNode())==null?void 0:_target$getRootNode.host;}return false;}var currentInput={isTouch:false};var lastMouseMoveTime=0;/**
   * When a `touchstart` event is fired, it's assumed the user is using touch
   * input. We'll bind a `mousemove` event listener to listen for mouse input in
   * the future. This way, the `isTouch` property is fully dynamic and will handle
   * hybrid devices that use a mix of touch + mouse input.
   */function onDocumentTouchStart(){if(currentInput.isTouch){return;}currentInput.isTouch=true;if(window.performance){document.addEventListener('mousemove',onDocumentMouseMove);}}/**
   * When two `mousemove` event are fired consecutively within 20ms, it's assumed
   * the user is using mouse input again. `mousemove` can fire on touch devices as
   * well, but very rarely that quickly.
   */function onDocumentMouseMove(){var now=performance.now();if(now-lastMouseMoveTime<20){currentInput.isTouch=false;document.removeEventListener('mousemove',onDocumentMouseMove);}lastMouseMoveTime=now;}/**
   * When an element is in focus and has a tippy, leaving the tab/window and
   * returning causes it to show again. For mouse users this is unexpected, but
   * for keyboard use it makes sense.
   * TODO: find a better technique to solve this problem
   */function onWindowBlur(){var activeElement=document.activeElement;if(isReferenceElement(activeElement)){var instance=activeElement._tippy;if(activeElement.blur&&!instance.state.isVisible){activeElement.blur();}}}function bindGlobalEventListeners(){document.addEventListener('touchstart',onDocumentTouchStart,TOUCH_OPTIONS);window.addEventListener('blur',onWindowBlur);}var isBrowser=typeof window!=='undefined'&&typeof document!=='undefined';var isIE11=isBrowser?// @ts-ignore
!!window.msCrypto:false;function createMemoryLeakWarning(method){var txt=method==='destroy'?'n already-':' ';return[method+"() was called on a"+txt+"destroyed instance. This is a no-op but",'indicates a potential memory leak.'].join(' ');}function clean(value){var spacesAndTabs=/[ \t]{2,}/g;var lineStartWithSpaces=/^[ \t]*/gm;return value.replace(spacesAndTabs,' ').replace(lineStartWithSpaces,'').trim();}function getDevMessage(message){return clean("\n  %ctippy.js\n\n  %c"+clean(message)+"\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");}function getFormattedMessage(message){return[getDevMessage(message),// title
'color: #00C584; font-size: 1.3em; font-weight: bold;',// message
'line-height: 1.5',// footer
'color: #a6a095;'];}// Assume warnings and errors never have the same message
var visitedMessages;{resetVisitedMessages();}function resetVisitedMessages(){visitedMessages=new Set();}function warnWhen(condition,message){if(condition&&!visitedMessages.has(message)){var _console;visitedMessages.add(message);(_console=console).warn.apply(_console,getFormattedMessage(message));}}function errorWhen(condition,message){if(condition&&!visitedMessages.has(message)){var _console2;visitedMessages.add(message);(_console2=console).error.apply(_console2,getFormattedMessage(message));}}function validateTargets(targets){var didPassFalsyValue=!targets;var didPassPlainObject=Object.prototype.toString.call(targets)==='[object Object]'&&!targets.addEventListener;errorWhen(didPassFalsyValue,['tippy() was passed','`'+String(targets)+'`','as its targets (first) argument. Valid types are: String, Element,','Element[], or NodeList.'].join(' '));errorWhen(didPassPlainObject,['tippy() was passed a plain object which is not supported as an argument','for virtual positioning. Use props.getReferenceClientRect instead.'].join(' '));}var pluginProps={animateFill:false,followCursor:false,inlinePositioning:false,sticky:false};var renderProps={allowHTML:false,animation:'fade',arrow:true,content:'',inertia:false,maxWidth:350,role:'tooltip',theme:'',zIndex:9999};var defaultProps=Object.assign({appendTo:TIPPY_DEFAULT_APPEND_TO,aria:{content:'auto',expanded:'auto'},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:true,ignoreAttributes:false,interactive:false,interactiveBorder:2,interactiveDebounce:0,moveTransition:'',offset:[0,10],onAfterUpdate:function onAfterUpdate(){},onBeforeUpdate:function onBeforeUpdate(){},onCreate:function onCreate(){},onDestroy:function onDestroy(){},onHidden:function onHidden(){},onHide:function onHide(){},onMount:function onMount(){},onShow:function onShow(){},onShown:function onShown(){},onTrigger:function onTrigger(){},onUntrigger:function onUntrigger(){},onClickOutside:function onClickOutside(){},placement:'top',plugins:[],popperOptions:{},render:null,showOnCreate:false,touch:true,trigger:'mouseenter focus',triggerTarget:null},pluginProps,renderProps);var defaultKeys=Object.keys(defaultProps);var setDefaultProps=function setDefaultProps(partialProps){/* istanbul ignore else */{validateProps(partialProps,[]);}var keys=Object.keys(partialProps);keys.forEach(function(key){defaultProps[key]=partialProps[key];});};function getExtendedPassedProps(passedProps){var plugins=passedProps.plugins||[];var pluginProps=plugins.reduce(function(acc,plugin){var name=plugin.name,defaultValue=plugin.defaultValue;if(name){var _name;acc[name]=passedProps[name]!==undefined?passedProps[name]:(_name=defaultProps[name])!=null?_name:defaultValue;}return acc;},{});return Object.assign({},passedProps,pluginProps);}function getDataAttributeProps(reference,plugins){var propKeys=plugins?Object.keys(getExtendedPassedProps(Object.assign({},defaultProps,{plugins:plugins}))):defaultKeys;var props=propKeys.reduce(function(acc,key){var valueAsString=(reference.getAttribute("data-tippy-"+key)||'').trim();if(!valueAsString){return acc;}if(key==='content'){acc[key]=valueAsString;}else{try{acc[key]=JSON.parse(valueAsString);}catch(e){acc[key]=valueAsString;}}return acc;},{});return props;}function evaluateProps(reference,props){var out=Object.assign({},props,{content:invokeWithArgsOrReturn(props.content,[reference])},props.ignoreAttributes?{}:getDataAttributeProps(reference,props.plugins));out.aria=Object.assign({},defaultProps.aria,out.aria);out.aria={expanded:out.aria.expanded==='auto'?props.interactive:out.aria.expanded,content:out.aria.content==='auto'?props.interactive?null:'describedby':out.aria.content};return out;}function validateProps(partialProps,plugins){if(partialProps===void 0){partialProps={};}if(plugins===void 0){plugins=[];}var keys=Object.keys(partialProps);keys.forEach(function(prop){var nonPluginProps=removeProperties(defaultProps,Object.keys(pluginProps));var didPassUnknownProp=!hasOwnProperty(nonPluginProps,prop);// Check if the prop exists in `plugins`
if(didPassUnknownProp){didPassUnknownProp=plugins.filter(function(plugin){return plugin.name===prop;}).length===0;}warnWhen(didPassUnknownProp,["`"+prop+"`","is not a valid prop. You may have spelled it incorrectly, or if it's",'a plugin, forgot to pass it in an array as props.plugins.','\n\n','All props: https://atomiks.github.io/tippyjs/v6/all-props/\n','Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'].join(' '));});}var innerHTML=function innerHTML(){return'innerHTML';};function dangerouslySetInnerHTML(element,html){element[innerHTML()]=html;}function createArrowElement(value){var arrow=div();if(value===true){arrow.className=ARROW_CLASS;}else{arrow.className=SVG_ARROW_CLASS;if(isElement(value)){arrow.appendChild(value);}else{dangerouslySetInnerHTML(arrow,value);}}return arrow;}function setContent(content,props){if(isElement(props.content)){dangerouslySetInnerHTML(content,'');content.appendChild(props.content);}else if(typeof props.content!=='function'){if(props.allowHTML){dangerouslySetInnerHTML(content,props.content);}else{content.textContent=props.content;}}}function getChildren(popper){var box=popper.firstElementChild;var boxChildren=arrayFrom(box.children);return{box:box,content:boxChildren.find(function(node){return node.classList.contains(CONTENT_CLASS);}),arrow:boxChildren.find(function(node){return node.classList.contains(ARROW_CLASS)||node.classList.contains(SVG_ARROW_CLASS);}),backdrop:boxChildren.find(function(node){return node.classList.contains(BACKDROP_CLASS);})};}function render(instance){var popper=div();var box=div();box.className=BOX_CLASS;box.setAttribute('data-state','hidden');box.setAttribute('tabindex','-1');var content=div();content.className=CONTENT_CLASS;content.setAttribute('data-state','hidden');setContent(content,instance.props);popper.appendChild(box);box.appendChild(content);onUpdate(instance.props,instance.props);function onUpdate(prevProps,nextProps){var _getChildren=getChildren(popper),box=_getChildren.box,content=_getChildren.content,arrow=_getChildren.arrow;if(nextProps.theme){box.setAttribute('data-theme',nextProps.theme);}else{box.removeAttribute('data-theme');}if(typeof nextProps.animation==='string'){box.setAttribute('data-animation',nextProps.animation);}else{box.removeAttribute('data-animation');}if(nextProps.inertia){box.setAttribute('data-inertia','');}else{box.removeAttribute('data-inertia');}box.style.maxWidth=typeof nextProps.maxWidth==='number'?nextProps.maxWidth+"px":nextProps.maxWidth;if(nextProps.role){box.setAttribute('role',nextProps.role);}else{box.removeAttribute('role');}if(prevProps.content!==nextProps.content||prevProps.allowHTML!==nextProps.allowHTML){setContent(content,instance.props);}if(nextProps.arrow){if(!arrow){box.appendChild(createArrowElement(nextProps.arrow));}else if(prevProps.arrow!==nextProps.arrow){box.removeChild(arrow);box.appendChild(createArrowElement(nextProps.arrow));}}else if(arrow){box.removeChild(arrow);}}return{popper:popper,onUpdate:onUpdate};}// Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away
render.$$tippy=true;var idCounter=1;var mouseMoveListeners=[];// Used by `hideAll()`
var mountedInstances=[];function createTippy(reference,passedProps){var props=evaluateProps(reference,Object.assign({},defaultProps,getExtendedPassedProps(removeUndefinedProps(passedProps))));// ===========================================================================
// 🔒 Private members
// ===========================================================================
var showTimeout;var hideTimeout;var scheduleHideAnimationFrame;var isVisibleFromClick=false;var didHideDueToDocumentMouseDown=false;var didTouchMove=false;var ignoreOnFirstUpdate=false;var lastTriggerEvent;var currentTransitionEndListener;var onFirstUpdate;var listeners=[];var debouncedOnMouseMove=debounce(onMouseMove,props.interactiveDebounce);var currentTarget;// ===========================================================================
// 🔑 Public members
// ===========================================================================
var id=idCounter++;var popperInstance=null;var plugins=unique(props.plugins);var state={// Is the instance currently enabled?
isEnabled:true,// Is the tippy currently showing and not transitioning out?
isVisible:false,// Has the instance been destroyed?
isDestroyed:false,// Is the tippy currently mounted to the DOM?
isMounted:false,// Has the tippy finished transitioning in?
isShown:false};var instance={// properties
id:id,reference:reference,popper:div(),popperInstance:popperInstance,props:props,state:state,plugins:plugins,// methods
clearDelayTimeouts:clearDelayTimeouts,setProps:setProps,setContent:setContent,show:show,hide:hide,hideWithInteractivity:hideWithInteractivity,enable:enable,disable:disable,unmount:unmount,destroy:destroy};// TODO: Investigate why this early return causes a TDZ error in the tests —
// it doesn't seem to happen in the browser
/* istanbul ignore if */if(!props.render){{errorWhen(true,'render() function has not been supplied.');}return instance;}// ===========================================================================
// Initial mutations
// ===========================================================================
var _props$render=props.render(instance),popper=_props$render.popper,onUpdate=_props$render.onUpdate;popper.setAttribute('data-tippy-root','');popper.id="tippy-"+instance.id;instance.popper=popper;reference._tippy=instance;popper._tippy=instance;var pluginsHooks=plugins.map(function(plugin){return plugin.fn(instance);});var hasAriaExpanded=reference.hasAttribute('aria-expanded');addListeners();handleAriaExpandedAttribute();handleStyles();invokeHook('onCreate',[instance]);if(props.showOnCreate){scheduleShow();}// Prevent a tippy with a delay from hiding if the cursor left then returned
// before it started hiding
popper.addEventListener('mouseenter',function(){if(instance.props.interactive&&instance.state.isVisible){instance.clearDelayTimeouts();}});popper.addEventListener('mouseleave',function(){if(instance.props.interactive&&instance.props.trigger.indexOf('mouseenter')>=0){getDocument().addEventListener('mousemove',debouncedOnMouseMove);}});return instance;// ===========================================================================
// 🔒 Private methods
// ===========================================================================
function getNormalizedTouchSettings(){var touch=instance.props.touch;return Array.isArray(touch)?touch:[touch,0];}function getIsCustomTouchBehavior(){return getNormalizedTouchSettings()[0]==='hold';}function getIsDefaultRenderFn(){var _instance$props$rende;// @ts-ignore
return!!((_instance$props$rende=instance.props.render)!=null&&_instance$props$rende.$$tippy);}function getCurrentTarget(){return currentTarget||reference;}function getDocument(){var parent=getCurrentTarget().parentNode;return parent?getOwnerDocument(parent):document;}function getDefaultTemplateChildren(){return getChildren(popper);}function getDelay(isShow){// For touch or keyboard input, force `0` delay for UX reasons
// Also if the instance is mounted but not visible (transitioning out),
// ignore delay
if(instance.state.isMounted&&!instance.state.isVisible||currentInput.isTouch||lastTriggerEvent&&lastTriggerEvent.type==='focus'){return 0;}return getValueAtIndexOrReturn(instance.props.delay,isShow?0:1,defaultProps.delay);}function handleStyles(fromHide){if(fromHide===void 0){fromHide=false;}popper.style.pointerEvents=instance.props.interactive&&!fromHide?'':'none';popper.style.zIndex=""+instance.props.zIndex;}function invokeHook(hook,args,shouldInvokePropsHook){if(shouldInvokePropsHook===void 0){shouldInvokePropsHook=true;}pluginsHooks.forEach(function(pluginHooks){if(pluginHooks[hook]){pluginHooks[hook].apply(pluginHooks,args);}});if(shouldInvokePropsHook){var _instance$props;(_instance$props=instance.props)[hook].apply(_instance$props,args);}}function handleAriaContentAttribute(){var aria=instance.props.aria;if(!aria.content){return;}var attr="aria-"+aria.content;var id=popper.id;var nodes=normalizeToArray(instance.props.triggerTarget||reference);nodes.forEach(function(node){var currentValue=node.getAttribute(attr);if(instance.state.isVisible){node.setAttribute(attr,currentValue?currentValue+" "+id:id);}else{var nextValue=currentValue&&currentValue.replace(id,'').trim();if(nextValue){node.setAttribute(attr,nextValue);}else{node.removeAttribute(attr);}}});}function handleAriaExpandedAttribute(){if(hasAriaExpanded||!instance.props.aria.expanded){return;}var nodes=normalizeToArray(instance.props.triggerTarget||reference);nodes.forEach(function(node){if(instance.props.interactive){node.setAttribute('aria-expanded',instance.state.isVisible&&node===getCurrentTarget()?'true':'false');}else{node.removeAttribute('aria-expanded');}});}function cleanupInteractiveMouseListeners(){getDocument().removeEventListener('mousemove',debouncedOnMouseMove);mouseMoveListeners=mouseMoveListeners.filter(function(listener){return listener!==debouncedOnMouseMove;});}function onDocumentPress(event){// Moved finger to scroll instead of an intentional tap outside
if(currentInput.isTouch){if(didTouchMove||event.type==='mousedown'){return;}}var actualTarget=event.composedPath&&event.composedPath()[0]||event.target;// Clicked on interactive popper
if(instance.props.interactive&&actualContains(popper,actualTarget)){return;}// Clicked on the event listeners target
if(normalizeToArray(instance.props.triggerTarget||reference).some(function(el){return actualContains(el,actualTarget);})){if(currentInput.isTouch){return;}if(instance.state.isVisible&&instance.props.trigger.indexOf('click')>=0){return;}}else{invokeHook('onClickOutside',[instance,event]);}if(instance.props.hideOnClick===true){instance.clearDelayTimeouts();instance.hide();// `mousedown` event is fired right before `focus` if pressing the
// currentTarget. This lets a tippy with `focus` trigger know that it
// should not show
didHideDueToDocumentMouseDown=true;setTimeout(function(){didHideDueToDocumentMouseDown=false;});// The listener gets added in `scheduleShow()`, but this may be hiding it
// before it shows, and hide()'s early bail-out behavior can prevent it
// from being cleaned up
if(!instance.state.isMounted){removeDocumentPress();}}}function onTouchMove(){didTouchMove=true;}function onTouchStart(){didTouchMove=false;}function addDocumentPress(){var doc=getDocument();doc.addEventListener('mousedown',onDocumentPress,true);doc.addEventListener('touchend',onDocumentPress,TOUCH_OPTIONS);doc.addEventListener('touchstart',onTouchStart,TOUCH_OPTIONS);doc.addEventListener('touchmove',onTouchMove,TOUCH_OPTIONS);}function removeDocumentPress(){var doc=getDocument();doc.removeEventListener('mousedown',onDocumentPress,true);doc.removeEventListener('touchend',onDocumentPress,TOUCH_OPTIONS);doc.removeEventListener('touchstart',onTouchStart,TOUCH_OPTIONS);doc.removeEventListener('touchmove',onTouchMove,TOUCH_OPTIONS);}function onTransitionedOut(duration,callback){onTransitionEnd(duration,function(){if(!instance.state.isVisible&&popper.parentNode&&popper.parentNode.contains(popper)){callback();}});}function onTransitionedIn(duration,callback){onTransitionEnd(duration,callback);}function onTransitionEnd(duration,callback){var box=getDefaultTemplateChildren().box;function listener(event){if(event.target===box){updateTransitionEndListener(box,'remove',listener);callback();}}// Make callback synchronous if duration is 0
// `transitionend` won't fire otherwise
if(duration===0){return callback();}updateTransitionEndListener(box,'remove',currentTransitionEndListener);updateTransitionEndListener(box,'add',listener);currentTransitionEndListener=listener;}function on(eventType,handler,options){if(options===void 0){options=false;}var nodes=normalizeToArray(instance.props.triggerTarget||reference);nodes.forEach(function(node){node.addEventListener(eventType,handler,options);listeners.push({node:node,eventType:eventType,handler:handler,options:options});});}function addListeners(){if(getIsCustomTouchBehavior()){on('touchstart',onTrigger,{passive:true});on('touchend',onMouseLeave,{passive:true});}splitBySpaces(instance.props.trigger).forEach(function(eventType){if(eventType==='manual'){return;}on(eventType,onTrigger);switch(eventType){case'mouseenter':on('mouseleave',onMouseLeave);break;case'focus':on(isIE11?'focusout':'blur',onBlurOrFocusOut);break;case'focusin':on('focusout',onBlurOrFocusOut);break;}});}function removeListeners(){listeners.forEach(function(_ref){var node=_ref.node,eventType=_ref.eventType,handler=_ref.handler,options=_ref.options;node.removeEventListener(eventType,handler,options);});listeners=[];}function onTrigger(event){var _lastTriggerEvent;var shouldScheduleClickHide=false;if(!instance.state.isEnabled||isEventListenerStopped(event)||didHideDueToDocumentMouseDown){return;}var wasFocused=((_lastTriggerEvent=lastTriggerEvent)==null?void 0:_lastTriggerEvent.type)==='focus';lastTriggerEvent=event;currentTarget=event.currentTarget;handleAriaExpandedAttribute();if(!instance.state.isVisible&&isMouseEvent(event)){// If scrolling, `mouseenter` events can be fired if the cursor lands
// over a new target, but `mousemove` events don't get fired. This
// causes interactive tooltips to get stuck open until the cursor is
// moved
mouseMoveListeners.forEach(function(listener){return listener(event);});}// Toggle show/hide when clicking click-triggered tooltips
if(event.type==='click'&&(instance.props.trigger.indexOf('mouseenter')<0||isVisibleFromClick)&&instance.props.hideOnClick!==false&&instance.state.isVisible){shouldScheduleClickHide=true;}else{scheduleShow(event);}if(event.type==='click'){isVisibleFromClick=!shouldScheduleClickHide;}if(shouldScheduleClickHide&&!wasFocused){scheduleHide(event);}}function onMouseMove(event){var target=event.target;var isCursorOverReferenceOrPopper=getCurrentTarget().contains(target)||popper.contains(target);if(event.type==='mousemove'&&isCursorOverReferenceOrPopper){return;}var popperTreeData=getNestedPopperTree().concat(popper).map(function(popper){var _instance$popperInsta;var instance=popper._tippy;var state=(_instance$popperInsta=instance.popperInstance)==null?void 0:_instance$popperInsta.state;if(state){return{popperRect:popper.getBoundingClientRect(),popperState:state,props:props};}return null;}).filter(Boolean);if(isCursorOutsideInteractiveBorder(popperTreeData,event)){cleanupInteractiveMouseListeners();scheduleHide(event);}}function onMouseLeave(event){var shouldBail=isEventListenerStopped(event)||instance.props.trigger.indexOf('click')>=0&&isVisibleFromClick;if(shouldBail){return;}if(instance.props.interactive){instance.hideWithInteractivity(event);return;}scheduleHide(event);}function onBlurOrFocusOut(event){if(instance.props.trigger.indexOf('focusin')<0&&event.target!==getCurrentTarget()){return;}// If focus was moved to within the popper
if(instance.props.interactive&&event.relatedTarget&&popper.contains(event.relatedTarget)){return;}scheduleHide(event);}function isEventListenerStopped(event){return currentInput.isTouch?getIsCustomTouchBehavior()!==event.type.indexOf('touch')>=0:false;}function createPopperInstance(){destroyPopperInstance();var _instance$props2=instance.props,popperOptions=_instance$props2.popperOptions,placement=_instance$props2.placement,offset=_instance$props2.offset,getReferenceClientRect=_instance$props2.getReferenceClientRect,moveTransition=_instance$props2.moveTransition;var arrow=getIsDefaultRenderFn()?getChildren(popper).arrow:null;var computedReference=getReferenceClientRect?{getBoundingClientRect:getReferenceClientRect,contextElement:getReferenceClientRect.contextElement||getCurrentTarget()}:reference;var tippyModifier={name:'$$tippy',enabled:true,phase:'beforeWrite',requires:['computeStyles'],fn:function fn(_ref2){var state=_ref2.state;if(getIsDefaultRenderFn()){var _getDefaultTemplateCh=getDefaultTemplateChildren(),box=_getDefaultTemplateCh.box;['placement','reference-hidden','escaped'].forEach(function(attr){if(attr==='placement'){box.setAttribute('data-placement',state.placement);}else{if(state.attributes.popper["data-popper-"+attr]){box.setAttribute("data-"+attr,'');}else{box.removeAttribute("data-"+attr);}}});state.attributes.popper={};}}};var modifiers=[{name:'offset',options:{offset:offset}},{name:'preventOverflow',options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:'flip',options:{padding:5}},{name:'computeStyles',options:{adaptive:!moveTransition}},tippyModifier];if(getIsDefaultRenderFn()&&arrow){modifiers.push({name:'arrow',options:{element:arrow,padding:3}});}modifiers.push.apply(modifiers,(popperOptions==null?void 0:popperOptions.modifiers)||[]);instance.popperInstance=core.createPopper(computedReference,popper,Object.assign({},popperOptions,{placement:placement,onFirstUpdate:onFirstUpdate,modifiers:modifiers}));}function destroyPopperInstance(){if(instance.popperInstance){instance.popperInstance.destroy();instance.popperInstance=null;}}function mount(){var appendTo=instance.props.appendTo;var parentNode;// By default, we'll append the popper to the triggerTargets's parentNode so
// it's directly after the reference element so the elements inside the
// tippy can be tabbed to
// If there are clipping issues, the user can specify a different appendTo
// and ensure focus management is handled correctly manually
var node=getCurrentTarget();if(instance.props.interactive&&appendTo===TIPPY_DEFAULT_APPEND_TO||appendTo==='parent'){parentNode=node.parentNode;}else{parentNode=invokeWithArgsOrReturn(appendTo,[node]);}// The popper element needs to exist on the DOM before its position can be
// updated as Popper needs to read its dimensions
if(!parentNode.contains(popper)){parentNode.appendChild(popper);}instance.state.isMounted=true;createPopperInstance();/* istanbul ignore else */{// Accessibility check
warnWhen(instance.props.interactive&&appendTo===defaultProps.appendTo&&node.nextElementSibling!==popper,['Interactive tippy element may not be accessible via keyboard','navigation because it is not directly after the reference element','in the DOM source order.','\n\n','Using a wrapper <div> or <span> tag around the reference element','solves this by creating a new parentNode context.','\n\n','Specifying `appendTo: document.body` silences this warning, but it','assumes you are using a focus management solution to handle','keyboard navigation.','\n\n','See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'].join(' '));}}function getNestedPopperTree(){return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));}function scheduleShow(event){instance.clearDelayTimeouts();if(event){invokeHook('onTrigger',[instance,event]);}addDocumentPress();var delay=getDelay(true);var _getNormalizedTouchSe=getNormalizedTouchSettings(),touchValue=_getNormalizedTouchSe[0],touchDelay=_getNormalizedTouchSe[1];if(currentInput.isTouch&&touchValue==='hold'&&touchDelay){delay=touchDelay;}if(delay){showTimeout=setTimeout(function(){instance.show();},delay);}else{instance.show();}}function scheduleHide(event){instance.clearDelayTimeouts();invokeHook('onUntrigger',[instance,event]);if(!instance.state.isVisible){removeDocumentPress();return;}// For interactive tippies, scheduleHide is added to a document.body handler
// from onMouseLeave so must intercept scheduled hides from mousemove/leave
// events when trigger contains mouseenter and click, and the tip is
// currently shown as a result of a click.
if(instance.props.trigger.indexOf('mouseenter')>=0&&instance.props.trigger.indexOf('click')>=0&&['mouseleave','mousemove'].indexOf(event.type)>=0&&isVisibleFromClick){return;}var delay=getDelay(false);if(delay){hideTimeout=setTimeout(function(){if(instance.state.isVisible){instance.hide();}},delay);}else{// Fixes a `transitionend` problem when it fires 1 frame too
// late sometimes, we don't want hide() to be called.
scheduleHideAnimationFrame=requestAnimationFrame(function(){instance.hide();});}}// ===========================================================================
// 🔑 Public methods
// ===========================================================================
function enable(){instance.state.isEnabled=true;}function disable(){// Disabling the instance should also hide it
// https://github.com/atomiks/tippy.js-react/issues/106
instance.hide();instance.state.isEnabled=false;}function clearDelayTimeouts(){clearTimeout(showTimeout);clearTimeout(hideTimeout);cancelAnimationFrame(scheduleHideAnimationFrame);}function setProps(partialProps){/* istanbul ignore else */{warnWhen(instance.state.isDestroyed,createMemoryLeakWarning('setProps'));}if(instance.state.isDestroyed){return;}invokeHook('onBeforeUpdate',[instance,partialProps]);removeListeners();var prevProps=instance.props;var nextProps=evaluateProps(reference,Object.assign({},prevProps,removeUndefinedProps(partialProps),{ignoreAttributes:true}));instance.props=nextProps;addListeners();if(prevProps.interactiveDebounce!==nextProps.interactiveDebounce){cleanupInteractiveMouseListeners();debouncedOnMouseMove=debounce(onMouseMove,nextProps.interactiveDebounce);}// Ensure stale aria-expanded attributes are removed
if(prevProps.triggerTarget&&!nextProps.triggerTarget){normalizeToArray(prevProps.triggerTarget).forEach(function(node){node.removeAttribute('aria-expanded');});}else if(nextProps.triggerTarget){reference.removeAttribute('aria-expanded');}handleAriaExpandedAttribute();handleStyles();if(onUpdate){onUpdate(prevProps,nextProps);}if(instance.popperInstance){createPopperInstance();// Fixes an issue with nested tippies if they are all getting re-rendered,
// and the nested ones get re-rendered first.
// https://github.com/atomiks/tippyjs-react/issues/177
// TODO: find a cleaner / more efficient solution(!)
getNestedPopperTree().forEach(function(nestedPopper){// React (and other UI libs likely) requires a rAF wrapper as it flushes
// its work in one
requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);});}invokeHook('onAfterUpdate',[instance,partialProps]);}function setContent(content){instance.setProps({content:content});}function show(){/* istanbul ignore else */{warnWhen(instance.state.isDestroyed,createMemoryLeakWarning('show'));}// Early bail-out
var isAlreadyVisible=instance.state.isVisible;var isDestroyed=instance.state.isDestroyed;var isDisabled=!instance.state.isEnabled;var isTouchAndTouchDisabled=currentInput.isTouch&&!instance.props.touch;var duration=getValueAtIndexOrReturn(instance.props.duration,0,defaultProps.duration);if(isAlreadyVisible||isDestroyed||isDisabled||isTouchAndTouchDisabled){return;}// Normalize `disabled` behavior across browsers.
// Firefox allows events on disabled elements, but Chrome doesn't.
// Using a wrapper element (i.e. <span>) is recommended.
if(getCurrentTarget().hasAttribute('disabled')){return;}invokeHook('onShow',[instance],false);if(instance.props.onShow(instance)===false){return;}instance.state.isVisible=true;if(getIsDefaultRenderFn()){popper.style.visibility='visible';}handleStyles();addDocumentPress();if(!instance.state.isMounted){popper.style.transition='none';}// If flipping to the opposite side after hiding at least once, the
// animation will use the wrong placement without resetting the duration
if(getIsDefaultRenderFn()){var _getDefaultTemplateCh2=getDefaultTemplateChildren(),box=_getDefaultTemplateCh2.box,content=_getDefaultTemplateCh2.content;setTransitionDuration([box,content],0);}onFirstUpdate=function onFirstUpdate(){var _instance$popperInsta2;if(!instance.state.isVisible||ignoreOnFirstUpdate){return;}ignoreOnFirstUpdate=true;// reflow
void popper.offsetHeight;popper.style.transition=instance.props.moveTransition;if(getIsDefaultRenderFn()&&instance.props.animation){var _getDefaultTemplateCh3=getDefaultTemplateChildren(),_box=_getDefaultTemplateCh3.box,_content=_getDefaultTemplateCh3.content;setTransitionDuration([_box,_content],duration);setVisibilityState([_box,_content],'visible');}handleAriaContentAttribute();handleAriaExpandedAttribute();pushIfUnique(mountedInstances,instance);// certain modifiers (e.g. `maxSize`) require a second update after the
// popper has been positioned for the first time
(_instance$popperInsta2=instance.popperInstance)==null?void 0:_instance$popperInsta2.forceUpdate();invokeHook('onMount',[instance]);if(instance.props.animation&&getIsDefaultRenderFn()){onTransitionedIn(duration,function(){instance.state.isShown=true;invokeHook('onShown',[instance]);});}};mount();}function hide(){/* istanbul ignore else */{warnWhen(instance.state.isDestroyed,createMemoryLeakWarning('hide'));}// Early bail-out
var isAlreadyHidden=!instance.state.isVisible;var isDestroyed=instance.state.isDestroyed;var isDisabled=!instance.state.isEnabled;var duration=getValueAtIndexOrReturn(instance.props.duration,1,defaultProps.duration);if(isAlreadyHidden||isDestroyed||isDisabled){return;}invokeHook('onHide',[instance],false);if(instance.props.onHide(instance)===false){return;}instance.state.isVisible=false;instance.state.isShown=false;ignoreOnFirstUpdate=false;isVisibleFromClick=false;if(getIsDefaultRenderFn()){popper.style.visibility='hidden';}cleanupInteractiveMouseListeners();removeDocumentPress();handleStyles(true);if(getIsDefaultRenderFn()){var _getDefaultTemplateCh4=getDefaultTemplateChildren(),box=_getDefaultTemplateCh4.box,content=_getDefaultTemplateCh4.content;if(instance.props.animation){setTransitionDuration([box,content],duration);setVisibilityState([box,content],'hidden');}}handleAriaContentAttribute();handleAriaExpandedAttribute();if(instance.props.animation){if(getIsDefaultRenderFn()){onTransitionedOut(duration,instance.unmount);}}else{instance.unmount();}}function hideWithInteractivity(event){/* istanbul ignore else */{warnWhen(instance.state.isDestroyed,createMemoryLeakWarning('hideWithInteractivity'));}getDocument().addEventListener('mousemove',debouncedOnMouseMove);pushIfUnique(mouseMoveListeners,debouncedOnMouseMove);debouncedOnMouseMove(event);}function unmount(){/* istanbul ignore else */{warnWhen(instance.state.isDestroyed,createMemoryLeakWarning('unmount'));}if(instance.state.isVisible){instance.hide();}if(!instance.state.isMounted){return;}destroyPopperInstance();// If a popper is not interactive, it will be appended outside the popper
// tree by default. This seems mainly for interactive tippies, but we should
// find a workaround if possible
getNestedPopperTree().forEach(function(nestedPopper){nestedPopper._tippy.unmount();});if(popper.parentNode){popper.parentNode.removeChild(popper);}mountedInstances=mountedInstances.filter(function(i){return i!==instance;});instance.state.isMounted=false;invokeHook('onHidden',[instance]);}function destroy(){/* istanbul ignore else */{warnWhen(instance.state.isDestroyed,createMemoryLeakWarning('destroy'));}if(instance.state.isDestroyed){return;}instance.clearDelayTimeouts();instance.unmount();removeListeners();delete reference._tippy;instance.state.isDestroyed=true;invokeHook('onDestroy',[instance]);}}function tippy(targets,optionalProps){if(optionalProps===void 0){optionalProps={};}var plugins=defaultProps.plugins.concat(optionalProps.plugins||[]);/* istanbul ignore else */{validateTargets(targets);validateProps(optionalProps,plugins);}bindGlobalEventListeners();var passedProps=Object.assign({},optionalProps,{plugins:plugins});var elements=getArrayOfElements(targets);/* istanbul ignore else */{var isSingleContentElement=isElement(passedProps.content);var isMoreThanOneReferenceElement=elements.length>1;warnWhen(isSingleContentElement&&isMoreThanOneReferenceElement,['tippy() was passed an Element as the `content` prop, but more than','one tippy instance was created by this invocation. This means the','content element will only be appended to the last tippy instance.','\n\n','Instead, pass the .innerHTML of the element, or use a function that','returns a cloned version of the element instead.','\n\n','1) content: element.innerHTML\n','2) content: () => element.cloneNode(true)'].join(' '));}var instances=elements.reduce(function(acc,reference){var instance=reference&&createTippy(reference,passedProps);if(instance){acc.push(instance);}return acc;},[]);return isElement(targets)?instances[0]:instances;}tippy.defaultProps=defaultProps;tippy.setDefaultProps=setDefaultProps;tippy.currentInput=currentInput;var hideAll=function hideAll(_temp){var _ref=_temp===void 0?{}:_temp,excludedReferenceOrInstance=_ref.exclude,duration=_ref.duration;mountedInstances.forEach(function(instance){var isExcluded=false;if(excludedReferenceOrInstance){isExcluded=isReferenceElement(excludedReferenceOrInstance)?instance.reference===excludedReferenceOrInstance:instance.popper===excludedReferenceOrInstance.popper;}if(!isExcluded){var originalDuration=instance.props.duration;instance.setProps({duration:duration});instance.hide();if(!instance.state.isDestroyed){instance.setProps({duration:originalDuration});}}});};// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.
var applyStylesModifier=Object.assign({},core.applyStyles,{effect:function effect(_ref){var state=_ref.state;var initialStyles={popper:{position:state.options.strategy,left:'0',top:'0',margin:'0'},arrow:{position:'absolute'},reference:{}};Object.assign(state.elements.popper.style,initialStyles.popper);state.styles=initialStyles;if(state.elements.arrow){Object.assign(state.elements.arrow.style,initialStyles.arrow);}// intentionally return no cleanup function
// return () => { ... }
}});var createSingleton=function createSingleton(tippyInstances,optionalProps){var _optionalProps$popper;if(optionalProps===void 0){optionalProps={};}/* istanbul ignore else */{errorWhen(!Array.isArray(tippyInstances),['The first argument passed to createSingleton() must be an array of','tippy instances. The passed value was',String(tippyInstances)].join(' '));}var individualInstances=tippyInstances;var references=[];var triggerTargets=[];var currentTarget;var overrides=optionalProps.overrides;var interceptSetPropsCleanups=[];var shownOnCreate=false;function setTriggerTargets(){triggerTargets=individualInstances.map(function(instance){return normalizeToArray(instance.props.triggerTarget||instance.reference);}).reduce(function(acc,item){return acc.concat(item);},[]);}function setReferences(){references=individualInstances.map(function(instance){return instance.reference;});}function enableInstances(isEnabled){individualInstances.forEach(function(instance){if(isEnabled){instance.enable();}else{instance.disable();}});}function interceptSetProps(singleton){return individualInstances.map(function(instance){var originalSetProps=instance.setProps;instance.setProps=function(props){originalSetProps(props);if(instance.reference===currentTarget){singleton.setProps(props);}};return function(){instance.setProps=originalSetProps;};});}// have to pass singleton, as it maybe undefined on first call
function prepareInstance(singleton,target){var index=triggerTargets.indexOf(target);// bail-out
if(target===currentTarget){return;}currentTarget=target;var overrideProps=(overrides||[]).concat('content').reduce(function(acc,prop){acc[prop]=individualInstances[index].props[prop];return acc;},{});singleton.setProps(Object.assign({},overrideProps,{getReferenceClientRect:typeof overrideProps.getReferenceClientRect==='function'?overrideProps.getReferenceClientRect:function(){var _references$index;return(_references$index=references[index])==null?void 0:_references$index.getBoundingClientRect();}}));}enableInstances(false);setReferences();setTriggerTargets();var plugin={fn:function fn(){return{onDestroy:function onDestroy(){enableInstances(true);},onHidden:function onHidden(){currentTarget=null;},onClickOutside:function onClickOutside(instance){if(instance.props.showOnCreate&&!shownOnCreate){shownOnCreate=true;currentTarget=null;}},onShow:function onShow(instance){if(instance.props.showOnCreate&&!shownOnCreate){shownOnCreate=true;prepareInstance(instance,references[0]);}},onTrigger:function onTrigger(instance,event){prepareInstance(instance,event.currentTarget);}};}};var singleton=tippy(div(),Object.assign({},removeProperties(optionalProps,['overrides']),{plugins:[plugin].concat(optionalProps.plugins||[]),triggerTarget:triggerTargets,popperOptions:Object.assign({},optionalProps.popperOptions,{modifiers:[].concat(((_optionalProps$popper=optionalProps.popperOptions)==null?void 0:_optionalProps$popper.modifiers)||[],[applyStylesModifier])})}));var originalShow=singleton.show;singleton.show=function(target){originalShow();// first time, showOnCreate or programmatic call with no params
// default to showing first instance
if(!currentTarget&&target==null){return prepareInstance(singleton,references[0]);}// triggered from event (do nothing as prepareInstance already called by onTrigger)
// programmatic call with no params when already visible (do nothing again)
if(currentTarget&&target==null){return;}// target is index of instance
if(typeof target==='number'){return references[target]&&prepareInstance(singleton,references[target]);}// target is a child tippy instance
if(individualInstances.indexOf(target)>=0){var ref=target.reference;return prepareInstance(singleton,ref);}// target is a ReferenceElement
if(references.indexOf(target)>=0){return prepareInstance(singleton,target);}};singleton.showNext=function(){var first=references[0];if(!currentTarget){return singleton.show(0);}var index=references.indexOf(currentTarget);singleton.show(references[index+1]||first);};singleton.showPrevious=function(){var last=references[references.length-1];if(!currentTarget){return singleton.show(last);}var index=references.indexOf(currentTarget);var target=references[index-1]||last;singleton.show(target);};var originalSetProps=singleton.setProps;singleton.setProps=function(props){overrides=props.overrides||overrides;originalSetProps(props);};singleton.setInstances=function(nextInstances){enableInstances(true);interceptSetPropsCleanups.forEach(function(fn){return fn();});individualInstances=nextInstances;enableInstances(false);setReferences();setTriggerTargets();interceptSetPropsCleanups=interceptSetProps(singleton);singleton.setProps({triggerTarget:triggerTargets});};interceptSetPropsCleanups=interceptSetProps(singleton);return singleton;};var BUBBLING_EVENTS_MAP={mouseover:'mouseenter',focusin:'focus',click:'click'};/**
   * Creates a delegate instance that controls the creation of tippy instances
   * for child elements (`target` CSS selector).
   */function delegate(targets,props){/* istanbul ignore else */{errorWhen(!(props&&props.target),['You must specity a `target` prop indicating a CSS selector string matching','the target elements that should receive a tippy.'].join(' '));}var listeners=[];var childTippyInstances=[];var disabled=false;var target=props.target;var nativeProps=removeProperties(props,['target']);var parentProps=Object.assign({},nativeProps,{trigger:'manual',touch:false});var childProps=Object.assign({touch:defaultProps.touch},nativeProps,{showOnCreate:true});var returnValue=tippy(targets,parentProps);var normalizedReturnValue=normalizeToArray(returnValue);function onTrigger(event){if(!event.target||disabled){return;}var targetNode=event.target.closest(target);if(!targetNode){return;}// Get relevant trigger with fallbacks:
// 1. Check `data-tippy-trigger` attribute on target node
// 2. Fallback to `trigger` passed to `delegate()`
// 3. Fallback to `defaultProps.trigger`
var trigger=targetNode.getAttribute('data-tippy-trigger')||props.trigger||defaultProps.trigger;// @ts-ignore
if(targetNode._tippy){return;}if(event.type==='touchstart'&&typeof childProps.touch==='boolean'){return;}if(event.type!=='touchstart'&&trigger.indexOf(BUBBLING_EVENTS_MAP[event.type])<0){return;}var instance=tippy(targetNode,childProps);if(instance){childTippyInstances=childTippyInstances.concat(instance);}}function on(node,eventType,handler,options){if(options===void 0){options=false;}node.addEventListener(eventType,handler,options);listeners.push({node:node,eventType:eventType,handler:handler,options:options});}function addEventListeners(instance){var reference=instance.reference;on(reference,'touchstart',onTrigger,TOUCH_OPTIONS);on(reference,'mouseover',onTrigger);on(reference,'focusin',onTrigger);on(reference,'click',onTrigger);}function removeEventListeners(){listeners.forEach(function(_ref){var node=_ref.node,eventType=_ref.eventType,handler=_ref.handler,options=_ref.options;node.removeEventListener(eventType,handler,options);});listeners=[];}function applyMutations(instance){var originalDestroy=instance.destroy;var originalEnable=instance.enable;var originalDisable=instance.disable;instance.destroy=function(shouldDestroyChildInstances){if(shouldDestroyChildInstances===void 0){shouldDestroyChildInstances=true;}if(shouldDestroyChildInstances){childTippyInstances.forEach(function(instance){instance.destroy();});}childTippyInstances=[];removeEventListeners();originalDestroy();};instance.enable=function(){originalEnable();childTippyInstances.forEach(function(instance){return instance.enable();});disabled=false;};instance.disable=function(){originalDisable();childTippyInstances.forEach(function(instance){return instance.disable();});disabled=true;};addEventListeners(instance);}normalizedReturnValue.forEach(applyMutations);return returnValue;}var animateFill={name:'animateFill',defaultValue:false,fn:function fn(instance){var _instance$props$rende;// @ts-ignore
if(!((_instance$props$rende=instance.props.render)!=null&&_instance$props$rende.$$tippy)){{errorWhen(instance.props.animateFill,'The `animateFill` plugin requires the default render function.');}return{};}var _getChildren=getChildren(instance.popper),box=_getChildren.box,content=_getChildren.content;var backdrop=instance.props.animateFill?createBackdropElement():null;return{onCreate:function onCreate(){if(backdrop){box.insertBefore(backdrop,box.firstElementChild);box.setAttribute('data-animatefill','');box.style.overflow='hidden';instance.setProps({arrow:false,animation:'shift-away'});}},onMount:function onMount(){if(backdrop){var transitionDuration=box.style.transitionDuration;var duration=Number(transitionDuration.replace('ms',''));// The content should fade in after the backdrop has mostly filled the
// tooltip element. `clip-path` is the other alternative but is not
// well-supported and is buggy on some devices.
content.style.transitionDelay=Math.round(duration/10)+"ms";backdrop.style.transitionDuration=transitionDuration;setVisibilityState([backdrop],'visible');}},onShow:function onShow(){if(backdrop){backdrop.style.transitionDuration='0ms';}},onHide:function onHide(){if(backdrop){setVisibilityState([backdrop],'hidden');}}};}};function createBackdropElement(){var backdrop=div();backdrop.className=BACKDROP_CLASS;setVisibilityState([backdrop],'hidden');return backdrop;}var mouseCoords={clientX:0,clientY:0};var activeInstances=[];function storeMouseCoords(_ref){var clientX=_ref.clientX,clientY=_ref.clientY;mouseCoords={clientX:clientX,clientY:clientY};}function addMouseCoordsListener(doc){doc.addEventListener('mousemove',storeMouseCoords);}function removeMouseCoordsListener(doc){doc.removeEventListener('mousemove',storeMouseCoords);}var followCursor={name:'followCursor',defaultValue:false,fn:function fn(instance){var reference=instance.reference;var doc=getOwnerDocument(instance.props.triggerTarget||reference);var isInternalUpdate=false;var wasFocusEvent=false;var isUnmounted=true;var prevProps=instance.props;function getIsInitialBehavior(){return instance.props.followCursor==='initial'&&instance.state.isVisible;}function addListener(){doc.addEventListener('mousemove',onMouseMove);}function removeListener(){doc.removeEventListener('mousemove',onMouseMove);}function unsetGetReferenceClientRect(){isInternalUpdate=true;instance.setProps({getReferenceClientRect:null});isInternalUpdate=false;}function onMouseMove(event){// If the instance is interactive, avoid updating the position unless it's
// over the reference element
var isCursorOverReference=event.target?reference.contains(event.target):true;var followCursor=instance.props.followCursor;var clientX=event.clientX,clientY=event.clientY;var rect=reference.getBoundingClientRect();var relativeX=clientX-rect.left;var relativeY=clientY-rect.top;if(isCursorOverReference||!instance.props.interactive){instance.setProps({// @ts-ignore - unneeded DOMRect properties
getReferenceClientRect:function getReferenceClientRect(){var rect=reference.getBoundingClientRect();var x=clientX;var y=clientY;if(followCursor==='initial'){x=rect.left+relativeX;y=rect.top+relativeY;}var top=followCursor==='horizontal'?rect.top:y;var right=followCursor==='vertical'?rect.right:x;var bottom=followCursor==='horizontal'?rect.bottom:y;var left=followCursor==='vertical'?rect.left:x;return{width:right-left,height:bottom-top,top:top,right:right,bottom:bottom,left:left};}});}}function create(){if(instance.props.followCursor){activeInstances.push({instance:instance,doc:doc});addMouseCoordsListener(doc);}}function destroy(){activeInstances=activeInstances.filter(function(data){return data.instance!==instance;});if(activeInstances.filter(function(data){return data.doc===doc;}).length===0){removeMouseCoordsListener(doc);}}return{onCreate:create,onDestroy:destroy,onBeforeUpdate:function onBeforeUpdate(){prevProps=instance.props;},onAfterUpdate:function onAfterUpdate(_,_ref2){var followCursor=_ref2.followCursor;if(isInternalUpdate){return;}if(followCursor!==undefined&&prevProps.followCursor!==followCursor){destroy();if(followCursor){create();if(instance.state.isMounted&&!wasFocusEvent&&!getIsInitialBehavior()){addListener();}}else{removeListener();unsetGetReferenceClientRect();}}},onMount:function onMount(){if(instance.props.followCursor&&!wasFocusEvent){if(isUnmounted){onMouseMove(mouseCoords);isUnmounted=false;}if(!getIsInitialBehavior()){addListener();}}},onTrigger:function onTrigger(_,event){if(isMouseEvent(event)){mouseCoords={clientX:event.clientX,clientY:event.clientY};}wasFocusEvent=event.type==='focus';},onHidden:function onHidden(){if(instance.props.followCursor){unsetGetReferenceClientRect();removeListener();isUnmounted=true;}}};}};function getProps(props,modifier){var _props$popperOptions;return{popperOptions:Object.assign({},props.popperOptions,{modifiers:[].concat((((_props$popperOptions=props.popperOptions)==null?void 0:_props$popperOptions.modifiers)||[]).filter(function(_ref){var name=_ref.name;return name!==modifier.name;}),[modifier])})};}var inlinePositioning={name:'inlinePositioning',defaultValue:false,fn:function fn(instance){var reference=instance.reference;function isEnabled(){return!!instance.props.inlinePositioning;}var placement;var cursorRectIndex=-1;var isInternalUpdate=false;var triedPlacements=[];var modifier={name:'tippyInlinePositioning',enabled:true,phase:'afterWrite',fn:function fn(_ref2){var state=_ref2.state;if(isEnabled()){if(triedPlacements.indexOf(state.placement)!==-1){triedPlacements=[];}if(placement!==state.placement&&triedPlacements.indexOf(state.placement)===-1){triedPlacements.push(state.placement);instance.setProps({// @ts-ignore - unneeded DOMRect properties
getReferenceClientRect:function getReferenceClientRect(){return _getReferenceClientRect(state.placement);}});}placement=state.placement;}}};function _getReferenceClientRect(placement){return getInlineBoundingClientRect(getBasePlacement(placement),reference.getBoundingClientRect(),arrayFrom(reference.getClientRects()),cursorRectIndex);}function setInternalProps(partialProps){isInternalUpdate=true;instance.setProps(partialProps);isInternalUpdate=false;}function addModifier(){if(!isInternalUpdate){setInternalProps(getProps(instance.props,modifier));}}return{onCreate:addModifier,onAfterUpdate:addModifier,onTrigger:function onTrigger(_,event){if(isMouseEvent(event)){var rects=arrayFrom(instance.reference.getClientRects());var cursorRect=rects.find(function(rect){return rect.left-2<=event.clientX&&rect.right+2>=event.clientX&&rect.top-2<=event.clientY&&rect.bottom+2>=event.clientY;});var index=rects.indexOf(cursorRect);cursorRectIndex=index>-1?index:cursorRectIndex;}},onHidden:function onHidden(){cursorRectIndex=-1;}};}};function getInlineBoundingClientRect(currentBasePlacement,boundingRect,clientRects,cursorRectIndex){// Not an inline element, or placement is not yet known
if(clientRects.length<2||currentBasePlacement===null){return boundingRect;}// There are two rects and they are disjoined
if(clientRects.length===2&&cursorRectIndex>=0&&clientRects[0].left>clientRects[1].right){return clientRects[cursorRectIndex]||boundingRect;}switch(currentBasePlacement){case'top':case'bottom':{var firstRect=clientRects[0];var lastRect=clientRects[clientRects.length-1];var isTop=currentBasePlacement==='top';var top=firstRect.top;var bottom=lastRect.bottom;var left=isTop?firstRect.left:lastRect.left;var right=isTop?firstRect.right:lastRect.right;var width=right-left;var height=bottom-top;return{top:top,bottom:bottom,left:left,right:right,width:width,height:height};}case'left':case'right':{var minLeft=Math.min.apply(Math,clientRects.map(function(rects){return rects.left;}));var maxRight=Math.max.apply(Math,clientRects.map(function(rects){return rects.right;}));var measureRects=clientRects.filter(function(rect){return currentBasePlacement==='left'?rect.left===minLeft:rect.right===maxRight;});var _top=measureRects[0].top;var _bottom=measureRects[measureRects.length-1].bottom;var _left=minLeft;var _right=maxRight;var _width=_right-_left;var _height=_bottom-_top;return{top:_top,bottom:_bottom,left:_left,right:_right,width:_width,height:_height};}default:{return boundingRect;}}}var sticky={name:'sticky',defaultValue:false,fn:function fn(instance){var reference=instance.reference,popper=instance.popper;function getReference(){return instance.popperInstance?instance.popperInstance.state.elements.reference:reference;}function shouldCheck(value){return instance.props.sticky===true||instance.props.sticky===value;}var prevRefRect=null;var prevPopRect=null;function updatePosition(){var currentRefRect=shouldCheck('reference')?getReference().getBoundingClientRect():null;var currentPopRect=shouldCheck('popper')?popper.getBoundingClientRect():null;if(currentRefRect&&areRectsDifferent(prevRefRect,currentRefRect)||currentPopRect&&areRectsDifferent(prevPopRect,currentPopRect)){if(instance.popperInstance){instance.popperInstance.update();}}prevRefRect=currentRefRect;prevPopRect=currentPopRect;if(instance.state.isMounted){requestAnimationFrame(updatePosition);}}return{onMount:function onMount(){if(instance.props.sticky){updatePosition();}}};}};function areRectsDifferent(rectA,rectB){if(rectA&&rectB){return rectA.top!==rectB.top||rectA.right!==rectB.right||rectA.bottom!==rectB.bottom||rectA.left!==rectB.left;}return true;}tippy.setDefaultProps({plugins:[animateFill,followCursor,inlinePositioning,sticky],render:render});tippy.createSingleton=createSingleton;tippy.delegate=delegate;tippy.hideAll=hideAll;tippy.roundArrow=ROUND_ARROW;return tippy;});//# sourceMappingURL=tippy.umd.js.map
var Echo=function(){'use strict';function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},_typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});Object.defineProperty(subClass,"prototype",{writable:false});if(superClass)_setPrototypeOf(subClass,superClass);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}else if(call!==void 0){throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}/**
   * This class represents a basic channel.
   */var Channel=/*#__PURE__*/function(){function Channel(){_classCallCheck(this,Channel);}_createClass(Channel,[{key:"listenForWhisper",value:/**
       * Listen for a whisper event on the channel instance.
       */function listenForWhisper(event,callback){return this.listen('.client-'+event,callback);}/**
       * Listen for an event on the channel instance.
       */},{key:"notification",value:function notification(callback){return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated',callback);}/**
       * Stop listening for a whisper event on the channel instance.
       */},{key:"stopListeningForWhisper",value:function stopListeningForWhisper(event,callback){return this.stopListening('.client-'+event,callback);}}]);return Channel;}();/**
   * Event name formatter
   */var EventFormatter=/*#__PURE__*/function(){/**
     * Create a new class instance.
     */function EventFormatter(namespace){_classCallCheck(this,EventFormatter);this.namespace=namespace;//
}/**
     * Format the given event name.
     */_createClass(EventFormatter,[{key:"format",value:function format(event){if(event.charAt(0)==='.'||event.charAt(0)==='\\'){return event.substr(1);}else if(this.namespace){event=this.namespace+'.'+event;}return event.replace(/\./g,'\\');}/**
       * Set the event namespace.
       */},{key:"setNamespace",value:function setNamespace(value){this.namespace=value;}}]);return EventFormatter;}();/**
   * This class represents a Pusher channel.
   */var PusherChannel=/*#__PURE__*/function(_Channel){_inherits(PusherChannel,_Channel);var _super=_createSuper(PusherChannel);/**
     * Create a new class instance.
     */function PusherChannel(pusher,name,options){var _this;_classCallCheck(this,PusherChannel);_this=_super.call(this);_this.name=name;_this.pusher=pusher;_this.options=options;_this.eventFormatter=new EventFormatter(_this.options.namespace);_this.subscribe();return _this;}/**
     * Subscribe to a Pusher channel.
     */_createClass(PusherChannel,[{key:"subscribe",value:function subscribe(){this.subscription=this.pusher.subscribe(this.name);}/**
       * Unsubscribe from a Pusher channel.
       */},{key:"unsubscribe",value:function unsubscribe(){this.pusher.unsubscribe(this.name);}/**
       * Listen for an event on the channel instance.
       */},{key:"listen",value:function listen(event,callback){this.on(this.eventFormatter.format(event),callback);return this;}/**
       * Listen for all events on the channel instance.
       */},{key:"listenToAll",value:function listenToAll(callback){var _this2=this;this.subscription.bind_global(function(event,data){if(event.startsWith('pusher:')){return;}var namespace=_this2.options.namespace.replace(/\./g,'\\');var formattedEvent=event.startsWith(namespace)?event.substring(namespace.length+1):'.'+event;callback(formattedEvent,data);});return this;}/**
       * Stop listening for an event on the channel instance.
       */},{key:"stopListening",value:function stopListening(event,callback){if(callback){this.subscription.unbind(this.eventFormatter.format(event),callback);}else{this.subscription.unbind(this.eventFormatter.format(event));}return this;}/**
       * Stop listening for all events on the channel instance.
       */},{key:"stopListeningToAll",value:function stopListeningToAll(callback){if(callback){this.subscription.unbind_global(callback);}else{this.subscription.unbind_global();}return this;}/**
       * Register a callback to be called anytime a subscription succeeds.
       */},{key:"subscribed",value:function subscribed(callback){this.on('pusher:subscription_succeeded',function(){callback();});return this;}/**
       * Register a callback to be called anytime a subscription error occurs.
       */},{key:"error",value:function error(callback){this.on('pusher:subscription_error',function(status){callback(status);});return this;}/**
       * Bind a channel to an event.
       */},{key:"on",value:function on(event,callback){this.subscription.bind(event,callback);return this;}}]);return PusherChannel;}(Channel);/**
   * This class represents a Pusher private channel.
   */var PusherPrivateChannel=/*#__PURE__*/function(_PusherChannel){_inherits(PusherPrivateChannel,_PusherChannel);var _super=_createSuper(PusherPrivateChannel);function PusherPrivateChannel(){_classCallCheck(this,PusherPrivateChannel);return _super.apply(this,arguments);}_createClass(PusherPrivateChannel,[{key:"whisper",value:/**
       * Send a whisper event to other clients in the channel.
       */function whisper(eventName,data){this.pusher.channels.channels[this.name].trigger("client-".concat(eventName),data);return this;}}]);return PusherPrivateChannel;}(PusherChannel);/**
   * This class represents a Pusher private channel.
   */var PusherEncryptedPrivateChannel=/*#__PURE__*/function(_PusherChannel){_inherits(PusherEncryptedPrivateChannel,_PusherChannel);var _super=_createSuper(PusherEncryptedPrivateChannel);function PusherEncryptedPrivateChannel(){_classCallCheck(this,PusherEncryptedPrivateChannel);return _super.apply(this,arguments);}_createClass(PusherEncryptedPrivateChannel,[{key:"whisper",value:/**
       * Send a whisper event to other clients in the channel.
       */function whisper(eventName,data){this.pusher.channels.channels[this.name].trigger("client-".concat(eventName),data);return this;}}]);return PusherEncryptedPrivateChannel;}(PusherChannel);/**
   * This class represents a Pusher presence channel.
   */var PusherPresenceChannel=/*#__PURE__*/function(_PusherChannel){_inherits(PusherPresenceChannel,_PusherChannel);var _super=_createSuper(PusherPresenceChannel);function PusherPresenceChannel(){_classCallCheck(this,PusherPresenceChannel);return _super.apply(this,arguments);}_createClass(PusherPresenceChannel,[{key:"here",value:/**
       * Register a callback to be called anytime the member list changes.
       */function here(callback){this.on('pusher:subscription_succeeded',function(data){callback(Object.keys(data.members).map(function(k){return data.members[k];}));});return this;}/**
       * Listen for someone joining the channel.
       */},{key:"joining",value:function joining(callback){this.on('pusher:member_added',function(member){callback(member.info);});return this;}/**
       * Send a whisper event to other clients in the channel.
       */},{key:"whisper",value:function whisper(eventName,data){this.pusher.channels.channels[this.name].trigger("client-".concat(eventName),data);return this;}/**
       * Listen for someone leaving the channel.
       */},{key:"leaving",value:function leaving(callback){this.on('pusher:member_removed',function(member){callback(member.info);});return this;}}]);return PusherPresenceChannel;}(PusherChannel);/**
   * This class represents a Socket.io channel.
   */var SocketIoChannel=/*#__PURE__*/function(_Channel){_inherits(SocketIoChannel,_Channel);var _super=_createSuper(SocketIoChannel);/**
     * Create a new class instance.
     */function SocketIoChannel(socket,name,options){var _this;_classCallCheck(this,SocketIoChannel);_this=_super.call(this);/**
       * The event callbacks applied to the socket.
       */_this.events={};/**
       * User supplied callbacks for events on this channel.
       */_this.listeners={};_this.name=name;_this.socket=socket;_this.options=options;_this.eventFormatter=new EventFormatter(_this.options.namespace);_this.subscribe();return _this;}/**
     * Subscribe to a Socket.io channel.
     */_createClass(SocketIoChannel,[{key:"subscribe",value:function subscribe(){this.socket.emit('subscribe',{channel:this.name,auth:this.options.auth||{}});}/**
       * Unsubscribe from channel and ubind event callbacks.
       */},{key:"unsubscribe",value:function unsubscribe(){this.unbind();this.socket.emit('unsubscribe',{channel:this.name,auth:this.options.auth||{}});}/**
       * Listen for an event on the channel instance.
       */},{key:"listen",value:function listen(event,callback){this.on(this.eventFormatter.format(event),callback);return this;}/**
       * Stop listening for an event on the channel instance.
       */},{key:"stopListening",value:function stopListening(event,callback){this.unbindEvent(this.eventFormatter.format(event),callback);return this;}/**
       * Register a callback to be called anytime a subscription succeeds.
       */},{key:"subscribed",value:function subscribed(callback){this.on('connect',function(socket){callback(socket);});return this;}/**
       * Register a callback to be called anytime an error occurs.
       */},{key:"error",value:function error(callback){return this;}/**
       * Bind the channel's socket to an event and store the callback.
       */},{key:"on",value:function on(event,callback){var _this2=this;this.listeners[event]=this.listeners[event]||[];if(!this.events[event]){this.events[event]=function(channel,data){if(_this2.name===channel&&_this2.listeners[event]){_this2.listeners[event].forEach(function(cb){return cb(data);});}};this.socket.on(event,this.events[event]);}this.listeners[event].push(callback);return this;}/**
       * Unbind the channel's socket from all stored event callbacks.
       */},{key:"unbind",value:function unbind(){var _this3=this;Object.keys(this.events).forEach(function(event){_this3.unbindEvent(event);});}/**
       * Unbind the listeners for the given event.
       */},{key:"unbindEvent",value:function unbindEvent(event,callback){this.listeners[event]=this.listeners[event]||[];if(callback){this.listeners[event]=this.listeners[event].filter(function(cb){return cb!==callback;});}if(!callback||this.listeners[event].length===0){if(this.events[event]){this.socket.removeListener(event,this.events[event]);delete this.events[event];}delete this.listeners[event];}}}]);return SocketIoChannel;}(Channel);/**
   * This class represents a Socket.io private channel.
   */var SocketIoPrivateChannel=/*#__PURE__*/function(_SocketIoChannel){_inherits(SocketIoPrivateChannel,_SocketIoChannel);var _super=_createSuper(SocketIoPrivateChannel);function SocketIoPrivateChannel(){_classCallCheck(this,SocketIoPrivateChannel);return _super.apply(this,arguments);}_createClass(SocketIoPrivateChannel,[{key:"whisper",value:/**
       * Send a whisper event to other clients in the channel.
       */function whisper(eventName,data){this.socket.emit('client event',{channel:this.name,event:"client-".concat(eventName),data:data});return this;}}]);return SocketIoPrivateChannel;}(SocketIoChannel);/**
   * This class represents a Socket.io presence channel.
   */var SocketIoPresenceChannel=/*#__PURE__*/function(_SocketIoPrivateChann){_inherits(SocketIoPresenceChannel,_SocketIoPrivateChann);var _super=_createSuper(SocketIoPresenceChannel);function SocketIoPresenceChannel(){_classCallCheck(this,SocketIoPresenceChannel);return _super.apply(this,arguments);}_createClass(SocketIoPresenceChannel,[{key:"here",value:/**
       * Register a callback to be called anytime the member list changes.
       */function here(callback){this.on('presence:subscribed',function(members){callback(members.map(function(m){return m.user_info;}));});return this;}/**
       * Listen for someone joining the channel.
       */},{key:"joining",value:function joining(callback){this.on('presence:joining',function(member){return callback(member.user_info);});return this;}/**
       * Send a whisper event to other clients in the channel.
       */},{key:"whisper",value:function whisper(eventName,data){this.socket.emit('client event',{channel:this.name,event:"client-".concat(eventName),data:data});return this;}/**
       * Listen for someone leaving the channel.
       */},{key:"leaving",value:function leaving(callback){this.on('presence:leaving',function(member){return callback(member.user_info);});return this;}}]);return SocketIoPresenceChannel;}(SocketIoPrivateChannel);/**
   * This class represents a null channel.
   */var NullChannel=/*#__PURE__*/function(_Channel){_inherits(NullChannel,_Channel);var _super=_createSuper(NullChannel);function NullChannel(){_classCallCheck(this,NullChannel);return _super.apply(this,arguments);}_createClass(NullChannel,[{key:"subscribe",value:/**
       * Subscribe to a channel.
       */function subscribe(){//
}/**
       * Unsubscribe from a channel.
       */},{key:"unsubscribe",value:function unsubscribe(){//
}/**
       * Listen for an event on the channel instance.
       */},{key:"listen",value:function listen(event,callback){return this;}/**
       * Listen for all events on the channel instance.
       */},{key:"listenToAll",value:function listenToAll(callback){return this;}/**
       * Stop listening for an event on the channel instance.
       */},{key:"stopListening",value:function stopListening(event,callback){return this;}/**
       * Register a callback to be called anytime a subscription succeeds.
       */},{key:"subscribed",value:function subscribed(callback){return this;}/**
       * Register a callback to be called anytime an error occurs.
       */},{key:"error",value:function error(callback){return this;}/**
       * Bind a channel to an event.
       */},{key:"on",value:function on(event,callback){return this;}}]);return NullChannel;}(Channel);/**
   * This class represents a null private channel.
   */var NullPrivateChannel=/*#__PURE__*/function(_NullChannel){_inherits(NullPrivateChannel,_NullChannel);var _super=_createSuper(NullPrivateChannel);function NullPrivateChannel(){_classCallCheck(this,NullPrivateChannel);return _super.apply(this,arguments);}_createClass(NullPrivateChannel,[{key:"whisper",value:/**
       * Send a whisper event to other clients in the channel.
       */function whisper(eventName,data){return this;}}]);return NullPrivateChannel;}(NullChannel);/**
   * This class represents a null presence channel.
   */var NullPresenceChannel=/*#__PURE__*/function(_NullChannel){_inherits(NullPresenceChannel,_NullChannel);var _super=_createSuper(NullPresenceChannel);function NullPresenceChannel(){_classCallCheck(this,NullPresenceChannel);return _super.apply(this,arguments);}_createClass(NullPresenceChannel,[{key:"here",value:/**
       * Register a callback to be called anytime the member list changes.
       */function here(callback){return this;}/**
       * Listen for someone joining the channel.
       */},{key:"joining",value:function joining(callback){return this;}/**
       * Send a whisper event to other clients in the channel.
       */},{key:"whisper",value:function whisper(eventName,data){return this;}/**
       * Listen for someone leaving the channel.
       */},{key:"leaving",value:function leaving(callback){return this;}}]);return NullPresenceChannel;}(NullChannel);var Connector=/*#__PURE__*/function(){/**
     * Create a new class instance.
     */function Connector(options){_classCallCheck(this,Connector);/**
       * Default connector options.
       */this._defaultOptions={auth:{headers:{}},authEndpoint:'/broadcasting/auth',userAuthentication:{endpoint:'/broadcasting/user-auth',headers:{}},broadcaster:'pusher',csrfToken:null,bearerToken:null,host:null,key:null,namespace:'App.Events'};this.setOptions(options);this.connect();}/**
     * Merge the custom options with the defaults.
     */_createClass(Connector,[{key:"setOptions",value:function setOptions(options){this.options=_extends(this._defaultOptions,options);var token=this.csrfToken();if(token){this.options.auth.headers['X-CSRF-TOKEN']=token;this.options.userAuthentication.headers['X-CSRF-TOKEN']=token;}token=this.options.bearerToken;if(token){this.options.auth.headers['Authorization']='Bearer '+token;this.options.userAuthentication.headers['Authorization']='Bearer '+token;}return options;}/**
       * Extract the CSRF token from the page.
       */},{key:"csrfToken",value:function csrfToken(){var selector;if(typeof window!=='undefined'&&window['Laravel']&&window['Laravel'].csrfToken){return window['Laravel'].csrfToken;}else if(this.options.csrfToken){return this.options.csrfToken;}else if(typeof document!=='undefined'&&typeof document.querySelector==='function'&&(selector=document.querySelector('meta[name="csrf-token"]'))){return selector.getAttribute('content');}return null;}}]);return Connector;}();/**
   * This class creates a connector to Pusher.
   */var PusherConnector=/*#__PURE__*/function(_Connector){_inherits(PusherConnector,_Connector);var _super=_createSuper(PusherConnector);function PusherConnector(){var _this;_classCallCheck(this,PusherConnector);_this=_super.apply(this,arguments);/**
       * All of the subscribed channel names.
       */_this.channels={};return _this;}/**
     * Create a fresh Pusher connection.
     */_createClass(PusherConnector,[{key:"connect",value:function connect(){if(typeof this.options.client!=='undefined'){this.pusher=this.options.client;}else if(this.options.Pusher){this.pusher=new this.options.Pusher(this.options.key,this.options);}else{this.pusher=new Pusher(this.options.key,this.options);}}/**
       * Sign in the user via Pusher user authentication (https://pusher.com/docs/channels/using_channels/user-authentication/).
       */},{key:"signin",value:function signin(){this.pusher.signin();}/**
       * Listen for an event on a channel instance.
       */},{key:"listen",value:function listen(name,event,callback){return this.channel(name).listen(event,callback);}/**
       * Get a channel instance by name.
       */},{key:"channel",value:function channel(name){if(!this.channels[name]){this.channels[name]=new PusherChannel(this.pusher,name,this.options);}return this.channels[name];}/**
       * Get a private channel instance by name.
       */},{key:"privateChannel",value:function privateChannel(name){if(!this.channels['private-'+name]){this.channels['private-'+name]=new PusherPrivateChannel(this.pusher,'private-'+name,this.options);}return this.channels['private-'+name];}/**
       * Get a private encrypted channel instance by name.
       */},{key:"encryptedPrivateChannel",value:function encryptedPrivateChannel(name){if(!this.channels['private-encrypted-'+name]){this.channels['private-encrypted-'+name]=new PusherEncryptedPrivateChannel(this.pusher,'private-encrypted-'+name,this.options);}return this.channels['private-encrypted-'+name];}/**
       * Get a presence channel instance by name.
       */},{key:"presenceChannel",value:function presenceChannel(name){if(!this.channels['presence-'+name]){this.channels['presence-'+name]=new PusherPresenceChannel(this.pusher,'presence-'+name,this.options);}return this.channels['presence-'+name];}/**
       * Leave the given channel, as well as its private and presence variants.
       */},{key:"leave",value:function leave(name){var _this2=this;var channels=[name,'private-'+name,'private-encrypted-'+name,'presence-'+name];channels.forEach(function(name,index){_this2.leaveChannel(name);});}/**
       * Leave the given channel.
       */},{key:"leaveChannel",value:function leaveChannel(name){if(this.channels[name]){this.channels[name].unsubscribe();delete this.channels[name];}}/**
       * Get the socket ID for the connection.
       */},{key:"socketId",value:function socketId(){return this.pusher.connection.socket_id;}/**
       * Disconnect Pusher connection.
       */},{key:"disconnect",value:function disconnect(){this.pusher.disconnect();}}]);return PusherConnector;}(Connector);/**
   * This class creates a connnector to a Socket.io server.
   */var SocketIoConnector=/*#__PURE__*/function(_Connector){_inherits(SocketIoConnector,_Connector);var _super=_createSuper(SocketIoConnector);function SocketIoConnector(){var _this;_classCallCheck(this,SocketIoConnector);_this=_super.apply(this,arguments);/**
       * All of the subscribed channel names.
       */_this.channels={};return _this;}/**
     * Create a fresh Socket.io connection.
     */_createClass(SocketIoConnector,[{key:"connect",value:function connect(){var _this2=this;var io=this.getSocketIO();this.socket=io(this.options.host,this.options);this.socket.on('reconnect',function(){Object.values(_this2.channels).forEach(function(channel){channel.subscribe();});});return this.socket;}/**
       * Get socket.io module from global scope or options.
       */},{key:"getSocketIO",value:function getSocketIO(){if(typeof this.options.client!=='undefined'){return this.options.client;}if(typeof io!=='undefined'){return io;}throw new Error('Socket.io client not found. Should be globally available or passed via options.client');}/**
       * Listen for an event on a channel instance.
       */},{key:"listen",value:function listen(name,event,callback){return this.channel(name).listen(event,callback);}/**
       * Get a channel instance by name.
       */},{key:"channel",value:function channel(name){if(!this.channels[name]){this.channels[name]=new SocketIoChannel(this.socket,name,this.options);}return this.channels[name];}/**
       * Get a private channel instance by name.
       */},{key:"privateChannel",value:function privateChannel(name){if(!this.channels['private-'+name]){this.channels['private-'+name]=new SocketIoPrivateChannel(this.socket,'private-'+name,this.options);}return this.channels['private-'+name];}/**
       * Get a presence channel instance by name.
       */},{key:"presenceChannel",value:function presenceChannel(name){if(!this.channels['presence-'+name]){this.channels['presence-'+name]=new SocketIoPresenceChannel(this.socket,'presence-'+name,this.options);}return this.channels['presence-'+name];}/**
       * Leave the given channel, as well as its private and presence variants.
       */},{key:"leave",value:function leave(name){var _this3=this;var channels=[name,'private-'+name,'presence-'+name];channels.forEach(function(name){_this3.leaveChannel(name);});}/**
       * Leave the given channel.
       */},{key:"leaveChannel",value:function leaveChannel(name){if(this.channels[name]){this.channels[name].unsubscribe();delete this.channels[name];}}/**
       * Get the socket ID for the connection.
       */},{key:"socketId",value:function socketId(){return this.socket.id;}/**
       * Disconnect Socketio connection.
       */},{key:"disconnect",value:function disconnect(){this.socket.disconnect();}}]);return SocketIoConnector;}(Connector);/**
   * This class creates a null connector.
   */var NullConnector=/*#__PURE__*/function(_Connector){_inherits(NullConnector,_Connector);var _super=_createSuper(NullConnector);function NullConnector(){var _this;_classCallCheck(this,NullConnector);_this=_super.apply(this,arguments);/**
       * All of the subscribed channel names.
       */_this.channels={};return _this;}/**
     * Create a fresh connection.
     */_createClass(NullConnector,[{key:"connect",value:function connect(){//
}/**
       * Listen for an event on a channel instance.
       */},{key:"listen",value:function listen(name,event,callback){return new NullChannel();}/**
       * Get a channel instance by name.
       */},{key:"channel",value:function channel(name){return new NullChannel();}/**
       * Get a private channel instance by name.
       */},{key:"privateChannel",value:function privateChannel(name){return new NullPrivateChannel();}/**
       * Get a private encrypted channel instance by name.
       */},{key:"encryptedPrivateChannel",value:function encryptedPrivateChannel(name){return new NullPrivateChannel();}/**
       * Get a presence channel instance by name.
       */},{key:"presenceChannel",value:function presenceChannel(name){return new NullPresenceChannel();}/**
       * Leave the given channel, as well as its private and presence variants.
       */},{key:"leave",value:function leave(name){//
}/**
       * Leave the given channel.
       */},{key:"leaveChannel",value:function leaveChannel(name){//
}/**
       * Get the socket ID for the connection.
       */},{key:"socketId",value:function socketId(){return'fake-socket-id';}/**
       * Disconnect the connection.
       */},{key:"disconnect",value:function disconnect(){//
}}]);return NullConnector;}(Connector);/**
   * This class is the primary API for interacting with broadcasting.
   */var Echo=/*#__PURE__*/function(){/**
     * Create a new class instance.
     */function Echo(options){_classCallCheck(this,Echo);this.options=options;this.connect();if(!this.options.withoutInterceptors){this.registerInterceptors();}}/**
     * Get a channel instance by name.
     */_createClass(Echo,[{key:"channel",value:function channel(_channel){return this.connector.channel(_channel);}/**
       * Create a new connection.
       */},{key:"connect",value:function connect(){if(this.options.broadcaster=='pusher'){this.connector=new PusherConnector(this.options);}else if(this.options.broadcaster=='socket.io'){this.connector=new SocketIoConnector(this.options);}else if(this.options.broadcaster=='null'){this.connector=new NullConnector(this.options);}else if(typeof this.options.broadcaster=='function'){this.connector=new this.options.broadcaster(this.options);}}/**
       * Disconnect from the Echo server.
       */},{key:"disconnect",value:function disconnect(){this.connector.disconnect();}/**
       * Get a presence channel instance by name.
       */},{key:"join",value:function join(channel){return this.connector.presenceChannel(channel);}/**
       * Leave the given channel, as well as its private and presence variants.
       */},{key:"leave",value:function leave(channel){this.connector.leave(channel);}/**
       * Leave the given channel.
       */},{key:"leaveChannel",value:function leaveChannel(channel){this.connector.leaveChannel(channel);}/**
       * Leave all channels.
       */},{key:"leaveAllChannels",value:function leaveAllChannels(){for(var channel in this.connector.channels){this.leaveChannel(channel);}}/**
       * Listen for an event on a channel instance.
       */},{key:"listen",value:function listen(channel,event,callback){return this.connector.listen(channel,event,callback);}/**
       * Get a private channel instance by name.
       */},{key:"private",value:function _private(channel){return this.connector.privateChannel(channel);}/**
       * Get a private encrypted channel instance by name.
       */},{key:"encryptedPrivate",value:function encryptedPrivate(channel){return this.connector.encryptedPrivateChannel(channel);}/**
       * Get the Socket ID for the connection.
       */},{key:"socketId",value:function socketId(){return this.connector.socketId();}/**
       * Register 3rd party request interceptiors. These are used to automatically
       * send a connections socket id to a Laravel app with a X-Socket-Id header.
       */},{key:"registerInterceptors",value:function registerInterceptors(){if(typeof Vue==='function'&&Vue.http){this.registerVueRequestInterceptor();}if(typeof axios==='function'){this.registerAxiosRequestInterceptor();}if(typeof jQuery==='function'){this.registerjQueryAjaxSetup();}if((typeof Turbo==="undefined"?"undefined":_typeof(Turbo))==='object'){this.registerTurboRequestInterceptor();}}/**
       * Register a Vue HTTP interceptor to add the X-Socket-ID header.
       */},{key:"registerVueRequestInterceptor",value:function registerVueRequestInterceptor(){var _this=this;Vue.http.interceptors.push(function(request,next){if(_this.socketId()){request.headers.set('X-Socket-ID',_this.socketId());}next();});}/**
       * Register an Axios HTTP interceptor to add the X-Socket-ID header.
       */},{key:"registerAxiosRequestInterceptor",value:function registerAxiosRequestInterceptor(){var _this2=this;axios.interceptors.request.use(function(config){if(_this2.socketId()){config.headers['X-Socket-Id']=_this2.socketId();}return config;});}/**
       * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
       */},{key:"registerjQueryAjaxSetup",value:function registerjQueryAjaxSetup(){var _this3=this;if(typeof jQuery.ajax!='undefined'){jQuery.ajaxPrefilter(function(options,originalOptions,xhr){if(_this3.socketId()){xhr.setRequestHeader('X-Socket-Id',_this3.socketId());}});}}/**
       * Register the Turbo Request interceptor to add the X-Socket-ID header.
       */},{key:"registerTurboRequestInterceptor",value:function registerTurboRequestInterceptor(){var _this4=this;document.addEventListener('turbo:before-fetch-request',function(event){event.detail.fetchOptions.headers['X-Socket-Id']=_this4.socketId();});}}]);return Echo;}();return Echo;}();/*!
* @supportpal/pollcast v1.3.2
* Released under the MIT License.
*/(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):(global=typeof globalThis!=='undefined'?globalThis:global||self,global.Pollcast=factory());})(this,function(){'use strict';function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},_typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);Object.defineProperty(Constructor,"prototype",{writable:false});return Constructor;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});Object.defineProperty(subClass,"prototype",{writable:false});if(superClass)_setPrototypeOf(subClass,superClass);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}else if(call!==void 0){throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _get(){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(arguments.length<3?target:receiver);}return desc.value;};}return _get.apply(this,arguments);}var Connector$1=/*#__PURE__*/function(){/**
     * Create a new class instance.
     */function Connector(options){_classCallCheck(this,Connector);/**
       * Default connector options.
       */_defineProperty(this,"_defaultOptions",{auth:{headers:{}},authEndpoint:'/broadcasting/auth',userAuthentication:{endpoint:'/broadcasting/user-auth',headers:{}},broadcaster:'pusher',csrfToken:null,bearerToken:null,host:null,key:null,namespace:'App.Events'});this.setOptions(options);this.connect();}/**
     * Merge the custom options with the defaults.
     */_createClass(Connector,[{key:"setOptions",value:function setOptions(options){this.options=_extends(this._defaultOptions,options);var token=this.csrfToken();if(token){this.options.auth.headers['X-CSRF-TOKEN']=token;this.options.userAuthentication.headers['X-CSRF-TOKEN']=token;}token=this.options.bearerToken;if(token){this.options.auth.headers['Authorization']='Bearer '+token;this.options.userAuthentication.headers['Authorization']='Bearer '+token;}return options;}/**
       * Extract the CSRF token from the page.
       */},{key:"csrfToken",value:function csrfToken(){var selector;if(typeof window!=='undefined'&&window['Laravel']&&window['Laravel'].csrfToken){return window['Laravel'].csrfToken;}else if(this.options.csrfToken){return this.options.csrfToken;}else if(typeof document!=='undefined'&&typeof document.querySelector==='function'&&(selector=document.querySelector('meta[name="csrf-token"]'))){return selector.getAttribute('content');}return null;}/**
       * Create a fresh connection.
       */}]);return Connector;}();/**
   * This class represents a basic channel.
   */var Channel$1=/*#__PURE__*/function(){function Channel(){_classCallCheck(this,Channel);}_createClass(Channel,[{key:"listenForWhisper",value:/**
       * Listen for a whisper event on the channel instance.
       */function listenForWhisper(event,callback){return this.listen('.client-'+event,callback);}/**
       * Listen for an event on the channel instance.
       */},{key:"notification",value:function notification(callback){return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated',callback);}/**
       * Stop listening to an event on the channel instance.
       */},{key:"stopListeningForWhisper",value:/**
       * Stop listening for a whisper event on the channel instance.
       */function stopListeningForWhisper(event,callback){return this.stopListening('.client-'+event,callback);}/**
       * Register a callback to be called anytime a subscription succeeds.
       */}]);return Channel;}();/**
   * Event name formatter
   */var EventFormatter=/*#__PURE__*/function(){/**
     * Event namespace.
     */ /**
     * Create a new class instance.
     */function EventFormatter(namespace){_classCallCheck(this,EventFormatter);this.setNamespace(namespace);}/**
     * Format the given event name.
     */_createClass(EventFormatter,[{key:"format",value:function format(event){if(event.charAt(0)==='.'||event.charAt(0)==='\\'){return event.substr(1);}else if(this.namespace){event=this.namespace+'.'+event;}return event.replace(/\./g,'\\');}/**
       * Set the event namespace.
       */},{key:"setNamespace",value:function setNamespace(value){this.namespace=value;}}]);return EventFormatter;}();/**
   * This class represents a Socket.io channel.
   */var Channel=/*#__PURE__*/function(_BaseChannel){_inherits(Channel,_BaseChannel);var _super=_createSuper(Channel);/**
     * Create a new class instance.
     */function Channel(socket,name,options){var _this;_classCallCheck(this,Channel);_this=_super.call(this);_this.name=name;_this.socket=socket;_this.options=options;_this.eventFormatter=new EventFormatter(_this.options.namespace);_this.subscribe();return _this;}/**
     * Subscribe to a channel.
     */_createClass(Channel,[{key:"subscribe",value:function subscribe(){this.socket.subscribe(this.name);}/**
       * Unsubscribe from channel.
       */},{key:"unsubscribe",value:function unsubscribe(){this.socket.unsubscribe(this.name);}/**
       * Listen for an event on the channel instance.
       */},{key:"listen",value:function listen(event,callback){this.socket.on(this.name,this.eventFormatter.format(event),callback);return this;}/**
         * Stop listening for an event on the channel instance.
         */},{key:"stopListening",value:function stopListening(event,callback){this.socket.off(this.name,this.eventFormatter.format(event),callback);return this;}/**
       * Register a callback to be called anytime a subscription succeeds.
       */},{key:"subscribed",value:function subscribed(callback){this.socket.on(this.name,'pollcast:subscription_succeeded',callback);return this;}/**
       * Register a callback to be called anytime an error occurs.
       */},{key:"error",value:function error(callback){return this;}}]);return Channel;}(Channel$1);var PrivateChannel=/*#__PURE__*/function(_Channel){_inherits(PrivateChannel,_Channel);var _super=_createSuper(PrivateChannel);function PrivateChannel(){_classCallCheck(this,PrivateChannel);return _super.apply(this,arguments);}_createClass(PrivateChannel,[{key:"whisper",value:/**
       * Trigger client event on the channel.
       */function whisper(eventName,data){this.socket.emit(this.name,"client-".concat(eventName),data);return this;}}]);return PrivateChannel;}(Channel);var PresenceChannel=/*#__PURE__*/function(_PrivateChannel){_inherits(PresenceChannel,_PrivateChannel);var _super=_createSuper(PresenceChannel);function PresenceChannel(){_classCallCheck(this,PresenceChannel);return _super.apply(this,arguments);}_createClass(PresenceChannel,[{key:"here",value:/**
       * Listen for when you've successfully joined a channel.
       */function here(callback){this.socket.on(this.name,'pollcast:subscription_succeeded',function(members){callback(members.map(function(m){return m.user_info;}));});return this;}/**
       * Listen for someone joining the channel.
       */},{key:"joining",value:function joining(callback){this.socket.on(this.name,'pollcast:member_added',function(member){return callback(member.user_info);});return this;}/**
       * Listen for someone leaving the channel.
       */},{key:"leaving",value:function leaving(callback){this.socket.on(this.name,'pollcast:member_removed',function(member){return callback(member.user_info);});return this;}}]);return PresenceChannel;}(PrivateChannel);/**
   * @see https://stackoverflow.com/a/32108184
   */var isEmptyObject=function isEmptyObject(obj){return obj&&Object.keys(obj).length===0&&obj.constructor===Object;};/**
   * URL encode a key value pair.
   */var urlEncode=function urlEncode(key,value){return encodeURIComponent(key)+'='+encodeURIComponent(value);};/**
   * URL encode an object.
   */var urlEncodeObject=function urlEncodeObject(obj,prefix){var str=[];Object.keys(obj).forEach(function(key,index){var item;var k=prefix?prefix+'['+key+']':key;var v=obj[key];if(_typeof(v)==='object'){item=isEmptyObject(v)?urlEncode(k,''):urlEncodeObject(v,k);}else{item=urlEncode(k,v);}str.push(item);});return str.join('&');};/**
   * Create a cryptographically unsecure UUID v4 identifier.
   * Use https://www.npmjs.com/package/uuid for something more reliable.
   *
   * @see https://stackoverflow.com/a/2117523
   */var uuid=function uuid(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0;var v=c==='x'?r:r&0x3|0x8;return v.toString(16);});};var Request=/*#__PURE__*/function(){function Request(method,url){_classCallCheck(this,Request);this.xhr=new window.XMLHttpRequest();this.xhr.open(method,url);this.setRequestHeader('X-Requested-With','XMLHttpRequest');this.setRequestHeader('Content-Type','application/x-www-form-urlencoded');this.fail(function(xhr){document.dispatchEvent(new CustomEvent('pollcast:request-error',{detail:xhr}));});}_createClass(Request,[{key:"success",value:function success(cb){var self=this;this.xhr.addEventListener('load',function(){if(self.xhr.readyState>3&&self.xhr.status===200){cb(self.xhr);}});return this;}},{key:"fail",value:function fail(cb){var self=this;this.xhr.addEventListener('load',function(){if(self.xhr.readyState>3&&self.xhr.status!==200){cb(self.xhr);}});return this;}},{key:"always",value:function always(cb){var self=this;this.xhr.addEventListener('loadend',function(e){cb(self.xhr,e);});return this;}},{key:"setRequestHeader",value:function setRequestHeader(name,value){this.xhr.setRequestHeader(name,value);return this;}},{key:"send",value:function send(data){var encodedData;if(typeof data!=='undefined'){encodedData=urlEncodeObject(data);}this.xhr.send(encodedData||null);}},{key:"abort",value:function abort(){this.xhr.abort();}}]);return Request;}();var LocalStorage=/*#__PURE__*/function(){function LocalStorage(key){_classCallCheck(this,LocalStorage);this.key=key;}_createClass(LocalStorage,[{key:"get",value:function get(){var data=localStorage.getItem(this.key);if(data===null){return{};}try{data=JSON.parse(data);if(_typeof(data)==='object'){return data;}return{};}catch(err){return{};}}},{key:"set",value:function set(key,value){var data=this.get();data[key]=value;localStorage.setItem(this.key,JSON.stringify(data));}}]);return LocalStorage;}();var UniversalTime=/*#__PURE__*/function(){function UniversalTime(){_classCallCheck(this,UniversalTime);this.storage=new LocalStorage('universal_time');}_createClass(UniversalTime,[{key:"setTime",value:function setTime(time){this.storage.set('time',time);}},{key:"getTime",value:function getTime(){return this.storage.get().time||'';}}]);return UniversalTime;}();/**
   * This class is static as we want it to act as a singleton.
   * No matter how many PollcastConnector instances you create the windowId should remain the same.
   */var WindowVisibility=/*#__PURE__*/function(){function WindowVisibility(){_classCallCheck(this,WindowVisibility);}_createClass(WindowVisibility,null,[{key:"setActive",value:function setActive(){this.storage.set('lastActive',this.windowId);}},{key:"isActive",value:function isActive(){return this.storage.get().lastActive===this.windowId;}}]);return WindowVisibility;}();WindowVisibility.windowId=uuid();WindowVisibility.storage=new LocalStorage('window-visibility');WindowVisibility.setActive();window.addEventListener('visibilitychange',function(){if(!document.hidden){WindowVisibility.setActive();}});var Socket=/*#__PURE__*/function(){function Socket(options,csrfToken){_classCallCheck(this,Socket);/**
       * Socket ID.
       */this.id='';/**
       * Poll for data which has been created since this timestamp.
       */this.universalTime=new UniversalTime();/**
       * Subscribed channels.
       */this.channels={};this.options=options;this.options.csrfToken=csrfToken;}/**
     * Connect to the server, start xhr-polling.
     */_createClass(Socket,[{key:"connect",value:function connect(){var self=this;this.request=new Request('POST',this.options.routes.connect);this.request.success(function(xhr){var response=JSON.parse(xhr.responseText);if(response.status!=='success'){return;}self.universalTime.setTime(response.time);self.id=response.id;self.poll();}).send({_token:this.options.csrfToken});}},{key:"subscribed",get:function get(){return this.channels;}/**
       * Join a channel.
       */},{key:"subscribe",value:function subscribe(channel){var _a,_b;if(!Object.hasOwnProperty.call(this.channels,channel)){this.channels[channel]={};}var request=new Request('POST',this.options.routes.subscribe);for(var name in(_b=(_a=this.options)===null||_a===void 0?void 0:_a.auth)===null||_b===void 0?void 0:_b.headers){request.setRequestHeader(name,this.options.auth.headers[name]);}request.send({channel_name:channel,_token:this.options.csrfToken});}/**
       * Leave a channel.
       */},{key:"unsubscribe",value:function unsubscribe(channel){var data={channel_name:channel,_token:this.options.csrfToken};if('sendBeacon'in navigator&&navigator.sendBeacon(this.options.routes.unsubscribe,new URLSearchParams(data))){delete this.channels[channel];}}/**
       * Listen for an event on the channel.
       */},{key:"on",value:function on(channel,event,callback){if(!Object.hasOwnProperty.call(this.channels,channel)){return;}if(!Object.hasOwnProperty.call(this.channels[channel],event)){this.channels[channel][event]=[];}this.channels[channel][event].push(callback);}/**
       * Stop listening for a given event on the channel.
       */},{key:"off",value:function off(channel,event,callback){if(!Object.hasOwnProperty.call(this.channels,channel)||!Object.hasOwnProperty.call(this.channels[channel],event)){return;}if(callback){this.channels[channel][event]=this.channels[channel][event].filter(function(cb){return cb!==callback;});}else{delete this.channels[channel][event];}}/**
       * Publish a message from the client to the server.
       */},{key:"emit",value:function emit(channel,event,data){var request=new Request('POST',this.options.routes.publish);request.send({channel_name:channel,event:event,data:data,_token:this.options.csrfToken});}/**
       * Disconnect the client from the server.
       */},{key:"disconnect",value:function disconnect(){this.id='';if(this.request){this.request.abort();}if(this.timer){clearTimeout(this.timer);this.timer=undefined;}}},{key:"dispatch",value:function dispatch(channel,event,data){if(!Object.hasOwnProperty.call(this.channels,channel)||!Object.hasOwnProperty.call(this.channels[channel],event)){return;}var events=this.channels[channel][event];for(var i=0;i<events.length;i++){events[i](data);}}},{key:"poll",value:function poll(){var _this=this;var self=this;var channels={};for(var channel in this.channels){channels[channel]=Object.keys(this.channels[channel]);}if(!WindowVisibility.isActive()||isEmptyObject(channels)){/* istanbul ignore else */if(this.id!==''){/* istanbul ignore next */self.timer=setTimeout(function(){return self.poll();},this.options.polling);}return;}this.request=new Request('POST',this.options.routes.receive);this.request.success(function(xhr){return self.fireEvents(xhr.responseText);}).fail(function(xhr){// https://github.com/supportpal/pollcast/issues/7
if(xhr.status===404){for(var _channel in _this.channels){self.subscribe(_channel);}}}).always(function(){// only if the socket is active
if(_this.id!==''){/* istanbul ignore next */self.timer=setTimeout(function(){return self.poll();},self.options.polling);}}).send({time:this.universalTime.getTime(),channels:channels,_token:this.options.csrfToken});}},{key:"fireEvents",value:function fireEvents(response){var _this2=this;response=JSON.parse(response);if(response.status!=='success'){return;}this.universalTime.setTime(response.time);Object.keys(response.events).forEach(function(event){var item=response.events[event];_this2.dispatch(item.channel.name,item.event,item.payload);});}}]);return Socket;}();var Connector=/*#__PURE__*/function(_BaseConnector){_inherits(Connector,_BaseConnector);var _super=_createSuper(Connector);function Connector(){var _this;_classCallCheck(this,Connector);_this=_super.apply(this,arguments);/**
       * All of the subscribed channel names.
       */_this.channels={};return _this;}/**
     * Merge the custom options with the defaults.
     */_createClass(Connector,[{key:"setOptions",value:function setOptions(options){_get(_getPrototypeOf(Connector.prototype),"setOptions",this).call(this,options);this.options=_extends({routes:{connect:'',receive:'',publish:'',subscribe:'',unsubscribe:''},polling:5000},this.options);return options;}/**
       * Create a fresh Socket.io connection.
       */},{key:"connect",value:function connect(){this.socket=new Socket(this.options,this.csrfToken());this.socket.connect();}/**
       * Get a channel instance by name.
       */},{key:"channel",value:function channel(name){if(!this.channels[name]){this.channels[name]=new Channel(this.socket,name,this.options);}return this.channels[name];}/**
       * Get a private channel instance by name.
       */},{key:"privateChannel",value:function privateChannel(name){if(!this.channels['private-'+name]){this.channels['private-'+name]=new PrivateChannel(this.socket,'private-'+name,this.options);}return this.channels['private-'+name];}/**
       * Get a presence channel instance by name.
       */},{key:"presenceChannel",value:function presenceChannel(name){if(!this.channels['presence-'+name]){this.channels['presence-'+name]=new PresenceChannel(this.socket,'presence-'+name,this.options);}return this.channels['presence-'+name];}/**
       * Leave the given channel, as well as its private and presence variants.
       */},{key:"leave",value:function leave(name){var _this2=this;var channels=[name,'private-'+name,'presence-'+name];channels.forEach(function(name){_this2.leaveChannel(name);});}/**
       * Leave the given channel.
       */},{key:"leaveChannel",value:function leaveChannel(name){if(this.channels[name]){this.channels[name].unsubscribe();delete this.channels[name];}}/**
       * Get the socket ID for the connection.
       */},{key:"socketId",value:function socketId(){return this.socket?this.socket.id:'';}/**
       * Disconnect connection.
       */},{key:"disconnect",value:function disconnect(){if(this.socket){this.socket.disconnect();}}}]);return Connector;}(Connector$1);var PollcastConnector=Connector;return PollcastConnector;});