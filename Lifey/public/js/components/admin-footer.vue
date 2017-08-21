<style>
footer {
position: fixed;
bottom: 0;
width: 100%;
height: 300px;
background: none;
}

footer .mui-container-fluid
{
    position: relative;
  bottom:0;
  height: 100%;
  background-color: white;
  opacity:0.95;
  color:black;
  font-size:10px;
  line-height:0.4;
  padding-top:10px;
  
  -webkit-transition: bottom 1s;
  -moz-transition: bottom 1s;
  -o-transition: bottom 1s;
  transition: bottom 1s;
}

footer.hidden .mui-container-fluid { bottom: -64px; }

#footer-grip button {
    border-radius:0;
}

footer #footer-grip {}

footer #footer-grip .grip-tab {
    width: 18px;
    height: 24px;
    background-color: #ccc;
    color: white;
    padding: 6px 4px 0px 5px;
    font-size: 16px;
}

.handle {
   background: #ccc;
   height:2px;
   cursor: ns-resize;
}

footer .mui-tabs__bar {
    background-color: #eee;
}

footer .mui-tabs__bar > li > a {
    font-size:10px;
    height: 24px;
    line-height: 24px;
    text-decoration:none;
}

footer .mui-tabs__bar > li.mui--is-active {
    border: none;
}

footer .mui-tabs__bar > li.mui--is-active > a {
    background-color:#ccc;
    color: black;
}

footer a {
  color: #fff;
  text-decoration: underline;
}
</style>

<template>
    <footer>
        <div id="footer-grip">
            <div class="grip-tab"><span class="icon-embed icon-rotate-90"></span></div>
            <div class="handle ui-resizable-handle ui-resizable-n mui--text-center"></div>
        </div>
        <ul class="mui-tabs__bar"></ul>
        <div class="mui-container-fluid">
            <div id="footer-content"></div>
        </div>
    </footer>
</template>

<script>
    define(["Vue"], function (Vue) {
        Vue.component("admin-footer", {
            template: template,
            data: function () {
                return {};
            },
            updated: function () {

                /*
                var _socket;

                function setupMessageHandler(name) {
                    _socket.on(name, function (msg) {
                        $("#footer-content #pane-sockets-" + name).append('<p>' + JSON.stringify(msg) + '</p>');
                    });
                }

                function setupSocketMessages(data) {
                    for (var i = 0; i < data.length; i++) {
                        setupMessageHandler(data[i]);
                    }
                }

                function setupSocketTabs(data) {

                    var footer = $('#footer-content');
                    footer.empty();
                    var ul = $('#footer ul.mui-tabs__bar');
                    ul.empty();

                    for (var i = 0; i < data.length; i++) {
                        var name = data[i];
                        if (i === 0) {
                            ul.append('<li class="mui--is-active"><a data-mui-toggle="tab" data-mui-controls="pane-sockets-' + name + '">' + name + '</a></li>');
                            footer.append('<div class="mui-tabs__pane mui--is-active" id="pane-sockets-' + name + '"></div>');
                        } else {
                            ul.append('<li><a data-mui-toggle="tab" data-mui-controls="pane-sockets-' + name + '">' + name + '</a></li>');
                            footer.append('<div class="mui-tabs__pane" id="pane-sockets-' + name + '"></div>');
                        }
                    }
                }

                _socket.on('sockets', function (data) {
                    setupSocketTabs(data);
                    setupSocketMessages(data);
                });
                _socket.emit('get-sockets');
                */

                $("footer").resizable({
                    handles: { 'n': '#footer-grip' }
                });
            }
        });
    });
</script>
