(function () {
    const players = document.querySelectorAll('.player');

    const getSeconds = timing => {
        const parsed = timing.split(':');
        const [min, sec] = parsed.map(Number);

        return min * 60 + sec;
    };

    [...players].forEach(player => {
        const audio = player.querySelector('.player__audio');
        const timecodes = player.querySelectorAll('.player__timecode');

        [...timecodes].forEach(timecode => {
            const codes = timecode.innerText;
            const seconds = getSeconds(timecode.innerText);

            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'player__timecode player__timecode--button';
            button.innerText = codes;

            button.addEventListener('click', () => {
                audio.currentTime = seconds;
                audio.play();
            });

            timecode.replaceWith(button);
        });
    });
}());

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/promise-polyfill/src/finally.js":
/*!******************************************************!*\
  !*** ./node_modules/promise-polyfill/src/finally.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function() {
        // @ts-ignore
        return constructor.reject(reason);
      });
    }
  );
}

/* harmony default export */ __webpack_exports__["default"] = (finallyConstructor);


/***/ }),

/***/ "./node_modules/promise-polyfill/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/promise-polyfill/src/index.md.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finally */ "./node_modules/promise-polyfill/src/finally.js");


// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__["default"];

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }

    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  // @ts-ignore
  (typeof setImmediate === 'function' &&
    function(fn) {
      // @ts-ignore
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Promise);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var global = (function(self) {
  return self
  // eslint-disable-next-line no-invalid-this
})(typeof self !== 'undefined' ? self : undefined)
var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : ''
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException

if (typeof DOMException !== 'function') {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


/***/ }),

/***/ "./src/js/ajax/index.js":
/*!******************************!*\
  !*** ./src/js/ajax/index.md.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sendAjax; });
/* harmony import */ var promise_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! promise-polyfill */ "./node_modules/promise-polyfill/src/index.js");
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");



function sendAjax(url = '/backend-api/form/', data, cb) {
  fetch(url, {
    method: 'POST',
    body: data,
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        cb(true);
        return true;
      }
      throw new Error(`${response.status}: ${response.statusText}`);
    })
    .catch((err) => {
      cb(false);
      return false;
    });
}


/***/ }),

/***/ "./src/js/animate.js":
/*!***************************!*\
  !*** ./src/js/animate.js ***!
  \***************************/
/*! exports provided: animateBl, animateScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateBl", function() { return animateBl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateScroll", function() { return animateScroll; });
/* harmony import */ var _check_mobile_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check/mobile.ts */ "./src/js/check/mobile.ts");
/* harmony import */ var _check_mobile_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_check_mobile_ts__WEBPACK_IMPORTED_MODULE_0__);


const animate = options => {
  const start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    var progress = options.timing(timeFraction);

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

const animateBl = (item, newItemWidth, durationMS) => {
  animate({
    duration: durationMS,
    timing: function back(x, timeFraction) {
      return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
    }.bind(null, 1.5),
    draw: progress => {
      item.style.height = 0 + progress * newItemWidth + 'px';
    }
  });
};

function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPosition(eID) {
  let dest = eID.href;
  if (!dest || !(dest = dest.split('#')[1])) {
    return;
  }
  var elm = document.getElementById(dest);
  var y;
  if (dest !== 'service') {
    y = elm.offsetTop - document.querySelector('#header').clientHeight;
  } else {
    y = elm.offsetTop;
  }

  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

function animateScroll(eID) {
  var startY = currentYPosition();
  var stopY = elmYPosition(eID);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY);
    return;
  }
  let speed;
  if (!_check_mobile_ts__WEBPACK_IMPORTED_MODULE_0___default()()) {
    speed = Math.round(distance / 100);
  } else {
    speed = 0;
  }
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (var i = startY; i > stopY; i -= step) {
    setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
}


/***/ }),

/***/ "./src/js/check/mobile.ts":
/*!********************************!*\
  !*** ./src/js/check/mobile.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checkMobile = function () {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
exports.default = checkMobile;


/***/ }),

/***/ "./src/js/check/viewport.ts":
/*!**********************************!*\
  !*** ./src/js/check/viewport.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
exports.default = isInViewport;


/***/ }),

/***/ "./src/js/check/webp.ts":
/*!******************************!*\
  !*** ./src/js/check/webp.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checkWebp = function () {
    var elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
};
exports.default = checkWebp;


/***/ }),

/***/ "./src/js/debug/index.js":
/*!*******************************!*\
  !*** ./src/js/debug/index.md.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const config = {
	debug: false
};

/* harmony default export */ __webpack_exports__["default"] = (config);


/***/ }),

/***/ "./src/js/feedback/index.js":
/*!**********************************!*\
  !*** ./src/js/feedback/index.md.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const changeLabel = (input, labelClass, value) => {
	if (value) {
		input.parentElement.querySelector(`.${labelClass}`).classList.add('hide');
	} else {
		input.parentElement
			.querySelector(`.${labelClass}`)
			.classList.remove('hide');
	}
};

const setChangeLabel = (inputs, labelClass) => {
	if (inputs.length) {
		[...inputs].forEach(input => {
			input.addEventListener('focus', () =>
				changeLabel(input, labelClass, true)
			);
			input.addEventListener('blur', () =>
				changeLabel(input, labelClass, input.value)
			);
		});
	}
};

/* harmony default export */ __webpack_exports__["default"] = (setChangeLabel);


/***/ }),

/***/ "./src/js/header/slick-head.ts":
/*!*************************************!*\
  !*** ./src/js/header/slick-head.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var slickHeader = function (header) {
    var skipBl = document.querySelector('#show-head');
    var offsetHeight = skipBl ? skipBl.offsetTop + skipBl.offsetHeight : 0;
    if (window.pageYOffset > offsetHeight) {
        header.classList.add('slick');
    }
    else {
        header.classList.remove('slick');
    }
};
exports.default = slickHeader;


/***/ }),

/***/ "./src/js/hover-plus.js":
/*!******************************!*\
  !*** ./src/js/hover-plus.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const removeClass = msg => {
  if (msg.classList.contains('active')) {
    msg.classList.remove('active');
  }
};

const hoverPlus = parent => {
  if (parent.length) {
    [...parent].forEach(plus => {
      plus.addEventListener('mouseover', () => {
        const msg = plus.parentElement.querySelector(`.show-msg`);
        if (!msg.classList.contains('active')) {
          msg.classList.add('active');
          plus.addEventListener('mouseout', () => {
            removeClass(msg);
          });
        }
      });
    });
  } else {
    console.error('WAT?');
  }
};

/* harmony default export */ __webpack_exports__["default"] = (hoverPlus);


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _typewrite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typewrite */ "./src/js/typewrite.js");
/* harmony import */ var _header_slick_head_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/slick-head.ts */ "./src/js/header/slick-head.ts");
/* harmony import */ var _header_slick_head_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_slick_head_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hover_plus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hover-plus */ "./src/js/hover-plus.js");
/* harmony import */ var _servie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servie */ "./src/js/servie.js");
/* harmony import */ var _toggle_active_tg_active_presenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggle-active/tg-active.presenter */ "./src/js/toggle-active/tg-active.presenter.js");
/* harmony import */ var _feedback_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback/index.md */ "./src/js/feedback/index.js");
/* harmony import */ var _validation_validationPresenter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validation/validationPresenter */ "./src/js/validation/validationPresenter.js");
/* harmony import */ var _debug_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./debug/index.md */ "./src/js/debug/index.js");
/* harmony import */ var _check_mobile_ts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./check/mobile.ts */ "./src/js/check/mobile.ts");
/* harmony import */ var _check_mobile_ts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_check_mobile_ts__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _check_webp_ts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./check/webp.ts */ "./src/js/check/webp.ts");
/* harmony import */ var _check_webp_ts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_check_webp_ts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _check_viewport_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./check/viewport.ts */ "./src/js/check/viewport.ts");
/* harmony import */ var _check_viewport_ts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_check_viewport_ts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./map */ "./src/js/map/index.js");








// Debug







// Header
const header = document.querySelector('#header');
if(header) {
  _header_slick_head_ts__WEBPACK_IMPORTED_MODULE_1___default()(header);
  document.addEventListener('scroll', () => {
    _header_slick_head_ts__WEBPACK_IMPORTED_MODULE_1___default()(header);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const dataText = [
    'Веб разработка, ничего лишнего!',
    'SEO продвижение',
    'Дизайн',
    'Мобильные приложения',
  ];

  if (!_debug_index__WEBPACK_IMPORTED_MODULE_7__["default"].debug) {
    if (!document.querySelector('.header-inner')) {
      Object(_typewrite__WEBPACK_IMPORTED_MODULE_0__["default"])(dataText);
    }
  }

  Object(_servie__WEBPACK_IMPORTED_MODULE_3__["clickService"])();
  if (!_check_webp_ts__WEBPACK_IMPORTED_MODULE_9___default()()) {
    document.body.classList.add('no-webp');
  }

  // Header menu
  const toggleMenu = document.querySelector('#toggle');
  const menu = document.querySelector('.main-nav__list');

  toggleMenu.addEventListener('click', function () {
    if (menu.classList.contains('is-active')) {
      this.setAttribute('aria-expanded', 'false');
      this.classList.remove('is-active');
      menu.classList.remove('is-active');
    } else {
      menu.classList.add('is-active');
      this.classList.add('is-active');
      this.setAttribute('aria-expanded', 'true');
    }
	});

	const mapEL = document.querySelector('.contact-data__map-wrap');
	if (mapEL && _check_viewport_ts__WEBPACK_IMPORTED_MODULE_10___default()(mapEL)) {
		Object(_map__WEBPACK_IMPORTED_MODULE_11__["default"])(mapEL);
	}

  window.onscroll = function () {
    if (mapEL && _check_viewport_ts__WEBPACK_IMPORTED_MODULE_10___default()(mapEL)) {
      Object(_map__WEBPACK_IMPORTED_MODULE_11__["default"])(mapEL);
    }
  };
  const allPlus = document.querySelectorAll('.plus');
  if (!document.querySelector('.header-inner')) {
    Object(_hover_plus__WEBPACK_IMPORTED_MODULE_2__["default"])(allPlus);
  }

});

// Show more cust
const setEvents = new _toggle_active_tg_active_presenter__WEBPACK_IMPORTED_MODULE_4__["default"]();
setEvents.makeListner(true, true);

const inputs = document.querySelectorAll('.feedback__input');
Object(_feedback_index__WEBPACK_IMPORTED_MODULE_5__["default"])(inputs, 'feedback__label-text');

// Send form
const sendForm = document.querySelectorAll('.feedback__form');
if (sendForm.length) {
  [...sendForm].forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const valid = new _validation_validationPresenter__WEBPACK_IMPORTED_MODULE_6__["default"]();
      valid.checkForm(form);
    });
  });
}

// Popup service
const serviseForm = document.querySelector('#make-order form');
if (serviseForm) {
  Object(_servie__WEBPACK_IMPORTED_MODULE_3__["sendPopup"])(serviseForm);
}

if (!_check_mobile_ts__WEBPACK_IMPORTED_MODULE_8___default()()) {
  document.body.classList.add('no-touch');
}


/***/ }),

/***/ "./src/js/map/index.js":
/*!*****************************!*\
  !*** ./src/js/map/index.md.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const loadMap = (nodeElem) => {
  if (nodeElem.getAttribute('data-load') !== 'true') {
    const scriptNode = document.createElement('script');
    scriptNode.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aebd510b80c652d7ad9110e85e41c05b8afb40feb9e3857a865085b86c19e81ac&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false';
    nodeElem.setAttribute('data-load', 'true');
    nodeElem.appendChild(scriptNode);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (loadMap);


/***/ }),

/***/ "./src/js/servie.js":
/*!**************************!*\
  !*** ./src/js/servie.js ***!
  \**************************/
/*! exports provided: clickService, sendPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickService", function() { return clickService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendPopup", function() { return sendPopup; });
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ "./src/js/animate.js");
/* harmony import */ var _validation_validatonView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation/validatonView */ "./src/js/validation/validatonView.js");
/* harmony import */ var _validation_validationModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation/validationModel */ "./src/js/validation/validationModel.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajax */ "./src/js/ajax/index.js");





const popup = document.querySelector('#make-order');
const formPopup = document.querySelector('#make-order form');

const resetPopup = () => {
  popup.classList.remove('active');
  popup.removeAttribute('style');
  formPopup.reset();
};

const showPopUpMail = (evt, item) => {
  evt.preventDefault();
  const inputService = document.querySelector('#cat-service');
  const itemCat = item.getAttribute('data-name-cat');
  const catNamePopupEl = document.querySelector('#cat-pop-name');
  inputService.value = itemCat;
  catNamePopupEl.innerHTML = itemCat;
  if (!popup.classList.contains('active')) {
    Object(_animate__WEBPACK_IMPORTED_MODULE_0__["animateBl"])(popup, 103, 400);
    popup.classList.add('active');
    document.querySelector('.make-order__input').focus();
  }
  const closePop = popup.querySelector('.close-popup');
  closePop.addEventListener('click', resetPopup);
};

const clickService = () => {
  const allServiceHref = document.querySelectorAll('.service-item__order');
  [...allServiceHref].forEach((item) => {
    item.addEventListener('click', (evt) => {
      showPopUpMail(evt, item);
    });
  });
};

const sendPopup = (form) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const showResult = (isSuccess) => {
      const resultElem = document.createElement('div');
      resultElem.classList.add('show-result-serv');
      resultElem.innerHTML = isSuccess
        ? 'Успешно отправлено'
        : 'Произошла ошибка';
      form.appendChild(resultElem);

      setTimeout(() => {
        form.removeChild(resultElem);
        resetPopup();
      }, 1000);
      document.querySelector('.make-order__input').blur();
    };

    const requiredFill = form.querySelectorAll('[data-required="true"]');
    const showErrors = new _validation_validatonView__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const checkError = new _validation_validationModel__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const data = new FormData(form);

    let _errors = true;

    if (!checkError.checkEmpty(requiredFill)) {
      if (/[A-Za-zА-Яа-я]/.test(requiredFill[0].value)) {
        if (checkError.checkEmail(requiredFill[0])) {
          requiredFill[0].value = '';
          showErrors.showError(requiredFill, 'Email', 'top');
        } else {
          _errors = false;
        }
      } else {
        _errors = false;
      }
    } else {
      showErrors.showError(requiredFill, 'Empty', 'top');
    }

    if (!_errors) Object(_ajax__WEBPACK_IMPORTED_MODULE_3__["default"])('/backend-api/form/', data, showResult);
  });
};


/***/ }),

/***/ "./src/js/toggle-active/tg-active.config.js":
/*!**************************************************!*\
  !*** ./src/js/toggle-active/tg-active.config.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const config = {
	attr: 'data-id',
	open: 'open',
	toggle: 'active',
	close: 'close',
	wrapperOpen: 'open-wrap'
};

/* harmony default export */ __webpack_exports__["default"] = (config);


/***/ }),

/***/ "./src/js/toggle-active/tg-active.presenter.js":
/*!*****************************************************!*\
  !*** ./src/js/toggle-active/tg-active.presenter.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tg_active_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tg-active.config */ "./src/js/toggle-active/tg-active.config.js");
/* harmony import */ var _tg_active_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tg-active.view */ "./src/js/toggle-active/tg-active.view.js");
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animate */ "./src/js/animate.js");




class tgActivePresnter {
	constructor() {}
	_setListner(nodeList, event, one, animate) {
		[...nodeList].forEach(btn => {
			btn.addEventListener('click', evt => {
				const content = btn.getAttribute(_tg_active_config__WEBPACK_IMPORTED_MODULE_0__["default"].attr);
				const popup = new _tg_active_view__WEBPACK_IMPORTED_MODULE_1__["default"](
					document.querySelector(`#${content}`),
					_tg_active_config__WEBPACK_IMPORTED_MODULE_0__["default"].toggle,
					_tg_active_config__WEBPACK_IMPORTED_MODULE_0__["default"].wrapperOpen
				);
				if (animate) {
					Object(_animate__WEBPACK_IMPORTED_MODULE_2__["animateBl"])(
						document.querySelector(`#${content}`),
						document.querySelector(`#${content}`).offsetHeight + 20,
						250
					);
				}
				if (event === 'close') {
					document.querySelector(`#${content}`).removeAttribute('style');
				}
				popup[event](one);
			});
		});
	}

	makeListner(openOne, animate) {
		const allBtns = document.querySelectorAll(`.${_tg_active_config__WEBPACK_IMPORTED_MODULE_0__["default"].open}`);
		if (allBtns.length) {
			this._setListner(allBtns, 'open', openOne, animate);
		}
		const closeBtns = document.querySelectorAll(`.${_tg_active_config__WEBPACK_IMPORTED_MODULE_0__["default"].close}`);
		if (closeBtns.length) {
			this._setListner(closeBtns, 'close');
		}
	}
}
/* harmony default export */ __webpack_exports__["default"] = (tgActivePresnter);


/***/ }),

/***/ "./src/js/toggle-active/tg-active.view.js":
/*!************************************************!*\
  !*** ./src/js/toggle-active/tg-active.view.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class tgActiveView {
	constructor(node, selector, nodeList) {
		this._node = node;
		this._selector = selector;
		this._nodeList = document.querySelectorAll(`.${nodeList}`);
	}

	open(one) {
		if (one) {
			[...this._nodeList].forEach(item => {
				item.classList.remove(this._selector);
				item.removeAttribute('style');
			});
		}
		this._node.classList.add(this._selector);
	}
	close() {
		this._node.classList.remove(this._selector);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (tgActiveView);


/***/ }),

/***/ "./src/js/typewrite.js":
/*!*****************************!*\
  !*** ./src/js/typewrite.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (dataTextInner => {
  const dataText = dataTextInner;
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("h1.promo-main__typewriter").innerHTML =
        text.substring(0, i + 1) +
        '<span class="typecursor" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function() {
        StartTextAnimation(0);
      }, 20000);
    } else {
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function() {
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
      }
    }
  }
  // start the text animation
  StartTextAnimation(0);
});


/***/ }),

/***/ "./src/js/validation/validate.config.js":
/*!**********************************************!*\
  !*** ./src/js/validation/validate.config.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const config = {
  textEmpty: "Поле не заполнено!",
  textEmail: "Email введен некорректно",
  highlightInput: true
};

/* harmony default export */ __webpack_exports__["default"] = (config);


/***/ }),

/***/ "./src/js/validation/validationModel.js":
/*!**********************************************!*\
  !*** ./src/js/validation/validationModel.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class validation {
  checkEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email.value).toLowerCase()) ? false : [email];
  }
  checkEmpty(items) {
    const temp = [];
    if (items.length) {
      [...items].forEach(item => {
        if (!item.value) {
          temp.push(item);
        }
      });
      if (temp.length) {
        return temp;
      } else {
        return false;
      }
    } else {
      console.log("Передана пустота");
      return false;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (validation);


/***/ }),

/***/ "./src/js/validation/validationPresenter.js":
/*!**************************************************!*\
  !*** ./src/js/validation/validationPresenter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validationModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationModel */ "./src/js/validation/validationModel.js");
/* harmony import */ var _validatonView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validatonView */ "./src/js/validation/validatonView.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ajax */ "./src/js/ajax/index.js");




class validationPresenter {
  checkForm(form) {
    const requiredFill = form.querySelectorAll('[data-required="true"]');
    const emailInput = form.querySelector('[data-email="true"]');
    const checkError = new _validationModel__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const showErrors = new _validatonView__WEBPACK_IMPORTED_MODULE_1__["default"]();

    const showResult = (isSuccess) => {
      const resultItem = document.createElement('div');
      resultItem.classList.add('show-result-form');
      const parent = form.parentElement;
      if (isSuccess) {
        resultItem.innerHTML =
          '<svg class="svg__fill"><use xlink:href="/img/sprite.svg#form-succ"></use></svg>Ваше сообщение успешно отправлено!';
      } else {
        resultItem.innerHTML =
          '<svg class="svg__fill err-svg"><use xlink:href="/img/sprite.svg#form-err"></use></svg>Произошла ошибка!';
      }
      form.classList.add('hidden-form');

      parent.appendChild(resultItem);
      setTimeout(() => {
        form.parentElement.parentElement.classList.remove('active');
        form.classList.remove('hidden-form');
        form.parentElement.removeAttribute('style');
        parent.removeChild(resultItem);

        document.body.removeAttribute('style');
        // Clear Inputs
        form.reset();
        // Clear label
        const allLabel = form.querySelectorAll('.feedback__label-text');
        if (allLabel.length) {
          [...allLabel].forEach((item) => {
            item.classList.remove('hide');
          });
        }
      }, 1000);
    };

    let _tenmErr = true;

    if (requiredFill.length) {
      if (!showErrors.showError(checkError.checkEmpty(requiredFill), 'Empty')) {
        if (!showErrors.showError(checkError.checkEmail(emailInput), 'Email')) {
          _tenmErr = false;
        }
      }

      if (!_tenmErr) {
        const data = new FormData(form);
        Object(_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])('/backend-api/form/', data, showResult);
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (validationPresenter);


/***/ }),

/***/ "./src/js/validation/validatonView.js":
/*!********************************************!*\
  !*** ./src/js/validation/validatonView.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.config */ "./src/js/validation/validate.config.js");


const _keyupInner = evt => {
	const item = evt.target;
	if (item.value) {
		if (item.classList.contains('error-input')) {
			item.classList.remove('error-input');
		}
	}
	item.removeEventListener('keyup', _keyupInner);
};

class validationView {
	showError(items, type, position) {
		if (items) {
			[...items].forEach((item, index) => {
				const parent = item.parentElement;
				//Set focus first error
				if (index === 0) {
					item.focus();
				}
				//Check highlightInput
				if (_validate_config__WEBPACK_IMPORTED_MODULE_0__["default"].highlightInput) {
					item.classList.add('error-input');
				}

				item.addEventListener('keyup', _keyupInner);

				//Create Hint
				const divError = document.createElement('div');
				console.log(`text${type}`);
				divError.innerHTML = _validate_config__WEBPACK_IMPORTED_MODULE_0__["default"][`text${type}`];
				divError.classList.add('hint-error');
				if (position) {
					divError.classList.add(position);
				}
				//Add hint
				if (!parent.querySelector('.hint-error')) {
					parent.appendChild(divError);
				}

				if (_validate_config__WEBPACK_IMPORTED_MODULE_0__["default"].highlightInput) {
					item.classList.add('error-input');
				}

				//Remove hint
				setTimeout(() => {
					if (parent.querySelector('.hint-error')) {
						try {
							parent.removeChild(divError);
						} catch (e) {
							console.warn('Воу, слишком часто!!!');
						}
					}
				}, 1700);
			});
			return true;
		} else {
			return false;
		}
	}
}

/* harmony default export */ __webpack_exports__["default"] = (validationView);


/***/ })

/******/ });
//# sourceMappingURL=main.js.map
