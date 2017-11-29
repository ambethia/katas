module Tests = struct
    open OUnit
    let suite = [
        "is_palindrome" >:::
            [
                "works for empty lists" >:: (fun _ ->
                    assert_equal true (is_palindrome []);
                );
                "works for non-empty palindromes" >:: (fun _ ->
                    assert_equal true (is_palindrome [1;2;1]);
                );
                "works for non-empty non-palindromes" >:: (fun _ ->
                    assert_equal false (is_palindrome [1;2;3])
                );
            ]
        ]
    ;;
end