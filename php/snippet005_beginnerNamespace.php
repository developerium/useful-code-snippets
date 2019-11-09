<?php // #5 Beginner Namespaces
// Wrap your relevant logic in a namespace
// In future lessons, we will separate namespaces
// into separate folder, file structure
namespace App\Lib {
    const MY_CONST = 'App\Lib\MY_CONST';

    function MyFunction() {
        return __FUNCTION__;
    }
    class MyClass
    {
        static function AStaticFunction() {
            return __METHOD__;
        }
    }
}
// this code is executed in global namespace
namespace {
    echo \App\Lib\MY_CONST . "\n";
    echo \App\Lib\MyFunction() . "\n";
    echo \App\Lib\MyClass::AStaticFunction();
}
// github.com/developerium/useful-code-snippets