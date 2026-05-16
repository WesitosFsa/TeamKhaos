import { useEffect, useRef } from 'react';

const StarsOrbit = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // --- Provided JS Logic Adapted for React ---
    let name, src, copy, clone, copyIsArray;
    var extend = (function() {
      var copyIsArray,
        toString = Object.prototype.toString,
        hasOwn = Object.prototype.hasOwnProperty;

      const class2type = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Object]': 'object'
      };

      const type = function(obj: any) {
        return obj == null ? String(obj) : class2type[toString.call(obj) as keyof typeof class2type] || "object";
      };

      const isWindow = function(obj: any) {
        return obj && typeof obj === "object" && "setInterval" in obj;
      };

      const isArray = Array.isArray || function(obj: any) {
        return type(obj) === "array";
      };

      const isPlainObject = function(obj: any) {
        if (!obj || type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
          return false;
        }
        if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
          return false;
        }
        var key;
        for (key in obj) {}
        return key === undefined || hasOwn.call(obj, key);
      };

      const extend = function(deep: any, target: any, options: any): any {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) { continue; }
          if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && isPlainObject(src) ? src : {};
            }
            target[name] = extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
        return target;
      };
      return extend;
    })();

    (function(global: any) {
      "use strict";
      function initialize(this: any, method: any) {
        if (method.parent instanceof Function) {
          initialize.apply(this, [method.parent]);
          this.super = cloneCopy(this, superCopy(this, this.constructor));
        }
        method.apply(this, arguments);
      }
      function cloneCopy(from: any, to: any) {
        for (var x in from) {
          if (x !== "super" && from[x] instanceof Function && !(from[x].prototype instanceof Class)) {
            to[x] = from[x].super || superCopy(from, from[x]);
          }
        }
        return to;
      }
      function superCopy(scope: any, method: any) {
        var scopeSuper = scope.super;
        return method.super = function() {
          scope.super = scopeSuper;
          return method.apply(scope, arguments);
        };
      }
      global.Class = function() {};
      global.Class.extend = function ext(this: any, to: any) {
        function child(this: any) {
          if (initialize !== arguments[0]) {
            initialize.apply(this, [to]);
            cloneCopy(this, this);
            this.constructor.apply(this, arguments);
            if (this.initializer instanceof Function) this.initializer.apply(this);
          }
        }
        child.prototype = new this(initialize);
        child.prototype.constructor = child;
        child.toString = function() { return to.toString() };
        child.extend = function(target: any) { target.parent = to; return ext.apply(child, arguments); };
        return child;
      };
      global.Class = global.Class.extend(function() { this.constructor = function() {} });
    })(window as any);

    function getTangentPoint(circleCentrePoint: any, radius: any, outPoint: any) {
      var dx = circleCentrePoint.x - outPoint.x;
      var dy = circleCentrePoint.y - outPoint.y;
      var r1 = Math.atan2(dy, dx);
      var d1 = Math.sqrt(dx * dx + dy * dy);
      var r2 = Math.asin(radius / d1);
      var r3 = r1 - r2;
      var r4 = r3 - Math.PI / 2;
      var x1 = radius * Math.cos(r4);
      var y1 = radius * Math.sin(r4);
      var r5 = Math.PI / 2 - r1 - r2;
      var r6 = -r5;
      var x2 = radius * Math.cos(r6);
      var y2 = radius * Math.sin(r6);
      return ({
        point1: { x: circleCentrePoint.x + x1, y: circleCentrePoint.y + y1 },
        point2: { x: circleCentrePoint.x - x2, y: circleCentrePoint.y - y2 }
      });
    }

    const cvsWidth = window.innerWidth;
    const cvsHeight = window.innerHeight;
    canvas.width = cvsWidth;
    canvas.height = cvsHeight;
    const ctx = canvas.getContext('2d')!;

    const mcvs = document.createElement('canvas');
    mcvs.width = cvsWidth;
    mcvs.height = cvsHeight;
    const mctx = mcvs.getContext('2d')!;

    const time: any = {
      mctx: ctx,
      mcvs: mcvs,
      ctx: mctx,
      last: (new Date()).getTime(),
      ani: 1,
      timeBodys: [],
      add: function(timeBody: any) { time.timeBodys.push(timeBody); },
      remove: function(timeBody: any) {
        var index = time.timeBodys.indexOf(timeBody);
        if (index !== -1) time.timeBodys.splice(index, 1);
      },
      clock: function() {
        var now = (new Date()).getTime();
        const detal = (now - time.last) / 1000;
        time.last = now;
        time.ctx.clearRect(0, 0, canvas.width, canvas.height);
        time.mctx.clearRect(0, 0, canvas.width, canvas.height);
        time.timeBodys.forEach(function(timeBody: any) {
          time.ctx.save();
          timeBody.clock(detal);
          time.ctx.restore();
        });
        time.mctx.drawImage(mcvs, 0, 0);
        time.ani = window.requestAnimationFrame(time.clock);
      }
    };
    time.clock();

    const offCvsPool = {
      offCvses: [] as HTMLCanvasElement[],
      getCvs: function() {
        var cvs;
        if (offCvsPool.offCvses.length) cvs = offCvsPool.offCvses.pop();
        else cvs = document.createElement('canvas');
        cvs.width = cvs.height = 0;
        return cvs;
      },
      removeCvs: function(cvs: any) { offCvsPool.offCvses.push(cvs); }
    };

    const Class = (window as any).Class;
    const AniTask = Class.extend(function(this: any) {
      this.constructor = function(time: any) { this.time = time; this.offCvs = offCvsPool.getCvs(); };
      this.setNext = function(task: any) { this.nextTask = task; };
      this.next = function() { if (this.nextTask) this.nextTask.start(); };
      this.clock = function(detal: any) {};
      this.start = function() { this.time.add(this); };
      this.finish = function() {
        var that = this;
        setTimeout(function() { offCvsPool.removeCvs(that.offCvs); that.time.remove(that); }, 0);
      };
    });

    const AniLine = AniTask.extend(function(this: any) {
      var defaults = { lineWeight: 6, weightDecay: 0.06, initAlpha: 0, finalAlpha: 0.3, startPos: { x: 0, y: 0 }, endPos: { x: 0, y: 0 }, initColor: 'rgba(255,0,0)', finalColor: 'rgba(255,0,0)', initV: 20, finalV: 20 };
      this.constructor = function(time: any, options: any) {
        this.super(time); this.options = extend({}, defaults, options); this.dx = this.options.endPos.x - this.options.startPos.x;
        this.dy = this.options.endPos.y - this.options.startPos.y; this.disPass = 0; this.totalDis = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
        this.angle = Math.atan2(this.dy, this.dx); this.lineWidth = parseInt(this.options.lineWeight / this.options.weightDecay) - 1;
        this.currentV = this.options.initV; this.arrived = false;
      };
      this.clock = function(detal: any) {
        var that = this; this.disPass = this.disPass + this.currentV * detal;
        var progress = this.disPass / this.totalDis; progress = progress < 1 ? progress : 1;
        this.currentAlpha = this.options.initAlpha + (this.options.finalAlpha - this.options.initAlpha) * progress;
        this.currentV = this.options.initV + (this.options.finalV - this.options.initV) * progress;
        this.currentColor = this.options.initColor.replace(/(\d+)\s*\,\s*(\d+)\s*\,\s*(\d+)/g, function(_: any, ...args: any) {
          var finalColor = that.options.finalColor.match(/\d+/g).map((c: any) => parseInt(c));
          var color = []; for (var i = 0; i < 3; i++) color.push(parseInt(args[i]) + (finalColor[i] - parseInt(args[i])) * progress);
          color = color.map((v: any) => parseInt(v)); color.push('$'); return color.join(',');
        });
        this.draw();
        if (!this.arrived && this.disPass >= this.totalDis) { this.next(); this.arrived = true; }
        if (this.disPass - this.lineWidth >= this.totalDis) { this.finish(); return; }
      };
      this.draw = function() {
        var drawing = this.disPass, lineWeight = this.options.lineWeight, opacityDecay = 1 / this.lineWidth, ratio = drawing / this.totalDis;
        var drawX = this.options.startPos.x + this.dx * ratio, drawY = this.options.startPos.y + this.dy * ratio;
        if (!this.arrived) {
          this.time.ctx.globalAlpha = this.currentAlpha;
          var grd = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, 100);
          grd.addColorStop(0, this.currentColor.replace('$', '0.6')); grd.addColorStop(1, this.currentColor.replace('$', '0'));
          this.time.ctx.fillStyle = grd; this.time.ctx.beginPath(); this.time.ctx.arc(drawX, drawY, 100, 0, Math.PI * 2); this.time.ctx.fill();
        }
        this.time.ctx.globalAlpha = this.currentAlpha;
        for (var i = 0; i < this.lineWidth; i++) {
          drawing--; lineWeight -= this.options.weightDecay; if (drawing >= this.totalDis) continue;
          ratio = drawing / this.totalDis; drawX = this.options.startPos.x + this.dx * ratio; drawY = this.options.startPos.y + this.dy * ratio;
          this.time.ctx.fillStyle = this.currentColor.replace('$', (1 - opacityDecay * i).toString());
          this.time.ctx.beginPath(); this.time.ctx.arc(drawX, drawY, lineWeight / 2, 0, Math.PI * 2); this.time.ctx.fill();
          if (drawing <= 0) break;
        }
      };
    });

    const AniArc = AniTask.extend(function(this: any) {
      var defaults = { lineWeight: 6, weightDecay: 0.06, circleCentre: { x: 0, y: 0 }, radius: 100, startAngle: 2 * Math.PI, endAngle: Math.PI, initAlpha: 0, finalAlpha: 0.3, initColor: 'rgba(255,0,0)', finalColor: 'rgba(255,0,0)', initV: 20, finalV: 20 };
      this.constructor = function(time: any, options: any) {
        this.super(time); this.options = extend({}, defaults, options); this.disPass = 0;
        this.totalDis = Math.abs(this.options.startAngle - this.options.endAngle) * this.options.radius;
        this.counterclockwise = this.options.startAngle < this.options.endAngle ? false : true;
        this.lineWidth = parseInt(this.options.lineWeight / this.options.weightDecay) - 1;
        this.currentV = this.options.initV; this.arrived = false;
      };
      this.clock = function(detal: any) {
        var that = this; this.disPass = this.disPass + this.currentV * detal;
        var progress = (this.disPass - this.lineWidth) / (this.totalDis - this.lineWidth); progress = progress < 1 ? (progress < 0 ? 0 : progress) : 1;
        this.currentAlpha = this.options.initAlpha + (this.options.finalAlpha - this.options.initAlpha) * progress;
        this.currentV = this.options.initV + (this.options.finalV - this.options.initV) * progress;
        this.currentColor = this.options.initColor.replace(/(\d+)\s*\,\s*(\d+)\s*\,\s*(\d+)/g, function(_: any, ...args: any) {
          var finalColor = that.options.finalColor.match(/\d+/g).map((c: any) => parseInt(c));
          var color = []; for (var i = 0; i < 3; i++) color.push(parseInt(args[i]) + (finalColor[i] - parseInt(args[i])) * progress);
          color = color.map((v: any) => parseInt(v)); color.push('$'); return color.join(',');
        });
        this.draw();
        if (!this.arrived && this.disPass >= this.totalDis) { this.next(); this.arrived = true; }
        if (this.disPass - this.lineWidth >= this.totalDis) { this.finish(); return; }
      };
      this.draw = function() {
        var drawing = this.disPass, dir = this.counterclockwise ? -1 : 1, angle = dir * drawing / this.options.radius + this.options.startAngle;
        var drawX = this.options.circleCentre.x + Math.cos(angle) * this.options.radius, drawY = this.options.circleCentre.y + Math.sin(angle) * this.options.radius;
        this.time.ctx.globalAlpha = 0.05; this.time.ctx.strokeStyle = this.currentColor.replace('$', '1');
        this.time.ctx.beginPath(); this.time.ctx.arc(this.options.circleCentre.x, this.options.circleCentre.y, this.options.radius, 0, Math.PI * 2); this.time.ctx.stroke();
        if (!this.arrived) {
          this.time.ctx.globalAlpha = this.currentAlpha;
          var grd = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, 100);
          grd.addColorStop(0, this.currentColor.replace('$', '0.6')); grd.addColorStop(1, this.currentColor.replace('$', '0'));
          this.time.ctx.fillStyle = grd; this.time.ctx.beginPath(); this.time.ctx.arc(drawX, drawY, 100, 0, Math.PI * 2); this.time.ctx.fill();
        }
        this.time.ctx.globalAlpha = this.currentAlpha;
        for (var i = 0; i < this.lineWidth; i++) {
          angle = dir * drawing / this.options.radius + this.options.startAngle;
          if (drawing < this.totalDis) {
            drawX = this.options.circleCentre.x + Math.cos(angle) * this.options.radius; drawY = this.options.circleCentre.y + Math.sin(angle) * this.options.radius;
            this.time.ctx.fillStyle = this.currentColor.replace('$', (1 - (1 / this.lineWidth) * i).toString());
            this.time.ctx.beginPath(); this.time.ctx.arc(drawX, drawY, (this.options.lineWeight - (i * this.options.weightDecay)) / 2, 0, Math.PI * 2); this.time.ctx.fill();
          }
          drawing--; if (drawing <= 0) break;
        }
      };
    });

    const AniCircle = AniTask.extend(function(this: any) {
      var defaults = { pos: { x: 0, y: 0 }, color: 'rgba(210, 230, 250)' };
      this.constructor = function(time: any, options: any) { this.super(time); this.options = extend({}, defaults, options); this.disPass = 0; this.totalDis = 30; this.arrived = false; };
      this.clock = function() {
        this.disPass += 0.5; var alpha = (1 - (this.disPass / this.totalDis)) / 2;
        this.time.ctx.globalAlpha = alpha > 0 ? alpha : 0;
        this.time.ctx.strokeStyle = this.options.color.replace(')', ', 1)'); this.time.ctx.fillStyle = this.options.color.replace(')', ', 1)');
        this.time.ctx.beginPath(); this.time.ctx.arc(this.options.pos.x, this.options.pos.y, this.disPass / 2, 0, Math.PI * 2); this.time.ctx.stroke();
        this.time.ctx.beginPath(); this.time.ctx.arc(this.options.pos.x, this.options.pos.y, this.disPass / 2.4, 0, Math.PI * 2); this.time.ctx.fill();
        if (this.disPass > this.totalDis) { this.finish(); return; }
        if (!this.arrived && this.disPass > 10) { this.arrived = true; this.next(); }
      };
    });

    function createMovingStar(time: any, startPos: any, endPos: any, circleCentre: any, radius: any, options: any) {
      const defaults = { lineWeight: 6, laps: 0, weightDecay: 0.06, counterclockwise: false, initColor: 'rgba(255,0,0)', finalColor: 'rgba(255,0,0)', line1: { initAlpha: 0, finalAlpha: 0.5, initV: 200, finalV: 200 }, arc: { radius: 200, initAlpha: 0.5, finalAlpha: 0.5, initV: 200, finalV: 400 }, line2: { initAlpha: 0.5, finalAlpha: 0, initV: 400, finalV: 400 } };
      options = extend({}, defaults, options);
      const stPoints = getTangentPoint(circleCentre, radius, startPos);
      const etPoints = getTangentPoint(circleCentre, radius, endPos);
      const enterPoint = getEnterPoint(startPos, stPoints.point1, stPoints.point2, circleCentre, options.counterclockwise);
      const outPoint = getEnterPoint(endPos, etPoints.point1, etPoints.point2, circleCentre, !options.counterclockwise);
      let startAngle = Math.atan2(enterPoint.y - circleCentre.y, enterPoint.x - circleCentre.x);
      let endAngle = Math.atan2(outPoint.y - circleCentre.y, outPoint.x - circleCentre.x);
      if (options.counterclockwise) { if (endAngle > startAngle) startAngle += 2 * Math.PI; } else { if (endAngle < startAngle) endAngle += 2 * Math.PI; }
      endAngle += options.laps * 2 * Math.PI * (options.counterclockwise ? -1 : 1);
      const circle1 = new AniCircle(time, { pos: startPos, color: options.initColor });
      const circle2 = new AniCircle(time, { pos: endPos, color: options.finalColor });
      const line1 = new AniLine(time, extend({}, options.line1, { 'startPos': startPos, 'endPos': enterPoint, 'initColor': options.initColor, 'finalColor': options.initColor, 'lineWeight': options.lineWeight, 'weightDecay': options.weightDecay }));
      const arc = new AniArc(time, extend({}, options.arc, { 'circleCentre': circleCentre, 'startAngle': startAngle, 'endAngle': endAngle, 'radius': radius, 'initColor': options.initColor, 'finalColor': options.finalColor, 'lineWeight': options.lineWeight, 'weightDecay': options.weightDecay }));
      const line2 = new AniLine(time, extend({}, options.line2, { 'startPos': outPoint, 'endPos': endPos, 'initColor': options.finalColor, 'finalColor': options.finalColor, 'lineWeight': options.lineWeight, 'weightDecay': options.weightDecay }));
      circle1.setNext(line1); line1.setNext(arc); arc.setNext(line2); line2.setNext(circle2); circle1.start();
      function getEnterPoint(startPos: any, tPoint1: any, tPoint2: any, circleCentre: any, counterclockwise: any) {
        let angle1 = Math.atan2(tPoint1.y - circleCentre.y, tPoint1.x - circleCentre.x);
        let angle2 = Math.atan2(tPoint2.y - circleCentre.y, tPoint2.x - circleCentre.x);
        let sAngle = Math.atan2(startPos.y - circleCentre.y, startPos.x - circleCentre.x);
        angle1 += (angle1 < 0 ? Math.PI * 2 : 0); angle2 += (angle2 < 0 ? Math.PI * 2 : 0); sAngle += (sAngle < 0 ? Math.PI * 2 : 0);
        if (sAngle > Math.max(angle1, angle2)) { if (angle1 > angle2) angle2 += 2 * Math.PI; else angle1 += 2 * Math.PI; }
        else if (sAngle < Math.min(angle1, angle2)) { sAngle += 2 * Math.PI; if (angle1 > angle2) angle2 += 2 * Math.PI; else angle1 += 2 * Math.PI; }
        return counterclockwise ? (angle1 > angle2 ? tPoint2 : tPoint1) : (angle1 > angle2 ? tPoint1 : tPoint2);
      }
    }

    function hehe() {
      const initColor = 'rgba(' + parseInt((Math.random() * 255).toString()) + ',' + parseInt((Math.random() * 255).toString()) + ',' + parseInt((Math.random() * 255).toString()) + ')';
      const finalColor = 'rgba(' + parseInt((Math.random() * 255).toString()) + ',' + parseInt((Math.random() * 255).toString()) + ',' + parseInt((Math.random() * 255).toString()) + ')';
      const lineWeight = parseInt((Math.random() * 3 + 3).toString());
      const weightDecay = lineWeight / 150;
      const circleCentre = { x: Math.random() * (canvas.width - 200) + 100, y: Math.random() * (canvas.height - 200) + 100 };
      const radius = parseInt(((Math.random() * 200 + 100) / 20).toString()) * 20;
      const startPos = { x: parseInt((circleCentre.x - radius - Math.random() * 300).toString()), y: parseInt((Math.random() * 500).toString()) };
      const endPos = { x: parseInt((circleCentre.x + radius + Math.random() * 300).toString()), y: parseInt((Math.random() * 500).toString()) };
      createMovingStar(time, startPos, endPos, circleCentre, radius, {
        'counterclockwise': Math.random() > 0.5 ? false : true,
        'laps': parseInt((Math.random() * 2).toString()),
        'initColor': initColor,
        'finalColor': finalColor,
        'lineWeight': lineWeight,
        'weightDecay': weightDecay
      });
      setTimeout(hehe, parseInt((Math.random() * 5000).toString()));
    }
    hehe();

    return () => {
      window.cancelAnimationFrame(time.ani);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default StarsOrbit;
