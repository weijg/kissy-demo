KISSY.add("demo/base",function(e,s,a){var n=e.all,d=null,m=n("#J_Tips"),t=n("#J_List"),c=n("#J_Code"),r=n("#J_Method"),o=n("#J_Config"),i=function(){this._bind()};return i._data={},i.prototype._set=function(e,s){i._data[e]=s},i.prototype._get=function(e){return i._data[e]},i.prototype._bind=function(){var s=this;s.el&&s.events&&e.each(s.events,function(e,a){if(a&&e&&~a.indexOf(" ")){var d=a.replace(" ","^").split("^"),m=d[0],t=d[1];n(s.el).delegate(m,t,s[e],s)}})},i.prototype._ajax=function(e,s,n,d){var m=e.attr("id"),t=e.one("i"),c=t.attr("class");e.removeAttr("id"),e.addClass("disabled"),t.removeAttr("class"),t.addClass("icon-refresh icon-spin"),a.post(s,n,function(s){e.attr("id",m),e.removeClass("disabled"),t.removeAttr("class"),t.addClass(c),d(s)})},i.prototype._tips=function(e,s){d&&clearTimeout(d),e?m.removeClass("error"):m.addClass("error"),m.html(s).slideDown(.1),d=setTimeout(function(){m.html("").slideUp(.1)},1e3)},i.prototype._render=function(e){switch(e){case"list":t.show(),c.hide(),r.show(),o.hide();break;case"code":t.hide(),c.show(),r.hide(),o.show()}},i.prototype._makeQueryId=function(){return this._get("module")+"."+this._get("method")},i},{requires:["node","ajax"]});