var _scroller;
_scroller = function() { // scroller
    return {
        speed: 10,
        direct: -1,
        position: 0,
        t: null,
        init: function() {
            var el;
            el = document.getElementById('scroller_container');
            _scroller.addEvent(el, 'mousewheel', _scroller.wheel);
            _scroller.addEvent(el, 'DOMMouseScroll', _scroller.wheel);

            _scroller.timer(_scroller.direct);
        },
        wheel: function(e) {
            _scroller.stop();
            e = e ? e : window.event;
            /*var wheelElem = e.target ? e.target : e.srcElement;*/
            var wheelData = e.detail ? e.detail * -1 : e.wheelDelta / 40;
            if (Math.abs(wheelData) > 100) {
                wheelData = Math.round(wheelData / 100);
            }
            //_scroller.scroll(wheelData*10);
            _scroller.direct = wheelData > 0 ? 1 : -1;
            _scroller.timer(_scroller.direct);
            if (window.event) {
                e.cancelBubble = true;
                e.returnValue = false;
                e.cancel = true;
            }
            if (e.stopPropagation && e.preventDefault) {
                e.stopPropagation();
                e.preventDefault();
            }
            return false;
        },
        scroll: function(wheel) {
            var el = document.getElementById('scroller_container').firstElementChild;
            var o, oi, width;
            _scroller.position += wheel;
            if (wheel > 0) {
                if (_scroller.position >= 0) {
                    o = el;
                    oi = o.lastElementChild;
                    width = oi.firstElementChild.clientWidth;
                    o.insertBefore(oi, o.firstElementChild);
                    _scroller.position -= width;
                }
            }
            else {
                o = el; //.firstElementChild; 
                oi = o.firstElementChild;
                width = oi.firstElementChild.clientWidth;
                if (_scroller.position < -width) {
                    o.appendChild(oi);
                    _scroller.position += width;
                }
            }
            el.style.left = _scroller.position + 'px';
        },
        timer: function(wheel) {
            _scroller.stop();
            _scroller.t = setInterval("_scroller.scroll(" + wheel + ");", _scroller.speed);
        },
        stop: function() {
            if (_scroller.t != null) {
                clearInterval(_scroller.t);
                _scroller.t = null;
            }
        },
        addEvent: function(el, evType, fn, useCapture) {
            if (el.addEventListener) {
                el.addEventListener(evType, fn, useCapture);
            }
            else if (el.attachEvent) {
                var r = el.attachEvent('on' + evType, fn);
            }
            else el['on' + evType] = fn;
        }
    };
}();
/*if(!document.funcDomReady)document.funcDomReady=function(){_scroller.init()};
else onDomReady(_scroller.init);*/
window.onload = function() {
    setTimeout(_scroller.init, 100);
};
