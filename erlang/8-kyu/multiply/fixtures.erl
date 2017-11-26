-module(bug_fix_tests).
-include_lib("eunit/include/eunit.hrl").

multiply_test_() ->
  {"multiply", [{"multiply(1, 1)", ?_assertEqual(1, bug_fix:multiply(1, 1))},
                {"multiply(2, 1)", ?_assertEqual(2, bug_fix:multiply(2, 1))},
                {"multiply(2, 2)", ?_assertEqual(4, bug_fix:multiply(2, 2))},
                {"multiply(3, 5)", ?_assertEqual(15, bug_fix:multiply(3, 5))}]}.

