function $(selector) {
  if (selector) {
    return document.querySelector(selector);
  }else {
    return document.body;
  }
}
Node.prototype.$ = function (selector) {
  return this.querySelector(selector);
};
Node.prototype.clear = function () {
  while (this.childNodes.length > 0) {
    this.childNodes[0].remove();
  }
  return this;
};
Node.prototype.text = function (txt) {
  this.clear().append(document.createTextNode(txt));
  return this;
};
String.prototype.html = function (attr) {
  var div = document.createElement(this);
  return div.set(attr);
};
Element.prototype.set = function (attributes) {
  for (var attr in attributes) {
    if (attributes.hasOwnProperty(attr)) {
      this.setAttribute(attr, attributes[attr]);
    }
  }
  return this;
};
Element.prototype.classes = function (classes) {
  for (var i = 0; i < arguments.length; i++) {
    this.classList.add(arguments[i])
  }
  return this;
};
Element.prototype.removeClass = function (classes) {
  for (var i = 0; i < arguments.length; i++) {
    this.classList.remove(arguments[i])
  }
  return this;
};
Element.prototype.hasClass = function (_class) {
  return this.classList.contains(_class);
};
EventTarget.prototype.on = function (listeners) {
  for (var e in listeners) {
    if (listeners.hasOwnProperty(e)) {
      this.addEventListener(e, listeners[e]);
    }
  }
  return this;
};
