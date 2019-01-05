(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxObjectAccessor = nx.declare('nx.ObjectAccessor', {
    methods: {
      init: function(inTarget) {
        this.target = inTarget || nx.global;
      },
      set: function(inKey, inValue) {
        this.target[inKey] = inValue;
      },
      get: function(inKey) {
        return this.target[inKey];
      },
      remove: function(inKey) {
        delete this.target[inKey];
      },
      clear: function() {
        this.target = {};
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxObjectAccessor;
  }
})();
