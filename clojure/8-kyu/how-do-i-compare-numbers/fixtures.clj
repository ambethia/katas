(ns how-do-i-compare-test
  (:require [clojure.test :refer :all]
            [how-do-i-compare :refer [what-is]]))

(deftest tests
  (are [x answer] (= (what-is x) answer)
    0 "nothing"
    123 "nothing"
    -1 "nothing"
    42 "everything"
    (* 42 42) "everything squared"
  ))