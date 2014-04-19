REM requires https://developers.google.com/closure/compiler/ 
"C:\Program Files\Java\jre7\bin\java.exe" -jar ../lib/compiler.jar --compilation_level=SIMPLE_OPTIMIZATIONS --js=../src/jqImpress.js --js=../src/Dominos.js --js_output_file=../jqImpress.library.min.js

"C:\Program Files\Java\jre7\bin\java.exe" -jar ../lib/compiler.jar --compilation_level=WHITESPACE_ONLY --formatting=pretty_print --js=../src/jqImpress.js --js=../src/Dominos.js --js_output_file=../jqImpress.library.js

