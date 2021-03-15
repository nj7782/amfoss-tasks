<!DOCTYPE html>
<!-- saved from url=(0025)https://js.do/code/574203 -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!--<base href="//js.do/">--><base href=".">

<title>Online Javascript Editor</title>


<meta name="description" content="Online JavaScript Editor - write and run your javascript code inside this page.">
<link rel="stylesheet" href="./jitinspammer_files/bootstrap.css">
<!--
<link href="bootstrap-extra/theme-white.css" rel="stylesheet">
-->
<link href="./jitinspammer_files/bootstrap-responsive.css" rel="stylesheet">

<style>

.beauty-input {

  -webkit-border-radius: 3px;
     -moz-border-radius: 3px;
          border-radius: 3px;

  background-color: #ffffff;
  border: 1px solid #cccccc;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
     -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
     -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
       -o-transition: border linear 0.2s, box-shadow linear 0.2s;
          transition: border linear 0.2s, box-shadow linear 0.2s;


}

.top_label {
 z-index: 1;
 position: absolute;
 top: 0px;
 right: 0px;
 opacity: 0.5;
}

.light_gray {
  color=#b0b0b0
}

</style>


<style></style></head><body style="cursor: default;">

<div id="header" style="
margin-left: 1em;
margin-right: 1em;
">

<p class="pull-right" id="top_user_info" style="display: none;">
Welcome <b><span id="top_user_info_username"></span></b>
| 
<a href="javascript:;" onclick="logout()">Logout</a>
</p>

<p class="pull-right" id="top_login_info">
<a href="javascript:;" onclick="login_show()">login</a>
or 
<a href="javascript:;" onclick="signup_show()">register</a> (free!)
</p>



<h1 style="color: #c0c0c0; font-size: 2em; margin-bottom:0; line-height: 1em;">
<span style="color: #f49040;">JS.do</span> <span style="font-size: 0.8em">Online JavaScript Editor
</span></h1>
<i style="font-size: 0.88em">"Edit your code online. Simple, light and fast!"</i>

<div class="alert fade in alert-success" id="alert_message" style="top: 30px; left: 0px; right: 0px; margin-left: auto; margin-right: auto; width: 50%; position: absolute; z-index: 21;"><a class="close" href="javascript:;" onclick="$(&#39;#alert_message&#39;).hide()">×</a>Your code has been stored in this new address: <a href="https://js.do/code/574203">https://js.do/code/574203</a></div>


<div style="margin-top: 12px;">
<table>
<tbody><tr>
</tr>
<tr>
 <td>
<span style="light_gray">Code address:</span>
https://js.do/<span id="js_username_uri">code</span>/</td>
 <td><input name="js_permalink" id="js_permalink" class="input-large"> 
</td>
 <td style="text-align: right">&nbsp; Description:</td>
 <td><input name="js_title" class="input-xlarge" id="js_title"></td>
</tr>
</tbody></table>

</div>



<div id="login_or_register" style="z-index: 20; top: 80px; position: absolute; background-color: white; border: 1px solid black; box-shadow: rgb(192, 192, 192) 0px 0px 10px; padding: 2em; left: 0px; right: 0px; margin-left: auto; margin-right: auto; max-width: 700px; display: none;">
<a class="close" href="javascript:;" onclick="$(&#39;#login_or_register&#39;).hide();lightbox(0)" id="close_login_popup">×</a>


<div id="login_show" style="vertical-align: top;">
<i class="icon-hand-right"></i>
<b>Login</b> to <b style="color: #d00000">save your code and edit it later</b> and manage <b style="color: #d00000;">your code collection</b>:<br>
<br><br>

<form class="form-inline" onsubmit="chklogin();return(false);">


&nbsp; &nbsp; 
Username: <input class="input-medium" type="text" id="login_user_username" name="username">
<br>
<br>
&nbsp; &nbsp; 
Password: <input class="input-medium" type="password" id="login_user_password" name="password">
<input type="submit" value="Login" class="btn btn-small btn-primary">

&nbsp;
&nbsp;
New to <b>js.do</b>? 
<a href="javascript:;" onclick="signup_show()"><b>Sign-up</b></a>, it's free!
</form>
</div> <!-- /login_show -->


<div id="signup_show" style="display: none;">
<form>
<b>JS.do - Register now to save and manage your JavaScript code:</b>
<br>
<br>
<br>
<table>
<tbody><tr>
 <td>Username:</td>
 <td><input type="text" id="signup_user_username"></td>
</tr>
<tr>
 <td>Password:</td>
 <td><input type="text" id="signup_user_password"></td>
</tr>
<tr>
 <td>Password (confirm):</td>
 <td><input type="text" id="signup_user_password_confirm"></td>
</tr>
<tr>
 <td>Email:</td>
 <td><input type="text" id="signup_user_email"></td>
</tr>
<tr>
 <td></td>
 <td><input type="button" value="Sign-up" onclick="signup()" class="btn btn-small btn-primary"></td>
</tr>
</tbody></table>


</form>
<br>
Already have an account ? <a href="javascript:;" onclick="login_show()">Sign-in</a>

</div> <!-- /signup_show -->

</div> <!-- /login_or_register -->


<div id="js_board" style="">

<div style="margin-top: 20px;
position: absolute; 
top: 89px;
right: 1em;
left: 1em;
">



<div class="pull-right">

<a href="javascript:;" class="btn xbtn-info btn-small" onclick="fullscreen(1); return(false);"><i class="icon-fullscreen"></i>&nbsp; Fullscreen</a>

<a href="javascript:;" class="btn xbtn-info btn-small" onclick="load_sample_code_list(); return(false);"><i class="icon-file"></i>&nbsp; Load code samples</a>
</div>




<a href="javascript:;" class="btn xbtn-info btn-small" onclick="run_code(); return(false);"><i class="icon-play"></i>&nbsp; Run code</a>
&nbsp;

<span id="save_button" style="display: none;">
<a href="javascript:;" class="btn xbtn-info btn-small" onclick="save_code(&#39;new&#39;); return(false);"><i class="icon-ok"></i>&nbsp; Save</a>
&nbsp;
</span>

<span id="save_update_buttons" style="">
<a href="javascript:;" class="btn xbtn-info btn-small" onclick="save_code(&#39;update&#39;); return(false);"><i class="icon-ok"></i>&nbsp; Save update</a>
&nbsp;

<a href="javascript:;" class="btn xbtn-info btn-small" onclick="save_code(&#39;new&#39;); return(false);"><i class="icon-ok-sign"></i>&nbsp; Save as a new js</a>
&nbsp;
</span>

<select onchange="add_framework(this.options[this.selectedIndex].value)" style="
 height: 26px;
 width: 144px;
">
<option value="">Add framework</option>
<!--
<option value='//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'>jQuery 1.11.1</option>
-->
<option value="//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js">jQuery 3.1.0</option>

<option value="&lt;link rel=&quot;stylesheet&quot; href=&quot;//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css&quot;&gt;">Bootstrap 3.2.0 (CSS)</option>
<option value="&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js&quot;&gt;&lt;/script&gt;">Bootstrap 3.2.0(JS)</option>

<option value="&lt;link rel=&quot;stylesheet&quot; href=&quot;/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css&quot;&gt;" cd="">Bootstrap 2.3.2 (CSS)</option>
<option value="&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js&quot;&gt;&lt;/script&gt;">Bootstrap 2.3.2 (JS)</option>

<option value="//cdnjs.cloudflare.com/ajax/libs/processing.js/1.4.1/processing-api.min.js">Processing.js</option>
<option value="//cdnjs.cloudflare.com/ajax/libs/three.js/r50/three.min.js">Three.js</option>
</select>



<span id="delete_code_button" style="">
&nbsp;
<a href="javascript:;" class="btn xbtn-info btn-small" onclick="delete_code($js.js_id); return(false);" style="color: #b00000"><i class="icon-trash"></i>&nbsp; Delete</a>
</span>



<a href="javascript:;" onclick="
 var ok = 0;
 if (myCodeMirror.isClean() == false) {
   ok = confirm(&#39;Your code was not saved. Do you want to start a new code?&#39;);
 } else {
   ok = 1;
 }
 if (ok==1) {
   var new_code = &#39;&lt;scr&#39;+&#39;ipt&gt;\n// Edit your script here\n\n&lt;/scr&#39;+&#39;ipt&gt;\n&lt;!-- edit your html here --&gt;\n&#39;;
   myCodeMirror.setValue(new_code);
   myCodeMirror.markClean(); // is saved and not edited
 }
" class="btn btn-small"><i class="icon-file"></i>Create new code</a>


<!--
<a href="javascript:;" class="btn xbtn-info btn-small" onClick="show_user_code_list(); return(false);"><i class="icon-file"></i>&nbsp; View code list from 
user_username
</a>
-->

</div> <!-- /run code, save... -->


<div id="protector" style="
display: none;
position: absolute;
top: 140px;
bottom: 60px;
right: 0;
left: 0;
opacity: 0;
z-index: 2;
">
</div>


<div id="js_code" style="
position: absolute; 
top: 140px;
bottom: 60px;
padding-right: 5px;
right: 50%;
left: 1em;
"><span class="label top_label" id="label_javascript" xonmouseover="reposition_label_on_scroll(&#39;js_code&#39;, &#39;label_javascript&#39;)">JavaScript</span>
<div class="CodeMirror cm-s-default beauty-input" style="height: 400px;"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 265px; left: 196.656px;"><textarea autocorrect="false" autocapitalize="false" spellcheck="false" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0"></textarea></div><div class="CodeMirror-vscrollbar" tabindex="-1" cm-not-content="true" style="bottom: 17px;"><div style="min-width: 1px; height: 0px;"></div></div><div class="CodeMirror-hscrollbar" tabindex="-1" cm-not-content="true" style="right: 0px; left: 30px; display: block;"><div style="height: 100%; min-height: 1px; width: 661px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true" style="height: 17px; width: 17px;"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 30px; margin-bottom: -17px; border-right-width: 13px; min-height: 288px; min-width: 661.281px; padding-right: 0px; padding-bottom: 17px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre>x</pre><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>1</div></div><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>14</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors" style=""><div class="CodeMirror-cursor" style="left: 165.656px; top: 260px; height: 20px;">&nbsp;</div></div><div class="CodeMirror-code" role="presentation" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">let i = 0 ;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">let message = "Hi"; </span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">let interval = 1  ; </span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">let count = 50 ; </span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">let timer = setInterval(function()</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">   {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span>document.getElementsByClassName('composer_rich_textarea')[0].innerHTML = message;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" class="cm-tab-wrap-hack" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span>$('button').trigger('mousedown');<span class="cm-tab" role="presentation" cm-text="	">   </span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">10</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span>i++;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">11</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span>if( i  == count )</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">12</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span>clearInterval(timer);</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">13</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">   } </span></pre></div><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: -30px; width: 30px;"></div><div class="CodeMirror-gutter-wrapper CodeMirror-activeline-gutter" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">14</div></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">, interval * 1000 ) ;</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 13px; width: 1px; border-bottom: 17px solid transparent; top: 288px;"></div><div class="CodeMirror-gutters" style="height: 318px; left: 0px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 29px;"></div></div></div></div></div>


<div id="col_resize" style="
position: absolute;
left: 50%;
right: 50%;
top: 140px;
bottom: 60px;
width: 10px;
margin-left: -5px;
cursor: col-resize;
z-index: 3;
text-align: center;
vertical-align: middle;
line-height: 300px;
color: #bbb;
text-shadow: 1px 0px #ddd;
">||</div>

<script type="text/javascript" async="" src="./jitinspammer_files/ga.js.download"></script><script type="text/javascript" src="./jitinspammer_files/jquery.js.download"></script>

<script>
$('#col_resize').on('mousedown mouseup mouseover', function(event) {
  event.preventDefault(); // avoid auto-select text from js editor
  if (event.type == 'mousedown') {
    $('#protector').css('display', ''); // allows mouse over result iframe
    var w = $(window).width();
    $(document).on('mousemove', function(event2) {
      var percent = (event2.pageX/w * 100);
      if (percent>95) {
        if (percent>97) { // if mouse out of browser, disable drag.
          disable_drag();
        }
        percent=95;
      } else if (percent < 5) {
        if (percent<3) { // if mouse out of browser, disable drag.
          disable_drag();
        }
        percent = 5;
      }
      $('#js_code').css("right", (100-percent)+'%');
      $('#col_resize').css("right", (100-percent)+'%');
      $('#col_resize').css("left", (percent)+'%');
      $('#results_area').css("left", (percent)+'%');
    });

  } else if (event.type == 'mouseup') {
    disable_drag();
  }
  function disable_drag() {
    $(document).off('mousemove');
    $('#protector').css('display', 'none');
  }

});
</script>

<div id="results_area" class="code_area_result" style="position: absolute; inset: 140px 1em 60px 50%; padding-left: 5px; opacity: 1;" onclick="fullscreen(0)">
<!-- also works as "exit from fullscreen" button -->
<span class="label top_label" id="label_result">Result</span>
<iframe id="result" class="beauty-input" style="height: 100%; width: 100%;" src="./jitinspammer_files/saved_resource.html"></iframe></div>



</div> <!-- /js_board -->



<div style="
display: none;
margin-bottom: 15px;
background-color: white;
padding: 1em;
border: 1px solid black;
" id="user_code_list"></div>


<div id="sample_code" style="
display: none;
padding: 1em;
border: 1px solid black;
background-color: white;
">
<b>Select sample code to view and run</b>
<br>
<br>
<table>
<tbody><tr>
 <td style="vertical-align: top;">
<b>Basic samples</b>
<ul>
<li><a href="javascript:;" onclick="run_code(&#39;samples/hello-world&#39;)">Hello world</a>
</li><li><a href="javascript:;" onclick="run_code(&#39;samples/calculator&#39;)">Calculator</a>
<!--
<li>Loop
<li>Conditional (if..then)
<li>Function
-->
</li><li><a href="javascript:;" onclick="run_code(&#39;samples/jquery&#39;)">jQuery</a>
</li></ul>
</td>
<td>&nbsp; &nbsp; &nbsp; &nbsp;</td>
<td style="vertical-align: top;">
<b>Graphics</b>
<ul>
<li><a href="javascript:;" onclick="run_code(&#39;samples/triangle&#39;)">Canvas Triangle</a>
</li><li><a href="javascript:;" onclick="run_code(&#39;samples/labyrinth&#39;)">Labyrinth</a>
</li><li><a href="javascript:;" onclick="run_code(&#39;samples/sombrero&#39;)">3D Sombrero equation</a>
</li></ul>
</td>
<td style="vertical-align: top;">
<b>JavaScript APIs</b>
<ul>
<li><a href="javascript:;" onclick="run_code(&#39;samples/twitter&#39;)">Twitter API</a>
</li><li><a href="javascript:;" onclick="run_code(&#39;samples/geolocation&#39;)">Geolocation API</a>
</li><li><a href="javascript:;" onclick="run_code(&#39;samples/webfonts&#39;)">Web Fonts</a>
</li></ul>
</td>
</tr>
</tbody></table>

</div> <!-- /sample_code -->

</div> <!-- /header -->

<link href="./jitinspammer_files/codemirror.css" rel="stylesheet">


<footer class="footer" style="
position: absolute;
bottom: 0px;
left: 1em;
right: 1em;
">


<span style="font-size: 0.8em; color: #606060;">created by <a href="https://twitter.com/rsiqueira" target="_blank">Rodrigo 
Siqueira</a></span>


<p class="pull-right">
<a href="https://js.do/">js.do</a> |
<a href="http://js.postbit.com/write-javascript-online.html">about</a> |
<a href="https://js.do/blog/">blog</a> |
<a href="https://bit.do/contact.php?layout=js.do">contact</a>

</p>

<span id="info_url_div" style="">
This code's address: <span id="js_url_link"><a href="https://js.do/code/574203">https://js.do/code/574203</a></span>
&nbsp; 
Author: <span id="js_username"><a href="https://js.do/"></a></span>
&nbsp;
Creation date: <span id="js_insert_date"></span>
</span>

<br><br>



</footer>


<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-756399-14']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

<script src="./jitinspammer_files/codemirror.js.download"></script>


<script type="text/javascript" src="./jitinspammer_files/default-source2.js.download"></script>
<script type="text/javascript" src="./jitinspammer_files/dump.js.download"></script>

<!-- CODEMIRROR COLOR MODE THEME: -->

<script src="./jitinspammer_files/htmlmixed.min.js.download"></script>
<script src="./jitinspammer_files/xml.min.js.download"></script>
<script src="./jitinspammer_files/css.min.js.download"></script>
<script src="./jitinspammer_files/javascript.min.js.download"></script>
<script src="./jitinspammer_files/active-line.min.js.download"></script>

<!--
TODO: 
http://codemirror.net/mode/htmlmixed/index.html
The HTML mixed mode depends on the XML, JavaScript, and CSS modes.
mode: mixedMode
-->

</body></html>